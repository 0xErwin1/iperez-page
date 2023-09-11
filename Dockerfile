FROM node:18.16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . /app

ENV PORT 3000
ENV REACT_APP_GITHUB_TOKEN ${REACT_APP_GITHUB_TOKEN}

EXPOSE 3000

RUN yarn build

CMD [ "yarn", "start" ]
