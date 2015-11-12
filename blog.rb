#!/usr/bin/env ruby

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

  desc "new", "Create a new blog post."
  method_option :title,  aliases: "-t", desc: "Blog post title", default: "New blog post"
  method_option :date,   aliases: "-d", desc: "Publish date"
  method_option :link, aliases: "-l", desc: "Link post", type: :boolean
  def new
    title   = options[:title]
    slug    = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

    begin
      date = (options[:date] ? Time.parse(options[:date]) : Time.now).strftime('%F')
    rescue Exception => e
      puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
      exit -1
    end

    file = File.join("./_posts/", "#{date}-#{slug}.md")

    open(file, 'w') do |post|
      if !options[:link]
        post.puts <<eos
---
layout: post
date: #{date}
title: "#{title.gsub(/-/,' ')}"
categories: blog
---

Content for blog post.
eos
      else
        post.puts <<eos
---
layout: link
date: #{date}
title: "#{title.gsub(/-/,' ')}"
target: url
description: ""
categories: blog
---

Content for link post.
eos
      end
    end

    puts "Post file '#{date}-#{slug}.md'"
  end

end

Blog.start
