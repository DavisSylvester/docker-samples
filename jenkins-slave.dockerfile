FROM ubuntu:latest
RUN sudo apt update -y
RUN sudo apt upgrade -y
RUN sudo apt install -y gpg
RUN curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null

RUN echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

RUN sudo apt-get install openjdk-11-jdk -y
RUN sudo mkdir /var/jenkins
RUN sudo apt install gnome-terminal -y
RUN sudo 