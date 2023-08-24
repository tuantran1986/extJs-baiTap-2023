Ext.define('MyApp.view.main.projectCounter2File.projectCounter2FileController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projectCounter2FileController',

    // CYDB - "counter" = DATA khai báo trên CONTROLLER
    counter: 0,

    // handle
    onClickIncrease: function () {
        // SET - giá trị mới = COUNTER - cho biến "myTitle" - khai báo trong MODEL
        // this.getViewModel().set('ten_bien', 'gia_tri)
        this.getViewModel().set('myTitle', '2. new title: Counter = ' + (++this.counter));
        // CYDB - "this.counter" = DATA khai báo trên CONTROLLER
    },

})