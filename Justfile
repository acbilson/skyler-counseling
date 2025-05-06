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
