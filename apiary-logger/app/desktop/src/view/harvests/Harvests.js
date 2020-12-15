/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.desktop.src.view.harvests.Harvests', {
    extend: 'Ext.grid.Grid',

    requires: [
        'ApiaryLogger.desktop.src.view.harvests.HarvestsController',
        'ApiaryLogger.desktop.src.view.harvests.HarvestsModel',
        'Ext.field.Number',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.form.Panel',
        'Ext.data.summary.Average',
        'Ext.data.summary.Max',
        'Ext.grid.plugin.SummaryRow',
        'Ext.grid.filters.*'
    ],

    xtype: 'harvests',

    viewModel: {
        type: 'harvests'
    },

    controller: 'harvests',

    bind: {
        store: '{harvests}'
    },

    multiColumnSort: true,

    plugins: {
        gridsummaryrow: true,
        gridfilters: true
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus-circle',
                    tooltip: 'Add New Harvest',
                    handler: 'onAdd',
                    width: 40
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-sync',
                    handler: 'onStoreSync',
                    width: 40
                }
            ]
        },
    ],

    listeners: {
        'childdoubletap': 'onEdit',
    },

    editor: {
        xtype: 'dialog',
        defaultFocus: '#ok',
        scrollable: true,
        bodyPadding: 10,
        closable: true,
        items: [
            {
                xtype: 'formpanel',
                reference: 'editorform',
                defaults: {
                    labelAlign: 'left',
                    labelWidth: 150,
                    maxWidth: 500,
                    autoComplete: false,
                    autoCorrect: false
                },
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Subject',
                        required: true,
                        bind: {
                            value: '{obj.subject}'
                        }
                    },
                    {
                        xtype: 'selectfield',
                        bind: {
                            store: '{hives}',
                            value: '{obj.hive}'
                        },
                        required: true,
                        displayField: 'name',
                        valueField: 'id',
                        label: 'Hive',
                    },
                    {
                        xtype: 'numberfield',
                        format: '0',
                        decimals: 0,
                        minValue: 2019,
                        maxValue: 2036,
                        label: 'Season',
                        bind: {
                            value: '{obj.season}'
                        }
                    },
                    {
                        xtype: 'numberfield',
                        format: '0.00',
                        required: true,
                        minValue: 0,
                        decimals: 2,
                        label: 'Weight (kg)',
                        bind: {
                            value: '{obj.weight}'
                        }
                    },
                    {
                        xtype: 'numberfield',
                        format: '0.00',
                        required: true,
                        minValue: 10.0,
                        maxValue: 40.0,
                        decimals: 2,
                        label: 'Moisture (%)',
                        bind: {
                            value: '{obj.moisture}'
                        }
                    },

                ]
            }
        ],

        width: 500,

        // We are using standard buttons on the button
        // toolbar, so their text and order are consistent.
        buttons: {
            ok: 'onOK',
            cancel: 'onCancel'
        }
    },

    columns: [
        {
            xtype: 'numbercolumn',
            dataIndex: 'id',
            format: '0',
            text: 'Id',
        },
        {
            xtype: 'textcolumn',
            dataIndex: 'hive_name',
            text: 'Hive'
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'season',
            format: '0',
            text: 'Season',
            summary: 'max'
        },
        {
            xtype: 'textcolumn',
            dataIndex: 'subject',
            text: 'Subject',
            flex: 1
        },
        {
            xtype: 'numbercolumn',
            format: '0.00',
            dataIndex: 'weight',
            text: 'Weight (kg)',
            summary: 'sum',
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'moisture',
            text: 'Moisture (%)',
            summary: 'average',
        },
        {
            xtype: 'apidatetimecolumn',
            dataIndex: 'created_at',
            text: 'Date'
        },
        {
            xtype: 'column',
            width: 80,
            cell: {
                tools: {
                    edit: {
                        iconCls: 'x-fas fa-pencil-alt',
                        tooltip: 'Edit',
                        handler: 'onEdit',
                    },
                    trash: {
                        iconCls: 'x-fa fa-trash-alt',
                        tooltip: 'Delete',
                        handler: 'onDelete',
                        weight: 1
                    }
                }
            }
        }
    ]


});
