!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [45944],
    {
      93983: function (e, n, t) {
        var i = t(90129),
          l = t(52500),
          c = t(92954),
          s = t.n(c),
          o = t(71515),
          a = t(34229),
          r = t(48813);
        n.Z = l.default.memo(function (e) {
          var n,
            t = e.visible,
            c = void 0 !== t && t,
            d = e.drawerInfo,
            u = void 0 === d ? null : d,
            m = e.onClose,
            f = void 0 === m ? function () {} : m,
            h = (0, l.useState)(0),
            w = (0, i.Z)(h, 2),
            v = w[0],
            Z = w[1];
          if (
            ((0, l.useEffect)(
              function () {
                var e,
                  n =
                    null == u || null === (e = u.contents) || void 0 === e
                      ? void 0
                      : e.find(function (e) {
                          var n;
                          return (
                            (null === (n = e.flows) || void 0 === n
                              ? void 0
                              : n.length) > 0
                          );
                        }),
                  t = (null == n ? void 0 : n.flows) || [];
                c &&
                  t.length > 0 &&
                  s()
                    .createSelectorQuery()
                    .selectAll("#step_0,#step_".concat(t.length - 1))
                    .boundingClientRect(function (e) {
                      var n, t;
                      !(function (e) {
                        Z(e);
                      })(
                        2 *
                          ((null == e || null === (n = e[1]) || void 0 === n
                            ? void 0
                            : n.top) -
                            (null == e || null === (t = e[0]) || void 0 === t
                              ? void 0
                              : t.top) || 0) +
                          20
                      );
                    })
                    .exec();
              },
              [c]
            ),
            !u ||
              (null === (n = u.contents) || void 0 === n ? void 0 : n.length) <=
                0)
          )
            return (0, r.tZ)(o.View, {});
          return (0, r.tZ)(a.ZtDrawer, {
            show: c,
            isDefineHead: !0,
            className: "tsmart-rs-bhcd-drawer",
            children: (0, r.BX)(o.View, {
              className: "content",
              children: [
                u.headTitle &&
                  (0, r.tZ)(o.Image, {
                    className: "tit-img",
                    src: u.headTitle,
                  }),
                (0, r.tZ)(o.View, {
                  className: "iconfont2 ifont2-close",
                  id: "AADY",
                  onClick: f,
                }),
                (0, r.tZ)(l.Fragment, {
                  children: u.contents.map(function (e) {
                    var n;
                    return (null == e || null === (n = e.flows) || void 0 === n
                      ? void 0
                      : n.length) > 0
                      ? (function (e) {
                          return (0, r.BX)(o.View, {
                            className: "flow-box",
                            children: [
                              (0, r.tZ)(o.View, {
                                className: "dash-line",
                                style: "height: ".concat(s().pxTransform(v)),
                              }),
                              e.map(function (e, n) {
                                return (0,
                                r.BX)(o.View, { className: "step", id: "step_".concat(n), children: [(0, r.BX)(o.View, { className: "s-top flex-align-items-center", children: [(0, r.tZ)(o.View, { className: "icon" }), (0, r.tZ)(o.View, { className: "tit", children: e.subTitle })] }), (0, r.tZ)(o.View, { className: "s-desc", children: e.content })] }, "step_".concat(n));
                              }),
                            ],
                          });
                        })(e.flows)
                      : null != e && e.cashbackRule
                      ? (function (e) {
                          return (0, r.BX)(o.View, {
                            className: "receive-method",
                            children: [
                              (0, r.tZ)(o.View, {
                                className: "title flex-align-items-center",
                                children: e.title,
                              }),
                              (0, r.tZ)(o.View, {
                                className: "desc",
                                children: e.cashbackRule,
                              }),
                            ],
                          });
                        })(e)
                      : void 0;
                  }),
                }),
                (0, r.tZ)(o.View, {
                  className: "tsmart-botm-box",
                  children: (0, r.tZ)(o.Button, {
                    className: "confirm-btn",
                    id: "AADZ",
                    onClick: f,
                    children: "知道了",
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
