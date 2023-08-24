Ext.define('MyApp.view.main.KitchenSink.DataBinding_9_ternary_operate_view', {
    // SUMMARY: 
    // '{ (x > y) ? "X is greater" : (x == y ? "X equal Y" : "Y is greater")}'
    // tbar defaultType numberfield fieldLabel x bind '{x}'

    extend: 'Ext.panel.Panel',
    xtype: 'DataBinding_9_ternary_operate_view',

    viewModel: {
        data: {
            x: 10,
            y: 10,
        }
    },

    width: 500,
    bodyPadding: 10,
    frame: true,

    // KẾT QUẢ:
    bind: {
        html: '{ (x > y) ? "X is greater" : (x == y ? "X equal Y" : "Y is greater")}'
    },

    // topbar
    tbar: {
        ui:'footer',                // ui
        defaultType: 'numberfield', // mac dinh kieu so
        defaults: {
            labelWidth: 20,
            margin: '0 0 0 10',
            width: 120,
        },

        items: [
            {
                fieldLabel: 'x',
                bind: '{x}'
            },
            {
                fieldLabel: 'y',
                bind: '{y}'
            },
        ]
    }
})


// ========================================== CODE GỐC ======================================= //


// Details
// /**
//  * Data binding expressions can use the ternary operator (that is, ?:)
//  * to convert their bound value into the desired replacement.
//  */
// Ext.define('KitchenSink.view.binding.AlgebraTernary', {
//     extend: 'Ext.panel.Panel',
//     xtype: 'binding-algebra-ternary',

//     title: 'Ternary operators',

//     width: 370,
//     bodyPadding: '40 10',
//     bodyStyle: 'font-size: 3em; text-align: center',
//     frame: true,

//     viewModel: {
//         data: {
//             x: 10,
//             y: 11
//         }
//     },

//     bind: {
//         html: '{x > y ? "x is greater" : (x == y ? "x equals y" : "y is greater")}'
//     },

//     tbar: {
//         ui: 'footer',
//         defaultType: 'numberfield',
//         defaults: {
//             labelWidth: 20,
//             margin: '0 0 0 10',
//             width: 120
//         },

//         items: [{
//             fieldLabel: 'x',
//             bind: '{x}'
//         }, {
//             fieldLabel: 'y',
//             bind: '{y}'
//         }]
//     }
// });