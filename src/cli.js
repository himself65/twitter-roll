const { URL } = require('url')
const arg = require('arg')
const debug = require('debug')('twitter-roll')

exports.cli = (argv = []) => {
  const args = arg({
    '--help': Boolean,
    '--proxy': String
  }, {
    argv: argv.slice(2)
  })
  debug(args)
  if (args['--help']) {
    console.log(`Usage:
      twitter-roll url [--proxy proxy] [--help]
    `)
  }
  if (args['--proxy']) {
    const proxyUrl = new URL(args['--proxy'])
  }
  if (args._[0] == null) {
    throw new TypeError('expect a URL')
  }
  const targetUrl = new URL(args._[0])
}
