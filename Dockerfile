FROM python

WORKDIR /app 

COPY index.html              \
    package-lock.json       \
    package.json            \
    vite.config.js          \
    /app/

RUN mkdir /app/src
COPY src/ /app/src

RUN apt-get update
RUN apt-get install -y curl sudo
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN apt-get install -y nodejs

RUN npm install

EXPOSE 5000

CMD npm run dev -- --host