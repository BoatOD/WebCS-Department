# server/Dockerfile
FROM node:16-alpine

WORKDIR /app/server

COPY package.json package-lock.json ./

RUN npm install
RUN npm install pg
RUN npm install -g nodemon --unsafe-perm

COPY . /app/server

EXPOSE 8080

CMD ["npm", "run", "dev"]
