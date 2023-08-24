Ext.define('MyApp.view.main.KitchenSink.FormField_3_combobox_1_simple_model', {
    // SUMMARY: 

    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.FormField_3_combobox_1_simple_model',

    requires: [
        'MyApp.view.main.KitchenSink.FormField_3_combobox_1_simple_store',
    ],

    stores: {
        FormField_3_combobox_1_simple_store : {
            type: 'FormField_3_combobox_1_simple_store',
        },
    },

    data: {

    }
})


// ========================================== CODE GỐC ======================================= //

// Ext.define('KitchenSink.model.State', {
//     extend: 'KitchenSink.model.Base',

//     fields: [
//         'abbr',
//         'state',
//         'description',
//         'country'
//     ]
// });