set dotenv-load
set shell := ["/opt/homebrew/bin/fish", "-c"]

# runs a simple ansible ad-hoc command to test the connection
test-connection:
	ansible -i deploy/prod.ini --vault-password-file=deploy/.vault_pass -u abilson vultr -m ping

# edits the encrypted ansible group variables
edit-vault:
	ansible-vault edit --vault-password-file=deploy/.vault_pass deploy/group_vars/web/vault.yml

# runs the ansible deployment playbook
deploy:
	ansible-playbook -i deploy/prod.ini --vault-password-file=deploy/.vault_pass --skip-tags onetime deploy/deploy.yml

# build the local Podman container ui image
build_ui:
	cd ui; podman build -t acbilson/skyler-counseling-ui:0.1 -t acbilson/skyler-counseling-ui:latest .

# build the local Podman container api image
build_api:
	cd api; podman build -t acbilson/skyler-counseling:0.1 -t acbilson/skyler-counseling:latest .

# starts the production image with nginx server
start: start_nginx
  podman run --rm \
  --expose 4200 -p 4200:4200 \
  -v /Users/alexbilson/source/skyler-counseling/api/db:/mnt/db \
  --name skyler-counseling \
  acbilson/skyler-counseling:latest

# starts an nginx server to serve static and media assets
start_nginx:
  podman run --rm -d \
  --expose 4999 -p 4999:80 \
  --name skyler-counseling-nginx \
  acbilson/skyler-counseling-ui:latest

# copies images for nginx to serve
[private]
copy_images:
	cp -r img dist/browser/img

