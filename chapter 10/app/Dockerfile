FROM ubuntu:14.04
MAINTAINER Manish Sethi<manish@sethis.in>
 
# no tty
ENV DEBIAN_FRONTEND noninteractive
 
# get up to date
RUN apt-get -qq update --fix-missing
 
# Bootstrap the image so that it includes all of our dependencies
RUN apt-get -qq install python3  python-dev python-virtualenv python3-pip --assume-yes
RUN sudo apt-get install build-essential autoconf libtool libssl-dev libffi-dev --assume-yes
# Setup locale
RUN export LC_ALL=en_US.UTF-8
RUN export LANG=en_US.UTF-8
RUN export LANGUAGE=en_US.UTF-8
 
# copy the contents of the cloud-native-app(i.e. complete application) folder into the container at build time
COPY cloud-native-app/ /app/
 
# Create Virtual environment
RUN mkdir -p /venv/
RUN virtualenv /venv/ --python=python3
 
# Python dependencies inside the virtualenv
RUN /venv/bin/pip3 install -r /app/requirements.txt
 
# expose a port for the flask development server
EXPOSE 5000
 
# Running our flask application 
CMD cd /app/ && /venv/bin/python app.py

