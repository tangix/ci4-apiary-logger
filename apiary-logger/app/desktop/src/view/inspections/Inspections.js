/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.desktop.src.view.inspections.Inspections', {
    extend: 'Ext.grid.Grid',

    requires: [
        'ApiaryLogger.desktop.src.view.inspections.InspectionsController',
        'ApiaryLogger.desktop.src.view.inspections.InspectionsModel',
        'Ext.field.CheckboxGroup',
        'Ext.field.Date',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.field.TextArea',
        'Ext.form.Panel',
        'Ext.grid.column.Check',
        'Ext.grid.column.Number',
        'Ext.grid.column.Text'
    ],

    xtype: 'inspections',

    viewModel: {
        type: 'inspections'
    },

    controller: 'inspections',

    bind: {
        store: '{inspections}'
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
                        xtype: 'textareafield',
                        label: 'Notes',
                        bind: {
                            value: '{obj.note}'
                        }
                    },
                    {
                        xtype: 'checkboxgroup',
                        label: 'Observations',
                        items: [
                            {
                                label: 'Eggs',
                                bodyAlign: 'start',
                                bind: {
                                    checked: '{obj.eggs}'
                                }
                            },
                            {
                                label: 'Larvae',
                                bodyAlign: 'start',
                                bind: {
                                    checked: '{obj.larvae}'
                                }
                            },
                            {
                                label: 'Queen',
                                bodyAlign: 'start',
                                bind: {
                                    checked: '{obj.queen}'
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'checkbox',
                        bodyAlign: 'start',
                        label: 'Completed',
                        bind: {
                            checked: '{obj.completed}'
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
                    tooltip: 'Add New Inspection',
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
            xtype: 'numbercolumn',
            format: '0',
            dataIndex: 'id',
            text: 'Id'
        },
        {
            xtype: 'textcolumn',
            dataIndex: 'hive_name',
            text: 'Hive'
        },
        {
            xtype: 'textcolumn',
            dataIndex: 'subject',
            text: 'Subject',
            flex: 1
        },
        {
            xtype: 'apibooleancolumn',
            dataIndex: 'eggs',
            text: 'Eggs'
        },
        {
            xtype: 'apibooleancolumn',
            dataIndex: 'larvae',
            text: 'Larvae'
        },
        {
            xtype: 'apibooleancolumn',
            dataIndex: 'queen',
            text: 'Queen'
        },
        {
            xtype: 'apibooleancolumn',
            dataIndex: 'queen',
            text: 'Queen'
        },
        {
            xtype: 'apidatetimecolumn',
            dataIndex: 'created_at',
            text: 'Inspection Date'
        },
        {
            xtype: 'checkcolumn',
            dataIndex: 'completed',
            text: 'Completed',
            listeners: {
                'checkchange': function (component, rowIndex, checked, record, e, eOpts) {
                    record.save();
                }
            }
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
