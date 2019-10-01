---
layout: post
date: 2019-09-17 20:53:42
title: "The Magic of Recurring Revenue"
description: "Thoughts on recurring revenue, SaaS, and the power of incentives."
img: /images/post-images/recurring-revenue.jpg
categories: blog
tags:
- SaaS
- software
- business
---

Any business that makes money from the same customer more than once can be said to have "recurring revenue." But the term in the SaaS universe has a more specific flavor to it, thanks to the unique nature of the business model, value delivery, and the commitments between vendor and consumer. You may think "so what" when you hear that SaaS revenue is special or somehow better than other ways of making money; after all, the money's still green, right? But there are a number of benefits  that come with the "as-a-service" relationship between vendor and customer. Software companies fit uniquely well with a subscription-based model because of the fixed, up-front heavy nature of the investments required to build software platforms. In a traditional business performing services or building physical products, new customers come with higher marginal costs — the cost incurred to add each new dollar of revenue. With hosted software there are certainly marginal costs (scaling servers with growth, providing support, etc.), but the gross margins are typically _much_ higher. And if done efficiently, that margin can stay very high even at scale.

{% include image.html file="recurring-revenue.jpg" description="Recurring revenue" caption="no" %}

Let's review some advantages of SaaS, each of them a mutual advantage to both the vendor and customer[^saasmodels]:

### Simpler adoption

Because the customer is buying a product that already exists (not a bespoke one), there's no need to wait for complex customizations right out of the gate to realize initial value. In order to maximize customer growth and expansion velocity, developers are motivated to create smoother implementation experiences harnessing tools like [Intercom](https://www.intercom.com/ "Intercom"), with in-app walkthroughs, on-boarding, guides, and help content to get the customer off the ground. A traditional "old world" software company is less motivated to make on-boarding such a smooth experience, since often they're already required to do on-premise implementations and trainings for users. There are certainly enterprise SaaS products that start to move into this arena (i.e. non-self-service), but typically that's due to the specifics of certain business workflows being reliant on custom integrations or customer data imports (think [ERP systems](https://en.wikipedia.org/wiki/Enterprise_resource_planning "ERP Systems")). Also, because a customer can start small with "pilot" sized engagements at no additional cost to the vendor, they can ramp up more comfortably.

### Low initial costs

Related to adoption, the customer can control their costs transparently as they scale, to see impact before they expand team-wide. Once initial ROI is visible, subsequent expansion is less painful and much easier to justify — after all, you have _results_ to prove that the product is useful before going all-in. The ability to hedge risk in scaling up by monitoring value returned is one that was hard to achieve in the days before service-based products.

### Reduced time to benefit

Since the customer can lower the requirements for an initial rollout, they can see benefit quickly. Rather than having to take a salesperson's word for it that you'll see an ROI in 6 months, a 30-day pilot can deliver answers much more quickly. Don't take the vendor at their word; use it for yourself and prove the value. Imagine what it would take to realize any benefit from a completely custom-built piece of software? (Hint: A long time, or maybe never if you don't ship it. This should cross a customer's mind when they want to [build instead of buy](https://medium.com/swlh/when-to-build-and-when-to-buy-on-the-lure-of-building-software-4dd5faf7effb "When to Buy and When to Build").)

### Economies of scale

The SaaS vendor is responsible for hosting, improving, and developing the core systems to the benefit of many at once. The revenue benefit of individual improvements or features are realized across the entire customer base. With good execution, the economy of scale can make the new feature or capability cheaper for each customer, while generating more aggregate revenue for the vendor — everyone wins. Compare this with scaling boxed software or even self-hosted, on-site software where human hours are required for each customer to deliberately receive new things of value. With product maturity, not all new developments provide equal value to every customer, which is where product packaging and positioning becomes critical to align costs and outcomes.

### Continuous (versus staggered) upgrade

