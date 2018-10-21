#!/usr/bin/env ruby

#frozen_string_literal: true

require 'rubygems'
require 'thor'
require 'json'
require 'yaml'
require 'rake'
require 'haml'
require 'fileutils'
require 'active_support/core_ext/object'
require 'active_support/core_ext/hash'
require 'kramdown'

class Blog < Thor
  desc 'post', 'Create a new blog post.'
  method_option :title,  aliases: '-t', desc: 'Blog post title', default: 'New blog post'
  method_option :date,   aliases: '-d', desc: 'Publish date'
  def post
    title = options[:title]
    slug  = title.downcase.strip.tr(' ', '-').gsub(/[^\w-]/, '')
    date  = generate_date(options[:date])
    file  = File.join('./_posts/', "#{date}-#{slug}.md")
    open(file, 'w') do |post|
      post.puts <<~BLOGPOST
        ---
        layout: post
        date: #{date}
        title: "#{title.tr('-', ' ')}"
        description: ""
        categories: blog
        tags:
        - 
        ---

        Content for blog post.
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
    file = File.join('./_posts/', "#{date}-#{slug}.md")
    open(file, 'w') do |link|
      link.puts <<~LINKPOST
        ---
        layout: link
        date: #{date}
        title: "#{title.tr('-', ' ')}"
        target: url
        description: ""
        categories: blog
        tags:
        - 
        ---

        Content for link post.
      LINKPOST
    end

    puts "Link '#{date}-#{slug}.md' created."
  end

  no_tasks do
    def generate_date(postdate)
      (postdate ? Time.parse(postdate) : Time.now).strftime('%F')
    end
  end
end

Blog.start
