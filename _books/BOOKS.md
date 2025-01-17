## Books Section

Each book is represented by a markdown file in the `_books` directory.

The front matter defines the book's metadata, including title, author, slug, and other details.

Front matter properties example:

```yaml
---
layout: book
title: "Labyrinths"
subtitle: "Selected Stories & Other Writings"
author: Jorge Luis Borges
author_last: Borges
slug: borges-labyrinths
type: fiction
cover: true
series: 
part: 
genres:
- short story
- science fiction
- speculative fiction
- classics
- philosophy
isbn: 9780811200127
rating: 4
pages: 256
format: paperback
publish_year: 1962
date_started: 2019-03-09
date_completed: 2019-06-16
goodreads_id: 17717
amazon_link: https://amzn.to/30AM30W

# Optional properties below
favorite: true
current: true
notes: true

reviewers:
- author: Tom MacWright
  url: https://macwright.org/2010/08/22/the-stranger.html
- author: Juvoni Beckford
  url: https://juvoni.com/book/the-stranger

recommended_by:
- title: "Using This iPod For 30 Days Changed My Life"
  author: "Brandon Shaw"
  url: "https://www.youtube.com/watch?v=Ou2dW4qebbw"
---
```

## Metadata Properties

| Property | Required | Description |
|----------|----------|-------------|
| layout | Yes | Template to use (should be `book`) |
| title | Yes | Book title |
| subtitle | No | Book subtitle |
| author | Yes | Author's full name |
| author_last | Yes | Author's last name (for sorting) |
| slug | Yes | URL-friendly identifier |
| type | Yes | Book type (e.g., `fiction`, `nonfiction`) |
| cover | Yes | Whether book has cover image (`true`/`false`) |
| series | No | Series name if book is part of a series |
| part | No | Series part/volume number |
| genres | No | List of genres/categories |
| isbn | Yes | ISBN-13 number |
| rating | Yes | Your rating (1-5) |
| pages | Yes | Total page count |
| format | Yes | Format (e.g., `paperback`, `hardcover`, `kindle`) |
| publish_year | Yes | Original publication year |
| date_started | Yes | Date you started reading (YYYY-MM-DD) |
| date_completed | Yes | Date you finished reading (YYYY-MM-DD) – leave blank for book to be included in "currently reading"section |
| goodreads_id | No | Goodreads book identifier |
| amazon_link | No | Amazon affiliate link |
| favorite | No | Whether this is a favorite (`true`/`false`) – styles it bold in the list |
| current | No | Whether this is a current read (`true`/`false`) |
| notes | No | Whether you have notes for this book (`true`/`false`) – shows an icon in the list|
| reviewers | No | List of other reviews with `author` and `url` |
| recommended_by | No | List of recommendations with `title`, `author`, and `url` |
