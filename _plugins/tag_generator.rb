require 'set'

module Jekyll
  class TagGenerator < Generator
    safe true

    def generate(site)
      tags = {}
      processed_tag_pages = Set.new
      
      # Process posts
      site.posts.docs.each do |post|
        next unless post.data['tags']
        post.data['tags'].each do |tag|
          # Normalize tag case for storage
          normalized_tag = normalize_tag_case(tag)
          tags[normalized_tag] ||= []
          tags[normalized_tag] << post unless tags[normalized_tag].include?(post)
        end
      end

      # Process micro posts
      site.collections['micro'].docs.each do |micro|
        next unless micro.data['tags']
        micro.data['tags'].each do |tag|
          # Normalize tag case for storage
          normalized_tag = normalize_tag_case(tag)
          tags[normalized_tag] ||= []
          tags[normalized_tag] << micro unless tags[normalized_tag].include?(micro)
        end
      end
      
      # Log existing pages before we start
      Jekyll.logger.debug "TagGenerator:", "Current site pages before processing:"
      site.pages.each do |page|
        if page.url.start_with?('/topic/')
          Jekyll.logger.debug "TagGenerator:", "  Found existing page: #{page.url}"
        end
      end
      
      # Remove any existing tag pages from site.pages
      site.pages.delete_if do |page| 
        if page.is_a?(TagPage) || (page.url.start_with?('/topic/') && page.url.end_with?('/index.html'))
          Jekyll.logger.debug "TagGenerator:", "  Removing existing tag page: #{page.url}"
          true
        else
          false
        end
      end
      
      # Create exactly one page for each tag
      tags.each do |tag, posts|
        tag_key = tag.downcase.gsub(' ', '-')
        tag_path = "/topic/#{tag_key}/index.html"
        
        # Check if this page already exists in site.pages
        if site.pages.any? { |p| p.url == tag_path }
          Jekyll.logger.warn "TagGenerator:", "Skipping duplicate tag page for '#{tag}' at #{tag_path}"
          next
        end
        
        if processed_tag_pages.include?(tag_key)
          Jekyll.logger.warn "TagGenerator:", "Tag '#{tag}' was already processed, skipping"
          next
        end
        
        Jekyll.logger.info "TagGenerator:", "Creating page for tag '#{tag}' with #{posts.size} posts at #{tag_path}"
        site.pages << TagPage.new(site, site.source, tag, posts)
        processed_tag_pages.add(tag_key)
      end
      
      # Log final pages for verification
      Jekyll.logger.debug "TagGenerator:", "Final tag pages after processing:"
      site.pages.each do |page|
        if page.url.start_with?('/topic/')
          Jekyll.logger.debug "TagGenerator:", "  #{page.url}"
        end
      end
    end

    private

    def normalize_tag_case(tag)
      # Capitalize first letter of each word, handle special cases
      words = tag.split(' ').map do |word|
        # Keep acronyms uppercase
        if word.upcase == word
          word
        else
          word.capitalize
        end
      end
      words.join(' ')
    end
  end

  class TagPage < Page
    def initialize(site, base, tag, posts)
      @site = site
      @base = base
      @dir = File.join('topic', tag.downcase.gsub(' ', '-'))
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag.html')
      self.data['title'] = tag
      self.data['posts'] = posts
      self.data['type'] = 'tag'
    end
  end
end 