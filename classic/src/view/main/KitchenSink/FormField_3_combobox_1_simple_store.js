Ext.define('MyApp.view.main.KitchenSink.FormField_3_combobox_1_simple_store', {
    // SUMMARY: 

    extend: 'Ext.data.Store',
    alias: 'store.FormField_3_combobox_1_simple_store',
    storeId: 'FormField_3_combobox_1_simple_store_Id',

    fields: [
        'STT', 'abbr', 'state', 'description', 'country'
    ],

    // data
    data: [
        {
            STT: 0, abbr: 'AL', state: 'Alabama', country: 'The Heart of Dixie'
        },
        {
            STT: 1, abbr: 'AK', state: 'Alaska', country: 'The Land of the Midnight Sun'
        },
        {
            STT: 2, abbr: 'AZ', state: 'Arizona', country: 'The Grand Canyon State'
        },
        {
            STT: 3, abbr: 'AR', state: 'Arkansas', country: 'The Natural State'
        },
        {
            STT: 4, abbr: 'CA', state: 'California', country: 'The Golden State'
        },
        {
            STT: 5, abbr: 'CO', state: 'Colorado', country: 'The Mountain State'
        },
        {
            STT: 6, abbr: 'CT', state: 'Connecticut', country: 'The Constitution State'
        },
        {
            STT: 7, abbr: 'DE', state: 'Delaware', country: 'The First State'
        },
        {
            STT: 8, abbr: 'DC', state: 'District of Columbia', country: "The Nation's Capital"
        },
        {
            STT: 9, abbr: 'FL', state: 'Florida', country: 'The Sunshine State'
        },
        {
            STT: 10, abbr: 'GA', state: 'Georgia', country: 'The Peach State'
        },
        {
            STT: 11, abbr: 'HI', state: 'Hawaii', country: 'The Aloha State'
        },
        {
            STT: 12, abbr: 'ID', state: 'Idaho', country: 'Famous Potatoes'
        },
        {
            STT: 13, abbr: 'IL', state: 'Illinois', country: 'The Prairie State'
        },
        {
            STT: 14, abbr: 'IN', state: 'Indiana', country: 'The Hospitality State'
        },
        {
            STT: 15, abbr: 'IA', state: 'Iowa', country: 'The Corn State'
        },
        {
            STT: 16, abbr: 'KS', state: 'Kansas', country: 'The Sunflower State'
        },
        {
            STT: 17, abbr: 'KY', state: 'Kentucky', country: 'The Bluegrass State'
        },
        {
            STT: 18, abbr: 'LA', state: 'Louisiana', country: 'The Bayou State'
        },
        {
            STT: 19, abbr: 'ME', state: 'Maine', country: 'The Pine Tree State'
        },
        {
            STT: 20, abbr: 'MD', state: 'Maryland', country: 'Chesapeake State'
        },
    ],
})


// ========================================== CODE GỐC ======================================= //

// Ext.define('KitchenSink.store.States', {
//     extend: 'Ext.data.ArrayStore',

//     alias: 'store.states',

//     model: 'KitchenSink.model.State',

//     storeId: 'states',

//     data: [
//         [0, 'AL', 'Alabama', 'The Heart of Dixie'],
//         [1, 'AK', 'Alaska', 'The Land of the Midnight Sun'],
//         [2, 'AZ', 'Arizona', 'The Grand Canyon State'],
//         [3, 'AR', 'Arkansas', 'The Natural State'],
//         [4, 'CA', 'California', 'The Golden State'],
//         [5, 'CO', 'Colorado', 'The Mountain State'],
//         [6, 'CT', 'Connecticut', 'The Constitution State'],
//         [7, 'DE', 'Delaware', 'The First State'],
//         [8, 'DC', 'District of Columbia', "The Nation's Capital"],
//         [9, 'FL', 'Florida', 'The Sunshine State'],
//         [10, 'GA', 'Georgia', 'The Peach State'],
//         [11, 'HI', 'Hawaii', 'The Aloha State'],
//         [12, 'ID', 'Idaho', 'Famous Potatoes'],
//         [13, 'IL', 'Illinois', 'The Prairie State'],
//         [14, 'IN', 'Indiana', 'The Hospitality State'],
//         [15, 'IA', 'Iowa', 'The Corn State'],
//         [16, 'KS', 'Kansas', 'The Sunflower State'],
//         [17, 'KY', 'Kentucky', 'The Bluegrass State'],
//         [18, 'LA', 'Louisiana', 'The Bayou State'],
//         [19, 'ME', 'Maine', 'The Pine Tree State'],
//         [20, 'MD', 'Maryland', 'Chesapeake State'],
//         [21, 'MA', 'Massachusetts', 'The Spirit of America'],
//         [22, 'MI', 'Michigan', 'Great Lakes State'],
//         [23, 'MN', 'Minnesota', 'North Star State'],
//         [24, 'MS', 'Mississippi', 'Magnolia State'],
//         [25, 'MO', 'Missouri', 'Show Me State'],
//         [26, 'MT', 'Montana', 'Big Sky Country'],
//         [27, 'NE', 'Nebraska', 'Beef State'],
//         [28, 'NV', 'Nevada', 'Silver State'],
//         [29, 'NH', 'New Hampshire', 'Granite State'],
//         [30, 'NJ', 'New Jersey', 'Garden State'],
//         [31, 'NM', 'New Mexico', 'Land of Enchantment'],
//         [32, 'NY', 'New York', 'Empire State'],
//         [33, 'NC', 'North Carolina', 'First in Freedom'],
//         [34, 'ND', 'North Dakota', 'Peace Garden State'],
//         [35, 'OH', 'Ohio', 'The Heart of it All'],
//         [36, 'OK', 'Oklahoma', 'Oklahoma is OK'],
//         [37, 'OR', 'Oregon', 'Pacific Wonderland'],
//         [38, 'PA', 'Pennsylvania', 'Keystone State'],
//         [39, 'RI', 'Rhode Island', 'Ocean State'],
//         [40, 'SC', 'South Carolina', 'Nothing Could be Finer'],
//         [41, 'SD', 'South Dakota', 'Great Faces, Great Places'],
//         [42, 'TN', 'Tennessee', 'Volunteer State'],
//         [43, 'TX', 'Texas', 'Lone Star State'],
//         [44, 'UT', 'Utah', 'Salt Lake State'],
//         [45, 'VT', 'Vermont', 'Green Mountain State'],
//         [46, 'VA', 'Virginia', 'Mother of States'],
//         [47, 'WA', 'Washington', 'Green Tree State'],
//         [48, 'WV', 'West Virginia', 'Mountain State'],
//         [49, 'WI', 'Wisconsin', "America's Dairyland"],
//         [50, 'WY', 'Wyoming', 'Like No Place on Earth']
//     ]
// });