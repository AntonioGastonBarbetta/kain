# kain-ui v1.0
Kain passwords front-end.

### OS Update
Update Operating System packages and install dependencies:
``` bash
sudo su -
apt update
apt-get install nodejs npm
apt-get install build-essential nginx
```

### Installation
Install the application using `npm`.
``` bash
cd $root
npm install -S
npm run build .
```

### Nginx
Install Flask application into nginx service.
```bash
sudo su -
echo "
server {
  listen 80 default_server;
  listen [::]:80 default_server ipv6only=on;
  client_max_body_size 2m;
  root /home/ubuntu/kain;
  index index.html;
  location @rewrites {
    rewrite ^(.+)$ /index.html last;
  }
}
" > /etc/nginx/sites-available/kain-http
echo "
server {
  listen 443 ssl default_server;
  listen [::]:443 default_server ipv6only=on;
  client_max_body_size 2m;
  ssl on;
  ssl_certificate /home/ubuntu/martincastroalvarez.crt;
  ssl_certificate_key /home/ubuntu/martincastroalvarez.key;
  root /home/ubuntu/kain;
  index index.html;
  location @rewrites {
    rewrite ^(.+)$ /index.html last;
  }
}
" > /etc/nginx/sites-available/kain-https
ln -sf /etc/nginx/sites-available/kain-http /etc/nginx/sites-enabled
ln -sf /etc/nginx/sites-available/kain-https /etc/nginx/sites-enabled
rm /etc/nginx/sites-enabled/default
rm /etc/nginx/sites-available/default
```
Restart system services to apply all changes.
```bash
sudo service nginx restart
```
Search the logs for messages.
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Tests
After installing and building the application, you
can serve hot-reload app at `http://localhost:8080/`.
``` bash
npm run dev
```
