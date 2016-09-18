var request = require('request')
var htmlparser = require('htmlparser2')

function findRss (url, cb) {
  request.get(url, function (err, res, body) {
    if (err) return cb(err)

    var feeds = []

    var supportedFeeds = [
      'application/rss+xml',
      'application/atom+xml',
      'application/rdf+xml',
      'application/rss',
      'application/atom',
      'application/rdf',
      'text/rss+xml',
      'text/atom+xml',
      'text/rdf+xml',
      'text/rss',
      'text/atom',
      'text/rdf'
    ]

    var parser = new htmlparser.Parser({
      onopentag: function (name, attrs) {
        if (name === 'link' && supportedFeeds.indexOf(attrs.type) > -1) {
          feeds.push(attrs.href)
        }
      },
      onend: function () {
        return cb(null, feeds)
      }
    }, {decodeEntities: true})

    parser.write(body)
    parser.end()
  })
}

module.exports = findRss
