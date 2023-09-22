!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [51124],
    {
      74777: function (t, n, o) {
        o.d(n, {
          Z: function () {
            return d;
          },
        });
        var e = o(57042),
          a = o(24460),
          s = o(81876),
          c = o(21867),
          i = o(86066),
          l = o(45023),
          u = o(52500),
          r = o(71515),
          h = o(92954),
          p = o(2809),
          v = o(48813),
          m = u.default.memo(function (t) {
            var n,
              o,
              e,
              a = t.children,
              s = t.show,
              c = t.className,
              i = t.handleWrapClose,
              l = t.top,
              u =
                t.countCustomNav &&
                "custom" ==
                  (null === (n = (0, h.getCurrentInstance)()) ||
                  void 0 === n ||
                  null === (o = n.page) ||
                  void 0 === o ||
                  null === (e = o.config) ||
                  void 0 === e
                    ? void 0
                    : e.navigationStyle),
              m = u ? p.ZP.statusBarHeight || 44 : 0,
              d = u ? 44 : 0;
            return (0,
            v.BX)(r.View, { className: "common-floating-panel ".concat(c), children: [(0, v.tZ)(r.View, { className: "floating-panel-bg", id: "AAAt", onClick: i, style: { opacity: "".concat(s ? 0.7 : 0), visibility: "".concat(s ? "visible" : "hidden") } }), (0, v.tZ)(r.View, { className: "floating-panel-content flex flex-column", style: { top: "".concat(parseInt(l) + m + d, "px"), maxHeight: "".concat(s ? "80vh" : 0), visibility: "".concat(s ? "visible" : "hidden") }, children: a })] });
          }),
          d = (function (t) {
            (0, c.Z)(o, t);
            var n = (0, i.Z)(o);
            function o() {
              var t;
              return (
                (0, e.Z)(this, o),
                (t = n.call(this)),
                (0, l.Z)((0, s.Z)(t), "onWrapClose", function () {
                  t.close();
                }),
                (0, l.Z)((0, s.Z)(t), "close", function () {
                  t.setState({ show: !1 });
                }),
                (t.state = {
                  show: !1,
                  content: function () {
                    return (0, v.tZ)(v.HY, {});
                  },
                  className: "",
                  top: 0,
                }),
                t
              );
            }
            return (
              (0, a.Z)(o, [
                {
                  key: "showCommonPanel",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      n = t.content,
                      o = t.className,
                      e = t.top;
                    "function" == typeof n
                      ? this.setState({
                          show: !0,
                          top: e,
                          content: n,
                          className: o,
                        })
                      : console.log("请传入浮层组件");
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this.state,
                      n = t.show,
                      o = t.content,
                      e = t.className,
                      a = t.top,
                      s = this.props.countCustomNav;
                    return (0, v.tZ)(m, {
                      show: n,
                      className: e,
                      handleWrapClose: this.onWrapClose,
                      top: a,
                      countCustomNav: s,
                      children: null == o ? void 0 : o({ onClose: this.close }),
                    });
                  },
                },
              ]),
              o
            );
          })(u.default.Component);
      },
    },
  ]);
})();
