
# Stage 1: Build the SSR Angular app
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./
COPY . .

RUN npm ci --legacy-peer-deps

# Baue SSR-Bundle
RUN npx nx build one-platform --configuration=production --verbose



# Stage 2: Run SSR Node server
FROM node:20-alpine
WORKDIR /app

# Kopiere das gesamte SSR-Build-Output und package.json
COPY --from=builder /app/dist/one-platform /app/dist/one-platform
COPY --from=builder /app/package*.json ./

EXPOSE 4000
CMD ["node", "dist/one-platform/server/main.js"]
