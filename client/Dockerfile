FROM node:18-alpine

WORKDIR /usr/src/web

COPY package.json ./

RUN npm install


COPY . .

CMD ["npm", "run", "dev"]