!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [7160],
    {
      69006: function (t, e, i) {
        i.d(e, {
          Z: function () {
            return m;
          },
        });
        var o = i(57042),
          n = i(24460),
          s = i(21867),
          a = i(86066),
          c = i(52500),
          l = i(92954),
          u = i.n(l),
          r = i(71515),
          p = i(79792),
          f = i(79910),
          h = i(2809),
          d = i(49120),
          k = i(48813),
          m = (function (t) {
            (0, s.Z)(i, t);
            var e = (0, a.Z)(i);
            function i(t) {
              var n;
              return (
                (0, o.Z)(this, i),
                ((n = e.call(this, t)).state = {
                  canUseCustomNav: f.Z.canUseCustomNav,
                  isTieyou: p.default.isTieyou,
                  isBaidu: p.default.isBaidu && "devtools" !== h.ZP.platform,
                  statusBarHeight: h.ZP.statusBarHeight,
                  pageLength: 1,
                }),
                n
              );
            }
            return (
              (0, n.Z)(i, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var t = u().getCurrentPages(),
                      e = t ? t.length : 1;
                    this.setState({ pageLength: e }), this.setDefault();
                  },
                },
                {
                  key: "UNSAFE_componentWillReceiveProps",
                  value: function (t) {
                    !f.Z.canUseCustomNav &&
                      t &&
                      t.title &&
                      t.title != this.props.title &&
                      (console.log(this.props), this.setDefault(t.title));
                  },
                },
                {
                  key: "setDefault",
                  value: function (t) {
                    t && u().setNavigationBarTitle({ title: t }),
                      p.default.isH5 ||
                        (0, d.setBackgroundColor)({
                          frontColor:
                            this.props.navigationBarFrontColor || "#ffffff",
                          backgroundColor:
                            this.props.backgroundColor ||
                            (this.state.isTieyou ? "#3C4365" : "#0066E6"),
                        });
                  },
                },
                {
                  key: "onBack",
                  value: function () {
                    this.props.onBack
                      ? this.props.onBack()
                      : this.state.pageLength > 1
                      ? u().navigateBack()
                      : f.Z.relaunchHome();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this,
                      e = this.state,
                      i = e.canUseCustomNav,
                      o = e.isTieyou,
                      n = e.statusBarHeight,
                      s = e.pageLength,
                      a = e.isBaidu,
                      c = this.props,
                      l = c.className,
                      u = void 0 === l ? "" : l,
                      p = c.v2,
                      f = c.propStyle,
                      h = void 0 === f ? { box: "", icon: "", title: "" } : f;
                    return i
                      ? (0, k.tZ)(r.View, {
                          className: "common-head-view ".concat(u),
                          children: (0, k.BX)(r.View, {
                            className: "top-bar fixed ".concat(o ? "ty" : "zx"),
                            style: "padding-top: " + n + "px; " + h.box,
                            children: [
                              a || p
                                ? null
                                : s > 1
                                ? (0, k.tZ)(r.Text, {
                                    className: "ifont-back iconfont",
                                    style: h.icon,
                                    id: "AABG",
                                    onClick: function () {
                                      t.onBack();
                                    },
                                  })
                                : (0, k.tZ)(r.Text, {
                                    className: "ifont-home iconfont",
                                    style: h.icon,
                                    id: "AABH",
                                    onClick: function () {
                                      t.onBack();
                                    },
                                  }),
                              a || !p
                                ? null
                                : s > 1
                                ? (0, k.tZ)(r.Text, {
                                    className:
                                      "ifont2-fanhui_linea_24 iconfont2",
                                    style: h.icon,
                                    id: "AABI",
                                    onClick: function () {
                                      t.onBack();
                                    },
                                  })
                                : (0, k.tZ)(r.Text, {
                                    className: "ifont-home iconfont",
                                    style: h.icon,
                                    id: "AABJ",
                                    onClick: function () {
                                      t.onBack();
                                    },
                                  }),
                              (0, k.BX)(r.View, {
                                className: "tit",
                                children: [
                                  (0, k.tZ)(r.View, {
                                    className: "title",
                                    style: h.title,
                                    children: this.props.title,
                                  }),
                                  !!this.props.subTitle &&
                                    (0, k.tZ)(r.View, {
                                      className: "sub-title",
                                      children: this.props.subTitle,
                                    }),
                                ],
                              }),
                            ],
                          }),
                        })
                      : (0, k.tZ)(r.View, {});
                  },
                },
              ]),
              i
            );
          })(c.default.Component);
      },
    },
  ]);
})();
