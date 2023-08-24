Ext.define('MyApp.view.main.KitchenSink.DataBinding_4_model_formulas_model', {
    // SUMMARY: extend Ext.app.ViewModel
    // alias modelName
    // formulas x get set
    // x : get : function(get){ return }

    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.DataBinding_4_model_formulas_model',

    // TỪ KHÓA - FORMULAS
    formulas: {
        // ĐỊNH NGHĨA FIELD: có constructor = hàm GET + SET
        twice : {
            get: function(get) {
                return get('x') * 2;        // viewModel.get('x')
            }
        },
        // ĐỊNH NGHĨA FIELD: có constructor = hàm GET + SET
        squad: {
            get: function(get){
                return get('twice') * 2;    // viewModel.get('twice')
            }
        }
    }
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
