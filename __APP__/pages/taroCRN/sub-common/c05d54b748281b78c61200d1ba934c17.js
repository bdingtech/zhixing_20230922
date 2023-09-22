!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [17175],
    {
      70537: function (e, a, t) {
        var i = t(22276),
          n = t(90129),
          c = t(298),
          r = t(52500),
          s = t(71515),
          o = t(49120),
          l = t(34229),
          m = t(48813),
          u = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              a = [],
              t = {};
            return (
              e.forEach(function (e) {
                var a;
                null === (a = e.SeatList) ||
                  void 0 === a ||
                  a.forEach(function (e) {
                    t[e.SeatName]
                      ? parseFloat(e.SeatPrice) > t[e.SeatName].SeatPrice &&
                        (t[e.SeatName] = {
                          SeatPrice: parseFloat(e.SeatPrice),
                          ShowSeatPrice: Number.parseFloat(e.ShowSeatPrice),
                        })
                      : (t[e.SeatName] = {
                          SeatPrice: parseFloat(e.SeatPrice),
                          ShowSeatPrice: Number.parseFloat(e.ShowSeatPrice),
                        });
                  });
              }),
              Object.keys(t).forEach(function (e) {
                a.push((0, c.Z)((0, c.Z)({}, t[e]), {}, { SeatName: e }));
              }),
              a
            );
          };
        a.Z = r.default.memo(function (e) {
          var a,
            t = e.isTieyou,
            c = e.visible,
            S = e.chosenTrainList,
            d = e.chosenSeatStr,
            h = void 0 === d ? "" : d,
            f = e.mainTrainSeatName,
            N = void 0 === f ? "" : f,
            w = e.onClose,
            p = void 0 === w ? function () {} : w,
            P = e.onConfirm,
            v = void 0 === P ? function () {} : P,
            b = (0, r.useState)(h.split(",")),
            V = (0, n.Z)(b, 2),
            Z = V[0],
            B = V[1];
          (a = Array.isArray(N) ? N : [N]),
            (0, r.useEffect)(
              function () {
                B(c ? h.split(",") : []);
              },
              [h, c]
            );
          var g = [],
            x = [];
          S.forEach(function (e) {
            var a;
            ["C", "D", "G"].includes(
              null === (a = e.TrainNumber) || void 0 === a ? void 0 : a[0]
            )
              ? g.push(e)
              : x.push(e);
          });
          var C = u(S),
            X = u(g),
            k = u(x),
            _ = {};
          X.forEach(function (e) {
            "无座" === e.SeatName &&
              (!_.SeatPrice || e.SeatPrice > _.SeatPrice) &&
              Object.assign(_, e);
          }),
            k.forEach(function (e) {
              "无座" === e.SeatName &&
                (!_.SeatPrice || e.SeatPrice > _.SeatPrice) &&
                Object.assign(_, e);
            });
          var z = function (e) {
              a.indexOf(e) > -1 ||
                B(function (a) {
                  return a.indexOf(e) > -1
                    ? a.filter(function (a) {
                        return a !== e;
                      })
                    : [].concat((0, i.Z)(a), [e]);
                });
            },
            A = function (e) {
              return a.includes(e)
                ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_ed_forbidden.png"
                : Z.includes(e)
                ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_ed_".concat(
                    t ? "ty" : "zx",
                    ".png"
                  )
                : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_normal.png";
            };
          return (0, m.BX)(l.ZtDrawer, {
            className: "seat-selector-drawer",
            show: c,
            onWrapClose: p,
            onClose: p,
            maxHeight: "80%",
            children: [
              (0, m.tZ)(s.View, {
                className: "hd",
                children: (0, m.tZ)(s.View, {
                  className: "tit",
                  children: "选择座席(建议多选)",
                }),
              }),
              (0, m.BX)(s.View, {
                className: "bd",
                children: [
                  (0, m.BX)(s.View, {
                    className: "tips",
                    children: [
                      (0, m.tZ)(s.View, {
                        className: "tip",
                        children: "多选几个座席，抢票成功率更高。",
                      }),
                      (0, m.tZ)(s.View, {
                        className: "tip",
                        children: "选择后暂收最高票价，出票后根据情况退还差额",
                      }),
                    ],
                  }),
                  _ &&
                    _.SeatName &&
                    (0, m.BX)(s.View, {
                      className: "no-seat",
                      id: "AHBs",
                      onClick: function () {
                        return z(_.SeatName);
                      },
                      children: [
                        (0, m.tZ)(s.View, {
                          className: "name",
                          children: _.SeatName,
                        }),
                        (0, m.BX)(s.View, {
                          className: "price",
                          children: ["¥", _.ShowSeatPrice || _.SeatPrice],
                        }),
                        (0, m.tZ)(s.Image, {
                          className: "icon-checkbox",
                          src: A(_.SeatName),
                        }),
                      ],
                    }),
                  (null == X
                    ? void 0
                    : X.filter(function (e) {
                        return "无座" != e.SeatName;
                      }).length) > 0 &&
                    (0, m.BX)(s.View, {
                      className: "CDG-train",
                      children: [
                        (0, m.tZ)(s.View, {
                          className: "tit",
                          children: "选择高铁/动车坐席",
                        }),
                        (0, m.tZ)(s.View, {
                          className: "seat-box",
                          children: X.filter(function (e) {
                            return "无座" != e.SeatName;
                          }).map(function (e) {
                            return (0, m.BX)(
                              s.View,
                              {
                                className: "seat-info",
                                id: "AHBt",
                                onClick: function () {
                                  return z(e.SeatName);
                                },
                                children: [
                                  (0, m.tZ)(s.View, {
                                    className: "name",
                                    children: e.SeatName,
                                  }),
                                  (0, m.BX)(s.View, {
                                    className: "price",
                                    children: [
                                      "¥",
                                      e.ShowSeatPrice || e.SeatPrice,
                                    ],
                                  }),
                                  (0, m.tZ)(s.Image, {
                                    className: "icon-checkbox",
                                    src: A(e.SeatName),
                                  }),
                                ],
                              },
                              e.SeatName
                            );
                          }),
                        }),
                      ],
                    }),
                  (null == k
                    ? void 0
                    : k.filter(function (e) {
                        return "无座" != e.SeatName;
                      }).length) > 0 &&
                    (0, m.BX)(s.View, {
                      className: "no-CDG-train",
                      children: [
                        (0, m.tZ)(s.View, {
                          className: "tit",
                          children: "选择普快/特快座席",
                        }),
                        (0, m.tZ)(s.View, {
                          className: "seat-box",
                          children: k
                            .filter(function (e) {
                              return "无座" != e.SeatName;
                            })
                            .map(function (e) {
                              return (0, m.BX)(
                                s.View,
                                {
                                  className: "seat-info",
                                  id: "AHBu",
                                  onClick: function () {
                                    return z(e.SeatName);
                                  },
                                  children: [
                                    (0, m.tZ)(s.View, {
                                      className: "name",
                                      children: e.SeatName,
                                    }),
                                    (0, m.BX)(s.View, {
                                      className: "price",
                                      children: [
                                        "¥",
                                        e.ShowSeatPrice || e.SeatPrice,
                                      ],
                                    }),
                                    (0, m.tZ)(s.Image, {
                                      className: "icon-checkbox",
                                      src: A(e.SeatName),
                                    }),
                                  ],
                                },
                                e.SeatName
                              );
                            }),
                        }),
                      ],
                    }),
                ],
              }),
              (0, m.BX)(s.View, {
                className: "btn-box",
                children: [
                  (0, m.tZ)(s.Button, {
                    className: "btn btn-cancel",
                    id: "AHBv",
                    onClick: p,
                    children: "取消",
                  }),
                  (0, m.tZ)(s.Button, {
                    className: "btn btn-confirm",
                    id: "AHBw",
                    onClick: function () {
                      return (function (e) {
                        if (
                          -1 === e.indexOf("无座") &&
                          (null == X
                            ? void 0
                            : X.filter(function (e) {
                                return "无座" != e.SeatName;
                              }).length) > 0 &&
                          -1 ===
                            X.findIndex(function (a) {
                              return e.includes(a.SeatName);
                            })
                        )
                          (0, o.showToast)("请选择高铁/动车座席");
                        else if (
                          -1 === e.indexOf("无座") &&
                          (null == k
                            ? void 0
                            : k.filter(function (e) {
                                return "无座" != e.SeatName;
                              }).length) > 0 &&
                          -1 ===
                            k.findIndex(function (a) {
                              return e.includes(a.SeatName);
                            })
                        )
                          (0, o.showToast)("请选择普快/特快座席");
                        else {
                          var a = C.map(function (a) {
                            return {
                              ShowSeatPrice: a.ShowSeatPrice,
                              SeatPrice: a.SeatPrice,
                              SeatName: a.SeatName,
                              selected: e.includes(a.SeatName),
                            };
                          });
                          v(a);
                        }
                      })(Z);
                    },
                    children: "确定",
                  }),
                ],
              }),
            ],
          });
        });
      },
    },
  ]);
})();
