FROM node:18

RUN npm install -g pnpm

WORKDIR /app
COPY . /app/
RUN pnpm install
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "dev"]