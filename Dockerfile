FROM node:12.12.0-alpine

ARG CHOKIDAR_USEPOLLING_ARG=false
ARG JSON_BOX_ID_ARG
ARG SIMPLE_FORM_ID_ARG
ARG PORT_ARG=3000
ARG HOST_ARG=http://localhost:3000

ENV CHOKIDAR_USEPOLLING $CHOKIDAR_USEPOLLING_ARG
ENV JSON_BOX_ID $JSON_BOX_ID_ARG
ENV SIMPLE_FORM_ID $SIMPLE_FORM_ID_ARG
ENV HOST $HOST_ARG

WORKDIR /kaufmannmarton.dev

COPY . .

RUN yarn

EXPOSE $PORT_ARG

CMD ["yarn", "start"]
