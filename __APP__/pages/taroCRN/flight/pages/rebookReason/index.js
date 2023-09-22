!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [84412],
      {
        76692: function (e, n, a) {
          var o,
            r = a(32180),
            t = a(298),
            i = a(57042),
            s = a(24460),
            l = a(81876),
            c = a(21867),
            u = a(86066),
            f = a(45023),
            d = a(52500),
            p = a(71515),
            b = a(21145),
            m = a(92954),
            h = a(53550),
            _ = a(78200),
            k = a(87298),
            v = a(9776),
            Z = a(48813),
            g =
              (0, k.h)()(
                (o = (function (e) {
                  (0, c.Z)(a, e);
                  var n = (0, u.Z)(a);
                  function a(e) {
                    var o;
                    return (
                      (0, i.Z)(this, a),
                      (o = n.call(this, e)),
                      (0, f.Z)((0, l.Z)(o), "params", {}),
                      (0, f.Z)((0, l.Z)(o), "handleReasonClick", function (e) {
                        var n = o.params.segment,
                          a = (n || {}).passengerList,
                          r =
                            null == a
                              ? void 0
                              : a
                                  .filter(function (n) {
                                    var a, o;
                                    return (
                                      !(
                                        (null === (a = n.rebookTypes) ||
                                        void 0 === a
                                          ? void 0
                                          : a.length) > 1
                                      ) ||
                                      (null === (o = n.rebookTypes) ||
                                      void 0 === o
                                        ? void 0
                                        : o.includes(e.rebookType))
                                    );
                                  })
                                  .map(function (n) {
                                    return (0,
                                    t.Z)((0, t.Z)({}, n), {}, { rebookType: e.rebookType });
                                  });
                        (0,
                        _.Cc)((0, t.Z)((0, t.Z)({}, o.params), {}, { segment: (0, t.Z)((0, t.Z)({}, n), {}, { passengerList: r }) }), (0, l.Z)(o));
                      }),
                      (o.state = { rebookReasons: [] }),
                      o
                    );
                  }
                  return (
                    (0, s.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e, n;
                          (this.params =
                            (null ===
                              (e = (0, m.getCurrentInstance)().router) ||
                            void 0 === e
                              ? void 0
                              : e.params) || {}),
                            (null !== (n = this.params) &&
                              void 0 !== n &&
                              n.orderNumber) ||
                              (this.params =
                                (0, v.DH)("flightRebookData") || {});
                          var a = ((this.params || {}).segment || {})
                            .rebookReasons;
                          this.setState({ rebookReasons: a || [] });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            n = this.state.rebookReasons;
                          return (0, Z.BX)(p.View, {
                            className: " _Y _p _yd",
                            children: [
                              (0, Z.tZ)(b.Z, { title: "选择改签原因" }),
                              (0, Z.tZ)(p.View, {
                                className: " _Dj",
                                children:
                                  null == n
                                    ? void 0
                                    : n.map(function (n) {
                                        return (0, Z.BX)(
                                          p.View,
                                          {
                                            className:
                                              " _a _Oa _Mb _Ei _i _Ga _Rh",
                                            onClick: function () {
                                              e.handleReasonClick(n);
                                            },
                                            children: [
                                              (0, Z.BX)(p.View, {
                                                className: " _j",
                                                children: [
                                                  (0, Z.tZ)(p.View, {
                                                    className:
                                                      " _dd _Pa _U _Gi",
                                                    children: n.title || "",
                                                  }),
                                                  (0, Z.tZ)(p.View, {
                                                    className: " _Kc _Na _Q",
                                                    children: n.content || "",
                                                  }),
                                                ],
                                              }),
                                              (0, Z.tZ)(p.View, {
                                                className: " _i _l _n _Ga",
                                                children: (0, Z.tZ)(h.Z, {
                                                  className: " _E _Bd",
                                                  children: "󰲧",
                                                }),
                                              }),
                                            ],
                                          },
                                          n.rebookType
                                        );
                                      }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(d.default.Component))
              ) || o;
          Page(
            (0, r.createPageConfig)(
              g,
              "pages/taroCRN/flight/pages/rebookReason/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#efefef",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                disableScroll: !0,
                navigationBarTitleText: "选择改签原因",
                enablePullDownRefresh: !1,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [98946, 7160, 83004, 19559, 11216, 68592], function () {
          return (function (n) {
            return e((e.s = n));
          })(76692);
        }),
          e.O();
      },
    ]);
})();
