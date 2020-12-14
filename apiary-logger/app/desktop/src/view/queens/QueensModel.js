/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.desktop.src.view.queens.QueensModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.queens',

    stores: {
        queens: {
            sorters: [
                {
                    property: 'name',
                    direction: 'ASC'
                }
            ],
            model: 'Queen',
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

    links: {
        obj: {
            type: 'Queen',
            create: true
        }
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});
