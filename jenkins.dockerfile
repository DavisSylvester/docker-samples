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

RUN java -version

RUN sudo apt update && sudo apt install jenkins -y

RUN sudo ufw allow 8080

RUN sudo cat /var/lib/jenkins/secrets/initialAdminPassword




# docker run --name jenkins-docker --rm --detach --privileged --network jenkins  \
# --network-alias docker --env DOCKER_TLS_CERTDIR=/certs --volume jenkins-docker-certs:/certs/client  \
# --volume jenkins-data:/var/jenkins_home  --publish 2376:2376 docker:dind --storage-driver overlay2