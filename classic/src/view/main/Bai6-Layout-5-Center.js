Ext.define('MyApp.view.main.Bai6-Layout-5-Center', {

    // extend, Ext.panel.Panel, layout center, bodyPadding, items
    // xtype panel, title, html, border true, scrollable true

    extend: 'Ext.panel.Panel',
    // xtype: 'Bai6-Layout-5-Center',

    layout: 'center',      // CENTER = "CĂN GIỮA"
    bodyPadding: 25,

    items: [
        {
            xtype: 'panel',
            title: '75% of container height and width',
            html: '<p>This panel is fit within its container.</p>',
            bodyPadding: '20 0',
            width: '75%',
            height: '75%',
            border: true,
            scrollable: true,

            layout: 'center',   // CENTER = "CĂN GIỮA"
            items: [
                {
                    xtype: 'panel',
                    title: 'Inner Centered Panel',
                    html: 'Fixed 300px wide and full height. The container panel will also autoscroll if narrower than 300px.',
                    bodyPadding: '10',
                    width: 300,
                    height: '100%',
                    boder: true,
                    scrollable: true,
                }
            ]
        },
    ]
})


// ========================================== CODE GỐC ======================================= //

// /**
//  * Demonstrates usage of a center layout.
//  */
// Ext.define('KitchenSink.view.layout.Center', {
//     extend: 'Ext.Container',
//     xtype: 'layout-center',

//     requires: [
//         'Ext.layout.Center'
//     ],

//     height: 500,
//     layout: 'center',
//     width: 500,

//     items: [{
//         xtype: 'panel',
//         title: '75% of container height and width',
//         border: true,
//         layout: 'center',
//         scrollable: true,
//         width: '75%',
//         height: '75%',
//         bodyPadding: '20 0',
//         items: [{
//             xtype: 'panel',
//             title: 'Inner Centered Panel',
//             html: 'Fixed 300px wide and full height. The container panel will also autoscroll if narrower than 300px.',
//             width: 300,
//             height: '100%',
//             border: true,
//             bodyPadding: '10 20'
//         }]
//     }]
// });