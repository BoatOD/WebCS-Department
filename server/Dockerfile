# server/Dockerfile
FROM node:16-alpine

WORKDIR /app/server

COPY package.json package-lock.json ./

RUN npm install

COPY . /app/server

EXPOSE 8080

CMD ["npm", "start"]
