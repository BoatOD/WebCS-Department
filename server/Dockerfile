# server/Dockerfile
FROM node:16-alpine

WORKDIR /app/server

COPY package.json package-lock.json ./

RUN npm install
RUN npm install -g nodemon --unsafe-perm
RUN npm install mongoose

COPY . /app/server

EXPOSE 8080

CMD ["npm", "run", "dev"]
