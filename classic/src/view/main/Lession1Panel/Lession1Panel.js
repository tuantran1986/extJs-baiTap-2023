// 'MyApp.view.main.Lession1Panel' : định nghĩa - địa chỉ của file.
Ext.define('Ext.view.main.Lession1Panel.Lession1Panel', {
// Ext.define('MyApp.view.main.Lession1Panel.Lession1Panel', {
    extend: 'Ext.panel.Panel',      // kế thừa tử KIỂU

    xtype: 'name-component-panel',    // định nghĩa - tên component
    title: 'Panel Example',

    // nội dung
    items: [
        {
            xtype: 'textfield',     // trường văn bản
            label: 'Username'
        },
        // === "CODE - ĐÚNG" ===
        {
            xtype: 'textfield',
            // inputType: 'password',
            inputType: 'password',
            label: 'Password',
            name: 'password'
        },
        // === "CODE - SAI" ===
            // {
            //     xtype: 'passwordfield', // trường mật khẩu
            //     label: 'Password'
            // },
        {
            xtype: 'button',                // nút
            text: 'Save'
        },
    ]
})