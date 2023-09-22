!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [81003],
      {
        13719: function (e, t, a) {
          var n,
            i = a(32180),
            c = a(57042),
            s = a(24460),
            o = a(81876),
            r = a(21867),
            l = a(86066),
            u = a(45023),
            d = a(52500),
            m = a(92954),
            h = a.n(m),
            f = a(71515),
            g = a(81957),
            k = a(3205),
            w = a(49120),
            N = a(79792),
            v = a(21999),
            p = a(43005),
            I = a(48813),
            V =
              (0, g.h)()(
                (n = (function (e) {
                  (0, r.Z)(a, e);
                  var t = (0, l.Z)(a);
                  function a(e) {
                    var n;
                    return (
                      (0, c.Z)(this, a),
                      (n = t.call(this, e)),
                      (0, u.Z)((0, o.Z)(n), "onRefundConfirm", function (e) {
                        var t;
                        (0, p.VP)({
                          orderNumber:
                            null === (t = n.state.attachPackageInfo) ||
                            void 0 === t
                              ? void 0
                              : t.orderNumber,
                          insuranceIdx: [e + ""],
                        })
                          .then(function (e) {
                            1 === (null == e ? void 0 : e.code)
                              ? ((0, w.showToast)(e.message),
                                setTimeout(function () {
                                  return n.navigateBack();
                                }, 2e3))
                              : (0, w.showToast)(e.message || "网络错误");
                          })
                          .catch(function () {});
                      }),
                      (n.state = {
                        attachPackageInfo: {},
                        isTieyou: N.default.isTieyou,
                      }),
                      (n.pageId = "10650060395"),
                      n
                    );
                  }
                  return (
                    (0, s.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          console.log(
                            (0, m.getCurrentInstance)().router.params.data
                          );
                          var e = (0, m.getCurrentInstance)().router.params
                            .data;
                          h().setNavigationBarTitle({ title: e.headTitle }),
                            (0, w.setNavigationBarColor)({
                              backgroundColor: "#ffffff",
                              frontColor: "#000000",
                            }),
                            this.setState({ attachPackageInfo: e });
                        },
                      },
                      {
                        key: "toNoticePage",
                        value: function () {
                          var e = this.state.attachPackageInfo;
                          k.Z.twebview({ data: { url: e.noteUrl } });
                        },
                      },
                      {
                        key: "onToggleItemState",
                        value: function (e) {
                          var t = this.state.attachPackageInfo,
                            a = t.attachPackageItemList[e];
                          a.itemList &&
                            a.itemList.length > 0 &&
                            ((t.attachPackageItemList[e].isActive =
                              !t.attachPackageItemList[e].isActive),
                            this.setState({ attachPackageInfo: t }));
                        },
                      },
                      {
                        key: "onRefund",
                        value: function (e) {
                          var t = this;
                          this.showCommonDrawer({
                            title: "退订保险",
                            hideClose: !0,
                            className: "bus-insurance-refund-pop",
                            content: function (a) {
                              var n = a.onClose;
                              return (0, I.BX)(f.View, {
                                children: [
                                  (0, I.tZ)(f.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/icon_qinzi_bg@3x@3x.png",
                                    className: "bg",
                                  }),
                                  (0, I.BX)(f.View, {
                                    className: "refund-title",
                                    children: [
                                      "确认为「",
                                      e.itemKey,
                                      "」退订保险?",
                                    ],
                                  }),
                                  (0, I.BX)(f.View, {
                                    className: "btn-wrap",
                                    children: [
                                      (0, I.tZ)(f.View, {
                                        className: "btn cancel",
                                        id: "AdBk",
                                        onClick: n,
                                        children: "取消",
                                      }),
                                      (0, I.tZ)(f.View, {
                                        className: "btn confirm",
                                        id: "AdBl",
                                        onClick: function () {
                                          n(),
                                            t.onRefundConfirm(e.insuranceIdx);
                                        },
                                        children: "确认退订",
                                      }),
                                    ],
                                  }),
                                ],
                              });
                            },
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.isTieyou,
                            n = t.attachPackageInfo;
                          return (0, I.BX)(f.Block, {
                            children: [
                              n &&
                                n.attachPackageItemList &&
                                n.attachPackageItemList[0] &&
                                (0, I.BX)(f.View, {
                                  className: "insure",
                                  children: [
                                    (0, I.BX)(f.View, {
                                      className: "tzone",
                                      children: [
                                        (0, I.BX)(f.View, {
                                          className: "title",
                                          children: [
                                            (0, I.tZ)(f.Image, {
                                              className: "img",
                                              src: n.attachPackageIcon,
                                            }),
                                            n.title,
                                          ],
                                        }),
                                        n.noteUrl &&
                                          (0, I.tZ)(f.View, {
                                            className: "desc",
                                            id: "AdBm",
                                            onClick: this.toNoticePage,
                                            children: "产品说明",
                                          }),
                                      ],
                                    }),
                                    (0, I.tZ)(f.View, {
                                      className: "bzone",
                                      children: n.attachPackageItemList.map(
                                        function (t, i) {
                                          return (0, I.BX)(
                                            f.View,
                                            {
                                              className: "passenger",
                                              children: [
                                                (0, I.BX)(f.View, {
                                                  className: "tbox ".concat(
                                                    a ? "ty" : "zx"
                                                  ),
                                                  id: "AdBn",
                                                  onClick:
                                                    e.onToggleItemState.bind(
                                                      e,
                                                      i
                                                    ),
                                                  children: [
                                                    (0, I.tZ)(f.View, {
                                                      className: "name",
                                                      children: t.itemKey,
                                                    }),
                                                    (0, I.tZ)(f.View, {
                                                      className:
                                                        "status ".concat(
                                                          [3, 8].includes(
                                                            t.state
                                                          )
                                                            ? "suc"
                                                            : ""
                                                        ),
                                                      children: t.itemValue,
                                                    }),
                                                    "insurance" === n.type &&
                                                      5 === t.state &&
                                                      (0, I.BX)(I.HY, {
                                                        children: [
                                                          (0, I.tZ)(f.View, {
                                                            className: "line",
                                                          }),
                                                          (0, I.tZ)(f.View, {
                                                            className: "refund",
                                                            id: "AdBo",
                                                            onClick: function (
                                                              a
                                                            ) {
                                                              a.stopPropagation(),
                                                                e.onRefund(t);
                                                            },
                                                            children: "退订",
                                                          }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                                t.isActive &&
                                                  t.itemList &&
                                                  t.itemList[0] &&
                                                  (0, I.tZ)(f.View, {
                                                    className: "bbox",
                                                    children: t.itemList.map(
                                                      function (e) {
                                                        return (0, I.BX)(
                                                          f.View,
                                                          {
                                                            className: "info",
                                                            children: [
                                                              (0, I.tZ)(
                                                                f.View,
                                                                {
                                                                  className:
                                                                    "tit",
                                                                  children:
                                                                    e.key,
                                                                }
                                                              ),
                                                              (0, I.tZ)(
                                                                f.View,
                                                                {
                                                                  className:
                                                                    "con",
                                                                  children:
                                                                    e.value,
                                                                }
                                                              ),
                                                            ],
                                                          },
                                                          "index"
                                                        );
                                                      }
                                                    ),
                                                  }),
                                              ],
                                            },
                                            "index"
                                          );
                                        }
                                      ),
                                    }),
                                  ],
                                }),
                              (0, I.tZ)(v.Z, {
                                ref: function (t) {
                                  e.onDrawerAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(d.default.Component))
              ) || n;
          Page(
            (0, i.createPageConfig)(
              V,
              "pages/bus/insurancedetail/insurancedetail",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [86230, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(13719);
        }),
          e.O();
      },
    ]);
})();
