!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [760],
      {
        93110: function (a, e, r) {
          var t,
            o = r(32180),
            n = r(57042),
            c = r(24460),
            i = r(21867),
            l = r(86066),
            u = r(52500),
            d = r(71515),
            g = r(92954),
            m = r.n(g),
            s = r(81957),
            P = r(79792),
            p = r(48792),
            f = r.n(p),
            y = (r(42151), r(25391)),
            T = r(48813),
            F = {
              pageId: P.default.isTieyou ? "10320660966" : "10320660962",
              data: {},
              onLoad: function (a) {
                console.log("orderdetail onload options == ", a),
                  a.jlview
                    ? (this.ubtDevTrace("o_train_order_newpage", {
                        type: "grab",
                      }),
                      m().redirectTo({
                        url: y.ZP.getTrainGrabOrderDetailUrl(
                          a.oid,
                          "&"
                            .concat(
                              a.jumpFromPayFlag
                                ? "jumpFromPayFlag=" + a.jumpFromPayFlag + "&"
                                : ""
                            )
                            .concat(
                              a.fromPage ? "fromPage=" + a.fromPage + "&" : ""
                            )
                            .concat(
                              a.isCreditPay
                                ? "isCreditPay=" + a.isCreditPay + "&"
                                : ""
                            )
                            .concat(
                              a.cancelSmartTicket
                                ? "cancelSmartTicket=" +
                                    a.cancelSmartTicket +
                                    "&"
                                : ""
                            )
                        ),
                      }))
                    : (this.ubtDevTrace("o_train_order_newpage", {
                        type: "order",
                      }),
                      m().redirectTo({
                        url: ""
                          .concat(y.ZP.getTrainDetailUrl(a.oid), "&")
                          .concat(
                            a.jumpFromPayFlag
                              ? "jumpFromPayFlag=" + a.jumpFromPayFlag + "&"
                              : ""
                          )
                          .concat(
                            a.fromPage ? "fromPage=" + a.fromPage + "&" : ""
                          )
                          .concat(
                            a.isCreditPay
                              ? "isCreditPay=" + a.isCreditPay + "&"
                              : ""
                          )
                          .concat(
                            a.cancelSmartTicket
                              ? "cancelSmartTicket=" + a.cancelSmartTicket + "&"
                              : ""
                          ),
                      }));
              },
            },
            k =
              (0, s.h)()(
                (t =
                  f()(F)(
                    (t = (function (a) {
                      (0, i.Z)(r, a);
                      var e = (0, l.Z)(r);
                      function r() {
                        return (0, n.Z)(this, r), e.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(r, [
                          {
                            key: "render",
                            value: function () {
                              return (0, T.tZ)(d.View, {});
                            },
                          },
                        ]),
                        r
                      );
                    })(u.default.Component))
                  ) || t)
              ) || t;
          Page(
            (0, o.createPageConfig)(
              k,
              "pages/train/orderdetail/orderdetail",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "订单详情",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
                enablePullDownRefresh: !0,
              } || {}
            )
          );
        },
      },
      function (a) {
        a.O(0, [19559, 11216, 68592], function () {
          return (function (e) {
            return a((a.s = e));
          })(93110);
        }),
          a.O();
      },
    ]);
})();
