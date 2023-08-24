Ext.define('MyApp.view.main.Bai6-Layout-2-Hbox', {
    
    // extend, Ext.panel.Panel, layout: 'hbox', 
    // dedaults bodyPadding, border: true, items
    // title, html
    // flex: 1, 100, flex: 2: tham số phân chia chiều rộng

    extend: 'Ext.panel.Panel',
    // xtype: 'Bai6-Layout-2-Hbox',

    layout: 'hbox', // bố cục NGANG: flex 1, 100px, flex 2

    defaults: {
        bodyPadding: 10,
        border: true,
        height: 400,                // CYDB : "SET - HEIGHT DEFAULTS = 400"
    },

    items: [
        {
            title: 'Panel-1',
            margin: '0 0 10 0',
            flex: 1,                // CYDB: "width - flex 1"
            html: 'flex: 1',            // content
        },
        {
            title: 'Panel-1',
            margin: '0 0 10 0',
            width: 100,             // CYDB: "width - 100"
            html: 'width: 100',         // content
        },
        {
            title: 'Panel-1',
            margin: '0 0 10 0',
            flex: 2,                // CYDB: "width - flex 2"
            html: 'flex: 2',            // content
        },
    ]
})