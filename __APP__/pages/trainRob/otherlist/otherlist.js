!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/e5d3d1be4be16b526d43188e1b24d26e.js"),
    require("../sub-common/b9b90ce6b0bcea0a42ee7c876e5332a8.js"),
    require("../sub-common/c5a1335291d7af5f9be9250e6fe584a7.js"),
    require("../sub-common/a7d9cc482f204c2537ff8bb0545f78ac.js"),
    require("../sub-common/eb83024cebd740a80bacaa0967772083.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [82347],
      {
        83394: function (e, t, n) {
          var r = n(32180),
            i = n(57042),
            a = n(24460),
            o = n(81876),
            c = n(21867),
            s = n(86066),
            u = n(52500),
            l = n(65573),
            m = n(71515),
            d = (n(92954), n(79792)),
            f = n(44778),
            p = n(21999),
            T = n(81957),
            h = n(58676),
            v = n(34229),
            g = n(84828),
            S = n(25391),
            b = n(48813),
            N = u.default.memo(function (e) {
              var t,
                n,
                r,
                i,
                a = e.trainInfo,
                o = void 0 === a ? {} : a,
                c = e.isHouBuConfig,
                s = void 0 !== c && c,
                u = e.index,
                l = void 0 === u ? -1 : u,
                f = e.isRecommendation,
                p = void 0 !== f && f,
                T = e.departStation,
                h = void 0 === T ? "" : T,
                v = e.excludeTrainStrs,
                g = void 0 === v ? "" : v,
                N = e.toggleTrain,
                x = void 0 === N ? function () {} : N,
                Z = function (e) {
                  return (0, b.BX)(m.View, {
                    className: "seat-item flex",
                    children: [
                      0 == e.SeatInventory &&
                        o.IsCanHB &&
                        s &&
                        (0, b.BX)(m.Block, {
                          children: [
                            (0, b.tZ)(m.Text, {
                              className: "normal-txt ".concat(
                                e.SeatInventory ? "" : "disabled"
                              ),
                              children:
                                "无座" === e.SeatName || "硬座" === e.SeatName
                                  ? e.SeatName
                                  : e.SeatName.replace("座", ""),
                            }),
                            (0, b.tZ)(m.Text, {
                              className: "normal-txt color-red houbu",
                              children: "候补",
                            }),
                          ],
                        }),
                      !(0 == e.SeatInventory && o.IsCanHB && s) &&
                        (0, b.BX)(m.Block, {
                          children: [
                            (0, b.tZ)(m.Text, {
                              className: "normal-txt ".concat(
                                e.SeatInventory ? "" : "disabled"
                              ),
                              children:
                                e.SeatInventory < 20
                                  ? ("无座" === e.SeatName ||
                                    "硬座" === e.SeatName
                                      ? e.SeatName
                                      : e.SeatName.replace("座", "")) +
                                    " " +
                                    e.SeatInventory +
                                    "张"
                                  : ("无座" === e.SeatName ||
                                    "硬座" === e.SeatName
                                      ? e.SeatName
                                      : e.SeatName.replace("座", "")) + " 有",
                            }),
                            0 == e.SeatInventory &&
                              (0, b.tZ)(m.Text, {
                                className: "normal-txt color-red",
                                children: "(抢)",
                              }),
                          ],
                        }),
                    ],
                  });
                },
                L =
                  "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/05/icon_line_20_checkbox_"
                    .concat(null != o && o.current ? "on" : "off")
                    .concat(
                      null != o && o.current && d.default.isTieyou ? "_ty" : "",
                      ".webp"
                    );
              if (null != g && g.length) {
                var D = ""
                  .concat(null == o ? void 0 : o.DepartStation, "-")
                  .concat(null == o ? void 0 : o.TrainNumber, "-")
                  .concat(null == o ? void 0 : o.ArriveStation);
                ((null == g ? void 0 : g.split(",")) || []).findIndex(function (
                  e
                ) {
                  return e === D;
                }) > -1 &&
                  (L =
                    "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/btn_checkbox.webp");
              }
              var w =
                  p &&
                  (null == o ? void 0 : o.RateText) &&
                  (null == o ? void 0 : o.RateRatio) > 0,
                y = !p && (null == o ? void 0 : o.isPreSale),
                _ = !p && !o.isPreSale && o.SeatCount > 0;
              return (0, b.BX)(
                m.View,
                {
                  className: "grab-train-card flex ".concat(
                    w || y || (!p && !o.isPreSale && !o.SeatCount) ? "pb74" : ""
                  ),
                  "data-index": l,
                  id: "train_idx_".concat(l),
                  onClick: function () {
                    return x();
                  },
                  children: [
                    (0, b.BX)(m.View, {
                      className: "first flex flex-column",
                      children: [
                        (0, b.tZ)(m.Text, {
                          className: "time",
                          children: o.DepartTime,
                        }),
                        (0, b.tZ)(m.Text, {
                          className: "normal-txt sta ".concat(
                            h !== o.DepartStation ? "h-color" : ""
                          ),
                          children: o.DepartStation,
                        }),
                        _ &&
                          (null == o || null === (t = o.seats) || void 0 === t
                            ? void 0
                            : t.length) > 0 &&
                          Z(null == o ? void 0 : o.seats[0]),
                      ],
                    }),
                    (0, b.BX)(m.View, {
                      className: "second flex-align-items-center flex-column",
                      children: [
                        (0, b.tZ)(m.Text, {
                          className: "normal-txt gray-color time-cost",
                          children: o.TimesCost,
                        }),
                        (0, b.tZ)(m.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon_ht_lb@3x.png",
                          mode: "widthFix",
                          className: "sel-icon",
                        }),
                        (0, b.BX)(m.View, {
                          className: "flex-center",
                          children: [
                            (0, b.tZ)(m.Text, {
                              className: "normal-txt gray-color",
                              children: o.TrainNumber,
                            }),
                            o.IsFastPass &&
                              (0, b.tZ)(m.Image, {
                                className: "idcard-icon",
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/tag_list_idcard.png",
                              }),
                          ],
                        }),
                        _ &&
                          (null == o || null === (n = o.seats) || void 0 === n
                            ? void 0
                            : n.length) > 1 &&
                          Z(null == o ? void 0 : o.seats[1]),
                      ],
                    }),
                    (0, b.BX)(m.View, {
                      className: "third flex flex-column",
                      children: [
                        o.TakeDays > 0 &&
                          (0, b.tZ)(m.Text, {
                            className: "small",
                            children: "+".concat(o.TakeDays),
                          }),
                        (0, b.tZ)(m.Text, {
                          className: "time",
                          children: o.ArriveTime,
                        }),
                        (0, b.tZ)(m.Text, {
                          className: "normal-txt sta",
                          children: o.ArriveStation,
                        }),
                        _ &&
                          (null == o || null === (r = o.seats) || void 0 === r
                            ? void 0
                            : r.length) > 2 &&
                          Z(null == o ? void 0 : o.seats[2]),
                      ],
                    }),
                    (0, b.BX)(m.View, {
                      className: "fourth flex flex-column",
                      children: [
                        (0, b.tZ)(m.Image, {
                          className: "check-icon",
                          src: L,
                          webp: !0,
                        }),
                        _ &&
                          (null == o || null === (i = o.seats) || void 0 === i
                            ? void 0
                            : i.length) > 3 &&
                          Z(null == o ? void 0 : o.seats[3]),
                      ],
                    }),
                    y &&
                      (0, b.tZ)(m.View, {
                        className: "normal-txt color-red o_tips",
                        children: o.preSaleTimeStr,
                      }),
                    !p &&
                      !o.isPreSale &&
                      !o.SeatCount &&
                      (0, b.tZ)(m.View, {
                        className: "normal-txt color-red o_tips",
                        children: "暂无余票，"
                          .concat(o.IsCanHB && s ? "可候补抢票" : "建议抢票")
                          .concat(
                            o.SucRate
                              ? "，抢票成功率: " +
                                  S.ZP.getSuccessRateText(o.SucRate)
                              : ""
                          ),
                      }),
                    w &&
                      (0, b.tZ)(m.View, {
                        className: "normal-txt o_tips ".concat(
                          d.default.isTieyou ? "ty" : "zx"
                        ),
                        children: o.RateText,
                      }),
                  ],
                },
                "TrainNumber"
              );
            }),
            x = n(8271),
            Z = n.n(x),
            L = u.default.memo(
              (0, l.$j)(function (e) {
                return { page: e.page };
              })(function (e) {
                var t = e.trainList,
                  n = void 0 === t ? [] : t,
                  r = e.page,
                  i = e.onSelect,
                  a = void 0 === i ? function () {} : i;
                if (
                  ((0, u.useEffect)(function () {
                    null == r ||
                      r.ubtTrace("s_trn_z_10650060874", {
                        exposureType: "normal",
                        bizKey: "z_grab_list_recommend_plan_show",
                      });
                  }, []),
                  (null == n ? void 0 : n.length) <= 0)
                )
                  return null;
                var o = function (e, t) {
                    var n =
                      "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/05/icon_line_20_checkbox_"
                        .concat(e ? "on" : "off")
                        .concat(e && d.default.isTieyou ? "_ty" : "", ".webp");
                    return (0, b.tZ)(m.Image, {
                      className: "check-icon",
                      src: n,
                      webp: !0,
                      id: "AHBk",
                      onClick: function () {
                        return (function (e) {
                          e.isSelected ||
                            null == r ||
                            r.ubtTrace("c_trn_z_10650060874", {
                              bizKey: "z_grab_list_recommend_plan_click",
                            }),
                            a(e.originIndex);
                        })(t);
                      },
                    });
                  },
                  c = function (e) {
                    if (
                      null != e &&
                      e.departDateTime &&
                      null != e &&
                      e.arriveDateTime
                    ) {
                      var t = Z()(Z()(e.departDateTime).format("YYYYMMDD"));
                      return Z()(Z()(e.arriveDateTime).format("YYYYMMDD")).diff(
                        t,
                        "day"
                      );
                    }
                    return 0;
                  };
                return (0, b.BX)(m.View, {
                  className: "qp-otherlist-rtl",
                  children: [
                    (0, b.tZ)(m.View, {
                      className: "r-tit",
                      children: "推荐车次",
                    }),
                    (0, b.tZ)(m.Swiper, {
                      className: "t-list",
                      nextMargin: 1 === n.length ? "0" : "40px",
                      snapToEdge: !0,
                      children: n.map(function (e, t) {
                        return (0,
                        b.tZ)(m.SwiperItem, { children: (0, b.BX)(m.View, { className: "item", children: [(0, b.BX)(m.View, { className: "cont-box flex-align-items-center", children: [(0, b.BX)(m.View, { className: "from txt flex flex-column", children: [(0, b.tZ)(m.Text, { className: "time", children: e.departTime }), (0, b.tZ)(m.Text, { className: "txt_1", children: e.departStation })] }), (0, b.BX)(m.View, { className: "mid flex-center flex-column", children: [(0, b.tZ)(m.Text, { className: "txt_2", children: e.costTime }), (0, b.tZ)(m.Image, { src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon_ht_lb@3x.png", mode: "widthFix", className: "sel-icon" }), (0, b.tZ)(m.Text, { className: "txt_2", children: e.trainNumber })] }), (0, b.BX)(m.View, { className: "to txt flex flex-column", children: [(0, b.tZ)(m.Text, { className: "time", children: e.arriveTime }), (0, b.tZ)(m.Text, { className: "txt_1", children: e.arriveStation }), c(e) > 0 && (0, b.tZ)(m.Text, { className: "diff-day", children: "+".concat(c(e)) })] }), o(e.isSelected, e)] }), e.tips && (0, b.tZ)(v.ZtRichText, { className: "desc", nodes: e.tips })] }) }, t);
                      }),
                    }),
                  ],
                });
              })
            ),
            D = u.default.memo(
              (0, l.$j)(
                function (e) {
                  return {
                    isShowEmptyListTips: e.isShowEmptyListTips,
                    primeOtherTrainList: e.primeOtherTrainList,
                    isHouBuConfig: e.isHouBuConfig,
                    primeRecommendTrainList: e.primeRecommendTrainList,
                    chooseTrainNumberList: e.chooseTrainNumberList,
                    departStation: e.departStation,
                    nearTrainList: e.nearTrainList,
                    mainTrainTag: e.mainTrainTag,
                    excludeTrainStrs: e.excludeTrainStrs,
                  };
                },
                function (e) {
                  var t = e.primeOtherTrainList,
                    n = e.primeRecommendTrainList;
                  return {
                    toggleRecommendTrain: function (e) {
                      return n.toggleRecommendTrain(e);
                    },
                    toggleOtherTrain: function (e) {
                      return t.toggleOtherTrain(e);
                    },
                  };
                }
              )(function (e) {
                var t = e.isShowEmptyListTips,
                  n = e.primeOtherTrainList,
                  r = e.primeRecommendTrainList,
                  i = e.departStation,
                  a = (e.chooseTrainNumberList, e.toggleRecommendTrain),
                  o = e.toggleOtherTrain,
                  c = e.mainTrainTag,
                  s = e.excludeTrainStrs;
                return (
                  console.log("aaa TrainListBox"),
                  (0, b.tZ)(m.View, {
                    className: "content-box",
                    children: t
                      ? (0, b.tZ)(g.Z, {})
                      : (0, b.tZ)(v.ZtVirtualList, {
                          className: "qiangpiao-list mt10 otherlist",
                          list: n,
                          screenNum: 5,
                          autoScrollTop: !1,
                          onRender: function (t, r) {
                            var a = e.isHouBuConfig,
                              u = e.nearTrainList,
                              l = ""
                                .concat(t.DepartStation, "-")
                                .concat(t.TrainNumber, "-")
                                .concat(t.ArriveStation);
                            return (0, b.BX)(m.Block, {
                              children: [
                                0 == r &&
                                  !(null != u && u.length) &&
                                  (0, b.tZ)(m.View, {
                                    className: "tit top-tit",
                                    children: "其他车次",
                                  }),
                                (0, b.tZ)(N, {
                                  trainInfo: t,
                                  isHouBuConfig: a,
                                  index: r,
                                  departStation: i,
                                  excludeTrainStrs: s,
                                  toggleTrain: function () {
                                    return o(r);
                                  },
                                }),
                                c === l &&
                                  (null == u ? void 0 : u.length) > 0 &&
                                  (0, b.tZ)(L, {
                                    trainList: u,
                                    onSelect: function (e) {
                                      return o(e);
                                    },
                                  }),
                                c === l &&
                                  (null == u ? void 0 : u.length) > 0 &&
                                  r !== (null == n ? void 0 : n.length) - 1 &&
                                  (0, b.tZ)(m.View, {
                                    className: "tit",
                                    children: "其他车次",
                                  }),
                              ],
                            });
                          },
                          onRenderTop: function () {
                            return r && r.length
                              ? (0, b.BX)(m.View, {
                                  className: "train-list qiangpiao-list",
                                  children: [
                                    (0, b.BX)(m.View, {
                                      className: "tit top-tit",
                                      children: [
                                        "推荐车次",
                                        (0, b.tZ)(m.Text, {
                                          children:
                                            "(多选几个车次，成功率更高)",
                                        }),
                                      ],
                                    }),
                                    r.map(function (e, t) {
                                      return (0, b.tZ)(
                                        m.Block,
                                        {
                                          children: (0, b.tZ)(N, {
                                            trainInfo: e,
                                            isRecommendation: !0,
                                            index: t,
                                            departStation: i,
                                            excludeTrainStrs: s,
                                            toggleTrain: function () {
                                              return a(t);
                                            },
                                          }),
                                        },
                                        t
                                      );
                                    }),
                                  ],
                                })
                              : (0, b.tZ)(m.View, {});
                          },
                        }),
                  })
                );
              })
            );
          function w(e, t, n) {
            return n
              ? null == e
                ? void 0
                : e.filter(function (e) {
                    return !t.includes(
                      ""
                        .concat(e.ArriveStation, "-")
                        .concat(e.TrainNumber, "-")
                        .concat(e.DepartStation)
                    );
                  }).length
              : e.length;
          }
          var y = u.default.memo(
              (0, l.$j)(function (e) {
                return {
                  isFilter: e.isFilter,
                  chooseTrainNumberList: e.chooseTrainNumberList,
                  excludeTrainStrs: e.excludeTrainStrs,
                };
              })(function (e) {
                var t = e.chooseTrainNumberList,
                  n = e.excludeTrainStrs,
                  r = e.isFilter;
                return (0,
                b.BX)(m.View, { className: "amount-tip", children: [(0, b.BX)(m.View, { className: "amount", children: ["已选", w(t, n, r) || 0, "个车次"] }), (0, b.tZ)(m.View, { className: "txt", children: "选择车次越多，抢票成功率越高哦" })] });
              })
            ),
            _ = n(93212),
            B = n(67133),
            R = n.n(B),
            k = n(49120),
            A = n(19926),
            C = (0, l.$j)(
              function (e) {
                var t = e.options,
                  n = e.TrainNumber,
                  r = e.allTrainList,
                  i = e.chooseTrainNumberList;
                return {
                  TrainNumber: n || "",
                  isShowModal: (null == t ? void 0 : t.isShowModal) || !1,
                  allTrainList: r || [],
                  dateInfo: (null == t ? void 0 : t.dateInfo) || {},
                  trainInfo: (null == t ? void 0 : t.trainInfo) || {},
                  chooseTrainNumberList: i || [],
                  fromPage: (null == t ? void 0 : t.fromPage) || "common",
                };
              },
              function (e) {
                var t = e.page;
                return {
                  confirm: function (e) {
                    return t.confirm(e);
                  },
                };
              }
            )(function (e) {
              var t = e.confirm,
                n = e.dateInfo,
                r = e.isShowModal,
                i = e.trainInfo,
                a = e.fromPage,
                o = void 0 === a ? "common" : a,
                c = e.allTrainList,
                s = e.chooseTrainNumberList;
              return (0, b.tZ)(m.View, {
                className: "train-btn-fixed safe-padding-bottom",
                children: (0, b.tZ)(m.Button, {
                  className: "btn-ok btn-primary",
                  hoverClass: "btn-ok_hover",
                  id: "AHBj",
                  onClick: function () {
                    if (
                      "grabDetail" === o &&
                      Array.isArray(c) &&
                      Array.isArray(s) &&
                      c.length > 0 &&
                      s.length > 0
                    )
                      if (
                        "object" === (0, _.Z)(n) &&
                        Reflect.ownKeys(n).length > 0 &&
                        !1 === r &&
                        "object" === (0, _.Z)(i) &&
                        Reflect.ownKeys(i).length > 0
                      ) {
                        var e = c.filter(function (e) {
                            return s.some(function (t) {
                              return (
                                ""
                                  .concat(e.DepartStation, "-")
                                  .concat(e.TrainNumber, "-")
                                  .concat(e.ArriveStation) ===
                                ""
                                  .concat(t.DepartStation, "-")
                                  .concat(t.TrainNumber, "-")
                                  .concat(t.ArriveStation)
                              );
                            });
                          }),
                          a = e.map(function (e) {
                            return {
                              departTime: e.DepartTime,
                              trainNumber: e.TrainNumber,
                              departStation: e.DepartStation,
                            };
                          }),
                          u = null == i ? void 0 : i.oldStationInfos,
                          l = S.ZP.findDifferentItems(a, u, [
                            "departTime",
                            "departStation",
                            "trainNumber",
                          ]);
                        if (
                          Array.isArray(l) &&
                          l.length > 0 &&
                          !0 === (null == n ? void 0 : n.isEditor)
                        ) {
                          var m = R().isShowModal(
                            u,
                            l,
                            null == n ? void 0 : n.currLeaveDate,
                            null == n ? void 0 : n.currLeaveDate
                          );
                          null != m && m.isShowModal
                            ? (0, k.getCurrentPage)().showCommonDrawer({
                                hideTitle: !0,
                                hideClose: !0,
                                maskClose: !1,
                                content: function (n) {
                                  var r = n.onClose;
                                  return (0, b.tZ)(A.Z, {
                                    pageType: "车次选择页",
                                    content: m.showMsg,
                                    onAdd: function () {
                                      t({
                                        fromPage: o,
                                        isShowModal: !0,
                                        btnType: "okBtn",
                                      }),
                                        r();
                                    },
                                    onClose: function () {
                                      var n = e.filter(function (e) {
                                        return u.some(function (t) {
                                          return (
                                            ""
                                              .concat(t.departTime, "-")
                                              .concat(t.trainNumber, "-")
                                              .concat(t.departStation) ===
                                            ""
                                              .concat(e.DepartTime, "-")
                                              .concat(e.TrainNumber, "-")
                                              .concat(e.DepartStation)
                                          );
                                        });
                                      });
                                      t({
                                        fromPage: o,
                                        isShowModal: !0,
                                        btnType: "cancelBtn",
                                        chooseTrainList: n,
                                      }),
                                        r();
                                    },
                                  });
                                },
                                className: "stride-train-drawer",
                              })
                            : t({ fromPage: o });
                        } else t({ fromPage: o });
                      } else t();
                    else t();
                  },
                  children: "确定",
                }),
              });
            }),
            I = n(298),
            O = n(20592),
            P = n(79301),
            z = n(95308),
            V = n(79910),
            X = n(13025),
            E = n(477),
            M = n(22276),
            F = n(90983);
          function H() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.TrainNumber,
              r = t.ArriveStation,
              i = t.DepartStation;
            return (
              e
                .map(function (e) {
                  return ""
                    .concat(e.ArriveStation, "-")
                    .concat(e.TrainNumber, "-")
                    .concat(e.DepartStation);
                })
                .indexOf("".concat(r, "-").concat(n, "-").concat(i)) > -1
            );
          }
          var Y = function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                n = {},
                r = (0, F.Z)(t);
              try {
                for (r.s(); !(e = r.n()).done; ) {
                  var i = e.value,
                    a = i.TrainNumber,
                    o = i.SeatList;
                  n[a] = o;
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
              return n;
            },
            j = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0,
                i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : [],
                a = arguments.length > 5 ? arguments[5] : void 0,
                o = arguments.length > 6 ? arguments[6] : void 0,
                c = arguments.length > 7 ? arguments[7] : void 0,
                s = arguments.length > 8 ? arguments[8] : void 0,
                u =
                  arguments.length > 9 && void 0 !== arguments[9]
                    ? arguments[9]
                    : [],
                l =
                  !(arguments.length > 10 && void 0 !== arguments[10]) ||
                  arguments[10],
                m = [];
              if ((null != u && u.length) || !l) m = r;
              else if (n) {
                var d = e.map(function (e) {
                    return ""
                      .concat(e.DepartStation, "-")
                      .concat(e.TrainNumber, "-")
                      .concat(e.ArriveStation);
                  }),
                  f = [].concat((0, M.Z)(d), (0, M.Z)(n.split(",")));
                m = r.filter(function (e) {
                  return !(
                    f.indexOf(
                      ""
                        .concat(e.DepartStation, "-")
                        .concat(e.TrainNumber, "-")
                        .concat(e.ArriveStation)
                    ) > -1
                  );
                });
              } else {
                var p = e.map(function (e) {
                    return e.TrainNumber;
                  }),
                  T = [].concat((0, M.Z)(p), (0, M.Z)(t.split(",")));
                m = r.filter(function (e) {
                  return !(T.indexOf(e.TrainNumber) > -1);
                });
              }
              m.forEach(function (e) {
                e.current = H(i, e);
              });
              var h = Y(r);
              e.forEach(function (e) {
                h[e.TrainNumber] && (e.SeatList = h[e.TrainNumber]);
              }),
                (m = m.filter(function (e) {
                  return !e.IsSaleStop && "列车停运" !== e.SaleNote;
                })),
                (e = e.filter(function (e) {
                  return !e.IsSaleStop && "列车停运" !== e.SaleNote;
                })),
                null != a &&
                  a.minDepartTime &&
                  (m = m.filter(function (e) {
                    var t = o + " " + e.DepartTime;
                    return (
                      Z()(null == a ? void 0 : a.minDepartTime).isBefore(
                        Z()(t)
                      ) ||
                      Z()(null == a ? void 0 : a.minDepartTime).isSame(Z()(t))
                    );
                  })),
                null != a &&
                  a.maxArriveTime &&
                  (m = m.filter(function (e) {
                    var t =
                      ((null == e ? void 0 : e.TakeDays) > 0
                        ? Z()(o)
                            .add(null == e ? void 0 : e.TakeDays, "day")
                            .format("YYYY-MM-DD")
                        : o) +
                      " " +
                      e.ArriveTime;
                    return (
                      Z()(null == a ? void 0 : a.maxArriveTime).isAfter(
                        Z()(t)
                      ) ||
                      Z()(null == a ? void 0 : a.maxArriveTime).isSame(Z()(t))
                    );
                  })),
                null != a &&
                  a.limitDepart &&
                  (m = m.filter(function (e) {
                    return (null == e ? void 0 : e.DepartStation) === c;
                  })),
                null != a &&
                  a.limitArrive &&
                  (m = m.filter(function (e) {
                    return (null == e ? void 0 : e.ArriveStation) === s;
                  }));
              var v = [];
              if (t && (null == u ? void 0 : u.length) > 0) {
                var g = t.split(","),
                  S = "".concat(c, "-").concat(g[0], "-").concat(s),
                  b = m.findIndex(function (e) {
                    return (
                      ""
                        .concat(e.DepartStation, "-")
                        .concat(e.TrainNumber, "-")
                        .concat(e.ArriveStation) === S
                    );
                  });
                if (b > -1) {
                  var N = m.splice(b, 1);
                  m = N.concat(m);
                }
                u.forEach(function (e) {
                  var t = ""
                      .concat(e.departStation, "-")
                      .concat(e.trainNumber, "-")
                      .concat(e.arriveStation),
                    n = m.findIndex(function (e) {
                      return (
                        ""
                          .concat(e.DepartStation, "-")
                          .concat(e.TrainNumber, "-")
                          .concat(e.ArriveStation) === t
                      );
                    });
                  n > -1 &&
                    v.push((0, I.Z)((0, I.Z)({}, e), {}, { originIndex: n }));
                });
              }
              return {
                primeOtherTrainList: m,
                primeRecommendTrainList: e,
                nearTrainList: v,
              };
            };
          function $() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.TrainNumber,
              r = t.ArriveStation,
              i = t.DepartStation,
              a = (e = (0, M.Z)(e))
                .map(function (e) {
                  return ""
                    .concat(e.ArriveStation, "-")
                    .concat(e.TrainNumber, "-")
                    .concat(e.DepartStation);
                })
                .indexOf("".concat(r, "-").concat(n, "-").concat(i));
            return -1 !== a ? e.splice(a, 1) : e.push(t), e;
          }
          var q = n(16575),
            J = (function () {
              var e = (0, z.Z)(
                (0, P.Z)().mark(function e(t) {
                  var n, r, i, a, o, c, s;
                  return (0, P.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = function (e) {
                              var t = e.replace(/-/g, "");
                              return (t = (t = t.replace(/:/g, "")).replace(
                                / /g,
                                ""
                              ));
                            }),
                            (i = function (e, t) {
                              var n = r(e),
                                i = (r(t).getTime() - n.getTime()) / 1e3,
                                a = parseInt(i / 3600),
                                o = parseInt((i - 3600 * a) / 60);
                              return {
                                TimesCost:
                                  a > 0
                                    ? "".concat(a, "时").concat(o, "分")
                                    : "".concat(o, "分"),
                                RunTime: 60 * a + o,
                              };
                            }),
                            (r = function (e) {
                              var t =
                                /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/i;
                              if (e.match(t)) {
                                var n = e.replace(t, "$2/$3/$1 $4:$5:$6");
                                return new Date(n);
                              }
                              return new Date(e);
                            }),
                            (e.next = 5),
                            (0, q.$3)(t)
                          );
                        case 5:
                          return (
                            (n = e.sent),
                            (o = n.trainInfos),
                            (c = (void 0 === o ? [] : o).map(function (e) {
                              var t = a(e.fromTime),
                                n = a(e.toTime);
                              return (
                                (e.fromTime = t),
                                (e.toTime = n),
                                (e.RateRatio = e.rateRatio),
                                (e.RateText = "抢票成功率: ".concat(
                                  S.ZP.getSuccessRateText(e.rateRatio)
                                )),
                                (e.TrainNumber = e.trainNum),
                                (e.RetCode = e.resultCode),
                                (e.SeatList = e.seatInfos.map(function (e) {
                                  return { SeatName: e.seatName };
                                })),
                                (0, I.Z)(
                                  (0, I.Z)({}, e),
                                  (0, I.Z)(
                                    {
                                      DepartStation: e.fromName,
                                      ArriveStation: e.toName,
                                      DepStation: e.fromName,
                                      ArrStation: e.toName,
                                      DepartTimeStamp: +r(e.fromTime),
                                      DepartTime: ""
                                        .concat(e.fromTime[8])
                                        .concat(e.fromTime[9], ":")
                                        .concat(e.fromTime[10])
                                        .concat(e.fromTime[11]),
                                      ArriveTime: ""
                                        .concat(e.toTime[8])
                                        .concat(e.toTime[9], ":")
                                        .concat(e.toTime[10])
                                        .concat(e.toTime[11]),
                                    },
                                    i(e.fromTime, e.toTime)
                                  )
                                )
                              );
                            })),
                            (s = (0, I.Z)((0, I.Z)({}, n), {
                              RecommendListBySuccessRate: JSON.parse(
                                JSON.stringify(c)
                              ),
                              RecommendTrainList: JSON.parse(JSON.stringify(c)),
                            })),
                            e.abrupt("return", s)
                          );
                        case 10:
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
            K = {
              primeRecommendTrainList: {
                state: [],
                reducers: {
                  set: function (e, t) {
                    return t;
                  },
                  clear: function () {
                    return [];
                  },
                },
                effects: function (e) {
                  return {
                    getGrabTicketRecommendTrainList: function (e, t) {
                      var n = this;
                      return (0, z.Z)(
                        (0, P.Z)().mark(function r() {
                          var i, a, o, c, s, u, l, m, d, f, p;
                          return (0, P.Z)().wrap(function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (
                                    (i = e.DepartStation),
                                    (a = void 0 === i ? "" : i),
                                    (o = e.ArriveStation),
                                    (c = void 0 === o ? "" : o),
                                    (s = e.DepartureDates),
                                    (u = void 0 === s ? "" : s),
                                    (l = e.TrainNumber),
                                    (m = void 0 === l ? "" : l),
                                    (d = e.SeatName),
                                    (f = {
                                      FromName: a,
                                      ToName: c,
                                      FromDates: u,
                                      TrainNums: m,
                                      SeatNames: void 0 === d ? "" : d,
                                      GrabType: 0,
                                    }),
                                    (r.next = 4),
                                    J(f)
                                  );
                                case 4:
                                  if (
                                    1 != (p = r.sent).resultCode ||
                                    !V._.isArray(p.RecommendTrainList)
                                  ) {
                                    r.next = 11;
                                    break;
                                  }
                                  return (
                                    p.RecommendTrainList.forEach(function (e) {
                                      e.current = H(t.chooseTrainNumberList, e);
                                    }),
                                    n.set(p.RecommendTrainList),
                                    r.abrupt("return", p.RecommendTrainList)
                                  );
                                case 11:
                                  return r.abrupt("return", []);
                                case 12:
                                case "end":
                                  return r.stop();
                              }
                          }, r);
                        })
                      )();
                    },
                    toggleRecommendTrain: function (t, n) {
                      return (0, z.Z)(
                        (0, P.Z)().mark(function r() {
                          var i, a, o, c;
                          return (0, P.Z)().wrap(function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  if (
                                    ((i = n.primeRecommendTrainList),
                                    (a = n.options),
                                    (o = i[t]).current ||
                                      !(
                                        n.chooseTrainNumberList.length >=
                                        E.Z.maxOtherAmount
                                      ))
                                  ) {
                                    r.next = 5;
                                    break;
                                  }
                                  return r.abrupt(
                                    "return",
                                    (0, k.showToast)(
                                      "最多选择".concat(
                                        E.Z.maxOtherAmount,
                                        "个"
                                      )
                                    )
                                  );
                                case 5:
                                  if (o.current) {
                                    r.next = 13;
                                    break;
                                  }
                                  if (
                                    !(
                                      (c = Z()(
                                        a.DepartureDate + " " + o.DepartTime
                                      ).diff(Z()(), "minutes")) < 10
                                    )
                                  ) {
                                    r.next = 12;
                                    break;
                                  }
                                  return (
                                    (0, k.showToast)(
                                      "距离发车时间太近了，无法添加抢票"
                                    ),
                                    r.abrupt("return")
                                  );
                                case 12:
                                  c < 30 &&
                                    n.page.showCommonDialog({
                                      content:
                                        "您选择的列车距开车时间很近了，请确保可以及时进站乘车，以免耽误您的出行",
                                    });
                                case 13:
                                  (o.current = !o.current),
                                    e.chooseTrainNumberList.set(
                                      $(n.chooseTrainNumberList, o)
                                    );
                                case 15:
                                case "end":
                                  return r.stop();
                              }
                          }, r);
                        })
                      )();
                    },
                  };
                },
              },
              primeOtherTrainList: {
                state: [],
                reducers: {
                  set: function (e, t) {
                    return t;
                  },
                  clear: function () {
                    return [];
                  },
                },
                effects: function (e) {
                  return {
                    toggleOtherTrain: function (t, n) {
                      return (0, z.Z)(
                        (0, P.Z)().mark(function r() {
                          var i, a, o, c, s, u, l, m;
                          return (0, P.Z)().wrap(function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  if (
                                    ((a = n.primeOtherTrainList),
                                    (o = n.options),
                                    (c = a[t]),
                                    !n.excludeTrainStrs || !c)
                                  ) {
                                    r.next = 8;
                                    break;
                                  }
                                  if (
                                    ((s = n.excludeTrainStrs.split(",")),
                                    (u = ""
                                      .concat(c.DepartStation, "-")
                                      .concat(c.TrainNumber, "-")
                                      .concat(c.ArriveStation)),
                                    -1 === s.indexOf(u))
                                  ) {
                                    r.next = 8;
                                    break;
                                  }
                                  return r.abrupt("return");
                                case 8:
                                  if (
                                    c.current ||
                                    !(
                                      n.chooseTrainNumberList.length >=
                                      E.Z.maxOtherAmount
                                    )
                                  ) {
                                    r.next = 10;
                                    break;
                                  }
                                  return r.abrupt(
                                    "return",
                                    (0, k.showToast)(
                                      "最多选择".concat(
                                        E.Z.maxOtherAmount,
                                        "个"
                                      )
                                    )
                                  );
                                case 10:
                                  if (c.current) {
                                    r.next = 18;
                                    break;
                                  }
                                  if (
                                    !(
                                      (l = Z()(
                                        o.DepartureDate + " " + c.DepartTime
                                      ).diff(Z()(), "minutes")) < 10
                                    )
                                  ) {
                                    r.next = 17;
                                    break;
                                  }
                                  return (
                                    (0, k.showToast)(
                                      "距离发车时间太近了，无法添加抢票"
                                    ),
                                    r.abrupt("return")
                                  );
                                case 17:
                                  l < 30 &&
                                    n.page.showCommonDialog({
                                      content:
                                        "您选择的列车距开车时间很近了，请确保可以及时进站乘车，以免耽误您的出行",
                                    });
                                case 18:
                                  (null === (i = n.nearTrainList) ||
                                  void 0 === i
                                    ? void 0
                                    : i.length) > 0 &&
                                    ((m = n.nearTrainList.map(function (e) {
                                      return (0,
                                      I.Z)((0, I.Z)({}, e), {}, { isSelected: e.originIndex === t ? !e.isSelected : e.isSelected });
                                    })),
                                    e.nearTrainList.set(m)),
                                    (c.current = !c.current),
                                    e.chooseTrainNumberList.set(
                                      $(n.chooseTrainNumberList, c)
                                    );
                                case 21:
                                case "end":
                                  return r.stop();
                              }
                          }, r);
                        })
                      )();
                    },
                  };
                },
              },
              isShowEmptyListTips: {
                state: !1,
                reducers: {
                  set: function (e, t) {
                    return t;
                  },
                  clear: function () {
                    return !1;
                  },
                },
              },
              isHouBuConfig: {
                state: !1,
                reducers: {
                  set: function (e, t) {
                    return t;
                  },
                  clear: function () {
                    return !1;
                  },
                },
                effects: function (e) {
                  return {
                    getHouBuConfig: function () {
                      return (0, z.Z)(
                        (0, P.Z)().mark(function t() {
                          return (0, P.Z)().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return t.abrupt(
                                    "return",
                                    (0, X.fu)({
                                      ConfigKey: "tieyou_wx_mini_train_houbu",
                                    })
                                      .then(function (t) {
                                        e.isHouBuConfig.set(
                                          !(
                                            !t.ConfigInfo ||
                                            3 != t.ConfigInfo.Content
                                          )
                                        );
                                      })
                                      .catch(function (e) {
                                        return console.log(e);
                                      })
                                  );
                                case 1:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      )();
                    },
                  };
                },
              },
            },
            G = n(83315);
          function U(e, t, n) {
            return Q.apply(this, arguments);
          }
          function Q() {
            return (Q = (0, z.Z)(
              (0, P.Z)().mark(function e(t, n, r) {
                var i, a, o, c, s, u, l, m, d, f;
                return (0, P.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (i = t.options),
                          (a = (i = void 0 === i ? {} : i).DepartStation),
                          (o = void 0 === a ? "" : a),
                          (c = i.ArriveStation),
                          (s = void 0 === c ? "" : c),
                          (u = i.DepartureDate),
                          (l = void 0 === u ? "" : u),
                          (m = t.promise),
                          (d = t.TrainNumber),
                          console.log(n),
                          (0, k.showLoading)(),
                          (f = {
                            DepartStation: o,
                            ArriveStation: s,
                            DepartDate: l,
                          }),
                          (e.next = 8),
                          S.ZP.getTrainList(f).then(function (e) {
                            var t = e;
                            r.allTrainList.set(t),
                              (t = G.Z.handleTrains(t, f.DepartDate));
                            var i = f.DepartDate,
                              a = new Date().getTime();
                            t.forEach(function (e) {
                              var t = Z()(
                                "".concat(i, " ").concat(e.DepartTime)
                              ).diff(Z()(+new Date()), "minute");
                              if (
                                ((e.outage = t <= 25),
                                (e.IsCanHB = !0),
                                -1 !== e.SaleNote.indexOf("列车运行图调整"))
                              )
                                return (
                                  (e.isPreSale = !0),
                                  void (e.preSaleTimeStr =
                                    "列车运行图调整，可预约抢票，开售自动抢")
                                );
                              var n = Z()(i)
                                  .subtract(e.PreSaleDay || 0, "day")
                                  .format("YYYY-MM-DD"),
                                r = n + " " + (e.PreSaleTime || "00:00"),
                                o = Z()(r).valueOf(),
                                c =
                                  Z()(n).month() +
                                  1 +
                                  "月" +
                                  Z()(n).date() +
                                  "日";
                              o - a > 0 &&
                                ((e.isPreSale = !0),
                                (e.preSaleTimeStr =
                                  c +
                                  e.PreSaleTime +
                                  "开售,可预约抢票,开售自动抢"));
                            });
                            var c = t,
                              u = n.page.store.getState(),
                              p = u.excludeTrainStrs,
                              T = u.chooseTrainNumberList,
                              h = u.limitConditions,
                              v = u.nearTrainList,
                              g = u.isFilter;
                            m.then(function (e) {
                              var t = j(e, d, p, c, T, h, l, o, s, v, g);
                              r.primeOtherTrainList.set(t.primeOtherTrainList),
                                r.primeRecommendTrainList.set(
                                  t.primeRecommendTrainList
                                ),
                                r.nearTrainList.set(t.nearTrainList),
                                (0, k.hideLoading)(),
                                0 === t.primeRecommendTrainList.length &&
                                  0 === t.primeOtherTrainList.length &&
                                  r.isShowEmptyListTips.set(!0);
                            }).catch(function () {
                              var e = j([], d, p, c, T, h, l, o, s, v, g);
                              r.primeOtherTrainList.set(e.primeOtherTrainList),
                                r.primeRecommendTrainList.set(
                                  e.primeRecommendTrainList
                                ),
                                r.nearTrainList.set(e.nearTrainList),
                                (0, k.hideLoading)(),
                                0 === e.primeRecommendTrainList.length &&
                                  0 === e.primeOtherTrainList.length &&
                                  r.isShowEmptyListTips.set(!0);
                            });
                          })
                        );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function W(e, t, n) {
            return ee.apply(this, arguments);
          }
          function ee() {
            return (ee = (0, z.Z)(
              (0, P.Z)().mark(function e(t, n, r) {
                var i, a, o, c, s, u;
                return (0, P.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (o = t.DepartureDates),
                          (c = t.options),
                          (s = t.TrainNumber),
                          !o ||
                          (null != c &&
                            null !== (i = c.data) &&
                            void 0 !== i &&
                            null !== (a = i.nearTrainList) &&
                            void 0 !== a &&
                            a.length)
                            ? U(
                                {
                                  options: c,
                                  promise: Promise.resolve(),
                                  TrainNumber: s,
                                },
                                n,
                                r
                              )
                            : ((u =
                                r.primeRecommendTrainList.getGrabTicketRecommendTrainList(
                                  c
                                )),
                              U(
                                { options: c, promise: u, TrainNumber: s },
                                n,
                                r
                              ));
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function te() {
            return (te = (0, z.Z)(
              (0, P.Z)().mark(function e(t, n, r) {
                var i, a, o, c, s, u, l, m, d;
                return (0, P.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (a = t.options),
                          r.options.set(a),
                          r.TrainNumber.set(a.TrainNumber),
                          r.departStation.set(a.DepartStation),
                          r.excludeTrainStrs.set(
                            a.excludeTrainStrs
                              ? decodeURIComponent(a.excludeTrainStrs)
                              : ""
                          ),
                          r.limitConditions.set(
                            JSON.parse(
                              (null == a ? void 0 : a.limitConditions) || "{}"
                            )
                          ),
                          r.isFilter.set(!!a.isFilter),
                          (O.ET.loadDataFromOtherList = !0),
                          (o = a.data || {}),
                          (c = o.fromPage),
                          (s = void 0 === c ? "" : c),
                          (u = o.chosenTrainList),
                          (l = void 0 === u ? [] : u),
                          (m = o.nearTrainList),
                          (d = void 0 === m ? [] : m),
                          r.chooseTrainNumberList.init({
                            fromPage: s,
                            chosenTrainList: l,
                          }),
                          r.nearTrainList.set(d),
                          r.mainTrainTag.init({
                            trainNumber: a.TrainNumber,
                            departStation: a.DepartStation,
                            arriveStation: a.ArriveStation,
                          }),
                          W(
                            {
                              DepartureDates: a.DepartureDates,
                              options: a,
                              TrainNumber: a.TrainNumber,
                            },
                            n,
                            r
                          ),
                          r.isHouBuConfig.getHouBuConfig(),
                          null === (i = n.page) ||
                            void 0 === i ||
                            i.ubtTrace("s_trn_z_10650060874", {
                              exposureType: "normal",
                              bizKey: "z_grab_list_confirm_show",
                              isShowPlans:
                                (null == d ? void 0 : d.length) > 0 ? "T" : "F",
                            });
                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          var ne,
            re = {
              state: {},
              reducers: {
                set: function (e, t) {
                  return t;
                },
                clear: function () {
                  return {};
                },
              },
              effects: function (e) {
                return {
                  initPage: function (t, n) {
                    !(function (e, t, n) {
                      te.apply(this, arguments);
                    })(t, n, e);
                  },
                  confirm: function (e, t) {
                    var n,
                      r = e || { fromPage: "common" },
                      i = r.fromPage,
                      a = void 0 === i ? "" : i,
                      o = r.isShowModal,
                      c = void 0 !== o && o,
                      s = r.chooseTrainList,
                      u = void 0 === s ? [] : s,
                      l = r.btnType,
                      m = void 0 === l ? "" : l,
                      d = t.allTrainList.filter(function (e) {
                        return t.chooseTrainNumberList.some(function (t) {
                          return (
                            ""
                              .concat(e.DepartStation, "-")
                              .concat(e.TrainNumber, "-")
                              .concat(e.ArriveStation) ===
                            ""
                              .concat(t.DepartStation, "-")
                              .concat(t.TrainNumber, "-")
                              .concat(t.ArriveStation)
                          );
                        });
                      });
                    if (
                      (a &&
                        "grabDetail" === a &&
                        "cancelBtn" === m &&
                        u.length > 0 &&
                        (d = u),
                      (O.ET.chosenTrainList = d),
                      t.page.ubtDevTrace("o_train_other_choose", {
                        trainStr: d
                          .map(function (e) {
                            return e.TrainNumber;
                          })
                          .join(","),
                      }),
                      t.page.navigateBack({
                        allTrainList: t.allTrainList,
                        chosenTrainList: d,
                        isShowModal: c,
                      }),
                      (null === (n = t.nearTrainList) || void 0 === n
                        ? void 0
                        : n.length) > 0)
                    ) {
                      var f,
                        p = [];
                      t.nearTrainList.map(function (e, t) {
                        e.isSelected && p.push(t + 1);
                      }),
                        p.length > 0 &&
                          (null === (f = t.page) ||
                            void 0 === f ||
                            f.ubtTrace("c_trn_z_10650060874", {
                              bizKey: "z_grab_list_confirm_click",
                              recommendPlans: p,
                            }));
                    }
                  },
                };
              },
            },
            ie = (0, I.Z)(
              (0, I.Z)(
                {
                  options: {
                    state: {},
                    reducers: {
                      set: function (e, t) {
                        return t;
                      },
                      clear: function () {
                        return {};
                      },
                    },
                  },
                  TrainNumber: {
                    state: "",
                    reducers: {
                      set: function (e, t) {
                        return t;
                      },
                      clear: function () {
                        return "";
                      },
                    },
                  },
                  departStation: {
                    state: "",
                    reducers: {
                      set: function (e, t) {
                        return t;
                      },
                      clear: function () {
                        return "";
                      },
                    },
                  },
                  excludeTrainStrs: {
                    state: "",
                    reducers: {
                      set: function (e, t) {
                        return t;
                      },
                      clear: function () {
                        return "";
                      },
                    },
                  },
                  limitConditions: {
                    state: null,
                    reducers: {
                      set: function (e, t) {
                        return t;
                      },
                    },
                  },
                  chooseTrainNumberList: {
                    state: [],
                    reducers: {
                      set: function (e, t) {
                        return t;
                      },
                      clear: function () {
                        return [];
                      },
                    },
                    effects: function () {
                      return {
                        init: function (e) {
                          var t = e.chosenTrainList || [];
                          this.set(t);
                        },
                      };
                    },
                  },
                  allTrainList: {
                    state: [],
                    reducers: {
                      set: function (e, t) {
                        return t;
                      },
                      clear: function () {
                        return [];
                      },
                    },
                  },
                  isFilter: {
                    state: !0,
                    reducers: {
                      set: function (e, t) {
                        return t;
                      },
                    },
                  },
                },
                K
              ),
              {},
              {
                page: re,
                nearTrainList: {
                  state: [],
                  reducers: {
                    set: function (e, t) {
                      return t;
                    },
                    clear: function () {
                      return [];
                    },
                  },
                },
                mainTrainTag: {
                  state: "",
                  reducers: {
                    set: function (e, t) {
                      return t;
                    },
                    clear: function () {
                      return "";
                    },
                  },
                  effects: function () {
                    return {
                      init: function (e) {
                        if (
                          e.trainNumber &&
                          e.departStation &&
                          e.arriveStation
                        ) {
                          var t = e.trainNumber.split(","),
                            n = ""
                              .concat(e.departStation, "-")
                              .concat(t[0], "-")
                              .concat(e.arriveStation);
                          this.set(n);
                        }
                      },
                    };
                  },
                },
              }
            ),
            ae =
              (0, T.h)()(
                (ne = (function (e) {
                  (0, c.Z)(n, e);
                  var t = (0, s.Z)(n);
                  function n(e) {
                    var r;
                    return (
                      (0, i.Z)(this, n),
                      ((r = t.call(this, e)).pageId = d.default.isTieyou
                        ? "10650060876"
                        : "10650060874"),
                      (r.store = (0, f.S1)({ models: ie })),
                      r.store.dispatch.page.set((0, o.Z)(r)),
                      r
                    );
                  }
                  return (
                    (0, a.Z)(n, [
                      {
                        key: "onLoad",
                        value: function (e) {
                          this.store.dispatch.page.initPage({ options: e });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return (0, b.BX)(l.zt, {
                            store: this.store,
                            children: [
                              (0, b.BX)(m.View, {
                                className:
                                  "page " + (d.default.isTieyou ? "ty" : "zx"),
                                children: [
                                  (0, b.tZ)(D, {}),
                                  (0, b.tZ)(y, {}),
                                  (0, b.tZ)(C, {}),
                                ],
                              }),
                              (0, b.tZ)(p.Z, {
                                ref: function (t) {
                                  e.onDrawerAttach(t);
                                },
                              }),
                              (0, b.tZ)(h.Z, {
                                ref: function (t) {
                                  e.onDialogAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(u.default.Component))
              ) || ne;
          Page(
            (0, r.createPageConfig)(
              ae,
              "pages/trainRob/otherlist/otherlist",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "备选车次",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                backgroundColor: "#EFEFEF",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            31593, 74171, 43954, 13092, 70613, 82316, 62070, 7460, 19559, 11216,
            68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(83394);
          }
        ),
          e.O();
      },
    ]);
})();
