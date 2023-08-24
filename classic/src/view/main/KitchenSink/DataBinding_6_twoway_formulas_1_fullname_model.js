Ext.define('MyApp.view.main.KitchenSink.DataBinding_6_twoway_formulas_1_fullname_model', {
    // SUMMARY: formulas
        // get: function(get) 
            // get('varName')
        // set: function(value)
            // this.set({varName: value})

    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.DataBinding_6_twoway_formulas_1_fullname_model',

    formulas: {
        // 1. TÊN = FULLNAME
        fullName: {
            // 1.1. GET: nhận vào 1 HÀM GET = có thể truy suất được các biến trong view = GET('tên_biến')
            // return về 1 giá trị - gán cho biến = fullName
            get: function(get) {
                var first = get('firstName') || '',
                    last = get('lastName');
                return first + ' ' + last;
            },
            // 1.2. SET: nhận vào GIÁ TRỊ FULLNAME
            // tính toán GIÁ TRỊ các BIẾN KHÁC - gán = lệnh THIS.SET({ tên_biến: giá_trị})
            set: function(value) {
                var space = value.indexOf(' '),
                    split = (space < 0) ? value.length : space;

                this.set({
                    firstName: value.substring(0, split),
                    lastName: value.substring(split + 1)
                })
            }
        },
    }
})


// ========================================== CODE GỐC ======================================= //

// Ext.define('KitchenSink.view.binding.TwoWayFormulasModel', {
//     extend: 'Ext.app.ViewModel',

//     alias: 'viewmodel.binding-two-way-formulas',

//     formulas: {
//         age: {
//             get: function (get) {
//                 return this.getAge(get('birthDate'));
//             },

//             set: function (age) {
//                 var date = this.getData().birthDate,
//                     now = new Date();

//                 if (!date) {
//                     date = Ext.Date.add(now, Ext.Date.YEAR, -age);
//                 } else {
//                     date = new Date(now.getFullYear() - age, date.getMonth(), date.getDate());
//                     if (this.getAge(date) !== age) {
//                         date = new Date(now.getFullYear() - age - 1, date.getMonth(), date.getDate());
//                     }
//                 }

//                 this.set('birthDate', date);
//             }
//         },

//         fullName: {
//             get: function (get) {
//                 var ret = get('firstName') || '',
//                     last = get('lastName');

//                 if (last) {
//                     ret += ' ' +  last;
//                 }

//                 return ret;
//             },

//             // By providing the set method "fullName" is two-way bindable.
//             set: function (value) {
//                 var space = value.indexOf(' '),
//                     split = (space < 0) ? value.length : space;

//                 this.set({
//                     firstName: value.substring(0, split),
//                     lastName: value.substring(split + 1)
//                 });
//             }
//         }
//     },

//     getAge: function (date) {
//         var now = new Date(),
//             age, birth;

//         if (date) {
//             age = now.getFullYear() - date.getFullYear();
//             now = now.getMonth() * 100 + now.getDate();
//             birth = date.getMonth() * 100 + date.getDate();
//             if (now < birth) {
//                 --age;
//             }
//         }
//         return age || 0;
//     }
// });


