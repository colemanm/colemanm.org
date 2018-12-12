---
layout: post
date: 2018-12-12
title: "The Personal Security Footprint Review"
description: "Stepping through my annual security review process with 1Password."
categories: blog
tags:
- security
- productivity
- habits
---

Once a year around this time I like to do some “winter cleaning” of my personal security footprint, mostly covering passwords and internet service accounts I have that may be out-of-date, unmaintained, or unneeded.

1Password is a dream for things like this. If you don’t maintain an account, it’s well worth setting one up for the family with their [1Password for Families](https://1password.com/families/ "1Password for Families") product tier. Worth every penny[^pass-management].

Good hygiene with passwords has been a perennial problem in internet-land, and the security risk only goes up with seemingly-daily announcements of the next hack or data breach. While those risks are part of our current reality, it’s possible to lower your risk profile with some simple maintenance tasks with 1Password. Here are some general best practices and my personal annual review process.

## Raise the complexity

There’s no excuse not to be using highly complex passwords these days. When creating new 1P entries, you can autogenerate complex passwords. Sometimes you’ll need to tweak the generation parameters to create passwords that are acceptable for certain sites[^complexity], but it’s worth making sure you’re maximizing the complexity where you can. When I review my accounts, I look for any entries that have less than 1P’s “Fantastic” rating, and sign into those and update them.

{% include image-partial.html file="complex-passwords.png" description="Complex Passwords" caption="no" width="389" %}

## Watchtower

1Password has a feature called [Watchtower](https://watchtower.1password.com/ "1P Watchtower") that helps you conduct targeted review to keep yourself secure. Things like compromised or vulnerable logins, reused or weak passwords, or where 2FA isn’t enabled. It’s nice because it checks against a couple of known databases to help keep you on guard. This is the go-to spot to look for areas of attention in the review. It’s worth setting yourself a reminder (quarterly or so) to check here for any changes. If services you rarely use have security incidents, you probably won't know, so this helps.

{% include image-partial.html file="1password-watchtower.png" description="1Password Watchtower" caption="no" width="268" %}

## Two-factor authentication

I [wrote previously]({{ site.url }}/post/high-security-high-usability/ "High Security, High Usability") about 1Password’s native two-factor authentication. Wherever possible and recommended I go through my account entries and enable 2FA setups with the one-time passwords configured. Another tip for this is to use a `password` field type to store the “recovery codes” that most services will generate for two-factor, which allow you to recover your password if something gets hosed. Web services commonly generate these codes in a text file for safe storage, which you can do in 1Password if you want, but I’ve never been a huge fan of the way file storage and linking works in the app. I prefer to copy the codes directly into the 1P database entry anyway.

## Purge unused services

Shutting down accounts for services you don’t use is another good practice to reduce your exposure to breaches. If you aren’t using or no longer need a service, might as well not have it hanging out there. Since you can sort entries by “date used”, it’s straightforward to comb through ones you haven’t used all year and assess. When I go through my annual review, I always find a couple not worth keeping, so I sign in and spin them down if possible. If they don't have a public-facing way to delete my account, I usually reset the password to something huge and delete whatever unrequired personal info might be on file (like credit cards and the like).

## Other scattered tips

A few other pointers that factor into my annual review:

* **Change any duplicates** — I don’t intentionally create dupes, but it happens occasionally, especially when creating accounts from my phone when I just want to type a password in signup
* **Check for `https`** — This isn’t a huge problem these days, but a nice recent addition to 1Password will alert you to entries with insecure URLs
* **Assess shared accounts** — Using the 1Password for Families account, we have a single shared vault for accounts we both need: bank accounts, credit cards, kid-related stuff, Netflix, Amazon
* **Organize** — I go through and change entry names, make things consistent, and just generally scan through for any junk to keep it all clean

With the review done, it feels good to have a renewed sense of security having checked your digital footprint. A well-organized, clean 1Password setup can also be a huge productivity boost. The more services you work within (and the more secure you want your behaviors to be), the more a clean, healthy passwords vault will help you.

[^pass-management]: All of the following I do in 1Password, but other services like LastPass or KeePass presumably can do similar things, but I haven’t used them.
[^complexity]: It’s still mind-boggling that in 2018 so many sites can’t handle any string of characters as a password. I shudder to think what the software or database structures behind the culprit services look like.
