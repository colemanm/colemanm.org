---
layout: post
date: 2018-10-31
title: "Right-sizing and Product Scoping"
description: "Thoughts on the process of right-sizing product features and defining scope."
img: /images/post-images/scoping.jpg
categories: blog
tags:
- product management
- business
- planning

edited: 2022-05-04 14:27:21
---

In product teams you’re continually faced with the challenge of scoping. When you build something directly for a customer, for a fee (consulting), the scoping process is explicit and has built-in constraints — customer expectations, funding, timelines, deliverables. Even in that scenario, agreeing on a firm scope for an effort isn’t simple, but it's even harder when working in a product company. The same constraints still exist, but in a more nebulous, undefined form. Constraints aren’t imposed and enforced externally by a single client dangling the paycheck. The demands are dispersed amongst thousands of users with sometimes-competing desires, paying varying amounts for your product. So it's on you to [define hard edges](/post/hard-edges-soft-middle/ "Hard edges, soft middle") based on your own goals and objectives.

{% include image.html file="scoping.jpg" description="Scoping a project" caption="no" %}

When you set down the idea for a feature’s implementation, you always want your new feature to be cooler or more powerful than you’re able to commit to. With even a touch of investigation, you discover that it’ll take many cycles to get to get all the way there. So you have to forgo achieving your complete vision and put up some boundaries at an interim milestone along the path. This is one of the hardest parts of product design — you have to knowingly ship something “incomplete” according to your vision, but that's directionally aligned and a solid waypoint on the journey.

If you're setting your own objectives, you have no one telling you exactly what to ship, how much to spend, and when to be done. Not to downplay the complexities involved in consulting, but the incentives and constraints are generally much clearer; you're unlikely to commit massive resources to a hazy and overzealous goal, and the customer isn't likely to pay you what it'd take to commit — so you compromise.

When it's your own product, you still have end customers, but their individual wishes and needs are distributed enough that it's on you to synthesize what customers want into a clear vision you can break down into parts, and to enforce your own boundaries. No one is forcing any particular constraint; you could spend months crafting and polishing the most perfect version of the feature until the final day you get it out there. But good products come about as a consequence of savvy incorporation of market feedback into the development process. The best model uses increments that are each valuable enough to earn committed investment and experimentation from customers, which gives you the feedback you need to validate what you've made and make the right course-corrections along the path to the vision. As clear as your vision might be, it’s still not proven until it intersects with reality. Like the old adage says: ["No plan survives first contact with the enemy"](https://en.m.wikiquote.org/wiki/Helmuth_von_Moltke_the_Elder "Helmuth von Moltke the Elder"). Or the customer, as it were. Real-world feedback is what separates a _vision_ from a _hallucination_.

Yoy need to create a trail toward your vision with release points along the way that each constitute something “complete” enough to use and validate. And that’s where I think the core problem lives in product development: the balance of between shipping _enough_ to consider a feature useful but _soon_ enough that you can start measuring the impacts that will inform your next waypoint. Once you’ve established your vision for what you want to achieve, you then carve away at it until you have essential stages that work as milestones. In the best cases, each milestone can be a defensible stopping point for a feature. You could ship v1, never revisit the idea, and still have something whole and useful. The scoping process is a painful, but critical step to getting a **useful enough** product feature **soon enough** to close the feedback loop and begin iterating. I find the _[Shape Up](/books/singer-shape-up/ "Shape Up")_ idea of "[appetites](https://basecamp.com/shapeup/1.2-chapter-03#setting-the-appetite "Setting the Appetite")" a useful metaphor for selecting milestones:

> Whether we’re chomping at the bit or reluctant to dive in, it helps to explicitly define how much of our time and attention the subject deserves. Is this something worth a quick fix if we can manage? Is it a big idea worth an entire cycle? Would we redesign what we already have to accommodate it? Will we only consider it if we can implement it as a minor tweak?

It's tempting to make the scoping and appetite-setting process a group exercise, to fold in product management, design, engineering, ops, sometimes even marketing. A wider aperture of company buy-in makes sense at a macro vision level, but once you get down to the ground defining specifics, you need fewer people involved to be able to drill in on what's most important. If possible, it's best to involve only those directly responsible for defining and building the thing in question. Too many heads involved generates too much free-form "ideation" and not enough of the brass-tacks horse trading required to make hard tradeoffs necessary.

I have a two-part theory on scoping:

1. **Projects scoped by large committees tend to get larger** — the average contributor knows it’s unlikely the next idea tossed into the hat will fall in their lap to execute; lots of people just get to be the "idea person"; incentives to both signal "big thinking" and define concrete goals are competing with each other
2. **Projects scoped by individuals or small groups tend to get smaller** — because you’re on the hook to build everything, all of the skin in the game is yours; incentives are aligned on making things tangible and reachable

Landing somewhere in between is ideal for product scoping. Removing things from the vision (or deferring) requires honesty, commitment, and focus, which are all much easier to guarantee in small groups. 

We're often too idealistic with scoping and think we can "squeeze in that One More Thing". Stretch goals are fine and can be motivating, but too far-fetched of an objective point can end up setting the wrong expectations across the company. If you’re not more aggressive with the hatchet than you think you need to be in the early stages of feature planning, the whole team (and your customer) will be worse off.
