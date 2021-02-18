FROM node:10-alpine

RUN mkdir -p /app && chown -R node:node /app

WORKDIR /app

COPY package*.json /app/

USER node

RUN npm install

COPY --chown=node:node . .

CMD [ "node", "./bin/www" ]