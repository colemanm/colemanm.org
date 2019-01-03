---
layout: post
date: 2015-08-08
title: "Addresses and Geocoding: Do New Systems Improve What We Have?"
description: "An overview of new addressing and coordinate schemes, comparison of features, and an analysis of why they matter (or not)."
categories: blog
tags:
- addresses
- geocoding
- maps
---

There's been a boom in the last couple years of big tech companies trying to reach to the periphery of the globe and bring Internet access to people without connectivity. Facebook is launching giant [solar-powered drones](http://arstechnica.com/information-technology/2015/07/facebook-our-drones-will-use-lasers-to-deliver-10gbps-internet-access/ "Facebook: Our drones will use lasers to deliver 10Gbps Internet access") with lasers, Google is [floating balloons](http://www.google.com/loon/ "Google Project Loon") with antennae into the stratosphere, and smartphones are [cheaper than ever](http://qz.com/451844/africas-smartphone-market-is-on-the-rise-as-affordable-handsets-spur-growth/ "Africa’s smartphone market is on the rise as affordable handsets spur growth").

The success rate of these projects is hard to quantify, it's too early. But for the mapping industry, it's a fact that billions of people don't have access to the kinds of map data we have in the US or Europe, and the immaturity of infrastructure and public services like managed street addresses and quality map data are holding back the advance of mobile location-based services. E-commerce companies like Amazon and logistics providers like UPS and FedEx rely on quality geographic data to conduct business. Cities like Lagos, Dhaka, or Kinshasa are enormous booming urban centers, but still don't have reliable addressing systems for navigating city streets.

<!-- more -->

{% include image.html file="247-address.jpg" description="House number address " caption="no" %}

