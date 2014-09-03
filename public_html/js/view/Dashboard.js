/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Stamp.view.Dashboard.Piechart', {
    extend: 'Ext.chart.PolarChart',
    xtype: 'dashboardpiechart',
    requires: [
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate'
    ],
    config: {
        colors: [
            '#115fa6',
            '#94ae0a',
            '#a61120',
            '#ff8809',
            '#ffd13e',
            '#a61187',
            '#24ad9a',
            '#7c7474',
            '#a66111'
        ],
        series: [
            {
                type: 'pie',
                labelField: 'Location',
                xField: 'Hours',
                donut: 20
            }
        ],
        interactions: [
            {
                type: 'rotate'
            }
        ]
    }
});

Ext.define('Stamp.view.Dashboard.Summary', {
    extend: 'Ext.Container',
    xtype: 'dashboardsummary',
    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'list',
                store: "summarystore",
                id: 'dashboardlist',
                itemTpl: [
                    '{summarykey}:{summaryvalue}'
                ]
            }
        ]
    }
});

Ext.define('Stamp.view.Dashboard.Linechart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'dashboardlinechart',
    requires: [
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.interactions.PanZoom'
    ],
    config: {
        colors: [
            '#115fa6',
            '#94ae0a',
            '#a61120',
            '#ff8809',
            '#ffd13e',
            '#a61187',
            '#24ad9a',
            '#7c7474',
            '#a66111'
        ],
        axes: [
            {
                type: 'category',
                fields: [
                    'x'
                ]
            },
            {
                type: 'numeric',
                fields: [
                    'y1',
                    'y2'
                ],
                grid: {
                    odd: {
                        fill: '#e8e8e8'
                    }
                },
                position: 'left'
            }
        ],
        interactions: [
            {
                type: 'panzoom'
            }
        ]
    }

});

Ext.define('Stamp.view.Dashboard.Main', {
    extend: 'Ext.Container',
    xtype: 'dashboardmain',
    requires: [
        'Stamp.view.Dashboard.Linechart',
        'Stamp.view.Dashboard.Piechart',
        'Stamp.view.Dashboard.Summary',
        'Ext.chart.CartesianChart',
        'Ext.chart.PolarChart'
    ],
    config: {
        fullscreen: true,
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Dashboard',
                items: [{
                        iconCls: 'more',
                        handler: function() {
                            Ext.Viewport.child('mainmenu').toggle();
                        }
                    }]
            },
            {
                xtype: 'dashboardlinechart',
                flex: 1
            },
            {
                xtype: 'container',
                flex: 1,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'dashboardpiechart',
                        flex: 1
                    },
                    {
                        xtype: 'dashboardsummary',
                        flex: 1
                    }
                ]
            }
        ]
    }

});
