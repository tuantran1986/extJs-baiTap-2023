Ext.define('MyApp.view.main.KitchenSink.DataBinding_1_helloWorld_view', {

    // viewModel data x
    // bind '{x}'
    extend: 'Ext.panel.Panel',
    xtype: 'DataBinding_1_helloWorld_view',

    // 1. KHAI BÁO BIẾN - TRONG VIEWMODEL DATA
    viewModel: {
        data: {
            title: 'Tieu de',
            content: 'Noi dung',
            buttonText: 'Nut',
        }
    },

    width: 500,
    bodyPadding: 10,

    // 2.BIND GIÁ TRỊ BIẾN - TỪ VIEWMODEL - RA VIEW
    bind: {
        title: '{title}',
        html: '{content}',
    },
    tbar: [{
        bind: '{buttonText}'
    }]
})


// ========================================== CODE GỐC ======================================= //

// Ext.define('KitchenSink.view.binding.HelloWorld', {
//     extend: 'Ext.panel.Panel',
//     alias: 'widget.binding-hello-world',
//     width: 500,
//     bodyPadding: 10,

//     viewModel: {
//         data: {
//             title: 'Hello World',
//             html: 'The html content',
//             buttonText: 'A button'
//         }
//     },

//     bind: {
//         title: '{title}',
//         html: '{html}'
//     },

//     tbar: [{
//         bind: '{buttonText}'
//     }]
// });