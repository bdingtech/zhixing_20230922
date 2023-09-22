!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [79022],
      {
        91256: function (e, n, t) {
          var a,
            i = t(32180),
            o = t(57042),
            c = t(24460),
            r = t(81876),
            s = t(21867),
            u = t(86066),
            l = t(45023),
            f = t(52500),
            d = (t(92954), t(71515)),
            h = t(79792),
            g = t(69006),
            k = t(2809),
            p = t(81957),
            b = t(48813),
            m =
              (0, p.h)()(
                (a = (function (e) {
                  (0, s.Z)(t, e);
                  var n = (0, u.Z)(t);
                  function t() {
                    var e;
                    return (
                      (0, o.Z)(this, t),
                      (e = n.call(this)),
                      (0, l.Z)((0, r.Z)(e), "pageId", "10650060589"),
                      (e.state = {
                        isTieyou: h.default.isTieyou,
                        pageHeight: 1915,
                      }),
                      e
                    );
                  }
                  return (
                    (0, c.Z)(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.setState({
                            pageHeight: (k.ZP.windowWidth / 371) * 968,
                          });
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          this.navigateBack();
                        },
                      },
                      {
                        key: "onClickBtn",
                        value: function () {
                          this.navigateBack({ onComfirm: !0 });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            n = e.isTieyou,
                            t = e.pageHeight;
                          return (0, b.BX)(d.View, {
                            className: "dark-reason ".concat(n ? "ty" : "zx"),
                            children: [
                              (0, b.tZ)(d.View, {
                                className: "page-content",
                                children: (0, b.tZ)(d.View, {
                                  className: "content",
                                  style: "height: ".concat(t, "px"),
                                  children: (0, b.tZ)(g.Z, {
                                    onBack: this.onBack,
                                    title: " ",
                                  }),
                                }),
                              }),
                              (0, b.tZ)(d.View, {
                                className: "btn-content",
                                children: (0, b.tZ)(d.View, {
                                  className: "btn",
                                  id: "AKCT",
                                  onClick: this.onClickBtn,
                                  children: "立即认证",
                                }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    t
                  );
                })(f.default.Component))
              ) || a;
          Page(
            (0, i.createPageConfig)(
              m,
              "pages/train/darkReason/darkReason",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#efefef",
                disableScroll: !0,
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [7160, 83004, 19559, 11216, 68592], function () {
          return (function (n) {
            return e((e.s = n));
          })(91256);
        }),
          e.O();
      },
    ]);
})();
