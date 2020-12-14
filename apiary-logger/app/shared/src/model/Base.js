Ext.define('ApiaryLogger.model.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.util.Format',
        'Ext.util.Inflector',
        'Ext.data.identifier.Negative'
    ],

    versionProperty: 'item_version',
    identifier: 'negative',
    clientIdProperty: 'clientId',

    schema: {
        namespace: 'VTAdminUI.shared.src.model',
        proxy: {
            type: 'rest',
            paramsAsJson: true,
            actionMethods: {
                create: 'POST',
                read: 'GET',
                update: 'PUT',
                destroy: 'DELETE'
            },
            noCache: false,
            useDefaultXhrHeader: false,
            appendId: true,
            url: Shared.getBackend() + '{entityName:inflectorPlural}',
            reader: {
                type: 'json',
                dateFormat: 'C',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }
    }
}, function () {
    var I = Ext.util.Inflector;
    Ext.util.Format.inflectorPlural = function (s) {
        return Ext.util.Format.lowercase(Ext.util.Inflector.pluralize(s));
    }
});
