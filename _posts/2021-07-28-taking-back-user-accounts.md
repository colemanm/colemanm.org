---
layout: post
date: 2021-07-28 15:26:35
title: "Taking Back Our User Accounts"
description: "Ethereum's decentralization of identity management for applications."
img: /images/post-images/ethereum-chain.jpg
categories: blog
tags:
- Ethereum
- web3
- decentralization
- internet
- technology

links:
- url: https://1729.com/the-billion-user-table
  title: "The Billion Users Table"
  icon: 👥
---

Identity management on the internet has been broken for years. We all have 800 distinct logins to different services, registered to different emails with different passwords. Plus your personal data exists in a morass of data silos, each housing a different slice of your personal information, each under a different ToS, subject to differing privacy regulations, and ultimately not _owned by you_. You sign up for a user account on a service in order for it to identify you uniquely, providing functionality tailored to you. Service providers getting custody of your personal data is a side-effect that's become an accepted social norm.

{% include image.html file="ethereum-chain.jpg" description="Ethereum chain" caption="no" %}

[In this piece](https://1729.com/the-billion-user-table "The Billion User Table"), [Jon Stokes](https://twitter.com/jonst0kes "Jon Stokes on Twitter") references core power indicators in public finance like capital ratios or assets under management that help tell us when an institution is getting too big:

> As a society, we realized a long time ago that if we let banking go entirely unregulated, then we end up with these mammoth, rickety entities that lurch from crisis to crisis and drag us all down with them. So when we set about putting regulatory limits on banks, we used a few simple, difficult-to-game numbers that we could use as proxies for size and systemic risk.

The "users table" works as an analogous metric in tech: the larger the users table gets (the more users a product has), the more centralized and aggregated their control and influence. Network effects, user lock-in, and power over privacy policies expand quadratically with the scope of the user base.

As Stokes points out, web3 tech built on Ethereum will gradually wrest back control of the users table with a global, decentralized replacement controlled by no-one-in-particular, wherein users retain ownership of their own identity:

> Here's what's coming: the public blockchain amounts to a single, massive users table for the entire Internet, and the next wave of distributed applications will be built on top of it.

[Dapps](https://ethereum.org/en/dapps/ "Ethereum Dapps") on Ethereum are so satisfying to use. The flow to get started is so smooth — a couple of clicks and you're in. There's no sign up page, no way for services to contact you (presumably unless they build something to do so and you opt-in to giving your information). Most of my dapp usage has been in DeFi, where you visit a new site, connect your wallet, and seconds later you can make financial transactions. It's wild.

The global users table decentralizes the authentication and identity layers. _You_ control your identity and your credentials, and grant access to applications if you choose.

Take the example of a defi application like [Convex](https://www.convexfinance.com/ "Convex"). When I visit the app, I first grant the service access to interact with my wallet. Once I'm signed in, I can stake tokens I own, or claim rewards from staking pools I've participated in proportional to my share of the pool. All of the data that represents my balances, staking positions, and earned rewards lives in the smart contracts on the Ethereum blockchain, _not_ in Convex's own databases. Services like this will always need to maintain their own application databases for aspects of their products. But the critical change with the global users table is that the user interaction layer exists on-chain and not in a silo'd database, with custody completely in the hands of the person with the keys to the wallet.

If more services use the dapp model and build on the public, on-chain global users table, what will the norms become around extending that table with additional metadata? With some systems like [ENS](https://ens.domains/ "Ethereum Name Service") (the Ethereum Name Service, decentralized DNS), subdomains and other addresses associated with an ENS address are properties written on the blockchain directly. This makes sense for something like name services, where they're public by design. But other use cases will still require app developers to keep their own attributes associated with your account that don't make sense on the public, immutable blockchain. I may want GitHub to know my email address for receiving notifications from the app, but I may not want that address publicly attributed to my ETH address.

Web3 is so new that we haven't figured out yet how all this shakes out. The most exciting aspect is how it overturns the custody dynamics of user data. Even though this new world moves the users table out of the hands of individual companies, everyone will benefit (users and companies) over the long-term. Here's Stokes again:

> If you want to build a set of network effects that benefit your company specifically, it won't be enough to simply cultivate a large users table or email list — no, you'll have to offer something on-chain that others are also incentivized to use, so that the thing you're uniquely offering spreads and becomes a kind of currency.

Incentives for app developers will realign in a way that produces more compelling products and a better experience for users.
