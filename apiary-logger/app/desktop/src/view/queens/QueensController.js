/**
 * Created by msa on 2020-12-14.
 */
Ext.define('ApiaryLogger.desktop.src.view.queens.QueensController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.queens',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    destroy: function () {
        Ext.destroy(this.editor);
        this.callParent();
    },

    onStoreSync: function () {
        this.getViewModel().getStore('queens').reload();
    },

    onCancel: function (button) {
        var me = this;
        me.getViewModel().get('obj').reject();
        me.editor.hide();
    },


    onOK: function (button) {
        var me = this;
        if (me.lookup('editorform').validate()) {
            me.getViewModel().get('obj').save({
                success: function () {
                    me.editor.hide();
                    me.onStoreSync();
                    Shared.success('Queen Saved');
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
        this.showEditor('Edit Queen', record);
    },

    onAdd: function () {
        var record = Ext.create('ApiaryLogger.shared.src.model.Queen');
        this.showEditor('Add Queen', record);
    },

    doDeleteObj: function (record) {
        var me = this;
        record.erase({
            success: function () {
                Shared.success('Queen Deleted');
                me.onStoreSync();
                me.onStoreSync();
            },
            failure: function() {

            }
        });
    },

    onDelete: function (component, location) {
        var me = this,
            record = location.record;

        if ((record.get('cnt') > 0) || (record.get('territoryCountriesCount') > 0)) {
            this.replaceObj(record).then(function (o) {
                Ext.Ajax.request({
                    method: 'POST',
                    url: Config.getBackend() + 'config/tageditors/territories/relink',
                    params: {
                        from: record.get('territoryID'),
                        to: o.v,
                        move: o.m === true ? 'yes' : 'no'
                    },
                    success: function (response) {
                        me.doDeleteObj(record);
                    },
                    failure: function () {

                    },
                    scope: me
                });

            }, function (e) {

            }).always(function () {

            });


        } else {
            Ext.Msg.confirm('Delete Queen ' + record.get('name') + '?',
                'Are you sure?', function (btn) {
                    if (btn === 'yes') {
                        me.doDeleteObj(record);
                    }
                }, me);
        }
    },


});
