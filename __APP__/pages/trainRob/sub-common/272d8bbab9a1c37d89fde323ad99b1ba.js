!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [42658],
    {
      92959: function (e, t, n) {
        var i = n(298),
          a = n(22276),
          c = n(90129),
          o = n(52500),
          s = (n(92954), n(71515)),
          l = n(34229),
          r = n(58789),
          m = n(48813);
        t.Z = o.default.memo(function (e) {
          var t = e.fromPage,
            n = e.visible,
            d = void 0 !== n && n,
            u = e.topTitle,
            p = e.content,
            h = e.seatNameList,
            f = e.onConfirm,
            w = void 0 === f ? function () {} : f,
            Z = e.onClose,
            x = void 0 === Z ? function () {} : Z,
            g = e.ubtTrace,
            N = void 0 === g ? function () {} : g,
            v = p || {},
            b = v.headImage,
            T = (v.festivalType, v.btnName),
            V = v.plans,
            _ = v.remark,
            k = (0, o.useState)([]),
            y = (0, c.Z)(k, 2),
            B = y[0],
            X = y[1];
          (0, o.useEffect)(
            function () {
              if (d && null != V && V.length) {
                var e = [];
                V.forEach(function (t, n) {
                  var i;
                  null === (i = t.options) ||
                    void 0 === i ||
                    i.forEach(function (t, i) {
                      1 === t.recommend && 1 !== t.selected && (e[n] = i);
                    });
                }),
                  X(e);
              } else X([]);
            },
            [d, V]
          );
          var A =
            0 === B.length ||
            !B.some(function (e) {
              return e > -1;
            });
          return (0, m.tZ)(l.ZtDrawer, {
            show: d,
            isShowClose: !1,
            onWrapClose: x,
            className: "promise-into-car-drawer-box",
            drawerStyle: { borderRadius: "32rpx 32rpx 0 0" },
            children: (0, m.BX)(s.View, {
              className: "promise-into-car-drawer",
              children: [
                (0, m.BX)(s.View, {
                  className: "header",
                  children: [
                    (0, m.tZ)(s.Image, { src: b, className: "img-head" }),
                    (0, m.BX)(s.View, {
                      className: "title-top",
                      children: [
                        (0, m.tZ)(s.Image, {
                          className: "icon-picket",
                          src: "https://images3.c-ctrip.com/ztrip/train.xin/2021_11/rob_windows_picket@3x.png",
                        }),
                        (0, m.tZ)(l.ZtRichText, { className: "txt", nodes: u }),
                      ],
                    }),
                  ],
                }),
                (0, m.BX)(s.View, {
                  className: "container",
                  children: [
                    (0, m.tZ)(s.View, {
                      className: "content",
                      children:
                        V &&
                        V.map(function (e, t) {
                          return (0, m.BX)(
                            s.Block,
                            {
                              children: [
                                (0, m.BX)(s.View, {
                                  className: "plan-item",
                                  children: [
                                    (0, m.BX)(s.View, {
                                      className: "plan-title-box",
                                      children: [
                                        (0, m.tZ)(s.Image, {
                                          src: "https://images3.c-ctrip.com/ztrip/train.xin/2021_11/rob_windows_tag@3x.png",
                                          className: "icon-title",
                                        }),
                                        (0, m.tZ)(s.View, {
                                          className: "title",
                                          children: e.title,
                                        }),
                                        e.rightText &&
                                          (0, m.tZ)(l.ZtRichText, {
                                            className: "right-text",
                                            nodes: e.rightText,
                                          }),
                                      ],
                                    }),
                                    (0, m.BX)(s.View, {
                                      className:
                                        "sub-title flex-align-items-center",
                                      children: [
                                        (0, m.tZ)(l.ZtRichText, {
                                          nodes: e.subTitle,
                                        }),
                                        e.options.some(function (e) {
                                          return 0 === e.planType;
                                        }) && (0, m.tZ)(r.Z, {}),
                                      ],
                                    }),
                                    (0, m.tZ)(s.View, {
                                      className: "options-box",
                                      children: e.options.map(function (e, n) {
                                        return (0, m.BX)(
                                          s.View,
                                          {
                                            className: "option ".concat(
                                              1 === e.selected
                                                ? "disabled"
                                                : n === B[t]
                                                ? "selecting"
                                                : ""
                                            ),
                                            id: "AADx",
                                            onClick: function () {
                                              !(function (e, t, n) {
                                                1 !== e.selected &&
                                                  ((B[t] = B[t] === n ? -1 : n),
                                                  X((0, a.Z)(B)));
                                              })(e, t, n);
                                            },
                                            children: [
                                              1 === e.recommend &&
                                                (0, m.tZ)(s.View, {
                                                  className: "tag",
                                                  children: "推荐",
                                                }),
                                              (0, m.tZ)(s.View, {
                                                className: "name",
                                                children: e.name,
                                              }),
                                            ],
                                          },
                                          e.code
                                        );
                                      }),
                                    }),
                                  ],
                                }),
                                t < V.length - 1 &&
                                  (0, m.tZ)(s.View, { className: "dash-line" }),
                              ],
                            },
                            e.title
                          );
                        }),
                    }),
                    (0, m.tZ)(s.View, {
                      className: "remark",
                      children: (0, m.tZ)(l.ZtRichText, { nodes: _ }),
                    }),
                  ],
                }),
                (0, m.tZ)(s.View, {
                  className: "btn-box-promise",
                  id: "AADy",
                  onClick: function () {
                    var e = "";
                    V.forEach(function (t, n) {
                      (0 === t.options[0].planType ||
                        1 === t.options[0].planType) &&
                        (e = B[n] + "/" + t.options.length);
                    }),
                      "graborder" === t
                        ? N(205914, {
                            bizKey: "z_guarantee_confirm_open_click",
                            location1: e,
                            lcation2: "",
                          })
                        : "grabrate" === t &&
                          N(208755, {
                            bizKey: "z_guarantee_success_confirm_open_click",
                            location1: e,
                            lcation2: "",
                          });
                    var n = [];
                    V &&
                      V.forEach(function (e, t) {
                        var a, c, o;
                        B[t] > -1 &&
                          (null === (a = V[t]) ||
                            void 0 === a ||
                            null === (c = a.crossStationInfos) ||
                            void 0 === c ||
                            null === (o = c.forEach) ||
                            void 0 === o ||
                            o.call(c, function (a) {
                              var c,
                                o,
                                s = e.options[B[t]];
                              0 === s.planType &&
                                s.ext >= a.standUpTime &&
                                n.push(
                                  (0, i.Z)(
                                    (0, i.Z)({}, a),
                                    {},
                                    { successRate: 0 }
                                  )
                                ),
                                1 === s.planType &&
                                  s.ext >= a.extraAmount &&
                                  (null === (c = a.extraAmountInfos) ||
                                    void 0 === c ||
                                    null === (o = c.forEach) ||
                                    void 0 === o ||
                                    o.call(c, function (e) {
                                      var t;
                                      null == h ||
                                        null === (t = h.forEach) ||
                                        void 0 === t ||
                                        t.call(h, function (t) {
                                          t === e.seatType &&
                                            (a.extraAmount = Math.max(
                                              a.extraAmount,
                                              e.amount
                                            ));
                                        });
                                    }),
                                  n.push(
                                    (0, i.Z)(
                                      (0, i.Z)({}, a),
                                      {},
                                      { successRate: 0 }
                                    )
                                  ));
                            }));
                      }),
                      w(n);
                  },
                  children: (0, m.tZ)(s.View, {
                    className: "btn-confirm-promise ".concat(A && "disabled"),
                    children: T,
                  }),
                }),
              ],
            }),
          });
        });
      },
    },
  ]);
})();
