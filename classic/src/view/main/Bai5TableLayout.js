Ext.define('MyApp.view.main.Bai5TableLayout', {
    extend: 'Ext.panel.Panel',  // PANEL

    layout: {
        type: 'table',  // bố cục TABLE
        columns: 3,     // có 3 cột
    },

    scrollable: true,

    // THUỘC TÍNH MẶC ĐỊNH - CHO CÁC ITEMS
    defaults: {
        bodyPadding: '15 20',   // khoảng cách
        border: true,           // có viền
    },

    // NỘI DUNG
    items: [
        // dòng 1 + dòng 2
        {
            html: 'cell A content',
            rowspan: 2,             // GỘP DÒNG
        },
        {
            html: 'cell B content',
            colspan: 2,             // GỘP CỘT
        },
        {
            html: 'cell C content', // CONTENT
            cellCls: 'hightlight'
        },
        {
            html: 'cell D content', 
        },
        // dòng 3
        {
            html: 'cell E content',
            colspan: 2,
        },
        {
            html: 'cell F content', 
        },
    ]
})