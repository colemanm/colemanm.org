all: run

build:
	bundle exec jekyll

clean:
	rm -rf _site

run:
	bundle exec jekyll serve --watch --incremental --config _config_dev.yml

profile:
	bundle exec jekyll build --config _config_dev.yml --profile

install:
	bundle install --path .bundle
	npm install

generate:
	bundle exec ./generate

releases:
	rm -rf _releases/*.md
	bundle exec src/generate.rb releases

.PHONY: build clean run install generate releases
