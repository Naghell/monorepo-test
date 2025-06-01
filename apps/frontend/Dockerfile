FROM node:20-alpine

WORKDIR /app

COPY ./apps/frontend/package*.json ./

RUN npm install

# No copiamos el código fuente aquí, se montará como volumen
EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1
ENV WATCHPACK_POLLING true

CMD ["npm", "run", "dev"]