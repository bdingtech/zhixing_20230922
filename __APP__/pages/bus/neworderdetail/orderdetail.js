!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [96100],
      {
        98542: function (e, t, i) {
          var n,
            o = i(32180),
            a = i(79301),
            c = i(95308),
            s = i(298),
            r = i(57042),
            l = i(24460),
            d = i(81876),
            u = i(21867),
            h = i(86066),
            m = i(45023),
            f = i(52500),
            p = i(92954),
            g = i.n(p),
            k = i(71515),
            v = i(81957),
            w = i(79792),
            b = i(93761),
            S = i(18783),
            y = i(3106),
            N = i(79910),
            T = i(49120),
            I = i(8271),
            Z = i.n(I),
            C = i(3205),
            x = i(39173),
            V = i(80626),
            B = i(34229),
            D = i(48813),
            M =
              (0, v.h)(!0)(
                (n = (function (e) {
                  (0, u.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, r.Z)(this, i),
                      ((n = t.call(this, e)).state = {
                        hotelSearch: {
                          date: {
                            checkInDate: "",
                            checkOutDate: "",
                            checkInDay_disp: [],
                            checkOutDay_disp: [],
                            totalDays: "",
                          },
                        },
                        smallHoursFlag: !1,
                        seasonData: {},
                        pinedInfo: {},
                        couponInfo: {},
                        bookingInfo: {},
                        userRightTitle: "",
                      }),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.initSearchDate(), this.fetchCouponInfo();
                        },
                      },
                      {
                        key: "initSearchDate",
                        value: function () {
                          var e = this.props.data,
                            t = e.checkInDate,
                            i = e.checkOutDate,
                            n = new Date().getTime(),
                            o = Z()().subtract(1, "day").format("YYYY-MM-DD"),
                            a = Z()().format("YYYY-MM-DD"),
                            c = Z()().add(1, "day").format("YYYY-MM-DD"),
                            s = n - +new Date(Z()().format("YYYY/MM/DD"));
                          s > 0 && s < 216e5
                            ? (this.setState({ smallHoursFlag: !0 }),
                              t == a && i == c
                                ? this.setHotelDate(o, a, 2)
                                : this.setHotelDate(t, i))
                            : this.setHotelDate(t, i);
                        },
                      },
                      {
                        key: "fetchCouponInfo",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, i, n, o, c, s, r, l, d;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = this.props.data),
                                          console.warn("propsData:", t),
                                          (e.prev = 2),
                                          (i = {
                                            data: {
                                              cityId: t.cityId || 0,
                                              cityName: t.cityName,
                                              orderNumber: t.orderNumber,
                                              departStation: t.departStation,
                                              departCity: t.departCity,
                                              arrivalStation: t.arrivalStation,
                                              arrivalCity: t.arrivalCity,
                                              intlArrival: t.intlArrival,
                                              departTime: t.departTime,
                                              arrivalTime: t.arrivalTime,
                                              pageSource: t.pageSource,
                                              clientVersion: 962,
                                            },
                                          }),
                                          (e.next = 6),
                                          (0, x.ez)(i)
                                        );
                                      case 6:
                                        (n = e.sent) &&
                                          1 === n.resultCode &&
                                          (console.log("data:", n.data),
                                          n.data &&
                                            n.data.productLineRecommend &&
                                            ((o = n.data.productLineRecommend),
                                            (c = o.bookingInfo || {}),
                                            (s = o.pinedInfo || {}),
                                            (r = o.couponInfo || {}),
                                            (l = {}),
                                            (d = ""),
                                            o.seasonActivities &&
                                              Array.isArray(
                                                o.seasonActivities
                                              ) &&
                                              o.seasonActivities.length > 0 &&
                                              (l = o.seasonActivities[0]),
                                            o.userRightsInfo &&
                                              o.userRightsInfo.userRightsList &&
                                              Array.isArray(
                                                o.userRightsInfo.userRightsList
                                              ) &&
                                              o.userRightsInfo.userRightsList
                                                .length > 0 &&
                                              o.userRightsInfo.userRightsList[0]
                                                .title &&
                                              (d =
                                                o.userRightsInfo
                                                  .userRightsList[0].title),
                                            this.setState({
                                              bookingInfo: c,
                                              pinedInfo: s,
                                              couponInfo: r,
                                              seasonData: l,
                                              userRightTitle: d,
                                            }))),
                                          (e.next = 13);
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(2)),
                                          console.log("e:", e.t0);
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 10]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "handleHotelCalender",
                        value: function () {
                          var e = this,
                            t = this.state.hotelSearch.date;
                          this.doBusTraceInfo("htlCkinIcon", "酒店时间选择");
                          var i = !1,
                            n = Z()().format("YYYY-MM-DD"),
                            o = Z()().add(1, "day").format("YYYY-MM-DD"),
                            a = Z()().valueOf(),
                            c = Z()().startOf().valueOf(),
                            s = a - c;
                          s > 0 && s < 216e5 && (i = !0);
                          var r = t.checkInDate;
                          c > Z()(r).valueOf() && (r = n);
                          var l = t.checkOutDate;
                          Z()(r).valueOf() > Z()(l).valueOf() && (l = o);
                          var d = Z()(n).add(180, "day").format("YYYY-MM-DD");
                          C.Z.calendar(
                            {
                              checkInDate: r,
                              checkOutDate: l,
                              beginDate: i
                                ? Z()(n).subtract(1, "day").format("YYYY-MM-DD")
                                : n,
                              endDate: d,
                              type: "checkInOut",
                              confirmBtn: !0,
                              bu: "hotel",
                              showHotelNotice: i,
                              noticeDate: this.state.noticeDate,
                            },
                            function (t) {
                              var i = t.checkInDate,
                                n = t.checkOutDate;
                              e.setHotelDate(i, n, 2);
                            }
                          );
                        },
                      },
                      {
                        key: "setHotelDate",
                        value: function (e, t) {
                          var i =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : 1,
                            n = Z()().format("YYYY-MM-DD"),
                            o = Z()().add(1, "day").format("YYYY-MM-DD");
                          (!e || Z()(e).valueOf() < Z()(n).valueOf()) &&
                            2 != i &&
                            (e = n),
                            (!t || Z()(t).valueOf() < Z()(o).valueOf()) &&
                              2 != i &&
                              (t = o);
                          var a = Z()(e).format("YYYY-MM-DD"),
                            c = Z()(t).format("YYYY-MM-DD"),
                            s = this.state.hotelSearch,
                            r = s.date;
                          (r.checkInDate = a),
                            (r.checkOutDate = c),
                            (r.checkInDay_disp = V.ZP.getDateDisp(a)),
                            (r.checkOutDay_disp = V.ZP.getDateDisp(c)),
                            (r.totalDays = Math.round(
                              (Z()(t).valueOf() - Z()(e).valueOf()) / 864e5
                            )),
                            this.setState({ hotelSearch: s });
                        },
                      },
                      {
                        key: "doBusTraceInfo",
                        value: function (e, t, i) {
                          this.props.doBusTraceInfo &&
                            this.props.doBusTraceInfo(e, t, i);
                        },
                      },
                      {
                        key: "skipHotelList",
                        value: function () {
                          var e =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                            t = this.props.data,
                            i = this.state,
                            n = i.hotelSearch,
                            o = i.bookingInfo,
                            a = i.smallHoursFlag;
                          this.doBusTraceInfo(
                            e ? "htlCouponUseIcon" : "bookHtlIcon",
                            e ? "20元酒店券立即使用按钮" : "“预定酒店“按钮"
                          ),
                            this.doBusTraceInfo(
                              "htlCouponUseIcon",
                              "abt_汽车智行完成页红包点击效果",
                              2
                            ),
                            this.navigateTo({
                              url: "/pages/hotel/list/list",
                              data: {
                                queryModel: {
                                  cityId: o.cityId,
                                  cityName: o.cityName,
                                  cityAddress: o.cityName,
                                  districtId: t.intlArrival,
                                  checkInDate: n.date.checkInDate,
                                  checkOutDate: n.date.checkOutDate,
                                  smallHoursFlag: a,
                                },
                                pageSource: t.pageSource,
                              },
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.pinedInfo,
                            n = t.couponInfo,
                            o = t.seasonData,
                            a = t.userRightTitle,
                            c = t.hotelSearch,
                            s = i.title || "订酒店",
                            r = i.subTitle || "汽车用户专享折扣";
                          return (0, D.BX)(k.View, {
                            className: "m-hotel-entry",
                            children: [
                              (0, D.BX)(k.View, {
                                className: "coupon-ctn",
                                children: [
                                  (0, D.BX)(k.View, {
                                    className: "coupon-tit",
                                    children: [
                                      s,
                                      "·",
                                      (0, D.tZ)(B.ZtRichText, {
                                        style: "display:inline-block;",
                                        nodes: r,
                                      }),
                                    ],
                                  }),
                                  o &&
                                    o.img &&
                                    (0, D.tZ)(k.View, {
                                      className: "season-activity",
                                      children: (0, D.tZ)(k.Image, {
                                        className: "activity-img",
                                        src: o.img,
                                      }),
                                    }),
                                  !(o && o.img) &&
                                    n &&
                                    n.price &&
                                    (0, D.BX)(k.View, {
                                      className: "coupon",
                                      children: [
                                        (0, D.tZ)(k.View, {
                                          className: "price",
                                          children: n.price,
                                        }),
                                        (0, D.tZ)(k.View, {
                                          className: "promotion-tit",
                                          children: n.promotionTitle,
                                        }),
                                        (0, D.BX)(k.View, {
                                          className: "use-ctn",
                                          id: "AABb",
                                          onClick: function () {
                                            e.skipHotelList(!0);
                                          },
                                          children: [
                                            (0, D.tZ)(k.View, {
                                              className: "use-txt",
                                              children: n.receiveMessage,
                                            }),
                                            (0, D.tZ)(k.Image, {
                                              className: "use-img",
                                              src: "https://images3.c-ctrip.com/zt/wechat/hotel/cross_coupon_btn.png",
                                            }),
                                          ],
                                        }),
                                        (0, D.tZ)(k.View, {
                                          className: "right-info",
                                          children: a,
                                        }),
                                      ],
                                    }),
                                  !(o && o.img) &&
                                    !(n && n.price) &&
                                    (0, D.BX)(k.View, {
                                      className: "coupon-fixed",
                                      children: [
                                        (0, D.BX)(k.View, {
                                          className: "bg",
                                          children: [
                                            (0, D.BX)(k.View, {
                                              className: "left",
                                              children: [
                                                "75",
                                                (0, D.tZ)(k.Text, {
                                                  className: "unit",
                                                  children: "折",
                                                }),
                                              ],
                                            }),
                                            (0, D.BX)(k.View, {
                                              className: "right",
                                              children: [
                                                "折扣订酒店",
                                                (0, D.tZ)(k.View, {
                                                  className: "btn",
                                                  id: "AABc",
                                                  onClick: function () {
                                                    e.skipHotelList(!0);
                                                  },
                                                  children: "立即使用",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, D.BX)(k.View, {
                                          className: "bg",
                                          children: [
                                            (0, D.BX)(k.View, {
                                              className: "left",
                                              children: [
                                                (0, D.tZ)(k.Text, {
                                                  className: "unit",
                                                  children: "¥",
                                                }),
                                                "50",
                                              ],
                                            }),
                                            (0, D.BX)(k.View, {
                                              className: "right",
                                              children: [
                                                "酒店满减券",
                                                (0, D.tZ)(k.View, {
                                                  className: "btn",
                                                  id: "AABd",
                                                  onClick: function () {
                                                    e.skipHotelList(!0);
                                                  },
                                                  children: "立即使用",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, D.BX)(k.View, {
                                className: "main-section",
                                children: [
                                  (0, D.BX)(k.View, {
                                    className: "date-picker-entry",
                                    id: "AABe",
                                    onClick: this.handleHotelCalender,
                                    children: [
                                      (0, D.BX)(k.View, {
                                        className: "sec-check-in",
                                        children: [
                                          (0, D.tZ)(k.Text, {
                                            className: "check-date",
                                            children: c.date.checkInDay_disp[0],
                                          }),
                                          (0, D.tZ)(k.Text, {
                                            className: "check-txt",
                                            children: "入住",
                                          }),
                                        ],
                                      }),
                                      (0, D.BX)(k.View, {
                                        className: "sec-count",
                                        children: [
                                          "共",
                                          c.date.totalDays,
                                          "晚",
                                        ],
                                      }),
                                      (0, D.BX)(k.View, {
                                        className: "sec-check-out",
                                        children: [
                                          (0, D.tZ)(k.Text, {
                                            className: "check-date",
                                            children:
                                              c.date.checkOutDay_disp[0],
                                          }),
                                          (0, D.tZ)(k.Text, {
                                            className: "check-txt",
                                            children: "离店",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, D.tZ)(k.View, {
                                    className: "hotel-search-btn",
                                    id: "AABf",
                                    onClick: function () {
                                      e.skipHotelList(!1);
                                    },
                                    children: "预订酒店",
                                  }),
                                ],
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(f.default.Component))
              ) || n,
            A = i(50185),
            P = i(51079),
            L = i(79295),
            _ = i(46931),
            X = i(20500),
            F = i(43796),
            R = i(90481),
            O = i(25958),
            z = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, r.Z)(this, i),
                  ((n = t.call(this, e)).state = {
                    isWechat: w.default.isWechat,
                    visible: !1,
                    modalInfo: {},
                  }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.initPage(this.props);
                    },
                  },
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      this.initPage(e);
                    },
                  },
                  {
                    key: "initPage",
                    value: function (e) {
                      var t = this.state.visible;
                      e.show !== t &&
                        this.setState({
                          visible: e.show,
                          modalInfo: (0, s.Z)(
                            (0, s.Z)({}, e.info),
                            {},
                            { subList: (e.info.subList || []).slice(0, 3) }
                          ),
                        });
                    },
                  },
                  {
                    key: "onClickSubmit",
                    value: function () {
                      var e = this;
                      this.props.onProcess && this.props.onProcess();
                      var t = this.state.modalInfo,
                        i = t.subList.map(function (e) {
                          return e.tempId;
                        });
                      N.Z.doSubscribe(i, t.sourceCode)
                        .then(function () {
                          g().showToast({ title: "订阅成功", icon: "none" }),
                            e.props.onSuccess && e.props.onSuccess();
                        })
                        .catch(function (t) {
                          console.log(t), e.props.onFail && e.props.onFail();
                        });
                    },
                  },
                  {
                    key: "onClickCancel",
                    value: function () {
                      this.props.onCancel && this.props.onCancel();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.state,
                        t = e.isWechat,
                        i = e.visible,
                        n = e.modalInfo,
                        o =
                          n.subList &&
                          n.subList.some(function (e) {
                            return e.isReject;
                          });
                      return (0, D.tZ)(k.Block, {
                        children:
                          t &&
                          i &&
                          (0, D.tZ)(O.Z, {
                            show: i,
                            propStyle: "background: transparent;",
                            hiddenCloseIcon: "true",
                            onClose: function () {},
                            ubtTrace: function () {},
                            children: (0, D.BX)(k.View, {
                              className: "bus-subscribe-modal",
                              children: [
                                (0, D.tZ)(k.View, { className: "top-icon" }),
                                (0, D.tZ)(k.View, { className: "top-image" }),
                                (0, D.tZ)(k.View, {
                                  className: "title",
                                  children: n.title,
                                }),
                                (0, D.tZ)(k.View, {
                                  className: "desc desc-no-btom",
                                  style: (0, s.Z)(
                                    {},
                                    o ? {} : { marginBottom: "15px" }
                                  ),
                                  children: n.desc,
                                }),
                                o &&
                                  (0, D.tZ)(k.View, {
                                    className: "desc",
                                    style:
                                      "fontWeight:bold;color:#222222;marginTop:0",
                                    children:
                                      "请在小程序设置界面（「右上角」-「设置」）中管理「订阅消息」，允许推送通知。",
                                  }),
                                (0, D.tZ)(k.View, {
                                  className: "content",
                                  children:
                                    n.subList &&
                                    n.subList.map(function (e, t) {
                                      return (0,
                                      D.BX)(k.View, { className: "item", children: [(0, D.tZ)(k.View, { className: "check-icon" }), (0, D.tZ)(k.View, { className: "txt", children: e.title }), (0, D.tZ)(k.View, { className: "info-icon" })] }, t);
                                    }),
                                }),
                                (0, D.BX)(k.View, {
                                  className: "btn",
                                  children: [
                                    (0, D.tZ)(k.View, {
                                      className: "left-btn",
                                      stopPropagation: !0,
                                      id: "AdBT",
                                      onClick: this.onClickCancel.bind(this),
                                      children: "取消",
                                    }),
                                    n.subList && 1 === n.subList.length && o
                                      ? (0, D.tZ)(k.View, {
                                          className:
                                            "right-btn bgcolor-primary",
                                          stopPropagation: !0,
                                          id: "AdBU",
                                          onClick:
                                            this.props.onSuccess.bind(this),
                                          children: "去开启",
                                        })
                                      : (0, D.tZ)(k.View, {
                                          className:
                                            "right-btn bgcolor-primary",
                                          stopPropagation: !0,
                                          id: "AdBV",
                                          onClick:
                                            this.onClickSubmit.bind(this),
                                          children: "去开启",
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                      });
                    },
                  },
                ]),
                i
              );
            })(f.default.Component);
          (0, m.Z)(z, "options", { addGlobalClass: !0 });
          var Y,
            E,
            H = z,
            W = i(28676),
            U = i(1153),
            j = i(65004),
            Q = i(90699),
            K = i(43005),
            q = i(13025),
            G = function (e) {
              return new Promise(function (t, i) {
                var n = e.url,
                  o = e.title,
                  a = e.subTitle,
                  c = e.content,
                  s = (void 0 === c ? "" : c)
                    .split("|br|")
                    .slice(0, 5)
                    .map(function (e, t) {
                      return '<div class="con-li">\n    <img class="order" src="https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/order/'
                        .concat(t + 1, '@3x.png" />\n    <div class="text"> ')
                        .concat(e, " </div>\n  </div>");
                    })
                    .join(""),
                  r = {
                    renderType: 2,
                    html: '<div>\n    <style>\n    .share {\n      width: 750px;\n      position: relative;\n      left: 0;\n      top: 0;\n      z-index: 10;\n      background: linear-gradient(180deg, #2e5fff 5%, #50d4ff 28%, #37a7ff 45%, #00bcff);\n      padding-bottom: 60px;\n    }\n    .share::before {\n      content: "";\n      position: absolute;\n      background: url("https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/t-bg.png")\n        no-repeat top left;\n      background-size: contain;\n      width: 100%;\n      height: 100%;\n    }\n    .share .logo {\n      height: 72px;\n      width: 240px;\n      margin: 0 auto;\n      background: url("https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/logo@3x.png")\n        no-repeat;\n      background-size: contain;\n    }\n    .share .head {\n      text-align: center;\n      margin: 50px 0;\n    }\n    .share .head .title {\n      height: 80px;\n    }\n    .share .head .b-title {\n      height: 68px;\n      line-height:60px;\n      color: #ffffff;\n      font-family: WenQuanYi Micro Hei Mono;\n      font-size: 32px;\n      font-weight:600;\n      letter-spacing: 0px;\n      min-width: 502px;\n      background: url("https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/b-title-bg.png")\n        no-repeat;\n      background-size: 100% 100%;\n      margin: 24px auto 0;\n    }\n    .content {\n      position: relative;\n      margin: 0 20px;\n      border-radius: 32px;\n      background: linear-gradient(\n        to bottom,\n        rgba(238, 252, 255, 0.82),\n        rgba(255, 255, 255, 0)\n      );\n      padding: 24px 24px 30px;\n      z-index: 1;\n      overflow: hidden;\n    }\n    .content::after {\n      position: absolute;\n      content: "";\n      top: 4px;\n      right: 4px;\n      bottom: 4px;\n      left: 4px;\n      border-radius: 32px;\n      box-shadow: 0 -6px 4px rgb(220 239 255 / 20%);\n      background: linear-gradient(to bottom, #00a1ff 5%, #004fff 95%);\n      z-index: -1;\n    }\n    .content .main {\n      background: #ffffff;\n      border-radius: 32px;\n      border:  3px solid #adfffc;\n      box-shadow: 0px 4px 20px 0px rgba(16, 91, 255, 0.59),\n        inset 0px 0px 28px 0px rgb(101, 214, 255);\n    }\n    .content .main .top-content {\n      position: relative;\n    }\n    .content .main .top-content .title {\n      height: 68px;\n      width: 100%;\n      background: url("https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/line-title.png")\n        no-repeat top center;\n      background-size: contain;\n      position: relative;\n      top: -3px;\n      margin-bottom: 48px;\n    }\n    .content .main .top-content::before {\n      content: "";\n      background: url("https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/next-quotes.png")\n        no-repeat;\n      height: 36px;\n      width: 50px;\n      background-size: contain;\n      position: absolute;\n      top: 68px;\n      left: 30px;\n    }\n    .content .main .top-content::after {\n      content: "";\n      background: url("https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/on-quotes.png")\n        no-repeat;\n      height: 36px;\n      width: 50px;\n      background-size: contain;\n      position: absolute;\n      bottom: 5px;\n      right: 30px;\n    }\n    .content .main .top-content .con {\n      position: relative;\n      padding: 0 84px 12px;\n      vertical-align: middle;\n      background:180deg url("https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/path.png") no-repeat contain 3.5px;\n    }\n    .content .main .top-content .con .con-li {\n      color: #333333;\n      font-family: WenQuanYi Micro Hei Mono;\n      font-size: 28px;\n      font-weight: 600;\n      letter-spacing: 0px;\n      margin-bottom: 24px;\n      display: flex;\n      position: relative;\n      z-index: 1;\n      justify-content:center;\n      align-items: flex-start\n    }\n    .content .main .top-content .con .con-li .order{\n      height: 38px;\n      width: 38px;\n      display: block;\n      margin-top: -3.5px;\n    }\n    .content .main .top-content .con .con-li::after{\n      content: "";\n      position: absolute;\n      width: 1.5px;\n      left: 19px;\n      opacity: 0.2;\n      top:38px;\n      z-index: 0;\n      height: calc(100% - 20px);\n      background-image: linear-gradient(to bottom, #198CFF 0%, #198CFF 70%, transparent 0%);\n      background-size: 100% 6px;\n      background-repeat: repeat-y;\n    }\n    .content .main .top-content .con .con-li:last-child::after{\n      display: none;\n    }\n    .content .main .top-content .con .con-li .text{\n      flex: auto;\n      margin-left: 16px;\n    }\n    .content .main .top-content .con .con-li .high {\n      color: #ff5959;\n      font-family: WenQuanYi Micro Hei Mono;\n      font-size: 32px;\n      font-weight: 600;\n      letter-spacing: 0px;\n    }\n    .content .main .top-content .con .con-li:last-child {\n      margin-bottom: 0px;\n    }\n    .middle-line {\n      height: 22px;\n      margin: 18px 64px;\n      background: url("https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/path.png")\n        no-repeat center;\n      background-size: contain;\n      position: relative;\n    }\n    .middle-line::before,\n    .middle-line::after {\n      content: "";\n      position: absolute;\n      width: 32px;\n      height: 32px;\n      border-radius: 50%;\n      background: linear-gradient(180deg, #0280ff, #027eff);\n     left: -84px;\n      top: 50%;\n      margin-top: -16px;\n     }\n    .middle-line::after {\n      right: -84px;\n      left: unset;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n    .middle-line::before {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n    .bottom-content .con {\n      text-align: center;\n    }\n    .bottom-content .con .qrcode{\n      max-height: 312px;\n      max-width: 312px;\n    }\n    .bottom-content .con .tip-btn {\n      background: #198cff;\n      border-radius: 16px;\n      height: 58px;\n      width: 288px;\n      color: #ffffff;\n      font-family: WenQuanYi Micro Hei Mono;\n      font-size: 26px;\n      font-weight: 600;\n      line-height: 58px;\n      letter-spacing: 0px;\n      text-align: center;\n      margin: 16px auto 50px;\n    }\n    .share .bottom {\n      margin: 60px auto 0;\n      width: 344px;\n      height: 40px;\n      background: url("https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/b-logo.png")\n        no-repeat center;\n      background-size: contain;\n    }\n    </style>\n    <div class="screenshot-section share">\n        <div class="logo"></div>\n        <div class="head">\n            <img\n            class="title"\n            src="'
                      .concat(o, '"\n            />\n            ')
                      .concat(
                        a ? '<div class="b-title">'.concat(a, "</div>") : "",
                        '\n        </div>\n        <div class="content">\n            <div class="main">\n            <div class="top-content">\n                <div class="title"></div>\n                <div class="con">\n                  '
                      )
                      .concat(
                        s,
                        '\n                </div>\n            </div>\n            <div class="middle-line"></div>\n            <div class="bottom-content">\n                <div class="con">\n                <img class=\'qrcode\'\n                    src="'
                      )
                      .concat(
                        n,
                        '"\n                />\n                <div class="tip-btn">↑ 微信扫一扫识别 ↑</div>\n                </div>\n            </div>\n            </div>\n        </div>\n        <div class="bottom"></div>\n        </div>\n    </div>'
                      ),
                    imgType: 2,
                  };
                (0, q.TF)(r).then(function (e) {
                  1 !== e.resultCode ? i() : t(e.img);
                });
              });
            },
            J = 1,
            $ = 2,
            ee = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, r.Z)(this, i),
                  ((n = t.call(this, e)).state = { isSaved: !1 }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  { key: "noop", value: function () {} },
                  {
                    key: "checkAlbumAuthPromise",
                    value: function () {
                      return new Promise(function (e, t) {
                        g().getSetting({
                          success: function (i) {
                            i.authSetting["scope.writePhotosAlbum"]
                              ? e()
                              : g().authorize({
                                  scope: "scope.writePhotosAlbum",
                                  success: function () {
                                    e();
                                  },
                                  fail: function () {
                                    t();
                                  },
                                });
                          },
                        });
                      });
                    },
                  },
                  {
                    key: "onSaveCodePicClick",
                    value: function () {
                      var e = this;
                      if (this.state.isSaved) {
                        g().reLaunch({
                          url: "/pages/home/index?tab=bus&utmSource=".concat(
                            "zx_qzf_qcddj"
                          ),
                        });
                      } else {
                        var t = this.props.couponInfo,
                          i = null == t ? void 0 : t.couponPackageImage;
                        i &&
                          this.checkAlbumAuthPromise()
                            .then(
                              this.downloadNetFile.bind(this, i),
                              function () {
                                return g().showModal({
                                  title: "授权失败",
                                  content:
                                    "请在小程序设置界面（「右上角」-「设置」）中打开「保存到相册」",
                                  confirmText: "去设置",
                                  cancelText: "取消",
                                  success: function (t) {
                                    t.confirm &&
                                      g().openSetting({
                                        success: function (t) {
                                          t.authSetting[
                                            "scope.writePhotosAlbum"
                                          ] && e.handleSaveYlbPic();
                                        },
                                      });
                                  },
                                });
                              }
                            )
                            .finally(function () {
                              console.log("do saved cb..."),
                                e.setState({ isSaved: !0 });
                            });
                      }
                    },
                  },
                  {
                    key: "downloadNetFile",
                    value: function (e) {
                      g().downloadFile({
                        url: e,
                        success: function (e) {
                          if (200 === e.statusCode) {
                            var t = e.tempFilePath;
                            console.log("path", t),
                              g().saveImageToPhotosAlbum({
                                filePath: t,
                                success: function () {
                                  g().showToast({ title: "已保存到相册" });
                                },
                                fail: function (e) {
                                  console.log("downloadNetFile err:", e),
                                    g().showToast({
                                      title: "图片保存失败, 请重试",
                                      icon: "none",
                                    });
                                },
                              });
                          }
                        },
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.onRefund,
                        i = e.couponInfo,
                        n = this.state.isSaved,
                        o = null == i ? void 0 : i.canRefund,
                        a = null == i ? void 0 : i.couponPackageImage;
                      return (0, D.tZ)(k.View, {
                        className: "bus-order-detail-station-coupon-comp",
                        children: (0, D.BX)(k.View, {
                          className: "coupon-comp-body",
                          children: [
                            (0, D.BX)(k.View, {
                              className: "content-head",
                              children: [
                                (0, D.tZ)(k.Image, {
                                  className: "head-icon",
                                  src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/hbtb@3x.png",
                                  mode: "aspectFit",
                                }),
                                "汽车单单减",
                              ],
                            }),
                            (0, D.BX)(k.View, {
                              className: "handle-group",
                              children: [
                                (0, D.tZ)(k.View, {
                                  className: "refund-btn",
                                  style: { visibility: o ? "" : "hidden" },
                                  id: "AdES",
                                  onClick: o ? t : this.noop,
                                  children: "我要退款",
                                }),
                                (0, D.tZ)(k.View, {
                                  className: "save-btn",
                                  style: { visibility: a ? "" : "hidden" },
                                  id: "AdET",
                                  onClick: a
                                    ? this.onSaveCodePicClick.bind(this)
                                    : this.noop,
                                  children: n ? "去使用" : "保存使用码",
                                }),
                              ],
                            }),
                            (0, D.tZ)(k.View, {
                              className: "content-body",
                              children: (0, D.tZ)(k.ScrollView, {
                                scrollX: !0,
                                children: (i.couponDtoList || []).map(function (
                                  e,
                                  t
                                ) {
                                  var i = e.title,
                                    n = e.subTitle,
                                    o = e.price;
                                  return (0, D.tZ)(
                                    k.View,
                                    {
                                      className: "coupon-card",
                                      children: (0, D.BX)(k.View, {
                                        className: "coupon-content",
                                        children: [
                                          (0, D.BX)(k.View, {
                                            className: "head-tag",
                                            children: ["· ", i, " ·"],
                                          }),
                                          (0, D.tZ)(k.View, {
                                            className: "price-content",
                                            children: o,
                                          }),
                                          (0, D.tZ)(k.View, {
                                            className: "btom",
                                            children: n,
                                          }),
                                        ],
                                      }),
                                    },
                                    t
                                  );
                                }),
                              }),
                            }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent),
            te = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                return (0, r.Z)(this, i), t.call(this, e);
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.isShow,
                        i = e.onCancel,
                        n = e.onSure,
                        o = e.detainInfo,
                        a = void 0 === o ? "" : o;
                      return (0, D.tZ)(B.ZtActivityPop, {
                        className: "bus-dt-station-scan-coupon-refund-modal",
                        show: t,
                        isShowClose: !1,
                        children: (0, D.BX)(k.View, {
                          className: "modal-content",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "title",
                              children: "确定要放弃福利吗",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "desc",
                              dangerouslySetInnerHTML: { __html: a },
                            }),
                            (0, D.BX)(k.View, {
                              className: "btom-content",
                              children: [
                                (0, D.tZ)(k.View, {
                                  className: "btn-cancel",
                                  id: "AdEU",
                                  onClick: n,
                                  children: "狠心放弃",
                                }),
                                (0, D.tZ)(k.View, {
                                  className: "btn-sure",
                                  id: "AdEV",
                                  onClick: i,
                                  children: "继续享用",
                                }),
                              ],
                            }),
                            (0, D.tZ)(k.Image, {
                              src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/gbtc@3x.png",
                              mode: "aspectFit",
                              className: "close-btn",
                              id: "AdEW",
                              onClick: i,
                            }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent),
            ie = i(5994),
            ne = {
              waitpay: "待支付",
              payProcessing: "支付处理中",
              payFail: "支付失败",
              paySuccessWaitProcess: "等待购票",
              locked: "购票中",
              ticketSuccess: "已成交",
              refunding: "退款中",
              refund: "全部退款",
              canceled: "已取消",
              payTimeout: "超时未⽀付",
              partRefund: "部分退票",
              allRefund: "成功退票",
            },
            oe = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var n;
                return (0, r.Z)(this, i), ((n = t.call(this, e)).state = {}), n;
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "getBtnText",
                    value: function () {
                      var e,
                        t,
                        i = this.props.orderInfo.ticketInfo;
                      return [ne.ticketSuccess].includes(
                        this.props.orderInfo.orderStateDesc
                      ) &&
                        null != i &&
                        null !== (e = i.ticketFetchAndCheckInfo) &&
                        void 0 !== e &&
                        null !== (t = e.ticketItemList) &&
                        void 0 !== t &&
                        t.some(function (e) {
                          return e.supportRefundTicket;
                        })
                        ? "退票"
                        : "查看";
                    },
                  },
                  {
                    key: "getTicketStateColor",
                    value: function () {
                      var e, t, i, n;
                      return (
                        (null === (e = this.props) ||
                        void 0 === e ||
                        null === (t = e.orderInfo) ||
                        void 0 === t ||
                        null === (i = t.ticketInfo) ||
                        void 0 === i ||
                        null === (n = i.ticketFetchAndCheckInfo) ||
                        void 0 === n
                          ? void 0
                          : n.ticketItemList) || []
                      ).find(function (e) {
                        return !!e.refundTicketOverTimeNote;
                      })
                        ? "gray"
                        : [ne.ticketSuccess, ne.allRefund].includes(
                            this.props.orderInfo.orderStateDesc
                          )
                        ? "green"
                        : "red";
                    },
                  },
                  {
                    key: "getPassDescOnMultiMode",
                    value: function (e) {
                      var t = e.join("、");
                      return t.length < 8
                        ? (0, D.tZ)(k.Text, {
                            className: "pass-identityCode desc",
                            children: t,
                          })
                        : (0, D.BX)(k.Block, {
                            children: [
                              (0, D.BX)(k.Text, {
                                className: "pass-identityCode desc",
                                children: [t.slice(0, 8), "..."],
                              }),
                              (0, D.BX)(k.Text, {
                                className: "pass-identityCode sum",
                                children: [
                                  "等",
                                  (0, D.tZ)(k.Text, {
                                    style: {
                                      color: w.default.isTieyou
                                        ? "#FC6E51"
                                        : "#198CFF",
                                    },
                                    children: e.length,
                                  }),
                                  "位",
                                ],
                              }),
                            ],
                          });
                    },
                  },
                  {
                    key: "getStateDesc",
                    value: function () {
                      var e, t, i, n;
                      if (
                        [ne.paySuccessWaitProcess, ne.locked].includes(
                          this.props.orderInfo.orderStateDesc
                        )
                      )
                        return "待出票";
                      var o = (
                        (null === (e = this.props) ||
                        void 0 === e ||
                        null === (t = e.orderInfo) ||
                        void 0 === t ||
                        null === (i = t.ticketInfo) ||
                        void 0 === i ||
                        null === (n = i.ticketFetchAndCheckInfo) ||
                        void 0 === n
                          ? void 0
                          : n.ticketItemList) || []
                      ).find(function (e) {
                        return !!e.refundTicketOverTimeNote;
                      });
                      return o
                        ? o.refundTicketRejectReason
                        : [ne.ticketSuccess].includes(
                            this.props.orderInfo.orderStateDesc
                          )
                        ? "出票成功"
                        : [ne.partRefund].includes(
                            this.props.orderInfo.orderStateDesc
                          )
                        ? "部分退票"
                        : [ne.allRefund].includes(
                            this.props.orderInfo.orderStateDesc
                          )
                        ? "退票成功"
                        : "";
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e,
                        t,
                        i,
                        n = this,
                        o = this.props,
                        a = o.orderInfo.ticketInfo,
                        c = o.isSupportPassInfoInPassengerCard,
                        s = o.awakenTicketsDetailModal;
                      if (
                        null == a ||
                        null === (e = a.ticketFetchAndCheckInfo) ||
                        void 0 === e ||
                        null === (t = e.ticketItemList) ||
                        void 0 === t ||
                        !t.length
                      )
                        return null;
                      var r =
                          (null == a ||
                          null === (i = a.ticketFetchAndCheckInfo) ||
                          void 0 === i
                            ? void 0
                            : i.ticketItemList) || [],
                        l = r
                          .map(function (e) {
                            var t = e.passengerList;
                            return (void 0 === t ? [] : t).map(function (e) {
                              return e.name;
                            });
                          })
                          .flat()
                          .filter(function (e) {
                            return !!e;
                          }),
                        d = this.getBtnText(),
                        u = [
                          ne.paySuccessWaitProcess,
                          ne.locked,
                          ne.ticketSuccess,
                          ne.partRefund,
                          ne.allRefund,
                        ].includes(this.props.orderInfo.orderStateDesc);
                      return (0, D.tZ)(k.View, {
                        className: "bus-orderinfov2-passenger-info ".concat(
                          w.default.isTieyou ? "ty" : ""
                        ),
                        children: (0, D.BX)(k.View, {
                          className: "orderinfov2-passenger-info-content",
                          children: [
                            !c &&
                              (0, D.tZ)(k.View, {
                                className: "single-passenger-content",
                                children: (0, D.BX)(k.View, {
                                  className: "pass-left",
                                  children: [
                                    (0, D.tZ)(k.Text, {
                                      className: "pass-name",
                                      children: "乘客人数",
                                    }),
                                    (0, D.BX)(k.Text, {
                                      className: "pass-identityCode sum",
                                      children: [
                                        this.props.orderInfo.passengerNum,
                                        "位",
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            c &&
                              (l.length > 1
                                ? (0, D.BX)(k.View, {
                                    className: "single-passenger-content",
                                    children: [
                                      (0, D.BX)(k.View, {
                                        className: "pass-left",
                                        children: [
                                          (0, D.tZ)(k.Text, {
                                            className: "pass-name",
                                            children: "乘客",
                                          }),
                                          this.getPassDescOnMultiMode(l),
                                        ],
                                      }),
                                      (0, D.BX)(k.View, {
                                        className: "pass-right",
                                        children: [
                                          u &&
                                            (0, D.tZ)(k.Text, {
                                              className:
                                                "pass-ticketStateDesc ".concat(
                                                  this.getTicketStateColor()
                                                ),
                                              children: this.getStateDesc(),
                                            }),
                                          (0, D.tZ)(k.View, {
                                            className: "pass-detail",
                                            id: "AdED",
                                            onClick: s,
                                            children: d,
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : r.map(function (e, t) {
                                    var i = e.passengerList;
                                    return (void 0 === i ? [] : i).map(
                                      function (e, i) {
                                        return (0, D.BX)(
                                          k.View,
                                          {
                                            className:
                                              "single-passenger-content",
                                            children: [
                                              (0, D.BX)(k.View, {
                                                className: "pass-left",
                                                children: [
                                                  (0, D.tZ)(k.Text, {
                                                    className: "pass-name",
                                                    children: e.name,
                                                  }),
                                                  (0, D.tZ)(k.Text, {
                                                    className:
                                                      "pass-identityCode",
                                                    children: e.identityCode,
                                                  }),
                                                ],
                                              }),
                                              (0, D.BX)(k.View, {
                                                className: "pass-right",
                                                children: [
                                                  u &&
                                                    (0, D.tZ)(k.Text, {
                                                      className:
                                                        "pass-ticketStateDesc ".concat(
                                                          n.getTicketStateColor()
                                                        ),
                                                      children:
                                                        n.getStateDesc(),
                                                    }),
                                                  (0, D.tZ)(k.View, {
                                                    className: "pass-detail",
                                                    id: "AdEE",
                                                    onClick: s,
                                                    children: d,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          "".concat(t, "-").concat(i)
                                        );
                                      }
                                    );
                                  })),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent),
            ae = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, r.Z)(this, i),
                  ((n = t.call(this, e)).state = { codeTypeStore: {} }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "getCodeSrc",
                    value: function (e) {
                      var t = e.indexOf("http") > -1,
                        i = e && String(e).replace(/[\r\n]/g, "");
                      return t ? e : "data:image/png;base64,".concat(i);
                    },
                  },
                  {
                    key: "onImgLoad",
                    value: function () {
                      for (
                        var e = arguments.length, t = new Array(e), i = 0;
                        i < e;
                        i++
                      )
                        t[i] = arguments[i];
                      var n = t[0].currentTarget.dataset.index,
                        o = (t[0].detail.width / t[0].detail.height).toFixed(1);
                      this.setState({
                        codeTypeStore: (0, s.Z)(
                          (0, s.Z)({}, this.state.codeTypeStore),
                          {},
                          (0, m.Z)({}, n, o > 1.1 || o < 0.9 ? "bar" : "qr")
                        ),
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e,
                        t,
                        i,
                        n = this,
                        o = this.props,
                        a = o.ticketInfo,
                        c = o.onPreviewImage,
                        s =
                          null == a ||
                          null === (e = a.ticketFetchAndCheckInfo) ||
                          void 0 === e ||
                          null === (t = e.ticketItemList) ||
                          void 0 === t
                            ? void 0
                            : t.filter(function (e) {
                                return e.checkTicketQrCode;
                              }),
                        r = !(null == s || !s.length),
                        l = !(
                          null == a ||
                          null === (i = a.ticketFetchAndCheckInfo) ||
                          void 0 === i ||
                          !i.getTicketQrCode
                        ),
                        d = this.state.codeTypeStore;
                      return (
                        (r || l) &&
                        (0, D.BX)(k.View, {
                          className: "bus-orderDetailV2-ticketCode ".concat(
                            w.default.isTieyou ? "ty" : ""
                          ),
                          children: [
                            (0, D.tZ)(k.View, { className: "card-line" }),
                            (0, D.BX)(k.ScrollView, {
                              className: "ticketCode-scroll-view",
                              scrollX: "true",
                              children: [
                                l &&
                                  (0, D.BX)(k.View, {
                                    className: "code-item",
                                    children: [
                                      (0, D.tZ)(k.Image, {
                                        className: "img",
                                        "data-index": "getTicketQrCode",
                                        style: "display:none;",
                                        onLoad: this.onImgLoad.bind(this),
                                        src: this.getCodeSrc(
                                          a.ticketFetchAndCheckInfo
                                            .getTicketQrCode
                                        ),
                                      }),
                                      (0, D.tZ)(k.View, {
                                        className: "code-name",
                                        children: (0, D.tZ)(k.View, {
                                          className: "vert-text",
                                          children: "取票码",
                                        }),
                                      }),
                                      (0, D.tZ)(k.View, {
                                        className: "code-content",
                                        id: "AdEF",
                                        onClick: c.bind(
                                          this,
                                          {
                                            url: a.ticketFetchAndCheckInfo
                                              .getTicketQrCode,
                                            type: 1,
                                          },
                                          !1,
                                          ""
                                        ),
                                        children:
                                          d.getTicketQrCode &&
                                          (0, D.tZ)(k.Image, {
                                            src: this.getCodeSrc(
                                              a.ticketFetchAndCheckInfo
                                                .getTicketQrCode
                                            ),
                                            mode: "aspectFit",
                                            className: "code-img ".concat(
                                              d.getTicketQrCode
                                            ),
                                          }),
                                      }),
                                    ],
                                  }),
                                s
                                  .filter(function (e) {
                                    return e.checkTicketQrCode;
                                  })
                                  .map(function (e, t) {
                                    var i,
                                      o = n.getCodeSrc(e.checkTicketQrCode),
                                      a = [6].includes(e.ticketState);
                                    return (0,
                                    D.BX)(k.View, { className: "code-item  ".concat(a ? "disabled" : ""), children: [(0, D.tZ)(k.Image, { className: "img", "data-index": t, style: "display:none;", onLoad: n.onImgLoad.bind(n), src: o }), (0, D.BX)(k.View, { className: "code-name", children: [(0, D.tZ)(k.View, { className: "vert-order", children: t + 1 >= 10 ? t + 1 : "0".concat(t + 1) }), (0, D.tZ)(k.View, { className: "vert-text", children: "检票码" })] }), (0, D.BX)(k.View, { className: "code-content code-content-".concat(d[t]), id: "AdEG", onClick: a ? function () {} : c.bind(n, { url: e.checkTicketQrCode, type: 0 }, !1, ""), children: [d[t] && (0, D.tZ)(k.Image, { src: o, mode: "aspectFit", className: "code-img ".concat(d[t]) }), (0, D.BX)(k.View, { className: "pass-info", children: [(0, D.tZ)(k.View, { className: "pass-name", children: null === (i = e.passengerList[0]) || void 0 === i ? void 0 : i.name }), (0, D.tZ)(k.View, { className: "pass-ticketTypeName bd-1rpx", children: e.ticketTypeName })] })] })] }, t);
                                  }),
                              ],
                            }),
                          ],
                        })
                      );
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent),
            ce = i(22276),
            se = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, r.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, m.Z)((0, d.Z)(n), "displayTicketCells", [
                    { name: "检票口", key: "ticketCheck" },
                    { name: "座位号", key: "seatNumberStr" },
                    { name: "检票方式", key: "checkTicketRule" },
                    { name: "取票号", key: "fetchCode" },
                    { name: "取票密码", key: "fetchPassword" },
                    { name: "取票时间", key: "fetchTicketTime" },
                    { name: "取票凭证", key: "fetchTicketVoucher" },
                    { name: "联系电话", key: "ticketFetchPhoneNumber" },
                    { name: "联系司机", key: "driverMobile" },
                    { name: "车牌号", key: "carNumber" },
                    { name: "上车地址", key: "fromStationAddress" },
                    { name: "检票码", key: "checkCode" },
                    { key: "servicePhone" },
                  ]),
                  (0, m.Z)((0, d.Z)(n), "ticketFetchAndCheckInfoCodes", [
                    "seatNumberStr",
                    "driverMobile",
                    "carNumber",
                    "fromStationAddress",
                    "ticketCheck",
                    "checkTicketRule",
                    "fetchTicketTime",
                    "fetchTicketVoucher",
                    "checkCode",
                    "fetchPassword",
                    "servicePhone",
                    "fetchCode",
                  ]),
                  (0, m.Z)((0, d.Z)(n), "ticketInfoCodes", [
                    "ticketFetchPhoneNumber",
                  ]),
                  (0, m.Z)((0, d.Z)(n), "defaultDisplayKeys", [
                    "ticketCheck",
                    "seatNumberStr",
                    "checkTicketRule",
                  ]),
                  (n.state = { isShowMore: !1 }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "toMakePhone",
                    value: function (e) {
                      g().makePhoneCall({ phoneNumber: e });
                    },
                  },
                  {
                    key: "showMore",
                    value: function () {
                      this.setState({ isShowMore: !0 });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e,
                        t,
                        i,
                        n,
                        o,
                        a,
                        c = this,
                        s = (this.props.ticketInfo || {})
                          .ticketFetchAndCheckInfo,
                        r = [];
                      null != s &&
                        s.showTripInfo &&
                        (r = [].concat(
                          (0, ce.Z)(r),
                          (0, ce.Z)(this.ticketFetchAndCheckInfoCodes)
                        )),
                        (r = [].concat(
                          (0, ce.Z)(r),
                          (0, ce.Z)(this.ticketInfoCodes)
                        ));
                      var l = this.state.isShowMore,
                        d = !(
                          null === (e = this.props.ticketInfo) ||
                          void 0 === e ||
                          null === (t = e.ticketFetchAndCheckInfo) ||
                          void 0 === t ||
                          null === (i = t.ticketItemList) ||
                          void 0 === i ||
                          null ===
                            (n = i.filter(function (e) {
                              return e.checkTicketQrCode;
                            })) ||
                          void 0 === n ||
                          !n.length
                        ),
                        u = !(
                          null === (o = this.props.ticketInfo) ||
                          void 0 === o ||
                          null === (a = o.ticketFetchAndCheckInfo) ||
                          void 0 === a ||
                          !a.getTicketQrCode
                        ),
                        h = !d && !u,
                        m = l || h;
                      console.log("showmore", l, h);
                      var f = this.displayTicketCells.filter(function (e) {
                          var t;
                          return (
                            ((c.ticketFetchAndCheckInfoCodes.includes(e.key) &&
                              (null == s ? void 0 : s[e.key])) ||
                              (c.ticketInfoCodes.includes(e.key) &&
                                (null === (t = c.props.ticketInfo) ||
                                void 0 === t
                                  ? void 0
                                  : t[e.key]))) &&
                            r.includes(e.key)
                          );
                        }),
                        p = this.defaultDisplayKeys.filter(function (e) {
                          return f
                            .map(function (e) {
                              return e.key;
                            })
                            .includes(e);
                        }).length,
                        g = p > 0 ? p : 3;
                      return (
                        f.length > 0 &&
                        (0, D.tZ)(k.View, {
                          className: "bus-orderinfov2-ticket-info ".concat(
                            w.default.isTieyou ? "ty" : ""
                          ),
                          children: f
                            .slice(0, m ? f.length : g)
                            .map(function (e, t) {
                              return "servicePhone" !== e.key
                                ? (0, D.BX)(
                                    k.View,
                                    {
                                      className: "cell cell-item",
                                      children: [
                                        (0, D.tZ)(k.View, {
                                          className: "cell-name",
                                          children: e.name,
                                        }),
                                        (0, D.tZ)(k.View, {
                                          className: "cell-content",
                                          children: (0, D.tZ)(k.View, {
                                            className: "con",
                                            children:
                                              c.ticketInfoCodes.includes(e.key)
                                                ? c.props.ticketInfo[e.key]
                                                : s[e.key],
                                          }),
                                        }),
                                        t === g - 1 &&
                                          f.length > g &&
                                          !m &&
                                          (0, D.tZ)(k.View, {
                                            className: "showmore-btn",
                                            id: "AdEH",
                                            onClick: c.showMore.bind(c),
                                            children: "展开",
                                          }),
                                      ],
                                    },
                                    t
                                  )
                                : (0, D.BX)(k.View, {
                                    className: "service-tip cell-item",
                                    children: [
                                      (0, D.tZ)(k.Text, {
                                        className: "desc",
                                        children: "如有疑问，请联系 ",
                                      }),
                                      s.servicePhone
                                        .split(/[,\uff0c]/)
                                        .map(function (e, t) {
                                          return (0,
                                          D.BX)(k.Text, { className: "tel", id: "AdEI", onClick: c.toMakePhone.bind(c, e), children: [e, (0, D.tZ)(k.Text, { style: "color:#999999", children: s.servicePhone.split(/[,\uff0c]/).length !== t + 1 ? "," : "" })] }, "index");
                                        }),
                                    ],
                                  });
                            }),
                        })
                      );
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent),
            re = i(74921),
            le = ["code", "message"],
            de = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, r.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, m.Z)((0, d.Z)(n), "onSelectInsurance", function (e) {
                    var t = n.state.returnTicketDetail,
                      i = null == t ? void 0 : t.refundDetail;
                    null == i ||
                      i.forEach(function (t, i) {
                        i === e &&
                          (t.isSelect &&
                            (0, T.showToast)("保险未勾选退订，退票请退保"),
                          (t.isSelect = !t.isSelect));
                      }),
                      n.setState({
                        returnTicketDetail: (0, s.Z)(
                          (0, s.Z)({}, t),
                          {},
                          { refundDetail: i }
                        ),
                      });
                  }),
                  (0, m.Z)((0, d.Z)(n), "getRefundFee", function () {
                    var e = n.state.returnTicketDetail,
                      t = Number(null == e ? void 0 : e.refundFee),
                      i = null == e ? void 0 : e.refundDetail;
                    return (
                      null == i ||
                        i.forEach(function (e) {
                          e.isSelect || 2 !== e.type || (t -= e.price);
                        }),
                      1 * t.toFixed(2)
                    );
                  }),
                  (n.state = {
                    showLayer: !1,
                    ticketSelectedList: [],
                    returnTicketDetail: null,
                  }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                      JSON.stringify(t.ticketSelectedList) !==
                        JSON.stringify(this.state.ticketSelectedList) &&
                        this.doCountReturnTicketDetail();
                    },
                  },
                  {
                    key: "openLayer",
                    value: function () {
                      var e,
                        t,
                        i,
                        n,
                        o = !(
                          null ===
                            (e =
                              this.props.ticketInfo.ticketFetchAndCheckInfo) ||
                          void 0 === e ||
                          null === (t = e.ticketItemList) ||
                          void 0 === t ||
                          !t.filter(function (e) {
                            return e.supportRefundTicket;
                          }).length
                        );
                      this.setState({
                        showLayer: !0,
                        returnTicketDetail: null,
                        ticketSelectedList:
                          o &&
                          1 ===
                            (null ===
                              (i =
                                this.props.ticketInfo
                                  .ticketFetchAndCheckInfo) || void 0 === i
                              ? void 0
                              : i.ticketItemList.length)
                            ? null ===
                                (n =
                                  this.props.ticketInfo
                                    .ticketFetchAndCheckInfo) || void 0 === n
                              ? void 0
                              : n.ticketItemList.map(function (e) {
                                  return e.ticketIdx;
                                })
                            : [],
                      });
                    },
                  },
                  {
                    key: "closeLayer",
                    value: function () {
                      this.setState({
                        showLayer: !1,
                        returnTicketDetail: null,
                        ticketSelectedList: [],
                      });
                    },
                  },
                  {
                    key: "onSureRefundClick",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e() {
                          var t,
                            i,
                            n,
                            o,
                            c,
                            s,
                            r,
                            l,
                            d,
                            u,
                            h = this;
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      (null ===
                                        (t = (i = this.props).doBusTraceInfo) ||
                                        void 0 === t ||
                                        t.call(i, "returnIcon", "“退票”按钮"),
                                      (n = this.state),
                                      (o = n.ticketSelectedList),
                                      (c = n.returnTicketDetail),
                                      (s = this.props.orderInfo.orderNumber),
                                      o.length)
                                    ) {
                                      e.next = 6;
                                      break;
                                    }
                                    return (
                                      (0, T.showToast)(
                                        "请选择需要退票的乘客～"
                                      ),
                                      e.abrupt("return")
                                    );
                                  case 6:
                                    return (
                                      (e.prev = 6),
                                      (0, T.showLoading)("退票中..."),
                                      (e.next = 10),
                                      (0, K.VP)({
                                        orderNumber: String(s),
                                        ticketId: o.map(function (e) {
                                          return String(e);
                                        }),
                                        insuranceIdx:
                                          (null == c ||
                                          null === (r = c.refundDetail) ||
                                          void 0 === r ||
                                          null ===
                                            (l = r.filter(function (e) {
                                              return e.isSelect && 2 === e.type;
                                            })) ||
                                          void 0 === l ||
                                          null === (d = l[0]) ||
                                          void 0 === d
                                            ? void 0
                                            : d.insuranceIdx) || [],
                                      })
                                    );
                                  case 10:
                                    if (
                                      ((u = e.sent),
                                      (0, T.hideLoading)(),
                                      (0, T.showToast)(
                                        u.message ||
                                          (1 != u.code
                                            ? "网络错误，请稍后重试哦~"
                                            : "请求成功")
                                      ),
                                      1 === u.code)
                                    ) {
                                      e.next = 15;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 15:
                                    this.closeLayer(),
                                      (0, T.showLoading)(),
                                      setTimeout(function () {
                                        (0, T.hideLoading)(),
                                          h.props.onRefundSuccess &&
                                            h.props.onRefundSuccess();
                                      }, 1500),
                                      (e.next = 24);
                                    break;
                                  case 20:
                                    (e.prev = 20),
                                      (e.t0 = e.catch(6)),
                                      (0, T.hideLoading)(),
                                      (0, T.showToast)(
                                        "网络错误，请稍后重试哦~"
                                      );
                                  case 24:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[6, 20]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "doCountReturnTicketDetail",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e() {
                          var t, i, n, o, c;
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (this.state.ticketSelectedList.length) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt(
                                      "return",
                                      this.setState({
                                        returnTicketDetail: null,
                                      })
                                    );
                                  case 2:
                                    return (
                                      (e.prev = 2),
                                      (e.next = 5),
                                      (0, K.vl)({
                                        orderNumber: String(
                                          this.props.orderInfo.orderNumber
                                        ),
                                        ticketId:
                                          this.state.ticketSelectedList.map(
                                            function (e) {
                                              return String(e);
                                            }
                                          ),
                                      })
                                    );
                                  case 5:
                                    if (
                                      ((i = e.sent),
                                      (n = i.code),
                                      (o = i.message),
                                      (c = (0, re.Z)(i, le)),
                                      1 == n)
                                    ) {
                                      e.next = 10;
                                      break;
                                    }
                                    return (
                                      (0, T.showToast)(
                                        o || "网络错误，请稍后重试哦~"
                                      ),
                                      e.abrupt("return")
                                    );
                                  case 10:
                                    null == c ||
                                      null === (t = c.refundDetail) ||
                                      void 0 === t ||
                                      t.forEach(function (e) {
                                        2 === e.type && (e.isSelect = !0);
                                      }),
                                      this.setState({ returnTicketDetail: c }),
                                      (e.next = 18);
                                    break;
                                  case 14:
                                    (e.prev = 14),
                                      (e.t0 = e.catch(2)),
                                      (0, T.showToast)(
                                        "网络错误，请稍后重试哦~"
                                      ),
                                      this.setState({
                                        returnTicketDetail: null,
                                      });
                                  case 18:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[2, 14]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "onTicketClick",
                    value: function (e) {
                      if (e.supportRefundTicket) {
                        var t,
                          i,
                          n = this.props,
                          o = n.orderInfo,
                          a = n.ticketInfo,
                          c = this.state.ticketSelectedList,
                          s = c.includes(e.ticketIdx);
                        o.returnByTicket
                          ? this.setState({
                              ticketSelectedList: s
                                ? [].concat(
                                    (0, ce.Z)(
                                      c.slice(0, c.indexOf(e.ticketIdx))
                                    ),
                                    (0, ce.Z)(
                                      c.slice(c.indexOf(e.ticketIdx) + 1)
                                    )
                                  )
                                : [].concat((0, ce.Z)(c), [e.ticketIdx]),
                            })
                          : this.setState({
                              ticketSelectedList: s
                                ? []
                                : (null === (t = a.ticketFetchAndCheckInfo) ||
                                  void 0 === t ||
                                  null === (i = t.ticketItemList) ||
                                  void 0 === i
                                    ? void 0
                                    : i
                                        .filter(function (e) {
                                          return e.supportRefundTicket;
                                        })
                                        .map(function (e) {
                                          return e.ticketIdx;
                                        })) || [],
                            });
                      }
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e,
                        t,
                        i,
                        n,
                        o,
                        a,
                        c,
                        s,
                        r,
                        l = this,
                        d = this.props,
                        u = d.ticketInfo,
                        h = d.orderInfo,
                        m = this.state,
                        f = m.showLayer,
                        p = m.ticketSelectedList,
                        g = m.returnTicketDetail;
                      if (!u || !h) return null;
                      var v = !(
                          null === (e = u.ticketFetchAndCheckInfo) ||
                          void 0 === e ||
                          null === (t = e.ticketItemList) ||
                          void 0 === t ||
                          !t.filter(function (e) {
                            return e.supportRefundTicket;
                          }).length
                        ),
                        b = (
                          (null === (i = u.ticketFetchAndCheckInfo) ||
                          void 0 === i
                            ? void 0
                            : i.ticketItemList) || []
                        ).find(function (e) {
                          return !!e.refundTicketOverTimeNote;
                        }),
                        S = function (e) {
                          var t = e.isSelect;
                          return (0, D.tZ)(k.View, {
                            className: "refund-radio ".concat(
                              t ? "checked" : ""
                            ),
                          });
                        };
                      return (0, D.tZ)(B.ZtActivityPop, {
                        className:
                          "bus-OrderDetailv2-tickets-layer-component ".concat(
                            w.default.isTieyou ? "ty" : ""
                          ),
                        show: f,
                        animation: "comeup",
                        onWrapClose: this.closeLayer.bind(this),
                        children: (0, D.BX)(k.View, {
                          className:
                            "bus-OrderDetailv2-tickets-layer-content ".concat(
                              v ? "refund-layer" : ""
                            ),
                          children: [
                            (0, D.BX)(k.View, {
                              className: "layer-content-head",
                              catchMove: !0,
                              children: [
                                v ? "退票提醒" : "乘客信息",
                                (0, D.tZ)(k.Image, {
                                  src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/gbld@3x.png",
                                  mode: "aspectFit",
                                  className: "close-btn",
                                  id: "AdEJ",
                                  onClick: this.closeLayer.bind(this),
                                }),
                              ],
                            }),
                            (0, D.BX)(k.View, {
                              className: "scroll-content",
                              children: [
                                (0, D.BX)(k.View, {
                                  className:
                                    "ticketList-content layer-content-item",
                                  children: [
                                    v &&
                                      (0, D.BX)(k.View, {
                                        className: "content-head",
                                        children: [
                                          (0, D.tZ)(k.View, {
                                            className: "left-title",
                                            children: "选择需退票的乘客",
                                          }),
                                          !h.returnByTicket &&
                                            (null ===
                                              (n = u.ticketFetchAndCheckInfo) ||
                                            void 0 === n ||
                                            null === (o = n.ticketItemList) ||
                                            void 0 === o
                                              ? void 0
                                              : o.length) > 1 &&
                                            (0, D.tZ)(k.View, {
                                              className: "right-desc",
                                              children: "* 本单不支持分开退票",
                                            }),
                                        ],
                                      }),
                                    (0, D.tZ)(k.View, {
                                      className: "content-body",
                                      children:
                                        null ===
                                          (a = u.ticketFetchAndCheckInfo) ||
                                        void 0 === a ||
                                        null === (c = a.ticketItemList) ||
                                        void 0 === c
                                          ? void 0
                                          : c.map(function (e, t) {
                                              var i;
                                              return null ===
                                                (i = e.passengerList) ||
                                                void 0 === i
                                                ? void 0
                                                : i.map(function (i, n) {
                                                    return (0,
                                                    D.BX)(k.View, { className: "ticket-item", id: "AdEK", onClick: l.onTicketClick.bind(l, e), children: [(0, D.BX)(k.View, { className: "ticket-left", children: [(0, D.tZ)(k.Text, { className: "pass-name", children: i.name }), (0, D.tZ)(k.View, { className: "pass-ticket-type", children: e.ticketTypeName }), (0, D.tZ)(k.Text, { className: "pass-identityCode", children: i.identityCode })] }), (0, D.tZ)(k.View, { className: "ticket-right", children: e.supportRefundTicket ? (0, D.tZ)(k.View, { className: "ticket-refund-radio", children: (0, D.tZ)(S, { isSelect: p.includes(e.ticketIdx) }) }) : (0, D.BX)(k.View, { className: "ticket-state ".concat([3,
                                                                      7].includes(e.ticketState) ? "success" : ""), children: [[3,
                                                                      4, 6, 7, 8].includes(e.ticketState) && !b && (0, D.tZ)(k.View, { children: e.ticketStateDesc }), (0, D.tZ)(k.View, { className: "no-refund-reason ".concat(b ? "over-time" : ""), children: e.refundTicketRejectReason })] }) })] }, "".concat(t, "_").concat(n));
                                                  });
                                            }),
                                    }),
                                  ],
                                }),
                                b &&
                                  (0, D.tZ)(k.View, {
                                    className: "over-time-note",
                                    children:
                                      "*当前已过最晚退票时效，您可前往线下车站进行退票，最终以车站说明为准，建议提前电话联系车站具体情况",
                                  }),
                                !!g &&
                                  (0, D.BX)(k.View, {
                                    className:
                                      "feeDetail-content layer-content-item",
                                    children: [
                                      (0, D.tZ)(k.View, {
                                        className: "content-head",
                                        children: (0, D.tZ)(k.View, {
                                          className: "left-title",
                                          children: "费用说明",
                                        }),
                                      }),
                                      (0, D.BX)(k.View, {
                                        className: "content-body",
                                        children: [
                                          null == g ||
                                          null === (s = g.refundDetail) ||
                                          void 0 === s
                                            ? void 0
                                            : s.map(function (e, t) {
                                                return (0, D.BX)(
                                                  k.View,
                                                  {
                                                    className: "detail-item",
                                                    children: [
                                                      (0, D.BX)(k.View, {
                                                        className:
                                                          "flex-1 flex-align-items-center",
                                                        children: [
                                                          (0, D.tZ)(k.View, {
                                                            className: "name",
                                                            children: e.title,
                                                          }),
                                                          2 === e.type &&
                                                            !!e.subTitle &&
                                                            (0, D.tZ)(k.View, {
                                                              className:
                                                                "sub-title",
                                                              children:
                                                                e.subTitle,
                                                            }),
                                                        ],
                                                      }),
                                                      (0, D.BX)(k.View, {
                                                        className: "content",
                                                        children: [
                                                          e.mark,
                                                          "¥",
                                                          e.price,
                                                        ],
                                                      }),
                                                      2 === e.type &&
                                                        (0, D.tZ)(k.Image, {
                                                          id: "AdEL",
                                                          onClick: function () {
                                                            return l.onSelectInsurance(
                                                              t
                                                            );
                                                          },
                                                          src: e.isSelect
                                                            ? w.default.isTieyou
                                                              ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_selectedty@3x.png"
                                                              : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_selected@3x.png"
                                                            : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_unselected@3x.png",
                                                          className:
                                                            "select-icon",
                                                        }),
                                                    ],
                                                  },
                                                  t
                                                );
                                              }),
                                          (0, D.BX)(k.View, {
                                            className: "detail-item",
                                            children: [
                                              (0, D.tZ)(k.View, {
                                                className: "name flex-1",
                                                children: "预计退款金额",
                                              }),
                                              (0, D.tZ)(k.View, {
                                                className: "content price",
                                                children: this.getRefundFee(),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                null == g ||
                                null === (r = g.ticketReturnExplain) ||
                                void 0 === r
                                  ? void 0
                                  : r.map(function (e, t) {
                                      return (0,
                                      D.BX)(k.View, { className: "refund-note", children: ["* ", e] }, t);
                                    }),
                              ],
                            }),
                            v &&
                              (0, D.BX)(k.View, {
                                className: "refund-btn-group",
                                children: [
                                  (0, D.tZ)(k.View, {
                                    className: "btn-cancel btn-refund",
                                    id: "AdEM",
                                    onClick: this.closeLayer.bind(this),
                                    children: "取消",
                                  }),
                                  (0, D.tZ)(k.View, {
                                    className: "btn-sure btn-refund",
                                    id: "AdEN",
                                    onClick: this.onSureRefundClick.bind(this),
                                    children: "退票",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent),
            ue =
              (0, v.h)()(
                (Y = (function (e) {
                  (0, u.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, r.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, m.Z)((0, d.Z)(n), "$TicketsDetailModel", null),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "isBusOrder",
                        value: function () {
                          var e;
                          return (
                            1 ==
                            (null === (e = this.props.orderInfo) || void 0 === e
                              ? void 0
                              : e.productLineCode)
                          );
                        },
                      },
                      {
                        key: "isPointOrder",
                        value: function () {
                          var e;
                          return [3, 4, 5].includes(
                            null === (e = this.props.orderInfo) || void 0 === e
                              ? void 0
                              : e.productLineCode
                          );
                        },
                      },
                      {
                        key: "hasBackLine",
                        value: function () {
                          var e, t;
                          return !(
                            null === (e = this.props.orderInfo) ||
                            void 0 === e ||
                            null === (t = e.ticketInfo) ||
                            void 0 === t ||
                            !t.backTripInfo
                          );
                        },
                      },
                      {
                        key: "formatTimeline",
                        value: function (e) {
                          if (!e) return "";
                          var t = e.fromDate,
                            i = e.fromDateTimeDesc;
                          if (i) return i;
                          var n = Z()(t).diff(Z()().startOf("day"), "day"),
                            o = "";
                          if (0 === n) o = "今天";
                          else if (1 === n) o = "明天";
                          else if (2 === n) o = "后天";
                          else {
                            o = [
                              "周日",
                              "周一",
                              "周二",
                              "周三",
                              "周四",
                              "周五",
                              "周六",
                            ][Z()(t).day()];
                          }
                          return ""
                            .concat(Z()(t).format("M月D日 "))
                            .concat(o, " ")
                            .concat(Z()(t).format("HH:mm"), " 出发");
                        },
                      },
                      {
                        key: "goToMap",
                        value: function (e) {
                          var t, i, n, o;
                          if (
                            (console.log("click gotomap"),
                            !e ||
                              (null !== (t = this.props.orderInfo.ticketInfo) &&
                                void 0 !== t &&
                                t.backTripInfo))
                          ) {
                            null === (i = (n = this.props).doBusTrace) ||
                              void 0 === i ||
                              i.call(
                                n,
                                {
                                  bizKey: "map",
                                  comment: "车站地图",
                                  clickType: y.uh.confirmClick,
                                },
                                2
                              );
                            var a = e
                              ? null ===
                                  (o = this.props.orderInfo.ticketInfo) ||
                                void 0 === o
                                ? void 0
                                : o.backTripInfo
                              : this.props.orderInfo.ticketInfo;
                            this.navigateTo({
                              url: "/pages/bus/map/map?productLine=".concat(
                                this.props.orderInfo.productLineCode
                              ),
                              data: {
                                fromStationInfo: {
                                  aMapX: a.amapFromStationLat,
                                  aMapY: a.amapFromStationLng,
                                  name: a.fromStation,
                                  address: a.fromStationAddress,
                                },
                                toStationInfo: {
                                  aMapX: a.amapToStationLat,
                                  aMapY: a.amapToStationLng,
                                  name: a.toStation,
                                  address: a.toStationAddress,
                                },
                              },
                            });
                          }
                        },
                      },
                      {
                        key: "awakenTicketsDetailModal",
                        value: function () {
                          this.$TicketsDetailModel &&
                            this.$TicketsDetailModel.openLayer();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            i = this,
                            n = w.default.isTieyou,
                            o = this.props,
                            a = o.onToggleNoticeModal,
                            c = void 0 === a ? function () {} : a,
                            s = o.handleTransferStationVisibleCtrl,
                            r = void 0 === s ? function () {} : s,
                            l = o.ctrl,
                            d = l.isHidePassengerInfo,
                            u = l.isHideStationMapInfo,
                            h = l.isSupportPassInfoInPassengerCard,
                            m = l.isHideRefundPolicy,
                            f = l.isShowRefundTipsOnScanSource,
                            p = o.orderInfo.ticketInfo,
                            g = o.onPreviewImage,
                            v = o.doBusTraceInfo,
                            b = o.onRefundSuccessCb,
                            S = o.isShowHoldingSeatTips,
                            y = function (e) {
                              var t = (e || {}).isBackTrip,
                                o = void 0 !== t && t;
                              return u
                                ? null
                                : (0, D.BX)(k.View, {
                                    className: "map-btn",
                                    id: "AdEA",
                                    onClick: i.goToMap.bind(i, o),
                                    children: [
                                      (0, D.tZ)(k.Image, {
                                        className: "map-btn-icon",
                                        mode: "aspectFit",
                                        src: n
                                          ? "https://pages.c-ctrip.com/bus-images/zhixing/icon/dttbty@3x.png"
                                          : "https://pages.c-ctrip.com/bus-images/zhixing/icon/dttb@3x.png",
                                      }),
                                      (0, D.tZ)(k.Text, { children: "地图" }),
                                    ],
                                  });
                            };
                          return (0, D.BX)(k.View, {
                            className: "bus-orderinfov2-component "
                              .concat(n ? "ty" : "", " ")
                              .concat(S ? "mt72" : ""),
                            children: [
                              (0, D.BX)(k.View, {
                                className: "orderinfov2-head-content",
                                children: [
                                  (0, D.BX)(k.View, {
                                    className: "left time-info",
                                    children: [
                                      (null == p ||
                                      null === (e = p.busTags) ||
                                      void 0 === e
                                        ? void 0
                                        : e.length) > 0 &&
                                        (0, D.tZ)(
                                          k.View,
                                          {
                                            className: "tag ".concat(
                                              w.default.isTieyou ? "ty" : "zx"
                                            ),
                                            children:
                                              null == p ||
                                              null === (t = p.busTags) ||
                                              void 0 === t
                                                ? void 0
                                                : t
                                                    .map(function (e) {
                                                      return "往返票" === e
                                                        ? "去程"
                                                        : e;
                                                    })
                                                    .join("/"),
                                          },
                                          "index"
                                        ),
                                      (0, D.tZ)(k.Text, {
                                        children: this.formatTimeline(p),
                                      }),
                                    ],
                                  }),
                                  (0, D.BX)(k.View, {
                                    className: "right",
                                    children: [
                                      !m &&
                                        (0, D.tZ)(k.View, {
                                          className: "refund-policy-btn link",
                                          id: "AdEB",
                                          onClick: c,
                                          children: "退改政策",
                                        }),
                                      f &&
                                        (0, D.tZ)(k.View, {
                                          className: "refund-policy-btn",
                                          children: "退票请至车站窗口柜台办理",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, D.BX)(k.View, {
                                className: "orderinfov2-line-info",
                                children: [
                                  this.isBusOrder() &&
                                    (0, D.BX)(k.View, {
                                      className:
                                        "orderinfov2-line-info orderinfov2-bus-line-info",
                                      children: [
                                        (0, D.tZ)(k.View, {
                                          className: "left",
                                          children: (0, D.tZ)(k.View, {
                                            className: "line-info",
                                            children: (0, D.BX)(k.View, {
                                              className: "station-content",
                                              children: [
                                                (0, D.tZ)(k.View, {
                                                  className: "from-station",
                                                  children: p.fromStation,
                                                }),
                                                (0, D.tZ)(k.View, {
                                                  className: "to-station",
                                                  children: p.toStation,
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                        (0, D.tZ)(k.Block, {
                                          children:
                                            !w.default.isH5Hzbm &&
                                            (0, D.tZ)(k.View, {
                                              className: "right",
                                              children: y(),
                                            }),
                                        }),
                                      ],
                                    }),
                                  this.isPointOrder() &&
                                    (0, D.BX)(k.View, {
                                      className:
                                        "orderinfov2-line-info orderinfov2-point-line-info",
                                      children: [
                                        (0, D.tZ)(k.View, {
                                          className: "time-info",
                                          children: (0, D.BX)(k.View, {
                                            className: "time-content",
                                            children: [
                                              (0, D.tZ)(k.View, {
                                                className: "from-time",
                                                children: p.fromTime,
                                              }),
                                              (0, D.tZ)(k.View, {
                                                className: "to-time",
                                                children: p.toTime,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, D.tZ)(k.View, {
                                          className: "left",
                                          children: (0, D.tZ)(k.View, {
                                            className: "line-info",
                                            children: (0, D.BX)(k.View, {
                                              className: "station-content",
                                              children: [
                                                (0, D.BX)(k.View, {
                                                  className: "from-station",
                                                  children: [
                                                    (0, D.tZ)(k.View, {
                                                      children: p.fromStation,
                                                    }),
                                                    (0, D.tZ)(k.View, {
                                                      className:
                                                        "station-address",
                                                      children:
                                                        p.fromStationAddress,
                                                    }),
                                                  ],
                                                }),
                                                p.transferStation &&
                                                  (0, D.tZ)(k.View, {
                                                    className:
                                                      "transfer-station",
                                                    id: "AdEC",
                                                    onClick: function () {
                                                      r(!0);
                                                    },
                                                    children: p.transferStation,
                                                  }),
                                                (0, D.BX)(k.View, {
                                                  className: "to-station",
                                                  children: [
                                                    (0, D.tZ)(k.View, {
                                                      children: p.toStation,
                                                    }),
                                                    (0, D.tZ)(k.View, {
                                                      className:
                                                        "station-address",
                                                      children:
                                                        p.toStationAddress,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                        (0, D.tZ)(k.View, {
                                          className: "right",
                                          children: y(),
                                        }),
                                      ],
                                    }),
                                  this.hasBackLine() &&
                                    (0, D.BX)(k.Block, {
                                      children: [
                                        (0, D.tZ)(k.View, {
                                          className:
                                            "orderinfov2-head-content orderinfov2-backTrip-head-content",
                                          children: (0, D.BX)(k.View, {
                                            className: "left time-info",
                                            children: [
                                              (0, D.tZ)(k.View, {
                                                className: "tag ".concat(
                                                  w.default.isTieyou
                                                    ? "ty"
                                                    : "zx"
                                                ),
                                                children: "返程",
                                              }),
                                              (0, D.tZ)(k.Text, {
                                                children:
                                                  p.backTripInfo
                                                    .fromDateTimeDesc,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, D.BX)(k.View, {
                                          className:
                                            "orderinfov2-line-info orderinfov2-back-line-info",
                                          children: [
                                            (p.backTripInfo.fromTime ||
                                              p.backTripInfo.toTime) &&
                                              (0, D.tZ)(k.View, {
                                                className: "time-info",
                                                children: (0, D.BX)(k.View, {
                                                  className: "time-content",
                                                  children: [
                                                    (0, D.tZ)(k.View, {
                                                      className: "from-time",
                                                      children:
                                                        p.backTripInfo.fromTime,
                                                    }),
                                                    (0, D.tZ)(k.View, {
                                                      className: "to-time",
                                                      children:
                                                        p.backTripInfo.toTime,
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            (0, D.tZ)(k.View, {
                                              className: "left",
                                              children: (0, D.tZ)(k.View, {
                                                className: "line-info",
                                                children: (0, D.BX)(k.View, {
                                                  className: "station-content",
                                                  children: [
                                                    (0, D.BX)(k.View, {
                                                      className: "from-station",
                                                      children: [
                                                        (0, D.tZ)(k.View, {
                                                          children:
                                                            p.backTripInfo
                                                              .fromStation,
                                                        }),
                                                        (0, D.tZ)(k.View, {
                                                          className:
                                                            "station-address",
                                                          children:
                                                            p.backTripInfo
                                                              .fromStationAddress,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, D.BX)(k.View, {
                                                      className: "to-station",
                                                      children: [
                                                        (0, D.tZ)(k.View, {
                                                          children:
                                                            p.backTripInfo
                                                              .toStation,
                                                        }),
                                                        (0, D.tZ)(k.View, {
                                                          className:
                                                            "station-address",
                                                          children:
                                                            p.backTripInfo
                                                              .toStationAddress,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, D.tZ)(k.View, {
                                              className: "right",
                                              children: y({ isBackTrip: !0 }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, D.tZ)(se, { ticketInfo: p }),
                              !d &&
                                (0, D.tZ)(oe, {
                                  orderInfo: this.props.orderInfo,
                                  isSupportPassInfoInPassengerCard: h,
                                  awakenTicketsDetailModal:
                                    this.awakenTicketsDetailModal,
                                  doBusTraceInfo: v,
                                }),
                              (0, D.tZ)(ae, {
                                ticketInfo: p,
                                onPreviewImage: g,
                              }),
                              (0, D.tZ)(de, {
                                ref: function (e) {
                                  return (i.$TicketsDetailModel = e);
                                },
                                orderInfo: this.props.orderInfo,
                                ticketInfo: p,
                                onRefundSuccess: b,
                                doBusTraceInfo: v,
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(f.default.PureComponent))
              ) || Y,
            he = i(90129),
            me = i(25949),
            fe = i.n(me),
            pe = i(5050),
            ge = "网络错误，请稍后重试~",
            ke = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, r.Z)(this, i),
                  ((n = t.call(this, e)).state = {
                    isShowModal: null,
                    indexCouponList: [],
                    isAllReceived: !1,
                    couponTitleInfo: null,
                    hasShown: !1,
                  }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                      var i, n;
                      (t.isShowModal && e.allowedShow) != this.isShow() &&
                        this.isShow() &&
                        (this.isFromBookScene()
                          ? this.doTrace(
                              {
                                typeSnd: "order_detail_first_coupon_page_show",
                                comment:
                                  "第一次弹窗订单详情页优惠卷领取页面曝光",
                              },
                              0
                            )
                          : this.doTrace(
                              {
                                typeSnd:
                                  "order_detail_secondary_coupon_page_show",
                                comment:
                                  "第二次弹窗订单详情页优惠卷领取页面曝光",
                              },
                              0
                            )),
                        t.isShowModal !== this.state.isShowModal &&
                          (null === (i = (n = this.props).onMCVisibleChange) ||
                            void 0 === i ||
                            i.call(n, this.state.isShowModal));
                    },
                  },
                  {
                    key: "isShow",
                    value: function () {
                      return this.state.isShowModal && this.props.allowedShow;
                    },
                  },
                  {
                    key: "isFromBookScene",
                    value: function () {
                      return this.props.isFromBookScene;
                    },
                  },
                  {
                    key: "isFromOrderListScene",
                    value: function () {
                      return !this.isFromBookScene();
                    },
                  },
                  {
                    key: "handleJudgeVsibleInfo",
                    value: function () {
                      this.state.hasShown || this.getCouponListPromise();
                    },
                  },
                  {
                    key: "onClickToUse",
                    value: function (e) {
                      var t = e.goUseUrl;
                      10 == e.type
                        ? this.doTrace({
                            typeSnd:
                              "orderdetail_acceleration_banner_apply_click",
                            comment: "第二次弹窗".concat(
                              pe.Z.SPEED_PACK,
                              "点击【去使用】"
                            ),
                          })
                        : this.doTrace({
                            typeSnd: "order_detail_use_coupon_button_click",
                            comment:
                              "第二次弹窗订单详情页单独使用优惠券按钮点击",
                            coupon_price: e.price,
                            coupon_prdline: this.getCouponTypeBIName(e),
                          }),
                        t && g().reLaunch({ url: t });
                    },
                  },
                  {
                    key: "doTrace",
                    value: function () {
                      var e;
                      this.props.doBusTraceInfo &&
                        (e = this.props).doBusTraceInfo.apply(e, arguments);
                    },
                  },
                  {
                    key: "onClickReceiveAll",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e() {
                          var t, i, n, o;
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      this.doTrace({
                                        typeSnd:
                                          "order_detail_get_all_coupon_button_click",
                                        comment:
                                          "第一次弹窗订单详情页一键领取按钮点击",
                                      }),
                                      (0, T.showLoading)(),
                                      (n =
                                        null ===
                                          (t = this.state.indexCouponList) ||
                                        void 0 === t
                                          ? void 0
                                          : t.filter(function (e) {
                                              return 10 != e.type;
                                            })),
                                      (e.next = 5),
                                      this.receiveCouponPromise({
                                        indexCouponList: n,
                                      })
                                    );
                                  case 5:
                                    (o = e.sent),
                                      (0, T.hideLoading)(),
                                      (0, T.showToast)(
                                        (null === (i = o.data) || void 0 === i
                                          ? void 0
                                          : i.toastTips) ||
                                          (1 !== o.code ? ge : "领取成功")
                                      ),
                                      this.hideModal();
                                  case 9:
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
                    key: "getCouponTypeBIName",
                    value: function (e) {
                      switch (e.couponType) {
                        case 600:
                          return "bus";
                        case 1300:
                          return "pointbus";
                        case 300:
                          return "htl";
                        case 200:
                          return "flt";
                        case 100:
                          return "trn";
                        case 700:
                          return "ship";
                        default:
                          return "";
                      }
                    },
                  },
                  {
                    key: "onClickReceiveOne",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e(t) {
                          var i, n;
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      this.doTrace({
                                        typeSnd:
                                          "order_detail_get_coupon_button_click",
                                        comment:
                                          "第二次弹窗订单详情页单独领取优惠券按钮点击",
                                        coupon_price: t.price,
                                        coupon_prdline:
                                          this.getCouponTypeBIName(t),
                                      }),
                                      (0, T.showLoading)(),
                                      (e.next = 4),
                                      this.receiveCouponPromise({
                                        indexCouponList: [t],
                                      })
                                    );
                                  case 4:
                                    return (
                                      (n = e.sent),
                                      (e.next = 7),
                                      this.getCouponListPromise(!0)
                                    );
                                  case 7:
                                    (0, T.hideLoading)(),
                                      (0, T.showToast)(
                                        (null === (i = n.data) || void 0 === i
                                          ? void 0
                                          : i.toastTips) ||
                                          (1 !== n.code ? ge : "领取成功")
                                      );
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "receiveCouponPromise",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e(t) {
                          var i, n;
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (i = t.indexCouponList),
                                      (e.prev = 1),
                                      (e.next = 4),
                                      (0, K.gj)({
                                        indexCouponList: i,
                                        fromPage: "orderDetailWin",
                                      })
                                    );
                                  case 4:
                                    return (n = e.sent), e.abrupt("return", n);
                                  case 8:
                                    (e.prev = 8), (e.t0 = e.catch(1));
                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[1, 8]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "getCouponListPromise",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e() {
                          var t,
                            i,
                            n,
                            o,
                            c,
                            s,
                            r,
                            l,
                            d,
                            u,
                            h,
                            m,
                            f,
                            p = arguments;
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((t =
                                        p.length > 0 &&
                                        void 0 !== p[0] &&
                                        p[0]),
                                      (i = this.props),
                                      (n = i.orderNumber),
                                      (o = i.productLineName),
                                      (c = i.isSupport),
                                      (e.prev = 2),
                                      c)
                                    ) {
                                      e.next = 5;
                                      break;
                                    }
                                    throw new Error("环境不支持~");
                                  case 5:
                                    return (
                                      (e.next = 7),
                                      (0, K.D)({
                                        orderNumber: n,
                                        previousPage: t
                                          ? "receiveCoupon"
                                          : this.isFromBookScene()
                                          ? "pay"
                                          : "order",
                                        openId: S.ZP.openid,
                                        productLineName: o,
                                        fromPage: "orderDetailWin",
                                      })
                                    );
                                  case 7:
                                    if (1 === (f = e.sent).code) {
                                      e.next = 10;
                                      break;
                                    }
                                    throw new Error("req fail");
                                  case 10:
                                    this.setState({
                                      indexCouponList:
                                        (null === (s = f.data) || void 0 === s
                                          ? void 0
                                          : s.indexCouponList) || [],
                                      isShowModal:
                                        (null === (r = f.data) ||
                                        void 0 === r ||
                                        null === (l = r.indexCouponList) ||
                                        void 0 === l
                                          ? void 0
                                          : l.length) > 0,
                                      couponTitleInfo:
                                        null === (d = f.data) || void 0 === d
                                          ? void 0
                                          : d.couponTitle,
                                      isAllReceived:
                                        null === (u = f.data) || void 0 === u
                                          ? void 0
                                          : u.isReceive,
                                      hasShown:
                                        this.isFromBookScene() &&
                                        (null === (h = f.data) ||
                                        void 0 === h ||
                                        null === (m = h.indexCouponList) ||
                                        void 0 === m
                                          ? void 0
                                          : m.length) > 0,
                                    }),
                                      (e.next = 16);
                                    break;
                                  case 13:
                                    (e.prev = 13),
                                      (e.t0 = e.catch(2)),
                                      this.setState({
                                        indexCouponList: [],
                                        isShowModal: !1,
                                      });
                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[2, 13]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "hideModal",
                    value: function () {
                      this.setState({ isShowModal: !1 });
                    },
                  },
                  {
                    key: "handleIknow",
                    value: function () {
                      this.doTrace({
                        typeSnd: "order_detail_know_button_click",
                        comment: "第一次弹窗订单详情页知道了按钮点击",
                      }),
                        this.hideModal();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state,
                        i = t.indexCouponList,
                        n = t.couponTitleInfo,
                        o = t.isAllReceived,
                        a = fe()(
                          (0, m.Z)(
                            { "with-btn": this.isFromBookScene() },
                            "with-coupons-".concat(
                              i.length >= 3 ? 3 : i.length
                            ),
                            !0
                          )
                        ),
                        c = (null == n ? void 0 : n.split("&&")) || [],
                        s = (0, he.Z)(c, 2),
                        r = s[0],
                        l = void 0 === r ? "" : r,
                        d = s[1],
                        u = void 0 === d ? "  " : d,
                        h = l.split("||"),
                        f = (0, he.Z)(h, 2),
                        p = f[0],
                        g = f[1];
                      return (
                        i.length > 0 &&
                        (0, D.tZ)(B.ZtActivityPop, {
                          className: "bus-orderDetail-couponList-modal",
                          show: this.isShow(),
                          onClose: this.hideModal.bind(this),
                          animation: "comeup",
                          isShowClose: !1,
                          children: (0, D.BX)(k.View, {
                            className: "bus-orderDetail-modal-content ".concat(
                              a
                            ),
                            children: [
                              (0, D.BX)(k.View, {
                                className: "content-head",
                                catchMove: !0,
                                children: [
                                  l &&
                                    (0, D.BX)(k.View, {
                                      className: "title",
                                      children: [
                                        p &&
                                          (0, D.tZ)(k.View, {
                                            className: "price",
                                            children: p,
                                          }),
                                        g &&
                                          (0, D.tZ)(k.Image, {
                                            mode: "aspectFit",
                                            src: g,
                                            className: "title-img",
                                          }),
                                      ],
                                    }),
                                  u &&
                                    (0, D.tZ)(k.View, {
                                      className: "desc",
                                      children: u,
                                    }),
                                ],
                              }),
                              (0, D.BX)(k.View, {
                                className: "content-body",
                                children: [
                                  (0, D.tZ)(k.ScrollView, {
                                    scrollY: !0,
                                    className: "scroll-content",
                                    children: i.map(function (t, i) {
                                      return (0,
                                      D.BX)(k.View, { className: fe()({ "coupon-card": !0, "coupon-card-tag": 10 != t.type, received: 1 == t.tag, qc: 600 === t.couponType || 1300 === t.couponType, htl: 300 === t.couponType, flt: 200 === t.couponType, ship: 700 === t.couponType, trn: 100 === t.couponType || 10 == t.type }), children: [(0, D.tZ)(k.View, { className: "left price", children: t.price }), (0, D.BX)(k.View, { className: "right", children: [(0, D.BX)(k.View, { className: "info", children: [(0, D.tZ)(k.View, { className: "name", children: t.promotionTitle }), (0, D.tZ)(k.View, { className: "desc", children: t.promotionDes })] }), !e.isFromBookScene() && (0, D.tZ)(k.View, { className: "handle", children: 1 != t.tag && 10 != t.type ? (0, D.tZ)(k.View, { className: "btn btn-receive", id: "AdDp", onClick: e.onClickReceiveOne.bind(e, t), children: "领取" }) : (0, D.tZ)(k.View, { className: "btn btn-touse", id: "AdDq", onClick: e.onClickToUse.bind(e, t), children: "去使用" }) })] })] }, i);
                                    }),
                                  }),
                                  !this.isFromBookScene() &&
                                    (0, D.tZ)(k.View, {
                                      className: "tip",
                                      children:
                                        "* 优惠券领取后可前往优惠券列表查看~",
                                    }),
                                  this.isFromBookScene() &&
                                    (0, D.tZ)(k.Block, {
                                      children: o
                                        ? (0, D.tZ)(k.View, {
                                            className: "btn-receive-once",
                                            id: "AdDs",
                                            onClick:
                                              this.handleIknow.bind(this),
                                            children: "好的~",
                                          })
                                        : (0, D.tZ)(k.View, {
                                            className: "btn-receive-once",
                                            id: "AdDr",
                                            onClick:
                                              this.onClickReceiveAll.bind(this),
                                            children: "一键领取",
                                          }),
                                    }),
                                ],
                              }),
                              (0, D.tZ)(k.View, {
                                className: "icon-close-btn",
                                id: "AdDt",
                                onClick: this.hideModal.bind(this),
                                catchMove: !0,
                              }),
                            ],
                          }),
                        })
                      );
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent),
            ve = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, r.Z)(this, i),
                  ((n = t.call(this, e)).state = {
                    isShowModal: null,
                    crossRecommendDatas: [],
                  }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.getCrossRecommendPromise();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                      var i, n;
                      t.isShowModal !== this.state.isShowModal &&
                        (null === (i = (n = this.props).onMCVisibleChange) ||
                          void 0 === i ||
                          i.call(n, this.state.isShowModal)),
                        (t.isShowModal && e.allowedShow) !== this.isShow() &&
                          this.isShow() &&
                          this.doTrace(
                            {
                              typeSnd: "order_detail_x_flt_htl_show",
                              comment: "订单详情页机酒交叉曝光",
                              pop_type: this.isSingleMode() ? 1 : 2,
                            },
                            0
                          );
                    },
                  },
                  {
                    key: "isShow",
                    value: function () {
                      return this.state.isShowModal && this.props.allowedShow;
                    },
                  },
                  {
                    key: "isSingleMode",
                    value: function () {
                      return 1 === this.state.crossRecommendDatas.length;
                    },
                  },
                  {
                    key: "doTrace",
                    value: function () {
                      var e;
                      this.props.doBusTraceInfo &&
                        (e = this.props).doBusTraceInfo.apply(e, arguments);
                    },
                  },
                  {
                    key: "getCrossRecommendPromise",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e() {
                          var t, i, n, o, c, s, r, l, d;
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!this.props.isFromBookScene) {
                                      e.next = 3;
                                      break;
                                    }
                                    return (
                                      this.setState({
                                        crossRecommendDatas: [],
                                        isShowModal: !1,
                                      }),
                                      e.abrupt("return")
                                    );
                                  case 3:
                                    return (
                                      (e.prev = 3),
                                      (e.next = 6),
                                      (0, K.kz)({
                                        orderNumber: this.props.orderNumber,
                                      })
                                    );
                                  case 6:
                                    (d = e.sent),
                                      this.setState({
                                        crossRecommendDatas:
                                          (null === (t = d.data) || void 0 === t
                                            ? void 0
                                            : t.crossRecommendVos) || [],
                                        isShowModal:
                                          (null === (i = d.data) ||
                                          void 0 === i ||
                                          null === (n = i.crossRecommendVos) ||
                                          void 0 === n
                                            ? void 0
                                            : n.length) > 0 &&
                                          !(
                                            1 ===
                                              (null === (o = d.data) ||
                                              void 0 === o ||
                                              null ===
                                                (c = o.crossRecommendVos) ||
                                              void 0 === c
                                                ? void 0
                                                : c.length) &&
                                            1 ===
                                              (null === (s = d.data) ||
                                              void 0 === s ||
                                              null ===
                                                (r = s.crossRecommendVos) ||
                                              void 0 === r ||
                                              null === (l = r[0]) ||
                                              void 0 === l
                                                ? void 0
                                                : l.type)
                                          ),
                                      }),
                                      (e.next = 13);
                                    break;
                                  case 10:
                                    (e.prev = 10),
                                      (e.t0 = e.catch(3)),
                                      this.setState({
                                        crossRecommendDatas: [],
                                        isShowModal: !1,
                                      });
                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[3, 10]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "goUrl",
                    value: function (e) {
                      var t = e.nextUrl,
                        i = e.type;
                      this.doTrace({
                        typeSnd:
                          1 === i
                            ? "order_detail_x_flt_button_click"
                            : "order_detail_x_htl_button_click",
                        comment:
                          1 === i
                            ? "订单详情页机票交叉按钮点击"
                            : "订单详情页酒店交叉按钮点击",
                        pop_type: this.isSingleMode() ? 1 : 2,
                      }),
                        t
                          ? g().reLaunch({ url: t })
                          : (0, T.showToast)("链接不存在~");
                    },
                  },
                  {
                    key: "onCloseClick",
                    value: function () {
                      this.setState({ isShowModal: !1 });
                    },
                  },
                  {
                    key: "textToEllipsis",
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "",
                        t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 5,
                        i =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 4;
                      return e.length > t ? "".concat(e.slice(0, i), "...") : e;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state.crossRecommendDatas,
                        i = this.props,
                        n = i.fromCity,
                        o = i.toCity,
                        a = this.isSingleMode(),
                        c = t[0];
                      return (0, D.tZ)(B.ZtActivityPop, {
                        className: "bus-FlightHotelCrossModal",
                        isShowClose: !1,
                        animation: "comeup",
                        show: this.isShow(),
                        children: (0, D.BX)(k.View, {
                          className: "bus-FlightHotelCrossModal-view",
                          children: [
                            (0, D.BX)(k.View, {
                              className: "modal-head",
                              children: [
                                (0, D.tZ)(k.Text, { children: "猜你喜欢" }),
                                (0, D.tZ)(k.Image, {
                                  src: "https://pages.c-ctrip.com/bus-images/zhixing/Popup/icon_gban@3x.png",
                                  className: "close-icon",
                                  mode: "aspectFit",
                                  id: "AdEO",
                                  onClick: this.onCloseClick.bind(this),
                                }),
                              ],
                            }),
                            (0, D.BX)(k.View, {
                              className: "modal-body",
                              children: [
                                !a &&
                                  (0, D.tZ)(k.View, {
                                    className: "double-card-view",
                                    children: t.map(function (t, i) {
                                      return 2 !== t.type
                                        ? (0, D.BX)(
                                            k.View,
                                            {
                                              className:
                                                "productline-double-card flight",
                                              children: [
                                                (0, D.BX)(k.View, {
                                                  className: "card-head",
                                                  children: [
                                                    (0, D.tZ)(k.Image, {
                                                      src: "https://pages.c-ctrip.com/bus-images/zhixing/Popup/icon_fj@3x.png",
                                                      className: "title-icon",
                                                      mode: "aspectFit",
                                                    }),
                                                    (0, D.tZ)(k.Image, {
                                                      src: "https://pages.c-ctrip.com/bus-images/zhixing/Popup/icon_tjjp@3x.png",
                                                      className: "title-text",
                                                      mode: "aspectFit",
                                                    }),
                                                  ],
                                                }),
                                                (0, D.BX)(k.View, {
                                                  className: "card-body",
                                                  children: [
                                                    (0, D.BX)(k.View, {
                                                      className:
                                                        "card-flight-content card-product-content",
                                                      children: [
                                                        (0, D.tZ)(k.View, {
                                                          className:
                                                            "from-city",
                                                          children:
                                                            e.textToEllipsis(n),
                                                        }),
                                                        (0, D.tZ)(k.Image, {
                                                          src: "https://pages.c-ctrip.com/bus-images/zhixing/Popup/icon_jtn@3x.png",
                                                          className: "arr-icon",
                                                          mode: "aspectFit",
                                                        }),
                                                        (0, D.tZ)(k.View, {
                                                          className: "to-city",
                                                          children: "全国",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, D.tZ)(k.View, {
                                                      className: "sub-title",
                                                      children: (0, D.tZ)(
                                                        k.View,
                                                        {
                                                          dangerouslySetInnerHTML:
                                                            {
                                                              __html:
                                                                t.subtitle,
                                                            },
                                                        }
                                                      ),
                                                    }),
                                                    (0, D.tZ)(k.View, {
                                                      className: "btn-go-url",
                                                      id: "AdEP",
                                                      onClick: e.goUrl.bind(
                                                        e,
                                                        t
                                                      ),
                                                      children: "去看看",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            i
                                          )
                                        : (0, D.BX)(
                                            k.View,
                                            {
                                              className:
                                                "productline-double-card hotel",
                                              children: [
                                                (0, D.BX)(k.View, {
                                                  className: "card-head",
                                                  children: [
                                                    (0, D.tZ)(k.Image, {
                                                      src: "https://pages.c-ctrip.com/bus-images/zhixing/Popup/icon_hotel@3x.png",
                                                      className: "title-icon",
                                                      mode: "aspectFit",
                                                    }),
                                                    (0, D.tZ)(k.Image, {
                                                      src: "https://pages.c-ctrip.com/bus-images/zhixing/Popup/icon_tjjd@3x.png",
                                                      className: "title-text",
                                                      mode: "aspectFit",
                                                    }),
                                                  ],
                                                }),
                                                (0, D.BX)(k.View, {
                                                  className: "card-body",
                                                  children: [
                                                    (0, D.tZ)(k.View, {
                                                      className:
                                                        "card-hotel-content card-product-content",
                                                      children: (0, D.tZ)(
                                                        k.View,
                                                        {
                                                          dangerouslySetInnerHTML:
                                                            {
                                                              __html: ""
                                                                .concat(
                                                                  e.textToEllipsis(
                                                                    o,
                                                                    4,
                                                                    3
                                                                  )
                                                                )
                                                                .concat(
                                                                  t.title
                                                                ),
                                                            },
                                                        }
                                                      ),
                                                    }),
                                                    (0, D.tZ)(k.View, {
                                                      className: "sub-title",
                                                      children: (0, D.tZ)(
                                                        k.View,
                                                        {
                                                          dangerouslySetInnerHTML:
                                                            {
                                                              __html:
                                                                t.subtitle,
                                                            },
                                                        }
                                                      ),
                                                    }),
                                                    (0, D.tZ)(k.View, {
                                                      className: "btn-go-url",
                                                      id: "AdEQ",
                                                      onClick: e.goUrl.bind(
                                                        e,
                                                        t
                                                      ),
                                                      children: "去看看",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            i
                                          );
                                    }),
                                  }),
                                a &&
                                  (0, D.BX)(k.Block, {
                                    children: [
                                      (0, D.BX)(k.View, {
                                        className: "productline-single-card",
                                        children: [
                                          (0, D.BX)(k.View, {
                                            className: "card-head",
                                            children: [
                                              (0, D.tZ)(k.Image, {
                                                src: "https://pages.c-ctrip.com/bus-images/zhixing/Popup/icon_TB@3x.png",
                                                className: "title-icon",
                                                mode: "aspectFit",
                                              }),
                                              (0, D.tZ)(k.View, {
                                                className: "card-head-text",
                                                dangerouslySetInnerHTML: {
                                                  __html: c.productTag,
                                                },
                                              }),
                                            ],
                                          }),
                                          (0, D.BX)(k.View, {
                                            className: "card-body",
                                            children: [
                                              (0, D.tZ)(k.View, {
                                                className: "price-content",
                                                children: c.price,
                                              }),
                                              (0, D.tZ)(k.View, {
                                                className: "dashed-line",
                                              }),
                                              (0, D.BX)(k.View, {
                                                className: "product-content",
                                                children: [
                                                  (0, D.tZ)(k.View, {
                                                    className: "title",
                                                    children: c.productTitle,
                                                  }),
                                                  (0, D.tZ)(k.View, {
                                                    className: "desc",
                                                    children: c.productSubtitle,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, D.tZ)(k.View, {
                                        className: "btn-go-url2",
                                        id: "AdER",
                                        onClick: this.goUrl.bind(this, c),
                                        children: "去看看",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent),
            we = i(4102),
            be = { allianceid: 2000001, sid: 110003001 },
            Se = { allianceid: 10000060, sid: 10000001 },
            ye = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, r.Z)(this, i),
                  ((n = t.call(this, e)).state = { chooseDate: null }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.props.orderInfo.xcxBackLine &&
                        this.doTrace(
                          {
                            exposureType: "normal",
                            bizKey: "detail_return_module_show",
                            comment: "订单详情页-返程模块曝光",
                          },
                          1
                        );
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      !e.orderInfo.xcxBackLine &&
                        this.props.orderInfo.xcxBackLine &&
                        this.doTrace(
                          {
                            exposureType: "normal",
                            bizKey: "detail_return_module_show",
                            comment: "订单详情页-返程模块曝光",
                          },
                          1
                        ),
                        e.chooseDate !== this.props.chooseDate &&
                          this.changeChooseDate(this.props.chooseDate);
                    },
                  },
                  {
                    key: "changeChooseDate",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e(t) {
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    this.setState({ chooseDate: t });
                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "handleGoTicket",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e() {
                          var t, i, n, o, c, s;
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    this.doTrace(
                                      {
                                        bizKey: "detail_return_module_click",
                                        comment:
                                          "订单详情页-返程模块预定按钮点击",
                                        clickType: y.uh.confirmClick,
                                      },
                                      2
                                    ),
                                      (t = this.getTitleInfo()),
                                      (i = t.backline),
                                      (n = t.startDate),
                                      (o =
                                        this.props.orderInfo.productLineCode),
                                      (c = "/pages/bus/list/list?date="
                                        .concat(
                                          n ||
                                            Z()()
                                              .add(1, "day")
                                              .format("YYYY-MM-DD"),
                                          "&fromCity="
                                        )
                                        .concat(i.fromCity, "&toCity=")
                                        .concat(i.toCity, "&tabType=")
                                        .concat(
                                          1 === o ? "" : "scenicArea",
                                          "&sourceId="
                                        )
                                        .concat(this.props.sourceId)),
                                      (s = be),
                                      L.Z.setUnionData(s),
                                      g().navigateTo({ url: c });
                                  case 7:
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
                    key: "handleChooseDate",
                    value: function () {
                      var e,
                        t,
                        i = this.getTitleInfo(),
                        n = i.initStartDate,
                        o = i.startDate;
                      null === (e = this.props) ||
                        void 0 === e ||
                        null === (t = e.onShowCalendarDrawer) ||
                        void 0 === t ||
                        t.call(e, o, n, $);
                    },
                  },
                  {
                    key: "getTitleInfo",
                    value: function () {
                      var e,
                        t,
                        i = this.props.orderInfo,
                        n = this.state.chooseDate,
                        o = Z()(
                          null === (e = i.ticketInfo) || void 0 === e
                            ? void 0
                            : e.fromDate
                        )
                          .add(1, "day")
                          .isBefore(Z()())
                          ? Z()().format("YYYY-MM-DD")
                          : Z()(
                              null === (t = i.ticketInfo) || void 0 === t
                                ? void 0
                                : t.fromDate
                            )
                              .add(1, "day")
                              .format("YYYY-MM-DD"),
                        a = n || o;
                      return {
                        endTime: Z()(i.orderCreateAt)
                          .add(1, "hour")
                          .format("YYYY-MM-DD HH:mm:ss"),
                        backline: i.xcxBackLine,
                        chooseDateStr: ""
                          .concat(Z()(a).format("MM月DD日"), " ")
                          .concat(we.Z.getWeekDay(a), "出发"),
                        initStartDate: o,
                        startDate: a,
                      };
                    },
                  },
                  {
                    key: "doTrace",
                    value: function (e, t) {
                      this.props.doBusTraceInfo &&
                        this.props.doBusTraceInfo(e, t);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props.orderInfo,
                        t = this.getTitleInfo(),
                        i = t.backline,
                        n = t.chooseDateStr;
                      return e.xcxBackLine
                        ? (0, D.BX)(k.View, {
                            className: "bus-backTrip-component",
                            children: [
                              (0, D.tZ)(k.View, {
                                className: "title-view",
                                children: (0, D.tZ)(k.Image, {
                                  src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/ydqcfc@3x.png",
                                  mode: "aspectFit",
                                  className: "title-img",
                                }),
                              }),
                              (0, D.BX)(k.View, {
                                className: "content-view",
                                children: [
                                  (0, D.BX)(k.View, {
                                    className: "content-tl",
                                    children: [
                                      (0, D.BX)(k.View, {
                                        className: "line-info",
                                        children: [
                                          (0, D.tZ)(k.View, {
                                            className: "from station",
                                            children: i.fromCity,
                                          }),
                                          (0, D.tZ)(k.View, {
                                            className: "to station",
                                            children: i.toCity,
                                          }),
                                        ],
                                      }),
                                      (0, D.tZ)(k.View, {
                                        className: "trip-info",
                                        id: "AdDm",
                                        onClick:
                                          this.handleChooseDate.bind(this),
                                        children: n,
                                      }),
                                    ],
                                  }),
                                  (0, D.BX)(k.View, {
                                    className: "content-tr",
                                    children: [
                                      (i.specialPrice || i.originPrice) &&
                                        (0, D.BX)(k.View, {
                                          className: "price-content",
                                          children: [
                                            i.specialPrice &&
                                              (0, D.tZ)(k.View, {
                                                className: "specialPrice",
                                                children: i.specialPrice,
                                              }),
                                            i.originPrice &&
                                              (0, D.BX)(k.View, {
                                                className: "originPrice",
                                                children: [
                                                  "车站",
                                                  (0, D.tZ)(k.Text, {
                                                    className: "price",
                                                    children: i.originPrice,
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      (0, D.tZ)(k.View, {
                                        className: "btn-go",
                                        id: "AdDn",
                                        onClick: this.handleGoTicket.bind(this),
                                        children: "去预定",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null;
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent),
            Ne = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, r.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, m.Z)((0, d.Z)(n), "getSubScribeMessageIds", function () {
                    var e = n.state.isNoReBuyNewCustomer;
                    if ("zx" === w.default.jetpack) {
                      var t = [
                        {
                          title: "活动兑奖提醒",
                          tempId: "XXu1MK1ErEd0uaeP9hkmY292NcNOQGoHQlC_D-_22i4",
                        },
                      ];
                      return (
                        e &&
                          t.unshift({
                            title: "优惠券到账提醒",
                            tempId:
                              "FIciOECXCI7SBoKgIWJARTg_pPYhbEMb2RKx-AGulUE",
                          }),
                        t
                      );
                    }
                    if ("dt" === w.default.jetpack) {
                      var i = [
                        {
                          title: "活动兑奖提醒",
                          tempId: "7KhxshLupwrPWN3bMvystTfw6HrQUKg0oF_OORM_oCY",
                        },
                      ];
                      return (
                        e &&
                          i.unshift({
                            title: "优惠券到账提醒",
                            tempId:
                              "Q4j-ue6NdwS8Bfpalwxd3O9jrI6VNn_u9uq9OVw5_UY",
                          }),
                        i
                      );
                    }
                    return [];
                  }),
                  (n.state = {
                    winInfo: null,
                    isShow: null,
                    endTime: null,
                    isNoReBuyNewCustomer: !1,
                  }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                      var i, n;
                      (t.isShow && e.allowedShow) !== this.isShow() &&
                        this.isShow() &&
                        this.doTrace(
                          {
                            exposureType: "popup",
                            bizKey: "detail_red_pocket_show",
                            comment: "订单详情页-红包弹窗曝光",
                          },
                          1
                        ),
                        t.isShow !== this.state.isShow &&
                          (null === (i = (n = this.props).onMCVisibleChange) ||
                            void 0 === i ||
                            i.call(n, this.state.isShow)),
                        this.props.allowedShow !== e.allowedShow &&
                          this.props.allowedShow &&
                          this.handleFetchWinData();
                    },
                  },
                  {
                    key: "isShow",
                    value: function () {
                      return this.state.isShow && this.props.allowedShow;
                    },
                  },
                  {
                    key: "onSubBtnClick",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e() {
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      this.doTrace(
                                        {
                                          bizKey:
                                            "detail_red_pocket_button_click",
                                          comment:
                                            "订单详情页-红包弹窗提醒按钮点击",
                                          clickType: y.uh.confirmClick,
                                        },
                                        2
                                      ),
                                      (e.next = 3),
                                      this.handleSubscribe()
                                    );
                                  case 3:
                                    this.handleHideModal();
                                  case 4:
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
                    key: "handleSubscribe",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e() {
                          var t, i, n, o, c, s, r;
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (t = this.getSubScribeMessageIds()),
                                      (e.next = 3),
                                      N.Z.getSubscribe(
                                        t.map(function (e) {
                                          return e.tempId;
                                        })
                                      )
                                    );
                                  case 3:
                                    if (
                                      ((i = e.sent),
                                      (n = i.mainSwitch),
                                      (o = i.unKnownList),
                                      (c = void 0 === o ? [] : o),
                                      (s = i.rejectList),
                                      (r = void 0 === s ? [] : s),
                                      console.log("是否授权小程序消息订阅", n),
                                      console.log("unKnownList", c),
                                      console.log("rejectList", r),
                                      n && r.length !== t.length)
                                    ) {
                                      e.next = 15;
                                      break;
                                    }
                                    return (
                                      (0, T.showToast)(
                                        "请查看您的小程序订阅消息权限~"
                                      ),
                                      e.abrupt("return")
                                    );
                                  case 15:
                                    if (c.length) {
                                      e.next = 18;
                                      break;
                                    }
                                    return (
                                      (0, T.showToast)("订阅成功！"),
                                      e.abrupt("return")
                                    );
                                  case 18:
                                    return (
                                      (e.prev = 18),
                                      (e.next = 21),
                                      N.Z.doSubscribe(c)
                                    );
                                  case 21:
                                    (0, T.showToast)("订阅成功！"),
                                      (e.next = 27);
                                    break;
                                  case 24:
                                    (e.prev = 24),
                                      (e.t0 = e.catch(18)),
                                      console.log("subcribe err", e.t0);
                                  case 27:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[18, 24]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "doTrace",
                    value: function (e, t) {
                      var i, n;
                      null === (i = (n = this.props).doBusTraceInfo) ||
                        void 0 === i ||
                        i.call(n, e, t);
                    },
                  },
                  {
                    key: "handleHideModal",
                    value: function () {
                      this.setState({ isShow: !1 });
                    },
                  },
                  {
                    key: "handleFetchWinData",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e() {
                          var t, i, n, o;
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((e.prev = 0),
                                      w.default.isWechat && !w.default.isTieyou)
                                    ) {
                                      e.next = 3;
                                      break;
                                    }
                                    throw new Error("场景不支持");
                                  case 3:
                                    if (
                                      1 === (n = this.props.redPacketData).code
                                    ) {
                                      e.next = 6;
                                      break;
                                    }
                                    throw new Error("req fail");
                                  case 6:
                                    (o =
                                      null == n ||
                                      null === (t = n.data) ||
                                      void 0 === t ||
                                      null === (i = t.messageList) ||
                                      void 0 === i
                                        ? void 0
                                        : i.findIndex(function (e) {
                                            return "noRePurchase" === e;
                                          })),
                                      this.setState({
                                        winInfo: n.data,
                                        endTime:
                                          n.data.countDownSecond &&
                                          Z()()
                                            .add(
                                              n.data.countDownSecond,
                                              "second"
                                            )
                                            .format("YYYY-MM-DD HH:mm:ss"),
                                        isShow: !!n.data,
                                        isNoReBuyNewCustomer: o > -1,
                                      }),
                                      (e.next = 13);
                                    break;
                                  case 10:
                                    (e.prev = 10),
                                      (e.t0 = e.catch(0)),
                                      this.setState({
                                        isShow: !1,
                                        winInfo: null,
                                        endTime: null,
                                      });
                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[0, 10]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "onTimeup",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, a.Z)().mark(function e() {
                          return (0, a.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    this.setState({
                                      isShow: !1,
                                      winInfo: null,
                                      endTime: null,
                                    });
                                  case 1:
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
                    key: "render",
                    value: function () {
                      var e = this.state,
                        t = e.winInfo,
                        i = e.endTime;
                      return (
                        t &&
                        (0, D.tZ)(B.ZtActivityPop, {
                          className: "bus-FreeEachOrderModal",
                          show: this.isShow(),
                          isShowClose: !1,
                          children: (0, D.BX)(k.View, {
                            className: "bus-FreeEachOrderModal-content",
                            children: [
                              (0, D.BX)(k.View, {
                                className: "view-head",
                                children: [
                                  (0, D.tZ)(k.View, {
                                    className: "title",
                                    children: "恭喜获得现金红包",
                                  }),
                                  (0, D.tZ)(k.View, {
                                    className: "tips",
                                    children: t.tip,
                                  }),
                                ],
                              }),
                              (0, D.tZ)(k.View, {
                                className: "view-body",
                                children: (0, D.tZ)(k.View, {
                                  className: "price-content",
                                  children: t.amount,
                                }),
                              }),
                              (0, D.BX)(k.View, {
                                className: "view-bottom",
                                children: [
                                  (0, D.tZ)(k.View, {
                                    className: "remain-desc",
                                    children: (0, D.tZ)(B.ZtCountdown, {
                                      endTime: i || Z()(),
                                      format: {
                                        hour: "时",
                                        minute: "分",
                                        second: "秒后可领取",
                                      },
                                      className: "remain-count-down",
                                      onTimeup: this.onTimeup.bind(this),
                                    }),
                                  }),
                                  (0, D.tZ)(k.View, {
                                    className: "btn-subscribe",
                                    id: "AdDu",
                                    onClick: this.onSubBtnClick.bind(this),
                                    children: "提醒我明日领取",
                                  }),
                                ],
                              }),
                              (0, D.tZ)(k.View, {
                                className: "btn-close",
                                id: "AdDv",
                                onClick: this.handleHideModal.bind(this),
                              }),
                            ],
                          }),
                        })
                      );
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent),
            Te = i(27570),
            Ie = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, r.Z)(this, i),
                  ((n = t.call(this, e)).state = { isShowResWin: !0 }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                      var i,
                        n,
                        o,
                        a,
                        c = !!(
                          e.allowedShow &&
                          t.isShowResWin &&
                          null !== (i = e.orderInfo) &&
                          void 0 !== i &&
                          i.freeOrderNoticeWin
                        ),
                        s = this.isShow();
                      c !== s &&
                        s &&
                        this.doTrace(
                          {
                            typeSnd: "book_lottery_result_show",
                            comment: "详情页-结果弹窗曝光",
                            is_award:
                              null !== (n = this.getWinInfo()) &&
                              void 0 !== n &&
                              n.winning
                                ? 1
                                : 0,
                          },
                          0
                        ),
                        t.isShowResWin !== this.state.isShowResWin &&
                          (null === (o = (a = this.props).onMCVisibleChange) ||
                            void 0 === o ||
                            o.call(a, this.state.isShowResWin));
                    },
                  },
                  {
                    key: "getEntryInfo",
                    value: function () {
                      var e;
                      return null === (e = this.props.orderInfo) || void 0 === e
                        ? void 0
                        : e.freeOrderPreNotice;
                    },
                  },
                  {
                    key: "getWinInfo",
                    value: function () {
                      var e;
                      return null === (e = this.props.orderInfo) || void 0 === e
                        ? void 0
                        : e.freeOrderNoticeWin;
                    },
                  },
                  {
                    key: "isLotteryFinished",
                    value: function () {
                      return !this.getEntryInfo() && this.getWinInfo();
                    },
                  },
                  {
                    key: "onCloseModal",
                    value: function () {
                      var e;
                      this.doTrace({
                        typeSnd: "book_lottery_result_click",
                        comment: "详情页-结果弹窗按钮点击",
                        is_award:
                          null !== (e = this.getWinInfo()) &&
                          void 0 !== e &&
                          e.winning
                            ? 1
                            : 0,
                      }),
                        this.setState({ isShowResWin: !1 });
                    },
                  },
                  {
                    key: "goH5Page",
                    value: function () {
                      var e,
                        t =
                          null === (e = this.getWinInfo()) || void 0 === e
                            ? void 0
                            : e.jumpUrl;
                      t &&
                        C.Z.twebview({
                          data: { url: t, utmSource: this.props.utmSource },
                        });
                    },
                  },
                  {
                    key: "isShow",
                    value: function () {
                      return !!(
                        this.props.allowedShow &&
                        this.state.isShowResWin &&
                        this.getWinInfo()
                      );
                    },
                  },
                  {
                    key: "doTrace",
                    value: function () {
                      for (
                        var e, t, i = arguments.length, n = new Array(i), o = 0;
                        o < i;
                        o++
                      )
                        n[o] = arguments[o];
                      null === (e = (t = this.props).doBusTraceInfo) ||
                        void 0 === e ||
                        e.call.apply(e, [t].concat(n));
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.getWinInfo(),
                        t = this.getEntryInfo();
                      return (0, D.BX)(k.Block, {
                        children: [
                          t &&
                            (0, D.BX)(k.View, {
                              className: "bus-LotteryFreeOrder-entry",
                              children: [
                                (0, D.BX)(k.View, {
                                  className: "v-l",
                                  children: [
                                    (0, D.tZ)(k.Image, {
                                      src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon_gift@3x.png",
                                      mode: "aspectFit",
                                      className: "icon",
                                    }),
                                    (0, D.BX)(k.View, {
                                      className: "v-content",
                                      children: [
                                        (0, D.tZ)(k.View, {
                                          className: "title",
                                          children: "本单免单抽取中",
                                        }),
                                        (0, D.tZ)(k.View, {
                                          className: "desc",
                                          children:
                                            "免单抽取结果在出票成功后告知",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, D.tZ)(k.View, {
                                  className: "v-r",
                                  children: "抽取中",
                                }),
                              ],
                            }),
                          (0, D.BX)(B.ZtActivityPop, {
                            show: this.isShow(),
                            isShowClose: !1,
                            animation: "comeup",
                            children: [
                              (null == e ? void 0 : e.winning) &&
                                (0, D.BX)(k.View, {
                                  className:
                                    "bus-LotteryFreeOrder-win-dialog bus-LotteryFreeOrder-win-success",
                                  children: [
                                    (0, D.tZ)(k.Image, {
                                      src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/wz@3x.png",
                                      mode: "aspectFit",
                                      className: "head-title",
                                    }),
                                    (0, D.BX)(k.View, {
                                      className: "v-c",
                                      children: [
                                        (0, D.tZ)(k.View, {
                                          className: "tag-text",
                                          children: e.amountTag,
                                        }),
                                        (0, D.tZ)(Te.Z, {
                                          className: "price",
                                          transformOrigin: {
                                            x: "center",
                                            y: "center",
                                          },
                                          children: e.amount,
                                        }),
                                        (0, D.tZ)(k.View, {
                                          className: "text",
                                          children: e.amountDesc,
                                        }),
                                      ],
                                    }),
                                    (0, D.BX)(k.View, {
                                      className: "v-b",
                                      children: [
                                        (0, D.tZ)(k.View, {
                                          className: "btn-go",
                                          id: "AdDw",
                                          onClick: this.goH5Page.bind(this),
                                          children: "去提现",
                                        }),
                                        (0, D.tZ)(k.View, {
                                          className: "tip-text",
                                          children: "可去活动页直接提现",
                                        }),
                                      ],
                                    }),
                                    (0, D.tZ)(k.View, {
                                      className: "icon-close",
                                      id: "AdDx",
                                      onClick: this.onCloseModal.bind(this),
                                    }),
                                  ],
                                }),
                              e &&
                                !e.winning &&
                                (0, D.BX)(k.View, {
                                  className:
                                    "bus-LotteryFreeOrder-win-dialog bus-LotteryFreeOrder-win-fail",
                                  children: [
                                    (0, D.tZ)(k.View, {
                                      className: "tip-text",
                                      children: e.subTitle,
                                    }),
                                    (0, D.tZ)(k.View, {
                                      className: "head-title",
                                      children: e.title,
                                    }),
                                    (0, D.BX)(k.View, {
                                      className: "v-c",
                                      children: [
                                        (0, D.tZ)(k.View, {
                                          className: "tag-text",
                                          children: e.amountTag,
                                        }),
                                        (0, D.tZ)(Te.Z, {
                                          className: "price",
                                          transformOrigin: {
                                            x: "center",
                                            y: "center",
                                          },
                                          children: e.amount,
                                        }),
                                        (0, D.tZ)(k.View, {
                                          className: "text",
                                          children: e.amountDesc,
                                        }),
                                      ],
                                    }),
                                    (0, D.tZ)(k.View, {
                                      className: "v-b",
                                      children: (0, D.tZ)(k.View, {
                                        className: "btn-go win-fail",
                                        id: "AdDy",
                                        onClick: this.onCloseModal.bind(this),
                                        children: "开心收下",
                                      }),
                                    }),
                                    (0, D.tZ)(k.View, {
                                      className: "icon-close",
                                      id: "AdDz",
                                      onClick: this.onCloseModal.bind(this),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent);
          !(function (e) {
            (e[(e.RED_PACKET = 1)] = "RED_PACKET"),
              (e[(e.FLIGHT = 2)] = "FLIGHT"),
              (e[(e.HOTEL = 3)] = "HOTEL");
          })(E || (E = {}));
          var Ze,
            Ce = { 1: "red-packet", 2: "flight", 3: "hotel" },
            xe = {
              1: {
                typeSnd: "detail_dt_couponAfterTicket_bus_click",
                comment: "订单详情页-购票奖励弹窗汽车奖励金领取按钮点击",
              },
              2: {
                typeSnd: "detail_dt_couponAfterTicket_fltFirst_click",
                comment: "订单详情页-购票奖励弹窗机票券领取按钮点击",
              },
              3: {
                typeSnd: "detail_dt_couponAfterTicket_htlFirst_click",
                comment: "订单详情页-购票奖励弹窗酒店券领取按钮点击",
              },
            },
            Ve = (0, f.memo)(
              (0, f.forwardRef)(function (e, t) {
                var i = e.orderNumber,
                  n = e.show,
                  o = e.onVisibleChange,
                  a = e.onGetRedPacketData,
                  c = e.doBusNewTraceInfo,
                  r = e.doBusTrace,
                  l = (0, f.useState)(!1),
                  d = (0, he.Z)(l, 2),
                  u = d[0],
                  h = d[1],
                  m = (0, f.useState)([]),
                  p = (0, he.Z)(m, 2),
                  v = p[0],
                  w = p[1],
                  b = (0, f.useState)(""),
                  S = (0, he.Z)(b, 2),
                  y = S[0],
                  I = S[1],
                  Z = (0, f.useState)(null),
                  C = (0, he.Z)(Z, 2),
                  x = C[0],
                  V = C[1],
                  M = function () {
                    (0, K.nI)({ orderNumber: i }).then(function (e) {
                      var t;
                      a(e);
                      var i = e.code,
                        n = e.data;
                      if (
                        1 !== i ||
                        N.Z.isEmptyObject(n) ||
                        null == n ||
                        null === (t = n.typeList) ||
                        void 0 === t ||
                        !t.length
                      )
                        return h(!1), void o(!1);
                      var c = n.typeList,
                        s = n.typeTitle;
                      null != c &&
                        c.length &&
                        (w(A(c)),
                        h(!0),
                        r(
                          {
                            exposureType: "popup",
                            bizKey: "detail_dt_couponAfterTicket_show",
                            comment: "订单详情页-购票奖励弹窗曝光",
                          },
                          1
                        )),
                        I(s);
                    });
                  };
                (0, f.useImperativeHandle)(t, function () {
                  return { reqFunc: M };
                });
                var A = function (e) {
                    return e.map(function (e) {
                      return (0, s.Z)((0, s.Z)({}, e), {}, { btnName: "选我" });
                    });
                  },
                  P = function (e, t, i) {
                    if (!i) {
                      var n = e.type,
                        o = e.btnName;
                      "选我" === o
                        ? (L(n, t), c(xe[n]))
                        : "去购票" === o &&
                          (2 === n
                            ? (g().reLaunch({
                                url: "/pages/home/index?tab=flight&aid=".concat(
                                  20000001,
                                  "&sid=",
                                  10005003
                                ),
                              }),
                              c({
                                typeSnd:
                                  "detail_dt_couponAfterTicket_fltSecond_click",
                                comment:
                                  "订单详情页-购票奖励弹窗机票券跳转按钮点击",
                              }))
                            : 3 === n &&
                              (g().reLaunch({
                                url: "/pages/home/index?tab=hotel&aid=".concat(
                                  20000001,
                                  "&sid=",
                                  10005004
                                ),
                              }),
                              c({
                                typeSnd:
                                  "detail_dt_couponAfterTicket_htlSecond_click",
                                comment:
                                  "订单详情页-购票奖励弹窗酒店券跳转按钮点击",
                              })));
                    }
                  },
                  L = function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                    (0, T.showLoading)(),
                      (0, K.yG)({ type: e, orderNumber: i })
                        .then(function (i) {
                          if (0 !== e) {
                            var n = i.code,
                              a = i.message,
                              c = 1 === n ? "操作成功" : "操作失败";
                            if (((0, T.showToast)(a || c), 1 === n))
                              if ((V(e), 1 !== e)) {
                                var s = (0, ce.Z)(v);
                                (s[t].btnName = "去购票"), w(s);
                              } else 1 === e && (_(), o(!1));
                          }
                        })
                        .catch(function () {
                          (0, T.showToast)("网络开了小差～");
                        })
                        .finally(function () {
                          (0, T.hideLoading)();
                        });
                  },
                  _ = function () {
                    var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    e && L(0), h(!1);
                  },
                  X = fe()("bg", {
                    "three-bg": 3 === v.length,
                    "two-bg": 2 === v.length,
                  });
                return (0, D.tZ)(B.ZtActivityPop, {
                  className: "buy-ticket-award-modal",
                  show: n && u,
                  animation: "falling",
                  onClose: function () {
                    return _(!0);
                  },
                  children: (0, D.BX)(k.View, {
                    className: X,
                    children: [
                      (0, D.tZ)(k.Image, { className: "title", src: y }),
                      (0, D.tZ)(k.View, {
                        className: "list",
                        children: v.map(function (e, t) {
                          var i = e.type,
                            n = e.amount,
                            o = e.title,
                            a = e.desc,
                            c = e.btnName,
                            s = e.tag,
                            r = x === i,
                            l = null != x && !r,
                            d = fe()("basic-btn", {
                              "btn-unselected": null == x,
                              "btn-selected": r,
                              "btn-disabled": l,
                            });
                          return (0, D.BX)(
                            k.View,
                            {
                              className: "item item-".concat(Ce[i]),
                              children: [
                                r &&
                                  (0, D.tZ)(k.Image, {
                                    className: "icon-tag",
                                    src: "https://pages.c-ctrip.com/bus-images/zhixing/Popup/ylbq@3x.png",
                                  }),
                                (0, D.BX)(k.Text, {
                                  className: "price",
                                  children: [
                                    s &&
                                      (0, D.tZ)(k.Text, {
                                        className: "price-tag bd-1rpx",
                                        children: s,
                                      }),
                                    n,
                                  ],
                                }),
                                (0, D.BX)(k.View, {
                                  className: "center",
                                  children: [
                                    (0, D.tZ)(k.Text, {
                                      className: "main-title",
                                      children: o,
                                    }),
                                    (0, D.tZ)(k.Text, {
                                      className: "des",
                                      children: a,
                                    }),
                                  ],
                                }),
                                (0, D.tZ)(k.View, {
                                  className: d,
                                  id: "AdDo",
                                  onClick: function () {
                                    return P(e, t, l);
                                  },
                                  children: c,
                                }),
                              ],
                            },
                            i
                          );
                        }),
                      }),
                    ],
                  }),
                });
              })
            ),
            Be = i(72674),
            De = i(13622),
            Me = f.default.memo(function (e) {
              var t,
                i = e.bannerInfo,
                n = void 0 === i ? {} : i,
                o = e.doUbtTrace,
                a = void 0 === o ? function () {} : o;
              (0, f.useEffect)(function () {
                a(
                  {
                    typeSnd: "orderdetail_gh_trip_share_show",
                    comment: "购后行程模块曝光",
                  },
                  0
                );
              }, []);
              var c =
                  null == n || null === (t = n.title) || void 0 === t
                    ? void 0
                    : t.split("|"),
                s = (c.length > 0 && c[0]) || "",
                r = (c.length > 1 && c[1]) || "",
                l = (c.length > 2 && c[2]) || "";
              return (0, D.tZ)(k.View, {
                className: "bus-wechat-share-banner",
                children: (0, D.BX)(k.Button, {
                  className: "content",
                  openType: "share",
                  id: "AdFH",
                  onClick: function () {
                    return (function (e) {
                      a(
                        {
                          typeSnd: "orderdetail_gh_trip_share_click",
                          comment: "购后行程模块点击",
                        },
                        e
                      );
                    })(1);
                  },
                  children: [
                    (0, D.BX)(k.View, {
                      className: "main-cont",
                      children: [
                        (0, D.tZ)(k.Image, {
                          className: "icon",
                          src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/hyfxtb@3x.png",
                        }),
                        (0, D.BX)(k.View, {
                          className: "txt-desc",
                          children: [
                            (0, D.BX)(k.Text, {
                              className: "title",
                              children: [
                                s,
                                (0, D.tZ)(k.Text, {
                                  className: "mark-txt",
                                  children: r,
                                }),
                                l,
                              ],
                            }),
                            (0, D.tZ)(k.Text, {
                              className: "sub-title",
                              children: n.subTitle,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, D.tZ)(k.View, {
                      className: "btn",
                      children: n.buttonText,
                    }),
                  ],
                }),
              });
            }),
            Ae = i(30301),
            Pe = function (e) {
              var t = e.tipsInfo,
                i = void 0 === t ? {} : t;
              return (0, D.BX)(k.View, {
                className: "holding-seat-tips",
                children: [
                  (0, D.BX)(k.View, {
                    className: "title",
                    children: [
                      (0, D.tZ)(k.Image, {
                        className: "icon",
                        src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon@3x.png",
                      }),
                      (0, D.tZ)(k.Image, {
                        className: "tit",
                        mode: "aspectFit",
                        src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/mfzz@3x.png",
                      }),
                    ],
                  }),
                  (0, D.tZ)(k.View, {
                    className: "content",
                    children: (0, D.tZ)(Ae.Z, {
                      message: i.desc || "",
                      customDuration: 4,
                    }),
                  }),
                ],
              });
            },
            Le = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                return (0, r.Z)(this, i), t.call(this, e);
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e;
                      null === (e = this.props) ||
                        void 0 === e ||
                        e.ubtTrace(
                          {
                            exposureType: "banner",
                            bizKey: "orderdetail_manghe_banner_show",
                            comment: "订单详情页抽盲盒banner曝光",
                          },
                          1
                        );
                    },
                  },
                  {
                    key: "gotoActivityPage",
                    value: function () {
                      var e, t, i;
                      null === (e = this.props) ||
                        void 0 === e ||
                        e.ubtTrace(
                          {
                            bizKey: "orderdetail_manghe_banner_click",
                            comment: "订单详情页抽盲盒banner点击",
                            CLICK_TYPE: y.uh.confirmClick,
                          },
                          2
                        );
                      var n =
                        null === (t = this.props.activityData) || void 0 === t
                          ? void 0
                          : t.bbJumpUrl;
                      n &&
                        null !== (i = n.startsWith) &&
                        void 0 !== i &&
                        i.call(n, "http") &&
                        C.Z.twebview({
                          data: { url: n, utmSource: this.props.utmSource },
                        });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props.activityData;
                      return (0, D.BX)(k.View, {
                        className: "bus-blind-box-activity flex",
                        id: "AdEZ",
                        onClick: function () {
                          return e.gotoActivityPage();
                        },
                        children: [
                          (0, D.BX)(k.View, {
                            className: "cont flex-align-items-center",
                            children: [
                              (0, D.tZ)(k.Image, {
                                className: "icon",
                                src: t.bbIcon,
                              }),
                              (0, D.BX)(k.View, {
                                className:
                                  "title flex-align-items-center flex-column",
                                children: [
                                  (0, D.tZ)(k.Image, {
                                    className: "tit ".concat(
                                      0 === t.state ? "active" : ""
                                    ),
                                    src: t.bbTitle,
                                    mode: "aspectFit",
                                  }),
                                  (0, D.tZ)(k.View, {
                                    className: "sub-tit",
                                    children: t.bbSubTitle,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, D.tZ)(k.View, {
                            className: "btn",
                            children: t.btnTxt,
                          }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent),
            _e = (function (e) {
              (0, u.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, r.Z)(this, i),
                  ((n = t.call(this, e)).state = {
                    isVisible: !1,
                    activityData: {},
                  }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.initPage(this.props);
                    },
                  },
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      this.initPage(e);
                    },
                  },
                  {
                    key: "initPage",
                    value: function (e) {
                      var t,
                        i = this.state.isVisible;
                      e.show !== i &&
                        (this.setState({
                          isVisible: e.show,
                          activityData: e.activityData,
                        }),
                        e.show &&
                          (this.props.saveBlindBoxModalStatus(!0),
                          null === (t = this.props) ||
                            void 0 === t ||
                            t.ubtTrace(
                              {
                                exposureType: "popup",
                                bizKey: "orderdetail_manghe_popup_show",
                                comment: "订单详情页抽盲盒弹窗曝光",
                              },
                              1
                            )));
                    },
                  },
                  {
                    key: "onClickSubmit",
                    value: function () {
                      var e, t, i, n;
                      null === (e = this.props) ||
                        void 0 === e ||
                        e.ubtTrace(
                          {
                            bizKey: "orderdetail_manghe_popup_click",
                            comment: "订单详情页抽盲盒弹窗点击",
                            clickType: y.uh.confirmClick,
                          },
                          2
                        ),
                        this.setState({ isVisible: !1 }),
                        null === (t = this.props) ||
                          void 0 === t ||
                          t.closeBlindBoxModal();
                      var o =
                        null === (i = this.state.activityData) || void 0 === i
                          ? void 0
                          : i.wJumpUrl;
                      o &&
                        null !== (n = o.startsWith) &&
                        void 0 !== n &&
                        n.call(o, "http") &&
                        C.Z.twebview({
                          data: { url: o, utmSource: this.props.utmSource },
                        });
                    },
                  },
                  {
                    key: "onClickClose",
                    value: function () {
                      var e, t;
                      this.setState({ isVisible: !1 }),
                        null === (e = this.props) ||
                          void 0 === e ||
                          e.ubtTrace(
                            {
                              bizKey: "orderdetail_manghe_popup_click",
                              comment: "订单详情页抽盲盒弹窗点击",
                              CLICK_TYPE: y.uh.closeClick,
                            },
                            2
                          ),
                        null === (t = this.props) ||
                          void 0 === t ||
                          t.closeBlindBoxModal();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state,
                        i = t.isVisible,
                        n = t.activityData;
                      return (0, D.tZ)(k.View, {
                        className: "bus-blind-box-modal",
                        children: (0, D.tZ)(B.ZtActivityPop, {
                          show: i,
                          onClose: function () {
                            return e.onClickClose();
                          },
                          children: (0, D.BX)(k.View, {
                            className:
                              "cont flex-align-items-center flex-column",
                            children: [
                              (0, D.tZ)(k.Image, {
                                className: "tit",
                                src: n.wTitle,
                              }),
                              (0, D.tZ)(k.View, {
                                className: "sub-tit",
                                children: n.wSubTitle,
                              }),
                              (0, D.tZ)(k.Image, {
                                className: "pic",
                                src: n.wPicUrl,
                              }),
                              (0, D.tZ)(k.Image, {
                                className: "btn",
                                src: n.wBtnTxt,
                                id: "AdEa",
                                onClick: function () {
                                  return e.onClickSubmit();
                                },
                              }),
                              (0, D.tZ)(k.Image, {
                                className: "hand-guide",
                                src: "https://pages.c-ctrip.com/bus-images/zhixing/activity/hand@3x.png",
                              }),
                            ],
                          }),
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(f.default.PureComponent),
            Xe = f.default.memo(function (e) {
              var t = e.isTieyou,
                i = void 0 !== t && t,
                n = e.isShow,
                o = void 0 !== n && n,
                a = e.isIPhoneX,
                c = void 0 !== a && a,
                s = e.orderInfo,
                r = void 0 === s ? {} : s,
                l = e.onTogglePriceModal,
                d = void 0 === l ? function () {} : l,
                u = e.onClickFeeDetailIcon,
                h = void 0 === u ? function () {} : u,
                m = function () {},
                f = {
                  wrapperOption: {
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "12.5px 15px ".concat(
                      c ? "33px" : "16px",
                      " 15px"
                    ),
                    bottom: "0",
                    borderRadius: "16px 16px 0 0",
                  },
                  funcOption: { isCloseByMask: !0 },
                };
              return (0, D.tZ)(U.Z, {
                visible: o,
                option: f,
                onClose: d,
                children: (0, D.BX)(k.View, {
                  className: "bo-price-detail",
                  children: [
                    (0, D.tZ)(k.View, {
                      className: "price-title",
                      children: "价格明细",
                    }),
                    (0, D.BX)(k.View, {
                      className: "pay-price",
                      children: [
                        (0, D.BX)(k.View, {
                          className: "total flex-align-items-center",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: r.orderRefund ? "支付总额" : "价格总额",
                            }),
                            (0, D.BX)(k.View, {
                              className: "con ".concat(i ? "ty" : "zx"),
                              children: [
                                (0, D.BX)(k.Text, {
                                  className: r.orderRefund ? "sca" : "",
                                  children: [r.orderRefund ? "支付" : "", " "],
                                }),
                                (0, D.BX)(k.Text, {
                                  className: r.orderRefund ? "ref" : "",
                                  children: ["¥", r.orderPayPrice],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, D.tZ)(k.View, {
                          className: "detail",
                          children:
                            r &&
                            r.priceList &&
                            r.priceList.map(function (e, t) {
                              return (0,
                              D.BX)(k.View, { className: "item", children: [(0, D.tZ)(k.View, { className: "tit", children: e.name }), (0, D.tZ)(k.View, { className: "con", children: e.value })] }, t);
                            }),
                        }),
                      ],
                    }),
                    r &&
                      r.orderRefund &&
                      (0, D.BX)(k.View, {
                        className: "refund-price",
                        children: [
                          (0, D.BX)(k.View, {
                            className: "total flex-align-items-center",
                            children: [
                              (0, D.tZ)(k.View, {
                                className: "tit",
                                children: "退款总额",
                              }),
                              (0, D.BX)(k.View, {
                                className: "con ".concat(i ? "ty" : "zx"),
                                children: [
                                  (0, D.tZ)(k.Text, {
                                    className: r.orderRefund ? "sca" : "",
                                    children: "退回  ",
                                  }),
                                  (0, D.BX)(k.Text, {
                                    className: r.orderRefund ? "ref" : "",
                                    children: ["¥", r.orderRefund.refundAmount],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, D.tZ)(k.View, {
                            className: "detail",
                            children: r.orderRefund.itemList.map(function (
                              e,
                              t
                            ) {
                              return (0, D.BX)(
                                k.View,
                                {
                                  className: "item",
                                  children: [
                                    (0, D.BX)(k.View, {
                                      id: "AdEv",
                                      onClick: e.commission
                                        ? function () {
                                            return h(1);
                                          }
                                        : m,
                                      style: "display:flex;align-items:center;",
                                      children: [
                                        (0, D.tZ)(k.View, {
                                          className: "tit",
                                          children: e.name,
                                        }),
                                        e.commission &&
                                          (0, D.tZ)(k.Text, {
                                            className:
                                              "tip ifont-detail iconfont",
                                          }),
                                      ],
                                    }),
                                    (0, D.tZ)(k.View, {
                                      className: "con",
                                      children: e.value,
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                          }),
                          (0, D.tZ)(k.View, {
                            className: "note",
                            children: r.orderRefund.note.map(function (e, t) {
                              return (0, D.tZ)(k.View, { children: e }, t);
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              });
            }),
            Fe = f.default.memo(function (e) {
              var t = e.isShow,
                i = void 0 !== t && t,
                n = e.imagePreviewTitle,
                o = void 0 === n ? "" : n,
                a = e.isOrderFromDiTuiSource,
                c = void 0 !== a && a,
                s = e.imageNeedRotate,
                r = void 0 !== s && s,
                l = e.currentImageUrl,
                d = void 0 === l ? "" : l,
                u = e.onClose,
                h = void 0 === u ? function () {} : u,
                m = !!o && c;
              return (0,
              D.tZ)(U.Z, { visible: i, option: m ? { wrapperOption: { width: "calc(100% - 96px)", margin: "-10% auto 0", borderRadius: "10px" }, funcOption: { isCloseByMask: !0, isCloseByAllArea: !0 } } : { wrapperOption: { width: "100%", boxSizing: "border-box" }, maskOption: { backgroundColor: "#ffffff" }, funcOption: { isCloseByMask: !0, isCloseByAllArea: !0 } }, onClose: h, children: (0, D.BX)(k.View, { className: m ? "bo-dt-image-modal" : "bo-image-modal", children: [m && (0, D.tZ)(k.View, { className: "title", children: o }), (0, D.tZ)(k.Image, { className: "img", style: "".concat(r ? "transform:rotate(90deg)" : ""), mode: "widthFix", src: d }), m && (0, D.tZ)(k.Text, { className: "ifont-closed iconfont", id: "AdFD", onClick: h })] }) });
            }),
            Re = f.default.memo(function (e) {
              var t = e.isShow,
                i = void 0 !== t && t,
                n = e.tips,
                o = void 0 === n ? "" : n,
                a = e.handleVisibleCtrl,
                c = void 0 === a ? function () {} : a;
              return (0, D.tZ)(U.Z, {
                visible: i,
                option: {
                  wrapperOption: {
                    width: "calc(100% - 76px)",
                    margin: "0 auto",
                  },
                  funcOption: { isCloseByMask: !0, isCloseByAllArea: !0 },
                },
                onClose: function () {
                  return c(!1);
                },
                children: (0, D.BX)(k.View, {
                  className: "bo-note-model",
                  children: [
                    (0, D.tZ)(k.View, {
                      className: "title",
                      children: "温馨提示",
                    }),
                    (0, D.tZ)(k.View, { className: "note-con", children: o }),
                    (0, D.tZ)(j.Z, {
                      btnText: "知道了",
                      type: "fill",
                      style: {
                        height: "44px",
                        fontSize: "16px",
                        lineHeight: "44px",
                      },
                      id: "AdFE",
                      onClick: function () {
                        return c(!1);
                      },
                    }),
                  ],
                }),
              });
            }),
            Oe = f.default.memo(function (e) {
              var t = e.isShow,
                i = void 0 !== t && t,
                n = e.isTieyou,
                o = void 0 !== n && n,
                a = e.onClose,
                c = void 0 === a ? function () {} : a,
                s =
                  "https://images3.c-ctrip.com/train/yzh/bus-mini/order/mp-".concat(
                    o ? "ty" : "zx",
                    "@3x.png"
                  );
              return (0,
              D.tZ)(U.Z, { visible: i, option: { wrapperOption: { width: "153px", height: "180px", position: "absolute", top: "0px", right: "15px", overflow: "hidden", background: "transparent" }, funcOption: { isCloseByMask: !0, isCloseByAllArea: !0 } }, onClose: c, children: (0, D.BX)(k.View, { className: "bo-collection-modal", children: [(0, D.tZ)(k.Image, { className: "cont-img", src: s, mode: "widthFix" }), (0, D.tZ)(k.Image, { className: "mp-point", src: "https://images3.c-ctrip.com/train/yzh/bus-mini/order/mp-point@3x.png", mode: "widthFix" })] }) });
            }),
            ze = f.default.memo(function (e) {
              var t = e.isShow,
                i = void 0 !== t && t,
                n = e.closeBtnRightPx,
                o = void 0 === n ? 0 : n,
                a = e.ylbSaveModalImgSrc,
                c = void 0 === a ? "" : a,
                s = e.onClose,
                r = void 0 === s ? function () {} : s,
                l = e.onYlbImgLoad,
                d = void 0 === l ? function () {} : l,
                u = e.handleSaveYlbPic,
                h = void 0 === u ? function () {} : u;
              return (0, D.tZ)(U.Z, {
                visible: i,
                option: {
                  wrapperOption: {
                    height: "100%",
                    background: "transparent",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "calc(100% - 90px)",
                    flexDirection: "column",
                  },
                  funcOption: { isCloseByMask: !1, isCloseByAllArea: !1 },
                },
                onClose: r,
                children: (0, D.BX)(k.View, {
                  className: "bo-ylb-modal flex flex-column",
                  children: [
                    (0, D.BX)(k.View, {
                      className: "img-box",
                      children: [
                        (0, D.tZ)(k.Image, {
                          className: "haibao haibao-box",
                          onLoad: d,
                          style: { width: "100%", height: "100%" },
                          mode: "aspectFit",
                          src: c,
                        }),
                        (0, D.tZ)(k.Image, {
                          style: { right: "".concat(o, "px") },
                          className: "close-btn",
                          src: "https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/gb@3x.png",
                          mode: "heightFix",
                          id: "AdFF",
                          onClick: function (e) {
                            e.stopPropagation(), r();
                          },
                        }),
                      ],
                    }),
                    (0, D.BX)(k.View, {
                      className: "btom-btn flex-center flex-column",
                      id: "AdFG",
                      onClick: h,
                      children: [
                        (0, D.tZ)(k.Image, {
                          className: "download",
                          src: "https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/download.png",
                          mode: "aspectFit",
                        }),
                        (0, D.tZ)(k.View, { children: "保存到相册并关闭" }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            Ye = f.default.memo(function (e) {
              var t = e.isTieyou,
                i = void 0 !== t && t,
                n =
                  "https://images3.c-ctrip.com/train/wechat/bus/arrowbot".concat(
                    i ? "-ty" : "",
                    ".png"
                  ),
                o = "https://images3.c-ctrip.com/train/wechat/bus/lack".concat(
                  i ? "-ty" : "",
                  ".png"
                ),
                a =
                  "https://images3.c-ctrip.com/train/wechat/bus/service".concat(
                    i ? "-ty" : "",
                    ".png"
                  );
              return (0,
              D.BX)(k.View, { className: "bo-introduction", children: [(0, D.tZ)(k.View, { className: "tit", children: "- 金牌服务·轻松出行 -" }), (0, D.BX)(k.View, { className: "desc flex", children: [(0, D.BX)(k.View, { className: "item flex-align-items-center flex-column flex-1", children: [(0, D.BX)(k.View, { className: "fir flex-align-items-center", children: [(0, D.tZ)(k.Image, { className: "img", src: n }), "低价保障"] }), (0, D.tZ)(k.View, { className: "sec", children: "网罗全网低价" })] }), (0, D.BX)(k.View, { className: "item flex-align-items-center flex-column flex-1", children: [(0, D.BX)(k.View, { className: "fir flex-align-items-center", children: [(0, D.tZ)(k.Image, { className: "img", src: o }), "出行保障"] }), (0, D.tZ)(k.View, { className: "sec", children: "官方合作极速出票" })] }), (0, D.BX)(k.View, { className: "item flex-align-items-center flex-column flex-1", children: [(0, D.BX)(k.View, { className: "fir flex-align-items-center", children: [(0, D.tZ)(k.Image, { className: "img", src: a }), "优质服务"] }), (0, D.tZ)(k.View, { className: "sec", children: "出现问题及时解决" })] })] })] });
            }),
            Ee = f.default.memo(function (e) {
              var t = e.btnList,
                i = void 0 === t ? [] : t;
              return (0, D.tZ)(k.View, {
                className: "bo-bottom-btn",
                children: i.map(function (e, t) {
                  return (0, D.BX)(
                    k.View,
                    {
                      className: "bottom-btn",
                      id: "AdEb",
                      onClick: e.func.bind(void 0),
                      children: [
                        e.operationDesc &&
                          "BACK_TRIP" != e.operationCode &&
                          (0, D.tZ)(k.View, {
                            className: "btm-btn-tag",
                            dangerouslySetInnerHTML: {
                              __html: "".concat(
                                e.operationDesc.replace(
                                  /\uffe5[0-9]+(.\d+)?/g,
                                  function (e) {
                                    return '<span class="price">'.concat(
                                      e,
                                      "</span>"
                                    );
                                  }
                                )
                              ),
                            },
                          }),
                        e.operationName,
                      ],
                    },
                    t
                  );
                }),
              });
            }),
            He = f.default.memo(function (e) {
              var t = e.isTieyou,
                i = void 0 !== t && t,
                n = e.gotoTrainIndexPage,
                o = void 0 === n ? function () {} : n,
                a = e.gotoPlaneIndexPage,
                c = void 0 === a ? function () {} : a,
                s = e.gotoHotelIndexPage,
                r = void 0 === s ? function () {} : s;
              return (0,
              D.BX)(k.View, { className: "bo-train-entry", children: [(0, D.BX)(k.View, { className: "title", children: ["您还可以在", i ? "铁友" : "智行", "预订"] }), (0, D.BX)(k.View, { className: "info", children: [(0, D.BX)(k.View, { className: "item", id: "AdEc", onClick: o, children: [(0, D.tZ)(k.View, { className: "tit", children: "订火车票" }), (0, D.tZ)(k.View, { className: "desc", children: "抢票无忧 服务贴心" }), (0, D.BX)(k.View, { className: "operation", children: [(0, D.tZ)(k.View, { className: "btn", children: "预订" }), (0, D.tZ)(k.Image, { className: "img", src: "https://images3.c-ctrip.com/train/wechat/bus/bus.png" })] })] }), (0, D.BX)(k.View, { className: "item air", id: "AdEd", onClick: c, children: [(0, D.tZ)(k.View, { className: "tit", children: "订机票" }), (0, D.tZ)(k.View, { className: "desc", children: "全网低价 最高减50" }), (0, D.BX)(k.View, { className: "operation", children: [(0, D.tZ)(k.View, { className: "btn", children: "预订" }), (0, D.tZ)(k.Image, { className: "img", src: "https://images3.c-ctrip.com/train/wechat/bus/plane.png" })] })] }), (0, D.BX)(k.View, { className: "item", id: "AdEe", onClick: r, children: [(0, D.tZ)(k.View, { className: "tit", children: "订酒店" }), (0, D.tZ)(k.View, { className: "desc", children: "全网比价 买贵赔5倍" }), (0, D.BX)(k.View, { className: "operation", children: [(0, D.tZ)(k.View, { className: "btn", children: "预订" }), (0, D.tZ)(k.Image, { className: "img", src: "https://images3.c-ctrip.com/train/wechat/bus/hotel.png" })] })] })] })] });
            }),
            We = f.default.memo(function (e) {
              var t = e.productList,
                i = void 0 === t ? [] : t,
                n = e.onClickItem,
                o = void 0 === n ? function () {} : n;
              return (0, D.BX)(k.View, {
                className: "bo-appendant",
                children: [
                  (0, D.tZ)(k.View, {
                    className: "title",
                    children: "附加产品信息",
                  }),
                  (0, D.tZ)(k.View, {
                    className: "info flex",
                    children:
                      null == i
                        ? void 0
                        : i.map(function (e, t) {
                            return (0, D.tZ)(
                              k.View,
                              {
                                className: "item flex-center",
                                id: "AdEY",
                                onClick: function () {
                                  return o(e);
                                },
                                children: e.shortTitle,
                              },
                              t
                            );
                          }),
                  }),
                ],
              });
            }),
            Ue = i(63583),
            je = f.default.memo(function (e) {
              var t,
                i,
                n = e.orderInfo,
                o = void 0 === n ? {} : n,
                a = e.ticketInfo,
                c = void 0 === a ? {} : a,
                s = e.operationList,
                r = void 0 === s ? [] : s,
                l = e.holdingSeatEndTime,
                d = void 0 === l ? "" : l,
                u = e.isCountDownShow,
                h = void 0 !== u && u,
                m = e.handleHoldingSeatTimeout,
                f = void 0 === m ? function () {} : m,
                p = e.onTogglePriceModal,
                g = void 0 === p ? function () {} : p,
                v = e.handleChangeCountDown,
                w = void 0 === v ? function () {} : v,
                b = ["Re_Buy", "BACK_TRIP"],
                S =
                  (null == c ||
                  null === (t = c.ticketFetchAndCheckInfo) ||
                  void 0 === t ||
                  null === (i = t.checkTicketRule) ||
                  void 0 === i
                    ? void 0
                    : i.includes("身份证")) && "已成交" == o.orderStateDesc,
                y = S ? "购票成功, 持身份证进站" : o.orderStateDesc,
                N = S
                  ? "持购票证件原件直接乘车，无需取票进站"
                  : o.orderStateTip,
                T = (null == N ? void 0 : N.split("*|")) || [],
                I = (null == T ? void 0 : T.length) > 1 && T[0].substring(2),
                Z = (null == T ? void 0 : T.length) > 1 ? T[1] : N;
              return (0, D.BX)(k.View, {
                className: "bo-o-status",
                children: [
                  (0, D.BX)(k.View, {
                    className: "twrap flex-align-items-center",
                    children: [
                      (0, D.tZ)(k.Image, {
                        className: "lzone",
                        src: o.orderStateIcon,
                      }),
                      (0, D.BX)(k.View, {
                        className: "mzone flex-1",
                        children: [
                          (0, D.BX)(k.View, {
                            className: "tbox flex-align-items-center",
                            children: [
                              (0, D.tZ)(k.View, {
                                className: "desc",
                                children: y,
                              }),
                              d &&
                                (0, D.tZ)(k.View, {
                                  className: "holding-seat-count-down",
                                  children: (0, D.tZ)(B.ZtCountdown, {
                                    endTime: d,
                                    isShowDay: !0,
                                    format: {
                                      day: "天",
                                      hour: "时",
                                      minute: "分",
                                    },
                                    onTimeup: f,
                                  }),
                                }),
                              (0, D.BX)(k.View, {
                                className: "price",
                                id: "AdEn",
                                onClick: g,
                                children: [
                                  (0, D.tZ)(k.Text, {
                                    style: "font-size:11px",
                                    children: "¥",
                                  }),
                                  (0, D.tZ)(k.Text, {
                                    children: o.orderPayPrice,
                                  }),
                                  (0, D.tZ)(k.Text, {
                                    className: "ifont-line-tips iconfont",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, D.BX)(k.View, {
                            className: "bbox",
                            children: [
                              I && (0, D.tZ)(k.Text, { children: I }),
                              (0, D.tZ)(k.Text, {
                                className: "normal-tips",
                                children: Z,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  r.filter(function (e) {
                    return !b.includes(e.operationCode);
                  }).length > 0 &&
                    (0, D.tZ)(k.View, {
                      className: "bwrap flex-align-items-center",
                      children: r
                        .filter(function (e) {
                          return !b.includes(e.operationCode);
                        })
                        .map(function (e, t) {
                          return (0,
                          D.BX)(k.View, { className: "flex-center flex-column btn-common \n              ".concat(e.showType ? e.showType : "normal", " ").concat(1 === r.length ? "single" : ""), id: "AdEo", onClick: e.func, children: [(0, D.tZ)(k.View, { className: "name ".concat(e.timeLeft && h ? "sec" : "", " "), children: e.operationName }), e.timeLeft && h && (0, D.tZ)(k.View, { className: "time", children: (0, D.tZ)(Ue.Z, { info: o.orderPayRemainSecond, onChange: w }) })] }, t);
                        }),
                    }),
                ],
              });
            }),
            Qe = f.default.memo(function (e) {
              var t = e.activityInfo,
                i = void 0 === t ? {} : t,
                n = e.goToActivityPage,
                o = void 0 === n ? function () {} : n;
              return (0, D.tZ)(k.View, {
                className: "bo-activity-entrence flex-center",
                id: "AdEX",
                onClick: function () {
                  return o(i.url);
                },
                children: (0, D.tZ)(k.View, {
                  className: "box flex-align-items-center",
                  children: (0, D.BX)(k.View, {
                    className: "rbox",
                    children: [
                      i.title && i.title.split("|").length > 1
                        ? (0, D.BX)(k.View, {
                            className: "title",
                            children: [
                              i.title.split("|")[0],
                              (0, D.tZ)(k.Text, {
                                className: "highlight",
                                children: i.title.split("|")[1],
                              }),
                              i.title.split("|")[2],
                            ],
                          })
                        : (0, D.tZ)(k.View, {
                            className: "title",
                            children: i.title,
                          }),
                      (0, D.tZ)(k.View, {
                        className: "subtitle",
                        children: i.subTitle,
                      }),
                    ],
                  }),
                }),
              });
            }),
            Ke = f.default.memo(function (e) {
              var t = e.holdingSeatTips,
                i = void 0 === t ? "" : t,
                n = e.isOrderFromStationScanSource,
                o = void 0 !== n && n,
                a = e.isTieyou,
                c = void 0 !== a && a,
                s = e.ticketInfo,
                r = void 0 === s ? {} : s,
                l = e.orderInfo,
                d = void 0 === l ? {} : l,
                u = e.isOrderFromDiTuiSource,
                h = void 0 !== u && u,
                m = e.onToggleNoticeModal,
                f = void 0 === m ? function () {} : m,
                p = e.goToMapPage,
                g = void 0 === p ? function () {} : p,
                v = e.handleTransferStationVisibleCtrl,
                w = void 0 === v ? function () {} : v,
                b = c
                  ? "https://images3.c-ctrip.com/train/wechat/bus/detailmapty.png"
                  : "https://images3.c-ctrip.com/train/wechat/bus/detailmap.png",
                S = r && r.backTripInfo;
              return (0, D.BX)(k.View, {
                className: "bo-shift-info ".concat(i ? "mt72" : ""),
                children: [
                  (0, D.BX)(k.View, {
                    className: "order-shift-tbox",
                    children: [
                      (0, D.tZ)(k.View, {
                        className: "title",
                        children: "车次信息",
                      }),
                      o &&
                        (0, D.tZ)(k.View, {
                          className: "detail-tip",
                          children: "退票请至车站窗口柜台办理",
                        }),
                      !o &&
                        (0, D.tZ)(k.View, {
                          className: "detail ".concat(c ? "ty" : "zx"),
                          id: "AdEf",
                          onClick: f,
                          children: "退票政策/乘车说明",
                        }),
                    ],
                  }),
                  (0, D.BX)(k.View, {
                    className: "order-shift-bbox",
                    children: [
                      (0, D.BX)(k.View, {
                        className: "time",
                        children: [
                          r.busTags &&
                            r.busTags[0] &&
                            (0, D.tZ)(k.Block, {
                              children: r.busTags.map(function (e, t) {
                                return (0,
                                D.tZ)(k.View, { className: "tag ".concat(c ? "ty" : "zx"), children: "往返票" === e ? "去程" : e }, t);
                              }),
                            }),
                          (0, D.tZ)(k.View, {
                            className: "date",
                            children: r.fromDateTimeDesc,
                          }),
                          (0, D.tZ)(k.View, {
                            className: "duration",
                            children: r.estimatedTravelTime,
                          }),
                        ],
                      }),
                      (3 === d.productLineCode ||
                        4 === d.productLineCode ||
                        5 === d.productLineCode) &&
                        (0, D.BX)(k.View, {
                          className: "lbox-lcar ".concat(
                            r.costDay ? "incre" : ""
                          ),
                          children: [
                            (0, D.BX)(k.View, {
                              className: "from",
                              children: [
                                (0, D.tZ)(k.View, {
                                  className: "station-time",
                                  children: r.fromTime,
                                }),
                                (0, D.BX)(k.View, {
                                  className: "station-con",
                                  children: [
                                    (0, D.BX)(k.View, {
                                      className: "station-name",
                                      children: [
                                        (0, D.tZ)(k.View, {
                                          children: r.fromStation,
                                        }),
                                        !o &&
                                          r &&
                                          r.amapFromStationLat &&
                                          r.amapFromStationLng &&
                                          (0, D.tZ)(k.View, {
                                            className: "map-icon-con ".concat(
                                              c ? "ty" : "zx"
                                            ),
                                            id: "AdEg",
                                            onClick: function () {
                                              return g(0);
                                            },
                                            children: (0, D.tZ)(k.Image, {
                                              className: "img",
                                              src: b,
                                            }),
                                          }),
                                      ],
                                    }),
                                    (0, D.tZ)(k.View, {
                                      className: "station-address",
                                      children: r.fromStationAddress,
                                    }),
                                    r.transferStation &&
                                      (0, D.BX)(k.View, {
                                        className: "transfer-info",
                                        id: "AdEh",
                                        onClick: function () {
                                          return w(!0);
                                        },
                                        children: [
                                          (0, D.tZ)(k.Text, {
                                            children: r.transferStation,
                                          }),
                                          r.transferStationNote &&
                                            (0, D.tZ)(k.Text, {
                                              id: "AdEi",
                                              onClick: function () {
                                                return w(!0);
                                              },
                                              className:
                                                "ifont-line-tips iconfont",
                                            }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, D.BX)(k.View, {
                              className: "to",
                              children: [
                                (0, D.BX)(k.View, {
                                  className: "station-time",
                                  children: [
                                    r.toTime,
                                    r.costDay &&
                                      (0, D.tZ)(k.View, {
                                        className: "time-add-info",
                                        children: r.costDay,
                                      }),
                                  ],
                                }),
                                (0, D.BX)(k.View, {
                                  className: "station-con",
                                  children: [
                                    (0, D.BX)(k.View, {
                                      className: "station-name",
                                      children: [
                                        (0, D.tZ)(k.View, {
                                          children: r.toStation,
                                        }),
                                        !o &&
                                          r &&
                                          r.amapToStationLat &&
                                          r.amapToStationLng &&
                                          (0, D.tZ)(k.View, {
                                            className: "map-icon-con ".concat(
                                              c ? "ty" : "zx"
                                            ),
                                            id: "AdEj",
                                            onClick: function () {
                                              return g(1);
                                            },
                                            children: (0, D.tZ)(k.Image, {
                                              className: "img",
                                              src: b,
                                            }),
                                          }),
                                      ],
                                    }),
                                    (0, D.tZ)(k.View, {
                                      className: "station-address",
                                      children: r.toStationAddress,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      S &&
                        (0, D.BX)(k.Block, {
                          children: [
                            (0, D.BX)(k.View, {
                              className: "time",
                              style: { marginTop: "28px" },
                              children: [
                                (0, D.tZ)(k.View, {
                                  className: "tag ".concat(c ? "ty" : "zx"),
                                  children: "返程",
                                }),
                                (0, D.tZ)(k.View, {
                                  className: "date",
                                  children: S.fromDateTimeDesc,
                                }),
                                (0, D.tZ)(k.View, {
                                  className: "duration",
                                  children: S.estimatedTravelTime,
                                }),
                              ],
                            }),
                            (3 === d.productLineCode ||
                              4 === d.productLineCode ||
                              5 === d.productLineCode) &&
                              (0, D.BX)(k.View, {
                                className: "lbox-lcar ".concat(
                                  r.costDay ? "incre" : ""
                                ),
                                children: [
                                  (0, D.BX)(k.View, {
                                    className: "from",
                                    children: [
                                      (0, D.tZ)(k.View, {
                                        className: "station-time",
                                        children: S.fromTime,
                                      }),
                                      (0, D.tZ)(k.View, {
                                        className: "station-con",
                                        children: (0, D.BX)(k.View, {
                                          className: "station-name",
                                          children: [
                                            (0, D.tZ)(k.View, {
                                              children: S.fromStation,
                                            }),
                                            S &&
                                              S.amapFromStationLat &&
                                              S.amapFromStationLng &&
                                              !h &&
                                              (0, D.tZ)(k.View, {
                                                className:
                                                  "map-icon-con ".concat(
                                                    c ? "ty" : "zx"
                                                  ),
                                                id: "AdEk",
                                                onClick: function () {
                                                  return g(2);
                                                },
                                                children: (0, D.tZ)(k.Image, {
                                                  className: "img",
                                                  src: b,
                                                }),
                                              }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, D.BX)(k.View, {
                                    className: "to",
                                    children: [
                                      (0, D.tZ)(k.View, {
                                        className: "station-time",
                                        children: S.toTime,
                                      }),
                                      (0, D.tZ)(k.View, {
                                        className: "station-con",
                                        children: (0, D.BX)(k.View, {
                                          className: "station-name",
                                          children: [
                                            (0, D.tZ)(k.View, {
                                              children: S.toStation,
                                            }),
                                            S &&
                                              S.amapToStationLat &&
                                              S.amapToStationLng &&
                                              !h &&
                                              (0, D.tZ)(k.View, {
                                                className:
                                                  "map-icon-con ".concat(
                                                    c ? "ty" : "zx"
                                                  ),
                                                id: "AdEl",
                                                onClick: function () {
                                                  return g(3);
                                                },
                                                children: (0, D.tZ)(k.Image, {
                                                  className: "img",
                                                  src: b,
                                                }),
                                              }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            }),
            qe = f.default.memo(function (e) {
              var t = e.isTieyou,
                i = void 0 !== t && t,
                n = e.ticketInfo,
                o = void 0 === n ? {} : n,
                a = e.isOrderFromDiTuiSource,
                c = void 0 !== a && a,
                s = e.isHideTripMasterInfo,
                r = void 0 !== s && s,
                l = e.isImageLoaded,
                d = void 0 !== l && l,
                u = e.isQRCodeShowList,
                h = void 0 === u ? [] : u,
                m = e.toMakePhone,
                f = void 0 === m ? function () {} : m,
                p = e.onPreviewImage,
                g = void 0 === p ? function () {} : p,
                v = e.onImgLoad,
                w = void 0 === v ? function () {} : v,
                b = function () {};
              return (0, D.BX)(k.View, {
                className: "bo-order-travel ".concat(r ? "no-bottom" : ""),
                children: [
                  (0, D.tZ)(k.View, {
                    className: "title",
                    children: "出行信息",
                  }),
                  (0, D.BX)(k.View, {
                    className: "tbox",
                    children: [
                      o.ticketFetchAndCheckInfo &&
                        o.ticketFetchAndCheckInfo.driverMobile &&
                        !r &&
                        (0, D.BX)(k.View, {
                          className: "item",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: "联系司机",
                            }),
                            (0, D.BX)(k.View, {
                              className: "con",
                              children: [
                                String(o.ticketFetchAndCheckInfo.driverMobile)
                                  .split(",")
                                  .filter(function (e) {
                                    return !!e;
                                  })
                                  .map(function (e, t) {
                                    return (0, D.BX)(
                                      k.Text,
                                      {
                                        id: "AdEp",
                                        onClick: function () {
                                          return f(e);
                                        },
                                        className: "tel-item "
                                          .concat(i ? "ty" : "zx", " ")
                                          .concat(
                                            String(
                                              o.ticketFetchAndCheckInfo
                                                .driverMobile
                                            )
                                              .split(",")
                                              .filter(function (e) {
                                                return !!e;
                                              }).length > 1
                                              ? "active"
                                              : ""
                                          ),
                                        children: [
                                          e.replace(
                                            /^(\d{3})\S{4}(\d{4})$/,
                                            "$1****$2"
                                          ),
                                          t !==
                                          String(
                                            o.ticketFetchAndCheckInfo
                                              .driverMobile
                                          )
                                            .split(",")
                                            .filter(function (e) {
                                              return !!e;
                                            }).length -
                                            1
                                            ? "，"
                                            : "",
                                        ],
                                      },
                                      t
                                    );
                                  }),
                                o.ticketFetchAndCheckInfo &&
                                  1 ===
                                    String(
                                      o.ticketFetchAndCheckInfo.driverMobile
                                    )
                                      .split(",")
                                      .filter(function (e) {
                                        return !!e;
                                      }).length &&
                                  (0, D.tZ)(k.Image, {
                                    className: "tel-icon-pic",
                                    id: "AdEq",
                                    onClick: function () {
                                      return f(
                                        o.ticketFetchAndCheckInfo.driverMobile
                                      );
                                    },
                                    src: i
                                      ? "https://images3.c-ctrip.com/train/yzh/bus-mini/tyiPhone@3x.png"
                                      : "https://images3.c-ctrip.com/train/yzh/bus-mini/iPhone@3x.png",
                                  }),
                              ],
                            }),
                          ],
                        }),
                      o.ticketFetchAndCheckInfo &&
                        o.ticketFetchAndCheckInfo.carNumber &&
                        (0, D.BX)(k.View, {
                          className: "item",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: "车牌号",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "con",
                              children: o.ticketFetchAndCheckInfo.carNumber,
                            }),
                          ],
                        }),
                      o.ticketFetchAndCheckInfo &&
                        o.ticketFetchAndCheckInfo.fromStationAddress &&
                        !r &&
                        (0, D.BX)(k.View, {
                          className: "item",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: "上车地址",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "con",
                              children:
                                o.ticketFetchAndCheckInfo.fromStationAddress,
                            }),
                          ],
                        }),
                      o.ticketFetchAndCheckInfo &&
                        o.ticketFetchAndCheckInfo.ticketCheck &&
                        (0, D.BX)(k.View, {
                          className: "seat item",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: "检票口",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "con",
                              children: o.ticketFetchAndCheckInfo.ticketCheck,
                            }),
                          ],
                        }),
                      o.ticketFetchAndCheckInfo &&
                        o.ticketFetchAndCheckInfo.seatNumberStr &&
                        (0, D.BX)(k.View, {
                          className: "seat item",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: "座位号",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "con",
                              children: o.ticketFetchAndCheckInfo.seatNumberStr,
                            }),
                          ],
                        }),
                      o.ticketFetchAndCheckInfo &&
                        o.ticketFetchAndCheckInfo.checkTicketRule &&
                        !r &&
                        (0, D.BX)(k.View, {
                          className: "way item",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: "检票方式",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "con",
                              children:
                                o.ticketFetchAndCheckInfo.checkTicketRule,
                            }),
                          ],
                        }),
                      o.ticketFetchAndCheckInfo &&
                        o.ticketFetchAndCheckInfo.fetchTicketTime &&
                        !r &&
                        (0, D.BX)(k.View, {
                          className: "time item",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: "取票时间",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "con",
                              children:
                                o.ticketFetchAndCheckInfo.fetchTicketTime,
                            }),
                          ],
                        }),
                      o.ticketFetchAndCheckInfo &&
                        o.ticketFetchAndCheckInfo.fetchTicketVoucher &&
                        !r &&
                        (0, D.BX)(k.View, {
                          className: "credit item",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: "取票凭证",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "con",
                              children:
                                o.ticketFetchAndCheckInfo.fetchTicketVoucher,
                            }),
                          ],
                        }),
                      o.ticketFetchAndCheckInfo &&
                        o.ticketFetchAndCheckInfo.checkCode &&
                        (0, D.BX)(k.View, {
                          className: "item num",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: "检票码",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "con",
                              children: o.ticketFetchAndCheckInfo.checkCode,
                            }),
                          ],
                        }),
                      o.ticketFetchAndCheckInfo &&
                        o.ticketFetchAndCheckInfo.fetchCode &&
                        !r &&
                        (0, D.BX)(k.View, {
                          className: "num item",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: "取票号",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "con",
                              children: o.ticketFetchAndCheckInfo.fetchCode,
                            }),
                            !c &&
                              o.ticketFetchAndCheckInfo.getTicketQrCode &&
                              (0, D.BX)(k.View, {
                                className: "btn "
                                  .concat(i ? "ty" : "zx", " ")
                                  .concat(
                                    o.ticketFetchAndCheckInfo.fetchPassword
                                      ? "mid"
                                      : ""
                                  ),
                                id: "AdEr",
                                onClick: function () {
                                  return g(
                                    {
                                      url: o.ticketFetchAndCheckInfo
                                        .getTicketQrCode,
                                      type: 0,
                                    },
                                    !1,
                                    ""
                                  );
                                },
                                children: [
                                  (0, D.tZ)(k.Image, {
                                    className: "logo",
                                    src: "https://images3.c-ctrip.com/train/wechat/bus/qr-btn.png",
                                  }),
                                  "查看二维码",
                                ],
                              }),
                          ],
                        }),
                      o.ticketFetchAndCheckInfo &&
                        o.ticketFetchAndCheckInfo.fetchPassword &&
                        !r &&
                        (0, D.BX)(k.View, {
                          className: "pas item",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: "取票密码",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "con",
                              children: o.ticketFetchAndCheckInfo.fetchPassword,
                            }),
                          ],
                        }),
                    ],
                  }),
                  o.ticketFetchAndCheckInfo &&
                    o.ticketFetchAndCheckInfo.ticketItemList &&
                    o.ticketFetchAndCheckInfo.ticketItemList[0] &&
                    o.ticketFetchAndCheckInfo.ticketItemList.some(function (e) {
                      return e.checkTicketQrCode;
                    }) &&
                    (0, D.tZ)(k.View, {
                      className: "mbox",
                      children: (0, D.tZ)(k.ScrollView, {
                        className: "zone ".concat(
                          1 ===
                            o.ticketFetchAndCheckInfo.ticketItemList.filter(
                              function (e) {
                                return e.checkTicketQrCode;
                              }
                            ).length
                            ? "single"
                            : "unsingle"
                        ),
                        scrollX: "true",
                        children: o.ticketFetchAndCheckInfo.ticketItemList
                          .filter(function (e) {
                            return e.checkTicketQrCode;
                          })
                          .map(function (e, t) {
                            var n = e.checkTicketQrCode.indexOf("http") > -1,
                              a =
                                e.checkTicketQrCode &&
                                String(e.checkTicketQrCode).replace(
                                  /[\r\n]/g,
                                  ""
                                ),
                              c = n
                                ? e.checkTicketQrCode
                                : "data:image/png;base64,".concat(a);
                            return (0, D.tZ)(
                              k.Block,
                              {
                                children:
                                  e.checkTicketQrCode &&
                                  (0, D.BX)(k.Block, {
                                    children: [
                                      (0, D.tZ)(k.Image, {
                                        className: "img",
                                        "data-index": t,
                                        style: "display:none;",
                                        onLoad: w,
                                        src: c,
                                      }),
                                      d &&
                                        (0, D.BX)(k.View, {
                                          className: "pannel "
                                            .concat(h[t] ? "qr" : "bar", " ")
                                            .concat(i ? "ty" : "zx", " ")
                                            .concat(
                                              [6].includes(e.ticketState)
                                                ? "refunded"
                                                : ""
                                            ),
                                          children: [
                                            (0, D.BX)(k.View, {
                                              className: "tzone",
                                              children: [
                                                (0, D.tZ)(k.Text, {
                                                  className: "name",
                                                  children:
                                                    e.passengerList[0].name,
                                                }),
                                                (0, D.tZ)(k.Text, {
                                                  className: "type",
                                                  children: e.ticketTypeName,
                                                }),
                                              ],
                                            }),
                                            e.checkTicketQrCode &&
                                              (0, D.BX)(k.Block, {
                                                children: [
                                                  (0, D.tZ)(k.View, {
                                                    children: h[t]
                                                      ? (0, D.tZ)(k.Image, {
                                                          className: "img",
                                                          src: c,
                                                          id: "AdEt",
                                                          onClick: [6].includes(
                                                            e.ticketState
                                                          )
                                                            ? b
                                                            : function () {
                                                                return g(
                                                                  {
                                                                    url: e.checkTicketQrCode,
                                                                    type: 1,
                                                                  },
                                                                  !1,
                                                                  ""
                                                                );
                                                              },
                                                        })
                                                      : (0, D.BX)(k.View, {
                                                          className:
                                                            "btn ".concat(
                                                              i ? "ty" : "zx"
                                                            ),
                                                          id: "AdEs",
                                                          onClick: function () {
                                                            return g(
                                                              {
                                                                url: e.checkTicketQrCode,
                                                                type: 1,
                                                              },
                                                              !0,
                                                              ""
                                                            );
                                                          },
                                                          children: [
                                                            (0, D.tZ)(k.Image, {
                                                              className: "logo",
                                                              src: "https://images3.c-ctrip.com/train/wechat/bus/qr-btn.png",
                                                            }),
                                                            "查看条形码",
                                                          ],
                                                        }),
                                                  }),
                                                  o.ticketFetchAndCheckInfo.ticketItemList.filter(
                                                    function (e) {
                                                      return e.checkTicketQrCode;
                                                    }
                                                  ).length > 1 &&
                                                    (0, D.BX)(k.View, {
                                                      className: "step",
                                                      children: [
                                                        t + 1,
                                                        "/",
                                                        o.ticketFetchAndCheckInfo.ticketItemList.filter(
                                                          function (e) {
                                                            return e.checkTicketQrCode;
                                                          }
                                                        ).length,
                                                      ],
                                                    }),
                                                ],
                                              }),
                                          ],
                                        }),
                                    ],
                                  }),
                              },
                              t
                            );
                          }),
                      }),
                    }),
                  o.ticketFetchAndCheckInfo &&
                    o.ticketFetchAndCheckInfo.servicePhone &&
                    !r &&
                    (0, D.BX)(k.View, {
                      className: "bbox",
                      children: [
                        (0, D.tZ)(k.Text, {
                          className: "desc",
                          children: "如有疑问，请联系",
                        }),
                        o.ticketFetchAndCheckInfo.servicePhone
                          .split(/[,\uff0c]/)
                          .map(function (e, t) {
                            return (0, D.BX)(
                              k.Text,
                              {
                                className: "".concat(i ? "ty" : "zx", " tel"),
                                id: "AdEu",
                                onClick: function () {
                                  return f(e);
                                },
                                children: [
                                  e,
                                  (0, D.tZ)(k.Text, {
                                    style: "color:#999999",
                                    children:
                                      o.ticketFetchAndCheckInfo.servicePhone.split(
                                        /[,\uff0c]/
                                      ).length !==
                                      t + 1
                                        ? ","
                                        : "",
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                      ],
                    }),
                ],
              });
            }),
            Ge = f.default.memo(function (e) {
              var t = e.isTieyou,
                i = void 0 !== t && t,
                n = e.ticketInfo,
                o = void 0 === n ? {} : n,
                a = e.orderInfo,
                c = void 0 === a ? {} : a,
                s = e.onClickTicketRefundBtn,
                r = void 0 === s ? function () {} : s;
              return (0, D.BX)(k.View, {
                className: "bo-order-passenger",
                children: [
                  (0, D.tZ)(k.View, {
                    className: "title",
                    children: "乘客信息",
                  }),
                  (0, D.BX)(k.View, {
                    className: "box",
                    children: [
                      o &&
                        o.ticketFetchPhoneNumber &&
                        (0, D.BX)(k.View, {
                          className: "tel",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "tit",
                              children: "联系电话",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "con",
                              children: o.ticketFetchPhoneNumber,
                            }),
                          ],
                        }),
                      !c.passengerNum &&
                        o &&
                        o.ticketFetchAndCheckInfo &&
                        o.ticketFetchAndCheckInfo.ticketItemList &&
                        o.ticketFetchAndCheckInfo.ticketItemList[0] &&
                        (0, D.BX)(k.View, {
                          className: "passenger",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "rem",
                              children: "乘车人",
                            }),
                            (0, D.tZ)(k.View, {
                              className: "desc",
                              children:
                                o.ticketFetchAndCheckInfo.ticketItemList.map(
                                  function (e, t) {
                                    return (0, D.tZ)(
                                      k.Block,
                                      {
                                        children: e.passengerList.map(function (
                                          t,
                                          n
                                        ) {
                                          return (0, D.BX)(
                                            k.View,
                                            {
                                              className: "item",
                                              children: [
                                                (0, D.BX)(k.View, {
                                                  className: "lbox",
                                                  children: [
                                                    (0, D.BX)(k.View, {
                                                      className: "tbox",
                                                      children: [
                                                        (0, D.tZ)(k.View, {
                                                          className: "name",
                                                          children: t.name,
                                                        }),
                                                        !!e.ticketTypeName &&
                                                          (0, D.tZ)(k.Text, {
                                                            className: "type",
                                                            children:
                                                              e.ticketTypeName,
                                                          }),
                                                        [
                                                          3, 4, 6, 7, 8,
                                                        ].includes(
                                                          e.ticketState
                                                        ) &&
                                                          (0, D.tZ)(k.View, {
                                                            className:
                                                              "status ".concat(
                                                                [3, 7].includes(
                                                                  e.ticketState
                                                                )
                                                                  ? "suc"
                                                                  : [
                                                                      4, 6, 8,
                                                                    ].includes(
                                                                      e.ticketState
                                                                    )
                                                                  ? "fail"
                                                                  : ""
                                                              ),
                                                            children:
                                                              e.ticketStateDesc,
                                                          }),
                                                      ],
                                                    }),
                                                    (0, D.BX)(k.View, {
                                                      className: "bbox",
                                                      children: [
                                                        (0, D.tZ)(k.View, {
                                                          className: "tit",
                                                          children:
                                                            t.identityTypeName,
                                                        }),
                                                        (0, D.tZ)(k.View, {
                                                          className: "num",
                                                          children:
                                                            t.identityCode,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                e.supportRefundTicket
                                                  ? (0, D.tZ)(k.View, {
                                                      className: "rbox ".concat(
                                                        i ? "ty" : "zx"
                                                      ),
                                                      id: "AdEm",
                                                      onClick: function () {
                                                        return r(e);
                                                      },
                                                      children: "退票",
                                                    })
                                                  : e.refundTicketRejectReason &&
                                                    (0, D.BX)(k.View, {
                                                      className:
                                                        "rbox disabled",
                                                      children: [
                                                        "退票",
                                                        (0, D.tZ)(k.View, {
                                                          className: "reason",
                                                          children:
                                                            e.refundTicketRejectReason,
                                                        }),
                                                      ],
                                                    }),
                                              ],
                                            },
                                            n
                                          );
                                        }),
                                      },
                                      t
                                    );
                                  }
                                ),
                            }),
                          ],
                        }),
                      c.passengerNum &&
                        (0, D.BX)(k.View, {
                          className: "passenger",
                          children: [
                            (0, D.tZ)(k.View, {
                              className: "rem",
                              children: "乘车人数",
                            }),
                            (0, D.BX)(k.View, {
                              className: "desc",
                              children: [c.passengerNum, "人"],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            }),
            Je = f.default.memo(function (e) {
              var t = e.isShow,
                i = void 0 !== t && t,
                n = e.isIPhoneX,
                o = void 0 !== n && n,
                a = e.isTieyou,
                c = void 0 !== a && a,
                s = e.refundModalInfo,
                r = void 0 === s ? {} : s,
                l = e.onCancel,
                d = void 0 === l ? function () {} : l,
                u = e.onConfirm,
                h = void 0 === u ? function () {} : u,
                m = e.onClickFeeDetailIcon,
                f = void 0 === m ? function () {} : m,
                p = e.onSelectInsurance,
                g = void 0 === p ? function () {} : p,
                v = function () {},
                b = {
                  wrapperOption: {
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "12.5px 15px ".concat(
                      o ? "32px" : "15px",
                      " 15px"
                    ),
                    bottom: "0",
                    borderRadius: "16px 16px 0 0",
                  },
                  funcOption: { isCloseByMask: !0 },
                };
              return (0, D.tZ)(U.Z, {
                visible: i,
                option: b,
                onClose: d,
                children:
                  r &&
                  (0, D.BX)(k.View, {
                    className: "bo-refund-modal",
                    children: [
                      (0, D.tZ)(k.View, {
                        className: "title",
                        children: "退款明细",
                      }),
                      (0, D.BX)(k.View, {
                        className: "tzone",
                        children: [
                          (0, D.tZ)(k.View, {
                            className: "tit",
                            children: "预计退款总额",
                          }),
                          (0, D.BX)(k.View, {
                            className: "con",
                            children: [
                              "¥",
                              (function () {
                                var e = Number(
                                    null == r ? void 0 : r.refundFee
                                  ),
                                  t = null == r ? void 0 : r.refundDetail;
                                return (
                                  null == t ||
                                    t.forEach(function (t) {
                                      t.isSelect ||
                                        2 !== t.type ||
                                        (e -= t.price);
                                    }),
                                  1 * e.toFixed(2)
                                );
                              })(),
                            ],
                          }),
                        ],
                      }),
                      r &&
                        r.refundDetail &&
                        r.refundDetail[0] &&
                        (0, D.tZ)(k.View, {
                          className: "mzone",
                          children: r.refundDetail.map(function (e, t) {
                            return (0, D.BX)(
                              k.View,
                              {
                                className: "item",
                                children: [
                                  (0, D.BX)(k.View, {
                                    className: "tit",
                                    id: "AdEw",
                                    onClick:
                                      "退票手续费" == e.title
                                        ? function () {
                                            return f(0);
                                          }
                                        : v,
                                    children: [
                                      e.title,
                                      "退票手续费" == e.title &&
                                        (0, D.tZ)(k.Text, {
                                          className:
                                            "tip ifont-detail iconfont",
                                        }),
                                      2 === e.type &&
                                        !!e.subTitle &&
                                        (0, D.tZ)(k.Text, {
                                          className: "sub-title",
                                          children: e.subTitle,
                                        }),
                                    ],
                                  }),
                                  (0, D.BX)(k.View, {
                                    className: "con",
                                    children: [e.mark, "¥", e.price],
                                  }),
                                  2 === e.type &&
                                    (0, D.tZ)(k.Image, {
                                      id: "AdEx",
                                      onClick: function () {
                                        return g(t);
                                      },
                                      src: e.isSelect
                                        ? w.default.isTieyou
                                          ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_selectedty@3x.png"
                                          : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_selected@3x.png"
                                        : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_unselected@3x.png",
                                      className: "select-icon",
                                    }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                      (0, D.tZ)(k.View, {
                        className: "bzone",
                        children:
                          r &&
                          r.ticketReturnExplain &&
                          r.ticketReturnExplain.map(function (e, t) {
                            return (0, D.tZ)(k.View, { children: e }, t);
                          }),
                      }),
                      (0, D.BX)(k.View, {
                        className: "refund-btn ".concat(c ? "ty" : "zx"),
                        children: [
                          (0, D.tZ)(k.View, {
                            className: "cancel",
                            id: "AdEy",
                            onClick: d,
                            children: "取消退票",
                          }),
                          (0, D.tZ)(k.View, {
                            className: "confirm",
                            id: "AdEz",
                            onClick: h,
                            children: "确认退票",
                          }),
                        ],
                      }),
                    ],
                  }),
              });
            }),
            $e = f.default.memo(function (e) {
              var t = e.isShow,
                i = void 0 !== t && t,
                n = e.isTieyou,
                o = void 0 !== n && n,
                a = e.isIPhoneX,
                c = void 0 !== a && a,
                s = e.passengerModalInfo,
                r = void 0 === s ? {} : s,
                l = e.orderInfo,
                d = void 0 === l ? {} : l,
                u = e.onTogglePassengerModal,
                h = void 0 === u ? function () {} : u,
                m = e.onSelectPassenger,
                f = void 0 === m ? function () {} : m,
                p = e.onConfirmPassengerSelect,
                g = void 0 === p ? function () {} : p,
                v = {
                  wrapperOption: {
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "12.5px 15px ".concat(
                      c ? "32px" : "15px",
                      " 15px"
                    ),
                    bottom: "0",
                    borderRadius: "16px 16px 0 0",
                  },
                  funcOption: { isCloseByMask: !0 },
                };
              return (0, D.tZ)(U.Z, {
                visible: i,
                option: v,
                onClose: h,
                children: (0, D.BX)(k.View, {
                  className: "bo-rtp-modal",
                  children: [
                    (0, D.tZ)(k.View, {
                      className: "rtp-title",
                      children: "选择退票乘客",
                    }),
                    (0, D.BX)(k.View, {
                      className: "rtp-mzone",
                      children: [
                        (0, D.tZ)(k.View, {
                          children:
                            r &&
                            r.map(function (e, t) {
                              return (0, D.BX)(
                                k.View,
                                {
                                  className: "item flex-align-items-center",
                                  children: [
                                    (0, D.tZ)(k.View, {
                                      className: "tit",
                                      children: e.passengerList[0].name,
                                    }),
                                    (0, D.tZ)(k.View, {
                                      className: "con",
                                      children: (0, D.tZ)(k.Text, {
                                        className: "ifont-radio"
                                          .concat(e.isActive ? "ed" : "", " ")
                                          .concat(
                                            d.returnByTicket ? "" : "selected",
                                            " iconfont"
                                          ),
                                        id: "AdFA",
                                        onClick: function () {
                                          return f(e);
                                        },
                                      }),
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                        }),
                        !d.returnByTicket &&
                          (0, D.tZ)(k.View, {
                            className: "exp",
                            children:
                              "由于供应商限制，仅支持整单全部退票，敬请谅解",
                          }),
                      ],
                    }),
                    (0, D.BX)(k.View, {
                      className: "rtp-bzone flex-align-items-center ".concat(
                        o ? "ty" : "zx"
                      ),
                      children: [
                        (0, D.tZ)(k.View, {
                          className: "normal-btn cancel-btn",
                          id: "AdFB",
                          onClick: h,
                          children: "取消退票",
                        }),
                        (0, D.tZ)(k.View, {
                          className: "normal-btn confirm-btn",
                          id: "AdFC",
                          onClick: g,
                          children: "下一步",
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            et = [
              {
                title: "汽车票出票状态通知",
                tempId: "ZV8vv_q5tMGA55wgpt_02IQslSFwxxtY0ux1XNkqw6A",
              },
            ],
            tt = [
              {
                title: "汽车票出票状态通知",
                tempId: "fJlqTe1csNEeexrbD5q8F1WMFCXOIks8_8E16DjPQMM",
              },
            ],
            it = "BUS_ORDER_DETAIL_SUBSCRIBE_STORAGE",
            nt = {
              wrapperOption: { width: "calc(100% - 76px)", margin: "0 auto" },
              funcOption: { isCloseByMask: !0, isCloseByAllArea: !0 },
            },
            ot = "couponGiftsAfterConsume",
            at = "subcribeMessage",
            ct = "RECOMMEND_CROSS_MODAL",
            st = "FREE_EACH_ORDER",
            rt = "LOTTERY_FREE_ORDER",
            lt = "BUY_TICKET_AWARD",
            dt = "BLIND_BOX_ACTIVITY_MODAL",
            ut = [ot, ct, at, dt, lt, st, rt],
            ht = ["Re_Buy", "BACK_TRIP"],
            mt = "xcx_fenxiao",
            ft =
              (0, v.h)()(
                (Ze = (function (e) {
                  (0, u.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var n;
                    (0, r.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, m.Z)((0, d.Z)(n), "isSureRefundReslove", null),
                      (0, m.Z)((0, d.Z)(n), "jumpFromSource", ""),
                      (0, m.Z)((0, d.Z)(n), "$CouponGiftsAfterConsume", null),
                      (0, m.Z)((0, d.Z)(n), "$RecommendCrossModal", null),
                      (0, m.Z)((0, d.Z)(n), "onSelectInsurance", function (e) {
                        var t = n.state.refundModalInfo,
                          i = null == t ? void 0 : t.refundDetail;
                        null == i ||
                          i.forEach(function (t, i) {
                            i === e &&
                              (t.isSelect &&
                                (0, T.showToast)("保险未勾选退订，退票请退保"),
                              (t.isSelect = !t.isSelect));
                          }),
                          n.setState({
                            refundModalInfo: (0, s.Z)(
                              (0, s.Z)({}, t),
                              {},
                              { refundDetail: i }
                            ),
                          });
                      }),
                      (0, m.Z)(
                        (0, d.Z)(n),
                        "buyTicketAwardVisibleChange",
                        function (e) {
                          n.setModalVisibleStatus(lt, e);
                        }
                      ),
                      (0, m.Z)((0, d.Z)(n), "getRedPacketData", function (e) {
                        n.setState({ redPacketData: e });
                      }),
                      (n.pageId = "10650059988"),
                      (n.timePointer = null);
                    var o =
                      (0, p.getCurrentInstance)().router &&
                      (0, p.getCurrentInstance)().router.params;
                    n.orderNumber = o.oid;
                    var a = null == o ? void 0 : o.tabType;
                    return (
                      "scenicArea" == a
                        ? (n.pageId = "10650059996")
                        : "airport" == a && (n.pageId = "10650060004"),
                      Q.Z.isStationScanSource(
                        null == o ? void 0 : o.jumpFromSource
                      ) && (n.pageId = "10650070670"),
                      (n.isFromBookPage =
                        null == o ? void 0 : o.isFromBookPage),
                      (n.state = {
                        isTieyou: w.default.isTieyou,
                        isOrderFromDiTuiSource: !1,
                        isWechat: w.default.isWechat,
                        isNoticeModalShow: !1,
                        isPriceModalShow: !1,
                        isPassengerModalShow: !1,
                        passengerModalInfo: [],
                        isRefundModalShow: !1,
                        refundModalInfo: {},
                        isImageModalShow: !1,
                        orderInfo: {},
                        ticketInfo: {},
                        website: "",
                        operationList: [],
                        selectTicketIdList: [],
                        isCountDownShow: !1,
                        isQRCodeShowList: [],
                        isImageLoaded: !1,
                        imageNeedRotate: !1,
                        activityEntrenceInfo: {},
                        isTicketNoteModalShow: !1,
                        isTransferStationModalShow: !1,
                        isShowMoreDiTuiTripInfo: !1,
                        isNeedShowMP: !1,
                        isSpecialTicket: !1,
                        socialGroupBannerInfo: null,
                        imagePreviewTitle: "",
                        subscribeModalInfo: {},
                        showSubScribeModal: !1,
                        YlbSaveModalImgSrc: "",
                        isShowYLBSaveModal:
                          (0, p.getCurrentInstance)().router &&
                          1 ==
                            (0, p.getCurrentInstance)().router.params
                              .fromBookFlag,
                        closeBtnRightPx: 0,
                        isOrderFromStationScanSource: !1,
                        orderSource: "",
                        utmSource: Q.Z.getUtmSource(),
                        dtStationScanPackage: null,
                        isShowDtStationScanPackageRefundDetainModal: !1,
                        isDTSource: !1,
                        isShowDtNewGuestCouponPushComp: !1,
                        refreshNoticeParams: null,
                        modalCtrl: new F.jb({
                          modalList: ut,
                          vimStateKey: "modalCtrl",
                          vim: (0, d.Z)(n),
                        }),
                        isTouchingMove: !1,
                        redPacketData: {},
                        travelCouponActivityInfo: null,
                        showTravelDiscountActivityDrawer: !1,
                        isReceivedTravelAward: !1,
                        shareBannerInfo: null,
                        holdingSeatTips: null,
                        holdingSeatEndTime: "",
                        blindBoxActivityData: null,
                        isShowBlindBoxModal: !1,
                        qWBannerInfo: "",
                        isShowCalendar: !1,
                        dateInfo: {},
                        openCalendarDrawerSource: 0,
                        selectedBackTripDate: "",
                      }),
                      (n.isFirst = !0),
                      (n.isNeedLoadUserLabelInfo = !0),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isTieyou,
                            n = t.utmSource,
                            o =
                              (0, p.getCurrentInstance)().router &&
                              (0, p.getCurrentInstance)().router.params;
                          (this.orderNumber = o.oid),
                            (this.jumpFromSource = o.jumpFromSource || ""),
                            g().setNavigationBarTitle({
                              title: "订单".concat(this.orderNumber),
                            }),
                            (0, T.setNavigationBarColor)({
                              frontColor: "#ffffff",
                              backgroundColor: i ? "#3C4365" : "#0066E6",
                            }),
                            setTimeout(function () {
                              e.initPage();
                            }, 500),
                            (this.sourceId = (0, F.a3)(n)),
                            this.doBusNewTraceInfoV2({ triggerType: "load" });
                        },
                      },
                      {
                        key: "componentDidUpdate",
                        value: function (e, t) {
                          var i, n;
                          (null !== (i = t.operationList) &&
                            void 0 !== i &&
                            i.find(function (e) {
                              return ["BACK_TRIP"].includes(e.operationCode);
                            })) ||
                            null === (n = this.state.operationList) ||
                            void 0 === n ||
                            !n.find(function (e) {
                              return ["BACK_TRIP"].includes(e.operationCode);
                            }) ||
                            this.doBusNewTraceInfoV2(
                              {
                                exposureType: "normal",
                                bizKey: "detail_return_button_show",
                                comment: "订单详情页-底部返程按钮曝光",
                              },
                              1
                            );
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.doBusNewTraceInfoV2({ triggerType: "exit" });
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          this.isFirst || this.initPage();
                        },
                      },
                      {
                        key: "initPage",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              var t;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          (g().hideLoading(),
                                          g().showLoading({
                                            title: "加载中，请稍候...",
                                          }),
                                          (e.prev = 2),
                                          Q.Z.isStationScanSource(
                                            this.jumpFromSource
                                          ) || S.ZP.isLogin)
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return (e.next = 6), S.ZP.doLogin();
                                      case 6:
                                        return (
                                          (e.next = 8), this.getOrderDetail()
                                        );
                                      case 8:
                                        this.getActivityEntrencyInfo(),
                                          null ===
                                            (t = this.$BuyTicketAwardModal) ||
                                            void 0 === t ||
                                            t.reqFunc(),
                                          g().hideLoading(),
                                          (e.next = 18);
                                        break;
                                      case 13:
                                        (e.prev = 13),
                                          (e.t0 = e.catch(2)),
                                          console.log(e.t0),
                                          g().hideLoading(),
                                          (0, T.showToast)(
                                            "string" == typeof e.t0
                                              ? e.t0
                                              : "网络错误，请稍后重试哦~"
                                          );
                                      case 18:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 13]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getSubscribeInfo",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                o,
                                c,
                                r,
                                l,
                                d,
                                u,
                                h = this;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          w.default.isWechat &&
                                          ("zx" === w.default.jetpack ||
                                            "dt" === w.default.jetpack) &&
                                          !this.state.isDTSource
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return (
                                          this.setModalVisibleStatus(
                                            at,
                                            this.state.showSubScribeModal
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 3:
                                        if (
                                          (t = g().getStorageSync(it)) !==
                                          Z()().format("YYYY-MM-DD")
                                        ) {
                                          e.next = 8;
                                          break;
                                        }
                                        return (
                                          console.log(
                                            t,
                                            "当日已弹微信订阅弹窗"
                                          ),
                                          this.setModalVisibleStatus(
                                            at,
                                            this.state.showSubScribeModal
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 8:
                                        return (
                                          (i =
                                            "zx" === w.default.jetpack
                                              ? tt
                                              : et),
                                          (e.next = 11),
                                          N.Z.getSubscribe(
                                            i.map(function (e) {
                                              return e.tempId;
                                            })
                                          )
                                        );
                                      case 11:
                                        (n = e.sent),
                                          (o = n.mainSwitch),
                                          (c = n.unKnownList),
                                          (r = void 0 === c ? [] : c),
                                          (l = n.rejectList),
                                          (d = void 0 === l ? [] : l),
                                          console.log(
                                            "是否授权小程序消息订阅",
                                            o
                                          ),
                                          console.log("unKnownList", r),
                                          console.log("rejectList", d),
                                          (u = i
                                            .filter(function (e) {
                                              return (
                                                r.includes(e.tempId) ||
                                                d.includes(e.tempId)
                                              );
                                            })
                                            .map(function (e) {
                                              return (0,
                                              s.Z)((0, s.Z)({}, e), {}, { isReject: d.includes(e.tempId) });
                                            })),
                                          this.setState(
                                            {
                                              subscribeModalInfo: {
                                                title: "消息提醒",
                                                desc: "汽车票订单状态实时提醒，超值特惠活动不再错过。",
                                                subList: u,
                                                sourceCode: "".concat(
                                                  w.default.jetpack,
                                                  "_MiniProgram_BUS_ORDER_DETAIL_Popup"
                                                ),
                                              },
                                              showSubScribeModal: u.length > 0,
                                            },
                                            function () {
                                              h.state.showSubScribeModal &&
                                                g().setStorageSync(
                                                  it,
                                                  Z()().format("YYYY-MM-DD")
                                                ),
                                                h.setModalVisibleStatus(
                                                  at,
                                                  h.state.showSubScribeModal
                                                );
                                            }
                                          );
                                      case 22:
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
                        key: "onPullDownRefresh",
                        value: function () {
                          (this.isRefresh = !0), this.initPage();
                        },
                      },
                      {
                        key: "doBusTraceInfo",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "",
                            i =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : 1,
                            n =
                              2 === i
                                ? "abt_BUS_Bus_zx_orderdetail_redpackage_click"
                                : 1 === i
                                ? "BUS_Bus_C_click"
                                : "BUS_Bus_O_show";
                          this.ubtTrace(n, {
                            pageId: this.pageId,
                            type: w.default.jetpack || "zx",
                            typeSnd: e,
                            utmSource: this.state.utmSource,
                            comment: t,
                          });
                        },
                      },
                      {
                        key: "doBusNewTraceInfo",
                        value: function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 1,
                            i =
                              2 === t
                                ? "abt_BUS_Bus_zx_orderdetail_redpackage_click"
                                : 1 === t
                                ? "BUS_Bus_C_click"
                                : "BUS_Bus_O_show";
                          this.ubtTrace(
                            i,
                            (0, s.Z)(
                              {
                                pageId: this.pageId,
                                utmSource: this.state.utmSource,
                                type: w.default.jetpack || "zx",
                              },
                              e
                            )
                          );
                        },
                      },
                      {
                        key: "doBusNewTraceInfoV2",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                o,
                                c,
                                r,
                                l,
                                d = arguments;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            d.length > 0 && void 0 !== d[0]
                                              ? d[0]
                                              : {}),
                                          (i =
                                            d.length > 1 && void 0 !== d[1]
                                              ? d[1]
                                              : 0),
                                          (e.prev = 2),
                                          (e.next = 5),
                                          (0, F.c$)(
                                            this.isNeedLoadUserLabelInfo
                                          )
                                        );
                                      case 5:
                                        (n = e.sent),
                                          (this.isNeedLoadUserLabelInfo = !1),
                                          (o = L.Z.getUnionData()),
                                          (c = "10650059988"),
                                          "10650070670" === this.pageId &&
                                            (c = "10650070670"),
                                          (r = ""),
                                          (e.t0 = i),
                                          (e.next =
                                            0 === e.t0
                                              ? 14
                                              : 1 === e.t0
                                              ? 16
                                              : 2 === e.t0
                                              ? 18
                                              : 20);
                                        break;
                                      case 14:
                                        return (
                                          (r = "p_bus_z_".concat(c)),
                                          e.abrupt("break", 21)
                                        );
                                      case 16:
                                        return (
                                          (r = "s_bus_z_".concat(c)),
                                          e.abrupt("break", 21)
                                        );
                                      case 18:
                                        return (
                                          (r = "c_bus_z_".concat(c)),
                                          e.abrupt("break", 21)
                                        );
                                      case 20:
                                        return e.abrupt("break", 21);
                                      case 21:
                                        (l = (0, s.Z)(
                                          (0, s.Z)(
                                            {
                                              utmSource:
                                                this.state.utmSource || "null",
                                              sourceId:
                                                this.sourceId ||
                                                "Bus_Null_Null",
                                              pageId: c,
                                              client: (0, F.y3)(),
                                              allianceId: o.aid || "null",
                                              allianceSid: o.sid || "null",
                                            },
                                            n
                                          ),
                                          t
                                        )),
                                          ("c_bus_z_10650059988" != r &&
                                            "c_bus_z_10650070670" != r) ||
                                            (l.typeSndAttr = "null"),
                                          this.ubtTrace(r, l),
                                          (e.next = 29);
                                        break;
                                      case 26:
                                        (e.prev = 26),
                                          (e.t1 = e.catch(2)),
                                          console.log(e.t1);
                                      case 29:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 26]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getBusDiTuiWin",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              var t,
                                i,
                                n = this;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!w.default.isTieyou) {
                                          e.next = 2;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 2:
                                        return (
                                          g().showLoading({
                                            title: "加载中，请稍候...",
                                          }),
                                          (e.prev = 3),
                                          (e.next = 6),
                                          (0, K.Rk)({
                                            utmSource: this.state.utmSource,
                                          })
                                        );
                                      case 6:
                                        if (1 != (t = e.sent).code) {
                                          e.next = 12;
                                          break;
                                        }
                                        return (e.next = 10), G(t.data);
                                      case 10:
                                        (i = e.sent),
                                          this.setState(
                                            { YlbSaveModalImgSrc: i },
                                            function () {
                                              n.state.isShowYLBSaveModal &&
                                                n.doBusTraceInfo(
                                                  "yilabaoPop",
                                                  "电子易拉宝弹窗曝光",
                                                  2
                                                );
                                            }
                                          );
                                      case 12:
                                        e.next = 17;
                                        break;
                                      case 14:
                                        (e.prev = 14),
                                          (e.t0 = e.catch(3)),
                                          console.log(
                                            "地推弹窗信息获取失败",
                                            e.t0
                                          );
                                      case 17:
                                        return (
                                          (e.prev = 17),
                                          g().hideLoading(),
                                          e.finish(17)
                                        );
                                      case 20:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[3, 14, 17, 20]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getEntryForSocialGroup",
                        value: function () {
                          var e = this;
                          w.default.isTieyou ||
                            this.state.isOrderFromStationScanSource ||
                            this.setState(
                              { socialGroupBannerInfo: null },
                              function () {
                                (0, K.GA)({
                                  orderState: e.state.orderInfo.orderState,
                                  cityName:
                                    e.state.orderInfo.ticketInfo.fromCity,
                                }).then(function (t) {
                                  console.log(t),
                                    1 == t.code &&
                                      e.setState({
                                        socialGroupBannerInfo: t.data,
                                      });
                                });
                              }
                            );
                        },
                      },
                      {
                        key: "doJumpQW",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, i, n, o, c, s, r, l, d;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (n =
                                            (null ===
                                              (t = (0,
                                              p.getCurrentInstance)()) ||
                                            void 0 === t ||
                                            null === (i = t.router) ||
                                            void 0 === i
                                              ? void 0
                                              : i.params) || {}),
                                          (o = n.fromBookFlag),
                                          (c = n.fromStation),
                                          (s = n.utmSource),
                                          !(
                                            Q.Z.isDTSource(s) &&
                                            1 == o &&
                                            c &&
                                            w.default.isWechat
                                          ))
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          (r = [3, 4, 5].includes(
                                            this.state.orderInfo.productLineCode
                                          )
                                            ? {
                                                basicParams: {
                                                  bigChannel: "point",
                                                },
                                                website: this.state.website,
                                                fromCity:
                                                  this.state.ticketInfo
                                                    .fromCity,
                                              }
                                            : { fromStationName: c }),
                                          (e.next = 7),
                                          (0, K.pi)(r)
                                        );
                                      case 7:
                                        if (
                                          1 !=
                                          (null == (l = e.sent)
                                            ? void 0
                                            : l.code)
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          (e.next = 11),
                                          (0, K._S)({
                                            source: "BusDitui",
                                            pageKey: "1111",
                                            orderNumber: this.orderNumber,
                                          })
                                        );
                                      case 11:
                                        if (
                                          1 !=
                                            (null == (d = e.sent)
                                              ? void 0
                                              : d.resultCode) ||
                                          d.isWechatFriend ||
                                          !d.friendUrl
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          (this.isFirst = !1),
                                          N.Z.commonNavigator(d.friendUrl),
                                          e.abrupt("return")
                                        );
                                      case 16:
                                        e.next = 21;
                                        break;
                                      case 18:
                                        (e.prev = 18),
                                          (e.t0 = e.catch(0)),
                                          console.log(e.t0);
                                      case 21:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 18]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getDTScanSourceCouponPackageDetail",
                        value: function () {
                          var e = this;
                          return (0, K.ym)({
                            orderNumber: this.orderNumber,
                          }).then(function (t) {
                            1 === t.code &&
                            t.data &&
                            t.data.couponDtoList.length
                              ? e.setState({ dtStationScanPackage: t.data })
                              : e.setState({ dtStationScanPackage: null });
                          });
                        },
                      },
                      {
                        key: "doDTScanSourceCouponPackageRefundDetain",
                        value: function () {
                          var e = this;
                          return new Promise(function (t) {
                            (e.isSureRefundReslove = t),
                              e.setState({
                                isShowDtStationScanPackageRefundDetainModal: !0,
                              });
                          });
                        },
                      },
                      {
                        key: "onCancelStationScanCouponRefund",
                        value: function () {
                          this.setState({
                            isShowDtStationScanPackageRefundDetainModal: !1,
                          }),
                            this.isSureRefundReslove &&
                              this.isSureRefundReslove(!1);
                        },
                      },
                      {
                        key: "onSureStationScanCouponRefund",
                        value: function () {
                          this.setState({
                            isShowDtStationScanPackageRefundDetainModal: !1,
                          }),
                            this.isSureRefundReslove &&
                              this.isSureRefundReslove(!0);
                        },
                      },
                      {
                        key: "returnForDTScanSourceCouponPackage",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          this.doDTScanSourceCouponPackageRefundDetain()
                                        );
                                      case 2:
                                        if (e.sent) {
                                          e.next = 5;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 5:
                                        return (
                                          (e.prev = 5),
                                          (e.next = 8),
                                          (0, K.qP)({
                                            orderNumber: this.orderNumber,
                                            productIdx:
                                              this.state.dtStationScanPackage
                                                .productIdx,
                                          })
                                        );
                                      case 8:
                                        if (1 === e.sent.code) {
                                          e.next = 11;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 11:
                                        g().showToast({
                                          title: "退款成功",
                                          icon: "none",
                                        }),
                                          this.getDTScanSourceCouponPackageDetail(),
                                          (e.next = 18);
                                        break;
                                      case 15:
                                        (e.prev = 15),
                                          (e.t0 = e.catch(5)),
                                          console.log(e.t0);
                                      case 18:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[5, 15]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getOrderDetail",
                        value: function () {
                          var e = this;
                          return (0, K.Rc)({
                            orderNumber: this.orderNumber,
                            utmSource: this.jumpFromSource,
                          })
                            .then(function (t) {
                              if (1 === t.code) {
                                if (1 == t.code && t.data) {
                                  var i,
                                    n,
                                    o = e.handleOrderOperationData(t.data);
                                  t.data.orderPayRemainSecond &&
                                    e.setState({ isCountDownShow: !0 });
                                  var a = null,
                                    c = null,
                                    s = t.data.recommendBanner;
                                  (null == s ? void 0 : s.length) > 0 &&
                                    ((a = s.find(function (e) {
                                      return "4" === e.type;
                                    })),
                                    (c = s.find(function (e) {
                                      return "1" === e.type;
                                    })));
                                  var r =
                                    (null === (i = t.data) || void 0 === i
                                      ? void 0
                                      : i.purchaseTicketsRemainSecond) &&
                                    Z()()
                                      .add(
                                        null === (n = t.data) || void 0 === n
                                          ? void 0
                                          : n.purchaseTicketsRemainSecond,
                                        "second"
                                      )
                                      .format("YYYY-MM-DD HH:mm:ss");
                                  if (
                                    (e.setState(
                                      {
                                        noticeInfo:
                                          t.data.ticketInfo.noticeList,
                                        orderInfo: t.data,
                                        ticketInfo: t.data.ticketInfo,
                                        website: t.data.website,
                                        operationList: o,
                                        isOrderFromDiTuiSource: Q.Z.isDTSource(
                                          t.data.utmSource || ""
                                        ),
                                        isOrderFromStationScanSource:
                                          Q.Z.isStationScanSource(
                                            t.data.utmSource
                                          ),
                                        isDTSource: Q.Z.isDTSource(
                                          Q.Z.getUtmSource({
                                            station: [
                                              t.data.ticketInfo.fromStation,
                                              t.data.ticketInfo.fromCity,
                                            ],
                                          })
                                        ),
                                        orderSource: t.data.utmSource,
                                        isSpecialTicket: t.data.bargain,
                                        utmSource: Q.Z.getUtmSource({
                                          station: [
                                            t.data.ticketInfo.fromStation,
                                            t.data.ticketInfo.fromCity,
                                          ],
                                        }),
                                        refreshNoticeParams: {
                                          fromTime: t.data.ticketInfo.fromDate,
                                          fromCity: t.data.ticketInfo.fromCity,
                                          toCity: t.data.ticketInfo.toCity,
                                          fromStation:
                                            t.data.ticketInfo.fromStation,
                                          toStation:
                                            t.data.ticketInfo.toStation,
                                          productType:
                                            1 == t.data.productLineCode
                                              ? "bus"
                                              : "point",
                                          plateNumber:
                                            t.data.ticketInfo.busNumber,
                                        },
                                        shareBannerInfo: a,
                                        holdingSeatTips: c,
                                        holdingSeatEndTime: r,
                                      },
                                      function () {
                                        var i;
                                        if (
                                          (e.isFirst && e.doJumpQW(),
                                          Q.Z.isStationScanSource(
                                            t.data.utmSource
                                          ))
                                        )
                                          e.getDTScanSourceCouponPackageDetail();
                                        else {
                                          null ===
                                            (i = e.$CouponGiftsAfterConsume) ||
                                            void 0 === i ||
                                            i.handleJudgeVsibleInfo(),
                                            e.getQWBannerInfo(),
                                            e.getEntryForSocialGroup(),
                                            60 == t.data.orderState &&
                                              e.checkDiTuiCouponModal(),
                                            60 == t.data.orderState &&
                                              e.state.isShowYLBSaveModal &&
                                              !e.state.YlbSaveModalImgSrc &&
                                              e.getBusDiTuiWin(),
                                            60 == t.data.orderState &&
                                              e.getSubscribeInfo(),
                                            e.state.isDTSource ||
                                              "dt" == w.default.jetpack ||
                                              e.getTravelCouponActivityInfo();
                                          var n =
                                            -1 !==
                                            e.state.utmSource.indexOf(mt);
                                          e.state.isDTSource ||
                                            n ||
                                            e.getBlindBoxActivityData();
                                        }
                                      }
                                    ),
                                    e.checkIsShowGuideModal(),
                                    e.timePointer)
                                  )
                                    return clearTimeout(e.timePointer);
                                  "购票中" == t.data.orderStateDesc &&
                                    (e.timePointer = setTimeout(function () {
                                      return e.getOrderDetail();
                                    }, 1e3));
                                }
                              } else
                                g().showToast({
                                  title: t.message,
                                  icon: "none",
                                  duration: 2e3,
                                  success: function () {
                                    setTimeout(function () {
                                      g().reLaunch({
                                        url: "/pages/myctrip/list/list?orderType=bus",
                                      });
                                    }, 1e3);
                                  },
                                });
                            })
                            .catch(function () {
                              g().showToast({
                                title: "获取订单详情失败",
                                icon: "none",
                                duration: 2e3,
                              });
                            })
                            .finally(function () {
                              e.isRefresh &&
                                g().stopPullDownRefresh({
                                  complete: function () {
                                    e.isRefresh = !1;
                                  },
                                });
                            });
                        },
                      },
                      {
                        key: "handleOrderOperationData",
                        value: function (e) {
                          var t = this;
                          return (e.orderDetailOperationList || [])
                            .map(function (i) {
                              var n = i;
                              switch (i.operationCode) {
                                case "Pay":
                                  n = (0, s.Z)(
                                    (0, s.Z)({}, i),
                                    {},
                                    {
                                      showType: "warn",
                                      func: t.payOrder.bind(t),
                                      timeLeft:
                                        t.formatSecond(
                                          e.orderPayRemainSecond
                                        ) || null,
                                    }
                                  );
                                  break;
                                case "Cancel":
                                  n = (0, s.Z)(
                                    (0, s.Z)({}, i),
                                    {},
                                    {
                                      showType: "normal",
                                      func: t.cancelOrder.bind(t),
                                    }
                                  );
                                  break;
                                case "Re_Buy":
                                  n = (0, s.Z)(
                                    (0, s.Z)({}, i),
                                    {},
                                    {
                                      showType: "third",
                                      func: t.repurchaseTicket.bind(t),
                                    }
                                  );
                                  break;
                                case "CALL_OUT":
                                  n = (0, s.Z)(
                                    (0, s.Z)({}, i),
                                    {},
                                    {
                                      showType: "warn",
                                      func: t.remindTicketOut.bind(t),
                                    }
                                  );
                                  break;
                                case "CALLED_OUT":
                                  n = (0, s.Z)(
                                    (0, s.Z)({}, i),
                                    {},
                                    {
                                      showType: "secondary",
                                      func: function () {},
                                    }
                                  );
                                  break;
                                case "BACK_TRIP":
                                  n = (0, s.Z)(
                                    (0, s.Z)({}, i),
                                    {},
                                    {
                                      showType: "third",
                                      func: t.goBackTrip.bind(t),
                                    }
                                  );
                                  break;
                                case "CANCEL_OCCUPY":
                                  n = (0, s.Z)(
                                    (0, s.Z)({}, i),
                                    {},
                                    {
                                      showType: "fourth",
                                      func: t.cancelOrder.bind(t),
                                    }
                                  );
                                  break;
                                case "PURCHASE_PRODUCT":
                                  n = (0, s.Z)(
                                    (0, s.Z)({}, i),
                                    {},
                                    {
                                      showType: "fifth",
                                      func: t.purchaseOrder.bind(t),
                                    }
                                  );
                                  break;
                                default:
                                  return;
                              }
                              return n;
                            })
                            .filter(function (e) {
                              return !!e;
                            });
                        },
                      },
                      {
                        key: "goBackTrip",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              var t;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        this.doBusNewTraceInfoV2(
                                          {
                                            bizKey:
                                              "detail_return_button_click",
                                            comment:
                                              "订单详情页-底部返程按钮点击",
                                            clickType: y.uh.confirmClick,
                                          },
                                          2
                                        );
                                        try {
                                          (t = Z()(
                                            this.state.ticketInfo.fromDate
                                          )
                                            .add(1, "day")
                                            .isBefore(Z()())
                                            ? Z()().format("YYYY-MM-DD")
                                            : Z()(
                                                this.state.ticketInfo.fromDate
                                              )
                                                .add(1, "day")
                                                .format("YYYY-MM-DD")),
                                            this.handleShowCalendarDrawer(
                                              t,
                                              t,
                                              J
                                            );
                                        } catch (e) {
                                          (0, T.showToast)(
                                            "网络错误，请稍后重试哦~"
                                          );
                                        }
                                      case 2:
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
                        key: "cancelOrder",
                        value: function () {
                          var e = this,
                            t = this.orderNumber;
                          this.showConfirmPormise("确定要取消订单吗？").then(
                            function () {
                              (0, T.showLoading)("正在取消订单"),
                                (0, K.FH)({ orderNumber: t }).then(function (
                                  t
                                ) {
                                  (0, T.hideLoading)(),
                                    1 == t.code
                                      ? (g().showToast({
                                          title: "取消订单成功",
                                          icon: "success",
                                          duration: 2e3,
                                        }),
                                        e.getOrderDetail())
                                      : g().showToast({
                                          title: "取消订单失败",
                                          icon: "none",
                                          duration: 2e3,
                                        });
                                });
                            },
                            function () {
                              (0, T.hideLoading)(),
                                g().showToast({
                                  title: "已取消操作",
                                  icon: "error",
                                  duration: 2e3,
                                });
                            }
                          );
                        },
                      },
                      {
                        key: "remindTicketOut",
                        value: function () {
                          var e = this,
                            t = this.state.orderInfo,
                            i = this.orderNumber;
                          (0, K.hD)({
                            orderNumber: i,
                            fromDateTime: t.ticketInfo.fromDateTime,
                          }).then(function (t) {
                            t.data
                              ? g().showToast({
                                  title: "已为您催促供应商尽快出票",
                                  icon: "success",
                                  duration: 2e3,
                                  complete: function () {
                                    return e.getOrderDetail();
                                  },
                                })
                              : g().showToast({
                                  title: t.message || "请稍后重试",
                                  duration: 2e3,
                                  complete: function () {
                                    return e.getOrderDetail();
                                  },
                                });
                          });
                        },
                      },
                      {
                        key: "payOrder",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                o,
                                c = this;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = this.orderNumber),
                                          (e.prev = 1),
                                          (n = this.state.orderSource),
                                          (e.next = 5),
                                          (0, _.WS)({
                                            orderNumber: t,
                                            paymentChannel: y.T2,
                                            utmSource: n,
                                          })
                                        );
                                      case 5:
                                        null != (o = e.sent) &&
                                          null !== (i = o.data.evokeCashier) &&
                                          void 0 !== i &&
                                          i.goodsId &&
                                          (0, b.VQ)({
                                            orderNumber: t,
                                            goodsId:
                                              o.data.evokeCashier.goodsId,
                                            business: "bus",
                                            isBusDTStationWithOutLoginSource:
                                              !S.ZP.isLogin,
                                          })
                                            .then(function () {
                                              c.getOrderDetail(),
                                                c.getActivityEntrencyInfo();
                                            })
                                            .catch(function (e) {
                                              (0,
                                              T.showToast)((null == e ? void 0 : e.message) || "支付失败");
                                            }),
                                          (e.next = 12);
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0);
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 9]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "repurchaseTicket",
                        value: function () {
                          var e = this.state.orderInfo.ticketInfo,
                            t = e.fromCity,
                            i = e.toCity,
                            n = e.fromStation,
                            o = e.toStation,
                            a = e.fromDateTime,
                            c = Z()(a),
                            s = Z()();
                          Z()(c).isBefore(Z()(), "day") && (c = s);
                          var r = "/pages/bus/list/list?date="
                            .concat(Z()(c).format("YYYY-MM-DD"), "&tabType=")
                            .concat(
                              1 !== this.state.orderInfo.productLineCode
                                ? "scenicArea"
                                : "",
                              "&fromCity="
                            )
                            .concat(t, "&toCity=")
                            .concat(i, "&fromStation=")
                            .concat(n, "&toStation=")
                            .concat(o, "&sourceId=")
                            .concat(this.sourceId);
                          this.navigateTo({ url: r });
                        },
                      },
                      {
                        key: "purchaseOrder",
                        value: function () {
                          var e = this;
                          this.showConfirmPormise("确认现在出票吗？").then(
                            function () {
                              (0, T.showLoading)("出票中"),
                                (0, K.tN)({ orderNumber: e.orderNumber })
                                  .then(function (t) {
                                    1 == t.code
                                      ? e.getOrderDetail()
                                      : g().showToast({
                                          title: "操作失败，请稍后再试~",
                                          icon: "none",
                                          duration: 2e3,
                                        });
                                  })
                                  .finally(function () {
                                    (0, T.hideLoading)();
                                  });
                            },
                            function () {
                              (0, T.hideLoading)();
                            }
                          );
                        },
                      },
                      {
                        key: "getReturnTicketInfo",
                        value: function (e) {
                          return (0, K.vl)(e).then(function (e) {
                            if (1 == e.code) return e;
                          });
                        },
                      },
                      {
                        key: "onConfirmPassengerSelect",
                        value: function () {
                          var e = this,
                            t = this.state.passengerModalInfo,
                            i = this.orderNumber,
                            n = [],
                            o = t.filter(function (e) {
                              return e.supportRefundTicket;
                            });
                          if (
                            (o.length > 0 &&
                              o
                                .filter(function (e) {
                                  return e.isActive;
                                })
                                .forEach(function (e) {
                                  n.push(e.ticketIdx.toString());
                                }),
                            0 === n.length)
                          )
                            return g().showModal({
                              title: "提示",
                              content: "至少选择一名退票乘客",
                              showCancel: !1,
                            });
                          this.getReturnTicketInfo({
                            orderNumber: i,
                            ticketId: n,
                          }).then(function (t) {
                            var i;
                            null == t ||
                              null === (i = t.refundDetail) ||
                              void 0 === i ||
                              i.forEach(function (e) {
                                2 === (null == e ? void 0 : e.type) &&
                                  (e.isSelect = !0);
                              }),
                              e.setState(
                                {
                                  refundModalInfo: t,
                                  selectTicketIdList: n,
                                  isPassengerModalShow: !1,
                                },
                                function () {
                                  e.setState({ isRefundModalShow: !0 });
                                }
                              );
                          });
                        },
                      },
                      {
                        key: "onConfirmRefundTicket",
                        value: function () {
                          var e,
                            t,
                            i,
                            n = this,
                            o = this.state,
                            a = o.selectTicketIdList,
                            c = o.refundModalInfo,
                            s = this.orderNumber;
                          (0, K.VP)({
                            orderNumber: s,
                            ticketId: a,
                            insuranceIdx:
                              (null == c ||
                              null === (e = c.refundDetail) ||
                              void 0 === e ||
                              null ===
                                (t = e.filter(function (e) {
                                  return e.isSelect && 2 === e.type;
                                })) ||
                              void 0 === t ||
                              null === (i = t[0]) ||
                              void 0 === i
                                ? void 0
                                : i.insuranceIdx) || [],
                          }).then(function (e) {
                            setTimeout(function () {
                              return n.getOrderDetail();
                            }, 1e3),
                              n.setState({ isRefundModalShow: !1 }),
                              1 == e.code
                                ? g().showToast({
                                    title: e.message,
                                    icon: "success",
                                    duration: 2e3,
                                  })
                                : g().showModal({
                                    title: "提示",
                                    content: e.message || "网络错误",
                                    showCancel: !1,
                                  });
                          });
                        },
                      },
                      {
                        key: "onCancelRefundTicket",
                        value: function () {
                          this.setState({
                            isRefundModalShow: !1,
                            passengerModalInfo: [],
                          });
                        },
                      },
                      {
                        key: "onClickTicketRefundBtn",
                        value: function () {
                          var e = this;
                          this.doBusTraceInfo("returnIcon", "“退票”按钮");
                          var t = this.state,
                            i = t.ticketInfo,
                            n = t.orderInfo,
                            o = this.orderNumber,
                            a =
                              (i.ticketFetchAndCheckInfo || {})
                                .ticketItemList || [],
                            c = [],
                            r = 0;
                          n.returnByTicket,
                            (c = a
                              .filter(function (e) {
                                return e.supportRefundTicket;
                              })
                              .map(function (e) {
                                return (0,
                                s.Z)((0, s.Z)({}, e), {}, { isActive: !0 });
                              }));
                          var l = a.filter(function (e) {
                            return e.supportRefundTicket;
                          });
                          if (
                            (l.forEach(function (e) {
                              r += e.passengerList.length;
                            }),
                            1 === r)
                          ) {
                            var d = [l[0].ticketIdx.toString()];
                            this.getReturnTicketInfo({
                              orderNumber: o,
                              ticketId: d,
                            }).then(function (t) {
                              var i;
                              null == t ||
                                null === (i = t.refundDetail) ||
                                void 0 === i ||
                                i.forEach(function (e) {
                                  2 === (null == e ? void 0 : e.type) &&
                                    (e.isSelect = !0);
                                }),
                                e.setState(
                                  { refundModalInfo: t, selectTicketIdList: d },
                                  function () {
                                    e.setState({ isRefundModalShow: !0 });
                                  }
                                );
                            });
                          } else
                            this.setState(
                              { isPassengerModalShow: !0 },
                              function () {
                                e.setState({ passengerModalInfo: c });
                              }
                            );
                        },
                      },
                      {
                        key: "onSelectPassenger",
                        value: function (e) {
                          var t = this.state,
                            i = t.passengerModalInfo;
                          if (t.orderInfo.returnByTicket) {
                            var n = i.map(function (t) {
                              return e.ticketIdx == t.ticketIdx
                                ? (0, s.Z)(
                                    (0, s.Z)({}, t),
                                    {},
                                    { isActive: !t.isActive }
                                  )
                                : t;
                            });
                            this.setState({
                              passengerModalInfo: JSON.parse(JSON.stringify(n)),
                            });
                          }
                        },
                      },
                      {
                        key: "getActivityEntrencyInfo",
                        value: function () {
                          var e = this;
                          return (0, K.AX)({
                            orderNumber: this.orderNumber,
                          }).then(function (t) {
                            1 == t.code &&
                              t.data &&
                              e.setState({ activityEntrenceInfo: t.data });
                          });
                        },
                      },
                      {
                        key: "goToActivityPage",
                        value: function (e) {
                          e && this.navigateTo({ url: e });
                        },
                      },
                      {
                        key: "goToMapPage",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0;
                          this.doBusNewTraceInfoV2(
                            {
                              bizKey: "map",
                              comment: "车站地图",
                              clickType: y.uh.confirmClick,
                            },
                            2
                          );
                          var t,
                            i,
                            n,
                            o,
                            a = this.state.ticketInfo,
                            c = a && a.backTripInfo;
                          switch (e) {
                            case 0:
                              (t = 1 * a.amapFromStationLat),
                                (i = 1 * a.amapFromStationLng),
                                (n = a.fromStation),
                                (o = a.fromStationAddress);
                              break;
                            case 1:
                              (t = 1 * a.amapToStationLat),
                                (i = 1 * a.amapToStationLng),
                                (n = a.toStation),
                                (o = a.toStationAddress);
                              break;
                            case 2:
                              (t = 1 * c.amapFromStationLat),
                                (i = 1 * c.amapFromStationLng),
                                (n = c.fromStation),
                                (o = c.fromStationAddress);
                              break;
                            case 3:
                              (t = 1 * c.amapToStationLat),
                                (i = 1 * c.amapToStationLng),
                                (n = c.toStation),
                                (o = c.toStationAddress);
                          }
                          g().openLocation({
                            latitude: t,
                            longitude: i,
                            name: n,
                            address: o,
                            scale: 18,
                          });
                        },
                      },
                      {
                        key: "onPreviewImage",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1],
                            i =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : "",
                            n = e.url,
                            o = e.type,
                            a = void 0 === o ? 0 : o,
                            c = n.indexOf("http") > -1,
                            s = String(n).replace(/[\r\n]/g, ""),
                            r = c ? n : "data:image/png;base64,".concat(s);
                          this.doBusTraceInfo(
                            1 == a ? "scanTktCode" : "takeTktCode",
                            1 == a ? "检票二维码" : "取票二维码"
                          ),
                            this.setState({
                              isImageModalShow: !0,
                              imageNeedRotate: t,
                              imagePreviewTitle: "string" == typeof i ? i : "",
                              currentImageUrl: r,
                            });
                        },
                      },
                      {
                        key: "toMakePhone",
                        value: function (e) {
                          g().makePhoneCall({ phoneNumber: e });
                        },
                      },
                      {
                        key: "onImgLoad",
                        value: function () {
                          for (
                            var e = this.state.isQRCodeShowList,
                              t = arguments.length,
                              i = new Array(t),
                              n = 0;
                            n < t;
                            n++
                          )
                            i[n] = arguments[n];
                          var o = i[0].currentTarget.dataset.index;
                          (e[o] = i[0].detail.width / i[0].detail.height == 1),
                            this.setState({
                              isQRCodeShowList: e,
                              isImageLoaded: !0,
                            });
                        },
                      },
                      {
                        key: "onClickFeeDetailIcon",
                        value: function (e) {
                          var t = this;
                          this.setState(
                            (0, m.Z)(
                              {},
                              1 === e
                                ? "isPriceModalShow"
                                : "isRefundModalShow",
                              !1
                            ),
                            function () {
                              t.setState({
                                isNoticeModalShow: !0,
                                noticeModalCurTab: 2,
                              });
                            }
                          );
                        },
                      },
                      {
                        key: "onCloseImageModal",
                        value: function () {
                          this.setState({ isImageModalShow: !1 });
                        },
                      },
                      {
                        key: "onToggleNoticeModal",
                        value: function () {
                          this.state.isNoticeModalShow ||
                            this.doBusTraceInfo(
                              "returnDetail",
                              "退票政策/乘车说明"
                            ),
                            this.setState({
                              isNoticeModalShow: !this.state.isNoticeModalShow,
                              noticeModalCurTab: 1,
                            });
                        },
                      },
                      {
                        key: "onTogglePriceModal",
                        value: function () {
                          this.setState({
                            isPriceModalShow: !this.state.isPriceModalShow,
                          });
                        },
                      },
                      {
                        key: "onTogglePassengerModal",
                        value: function () {
                          this.setState({
                            isPassengerModalShow:
                              !this.state.isPassengerModalShow,
                          });
                        },
                      },
                      {
                        key: "showConfirmPormise",
                        value: function (e) {
                          return new Promise(function (t, i) {
                            g().showModal({
                              title: "提示",
                              content: e,
                              success: function (e) {
                                e.confirm ? t() : e.cancel && i();
                              },
                            });
                          });
                        },
                      },
                      {
                        key: "handleChangeCountDown",
                        value: function (e) {
                          this.setState({ isCountDownShow: e }),
                            this.getOrderDetail();
                        },
                      },
                      {
                        key: "formatSecond",
                        value: function (e) {
                          var t = e,
                            i = Math.floor((t / 3600) % 24),
                            n = Math.floor((t / 60) % 60);
                          return (
                            (t = Math.floor(t % 60) + "秒"),
                            n > 0 && (t = n + "分钟" + t),
                            i > 0 && (t = i + "小时" + t),
                            t
                          );
                        },
                      },
                      {
                        key: "onClickAppendantItem",
                        value: function (e) {
                          this.doBusTraceInfo("addMore", "附加产品信息选购"),
                            this.navigateTo({
                              url: "/pages/bus/insurancedetail/insurancedetail",
                              data: (0, s.Z)(
                                (0, s.Z)({}, e),
                                {},
                                { orderNumber: this.orderNumber }
                              ),
                            }),
                            (this.isFirst = !1);
                        },
                      },
                      {
                        key: "toTrainIndexPage",
                        value: function () {
                          this.doBusTraceInfo("bookTrnRecm", "订火车票"),
                            N.Z.relaunchHome();
                        },
                      },
                      {
                        key: "toPlaneIndexPage",
                        value: function () {
                          this.doBusTraceInfo("bookFltRecm", "订机票"),
                            N.Z.relaunchHome("flight");
                        },
                      },
                      {
                        key: "toHotelIndexPage",
                        value: function () {
                          this.doBusTraceInfo("bookHtlRecm", "订酒店"),
                            N.Z.relaunchHome("hotel");
                        },
                      },
                      {
                        key: "handleTicketNoteModalVisibleCtrl",
                        value: function (e) {
                          this.setState({ isTicketNoteModalShow: !!e });
                        },
                      },
                      {
                        key: "handleTransferStationVisibleCtrl",
                        value: function (e) {
                          this.state.ticketInfo &&
                            this.state.ticketInfo.transferStationNote &&
                            this.setState({ isTransferStationModalShow: !!e });
                        },
                      },
                      {
                        key: "handleSwitchMoreTripInfoOnDitui",
                        value: function () {
                          this.doBusTraceInfo(
                            "showMore",
                            "详情展开页（地推专属）"
                          ),
                            this.setState({
                              isShowMoreDiTuiTripInfo:
                                !this.state.isShowMoreDiTuiTripInfo,
                            });
                        },
                      },
                      {
                        key: "handleHideMpModal",
                        value: function () {
                          this.setState({ isNeedShowMP: !1 });
                          var e = Z()().format("YYYY-MM-DD"),
                            t = X.z5.get() || {};
                          if (t[S.ZP.openid])
                            return (
                              (t[S.ZP.openid].lastShowDay = e),
                              (t[S.ZP.openid].count =
                                (t[S.ZP.openid].count || 0) + 1),
                              void X.z5.set(t)
                            );
                          (t[S.ZP.openid] = { lastShowDay: e, count: 1 }),
                            X.z5.set(t);
                        },
                      },
                      {
                        key: "handleHideYLBSaveModal",
                        value: function () {
                          this.doBusTraceInfo(
                            "yilabaoClose",
                            "电子易拉宝保存弹窗“X”按钮（关闭按钮）"
                          ),
                            this.setState({ isShowYLBSaveModal: !1 });
                        },
                      },
                      {
                        key: "goToSocialGroupActivity",
                        value: function () {
                          this.doBusTraceInfo("chatIcon", "进福利群浮标"),
                            g().navigateTo({
                              url: this.state.socialGroupBannerInfo.url,
                            });
                        },
                      },
                      {
                        key: "getHotelEntryCompProps",
                        value: function () {
                          return this.state.ticketInfo &&
                            Object.keys(this.state.ticketInfo).length
                            ? {
                                cityId: 0,
                                cityName: this.state.ticketInfo.toCity,
                                orderNumber: this.orderNumber,
                                departStation:
                                  this.state.ticketInfo.fromStation,
                                departCity: this.state.ticketInfo.fromCity,
                                arrivalStation: this.state.ticketInfo.toStation,
                                arrivalCity: this.state.ticketInfo.toCity,
                                intlArrival: 0,
                                departTime: this.state.ticketInfo.fromDate,
                                arrivalTime:
                                  this.state.ticketInfo.toDate ||
                                  this.state.ticketInfo.fromDate,
                                pageSource: "bus_order_detail",
                                checkInDate: Z()(
                                  this.state.ticketInfo.toDate ||
                                    this.state.ticketInfo.fromDate
                                ).format("YYYY-MM-DD"),
                                checkOutDate: Z()(
                                  this.state.ticketInfo.toDate ||
                                    this.state.ticketInfo.fromDate
                                )
                                  .add(1, "day")
                                  .format("YYYY-MM-DD"),
                              }
                            : {};
                        },
                      },
                      {
                        key: "onSubscribeModalInfoSuccess",
                        value: function () {
                          this.hideSubscribeModal();
                        },
                      },
                      {
                        key: "hideSubscribeModal",
                        value: function () {
                          var e = this;
                          this.setState(
                            { showSubScribeModal: !1 },
                            function () {
                              e.setModalVisibleStatus(at, !1);
                            }
                          );
                        },
                      },
                      {
                        key: "setModalVisibleStatus",
                        value: function (e, t) {
                          var i;
                          null === (i = this.state.modalCtrl) ||
                            void 0 === i ||
                            i.setModalVisibleStatus(e, t);
                        },
                      },
                      {
                        key: "checkAlbumAuthPromise",
                        value: function () {
                          return new Promise(function (e, t) {
                            g().getSetting({
                              success: function (i) {
                                i.authSetting["scope.writePhotosAlbum"]
                                  ? e()
                                  : g().authorize({
                                      scope: "scope.writePhotosAlbum",
                                      success: function () {
                                        e();
                                      },
                                      fail: function () {
                                        t();
                                      },
                                    });
                              },
                            });
                          });
                        },
                      },
                      {
                        key: "handleSaveYlbPic",
                        value: function (e) {
                          var t = this;
                          e.stopPropagation(),
                            this.doBusTraceInfo(
                              "yilabaoSave",
                              "电子易拉宝保存按钮"
                            );
                          var i = this.state.YlbSaveModalImgSrc;
                          if (i) {
                            var n = this.removeBase64Prefix(i);
                            n
                              ? this.checkAlbumAuthPromise().then(
                                  function () {
                                    var e = wx.getFileSystemManager(),
                                      i = wx.env.USER_DATA_PATH + "/poster.png";
                                    e.writeFile({
                                      filePath: i,
                                      data: n,
                                      encoding: "base64",
                                      success: function () {
                                        g().saveImageToPhotosAlbum({
                                          filePath: i,
                                          success: function () {
                                            g().showToast({
                                              title: "已保存到相册",
                                            }),
                                              t.setState({
                                                isShowYLBSaveModal: !1,
                                              });
                                          },
                                          fail: function (e) {
                                            console.log(
                                              "saveImageToPhotosAlbum err:",
                                              e
                                            ),
                                              g().showToast({
                                                title: "图片保存失败, 请重试",
                                                icon: "none",
                                              });
                                          },
                                        });
                                      },
                                      fail: function (e) {
                                        console.log("writeFile err:", e);
                                      },
                                      complete: function () {
                                        (0, T.hideLoading)();
                                      },
                                    });
                                  },
                                  function () {
                                    return g().showModal({
                                      title: "授权失败",
                                      content:
                                        "请在小程序设置界面（「右上角」-「设置」）中打开「保存到相册」",
                                      confirmText: "去设置",
                                      cancelText: "取消",
                                      success: function (e) {
                                        e.confirm &&
                                          g().openSetting({
                                            success: function (e) {
                                              e.authSetting[
                                                "scope.writePhotosAlbum"
                                              ] && t.handleSaveYlbPic();
                                            },
                                          });
                                      },
                                    });
                                  }
                                )
                              : g().showToast({
                                  title: "图片异常, 请重试",
                                  icon: "none",
                                });
                          } else this.setState({ isShowYLBSaveModal: !1 });
                        },
                      },
                      {
                        key: "removeBase64Prefix",
                        value: function (e) {
                          if (!e) return !1;
                          var t = "base64,",
                            i = e.indexOf(t);
                          return -1 !== i && e.slice(i + t.length);
                        },
                      },
                      {
                        key: "onYlbImgLoad",
                        value: function (e) {
                          var t = this;
                          try {
                            var i = e.detail,
                              n = i.width,
                              o = i.height;
                            g()
                              .createSelectorQuery()
                              .selectAll(".haibao-box")
                              .boundingClientRect(function (e) {
                                t.setState({
                                  closeBtnRightPx:
                                    (e[0].width - (n * e[0].height) / o) / 2,
                                });
                              })
                              .exec();
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "checkDiTuiCouponModal",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        this.setState({
                                          isShowDtNewGuestCouponPushComp:
                                            this.state.isOrderFromDiTuiSource,
                                        });
                                      case 1:
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
                        key: "onCouponGiftsAfterConsumeVisibleChange",
                        value: function (e) {
                          this.setModalVisibleStatus(ot, !!e);
                        },
                      },
                      {
                        key: "onTouchMove",
                        value: function () {
                          this.setState({ isTouchingMove: !0 });
                        },
                      },
                      {
                        key: "onTouchEnd",
                        value: function () {
                          this.setState({ isTouchingMove: !1 });
                        },
                      },
                      {
                        key: "onRecommendCrossModalVisibleChange",
                        value: function (e) {
                          this.setModalVisibleStatus(ct, !!e);
                        },
                      },
                      {
                        key: "onFreeEachOrderModalVisibleChange",
                        value: function (e) {
                          this.setModalVisibleStatus(st, !!e);
                        },
                      },
                      {
                        key: "onLotteryFreeOrderChange",
                        value: function (e) {
                          this.setModalVisibleStatus(rt, !!e);
                        },
                      },
                      {
                        key: "getTravelCouponActivityInfo",
                        value: function () {
                          var e = this;
                          (0, K.O9)({
                            brand:
                              "zx" == w.default.jetpack
                                ? "zhixing"
                                : "ty" == w.default.jetpack
                                ? "tieyou"
                                : "",
                            orderNumber: this.orderNumber,
                          }).then(function (t) {
                            var i = null;
                            1 === (null == t ? void 0 : t.code) &&
                              null != t &&
                              t.data &&
                              (i = t.data),
                              e.setState({ travelCouponActivityInfo: i });
                          });
                        },
                      },
                      {
                        key: "doShowTravelDiscountActivityRuleDrawer",
                        value: function () {
                          this.setState({
                            showTravelDiscountActivityDrawer: !0,
                          });
                        },
                      },
                      {
                        key: "closeTravelDiscountActivityRuleDrawer",
                        value: function () {
                          this.setState({
                            showTravelDiscountActivityDrawer: !1,
                          });
                        },
                      },
                      {
                        key: "receiveTravelAward",
                        value: function () {
                          var e = this;
                          this.doBusNewTraceInfo({
                            typeSnd: "orderdetail_twoorder_coupons_click",
                            comment: "两单完成后‘立即领取’点击",
                          }),
                            (0, K.lw)({
                              brand:
                                "zx" == w.default.jetpack
                                  ? "zhixing"
                                  : "ty" == w.default.jetpack
                                  ? "tieyou"
                                  : "",
                              orderNumber: parseInt(this.orderNumber),
                            }).then(function (t) {
                              var i;
                              1 === (null == t ? void 0 : t.code) &&
                                (e.setState({ isReceivedTravelAward: !0 }),
                                (null === (i = t.data) || void 0 === i
                                  ? void 0
                                  : i.msg) && (0, T.showToast)(t.data.msg));
                            });
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          return (
                            (0, _.Nl)({ type: "1" })
                              .then(function (e) {
                                1 === (null == e ? void 0 : e.code) &&
                                  console.log("Receive random coupon success!");
                              })
                              .catch(function (e) {
                                console.log(
                                  "Receive random coupon failed: ",
                                  e
                                );
                              }),
                            {
                              bu: "bus",
                              path: "/pages/home/index?tab=bus&fromSource=bus_order_detail",
                              imageUrl:
                                "https://pages.c-ctrip.com/bus-images/zhixing/banner/".concat(
                                  w.default.isTieyou ? "tyhyfxt" : "xcxfxt",
                                  "@3x.png"
                                ),
                            }
                          );
                        },
                      },
                      {
                        key: "checkIsShowGuideModal",
                        value: function () {
                          var e,
                            t =
                              null ===
                                (e = (0, p.getCurrentInstance)().router) ||
                              void 0 === e
                                ? void 0
                                : e.params,
                            i = -1 !== this.state.orderSource.indexOf(mt),
                            n =
                              "zx" === w.default.jetpack ||
                              "ty" === w.default.jetpack ||
                              "dt" === w.default.jetpack;
                          if (
                            1 == (null == t ? void 0 : t.isNeedShowMP) ||
                            (i && n)
                          ) {
                            var o = X.z5.get();
                            if (!o || !o[S.ZP.openid])
                              return void this.setState({ isNeedShowMP: !0 });
                            if (o[S.ZP.openid]) {
                              var a = o[S.ZP.openid],
                                c = a.lastShowDay,
                                s = a.count || 0;
                              c !== Z()().format("YYYY-MM-DD") &&
                                s < 3 &&
                                this.setState({ isNeedShowMP: !0 });
                            }
                          }
                        },
                      },
                      {
                        key: "handleHoldingSeatTimeout",
                        value: function () {
                          this.getOrderDetail();
                        },
                      },
                      {
                        key: "getBlindBoxActivityData",
                        value: function () {
                          var e = this;
                          (0, K._U)({
                            orderNumber: this.orderNumber,
                            callback: !1,
                          }).then(function (t) {
                            var i;
                            1 === (null == t ? void 0 : t.code) &&
                              e.setState(
                                {
                                  blindBoxActivityData: t.data,
                                  isShowBlindBoxModal:
                                    null === (i = t.data) || void 0 === i
                                      ? void 0
                                      : i.showW,
                                },
                                function () {
                                  e.setModalVisibleStatus(
                                    dt,
                                    e.state.isShowBlindBoxModal
                                  );
                                }
                              );
                          });
                        },
                      },
                      {
                        key: "closeBlindBoxModal",
                        value: function () {
                          this.setState({ isShowBlindBoxModal: !1 }),
                            this.setModalVisibleStatus(dt, !1);
                        },
                      },
                      {
                        key: "saveBlindBoxModalStatus",
                        value: function () {
                          (0, K._U)({
                            orderNumber: this.orderNumber,
                            callback: !0,
                          }).then(function (e) {
                            console.log("盲盒弹窗已展示", e);
                          });
                        },
                      },
                      {
                        key: "getQWBannerInfo",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.orderInfo;
                          if (t.isOrderFromDiTuiSource && w.default.isWechat) {
                            var n = {
                              orderState: i.orderState,
                              fromPage: "orderDetail",
                              pageKey: "1111",
                              source: y.Rb.DT_BENEFITS,
                            };
                            (0, _.W9)(n)
                              .then(function (t) {
                                var i;
                                1 === t.code &&
                                  (e.setState({ qWBannerInfo: t.data }),
                                  e.doBusNewTraceInfoV2(
                                    {
                                      exposureType: "normal",
                                      bizKey: "order_detail_chatIcon_bottom",
                                      comment: "订单详情页【私域进群模块】按钮",
                                    },
                                    1
                                  ),
                                  null !== (i = t.data) &&
                                    void 0 !== i &&
                                    i.imageUrl &&
                                    e.doBusNewTraceInfoV2(
                                      {
                                        exposureType: "actionbar",
                                        bizKey: "order_detail_chatIcon_top",
                                        comment: "订单详情页【进群领红包】按钮",
                                      },
                                      1
                                    ));
                              })
                              .catch(function () {
                                e.setState({ qWBannerInfo: "" });
                              });
                          }
                        },
                      },
                      {
                        key: "onQWBannerClick",
                        value: function () {
                          this.doBusNewTraceInfoV2(
                            {
                              bizKey: "order_detail_chatIcon_bottom",
                              comment: "订单详情页【私域进群模块】按钮",
                              clickType: y.uh.confirmClick,
                            },
                            2
                          );
                          var e = this.state.qWBannerInfo;
                          null != e && e.url && N.Z.commonNavigator(e.url);
                        },
                      },
                      {
                        key: "onQWActionBarClick",
                        value: function () {
                          this.doBusNewTraceInfoV2(
                            {
                              bizKey: "order_detail_chatIcon_top",
                              comment: "订单详情页【进群领红包】按钮",
                              clickType: y.uh.confirmClick,
                            },
                            2
                          );
                          var e = this.state.qWBannerInfo;
                          null != e && e.url && N.Z.commonNavigator(e.url);
                        },
                      },
                      {
                        key: "handleShowCalendarDrawer",
                        value: function (e, t, i) {
                          var n = Z()()
                            .add(y.J8 - 1, "day")
                            .format("YYYY-MM-DD");
                          this.setState({
                            isShowCalendar: !0,
                            dateInfo: {
                              chooseDate: e,
                              beginDate: t,
                              endDate: n,
                            },
                            openCalendarDrawerSource: i,
                          });
                        },
                      },
                      {
                        key: "changeDate",
                        value: function (e) {
                          if (e)
                            switch (
                              (this.closeCalendarDrawer(),
                              this.state.openCalendarDrawerSource)
                            ) {
                              case J:
                                var t = this.state,
                                  i = t.isOrderFromDiTuiSource,
                                  n = t.isOrderFromStationScanSource,
                                  o = this.state.ticketInfo,
                                  a = o.fromCity,
                                  c = void 0 === a ? "" : a,
                                  s = o.toCity,
                                  r = void 0 === s ? "" : s,
                                  l = (this.state.orderInfo || {})
                                    .productLineCode,
                                  d = "/pages/bus/list/list?date="
                                    .concat(
                                      e ||
                                        Z()()
                                          .add(1, "day")
                                          .format("YYYY-MM-DD"),
                                      "&fromCity="
                                    )
                                    .concat(r, "&toCity=")
                                    .concat(c, "&tabType=")
                                    .concat(
                                      1 === l ? "" : "scenicArea",
                                      "&sourceId="
                                    )
                                    .concat(this.sourceId),
                                  u = i || n ? be : Se;
                                L.Z.setUnionData(u),
                                  this.navigateTo({ url: d });
                                break;
                              case $:
                                this.setState({ selectedBackTripDate: e });
                            }
                        },
                      },
                      {
                        key: "closeCalendarDrawer",
                        value: function () {
                          this.setState({ isShowCalendar: !1 });
                        },
                      },
                      { key: "noop", value: function () {} },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            i,
                            n,
                            o,
                            a,
                            c,
                            s,
                            r,
                            l = this,
                            d = this.state,
                            u = d.isWechat,
                            h = d.isTieyou,
                            m = d.ticketInfo,
                            f = d.noticeInfo,
                            g = d.orderInfo,
                            v = d.isNoticeModalShow,
                            b = d.isPriceModalShow,
                            S = d.isPassengerModalShow,
                            y = d.isRefundModalShow,
                            T = d.operationList,
                            I = d.passengerModalInfo,
                            Z = d.refundModalInfo,
                            C = d.isCountDownShow,
                            x = d.isImageModalShow,
                            V = d.currentImageUrl,
                            B = d.isQRCodeShowList,
                            L = d.isImageLoaded,
                            _ = d.noticeModalCurTab,
                            X = d.imageNeedRotate,
                            F = d.activityEntrenceInfo,
                            O = d.isTicketNoteModalShow,
                            z = d.isTransferStationModalShow,
                            Y = d.isShowMoreDiTuiTripInfo,
                            E = d.isNeedShowMP,
                            Q = d.isOrderFromDiTuiSource,
                            K = d.isSpecialTicket,
                            q = d.socialGroupBannerInfo,
                            G = d.imagePreviewTitle,
                            J = d.showSubScribeModal,
                            $ = d.subscribeModalInfo,
                            ne = d.YlbSaveModalImgSrc,
                            oe = d.isShowYLBSaveModal,
                            ae = d.closeBtnRightPx,
                            ce = d.isOrderFromStationScanSource,
                            se = d.dtStationScanPackage,
                            re = d.isShowDtStationScanPackageRefundDetainModal,
                            le = d.isShowDtNewGuestCouponPushComp,
                            de = d.refreshNoticeParams,
                            he = d.modalCtrl,
                            me = d.isTouchingMove,
                            fe = d.isDTSource,
                            pe = d.utmSource,
                            ge = d.redPacketData,
                            we = d.travelCouponActivityInfo,
                            be = d.showTravelDiscountActivityDrawer,
                            Se = d.isReceivedTravelAward,
                            Te = d.shareBannerInfo,
                            Ze = d.holdingSeatTips,
                            Ce = d.holdingSeatEndTime,
                            xe = d.blindBoxActivityData,
                            Ae = d.isShowBlindBoxModal,
                            Ue = d.qWBannerInfo,
                            et = d.isShowCalendar,
                            tt = d.dateInfo,
                            it = d.selectedBackTripDate,
                            ut = T.filter(function (e) {
                              return ht.includes(e.operationCode);
                            }),
                            mt = ut.length > 0,
                            ft = (Q || ce) && !!g.xcxBackLine,
                            pt =
                              1 * g.orderState == 60 &&
                              Q &&
                              1 === g.productLineCode,
                            gt = pt && !Y,
                            kt = ce,
                            vt = ce,
                            wt = u,
                            bt = !g.passengerNum,
                            St = ce || Q,
                            yt = ce,
                            Nt = 1 === g.productLineCode;
                          return (0, D.BX)(k.View, {
                            className: "".concat(
                              h ? "ty" : "zx",
                              " order book-order-page"
                            ),
                            onTouchMove: this.onTouchMove.bind(this),
                            onTouchEnd: this.onTouchEnd.bind(this),
                            children: [
                              (0, D.BX)(k.View, {
                                className: "detail-content ".concat(
                                  mt ? "with-btm-layer" : ""
                                ),
                                children: [
                                  (0, D.tZ)(k.View, {
                                    className: "order-background",
                                  }),
                                  (0, D.BX)(k.View, {
                                    className: "order-content",
                                    children: [
                                      (0, D.tZ)(je, {
                                        orderInfo: g,
                                        ticketInfo: m,
                                        operationList: T,
                                        holdingSeatEndTime: Ce,
                                        isCountDownShow: C,
                                        handleHoldingSeatTimeout:
                                          this.handleHoldingSeatTimeout.bind(
                                            this
                                          ),
                                        onTogglePriceModal:
                                          this.onTogglePriceModal.bind(this),
                                        handleChangeCountDown:
                                          this.handleChangeCountDown.bind(this),
                                      }),
                                      !!de &&
                                        (0, D.tZ)(A.Z, {
                                          isFromOrderDetail: !0,
                                          refreshNoticeParams: de,
                                        }),
                                      !w.default.isH5Hzbm &&
                                        !w.default.isAlipay &&
                                        (0, D.tZ)(Ie, {
                                          orderInfo: g,
                                          allowedShow:
                                            null == he
                                              ? void 0
                                              : he.itCanVisible(rt),
                                          onMCVisibleChange:
                                            this.onLotteryFreeOrderChange.bind(
                                              this
                                            ),
                                          doBusTraceInfo:
                                            this.doBusNewTraceInfo.bind(this),
                                          utmSource: pe,
                                        }),
                                      !Nt &&
                                        m &&
                                        Object.keys(m).length > 0 &&
                                        (0, D.BX)(k.View, {
                                          className: "order-content-v1",
                                          children: [
                                            Ze &&
                                              (0, D.tZ)(Pe, { tipsInfo: Ze }),
                                            (0, D.tZ)(Ke, {
                                              holdingSeatTips: Ze,
                                              isOrderFromStationScanSource: ce,
                                              isTieyou: h,
                                              ticketInfo: m,
                                              orderInfo: g,
                                              isOrderFromDiTuiSource: Q,
                                              onToggleNoticeModal:
                                                this.onToggleNoticeModal.bind(
                                                  this
                                                ),
                                              goToMapPage:
                                                this.goToMapPage.bind(this),
                                              handleTransferStationVisibleCtrl:
                                                this.handleTransferStationVisibleCtrl.bind(
                                                  this
                                                ),
                                            }),
                                          ],
                                        }),
                                      Nt &&
                                        Object.keys(g).length > 0 &&
                                        (0, D.BX)(k.View, {
                                          className: "order-content-v1",
                                          children: [
                                            Ze &&
                                              (0, D.tZ)(Pe, { tipsInfo: Ze }),
                                            (0, D.tZ)(ue, {
                                              orderInfo: g,
                                              sourceId: this.sourceId,
                                              isShowHoldingSeatTips: !!Ze,
                                              onToggleNoticeModal:
                                                this.onToggleNoticeModal,
                                              handleTransferStationVisibleCtrl:
                                                this
                                                  .handleTransferStationVisibleCtrl,
                                              ctrl: {
                                                isHidePassengerInfo: kt,
                                                isHideStationMapInfo: vt,
                                                isSupportPassInfoInPassengerCard:
                                                  bt,
                                                isHideRefundPolicy: St,
                                                isShowRefundTipsOnScanSource:
                                                  yt,
                                              },
                                              onPreviewImage:
                                                this.onPreviewImage,
                                              doBusTraceInfo:
                                                this.doBusTraceInfo.bind(this),
                                              onRefundSuccessCb:
                                                this.initPage.bind(this),
                                            }),
                                          ],
                                        }),
                                      xe &&
                                        xe.showB &&
                                        (0, D.tZ)(Le, {
                                          activityData: xe,
                                          utmSource: this.utmSource,
                                          ubtTrace:
                                            this.doBusNewTraceInfoV2.bind(this),
                                        }),
                                      le &&
                                        (0, D.tZ)(ie.Z, { supportClick: !0 }),
                                      !Nt &&
                                        !pt &&
                                        (null == m ||
                                        null ===
                                          (e = m.ticketFetchAndCheckInfo) ||
                                        void 0 === e
                                          ? void 0
                                          : e.showTripInfo) &&
                                        (0, D.tZ)(qe, {
                                          isTieyou: h,
                                          ticketInfo: m,
                                          isOrderFromDiTuiSource: Q,
                                          isHideTripMasterInfo: gt,
                                          isImageLoaded: L,
                                          isQRCodeShowList: B,
                                          toMakePhone:
                                            this.toMakePhone.bind(this),
                                          onPreviewImage:
                                            this.onPreviewImage.bind(this),
                                          onImgLoad: this.onImgLoad.bind(this),
                                        }),
                                      !Nt &&
                                        !pt &&
                                        m &&
                                        Object.keys(m).length > 0 &&
                                        !gt &&
                                        !kt &&
                                        (0, D.tZ)(Ge, {
                                          isTieyou: h,
                                          ticketInfo: m,
                                          orderInfo: g,
                                          onClickTicketRefundBtn:
                                            this.onClickTicketRefundBtn.bind(
                                              this
                                            ),
                                        }),
                                      Ue &&
                                        (0, D.tZ)(P.Z, {
                                          bannerInfo: Ue,
                                          margin: "margin: 10px 10px 0;",
                                          onBannerClick:
                                            this.onQWBannerClick.bind(this),
                                        }),
                                      (null == Ue ? void 0 : Ue.imageUrl) &&
                                        (0, D.tZ)(k.Image, {
                                          className: "qw-icon ".concat(
                                            me ? "unactive" : "active"
                                          ),
                                          src: Ue.imageUrl,
                                          id: "AdFI",
                                          onClick:
                                            this.onQWActionBarClick.bind(this),
                                        }),
                                      wt &&
                                        (0, D.tZ)(k.View, {
                                          style: "margin:10px 10px 0 10px;",
                                          children: (0, D.tZ)(
                                            k.OfficialAccount,
                                            {
                                              onLoad: function (e) {
                                                console.log(
                                                  "OfficialAccount loadSuccess====>",
                                                  e
                                                );
                                              },
                                              onError: function (e) {
                                                console.log(
                                                  "OfficialAccount loadError====>",
                                                  e
                                                );
                                              },
                                            }
                                          ),
                                        }),
                                      !w.default.isH5Hzbm &&
                                        we &&
                                        (null == we ||
                                        null === (t = we.orders) ||
                                        void 0 === t
                                          ? void 0
                                          : t.length) > 0 &&
                                        !Se &&
                                        (0, D.tZ)(Be.Z, {
                                          fromPage: "orderDetail",
                                          activityData: we,
                                          doReceiveCoupon:
                                            this.receiveTravelAward.bind(this),
                                          doShowRuleDrawer:
                                            this.doShowTravelDiscountActivityRuleDrawer.bind(
                                              this
                                            ),
                                          doUbtTrace:
                                            this.doBusNewTraceInfo.bind(this),
                                        }),
                                      !w.default.isH5Hzbm &&
                                        Te &&
                                        (0, D.tZ)(Me, {
                                          bannerInfo: Te,
                                          doUbtTrace:
                                            this.doBusNewTraceInfo.bind(this),
                                        }),
                                      se &&
                                        (0, D.tZ)(ee, {
                                          couponInfo: se,
                                          onRefund:
                                            this.returnForDTScanSourceCouponPackage.bind(
                                              this
                                            ),
                                        }),
                                      g &&
                                        Object.keys(g).length > 0 &&
                                        60 == g.orderState &&
                                        F &&
                                        Object.keys(F).length > 0 &&
                                        (0, D.tZ)(Qe, {
                                          activityInfo: F,
                                          goToActivityPage:
                                            this.goToActivityPage.bind(this),
                                        }),
                                      !w.default.isH5Hzbm &&
                                        m &&
                                        !!Object.keys(m).length &&
                                        (0, D.tZ)(k.View, {
                                          className: "entry-component",
                                          children: (0, D.tZ)(M, {
                                            data: this.getHotelEntryCompProps(),
                                            pageId: this.pageId,
                                            doBusTraceInfo:
                                              this.doBusTraceInfo.bind(this),
                                          }),
                                        }),
                                      ft &&
                                        (0, D.tZ)(ye, {
                                          orderInfo: g,
                                          sourceId: this.sourceId,
                                          chooseDate: it,
                                          doBusTraceInfo:
                                            this.doBusNewTraceInfoV2.bind(this),
                                          onTimeEnd:
                                            this.getOrderDetail.bind(this),
                                          onShowCalendarDrawer:
                                            this.handleShowCalendarDrawer.bind(
                                              this
                                            ),
                                        }),
                                      (null == g ||
                                      null === (i = g.attachPackageList) ||
                                      void 0 === i
                                        ? void 0
                                        : i.length) > 0 &&
                                        (0, D.tZ)(We, {
                                          productList: g.attachPackageList,
                                          onClickItem:
                                            this.onClickAppendantItem.bind(
                                              this
                                            ),
                                        }),
                                      !w.default.isH5Hzbm &&
                                        1 ===
                                          (null == g
                                            ? void 0
                                            : g.productLineCode) &&
                                        (0, D.tZ)(He, {
                                          isTieyou: h,
                                          gotoTrainIndexPage:
                                            this.toTrainIndexPage.bind(this),
                                          gotoPlaneIndexPage:
                                            this.toPlaneIndexPage.bind(this),
                                          gotoHotelIndexPage:
                                            this.toHotelIndexPage.bind(this),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              !ce &&
                                !!Object.keys(g) &&
                                (0, D.tZ)(Ye, { isTieyou: h }),
                              !Ue &&
                                q &&
                                (0, D.tZ)(k.Image, {
                                  src: q.imageUrl,
                                  className: "social-group-banner",
                                  id: "AdFJ",
                                  onClick:
                                    this.goToSocialGroupActivity.bind(this),
                                }),
                              mt && (0, D.tZ)(Ee, { btnList: ut }),
                              v &&
                                (0, D.tZ)(W.Z, {
                                  visible: v,
                                  info: f,
                                  curtab: _,
                                  onClose: this.onToggleNoticeModal.bind(this),
                                  isSpecialTicket: K,
                                }),
                              (0, D.tZ)(Xe, {
                                isTieyou: h,
                                isShow: b,
                                isIPhoneX: N.Z.isIPhoneX(),
                                orderInfo: g,
                                onTogglePriceModal:
                                  this.onTogglePriceModal.bind(this),
                                onClickFeeDetailIcon:
                                  this.onClickFeeDetailIcon.bind(this),
                              }),
                              (0, D.tZ)($e, {
                                isShow: S,
                                isTieyou: h,
                                isIPhoneX: N.Z.isIPhoneX(),
                                passengerModalInfo: I,
                                orderInfo: g,
                                onTogglePassengerModal:
                                  this.onTogglePassengerModal.bind(this),
                                onSelectPassenger:
                                  this.onSelectPassenger.bind(this),
                                onConfirmPassengerSelect:
                                  this.onConfirmPassengerSelect.bind(this),
                              }),
                              (0, D.tZ)(Je, {
                                isShow: y,
                                isIPhoneX: N.Z.isIPhoneX(),
                                isTieyou: h,
                                refundModalInfo: Z,
                                onCancel: this.onCancelRefundTicket.bind(this),
                                onConfirm:
                                  this.onConfirmRefundTicket.bind(this),
                                onClickFeeDetailIcon:
                                  this.onClickFeeDetailIcon.bind(this),
                                onSelectInsurance: function (e) {
                                  return l.onSelectInsurance(e);
                                },
                              }),
                              (0, D.tZ)(Fe, {
                                isShow: x,
                                imagePreviewTitle: G,
                                isOrderFromDiTuiSource: Q,
                                imageNeedRotate: X,
                                currentImageUrl: V,
                                onClose: this.onCloseImageModal.bind(this),
                              }),
                              m &&
                                m.ticketFetchAndCheckInfo &&
                                (0, D.tZ)(U.Z, {
                                  visible: O,
                                  option: nt,
                                  onClose:
                                    this.handleTicketNoteModalVisibleCtrl.bind(
                                      this,
                                      !1
                                    ),
                                  children: (0, D.BX)(k.View, {
                                    className: "note-model",
                                    children: [
                                      (0, D.tZ)(k.View, {
                                        className: "title",
                                        children: "注意事项",
                                      }),
                                      (0, D.tZ)(k.View, {
                                        className: "note-con",
                                        children:
                                          m.ticketFetchAndCheckInfo.note,
                                      }),
                                      (0, D.tZ)(j.Z, {
                                        btnText: "好的",
                                        type: "fill",
                                        style: {
                                          height: "44px",
                                          fontSize: "16px",
                                          lineHeight: "44px",
                                        },
                                        id: "AdFK",
                                        onClick:
                                          this.handleTicketNoteModalVisibleCtrl.bind(
                                            this,
                                            !1
                                          ),
                                      }),
                                    ],
                                  }),
                                }),
                              m &&
                                (0, D.tZ)(Re, {
                                  isShow: z,
                                  tips: m.transferStationNote,
                                  handleVisibleCtrl:
                                    this.handleTransferStationVisibleCtrl.bind(
                                      this
                                    ),
                                }),
                              u &&
                                E &&
                                (0, D.tZ)(Oe, {
                                  isShow: u && E,
                                  isTieyou: h,
                                  onClose: this.handleHideMpModal.bind(this),
                                }),
                              (0, D.tZ)(H, {
                                show:
                                  J &&
                                  (null == he ? void 0 : he.itCanVisible(at)),
                                info: $,
                                onSuccess:
                                  this.onSubscribeModalInfoSuccess.bind(this),
                                onFail: this.hideSubscribeModal.bind(this),
                                onCancel: this.hideSubscribeModal.bind(this),
                                onProcess: this.hideSubscribeModal.bind(this),
                              }),
                              (0, D.tZ)(ze, {
                                isShow: oe && !!ne,
                                closeBtnRightPx: ae,
                                ylbSaveModalImgSrc: ne,
                                onClose: this.handleHideYLBSaveModal.bind(this),
                                onYlbImgLoad: this.onYlbImgLoad.bind(this),
                                handleSaveYlbPic:
                                  this.handleSaveYlbPic.bind(this),
                              }),
                              (0, D.tZ)(te, {
                                isShow: re,
                                onCancel:
                                  this.onCancelStationScanCouponRefund.bind(
                                    this
                                  ),
                                onSure:
                                  this.onSureStationScanCouponRefund.bind(this),
                                detainInfo: se && se.retainContent,
                              }),
                              !w.default.isH5Hzbm &&
                                (0, D.tZ)(ke, {
                                  ref: function (e) {
                                    return (l.$CouponGiftsAfterConsume = e);
                                  },
                                  isFromBookScene:
                                    1 ==
                                    (null ===
                                      (n = (0, p.getCurrentInstance)()) ||
                                    void 0 === n ||
                                    null === (o = n.router) ||
                                    void 0 === o ||
                                    null === (a = o.params) ||
                                    void 0 === a
                                      ? void 0
                                      : a.fromBookFlag),
                                  allowedShow:
                                    null == he ? void 0 : he.itCanVisible(ot),
                                  orderNumber: this.orderNumber,
                                  productLineName:
                                    1 === g.productLineCode ? "bus" : "point",
                                  onMCVisibleChange:
                                    this.onCouponGiftsAfterConsumeVisibleChange.bind(
                                      this
                                    ),
                                  doBusTraceInfo:
                                    this.doBusNewTraceInfo.bind(this),
                                  isSupport:
                                    "dt" !== w.default.jetpack && !fe && !Q,
                                }),
                              !w.default.isH5Hzbm &&
                                (0, D.tZ)(ve, {
                                  ref: function (e) {
                                    return (l.$RecommendCrossModal = e);
                                  },
                                  isFromBookScene:
                                    1 ==
                                    (null ===
                                      (c = (0, p.getCurrentInstance)()) ||
                                    void 0 === c ||
                                    null === (s = c.router) ||
                                    void 0 === s ||
                                    null === (r = s.params) ||
                                    void 0 === r
                                      ? void 0
                                      : r.fromBookFlag),
                                  fromCity: m.fromCity,
                                  toCity: m.toCity,
                                  allowedShow:
                                    null == he ? void 0 : he.itCanVisible(ct),
                                  onMCVisibleChange:
                                    this.onRecommendCrossModalVisibleChange.bind(
                                      this
                                    ),
                                  orderNumber: this.orderNumber,
                                  doBusTraceInfo:
                                    this.doBusNewTraceInfo.bind(this),
                                }),
                              !w.default.isH5Hzbm &&
                                (0, D.tZ)(Ne, {
                                  orderNumber: this.orderNumber,
                                  doBusTraceInfo:
                                    this.doBusNewTraceInfoV2.bind(this),
                                  allowedShow:
                                    null == he ? void 0 : he.itCanVisible(st),
                                  onMCVisibleChange:
                                    this.onFreeEachOrderModalVisibleChange.bind(
                                      this
                                    ),
                                  redPacketData: ge,
                                }),
                              !w.default.isH5Hzbm &&
                                (0, D.tZ)(Ve, {
                                  show:
                                    null == he ? void 0 : he.itCanVisible(lt),
                                  onVisibleChange:
                                    this.buyTicketAwardVisibleChange,
                                  orderNumber: this.orderNumber,
                                  ref: function (e) {
                                    return (l.$BuyTicketAwardModal = e);
                                  },
                                  onGetRedPacketData: this.getRedPacketData,
                                  doBusNewTraceInfo: this.doBusNewTraceInfo,
                                  doBusTrace:
                                    this.doBusNewTraceInfoV2.bind(this),
                                }),
                              be &&
                                (0, D.tZ)(De.Z, {
                                  visible: be,
                                  fromPage: "orderDetail",
                                  activityData: we,
                                  onClose:
                                    this.closeTravelDiscountActivityRuleDrawer,
                                  onWrapClose:
                                    this.closeTravelDiscountActivityRuleDrawer,
                                }),
                              (0, D.tZ)(_e, {
                                show:
                                  Ae &&
                                  (null == he ? void 0 : he.itCanVisible(dt)),
                                activityData: xe,
                                utmSource: pe,
                                closeBlindBoxModal:
                                  this.closeBlindBoxModal.bind(this),
                                saveBlindBoxModalStatus:
                                  this.saveBlindBoxModalStatus.bind(this),
                                ubtTrace: this.doBusNewTraceInfoV2.bind(this),
                              }),
                              (0, D.tZ)(R.Z, {
                                visible: et,
                                title: "选择出发日期",
                                maxHeight: "80%",
                                beginDate: tt.beginDate,
                                endDate: tt.endDate,
                                selectedDate: tt.chooseDate,
                                onConfirm: this.changeDate,
                                onClose: this.closeCalendarDrawer,
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(f.default.Component))
              ) || Ze;
          (ft.enableShareAppMessage = !0),
            Page(
              (0, o.createPageConfig)(
                ft,
                "pages/bus/neworderdetail/orderdetail",
                { root: { cn: [] } },
                {
                  enablePullDownRefresh: !0,
                  backgroundTextStyle: "dark",
                  onReachBottomDistance: 50,
                  backgroundColor: "#f5f5f5",
                  backgroundColorTop: "#f5f5f5",
                  backgroundColorBottom: "#f5f5f5",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [86230, 3322, 36332, 95854, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(98542);
        }),
          e.O();
      },
    ]);
})();
