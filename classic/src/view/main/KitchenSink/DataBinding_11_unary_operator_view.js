Ext.define('MyApp.view.main.KitchenSink.DataBinding_11_unary_operator_view', {
    // SUMMARY: 
        // '{!x}'                               : nghich đảo - boolean
        // '{+x}',                              : giữ nguyên dấu - âm dương
        // '{-x}',                              : đảo dấu - âm dương
        // '{@Ext.versions.ext.version}',       : @ biến global
        
    extend: 'Ext.panel.Panel',
    xtype: 'DataBinding_11_unary_operator_view',

    viewModel: {
        data: {
            x: 1
        }
    },

    defaultType: 'displayfield',
    layout: 'form',
    frame: true,
    width: 500,
    bodyPadding: 10,

    items: [
        {
            fieldLabel: 'Negate (!x)',
            bind: '{!x}',                   // nghich đảo - boolean
        },
        {
            fieldLabel: 'Unary - plus (+x)',
            bind: '{+x}',                   // giữ nguyên dấu - âm dương
        },
        {
            fieldLabel: 'Unary - minus (-x)',
            bind: '{-x}',                   // đảo dấu - âm dương
        },
        {
            fieldLabel: 'Globals',
            bind: 'EXT JS version: {@Ext.versions.ext.version}',    // @ biến global
        },
    ],

    tbar: {
        ui: 'footer',
        items: [
            {
                xtype: 'numberfield',
                fieldLabel: 'x',
                labelWidth: 20,
                width: 120,
                bind: '{x}',
            },
        ]
    }
})


// ========================================== CODE GỐC ======================================= //


// /**
//  * Data binding expressions can use the unary operators (!, +, - and @)
//  * to convert their bound value into the desired replacement. The first
//  * three are standard JavaScript operators.
//  *
//  * The "@" operator allows a bind expression to use a global variable
//  * instead of a bound value. Be aware that changes to global variables
//  * are not tracked by the bind system but can be useful for constants.
//  */
// Ext.define('KitchenSink.view.binding.AlgebraUnary', {
//     extend: 'Ext.panel.Panel',
//     xtype: 'binding-algebra-unary',

//     title: 'Unary operators',

//     width: 370,
//     bodyPadding: '10 20',
//     frame: true,
//     layout: 'form',

//     viewModel: {
//         data: {
//             x: 1
//         }
//     },

//     items: [{
//         fieldLabel: 'Negate (!x)',
//         bind: '{!x}'
//     },{
//         fieldLabel: 'Unary plus (+x)',
//         bind: '{+x}'
//     },{
//         fieldLabel: 'Unary minus (-x)',
//         bind: '{-x}'
//     },{
//         fieldLabel: 'Globals',
//         bind: 'Ext JS version: {@Ext.versions.ext.version}'
//     }],

//     defaultType: 'displayfield',

//     tbar: {
//         ui: 'footer',
//         items: [{
//             xtype: 'numberfield',
//             fieldLabel: 'x',
//             bind: '{x}',

//             labelWidth: 20,
//             margin: '0 0 0 10',
//             width: 120
//         }]
//     }
// });