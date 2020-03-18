---
layout: post
date: 2020-01-27 23:02:43
title: "Books and Microdata"
description: "Adding schema.org microdata to my library."
categories: blog
tags:
- books
- microdata
- data
---

Tom [posted a while back](https://macwright.org/2017/12/11/indieweb-reading.html "Owning my reading log") about his book review section, and adding [schema.org](http://schema.org/ "schema.org") microdata to those pages for book review-related data. The promise of these schema standards is to provide a semantic markup framework for unstructured text content, so things like [recipes](http://schema.org/Recipe "Recipe schema"), [movies](http://schema.org/Movie "Movie schema"), and [products](http://schema.org/Product "Product schema") can conform to an attribute standard for (theoretically) better indexing and search.

Referencing his implementation, I went through my library templates and added schema attributes on the relevant properties I publish. I don't know what value those'll have, but I'm a supporter of the open web and bottom-up adoption of formats for data structures. I remember [Microformats](https://en.wikipedia.org/wiki/Microformat "Microformats") from way back in the early Web 2.0 days. They didn't seem to catch on, but Google has over time [rolled out](https://developers.google.com/search/docs/guides/intro-structured-data "Google structured data") [JSON-LD](https://json-ld.org/ "JSON-LD") (linked data) to feed those tasty machine-readable formats to the spider, for easier surfacing of useful content in search.

Here's a snapshot of some of the data on an individual `/book` page:

```html
<div class="book" itemprop=itemReviewed itemscope itemtype=http://schema.org/Book>
<h1 itemprop=name>The Quiet American</h1>
<h2>by <span class="author" itemprop=author>Graham Greene</span></h2>
<p class="book-meta">Published: <span itemprop=datePublished>{{ book.publish_year }}</span></p>
</div>
```

It's pretty straightforward to add markup for title, author, completion date, ISBN, and [other things](http://schema.org/Book "Book schema"). It's also neat that the `Book` object type also "belongs to" the `CreativeWork` type, so it can contain those properties, as well.

One other thing I included here was a section to backlink to others' posted book reviews on their personal sites. After Tom [tweeted yesterday](https://twitter.com/tmcw/status/1221619500358832128 "@tmcw on books") about doing this on his site, I decided I'd backlink to his, too. If you maintain a reading log and want to continue the viral spread of semantic indie blog cross-referencing, let me know. I'd be happy to link to others.

Next I wanted to try adding the appropriate JSON-LD tags for other parts of the site and see how that all works.
