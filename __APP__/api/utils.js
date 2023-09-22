"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var e = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  r = (function () {
    function r() {
      e(this, r), (this.pluginAppid = wx.getAccountInfoSync().plugin.appId);
    }
    return (
      t(r, [
        {
          key: "dealDialog",
          value: function (e, t) {
            var r = e.currentTarget.id.split("_"),
              n = {};
            for (var i in r) {
              var u = r[i];
              n[u] = !t.data[u];
            }
            t.setData(n);
          },
        },
        {
          key: "getPluginAppid",
          value: function () {
            return this.pluginAppid;
          },
        },
        {
          key: "isKeyExists",
          value: function (e, t) {
            var r = t.split(".");
            if (!e) return !1;
            for (var n = 0; n < r.length; n++) {
              var i = r[n];
              if (!e[i]) return !1;
              e = e[i];
            }
            return !0;
          },
        },
        {
          key: "getElementWidth",
          value: function (e, t) {
            return new Promise(function (r) {
              var n = e.createSelectorQuery();
              n.select(t).boundingClientRect(),
                n.exec(function (e) {
                  e &&
                    e[0] &&
                    (console.log("元素宽度为", e[0].width), r(e[0].width));
                });
            });
          },
        },
      ]),
      r
    );
  })();
exports.default = r;
