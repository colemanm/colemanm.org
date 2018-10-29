const fs = require('fs');
const d3 = require('d3-dsv');
const path = require('path');
const yaml = require('js-yaml');
const toMarkdown = require('to-markdown');

d3.csvParse(
  fs.readFileSync('../_data/library.csv', 'utf8')
).filter(row => {
  return row['Shelf'] !== 'to-read';
}).forEach(row => {
  if (row['Date Read'] === '') {
    row['Date Read'] = row['Date Added'];
  }
  row.published = row['Original Publication Year'] || row['Year Published'];
  row.goodreads_id = row['Book ID'];
  Object.keys(row).forEach(k => {
    if (row[k] === '' || row[k] === undefined) delete row[k];
  });
  if (row['My Rating'] === '0') {
    delete row['My Rating'] === '0';
  }
  delete row['Book ID'];
  const description = row['My Review'];
  delete row['Average Rating'];
  delete row['Owned Copies'];
  delete row['Condition'];
  delete row['Author l-f'];
  delete row['Original Publication Year'];
  delete row['Year Published'];
  delete row['My Review'];
  delete row['Shelf'];
  delete row['Binding'];
  row.permalink = '/books/' + row['Title']
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^A-Z0-9-]/gi, '')
    .toLowerCase()
    .split('-')
    .slice(0, 5)
    .join('-');

  const r = {};
  r.categories = ['book'];
  r.layout = 'book';

  for (let key in row) {
    r[key.replace(' ', '_').toLowerCase()] = row[key];
  }
  const timeFinished = new Date(r.date_read);
  let fileName = `${timeFinished.getFullYear()}-${(timeFinished.getMonth() + 1).toString().padStart(2, '0')}-${timeFinished.getDate().toString().padStart(2, '0')}-${r.title
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^A-Z0-9-]/gi, '')
    .toLowerCase()
    .split('-')
    .slice(0, 5)
    .join('-')}.md`;
  console.log(r);
  fs.writeFileSync(path.join('../_posts/books/', fileName), `---
${yaml.safeDump(r)}---

${toMarkdown(description || '')}
`);
});
