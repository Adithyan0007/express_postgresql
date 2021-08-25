FROM node:15

WORKDIR /app

EXPOSE 3002

RUN npm i npm@latest -g

COPY package.json ./

RUN npm install --no-optional && npm cache clean --force

COPY . .

CMD ["node","server.js" ]

FROM express_postgres

COPY database.sql / docker-entrypoint-initdb.d/




