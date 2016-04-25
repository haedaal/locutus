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
var escapeshellarg = require('/Users/kvz/code/phpjs/src/php/exec/escapeshellarg.js')

describe('php.exec.escapeshellarg.js', function () {
  it('should pass example 1', function (done) {
    escapeshellarg("kevin's birthday")
    var expected = "'kevin\\'s birthday'"
    var result = escapeshellarg("kevin's birthday")
    expect(result).to.deep.equal(expected)
    done()
  })
})