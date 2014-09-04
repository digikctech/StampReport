/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 Created on : Aug 30, 2014, 11:00:16 PM
 Author     : Dhanasekar Karuppanan
 */
Ext.define('SenchaCon.view.Menu', {
    extend: 'Ext.Container',
    xtype: 'mainmenu',
    config: {
        cls: 'mainmenu',
        docked: 'left',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 0,
        width: 266,
        padding: '97 0 0 0',
        open: false,
        scrollable: 'vertical',
        defaultType: 'button',
        defaults: {
            textAlign: 'left'
        },
        items: [
            {
                xtype: 'component',
                cls: 'divider',
                html: 'Infographics'
            }, {
                text: 'Dashboard',
                ui: 'mainmenu',
                href: '#dashboard',
                iconCls: 'ico-schedule'
            }, {
                text: 'Site Analysis',
                ui: 'mainmenu',
                href: '#siteAnalysis',
                iconCls: 'ico-speakers'
            }, {
                text: 'Workgroup Analysis',
                ui: 'mainmenu',
                href: '#wrgpAnalysis',
                iconCls: 'ico-sponsors'
            }, {
                xtype: 'component',
                cls: 'divider',
                html: 'Reports'
            }, {
                text: 'Current Status',
                ui: 'mainmenu',
                href: '#feed',
                iconCls: 'ico-feed'
            }, {
                text: 'Site Report',
                ui: 'mainmenu',
                href: '#tweets',
                iconCls: 'ico-twitter'
            }, {
                text: 'Employee Report',
                ui: 'mainmenu',
                href: '#whoshere',
                iconCls: 'ico-location'
            }]
    },
    setParent: function(parent) {
        this.callParent(arguments);
        this.maskCmp = parent.add({
            xtype: 'component',
            cls: 'mainmenu-mask',
            top: 0,
            zIndex: 5000,
            hidden: true,
            width: 9999,
            left: this.getWidth(),
            bottom: 0
        });

        this.maskCmp.element.on({
            scope: this,
            touchend: 'onMaskRelease'
        });
    },
    onMaskRelease: function() {
        this.setOpen(false);
    },
    onDestroy: function() {
        this.maskCmp.destroy();
        delete this.maskCmp;

        this.callParent(arguments);
    },
    toggle: function() {
        this.setOpen(!this.getOpen());
    },
    updateOpen: function(open) {
        var targetEl,
                parentCt = this.up();

        if (!parentCt) {
            return;
        }

        targetEl = parentCt.innerElement;

        if (open) {
            targetEl.translate(this.getWidth(), 0, 0);
            this.maskCmp.show();
        }
        else {
            targetEl.translate(0, 0, 0);
            this.maskCmp.hide();
        }
    }
});

Ext.application({
    models: ["Company", "Employee", "Site", "SiteDivision", "User","Summary","LocationHrs","WorkGrpHrs"],
    views: ["Dashboard","SearchBar","LocAnalysis","WrGpAnalysis"],
    controllers: ["BaseController","MainController","DashboardController","LocAnalysisController","WrGpAnalysisController"],    
    store: ["SummaryStore"],
    name: "Stamp",
    appFolder: 'js',
    launch: function() {
        this.checkAssets();
    },
    checkAssets: function() {
        var a = this;
        if (document.styleSheets.length > 1) {
            a.onAssetsReady()
        } else {
            Ext.defer(a.checkAssets, 100, a)
        }
    },
    onAssetsReady: function() {
        var viewport = Ext.Viewport;

        // add extra css to viewport
        //Ext.Viewport.innerElement.addCls('viewport-inner');

        // add initial views
        viewport.add([
            {
                xtype: 'mainmenu'
            },
            {
                xtype: 'dashboardmain'
                //xtype: 'locanalysismain'
            }]);

    }});