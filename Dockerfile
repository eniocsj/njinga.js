FROM  debian:stable
RUN apt update && apt -y upgrade && apt -y install nodejs && mkdir -p /home/node/app/node_modules && chown -R root:root /home/node/app
WORKDIR /home/node/app
# Install app dependencies
COPY package*.json ./
USER root
RUN npm install
COPY --chown=root:root . .
EXPOSE 8080
ENV PORT=8080
CMD [ "node", "index.js" ]