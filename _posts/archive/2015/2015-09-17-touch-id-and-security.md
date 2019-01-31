---
layout: post
date: 2015-09-17
title: "Touch ID and Security"
description: "About the overall security of Touch ID for iOS, and using it in 1Password."
img: /images/post-images/touch-id.png
categories: blog
tags:
- security
- apps
---

I recently wrote [a review](https://www.fulcrumapp.com/blog/review-staying-secure-with-1password/) on the Fulcrum blog for one of my favorite pieces of software, [1Password](https://agilebits.com/onepassword). It's a password management app to help you keep better organized with your hundreds of passwords, codes, and secure data that you typically have laying around in emails, documents, and post-it notes on your desk[^gobuyit].

I'm a heavy user of 1Password on my iPhone to look up accounts while I'm mobile. Because 1Password vault security is only as secure as your [master password](https://support.1password.com/strong-master-password/), the natural tendency is to have a long, complex, intricate passphrase to type to unlock the vault. And from the iPhone, you want your vault to _re-lock_ pretty rapidly so the door to your digital safe isn't left swinging open while your phone's sitting on the table. The net result is having to constantly type a hard-to-type passphrase on a _hard-to-type-on_ device. No good and no fun.

{% include image.html file="touch-id.png" description="Touch ID for iOS" caption="no" %}

My problems were solved a few weeks ago I finally enabled the Touch ID functionality in 1Password 5 for accessing your vault using your fingerprint, versus typing the 30-character password[^1password5]. After using it like this for a few days, it seemed less secure to me, since it wasn't even requiring my impressively-complicated password to get in. I dug into some of the documentation to find out how secure the implementation of Touch ID authorization is in 1Password, and how Touch ID works in iOS.

The app documentation has a [great article](https://support.1password.com/how-safe-is-touch-id/) outlining exactly how Touch ID works within 1Password. For a long time it had a "PIN Code" feature to have a quick access code for unlocking the vault _after_ you had recently unlocked the vault with your master password, and the Touch ID feature works similarly. The data is still encrypted with the master password. It's designed explicitly as a mechanism for adding convenience to the process, which is a critical component to maintaining good security best practices:

>"Just as Apple has designed Touch ID not as a replacement for a device passcode, we do not use Touch ID in 1Password as a replacement for your Master Password. Touch ID is a convenience mechanism that provides a way to quickly unlock 1Password after there has been a full unlock (with your Master Password)."

The intersection of convenience and security [is interesting](https://blog.agilebits.com/2014/10/06/touching-on-security-and-convenience/). They're fundamentally opposite: a totally secure system is extremely inconvenient to access, a convenient one is insecure. The best systems strike a balance somewhere in the center. The problem with highly secure but inconvenient systems is that they entice users to defuse the security of the whole system by taking shortcuts. Think of the corporate IT environment with all the bells and whistles on security&mdash;password strength requirements, required resets every month, can't reuse passwords, minimum lengths&mdash;it's this massive inconvenience that results in the post-it note on the monitor with the keys to the kingdom written on it.

The security of how Touch ID's technology works is another matter, one of hardware and storage. With the release of the A7 processor in 2013, Apple introduced something called the Secure Enclave[^apple-security], which allows applications to store bits completely outside the scope of the kernel on a physically isolated area of the chip. This is where biometrics get stored, along with cryptographic data for other applications. Apple's [technical documentation](https://support.apple.com/en-us/HT204587) about Touch ID security covers in minute detail exactly how iOS devices store your fingerprint data on the Secure Enclave, and the ultimate reason why Touch ID is actually _more secure_ than not using it:

> "Since security is only as secure as its weakest point, you can choose to increase the security of a 4-digit passcode by using a complex alphanumeric passcode. To do this, go to Settings > Touch ID & Passcode and turn Simple Passcode off. This will allow you to create a longer, more complex passcode that is inherently more secure."

This is a key point that's relevant at the OS level and within apps like 1Password or banking apps using biometrics. If, because of the convenience factor, biometrics enable people to keep their encryption passphrases more secure at the core, then we're all better off.

[^gobuyit]: It's utterly essential to modern computing, so [go buy it right now](https://agilebits.com/store) if you don't have it already.
[^1password5]: The Agile Bits team [released this functionality a year ago](https://blog.agilebits.com/2014/09/17/1password-5-for-ios-is-here-with-app-extensions-touch-id-new-freemium-price/), but for some reason I never bothered to try it.
[^apple-security]: Apple has an in-depth [security document](https://www.apple.com/business/docs/iOS_Security_Guide.pdf) covering Secure Enclave and the entire security architecture of iOS and the hardware. Worth a read if you can stomach the geeky stuff.
