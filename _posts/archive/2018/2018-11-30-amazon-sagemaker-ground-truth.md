---
layout: link
date: 2018-11-30
title: "Amazon SageMaker Ground Truth"
target: https://aws.amazon.com/blogs/aws/amazon-sagemaker-ground-truth-build-highly-accurate-datasets-and-reduce-labeling-costs-by-up-to-70/
categories: blog
tags:
- artificial intelligence
- machine learning
- computer vision

links:
- url: https://aws.amazon.com/blogs/aws/amazon-sagemaker-ground-truth-build-highly-accurate-datasets-and-reduce-labeling-costs-by-up-to-70/
  title: "Amazon SageMaker Ground Truth"
---

This week was Amazon's annual re:Invent conference, where they release _n + 10_ new products for AWS (where _n_ is the number of products launched at last year's event). It's mind-boggling how many new things they can ship each year.

SageMaker was launched last year as a platform for automating machine learning pipelines. One of the missing pieces was the ability to build training datasets with your own custom data. That's the intent with Ground Truth. It supports building your dataset in S3 (like a group of images), creating a labeling task, and distributing it to a team to annotate to train a model. It integrates with Mechanical Turk, Amazon's network of third-party vendors, or your own private team. This is awesome for anyone with massive datasets but no easy-to-use system to build the training info.

This, combined with their [Rekognition](https://aws.amazon.com/rekognition/) product open up some interesting possibilities for image recognition use cases I'd like to test out.