/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('Stamp.view.EmployeeReport.SearchBar', {
    extend: 'Ext.Toolbar',
    alias: 'widget.empreportsearchbar',

    requires: [
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.Button',
        'Ext.field.Search'
    ],

    config: {
        docked: 'top',
        items: [
            {
                xtype: 'datepickerfield',
                label: 'From',
                placeHolder: 'mm/dd/yyyy'
            },
            {
                xtype: 'datepickerfield',
                label: 'To',
                placeHolder: 'mm/dd/yyyy'
            },
            {
                xtype: 'searchfield',
                width: 376,
                label: 'Employee'
            },
            {
                xtype: 'button',
                text: 'Go'
            }
        ]
    }

});

Ext.define('Stamp.view.EmployeeReport.Head', {
    extend: 'Ext.Container',
    alias: 'widget.empreporthead',

    requires: [
        'Ext.Img',
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    config: {
        maxWidth: 600,
        layout: 'hbox',
        items: [
            {
                xtype: 'image',
                height: 200,
                id: 'empimage',
                src: 'images/Person.jpg',
                width: 200
            },
            {
                xtype: 'fieldset',
                height: 188,
                width: 600,
                items: [
                    {
                        xtype: 'textfield',
                        id: 'empfldidname',
                        label: 'ID/Name',
                        labelWidth: '40%',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'empfldTotalhrs',
                        label: 'Total Hours',
                        labelWidth: '40%',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'empfldacthrs',
                        label: 'Actual Hours',
                        labelWidth: '40%',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'empfldothrs',
                        label: 'Overtime Hours',
                        labelWidth: '40%',
                        readOnly: true
                    }
                ]
            }
        ]
    }

});

Ext.define('Stamp.view.EmployeeReport.Body', {
    extend: 'Ext.Container',
    alias: 'widget.empreportbody',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'list',
                id: 'empreportlist',
                itemTpl: [
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

Ext.define('Stamp.view.EmployeeReport.Main', {
    extend: 'Ext.Container',
    xtype: 'empreportmain',
    requires: [
        'Stamp.view.EmployeeReport.SearchBar',
        'Stamp.view.EmployeeReport.Head',
        'Stamp.view.EmployeeReport.Body',
        'Ext.Toolbar'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Employee Report',
                items: [{
                        iconCls: 'more',
                        handler: function() {
                            Ext.Viewport.child('mainmenu').toggle();
                        }
                    }]
            },            
            {
                xtype: 'empreportsearchbar'
            },
            {
                xtype: 'empreporthead'
            },
            {
                xtype: 'empreportbody',
                flex: 1
            }
        ]
    }

});