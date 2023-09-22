!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [88145],
      {
        22218: function (e, t, i) {
          var n,
            r = i(32180),
            a = i(57042),
            c = i(24460),
            l = i(21867),
            s = i(86066),
            d = i(22276),
            o = i(52500),
            u = i(71515),
            h = i(34229),
            f = i(92954),
            m = i.n(f),
            p = i(81957),
            T = i(48792),
            Z = i.n(T),
            w = i(3205),
            y = i(79792),
            x = i(79910),
            V = i(48813),
            k = {
              pageId: "10650060689",
              data: {
                isTieyou: y.default.isTieyou,
                canIUseRichText: m().canIUse("rich-text"),
                type: "refund",
                title: "",
                isRichText: !0,
                isRoundTrip: !1,
                refund: "",
              },
              onLoad: function (e) {
                console.log(e);
                var t = e.data,
                  i = t.refund,
                  n = t.insuranceTip,
                  r = void 0 === n ? "" : n,
                  a = t.title,
                  c = void 0 === a ? "" : a,
                  l = t.licenseInfo,
                  s = void 0 === l ? {} : l,
                  o = t.richTextContent,
                  u = e.type,
                  h = e.refundType,
                  f = void 0 === h ? "" : h;
                if ("richText" !== u) {
                  var m = "string" == typeof i,
                    p = Array.isArray(i),
                    T = [];
                  p ? (T = (0, d.Z)(i)) : T.push(i),
                    this.setData({
                      title: c,
                      type: u,
                      refundType: f,
                      isRichText: m,
                      isRoundTrip: p,
                      refund: T,
                      insuranceTip: r,
                      licenseInfo: s,
                    });
                } else this.setData({ title: c, type: u, richTextContent: o });
              },
              onReady: function () {
                var e = this.data.title;
                x.Z.setTitle(e);
              },
              goToLicense: function (e) {
                var t = e.currentTarget.dataset.url;
                w.Z.twebview({ data: { url: t } });
              },
            },
            N =
              (0, p.h)()(
                (n =
                  Z()(k)(
                    (n = (function (e) {
                      (0, l.Z)(i, e);
                      var t = (0, s.Z)(i);
                      function i() {
                        return (0, a.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.isRichText,
                                n = t.refund,
                                r = t.refundType,
                                a = t.canIUseRichText,
                                c = t.licenseInfo,
                                l = void 0 === c ? {} : c,
                                s = t.type,
                                d = t.insuranceTip,
                                o = t.richTextContent;
                              return (0, V.BX)(u.View, {
                                children: [
                                  "refund" === s &&
                                    (0, V.tZ)(V.HY, {
                                      children: i
                                        ? n &&
                                          n[0] &&
                                          (0, V.BX)(V.HY, {
                                            children: [
                                              (0, V.BX)(u.View, {
                                                className: "rich-text",
                                                children: [
                                                  a &&
                                                    (0, V.tZ)(h.ZtRichText, {
                                                      nodes: n[0],
                                                    }),
                                                  !a &&
                                                    (0, V.tZ)(u.View, {
                                                      children: n[0],
                                                    }),
                                                ],
                                              }),
                                              l.title &&
                                                (0, V.tZ)(u.View, {
                                                  className: "license",
                                                  "data-url": l.url,
                                                  id: "AZAf",
                                                  onClick: this.goToLicense,
                                                  children: l.title,
                                                }),
                                            ],
                                          })
                                        : (0, V.tZ)(V.HY, {
                                            children:
                                              n &&
                                              n.map(function (t, i) {
                                                return (0, V.BX)(V.HY, {
                                                  children: [
                                                    n.length > 1 &&
                                                      (0, V.tZ)(u.View, {
                                                        className: "round-trip",
                                                        children:
                                                          0 === i
                                                            ? "transfer" === r
                                                              ? "第一程"
                                                              : "去程"
                                                            : "transfer" === r
                                                            ? "第二程"
                                                            : "返程",
                                                      }),
                                                    (0, V.BX)(u.View, {
                                                      className: "detail",
                                                      children: [
                                                        (0, V.tZ)(u.View, {
                                                          className: "title",
                                                          children:
                                                            t.remarkTitle.title,
                                                        }),
                                                        t.remarkTitle.remarkTypeList.map(
                                                          function (e) {
                                                            return (0, V.tZ)(
                                                              V.HY,
                                                              {
                                                                children: (0,
                                                                V.tZ)(u.View, {
                                                                  className:
                                                                    "content",
                                                                  children:
                                                                    e.content,
                                                                }),
                                                              }
                                                            );
                                                          }
                                                        ),
                                                      ],
                                                    }),
                                                    (0, V.tZ)(u.View, {
                                                      className: "refund",
                                                      children:
                                                        t.remarkBody &&
                                                        t.remarkBody.map(
                                                          function (e) {
                                                            return (0, V.tZ)(
                                                              V.HY,
                                                              {
                                                                children: (0,
                                                                V.BX)(u.View, {
                                                                  className:
                                                                    "table",
                                                                  children: [
                                                                    (0, V.tZ)(
                                                                      u.View,
                                                                      {
                                                                        className:
                                                                          "title",
                                                                        children:
                                                                          e.title,
                                                                      }
                                                                    ),
                                                                    e.remarkTypeL1List.map(
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return (0,
                                                                        V.tZ)(
                                                                          V.HY,
                                                                          {
                                                                            children:
                                                                              (0,
                                                                              V.BX)(
                                                                                u.View,
                                                                                {
                                                                                  className:
                                                                                    "tr",
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      V.tZ)(
                                                                                        u.View,
                                                                                        {
                                                                                          className:
                                                                                            "td left",
                                                                                          children:
                                                                                            e.title,
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      V.tZ)(
                                                                                        u.View,
                                                                                        {
                                                                                          className:
                                                                                            "td right",
                                                                                          children:
                                                                                            e.remarkTypeList.map(
                                                                                              function (
                                                                                                e
                                                                                              ) {
                                                                                                return (0,
                                                                                                V.tZ)(
                                                                                                  V.HY,
                                                                                                  {
                                                                                                    children:
                                                                                                      (0,
                                                                                                      V.BX)(
                                                                                                        u.View,
                                                                                                        {
                                                                                                          className:
                                                                                                            "col",
                                                                                                          children:
                                                                                                            [
                                                                                                              (0,
                                                                                                              V.tZ)(
                                                                                                                u.Text,
                                                                                                                {
                                                                                                                  children:
                                                                                                                    e.title,
                                                                                                                }
                                                                                                              ),
                                                                                                              (0,
                                                                                                              V.tZ)(
                                                                                                                u.Text,
                                                                                                                {
                                                                                                                  className:
                                                                                                                    "content",
                                                                                                                  children:
                                                                                                                    e.content,
                                                                                                                }
                                                                                                              ),
                                                                                                            ],
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                );
                                                                                              }
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                          }
                                                                        );
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                              }
                                                            );
                                                          }
                                                        ),
                                                    }),
                                                    (0, V.tZ)(u.View, {
                                                      className: "tail",
                                                      children:
                                                        t.remarkTail
                                                          .remarkTypeList &&
                                                        t.remarkTail.remarkTypeList.map(
                                                          function (e) {
                                                            return (0, V.tZ)(
                                                              V.HY,
                                                              {
                                                                children: (0,
                                                                V.tZ)(u.View, {
                                                                  className:
                                                                    "content",
                                                                  children:
                                                                    (e.title
                                                                      ? e.title +
                                                                        ": "
                                                                      : "") +
                                                                    e.content,
                                                                }),
                                                              }
                                                            );
                                                          }
                                                        ),
                                                    }),
                                                    t.remarkUrl &&
                                                      (0, V.tZ)(u.View, {
                                                        className: "license",
                                                        "data-url":
                                                          t.remarkUrl.url,
                                                        id: "AZAe",
                                                        onClick: e.goToLicense,
                                                        children:
                                                          t.remarkUrl.title,
                                                      }),
                                                  ],
                                                });
                                              }),
                                          }),
                                    }),
                                  "insurance" === s &&
                                    (0, V.BX)(V.HY, {
                                      children: [
                                        (0, V.tZ)(u.View, {
                                          className: "insurance-title",
                                          children: d.title,
                                        }),
                                        (0, V.tZ)(u.View, {
                                          className: "rich-text insurance-tip",
                                          children:
                                            d.infoArr &&
                                            d.infoArr.map(function (e) {
                                              return (0,
                                              V.BX)(V.HY, { children: [a && (0, V.tZ)(h.ZtRichText, { nodes: e }), !a && (0, V.tZ)(u.View, { children: e })] });
                                            }),
                                        }),
                                      ],
                                    }),
                                  "richText" === s &&
                                    o &&
                                    (0, V.tZ)(V.HY, {
                                      children: (0, V.BX)(u.View, {
                                        className: "rich-text coupon",
                                        children: [
                                          a &&
                                            (0, V.tZ)(h.ZtRichText, {
                                              nodes: o,
                                            }),
                                          !a &&
                                            (0, V.tZ)(u.View, { children: o }),
                                        ],
                                      }),
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(o.default.Component))
                  ) || n)
              ) || n;
          Page(
            (0, r.createPageConfig)(
              N,
              "pages/flightSecondary/productdetail/productdetail",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                backgroundColor: "#fff",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(22218);
        }),
          e.O();
      },
    ]);
})();
