require 'rake'
require 'time'

namespace :blog do

  namespace :post do

    # Usage: rake blog:post:new title="A Title" [date="2012-02-09"]
    desc "Create a new blog post"
    task :new do
      title = ENV["title"] || "new-post"
      slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

      begin
        date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
      rescue Exception => e
        puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
        exit -1
      end

      filename = File.join("./_posts/", "#{date}-#{slug}.md")
      date = Time.now.strftime("%Y-%m-%d %T %Z")

      open(filename, 'w') do |post|
        post.puts '---'
        post.puts 'layout: post'
        post.puts "date: #{date}"
        post.puts "title: \"#{title.gsub(/-/,' ')}\""
        post.puts 'categories: blog'
        post.puts '---'
        post.puts ''
      end

      system "#{ENV['EDITOR'] || 'open'} #{filename}"
    end

    desc "Create a new link post"
    task :link do
      title = ENV["title"] || "new-link"
      slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

      begin
        date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
      rescue Exception => e
        puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
        exit -1
      end

      filename = File.join("./_posts/", "#{date}-#{slug}.md")
      date = Time.now.strftime("%Y-%m-%d %T %Z")

      open(filename, 'w') do |post|
        post.puts '---'
        post.puts 'layout: link'
        post.puts "date: #{date}"
        post.puts "title: \"#{title.gsub(/-/,' ')}\""
        post.puts "permalink: "
        post.puts "target: "
        post.puts "description: "
        post.puts 'categories: blog'
        post.puts '---'
        post.puts ''
      end

      system "#{ENV['EDITOR'] || 'open'} #{filename}"
    end

  end

end