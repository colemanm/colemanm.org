---
layout: post
date: 2013-10-22 20:52:25 EST
title: "Converting NOAA Charts for GIS Usage"
description: "A guide to downloading free NOAA charts and converting them for use in GIS apps or TileMill."
categories: blog
published: false
---

Jumping from my last post about working with NOAA raster nautical charts, I thought I'd lay down some instructions for how to download, convert, and project the chart data files so they can be used in GIS or apps like TileMill for making your own digital charts.

![Charts in TileMill](/images/post-images/tilemill-chart.png)

### Get QGIS

This guide shows how to convert the charts using [QGIS](http://www.qgis.org/), a free desktop GIS application. Download it for your platform [here](http://www.qgis.org/en/site/). There are a few prerequisites to install if you're on OS X, but they're all easy setups, and well-documented in the included README file.

### Download data

You can download the raw RNC data directly [from NOAA](http://www.charts.noaa.gov/RNCs/RNCsIndv.shtml). Lookup a chart by its code in one of the [catalogs](http://www.nauticalcharts.noaa.gov/mcd/ccatalogs.htm) and download a zip for the chart you want ([this](http://www.nauticalcharts.noaa.gov/mcd/catalogs/pdf/Gulf_Chartside.pdf) is an example showing the chart products for the Gulf coast).

![BSB files](/images/post-images/bsb-files.png)

NOAA RNCs are published in [BSB file format](http://home.gdal.org/projects/bsb/). Unzipping your chart, you'll see two files, a BSB and KAP file. The KAP file is what you'll run operations on in QGIS to do the preparation and conversion. To get started, open up QGIS and drag your chart's KAP file into the workspace. You should see it load up in the viewer:

![]()