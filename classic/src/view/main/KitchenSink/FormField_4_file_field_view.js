Ext.define('MyApp.view.main.KitchenSink.FormField_4_file_field_view', {
    // SUMMARY: 

    extend: 'Ext.panel.Panel',
    xtype: 'FormField_4_file_field_view',

    controller: 'FormField_4_file_field_controller',

    width: 500,
    bodyPadding: 10,

    defaults: {
        xtype: 'form',          // form
        layout: 'anchor',
        bodyPadding: 10,
        style: {
            'margin-bottom': '20px'
        },
        defaults: {
            anchor: '100%',
        }
    },

    // noi dung
    items: [
        // ============ FILE FIELD - SỐ 1 = BASIC FILE FIELD ============
        {
            items: [
                {
                    xtype: 'component',     // component + html []
                    html: [
                        '<h3> ============ 1. BASIC FILE FIELD ============ </h3>',
                        '<p>A typical file upload field with Ext style. Direct editing ',
                        'of the text field cannot be done in a consistent, cross-browser way, ',
                        'so it is always read-only. The file path reported by the ',
                        '<code>getValue</code> method will depend on the browser and cannot ',
                        'be controlled by Ext JS.'
                    ],
                },
                {
                    xtype: 'filefield',         // fieldfield = upload file
                    hideLabel: true,            // hideLable = ẩn label
                    reference: 'basicFile',     // reference = tham chiếu - lookupReference('basicFile').getValue
                },
                {
                    xtype: 'button',
                    text: 'Get File Path',
                    handler: 'getFilePath'
                },
            ],
        },
        // ============ FILE FIELD - SỐ 2 = BUTTON ONLY ============
        {
            items: [
                {
                    xtype: 'component',
                    html: [
                        '<h3>============ 2. BUTTON ONLY ============</h3>',
                        '<p>You can also render the file input as a button without ',
                        'the text field, with access to the field\'s value via the ',
                        'standard <tt>Ext.form.field.Field</tt> interface or by handling ',
                        'the <tt>change</tt> event (as in this example).',
                        '</p>'
                    ]
                },
                {
                    xtype: 'fileuploadfield',   // 2. fileuploadfield
                    buttonOnly: true,           // buttonOnly true
                    hideLable: true,            // hideLabel true
                    listeners: {
                        change: 'buttonOnlyChange'
                    }
                }
            ]
        },
        // ============ FILE FIELD - SỐ 3 = FILE UPLOAD FORM ============
        {
            title: '============ FILE FIELD - SỐ 3 = FILE UPLOAD FORM ============',
            frame: true,
            bodyPadding: 10,
            reference: 'firstForm',         // this.lookupReference('firstForm').getForm();

            defaults: {
                anchor: '100%',
                allowBlank: false,          // CYDB - ko bỏ trống = VALIDATE
                msgTarget: 'side',
                labelWidth: 50,
            },

            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Name',
                },
                {
                    xtype: 'filefield',     // filefield
                    emptyText: 'Select an image',
                    fieldLabel: 'Photo',
                    name: 'photo-path',     // tên biến
                    buttonText: '',
                    // 
                    buttonConfig: {
                        iconCls: 'file-uploads-image-add',
                    }
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: 'firstFormSave',   // CYDB - handler - form.isValid() - form.submit()
                },
                {
                    text: 'Reset',
                    handler: 'firstFormReset',  // CYDB - handler - this.lookupReference('firstForm').getForm().reset();
                }
            ],
        },
        // ============ FILE FIELD - SỐ 4 = UPLOAD ERROR TEST ============
        {
            title: '============ FILE FIELD - SỐ 4 = UPLOAD ERROR TEST ============',
            frame: true,                // 
            bodyPadding: 10,
            reference: 'secondForm',    // this.lookupReference('secondForm').getForm()

            defaults: {
                anchor: '100%',
                allowBlank: false,  // form.isValid(): check validate data form 
                msgTarget: 'side',  // 
                labelWidth: 70,
            },

            items: [
                {
                    fieldLabel: 'Name',
                    xtype: 'textfield',
                },
                {
                    fieldLabel: 'Photo',
                    xtype: 'filefield',     // 
                    emptyText: 'Select an image',
                    buttonConfig: {
                        text: '',
                        iconCls: 'file-uploads-image-add',
                    }
                },
                {
                    fieldLabel: 'HTTP Status',
                    xtype: 'numberfield',
                    name: 'returnResponse', // 
                    value: 200,
                    minValue: 200,
                    maxValue: 600,
                }
            ],
            // 
            buttons: [
                {
                    text: 'Save',
                    handler: 'secondFormSave',      //
                },
                {
                    text: 'Reset',
                    handler: 'secondFormReset',     //
                },
            ]
        }
    ],
})


