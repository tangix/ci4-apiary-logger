/**
 * Created by msa on 2020-12-15.
 */
Ext.define('ApiaryLogger.shared.src.model.Inspection', {
    extend: 'ApiaryLogger.model.Base',

    entityName: 'Inspection',
    idProperty: 'id',

    fields: [
        {name: 'id', type: 'integer', defaultValue: 0},
        'subject', 'note', 'image', 'hive_name',
        {name: 'hive', type: 'integer', defaultValue: 0},
        {name: 'completed', type: 'boolean', defaultValue: false},
        {name: 'eggs', type: 'boolean', defaultValue: false},
        {name: 'larvae', type: 'boolean', defaultValue: false},
        {name: 'queen', type: 'boolean', defaultValue: false},
        {name: 'created_at', type: 'date', dateFormat: 'Y-m-d H:i:s'}
    ]

});
