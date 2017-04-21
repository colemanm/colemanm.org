---
layout: post
date: 2017-04-20
title: "Weekly Links: OSM on AWS, Fulcrum Editor, & Real-time Drone Maps"
categories: blog
---

### [Querying OpenStreetMap with Amazon Athena](https://aws.amazon.com/blogs/big-data/querying-openstreetmap-with-amazon-athena/) 🗺

Using Amazon’s [Athena](https://aws.amazon.com/athena/) service, you can now interactively query OpenStreetMap data right from an interactive console. No need to use the complicated OSM API, this is pure SQL. I’ve taken a stab at building out a replica OSM database before and it’s a beast. The dataset [now clocks in at 56 GB](http://planet.openstreetmap.org/) _zipped_. This post from Seth Fitzsimmons gives a great overview of what you can do with it:

> Working with “the planet” (as the data archives are referred to) can be unwieldy. Because it contains data spanning
> the entire world, the size of a single archive is on the order of 50 GB. The format is bespoke and extremely specific
> to OSM. The data is incredibly rich, interesting, and useful, but the size, format, and tooling can often make it
> very difficult to even start the process of asking complex questions.
>
> Heavy users of OSM data typically download the raw data and import it into their own systems, tailored for their
> individual use cases, such as map rendering, driving directions, or general analysis. Now that OSM data is available
> in the Apache ORC format on Amazon S3, it’s possible to query the data using Athena without even downloading it.

### [Introducing the New Fulcrum Editor](http://www.fulcrumapp.com/blog/introducing-the-new-editor/) 🔺

Personal plug here, this is something that’s been in the works for months. We just launched Editor, the completely overhauled data editing toolset in Fulcrum. I can’t wait for the follow up post to explain the nuts and bolts of how this is put together. The power and flexibility is truly amazing.

### [Real-time Drone Mapping with FieldScanner](https://blog.dronedeploy.com/introducing-fieldscanner-real-time-drone-mapping-is-here-9e8c350775ed) 🚁

The team at [DroneDeploy](https://www.dronedeploy.com/) just launched the first live aerial imagery product for drones. Pilots can now fly imagery and get a live, processed, mosaicked result right on a tablet immediately when their mission is completed. This is truly next level stuff for the burgeoning drone market:

>The poor connectivity and slow internet speeds that have long posed a challenge for mapping in remote areas don’t hamper Fieldscanner. Designed for use the fields, Fieldscanner can operate entirely offline, with no need for cellular or data coverage. Fieldscanner uses DroneDeploy’s existing automatic flight planning for DJI drones and adds local processing on the drone and mobile device to create a low-resolution Fieldscan as the drone is flying, instead of requiring you to process imagery into a map at a computer after the flight.
