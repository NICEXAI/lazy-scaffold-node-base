FROM node:16 as build

WORKDIR /

COPY . .

RUN npm config set registry https://registry.npmmirror.com && \
    npm i -g npm@latest && \
    npm i && \
    npm run build

FROM node:16 as prod

COPY --from=build ./dist /app

WORKDIR /app

CMD ["node", "app.js"]
