Ext.define('MyApp.view.main.projectCounter3File.projectCounter3FileView', {

    // 1. VIEW:
    extend: 'Ext.panel.Panel',
    xtype: 'projectCounter3FileView',

    // 2. MODEL:
    // viewModel: {
    //     // khai báo - dữ liệu MODEL = biến "myTitle"
    //     data: {
    //         myTitle: 'My Title'
    //     }
    // },
    viewModel: 'projectCounter3FileViewModel',

    // 3. CONTROLLER:
    // controller: {
    //     // CYDB - "counter" = DATA khai báo trên CONTROLLER
    //     counter: 0,
    //     // handle
    //     onClickIncrease: function() {
    //         // SET - giá trị mới = COUNTER - cho biến "myTitle" - khai báo trong MODEL
    //             // this.getViewModel().set('ten_bien', 'gia_tri)
    //         this.getViewModel().set('myTitle', 'new title: Counter = ' + (++this.counter));
    //         // CYDB - "this.counter" = DATA khai báo trên CONTROLLER
    //     }
    // },
    controller: 'projectCounter3FileController',

    // CYDB - BIND = gắn dữ liệu = '{tên_biến}'
    // CYDB : gán giá trị - cho thuộc tính TITLE
    bind: {
        title: '{myTitle}'
    },

    // nội dung - giao diện
    items: [
        {
            xtype: 'button',
            text: 'Click Me - to Counter',
            handler: 'onClickIncrease',         // CYDB - gọi hàm trong CONTROLLER
        }
    ]
})