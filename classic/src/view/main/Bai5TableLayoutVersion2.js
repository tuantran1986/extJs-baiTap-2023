Ext .define('MyApp.view.main.Bai5TableLayoutVersion2', {
    extend: 'Ext.panel.Panel',      // extend panel

    title: 'Table Layout',          // tieu de
    layout: {
        type: 'table',              // layout table
        columns: 2,                 // số cột = 2
    },

    defaults: {
        bodyStyle: 'padding: 20px', // đặt style cho body
        border: true,               // viền
    },
    
    items: [
        {
            html: 'Cell A component',   // nội dung HTML
        },
        {
            html: 'Cell B component',
        },
        {
            html: 'colspan: 2',
            colspan: 2,                 // gộp cột
        },
        {
            html: 'rowspan: 2',
            rowspan: 2,                 // gộp dòng
        },
        {
            html: 'Cell C component',
        },
        {
            html: 'Cell D component',
        },
    ]
})