---
layout: post
date: 2018-10-21
title: "Writing on the iPad"
description: "How I've got my publishing setup working on the iPad for writing and publishing with Jekyll."
categories: blog
tags:
- workflow
- apps
- writing
---

I [posted]({{ site.url }}/post/a-week-with-ipad/) a couple weeks ago about moving much of my computing activity to the iPad full time. Part of what I had to crack to make that possible was a writing workflow that supported using the tools I prefer, and a method for publishing and previewing with [Jekyll](https://jekyllrb.com/).

I’ve been using Jekyll and [GitHub Pages](https://pages.github.com) for this site for 5+ years. Other CMS systems are interesting and getting better, but there’s something about the total control and simplicity of static sites that keeps me here. This workflow is great with a full Mac setup, but on iPad or mobile, there isn’t a straightforward way to write and publish new content. Most writers wouldn’t want to bother with this and would move to a CMS to clear the hurdles. Given that Jekyll today still requires a working knowledge of git and a command line interface, I recognize that this is highly personal to me, so I wouldn’t really recommend this setup to people focused on writing. But I sort of get a kick out of getting this stuff working and use it as a learning experience.

The main sticking point I needed to solve was previewing content. Jekyll has a built-in web server you can run locally (what happens when you run `jekyll serve`) on the terminal that generates and serves the site at `localhost` where you can preview before you publish. On the Mac this is simple: checkout [repository](https://github.com/colemanm/colemanm.github.com), run command to generate site, browse to URL in browser. The first two hurdles aren’t trivial on the iPad. There’s no native unix-like shell on iOS, only terminal apps. This means you need to have a server to connect to to do anything.

My solution starts with running a [micro EC2 instance](https://aws.amazon.com/free/) on AWS. For about $10/month I have a full Ubuntu server running, on which I can install whatever I want[^server]. Getting the site checked out and running locally on the server is fairly straightforward if you’ve got a working knowledge of Linux and comfort on the shell[^shellusage]. Next I had to figure out what software on the iPad I could use to combine the writing, versioning, and pushing up to the server for preview or testing purposes. Digging around on this topic I discovered a solution that’s working well so far: a combination of [Working Copy](https://workingcopyapp.com/) and [Textastic](https://www.textasticapp.com/). The first is a full-featured git client you can use to clone repositories and manage versioning. The second is a rich code editor for iOS that is very impressive in its depth. Inside of Textastic you can add a Working Copy repo as a working directory, meaning your edits happen directly in the repo. With my iPad Pro, I put the Working Copy app in the right side multitask panel so I can manage branching, commits, and pushes while I’ve also got the editor open. In order to access the server and run the site in dev mode, Textastic also has a built-in SSH terminal.

{% include image.html file="textastic-working-copy.png" description="Working Copy and Textastic" caption="no" %}

Getting through this initial setup was a bit cumbersome — getting the SSH keys sorted out between my main machine, GitHub permissions, and iOS was a bit of a runaround — but I’ve got it all working smoothly now. One other aspect is that I still do most draft writing and idea-keeping in [Ulysses](https://ulysses.app/), which is my app of choice for any writing on iOS or macOS. So there’s a step to get the content moved over when ready to a real post in git. I’m good with this, though. I treat Ulysses sheets like idea scratchpads; so I’ll have dozens of partially-written post ideas collected there and little by little turn some into completed articles. Managing this collection of randomness makes for kind of a mess in a git repository, so it’s nice to have it organized elsewhere.

Overall this workflow allows me to stick with the tech stack I’ve gotten used to while affording the flexibility to write on the iPad or my phone. From a writing perspective I find the constraints a helpful aid in focusing on the writing and not getting distracted to mess with other things. I have a couple of other helper tricks I’ll write about later that make working with Jekyll easier. As I work with this flow some more, I’ll make sure to note any other tricks once the comfort of habit sets in.

[^server]: I also use this instance to try out other server tools I want to play around with — a Linux sandbox.
[^shellusage]: A good topic for a future post on common tools and techniques all computer users should know…
