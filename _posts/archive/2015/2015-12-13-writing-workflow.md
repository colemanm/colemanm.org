---
layout: post
date: 2015-12-13
title: "Writing Workflow"
categories: blog
tags:
- productivity
- writing
---

I write a ton on the computer, whether it's for our [product blog](https://www.fulcrumapp.com/blog), internal documents, product [help guides](https://www.fulcrumapp.com/help), this blog (rarely), or many other things, I tend to stick to the same set of tools for different pieces of my writing workflow.

Everything I write, even things like meeting notes only for myself, I write in [Markdown](https://en.wikipedia.org/wiki/Markdown). It's essentially muscle memory at this point. I write for [Jekyll](http://jekyllrb.com/)-based websites quite a bit, I write issues and wiki pages on GitHub, I keep my personal journal in [Day One](http://dayoneapp.com/), and several other places. All of them accept Markdown as input, so I've just formed a habit over the years where I write everything that way. So when I paste an unordered list from a note I made somewhere into a web document, it's already formatted. If the destination for a block of content I wrote doesn't work with Markdown, most tools have a "copy plain text" option that I'll use if I want the raw words to format inside of another application (_*cough*_ Microsoft Word _*cough*_).

Anyway, onto the geeky stuff...

## Tools, we all love tools

I try tons of new tools all the time, and I've converted through different tools over the years. About 90% of writing is thinking, so being able to flexibly organize thoughts without fighting with tools is paramount to productive writing. Remember that the tools _don't make you write_. I try to prevent myself from getting distracted with whatever the new "app of the week" is for text editing, and while having the proper tools is important, if your process ain't broke, don't fix it. Just like with todo lists, code editors, and online courses, another tool in the belt doesn't make you a better producer... _producing_ makes you a better producer[^b2w25]. If you're like me, it's worth posting that above your desk to keep from fiddling with tools and systems and get to work. If you're doing anything other than typing the words on the page, the tool isn't going to help you make more letters appear! _(I write that as a reminder to myself as much as anyone else.)_

Now, with that said, here's the short list of apps I use for writing, and for what purpose I use each depending on context:

* **[nvALT](http://brettterpstra.com/projects/nvalt/)**: This is the everyday workhorse. Since I write _everything_ in plain text files, this editor from [Brett Terpstra](https://twitter.com/ttscoff) is my go-to for fast access to making new files. It's typically the initial scratch pad while I'm on my Mac. If I jump on a phone call, I pop open nvALT and create a new text file to log notes. With quick keyboard shortcuts, every time I make a file it just appears in my `txt` directory in Dropbox, which other apps (including mobile ones) can have access to. It's an unfancy writing tool for longform stuff, but the key is that there's minimal friction between thought or idea and it being instantly captured in a reliable place.
* **[Byword](http://bywordapp.com/)**: Used for longer-form editing, basically once something reaches the stage of an official piece of content like an article or guide, more than lists or scratch notes. It's got a great interface for writing in Markdown, and a built-in preview mode for seeing the content rendered as HTML. Stuff that will end up on the web as articles usually happens here.
* **[Atom](https://atom.io/)**: I use Atom for editing things that involve code, or are typically intertwined with code like HTML or CSS. When I'm writing documentation for Fulcrum or contributing to other projects on GitHub, I use Atom.
* **Paper, the IRL kind**: If I don't have access to my computer, I don't feel like typing, or I want to make sketches, I keep [field notes](http://fieldnotesbrand.com/) around for pen and paper notes.

## iOS apps, where writing is typically harder

Longform content doesn't usually happen much on iOS for me, unless the motivation strikes me to get my thoughts on paper and I'm not at my computer. Mostly from iOS I'm keeping notes or jotting things down.

* **[Drafts](http://agiletortoise.com/drafts/)**: What nvALT does on my desktop, Drafts does on my phone. Since most of the time from mobile I'm starting with a _new file_ versus editing something in progress, Drafts is super fast for jumping right into a text edit mode to type out some quick notes. Where Drafts really comes into its own, though, are in its Actions capabilities. The idea is that anything starting as a piece of text can be fed into an Action within Drafts to pipe it into any of dozens of other places. Getting to know what's possible in Drafts is [a separate post](/post/drafts/) in and of itself, but needless to say, it's where I do probably 90% of my text typing on iOS.
* **[Editorial](http://omz-software.com/editorial/)**: I've just discovered this app recently after reading Federico Viticci's [stunningly in-depth review](https://www.macstories.net/stories/editorial-for-ipad-review/), and so far it's a promising addition to the writing process from iOS. I've never been a heavy iPad user, but I've been debating jumping back into the iPad world again, particularly for working on something at home on the weekend, traveling, or otherwise mobile without my laptop. This app is ridiculously complex and powerful, and I've only started to scratch the surface.

Many people like Evernote and other cloud-based services for dealing with notes, but I like the idea of the archive of text I've produced since about 2009 all lives in plain files in a folder &mdash; completely portable, easy to back up, and generally friendly to copy or import into other places for publishing. I don't need separate notebooks or embedded attachments or tagging on my files to get in the way, I just want an editor and the canvas for text. All of the tools I mentioned above have excellent full text searching capabilities, and after 6 years of managing all of my notes this way, search has never failed me for finding what I need.

One thing that my personal workflow doesn't support directly (or at least I haven't found a way) is on-the-fly collaborative editing. Most of the content I write is for myself, or at least doesn't need to have other editors for most of its existence until it's ready, but maybe there are tools out there I've not yet discovered. Currently for anything that needs to be collaborative from the get go I would use Google Docs, since it's unmatched when it comes to real-time simultaneous multiuser editing. Other than that, anything that happens for publishing via GitHub already can be collaborated on asynchronously using pull requests and commit references, which our team uses constantly.

If readers have any suggestions of other methods for augmenting things, particularly collaborative editing a la Google Docs, ping me on [Twitter](https://twitter.com/colemanm), I'd love to find more options to make my flow even better.

[^b2w25]: [This episode of Back to Work](http://5by5.tv/b2w/25) has an excellent discussion of the line between distraction and productivity when it comes to trying new tools.
