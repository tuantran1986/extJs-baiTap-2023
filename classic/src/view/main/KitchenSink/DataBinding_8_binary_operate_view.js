Ext.define('MyApp.view.main.KitchenSink.DataBinding_8_binary_operate_view', {
    // SUMMARY: có thể viết biểu thức tính toán + login bên trong BIND: '{ OPERATOR }'
        // '{x + y}' '{x * y}' '{x >= y}' 
        // '{x == y}' '{x != y}' '{x !== y}' 
        // '{x > y && y >= 10}' '{x > y || y >= 10}'
        // frame true xtype displayfield bind value
        // tbar ui footer
        // defaultType numberfield 
        // defaults labelWidth width margin

    extend: 'Ext.panel.Panel',
    xtype: 'DataBinding_8_binary_operate_view',

    viewModel: {
        data: {
            x: 10,
            y: 10,
        }
    },
    // controller: 'MAU_VIEW_CONTROLLER',

    title: 'BINARY OPERATORS',
    layout: 'hbox',
    width: '100%',
    bodyPadding: 10,
    frame: true,

    items: [
        // dong 1
        {
            // default = layout vbox
            layout: 'vbox',
            flex: 1,
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'x + y',
                    bind: {
                        value: '{x + y}'
                    },
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'x * y',
                    bind: {
                        value: '{x * y}'
                    },
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'x > y',
                    bind: {
                        value: '{x > y}'
                    },
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'x >= y',
                    bind: {
                        value: '{x >= y}'
                    },
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'x == y',
                    bind: {
                        value: '{x == y}'
                    },
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'x > y && y >= 10',
                    bind: {
                        value: '{x > y && y >= 10}'
                    },
                },
            ]
        },
        // dong 2
        {
            // default = layout vbox
            layout: 'vbox',
            flex: 1,
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'x - y',
                    bind: {
                        value: '{x - y}'
                    },
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'x / y',
                    bind: {
                        value: '{x / y}'
                    },
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'x < y',
                    bind: {
                        value: '{x < y}'
                    },
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'x != y',
                    bind: {
                        value: '{x != y}'
                    },
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'x !== y',
                    bind: {
                        value: '{x !== y}'
                    },
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'x > y || y >= 10',
                    bind: {
                        value: '{x > y || y >= 10}'
                    },
                },
            ],
        },
    ],

    // TOP BAR
    tbar: {
        ui: 'footer',
        defaultType: 'numberfield',
        defaults: {
            labelWidth: 20,
            margin: '0 0 0 10',
            width: 120,
        },

        items: [
            {
                fieldLabel: 'x',
                bind: {
                    value: '{x}'
                },
            },
            {
                fieldLabel: 'y',
                bind: {
                    value: '{y}'
                },
            },
        ]
    }
})


// ========================================== CODE GỐC ======================================= //


// /**
//  * Data binding expressions can use binary operators (+, -, *, /, etc.)
//  * to convert their bound value into the desired replacement.
//  */
// Ext.define('KitchenSink.view.binding.AlgebraBinary', {
//     extend: 'Ext.panel.Panel',
//     xtype: 'binding-algebra-binary',

//     title: 'Binary operators',

//     width: 470,
//     layout: 'hbox',
//     bodyPadding: '10 20',
//     frame: true,

//     viewModel: {
//         data: {
//             x: 10,
//             y: 10
//         }
//     },

//     items: [{
//         items: [{
//             fieldLabel: 'x + y',
//             bind: '{x + y}'
//         }, {
//             fieldLabel: 'x * y',
//             bind: '{x * y}'
//         }, {
//             fieldLabel: 'x > y',
//             bind: '{x > y}'
//         }, {
//             fieldLabel: 'x >= y',
//             bind: '{x >= y}'
//         }, {
//             fieldLabel: 'x == y',
//             bind: '{x == y}'
//         }, {
//             fieldLabel: 'x === y',
//             bind: '{x === y}'
//         }, {
//             fieldLabel: 'x > y && y >= 10',
//             bind: '{x > y && y >= 10}'
//         }]
//     }, {
//         items: [{
//             fieldLabel: 'x - y',
//             bind: '{x - y}'
//         }, {
//             fieldLabel: 'x / y',
//             bind: '{x / y}'
//         }, {
//             fieldLabel: 'x < y',
//             bind: '{x < y}'
//         }, {
//             fieldLabel: 'x <= y',
//             bind: '{x <= y}'
//         }, {
//             fieldLabel: 'x != y',
//             bind: '{x != y}'
//         }, {
//             fieldLabel: 'x !== y',
//             bind: '{x !== y}'
//         }, {
//             fieldLabel: 'x > y || y >= 10',
//             bind: '{x > y || y >= 10}'
//         }]
//     }],

//     defaults: {
//         border: false,
//         flex: 1,
//         layout: 'anchor',
//         defaultType: 'displayfield',
//         defaults: {
//             anchor: '0'
//         }
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

// Lookup

