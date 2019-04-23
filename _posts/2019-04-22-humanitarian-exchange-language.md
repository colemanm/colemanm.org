---
layout: link
date: 2019-04-22
title: "Humanitarian Exchange Language"
target: http://hxlstandard.org/
description: "The HXL standard allows for uniform exchange of humanitarian datasets."
categories: blog
tags:
- open data
- humanitarian
- standards

links:
- url: http://hxlstandard.org/
  title: "Humanitarian Exchange Language"
---

Last week I learned about HXL, a "data markup" standard to help humanitarian orgs more easily share and combine datasets. Datasets from different producers or agencies may actually contain the same type of data — admin boundary codes, population counts, geolocations — but with nonstandard column headings. Merging and combining datasets like this means breaking out the metadata documents (if they exist), renaming columns, and ETLing the data into a usable form. The HXL standard means an agency can insert an extra row with a hashtag-like identifier for what's in that column. So things like:

- #adm1 +code
- #loc +name
- #population

Each of these has a consistent definition, so authorities providing data can make sure their stuff aligns with a preexisting standard for interoperability. Agencies like the IOM, USAID, and Red Cross are already supporting it. I'm interested to see what we can do here with [Fulcrum Community](https://www.fulcrumapp.com/community/).
