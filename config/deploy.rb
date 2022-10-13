# config valid for current version and patch releases of Capistrano
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
