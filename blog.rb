#!/usr/bin/env ruby

#frozen_string_literal: true

require 'rubygems'
require 'thor'
require 'json'
require 'yaml'
require 'rake'
require 'haml'
require 'fileutils'
require 'active_support/all'
require 'kramdown'

class Blog < Thor
  desc 'post', 'Create a new blog post.'
  method_option :title,  aliases: '-t', desc: 'Blog post title', default: 'New blog post'
  method_option :date,   aliases: '-d', desc: 'Publish date'
  def post
    title = options[:title]
    slug  = title.downcase.strip.tr(' ', '-').gsub(/[^\w-]/, '')
    date  = generate_date(options[:date])
    datetime = generate_datetime(options[:date])
    file  = File.join('./_posts/', "#{date}-#{slug}.md")
    open(file, 'w') do |post|
      post.puts <<~BLOGPOST
        ---
        layout: post
        date: #{datetime}
        title: "#{title.tr('-', ' ')}"
        description: ""
        img: /images/post-images/
        categories: blog
        tags:
        - 
        ---


      BLOGPOST
    end

    puts "Post '#{date}-#{slug}.md' created."
  end

  desc 'link', 'Create a new link post.'
  method_option :title,  aliases: '-t', desc: 'Blog post title', default: 'New blog post'
  method_option :date,   aliases: '-d', desc: 'Publish date'
  def link
    title = options[:title]
    slug  = title.downcase.strip.tr(' ', '-').gsub(/[^\w-]/, '')
    date  = generate_date(options[:date])
    datetime = generate_datetime(options[:date])
    file = File.join('./_posts/', "#{date}-#{slug}.md")
    open(file, 'w') do |link|
      link.puts <<~LINKPOST
        ---
        layout: link
        date: #{datetime}
        title: "#{title.tr('-', ' ')}"
        target: 
        description: ""
        categories: blog
        tags:
        - 

        links:
        - url: 
          title: 
          icon: 
        ---


      LINKPOST
    end

    puts "Link '#{date}-#{slug}.md' created."
  end

  desc 'book', 'Create a new book in library.'
  method_option :title, aliases: '-t', desc: 'Book title', default: 'New book'
  method_option :author, aliases: '-a', desc: 'Book author last name'
  def book
    title       = options[:title]
    author_last = options[:author]
    slug        = author_last.downcase.strip.tr(' ', '-').gsub(/[^\w-]/, '') + "-" + title.downcase.strip.tr(' ', '-').gsub(/[^\w-]/, '')
    file        = File.join('./_books/', "#{slug}.md")
    open(file, 'w') do |link|
      link.puts <<~BOOK
        ---
        layout: book
        title: "#{title}"
        subtitle: ""
        author:
        author_last: #{author_last}
        slug: #{slug}
        type: nonfiction
        cover: 
        series: 
        part: 
        genres:
        - 
        isbn: 
        rating: 
        pages: 
        format: 
        publish_year: 
        publisher: 
        date_started: 2025-
        date_completed: 
        goodreads_id: 
        amazon_link: 
        ---
      BOOK
    end

    puts "Book '#{slug}.md' created."
  end

  no_tasks do
    def generate_date(postdate)
      (postdate ? Time.parse(postdate) : Time.now).strftime('%F')
    end

    def generate_datetime(postdate)
      time = if postdate
        # Add default time if none provided
        postdate.include?(':') ? Time.parse(postdate) : Time.parse("#{postdate} 12:00:00")
      else
        Time.now
      end
      time.strftime('%F %H:%M:%S')
    end
  end
end

Blog.start
