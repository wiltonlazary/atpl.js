var assert = require('assert');

var tp  = require('../lib/TemplateProvider.js');
FileSystemTemplateProvider = tp.FileSystemTemplateProvider;
MemoryTemplateProvider     = tp.MemoryTemplateProvider;

module.exports = {
	'test file system': function(done) {
		var templateProvider = new FileSystemTemplateProvider(__dirname + '/templates');
		assert.equal('Hello World!', templateProvider.getSync('simple.atpl'));

		templateProvider.getAsync('simple.atpl', function(data) {
			assert.equal('Hello World!', data);
			done();
		});
	},
	'test memory': function() {
		var templateProvider = new MemoryTemplateProvider();
		try {
			templateProvider.getSync('simple.atpl');
			assert.fail();
		} catch (e) {
		}
		
		var templateContent = 'Hello World!';
		
		//console.log(templateProvider.registry);
		templateProvider.add('simple.atpl', templateContent);
		//console.log(templateProvider.registry);
		assert.equal(templateContent, templateProvider.getSync('simple.atpl'));
	},
};