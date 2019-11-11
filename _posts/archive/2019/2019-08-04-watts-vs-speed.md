---
layout: post
date: 2019-08-04
title: "Watts vs. Speed"
description: "Wattage calculations for cycling."
categories: blog
tags:
- cycling
- health
- data
---

After a [long ride](https://www.strava.com/activities/2590886924 "Weedon Island circuit") today, I was looking at the stats on Strava and wondering how wattage calculations work to determine power. Strava has a built in estimate it uses for your power rating if you don't have a power meter on your bike. From looking into it, [their calculations](https://support.strava.com/hc/en-us/articles/216917107-How-Strava-Calculates-Power "How Strava Calculates Power") look pretty sophisticated for estimating power pretty closely, unless you're really riding in extreme conditions:

> The power produced while riding is made up of several components:
>
> * Power produced to overcome the rolling resistance of forward motion.
> * Power produced to overcome wind resistance.
> * Power produced to overcome the pull of gravity (in the case of climbing hills).
> * Power produced to accelerate from one speed to another.
>
> The total power produced, P(total), is the sum of all four power components.
>
> `P(total) = P(rolling resistance) + P(wind) + P(gravity) + P(acceleration)`

It looks like the biggest source of error would be the environmentals, particularly wind resistance and elevation change (if the GPS elevation data is poor). My ride today shows an average 103 watts for the 1 hour 20 minute ride. Since it's almost totally flat and their was only a little wind today, it should be pretty accurate. Seems to me that wind-induced error would sort of cancel itself out on circuitous routes like this one — for every segment of headwind, you get another with tailwinds.

I also found this [bike calculator](http://bikecalculator.com/index.html "Bike watts and speed calculator") that takes various inputs and adjusts the resulting speed and watts accordingly.
