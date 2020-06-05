---
layout: post
date: 2020-06-05 17:25:51
title: "Annotating the Web with Memex"
description: "Memex is building a web annotation and bookmarking tool for the private, distributed web."
img: /images/post-images/memex-brain.jpg
categories: blog
tags:
- internet
- tools
- software
- decentralization
- privacy
---

I linked [a few weeks ago](/post/memex/ "Memex") to a new tool called [Memex](https://getmemex.com/ "Get Memex"), a browser extension that touts itself as bookmarking for "power users of the web." Its primary unique differentiator is how they approach the privacy angle.

I'm a couple of weeks into using it and it brings an interesting new approach to the world of bookmarking tools like [Pinboard](https://pinboard.in/ "Pinboard") or [Raindrop](https://raindrop.io/ "Raindrop"), [both](/post/raindrop-for-bookmarks/ "Raindrop for Bookmarks") [of which](/post/pinboard/ "Pinboard") I've used a lot. Raindrop has been my tool of choice lately, but it's heavy for what I really want, which is a simple, fast way to toss things into a box with tagging nomenclature to organize.

{% include image.html file="memex-brain.jpg" description="Memex" caption="no" %}

On the privacy topic from [Wednesday's post](/post/privacy-with-utility/ "Privacy with Utility"), Memex is approaching their product with similar principles. It's is a browser extension only with no "cloud" element to it like most other services have. All of your data is stored client-side, and the only attachments to the cloud at all have to be opted-into, like syncing backups to Google Drive. It's got an [open source core](https://github.com/WorldBrain/Memex "Memex on GitHub") also, for maximum transparency on how it works. Reading the [vision document](https://medium.com/@WorldBrain/vision-mission-values-2020-update-d70aa35a638 "Memex Vision and Mission") gives you a sense of where they're headed:

> **The long-term mission of WorldBrain.io is to enable people to overcome information overload and the influence of misinformation through collaborative online-research.**
>
> We can’t research and understand all the topics we are exposed to well enough to not fall for misinformation. But we all are experts in some of those topics and could help each other understand them better — if we were able to share our existing knowledge more effectively with each other.

Decentralized knowledge management and web annotation is a movement I can get behind. I'm reminded of what [Fermat's Library](https://fermatslibrary.com/ "Fermat's Library") is doing with academic papers — creating a meta layer of knowledge connection on top research source material. Passages highlighted in Memex could be referenced from other pages to denote connection points or similarities, building a user-generated knowledge graph on top of any internet content.

With Memex you never have to leave the browser. It overlays a small right-hand sidebar on hover with commands for bookmarking, adding tags, or displaying annotations. And they're following through on their promise for power users with keyboard shortcuts. It also offers the option of indexing your browser history, which if you're using DuckDuckGo but still want to archive your history for yourself could be useful. I don't care much one way or another about this particularly, but it's cool to have the option.

From mobile they have something interesting going. There's a "Memex Go" app that works well for quickly bookmarking things from the Share Sheet on iOS. Syncing is a paid feature that works through a pairing process with end-to-end encryption to move data between mobile and desktop, synced over wifi. I haven't tried this yet but I'm looking forward to checking it out. Seems like occasional syncing is all you'd need to move data between desktop and mobile, so this model could work fine.

I don't think Memex has any integrations yet with other tools, but ones that come to mind that I'd love to see at some point are with two of my favorites: [Readwise](/post/readwise-and-instapaper/ "Readwise and Instapaper") and [Roam](/post/getting-comfortable-with-roam/ "Getting Comfortable with Roam"). From a technical standpoint I'm not sure how one would integrate a client-side database like what Memex has with a server-side one, but perhaps there could be a "push" capability to sync data up from Memex on-demand to integration points. With Memex's highlights, perhaps I could decide if and when I want to send my highlights up to Readwise, rather than Readwise doing the pulling. In the case of Roam, even simple tools to drag highlights or bookmarks over as blocks in Roam pages would be a cool addition.
