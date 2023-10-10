FROM node:current-alpine
ENV MY_SQL_DB_HOST=db
COPY ./ ./
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]