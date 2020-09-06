FROM node:alpine
WORKDIR /app
COPY package.json /app/package.json
RUN yarn install --silent
COPY . /app
CMD ["yarn", "start"]