FROM node:16
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci 

ENV DEBUG=backend:*

USER node

EXPOSE 8080

CMD npm start