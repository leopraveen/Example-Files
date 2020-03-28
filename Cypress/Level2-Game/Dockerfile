FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y apache2 && \
    apt-get install -y vim net-tools dnsutils npm && \
    apt-get install -y git && \
    apt-get clean


ADD ./ /var/www/html

WORKDIR /var/www/html

RUN npm install

CMD npm run dev

EXPOSE 80
