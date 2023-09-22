!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [37210],
    {
      81380: function (e, t, n) {
        var o = n(22276),
          i = n(90129),
          a = n(52500),
          c = n(92954),
          r = n.n(c),
          l = n(4102),
          s = n(8271),
          u = n.n(s),
          f = n(71515),
          d = n(20592),
          h = n(12407),
          v = n(38136),
          g = n(48813);
        t.Z = a.default.memo(function (e) {
          var t = e.visible,
            n = e.maxHeight,
            c = e.tip,
            s = e.beginDate,
            p = e.endDate,
            m = e.hasSelectedDateList,
            b = void 0 === m ? [] : m,
            T = e.mainTrainDate,
            y = void 0 === T ? [] : T,
            D = e.preRobDays,
            Z = void 0 === D ? 60 : D,
            w = e.maxOtherDatesLength,
            x = void 0 === w ? 5 : w,
            C = e.maxIntervalDays,
            S = void 0 === C ? 3 : C,
            k = e.onConfirm,
            O = void 0 === k ? function () {} : k,
            M = e.onClose,
            E = void 0 === M ? function () {} : M,
            R = (0, a.useRef)(1),
            A = (0, a.useCallback)(
              function (e) {
                var t = {
                    getTopInfoStyle: function () {
                      return function () {
                        return { marginBottom: "4rpx" };
                      };
                    },
                  },
                  n = u()()
                    .add(d.ET.preSaleDays - 1, "day")
                    .valueOf(),
                  o = u()()
                    .add(Z - 1, "day")
                    .valueOf();
                return (
                  n &&
                    o &&
                    l.Z.isAfter(e, n) &&
                    l.Z.isAfter(o, e) &&
                    (t.info = "预约"),
                  b.some(function (t) {
                    return t === e;
                  }) && (t.selected = !0),
                  y.some(function (t) {
                    return t === e;
                  }) && (t.disabledSelected = !0),
                  t
                );
              },
              [b, y, Z]
            ),
            B = (0, v.G)(t, s, p, b[0], A, R.current),
            H = B.dateMap,
            I = B.scrollToMonth,
            J = B.changeDateSelectType,
            L = (0, a.useState)(b),
            N = (0, i.Z)(L, 2),
            G = N[0],
            V = N[1];
          (0, a.useEffect)(
            function () {
              t ||
                (b && b.length > 0 ? V(b) : V([]),
                ((b.length > 0 &&
                  !b.some(function (e, t) {
                    return e !== G[t];
                  })) ||
                  b.length !== G.length) &&
                  R.current++);
            },
            [t, b, G]
          ),
            (0, a.useEffect)(
              function () {
                t || (b && b.length > 0 ? V(b) : V([]));
              },
              [t, b]
            );
          return (0, g.tZ)(h.Z, {
            visible: t,
            maxHeight: n || "90%",
            tip: c,
            dateMap: H,
            scrollToMonth: I,
            onClickDate: function (e, t, n) {
              var i = (0, o.Z)(G);
              if (0 === e.selectType)
                i.push(e.date),
                  i.sort(function (e, t) {
                    return u()(e).valueOf() - u()(t).valueOf();
                  });
              else {
                if (1 !== e.selectType) return;
                i = i.filter(function (t) {
                  return t !== e.date;
                });
              }
              if (i.length > x)
                r().showToast({
                  title: "最多可选".concat(x, "天"),
                  icon: "none",
                  duration: 1e3,
                });
              else {
                if (
                  i.find(function (e, t) {
                    return 0 !== t && u()(e).diff(u()(i[t - 1]), "day") > S;
                  })
                ) {
                  if (0 === e.selectType)
                    return void r().showToast({
                      title: "抱歉，所选跨度不能超过".concat(S, "天"),
                      icon: "none",
                      duration: 1e3,
                    });
                  if (1 === e.selectType)
                    return void r().showToast({
                      title: "取消后日期间隔不能超过".concat(S, "天"),
                      icon: "none",
                      duration: 1e3,
                    });
                }
                J(e, t, n), V(i);
              }
            },
            onClose: E,
            footerRender: (0, g.tZ)(f.View, {
              className: "setgrab-calendar-btn-box",
              children: (0, g.tZ)(f.Button, {
                className: "calendar-btn ".concat(
                  G.length > 0 ? "" : "disabled"
                ),
                onClick: function () {
                  G.length > 0 && (console.log("确定", G), O(G));
                },
                children:
                  G.length > 0 ? "确定".concat(G.length, "个日期") : "确定",
              }),
            }),
          });
        });
      },
    },
  ]);
})();
