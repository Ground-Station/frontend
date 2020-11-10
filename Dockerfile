FROM node:lts-alpine

# instala um servidor http simples para servir conteúdo estático
RUN npm install -g @vue/cli

# faz da pasta 'app' o diretório atual de trabalho
WORKDIR /app

# copia os arquivos 'package.json' e 'package-lock.json' (se disponível)
COPY ./ground-station/package*.json ./

# instala dependências do projeto
RUN npm install

# # copia arquivos e pastas para o diretório atual de trabalho (pasta 'app')
COPY ./ground-station .

EXPOSE 8080
# MD ["http-server", "dist" ]
CMD [ "npm", "run", "serve" ]
