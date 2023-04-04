Ext.define('MyApp.view.main.Bai7FitLayout-2', {
    // extend: 'Ext.container.Container',
    extend: 'Ext.panel.Panel',
    title: 'Fit Layout',
    
    requires: [
        'Ext.layout.Fit'
    ],


    width: 300,
    height: 150,
    layout: 'fit',  // bố cục chứa 1 PHẦN TỬ - tự động tràn đầy Container

    // CYDB - ITEMS : không phải mảng - chỉ có 1 phần tử
    items: [
        {
            xtype: 'panel',
            title: 'Inner Panel',
            html: 'This is the inner panel content',
            bodyPadding: 20,
            border: true
        }
    ],

    renderTo: Ext.getBody()
})