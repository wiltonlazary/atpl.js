var utils  = require('../lib/Utils.js');
var assert = require('assert');

module.exports = {
	'simple normalize path': function() {
		assert.equal('/this/is/a/test', utils.normalizePath('/this/is//a/path/../test'));
		assert.equal('this/is/a/test', utils.normalizePath('this/is//a/path/../test'));
		assert.equal('', utils.normalizePath('../../'));
	},
	'path is inside': function() {
		assert.equal(true, utils.pathIsInside('/base', '/base'));
		assert.equal(true, utils.pathIsInside('/base/', '/base/'));
		assert.equal(true, utils.pathIsInside('/base', '/base/test'));
		assert.equal(true, utils.pathIsInside('/base', '/base/demo/../test'));
		assert.equal(false, utils.pathIsInside('/base', '/base/../test'));
		assert.equal(false, utils.pathIsInside('/base', '/base2'));
		assert.equal(false, utils.pathIsInside('/base/', '/base2/'));
	},
	'interpretNumber': function() {
		assert.equal(10   , utils.interpretNumber('10'));
		assert.equal(0x10 , utils.interpretNumber('0x10'));
		assert.equal(0777 , utils.interpretNumber('0777'));
		assert.equal(7    , utils.interpretNumber('0b111'));
		assert.equal(11.7 , utils.interpretNumber('11.7'));
		assert.equal(0x333, utils.interpretNumber('333', 16));
	},
};