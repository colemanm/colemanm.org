---
layout: post
date: 2023-11-30 15:12:13
title: "The Cynefin Framework"
description: "Examples to explain each domain of the Cynefin framework."
img: /images/post-images/cynefin-cartoon.jpg
categories: blog
tags:
- mental models
- frameworks
- problem solving
---

I recently discovered the Cynefin framework, a mental model for situational decision making created by IBM's Dave Snowden over 20 years ago. Now I'm a big "Business Process System" skeptic these days. I've seen way too many of them wildly overfit, seen them become bibles for teams where it seems like we're working for the process, and not the other way around. Cynefin seems useful because it's a course mental model more than some sort of Agile-like totalizing system for how to get work done. It intends to help you classify problems and orient yourself versus telling you what to do.

In the framework, there are 4 domains, each with their own definition and suggested order of operations to how to react to a given situation in each domain.

|      Domain      | Description                                | Response                    |
|------------------|--------------------------------------------|-----------------------------|
| **Clear**        | Tightly constrained, no degrees of freedom | Sense, categorize, respond  |
| **Complicated**  | Governing constraints, tightly coupled     | Sense, analyze, respond     |
| **Complex**      | Enabling constraints, loosely coupled      | Probe, sense, respond       |
| **Chaotic**      | Lacking constraints, de-coupled            | Act, sense, respond         |

So what it demonstrates is things like the difference between something being _complicated_ vs. _complex_. Sounds like a subtle difference, but there are important distinctions which prompt conflicting reactions in how to proceed. A complicated problem has lots of moving parts, but we _know_ what all the parts are and what they do, just need to put 'em together. A complex problem involves many interrelationships between factors, along with Rumsfelds famous "unknown unknowns" — we don't even know what all the involved pieces look like yet. Discovery is required.

{% include image.html file="cynefin-cartoon.jpg" description="Cynefin framework" caption="no" %}

Here are a few simplified examples to conceptualize the distinctions between domains:

### Clear

_Restocking office supplies_. This is a straightforward task where the need and the solution are clear, and best practices like inventory management can be directly applied. Just go do it.

### Complicated

_Building a simple todo-list app._ There are countless examples to follow, pre-existing primitives and libraries to use, and a known set of basic functions. The developer just needs some programming know-how, and a list of functions we want the app to perform.

### Complex

_Addressing a city's traffic congestion problem_. This involves tons of variables and unpredictable human behaviors. Solutions might emerge from trialing different traffic management approaches, analyzing impacts, and iteratively refining strategies. The problem in truly complex spaces is like squeezing a balloon — you squeeze one end and the air just moves elsewhere. "Nailing jell-o to a wall" comes to mind.

### Chaotic

_Natural disasters_. No clear cause and you're taken by surprise. And because of the public safety danger, you have no time for conference room analysis and whiteboarding sessions. Immediate, decisive action is required to establish stability, followed by strategies to move the situation into a more manageable domain. "You go to war with the army you have." 