/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp.Application',

    name: 'MyApp',

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],

    // The name of the initial view to create.
    // mainView: 'MyApp.view.main.Main'

    // mainView: 'MyApp.view.main.Bai2AbsoluteLayout'
    // mainView: 'MyApp.view.main.Bai3VboxLayout'
    // mainView: 'MyApp.view.main.Bai4HboxLayout'
    
    // mainView: 'MyApp.view.main.Bai5TableLayout'
    // mainView: 'MyApp.view.main.Bai5TableLayoutVersion2'

    // BÀI 6: LAYOUT
    // mainView: 'MyApp.view.main.Bai6CenterLayout-1'
    // mainView: 'MyApp.view.main.Bai6CenterLayout-2'
    // mainView: 'MyApp.view.main.Bai6CenterLayout-3'   // CHƯA CODE - FOR
    
    // mainView: 'MyApp.view.main.Bai6-Layout-1-Vbox'   // DỌC
    // mainView: 'MyApp.view.main.Bai6-Layout-2-Hbox',  // NGANG
    // mainView: 'MyApp.view.main.Bai6-Layout-3-Form',      // LỖI
    // mainView: 'MyApp.view.main.Bai6-Layout-4-Fit',      // FIT = "KHỚP với CONTAINER" = RESPONSIVE
    // mainView: 'MyApp.view.main.Bai6-Layout-5-Center',      // CENTER = "CĂN GIỮA"
    
    
    
    // BÀI 7
    // mainView: 'MyApp.view.main.Bai7FitLayout-1',
    // mainView: 'MyApp.view.main.Bai7FitLayout-2',
    
    
    // ================================================================================== //
    
    
    // PROJECT - CODE HELP: 1. counter
    // mainView: 'MyApp.view.main.projectCounter1File.projectCounter1FileView',
    // mainView: 'MyApp.view.main.projectCounter2File.projectCounter2FileView',
    // mainView: 'MyApp.view.main.projectCounter3File.projectCounter3FileView',
    // mainView: 'MyApp.view.main.projectCounter4File.projectCounter4FileView',     // chua xong - chua tach STORE 
    
    
    // mainView: 'MyApp.view.main.Lession1Panel.Main1',      // truyền đúng 'ĐỊA CHỈ - DEFINE' = 'MyApp.view.main.Lession1Panel'

    // ====================================== ============ ====================================== //
    // ====================================== KITCHEN SINK ====================================== //
    // ====================================== ============ ====================================== //

    // DATA BIDING
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_1_helloWorld_view',                           // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_2_dynamic_view',                                  // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_2_dynamic_cach2_view',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_3_two_way_view',                                  // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_4_model_formulas_view',                               // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_5_component_state_view',                              // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_6_twoway_formulas_1_fullname_view',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_6_twoway_formulas_view',                              // chưa chạy
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_7_slider_formfield_view',                             // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_8_binary_operate_view',                               / KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_9_ternary_operate_view',                              // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_10_formatter_view',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.DataBinding_11_unary_operator_view',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK - chưa xong
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK - chưa xong
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK - chưa xong

    // FORM FIELDS:
    // mainView: 'MyApp.view.main.KitchenSink.FormField_1_number_field_view',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.FormField_2_date_month_picker_view',                            // KITCHEN SINK
    
    // mainView: 'MyApp.view.main.KitchenSink.FormField_3_combobox_1_simple_view',                            // KITCHEN SINK - "CYDB"
    // chua lam - 2.REMOTE LOADED
    // chua lam - 3.REMOTE QUERY
    // mainView: 'MyApp.view.main.KitchenSink.FormField_3_combobox_4_custome_template_view',                            // KITCHEN SINK - "CYDB"
    // mainView: 'MyApp.view.main.KitchenSink.FormField_4_file_field_view',                            // KITCHEN SINK - "CYDB"

    // mainView: 'MyApp.view.main.KitchenSink.FormField_5_field_replicator_view',                            // KITCHEN SINK - chua chay - "CYDB"

    mainView: 'MyApp.view.main.KitchenSink.FormField_6_form_with_grid_view',                            // KITCHEN SINK - "CYDB" = HAY
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    // mainView: 'MyApp.view.main.KitchenSink.MAU',                            // KITCHEN SINK
    
});
