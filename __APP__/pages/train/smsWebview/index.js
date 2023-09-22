!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [92015],
      {
        54491: function (e, t, n) {
          var o,
            s = n(32180),
            r = n(57042),
            a = n(24460),
            u = n(81876),
            i = n(21867),
            c = n(86066),
            d = n(45023),
            m = n(52500),
            f = n(92954),
            l = n(71515),
            v = n(49120),
            g = n(79792),
            h = n(81957),
            p = n(48813),
            w =
              (0, h.h)()(
                (o = (function (e) {
                  (0, i.Z)(n, e);
                  var t = (0, c.Z)(n);
                  function n(e) {
                    var o;
                    return (
                      (0, r.Z)(this, n),
                      (o = t.call(this, e)),
                      (0, d.Z)((0, u.Z)(o), "pageId", "10650060607"),
                      (o.state = { smsNumber: "", smsCode: "", url: "" }),
                      o
                    );
                  }
                  return (
                    (0, a.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t =
                              (0, f.getCurrentInstance)().router &&
                              (0, f.getCurrentInstance)().router.params;
                          console.log("params", t);
                          var n = t.smsNumber,
                            o = void 0 === n ? "" : n,
                            s = t.smsCode,
                            r = void 0 === s ? "" : s,
                            a = "";
                          "ios" === g.default.os
                            ? ((a = "sms:".concat(o, "&body=").concat(r)),
                              this.setData({
                                smsNumber: o,
                                smsCode: r,
                                url: a,
                              }),
                              (0, v.showLoading)("正在发送验证码"),
                              setTimeout(function () {
                                (0, v.hideLoading)(), e.navigateBack();
                              }, 1e3))
                            : (0, v.showModal)(
                                "请发送短信 ".concat(r, " 至 ").concat(o)
                              ).then(function () {
                                e.navigateBack();
                              });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state.url;
                          return "ios" !== g.default.os
                            ? (0, p.tZ)(l.View, {})
                            : (0, p.tZ)(l.View, {
                                children: (0, p.tZ)(l.WebView, { src: e }),
                              });
                        },
                      },
                    ]),
                    n
                  );
                })(m.default.PureComponent))
              ) || o;
          Page(
            (0, s.createPageConfig)(
              w,
              "pages/train/smsWebview/index",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(54491);
        }),
          e.O();
      },
    ]);
})();
