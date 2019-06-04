---
layout: post
date: 2019-06-03
title: "The Second Phase: allinspections"
description: "A retrospective on my second product, allinspections."
img: /images/post-images/allinspections-history.jpg
categories: blog
tags:
- work
- products
- Fulcrum
- history
---

_This post is part 3 in a series about my history in product development. Check out the intro in [part 1]({{ site.url }}/post/starting-in-product-management/ "Starting in Product Management") and all about our first product, Geodexy, in [part 2]({{ site.url }}/post/entering-product-development-geodexy/ "Entering Product Development: Geodexy")._

Back in 2010 we decide to halt our development of [Geodexy]({{ site.url }}/post/entering-product-development-geodexy/ "Entering Product Development: Geodexy") and regroup to focus on a narrower segment of the marketplace. With what we'd learned in our go-to-market attempt on Geodexy, we wanted to isolate a specific industry we could focus our technology around. Our tech platform was strong, we were confident in that. But at the peak of our efforts with taking Geodexy to market, we were never able to reach a state of maturity to create traction and growth in any of the markets we were targeting. Actually _targeting_ is the wrong word — truthfully that was the issue: we weren't "targeting" anything because we had too many targets to shoot at.

We needed to take our learnings, regroup on what was working and what wasn't, and create a single focal point we could center all of our effort around, not just the core technology, but also our go-to-market approach, marketing strategy, sales, and customer development.

I don't remember the specific genesis of the idea (I think it was part internal idea generation, part serendipity), but we connected on the notion of field data collection for the property inspection market. So we launched allinspections.

{% include image.html file="allinspections-history.jpg" description="allinspections" caption="no" %}

That industry had the hallmarks of one ripe for us to show up with disruptive technology:

- **Low current investment in technology** — Most folks were doing things on paper with lots of transcribing and printing.
- **Lots of regulatory basis in the workflow** — Many inspections are done as a requirement by a regulatory body. This meant consistent, widespread needs that crossed geographic boundaries, and an "always-on" use case for a technology solution.
- **Phased workflow with repetitive process and "decision tree" problems** — a perfect candidate for digitizing the process.
- **Very few incumbent technologies to replace** — if there were competitors at all, they were Excel and Acrobat.
- **Smartphones ready to amplify a mobile-heavy workflow** — Inspections of all sorts happen in-situ somewhere in the field.

While the market for facility and property inspections is immense, we opted to start on the retail end of the space: home inspections for residential real estate. There was a lot to like about this strategy for a technology company looking to build something new. We could identify individual early adopters, gradually understand what made their business tick, and index on capability that empowered them. There was no need immediately to worry about selling to massive enterprise organizations, which would've put a heavy burden on us to build  "box-checking" features like hosting customization, access controls, single sign-on, and the like. We used a freemium model which helped attract early usage, then shifted to a free trial one later on after some early traction.

Overall the biggest driver that attracted us to residential was the *consistency* of the work. While anyone who's bought property is familiar with the process of getting a house inspected before closing. That sort of inspection is low volume compared to those associated with insurance underwriting. Our first mission was this: *to build the industry-standard tool for performing these regulated inspections in Florida — [wind mitigation](https://www.nachi.org/wind-mitigation.htm "Wind Mitigation"), [4-point](https://www.real-estate-inspections.com/what-is-a-four-point-inspection/ "4-Point Inspection"), and [roof certification](https://www.thebalance.com/roof-certifications-and-roof-inspections-1798681 "Roof Certification")*. These were (and still are) done by the thousands every day. They were perfect candidates for us for the reasons listed above: simple, standard, ubiquitous, and *required*[^flinsurance]. There was a built-in market for automating the workflow around them and improving the data collected, which we could use as a beachhead to get folks used to using an app to conduct their inspections.

