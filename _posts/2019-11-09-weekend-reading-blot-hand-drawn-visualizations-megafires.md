---
layout: post
date: 2019-11-09 17:41:35
title: "Weekend Reading: Blot, Hand-Drawn Visualizations, and Megafire Detection"
description: "A new blogging tool, the complexity of hand-drawn visualizations, and detecting wildfires from satellites."
categories: blog
tags:
- weekend reading
- writing
- open source
- visualization
- science
- satellite
- maps
- weather

links:
- url: https://blot.im/
  title: "Blot.im"
  icon: 📝
- url: https://medium.com/@robsimmon/handcrafted-visualization-precision-751fa2f465f8
  title: "Handcrafted Visualization: Precision"
  icon: 🖋
- url: https://medium.com/descarteslabs-team/the-satellites-hunting-for-megafires-afa1305fdc2c
  title: "The Satellites Hunting for Megafires"
  icon: 🔥
---

### 📝 [Blot.im](https://blot.im/ "Blot.im")

Blot is a super-minimal [open source](https://github.com/davidmerfield/Blot "Blot") blogging system based on plain text files in a folder. It supports markdown, Word docs, images, and HTML — just drag the files into the folder and it generates web pages. I love simple tools like this.

### 🖋 [Handcrafted Visualization: Precision](https://medium.com/@robsimmon/handcrafted-visualization-precision-751fa2f465f8 "Handcrafted Visualization: Precision")

An interesting post from Robert Simmon from Planet. These examples of visualizations and graphics of physical phenomena (maps, cloud diagrams, drawings of insects, planetary motion charts) were all hand-drawn, in an era where specialized photography and sensing weren’t always options.

> A common thread between each of these visualizations is the sheer amount of work that went into each of them. The painstaking effort of transforming a dataset into a graphic by hand grants a perspective on the data that may be hindered by a computer intermediary. It’s not a guarantee of accurate interpretation (see Chapplesmith’s flawed conclusions), but it forces an intimate examination of the evidence. Something that’s worth remembering in this age of machine learning and button-press visualization.

I especially love that Apollo mission “lunar trajectory” map.

### 🔥 [The Satellites Hunting for Megafires](https://medium.com/descarteslabs-team/the-satellites-hunting-for-megafires-afa1305fdc2c "The Satellites Hunting for Megafires")

Descartes Labs built a wildfire detection algorithm and tool that leans on NASA’s GOES weather satellite thermal spectrum data, in order to detect wildfires by temperature:

> While the pair of GOES satellites provides us with a dependable source of imagery, we still needed to figure out how to identify and detect fires within the images themselves. We started simple: wildfires are hot. They are also hotter than anything around them, and hotter than at any point in the recent past. Crucially, we also know that wildfires start small and are pretty rare for a given location, so our strategy is to model what the earth looks like in the absence of a wildfire, and compare it to the situation that the pair GOES satellites presents to us. Put another way our wildfire detector is essentially looking for thermal anomalies.
