Ext.define('MyApp.view.main.KitchenSink.DataBinding_2_dynamic_cach2_controller', {
    // x this.x
    // value = this.getViewModel.get('x')
    // this.getViewModel.set('x', value)

    extend: 'Ext.app.ViewController',
    alias: 'controller.DataBinding_2_dynamic_cach2_controller',

    // CÁCH 2: "CONTROLLER lấy giá trị biến trong VIEWMODEL"

    onChangeTitle: function(){
        var me = this,
            viewModel = me.getViewModel();

        var newTitle = viewModel.get('title') + 1;
        viewModel.set('title', newTitle);
    },
    onChangeContent: function(){
        var me = this,
            viewModel = me.getViewModel();

        var newContent = viewModel.get('content') + 1;
        viewModel.set('content', newContent);
    }
})

// ========================================== CODE GỐC ======================================= //

// Details
// Ext.define('KitchenSink.view.binding.DynamicController', {
//     extend: 'Ext.app.ViewController',

//     alias: 'controller.binding-dynamic',

//     contentCount: 0,
//     titleCount: 0,

//     onChangeTitleClick: function() {
//         this.getViewModel().set('title', 'New Title ' + ++this.titleCount);
//     },

//     onChangeContentClick: function() {
//         this.getViewModel().set('content', 'New Content ' + ++this.contentCount);
//     }
// });
