Ext.define('MyApp.view.main.KitchenSink.DataBinding_10_formatter_view', {
    // SUMMARY: 
        // defaultType displayfield
        // defaultType numberfield
        // x: number("0") : nguyen
        // y: number("0.00") : so thap phan 2 dau phay
        // (x * y * 100):fileSize:lowercase : fileSize - chữ thường
        // (x*y):currency("USD":lowercase, (x/y):round(0):lessThanElse(20, 2, 5)) : tiền tệ - chữ thường - làm tròn - nhỏ hơn

    extend: 'Ext.panel.Panel',
    xtype: 'DataBinding_10_formatter_view',

    viewModel: {
        data: {
            x: 10.52,
            y: 10.52,
        }
    },

    title: 'FORMATTER',
    defaultType: 'displayfield',    // cy
    width: 500,
    bodyPadding: 10,
    frame: true,

    // FORMATTER
    items: [
        {
            label: 'Single',
            // format: number 0 = nguyen, 0.00 = so thap phan 2 dau phay
            bind: '{ (x > y) ? (x: number("0")) : (y: number("0.00"))}',
        },
        {
            fieldLabel: 'Chained',
            // format: fileSize - chữ thường
            bind: '{ (x * y * 100):fileSize:lowercase }'
        },
        {
            fieldLabel: 'Nested',
            // format nested: currency lowercase round lessThanElse: tiền tệ - chữ thường - làm tròn - nhỏ hơn
            bind: '{ (x*y):currency("USD":lowercase, (x/y):round(0):lessThanElse(20, 2, 5)) }'
        }
    ],

    tbar: {
        ui: 'footer',               // cy
        defaultType: 'numberfield', // cy
        defaults: {
            labelWidth: 20,
            margin: '0 0 0 10',
            width: 120
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

// /**
//  * Data binding expressions can use formatters to process their bound
//  * values in various ways (for example, "{x:round(2)}" rounds "x" to
//  * 2 decimal places).
//  * 
//  * Formatters can be chained ("{x:round(2):currency:lowercase}").
//  * 
//  * Formatters can be nested in any expression including parameters to
//  * other formatters.
//  */
// Ext.define('KitchenSink.view.binding.AlgebraFormatters', {
//     extend: 'Ext.panel.Panel',
//     xtype: 'binding-algebra-formatters',

//     title: 'Formatters',

//     width: 370,
//     bodyPadding: '10 20',
//     frame: true,

//     viewModel: {
//         data: {
//             x: 10.52,
//             y: 10.52
//         }
//     },

//     items: [{
//         fieldLabel: 'Single',
//         bind: '{ ( x > y ) ? ( x:number("0") ) : ( (y/2):number("0.00") ) }'
//     }, {
//         fieldLabel: 'Chained',
//         bind: '{ (x*y*100):fileSize:lowercase }'
//     }, {
//         fieldLabel: 'Nested',
//         bind: '{ (x*y):currency( "USD":lowercase, (x/y):round(0):lessThanElse(20, 2, 5) ) }'
//     }],

//     defaultType: 'displayfield',

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


