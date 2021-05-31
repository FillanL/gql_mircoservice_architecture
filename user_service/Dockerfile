FROM node:14
# RUN Node:14
ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install typescript -g

RUN npx tsc -p ./tsconfig.json
ENV PORT=8081

CMD ["npm", "start"]