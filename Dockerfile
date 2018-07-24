FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install --save
CMD npm start
