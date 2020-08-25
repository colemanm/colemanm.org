---
layout: post
date: 2020-08-25 15:39:49
title: "Workflows in Fulcrum"
description: "Launching Fulcrum's Workflow engine — for building custom, event-driven data flows with Fulcrum data."
img: /images/post-images/fulcrum-workflows.jpg
categories: blog
tags:
- Fulcrum
- workflow
- automation
---

Fulcrum's been the best tool out there for quite a few years for building your own apps and collecting data with mobile forms (we were doing low-code before it was cool). Our product focus for a long time was on making it as simple and as fast as possible to go from ideas to reality to get working on a data collection process. For any sort of work you would've previously done with a pen and paper, or a spreadsheet on a tablet, you can rapidly build and deploy a Fulcrum app to your team for things like inspections, audits, and inventory applications.

{% include image.html file="fulcrum-workflows.jpg" description="Workflows in Fulcrum" caption="no" %}

For the last 8 months or so we've been focused on improving what you can do with data __after collection__. We're great at speed to build and collect, but had not been focused yet on the rest of a customer workflow. Since the beginning we've had an open API (even for SQL, what we call the [Query API](https://docs.fulcrumapp.com/reference#query-intro "Fulcrum Query API")), code libraries, and other tools. In July we launched our [Report Builder](/post/fulcrum-report-builder/ "Fulcrum Report Builder"), which was a big step in the direction of self-service reporting and process improvement tools

This week we've just launched Workflows, which is all about providing users an extensible framework for adding their own business logic of events and actions that need to happen on your data.

If you're familiar with tools like [Zapier](https://www.zapier.com "Zapier") or [Integromat](https://www.integromat.com/en/ "Integromat"), you'll recognize the concept. Workflows is similar in design, but focused on events within the scope of Fulcrum. Here's how it works:

A workflow listens for an event (a "trigger") based on data coming through the system. Currently you can trigger on new data _created_ or _updated_.

When a trigger happens, the relevant record data gets passed to the next step, a "filter" where you can set criteria to funnel it through. Like cases where I want to trigger on new data, but only where a "Status" = `Critical`.

Any record making it through is passed to an "action", and at launch we have actions to:

* Send an email
* Send an SMS message
* Send a webhook (_man_ is this one powerful)

We're excited to see what users build with this initial set of options. There are plans in the works for a lot of interesting things like custom SMTP (for high volume email needs), geofencing, push notifications, and much more.

This is just the beginning of what will become a pillar product. Our Workflow engine will continue to evolve with new actions, filters, and triggers over time as we extend it to be more flexible for designing your business data decision steps and data flows.
