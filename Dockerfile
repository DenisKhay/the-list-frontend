FROM node:10.13.0-alpine

WORKDIR /app/

COPY ./build/ ./build/
COPY ./server/ ./server/
COPY ./package*.json ./
ENV NODE_ENV=production
RUN ls -al -R && npm ci && npm list -depth=0

EXPOSE 4000

CMD ['node', 'server']
