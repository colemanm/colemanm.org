---
layout: post
date: 2018-11-26
title: "The Library"
description: "Creating a library section for book reviews."
img: /images/post-images/chamblin-book-haul-1.jpg
categories: blog
tags:
- books
- projects
---

I just merged in a new project I worked on over the holiday to add [a library section to this site]({{ site.url }}/books/ "Library"). You’ll see it under “Books” from the top navigation menu.

Based around the [library database]({{ site.url }}/post/the-library-database/ "Library Database") I’ve been adding to over the last few months, I built a way to convert the record data for each book into content pages for the website. It uses Jekyll’s [Collections](https://jekyllrb.com/docs/collections/ "Jekyll Collections") functionality for building custom content types to use. Once you have the basic templating set up, creating new content records is as easy as making a new file in your collection (for my site it’s `_books/`) with whatever consistent metadata you want to use available in the [front matter](https://jekyllrb.com/docs/front-matter/ "Jekyll Front Matter").

{% include image-partial.html file="book-library-entry.png" description="Entry in the library" caption="no" width="500" %}

All of the metadata tracked from the database is in each collection entry to use for reference, as visible in that example. This’ll be cool so I can make it more interactive, to allow browsing by genre, publish year, format, etc.

I’m pretty happy with the setup so far. It should be simple to maintain and add new books to the library. To make life easier I added a new method to my command line utility to generate custom “base” templates to start with for new records. I’ve already got those set up for regular posts and new links, so it only involved adding a new file output structure for `book` entries. All of my completed reads are in there dating back to mid-2017. I’ll keep gradually adding them as I can. The way I’ve got this set up, each collection entry can also function as a “review” of sorts. A future plan includes adding a way to insert those as dated entries into the feed and main homepage. A “topics” section has also been gradually coming together. More on that soon.

In a future technical post I’ll write up how it’s all configured using collections and make reference to the relevant source on GitHub. Collections are one of the most powerful features of Jekyll and I’m sure generally underutilized.
