FROM ruby:3.0.0
RUN apt-get update && apt-get install -y build-essential
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - \
  && apt-get install -y nodejs
RUN mkdir -p /app
WORKDIR /app

COPY Gemfile Gemfile.lock package.json yarn.lock ./
RUN gem install bundler -v "2.2.16" && bundle install --jobs 20 --retry 5
RUN npm install -g yarn
RUN yarn install --check-files
COPY . ./
EXPOSE 3000
