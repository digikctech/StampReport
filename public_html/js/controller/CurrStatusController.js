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
                    {EmpID: '331000', FName: 'John', LName: 'Hamilton', Location:'Legacy', CheckInDate:'08/10/2014', CheckInTime:'08:10:10 AM', 
                        CheckOutDate:'08/10/2014', CheckOutTime:'05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9, WorkGroup:"Group1"},
                    {EmpID: '331000', FName: 'David', LName: 'Chen', Location:'Legacy', CheckInDate:'08/10/2014', CheckInTime:'08:10:10 AM', 
                        CheckOutDate:'08/11/2014', CheckOutTime:'05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9, WorkGroup:"Group1"},
                    {EmpID: '331000', FName: 'Nicolos', LName: 'Antony', Location:'Legacy', CheckInDate:'08/10/2014', CheckInTime:'08:10:10 AM', 
                        CheckOutDate:'08/12/2014', CheckOutTime:'05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9, WorkGroup:"Group1"},
                    {EmpID: '331000', FName: 'Joe', LName: 'Kalvert', Location:'Legacy', CheckInDate:'08/10/2014', CheckInTime:'08:10:10 AM', 
                        CheckOutDate:'08/13/2014', CheckOutTime:'05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9, WorkGroup:"Group1"},
                    {EmpID: '331000', FName: 'John', LName: 'Cena', Location:'Legacy', CheckInDate:'08/10/2014', CheckInTime:'08:10:10 AM', 
                        CheckOutDate:'08/14/2014', CheckOutTime:'05:10:00 PM', NormalHours: 8, ExtraHours:1, TotalHours:9, WorkGroup:"Group1"},
                    
                ]
            });
            a.setStore(store);
        }
    },
    routeCurrentStatus: function() {        
        this.render("currentstatusmain");  
    }
});
