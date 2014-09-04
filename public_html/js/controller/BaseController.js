/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define("Stamp.controller.BaseController", {
    extend: Ext.app.Controller,

    render: function(b) {
        var a = Ext.Viewport.child(b) || Ext.Viewport.add({
            xtype: b
        });
        if (a.isInnerItem()) {
            Ext.Viewport.setActiveItem(a);
        } else {
            a.show();
        }
        return a;
    }
//    ,
//    requireLogin: function() {
//        if (User.isLoggedIn) {
//            return false
//        }
//        this.render("loginpanel");
//        return true
//    }
});


