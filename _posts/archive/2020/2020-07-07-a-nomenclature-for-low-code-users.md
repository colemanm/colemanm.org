---
layout: post
date: 2020-07-07 17:21:04
title: "A Nomenclature for Low-Code Users"
description: "Developing a nomenclature for users of low-code software."
img: /images/post-images/low-code-user-types.jpg
categories: blog
tags:
- product
- product development
- design
- jobs to be done
- user experience
- low code
---

The [low-code "market"](https://medium.com/swlh/complete-introduction-to-the-low-code-ecosystem-defb9b260d20 "Low-Code Ecosystem") isn't really a market. Rather, I see it as an _attribute_ of a software product, an implementation factor in how a product works. A product providing low-code capability says nothing about its intended value — it could be a product for sending emails, building automation rules, connecting APIs, or designing mobile forms.

What are termed "LCAP" (low-code application platform) software are often better described as "tools to build your own apps, without having to write all the code yourself."

This post isn't really about low-code as a marketplace descriptor, but about refining the nomenclature for how we talk about users we have in mind when designing low-code tools. Who are we building them for? Who needs them the most?

As Aron Korenblit [wrote a few months back](http://read.aatt.io/issues/the-no-code-misnomer-224471 "The No-Code Misnomer"), low-code as a term isn't really about _code_, per se, but often things like process modeling, workflows, data flows, data cleanliness, speed of prototyping, and low cost trial and error:

> If what we’re trying communicate is that no-code helps _get things done faster_, we should elevate that fact in how we name ourselves instead of objecting to code itself.

For many years, all sorts of tools from [Mailchimp](https://mailchimp.com/ "Mailchimp") or [Webflow](https://webflow.com/ "Webflow") to [Fulcrum](https://www.fulcrumapp.com/ "Fulcrum") or [Airtable](https://airtable.com/ "Airtable") provide layers of capabilities for a continuum of user types, moving from the non-technical through to full developers. The non-tech space wants templates and WYSIWIG tools, the devs want an API, JavaScript customization, and full HTML/CSS editing suites. I think a two-type dichotomy isn't descriptive enough, though. We need a third "semi-technical" user in the middle.

The spectrum of users could look something like this — we analogize these to an Microsoft Excel user equivalent (parenthesized):

{% include image.html file="low-code-user-types.jpg" description="Users of low-code software" caption="no" %}

* **Novice** — anything that looks like code is totally opaque to novices. They're scared off by it and afraid to change anything for fear of breaking something (Can enter data in Excel, and maybe do some sorting, filtering, or data manipulation)
* **Tinkerer** — can parse through code examples and pre-existing scripts to roughly understand, uses trial and error and small adjustments to modify or piece together snippets for their own use case; often also can work with data and data tools like database applications and SQL (Can use formulas, pivot tables, lookups, and more with Excel, comfortable slicing and dicing data)
* **Developer** — fluent in programming languages; excited about the prospect of writing their own code from scratch, just wants to be pointed to the API docs (Can write VBScripts and macros in Excel, but mostly wants to escape its confines to build their own software)

Of course empowering the Novices is one of the primary goals with low-code approaches, as they're the least prepared to put together their own solutions. They need turn-key software.

And we can help Developers with low-code, too. If we can bootstrap common patterns and functionality through pre-existing building blocks, they can avoid repetitive work. Much of tool-building involves rebuilding 50-75% of the same parts you built for the last job, so low-code approaches can speed these folks up.

But the largest gap is that middle bunch of Tinkerers. Not only do they stand to gain the most from low-code tools. From my observations, that group is also the fastest-growing category. Every day as more tech-native people enter the workforce, or are compelled to dive into technical tools, people are graduating from Novice to Tinkerer status, realizing that many modern tools are resilient to experimentation and forgiving of user error. The tight feedback loops you can get from low-code affordances provide a cushion to try things, to tweak, modify, and customize gradually until you zero in on something useful. In many cases what a user decides is a "complete" solution is variable — there's latitude to work with and not an extremely rigid set of hard requirements to be met. By providing building blocks, examples, and snippets, Tinkerers can home in on a solution that works for them.

Those same low-code tactics in user experience also give Novices and Tinkerers the prototyping scaffolds to build partial that can be further refined by a Developer. Sometimes the prototyping stage is plenty to get the job done, but even for more complex endeavors can greatly reduce cost.
