Ext.define('MyApp.view.main.KitchenSink.FormField_4_file_field_controller', {
    // SUMMARY: 

    extend: 'Ext.app.ViewController',
    alias: 'controller.FormField_4_file_field_controller',

    // ================== FILE FIELD - SỐ 1 = BASIC - FILE FIELD ==================
    getFilePath: function(){
        var path = this.lookupReference('basicFile').getValue();    // reference: 'basicFile',

        // Ext.Msg.alert(title, content)
        Ext.Msg.alert('PATH - SELECTED FILE: ', path && path !== '' ? path : 'None');
    },

    // ================== FILE FIELD - SỐ 2 = BUTTON ONLY - FILE FIELD ==================
    buttonOnlyChange: function(field, value) {                      // buttonOnlyChange function field only

        // Ext.toast(content)
        Ext.toast('Selected FIle: ' + value);
    },

    // ================== FILE FIELD - SỐ 3 = FIRST FORM ==================
    firstFormSave: function() {
        // this.lookupReference('').getForm()
        var form = this.lookupReference('firstForm').getForm();

        // CYDB - form.isValid() : kiểm tra - validate form
        if (form.isvalid()) {
            // CYDB - form.submit(), url, waitMsg, success 
            form.submit({
                url: 'data/form/file-upload.php',
                waitMsg: 'Uploading your photo ...',
                success: function(fp, option) {
                    
                    // Ext.Xtemplate fileName fileSize
                    // Ext.Msg.alert, 
                    // apply(option.result)
                    var tpl = new Ext.Xtemplate(
                        'File processed on the Server.',
                        'Name: {fileName} <br/>',
                        'Size: {fileSize: fileSize}'
                    );

                    Ext.Msg.alert('Success', tpl.apply(option.result));
                }
            })
        }
    },

    firstFormReset: function() {
        // this.lookupRefence('').getForm()
        // reset(): xóa form
        this.lookupReference('firstForm').getForm().reset();
    },

    // ================== FILE FIELD - SỐ 3 = FIRST FORM ==================

    secondFormReset: function() {
        // this.lookupReference('').getForm().reset()
        this.lookupReference('secondForm').getForm().reset();
    },

    secondFormSave: function() {
        // this.lookupReference('').getForm()
        var form = this.lookupReference('secondForm').getForm();

        // form.isValid(): check validate data form 
        // form.submit(): submit form
        if (form.isvalid()) {
            form.submit({
                url: 'data/form/file-upload.php',
                waitMsg: 'Uploading your photo ...',
                success: this.secondFormUpLoadSuccess,  // tách hàm - success
                failure: this.secondFormUpLoadFailure,  // tách hàm - failure
            })
        }
    },

    secondFormUpLoadSuccess: function(form, action) {
        // Ext.Msg.alert(title, content)
        // action.result.file
        Ext.Msg.alert('Success', 'Processed file ' + action.result.file + 'on the server');
    },
    
    secondFormUpLoadFailure: function(form, action) {
        // Ext.Msg.alert(title, content)
        // Ext.JSON.decode
        // response responseText
        Ext.Msg.alert('Error', Ext.JSON.decode(this.response.responseText).message);
    },
})


// ========================================== CODE GỐC ======================================= //

// Ext.define('KitchenSink.view.form.FileUploadsController', {
//     extend: 'Ext.app.ViewController',
//     alias: 'controller.form-fileuploads',

//     getFilePath: function() {
//         var v = this.lookupReference('basicFile').getValue();

//         Ext.Msg.alert('Selected File', v && v !== '' ? v : 'None');
//     },

//     buttonOnlyChange: function(field, value) {
//         Ext.toast('<b>Selected:</b> ' + value);
//     },

//     firstFormSave: function() {
//         var form = this.lookupReference('firstForm').getForm();

//         if (form.isValid()) {
//             form.submit({
//                 url: 'data/form/file-upload.php',
//                 waitMsg: 'Uploading your photo...',
//                 success: function(fp, o) {
//                     var tpl = new Ext.XTemplate(
//                         'File processed on the server.<br />',
//                         'Name: {fileName}<br />',
//                         'Size: {fileSize:fileSize}'
//                     );

//                     Ext.Msg.alert('Success', tpl.apply(o.result));
//                 }
//             });
//         }
//     },

//     firstFormReset: function() {
//         this.lookupReference('firstForm').getForm().reset();
//     },

//     secondFormSubmit: function() {
//         var form = this.lookupReference('secondForm').getForm();

//         if (form.isValid()) {
//             form.submit({
//                 url: 'data/form/file-upload.php',
//                 waitMsg: 'Uploading your photo...',
//                 success: this.secondFormUploadSuccess,
//                 failure: this.secondFormUploadFailure
//             });
//         }
//     },

//     secondFormReset: function() {
//         this.lookupReference('secondForm').getForm().reset();
//     },

//     secondFormUploadSuccess: function(form, action) {
//         Ext.Msg.alert('Success', 'Processed file "' + action.result.file + '" on the server');
//     },

//     secondFormUploadFailure: function(form, action) {
//         Ext.Msg.alert("Error", Ext.JSON.decode(this.response.responseText).message);
//     }
// });



