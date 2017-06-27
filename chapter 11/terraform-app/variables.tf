variable "public_key_path" {
default = "ms-cna.pub"
}

variable "key_name" {
  description = "Desired name of AWS key pair"
  default = "ms-cna"
}

variable "key_file_path" {
  description = "Private Key Location"
  default = "~/.ssh/ms-cna"
}

variable "vpc_cidr"{
  default = "10.127.0.0/16"
}

variable "subnet_cidr"{
  default = "10.127.0.0/24"
}


variable "aws_region" {
  description = "AWS region to launch servers."
  default = "us-east-1"
}


# Ubuntu Precise 12.04 LTS (x64)
variable "aws_amis" {
  default = {
    eu-west-1 = "ami-b1cf19c6"
    us-east-1 = "ami-0a92db1d"
    #us-east-1 = "ami-e881c6ff"
    us-west-1 = "ami-3f75767a"
    us-west-2 = "ami-21f78e11"
  }
}


variable "aws_access_key" {
  description = "AWS access key"
  default = ""
}

variable "aws_secret_key" {
  description = "AWS secret access key"
  default = ""
}
