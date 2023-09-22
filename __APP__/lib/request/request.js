"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.checkLogin = exports.doLogin = exports.request = void 0);
var e = require("../../config/app.config"),
  o = require("../storage/storage"),
  t = !1,
  n = [],
  r = e.request.max_try || 3,
  s = e.request.app_type,
  i = function (e) {
    var o = u();
    return Object.assign(e || {}, { vid: o.vid, skey: o.skey });
  },
  a = function (e, o) {
    var t;
    return (
      200 === e.statusCode ||
      ((t = /^5\d+/g.test(e.statusCode)
        ? "系统繁忙，请稍后重试"
        : "请确保网络通畅，并重试"),
      (o && o.silent) ||
        wx.showModal({
          showCancel: !1,
          title: "网络异常",
          content: t,
          confirmText: "确定",
        }),
      !1)
    );
  },
  c = function (e) {
    return new Promise(function (o, t) {
      u().skey || !0 === e.ignore ? o() : t(new Error("empty session"));
    });
  };
exports.checkLogin = c;
var u = function () {
    return o.getStorage("session", !1) || {};
  },
  d = function (t) {
    var n = o.getStorage("freego", !1) || {};
    return new Promise(function (t, r) {
      new Promise(function (e, o) {
        wx.login({ success: e, fail: o });
      })
        .then(function (i) {
          console.info("codeInfo %o", i),
            wx.request({
              url: e.request.api_prefix + "xcx/login",
              method: "POST",
              dataType: "json",
              data: { type: s, code: i.code },
              header: {
                cookie: n.cookie || "",
                "Content-Type": "application/x-www-form-urlencoded",
              },
              success: function (e) {
                var n,
                  i = e.data.data;
                console.log("login response: %o", i),
                  a(e) && i && "skey" in i
                    ? ((n = {
                        gid: i.gid,
                        skey: i.skey,
                        vid: i.vid,
                        type: s,
                        corpname: i.corp_name,
                      }),
                      o.setStorage("session", n, !1),
                      t(e))
                    : r(e);
              },
              fail: r,
            });
        })
        .catch(function (e) {
          wx.showModal({ content: "登录失败", showCancel: !1 });
        });
    });
  };
exports.doLogin = d;
exports.request = function (s) {
  var u = o.getStorage("freego", !1) || {},
    l = function (o, c) {
      (s.success = function (e) {
        console.log("request sucess callback:%o", e),
          a(e, s)
            ? e.data && e.data.result && -3 === e.data.result.errCode
              ? ((s.tryTimes = s.tryTimes || 0),
                s.tryTimes++,
                s.tryTimes < r
                  ? t
                    ? n.push(s)
                    : ((t = !0),
                      (n = []),
                      d()
                        .then(function () {
                          (t = !1),
                            (s.data = i(s.data)),
                            wx.request(s),
                            n.forEach(function (e, o) {
                              (e.data = i(e.data)), wx.request(e);
                            });
                        })
                        .catch(function () {
                          t = !1;
                        }))
                  : o({ data: { retcode: -102, retmsg: "login abort" } }))
              : o(e)
            : c(e);
      }),
        (s.fail = function (e) {
          c(e);
        }),
        (s.url = /^http/g.test(s.url) ? s.url : e.request.api_prefix + s.url),
        (s.data = i(s.data)),
        (s.method = s.method || "GET"),
        (s.header = Object.assign(s.header || {}, {
          cookie: u.cookie || "",
          "Content-Type": "application/json",
        })),
        console.log("request options:%o", s),
        wx.request(s);
    };
  return new Promise(function (e, o) {
    c(s)
      .then(function () {
        l(e, o);
      })
      .catch(function () {
        d()
          .then(function () {
            l(e, o);
          })
          .catch(function (e) {
            console.log("login error %o", e),
              wx.showModal({ content: "登录失败", showCancel: !1 });
          });
      });
  });
};
