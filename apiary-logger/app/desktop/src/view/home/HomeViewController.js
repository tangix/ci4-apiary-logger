Ext.define('ApiaryLogger.view.home.HomeViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.homeviewcontroller',

	init: function() {
		var me = this;

		Ext.Ajax.request({
			method: 'GET',
			url: Shared.getBackend() + 'queens',
			success: function (response) {
				var obj = Ext.decode(response.responseText);
			},
			failure: function () {

			},
			scope: me
		});

	}

});
