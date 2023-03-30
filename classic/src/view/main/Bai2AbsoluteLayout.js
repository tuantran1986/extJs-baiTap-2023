Ext.define('MyApp.view.main.Bai2AbsoluteLayout', {

    // 1. extend - từ - Ext.panel.Panel
    extend: 'Ext.panel.Panel',
    // 2.require - Ext.layout.container.Absolute
    requires: [
        'Ext.layout.container.Absolute'
    ],
    // XTYPE = ALIAS = EXPORT
    xtype: 'absolute-layout',

    // 3. layout: absolute
    layout: 'absolute',
    width: 800,
    height: 600,

    // 4. defaults : giá trị mặc định
    defaults: {
        bodyPadding: 15,
        width: 400,
        height: 200,
        frame: true
    },

    // items : content - nội dung
    items: [
        {
            // title : tiêu đề
            title: 'Panel Absolute 1',
            // x : vị trí ngang
            x: 50,
            // y : vị trí dọc
            y: 50,
            // html : viết nội dung có thẻ HTML
            html: 'Positioned at X=50, Y=50'
        },
        {
            title: 'Panel Absolute 2',
            x: 125,
            y: 125,
            html: 'Positioned at X=125, Y=125'
        }
    ]
})