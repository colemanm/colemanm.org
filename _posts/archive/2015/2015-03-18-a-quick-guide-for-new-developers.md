---
layout: post
date: 2015-03-18
title: "A Quick Guide for New Developers"
description: "Young people interested in learning how to code could learn a lot by starting with the smaller steps. Instead of diving immediately into learning node.js, or beginning with “Build Your Own Rails App in 15 Minutes” blog posts, focus your energy on some foundations that will be 100% useful in building your skills as an engineer."
categories: blog
tags:
- business
- education
- software development
---

_This entire post comes with a caveat: I am **not** a software engineer. I do build a [software product](https://www.fulcrumapp.com/), and work with a [bunch of people](https://spatialnetworks.com/company/) way smarter than me, though. I’m experienced enough to have an opinion on the topic._

I talk to lots of young people looking to get into the software world. Sometimes they want to build mobile apps or create simple tools, and sometimes looking to create entire products. There are a lot of possible places to start. The world is full of blog posts, podcasts, books, and videos that purport to “teach you to code”. Don’t get me wrong, it’s an awesome world we live in where this stuff is accessible, but I think people get priorities twisted during that early impressionable stage by thinking they can make a successful iPhone app from scratch in a few months. Even if it’s _possible_, is that really a life goal? Or do you want to actually become an engineer?

Young people interested in learning how to code could learn a lot by starting with the smaller steps. Instead of diving immediately into learning node.js, or beginning with “Build Your Own Rails App in 15 Minutes” blog posts, focus your energy on some foundations that will be 100% useful in building your skills as an engineer.

In no particular order:

{% include image.html file="the-terminal.jpg" description="The terminal" caption="no" %}

## Learn how to use the Linux command line

It almost doesn’t even matter what exactly you do with Linux to get started on this. Install some variant of the OS on a computer or virtual machine, and start trying to do stuff. Install packages, set up PHP, get Postgres running. Most importantly: learn the basic command line tools that you’ll use for the rest of your working life &mdash; things like grep, sed, cat, ack, curl, find. Think of these as tools of the trade; once you know how to work them, you’ll use them every day. Compare your craft to cooking. It’s possible to create good food without a razor sharp chef's knife, a large rigid cutting board, and fresh ingredients, but it's _a lot easier_ when you have them.

{% include image.html file="tools.jpg" description="Work on tools" caption="no" %}

## Work on tools instead of systems

Starting out by building entire products is a bad idea. The most readily available [ideas](http://paulgraham.com/startupideas.html) are ones that require a lot of moving parts, typically. These are the ones that sound fun. Starting to assemble some knowledge by building your own blog engine or social sharing site or photo database system won't teach you _nothing_, but it puts the cart before the horse. A few hours into building your photo sharing site (with an objective of making something to _share photos_) you’ll be working on a login system and a way to reset passwords, instead addressing the problem you identified to solve in the first place. The easier place to start is to identify small pain points in your technology life, and build utilities to fill these voids. A [script](http://ctrlq.org/code/19747-google-forms-upload-files) for uploading files to Google Drive. [Wrappers](https://github.com/colemanm/ogrtool) to simplify other utilities. A command line tool to [strip whitespace from files](https://github.com/zhm/kw). You’ll be biting off something you can actually build as a novice, _and_ you might be able to ship and open source something useful to others (one of the bar-none best resume builders around). Scratching small itches is your friend when you’re learning.

{% include image.html file="the-cloud.jpg" description="The Cloud, c. 1990" caption="no" %}

## Prime yourself on “devops” knowledge

The “cloud” sounds like a huge loaded buzzword, and it is. But nearly every useful technology stack, even if it’s not a publicly facing consumer product is now built using these core architectures. If your mission is to build iOS games you’ll think this stuff isn’t valuable, but learning how to stand up instances on AWS, install database servers, and understanding the network security stack will _guaranteed_ add indispensable chunks of knowledge that you will need in the near future. This [stuff is free](https://aws.amazon.com/free/) now to get a place to hack around, so there are no excuses to not plunging in.

## Spend hours on GitHub

Dig for [open source projects](https://github.com/explore) you find interesting. Pick apart their code. Follow the developers. Read the issue threads. You’ll find something you can contribute back to, without a doubt, even if in tiny ways at first. This is not only hugely satisfying to an engineer’s brain, but you’ll slowly build valuable trust and presence within the community. Don’t be afraid to dig in and have conversations on GitHub projects (trust me, no one else is scared to make comments or offer opinions). Being thoughtful, considerate, positive, and thinking like you’re working as a team are excellent ways to get invited into the fold on open source efforts.

## See also, traditional resources

[Code schools](https://www.codeschool.com/) and [crash courses](https://www.codecademy.com/) are awesome new resources, without a doubt. I don’t mean to discount traditional educational structures for foundation-building and creating a regimented path for walking through the process. The good ones will teach you plenty of my previously-mentioned core pieces without getting you ahead of yourself. But the bad ones get new students thinking about picking libraries and frameworks immediately. So little of the initial hill to climb has to do with your choice of Javascript vs. Python vs. Ruby, or whether to use Angular or Backbone in your first app. _None of that matters_ because you don’t really know anything yet, and you haven’t even climbed the initial three or four rungs of the ladder. You shouldn’t attempt leaping to the sixth or seventh rung without having some scars from the lower levels. Jobs that have you mucking around with data in VBscript or maintaining old SQL Server databases are (unfortunately) excellent seasoning for your career. This is usually where you’ll determine whether you really like this career choice that much. If you come out of the trenches still interested in being a programmer, you’ll love it when you get to work on something satisfying, and you’ll appreciate what you have.

I’m a huge fan of starting by getting your hands dirty. This post was intended to help you find the best mud pits to put those hands into.
