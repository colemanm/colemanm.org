---
layout: post
date: 2024-08-01 17:31:47
title: "Walking and Talking"
description: "Thinking through dictating your ideas."
img: /images/post-images/dictaphone.jpg
categories: blog
tags:
- thinking
- writing
---

I've been looking for a way to use outdoor time as a spur for creativity. Many of us do our best thinking when our brains and bodies are otherwise occupied — we even call them "shower thoughts" for a reason. Running and walking for me are incredibly productive for the generative part of my brain. I've come up with and connected more dots while running than ever when sitting at the keyboard.

Sometimes I'll walk with phone in hand, usually reading in the Kindle app, but also burning time on social feeds. Depending on what I'm reading I'll even bring a physical book on walks, as long as I can read one-handed. But then I started going with nothing, just a walk with my eyes, ears, and mind to keep me company. And, as is always the case when the mind has nothing to distract it, the brain is racing with thoughts and ideas and things I need to do and stuff I want to look up when I get back home. But there's no way to write anything down — fleeting thoughts fleet right out of my head.

So a couple months back I bought a dictaphone. It seemed silly at the time, but I thought "what the hell, I'll try it".

{% include image.html file="dictaphone.jpg" description="Sony voice recorder" caption="no" %}

Instead of the temptations of my iPhone and the internet in my pocket, I can "take notes", but they have to be free-form, spoken word. There are voice
recorders out there with wifi, [AI](https://www.plaud.ai/ "Plaud.ai"), transcription. But all of this is irritating ornamentation to me. I wanted the
lowest-tech, least-friction method I could find. Hit record, get mp3 file.

And yes, this means I have an audio file with messy, disorganized thoughts. But so what? I can easily speech-to-text it into the computer (more on that in a minute), and regardless, a driving factor here is to get out of my brain's way. Half the benefit is the "unlocking" effect I get of the no-frills, no-barriers talking out loud. Who cares if I say something that makes no sense? Part of the objective here is to kickstart the mental pistons, get through the messy disorganized thoughts, and find the good stuff.

For me, thinking is modal. Sometimes I need a kick to switch my brain from "consuming" to "producing" mode.

Speaking your thoughts out loud doesn't come naturally to me. Probably not to many people who aren't daily podcasters or radio hosts. Having only done this for a little while, it takes practice to speak coherently off-the-cuff into a microphone.

But the improvisational aspect of dictating is one of the most interesting to me. I find myself 20 minutes into a spontaneous stream-of-consciousness, and along the way encountering 5 tangents of other ideas I didn't even start out riffing on. It's a fruitful method for getting these latent ideas in my head to crystallize into something tangible. I'll fork off on some tangent, then the act of thinking, processing, and trying to articulate out lout helps organize the mess into cohesive thoughts.

These audio files aren't publishable, but maybe one day they might be with practice.

All I've been doing after recording is copying the file off the device to my computer, and running a simple command line tool to convert to text locally.

I found this open source tool called [hear](https://github.com/sveinbjornt/hear "hear"), which acts as sort of the inverse of the native macOS command `say`. It uses the OS's built-in speech recognition APIs to convert mp3 to a simple text file:

`hear -d -i voice-note.mp3 > text-note.txt`

It's not as fancy as the online tools like [Rev](https://www.rev.com/ "Rev") or [Otter](https://otter.ai/ "Otter.ai"), but I like it this way. The bulk of the text is a mess of jumbled thoughts with fragments of useful interestingness I can clip out.

Offline, audible thinking is a helpful tool so far. I'll keep going with it and see how it evolves.
