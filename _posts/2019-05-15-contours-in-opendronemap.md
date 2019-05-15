---
layout: link
date: 2019-05-15
title: "Contours in OpenDroneMap"
target: https://www.opendronemap.org/2019/04/introducing-contours-in-webodm/
description: "Latest release of WebODM support for contour generation."
img: /images/post-images/odm-contours.jpg
categories: blog
tags:
- drones
- OpenDroneMap
- maps
- open source

links:
- url: https://www.opendronemap.org/2019/04/introducing-contours-in-webodm/
  title: "Contours in OpenDroneMap"
---

One of my favorite open source projects ongoing right now is [OpenDroneMap](https://www.opendronemap.org/ "OpenDroneMap"). I haven't gotten to use it much recently, but followed development over the last couple years. Outside of some [loose testing]({{ site.url }}/post/opendronemap/ "OpenDroneMap") a while ago, I haven't flown my Mavic for any imagery collection since. I need to go out to the waterfront nearby and fly some new data so I can kick the tires some more on ODM's latest stuff.

{% include image.html file="odm-contours.jpg" description="Contours in WebODM" caption="no" %}

Piero just announced completion of contour support in WebODM, which is the web front-end to the ODM processing suite. This is some powerful geospatial software, and a great example of what a committed team can do with open source. The new contour capability leverages [the GRASS engine](https://github.com/OpenDroneMap/WebODM/blob/master/plugins/contours/calc_contours.grass "GRASS contours") as well as [GDAL](https://gdal.org/ "GDAL") to process, then allows you to export to GIS. I can't wait to try it out.
