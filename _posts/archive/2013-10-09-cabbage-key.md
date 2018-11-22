---
layout: post
date: 2013-10-09 13:38:33 EST
title: "Cabbage Key"
description: "Mapping and relaxing at Cabbage Key."
img: /images/post-images/egret.jpg
categories: blog
tags:
- travel
- family
---

{% include image.html file="egret.jpg" description="Egret" caption="no" %}

I spent last weekend with the family at [Cabbage Key](http://www.cabbagekey.com/home/), an island near Charlotte Harbor, in southwest Florida. It's only visitable by boat, so we launched the Shamrock on Friday morning to head over to the cottage, including a number of cargo trips to bring all the weekend's people and provisions.

We had a fantastic time fishing, sailing, drinking beers, and eating. Cabbage is a great spot that's close enough to drive to, yet still detached enough to feel like a true vacation away from home.

{% include image-partial.html file="cayo-costa-house.jpg" description="House on Cayo Costa" caption="no" width="600" %}

On Saturday we visited a friend's rustic cabin on [Cayo Costa](https://en.wikipedia.org/wiki/Cayo_Costa_State_Park), a barrier island state park, with a mangrove-lined shore on Pine Island Sound, and a beach on the Gulf. Since, like Cabbage, Cayo Costa is only accessible by private boat or ferry, it's pretty secluded. Our family friend's cabin is a minimalist setup, with just enough shelter, a generator, and small kitchen &mdash; perfect for our weekend seafood grill session.

I recorded some GPS traces of a few of our outings, a couple on the Shamrock, and some aboard Nat's 18' [Buccaneer](https://www.flickr.com/photos/colemanm/8045621303). We had an amazing sail back to Pineland on Monday (the red line below), averaged 6 knots in rough seas, making the 5 mile trip in a little over 45 minutes. We had the tails of Tropical Storm Karen sweeping through that afternoon, so we made it back just ahead of a heavy squall.

<div class="map">
<iframe width='700' height='350' frameBorder='0' src='https://a.tiles.mapbox.com/v4/colemanm.map-oimijqmz/attribution,zoompan,zoomwheel,geocoder,share.html?access_token=pk.eyJ1IjoiY29sZW1hbm0iLCJhIjoieW8wN2lTNCJ9.j1zlDeYFSVAl8XWjaHY-5w'></iframe>
</div>

It was convenient on the trips to have the charts readily-available offline in [Fulcrum](http://www.fulcrumapp.com). Once I figured out how to download the raster data, convert it, and load it in, it was pretty simple. I now have a process for doing this with any of the [digital charts](http://www.charts.noaa.gov/RNCs/RNCsIndv.shtml) that [NOAA](http://www.noaa.gov) publishes. I had built a small app in Fulcrum for reporting errors on the charts, and used it with some success out on the water. Though I'm not sure what exactly constitutes an actual missing feature, what things are "managed" as canonical features for navigational charts, and how to report them back. Planning a future post on this soon.

In all the hacking I've done with charts and data in recent weeks, a small [side project](https://github.com/colemanm/spinnaker) is coming together to make it easier to extract the raw data from the [electronic charts](http://www.charts.noaa.gov/ENCs/ENCs.shtml), not just rasters. NOAA's formats are workable (and [supported in GDAL](http://www.gdal.org/ogr/drv_s57.html)), but it's far too difficult for a regular person to make use of the data outside the paper charts or expensive proprietary chart plotters. A project is brewing to do more with that data, to make it more consumable and ready for mapping out-of-the-box, so stay tuned.
