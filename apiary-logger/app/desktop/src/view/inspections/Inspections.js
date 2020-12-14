/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.desktop.src.view.inspections.Inspections', {
    extend: 'Ext.Container',

    requires: [
        'ApiaryLogger.desktop.src.view.inspections.InspectionsModel',
		'ApiaryLogger.desktop.src.view.inspections.InspectionsController'
    ],

    xtype: 'inspections',

    viewModel: {
        type: 'inspections'
    },

    controller: 'inspections',

    items: [
        /* include child components here */
    ]
});
