/**
 * Created by msa on 2020-12-15.
 */
Ext.define('ApiaryLogger.desktop.src.components.grid.column.DateTime', {
    extend: 'Ext.grid.column.Date',

    xtype: 'apidatetimecolumn',
    config: {
        format: 'Y-m-d H:i:s',
        width: 200,
        groupable: false,
    }

});
