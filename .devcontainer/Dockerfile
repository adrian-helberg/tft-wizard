FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN apk add --no-cache git
RUN npm install --global --unsafe-perm npm @vue/cli @vue/cli-service-global
RUN npm install
EXPOSE 8080