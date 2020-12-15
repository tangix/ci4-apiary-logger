/**
 * Created by msa on 2020-12-15.
 */
Ext.define('ApiaryLogger.desktop.src.components.grid.column.Date', {
    extend: 'Ext.grid.column.Date',

    xtype: 'apidatecolumn',
    config: {
        format: 'Y-m-d',
        width: 150,
    }

});
