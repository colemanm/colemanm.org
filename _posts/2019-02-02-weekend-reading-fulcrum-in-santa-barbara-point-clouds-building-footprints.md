---
layout: post
date: 2019-02-02
title: "Weekend Reading: Fulcrum in Santa Barbara, Point Clouds, Building Footprints"
description: "Santa Barbara SAR with Fulcrum Community, open point cloud data on AWS, and Microsofts millions of building footprints."
categories: blog
tags:
- weekend reading
- Fulcrum
- open source
- GIS
- disaster response
- Fulcrum Community
- open data

links:
- url: http://www.santabarbarafamilylife.com/news/county-using-new-app-developed-to-help-log-evacuations/
  title: "Santa Barbara Evac with Fulcrum"
- url: https://registry.opendata.aws/usgs-lidar/
  title: "USGS 3DEP LiDAR Data"
- url: https://github.com/Microsoft/USBuildingFootprints
  title: "Microsoft's US Building Footprints"
---

### 👨🏽‍🚒 [Santa Barbara County Evac with Fulcrum Community](http://www.santabarbarafamilylife.com/news/county-using-new-app-developed-to-help-log-evacuations/ "Santa Barbara Evac with Fulcrum")

Our friends over at the Santa Barbara County Sheriff have been using a deployment of [Fulcrum Community](https://www.fulcrumapp.com/community/ "Fulcrum Community") over the last month to log and track evacuations for flooding and debris flow risk throughout the county. They’ve deployed over 100 volunteers so far to go door-to-door and help residents evacuate safely. In their initial pilot they visited 1,500 residents. With this platform the County can monitor progress in real-time and maximize their resources to the areas that need the most attention.

> “This app not only tremendously increase the accountability of our door-to-door notifications but also gave us a real time tracking on the progress of our teams. We believe it also reduced the time it has historically taken to complete such evacuation notices.”

This is exactly what we’re building Community to do: to help enable groups to collaborate and share field information rapidly for coordination, publish information to the public, and gather quantities of data through citizens and volunteers they couldn’t get on their own.

### ☁️ [USGS 3DEP LiDAR Point Clouds Dataset](https://registry.opendata.aws/usgs-lidar/ "USGS 3DEP LiDAR")

From Howard Butler is this amazing public dataset of LiDAR data from the USGS 3D Elevation Program. There’s an interactive version here where you can browse what’s available. Using this [WebGL-based viewer](https://usgs.entwine.io/data/view.html?r=%22https://s3-us-west-2.amazonaws.com/usgs-lidar-public/AK_Kenai_2008%22 "WebGL Point Cloud Viewer") you can even pan and zoom around in the point clouds. [More info here](https://github.com/hobu/usgs-lidar "USGS LiDAR") in the open on GitHub.

### 🏢 [US Building Footprints](https://github.com/Microsoft/USBuildingFootprints "Microsoft Building Footprints")

Microsoft published this dataset of computer-generated building footprints, 125 million in all. Pretty incredible considering how much labor it’d take to produce with manual digitizing.
