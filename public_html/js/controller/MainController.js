/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define("Stamp.controller.MainController", {
    extend: "Stamp.controller.BaseController",
    config: {
        refs: {
            mainMenu: "mainmenu"
        },
        routes: {
            "twittercallback/:accessToken": "routeTwitterCallback"
        },
        control: {
            "button#menu-btn": {
                tap: "onMainMenuBtnTap"
            },
            "button[href]": {
                tap: "onMenuBtnTap"
            },
            "mainmenu #btn-login": {
                tap: "onBtnMenuLoginTap"
            },
            "loginpanel #btn-login": {
                tap: "onBtnLoginTap"
            },
            "welcome #btn-twitter": {
                tap: "onBtnWelcomeTwitterTap"
            },
            "welcome #btn-nologin": {
                tap: "onBtnWelcomeNoLoginTap"
            }
        }
    },
    init: function() {
        var a = this;
//        User.on({
//            scope: a,
//            loggedin: a.refreshAuthDisplay,
//            loggedout: a.refreshAuthDisplay
//        })
    },
    routeTwitterCallback: function(a) {
        //location.hash = "";
        //User.loadInfo(a)
    },
    onMainMenuBtnTap: function(a) {
        a.up("viewport").child("mainmenu").toggle();
    },
    onMenuBtnTap: function(a) {
        this.redirectTo(a.config.href.substr(1));
        a.up("viewport").child("mainmenu").setOpen(false);
    },
    onBtnMenuLoginTap: function() {
//        if (User.isLoggedIn) {
//            User.logout()
//        } else {
//            this.render("loginpanel")
//        }
    },
    refreshAuthDisplay: function() {
//        var b = this.getMainMenu(),
//            a = b.child("#btn-login");
//        if (User.isLoggedIn) {
//            a.setText("Logout<small>" + User.get("name") + "</small>");
//            a.setIconCls(null);
//            a.setIcon(User.get("twitter_avatar_url"))
//        } else {
//            a.setText("Login<small>with Twitter</small>");
//            a.setIcon(null);
//            a.setIconCls("ico-user")
//        }
    },
    onBtnLoginTap: function(b) {
//        var c = b.up("loginpanel"),
//            a = c.child("#auto-checkin").getChecked();
//        User.login(a)
    },
    onBtnWelcomeTwitterTap: function() {
//        localStorage.setItem("welcome", "1");
//        Ext.Viewport.setMasked({
//            xtype: "loadmask",
//            message: "Redirecting..."
//        });
//        User.login(false)
    },
    onBtnWelcomeNoLoginTap: function(c) {
        var d, b = Ext.Viewport,
            e = b.getLayout(),
            a = c.up("welcome");
        localStorage.setItem("welcome", "1");
        e.setAnimation({
            type: "reveal"
        });
        e.getAnimation().getOutAnimation().setDirection("down");
        b.add([{
            xtype: "mainmenu"
        }, {
            xtype: "dashboardmain"
        }]);
        d = b.child("dashboardmain");
        a.on("hide", function() {
            a.destroy();
            e.setAnimation(false)
        });
        b.setActiveItem(d)
    }
});
