!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [69824],
      {
        67018: function (e, t, a) {
          var i = a(32180),
            n = a(57042),
            o = a(24460),
            s = a(21867),
            r = a(86066),
            c = a(52500),
            l = a(71515),
            m = a(92954),
            d = a.n(m),
            g = a(48792),
            h = a.n(g),
            u = a(79792),
            p = a(55099),
            f = a(36039),
            v = a(65444),
            w = a(48813),
            L = (function (e) {
              (0, s.Z)(a, e);
              var t = (0, r.Z)(a);
              function a() {
                return (0, n.Z)(this, a), t.apply(this, arguments);
              }
              return (
                (0, o.Z)(a, [
                  {
                    key: "render",
                    value: function () {
                      var e = this;
                      return (0, w.tZ)(l.Block, {
                        children: (0, w.BX)(l.View, {
                          id: "box",
                          className: "sketelonWrap",
                          children: [
                            (0, w.tZ)(l.View, {
                              className: "skeleton-item",
                              style: "margin: 30rpx 40rpx 0;display:flex",
                              children: (0, w.tZ)(l.View, {
                                className: "scoreTitle",
                              }),
                            }),
                            (0, w.BX)(l.View, {
                              className: "skeleton-item",
                              style: "margin: 0 10rpx 16rpx 30rpx",
                              children: [
                                (0, w.tZ)(l.View, {
                                  className: "evaluate-tag-bd",
                                  style: "height:170rpx",
                                  children: [1, 2, 3, 4, 5, 6].map(function (
                                    t,
                                    a
                                  ) {
                                    return (0, w.tZ)(
                                      l.View,
                                      {
                                        id: "ALBc",
                                        onClick: e.props.selectTag,
                                        className: "item skeItem",
                                        children: "好评 131451",
                                      },
                                      "index"
                                    );
                                  }),
                                }),
                                (0, w.tZ)(l.View, { className: "iconLine" }),
                              ],
                            }),
                            (0, w.tZ)(l.View, {
                              className: "skeleton-item",
                              style: "padding: 30rpx 30rpx 40rpx 30rpx;",
                              children: [1, 2].map(function (e, t) {
                                return (0, w.BX)(
                                  l.View,
                                  {
                                    className: "evaItemWrap",
                                    style:
                                      "margin-top:" + (0 !== t ? "40rpx" : "0"),
                                    children: [
                                      (0, w.BX)(l.View, {
                                        className: "evaluate-info",
                                        children: [
                                          (0, w.tZ)(l.View, {
                                            className: "head",
                                            style: "width:34%",
                                          }),
                                          (0, w.tZ)(l.View, {
                                            className: "head",
                                          }),
                                        ],
                                      }),
                                      (0, w.tZ)(l.View, {
                                        className: "cont",
                                        children: [1, 2, 3, 4, 5, 6].map(
                                          function (e, t) {
                                            return (0, w.tZ)(
                                              l.View,
                                              {
                                                className: "textLineWrap",
                                                children: (0, w.tZ)(l.View, {
                                                  className: "textLine",
                                                }),
                                              },
                                              "index"
                                            );
                                          }
                                        ),
                                      }),
                                      (0, w.tZ)(l.View, { className: "fold" }),
                                      (0, w.tZ)(l.View, {
                                        className: "imgWrap",
                                        children: [1, 2, 3, 4, 5, 6, 7, 8].map(
                                          function (e, t) {
                                            return (0, w.tZ)(
                                              l.View,
                                              { className: "img" },
                                              "index"
                                            );
                                          }
                                        ),
                                      }),
                                    ],
                                  },
                                  "index"
                                );
                              }),
                            }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                a
              );
            })(c.default.Component);
          var x,
            Z = {
              getEmoji: function (e) {
                return "icon-score-" + e;
              },
              getImgList: function (e) {
                return e.slice(0, 8);
              },
              getDesc: function (e) {
                var t = "";
                switch (e) {
                  case 1:
                    t = "不佳";
                    break;
                  case 2:
                    t = "一般";
                    break;
                  case 3:
                    t = "不错";
                    break;
                  case 4:
                    t = "满意";
                    break;
                  case 5:
                    t = "超棒";
                    break;
                  default:
                    t = "超棒";
                }
                return t;
              },
            },
            N = (function (e) {
              (0, s.Z)(a, e);
              var t = (0, r.Z)(a);
              function a() {
                return (0, n.Z)(this, a), t.apply(this, arguments);
              }
              return (
                (0, o.Z)(a, [
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props.data || {},
                        a = t.item,
                        i = t.index;
                      return a
                        ? (0, w.tZ)(l.Block, {
                            children: (0, w.BX)(l.View, {
                              id: "ALCW",
                              className: "item",
                              style:
                                "padding-bottom:" +
                                (a.imageList && a.imageList.length > 0
                                  ? "30rpx"
                                  : "20rpx"),
                              onClick: function (e) {
                                e.stopPropagation();
                              },
                              children: [
                                (0, w.BX)(l.View, {
                                  className: "evaluate-info",
                                  children: [
                                    (0, w.tZ)(l.Image, {
                                      src: a.userInfo.userImage,
                                      className: "avatar",
                                    }),
                                    (0, w.BX)(l.View, {
                                      className: "cont",
                                      children: [
                                        (0, w.tZ)(l.View, {
                                          className: "name",
                                          children:
                                            a.userInfo.name || "匿名用户",
                                        }),
                                        (0, w.BX)(l.View, {
                                          className: "score",
                                          children: [
                                            (0, w.tZ)(l.Icon, {
                                              className: Z.getEmoji(
                                                a.commentScore
                                              ),
                                            }),
                                            a.commentScore +
                                              "分 " +
                                              Z.getDesc(a.commentScore),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, w.BX)(l.View, {
                                      className: a.isPicked
                                        ? "rbox"
                                        : "rboxNoBefore",
                                      children: [
                                        a.ipLocatedName &&
                                          (0, w.BX)(l.View, {
                                            children: [
                                              "发布于",
                                              a.ipLocatedName,
                                            ],
                                          }),
                                        (0, w.tZ)(l.View, {
                                          children: a.commentDate,
                                        }),
                                        (0, w.tZ)(l.View, {
                                          children: a.source,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, w.tZ)(l.Text, {
                                  className:
                                    "evaluate-txt " +
                                    (a.contentFold ? "ellipsis" : ""),
                                  children: a.content,
                                }),
                                a.isOverflow &&
                                  (0, w.tZ)(l.View, {
                                    id: "ALBG",
                                    onClick: this.props.toggleTextFold,
                                    "data-item": a,
                                    "data-index": i,
                                    className: "open color-primary",
                                    children: a.contentFold ? "展开" : "收起",
                                  }),
                                a.imageList &&
                                  a.imageList.length > 0 &&
                                  (0, w.BX)(l.View, {
                                    className: "evaluate-img",
                                    children: [
                                      Z.getImgList(a.imageList).map(function (
                                        t,
                                        i
                                      ) {
                                        return (0, w.tZ)(
                                          l.Image,
                                          {
                                            id: "ALBH",
                                            onClick: e.props.imgClick,
                                            "data-item": t,
                                            "data-img-list": a.imageList,
                                            "data-index": i,
                                            src: t.thumbnailUrl,
                                            className: "pic",
                                          },
                                          "_index"
                                        );
                                      }),
                                      a.imageList.length > 8 &&
                                        (0, w.tZ)(l.View, {
                                          className: "num",
                                          children: a.imageList.length,
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                          })
                        : (0, w.tZ)(l.View, {});
                    },
                  },
                ]),
                a
              );
            })(c.default.Component),
            T = a(52341),
            k = a(81957),
            I = a(73851),
            V = f.Z.isEmptyObject,
            B = "ios" === u.default.platform.toLowerCase() ? 48 : 52,
            C = {
              data: {
                isTagListOverflow: !1,
                isFold: !1,
                isScrolling: !1,
                isLoadError: !1,
                isLoadingMoreError: !1,
                isRequestOver: !1,
                isLoadingMore: !1,
                hasMoreData: !0,
                pageIndex: 1,
                selectTagId: null,
                averageScore: 0,
                commentInfoList: [],
                commentHotTags: [],
                scenicSpotName: "加载中...",
                showStickBtn: !1,
                bottomStatus: "",
              },
              onLoad: function (e) {
                var t = e.scenicSpotName,
                  a = void 0 === t ? "加载中..." : t,
                  i = e.commentTagId,
                  n = void 0 === i ? null : i;
                d().setNavigationBarTitle({ title: a }),
                  this.setData({ scenicSpotName: a }),
                  (this.options = e),
                  this.getCommentData(n, !1, 1, !1, !0);
              },
              backToTop: function () {
                d().pageScrollTo({ scrollTop: 0, duration: 300 });
              },
              onReachBottom: function () {
                var e = this,
                  t = this.data,
                  a = t.pageIndex,
                  i = t.selectTagId,
                  n = t.hasMoreData,
                  o = t.isLoadingMore,
                  s = t.isLoadingMoreError;
                !n ||
                  o ||
                  s ||
                  this.setData(
                    { isLoadingMoreError: !1, isLoadingMore: !0 },
                    function () {
                      e.getCommentData(i, !1, ++a, !0);
                    }
                  );
              },
              onPageScroll: function (e) {
                var t = this.data.showStickBtn,
                  a = e.scrollTop;
                a > 3e3 && !t && this.setData({ showStickBtn: !0 }),
                  a < 3e3 && t && this.setData({ showStickBtn: !1 });
              },
              imgClick: function (e) {
                var t = e.target.dataset,
                  a = t.item,
                  i = t.index,
                  n = t.imgList,
                  o = this.data.scenicSpotName;
                console.log(e, a, n.length, o),
                  this.navigateTo({
                    url: "/pages/hotel/imagebox/imagebox",
                    data: { images: n, count: n.length, title: o, index: i },
                  });
              },
              toggleTextFold: function (e) {
                console.log("11", e.target.dataset);
                var t = e.target.dataset,
                  a = t.item,
                  i = t.index,
                  n = this.data.commentInfoList;
                (n[i].contentFold = !a.contentFold),
                  this.setData({ commentInfoList: n });
              },
              countWord: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : e.length,
                  a = 0;
                return e && 0 != e.length
                  ? (e.forEach(function (e, i) {
                      i <= t &&
                        (e.commentCount && (a += (e.commentCount + "").length),
                        e.tagName && (a += e.tagName.length));
                    }),
                    a)
                  : 0;
              },
              judgeOverflow: function (e, t) {
                var a = e.findIndex(function (e) {
                  return e.tagId == t;
                });
                return !(this.countWord(e, a) > 45);
              },
              reloadPage: function () {
                var e = this,
                  t = this.options.commentTagId,
                  a = void 0 === t ? null : t;
                this.setData(
                  {
                    pageIndex: 1,
                    isLoadingMoreError: !1,
                    isLoadError: !1,
                    isRequestOver: !0,
                    isLoadingMore: !1,
                    hasMoreData: !0,
                  },
                  function () {
                    e.getCommentData(a, !1, 1, !1, !0);
                  }
                );
              },
              reloadMore: function () {
                var e = this,
                  t = this.data,
                  a = t.selectTagId,
                  i = t.pageIndex;
                this.setData(
                  {
                    isLoadingMoreError: !1,
                    isLoadError: !1,
                    isRequestOver: !0,
                    isLoadingMore: !0,
                    hasMoreData: !0,
                  },
                  function () {
                    e.getCommentData(a, !1, i, !0);
                  }
                );
              },
              getCommentData: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  a =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  n =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3],
                  o =
                    arguments.length > 4 &&
                    void 0 !== arguments[4] &&
                    arguments[4],
                  s = this.options.scenicSpotId,
                  r = this.data,
                  c = r.isFold,
                  l = r.isTagListOverflow;
                (s = Number(s)),
                  (0, p.mn)({
                    scenicSpotId: s,
                    imageFilter: a,
                    pageIndex: i,
                    commentTagId: t,
                    sortType: 3,
                    imageHeight: 1,
                    imageWidth: 1,
                  })
                    .then(function (a) {
                      if (
                        (console.log("所有评论数据" + i, a),
                        I.Z.hideLoading(),
                        1 == a.resultCode && a.commentResult)
                      ) {
                        var s = a.commentResult,
                          r = e.data.commentInfoList || [];
                        s &&
                          s.allCommentTags &&
                          (s.allCommentTags.tagId = null);
                        var m = [];
                        s.allCommentTags &&
                          !V(s.allCommentTags) &&
                          m.push(s.allCommentTags),
                          s.imageCommentTags &&
                            !V(s.imageCommentTags) &&
                            m.push(s.imageCommentTags),
                          s.commentHotTags &&
                            s.commentHotTags.length > 0 &&
                            (m = m.concat(s.commentHotTags)),
                          o &&
                            e.countWord(m) > 45 &&
                            ((c = !0),
                            (l = !0),
                            t && (c = e.judgeOverflow(m, t)));
                        var d = !0;
                        s.commentInfo.length < 25 && (d = !1),
                          s.commentInfo.forEach(function (e, t) {
                            (e.content = v.Z.repalceCharCode(e.content)),
                              e.imageList &&
                                e.imageList.length > 0 &&
                                e.imageList.forEach(function (e) {
                                  e.imageUrl = e.photoPath;
                                }),
                              (e.isOverflow = v.Z.isOverflow(B, e.content, 6)),
                              v.Z.isOverflow(B, e.content, 6) &&
                                (e.contentFold = !0);
                          }),
                          e.setData({
                            isFold: c,
                            isTagListOverflow: l,
                            selectTagId: t,
                            isLoadingMore: !1,
                            isLoadingMoreError: !1,
                            hasMoreData: d,
                            isRequestOver: !0,
                            pageIndex: i,
                            isLoadError: !1,
                            averageScore: s.averageScore.toFixed(1),
                            commentHotTags: m,
                            commentInfoList: n
                              ? r.concat(s.commentInfo)
                              : s.commentInfo,
                          });
                      } else if (n)
                        e.setData({
                          pageIndex: i,
                          isLoadingMoreError: !0,
                          isLoadingMore: !1,
                        });
                      else {
                        var g = !1;
                        o ? (g = !0) : I.Z.showToast("网络繁忙"),
                          e.setData({ isLoadingMore: !1, isLoadError: g });
                      }
                    })
                    .catch(function (e) {
                      console.log("请求catch", e);
                    });
              },
              toggleFold: function () {
                var e = this.data.isFold;
                this.setData({ isFold: !e });
              },
              selectTag: function (e) {
                var t = this,
                  a = e.target.dataset.item,
                  i = this.data,
                  n = i.isLoadingMore,
                  o = i.selectTagId;
                n ||
                  o == a.tagId ||
                  (I.Z.showLoading(),
                  this.setData(
                    {
                      isLoadingMoreError: !1,
                      isLoadError: !1,
                      hasMoreData: !0,
                      isLoadingMore: !0,
                      pageIndex: 1,
                    },
                    function () {
                      t.getCommentData(a.tagId);
                    }
                  ));
              },
            },
            b =
              (0, k.h)()(
                (x =
                  h()(C)(
                    (x = (function (e) {
                      (0, s.Z)(a, e);
                      var t = (0, r.Z)(a);
                      function a() {
                        return (0, n.Z)(this, a), t.apply(this, arguments);
                      }
                      return (
                        (0, o.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                a = t.averageScore,
                                i = t.isFold,
                                n = t.selectTagId,
                                o = t.commentHotTags,
                                s = t.isTagListOverflow,
                                r = t.commentInfoList,
                                c = t.hasMoreData,
                                m = t.isLoadingMoreError,
                                d = t.isRequestOver,
                                g = t.isLoadError,
                                h = t.partner,
                                u = t.showStickBtn;
                              return (0, w.BX)(l.View, {
                                children: [
                                  d && !g
                                    ? (0, w.BX)(l.View, {
                                        className: "evaluate-view",
                                        children: [
                                          a > 0
                                            ? (0, w.BX)(l.View, {
                                                className: "evaluate-total",
                                                children: [
                                                  "总评分",
                                                  (0, w.tZ)(l.Text, {
                                                    className: "strong",
                                                    children: a,
                                                  }),
                                                  (0, w.tZ)(T.Z, {
                                                    data: { commentGrade: a },
                                                  }),
                                                ],
                                              })
                                            : (0, w.tZ)(l.View, {
                                                className: "evaluate-total",
                                                children: "暂无评分",
                                              }),
                                          (0, w.BX)(l.View, {
                                            className: "evaluate-tag",
                                            children: [
                                              (0, w.tZ)(l.View, {
                                                className: "evaluate-tag-bd",
                                                style:
                                                  "max-height:" +
                                                  (i ? "170rpx" : "2000rpx") +
                                                  ";overflow:hidden",
                                                children: o.map(function (
                                                  t,
                                                  a
                                                ) {
                                                  return (0, w.tZ)(
                                                    l.View,
                                                    {
                                                      id: "ALBp",
                                                      onClick: e.selectTag,
                                                      "data-item": t,
                                                      className:
                                                        "tagItem item " +
                                                        (n == t.tagId
                                                          ? "bgcolor-primary"
                                                          : ""),
                                                      children:
                                                        t.tagName +
                                                        " " +
                                                        (t.commentCount > 0
                                                          ? t.commentCount
                                                          : ""),
                                                    },
                                                    "index"
                                                  );
                                                }),
                                              }),
                                              s
                                                ? (0, w.tZ)(l.View, {
                                                    className:
                                                      "evaluate-tag-more " +
                                                      (i ? "" : "open"),
                                                    children: (0, w.tZ)(
                                                      l.Text,
                                                      {
                                                        id: "ALBq",
                                                        onClick:
                                                          this.toggleFold,
                                                        style:
                                                          "padding:0 30rpx",
                                                        className:
                                                          "ifont-arrdown2 iconfont",
                                                      }
                                                    ),
                                                  })
                                                : (0, w.tZ)(l.View, {
                                                    style:
                                                      "height:36rpx;border-bottom: 1rpx solid #eee",
                                                  }),
                                            ],
                                          }),
                                          (0, w.BX)(l.View, {
                                            className: "evaluate-list",
                                            children: [
                                              r.map(function (t, a) {
                                                return (0,
                                                w.tZ)(N, { data: { item: t, index: a }, toggleTextFold: e.toggleTextFold, imgClick: e.imgClick });
                                              }),
                                              c
                                                ? (0, w.tZ)(l.View, {
                                                    className: "finish",
                                                    id: "ALBr",
                                                    onClick: this.reloadMore,
                                                    children: m
                                                      ? (0, w.tZ)(l.Text, {
                                                          children:
                                                            "点击重新加载",
                                                        })
                                                      : (0, w.tZ)(l.Text, {
                                                          children: "加载中...",
                                                        }),
                                                  })
                                                : (0, w.tZ)(l.View, {
                                                    className: "finish",
                                                    children:
                                                      "- 暂时没有更多了 -",
                                                  }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : (0, w.tZ)(l.Block, {
                                        children:
                                          !g &&
                                          (0, w.tZ)(L, {
                                            selectTag: this.selectTag,
                                          }),
                                      }),
                                  d &&
                                    g &&
                                    (0, w.BX)(l.View, {
                                      className: "page-blank-bd",
                                      children: [
                                        (0, w.tZ)(l.Image, {
                                          src:
                                            "http://images3.c-ctrip.com/zt/wechat/" +
                                            ("zhixing" == h
                                              ? "img-blank-zx"
                                              : "img-blank-ty") +
                                            ".png",
                                          className: "img-blank",
                                        }),
                                        (0, w.tZ)(l.View, {
                                          className: "txt",
                                          children:
                                            "当前网络不给力，请刷新当前页面重试",
                                        }),
                                        (0, w.tZ)(l.Button, {
                                          className: "btn-reload btn-primary",
                                          id: "ALBs",
                                          onClick: this.reloadPage,
                                          children: "重新加载",
                                        }),
                                      ],
                                    }),
                                  d &&
                                    u &&
                                    (0, w.tZ)(l.View, {
                                      id: "ALBt",
                                      onClick: this.backToTop,
                                      className: "stickBtn",
                                      children: (0, w.tZ)(l.Image, {
                                        className: "stickImg",
                                        src: "https://pages.c-ctrip.com/ticket/app/back_top.png",
                                        mode: "aspectFit",
                                      }),
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        a
                      );
                    })(c.default.Component))
                  ) || x)
              ) || x;
          Page(
            (0, i.createPageConfig)(
              b,
              "pages/ticket/packageA/evaluate/evaluate",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "加载中...",
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#fff",
                navigationBarTextStyle: "black",
                disableScroll: !1,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [14856, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(67018);
        }),
          e.O();
      },
    ]);
})();
