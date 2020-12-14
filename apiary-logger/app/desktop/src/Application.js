Ext.define('ApiaryLogger.Application', {
	extend: 'Ext.app.Application',
	name: 'ApiaryLogger',
	requires: [
		'ApiaryLogger.*',
		'Ext.Toast',
	],
	defaultToken: 'homeview',

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()
		var whichView = 'mainview'

		Ext.Ajax.setCors(true);
		Ext.Ajax.setWithCredentials(true);

		Ext.Viewport.add([{xtype: whichView}])
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
