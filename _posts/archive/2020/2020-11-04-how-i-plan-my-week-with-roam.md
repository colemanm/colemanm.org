---
layout: post
date: 2020-11-04 23:06:33
title: "How I Plan My Week with Roam"
description: "Using Roam Research for task management and weekly productivity planning."
img: /images/post-images/roam-weekly-planning.jpg
categories: blog
tags:
- Roam Research
- notes
- productivity
- planning
- task management
---

For years Todoist was [my tool of choice](/post/using-todoist/) for task management. When Roam came [on the scene for me](/post/getting-comfortable-with-roam/ "Getting Comfortable with Roam") earlier this year, I'd seen pretty compelling methods from the #roamcult for how to manage todos inside of Roam with its [TODO feature](https://www.roamtips.com/home/use-todo-get-things-done-roam-research-gtd "Using TODOs in Roam"). It was an intriguing idea: such a fast and simple way to capture things without leaving the current frame.

But it took me a while to go all-in on Roam for tasks. Todoist was so embedded in my muscle memory, especially with its accessible web and cross-platform mobile apps and its excellent quick-entry "[Quick Add](https://get.todoist.help/hc/en-us/articles/115001745265-Task-Quick-Add "Task Quick Add in Todoist")" flow from the desktop. It was going to require a lot to make the switch to a different system, and one that's wildly different from the way any other task management app works.

{% include image.html file="roam-weekly-planning.jpg" description="Roam Weekly Planning" caption="no" %}

I eventually took the plunge, moved all my pending tasks over to a Roam page from Todoist, and started to come up with a process. I was first just managing tasks from a giant temporary "Inbox" page, but over time I learned better how I wanted to fit them in with the advantages of a Roam-based daily workflow.

