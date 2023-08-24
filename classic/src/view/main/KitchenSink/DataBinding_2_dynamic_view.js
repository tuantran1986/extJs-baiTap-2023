Ext.define('MyApp.view.main.KitchenSink.DataBinding_2_dynamic_view', {
    
    // viewModel data x
    // bind '{x}'
    // listeners click handlerOnChange

    extend: 'Ext.panel.Panel',
    xtype: 'DataBinding_2_dynamic_view',

    // 1. KHAI BÁO BIẾN - TRONG MODEL
    viewModel: {
        data: {
            title: 'INIT TITLE',
            content: 'INIT CONTENT',
        }
    },
    controller: 'DataBinding_2_dynamic_controller',

    width: 500,
    bodyPadding: 10,

    // 2. HIỂN THỊ VALUE BIẾN = BIND - RA VIEW
    bind: {
        title: 'TITLE - {title}',
        html: 'CONTENT: {content}'
    },

    // CÁC BUTTON - "TOP BAR"
    tbar: [
        {
            text: 'Click Change Title',
            listeners: {
                click: 'onChangeTitle',
            }
        },
        {
            text: 'Click Change Content',
            listeners: {
                click: 'onChangeContent',
            }
        },
    ]
})


// ========================================== CODE GỐC ======================================= //


// /**
//  * This example shows simple dynamic data binding. When the data in the underlying view
//  * model is modified, the change is relayed back to the panel and the markup is updated.
//  */
// Ext.define('KitchenSink.view.binding.Dynamic', {
//     extend: 'Ext.panel.Panel',
//     alias: 'widget.binding-dynamic',

//     width: 300,
//     bodyPadding: 10,
//     controller: 'binding-dynamic',

//     viewModel: {
//         data: {
//             title: 'Some Title',
//             content: 'Some Content'
//         }
//     },

//     bind: {
//         title: 'Info - {title}',
//         html: 'Stuff: {content}'
//     },

//     tbar: [{
//         text: 'Change title',
//         listeners: {
//             click: 'onChangeTitleClick'
//         }
//     }, {
//         text: 'Change content',
//         listeners: {
//             click: 'onChangeContentClick'
//         }
//     }]
// });