FROM node:latest as builder
WORKDIR /app
COPY . /app
RUN yarn install && yarn build

FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html
