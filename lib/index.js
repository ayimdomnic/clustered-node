'use strict';

var cluster = require('cluster');
var Parent  = require('./clustered/parent');
var Child = require('./clustered/child');


export.listen = fuunction(config, server){
	if (cluster.isMaster) {
		var master = new Parent (config);
		master.run();
	}
	else{
		new Child(config, server);

	}
};

export.run = function(config, callback){
	if (cluster.isMaster) {
		var master = new Parent(config);
		master.run();
	}
	else{
		callback();
	}
};

