---
layout: post
date: 2022-06-27 18:19:24
title: "Notes on Operating Well"
description: "Thoughts on what it means to be an effective operator, team leader, and product builder"
img: /images/post-images/drafting-tools.jpg
categories: blog
tags:
- product
- product management
- operators
- company building
- startups
---

[Sam Gerstenzang](https://twitter.com/gerstenzang "Sam Gerstenzang on Twitter") wrote an [excellent piece](https://every.to/p/operating-well-what-i-learned-at-stripe "Operating Well: What I Learned at Stripe") a couple weeks ago with operating lessons for growing companies, driven by his learnings from the product team at [Stripe](https://stripe.com/ "Stripe"). Personally, I've got a decade or so of experience as an "operator" at a "startup" (two words I wouldn't have used to describe my job during most of that time). Since 2011 I've led the product team at [Fulcrum](https://www.fulcrumapp.com "Fulcrum"), a *very* small team until the last few years, and still only in the medium size range. So my learnings on what "good operating" looks like are based mostly on this type of experience, not necessarily how to  lead a massive product team at a 10,000 person company. I think a surprising number of the desirable characteristics translate well, though. Many more than BigCo operator types would have you believe.

{% include image.html file="drafting-tools.jpg" description="Drafting tools" caption="no" %}

Overall this list that Sam put together is especially great for teams that are small, early, experimental, or trying to move fast building and validating products. There are a few tips in here that are pretty contrarian (unfortunately so, since they shouldn't be contrarian at all) to most of what you'll read in the literature on lean, agile, startuppy teams. But I like that many of these still apply to a company like Stripe that's in the few-thousands headcount range now. There isn't that stark a difference in desirable characteristics between small and large teams — or at least there doesn't *need* to be.  

On the desire to enforce **consistency**:  

> **Consistency is hard to argue against – consistency reinforces brand and creates better ease of use – but the costs are massive**. Consistency just *feels* good to our system centric product/engineering/design brains. But it creates a huge coordination cost and prohibits local experimentation – everything has to be run against a single standard that multiplies in communication complexity as the organization gets larger. I’d try to ask “if we aim for consistency here, what are the costs, and is it worth it?” I think a more successful way to launch new products is to ignore consistency, and add it back in later once the project is successful. It will be painful, but less painful than risking success.

I'd put this in the same category as feeling need to "set yourself up to scale". When a team lead is arguing to do something in a particular way that conforms with a specific process or procedure you want to reinforce through the company, it's an easy thing to argue for. But too often it ignores the trade-offs in coordination overhead it'll take to achieve. Then the value of the consistency ends up suspect anyway. In my experience, coordination cost is a *brutal* destroyer of momentum in growing companies. Yes, some amount of it is absolutely necessary to keep the ship floating, but you have to avoid saddling yourself with coordination burdens you don't need (and won't benefit from anyway). Apple or Airbnb might feel the need to tightly coordinate consistency, but you aren't them. Don't encumber yourself with *their* problems when you don't have to.  

Enforcement of consistency — whether in in design, org charts, processes, output — has a cost, sometimes a high cost. So it's not always worth the trade-off you have to make in speed or shots-on-goal. With a growing company, the number of times you can iterate and close feedback loops is the *coin of the realm*. Certain things may be so important to the culture you're building that the trade-off is worth it, but be judicious about this if you want to maintain velocity.  

On **focus**:  
 
> People think focus is about the thing you’re focused on. But it’s actually about putting aside the big shiny, exciting things you *could* be working on. The foundation of focus is being clear upfront about what matters—but the hard work is saying no along the way to the things that feel like they *might* matter. 

True focus is one of the hardest parts once your team gets some traction, success, and revenue. It's actually easier in the earlier days when the sense of desperation is more palpable (I used to say we were pretty focused early on because it was the only way to get *anything made* at all). But once there's some money coming in, users using your product, and customers are growing, you have time and resources you didn't have before that you can choose to allocate as you wish. But the thing is, the challenge ahead is still enormous, and the things you've yet to build are going to get even more intricate, complex, and expensive.  

It's simple to pay lip service to staying focused, and to write OKRs for specific things. But somehow little things start to creep in. Things that seem urgent pop up, especially dangerous if they're "quick wins". You only have to let a few good-but-not-that-important ideas float around and create feel-good brainstorming sessions, and before you know it, you've burned days on stuff that *isn't* the **most important thing**. There's power in taking an ax to your backlog or your kanban board of ideas *explicitly*. Delete all the stuff you aren't gonna do, or at least [ship it off to Storage B](https://www.youtube.com/watch?v=Vsayg_S4pJg "I think we're gonna send you down to Storage B") and get to work.  

On **product-market fit and small teams**:  

> **Start with a small team, especially when navigating product market fit.** Larger teams create communication overhead. But more importantly they force definition = you have to divide up the work and make it clear who is responsible for what. You’re writing out project plans and architecture diagrams before you even should know what you’re building. So start small and keep it loose until you have increased clarity and are bursting at the seams with work.

To restate what I said above, it's all about *feedback loops*. How many at-bats can you get? How many experiments can you run? Seeking product-market fit is a messy, failure-ridden process that requires a ton of persistence to navigate. But speed is one of your best friends when it comes to maintaining the determination to unlock the [job to be done](https://resextensa.substack.com/p/jobs-theory-thinking-in-demand-and "Jobs Theory: Thinking in Demand and Supply") and find *just enough* product fit that you get the signals needed to inform the next step. Therefore, small, surgical teams are more likely to successfully run this gauntlet than big ones. All of the coordination cost on top of a big, cross-functional group will drain the team, and greatly reduce the number of plate appearances you get. If you have fewer points of feedback from your user, by definition you'll be less likely to take a smart second or third step.  

The responsibility point is also a sharp one — big teams diffuse the responsibility so thinly that team members feel no ownership over the outcomes. And it might be my cynicism poking through, but on occasion advocates for teams to be bigger, broader, and more cross-functional are really on the hunt for a crutch to avoid ownership. As [the aphorism](https://twitter.com/jrichlive/status/1258458354055168000 "A dog with two owners") goes, "a dog with two owners dies of hunger." Small teams have stronger bonds to the problem and greater commitment to finding solutions.  

Overall, I think his most important takeaway is the value of **trust systems**:  

> **Build trust systems.** The other way is to create systems that create trust and distributed ownership – generally organized under some sort of “business lead” that multiple functions report to. It’s easier to scale. You’ll move much more quickly. A higher level of ownership will create better job satisfaction. But you won’t have a consistent level of quality by function, and you’ll need to hire larger numbers of good people.

A company is nothing but a network of relationships between people on a mission to create something. If those connections between people aren't founded in trust and a shared understanding of goals and objectives, the cost of coordination and control *skyrockets*. Teams low in trust require *enormous* investment in coordination — endless status update meetings, check-ins, reviews, et al[^meetings]. If you can create strong trust-centric operating principles, you can move so much faster than your competition that it's like having a superpower. The larger teams grow, of course, the more discipline is required to reinforce foundations of trust, but also the more important those systems become. A *large* low-trust team is *incredibly* slower than a small one. Coordination costs compound exponentially.  

[^meetings]: Don't take this to mean I'm anti-meeting! I've [very pro-meeting](/post/andy-grove-on-meetings/ "Andy Grove on Meetings"). The problem is that ineffective ones are pervasive.
