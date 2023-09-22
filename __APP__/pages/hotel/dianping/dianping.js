!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [72986],
      {
        6288: function (e, t, a) {
          var i,
            l = a(32180),
            n = a(57042),
            s = a(24460),
            o = a(21867),
            r = a(86066),
            c = a(45023),
            m = a(298),
            d = a(52500),
            p = a(71515),
            h = a(92954),
            g = a.n(h),
            y = a(48792),
            u = a.n(y),
            f = a(49120),
            w = a(79792),
            I = a(79910),
            N = a(79404),
            D = a(8271),
            L = a.n(D),
            v = a(92667),
            x = a(90668),
            V = a(81957),
            C = a(93004),
            B = a(48813),
            Z = "YYYY-MM-DD",
            T = {
              pageId: w.default.isTieyou ? "10650047151" : "10650047149",
              data: {
                hotelId: "",
                pageIndex: 1,
                pageTotal: 1,
                operationType: 0,
                filterBy: null,
                isTieyou: w.default.isTieyou,
                myCommentGroup: {},
                commentGroup: {},
                myCommentDetailList: [],
                commentDetailList: [],
                hotelCommentDynamicInfo: {},
                hotelCommentStaticInfo: {},
                lastBookingOrder: "",
                isRenderMoreFilterTag: !0,
                isFirstApper: !0,
                commentTagList: [],
                commentQueryList: [],
                askReplyList: [],
                type: "comment",
                replyPageIndex: 0,
                selectKey: "9999",
                statusBarHeight: 0,
              },
              onLoad: function (e) {
                var t = e.hotelId,
                  a = e.type,
                  i = void 0 === a ? "comment" : a;
                return (
                  this.setData({ hotelId: t, type: i }),
                  this.getSystemInfo(),
                  this.getAskReplyList(),
                  this
                );
              },
              onReady: function () {
                var e = this;
                e.getHotelCommentAll(),
                  e.setData({ pageIndex: e.data.pageIndex + 1 });
              },
              onShow: function () {},
              onReachBottom: function () {
                if ("qa" === this.data.type) {
                  if (this.data.replyPageIndex >= this.data.qaPageCount) return;
                  this.setData({
                    replyPageIndex: this.data.replyPageIndex + 1,
                  }),
                    this.getAskReplyList();
                } else {
                  if (this.data.pageIndex >= this.data.pageTotal) return;
                  this.getHotelCommentGroup(),
                    this.setData({ pageIndex: this.data.pageIndex + 1 });
                }
              },
              getSystemInfo: function () {
                var e = this;
                g().getSystemInfo({
                  success: function (t) {
                    e.setData({ statusBarHeight: t.statusBarHeight });
                  },
                });
              },
              getHotelCommentAll: function () {
                var e = this;
                e.setData({
                  pageIndex: 1,
                  operationType: 0,
                  filterBy: null,
                  myCommentDetailList: [],
                  commentDetailList: [],
                  selectKey: "9999",
                }),
                  e.getHotelCommentGroup(),
                  e.setData({ pageIndex: e.data.pageIndex + 1 });
              },
              getHotelCommentTag: function (e) {
                var t = this,
                  a = e.currentTarget.dataset.sort || {},
                  i = a.key || "";
                "有图" == a.name
                  ? t.setData({
                      pageIndex: 1,
                      operationType: 3,
                      filterBy: null,
                      myCommentDetailList: [],
                      commentDetailList: [],
                      selectKey: i,
                    })
                  : t.setData({
                      pageIndex: 1,
                      operationType: 0,
                      filterBy: { itemType: 4, itemValue: i },
                      myCommentDetailList: [],
                      commentDetailList: [],
                      selectKey: i,
                    }),
                  t.getHotelCommentGroup(),
                  t.setData({ pageIndex: t.data.pageIndex + 1 });
              },
              getHotelCommentGroup: function () {
                var e = this;
                (0, f.showLoading)();
                var t = this,
                  a = t.data.pageIndex || 1,
                  i = t.data.pageTotal || 1,
                  l = {
                    data: {
                      hotelId: t.data.hotelId,
                      pageIndex: a,
                      pageSize: 10,
                      sortBy: 2,
                      orderBy: 1,
                      getTypeBitMap: 54,
                      operationType: t.data.operationType,
                      controlBitMap: 14,
                      filterSettingList: t.data.filterBy
                        ? [t.data.filterBy]
                        : [],
                      clientVersion: N.Z.clientVersion,
                    },
                  };
                (0, v.k2)(l)
                  .then(function (t) {
                    var l = e;
                    if (((0, f.hideLoading)(), t.resultCode && t.data)) {
                      var n = {},
                        s = {};
                      t.data.groupList.forEach(function (e) {
                        3 == e.dataType ? (n = e) : 2 == e.dataType && (s = e);
                      }, e),
                        (a = n.pageIndex || a),
                        (i = n.pageTotal || i),
                        (0, x.Qr)(s) ||
                          s.commentDetailList.forEach(function (e) {
                            var t = [],
                              a = [];
                            e.imageList.forEach(function (e) {
                              1 == e.imageType && t.push(e),
                                2 == e.imageType && a.push(e);
                            }, this),
                              (e.imageList = t),
                              (e.bigImageList = a),
                              e.content.length > 100
                                ? (e.ellipsis = !0)
                                : (e.ellipsis = !1),
                              e.replyItemList.length > 0 &&
                                (e.replyItem = e.replyItemList[0]),
                              (e.content = e.content.replace(
                                /<br\s*\/?>/g,
                                ""
                              ));
                            var i = e.createDate
                              .split(".")[0]
                              .replace(/\-/g, "/");
                            e.createDate = L()(i).format(Z);
                          }, e),
                        (0, x.Qr)(n) ||
                          n.commentDetailList.forEach(function (e) {
                            var t = [],
                              a = [];
                            e.imageList.forEach(function (e) {
                              1 == e.imageType && t.push(e),
                                2 == e.imageType && a.push(e);
                            }, this),
                              (e.imageList = t),
                              (e.bigImageList = a),
                              e.content.length > 100
                                ? (e.ellipsis = !0)
                                : (e.ellipsis = !1),
                              e.replyItemList.length > 0 &&
                                ((e.replyItem = e.replyItemList[0]),
                                e.replyItem.text.length > 100
                                  ? (e.replyItem.ellipsis = !0)
                                  : (e.replyItem.ellipsis = !1)),
                              (e.content = e.content.replace(
                                /<br\s*\/?>/g,
                                ""
                              ));
                            var i = e.createDate
                              .split(".")[0]
                              .replace(/\-/g, "/");
                            e.createDate = L()(i).format(Z);
                          }, e);
                      var o = [];
                      if (
                        t.data.hotelCommentDynamicInfo.hotelCommentQueryList &&
                        t.data.hotelCommentDynamicInfo
                          .hotelCommentQueryList[0] &&
                        t.data.hotelCommentDynamicInfo.hotelCommentQueryList[0]
                          .items
                      )
                        o =
                          t.data.hotelCommentDynamicInfo
                            .hotelCommentQueryList[0].items;
                      else
                        try {
                          e.ubtTrace(170417, { data: t });
                        } catch (e) {
                          console.log(e);
                        }
                      var r =
                        t.data.hotelCommentDynamicInfo.hotelCommentStatistic
                          .imageCount;
                      if (r > 0) {
                        var c = { name: "有图" };
                        (c.val = r), (c.key = 3), o.push(c);
                      }
                      var m = l.data.myCommentDetailList;
                      (0, x.Qr)(s) ||
                        (m = l.data.myCommentDetailList.concat(
                          s.commentDetailList
                        ));
                      var d = l.data.commentDetailList;
                      (0, x.Qr)(n) ||
                        (d = l.data.commentDetailList.concat(
                          n.commentDetailList
                        )),
                        e.setData({
                          myCommentGroup: s,
                          commentGroup: n,
                          myCommentDetailList: m,
                          commentDetailList: d,
                          hotelCommentDynamicInfo:
                            t.data.hotelCommentDynamicInfo,
                          hotelCommentStaticInfo: t.data.hotelCommentStaticInfo,
                          lastBookingOrder: t.data.lastBookingOrder,
                          commentQueryList: o,
                          pageTotal: i,
                        }),
                        l.data.isFirstApper &&
                          (e.onShowMoreTag(), l.setData({ isFirstApper: !1 }));
                    }
                  })
                  .catch(function () {
                    (0, f.hideLoading)(),
                      (0, f.showToast)("网络请求错误，请重试");
                  });
              },
              openImageBox: function (e) {
                var t = e.currentTarget.dataset.piclist || [],
                  a = e.currentTarget.dataset.index || 0,
                  i = [];
                t.forEach(function (e) {
                  var t = {};
                  (t.imageUrl = e.imageUrl),
                    (t.title = e.imageTitle),
                    i.push(t);
                }),
                  this.navigateTo({
                    url: "/pages/hotel/imagebox/imagebox",
                    data: { images: i, index: a },
                  });
              },
              getAskReplyList: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  a = {
                    data: {
                      clientVersion: N.Z.clientVersion,
                      pageIndex: this.data.replyPageIndex,
                      pageSize: 20,
                      hotelId: this.data.hotelId,
                      tagId: t,
                    },
                  };
                (0, v.Zu)(a)
                  .then(function (t) {
                    if (1 === t.resultCode) {
                      var a = t.data,
                        i = a.totalCount,
                        l = a.tyHotelAskReplyList,
                        n = a.tagList,
                        s = (l || []).map(function (e) {
                          return (0,
                          m.Z)((0, m.Z)({}, e), {}, { showMoreReply: !1 });
                        });
                      e.setData({
                        totalCount: i,
                        qaPageCount: Math.floor(i / 20),
                        askReplyList: e.data.askReplyList.concat(s),
                        tagList: n,
                      });
                    }
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              },
              selectItem: function (e) {
                var t = this,
                  a = e.currentTarget.dataset.tagid,
                  i = this.data.tagList.map(function (e) {
                    return (0,
                    m.Z)((0, m.Z)({}, e), {}, { isSelected: e.tagId === a });
                  });
                this.setData({ tagList: i, askReplyList: [] });
                var l = {
                  data: {
                    clientVersion: N.Z.clientVersion,
                    pageIndex: this.data.replyPageIndex,
                    pageSize: 20,
                    hotelId: this.data.hotelId,
                    tagId: a,
                  },
                };
                (0, v.Zu)(l)
                  .then(function (e) {
                    if (1 === e.resultCode) {
                      var a = e.data,
                        i = a.totalCount,
                        l = a.tyHotelAskReplyList.map(function (e) {
                          return (0,
                          m.Z)((0, m.Z)({}, e), {}, { showMoreReply: !1 });
                        });
                      t.setData({
                        totalCount: i,
                        askReplyList: t.data.askReplyList.concat(l),
                      });
                    }
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              },
              handleAnswerList: function (e) {
                var t = e.currentTarget.dataset.item,
                  a = this.data.askReplyList.findIndex(function (e) {
                    return e.askId === t.askId;
                  }),
                  i = "askReplyList[".concat(a, "].showMoreReply");
                this.setData(
                  (0, c.Z)({}, i, !this.data.askReplyList[a].showMoreReply)
                );
              },
              handleType: function (e) {
                var t = e.currentTarget.dataset.type;
                this.setData({ type: t });
              },
              goBack: function () {
                g().navigateBack({ delta: 1 });
              },
              onShowMoreTag: function () {
                var e,
                  t = this.data.commentQueryList || [],
                  a = !Boolean(this.data.isRenderMoreFilterTag);
                (e = a ? t : t.length > 5 ? t.slice(0, 5) : t),
                  this.setData({ commentTagList: e, isRenderMoreFilterTag: a });
              },
              onEllipsis: function (e) {
                var t = e.currentTarget.dataset.index || 0,
                  a = e.currentTarget.dataset.type || 0;
                if (111 == a) {
                  var i = this.data.commentDetailList;
                  (i[t].ellipsis = !this.data.commentDetailList[t].ellipsis),
                    this.setData({ commentDetailList: i });
                } else if (222 == a) {
                  var l = this.data.myCommentDetailList;
                  (l[t].ellipsis = !this.data.myCommentDetailList[t].ellipsis),
                    this.setData({ myCommentDetailList: l });
                } else if (333 == a) {
                  var n = this.data.commentDetailList;
                  (n[t].replyItem.ellipsis =
                    !this.data.commentDetailList[t].replyItem.ellipsis),
                    this.setData({ commentDetailList: n });
                } else if (444 == a) {
                  var s = this.data.myCommentDetailList;
                  (s[t].replyItem.ellipsis =
                    !this.data.myCommentDetailList[t].replyItem.ellipsis),
                    this.setData({ myCommentDetailList: s });
                }
              },
            },
            k =
              (0, V.h)()(
                (i =
                  u()(T)(
                    (i = (function (e) {
                      (0, o.Z)(a, e);
                      var t = (0, r.Z)(a);
                      function a() {
                        return (0, n.Z)(this, a), t.apply(this, arguments);
                      }
                      return (
                        (0, s.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                a = t.statusBarHeight,
                                i = t.type,
                                l = t.hotelCommentStaticInfo,
                                n = t.isTieyou,
                                s = t.selectKey,
                                o = t.commentTagList,
                                r = t.isRenderMoreFilterTag,
                                c = t.commentQueryList,
                                m = t.myCommentDetailList,
                                d = t.commentDetailList,
                                h = t.tagList,
                                g = t.askReplyList,
                                y = t.isAlipay,
                                u = t.isBaidu,
                                f = I.A.screenHeight;
                              return (0, B.BX)(p.View, {
                                className: "page",
                                children: [
                                  (0, B.BX)(p.View, {
                                    className: "top-bar",
                                    style: y ? "" : "padding-top: " + a + "px",
                                    children: [
                                      !y &&
                                        !u &&
                                        (0, B.tZ)(p.Text, {
                                          className: "ifont-back iconfont",
                                          id: "AXDU",
                                          onClick: this.goBack,
                                        }),
                                      (0, B.BX)(p.View, {
                                        className: "top-tab",
                                        children: [
                                          (0, B.tZ)(p.View, {
                                            className:
                                              "item " +
                                              ("comment" === i
                                                ? "bgcolor-primary"
                                                : ""),
                                            id: "AXDV",
                                            onClick: this.handleType,
                                            "data-type": "comment",
                                            children: "点评",
                                          }),
                                          (0, B.tZ)(p.View, {
                                            className:
                                              "item " +
                                              ("qa" === i
                                                ? "bgcolor-primary"
                                                : ""),
                                            id: "AXDW",
                                            onClick: this.handleType,
                                            "data-type": "qa",
                                            children: "问答",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, B.BX)(p.ScrollView, {
                                    scrollY: !0,
                                    style: "height: ".concat(
                                      w.default.isBaidu
                                        ? f - 40 - a + "px"
                                        : "100%"
                                    ),
                                    onScrollToLower: this.onReachBottom,
                                    children: [
                                      "comment" === i &&
                                        (0, B.BX)(p.View, {
                                          className: "wrap",
                                          children: [
                                            (0, B.BX)(p.View, {
                                              className: "hotel-dp-top",
                                              children: [
                                                (0, B.BX)(p.View, {
                                                  className: "hotel-dp-value",
                                                  children: [
                                                    (0, B.BX)(p.View, {
                                                      className: "item general",
                                                      children: [
                                                        (0, B.tZ)(p.View, {
                                                          className:
                                                            "strong color-primary",
                                                          children:
                                                            (l &&
                                                              l.hotelCommentAvgRatings &&
                                                              (0, x.a5)(
                                                                l
                                                                  .hotelCommentAvgRatings
                                                                  .ratingOverall
                                                              )) ||
                                                            "--",
                                                        }),
                                                        l.recommendRatio &&
                                                          (0, B.tZ)(p.View, {
                                                            className:
                                                              "txt color-primary",
                                                            children:
                                                              l.recommendRatio +
                                                              "%住客推荐",
                                                          }),
                                                      ],
                                                    }),
                                                    (0, B.BX)(p.View, {
                                                      className: "item",
                                                      children: [
                                                        (0, B.tZ)(p.View, {
                                                          className: "strong",
                                                          children:
                                                            (l &&
                                                              l.hotelCommentAvgRatings &&
                                                              (0, x.a5)(
                                                                l
                                                                  .hotelCommentAvgRatings
                                                                  .ratingAround
                                                              )) ||
                                                            "--",
                                                        }),
                                                        (0, B.tZ)(p.View, {
                                                          className: "txt",
                                                          children: "环境",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, B.BX)(p.View, {
                                                      className: "item",
                                                      children: [
                                                        (0, B.tZ)(p.View, {
                                                          className: "strong",
                                                          children:
                                                            (l &&
                                                              l.hotelCommentAvgRatings &&
                                                              (0, x.a5)(
                                                                l
                                                                  .hotelCommentAvgRatings
                                                                  .ratingFacility
                                                              )) ||
                                                            "--",
                                                        }),
                                                        (0, B.tZ)(p.View, {
                                                          className: "txt",
                                                          children: "设施",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, B.BX)(p.View, {
                                                      className: "item",
                                                      children: [
                                                        (0, B.tZ)(p.View, {
                                                          className: "strong",
                                                          children:
                                                            (l &&
                                                              l.hotelCommentAvgRatings &&
                                                              (0, x.a5)(
                                                                l
                                                                  .hotelCommentAvgRatings
                                                                  .ratingService
                                                              )) ||
                                                            "--",
                                                        }),
                                                        (0, B.tZ)(p.View, {
                                                          className: "txt",
                                                          children: "服务",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, B.BX)(p.View, {
                                                      className: "item",
                                                      children: [
                                                        (0, B.tZ)(p.View, {
                                                          className: "strong",
                                                          children:
                                                            (l &&
                                                              l.hotelCommentAvgRatings &&
                                                              (0, x.a5)(
                                                                l
                                                                  .hotelCommentAvgRatings
                                                                  .ratingRoom
                                                              )) ||
                                                            "--",
                                                        }),
                                                        (0, B.tZ)(p.View, {
                                                          className: "txt",
                                                          children: "卫生",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, B.BX)(p.View, {
                                                  className:
                                                    "hotel-dp-key " +
                                                    (n ? "ty" : "zx"),
                                                  children: [
                                                    (0, B.tZ)(p.View, {
                                                      className:
                                                        "9999" == s
                                                          ? "item cur"
                                                          : "item",
                                                      id: "AXDX",
                                                      onClick:
                                                        this.getHotelCommentAll,
                                                      children: "全部",
                                                    }),
                                                    o &&
                                                      o.map(function (t) {
                                                        return (0,
                                                        B.tZ)(p.View, { className: t.key == s ? "item cur" : "item", id: "AXDY", onClick: e.getHotelCommentTag, "data-sort": t, children: t.name + "(" + t.val + ")" }, "commentTagList");
                                                      }),
                                                  ],
                                                }),
                                                c.length > 5 &&
                                                  (0, B.tZ)(p.View, {
                                                    className:
                                                      "key-more color-primary",
                                                    id: "AXDZ",
                                                    onClick: this.onShowMoreTag,
                                                    children: r
                                                      ? "点击收起"
                                                      : "展开更多",
                                                  }),
                                              ],
                                            }),
                                            m &&
                                              m[0] &&
                                              (0, B.BX)(p.View, {
                                                className: "hotel-dp-box",
                                                children: [
                                                  (0, B.tZ)(p.View, {
                                                    className: "tit",
                                                    children: "我的点评",
                                                  }),
                                                  m.map(function (t, a) {
                                                    var i, l;
                                                    return (0, B.BX)(
                                                      p.View,
                                                      {
                                                        className: "item",
                                                        children: [
                                                          (0, B.BX)(p.View, {
                                                            className:
                                                              "hotel-dp-hd",
                                                            children: [
                                                              (0, B.tZ)(
                                                                p.Image,
                                                                {
                                                                  src:
                                                                    "https://pic.c-ctrip.com/train/zt/wechat/avatar-default-" +
                                                                    (n
                                                                      ? "ty"
                                                                      : "zx") +
                                                                    ".png",
                                                                  className:
                                                                    "pic-avatar",
                                                                }
                                                              ),
                                                              (0, B.BX)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "cont",
                                                                  children: [
                                                                    (0, B.BX)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "name",
                                                                        children:
                                                                          [
                                                                            t.nickName,
                                                                            (0,
                                                                            B.tZ)(
                                                                              p.Text,
                                                                              {
                                                                                className:
                                                                                  "tag " +
                                                                                  (n
                                                                                    ? "ty"
                                                                                    : "zx") +
                                                                                  " color-red",
                                                                                children:
                                                                                  t.commentGrade,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, B.BX)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "evaluate",
                                                                        children:
                                                                          [
                                                                            (null ===
                                                                              (i =
                                                                                t.ratings) ||
                                                                            void 0 ===
                                                                              i
                                                                              ? void 0
                                                                              : i.ratingOverall) >
                                                                              0 &&
                                                                              (0,
                                                                              B.tZ)(
                                                                                p.View,
                                                                                {
                                                                                  className:
                                                                                    "color-primary",
                                                                                  children:
                                                                                    t
                                                                                      .ratings
                                                                                      .ratingOverall +
                                                                                    (t
                                                                                      .ratings
                                                                                      .ratingOverall %
                                                                                      1 ==
                                                                                    0
                                                                                      ? ".0"
                                                                                      : ""),
                                                                                }
                                                                              ),
                                                                            (null ===
                                                                              (l =
                                                                                t.ratings) ||
                                                                            void 0 ===
                                                                              l
                                                                              ? void 0
                                                                              : l.ratingOverall) &&
                                                                              (0,
                                                                              B.tZ)(
                                                                                C.Z,
                                                                                {
                                                                                  score:
                                                                                    t
                                                                                      .ratings
                                                                                      .ratingOverall,
                                                                                }
                                                                              ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              t.publicationPlace &&
                                                                (0, B.BX)(
                                                                  p.Text,
                                                                  {
                                                                    className:
                                                                      "ip-addr",
                                                                    children: [
                                                                      "发布于",
                                                                      t.publicationPlace,
                                                                    ],
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                          (0, B.BX)(p.View, {
                                                            className:
                                                              "hotel-dp-txt",
                                                            children: [
                                                              (0, B.tZ)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "txt",
                                                                  children:
                                                                    t.content,
                                                                }
                                                              ),
                                                              t.content.length >
                                                                100 &&
                                                                (0, B.tZ)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "more color-primary",
                                                                    id: "AXDa",
                                                                    onClick:
                                                                      e.onEllipsis,
                                                                    "data-index":
                                                                      a,
                                                                    "data-type":
                                                                      "222",
                                                                    children:
                                                                      t.ellipsis
                                                                        ? "展开全文"
                                                                        : "点击收起",
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                          (0, B.tZ)(p.View, {
                                                            className:
                                                              "hotel-dp-pic",
                                                            children:
                                                              t.imageList.map(
                                                                function (
                                                                  a,
                                                                  i
                                                                ) {
                                                                  return (0,
                                                                  B.tZ)(
                                                                    p.Block,
                                                                    {
                                                                      children:
                                                                        (0,
                                                                        B.tZ)(
                                                                          p.Image,
                                                                          {
                                                                            src: a.imageUrl,
                                                                            className:
                                                                              "pic-dp",
                                                                            id: "AXDb",
                                                                            onClick:
                                                                              e.openImageBox,
                                                                            "data-piclist":
                                                                              t.bigImageList,
                                                                            "data-index":
                                                                              i,
                                                                          }
                                                                        ),
                                                                    },
                                                                    "myCommentImageList"
                                                                  );
                                                                }
                                                              ),
                                                          }),
                                                          (0, B.BX)(p.View, {
                                                            className:
                                                              "hotel-dp-date",
                                                            children: [
                                                              (t.checkInDate
                                                                ? t.checkInDate
                                                                : "") +
                                                                (t.checkInDate
                                                                  ? "入住，"
                                                                  : "") +
                                                                (t.createDate
                                                                  ? t.createDate
                                                                  : "") +
                                                                (t.createDate
                                                                  ? "发表"
                                                                  : ""),
                                                              (0, B.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "travel-type",
                                                                  children:
                                                                    t.travelType,
                                                                }
                                                              ),
                                                              (0, B.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "line",
                                                                }
                                                              ),
                                                              (0, B.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "color-primary",
                                                                  children:
                                                                    t.roomName,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          t.replyItemList
                                                            .length > 0 &&
                                                            (0, B.BX)(p.View, {
                                                              className:
                                                                "hotel-dp-reply",
                                                              children: [
                                                                (0, B.BX)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "reply-head",
                                                                    children: [
                                                                      (0, B.BX)(
                                                                        p.View,
                                                                        {
                                                                          className:
                                                                            "reply-name",
                                                                          children:
                                                                            [
                                                                              t
                                                                                .replyItem
                                                                                .name,
                                                                              ":",
                                                                            ],
                                                                        }
                                                                      ),
                                                                      t
                                                                        .replyItem
                                                                        .publicationPlace &&
                                                                        (0,
                                                                        B.BX)(
                                                                          p.View,
                                                                          {
                                                                            className:
                                                                              "reply-place",
                                                                            children:
                                                                              [
                                                                                "发布于",
                                                                                t
                                                                                  .replyItem
                                                                                  .publicationPlace,
                                                                              ],
                                                                          }
                                                                        ),
                                                                    ],
                                                                  }
                                                                ),
                                                                (0, B.tZ)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "txt " +
                                                                      (t
                                                                        .replyItem
                                                                        .ellipsis
                                                                        ? "ellipsis"
                                                                        : ""),
                                                                    children:
                                                                      t
                                                                        .replyItem
                                                                        .text,
                                                                  }
                                                                ),
                                                                t.replyItem.text
                                                                  .length >
                                                                  100 &&
                                                                  (0, B.tZ)(
                                                                    p.View,
                                                                    {
                                                                      className:
                                                                        "more color-primary",
                                                                      id: "AXDc",
                                                                      onClick:
                                                                        e.onEllipsis,
                                                                      "data-index":
                                                                        a,
                                                                      "data-type":
                                                                        "444",
                                                                      children:
                                                                        t
                                                                          .replyItem
                                                                          .ellipsis
                                                                          ? "展开全文"
                                                                          : "点击收起",
                                                                    }
                                                                  ),
                                                              ],
                                                            }),
                                                        ],
                                                      },
                                                      "myCommentDetailList"
                                                    );
                                                  }),
                                                ],
                                              }),
                                            d &&
                                              d[0] &&
                                              (0, B.BX)(p.View, {
                                                className: "hotel-dp-box",
                                                children: [
                                                  (0, B.tZ)(p.View, {
                                                    className: "tit",
                                                    children: "网友点评",
                                                  }),
                                                  d.map(function (t, a) {
                                                    var i, l;
                                                    return (0, B.BX)(
                                                      p.View,
                                                      {
                                                        className: "item",
                                                        children: [
                                                          (0, B.BX)(p.View, {
                                                            className:
                                                              "hotel-dp-hd",
                                                            children: [
                                                              (0, B.tZ)(
                                                                p.Image,
                                                                {
                                                                  src:
                                                                    "https://pic.c-ctrip.com/train/zt/wechat/avatar-default-" +
                                                                    (n
                                                                      ? "ty"
                                                                      : "zx") +
                                                                    ".png",
                                                                  className:
                                                                    "pic-avatar",
                                                                }
                                                              ),
                                                              (0, B.BX)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "cont",
                                                                  children: [
                                                                    (0, B.BX)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "name",
                                                                        children:
                                                                          [
                                                                            t.nickName,
                                                                            (0,
                                                                            B.tZ)(
                                                                              p.Text,
                                                                              {
                                                                                className:
                                                                                  "tag color-red",
                                                                                children:
                                                                                  t.commentGrade,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, B.BX)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "evaluate",
                                                                        children:
                                                                          [
                                                                            (null ===
                                                                              (i =
                                                                                t.ratings) ||
                                                                            void 0 ===
                                                                              i
                                                                              ? void 0
                                                                              : i.ratingOverall) >
                                                                              0 &&
                                                                              (0,
                                                                              B.tZ)(
                                                                                p.View,
                                                                                {
                                                                                  className:
                                                                                    "color-primary",
                                                                                  children:
                                                                                    t
                                                                                      .ratings
                                                                                      .ratingOverall +
                                                                                    (t
                                                                                      .ratings
                                                                                      .ratingOverall %
                                                                                      1 ==
                                                                                    0
                                                                                      ? ".0"
                                                                                      : ""),
                                                                                }
                                                                              ),
                                                                            (null ===
                                                                              (l =
                                                                                t.ratings) ||
                                                                            void 0 ===
                                                                              l
                                                                              ? void 0
                                                                              : l.ratingOverall) &&
                                                                              (0,
                                                                              B.tZ)(
                                                                                C.Z,
                                                                                {
                                                                                  score:
                                                                                    t
                                                                                      .ratings
                                                                                      .ratingOverall,
                                                                                }
                                                                              ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              t.publicationPlace &&
                                                                (0, B.BX)(
                                                                  p.Text,
                                                                  {
                                                                    className:
                                                                      "ip-addr",
                                                                    children: [
                                                                      "发布于",
                                                                      t.publicationPlace,
                                                                    ],
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                          (0, B.BX)(p.View, {
                                                            className:
                                                              "hotel-dp-txt",
                                                            children: [
                                                              (0, B.tZ)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "txt " +
                                                                    (t.ellipsis
                                                                      ? "ellipsis"
                                                                      : ""),
                                                                  children:
                                                                    t.content,
                                                                }
                                                              ),
                                                              t.content.length >
                                                                100 &&
                                                                (0, B.tZ)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "more color-primary",
                                                                    id: "AXDd",
                                                                    onClick:
                                                                      e.onEllipsis,
                                                                    "data-index":
                                                                      a,
                                                                    "data-type":
                                                                      "111",
                                                                    children:
                                                                      t.ellipsis
                                                                        ? "展开全文"
                                                                        : "点击收起",
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                          (0, B.tZ)(p.View, {
                                                            className:
                                                              "hotel-dp-pic",
                                                            children:
                                                              t.imageList.map(
                                                                function (
                                                                  a,
                                                                  i
                                                                ) {
                                                                  return (0,
                                                                  B.tZ)(
                                                                    p.Block,
                                                                    {
                                                                      children:
                                                                        (0,
                                                                        B.tZ)(
                                                                          p.Image,
                                                                          {
                                                                            src: a.imageUrl,
                                                                            className:
                                                                              "pic-dp",
                                                                            id: "AXDe",
                                                                            onClick:
                                                                              e.openImageBox,
                                                                            "data-piclist":
                                                                              t.bigImageList,
                                                                            "data-index":
                                                                              i,
                                                                          }
                                                                        ),
                                                                    },
                                                                    "commentImageList"
                                                                  );
                                                                }
                                                              ),
                                                          }),
                                                          (0, B.BX)(p.View, {
                                                            className:
                                                              "hotel-dp-date",
                                                            children: [
                                                              (t.checkInDate
                                                                ? t.checkInDate
                                                                : "") +
                                                                (t.checkInDate
                                                                  ? "入住，"
                                                                  : "") +
                                                                (t.createDate
                                                                  ? t.createDate
                                                                  : "") +
                                                                (t.createDate
                                                                  ? "发表"
                                                                  : ""),
                                                              (0, B.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "travel-type",
                                                                  children:
                                                                    t.travelType,
                                                                }
                                                              ),
                                                              (0, B.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "line",
                                                                }
                                                              ),
                                                              (0, B.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "color-primary",
                                                                  children:
                                                                    t.roomName,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          t.replyItemList
                                                            .length > 0 &&
                                                            (0, B.BX)(p.View, {
                                                              className:
                                                                "hotel-dp-reply",
                                                              children: [
                                                                (0, B.BX)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "reply-head",
                                                                    children: [
                                                                      (0, B.BX)(
                                                                        p.View,
                                                                        {
                                                                          className:
                                                                            "reply-name",
                                                                          children:
                                                                            [
                                                                              t
                                                                                .replyItem
                                                                                .name,
                                                                              ":",
                                                                            ],
                                                                        }
                                                                      ),
                                                                      t
                                                                        .replyItem
                                                                        .publicationPlace &&
                                                                        (0,
                                                                        B.BX)(
                                                                          p.View,
                                                                          {
                                                                            className:
                                                                              "reply-place",
                                                                            children:
                                                                              [
                                                                                "发布于",
                                                                                t
                                                                                  .replyItem
                                                                                  .publicationPlace,
                                                                              ],
                                                                          }
                                                                        ),
                                                                    ],
                                                                  }
                                                                ),
                                                                (0, B.tZ)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "txt " +
                                                                      (t
                                                                        .replyItem
                                                                        .ellipsis
                                                                        ? "ellipsis"
                                                                        : ""),
                                                                    children:
                                                                      t
                                                                        .replyItem
                                                                        .text,
                                                                  }
                                                                ),
                                                                t.replyItem.text
                                                                  .length >
                                                                  100 &&
                                                                  (0, B.tZ)(
                                                                    p.View,
                                                                    {
                                                                      className:
                                                                        "more color-primary",
                                                                      id: "AXDf",
                                                                      onClick:
                                                                        e.onEllipsis,
                                                                      "data-index":
                                                                        a,
                                                                      "data-type":
                                                                        "333",
                                                                      children:
                                                                        t
                                                                          .replyItem
                                                                          .ellipsis
                                                                          ? "展开全文"
                                                                          : "点击收起",
                                                                    }
                                                                  ),
                                                              ],
                                                            }),
                                                        ],
                                                      },
                                                      "commentDetailList"
                                                    );
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      "qa" === i &&
                                        (0, B.BX)(p.View, {
                                          className: "wrap white-box",
                                          children: [
                                            (0, B.tZ)(p.View, {
                                              className: "hotel-qa-tag",
                                              children:
                                                h &&
                                                h.map(function (t) {
                                                  return (0,
                                                  B.BX)(p.View, { className: "item " + (t.isSelected ? (n ? "ty" : "zx") : ""), id: "AXDg", onClick: e.selectItem, "data-tagid": t.tagId, children: [t.tagName, (0, B.tZ)(p.Text, { children: "(" + t.askCount + ")" })] }, "index");
                                                }),
                                            }),
                                            (0, B.tZ)(p.View, {
                                              className:
                                                "hotel-qa-cont " +
                                                (n ? "ty" : "zx"),
                                              children:
                                                g &&
                                                g.map(function (t) {
                                                  return (0, B.BX)(
                                                    p.View,
                                                    {
                                                      className: "item",
                                                      children: [
                                                        (0, B.tZ)(p.View, {
                                                          className: "q",
                                                          children: t.title,
                                                        }),
                                                        t.publicationPlace &&
                                                          (0, B.BX)(p.View, {
                                                            className:
                                                              "ip-addr",
                                                            children: [
                                                              "发布于",
                                                              t.publicationPlace,
                                                            ],
                                                          }),
                                                        0 ===
                                                          t.tyReplyList
                                                            .length &&
                                                          (0, B.tZ)(p.View, {
                                                            className: "none",
                                                            children:
                                                              "暂无回答",
                                                          }),
                                                        t.tyReplyList.map(
                                                          function (e, a) {
                                                            return (0, B.BX)(
                                                              p.Block,
                                                              {
                                                                children: [
                                                                  ((a < 2 &&
                                                                    !t.showMoreReply) ||
                                                                    t.showMoreReply) &&
                                                                    (0, B.tZ)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "a",
                                                                        children:
                                                                          e.content,
                                                                      }
                                                                    ),
                                                                  ((a < 2 &&
                                                                    !t.showMoreReply) ||
                                                                    t.showMoreReply) &&
                                                                    (0, B.BX)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "t",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            B.tZ)(
                                                                              p.View,
                                                                              {
                                                                                className:
                                                                                  "info",
                                                                                children:
                                                                                  e.publicationPlace &&
                                                                                  (0,
                                                                                  B.BX)(
                                                                                    p.Text,
                                                                                    {
                                                                                      className:
                                                                                        "place",
                                                                                      children:
                                                                                        [
                                                                                          "发布于",
                                                                                          e.publicationPlace,
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            B.tZ)(
                                                                              p.Text,
                                                                              {
                                                                                className:
                                                                                  "date",
                                                                                children:
                                                                                  e.replyTime.split(
                                                                                    " "
                                                                                  )[0],
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                ],
                                                              },
                                                              "index"
                                                            );
                                                          }
                                                        ),
                                                        t.tyReplyList.length >
                                                          2 &&
                                                          (0, B.tZ)(p.View, {
                                                            className:
                                                              "more color-primary",
                                                            id: "AXDh",
                                                            onClick:
                                                              e.handleAnswerList,
                                                            "data-item": t,
                                                            children:
                                                              t.showMoreReply
                                                                ? "收起回答"
                                                                : "查看" +
                                                                  t.tyReplyList
                                                                    .length +
                                                                  "个回答",
                                                          }),
                                                      ],
                                                    },
                                                    "index"
                                                  );
                                                }),
                                            }),
                                          ],
                                        }),
                                      (0, B.tZ)(p.View, {
                                        className: "botm-fixed",
                                        children: (0, B.tZ)(p.Button, {
                                          className: "btn-primary",
                                          id: "AXDi",
                                          onClick: this.goBack,
                                          children: "挑选房间",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        a
                      );
                    })(d.default.Component))
                  ) || i)
              ) || i;
          Page(
            (0, l.createPageConfig)(
              k,
              "pages/hotel/dianping/dianping",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "酒店点评",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#fff",
                backgroundColorBottom: "#f5f5f5",
                navigationStyle: "custom",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(6288);
        }),
          e.O();
      },
    ]);
})();
