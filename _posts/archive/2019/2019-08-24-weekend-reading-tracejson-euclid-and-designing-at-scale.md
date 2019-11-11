---
layout: post
date: 2019-08-24
title: "Weekend Reading: tracejson, Euclid, and Designing at Scale"
description: "tracejson for GPS data, reimagining Euclid, and how Dropbox designs at scale."
categories: blog
tags:
- weekend reading
- GPS
- open source
- geometry
- mathematics
- design

links:
- url: https://github.com/sharedstreets/tracejson/
  title: "tracejson" 
- url: https://www.c82.net/euclid/
  title: "Byrne's Euclid"
- url: https://dropbox.design/article/design-tooling-at-scale
  title: "Design Tooling at Scale"
---

### 🛰 [tracejson](https://github.com/sharedstreets/tracejson/ "tracejson")

An extension to the GeoJSON format for storing GPS track data, including timestamps. GPX has been long in the tooth for a long time, but it works and is supported by everything. This approach could have some legs if application developers are interested in a new, more efficient, way of doing things. I know I'd like to explore it for Fulcrum's [GPS-based video](https://www.fulcrumapp.com/blog/spatialvideo/ "Fulcrum SpatialVideo") capability. Right now we do GPX and our own basic JSON format for storing the geo and elapsed time data to match up video frames with location. This could be a better way.

### 🔷 [Byrne's Euclid](https://www.c82.net/euclid/ "Byrne's Euclid")

This is a gorgeous web recreation of Oliver Byrne's take on Euclid's *[Elements](https://en.wikipedia.org/wiki/Euclid%27s_Elements "Elements")*. A true work of art.

### 🎨 [Design Tooling at Scale](https://dropbox.design/article/design-tooling-at-scale "Design Tooling at Scale")

This post from the Dropbox design team dives into how a large team with a complex product created a design system for a consistent language. It goes into how they organize the stack of design elements and structures using Figma for collaboration.
