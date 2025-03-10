#!/usr/bin/env ruby

require 'fileutils'
require 'date'

# Define the book template
TEMPLATE = <<~TEMPLATE
  ---
  layout: book
  title: "#{ARGV[1..-1].join(' ')}"
  subtitle: ""
  author: ""
  author_last: ""
  slug: #{ARGV[1..-1].join('-').downcase.gsub(/[^a-z0-9]+/, '-').gsub(/(^-|-$)/, '')}
  type: 
  cover: true
  series: 
  part: 
  genres:
  - 
  isbn: 
  rating: 
  pages: 
  format: 
  publish_year: 
  date_started: #{Time.now.strftime('%Y-%m-%d')}
  date_completed: 
  goodreads_id: 
  amazon_link: 

  # Optional properties
  favorite: false
  current: true
  notes: false

  reviewers:
  - author: 
    url: 

  recommended_by:
  - title: ""
    author: ""
    url: ""
  ---

  Your book review and notes here.
TEMPLATE

def generate_template(title)
  # Create a slug from the title
  slug = title.downcase.gsub(/[^a-z0-9]+/, '-').gsub(/(^-|-$)/, '')
  
  # Generate the filename
  filename = "#{slug}.md"
  
  # Ensure the _books directory exists
  FileUtils.mkdir_p('_books')
  
  # Write the template to the file
  File.write(File.join('_books', filename), TEMPLATE)
  
  puts "Generated template: _books/#{filename}"
  puts "\nRequired fields to fill in:"
  puts "- title"
  puts "- author"
  puts "- author_last"
  puts "- type"
  puts "- isbn"
  puts "- rating"
  puts "- pages"
  puts "- format"
  puts "- publish_year"
  puts "- date_completed (leave blank for currently reading)"
end

# Check if a title was provided as an argument
if ARGV.empty?
  puts "Usage: ruby script/book.rb <title>"
  puts "Example: ruby script/book.rb \"The Great Gatsby\""
  exit 1
end

title = ARGV[1..-1].join(' ')

if title.nil? || title.empty?
  puts "Error: Please provide a title"
  exit 1
end

generate_template(title) 