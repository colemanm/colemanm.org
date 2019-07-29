---
layout: post
date: 2019-07-29
title: "Fulcrum as a Personal Database"
description: "Using Fulcrum for various personal projects."
img: /images/post-images/fulcrum-soccer-clubs.jpg
categories: blog
tags:
- Fulcrum
- personal
- data
---

I use [Fulcrum](https://www.fulcrumapp.com/ "Fulcrum") all the time for collecting data around hobbies of mine. Sometimes it's for fun or interests, sometimes for mapping side projects, or even just for testing the product as we develop new features.

Here are a few of my key every day apps I use for personal tracking. I'm always tinkering around with other things as we expand the product, but each of these I've been using for years pretty consistently.

### Gas Mileage

Of course there are apps out there devoted to this task, but I like the idea of having my own raw data input for this. Piping this to a spreadsheet lets me run some calculations on it to see MPG, total spend, and total miles driven over time.

{% include image.html file="fulcrum-gas-mileage.jpg" description="Gas mileage tracker" caption="no" %}

### Maps Collection

I'm a collector of paper maps, and some time back I [built out a tracker in Fulcrum]({{ site.url }}/post/the-map-collection/ "The Map Collection") to inventory my collection. One day I plan to add some other details to this for year, publisher, and the like, but it works for now as a basic inventory of what I've got.

{% include image.html file="fulcrum-map-database.jpg" description="Maps database" caption="no" %}

### Workouts

I've been lax this year with the routine, but I'd built out a log for tracking my workout sessions at the gym — mostly to track doing the "[Runner 360](https://coachlevi.com/running/runner-360-workout-angie-stewart/ "Runner 360")" workout. It works great and provides a way to build some charts with progress on efforts over time.

### Home Inventory

In order to have a reliable log of all of the expensive stuff in my house, I created this so that there's some prayer of having a tight evidence log of what I own if there's ever a flood, hurricane, or fire (or even theft) that requires a homeowners insurance claim. I figured it can't hurt to have photographic evidence of what's in the house if it came to needing to prove it.

{% include image.html file="fulcrum-home-inventory.jpg" description="Home inventory" caption="no" %}

### Football Clubs

This one is more of an experiment in using Fulcrum (and its API) as a cloud-based PostGIS database. I created a simple schema for each team, league, and stadium location. I had this idea to use these coordinates for generating a poster of stadiums from satellite images. One day I might have time for that, but there's also an open database you can [download of all the locations as geojson](https://web.fulcrumapp.com/shares/c97c9bdbf4a1a163.geojson "Football clubs").

{% include image.html file="fulcrum-soccer-clubs.jpg" description="Football clubs map" caption="no" %}

There are a few others I've got in "R&D" mode right now testing out. Always on the hunt for new and interesting things I can make Fulcrum do. It's a true power tool for data entry and data management.
