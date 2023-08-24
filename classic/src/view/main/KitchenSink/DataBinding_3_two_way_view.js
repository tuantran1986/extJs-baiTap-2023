Ext.define('MyApp.view.main.KitchenSink.DataBinding_3_two_way_view', {
    // SUMMARY: 
    // viewModel data x
    // bind title '{x}'
    // xtype textfield bind value x
    // tbar text handler

    extend: 'Ext.panel.Panel',
    xtype: 'DataBinding_3_two_way_view',

    viewModel: {
        data: {
            titleInputValue: 'Init - Title',
        },
    },
    controller: 'DataBinding_3_two_way_controller',

    width: 500,
    bodyPadding: 10,

    bind: {
        title: '{titleInputValue}'
    },

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Title Input Two Way Binding',
            bind: {
                value: '{titleInputValue}'
            },
        }
    ],

    tbar: [
        {
            text: 'Random Title',
            handler: 'onChangeRandomTitle'
        }
    ]
})


// ========================================== CODE GỐC ======================================= //


// Details
// /**
//  * This example shows simple two way data binding. When the value is changed by the user
//  * in the field, the change is reflected in the panel title. Similarly, when the value is
//  * changed in the view model, the same change is reflected in the text field.
//  */
// Ext.define('KitchenSink.view.binding.TwoWay', {
//     extend: 'Ext.panel.Panel',
//     alias: 'widget.binding-two-way',

//     width: 300,
//     bodyPadding: 10,

//     controller: 'binding.twoway',
//     viewModel: {
//         data: {
//             title: 'The title'
//         }
//     },

//     bind: {
//         title: '{title}'
//     },

//     items: {
//         xtype: 'textfield',
//         fieldLabel: 'Title',
//         labelWidth: 50,
//         // The default config for textfield in a bind is "value" (two-way):
//         bind: '{title}'
//     },

//     tbar: [{
//         text: 'Random Title',
//         handler: 'onTitleButtonClick'
//     }]
// });
