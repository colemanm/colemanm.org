---
layout: post
date: 2020-03-14 23:30:17
title: "Weekend Reading: LightSpeed, Kubernetes, and a Car-Free Market Street"
description: "Facebook rebuilds Messenger, Kubernetes is mostly overcomplicated, and how Market Street has fared with no cars."
categories: blog
tags:
- weekend reading
- Facebook
- engineering
- infrastructure
- devops
- urban planning
- maps

links:
- url: https://engineering.fb.com/data-infrastructure/messenger/
  title: "Project LightSpeed: Rewriting the Messenger Codebase"
  icon: 📱
- url: https://pythonspeed.com/articles/dont-need-kubernetes/
  title: "'Let’s Use Kubernetes!' Now You Have 8 Problems"
  icon: 🔩
- url: https://blog.mapbox.com/how-the-car-free-policy-impacted-market-street-traffic-781571412c0
  title: "How the Car-Free Policy Impacted Market Street Traffic"
  icon: 🚲
---

### 📱 [Project LightSpeed: Rewriting the Messenger Codebase](https://engineering.fb.com/data-infrastructure/messenger/ “Project LightSpeed”)

A technical piece describing the goals for Facebook’s rewrite of the Messenger app. Interesting to see them avoiding their own React Native for this, and doing things in native iOS/Android.

### 🔩 [“Let’s Use Kubernetes!” Now You Have 8 Problems](https://pythonspeed.com/articles/dont-need-kubernetes/ “Let’s Use Kubernetes”)

A humorous post, but has a point. There’s pressure to add new tools that don’t do much but add moving parts and complexity. There’s nothing wrong with Kubernetes, but there’s a place for it (and your small team probably doesn’t need it).

> The more you buy in to Kubernetes, the harder it is to do normal development: you need all the different concepts (Pod, Deployment, Service, etc.) to run your code. So you need to spin up a complete K8s system just to test anything, via a VM or nested Docker containers.

> And since your application is much harder to run locally, development is harder, leading to a variety of solutions, from staging environments, to proxying a local process into the cluster (I wrote a tool for this a few years ago), to proxying a remote process onto your local machine…

### 🚲 [How the Car-Free Policy Impacted Market Street Traffic](https://blog.mapbox.com/how-the-car-free-policy-impacted-market-street-traffic-781571412c0 “How the Car-Free Policy Impacted Market Street Traffic”)

Mapbox digs into the impacts of San Francisco’s Market Street going pedestrians and bikes only.
