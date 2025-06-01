FROM oven/bun:1.0.35

WORKDIR /app

COPY ./apps/backend/package.json .
COPY ./apps/backend/prisma ./prisma

RUN bun install

RUN bunx prisma generate

# No copiamos el código fuente aquí, se montará como volumen
EXPOSE 4000

ENV CHOKIDAR_USEPOLLING=true

CMD ["bun", "run", "dev"] 