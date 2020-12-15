/**
 * Created by msa on 2020-12-15.
 */
Ext.define('ApiaryLogger.shared.src.model.Harvest', {
    extend: 'ApiaryLogger.model.Base',

    entityName: 'Harvest',
    idProperty: 'id',

    fields: [
        {name: 'id', type: 'integer', defaultValue: 0},
        'subject', 'hive_name',
        {name: 'hive', type: 'integer', defaultValue: 0},
        {name: 'season', type: 'integer', defaultValue: 0},
        {name: 'weight', type: 'number', defaultValue: 0.0},
        {name: 'moisture', type: 'number', defaultValue: 0.0},
        {name: 'created_at', type: 'date', dateFormat: 'Y-m-d H:i:s'}
    ]
});
