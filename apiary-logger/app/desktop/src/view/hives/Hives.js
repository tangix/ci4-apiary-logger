/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.desktop.src.view.hives.Hives', {
    extend: 'Ext.grid.Grid',

    requires: [
        'ApiaryLogger.desktop.src.view.hives.HivesController',
        'ApiaryLogger.desktop.src.view.hives.HivesModel',
        'Ext.grid.column.Text'
    ],

    xtype: 'hives',

    viewModel: {
        type: 'hives'
    },

    controller: 'hives',

    bind: {
        store: '{hives}'
    },

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
                        label: 'Name',
                        required: true,
                        bind: {
                            value: '{obj.name}'
                        }
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Comment',
                        bind: {
                            value: '{obj.comment}'
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
                    tooltip: 'Add New Hive',
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

    columns: [
        {
            xtype: 'textcolumn',
            dataIndex: 'name',
            text: 'Name',
            width: 200
        },
        {
            xtype: 'textcolumn',
            dataIndex: 'queen_name',
            text: 'Queen',
            width: 200
        },
        {
            xtype: 'textcolumn',
            dataIndex: 'comment',
            text: 'Comment',
            flex: 1
        },
        {
            xtype: 'apidatetimecolumn',
            dataIndex: 'last_inspection',
            text: 'Last Inspection',
            width: 250
        },
        {
            xtype: 'column',
            width: 80,
            cell: {
                tools: {
                    edit: {
                        iconCls: 'x-fas fa-pencil-alt',
                        tooltip: 'Edit',
                        handler: 'onEdit'
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
