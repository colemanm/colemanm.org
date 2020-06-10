---
layout: post
date: 2020-04-15 17:55:23
title: "Getting Comfortable with Roam"
description: "A dive into Roam Research and how it fits into my workflow so far."
img: /images/post-images/roam.jpg
categories: blog
tags:
- notes
- Roam
- thinking
- tools
---

[Roam Research](https://roamresearch.com/ "Roam Research") has been making the rounds on the internet in the last couple months. I've written a little bit here about it, but promised this longer overview of how it's working for me so far.

### What is it?

Roam is a tool for note-taking, described as a tool for "networked thought." With a [glance on Twitter](https://twitter.com/search?q=roam%20research "#roamresearch") you'll find all sorts of comparison pieces to Evernote, Google Docs, or Notion. I've tried all of those (Notion for quite a bit) and I find the experience of using Roam completely different.

{% include image.html file="roam.jpg" description="Roam Research" caption="no" %}

Most applications for notes are both _modal_ and _hierarchical_. When working on a text document, it lives in a folder with other related files. A half page of notes from a meeting has a specific place it should go. But because you don't always want to deal with filing things logically, it's easy to end up with thoughts and ideas out of place, caught up and buried in meeting notes because that's what you had open when a thought popped into your head (or even worse, arbitrary quick captured scratch docs you open once and are promptly disconnected from everything).

Roam solves this problem by destroying the top-down hierarchy of knowledge management tools. Instead of worrying about where to put a new document (Roam calls them "pages"), you just make a new one anywhere. All pages are peers. It's like a wiki in that way, but it feels more fluid, more natural and less mechanical. Making new pages is a matter of double-bracketing any word or phrase. With a quick piece of formatting which Roam autocompletes, `[[Knowledge Management]]` gets its own page, from which I can view the other Linked References. The Linked Reference is the secret weapon, a killer idea well-executed in Roam's simplistic but blazing fast interface. Each page also detects and shows "Unlinked" references, places where a string appears without an explicit link.

I described it to someone through analogy to a CRM. Roam is a CRM for ideas: call it "Idea Relationship Management."  Since I've been using it as a sort of productivity journal (Tiago Forte calls this the "[second brain](https://www.buildingasecondbrain.com/ "Building a Second Brain)"), living in it the whole work day. It's like an operating system for managing information — always on, always absorbing new data. And, like a real brain, linked reference synapses form between the information neurons.

### The Graph

The idea graph is what breaks you free of organizational burden. The need to find where to put thinsg, once a point of friction in note-taking (that is, if you ever wanted to be able to find a piece of jotted information again) is gone, replaced by a new way to navigate your knowledge graph via organically produced links.

{% include image.html file="roam-graph.jpg" description="My Roam database graph" caption="no" %}

Here's a scenario that happens _all the time_ to me (and I'm sure others) that no other tool has handled well until now:

I walk into a product marketing meeting. During the meeting we're going to solidify our messaging strategy and requirements for a new feature launch. I open up a new file for the meeting `Product marketing sync — 2020-04-13` or similar is a typical nomenclature. That file likely contains bullets and a series of messy individual lines related to things each person is going to do, topics people mentioned, action items for myself (which need to go elsewhere to have a prayer of being remembered). However, interspersed within the discussion I jot random thoughts on sometimes semi-related topics, but sometimes something completely off the reservation, that I still want to capture. During the marketing discussion I get an idea for a future blog post with a couple of topics. Where does that go?

Most commonly today the answer is "nowhere" and I'm lucky if I remember it again. In Roam I just type it in a "Random" subsection in the bottom of my meeting notes. Who cares where it goes if I can link that by topic from elsewhere?

_**A quick tip**: next to any random, non-sequitur thought like this, put `#idea` next to it. That then becomes its own page, with Linked References collecting up all the ideas dispersed through your graph._

I love that I can navigate to an abstract idea, like my page about "Antifragility," and find all of the articles, books, or other notes that connected with that idea. The ROI happens with Roam once you start rediscovering links or ideas you already noted without making the connection beforehand. It's like stitching together threads that would have been previously in silos, invisible to one another. If you then also separate those notes in time, its nigh impossible to keep those connections front of mind. I haven't been using Roam very long yet, but even in a few weeks I stumble back onto notes I wrote that I don't remember writing.

Information falls out of your head and into your Roam database spontaneously organizing itself, expanding organically. After heavy use for a few weeks, navigating through the database feels like descending into your own Wikipedia rabbit hole — like swimming through your previous thoughts.

### Use Cases

I find myself taking notes on all sorts of things I never used to, or at least rarely did. Here are a few:

* Books (I did do this before, but very intermittently and selectively)
* Articles
* Podcasts
* YouTube videos
* Meetings, 1:1s, and other work conversations
* Useful reference info for around the house (measurements of spaces, home inventory, and more)
* CRM-style notes on people (more on this in a second)

Most of that I've never kept running notes for, but Roam makes it actually fun to make notes on all of these things. Since I put date tags on a lot of my notes files (if relevant), notching back through the days shows Linked References to things I was working on those days.

For people, any time I have a call or meeting I'll include a "People" line with links on all their names. Likewise for any mention of them in other pages. Then navigating to a person shows those LRs to all the relevant notes, ideas, conversations, often linked from Daily Notes, so there's a visible timeline to the references. It's the closest thing I've seen yet to the mythical [personal](https://twitter.com/rrhoover/status/820335434018353152 "Ryan Hoover on Twitter") [CRM](https://www.producthunt.com/ask/228-what-is-the-best-personal-crm "Personal CRM on Product Hunt") I've seen reference to.

### Daily Notes

A knowledge graph needs some form of interface to navigate around it. Without the top-down hierarchy of a file tree, the root page of a structureless content database would typically feature search as an entry point for navigation. Roam does have an excellent page search, but it has another anchor that I love: **Daily Notes**. Each day Roam automatically creates a new date-stamped page for that day, which is the default main page when you open the app. What's great about this for such a free form system is that you always have that anchor to link from. If you want a new page for a fleeting idea but are worried a new page will be disjointed from your universe of ideas, and don't want to search for another page that idea might fit, just spawn it off of Daily Notes. Make a "Random" or "Ideas" section for the day and add it. I've been using this technique for quick stuff and it serves a couple of useful purposes:

1. Daily Notes functions for me like a productivity journal, a rough record of what I was doing, working on, or thinking about that day.
2. If a random idea links from a Daily Note and then contains a few bullets of thoughts, navigating back to it weeks later always has a fallback method of tracking back through previous days' notes to find it.

An added cool thing here, thanks to Linked Reference backlinks, is that any page in which you insert today's date shows up as a LR under that day.

What I notice in regular usage of Roam, with Daily Notes as the "home screen" of the tool, is thought taking on an organic structure. The links grow and the dots connect as you're working. Going and forming connections or describing the organization of your thoughts never need be done with intent — it's all implied as you're writing.

In the month that I've been actively using it, I have Roam open on my second display all day, with notes continually flowing into the database as they happen. In all the other note-taking tools and systems I've used in the past, the friction for tracking ideas was never this low.

### TODOs

Any line can be converted into a to-do with a checkbox, which then appears in a special `[[TODO]]` page that Roam automatically manages. It's super fast to toss things in there to remember later, regardless of page locations. I pin the TODO page into my sidebar for quick access. Cmd-enter on any line converts it into a to-do.

Since I'm a Todoist user for all of this before, I'm now waffling on which tool I should use for tasks. I'm still in both, but I can see some hope for eventually moving all of that into Roam since it's solving so many other things related to productivity management. The main struggle is that capture into a to-do list inbox (like what I do with Todoist) from mobile isn't great yet. Browsing to Roam on your phone takes you to a simple "Quick Capture" interface, which inserts blocks into a `#Quick Capture` section in your daily notes. This is great to have for the random passing thought to go somewhere, but as I've used it so far it still requires me to fold those into appropriate places I want them after the fact. Not bad for ideas, but I'd prefer something more devoted to true to-dos for that purpose.

_Another random tip: Questions dawn on me all the time I don't know the answer to, but want to remember to revisit. At the end of the line I'll just type a `#??` tag. Browsing to the `[[??]]` page then aggregates all the open questions. h/t to [Matthieu Bizien](https://twitter.com/Matthieu_Bizien/status/1245800698484330496 "?? tip") who simplified this for me._

### The #roamcult

Just search [that hashtag](https://twitter.com/hashtag/roamcult "#roamcult on Twitter") and you'll find a community of hundreds of super active, impassioned Roam users all out there evangelizing the product. In some ways, its spartan user interface, semi-opaque shortcuts and tricks about how it works promote cult-like adoption patterns. Its learning curve becomes a badge of honor for a certain type of user. Getting over the hump after a few days of heavy usage delivers a sense of satisfaction if you're able to tame it to do your bidding.

Some of the product limitations in terms of help and onboarding to expose its power-user features are a function of a small, focused team of a few with a lot to build. Right now it's a power-user tool designed by its intended users. With growth, they plan to expand their product design team which I'm sure will change this rapidly. But it does seem that they've embraced the product's opacity to promote the #roamcult. Hopping into the [public Slack](https://join.slack.com/t/roamresearch/shared_invite/enQtODg3NjIzODEwNDgwLTdhMjczMGYwN2YyNmMzMDcyZjViZDk0MTA2M2UxOGM5NTMxNDVhNDE1YWVkNTFjMGM4OTE3MTQ3MjEzNzE1MTA "Roam Slack") or looking at [videos](https://www.youtube.com/playlist?list=PLralmZwl_8jJuJMIebWFqm6K5I20a5Qve "Shu Omi's Roam videos") of how people use it on YouTube will give you an insight into how obsessed the early users are.

### More Reading

The [Roam white paper](https://roamresearch.com/#/app/help/page/Vu1MmjinS "Roam whitepaper") is an excellent resource, recommended to anyone curious about the product direction and the core ideas driving its development. Founder Conor White-Sullivan also has a number of video interviews on YouTube that I found super insightful to get a background on why the product works the way it does. He's also an interesting person in general, and a great [Twitter follow](https://twitter.com/Conaw "Conaw on Twitter").

Roam has clicked for me as the tool for notes I didn't know I needed. I'm still learning new ways of using it. It's fun how adaptive Roam is to change; the process of discovery of new ways of Knowledge Management is rewarding. I can just start formatting a new page however I want, and it doesn't damage the graph of interconnections.

I'm excited to see where the product goes as it continues to take off.
