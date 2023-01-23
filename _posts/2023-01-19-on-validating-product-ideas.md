---
layout: post
date: 2023-01-19 16:49:11
title: "On Validating Product Ideas"
description: "Validating ideas is hard. Some thoughts on trusting your instincts and reducing abstraction for better feedback."
img: /images/post-images/validation.jpg
categories: blog
tags:
- product
- jobs to be done
- ideas
- tacit knowledge
---

Building new things is an expensive, arduous, and long path, so product builders are always hunting for means to validate new ideas. Chasing ghosts is costly and deadly.

The "data-driven" culture we now live in discourages making bets from the gut. "I have a hunch" isn't good enough. We need to hold focus groups, do market research, and *validate* our bets before we make them. You need to come bearing data, learnings, and business cases before allowing your dev team to get started on new features.

{% include image.html file="validation.jpg" description="Validating ideas" caption="no" %}

And there's nothing wrong with validation! If you can find sources to reliably test and verify assumptions, go for it.

But these days teams are compelled to conduct user testing and research to vet a concept before diving in.

This push for data-driven validation I see as primarily a modern phenomenon, for two reasons:

First, in the old days *all* development of any new product was an enormously costly affair. You were in it for millions before you had anything even resembling a prototype, let alone a marketable finished product. Today, especially in software, the costs of bringing a new tool to market are dramatically slashed from 20 or 30 years ago. The toolchains and techniques developed over the past couple decades are incredible. Between the rise of the cloud, AWS, GitHub, and the plethora of open source tools, a couple of people have superpowers to do what used to take teams of dozens, and thousands of hours before you even had anything beyond a requirements document.

Second, we have tools and the cultural motivation to test early ideas, which weren't around back in the day. There's a rich ecosystem of easy-to-use design and prototyping tools, plus a host of user testing tools (like [UserTesting](https://www.usertesting.com/ "UserTesting"), appropriately) to carry your quick-and-dirty prototypes out into the world for feedback. Tools like these have contributed to the push for data-driven-everything. After all, we *have the data* now, and it must be valuable. Why not use it?

I have no problem with being data-driven. Of course you should leverage all the information you can get to make bets. **But data can lie to you, trick you, overwhelm you.** We're inundated with data and user surveys and analytics, but how do we separate signal from noise?

One of my contrarian views is that I'm a big defender of gut-based decision making. Not in an "always trust your gut" kind of way, but rather, I don't think listening to your intuition means you're "ignoring the data." You're just using data that can't be articulated. It's hard to get intuitive, experiential out of your head and into someone else's. You should combine your intuitive biases with other objective data sources, not attempt to ignore them completely.

I'm fascinated by [tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge "Tacit knowledge") (knowledge gained through practice, experience). It differentiates between what can be learned only through practice from what can be read or learned through formal sources — things we can only know through hands-on experience, versus things we can know from reading a book, hearing a lecture, or studying facts. Importantly, tacit knowledge is *still knowledge*. When you have a hunch or a directional idea about how to proceed on a problem, there's always an intrinsic basis for why you're leaning that way. The difference between tacit knowledge and "data-driven" knowledge isn't that there's no data in the former case; it's merely that the data can't be articulated in a spreadsheet or chart.[^gutfeelings]

I've done research and validation so many ways over the years — tried it all. User research, prototype workshopping, [jobs-to-be-done](https://resextensa.substack.com/p/jobs-theory-thinking-in-demand-and "Jobs Theory: Thinking in Demand and Supply") interviews, all of these are tools in the belt that can help refine or inform an idea. But *none* of them truly validate that **yes, this thing will work**.

One of the worst traps with idea validation is falling prey to your own desire for your idea to be valid. You're looking for excuses to put a green checkmark next to an idea, not seeking _invalidation_, which might actually be the more informative exercise. You find yourself writing down all the reasons that support building the thing, without giving credence to the reasons not to. With user research processes, so many times there's little to no skin in the game on the part of your subject. What's stopping them from simply telling you want you want to hear?

Paul Graham wrote [a post years ago](http://paulgraham.com/startupideas.html) with a phenomenal, dead-simple observation on the notion of polling people on your ideas. A primitive and early form of validation. I reference this all the time in discussions on how to digest feedback during user research (emphasis mine):

> For example, a social network for pet owners. It doesn't sound obviously mistaken. Millions of people have pets. Often they care a lot about their pets and spend a lot of money on them. Surely many of these people would like a site where they could talk to other pet owners. Not all of them perhaps, but if just 2 or 3 percent were regular visitors, you could have millions of users. You could serve them targeted offers, and maybe charge for premium features.
>
> The danger of an idea like this is that when you run it by your friends with pets, they don't say "I would *never* use this." They say "Yeah, maybe I could see using something like that." Even when the startup launches, it will sound plausible to a lot of people. **They don't want to use it themselves, at least not right now, but they could imagine other people wanting it. _Sum that reaction across the entire population, and you have zero users_**.

The hardest part is separating the genuine from the imaginary. Because of the skin-in-the-game problem with validation (exacerbated by the fact that the proposal you're validating is still an abstraction), you're likely to get a deceitful sense of the value of what you're proposing. *Would you pay for this?* is a natural follow up to a user's theoretical interest, but is usually infeasible at this stage.

It's very hard to get early critical, honest feedback when users people have no reason to invest the time and mental energy thinking about it. So the best way to solve for this is to reduce abstraction — give the user a concrete, real, tangible thing to try. The closer they can get to a substantive thing to assess, the less you're leaving to their imagination as to whether the thing will be useful for them. When an idea is abstract and a person says "This sounds awesome, I would love this", you can safely assume they're filling in unknowns with their own interpretation, which may be way off the mark. Tangibility and getting hands-on with a complete, usable thing to try, removes many false assumptions. You want their opinion on what it *actually* will be, not what they're imagining it might be.

In a post from a couple years ago, [Jason Fried hit the mark](https://world.hey.com/jason/validation-is-a-mirage-273c0969 "Validation is a mirage") on this:
 
> There’s really only one real way to get as close to certain as possible. That’s to build the actual thing and make it actually available for anyone to try, use, and buy. Real usage on real things on real days during the course of real work is the only way to validate anything.

The Agile-industrial complex has promoted this idea for many years: moving fast, prototyping, putting things in market, iterating. But our need for validation — our need for *certainty* — has overtaken our willingness to take some risk, trust in our tacit knowledge, and put early, but concrete and minimal-but-complete representations out there to test fitness.

De-risking investments is a critical element of building a successful product. But some attempts to de-risk actively trick us into thinking an idea is better than it is.

So I'll end with two suggestions: **be willing to trust your intuition** more often on your ideas, and **try your damnedest to smoke test an idea with a complete representation of it**, removing as much abstraction as possible.

[^gutfeelings]: I'd highly recommend Gerd Gigerenzer's book *[Gut Feelings](https://www.colemanm.org/books/gigerenzer-gut-feelings/ "Gut Feelings, Gerd Gigerenzer")*, which goes deep on this topic. For a great précis on the topic, check out [his conversation](https://www.econtalk.org/gerd-gigerenzer-on-gut-feelings/) from a few years back on the EconTalk podcast.
