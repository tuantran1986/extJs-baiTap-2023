Ext.define('MyApp.view.main.KitchenSink.FormField_3_combobox_1_simple_view', {
    // SUMMARY: 

    extend: 'Ext.form.Panel',
    xtype: 'FormField_3_combobox_1_simple_view',

    viewModel: {
        type: 'FormField_3_combobox_1_simple_model',
        data: {
        }
    },

    title: 'Simple combobox',
    layout: 'form',
    width: 500,
    bodyPadding: 10,

    items: [
        {
            xtype: 'fieldset',
            layout: 'anchor',
            items: [
                // 1. title
                {
                    xtype: 'component',
                    anchor: '100%',
                    // cydb - html khai báo mảng
                    html: [
                        '<h3>Locally loaded data</h3>',
                        '<p>This combobox uses local data from a JS array</p>',
                    ],
                },
                // 2. value
                {
                    fieldLabel: 'Selected State',
                    xtype: 'displayfield',
                    bind: '{states.value}',
                },
                // 3. select = combobox
                {
                    fieldLabel: 'Select State',
                    xtype: 'combobox',
                    queryMode: 'local',
                    displayField: 'state',
                    valueField: 'country',  // valueField: 'abbr',

                    // cách PUBLISH - ném biến ra global
                    reference: 'states',
                    publishes: 'value',

                    bind: {
                        store: '{FormField_3_combobox_1_simple_store}'
                    }
                }
            ]
        }
    ]
})


// ========================================== CODE GỐC ======================================= //

// /**
//  * This example illustrates a combo box which loads data from a local array.
//  */
// Ext.define('KitchenSink.view.form.combobox.Simple', {
//     extend: 'Ext.form.Panel',
//     xtype: 'simple-combo',

//     title: 'Simple ComboBox',
//     width: 500,
//     layout: 'form',
//     viewModel: {},

//     items: [{
//         xtype: 'fieldset',
//         layout: 'anchor',
//         items: [{
//             xtype: 'component',
//             anchor: '100%',
//             html: [
//                 '<h3>Locally loaded data</h3>',
//                 '<p>This ComboBox uses local data from a JS array</p>'
//             ]
//         }, {
//             xtype: 'displayfield',
//             fieldLabel: 'Selected State',
//             bind: '{states.value}'
//         }, {
//             xtype: 'combobox',
//             reference: 'states',
//             publishes: 'value',
//             fieldLabel: 'Select State',
//             displayField: 'state',
//             anchor: '-15',
//             store: {
//                 type: 'states'
//             },
//             minChars: 0,
//             queryMode: 'local',
//             typeAhead: true
//         }]
//     }]
// });
