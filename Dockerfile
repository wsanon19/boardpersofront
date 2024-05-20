#stage 1
FROM node:latest as node
WORKDIR /app
COPY ./package.json .
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build

#stage 2
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
COPY --from=node /app/dist/board-perso .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]