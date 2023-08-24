Ext.define('MyApp.view.main.Bai6-Layout-1-Vbox', {
    
    // extend, Ext.panel.Panel, layout: 'vbox', 
    // dedaults bodyPadding, border: true, items
    // title, html
    // flex: 1, 100, flex: 2: tham số phân chia chiều cao

    extend: 'Ext.panel.Panel',
    // xtype: 'Bai6-Layout-1-Vbox',

    layout: 'vbox', // bố cục dọc: flex 1, 100px, flex 2

    defaults: {
        bodyPadding: 10,
        border: true,
        width: 400,             // CYDB : "SET - WIDTH DEFAULTS = 400"
    },

    items: [
        {
            title: 'Panel-1',
            margin: '0 0 10 0',
            flex: 1,                // CYDB: "height - flex 1"
            html: 'flex: 1',            // content
        },
        {
            title: 'Panel-1',
            margin: '0 0 10 0',
            height: 100,            // CYDB: "height - 100"
            html: 'height: 100',        // content
        },
        {
            title: 'Panel-1',
            margin: '0 0 10 0',
            flex: 2,                // CYDB: "height - flex 2"
            html: 'flex: 2',            // content
        },
    ]
})