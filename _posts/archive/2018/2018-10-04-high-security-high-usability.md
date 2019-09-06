---
layout: post
date: 2018-10-04
title: "High Security, High Usability"
description: "Maintaining high security of your accounts gets easier with modern tools."
categories: blog
tags:
- technology
- security
- workflow
---

As computing platforms get more complex and critical to daily life, maintaining secure usage gets more challenging.

I’ve written [about this]({{ site.url }}/post/touch-id-and-security/) [before](https://www.fulcrumapp.com/blog/on-mobile-device-security/ "On Mobile Device Security"), but it’s a known mantra in the product and IT space that _security_ and _usability_ are inversely proportional. That is, a gain in one is a loss in the other. This has long been visible in enterprise software that is perceived as annoying or frictional in the pursuit of security (password rotation every _n_ days, can’t reuse, complexity requirements). It’s what gives employees a bad taste in their mouth about enterprise systems, among other things. That reduction in usability begets bad behavior on the part of users — the proverbial Post-It note on the monitor with the last 3 passwords in clear text.

Those of us that make software never want to compromise on usability, but us realists recognize the need for secure data and privacy. There are exciting developments lately that might be closing this gap.

Password managers like [1Password](https://1password.com/ "1Password") already have done a lot to maintain secure computer usage behavior by simplifying the “secure defaults” — primarily not reusing passwords across services and enabling realistic use of longer, random strings. Two-factor authentication adds a wrinkle in usability that (unlike many other auth wrinkles) affords a powerful layer of security, albeit with a cost. The two-factor support within 1Password makes it shockingly smooth to deal with, though. So much so that I enable two-factor auth on any service that offers it, without hesitation.

What got me thinking about this topic again was a specific new addition to the personal security workflow. I just got an iPhone XS; it’s my first experience with Face ID (which deserves a healthy dose of praise in its own right). But the real breakthrough is the integration of 1Password into the built-in Password Autofill facility in iOS 12.

Here’s a before and after example of signing into GitHub on my phone:

**Before**: Go to GitHub, see that I’m signed out, switch to 1Password, copy password, return to GitHub, paste credentials, tap sign in, go back to 1Password, copy 2FA code, go back and paste it in, success.

**After**: Go to GitHub, tap “Passwords” in browser, Face ID, pick account, it autofills, paste 2FA code, success.

This seems like trivial stuff, but given how many seconds/minutes of each day I spend doing this process, it’s a big deal. Before, making this process smoother would require a dent in its security. Now we get to have a friction-free process without the compromise.
