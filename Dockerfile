FROM node:latest
WORKDIR /app
COPY package.json /app/
RUN yarn
COPY . /app
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]