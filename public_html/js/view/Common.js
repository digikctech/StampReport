Ext.define('Stamp.view.SearchBar', {
    extend: 'Ext.Toolbar',
    alias: 'widget.searchbar',

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
                label: 'Select',
                options: [
                    {
                        text: 'Current Week',
                        value: '1W'
                    },
                    {
                        text: 'Last 2 Week',
                        value: '2W'
                    },
                    {
                        text: 'Current Month',
                        value: '1M'
                    },
                    {
                        text: 'Last Month',
                        value: '2M'
                    },
                    {
                        text: 'Open Entry',
                        value: 'OE'
                    },
                    
                ]
            },
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
                xtype: 'button',
                text: 'Search'
            }
        ]
    }

});