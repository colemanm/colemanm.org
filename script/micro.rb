#!/usr/bin/env ruby

require 'fileutils'
require 'date'

# Define the micro post types and their templates
TEMPLATES = {
  'video' => <<~TEMPLATE,
    ---
    date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}
    layout: micro
    type: video
    tags:
    - video
    video:
      provider: youtube
      id: 
      url: 
    ---

    **Title of the video**.
  TEMPLATE
  'photo' => <<~TEMPLATE,
    ---
    date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}
    layout: micro
    type: photo
    tags:
    - art
    images:
    - 
    ---

    _**Title of the photo**_.
  TEMPLATE
  'text' => <<~TEMPLATE,
    ---
    date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}
    layout: micro
    type: text
    tags:
    - 
    ---

    Your text content here.
  TEMPLATE
  'link' => <<~TEMPLATE
    ---
    date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}
    layout: micro
    type: link
    tags:
    - 
    url: 
    ---

    **Title of the link**.
  TEMPLATE
}

def generate_template(type, title)
  # Create a slug from the title
  slug = title.downcase.gsub(/[^a-z0-9]+/, '-').gsub(/(^-|-$)/, '')
  
  # Generate the filename with current date
  filename = "#{Time.now.strftime('%Y-%m-%d')}-#{slug}.md"
  
  # Ensure the _micro directory exists
  FileUtils.mkdir_p('_micro')
  
  # Write the template to the file
  File.write(File.join('_micro', filename), TEMPLATES[type])
  
  puts "Generated template: _micro/#{filename}"
end

# Check if a type was provided as an argument
if ARGV.empty?
  puts "Usage: ruby script/micro.rb <type> <title>"
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