Though the switch to Roam for task management gives up some useful abilities with dedicated favorites like Todoist or [Things](https://culturedcode.com/things/ "Things"), the gains with managing tasks alongside the rest of my knowledge graph are well worth the trade-offs. Most task management tools have way too many features for my needs, anyway. Here are just a few things I love about this process so far:

* **You can insert todos _in context_** — Being able to quickly slot todos anywhere is beautiful. As you're writing other notes specific to projects, meetings, phone calls, articles, or anything else, you can `Cmd-Enter` and add something right as you're thinking of it. This method ends up being a solid "[ubiquitous capture](https://zenhabits.net/tips-for-gtds-ubiquitous-capture/ "Tips for GTD Ubiquitous Capture")" flow similar to what you'd do with Todoist or OmniFocus inboxes.
* **The [[TODO]] page, pinned to the sidebar** — This lets you quickly dredge up all of your todos regardless of where you scattered them. Use this plus filters to drill in to specific areas. A solid "inbox" equivalent to process your todos into other places.
* **Add tags to filter for context** — If you're familiar with [GTD's contexts](https://evomend.net/en/what-not-gtd-context/ "Contexts in), you'll recognize this. I add tags to tasks so I can filter for all **[[TODO]]** tagged **#Email**, for example.
Now let's go over how I plan out my week with Roam.

### My Weekly Process

At the beginning of each week, I start out by creating a new page for the week ahead, dated starting on Mondays. So this week's page is **[[📆 Weekly Plan: 2020/11/02]]**. I just focus into the search bar and type it out.

For the page template I start out with sections for **Weekly Goals** and **Daily Goals**. The first I treat like a general holding area for tasks I want to work on in the upcoming week, and the latter I include a block for each day. Then I manually add in the dates for each day with Roam's `/date picker` slash command (`/today` and `/tomorrow` can also be useful here, if relevant)[^dates]. To make all of this faster, I use a TextExpander snippet to automatically insert the basics. Typing `rcwp` stamps in my basic template[^wptemplate]:

```yaml
- # Weekly Goals
    - 
- # Daily Goals
    - Monday: 
    - Tuesday:
    - Wednesday: 
    - Thursday: 
    - Friday:
```

When I started down this workflow path, I initially thought it'd be annoying to have to set up a new page each week. But so far it's actually been valuable to force a start-of-week planning session to think through what I want to get done. Usually on Sunday nights I'll go in and make the Weekly Plan page, then pull up my **[[Projects]]** page, **[[Blog Ideas]]**, **[[TODO]]**, or even my page from the previous week to look for all of the various tasks I might want to focus on.

Using [the sidebar](https://www.roamtips.com/home/roam-research-sidebar "Using Roam's Sidebar") helps a lot here. I'll pop open other pages with a `Shift-click`, then drag over todos I want to work on under the Weekly Goals section. If I want the todo to actually stay where it is and not move it to the Weekly Plan page, I use Roam's `Alt-click` and drag to bring over a block reference instead of the entire block itself. This is a neat way to keep todos in the right place, but have a reference to them in your task plan. There's an example of this in the video below, where I've got a trip planning project page with tasks on it that I want to stay there, but still see in my weekly view.

{% include video.html id="LEIAHusTAus" %}

Once I've got a batch of tasks entered under the week, I'll start queueing them up into their appropriate days. Some things have deadlines or due dates I'm trying to manage to, so need to get done at specific times. Others I'll just leave in the Weekly section until I know when I plan to do it. Regularly on weekday mornings I'll go to my plan and pull in what I want to get done that day. It's a living document until the week is over, a part of my morning routine to go to this page.

My favorite thing about this process is how it manifests your tasks on the Daily Notes page. Because the Daily Note automatically displays references to any page that includes that day's date, you get a slick little embedded list of the day's tasks. The Daily Notes view is my default working mode during a typical work day, so this is an excellent place to have all of those queued up activities available on the same page where I'm taking meeting notes and the like.

{% include image.html file="daily-notes-embedded-tasks.jpg" description="Tasks embedded in Daily Notes" caption="no" %}

### Areas for Improvement

After about 2 months committed to this process, it's pretty solid for me. I'm not missing as much from my old workflow as I thought I would, and I'm enjoying the benefits of Roam's graph structure too much to reconsider now. Plus the potential is high that the lightning-fast Roam team will add improvements to all this.

Todoist's Quick Add is something I'd love an equivalent for somehow in Roam. The [Capture mobile entry web app](https://www.roamtips.com/home/how-to-add-roam-research-notes-mobile "Roam Quick Capture") that Roam has isn't bad, but it's not that fast for adding new items quickly while on the go. To fill in this gap now I'll usually just throw things into a sheet in [Drafts](https://getdrafts.com/ "Drafts") which gets processed later back at my desk.

Multiplayer abilities were something I never took advantage of in Todoist, but are a key piece of any work (or even family) project management usage. Roam's recent additions in support of multiplayer look promising here, but that hasn't been relevant to me just yet. Multiuser project management (that tools like Asana excel at) is a beast in itself to solve.

Managing dates isn't as smooth as in most task management apps, but there are some advantages I really do like. For any task entered anywhere in your graph, you can add a future date to it and have it magically appear in Daily Notes references that day to jog your memory. A feature that no task management tool other than OmniFocus ever supported, but I've wanted ever since, is the idea of a Start Date. With that you could put in something you want to remember, but for later, put "in 90 days" next to it and it would disappear until resurfacing then. It was a great way to put in things you know you needed to remember, but don't need to continue seeing in your list for weeks until it's relevant. Dating your todos like the above is similar in concept: tagging them with a date 3 months out will make them pop back up when they need to be considered.

### The Future

From what I've seen in Twitter discussions about the incoming Roam API, I'm hopeful that its hyperactive developer community will jump right into building applications on Roam for workflows like this. A dedicated, customizable app specifically for task management built on the "Roam platform" would be a phenomenal tool worthy of driving its own second-order revenue for a developer. Thinking about [David Crandall's piece](https://davidcrandallwrites.com/predicting-the-future-of-roam/ "Predicting the Future of Roam") on the prospects of Roam as a service layer, there's so much potential for it to power its own developer marketplace.

In the next post I'll go over my current workflow for using Daily Notes. It's an interesting companion to this process of task management.

[^dates]: If I was fancier I could probably add this logic to my TextExpander snippet, but adding dates manually doesn't bother me.
[^wptemplate]: This setup will look familiar if you've seen Nat Eliason's Effortless Output course. I also found this [Alfred workflow](https://github.com/kylestratis/roam-weekly-plan) with a similar template.
