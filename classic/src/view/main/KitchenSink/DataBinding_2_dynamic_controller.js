Ext.define('MyApp.view.main.KitchenSink.DataBinding_2_dynamic_controller', {
    // x this.x
    // this.getViewModel.set()

    extend: 'Ext.app.ViewController',
    alias: 'controller.DataBinding_2_dynamic_controller',

    // CÁCH 1: "KHAI BÁO BIẾN - TRONG CONTROLLER"
    titleCount: 0,
    contentCount: 1000,

    onChangeTitle: function(){
        var newTItle = 'NEW TITLE - ' + (++this.titleCount);
        this.getViewModel().set('title', newTItle);
    },
    onChangeContent: function(){
        var newContent = 'NEW CONTENT - ' + (++this.contentCount);
        this.getViewModel().set('content', newContent);
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
