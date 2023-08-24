Ext.define('MyApp.view.main.KitchenSink.DataBinding_3_two_way_controller', {
    // SUMMARY: 
    // Ext.Number.randomInt(min, max)
    // viewModel.set('x', value)
    
    extend: 'Ext.app.ViewController',
    alias: 'controller.DataBinding_3_two_way_controller',

    onChangeRandomTitle: function(){
        var me = this,
        viewModel = me.getViewModel();

        var newTitle = 'Title - ' + Ext.Number.randomInt(1, 100);
        viewModel.set('titleInputValue', newTitle)
    },

})


// ========================================== CODE GỐC ======================================= //

// Details
// Ext.define('KitchenSink.view.binding.TwoWayController', {
//     extend: 'Ext.app.ViewController',
//     alias: 'controller.binding.twoway',

//     onTitleButtonClick: function() {
//         var title = 'Title' + Ext.Number.randomInt(1, 100);
//         this.getViewModel().set('title', title);
//     }
// });