// ========================================== CODE GỐC ======================================= //


/**
 * This example demonstrates use of Ext.form.field.File, a file upload field with custom
 * rendering, and error handling.
 */
// Ext.define('KitchenSink.view.form.FileUploads', {
//     extend: 'Ext.container.Container',
//     xtype: 'form-fileuploads',
//     controller: 'form-fileuploads',

//     width: 600,
//     layout: {
//         type: 'vbox',
//         align: 'stretch'
//     },

//     defaults: {
//         xtype: 'form',
//         layout: 'anchor',

//         bodyPadding: 10,
//         style: {
//             'margin-bottom': '20px'
//         },

//         defaults: {
//             anchor: '100%'
//         }
//     },

//     items: [{
//         items: [{
//             xtype: 'component',
//             html: [
//                 '<h3>Basic File Field</h3>',
//                 '<p>A typical file upload field with Ext style. Direct editing ',
//                 'of the text field cannot be done in a consistent, cross-browser way, ',
//                 'so it is always read-only. The file path reported by the ',
//                 '<code>getValue</code> method will depend on the browser and cannot ',
//                 'be controlled by Ext JS.'
//             ]
//         }, {
//             xtype: 'filefield',
//             hideLabel: true,
//             reference: 'basicFile'
//         }, {
//             xtype: 'button',
//             text: 'Get File Path',
//             handler: 'getFilePath'
//         }]
//     }, {
//         items: [{
//             xtype: 'component',
//             html: [
//                 '<h3>Button Only</h3>',
//                 '<p>You can also render the file input as a button without ',
//                 'the text field, with access to the field\'s value via the ',
//                 'standard <tt>Ext.form.field.Field</tt> interface or by handling ',
//                 'the <tt>change</tt> event (as in this example).',
//                 '</p>'
//             ]
//         }, {
//             xtype: 'fileuploadfield', // Same as filefield above
//             buttonOnly: true,
//             hideLabel: true,
//             listeners: {
//                 change: 'buttonOnlyChange'
//             }
//         }]
//     }, {
//         title: 'File Upload Form',
//         frame: true,
//         bodyPadding: '10 10 0',
//         reference: 'firstForm',

//         defaults: {
//             anchor: '100%',
//             allowBlank: false,
//             msgTarget: 'side',
//             labelWidth: 50
//         },

//         items: [{
//             xtype: 'textfield',
//             fieldLabel: 'Name'
//         }, {
//             xtype: 'filefield',
//             emptyText: 'Select an image',
//             fieldLabel: 'Photo',
//             name: 'photo-path',
//             buttonText: '',
//             buttonConfig: {
//                 iconCls: 'file-uploads-image-add'
//             }
//         }],

//         buttons: [{
//             text: 'Save',
//             handler: 'firstFormSave'
//         }, {
//             text: 'Reset',
//             handler: 'firstFormReset'
//         }]
//     }, {
//         title: 'Upload error test',
//         frame: true,
//         bodyPadding: '10 10 0',
//         reference: 'secondForm',

//         defaults: {
//             anchor: '100%',
//             allowBlank: false,
//             msgTarget: 'side',
//             labelWidth: 70
//         },

//         items: [{
//             xtype: 'textfield',
//             fieldLabel: 'Name'
//         }, {
//             xtype: 'filefield',
//             emptyText: 'Select an image',
//             fieldLabel: 'Photo',
//             name: 'photo-path',
//             buttonConfig: {
//                 text : '',
//                 iconCls: 'file-uploads-image-add'
//             }
//         }, {
//             xtype: 'numberfield',
//             fieldLabel: 'HTTP status',
//             value: 200,
//             minValue: 200,
//             maxValue: 599,
//             name: 'returnResponse'
//         }],

//         buttons: [{
//             text: 'Save',
//             handler: 'secondFormSubmit'
//         }, {
//             text: 'Reset',
//             handler: 'secondFormReset'
//         }]
//     }]
// });


