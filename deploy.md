# Deploy to AWS EC2

1. Create user deploy on server

```
sudo adduser deploy
sudo passwd deploy
sudo usermod -aG wheel deploy
sudo nano /etc/sudoers
%deploy ALL=(ALL) ALL
# %deploy ALL=NOPASSWD:/bin/systemctl start puma
# %deploy ALL=NOPASSWD:/bin/systemctl restart puma
# %deploy ALL=NOPASSWD:/bin/systemctl start puma_wataridori_production
# %deploy ALL=NOPASSWD:/bin/systemctl restart puma_wataridori_production
```

2. Add .ssh/authorized_keys

## On server

```
su - deploy
mkdir .ssh
sudo chmod 700 -R .ssh
ssh-keygen -t rsa
cat id_rsa.pub >> authorized_keys
sudo chmod 600 ~/.ssh/authorized_keys
```

## On local

```
# On local project
mkdir .ssh
vi .ssh/wataridori_server.pem # (add private key)
sudo chmod 400 .ssh/wataridori_server.pem
ssh -i .ssh/wataridori_server.pem deploy@<IP_ADDRESS>
```

3. Install environment

## Setup Ruby and Rails

https://gorails.com/setup/ubuntu/20.04

## Install Mysql

```
sudo apt-get install mysql-server
sudo mysql_secure_installation
```

## Install PostgreSQL

```
sudo apt-get install postgresql postgresql-contrib libpq-dev
sudo -u postgres createuser -s username
sudo -u postgres psql
postgres=# \password new_password
sudo -u postgres createdb -O username database_name
```

4. Create folder `/var/www`

```
sudo mkdir /var/www
sudo chown -R deploy:deploy /var/www/
mkdir /var/www/wataridori/shared/config/
vi /var/www/wataridori/shared/config/secrets.yml
vi /var/www/wataridori/shared/config/database.yml
```

5. Setup Nginx

```
sudo apt update
sudo apu install nginx
sudo rm /etc/nginx/sites-enabled/default
sudo nano /etc/nginx/conf.d/default.conf
# and copy code from /nginx/conf.d/default.conf
sudo systemctl status nginx
sudo systemctl restart nginx
```

6. Setup Puma

```
sudo touch /etc/systemd/system/puma.service
sudo vi /etc/systemd/system/puma.service
# and copy code from /puma/puma_wataridori.service
sudo systemctl daemon-reload
sudo systemctl enable puma
sudo systemctl restart puma
```

7. Setup Capistrano

- 7.1. Add Gem

```
gem "bcrypt_pbkdf"
gem "capistrano3-puma"
gem "capistrano"
gem "capistrano-bundler", require: false
gem "capistrano-rails", require: false
gem "capistrano-rbenv", require: false
gem "ed25519"
```

- 7.2. Run `bundle exec cap install`

- 7.3. Config `Capfile`

```
require "capistrano/rbenv"
require "capistrano/puma"
require "capistrano/bundler"
require "capistrano/rails/migrations"

install_plugin Capistrano::Puma::Systemd
```

- 7.4. Config `config/deploy.rb`

```
lock "~> 3.17.1"

set :application, "wataridori"
set :repo_url, "git@github.com:dangxuanphuc/wataridori.git"

set :ssh_options, { forward_agent: true }

set :pty, true
set :linked_files, %w[config/database.yml config/secrets.yml]
set :linked_dirs, %w[log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system public/uploads]
set :keep_releases, 5
set :rbenv_ruby, "3.0.2"

set :puma_rackup, -> { File.join(current_path, "config.ru") }
set :puma_state, -> { "#{shared_path}/tmp/pids/puma.state" }
set :puma_pid, -> { "#{shared_path}/tmp/pids/puma.pid" }
set :puma_bind, -> { "unix://#{shared_path}/tmp/sockets/#{fetch(:application)}-puma.sock" }
set :puma_conf, -> { "#{shared_path}/puma.rb" }
set :puma_access_log, -> { "#{shared_path}/log/puma_access.log" }
set :puma_error_log, -> { "#{shared_path}/log/puma_error.log" }
set :puma_role, :app
set :puma_threads, [0, 8]
set :puma_workers, 0
set :puma_worker_timeout, nil
set :puma_init_active_record, true
set :puma_preload_app, false

namespace :deploy do
  desc "Restart Puma"
  task :restart_puma do
    on roles(:app), in: :sequence, wait: 5 do
      execute :sudo, :systemctl, :restart, :puma
    end
  end

  after :finishing, :restart_puma
end
```

- 7.5. Config `config/deploy/production.rb`

```
set :state, :production
set :rails_env, :production
set :deploy_to, "/var/www/wataridori"
server "18.207.210.48", user: "deploy", roles: %w[web app db]
set :branch, "master"
```

8. Config assets compile on production if css not working
```
# config/environments/production.rb
config.assets.compile = true
```

9. Deploy

- Start Puma `cap staging puma:start`
- Deploy `cap production deploy`
- Precompile: `RAILS_ENV=production rails assets:precompile`
