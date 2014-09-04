/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('Stamp.view.LocAnalysis.PieAllHrs', {
    extend: 'Ext.Container',
    alias: 'widget.locanalysispieallhrs',
    requires: [
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.Legend'
    ],
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'polar',
                id: 'locanalysispieallhrs',
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
                ],
                legend: {
                    xtype: 'legend',
                    docked: 'left'
                }
            }]
    }
});

Ext.define('Stamp.view.LocAnalysis.PieExtraHrs', {
    extend: 'Ext.Container',
    alias: 'widget.locanalysispieextrahrs',
    requires: [
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.Legend'
    ],
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'polar',
                id: 'locanalysispieextrahrs',
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
                ],
                legend: {
                    xtype: 'legend',
                    docked: 'left'
                }
            }
        ]
    }
});

Ext.define('Stamp.view.LocAnalysis.Carousel', {
    extend: 'Ext.carousel.Carousel',
    alias: 'widget.locanalysiscarousel',
    requires: [
        'Stamp.view.LocAnalysis.PieAllHrs',
        'Stamp.view.LocAnalysis.PieExtraHrs',
        'Ext.chart.PolarChart'
    ],
    defaults: {
        styleHtmlContent: true
    },
    config: {
        items: [
            {
                xtype: 'locanalysispieallhrs'
            },
            {
                xtype: 'locanalysispieextrahrs'
            }
        ]
    }
});

Ext.define('Stamp.view.LocAnalysis.Main', {
    extend: 'Ext.Container',
    xtype: 'locanalysismain',
    requires: [
        'Stamp.view.SearchBar',
        'Stamp.view.LocAnalysis.Carousel',
        'Ext.Toolbar',
        'Ext.carousel.Carousel'
    ],
    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Site Analysis',
                items: [{
                        iconCls: 'more',
                        handler: function() {
                            Ext.Viewport.child('mainmenu').toggle();
                        }
                    }]
            },
            {
                xtype: 'searchbar'
            },
            {
                xtype: 'locanalysiscarousel',
                flex: 1
            }
        ]
    }

});