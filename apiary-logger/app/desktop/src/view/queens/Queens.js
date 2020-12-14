/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.desktop.src.view.queens.Queens', {
    extend: 'Ext.grid.Grid',

    requires: [
        'ApiaryLogger.desktop.src.view.queens.QueensController',
        'ApiaryLogger.desktop.src.view.queens.QueensModel',
        'Ext.field.Checkbox',
        'Ext.field.ComboBox',
        'Ext.field.Date',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.field.TextArea',
        'Ext.form.Panel',
        'Ext.grid.column.Text'
    ],

    xtype: 'queens',

    viewModel: {
        type: 'queens'
    },

    controller: 'queens',

    bind: {
        store: '{queens}'
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
                    tooltip: 'Add New Queen',
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
                        label: 'Name',
                        required: true,
                        bind: {
                            value: '{obj.name}'
                        }
                    },
                    {
                        xtype: 'selectfield',
                        options: [
                            {text: 'Carnica', value: 'Carnica'},
                            {text: 'Italian', value: 'Ligustica'},
                            {text: 'Nordic', value: 'Mellifera'},
                            {text: 'Buckfast', value: 'Buckfast'},
                        ],
                        label: 'Race',
                        required: true,
                        bind: {
                            value: '{obj.race}'
                        }
                    },
                    {
                        xtype: 'datefield',
                        label: 'Installed',
                        required: true,
                        bind: {
                            value: '{obj.installed}'
                        }
                    },
                    {
                        xtype: 'selectfield',
                        bind: {
                            store: '{hives}',
                            value: '{obj.hive}'
                        },
                        displayField: 'name',
                        valueField: 'id',
                        label: 'Hive',
                    },
                    {
                        xtype: 'textfield',
                        label: 'Marking',
                        bind: {
                            value: '{obj.marking}'
                        }
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Comment',
                        bind: {
                            value: '{obj.comment}'
                        }
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Ancestor',
                        reference: 'ancestor',
                        displayField: 'name',
                        valueField: 'id',
                        clearable: true,
                        queryMode: 'local',
                        bind: {
                            store: '{ancestors}',
                            value: '{obj.ancestor}'
                        }
                    },
                    {
                        xtype: 'checkbox',
                        label: 'Status',
                        boxLabel: 'Deceased',
                        bodyAlign: 'start',
                        bind: {
                            checked: '{obj.deceased}'
                        }
                    }
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
            xtype: 'textcolumn',
            dataIndex: 'name',
            text: 'Name',
            width: 150
        },
        {
            xtype: 'datecolumn',
            format: 'Y-m-d',
            dataIndex: 'installed',
            text: 'Installed'
        },
        {
            xtype: 'textcolumn',
            dataIndex: 'hive_name',
            text: 'Hive'
        },
        {
            xtype: 'booleancolumn',
            falseText: '',
            trueText: 'Yes',
            dataIndex: 'deceased',
            text: 'Deceased'
        },
        {
            xtype: 'textcolumn',
            dataIndex: 'comment',
            text: 'Comment',
            flex: 1
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
