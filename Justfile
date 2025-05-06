set dotenv-load
set shell := ["/opt/homebrew/bin/fish", "-c"]

# runs a simple ansible ad-hoc command to test the connection
test-connection:
	ansible -i ansible/prod.ini --vault-password-file=ansible/.vault_pass -u abilson vultr -m ping

# edits the encrypted ansible group variables
edit-vault:
	ansible-vault edit --vault-password-file=ansible/.vault_pass ansible/group_vars/web/vault.yml

# copies files to the remote server
[private]
init_deploy:
	scp -r src/* abilson@vultr:/srv/blackhillsfoodtruck.com/

# runs the ansible deployment playbook
deploy: init_deploy
	ansible-playbook -i ansible/prod.ini --vault-password-file=ansible/.vault_pass --skip-tags onetime ansible/deploy.yml

# build a local Podman container image
build:
	podman build -t abilson/skyler-counseling:0.1 -t abilson/skyler-counseling:latest --file Dockerfile .

# starts the production image with nginx server
start: start_nginx
  podman run --rm \
  --expose 4200 -p 4200:4200 \
  -v /Users/alexbilson/source/skyler-counseling/api/db:/mnt/db \
  --name skyler-counseling \
  acbilson/skyler-counseling:latest

# starts an nginx server to serve static and media assets
[private]
start_nginx:
  podman run --rm -d \
  --expose 5000 -p 5000:80 \
  -v /Users/alexbilson/source/skyler-counseling/mnt:/usr/share/nginx/html:ro \
  --name skyler-counseling-nginx \
  nginx:latest
