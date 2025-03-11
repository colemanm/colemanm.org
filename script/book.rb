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
  author_last: "#{ARGV[0]}"
  slug: #{ARGV[0].downcase}-#{ARGV[1..-1].join(' ').downcase.gsub(/[^a-z0-9]+/, '-').gsub(/(^-|-$)/, '')}
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

def generate_template(author_last, title)
  # Create a slug from the author and title
  title_slug = title.downcase.gsub(/[^a-z0-9]+/, '-').gsub(/(^-|-$)/, '')
  author_slug = author_last.downcase
  filename = "#{author_slug}-#{title_slug}.md"
  
  # Ensure the _books directory exists
  FileUtils.mkdir_p('_books')
  
  # Write the template to the file
  File.write(File.join('_books', filename), TEMPLATE)
  
  puts "Generated template: _books/#{filename}"
  puts "\nRequired fields to fill in:"
  puts "- author"
  puts "- type"
  puts "- isbn"
  puts "- rating"
  puts "- pages"
  puts "- format"
  puts "- publish_year"
  puts "- date_completed (leave blank for currently reading)"
end

# Check if both author and title were provided
if ARGV.length < 2
  puts "Usage: ruby script/book.rb <author_last> <title>"
  puts "Example: ruby script/book.rb \"Fitzgerald\" \"The Great Gatsby\""
  exit 1
end

author_last = ARGV[0]
title = ARGV[1..-1].join(' ')

if author_last.nil? || author_last.empty? || title.nil? || title.empty?
  puts "Error: Please provide both author_last and title"
  exit 1
end

generate_template(author_last, title) 