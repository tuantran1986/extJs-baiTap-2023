Ext .define('MyApp.view.main.Bai6CenterLayout-2', {
    extend: 'Ext.Container',            // extend Ext Container

    xtype: 'Bai6CenterLayout-2',        // export - TÊN VIEW

    title: 'Center Layout',     // tiêu đề
    layout: 'center',           // BỐ CỤC - "CĂN GIỮA"
    width: 280,                 // rộng - PX
    height: 260,                

    // nội dung
    items: [
        {
            xtype: 'panel',
            title: '75% - of container hight and width',
            layout: 'center',       // BỐ CỤC - "CĂN GIỮA"
            scrollable: true,       // CHO PHÉP - SCROLL
            border: true,           // viền

            width: '75%',           // rộng - %
            height: '75%',          // cao - %
            bodyPadding: '10 20',   // padding

            items: [
                {
                    xtype: 'panel',
                    title: 'Inner Centered Panel',
                    html: 'fixed 300px width + full length',
                    width: 300,         
                    height: '100%',             // cao - %
                    border: true,               
                    bodyPadding: '10 20'
                }
            ]           
        }
    ]
})