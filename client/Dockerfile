FROM node:18-alpine

WORKDIR /usr/src/web

COPY package.json ./

RUN npm install
RUN npm i @nextui-org/react framer-motion


COPY . .

CMD ["npm", "run", "dev"]