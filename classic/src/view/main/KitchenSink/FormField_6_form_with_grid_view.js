Ext.define('MyApp.view.main.KitchenSink.FormField_6_form_with_grid_view', {
    // SUMMARY: selection: '{companyRowSelect}'

    extend: 'Ext.panel.Panel',
    xtype: 'FormField_6_form_with_grid_view',

    viewModel: {
        type: 'FormField_6_form_with_grid_model'
    },
    controller: 'FormField_6_form_with_grid_controller',

    requires: [
    ],

    title: 'Company Data',
    layout: 'column',
    frame: true,
    width: 800,
    bodyPadding: 10,


    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 90,
        anchor: '100%',
        msgTarget: 'side'
    },

    items: [
        // ===== 1. BẢNG - BÊN TRÁI ===== 
        {
            xtype: 'grid',
            height: 400,
            columnWidth: 0.65,

            bind: {
                // CYDB - 2 WAY BINDING = từ "FORM" vào "GRID"
                    // CYDB - 1. khi 1 dòng được CLICK - lấy DATA dòng => đẩy vào VIEWMODEL = viewModel.set('companyRowSelect') 
                    // CYDB - 2. HIỂN THỊ DATA ROW SELECT - ra FORM = bind: '{companyRowSelect.price}',
                selection: '{companyRowSelect}',  // CYDB
                store: '{FormField_6_form_with_grid_store}',
            },

            columns: [
                {
                    text: 'Company', dataIndex: 'name', flex: 1, sortable: true, 
                },
                {
                    text: 'Price', dataIndex: 'price', width: 120, sortable: true, 
                },
                {
                    text: 'Change', dataIndex: 'change', width: 120, sortable: true, 
                },
                {
                    text: '% Change', dataIndex: 'pctChange', width: 120, sortable: true, 
                },
                {
                    text: 'Last Updated', dataIndex: 'lastChange', width: 120, sortable: true, 
                    xtype: 'datecolumn',
                },
                {
                    text: 'Rating', dataIndex: 'rating', width: 120, sortable: true, 
                    // renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {}
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        switch (value) {
                            case 0:
                                return 'A';
                            case 1:
                                return 'B';
                            case 2:
                                return 'C';
                            default: return 'WRONG VALUE';
                        };
                    },
                },
            ]
        },

        // ===== 2. FORM - BÊN PHẢI ===== 
        {
            title: 'Company Details',
            xtype: 'fieldset',

            columnWidth: 0.35,
            margin: '0 0 0 10',
            layout: 'anchor',
            defaultType: 'textfield',   // cydb - 

            items: [
                {
                    fieldLable: 'Name',
                    bind: '{companyRowSelect.name}',
                    // CYDB - 2 WAY BINDING = từ "FORM" vào "GRID"
                        // CYDB - 1. khi 1 dòng được CLICK - lấy DATA dòng => đẩy vào VIEWMODEL = viewModel.set('companyRowSelect') 
                        // CYDB - 2. HIỂN THỊ DATA ROW SELECT - ra FORM = bind: '{companyRowSelect.price}',
                },
                {
                    fieldLable: 'Price',
                    bind: '{companyRowSelect.price}',
                },
                {
                    fieldLable: 'Change',
                    bind: '{companyRowSelect.change}',      // CYDB - 2 WAY BINDING = từ "FORM" vào "GRID"
                },
                {
                    fieldLable: '% Change',
                    bind: '{companyRowSelect.pctChange}',   // CYDB - 2 WAY BINDING = từ "FORM" vào "GRID"
                },
                {
                    fieldLable: 'Last Update',
                    xtype: 'datefield',
                    bind: '{companyRowSelect.lastChange}',  // CYDB - 2 WAY BINDING = từ "FORM" vào "GRID"
                },
                {
                    fieldLable: 'Rating',
                    xtype: 'radiogroup',
                    bind: '{companyRowSelect.rating}',      // CYDB - 2 WAY BINDING = từ "FORM" vào "GRID"

                    simpleValue: true,
                    column: 3,
                    items: [
                        {
                            boxLabel: 'A', inputValue: 0,
                        },
                        {
                            boxLabel: 'B', inputValue: 1,
                        },
                        {
                            boxLabel: 'C', inputValue: 2,
                        },
                    ]
                },
            ]
        }
    ]
})


