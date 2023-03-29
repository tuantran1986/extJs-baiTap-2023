/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    // 3. ĐỊNH NGHĨA: main controller
    alias: 'controller.main',   // TIỀN TỐ = "controller."

    // 5."MAIN CONTROLLER" : khai báo hàm xử lý sự kiện - SELECT ITEM của - "VIEW = LIST.JS"
    onItemSelected: function (sender, record) {
        console.log('tham số cha SENDER: sender.store.config.data', sender.store.config.data);
        console.log('tham số con ROW ITEM: record.data', record.data);

        const messageInfo = `
                            id: ${record.data.id},
                            <br/>
                            name: ${record.data.name},
                            <br/>
                            phone: ${record.data.phone},
                            <br/>
                            email: ${record.data.email}
                            `;
        // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        Ext.Msg.show({
            title: 'Thong bao',
            width: 800,
            height: 260,
            icon: Ext.Msg.INFO,
            message: messageInfo
        })
    },

        // GRID - SELECT ITEM:
            // onItemSelected: function (sender, record)
                // 
                // sender : NGƯỜI GỬI - chứa STORE    : "sender.store.config.data"
                // record : BẢN GHI = ITEM được click : "record.data"
            
            // EXT.MSG
                // Ext.Msg.alert    : thông báo
                // Ext.Msg.confirm  : xác nhận
                // Ext.Msg.prompt   : nhập liệu
            // 


    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
