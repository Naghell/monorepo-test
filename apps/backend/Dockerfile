FROM oven/bun:1.0.35

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY . .

EXPOSE 4000

CMD ["bun", "run", "dev"] 