// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
XMLHttpRequest = {} // eslint-disable-line no-native-reassign
window = { // eslint-disable-line no-native-reassign
  window: {},
  document: {
    lastModified: 1388954399,
    getElementsByTagName: function () { return [] }
  },
  location: {
    href: ""
  }
}
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var stripos = require('/Users/kvz/code/phpjs/src/php/strings/stripos.js')

describe('php.strings.stripos.js', function () {
  it('should pass example 1', function (done) {
    stripos('ABC', 'a')
    var expected = 0
    var result = stripos('ABC', 'a')
    expect(result).to.deep.equal(expected)
    done()
  })
})