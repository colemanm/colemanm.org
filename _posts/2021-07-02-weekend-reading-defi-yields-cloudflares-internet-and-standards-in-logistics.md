---
layout: post
date: 2021-07-02 23:36:46
title: "Weekend Reading: DeFi Yields, Cloudflare's Internet, and Standards in Logistics"
description: "How are DeFi yields so high?, Cloudflare's next-gen internet, and the challenges of making 'APIs' for global trade."
categories: blog
tags:
- weekend reading
- logistics
- defi
- Ethereum
- Cloudflare
- web3

links:
- url: https://every.to/almanack/defi-yields
  title: "How Are DeFi Yields So High?"
  icon: 📈
- url: https://diff.substack.com/p/cloudflares-intelligent-design
  title: "Cloudflare's Intelligent Design"
  icon: ☁️
- url: https://future.a16z.com/beyond-the-meme-ever-given-supply-chains-and-the-physical-world/
  title: "Ever Given, Supply Chains, and the Physical World"
  icon: 🚢
---

### 📈 [How Are DeFi Yields So High?](https://every.to/almanack/defi-yields "How Are DeFi Yields So High?")

This is a great primer on yield farming in DeFi from [Nat Eliason](https://twitter.com/nateliason "Nat Eliason on Twitter"). Seeing the insane 1000% APYs on some DeFi products, you have to wonder if it's a Ponzi scheme (hint: sometimes it probably is). But there are plenty of legitimate and relatively reliable projects growing right now that look fascinating for the movement.

### ☁️ [Cloudflare's Intelligent Design](https://diff.substack.com/p/cloudflares-intelligent-design "Cloudflare's Intelligent Design")

Cloudflare has such an interesting approach to building the "pipes and wires" of the internet, a business most people wouldn't think of as glamorous (even though it's technically extremely complex). The only other companies out there building and shipping products as quickly are Stripe and Amazon, one that Byrne Hobart calls out the reference to:

> Their "workers" product lets customers write code and then deploy it to the edge around the world; they can be location-agnostic, both in the technical sense that packets won't take a needlessly roundabout path to users and in the legal sense that if they run something in a country that requires data to be stored locally, it will be stored locally. They originally built this as an internal tool for deploying their own code, then started letting customers use it. And then they turned that decision into an abstraction: "And so we implemented what we internally and somewhat cheekily called the Bezos Rule. And what the Bezos Rule is, is the exact same rule that Amazon put in place when they were developing AWS, which is, any API or any development tool that we build for ourselves and for our own team, we also are then going to make available to our customers." Cloudflare built an uptime factory, then workers became an uptime factory factory, and with the Bezos rule they've codified the production of such things: an uptime factory factory factory. They are no doubt adding new layers of recursion even now.

### 🚢 [Ever Given, Supply Chains, and the Physical World](https://future.a16z.com/beyond-the-meme-ever-given-supply-chains-and-the-physical-world/ "Ever Given, Supply Chains, and the Physical World")

A great overview of the state of logistics from Flexport founder [Ryan Peterson](https://twitter.com/typesfast "Ryan Petersen on Twitter").

With demand for goods rising around the world, our shipping infrastructure is hitting scaling limits and bottlenecks that will be hard problems in the coming years. Petersen considers inconsistent standards and fragmentation to be major challenges to surmount:

> Our computers, laptops, tablets, phones, and more can all connect quickly to the information we seek thanks to standardization. And while today’s global trade network is kind of like an internet of physical goods, it’s missing a standard like HTTP. The same way data passes between devices via the internet, goods pass between ocean ports, airports, warehouses, and other entities to reach their final destination. Without a logistics standard to act as a request-response protocol, all the players — suppliers, drayage, ports, warehouses, buyers — have to stitch their networks together manually.
>
> Information gets lost; layers of redundancy, designed as backups given low visibility, slow the exchange: connections end up being very brittle. Let’s say there’s a shipment scheduled to arrive in Long Beach on Tuesday. But which terminal exactly and what pier number? What time is pickup? How long before late charges are incurred? Finding these answers is labor-intensive and imprecise. Logistics managers end up consulting different sources on websites, via email, or in person.
>
> The dirty secret of the industry is that no one really knows where their stuff is. But if global trade were like the network of information as it is on the internet, we could simply type or speak into a search bar to ask and answer these questions, precisely.
>
> This is not about the desired features of such a system, but rather about the need for standardization, the need for a universal language for global trade. Once this exists, the physical world, like software, becomes searchable, programmable, accessible — connecting a patchwork of country-specific regulations and more.

Interface points between ships, terminals, carriers, and suppliers should follow standars, like APIs for the physical world. But standards are one of the hardest coordination problems to solve. The most powerful and versatile standards are adopted organically. How can you get thousands of freight forwarders speaking the same language?
