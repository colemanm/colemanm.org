---
layout: post
date: 2019-08-17
title: "Weekend Reading: Terrain Mesh, Designing on a Deadline, and Bookshelves"
description: "Real-time terrain mesh with MARTINI, designing Notion using Figma, and @patrickc's bookshelf."
categories: blog
tags:
- weekend reading
- GIS
- spatial analysis
- open source
- design
- product
- books

links:
- url: https://observablehq.com/@mourner/martin-real-time-rtin-terrain-mesh
  title: "MARTINI: Real-Time RTIN Terrain Mesh"
- url: https://www.figma.com/blog/design-on-a-deadline-how-notion-pulled-itself-back-from-the-brink-of-failure/
  title: "Design on a Deadline: How Notion Pulled Itself Back from the Brink of Failure"
- url: https://patrickcollison.com/bookshelf
  title: "Patrick Collison's Bookshelf"
---

### 🏔 [MARTINI: Real-Time RTIN Terrain Mesh](https://observablehq.com/@mourner/martin-real-time-rtin-terrain-mesh "MARTINI: Real-Time RTIN Terrain Mesh")

Some cool work from [Vladimir Agafonkin](https://twitter.com/mourner "Vladimir Agafonkin") on [a library for RTIN mesh generation](https://github.com/mapbox/martini "martini"), with an interactive notebook to experiment with it [on Observable](https://observablehq.com/@mourner/martin-real-time-rtin-terrain-mesh "Real-Time Terrain Mesh"):

> An RTIN mesh consists of only right-angle triangles, which makes it less precise than Delaunay-based TIN meshes, requiring more triangles to approximate the same surface. But RTIN has two significant advantages:
>
> 1. The algorithm generates a hierarchy of all approximations of varying precisions — after running it once, you can quickly retrieve a mesh for any given level of detail.
> 2. It's very fast, making it viable for client-side meshing from raster terrain tiles. Surprisingly, I haven't found any prior attempts to do it in the browser.

### 👨🏽‍🎨 [Design on a Deadline: How Notion Pulled Itself Back from the Brink of Failure](https://www.figma.com/blog/design-on-a-deadline-how-notion-pulled-itself-back-from-the-brink-of-failure/ "Design on a Deadline: How Notion Pulled Itself Back from the Brink of Failure")

This is an interesting piece on the [Figma](https://www.figma.com/ "Figma") blog about [Notion](https://www.notion.so "Notion") and their design process in getting the v1 off the ground a few years ago. I've been using Notion for a while and can attest to the craftsmanship in design and user experience. All the effort put in and iterated on really shows in how fluid the whole app feels.

### 📚 [Patrick Collison's Bookshelf](https://patrickcollison.com/bookshelf "Patrick Collison's Bookshelf")

I'm always a sucker for a curated list of reading recommendations. This one's from Stripe founder [Patrick Collison](https://twitter.com/patrickc "Patrick Collison"), who seems to share a lot my interests and curiosities.
