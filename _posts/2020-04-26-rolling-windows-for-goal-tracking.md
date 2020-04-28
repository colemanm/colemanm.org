---
layout: post
date: 2020-04-26 17:20:45
title: "Rolling Windows for Goal Tracking"
description: "Using rolling windows for tracking relative progress on habits or goals."
categories: blog
tags:
- goals
- data
- habits
- quantified self
---

Since the beginning of 2019 I've [been tracking](/post/2019 "2019") ongoing goals using a Google Sheet I made, where I can enter each activity day by day and generate a rollup showing how I'm tracking on each goal throughout the course of the year.

Andy Matuschak put it well [in this post](https://blog.andymatuschak.org/post/169043084412/successful-habits-through-smoothly-ratcheting) where he talked about his system for habit-building. A calendar week isn't great for tracking overall progress because it's artificially-constrained.

Let's take my current goal of running 650 miles this year. That averages to doing 12.47 miles per week to hit the number. With something like running, pacing out the progress is critical — you can't procrastinate and stack progress at the end of the month or quarter to "catch up," at least not healthily. And you also want the progress report to give you a sense of "how have I been doing?"

If you look at a calendar week (like Monday to Sunday), you could have one week where you overshoot the goal, say a race week or just one where you got in high mileage, followed by one with more rest days. A purely week-oriented method would give the sense that you were off-target during the rest week, and way over during the intense one.

In Andy's post he puts it well: moving windows help to "make every day doable." Putting things off doesn't threaten your progress, as long as you don't put them off _too far_.

My method for doing this on my run tracker shows me how much I've run in the past 7 days, juxtaposed with the 7-day target if I'm "on plan." I need to average 1.78 miles per day to stay on track, so this formula tells me how I'm doing over the last 7 days:

| Last 7 | 7-Day Target |
|--------|--------------|
| 13.51  | 12.47        |

Here's how I calculate this in the spreadsheet. I track each run in a separate row, with a `miles` attribute for each one. The formula for "Last 7" looks like this:

`SUMIFS(miles,date,">"&TODAY()-7)`

`miles` and `date` are the columns in the data for each of those. I use the whole column in notation like `Running!B:B`.

Because I'm currently tracking about 13 miles behind goal pace for the year, I need to make sure I keep this rolling figure just above the 7-day target line in order to close the gap back to level.

This is working better overall to give a picture of the current state for me. It also works well for other things with daily targets like skill practice, book pages for reading, learning a language or instrument, really anything you can quantify with time or scalar goals.
