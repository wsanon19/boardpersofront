#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli 
CMD ng build

#stage 2
FROM nginx:alpine
COPY --from=node /dist/board_perso /usr/share/nginx/html

