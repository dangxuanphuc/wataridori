source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.0"

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
gem "mini_magick"
gem "puma", "~> 5.0"
gem "rails", "~> 6.1.1"
gem "redcarpet"
gem "sass-rails", ">= 6"
gem "turbolinks", "~> 5"
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
end

group :test do
  gem "rspec_junit_formatter"
end

group :production do
  gem "pg"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
