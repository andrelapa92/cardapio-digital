FROM node:18

# Instala dependência para o wait-for-it
RUN apt-get update && apt-get install -y netcat-openbsd curl

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Copia o script wait-for-it (você vai criar esse arquivo na pasta backend)
COPY wait-for-it.sh /usr/local/bin/wait-for-it
RUN chmod +x /usr/local/bin/wait-for-it

# Expõe a porta da API
EXPOSE 3000

# Comando padrão (mas será sobrescrito pelo docker-compose)
CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/server.ts"]
