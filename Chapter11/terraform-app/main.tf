#Author: Manish Sethi
# Specify the provider and access details
provider "aws" {
  region = "${var.aws_region}"
  access_key = "${var.aws_access_key}"
  secret_key = "${var.aws_secret_key}"
}

# Create a VPC to launch our instances into
resource "aws_vpc" "default" {
  cidr_block = "${var.vpc_cidr}"
  enable_dns_hostnames = true
  tags {
    Name = "ms-cloud-native-app"
  }
}

# Create an internet gateway to give our subnet access to the outside world
resource "aws_internet_gateway" "default" {
  vpc_id = "${aws_vpc.default.id}"
}

# Grant the VPC internet access on its main route table
resource "aws_route" "internet_access" {
  route_table_id         = "${aws_vpc.default.main_route_table_id}"
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = "${aws_internet_gateway.default.id}"
}

# Create a subnet to launch our instances into
resource "aws_subnet" "default" {
  vpc_id                  = "${aws_vpc.default.id}"
  cidr_block              = "${var.subnet_cidr}"
  map_public_ip_on_launch = true
}


# A security group for the ELB so it is accessible via the web
resource "aws_security_group" "elb" {
  name        = "cna_sg_elb"
  description = "Security_group_elb"
  vpc_id      = "${aws_vpc.default.id}"

  # HTTP access from anywhere
  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # outbound internet access
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

}

# Our default security group to access
# the instances over SSH and HTTP
resource "aws_security_group" "default" {
  name        = "cna-sg-ec2"
  description = "Security group of app servers"
  vpc_id      = "${aws_vpc.default.id}"

  # SSH access from anywhere
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # HTTP access from the VPC
  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["${var.vpc_cidr}"]
  }

  # outbound internet access
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "mongodb" {
  name        = "cna-sg-mongodb"
  description = "Security group of mongodb server"
  vpc_id      = "${aws_vpc.default.id}"

  # SSH access from anywhere
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # HTTP access from the VPC
  ingress {
    from_port   = 27017
    to_port     = 27017
    protocol    = "tcp"
    cidr_blocks = ["${var.vpc_cidr}"]
  }
  # HTTP access from the VPC
  ingress {
    from_port   = 28017
    to_port     = 28017
    protocol    = "tcp"
    cidr_blocks = ["${var.vpc_cidr}"]
  }

  # outbound internet access
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_elb" "web" {
  name = "cna-elb"

  subnets         = ["${aws_subnet.default.id}"]
  security_groups = ["${aws_security_group.elb.id}"]
  instances       = ["${aws_instance.web.*.id}"]
  listener {
    instance_port = 5000
    instance_protocol = "http"
    lb_port = 80
    lb_protocol = "http"
  }
}

resource "aws_key_pair" "auth" {
  key_name   = "${var.key_name}"
  public_key = "${file(var.public_key_path)}"
}

resource "aws_instance" "web" {
  # The connection block tells our provisioner how to
  # communicate with the resource (instance)
  connection {
    # The default username for our AMI
    user = "ubuntu"
    key_file = "${var.key_file_path}"
    timeout = "5m"
  }
  # Tags for machine
  tags {Name = "cna-web"}
  instance_type = "t2.micro"
  # Number of EC2 to spin up
  count = "1"
  ami = "${lookup(var.aws_amis, var.aws_region)}"
  iam_instance_profile = "CodeDeploy-Instance-Role"
  # The name of our SSH keypair we created above.
  key_name = "${aws_key_pair.auth.id}"

  # Our Security group to allow HTTP and SSH access
  vpc_security_group_ids = ["${aws_security_group.default.id}"]
  subnet_id = "${aws_subnet.default.id}"
}
resource "aws_instance" "mongodb" {
  # The connection block tells our provisioner how to
  # communicate with the resource (instance)
  connection {
    # The default username for our AMI
    user = "ubuntu"
    private_key = "${file(var.key_file_path)}"
    timeout = "5m"
    # The connection will use the local SSH agent for authentication.
  }
  # Tags for machine
  tags {Name = "cna-web-mongodb"}
  instance_type = "t2.micro"
  # Number of EC2 to spin up
  count = "1"
  # Lookup the correct AMI based on the region
  # we specified
  ami = "${lookup(var.aws_amis, var.aws_region)}"
  iam_instance_profile = "CodeDeploy-Instance-Role"
  # The name of our SSH keypair we created above.
  key_name = "${aws_key_pair.auth.id}"

  # Our Security group to allow HTTP and SSH access
  vpc_security_group_ids = ["${aws_security_group.mongodb.id}"]

  subnet_id = "${aws_subnet.default.id}"
  provisioner "remote-exec" {
    inline = [
      "sudo echo -ne '\n' | apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10",
      "echo 'deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse' | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list",
      "sudo apt-get update -y && sudo apt-get install mongodb-org --force-yes -y",
    ]
  }

}
