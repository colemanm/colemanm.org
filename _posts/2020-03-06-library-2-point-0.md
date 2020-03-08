---
layout: post
date: 2020-03-06 23:10:01
title: "Library 2.0"
description: "Upgrading my library database to use Airtable."
categories: blog
tags:
- books
- data
---

Since I began tracking my reading habits a year and a half ago, I've been able to keep up with it regularly. It lives in a Google Sheet and allows me to log dates I started and finished books, attributes about them, ratings, links, and more.

I spent some time with [Airtable](https://airtable.com/ "Airtable") importing and cleaning up the data so I could have a richer version with the ability to view, edit, and add to the library from my phone. Airtable has the ability to create Views (similar to what we do with Views in Fulcrum) which are essentially saved queries with specific formats — e.g. it remembers hidden columns, sort order, and grouping. I've got two main views: one for my "Current Library" (books I've read or am currently reading) and another "To Read" list with ones I've added for future reading. This lets me keep them all in a single table with a category for status, but can view my archive without seeing the hundreds on the reading list.

{% include image.html file="airtable-library.jpg" description="Library 2.0 in Airtable" caption="no" %}

The data entry interface for adding new records isn't that great (not as good at this as Fulcrum), but it is certainly better than Google Sheets for this.

{% include image-partial.html file="airtable-library-mobile.jpg" description="My 'Current' Library (left) and Reading List (right)" width="700" %}

Airtable also supports [Zapier](https://zapier.com/ "Zapier") for automations, so I could potentially send the data entered to other services if I want to.

Check out the data here:

<iframe class="airtable-embed" src="https://airtable.com/embed/shr2tdcl5t8DLFtg4?backgroundColor=teal&layout=card&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
