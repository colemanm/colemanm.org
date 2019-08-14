---
layout: post
date: 2019-08-14
title: "Shipping the Right Product"
description: "A post from the archives on how we ship product on the Fulcrum team."
img: /images/post-images/spreadsheet-to-mobile.png
categories: blog
tags:
- product
- Fulcrum
- work

links:
- url: https://www.fulcrumapp.com/blog/shipping-the-right-product/
  title: "Shipping the Right Product"
---

_This is one from the archives, [originally written](https://www.fulcrumapp.com/blog/shipping-the-right-product/ "Shipping the Right Product") for the Fulcrum blog back in early 2017. I thought I'd resurface it here since I've been thinking more about continual evolution of our product process. I liked it back when I wrote it; still very relevant and true. It's good to look back in time to get a sense for my thought process from a couple years ago._

In the software business, a lot of attention gets paid to “shipping” as a badge of honor if you want to be considered an innovator. Like any guiding philosophy, it’s best used as a general rule than as the primary yardstick by which you measure every individual decision. [Agile](https://en.wikipedia.org/wiki/Agile_software_development "Agile"), [scrum](https://en.wikipedia.org/wiki/Scrum_(software_development) "Scrum"), [TDD](https://en.wikipedia.org/wiki/Test-driven_development "Test-driven development"), [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development "Behavior-driven development") — they’re all excellent practices to keep teams focused on results. After all, the longer you’re polishing your work and *_not_* putting it in the hands of users, the *_less_* you know about how they’ll be using it once you ship it!

These systems followed as gospel (particularly with larger projects or products) can lead to attention on the **how** rather than the **what** — thinking about the process as shipping "lines of code" or what text editor you're using rather than useful results for users. Loops of user feedback are essential to building the *right* solution for the problem you’re addressing with your product.

{% include image.html file="spreadsheet-to-mobile.png" description="Shipping the right product" caption="no" %}

Thinking more deeply about aligning the desires to both ship *_something_* rapidly while ensuring it aligns with product goals, it brings to mind a few questions to reflect on:

* What are you shipping?
* Is what you’re shipping actually useful to your user?
* How does the structure of your team impact your resulting product?

How can a team iterate and ship fast, while also delivering the product they’re promising to customers, that solves the expressed problem?

### Defining product goals

In order to maintain a high tempo of iteration without simply measuring numbers of commits or how many times you push to production each day, the goals need to be oriented around the end result, not the means used to get there. Start by defining what success looks like in terms of the problem to be solved. Harvard Business School professor Clayton Christensen developed the [jobs-to-be-done](https://hbr.org/2016/09/know-your-customers-jobs-to-be-done "Jobs to be Done") framework to help businesses break down the core linkages between a user and why they use a product or service[^christensen]. Looking at your product or project through the lens of the “jobs” it does for the consumer helps clarify problems you should be focused on solving.

Most of us that create products have an idea of what we’re trying to achieve, but do we really look at a new feature, new project, or technique and truly tie it back to a specific job a user is expecting to get done? I find it helpful to frequently zoom out from the ground level and take a wider view of all the distinct problems we’re trying to solve for customers. The JTBD concept is helpful to get things like technical architecture out of your way and make sure what’s being built is solving the big problems we set out to solve. All the roadmaps, Gantt charts, and project schedules in the world won’t guarantee that your end result solves a problem[^planning]. Your product could become an immaculately built ship that’s sailing in the wrong direction. For more insight into the jobs-to-be-done theory, check out [This is Product Management's excellent interview](https://www.thisisproductmanagement.com/episodes/jobs-to-be-done/ "JTBD podcast") with its co-creator, Karen Dillon.

### Understanding users

On a similar thread as jobs-to-be-done, having a deep understanding of what the user is trying to achieve is essential in defining what to build.

This quote from [the article](https://hbr.org/2016/09/know-your-customers-jobs-to-be-done "Jobs to be Done") gets to the heart of why it matters to understand with empathy what a user is trying to accomplish, it’s not always about our engineering-minded technical features or bells and whistles:

> Jobs are never simply about function — they have powerful social and emotional dimensions.

The only way to unroll what’s driving a user is to have conversations and ask questions. Figure out the relationships between what the problem is and what they think the solution will be. Internally we talk a lot about this as "[understanding pain](https://www.fulcrumapp.com/blog/understanding-pain-in-business-workflow/ "Understanding Pain in Business Workflow")". People “hire” a product, tool, or person to reduce some sort of pain. Deep questioning to get to the root causes of pain is essential. Often times people want to self-prescribe *their* solution, which may not be ideal. Just look how often a patient browses WebMD, then goes to the doctor with a preconceived diagnosis, without letting the expert do their job.

On the flip side, product creators need to enter these conversations with an open mind, and avoid creating a *solution looking for a problem*. Doctors shouldn’t consult patients and make assumptions about the underlying causes of a patient’s symptoms! They’d be in for some serious legal trouble.

### Organize the team to reflect goals

One of my favorite ideas in product development comes from [Steven Sinofsky](https://twitter.com/stevesi "Steven Sinofsky"), former Microsoft product chief of Office and Windows:

> "Don’t ship the org chart."

{% include image.html file="org-chart.jpg" description="Org chart" caption="no" %}

The salient point being that companies have a tendency to create products that align with areas of responsibility within the company[^orgchart]. However, the user *doesn’t care at all* about the dividing lines within your company, only the resulting solutions you deliver.

A corollary to this idea is that over time companies naturally begin to look like their customers. It’s clearly evident in the federal contracting space: federal agencies are big, slow, and bureaucratic, and large government contracting companies start to reflect these qualities in their own products, services, and org structures.

With our product, we see three primary points to make sure our product fits the set of problems we’re solving for customers:

* **For some, a toolbox** — For small teams with focused problems, Fulcrum should be seamless to set up, purchase, and self-manage. Users should begin relieving their pains immediately.
* **For others, a total solution** — For large enterprises with diverse use cases and many stakeholders, Fulcrum can be set up as a total turnkey solution for the customer’s management team to administer. Our team of in-house experts consults with the customer for training and on-boarding, and the customer ends up with a full solution *and* the toolbox.
* **Integrations as the “glue”** — Customers large and small have systems of record and reporting requirements with which Fulcrum needs to integrate. Sometimes this is simple, sometimes very complex. But *always* the final outcome is a unique capability that can’t be had another way without building their own software from scratch.

Though we’re still a small team, we’ve tried to build up the functional areas around these objectives. As we advance the product and grow the team, it's important to keep this in mind so that we’re still able to match our solution to customer problems.

For more on this topic, Sinofsky’s post on "[Functional vs. Unit Organizations](https://medium.learningbyshipping.com/functional-versus-unit-organizations-6b82bfbaa57 "Functional vs Unit Organizations")" analyzes the pros, cons, and trade offs of different org structures and the impacts on product. A great read.

### **Continued reflection, onward and upward 📈**

In order to stay ahead of the curve and Always Be Shipping (the Right Product), it’s important to measure user results, constantly and honestly. The assumption should be that any feature could and should be improved, if we know enough from empirical evidence *how* we can make those improvements. With this sort of continuous reflection on the process, hopefully we’ll keep shipping the Right Product to our users.

[^christensen]: [Christensen](https://en.wikipedia.org/wiki/Clayton_M._Christensen "Clayton Christensen") is most well known for his work on [disruption theory](https://en.wikipedia.org/wiki/Disruptive_innovation "Disruptive innovation").
[^planning]: Not to discount the value of team planning. It’s a crucial component of efficiency. My point is the clean Gantt chart on its own isn’t solving a customer problem!
[^orgchart]: Of course this problem is only minor in small companies. It’s of much greater concern to the Amazons and Microsofts of the world.
