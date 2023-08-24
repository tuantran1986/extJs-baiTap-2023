Ext.define('MyApp.view.main.KitchenSink.FormField_1_number_field_view', {
    // SUMMARY: 
        // defaultType numberfield
        // fieldLabel name value minValue maxValue
        // số thực: allowDecimals decimalPrecision step
        // hideTrigger: true,  // ẩn 2 icon - tăng / giảm

    extend: 'Ext.form.Panel',
    xtype: 'FormField_1_number_field_view',

    viewModel: {
        data: {
        }
    },

    title: 'NUMBER FIELD - WIDTH SPINNER',
    frame: true,
    width: 500,
    bodyPadding: 10,

    defaultType: 'numberfield',
    fieldDefaults: {
        labelWidth: 110,
        anchor: '100%',
    },

    items: [
        {
            fieldLabel: 'Default - Integer',    // label
            name: 'basic',                      // tên biến
            value: 1,                           // giá trị
            minValue: 1,                        // min
            maxValue: 125,                      // max
        },
        {
            fieldLabel: 'Real - With a step of 0.5',
            name: 'test',
            value: 9.5,
            minvValue: -100,
            maxValue: 100,
            // số thực: allowDecimals decimalPrecision step
            allowDecimals: true,                // số thực
            decimalPrecision: 1,                // 1 số, sau dấu phảy
            step: 0.5,                          // bước tăng giảm
        },
        {
            fieldLabel: 'Without spinner',
            hideTrigger: true,  // ẩn 2 icon - tăng / giảm
            name: 'without_spinner',
        }
    ]
})


// ========================================== CODE GỐC ======================================= //
// Details
// /**
//  * This example shows how to use the number field.
//  */
// Ext.define('KitchenSink.view.form.Number', {
//     extend: 'Ext.form.Panel',
//     xtype: 'form-number',

//     title: 'Number fields with spinner',
//     bodyPadding: 5,
//     frame: true,
//     width: 340,
//     defaultType: 'numberfield',

//     fieldDefaults: {
//         labelWidth: 110,
//         anchor: '100%'
//     },

//     items: [{
//         fieldLabel: 'Default',
//         name: 'basic',
//         value: 1,
//         minValue: 1,
//         maxValue: 125
//     }, {
//         fieldLabel: 'With a step of 0.4',
//         name: 'test',
//         minValue: -100,
//         maxValue: 100,
//         allowDecimals: true,
//         decimalPrecision: 1,
//         step: 0.4
//     }, {
//         hideTrigger: true,
//         fieldLabel: 'Without spinner',
//         name: 'without_spinner'
//     }]
// });

