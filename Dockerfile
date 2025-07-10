# Stage 1: Build the Angular app
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./
# Kopiere den gesamten Workspace (außer node_modules und dist)
COPY . .

RUN npm ci

# Baue mit verbose-Flag für mehr Debug-Output
RUN npx nx build one-platform --configuration=production --verbose || (echo "\n==== NX BUILD FAILED ====" && cat /app/nx-error.log 2>/dev/null || true && exit 1)

# Zeige den Inhalt des Build-Outputs
RUN echo "=== BUILD OUTPUT CHECK ===" && ls -la /app/dist/one-platform/browser || echo "Build output missing!"

# Stage 2: Serve with Nginx
FROM nginx:1.25-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/one-platform/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
