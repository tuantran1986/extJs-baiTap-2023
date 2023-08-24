Ext.define('MyApp.view.main.KitchenSink.DataBinding_6_twoway_formulas_view', {
    
    // "CODE CHƯA CHẠY"
    // SUMMARY: 
        // frame resizable
        // defaultType textfield numberfield slider datefield
        // minValue maxValue format d/m/Y
        // publishOnComplete

    extend: 'Ext.panel.Panel',
    xtype: 'DataBinding_6_twoway_formulas_view',

    viewModel: {
        type: 'DataBinding_6_twoway_formulas_model',
        data: {
            birthday: new Date(1986, 9, 28),
            firstName: 'Tran',
            lastName: 'Tuan',
        }
    },

    title: 'Two-way formulas',

    width: 500,
    bodyPadding: 10,
    frame: true,
    resizable: true,

    defaultType: 'textfield',   // all xtype: 'textfield'
    items: [
        {
            fieldLabel: 'First Name',
            bind: {
                value: '{firstName}'
            },
        },
        {
            fieldLabel: 'Last Name',
            bind: {
                value: '{lastName}'
            },
        },
        {
            fieldLabel: 'Full Name',
            bind: {
                value: '{fullName}'
            },
        },
        // 
        {
            xtype: 'numberfield',   //
            width: 100,
            minValue: 0,            //
            bind: {
                value: '{age}',
            }
        },
        {
            xtype: 'slider',
            width: 80,
            margin: '0 0 0 8',
            bind: {
                value: '{age}'
            },
        },
        {
            xtype: 'slider',            //
            width: 80,
            margin: '0 0 0 8',
            publishOnComplete: false,   //
            bind: {
                value: '{age}'
            },
        },
        // 
        {
            fieldLabel: 'Birth Date',
            xtype: 'datefield',     //
            format: 'm/d/Y',        //
            maxValue: new Date(),   //
            bind: {
                value: '{birthday}'
            }
        }
    ]
})


// ========================================== CODE GỐC ======================================= //


// /**
//  * This example shows data binding using formulas that can be edited. That is, "virtual
//  * properties"!
//  */
// Ext.define('KitchenSink.view.binding.TwoWayFormulas', {
//     extend: 'Ext.panel.Panel',
//     xtype: 'binding-two-way-formulas',

//     title: 'Two-Way Formulas',

//     manageHeight: false,
//     width: 450,
//     frame: true,
//     resizable: true,

//     viewModel: {
//         // Formulas are defined by the ViewModel:
//         type: 'binding-two-way-formulas',

//         data: {
//             birthDate: new Date(1971, 4, 3),
//             firstName: 'John',
//             lastName: 'Doe'
//         }
//     },

//     // The form layout makes labelWidth automatic
//     layout: 'form',

//     defaultType: 'textfield',
//     items: [{
//         fieldLabel: 'First Name',
//         bind: '{firstName}'
//     }, {
//         fieldLabel: 'Last Name',
//         bind: '{lastName}'
//     }, {
//         fieldLabel: 'Full Name (virtual)',
//         bind: '{fullName}'
//     }, {
//         xtype: 'fieldcontainer',
//         fieldLabel: 'Age',
//         layout: {
//             type: 'hbox',
//             align: 'center'
//         },
//         items: [{
//             xtype: 'numberfield',
//             width: 100,
//             bind: '{age}',
//             minValue: 0
//         }, {
//             xtype: 'slider',
//             width: 80,
//             margin: '0 0 0 8',
//             bind: '{age}'
//         }, {
//             xtype: 'slider',
//             width: 80,
//             publishOnComplete: false,
//             margin: '0 0 0 8',
//             bind: '{age}'
//         }]
//     }, {
//         xtype: 'datefield',
//         format: 'm/d/Y',
//         fieldLabel: 'Birth Date',
//         bind: '{birthDate}',
//         maxValue: new Date()
//     }]
// });