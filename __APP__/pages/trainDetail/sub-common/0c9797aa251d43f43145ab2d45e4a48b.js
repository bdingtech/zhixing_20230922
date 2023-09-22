!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [57822],
    {
      80335: function (e, t, i) {
        var l = i(79301),
          n = i(298),
          r = i(95308),
          a = i(52500),
          c = i(71515),
          s = (i(92954), i(79792)),
          o = i(49120),
          u = i(79910),
          d = i(13025),
          m = i(48813),
          p = "<br/>";
        t.Z = a.default.memo(function (e) {
          var t = e.isGDC,
            i = e.ticket,
            a = e.firstImg,
            v = e.secondImg,
            g = e.thirdImg,
            f = e.adImg,
            h = e.onCanCel;
          if (null == i || !i._flipResult) return (0, m.tZ)(c.View, {});
          var w = i._flipResult,
            Z = (void 0 === w ? {} : w).reward,
            x = void 0 === Z ? {} : Z,
            b = t
              ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-11/img_fz_l2.png"
              : "https://images3.c-ctrip.com/ztrip/train_xie/2022-11/img_fz_h2.png",
            N = t
              ? "https://images3.c-ctrip.com/ztrip/train_xie/2020-09/img_pj_ls.png"
              : "https://images3.c-ctrip.com/ztrip/train_xie/2020-09/img_pj_hs.png",
            y = (function () {
              var e = (0, r.Z)(
                (0, l.Z)().mark(function e(t) {
                  var i, r;
                  return (0, l.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (i = {
                                ticketNumber: t.ticketLongNum,
                                coverId: t.paidTicketCoverInfo
                                  ? t.paidTicketCoverInfo.coverId
                                  : 0,
                              }),
                              (e.prev = 1),
                              (e.next = 4),
                              (0, d.mb)(i)
                            );
                          case 4:
                            if ((r = e.sent) && 1 === r.resultCode) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 9:
                            return e.abrupt("return", (0, n.Z)({}, r));
                          case 10:
                            e.next = 16;
                            break;
                          case 12:
                            return (
                              (e.prev = 12),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              e.abrupt("return", null)
                            );
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 12]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            I = (function () {
              var e = (0, r.Z)(
                (0, l.Z)().mark(function e(t) {
                  var i, n, r, a, c;
                  return (0, l.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), y(t);
                        case 2:
                          if ((a = e.sent)) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          2 ===
                            (null === (i = a.data) || void 0 === i
                              ? void 0
                              : i.status) && a.resultMessage
                            ? (0, o.showToastAsync)(
                                null == a ? void 0 : a.resultMessage
                              )
                            : 2 !==
                                (null === (n = a.data) || void 0 === n
                                  ? void 0
                                  : n.status) &&
                              null !== (r = a.data) &&
                              void 0 !== r &&
                              r.miniUrl &&
                              u.Z.commonNavigator(
                                null === (c = a.data) || void 0 === c
                                  ? void 0
                                  : c.miniUrl
                              );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (0, m.BX)(c.View, {
            className: "share-collection-reverse-ticket",
            children: [
              (0, m.tZ)(c.Image, { className: "bg", src: N }),
              (0, m.BX)(c.View, {
                className: "reverse-content flex flex-center flex-column",
                children: [
                  2 === (null == x ? void 0 : x.type) &&
                    (0, m.tZ)(c.View, {
                      className: "title",
                      children: "积分已发放至".concat(
                        s.default.isTieyou ? "铁友" : "智行",
                        "账户 可兑换出行好礼"
                      ),
                    }),
                  (1 === (null == x ? void 0 : x.type) ||
                    5 === (null == x ? void 0 : x.type)) &&
                    (0, m.tZ)(c.View, {
                      className: "title",
                      children: "现金已打款至".concat(
                        s.default.isTieyou ? "铁友" : "智行",
                        "钱包 出行后可激活"
                      ),
                    }),
                  (null == x ? void 0 : x.title) &&
                    6 === (null == x ? void 0 : x.type) &&
                    (0, m.tZ)(c.View, {
                      className: "title",
                      children: null == x ? void 0 : x.title,
                    }),
                  (0, m.BX)(c.View, {
                    class: "reward-detail",
                    children: [
                      5 === (null == x ? void 0 : x.type) &&
                        (0, m.tZ)(c.Image, {
                          className: "free",
                          src: null == x ? void 0 : x.rewardImg,
                        }),
                      3 === (null == x ? void 0 : x.type) &&
                        (0, m.tZ)(c.Image, {
                          className: "wish-txt",
                          src: null == x ? void 0 : x.rewardImg,
                        }),
                      4 === (null == x ? void 0 : x.type) &&
                        (0, m.tZ)(c.Image, {
                          className: "cooperate",
                          src: null == x ? void 0 : x.rewardImg,
                        }),
                      2 === (null == x ? void 0 : x.type) &&
                        (0, m.BX)(c.View, {
                          className: "integral",
                          children: [
                            (0, m.tZ)(c.View, {
                              children: null == x ? void 0 : x.num,
                            }),
                            (0, m.tZ)(c.View, {
                              className: "text",
                              children: "积分",
                            }),
                          ],
                        }),
                      (1 === (null == x ? void 0 : x.type) ||
                        6 === (null == x ? void 0 : x.type)) &&
                        (0, m.BX)(c.View, {
                          class: "price",
                          children: [
                            (0, m.tZ)(c.View, {
                              className: "unit",
                              children: "￥",
                            }),
                            (0, m.tZ)(c.View, {
                              children: null == x ? void 0 : x.num,
                            }),
                            (null == x ? void 0 : x.subText) &&
                              6 === (null == x ? void 0 : x.type) &&
                              (0, m.tZ)(c.View, {
                                className: "sub-text",
                                children: (function () {
                                  var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : "",
                                    t = String(e).split(p) || [];
                                  return t.map(function (e, t) {
                                    return (0,
                                    m.tZ)(c.View, { children: e }, t);
                                  });
                                })(null == x ? void 0 : x.subText),
                              }),
                          ],
                        }),
                    ],
                  }),
                  (0, m.tZ)(c.Image, {
                    className: "split-line ".concat(
                      1 !== (null == x ? void 0 : x.type) &&
                        6 !== (null == x ? void 0 : x.type)
                        ? "cooperate-margin"
                        : ""
                    ),
                    src: "https://images3.c-ctrip.com/ztrip/train_xie/2020-09/img_pg_fgx.png",
                  }),
                  (null == x ? void 0 : x.desc) &&
                    4 !== (null == x ? void 0 : x.type) &&
                    (0, m.tZ)(c.View, {
                      className: "desc",
                      children: null == x ? void 0 : x.desc,
                    }),
                  (null == x ? void 0 : x.buttonTxt) &&
                    (0, m.BX)(c.View, {
                      className: "button flex flex-center flex-column",
                      id: "AACS",
                      onClick: function (e) {
                        e.stopPropagation(),
                          (1 !== (null == x ? void 0 : x.type) &&
                            5 !== (null == x ? void 0 : x.type)) ||
                            I(i),
                          ((null != x && x.miniUrl) || (null != x && x.url)) &&
                            (4 === (null == x ? void 0 : x.type)
                              ? u.Z.commonNavigator(null == x ? void 0 : x.url)
                              : u.Z.commonNavigator(
                                  null == x ? void 0 : x.miniUrl
                                ),
                            h());
                      },
                      children: [
                        (0, m.tZ)(c.View, {
                          children: null == x ? void 0 : x.buttonTxt,
                        }),
                        (null == x ? void 0 : x.buttonDesc) &&
                          (0, m.tZ)(c.View, {
                            className: "button-desc",
                            children: null == x ? void 0 : x.buttonDesc,
                          }),
                      ],
                    }),
                ],
              }),
              (0, m.tZ)(c.Image, {
                class: "back-can-flip ".concat(t ? "gdc" : ""),
                src: b,
              }),
              a && !f && (0, m.tZ)(c.Image, { className: "paid-top", src: a }),
              v &&
                !f &&
                (0, m.tZ)(c.Image, { className: "paid-bottom", src: v }),
              g &&
                (0, m.tZ)(c.Image, { className: "paid-left-bottom", src: g }),
              f && (0, m.tZ)(c.Image, { className: "paid-bottom", src: f }),
            ],
          });
        });
      },
    },
  ]);
})();