Any engineer knows that small, frequent updates beat out large, infrequent ones when it comes to efficiency. The overhead involved with testing and shipping each release is minimized, then spread over hundreds of small deployments. With tools like continuous integration, automated testing, and rolling deployment, developers can seamlessly (and with low risk) roll out tiny incremental changes all the time, silently. Every SaaS product of note works this way today, and often only the largest customer-facing features are even announced at all to customers. With many small releases over few large ones, the surface area for potential problems is reduced enormously, making a catastrophic problem far less likely. Also, customers don't have to arbitrarily wait for the ArcMap 10.1 update or the annual release to receive a minor enhancement or bug fix.

### Alignment of incentives

This, to me, is one of the most important factors. Two parties that share incentives make for the most advantageous economic relationships. Both vendor and customer have incentives that benefit both sides baked into the business model, and importantly, these incentives are realized early and often:

* **Customer Incentive**: Since the customer has a defined problem for which they seek a solution (in the form of software), they're incentivized to pay proportionally for received value, security, attention, support, and utility. With a subscription pricing model, customers are happy to pay for a subscription that continues to deliver value to them month after month.
* **Vendor Incentive**: For a vendor, the real money is made not from the *first* deal with the customer, but from a continued relationship over a (hopefully) long period of time. Known as [lifetime value](https://en.wikipedia.org/wiki/Customer_lifetime_value "Customer Lifetime Value") (LTV), the goal is to maximize that number with all customers — a good product-market fit and customer success strategy leads to long LTV and therefore very large revenue numbers. To realize that LTV, however, it's incumbent upon the vendor to stay focused on delivering the above — value, security, support, et al.

With these incentives in lock-step, everyone wins. After achieving product-market fit and a repeatable solution for customers, you turn attention toward continued engagement in customer success, incremental value-add through enhancements and new features, and a long-term customer relationship based on mutual exchange of value. The best customers not only drive high revenues to the top line, but also become *better companies* as a result of using your software. We've had this happen with Fulcrum customers, and for a product developer, it's the thing that gets your out of bed in the morning; it's why we do what we do, not just to make money, but to transform something from good to great.

Alignment in vendor-customer goals used to be harder to achieve in the pre-SaaS era. A vendor needed only to be "good enough" to secure the single-point initial purchase, and could largely shirk their end of the bargain in successive months[^goodenough].

### Subscription models for physical products

Subscription business are no longer limited to software. We now see companies operating in the physical realm moving into subscription models — [Lyft Pass](https://www.theverge.com/2018/10/16/17978626/lyft-monthly-subscription-plan-nationwide "Lyft subscriptions") for transit, [Blue Apron](https://www.blueapron.com/ "Blue Apron") for food delivery, or even Apple's movement in this direction with its [Upgrade Program](https://www.apple.com/shop/iphone/iphone-upgrade-program "iPhone Upgrade Program") for iPhones[^iphoneupgrade]. Once the economics make this possible (more expensive in up-front capital for physical versus software), the subscription model turns into, often, a better deal for both sides.

The market is moving toward services for everything, which is a good thing for the industry all around. Okta's *[Businesses at Work* report](https://www.okta.com/businesses-at-work/2019/ "Okta Businesses at Work 2019") for 2019 reports that their customers are using commonly over 100 apps with Okta in the first year of use. In fact, all of the trends they report on show strong motions up and to the right. Given what I said previously about incentive alignment, I'm a believer that these trends are great for the software economy as a whole, with all parties benefiting from a healthier marketplace.

 [^saasmodels]: I [wrote a post](/post/power-of-saas-models/ "The Power of SaaS Models") on this topic a while back, but thought I'd revisit these advantages in more specific detail.

 [^goodenough]: Of course over time this would catch up to you, but you could get away with it far longer than you can in SaaS.

 [^iphoneupgrade]: Ben Thompson [recently wrote](https://stratechery.com/2019/the-iphone-and-apples-services-strategy/ "The iPhone and Apple's Services Strategy") about the prospects of Apple moving further in this direction — offering a subscription to the full "Apple Suite".
