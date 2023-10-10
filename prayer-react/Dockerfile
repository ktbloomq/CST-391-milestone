FROM node:current-alpine
# ENV REACT_APP_API_SOURCE=http://api
COPY ./ ./
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]