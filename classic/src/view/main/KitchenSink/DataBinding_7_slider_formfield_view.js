Ext.define('MyApp.view.main.KitchenSink.DataBinding_7_slider_formfield_view', {
    // SUMMARY: requires Ext slider Widget
    // default anchor labelWidth
    // defaultType fieldcontainer
    // defaults maxValue minValue
    // xtype numberfield sliderwidget publishOnComplete
    // style backgroundColor red green blue

    extend: 'Ext.panel.Panel',
    xtype: 'DataBinding_7_slider_formfield_view',

    requires: [
        'Ext.slider.Widget',
    ],
    viewModel: {
        data: {
            red: 100,
            green: 100,
            blue: 100,
        }
    },

    title: 'COLOR COMPONENTS',
    width: 500,
    bodyPadding: 10,

    layout: 'anchor',
    defaults: {
        anchor: '0',
        labelWidth: 60,
        layout: {
            type: 'hbox',
            align: 'center',
        },
    },

    defaultType: 'fieldcontainer',  // 
    items: [
        // 1. RED: fieldcontainer minValue maxValue numberfield sliderwidget publishOnComplete
        {
            fieldLabel: 'RED',
            defaults: {
                maxValue: 255,
                minValue: 0,
            },
            items: [
                {
                    xtype: 'numberfield', width: 100, margin: '0 10 0 0',
                    bind: {
                        value: '{red}',     // CYDB - BIND cùng 1 value
                    },
                },
                {
                    xtype: 'sliderwidget', flex: 1, publishOnComplete: false,
                    bind: {
                        value: '{red}',     // CYDB - BIND cùng 1 value
                    },
                },
            ]
        },
        // 2. GREEN: fieldcontainer minValue maxValue numberfield sliderwidget publishOnComplete
        {
            fieldLabel: 'GREEN',
            defaults: {
                maxValue: 255,
                minValue: 0,
            },
            items: [
                {
                    xtype: 'numberfield', width: 100, margin: '0 10 0 0',
                    bind: {
                        value: '{green}'
                    },
                },
                {
                    xtype: 'sliderwidget', flex: 1, publishOnComplete: false,
                    bind: {
                        value: '{green}'
                    },
                },
            ]
        },
        // 3. BLUE: fieldcontainer minValue maxValue numberfield sliderwidget publishOnComplete
        {
            fieldLabel: 'BLUE',
            defaults: {
                maxValue: 255,
                minValue: 0,
            },
            items: [
                {
                    xtype: 'numberfield', width: 100, margin: '0 10 0 0',
                    bind: {
                        value: '{blue}',    // CYDB - BIND cùng 1 value
                    },
                },
                {
                    xtype: 'sliderwidget', flex: 1, publishOnComplete: false,
                    bind: {
                        value: '{blue}',    // CYDB - BIND cùng 1 value
                    },
                },
            ]
        },
        // 4.4.4. BOX COMPONENT: component backgroundColor red green blue
        {
            xtype: 'component',
            height: 100,
            bind: {
                style: {
                    backgroundColor: '#{red: hex(2)}{green: hex(2)}{blue: hex(2)}',
                }
            }
        }
    ]
})


// ========================================== CODE GỐC ======================================= //


// /*
//  * Shows how a Slider widget can be used with a ViewModel.
//  */
// Ext.define('KitchenSink.view.binding.SliderWidget', {
//     extend: 'Ext.panel.Panel',
//     xtype: 'binding-slider-form',

//     requires: [
//         'Ext.slider.Widget'
//     ],

//     title: 'Color Components',
//     width: 400,
//     bodyPadding: 10,

//     viewModel: {
//         data: {
//             red: 64,
//             green: 110,
//             blue: 220
//         }
//     },

//     layout: 'anchor',
//     defaultType: 'fieldcontainer',
//     defaults: {
//         anchor: '0',
//         labelWidth: 60,
//         layout: {
//             type: 'hbox',
//             align: 'center'
//         }
//     },

//     items: [{
//         fieldLabel: 'Red',
//         defaults: {
//             maxValue: 255,
//             minValue: 0
//         },
//         items: [
//             { xtype: 'numberfield', width: 100, bind: '{red}', margin: '0 10 0 0' },
//             { xtype: 'sliderwidget', flex: 1, bind: '{red}', publishOnComplete: false }
//         ]
//     },{
//         fieldLabel: 'Green',
//         defaults: {
//             maxValue: 255,
//             minValue: 0
//         },
//         items: [
//             { xtype: 'numberfield', width: 100, bind: '{green}', margin: '0 10 0 0' },
//             { xtype: 'sliderwidget', flex: 1, bind: '{green}', publishOnComplete: false }
//         ]
//     },{
//         fieldLabel: 'Blue',
//         defaults: {
//             maxValue: 255,
//             minValue: 0
//         },
//         items: [
//             { xtype: 'numberfield', width: 100, bind: '{blue}', margin: '0 10 0 0' },
//             { xtype: 'sliderwidget', flex: 1, bind: '{blue}', publishOnComplete: false }
//         ]
//     }, {
//         xtype: 'component',
//         height: 100,
//         bind: {
//             style: {
//                 backgroundColor: '#{red:hex(2)}{green:hex(2)}{blue:hex(2)}'
//             }
//         }
//     }]
// });