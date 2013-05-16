---
layout: post
date: 2013-04-24 00:15:02 EDT
title: "Symlinks + Dropbox Backups"
categories: blog
published: false
---

I use [Dropbox](http://dropbox.com/) as the nerve center for all of my digital goods, keeping data, configurations, histories, log files, and anything else I need access to centralized and available from my Mac or iOS devices.

Here are a few of my daily tools or information trails I want to keep synced up, so anything here can be a few clicks or a search away:

* Instant message chat history
* iTunes library
* Histories + logfiles
* OmniFocus backups

### Chat archiving

I use [Messages](http://en.wikipedia.org/wiki/Messages_(application)) on the desktop for all chat conversations with my Jabber and Gchat accounts. I access the transcript history daily to find things I told people in chat conversations, look up links I sent, and other things. So much of my communication happens via instant messaging that I rely on it to keep logs of interactions (albeit securely).

Backing up chat transcripts is simple with [symlinks](http://en.wikipedia.org/wiki/Symbolic_link). For me, I want all chat logs to be archived into a Dropbox directory continuously, so I don't have to remember to back them up. Messages stores its transcript files here:

    ~/Library/Messages/Archive/

Since I want my chats to all be instantly backed up to Dropbox, I symlink the directory into a `~/Dropbox/backups` directory, like this:

    ln -s ~/Library/Messages/Archive ~/Dropbox/backups/chats/

Linking those files to a Dropbox directory will automatically sync them to your account in real time, if you have syncing enabled. These files are then backed up for good, in case I need to search later. A downside with Messages is the transcript files are `.ichat` files, not plain text. So they can't be searched from the Dropbox iOS app or mobile text readers.

### iTunes

My iTunes media is mostly secure at this point, with iTunes Match and iCloud, but I still like to keep a backup of the raw XML library data. This contains a ton of stuff I don't want to lose, like playlists, ratings, and other metadata. ID3 tags and album art are safe with the MP3 files. A couple of symlinks make it so every time I close iTunes, the latest changes to my library get backed up.

    ln -s ~/Music/iTunes/iTunes\ Library.itl \
      ~/Dropbox/backups/iTunes/iTunes\ Library.itl

    ln -s ~/Music/iTunes/iTunes\ Music\ Library.xml \
      ~/Dropbox/backups/iTunes/iTunes\ Music\ Library.xml

### History + log files

On a daily basis, I'm all over the place with my machine &mdash; working with data in Postgres or SQLite, writing Ruby scripts, and just generally working on the shell doing tons of different things. I love having my command history for anything that has a CLI archived somewhere, so when I need to pull up some command or see how I had installed something, it's as simple as searching a history file. Many Linux & Mac applications keep themselves a history file inside your home directory, typically hidden, like `.bash_history` for the bash shell environment. Here's a few I keep around for posterity and convenience, in a "histories" backup[^history] directory:

* `~/.zsh_history`
* `~/.irb-history`
* `~/.psql_history`

[This piece](http://www.macworld.com/article/2012835/messages-working-with-transcripts.html) from Glen Fleishman had some other good tips on instant messaging with Messages.

[^history]: Remember, history files can often contain passwords and other secure data. Make sure if you keep them around they're somewhere secure.