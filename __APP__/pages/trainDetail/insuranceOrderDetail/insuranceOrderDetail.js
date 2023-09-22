!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [75127],
      {
        66811: function (e, t, a) {
          var n,
            r = a(32180),
            i = a(79301),
            s = a(95308),
            c = a(57042),
            o = a(24460),
            u = a(21867),
            l = a(86066),
            d = a(81957),
            p = a(49120),
            h = a(52500),
            m = a(59076),
            f = a(79910),
            g = a(71515),
            w = a(48813),
            v = function (e) {
              var t = e.title,
                a = e.detail,
                n = e.productUrl;
              return (0, w.BX)(g.View, {
                className: " _Vb _Oa _Fi _JJ -Vd",
                children: [
                  (0, w.BX)(g.View, {
                    className: "-Wd",
                    children: [
                      (0, w.tZ)(g.View, { className: "-Xd", children: t }),
                      (0, w.tZ)(g.View, {
                        className: "-Yd",
                        id: "AJEw",
                        onClick: function () {
                          f.Z.commonNavigator(n);
                        },
                        children: "产品说明",
                      }),
                    ],
                  }),
                  (0, w.BX)(g.View, {
                    className: "-Zd",
                    children: [
                      (0, w.BX)(g.View, {
                        className: "-ae",
                        children: [
                          (0, w.tZ)(g.View, {
                            className: "-be",
                            children: a.passportName,
                          }),
                          (0, w.tZ)(g.View, {
                            className: "-ce",
                            children: a.insuranceStateDesc,
                          }),
                        ],
                      }),
                      (0, w.tZ)(g.View, {
                        className: "content-items",
                        children: [
                          { name: "证件号", keyName: "passportNo" },
                          { name: "保单编号", keyName: "insuranceNos" },
                          { name: "保险公司", keyName: "insuranceCompany" },
                          { name: "保费(元)", keyName: "insurancePrice" },
                        ].map(function (e, t) {
                          return a[e.keyName]
                            ? (0, w.BX)(
                                g.View,
                                {
                                  className: "-de",
                                  children: [
                                    (0, w.tZ)(g.View, {
                                      className: "-ee",
                                      children: e.name,
                                    }),
                                    (0, w.tZ)(g.View, {
                                      className: "-fe",
                                      children: a[e.keyName],
                                    }),
                                  ],
                                },
                                t
                              )
                            : (0, w.tZ)(w.HY, {});
                        }),
                      }),
                    ],
                  }),
                ],
              });
            },
            N =
              (0, d.h)(!1, { usePageWrapper: !0 })(
                (n = (function (e) {
                  (0, u.Z)(a, e);
                  var t = (0, l.Z)(a);
                  function a(e) {
                    var n;
                    return (
                      (0, c.Z)(this, a),
                      ((n = t.call(this, e)).disableBgStyle = !0),
                      (n.pageTitle = "保单详情"),
                      (n.pageRootClassName = "trn-insurance-detail"),
                      (n.pageId = "10650098354"),
                      (n.state = {
                        insuranceList: [],
                        productUrl: "",
                        title: "",
                      }),
                      n
                    );
                  }
                  return (
                    (0, o.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.setPageData(), this.refreshPageData();
                        },
                      },
                      {
                        key: "setPageData",
                        value: function () {
                          var e = this.$instance.router.params || {},
                            t = e.oid,
                            a = e.productId;
                          (this.oid = t), (this.productId = a);
                        },
                      },
                      {
                        key: "getInsuranceDetail",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, i.Z)().mark(function e() {
                              var t, a, n;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          (0, m.IT)({
                                            orderNumber: this.oid,
                                            productId: this.productId,
                                          })
                                        );
                                      case 2:
                                        if (
                                          ((t = e.sent),
                                          (a = t.resultCode),
                                          (n = t.insurance),
                                          1 === a)
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        throw { msg: "网络错误,请稍候重试" };
                                      case 7:
                                        this.setState({
                                          insuranceList: n.insuranceList,
                                          productUrl: n.productUrl,
                                          title: n.subTitle,
                                        });
                                      case 8:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "refreshPageData",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, i.Z)().mark(function e() {
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (0, p.showLoading)(),
                                          (e.next = 4),
                                          this.getInsuranceDetail()
                                        );
                                      case 4:
                                        (0, p.hideLoading)(), (e.next = 11);
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(0)),
                                          (0, p.hideLoading)(),
                                          (0, p.showToast)(
                                            e.t0.msg || "网络错误,请稍候重试"
                                          );
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 7]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.insuranceList,
                            a = e.title,
                            n = e.productUrl;
                          return (0, w.tZ)(w.HY, {
                            children: t.map(function (e, t) {
                              return (0,
                              w.tZ)(v, { detail: e, title: a, productUrl: n }, t);
                            }),
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(h.default.Component))
              ) || n;
          Page(
            (0, r.createPageConfig)(
              N,
              "pages/trainDetail/insuranceOrderDetail/insuranceOrderDetail",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "保单详情",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                enablePullDownRefresh: !1,
                navigationStyle: "custom",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [93611, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(66811);
        }),
          e.O();
      },
    ]);
})();
