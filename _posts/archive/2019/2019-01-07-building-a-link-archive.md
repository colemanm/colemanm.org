---
layout: post
date: 2019-01-07
title: "Building a Link Archive"
description: "How I created my link archive pages."
categories: blog
tags:
- personal
---

Since I started my [daily writing routine]({{ site.url }}/post/a-post-each-day/ "A Post Each Day") a few months ago, I’ve posted tons of links to interesting things. Sometimes I do “link posts” (like [this one]({{ site.url }}/post/topoview/ "topoView")), and I’ve been consistently doing my “Weekend Reading” series on Saturdays.

I wanted a way to catalog these links such that I could generate an archive page with a history of all of them.

With Jekyll there are always several ways to work up a solution to a problem. I decided to try out this method using a specifically-defined `links` array in the front matter of any post to drop a URL and title into a grouping that I can use to build a link archive page. Check out the [link archive here]({{ site.url }}/links "Link Archive").

### Front matter

In order to do this in a way that “just works” with the normal page generation, without requiring plugins or custom generator code, I’m using a special block in the front matter of posts. With this technique, any post (even random full articles with interesting links) can have a `links` array up top to include whatever links I want to.

I structure the links block like this:

```yaml
links:
- url: https://postlight.com/trackchanges/podcast/computing-is-everywhere
  title: "Bret Victor interview on Track Changes"
- url: https://caitlinhudon.com/2018/11/28/git-sql-together/
  title: "Git Your SQL Together"
- url: https://www.eurogamer.net/articles/2018-12-12-the-brilliance-of-video-game-maps
  title: "The Brilliance of Video Game Maps"
```

Each link has a `url` and `title` property which I use to build the links archive page.

### Link index page

To create the full link index, I loop over each post and collect the entries in the `links` array. Then use those parameters to create each row:

{% raw %}

```html
{% for post in site.posts %}
  {% for link in post.links %}
  <tr>
  <td><a href='{{ link.url }}'>{{ link.title }}</a></td>
  </tr>
  {% endfor %}
{% endfor %}
```

{% endraw %}

There’s room to improve this some, but I wanted something to get started with. This is a good start for keeping a chronological record of interesting things I’m reading over time.
