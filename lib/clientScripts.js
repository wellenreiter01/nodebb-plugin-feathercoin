"use strict";

var nconf = require('nconf');

module.exports = function(Feathercoin) {
	// filter:admin.scripts.get
	Plugin.addAdminScripts = function(scripts, callback) {
		scripts.push('/plugins/nodebb-plugin-feathrcoin/lib/admin.js');
		callback(null, scripts);
	};
};
