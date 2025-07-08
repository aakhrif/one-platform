# Stage 1: Build the Angular app
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npx nx build one-platform --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:1.25-alpine
COPY --from=builder /app/dist/apps/one-platform /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
