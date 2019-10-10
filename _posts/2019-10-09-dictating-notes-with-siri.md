---
layout: post
date: 2019-10-09 22:11:40
title: "Dictating Notes with Siri"
description: "Using Siri Shortcuts, dictation, and Zapier for keeping a notes scratchpad."
categories: blog
tags:
- howto
- technology
- writing
---

I’ve been looking for a smooth way to dictate notes and thoughts while hands-free from my phone, particularly while running or driving.

When I run I typically wear one AirPod and have my phone inaccessible in a waistband pouch on my back. Since I’m usually listening to audiobooks while running, I don’t have an easy way to log thoughts or perform the audio equivalent of highlighting things.

I never use Siri at all but for a couple of easy, reliable Shortcuts for dictation. I thought this was a perfect candidate to explore the “Hey Siri” activation support with custom commands from the Shortcuts app (formerly [Workflow](https://www.fulcrumapp.com/blog/ios-automation-with-workflow/ "Workflow")).

[This shortcut](https://www.icloud.com/shortcuts/bd095fee3a984e419a1b22492d2d382c "Dictate to Notes") from MacStories provides a simple base for appending to a note in the Notes app. This is good, but for my use case I need to be able to do this _completely_ hands-off. Using Shortcuts to capture and send workflow data around typically requires access to the app, forcing the device to be unlocked for it to work. This still could be convenient enough for, say, dictations in the car where the phone is in its mount or nearby, but in my waist pouch it’s totally inaccessible. I don’t want to have to mess with anything at all while I’m in motion running, so I needed something else.

So I logged into [Zapier](https://zapier.com/ "Zapier") to see what I could do with its [webhook trigger](https://zapier.com/page/webhooks/ "Zapier Webhooks"). If you send data to Zapier, they make it easy to connect to hundreds of different web services using custom multi-step workflows. Mine was going to be simple: dictate note → append text to a Google Doc.

I created a document called “Scratchpad” in my G Suite account to house any speech dictations. All I want is a temporary placeholder where I can record thoughts to get back to later. Each new dictated note appends a new line with the content. I use a workflow like this to [add tasks in Todoist](/post/using-todoist/ "Using Todoist"), but I needed something looser and more flexible.

### Create the Zap

On the Zapier side, I created a zap with a webhook trigger first. This gives you a URL to copy and bring over into the Shortcuts app.

### Create the Shortcut

Create a new Shortcut with these three steps:

* **Dictate text** — to capture the speech-to-text data
* **URL** — to set the base URL for the Zapier webhook (copied from your zap)
* **Get Contents of URL** — this is what assembles the data into a POST request to the webhook endpoint

The only things you need to do here are paste in the zap URL, set it to the `POST` method, and edit the “Request Body” property. I added a `note` property and inserted the value of `Dictated Text` which will pass in that transcription from your dictation. 

{% include image.html file="shortcuts-dictation.jpg" description="Shortcuts dictation" caption="no" %}

### Setup the Zap

Once that’s done, creating the zap on the Zapier side is only two steps: a webhook trigger:

{% include image.html file="dictation-zap-step1.jpg" description="Zapier dictation step 1" caption="no" %}

And an “Append to Document” action event with Google Docs:

{% include image.html file="dictation-zap-step2.jpg" description="Zapier dictation step 2" caption="no" %}

I’ve been using this for a couple of days for ad-hoc comments while listening to books. It’s been a convenient way so far to quickly jot things down like I do when I’m reading paperbacks or Kindle. The only downside is that Siri mis-hears things _a lot_ compared to the Google Assistant, which we use a good bit around the house. The dictation is usually passable, since it’s informal and usually close enough that when I review the notes, I recall what I was trying to say and can correct it. If I ever end up with a backlog of notes in there without being reviewed, the error rate on dictation will probably leave me stumped.
