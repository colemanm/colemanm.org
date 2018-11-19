# frozen_string_literal: true

require 'yaml'
require 'jekyll'
require 'cgi'
require 'uri'

begin
  require 'rspec/core/rake_task'
  RSpec::Core::RakeTask.new(:spec)
rescue LoadError
  puts 'Cannot find RSpec'
end

def test_config
  YAML.load_file('_config_test.yml')
end

def token
  path = File.expand_path('~/.token')
  File.read(path) if File.exist?(path)
end

task :set_env do
  ENV['DISABLE_WHITELIST']   = 'true'
  ENV['JEKYLL_GITHUB_TOKEN'] = token
end

task :build do
  Rake::Task[:set_env].invoke
  options = {
    'config' => %w[_config.yml _config_test.yml]
  }
  Jekyll::Commands::Build.process(options)
end

# rubocop:disable AlignHash
task :serve do
  Rake::Task[:set_env].invoke
  options = { 'serving'     => true,
              'watch'       => true,
              'incremental' => true,
              'config'      => %w[_config.yml _config_local.yml] }
  Jekyll::Commands::Build.process(options)
  Jekyll::Commands::Serve.process(options)
end
# rubocop:enable AlignHash

task :test do
  Rake::Task[:spec].invoke
  Rake::Task[:build].invoke
  require 'html-proofer'
  HTMLProofer.check_directory('./_site', test_config['proofer']).run
end