// ========================================== CODE GỐC ======================================= //

/**
 * This Form demonstrates the fact that by virtue of inheriting from the Ext.Container
 * class, an Ext.form.Panel can contain any Ext.Component. This includes all the
 * subclasses of Ext.Panel, including the GridPanel.
 *
 * The Grid demonstrates the use of creation of derived fields in a Record created using a
 * custom `convert` function, and the use of column renderers.
 *
 * The Form demonstrates the use of radio buttons grouped by name being set by the value
 * of the derived rating field.
 */

// Ext.define('KitchenSink.view.form.FormGrid', {
//     extend: 'Ext.form.Panel',
//     xtype: 'form-grid',
//     controller: 'form-grid',

//     requires: [
//         'Ext.grid.*',
//         'Ext.form.*',
//         'Ext.layout.container.Column',
//         'KitchenSink.model.Company'
//     ],

//     title: 'Company data',
//     width: 880,
//     frame: true,
//     bodyPadding: 5,
//     layout: 'column',
//     signTpl: '<span style="' +
//             'color:{value:sign(\'"#cf4c35"\',\'"#73b51e"\')}"' +
//         '>{text}</span>',

//     viewModel: {
//         data: {
//             theCompany: null
//         }
//     },

//     fieldDefaults: {
//         labelAlign: 'left',
//         labelWidth: 90,
//         anchor: '100%',
//         msgTarget: 'side'
//     },

//     items: [{
//         xtype: 'gridpanel',

//         height: 400,
//         columnWidth: 0.65,

//         bind: {
//             selection: '{theCompany}'
//         },
//         store: {
//             type: 'companies'
//         },

//         columns: [{
//             text: 'Company',
//             dataIndex: 'name',

//             flex: 1,
//             sortabl: true
//         }, {
//             text: 'Price',
//             dataIndex: 'price',

//             width: 75,
//             sortable: true
//         }, {
//             text: 'Change',
//             dataIndex: 'change',

//             width: 80,
//             sortable: true,
//             renderer: 'renderChange'
//         }, {
//             text: '% Change',
//             dataIndex: 'pctChange',

//             width: 100,
//             sortable: true,
//             renderer: 'renderPercent'
//         }, {
//             text: 'Last Updated',
//             dataIndex: 'lastChange',

//             width: 115,
//             sortable: true,
//             formatter: 'date("m/d/Y")'
//         }, {
//             text: 'Rating',
//             dataIndex: 'rating',

//             width: 60,
//             sortable: true,
//             formatter: 'pick("A","B","C")'
//         }]
//     }, 
    
//     {
//         xtype: 'fieldset',
//         title:'Company details',

//         columnWidth: 0.35,
//         margin: '0 0 0 10',
//         layout: 'anchor',
//         defaultType: 'textfield',

//         items: [{
//             fieldLabel: 'Name',
//             bind: '{theCompany.name}'
//         }, {
//             fieldLabel: 'Price',
//             bind: '{theCompany.price}'
//         }, {
//             fieldLabel: '% Change',
//             bind: '{theCompany.pctChange}'
//         }, {
//             xtype: 'datefield',
//             fieldLabel: 'Last Updated',
//             bind: '{theCompany.lastChange}'
//         }, {
//             xtype: 'radiogroup',
//             fieldLabel: 'Rating',
//             bind: '{theCompany.rating}',

//             // Maps the value of this radiogroup to the child radio with matching
//             // inputValue.
//             simpleValue: true,
//             columns: 3,

//             items: [{
//                 boxLabel: 'A',
//                 inputValue: 0
//             }, {
//                 boxLabel: 'B',
//                 inputValue: 1
//             }, {
//                 boxLabel: 'C',
//                 inputValue: 2
//             }]
//         }]
//     }]
// });
