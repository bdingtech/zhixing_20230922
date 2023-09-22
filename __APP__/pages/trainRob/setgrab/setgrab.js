!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/fecc9c60875b710a8101d0d50626beef.js"),
    require("../sub-common/21c38908e8fa4730fcf449c938917721.js"),
    require("../sub-common/e18ac9e89d62ef13595cf53c81489989.js"),
    require("../sub-common/af9a4e372fc86155ae3439262ddc36ee.js"),
    require("../sub-common/98288617f7b79bd93e6764129b2de6f6.js"),
    require("../sub-common/488f20d3ae601fc19d5c835f8ad41f52.js"),
    require("../sub-common/64b09328b6ab714bf257627ff5257a73.js"),
    require("../sub-common/a84a67620e54e4b0717aaaabef4d4f88.js"),
    require("../sub-common/1bfc4d45433b8de6b344d141f5c6c906.js"),
    require("../sub-common/6fe85c0e7576cabc17e868b8e899da37.js"),
    require("../sub-common/e255e3ffa6c0fa3b59639b749cd45155.js"),
    require("../sub-common/41e826946d5acf662d18dcccdf7ba9c9.js"),
    require("../sub-common/72d4a16e30125614fb36cb40015efca3.js"),
    require("../sub-common/a2ac0ceb5f7d0d895cfbf0fbbe36cfa7.js"),
    require("../sub-common/fc8d2c41f03b7cf8df3076a401470a28.js"),
    require("../sub-common/82eba6c76a1180b32ebf23e60fff4c61.js"),
    require("../sub-common/50e438ce8b6a7c870d3c45a317c0e0e9.js"),
    require("../sub-common/c05d54b748281b78c61200d1ba934c17.js"),
    require("../sub-common/716f8c7534fb4dcc868a058e2a4a8750.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [340],
      {
        31496: function (t, e, a) {
          var i = a(32180),
            n = a(57042),
            o = a(24460),
            r = a(21867),
            s = a(86066),
            c = a(90129),
            l = a(74921),
            d = a(77610),
            u = a(79301),
            h = a(95308),
            m = a(22276),
            f = a(298),
            p = a(52500),
            g = a(71515),
            b = a(92954),
            S = a.n(b),
            N = a(48792),
            w = a.n(N),
            v = a(3205),
            T = a(79792),
            C = a(25391),
            y = a(58676),
            B = a(21999),
            Z = a(48813),
            D = p.default.memo(function (t) {
              var e = t.hideBackDrop,
                a = void 0 === e ? function () {} : e;
              return (0,
              Z.BX)(g.View, { className: "hongkong-booking-tips", id: "AADk", onClick: a, children: [(0, Z.tZ)(g.View, { className: "pop-full-hd", children: "温馨提示" }), (0, Z.tZ)(g.View, { className: "pop-full-bd", children: (0, Z.BX)(g.View, { className: "pop-tick-desc", children: [(0, Z.tZ)(g.View, { className: "txt-blue color-primary", children: "跨境车票取票规则：" }), (0, Z.tZ)(g.View, { className: "s", children: "线上购买跨境车票，需提前携带购票证件在内地车站将纸质车票取出后乘车" }), (0, Z.tZ)(g.View, { className: "txt-blue color-primary", children: "跨境车票退票规则：" }), (0, Z.tZ)(g.View, { className: "s", children: "1. 到站为香港西九龙站的车票，办理退票应不晚于票面指定的日期、车次开车前30分钟；发站为香港西九龙站的车票应不晚于60分钟" }), (0, Z.tZ)(g.View, { className: "s", children: "2. 退票费核收标准：在票面开车时间前48小时内办理退票的，按票面票价的50%计算；在票面开车时间前48小时至第14天的，按票面票价的30%计算；在票面开车时间前15天及以上的，按票面票价的5%计算。退票费按元计算，不足一元的部分舍去免收。" }), (0, Z.tZ)(g.View, { className: "txt-blue color-primary", children: "跨境车票改签规则：" }), (0, Z.tZ)(g.View, { className: "s", children: "1. 到站为香港西九龙站的车票，办理改签应不晚于票面指定的日期、车次开车前30分钟；发站为香港西九龙站的车票应不晚于60分钟。" }), (0, Z.tZ)(g.View, { className: "s", children: "2. 改签后的车票不得退票。" }), (0, Z.tZ)(g.View, { className: "txt-blue color-primary", children: "跨境车票乘车规则：" }), (0, Z.tZ)(g.View, { className: "s", children: "旅客必须持有效车票并按票面载明的日期、车次、席别乘车，同时需携带有效的出入境证件及签注。" })] }) }), (0, Z.tZ)(g.View, { className: "pop-full-closed", children: (0, Z.tZ)(g.Icon, { className: "icon-full-closed" }) })] });
            }),
            x = a(79910),
            k = a(49120),
            P = a(18783),
            V = a(13025),
            A = a(1269),
            _ = a(10741),
            I = a(34229),
            R = a(94190),
            X = a(20592),
            O = a(96158),
            z = a(2657),
            H = a(8271),
            L = a.n(H),
            G = a(77900),
            j = a(4102),
            M = a(81380),
            E = a(86977),
            F = a(81957),
            W = a(26871),
            U = a(28509),
            Y = a(16575),
            q = a(66101),
            K = a(83315),
            J = {
              data: {
                showType: "",
                otherTrainsSeatsArr: [],
                otherSeats: [],
                otherSeatStr: "",
                disabledSeat: "",
                disabledSeats: [],
              },
              methods: {
                showOtherSeat: function (t, e) {
                  var a = this.data.otherTrainsSeatsArr;
                  a.forEach(function (i, n) {
                    e.indexOf(i.SeatName) >= 0
                      ? (a[n].selected = !0)
                      : (a[n].selected = !1),
                      t.indexOf(i.SeatName) >= 0
                        ? (a[n].disabled = !0)
                        : (a[n].disabled = !1);
                  }),
                    this.setData({
                      otherTrainsSeatsArr: a,
                      showType: "otherSeats",
                    });
                },
                selectSeat: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    a = t,
                    i = this.data.otherTrainsSeatsArr,
                    n = i[a];
                  n.SeatName == this.data.disabledSeat ||
                    this.data.disabledSeats.indexOf(n.SeatName) > -1 ||
                    (e !== n.SeatName
                      ? ((n.selected = !n.selected),
                        this.setData({ otherTrainsSeatsArr: i }))
                      : (0, k.showModal)("不能删除主车次座席"));
                },
                confirmChooseSeat: function () {
                  var t = !1,
                    e = ["一等座", "软卧", "商务座"],
                    a = this.data.otherTrainsSeatsArr,
                    i = [],
                    n = this.data.otherSeats;
                  a.forEach(function (a) {
                    a.selected &&
                      (i.push(a.SeatName), e.includes(a.SeatName) && (t = !0));
                  }),
                    this.setData({
                      otherSeats: i,
                      prevOtherSeats: n,
                      otherSeatStr: i.join(","),
                      prevOtherSeatsStr: n.join(","),
                      isIncludeNoStuSeat: t,
                    }),
                    this.resetPrice && this.resetPrice(),
                    this.hideBackDrop && this.hideBackDrop();
                },
                cancelChooseSeat: function () {
                  this.hideBackDrop && this.hideBackDrop();
                },
                getOtherTrainsSeats: function (t, e) {
                  return (e ? t.concat(e) : t)
                    .map(function (t) {
                      return t.SeatList;
                    })
                    .reduce(function (t, e) {
                      return (
                        e.forEach(function (e) {
                          !(function (t, e) {
                            e.ShowSeatPrice || (e.ShowSeatPrice = 0),
                              t[e.SeatName]
                                ? parseFloat(e.SeatPrice) >
                                    t[e.SeatName].SeatPrice &&
                                  (t[e.SeatName] = {
                                    SeatPrice: parseFloat(e.SeatPrice),
                                    ShowSeatPrice: Number.parseFloat(
                                      e.ShowSeatPrice
                                    ),
                                  })
                                : (t[e.SeatName] = {
                                    SeatPrice: parseFloat(e.SeatPrice),
                                    ShowSeatPrice: Number.parseFloat(
                                      e.ShowSeatPrice
                                    ),
                                  });
                          })(t, e);
                        }),
                        t
                      );
                    }, {});
                },
                getOtherTrainsSeatsArr: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (
                    t.forEach(function (t) {
                      e[t] && (e[t].selected = !0);
                    }),
                    Object.keys(e).map(function (t) {
                      return (0, f.Z)({ SeatName: t, selected: !1 }, e[t]);
                    })
                  );
                },
              },
            };
          var Q = {
              data: { bookingProtocal: [] },
              methods: {
                getBookingProtocal: function () {
                  var t = this;
                  return this.data.bookingProtocal.length
                    ? Promise.resolve(this.data.bookingProtocal)
                    : (0, V.fu)({ ConfigKey: "tieyou_wx_booking_protocal" })
                        .then(function (e) {
                          var a = (e.ConfigInfo || {}).Content;
                          return (
                            (a = (function (t) {
                              var e = t;
                              return (
                                T.default.isTieyou
                                  ? (e = (e = (e = e.replace(
                                      /\u849c\u82bd/g,
                                      "迅途"
                                    )).replace(
                                      /\u667a\u884c/g,
                                      "铁友"
                                    )).replace(/\u643a\u7a0b/g, "铁友"))
                                  : (e = (e = (e = e.replace(
                                      /\u8fc5\u9014/g,
                                      "蒜芽"
                                    )).replace(
                                      /\u94c1\u53cb/g,
                                      "智行"
                                    )).replace(/\u643a\u7a0b/g, "智行")),
                                e
                              );
                            })(a)),
                            (a = JSON.parse(a)),
                            t.setData({ bookingProtocal: a }),
                            a
                          );
                        })
                        .catch(function (t) {
                          return console.error(t);
                        });
                },
                showBookingProtocal: function () {
                  var t = T.default.isTieyou;
                  v.Z.twebview({
                    data: {
                      url: t
                        ? "https://pages.ctrip.com/ztrip/document/policy.html"
                        : "https://pages.ctrip.com/ztrip/document/policyzx.html",
                    },
                  });
                },
                gotoBookInfoH5: function () {
                  var t = T.default.isTieyou,
                    e = "https://m.".concat(
                      t ? "tieyou" : "suanya",
                      ".com/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=purchase"
                    );
                  v.Z.twebview({ data: { url: e } });
                },
              },
            },
            $ = (function (t) {
              (0, r.Z)(a, t);
              var e = (0, s.Z)(a);
              function a(t) {
                return (0, n.Z)(this, a), e.call(this, t);
              }
              return (
                (0, o.Z)(a, [
                  {
                    key: "render",
                    value: function () {
                      return (0, Z.tZ)(g.View, {
                        className: "train-student-grab-banner",
                        children: (0, Z.BX)(g.View, {
                          className: "m-student-grab-banner",
                          children: [
                            (0, Z.tZ)(g.View, {
                              className: "tit",
                              children: this.props.isTieyou ? "铁友" : "智行",
                            }),
                            (0, Z.tZ)(g.Text, {
                              className: "ifont-closed iconfont",
                            }),
                            this.props.studentActivityInfo &&
                              this.props.studentActivityInfo.schoolName &&
                              (0, Z.tZ)(g.View, {
                                className: "tit",
                                children:
                                  this.props.studentActivityInfo.schoolName,
                              }),
                            (0, Z.tZ)(g.View, {
                              className: "txt",
                              children: this.props.studentActivityInfo.title,
                            }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                a
              );
            })(p.default.Component),
            tt = a(9173);
          var et = function (t) {
            var e = t.visible,
              a = void 0 !== e && e,
              i = t.onClose,
              n = t.onConfirm,
              o = t.onContinue,
              r = t.ubtTrace,
              s = void 0 === r ? function () {} : r;
            return (
              (0, p.useEffect)(
                function () {
                  a && s(199769);
                },
                [a]
              ),
              (0, Z.tZ)(I.ZtDrawer, {
                show: a,
                onWrapClose: i,
                onClose: i,
                drawerStyle: { borderRadius: "32rpx 32rpx 0 0" },
                children: (0, Z.BX)(g.View, {
                  className: "dual-channel-guide-drawer",
                  children: [
                    (0, Z.BX)(g.View, {
                      className: "title",
                      children: [
                        "该订单可享",
                        (0, Z.tZ)(g.Icon, { className: "dual-channel-icon" }),
                      ],
                    }),
                    (0, Z.tZ)(g.View, {
                      className: "sub-title",
                      children: "「余票监控+候补购票」双通道抢票，成功率倍增！",
                    }),
                    (0, Z.tZ)(tt.Z, {}),
                    (0, Z.tZ)(g.View, {
                      className: "button",
                      id: "AHBm",
                      onClick: function () {
                        s(199770), n && n();
                      },
                      children: "去免费开通",
                    }),
                    (0, Z.BX)(g.View, {
                      className: "not-open-desc",
                      id: "AHBn",
                      onClick: function () {
                        s(199771), o && o();
                      },
                      children: [
                        "暂不开通，仅使用余票监控抢票",
                        (0, Z.tZ)(g.Text, { className: "ifont-arr iconfont" }),
                      ],
                    }),
                  ],
                }),
              })
            );
          };
          var at,
            it = function (t) {
              var e = t.visible,
                a = t.onClose,
                i = void 0 === a ? function () {} : a,
                n = t.activityRule,
                o = void 0 === n ? "" : n;
              return (0, Z.tZ)(g.View, {
                className: "spring-festival-grab-fail-claim-rule-pop-box",
                children: (0, Z.tZ)(I.ZtActivityPop, {
                  show: e,
                  onClose: i,
                  children: (0, Z.BX)(g.View, {
                    className: "spring-festival-grab-fail-claim-rule-pop",
                    children: [
                      (0, Z.tZ)(g.View, {
                        className: "title",
                        children: "规则说明",
                      }),
                      (0, Z.tZ)(g.View, { className: "content", children: o }),
                      (0, Z.tZ)(g.View, {
                        className: "btn",
                        id: "AJAs",
                        onClick: i,
                        children: "我知道了",
                      }),
                    ],
                  }),
                }),
              });
            },
            nt = p.default.memo(function (t) {
              var e = t.ticketInfo;
              if (!e) return (0, Z.tZ)(g.View, {});
              var a = j.Z.formatDate(e.departDate, "M月D日"),
                i = j.Z.getWeekDayDesc(e.departDate);
              return (0, Z.tZ)(g.View, {
                className: "ticket-info-view",
                children: (0, Z.BX)(g.View, {
                  className: "container ".concat(
                    T.default.isTieyou ? "ty" : "zx"
                  ),
                  children: [
                    (0, Z.BX)(g.View, {
                      className: "item from",
                      children: [
                        (0, Z.tZ)(g.View, {
                          className: "tip",
                          children: "出发地",
                        }),
                        (0, Z.tZ)(g.View, {
                          className: "station",
                          children: e.departStation,
                        }),
                        (0, Z.tZ)(g.View, {
                          className: "text",
                          children: a + " " + i,
                        }),
                      ],
                    }),
                    (0, Z.BX)(g.View, {
                      className: "item mid",
                      children: [
                        (0, Z.tZ)(g.View, {
                          className: "jt-info",
                          id: "AHCB",
                          onClick: function () {
                            C.ZP.goTimeTable(
                              e.departStation,
                              e.arriveStation,
                              e.trainNumber,
                              e.departDate
                            );
                          },
                          "data-ubt-key": "wx_booking_goTT",
                          children: "经停信息",
                        }),
                        (0, Z.tZ)(g.View, {
                          className: "text",
                          children: e.trainNumber,
                        }),
                      ],
                    }),
                    (0, Z.BX)(g.View, {
                      className: "item to",
                      children: [
                        (0, Z.tZ)(g.View, {
                          className: "tip",
                          children: "到达地",
                        }),
                        (0, Z.tZ)(g.View, {
                          className: "station",
                          children: e.arriveStation,
                        }),
                        (0, Z.tZ)(g.View, {
                          className: "text",
                          children: e.seatName,
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            ot = function (t) {
              return t >= 60 ? t / 60 + "小时" : t + "分钟";
            },
            rt = p.default.memo(function (t) {
              var e,
                a = t.time,
                i = t.setTime,
                n = t.otherDates,
                o = t.chosenTrainList,
                r = void 0 === o ? [] : o,
                s = t.grabEndTimeInfo,
                c = void 0 === s ? {} : s,
                l = (0, p.useRef)(Number.POSITIVE_INFINITY);
              (0, p.useEffect)(
                function () {
                  var t = L()(),
                    e = (n && n[0]) || "",
                    a = r.reduce(function (a, i) {
                      var n = L()("".concat(e, " ").concat(i.DepartTime)),
                        o = Math.floor(n.diff(t) / 1e3 / 60);
                      return o < a ? o : a;
                    }, Number.POSITIVE_INFINITY);
                  console.log("************earliestDepartTime", a),
                    (l.current = a),
                    c.dateTags &&
                      i(
                        a <= 30
                          ? c.dateTags[0].date
                          : a > 30 && a <= 180
                          ? c.dateTags[1].date
                          : c.dateTags[2].date
                      );
                },
                [r, n, c.dateTags]
              );
              return (0, Z.BX)(g.View, {
                className: "train-ticket-offset-time",
                children: [
                  (0, Z.tZ)(g.View, { className: "title", children: c.title }),
                  c.dateTags &&
                    (0, Z.tZ)(g.ScrollView, {
                      enableFlex: !0,
                      scrollX: !0,
                      className: "tags-con",
                      enhanced: !0,
                      showScrollbar: 0,
                      children: (c.dateTags || []).map(function (t, e) {
                        return (0, Z.tZ)(
                          g.View,
                          {
                            className: "tag ".concat(
                              a === c.dateTags[e].date
                                ? "color-primary bdcolor-primary"
                                : "normal"
                            ),
                            id: "AHCC",
                            onClick: function () {
                              return (function (t) {
                                var e = l.current,
                                  a = c.dateTags[t].date;
                                e > a
                                  ? i(a)
                                  : S().showToast({
                                      title: "当前距离发车时间已不足".concat(
                                        ot(a)
                                      ),
                                      icon: "none",
                                    });
                              })(e);
                            },
                            children: t.tag,
                          },
                          t.tag
                        );
                      }),
                    }),
                  c.dateTags &&
                    (0, Z.BX)(g.View, {
                      className: "content",
                      children: [
                        "当前为您抢至",
                        (null ===
                          (e = (c.dateTags || []).find(function (t) {
                            return t.date === a;
                          })) || void 0 === e
                          ? void 0
                          : e.tag) || "",
                        ",",
                        (c.content || []).map(function (t) {
                          return (0, Z.tZ)(g.Text, { children: t }, t);
                        }),
                      ],
                    }),
                ],
              });
            }),
            st = a(58789),
            ct = p.default.memo(function (t) {
              var e = t.isTieyou,
                a = t.content,
                i = t.isFromDrawer,
                n = t.checked,
                o = t.btnName,
                r = t.showStrideTrainTips,
                s = t.propStyle,
                c = t.onCheckChange,
                l = t.onMoreClick;
              return null != a && a.title
                ? (0, Z.tZ)(g.View, {
                    className: "stride-train-info ".concat(i ? "drawer" : ""),
                    style: s,
                    children: (0, Z.BX)(g.View, {
                      className: "stride-box",
                      children: [
                        (0, Z.BX)(g.View, {
                          className: "stride-hd",
                          children: [
                            (0, Z.tZ)(g.View, {
                              className: "tit",
                              children: a.title,
                            }),
                            (0, Z.tZ)(g.View, {
                              className: "tag",
                              children: a.tag,
                            }),
                            a.recommendArriveCount < 0 &&
                              r &&
                              (0, Z.tZ)(st.Z, {}),
                            o &&
                              (0, Z.BX)(Z.HY, {
                                children: [
                                  (0, Z.tZ)(g.View, {
                                    className: "more",
                                    id: "AHBx",
                                    onClick: l,
                                    children: o,
                                  }),
                                  (0, Z.tZ)(g.View, {
                                    className: "iconfont ifont-arr",
                                    id: "AHBy",
                                    onClick: l,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, Z.BX)(g.View, {
                          className: "stride-bd",
                          children: [
                            a.recommendDepartCount > 0 &&
                              (0, Z.BX)(g.View, {
                                className: "list",
                                children: [
                                  (0, Z.tZ)(g.View, {
                                    className: "station",
                                    children: a.recommendDepartStation,
                                  }),
                                  (0, Z.tZ)(g.View, {
                                    className: "info",
                                    children:
                                      "多买" + a.recommendDepartCount + "站",
                                  }),
                                ],
                              }),
                            (0, Z.BX)(g.View, {
                              className:
                                "list list-original " +
                                (a.recommendDepartCount < 0 ? "bu" : ""),
                              children: [
                                (0, Z.BX)(g.View, {
                                  className: "station now",
                                  children: [
                                    (0, Z.tZ)(g.View, {
                                      className: "station-tag ".concat(
                                        a.recommendDepartCount > 0
                                          ? "middle"
                                          : ""
                                      ),
                                      children: "上车",
                                    }),
                                    a.originalDepartStation,
                                  ],
                                }),
                                a.recommendDepartCount < 0 &&
                                  (0, Z.tZ)(g.View, {
                                    className: "info info-left-middle",
                                    children:
                                      "补票" + -a.recommendDepartCount + "站",
                                  }),
                              ],
                            }),
                            a.recommendDepartCount < 0 &&
                              (0, Z.tZ)(g.View, {
                                className:
                                  "list " +
                                  (a.recommendDepartCount < 0 ? "bu" : ""),
                                children: (0, Z.tZ)(g.View, {
                                  className: "station",
                                  children: a.recommendDepartStation,
                                }),
                              }),
                            a.recommendArriveCount < 0 &&
                              (0, Z.tZ)(g.View, {
                                className: "list",
                                children: (0, Z.tZ)(g.View, {
                                  className: "station",
                                  children: a.recommendArriveStation,
                                }),
                              }),
                            (0, Z.BX)(g.View, {
                              className:
                                "list list-original " +
                                (a.recommendArriveCount < 0 ? "bu" : ""),
                              children: [
                                (0, Z.BX)(g.View, {
                                  className: "station now",
                                  children: [
                                    (0, Z.tZ)(g.View, {
                                      className: "station-tag ".concat(
                                        a.recommendArriveCount > 0
                                          ? "middle"
                                          : ""
                                      ),
                                      children: "下车",
                                    }),
                                    a.originalArriveStation,
                                  ],
                                }),
                                a.recommendArriveCount < 0 &&
                                  (0, Z.tZ)(g.View, {
                                    className: "info info-right-middle",
                                    children:
                                      "补票" + -a.recommendArriveCount + "站",
                                  }),
                              ],
                            }),
                            a.recommendArriveCount > 0 &&
                              (0, Z.BX)(g.View, {
                                className: "list",
                                children: [
                                  (0, Z.tZ)(g.View, {
                                    className: "station",
                                    children: a.recommendArriveStation,
                                  }),
                                  (0, Z.tZ)(g.View, {
                                    className: "info",
                                    children:
                                      "多抢" + a.recommendArriveCount + "站",
                                  }),
                                ],
                              }),
                          ],
                        }),
                        i
                          ? (0, Z.tZ)(g.Image, {
                              src: "".concat(
                                n
                                  ? e
                                    ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on_ty.webp"
                                    : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on.webp"
                                  : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_20_checkbox_off.webp"
                              ),
                              className: "img-radio",
                              id: "AHBz",
                              onClick: c,
                              webp: !0,
                            })
                          : (0, Z.tZ)(g.View, {
                              className: "radio iconfont ".concat(
                                n
                                  ? "ifont-radioed color-primary"
                                  : "ifont-radio"
                              ),
                              id: "AHCA",
                              onClick: c,
                            }),
                        (0, Z.tZ)(g.View, { className: "line" }),
                        (0, Z.tZ)(I.ZtRichText, {
                          className: "desc",
                          nodes: a.desc,
                        }),
                      ],
                    }),
                  })
                : (0, Z.tZ)(g.View, {});
            }),
            lt = a(70537),
            dt = p.default.memo(function (t) {
              var e = t.isTieyou,
                a = t.content,
                i = t.checked,
                n = t.propStyle,
                o = t.onCheckChange;
              return null != a && a.title
                ? (0, Z.tZ)(g.View, {
                    className: "combine-info",
                    style: n,
                    children: (0, Z.BX)(g.View, {
                      className: "combine-box",
                      children: [
                        (0, Z.BX)(g.View, {
                          className: "combine-hd",
                          children: [
                            (0, Z.tZ)(g.View, {
                              className: "tit",
                              children: a.title,
                            }),
                            (0, Z.tZ)(g.View, {
                              className: "tag",
                              children: a.tag,
                            }),
                          ],
                        }),
                        (0, Z.BX)(g.View, {
                          className: "combine-bd",
                          children: [
                            (0, Z.tZ)(g.View, {
                              className: "list list-original",
                              children: (0, Z.BX)(g.View, {
                                className: "station now",
                                children: [
                                  (0, Z.tZ)(g.View, {
                                    className: "station-tag",
                                    children: "上车",
                                  }),
                                  a.departStation,
                                ],
                              }),
                            }),
                            a.midTitle &&
                              (0, Z.tZ)(g.View, {
                                className: "list middle2",
                                children: (0, Z.tZ)(g.View, {
                                  className: "mid-title",
                                  children: a.midTitle,
                                }),
                              }),
                            (0, Z.tZ)(g.View, {
                              className: "list list-original",
                              children: (0, Z.BX)(g.View, {
                                className: "station now",
                                children: [
                                  (0, Z.tZ)(g.View, {
                                    className: "station-tag",
                                    children: "下车",
                                  }),
                                  a.arriveStation,
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, Z.tZ)(g.Image, {
                          src: "".concat(
                            i
                              ? e
                                ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on_ty.webp"
                                : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on.webp"
                              : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_20_checkbox_off.webp"
                          ),
                          className: "img-radio",
                          id: "AHBl",
                          onClick: o,
                          webp: !0,
                        }),
                        (0, Z.tZ)(g.View, { className: "line" }),
                        (0, Z.tZ)(I.ZtRichText, {
                          className: "desc",
                          space: "nbsp",
                          nodes: a.desc,
                        }),
                      ],
                    }),
                  })
                : (0, Z.tZ)(g.View, {});
            }),
            ut = p.default.memo(function (t) {
              var e,
                a = t.isTieyou,
                i = t.visible,
                n = t.content,
                o = t.chosenSeatStr,
                r = t.noSeatInfo,
                s = t.recommendDrawerDefaultSelected,
                l = t.recommnedCombineSeatInfo,
                d = t.upSeatName,
                b = t.clearSeatUpgrade,
                S = void 0 === b ? function () {} : b,
                N = t.onClose,
                w = void 0 === N ? function () {} : N,
                v = t.onNext,
                T = void 0 === v ? function () {} : v,
                C = n || {},
                y = C.title,
                B = C.crossStationTitle,
                D = C.nearByTitle,
                x = C.crossStations,
                P = C.nearStations,
                V = C.recSeatTitle,
                A = C.recommendSeats,
                _ = (0, p.useState)([]),
                R = (0, c.Z)(_, 2),
                X = R[0],
                O = R[1],
                z = (0, p.useState)([]),
                H = (0, c.Z)(z, 2),
                L = H[0],
                G = H[1],
                j = (0, p.useState)([]),
                M = (0, c.Z)(j, 2),
                E = M[0],
                F = M[1],
                W = (0, p.useState)(!1),
                U = (0, c.Z)(W, 2),
                Y = U[0],
                q = U[1],
                K = (0, p.useState)(!1),
                J = (0, c.Z)(K, 2),
                Q = J[0],
                $ = J[1],
                tt = x;
              if (l && (null == x ? void 0 : x.length) > 1) {
                var et = x.filter(function (t) {
                  return (
                    (null == t ? void 0 : t.recommendArriveCount) > 0 ||
                    (null == t ? void 0 : t.recommendDepartCount) > 0
                  );
                });
                et.length > 0 && (tt = et);
              }
              var at = (0, k.getCurrentPage)();
              (0, p.useEffect)(
                function () {
                  var t,
                    e = [];
                  null === (t = tt) ||
                    void 0 === t ||
                    t.forEach(function (t, a) {
                      1 === t.defaultOpen && (e[a] = !0);
                    }),
                    O(e),
                    G([]),
                    F([]),
                    q(!1);
                },
                [n, l]
              ),
                (0, p.useEffect)(
                  function () {
                    q(!(!s || !r)), $(!(!s || !l));
                  },
                  [s]
                );
              var it = function () {
                  var t = 0;
                  return s && r && t++, s && l && t++, t;
                },
                nt = (function () {
                  var t = (0, h.Z)(
                    (0, u.Z)().mark(function t() {
                      var e, a, i;
                      return (0, u.Z)().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((e = []),
                                (a = []),
                                (i = []),
                                X.forEach(function (t, a) {
                                  (x[a].isSelected = !!t), e.push(x[a]);
                                }),
                                L.forEach(function (t, e) {
                                  t && a.push(P[e]);
                                }),
                                E.forEach(function (t, e) {
                                  t && i.push(A[e]);
                                }),
                                Y && i.push("无座"),
                                !d ||
                                  !i.some(function (t) {
                                    return t === d;
                                  }))
                              ) {
                                t.next = 12;
                                break;
                              }
                              return (
                                (t.next = 8),
                                (0,
                                k.getCurrentPage)().showMultiButtonDialogWithPromise(
                                  {
                                    content: "升级坐席将为您开抢"
                                      .concat(d, "，若您自行添加")
                                      .concat(d, "，则会取消升级座席服务。"),
                                    leftButtonName: "在想想",
                                    rightButtonName: "确定",
                                  }
                                )
                              );
                            case 8:
                              if ("right" == t.sent) {
                                t.next = 11;
                                break;
                              }
                              return t.abrupt("return");
                            case 11:
                              S();
                            case 12:
                              T(e, a, i, Q);
                            case 13:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })();
              return (0, Z.BX)(I.ZtDrawer, {
                className: "recommond-train-or-seat-drawer",
                isShowClose: !1,
                show: i,
                onWrapClose: function () {
                  var t = [];
                  X.forEach(function (e, a) {
                    (x[a].isSelected = !!e), t.push(x[a]);
                  }),
                    w(t);
                },
                maxHeight: "90%",
                isDefineHead: !0,
                children: [
                  (0, Z.tZ)(g.View, { className: "bg-top1" }),
                  (0, Z.tZ)(g.View, { className: "bg-top2" }),
                  (0, Z.BX)(g.View, {
                    className: "hd",
                    children: [
                      (0, Z.tZ)(g.View, { className: "tit", children: y }),
                      (0, Z.tZ)(g.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                        className: "icon-closed",
                        id: "AHBo",
                        onClick: nt,
                        webp: !0,
                      }),
                    ],
                  }),
                  (0, Z.BX)(g.View, {
                    className: "bd",
                    children: [
                      r &&
                        (0, Z.BX)(g.View, {
                          className:
                            "recommend-box receive-no-seat flex-align-items-center",
                          children: [
                            (0, Z.BX)(g.View, {
                              className: "flex-align-items-center",
                              children: [
                                (0, Z.tZ)(g.View, {
                                  className: "desc",
                                  children: r.title,
                                }),
                                r.tag &&
                                  (0, Z.tZ)(g.View, {
                                    className: "tag",
                                    children: r.tag,
                                  }),
                              ],
                            }),
                            (0, Z.tZ)(g.Image, {
                              className: "radio",
                              src: Y
                                ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on".concat(
                                    a ? "_ty" : "",
                                    ".webp"
                                  )
                                : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_20_checkbox_off.webp",
                              id: "AHBp",
                              onClick: function () {
                                Y ||
                                  null == at ||
                                  at.ubtTrace(223416, {
                                    PageId: null == at ? void 0 : at.pageId,
                                  }),
                                  q(!Y);
                              },
                              webp: !0,
                            }),
                          ],
                        }),
                      ((tt && tt.length > 0) || l) &&
                        (0, Z.BX)(g.View, {
                          className: "recommend-box cross-train",
                          children: [
                            (0, Z.BX)(g.View, {
                              className: "tit-rb flex-align-items-center",
                              children: [
                                (0, Z.tZ)(g.View, { children: B }),
                                (0, Z.tZ)(st.Z, {}),
                              ],
                            }),
                            l &&
                              (0, Z.tZ)(g.View, {
                                className: "cross-train-info",
                                children: (0, Z.tZ)(dt, {
                                  content: l,
                                  checked: Q,
                                  onCheckChange: function () {
                                    $(!Q);
                                  },
                                }),
                              }),
                            (null === (e = tt) || void 0 === e
                              ? void 0
                              : e.length) > 0 &&
                              tt.map(function (t, e) {
                                var i = (0, f.Z)({}, t);
                                if (i.extraDesc) {
                                  var n = [];
                                  E.forEach(function (t, e) {
                                    t && n.push(A[e]);
                                  }),
                                    Y && n.push("无座"),
                                    (i.desc = i.extraDesc.replace(
                                      "%s",
                                      (function () {
                                        var t =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                              ? arguments[0]
                                              : {},
                                          e =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                              ? arguments[1]
                                              : [],
                                          a =
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2]
                                              ? arguments[2]
                                              : [],
                                          i = "",
                                          n = t.extraAmountInfos || [];
                                        return (
                                          n.forEach(function (t) {
                                            (-1 === e.indexOf(t.seatType) &&
                                              -1 === a.indexOf(t.seatType)) ||
                                              ((!i || t.amount > i) &&
                                                (i = t.amount));
                                          }),
                                          i
                                        );
                                      })(
                                        i,
                                        n,
                                        null == o ? void 0 : o.split(",")
                                      )
                                    ));
                                }
                                return (0, Z.tZ)(
                                  g.View,
                                  {
                                    className: "cross-train-info",
                                    children: (0, Z.tZ)(ct, {
                                      isTieyou: a,
                                      propStyle:
                                        e !== tt.length - 1
                                          ? {
                                              background: "#f8f8f8",
                                              margin: "8px 10px",
                                              padding: "15px 8px 10px 15px",
                                            }
                                          : {
                                              background: "#f8f8f8",
                                              margin: "8px 10px 0",
                                              padding: "15px 8px 10px 15px",
                                            },
                                      isFromDrawer: !0,
                                      content: i,
                                      checked: X[e],
                                      onCheckChange: function () {
                                        O(function (t) {
                                          var a = (0, m.Z)(t);
                                          return (a[e] = !a[e]), a;
                                        });
                                      },
                                    }),
                                  },
                                  t.title
                                );
                              }),
                          ],
                        }),
                      P &&
                        P.length > 0 &&
                        (0, Z.BX)(g.View, {
                          className: "recommend-box near-train",
                          children: [
                            (0, Z.tZ)(g.View, {
                              className: "tit-rb",
                              children: D,
                            }),
                            null == P
                              ? void 0
                              : P.map(function (t, e) {
                                  return (0, Z.BX)(
                                    g.View,
                                    {
                                      className: "near-train-info",
                                      id: "AHBq",
                                      onClick: function () {
                                        G(function (t) {
                                          var a = (0, m.Z)(t);
                                          return (a[e] = !a[e]), a;
                                        });
                                      },
                                      children: [
                                        (0, Z.BX)(g.View, {
                                          className: "near-train-hd",
                                          children: [
                                            (0, Z.tZ)(g.View, {
                                              className: "tit",
                                              children: t.title,
                                            }),
                                            t.subTitle &&
                                              (0, Z.tZ)(g.View, {
                                                className: "sub-tit",
                                                children: t.subTitle,
                                              }),
                                            (0, Z.tZ)(g.View, {
                                              className: "tag",
                                              children: t.tag,
                                            }),
                                          ],
                                        }),
                                        (0, Z.BX)(g.View, {
                                          className: "near-train-bd",
                                          children: [
                                            (0, Z.BX)(g.View, {
                                              className: "ticket-info",
                                              children: [
                                                (0, Z.BX)(g.View, {
                                                  className: "from",
                                                  children: [
                                                    (0, Z.tZ)(g.View, {
                                                      className: "strong",
                                                      children: t.departTime,
                                                    }),
                                                    (0, Z.tZ)(g.View, {
                                                      className: "station",
                                                      children: t.departStation,
                                                    }),
                                                  ],
                                                }),
                                                (0, Z.BX)(g.View, {
                                                  className: "mid",
                                                  children: [
                                                    (0, Z.tZ)(g.View, {
                                                      className: "cost-time",
                                                      children: t.costTime,
                                                    }),
                                                    (0, Z.tZ)(g.View, {
                                                      className: "img",
                                                      children: (0, Z.tZ)(
                                                        g.Image,
                                                        {
                                                          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon_ht_lb@3x.png",
                                                          className:
                                                            "icon-arrow",
                                                        }
                                                      ),
                                                    }),
                                                    (0, Z.tZ)(g.View, {
                                                      className: "no",
                                                      children: t.trainNumber,
                                                    }),
                                                  ],
                                                }),
                                                (0, Z.BX)(g.View, {
                                                  className: "to",
                                                  children: [
                                                    (0, Z.tZ)(g.View, {
                                                      className: "strong",
                                                      children: t.arriveTime,
                                                    }),
                                                    (0, Z.tZ)(g.View, {
                                                      className: "station",
                                                      children: t.arriveStation,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, Z.tZ)(g.Image, {
                                              className: "radio",
                                              src: L[e]
                                                ? a
                                                  ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on_ty.webp"
                                                  : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on.webp"
                                                : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_20_checkbox_off.webp",
                                              webp: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    t.title
                                  );
                                }),
                          ],
                        }),
                      A &&
                        A.length > 0 &&
                        (0, Z.BX)(g.View, {
                          className: "recommend-box train-seat",
                          children: [
                            (0, Z.tZ)(g.View, {
                              className: "tit-rb",
                              children: V,
                            }),
                            (0, Z.tZ)(g.View, {
                              className: "seat-box",
                              children:
                                null == A
                                  ? void 0
                                  : A.map(function (t, e) {
                                      return (0, Z.BX)(
                                        g.View,
                                        {
                                          id: "AHCq",
                                          className: "seat ".concat(
                                            1 === A.length ? "single" : ""
                                          ),
                                          style:
                                            e >= 2 ? { marginTop: "20px" } : {},
                                          onClick: function () {
                                            F(function (t) {
                                              var a = (0, m.Z)(t);
                                              return (a[e] = !a[e]), a;
                                            });
                                          },
                                          children: [
                                            (0, Z.tZ)(g.View, {
                                              className: "name",
                                              children: t,
                                            }),
                                            (0, Z.tZ)(g.Image, {
                                              className: "radio",
                                              src: E[e]
                                                ? a
                                                  ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on_ty.webp"
                                                  : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on.webp"
                                                : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_20_checkbox_off.webp",
                                              webp: !0,
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                    }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, Z.BX)(g.View, {
                    className: "btn-box",
                    children: [
                      s &&
                        it() > 0 &&
                        (0, Z.tZ)(g.View, {
                          className: "tip",
                          children: "您选择的方案成功率较低，已自动勾选".concat(
                            it(),
                            "个推荐方案"
                          ),
                        }),
                      (0, Z.tZ)(g.Button, {
                        className: "btn-confirm",
                        id: "AHBr",
                        onClick: function () {
                          return nt();
                        },
                        children: "下一步",
                      }),
                    ],
                  }),
                ],
              });
            }),
            ht = ["grabChannelList"],
            mt = T.default.isTieyou,
            ft = ["一等座", "软卧", "商务座"];
          if (T.default.isWechat && wx && wx.preloadAssets) {
            var pt = [
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on_ty.webp",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on.webp",
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_20_checkbox_off.webp",
              "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_normal.png",
              "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_ed_zx.png",
              "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_ed_ty.png",
            ].map(function (t) {
              return { type: "image", src: t };
            });
            wx.preloadAssets({
              data: pt,
              success: function (t) {
                console.log("preloadAssets success", t);
              },
            });
          }
          var gt = {
            pageId: mt ? "10650005125" : "10650005124",
            isPreSale: !1,
            data: {
              isTieyou: mt,
              isAppointment: !1,
              aStation: "",
              aStationStr: "",
              dStation: "",
              repeatGrabOrder: "",
              dStationStr: "",
              exchange: !1,
              otherDates: [],
              allPas: [],
              freeChildren: [],
              isChildrenProtocalAgree: !1,
              headInfo: null,
              mobile: "",
              isWorkTime: !0,
              showType: "",
              chosenTrainList: [],
              chosenTrainListStr: "",
              login12306Name: "",
              login12306Pas: "",
              logedin: 0,
              passengerList12306: [],
              qiangpiaoTips: "",
              canGetMobile: !1,
              goNextSeats: [],
              isHongKongStation: !1,
              successRate: 0,
              auth12306Status: -1,
              grabDualChannelDesc: {},
              houBuChannel: {},
              needActiveHouBu: !1,
              yuPiaoChannel: {},
              isPasNumExceedMax: !1,
              trainNoCanCandidate: !1,
              isShowDualChannel: !1,
              isHouBuConfig: !1,
              useNew12306H5: !0,
              useUpper12306Text: !0,
              passengerCountConfig: 5,
              robWindowNum: 0,
              robRoadNum: 0,
              robBottomBedNum: 0,
              robBedNum: 0,
              isRobBed: !1,
              isRobConsecutiveSeats: !1,
              isRobSameCarriage: !1,
              isRobBottomBed: !1,
              grabSeatProducts: [],
              grabSeatProductsShowType: 0,
              grabSeatProductsDesc: "",
              isShowStudentChannel: !1,
              selectedUniversity: {},
              grabEndTimeInfo: null,
              ticketOffsetTime: 60,
              isShowStuGrabBanner: !1,
              studentActivityInfo: null,
              noSeatInfo: null,
              fromCity: "",
              toCity: "",
            },
            onLoad: function (t) {
              var e = this;
              console.log("setGrabPage onload options = ", JSON.stringify(t));
              var a = K.Z.getDeferred();
              this.onPageLoadSync(t),
                this.onPageLoadAsync(t).finally(function () {
                  e.state.isFromBookx &&
                    (e.getRecommendTrainOrSeatDrawerInfo(!0),
                    e.getCombineSeatPlan()),
                    setTimeout(function () {
                      e.checkStuTicketAndSeatName();
                    }, 1e3),
                    a.resolve();
                }),
                this.getGrabCouponInfo(
                  (null == t ? void 0 : t.isPreSale) || !1
                ),
                (this.onLoadPromise = a.promise),
                (this.setDebounceMobileInputValue = x.Z.debounce(
                  this.setMobileInputValue,
                  200
                )),
                this.getConfigInfo(),
                this.setData({
                  isAppointment: (null == t ? void 0 : t.isPreSale) || !1,
                });
            },
            onShow: function () {
              this.onLoadPromise.then(this.onPageShow);
            },
            onUnload: function () {
              this.savePas(), q.WG.setAttr("mobile", this.data.mobile);
            },
            onPageLoadSync: function (t) {
              var e = this,
                a = this.parseSearchQuery(t),
                i = t.data || {},
                n = i.submitedDateList,
                o = void 0 === n ? [] : n,
                r = i.fromStation,
                s = void 0 === r ? {} : r,
                c = i.toStation,
                l = void 0 === c ? {} : c,
                d = i.fromPage,
                u = void 0 === d ? "" : d,
                h = i.xbookShowedProducts,
                m = i.xbookSelectedProduct,
                f = i.trainViewModeType;
              if (
                ((this.xbookShowedProducts = h),
                (this.xbookSelectedProduct = m),
                (this.trainViewModeType = f),
                "grabSeatUpgrade" === (null == m ? void 0 : m.grabBoxName))
              ) {
                var p = m.upSeatName;
                this.setData({ xbookUpSeatName: p });
              }
              this.fromPage = u;
              var g = [];
              if (
                ((this.mainTrainDate = ""),
                (this.mainTrain = null),
                (this.mainTrainSeatName = ""),
                (this.preRobDays = 60),
                console.log("TrainGlobalData.preRobDays", X.ET.preRobDays),
                "bookx" === u)
              ) {
                var b = t.data || {},
                  S = b.departStation,
                  N = b.departDate,
                  w = b.trainNumber,
                  v = b.arriveStation,
                  T = b.seatName;
                (this.mainTrainDate = N),
                  (this.mainTrainSeatName = T),
                  (a.dStation = S),
                  (a.aStation = v);
                var y = this.getCalendarRange(this.mainTrainDate);
                (this.calendarStartDate = y.calendarStartDate),
                  (this.calendarEndDate = y.calendarEndDate),
                  g.push(L()(this.mainTrainDate).format("YYYY-MM-DD")),
                  this.setData({
                    isFromBookx: !0,
                    ticketInfoView: {
                      departStation: S,
                      departDate: N,
                      trainNumber: w,
                      arriveStation: v,
                      seatName: T,
                    },
                  });
              } else {
                "trainlist" === u && this.setData({ isFromTrainList: !0 }),
                  s.name && (a.dStation = s.name),
                  o && 0 == o.length && a.date && o.push(a.date),
                  l.name && (a.aStation = l.name),
                  (this.calendarStartDate = j.Z.getNow("YYYY-MM-DD")),
                  (this.calendarEndDate = L()(this.calendarStartDate)
                    .add(this.preRobDays - 1, "day")
                    .format("YYYY-MM-DD"));
                var B = o.filter(function (t) {
                  return (
                    j.Z.isAfter(t, e.calendarStartDate) &&
                    j.Z.isAfter(e.calendarEndDate, t)
                  );
                });
                B.length &&
                  (g = B.map(function (t) {
                    return L()(t).format("YYYY-MM-DD");
                  }));
              }
              C.ZP.getTrain12306Config().then(function (t) {
                e.setData({ isWorkTime: t.isIn12306WorkTime });
              }),
                this.setData({
                  aStation: a.aStation,
                  aStationStr: a.aStation,
                  dStation: a.dStation,
                  dStationStr: a.dStation,
                  exchange: !1,
                  fromCity: a.dStation,
                  toCity: a.aStation,
                }),
                this.setData({ otherDates: g }),
                this.checkIsPreSale(),
                this.loadDataFromStore(),
                (0, P.M9)().then(
                  function () {
                    e.setData({ canGetMobile: !0 });
                  },
                  function () {
                    e.setData({ canGetMobile: !1 });
                  }
                ),
                this.getHouBuConfig();
            },
            onPageLoadAsync: function (t) {
              var e = [],
                a = this.data,
                i = a.aStation,
                n = a.dStation,
                o = a.otherDates,
                r = t.data || {},
                s = r.submitedTrainNumberList,
                c = void 0 === s ? [] : s,
                l = r.submitedSeatList,
                d = void 0 === l ? [] : l,
                u = t.data || {},
                h = u.departStation,
                m = u.trainNumber,
                f = u.arriveStation,
                p = u.seatName;
              if (null != o && o[0] && (c.length || (m && p))) {
                var g = this.setOtherTrainsAndSeats({
                  DepartStation: n,
                  ArriveStation: i,
                  DepartDate: o[0],
                  submitedTrainNumberList: c,
                  submitedSeatList: d,
                  bookxDepartStation: h,
                  bookxArriveStation: f,
                  bookxTrainNumber: m,
                  bookxSeatName: p,
                });
                e.push(g);
              }
              return Promise.all(e);
            },
            parseSearchQuery: function (t) {
              var e = R.vN.get() || {},
                a = decodeURIComponent(
                  t.dstation || t.dStation || e.dStation || "上海"
                ),
                i = decodeURIComponent(
                  t.astation || t.aStation || e.aStation || "北京"
                ),
                n = decodeURIComponent(
                  t.ddate ||
                    t.dDate ||
                    t.ddata ||
                    t.dData ||
                    t.date ||
                    e.date ||
                    ""
                ),
                o = decodeURIComponent(
                  t.trainname || t.trainName || ""
                ).toUpperCase(),
                r = decodeURIComponent(t.seat || ""),
                s = t.isgd || t.isGaotieOnly,
                c = t.stu,
                l = t.relatedate || "";
              return (
                !n && l
                  ? (n = j.Z.getSpecialDay2Today(parseInt(l)))
                  : n || l || (n = j.Z.getToday()),
                {
                  dStation: a,
                  aStation: i,
                  dDate: n,
                  date: n,
                  isgd: !(!s || "0" == s || "false" == s) && s,
                  seat: r,
                  trainName: o,
                  stu: !!c,
                  relatedate: l,
                }
              );
            },
            loadDataFromStore: function () {
              if (q.WG.get()) {
                var t = q.WG.get(),
                  e = t.allPas || [],
                  a = t.mobile || P.ZP.userName;
                (e = e.filter(function (t) {
                  return 2 != t.PassengerType && !!t.Mobile;
                })),
                  this.setData({ allPas: e, mobile: a }),
                  this.ubtTrace(102396, { allPas: e });
              } else
                P.ZP.userName && this.setData({ mobile: P.ZP.userName }),
                  q.WG.set({});
              this.setQiangpiaoTips();
            },
            onPageShow: function () {
              if (P.ZP.isLogin) {
                this.setData({ isLogin: !0 });
                -1 === ["crossTrainList"].indexOf(this.goPage) &&
                  (this.load12306FromStore(), this.getGrabPreInitInfo()),
                  (this.goPage = "");
              } else this.setData({ isLogin: !1 });
            },
            getCalendarRange: function (t) {
              var e = L()(),
                a = L()(t).subtract(5, "day"),
                i = L()(t).add(5, "day");
              if (j.Z.isAfter(e, a, "YYYY-MM-DD")) {
                var n = e.diff(a, "day");
                (a = e), (i = i.add(n, "day"));
              }
              return {
                calendarStartDate: a.format("YYYY-MM-DD"),
                calendarEndDate: i.format("YYYY-MM-DD"),
              };
            },
            chooseOtherSeat: function () {
              this.validateTrains(this.data.chosenTrainList) &&
                this.setData({ showType: "otherSeats" });
            },
            chooseOtherDate: function () {
              this.setData({ showType: "otherDateDrawer" });
            },
            chooseOtherTrain: function () {
              if (this.validateDates(this.data.otherDates)) {
                var t = "",
                  e = "",
                  a = this.data.dStation,
                  i = this.data.aStation,
                  n = "",
                  o = "",
                  r = this.data.otherDates[0],
                  s = [],
                  c = this.data.ticketInfoView;
                if (c) {
                  var l;
                  (e = (null == c ? void 0 : c.trainNumber) || ""),
                    (n = (null == c ? void 0 : c.departDate) || ""),
                    (o = (null == c ? void 0 : c.seatName) || ""),
                    (r = (null == c ? void 0 : c.departDate) || ""),
                    (t = "".concat(a, "-").concat(e, "-").concat(i));
                  var d = this.data.recommendTrainOrSeatDrawerInfo;
                  K.Z.isNotEmptyObj(d) &&
                    (null === (l = d.nearStations) || void 0 === l
                      ? void 0
                      : l.length) > 0 &&
                    (s = d.nearStations.map(function (t) {
                      return (0, f.Z)(
                        (0, f.Z)({}, t),
                        {},
                        {
                          tips: ""
                            .concat(null != t && t.title ? t.title : "")
                            .concat(null != t && t.subTitle ? "，" : "")
                            .concat(
                              null != t && t.subTitle
                                ? "<font color='#fd7100'>".concat(
                                    t.subTitle,
                                    "</font>"
                                  )
                                : ""
                            ),
                        }
                      );
                    }));
                }
                this.navigateTo({
                  url: "/pages/trainRob/otherlist/otherlist?TrainNumber="
                    .concat(e, "&DepartStation=")
                    .concat(a, "&ArriveStation=")
                    .concat(i, "&DepartureDates=")
                    .concat(n, "&DepartureDate=")
                    .concat(r, "&SeatName=")
                    .concat(o)
                    .concat(
                      t ? "&excludeTrainStrs=" + encodeURIComponent(t) : ""
                    ),
                  data: {
                    chosenTrainList: JSON.parse(
                      JSON.stringify(this.data.chosenTrainList)
                    ),
                    fromPage: "setgrab",
                    nearTrainList: JSON.parse(JSON.stringify(s)),
                  },
                  callback: function (t) {
                    if (t) {
                      var e = !1;
                      t.chosenTrainList.length > 0 && (e = !0),
                        this.calIsReqGrabCouponInfo(t.chosenTrainList),
                        this.setChosenTrainListAndSeats(
                          t.chosenTrainList,
                          void 0,
                          e
                        );
                    }
                    (this.allTrainList = t.allTrainList || []),
                      this.getRecommendTrainOrSeatDrawerInfo(!0),
                      this.getCombineSeatPlan(),
                      this.getGrabPreInitInfo(),
                      this.resetCouponPrice(),
                      this.getGrabXPageProductDetail()
                        .then(function () {})
                        .catch(function (t) {
                          console.log(t);
                        });
                  },
                });
              }
            },
            calIsReqGrabCouponInfo: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              if (Array.isArray(t) && t.length > 0) {
                var e = t.every(function (t) {
                  return !0 === (null == t ? void 0 : t.isPreSale);
                });
                e !== this.data.isAppointment &&
                  (this.getGrabCouponInfo(e),
                  console.log(e, "isAppointment"),
                  this.setData({ isAppointment: e }));
              }
            },
            setChosenTrainListAndSeats: function () {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                a = arguments.length > 1 ? arguments[1] : void 0,
                i =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                n = e.filter(function (e) {
                  var a, i, n;
                  return !(
                    e.DepartStation ===
                      (null === (a = t.mainTrain) || void 0 === a
                        ? void 0
                        : a.DepartStation) &&
                    e.TrainNumber ===
                      (null == t || null === (i = t.mainTrain) || void 0 === i
                        ? void 0
                        : i.TrainNumber) &&
                    e.ArriveStation ===
                      (null == t || null === (n = t.mainTrain) || void 0 === n
                        ? void 0
                        : n.ArriveStation)
                  );
                });
              this.mainTrain &&
                this.mainTrain.TrainNumber &&
                n.unshift(this.mainTrain),
                this.setData({
                  chosenTrainList: (0, m.Z)(n),
                  chosenTrainListStr: n
                    .map(function (t) {
                      return t.TrainNumber;
                    })
                    .join(","),
                }),
                this.setSeats({ prevOtherSeats: a }),
                this.judgeTrainNoCanCandidate(),
                i &&
                  setTimeout(function () {
                    t.chooseOtherSeat();
                  }, 100);
            },
            hideBackDrop: function () {
              this.setData({ showType: "" });
            },
            checkIsPreSale: function () {
              var t = this.data.otherDates[0];
              this.isPreSale =
                L()(t).valueOf() >=
                L()()
                  .add(X.ET.preSaleDays - 1, "day")
                  .valueOf();
            },
            setSeats: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = t.otherTrains,
                a = void 0 === e ? this.data.chosenTrainList : e,
                i = t.prevOtherSeats,
                n = void 0 === i ? this.data.otherSeats : i,
                o = this.getOtherTrainsSeats(a, null),
                r = this.getOtherTrainsSeatsArr(n, o),
                s = r
                  .filter(function (t) {
                    return t.selected;
                  })
                  .map(function (t) {
                    return t.SeatName;
                  }),
                c = s.join(","),
                l = { otherSeats: s, otherSeatStr: c, otherTrainsSeatsArr: r };
              return this.setData(l), l;
            },
            checkIsIncludeStuTicketBeforeConfrimSeat: function (t) {
              var e = this,
                a = this.data.allPas,
                i = !1;
              t.forEach(function (t) {
                t.selected && ft.includes(t.SeatName) && (i = !0);
              });
              var n = !1;
              i &&
                a.length > 0 &&
                a.forEach(function (t) {
                  3 != t.PassengerType ||
                    t.convertStu ||
                    t.isStudentToAdult ||
                    (n = !0);
                }),
                i && n
                  ? (this.setData({ showType: "" }),
                    this.showMultiButtonDialog({
                      title: "选择座席无法享受学生价",
                      content:
                        "学生票仅享受二等座、硬座、硬卧、无座等座席优惠。当前选择了不支持优惠的座席，请返回修改座席或购买全价成人票",
                      leftButtonName: "重选座席",
                      rightButtonName: "购买成人票",
                      onRightButtonClick: function () {
                        a.forEach(function (t) {
                          3 === t.PassengerType &&
                            ((t.PassengerType = 1), (t.isStudentToAdult = !0));
                        }),
                          e.setAllPas(a),
                          e.confirmChooseSeatHandler(t);
                      },
                    }))
                  : t.some(function (t) {
                      return (
                        t.selected && t.SeatName === e.data.xbookUpSeatName
                      );
                    })
                  ? this.showMultiButtonDialog({
                      content: "升级坐席将为您开抢"
                        .concat(this.data.xbookUpSeatName, "，若您自行添加")
                        .concat(
                          this.data.xbookUpSeatName,
                          "，则会取消升级座席服务。"
                        ),
                      leftButtonName: "在想想",
                      rightButtonName: "确定",
                      onRightButtonClick: function () {
                        e.clearXbookSeatUpgrade(),
                          e.confirmChooseSeatHandler(t);
                      },
                    })
                  : this.confirmChooseSeatHandler(t);
            },
            clearXbookSeatUpgrade: function () {
              this.setData({ xbookUpSeatName: "" }),
                (this.xbookSelectedProduct = null);
            },
            confirmChooseSeatHandler: function (t) {
              this.setChooseSeat(t),
                this.getGrabPreInitInfo(),
                this.getRecommendTrainOrSeatDrawerInfo(!0),
                this.getCombineSeatPlan(),
                this.resetCouponPrice(),
                this.getGrabXPageProductDetail()
                  .then(function () {})
                  .catch(function (t) {
                    console.log(t);
                  });
            },
            setChooseSeat: function (t) {
              var e = !1,
                a = ["一等座", "软卧", "商务座"],
                i = [];
              t.forEach(function (t) {
                t.selected &&
                  (i.push(t.SeatName), a.includes(t.SeatName) && (e = !0));
              }),
                this.setData({
                  otherTrainsSeatsArr: t,
                  otherSeats: i,
                  otherSeatStr: i.join(","),
                  isIncludeNoStuSeat: e,
                }),
                this.hideBackDrop();
            },
            mobileInput: function (t) {
              (this.mobile = t.detail.value),
                t.detail.value.length >= 11 && S().hideKeyboard();
            },
            setMobileInputValue: function () {
              this.setData({ mobile: this.mobile });
            },
            goPasList: function () {
              var t = this,
                e = this.data,
                a = e.allPas,
                i = e.freeChildren,
                n = e.passengerCountConfig,
                o = e.useUpper12306Text,
                r = void 0 === o || o,
                s = e.useNew12306H5,
                c = void 0 === s || s,
                l = e.isIncludeNoStuSeat,
                d = void 0 !== l && l,
                f = e.xbookUpSeatName,
                p = (function () {
                  var e = (0, h.Z)(
                    (0, u.Z)().mark(function e(a) {
                      var i, n, o, r, s, c, l;
                      return (0, u.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (a) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              if (
                                ((i = a.selectedPasList),
                                (n = a.freeChildren),
                                (o = void 0 === n ? [] : n),
                                !f ||
                                  !(
                                    i.length > 1 ||
                                    i.some(function (e) {
                                      return t.isStudentTicket(e);
                                    })
                                  ))
                              ) {
                                e.next = 12;
                                break;
                              }
                              return (
                                t.ubtTrace(
                                  i.length > 1
                                    ? "TZWGrabBook_UpSeatMultiActionbar_exposure"
                                    : "TZWGrabBook_UpSeatStuActionbar_exposure",
                                  { PageId: t.pageId }
                                ),
                                (e.next = 7),
                                t.showMultiButtonDialogWithPromise({
                                  content:
                                    i.length > 1
                                      ? "您选择的抢票升级座席服务最多可添加一位乘客，您可以选择分开下单，或者普通抢票。"
                                      : "您选择的抢票升级服务暂不对学生票开放，您可以选择购买成人票，若继续下单将取消升级服务。",
                                  leftButtonName: "在想想",
                                  rightButtonName: "普通抢票",
                                })
                              );
                            case 7:
                              if (
                                ("left" === (r = e.sent)
                                  ? t.ubtTrace(
                                      i.length > 1
                                        ? "TZWGrabBook_UpSeatMultiActionbar_ReOrder_click"
                                        : "TZWGrabBook_UpSeatStuActionbar_BuyAdult_click",
                                      { PageId: t.pageId }
                                    )
                                  : "right" === r &&
                                    t.ubtTrace(
                                      i.length > 1
                                        ? "TZWGrabBook_UpSeatMultiActionbar_NormalGrab_click"
                                        : "TZWGrabBook_UpSeatStuActionbar_NormalGrab_click",
                                      { PageId: t.pageId }
                                    ),
                                "right" == r)
                              ) {
                                e.next = 11;
                                break;
                              }
                              return e.abrupt("return");
                            case 11:
                              t.clearXbookSeatUpgrade();
                            case 12:
                              if (
                                ((s = i.filter(function (t) {
                                  return t.isChild && !t.IdentityNo;
                                })),
                                (c = i.filter(function (t) {
                                  return (
                                    !t.isChild || (t.isChild && t.IdentityNo)
                                  );
                                })),
                                (l = s.length || 0) > 0)
                              )
                                for (
                                  t.setData({ allPas: c }),
                                    i = i.filter(function (t) {
                                      return !(t.isChild && !t.IdentityNo);
                                    });
                                  l > 0;

                                )
                                  t.addChildren(), l--;
                              else t.setAllPas(i);
                              t.setData({ freeChildren: o });
                            case 17:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                g = {
                  selectedPasList: [].concat((0, m.Z)(a), (0, m.Z)(i)),
                  fromPage: "setgrabPage",
                  useUpper12306Text: r,
                  useNew12306H5: c,
                  passengerCountConfig: n,
                  gotoH5PageSwitchOn: this.gotoH5PageSwitchOn,
                  isIncludeNoStuSeat: d,
                  isCrossEnvTrain: this.isCrossEnvTrain,
                };
              this.navigateTo({
                url: ""
                  .concat(
                    C.ZP.getTrainPsgListUrl(),
                    "?isJianLou=1&is2023NewRule4Kids="
                  )
                  .concat(
                    C.ZP.is2023NewRule4Kids(
                      (0, E.Uy)("kidsNewRuleStartDate") || "2023-01-01"
                    )
                      ? 1
                      : ""
                  ),
                data: g,
                callback: p,
              });
            },
            gotoPsgPage: function () {
              this.showPas();
            },
            showPas: function () {
              return this.goPasList();
            },
            addChildren: function () {
              var t = this;
              return (0, h.Z)(
                (0, u.Z)().mark(function e() {
                  var a, i, n, o;
                  return (0, u.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t.data.xbookUpSeatName) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (e.next = 3),
                            t.showMultiButtonDialogWithPromise({
                              content:
                                "您选择的抢票升级座席服务最多可添加一位乘客，您可以选择分开下单，或者普通抢票",
                              leftButtonName: "在想想",
                              rightButtonName: "普通抢票",
                            })
                          );
                        case 3:
                          if ("right" == e.sent) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          t.clearXbookSeatUpgrade();
                        case 7:
                          if (
                            ((a = t.data.allPas), t.validatePassengerLength(a))
                          ) {
                            e.next = 10;
                            break;
                          }
                          return e.abrupt("return");
                        case 10:
                          if ((i = t.isIncludeAdultTicket(a))) {
                            e.next = 13;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            (0, k.showToast)("儿童不能单独出行，请先添加成人")
                          );
                        case 13:
                          (n = "用".concat(
                            i.pasName,
                            "证件取票，儿童证件购票请单独添加乘车人"
                          )),
                            (o = Object.assign(
                              {},
                              (0, f.Z)(
                                (0, f.Z)({}, i),
                                {},
                                {
                                  PassengerType: 2,
                                  isChild: !0,
                                  isCopyFromAdult: !0,
                                  desc: n,
                                }
                              )
                            )),
                            t.childTicketCopyFromAdult
                              ? t.childTicketCopyFromAdult.push(o)
                              : (t.childTicketCopyFromAdult = [o]),
                            t.setAllPas(a);
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            validatePassengerLength: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return !(
                t.length >= this.data.passengerCountConfig &&
                ((0, k.showModal)(
                  "一个订单最多只能添加".concat(
                    this.data.passengerCountConfig,
                    "名乘客，超过请分批购买"
                  )
                ),
                1)
              );
            },
            isIncludeAdultTicket: function () {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
              return e.find(function (e) {
                return t.isAdultTicket(e);
              });
            },
            isAdultTicket: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (
                1 == t.PassengerType ||
                (3 == t.PassengerType && t.convertStu) ||
                (3 == t.PassengerType && !t.convertStu && t.isStudentToAdult)
              );
            },
            deletePas: function (t, e) {
              var a = this.data,
                i = a.allPas,
                n = a.freeChildren;
              if (t.isFreeChild) {
                var o = e - i.length;
                n.splice(o, 1), this.setData({ freeChildren: n });
              } else {
                if (!K.Z.checkDeletable(t, i))
                  return (0, k.showToast)("请先删除儿童");
                i.splice(e, 1)[0].isCopyFromAdult &&
                  this.childTicketCopyFromAdult.splice(0, 1),
                  this.setAllPas(i);
              }
            },
            savePas: function () {
              var t = this.data.allPas,
                e = void 0 === t ? [] : t;
              (e = e.filter(function (t) {
                return (
                  !t.isCopyFromAdult && !t.isStudentToAdult && !t.isInvited
                );
              })).forEach(function (t) {
                3 == t.PassengerType &&
                  ((t.convertStu = !1), (t.isStudentToAdult = !1));
              }),
                q.WG.setAttr("allPas", e);
            },
            exchangeStation: function () {
              var t = this.data,
                e = t.aStation,
                a = t.dStation,
                i = t.exchange,
                n = t.fromCity,
                o = t.toCity;
              this.setData({
                exchange: !i,
                aStation: a,
                dStation: e,
                fromCity: o,
                toCity: n,
              }),
                this.clearCrossStationsAndNearByStations(),
                this.setChosenTrainListAndSeats(),
                this.resetCouponPrice();
            },
            chooseStation: function (t) {
              var e = this,
                a = this.data.exchange,
                i = ("d" == t ? 1 : 0) ^ (a ? 1 : 0) ? "出发" : "到达";
              v.Z.trainCity({ title: i }, function (i) {
                if ("d" == t) {
                  e.data.dStationStr != i.stationName &&
                    (e.clearCrossStationsAndNearByStations(),
                    e.setChosenTrainListAndSeats([]));
                  var n = i.cityName ? i.cityName : i.stationName;
                  e.setData({
                    dStationStr: i.stationName,
                    fromCity: a ? e.data.fromCity : n,
                    toCity: a ? n : e.data.toCity,
                  });
                } else {
                  e.data.aStationStr != i.stationName &&
                    (e.clearCrossStationsAndNearByStations(),
                    e.setChosenTrainListAndSeats([]));
                  var o = i.cityName ? i.cityName : i.stationName;
                  e.setData({
                    aStationStr: i.stationName,
                    fromCity: a ? o : e.data.fromCity,
                    toCity: a ? e.data.toCity : o,
                  });
                }
                e.setData({
                  aStation: a ? e.data.dStationStr : e.data.aStationStr,
                  dStation: a ? e.data.aStationStr : e.data.dStationStr,
                }),
                  e.checkIsHongKongStation(),
                  e.judgeShowHongKongPopup(),
                  e.setQiangpiaoTips(),
                  e.getRecommendTrainOrSeatDrawerInfo(!1),
                  e.getCombineSeatPlan(!0),
                  e.resetCouponPrice();
              });
            },
            activeHouBu: function () {
              this.setData({ showType: "" }), this.gotoOpenHouBuChannel();
            },
            useYuPiao: function () {
              this.setData({ showType: "" }), this.useYuPiaoGrabTicket();
            },
            checkRepeatGrabOrder: function (t) {
              var e,
                a = this,
                i = this.data,
                n = i.dStation,
                o = i.aStation,
                r = i.otherDates,
                s = void 0 === r ? [] : r,
                c = i.chosenTrainList,
                l = void 0 === c ? [] : c,
                d = i.otherSeats,
                u = void 0 === d ? [] : d,
                h = i.allPas,
                m = void 0 === h ? [] : h,
                f = {
                  departStationName: n,
                  arrivalStationName: o,
                  departDates: s.join(","),
                  trainNums: l
                    .map(function (t) {
                      return t.TrainNumber;
                    })
                    .join(","),
                  seats: u.join(","),
                  passengerList: m.map(function (t) {
                    return {
                      passengerName: t.pasName,
                      passengerType: a.getPassengerTypeName(t),
                      identityType: t.IdentityType,
                      identityNo: t.IdentityNo,
                    };
                  }),
                  departTime:
                    null === (e = l[0]) || void 0 === e ? void 0 : e.DepartTime,
                  fromPage: 0,
                },
                p = l.map(function (t) {
                  return {
                    trainNumber: t.TrainNumber,
                    departStation: t.DepartStation,
                    arriveStation: t.ArriveStation,
                  };
                });
              return (0, _.Y3T)(f).then(function (e) {
                if (
                  (console.log(JSON.stringify(e), "请求的接口"),
                  1 === e.resultCode)
                ) {
                  var i,
                    r = {
                      optimize: (null == e ? void 0 : e.optimize) || "",
                      currentGrabOrder: {
                        departStationName: n,
                        arrivalStationName: o,
                        departDates: s.join(","),
                        trainNums: l
                          .map(function (t) {
                            return t.TrainNumber;
                          })
                          .join(","),
                        seats: u.join(","),
                        trainStationInfos: p,
                      },
                      repeatGrabOrder: e.repeatGrabOrder,
                      buttonContent: e.buttonContent,
                      continueSubmitBtn: e.continueSubmitBtn,
                      interceptType: e.interceptType,
                      skipContinueSubmit: e.skipContinueSubmit,
                      goGrabRate: a.goGrabRate.bind(a),
                    };
                  return (
                    a.setData({
                      repeatGrabOrder:
                        null === (i = e.repeatGrabOrder) || void 0 === i
                          ? void 0
                          : i.orderNumber,
                    }),
                    (a.repeatGrabFlag = !0),
                    a.navigateTo({
                      url: "/pages/trainDetail/grabRepeat/index",
                      data: r,
                    }),
                    !0
                  );
                }
                return null == t || t(), !1;
              });
            },
            goNext: function () {
              var t = this;
              return (0, h.Z)(
                (0, u.Z)().mark(function e() {
                  return (0, u.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.data.needActiveHouBu &&
                          !t.hasShowDualChannelGuide &&
                          "B" == (0, z.XQ)()
                            ? ((t.hasShowDualChannelGuide = !0),
                              t.setData({ showType: "dualChannelGuideDrawer" }))
                            : t.useYuPiaoGrabTicket();
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            showRecommendTrainOrSeatDrawer: function () {
              this.setData({ showType: "recommendTrainOrSeatDrawer" }),
                this.ubtTrace(212234, {
                  exposureType: "normal",
                  bizKey: "z_shezhi_grab_kuazhan_actionbar_show",
                }),
                this.data.noSeatInfo &&
                  this.ubtTrace(223417, { PageId: gt.pageId });
            },
            useYuPiaoGrabTicket: function () {
              var t = this;
              return (0, h.Z)(
                (0, u.Z)().mark(function e() {
                  var a;
                  return (0, u.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            t.validateDates(t.data.otherDates) &&
                            t.validateTrains(t.data.chosenTrainList) &&
                            t.validateSeats(t.data.otherTrainsSeatsArr) &&
                            t.validatePas(t.data.allPas) &&
                            t.validateInput(t.data.mobile)
                          ) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (!t.isIncludeChildrenPsgByChoose(t.data.allPas)) {
                            e.next = 12;
                            break;
                          }
                          if (t.data.isChildrenProtocalAgree) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.next = 6),
                            t.showMultiButtonDialogWithPromise({
                              title: "请阅读并同意以下条款",
                              content:
                                "您本次的行程中包含未成年人出行，请确认您是订单中未成年人的监护人或已征得其监护人同意，允许平台以提供产品或服务为目的，处理未成年人信息。",
                              leftButtonName: "拒绝",
                              rightButtonName: "同意并继续",
                            })
                          );
                        case 6:
                          if ("right" == e.sent) {
                            e.next = 11;
                            break;
                          }
                          return e.abrupt("return");
                        case 11:
                          t.setData({ isChildrenProtocalAgree: !0 });
                        case 12:
                          t.setData({
                            goNextSeats: t.data.otherTrainsSeatsArr.map(
                              function (t) {
                                return (0, f.Z)(
                                  (0, f.Z)({}, t),
                                  {},
                                  { disabled: t.selected }
                                );
                              }
                            ),
                          }),
                            (null !=
                              (a = t.data.recommendTrainOrSeatDrawerInfo) &&
                              a.crossStations) ||
                            (null != a && a.nearStations) ||
                            (null != a && a.recommendSeats)
                              ? t
                                  .getRate()
                                  .then(function (e) {
                                    var a = C.ZP.getSuccessRateText(
                                      null == e ? void 0 : e.successRate
                                    );
                                    t.setData({
                                      successRate:
                                        null == e ? void 0 : e.successRate,
                                    }),
                                      ["低", "极低", "较低"].some(function (t) {
                                        return t === a;
                                      })
                                        ? t.setData({
                                            recommendDrawerDefaultSelected: !0,
                                          })
                                        : t.setData({
                                            recommendDrawerDefaultSelected: !1,
                                          }),
                                      t.showRecommendTrainOrSeatDrawer();
                                  })
                                  .catch(function (e) {
                                    console.error(e),
                                      t.showRecommendTrainOrSeatDrawer();
                                  })
                              : t.handleRateAndCheckRepeatGoGrabRate();
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            handleRateAndCheckRepeatGoGrabRate: function () {
              var t = this;
              this.getRate()
                .then(function (e) {
                  t.setData({
                    successRate: null == e ? void 0 : e.successRate,
                  }),
                    Promise.all([t.checkRepeatGrabOrder()])
                      .then(function (e) {
                        e[0] || t.goGrabRate();
                      })
                      .catch(function () {
                        console.error(
                          "handleRateAndCheckRepeatGoGrabRate error"
                        );
                      });
                })
                .catch(function (t) {
                  console.error(t);
                });
            },
            saveQueryInfo: function () {
              var t = this.data,
                e = t.isFromBookx,
                a = t.isFromTrainList,
                i = {
                  dStation: this.data.dStation,
                  aStation: this.data.aStation,
                };
              e || a || R.vN.set(i);
            },
            goGrabRate: function () {
              var t,
                e,
                a,
                i = this,
                n = this.data,
                o = n.successRate,
                r = n.chosenTrainList,
                s = n.goNextSeats,
                c = n.auth12306Status,
                l = n.trainNoCanCandidate,
                d = n.grabSeatProductsShowType,
                u = n.robWindowNum,
                h = n.robRoadNum,
                m = n.robBedNum,
                p = n.robBottomBedNum,
                g = n.isRobBed,
                b = n.isRobBottomBed,
                S = n.isRobConsecutiveSeats,
                N = n.isRobSameCarriage,
                w = n.grabSeatProducts,
                v = n.selectedUniversity,
                T = n.studentActivityInfo,
                y = n.isShowStudentChannel,
                B = n.recommendTrainOrSeatDrawerInfo,
                Z = n.repeatGrabOrder;
              this.saveQueryInfo();
              var D = s,
                k = r,
                P = [];
              if (
                (null != B && B.crossStations) ||
                (null != B && B.nearStations) ||
                (null != B && B.recommendSeats) ||
                (Array.isArray(this.chosenCrossStations) &&
                  this.chosenCrossStations.length > 0)
              ) {
                var V;
                k = [].concat(r, this.selectedAndFormatedNearTrain || []);
                var A = s;
                if (
                  (null === (V = this.selectedAndFormatedNearTrain) ||
                  void 0 === V
                    ? void 0
                    : V.length) > 0 &&
                  this.allTrainList
                ) {
                  var _,
                    I =
                      null === (_ = this.allTrainList) || void 0 === _
                        ? void 0
                        : _.filter(function (t) {
                            var e = !1;
                            return (
                              k.forEach(function (a) {
                                t.TrainNumber === a.TrainNumber &&
                                  t.ArriveStation === a.ArriveStation &&
                                  t.DepartStation === a.DepartStation &&
                                  (e = !0);
                              }),
                              e
                            );
                          }),
                    R = this.getOtherTrainsSeats(I, null);
                  s.forEach(function (t) {
                    t.selected &&
                      R[t.SeatName] &&
                      (R[t.SeatName].selected = !0);
                  }),
                    (A = Object.keys(R)
                      .map(function (t) {
                        return (0, f.Z)({ SeatName: t, selected: !1 }, R[t]);
                      })
                      .map(function (t) {
                        return (0,
                        f.Z)((0, f.Z)({}, t), {}, { disabled: t.selected });
                      }));
                }
                (D = A.map(function (t) {
                  var e = (0, f.Z)({}, t);
                  return (
                    i.selectedRecommendSeat &&
                      -1 !== i.selectedRecommendSeat.indexOf(t.SeatName) &&
                      (e.selected = !0),
                    e
                  );
                })),
                  C.ZP.formatCrossSolutions(this.chosenCrossStations, D),
                  (P = this.chosenCrossStations);
              }
              var X =
                (null === (t = this.mainTrain) ||
                void 0 === t ||
                null === (e = t.seats) ||
                void 0 === e ||
                null ===
                  (a = e.find(function (t) {
                    return t.SeatName === i.mainTrainSeatName;
                  })) ||
                void 0 === a
                  ? void 0
                  : a.ShowSeatPrice) || "";
              this.navigateTo({
                url: "/pages/trainRob/grabrate/grabrate",
                data: (0, f.Z)(
                  (0, f.Z)(
                    {},
                    x._.pick(
                      this.data,
                      "dStation",
                      "aStation",
                      "otherDates",
                      "mobile",
                      "allPas",
                      "freeChildren",
                      "ticketOffsetTime"
                    )
                  ),
                  {},
                  {
                    repeatGrabOrder: Z,
                    chosenTrainList: k,
                    chosenCrossStations: P,
                    basicSuccessRate: o || 0,
                    otherTrainsSeatsArr: D,
                    fromPage: this.pageId,
                    userAuth12306Status: c,
                    trainNoCanCandidate: l ? 1 : 0,
                    grabSeatProductsShowType: d,
                    robWindowNum: u,
                    robRoadNum: h,
                    robBedNum: m,
                    robBottomBedNum: p,
                    isRobBed: g,
                    isRobBottomBed: b,
                    isRobConsecutiveSeats: S,
                    isRobSameCarriage: N,
                    grabSeatProducts: w,
                    selectedUniversity: v,
                    studentActivityInfo: T,
                    isPre: this.isPreSale,
                    isShowStudentChannelNew: y,
                    xbookSelectedProduct: this.xbookSelectedProduct,
                    xbookShowedProducts: this.xbookShowedProducts,
                    trainViewModeType: this.trainViewModeType,
                    mainTrainPrice: X,
                    selectedCombineSeat: this.selectedCombineSeat,
                    needInterceptToast: this.needInterceptToast,
                  }
                ),
              });
            },
            getCombineSeatPlan: function () {
              var t = this,
                e = this.data,
                a = e.otherDates,
                i = void 0 === a ? [] : a,
                n = e.dStation,
                o = e.aStation,
                r = e.chosenTrainList,
                s = void 0 === r ? [] : r;
              if (i.length > 0 && n && o && s.length > 0) {
                var c = {
                  fromPage: 1,
                  trainNumbers: s
                    .map(function (t) {
                      return t.TrainNumber;
                    })
                    .join(","),
                  departStation: n,
                  arriveStation: o,
                  departDate: i.join(","),
                };
                return (0, _.Xbu)(c)
                  .then(function (e) {
                    if (
                      1 === (null == e ? void 0 : e.resultCode) &&
                      e.combineSeatInfo
                    ) {
                      var a = (0, f.Z)(
                        (0, f.Z)({}, e.combineSeatInfo),
                        {},
                        { departStation: n, arriveStation: o }
                      );
                      t.setData({ recommnedCombineSeatInfo: a });
                    } else t.clearCombineInfo();
                  })
                  .catch(function (e) {
                    console.error(e), t.clearCombineInfo();
                  });
              }
              this.clearCombineInfo();
            },
            clearCombineInfo: function () {
              this.setData({ recommnedCombineSeatInfo: null }),
                (this.selectedCombineSeat = !1);
            },
            isSameCrossTrain: function (t, e) {
              return (
                t.recommendArriveCount === e.recommendArriveCount &&
                t.recommendArriveStation === e.recommendArriveStation &&
                t.recommendDepartCount === e.recommendDepartCount &&
                t.recommendDepartStation === e.recommendDepartStation
              );
            },
            handleNearTrainForGrabrate: function (t) {
              return t.map(function (t) {
                return {
                  TrainNumber: t.trainNumber,
                  DepartStation: t.departStation,
                  ArriveStation: t.arriveStation,
                  DepStation: t.departStation,
                  ArrStation: t.arriveStation,
                  DepartTimeStamp: new Date(t.departDateTime).getTime(),
                  DepartTime: t.departTime,
                  ArriveTime: t.arriveTime,
                  TimesCost: t.costTime,
                  RunTime:
                    (new Date(t.arriveDateTime).getTime() -
                      new Date(t.departDateTime).getTime()) /
                    6e4,
                };
              });
            },
            handleDrawerCrossStationsOperation: function () {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
              e.forEach(function (e) {
                if (e.isSelected) {
                  var a,
                    i = !1;
                  null === (a = t.chosenCrossStations) ||
                    void 0 === a ||
                    a.forEach(function (a) {
                      t.isSameCrossTrain(e, a) && (i = !0);
                    }),
                    i || t.chosenCrossStations.push(e);
                } else {
                  var n,
                    o = [];
                  null === (n = t.chosenCrossStations) ||
                    void 0 === n ||
                    n.forEach(function (a) {
                      t.isSameCrossTrain(e, a) || o.push(a);
                    }),
                    (t.chosenCrossStations = o);
                }
              }),
                this.checkIsSelectCrossTrainBanner();
            },
            onRecommendTrainOrSeatDrawerNext: function (t, e, a, i) {
              this.ubtTrace(212236, {
                bizKey: "z_shezhi_grab_kuazhan_actionbar_nextstep_click",
              });
              var n = this.data.goNextSeats,
                o = (0, m.Z)(n);
              if (e) {
                var r = this.handleNearTrainForGrabrate(e);
                this.selectedAndFormatedNearTrain = r;
              }
              a && (this.selectedRecommendSeat = a);
              var s = C.ZP.formatCrossSolutions(t, o);
              this.handleDrawerCrossStationsOperation(s);
              var c = [];
              t.length > 0 && c.push(0),
                e.length > 0 && c.push(1),
                a.length > 0 && c.push(2),
                this.ubtTrace(212236, {
                  bizKey: "z_shezhi_grab_kuazhan_actionbar_plan_click",
                  type: c,
                }),
                (this.selectedCombineSeat = i),
                this.setData({ showType: "" }),
                this.handleRateAndCheckRepeatGoGrabRate();
            },
            onCrossStationBannerChange: function () {
              var t = this;
              this.ubtTrace(212236, {
                bizKey: "z_shezhi_grab_kuazhan_module_click",
                type: 1,
              });
              var e = this.data,
                a = e.isCrossTrainBannerSelected,
                i = e.crossStationBannerInfo,
                n = !a;
              if ((this.setData({ isCrossTrainBannerSelected: n }), n))
                this.chosenCrossStations &&
                Array.isArray(this.chosenCrossStations)
                  ? this.chosenCrossStations.push(i)
                  : (this.chosenCrossStations = [i]);
              else {
                var o,
                  r = [];
                null === (o = this.chosenCrossStations) ||
                  void 0 === o ||
                  o.forEach(function (e) {
                    t.isSameCrossTrain(e, i) || r.push(e);
                  }),
                  (this.chosenCrossStations = r);
              }
              this.resetCouponPrice(),
                this.getRecommendTrainOrSeatDrawerInfo(!1);
            },
            getRecommendTrainOrSeatDrawerInfo: function (t) {
              var e,
                a,
                i,
                n = this,
                o = this.data,
                r = o.otherDates,
                s = void 0 === r ? [] : r,
                c = o.dStation,
                l = o.aStation,
                d = o.chosenTrainList,
                u = void 0 === d ? [] : d,
                h = o.otherTrainsSeatsArr,
                m = void 0 === h ? [] : h,
                f = s[0],
                p = u[0],
                g =
                  ((null == p ? void 0 : p.DepartTime) &&
                    (null === (e = L()(f + " " + p.DepartTime)) ||
                    void 0 === e ||
                    null ===
                      (a = e.add(null == p ? void 0 : p.RunTime, "minute")) ||
                    void 0 === a
                      ? void 0
                      : a.format("YYYY-MM-DD"))) ||
                  f,
                b = {
                  departStation: c,
                  arriveStation: l,
                  departDate: f,
                  departTime: null == p ? void 0 : p.DepartTime,
                  arriveTime: null == p ? void 0 : p.ArriveTime,
                  arriveDate: g,
                  alternativeTrainNums: u
                    .map(function (t) {
                      return t.TrainNumber;
                    })
                    .join(","),
                  alternativeDepartDates: s.join(","),
                  alternativeTrainSeats: m
                    .filter(function (t) {
                      return t.selected;
                    })
                    .map(function (t) {
                      return t.SeatName;
                    })
                    .join(","),
                  chosenCrossStations:
                    (null === (i = this.chosenCrossStations) || void 0 === i
                      ? void 0
                      : i.map(function (t) {
                          return {
                            trainNumber: t.trainNumber,
                            recommendDepartStation: t.recommendDepartStation,
                            recommendDepartCount: t.recommendDepartCount,
                            recommendArriveCount: t.recommendArriveCount,
                            recommendArriveStation: t.recommendArriveStation,
                          };
                        })) || [],
                };
              b.departStation &&
              b.arriveStation &&
              b.departDate &&
              b.departTime &&
              b.arriveDate &&
              b.arriveTime &&
              b.alternativeTrainSeats &&
              b.alternativeTrainNums
                ? (t && this.clearCrossStationsAndNearByStations(),
                  (0, _.$Bd)(b)
                    .then(function (t) {
                      if (1 === t.resultCode) {
                        var e = t.crossStationAndNearByStationToast,
                          a = t.crossStationAndNearByStationBanner,
                          i = t.noSeatBanner;
                        n.setData({
                          recommendTrainOrSeatDrawerInfo: e,
                          crossStationBannerInfo: a,
                          noSeatInfo: i,
                        }),
                          a &&
                            n.ubtTrace(212234, {
                              exposureType: "normal",
                              bizKey: "z_shezhi_grab_kuazhan_module_show",
                            });
                      } else n.clearCrossStationsAndNearByStations();
                    })
                    .catch(function (t) {
                      console.error(
                        "getCrossStationsAndNearByStationsPromise",
                        t
                      );
                    }))
                : this.clearCrossStationsAndNearByStations();
            },
            clearCrossStationsAndNearByStations: function () {
              this.setData({
                recommendTrainOrSeatDrawerInfo: null,
                crossStationBannerInfo: null,
                isCrossTrainBannerSelected: !1,
                noSeatInfo: null,
              }),
                (this.selectedAndFormatedNearTrain = []),
                (this.selectedRecommendSeat = []),
                (this.chosenCrossStations = []);
            },
            onClickCrossStationBannerMore: function () {
              var t = this;
              this.ubtTrace(212236, {
                bizKey: "z_shezhi_grab_kuazhan_module_click",
                type: 0,
              });
              var e = this.data,
                a = e.otherDates,
                i = void 0 === a ? [] : a,
                n = e.dStation,
                o = e.aStation,
                r = e.chosenTrainList,
                s = void 0 === r ? [] : r,
                c = e.otherTrainsSeatsArr,
                l = void 0 === c ? [] : c,
                d = e.isCrossTrainBannerSelected,
                u = e.crossStationBannerInfo,
                h = void 0 === u ? {} : u,
                m = {
                  departStation: n,
                  arriveStation: o,
                  departDate: i[0],
                  alternativeTrainNums: s
                    .map(function (t) {
                      return t.TrainNumber;
                    })
                    .join(","),
                  alternativeDepartDates: i.join(","),
                  alternativeTrainSeats: l
                    .filter(function (t) {
                      return t.selected;
                    })
                    .map(function (t) {
                      return t.SeatName;
                    })
                    .join(","),
                  fromPage: 2,
                };
              (0, _.YFh)(m)
                .then(function (e) {
                  var a = e.resultCode,
                    i = e.crossStationInfos;
                  if (1 == a && x.Z.notEmptyArray(i)) {
                    C.ZP.formatCrossSolutions(i, l);
                    var n = i.map(function (e) {
                        if (
                          (Object.assign(e, {
                            isCrossStationGrabCheckoutSelected: !1,
                          }),
                          d &&
                            t.isSameCrossTrain(e, h) &&
                            (e.isCrossStationGrabCheckoutSelected = !0),
                          t.chosenCrossStations)
                        ) {
                          var a = !1;
                          t.chosenCrossStations.forEach(function (i) {
                            t.isSameCrossTrain(e, i) && (a = !0);
                          }),
                            a && (e.isCrossStationGrabCheckoutSelected = !0);
                        }
                        return e;
                      }),
                      o = {
                        DepartStation: m.departStation,
                        ArriveStation: m.arriveStation,
                      };
                    (t.goPage = "crossTrainList"),
                      t.navigateTo({
                        url: "/pages/trainRob/crossTrainList/crossTrainList",
                        data: {
                          CrossStationGrabTicketInfoList: n,
                          originalTrain: o,
                        },
                        callback: function (e) {
                          if ((console.log("crossTrainList cb:", e), e)) {
                            t.chosenCrossStations =
                              (null == n
                                ? void 0
                                : n.filter(function (t) {
                                    return t.isCrossStationGrabCheckoutSelected;
                                  })) || [];
                            var a = t.chosenCrossStations.length;
                            a > 0 &&
                              setTimeout(function () {
                                (0,
                                k.showToast)("已成功添加".concat(a, "个跨站方案"));
                              }, 0),
                              t.resetCouponPrice(),
                              t.checkIsSelectCrossTrainBanner(),
                              t.getRecommendTrainOrSeatDrawerInfo(!1);
                          }
                        },
                      });
                  }
                })
                .catch(function (t) {
                  console.log(t);
                });
            },
            checkIsSelectCrossTrainBanner: function () {
              var t,
                e = this,
                a = this.data.crossStationBannerInfo,
                i = !1;
              null === (t = this.chosenCrossStations) ||
                void 0 === t ||
                t.forEach(function (t) {
                  e.isSameCrossTrain(t, a) && (i = !0);
                }),
                this.setData({ isCrossTrainBannerSelected: i });
            },
            getRate: function () {
              var t = this.data,
                e = t.otherDates,
                a = void 0 === e ? [] : e,
                i = t.chosenTrainList,
                n = t.allPas,
                o = t.goNextSeats,
                r = a.join(","),
                s = i.map(function (t) {
                  return t.TrainNumber;
                }),
                c = {
                  allDepartStation: i[0].DepartStation,
                  allArriveStation: i[0].ArriveStation,
                  grabType: 0,
                  jlAlternativeDate: r,
                  passengerCount: n.length,
                  seatNames: o
                    .filter(function (t) {
                      return t.selected;
                    })
                    .map(function (t) {
                      return t.SeatName;
                    })
                    .join(","),
                  trainNumbers: i
                    .map(function (t) {
                      return t.TrainNumber;
                    })
                    .join(","),
                  trainTypes: K.Z.getTrainTypes(s).join(","),
                };
              return (0, Y.J2)(c)
                .then(function (t) {
                  return 1 == t.resultCode
                    ? { successRate: t.successRate }
                    : { successRate: 0.45 };
                })
                .catch(function (t) {
                  return console.warn(t), { successRate: 0.45 };
                });
            },
            gotoLogin12306Page: function () {
              this.showLogin12306();
            },
            showLogin12306: function () {
              this.goLogin12306();
            },
            load12306FromStore: function () {
              O.CZ.call(this),
                1 === this.data.logedin && this.getUser12306AuthInfo();
            },
            getUser12306AuthInfo: function () {
              this.setData({
                auth12306Status: "0" === this.data.memberStatus12306 ? 1 : -1,
              }),
                this.getGrabDualChannelInfo();
            },
            getGrabDualChannelInfo: function () {
              var t = this;
              if (this.data.isHouBuConfig) {
                (0, k.showLoading)();
                var e = this.data,
                  a = e.trainNoCanCandidate,
                  i = e.auth12306Status,
                  n = {
                    login12306Status: e.logedin,
                    authStatus: 1 == i ? 1 : 0,
                    trainNoCanCandidate: a ? 1 : 0,
                  };
                return (0, Y.hQ)(n)
                  .then(function (e) {
                    if (1 == e.resultCode) {
                      var a = (0, d.Z)({}, e),
                        i = a.grabChannelList,
                        n = (0, l.Z)(a, ht),
                        o = i.find(function (t) {
                          return 1 == t.type;
                        }),
                        r = i.find(function (t) {
                          return 0 == t.type;
                        }),
                        s = !1;
                      o &&
                        o.open &&
                        o.open.status &&
                        ((6 !== o.open.status && 4 !== o.open.status) ||
                          (s = !0)),
                        o &&
                          (o.open && -1 === [1, 4, 6].indexOf(o.open.status)
                            ? (o._show = !1)
                            : ((o._show = !0),
                              t.ubtTrace(196681, "show houbu"))),
                        t.setData({
                          isShowDualChannel: !0,
                          grabDualChannelDesc: n,
                          houBuChannel: o,
                          yuPiaoChannel: r,
                          needActiveHouBu: s,
                        });
                    } else t.setData({ isShowDualChannel: !1 });
                  })
                  .catch(function (t) {
                    return console.log(t);
                  })
                  .finally(function () {
                    return (0, k.hideLoading)();
                  });
              }
            },
            judgePasNumExceedMax: function () {
              var t = this.data,
                e = t.grabDualChannelDesc,
                a = t.allPas,
                i = e.candidateMaxPassengerCount || 3,
                n = a.length > i;
              this.setData({ isPasNumExceedMax: n });
            },
            setQiangpiaoTips: function () {
              var t = this.data.allPas,
                e =
                  (void 0 === t ? [] : t).length > 1
                    ? "多个乘车人建议分开下单，成功率更高"
                    : "";
              this.setData({ qiangpiaoTips: e });
            },
            setAllPas: function () {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                a = e;
              if (
                (a = a.filter(function (t) {
                  return !t.isCopyFromAdult;
                })).length > 0 &&
                this.childTicketCopyFromAdult &&
                this.childTicketCopyFromAdult.length > 0
              ) {
                var i,
                  n = a
                    .filter(function (e) {
                      return t.isAdultTicket(e);
                    })
                    .some(function (e) {
                      return e.pasName == t.childTicketCopyFromAdult[0].pasName;
                    });
                if (!n) {
                  var o = this.isIncludeAdultTicket(a);
                  this.childTicketCopyFromAdult.forEach(function (t) {
                    Object.assign(t, {
                      pasName: o.pasName,
                      PassengerType: 2,
                      isChild: !0,
                      isCopyFromAdult: !0,
                      desc: "用".concat(
                        o.pasName,
                        "证件取票，儿童证件购票请单独添加乘车人"
                      ),
                    });
                  });
                }
                (i = a).push.apply(i, (0, m.Z)(this.childTicketCopyFromAdult));
              }
              this.setData({ allPas: a }),
                this.setQiangpiaoTips(),
                this.resetCouponPrice(),
                this.getGrabXPageProductDetail()
                  .then(function () {
                    t.resetGrabXProduct();
                  })
                  .catch(function () {}),
                this.data.trainNoCanCandidate &&
                  this.data.isHouBuConfig &&
                  this.judgePasNumExceedMax(),
                this.canOpenStudentActivity();
            },
            setOtherTrainsAndSeats: function (t) {
              var e = this,
                a = t.DepartStation,
                i = t.ArriveStation,
                n = t.DepartDate,
                o = t.submitedTrainNumberList,
                r = t.submitedSeatList,
                s = t.bookxDepartStation,
                c = t.bookxArriveStation,
                l = t.bookxTrainNumber,
                d = t.bookxSeatName;
              return C.ZP.getTrainList({
                DepartStation: a,
                ArriveStation: i,
                DepartDate: n,
              })
                .then(function (t) {
                  return (
                    (e.allTrainList = t || []),
                    K.Z.handleTrains(t, n).filter(function (t) {
                      return (
                        (o.includes(t.TrainNumber) &&
                          a === t.DepartStation &&
                          i === t.ArriveStation) ||
                        (l === t.TrainNumber &&
                          s === t.DepartStation &&
                          c === t.ArriveStation)
                      );
                    })
                  );
                })
                .then(function (t) {
                  var a = e.data,
                    i = a.isFromBookx,
                    n = a.isFromTrainList,
                    o = !1;
                  i && (e.mainTrain = t && t[0]),
                    n && (o = !0),
                    e.setChosenTrainListAndSeats(
                      t,
                      [].concat((0, m.Z)(r), [d]),
                      o
                    );
                });
            },
            judgeShowHongKongPopup: function () {
              this.data.isHongKongStation &&
                !q.ZK.getAttr("hongkongTips") &&
                (this.setData({ showType: "hongkong" }),
                q.ZK.setAttr("hongkongTips", !0));
            },
            checkIsHongKongStation: function () {
              var t = this.data,
                e = t.dStation,
                a = void 0 === e ? "" : e,
                i = t.aStation,
                n = void 0 === i ? "" : i;
              this.setData({
                isHongKongStation: a.includes("香港") || n.includes("香港"),
              });
            },
            goLogin12306: function () {
              var t = this,
                e = this.data,
                a = e.login12306Name,
                i = void 0 === a ? "" : a,
                n = e.login12306Pas,
                o = void 0 === n ? "" : n,
                r = i && o,
                s = "https://"
                  .concat(
                    T.default.h5domain,
                    "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                  )
                  .concat(T.default.partner, "#/login?partner=")
                  .concat(T.default.partner, "&userName=")
                  .concat(i, "&loginPW=")
                  .concat(o, "&mobile=")
                  .concat(P.ZP.userName || "", "&isMiniAppLogin12306=")
                  .concat(r, "&fromPage=setgrab");
              v.Z.twebview({
                data: {
                  url: s,
                  bridgeIns: function (e) {
                    console.log("setgrab webviewCB e = ", e),
                      Array.isArray(e.detail.data) &&
                        O.Tq.call(t, e.detail.data);
                  },
                },
              });
            },
            checkIsIncludeNoStuSeat: function () {
              var t,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                a = ft,
                i = !1;
              return (
                null == e ||
                  null === (t = e.forEach) ||
                  void 0 === t ||
                  t.call(e, function (t) {
                    i = a.includes(t);
                  }),
                i
              );
            },
            checkStuTicketAndSeatName: function () {
              var t = this.data,
                e = t.otherSeats,
                a = void 0 === e ? [] : e,
                i = t.allPas,
                n = void 0 === i ? [] : i,
                o = this.checkIsIncludeNoStuSeat(a),
                r = !1;
              o &&
                n.length > 0 &&
                (n.forEach(function (t) {
                  3 != t.PassengerType ||
                    t.convertStu ||
                    t.isStudentToAdult ||
                    ((t.PassengerType = 1),
                    (t.convertStu = !0),
                    (t.isStudentToAdult = !0),
                    (r = !0));
                }),
                r &&
                  (0, k.showToast)("当前座席不享受学生价，已自动改为成人票")),
                this.setData({ allPas: n, isIncludeNoStuSeat: o });
            },
            judgeTrainNoCanCandidate: function () {
              var t = this;
              if (this.data.isHouBuConfig) {
                (0, k.showLoading)();
                var e = this.data,
                  a = e.aStation,
                  i = void 0 === a ? "" : a,
                  n = e.dStation,
                  o = void 0 === n ? "" : n,
                  r = e.otherDates,
                  s = void 0 === r ? [] : r,
                  c = e.chosenTrainListStr,
                  l = void 0 === c ? "" : c,
                  d = { DepartStation: o, ArriveStation: i, DepartDate: s[0] };
                return C.ZP.getTrainList(d)
                  .then(function (e) {
                    if (!e) throw "没有查询到指定车次信息";
                    var a = e,
                      i = !1,
                      n = l.split(",") || [];
                    a.forEach(function (t) {
                      (t.IsCanHB = !0),
                        t.IsCanHB &&
                          -1 !== n.indexOf(t.TrainNumber) &&
                          (i = !0);
                    }),
                      (t.isCrossEnvTrain = !!a.find(function (t) {
                        var e, a;
                        if (
                          t.countryFlag &&
                          null !== (e = (a = t.countryFlag).split) &&
                          void 0 !== e &&
                          e.call(a, ",") &&
                          t.countryFlag.split(",")[0] !==
                            t.countryFlag.split(",")[1]
                        )
                          return !0;
                        return !1;
                      })),
                      t.data.trainNoCanCandidate ||
                        (!i && !t.isCrossEnvTrain) ||
                        t.setAllPas([]),
                      t.setData({ trainNoCanCandidate: i }),
                      t.getGrabDualChannelInfo();
                  })
                  .catch(function () {
                    t.setData({ trainNoCanCandidate: !1 });
                  })
                  .finally(function () {
                    return (0, k.hideLoading)();
                  });
              }
            },
            gotoDualChannelH5Page: function () {
              var t = this.data.grabDualChannelDesc,
                e = (void 0 === t ? {} : t).descUrl || "";
              this.goH5(e);
            },
            onClickDualChannelShow: function () {
              var t = this.data.houBuChannel;
              t && (t._show = !t._show), this.setData({ houBuChannel: t });
            },
            gotoOpenHouBuChannel: function (t) {
              var e = this;
              if (
                ("trace" === t && this.ubtTrace(196682, "open houbu"),
                1 != this.data.logedin)
              )
                this.goLogin12306();
              else {
                var a = this.data,
                  i = a.login12306Name,
                  n = void 0 === i ? "" : i,
                  o = a.login12306Pas,
                  r = void 0 === o ? "" : o,
                  s = "https://"
                    .concat(
                      T.default.h5domain,
                      "/webapp/train/activity/ztrip-train-12306/?partner="
                    )
                    .concat(T.default.partner, "#/member?userName=")
                    .concat(n, "&loginPW=")
                    .concat(r, "&memberStatus12306=")
                    .concat(this.data.memberStatus12306 || -1);
                this.goH5(s, function (t) {
                  if (
                    (console.error("gotoOpenHouBuChannel getData", t),
                    t && t.detail.data && Array.isArray(t.detail.data))
                  ) {
                    var a = (0, c.Z)(t.detail.data, 1)[0].success;
                    void 0 !== a &&
                      a &&
                      (0, O.Mm)(n, r)
                        .then(function () {
                          O.CZ.call(e),
                            setTimeout(function () {
                              e.getGrabDualChannelInfo();
                            }, 300);
                        })
                        .catch(function (t) {
                          console.log(t);
                        });
                  }
                });
              }
            },
            goH5: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function () {};
              t && v.Z.twebview({ data: { url: t, bridgeIns: e } });
            },
            getHouBuConfig: function () {
              var t = this;
              return (0, V.fu)({ ConfigKey: "tieyou_wx_mini_train_houbu" })
                .then(function (e) {
                  t.setData({
                    isHouBuConfig: !(
                      !e.ConfigInfo || 3 != e.ConfigInfo.Content
                    ),
                  });
                })
                .catch(function (t) {
                  return console.log(t);
                });
            },
            getConfigInfo: function () {
              var t = this;
              return (0, V.fu)({ ConfigKey: "tieyou_wx_setgrab_key" })
                .then(function (e) {
                  if (e.ConfigInfo && e.ConfigInfo.Content) {
                    var a = JSON.parse(e.ConfigInfo.Content);
                    (t.gotoH5PageSwitchOn = 1 === a.gotoH5PageSwitchOn),
                      t.setData({
                        useNew12306H5: 1 === a.useNew12306H5,
                        useUpper12306Text: 1 === a.useUpper12306Text,
                        passengerCountConfig: a.passengerCountConfig || 5,
                      });
                  }
                })
                .catch(function (t) {
                  return console.log(t);
                });
            },
            getPassengerTypeName: function (t) {
              return 3 != t.PassengerType
                ? t.isChild
                  ? "儿童票"
                  : "成人票"
                : t.convertStu || t.isStudentToAdult
                ? "成人票"
                : "学生票";
            },
            getGrabXPageProductDetail: function () {
              var t = this,
                e = this.data,
                a = e.allPas,
                i = e.otherSeatStr,
                n = e.chosenTrainListStr,
                o = e.aStation,
                r = e.dStation,
                s = e.otherDates,
                c = K.Z.getDeferred();
              if (!(a && a.length > 0 && Array.isArray(s) && s.length > 0))
                return c.reject(), c.promise;
              var l =
                  a && a.length > 0
                    ? a.map(function (e) {
                        var a = t.getPassengerTypeName(e);
                        return {
                          passengerName: e.CNName,
                          passengerType: a,
                          identityType: e.IdentityType,
                          identityNo: e.IdentityNo,
                        };
                      })
                    : null,
                d = s && Array.isArray(s) && s.length > 0 ? s.join(",") : "",
                u = {
                  passengers: l,
                  orderType: this.isPreSale ? 3 : 0,
                  orderInfo: {
                    fromNames: r,
                    toNames: o,
                    fromDates: d,
                    trainNums: n,
                    seats: i,
                  },
                };
              return (0, Y.VV)(u)
                .then(function (e) {
                  var i = [4, 5, 6, 7];
                  if (e && 1 === e.resultCode) {
                    var n = e.grabSeatInfo,
                      o = void 0 === n ? {} : n;
                    if (!o.grabSeatProducts)
                      return void t.setData({ grabSeatProductsShowType: -1 });
                    var r = o.grabSeatProducts || [],
                      s =
                        r.find(function (t) {
                          return 5 === t.productType;
                        }) || {},
                      c =
                        r.find(function (t) {
                          return 6 === t.productType;
                        }) || {},
                      l =
                        r.find(function (t) {
                          return 7 === t.productType;
                        }) || {},
                      d =
                        r.find(function (t) {
                          return 25 === t.productType;
                        }) || {},
                      u =
                        r.find(function (t) {
                          return 8 === t.productType;
                        }) || {},
                      h =
                        r.find(function (t) {
                          return 24 === t.productType;
                        }) || {},
                      m = o.type || 0,
                      f = o.desc || "",
                      p = 2 === m && t.data.isRobConsecutiveSeats,
                      g = !(null == d || !d.title) && t.data.isRobSameCarriage,
                      b = 4 === m && t.data.isRobBed,
                      S = 7 === m && t.data.isRobBottomBed,
                      N = i.includes(m) ? 0 : t.data.robWindowNum,
                      w = i.includes(m) ? 0 : t.data.robRoadNum,
                      v = i.includes(m) ? t.data.robBottomBedNum : 0,
                      T = i.includes(m) ? t.data.robBedNum : 0;
                    null != d &&
                      d.title &&
                      2 === m &&
                      a &&
                      a.length > 0 &&
                      t.ubtTrace("s_trn_z_10650005124", {
                        exposureType: "normal",
                        bizKey: "z_grab_shezhi_same_carriage_show",
                      }),
                      t.setData({
                        grabSeatProducts: r,
                        grabSeatProductsShowType: m,
                        robWindowProduct: s,
                        robRoadProduct: c,
                        robConsecutiveSeatsProduct: l,
                        robSameCarriageProduct: d,
                        isRobSameCarriage: g,
                        robBedProduct: u,
                        robBottomBedProduct: h,
                        grabSeatProductsDesc: f,
                        isRobConsecutiveSeats: p,
                        isRobBed: b,
                        isRobBottomBed: S,
                        robWindowNum: N,
                        robRoadNum: w,
                        robBottomBedNum: v,
                        robBedNum: T,
                      });
                  }
                })
                .catch(function (t) {
                  console.log(t);
                });
            },
            resetGrabXProduct: function () {
              for (
                var t = this.data.allPas,
                  e = this.data,
                  a = e.robRoadNum,
                  i = e.robWindowNum,
                  n = e.robBottomBedNum,
                  o = e.robBedNum,
                  r = t && Array.isArray(t) ? t.length : 0,
                  s = a + i,
                  c = n + o;
                s > r;

              )
                i > 0 ? i-- : a > 0 && a--, (s = i + a);
              for (; c > r; ) o > 0 ? o-- : n > 0 && n--, (c = o + n);
              this.setData({
                robWindowNum: i,
                robRoadNum: a,
                robBedNum: o,
                robBottomBedNum: n,
              });
            },
            addRobWindow: function () {
              var t = this.data,
                e = t.robRoadNum,
                a = t.allPas,
                i = t.isRobConsecutiveSeats,
                n = t.grabSeatProductsShowType,
                o = this.data.robWindowNum;
              2 !== n
                ? e + (o += 1) > a.length
                  ? S().showToast({
                      title: "已达上限，无法继续添加",
                      icon: "none",
                      duration: 1e3,
                    })
                  : this.setData({ robWindowNum: o })
                : e + o + (i ? 1 : 0) < 2
                ? this.setData({ robWindowNum: ++o })
                : S().showToast({
                    title: "已达上限，无法继续添加",
                    icon: "none",
                    duration: 1e3,
                  });
            },
            minusRobWindow: function () {
              var t = this.data.robWindowNum;
              (t -= 1) < 0
                ? S().showToast({
                    title: "已清零，请继续添加",
                    icon: "none",
                    duration: 1e3,
                  })
                : this.setData({ robWindowNum: t });
            },
            addRobRoad: function () {
              var t = this.data,
                e = t.robWindowNum,
                a = t.allPas,
                i = t.isRobConsecutiveSeats,
                n = t.grabSeatProductsShowType,
                o = this.data.robRoadNum;
              2 !== n
                ? (o += 1) + e > a.length
                  ? S().showToast({
                      title: "已达上限，无法继续添加",
                      icon: "none",
                      duration: 1e3,
                    })
                  : this.setData({ robRoadNum: o })
                : o + e + (i ? 1 : 0) < 2
                ? this.setData({ robRoadNum: ++o })
                : S().showToast({
                    title: "已达上限，无法继续添加",
                    icon: "none",
                    duration: 1e3,
                  });
            },
            minusRobRoad: function () {
              var t = this.data.robRoadNum;
              (t -= 1) < 0
                ? S().showToast({
                    title: "已清零，请继续添加",
                    icon: "none",
                    duration: 1e3,
                  })
                : this.setData({ robRoadNum: t });
            },
            addRobBedOrBottomBed: function (t) {
              var e = this.data,
                a = e.robBedNum,
                i = e.robBottomBedNum,
                n = e.allPas,
                o = a,
                r = i;
              if ("Bed" === t) o += 1;
              else {
                if ("BottomBed" !== t) return;
                r += 1;
              }
              o + r > n.length
                ? S().showToast({
                    title: "已达上限，无法继续添加",
                    icon: "none",
                    duration: 1e3,
                  })
                : this.setData({ robBedNum: o, robBottomBedNum: r });
            },
            minusRobBedOrBottomBed: function (t) {
              var e = this.data,
                a = e.robBedNum,
                i = e.robBottomBedNum;
              if ("Bed" === t) a -= 1;
              else {
                if ("BottomBed" !== t) return;
                i -= 1;
              }
              a < 0 || i < 0
                ? S().showToast({
                    title: "已清零，请继续添加",
                    icon: "none",
                    duration: 1e3,
                  })
                : this.setData({ robBedNum: a, robBottomBedNum: i });
            },
            toggleRobBedOrBottomBed: function (t) {
              var e = this.data,
                a = e.robBedNum,
                i = e.robBottomBedNum;
              if ("Bed" === t)
                this.setData({ robBedNum: a >= 1 ? 0 : 1, robBottomBedNum: 0 });
              else {
                if ("BottomBed" !== t) return;
                this.setData({ robBottomBedNum: i >= 1 ? 0 : 1, robBedNum: 0 });
              }
            },
            getGrabPreInitInfo: function () {
              var t = this;
              return (0, h.Z)(
                (0, u.Z)().mark(function e() {
                  var a, i, n, o, r, s, c, l, d, h, m, f, p;
                  return (0, u.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (a = t.data),
                              (i = a.dStation),
                              (n = a.aStation),
                              (o = a.chosenTrainList),
                              (r = a.otherSeats),
                              (s = a.otherDates),
                              (c = o.join(",")),
                              (l = r.join(",")),
                              (e.next = 6),
                              (0, Y.xU)({
                                departName: i,
                                arriveName: n,
                                departDate: s.join(","),
                                orderType: 1,
                                selectTrainNums: c,
                                seatNames: l,
                              })
                            );
                          case 6:
                            1 === (d = e.sent).resultCode &&
                              ((h = d.grabEndTimeInfo),
                              (m = d.studentActivityInfo),
                              (f = d.activityPreInfo),
                              (p = d.needInterceptToast),
                              (t.needInterceptToast = p),
                              t.setData({ grabEndTimeInfo: h }),
                              t.setData({ activityPreInfo: f }),
                              m &&
                                m.schoolName &&
                                t.setData({
                                  isShowStuGrabBanner: !0,
                                  studentActivityInfo: m,
                                })),
                              t.setHeadInfo(),
                              (e.next = 15);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              t.setHeadInfo();
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 11]]
                  );
                })
              )();
            },
            setHeadInfo: function () {
              var t = this.data,
                e = t.studentActivityInfo,
                a = t.activityPreInfo,
                i = {
                  title: "",
                  subTitle: "我们将全力以赴为您抢票，助您顺利出行",
                },
                n = "尊敬的会员";
              e && (n = "亲爱的同学");
              var o = new Date(),
                r = o.getHours(),
                s = o.getMinutes();
              (i.title = (function (t, e, a) {
                var i = "";
                return (
                  e >= 5 && e < 9
                    ? (i = "".concat(t, "，早上好~"))
                    : e >= 9 && e < 11
                    ? (i = "".concat(t, "，上午好~"))
                    : 11 == e
                    ? (i = "".concat(t, a <= 30 ? "，上午好~" : "，中午好~"))
                    : e >= 12 && e < 14
                    ? (i = "".concat(t, "，中午好~"))
                    : e >= 14 && e < 18
                    ? (i = "".concat(t, "，下午好~"))
                    : ((e >= 18 && e <= 24) || (e >= 0 && e < 5)) &&
                      (i = "".concat(t, "，晚上好~")),
                  i
                );
              })(n, r, s)),
                a &&
                  a.activityTitle &&
                  a.activityNotation &&
                  ((i.title = a.activityTitle),
                  (i.subTitle = a.activityNotation)),
                "grabbingTicketDay" === (null == a ? void 0 : a.activityCode) &&
                  ((i.title = a.activityTitle || "超级抢票日"),
                  (i.subTitle = a.activityNotation)),
                this.setData({ headInfo: i });
            },
            toggleRobConsecutiveSeats: function () {
              var t = this.data,
                e = t.isRobConsecutiveSeats;
              2 !== t.robRoadNum + t.robWindowNum
                ? this.setData({ isRobConsecutiveSeats: !e })
                : S().showToast({
                    title: "您已选择靠窗(过道),无法享抢连坐",
                    icon: "none",
                    duration: 1e3,
                  });
            },
            toggleRobSameCarriage: function () {
              var t = this.data.isRobSameCarriage;
              this.ubtTrace("c_trn_z_10650005124", {
                bizKey: "z_grab_shezhi_same_carriage_click",
                type: t ? 1 : 0,
              }),
                this.setData({ isRobSameCarriage: !t });
            },
            toggleRobBottomBed: function () {
              var t = this.data.isRobBottomBed;
              this.setData({ isRobBottomBed: !t });
            },
            toggleRobBed: function () {
              var t = this.data.isRobBed;
              this.setData({ isRobBed: !t });
            },
            toggleRob: function (t) {
              var e = t.currentTarget.dataset.type,
                a = void 0 === e ? "" : e,
                i = this.data,
                n = i.robRoadNum,
                o = i.robWindowNum;
              switch ("".concat(o).concat(n)) {
                case "00":
                  "window" === a ? (o += 1) : (n += 1);
                  break;
                case "01":
                  "window" === a ? ((o += 1), (n -= 1)) : (n -= 1);
                  break;
                case "10":
                  "window" === a ? (o -= 1) : ((o -= 1), (n += 1));
              }
              this.setData({ robWindowNum: o, robRoadNum: n });
            },
            canOpenStudentActivity: function () {
              var t = this.data.allPas,
                e = void 0 === t ? [] : t,
                a = !!this.isAllStudentTicket(e);
              this.setData({ isShowStudentChannel: a });
            },
            isAllStudentTicket: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              if (t.length > 0)
                return t.every(function (t) {
                  return (
                    3 == t.PassengerType && !t.convertStu && !t.isStudentToAdult
                  );
                });
            },
            isStudentTicket: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (
                3 == t.PassengerType && !t.convertStu && !t.isStudentToAdult
              );
            },
            gotoSchoolPage: function () {
              var t = this;
              this.navigateTo({
                url: "/pages/activity/train/school/school",
                callback: function (e) {
                  var a = e.selectedUniversity,
                    i = void 0 === a ? {} : a,
                    n = i.cn,
                    o = void 0 === n ? "" : n;
                  (i.name =
                    o && o.length > 10
                      ? o.slice(0, 7) + "..." + o.slice(-2)
                      : o),
                    t.setData({ selectedUniversity: i });
                },
              });
            },
            setTicketOffsetTime: function (t) {
              t !== this.data.ticketOffsetTime &&
                this.setData({ ticketOffsetTime: t });
            },
            toggleChildrenProtocal: function () {
              this.setData({
                isChildrenProtocalAgree: !this.data.isChildrenProtocalAgree,
              });
            },
            openSpringFestivalRulePop: function () {
              var t = this.state.activityPreInfo;
              null != t &&
                t.activityRuleUrl &&
                x.Z.commonNavigator(null == t ? void 0 : t.activityRuleUrl);
            },
            validateDates: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return !!t.length || ((0, k.showModal)("请先选择日期"), !1);
            },
            validateTrains: function (t) {
              return !!t.length || ((0, k.showModal)("请先选择车次"), !1);
            },
            validateSeats: function (t) {
              return (
                !!t.filter(function (t) {
                  return t.selected;
                }).length || ((0, k.showModal)("请先选择座席"), !1)
              );
            },
            validatePas: function (t) {
              return t.length
                ? !(
                    t.map(function (t) {
                      return t.isChild;
                    }).length < this.data.freeChildren.length &&
                    ((0, k.showToast)(
                      "免费乘车儿童数量已超过持票成年旅客数量，超过的儿童需按照儿童票价购买儿童票。"
                    ),
                    1)
                  )
                : ((0, k.showModal)("请先选择乘客"), !1);
            },
            isIncludeChildrenPsgByChoose: function () {
              var t,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
              return (
                e.find(function (t) {
                  return t.isChild;
                }) ||
                (null === (t = this.data.freeChildren) || void 0 === t
                  ? void 0
                  : t.length) > 0
              );
            },
            validateInput: function (t) {
              return t
                ? !!G.Z.isMobile(t) ||
                    ((0, k.showModal)("请输入正确的手机号"), !1)
                : ((0, k.showModal)("输入手机号"), !1);
            },
            gotoChildrenH5: function () {
              v.Z.twebview({
                data: {
                  url: "https://".concat(
                    T.default.h5domain,
                    "/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=child"
                  ),
                },
              });
            },
            gotoStudentH5: function () {
              v.Z.twebview({
                data: {
                  url: "https://".concat(
                    T.default.h5domain,
                    "/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=student"
                  ),
                },
              });
            },
            doLogin: function (t) {
              var e = this;
              P.ZP.doLogin()
                .then(function () {
                  e.setData({ isLogin: !0 }), t && t();
                })
                .catch(function (t) {
                  console.log(t);
                });
            },
            filterChosenTrainListStr: function (t) {
              var e = this;
              return t
                ? t
                    .split(",")
                    .filter(function (t) {
                      var a;
                      return (
                        t !==
                        (null == e || null === (a = e.mainTrain) || void 0 === a
                          ? void 0
                          : a.TrainNumber)
                      );
                    })
                    .join(",")
                : "";
            },
            filterAndFormatOtherDateStr: function () {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
              return e.length
                ? e
                    .filter(function (e) {
                      return (
                        L()(e).valueOf() !== L()(t.mainTrainDate).valueOf()
                      );
                    })
                    .map(function (t) {
                      return L()(t).format("M月D日");
                    })
                    .join(",")
                : "";
            },
            filterOtherSeatStr: function (t) {
              var e = this;
              return t
                ? t
                    .split(",")
                    .filter(function (t) {
                      return t !== e.mainTrainSeatName;
                    })
                    .join(",")
                : "";
            },
            confirmCalendarDrawer: function (t) {
              var e = this.data.otherDates;
              this.hideBackDrop(),
                e.join(",") !== t.join(",") &&
                  (e[0] !== t[0] && this.setChosenTrainListAndSeats([]),
                  this.setData({ otherDates: t }),
                  this.checkIsPreSale(),
                  this.getRecommendTrainOrSeatDrawerInfo(!0),
                  this.getCombineSeatPlan(),
                  this.getGrabPreInitInfo(),
                  this.resetCouponPrice(),
                  this.getGrabXPageProductDetail()
                    .then(function () {})
                    .catch(function (t) {
                      console.log(t);
                    }));
            },
            getGrabCouponInfo: function () {
              var t = this,
                e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              return (0, Y.rv)({
                userInfo: { phone: P.ZP.userName },
                isAppointment: !1 === e ? 0 : 1,
              }).then(function (e) {
                1 === e.resultCode &&
                  e.couponDetailInfo &&
                  (t.couponList = e.couponDetailInfo);
              });
            },
            resetCouponPrice: function () {
              var t,
                e = this.data,
                a = e.otherTrainsSeatsArr,
                i = e.allPas;
              if (
                0 === a.length ||
                a.every(function (t) {
                  return !t.selected;
                })
              )
                this.setData({ couponChooseTotalPrice: 0 });
              else {
                var n =
                    x._.max(
                      a
                        .filter(function (t) {
                          return t.selected;
                        })
                        .map(function (t) {
                          return t.SeatPrice;
                        })
                    ) || 0,
                  o = 0;
                if (
                  (null === (t = this.chosenCrossStations) || void 0 === t
                    ? void 0
                    : t.length) > 0
                ) {
                  var r = C.ZP.formatCrossSolutions(
                    this.chosenCrossStations,
                    a
                  ).map(function (t) {
                    return t.f_extraAmount;
                  });
                  o = Math.max.apply(Math, [0].concat((0, m.Z)(r)));
                }
                var s = (0, U.ui)((0, U.IH)(n, o), i.length || 1),
                  c = (
                    (0, W.gh)({
                      couponList: this.couponList,
                      chooseProductList: [],
                      ticketPrice: s,
                    }) || {}
                  ).couponChooseTotalPrice,
                  l = void 0 === c ? 0 : c;
                this.setData({ couponChooseTotalPrice: l });
              }
            },
          };
          K.Z.useMixin(gt, [J, Q]);
          var bt =
            (0, F.h)()(
              (at =
                w()(gt)(
                  (at = (function (t) {
                    (0, r.Z)(a, t);
                    var e = (0, s.Z)(a);
                    function a() {
                      return (0, n.Z)(this, a), e.apply(this, arguments);
                    }
                    return (
                      (0, o.Z)(a, [
                        {
                          key: "render",
                          value: function () {
                            var t = this,
                              e = this.data,
                              a = e.headInfo,
                              i = e.isFromBookx,
                              n = void 0 !== i && i,
                              o = e.ticketInfoView,
                              r = e.dStationStr,
                              s = e.aStationStr,
                              c = e.exchange,
                              l = e.chosenTrainListStr,
                              d = e.otherSeatStr,
                              u = e.grabSeatProductsShowType,
                              h = e.robWindowProduct,
                              f = e.robWindowNum,
                              b = e.robRoadProduct,
                              S = e.robRoadNum,
                              N = e.robConsecutiveSeatsProduct,
                              w = e.robSameCarriageProduct,
                              v = e.isRobSameCarriage,
                              T = e.isRobBed,
                              C = e.isRobConsecutiveSeats,
                              x = e.grabSeatProductsDesc,
                              k = e.robBedProduct,
                              P = e.robBottomBedProduct,
                              V = e.robBedNum,
                              _ = e.robBottomBedNum,
                              R = e.isRobBottomBed,
                              X = e.allPas,
                              O = e.freeChildren,
                              z = e.isChildrenProtocalAgree,
                              H = e.grabDualChannelDesc,
                              L = e.houBuChannel,
                              G = e.isPasNumExceedMax,
                              j = e.yuPiaoChannel,
                              E = e.isShowDualChannel,
                              F = e.isShowStudentChannel,
                              W = e.isHouBuConfig,
                              U = e.isLogin,
                              Y = e.canGetMobile,
                              q = e.qiangpiaoTips,
                              K = e.convertStu,
                              J = e.mobile,
                              Q = e.showType,
                              tt = e.ticketOffsetTime,
                              at = e.chosenTrainList,
                              ot = e.grabEndTimeInfo,
                              st = e.otherDates,
                              dt = e.isShowStuGrabBanner,
                              ht = e.studentActivityInfo,
                              ft = e.activityPreInfo,
                              pt = e.isCrossTrainBannerSelected,
                              gt = e.recommendTrainOrSeatDrawerInfo,
                              bt = e.crossStationBannerInfo,
                              St = e.recommendDrawerDefaultSelected,
                              Nt = e.noSeatInfo,
                              wt = e.recommnedCombineSeatInfo,
                              vt = e.xbookUpSeatName,
                              Tt = e.couponChooseTotalPrice;
                            return (0, Z.BX)(g.Block, {
                              children: [
                                (0, Z.BX)(g.View, {
                                  className: "page " + (mt ? "ty" : "zx"),
                                  children: [
                                    (0, Z.BX)(g.View, {
                                      className: "wrap " + (mt ? "ty" : "zx"),
                                      children: [
                                        (0, Z.BX)(g.View, {
                                          className: "top-bg",
                                          children: [
                                            (0, Z.tZ)(g.View, {
                                              className: "top-bg-img",
                                            }),
                                            (0, Z.BX)(g.View, {
                                              className: "content",
                                              children: [
                                                (0, Z.tZ)(g.View, {
                                                  className: "big-title",
                                                  children: a ? a.title : "",
                                                }),
                                                (0, Z.BX)(g.View, {
                                                  className: "big-desc-box",
                                                  children: [
                                                    (0, Z.tZ)(I.ZtRichText, {
                                                      className: "big-desc",
                                                      nodes: a
                                                        ? a.subTitle
                                                        : "",
                                                    }),
                                                    (null == ft
                                                      ? void 0
                                                      : ft.activityRuleUrl) &&
                                                      (0, Z.tZ)(g.Image, {
                                                        className:
                                                          "big-desc-icon",
                                                        src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_16.png",
                                                        id: "AHCE",
                                                        onClick:
                                                          this
                                                            .openSpringFestivalRulePop,
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, Z.tZ)(g.View, {
                                          className: "top-bg-top",
                                        }),
                                        (0, Z.BX)(g.View, {
                                          className:
                                            "qiangpiao-box " +
                                            (mt ? "ty" : "zx"),
                                          children: [
                                            (0, Z.tZ)(g.View, {
                                              className: "qiangpiao-white",
                                              children: (0, Z.BX)(g.View, {
                                                className: "qiangpiao-set",
                                                children: [
                                                  n
                                                    ? (0, Z.tZ)(nt, {
                                                        ticketInfo: o,
                                                      })
                                                    : (0, Z.BX)(g.View, {
                                                        className:
                                                          "qiangpiao-station",
                                                        children: [
                                                          (0, Z.tZ)(g.Text, {
                                                            className: "sfrom",
                                                            children: "出发站",
                                                          }),
                                                          (0, Z.tZ)(g.Text, {
                                                            className: "sto",
                                                            children: "到达站",
                                                          }),
                                                          (0, Z.BX)(g.View, {
                                                            className:
                                                              "station-box",
                                                            children: [
                                                              (0, Z.tZ)(
                                                                g.View,
                                                                {
                                                                  id: "AHCr",
                                                                  className:
                                                                    "cell from " +
                                                                    (r.length >
                                                                    5
                                                                      ? "small"
                                                                      : "") +
                                                                    " " +
                                                                    (c
                                                                      ? "exchange"
                                                                      : ""),
                                                                  "data-type":
                                                                    "d",
                                                                  "data-ubt-key":
                                                                    "wx_setgrab_chooseStation",
                                                                  onClick:
                                                                    this.chooseStation.bind(
                                                                      this,
                                                                      "d"
                                                                    ),
                                                                  children: r,
                                                                }
                                                              ),
                                                              (0, Z.tZ)(
                                                                g.View,
                                                                {
                                                                  id: "AHCs",
                                                                  className:
                                                                    "cell to " +
                                                                    (s.length >
                                                                    5
                                                                      ? "small"
                                                                      : "") +
                                                                    " " +
                                                                    (c
                                                                      ? "exchange"
                                                                      : ""),
                                                                  "data-type":
                                                                    "a",
                                                                  "data-ubt-key":
                                                                    "wx_setgrab_chooseStation",
                                                                  onClick:
                                                                    this.chooseStation.bind(
                                                                      this,
                                                                      "a"
                                                                    ),
                                                                  children: s,
                                                                }
                                                              ),
                                                              (0, Z.tZ)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "switch",
                                                                  style:
                                                                    "transform: " +
                                                                    (c
                                                                      ? "rotate(360deg)"
                                                                      : ""),
                                                                  "data-ubt-key":
                                                                    "wx_setgrab_exchangeStation",
                                                                  id: "AHCF",
                                                                  onClick:
                                                                    this
                                                                      .exchangeStation,
                                                                  children: (0,
                                                                  Z.tZ)(
                                                                    g.Text,
                                                                    {
                                                                      className:
                                                                        "ifont-chage iconfont",
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                  (0, Z.BX)(g.View, {
                                                    className: "train-list",
                                                    children: [
                                                      (0, Z.BX)(g.View, {
                                                        className:
                                                          "item add-box",
                                                        id: "AHCG",
                                                        onClick:
                                                          this.chooseOtherDate,
                                                        "data-ubt-key":
                                                          "wx_setgrab_chooseOtherDate",
                                                        children: [
                                                          (0, Z.tZ)(g.Text, {
                                                            className: "label",
                                                            children:
                                                              "出发日期",
                                                          }),
                                                          (0, Z.tZ)(g.View, {
                                                            className: "cont",
                                                            style:
                                                              this.filterAndFormatOtherDateStr(
                                                                st
                                                              )
                                                                ? ""
                                                                : "color: #999999;font-weight: normal;",
                                                            children:
                                                              this.filterAndFormatOtherDateStr(
                                                                st
                                                              ) || "建议多选",
                                                          }),
                                                          (0, Z.BX)(g.View, {
                                                            className:
                                                              "tuijian color-primary",
                                                            children: [
                                                              "多选",
                                                              (0, Z.tZ)(
                                                                g.Text,
                                                                {
                                                                  className:
                                                                    "ifont-arr iconfont color-primary",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, Z.BX)(g.View, {
                                                        className:
                                                          "item add-box",
                                                        id: "AHCH",
                                                        onClick:
                                                          this.chooseOtherTrain,
                                                        "data-ubt-key":
                                                          "wx_setgrab_chooseOtherTrain",
                                                        children: [
                                                          (0, Z.tZ)(g.Text, {
                                                            className: "label",
                                                            children:
                                                              "指定车次",
                                                          }),
                                                          (0, Z.tZ)(g.View, {
                                                            className: "cont",
                                                            style:
                                                              this.filterChosenTrainListStr(
                                                                l
                                                              )
                                                                ? ""
                                                                : "color: #999999;font-weight: normal;",
                                                            children:
                                                              this.filterChosenTrainListStr(
                                                                l
                                                              ) || "建议多选",
                                                          }),
                                                          (0, Z.BX)(g.View, {
                                                            className:
                                                              "tuijian color-primary",
                                                            children: [
                                                              "多选",
                                                              (0, Z.tZ)(
                                                                g.Text,
                                                                {
                                                                  className:
                                                                    "ifont-arr iconfont color-primary",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, Z.BX)(g.View, {
                                                        className:
                                                          "item add-box",
                                                        id: "AHCI",
                                                        onClick:
                                                          this.chooseOtherSeat,
                                                        "data-ubt-key":
                                                          "wx_setgrab_chooseOtherSeat",
                                                        children: [
                                                          (0, Z.tZ)(g.Text, {
                                                            className: "label",
                                                            children:
                                                              "指定座席",
                                                          }),
                                                          (0, Z.tZ)(g.View, {
                                                            className: "cont",
                                                            style:
                                                              this.filterOtherSeatStr(
                                                                d
                                                              )
                                                                ? ""
                                                                : "color: #999999;font-weight: normal;",
                                                            children:
                                                              this.filterOtherSeatStr(
                                                                d
                                                              ) || "建议多选",
                                                          }),
                                                          (0, Z.BX)(g.View, {
                                                            className:
                                                              "tuijian color-primary",
                                                            children: [
                                                              "多选",
                                                              (0, Z.tZ)(
                                                                g.Text,
                                                                {
                                                                  className:
                                                                    "ifont-arr iconfont color-primary",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  u > 0 &&
                                                    X &&
                                                    X.length > 0 &&
                                                    (0, Z.BX)(g.Block, {
                                                      children: [
                                                        2 === u &&
                                                          (0, Z.BX)(g.View, {
                                                            className:
                                                              "qp-seat-pay more-width " +
                                                              (mt
                                                                ? "ty"
                                                                : "zx"),
                                                            children: [
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "item line3",
                                                                  children: [
                                                                    (0, Z.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "tit",
                                                                        children:
                                                                          [
                                                                            h.title,
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.Text,
                                                                              {
                                                                                className:
                                                                                  "rbox",
                                                                                children:
                                                                                  h.priceTag,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, Z.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "counter-box",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "minus",
                                                                                id: "AHCJ",
                                                                                onClick:
                                                                                  this
                                                                                    .minusRobWindow,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "no",
                                                                                children:
                                                                                  f,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "add",
                                                                                id: "AHCK",
                                                                                onClick:
                                                                                  this
                                                                                    .addRobWindow,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "item line3",
                                                                  children: [
                                                                    (0, Z.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "tit",
                                                                        children:
                                                                          [
                                                                            b.title,
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.Text,
                                                                              {
                                                                                className:
                                                                                  "rbox",
                                                                                children:
                                                                                  (0,
                                                                                  Z.tZ)(
                                                                                    g.Text,
                                                                                    {
                                                                                      children:
                                                                                        b.priceTag,
                                                                                    }
                                                                                  ),
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, Z.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "counter-box",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "minus",
                                                                                id: "AHCL",
                                                                                onClick:
                                                                                  this
                                                                                    .minusRobRoad,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "no",
                                                                                children:
                                                                                  S,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "add",
                                                                                id: "AHCM",
                                                                                onClick:
                                                                                  this
                                                                                    .addRobRoad,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "item line3",
                                                                  children: [
                                                                    w &&
                                                                      w.title &&
                                                                      (0, Z.BX)(
                                                                        Z.HY,
                                                                        {
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              Z.tZ)(
                                                                                g.View,
                                                                                {
                                                                                  className:
                                                                                    "tit",
                                                                                  children:
                                                                                    w.title,
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              Z.BX)(
                                                                                g.View,
                                                                                {
                                                                                  className:
                                                                                    "txt",
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      Z.tZ)(
                                                                                        g.Text,
                                                                                        {
                                                                                          children:
                                                                                            w.priceTag,
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      Z.tZ)(
                                                                                        g.Text,
                                                                                        {
                                                                                          className:
                                                                                            (v
                                                                                              ? "ifont-radioed"
                                                                                              : "ifont-radio") +
                                                                                            " iconfont " +
                                                                                            (v &&
                                                                                              "color-primary"),
                                                                                          id: "AHCN",
                                                                                          onClick:
                                                                                            this
                                                                                              .toggleRobSameCarriage,
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                    N &&
                                                                      N.title &&
                                                                      (0, Z.BX)(
                                                                        Z.HY,
                                                                        {
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              Z.tZ)(
                                                                                g.View,
                                                                                {
                                                                                  className:
                                                                                    "tit",
                                                                                  children:
                                                                                    N.title,
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              Z.BX)(
                                                                                g.View,
                                                                                {
                                                                                  className:
                                                                                    "txt",
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      Z.tZ)(
                                                                                        g.Text,
                                                                                        {
                                                                                          children:
                                                                                            N.priceTag,
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      Z.tZ)(
                                                                                        g.Text,
                                                                                        {
                                                                                          id: "AHCt",
                                                                                          className:
                                                                                            (C
                                                                                              ? "ifont-radioed"
                                                                                              : "ifont-radio") +
                                                                                            " iconfont " +
                                                                                            (C &&
                                                                                              "color-primary") +
                                                                                            " " +
                                                                                            (S +
                                                                                              f >=
                                                                                            2
                                                                                              ? "disabled"
                                                                                              : ""),
                                                                                          onClick:
                                                                                            this
                                                                                              .toggleRobConsecutiveSeats,
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, Z.tZ)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "horizontal-line",
                                                                }
                                                              ),
                                                              x &&
                                                                (0, Z.tZ)(
                                                                  I.ZtRichText,
                                                                  {
                                                                    className:
                                                                      "info",
                                                                    nodes: x,
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                        (3 === u || 1 === u) &&
                                                          (0, Z.BX)(g.View, {
                                                            className:
                                                              "qp-seat-pay " +
                                                              (mt
                                                                ? "ty"
                                                                : "zx"),
                                                            children: [
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "item line2",
                                                                  children: [
                                                                    (0, Z.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        style:
                                                                          3 ===
                                                                          u
                                                                            ? {
                                                                                flexDirection:
                                                                                  "column",
                                                                                alignItems:
                                                                                  "start",
                                                                                display:
                                                                                  "flex",
                                                                              }
                                                                            : {},
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "tit",
                                                                                children:
                                                                                  h.title,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "txt",
                                                                                children:
                                                                                  h.priceTag,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    3 === u
                                                                      ? (0,
                                                                        Z.BX)(
                                                                          g.View,
                                                                          {
                                                                            className:
                                                                              "counter-box",
                                                                            children:
                                                                              [
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.View,
                                                                                  {
                                                                                    className:
                                                                                      "minus",
                                                                                    id: "AHCO",
                                                                                    onClick:
                                                                                      this
                                                                                        .minusRobWindow,
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.View,
                                                                                  {
                                                                                    className:
                                                                                      "no",
                                                                                    children:
                                                                                      f,
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.View,
                                                                                  {
                                                                                    className:
                                                                                      "add",
                                                                                    id: "AHCP",
                                                                                    onClick:
                                                                                      this
                                                                                        .addRobWindow,
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        )
                                                                      : (0,
                                                                        Z.tZ)(
                                                                          g.Text,
                                                                          {
                                                                            className:
                                                                              (f
                                                                                ? "ifont-radioed"
                                                                                : "ifont-radio") +
                                                                              " iconfont " +
                                                                              (f &&
                                                                                "color-primary"),
                                                                            id: "AHCQ",
                                                                            onClick:
                                                                              this
                                                                                .toggleRob,
                                                                            "data-type":
                                                                              "window",
                                                                          }
                                                                        ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "item line2",
                                                                  children: [
                                                                    (0, Z.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        style:
                                                                          3 ===
                                                                          u
                                                                            ? {
                                                                                flexDirection:
                                                                                  "column",
                                                                                alignItems:
                                                                                  "start",
                                                                                display:
                                                                                  "flex",
                                                                              }
                                                                            : {},
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "tit",
                                                                                children:
                                                                                  b.title,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "txt",
                                                                                children:
                                                                                  b.priceTag,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    3 === u
                                                                      ? (0,
                                                                        Z.BX)(
                                                                          g.View,
                                                                          {
                                                                            className:
                                                                              "counter-box",
                                                                            children:
                                                                              [
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.View,
                                                                                  {
                                                                                    className:
                                                                                      "minus",
                                                                                    id: "AHCR",
                                                                                    onClick:
                                                                                      this
                                                                                        .minusRobRoad,
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.View,
                                                                                  {
                                                                                    className:
                                                                                      "no",
                                                                                    children:
                                                                                      S,
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.View,
                                                                                  {
                                                                                    className:
                                                                                      "add",
                                                                                    id: "AHCS",
                                                                                    onClick:
                                                                                      this
                                                                                        .addRobRoad,
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        )
                                                                      : (0,
                                                                        Z.tZ)(
                                                                          g.Text,
                                                                          {
                                                                            className:
                                                                              (S
                                                                                ? "ifont-radioed"
                                                                                : "ifont-radio") +
                                                                              " iconfont " +
                                                                              (S &&
                                                                                "color-primary"),
                                                                            id: "AHCT",
                                                                            onClick:
                                                                              this
                                                                                .toggleRob,
                                                                            "data-type":
                                                                              "road",
                                                                          }
                                                                        ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, Z.tZ)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "horizontal-line",
                                                                }
                                                              ),
                                                              x &&
                                                                (0, Z.tZ)(
                                                                  I.ZtRichText,
                                                                  {
                                                                    className:
                                                                      "info",
                                                                    nodes: x,
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                        4 === u &&
                                                          (0, Z.BX)(g.View, {
                                                            className:
                                                              "qp-seat-pay " +
                                                              (mt
                                                                ? "ty"
                                                                : "zx"),
                                                            children: [
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "item" +
                                                                    (null !=
                                                                      w &&
                                                                    w.title
                                                                      ? " line2"
                                                                      : " line1"),
                                                                  children: [
                                                                    !(
                                                                      null !=
                                                                        w &&
                                                                      w.title
                                                                    ) &&
                                                                      (0, Z.tZ)(
                                                                        g.Text,
                                                                        {
                                                                          className:
                                                                            "ifont-bad iconfont color-primary",
                                                                        }
                                                                      ),
                                                                    (0, Z.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            Z.BX)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "tit",
                                                                                children:
                                                                                  [
                                                                                    k.title,
                                                                                    !(
                                                                                      null !=
                                                                                        w &&
                                                                                      w.title
                                                                                    ) &&
                                                                                      (0,
                                                                                      Z.tZ)(
                                                                                        g.Text,
                                                                                        {
                                                                                          className:
                                                                                            "price",
                                                                                          children:
                                                                                            (0,
                                                                                            Z.tZ)(
                                                                                              g.Text,
                                                                                              {
                                                                                                children:
                                                                                                  k.priceTag,
                                                                                              }
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            (null ==
                                                                            w
                                                                              ? void 0
                                                                              : w.title) &&
                                                                              (0,
                                                                              Z.tZ)(
                                                                                g.View,
                                                                                {
                                                                                  className:
                                                                                    "txt",
                                                                                  children:
                                                                                    k.priceTag,
                                                                                }
                                                                              ),
                                                                            !(
                                                                              null !=
                                                                                w &&
                                                                              w.title
                                                                            ) &&
                                                                              x &&
                                                                              (0,
                                                                              Z.tZ)(
                                                                                I.ZtRichText,
                                                                                {
                                                                                  className:
                                                                                    "txt",
                                                                                  nodes:
                                                                                    x,
                                                                                }
                                                                              ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, Z.tZ)(
                                                                      g.Text,
                                                                      {
                                                                        className:
                                                                          (T
                                                                            ? "ifont-radioed"
                                                                            : "ifont-radio") +
                                                                          " iconfont " +
                                                                          (T &&
                                                                            "color-primary"),
                                                                        id: "AHCU",
                                                                        onClick:
                                                                          this
                                                                            .toggleRobBed,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (null == w
                                                                ? void 0
                                                                : w.title) &&
                                                                (0, Z.BX)(
                                                                  Z.HY,
                                                                  {
                                                                    children: [
                                                                      (0, Z.BX)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "item line2",
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              Z.BX)(
                                                                                g.View,
                                                                                {
                                                                                  className:
                                                                                    "cont",
                                                                                  style:
                                                                                    3 ===
                                                                                    u
                                                                                      ? {
                                                                                          flexDirection:
                                                                                            "column",
                                                                                          alignItems:
                                                                                            "start",
                                                                                          display:
                                                                                            "flex",
                                                                                        }
                                                                                      : {},
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      Z.tZ)(
                                                                                        g.View,
                                                                                        {
                                                                                          className:
                                                                                            "tit",
                                                                                          children:
                                                                                            w.title,
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      Z.tZ)(
                                                                                        g.View,
                                                                                        {
                                                                                          className:
                                                                                            "txt",
                                                                                          children:
                                                                                            w.priceTag,
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              Z.tZ)(
                                                                                g.Text,
                                                                                {
                                                                                  className:
                                                                                    (v
                                                                                      ? "ifont-radioed"
                                                                                      : "ifont-radio") +
                                                                                    " iconfont " +
                                                                                    (v &&
                                                                                      "color-primary"),
                                                                                  id: "AHCV",
                                                                                  onClick:
                                                                                    this
                                                                                      .toggleRobSameCarriage,
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                      (0, Z.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "horizontal-line",
                                                                        }
                                                                      ),
                                                                      x &&
                                                                        (0,
                                                                        Z.tZ)(
                                                                          I.ZtRichText,
                                                                          {
                                                                            className:
                                                                              "info",
                                                                            nodes:
                                                                              x,
                                                                          }
                                                                        ),
                                                                    ],
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                        7 === u &&
                                                          (0, Z.BX)(g.View, {
                                                            className:
                                                              "qp-seat-pay " +
                                                              (mt
                                                                ? "ty"
                                                                : "zx"),
                                                            children: [
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "item" +
                                                                    (null !=
                                                                      w &&
                                                                    w.title
                                                                      ? " line2"
                                                                      : " line1"),
                                                                  children: [
                                                                    !(
                                                                      null !=
                                                                        w &&
                                                                      w.title
                                                                    ) &&
                                                                      (0, Z.tZ)(
                                                                        g.Text,
                                                                        {
                                                                          className:
                                                                            "ifont-bad iconfont color-primary",
                                                                        }
                                                                      ),
                                                                    (0, Z.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            Z.BX)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "tit",
                                                                                children:
                                                                                  [
                                                                                    P.title,
                                                                                    !(
                                                                                      null !=
                                                                                        w &&
                                                                                      w.title
                                                                                    ) &&
                                                                                      (0,
                                                                                      Z.tZ)(
                                                                                        g.Text,
                                                                                        {
                                                                                          className:
                                                                                            "price",
                                                                                          children:
                                                                                            (0,
                                                                                            Z.tZ)(
                                                                                              g.Text,
                                                                                              {
                                                                                                children:
                                                                                                  P.priceTag,
                                                                                              }
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            (null ==
                                                                            w
                                                                              ? void 0
                                                                              : w.title) &&
                                                                              (0,
                                                                              Z.tZ)(
                                                                                g.View,
                                                                                {
                                                                                  className:
                                                                                    "txt",
                                                                                  children:
                                                                                    P.priceTag,
                                                                                }
                                                                              ),
                                                                            !(
                                                                              null !=
                                                                                w &&
                                                                              w.title
                                                                            ) &&
                                                                              x &&
                                                                              (0,
                                                                              Z.tZ)(
                                                                                I.ZtRichText,
                                                                                {
                                                                                  className:
                                                                                    "txt",
                                                                                  nodes:
                                                                                    x,
                                                                                }
                                                                              ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, Z.tZ)(
                                                                      g.Text,
                                                                      {
                                                                        className:
                                                                          (R
                                                                            ? "ifont-radioed"
                                                                            : "ifont-radio") +
                                                                          " iconfont " +
                                                                          (R &&
                                                                            "color-primary"),
                                                                        id: "AHCW",
                                                                        onClick:
                                                                          this
                                                                            .toggleRobBottomBed,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (null == w
                                                                ? void 0
                                                                : w.title) &&
                                                                (0, Z.BX)(
                                                                  Z.HY,
                                                                  {
                                                                    children: [
                                                                      (0, Z.BX)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "item line2",
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              Z.BX)(
                                                                                g.View,
                                                                                {
                                                                                  className:
                                                                                    "cont",
                                                                                  style:
                                                                                    3 ===
                                                                                    u
                                                                                      ? {
                                                                                          flexDirection:
                                                                                            "column",
                                                                                          alignItems:
                                                                                            "start",
                                                                                          display:
                                                                                            "flex",
                                                                                        }
                                                                                      : {},
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      Z.tZ)(
                                                                                        g.View,
                                                                                        {
                                                                                          className:
                                                                                            "tit",
                                                                                          children:
                                                                                            w.title,
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      Z.tZ)(
                                                                                        g.View,
                                                                                        {
                                                                                          className:
                                                                                            "txt",
                                                                                          children:
                                                                                            w.priceTag,
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              Z.tZ)(
                                                                                g.Text,
                                                                                {
                                                                                  className:
                                                                                    (v
                                                                                      ? "ifont-radioed"
                                                                                      : "ifont-radio") +
                                                                                    " iconfont " +
                                                                                    (v &&
                                                                                      "color-primary"),
                                                                                  id: "AHCX",
                                                                                  onClick:
                                                                                    this
                                                                                      .toggleRobSameCarriage,
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                      (0, Z.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "horizontal-line",
                                                                        }
                                                                      ),
                                                                      x &&
                                                                        (0,
                                                                        Z.tZ)(
                                                                          I.ZtRichText,
                                                                          {
                                                                            className:
                                                                              "info",
                                                                            nodes:
                                                                              x,
                                                                          }
                                                                        ),
                                                                    ],
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                        (5 === u || 6 === u) &&
                                                          (0, Z.BX)(g.View, {
                                                            className:
                                                              "qp-seat-pay " +
                                                              (mt
                                                                ? "ty"
                                                                : "zx"),
                                                            children: [
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "item ".concat(
                                                                      null !=
                                                                        w &&
                                                                        w.title
                                                                        ? "line3"
                                                                        : "line2"
                                                                    ),
                                                                  children: [
                                                                    (0, Z.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        style:
                                                                          6 !==
                                                                            u ||
                                                                          (null !=
                                                                            w &&
                                                                            w.title)
                                                                            ? {}
                                                                            : {
                                                                                flexDirection:
                                                                                  "column",
                                                                                alignItems:
                                                                                  "start",
                                                                                display:
                                                                                  "flex",
                                                                              },
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            Z.BX)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "tit",
                                                                                children:
                                                                                  [
                                                                                    k.title,
                                                                                    (null ==
                                                                                    w
                                                                                      ? void 0
                                                                                      : w.title) &&
                                                                                      (0,
                                                                                      Z.tZ)(
                                                                                        g.Text,
                                                                                        {
                                                                                          className:
                                                                                            "rbox",
                                                                                          children:
                                                                                            (0,
                                                                                            Z.tZ)(
                                                                                              g.Text,
                                                                                              {
                                                                                                children:
                                                                                                  k.priceTag,
                                                                                              }
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            !(
                                                                              null !=
                                                                                w &&
                                                                              w.title
                                                                            ) &&
                                                                              (0,
                                                                              Z.tZ)(
                                                                                g.View,
                                                                                {
                                                                                  className:
                                                                                    "txt",
                                                                                  children:
                                                                                    k.priceTag,
                                                                                }
                                                                              ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    6 === u
                                                                      ? (0,
                                                                        Z.BX)(
                                                                          g.View,
                                                                          {
                                                                            className:
                                                                              "counter-box",
                                                                            children:
                                                                              [
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.View,
                                                                                  {
                                                                                    className:
                                                                                      "minus",
                                                                                    id: "AHCY",
                                                                                    onClick:
                                                                                      function () {
                                                                                        t.minusRobBedOrBottomBed(
                                                                                          "Bed"
                                                                                        );
                                                                                      },
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.View,
                                                                                  {
                                                                                    className:
                                                                                      "no",
                                                                                    children:
                                                                                      V,
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.View,
                                                                                  {
                                                                                    className:
                                                                                      "add",
                                                                                    id: "AHCZ",
                                                                                    onClick:
                                                                                      function () {
                                                                                        t.addRobBedOrBottomBed(
                                                                                          "Bed"
                                                                                        );
                                                                                      },
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        )
                                                                      : (0,
                                                                        Z.tZ)(
                                                                          g.Text,
                                                                          {
                                                                            className:
                                                                              (V
                                                                                ? "ifont-radioed"
                                                                                : "ifont-radio") +
                                                                              " iconfont " +
                                                                              (V &&
                                                                                "color-primary"),
                                                                            id: "AHCa",
                                                                            onClick:
                                                                              function () {
                                                                                t.toggleRobBedOrBottomBed(
                                                                                  "Bed"
                                                                                );
                                                                              },
                                                                          }
                                                                        ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "item ".concat(
                                                                      null !=
                                                                        w &&
                                                                        w.title
                                                                        ? "line3"
                                                                        : "line2"
                                                                    ),
                                                                  children: [
                                                                    (0, Z.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        style:
                                                                          6 !==
                                                                            u ||
                                                                          (null !=
                                                                            w &&
                                                                            w.title)
                                                                            ? {}
                                                                            : {
                                                                                flexDirection:
                                                                                  "column",
                                                                                alignItems:
                                                                                  "start",
                                                                                display:
                                                                                  "flex",
                                                                              },
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            Z.BX)(
                                                                              g.View,
                                                                              {
                                                                                className:
                                                                                  "tit",
                                                                                children:
                                                                                  [
                                                                                    P.title,
                                                                                    (null ==
                                                                                    w
                                                                                      ? void 0
                                                                                      : w.title) &&
                                                                                      (0,
                                                                                      Z.tZ)(
                                                                                        g.Text,
                                                                                        {
                                                                                          className:
                                                                                            "rbox",
                                                                                          children:
                                                                                            (0,
                                                                                            Z.tZ)(
                                                                                              g.Text,
                                                                                              {
                                                                                                children:
                                                                                                  P.priceTag,
                                                                                              }
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            !(
                                                                              null !=
                                                                                w &&
                                                                              w.title
                                                                            ) &&
                                                                              (0,
                                                                              Z.tZ)(
                                                                                g.View,
                                                                                {
                                                                                  className:
                                                                                    "txt",
                                                                                  children:
                                                                                    P.priceTag,
                                                                                }
                                                                              ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    6 === u
                                                                      ? (0,
                                                                        Z.BX)(
                                                                          g.View,
                                                                          {
                                                                            className:
                                                                              "counter-box",
                                                                            children:
                                                                              [
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.View,
                                                                                  {
                                                                                    className:
                                                                                      "minus",
                                                                                    id: "AHCb",
                                                                                    onClick:
                                                                                      function () {
                                                                                        t.minusRobBedOrBottomBed(
                                                                                          "BottomBed"
                                                                                        );
                                                                                      },
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.View,
                                                                                  {
                                                                                    className:
                                                                                      "no",
                                                                                    children:
                                                                                      _,
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.View,
                                                                                  {
                                                                                    className:
                                                                                      "add",
                                                                                    id: "AHCc",
                                                                                    onClick:
                                                                                      function () {
                                                                                        t.addRobBedOrBottomBed(
                                                                                          "BottomBed"
                                                                                        );
                                                                                      },
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        )
                                                                      : (0,
                                                                        Z.tZ)(
                                                                          g.Text,
                                                                          {
                                                                            className:
                                                                              (_
                                                                                ? "ifont-radioed"
                                                                                : "ifont-radio") +
                                                                              " iconfont " +
                                                                              (_ &&
                                                                                "color-primary"),
                                                                            id: "AHCd",
                                                                            onClick:
                                                                              function () {
                                                                                t.toggleRobBedOrBottomBed(
                                                                                  "BottomBed"
                                                                                );
                                                                              },
                                                                          }
                                                                        ),
                                                                  ],
                                                                }
                                                              ),
                                                              (null == w
                                                                ? void 0
                                                                : w.title) &&
                                                                (0, Z.BX)(
                                                                  g.View,
                                                                  {
                                                                    className:
                                                                      "item line3",
                                                                    children: [
                                                                      (0, Z.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "tit",
                                                                          children:
                                                                            w.title,
                                                                        }
                                                                      ),
                                                                      (0, Z.BX)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "txt",
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              Z.tZ)(
                                                                                g.Text,
                                                                                {
                                                                                  children:
                                                                                    w.priceTag,
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              Z.tZ)(
                                                                                g.Text,
                                                                                {
                                                                                  className:
                                                                                    (v
                                                                                      ? "ifont-radioed"
                                                                                      : "ifont-radio") +
                                                                                    " iconfont " +
                                                                                    (v &&
                                                                                      "color-primary"),
                                                                                  id: "AHCe",
                                                                                  onClick:
                                                                                    this
                                                                                      .toggleRobSameCarriage,
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              (0, Z.tZ)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "horizontal-line",
                                                                }
                                                              ),
                                                              x &&
                                                                (0, Z.tZ)(
                                                                  I.ZtRichText,
                                                                  {
                                                                    className:
                                                                      "info",
                                                                    nodes: x,
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                      ],
                                                    }),
                                                  bt &&
                                                    (0, Z.tZ)(ct, {
                                                      propStyle:
                                                        "padding: 10px 10px 8px 10px;margin:0px -10px 10px -10px",
                                                      isTieyou: mt,
                                                      content: bt,
                                                      checked: pt,
                                                      showStrideTrainTips: !0,
                                                      btnName: "多选",
                                                      onCheckChange:
                                                        this
                                                          .onCrossStationBannerChange,
                                                      onMoreClick:
                                                        this
                                                          .onClickCrossStationBannerMore,
                                                    }),
                                                ],
                                              }),
                                            }),
                                            E &&
                                              W &&
                                              (0, Z.BX)(g.View, {
                                                className:
                                                  "hbp-banner " +
                                                  (mt ? "ty" : "zx"),
                                                children: [
                                                  (0, Z.BX)(g.View, {
                                                    className: "strong ".concat(
                                                      !L.open ||
                                                        -1 !==
                                                          [1, 4, 6].indexOf(
                                                            L.open.status
                                                          ) ||
                                                        L._show
                                                        ? "strong-more"
                                                        : ""
                                                    ),
                                                    children: [
                                                      (0, Z.tZ)(g.View, {
                                                        className: "img-tit",
                                                      }),
                                                      (0, Z.tZ)(g.Text, {
                                                        className:
                                                          "tag bgcolor-primary",
                                                        children:
                                                          L &&
                                                          L.open &&
                                                          -1 !==
                                                            [1, 4, 6].indexOf(
                                                              L.open.status
                                                            )
                                                            ? "未开启"
                                                            : H.titleTag || "",
                                                      }),
                                                      L.open &&
                                                        -1 ===
                                                          [1, 4, 6].indexOf(
                                                            L.open.status
                                                          ) &&
                                                        (0, Z.BX)(g.Text, {
                                                          className: "tgrey",
                                                          id: "AHCf",
                                                          onClick:
                                                            this
                                                              .onClickDualChannelShow,
                                                          children: [
                                                            L._show
                                                              ? "收起详情"
                                                              : "展开详情",
                                                            (0, Z.tZ)(g.Text, {
                                                              className:
                                                                "".concat(
                                                                  L._show
                                                                    ? "ifont-arrup"
                                                                    : "ifont-arrdown",
                                                                  " iconfont"
                                                                ),
                                                            }),
                                                          ],
                                                        }),
                                                      !(
                                                        L.open &&
                                                        -1 ===
                                                          [1, 4, 6].indexOf(
                                                            L.open.status
                                                          )
                                                      ) &&
                                                        (0, Z.BX)(g.Text, {
                                                          className: "tgrey",
                                                          id: "AHCg",
                                                          onClick:
                                                            this
                                                              .gotoDualChannelH5Page,
                                                          children: [
                                                            H && H.desc
                                                              ? H.desc
                                                              : "了解双通道",
                                                            (0, Z.tZ)(g.Text, {
                                                              className:
                                                                "ifont-arr iconfont",
                                                            }),
                                                          ],
                                                        }),
                                                    ],
                                                  }),
                                                  (!L.open ||
                                                    -1 !==
                                                      [1, 4, 6].indexOf(
                                                        L.open.status
                                                      ) ||
                                                    L._show) &&
                                                    (0, Z.BX)(g.Block, {
                                                      children: [
                                                        L &&
                                                          1 == L.type &&
                                                          (0, Z.BX)(g.View, {
                                                            className: "item",
                                                            children: [
                                                              (0, Z.tZ)(
                                                                g.Icon,
                                                                {
                                                                  className:
                                                                    "icon-hbp",
                                                                }
                                                              ),
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "cont",
                                                                  children: [
                                                                    (0, Z.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "tit",
                                                                        children:
                                                                          [
                                                                            L.name ||
                                                                              "候补购票通道",
                                                                            L.open &&
                                                                              -1 ===
                                                                                [
                                                                                  1,
                                                                                  4,
                                                                                  6,
                                                                                ].indexOf(
                                                                                  L
                                                                                    .open
                                                                                    .status
                                                                                ) &&
                                                                              (0,
                                                                              Z.tZ)(
                                                                                g.Text,
                                                                                {
                                                                                  className:
                                                                                    " iconfont ifont-detail",
                                                                                  id: "AHCh",
                                                                                  onClick:
                                                                                    this
                                                                                      .gotoDualChannelH5Page,
                                                                                }
                                                                              ),
                                                                            (0,
                                                                            Z.tZ)(
                                                                              g.Text,
                                                                              {
                                                                                className:
                                                                                  "tag-line",
                                                                                children:
                                                                                  L.tag ||
                                                                                  "",
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    G
                                                                      ? (0,
                                                                        Z.tZ)(
                                                                          g.View,
                                                                          {
                                                                            className:
                                                                              "txt",
                                                                            children:
                                                                              L
                                                                                .noOpen
                                                                                .remark ||
                                                                              "铁路规定:最多只支持3人同时候补购票 ",
                                                                          }
                                                                        )
                                                                      : 4 ===
                                                                          L.open
                                                                            .status ||
                                                                        6 ===
                                                                          L.open
                                                                            .status
                                                                      ? (0,
                                                                        Z.tZ)(
                                                                          g.View,
                                                                          {
                                                                            className:
                                                                              "txt",
                                                                            children:
                                                                              "需激活12306畅行会员，您可先下单，后激活",
                                                                          }
                                                                        )
                                                                      : (0,
                                                                        Z.tZ)(
                                                                          g.View,
                                                                          {
                                                                            className:
                                                                              "txt",
                                                                            children:
                                                                              L.desc,
                                                                          }
                                                                        ),
                                                                  ],
                                                                }
                                                              ),
                                                              L.open &&
                                                                (0, Z.BX)(
                                                                  g.View,
                                                                  {
                                                                    className:
                                                                      "rbox",
                                                                    children: [
                                                                      L.open &&
                                                                        -1 !==
                                                                          [
                                                                            1,
                                                                            4,
                                                                            6,
                                                                          ].indexOf(
                                                                            L
                                                                              .open
                                                                              .status
                                                                          ) &&
                                                                        (0,
                                                                        Z.tZ)(
                                                                          g.Button,
                                                                          {
                                                                            className:
                                                                              "btn-go btn-primary",
                                                                            id: "AHCi",
                                                                            onClick:
                                                                              function () {
                                                                                return t.gotoOpenHouBuChannel(
                                                                                  "trace"
                                                                                );
                                                                              },
                                                                            children:
                                                                              "去开启",
                                                                          }
                                                                        ),
                                                                      L.open &&
                                                                        -1 ===
                                                                          [
                                                                            1,
                                                                            4,
                                                                            6,
                                                                          ].indexOf(
                                                                            L
                                                                              .open
                                                                              .status
                                                                          ) &&
                                                                        (0,
                                                                        Z.BX)(
                                                                          g.Block,
                                                                          {
                                                                            children:
                                                                              [
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.Icon,
                                                                                  {
                                                                                    className:
                                                                                      "icon-check",
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.Text,
                                                                                  {
                                                                                    className:
                                                                                      "tblue",
                                                                                    children:
                                                                                      "已开启",
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        ),
                                                                    ],
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                        j &&
                                                          0 == j.type &&
                                                          (0, Z.BX)(g.View, {
                                                            className: "item",
                                                            children: [
                                                              (0, Z.tZ)(
                                                                g.Icon,
                                                                {
                                                                  className:
                                                                    "icon-yupiao",
                                                                }
                                                              ),
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "cont",
                                                                  children: [
                                                                    (0, Z.tZ)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "tit",
                                                                        children:
                                                                          j.name ||
                                                                          "余票监控通道",
                                                                      }
                                                                    ),
                                                                    (0, Z.tZ)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "txt",
                                                                        children:
                                                                          j.desc ||
                                                                          "实时查询线路余票，一旦有票立即秒杀",
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "rbox",
                                                                  children: [
                                                                    (0, Z.tZ)(
                                                                      g.Icon,
                                                                      {
                                                                        className:
                                                                          "icon-check",
                                                                      }
                                                                    ),
                                                                    (0, Z.tZ)(
                                                                      g.Text,
                                                                      {
                                                                        className:
                                                                          "tblue",
                                                                        children:
                                                                          "已开启",
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                            dt &&
                                              F &&
                                              (0, Z.tZ)(g.View, {
                                                className:
                                                  "student-grab-banner-ctn",
                                                children: (0, Z.tZ)($, {
                                                  studentActivityInfo: ht,
                                                  isTieyou: mt,
                                                }),
                                              }),
                                            (0, Z.BX)(g.View, {
                                              className: "qiangpiao-white",
                                              children: [
                                                W && E
                                                  ? (0, Z.tZ)(g.Block, {
                                                      children: G
                                                        ? (0, Z.tZ)(g.View, {
                                                            className:
                                                              "qiangpiao-tips",
                                                            children:
                                                              "超过" +
                                                              H.candidateMaxPassengerCount +
                                                              "人仅支持余票监控通道，多名乘客建议分开下单，成功率更高",
                                                          })
                                                        : q &&
                                                          (0, Z.tZ)(g.View, {
                                                            className:
                                                              "qiangpiao-tips",
                                                            children: q,
                                                          }),
                                                    })
                                                  : (0, Z.tZ)(g.Block, {
                                                      children:
                                                        q &&
                                                        (0, Z.tZ)(g.View, {
                                                          className:
                                                            "qiangpiao-tips",
                                                          children: q,
                                                        }),
                                                    }),
                                                (0, Z.BX)(g.View, {
                                                  className: "pasg-list",
                                                  children: [
                                                    []
                                                      .concat(
                                                        (0, m.Z)(X),
                                                        (0, m.Z)(O)
                                                      )
                                                      .map(function (e, a) {
                                                        return (0, Z.BX)(
                                                          g.View,
                                                          {
                                                            className:
                                                              "item pas-item",
                                                            children: [
                                                              (0, Z.tZ)(
                                                                g.Text,
                                                                {
                                                                  className:
                                                                    "ifont-pasgdel iconfont color-red",
                                                                  id: "AHCj",
                                                                  onClick:
                                                                    function () {
                                                                      t.deletePas(
                                                                        e,
                                                                        a
                                                                      );
                                                                    },
                                                                  "data-ubt-key":
                                                                    "wx_setgrab_deletePas",
                                                                }
                                                              ),
                                                              (0, Z.BX)(
                                                                g.View,
                                                                {
                                                                  className:
                                                                    "item-content",
                                                                  children: [
                                                                    (0, Z.BX)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "name",
                                                                        children:
                                                                          [
                                                                            e.pasName,
                                                                            1 ==
                                                                              e.PassengerType ||
                                                                            (3 ==
                                                                              e.PassengerType &&
                                                                              K)
                                                                              ? (0,
                                                                                Z.tZ)(
                                                                                  g.Text,
                                                                                  {
                                                                                    className:
                                                                                      "tag-type",
                                                                                    children:
                                                                                      "成人票",
                                                                                  }
                                                                                )
                                                                              : 2 ==
                                                                                e.PassengerType
                                                                              ? (0,
                                                                                Z.BX)(
                                                                                  p
                                                                                    .default
                                                                                    .Fragment,
                                                                                  {
                                                                                    children:
                                                                                      [
                                                                                        (0,
                                                                                        Z.tZ)(
                                                                                          g.Text,
                                                                                          {
                                                                                            className:
                                                                                              "tag-type",
                                                                                            children:
                                                                                              "儿童票",
                                                                                          }
                                                                                        ),
                                                                                        e.isFreeChild &&
                                                                                          (0,
                                                                                          Z.tZ)(
                                                                                            g.Text,
                                                                                            {
                                                                                              className:
                                                                                                "tag-free",
                                                                                              children:
                                                                                                "免费",
                                                                                            }
                                                                                          ),
                                                                                      ],
                                                                                  }
                                                                                )
                                                                              : 3 ==
                                                                                  e.PassengerType &&
                                                                                !K &&
                                                                                (0,
                                                                                Z.tZ)(
                                                                                  g.Text,
                                                                                  {
                                                                                    className:
                                                                                      "tag-type",
                                                                                    children:
                                                                                      "学生票",
                                                                                  }
                                                                                ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, Z.tZ)(
                                                                      g.View,
                                                                      {
                                                                        className:
                                                                          "cert",
                                                                        children:
                                                                          e
                                                                            .idcard
                                                                            .showCode,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              2 ==
                                                                e.PassengerType &&
                                                                (0, Z.tZ)(
                                                                  g.View,
                                                                  {
                                                                    className:
                                                                      "item-info color-primary",
                                                                    id: "AHCk",
                                                                    onClick:
                                                                      t.gotoChildrenH5,
                                                                    children:
                                                                      "儿童票须知",
                                                                  }
                                                                ),
                                                              3 ==
                                                                e.PassengerType &&
                                                                !e.convertStu &&
                                                                (0, Z.tZ)(
                                                                  g.View,
                                                                  {
                                                                    className:
                                                                      "item-info color-primary",
                                                                    id: "AHCl",
                                                                    onClick:
                                                                      t.gotoStudentH5,
                                                                    children:
                                                                      "学生票须知",
                                                                  }
                                                                ),
                                                            ],
                                                          },
                                                          "index"
                                                        );
                                                      }),
                                                    !U && Y
                                                      ? (0, Z.tZ)(g.View, {
                                                          className: "none",
                                                          children: (0, Z.BX)(
                                                            g.Button,
                                                            {
                                                              className:
                                                                "item btn-pasg-big color-primary fake-view",
                                                              "data-ubt-key":
                                                                "wx_setgrab_showpas",
                                                              id: "AHCm",
                                                              onClick:
                                                                this.doLogin,
                                                              children: [
                                                                (0, Z.tZ)(
                                                                  g.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-add iconfont",
                                                                  }
                                                                ),
                                                                "选择乘客(成人/儿童)",
                                                              ],
                                                            }
                                                          ),
                                                        })
                                                      : (0, Z.tZ)(g.Block, {
                                                          children: (0, Z.BX)(
                                                            g.View,
                                                            {
                                                              className:
                                                                "item btn-pasg-big color-primary",
                                                              id: "AHCn",
                                                              onClick:
                                                                this
                                                                  .gotoPsgPage,
                                                              "data-ubt-key":
                                                                "wx_setgrab_gotoPsgPage",
                                                              children: [
                                                                (0, Z.tZ)(
                                                                  g.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-add iconfont",
                                                                  }
                                                                ),
                                                                "选择乘客(成人/儿童)",
                                                              ],
                                                            }
                                                          ),
                                                        }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, Z.tZ)(g.View, {
                                              className: "qiangpiao-white",
                                              children: (0, Z.tZ)(g.View, {
                                                className: "train-list mt5",
                                                children: (0, Z.BX)(g.View, {
                                                  className: "item add-box",
                                                  children: [
                                                    (0, Z.tZ)(g.Text, {
                                                      className: "label phone",
                                                      children: "联系手机",
                                                    }),
                                                    (0, Z.tZ)(g.View, {
                                                      className: "cont",
                                                      children: (0, Z.tZ)(
                                                        g.CustomWrapper,
                                                        {
                                                          children: (0, Z.tZ)(
                                                            g.Input,
                                                            {
                                                              type: "number",
                                                              className:
                                                                "input-box",
                                                              value: J,
                                                              maxlength: "11",
                                                              placeholder:
                                                                "用于接收短信",
                                                              onInput:
                                                                function (e) {
                                                                  t.setDebounceMobileInputValue(),
                                                                    t.mobileInput(
                                                                      e
                                                                    );
                                                                },
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            ot &&
                                              (0, Z.tZ)(g.View, {
                                                className: "qiangpiao-white",
                                                children: (0, Z.tZ)(rt, {
                                                  time: tt,
                                                  setTime:
                                                    this.setTicketOffsetTime,
                                                  chosenTrainList: at,
                                                  grabEndTimeInfo: ot,
                                                  otherDates: st,
                                                }),
                                              }),
                                            (0, Z.tZ)(A.Z, {}),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, Z.BX)(g.View, {
                                      className: "pay-box",
                                      children: [
                                        this.isIncludeChildrenPsgByChoose(X) &&
                                          (0, Z.BX)(g.View, {
                                            className: "child-notice-box",
                                            children: [
                                              (0, Z.tZ)(g.Text, {
                                                className: "".concat(
                                                  z
                                                    ? "ifont-radioed"
                                                    : "ifont-radio",
                                                  " iconfont color-primary check-box"
                                                ),
                                                id: "AHCo",
                                                onClick:
                                                  this.toggleChildrenProtocal,
                                              }),
                                              (0, Z.tZ)(g.Text, {
                                                className: "tip",
                                                children:
                                                  "本人是订单中未成年人的监护人或已征得其监护人同意，允许平台以提供产品或服务为目的，处理未成年人信息。",
                                              }),
                                            ],
                                          }),
                                        (0, Z.BX)(g.View, {
                                          className: "btn-next-box",
                                          children: [
                                            (0, Z.tZ)(g.Button, {
                                              className: "btn-grab btn-next",
                                              id: "AHCp",
                                              onClick: this.goNext,
                                              "data-ubt-key":
                                                "wx_setgrab_goNext",
                                              children: "下一步",
                                            }),
                                            Tt > 0 &&
                                              (0, Z.BX)(g.View, {
                                                className: "tagBox",
                                                children: [
                                                  (0, Z.BX)(g.View, {
                                                    className: "tagTxt",
                                                    children: [
                                                      "您有¥",
                                                      Tt,
                                                      "优惠券，下单可用",
                                                    ],
                                                  }),
                                                  (0, Z.tZ)(g.Image, {
                                                    className: "tagAngle",
                                                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/quan/tag_triangle.webp",
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Z.BX)(g.View, {
                                  className: mt ? "ty" : "zx",
                                  children: [
                                    "otherSeats" == Q &&
                                      (0, Z.tZ)(lt.Z, {
                                        visible: "otherSeats" == Q,
                                        chosenTrainList: at,
                                        chosenSeatStr: d,
                                        mainTrainSeatName:
                                          this.mainTrainSeatName,
                                        onClose: this.hideBackDrop,
                                        onConfirm:
                                          this
                                            .checkIsIncludeStuTicketBeforeConfrimSeat,
                                      }),
                                    "hongkong" === Q &&
                                      (0, Z.tZ)(D, {
                                        hideBackDrop: this.hideBackDrop,
                                      }),
                                    (0, Z.tZ)(et, {
                                      visible: "dualChannelGuideDrawer" === Q,
                                      onClose: function () {
                                        return t.setData({ showType: "" });
                                      },
                                      onConfirm: function () {
                                        return t.activeHouBu();
                                      },
                                      onContinue: function () {
                                        return t.useYuPiao();
                                      },
                                      ubtTrace: this.ubtTrace,
                                    }),
                                    (0, Z.tZ)(it, {
                                      visible: "springFestivalRulePop" === Q,
                                      activityRule:
                                        null == ft ? void 0 : ft.activityRule,
                                      onClose: function () {
                                        return t.setData({ showType: "" });
                                      },
                                    }),
                                    (0, Z.tZ)(ut, {
                                      isTieyou: mt,
                                      visible:
                                        "recommendTrainOrSeatDrawer" === Q,
                                      content: gt,
                                      chosenSeatStr: d,
                                      recommendDrawerDefaultSelected: St,
                                      noSeatInfo: Nt,
                                      upSeatName: vt,
                                      recommnedCombineSeatInfo: wt,
                                      clearSeatUpgrade:
                                        this.clearXbookSeatUpgrade,
                                      onClose: function (e) {
                                        t.setData({ showType: "" }),
                                          t.handleDrawerCrossStationsOperation(
                                            e
                                          );
                                      },
                                      onNext:
                                        this.onRecommendTrainOrSeatDrawerNext,
                                    }),
                                    (0, Z.tZ)(M.Z, {
                                      visible: "otherDateDrawer" === Q,
                                      beginDate: this.calendarStartDate,
                                      endDate: this.calendarEndDate,
                                      tip: "<span style='font-weight:500;font-family:PingFangSC-Medium;color:#FD8700;'>温馨提示：</span>抢票高峰，多选几个日期，成功率更高",
                                      preRobDays: this.preRobDays,
                                      hasSelectedDateList: st,
                                      mainTrainDate: [this.mainTrainDate],
                                      onClose: this.hideBackDrop,
                                      onConfirm: this.confirmCalendarDrawer,
                                    }),
                                  ],
                                }),
                                (0, Z.tZ)(y.Z, {
                                  ref: function (e) {
                                    t.onDialogAttach(e);
                                  },
                                }),
                                (0, Z.tZ)(B.Z, {
                                  ref: function (e) {
                                    t.onDrawerAttach(e);
                                  },
                                }),
                              ],
                            });
                          },
                        },
                      ]),
                      a
                    );
                  })(p.default.Component))
                ) || at)
            ) || at;
          Page(
            (0, i.createPageConfig)(
              bt,
              "pages/trainRob/setgrab/setgrab",
              { root: { cn: [] } },
              {
                disableScroll: !0,
                navigationBarTitleText: "抢票设置",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(
          0,
          [
            31593, 35203, 4978, 20858, 19772, 87032, 82524, 43278, 42552, 67074,
            62396, 54576, 85786, 20481, 14810, 3997, 55464, 50460, 7934, 74492,
            77923, 35835, 1768, 37210, 88520, 17175, 94577, 21272, 28718, 19559,
            11216, 68592,
          ],
          function () {
            return (function (e) {
              return t((t.s = e));
            })(31496);
          }
        ),
          t.O();
      },
    ]);
})();
