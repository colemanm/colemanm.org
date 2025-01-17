#!/usr/bin/env ruby

require 'yaml'
require 'date'

def extract_tags_from_frontmatter(file_path)
  content = File.read(file_path)
  # Match the YAML front matter between --- markers
  if content =~ /\A(---\s*\n.*?\n?)^(---\s*$\n?)/m
    front_matter = YAML.safe_load($1, permitted_classes: [Time, Date, DateTime])
    tags = front_matter['tags']
    if tags.nil?
      puts "Warning: No tags found in #{file_path}"
      return []
    end
    return tags
  end
  []
rescue => e
  puts "Error processing #{file_path}: #{e.message}"
  []
end

# Find all markdown files recursively
posts_path = File.join(Dir.pwd, '_posts')
markdown_files = Dir.glob("#{posts_path}/**/*.md")

# Collect all tags
all_tags = []
markdown_files.each do |file|
  tags = extract_tags_from_frontmatter(file)
  all_tags.concat(Array(tags).compact)
end

# Remove any nil values and empty strings
all_tags.reject! { |tag| tag.nil? || tag.empty? }

# Create a hash to store case-sensitive versions of tags
tag_cases = {}
all_tags.each do |tag|
  downcased = tag.downcase
  # Keep the most common case version of each tag
  tag_cases[downcased] ||= Hash.new(0)
  tag_cases[downcased][tag] += 1
end

# Get unique tags, using most common case for each
unique_tags = tag_cases.map do |downcased, cases|
  # Find the most frequently used case version
  cases.max_by { |_, count| count }.first
end.sort

# Output results
puts "\nFound #{unique_tags.count} unique tags across #{markdown_files.count} posts:\n\n"
unique_tags.each do |tag|
  # Count how many times each tag is used (case insensitive)
  count = all_tags.count { |t| t&.downcase == tag.downcase }
  variations = tag_cases[tag.downcase].keys.join(', ')
  if tag_cases[tag.downcase].keys.length > 1
    puts "#{tag} (#{count}) - variations: #{variations}"
  else
    puts "#{tag} (#{count})"
  end
end 