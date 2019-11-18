---
layout: post
date: 2019-11-18 16:09:22
title: "Balancing Power and Usability"
description: "An essay from the past on the tensions between usability and complexity for power users."
categories: blog
tags:
- product
- Fulcrum
- design
---

_This is another one from the archives, written [for the Fulcrum blog](https://www.fulcrumapp.com/blog/balancing-power-vs-usability/ "Balancing Power with Usability") back in 2016._

Engineering is the art of building things within constraints. If you have no constraints, you aren't really doing engineering. Whether it's cost, time, attention, tools, or materials, you've always got constraints to work within when building things. Here's an excerpt describing the challenge facing the [engineer](https://en.wikipedia.org/wiki/Engineering "Engineering"):

> The crucial and unique task of the engineer is to identify, understand, and interpret the constraints on a design in order to produce a successful result. It is usually not enough to build a technically successful product; it must also meet further requirements.

In the development of [Fulcrum](https://www.fulcrumapp.com/ "Fulcrum"), we're always working within tight boundaries. We try to balance power and flexibility with practicality and usability. Working within constraints produces a better finished product — if (by force) you can't have everything, you think harder about what your product won't do to fit within the constraints.

<!-- more -->

{% include image.html file="power-usability.jpg" description="Microsoft Office, exemplifying 'feature creep'" %}

The practice of balancing is also relevant to our customers. Fulcrum is used by hundreds of organizations in the context of their own business rules and processes. Instead of engineering a software product, our users are engineering a solution to their problem using the Fulcrum app builder, custom workflow rules, reporting, and analysis, all customizable to fit the goals of the business. When given a box of tools to build yourself a solution to a problem, the temptation is high to try to make it do and solve everything. But with each increase in power or complexity, usability of your system takes a hit in the form of added burden on your end users to understand the complex system &mdash; they're there to use your tool for a task, finish the job, and go home.

This balance between power and usability is related to my last post on [treating causes rather than symptoms](https://www.fulcrumapp.com/blog/understanding-pain-in-business-workflow/ "Understanding Pain in Business Workflow") of pain. Trying too hard to make a tool solve every potential problem in one step can (and almost always does) lead to [overcomplicating](https://en.wikipedia.org/wiki/Overengineering "Overengineering") the result, to the detriment of everyone.

In our case as a product development and design team, a powerful suite of options without extremely tight attention on implementation runs the risk of becoming so complex that the lion's share of users can't even figure it out. GitHub's Ben Balter recently wrote [a great piece](http://ben.balter.com/2016/03/08/optimizing-for-power-users-and-edge-cases/ "Optimizing for Power Users and Edge Cases") on the risks of optimizing your product for edge cases[^benbalter]:

> No product is going to satisfy 100% of user needs, although it’s sure tempting to try. If a 20%-er requests a feature
> that isn’t going to be used by the other 80%, there’s no harm in just making it a non-default option, right?
>
> We have a motto at GitHub, part of the GitHub Zen, that “anything added dilutes everything else”. In reality, there is
> always a non-zero cost to adding that extra option. Most immediately, it’s the time you spend building feature A,
> instead of building feature B. A bit beyond that, it’s the cognitive burden you’ve just added to each user’s
> onboarding experience as they try to grok how to use the thing you’ve added (and if they should). In the long run,
> it’s much more than maintenance. Complexity begets complexity, meaning each edge case you account for today, creates
> many more edge cases down the line.

This is relevant to anyone building something to solve a problem, not just software products. Put this in the context of a Fulcrum data collection workflow. The steps might look something like this:

1. Analyze your requirements to figure out what data is required at what stage in the process.
2. Build an app in Fulcrum around those needs.
3. Deploy to field teams.
4. Collect data.
5. Run reports or analysis.

What we notice a surprising amount of the time is an enormous investment in step 2, sometimes to the exclusion of much effort on the other stages of the workflow. With each added field on a survey, requirement for data entry, overly-specific validation, you add potential hang-ups for end users responsible for actually collecting data. With each new requirement, usability suffers. People do this for good reason — they're trying to accommodate those edge cases, the occasions where you **do** need to collect this one additional piece of info, or validate something against a specific requirement. Do this enough times, however, and your implementation is all about addressing the edge problems, not the core problem.

When you're building a tool to solve a problem, think about how you may be impacting the core solution when you add knobs and settings for the edge cases. Best-fit solutions require testing your product against the complete ideal life cycle of usage. Start with something simple and gradually add complexity as needed, rather than the reverse.

[^benbalter]: [Ben's blog](http://ben.balter.com/ "Ben Balter") is an excellent read if you're into software and the relationship to government and enterprise.
