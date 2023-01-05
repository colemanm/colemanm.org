---
layout: post
date: 2020-02-08 16:39:45
title: "Weekend Reading: Software Dependencies, Conversational AI, and the iPad at 10"
description: "Software dependency drift, Google's latest conversational AI, and the iPad at age 10."
categories: blog
tags:
- weekend reading
- software
- engineering
- artificial intelligence
- NLP
- iPad
- Apple

links:
- url: https://nimbleindustries.io/2020/01/31/dependency-drift-a-metric-for-software-aging/
  title: "Dependency Drift: A Metric for Software Aging"
  icon: 🛠
- url: https://ai.googleblog.com/2020/01/towards-conversational-agent-that-can.html
  title: "Towards a Conversational Agent that Can Chat About Anything"
  icon: 💬
- url: https://daringfireball.net/2020/01/the_ipad_awkwardly_turns_10
  title: "The iPad Awkwardly Turns 10"
  icon: 📱
---

### 🛠 [Dependency Drift: A Metric for Software Aging](https://nimbleindustries.io/2020/01/31/dependency-drift-a-metric-for-software-aging/ "Dependency Drift: A Metric for Software Aging")

We've been doing some thinking on our team about how to systematically address (and repay) technical debt. With the web of interconnected dependencies and micro packages that exists now through tools like [npm](https://www.npmjs.com/ "npm") and [yarn](https://yarnpkg.com/ "yarn"), no single person can track all the versions and relationships between modules. This post proposes a "Dependency Drift" metric to quantify how far out of date a codebase is on the latest updates to its dependencies:

> * Create a numeric metric that incorporates the volume of dependencies and the recency of each of them.
> * Devise a simple high level A-F grading system from that number to communicate how current a project is with it’s dependencies.  We’ll call this a drift score.
> * Regularly recalculate and publish for open source projects.
> * Publish a command line tool to use in any continuous integration pipeline. In CI, policies can be set to fail CI if drift is too high. Your drift can be tracked and reported to help motivate the team and inform stakeholders.
> * Use badges in source control README files to show drift, right alongside the projects’s Continuous Integration status.

### 💬 [Towards a Conversational Agent that Can Chat About Anything](https://ai.googleblog.com/2020/01/towards-conversational-agent-that-can.html "Towards a Conversational Agent that Can Chat About Anything")

A technical write-up on a Google chatbot called "Meena," which they propose has a much more realistic back-and-forth response technique:

> Meena is an end-to-end, neural conversational model that learns to respond sensibly to a given conversational context. The training objective is to minimize perplexity, the uncertainty of predicting the next token (in this case, the next word in a conversation). At its heart lies the Evolved Transformer seq2seq architecture, a Transformer architecture discovered by evolutionary neural architecture search to improve perplexity.

Read more in their paper, "[Towards a Human-like Open-Domain Chatbot](https://arxiv.org/abs/2001.09977 "Towards a Human-like Open-Domain Chatbot")".

### 📱 [The iPad Awkwardly Turns 10](https://daringfireball.net/2020/01/the_ipad_awkwardly_turns_10 "The iPad Awkwardly Turns 10")

John Gruber uses the iPad's recent 10th birthday to reflect missed opportunity and how much better a product it could be/could have been:

> Ten years later, though, I don’t think the iPad has come close to living up to its potential. By the time the Mac turned 10, it had redefined multiple industries. In 1984 almost no graphic designers or illustrators were using computers for work. By 1994 almost all graphic designers and illustrators were using computers for work. The Mac was a revolution. The iPhone was a revolution. The iPad has been a spectacular success, and to tens of millions it is a beloved part of their daily lives, but it has, to date, fallen short of revolutionary.

I would agree with most of his criticisms, especially on the multitasking UI and the general impenetrability of the gesturing interfaces. As a very "pro iPad" user, I would love to see a movement toward the device coming into its own as a distinctly different platform than macOS and desktop computers. It has amazing promise even outside of creativity (music, art) and consumption. With the right focus on business model support, business productivity applications could be _so_ much better.
