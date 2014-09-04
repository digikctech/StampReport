/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define("Stamp.controller.DashboardController", {
    extend: "Stamp.controller.BaseController",
    config: {
        routes: {
            dashboard:"routeDashboard"            
        },
        refs: {
            summaryList: '#dashboardlist',
            dashboardlinechart: 'dashboardlinechart',
            dashboardpiechart: 'dashboardpiechart'
        },
        control: {
            "#dashboardlist": {
                initialize: 'onDashboardListInit'
            },
            dashboardpiechart: {
                initialize: 'onDashboardPieInit'
            }
        }
    },
    onDashboardListInit: function(a) {
        var b = a.getStore();
        if (b === null)
        {
            var store = Ext.create("Ext.data.Store", {
                storeId: "summarystore",
                model: "Stamp.model.Summary",
                data: [
                    {summarykey: "Total Work Hours for Week", summaryvalue: "10661"},
                    {summarykey: "Average Work Hours per Day", summaryvalue: "1523"}
                ]
            });
            a.setStore(store);
        }
    },
    onDashboardPieInit: function(a) {
        var b = a.getStore();
//        debugger;
        if (b === null)
        {
            var store = Ext.create("Ext.data.Store", {
                storeId: "piestore",
                model: "Stamp.model.LocationHrs",
                data: [
                    {Location:'Kings Heights', Hours:1590},
                    {Location:'Legacy', Hours:1624},
                    {Location:'Mahogany', Hours:1200},
                    {Location:'Sherwood', Hours:1900},
                    {Location:'Sunset Ridge', Hours:1020},
                    {Location:'The Shores', Hours:1102}                
                ]
            });
            a.setStore(store);
        }
    }, 
    routeDashboard: function() {
      this.render("dashboardmain");  
    },
    launch: function() {
    }
    //if (!b.isLoaded() && !b.isLoading())
});



