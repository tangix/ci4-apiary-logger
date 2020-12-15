/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.desktop.src.view.inspections.InspectionsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inspections',

    /**
     * Called when the view is created
     */
    init: function () {

    },

    destroy: function () {
        Ext.destroy(this.editor);
        this.callParent();
    },

    clearVMObj: function () {
        var me = this;
        // Clear the ViewModel object because of problems with the selectfield.
        Ext.defer(function () {
            me.getViewModel().set('obj', {});
        }, 200, me);
    },

    onStoreSync: function () {
        this.getViewModel().getStore('inspections').reload();
    },

    onCancel: function (button) {
        var me = this;
        me.getViewModel().get('obj').reject();
        me.editor.hide();
        me.clearVMObj();
    },


    onOK: function (button) {
        var me = this;
        if (me.lookup('editorform').validate()) {
            me.getViewModel().get('obj').save({
                success: function () {
                    me.editor.hide();
                    me.onStoreSync();
                    Shared.success('Inspection Saved');
                    me.clearVMObj();
                }
            });
        }
    },

    showEditor: function (title, record) {
        var me = this,
            view = this.getView(),
            dialog = this.editor;

        me.getViewModel().getStore('hives').reload();
        me.getViewModel().set('obj', record);

        if (!dialog) {
            dialog = Ext.apply({
                title: title,
                ownerCmp: view
            }, view.editor);

            this.editor = dialog = Ext.create(dialog);
        }
        dialog.show();
    },

    onEdit: function (component, location) {
        var record = location.record;
        this.showEditor('Edit Inspection', record);
    },

    onAdd: function () {
        var record = Ext.create('ApiaryLogger.shared.src.model.Inspection');
        record.set('created_at', new Date());
        this.showEditor('Add Inspection', record);
    },

    doDeleteObj: function (record) {
        var me = this;
        record.erase({
            success: function () {
                Shared.success('Inspection Deleted');
                me.onStoreSync();
            },
            failure: function () {

            }
        });
    },

    onDelete: function (component, location) {
        var me = this,
            record = location.record;

        Ext.Msg.confirm('Delete Inspection ' + record.get('id') + '?',
            'Are you sure?', function (btn) {
                if (btn === 'yes') {
                    me.doDeleteObj(record);
                }
            }, me);

    },

});
