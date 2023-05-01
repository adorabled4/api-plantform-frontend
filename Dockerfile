FROM node:16.12.0-alpine

#WORKDIR /app

COPY dist/package.json yarn.lock ./

RUN yarn install --production && yarn cache clean --force

COPY dist/ ./dist/

EXPOSE 8000

CMD ["yarn", "start"]
