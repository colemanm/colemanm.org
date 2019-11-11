---
layout: post
date: 2019-09-05
title: "Search the Archives"
description: "Implementing site search using Jekyll and lunr.js."
categories: blog
tags:
- personal
- search
- open source
---

Since I've been posting here so frequently, it's gotten challenging to scroll through [the archive]({{ site.url }}/archive "Archives") to find links to things I wrote about before. Last night I worked on implementing a simple [site search]({{ site.url }}/search/ "Search the Archives") page that searches the title, text, and tags of posts to find relevant content. This is a short post on how I put that together.

I use [Jekyll](https://jekyllrb.com/ "Jekyll") to manage the site content and generation, with all of my [posts](https://github.com/colemanm/colemanm.github.com/tree/master/_posts "Posts on GitHub") written as markdown files with some custom front-matter to handle things like tagging, search-friendliness, and some other things used in templating the site. There are also a couple of other custom things build using Jekyll's "collections" feature for other content types, like my [Books section]({{ site.url }}/post/using-jekyll-collections-to-build-a-library/ "Using Jekyll Collections to Build a Library").

I ran across a library called [Lunr](https://lunrjs.com/ "Lunr") that provides client-side search on an index that generates when your site builds. It's small and simple, outputting an index as JSON document that then can be combed through from a search to return data from posts or other content types. This provided exactly what I wanted: lightweight and something that would support Jekyll and GitHub hosting that I use without having to change anything, add third-party indexing services, or use clunky Google Site Search to accomplish. I wanted something native to my own site.

The best implementation that I found that matched what I wanted was [from Katy DeCorah](https://katydecorah.com/code/lunr-and-jekyll/ "Lunr and Jekyll"). Using her version as a starter, I took that and customized to fit my site and index and return the specific data I wanted to appear in search results. The outcome looks nice and is certainly simple to use. Right now it still only supports searching the post archives, but that's good enough for now. I'm still exploring ways to browse my archives by other dimensions like tags, but I want to do that in a way that's useful and also as lightweight as possible.

Head to the [/search]({{ site.url }}/search/ "Search the Archives") page and check it out.
