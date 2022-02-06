FROM node:14
WORKDIR /app

RUN mkdir /app/logs

COPY . /app/logs

COPY package.json .

RUN npm install
COPY ./dist ./src
CMD ["node", "src/main.js"]