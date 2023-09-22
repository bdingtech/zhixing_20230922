!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [42475],
    {
      2576: function (e, o, n) {
        n.d(o, {
          Z: function () {
            return h;
          },
        });
        var t = n(57042),
          i = n(24460),
          c = n(81876),
          r = n(21867),
          a = n(86066),
          u = n(45023),
          l = n(52500),
          s = (n(92954), n(71515)),
          m = n(79792),
          p = n(79910),
          d = n(20592),
          f = n(48813),
          h = (function (e) {
            (0, r.Z)(n, e);
            var o = (0, a.Z)(n);
            function n() {
              var e;
              (0, t.Z)(this, n);
              for (
                var i = arguments.length, r = new Array(i), a = 0;
                a < i;
                a++
              )
                r[a] = arguments[a];
              return (
                (e = o.call.apply(o, [this].concat(r))),
                (0, u.Z)((0, c.Z)(e), "timer", null),
                (0, u.Z)((0, c.Z)(e), "state", {
                  hour: "00",
                  minute: "00",
                  second: "00",
                }),
                (0, u.Z)((0, c.Z)(e), "startCountDown", function () {
                  var o = e.props.params.expiredTime;
                  if (o && !e.timer) {
                    var n = new Date(o.replace(/\-/g, "/")).getTime();
                    e.doCount(n),
                      (e.timer = setInterval(function () {
                        e.doCount(n);
                      }, 1e3));
                  }
                }),
                (0, u.Z)((0, c.Z)(e), "doCount", function (o) {
                  var n = Math.floor((o - Date.now()) / 1e3);
                  if (n < 0)
                    return (
                      e.clearTimer(), void p.Z.executeCB(e.props.handleClose)
                    );
                  var t = Math.floor((n % 86400) / 3600),
                    i = Math.floor((n % 3600) / 60),
                    c = Math.floor((n % 3600) % 60);
                  e.setState({
                    hour: e.formatTime(t),
                    minute: e.formatTime(i),
                    second: e.formatTime(c),
                  });
                }),
                (0, u.Z)((0, c.Z)(e), "formatTime", function (e) {
                  return e > 9 ? "".concat(e) : "0".concat(e);
                }),
                (0, u.Z)((0, c.Z)(e), "clearTimer", function () {
                  e.timer && (clearInterval(e.timer), (e.timer = null));
                }),
                e
              );
            }
            return (
              (0, i.Z)(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    (null !== d.IK &&
                      void 0 !== d.IK &&
                      d.IK.couponFixedClose) ||
                      ((d.IK.couponFixedClose = !1), this.startCountDown());
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.clearTimer();
                  },
                },
                {
                  key: "couponClose",
                  value: function (e) {
                    e.stopPropagation(),
                      (d.IK.couponFixedClose = !0),
                      p.Z.executeCB(this.props.handleClose);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      o = e.params,
                      n = void 0 === o ? {} : o,
                      t = e.couponFixedShow,
                      i = n.couponAmount,
                      c = this.state,
                      r = c.hour,
                      a = c.minute,
                      u = c.second;
                    return m.default.isBaidu || d.IK.couponFixedClose
                      ? (0, f.tZ)(s.View, {})
                      : (0, f.tZ)(s.View, {
                          className: "common-flight-coupon-fixed",
                          children: (0, f.BX)(s.View, {
                            className: "coupon-fixed",
                            id: "AADW",
                            onClick: function () {
                              null == t || t();
                            },
                            children: [
                              (0, f.tZ)(s.View, {
                                className: "count-down",
                                children: ""
                                  .concat(r, ":")
                                  .concat(a, ":")
                                  .concat(u),
                              }),
                              (0, f.BX)(s.View, {
                                className: "coupon-price flex-center",
                                children: [
                                  (0, f.tZ)(s.View, {
                                    className: "coupon-unit",
                                    children: "¥",
                                  }),
                                  (0, f.tZ)(s.View, {
                                    className: "coupon-num",
                                    children: i,
                                  }),
                                ],
                              }),
                              (0, f.tZ)(s.Image, {
                                className: "close-btn",
                                id: "AADX",
                                onClick: this.couponClose.bind(this),
                                src: "https://images3.c-ctrip.com/zt/flight/close.png",
                              }),
                            ],
                          }),
                        });
                  },
                },
              ]),
              n
            );
          })(l.default.PureComponent);
      },
    },
  ]);
})();
