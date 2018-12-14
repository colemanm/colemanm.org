---
layout: post
date: 2018-12-14
title: "Kindle Highlights"
description: "Creating a library of Kindle excerpts."
categories: blog
tags:
- books
- open source
---

I started making [this tool](https://github.com/colemanm/kindle-excerpts "kindle-excerpts") a long time back to extract highlighted excerpts from Kindle books. This predated the cool support for this that Goodreads has now, but I still would like to spend some time getting back to this little side project.

Eric Farkas has [another tool](https://github.com/speric/kindle-highlights "kindle-highlights") that looks like it does this, as well, so that’s worth checking out as a possible replacement. What I really want is my own private archive of the data, not really my own custom extraction tool. The gem I was using for mine might’ve been the same one, or does something similar reading from Amazon’s API. It’s nice because it outputs the data in JSON, so then it can be easily parsed apart into yaml or Markdown to use elsewhere. Each excerpt looks like this:

{
  "asin": "B005H0O8KQ",
  "customerId": "A28I9D90ISXNT6",
  "embeddedId": "CR!CJ3JV6W1D918FDT8WZTVP0GG6CNN:86C04A71",
  "endLocation": 72905,
  "highlight": "Springs like these are the source of vein-type ore deposits. It's the same story that I told you about the hydrothermal transport of gold. When rainwater gets down into hot rock, it brings up what it happens to find there—silver, tungsten, copper, gold. An ore-deposit map and a hot-springs map will look much the same. Seismic waves move slowly through hot rock.",
  "howLongAgo": "2 months ago",
  "startLocation": 72539,
  "timestamp": 1446421339000
}

If I can soon I’ll spend some time tinkering and see if I can pull some for other books I’ve read since.
