FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

EXPOSE 1337

CMD ["npm", "run", "prod"]