---
layout: post
date: 2019-03-27
title: "Entering Product Development: Geodexy"
description: "A retrospective on the first product I worked on as (de facto) product manager: Geodexy, a predecessor to Fulcrum."
img: /images/post-images/geodexy-web.jpg
categories: blog
tags:
- product
- product management
- work
- history
- Geodexy
- Fulcrum
---


I started with the [first post in this series]({{ site.url }}/post/starting-in-product-management/ "Starting in Product Management") back in January, describing my own entrance into product development and management.

When I joined the company we were in the very early stages of building a data collection tool, primarily for internal use to improve speed and efficiency on data project work. That product was called **Geodexy**, and the model was similar to [Fulcrum](https://www.fulcrumapp.com "Fulcrum") in concept, but in execution and tech stack, everything was completely different. A few years back, Tony wrote up a [retrospective post](https://www.fulcrumapp.com/blog/origins-of-fulcrum/ "Origins of Fulcrum") detailing out the history of what led us down the path we took, and how Geodexy came to be:

> After this experience, I realized there was a niche to carve out for Spatial Networks but I’d need to invest whatever meager profits the company made into a capability to allow us to provide high fidelity data from the field, with very high quality, extremely fast and at a very low cost (to the company). I needed to be able to scale up or down instantly, given the volatility in the project services space, and I needed to be able to deploy the tools globally, on-demand, on available mobile platforms, remotely and without traditional limitations of software CDs.

Tony's post was an excellent look back at the business origin of the product — the "why" we decided to do it piece. What I wanted to cover here was more on the product technology end of things, and our go-to-market strategy (where you could call it that). Prior to my joining, the team had put together a rough go-to-market plan trying to guesstimate [TAM](https://en.wikipedia.org/wiki/Total_addressable_market "TAM"), market fit, customer need, and price points. Of course without real market feedback (as in, will someone actually *buy* what you’ve built, versus *say* they would buy it one day), it’s hard to truly gauge the success potential.

{% include image.html file="geodexy-web.jpg" description="Geodexy" caption="no" %}

Back then, modern web frameworks in use today were around, but there were very few and not yet mature, like Rails and it's peers. It’s astonishing to think back on the tech stack we were using in the first iteration of Geodexy, circa 2008. That first version was built on a combination of Flex, Flash, MySQL, and Windows Mobile[^wm]. It all worked, but was cumbersome to iterate on even back then. This was not even that long ago, and back then that was a reasonable suite of tooling; now it looks antiquated, and Flex was abandoned and donated to Apache Foundation a long time ago. We had success with that product version for our internal efforts; it powered dozens of data collection projects in 10+ countries around the world, allowing us to deliver higher-quality data than we could before. The mobile application (which was the key to the entire product achieving its goals) worked, but still lacked the native integration of richer data sources — primarily for photos and GPS data. The former could be done with some devices that had native cameras, but the built-in sensors were too low quality on most devices. The latter almost always required an external Bluetooth GPS device to integrate the location data. It was all still an upgrade from pen, paper, and data transcription, but not free from friction on the ground at the point of data collection. Being burdened by technology friction while roaming the countryside collecting data doesn't make for the smoothest user experience or prevent problems. We still needed to come up with a better way to make it happen, for ourselves and absolutely before we went to market touting the workflow advantages to other customers.

{% include image-partial.html file="geodexy-windows-mobile.jpg" description="Geodexy Windows Mobile" width="400" caption="no" %}

In mid-2009 we spun up an effort to reset on more modern technology we could build from, learning from our first mistakes and able to short-circuit a lot of the prior experimentation. The new stack was Rails, MongoDB, and PostgreSQL, which looking back from 10 years on sounds like a logical stack to use even today, depending on the product needs. Much of what we used back then still sits at the core of Fulcrum today.

What we never got to with the ultimate version of Geodexy was a modern mobile client for the data collection piece. That was still the early days of the App Store, and I don't recall how mature the Android Market (predecessor to Google Play) was back then, but we didn't have the resources to start of with 2 mobile clients anyway. We actually had a functioning Blackberry app first, which tells you how different the mobile platform landscape looked a decade ago[^10years].

Geodexy's mobile app for iOS was, on the other hand, an excellent window into the potential iOS development unlocked for us as a platform going forward. In a couple of months one of our developers that knew his way around C++ learned some Objective-C and put together a version that fully worked — offline support for data collection, automatic GPS integration, photos, the whole nine yards of the core toolset we always wanted. The new wave of platform with a REST API, online form designer, and iOS app allowed us to up our game on [Foresight](https://spatialnetworks.com/foresight/ "Foresight") data collection efforts in a way that we knew would have legs if we could productize it right.

We didn't get much further along with the Geodexy platform as it was before we refocused our SaaS efforts around a new product concept that'd tie all of the technology stack we'd built around a single, albeit *large*, market: the property inspection business. That's what led us to launch **allinspections**, which I'll continue the story on later.

In an odd way, it's pleasing to think back on the challenges (or things we considered challenges) at the time and think about how they contrast with today. We focused so much attention on things that, in the long run, aren't terribly important to the lifeblood of a business idea (tech stack and implementation), and not enough on the things worth thinking about early on (market analysis, pricing, early customer development). Part of that I think stems from our indexing on internal project support *first*, but also from inexperience with go-to-market in SaaS. The learnings ended up being invaluable for future product efforts, and still help to inform decision making today.

[^wm]: As painful as this sounds we actually had a decent tool built on WM. But the usability of it was terrible, which if you can recall the time period was par for the course for mobile applications of all stripes.
[^10years]: That was a decade ago. Man.