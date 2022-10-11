FROM ruby:3.0.2

ENV LANG=C.UTF-8
ENV APP /wataridori
ENV BUNDLE_VERSION 2.3.7

RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs yarn postgresql-client vim

RUN gem install bundler --version "$BUNDLE_VERSION"
RUN gem update --system

RUN mkdir $APP
WORKDIR $APP
