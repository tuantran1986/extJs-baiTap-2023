Ext.define('MyApp.view.main.KitchenSink.DataBinding_4_model_formulas_view', {
    // SUMMARY: viewModel type modelName data x
    // xtype numberfield fieldLabel bind value
    // xtype displayfield fieldLabel bind value

    extend: 'Ext.panel.Panel',
    xtype: 'DataBinding_4_model_formulas_view',

    viewModel: {
        type: 'DataBinding_4_model_formulas_model',
        data: {
            x: 0,
        },
    },

    title: 'FORMULAS - MODEL',
    width: 500,
    bodyPadding: 10,

    items: [
        {
            fieldLabel: 'Number: x = ',
            xtype: 'numberfield',
            bind: {
                value: '{x}'
            }
        },
        {
            fieldLabel: 'x * 2 = ',
            xtype: 'displayfield',
            labelAlign: 'right',
            bind: {
                value: '{twice}'
            }
        },
        {
            fieldLabel: 'x * 4 = ',
            xtype: 'displayfield',
            labelAlign: 'right',
            bind: {
                value: '{squad}'
            }
        },
    ],
})


// ========================================== CODE GỐC ======================================= //


// /**
//  * This example shows data binding using formulas (calculated properties). This example
//  * also demonstrates automatic dependency resolution between formulas that depend on each
//  * other's values.
//  */
// Ext.define('KitchenSink.view.binding.Formulas', {
//     extend: 'Ext.panel.Panel',
//     alias: 'widget.binding-formulas',

//     title: 'View Model Formulas',

//     width: 370,
//     bodyPadding: 10,

//     viewModel: {
//         // Formulas are defined by the ViewModel:
//         type: 'binding-formulas',
//         data: {
//             x: 10
//         }
//     },

//     items: [{
//         xtype: 'numberfield',
//         fieldLabel: 'Number',
//         bind: '{x}'
//     }, {
//         xtype: 'displayfield',
//         fieldLabel: 'Calculated',
//         bind: '{x} * 2 = {twice} / {x} * 4 = {quad}'
//     }]
// });