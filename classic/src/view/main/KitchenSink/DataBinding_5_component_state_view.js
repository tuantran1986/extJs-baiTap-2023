Ext.define('MyApp.view.main.KitchenSink.DataBinding_5_component_state_view', {
    // SUMMARY: 
    // reference varName
    // xtype checkbox boxLabel reference
    // varName.checked
    // textfield anchor hidden disabled

    extend: 'Ext.panel.Panel',
    xtype: 'DataBinding_5_component_state_view',

    // viewModel: {
    //     data: {
    //     }
    // },
    // controller: '',

    title: 'SINGLE UP FORM',
    layout: 'anchor',
    viewModel: true,    // sử dụng VIEWMODEL
    width: 500,
    bodyPadding: 10,

    items: [
        // 1. reference: định nghĩa biến THAM CHIẾU = 'isShow',
        // giá trị: isShow.checked
        {
            xtype: 'checkbox',
            boxLabel: 'Click to show - textfield',
            reference: 'isShow',
            // reference: 'isDisabled',
        },
        // ẩn hiện = hidden
        // giá trị: isShow.checked, !isShow.checked
        {
            xtype: 'textfield',
            fieldLabel: 'TEXT',
            anchor: '0',
            bind: {
                hidden: '{!isShow.checked}',
                // disabled: '{!isDisabled.checked}',
            }
        } 
    ]
})


// ========================================== CODE GỐC ======================================= //


// Details
// /**
//  * This example shows how to use basic data binding to bind the state of one component to
//  * the state of another.
//  */
// Ext.define('KitchenSink.view.binding.ComponentState', {
//     extend: 'Ext.panel.Panel',
//     xtype: 'binding-component-state',
//     width: 350,
//     layout: 'anchor',
//     viewModel: true,
//     title: 'Sign Up Form',
//     bodyPadding: 10,

//     items: [{
//         xtype: 'checkbox',
//         boxLabel: 'Is Admin',
//         reference: 'isAdmin'
//     },{
//         xtype: 'textfield',
//         fieldLabel: 'Admin Key',
//         anchor: '0',
//         bind: {
//             disabled: '{!isAdmin.checked}'
//         }
//     }]
// });