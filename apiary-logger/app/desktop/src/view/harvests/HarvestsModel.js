/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.desktop.src.view.harvests.HarvestsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.harvests',

    stores: {
        harvests: {
            sorters: [
                {
                    property: 'name',
                    direction: 'ASC'
                }
            ],
            model: 'Harvest',
            autoLoad: true
        },
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
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});
