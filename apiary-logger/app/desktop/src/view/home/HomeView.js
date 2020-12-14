Ext.define('ApiaryLogger.view.home.HomeView', {
    xtype: 'homeview',
    cls: 'homeview',
    controller: {type: 'homeviewcontroller'},
    viewModel: {type: 'homeviewmodel'},
    requires: [],
    extend: 'Ext.Container',
    scrollable: true,
    html: [
        '<div style="user-select: text !important; width: 60%;">',
        '<img src="resources/desktop/apiary.jpeg" height="350px"><br>',
        '<h2>Welcome to Apiary Logger</h2>',
        '<p>',
        'This is a sample project demonstrating the use of Sencha Ext JS and CodeIgniter4 as a front- and back-end ',
        'system with RESTful communication.<br>',
        'Although it may look like a useful system for managing an apiary it is only meant as an example.',
        '</p>',
        '<p>',
        'For further details please see the <a href="' + Shared.getBackend() + 'docs/html/index.html" target="_blank">documentation</a> describing this project.',
        '</p>'

    ].join('')

});
