# Building app
FROM node:14-alpine as build
WORKDIR /app
COPY . .
RUN yarn install --silent
ENTRYPOINT yarn start
EXPOSE 8081
