---
layout: post
date: 2018-11-09
title: "Link Queueing with Shortcuts"
description: “Using the Shortcuts app to queue up links in Ulysses.”
categories: blog
tags:
- automation
- productivity
- shortcuts
---

Most reading on my iPad happens in Reeder, Instapaper, or a browser. I wanted to come up with a way to save URLs in a text file for easy access for new link posts and archive purposes. This seems like a great candidate use case for trying out Workflow again which Apple has renamed Shortcuts.

I use Ulysses for most note-taking and writing purposes on the iPad. It syncs with iCloud between desktop and mobile, has good organization support, and is a good Markdown editor. it also is integrated with Shortcuts.

First I set up a sheet in Ulysses called “Link Queue” where I'd keep a running list of URLs to save for later. After that placeholder is there, I pulled up the Share view on that Sheet (by sliding left to see more options), then tapped the “Copy Callback Identifier” option to grab the Sheet ID. That’s what’s needed in the action used in the Shortcut.

{% include image-partial.html file="ulysses-share-sheet.jpg" description="Ulysses Share Sheet" width="350" %}

In Shortcuts you only need a couple of steps. I set the shortcut to accept Text or URLs (in case I also want to append selected text blocks to the same file) and pass that to the “Add to Ulysses Sheet” action. This is where the ID copied above is entered. That’s all — link appended to the end, with a new line after, ready for the next in the queue.

{% include image.html file="shortcuts-link-queue.jpg" description="Shortcuts link queue" %}

This has already been a handy, quick way to keep URLs saved in a place where I can get them later.

Every time I mess around with Shortcuts I feel like I’m missing out on some handy automations. I need to keep it in mind when working to think through other repeated activities to streamline.