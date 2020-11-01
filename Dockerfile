FROM node:lts-alpine

# instala um servidor http simples para servir conteúdo estático
RUN npm install -g @vue/cli

# faz da pasta 'app' o diretório atual de trabalho
WORKDIR /app/ground-station

# copia os arquivos 'package.json' e 'package-lock.json' (se disponível)
COPY ./ground-station/package.json ./

# # copia arquivos e pastas para o diretório atual de trabalho (pasta 'app')
COPY ./ground-station ./

# instala dependências do projeto
RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
