Ext.define('MyApp.view.main.KitchenSink.DataBinding_4_model_formulas_model', {
    // SUMMARY: 

    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.DataBinding_4_model_formulas_model',

    requires: [
        // 'MyApp.view.main.KitchenSink.FormField_6_form_with_grid_store',
    ],

    stores: {
        // FormField_6_form_with_grid_store : {
            // type: 'FormField_6_form_with_grid_store',
        // },
    },

    data: {

    },

})


// ========================================== CODE GỐC ======================================= //

// Ext.define('KitchenSink.view.binding.FormulasModel', {
//     extend: 'Ext.app.ViewModel',

//     alias: 'viewmodel.binding-formulas',

//     formulas: {
//         quad: function (get) {
//             return get('twice') * 2;
//         },

//         // This accomplishes the same thing as above but using object syntax.
//         twice: {
//             get: function (get) {
//                 return get('x') * 2;
//             }
//         }
//     }
// });
