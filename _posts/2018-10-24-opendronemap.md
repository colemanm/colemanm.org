---
layout: post
date: 2018-10-24
title: "OpenDroneMap"
description: "Experimenting with OpenDroneMap, a processing engine for drone imagery."
categories: blog
img: /images/post-images/opendronemap-ortho.jpg
tags:
- drones
- imagery
- open source
- software
---

Since I [got the Mavic](/post/aerial-imagery-with-the-mavic-and-dronedeploy/ "Mavic Pro aerials") last year, I haven’t had many opportunities to do mapping with it. I’ve put together a few experimental flights to play with [DroneDeploy](https://www.dronedeploy.com/ "DroneDeploy") and our [Fulcrum extension](https://www.fulcrumapp.com/blog/drones-and-fulcrum-with-dronedeploy/ "Fulcrum DroneDeploy App"), but outside of that I’ve mostly done photography and video stuff.

[OpenDroneMap](https://www.opendronemap.org/ "OpenDroneMap") came on a scene a couple years ago as a toolkit for processing drone imagery. I’ve been following it loosely through the Twittersphere since. Most of my image processing has been done with DroneDeploy, since we’d been working with them on some integration between our platforms, but I was curious to take a look once I saw the progress on ODM. Specifically what caught my attention was [WebODM](https://github.com/OpenDroneMap/WebODM "WebODM"), a web-based interface to the ODM processing backend — intriguing because it’d reduce friction in generating mosaics and point clouds with sensible defaults and a clean, simple map interface to browse resulting datasets.

{% include image.html file="opendronemap-ortho.jpg" description="OpenDroneMap aerial" caption="no" %}

The WebODM setup process was remarkably smooth, using Docker to stand-up the stack automatically. All the prerequisites you need are git, Python, and pip running to get started, which I already had. With only these three commands, I had the whole stack set up and ready to process:

```
git clone https://github.com/OpenDroneMap/WebODM --config core.autocrlf=input --depth 1
cd WebODM
./webodm.sh start
```

Pretty slick for such a complex web of dependencies under the hood, and a great web interface in front of it all.

Using a set of 94 images from a test flight over a [job site](https://www.google.com/maps/@27.4693375,-82.4070804,685m/data=!3m1!1e3) in Manatee county, I experimented first with the defaults to see what it’d output on its own. I did have a bit of overlap on the images, maybe 40% or so (which you need to generate quality 3D). I had to up the RAM available to Docker and reboot everything to get it to process properly, I think because my image set is pushing 100 files.

{% include image.html file="odm-processing-results.png" description="ODM processing results" caption="no" %}

That project with the default settings took about 30 minutes. It generates the mosaicked orthophoto (TIF, PNG, and even MBTiles), surface model, and point cloud. Here’s a short clip of what the results look like:

{% include video.html id="FF56MRI-BU4" %}

This is why open source is so interesting. The team behind the project has put together great documentation and resources to help users get it running on all platforms, including running everything on your own cloud server infrastructure with extended processing resources. I see OpenAerialMap integration was just added, so I’ll have to check that out next.
