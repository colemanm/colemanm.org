all: run

build:
	bundle exec jekyll

clean:
	rm -rf _site

run:
	bundle exec jekyll serve --watch

install:
	bundle install --path .bundle

generate:
	bundle exec ./generate

releases:
	rm -rf _releases/*.md
	bundle exec src/generate.rb releases

.PHONY: build clean run install generate releases
