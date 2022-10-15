FROM ruby:3.0.2

ENV LANG C.UTF-8
ENV BUNDLER_VERSION 2.3.7
ENV APP /wataridori

RUN apt-get update -y && apt-get install -y apt-transport-https
RUN apt-get update -y && apt-get install -y \
  git-core \
  vim \
  nano \
  zlib1g-dev \
  build-essential \
  libssl-dev \
  default-mysql-client \
  cmake

RUN gem install bundler --version "$BUNDLE_VERSION"
RUN gem update --system

RUN mkdir $APP
WORKDIR $APP
