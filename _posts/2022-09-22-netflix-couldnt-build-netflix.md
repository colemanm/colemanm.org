---
layout: link
date: 2022-09-23 10:37:11
title: "Netflix Couldn't Build Netflix"
target: https://medium.com/notbinary/the-paradox-of-scale-c0c6546c8c61
description: "The things hyperscale companies do now would've stunted their early success."
categories: blog
tags:
- growth
- startups
- technology
- scaling

links:
- url: https://medium.com/notbinary/the-paradox-of-scale-c0c6546c8c61
  title: "The Paradox of Scale"
  icon: 📈
---

David Carboni makes a great point in [this piece](https://medium.com/notbinary/the-paradox-of-scale-c0c6546c8c61 "The Paradox of Scale"): successful powerhouse businesses, paragons of scaling up (your Netflixes, Googles, Ubers, et al), could never build the disruptive, fast-moving products that made them successful from their positions today:
 
> Admired and respected as towering giants of our digital world, our hero companies emanate an almost mythical quality. The scale, power and inspiration they command are the stuff of legend. Glib statements about "*business*" distort their stories into gaudy two-dimensional caricatures whilst organisations seeking Digital Transformation aspire to emulate what they see in this theatre. Paradoxically our heroes would be the first to point out they wouldn’t be able to build themselves as they stand today.

So much of what's required to *actually* scale to Google or Netflix level is fundamentally unknown and actually nonexistent when they ran into their scaling frictions. Due to their unique needs to deliver their products to hundreds of millions of simultaneous users, Netflix builds [Chaos Monkey](https://netflix.github.io/chaosmonkey/ "Netflix's Chaos Monkey"), Google creates [Kubernetes](https://kubernetes.io/ "Kubernetes"). There's nothing wrong with these tools; they solve problems that are nearly one-of-a-kind for businesses that are in a class of very few.

The envy of their ability to scale, and an overconfidence that "I'll need this one day, too", tempts startups to *build for scale* way too early. But the cause-effect on their success is misattributed. These megascalers didn't get to hypergrowth because they built deployment automations, [CI/CD](https://en.wikipedia.org/wiki/CI/CD "CI/CD") magic, or [microservice](https://microservices.io/ "Microservices")'d their architecture. They did those things *because* their early quick-and-dirty, [unscalable experimentation](http://paulgraham.com/ds.html "Do Things That Don't Scale") helped them find generational product-market fit first.

From where they sit today, their inventions for scale would be active impediments to disruptive innovation.

> Success is a messy business, exploratory, trying, failing, scratching your head, learning something new, trying to think different.
