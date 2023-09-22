!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [79470],
    {
      94383: function (e, t, n) {
        var i = n(90129),
          a = n(52500),
          c = n(92954),
          r = n.n(c),
          l = n(71515),
          s = n(34229),
          o = n(55916),
          u = n(79910),
          d = n(3205),
          f = n(18783),
          m = n(48813);
        t.Z = a.default.memo(function (e) {
          var t = e.getAdvantageDrawInfo,
            n = e.onOpenDraw,
            Z = e.isOnlyLowPrice,
            g = void 0 !== Z && Z,
            h = e.tripInfo,
            v = e.visiable,
            w = void 0 === v || v,
            x = (0, a.useState)([]),
            p = (0, i.Z)(x, 2),
            b = p[0],
            N = p[1],
            y = (0, a.useState)(!!f.ZP.isLogin),
            V = (0, i.Z)(y, 2),
            A = V[0],
            C = V[1];
          (0, a.useEffect)(function () {
            A && k({ data: h });
          }, []),
            (0, c.useDidShow)(function () {
              A !== f.ZP.isLogin && f.ZP.isLogin && (C(!0), k({ data: h }));
            });
          var k = function (e) {
              (0, o.TF)(e).then(function (e) {
                var n = e.resultCode,
                  i = e.data;
                if (1 === n && i) {
                  var a = i.lowPriceTag,
                    c = i.bannerTags,
                    r = i.banner,
                    l = [];
                  if (!u.Z.isEmptyObject(a)) {
                    var s = a.tagList,
                      o = "";
                    null == s ||
                      s.forEach(function (e) {
                        o +=
                          '<div class="item" style="float: left;"><img class="icon"  src="'
                            .concat(e.icon, '" />')
                            .concat(e.text, "</div>");
                      }),
                      l.push({
                        icon: a.image,
                        text: o,
                        type: "lowerPrice",
                        url: a.linkUrl,
                      });
                  }
                  null != c && c.length && !g && (l = l.concat(c)),
                    N(l),
                    null == t || t(r || {});
                }
              });
            },
            T = function (e) {
              var t;
              if (
                "lowerPrice" != e.type ||
                1 != (null == b ? void 0 : b.length)
              ) {
                if (17 == e.type) return null == n ? void 0 : n(!0, e.type);
                if (18 == e.type) return null == n ? void 0 : n(!0, e.type);
                if (21 == e.type) return null == n ? void 0 : n(!0, e.type);
                if (null !== (t = e.url) && void 0 !== t && t.trim())
                  if (e.url.startsWith("http"))
                    d.Z.twebview({ data: { url: e.url } });
                  else {
                    var i = e.url.startsWith("/") ? e.url : "/".concat(e.url);
                    r().navigateTo({ url: i });
                  }
              }
            },
            I = function (e) {
              var t = e.data;
              return (0, m.tZ)(l.View, {
                className: "dijia-banner",
                children: (0, m.BX)(a.default.Fragment, {
                  children: [
                    (0, m.tZ)(l.View, {
                      className: "lbox",
                      id: "AACb",
                      onClick: function () {
                        return T(t);
                      },
                      children: (0, m.tZ)(l.Image, {
                        className: "icon-dijia",
                        src: t.icon,
                      }),
                    }),
                    (0, m.tZ)(s.ZtRichText, {
                      nodes: t.text,
                      id: "AACc",
                      onClick: function () {
                        return T(t);
                      },
                    }),
                  ],
                }),
              });
            },
            P = function (e) {
              var t,
                n = e.data,
                i = "background-image: url(".concat(n.bgUrl, ")");
              return (0, m.tZ)(l.View, {
                className: "common-container",
                children: (0, m.BX)(l.View, {
                  className: "business-banner flex-align-items-center",
                  id: "AACd",
                  onClick: function () {
                    return T(n);
                  },
                  style: i,
                  children: [
                    (0, m.tZ)(l.Image, {
                      className: "business-icon",
                      src: n.icon,
                    }),
                    (0, m.tZ)(l.View, {
                      className: "business-features flex flex-1",
                      children:
                        null === (t = n.content) || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              return (0,
                              m.BX)(l.View, { className: "feature-item flex-align-items-center", children: [(0, m.tZ)(l.Image, { className: "feature-icon", src: e.icon }), (0, m.tZ)(s.ZtRichText, { className: "feature-txt", nodes: e.text })] }, e.text);
                            }),
                    }),
                    (0, m.tZ)(l.Text, { className: "ifont2-arr iconfont2" }),
                  ],
                }),
              });
            },
            B = function (e) {
              var t,
                n = e.data,
                i = "background-image: url(".concat(n.bgUrl, ")");
              return (0, m.tZ)(l.View, {
                className: "common-container",
                style: i,
                children: (0, m.BX)(l.View, {
                  className: "new-user-banner flex-align-items-center",
                  id: "AACe",
                  onClick: function () {
                    return T(n);
                  },
                  style: i,
                  children: [
                    (0, m.tZ)(l.Image, {
                      className: "new-user-icon",
                      mode: "heightFix",
                      src: n.icon,
                    }),
                    (0, m.tZ)(l.View, {
                      className: "subsidies flex flex-1",
                      children:
                        null === (t = n.content) || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              return (0,
                              m.tZ)(l.View, { className: "subsidy-item flex-align-items-center", children: e.text }, e.text);
                            }),
                    }),
                    (0, m.tZ)(l.Text, { className: "ifont2-arr iconfont2" }),
                  ],
                }),
              });
            },
            L = function (e) {
              var t = e.data,
                n = "background-image: url(".concat(t.bgUrl, ")");
              return (0, m.tZ)(l.View, {
                className: "notice-banner",
                children: (0, m.BX)(l.View, {
                  className: "item",
                  id: "AACf",
                  onClick: function () {
                    return T(t);
                  },
                  style: n,
                  children: [
                    (0, m.tZ)(l.Image, { src: t.icon, className: "icon" }),
                    (0, m.tZ)(l.View, {
                      className: "cont",
                      children: (0, m.tZ)(s.ZtRichText, {
                        id: "AACg",
                        onClick: function () {
                          return T(t);
                        },
                        className: "txt",
                        nodes: t.text,
                      }),
                    }),
                    (0, m.tZ)(l.Text, { className: "ifont2-arr iconfont2" }),
                  ],
                }),
              });
            },
            S = function (e) {
              return "lowerPrice" === e.type
                ? (0, m.tZ)(I, { data: e })
                : 18 == e.type
                ? (0, m.tZ)(P, { data: e })
                : 17 == e.type
                ? (0, m.tZ)(B, { data: e })
                : (0, m.tZ)(L, { data: e });
            };
          return w
            ? A && null != b && b.length
              ? (0, m.tZ)(l.View, {
                  className: "advantage-banner-container",
                  children: (0, m.tZ)(l.Swiper, {
                    autoplay: !0,
                    circular: !0,
                    vertical: !0,
                    className: "swiper-box",
                    interval: 3e3,
                    children:
                      null == b
                        ? void 0
                        : b.map(function (e, t) {
                            return (0,
                            m.tZ)(l.SwiperItem, { children: S(e) }, t);
                          }),
                  }),
                })
              : null
            : (0, m.tZ)(m.HY, {});
        });
      },
    },
  ]);
})();
