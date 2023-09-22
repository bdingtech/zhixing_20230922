!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [61003],
    {
      87628: function (e, i, t) {
        var n = t(32180),
          a = t(57042),
          r = t(24460),
          o = t(81876),
          c = t(21867),
          l = t(86066),
          s = t(45023),
          d = t(52500),
          u = t(81957),
          m = t(92954),
          h = t.n(m),
          g = t(71515),
          p = t(79792),
          f = t(79910),
          v = t(65573),
          w = t(45307),
          N = t(18783),
          Z = t(8271),
          T = t.n(Z),
          x = t(41991),
          b = t(298),
          k = {
            state: { selectedBar: "全部" },
            reducers: {
              setSelectedBar: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { selectedBar: i });
              },
            },
          },
          V = {
            state: {
              orderList: [],
              reloadable: !0,
              pageNum: 1,
              isLoading: !0,
              isLoadingNext: !1,
              isRefreshing: !1,
              didShowNeedRefresh: !0,
            },
            reducers: {
              setOrderList: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { orderList: i });
              },
              setState: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), i);
              },
              setReloadable: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { reloadable: i });
              },
              setPageNum: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { pageNum: i });
              },
              setLoading: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { isLoading: i });
              },
              setLoadingNext: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { isLoadingNext: i });
              },
              setIsRefreshing: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { isRefreshing: i });
              },
            },
          },
          y = {
            state: { showActionPopData: null },
            reducers: {
              onShowActionPop: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { showActionPopData: i });
              },
            },
          },
          S = {
            state: { orderCategory: "ALL", isShowPop: !1 },
            reducers: {
              setSelectOrderCategory: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { orderCategory: i });
              },
              onShowPop: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { isShowPop: i });
              },
            },
          },
          I = {
            state: { robTicket: null, zt12306Account: null, selfTicket: !1 },
            reducers: {
              setRobTicket: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { robTicket: i });
              },
              setZt12306Account: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { zt12306Account: i });
              },
              setSelfTicket: function (e, i) {
                return (0, b.Z)((0, b.Z)({}, e), {}, { selfTicket: i });
              },
            },
          },
          L = (function (e) {
            (0, c.Z)(t, e);
            var i = (0, l.Z)(t);
            function t() {
              return (0, a.Z)(this, t), i.apply(this, arguments);
            }
            return (0, r.Z)(t);
          })(x.Z);
        (0, s.Z)(L, "store", {
          models: {
            statusBarModel: k,
            orderListModel: V,
            orderOptModel: y,
            pageHeaderModel: S,
            extraInfoModel: I,
          },
        });
        var B = t(13025),
          _ = t(49120),
          C = t(94190),
          A = t(90129),
          X = t(91377);
        var M = {
            TRAIN: {
              name: "火车",
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_train@3x.png",
              icon_disable:
                "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_train@3x.png",
            },
            FLIGHT: {
              name: "机票",
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_plane@3x.png",
              icon_disable:
                "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_plane@3x.png",
            },
            HOTEL: {
              name: "酒店",
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_hotel@3x.png",
              icon_disable:
                "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_hotel@3x.png",
            },
            BUS: {
              name: "汽车票",
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_bus@3x.png",
              icon_disable:
                "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_bus@3x.png",
            },
            SHIP: {
              name: "船票",
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_boat@3x.png",
              icon_disable:
                "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_boat@3x.png",
            },
            "CARTEL-0": {
              name: "接送机",
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_bus@3x.png",
              icon_disable:
                "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_bus@3x.png",
            },
            "CARTEL-1": {
              name: "接送站",
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_bus@3x.png",
              icon_disable:
                "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_bus@3x.png",
            },
            SMART_TRIP: {
              name: "智慧出行",
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_zhihui@3x.png",
              icon_disable:
                "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_zhihui@3x.png",
            },
            SCENIC_SPOT: {
              name: "门票",
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_qiangpiao@3x.png",
              icon_disable:
                "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_trip@3x.png",
            },
            robTicket: {
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_qiangpiao@3x.png",
              robListUrl:
                "/rn_robTicket/_crn_config?CRNModuleName=RobTicket&CRNType=1&reuseInstance=1&initialPage=RobOrderList&singlePage=true",
            },
          },
          z =
            "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_jiesong@3x.png",
          P =
            "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_jiesong@3x.png",
          R = "TO_BE_PAID",
          D = "TO_TRAVEL",
          H = "CHANGE_TICKET",
          O = { 全部: "ALL", 待付款: R, 未出行: D, "退改/售后": H },
          E = "ALL",
          Y = "TRAIN",
          j = "FLIGHT",
          F = "BUS",
          U = "HOTEL",
          $ = "SCENIC_SPOT",
          G = "SMART_TRIP",
          K = "SHIP",
          Q = [
            100, 102, 103, 104, 105, 108, 109, 111, 203, 208, 405, 10309, 10310,
            10202, 10204, 10205, 10402, 10411, 10805, 10806, 10808, 10809,
            10811, 10910, 10913, 10312, 10313, 10408, 10611, 10711, 10320,
          ],
          J = [
            200, 201, 204, 205, 207, 211, 212, 300, 301, 302, 303, 304, 400,
            10302, 10304, 10307, 10311, 10314, 10316, 10317, 10318, 10201,
            10203, 10401, 10404, 10405, 10406, 10601, 10602, 10604, 10605,
            10607, 10613, 10614, 10615, 10800, 10801, 10804, 10807, 10810,
            10901, 10903, 10905, 10906, 10908, 10912, 10701, 10702, 10704,
            10707, 10319,
          ],
          q = [
            101, 402, 403, 500, 501, 10303, 10305, 10306, 10308, 10315, 10207,
            10208, 10407, 10409, 10603, 10606, 10608, 10609, 10610, 10612,
            10802, 10803, 10812, 10813, 10814, 10815, 10816, 10817, 10818,
            10819, 10820, 10900, 10902, 10904, 10907, 10909, 10911, 10914,
            10206, 10209, 10403, 10410, 10915, 10703, 10705, 10706, 10708,
            10709, 10710, 10712, 10321,
          ],
          W = [10320],
          ee = [
            101, 403, 500, 501, 10303, 10306, 10315, 10207, 10208, 10407, 10409,
            10608, 10609, 10612, 10802, 10803, 10812, 10813, 10814, 10815,
            10816, 10818, 10819, 10900, 10902, 10911, 10914, 10610, 402, 10305,
            10308, 10206, 10209, 10403, 10410, 10603, 10610, 10820, 10904,
            10907, 10703, 10708, 10709, 10710, 10712, 10321,
          ],
          ie = [
            {
              title: "全部",
              type: E,
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_fenlei_all@3x.png",
            },
            {
              title: "火车票",
              type: Y,
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_fenlei_train@3x.png",
            },
            {
              title: "机票",
              type: j,
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_fenlei_plane@3x.png",
            },
            {
              title: "汽车",
              type: F,
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_fenlei_bus@3x.png",
            },
            {
              title: "酒店",
              type: U,
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_fenlei_hotel@3x.png",
            },
            {
              title: "门票",
              type: $,
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_fenlei_trip@3x.png",
            },
            {
              title: "智慧出行",
              type: G,
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_fenlei_bijia@3x.png",
            },
            {
              title: "船票",
              type: K,
              icon: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_fenlei_chuan@3x.png",
            },
          ];
        function te(e, i) {
          var t = 60;
          switch (e) {
            case E:
            case U:
              t = 365;
              break;
            case Y:
              t = 30;
              break;
            case j:
              t = 365;
              break;
            case F:
              t = 180;
              break;
            case $:
            case G:
              t = 365;
              break;
            case K:
              t = 180;
          }
          switch (i) {
            case H:
            case "ALL":
              t = Math.min(t, 365);
              break;
            case R:
              t = Math.min(t, 1);
              break;
            case D:
              t = Math.min(t, 180);
          }
          return t;
        }
        function ne(e) {
          return Q.indexOf(e) > -1
            ? "#00C777"
            : J.indexOf(e) > -1
            ? "#FF5959"
            : q.indexOf(e) > -1
            ? "#999999"
            : W.indexOf(e) > -1
            ? "#333333"
            : "#00C777";
        }
        function ae(e) {
          var i = T()(e).format("M月D日"),
            t = T()(e).hour(),
            n = T()(e).minute();
          return {
            date: i,
            time: (t >= 10 ? t : "0" + t) + ":" + (n >= 10 ? n : "0" + n),
          };
        }
        function re(e) {
          return ee.indexOf(e) > -1;
        }
        var oe = function () {
            de(1, !1),
              (function () {
                Promise.all([
                  new Promise(function (e) {
                    e((0, m.getStorageSync)("TRAIN_BOOK_STORE").bind12306);
                  }),
                  (0, B.Eg)(),
                ])
                  .then(function (e) {
                    var i = (0, A.Z)(e, 2),
                      t = i[0],
                      n = i[1];
                    console.log("bind12306===", t, n),
                      L.getDispatch().extraInfoModel.setZt12306Account(t),
                      L.getDispatch().extraInfoModel.setRobTicket(n);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
                var e = (0, X.gL)("order-list-self-ticket");
                L.getDispatch().extraInfoModel.setSelfTicket(e);
              })();
          },
          ce = function () {
            de(1, !0);
          },
          le = function () {
            L.getDispatch().orderListModel.setIsRefreshing(!0);
          },
          se = function () {
            var e = L.getState().orderListModel.pageNum,
              i = L.getState().orderListModel.reloadable,
              t = L.getState().orderListModel.isLoadingNext,
              n = L.getState().orderListModel.isRefreshing;
            !i || t || n || de(e + 1);
          },
          de = function (e) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            !i && (0, _.showLoading)(),
              L.getDispatch().orderListModel.setLoadingNext(!0);
            var t = L.getState().statusBarModel.selectedBar,
              n = L.getState().pageHeaderModel.orderCategory,
              a = C.WG.get(),
              r = null == a ? void 0 : a.bind12306,
              o = T()().format("YYYY-MM-DD HH:mm:ss"),
              c = te(n, O[t]);
            (0, B.Uk)({
              orderCategory: n,
              orderType: O[t],
              account12306: (null == r ? void 0 : r.userName12306) || "",
              pageIndex: e,
              pageSize: 20,
              startTime: T()().subtract(c, "day").format("YYYY-MM-DD HH:mm:ss"),
              endTime: o,
            })
              .then(function (t) {
                var n = L.getState().orderListModel.orderList,
                  a = (null == t ? void 0 : t.bizOrderList) || [],
                  r = n.concat(a);
                1 === (null == t ? void 0 : t.resultCode)
                  ? L.getDispatch().orderListModel.setReloadable(
                      (null == t ? void 0 : t.reloadable) || !1
                    )
                  : L.getDispatch().orderListModel.setReloadable(!1),
                  L.getDispatch().orderListModel.setState({
                    pageNum: e,
                    orderList: 1 === e ? a : r,
                    isLoadingNext: !1,
                  }),
                  i && L.getDispatch().orderListModel.setIsRefreshing(!1);
              })
              .catch(function (e) {
                console.log(e),
                  L.getDispatch().orderListModel.setOrderList([]),
                  L.getDispatch().orderListModel.setLoadingNext(!1),
                  L.getDispatch().orderListModel.setLoading(!1),
                  i && L.getDispatch().orderListModel.setIsRefreshing(!1);
              })
              .finally(function () {
                (0, _.hideLoading)(),
                  L.getDispatch().orderListModel.setLoading(!1);
              });
          },
          ue = t(48813),
          me = (0, v.$j)(function (e) {
            return { selectedBar: e.statusBarModel.selectedBar };
          })(function (e) {
            var i = e.selectedBar,
              t =
                100 *
                Object.keys(O).findIndex(function (e) {
                  return e === i;
                });
            return (0, ue.BX)(g.View, {
              className: "order-list-status-bar",
              children: [
                Object.keys(O).map(function (e) {
                  return (0, ue.tZ)(
                    g.View,
                    {
                      className: "flex-1 item flex-center ".concat(
                        i === e ? "active" : ""
                      ),
                      id: "ATAM",
                      onClick: function () {
                        return (function (e) {
                          var i = e.statusBar;
                          L.getDispatch().statusBarModel.setSelectedBar(i),
                            h().nextTick(function () {
                              oe();
                            });
                        })({ statusBar: e });
                      },
                      children: e,
                    },
                    O[e]
                  );
                }),
                (0, ue.tZ)(g.View, {
                  className: "active-line",
                  style: {
                    transform: "translate3d(".concat(t, "%, 0, 0)"),
                    transition: "transform .3s ease-in-out",
                  },
                }),
              ],
            });
          }),
          he = t(43796),
          ge = t(94262),
          pe = t(34229),
          fe = t(17917),
          ve = t(39173),
          we = function (e, i, t) {
            switch (e.actionCode) {
              case "BOOK_HOTEL":
                !(function (e, i) {
                  var t = null != i ? i : {},
                    n = t.recommendType,
                    a = t.searchName,
                    r = t.fromPage,
                    o = t.checkInDate;
                  (0, _.showLoading)("加载中...");
                  var c = T()(o).format("YYYY-MM-DD"),
                    l = T()(o).add(1, "day").format("YYYY-MM-DD");
                  (0, ve.pv)({ data: { recommendType: n, searchName: a } })
                    .then(function (e) {
                      1 === (null == e ? void 0 : e.resultCode) &&
                      null != e &&
                      e.data
                        ? (L.getDispatch().orderListModel.setState({
                            didShowNeedRefresh: !1,
                          }),
                          L.navigateTo({
                            url: "/pages/hotel/list/list",
                            data: {
                              queryModel: {
                                cityId: null == e ? void 0 : e.data.cityId,
                                cityName: a,
                                checkInDate: c,
                                checkOutDate: l,
                              },
                              fromPage: r,
                            },
                          }))
                        : (0, _.showToast)(
                            (null == e ? void 0 : e.resultMessage) || "操作失败"
                          );
                    })
                    .catch(function () {
                      (0, _.showToast)("操作失败");
                    })
                    .finally(function () {
                      (0, _.hideLoading)();
                    });
                })(0, t);
                break;
              case "BOOK_SCENIC":
                !(function (e, i) {
                  var t = (null != i ? i : {}).searchName;
                  (0, _.showLoading)("加载中..."),
                    (0, B.h3)({
                      destinationName: t,
                      businessType: 2,
                      orderNumber: e.orderId,
                    })
                      .then(function (e) {
                        var i;
                        if (
                          1 === (null == e ? void 0 : e.resultCode) &&
                          (null == e ||
                          null === (i = e.scenicSpotList) ||
                          void 0 === i
                            ? void 0
                            : i.length) > 0
                        ) {
                          var t = e.cityId,
                            n = void 0 === t ? "" : t,
                            a = e.cityName,
                            r = void 0 === a ? "" : a;
                          L.getDispatch().orderListModel.setState({
                            didShowNeedRefresh: !1,
                          }),
                            L.navigateTo({
                              url: "/pages/taroCRN/ticket/pages/index/index?source=train_detail&cityID="
                                .concat(n, "&cityName=")
                                .concat(r),
                            });
                        } else (0, _.showToast)("当前城市没有推荐的景点门票信息");
                      })
                      .catch(function () {
                        (0, _.showToast)("操作失败");
                      })
                      .finally(function () {
                        (0, _.hideLoading)();
                      });
                })(i, t);
                break;
              case "DELETE":
                L.showMultiButtonDialog({
                  title: "提示",
                  content: "确定删除该订单",
                  leftButtonName: "取消",
                  rightButtonName: "确认",
                  onRightButtonClick: function () {
                    !(function (e, i) {
                      var t = null != e ? e : {},
                        n = t.orderId,
                        a = t.orderTargetUrl,
                        r = t.orderCategory;
                      n &&
                        a &&
                        ((0, _.showLoading)("删除中..."),
                        (0, B.F2)({
                          orderCategory: r,
                          orderId: n,
                          actionCode: i,
                        })
                          .then(function (e) {
                            1 == (null == e ? void 0 : e.resultCode)
                              ? ((0, _.showToast)(
                                  "DELETE" == i ? "删除成功" : "取消成功"
                                ),
                                setTimeout(function () {
                                  de(1, !1), oe();
                                }, 1e3))
                              : f.Z.commonNavigator(r);
                          })
                          .catch(function () {
                            (0, _.showToast)("请求失败");
                          })
                          .finally(function () {
                            (0, _.hideLoading)();
                          }));
                    })(i, "DELETE");
                  },
                });
                break;
              case "CALL":
                !(function (e) {
                  h().makePhoneCall({ phoneNumber: e });
                })(e.actionUrl);
                break;
              case "ASKING":
                L.getDispatch().orderListModel.setState({
                  didShowNeedRefresh: !1,
                }),
                  (0, fe.e)(e.actionUrl);
                break;
              default:
                var n,
                  a = e.actionUrl;
                a
                  ? ((null === (n = a) || void 0 === n
                      ? void 0
                      : n.indexOf("/pages/bus/neworderdetail/orderdetail")) >
                      -1 &&
                      (a = ""
                        .concat(a, "&utmSource=")
                        .concat((0, he.Ug)({ station: [t.from] }))),
                    L.getDispatch().orderListModel.setState({
                      didShowNeedRefresh: !1,
                    }),
                    f.Z.commonNavigator(a))
                  : (0, _.showToast)("跳转失败");
            }
          };
        var Ne = (0, v.$j)(
            function (e) {
              return (0, ge.Z)(e), {};
            },
            function (e) {
              var i = e.orderOptModel;
              return {
                onMoreActions: function (e) {
                  return i.onShowActionPop(e);
                },
              };
            }
          )(function (e) {
            var i,
              t,
              n = e.actions,
              a = e.orderInfo,
              r = e.extraInfo,
              o = e.onMoreActions,
              c =
                null !== (i = null == n ? void 0 : n.slice(3)) && void 0 !== i
                  ? i
                  : [],
              l = (null == c ? void 0 : c.length) > 0,
              s = function (e) {
                we(e, a, r);
              };
            return (0, ue.BX)(g.View, {
              className: "order-list-order-actions",
              children: [
                !(null == a || !a.orderAd) &&
                  (0, ue.tZ)(g.Image, {
                    src: null == a ? void 0 : a.orderAd,
                    className: "icon",
                    mode: "heightFix",
                  }),
                (0, ue.BX)(g.View, {
                  className: "action-list",
                  children: [
                    l &&
                      (0, ue.tZ)(g.View, {
                        className: "action",
                        id: "ATAC",
                        onClick: function (e) {
                          e.stopPropagation(),
                            o({
                              isShow: !0,
                              moreActions: c,
                              orderInfo: a,
                              extraInfo: r,
                            });
                        },
                        children: "更多",
                      }),
                    null == n || null === (t = n.slice(0, 3)) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          return "TO_BE_PAID" === e.actionCode
                            ? (0, ue.tZ)(g.View, {
                                className: "pay",
                                id: "ATAD",
                                onClick: function (i) {
                                  i.stopPropagation(), s(e);
                                },
                                children: e.actionName,
                              })
                            : (0, ue.tZ)(
                                g.View,
                                {
                                  className: "action",
                                  id: "ATAE",
                                  onClick: function (i) {
                                    i.stopPropagation(), s(e);
                                  },
                                  children: e.actionName,
                                },
                                e.actionName
                              );
                        }),
                  ],
                }),
              ],
            });
          }),
          Ze = {
            TRAIN: 300,
            FLIGHT: 10304,
            HOTEL: 10201,
            BUS: 10601,
            SCENIC_SPOT: 10401,
            CARTEL: 10801,
            SHIP: 10701,
          },
          Te = d.default.memo(function (e) {
            var i = e.business,
              t = e.isValid,
              n = e.orderInfo,
              a = e.cartelType,
              r = ne(null == n ? void 0 : n.orderStatusCode),
              o =
                "CARTEL" === i
                  ? M["".concat(i, "-").concat(null != a ? a : 0)]
                  : M[i];
            return (0,
            ue.BX)(g.View, { className: "order-card-title-wrap", children: [(0, ue.tZ)(g.Image, { src: t ? (null == o ? void 0 : o.icon_disable) : null == o ? void 0 : o.icon, className: "title-icon" }), (0, ue.BX)(g.View, { className: "flex-1 flex-align-items-center", children: [(0, ue.tZ)(pe.ZtRichText, { nodes: null == o ? void 0 : o.name, className: "title-name" }), (null == n ? void 0 : n.smartTripTag) && (0, ue.tZ)(g.View, { className: "line" }), (null == n ? void 0 : n.smartTripTag) && (0, ue.tZ)(g.Text, { className: "smart-name", children: "智慧出行的子订单" })] }), !(null == n || !n.orderStatusName) && (0, ue.tZ)(g.View, { className: "order-status", style: { color: t ? "#999" : r }, children: null == n ? void 0 : n.orderStatusName }), !(null == n || !n.orderPayEndTime) && n.orderStatusCode === Ze[i] && (0, ue.BX)(g.View, { className: "count-down flex-align-items-center", children: [(0, ue.tZ)(g.Text, { children: "剩余" }), (0, ue.tZ)(pe.ZtCountdown, { endTime: null == n ? void 0 : n.orderPayEndTime, isShowHour: !1 })] })] });
          }),
          xe = function (e) {
            var i = e.ticket,
              t = null == i ? void 0 : i.isValid,
              n = t ? "station" : "station gray-color",
              a = ae(null == i ? void 0 : i.departureTime),
              r = a.date,
              o = a.time,
              c = "".concat(r, " ").concat(o, "出发");
            return (0, ue.BX)(g.View, {
              className: "ticket ".concat(t ? "" : "gray-view"),
              children: [
                (0, ue.BX)(g.View, {
                  className: "flex",
                  children: [
                    (0, ue.BX)(g.View, {
                      className: "flex-1 flex-align-items-center",
                      children: [
                        (0, ue.tZ)(g.Text, {
                          className: n,
                          children: null == i ? void 0 : i.from,
                        }),
                        (0, ue.tZ)(g.Text, { className: n, children: "-" }),
                        (0, ue.tZ)(g.Text, {
                          className: n,
                          children: null == i ? void 0 : i.to,
                        }),
                        (0, ue.tZ)(g.Text, {
                          className: "".concat(
                            t ? "" : "gray-color",
                            " 'train-number' }"
                          ),
                          children: null == i ? void 0 : i.trainNo,
                        }),
                        1 === (null == i ? void 0 : i.ticketType) &&
                          (0, ue.tZ)(g.View, {
                            className: "change-tag",
                            children: "改签票",
                          }),
                      ],
                    }),
                    (0, ue.BX)(g.View, {
                      className: "price-wrap",
                      children: [
                        (0, ue.tZ)(g.Text, {
                          className: "price-unit",
                          children: "¥",
                        }),
                        (0, ue.tZ)(g.Text, {
                          children: null == i ? void 0 : i.price,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, ue.BX)(g.View, {
                  className: "time-wrap",
                  children: [
                    (0, ue.tZ)(pe.ZtRichText, {
                      nodes: c,
                      space: "nbsp",
                      className: "time-txt ".concat(t ? "" : "gray-color"),
                    }),
                    2 === (null == i ? void 0 : i.ticketSourceTag) &&
                      (0, ue.tZ)(g.View, {
                        className: "trainX-tag",
                        children: "火酒合订",
                      }),
                  ],
                }),
                (0, ue.tZ)(g.View, {
                  className: "passenger",
                  children: i.passenger,
                }),
              ],
            });
          },
          be = function (e) {
            var i = e.isFolded,
              t = e.setIsFolded;
            return (0, ue.BX)(g.View, {
              className: "more-wrap",
              id: "ATAN",
              onClick: function (e) {
                e.stopPropagation(), t(!i);
              },
              children: [
                (0, ue.tZ)(g.Text, { children: i ? "收起" : "展开更多" }),
                (0, ue.tZ)(g.Text, {
                  className: "iconfont ".concat(
                    i ? "ifont-arrup" : "ifont-arrdown",
                    " arrow"
                  ),
                }),
              ],
            });
          },
          ke = (0, v.$j)(function (e) {
            return (0, ge.Z)(e), {};
          })(function (e) {
            var i,
              t,
              n,
              a,
              r,
              o = e.orderInfo,
              c = (null == o ? void 0 : o.ticketList) || [],
              l = (0, d.useState)(!1),
              s = (0, A.Z)(l, 2),
              u = s[0],
              m = s[1];
            if (0 === (null == c ? void 0 : c.length))
              return (0, ue.tZ)(g.View, {});
            var h =
                (null == o || null === (i = o.orderActionList) || void 0 === i
                  ? void 0
                  : i.length) > 0,
              p = (null == c ? void 0 : c.length) > 3,
              f =
                null === (t = c[0]) ||
                void 0 === t ||
                null === (n = t.trainTicket) ||
                void 0 === n
                  ? void 0
                  : n.to,
              v =
                null === (a = c[0]) ||
                void 0 === a ||
                null === (r = a.trainTicket) ||
                void 0 === r
                  ? void 0
                  : r.arrivalTime,
              w =
                null == c
                  ? void 0
                  : c.every(function (e) {
                      var i;
                      return (
                        !1 ===
                        (null == e ||
                        null === (i = e.trainTicket) ||
                        void 0 === i
                          ? void 0
                          : i.isValid)
                      );
                    }),
              N = p && !u ? c.slice(0, 3) : c;
            return (0, ue.BX)(g.View, {
              className: "train-order-card",
              children: [
                (0, ue.BX)(g.View, {
                  className: "".concat(w ? "gray-view" : ""),
                  children: [
                    (0, ue.tZ)(Te, {
                      business: "TRAIN",
                      isValid: w,
                      orderInfo: o,
                    }),
                    (0, ue.tZ)(g.View, {
                      children:
                        null == N
                          ? void 0
                          : N.map(function (e, i) {
                              return (0,
                              ue.tZ)(xe, { ticket: null == e ? void 0 : e.trainTicket }, "train-ticket-".concat(i));
                            }),
                    }),
                  ],
                }),
                p && (0, ue.tZ)(be, { isFolded: u, setIsFolded: m }),
                h
                  ? (0, ue.tZ)(Ne, {
                      actions: null == o ? void 0 : o.orderActionList,
                      orderInfo: o,
                      extraInfo: {
                        recommendType: "train",
                        searchName: f,
                        fromPage: "orderList",
                        checkInDate: v,
                      },
                    })
                  : (0, ue.tZ)(g.View, { className: "action-empty" }),
              ],
            });
          }),
          Ve = function (e) {
            var i,
              t,
              n = e.ticket,
              a = n.isValid ? "city" : "city gray-color",
              r = "",
              o = !0;
            1 === (null == n ? void 0 : n.ticketType)
              ? (r = "中转")
              : 2 === (null == n ? void 0 : n.ticketType)
              ? (r = "去程")
              : 3 === (null == n ? void 0 : n.ticketType)
              ? ((r = "返程"), (o = !1))
              : 4 === (null == n ? void 0 : n.ticketType)
              ? (r = "去程中转")
              : 5 === (null == n ? void 0 : n.ticketType)
              ? ((r = "返程中转"), (o = !1))
              : 6 === (null == n ? void 0 : n.ticketType)
              ? (r = "第一程")
              : 7 === (null == n ? void 0 : n.ticketType)
              ? ((r = "第二程"), (o = !1))
              : 8 === (null == n ? void 0 : n.ticketType)
              ? (r = "第一程中转")
              : 9 === (null == n ? void 0 : n.ticketType) &&
                ((r = "第二程中转"), (o = !1));
            var c = "";
            if (null != n && n.departureTime) {
              var l = ae(null == n ? void 0 : n.departureTime),
                s = l.date,
                d = l.time;
              c = "".concat(s, " ").concat(d, "起飞");
            }
            var u =
              (null !== (i = null == n ? void 0 : n.airline) && void 0 !== i
                ? i
                : "") +
              (null !== (t = null == n ? void 0 : n.flightNo) && void 0 !== t
                ? t
                : "");
            return (0, ue.BX)(g.View, {
              className: "flight ".concat(n.isValid ? "" : "gray-view"),
              children: [
                (0, ue.BX)(g.View, {
                  className: "flex",
                  children: [
                    (0, ue.BX)(g.View, {
                      className: "flex-1 flex-align-items-center",
                      children: [
                        (0, ue.tZ)(g.Text, { className: a, children: n.from }),
                        (0, ue.tZ)(g.Text, { className: a, children: "-" }),
                        (0, ue.tZ)(g.Text, { className: a, children: n.to }),
                        !!r &&
                          (0, ue.tZ)(g.View, {
                            className: "type-tag",
                            children: r,
                          }),
                      ],
                    }),
                    o &&
                      (0, ue.BX)(g.View, {
                        className: "price-wrap",
                        children: [
                          (0, ue.tZ)(g.Text, {
                            className: "price-unit",
                            children: "¥",
                          }),
                          (0, ue.tZ)(g.Text, { children: n.price }),
                        ],
                      }),
                  ],
                }),
                (0, ue.BX)(g.View, {
                  className: "time-wrap",
                  children: [
                    !!c &&
                      (0, ue.tZ)(pe.ZtRichText, {
                        nodes: c,
                        space: "nbsp",
                        className: "time-txt ".concat(
                          n.isValid ? "" : "gray-color"
                        ),
                      }),
                    0 === n.ticketSourceTag &&
                      (0, ue.tZ)(g.View, {
                        className: "x-tag",
                        children: "机酒联订",
                      }),
                  ],
                }),
                !!u && (0, ue.tZ)(g.View, { className: "info", children: u }),
              ],
            });
          },
          ye = (0, v.$j)(function (e) {
            return (0, ge.Z)(e), {};
          })(function (e) {
            var i,
              t,
              n,
              a,
              r,
              o = e.orderInfo,
              c =
                (null == o || null === (i = o.orderActionList) || void 0 === i
                  ? void 0
                  : i.length) > 0,
              l = (null == o ? void 0 : o.ticketList) || [],
              s =
                null == l
                  ? void 0
                  : l.every(function (e) {
                      var i;
                      return (
                        !1 ===
                        (null == e ||
                        null === (i = e.flightTicket) ||
                        void 0 === i
                          ? void 0
                          : i.isValid)
                      );
                    }),
              d = "",
              u = "";
            return (
              (null == l ? void 0 : l.length) > 0 &&
                ((d =
                  null === (t = l[0]) ||
                  void 0 === t ||
                  null === (n = t.flightTicket) ||
                  void 0 === n
                    ? void 0
                    : n.to),
                (u =
                  null === (a = l[0]) ||
                  void 0 === a ||
                  null === (r = a.flightTicket) ||
                  void 0 === r
                    ? void 0
                    : r.arrivalTime)),
              (0, ue.BX)(g.View, {
                className: "flight-order-card ".concat(s ? "gray-view" : ""),
                children: [
                  (0, ue.tZ)(Te, {
                    business: "FLIGHT",
                    isValid: s,
                    orderInfo: o,
                  }),
                  (0, ue.tZ)(g.View, {
                    children:
                      null == l
                        ? void 0
                        : l.map(function (e, i) {
                            return (0,
                            ue.tZ)(Ve, { ticket: e.flightTicket }, i);
                          }),
                  }),
                  c
                    ? (0, ue.tZ)(Ne, {
                        actions: null == o ? void 0 : o.orderActionList,
                        orderInfo: o,
                        extraInfo: {
                          recommendType: "flight",
                          searchName: d,
                          fromPage: "orderList",
                          checkInDate: u,
                        },
                      })
                    : (0, ue.tZ)(g.View, { className: "action-empty" }),
                ],
              })
            );
          }),
          Se = function (e) {
            var i,
              t,
              n,
              a = e.isInValid,
              r = e.orderInfo,
              o = "",
              c = "";
            switch (
              null == r ||
              null === (i = r.ticketList[0]) ||
              void 0 === i ||
              null === (t = i.flightXTicket) ||
              void 0 === t
                ? void 0
                : t.ticketType
            ) {
              case 0:
                (c = a
                  ? "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_baoxian@3x.png"
                  : "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_baoxian@3x.png"),
                  (o = "保险");
                break;
              case 1:
                (c = a
                  ? "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_xiuxi@3x.png"
                  : "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_xiuxi@3x.png"),
                  (o = "休息室");
                break;
              case 2:
                (c = a
                  ? "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/unable_icon_list_anjian@3x.png"
                  : "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_anjian@3x.png"),
                  (o = "快速安检");
                break;
              case 3:
                (c = a ? P : z), (o = "接送机");
                break;
              case 4:
                (c = a ? P : z), (o = "接送机");
            }
            var l =
              1 ===
              (null == r || null === (n = r.ticketList) || void 0 === n
                ? void 0
                : n.length);
            return (0, ue.BX)(g.View, {
              className: "title-wrap",
              children: [
                (0, ue.tZ)(g.Image, { src: c, className: "title-icon" }),
                (0, ue.tZ)(g.View, {
                  className: "flex-1 flex-align-items-center",
                  children: (0, ue.tZ)(pe.ZtRichText, {
                    nodes: o,
                    className: "title-name",
                  }),
                }),
                l &&
                  (0, ue.tZ)(g.View, {
                    className: "order-status",
                    style: {
                      color: ne(null == r ? void 0 : r.orderStatusCode),
                    },
                    children: null == r ? void 0 : r.orderStatusName,
                  }),
                10906 === (null == r ? void 0 : r.orderStatusCode) &&
                  !(null == r || !r.orderPayEndTime) &&
                  (0, ue.BX)(g.View, {
                    className: "count-down flex-align-items-center",
                    children: [
                      (0, ue.tZ)(g.Text, { children: "剩余" }),
                      (0, ue.tZ)(pe.ZtCountdown, {
                        endTime: null == r ? void 0 : r.orderPayEndTime,
                        isShowHour: !1,
                      }),
                    ],
                  }),
              ],
            });
          },
          Ie = function (e) {
            var i = e.xTicket,
              t = e.isInValidTicket,
              n = 1 === e.ticketLen,
              a = ne(null == i ? void 0 : i.ticketStatusCode),
              r = ae(null == i ? void 0 : i.departureTime),
              o = r.date,
              c = r.time,
              l =
                ("".concat(o, " ").concat(c, "起飞"),
                (null == i ? void 0 : i.from) +
                  "-" +
                  (null == i ? void 0 : i.to) +
                  " " +
                  o +
                  " " +
                  c +
                  "起飞");
            return (
              (null != i && i.to) ||
                (l =
                  (null == i ? void 0 : i.from) + " " + o + " " + c + "起飞"),
              (0, ue.BX)(g.View, {
                className: "ticket ".concat(t ? "gray-view" : ""),
                children: [
                  (0, ue.BX)(g.View, {
                    className: "flex-align-items-center",
                    children: [
                      (0, ue.tZ)(g.View, {
                        className: "name flex-1 ".concat(t ? "gray-color" : ""),
                        children: null == i ? void 0 : i.flightXName,
                      }),
                      n
                        ? (0, ue.BX)(g.View, {
                            className: "price-wrap",
                            children: [
                              (0, ue.tZ)(g.Text, {
                                className: "price-unit",
                                children: "¥",
                              }),
                              (0, ue.tZ)(g.Text, {
                                children: null == i ? void 0 : i.price,
                              }),
                            ],
                          })
                        : (0, ue.tZ)(g.View, {
                            className: "order-status",
                            style: { color: t ? "#999" : a },
                            children: i.ticketStatusName,
                          }),
                    ],
                  }),
                  (0, ue.BX)(g.View, {
                    className: "from-wrap",
                    children: [
                      (0, ue.tZ)(g.Text, {
                        className: "from-desc flex-1 ".concat(
                          t ? "gray-color" : ""
                        ),
                        children: l,
                      }),
                      !n &&
                        (0, ue.BX)(g.View, {
                          className: "price-wrap",
                          children: [
                            (0, ue.tZ)(g.Text, {
                              className: "price-unit",
                              children: "¥",
                            }),
                            (0, ue.tZ)(g.Text, {
                              children: null == i ? void 0 : i.price,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, ue.tZ)(g.View, {
                    className: "desc color-primary",
                    children: "订单详情",
                  }),
                ],
              })
            );
          },
          Le = function (e) {
            var i = e.xTicket,
              t = e.isInValidTicket;
            return (0, ue.BX)(g.View, {
              className: "ticket ".concat(t ? "gray-view" : ""),
              children: [
                (0, ue.BX)(g.View, {
                  className: "flex-align-items-center",
                  children: [
                    (0, ue.tZ)(g.View, {
                      className: "name flex-1 ".concat(t ? "gray-color" : ""),
                      children: null == i ? void 0 : i.flightXName,
                    }),
                    (0, ue.BX)(g.View, {
                      className: "price-wrap",
                      children: [
                        (0, ue.tZ)(g.Text, {
                          className: "price-unit",
                          children: "¥",
                        }),
                        (0, ue.tZ)(g.Text, {
                          children: null == i ? void 0 : i.price,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, ue.tZ)(g.View, {
                  className: "desc ".concat(t ? "gray-color" : ""),
                  children: null == i ? void 0 : i.bookQuantity,
                }),
              ],
            });
          },
          Be = function (e) {
            var i = e.xTicket,
              t = e.isInValidTicket;
            return (0, ue.BX)(g.View, {
              className: "ticket ".concat(t ? "gray-view" : ""),
              children: [
                (0, ue.BX)(g.View, {
                  className: "flex-align-items-center",
                  children: [
                    (0, ue.BX)(g.View, {
                      className: "name flex-1 ".concat(t ? "gray-color" : ""),
                      children: [" ", null == i ? void 0 : i.flightXName],
                    }),
                    (0, ue.BX)(g.View, {
                      className: "price-wrap",
                      children: [
                        (0, ue.tZ)(g.Text, {
                          className: "price-unit",
                          children: "¥",
                        }),
                        (0, ue.tZ)(g.Text, {
                          children: null == i ? void 0 : i.price,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, ue.tZ)(g.View, {
                  className: "desc ".concat(t ? "gray-color" : ""),
                  children: null == i ? void 0 : i.bookQuantity,
                }),
              ],
            });
          },
          _e = function (e) {
            var i = e.xTicket,
              t = e.isInValidTicket,
              n = e.ticketLen,
              a = 1 === n,
              r = n > 1,
              o = ae(null == i ? void 0 : i.departureTime),
              c = o.date,
              l = o.time,
              s = ne(null == i ? void 0 : i.ticketStatusCode),
              d =
                c +
                " " +
                l +
                " " +
                (null == i ? void 0 : i.vehicle) +
                " " +
                (null == i ? void 0 : i.seatNo);
            return (0, ue.BX)(g.View, {
              className: "ticket ".concat(t ? "gray-view" : ""),
              children: [
                (0, ue.BX)(g.View, {
                  className: "flex-align-items-center",
                  children: [
                    (0, ue.tZ)(g.View, {
                      className: "name flex-1 ".concat(t ? "gray-color" : ""),
                      children: null == i ? void 0 : i.flightXName,
                    }),
                    a
                      ? (0, ue.BX)(g.View, {
                          className: "price-wrap",
                          children: [
                            (0, ue.tZ)(g.Text, {
                              className: "price-unit",
                              children: "¥",
                            }),
                            (0, ue.tZ)(g.Text, {
                              children: null == i ? void 0 : i.price,
                            }),
                          ],
                        })
                      : (0, ue.tZ)(g.View, {
                          className: "order-status",
                          style: { color: t ? "#999" : s },
                          children: null == i ? void 0 : i.ticketStatusName,
                        }),
                  ],
                }),
                (0, ue.BX)(g.View, {
                  className: "from-wrap",
                  children: [
                    (0, ue.tZ)(g.Text, {
                      className: "from-desc flex-1 ".concat(
                        t ? "gray-color" : ""
                      ),
                      children: d,
                    }),
                    !a &&
                      (0, ue.BX)(g.View, {
                        className: "price-wrap",
                        children: [
                          (0, ue.tZ)(g.Text, {
                            className: "price-unit",
                            children: "¥",
                          }),
                          (0, ue.tZ)(g.Text, {
                            children: null == i ? void 0 : i.price,
                          }),
                        ],
                      }),
                  ],
                }),
                (0, ue.BX)(g.View, {
                  className: "transfer-station",
                  children: ["上车：", null == i ? void 0 : i.from],
                }),
                (0, ue.BX)(g.View, {
                  className: "transfer-station",
                  children: ["下车：", null == i ? void 0 : i.to],
                }),
                r &&
                  (0, ue.tZ)(g.View, {
                    className: "desc color-primary transfer",
                    children: "订单详情",
                  }),
              ],
            });
          },
          Ce = function (e) {
            var i = e.xTicket,
              t = e.isInValidTicket,
              n = ae(null == i ? void 0 : i.departureTime),
              a = n.date,
              r = n.time,
              o =
                (ne(null == i ? void 0 : i.ticketStatusCode),
                a + " " + r + " " + (null == i ? void 0 : i.vehicle));
            return (0, ue.BX)(g.View, {
              className: "ticket ".concat(t ? "gray-view" : ""),
              children: [
                (0, ue.BX)(g.View, {
                  className: "flex-align-items-center",
                  children: [
                    (0, ue.tZ)(g.View, {
                      className: "name flex-1 ".concat(t ? "gray-color" : ""),
                      children: null == i ? void 0 : i.flightXName,
                    }),
                    (0, ue.BX)(g.View, {
                      className: "price-wrap",
                      children: [
                        (0, ue.tZ)(g.Text, {
                          className: "price-unit",
                          children: "¥",
                        }),
                        (0, ue.tZ)(g.Text, {
                          children: null == i ? void 0 : i.price,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, ue.tZ)(g.View, {
                  className: "from-wrap",
                  children: (0, ue.tZ)(g.Text, {
                    className: "from-desc flex-1 ".concat(
                      t ? "gray-color" : ""
                    ),
                    children: o,
                  }),
                }),
                (0, ue.BX)(g.View, {
                  className: "transfer-station",
                  children: ["上车：", null == i ? void 0 : i.from],
                }),
                (0, ue.BX)(g.View, {
                  className: "transfer-station",
                  children: ["下车：", null == i ? void 0 : i.to],
                }),
              ],
            });
          },
          Ae = function (e) {
            var i = e.ticket,
              t = e.ticketLen,
              n = null == i ? void 0 : i.flightXTicket,
              a = null == n ? void 0 : n.ticketType,
              r = re(null == n ? void 0 : n.ticketStatusCode);
            return 0 === a
              ? (0, ue.tZ)(Ie, { xTicket: n, isInValidTicket: r, ticketLen: t })
              : 1 === a
              ? (0, ue.tZ)(Le, { xTicket: n, isInValidTicket: r })
              : 2 === a
              ? (0, ue.tZ)(Be, { xTicket: n, isInValidTicket: r })
              : 3 === a
              ? (0, ue.tZ)(_e, { xTicket: n, isInValidTicket: r, ticketLen: t })
              : 4 === a
              ? (0, ue.tZ)(Ce, { xTicket: n, isInValidTicket: r })
              : (0, ue.tZ)(g.View, {});
          },
          Xe = (0, v.$j)(function (e) {
            return (0, ge.Z)(e), {};
          })(function (e) {
            var i,
              t,
              n,
              a = e.orderInfo,
              r =
                (null == a || null === (i = a.orderActionList) || void 0 === i
                  ? void 0
                  : i.length) > 0,
              o =
                null == a || null === (t = a.ticketList) || void 0 === t
                  ? void 0
                  : t.every(function (e) {
                      var i;
                      return re(
                        null == e ||
                          null === (i = e.flightXTicket) ||
                          void 0 === i
                          ? void 0
                          : i.ticketStatusCode
                      );
                    });
            return (0, ue.BX)(g.View, {
              className: "flight-x-order-card ".concat(o ? "gray-view" : ""),
              children: [
                (0, ue.tZ)(Se, { isInValid: o, orderInfo: a }),
                (0, ue.tZ)(g.View, {
                  children:
                    null == a || null === (n = a.ticketList) || void 0 === n
                      ? void 0
                      : n.map(function (e, i) {
                          var t;
                          return (0,
                          ue.tZ)(Ae, { ticket: e, ticketLen: null == a || null === (t = a.ticketList) || void 0 === t ? void 0 : t.length }, i);
                        }),
                }),
                r
                  ? (0, ue.tZ)(Ne, {
                      actions: null == a ? void 0 : a.orderActionList,
                      orderInfo: a,
                    })
                  : (0, ue.tZ)(g.View, { className: "action-empty" }),
              ],
            });
          }),
          Me = function (e) {
            var i = e.hotelInfo,
              t = e.isValid,
              n = "",
              a = T()().year(),
              r = T()(i.checkIn).year();
            if (1 === i.hotelType) {
              var o = T()(i.checkIn).format("M月D日"),
                c = T()(i.checkOut).format("M月D日"),
                l = T()(i.checkOut).diff(T()(i.checkIn), "day");
              n =
                (a != r ? r + "年 " : "") +
                ""
                  .concat(o, "-")
                  .concat(c, " ")
                  .concat(l, "晚/")
                  .concat(i.bookQuantity);
            } else {
              var s = T()(i.checkIn).format("HH:mm"),
                d = T()(i.checkOut).format("HH:mm");
              n =
                (a != r
                  ? T()(i.checkIn).format("YYYY年M月D日")
                  : T()(i.checkIn).format("M月D日")) +
                "".concat(s, "-").concat(d, "可住 ").concat(i.duringTime);
            }
            return (0, ue.BX)(g.View, {
              className: "ticket",
              children: [
                (0, ue.BX)(g.View, {
                  className: "flex-align-items-center",
                  children: [
                    (0, ue.tZ)(g.View, {
                      className: "flex-1 name ".concat(t ? "gray-color" : ""),
                      children: i.hotelName,
                    }),
                    (0, ue.BX)(g.View, {
                      className: "price-wrap",
                      children: [
                        (0, ue.tZ)(g.Text, {
                          className: "price-unit",
                          children: "¥",
                        }),
                        (0, ue.tZ)(g.Text, { children: i.price }),
                      ],
                    }),
                  ],
                }),
                (0, ue.tZ)(g.View, {
                  className: "time-wrap",
                  children: (0, ue.tZ)(pe.ZtRichText, {
                    nodes: n,
                    space: "nbsp",
                    className: "time-txt ".concat(t ? "gray-color" : ""),
                  }),
                }),
                (0, ue.tZ)(g.View, { className: "info", children: i.roomName }),
              ],
            });
          },
          ze = (0, v.$j)(function (e) {
            return (0, ge.Z)(e), {};
          })(function (e) {
            var i,
              t,
              n = e.orderInfo,
              a =
                null == n || null === (i = n.ticketList[0]) || void 0 === i
                  ? void 0
                  : i.hotelTicket;
            if (!a) return (0, ue.tZ)(g.View, {});
            var r =
                (null == n || null === (t = n.orderActionList) || void 0 === t
                  ? void 0
                  : t.length) > 0,
              o = re(n.orderStatusCode);
            return (0,
            ue.BX)(g.View, { className: "hotel-order-card ".concat(o ? "gray-view" : ""), children: [(0, ue.tZ)(Te, { business: "HOTEL", orderInfo: n, isValid: o }), (0, ue.tZ)(Me, { hotelInfo: a, isValid: o }), r ? (0, ue.tZ)(Ne, { actions: null == n ? void 0 : n.orderActionList, orderInfo: n }) : (0, ue.tZ)(g.View, { className: "action-empty" })] });
          }),
          Pe = function (e) {
            var i = e.busInfo,
              t = e.isValid,
              n = T()().year(),
              a = T()(i.departureTime).year(),
              r =
                T()(i.departureTime).format(
                  a !== n ? "YYYY年M月D日 HH:mm" : "M月D日 HH:mm"
                ) +
                ("cartel" === i.ticketType ? " ".concat(i.vehicle) : "出发");
            return (0, ue.BX)(g.View, {
              className: "ticket",
              children: [
                (0, ue.BX)(g.View, {
                  className: "flex",
                  style: "align-items:flex-start",
                  children: [
                    (0, ue.BX)(g.View, {
                      className: "flex-1",
                      style: "overflow:hidden",
                      children: [
                        (0, ue.BX)(g.View, {
                          className: "station-wrap",
                          children: [
                            (0, ue.tZ)(g.View, { className: "round from" }),
                            (0, ue.tZ)(g.View, {
                              className: "station flex-1 ".concat(
                                t ? "gray-color" : ""
                              ),
                              children: i.from,
                            }),
                          ],
                        }),
                        (0, ue.BX)(g.View, {
                          className: "station-wrap to",
                          children: [
                            (0, ue.tZ)(g.View, { className: "round to" }),
                            (0, ue.tZ)(g.View, {
                              className: "station flex-1 ".concat(
                                t ? "gray-color" : ""
                              ),
                              children: i.to,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, ue.BX)(g.View, {
                      className: "price-wrap",
                      children: [
                        (0, ue.tZ)(g.Text, {
                          className: "price-unit",
                          children: "¥",
                        }),
                        (0, ue.tZ)(g.Text, { children: i.price }),
                      ],
                    }),
                  ],
                }),
                (0, ue.tZ)(g.View, {
                  className: "time ".concat(t ? "gray-color" : ""),
                  children: r,
                }),
              ],
            });
          },
          Re = (0, v.$j)(function (e) {
            return (0, ge.Z)(e), {};
          })(function (e) {
            var i,
              t,
              n = e.orderInfo,
              a =
                null == n || null === (i = n.ticketList[0]) || void 0 === i
                  ? void 0
                  : i.busShipCartelTicket;
            if (!a) return (0, ue.tZ)(g.View, {});
            var r =
                (null == n || null === (t = n.orderActionList) || void 0 === t
                  ? void 0
                  : t.length) > 0,
              o = re(n.orderStatusCode);
            return (0,
            ue.BX)(g.View, { className: "bus-order-card ".concat(o ? "gray-view" : ""), children: [(0, ue.tZ)(Te, { business: null == a ? void 0 : a.ticketType, orderInfo: n, isValid: o, cartelType: null == a ? void 0 : a.cartelType }), (0, ue.tZ)(Pe, { busInfo: a, isValid: o }), r ? (0, ue.tZ)(Ne, { actions: null == n ? void 0 : n.orderActionList, orderInfo: n, extraInfo: { orderCategory: null == a ? void 0 : a.ticketType, orderTargetUrl: null == n ? void 0 : n.orderTargetUrl, from: null == a ? void 0 : a.from } }) : (0, ue.tZ)(g.View, { className: "action-empty" })] });
          }),
          De = function (e) {
            var i = e.sceneryInfo,
              t = e.isValid,
              n = T()(i.visitDate),
              a = T()().year(),
              r =
                n.format(n.year() !== a ? "YYYY年M月D日" : "M月D日") +
                " " +
                i.ticketDesc;
            return (0, ue.BX)(g.View, {
              className: "ticket",
              children: [
                (0, ue.BX)(g.View, {
                  className: "flex-align-items-center",
                  children: [
                    (0, ue.tZ)(g.View, {
                      className: "flex-1 name ".concat(t ? "gray-color" : ""),
                      children: i.scenicSpotName,
                    }),
                    (0, ue.BX)(g.View, {
                      className: "price-wrap",
                      children: [
                        (0, ue.tZ)(g.Text, {
                          className: "price-unit",
                          children: "¥",
                        }),
                        (0, ue.tZ)(g.Text, { children: i.price }),
                      ],
                    }),
                  ],
                }),
                (0, ue.tZ)(g.View, {
                  className: "time-wrap",
                  children: (0, ue.tZ)(pe.ZtRichText, {
                    nodes: r,
                    space: "nbsp",
                    className: "time-txt ".concat(t ? "gray-color" : ""),
                  }),
                }),
              ],
            });
          },
          He = (0, v.$j)(function (e) {
            return (0, ge.Z)(e), {};
          })(function (e) {
            var i,
              t,
              n = e.orderInfo,
              a =
                null == n || null === (i = n.ticketList[0]) || void 0 === i
                  ? void 0
                  : i.scenicSpotTicket;
            if (!a) return (0, ue.tZ)(g.View, {});
            var r =
                (null == n || null === (t = n.orderActionList) || void 0 === t
                  ? void 0
                  : t.length) > 0,
              o = re(n.orderStatusCode);
            return (0,
            ue.BX)(g.View, { className: "ticket-order-card ".concat(o ? "gray-view" : ""), children: [(0, ue.tZ)(Te, { business: "SCENIC_SPOT", isValid: o, orderInfo: n }), (0, ue.tZ)(De, { sceneryInfo: a, isValid: o }), r ? (0, ue.tZ)(Ne, { actions: null == n ? void 0 : n.orderActionList, orderInfo: n }) : (0, ue.tZ)(g.View, { className: "action-empty" })] });
          }),
          Oe = function (e) {
            var i = e.isValid,
              t = e.orderInfo;
            return (0, ue.BX)(g.View, {
              className: "title-wrap",
              children: [
                (0, ue.tZ)(g.Image, {
                  src: i ? M.SMART_TRIP.icon_disable : M.SMART_TRIP.icon,
                  className: "title-icon",
                }),
                (0, ue.tZ)(g.View, {
                  className: "flex-1 flex-align-items-center",
                  children: (0, ue.tZ)(pe.ZtRichText, {
                    nodes: M.SMART_TRIP.name,
                    className: "title-name ".concat(i ? "gray-color" : ""),
                  }),
                }),
                !(null == t || !t.orderPayEndTime) &&
                  (0, ue.BX)(g.View, {
                    className: "count-down flex-align-items-center",
                    children: [
                      (0, ue.tZ)(g.Text, { children: "待支付 剩余" }),
                      (0, ue.tZ)(pe.ZtCountdown, {
                        endTime: null == t ? void 0 : t.orderPayEndTime,
                        isShowHour: !1,
                      }),
                    ],
                  }),
              ],
            });
          },
          Ee = function (e) {
            var i = e.isLast,
              t = e.ticket,
              n = e.isToPayOrder,
              a = e.nextTicket,
              r = null == t ? void 0 : t.smartTripTicket,
              o = re(r.ticketStatusCode),
              c = "",
              l = (0, ue.tZ)(g.View, {}),
              s = r.ticketType;
            switch (s) {
              case 0:
              case 1:
                (c = "火车"),
                  (l = (0, ue.tZ)(g.View, {
                    className: "info",
                    children: r.passenger,
                  }));
                break;
              case 2:
                (c = "机票"),
                  (l = (0, ue.BX)(g.View, {
                    className: "info",
                    children: [r.airline, r.flightNo],
                  }));
                break;
              case 3:
                (c = "汽车"), (l = (0, ue.tZ)(g.View, {}));
                break;
              case 4:
                (c = "船票"), (l = (0, ue.tZ)(g.View, {}));
            }
            var d = !n && !!r.ticketStatusName,
              u = function (e) {
                return !e || d
                  ? (0, ue.BX)(g.View, {
                      className: "price-wrap",
                      children: [
                        (0, ue.tZ)(g.Text, {
                          className: "price-unit",
                          children: "¥",
                        }),
                        (0, ue.tZ)(g.Text, { children: r.price }),
                      ],
                    })
                  : (0, ue.tZ)(g.View, {});
              },
              m = T()(r.departureTime),
              h = T()().year(),
              p =
                m.format(
                  m.year() !== h ? "YYYY年M月D日 HH:mm" : "M月D日 HH:mm"
                ) + (2 === s ? "起飞" : "出发"),
              f =
                1 === r.ticketType && 1 === (null == a ? void 0 : a.ticketType),
              v = !(null == a || !a.ticketStatusName);
            return (0, ue.BX)(g.View, {
              className: "ticket "
                .concat([3, 4].includes(s) ? "bus" : "", " ")
                .concat(o ? "gray-view" : ""),
              children: [
                (0, ue.BX)(g.View, {
                  className: "flex-align-items-center",
                  children: [
                    (0, ue.BX)(g.View, {
                      className: "flex-1 flex-align-items-center",
                      children: [
                        (0, ue.tZ)(g.View, {
                          className: "station ".concat(o ? "gray-color" : ""),
                          children: null == r ? void 0 : r.from,
                        }),
                        (0, ue.tZ)(g.View, {
                          className: "station ".concat(o ? "gray-color" : ""),
                          children: "-",
                        }),
                        (0, ue.tZ)(g.View, {
                          className: "station ".concat(o ? "gray-color" : ""),
                          children: null == r ? void 0 : r.to,
                        }),
                        "火车" === c &&
                          (0, ue.tZ)(g.View, {
                            className: "station number ".concat(
                              o ? "gray-color" : ""
                            ),
                            children: r.trainNo,
                          }),
                        !!c &&
                          (0, ue.tZ)(g.View, {
                            className: "tag flex-center",
                            children: c,
                          }),
                      ],
                    }),
                    d
                      ? (0, ue.tZ)(g.View, {
                          className: "status",
                          children: r.ticketStatusName,
                        })
                      : u(!1),
                  ],
                }),
                (0, ue.BX)(g.View, {
                  className: "time-wrap ".concat(o ? "gray-color" : ""),
                  children: [(0, ue.tZ)(g.Text, { children: p }), u(!0)],
                }),
                l,
                !i &&
                  (0, ue.BX)(g.View, {
                    className: "flex-align-items-center transfer",
                    children: [
                      f &&
                        v &&
                        (0, ue.tZ)(g.View, {
                          className: "transfer-tag flex-center",
                          children: "中转",
                        }),
                      v && (0, ue.tZ)(g.View, { className: "line flex-1" }),
                    ],
                  }),
              ],
            });
          },
          Ye = function (e) {
            var i = e.isFolded,
              t = e.setIsFolded;
            return (0, ue.BX)(g.View, {
              className: "more-wrap",
              id: "ATAL",
              onClick: function (e) {
                e.stopPropagation(), t(!i);
              },
              children: [
                (0, ue.tZ)(g.Text, { children: i ? "收起" : "展开更多" }),
                (0, ue.tZ)(g.Text, {
                  className: "iconfont ".concat(
                    i ? "ifont-arrup" : "ifont-arrdown",
                    " arrow"
                  ),
                }),
              ],
            });
          },
          je = (0, v.$j)(function (e) {
            return (0, ge.Z)(e), {};
          })(function (e) {
            var i,
              t,
              n,
              a,
              r,
              o,
              c = e.orderInfo,
              l = (0, d.useState)(!1),
              s = (0, A.Z)(l, 2),
              u = s[0],
              m = s[1];
            if (
              null == c ||
              null === (i = c.ticketList) ||
              void 0 === i ||
              !i.length
            )
              return (0, ue.tZ)(g.View, {});
            var h =
                null == c || null === (t = c.ticketList) || void 0 === t
                  ? void 0
                  : t.length,
              p =
                (null == c || null === (n = c.orderActionList) || void 0 === n
                  ? void 0
                  : n.length) > 0,
              f = h > 3,
              v =
                null == c || null === (a = c.ticketList) || void 0 === a
                  ? void 0
                  : a.every(function (e) {
                      var i;
                      return re(
                        null == e ||
                          null === (i = e.smartTripTicket) ||
                          void 0 === i
                          ? void 0
                          : i.ticketStatusCode
                      );
                    }),
              w = f ? (u ? h : 3) : h,
              N = !(null == c || !c.orderPayEndTime);
            return (0, ue.BX)(g.View, {
              className: "smart-order-card ".concat(v ? "gray-view" : ""),
              children: [
                (0, ue.tZ)(Oe, { isValid: v, orderInfo: c }),
                (0, ue.tZ)(g.View, {
                  children:
                    null === (r = c.ticketList) ||
                    void 0 === r ||
                    null === (o = r.slice(0, w)) ||
                    void 0 === o
                      ? void 0
                      : o.map(function (e, i) {
                          var t,
                            n =
                              i + 1 < w
                                ? null == c ||
                                  null === (t = c.ticketList[i + 1]) ||
                                  void 0 === t
                                  ? void 0
                                  : t.smartTripTicket
                                : null;
                          return (0,
                          ue.tZ)(Ee, { ticket: e, nextTicket: n, isToPayOrder: N, isLast: i === w - 1 }, i);
                        }),
                }),
                f && (0, ue.tZ)(Ye, { isFolded: u, setIsFolded: m }),
                p
                  ? (0, ue.tZ)(Ne, {
                      actions: null == c ? void 0 : c.orderActionList,
                      orderInfo: c,
                    })
                  : (0, ue.tZ)(g.View, { className: "action-empty" }),
              ],
            });
          }),
          Fe = t(96158),
          Ue = t(77900),
          $e = 0,
          Ge = 1,
          Ke = (0, v.$j)(function (e) {
            var i = e.extraInfoModel;
            return {
              zt12306Account: null == i ? void 0 : i.zt12306Account,
              isOpenSelfTicket: i.selfTicket,
            };
          })(function (e) {
            var i = e.zt12306Account,
              t = e.isOpenSelfTicket,
              n = (0, d.useState)({}),
              a = (0, A.Z)(n, 2),
              r = a[0],
              o = a[1],
              c = (0, d.useState)({}),
              l = (0, A.Z)(c, 2),
              s = l[0],
              u = l[1],
              m = (0, d.useState)(!1),
              h = (0, A.Z)(m, 2),
              p = h[0],
              f = h[1];
            (0, d.useEffect)(
              function () {
                w();
              },
              [i]
            );
            var v = function () {
                L.navigateTo({ url: "/pages/12306/login/login" });
              },
              w = function () {
                var e = i;
                null != e && e.name
                  ? o({
                      title: N(null == e ? void 0 : e.name),
                      subTitle: "",
                      button: "切换12306账号",
                      statusType: $e,
                    })
                  : o({
                      title: "12306未登录",
                      subTitle: "火车订单信息已过期，请先登录",
                      button: "去登录",
                      statusType: Ge,
                    });
              },
              N = function (e) {
                return Ue.Z.isMobile(e)
                  ? e.substring(0, 3) + "****" + e.substring(7)
                  : e;
              },
              Z = [];
            return (
              t &&
                Z.push({
                  btnName: "本人车票",
                  iconUrl:
                    "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/icon_brcp@3x.png",
                  action: function () {
                    L.navigateTo({
                      url: "/pages/taroCRN/train/pages/selfTicketOrderList/index",
                    });
                  },
                }),
              Z.push({
                btnName: p ? "正在同步" : "同步行程",
                iconUrl:
                  "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/icon_tbxc@3x.png",
                action: function (e) {
                  s[e] ||
                    ((0, Fe.Sf)("orderList"),
                    (s[e] = !0),
                    u((0, b.Z)({}, s)),
                    f(!0),
                    setTimeout(function () {
                      (s[e] = !1), u((0, b.Z)({}, s)), f(!1);
                    }, 4e3));
                },
              }),
              (0, ue.BX)(g.View, {
                className: "order-page-12306-status ".concat(
                  null != r && r.subTitle ? "" : "disable"
                ),
                children: [
                  (0, ue.BX)(g.View, {
                    className: "flex flex-center",
                    children: [
                      (0, ue.tZ)(g.Image, {
                        className: "icon  ".concat(
                          null != r && r.subTitle ? "disable" : ""
                        ),
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_12306@3x.png",
                      }),
                      (0, ue.BX)(g.View, {
                        className: "flex-1",
                        children: [
                          (0, ue.tZ)(g.View, {
                            className: "title",
                            children: null == r ? void 0 : r.title,
                          }),
                          !(null == r || !r.subTitle) &&
                            (0, ue.tZ)(g.View, {
                              className: "sub-title",
                              children: null == r ? void 0 : r.subTitle,
                            }),
                        ],
                      }),
                      (null == r ? void 0 : r.statusType) !== $e
                        ? (0, ue.tZ)(g.View, {
                            className: "btn",
                            id: "ATAO",
                            onClick: v,
                            children: "去登录",
                          })
                        : (0, ue.tZ)(g.View, {
                            className: "flex-align-items-center t6-btn",
                            id: "ATAP",
                            onClick: v,
                            children: "切换账号",
                          }),
                    ],
                  }),
                  (null == r ? void 0 : r.statusType) == $e &&
                    Z.length > 0 &&
                    (0, ue.tZ)(g.View, {
                      className: "flex flex-center btom-bar",
                      children: Z.map(function (e, i) {
                        return (0, ue.BX)(ue.HY, {
                          children: [
                            i > 0 &&
                              (0, ue.tZ)(g.View, { className: "dashed" }),
                            (0, ue.BX)(
                              g.View,
                              {
                                className: "item flex flex-center flex-1",
                                id: "ATAPs",
                                onClick: function () {
                                  var t;
                                  null === (t = e.action) ||
                                    void 0 === t ||
                                    t.call(e, i);
                                },
                                children: [
                                  (0, ue.tZ)(g.Image, {
                                    src: e.iconUrl,
                                    mode: "aspectFit",
                                    className: "icon ".concat(s[i] ? "an" : ""),
                                  }),
                                  e.btnName,
                                ],
                              },
                              i
                            ),
                          ],
                        });
                      }),
                    }),
                ],
              })
            );
          }),
          Qe = (0, v.$j)(function (e) {
            var i = e.extraInfoModel;
            return { robTicket: null == i ? void 0 : i.robTicket };
          })(function (e) {
            var i,
              t,
              n = e.robTicket,
              a =
                null !==
                  (i =
                    null == n ||
                    null === (t = n.grabTicketSummary) ||
                    void 0 === t
                      ? void 0
                      : t.ticketGrabbingNum) && void 0 !== i
                  ? i
                  : 0;
            return a
              ? (0, ue.BX)(g.View, {
                  className: "order-page-rob-ticket",
                  id: "ATAK",
                  onClick: function () {
                    f.Z.commonNavigator("/pages/trnshare/grablist/grablist");
                  },
                  children: [
                    (0, ue.tZ)(g.Image, {
                      className: "icon",
                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/dingdanliebiao/icon_list_qiangpiao@3x.png",
                    }),
                    (0, ue.tZ)(g.View, {
                      className: "flex-1",
                      children: (0, ue.tZ)(g.View, {
                        className: "title",
                        children: "抢票订单",
                      }),
                    }),
                    (0, ue.BX)(g.View, {
                      className: "flex-align-items-center",
                      children: [
                        (0, ue.BX)(g.View, {
                          className: "change-txt",
                          children: [a, "笔订单正在抢票"],
                        }),
                        (0, ue.tZ)(g.Text, {
                          className: "iconfont ifont-arr arr",
                        }),
                      ],
                    }),
                  ],
                })
              : (0, ue.tZ)(g.View, {});
          }),
          Je = (0, v.$j)(function (e) {
            return { orderCategory: e.pageHeaderModel.orderCategory };
          })(function (e) {
            var i = e.orderCategory;
            return i === E || i === Y
              ? (0, ue.BX)(ue.HY, {
                  children: [(0, ue.tZ)(Ke, {}), (0, ue.tZ)(Qe, {})],
                })
              : (0, ue.tZ)(g.View, {});
          }),
          qe = (0, v.$j)(function (e) {
            var i = e.orderListModel,
              t = e.pageHeaderModel,
              n = e.statusBarModel;
            return {
              reloadable: i.reloadable,
              orderCategory: t.orderCategory,
              selectedBar: n.selectedBar,
            };
          })(function (e) {
            var i = e.reloadable,
              t = e.orderCategory,
              n = e.selectedBar;
            if (i)
              return (0, ue.tZ)(g.View, {
                className: "order-list-load-more-bottom",
              });
            var a,
              r = te(t, O[n]);
            a = 365 === r ? "1年" : r % 30 == 0 ? r / 30 + "个月" : r + "天";
            var o = "到底啦，没有更多了";
            switch (t) {
              case E:
                o = "到底啦，没有更多了";
                break;
              case Y:
                a && (o = "仅能查询近" + a + "火车订单");
                break;
              case F:
                a && (o = "仅能查询近" + a + "汽车票订单");
                break;
              case j:
                a && (o = "仅能查询近" + a + "机票订单");
                break;
              case U:
                a && (o = "仅能查询近" + a + "酒店订单");
                break;
              case $:
                a && (o = "仅能查询近" + a + "门票订单");
                break;
              case G:
                a && (o = "仅能查询近" + a + "智慧出行订单");
                break;
              case K:
                a && (o = "仅能查询近" + a + "船票订单");
            }
            return (0,
            ue.tZ)(g.View, { className: "order-list-load-more-txt", children: o });
          });
        function We(e) {
          var i = e.item,
            t = e.index;
          if (!i) return (0, ue.tZ)(g.View, {});
          var n = (0, ue.tZ)(g.View, {});
          switch (null == i ? void 0 : i.orderCategory) {
            case "TRAIN":
              n = (0, ue.tZ)(ke, { orderInfo: i });
              break;
            case "FLIGHT":
              n = (0, ue.tZ)(ye, { orderInfo: i });
              break;
            case "FLIGHT_X":
              n = (0, ue.tZ)(Xe, { orderInfo: i });
              break;
            case "HOTEL":
              n = (0, ue.tZ)(ze, { orderInfo: i });
              break;
            case "BUS":
              n = (0, ue.tZ)(Re, { orderInfo: i });
              break;
            case "SCENIC_SPOT":
              n = (0, ue.tZ)(He, { orderInfo: i });
              break;
            case "SMART_TRIP":
              n = (0, ue.tZ)(je, { orderInfo: i });
              break;
            case "SHIP":
              n = (0, ue.tZ)(Re, { orderInfo: i });
          }
          return (0, ue.tZ)(
            g.View,
            {
              id: "ATAF",
              onClick: function () {
                var e,
                  t,
                  n,
                  a = i.orderTargetUrl;
                (null === (e = a) || void 0 === e
                  ? void 0
                  : e.indexOf("/pages/bus/neworderdetail/orderdetail")) > -1 &&
                  (a = ""
                    .concat(a, "&utmSource=")
                    .concat(
                      (0, he.Ug)({
                        station: [
                          null == i ||
                          null === (t = i.ticketList[0]) ||
                          void 0 === t ||
                          null === (n = t.busShipCartelTicket) ||
                          void 0 === n
                            ? void 0
                            : n.from,
                        ],
                      })
                    )),
                  a &&
                    (function (e) {
                      var i;
                      L.getDispatch().orderListModel.setState({
                        didShowNeedRefresh: !1,
                      });
                      var t = e;
                      (null === (i = t) || void 0 === i
                        ? void 0
                        : i.indexOf("/pages/ship/orderdetail/orderdetail")) >
                        -1 &&
                        (t = t.replace(
                          "/pages/ship/orderdetail/orderdetail",
                          "/pages/taroCRN/ship/pages/orderdetail/orderdetail"
                        )),
                        t && f.Z.commonNavigator(t);
                    })(a);
              },
              children: n,
            },
            t
          );
        }
        var ei,
          ii = (0, v.$j)(function (e) {
            var i = e.orderListModel,
              t = e.pageHeaderModel;
            return {
              orderList: i.orderList,
              pageNum: i.pageNum,
              orderCategory: t.orderCategory,
              isLoading: i.isLoading,
              isRefreshing: i.isRefreshing,
            };
          })(function (e) {
            var i = e.orderList,
              t = (e.pageNum, e.isLoading),
              n = e.isRefreshing;
            return t
              ? (0, ue.tZ)(g.View, {})
              : (0, ue.tZ)(g.Block, {
                  children:
                    0 === (null == i ? void 0 : i.length)
                      ? (0, ue.BX)(g.View, {
                          className: "order-list-empty",
                          children: [
                            (0, ue.tZ)(Je, {}),
                            (0, ue.BX)(g.View, {
                              className: "empty-colum",
                              children: [
                                (0, ue.tZ)(g.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/cpp@3x.png",
                                  className: "empty-icon",
                                }),
                                (0, ue.tZ)(g.Text, {
                                  className: "empty-txt",
                                  children: "暂无可查询订单",
                                }),
                                (0, ue.tZ)(g.Text, {
                                  className: "empty-desc",
                                  children: "去别处逛逛吧~",
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, ue.tZ)(g.View, {
                          className: "main-content",
                          children: (0, ue.tZ)(g.ScrollView, {
                            onScrollToLower: se,
                            lowerThreshold: 200,
                            refresherEnabled: !0,
                            refresherTriggered: n,
                            onRefresherPulling: le,
                            onRefresherRefresh: ce,
                            style: "height:100%",
                            scrollY: !0,
                            children: (0, ue.BX)(ue.HY, {
                              children: [
                                (0, ue.tZ)(Je, {}),
                                null == i
                                  ? void 0
                                  : i.map(function (e, t) {
                                      return (0,
                                      ue.BX)(g.View, { children: [We({ item: e, index: t }), t === (null == i ? void 0 : i.length) - 1 && (0, ue.tZ)(qe, {})] }, t);
                                    }),
                              ],
                            }),
                          }),
                        }),
                });
          }),
          ti = t(2809),
          ni = (0, v.$j)(
            function (e) {
              var i = e.pageHeaderModel;
              return { orderCategory: i.orderCategory, isShowPop: i.isShowPop };
            },
            function (e) {
              var i = e.pageHeaderModel;
              return {
                onShowPop: function (e) {
                  return i.onShowPop(e);
                },
                setSelectOrderCategory: function (e) {
                  return i.setSelectOrderCategory(e);
                },
              };
            }
          )(function (e) {
            var i = e.orderCategory,
              t = e.isShowPop,
              n = e.onShowPop,
              a = ti.ZP.statusBarHeight || 44,
              r = (0, d.useState)(!1),
              o = (0, A.Z)(r, 2),
              c = o[0],
              l = o[1];
            return (
              (0, d.useEffect)(
                function () {
                  var e;
                  return (
                    t &&
                      (e = setInterval(function () {
                        l(!0);
                      }, 30)),
                    function () {
                      e && clearInterval(e);
                    }
                  );
                },
                [t]
              ),
              (0, ue.BX)(g.View, {
                className: "order-list-page-header-pop",
                children: [
                  (0, ue.tZ)(g.View, {
                    className: "layer ".concat(t ? "fade-in" : ""),
                    id: "ATAG",
                    onClick: function () {
                      return n(!1);
                    },
                  }),
                  (0, ue.BX)(g.View, {
                    className: "drawer",
                    children: [
                      (0, ue.BX)(g.View, {
                        className: "header",
                        id: "ATAH",
                        onClick: function () {
                          return n(!t);
                        },
                        style: { paddingTop: "".concat(a, "px") },
                        children: [
                          "筛选类型",
                          (0, ue.tZ)(g.Text, {
                            className: "iconfont2 ifont2-collapse triangle",
                          }),
                        ],
                      }),
                      (0, ue.tZ)(g.View, {
                        className: "content ".concat(c ? "show" : ""),
                        children: ie.map(function (e) {
                          var t = e.type === i;
                          return (0, ue.BX)(
                            g.View,
                            {
                              className: "item ".concat(
                                t ? (p.default.isTieYou ? "ty" : "zx") : ""
                              ),
                              id: "ATAI",
                              onClick: function () {
                                return (function (e) {
                                  L.getDispatch().pageHeaderModel.setSelectOrderCategory(
                                    e
                                  ),
                                    L.getDispatch().pageHeaderModel.onShowPop(
                                      !1
                                    ),
                                    oe();
                                })(e.type);
                              },
                              children: [
                                (0, ue.tZ)(g.Image, {
                                  src: e.icon,
                                  className: "icon",
                                }),
                                (0, ue.tZ)(g.Text, {
                                  className: "title ".concat(
                                    t ? "current" : ""
                                  ),
                                  children: e.title,
                                }),
                              ],
                            },
                            e.type
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          }),
          ai = (0, v.$j)(
            function (e) {
              var i = e.pageHeaderModel;
              return { orderCategory: i.orderCategory, isShowPop: i.isShowPop };
            },
            function (e) {
              var i = e.pageHeaderModel;
              return {
                onShowPop: function (e) {
                  return i.onShowPop(e);
                },
              };
            }
          )(function (e) {
            var i = e.orderCategory,
              t = e.isShowPop,
              n = e.onShowPop,
              a = "全部订单";
            switch (i) {
              case E:
                a = "全部订单";
                break;
              case F:
                a = "只看汽车";
                break;
              case j:
                a = "只看机票";
                break;
              case U:
                a = "只看酒店";
                break;
              case $:
                a = "只看门票";
                break;
              case Y:
                a = "只看火车票";
                break;
              case G:
                a = "只看智慧出行";
                break;
              case K:
                a = "只看船票";
            }
            return t
              ? (0, ue.tZ)(ni, {})
              : (0, ue.tZ)(g.View, {
                  className: "flex-align-items-center",
                  children: (0, ue.BX)(g.View, {
                    className: "order-list-page-header",
                    id: "ATAJ",
                    onClick: function () {
                      return N.ZP.isLogin && n(!t);
                    },
                    children: [
                      a,
                      (0, ue.tZ)(g.Text, {
                        className: "iconfont2 ifont2-collapse triangle up",
                      }),
                    ],
                  }),
                });
          }),
          ri = (0, v.$j)(
            function (e) {
              return { data: e.orderOptModel.showActionPopData };
            },
            function (e) {
              var i = e.orderOptModel;
              return {
                onMoreActions: function (e) {
                  return i.onShowActionPop(e);
                },
              };
            }
          )(function (e) {
            var i,
              t = e.onMoreActions,
              n = e.data,
              a = function () {
                null == t || t(null);
              };
            return (0, ue.tZ)(pe.ZtDrawer, {
              show: (null == n ? void 0 : n.isShow) || !1,
              className: "order-list-more-actions-pop",
              title: "更多",
              onClose: a,
              onWrapClose: a,
              children:
                null == n || null === (i = n.moreActions) || void 0 === i
                  ? void 0
                  : i.map(function (e) {
                      return (0, ue.BX)(
                        g.View,
                        {
                          className: "action-item",
                          id: "ATAB",
                          onClick: function () {
                            return (function (e) {
                              we(
                                e,
                                null == n ? void 0 : n.orderInfo,
                                null == n ? void 0 : n.extraInfo
                              );
                            })(e);
                          },
                          children: [
                            (0, ue.tZ)(g.View, {
                              children: null == e ? void 0 : e.actionName,
                            }),
                            (0, ue.tZ)(g.Text, {
                              className: "iconfont ifont-arr arrow",
                            }),
                          ],
                        },
                        e.actionCode
                      );
                    }),
            });
          }),
          oi = d.default.memo(function (e) {
            var i = e.checkSubscribeStatus;
            return (0, ue.BX)(g.View, {
              className: "order-list-login-colum",
              children: [
                (0, ue.tZ)(g.Image, {
                  src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/icon_tx@3x.webp",
                  className: "icon",
                }),
                (0, ue.tZ)(g.Text, {
                  className: "title",
                  children: "登录开启新的旅行",
                }),
                (0, ue.tZ)(g.Text, {
                  className: "sub-title",
                  children: "登录后查看历史订单",
                }),
                (0, ue.tZ)(g.Button, {
                  className: "btn",
                  id: "ATAA",
                  onClick: function () {
                    N.ZP.doLogin().then(
                      function () {
                        null == i || i();
                      },
                      function () {
                        console.log("取消登录");
                      }
                    );
                  },
                  children: "立即登录",
                }),
              ],
            });
          }),
          ci = p.default.isTieyou
            ? [
                {
                  title: "余票紧张提醒",
                  tempId: "jCO-_qw188Vies9QYILu7Mx3Ho_7ih3yniv9P7Cb6V0",
                },
                {
                  title: "订单信息通知 ",
                  tempId: "wIBbFH__8nnot_4Icg9TnQRZQ7U04TzBYQUZPMrn4l4",
                },
                {
                  title: "购票结果通知",
                  tempId: "1Umg-WA3HbJAH3rWSCPNL2WgKdD_5fqpFJ2R0wwLGxc",
                },
              ]
            : [
                {
                  title: "活动通知",
                  tempId: "kXLnac15BL5LAygKgVCeA1F7-kxEwRlsz5BD3fQcwAw",
                },
                {
                  title: "行程提醒",
                  tempId: "NdvyuBq2SJA1v9c5QcPwcsqbLUrdENKwG409niPJCK8",
                },
                {
                  title: "出行提醒",
                  tempId: "H3N8J1b3pO9FDkTAivEMJA03pgQksXmr04Ut8DA25Ao",
                },
              ],
          li =
            (0, u.h)(!1, { usePageWrapper: !0 })(
              (ei = (function (e) {
                (0, c.Z)(t, e);
                var i = (0, l.Z)(t);
                function t(e) {
                  var n;
                  return (
                    (0, a.Z)(this, t),
                    (n = i.call(this, e)),
                    (0, s.Z)(
                      (0, o.Z)(n),
                      "pageRootClassName",
                      "order-list-page"
                    ),
                    (0, s.Z)((0, o.Z)(n), "pageContentIsFullScreen", !0),
                    (n.store = L.create((0, o.Z)(n)).store),
                    (n.state = { needSubscribe: !1, subscribeModalInfo: null }),
                    (n.pageId = p.default.isTieyou
                      ? "10650005651"
                      : "10650005650"),
                    n
                  );
                }
                return (
                  (0, r.Z)(t, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        this.checkSubscribeStatus();
                      },
                    },
                    {
                      key: "componentDidShow",
                      value: function () {
                        var e = L.getState().orderListModel.didShowNeedRefresh;
                        N.ZP.isLogin && e && oe(),
                          L.getDispatch().orderListModel.setState({
                            didShowNeedRefresh: !0,
                          }),
                          this.setState({});
                      },
                    },
                    {
                      key: "renderHeaderView",
                      value: function () {
                        return (0, ue.tZ)(v.zt, {
                          store: this.store,
                          children: (0, ue.tZ)(ai, {}),
                        });
                      },
                    },
                    {
                      key: "checkSubscribeStatus",
                      value: function () {
                        var e = this,
                          i =
                            T()(h().getStorageSync("MY_LIST_SUBSCRIBE")).diff(
                              T()(),
                              "day"
                            ) > 1;
                        p.default.isWechat &&
                          "dt" !== p.default.jetpack &&
                          !["st", "zxdj", "zxtj"].includes(p.default.jetpack) &&
                          N.ZP.isLogin &&
                          !this.state.needSubscribe &&
                          i &&
                          f.Z.getSubscribe(
                            null == ci
                              ? void 0
                              : ci.map(function (e) {
                                  return e.tempId;
                                })
                          ).then(function (i) {
                            var t = i.mainSwitch,
                              n = i.unKnownList;
                            t && Array.isArray(n) && n.length > 0
                              ? (h().setStorageSync(
                                  "MY_LIST_SUBSCRIBE",
                                  new Date()
                                ),
                                e.setState({
                                  needSubscribe: !0,
                                  subscribeModalInfo: {
                                    title: "开启提醒",
                                    desc: "高峰期购票优惠不错过，贴心通知保无忧出行",
                                    subList: ci,
                                  },
                                }))
                              : e.setState({ needSubscribe: !1 });
                          });
                      },
                    },
                    {
                      key: "onCloseSubscribleCallback",
                      value: function () {
                        this.setState({ needSubscribe: !1 });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        return (0, ue.tZ)(v.zt, {
                          store: this.store,
                          children: N.ZP.isLogin
                            ? (0, ue.BX)(ue.HY, {
                                children: [
                                  (0, ue.tZ)(g.CustomWrapper, {
                                    children: (0, ue.tZ)(me, {}),
                                  }),
                                  (0, ue.tZ)(ii, {}),
                                  (0, ue.tZ)(ri, {}),
                                  (0, ue.tZ)(w.Z, {
                                    show: this.state.needSubscribe,
                                    info: this.state.subscribeModalInfo,
                                    onSuccess: this.onCloseSubscribleCallback,
                                    onFail: this.onCloseSubscribleCallback,
                                    onCancel: this.onCloseSubscribleCallback,
                                    onProcess: this.onCloseSubscribleCallback,
                                  }),
                                ],
                              })
                            : (0, ue.tZ)(oi, {
                                checkSubscribeStatus: this.checkSubscribeStatus,
                              }),
                        });
                      },
                    },
                  ]),
                  t
                );
              })(d.Component))
            ) || ei;
        Page(
          (0, n.createPageConfig)(
            li,
            "pages/myctrip/list/list",
            { root: { cn: [] } },
            {
              navigationBarBackgroundColor: "#fff",
              backgroundColorTop: "#EFEFEF",
              navigationBarTitleText: "订单",
              navigationBarTextStyle: "black",
              navigationStyle: "custom",
            } || {}
          )
        );
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (i) {
          return e((e.s = i));
        })(87628);
      }),
        e.O();
    },
  ]);
})();
