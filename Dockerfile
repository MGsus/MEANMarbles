FROM node:10.16.0

WORKDIR /app

# Update packages and install dependency packages for services
RUN apt-get update \
    && apt-get dist-upgrade -y \
    && apt-get clean \
    && echo 'Finished installing dependencies'

COPY package.json .

# Installing production packages
RUN npm i -g @angular/cli@~8.3.15 typescript@~3.5.3
RUN npm i

COPY /client /app/client/
COPY . .
RUN tsc -p ./server && ng build --aot --prod

EXPOSE 3000

CMD [ "npm", "start" ]
