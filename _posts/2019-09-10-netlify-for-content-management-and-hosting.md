---
layout: post
date: 2019-09-10
title: "Netlify for Content Management and Hosting"
description: "Using Netlify for hosting and content management."
categories: blog
tags:
- technology
- personal
---

We've been exploring options for adding a CMS to our [Jekyll](https://jekyllrb.com)-powered website for [Fulcrum](https://www.fulcrumapp.com/ "Fulcrum") over the last couple of weeks, looking for ways to add more content editor-friendly capabilities without having to overhaul everything under the hood, or move to a full hosted CMS like Wordpress. The product and design teams responsible for the technical development of the website all prefer the simplicity and flexibility of static site generators, but understand the relative opacity of learning git, command lines, and the vagaries of something like Jekyll for team members just writing content.

One of the options we've been looking at is [Netlify CMS](https://www.netlifycms.org/ "Netlify CMS"), along with their deployment and hosting platform as a GitHub Pages replacement. Their CMS is [open source](https://github.com/netlify/netlify-cms "netlify-cms on GitHub"), and it's attractive because of how simple it is to wire up to your static site with a single YAML file. Essentially all you need to do is define your content types in the configuration, then the CMS generates all of the editing UI for creating new or editing existing markdown files.

To kick the tires, I set it up locally for this site, and also ended up migrating the hosting for the entire site over to Netlify. The transition was totally seamless; now I've got my site running with the latest and greatest Jekyll and other libraries, added a CMS for when I want to quickly make edits or posts without involving a git workflow, and Netlify's CDN is blazing fast. I love that none of the rest of my workflow using a git repo, markdown, or Jekyll has to change — all pushes to `master` trigger automated tests and deploys on Netlify.

There are some other things there I'm going to experiment with, especially the option for post-processing operations like minifying CSS and Javascript, as well as lossless image compression, both in service of page speed performance improvements.
