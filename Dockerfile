# 1. Build the React app
FROM node:14.17.0-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# 2. Serve the React app using Node.js
FROM node:14.17.0-alpine

WORKDIR /app

# 설치된 node_modules와 빌드된 파일을 복사
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/package.json /app/package.json

# 서버 파일을 복사
COPY server.js /app/server.js

EXPOSE 80

# 서버 시작
CMD ["node", "server.js"]
