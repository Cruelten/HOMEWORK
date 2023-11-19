FROM node:18.14.2

WORKDIR /mainapp

COPY package*.json ./
RUN npm install
COPY index.js ./
COPY /middleware ./middleware
COPY /public ./public
COPY /routes ./routes
COPY /views ./views

CMD ["npm", "run", "start"]