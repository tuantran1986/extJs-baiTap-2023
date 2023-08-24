Ext.define('MyApp.view.main.projectCounter3File.projectCounter3FileController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projectCounter3FileController',

    // CYDB - "counter" = DATA khai báo trên CONTROLLER
    counter: 0,

    // handle
    onClickIncrease: function () {
        // SET - giá trị mới = COUNTER - cho biến "myTitle" - khai báo trong MODEL
        // this.getViewModel().set('ten_bien', 'gia_tri)
        this.getViewModel().set('myTitle', '3. new title: Counter = ' + (++this.counter));
        // CYDB - "this.counter" = DATA khai báo trên CONTROLLER
    },

})