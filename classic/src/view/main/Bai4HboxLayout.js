Ext.define('MyApp.view.main.Bai4HboxLayout', {
    extend: 'Ext.panel.Panel',      // extend - panel = Ext.panel.Panel
    xtype: 'Bai4HboxLayout',

    layout: 'hbox',             // bố cục NGANG = X = "hbox"
    bodyPadding: 10,            // padding cho toàn bộ BODY.
    // padding: 10,            // padding - KHÔNG ĂN CODE

    // DEFAULTS = thuộc tính áp dụng cho TẤT CẢ ITEMS !!!
    defaults: {
        frame: true,            // THÊM VIỀN - PANEL 
        bodyPadding: 10
    },

    // 
    items: [
        {
            title: 'Panel 1',
            width: '100%',
            flex: 1,            // theo chiều NGANG - Y
            margin: '0 10 0 0', // trên - phải - dưới - trái
            html: 'flex : 1',    // html = nội dung - content
            // frame: true,
            // bodyPadding: 10,
        },
        {
            title: 'Panel 2',
            width: '100%',
            flex: 3,            // theo chiều NGANG - Y
            margin: '0 10 0 0',
            html: 'flex : 3'
        },
        {
            title: 'Panel 3',
            width: '100%',
            flex: 2,            // theo chiều NGANG - Y
            html: 'flex : 2'
        },
    ]
})