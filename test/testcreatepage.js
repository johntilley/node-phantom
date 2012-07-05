var phantom=require('../phantom-node');

exports.testPhantomCreatePage=function(beforeExit,assert) {
	phantom.create(function(error,ph){
		assert.ifError(error);
		ph.createPage(function(err,page){
			assert.ifError(err);
			ph.exit();
		});
	});
};