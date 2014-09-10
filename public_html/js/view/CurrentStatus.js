/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('Stamp.view.CurrentStatus.Sbar', {
    extend: 'Ext.Toolbar',
    alias: 'widget.cssearchbar',

    requires: [
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.Button'
    ],

    config: {
        docked: 'top',
        items: [
            {
                xtype: 'selectfield',
                label: 'Location',
                labelWidth: '40%',
                labelWrap: 'true',                
                options: [
                    {
                        text: 'Kings Heights',
                        value: 'KingsHeights'
                    },
                    {
                        text: 'Legacy',
                        value: 'Legacy'
                    },
                    {
                        text: 'Mahogany',
                        value: 'Mahogany'
                    },
                    {
                        text: 'Sherwood',
                        value: 'Sherwood'
                    },
                    {
                        text: 'Sunset Ridge',
                        value: 'SunsetRidge'
                    }                    
                ]
            },
            {
                xtype: 'datepickerfield',
                label: 'Date',
                placeHolder: 'mm/dd/yyyy'
            },
            {
                xtype: 'button',
                text: 'Go'
            }
        ]
    }

});


Ext.define('Stamp.view.CurrentStatus.TableContainer', {
    extend: 'Ext.Container',
    alias: 'widget.cstabcontainer',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'list',
                id: 'currentstatusList',
                itemTpl: [
//                    '<div>{FName}</div>'
                    '<div><table border="0" cellpadding="1" cellspacing="1" style="width: 90%">',
                    '			<tbody>',
                    '				<tr>',
                    '					<td>',
                    '                        <strong>{EmpID}/{FName} {LName}</strong></td>',
                    '				</tr>',
                    '				<tr><td></td>',                    
                    '				</tr>',                    
                    '				<tr>',
                    '					<td>',
                    '						<table border="0" cellpadding="1" cellspacing="1" style="width: 90%">',
                    '							<tbody>',
                    '								<tr>',
                    '									<td>',
                    '                                        CheckIn: &nbsp; &nbsp;<strong>{CheckIn}</strong><br />',
                    '                                        CheckOut: <strong>{CheckOut}</strong></td>',
                    '									<td>',
                    '										Hours:(Actual/Overtime)<br />',
                    '                                        <strong>{TotalHours}({NormalHours}/{ExtraHours})</strong></td>',
                    '								</tr>',
                    '							</tbody>',
                    '						</table>',
                    '					</td>',
                    '				</tr>',
                    '			</tbody>',
                    '		</table></div>'
                ]
            }
        ]
    }

});

Ext.define('Stamp.view.CurrentStatus.Main', {
    extend: 'Ext.Container',
    xtype: 'currentstatusmain',
    requires: [
        'Stamp.view.CurrentStatus.Sbar',
        'Stamp.view.CurrentStatus.TableContainer',
        'Ext.Toolbar'
    ],
    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Current Status',
                items: [{
                        iconCls: 'more',
                        handler: function() {
                            Ext.Viewport.child('mainmenu').toggle();
                        }
                    }]
            }
            ,
            {
                xtype: 'cssearchbar'
            }
            ,
            {
                xtype: 'cstabcontainer',
                flex: 1
            }
        ]
    }

});