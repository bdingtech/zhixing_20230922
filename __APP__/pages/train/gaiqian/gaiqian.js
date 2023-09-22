!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [15807],
      {
        82200: function (e, a, t) {
          var i,
            n = t(32180),
            s = t(57042),
            o = t(24460),
            c = t(21867),
            r = t(86066),
            l = t(45023),
            d = t(298),
            h = t(52500),
            f = t(71515),
            g = (t(92954), t(8271)),
            m = t.n(g),
            u = t(48792),
            p = t.n(u),
            T = t(79792),
            D = t(3205),
            C = t(20592),
            y = t(49120),
            v = t(25391),
            w = t(81957),
            b = t(48813),
            N = T.default.isTieyou,
            Z = "YYYY-MM-DD",
            S = {
              pageId: N ? "10650023090" : "10650023089",
              data: {
                isTieyou: N,
                fromStation: "",
                toStation: "",
                fromDate: "",
                passengerList: [],
                canChangeToCity: !0,
                disableGaiQian: !1,
              },
              onLoad: function (e) {
                var a = e.data,
                  t = void 0 === a ? {} : a;
                (this.fromDate = t.fromDate || ""),
                  (this.fromTime = t.fromTime || ""),
                  (this.canChangeStation = 1 == t.canChangeStation),
                  (this.isPointReschedule = !!t.isPointReschedule),
                  (this.changeStationDesc = t.changeStationDesc);
                var i =
                  m()(
                    "".concat(t.fromDate || "", " ").concat(t.fromTime || "")
                  ).diff(m()(), "second") <= 0;
                this.setData(
                  (0, d.Z)((0, d.Z)({}, t), {}, { disableGaiQian: i })
                ),
                  this.getPassengerList(),
                  this.checkCanChangeToCity();
              },
              onReady: function () {},
              onShow: function () {},
              onHide: function () {},
              onUnload: function () {},
              onPullDownRefresh: function () {},
              onReachBottom: function () {},
              onShareAppMessage: function () {},
              getPassengerList: function () {
                var e = C.ET.rescheduleInfo,
                  a = e.isSelfResign,
                  t = void 0 !== a && a,
                  i = e.orderInfo.ticketInfos,
                  n = void 0 === i ? [] : i;
                if (Array.isArray(n)) {
                  var s = n
                    .map(function (e) {
                      return {
                        passengerName: e.passengerName,
                        passengerType: e.passengerType,
                        selected: e.selected,
                        canSelected: !t || e.selected,
                      };
                    })
                    .filter(function (e) {
                      return e.canSelected;
                    });
                  this.setData({ passengerList: s });
                }
              },
              checkCanChangeToCity: function () {
                var e = this.fromDate.replace(/\-/g, "/") + " " + this.fromTime;
                (new Date(e).getTime() - Date.now() <= 1728e5 ||
                  !this.canChangeStation) &&
                  this.setData({ canChangeToCity: !1 });
              },
              selectPassenger: function (e) {
                var a = e.currentTarget.dataset.index,
                  t = void 0 === a ? 0 : a,
                  i = this.data.passengerList,
                  n = void 0 === i ? [] : i;
                (n[t].selected = !n[t].selected),
                  this.setData(
                    (0, l.Z)({}, "passengerList[".concat(t, "]"), n[t])
                  );
              },
              chooseStation: function () {
                var e = this;
                if (!this.data.disableGaiQian)
                  return this.data.canChangeToCity
                    ? void D.Z.trainCity({ title: "到达" }, function (a) {
                        e.setData({ toStation: a.stationName });
                      })
                    : (0, y.showModal)(
                        this.changeStationDesc ||
                          "根据铁路局规定，距离出发时间48小时内，不可变更到达城市，仅可改签原线路车次"
                      );
              },
              chooseDate: function () {
                var e = this,
                  a = this.data,
                  t = a.fromDate,
                  i = a.fromTime;
                if (!a.disableGaiQian) {
                  var n = m()(),
                    s =
                      m()("".concat(t, " ").concat(i)).diff(n, "hour") > 48
                        ? m()()
                            .add(C.ET.preSaleDays - 1, "day")
                            .format(Z)
                        : t;
                  D.Z.calendar(
                    {
                      chooseDate: this.data.fromDate,
                      beginDate: m()().format(Z),
                      endDate: s,
                      title: "选择日期",
                      bu: "train",
                      queryParams: {},
                      info: v.ZP.getCalendarInfo(s),
                      tips: "",
                    },
                    function (a) {
                      return e.setFromDate(a);
                    }
                  );
                }
              },
              setFromDate: function (e) {
                this.canSetFromDate(e) &&
                  this.setData({ fromDate: m()(e).format(Z) });
              },
              canSetFromDate: function (e) {
                var a = e.replace(/\-/g, "/"),
                  t = this.fromDate.replace(/\-/g, "/");
                return !(
                  !this.data.canChangeToCity &&
                  new Date(a).getTime() - new Date(t).getTime() > 0 &&
                  ((0, y.showModal)(
                    "距离出发时间48小时内或者是跨境列车，不可变更到达城市，仅可改签原线路车次"
                  ),
                  1)
                );
              },
              gotoTrainListPage: function () {
                var e = this.data,
                  a = e.fromStation,
                  t = void 0 === a ? "" : a,
                  i = e.toStation,
                  n = void 0 === i ? "" : i,
                  s = e.fromDate,
                  o = void 0 === s ? "" : s,
                  c = e.fromTime,
                  r = void 0 === c ? "" : c,
                  l = e.passengerList,
                  d = void 0 === l ? [] : l,
                  h = e.disableGaiQian,
                  f = e.isPointReschedule;
                if (this.canGotoTrainListPage()) {
                  Array.isArray(C.ET.rescheduleInfo.orderInfo.ticketInfos) &&
                    C.ET.rescheduleInfo.orderInfo.ticketInfos.forEach(function (
                      e,
                      a
                    ) {
                      d.forEach(function (t, i) {
                        i === a &&
                          t.passengerName === e.passengerName &&
                          t.passengerType === e.passengerType &&
                          (e.selected = t.selected);
                      });
                    });
                  var g = "../list/list?dstation="
                    .concat(t, "&astation=")
                    .concat(n, "&date=")
                    .concat(o, "&fromTime=")
                    .concat(
                      r,
                      "&isGaotieOnly=false&isReschedule=1&isRescheduleDisableChooseDate="
                    )
                    .concat(h ? 1 : 0, "&isPointReschedule=")
                    .concat(f ? 1 : 0, "&fromPage=rescheduleSet");
                  this.navigateTo({ url: g });
                }
              },
              canGotoTrainListPage: function () {
                var e = this.data.passengerList,
                  a = void 0 === e ? [] : e,
                  t = a.filter(function (e) {
                    return e.selected;
                  });
                return !Array.isArray(a) || a.length < 1
                  ? ((0, y.showToast)("网络错误，请稍后重试"), !1)
                  : 0 !== t.length ||
                      ((0, y.showToast)("请至少选择一人进行改签"), !1);
              },
            },
            k =
              (0, w.h)()(
                (i =
                  p()(S)(
                    (i = (function (e) {
                      (0, c.Z)(t, e);
                      var a = (0, r.Z)(t);
                      function t() {
                        return (0, s.Z)(this, t), a.apply(this, arguments);
                      }
                      return (
                        (0, o.Z)(t, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                a = this.data,
                                t = a.fromStation,
                                i = a.toStation,
                                n = a.fromDate,
                                s = a.passengerList,
                                o = a.disableGaiQian,
                                c = a.canChangeToCity;
                              return (0, b.tZ)(f.Block, {
                                children: (0, b.BX)(f.View, {
                                  className: "page",
                                  children: [
                                    (0, b.BX)(f.View, {
                                      className: "gaiqian-box",
                                      children: [
                                        (0, b.BX)(f.View, {
                                          className: "gaiqian-list",
                                          children: [
                                            (0, b.BX)(f.View, {
                                              className: "item",
                                              children: [
                                                (0, b.tZ)(f.View, {
                                                  className: "label",
                                                  children: "出发地",
                                                }),
                                                (0, b.tZ)(f.View, {
                                                  className: "cont disabled",
                                                  children: t,
                                                }),
                                              ],
                                            }),
                                            (0, b.BX)(f.View, {
                                              className: "item",
                                              id: "AKCw",
                                              onClick: this.chooseStation,
                                              children: [
                                                (0, b.tZ)(f.View, {
                                                  className: "label",
                                                  children: "目的地",
                                                }),
                                                (0, b.tZ)(f.View, {
                                                  className: "cont ".concat(
                                                    c ? "" : "disabled"
                                                  ),
                                                  children: i,
                                                }),
                                                o
                                                  ? (0, b.tZ)(f.Text, {
                                                      className:
                                                        "disable-gaiqian",
                                                      children: "不可改",
                                                    })
                                                  : (0, b.tZ)(f.Text, {
                                                      className:
                                                        "iconfont ifont-arr",
                                                    }),
                                              ],
                                            }),
                                            (0, b.BX)(f.View, {
                                              className: "item",
                                              id: "AKCx",
                                              onClick: this.chooseDate,
                                              children: [
                                                (0, b.tZ)(f.View, {
                                                  className: "label",
                                                  children: "出发日期",
                                                }),
                                                (0, b.tZ)(f.View, {
                                                  className: "cont",
                                                  children: n,
                                                }),
                                                o
                                                  ? (0, b.tZ)(f.Text, {
                                                      className:
                                                        "disable-gaiqian",
                                                      children: "不可改",
                                                    })
                                                  : (0, b.tZ)(f.Text, {
                                                      className:
                                                        "iconfont ifont-arr",
                                                    }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        s.length > 0 &&
                                          (0, b.tZ)(f.View, {
                                            className: "gaiqian-list",
                                            children: s.map(function (a, t) {
                                              return (0,
                                              b.BX)(f.View, { className: "item", children: [(0, b.BX)(f.View, { className: "cont", children: [a.passengerName, (0, b.tZ)(f.Text, { className: "tag-type", children: a.passengerType })] }), (0, b.tZ)(f.Text, { className: "iconfont " + (a.selected ? "ifont-checkboxed color-primary" : "ifont-checkbox"), "data-index": t, id: "AKCy", onClick: e.selectPassenger, "data-ubt-key": "wx_gaiqian_selectPassenger" })] }, "index");
                                            }),
                                          }),
                                      ],
                                    }),
                                    (0, b.tZ)(f.View, {
                                      className: "gaiqian-botm",
                                      children: (0, b.tZ)(f.Button, {
                                        className: "btn-primary",
                                        id: "AKCz",
                                        onClick: this.gotoTrainListPage,
                                        "data-ubt-key":
                                          "wx_gaiqian_gotoTrainListPage",
                                        children: "查询",
                                      }),
                                    }),
                                  ],
                                }),
                              });
                            },
                          },
                        ]),
                        t
                      );
                    })(h.default.Component))
                  ) || i)
              ) || i;
          (k.enableShareAppMessage = !0),
            Page(
              (0, n.createPageConfig)(
                k,
                "pages/train/gaiqian/gaiqian",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "改签",
                  navigationBarBackgroundColor: "#0066E6",
                  backgroundColorTop: "#0066E6",
                  backgroundColorBottom: "#EFEFEF",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (a) {
            return e((e.s = a));
          })(82200);
        }),
          e.O();
      },
    ]);
})();
