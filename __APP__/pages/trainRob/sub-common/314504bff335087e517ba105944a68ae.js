!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [69455],
    {
      35657: function (e, t, i) {
        var c = i(52500),
          a = (i(92954), i(71515)),
          n = i(79792),
          s = i(34229),
          r = i(17368),
          l = i(48813),
          o = n.default.isTieyou;
        t.Z = c.default.memo(function (e) {
          var t = e.propStyle,
            i = e.fromPage,
            c = e.v2,
            p = e.content,
            m = e.type,
            d = void 0 === m ? 0 : m,
            h = e.onTypeChange,
            u = void 0 === h ? function () {} : h;
          if (!p && Array.isArray(p)) return (0, l.tZ)(a.View, {});
          var g = 0;
          return (
            p.forEach(function (e) {
              var t,
                i =
                  (null === (t = e.descs) || void 0 === t
                    ? void 0
                    : t.length) || 0;
              g <= i && (g = i);
            }),
            (0, l.tZ)(a.View, {
              className: "special-person-grab-selecter",
              style: t,
              children: p.map(function (e, t) {
                return (0, l.BX)(
                  a.View,
                  {
                    className: "option-item "
                      .concat(d === e.type ? "cur" : "", " ")
                      .concat(
                        "grabDetail" === i && 0 === e.type ? "disabled" : ""
                      ),
                    id: "AAEX",
                    onClick: function () {
                      !(function (e) {
                        "grabDetail" === i
                          ? 0 === e || u(e === d ? -1 : e)
                          : u(e);
                      })(e.type);
                    },
                    children: [
                      (0, l.tZ)(a.Image, {
                        src: e.icon,
                        className: "icon-head ".concat(
                          p.length - 1 === t ? "multi" : ""
                        ),
                      }),
                      "grabDetail" !== i &&
                        (0, l.tZ)(a.View, {
                          className: "tit",
                          children: e.title,
                        }),
                      "grabDetail" === i &&
                        0 !== e.type &&
                        (0, l.BX)(a.View, {
                          className: "tit-box flex-align-items-center",
                          children: [
                            (0, l.tZ)(a.View, {
                              className: "tit",
                              children: e.title,
                            }),
                            (0, l.tZ)(r.Z, {
                              mode: "img",
                              iconUrl:
                                "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_16.png",
                              jumpUrl:
                                "https://market.suanya.com/document/static/".concat(
                                  n.default.isTieyou ? "ty" : "zx",
                                  "_24zrqpfw.html"
                                ),
                            }),
                          ],
                        }),
                      (0, l.BX)(a.View, {
                        className: "price-box",
                        children: [
                          !!e.underlinePrice &&
                            (0, l.tZ)(a.View, {
                              className: "line-price",
                              children: "¥" + e.underlinePrice,
                            }),
                          (0, l.tZ)(a.View, {
                            className: "sale-price",
                            style:
                              t === p.length - 1 && c ? "color: #fc6e51;" : "",
                            children: "¥" + e.salePrice + "/人",
                          }),
                        ],
                      }),
                      (0, l.tZ)(a.View, { className: "dash-line" }),
                      (0, l.tZ)(a.View, {
                        className: "desc-box",
                        children: new Array(g).fill(0).map(function (t, i) {
                          return (0,
                          l.tZ)(a.View, { className: "desc", children: e.descs[i] ? (0, l.tZ)(s.ZtRichText, { className: "txt", nodes: e.descs[i] }) : (0, l.tZ)(a.Image, { className: "x", src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_cha.png" }) }, i);
                        }),
                      }),
                      "grabDetail" === i && 0 === e.type
                        ? (0, l.tZ)(a.View, {
                            className: "txt-cur",
                            children: "当前方案",
                          })
                        : (0, l.tZ)(a.Image, {
                            src:
                              e.type === d
                                ? o
                                  ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_ed_ty.png"
                                  : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_ed_zx.png"
                                : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_normal.png",
                            className: "icon-radio",
                            webp: !0,
                          }),
                      e.tag &&
                        (0, l.BX)(a.View, {
                          className: "tag-box",
                          children: [
                            (0, l.tZ)(a.Image, {
                              className: "icon-tag",
                              src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_qipao_jiantou_red.png",
                            }),
                            (0, l.tZ)(a.View, {
                              className: "txt-tag",
                              children: e.tag,
                            }),
                          ],
                        }),
                    ],
                  },
                  e.salePrice
                );
              }),
            })
          );
        });
      },
    },
  ]);
})();
