---
layout: link
date: 2018-12-13
title: "Launching Annotations"
target: https://www.fulcrumapp.com/blog/introducing-photo-annotations/
description: "Shipping photo annotation support in Fulcrum."
categories: blog
tags:
- Fulcrum
- product
---

This was a long time in the making. We’ve launched our latest big feature in Fulcrum: [photo annotations](https://www.fulcrumapp.com/blog/introducing-photo-annotations/).

This feature was an interesting thing to take on. Rather than doing it the quick and dirty way, we did it right and built customized framework we could use across platforms. Because the primary interfaces for annotating are iOS and Android, the library is built in JavaScript and cross-compiled to each native mobile environment, which allows us to lean on a single centralized codebase to support both of our mobile platforms. We even have plans to build annotation support into our web-based [Editor](https://www.fulcrumapp.com/blog/introducing-the-new-editor/) eventually, using the same core.

{% include image.html file="fulcrum-annotations.jpg" description="Annotations for Fulcrum" caption="no" %}

This was an exciting effort to watch come together. From architecting how it’d all work, to building the core, to winnowing down the list of edge cases and quirks, and finally shipping the final shiny new release.

Our entire engineering team — from the core web dev team to mobile — should be commended for the collaborative effort that brought this together. There’s nothing like the feeling of shipping new features that are accretive and valuable to our platform.
