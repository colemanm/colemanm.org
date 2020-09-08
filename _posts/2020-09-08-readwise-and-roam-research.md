---
layout: post
date: 2020-09-08 17:27:00
title: "Readwise and Roam Research"
description: "An overview of Readwise's new integration with Roam Research, to bring your Kindle highlights into your "
img: /images/post-images/readwise-to-roam.jpg
categories: blog
tags:
- Readwise
- Roam
- notes
- reading
- books
---

If I tracked my time spent in software tools, I'm pretty sure over the last 8 months [Roam](https://www.roamresearch.com/ "Roam Research") and [Readwise](https://readwise.io/ "Readwise") would be top of the list.

All of my writing, note-taking, idea logs, and (increasingly) to-dos happen now [in Roam](/post/getting-comfortable-with-roam/). Since getting serious with it around the beginning of the quarantine, I haven't used any other tool for writing things down.

I discovered [eadwise about a year ago and it quickly entered routine use. My backlog of meticulously-kept-but-underused Kindle highlights was immediately made valuable through [Readwise's daily reviews](/post/readwise-books-and-spaced-repetition/ "Readwise, Books, and Spaced Repetition"). The ability to have my highlights deliver recurring value (compound interest!) has made more both more compelled to read and definitely more compelled to highlight and make notes.

{% include image.html file="readwise-to-roam.jpg" description="Readwise to Roam integration" caption="no" %}

One of the favorite uses I've discovered for Roam is to make [literature notes](/post/literature-notes-for-the-library/ "Literature Notes for the Library") from books. I'll page back through a book after finishing it, review highlighted passages, and translate the key ideas and takeaways into a Roam note. The process takes a little time, but is well worth the effort for the resulting outcome. Paging back through usually turns into a light re-read or skim, not just reading the highlights but what also might be worth extracting _adjacent_ to highlights that I didn't include on the first read. I suppose this is similar to "[progressive summarization](https://fortelabs.co/blog/progressive-summarization-a-practical-technique-for-designing-discoverable-notes/ "Progressive Summarization")," but I'm not following a consistent process here, just doing what feels natural. When I recently went through _[How Innovation Works](/books/ridley-how-innovation-works/ "How Innovation Works")_ to build notes, it took 2-3 hours to translate the highlights into literature note form in my Roam graph. Then perhaps another 30 minutes to an hour to skim back over the notes to clean them up and add links to other pages.

### Combining it all

All of these tools and processes make for a powerful system of study. Extracting and linking ideas between sources is fascinating so far as a means for concretely visualizing how ideas bridge between authors. And most importantly, it gives you a resource to mine for remixing source material into your own novel ideas.

A few weeks ago I got early access to Readwise's latest big feature: [direct integration with Roam](https://twitter.com/readwiseio/status/1302751733484060673 "Readwise's Roam announcement"). Even in beta after only a few weeks of usage, it's been an _amazing_ addition to this workflow. Let's dive into how it works.

### Readwise ⭢ Roam

First of all, it's great that this feature works with highlights from any object type. Books, articles, podcasts, and Twitter threads can all be included in your Roam sync, giving more power to Roam as a system-of-record for collected knowledge.

When you set up the sync the first time, you can select item by item what you want to sync into Roam. If you want something to resurface in Readwise, but don't need or want it in Roam, you can exclude things to your liking. Since it's in beta, I've been selectively pulling in a few at a time each day just to go through them and see how they look on the Roam side (more on this step in a minute).

{% include image-partial.html file="readwise-roam-note-sample.jpg" description="Highlights example page in Roam" width="600" %}

Once your highlights are pushed over into Roam, Readwise publishes a new page with `(highlights)` appended to the name, and includes a few metadata elements at the top that you can customize to your liking in the sync configuration. One of my favorite things is how it appends highlights under a new block named "Highlights synced by Readwise [[September 9th, 2020]]", which cleverly functions both as a historical record of when the highlights came in inside the page, but also shows up in your Daily Notes as a sort of log of your daily reading activity.

Over the past few weeks the Readwise team has already made some additions to the syncing options, including the ability to customize the metadata it uses (using Roam [attributes](https://www.reddit.com/r/RoamResearch/comments/f61zea/how_to_use_attributes/ "How to use Roam attributes"), the `::` method). The defaults have worked fine for me, but it's good to have this ability for future tweaks to the PKM process. It'll also include links to the highlight location, which (in the case of Kindle) deep-link to the location in the Kindle app, or with podcasts (from [Airr](/post/airr/ "Airr")) to the AirrQuote you saved.

{% include image-partial.html file="readwise-roam-dn-sample.jpg" description="Readwise logs in Daily Notes" width="600" %}

Another addition to this workflow I've been tinkering with is how to integrate these into the rest of my Roam knowledge graph. Every couple of days I've been scrolling back through each page of synced highlights and annotating them with bi-directional links to key terms, ideas, or other pages — basically stitching them in with other content already in my Roam graph. Over time as I look back at previous [evergreen notes](/post/a-system-for-publishing-evergreen-notes/ "A System for Publishing Evergreen Notes") or when I'm writing new pages, this will provide references at-hand for incorporating into new material in the knowledge graph. This has all the workings of a set of simple tools designed to do what Sönke Ahrens talked about at length in _[How to Take Smart Notes](/books/ahrens-how-to-take-smart-notes/ "How to Take Smart Notes")_. Roam, Readwise, and Instapaper are working together to provide a slipstream for knowledge to enter the database, but in a living, breathing way (not just dumping notes into the archive).

The feature just publicly launched this week to all Readwise users, so it's still early. But so far this is an excellent addition to an already-excellent set of tools for personal knowledge management.
