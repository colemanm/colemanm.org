Reference formatting for book front-matter:

```yaml
---
layout: book
title: "How Innovation Works"
subtitle: "And Why it Flourishes in Freedom"
author: Matt Ridley
author_last: Ridley
slug: ridley-how-innovation-works
type: nonfiction
cover: true
series: 
part: 
genres:
- science
- history
- economics
- progress
isbn: 9780062916617
rating: 5
pages: 320
format: kindle
publish_year: 2020
publisher: Harper
date_started: 2020-05-31
date_completed: 2020-06-20
goodreads_id: 45449488
amazon_link: https://amzn.to/3fXqMFc

reviewers:
- author: Person 1
  url: url
- author: Person 2
  url: url

favorite: true
notes: true
current: true
---
```

The `current` attribute would only exist for books to appear in the "Current Reads" section. In that case, you should also leave the `date_completed` attribute blank to make it work right.
