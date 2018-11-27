FROM node:10.13.0-alpine AS source

WORKDIR /app/

COPY ./build/ ./build/
COPY ./server/ ./server/
COPY ./package.json ./
