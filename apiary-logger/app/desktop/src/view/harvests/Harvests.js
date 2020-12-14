/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.desktop.src.view.harvests.Harvests', {
    extend: 'Ext.Container',

    requires: [
        'ApiaryLogger.desktop.src.view.harvests.HarvestsModel',
		'ApiaryLogger.desktop.src.view.harvests.HarvestsController'
    ],

    xtype: 'harvests',

    viewModel: {
        type: 'harvests'
    },

    controller: 'harvests',

    items: [
        /* include child components here */
    ]
});
