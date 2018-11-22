---
layout: post
date: 2018-10-20
title: "Weekend Reading: Terminals, Cryptography, and Products as Functions"
description: "Terminals as interfaces, quantum cryptography, and products as mathematical functions."
categories: blog
tags:
- links
- cryptography
- products
---

### 💻 [Learning from Terminals to Design Future User Interfaces](https://brandur.org/interfaces)

Pieces like this often come off like geeks calling for a return to how it "used to be" — "HyperCard was the peak of dev tools". But this author makes some excellent points about performance, responsiveness, and control. As a frequent terminal user, there's a tactility to it that comes from its fast response to input, but it is true that consoles have lagged behind in other ways like media richness and user interface display.

### 🔐 [Quantum Computers and Cryptography](https://www.schneier.com/blog/archives/2018/09/quantum_computi_2.html)

Bruce Schneier:

> Quantum computers promise to upend a lot of this. Because of the way they work, they excel at the sorts of computations necessary to reverse these 
> one-way functions. For symmetric cryptography, this isn't too bad. Grover's algorithm shows that a quantum computer speeds up these attacks to 
> effectively halve the key length. This would mean that a 256-bit key is as strong against a quantum computer as a 128-bit key is against a conventional 
> computer; both are secure for the foreseeable future.
> 
> For public-key cryptography, the results are more dire. Shor's algorithm can easily break all of the commonly used public-key algorithms based on both 
> factoring and the discrete logarithm problem. Doubling the key length increases the difficulty to break by a factor of eight. That's not enough of a 
> sustainable edge.

### 🚦 [Products Are Functions](https://www.feltpresence.com/functions.html)

Ryan Singer on the concept of products behaving like mathematical functions; they sit between an input and output, processing one into the other. Having known input and known desired output serves as a mental aid to "solve for" `f(x)` in the middle.