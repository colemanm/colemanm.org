---
layout: post
date: 2019-09-20 17:10:42 EST
title: "Data as a Living Asset"
description: "Thoughts on data warehouse archives, the living, institutional knowledge you’ve invested in over years or decades of doing business, full of latent value."
img: /images/post-images/data-as-an-asset.jpg
categories: blog
tags:
- Fulcrum
- work

links:
- url: https://www.fulcrumapp.com/blog/data-as-a-living-asset/
  title: "Data as a Living Asset"
---

*This is a post from the Fulcrum archives [I wrote](https://www.fulcrumapp.com/blog/data-as-a-living-asset/ "Data as a Living Asset") 3 years back. I like this idea and there's more to be written on the topic of how companies treat their archives of data. Especially in data-centric companies like those we work with, it's remarkable to see how quickly it often is thrown on a shelf, atrophies, and is never used again.*

In the days of pen and paper collection, data was something to collect, transcribe, and stuff into a file cabinet to be stored for a minimum of 5 years (lest those auditors come knocking). With advances in digital data capture — through all methods including forms software, spreadsheets, or sensors — many organizations aren’t rethinking their processes and thus, haven’t come much further. The only difference is that the file cabinet’s been replaced with an Access database (or *gasp* a 10 year old spreadsheet!).

Many organizations collect troves of legacy data in their operations, or at least as much as they can justify the cost in collecting. But because data management is a complicated domain in and of itself, often times the same data is **re-collected** over and over, with all cost and no benefit. Once data makes its way into corporate systems somewhere after its initial use, it’s forgotten and left on the virtual shelf.

{% include image.html file="data-as-an-asset.jpg" description="Data as a Living Asset" caption="no" %}

**Data is your company’s memory.** It’s the living, institutional knowledge you’ve invested in over years or decades of doing business, full of latent value.

But there are a number of challenges that stand in the way when trying to make use of historical data:

- **Compatibility** — File formats and versions. Can I read my old data with current tools?
- **Access** — Data silos and where your data is published. Can my staff get to archives they need access to without heartburn?
- **Identification** — A process for knowing what pieces are valuable down the road. Within these gigabytes of data, what is useful?

If you give consideration to these issues up-front as you’re designing a data collection workflow, you’ll make your life much simpler down the road when your future colleagues are trying to leverage historical data assets.

Let’s dive deeper on each of these issues.

### Formats and Compatibility

I call this the “Lotus 1-2-3” problem, which happens whenever data is stored in a format that dies off and loses tool compatibility[^lotus123]. Imagine the staggering amount of historical corporate data locked up in formats that no one can open anymore. This is one area where paper can be an advantage: if stored properly, you can always open the file.

Of course there’s no way to know the future potential of a data format on the day you select it as your format of choice. We don’t have the luxury of that kind of hindsight. I’m sure no one would’ve selected Lotus’s `.123` format back in ‘93 had they known that Excel would come to dominate the world of spreadsheets. Look for well-supported [open standards](https://en.wikipedia.org/wiki/Open_format "Open standards") like CSV or JSON for long term archival. Another good practice is to revisit your data archives as a general “hygiene” practice every few years. Are your old files still usable? The faster you can convert dead formats into something more future-proof, the better.

### Accessibility

This is one of the most important issues when it comes to using archives of historical data. Presuming a user can open files of 10 year old data because you’ve stored it effectively in open formats — is the data somewhere that staff can get it? Is it published somewhere in a shared workspace for easy access? Most often data isn’t squirreled away in a hard-to-reach place intentionally. It’s often done for the sake of organization, cleanliness, or savings on storage.

Anyone that works frequently with data has heard of “[data silos](https://en.wikipedia.org/wiki/Information_silo "Information silos")”, which arise when data is holed up in a place where it doesn’t get shared, only accessible by individual departments or groups. Avoiding this issue can also involve internal corporate policy shifts or revisiting your data security policies. In larger organizations I’ve worked in, however, the tendency is toward **over-securing** data to the point of uselessness. In some cases it might as well be deleted since it’s effectively invisible to the entire company. This is a mistake and a waste of large past investments in collecting that data in the first place.

Look for publishing tools that make your data easy to get to without sacrificing controls over access and security. But resist the urge to continuously wall off past data from your team.

### Identifying the Useful Things

Now, assuming your data is in a useful format *and* it’s easily accessible, you’re almost there. When working with years of historical records it can be difficult to extract the valuable bits of information, but that’s often because the first two challenges (compatibility and accessibility) have already been standing in your way. If your data collection process is built around your data as an **evergreen asset** rather than a single-purpose resource, it becomes much easier to think of areas where a dataset could be useful 5 or 6 years down the road.

For instance, if your data collection process includes documenting inspections with thorough before-and-after photographs, those could be indispensable in the event of a dispute or a future issue in years time. With ease of access and an open format, it could take two clicks to resolve a potentially thorny issue with a past client. That is **if** you’ve planned your process around your data becoming a valuable corporate resource.

A quick story to demonstrate these practices:

I’m currently working with a construction company on re-roofing my house, and they’ve been in business for 50+ years. Over that time span, they’ve performed site visits and accurately measured so many roofs in the area that when they get calls for quotes, they often can pull a file from 35 years ago when they went out and measured a property. That simple case is an excellent example of realizing latent value in a prior investment in data: if they didn’t organize, archive, and store that information effectively, they’d be redoing field visits every week. Though they aren’t digital with most of their process, they’ve nailed a workflow that works *for them*. They use formats that work, make that data accessible to their people, and know exactly what information they’ll find useful over the long term.

Data has value beyond its immediate use case, but you have to consider this up front. Design sustainable workflows that allow you to continuously update data, and make use of archival data over time. You’ve spent a lot to create it, you should be leveraging it to its fullest extent.

[^lotus123]: [Lotus 1-2-3](https://en.wikipedia.org/wiki/Lotus_1-2-3 "Lotus 1-2-3") was a spreadsheet application popular in the 80s and 90s. It succumbed to the boom of Microsoft Office and Excel in the 1990s.
