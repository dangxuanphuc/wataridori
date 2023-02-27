lock "~> 3.17.2"

set :application, "wataridori"
set :repo_url, "git@github.com:dangxuanphuc/wataridori.git"

set :deploy_to, "/home/deploy/#{fetch :application}"

append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "vendor/bundle", ".bundle", "public/system", "public/uploads"

set :keep_releases, 5