Given the combination of expanding connectivity to disconnected places and the vacuum of reliable geodata, a [number](http://what3words.com/ "what3words") [of](http://www.mapcode.com/ "mapcode") [services](http://openlocationcode.com/ "Open Location Code") have sprung up in recent years with systems for global wayfinding and geocoding. The particular focus here is to bring a mechanism for providing addresses to places where there are no other alternatives. When I first read that people were building new systems for geocoding it piqued my interest, so I dug into them to see what they're all about, and what they might be bringing to the table that we don't already have.

## The Problem

The first step in understanding the problem at hand is to lay down some definitions that differentiate an "address" from a "coordinate". An **address** is an identifier for a place where a person, organization, or the like is located or can be found, while a **coordinate** is a group of numbers used to indicate position in space.

This fundamental difference is important because addresses only truly matter where there are people, but coordinates are universal identifiers for anywhere on the globe. A location in the center of the North Atlantic _has_ a position in any global geographic coordinate system, but having a human-readable address isn't important; it's unnecessary for everyday use. Coordinate or grid systems can function as addresses, but the reverse isn't always the case.

I thought I'd compare some different geocoding systems to see where the pros and cons are. Are they really necessary, or can we make use of existing proliferated systems without reinventing this wheel?

## The "neo-addressing" systems

{% include image.html file="geocoding-systems.jpg" description="Coordinates in several systems" caption="no" %}

These systems all provide similar capabilities, with a primary focus of providing _memorable_ human-friendly identifiers for places. There are others out there in the wild, but I'll just talk about some of the prominent ones I've run across:

* [**Mapcode**](http://www.mapcode.com/ "Mapcodes") - Created by a Dutch non-profit founded by former TomTom employees
* [**what3words**](http://what3words.com/ "what3words") - A system based on a global grid of 3m x 3m squares, with identifiers composed of triplets of everyday words
* [**Open Location Code**](http://openlocationcode.com/ "Open Location Code") - An open source system developed and sponsored by Google

Each of these geocoding services have similar sets of objectives: to make addresses _derivable_ for anywhere on Earth using algorithms, assign shorter and more memorable codes than coordinate systems or postal codes, and to have codes that reduce ambiguity (not contain "O" and "0", or by using distinctly different words and phrases). The interesting thing with all of them is that by deriving coordinates deterministically, the result can be controlled and forcefully made more human-friendly. In the case of what3words, it generates shorter and more memorable word combinations in areas with higher population density. So `lives.magma.palace` will take you to Philadelphia's [Independence Hall](https://map.what3words.com/lives.magma.palace "Independence Hall on what3words"), while `conservatory.thrashing.incinerated` will get you to the remote Arctic [islands of Svalbard](https://map.what3words.com/conservatory.thrashing.incinerated "Svalbard on what3words"). This is a clever method to optimize the pool of words for usage frequency, and obviously not something that can be controlled with traditional coordinate systems.

Algorithmic systems can also allow a user to shorten the code for a less granular location. With OLC, you can knock off the last couple characters and get a larger area containing the original location. `76VVQ9C6+` encompasses the few city blocks around our building. `76VVQ9C6+9M` gets you right to my office. Because it represents an _area_ rather than only a point, truncating to get successively larger areas is possible. Truncating a lat/lon coordinate moves the point entirely.

The what3words approach seems the most creative and truly memorable method, though it sounds sort of gimmicky. They've done a lot to accommodate for things like offensive words, avoiding [homophones](https://en.wikipedia.org/wiki/Homophone), removing ambiguous combinations, and even providing the system in several languages.

Spreading adoption for any of these systems will be an enormous challenge. They all seem to be different varieties of the same wheel. If I was developing mapping applications, which system should I support? All of them? Software developers will have to buy into one or more new systems and users will have to understand how they work.

Another issue is one of ownership. If a new scheme for addressing requires a special algorithm or code library for calculating coordinates, it should be in the public domain and serve as an open standard (if anyone expects adoption to grow). In the age of open source, no platform developer is going to license a proprietary system for generating coordinates with so many open alternatives out there. Both OLC and Mapcodes have an [open license](http://www.apache.org/licenses/LICENSE-2.0.html "Apache License"), but what3words is currently proprietary.

Let's compare these tools to what existing coordinate schemes we already have.

## Existing models, grids, and coordinate systems

{% include image.html file="usgs-topo-map.jpg" description="USGS topographic map" caption="no" %}

Addresses in the classic sense of "123 Main St" make sense for navigation, particularly due to a hundred years of usage and understanding. When I'm searching for "372 Woodlawn Court" in my car, there are some conventions about addressing that help me get there without knowing specific geographic coordinates--odd numbers are on one side and even on the other, numbers follow a sequence in a specific direction--so people can still do some of the wayfinding themselves. Naturally this is reliant on having a trusted, known [address format](https://en.wikipedia.org/wiki/Address_(geography)#Mailing_address_format_by_country "Mailing address formats around the world"), but nonetheless, adoption of new geocoding systems should be valuable for everyone, not just in places without modern address systems.

How do new means of addressing physical space stack up to the pre-existing constructs we've had for decades (or centuries)? Do the benefits outweigh the costs of adopting something new?

Here are several of the common [coordinate systems](https://en.wikipedia.org/wiki/Geographic_coordinate_system "Geographic coordinate systems") used globally for navigation and mapping:

* Plain [latitude and longitude](https://en.wikipedia.org/wiki/Decimal_degrees "Decimal degrees") - in decimal or degree-minute-second format
  * Example: **27.79987, -82.63402** or **27°47'59.5314" N 82°38'2.472" W**
  * Pro: In use for centuries, supported across any mapping tools
  * Con: Lengthy coordinates needed to get accurate locations
* [UTM](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) (Universal Transverse Mercator) - a grid-based map projection that segments the world into 60 east/west "zones" of 6° each, with coordinates expressed as a number of meters north of the equator and east of the zone's central meridian ("northing" and "easting")
* Example: **17N 339031 3076104**
  * Pro: Uses meters for measurement, great for orienteering with paper maps, nearby coordinates can be compared to measure distance easily
  * Con: Long coordinates, requires knowledge of reference zones to find position, some tools don't support
* [MGRS](https://en.wikipedia.org/wiki/Military_grid_reference_system) (Military grid reference system) - another grid-based standard used by NATO militaries, similar to UTM, but with different naming conventions
  * Example: **17R LL 39031 76104**
  * Pro: Same as UTM, somewhat more intuitive scheme with smaller grid cells
  * Con: Same as UTM
* [Geohash](https://en.wikipedia.org/wiki/Geohash) - an encoded system similar to the ones mentioned earlier, but the underlying algorithm has been in the public domain since 2008, and there are existing tools that already support it
  * Example: **dhvnpsg9zz2**
  * Pro: Existing algorithm-based system, open standard, short codes
  * Con: Not human-readable

{% include image.html file="mgrs.jpg" description="MGRS grid coverage in the US" %}

These systems have some distinct advantages over building something new (and naturally some disadvantages). But I think the gains had with algorithmic libraries and services like those mentioned above aren't enough to warrant convincing millions of people to adopt something new.

If you look back at the primary benefits of Open Location Codes or what3words, it's memorability. I'll grant that what3words has a leg up in this department, but the others, not so much. Is `17RLL3861573116` _really_ that much worse than `76VVQ9F6+4V`? Neither are very human-friendly to me, but at least something like MGRS has a worldwide existing base of understanding, users, and tools supporting it.

I would concede that memorability and reduced ambiguity could help to replicate the ease-of-use we get with classic addresses. But in the days of ubiquitous GPS, smartphones, and apps, people don't realistically memorize _anything_ about location anymore. We punch everything into a mapping app or the in-car navigation system. Given that, what benefit are we left with inventing a new system of expressing location?

I think it's wise to spread adoption of widespread systems like MGRS or UTM before we start asking citizens of developing countries to adopt systems that no one else is using yet, even if those systems do come with some new benefits.

### Other Interesting Reading

If you're interested in reading more background on some of these systems, check out these links:

* [Complete guide to land navigation with MGRS](http://www.itstactical.com/skillcom/navigation/the-complete-guide-to-land-navigation-with-the-military-grid-reference-system/ "Complete guide to land navigation with MGRS")
* [Comparison of location encoding systems](https://github.com/google/open-location-code/blob/master/docs/comparison.adoc "Comparison of location encoding systems")
* [Technical appraisal of what3words](https://vip-eu.file-content.com/directlink/buxfi-tylwgg-vuxd3rmo/What3Words%20-%20Technical%20Appraisal%20V1.1.pdf?cell=2 "Technical review of what3words")
* [Guide to using UTM](https://www.maptools.com/tutorials/utm/quick_guide "Guide to using UTM")
