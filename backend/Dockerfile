FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos
COPY package*.json ./
RUN npm install

# Copia todo o restante do código
COPY . .

# Expõe a porta da API
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/server.ts"]