FROM node:18-slim
WORKDIR /app

RUN <<eot bash -e
  apt update
  mkdir -p /app/.next
  chmod a+rwx /app/.next
  chown node:node /app /home/node /app/.next
eot
USER node

EXPOSE 3000 3001
CMD [ "dev", "--port", "3000"]
