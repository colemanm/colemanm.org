---
layout: link
date: 2019-12-10 16:38:58
title: "Hyrum's Law"
target: https://www.hyrumslaw.com/
description: "On the complexity of abstractions vs. implementations at scale."
categories: blog
tags:
- software

links:
- url: https://www.hyrumslaw.com/
  title: "Hyrum's Law"
---

I didn't know this was out there, a funny-yet-astute-and-accurate observation from a software engineer at Google:

> With a sufficient number of users of an API,
> it does not matter what you promise in the contract:
> all observable behaviors of your system
> will be depended on by somebody.

Even the tiniest, trivial behavior of your API is not only desirable by some user out there, it's critical. We have a joke internally that goes something like:

> "Don't change that `{API response | setting behavior | data storage format}`, my entire business model depends on it!

The only edit I would make to the Law is that the quantity of users required to start uncovering emergent, unplanned, and _assumed_ behaviors is much smaller than you would think.

We don't have near the scale of API or library usage as Google, and we encounter this regularly with our APIs.
