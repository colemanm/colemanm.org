---
layout: post
date: 2019-02-25
title: "Using Jekyll Collections to Build a Library"
description: "How I put together my Books website section using Jekyll's collection functionality."
categories: blog
tags:
- howto
- Jekyll
- website
---

A couple months back I built a [“Books” section]({{ site.url }}/books/ "Book Library") of the site to house my library. This is something I’ve been keeping in a spreadsheet for a while now, and still maintaining on Goodreads. But I wanted a more data-driven way for me to be able to manage the info, like a CMS. Since I write book reviews with regularity, I also wanted it to function as reference data that could be included in book review posts, without having to replicate the data I want to have displayed.  

Using Jekyll’s collections feature, the library section starts with a directory in the repo for `_books`, and in here, each book appears as its own markdown file with custom front-matter I created for storing different data values about each. Here’s a sample of what stuff I track for each book, data that gets used as reference in the templates to display about them:

```yml
---
layout: book
title: "The Origins of Political Order"
subtitle: "From Prehuman Times to the French Revolution"
author: Francis Fukuyama
author_last: Fukuyama
slug: fukuyama-the-origins-of-political-order
type: nonfiction
img: true
series: Political Order
part: 1
genres:
- history
- government
- politics
- philosophy
isbn: 9780374227340
rating: 5
pages: 585
format: kindle
publish_year: 2011
date_started: 2016-02-12
date_completed: 2016-03-19
goodreads_id: 9704856
---
```

Most of these values are just info that gets displayed on the [book view]({{ site.url }}/books/fukuyama-the-origins-of-political-order/ "Fukuyama's Origin's of Political Order") — the page count, genre shelves, title, author name, etc. A couple of them are optional and only show if they exist, like the subtitle, series and part (if the book is part of a trilogy or similar), and the image (`true` if it exists and skipped if it doesn’t). The Goodreads ID and ISBN number are included to generate URLs back to the Goodreads listing and [Worldcat](https://www.worldcat.org/ "Worldcat") database.

To enable the collection, add the settings to the `_config.yml` setup so Jekyll will read the files by convention and attempt to generate the proper pages. I also have them generate at a custom URL:

```yml
collections:
  books:
    output: true
    permalink: /books/:title/
```

With the book collection set up, I made a new layout, `book.html`, which is used to generate the single-book view. Using the `assign` [variable tag](https://help.shopify.com/en/themes/liquid/tags/variable-tags#assign "Liquid variable tags") in Liquid you can map the page front-matter elements to the `book` variable, for clean templating to get [that layout](https://github.com/colemanm/colemanm.github.com/blob/master/_layouts/book.html "Book layout") just right.

In order to have my book reviews still appear as normal blog posts, but include a snippet of info for the reviewed work, I wanted an easy way to mark a post as “this is the review for book _x_”. What I came up with was a way to include a unique identifier in the front-matter of the review post that could be tacked on to link in the proper book data. So adding the `slug` value from the book data file into the post data will bring that in:

```yml
book-id: fukuyama-the-origins-of-political-order
```

Within the post layout, it checks for this value and generates a nice inset box at the top to indicate the book, and also generates a convenient “Review” link in the [archive]({{ site.url }}/books/ "Book archive") to show which one’s I’ve reviewed. I like how it’s all linked together with minimal duplication. An inset example:

{% include book-info.html book-id="fukuyama-the-origins-of-political-order" %}

The last step in making this stuff maintainable is my [generator script](https://github.com/colemanm/colemanm.github.com/blob/master/blog.rb "Blog content generator") that lets me quickly add new files, which works for book entries, regular posts, and link posts. It simplifies the process of keeping all the front-matter consistent. That way if I ever want to move, convert, or replace anything, I have a prayer of automating that.

My whole site is [open on GitHub](https://github.com/colemanm/colemanm.github.com/ "colemanm.org"), so anyone with further interest can dig into the code to see how it's assembled. In the future I’d like to build out some more functionality here to search, filter, and sort the list by these values, but that’ll take some work outside of what Jekyll can do to make that possible.

_Much of this was inspired by work Tom MacWright had done on a [Goodreads data exporter](https://gist.github.com/tmcw/3e268886be83f25cd9728cc6f3bc4184 "goodreads-to-jekyll") and his own [“Reading” page](https://macwright.org/reading "Tom MacWright's Books") on his website. Thanks, Tom!_
