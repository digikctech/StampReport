/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define("Stamp.controller.WrGpAnalysisController", {
    extend: "Stamp.controller.BaseController",
    config: {
        refs: {
            wrgpanalysispieallhrs: '#wrgpanalysispieallhrs',
            wrgpanalysispieextrahrs: '#wrgpanalysispieextrahrs',
            searchbar: 'searchbar'
        },
        routes: {
            wrgpAnalysis: 'routeWrGpAnalysis'
        },
        control: {
            wrgpanalysispieallhrs: {
                initialize: 'onWorkGrpPieAllInit'
            },
            wrgpanalysispieextrahrs: {
                initialize: 'onWorkGrpPieExtraInit'
            }
        }
    },
    launch: function() {
    },
    onWorkGrpPieAllInit: function(a) {
        var b = a.getStore();
//        debugger;
        if (b === null)
        {
            var store = Ext.create("Ext.data.Store", {
                storeId: "wrgppieallstore",
                model: "Stamp.model.WorkGrpHrs",
                data: [
                    {WorkGroup: 'Grp 1', Hours: 1590},
                    {WorkGroup: 'Grp 2', Hours: 1624},
                    {WorkGroup: 'Grp 3', Hours: 1200},
                    {WorkGroup: 'Grp 4', Hours: 1900},
                    {WorkGroup: 'Grp 5', Hours: 1020},
                    {WorkGroup: 'Grp 6', Hours: 1102}
                ]
            });
            a.setStore(store);
        }
    },
    onWorkGrpPieExtraInit: function(a) {
        var b = a.getStore();
//        debugger;
        if (b === null)
        {
            var store = Ext.create("Ext.data.Store", {
                storeId: "wrgppieextrastore",
                model: "Stamp.model.WorkGrpHrs",
                data: [
                    {WorkGroup: 'Grp 1', Hours: 300},
                    {WorkGroup: 'Grp 2', Hours: 500},
                    {WorkGroup: 'Grp 3', Hours: 600},
                    {WorkGroup: 'Grp 4', Hours: 700},
                    {WorkGroup: 'Grp 5', Hours: 800},
                    {WorkGroup: 'Grp 6', Hours: 900}
                ]
            });
            a.setStore(store);
        }
    },
    routeWrGpAnalysis: function() {
      this.render("wrgpanalysismain");  
    }
});
