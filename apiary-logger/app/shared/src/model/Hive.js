/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.shared.src.model.Hive', {
    extend: 'ApiaryLogger.model.Base',

    entityName: 'Hive',
    idProperty: 'id',

    fields: [
        {name: 'id', type: 'integer', defaultValue: 0},
        'name',
        'comment',
    ]

});
