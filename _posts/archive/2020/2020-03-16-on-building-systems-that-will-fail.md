---
layout: link
date: 2020-03-16 15:35:20
title: "On Building Systems That Will Fail"
target: https://dl.acm.org/doi/pdf/10.1145/114669.114686
description: "Fernando Corbato's 1990 talk about system complexity and the necessity for building in resilience."
img: /images/post-images/corbato-mit.jpg
categories: blog
tags:
- computers
- history
- Fernando Corbato
- papers

links:
- url: https://dl.acm.org/doi/pdf/10.1145/114669.114686
  title: "On Building Systems That Will Fail"
  icon: 📠

image_credit:
- creator: "MIT Museum"
  url: https://webmuseum.mit.edu/media.php?module=people&type=related&kv=6141&media=0
---

This is a presentation from [Fernando Corbató](https://en.wikipedia.org/wiki/Fernando_J._Corbato "Fernando Corbato") from the 1990 ACM Turing Award lectures. Corbató was one of the creators of both the [Compatible Time-Sharing System](https://en.wikipedia.org/wiki/Compatible_Time-Sharing_System "Compatible Time-Sharing System") (CTSS) at MIT and [Multics](https://en.wikipedia.org/wiki/Multics "Multics"), the operating system that influenced Unix.

{% include image.html file="corbato-mit.jpg" description="Fernando Corbató at MIT" %}

He describes the challenges in those programs with their novel approaches: you _always_ encounter failure states when pushing the edge. His takeaways in his experience building "ambitious systems":

> First, the evolution of technology supports a rich future for ambitious visions and dreams that will inevitably involve complex systems.
>
> Second, one must always try to learn from past mistakes, but at the same time be alert to the possibility that new circumstances require new solutions.
>
> And third, one must remember that ambitious systems demand a defensive philosophy of design and implementation. Or in other words, "Don't wonder if some mishap may happen, but rather ask what one will do about it when it does occur."

I love these stories from the early days of computers. Already the creators were encountering problems similar to those we still deal with today:

> One important consequence of developing CTSS was that for the first time users had persistent on-line storage of programs and data. Suddenly the issues of privacy, protection and backup of information had to be faced. Another byproduct of the development was that because we operated terminals via modems, remote operation became the norm. Also the new-found freedom of keeping information on-line in the central file system suddenly made it especially convenient for users to share and exchange information among themselves.
>
> And there were surprises too. To our dismay, users who had been enduring several hour waits between jobs run under batch processing, were suddenly restless when response times were more than a second. Moreover many of the simplifying assumptions that had allowed CTSS to be built so simply such as a one level file system, suddenly began to chafe. It seemed like the more we did, the more users wanted.

Boy, does that sound familiar!

_Here's [a version](https://dl.acm.org/doi/pdf/10.1145/114669.114686 "On building systems that will fail") from the MIT website with his slides included._
