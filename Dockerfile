FROM node:12.12.0-alpine

ENV CHOKIDAR_USEPOLLING true

WORKDIR /kaufmannmarton.dev

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]