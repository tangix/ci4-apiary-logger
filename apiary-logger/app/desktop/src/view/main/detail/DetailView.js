Ext.define('ApiaryLogger.view.main.detail.DetailView', {
	extend: 'Ext.Container',
	xtype: 'detailview',
  cls: 'detailview',
  layout: 'fit',
  items: [
    {
      xtype: 'container', 
      style: 'background:white', 
      html: '<div style="padding:10px;font-size:16px;">' +
          'This is just an empty space for the moment' +
          '</div>'
    }
  ]
})
