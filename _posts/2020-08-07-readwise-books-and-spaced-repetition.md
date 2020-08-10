---
layout: post
date: 2020-08-07 16:34:57
title: "Readwise, Books, and Spaced Repetition"
description: "A review of Readwise and how it'll help you get more out of the books you read."
img: /images/post-images/spaced-repetition.jpg
categories: blog
tags:
- reading
- books
- tools
- productivity
- research
- learning
---

In his piece "[Why Books Don't Work](https://andymatuschak.org/books/ "Why Books Don't Work")," [Andy Matuschak](https://twitter.com/andy_matuschak "Andy Matuschak on Twitter") made a strong case that books are a poor medium for knowledge transfer. Even with the most advanced book experiences today (like digital ebook downloads to a Kindle), if you took away the digital e-ink screen, a reader from the 16th century would still recognize books as no different than what they had. We've added digital on-demand access, dictionary lookups, and the ability to have a library in your pocket[^pocketlibrary], but the fundamental model for conveying the knowledge is still what Gutenberg would recognize, based on the "transmissionism" mode of teaching.

{% include image.html file="spaced-repetition.jpg" description="Spaced repetition" caption="no" %}

Matuschak quotes this great passage from Carl Sagan in _[Cosmos](/books/sagan-cosmos/ "Carl Sagan's Cosmos")_:

> What an astonishing thing a book is. It’s a flat object made from a tree with flexible parts on which are imprinted lots of funny dark squiggles. But one glance at it and you’re inside the mind of another person, maybe somebody dead for thousands of years. Across the millennia, an author is speaking clearly and silently inside your head, directly to you. Writing is perhaps the greatest of human inventions, binding together people who never knew each other, citizens of distant epochs. Books break the shackles of time. A book is proof that humans are capable of working magic.

Knowledge is transmitted, as if by magic, across the decades and centuries. This makes it all-the-more unfortunate how bad our brains are at retaining all that information. We have a mechanism for cheap, reliable knowledge transfer, yet are still bad at _hanging onto_ that knowledge.

One can also be reading books for enjoyment. The act of reading itself can be fun, even if the signal strength of retention is less than perfect. Fiction is like this, of course, where the primary goal is entertainment, not education. Not that there's no wisdom embedded in fiction — in fact, I would make a case that fiction offers deep insights worthy of remembering[^scifi]. But I even see nonfiction works on my shelf that I remember enjoying years ago that I've mostly forgotten about, certainly in any conscious way that's useful to me.

The defining purpose of nonfiction, though, is to educate, to convey ideas in a way that disseminates them to a wide audience and allows wisdom to compound over years by connecting dots in readers' minds. Writers spend hundreds of hours distilling their ideas into works of a few hundred pages that we blaze through in a couple of weeks, retaining little.

### Spaced repetition

