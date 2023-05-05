---
layout: post
date: 2023-05-04 15:46:35
title: "Minifying Images on the Command Line"
description: "Using TinyPNG's API to shrink image files."
img: /images/post-images/
categories: blog
tags:
- images
- command line
- code
---

When I put images on this blog, I try and manage down the file sizes so browsers aren't having to load multi-megabyte images for no reason. Since I use Jekyll and a very simple setup of static files with minimal processing tools, I need to do this manually. For years when I wanted to optimize an image file quickly, I'd upload to [TinyPNG](https://tinypng.com/ "TinyPNG") and redownload the shrunken version. Super simple.

But I wanted a way to do this on the command line rapidly, and to be able to write scripts to batch process images if I need to (which I commonly do for images in my Library section).

We're in luck because TinyPNG has a free API for this. If you're just doing a few images here and there, the limits are generous enough to be plenty. Start by going to their [Developers page](https://tinypng.com/developers "TinyPNG Developers"), create an account, and sign into it. Then head to the API keys page and generate yourself a new one.

Once you've got that setup, now you'll need the [`tinypng-cli`](https://www.npmjs.com/package/tinypng-cli "tinypng-cli on npm") tool from npm (it's [open source](https://github.com/websperts/tinypng-cli "tinypng-cli")).

You'll need nodejs installed for this, which you can [download](https://nodejs.org/en/download "nodejs download") or install from a package manager [like Homebrew](https://formulae.brew.sh/formula/node "Homebrew node").

Once downloaded, get yourself the CLI:

```bash
npm install -g tinypng-cli
```

With everything set up, shrinking an image is now a piece of cake:

```bash
tinypng example.png -k YOUR_API_KEY
```

I then took this a step further and made myself a one word shortcut using a function I've added to my shell profile (see here for more on updating your shell profile — I use `zsh`):

```bash
function tiny {
  tinypng $1 -r -k YOUR_API_KEY
}
```

Now a simple command like this shrinks my image:

```bash
tiny example.png
```

I've also built a simple script template in Ruby to batch convert the JPEGs in a single directory. It'll process any images inside its director and put them in a `resized/` subdirectory:

```rb
#!/usr/bin/env ruby

Dir.glob(["*.jpg","*.jpeg"]) { |f|
  filename = File.basename(f, ".*")
  puts "Minifying #{filename}..."
  `tiny resized/#{filename}.jpg`
  puts "Minify complete."
}
```
