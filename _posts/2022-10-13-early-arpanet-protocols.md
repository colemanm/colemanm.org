---
layout: link
date: 2022-10-13 11:25:32
title: "Early ARPANET Protocols"
target: https://twobithistory.org/2021/03/08/arpanet-protocols.html
description: "A dive into ARPANET's protocol hierarchy."
categories: blog
tags:
- internet
- tech history
- ARPANET

links:
- url: https://twobithistory.org/2021/03/08/arpanet-protocols.html
  title: "How the ARPANET Protocols Worked"
  icon: 🖥
---

This was an [interesting post](https://twobithistory.org/2021/03/08/arpanet-protocols.html "ARPANET Protocols") with background on the design of the original ARPANET protocols, and the layering architecture developed by its creators.

The IMPs (Interface Message Processors) were the key to interconnecting original four ARPANET sites with a mechanism to allow message interchange between systems that couldn't speak the same language. They needed a "translator" to sit between each site's system and the other sites to convert messages into universally-interpretable formats. The entire architecture of ARPANET was an interesting proto-network architecture that's uniqueness (run by a single entity, BBN / ARPA) allowed it some rigidity in the root protocol design and hierarchy. As TCP/IP was being developed, it needed to support a "network of networks" (the Internet):

> The ARPANET protocols were all later supplanted by the TCP/IP protocols (with the exception of Telnet and FTP, which were easily adapted to run on top of TCP). Whereas the ARPANET protocols were all based on the assumption that the network was built and administered by a single entity (BBN), the TCP/IP protocol suite was designed for an *inter*-net, a network of networks where everything would be more fluid and unreliable. That led to some of the more immediately obvious differences between our modern protocol suite and the ARPANET protocols, such as how we now distinguish between a Network layer and a Transport layer. The Transport layer-like functionality that in the ARPANET was partly implemented by the IMPs is now the sole responsibility of the hosts at the network edge.
