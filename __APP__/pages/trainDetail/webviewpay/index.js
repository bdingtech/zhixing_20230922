!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [68572],
      {
        16063: function (e, t, n) {
          var a,
            r = n(32180),
            i = n(57042),
            u = n(24460),
            o = n(81876),
            c = n(21867),
            s = n(86066),
            p = n(45023),
            l = n(52500),
            d = n(92954),
            w = n(71515),
            f = n(49120),
            h = n(81957),
            m = n(48813),
            v =
              (0, h.h)()(
                (a = (function (e) {
                  (0, c.Z)(n, e);
                  var t = (0, s.Z)(n);
                  function n(e) {
                    var a;
                    return (
                      (0, i.Z)(this, n),
                      (a = t.call(this, e)),
                      (0, p.Z)((0, o.Z)(a), "pageId", "10650077788"),
                      (a.state = { url: "" }),
                      a
                    );
                  }
                  return (
                    (0, u.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t = (
                              (0, d.getCurrentInstance)().router &&
                              (0, d.getCurrentInstance)().router.params
                            ).data.wxScheme,
                            n = void 0 === t ? "" : t;
                          n.indexOf("[PayPlat=web]") >= 0 &&
                            (n = n.replace("[PayPlat=web]", "")),
                            n.indexOf("[PayPlat=wap]") >= 0 &&
                              (n = n.replace("[PayPlat=wap]", "")),
                            this.setData({
                              url: "https://market.suanya.com/document/public/ztrip-mini-pay.html?wxurl=".concat(
                                encodeURIComponent(n)
                              ),
                            }),
                            (0, f.showLoading)("正在请求支付"),
                            setTimeout(function () {
                              (0, f.hideLoading)(), e.navigateBack();
                            }, 5e3);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state.url;
                          return e
                            ? (0, m.tZ)(w.View, {
                                children: (0, m.tZ)(w.WebView, { src: e }),
                              })
                            : (0, m.tZ)(w.View, {});
                        },
                      },
                    ]),
                    n
                  );
                })(l.default.PureComponent))
              ) || a;
          Page(
            (0, r.createPageConfig)(
              v,
              "pages/trainDetail/webviewpay/index",
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
          })(16063);
        }),
          e.O();
      },
    ]);
})();
