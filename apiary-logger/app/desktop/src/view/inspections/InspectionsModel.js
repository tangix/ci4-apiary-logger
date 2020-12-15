/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.desktop.src.view.inspections.InspectionsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.inspections',

    stores: {
        hives: {
            sorters: [
                {
                    property: 'name',
                    direction: 'ASC'
                }
            ],
            model: 'Hive',
            autoLoad: true
        },
        inspections: {
            sorters: [
                {
                    property: 'name',
                    direction: 'ASC'
                }
            ],
            model: 'Inspection',
            autoLoad: true
        },
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});
