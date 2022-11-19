#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli 
CMD npm start
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/board-perso /usr/share/nginx/html