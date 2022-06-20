FROM node:14-alpine as build

# ENV IONIC_VERSION 6.2.0

WORKDIR /app
COPY package*.json /app/
# RUN npm install -g ionic@${IONIC_VERSION}
RUN npm install -g ionic
RUN npm install
COPY ./ /app/
RUN npm run-script build
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/www/ /usr/share/nginx/html/