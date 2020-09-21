FROM node:11.12.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

# RUN npm install -g @angular/cli
RUN npm install

COPY . /usr/src/app

CMD ng serve --host 0.0.0.0 --port 4500
