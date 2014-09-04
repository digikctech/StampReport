/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define("Stamp.controller.LocAnalysisController", {
    extend: "Stamp.controller.BaseController",
    config: {
        refs: {
            locanalysispieallhrs: '#locanalysispieallhrs',
            locanalysispieextrahrs: '#locanalysispieextrahrs',
            searchbar: 'searchbar'
        },
        routes: {
            siteAnalysis: 'routeSiteAnalysis'
        },
        control: {
            locanalysispieallhrs: {
                initialize: 'onLocationPieAllInit'
            },
            locanalysispieextrahrs: {
                initialize: 'onLocationPieExtraInit'
            }
        }
    },
    launch: function() {
    },
    onLocationPieAllInit: function(a) {
        var b = a.getStore();
//        debugger;
        if (b === null)
        {
            var store = Ext.create("Ext.data.Store", {
                storeId: "locpieallstore",
                model: "Stamp.model.LocationHrs",
                data: [
                    {Location: 'Kings Heights', Hours: 1590},
                    {Location: 'Legacy', Hours: 1624},
                    {Location: 'Mahogany', Hours: 1200},
                    {Location: 'Sherwood', Hours: 1900},
                    {Location: 'Sunset Ridge', Hours: 1020},
                    {Location: 'The Shores', Hours: 1102}
                ]
            });
            a.setStore(store);
        }
    },
    onLocationPieExtraInit: function(a) {
        var b = a.getStore();
//        debugger;
        if (b === null)
        {
            var store = Ext.create("Ext.data.Store", {
                storeId: "locpieextrastore",
                model: "Stamp.model.LocationHrs",
                data: [
                    {Location: 'Kings Heights', Hours: 300},
                    {Location: 'Legacy', Hours: 500},
                    {Location: 'Mahogany', Hours: 600},
                    {Location: 'Sherwood', Hours: 700},
                    {Location: 'Sunset Ridge', Hours: 800},
                    {Location: 'The Shores', Hours: 900}
                ]
            });
            a.setStore(store);
        }
    },
    routeSiteAnalysis: function() {
      this.render("locanalysismain");  
    },    
});
