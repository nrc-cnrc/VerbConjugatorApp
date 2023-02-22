# Tutorials followed: 
#   - https://blog.knoldus.com/deployment-with-docker-in-ionic/
#   - https://tritondatacenter.com/blog/video-training-dockerize-applications 

#FROM here is the base image to build application (node.js)
FROM node:14-alpine as build 



# Node.js is a software platform for scalable server-side and networking applications. Node.js applications are written in JavaScript and can be run within the Node.js runtime on Mac OS X, Windows, and Linux without changes.
# This image is based on the Alpine Linux project and is much smaller than most distribution base images (~5MB).


ENV IONIC_VERSION 6.20.4

# ENV DEBIAN_FRONTEND=noninteractive \
#     ANDROID_HOME=/opt/android-sdk-linux \
#     NODE_VERSION=10.13.0 \
#     NPM_VERSION=6.4.1 \
#     IONIC_VERSION=4.3.1 \
#     CORDOVA_VERSION=8.1.2\
#     GRADLE_VERSION=4.10.2



# The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile.
WORKDIR /app

# Copies package.json (& package-lock) into working directory
COPY package*.json /app/  

# Installs ionic and project dependencies
RUN npm install -g @ionic/cli@${IONIC_VERSION}

RUN npm install

# Copy app contents from the root directory to app directory.
COPY ./ /app/


# Translation of ng build –prod. It creates a www folder of our project, which we will be using to deploy to nginx.
RUN npm run-script build


#FROM here is the base image to run application (nginx)
FROM nginx:alpine

# Remove everything from nginx html and replace it with app build www/ folder
RUN rm -rf /usr/share/nginx/html/*




RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/www/ /usr/share/nginx/html/





