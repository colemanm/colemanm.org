---
layout: post
date: 2017-04-24
title: "Aerial imagery with the Mavic"
categories: blog
---

At work we've been building an integration between Fulcrum and [DroneDeploy](https://www.dronedeploy.com), a service for automating drone flight and data capture for aerial imagery. It's compatible with the Mavic, so I gave it a shot with some test flights over my house.

The idea is simple: use DroneDeploy to draw on a map the area you want to survey from above, and their app handles building the flight plan, sending it to the drone, and flying the waypoints to take all the photos. You then take the pictures from the drone's storage and upload to your DroneDeploy project for processing. It stitches them into a single mosaic and does a few other data processing functions to give you maps of NDVI plant health, elevation, and even a [3D model](http://support.dronedeploy.com/v1.0/docs/3dmodeling-with-drones) of the scene.

![Aerials of my house](/images/post-images/dronedeploy-house-test.jpg)

This data is from a 3 minute flight over my house at about 150 feet. The post-processed scene reports 0.75 acres at 0.6 in/pixel resolution.  Only 13 stills required to create this image. It's pretty impressive for a few minutes of setup and a few minutes of flying. In the full-res images you can actually see Elyse and I clearly standing in the backyard. She was a little spooked as it took off, but loved the landing! 
