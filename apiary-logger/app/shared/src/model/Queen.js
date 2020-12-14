/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.shared.src.model.Queen', {
    extend: 'ApiaryLogger.model.Base',

    entityName: 'Queen',
    idProperty: 'id',

    fields: [
        {name: 'id', type: 'integer', defaultValue: 0},
        'name',
        {name: 'installed', type: 'date', dateFormat: 'Y-m-d'},
        'race', 'comment',
        {name: 'hive', type: 'integer', defaultValue: 0},
        {name: 'ancestor', type: 'integer', defaultValue: 0},
        {name: 'deceased', type: 'boolean', defaultValue: false},
        'hive_name'
    ]
});
