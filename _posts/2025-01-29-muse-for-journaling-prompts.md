---
layout: link
date: 2025-01-29 09:59:22
title: "Muse, a tool for journaling prompts"
target: https://muse.colemanm.xyz
description: "A simple tool for generating journaling prompts."
categories: blog
tags:
- journaling
- writing
- tools
- open source
---

So far this year I've gone headlong into what's possible with AI development, specifically using Cursor. I've been using it to write code, write blogs, and even write this post.

The potential for "personal software" is profound here. There've been a few times already where I wanted a simple script for automating something, and it wasn't even worth bothering to look around for pre-existing ones. I just had Cursor help me make my own. So I've decided to ship something once a month: a full project hosted and usable around a single idea.

When it comes to journaling and Morning Pages, I occasionally reference a list of journaling prompts I keep to help me get going. So in that spirit I built this tool, **Muse**.

Using a bulleted list of prompts in a markdown file, Muse will randomly display a prompt with each roll of the dice. I decided to build it with React and Expo to potentially make it available on mobile.

I'm not sure how much I'll use it, but it's a fun little project.

The source is on GitHub [here](https://github.com/colemanm/muse). You can modify the `prompts.md` file to edit or add any of your own prompts, too.
