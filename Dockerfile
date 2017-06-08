FROM ruby:2.1
MAINTAINER joakim.kemeny@kits.se

ADD Gemfile* /deps/

RUN \
  gem install bundler && \
  cd /deps && \
  bundler install

VOLUME /src
EXPOSE 4000

WORKDIR /src
