---
layout: post
date: 2019-01-04
title: "Fulcrum Desktop"
description: "On our Fulcrum Desktop syncing tool, a companion to the Fulcrum API."
categories: blog
tags:
- Fulcrum
- open source
- data
---

A frequent desire for Fulcrum customers is to maintain locally a version of the data they collect with our platform, in their database system of choice. With our [export tool](http://help.fulcrumapp.com/beginners-crash-course/exporting-your-data "Fulcrum Export Tool"), it’s simple to pull out [extracts in formats](http://help.fulcrumapp.com/exporting-data/general/in-what-file-formats-can-i-export-my-data "Fulcrum Export Formats") like CSV, shapefile, SQLite, and even PostGIS or GeoPackage. What this doesn’t allow, though, is an automatable way to keep a local version of data on your own server. You’d have to extract data manually on some schedule and append new stuff to existing tables you’ve already got.

A while back we built and released a tool called [Fulcrum Desktop](https://developer.fulcrumapp.com/desktop/intro/ "Fulcrum Desktop"), with the goal of alleviating this problem. It’s an [open source](https://github.com/fulcrumapp/fulcrum-desktop "Fulcrum Desktop on GitHub") command line utility that harnesses our API to synchronize content from your Fulcrum account into a local database. It supports PostgreSQL (with PostGIS), Microsoft SQL Server, and even [GeoPackage](https://www.geopackage.org/ "GeoPackage").

Other than the primary advantage of providing a way to clone your data to your own system, one of the cool things you can do with Desktop is easily make your data available to your GIS users in a tool like [QGIS](https://qgis.org/en/site/ "QGIS"). It also has a plugin architecture to support other cool things like:

* [Media management](https://github.com/fulcrumapp/fulcrum-desktop-media "Fulcrum Desktop Media") — syncing photos, videos, audio, signatures
* [S3](https://github.com/fulcrumapp/fulcrum-desktop-s3 "Fulcrum Desktop S3") — storing media files in your own Amazon S3 bucket
* [Reports](https://github.com/fulcrumapp/fulcrum-desktop-reports "Fulcrum Desktop Reports") — Generating PDF reports 

If you have the Fulcrum Developer Pack with your account, you have access to all of the APIs, so you need that to get Desktop set up (though it is available on the free trial tier).

We’ve also built another utility called [`fulcrum-sync`](https://github.com/fulcrumapp/fulcrum-sync "Fulcrum Sync") that makes it easy to set up Desktop using Docker. This is great for version management, syncing data for multiple organizations, and overall simplifying dependencies and local library management. With Docker “containerizing” the installation, you don’t have to worry about conflicting libraries or fiddle with your local setup. All of the FD installation is segmented to its own container. This utility also makes it easier to install and manage FD plugins.

{% include video.html id="Sc0OVQvQ_eQ" %}
