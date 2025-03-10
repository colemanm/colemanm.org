#!/usr/bin/env ruby

require 'fileutils'
require 'date'

# Define the templates
POST_TEMPLATE = <<~TEMPLATE
  ---
  layout: post
  date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}
  title: "#{ARGV[1..-1].join(' ')}"
  description: ""
  img: /images/post-images/.jpg
  categories: blog
  tags:
  - 

  links:
  - url: 
    title: ""
    icon: 
  ---

  Your post content here.
TEMPLATE

LINK_TEMPLATE = <<~TEMPLATE
  ---
  layout: link
  date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}
  title: "#{ARGV[1..-1].join(' ')}"
  target: 
  description: ""
  img: /images/post-images/.jpg
  categories: blog
  tags:
  - 

  links:
  - url: 
    title: ""
    icon: 
  ---

  Your link post content here.
TEMPLATE

# Define the post types and their templates
TEMPLATES = {
  'post' => POST_TEMPLATE,
  'link' => LINK_TEMPLATE
}

# Debug output
puts "TEMPLATES keys: #{TEMPLATES.keys.inspect}"
puts "TEMPLATES has 'link'?: #{TEMPLATES.key?('link')}"

def generate_template(type, title)
  # Create a slug from the title
  slug = title.downcase.gsub(/[^a-z0-9]+/, '-').gsub(/(^-|-$)/, '')
  
  # Generate the filename with current date
  filename = "#{Time.now.strftime('%Y-%m-%d')}-#{slug}.md"
  
  # Ensure the _posts directory exists
  FileUtils.mkdir_p('_posts')
  
  # Write the template to the file
  File.write(File.join('_posts', filename), TEMPLATES[type])
  
  puts "Generated template: _posts/#{filename}"
end

# Check if a type was provided as an argument
if ARGV.empty?
  puts "Usage: ruby script/post.rb <type> <title>"
  puts "Available types: #{TEMPLATES.keys.join(', ')}"
  exit 1
end

type = ARGV[0].downcase
title = ARGV[1..-1].join(' ')

unless TEMPLATES.key?(type)
  puts "Error: Unknown type '#{type}'"
  puts "Available types: #{TEMPLATES.keys.join(', ')}"
  exit 1
end

if title.nil? || title.empty?
  puts "Error: Please provide a title"
  exit 1
end

generate_template(type, title) 