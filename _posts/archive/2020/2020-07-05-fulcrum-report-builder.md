---
layout: post
date: 2020-07-05 14:03:22
title: "Fulcrum's Report Builder"
description: "Launching Fulcrum's Report Builder."
img: /images/post-images/fulcrum-report-builder.png
categories: blog
tags:
- Fulcrum
- product
- work

links:
- url: https://www.fulcrumapp.com/blog/new-basic-and-advanced-reports/
  title: "Fulcrum's Report Builder"
  icon: 📑
---

After about 6-8 months of forging, shaping, research, design, and engineering, we've launched the [Fulcrum Report Builder](https://www.fulcrumapp.com/blog/new-basic-and-advanced-reports/ "Fulcrum Report Builder"). One of the key use cases with Fulcrum has always been using the platform to design your own data collection processes with our App Builder, perform inspections with our mobile app, then generate results through our Editor, raw data integrations, and, commonly, generating PDF reports from inspections.

{% include image.html file="fulcrum-report-builder.png" description="Fulcrum Report Builder" caption="no" %}

For years we’ve offered a basic report template along with an ability to customize the reports through our Professional Services team. What was missing was a way to expose our report-building tools to customers.

With the Report Builder, we now have two modes available: a Basic mode that allows any customer to configure some parameters about the report output through settings, and an Advanced mode that provides a full IDE for building your own fully customized reports with markup and JavaScript, plus a templating engine for pulling in and manipulating data.

Under the hood, we overhauled the generator engine using a library called [Puppeteer](https://github.com/puppeteer/puppeteer "Puppeteer"), a headless Chrome node.js API for doing many things, including converting web pages to documents or screenshots. It’s lightning fast and allows for a live preview of your reports as you’re working on your template customization.

Feedback so far has been fantastic, as this has been of the most requested capabilities on the platform. I can’t wait to see all of the ways people end up using it.

We’ve got a lot more in store for the future. Stay tuned to see what else we add to it.
