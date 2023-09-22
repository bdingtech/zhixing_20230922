!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [96369],
    {
      43283: function (t, i, a) {
        var e,
          n = a(32180),
          s = a(57042),
          c = a(24460),
          r = a(21867),
          o = a(86066),
          l = a(52500),
          h = a(71515),
          d = (a(92954), a(48792)),
          u = a.n(d),
          g = a(79792),
          m = a(3205),
          N = a(10741),
          f = a(49120),
          w = a(81957),
          p = a(48813),
          v = g.default.isTieyou,
          Z = {
            pageId: v ? "10650009824" : "10650009823",
            data: {
              isTieyou: v,
              stationName: "北京南",
              screenFlag: 0,
              stationList: [],
              renderStationListData: [],
              trainNo: "",
              msg: "当前暂无该车站的检票信息",
            },
            inputRef: null,
            onLoad: function (t) {
              var i = this,
                a = t.stationName,
                e = void 0 === a ? "北京南" : a,
                n = t.screenFlag,
                s = void 0 === n ? 0 : n,
                c = t.trainNo;
              this.setData({ stationName: e, screenFlag: +s, trainNo: c }),
                this.inputRef && (this.inputRef.value = c),
                this.getScreenStation().then(function () {
                  c && i.filterTrainNo(c);
                });
            },
            onRef: function (t) {
              this.inputRef = t;
            },
            getScreenStation: function () {
              var t = this;
              (0, f.showLoading)();
              var i = this.data,
                a = i.stationName,
                e = void 0 === a ? "北京南" : a,
                n = i.screenFlag,
                s = void 0 === n ? 0 : n;
              return (0, N.Oey)({ stationName: e, screenFlag: s })
                .then(function (i) {
                  if (1 === i.resultCode) {
                    var a = i.stationWaitingScreens,
                      e = void 0 === a ? [] : a,
                      n = i.stationArrivalScreens,
                      c = s ? (void 0 === n ? [] : n) : e;
                    t.setData({ stationList: c }), t.renderStationList();
                  } else t.setData({ stationList: [], renderStationListData: [] });
                  t.setData({
                    msg: s
                      ? "当前暂无该车站的到达信息"
                      : "当前暂无该车站的检票信息",
                  });
                })
                .catch(function (t) {
                  return console.log(t);
                })
                .finally(function () {
                  return (0, f.hideLoading)();
                });
            },
            renderStationList: function () {
              var t = this.data.stationList,
                i = void 0 === t ? [] : t;
              i.forEach(function (t) {
                var i = t.waitingState;
                i.includes("正在检票") || i.includes("早")
                  ? (t.stateFlag = "tblue")
                  : i.includes("晚") || i.includes("停止检票")
                  ? (t.stateFlag = "tred")
                  : (t.stateFlag = "");
              }),
                this.setData({ renderStationListData: i });
            },
            switchToWaiting: function () {
              var t = this.data.screenFlag;
              (void 0 === t ? 0 : t) &&
                (this.setData({ screenFlag: 0 }), this.getScreenStation());
            },
            switchToArrival: function () {
              var t = this.data.screenFlag;
              1 !== (void 0 === t ? 0 : t) &&
                (this.setData({ screenFlag: 1 }), this.getScreenStation());
            },
            chooseStation: function () {
              var t = this;
              m.Z.trainCity({ title: "选择车站" }, function (i) {
                t.setData({ stationName: i.stationName }), t.getScreenStation();
              });
            },
            queryTrainNo: function (t) {
              var i = t.detail.value,
                a = void 0 === i ? "" : i;
              this.filterTrainNo(a);
            },
            filterTrainNo: function (t) {
              var i = this.data,
                a = i.stationList,
                e = void 0 === a ? [] : a,
                n = i.screenFlag,
                s = void 0 === n ? 0 : n,
                c =
                  e &&
                  e.filter(function (i) {
                    return i.trainNo.includes(t.toUpperCase());
                  });
              this.setData({
                renderStationListData: c,
                msg: s
                  ? "当前暂无该车次的到达信息"
                  : "当前暂无该车次的检票信息",
              });
            },
          },
          V =
            (0, w.h)()(
              (e =
                u()(Z)(
                  (e = (function (t) {
                    (0, r.Z)(a, t);
                    var i = (0, o.Z)(a);
                    function a() {
                      return (0, s.Z)(this, a), i.apply(this, arguments);
                    }
                    return (
                      (0, c.Z)(a, [
                        {
                          key: "render",
                          value: function () {
                            var t = this,
                              i = this.data,
                              a = i.stationName,
                              e = i.screenFlag,
                              n = i.renderStationListData,
                              s = i.msg;
                            return (0, p.BX)(h.Block, {
                              children: [
                                (0, p.BX)(h.View, {
                                  className: "serch-checi bgcolor-primary",
                                  children: [
                                    (0, p.tZ)(h.Icon, {
                                      className: "ico-search",
                                    }),
                                    (0, p.tZ)(h.View, {
                                      className: "input-box",
                                      children: (0, p.tZ)(h.Input, {
                                        placeholder: "请输入车次号",
                                        placeholderClass: "input-plder",
                                        className: "input-checi",
                                        onInput: this.queryTrainNo,
                                        ref: function (i) {
                                          return t.onRef(i);
                                        },
                                      }),
                                    }),
                                  ],
                                }),
                                (0, p.BX)(h.View, {
                                  className:
                                    "daping-station bgcolor-primary ".concat(
                                      v ? "ty" : "zx"
                                    ),
                                  children: [
                                    (0, p.tZ)(h.Text, {
                                      className: "station",
                                      id: "AGAA",
                                      onClick: this.chooseStation,
                                      children: a,
                                    }),
                                    (0, p.BX)(h.View, {
                                      className: "station-switch",
                                      children: [
                                        (0, p.tZ)(h.View, {
                                          className: "item " + (e ? "" : "cur"),
                                          id: "AGAB",
                                          onClick: this.switchToWaiting,
                                          children: "候车",
                                        }),
                                        (0, p.tZ)(h.View, {
                                          className: "item " + (e ? "cur" : ""),
                                          id: "AGAC",
                                          onClick: this.switchToArrival,
                                          children: "到达",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, p.BX)(h.View, {
                                  className: "checi-th bgcolor-primary",
                                  children: [
                                    (0, p.tZ)(h.View, {
                                      className: "checi",
                                      children: "车次",
                                    }),
                                    e
                                      ? (0, p.BX)(l.default.Fragment, {
                                          children: [
                                            (0, p.tZ)(h.View, {
                                              className: "zhongdian",
                                              children: "始发站",
                                            }),
                                            (0, p.tZ)(h.View, {
                                              className: "fache",
                                              children: "到本站",
                                            }),
                                            (0, p.tZ)(h.View, {
                                              className: "jianpiao",
                                              children: "到达口",
                                            }),
                                          ],
                                        })
                                      : (0, p.BX)(l.default.Fragment, {
                                          children: [
                                            (0, p.tZ)(h.View, {
                                              className: "zhongdian",
                                              children: "终点站",
                                            }),
                                            (0, p.tZ)(h.View, {
                                              className: "fache",
                                              children: "发车",
                                            }),
                                            (0, p.tZ)(h.View, {
                                              className: "jianpiao",
                                              children: "检票口",
                                            }),
                                          ],
                                        }),
                                    (0, p.tZ)(h.View, {
                                      className: "zhuangtai",
                                      children: "状态",
                                    }),
                                  ],
                                }),
                                n &&
                                  n.length > 0 &&
                                  (0, p.BX)(h.View, {
                                    className: "cont-box",
                                    children: [
                                      n.map(function (t) {
                                        return (0,
                                        p.BX)(h.View, { className: "checi-td", children: [(0, p.tZ)(h.View, { className: "checi", children: t.trainNo }), e ? (0, p.BX)(l.default.Fragment, { children: [(0, p.tZ)(h.View, { className: "zhongdian", children: t.startStationName }), (0, p.tZ)(h.View, { className: "fache", children: t.arrivalTime }), (0, p.tZ)(h.View, { className: "jianpiao", children: t.checkingPort }), (0, p.tZ)(h.View, { className: "zhuangtai", children: (0, p.tZ)(h.Text, { className: t.stateFlag, children: t.waitingState }) })] }) : (0, p.BX)(l.default.Fragment, { children: [(0, p.tZ)(h.View, { className: "zhongdian", children: t.endStationName }), (0, p.tZ)(h.View, { className: "fache", children: t.departTime }), (0, p.tZ)(h.View, { className: "jianpiao", children: (0, p.tZ)(h.Text, { children: t.checkingPort }) }), (0, p.tZ)(h.View, { className: "zhuangtai", children: (0, p.tZ)(h.Text, { className: t.stateFlag, children: t.waitingState }) })] })] }, "index");
                                      }),
                                      0 == n.length &&
                                        (0, p.tZ)(h.View, {
                                          className: "station-no-msg",
                                          children: s,
                                        }),
                                    ],
                                  }),
                              ],
                            });
                          },
                        },
                      ]),
                      a
                    );
                  })(l.default.Component))
                ) || e)
            ) || e;
        Page(
          (0, n.createPageConfig)(
            V,
            "pages/trainminor/daping/daping",
            { root: { cn: [] } },
            {
              navigationBarBackgroundColor: "#0066E6",
              backgroundColorTop: "#0066E6",
              navigationBarTitleText: "车站大屏",
            } || {}
          )
        );
      },
    },
    function (t) {
      t.O(0, [19559, 11216, 68592], function () {
        return (function (i) {
          return t((t.s = i));
        })(43283);
      }),
        t.O();
    },
  ]);
})();
