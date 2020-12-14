/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.desktop.src.view.hives.Hives', {
    extend: 'Ext.Container',

    requires: [
        'ApiaryLogger.desktop.src.view.hives.HivesModel',
		'ApiaryLogger.desktop.src.view.hives.HivesController'
    ],

    xtype: 'hives',

    viewModel: {
        type: 'hives'
    },

    controller: 'hives',

    items: [
        /* include child components here */
    ]
});
