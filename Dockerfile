FROM node
WORKDIR /src
COPY . ./
RUN npm install -f && npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=0 /src/nginx/nginx.conf /etc/nginx/
COPY --from=0 /src/nginx/app.conf /etc/nginx/conf.d
COPY --from=0 /src/build /usr/share/nginx/html
EXPOSE 80
