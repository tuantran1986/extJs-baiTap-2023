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

    // BÀI 6
    // mainView: 'MyApp.view.main.Bai6CenterLayout-1'
    // mainView: 'MyApp.view.main.Bai6CenterLayout-2'
    // mainView: 'MyApp.view.main.Bai6CenterLayout-3'   // CHƯA CODE - FOR
    
    // BÀI 7
    // mainView: 'MyApp.view.main.Bai7FitLayout-1',
    mainView: 'MyApp.view.main.Bai7FitLayout-2',


});
