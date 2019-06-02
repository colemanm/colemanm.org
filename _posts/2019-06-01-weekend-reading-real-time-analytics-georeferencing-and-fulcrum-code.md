---
layout: post
date: 2019-06-01
title: "Weekend Reading: Real Time Analytics, Georeferencing, and Fulcrum Code"
description: "Real-time analytics, georeferencing with QGIS, and the Fulcrum Code Editor."
categories: blog
tags:
- weekend reading
- analytics
- georeferencing
- imagery
- QGIS
- Fulcrum

links:
- url: https://mcfunley.com/whom-the-gods-would-destroy-they-first-give-real-time-analytics
  title: Whom the Gods Would Destroy, They First Give Real-time Analytics
- url: https://medium.com/vcgi/georeferencing-vermonts-historic-aerial-imagery-2e52c0301b85
  title: "Georeferencing Vermont’s Historic Aerial Imagery in QGIS"
- url: https://www.fulcrumapp.com/blog/fulcrum-code-editor-improvements/
  title: "Fulcrum Code Editor"
---

### 📉 [Whom the Gods Would Destroy, They First Give Real-time Analytics](https://mcfunley.com/whom-the-gods-would-destroy-they-first-give-real-time-analytics "Whom the Gods Would Destroy, They First Give Real-time Analytics")

I thought this was a great post on how unnecessary "real-time" analytics can be when misused. As the author points out, it's almost never necessary to have data that current. With current software it's possible to have infinite analytics on everything, and as a result it's irresistable to many people to think of those metrics as essential for decision making.

> This line of thinking is a trap. It’s important to divorce the concepts of operational metrics and product analytics. Confusing how we do things with how we decide which things to do is a fatal mistake.

### 🗺 [Georeferencing Vermont’s Historic Aerial Imagery in QGIS](https://medium.com/vcgi/georeferencing-vermonts-historic-aerial-imagery-2e52c0301b85 "Georeferencing Vermont’s Historic Aerial Imagery in QGIS")

This is a great step-by-step guide to how to georeference data. I spent time years ago figuring this out but still never was able to do it very well. This guide is all you need to be able to georeference old maps.

### 🔺 [Fulcrum Code Editor](https://www.fulcrumapp.com/blog/fulcrum-code-editor-improvements/ "Fulcrum Code Editor")

We rebuilt the code editing environment in the Fulcrum App Designer, which is part of both the Data Events and Calculation Expression editing views. The team (led by Emily) did some great work on this using TypeScript and Microsoft's [Monaco](https://microsoft.github.io/monaco-editor/ "Monaco") project, with IntelliSense code completion. It's a great addition for our many power users to write better automations on top of Fulcrum.
