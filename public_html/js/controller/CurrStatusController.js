/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define("Stamp.controller.CurrStatusController", {
    extend: "Stamp.controller.BaseController",
    config: {
        refs: {        
            currentstatusList: '#currentstatusList',
            cssearchbar: 'cssearchbar'
        },
        routes: {
            currentStatus: 'routeCurrentStatus'
        },
        control: {
            currentstatusList: {
                initialize: 'onCurrentstatusListInit'
            }
        }
    },
    launch: function() {
    },
    onCurrentstatusListInit: function(a) {
        var b = a.getStore();
//        debugger;
        if (b === null)
        {
            var store = Ext.create("Ext.data.Store", {
                storeId: "currstatusstore",
                model: "Stamp.model.EmployeeHrs",
                data: [
                    {EmpID: '331000', FName: 'John', LName: 'Hamilton', Location:'Legacy', CheckIn:'08/10/2014 08:10:10 AM', 
                        CheckOut:'08/10/2014 05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9},
                    {EmpID: '331001', FName: 'David', LName: 'Chen', Location:'Legacy', CheckIn:'08/10/2014 09:10:10 AM', 
                        CheckOut:'08/10/2014 05:10:00 PM', NormalHours: 8, ExtraHours:0, TotalHours:8},
                    {EmpID: '331002', FName: 'Nicolos', LName: 'Antony', Location:'Legacy', CheckIn:'08/10/2014 08:10:10 AM', 
                        CheckOut:'08/10/2014 05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9},
                    {EmpID: '331003', FName: 'Joe', LName: 'Kalvert', Location:'Legacy', CheckIn:'08/10/2014 08:10:10 AM', 
                        CheckOut:'08/10/2014 05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9},
                    {EmpID: '331004', FName: 'John', LName: 'Cena', Location:'Legacy', CheckIn:'08/10/2014 08:10:10 AM', 
                        CheckOut:'08/10/2014 05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9}                    
                ]
            });
            a.setStore(store);
        }
    },
    routeCurrentStatus: function() {        
        this.render("currentstatusmain");  
    }
});
