// Ext.define('MyApp.view.main.projectCounter4File.projectCounter4FileView', {

//     // 1. VIEW:
//     extend: 'Ext.panel.Panel',
//     xtype: 'projectCounter4FileView',

//     // 2. MODEL:
//     // viewModel: {
//     //     // khai báo - dữ liệu MODEL = biến "myTitle"
//     //     data: {
//     //         myTitle: 'My Title'
//     //     }
//     // },
//     viewModel: 'projectCounter4FileViewModel',

//     // 3. CONTROLLER:
//     // controller: {
//     //     // CYDB - "counter" = DATA khai báo trên CONTROLLER
//     //     counter: 0,
//     //     // handle
//     //     onClickIncrease: function() {
//     //         // SET - giá trị mới = COUNTER - cho biến "myTitle" - khai báo trong MODEL
//     //             // this.getViewModel().set('ten_bien', 'gia_tri)
//     //         this.getViewModel().set('myTitle', 'new title: Counter = ' + (++this.counter));
//     //         // CYDB - "this.counter" = DATA khai báo trên CONTROLLER
//     //     }
//     // },
//     controller: 'projectCounter4FileController',

//     // CYDB - BIND = gắn dữ liệu = '{tên_biến}'
//     // CYDB : gán giá trị - cho thuộc tính TITLE
//     bind: {
//         title: '{myTitle}'
//     },

//     // nội dung - giao diện
//     items: [
//         {
//             xtype: 'grid',
//             colummns: [
//                 { text: 'Id', dataIndex: 'id', flex: 1 },
//                 { text: 'Title', dataIndex: 'title', flex: 1 },
//             ],
//             // bind: {
//             //     store: {
//             //         type: '{projectCounter4FileStore}'
//             //     }
//             // }
//             store: {
//                 type: 'projectCounter4FileStore'
//             }
//         },
//         {
//             xtype: 'button',
//             text: 'Click Me - to Counter',
//             handler: 'onClickIncrease',         // CYDB - gọi hàm trong CONTROLLER
//         },
//     ]
// })