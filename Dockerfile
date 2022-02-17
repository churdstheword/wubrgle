
# syntax=docker/dockerfile:1
FROM node:16-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
EXPOSE 3000
CMD ["npm", "run", "start"]
