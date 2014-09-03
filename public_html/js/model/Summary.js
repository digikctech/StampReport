/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
    Created on : Sep 1, 2014, 11:00:16 PM
    Author     : Dhanasekar Karuppanan
*/
Ext.define('Stamp.model.Summary', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'summarykey'
            },
            {
                name: 'summaryvalue'
            }
        ]
    }});

