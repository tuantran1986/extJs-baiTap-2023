Ext.define('MyApp.view.main.Bai6-Layout-3-Form', {

    // CHƯA CHẠY ĐÚNG ???

    extend: 'Ext.Container',
    // xtype: 'Bai6-Layout-3-Form',

    defaults: {
        bodyPadding: 10,
        autoSize: true,
        width: 400,
    },

    items: [
        // form 1
        {
            layout: 'form',         // cydb
            items: [
                {
                    html: 'The fields in this form auto-width to short labels.',
                    width: '100%',
                },
                {
                    xtype: 'textfield',
                    labelAlign: 'left',
                    fieldLabel: 'short',
                },
                {
                    xtype: 'textfield',
                    labelAlign: 'left',
                    fieldLabel: 'tiny',
                },
            ]
        },
    ]
})


// ================================================================================= //

        // Ext.define('KitchenSink.view.layout.Form', {
        //     extend: 'Ext.Container',
        //     xtype: 'layout-form',

        //     requires: [
        //         'Ext.layout.Form'
        //     ],

        //     width: 400,
        //     autoSize: true,

        //     defaults: {
        //         autoSize: true,
        //         bodyPadding: 10
        //     },

        //     items: [{
        //         xtype: 'formpanel',
        //         shadow: 'true',
        //         layout: 'form',
        //         items: [{
        //             xtype: 'component',
        //             docked: 'top',
        //             cls: 'demo-solid-background',
        //             padding: 5,
        //             html: 'The fields in this form auto-width to short labels.'
        //         }, {
        //             xtype: 'textfield',
        //             labelAlign: 'left',
        //             label: 'Short'
        //         }, {
        //             xtype: 'textfield',
        //             labelAlign: 'left',
        //             label: 'Tiny'
        //         }]
        //     }, {
        //         xtype: 'formpanel',
        //         shadow: 'true',
        //         layout: 'form',
        //         margin: '20 0',
        //         items: [{
        //             xtype: 'component',
        //             docked: 'top',
        //             cls: 'demo-solid-background',
        //             padding: 5,
        //             html: 'The fields in this form auto-width to a long label.'
        //         }, {
        //             xtype: 'textfield',
        //             labelAlign: 'left',
        //             label: 'Short'
        //         }, {
        //             xtype: 'textfield',
        //             labelAlign: 'left',
        //             label: 'Very Long Label Affects Other Fields'
        //         }]
        //     }, {
        //         xtype: 'formpanel',
        //         shadow: 'true',
        //         layout: {
        //             type: 'form',
        //             labelWidth: 125
        //         },
        //         items: [{
        //             xtype: 'component',
        //             docked: 'top',
        //             cls: 'demo-solid-background',
        //             padding: 5,
        //             html: 'The labels in this form will have a static width of 125.'
        //         }, {
        //             xtype: 'textfield',
        //             labelAlign: 'left',
        //             label: 'Short'
        //         }, {
        //             xtype: 'textfield',
        //             labelAlign: 'left',
        //             label: 'Very Long Label That Will Be Clipped'
        //         }]
        //     }]
        // });