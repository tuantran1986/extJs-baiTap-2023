Ext.define('MyApp.view.main.KitchenSink.FormField_2_date_month_picker_controller', {
    // SUMMARY: 
        // Ext.toast : thông báo
        // Ext.Date.format(date, 'd-M-Y') : định dạng ngày tháng

    extend: 'Ext.app.ViewController',
    alias: 'controller.FormField_2_date_month_picker_controller',

    onDatePicked: function(picker, date){
        Ext.toast('You picked : ' + Ext.Date.format(date, 'd-M-Y'));
    },

    onMonthPicked: function(picker, date){
        console.log('picker', picker);
        console.log('date', date);
        Ext.toast('You picked : ' + Ext.Date.format(date, 'M-Y'));
    },

})


// ========================================== CODE GỐC ======================================= //


// Ext.define('KitchenSink.view.form.DateController', {
//     extend: 'Ext.app.ViewController',
//     alias: 'controller.form-date',

//     onDatePicked: function(picker, date) {
//         KitchenSink.toast('You picked ' + Ext.Date.format(date, 'd-M-Y'));
//     }
// });