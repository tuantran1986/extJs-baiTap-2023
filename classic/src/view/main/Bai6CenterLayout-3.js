// // CHƯA ĂN CODE - chưa dùng được - "FOR"


// Ext .define('MyApp.view.main.Bai6CenterLayout-3', {
//     extend: 'Ext.Container',            // extend Ext Container

//     xtype: 'Bai6CenterLayout-3',        // export - TÊN VIEW

//     title: 'Center Layout',     // tiêu đề
//     layout: 'center',           // BỐ CỤC - "CĂN GIỮA"
//     width: 280,                 // rộng - PX
//     height: 260,                

//     defaults: {
//         padding: '10 0 0 10',
//     },

//     // nội dung
//     items: [
//         {
//             xtype: 'panel',
//             title: '75% - of container hight and width',
//             layout: 'center',       // BỐ CỤC - "CĂN GIỮA"
//             scrollable: true,       // CHO PHÉP - SCROLL
//             border: true,           // viền

//             width: '75%',           // rộng - %
//             height: '75%',          // cao - %
//             bodyPadding: '10 20',   // padding

//             // createItems: function() {
//             //     var me = this;
//             //     var arrItem = [];
//             //     for (let i = 0; i < 5; i++) {
//             //         const objItem = {
//             //             xtype: 'panel',
//             //             frame: true,
//             //             width: me.width, 
//             //             height: me.height, 
//             //         }
//             //         arrItem.push(objItem);
//             //         me.width = me.width /2;
//             //         me.height = me.heightwidth /2; 
//             //     }
//             //     return arrItem;
//             // },

//             // items: []   
            
//             createItems: function() {
//                 return [
//                     {
//                         xtype: 'panel',
//                         title: 'Inner Centered Panel',
//                         html: 'fixed 300px width + full length',
//                         width: 300,         
//                         height: '100%',             // cao - %
//                         border: true,               
//                         bodyPadding: '10 20'
//                     }
//                 ]  
//             },
//             items: createItems(),         
//         }
//     ]
// })