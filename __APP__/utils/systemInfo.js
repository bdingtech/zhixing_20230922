"use strict";
"use strict";
function a(a, t) {
  if (!(a instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var t = (function () {
    function a(a, t) {
      for (var e = 0; e < t.length; e++) {
        var o = t[e];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(a, o.key, o);
      }
    }
    return function (t, e, o) {
      return e && a(t.prototype, e), o && a(t, o), t;
    };
  })(),
  e = require("../config/appConfig"),
  o = (function () {
    function o() {
      a(this, o),
        (this.globalData = {
          latitude: 39.916527,
          longitude: 116.397128,
          bottomspace: 0,
          isNoShareLink: !1,
          scalefactor: 2,
          windowHeight: 667,
          locationBtnLeftSpace: 8,
          CDN_PATH: e.CDN_PATH,
        }),
        this.init();
    }
    return (
      t(o, [
        {
          key: "init",
          value: function () {
            var a = this;
            wx.getSystemInfo({
              success: function (t) {
                a.globalData.platform = t.platform;
                var e = t.screenHeight - t.windowHeight;
                (a.globalData.windowHeight = t.windowHeight),
                  (a.globalData.isIPhoneX = !1),
                  (a.globalData.isIOS = !1),
                  -1 !== t.system.indexOf("iOS") && (a.globalData.isIOS = !0),
                  -1 !== t.model.indexOf("iPhone X") ||
                  -1 !== t.model.indexOf("iPhone 11") ||
                  -1 !== t.model.indexOf("iPhone11") ||
                  -1 !== t.model.indexOf("iPhone12")
                    ? ((a.globalData.bottomspace = 30),
                      (a.globalData.scalefactor = 2),
                      (a.globalData.windowHeight = t.screenHeight),
                      (a.globalData.locationBtnLeftSpace = 11),
                      (a.globalData.isIPhoneX = !0),
                      (e = 88))
                    : -1 !== t.model.indexOf("iPhone 6") &&
                      -1 === t.model.indexOf("iPhone 6 Plus")
                    ? ((a.globalData.scalefactor = 2),
                      (a.globalData.windowHeight = t.screenHeight),
                      (a.globalData.locationBtnLeftSpace = 8),
                      (e = 64))
                    : -1 !== t.model.indexOf("iPhone 6 Plus")
                    ? ((a.globalData.scalefactor = 2),
                      (a.globalData.windowHeight = t.screenHeight),
                      (a.globalData.locationBtnLeftSpace = 8),
                      (e = 64))
                    : -1 !== t.model.indexOf("iPhone 7") &&
                      -1 === t.model.indexOf("iPhone 7 Plus")
                    ? ((a.globalData.scalefactor = 2),
                      (a.globalData.windowHeight = t.screenHeight),
                      (a.globalData.locationBtnLeftSpace = 8),
                      (e = 64))
                    : -1 !== t.model.indexOf("iPhone 7 Plus")
                    ? ((a.globalData.scalefactor = 2),
                      (a.globalData.windowHeight = t.screenHeight),
                      (a.globalData.locationBtnLeftSpace = 9),
                      (e = 64))
                    : -1 !== t.model.indexOf("iPhone")
                    ? ((a.globalData.scalefactor = 2),
                      (a.globalData.windowHeight = t.screenHeight),
                      (a.globalData.locationBtnLeftSpace = 8),
                      (e = 64))
                    : ((a.globalData.scalefactor = 1),
                      (a.globalData.windowHeight = t.screenHeight),
                      t.model.indexOf("samsung") > -1
                        ? (e = 72)
                        : ((e = 68),
                          (34 !== t.statusBarHeight &&
                            43 !== t.statusBarHeight) ||
                            (e = 88))),
                  (a.globalData.titleBarHeight = e - t.statusBarHeight),
                  (a.globalData.statusBarHeight = t.statusBarHeight),
                  (a.globalData.totalTopHeight = e),
                  (a.globalData.windowWidth = t.windowWidth),
                  (a.globalData.windowHeight = a.globalData.windowHeight - e),
                  (a.globalData.bodyHeight = t.screenHeight - e),
                  (a.globalData.containTitleHeight =
                    a.globalData.bodyHeight + a.globalData.titleBarHeight);
              },
              failure: function () {
                (this.globalData.statusBarHeight = 0),
                  (this.globalData.titleBarHeight = 0),
                  (this.globalData.windowHeight = 0),
                  (this.globalData.windowWidth = 0);
              },
            });
          },
        },
      ]),
      o
    );
  })();
exports.default = new o();
