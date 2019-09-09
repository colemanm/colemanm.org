---
layout: post
date: 2018-12-16
title: "Video Mapping in OpenStreetMap with Fulcrum"
description: "A quick overview of my video mapping workflow for OSM editing, using Fulcrum."
categories: blog
tags:
- OpenStreetMap
- Fulcrum
- maps
- open data
---

With tools like [Mapillary](https://www.mapillary.com/ "Mapillary") and [OpenStreetCam](https://openstreetcam.org/ "OpenStreetCam"), it’s pretty easy now to collect street-level images with a smartphone for OpenStreetMap editing. Point of interest data is now the biggest quality gap for OSM as compared to other commercial map data providers. It’s hard to compete with the multi-billion dollar investments in [street](https://www.google.com/streetview/understand/ "Street View mapping schedule") [mapping](https://maps.apple.com/vehicles/ "Apple Maps vehicles") and the bespoke equipment of Google or Apple. There’s promise for OSM to be a deep, current source of this level of detail, but it requires true mass-market crowdsourcing to get there.

The businesses behind platforms like Mapillary and OpenStreetCam aren’t primarily based on improving OSM. Though [Telenav](https://www.telenav.com/ "Telenav") does build OSC as a means to contribute, their business is in automotive mapping powered by OSM, not the collection tool itself. Mapillary on the other hand is a computer vision technology company. They want data, so opening the content for OSM mapping attracts contributors.

I’ve been collecting street-level imagery for years [using windshield mounts](https://www.fulcrumapp.com/blog/koomus-windshield-mount-for-spatialvideo/ "Koomus mount review") in my car, typically for my own purposes to add detail in OSM. Since we launched our [SpatialVideo feature](https://www.fulcrumapp.com/blog/spatialvideo/ "Fulcrum SpatialVideo") in Fulcrum (over 4 years ago now!), I’ve used that for most of my data collection. While the goals of that feature in Fulcrum are wider than just vehicle-based data capture, the GPS tracking data with SpatialVideo makes it easier to scrub through spatially to find what’s missing from the map. My personal workflow is usually centered on adding points of interest, but street furniture, power infrastructure, and signage are also present everywhere and typically unmapped. You can often see addresses on buildings, and I rarely find new area where the point of interest data is already rich. There’s so much to be filled in or updated.

This is a quick sample of what video looks like from my dash mount. It’s fairly stable, and the mounts are low-cost. This is the SV player in the Fulcrum Editor review tool:

{% include video.html id="c6F301y0T0M" title="Video Mapping in OpenStreetMap with Fulcrum" %}

One of the cool things about the Fulcrum format is that it’s video, so that smoothness can help make sure you’ve got each frame needed — particularly on high speed thoroughfares. We built in a feature to control the frame rate and resolution of the video recording, so what I do is maximize the resolution but drop the frame rate well below 30 fps. This helps tremendously to minimize the data quantity that’s got to get back to the server. Even 3 or 5 fps can be plenty for mapping purposes. I usually go with 10 or so just to smooth it out a little bit; the size doesn’t get too bad until you go past 15 or so.

Of course the downside is that this content isn’t available to the public easily for others to map from. Not a huge deal to me, but with [Fulcrum Community](https://www.fulcrumapp.com/community/ "Fulcrum Community") we’re looking at some ways to open this system up to use for contribution, a la Mapillary or OSC.