Our hypothesis was that we could apply the technology for mobile data collection we'd built in Geodexy and "verticalize" it around the specialty of property inspection with features oriented around that problem set. Once we could spin up enough technology adoption for home inspection use cases at the individual level, we could then bridge into the franchise operations and institutions (even the insurance companies themselves) to standardize on allinspections for all of their work.

We had good traction in the early days with inspectors. It didn't take us long before we connected with a half-dozen tech-savvy inspectors in the area to work with as guinea pigs to help us advance the technology. Using their domain expertise in exchange for usage of the product, we were able to fast-forward on our understanding of the inspection workflow — from original request handling and scheduling, to inspecting on-site, then report delivery to customer. Within a year we had a pretty slick solution and 100 or so customers that swore by the tool for getting their work done.

But it didn't take us long to run into friction. Once we'd exhausted the low-hanging fruit of the early adopter community, it became harder and harder to find more of the tech savvy crowd willing to splash some money on something new and different. As you might expect, the community of inspectors we were targeting were *not* technologists. Many of these folks were perfectly content with their paperwork process and enjoyed working solo. Many had no interest in building a true business around their operation, not interested in growing into a company with multiple inspectors covering wider geographies. Others were general contractors doing inspections as a side gig, so it wasn't even their core day to day job. With that kind of fragmentation, it was difficult to reach the economies of scale we were looking for to be able to sell something at the price point where we needed to be. We had some modest success pursuing the larger nationwide franchise organizations, but our sales and onboarding strategy wasn't conducive to getting those deals beyond the small pilot stage. It was still too early for that. We wanted to get to B2B customer sizes and margins, but were ultimately still selling a B2C application. Yes, a home inspector has a business that we were selling to, but the fundamentals of the relationship share far more in common with a consumer product relationship than a corporate one.

By early 2012 we'd stalled out on growth at the individual level. A couple opportunities to partner with inspection companies on a comprehensive solution for carriers failed, partially for technical reasons, but also immaturity of our existing market. We didn't have a reference base sizable enough to jump all the way up to selling 10,000 seats without enormous burden and too much overpromising on what we could do.

We shut down operations on allinspections in early 2012. We had suspected this would have to happen for a while, so it wasn't a sudden decision. But it always hurts to have to walk away from something you poured so much time and energy into.

I think the biggest takeaway for me at the time, and in the early couple years of success on Fulcrum, was how relatively little the specifics of your technology matter if you mess up the product-market fit and go-to-market steps in the process. The silver lining in the whole affair was (like many things in product companies) that there was plenty to salvage and carry on to our next effort. We learned an enormous amount about what goes into building a SaaS offering and marketing it to customers. Coming from Geodexy where we never even reached the stage of having a real "customer success" process to deal with, allinspections gave us a jolt in appreciation for things like identifying the "aha moment" in the product, increasing usage of a product, tracking usage of features to diagnose engagement gaps, and ultimately, getting on the same page as the customer when it comes to the final deliverable. It takes working with customers and learning the deep corners of the workflow to identify where the pressure points are in the value chain, the things that keep the customer up at night when they don't have a solution.

And naturally there was plenty of technology to bring forward with us to our next adventure. The launch of Fulcrum actually pre-dates the end of allinspections, which tells you something about how we were thinking at the time. At the time we weren't thinking of Fulcrum as the "next evolution" of allinspections necessarily, but we were thinking about going bigger while fixing some of the mistakes made a year or two prior. While most of Fulcrum was built ground-up, we brought some code but a whole boatload of lessons learned on systems, methods, and architecture that helped us launch and grow Fulcrum as quickly as we did.

Retrospectives like this help me to think back on past decisions and process some of what we did right and wrong with some separation. That separation can be a blessing in being able to remove personal emotion or opinion from what happened and look at it objectively, so it can serve as a valuable learning experience. Sometime down the road I'll write about this next evolution that led to where [we are today](https://www.fulcrumapp.com/ "Fulcrum").

[^flinsurance]: Since the mid-2000s, all three of these inspection types are required for insurance policies in Florida.
