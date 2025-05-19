FROM docker.io/library/node:latest as build

# storing node_modules in a separate layer
COPY package.json package-lock.json ./
RUN npm ci && mkdir /app && mv ./node_modules ./app
WORKDIR /app
COPY . .

# build the app
RUN npm run build

FROM docker.io/library/nginx:latest

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to the Nginx html directory
COPY --from=build /app/dist /srv/dist

# adds static images
COPY public/* /srv/dist/skyler-counseling/browser/

CMD ["nginx", "-g", "daemon off;"]
