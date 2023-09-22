!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [98527],
    {
      24596: function (e, a, s) {
        var c,
          t = s(32180),
          i = s(57042),
          l = s(24460),
          n = s(21867),
          r = s(86066),
          o = s(52500),
          g = s(71515),
          m = (s(92954), s(79792)),
          d = s(48792),
          h = s.n(d),
          N = s(81957),
          w = s(48813),
          Z = {
            pageId: "10650060605",
            data: {
              sourceType: "",
              sharedRecords: [],
              topShareRecordTopList: [],
              leftShareRecordList: [],
              isTieyou: m.default.isTieyou,
            },
            onLoad: function (e) {
              var a = e.data || {},
                s = a.sharedRecords,
                c = void 0 === s ? [] : s,
                t = a.sourceType,
                i = void 0 === t ? "" : t,
                l = c.slice(0, 3),
                n = c.slice(3);
              this.setData({
                sourceType: i,
                sharedRecords: c,
                topShareRecordTopList: l,
                leftShareRecordList: n,
              });
            },
          },
          p =
            (0, N.h)()(
              (c =
                h()(Z)(
                  (c = (function (e) {
                    (0, n.Z)(s, e);
                    var a = (0, r.Z)(s);
                    function s() {
                      return (0, i.Z)(this, s), a.apply(this, arguments);
                    }
                    return (
                      (0, l.Z)(s, [
                        {
                          key: "render",
                          value: function () {
                            var e = this.data,
                              a = e.topShareRecordTopList,
                              s = e.leftShareRecordList,
                              c = e.sourceType;
                            return (0, w.tZ)(g.Block, {
                              children:
                                "robshareNew" === c
                                  ? (0, w.BX)(g.View, {
                                      children: [
                                        (0, w.BX)(g.View, {
                                          className: "rank-top",
                                          children: [
                                            a[1] &&
                                              (0, w.BX)(g.View, {
                                                className: "item no2",
                                                children: [
                                                  (0, w.tZ)(g.Image, {
                                                    src: a[1].wechatPhoto,
                                                    className: "avatar",
                                                  }),
                                                  a[1].passengerTag &&
                                                    (0, w.tZ)(g.Block, {
                                                      children:
                                                        "金手指" ===
                                                        a[1].passengerTag
                                                          ? (0, w.tZ)(g.View, {
                                                              className:
                                                                "tag-gold",
                                                              children:
                                                                "金手指",
                                                            })
                                                          : (0, w.tZ)(g.View, {
                                                              className:
                                                                "tag-blue",
                                                              children:
                                                                a[1]
                                                                  .passengerTag,
                                                            }),
                                                    }),
                                                  a[1].icon &&
                                                    (0, w.tZ)(g.Image, {
                                                      src: a[1].icon,
                                                      className: "tag-red",
                                                    }),
                                                  (0, w.tZ)(g.View, {
                                                    className: "name",
                                                    children:
                                                      a[1].wechatNickName &&
                                                      "undefined" !==
                                                        a[1].wechatNickName
                                                        ? a[1].wechatNickName
                                                        : "神秘用户",
                                                  }),
                                                  (0, w.tZ)(g.View, {
                                                    className: "txt",
                                                    children:
                                                      a[1].virtualPackageLevel +
                                                      "个",
                                                  }),
                                                ],
                                              }),
                                            a[0] &&
                                              (0, w.BX)(g.View, {
                                                className: "item no1",
                                                children: [
                                                  (0, w.tZ)(g.Image, {
                                                    src: a[0].wechatPhoto,
                                                    className: "avatar",
                                                  }),
                                                  a[0].passengerTag &&
                                                    (0, w.tZ)(g.Block, {
                                                      children:
                                                        "金手指" ===
                                                        a[0].passengerTag
                                                          ? (0, w.tZ)(g.View, {
                                                              className:
                                                                "tag-gold",
                                                              children:
                                                                "金手指",
                                                            })
                                                          : (0, w.tZ)(g.View, {
                                                              className:
                                                                "tag-blue",
                                                              children:
                                                                a[0]
                                                                  .passengerTag,
                                                            }),
                                                    }),
                                                  a[0].icon &&
                                                    (0, w.tZ)(g.Image, {
                                                      src: a[0].icon,
                                                      className: "tag-red",
                                                    }),
                                                  (0, w.tZ)(g.View, {
                                                    className: "name",
                                                    children:
                                                      a[0].wechatNickName &&
                                                      "undefined" !==
                                                        a[0].wechatNickName
                                                        ? a[0].wechatNickName
                                                        : "神秘用户",
                                                  }),
                                                  (0, w.tZ)(g.View, {
                                                    className: "txt",
                                                    children:
                                                      a[0].virtualPackageLevel +
                                                      "个",
                                                  }),
                                                ],
                                              }),
                                            a[2] &&
                                              (0, w.BX)(g.View, {
                                                className: "item no3",
                                                children: [
                                                  (0, w.tZ)(g.Image, {
                                                    src: a[2].wechatPhoto,
                                                    className: "avatar",
                                                  }),
                                                  a[2].passengerTag &&
                                                    (0, w.tZ)(g.Block, {
                                                      children:
                                                        "金手指" ===
                                                        a[2].passengerTag
                                                          ? (0, w.tZ)(g.View, {
                                                              className:
                                                                "tag-gold",
                                                              children:
                                                                "金手指",
                                                            })
                                                          : (0, w.tZ)(g.View, {
                                                              className:
                                                                "tag-blue",
                                                              children:
                                                                a[2]
                                                                  .passengerTag,
                                                            }),
                                                    }),
                                                  a[2].icon &&
                                                    (0, w.tZ)(g.Image, {
                                                      src: a[2].icon,
                                                      className: "tag-red",
                                                    }),
                                                  (0, w.tZ)(g.View, {
                                                    className: "name",
                                                    children:
                                                      a[2].wechatNickName &&
                                                      "undefined" !==
                                                        a[2].wechatNickName
                                                        ? a[2].wechatNickName
                                                        : "神秘用户",
                                                  }),
                                                  (0, w.tZ)(g.View, {
                                                    className: "txt",
                                                    children:
                                                      a[2].virtualPackageLevel +
                                                      "个",
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                        s &&
                                          s[0] &&
                                          (0, w.tZ)(g.Block, {
                                            children: s.map(function (e, a) {
                                              return (0,
                                              w.tZ)(g.View, { className: "rank-list", children: (0, w.BX)(g.View, { className: "item", children: [(0, w.tZ)(g.View, { className: "no", children: a + 4 }), (0, w.tZ)(g.Image, { src: e.wechatPhoto, className: "avatar" }), (0, w.tZ)(g.View, { className: "name", children: e.wechatNickName && "undefined" !== e.wechatNickName ? e.wechatNickName : "神秘用户" }), e.passengerTag && (0, w.tZ)(g.Block, { children: "金手指" === e.passengerTag ? (0, w.tZ)(g.View, { className: "tag-gold", children: "金手指" }) : (0, w.tZ)(g.View, { className: "tag-blue", children: e.passengerTag }) }), e.icon && (0, w.tZ)(g.Image, { src: e.icon, className: "tag-red" }), (0, w.tZ)(g.View, { className: "rbox", children: e.virtualPackageLevel + "个" })] }) }, "index");
                                            }),
                                          }),
                                      ],
                                    })
                                  : (0, w.BX)(g.View, {
                                      children: [
                                        (0, w.BX)(g.View, {
                                          className: "rank-top",
                                          children: [
                                            a[1] &&
                                              (0, w.BX)(g.View, {
                                                className: "item no2",
                                                children: [
                                                  (0, w.tZ)(g.Image, {
                                                    src: a[1].passagePhotoUrl,
                                                    className: "avatar",
                                                  }),
                                                  a[1].passageTag &&
                                                    (0, w.tZ)(g.Block, {
                                                      children:
                                                        "金手指" ===
                                                        a[1].passageTag
                                                          ? (0, w.tZ)(g.View, {
                                                              className:
                                                                "tag-gold",
                                                              children:
                                                                "金手指",
                                                            })
                                                          : (0, w.tZ)(g.View, {
                                                              className:
                                                                "tag-blue",
                                                              children:
                                                                a[1].passageTag,
                                                            }),
                                                    }),
                                                  a[1].icon &&
                                                    (0, w.tZ)(g.Image, {
                                                      src: a[1].icon,
                                                      className: "tag-red",
                                                    }),
                                                  (0, w.tZ)(g.View, {
                                                    className: "name",
                                                    children:
                                                      a[1].passageName &&
                                                      "undefined" !==
                                                        a[1].passageName
                                                        ? a[1].passageName
                                                        : "神秘用户",
                                                  }),
                                                  (0, w.tZ)(g.View, {
                                                    className: "txt",
                                                    children:
                                                      a[1].flowPacketCount +
                                                      "个",
                                                  }),
                                                ],
                                              }),
                                            a[0] &&
                                              (0, w.BX)(g.View, {
                                                className: "item no1",
                                                children: [
                                                  (0, w.tZ)(g.Image, {
                                                    src: a[0].passagePhotoUrl,
                                                    className: "avatar",
                                                  }),
                                                  a[0].passageTag &&
                                                    (0, w.tZ)(g.Block, {
                                                      children:
                                                        "金手指" ===
                                                        a[0].passageTag
                                                          ? (0, w.tZ)(g.View, {
                                                              className:
                                                                "tag-gold",
                                                              children:
                                                                "金手指",
                                                            })
                                                          : (0, w.tZ)(g.View, {
                                                              className:
                                                                "tag-blue",
                                                              children:
                                                                a[0].passageTag,
                                                            }),
                                                    }),
                                                  a[0].icon &&
                                                    (0, w.tZ)(g.Image, {
                                                      src: a[0].icon,
                                                      className: "tag-red",
                                                    }),
                                                  (0, w.tZ)(g.View, {
                                                    className: "name",
                                                    children:
                                                      a[0].passageName &&
                                                      "undefined" !==
                                                        a[0].passageName
                                                        ? a[0].passageName
                                                        : "神秘用户",
                                                  }),
                                                  (0, w.tZ)(g.View, {
                                                    className: "txt",
                                                    children:
                                                      a[0].flowPacketCount +
                                                      "个",
                                                  }),
                                                ],
                                              }),
                                            a[2] &&
                                              (0, w.BX)(g.View, {
                                                className: "item no3",
                                                children: [
                                                  (0, w.tZ)(g.Image, {
                                                    src: a[2].passagePhotoUrl,
                                                    className: "avatar",
                                                  }),
                                                  a[2].passageTag &&
                                                    (0, w.tZ)(g.Block, {
                                                      children:
                                                        "金手指" ===
                                                        a[2].passageTag
                                                          ? (0, w.tZ)(g.View, {
                                                              className:
                                                                "tag-gold",
                                                              children:
                                                                "金手指",
                                                            })
                                                          : (0, w.tZ)(g.View, {
                                                              className:
                                                                "tag-blue",
                                                              children:
                                                                a[2].passageTag,
                                                            }),
                                                    }),
                                                  a[2].icon &&
                                                    (0, w.tZ)(g.Image, {
                                                      src: a[2].icon,
                                                      className: "tag-red",
                                                    }),
                                                  (0, w.tZ)(g.View, {
                                                    className: "name",
                                                    children:
                                                      a[2].passageName &&
                                                      "undefined" !==
                                                        a[2].passageName
                                                        ? a[2].passageName
                                                        : "神秘用户",
                                                  }),
                                                  (0, w.tZ)(g.View, {
                                                    className: "txt",
                                                    children:
                                                      a[2].flowPacketCount +
                                                      "个",
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                        s &&
                                          s[0] &&
                                          (0, w.tZ)(g.Block, {
                                            children: s.map(function (e, a) {
                                              return (0,
                                              w.tZ)(g.View, { className: "rank-list", children: (0, w.BX)(g.View, { className: "item", children: [(0, w.tZ)(g.View, { className: "no", children: a + 4 }), (0, w.tZ)(g.Image, { src: e.passagePhotoUrl, className: "avatar" }), (0, w.tZ)(g.View, { className: "name", children: e.passageName && "undefined" !== e.passageName ? e.passageName : "神秘用户" }), e.passageTag && (0, w.tZ)(g.Block, { children: "金手指" === e.passageTag ? (0, w.tZ)(g.View, { className: "tag-gold", children: "金手指" }) : (0, w.tZ)(g.View, { className: "tag-blue", children: e.passageTag }) }), e.icon && (0, w.tZ)(g.Image, { src: e.icon, className: "tag-red" }), (0, w.tZ)(g.View, { className: "rbox", children: e.flowPacketCount + "个" })] }) }, "index");
                                            }),
                                          }),
                                      ],
                                    }),
                            });
                          },
                        },
                      ]),
                      s
                    );
                  })(o.default.Component))
                ) || c)
            ) || c;
        Page(
          (0, t.createPageConfig)(
            p,
            "pages/robshareV3/rank/rank",
            { root: { cn: [] } },
            {
              navigationBarTitleText: "排行榜",
              navigationBarTextStyle: "white",
              navigationBarBackgroundColor: "#0066e6",
              backgroundColorTop: "#0066e6",
              backgroundColorBottom: "#FFFFFF",
            } || {}
          )
        );
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (a) {
          return e((e.s = a));
        })(24596);
      }),
        e.O();
    },
  ]);
})();
