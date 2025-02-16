require "html-proofer"

task :test do
  sh "bundle exec jekyll build"
  options = { swap_urls: "^/BASEURL/:/" }
  HTMLProofer.check_directory("./_site", options).run
end