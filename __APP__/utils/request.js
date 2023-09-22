"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(require("./RequestError"));
exports.default = {
  get: function (t, n) {
    var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new Promise(function (r, o) {
      wx.getNetworkType({
        success: function (s) {
          "none" !== s.networkType
            ? wx.request({
                url: t,
                data: n,
                method: "GET",
                header: u,
                success: function (e) {
                  r(e);
                },
                fail: function (e) {
                  o(e);
                },
              })
            : o(new e.default("网络异常，请稍后重试", -1e3));
        },
      });
    });
  },
  post: function (t, n) {
    var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new Promise(function (r, o) {
      wx.getNetworkType({
        success: function (s) {
          "none" !== s.networkType
            ? wx.request({
                url: t,
                data: n,
                method: "POST",
                header: u,
                success: function (e) {
                  r(e);
                },
                fail: function (e) {
                  o(e);
                },
              })
            : o(new e.default("网络异常，请稍后重试", -1e3));
        },
      });
    });
  },
};
