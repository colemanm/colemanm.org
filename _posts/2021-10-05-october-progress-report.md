---
layout: post
date: 2021-10-05 13:57:54
title: "October Progress Report"
description: ""
img: /images/post-images/
categories: blog
tags:
- progress
---

Progress!


{% include book-progress.html book-id="huxley-brave-new-world" start="" end="" duration="" %}


<script>
  var current_percent = 69;
	for (n = 0; n < 20; n++) {
    if (current_percent < (n+1)*5) {
    	$('#ascii-progress-bar-1').append("░"); // alt-176 
    	$('#ascii-progress-bar-2').append("·"); // alt-250 
    }
    else {
    	$('#ascii-progress-bar-1').append("▓"); // alt-178
    	$('#ascii-progress-bar-2').append("="); 
    }    
	}
</script>



<p>
	[<span class="ascii-progress-bar-2"></span>]
</p>