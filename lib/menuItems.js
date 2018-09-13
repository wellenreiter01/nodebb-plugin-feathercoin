"use strict";

module.exports = function(Plugin) {

	// filter:admin.header.build
	Plugin.addAdminNavigation = function(header, callback) {
		header.plugins.push({
			route: '/feathercoin-admin',
			icon: 'fa-tint',
			name: 'Feathercoin Tipping'
		});

		callback(null, header);
	};
};
