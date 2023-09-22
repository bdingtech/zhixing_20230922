!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [85279],
      {
        64130: function (t, e, i) {
          var n = i(32180),
            a = i(57042),
            o = i(24460),
            r = i(81876),
            s = i(21867),
            c = i(86066),
            l = i(45023),
            m = i(52500),
            d = i(92954),
            u = i.n(d),
            h = i(71515),
            N = i(58374),
            f = i(23577),
            w = i(48813),
            Z = (function (t) {
              (0, s.Z)(i, t);
              var e = (0, c.Z)(i);
              function i(t) {
                var n;
                return (
                  (0, a.Z)(this, i),
                  (n = e.call(this, t)),
                  (0, l.Z)((0, r.Z)(n), "pageId", "10650084290"),
                  (0, l.Z)((0, r.Z)(n), "renderLine", function (t, e) {
                    return t
                      ? (0, w.tZ)(h.View, { className: "line-transparent" })
                      : e
                      ? (0, w.tZ)(h.View, { className: "line-primary" })
                      : (0, w.tZ)(h.View, { className: "line" });
                  }),
                  (0, l.Z)((0, r.Z)(n), "renderRound", function (t, e) {
                    return t
                      ? (0, w.tZ)(h.View, { className: "round selected-round" })
                      : e
                      ? (0, w.tZ)(h.View, { className: "round between-round" })
                      : (0, w.tZ)(h.View, { className: "round" });
                  }),
                  console.log(t),
                  (n.state = {
                    trainStopList: [],
                    date: "",
                    fromStation: "",
                    fromStationIndex: 0,
                    toStationIndex: 0,
                    toStation: "",
                    trainNumber: "",
                  }),
                  n
                );
              }
              return (
                (0, o.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var t = this,
                        e = (0, d.getCurrentInstance)();
                      if (
                        (console.log("instance ===", e),
                        e && e.router && e.router.params)
                      ) {
                        var i = e.router.params,
                          n = i.date,
                          a = i.trainNumber,
                          o = i.fromStation,
                          r = i.toStation;
                        this.setState(
                          {
                            date: n,
                            trainNumber: a,
                            fromStation: o,
                            toStation: r,
                          },
                          function () {
                            t.init();
                          }
                        );
                      }
                    },
                  },
                  {
                    key: "getPageId",
                    value: function () {
                      return this.pageId;
                    },
                  },
                  {
                    key: "init",
                    value: function () {
                      var t = this,
                        e = this.state,
                        i = e.date,
                        n = e.trainNumber,
                        a = e.fromStation,
                        o = e.toStation;
                      (0, N.F1)({
                        departureDate: i || "2022-07-20",
                        trainNo: n || "G104",
                        train12306No: "",
                      })
                        .then(function (e) {
                          if ((console.log(e), e && e.trainStopList)) {
                            var i,
                              n,
                              r =
                                null == e ||
                                null === (i = e.trainStopList) ||
                                void 0 === i
                                  ? void 0
                                  : i.findIndex(function (t) {
                                      return t.stationName === a;
                                    }),
                              s =
                                null == e ||
                                null === (n = e.trainStopList) ||
                                void 0 === n
                                  ? void 0
                                  : n.findIndex(function (t) {
                                      return t.stationName === o;
                                    });
                            t.setState(
                              {
                                trainStopList: e.trainStopList,
                                fromStationIndex: r,
                                toStationIndex: s,
                                scrollerKey: "station_".concat(r),
                              },
                              function () {}
                            );
                          } else (0, d.showToast)({ title: "未查询到车次信息" });
                        })
                        .catch(function (t) {
                          console.log(t),
                            (0, d.showToast)({ title: "未查询到车次信息" });
                        });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = this,
                        e = this.state,
                        i = e.trainStopList,
                        n = e.fromStation,
                        a = e.toStation,
                        o = e.fromStationIndex,
                        r = void 0 === o ? 0 : o,
                        s = e.toStationIndex,
                        c = void 0 === s ? 0 : s,
                        l = e.scrollerKey,
                        m = void 0 === l ? "" : l;
                      console.log("scrollerKey===", m),
                        console.log(
                          u().getSystemInfoSync().windowWidth,
                          u().getSystemInfoSync()
                        ),
                        console.log(f.Z);
                      var d = "#198CFF";
                      return (
                        f.Z.isTieyou && (d = f.Z.isCRN ? "#3C4365" : "#FC6E51"),
                        console.log(h.ScrollView),
                        (0, w.BX)(h.View, {
                          className: "container",
                          children: [
                            (0, w.BX)(h.View, {
                              style: { backgroundColor: d },
                              className: "checi-tab",
                              children: [
                                (0, w.tZ)(h.View, { className: "left-round" }),
                                (0, w.tZ)(h.View, {
                                  className: "tab-item station",
                                  children: "出发",
                                }),
                                (0, w.tZ)(h.View, {
                                  className: "tab-item to",
                                  children: "到达",
                                }),
                                (0, w.tZ)(h.View, {
                                  className: "tab-item from",
                                  children: "出发",
                                }),
                                (0, w.tZ)(h.View, {
                                  className: "tab-item time",
                                  children: "停留",
                                }),
                              ],
                            }),
                            (0, w.tZ)(h.ScrollView, {
                              className: "main-box",
                              scrollY: !0,
                              scrollIntoView: m,
                              scrollWithAnimation: !0,
                              children:
                                i &&
                                i.length > 0 &&
                                i.map(function (e, o) {
                                  var s =
                                      n == e.stationName || a == e.stationName,
                                    l = 0 === o,
                                    m = o === i.length - 1;
                                  return (0,
                                  w.BX)(h.View, { className: "item", id: "station_".concat(o), children: [(0, w.tZ)(h.View, { className: "left-round", children: (0, w.BX)(h.View, { className: "roud-c", children: [t.renderLine(l, r < o && o <= c), t.renderRound(s, r < o && o < c), t.renderLine(m, r <= o && o < c)] }) }), s ? (0, w.tZ)(h.View, { className: "right-checi", children: (0, w.BX)(h.View, { className: "checi-content", children: [(0, w.tZ)(h.View, { className: "item-b station selected-item-b", children: e.stationName }), (0, w.tZ)(h.View, { className: "item-b to selected-item-b", children: e.arrivalTime }), (0, w.tZ)(h.View, { className: "item-b from selected-item-b", children: e.departureTime }), (0, w.tZ)(h.View, { className: "item-b time selected-item-b", children: e.stopMinutes ? e.stopMinutes + "分钟" : "----" })] }) }) : (0, w.tZ)(h.View, { className: "right-checi", children: (0, w.BX)(h.View, { className: "checi-content", children: [(0, w.tZ)(h.View, { className: "item-b station", children: e.stationName }), (0, w.tZ)(h.View, { className: "item-b to", children: e.arrivalTime }), (0, w.tZ)(h.View, { className: "item-b from", children: e.departureTime }), (0, w.tZ)(h.View, { className: "item-b time", children: e.stopMinutes ? e.stopMinutes + "分钟" : "----" })] }) })] }, e.stationName);
                                }),
                            }),
                          ],
                        })
                      );
                    },
                  },
                ]),
                i
              );
            })(m.Component);
          Page(
            (0, n.createPageConfig)(
              Z,
              "pages/taroCRN/train/pages/trainTimeTable/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "列车时刻表",
                navigationBarBackgroundColor: "#198CFF",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [98946, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(64130);
        }),
          t.O();
      },
    ]);
})();
