# Use the official Node.js:lst runtime as a base image
FROM ubuntu:latest

# Install nvm with node and npm
RUN apt update
RUN apt -y install nodejs
RUN apt -y install nodejs npm
# RUN npm install -g aws-cdk@2.0
RUN npm -g install typescript
RUN npm -g install aws-cdk
RUN npm -g install --save-dev jest @types/jest
# RUN npm install -g aws-cdk-lib
# RUN npm install -g ts-node@10.9.2 --save-devssss
# RUN npm i -g @aws-cdk/aws-ec2
# RUN npm install -g ts-node --save-dev
# RUN npm install typescript -g 
# RUN npm install -g typescript --save-dev