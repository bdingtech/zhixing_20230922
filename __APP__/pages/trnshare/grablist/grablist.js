!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [79914],
    {
      10985: function (e, t, i) {
        var a = i(32180),
          r = i(57042),
          n = i(24460),
          o = i(21867),
          s = i(86066),
          c = i(93212),
          l = i(45023),
          d = i(79301),
          u = i(95308),
          h = i(298),
          m = i(90983),
          g = i(52500),
          f = i(71515),
          p = i(92954),
          v = i.n(p),
          b = i(48792),
          N = i.n(b),
          w = i(34229),
          T = i(58676),
          Z = i(3205),
          x = i(18783),
          S = i(91377),
          y = i(17045),
          V = i(8271),
          I = i.n(V),
          D = i(39173),
          k = i(79910),
          B = i(25391),
          P = i(13025),
          C = i(10741),
          L = i(79792),
          O = i(79404),
          X = i(20592),
          A = i(49120),
          M = i(55916),
          _ = i(90129),
          z = i(48813),
          G = g.default.memo(function (e) {
            var t = e.visible,
              i = void 0 !== t && t,
              a = e.ubtTrace,
              r = void 0 === a ? function () {} : a,
              n = e.customStyle,
              o = void 0 === n ? "" : n,
              s = e.fromPage,
              c = void 0 === s ? "trainList" : s,
              l = (0, g.useState)(),
              d = (0, _.Z)(l, 2),
              u = d[0],
              h = d[1];
            (0, g.useEffect)(
              function () {
                if (i) {
                  (0, P.SZ)({ keys: ["mini-fe-national-claim-activity"] })
                    .then(function (e) {
                      if (1 === e.resultCode) {
                        var t = (e || {}).configDataList,
                          i = (
                            (void 0 === t ? [] : t).find(function (e) {
                              return (
                                "mini-fe-national-claim-activity" === e.key
                              );
                            }) || {}
                          ).data;
                        i &&
                          I()().isBefore(I()(i.activityEndDate)) &&
                          (h(i),
                          "trainList" == c && r(198078),
                          "robList" == c && r(198087));
                      }
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
                } else h();
              },
              [i]
            );
            if (!u) return (0, z.tZ)(f.View, {});
            var m = u.imgUrl;
            return (
              "robList" == c && (m = u.imgUrl4RobList),
              (0, z.tZ)(f.View, {
                className: "train-national-activity-banner",
                id: "AABm",
                onClick: function () {
                  var e = u.jumpUrl;
                  e &&
                    ("trainList" == c && r(198079),
                    "robList" == c && r(198088),
                    Z.Z.twebview({ data: { url: e } }));
                },
                style: o,
                children: (0, z.tZ)(f.Image, { src: m, className: "head-img" }),
              })
            );
          }),
          R = L.default.isTieyou;
        function H(e) {
          return (e + "")
            .split("")
            .reverse()
            .reduce(function (e, t, i) {
              return (i % 3 ? t : t + ",") + e;
            });
        }
        var E = [
          "https://images3.c-ctrip.com/ztrip/train_bin/6yue/zx_touxiang1@3x.png",
          "https://images3.c-ctrip.com/ztrip/train_bin/6yue/zx_touxiang2@3x.png",
          "https://images3.c-ctrip.com/ztrip/train_bin/6yue/zx_touxiang3@3x.png",
          "https://images3.c-ctrip.com/ztrip/train_bin/6yue/zx_touxiang4@3x.png",
        ];
        function U(e) {
          var t = 0;
          return e && e.length && (t = e.length % 4), E[t];
        }
        function j(e) {
          var t = e.bigScreenInfo,
            i = e.rollGrabInfoList;
          return (0, z.BX)(f.View, {
            className: "big-screen-info ".concat(R ? "ty" : "zx"),
            children: [
              t &&
                (0, z.BX)(f.View, {
                  className: "title",
                  children: [
                    t.titleLeft,
                    (0, z.tZ)(f.Text, {
                      className: "grab-count",
                      children: " " + H(t.grabCount) + " ",
                    }),
                    t.titleRight,
                  ],
                }),
              (0, z.tZ)(f.View, {
                className: "swiper-box",
                children: (0, z.tZ)(f.Swiper, {
                  className: "swiper",
                  autoplay: "true",
                  vertical: "true",
                  interval: "4000",
                  circular: "true",
                  children:
                    i &&
                    i.map(function (e, t) {
                      return (0,
                      z.BX)(f.SwiperItem, { className: "big-screen-info-item", children: [(0, z.tZ)(f.Image, { src: U(e), className: "grab-content-avatar" }), (0, z.tZ)(f.Text, { className: "grab-content-text", children: e })] }, t);
                    }),
                }),
              }),
            ],
          });
        }
        var q = g.default.memo(function (e) {
          var t,
            i = e.data,
            a = void 0 === i ? null : i,
            r = e.onClickDiagnosis,
            n = void 0 === r ? function () {} : r;
          return a
            ? (0, z.BX)(f.View, {
                className: "grab-list-ae",
                children: [
                  (0, z.tZ)(f.Image, {
                    className: "ae-bg-icon",
                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/ysj@3x.png",
                  }),
                  (0, z.BX)(f.View, {
                    className: "top-box flex-align-items-center",
                    children: [
                      (0, z.tZ)(f.Text, {
                        className: "tit",
                        children: a.title,
                      }),
                      (0, z.tZ)(f.View, { className: "tag", children: a.tag }),
                    ],
                  }),
                  (0, z.BX)(f.View, {
                    className: "ae-botm-box",
                    children: [
                      null === (t = a.contents) || void 0 === t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0,
                            z.BX)(f.View, { className: "desc-item flex-align-items-center", children: [(0, z.tZ)(f.Image, { className: "icon", src: e.icon }), (0, z.BX)(f.View, { className: "txt-box flex flex-column", children: [(0, z.tZ)(f.Text, { className: "tit-txt", children: e.title }), (0, z.tZ)(f.Text, { className: "desc-txt", children: e.desc })] })] }, t);
                          }),
                      (0, z.tZ)(f.Button, {
                        className: "go-btn",
                        id: "ADAA",
                        onClick: n,
                        children: a.buttonName,
                      }),
                    ],
                  }),
                ],
              })
            : (0, z.tZ)(z.HY, {});
        });
        function F(e) {
          var t,
            i,
            a,
            r,
            n,
            o,
            s,
            c,
            l,
            d,
            u = e.isInCurrentPage,
            h = void 0 === u || u,
            m = e.leftActivities,
            p = e.activities,
            v = e.alternateEntrances,
            b = e.ubtTrace,
            N = void 0 === b ? function () {} : b,
            T = e.navigateTo,
            S = void 0 === T ? function () {} : T,
            y = (0, g.useRef)(0);
          function V(e) {
            var t;
            N(203726, {
              exposureType: "normal",
              bizKey: "z_grablist_activity_show",
              Id:
                (null == m || null === (t = m[e]) || void 0 === t
                  ? void 0
                  : t.bookProcess) || "",
            });
          }
          function I(e) {
            N(203730, {
              bizKey: "z_grablist_activity_click",
              Id: e.bookProcess || "",
            });
            var t = (null == e ? void 0 : e.targetUrl) || "";
            20220101 !== ((null == e ? void 0 : e.bookProcess) || "")
              ? t.includes("https")
                ? t.includes("/functionalPages/twebview/index")
                  ? S({ url: t })
                  : Z.Z.twebview({ data: { url: t } })
                : S({ url: t })
              : x.ZP.isLogin
              ? S({ url: t })
              : x.ZP.doLogin().then(
                  function () {
                    S({ url: t });
                  },
                  function () {
                    console.log("取消登陆");
                  }
                );
          }
          var D = function (e) {
              var t = "";
              switch (e) {
                case 20220101:
                  t = "holiday-bg";
                  break;
                case 2:
                  t = "grab-plan-bg";
                  break;
                case 3:
                  t = "join-group-bg";
                  break;
                case 4:
                  t = "attention-gzh-bg";
                  break;
                case 5:
                  t = "receive-coupon-bg";
                  break;
                default:
                  t = "holiday-bg";
              }
              return t;
            },
            k = (0, g.useState)(0),
            B = (0, _.Z)(k, 2),
            P = B[0],
            C = B[1],
            L = (0, g.useState)(
              D(
                null == m || null === (t = m[0]) || void 0 === t
                  ? void 0
                  : t.bookProcess
              )
            ),
            O = (0, _.Z)(L, 2),
            X = O[0],
            A = O[1];
          (0, g.useEffect)(function () {
            var e;
            m && V(0),
              p &&
                N(203726, {
                  exposureType: "normal",
                  bizKey: "z_grablist_activity_show",
                  Id:
                    (null == p || null === (e = p[1]) || void 0 === e
                      ? void 0
                      : e.bookProcess) || "",
                });
          }, []);
          var M = function (e) {
              C(e),
                (function (e) {
                  var t = m[e],
                    i = D(null == t ? void 0 : t.bookProcess);
                  A(i);
                })(e);
            },
            G =
              (null == v ? void 0 : v.title) &&
              (null == v || null === (i = v.contents) || void 0 === i
                ? void 0
                : i.length) > 0;
          return (0, z.BX)(f.View, {
            className: "activities flex-align-items-center",
            children: [
              G &&
                (0, z.tZ)(f.View, {
                  className: "houbu-entry",
                  children: (0, z.tZ)(q, {
                    data: v,
                    onClickDiagnosis: function () {
                      var e =
                        "/pages/taroCRN/train/pages/candidateDiagnosis/index?fromPage=grabList";
                      x.ZP.isLogin
                        ? S({ url: e })
                        : x.ZP.doLogin().then(
                            function () {
                              S({ url: e });
                            },
                            function () {
                              console.log("取消登陆");
                            }
                          );
                    },
                  }),
                }),
              G &&
                p &&
                m &&
                (0, z.BX)(f.View, {
                  className: "new-activity-entry",
                  children: [
                    (0, z.BX)(f.View, {
                      className: "activity-list ".concat(X),
                      children: [
                        (0, z.tZ)(f.Swiper, {
                          className: "swiper activity-items",
                          autoplay: !0,
                          vertical: !1,
                          interval: "3000",
                          circular: "true",
                          onChange: function (e) {
                            h &&
                              y.current < 10 &&
                              (V(e.detail.current),
                              M(e.detail.current),
                              y.current++);
                          },
                          children: m.map(function (e) {
                            return (0, z.tZ)(
                              f.SwiperItem,
                              {
                                children: (0, z.BX)(f.View, {
                                  className: "activity flex flex-column",
                                  onClick: function () {
                                    I(e);
                                  },
                                  children: [
                                    (0, z.tZ)(f.View, {
                                      className: "flex-align-items-center",
                                      children: (0, z.tZ)(f.View, {
                                        className: "name",
                                        children: e.name,
                                      }),
                                    }),
                                    (0, z.tZ)(w.ZtRichText, {
                                      className: "description",
                                      nodes: e.description,
                                    }),
                                    (0, z.tZ)(f.Image, {
                                      className: "bg-icon",
                                      src: e.adaptHbIcon,
                                    }),
                                  ],
                                }),
                              },
                              e.bookProcess
                            );
                          }),
                        }),
                        m.length > 1 &&
                          (0, z.tZ)(f.View, {
                            className: "progress-box",
                            children: (0, z.tZ)(f.Image, {
                              className: "point-bar",
                              style: {
                                transform: "translate3d(".concat(
                                  (P / m.length) * 100,
                                  "%, 0, 0);"
                                ),
                              },
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/sm@3x.png",
                            }),
                          }),
                      ],
                    }),
                    (0, z.BX)(
                      f.View,
                      {
                        className:
                          "activity garb-plan-activity flex flex-column",
                        id: "ADAE",
                        onClick: function () {
                          I(p[1]);
                        },
                        children: [
                          (0, z.tZ)(f.View, {
                            className: "name",
                            children:
                              null === (r = p[1]) || void 0 === r
                                ? void 0
                                : r.name,
                          }),
                          (0, z.tZ)(w.ZtRichText, {
                            className: "description",
                            nodes:
                              null === (n = p[1]) || void 0 === n
                                ? void 0
                                : n.description,
                          }),
                          (0, z.tZ)(f.Image, {
                            className: "bg-icon",
                            src:
                              null === (o = p[1]) || void 0 === o
                                ? void 0
                                : o.adaptHbIcon,
                          }),
                        ],
                      },
                      null === (a = p[1]) || void 0 === a
                        ? void 0
                        : a.bookProcess
                    ),
                  ],
                }),
              !G &&
                p &&
                m &&
                (0, z.BX)(f.View, {
                  className: "old-activity-entry flex-align-items-center",
                  children: [
                    (0, z.tZ)(f.Swiper, {
                      className: "swiper activity-box-left",
                      autoplay: !0,
                      vertical: !1,
                      interval: "2000",
                      circular: "true",
                      onChange: function (e) {
                        h &&
                          y.current < 10 &&
                          (V(e.detail.current), y.current++);
                      },
                      children: m.map(function (e) {
                        return (0, z.tZ)(
                          f.SwiperItem,
                          {
                            children: (0, z.BX)(f.View, {
                              className: "activity",
                              id: "ADAF",
                              onClick: function () {
                                I(e);
                              },
                              children: [
                                (0, z.tZ)(f.Image, {
                                  className: "icon-activity",
                                  src: e.icon,
                                }),
                                (0, z.BX)(f.View, {
                                  className: "activity-content",
                                  children: [
                                    (0, z.tZ)(f.View, {
                                      className: "name",
                                      children: e.name,
                                    }),
                                    (0, z.tZ)(w.ZtRichText, {
                                      className: "description",
                                      nodes: e.description,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e.bookProcess
                        );
                      }),
                    }),
                    (0, z.tZ)(f.View, { className: "line" }),
                    (0, z.tZ)(f.View, {
                      className: "activity-box-right",
                      children: (0, z.BX)(
                        f.View,
                        {
                          className: "activity",
                          id: "ADAG",
                          onClick: function () {
                            I(p[1]);
                          },
                          children: [
                            (0, z.tZ)(f.Image, {
                              className: "icon-activity",
                              src:
                                null === (c = p[1]) || void 0 === c
                                  ? void 0
                                  : c.icon,
                            }),
                            (0, z.BX)(f.View, {
                              className: "activity-content",
                              children: [
                                (0, z.tZ)(f.View, {
                                  className: "name",
                                  children:
                                    null === (l = p[1]) || void 0 === l
                                      ? void 0
                                      : l.name,
                                }),
                                (0, z.tZ)(w.ZtRichText, {
                                  className: "description",
                                  nodes:
                                    null === (d = p[1]) || void 0 === d
                                      ? void 0
                                      : d.description,
                                }),
                              ],
                            }),
                          ],
                        },
                        null === (s = p[1]) || void 0 === s
                          ? void 0
                          : s.bookProcess
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        var K,
          Y = i(41826),
          W = i(62792),
          Q = g.default.memo(function (e) {
            var t = e.order,
              i = e.index,
              a = e.clickMonitorItem,
              r = e.handleShareAction,
              n = e.deleteMonitorOrder,
              o = e.onSwipe;
            return (0, z.tZ)(W.Z, {
              enable: t.isTouchMove,
              onDelete: function () {
                return n(t.orderNumber);
              },
              onChange: function (e) {
                var t = e.enable;
                null == o || o({ isTouchMove: t, index: i });
              },
              deleteWidth: "136rpx",
              itemClass: "flight-monitor-item-wrapper",
              height: 0 == t.orderType ? "232rpx" : "290rpx",
              children: (0, z.tZ)(f.View, {
                className:
                  "flight-monitor-item " +
                  L.default.zxTyStr +
                  " " +
                  (t.isTouchMove ? "moved" : ""),
                "data-index": i,
                "data-type": t.moveAction,
                id: "ADAB",
                onClick: a,
                children: (0, z.BX)(f.View, {
                  className: "monitor-container",
                  children: [
                    (0, z.BX)(f.View, {
                      className: "monitor-bd",
                      children: [
                        0 === t.orderType &&
                          (0, z.BX)(f.View, {
                            className: "lbox",
                            children: [
                              (0, z.tZ)(f.View, {
                                className: "city",
                                children:
                                  t.departureCityName +
                                  " - " +
                                  t.arrivalCityName,
                              }),
                              (0, z.tZ)(f.View, {
                                className: "date",
                                children: t.preferences,
                              }),
                            ],
                          }),
                        4 === t.orderType &&
                          (0, z.BX)(f.View, {
                            className: "lbox",
                            children: [
                              (0, z.tZ)(f.View, {
                                className: "info",
                                children: t.tripDesc,
                              }),
                              (0, z.BX)(f.View, {
                                className: "flight",
                                children: [
                                  (0, z.BX)(f.View, {
                                    className: "from",
                                    children: [
                                      (0, z.tZ)(f.View, {
                                        className: "time",
                                        children: t.segmentInfo.dTime,
                                      }),
                                      (0, z.tZ)(f.View, {
                                        className: "airport",
                                        children:
                                          t.segmentInfo.departureAirportDesc,
                                      }),
                                    ],
                                  }),
                                  (0, z.BX)(f.View, {
                                    className: "separator",
                                    children: [
                                      (0, z.tZ)(f.View, {
                                        className: "spt_time",
                                        children: t.segmentInfo.costTimeDesc,
                                      }),
                                      (0, z.tZ)(f.View, {
                                        className: "spt_arr",
                                      }),
                                    ],
                                  }),
                                  (0, z.BX)(f.View, {
                                    className: "to",
                                    children: [
                                      (0, z.tZ)(f.View, {
                                        className: "time",
                                        children: t.segmentInfo.aTime,
                                      }),
                                      (0, z.tZ)(f.View, {
                                        className: "airport",
                                        children:
                                          t.segmentInfo.arrivalAirportDesc,
                                      }),
                                    ],
                                  }),
                                  t.segmentInfo.dayDiff > 0 &&
                                    (0, z.tZ)(f.Text, {
                                      className: "next",
                                      children: "+" + t.segmentInfo.dayDiff,
                                    }),
                                ],
                              }),
                            ],
                          }),
                        (0, z.BX)(f.View, {
                          className: "rbox",
                          children: [
                            (0, z.tZ)(f.View, {
                              className: "price color-red",
                              children:
                                0 === t.lowestPrice ? "--" : t.lowestPrice,
                            }),
                            t.priceTag &&
                              (0, z.BX)(f.View, {
                                className: "status ".concat(
                                  1 !== t.priceIconType
                                    ? "bdcolor-red color-red"
                                    : "grey"
                                ),
                                children: [
                                  (0, z.tZ)(f.View, {
                                    className: "iconfont " + t.priceIcon,
                                  }),
                                  t.priceTag,
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, z.BX)(f.View, {
                      className: "monitor-hd",
                      children: [
                        2 === t.status
                          ? (0, z.BX)(f.View, {
                              className: "status color-primary",
                              children: [
                                (0, z.tZ)(f.Icon, {
                                  className: "icon-monitor icon-control",
                                }),
                                (0, z.tZ)(f.Text, {
                                  className: "ifont-light iconfont",
                                }),
                                t.shareFlag
                                  ? "监控中，分享可提速"
                                  : t.statusDesc,
                              ],
                            })
                          : 5 === t.status
                          ? (0, z.BX)(f.View, {
                              className: "status color-primary",
                              children: [
                                (0, z.tZ)(f.Text, {
                                  className: "ifont-suc iconfont",
                                }),
                                t.statusDesc,
                              ],
                            })
                          : 3 === t.status || 4 === t.status
                          ? (0, z.tZ)(f.View, {
                              className: "status tgrey",
                              children: "已过期，请重新编辑",
                            })
                          : (0, z.BX)(f.View, {
                              className: "status color-primary",
                              children: [
                                (0, z.tZ)(f.Icon, {
                                  className: "icon-monitor icon-control",
                                }),
                                (0, z.tZ)(f.Text, {
                                  className: "ifont-light iconfont",
                                }),
                                t.statusDesc,
                              ],
                            }),
                        (0, z.tZ)(f.Button, {
                          className: "btn-submit " + t.buttonBgColor,
                          "data-index": i,
                          id: "ADAC",
                          onClick: function (e) {
                            e.stopPropagation(), r(e);
                          },
                          children: t.shareFlag ? "分享加速" : t.buttonText,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            });
          }),
          J = i(52949),
          $ = i(22276),
          ee = L.default.isTieyou,
          te = function (e) {
            var t = e.content,
              i = e.orderDescHideList,
              a = void 0 === i ? [] : i,
              r = e.doDeleteTrainGrabOrder,
              n = void 0 === r ? function () {} : r,
              o = e.clickTrainCard,
              s = void 0 === o ? function () {} : o,
              c = e.onButtonClick,
              l = void 0 === c ? function () {} : c,
              d = e.navigateTo,
              u = void 0 === d ? function () {} : d,
              h = (0, g.useState)([]),
              m = (0, _.Z)(h, 2),
              p = m[0],
              b = m[1];
            if (
              ((0, g.useEffect)(
                function () {
                  b(a);
                },
                [a]
              ),
              !((null == t ? void 0 : t.length) > 0))
            )
              return (0, z.tZ)(f.View, {});
            var N = function (e) {
                var t,
                  i =
                    null === (t = e.orderTag) || void 0 === t
                      ? void 0
                      : t.isDeletable,
                  a = e.orderDeleteDesc;
                i
                  ? (0, A.showModal)({
                      title: "温馨提示",
                      content: a,
                      showCancel: !0,
                      cancelText: "手滑了",
                      cancelColor: "#999999",
                      confirmText: "删除",
                      success: function (t) {
                        null != t && t.confirm && n(e.orderId);
                      },
                    })
                  : (0, A.showModal)({ title: "温馨提示", content: a });
              },
              T = function (e, t) {
                return [1].includes(e)
                  ? "warn"
                  : 20001 === e || 20006 === e
                  ? t
                    ? "vip-loading"
                    : ee
                    ? "common-loading-ty"
                    : "common-loading-zx"
                  : void 0;
              },
              Z = function (e) {
                var t,
                  i = e.orderTag
                    ? null === (t = e.orderTag) || void 0 === t
                      ? void 0
                      : t.bizTags
                    : [];
                if (!((null == i ? void 0 : i.length) > 0))
                  return (0, z.tZ)(z.HY, {});
                var a = function (t) {
                  var i = "tag";
                  return (
                    "rebookTag" === t.tagKey
                      ? (i = "optimized-tag")
                      : "claimSettlementTag" === t.tagKey
                      ? (i = "train-tag")
                      : "alternateTag" === t.tagKey &&
                        [20005, 30002].includes(e.orderScene) &&
                        (i = "tag alternate-active"),
                    i
                  );
                };
                return i.map(function (e) {
                  return (0,
                  z.tZ)(f.View, { className: a(e), children: e.tagValue || "" }, e.tagKey);
                });
              },
              x = function (e) {
                return [100, 600].includes(e.statusCode) ||
                  [99001, 99002, 99003, 80001, 80002].includes(e.orderScene)
                  ? (0, z.BX)(f.View, {
                      className: "fr flex-center",
                      children: [
                        (0, z.tZ)(f.Icon, { className: "icon-warn" }),
                        (0, z.tZ)(f.Text, {
                          className: "tred",
                          children: e.orderStatusName || "",
                        }),
                      ],
                    })
                  : [400, 500].includes(e.statusCode)
                  ? (0, z.tZ)(f.View, {
                      className: "fr status",
                      children: (0, z.tZ)(f.Text, {
                        className: "tgrey",
                        children: e.orderStatusName || "",
                      }),
                    })
                  : [300].includes(e.statusCode)
                  ? (0, z.BX)(f.View, {
                      className: "fr flex-center",
                      children: [
                        (0, z.tZ)(f.Icon, { className: "icon-success" }),
                        (0, z.tZ)(f.Text, {
                          className: "tgreen",
                          children: e.orderStatusName || "",
                        }),
                      ],
                    })
                  : [70001, 20005].includes(e.orderScene)
                  ? (0, z.BX)(f.View, {
                      className: "fr flex-center",
                      children: [
                        (0, z.tZ)(f.Icon, { className: "icon-wait" }),
                        (0, z.tZ)(f.Text, {
                          className: "tblue",
                          children: e.orderStatusName || "",
                        }),
                      ],
                    })
                  : [20001, 20006].includes(e.orderScene)
                  ? (0, z.BX)(f.View, {
                      className:
                        "fr flex-center loading " +
                        (ee ? "ty " : "zx ") +
                        (null !== (t = e.orderTag) &&
                        void 0 !== t &&
                        t.isVipOrder
                          ? "vip"
                          : ""),
                      children: [
                        (0, z.tZ)(f.View, {
                          className:
                            "icon-loading " +
                            (ee ? "ty " : "zx ") +
                            (null !== (i = e.orderTag) &&
                            void 0 !== i &&
                            i.isVipOrder
                              ? "vip "
                              : " ") +
                            "animate" +
                            ((null === (a = e.orderTag) || void 0 === a
                              ? void 0
                              : a.grabbingSpeed) -
                              1),
                        }),
                        (0, z.tZ)(f.Text, {
                          children: e.orderStatusName || "抢票中",
                        }),
                      ],
                    })
                  : (0, z.tZ)(f.View, {});
                var t, i, a;
              },
              S = function (e) {
                var t,
                  i,
                  a,
                  r,
                  n,
                  o = "btn-gray";
                if (
                  !(
                    [70001].includes(e.orderScene) ||
                    (null !== (t = e.buttonList) && void 0 !== t && t[0])
                  )
                )
                  return (0, z.tZ)(f.View, {});
                var s =
                  (null === (i = e.buttonList) ||
                  void 0 === i ||
                  null === (a = i[0]) ||
                  void 0 === a
                    ? void 0
                    : a.buttonName) || "查看详情";
                return (
                  [70001].includes(e.orderScene)
                    ? (o = "btn-pre-detail")
                    : ([100, 600].includes(e.statusCode) ||
                        [99001, 99002, 99003].includes(e.orderScene)) &&
                      (o = "btn-red"),
                  2007 ===
                  (null === (r = e.buttonList) ||
                  void 0 === r ||
                  null === (n = r[0]) ||
                  void 0 === n
                    ? void 0
                    : n.buttonCode)
                    ? (0, z.tZ)(f.View, {})
                    : (0, z.tZ)(f.Button, {
                        className: o,
                        id: "ADAH",
                        onClick: function (t) {
                          var i, a;
                          l(
                            e,
                            null === (i = e.buttonList) ||
                              void 0 === i ||
                              null === (a = i[0]) ||
                              void 0 === a
                              ? void 0
                              : a.buttonCode,
                            t
                          );
                        },
                        children: s,
                      })
                );
              },
              y = function (e, t) {
                var i = B.ZP.getTrainGrabOrderDetailUrl(e);
                2011 === (null == t ? void 0 : t.buttonCode)
                  ? (i = B.ZP.getTrainGrabOrderDetailUrl(e, "&operation=1"))
                  : 2006 === (null == t ? void 0 : t.buttonCode) &&
                    (i = B.ZP.getTrainGrabOrderDetailUrl(e, "&operation=2")),
                  u({ url: i });
              };
            return t.map(function (e, t) {
              var i,
                a,
                r,
                n,
                o,
                c,
                l,
                d,
                u,
                h,
                m,
                g,
                V,
                D,
                k,
                B,
                P,
                C,
                L,
                O =
                  null !== (i = e.travelDetail) &&
                  void 0 !== i &&
                  i.departureTime
                    ? I()(
                        null === (a = e.travelDetail) || void 0 === a
                          ? void 0
                          : a.departureTime
                      ).format("HH:mm")
                    : "",
                X =
                  null !== (r = e.travelDetail) &&
                  void 0 !== r &&
                  r.departureTime
                    ? I()(
                        null === (n = e.travelDetail) || void 0 === n
                          ? void 0
                          : n.departureTime
                      ).format("MM月DD日")
                    : "",
                A = ""
                  .concat(X)
                  .concat(O, "出发 ")
                  .concat(
                    null === (o = e.travelDetail) || void 0 === o
                      ? void 0
                      : o.passenger
                  );
              return (
                [300].includes(e.statusCode) &&
                  (A = ""
                    .concat(X)
                    .concat(O, "出发 ")
                    .concat(
                      null === (C = e.travelDetail) || void 0 === C
                        ? void 0
                        : C.passenger,
                      " "
                    )
                    .concat(
                      null === (L = e.travelDetail) || void 0 === L
                        ? void 0
                        : L.trainNo
                    )),
                (0, z.tZ)(
                  f.View,
                  {
                    className:
                      "train-qp-item " + (e.isTouchMove ? "moved" : ""),
                    "data-type": "delete",
                    id: "ADAI",
                    onLongPress: function () {
                      N(e);
                    },
                    children: (0, z.tZ)(f.View, {
                      className:
                        "item " +
                        ([400, 500].includes(e.statusCode) ? "disabled" : ""),
                      id: "ADAJ",
                      onClick: function () {
                        s(e);
                      },
                      "data-ubt-key": "wx_grablist_clickTrainCard",
                      children:
                        20001 !== e.orderScene && 20006 !== e.orderScene
                          ? (0, z.BX)(f.View, {
                              className: "common-order",
                              children: [
                                (0, z.BX)(f.View, {
                                  className: "tit",
                                  children: [
                                    (0, z.tZ)(f.Text, {
                                      className: "strong",
                                      children:
                                        (null === (c = e.travelDetail) ||
                                        void 0 === c
                                          ? void 0
                                          : c.from) +
                                        "-" +
                                        (null === (l = e.travelDetail) ||
                                        void 0 === l
                                          ? void 0
                                          : l.to),
                                    }),
                                    Z(e),
                                    x(e),
                                  ],
                                }),
                                A &&
                                  (0, z.tZ)(f.View, {
                                    className: "desc",
                                    children: A,
                                  }),
                                (0, z.BX)(f.View, {
                                  className: "dd",
                                  children: [
                                    (0, z.tZ)(f.View, {
                                      className: "txt",
                                      children: (0, z.tZ)(w.ZtRichText, {
                                        space: "nbsp",
                                        nodes: e.orderDesc || "",
                                      }),
                                    }),
                                    S(e),
                                  ],
                                }),
                              ],
                            })
                          : (0, z.BX)(f.View, {
                              className: "special-order ".concat(
                                T(
                                  e.orderScene,
                                  null === (d = e.orderTag) || void 0 === d
                                    ? void 0
                                    : d.isVipOrder
                                )
                              ),
                              children: [
                                (0, z.BX)(f.View, {
                                  className: "tit",
                                  children: [
                                    (0, z.tZ)(f.View, {
                                      className: "strong",
                                      children:
                                        (null === (u = e.travelDetail) ||
                                        void 0 === u
                                          ? void 0
                                          : u.from) +
                                        "-" +
                                        (null === (h = e.travelDetail) ||
                                        void 0 === h
                                          ? void 0
                                          : h.to),
                                    }),
                                    Z(e),
                                    x(e),
                                  ],
                                }),
                                (0, z.BX)(f.View, {
                                  className: "order-detail-card",
                                  children: [
                                    (0, z.BX)(f.View, {
                                      className: "order-detail-item first",
                                      children: [
                                        (0, z.tZ)(f.View, {
                                          className: "label",
                                          children: "日期",
                                        }),
                                        (0, z.tZ)(f.View, {
                                          className: "value",
                                          children: X,
                                        }),
                                      ],
                                    }),
                                    (0, z.BX)(f.View, {
                                      className: "order-detail-item second",
                                      children: [
                                        (0, z.tZ)(f.View, {
                                          className: "label",
                                          children: "座席",
                                        }),
                                        (0, z.tZ)(f.View, {
                                          className: "value",
                                          children:
                                            (null === (m = e.travelDetail) ||
                                            void 0 === m
                                              ? void 0
                                              : m.seatName) || "",
                                        }),
                                      ],
                                    }),
                                    (0, z.BX)(f.View, {
                                      className: "order-detail-item",
                                      children: [
                                        (0, z.tZ)(f.View, {
                                          className: "label",
                                          children: "车次",
                                        }),
                                        (0, z.tZ)(f.View, {
                                          className: "value",
                                          children:
                                            O +
                                            " " +
                                            (null === (g = e.travelDetail) ||
                                            void 0 === g
                                              ? void 0
                                              : g.trainNo),
                                        }),
                                      ],
                                    }),
                                    (0, z.BX)(f.View, {
                                      className: "order-detail-item",
                                      children: [
                                        (0, z.tZ)(f.View, {
                                          className: "label",
                                          children: "乘客",
                                        }),
                                        (0, z.tZ)(f.View, {
                                          className: "value",
                                          children:
                                            null === (V = e.travelDetail) ||
                                            void 0 === V
                                              ? void 0
                                              : V.passenger,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, z.BX)(f.View, {
                                  className: "order-btn-box",
                                  children: [
                                    (0, z.tZ)(f.Button, {
                                      className: "btn btn-left",
                                      id: "ADAK",
                                      onClick: function (t) {
                                        var i;
                                        t.stopPropagation(),
                                          y(
                                            e.orderId,
                                            null === (i = e.buttonList) ||
                                              void 0 === i
                                              ? void 0
                                              : i[0]
                                          );
                                      },
                                      children:
                                        (null === (D = e.buttonList) ||
                                        void 0 === D ||
                                        null === (k = D[0]) ||
                                        void 0 === k
                                          ? void 0
                                          : k.buttonName) || "添加备选",
                                    }),
                                    (0, z.tZ)(f.Button, {
                                      className: "btn btn-right",
                                      id: "ADAL",
                                      onClick: function (t) {
                                        var i;
                                        t.stopPropagation(),
                                          y(
                                            e.orderId,
                                            null === (i = e.buttonList) ||
                                              void 0 === i
                                              ? void 0
                                              : i[1]
                                          );
                                      },
                                      children:
                                        (null === (B = e.buttonList) ||
                                        void 0 === B ||
                                        null === (P = B[1]) ||
                                        void 0 === P
                                          ? void 0
                                          : P.buttonName) || "查看订单",
                                    }),
                                  ],
                                }),
                                e.orderDesc &&
                                  !p.includes(e.orderId) &&
                                  (0, z.BX)(f.View, {
                                    className: "extra-desc",
                                    children: [
                                      (0, z.tZ)(f.View, {
                                        className: "txt",
                                        children: e.orderDesc,
                                      }),
                                      (0, z.tZ)(f.Image, {
                                        src: "https://images3.c-ctrip.com/zt/icon_12_close.webp",
                                        className: "x",
                                        onClick: function (t) {
                                          t.stopPropagation();
                                          var i = [].concat((0, $.Z)(p), [
                                            e.orderId,
                                          ]);
                                          b(i),
                                            v().setStorageSync(
                                              "currentOrderDescHideList",
                                              i
                                            );
                                        },
                                        webp: !0,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                    }),
                  },
                  String(t)
                )
              );
            });
          },
          ie = i(81957),
          ae = "YYYY-MM-DD",
          re = [
            {
              text: "火车票",
              id: "trainOrder",
              ubtKey: "tieyou_wx_grablist_switchToTrainOrder",
              isShow: !0,
            },
            {
              text: "机票",
              id: "flightOrder",
              ubtKey: "xcx_flt_monitortab_click",
              isShow: !0,
            },
            {
              text: "酒店",
              id: "hotelOrder",
              ubtKey: "xcx_hotel_monitortab_click",
              isShow: !L.default.isTT,
            },
          ],
          ne = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.pageIndex,
              i = void 0 === t ? 1 : t,
              a = e.pageSize,
              r = void 0 === a ? 10 : a,
              n = { pageIndex: i, pageSize: r, experimentVersion: "B" };
            return (0, C.Q1G)(n, { checkLogin: !0, checkFrameworkLogin: !0 });
          },
          oe = {
            pageId: L.default.isTieyou ? "10650005123" : "10650005122",
            data: {
              isTieyou: L.default.isTieyou,
              orderType: "",
              trainOrderList: [],
              canShare: v().canIUse("button.open-type.share"),
              isTrainOrderListEmpty: !1,
              fromPage: "xcx_home_qp",
              orderList: [],
              startX: 0,
              startY: 0,
              noFlightOrder: !1,
              isShowBlank: !1,
              canMakePic: !0,
              errorPicMsg: "",
              pictureStatus: "loading",
              showShareImages: !1,
              backgroundUrl: L.default.isTieyou
                ? "https://images3.c-ctrip.com/zt/wechat/flight/monitor_share_bg_ty.png"
                : "https://images3.c-ctrip.com/zt/wechat/flight/monitor_share_bg_zx.png",
              pagePath: "",
              showInfoList: [],
              monitoringTaskList: [],
              delBtnWidth: 50,
              firstSuccessIndex: -1,
              day: "",
              hour: "",
              minute: "",
              second: "",
              trainPageIndex: 1,
              trainPageSize: 20,
              hasMoreItems: !0,
              isRefreshing: !1,
              assistanceOrdersEnterInfo: null,
              hotelMonitorInfo: {},
              isInCurrentPage: !0,
            },
            onLoad: function (e) {
              console.log(e);
              var t = e.orderType,
                i = e.fromPage;
              t
                ? this.setData({ orderType: t, fromPage: i || "xcx_home_qp" })
                : this.setData({ orderType: "trainOrder" }),
                v().showShareMenu && v().showShareMenu({ withShareTicket: !0 }),
                (this.isUseGrabOrderListV2 = (0, S.sA)(
                  y.Z.GrabOrderListConfig,
                  "isUseV2"
                )),
                (this.grabOrderListReloadCount = 0);
              var a = v().getStorageSync("GLOBAL_GRAB_LIST_VERSION");
              "on" === a
                ? (this.isUseGrabOrderListV2 = !0)
                : "off" === a && (this.isUseGrabOrderListV2 = !1),
                console.info("isUseGrabOrderListV2", this.isUseGrabOrderListV2),
                this.getShareImg();
            },
            onShow: function () {
              var e = this;
              if (
                (this.setData({ isInCurrentPage: !0 }),
                "trainOrder" === this.data.orderType &&
                  this.getGrabScreenInfo(),
                !x.ZP.isLogin)
              )
                return (
                  this.setData({
                    isTrainOrderListEmpty: !0,
                    trainOrderList: [],
                    trainPageIndex: 1,
                    noFlightOrder: !0,
                    orderList: [],
                  }),
                  !1
                );
              if ("flightOrder" === this.data.orderType) this.getOrderList();
              else if ("hotelOrder" === this.data.orderType)
                this.getHotelPriceMonitorInfo(),
                  this.getHotelPriceMonitorList();
              else {
                this.setData({ trainPageIndex: 1, hasMoreItems: !0 }),
                  this.getTrainGrabOrderList().catch(function () {
                    e.setData({ isShowBlank: !0 });
                  });
                var t = v().getStorageSync("OrderDescHideList") || [];
                this.setState({ orderDescHideList: t }),
                  this.getAssistanceOrdersEnter(),
                  this.getShareImg();
              }
            },
            onHide: function () {
              this.setData({ isInCurrentPage: !1 });
            },
            onPullDownRefresh: function () {
              var e = this;
              "flightOrder" === this.data.orderType
                ? this.getOrderList(function () {
                    v().stopPullDownRefresh();
                  })
                : (this.setData({ trainPageIndex: 1, hasMoreItems: !0 }),
                  this.getTrainGrabOrderList()
                    .catch(function () {
                      e.setData({ isShowBlank: !0 });
                    })
                    .finally(function () {
                      return v().stopPullDownRefresh();
                    }));
            },
            onGrabListPullDownRefresh: function () {
              var e = this;
              "flightOrder" === this.data.orderType
                ? this.getOrderList(function () {
                    e.setData({ isRefreshing: !1 });
                  })
                : (this.setData({ trainPageIndex: 1, hasMoreItems: !0 }),
                  this.getTrainGrabOrderList()
                    .catch(function () {
                      e.setData({ isShowBlank: !0 });
                    })
                    .finally(function () {
                      e.setData({ isRefreshing: !1 });
                    }));
            },
            login: function () {
              var e = this,
                t = this.data.orderType,
                i = this;
              x.ZP.doLogin().then(
                function () {
                  "flightOrder" === t
                    ? e.getOrderList()
                    : e.getTrainGrabOrderList().catch(function () {
                        i.setData({ isShowBlank: !0 });
                      });
                },
                function () {
                  console.log("取消登录");
                }
              );
            },
            getAssistanceOrdersEnter: function () {
              var e = this;
              (0, C.WLZ)({ type: 0 }).then(function (t) {
                if (!t || 1 !== t.resultCode) throw t;
                t.assistanceOrderEnter &&
                  (e.newUbtTrace(201242),
                  e.setState({
                    assistanceOrdersEnterInfo: t.assistanceOrderEnter,
                  }));
              });
            },
            getGrabScreenInfo: function () {
              var e = this;
              return (0, C.j$o)().then(function (t) {
                if (1 === t.resultCode) {
                  var i,
                    a = t.grabTop;
                  a &&
                    e.setData({
                      bigScreenInfo: {
                        grabCount: a.grabCount,
                        titleLeft: a.titleLeft,
                        titleRight: a.titleRight,
                      },
                      rollGrabInfoList: a.rolls,
                    });
                  var r = t.activities,
                    n = t.leftActivities;
                  e.setData({
                    activities: r,
                    leftActivities: n,
                    instructions: t.instructions,
                    grabButton: t.grabButton,
                    upside: t.upside,
                    alternateEntrances:
                      null === (i = t.entrances) || void 0 === i
                        ? void 0
                        : i[0],
                  });
                }
              });
            },
            getOrderList: function (e) {
              var t = this;
              (0, A.showLoading)(),
                (0, M.t3)({ data: { version: 2 } })
                  .then(function (i) {
                    if (
                      ((0, A.hideLoading)(), console.log(i), 1 === i.resultCode)
                    ) {
                      var a = t.dealWithData(i.data.orders),
                        r = 0 === a.length;
                      t.setData({ orderList: a, noFlightOrder: r });
                    } else (0, A.showWaringDialog)(i.resultMessage);
                    e && e();
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
            },
            dealWithData: function (e) {
              var t,
                i = [],
                a = e.filter(function (e) {
                  return 0 === e.orderType || 4 === e.orderType;
                }),
                r = (0, m.Z)(a);
              try {
                for (r.s(); !(t = r.n()).done; ) {
                  var n = t.value;
                  if (
                    ((n.isTouchMove = !1),
                    (n.priceIcon =
                      1 === n.priceIconType
                        ? ""
                        : 2 === n.priceIconType
                        ? "ifont-down"
                        : ""),
                    (n.buttonBgColor =
                      5 === n.status
                        ? "btn-red"
                        : 2 === n.status || 1 === n.status
                        ? "btn-blue"
                        : "btn-grey"),
                    (n.isTouchMove = !1),
                    n.cancelFlag
                      ? (n.moveAction = "cancel")
                      : !n.cancelFlag && n.deleteFlag
                      ? (n.moveAction = "delete")
                      : n.cancelFlag || n.deleteFlag || (n.moveAction = "none"),
                    4 === n.orderType)
                  ) {
                    var o = I()(
                        k.Z.formatDateWithSlash(n.segmentInfo.departureTime)
                      ),
                      s = I()(
                        k.Z.formatDateWithSlash(n.segmentInfo.arrivalTime)
                      );
                    n.segmentInfo = (0, h.Z)(
                      (0, h.Z)({}, n.segmentInfo),
                      {},
                      {
                        dTime: o.format("HH:mm"),
                        aTime: s.format("HH:mm"),
                        dayDiff: k.Z.getDayDiff(o.format(ae), s.format(ae)),
                      }
                    );
                  }
                  i.push(n);
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
              return i;
            },
            onSwipe: function (e) {
              var t = e.isTouchMove,
                i = e.index;
              if (t) {
                var a = this.data.orderList.map(function (e, t) {
                  return (0, h.Z)((0, h.Z)({}, e), {}, { isTouchMove: t == i });
                });
                this.setData({ orderList: a });
              }
            },
            clickMonitorItem: function (e) {
              var t = e.currentTarget.dataset.index,
                i = this.data,
                a = i.orderList,
                r = i.fromPage,
                n = a[t],
                o = n.departureCityName,
                s = n.departureCityCode,
                c = n.arrivalCityName,
                l = n.arrivalCityCode,
                d = n.lowestPriceDate,
                u = n.orderType,
                h = n.status,
                m = n.orderNumber;
              if (4 === u) {
                var g = {
                  query: {
                    segments: [
                      {
                        dptDate: d,
                        dptCode: s,
                        arrCode: l,
                        flightNo: a[t].segmentInfo.flightNumber,
                      },
                    ],
                  },
                };
                return this.navigateTo({
                  url: "/pages/flight/bookx/bookx?fromPage=".concat(r),
                  data: encodeURIComponent(JSON.stringify(g)),
                });
              }
              if (0 === u)
                if (2 === h || 5 === h)
                  this.navigateTo({
                    url: "/pages/flight/monitordetail/monitordetail?orderNumber=".concat(
                      m,
                      "&from=monitorList"
                    ),
                  });
                else {
                  var f = I()().add(1, "day").format(ae);
                  this.navigateTo({
                    url: "/pages/flight/monitoredit/monitoredit?departCityName="
                      .concat(o, "&departCityCode=")
                      .concat(s, "&arriveCityName=")
                      .concat(c, "&arriveCityCode=")
                      .concat(l, "&selectDate=")
                      .concat(f, "&fromPage=")
                      .concat(r),
                  });
                }
            },
            doDeleteMonitorOrder: function (e) {
              var t = this,
                i = { data: { orderNumber: e } };
              (0, M.xF)(i)
                .then(function () {
                  t.getOrderList();
                })
                .catch(function (e) {
                  console.log(e);
                });
            },
            deleteMonitorOrder: function (e) {
              var t = this;
              this.showMultiButtonDialog({
                title: "温馨提示",
                content: "确定取消该抢票任务？",
                leftButtonName: "点错了",
                rightButtonName: "确定取消",
                onRightButtonClick: function () {
                  t.doDeleteMonitorOrder(e);
                },
              });
            },
            goToMonitorEdit: function () {
              var e = I()().add(1, "day").format(ae),
                t = this.data.fromPage,
                i = X.IK.selectDate,
                a = X.IK.query,
                r = {
                  dStation: a
                    ? a.departCity
                    : L.default.isKMFlight
                    ? "昆明"
                    : "上海",
                  dStationCode: a
                    ? a.departCityCode
                    : L.default.isKMFlight
                    ? "KMG"
                    : "SHA",
                  aStation: a ? a.arriveCity : "北京",
                  aStationCode: a ? a.arriveCityCode : "BJS",
                  selectDate: i || e,
                };
              this.navigateTo({
                url: "/pages/flight/monitoredit/monitoredit?departCityName="
                  .concat(r.dStation, "&departCityCode=")
                  .concat(r.dStationCode, "&arriveCityName=")
                  .concat(r.aStation, "&arriveCityCode=")
                  .concat(r.aStationCode, "&selectDate=")
                  .concat(r.selectDate, "&fromPage=")
                  .concat(t),
              });
            },
            toStrategy: function () {
              if (L.default.isWechat) {
                var e = this.data.isTieyou,
                  t =
                    "https://pages.c-ctrip.com/ztrip/document/flt-monitor-strategy-".concat(
                      e ? "ty" : "zx",
                      ".html"
                    );
                Z.Z.twebview({ data: { url: t } });
              }
            },
            handleShareAction: function (e) {
              var t = e.currentTarget.dataset.index,
                i = this.data,
                a = i.orderList,
                r = i.fromPage,
                n = a[t],
                o = n.orderNumber,
                s = n.orderType,
                c = n.departureCityCode,
                l = n.arrivalCityCode,
                d = n.lowestPriceDate;
              if (4 === s) {
                var u = {
                  query: {
                    segments: [
                      {
                        dptDate: d,
                        dptCode: c,
                        arrCode: l,
                        flightNo: a[t].segmentInfo.flightNumber,
                      },
                    ],
                  },
                };
                return this.navigateTo({
                  url: "/pages/flight/bookx/bookx?fromPage=".concat(r),
                  data: encodeURIComponent(JSON.stringify(u)),
                });
              }
              this.navigateTo({
                url: "/pages/flight/monitordetail/monitordetail?orderNumber=".concat(
                  o
                ),
              });
            },
            refCanvas: function (e) {
              this.canvas = e;
            },
            closeMask: function (e) {
              var t = e.currentTarget.dataset.type;
              "share" === t
                ? this.toggleSharePanel()
                : "sharePYQ" === t && this.hideSharePicturePopup();
            },
            toggleSharePanel: function () {
              var e = this,
                t = this.data.showSharePanel;
              this._tabBarHidden
                ? (v().showTabBar(), (this._tabBarHidden = !1))
                : (v().hideTabBar({ animation: !0 }),
                  (this._tabBarHidden = !0)),
                this.setData({
                  mask: !t,
                  maskType: "share",
                  showSharePanel: !t,
                }),
                setTimeout(function () {
                  e.setData({ transition: !t });
                }, 10);
            },
            shareToPengYouQuan: function () {
              var e = this,
                t = this.data,
                i = t.canMakePic,
                a = t.errorPicMsg;
              if ((this.toggleSharePanel(), !i))
                return this.showCommonDialog(a);
              setTimeout(function () {
                e.setData({
                  mask: !0,
                  maskType: "sharePYQ",
                  showShareImages: !0,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !0 });
                  }, 10);
              }, 250);
            },
            hideSharePicturePopup: function () {
              this.setData({
                mask: !1,
                maskType: "",
                showShareImages: !1,
                transition: !1,
              });
            },
            onSharePictureSuccess: function () {
              (0, A.hideLoading)(),
                this.setData({ canMakePic: !0, pictureStatus: "success" });
            },
            onSharePictureFail: function (e) {
              console.log(e.detail),
                this.data.showShareImages &&
                  ((0, A.hideLoading)(),
                  (0, A.showToast)(e && e.detail && e.detail.msg)),
                this.setData({ canMakePic: !1, errorPicMsg: e.detail.msg });
            },
            onSharePictureSave: function () {
              this.hideSharePicturePopup(),
                this.showCommonDialog("图片保存成功，快去发个朋友圈吧~");
            },
            onShareAppMessage: function () {
              return { bu: "train", path: k.Z.getHomePath() };
            },
            getTrainGrabOrderList: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                i = t.needLoading,
                a = void 0 === i || i;
              a && (0, A.showLoading)();
              var r = this.data,
                n = r.trainPageIndex,
                o = r.trainPageSize;
              return this.isUseGrabOrderListV2
                ? this.getTrainGrabOrderListV2()
                : ne({ pageIndex: n, pageSize: o })
                    .then(function (t) {
                      if (t.resultCode && 1 === t.resultCode) {
                        var i = 1 === n ? [] : e.data.trainOrderList,
                          a = t.grabOrders;
                        if (a && a.length > 0) {
                          a.forEach(function (e) {
                            200 === e.orderStatusInfo.code &&
                              "" === e.speedUpDesc &&
                              (e.speedUpDesc = "分享任务给好友，可免费加速哦"),
                              (e.speedUpDesc = k.Z.convertStr(e.speedUpDesc)),
                              (e.orderDesc = k.Z.convertStr(e.orderDesc)),
                              e.orderStatusInfo &&
                                e.orderStatusInfo.name &&
                                (e.orderStatusInfo.name = k.Z.convertStr(
                                  e.orderStatusInfo.name
                                )),
                              e.marketInfo &&
                                ((e.marketInfo = JSON.parse(e.marketInfo)),
                                e.marketInfo.wechatBanner &&
                                  e.marketInfo.wechatBanner.title &&
                                  (e.marketInfo.wechatBanner.title =
                                    k.Z.convertStr(
                                      e.marketInfo.wechatBanner.title
                                    ))),
                              i.push(e);
                          });
                          var r = i.findIndex(function (e) {
                            return 300 === e.orderStatusInfo.code;
                          });
                          e.setData({
                            trainOrderList: i,
                            trainPageIndex: n + 1,
                            isTrainOrderListEmpty: !1,
                            firstSuccessIndex: r,
                          });
                        } else
                          e.setData({ hasMoreItems: !1 }),
                            1 === n && e.setData({ isTrainOrderListEmpty: !0 });
                        return t.resultCode;
                      }
                      throw t;
                    })
                    .finally(function () {
                      return a && (0, A.hideLoading)();
                    });
            },
            getTrainGrabOrderListV2: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                i = t.needLoading,
                a = void 0 === i || i;
              a && (0, A.showLoading)();
              var r = 40,
                n = 1,
                o = this.data.grabOrderList;
              return (0, C.gV0)({ pageIndex: n, pageSize: r })
                .then(function (t) {
                  if (t.resultCode && 1 === t.resultCode) {
                    var i = t.grabOrderList;
                    return (
                      (null == i ? void 0 : i.length) > 0
                        ? e.setData({
                            grabOrderList: i,
                            trainPageIndex: n + 1,
                            isTrainOrderListEmpty: !1,
                            hasMoreItems: !1,
                          })
                        : o ||
                          (e.setData({ hasMoreItems: !1 }),
                          1 === n && e.setData({ isTrainOrderListEmpty: !0 })),
                      t.resultCode
                    );
                  }
                  if (0 === (null == t ? void 0 : t.resultCode))
                    e.setData({ hasMoreItems: !1, isTrainOrderListEmpty: !0 });
                  else {
                    if (
                      (e.grabOrderListReloadCount++,
                      2 === e.grabOrderListReloadCount)
                    )
                      throw ((e.grabOrderListReloadCount = 0), t);
                    e.setData({ hasMoreItems: !1, isTrainOrderListEmpty: !0 });
                  }
                })
                .finally(function () {
                  return a && (0, A.hideLoading)();
                });
            },
            onGrabListToBottom: function () {
              var e = this;
              !this.isUseGrabOrderListV2 &&
                this.data.hasMoreItems &&
                this.getTrainGrabOrderList().catch(function () {
                  e.setData({ isShowBlank: !0 });
                });
            },
            getOrderStatus: function (e) {
              switch (e) {
                case 300:
                  return "S";
                case 200:
                  return "P";
                case 201:
                  return "O";
                case 500:
                  return "C";
                case 100:
                  return "W";
                case 400:
                  return "F";
                case 600:
                  return "TC";
                case 205:
                case 206:
                case 207:
                  return "T";
                default:
                  return "";
              }
            },
            addMoreChoose: function (e) {
              var t = B.ZP.getTrainGrabOrderDetailUrl(
                e.orderNumber,
                "&operation=1"
              );
              this.navigateTo({ url: t });
            },
            handleOrderOrAccelerate: function (e) {
              var t,
                i =
                  ((null == e ? void 0 : e.buttonList) &&
                    (null === (t = e.buttonList[1]) || void 0 === t
                      ? void 0
                      : t.buttonType)) ||
                  "",
                a = B.ZP.getTrainGrabOrderDetailUrl(e.orderNumber);
              "accelerate" === i
                ? ((a = B.ZP.getTrainGrabOrderDetailUrl(
                    e.orderNumber,
                    "&operation=2"
                  )),
                  this.navigateTo({ url: a }))
                : this.navigateTo({ url: a });
            },
            onDeleteTrainGrabOrder: function (e) {
              var t = this;
              this.newUbtTrace(195701);
              var i = e.currentTarget.dataset.index,
                a = this.data.trainOrderList[i],
                r = a.orderNumber,
                n = a.deleteFlag,
                o = a.deleteDesc;
              n
                ? (0, A.showModal)({
                    title: "温馨提示",
                    content: o,
                    showCancel: !0,
                    cancelText: "手滑了",
                    cancelColor: "#999999",
                    confirmText: "删除",
                    success: function (e) {
                      e.confirm && t.doDeleteTrainGrabOrder(r);
                    },
                  })
                : (0, A.showModal)({ title: "温馨提示", content: o });
            },
            doDeleteTrainGrabOrder: function (e) {
              var t = this;
              (0, A.showLoading)("正在删除订单..."),
                (0, C.FBT)({ orderNumber: e })
                  .then(function (e) {
                    if (1 !== e.resultCode) throw e;
                    setTimeout(function () {
                      t.refreshTrainGrabOrderList({ needLoading: !1 }).then(
                        function () {
                          (0, A.hideLoading)(), (0, A.showToast)("删除成功");
                        }
                      );
                    }, 1e3);
                  })
                  .catch(function (e) {
                    console.log(e),
                      (0, A.hideLoading)(),
                      (0, A.showToast)("删除失败");
                  });
            },
            clickTrainCard: function (e) {
              var t,
                i = e.currentTarget.dataset,
                a = i.index,
                r = i.ordernumber,
                n = i.hasticket,
                o = this.data.trainOrderList[a],
                s = this.getOrderStatus(o.orderStatusInfo.code),
                c = o.originOrderNumber;
              return (
                this.newUbtTrace(203730, {
                  bizKey: "z_list_order_card_show",
                  orderState:
                    null == o ||
                    null === (t = o.orderStatusInfo) ||
                    void 0 === t
                      ? void 0
                      : t.code,
                }),
                601 === o.orderStatusInfo.code
                  ? this.navigateTo({ url: B.ZP.getTrainDetailUrl(r) })
                  : 1 == o.smartTripType && 204 !== o.orderStatusInfo.code
                  ? this.navigateTo({
                      url: "/pages/smart/packageA/orderDetail/index?orderNumber=".concat(
                        c || r,
                        "&isBizOrder=1"
                      ),
                    })
                  : 700 === o.orderStatusInfo.code
                  ? this.navigateTo({
                      url: "/pages/trainDetail/jianlouConfirm/index?orderNumber=".concat(
                        r
                      ),
                    })
                  : 600 === o.orderStatusInfo.code
                  ? this.gotoSmartTicketPage(r)
                  : 203 === o.orderStatusInfo.code
                  ? this.navigateTo({
                      url: "/pages/trainsmart/smartSplitTicket/index?oid=".concat(
                        r
                      ),
                    })
                  : 101 === o.orderStatusInfo.code
                  ? this.gotoCandidateOrderPay(r)
                  : 204 === o.orderStatusInfo.code
                  ? this.navigateTo({
                      url: "/pages/trainsmart/smartRSTicket/index?oid=".concat(
                        r
                      ),
                    })
                  : -1 != [208, 209, 301].indexOf(o.orderStatusInfo.code)
                  ? this.handleAlternateOrder(o)
                  : n
                  ? "S" === s
                    ? this.navigateTo({
                        url: "/pages/trainDetail/grabsuccess/grabsuccess?oid="
                          .concat(r, "&originOrderNumber=")
                          .concat(c),
                      })
                    : this.gotoTrainOrderDetailPage(r)
                  : this.gotoTrainOrderDetailPage(r, !0)
              );
            },
            clickTrainCardV2: function (e) {
              var t = e.orderScene,
                i = e.orderTag,
                a = e.orderId,
                r = e.originalOID,
                n = void 0 === r ? "" : r;
              return (
                this.newUbtTrace(203730, {
                  bizKey: "z_list_order_card_show",
                  orderState: t,
                }),
                10003 === t
                  ? this.navigateTo({ url: B.ZP.getTrainDetailUrl(a) })
                  : 1 == (null == i ? void 0 : i.isSmartTrip) && 60003 !== t
                  ? this.navigateTo({
                      url: "/pages/smart/packageA/orderDetail/index?orderNumber=".concat(
                        n || a,
                        "&isBizOrder=1"
                      ),
                    })
                  : 60001 === t
                  ? this.navigateTo({
                      url: "/pages/trainDetail/jianlouConfirm/index?orderNumber=".concat(
                        a
                      ),
                    })
                  : 60004 === t
                  ? this.gotoSmartTicketPage(a)
                  : 60002 === t
                  ? this.navigateTo({
                      url: "/pages/trainsmart/smartSplitTicket/index?oid=".concat(
                        a
                      ),
                    })
                  : 10002 === t
                  ? this.gotoCandidateOrderPay(a)
                  : 60003 === t
                  ? this.navigateTo({
                      url: "/pages/trainsmart/smartRSTicket/index?oid=".concat(
                        a
                      ),
                    })
                  : -1 != [20005, 99004, 30002].indexOf(t)
                  ? this.handleAlternateOrderV2(e)
                  : 30001 === t
                  ? this.navigateTo({
                      url: "/pages/trainDetail/grabsuccess/grabsuccess?oid="
                        .concat(a, "&originOrderNumber=")
                        .concat(n),
                    })
                  : this.gotoTrainOrderDetailPage(a, !0)
              );
            },
            gotoPay: function (e) {
              var t,
                i = null == e ? void 0 : e.orderNumber,
                a =
                  null == e || null === (t = e.orderStatusInfo) || void 0 === t
                    ? void 0
                    : t.code;
              100 === a
                ? this.gotoTrainOrderDetailPage(i, !0)
                : 101 === a && this.gotoCandidateOrderPay(i);
            },
            gotoSmartTicketPage: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t = "/pages/trainsmart/smartCSTicket/index?orderNumber=" + e;
              this.navigateTo({ url: t });
            },
            gotoCandidateOrderPay: function (e) {
              this.navigateTo({
                url: "/pages/taroCRN/train/pages/candidateOrderPay/index?orderNumber=".concat(
                  e
                ),
              });
            },
            gotoTrainOrderDetailPage: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                i = "";
              (i = t
                ? B.ZP.getTrainGrabOrderDetailUrl(e)
                : B.ZP.getTrainDetailUrl(e)),
                this.navigateTo({ url: i });
            },
            gotoTrainGrabSetPage: function (e) {
              var t = this,
                i = { fromPage: "grablist" };
              e &&
                (i = {
                  fromStation: { name: e.fromStationName || "" },
                  toStation: { name: e.toStationName || "" },
                  submitedTrainNumberList: e.trainNum.split(","),
                  submitedDateList: e.departDate.split(" ")[0].split(","),
                  submitedSeatList: e.seatName.split(","),
                });
              var a = "/pages/trainRob/setgrab/setgrab";
              x.ZP.isLogin
                ? this.navigateTo({ data: i, url: a })
                : x.ZP.doLogin().then(
                    function () {
                      t.navigateTo({ url: a });
                    },
                    function () {
                      console.log("取消登陆");
                    }
                  );
            },
            gotoTrainGrabSetPageV2: function (e) {
              var t,
                i,
                a,
                r = this,
                n = { fromPage: "grablist" };
              e &&
                e.travelDetail &&
                (n = {
                  fromStation: {
                    name:
                      (null === (t = e.travelDetail) || void 0 === t
                        ? void 0
                        : t.from) || "",
                  },
                  toStation: {
                    name:
                      (null === (i = e.travelDetail) || void 0 === i
                        ? void 0
                        : i.to) || "",
                  },
                  submitedTrainNumberList:
                    null === (a = e.travelDetail.trainNo) || void 0 === a
                      ? void 0
                      : a.split("/"),
                  submitedDateList: [
                    I()(e.travelDetail.departureTime).format("YYYY-MM-DD"),
                  ],
                  submitedSeatList: e.travelDetail.seatName.split(","),
                });
              var o = "/pages/trainRob/setgrab/setgrab";
              x.ZP.isLogin
                ? this.navigateTo({ data: n, url: o })
                : x.ZP.doLogin().then(
                    function () {
                      r.navigateTo({ url: o });
                    },
                    function () {
                      console.log("取消登陆");
                    }
                  );
            },
            onButtonClick: function (e, t, i) {
              var a = e.orderScene,
                r = e.statusCode;
              2012 === t
                ? (this.gotoTrainOrderDetailPage(e.originalOID),
                  i.stopPropagation())
                : ([400, 500].includes(r) || 99004 === a) &&
                  (i.stopPropagation(), this.gotoTrainGrabSetPageV2(e));
            },
            noop: function () {},
            refreshTrainGrabOrderList: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                i = t.needLoading,
                a = void 0 === i || i;
              return (
                this.setData({ trainPageIndex: 1, hasMoreItems: !0 }),
                this.getTrainGrabOrderList({ needLoading: a })
                  .catch(function () {
                    e.setData({ isShowBlank: !0 });
                  })
                  .finally(function () {
                    e.setData({ isRefreshing: !1 });
                  })
              );
            },
            switchTab: function (e) {
              var t = this;
              if ((this.setData({ orderType: e }), !x.ZP.isLogin)) return !1;
              switch (e) {
                case "flightOrder":
                  this.getOrderList();
                  break;
                case "hotelOrder":
                  this.getHotelPriceMonitorInfo(),
                    this.getHotelPriceMonitorList();
                  break;
                case "trainOrder":
                  this.setData({ trainPageIndex: 1, hasMoreItems: !0 }),
                    this.data.bigScreenInfo || this.getGrabScreenInfo(),
                    this.getTrainGrabOrderList().catch(function () {
                      t.setData({ isShowBlank: !0 });
                    });
                  break;
                default:
                  return;
              }
            },
            getHotelPriceMonitorInfo: function () {
              var e = this;
              (0, A.showLoading)();
              var t = { data: { clientVersion: O.Z.clientVersion } };
              (0, D._n)(t)
                .then(function (t) {
                  1 === (null == t ? void 0 : t.resultCode) &&
                    e.setData({ hotelMonitorInfo: t.data || {} }),
                    (0, A.hideLoading)();
                })
                .catch(function (e) {
                  (0, A.hideLoading)(), console.log(e);
                });
            },
            getHotelPriceMonitorList: function () {
              var e = this;
              (0, A.showLoading)();
              var t = { data: { clientVersion: O.Z.clientVersion } };
              (0, D.ii)(t)
                .then(function (t) {
                  if (((0, A.hideLoading)(), 1 === t.resultCode)) {
                    var i = t.data,
                      a = i.showInfoList,
                      r = void 0 === a ? [] : a,
                      n = i.monitoringTaskList,
                      o = void 0 === n ? [] : n,
                      s = i.monitoring,
                      c = void 0 === s ? {} : s,
                      l = o.map(function (e) {
                        return (0, h.Z)(
                          (0, h.Z)({}, e),
                          {},
                          {
                            dateStr: e.checkInDateList
                              .reduce(function (e, t) {
                                return e.concat([I()(t).format("M月D日")]);
                              }, [])
                              .join(","),
                            hotelPriceMonitors: e.hotelPriceMonitors.map(
                              function (e) {
                                return (0, h.Z)(
                                  (0, h.Z)({}, e),
                                  {},
                                  {
                                    dateStr: I()(e.checkInDate).format(
                                      "M月DD日"
                                    ),
                                  }
                                );
                              }
                            ),
                          }
                        );
                      });
                    Object.keys(c).length > 0 &&
                      (c.hotelPriceMonitors = c.hotelPriceMonitors.map(
                        function (e) {
                          return (0, h.Z)(
                            (0, h.Z)({}, e),
                            {},
                            { dateStr: I()(e.checkInDate).format("M月DD日") }
                          );
                        }
                      )),
                      e.setData({
                        showInfoList: r,
                        monitoringTaskList: l,
                        monitoring: c,
                      });
                  }
                })
                .catch(function (e) {
                  (0, A.hideLoading)(), console.log(e);
                });
            },
            goToLowerpriceremind: function () {
              Z.Z.twebview({
                data: {
                  url: "https://market.suanya.com/activity/hotel/static/lowerpriceremind.html",
                },
              });
            },
            goToHotelMonitorEdit: function () {
              this.navigateTo({
                url: "/pages/hotel/packages/monitoredit/monitoredit",
              });
            },
            goHotelHomePage: function () {
              v().reLaunch({
                url: "/pages/home/index?tab=hotel&fromPage=xcx_hotel_monitor_page",
              });
            },
            gotoHotelDetail: function (e) {
              var t = e.currentTarget.dataset.item,
                i = {
                  hotel: t,
                  query: {
                    checkInDate: t.checkInDate,
                    checkOutDate: t.checkOutDate,
                  },
                };
              this.navigateTo({ url: "/pages/hotel/detail/detail", data: i });
            },
            goToMonitorDetail: function (e) {
              var t = e.currentTarget.dataset.item;
              this.navigateTo({
                url: "/pages/hotel/packages/monitordetail/monitordetail",
                data: t,
              });
            },
            getShareImg: function () {
              var e = this;
              return (0, u.Z)(
                (0, d.Z)().mark(function t() {
                  var i, a, r, n, o, s;
                  return (0, d.Z)().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (i = {
                                keys: ["ztrip-fe-train-robshare-config"],
                              }),
                              (t.next = 4),
                              (0, P.yp)(i)
                            );
                          case 4:
                            (a = t.sent) &&
                              1 === a.resultCode &&
                              ((r = a.configData),
                              (n = void 0 === r ? [] : r),
                              k.Z.notEmptyArray(n) &&
                                ((o =
                                  n.find(function (e) {
                                    return (
                                      "ztrip-fe-train-robshare-config" === e.key
                                    );
                                  }) || {}),
                                (s = o.data || {}),
                                (e.shareImgs = [
                                  L.default.isTieyou
                                    ? s.shareImgTY
                                    : s.shareImgZX,
                                ]))),
                              (t.next = 11);
                            break;
                          case 8:
                            (t.prev = 8),
                              (t.t0 = t.catch(0)),
                              console.log(t.t0);
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 8]]
                  );
                })
              )();
            },
            reload: function () {
              var e = this;
              this.setData({ isShowBlank: !1, trainOrderList: [] }),
                (0, A.showLoading)(),
                setTimeout(function () {
                  e.getTrainGrabOrderList().catch(function () {
                    e.setData({ isShowBlank: !0 });
                  }),
                    e.getShareImg();
                }, 1e3);
            },
            recordShareMode: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              if (e) {
                var t = { shareType: "weixin", shareKey: e };
                return (0, C._0V)(t)
                  .then(function () {})
                  .catch(function (e) {
                    return console.log(e);
                  });
              }
            },
            jumpAccountHelpList: function () {
              this.newUbtTrace(201243),
                this.navigateTo({
                  url: "/pages/trainDetail/accountHelpList/index",
                });
            },
            touchS: function (e) {
              1 == e.touches.length &&
                this.setData({ startX: e.touches[0].clientX });
            },
            touchM: function (e) {
              var t = e.currentTarget.dataset,
                i = t.index,
                a = t.type,
                r = t.groupindex,
                n = void 0 === r ? 0 : r;
              if (1 == e.touches.length) {
                var o = e.touches[0].clientX,
                  s = this.data.startX - o,
                  c = this.data.delBtnWidth,
                  d = "";
                0 == s || s < 0
                  ? (d = "left:0px")
                  : s > 0 &&
                    ((d = "left:-" + s + "px"),
                    s >= c && (d = "left:-" + c + "px"));
                var u =
                  "single" === a
                    ? "monitoring.hotelPriceMonitors[".concat(i, "].txtStyle")
                    : "monitoringTaskList["
                        .concat(n, "].hotelPriceMonitors[")
                        .concat(i, "].txtStyle");
                this.setData((0, l.Z)({}, u, d));
              }
            },
            touchE: function (e) {
              var t = e.currentTarget.dataset,
                i = t.index,
                a = t.type,
                r = t.groupindex,
                n = void 0 === r ? 0 : r;
              if (1 == e.changedTouches.length) {
                var o = e.changedTouches[0].clientX,
                  s = this.data.startX - o,
                  c = this.data.delBtnWidth,
                  d = s > c / 2 ? "left:-" + c + "px" : "left:0px",
                  u =
                    "single" === a
                      ? "monitoring.hotelPriceMonitors[".concat(i, "].txtStyle")
                      : "monitoringTaskList["
                          .concat(n, "].hotelPriceMonitors[")
                          .concat(i, "].txtStyle");
                this.setData((0, l.Z)({}, u, d));
              }
            },
            delHotelPriceMonitor: function (e) {
              var t = this,
                i = e.currentTarget.dataset.monitorid,
                a = {
                  data: { clientVersion: O.Z.clientVersion, monitorId: i },
                };
              (0, D.G$)(a)
                .then(function (e) {
                  1 === e.resultCode && t.getHotelPriceMonitorList();
                })
                .catch(function (e) {
                  return console.log(e);
                });
            },
            setSubscribe: function (e) {
              e.stopPropagation();
              var t = v().getStorageSync("setSubscribe") || 0;
              if (!(t && t > Date.parse(new Date()))) {
                v().removeStorageSync("setSubscribe");
                var i = this.data.isTieyou
                  ? "G7F5FqHIwreDStUmL6ipgz8Q5CUGGFcnQDlFgLzV6O0"
                  : "IrwH7T6PBS8cncQ-_j8KbPFlqc7jSrMoca8k4Wr2MAg";
                wx.requestSubscribeMessage({
                  tmplIds: [i],
                  success: function (e) {
                    if ((console.log("success", e), "reject" == e[i])) {
                      var t = Date.parse(new Date()) + 2592e6;
                      v().setStorageSync("setSubscribe", t);
                    }
                  },
                  fail: function (e) {
                    console.log("fail", e);
                  },
                });
              }
            },
            getTrainCardHeaderClassName: function (e) {
              var t,
                i = this.data.isTieyou,
                a =
                  null == e || null === (t = e.orderStatusInfo) || void 0 === t
                    ? void 0
                    : t.code;
              return 100 === a ||
                101 === a ||
                600 === a ||
                203 === a ||
                204 === a ||
                205 === a ||
                206 === a ||
                207 === a ||
                700 === a
                ? "warn"
                : 200 === a
                ? e.isVip
                  ? "vip-loading"
                  : i
                  ? "common-loading-ty"
                  : "common-loading-zx"
                : void 0;
            },
            againGrab: function (e, t) {
              t.stopPropagation(),
                500 === e.orderStatusInfo.code
                  ? this.gotoTrainGrabSetPage(e)
                  : this.gotoTrainGrabSetPage();
            },
            getGarbRotateSpeed: function (e) {
              for (
                var t,
                  i,
                  a,
                  r =
                    (null == e ||
                    null === (t = e.speedPointConfig) ||
                    void 0 === t ||
                    null === (i = t.speedRange) ||
                    void 0 === i ||
                    null === (a = i.split(",")) ||
                    void 0 === a
                      ? void 0
                      : a.map(function (e) {
                          return +e;
                        })) || [],
                  n = r.length,
                  o = e.virtualPackageLevel,
                  s = "animate0",
                  c = 0;
                c < n;
                c++
              ) {
                if (c === n - 1 && o >= r[c]) {
                  s = "animate" + c;
                  break;
                }
                o >= r[c] && o < r[c + 1] && (s = "animate" + c);
              }
              return s;
            },
            coverTextStyle: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t = arguments.length > 1 ? arguments[1] : void 0,
                i =
                  /<span(\s+size=(\d*)+)?(\s+color=['"]?([a-zA-Z#0-9]*)?['"]?)?([^>]*?)>([^<]*?)<\/span>/gi;
              return e.replace(
                i,
                '<span style="color:$4;font-size:$2px;'.concat(
                  t || "",
                  ' ">$6</span>'
                )
              );
            },
            newUbtTrace: function (e, t) {
              var i = t && "object" == (0, c.Z)(t) ? t : {};
              try {
                this.ubtTrace(
                  e,
                  (0, h.Z)(
                    {
                      openId: x.ZP.openid || "",
                      userName: x.ZP.userName || "",
                      cid: x.ZP.cid || "",
                    },
                    i
                  )
                );
              } catch (e) {
                console.log(e);
              }
            },
            handleAlternateOrder: function (e) {
              switch (e.orderStatusInfo.code) {
                case 208:
                  var t =
                    "/pages/taroCRN/train/pages/CandidateOrderDetail/index?orderNumber=".concat(
                      e.orderNumber
                    );
                  k.Z.commonNavigator(t);
                  break;
                case 209:
                  this.gotoTrainGrabSetPage(e);
                  break;
                case 301:
                  this.gotoTrainOrderDetailPage(e.orderNumber);
              }
            },
            handleAlternateOrderV2: function (e) {
              switch (e.orderScene) {
                case 20005:
                  var t =
                    "/pages/taroCRN/train/pages/CandidateOrderDetail/index?orderNumber=".concat(
                      e.orderId
                    );
                  k.Z.commonNavigator(t);
                  break;
                case 99004:
                  this.gotoTrainOrderDetailPage(e.orderId, !0);
                  break;
                case 30002:
                  this.gotoTrainOrderDetailPage(e.orderId);
              }
            },
          },
          se =
            (0, ie.h)()(
              (K =
                N()(oe)(
                  (K = (function (e) {
                    (0, o.Z)(i, e);
                    var t = (0, s.Z)(i);
                    function i() {
                      return (0, r.Z)(this, i), t.apply(this, arguments);
                    }
                    return (
                      (0, n.Z)(i, [
                        {
                          key: "render",
                          value: function () {
                            var e,
                              t,
                              i,
                              a,
                              r,
                              n,
                              o,
                              s,
                              c,
                              l = this,
                              d = this.data,
                              u = d.isTieyou,
                              h = d.bigScreenInfo,
                              m = d.rollGrabInfoList,
                              p = d.orderType,
                              v = d.isTrainOrderListEmpty,
                              b = d.grabOrderList,
                              N = d.trainOrderList,
                              Z = d.isShowBlank,
                              x = d.noFlightOrder,
                              S = d.orderList,
                              y = d.monitoringTaskList,
                              V = d.monitoring,
                              I = d.showInfoList,
                              D = d.noHotelOrder,
                              B = d.transition,
                              P = d.mask,
                              C = d.maskType,
                              O = d.showSharePanel,
                              X = d.speedInfo,
                              A = d.shareType,
                              M = d.showShareImages,
                              _ = d.backgroundUrl,
                              R = d.pagePath,
                              H = d.isRefreshing,
                              E = d.hasMoreItems,
                              U = d.assistanceOrdersEnterInfo,
                              q = d.activities,
                              K = d.leftActivities,
                              W = d.alternateEntrances,
                              $ = d.instructions,
                              ee = d.grabButton,
                              ie = d.upside,
                              ae = d.hotelMonitorInfo,
                              ne = ae.userCount,
                              oe = ae.userShowInfoList,
                              se = d.isInCurrentPage,
                              ce = void 0 === se || se,
                              le = d.orderDescHideList,
                              de = void 0 === le ? [] : le,
                              ue =
                                (null === (e = k.A.menuInfo) || void 0 === e
                                  ? void 0
                                  : e.bottom) +
                                (null === (t = k.A.menuInfo) || void 0 === t
                                  ? void 0
                                  : t.top) -
                                k.A.statusBarHeight,
                              he = { top: "".concat(ue || 60, "px") },
                              me = { height: "".concat(ue || 60, "px") },
                              ge = {
                                paddingTop: "".concat(
                                  (null === (i = k.A.menuInfo) || void 0 === i
                                    ? void 0
                                    : i.top) || 24,
                                  "px"
                                ),
                                height: "".concat(
                                  (null === (a = k.A.menuInfo) || void 0 === a
                                    ? void 0
                                    : a.height) || 32,
                                  "px"
                                ),
                                lineHeight: "".concat(
                                  (null === (r = k.A.menuInfo) || void 0 === r
                                    ? void 0
                                    : r.height) || 32,
                                  "px"
                                ),
                              };
                            return (0, z.BX)(f.Block, {
                              children: [
                                (0, z.BX)(f.View, {
                                  className: "page ".concat(
                                    L.default.isBaidu ? "swan" : ""
                                  ),
                                  children: [
                                    (0, z.tZ)(f.View, {
                                      className: "custom-header",
                                      children: (0, z.tZ)(f.View, {
                                        className: "custom-bar",
                                        style: me,
                                        children: (0, z.BX)(f.View, {
                                          className: "main-tab",
                                          style: ge,
                                          children: [
                                            ["st", "zxdj", "zxtj"].includes(
                                              L.default.jetpack
                                            ) &&
                                              (0, z.tZ)(f.View, {
                                                onClick: function () {
                                                  return l.navigateBack();
                                                },
                                                children: (0, z.tZ)(f.Text, {
                                                  className:
                                                    "iconfont2 ifont2-fanhui_linea_24 back",
                                                }),
                                              }),
                                            re.map(function (e) {
                                              var t = e.id,
                                                i = e.text,
                                                a = e.ubtKey;
                                              return (
                                                e.isShow &&
                                                (0, z.tZ)(
                                                  f.Text,
                                                  {
                                                    className:
                                                      "head-tab-item ".concat(
                                                        t === p ? "current" : ""
                                                      ),
                                                    "data-ubt-key": a,
                                                    id: "ADAO",
                                                    onClick: function () {
                                                      return l.switchTab(t);
                                                    },
                                                    children: i,
                                                  },
                                                  t
                                                )
                                              );
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    "trainOrder" === p &&
                                      (0, z.BX)(f.ScrollView, {
                                        style: he,
                                        className: "train jiankong-box",
                                        scrollY: "true",
                                        onScrollToLower:
                                          this.onGrabListToBottom,
                                        refresherEnabled: !0,
                                        refresherBackground: "transparent",
                                        refresherTriggered: H,
                                        onRefresherRefresh:
                                          this.onGrabListPullDownRefresh,
                                        onRefresherPulling: function () {
                                          return l.setData({
                                            isRefreshing: !0,
                                          });
                                        },
                                        children: [
                                          !v &&
                                            (0, z.BX)(f.View, {
                                              className: "train-qp-list",
                                              children: [
                                                (0, z.tZ)(G, {
                                                  visible: !0,
                                                  customStyle: {
                                                    marginLeft: "20rpx",
                                                    marginRight: "20rpx",
                                                    marginBottom: "10rpx",
                                                    background: "unset",
                                                  },
                                                  fromPage: "robList",
                                                  ubtTrace: this.ubtTrace,
                                                }),
                                                (0, z.tZ)(j, {
                                                  bigScreenInfo: h,
                                                  rollGrabInfoList: m,
                                                }),
                                                (0, z.tZ)(F, {
                                                  activities: q,
                                                  leftActivities: K,
                                                  alternateEntrances: W,
                                                  isInCurrentPage: ce,
                                                  navigateTo: this.navigateTo,
                                                  ubtTrace: this.ubtTrace,
                                                }),
                                                U &&
                                                  (0, z.BX)(f.View, {
                                                    className:
                                                      "account-help-grab",
                                                    id: "ADAP",
                                                    onClick:
                                                      this.jumpAccountHelpList,
                                                    children: [
                                                      (0, z.tZ)(f.Image, {
                                                        src: u
                                                          ? "https://images3.c-ctrip.com/ztrip/train.song/grab/bqxqy/icon_hybq_ty@3x.png"
                                                          : "https://images3.c-ctrip.com/ztrip/train.song/grab/bqxqy/icon_hybq@3x.png",
                                                        className: "icon-help",
                                                      }),
                                                      (0, z.tZ)(f.View, {
                                                        className: "title",
                                                        children: U.title,
                                                      }),
                                                      (0, z.tZ)(f.View, {
                                                        className:
                                                          "iconfont ifont-arr",
                                                      }),
                                                    ],
                                                  }),
                                                !!this.isUseGrabOrderListV2 &&
                                                  (0, z.tZ)(te, {
                                                    clickTrainCard:
                                                      this.clickTrainCardV2,
                                                    content: b,
                                                    orderDescHideList: de,
                                                    navigateTo: this.navigateTo,
                                                    id: "ADAQ",
                                                    onButtonClick:
                                                      this.onButtonClick,
                                                    doDeleteTrainGrabOrder:
                                                      this
                                                        .doDeleteTrainGrabOrder,
                                                  }),
                                                !this.isUseGrabOrderListV2 &&
                                                  N.map(function (e, t) {
                                                    var i, a, r, n, o, s;
                                                    return (0, z.tZ)(
                                                      f.View,
                                                      {
                                                        className:
                                                          "train-qp-item " +
                                                          (e.isTouchMove
                                                            ? "moved"
                                                            : ""),
                                                        "data-index": t,
                                                        "data-type": "delete",
                                                        id: "ADAR",
                                                        onLongPress:
                                                          l.onDeleteTrainGrabOrder,
                                                        children: (0, z.tZ)(
                                                          f.View,
                                                          {
                                                            className:
                                                              "item " +
                                                              (400 ===
                                                                e
                                                                  .orderStatusInfo
                                                                  .code ||
                                                              500 ===
                                                                e
                                                                  .orderStatusInfo
                                                                  .code
                                                                ? "disabled"
                                                                : ""),
                                                            id: "ADAS",
                                                            onClick:
                                                              l.clickTrainCard.bind(
                                                                l
                                                              ),
                                                            "data-index": t,
                                                            "data-ordernumber":
                                                              e.orderNumber,
                                                            "data-hasticket":
                                                              e.hasTicket,
                                                            "data-ubt-key":
                                                              "wx_grablist_clickTrainCard",
                                                            children:
                                                              200 !==
                                                              e.orderStatusInfo
                                                                .code
                                                                ? (0, z.BX)(
                                                                    f.View,
                                                                    {
                                                                      className:
                                                                        "common-order",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          z.BX)(
                                                                            f.View,
                                                                            {
                                                                              className:
                                                                                "tit",
                                                                              children:
                                                                                [
                                                                                  (0,
                                                                                  z.tZ)(
                                                                                    f.Text,
                                                                                    {
                                                                                      className:
                                                                                        "strong",
                                                                                      children:
                                                                                        e.fromStationName +
                                                                                        "-" +
                                                                                        e.toStationName,
                                                                                    }
                                                                                  ),
                                                                                  e.orderTags &&
                                                                                    e
                                                                                      .orderTags
                                                                                      .length >
                                                                                      0 &&
                                                                                    (0,
                                                                                    z.BX)(
                                                                                      g.Fragment,
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            1 ===
                                                                                              (null ===
                                                                                                (i =
                                                                                                  e
                                                                                                    .orderTags[0]) ||
                                                                                              void 0 ===
                                                                                                i
                                                                                                ? void 0
                                                                                                : i.tagType) &&
                                                                                              (0,
                                                                                              z.tZ)(
                                                                                                f.View,
                                                                                                {
                                                                                                  className:
                                                                                                    "train-tag",
                                                                                                  children:
                                                                                                    e
                                                                                                      .orderTags[0]
                                                                                                      .tagName,
                                                                                                }
                                                                                              ),
                                                                                            2 ===
                                                                                              (null ===
                                                                                                (a =
                                                                                                  e
                                                                                                    .orderTags[0]) ||
                                                                                              void 0 ===
                                                                                                a
                                                                                                ? void 0
                                                                                                : a.tagType) &&
                                                                                              (0,
                                                                                              z.tZ)(
                                                                                                f.View,
                                                                                                {
                                                                                                  className:
                                                                                                    "optimized-tag",
                                                                                                  children:
                                                                                                    e
                                                                                                      .orderTags[0]
                                                                                                      .tagName,
                                                                                                }
                                                                                              ),
                                                                                            3 ===
                                                                                              (null ===
                                                                                                (r =
                                                                                                  e
                                                                                                    .orderTags[0]) ||
                                                                                              void 0 ===
                                                                                                r
                                                                                                ? void 0
                                                                                                : r.tagType) &&
                                                                                              (0,
                                                                                              z.tZ)(
                                                                                                f.View,
                                                                                                {
                                                                                                  className:
                                                                                                    "tag ".concat(
                                                                                                      -1 !=
                                                                                                        [
                                                                                                          208,
                                                                                                          301,
                                                                                                        ].indexOf(
                                                                                                          e
                                                                                                            .orderStatusInfo
                                                                                                            .code
                                                                                                        )
                                                                                                        ? "alternate-active"
                                                                                                        : ""
                                                                                                    ),
                                                                                                  children:
                                                                                                    e
                                                                                                      .orderTags[0]
                                                                                                      .tagName,
                                                                                                }
                                                                                              ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  [
                                                                                    100,
                                                                                    101,
                                                                                  ].includes(
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code
                                                                                  ) &&
                                                                                    (0,
                                                                                    z.BX)(
                                                                                      f.View,
                                                                                      {
                                                                                        className:
                                                                                          "fr flex-center",
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Icon,
                                                                                              {
                                                                                                className:
                                                                                                  "icon-warn",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "tred",
                                                                                                children:
                                                                                                  "待支付",
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  300 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code &&
                                                                                    (0,
                                                                                    z.BX)(
                                                                                      f.View,
                                                                                      {
                                                                                        className:
                                                                                          "fr flex-center",
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Icon,
                                                                                              {
                                                                                                className:
                                                                                                  "icon-success",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "tgreen",
                                                                                                children:
                                                                                                  "抢票成功",
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  201 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code &&
                                                                                    (0,
                                                                                    z.BX)(
                                                                                      f.View,
                                                                                      {
                                                                                        className:
                                                                                          "fr flex-center",
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Icon,
                                                                                              {
                                                                                                className:
                                                                                                  "icon-wait",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "tblue",
                                                                                                children:
                                                                                                  "已预约",
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  500 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code &&
                                                                                    (0,
                                                                                    z.tZ)(
                                                                                      f.View,
                                                                                      {
                                                                                        className:
                                                                                          "fr status",
                                                                                        children:
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            f.Text,
                                                                                            {
                                                                                              className:
                                                                                                "tgrey",
                                                                                              children:
                                                                                                "已取消",
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  400 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code &&
                                                                                    (0,
                                                                                    z.tZ)(
                                                                                      f.View,
                                                                                      {
                                                                                        className:
                                                                                          "fr status",
                                                                                        children:
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            f.Text,
                                                                                            {
                                                                                              className:
                                                                                                "tgrey",
                                                                                              children:
                                                                                                "抢票失败",
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  (601 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code ||
                                                                                    600 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code ||
                                                                                    203 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code ||
                                                                                    204 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code) &&
                                                                                    (0,
                                                                                    z.BX)(
                                                                                      f.View,
                                                                                      {
                                                                                        className:
                                                                                          "fr flex-center",
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Icon,
                                                                                              {
                                                                                                className:
                                                                                                  "icon-warn",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "tred",
                                                                                                children:
                                                                                                  "车票待确认",
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  700 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code &&
                                                                                    (0,
                                                                                    z.BX)(
                                                                                      f.View,
                                                                                      {
                                                                                        className:
                                                                                          "fr flex-center",
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Icon,
                                                                                              {
                                                                                                className:
                                                                                                  "icon-warn",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              w.ZtRichText,
                                                                                              {
                                                                                                nodes:
                                                                                                  e
                                                                                                    .orderStatusInfo
                                                                                                    .name,
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  (205 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code ||
                                                                                    206 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code ||
                                                                                    207 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code) &&
                                                                                    (0,
                                                                                    z.BX)(
                                                                                      f.View,
                                                                                      {
                                                                                        className:
                                                                                          "fr flex-center",
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Icon,
                                                                                              {
                                                                                                className:
                                                                                                  "icon-warn",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              w.ZtRichText,
                                                                                              {
                                                                                                className:
                                                                                                  "tred",
                                                                                                nodes:
                                                                                                  e
                                                                                                    .orderStatusInfo
                                                                                                    .name,
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  208 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code &&
                                                                                    (0,
                                                                                    z.BX)(
                                                                                      f.View,
                                                                                      {
                                                                                        className:
                                                                                          "fr flex-center",
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Icon,
                                                                                              {
                                                                                                className:
                                                                                                  "icon-wait",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              w.ZtRichText,
                                                                                              {
                                                                                                nodes:
                                                                                                  e
                                                                                                    .orderStatusInfo
                                                                                                    .name,
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  209 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code &&
                                                                                    (0,
                                                                                    z.tZ)(
                                                                                      f.View,
                                                                                      {
                                                                                        className:
                                                                                          "fr status",
                                                                                        children:
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            w.ZtRichText,
                                                                                            {
                                                                                              nodes:
                                                                                                e
                                                                                                  .orderStatusInfo
                                                                                                  .name,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  301 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code &&
                                                                                    (0,
                                                                                    z.tZ)(
                                                                                      f.View,
                                                                                      {
                                                                                        className:
                                                                                          "fr status",
                                                                                        children:
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            w.ZtRichText,
                                                                                            {
                                                                                              nodes:
                                                                                                e
                                                                                                  .orderStatusInfo
                                                                                                  .name,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                          e.orderDetailDesc &&
                                                                            (0,
                                                                            z.tZ)(
                                                                              f.View,
                                                                              {
                                                                                className:
                                                                                  "desc",
                                                                                children:
                                                                                  e.orderDetailDesc,
                                                                              }
                                                                            ),
                                                                          (0,
                                                                          z.BX)(
                                                                            f.View,
                                                                            {
                                                                              className:
                                                                                "dd",
                                                                              children:
                                                                                [
                                                                                  [
                                                                                    100,
                                                                                    101,
                                                                                  ].includes(
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code
                                                                                  ) &&
                                                                                    (0,
                                                                                    z.BX)(
                                                                                      f.Block,
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.View,
                                                                                              {
                                                                                                className:
                                                                                                  "txt",
                                                                                                children:
                                                                                                  (0,
                                                                                                  z.tZ)(
                                                                                                    w.ZtRichText,
                                                                                                    {
                                                                                                      space:
                                                                                                        "nbsp",
                                                                                                      nodes:
                                                                                                        e
                                                                                                          .orderStatusInfo
                                                                                                          .desc ||
                                                                                                        "",
                                                                                                    }
                                                                                                  ),
                                                                                              }
                                                                                            ),
                                                                                            e.buttonName &&
                                                                                              (0,
                                                                                              z.tZ)(
                                                                                                f.Button,
                                                                                                {
                                                                                                  className:
                                                                                                    "btn-red",
                                                                                                  id: "ADAT",
                                                                                                  onClick:
                                                                                                    function () {
                                                                                                      l.gotoPay(
                                                                                                        e
                                                                                                      );
                                                                                                    },
                                                                                                  "data-ubt-key":
                                                                                                    "wx_grablist_gotoPay",
                                                                                                  children:
                                                                                                    e.buttonName,
                                                                                                }
                                                                                              ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  300 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code &&
                                                                                    (0,
                                                                                    z.tZ)(
                                                                                      f.Block,
                                                                                      {
                                                                                        children:
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            f.View,
                                                                                            {
                                                                                              className:
                                                                                                "txt",
                                                                                              children:
                                                                                                (0,
                                                                                                z.tZ)(
                                                                                                  w.ZtRichText,
                                                                                                  {
                                                                                                    space:
                                                                                                      "nbsp",
                                                                                                    nodes:
                                                                                                      e
                                                                                                        .orderStatusInfo
                                                                                                        .desc ||
                                                                                                      "",
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  201 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code &&
                                                                                    (0,
                                                                                    z.BX)(
                                                                                      f.Block,
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.View,
                                                                                              {
                                                                                                className:
                                                                                                  "txt",
                                                                                                children:
                                                                                                  (0,
                                                                                                  z.tZ)(
                                                                                                    w.ZtRichText,
                                                                                                    {
                                                                                                      space:
                                                                                                        "nbsp",
                                                                                                      nodes:
                                                                                                        e
                                                                                                          .orderStatusInfo
                                                                                                          .desc ||
                                                                                                        "",
                                                                                                    }
                                                                                                  ),
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Button,
                                                                                              {
                                                                                                className:
                                                                                                  "btn-pre-detail",
                                                                                                children:
                                                                                                  "查看详情",
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  (601 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code ||
                                                                                    600 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code ||
                                                                                    203 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code ||
                                                                                    204 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code ||
                                                                                    205 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code ||
                                                                                    206 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code ||
                                                                                    207 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code ||
                                                                                    700 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code) &&
                                                                                    (0,
                                                                                    z.BX)(
                                                                                      f.Block,
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.View,
                                                                                              {
                                                                                                className:
                                                                                                  "txt",
                                                                                                children:
                                                                                                  (0,
                                                                                                  z.tZ)(
                                                                                                    w.ZtRichText,
                                                                                                    {
                                                                                                      nodes:
                                                                                                        e
                                                                                                          .orderStatusInfo
                                                                                                          .desc ||
                                                                                                        "",
                                                                                                    }
                                                                                                  ),
                                                                                              }
                                                                                            ),
                                                                                            e.buttonName &&
                                                                                              (0,
                                                                                              z.tZ)(
                                                                                                f.Button,
                                                                                                {
                                                                                                  className:
                                                                                                    "btn-red",
                                                                                                  id: "ADAU",
                                                                                                  onClick:
                                                                                                    function (
                                                                                                      e
                                                                                                    ) {
                                                                                                      e.stopPropagation(),
                                                                                                        l.clickTrainCard(
                                                                                                          e
                                                                                                        );
                                                                                                    },
                                                                                                  "data-index":
                                                                                                    t,
                                                                                                  "data-ordernumber":
                                                                                                    e.orderNumber,
                                                                                                  "data-ubt-key":
                                                                                                    600 ===
                                                                                                    e
                                                                                                      .orderStatusInfo
                                                                                                      .code
                                                                                                      ? "wx_grablist_goToSmartTicket"
                                                                                                      : 203 ===
                                                                                                        e
                                                                                                          .orderStatusInfo
                                                                                                          .code
                                                                                                      ? "wx_grablist_goToSmartSplitTicket"
                                                                                                      : "wx_grablist_goToSmartRSTicket",
                                                                                                  children:
                                                                                                    e.buttonName,
                                                                                                }
                                                                                              ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  (500 ===
                                                                                    e
                                                                                      .orderStatusInfo
                                                                                      .code ||
                                                                                    400 ===
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code) &&
                                                                                    (0,
                                                                                    z.BX)(
                                                                                      f.Block,
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.View,
                                                                                              {
                                                                                                className:
                                                                                                  "txt",
                                                                                                children:
                                                                                                  (0,
                                                                                                  z.tZ)(
                                                                                                    w.ZtRichText,
                                                                                                    {
                                                                                                      nodes:
                                                                                                        e
                                                                                                          .orderStatusInfo
                                                                                                          .desc ||
                                                                                                        "",
                                                                                                    }
                                                                                                  ),
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Button,
                                                                                              {
                                                                                                className:
                                                                                                  "btn-again-grab",
                                                                                                id: "ADAV",
                                                                                                onClick:
                                                                                                  function (
                                                                                                    t
                                                                                                  ) {
                                                                                                    return l.againGrab(
                                                                                                      e,
                                                                                                      t
                                                                                                    );
                                                                                                  },
                                                                                                children:
                                                                                                  "重新抢票",
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  -1 !=
                                                                                    [
                                                                                      208,
                                                                                      209,
                                                                                      301,
                                                                                    ].indexOf(
                                                                                      e
                                                                                        .orderStatusInfo
                                                                                        .code
                                                                                    ) &&
                                                                                    (0,
                                                                                    z.tZ)(
                                                                                      g.Fragment,
                                                                                      {
                                                                                        children:
                                                                                          (0,
                                                                                          z.BX)(
                                                                                            f.View,
                                                                                            {
                                                                                              className:
                                                                                                "txt",
                                                                                              children:
                                                                                                [
                                                                                                  (0,
                                                                                                  z.tZ)(
                                                                                                    w.ZtRichText,
                                                                                                    {
                                                                                                      nodes:
                                                                                                        e
                                                                                                          .orderStatusInfo
                                                                                                          .desc ||
                                                                                                        "",
                                                                                                    }
                                                                                                  ),
                                                                                                  e.buttonName &&
                                                                                                    (0,
                                                                                                    z.tZ)(
                                                                                                      f.Button,
                                                                                                      {
                                                                                                        className:
                                                                                                          "btn-gray",
                                                                                                        id: "ADAW",
                                                                                                        onClick:
                                                                                                          function (
                                                                                                            t
                                                                                                          ) {
                                                                                                            t.stopPropagation(),
                                                                                                              l.handleAlternateOrder(
                                                                                                                e
                                                                                                              );
                                                                                                          },
                                                                                                        children:
                                                                                                          e.buttonName,
                                                                                                      }
                                                                                                    ),
                                                                                                ],
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  )
                                                                : (0, z.BX)(
                                                                    f.View,
                                                                    {
                                                                      className:
                                                                        "special-order ".concat(
                                                                          l.getTrainCardHeaderClassName(
                                                                            e
                                                                          )
                                                                        ),
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          z.BX)(
                                                                            f.View,
                                                                            {
                                                                              className:
                                                                                "tit",
                                                                              children:
                                                                                [
                                                                                  (0,
                                                                                  z.tZ)(
                                                                                    f.View,
                                                                                    {
                                                                                      className:
                                                                                        "strong",
                                                                                      children:
                                                                                        e.fromStationName +
                                                                                        "-" +
                                                                                        e.toStationName,
                                                                                    }
                                                                                  ),
                                                                                  e.orderTags &&
                                                                                    e
                                                                                      .orderTags
                                                                                      .length >
                                                                                      0 &&
                                                                                    (0,
                                                                                    z.tZ)(
                                                                                      f.View,
                                                                                      {
                                                                                        className:
                                                                                          1 ===
                                                                                          (null ===
                                                                                            (n =
                                                                                              e
                                                                                                .orderTags[0]) ||
                                                                                          void 0 ===
                                                                                            n
                                                                                            ? void 0
                                                                                            : n.tagType)
                                                                                            ? "train-tag"
                                                                                            : "optimized-tag",
                                                                                        children:
                                                                                          e
                                                                                            .orderTags[0]
                                                                                            .tagName,
                                                                                      }
                                                                                    ),
                                                                                  (0,
                                                                                  z.BX)(
                                                                                    f.View,
                                                                                    {
                                                                                      className:
                                                                                        "fr flex-center loading " +
                                                                                        (u
                                                                                          ? "ty "
                                                                                          : "zx ") +
                                                                                        (null !=
                                                                                          e &&
                                                                                        e.isVip
                                                                                          ? "vip"
                                                                                          : ""),
                                                                                      children:
                                                                                        [
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            f.View,
                                                                                            {
                                                                                              className:
                                                                                                "icon-loading " +
                                                                                                (u
                                                                                                  ? "ty "
                                                                                                  : "zx ") +
                                                                                                (null !=
                                                                                                  e &&
                                                                                                e.isVip
                                                                                                  ? "vip "
                                                                                                  : " ") +
                                                                                                l.getGarbRotateSpeed(
                                                                                                  e
                                                                                                ),
                                                                                            }
                                                                                          ),
                                                                                          e.orderStatusInfo &&
                                                                                          e
                                                                                            .orderStatusInfo
                                                                                            .name
                                                                                            ? (0,
                                                                                              z.tZ)(
                                                                                                w.ZtRichText,
                                                                                                {
                                                                                                  nodes:
                                                                                                    l.coverTextStyle(
                                                                                                      e
                                                                                                        .orderStatusInfo
                                                                                                        .name,
                                                                                                      "color:;font-weight:bold;"
                                                                                                    ),
                                                                                                }
                                                                                              )
                                                                                            : "抢票中",
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          z.BX)(
                                                                            f.View,
                                                                            {
                                                                              className:
                                                                                "order-detail-card",
                                                                              children:
                                                                                [
                                                                                  (0,
                                                                                  z.BX)(
                                                                                    f.View,
                                                                                    {
                                                                                      className:
                                                                                        "order-detail-item first",
                                                                                      children:
                                                                                        [
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            f.View,
                                                                                            {
                                                                                              className:
                                                                                                "label",
                                                                                              children:
                                                                                                "日期",
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            f.View,
                                                                                            {
                                                                                              className:
                                                                                                "value",
                                                                                              children:
                                                                                                e.departureDate,
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  z.BX)(
                                                                                    f.View,
                                                                                    {
                                                                                      className:
                                                                                        "order-detail-item second",
                                                                                      children:
                                                                                        [
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            f.View,
                                                                                            {
                                                                                              className:
                                                                                                "label",
                                                                                              children:
                                                                                                "座席",
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            f.View,
                                                                                            {
                                                                                              className:
                                                                                                "value",
                                                                                              children:
                                                                                                e.seatName,
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  z.BX)(
                                                                                    f.View,
                                                                                    {
                                                                                      className:
                                                                                        "order-detail-item",
                                                                                      children:
                                                                                        [
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            f.View,
                                                                                            {
                                                                                              className:
                                                                                                "label",
                                                                                              children:
                                                                                                "车次",
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            f.View,
                                                                                            {
                                                                                              className:
                                                                                                "value",
                                                                                              children:
                                                                                                e.departureTime +
                                                                                                " " +
                                                                                                e.trainNum,
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  z.BX)(
                                                                                    f.View,
                                                                                    {
                                                                                      className:
                                                                                        "order-detail-item",
                                                                                      children:
                                                                                        [
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            f.View,
                                                                                            {
                                                                                              className:
                                                                                                "label",
                                                                                              children:
                                                                                                "乘客",
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          z.tZ)(
                                                                                            f.View,
                                                                                            {
                                                                                              className:
                                                                                                "value",
                                                                                              children:
                                                                                                e.passengers
                                                                                                  .map(
                                                                                                    function (
                                                                                                      e
                                                                                                    ) {
                                                                                                      return e.passengerName;
                                                                                                    }
                                                                                                  )
                                                                                                  .join(
                                                                                                    "/"
                                                                                                  ),
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          z.BX)(
                                                                            f.View,
                                                                            {
                                                                              className:
                                                                                "order-btn-box",
                                                                              children:
                                                                                [
                                                                                  (0,
                                                                                  z.tZ)(
                                                                                    f.Button,
                                                                                    {
                                                                                      className:
                                                                                        "btn btn-left",
                                                                                      id: "ADAX",
                                                                                      onClick:
                                                                                        function (
                                                                                          t
                                                                                        ) {
                                                                                          t.stopPropagation(),
                                                                                            l.addMoreChoose(
                                                                                              e
                                                                                            );
                                                                                        },
                                                                                      children:
                                                                                        ((null ==
                                                                                        e
                                                                                          ? void 0
                                                                                          : e.buttonList) &&
                                                                                          (null ==
                                                                                            e ||
                                                                                          null ===
                                                                                            (o =
                                                                                              e
                                                                                                .buttonList[0]) ||
                                                                                          void 0 ===
                                                                                            o
                                                                                            ? void 0
                                                                                            : o.buttonText)) ||
                                                                                        "添加备选",
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  z.tZ)(
                                                                                    f.Button,
                                                                                    {
                                                                                      className:
                                                                                        "btn btn-right",
                                                                                      id: "ADAY",
                                                                                      onClick:
                                                                                        function (
                                                                                          t
                                                                                        ) {
                                                                                          t.stopPropagation(),
                                                                                            l.handleOrderOrAccelerate(
                                                                                              e
                                                                                            );
                                                                                        },
                                                                                      children:
                                                                                        ((null ==
                                                                                        e
                                                                                          ? void 0
                                                                                          : e.buttonList) &&
                                                                                          (null ==
                                                                                            e ||
                                                                                          null ===
                                                                                            (s =
                                                                                              e
                                                                                                .buttonList[1]) ||
                                                                                          void 0 ===
                                                                                            s
                                                                                            ? void 0
                                                                                            : s.buttonText)) ||
                                                                                        "查看订单",
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                          }
                                                        ),
                                                      },
                                                      String(t)
                                                    );
                                                  }),
                                                !E &&
                                                  (0, z.tZ)(f.View, {
                                                    className: "grab-tip",
                                                    children:
                                                      "目前仅展示3个月抢票记录",
                                                  }),
                                              ],
                                            }),
                                          v &&
                                            (0, z.BX)(f.View, {
                                              className: "train-grablist-none",
                                              children: [
                                                (0, z.tZ)(j, {
                                                  bigScreenInfo: h,
                                                  rollGrabInfoList: m,
                                                }),
                                                (0, z.BX)(f.View, {
                                                  className: "grab-info-show",
                                                  children: [
                                                    (0, z.tZ)(f.Image, {
                                                      src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/qp/img_zyqp_x@3x.png",
                                                      className: "img",
                                                    }),
                                                    (0, z.tZ)(f.View, {
                                                      className: "tit",
                                                      children:
                                                        (null == ie
                                                          ? void 0
                                                          : ie.title) ||
                                                        (u ? "铁友" : "智行") +
                                                          "·专业抢票",
                                                    }),
                                                    (0, z.tZ)(f.Swiper, {
                                                      className: "txt-box",
                                                      autoplay: "true",
                                                      vertical: "true",
                                                      interval: "3000",
                                                      circular: "true",
                                                      children:
                                                        null == ee ||
                                                        null ===
                                                          (n =
                                                            ee.nonOrderTexts) ||
                                                        void 0 === n
                                                          ? void 0
                                                          : n.map(function (
                                                              e,
                                                              t
                                                            ) {
                                                              return (0, z.tZ)(
                                                                f.SwiperItem,
                                                                {
                                                                  className:
                                                                    "txt",
                                                                  children:
                                                                    e || "",
                                                                },
                                                                t
                                                              );
                                                            }),
                                                    }),
                                                    (0, z.tZ)(f.View, {
                                                      className:
                                                        "grab-info-show-btn-box",
                                                      children: (0, z.tZ)(
                                                        f.Button,
                                                        {
                                                          className:
                                                            "grab-info-show-btn-add " +
                                                            (u ? "ty" : "zx"),
                                                          id: "ADAZ",
                                                          onClick: function () {
                                                            l.newUbtTrace(
                                                              203730,
                                                              {
                                                                bizKey:
                                                                  "z_list_addgrab_button_click",
                                                              }
                                                            ),
                                                              l.gotoTrainGrabSetPage();
                                                          },
                                                          "data-ubt-key":
                                                            "wx_grablist_gotoTrainGrabSetPage",
                                                          children:
                                                            (null == ee
                                                              ? void 0
                                                              : ee.addGrabText) ||
                                                            "添加抢票",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, z.tZ)(F, {
                                                  activities: q,
                                                  leftActivities: K,
                                                  alternateEntrances: W,
                                                  navigateTo: this.navigateTo,
                                                  ubtTrace: this.ubtTrace,
                                                }),
                                                U &&
                                                  (0, z.BX)(f.View, {
                                                    className:
                                                      "account-help-grab",
                                                    id: "ADAa",
                                                    onClick:
                                                      this.jumpAccountHelpList,
                                                    children: [
                                                      (0, z.tZ)(f.Image, {
                                                        src: u
                                                          ? "https://images3.c-ctrip.com/ztrip/train.song/grab/bqxqy/icon_hybq_ty@3x.png"
                                                          : "https://images3.c-ctrip.com/ztrip/train.song/grab/bqxqy/icon_hybq@3x.png",
                                                        className: "icon-help",
                                                      }),
                                                      (0, z.tZ)(f.View, {
                                                        className: "title",
                                                        children: U.title,
                                                      }),
                                                      (0, z.tZ)(f.View, {
                                                        className:
                                                          "iconfont ifont-arr",
                                                      }),
                                                    ],
                                                  }),
                                                $ &&
                                                  (0, z.BX)(f.View, {
                                                    className: "instructions",
                                                    children: [
                                                      (0, z.tZ)(f.View, {
                                                        className: "title",
                                                        children:
                                                          "为什么选择我们",
                                                      }),
                                                      (0, z.tZ)(f.View, {
                                                        className: "content",
                                                        children: $.map(
                                                          function (e) {
                                                            return (0, z.BX)(
                                                              f.View,
                                                              {
                                                                className:
                                                                  "item",
                                                                children: [
                                                                  (0, z.tZ)(
                                                                    f.Image,
                                                                    {
                                                                      src: e.icon,
                                                                      className:
                                                                        "icon-instruction",
                                                                    }
                                                                  ),
                                                                  (0, z.tZ)(
                                                                    f.View,
                                                                    {
                                                                      className:
                                                                        "instruction-name",
                                                                      children:
                                                                        e.name,
                                                                    }
                                                                  ),
                                                                  (0, z.tZ)(
                                                                    f.View,
                                                                    {
                                                                      className:
                                                                        "instruction-description",
                                                                      children:
                                                                        e.description,
                                                                    }
                                                                  ),
                                                                ],
                                                              },
                                                              e.name
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                (0, z.tZ)(f.View, {
                                                  className: "grab-blank",
                                                }),
                                              ],
                                            }),
                                          Z &&
                                            (0, z.tZ)(J.Z, {
                                              data: u,
                                              reload: this.reload,
                                            }),
                                        ],
                                      }),
                                    "flightOrder" === p &&
                                      (0, z.BX)(f.View, {
                                        className: "flight jiankong-box",
                                        style: he,
                                        children: [
                                          x &&
                                            (0, z.BX)(f.View, {
                                              className: "grablist-none",
                                              children: [
                                                (0, z.tZ)(f.Image, {
                                                  src:
                                                    "https://pic.c-ctrip.com/train/zt/wechat/monitor-flight-none-" +
                                                    (u ? "ty" : "zx") +
                                                    ".png",
                                                  className: "img",
                                                }),
                                                (0, z.tZ)(f.View, {
                                                  className: "tit",
                                                  children: "智能低价监控",
                                                }),
                                                (0, z.tZ)(f.View, {
                                                  className: "txt",
                                                  children:
                                                    "低价提醒秒抢，省时省钱省心",
                                                }),
                                                (0, z.tZ)(f.View, {
                                                  className: "btn-box",
                                                  children: (0, z.tZ)(
                                                    f.Button,
                                                    {
                                                      className:
                                                        "btn-add " +
                                                        (u ? "ty" : "zx"),
                                                      id: "ADAb",
                                                      onClick:
                                                        this.goToMonitorEdit.bind(
                                                          this
                                                        ),
                                                      children: "添加监控",
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          S &&
                                            S[0] &&
                                            (0, z.BX)(f.View, {
                                              className: "flight-jk-list",
                                              children: [
                                                (0, z.tZ)(f.View, {
                                                  className: "jk-strategy",
                                                  id: "ADAc",
                                                  onClick:
                                                    this.toStrategy.bind(this),
                                                  children: (0, z.BX)(f.View, {
                                                    className: "strategy-hd",
                                                    children: [
                                                      (0, z.tZ)(f.Image, {
                                                        src: "https://pic.c-ctrip.com/train/zt/wechat/img-jiankong.png",
                                                        className:
                                                          "icon-strategy",
                                                      }),
                                                      (0, z.tZ)(f.View, {
                                                        className:
                                                          "swiper-block",
                                                        children: (0, z.BX)(
                                                          f.Swiper,
                                                          {
                                                            className: "swiper",
                                                            autoplay: "true",
                                                            vertical: "true",
                                                            interval: "4000",
                                                            circular: "true",
                                                            children: [
                                                              (0, z.tZ)(
                                                                f.SwiperItem,
                                                                {
                                                                  className:
                                                                    "item",
                                                                  onTouchMove:
                                                                    this.noop,
                                                                  children:
                                                                    "多日期一起抢，成功率更高！",
                                                                }
                                                              ),
                                                              (0, z.tZ)(
                                                                f.SwiperItem,
                                                                {
                                                                  className:
                                                                    "item",
                                                                  onTouchMove:
                                                                    this.noop,
                                                                  children:
                                                                    "筛选条件，更容易抢到心意低价！",
                                                                }
                                                              ),
                                                              (0, z.tZ)(
                                                                f.SwiperItem,
                                                                {
                                                                  className:
                                                                    "item",
                                                                  onTouchMove:
                                                                    this.noop,
                                                                  children:
                                                                    "推荐价格预测，成功率更高！",
                                                                }
                                                              ),
                                                              L.default
                                                                .isWechat &&
                                                                (0, z.tZ)(
                                                                  f.SwiperItem,
                                                                  {
                                                                    className:
                                                                      "item",
                                                                    onTouchMove:
                                                                      this.noop,
                                                                    children:
                                                                      "关注公众号，获取第一手特价信息！",
                                                                  }
                                                                ),
                                                            ],
                                                          }
                                                        ),
                                                      }),
                                                      (0, z.tZ)(f.View, {
                                                        className:
                                                          "iconfont ifont-arr",
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                (0, z.tZ)(f.View, {
                                                  className: "flight-monitor",
                                                  children: S.map(function (
                                                    e,
                                                    t
                                                  ) {
                                                    return (0, z.tZ)(
                                                      Q,
                                                      {
                                                        order: e,
                                                        index: t,
                                                        clickMonitorItem:
                                                          l.clickMonitorItem.bind(
                                                            l
                                                          ),
                                                        handleShareAction:
                                                          l.handleShareAction.bind(
                                                            l
                                                          ),
                                                        deleteMonitorOrder:
                                                          l.deleteMonitorOrder.bind(
                                                            l
                                                          ),
                                                        onSwipe:
                                                          l.onSwipe.bind(l),
                                                      },
                                                      t
                                                    );
                                                  }),
                                                }),
                                                S &&
                                                  S[0] &&
                                                  (0, z.tZ)(f.View, {
                                                    className: "monitor-tip",
                                                    children: "←左滑可取消监控",
                                                  }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    "hotelOrder" === p &&
                                      (0, z.BX)(f.View, {
                                        className: "hotel jiankong-box",
                                        style: he,
                                        children: [
                                          (0, z.BX)(f.View, {
                                            className: "grablist-none",
                                            children: [
                                              ne &&
                                                oe &&
                                                oe.length > 0 &&
                                                (0, z.BX)(f.View, {
                                                  className: "title-wrap",
                                                  children: [
                                                    (0, z.BX)(f.View, {
                                                      className: "title",
                                                      children: [
                                                        "成功为",
                                                        (0, z.tZ)(f.Text, {
                                                          className:
                                                            "person " +
                                                            (u ? "ty" : "zx"),
                                                          children: ne,
                                                        }),
                                                        "人监控低价酒店",
                                                      ],
                                                    }),
                                                    (0, z.tZ)(f.View, {
                                                      className: "desc",
                                                      children: (0, z.tZ)(
                                                        f.Swiper,
                                                        {
                                                          className:
                                                            "info-swiper",
                                                          autoplay: !0,
                                                          vertical: !0,
                                                          children: oe.map(
                                                            function (e, t) {
                                                              return (0, z.BX)(
                                                                f.SwiperItem,
                                                                {
                                                                  children: [
                                                                    (0, z.tZ)(
                                                                      f.Image,
                                                                      {
                                                                        className:
                                                                          "icon",
                                                                        src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/jiudianjiankong/zx_touxiang1@3x.png",
                                                                      }
                                                                    ),
                                                                    (0, z.tZ)(
                                                                      f.View,
                                                                      {
                                                                        className:
                                                                          "txt",
                                                                        children:
                                                                          e,
                                                                      }
                                                                    ),
                                                                  ],
                                                                },
                                                                t
                                                              );
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              I &&
                                                I.length > 0 &&
                                                (0, z.tZ)(f.View, {
                                                  className: "jk-strategy",
                                                  children: (0, z.BX)(f.View, {
                                                    className: "strategy-hd",
                                                    children: [
                                                      (0, z.tZ)(f.Image, {
                                                        src: "https://pic.c-ctrip.com/train/zt/wechat/img-jiankong.png",
                                                        className:
                                                          "icon-strategy",
                                                      }),
                                                      (0, z.tZ)(f.View, {
                                                        className:
                                                          "swiper-block",
                                                        id: "ADAd",
                                                        onClick:
                                                          this.goToLowerpriceremind.bind(
                                                            this
                                                          ),
                                                        children: (0, z.tZ)(
                                                          f.Swiper,
                                                          {
                                                            className: "swiper",
                                                            autoplay: "true",
                                                            vertical: "true",
                                                            interval: "4000",
                                                            circular: "true",
                                                            children: I.map(
                                                              function (e) {
                                                                return (0,
                                                                z.tZ)(
                                                                  f.SwiperItem,
                                                                  {
                                                                    className:
                                                                      "item",
                                                                    onTouchMove:
                                                                      l.noop,
                                                                    children: e,
                                                                  },
                                                                  "index"
                                                                );
                                                              }
                                                            ),
                                                          }
                                                        ),
                                                      }),
                                                      (0, z.tZ)(f.View, {
                                                        className:
                                                          "iconfont ifont-arr",
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              0 === y.length &&
                                                (!V || !V.hotelPriceMonitors) &&
                                                (0, z.BX)(f.View, {
                                                  className: "none-wrap",
                                                  children: [
                                                    (0, z.tZ)(f.Image, {
                                                      className: "img",
                                                      mode: "widthFix",
                                                      src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/jiudianjiankong/jiankong_jiudianjiankong@3x.png",
                                                    }),
                                                    (0, z.tZ)(f.View, {
                                                      className: "tit",
                                                      children: "酒店·降价监控",
                                                    }),
                                                    (0, z.tZ)(f.View, {
                                                      className: "txt",
                                                      children:
                                                        "超值酒店不错过，每单只花最低价",
                                                    }),
                                                    (0, z.BX)(f.View, {
                                                      className: "btn-box",
                                                      children: [
                                                        (0, z.tZ)(f.Button, {
                                                          className:
                                                            "btn-line " +
                                                            (u ? "ty" : "zx"),
                                                          id: "ADAe",
                                                          onClick:
                                                            this.goHotelHomePage.bind(
                                                              this
                                                            ),
                                                          children: "预订酒店",
                                                        }),
                                                        (0, z.tZ)(f.Button, {
                                                          className:
                                                            "btn-add " +
                                                            (u ? "ty" : "zx"),
                                                          id: "ADAf",
                                                          onClick:
                                                            this.goToHotelMonitorEdit.bind(
                                                              this
                                                            ),
                                                          children: "添加监控",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          (0, z.tZ)(f.View, {
                                            className: "hotel-jk-list",
                                            children: (0, z.BX)(f.View, {
                                              className: "hotel-monitor",
                                              children: [
                                                y.map(function (e, t) {
                                                  return (0, z.BX)(
                                                    f.View,
                                                    {
                                                      className:
                                                        "hotel-monitor-item " +
                                                        (u ? "ty" : "zx"),
                                                      children: [
                                                        (0, z.tZ)(f.View, {
                                                          className:
                                                            "monitor-tag",
                                                          children:
                                                            "区域监控任务",
                                                        }),
                                                        (0, z.BX)(f.View, {
                                                          className:
                                                            "hotel-monitor-hd",
                                                          children: [
                                                            (0, z.BX)(f.View, {
                                                              className: "cont",
                                                              children: [
                                                                (0, z.tZ)(
                                                                  f.View,
                                                                  {
                                                                    className:
                                                                      "tit",
                                                                    children:
                                                                      e.taskName,
                                                                  }
                                                                ),
                                                                (0, z.tZ)(
                                                                  f.View,
                                                                  {
                                                                    className:
                                                                      "txt",
                                                                    children:
                                                                      e.dateStr +
                                                                      "入住",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, z.BX)(f.View, {
                                                              className:
                                                                "loading-box",
                                                              children: [
                                                                (0, z.tZ)(
                                                                  f.View,
                                                                  {
                                                                    className:
                                                                      "icon-loading",
                                                                  }
                                                                ),
                                                                (0, z.tZ)(
                                                                  f.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-light iconfont color-primary",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, z.tZ)(f.View, {
                                                              className:
                                                                "rbox color-primary",
                                                              children:
                                                                "监控中",
                                                            }),
                                                          ],
                                                        }),
                                                        (0, z.BX)(f.View, {
                                                          className:
                                                            "hotel-monitor-txt",
                                                          children: [
                                                            (0, z.BX)(f.View, {
                                                              className: "cont",
                                                              children: [
                                                                (0, z.tZ)(
                                                                  f.Text,
                                                                  {
                                                                    className:
                                                                      "txt",
                                                                    children:
                                                                      "共" +
                                                                      e.totalCnt +
                                                                      "家",
                                                                  }
                                                                ),
                                                                (0, z.tZ)(
                                                                  f.Text,
                                                                  {
                                                                    className:
                                                                      "txt " +
                                                                      (0 ===
                                                                      e
                                                                        .hotelPriceMonitors
                                                                        .length
                                                                        ? ""
                                                                        : "color-red"),
                                                                    children:
                                                                      0 ===
                                                                      e
                                                                        .hotelPriceMonitors
                                                                        .length
                                                                        ? "价格稳定"
                                                                        : e
                                                                            .hotelPriceMonitors
                                                                            .length +
                                                                          "家酒店已降价",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, z.BX)(f.View, {
                                                              className: "rbox",
                                                              id: "ADAg",
                                                              onClick:
                                                                l.goToMonitorDetail.bind(
                                                                  l
                                                                ),
                                                              "data-item": e,
                                                              children: [
                                                                "查看详情",
                                                                (0, z.tZ)(
                                                                  f.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-arr iconfont",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        e.hotelPriceMonitors
                                                          .length > 0 &&
                                                          (0, z.tZ)(f.View, {
                                                            className:
                                                              "hotel-monitor-bd",
                                                            children:
                                                              e.hotelPriceMonitors.map(
                                                                function (
                                                                  e,
                                                                  i
                                                                ) {
                                                                  return (0,
                                                                  z.BX)(
                                                                    f.View,
                                                                    {
                                                                      className:
                                                                        "item",
                                                                      id: "ADAh",
                                                                      onClick:
                                                                        l.gotoHotelDetail.bind(
                                                                          l
                                                                        ),
                                                                      "data-item":
                                                                        e,
                                                                      style:
                                                                        e.txtStyle,
                                                                      onTouchStart:
                                                                        l.touchS,
                                                                      onTouchMove:
                                                                        l.touchM,
                                                                      onTouchEnd:
                                                                        l.touchE,
                                                                      "data-index":
                                                                        i,
                                                                      "data-groupindex":
                                                                        t,
                                                                      "data-type":
                                                                        "zone",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          z.tZ)(
                                                                            f.Image,
                                                                            {
                                                                              src: e.logo,
                                                                              className:
                                                                                "img",
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          z.BX)(
                                                                            f.View,
                                                                            {
                                                                              className:
                                                                                "cont",
                                                                              children:
                                                                                [
                                                                                  (0,
                                                                                  z.tZ)(
                                                                                    f.View,
                                                                                    {
                                                                                      className:
                                                                                        "tit",
                                                                                      children:
                                                                                        e.name,
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  z.BX)(
                                                                                    f.View,
                                                                                    {
                                                                                      className:
                                                                                        "txt",
                                                                                      children:
                                                                                        [
                                                                                          e.commonScore &&
                                                                                            e.commonScore >
                                                                                              0 &&
                                                                                            (0,
                                                                                            z.tZ)(
                                                                                              f.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "color-primary",
                                                                                                children:
                                                                                                  e.commonScore,
                                                                                              }
                                                                                            ),
                                                                                          e.zone +
                                                                                            " " +
                                                                                            e.dateStr,
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  z.tZ)(
                                                                                    f.View,
                                                                                    {
                                                                                      className:
                                                                                        "btm",
                                                                                      children:
                                                                                        (0,
                                                                                        z.tZ)(
                                                                                          f.Text,
                                                                                          {
                                                                                            className:
                                                                                              "s color-red",
                                                                                            children:
                                                                                              e.tips,
                                                                                          }
                                                                                        ),
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          z.tZ)(
                                                                            f.Button,
                                                                            {
                                                                              className:
                                                                                "btn-seckill",
                                                                              children:
                                                                                e.buttonText,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          z.tZ)(
                                                                            f.View,
                                                                            {
                                                                              className:
                                                                                "item-delete",
                                                                              id: "ADAi",
                                                                              onClick:
                                                                                l.delHotelPriceMonitor.bind(
                                                                                  l
                                                                                ),
                                                                              "data-monitorid":
                                                                                e.id,
                                                                              children:
                                                                                (0,
                                                                                z.tZ)(
                                                                                  f.Text,
                                                                                  {
                                                                                    className:
                                                                                      "iconfont ifont-trash",
                                                                                  }
                                                                                ),
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
                                                }),
                                                V &&
                                                  V.hotelPriceMonitors &&
                                                  V.hotelPriceMonitors.length >
                                                    0 &&
                                                  (0, z.BX)(f.View, {
                                                    className:
                                                      "hotel-monitor-item " +
                                                      (u ? "ty" : "zx"),
                                                    children: [
                                                      (0, z.tZ)(f.View, {
                                                        className:
                                                          "monitor-tag",
                                                        children:
                                                          "单个监控任务",
                                                      }),
                                                      (0, z.BX)(f.View, {
                                                        className:
                                                          "hotel-monitor-hd",
                                                        children: [
                                                          (0, z.tZ)(f.View, {
                                                            className: "cont",
                                                            children: (0, z.tZ)(
                                                              f.View,
                                                              {
                                                                className:
                                                                  "tit",
                                                                children:
                                                                  V.listTitle,
                                                              }
                                                            ),
                                                          }),
                                                          (0, z.BX)(f.View, {
                                                            className:
                                                              "loading-box",
                                                            children: [
                                                              (0, z.tZ)(
                                                                f.View,
                                                                {
                                                                  className:
                                                                    "icon-loading",
                                                                }
                                                              ),
                                                              (0, z.tZ)(
                                                                f.Text,
                                                                {
                                                                  className:
                                                                    "ifont-light iconfont color-primary",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, z.tZ)(f.View, {
                                                            className:
                                                              "rbox color-primary",
                                                            children: "监控中",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, z.tZ)(f.View, {
                                                        className:
                                                          "hotel-monitor-bd",
                                                        children:
                                                          V.hotelPriceMonitors.map(
                                                            function (e, t) {
                                                              return (0, z.BX)(
                                                                f.View,
                                                                {
                                                                  className:
                                                                    "item",
                                                                  style:
                                                                    e.txtStyle,
                                                                  onTouchStart:
                                                                    l.touchS,
                                                                  onTouchMove:
                                                                    l.touchM,
                                                                  onTouchEnd:
                                                                    l.touchE,
                                                                  "data-index":
                                                                    t,
                                                                  id: "ADAj",
                                                                  onClick:
                                                                    l.gotoHotelDetail.bind(
                                                                      l
                                                                    ),
                                                                  "data-item":
                                                                    e,
                                                                  "data-type":
                                                                    "single",
                                                                  children: [
                                                                    (0, z.tZ)(
                                                                      f.Image,
                                                                      {
                                                                        src: e.logo,
                                                                        className:
                                                                          "img",
                                                                      }
                                                                    ),
                                                                    (0, z.BX)(
                                                                      f.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            z.tZ)(
                                                                              f.View,
                                                                              {
                                                                                className:
                                                                                  "tit",
                                                                                children:
                                                                                  e.name,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            z.BX)(
                                                                              f.View,
                                                                              {
                                                                                className:
                                                                                  "txt",
                                                                                children:
                                                                                  [
                                                                                    e.commonScore &&
                                                                                      e.commonScore >
                                                                                        0 &&
                                                                                      (0,
                                                                                      z.tZ)(
                                                                                        f.Text,
                                                                                        {
                                                                                          className:
                                                                                            "color-primary",
                                                                                          children:
                                                                                            e.commonScore +
                                                                                            "分 ",
                                                                                        }
                                                                                      ),
                                                                                    e.zone &&
                                                                                      (0,
                                                                                      z.tZ)(
                                                                                        f.Text,
                                                                                        {
                                                                                          children:
                                                                                            e.zone +
                                                                                            " ",
                                                                                        }
                                                                                      ),
                                                                                    e.dateStr,
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            z.tZ)(
                                                                              f.View,
                                                                              {
                                                                                className:
                                                                                  "btm",
                                                                                children:
                                                                                  (0,
                                                                                  z.tZ)(
                                                                                    f.Text,
                                                                                    {
                                                                                      className:
                                                                                        "s " +
                                                                                        ("价格稳定" ===
                                                                                        e.tips
                                                                                          ? "tgrey"
                                                                                          : "color-red"),
                                                                                      children:
                                                                                        e.tips,
                                                                                    }
                                                                                  ),
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, z.tZ)(
                                                                      f.Button,
                                                                      {
                                                                        className:
                                                                          "去预订" ===
                                                                          e.buttonText
                                                                            ? "btn-book"
                                                                            : "btn-seckill",
                                                                        id: "ADAk",
                                                                        onClick:
                                                                          function (
                                                                            e
                                                                          ) {
                                                                            e.stopPropagation(),
                                                                              l.gotoHotelDetail(
                                                                                e
                                                                              );
                                                                          },
                                                                        "data-item":
                                                                          e,
                                                                        children:
                                                                          e.buttonText,
                                                                      }
                                                                    ),
                                                                    (0, z.tZ)(
                                                                      f.View,
                                                                      {
                                                                        className:
                                                                          "item-delete",
                                                                        id: "ADAl",
                                                                        onClick:
                                                                          function (
                                                                            e
                                                                          ) {
                                                                            e.stopPropagation(),
                                                                              l.delHotelPriceMonitor(
                                                                                e
                                                                              );
                                                                          },
                                                                        "data-monitorid":
                                                                          e.id,
                                                                        children:
                                                                          (0,
                                                                          z.tZ)(
                                                                            f.Text,
                                                                            {
                                                                              className:
                                                                                "iconfont ifont-trash",
                                                                            }
                                                                          ),
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
                                                  }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                !v &&
                                  "trainOrder" == p &&
                                  (0, z.BX)(f.View, {
                                    className:
                                      "list-add-train " + (u ? "ty" : "zx"),
                                    id: "ADAm",
                                    onClick: function () {
                                      l.gotoTrainGrabSetPage();
                                    },
                                    "data-ubt-key":
                                      "wx_grablist_add_grab_gotoTrainGrabSetPage",
                                    children: [
                                      (0, z.tZ)(f.Image, {
                                        className: "bg",
                                        src: u
                                          ? "https://images3.c-ctrip.com/ztrip/zhixingios/sz-xcx/jiankong_btn_ty.webp"
                                          : "https://images3.c-ctrip.com/ztrip/zhixingios/sz-xcx/jiankong_btn.webp",
                                        webp: !0,
                                      }),
                                      (0, z.tZ)(f.View, {
                                        className: "add-grab-title ".concat(
                                          null != ee &&
                                            ee.hasOrderTexts &&
                                            0 !==
                                              (null == ee ||
                                              null === (o = ee.hasOrderTexts) ||
                                              void 0 === o
                                                ? void 0
                                                : o.length)
                                            ? ""
                                            : "center"
                                        ),
                                        children:
                                          (null == ee
                                            ? void 0
                                            : ee.addGrabText) || "添加抢票",
                                      }),
                                      (null == ee ||
                                      null === (s = ee.hasOrderTexts) ||
                                      void 0 === s
                                        ? void 0
                                        : s.length) > 0 &&
                                        (0, z.BX)(z.HY, {
                                          children: [
                                            (0, z.tZ)(f.Swiper, {
                                              className:
                                                "swiper add-grab-sub-title-box",
                                              autoplay: "true",
                                              vertical: "true",
                                              interval: "3000",
                                              circular: "true",
                                              children:
                                                null == ee ||
                                                null ===
                                                  (c = ee.hasOrderTexts) ||
                                                void 0 === c
                                                  ? void 0
                                                  : c.map(function (e, t) {
                                                      return (0,
                                                      z.tZ)(f.SwiperItem, { className: "add-grab-sub-title", children: e || "" }, t);
                                                    }),
                                            }),
                                            (0, z.tZ)(f.View, {
                                              className: "add-grab-sub-blank",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                !x &&
                                  "flightOrder" == p &&
                                  (0, z.tZ)(f.View, {
                                    className:
                                      "flight-list-add " + (u ? "ty" : "zx"),
                                    id: "ADAn",
                                    onClick: this.goToMonitorEdit.bind(this),
                                  }),
                                ((y && 0 !== y.length) ||
                                  (V && V.hotelPriceMonitors)) &&
                                  !D &&
                                  "hotelOrder" == p &&
                                  (0, z.BX)(f.View, {
                                    className: "list-add " + (u ? "ty" : "zx"),
                                    id: "ADAo",
                                    onClick:
                                      this.goToHotelMonitorEdit.bind(this),
                                    children: [
                                      (0, z.tZ)(f.Icon, {
                                        className: "icon-add",
                                      }),
                                      "添加监控",
                                    ],
                                  }),
                                P &&
                                  (0, z.tZ)(f.View, {
                                    className:
                                      "pop-mask " + (B ? "active" : ""),
                                    "data-type": C,
                                    id: "ADAp",
                                    onClick: this.closeMask.bind(this),
                                    onTouchMove: this.noop,
                                  }),
                                (0, z.BX)(f.View, {
                                  className:
                                    "pop-botm pop-share " + (O ? "active" : ""),
                                  onTouchMove: this.noop,
                                  children: [
                                    (0, z.tZ)(f.View, {
                                      className: "tit",
                                      children: "邀请好友帮加速",
                                    }),
                                    (0, z.BX)(f.View, {
                                      className: "pop-share-bd",
                                      children: [
                                        (0, z.BX)(f.View, {
                                          className: "item",
                                          children: [
                                            (0, z.tZ)(f.View, {
                                              className: "txt",
                                              children: X && X.speedCN,
                                            }),
                                            (0, z.BX)(f.View, {
                                              className: "tblue",
                                              children: [
                                                (0, z.tZ)(f.Text, {
                                                  className: "strong",
                                                  children: X && X.rate,
                                                }),
                                                "%",
                                              ],
                                            }),
                                            (0, z.tZ)(f.View, {
                                              className: "tgrey",
                                              children: "当前成功率",
                                            }),
                                          ],
                                        }),
                                        (0, z.BX)(f.View, {
                                          className: "item",
                                          children: [
                                            (0, z.tZ)(f.View, {
                                              className: "txt",
                                              children: X && X.nextSpeedCN,
                                            }),
                                            (0, z.BX)(f.View, {
                                              className: "tred",
                                              children: [
                                                (0, z.tZ)(f.Text, {
                                                  className: "strong",
                                                  children: X && X.nextRate,
                                                }),
                                                "%",
                                              ],
                                            }),
                                            (0, z.tZ)(f.View, {
                                              className: "tgrey",
                                              children: "预计分享后",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, z.tZ)(f.View, {
                                      className: "pop-share-tips",
                                      children:
                                        "firstShare" === A
                                          ? X && X.shareText1
                                          : X && X.shareText2,
                                    }),
                                    (0, z.BX)(f.View, {
                                      className: "pop-share-btn",
                                      children: [
                                        (0, z.BX)(f.Button, {
                                          className: "btn-share-pyq",
                                          id: "ADAq",
                                          onClick:
                                            this.shareToPengYouQuan.bind(this),
                                          children: [
                                            (0, z.tZ)(f.Icon, {
                                              className: "icon-pyq",
                                            }),
                                            "保存图片分享",
                                          ],
                                        }),
                                        (0, z.BX)(f.Button, {
                                          className: "btn-share-wechat",
                                          "data-type": "flight",
                                          openType: "share",
                                          children: [
                                            (0, z.tZ)(f.Icon, {
                                              className: "icon-wechat",
                                            }),
                                            "微信",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, z.tZ)(f.View, {
                                  className: "share-image",
                                  style: "visibility: "
                                    .concat(
                                      M ? "visible" : "hidden",
                                      ";bottom: "
                                    )
                                    .concat(M ? 0 : -1e3, "%;"),
                                  "data-type": C,
                                  id: "ADAr",
                                  onClick: this.closeMask.bind(this),
                                  onTouchMove: this.noop,
                                  children: (0, z.tZ)(Y.Z, {
                                    ref: this.refCanvas,
                                    id: "canvas-img",
                                    auto: !1,
                                    backgroundUrl: _,
                                    backgroundWidth: 320,
                                    backgroundHeight: 408,
                                    pagePath: R,
                                    qrcodeX: 220,
                                    qrcodeY: 318,
                                    qrcodeWidth: 73,
                                    qrcodeHeight: 73,
                                    onSavesuccess: this.onSharePictureSave,
                                    onSuccess: this.onSharePictureSuccess,
                                    onFail: this.onSharePictureFail,
                                  }),
                                }),
                                (0, z.tZ)(T.Z, {
                                  ref: function (e) {
                                    l.onDialogAttach(e);
                                  },
                                }),
                              ],
                            });
                          },
                        },
                      ]),
                      i
                    );
                  })(g.default.Component))
                ) || K)
            ) || K;
        (se.enableShareAppMessage = !0),
          Page(
            (0, a.createPageConfig)(
              se,
              "pages/trnshare/grablist/grablist",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundTextStyle: "dark",
                backgroundColorTop: "#fff",
                backgroundColorBottom: "#EFEFEF",
                navigationBarTitleText: "",
                navigationBarTextStyle: "black",
                enablePullDownRefresh: !0,
                navigationStyle: "custom",
                transparentTitle: "always",
                titlePenetrate: "YES",
                backgroundColor: "#f5f5f5",
              } || {}
            )
          );
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (t) {
          return e((e.s = t));
        })(10985);
      }),
        e.O();
    },
  ]);
})();
