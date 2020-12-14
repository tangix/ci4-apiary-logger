Ext.define('ApiaryLogger.util.Shared', {
    alternateClassName: ['Shared'],
    singleton: true,

    config: {
        backend: 'http://127.0.0.1:8080/'
    },

    constructor: function (config) {
    	var me = this;
        this.initConfig(config);

        if (typeof BACKEND_URL !== 'undefined') {
            me.setBackend(BACKEND_URL);
        }
    },

    log: function (msg) {
        console.log(msg);
    },

    /**
     * @param {*|string} message
     */
    success: function (message) {
        message = typeof message !== 'undefined' ? message : 'Command completed successfully';
        Ext.toast({
            message: '<span class="x-fa fa-check-circle"></span>&nbsp;&nbsp;' + message,
            timeout: 3000,
            alignment: 't-t'
        });
    },

    desktopMenu: function () {
        var menu = {
            "leaf": false,
            "children": [
                {"text": "Home", "iconCls": "x-fa fa-home", "xtype": "homeview", "leaf": true},
                {"text": "Inspections", "iconCls": "x-fas fa-eye", "xtype": "inspections", "leaf": true},
                {"text": "Harvests", "iconCls": "x-fa fa-table", "xtype": "harvests", "leaf": true},
                {"text": "Hives", "iconCls": "x-fa fa-university", "xtype": "hives", "leaf": true},
                {"text": "Queens", "iconCls": "x-fa fa-chess-queen", "xtype": "queens", "leaf": true},
            ]
        };

        return {
            expanded: true,
            text: "My Root",
            children: menu
        };
    }
});
