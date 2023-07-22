FROM node:16
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN --mount=type=secret,id=DATABASE_URL \
    DATABASE_URL="$(cat /run/secrets/DATABASE_URL)"

RUN --mount=type=secret,id=SECRET \
    SECRET="$(cat /run/secrets/SECRET)"

RUN npm ci 

ENV DEBUG=backend:*

USER node

EXPOSE 8080

CMD npm start