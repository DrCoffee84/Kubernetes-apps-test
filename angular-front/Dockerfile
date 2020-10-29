# stage 1
FROM node:alpine AS angular-front-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=angular-front-build /app/dist/angular-front /usr/share/nginx/html
EXPOSE 80
