FROM node

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 6000

CMD [ "npm", "run", "dev"]