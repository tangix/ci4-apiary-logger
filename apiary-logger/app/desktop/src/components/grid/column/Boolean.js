/**
 * Created by msa on 2020-12-15.
 */
Ext.define('ApiaryLogger.desktop.src.components.grid.column.Boolean', {
    extend: 'Ext.grid.column.Boolean',

    xtype: 'apibooleancolumn',
    config: {
        trueText: 'Yes',
        falseText: '',
        width: 100
    }

});
