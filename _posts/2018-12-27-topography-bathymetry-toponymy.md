---
layout: post
date: 2018-12-27
title: "Topography, Bathymetry, Toponymy"
description: “A few resources for topography, bathymetry, and place names in mapping.”
categories: blog
tags:
- maps
- cartography
- open data

urls:
- https://www.gebco.net/data_and_products/gridded_bathymetry_data/
- https://viewer.nationalmap.gov/basic/
- http://www.geonames.org/
---

In this latest cartography project I'm working on, I'm rediscovering the tedium of searching for appropriate data. I'll grant that it's amazing how much high quality data is produced and freely distributed, but given the advances of web technology, it's frustrating to see how bad many of the web map content management systems are.

Of course the difficulty of finding data depends on the geographic area. I happen to be working on a region that's pretty sparse, so some data (like rasters) can be harder to find.

Here are a few resources I've either found or rediscovered worth sharing:

* [GEBCO Gridded Bathymetry](https://www.gebco.net/data_and_products/gridded_bathymetry_data/ "GEBCO Bathymetry") — Quality bathymetric data for wide areas is hard to find, which is no wonder considering how difficult it is to create. This GEBCO dataset has 30 arc-second and 1 arc-minute resolution grids, which are pretty good for smaller scale (wide area) maps.
* [The National Map Downloader](https://viewer.nationalmap.gov/basic/ "The National Map Downloader") — The main datasource for open content from USGS. I'm using this for some DEM data and contours, but there's also NAIP imagery, hydrography products, and GNIS place names. I even found where you can browse their [staged products](http://prd-tnm.s3.amazonaws.com/index.html?prefix=StagedProducts/) in raw format directly on S3, versus navigating the downloader GUI.
* [GeoNames](http://www.geonames.org/ "GeoNames") — I want a deep source for place names on the map, but not just cities. I'm looking for natural features like capes inlets, mountains, islands, rocks, shoals, creeks, and others. I've also got OpenStreetMap for this, but it's inconsistent in rural areas especially. GeoNames can't be beat for this level of depth and consistency. Wherever anything obvious is missing, I can fill in with my own data layers.

Another thing this project has prompted is a revivifying of my [gazetteer](https://github.com/colemanm/gazetteer "Gazetteer") project for working with GeoNames data[^gazetteer]. The dataset has evolved in format and been updated since I last touched this tool in ~2013, so I had to make some changes to get it to work again. Since GeoNames is delivered in a raw text format, the goal of this tool is to automate loading the data into PostGIS for easier, faster use in QGIS.

[^gazetteer]: This deserves a full post at some point later. I've always had a soft spot for place name data, so more attention on GeoNames and tools for working with it is worth it.
