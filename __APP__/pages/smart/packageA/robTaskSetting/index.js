!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [33274],
      {
        12270: function (t, e, n) {
          var i = n(32180),
            o = n(79301),
            a = n(95308),
            r = n(57042),
            l = n(24460),
            s = n(81876),
            u = n(21867),
            c = n(86066),
            d = n(45023),
            v = n(52500),
            m = n(92954),
            f = n.n(m),
            p = n(71515),
            h = n(81957),
            S = n(79792),
            b = n(38911),
            k = n(93761),
            g = n(10741),
            T = n(49120),
            N = n(79910),
            w = n(25391),
            Z = n(91006),
            C = n.n(Z),
            D = n(48813),
            I = function (t) {
              var e = t.totalTaskCount,
                n = t.doneTaskCount,
                i = t.title,
                o = t.subTitle,
                a = t.taskModuleList;
              if (!a || 0 === (null == a ? void 0 : a.length)) return null;
              var r = e - n;
              return (0, D.tZ)(p.View, {
                className: "task-con",
                children: (0, D.tZ)(p.View, {
                  className: "task-title",
                  children: (0, D.BX)(p.View, {
                    children: [
                      r > 0 &&
                        (0, D.BX)(p.View, {
                          className: "flex",
                          children: [
                            (0, D.tZ)(p.View, {
                              className: "task-num",
                              children: null == i ? void 0 : i[0],
                            }),
                            (0, D.tZ)(p.View, {
                              className: "task-desc",
                              children: null == i ? void 0 : i[1],
                            }),
                          ],
                        }),
                      0 === r &&
                        (0, D.tZ)(p.View, {
                          className: "task-desc",
                          children: null == i ? void 0 : i.join(""),
                        }),
                      (0, D.tZ)(p.View, {
                        className: "task-subdesc",
                        children: null == o ? void 0 : o.join(""),
                      }),
                    ],
                  }),
                }),
              });
            };
          (I.propTypes = {
            totalTaskCount: C().number,
            doneTaskCount: C().number,
            title: C().array,
            subTitle: C().array,
            titleIcon: C().string,
            taskModuleList: C().array,
          }),
            (I.defaultProps = {
              totalTaskCount: 0,
              doneTaskCount: 0,
              title: [],
              subTitle: [],
              titleIcon: "",
              taskModuleList: [],
            });
          var A = (0, v.memo)(I),
            y = S.default.isTieyou,
            L = function (t) {
              var e,
                n,
                i = t.taskModuleList,
                o = t.onOptAction,
                a =
                  null == i
                    ? void 0
                    : i.find(function (t) {
                        return 0 === t.moduleType;
                      });
              if (!a) return null;
              var r =
                null == a || null === (e = a.grabQuickenTasks) || void 0 === e
                  ? void 0
                  : e.find(function (t) {
                      return 0 === t.taskType;
                    });
              return r
                ? (0, D.BX)(p.View, {
                    className: "rob-speed",
                    children: [
                      (0, D.tZ)(p.View, {
                        className: "speed-title",
                        children: null == a ? void 0 : a.moduleName,
                      }),
                      (0, D.BX)(p.View, {
                        className: "share-speed flex-align-items-center",
                        children: [
                          (0, D.tZ)(p.Image, {
                            src: null == r ? void 0 : r.icon,
                            className: "speed-icon",
                          }),
                          (0, D.BX)(p.View, {
                            className: "flex-1",
                            children: [
                              (0, D.tZ)(p.View, {
                                className: "speed-desc",
                                children: null == r ? void 0 : r.taskName,
                              }),
                              (0, D.tZ)(p.View, {
                                className: "speed-val",
                                children:
                                  null == r ||
                                  null === (n = r.desc) ||
                                  void 0 === n
                                    ? void 0
                                    : n[0],
                              }),
                            ],
                          }),
                          (0, D.tZ)(p.Button, {
                            id: "ANCG",
                            onClick: o,
                            className: ""
                              .concat(
                                0 === (null == r ? void 0 : r.taskStatus)
                                  ? "invite-btn invited-btn"
                                  : "invite-btn",
                                " "
                              )
                              .concat(y, " ? 'ty': 'zx'"),
                            children: null == r ? void 0 : r.action,
                          }),
                        ],
                      }),
                    ],
                  })
                : null;
            };
          (L.propTypes = { taskModuleList: C().array, onOptAction: C().func }),
            (L.defaultProps = {
              taskModuleList: [],
              onOptAction: function () {},
            });
          var V = (0, v.memo)(L),
            x = S.default.isTieyou,
            O = function (t) {
              var e = t.taskModuleList,
                n = t.onOptAction,
                i =
                  null == e
                    ? void 0
                    : e.find(function (t) {
                        return 1 === t.moduleType;
                      });
              if (!i) return null;
              var o = null == i ? void 0 : i.grabQuickenTasks;
              return null != o && o.length
                ? (0, D.BX)(p.View, {
                    className: "alertnative-con",
                    children: [
                      (0, D.BX)(p.View, {
                        className: "title-con",
                        children: [
                          (0, D.tZ)(p.View, {
                            className: "flex-1 txt",
                            children: null == i ? void 0 : i.moduleName,
                          }),
                          !(null == i || !i.bothOptimizeFlag) &&
                            (0, D.tZ)(p.Image, {
                              className: "guide-icon",
                              src: null == i ? void 0 : i.bothOptimizeIcon,
                            }),
                          !(null == i || !i.bothOptimizeFlag) &&
                            (0, D.tZ)(p.Text, {
                              className: "sub-txt",
                              children:
                                null == i ? void 0 : i.bothOptimizeContent,
                            }),
                        ],
                      }),
                      (0, D.tZ)(p.View, {
                        className: "plans-con",
                        children:
                          null == o
                            ? void 0
                            : o.map(function (t, e) {
                                var i, o;
                                return (0, D.BX)(
                                  p.View,
                                  {
                                    className: "plan-item",
                                    children: [
                                      (0, D.tZ)(p.Image, {
                                        className: "plan-icon",
                                        src: null == t ? void 0 : t.icon,
                                      }),
                                      (0, D.BX)(p.View, {
                                        className: "flex-1",
                                        children: [
                                          (0, D.tZ)(p.View, {
                                            className: "plan-title",
                                            children:
                                              null == t ? void 0 : t.taskName,
                                          }),
                                          (null == t ||
                                          null === (i = t.desc) ||
                                          void 0 === i
                                            ? void 0
                                            : i.length) > 0 &&
                                            (0, D.tZ)(p.View, {
                                              className: "plan-desc ".concat(
                                                0 ===
                                                  (null == t
                                                    ? void 0
                                                    : t.taskStatus)
                                                  ? "color-primary"
                                                  : ""
                                              ),
                                              children:
                                                null == t ||
                                                null === (o = t.desc) ||
                                                void 0 === o
                                                  ? void 0
                                                  : o[0],
                                            }),
                                        ],
                                      }),
                                      (0, D.tZ)(p.Button, {
                                        id: "ANCC",
                                        onClick: function () {
                                          return n(
                                            null == t ? void 0 : t.taskType
                                          );
                                        },
                                        className: ""
                                          .concat(
                                            0 ===
                                              (null == t
                                                ? void 0
                                                : t.taskStatus)
                                              ? "add-btn added-btn"
                                              : "add-btn",
                                            "  "
                                          )
                                          .concat(x, " ? 'ty': 'zx'"),
                                        children: null == t ? void 0 : t.action,
                                      }),
                                    ],
                                  },
                                  "task-item-".concat(e)
                                );
                              }),
                      }),
                    ],
                  })
                : null;
            };
          (O.propTypes = { taskModuleList: C().array, onOptAction: C().func }),
            (O.defaultProps = {
              taskModuleList: [],
              onOptAction: function () {},
            });
          var M = (0, v.memo)(O),
            B = n(90129),
            P = n(34229),
            z = function (t) {
              var e = t.isShow,
                n = t.close,
                i = t.seatList,
                o = void 0 === i ? [] : i,
                a = t.chosenSeats,
                r = void 0 === a ? [] : a,
                l = t.originChosenSeats,
                s = void 0 === l ? [] : l,
                u = t.confirm,
                c = (0, v.useState)([]),
                d = (0, B.Z)(c, 2),
                m = d[0],
                f = d[1];
              (0, v.useEffect)(
                function () {
                  var t = [];
                  (null == r ? void 0 : r.length) > 0 &&
                    r.forEach(function (e) {
                      null == o ||
                        o.forEach(function (n) {
                          (null == n ? void 0 : n.name) ===
                            (null == e ? void 0 : e.name) && t.push(n);
                        });
                    }),
                    f(t);
                },
                [r, o]
              );
              var h = function (t) {
                var e = 0;
                if ((null == m ? void 0 : m.length) > 0)
                  for (; e < m.length; e++) {
                    var n = m[e];
                    if (
                      (null == n ? void 0 : n.name) ===
                      (null == t ? void 0 : t.name)
                    )
                      return !0;
                  }
                return !1;
              };
              return (0, D.BX)(P.ZtDrawer, {
                show: e,
                isDefineHead: !0,
                className: "train-robseats-dialog",
                onWrapClose: n,
                children: [
                  (0, D.BX)(p.View, {
                    className: "cui-hd",
                    children: [
                      (0, D.tZ)(p.View, {
                        className: "cell cancel-btn",
                        id: "ANCD",
                        onClick: n,
                        children: "取消",
                      }),
                      (0, D.tZ)(p.View, {
                        className: "center-tit",
                        children: "选择座席(建议多选)",
                      }),
                      (0, D.tZ)(p.View, {
                        className: "ok-btn",
                        id: "ANCE",
                        onClick: function () {
                          return u(m);
                        },
                        children: "确定",
                      }),
                    ],
                  }),
                  (0, D.BX)(p.View, {
                    className: "cui-bg",
                    children: [
                      (0, D.tZ)(p.View, {
                        className: "book-tips",
                        children:
                          "多选几个座席，抢票成功率更高。选择后暂收最高票价，出票后根据情况退还差额",
                      }),
                      (0, D.tZ)(p.View, {
                        style: "border-bottom-width: 0;",
                        className: "train-list seat-list",
                        children:
                          null == o
                            ? void 0
                            : o.map(function (t, e) {
                                return (0, D.BX)(
                                  p.View,
                                  {
                                    className: "item",
                                    id: "ANCF",
                                    onClick: function () {
                                      return (function (t) {
                                        if (
                                          h(t) &&
                                          s.some(function (e) {
                                            return e.name === t.name;
                                          })
                                        )
                                          (0, T.showToast)("不可取消已选座席");
                                        else {
                                          for (
                                            var e = m, n = [], i = 0, o = !1;
                                            i < (null == e ? void 0 : e.length);
                                            i++
                                          ) {
                                            var a = e[i];
                                            (null == a ? void 0 : a.name) ===
                                            (null == t ? void 0 : t.name)
                                              ? (o = !0)
                                              : n.push(a);
                                          }
                                          o || n.push(t), f(n);
                                        }
                                      })(t);
                                    },
                                    children: [
                                      (0, D.BX)(p.View, {
                                        className: "left flex-1",
                                        children: [
                                          (0, D.tZ)(p.View, {
                                            children:
                                              null == t ? void 0 : t.name,
                                          }),
                                          "无座" ===
                                            (null == t ? void 0 : t.name) &&
                                            (0, D.tZ)(p.View, {
                                              className: "no-seat",
                                              children: "成功率高",
                                            }),
                                        ],
                                      }),
                                      (0, D.BX)(p.View, {
                                        className: "middle flex-1",
                                        children: [
                                          "¥",
                                          null == t ? void 0 : t.price,
                                        ],
                                      }),
                                      (0, D.tZ)(p.Text, {
                                        className:
                                          "iconfont flex-1 " +
                                          (h(t)
                                            ? "ifont-checkboxed color-primary"
                                            : "ifont-checkbox"),
                                      }),
                                    ],
                                  },
                                  "seat_" + e
                                );
                              }),
                      }),
                    ],
                  }),
                ],
              });
            };
          (z.propTypes = {
            seatList: C().array,
            chosenSeats: C().array,
            isShow: C().bool,
            confirm: C().func,
            close: C().func,
            originChosenSeats: C().array,
          }),
            (z.defaultProps = {
              seatList: [],
              chosenSeats: [],
              originChosenSeats: [],
              isShow: !1,
              confirm: function () {},
              close: function () {},
            });
          var X,
            q = (0, v.memo)(z),
            E = n(38561),
            F = S.default.isTieyou,
            j =
              (0, h.h)()(
                (X = (function (t) {
                  (0, u.Z)(n, t);
                  var e = (0, c.Z)(n);
                  function n(t) {
                    var i;
                    return (
                      (0, r.Z)(this, n),
                      (i = e.call(this, t)),
                      (0, d.Z)(
                        (0, s.Z)(i),
                        "queryPageData",
                        (function () {
                          var t = (0, a.Z)(
                            (0, o.Z)().mark(function t(e) {
                              var n, a;
                              return (0, o.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (i.isInit = !1),
                                          (t.prev = 1),
                                          (t.next = 4),
                                          (0, b.$w)({
                                            bizOrderNumber:
                                              null == e
                                                ? void 0
                                                : e.bizOrderBumber,
                                          })
                                        );
                                      case 4:
                                        1 ===
                                          (null == (a = t.sent)
                                            ? void 0
                                            : a.resultCode) &&
                                        (null == a ||
                                        null === (n = a.taskModules) ||
                                        void 0 === n
                                          ? void 0
                                          : n.length) > 0
                                          ? i.setState({
                                              title:
                                                null == a ? void 0 : a.title,
                                              subTitle:
                                                (null == a
                                                  ? void 0
                                                  : a.subTitle) || "",
                                              titleIcon:
                                                null == a
                                                  ? void 0
                                                  : a.titleIcon,
                                              totalTaskCount:
                                                (null == a
                                                  ? void 0
                                                  : a.totalTaskCount) || 0,
                                              doneTaskCount:
                                                (null == a
                                                  ? void 0
                                                  : a.doneTaskCount) || 0,
                                              taskModuleList:
                                                (null == a
                                                  ? void 0
                                                  : a.taskModules) || [],
                                              markedTicketInfo:
                                                (null == a
                                                  ? void 0
                                                  : a.markedTicketInfo) || {},
                                            })
                                          : f().showModal({
                                              title: "温馨提示",
                                              content:
                                                (null == a
                                                  ? void 0
                                                  : a.resultMessage) ||
                                                "数据获取失败",
                                              confirmText: "我知道了",
                                              showCancel: !1,
                                              success: function (t) {
                                                t.confirm, i.navigateBack();
                                              },
                                            }),
                                          (t.next = 11);
                                        break;
                                      case 8:
                                        (t.prev = 8),
                                          (t.t0 = t.catch(1)),
                                          console.log(t.t0);
                                      case 11:
                                        return (t.prev = 11), t.finish(11);
                                      case 13:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                null,
                                [[1, 8, 11, 13]]
                              );
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()
                      ),
                      (0, d.Z)((0, s.Z)(i), "goToFriendSpeedPage", function () {
                        var t = i.state.bizOrderNumber;
                        i.navigateTo({
                          url: w.ZP.getTrainGrabOrderDetailUrl(t),
                        });
                      }),
                      (0, d.Z)((0, s.Z)(i), "addAlertNative", function (t) {
                        1 === t
                          ? i.addMoreTrainAction()
                          : 2 === t
                          ? i.addMoreSeatsAction()
                          : 3 === t && i.addMoreCrossAction();
                      }),
                      (0, d.Z)((0, s.Z)(i), "addMoreTrainAction", function () {
                        var t,
                          e,
                          n = i.state,
                          o = n.tripLimit,
                          a = n.tripInfo,
                          r = n.markedTicketInfo,
                          l = (
                            (null == r ||
                            null === (t = r.trainStationInfos) ||
                            void 0 === t
                              ? void 0
                              : t.map(function (t) {
                                  return ""
                                    .concat(
                                      null == t ? void 0 : t.departStation,
                                      "-"
                                    )
                                    .concat(
                                      null == t ? void 0 : t.trainNumber,
                                      "-"
                                    )
                                    .concat(
                                      null == t ? void 0 : t.arriveStation
                                    );
                                })) || []
                          ).join(","),
                          s = (null == r ? void 0 : r.trainNos) || "",
                          u = (null == a ? void 0 : a.fromStation) || "",
                          c = (null == a ? void 0 : a.toStation) || "",
                          d = null == a ? void 0 : a.fromDate,
                          v = null == r ? void 0 : r.seats,
                          m =
                            null == r ||
                            null === (e = r.trainStationInfos) ||
                            void 0 === e
                              ? void 0
                              : e.map(function (t) {
                                  return {
                                    ArriveStation:
                                      null == t ? void 0 : t.arriveStation,
                                    TrainNumber:
                                      null == t ? void 0 : t.trainNumber,
                                    DepartStation:
                                      null == t ? void 0 : t.departStation,
                                  };
                                }),
                          f = {
                            minDepartTime:
                              null == o ? void 0 : o.limitDepartTime,
                            maxArriveTime:
                              null == o ? void 0 : o.limitArriveTime,
                            limitDepart:
                              1 ==
                              (null == o ? void 0 : o.limitDepartStationFlag),
                            limitArrive:
                              1 ==
                              (null == o ? void 0 : o.limitArriveStationFlag),
                          };
                        i.navigateTo({
                          url: "/pages/trainRob/otherlist/otherlist?excludeTrainStrs="
                            .concat(encodeURIComponent(l), "&TrainNumber=")
                            .concat(s, "&DepartStation=")
                            .concat(u, "&ArriveStation=")
                            .concat(c, "&DepartureDates=")
                            .concat("", "&DepartureDate=")
                            .concat(d, "&SeatName=")
                            .concat(v, "&limitConditions=")
                            .concat(JSON.stringify(f)),
                          data: { chosenTrainList: m, fromPage: "setgrab" },
                          callback: function (t) {
                            var e,
                              n =
                                (null == t ? void 0 : t.chosenTrainList) || [],
                              i =
                                null == n
                                  ? void 0
                                  : n.reduce(function (t, e) {
                                      return t && null != e && e.TrainNumber
                                        ? ""
                                            .concat(t, ",")
                                            .concat(
                                              null == e ? void 0 : e.TrainNumber
                                            )
                                        : null == e
                                        ? void 0
                                        : e.TrainNumber;
                                    }, ""),
                              o = null == i ? void 0 : i.split(","),
                              l = [];
                            null == n ||
                              n.forEach(function (t) {
                                l.push({
                                  trainNumber:
                                    null == t ? void 0 : t.TrainNumber,
                                  departStation:
                                    null == t ? void 0 : t.DepartStation,
                                  arriveStation:
                                    null == t ? void 0 : t.ArriveStation,
                                });
                              });
                            var s =
                              null == r ||
                              null === (e = r.trainNos) ||
                              void 0 === e
                                ? void 0
                                : e.split(",");
                            if ((0, E.pQ)(s, o))
                              (0, T.showToast)({
                                title: "不能删除已选车次",
                                duration: 2e3,
                              });
                            else if ((s.sort(), o.sort(), !N._.isEqual(s, o))) {
                              var u = {
                                bizOrderNumber:
                                  null == a ? void 0 : a.bizOrderBumber,
                                trainInfo: {
                                  trainNo: i,
                                  seatName: null == r ? void 0 : r.seats,
                                  fromDate: null == a ? void 0 : a.fromDate,
                                  trainStationInfos: l,
                                },
                                crossStationInfos: [],
                                crossStationFlag: 0,
                              };
                              this.updateOrderDetail({
                                query: u,
                                successTip: "车次添加成功",
                                changeType: 1,
                              });
                            }
                          },
                        });
                      }),
                      (0, d.Z)(
                        (0, s.Z)(i),
                        "addMoreSeatsAction",
                        (0, a.Z)(
                          (0, o.Z)().mark(function t() {
                            var e, n, a, r, l, s, u, c, d, v, m, f;
                            return (0, o.Z)().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (n = i.state),
                                        (a = n.tripInfo),
                                        (r = n.markedTicketInfo),
                                        (l =
                                          null == r ||
                                          null === (e = r.seats) ||
                                          void 0 === e
                                            ? void 0
                                            : e.split(",")),
                                        (s = []),
                                        l.forEach(function (t) {
                                          return s.push({ name: t });
                                        }),
                                        (u = {
                                          DepartStation:
                                            null == a ? void 0 : a.fromStation,
                                          ArriveStation:
                                            null == a ? void 0 : a.toStation,
                                          DepartDate:
                                            null == a ? void 0 : a.fromDate,
                                        }),
                                        (t.prev = 5),
                                        (0, T.showLoading)("正在获取数据..."),
                                        (t.next = 9),
                                        w.ZP.getTrainList(u)
                                      );
                                    case 9:
                                      (null == (c = t.sent)
                                        ? void 0
                                        : c.length) > 0
                                        ? ((v =
                                            null == r ||
                                            null === (d = r.trainNos) ||
                                            void 0 === d
                                              ? void 0
                                              : d.split(",")),
                                          (m = c.filter(function (t) {
                                            return (
                                              (null == v
                                                ? void 0
                                                : v.includes(
                                                    null == t
                                                      ? void 0
                                                      : t.TrainNumber
                                                  )) &&
                                              (null == t
                                                ? void 0
                                                : t.DepartStation) ===
                                                (null == a
                                                  ? void 0
                                                  : a.fromStation) &&
                                              (null == t
                                                ? void 0
                                                : t.ArriveStation) ===
                                                (null == a
                                                  ? void 0
                                                  : a.toStation)
                                            );
                                          })),
                                          (f = i.filterAllSeats(m)),
                                          i.setState({
                                            allSeatList: f,
                                            selectedSeats: s,
                                            isShowRobSeatsDialog: !0,
                                          }))
                                        : (0, T.showToast)("座席获取失败"),
                                        (t.next = 16);
                                      break;
                                    case 13:
                                      (t.prev = 13),
                                        (t.t0 = t.catch(5)),
                                        (0, T.showToast)("座席获取失败");
                                    case 16:
                                      return (
                                        (t.prev = 16),
                                        (0, T.hideLoading)(),
                                        t.finish(16)
                                      );
                                    case 19:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[5, 13, 16, 19]]
                            );
                          })
                        )
                      ),
                      (0, d.Z)((0, s.Z)(i), "updateGrabSeats", function (t) {
                        var e;
                        if (
                          (i.setState({ isShowRobSeatsDialog: !1 }),
                          null != t && t.length)
                        ) {
                          var n = i.state,
                            o = n.markedTicketInfo,
                            a = n.tripInfo,
                            r =
                              null == o ||
                              null === (e = o.seats) ||
                              void 0 === e
                                ? void 0
                                : e.split(","),
                            l =
                              null == t
                                ? void 0
                                : t.reduce(function (t, e) {
                                    return t && null != e && e.name
                                      ? ""
                                          .concat(t, ",")
                                          .concat(null == e ? void 0 : e.name)
                                      : null == e
                                      ? void 0
                                      : e.name;
                                  }, ""),
                            s = null == l ? void 0 : l.split(",");
                          if ((0, E.hc)(r, s))
                            (0, T.showToast)({
                              title: "不能删除已选座席",
                              duration: 2e3,
                            });
                          else if (!N._.isEqual(r, s)) {
                            var u = {
                              bizOrderNumber:
                                null == a ? void 0 : a.bizOrderBumber,
                              trainInfo: {
                                trainNo: null == o ? void 0 : o.trainNos,
                                seatName: l,
                                fromDate: null == a ? void 0 : a.fromDate,
                                trainStationInfos:
                                  null == o ? void 0 : o.trainStationInfos,
                              },
                              crossStationInfos: [],
                              crossStationFlag: 0,
                            };
                            i.updateOrderDetail({
                              query: u,
                              successTip: "坐席添加成功",
                              changeType: 3,
                            });
                          }
                        }
                      }),
                      (0, d.Z)((0, s.Z)(i), "addMoreCrossAction", function () {
                        var t = i.state,
                          e = t.tripInfo,
                          n = t.markedTicketInfo,
                          o = t.otherTrainsSeatsArr,
                          a = void 0 === o ? [] : o,
                          r = {
                            departStation: null == e ? void 0 : e.fromStation,
                            arriveStation: null == e ? void 0 : e.toStation,
                            departDate: (0, E.II)(
                              ((null == e ? void 0 : e.fromDate) || "").split(
                                ","
                              )
                            ),
                            alternativeTrainNums:
                              null == n ? void 0 : n.trainNos,
                            alternativeTrainSeats: null == n ? void 0 : n.seats,
                            alternativeDepartDates:
                              null == e ? void 0 : e.fromDate,
                            fromPage: 1,
                            grabOrderType: 0,
                          };
                        (0, T.showLoading)("正在跳转..."),
                          (0, g.YFh)(r)
                            .then(function (t) {
                              return 1 === (null == t ? void 0 : t.resultCode)
                                ? w.ZP.formatCrossSolutions(
                                    (null == t
                                      ? void 0
                                      : t.crossStationInfos) || [],
                                    a,
                                    (
                                      (null == n ? void 0 : n.seats) || ""
                                    ).split(",")
                                  )
                                : Promise.reject();
                            })
                            .then(function () {
                              var t,
                                o =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : [];
                              (0, T.hideLoading)();
                              var r = [],
                                l =
                                  (null == n ? void 0 : n.crossStationInfos) ||
                                  [];
                              o.forEach(function (t) {
                                var e = l.find(function (e) {
                                  return w.ZP.isSameCrossStationSolution(e, t);
                                });
                                t.isCrossStationGrabCheckoutSelected = !!e;
                              }),
                                l.forEach(function (t) {
                                  (t.disabled = !0),
                                    (t.isCrossStationGrabCheckoutSelected = !1);
                                  var e = o.find(function (e) {
                                    return w.ZP.isSameCrossStationSolution(
                                      t,
                                      e
                                    );
                                  });
                                  e ? Object.assign(e, t) : r.push(t);
                                }),
                                (null === (t = r) || void 0 === t
                                  ? void 0
                                  : t.length) > 0 &&
                                  ((r = (0, E.wS)(
                                    r,
                                    a,
                                    (
                                      (null == n ? void 0 : n.seats) || ""
                                    ).split(",")
                                  )),
                                  (o = o.concat(r))),
                                i.navigateTo({
                                  url: "/pages/trainRob/crossTrainList/crossTrainList",
                                  data: {
                                    CrossStationGrabTicketInfoList: o,
                                    originalTrain: {
                                      ArriveStation:
                                        null == e ? void 0 : e.toStation,
                                      DepartStation:
                                        null == e ? void 0 : e.fromStation,
                                    },
                                  },
                                  callback: function (t) {
                                    i.addMoreCrossCallback(t),
                                      console.log("crossTrainList cb:", t);
                                  },
                                });
                            })
                            .catch(function () {
                              (0, T.showToast)("跳转失败"),
                                (0, T.hideLoading)();
                            });
                      }),
                      (0, d.Z)(
                        (0, s.Z)(i),
                        "addMoreCrossCallback",
                        function (t) {
                          var e = i.state,
                            n = e.tripInfo,
                            o = e.markedTicketInfo,
                            a =
                              (null == t
                                ? void 0
                                : t.filter(function (t) {
                                    return t.isCrossStationGrabCheckoutSelected;
                                  })) || [];
                          if ((null == a ? void 0 : a.length) > 0) {
                            var r = [];
                            a.forEach(function (t) {
                              var e,
                                n,
                                i,
                                o,
                                a =
                                  (null == t ||
                                  null === (e = t.extraAmountInfos) ||
                                  void 0 === e ||
                                  null === (n = e[0]) ||
                                  void 0 === n
                                    ? void 0
                                    : n.successRate) || 0,
                                l =
                                  (null == t ||
                                  null === (i = t.extraAmountInfos) ||
                                  void 0 === i ||
                                  null === (o = i[0]) ||
                                  void 0 === o
                                    ? void 0
                                    : o.amount) || 0;
                              r.push({
                                extraAmount: l,
                                successRate: a,
                                recommendDepartStation:
                                  null == t ? void 0 : t.recommendDepartStation,
                                recommendArriveStation:
                                  null == t ? void 0 : t.recommendArriveStation,
                                recommendDepartCount:
                                  null == t ? void 0 : t.recommendDepartCount,
                                recommendArriveCount:
                                  null == t ? void 0 : t.recommendArriveCount,
                              });
                            });
                            var l = (0, E.I8)(
                                null == o ? void 0 : o.crossStationInfos
                              ),
                              s = !1;
                            if (l.length !== r.length) s = !0;
                            else
                              for (var u = 0; u < r.length; u++)
                                if (
                                  l[u].recommendDepartStation !==
                                    r[u].recommendDepartStation ||
                                  l[u].recommendArriveStation !==
                                    r[u].recommendArriveStation ||
                                  l[u].recommendDepartCount !==
                                    r[u].recommendDepartCount ||
                                  l[u].recommendArriveCount !==
                                    r[u].recommendArriveCount
                                ) {
                                  s = !0;
                                  break;
                                }
                            if (s)
                              for (var c = 0; c < l.length; c++) {
                                for (var d = !1, v = 0; v < r.length; v++)
                                  if (
                                    r[v].recommendDepartStation ===
                                      l[c].recommendDepartStation &&
                                    r[v].recommendArriveStation ===
                                      l[c].recommendArriveStation &&
                                    r[v].recommendDepartCount ===
                                      l[c].recommendDepartCount &&
                                    r[v].recommendArriveCount ===
                                      l[c].recommendArriveCount
                                  ) {
                                    d = !0;
                                    break;
                                  }
                                if (!d)
                                  return void (0, T.showToast)({
                                    title: "不能删除已选跨站方案",
                                    duration: 2e3,
                                  });
                              }
                            if (r.length > l.length) {
                              var m = {
                                bizOrderNumber:
                                  null == n ? void 0 : n.bizOrderBumber,
                                trainInfo: {
                                  trainNo: null == o ? void 0 : o.trainNo,
                                  seatName: null == o ? void 0 : o.seats,
                                  fromDate: null == n ? void 0 : n.fromDate,
                                  trainStationInfos:
                                    null == o ? void 0 : o.trainStationInfos,
                                },
                                crossStationInfos: r,
                                crossStationFlag: 1,
                              };
                              i.updateOrderDetail({
                                query: m,
                                successTip: "跨站方案添加成功",
                                changeType: 3,
                              });
                            }
                          }
                        }
                      ),
                      (0, d.Z)((0, s.Z)(i), "filterAllSeats", function (t) {
                        var e = [];
                        return (
                          t.map(function (t) {
                            var n;
                            (null == t ||
                            null === (n = t.SeatList) ||
                            void 0 === n
                              ? void 0
                              : n.length) > 0 &&
                              (null == t ||
                                t.SeatList.map(function (t) {
                                  e.push({
                                    name: t.SeatName,
                                    price: t.SeatPrice,
                                  });
                                }));
                          }),
                          (e = e
                            .sort(function (t, e) {
                              return t.price - e.price;
                            })
                            .reduce(function (t, e) {
                              if (0 === t.length) t.push(e);
                              else {
                                for (var n = 0; n < t.length; n++)
                                  if (t[n].name === e.name) {
                                    t[n].price < e.price &&
                                      (t[n].price = e.price);
                                    break;
                                  }
                                n >= t.length && t.push(e);
                              }
                              return t;
                            }, []))
                        );
                      }),
                      (0, d.Z)(
                        (0, s.Z)(i),
                        "updateOrderDetail",
                        (function () {
                          var t = (0, a.Z)(
                            (0, o.Z)().mark(function t(e) {
                              var n, a, r, l, s, u, c;
                              return (0, o.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (n = i.state.tripInfo),
                                          (a = e.query),
                                          (r = e.successTip),
                                          (l = void 0 === r ? "修改成功" : r),
                                          (0, T.showLoading)("优化订单中..."),
                                          (t.prev = 3),
                                          (t.next = 6),
                                          (0, b.wS)(a)
                                        );
                                      case 6:
                                        1 ===
                                        (null == (s = t.sent)
                                          ? void 0
                                          : s.resultCode)
                                          ? ((u = s.needPay),
                                            (c = s.payOrderNumber),
                                            u && c
                                              ? k.ZP.doPayment({
                                                  orderNumber: String(c),
                                                  business: "train",
                                                  title: "火车订单",
                                                })
                                                  .then(function () {
                                                    i.queryPageData(n);
                                                  })
                                                  .catch(function () {
                                                    i.queryPageData(n);
                                                  })
                                              : ((0, T.showToast)(l),
                                                i.queryPageData(n)))
                                          : (0, T.showToast)(
                                              (null == s
                                                ? void 0
                                                : s.resultMessage) || "更新失败"
                                            ),
                                          (t.next = 13);
                                        break;
                                      case 10:
                                        (t.prev = 10),
                                          (t.t0 = t.catch(3)),
                                          (0, T.showToast)("网络超时～");
                                      case 13:
                                        return (
                                          (t.prev = 13),
                                          (0, T.hideLoading)(),
                                          t.finish(13)
                                        );
                                      case 16:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                null,
                                [[3, 10, 13, 16]]
                              );
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()
                      ),
                      (i.state = {
                        tripInfo: null,
                        tripLimit: null,
                        bizOrderNumber: "",
                        taskModuleList: [],
                        markedTicketInfo: {},
                        totalTaskCount: 0,
                        doneTaskCount: 0,
                        title: [],
                        subTitle: [],
                        titleIcon: "",
                        allSeatList: [],
                        selectedSeats: [],
                        isShowRobSeatsDialog: !1,
                      }),
                      (i.isInit = !0),
                      i
                    );
                  }
                  return (
                    (0, l.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t,
                            e,
                            n,
                            i =
                              (null === (t = (0, m.getCurrentInstance)()) ||
                              void 0 === t ||
                              null === (e = t.router) ||
                              void 0 === e ||
                              null === (n = e.params) ||
                              void 0 === n
                                ? void 0
                                : n.data) || {},
                            o = i.tripInfo,
                            a = i.tripLimit;
                          this.setState({
                            tripInfo: o,
                            tripLimit: a,
                            bizOrderNumber:
                              (null == o ? void 0 : o.bizOrderBumber) || "",
                          });
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var t = this.state.tripInfo;
                          this.queryPageData(t);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this,
                            e = this.state,
                            n = e.title,
                            i = void 0 === n ? [] : n,
                            o = e.totalTaskCount,
                            a = void 0 === o ? 0 : o,
                            r = e.doneTaskCount,
                            l = void 0 === r ? 0 : r,
                            s = e.subTitle,
                            u = void 0 === s ? "" : s,
                            c = e.titleIcon,
                            d = e.taskModuleList,
                            v = void 0 === d ? [] : d,
                            m = e.allSeatList,
                            f = e.selectedSeats,
                            h = e.isShowRobSeatsDialog,
                            S = F ? "ty" : "zx";
                          return (0, D.BX)(p.View, {
                            className: "rob-task-setting-page",
                            children: [
                              (0, D.tZ)(p.View, {
                                className: "".concat(S, " arc-header"),
                              }),
                              (0, D.tZ)(p.View, {
                                className: "".concat(S, " arc"),
                              }),
                              (0, D.BX)(p.View, {
                                className: "content",
                                children: [
                                  (0, D.tZ)(A, {
                                    title: i,
                                    totalTaskCount: a,
                                    doneTaskCount: l,
                                    subTitle: u,
                                    titleIcon: c,
                                    taskModuleList: v,
                                  }),
                                  (0, D.tZ)(V, {
                                    taskModuleList: v,
                                    onOptAction: this.goToFriendSpeedPage,
                                  }),
                                  (0, D.tZ)(M, {
                                    taskModuleList: v,
                                    onOptAction: this.addAlertNative,
                                  }),
                                  (0, D.tZ)(q, {
                                    isShow: h,
                                    seatList: m,
                                    chosenSeats: f,
                                    originChosenSeats: (0, E.I8)(f),
                                    close: function () {
                                      return t.setState({
                                        isShowRobSeatsDialog: !1,
                                      });
                                    },
                                    confirm: this.updateGrabSeats,
                                  }),
                                ],
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(v.Component))
              ) || X;
          Page(
            (0, i.createPageConfig)(
              j,
              "pages/smart/packageA/robTaskSetting/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "抢票诊断",
                backgroundColor: "#0066E6",
                backgroundColorBottom: "#efefef",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(
          0,
          [5572, 3322, 36332, 95854, 71229, 19559, 11216, 68592],
          function () {
            return (function (e) {
              return t((t.s = e));
            })(12270);
          }
        ),
          t.O();
      },
    ]);
})();
