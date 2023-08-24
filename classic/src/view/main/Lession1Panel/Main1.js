Ext.define('MyApp.view.main.Lession1Panel.Main1', {
    extend: 'Ext.container.Container',      // extend: 'Ext.tab.Panel',
    xtype: 'app-main-lession-1',            // định nghĩa tên component

    items: [
        {
            xtype: 'name-component-panel',    // gọi component - sử dụng
        }
    ],
})