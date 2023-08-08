# client/Dockerfile
FROM node:16-alpine

WORKDIR /app/client

COPY package.json yarn.lock ./
RUN yarn install

COPY next.config.js ./next.config.js

COPY . /app/client

CMD ["yarn", "dev"]
