require 'html/proofer'
require 'yaml'
require 'jekyll'
require 'cgi'
require 'uri'

begin
  require 'rspec/core/rake_task'
  RSpec::Core::RakeTask.new(:spec)
rescue LoadError
  puts "Can't find RSpec"
end

def test_config
  YAML.load_file('_config_test.yml')
end

namespace :assets do
  task :precompile do
    sh "bundle exec jekyll build"
  end
end

def config
  config = YAML.load_file('_config_test.yml')
  config["proofer"] = config["proofer"].inject({}){|memo,(k,v)| memo[k.to_sym] = v; memo}
  config
end

def build_site
  sh "bundle exec jekyll build -c _config.yml,_config_test.yml"
end

def html_proofer
  puts "HTML Proofer version: #{HTML::Proofer::VERSION}"
  HTML::Proofer.new("./_site", config["proofer"]).run
end

task :build do
  Rake::Task[:set_env].invoke
  options = {
    'config' => %w[_config.yml _config_test.yml]
  }
  Jekyll::Commands::Build.process(options)
end

task :serve do
  Rake::Task[:set_env].invoke
  options = {
    'serving'     => true,
    'watch'       => true,
    'incremental' => true,
    'config'      => %w[_config.yml _config_local.yml]
  }
  Jekyll::Commands::Build.process(options)
  Jekyll::Commands::Serve.process(options)
end

# task :test do
#   puts "Running with the following test configuration:"
#   puts config.to_yaml
#   puts "---"
#   build_site
#   html_proofer
# end

task :test do
  Rake::Task[:spec].invoke
  Rake::Task[:build].invoke
  require 'html-proofer'
  HTMLProofer.check_directory('./_site', test_config['proofer']).run
end
