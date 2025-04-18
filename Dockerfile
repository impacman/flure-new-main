FROM node:lts AS build

ENV SRC /app
ARG NODE_AUTH_TOKEN

WORKDIR $SRC

ADD ./.npmrc $SRC/.npmrc
ADD ./package.json $SRC/package.json
ADD ./package-lock.json $SRC/package-lock.json
ADD ./astro.config.mjs $SRC/astro.config.mjs
RUN npm install

ADD ./cert $SRC/cert
ADD ./src $SRC/src
ADD ./server $SRC/server
ADD ./public $SRC/public

RUN npm run build
RUN apt-get update && apt-get install -y dumb-init 

EXPOSE 80 443

ENTRYPOINT [ "/usr/bin/dumb-init", "--" ]
CMD [ "node", "./server/server.js" ]
