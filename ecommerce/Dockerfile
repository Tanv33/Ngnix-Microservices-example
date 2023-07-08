FROM node:16

WORKDIR /usr/src/app/ecommerce

COPY package*.json ./

RUN npm install

COPY . .

# EXPOSE 7000

CMD ["npm","start"]