Purely linear transmission is not the best model for understanding, but it's the best that we have available to us today, cheaply and readily accessible. People like Andy Matuschak and his collaborator [Michael Nielsen](https://twitter.com/michael_nielsen "Michael Nielsen") are busy behind the scenes [working on this problem](https://numinous.productions/ttft/ "Transformative Tools for Thought") of how to build tools for thought that can harness the novel advantages of today's technology. They experimented with this idea in their [quantum.country](https://quantum.country/qcvc "Quantum Country") project, using the complex subject of quantum computing combined with a "mnemonic medium" that integrated spaced repetition testing. The [results](https://numinous.productions/ttft/#early-impact "QC Impact") they've shown from this experiment are promising evidence for the technique to increase retention. It's a simple approach — interspersing simple questions within the text — but the problem is one of medium. Our existing reading and teaching tools don't have affordances for this today.

Until we make headway in those new areas, what can we do to get more out of reading? How can we extract and retain the right ideas from what we read without having to reinvent the nature of books themselves?

### Enter Readwise

One of the most useful tools I've discovered in the past year is [Readwise](https://readwise.io/ "Readwise"), a service that's working to solve this problem and enhance reading retention through a simple workflow:

* Readwise syncs your highlighted passages from Kindle, web articles, and even tweets
* See a sampling of those highlights in your inbox each day for review, through email or their mobile app (what they call your "Daily Readwise")
* Highlights are selected randomly from your archive, and can be resurfaced with whatever regularity you prefer

It's such a simple idea that, like all great innovations, makes the most of the pre-existing infrastructure around it. The goal is to help readers retain what they read. I love it because of how simple it is. Readers like me aren't looking for something scientific or complex; even an incremental improvement in reading comprehension and recall is enough to enhance the overall nonfiction reading experience.

Because I read so much and highlight copiously, my Readwise has over a hundred books, each with dozens (if not hundreds) of highlighted passages. At last check I have around 5,000 highlights in the archive. As they come through in each day's review, I regularly get to see things I highlighted years ago from books I sometimes barely remember reading. There have been numerous times where a passage has spurred me to go and re-download the book on my Kindle and skim back through. This trigger is exactly what I want out of a service like this: a reason to be more diligent in reading practice, highlighting, and regular review. Just in the past year or so of using it, I've been able to dredge quite a bit of fleeting knowledge back up into memory. Without a service like Readwise (even with highlighting), it's highly unlikely I'd ever remember much more than a two-sentence synopsis of most books in my library.

Readwise follows a spaced repetition model for increasing recall. True spaced repetition systems use specific algorithms to extend the time between recall tests (like the [Leitner system](https://en.wikipedia.org/wiki/Leitner_system "Leitner system")). For example, you might first get quizzed on an item a day after first being shown it, and if your answer is correct, then you'll be asked again in 5 days, 10 days, et cetera. The correct/incorrect answer provides a feedback loop to the algorithm to best estimate the spacing for resurfacing it again.

### Tuning your reviews

Since not all the books in your archive are of equal importance to you, you can tweak the frequency that highlights are resurfaced on a per-book basis. I only have a couple in my library that I've turned down. Usually the quantity of highlights in a book is a good proxy for how interested I am in retaining info from it, so books with very few highlights are already less likely to appear in the daily batch. You can also dial in the preferences for new versus old books. You can have it favor more recent reads to review information while the reading is fresh, or favor pulling up more items from farther back in time.

{% include image.html file="readwise-tuning.gif" description="Tuning your Readwise reviews" caption="no" %}

### Integrations

The most commonly used integration is probably their Kindle sync service. It's certainly the most high-volume for me. But in addition Readwise can sync from iBooks, and even has a slick camera-based OCR tool for clipping sections from physical books[^ocr]. You can also pull in highlights articles through Pocket and Instapaper, and even save [tweets or threads](https://twitter.com/readwiseio/status/1284283488833855496 "Readwise Twitter integration") to include in your reviews. They've also got a super slick [integration with Notion](https://help.readwise.io/article/46-how-does-the-readwise-to-notion-export-integration-work "Readwise and Notion"), if that's something you're interested in.

### Active recall

A key feature related to the native concept of spaced repetition is Mastery mode, which allows you to generate flashcard-like questions from specific highlights.  On each highlight shown in review, you can add it to your Mastery catalog, either generating a question & answer flashcard or a fill-in-the-blank version of the quote (a technique known as [cloze deletion](https://en.wikipedia.org/wiki/Cloze_test "Cloze test")). I only do this for concrete statistics and facts that I find notable enough to want to remember. Depending on the types of works you read most frequently, though, this could be incredibly helpful, especially for content like digital textbooks.

In my now-hundreds of Daily Readwise reviews, there have been countless times that a highlight pulled up from the archives has prompted a thought or idea that I jotted down in my notes. Occasionally they've even spurred such deep thinking (usually because I see it in a moment of _already thinking_ about a similar idea) that I haul off and write a blog post from it. This for me is the one of Readwise's core values. Since [writing is a medium for learning](/books/ahrens-how-to-take-smart-notes/ "How to Take Smart Notes"), a tool in the belt that helps you synthesize ideas for writing is a powerful one.

Readwise has been in everyday usage around here. I recently had a 110 day streak that I broke a week ago, but still I make it a point to pop it open every day when I get the morning push alert and flip through the clips it assembles.

### Future Ideas

One unsolved (and maybe _unsolvable_) area is a way to address audiobooks. Certainly the technologies exist to do playback, capture, and speech-to-text transcription, but it's a question of integrating these all together in a system that would work. [Audible](https://www.audible.com/ "Audible") is the largest player by far, but it generally has poor support for integrations of any type, and also generally innovates at a snail's pace. I'm not familiar with other audiobook players, but maybe one day there'll be a way for a new entrant to encroach on Amazon's monopoly in this space.

For podcasts there's a new player called [Airr](/post/airr/ "Airr") that's doing something interesting with this, using a feature they call "AirrQuotes." It allows you to clip a segment of audio from a podcast, along with the text transcript to send to another app. I could see a future integration here where you could have podcast clips automatically transcribed and added to your Readwise archive. _(Update: Airr integration is [now live](https://twitter.com/readwiseio/status/1292899538085314566 "Readwise + Airr") within the Airr app, like they're reading my mind)_

I've added [a post-processing step](/post/literature-notes-for-the-library/ "Literature Notes for the Library") to my reading to collect the noteworthy ideas, forcing myself to write a concise summary and bulleted list of the salient takeaways that resonated. I've done this now with my last few books and it's been a fantastic way to parse through the content a second time — sort of like the first "active recall" review. This extra passthrough to aggregate thoughts into [a system](/post/the-zettelkasten-method/ "The Zettelkasten Method") helps drive [compound interest](https://twitter.com/Conaw/status/1221911491885989888 "@Conaw on compound interest") on the ideas.

It's rare for new productivity tools to stick with me this long. All of the tools in my daily routines are ones I've relied on regularly, and it takes a while for new ones to really click. Readwise clicked for me early and earned its staying power right away. If you're an avid reader, you'll love it.

[^pocketlibrary]: Okay, let's be honest: this is a phenomenal innovation.
[^scifi]: Science fiction especially isn't just my favorite fiction genre for entertainment value, I also believe there's a lot to be learned about invention, creativity, human behavior, psychology, and more from good speculative works. Check out Dan Wang's [comments on this topic](https://danwang.co/definite-optimism-as-human-capital/ "Definite Optimism as Human Capital").
[^ocr]: I've been using this a lot lately and it's fantastic. Works great for any books you can't (or don't want to) read in e-reader format.
