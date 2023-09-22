!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [11901],
      {
        92386: function (e, t, a) {
          var n,
            i = a(32180),
            l = a(90129),
            o = a(79301),
            r = a(95308),
            s = a(298),
            c = a(57042),
            m = a(24460),
            d = a(21867),
            h = a(86066),
            u = a(52500),
            g = a(71515),
            v = a(92954),
            f = a(81957),
            p = a(79404),
            w = a(90668),
            y = a(80626),
            N = a(39173),
            I = a(28333),
            V = a(85486),
            Z = a(53950),
            B = a(48813),
            X =
              (0, f.h)(!1, { usePageWrapper: !0 })(
                (n = (function (e) {
                  (0, d.Z)(a, e);
                  var t = (0, h.Z)(a);
                  function a(e) {
                    var n;
                    return (
                      (0, c.Z)(this, a),
                      ((n = t.call(this, e)).state = {
                        pageId: "10650103432",
                        type: 0,
                        titDesc: "感谢您的反馈 智行口碑榜由您构建",
                        showMoreObj: {},
                        alreadyCommentedData: {},
                        readyCommentedData: {},
                      }),
                      n.getMyComments(2),
                      n.getMyComments(1),
                      n
                    );
                  }
                  return (
                    (0, m.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.PageInstance = (0, v.getCurrentInstance)();
                          var e = this.PageInstance.router.params || {},
                            t = e.data ? (0, w.X5)(e.data) : {};
                          this.setState((0, s.Z)({}, t));
                        },
                      },
                      {
                        key: "gotoHotelDetail",
                        value: function (e) {
                          var t = this.state,
                            a = t.cityId,
                            n = t.queryBitMap,
                            i = t.geoList,
                            l = {
                              hotelId: e.hotelInfo.hotelId,
                              name: e.hotelInfo.hotelName,
                              hotelType: e.hotelInfo.hotelType,
                              zone: "",
                            },
                            o = {
                              query: {
                                queryBitMap: n,
                                cityId: a,
                                checkInDate: (0, y.tf)(),
                                checkOutDate: (0, y.cL)(),
                                fromPage: "ht-my-comment",
                              },
                              hotel: l,
                              geoList: i,
                            };
                          this.ubtTrace(246473, {
                            PageId: this.state.pageId,
                            hotelId: e.hotelInfo.hotelId,
                          }),
                            this.navigateTo({
                              url: "/pages/hotel/detail/detail",
                              data: o,
                            });
                        },
                      },
                      {
                        key: "getMyComments",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var a, n, i;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          (0, N.fs)({
                                            data: {
                                              clientVersion: p.Z.clientVersion,
                                              pageIndex: 1,
                                              operationType: t,
                                              pageSize: 100,
                                            },
                                          })
                                        );
                                      case 3:
                                        (n = e.sent),
                                          null !== (a = n.data) &&
                                            void 0 !== a &&
                                            a.commentDetailList &&
                                            ((i =
                                              1 === t
                                                ? {
                                                    alreadyCommentedData: (0,
                                                    s.Z)({}, n.data),
                                                  }
                                                : {
                                                    readyCommentedData: (0,
                                                    s.Z)({}, n.data),
                                                  }),
                                            this.setState(i)),
                                          (e.next = 10);
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(0)),
                                          console.error("getMyComments", e.t0);
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 7]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          return (0, B.tZ)(g.View, {
                            children: (0, y.gP)(
                              1 !== this.state.type,
                              "我的点评"
                            ),
                          });
                        },
                      },
                      {
                        key: "openImageBox",
                        value: function (e, t) {
                          this.navigateTo({
                            url: "/pages/hotel/imagebox/imagebox",
                            data: { images: e, index: t },
                          });
                        },
                      },
                      {
                        key: "onShowMore",
                        value: function (e) {
                          var t = this.state.showMoreObj;
                          (t[e] = 1), this.setState({ showMoreObj: t });
                        },
                      },
                      {
                        key: "gotoCommentPage",
                        value: function (e) {
                          var t = this.state,
                            a = t.cityId,
                            n = t.queryBitMap,
                            i = t.geoList;
                          this.ubtTrace(246470, {
                            PageId: this.state.pageId,
                            hotelId: e.hotelInfo.hotelId,
                          }),
                            this.navigateTo({
                              url: "/pages/hotel/comment/comment",
                              data: {
                                orderId: e.orderId,
                                hotelId: e.hotelInfo.hotelId,
                                hotelName: e.hotelInfo.hotelName,
                                cityId: a,
                                queryBitMap: n,
                                geoList: i,
                              },
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.type,
                            n = t.titDesc,
                            i = t.showMoreObj,
                            o = this.state.alreadyCommentedData,
                            r = o.commentDetailList,
                            s = o.userInfo,
                            c = o.totalCount,
                            m = this.state.readyCommentedData,
                            d = m.commentDetailList,
                            h = m.totalCount,
                            u = 1 === a;
                          return (0, B.BX)(g.View, {
                            className: "ht-comment-mine",
                            children: [
                              (0, B.BX)(g.View, {
                                className: "header",
                                style: (0, y.LP)(!u, "flex"),
                                children: [
                                  (0, B.tZ)(g.View, {
                                    className: "avatar-wrap",
                                    children:
                                      (null == s ? void 0 : s.avatarUrl) &&
                                      (0, B.tZ)(g.Image, {
                                        className: "avatar",
                                        src: s.avatarUrl,
                                      }),
                                  }),
                                  (0, B.BX)(g.View, {
                                    className: "tit-wrap",
                                    children: [
                                      (0, B.BX)(g.View, {
                                        className: "tit",
                                        children: ["您已发布", c, "条评论"],
                                      }),
                                      (0, B.tZ)(g.View, {
                                        className: "desc",
                                        children: n,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, B.BX)(g.View, {
                                className: "header success",
                                style: (0, y.LP)(u, "flex"),
                                children: [
                                  (0, B.BX)(g.View, {
                                    className: "tit-wrap",
                                    children: [
                                      (0, B.tZ)(g.Image, {
                                        className: "icon",
                                        src: Z.Y_.commentSuccess,
                                      }),
                                      (0, B.tZ)(g.Text, {
                                        className: "tit",
                                        children: "点评成功",
                                      }),
                                    ],
                                  }),
                                  (0, B.tZ)(g.View, {
                                    className: "desc",
                                    children: n,
                                  }),
                                ],
                              }),
                              (0, B.BX)(g.View, {
                                className: "comment-box ready-comment",
                                style: (0, y.LP)(null == d ? void 0 : d.length),
                                children: [
                                  (0, B.BX)(g.View, {
                                    className: "tit",
                                    children: [
                                      "待点评 ",
                                      (0, B.tZ)(g.View, {
                                        className: "btn-primary",
                                        children: h,
                                      }),
                                    ],
                                  }),
                                  null == d
                                    ? void 0
                                    : d.map(function (t, a) {
                                        var n;
                                        return (0,
                                        B.BX)(g.View, { className: "item", children: [(0, B.BX)(g.View, { className: "ht-wrap", children: [(0, B.tZ)(g.Image, { className: "logo", src: null === (n = t.hotelInfo) || void 0 === n ? void 0 : n.logoUrl }), (0, B.BX)(g.View, { className: "name-wrap", children: [(0, B.tZ)(g.View, { className: "name", children: t.hotelInfo.hotelName }), (0, B.BX)(g.View, { className: "", children: [(0, B.tZ)(g.Text, { className: "desc", children: t.checkInDate }), (0, B.tZ)(g.Text, { className: "desc", children: t.roomName })] })] })] }), (0, B.tZ)(g.View, { className: "btn-primary", id: "AXBf", onClick: e.gotoCommentPage.bind(e, t), children: "去评价" })] }, a);
                                      }),
                                ],
                              }),
                              (0, B.BX)(g.View, {
                                className: "comment-box",
                                style: (0, y.LP)(null == r ? void 0 : r.length),
                                children: [
                                  (0, B.BX)(g.View, {
                                    className: "tit",
                                    children: ["已点评(", c, ")"],
                                  }),
                                  null == r
                                    ? void 0
                                    : r.map(function (t, a) {
                                        var n,
                                          o,
                                          r,
                                          s,
                                          c,
                                          m,
                                          d,
                                          h = t.replyItemList || [],
                                          u = (0, l.Z)(h, 1)[0],
                                          v = parseFloat(
                                            null === (n = t.ratings) ||
                                              void 0 === n
                                              ? void 0
                                              : n.ratingOverall
                                          ).toFixed(1),
                                          f =
                                            null === (o = t.imageList) ||
                                            void 0 === o
                                              ? void 0
                                              : o.filter(function (e) {
                                                  return e.imageUrl.startsWith(
                                                    "http"
                                                  );
                                                }),
                                          p =
                                            null == f
                                              ? void 0
                                              : f.filter(function (e) {
                                                  return 1 == e.imageType;
                                                }),
                                          w =
                                            null == f
                                              ? void 0
                                              : f.filter(function (e) {
                                                  return 2 == e.imageType;
                                                }),
                                          N = [1, 2, 4].includes(
                                            null == p ? void 0 : p.length
                                          ),
                                          V =
                                            (null === (r = t.content) ||
                                            void 0 === r
                                              ? void 0
                                              : r.length) > 90 &&
                                            !i[t.commentId];
                                        return (0, B.BX)(
                                          g.View,
                                          {
                                            className: "item",
                                            children: [
                                              (0, B.BX)(g.View, {
                                                className: "ht-wrap",
                                                children: [
                                                  (0, B.tZ)(g.Image, {
                                                    className: "logo",
                                                    src:
                                                      null ===
                                                        (s = t.hotelInfo) ||
                                                      void 0 === s
                                                        ? void 0
                                                        : s.logoUrl,
                                                  }),
                                                  (0, B.BX)(g.View, {
                                                    className: "",
                                                    id: "AXBg",
                                                    onClick:
                                                      e.gotoHotelDetail.bind(
                                                        e,
                                                        t
                                                      ),
                                                    children: [
                                                      (0, B.BX)(g.View, {
                                                        className: "name",
                                                        children: [
                                                          t.hotelInfo.hotelName,
                                                          " ",
                                                          (0, B.tZ)(I.Z, {
                                                            name: "arr",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, B.BX)(g.View, {
                                                        className:
                                                          "rating-wrap",
                                                        children: [
                                                          (0, B.tZ)(g.Image, {
                                                            className:
                                                              "rating-icon",
                                                            src:
                                                              null ===
                                                                (c =
                                                                  t.ratings) ||
                                                              void 0 === c
                                                                ? void 0
                                                                : c.ratingIcon,
                                                          }),
                                                          (0, B.tZ)(g.Text, {
                                                            className: "rating",
                                                            children: v,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, B.BX)(g.View, {
                                                className: "desc-wrap",
                                                children: [
                                                  (0, B.tZ)(g.View, {
                                                    className: "desc",
                                                    children: t.checkInDate,
                                                  }),
                                                  (0, B.tZ)(g.View, {
                                                    className: "desc",
                                                    children: t.travelType,
                                                  }),
                                                  (0, B.tZ)(g.View, {
                                                    className: "desc",
                                                    children: t.roomName,
                                                  }),
                                                ],
                                              }),
                                              (0, B.BX)(g.View, {
                                                className: "content",
                                                children: [
                                                  t.content.slice(
                                                    0,
                                                    V ? 90 : t.content.length
                                                  ),
                                                  V ? "..." : "",
                                                  (0, B.tZ)(g.View, {
                                                    className: "more",
                                                    id: "AXBh",
                                                    onClick: function () {
                                                      return e.onShowMore(
                                                        t.commentId
                                                      );
                                                    },
                                                    style: (0, y.LP)(V),
                                                    children: "展示全文",
                                                  }),
                                                  (0, B.tZ)(g.View, {
                                                    className: "images".concat(
                                                      (0, y.gP)(N, " large")
                                                    ),
                                                    style: (0, y.LP)(
                                                      null ===
                                                        (m = t.imageList) ||
                                                        void 0 === m
                                                        ? void 0
                                                        : m.length,
                                                      "flex"
                                                    ),
                                                    children:
                                                      null == p ||
                                                      null ===
                                                        (d = p.filter(function (
                                                          e
                                                        ) {
                                                          return e.imageUrl.startsWith(
                                                            "http"
                                                          );
                                                        })) ||
                                                      void 0 === d
                                                        ? void 0
                                                        : d.map(function (
                                                            t,
                                                            a
                                                          ) {
                                                            return (0, B.tZ)(
                                                              g.View,
                                                              {
                                                                className:
                                                                  "image",
                                                                style:
                                                                  "background-image:url(".concat(
                                                                    t.imageUrl,
                                                                    ")"
                                                                  ),
                                                                id: "AXBi",
                                                                onClick:
                                                                  function () {
                                                                    return e.openImageBox(
                                                                      w,
                                                                      a
                                                                    );
                                                                  },
                                                              },
                                                              a
                                                            );
                                                          }),
                                                  }),
                                                ],
                                              }),
                                              u &&
                                                (0, B.BX)(g.View, {
                                                  className: "reply",
                                                  children: [
                                                    (0, B.BX)(g.View, {
                                                      className: "r-tit",
                                                      children: [u.name, ":"],
                                                    }),
                                                    (0, B.tZ)(g.View, {
                                                      className: "r-txt",
                                                      children: u.text,
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          },
                                          a
                                        );
                                      }),
                                ],
                              }),
                              (0, B.tZ)(V.Z, {}),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(u.Component))
              ) || n;
          Page(
            (0, i.createPageConfig)(
              X,
              "pages/hotel/comment/myComments",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "我的点评",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#fff",
                backgroundColorBottom: "#efefef",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(92386);
        }),
          e.O();
      },
    ]);
})();
