# Etapa 1 — Build da aplicação com Node
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2 — Servindo com Nginx
FROM nginx:stable-alpine

# Copia o build do Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Copia configuração customizada do Nginx (se quiser)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
