
Ext.define('MyApp.view.main.KitchenSink.FormField_3_combobox_4_custome_template_view', {
    // SUMMARY: 

    extend: 'Ext.form.Panel',
    xtype: 'FormField_3_combobox_4_custome_template_view',

    viewModel: {
        type: 'FormField_3_combobox_4_custome_template_model',
        data: {
        }
    },

    title: 'Custom - template - combobox',
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
                        '<h3>Custom Item Templates</h3>',
                        '<p>This ComboBox uses the same data, but also illustrates ',
                        'how to use an optional custom template to create custom UI ',
                        'renditions for list items by overriding the getInnerTpl method. ',
                        'In this case each item shows the state\'s abbreviation, and has ',
                        'a QuickTip which displays the state\'s nickname when hovered over.</p>'
                    ]
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
                        store: '{FormField_3_combobox_4_custome_template_store}'
                    },
                    // THÊM : LIST CONFIG: cấu hình OPTIONS trong COMBOBOX = state (abbr)
                    // VÍ DỤ: state (abbr) = Alabama (AL)
                    listConfig: {
                        itemTpl: [
                            '<div data-qtip="{state} : {description}">{state} ({abbr})</div>'
                        ]
                    }
                }
            ]
        }
    ]
})
// ========================================== CODE GỐC ======================================= //


/**
 * This example illustrates a combo box which loads data from a local array
 * and uses a custom item template.
 */

// Ext.define('KitchenSink.view.form.combobox.CustomTemplate', {
//     extend: 'Ext.form.Panel',
//     xtype: 'custom-template-combo',

//     title: 'Custom Template  ComboBox',
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
//                 '<h3>Custom Item Templates</h3>',
//                 '<p>This ComboBox uses the same data, but also illustrates ',
//                 'how to use an optional custom template to create custom UI ',
//                 'renditions for list items by overriding the getInnerTpl method. ',
//                 'In this case each item shows the state\'s abbreviation, and has ',
//                 'a QuickTip which displays the state\'s nickname when hovered over.</p>'
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
//             queryMode: 'local',
//             listConfig: {
//                 itemTpl: [
//                     '<div data-qtip="{state}: {description}">{state} ({abbr})</div>'
//                 ]
//             }
//         }]
//     }]
// });