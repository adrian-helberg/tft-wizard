FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install --global --unsafe-perm npm @vue/cli webpack webpack-cli
RUN  npm install
EXPOSE 8080