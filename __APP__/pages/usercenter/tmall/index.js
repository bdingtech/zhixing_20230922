!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [51276],
      {
        15272: function (e, t, c) {
          var i,
            a = c(32180),
            s = c(57042),
            o = c(24460),
            n = c(81876),
            r = c(21867),
            l = c(86066),
            d = c(45023),
            h = c(52500),
            m = c(92954),
            u = c.n(m),
            p = c(71515),
            w = c(79792),
            g = c(81957),
            N = c(79910),
            P = c(49120),
            x = c(59163),
            Z = c(48813),
            V =
              (0, g.h)()(
                (i = (function (e) {
                  (0, r.Z)(c, e);
                  var t = (0, l.Z)(c);
                  function c(e) {
                    var i;
                    return (
                      (0, s.Z)(this, c),
                      (i = t.call(this, e)),
                      (0, d.Z)((0, n.Z)(i), "pageId", "10650060388"),
                      (i.state = {
                        isTieyou: w.default.isTieyou,
                        statusBarHeight: N.A.statusBarHeight,
                        productId: "",
                        productDetail: null,
                        tmallCommandShow: !1,
                      }),
                      i
                    );
                  }
                  return (
                    (0, o.Z)(c, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t = (
                              (0, m.getCurrentInstance)().router.params || {}
                            ).productId,
                            c = void 0 === t ? "" : t;
                          this.setState({ productId: c }, function () {
                            e.getProductDetail();
                          });
                        },
                      },
                      {
                        key: "getProductDetail",
                        value: function () {
                          var e = this;
                          (0, x.nt)(
                            { goodsId: this.state.productId },
                            { checkLogin: !0, checkFrameworkLogin: !0 }
                          )
                            .then(function (t) {
                              t && 1 == t.resultCode
                                ? e.setState({
                                    productDetail: {
                                      imgs: t.imgs,
                                      actualPrice: t.actualPrice,
                                      originalPrice: t.originalPrice,
                                      monthSales: t.monthSales,
                                      shopType: t.shopType,
                                      dtitle: t.dtitle,
                                      sprcialTest: t.sprcialTest,
                                      desc: t.desc,
                                      shopLogo: t.shopLogo,
                                      shopName: t.shopName,
                                      detailPics: t.detailPics,
                                      descScore: t.descScore,
                                      dsrScore: t.dsrScore,
                                      dsrPercent: t.dsrPercent,
                                      serviceScore: t.serviceScore,
                                      servicePercent: t.servicePercent,
                                      shipScore: t.shipScore,
                                      shipPercent: t.shipPercent,
                                      buttonTitle: t.buttonTitle,
                                      taoKouLing: t.taoKouLing,
                                      couponPrice: t.couponPrice,
                                      couponStart: t.couponStart,
                                      couponEnd: t.couponEnd,
                                    },
                                  })
                                : (0, P.showToast)(
                                    (null == t ? void 0 : t.resultMessage) ||
                                      "出错了，请重试"
                                  );
                            })
                            .catch(function (e) {
                              console.warn(e);
                            });
                        },
                      },
                      {
                        key: "getPercentClass",
                        value: function (e) {
                          return e < 0 ? "tgreen" : e > 0 ? "tred" : "tgrey";
                        },
                      },
                      {
                        key: "getPercentDesc",
                        value: function (e) {
                          return e < 0 ? "低" : e > 0 ? "高" : "中";
                        },
                      },
                      {
                        key: "copyTmallCommand",
                        value: function () {
                          this.ubtTrace("xcx_shop_detail_tkl_click"),
                            u().setClipboardData({
                              data: this.state.productDetail.taoKouLing,
                              success: function () {},
                            });
                        },
                      },
                      {
                        key: "closeTMallCommandPop",
                        value: function () {
                          this.setState({ tmallCommandShow: !1 });
                        },
                      },
                      {
                        key: "showTMallCommandPop",
                        value: function (e) {
                          this.ubtTrace(
                            e
                              ? "xcx_shop_detail_receive_click"
                              : "xcx_shop_detail_buy_click"
                          ),
                            this.state.productDetail.taoKouLing
                              ? (this.ubtTrace("xcx_shop_detail_tkl_show"),
                                this.setState({ tmallCommandShow: !0 }))
                              : (0, P.showToast)("出错了- -请退出后重试哦");
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          var e = u().getCurrentPages();
                          (e ? e.length : 1) > 1
                            ? u().navigateBack()
                            : N.Z.relaunchHome();
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          this.ubtTrace("xcx_shop_detail_share_click");
                          var e = this.state.productDetail,
                            t = w.default.isTieyou ? "铁友" : "智行";
                          return {
                            title: "["
                              .concat(t, "有惠]券后只要")
                              .concat(e.actualPrice, "元！")
                              .concat(t, "&淘宝专属")
                              .concat(e.couponPrice || "", "元优惠券"),
                            imageUrl: e.imgs[0],
                            path: "/pages/usercenter/tmall/index?productId=".concat(
                              this.state.productId
                            ),
                          };
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            c = t.statusBarHeight,
                            i = t.isTieyou,
                            a = t.productDetail,
                            s = t.tmallCommandShow;
                          return a
                            ? (0, Z.BX)(p.View, {
                                className: "xx",
                                children: [
                                  (0, Z.BX)(p.View, {
                                    className: "top-bar",
                                    style: "padding-top: " + c + "px",
                                    children: [
                                      (0, Z.tZ)(p.Text, {
                                        className: "ifont-back iconfont",
                                        id: "ACBn",
                                        onClick: this.onBack,
                                      }),
                                      (0, Z.tZ)(p.View, {
                                        className: "tit",
                                        children: "商品详情",
                                      }),
                                    ],
                                  }),
                                  (0, Z.tZ)(p.View, {
                                    class: "top-swiper",
                                    children: (0, Z.tZ)(p.Swiper, {
                                      className: "swiper-bd",
                                      indicatorDots: !0,
                                      indicatorColor: "#ffffff",
                                      indicatorActiveColor: "#F5F5F5",
                                      autoplay: "true",
                                      interval: "3000",
                                      children:
                                        a.imgs &&
                                        a.imgs.map(function (e, t) {
                                          return (0,
                                          Z.tZ)(p.SwiperItem, { className: "item", children: (0, Z.tZ)(p.Image, { src: a.imgs[t], className: "img" }) }, t);
                                        }),
                                    }),
                                  }),
                                  (0, Z.BX)(p.View, {
                                    className: "wrap",
                                    children: [
                                      (0, Z.BX)(p.View, {
                                        className: "white-box intro-box",
                                        children: [
                                          (0, Z.BX)(p.View, {
                                            className: "intro-hd",
                                            children: [
                                              (0, Z.tZ)(p.View, {
                                                className: "price color-red",
                                                children: a.actualPrice,
                                              }),
                                              (0, Z.BX)(p.View, {
                                                className: "original",
                                                children: [
                                                  "原价 ",
                                                  (0, Z.BX)(p.Text, {
                                                    className: "s",
                                                    children: [
                                                      "¥",
                                                      a.originalPrice,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, Z.BX)(p.View, {
                                                className: "sold",
                                                children: [
                                                  "已售",
                                                  a.monthSales,
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, Z.BX)(p.View, {
                                            className: "intro-tit",
                                            children: [
                                              (0, Z.tZ)(p.Text, {
                                                className: "tag",
                                                children:
                                                  1 == a.shopType
                                                    ? "天猫"
                                                    : "淘宝",
                                              }),
                                              a.dtitle,
                                            ],
                                          }),
                                          (0, Z.tZ)(p.View, {
                                            className: "intro-tag",
                                            children:
                                              a.sprcialTest &&
                                              a.sprcialTest.length > 0 &&
                                              a.sprcialTest.map(function (
                                                e,
                                                t
                                              ) {
                                                return (0, Z.tZ)(
                                                  p.View,
                                                  {
                                                    className:
                                                      "item bdcolor-red color-red",
                                                    children: e,
                                                  },
                                                  t
                                                );
                                              }),
                                          }),
                                          !!a.couponPrice &&
                                            !!a.couponStart &&
                                            !!a.couponEnd &&
                                            (0, Z.BX)(p.View, {
                                              className: "intro-coupon",
                                              children: [
                                                (0, Z.tZ)(p.View, {
                                                  className: "price color-red",
                                                  children: a.couponPrice,
                                                }),
                                                (0, Z.BX)(p.View, {
                                                  className: "cont color-red",
                                                  children: [
                                                    (0, Z.tZ)(p.View, {
                                                      className: "tit",
                                                      children:
                                                        "优惠券使用期限",
                                                    }),
                                                    (0, Z.tZ)(p.View, {
                                                      className: "txt",
                                                      children: ""
                                                        .concat(
                                                          a.couponStart.replace(
                                                            /-/g,
                                                            "."
                                                          ),
                                                          "-"
                                                        )
                                                        .concat(
                                                          a.couponEnd.replace(
                                                            /-/g,
                                                            "."
                                                          )
                                                        ),
                                                    }),
                                                  ],
                                                }),
                                                (0, Z.tZ)(p.Button, {
                                                  className:
                                                    "btn-get color-red",
                                                  id: "ACBo",
                                                  onClick: function () {
                                                    e.showTMallCommandPop(!0);
                                                  },
                                                  children: "立即领券",
                                                }),
                                              ],
                                            }),
                                          (0, Z.tZ)(p.View, {
                                            className: "intro-desc",
                                            children: (0, Z.tZ)(p.View, {
                                              className: "txt",
                                              children: a.desc,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, Z.BX)(p.View, {
                                        className: "white-box store-box",
                                        children: [
                                          (0, Z.tZ)(p.View, {
                                            className: "lbox",
                                            children: (0, Z.tZ)(p.Image, {
                                              src: a.shopLogo,
                                              className: "avatar",
                                            }),
                                          }),
                                          (0, Z.BX)(p.View, {
                                            className: "cont",
                                            children: [
                                              (0, Z.tZ)(p.View, {
                                                className: "tit",
                                                children: a.shopName,
                                              }),
                                              (0, Z.BX)(p.View, {
                                                className: "txt",
                                                children: [
                                                  "综合体验 ",
                                                  (0, Z.tZ)(p.Text, {
                                                    class: "color-red",
                                                    children: a.descScore,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, Z.BX)(p.View, {
                                            className: "rbox",
                                            children: [
                                              (0, Z.BX)(p.View, {
                                                className: "lst",
                                                children: [
                                                  "宝贝描述 ",
                                                  a.dsrScore,
                                                  (0, Z.tZ)(p.Text, {
                                                    className:
                                                      this.getPercentClass(
                                                        a.dsrPercent
                                                      ),
                                                    children:
                                                      this.getPercentDesc(
                                                        a.dsrPercent
                                                      ),
                                                  }),
                                                ],
                                              }),
                                              (0, Z.BX)(p.View, {
                                                className: "lst",
                                                children: [
                                                  "卖家服务 ",
                                                  a.serviceScore,
                                                  (0, Z.tZ)(p.Text, {
                                                    className:
                                                      this.getPercentClass(
                                                        a.servicePercent
                                                      ),
                                                    children:
                                                      this.getPercentDesc(
                                                        a.servicePercent
                                                      ),
                                                  }),
                                                ],
                                              }),
                                              (0, Z.BX)(p.View, {
                                                className: "lst",
                                                children: [
                                                  "物流服务 ",
                                                  a.shipScore,
                                                  (0, Z.tZ)(p.Text, {
                                                    className:
                                                      this.getPercentClass(
                                                        a.shipPercent
                                                      ),
                                                    children:
                                                      this.getPercentDesc(
                                                        a.shipPercent
                                                      ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, Z.tZ)(p.View, {
                                        className: "white-box product-box",
                                        children:
                                          a.detailPics &&
                                          a.detailPics.map(function (e, t) {
                                            return (0,
                                            Z.tZ)(p.Image, { src: e.img, className: "img", mode: "widthFix" }, t);
                                          }),
                                      }),
                                    ],
                                  }),
                                  (0, Z.BX)(p.View, {
                                    className: "botm-fixed",
                                    children: [
                                      (0, Z.BX)(p.Button, {
                                        className: "lbox",
                                        openType: "share",
                                        children: [
                                          (0, Z.tZ)(p.Text, {
                                            className: "ifont-share iconfont",
                                          }),
                                          (0, Z.tZ)(p.Text, {
                                            className: "txt",
                                            children: "分享",
                                          }),
                                        ],
                                      }),
                                      (0, Z.tZ)(p.View, {
                                        className: "cont",
                                        children: (0, Z.tZ)(p.Button, {
                                          className:
                                            "btn-submit " + (i ? "ty" : "zx"),
                                          id: "ACBp",
                                          onClick: function () {
                                            e.showTMallCommandPop(!1);
                                          },
                                          children: a.buttonTitle,
                                        }),
                                      }),
                                    ],
                                  }),
                                  s &&
                                    (0, Z.tZ)(p.View, {
                                      className: "shade-box",
                                      id: "ACBq",
                                      onClick: this.closeTMallCommandPop,
                                    }),
                                  s &&
                                    (0, Z.BX)(p.View, {
                                      className: "pop-mid pop-copy",
                                      children: [
                                        (0, Z.tZ)(p.View, {
                                          className: "tit",
                                          children: "复制淘口令购买",
                                        }),
                                        (0, Z.BX)(p.View, {
                                          className: "step-list",
                                          children: [
                                            (0, Z.tZ)(p.View, {
                                              className: "item",
                                              children: "1.复制淘口令",
                                            }),
                                            (0, Z.tZ)(p.View, {
                                              className: "item",
                                              children: "2.打开淘宝",
                                            }),
                                            (0, Z.tZ)(p.View, {
                                              className: "item",
                                              children: "3.领券购买",
                                            }),
                                          ],
                                        }),
                                        (0, Z.tZ)(p.View, {
                                          className: "code",
                                          children: a.taoKouLing,
                                        }),
                                        (0, Z.tZ)(p.View, {
                                          className: "txt",
                                          children:
                                            "点击下方按钮一键复制淘口令",
                                        }),
                                        (0, Z.tZ)(p.Button, {
                                          className:
                                            "btn-submit " + (i ? "ty" : "zx"),
                                          id: "ACBr",
                                          onClick: this.copyTmallCommand,
                                          children: "一键复制",
                                        }),
                                        (0, Z.tZ)(p.Icon, {
                                          className: "icon-closed",
                                          id: "ACBs",
                                          onClick: this.closeTMallCommandPop,
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, Z.tZ)(p.View, {});
                        },
                      },
                    ]),
                    c
                  );
                })(h.Component))
              ) || i;
          (V.enableShareAppMessage = !0),
            Page(
              (0, a.createPageConfig)(
                V,
                "pages/usercenter/tmall/index",
                { root: { cn: [] } },
                {
                  navigationStyle: "custom",
                  navigationBarTextStyle: "white",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [59871, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(15272);
        }),
          e.O();
      },
    ]);
})();
