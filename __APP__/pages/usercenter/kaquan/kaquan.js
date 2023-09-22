!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [78161],
      {
        80474: function (t, e, o) {
          var n,
            a = o(32180),
            i = o(57042),
            c = o(24460),
            r = o(21867),
            u = o(86066),
            s = o(52500),
            l = o(71515),
            p = (o(92954), o(48792)),
            d = o.n(p),
            f = o(79792),
            h = o(49120),
            y = o(10741),
            g = o(5050),
            m = o(13025),
            T = o(79910),
            w = o(81957),
            N = o(48813),
            k = {
              pageId: f.default.isTieyou ? "10650001608" : "10650001607",
              data: {
                speedPointNumber: 0,
                lockPoint: 0,
                isTieyou: f.default.isTieyou,
                couponList: [],
                goldGrabInfo: { name: "VIP抢票券", num: 0 },
              },
              onLoad: function (t) {
                this.data.from = t.from || "";
                var e = t.showType,
                  o = void 0 === e ? "" : e;
                this.setState({ showType: o });
              },
              onShow: function () {
                this.getUserAccountInfo(),
                  this.getUserPointInfo(),
                  this.getCouponList({ pageIndex: 1 });
              },
              clickCoupon: function (t) {
                t && T.Z.commonNavigator(t);
              },
              getUserAccountInfo: function () {
                var t = this;
                return (
                  (0, h.showLoading)(),
                  (0, y.qVD)({})
                    .then(function (e) {
                      t.setData({
                        speedPointNumber: e.speedPointInfo.num,
                        goldGrabInfo: e.goldGrabInfo,
                      });
                    })
                    .catch(function () {
                      return (0,
                      h.showToast)("获取".concat(g.Z.SPEED_PACK, "失败，请重试"), "txt");
                    })
                    .finally(function () {
                      return (0, h.hideLoading)();
                    })
                );
              },
              getUserPointInfo: function () {
                var t = this;
                return (
                  (0, h.showLoading)(),
                  (0, y.xkK)({})
                    .then(function (e) {
                      t.setData({ lockPoint: e.LockPoint });
                    })
                    .catch(function () {
                      return (0,
                      h.showToast)("获取锁定".concat(g.Z.SPEED_PACK, "失败，请重试"), "txt");
                    })
                    .finally(function () {
                      return (0, h.hideLoading)();
                    })
                );
              },
              getCouponList: function (t) {
                var e = this;
                (0, h.showLoading)(),
                  (0, m.Ky)({ data: t })
                    .then(function (t) {
                      if ((console.log(t), -1 == t.resultCode))
                        (0, h.showToast)("获取优惠券失败，请重试", "txt");
                      else if (
                        (t.couponList.forEach(function (t) {
                          (t.couponStartDate = t.couponStartDate.split(" ")[0]),
                            (t.couponEndDate = t.couponEndDate.split(" ")[0]),
                            100 == t.couponType ||
                            101 == t.couponType ||
                            102 == t.couponType ||
                            103 == t.couponType ||
                            104 == t.couponType ||
                            105 == t.couponType
                              ? ((t.type = 0), (t.title = "火车票优惠券"))
                              : 200 == t.couponType
                              ? ((t.type = 1), (t.title = "机票优惠券"))
                              : 500 == t.couponType
                              ? ((t.type = 5), (t.title = "国际机票优惠券"))
                              : 400 == t.couponType
                              ? ((t.type = 2), (t.title = "打车优惠券"))
                              : 300 == t.couponType || 1e3 == t.couponType
                              ? ((t.type = 3), (t.title = "酒店优惠券"))
                              : 600 == t.couponType
                              ? ((t.type = 4), (t.title = "汽车票优惠券"))
                              : 1200 == t.couponType
                              ? ((t.type = 6), (t.title = "门票优惠券"))
                              : 700 == t.couponType
                              ? ((t.type = 7), (t.title = "船票优惠券"))
                              : ((t.type = 0), (t.title = "优惠券"));
                        }),
                        "hotel" === e.data.from)
                      ) {
                        var o = [];
                        t.couponList.forEach(function (t) {
                          3 === t.type && 1 === t.hotelType
                            ? (t.flag = 2)
                            : (3 === t.type && 1 !== t.hotelType) ||
                              (4 === t.type &&
                                (0 === t.hotelType || 2 === t.hotelType))
                            ? (t.flag = 1)
                            : (t.flag = 0);
                        }),
                          t.couponList.forEach(function (t) {
                            (0 !== t.flag && 2 !== t.flag) || o.push(t);
                          });
                        var n = o.sort(e.compare("flag"));
                        e.setData({ couponList: n });
                      } else if ("bus" === e.data.showType) {
                        var a = t.couponList
                          .filter(function (t) {
                            return 600 == t.couponType;
                          })
                          .concat(
                            t.couponList.filter(function (t) {
                              return 600 != t.couponType;
                            })
                          );
                        e.setData({ couponList: a });
                      } else e.setData({ couponList: t.couponList });
                    })
                    .catch(function () {
                      return (0, h.showToast)("获取优惠券失败，请重试", "txt");
                    })
                    .finally(function () {
                      return (0, h.hideLoading)();
                    });
              },
              compare: function (t) {
                return function (e, o) {
                  var n = e[t];
                  return o[t] - n;
                };
              },
              toCouponDetail: function (t) {
                var e = t.currentTarget.dataset.index,
                  o = this.data.couponList[e].couponDetail;
                this.navigateTo({
                  url: "/pages/flightSecondary/productdetail/productdetail?type=richText",
                  data: {
                    title: "优惠券详情",
                    richTextContent: o
                      .replace(/\\n/g, "<br />")
                      .replace(/\n/g, "<br />"),
                  },
                });
              },
            },
            V =
              (0, w.h)()(
                (n =
                  d()(k)(
                    (n = (function (t) {
                      (0, r.Z)(o, t);
                      var e = (0, u.Z)(o);
                      function o() {
                        return (0, i.Z)(this, o), e.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(o, [
                          {
                            key: "onShareAppMessage",
                            value: function () {
                              return {
                                title: "我的卡券包",
                                path: "/pages/usercenter/kaquan/kaquan",
                              };
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var t = this,
                                e = this.data,
                                o = e.isTieyou,
                                n = e.lockPoint,
                                a = e.speedPointNumber,
                                i = e.goldGrabInfo,
                                c = e.couponList;
                              return (0, N.tZ)(l.Block, {
                                children: (0, N.BX)(l.View, {
                                  className: "wrap",
                                  children: [
                                    (0, N.BX)(l.View, {
                                      className:
                                        "kaquan-box " + (o ? "ty" : "zx"),
                                      children: [
                                        (0, N.BX)(l.View, {
                                          className: "lock",
                                          children: [
                                            "锁定中：",
                                            (0, N.tZ)(l.Text, {
                                              className: "no",
                                              children: n + "个",
                                            }),
                                          ],
                                        }),
                                        (0, N.BX)(l.View, {
                                          className: "cont",
                                          children: [
                                            (0, N.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, N.tZ)(l.View, {
                                                  className: "strong",
                                                  children: a,
                                                }),
                                                (0, N.BX)(l.View, {
                                                  className: "txt",
                                                  children: [
                                                    g.Z.SPEED_PACK,
                                                    "(个)",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, N.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, N.tZ)(l.View, {
                                                  className: "strong",
                                                  children: i.num,
                                                }),
                                                (0, N.tZ)(l.View, {
                                                  className: "txt",
                                                  children: i.name + "(张)",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, N.BX)(l.View, {
                                      className: "kq-tit",
                                      children: [
                                        (0, N.tZ)(l.Text, {
                                          className:
                                            "ifont-quan iconfont color-primary",
                                        }),
                                        "优惠券",
                                      ],
                                    }),
                                    (0, N.BX)(l.View, {
                                      className: "kq-coupon",
                                      children: [
                                        c.length > 0 &&
                                          (0, N.tZ)(l.Block, {
                                            children: c.map(function (e, o) {
                                              return (0, N.BX)(
                                                l.View,
                                                {
                                                  className: "item",
                                                  children: [
                                                    (0, N.tZ)(l.View, {
                                                      className:
                                                        "price color-red",
                                                      children: e.couponPrice,
                                                    }),
                                                    (0, N.BX)(l.View, {
                                                      className: "cont",
                                                      children: [
                                                        (0, N.BX)(l.View, {
                                                          className: "tit",
                                                          "data-index": o,
                                                          id: "ACAV",
                                                          onClick:
                                                            t.toCouponDetail,
                                                          children: [
                                                            e.title,
                                                            (0, N.tZ)(l.Text, {
                                                              className:
                                                                "iconfont ifont-detail",
                                                            }),
                                                          ],
                                                        }),
                                                        (0, N.tZ)(l.View, {
                                                          className: "txt",
                                                          children:
                                                            e.couponDisplayName,
                                                        }),
                                                        (0, N.tZ)(l.View, {
                                                          className: "txt",
                                                          children:
                                                            e.couponStartDate +
                                                            "至" +
                                                            e.couponEndDate,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, N.tZ)(l.Button, {
                                                      className:
                                                        "btn-used btn-red",
                                                      "data-type": e.type,
                                                      id: "ACAW",
                                                      onClick: function () {
                                                        return t.clickCoupon(
                                                          e.jumpUrl
                                                        );
                                                      },
                                                      children: "立即使用",
                                                    }),
                                                  ],
                                                },
                                                "couponId"
                                              );
                                            }),
                                          }),
                                        c.length < 1 &&
                                          (0, N.tZ)(l.View, {
                                            className: "item",
                                            children: (0, N.tZ)(l.View, {
                                              className: "no-coupon",
                                              children:
                                                "您当前没有可用的优惠券",
                                            }),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              });
                            },
                          },
                        ]),
                        o
                      );
                    })(s.default.Component))
                  ) || n)
              ) || n;
          (V.enableShareAppMessage = !0),
            Page(
              (0, a.createPageConfig)(
                V,
                "pages/usercenter/kaquan/kaquan",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "我的卡券包",
                  navigationBarBackgroundColor: "#0066E6",
                  backgroundColorTop: "#0075F4",
                  backgroundColor: "#0066E6",
                  backgroundColorBottom: "#ffffff",
                } || {}
              )
            );
        },
      },
      function (t) {
        t.O(0, [19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(80474);
        }),
          t.O();
      },
    ]);
})();
