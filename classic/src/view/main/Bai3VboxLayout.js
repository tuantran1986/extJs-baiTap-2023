Ext.define('MyApp.view.main.Bai3VboxLayout', {
    extend: 'Ext.panel.Panel',      // extend - panel = Ext.panel.Panel
    xtype: 'Bai3VboxLayout',

    layout: 'vbox',             // bố cục DỌC = Y = "vbox"
    bodyPadding: 10,            // padding cho toàn bộ BODY.
    frame: true,                // THÊM VIỀN - PANEL

    // THÊM VIỀN - PANEL
    defaults: {
        frame: true,            // THÊM VIỀN - PANEL
        bodyPadding: 10
    },

    // 
    items: [
        {
            title: 'Panel 1',
            width: '100%',
            flex: 1,            // theo chiều DỌC - Y
            margin: '0 0 10 0', // trên - phải - dưới - trái
            html: 'flex : 1'
        },
        {
            title: 'Panel 2',
            width: '100%',
            flex: 3,            // theo chiều DỌC - Y
            margin: '0 0 10 0',
            html: 'flex : 3'
        },
        {
            title: 'Panel 3',
            width: '100%',
            flex: 2,            // theo chiều DỌC - Y
            html: 'flex : 2'
        },
    ]

})