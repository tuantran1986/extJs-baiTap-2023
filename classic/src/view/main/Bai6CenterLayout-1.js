Ext .define('MyApp.view.main.Bai6CenterLayout-1', {
    extend: 'Ext.Container',            // extend Ext Container
    // extend: 'Ext.panel.Panel',

    title: 'Center Layout', // tiêu đề
    layout: 'center',       // bố cục căn giữa
    items: [
        {
            title: 'Centered Content',
            html: 'content html - layout - center',
            width: '75%',               // rộng
            height: 200,                // cao
            bodyPadding: '20',          // padding
            border: true,               // viền
        }
    ]
})