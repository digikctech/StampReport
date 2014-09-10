/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define("Stamp.controller.EmpReportController", {
    extend: "Stamp.controller.BaseController",
    config: {
        refs: {        
            empreportlist: '#empreportlist',
            empreportsearchbar: 'empreportsearchbar'
        },
        routes: {
            employeeReport: 'routeEmpReport'
        },
        control: {
            empreportlist: {
                initialize: 'onEmpreportlistInit'
            }
        }
    },
    launch: function() {
    },
    onEmpreportlistInit: function(a) {
        Ext.getCmp('empfldidname').setValue('331000/John Hamilton');
        Ext.getCmp('empfldTotalhrs').setValue('45');
        Ext.getCmp('empfldacthrs').setValue('40');
        Ext.getCmp('empfldothrs').setValue('5');
        var b = a.getStore();
//        debugger;
        if (b === null)
        {
            var store = Ext.create("Ext.data.Store", {
                storeId: "empreportstore",
                model: "Stamp.model.EmployeeHrs",
                data: [
                    {EmpID: '331000', FName: 'John', LName: 'Hamilton', Location:'Legacy', CheckIn:'08/10/2014 08:10:10 AM', 
                        CheckOut:'08/10/2014 05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9, WorkGroup:"Group1"},
                    {EmpID: '331000', FName: 'John', LName: 'Hamilton', Location:'Legacy', CheckIn:'08/11/2014 08:10:10 AM', 
                        CheckOut:'08/11/2014 05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9, WorkGroup:"Group1"},
                    {EmpID: '331000', FName: 'John', LName: 'Hamilton', Location:'Legacy', CheckIn:'08/12/2014 08:10:10 AM', 
                        CheckOut:'08/12/2014 05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9, WorkGroup:"Group1"},
                    {EmpID: '331000', FName: 'John', LName: 'Hamilton', Location:'Legacy', CheckIn:'08/13/2014 08:10:10 AM', 
                        CheckOut:'08/13/2014 05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9, WorkGroup:"Group1"},
                    {EmpID: '331000', FName: 'John', LName: 'Hamilton', Location:'Legacy', CheckIn:'08/14/2014 08:10:10 AM', 
                        CheckOut:'08/14/2014 05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9, WorkGroup:"Group1"},
                ]
            });
            a.setStore(store);
        }
    },
    routeEmpReport: function() {        
        this.render("empreportmain");  
    }
});
