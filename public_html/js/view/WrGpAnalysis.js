/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('Stamp.view.WrGpAnalysis.PieAllHrs', {
    extend: 'Ext.Container',
    alias: 'widget.wrgpanalysispieallhrs',
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
                id: 'wrgpanalysispieallhrs',
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
                        labelField: 'WorkGroup',
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

Ext.define('Stamp.view.WrGpAnalysis.PieExtraHrs', {
    extend: 'Ext.Container',
    alias: 'widget.wrgpanalysispieextrahrs',
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
                id: 'wrgpanalysispieextrahrs',
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
                        labelField: 'WorkGroup',
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

Ext.define('Stamp.view.WrGpAnalysis.Carousel', {
    extend: 'Ext.carousel.Carousel',
    alias: 'widget.wrgpanalysiscarousel',
    requires: [
        'Stamp.view.WrGpAnalysis.PieAllHrs',
        'Stamp.view.WrGpAnalysis.PieExtraHrs',
        'Ext.chart.PolarChart'
    ],
    defaults: {
        styleHtmlContent: true
    },
    config: {
        items: [
            {
                xtype: 'wrgpanalysispieallhrs'
            },
            {
                xtype: 'wrgpanalysispieextrahrs'
            }
        ]
    }
});

Ext.define('Stamp.view.WrGpAnalysis.Main', {
    extend: 'Ext.Container',
    xtype: 'wrgpanalysismain',
    requires: [
        'Stamp.view.SearchBar',
        'Stamp.view.WrGpAnalysis.Carousel',
        'Ext.Toolbar',
        'Ext.carousel.Carousel'
    ],
    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'WorkGroup Analysis',
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
                xtype: 'wrgpanalysiscarousel',
                flex: 1
            }
        ]
    }

});