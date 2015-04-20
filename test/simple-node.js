/*!
 * simple-node
 * https://github.com/iconnor/simple-node
 */

'use strict';

var expect = require('chai').expect;
var lib = process.env.JSCOV ? require('../lib-cov/simple-node') : require('../lib/simple-node');

describe('simple-node module', function () {
  it('exports object', function () {
    expect(lib).to.be.an('object');
  });
});
