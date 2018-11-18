---
layout: post
date: 2018-10-29
title: "The Library Database"
description: "Turning my reading log into a database."
categories: blog
tags:
- books
- data
---

I've been an avid user of Goodreads for tracking books for the last ten years. Tom MacWright [wrote a post](https://macwright.org/2017/12/11/indieweb-reading.html) and a [script utility](https://gist.github.com/tmcw/3e268886be83f25cd9728cc6f3bc4184) last year to export and format items from Goodreads into pages that could work in a Jekyll site, like his and this one. On my profile I track more than just what I'm reading; I also log start and finish dates, ratings, reviews, and more. Getting a feed somewhere on the website would certainly be cool (I have a branch now with this in progress). On my way to getting that working, I took the [Goodreads export](https://www.goodreads.com/review/import) format and put it in a [Google Sheet](https://docs.google.com/spreadsheets/d/1Bl_-PV0pNz0xXxwdG5HdbukSi_LQ_rvD9wP7rVerTi0/edit?usp=sharing), then edited a good bit to build out a richer dataset that I can keep adding to over time. I added fields for format, whether a book is part of a series, and a URL to get to book's listing.

{% include image.html file="books-database.png" description="Books database" caption="no" %}

I have some ideas on some simple analyses to do on this data. Once I get the feed publishing my reading log inline with the blog posts, I'll work on some experiments with visualizations that could be done with this dataset.
