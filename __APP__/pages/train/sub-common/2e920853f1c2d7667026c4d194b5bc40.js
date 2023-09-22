!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [80267],
    {
      79846: function (e, t, i) {
        var a = i(90129),
          n = i(52500),
          c = (i(92954), i(71515)),
          s = i(34229),
          l = i(55916),
          r = i(3205),
          o = i(79792),
          u = i(79910),
          m = i(59086),
          d = i(48813),
          f = { borderRadius: "40rpx 40rpx 0 0" };
        t.Z = n.default.memo(function (e) {
          var t = e.handleShow,
            i = e.onClose,
            h = e.fromPage,
            w = e.pageId,
            g = e.ubtTrace,
            p = void 0 === g ? function () {} : g,
            _ = m.a_.get(),
            Z = (0, n.useState)(!1),
            N = (0, a.Z)(Z, 2),
            x = N[0],
            b = N[1],
            y = (0, n.useState)(""),
            S = (0, a.Z)(y, 2),
            V = S[0],
            v = S[1],
            C = (0, n.useState)(""),
            P = (0, a.Z)(C, 2),
            B = P[0],
            k = P[1],
            I = (0, n.useState)([]),
            X = (0, a.Z)(I, 2),
            D = X[0],
            z = X[1];
          (0, n.useEffect)(
            function () {
              x &&
                V &&
                p("P0033_SP0000_M0001_ID0001_exposure", {
                  user_tag: V,
                  PageCode: w,
                });
            },
            [x, V]
          ),
            (0, n.useEffect)(function () {
              var e = "list" === h ? { checkFrameworkLogin: !1 } : {};
              (0, l.h)({}, e).then(function (e) {
                var i = e.resultCode,
                  a = e.data;
                if (1 === i && !u.Z.isEmptyObject(a)) {
                  var n = a.welfare,
                    c = a.identity;
                  if (_ !== c)
                    b(!0),
                      null == t || t(!0, a.identityName),
                      m.a_.set(c),
                      z(n || []),
                      v(a.identityName),
                      k(a.ruleUrl);
                  else null == t || t(!1);
                }
              });
            }, []);
          var A = (0, n.useState)(!1),
            E = (0, a.Z)(A, 2),
            M = E[0],
            T = E[1],
            J = function () {
              b(!1), null == i || i();
            },
            R = D.slice(0, 4),
            j = M
              ? R.filter(function (e) {
                  return e.won;
                })
              : R,
            F = ["one", "two", "three", "four"][j.length - 1],
            L = M
              ? "恭喜成为<font color='#EB2020'>".concat(V, "!</font>")
              : "全网招募：".concat(
                  o.default.isTieyou ? "铁友" : "智行",
                  "机票体验官"
                );
          return (0, d.BX)(s.ZtDrawer, {
            className: "flight-draw-pop",
            isShowClose: !0,
            show: x,
            onClose: J,
            onWrapClose: J,
            drawerStyle: f,
            children: [
              (0, d.BX)(c.View, {
                className: "draw-title",
                children: [
                  (0, d.tZ)(s.ZtRichText, { nodes: L, space: "nbsp" }),
                  (0, d.tZ)(c.Image, {
                    className: "title-bg-icon",
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/shouye/tiyanguan/img_tiyanguan_bg_pic@3x.png",
                  }),
                ],
              }),
              (0, d.BX)(c.View, {
                className: "draw-content",
                children: [
                  (0, d.BX)(c.View, {
                    className: "cont-head flex-align-items-center",
                    children: [
                      (0, d.tZ)(c.View, {
                        className: "cont-title flex-align-items-center",
                        children: "免费得以下权益机会",
                      }),
                      !M &&
                        (0, d.tZ)(c.View, {
                          className: "rule",
                          id: "AACu",
                          onClick: function () {
                            r.Z.twebview({ data: { url: B } });
                          },
                          children: "活动规则",
                        }),
                    ],
                  }),
                  (0, d.tZ)(c.View, {
                    className: "welfare-list flex",
                    children: j.map(function (e, t) {
                      return (0,
                      d.BX)(c.View, { className: "welfare-item flex-align-items-center ".concat(F), children: [M && (0, d.tZ)(c.Image, { className: "item-bg-icon", src: "https://images3.c-ctrip.com/ztrip/zhixingios/shouye/tiyanguan/img_tiyanguan_yihuode@3x.png" }), (0, d.tZ)(c.Image, { className: "item-icon", src: e.icon }), (0, d.BX)(c.View, { className: "item-cont flex-1", children: [(0, d.tZ)(c.View, { className: "item-title", children: e.title }), (0, d.tZ)(c.View, { className: "item-desc", style: M ? "" : { color: "#c39696" }, children: M ? "已获得权益" : e.subTitle })] })] }, t);
                    }),
                  }),
                ],
              }),
              (0, d.BX)(c.View, {
                className: "draw-botm",
                children: [
                  !M &&
                    (0, d.tZ)(c.View, {
                      className: "btn-tag",
                      children: "一秒审核",
                    }),
                  (0, d.tZ)(c.Button, {
                    className: "confirm-btn",
                    id: "AACv",
                    onClick: function () {
                      var e = { user_tag: V, PageCode: w };
                      if (!M)
                        return (
                          T(!0),
                          p("P0033_SP0000_M0001_ID0001_click", e),
                          void p("P0033_SP0000_M0001_ID0002_exposure", e)
                        );
                      p("P0033_SP0000_M0001_ID0002_click", e), J();
                    },
                    children: M ? "开心收下" : "一键报名",
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
