# Find RSS [![Build Status](https://travis-ci.org/twobucks/find-rss.svg?branch=master)](https://travis-ci.org/twobucks/find-rss)

Finds RSS feeds for a given URL.

## Installation

```js
npm install twobucks/find-rss
```

## Usage

```js
var findRss = require('find-rss')

findRss('https://blog.twobucks.co', function(err, feeds){
  if (err) throw err

  console.log(feeds) // [ 'http://blog.twobucks.co/rss/' ]
})
```

## License

MIT

## Sponsors

Two Bucks Ltd © 2016

<a href="https://twobucks.co">
![https://twobucks.co](https://twobucks.co/assets/images/logo-small.png)
</a>
