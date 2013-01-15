---
layout: post
date: 2013-01-15 09:21:57 EST
title: Creating New Contributors to OpenStreetMap
categories: blog
comments: true
---

I wrote a [blog post](http://spatialnetworks.com/blog/2013/01/the-first-3-months-of-pushpin-and-openstreetmap/) last week about the first few months of usage of [Pushpin](http://pushpinosm.org/), the mobile app we built for editing OpenStreetMap data.

As I mentioned in [the post](http://spatialnetworks.com/blog/2013/01/the-first-3-months-of-pushpin-and-openstreetmap/), I'm fascinated and excited by how many brand new OpenStreetMap users we're creating, and how many who never edited before are taking an interest in making contributions. This has been an historic problem for the OpenStreetMap project for years now: How do you convince a casually-interested person to invest the time to learn _how to contribute themselves_?

<iframe width='596' height='300' frameBorder='0' src='http://a.tiles.mapbox.com/v3/colemanm.pushpin-edits.html#2/36.0/-39.0'></iframe>
<p class="caption">3 months of OSM edits with Pushpin</p>

There are two primary hurdles I've always seen with why "interested users" don't make contributions; one technical, and one more philosophical:

1. Editing map data is somewhat complicated, and the documentation and tools don't help many users to climb over this hump.
2. It's hard to answer the question: "Why should I edit this map? What am I editing, and who benefits from the information?"

To the first point, this is an issue largely of time and effort on the part of the volunteer-led developer community behind OpenStreetMap. GIS data is fundamentally complex, much moreso than Wikipedia's content, the primary analog to which OpenStreetMap is often compared &mdash; "Wikipedia for maps". It's an apt comparison only on a conceptual level, but when it comes time to build an editor for the information within each system, the demands of OpenStreetMap data take the complexity to another level. As I said, the community is constantly chewing this issue, and making [amazing progress](http://mapbox.com/osmdev/) on a new [web-based editor](http://geowiki.com/iD/). In building Pushpin, we spent a long time making sure that the user didn't need to know anything about the complex OpenStreetMap [tagging system](http://wiki.openstreetmap.org/wiki/Map_Features) in order to make edits. We picked apart the wiki and [taginfo](http://taginfo.openstreetmap.org/) to abstract the common tags into simple picklists, which prevents both the need to type lots of info, and the need to know that `amenity=place_of_worship` is the proper tag for a church or mosque.

As for answering the "why", that's a little more complicated. People contribute to community projects for a host of reasons, so it's a challenge to nail down how this should be communicated about OSM. There are stray bits around that tell the story pretty succinctly, but the problem lies in centralizing that message down to its core. The [LearnOSM](http://learnosm.org/) site does a good job of [explaining](http://www.learnosm.org/files/beginners-guide/Beginning_OSM_en_v1.pdf) to a non-expert what the benefits are of becoming part of the contributor community, but it feels like the story needs to be told somewhere closer to the main homepage. [Alex Barth](http://twitter.com/lxbarth) recently [proposed an excellent idea](http://lists.openstreetmap.org/pipermail/talk/2013-January/065784.html) to the OpenStreetMap mailing list, a "contributors mark" that can be used within OSM-based services to convey the value of free and open map data. This is an excellent idea, with a [nice presentation](http://yhahn.github.com/byosm/), that addresses a couple of needs. For one it communicates what the project actually _is_, rather than just sending the unsuspecting user to a page about ODbL, and it also gives a general sense about how the data is used by real people.

In order for those [one million user accounts](http://opengeodata.org/1-million-openstreetmappers) to turn into one million contributors, we need to do a better job at conveying meaning to the project and the value it provides to OpenStreetMap's thousands of data consumers.