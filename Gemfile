source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.2"

gem "bcrypt"
gem "bootsnap", ">= 1.4.4", require: false
gem "carrierwave"
gem "cloudinary"
gem "config"
gem "counter_culture"
gem "devise", git: "https://github.com/heartcombo/devise"
gem "figaro"
gem "friendly_id"
gem "jbuilder", "~> 2.7"
gem "meta-tags"
gem "mojinizer"
gem "mini_magick"
gem "puma"
gem "rails", "~> 6.1.1"
gem "redcarpet"
gem "sass-rails", ">= 6"
gem "turbolinks", "~> 5"
gem "vietnameses"
gem "webpacker", "~> 5.0"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem "listen", "~> 3.3"
  gem "mysql2"
  gem "pry-rails"
  gem "rack-mini-profiler", "~> 2.0"
  gem "spring"
  gem "web-console", ">= 4.1.0"

  # Deploy
  gem "bcrypt_pbkdf", ">= 1.0", "< 2.0"
  gem "ed25519", ">= 1.2", "< 2.0"

  gem "capistrano", "~> 3.11"
  gem "capistrano-passenger", "~> 0.2.1"
  gem "capistrano-rails", "~> 1.4"
  gem "capistrano-rbenv", "~> 2.1", ">= 2.1.4"
end

group :production do
  gem "pg"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
