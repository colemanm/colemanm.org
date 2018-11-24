---
layout: post
date: 2018-11-24
title: "Weekend Reading: Typing on iPad Pro, Climate Optimism, Visualizing GeoNames"
description: "Smart Keyboard Folio, defending 'climate optiism', and exploring place name data."
categories: blog
tags:
- weekend reading
- iPad
- Apple
- climate
- places
- geography
- open data
---

### 📱[iPad Diaries: Typing on the iPad Pro with the Smart Keyboard Folio ](https://www.macstories.net/stories/ipad-diaries-typing-on-the-ipad-pro-with-the-smart-keyboard-folio/)

I swung through an Apple Store a couple of weeks ago to check out the new hardware. The Smart Keyboard Folio has been hard to imagine the experience with in reviews without handling one. Same with the Pencil. I was particularly impressed with the magnetic hold of the Pencil on the side of the device — it’s darn strong. The current Smart Keyboard has some deficiencies, as pointed out in this article. No instant access to Siri or at least Siri Dictation, no system shortcut keys for things like volume control and playback, and 

### ⛈ [In Defense of Climate Optimism](https://quillette.com/2018/11/15/in-defense-of-climate-optimism/ "In Defense of Climate Optimism on Quillette")

Quillette always has good stuff. I’m on the side of the author here in general with respect to climate change: it’s a problem to be understood and responded to, but the loudest of the proponents of doing something about it propose massive, sweeping, unrealistic changes “or else.” This author and [Steven Pinker](https://twitter.com/sapinker "Steven Pinker on Twitter") (quoted in the piece) have the right idea. Take a long, optimistic view and look to history for similar circumstances, and take measured action over time.

### 🗺 [Places and Their Names: Observations from 11 Million Place Names](https://medium.com/@tjukanov/places-and-their-names-observations-from-11-million-place-names-8ea34cf61da4 "Observations from 11 Million Place Names")

I love analyses like this. Take the open [GeoNames](http://www.geonames.org/ "GeoNames") database, load it into Postgres, ask questions on patterns using SQL, visualize the distributions.

> I wanted to find patterns in the names, so I explored if they started or ended in a certain way or just contained a certain word. With SQL this means that I was using the `%` wildcard to find prefixes or suffixes. So for instance the following query would return return every word containing the word bad anywhere in the name:
> 
> `SELECT * FROM geonames WHERE name ILIKE ‘%bad%’`

This makes me want to revive my old [`gazetteer`](https://github.com/colemanm/gazetteer "Gazetteer on GitHub") project and crawl around GeoNames again.
