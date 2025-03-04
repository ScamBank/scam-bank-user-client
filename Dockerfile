FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm prune --production

EXPOSE 1337

CMD ["npm", "run", "prod"]