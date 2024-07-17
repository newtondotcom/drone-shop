FROM node:lts as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g bun
RUN bun i
COPY . ./
RUN yarn run build

FROM nginx:stable-alpine3.17
LABEL Developers="Robin Augereau"
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]