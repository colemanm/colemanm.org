---
layout: link
date: 2019-05-09
title: "Exploring Cycling Data with Python, Strava and PostgreSQL"
target: http://aaronolszewski.com/exploring-cycling-data-with-python-strava-and-postgresql/
description: "Analyzing Strava data with Postgres and Python"
categories: blog
tags:
- health
- running
- analysis
- SQL
- Strava

links:
- url: http://aaronolszewski.com/exploring-cycling-data-with-python-strava-and-postgresql/
  title: "Exploring Cycling Data with Python, Strava and PostgreSQL"
---

This is an interesting [project on GitHub](https://github.com/shavedwheels/strava-data "strava-data") for syncing data from the Strava API for analysis from a local database. I've had my eye out for some way to do this cleanly — to use the Strava [Activities API](https://developers.strava.com/docs/reference/#api-Activities-getActivityById "Strava Activities API") to sync each track and its metadata to a local Postgres database. My interest is in being able to put the tracks on a map (mostly), but some of the analysis shown here is pretty cool, too.

In this author's case it's about cycling data. I want to be able to run SQL on the global archive of activity data, like so:

{% include image.html file="strava-activity-sql.jpg" description="Strava Activity SQL Analysis" caption="no" %}
