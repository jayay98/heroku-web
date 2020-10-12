FROM node:alpine
WORKDIR /app

COPY package-lock.json package.json /app/
RUN npm i

COPY src /app/src
EXPOSE 1337
CMD [ "node", "src/server.js" ]