Ext.define('MyApp.view.main.Bai6-Layout-4-Fit', {

    // extend, Ext.panel.Panel, layout fit, bodyPadding, items
    // xtype panel, title, html,  

    extend: 'Ext.panel.Panel',
    // xtype: 'Bai6-Layout-4-Fit',

    layout: 'fit',      // FIT = "KHỚP với CONTAINER" = RESPONSIVE
    bodyPadding: 25,

    items: [
        {
            xtype: 'panel',
            title: 'Inner Panel',
            html: '<p>This panel is fit within its container.</p>',
            bodyPadding: 15,
            border: true,
        },
    ]
})


// ========================================== CODE GỐC ======================================= //

// /**
//  * Demonstrates usage of a fit layout.
//  */
// Ext.define('KitchenSink.view.layout.Fit', {
//     extend: 'Ext.panel.Panel',
//     xtype: 'layout-fit',

//     requires: [
//         'Ext.layout.Fit'
//     ],

//     bodyPadding: 25,
//     height: 300,
//     layout: 'fit',
//     width: 400,

//     items: [{
//         xtype: 'panel',
//         title: 'Inner Panel',
//         html: '<p>This panel is fit within its container.</p>',
//         bodyPadding: 15,
//         ui: KitchenSink.profileName === 'neptune' ? 'light' : 'default',
//         border: true
//     }]
// });