Ext.define('MyApp.view.main.KitchenSink.FormField_2_date_month_picker_view', {
    // SUMMARY: 
        // xtype container layout hbox

        // xtype datepicker
        // showToday false : ẩn nút ToDay
        // handler onDatePicked

        // xtype monthpicker
        // showButtons false : ẩn nút OK Cancel
        // handler onMonthPicked

    extend: 'Ext.container.Container',
    xtype: 'FormField_2_date_month_picker_view',

    requires: [
        'Ext.panel.Panel',
        'Ext.picker.Date',
        'Ext.picker.Month',
        'Ext.layout.container.VBox',
        'Ext.layout.container.HBox',
    ],

    // viewModel: {
    //     data: {
    //     }
    // },
    controller: 'FormField_2_date_month_picker_controller',

    layout: {
        type: 'vbox',
        align: 'center',
    },
    width: 800,
    bodyPadding: 10,

    items: [
        // dong 1
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '0 0 20 0',
            items: [
                {
                    title: 'Date Picker',
                    margin: '0 0 20 0',
                    items: {
                        xtype: 'datepicker',
                        handler: 'onDatePicked',
                    }
                },
                {
                    title: 'Month Picker',
                    items: {
                        xtype: 'monthpicker',
                        handler: 'onMonthPicked',
                    },
                },
            ],
        },
        // dong 2
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    title: 'Date Picker (no today)',
                    margin: '0 20 0 0',
                    items: {
                        xtype: 'datepicker',
                        showToday: false,               // chú ý - ẩn TODAY
                        handler: 'onDatePicked',
                    }
                },
                {
                    title: 'Month Picker (no buttons)',
                    items: {
                        xtype: 'monthpicker',
                        showButtons: false,             // chú ý - ẩn BUTTONS
                        handler: 'onMonthPicked',
                    }
                },
            ],
        }
    ]
})


// ========================================== CODE GỐC ======================================= //

// /**
//  * This example shows how to use the date/month pickers.
//  */
// Ext.define('KitchenSink.view.form.Date', {
//     extend: 'Ext.container.Container',
//     xtype: 'form-date',
//     controller: 'form-date',

//     requires: [
//         'Ext.panel.Panel',
//         'Ext.picker.Date',
//         'Ext.picker.Month',
//         'Ext.layout.container.VBox',
//         'Ext.layout.container.HBox'
//     ],

//     width: 750,
//     layout: {
//         type: 'vbox',
//         align: 'center'
//     },

//     items: [{
//         xtype: 'container',
//         layout: 'hbox',
//         margin: '0 0 20 0',
//         items: [{
//             title: 'Date Picker',
//             margin: '0 20 0 0',
//             items: {
//                 xtype: 'datepicker',
//                 handler: 'onDatePicked'
//             }
//         }, {
//             title: 'Month Picker',
//             items: {
//                 xtype: 'monthpicker',
//                 handler: 'onMonthPicked'
//             }
//         }]
//     }, {
//         xtype: 'container',
//         layout: 'hbox',
//         items: [{
//             title: 'Date Picker (no today)',
//             margin: '0 20 0 0',
//             items: {
//                 xtype: 'datepicker',
//                 showToday: false,
//                 handler: 'onDatePicked'
//             }
//         }, {
//             title: 'Month Picker (no buttons)',
//             items: {
//                 xtype: 'monthpicker',
//                 showButtons: false,
//                 handler: 'onMonthPicked'
//             }
//         }]
//     }]
// });
