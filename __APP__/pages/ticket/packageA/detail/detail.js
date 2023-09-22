!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [59243],
      {
        82516: function (e, t, i) {
          var n = i(32180),
            o = i(57042),
            c = i(24460),
            a = i(21867),
            s = i(86066),
            r = i(79301),
            l = i(95308),
            d = i(90129),
            m = i(52500),
            h = i(71515),
            u = i(92954),
            p = i.n(u),
            f = i(34229),
            g = i(48792),
            Z = i.n(g),
            N = i(79792),
            L = i(18783),
            w = {
              refundTypeDesc: function (e) {
                return { 1: "随时退", 2: "条件退", 3: "不可退" }[e + ""] || "";
              },
              getDesc: function (e) {
                var t = "";
                switch (Math.ceil(e)) {
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
              getEmoji: function (e) {
                return Math.ceil(e) > 5 || Math.ceil(e) < 1
                  ? "icon-score-5"
                  : "icon-score-" + Math.ceil(e);
              },
              cunImgList: function (e) {
                return e && e.length ? e.slice(0, 4) : [];
              },
              fixNum: function (e, t) {
                return !e || isNaN(e) ? e : (e = Number(e)).toFixed(t);
              },
            },
            B = {
              refundTypeDesc: w.refundTypeDesc,
              fixNum: w.fixNum,
              getEmoji: w.getEmoji,
              getDesc: w.getDesc,
              cunImgList: w.cunImgList,
            },
            y = i(45066),
            k = i(55099),
            v = i(65444),
            T = "ios" === N.default.platform.toLowerCase() ? 48 : 52;
          function x(e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          }
          function V() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            if (!e || !e.length) return [];
            var t = [];
            return (
              e.forEach(function (e, i) {
                (e.content = v.Z.repalceCharCode(e.content)),
                  (e.contentFold = v.Z.isOverflow(
                    T,
                    v.Z.repalceCharCode(e.content),
                    3
                  )),
                  (e.isOverflow = v.Z.isOverflow(
                    T,
                    v.Z.repalceCharCode(e.content),
                    3
                  )),
                  i < 2 && t.push(e);
              }),
              t
            );
          }
          var I = function (e) {
              if (!e || !x(e) || !e.length) return [];
              var t = [];
              return (
                e.forEach(function (e) {
                  var i = {
                    name: e.saleUnitName,
                    newLevelSecondSaleUnitList: [],
                  };
                  e.levelFirstSaleUnitList &&
                    x(e.levelFirstSaleUnitList) &&
                    e.levelFirstSaleUnitList.length &&
                    e.levelFirstSaleUnitList.forEach(function (e) {
                      var t = {
                        name: e.name || "",
                        resourceList: [],
                        minMarketPrice: e.minMarketPrice || 0,
                        minPrice: e.minPrice || 0,
                      };
                      e.levelSecondSaleUnitList &&
                        x(e.levelSecondSaleUnitList) &&
                        e.levelSecondSaleUnitList.length &&
                        e.levelSecondSaleUnitList.forEach(function (e) {
                          t.resourceList = t.resourceList.concat(
                            e.resourceList || []
                          );
                        }),
                        i.newLevelSecondSaleUnitList.push(t);
                    }),
                    i.newLevelSecondSaleUnitList.length && t.push(i);
                }),
                t
              );
            },
            S = function (e) {
              if (!e || !x(e) || !e.length) return [];
              var t = [];
              return (
                e.forEach(function (e) {
                  t = t.concat(e.resourceList || []);
                }),
                t
              );
            },
            C = function (e) {
              try {
                if (!e || !x(e) || !e.length) return [];
                var t = [],
                  i = [];
                return (
                  e.forEach(function (e) {
                    t = t.concat(e.levelFirstSaleUnitList || []);
                  }),
                  t.forEach(function (e, t) {
                    e.levelSecondSaleUnitList.length > 3 && t > 3
                      ? i.push(
                          Object.assign(e, {
                            newLevelSecondSaleUnitList:
                              e.levelSecondSaleUnitList,
                          })
                        )
                      : i.push(
                          Object.assign({}, e, {
                            resourceList: S(e.levelSecondSaleUnitList),
                          })
                        );
                  }),
                  i
                );
              } catch (e) {
                return [];
              }
            };
          function D() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.activityTitle,
              i = e.activityResourceList,
              n = e.recommendResource,
              o = n || {},
              c = o.title,
              a = o.resourceList,
              s = [];
            try {
              return (
                t &&
                  i &&
                  x(i) &&
                  i.length &&
                  s.push({ title: t, resourceList: i || [] }),
                c && x(a) && a.length && s.push({ title: c, resourceList: a }),
                console.log("这里是组装活动货架结果======>", s),
                s
              );
            } catch (e) {
              return [];
            }
          }
          function X() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            return e && e.length ? Array(e.length).fill(!1) : [];
          }
          function b() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = [];
            try {
              if (!e || !x(e) || !e.length) return t;
              for (var i = 0; i < e.length; i++) {
                var n =
                  (e[i] &&
                    e[i].newLevelSecondSaleUnitList &&
                    e[i].newLevelSecondSaleUnitList.length) ||
                  1;
                t.push({
                  shelfMore: !1,
                  secondLevel: Array(n).fill(!1),
                  resourceMore: Array(n).fill(!1),
                });
              }
              return t;
            } catch (e) {
              return t;
            }
          }
          var P,
            M = i(15148),
            R = {
              refundTypeDesc: function (e) {
                return { 1: "随时退", 2: "条件退", 3: "不可退" }[e + ""] || "";
              },
              getDesc: function (e) {
                var t = "";
                switch (Math.ceil(e)) {
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
              getEmoji: function (e) {
                return Math.ceil(e) > 5 || Math.ceil(e) < 1
                  ? "icon-score-5"
                  : "icon-score-" + Math.ceil(e);
              },
              cunImgList: function (e) {
                return e && e.length ? e.slice(0, 4) : [];
              },
              fixNum: function (e, t) {
                return !e || isNaN(e) ? e : (e = Number(e)).toFixed(t);
              },
            },
            U = {
              refundTypeDesc: R.refundTypeDesc,
              fixNum: R.fixNum,
              getEmoji: R.getEmoji,
              getDesc: R.getDesc,
              cunImgList: R.cunImgList,
            },
            A = i(48813),
            E = (function (e) {
              (0, a.Z)(i, e);
              var t = (0, s.Z)(i);
              function i() {
                return (0, o.Z)(this, i), t.apply(this, arguments);
              }
              return (
                (0, c.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props.data || {},
                        i = t.allCommentTags,
                        n = t.commentHotTags,
                        o = t.isTieyou,
                        c = t.commentInfo;
                      return (0, A.tZ)(h.Block, {
                        children: (0, A.BX)(h.View, {
                          className: "evaluate-box",
                          children: [
                            (0, A.BX)(h.View, {
                              className: "evaluate-hd",
                              id: "ALBW",
                              onClick: this.props.goToComment,
                              children: [
                                (0, A.BX)(h.View, {
                                  className: "cont",
                                  children: [
                                    "用户评价",
                                    (0, A.tZ)(h.Text, {
                                      className: "tgrey",
                                      children: "（" + i.commentCount + "条)",
                                    }),
                                  ],
                                }),
                                (0, A.tZ)(h.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                            n &&
                              n.length &&
                              (0, A.tZ)(h.View, {
                                className: "evaluate-tag " + (o ? "ty" : "zx"),
                                children: n.map(function (t, i) {
                                  return (0,
                                  A.tZ)(h.Block, { children: t.tagName && (0, A.tZ)(h.View, { className: "item", "data-comment-tag-id": t.tagId, id: "ALBX", onClick: e.props.goToComment, children: t.tagName + " " + (t.commentCount || "") }) }, i);
                                }),
                              }),
                            (0, A.BX)(h.View, {
                              className: "evaluate-list",
                              id: "ALBY",
                              onClick: this.props.goToComment,
                              children: [
                                c &&
                                  c.map(function (t, i) {
                                    return (0, A.tZ)(
                                      h.Block,
                                      {
                                        children: (0, A.BX)(h.View, {
                                          className: "item",
                                          children: [
                                            (0, A.BX)(h.View, {
                                              className: "evaluate-info",
                                              children: [
                                                (0, A.tZ)(h.Block, {
                                                  children:
                                                    t.userInfo &&
                                                    t.userInfo.userImage
                                                      ? (0, A.tZ)(h.Image, {
                                                          src: t.userInfo
                                                            .userImage,
                                                          className: "avatar",
                                                        })
                                                      : (0, A.tZ)(h.Image, {
                                                          src:
                                                            "https://pic.c-ctrip.com/train/zt/wechat/avatar-default-" +
                                                            (o ? "ty" : "zx") +
                                                            ".png",
                                                          className: "avatar",
                                                        }),
                                                }),
                                                (0, A.BX)(h.View, {
                                                  className: "cont",
                                                  children: [
                                                    (0, A.tZ)(h.View, {
                                                      className: "name",
                                                      children:
                                                        (t.userInfo &&
                                                          t.userInfo.name) ||
                                                        "匿名用户",
                                                    }),
                                                    (0, A.BX)(h.View, {
                                                      className: "score",
                                                      children: [
                                                        (0, A.tZ)(h.Icon, {
                                                          className: U.getEmoji(
                                                            t.commentScore
                                                          ),
                                                        }),
                                                        t.commentScore +
                                                          "分 " +
                                                          U.getDesc(
                                                            t.commentScore
                                                          ),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, A.tZ)(h.View, {
                                                  className: "rbox",
                                                  children:
                                                    t.commentDate +
                                                    "\n" +
                                                    (t.source || ""),
                                                }),
                                              ],
                                            }),
                                            (0, A.tZ)(h.Text, {
                                              className:
                                                "evaluate-txt " +
                                                (t.contentFold
                                                  ? "ellipsis"
                                                  : ""),
                                              children: t.content,
                                            }),
                                            t.isOverflow &&
                                              (0, A.tZ)(h.View, {
                                                className: "open color-primary",
                                                id: "ALBZ",
                                                onClick: function (e) {
                                                  e.stopPropagation();
                                                },
                                                children: (0, A.tZ)(h.View, {
                                                  "data-item": t,
                                                  "data-index": i,
                                                  id: "ALBa",
                                                  onClick:
                                                    e.props.toggleTextFold,
                                                  children: t.contentFold
                                                    ? "展开"
                                                    : "收起",
                                                }),
                                              }),
                                            t.imageList &&
                                              t.imageList.length &&
                                              (0, A.BX)(h.View, {
                                                className: "evaluate-img",
                                                children: [
                                                  U.cunImgList(t.imageList).map(
                                                    function (e, t) {
                                                      return (0, A.tZ)(
                                                        h.Block,
                                                        {
                                                          children: (0, A.tZ)(
                                                            h.Image,
                                                            {
                                                              src: e.thumbnailUrl,
                                                              className: "pic",
                                                            }
                                                          ),
                                                        },
                                                        t
                                                      );
                                                    }
                                                  ),
                                                  t.imageList.length > 4 &&
                                                    (0, A.tZ)(h.View, {
                                                      className: "num",
                                                      children:
                                                        t.imageList.length,
                                                    }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      },
                                      "index"
                                    );
                                  }),
                                (0, A.BX)(h.View, {
                                  className: "show-more color-primary",
                                  children: [
                                    "查看全部用户评价",
                                    (0, A.tZ)(h.Text, {
                                      className: "ifont-arr iconfont",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(m.default.Component),
            F = (function (e) {
              (0, a.Z)(i, e);
              var t = (0, s.Z)(i);
              function i() {
                return (0, o.Z)(this, i), t.apply(this, arguments);
              }
              return (
                (0, c.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      return (0, A.tZ)(h.Block, {
                        children: [0, 1, 2, 3, 4, 5, 6].map(function (e, t) {
                          return (0,
                          A.tZ)(h.Block, { children: (0, A.tZ)(h.View, { className: "skeleton-item", children: (0, A.BX)(h.View, { className: "bd", children: [(0, A.BX)(h.View, { className: "place", children: [(0, A.tZ)(h.View, { className: "name" }), (0, A.tZ)(h.View, { className: "desc" }), (0, A.tZ)(h.View, { className: "desc tit" })] }), (0, A.BX)(h.View, { className: "pay", children: [(0, A.tZ)(h.View, { className: "money" }), (0, A.tZ)(h.View, { className: "btn" })] })] }) }) }, t);
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(m.default.Component),
            O = (function (e) {
              (0, a.Z)(i, e);
              var t = (0, s.Z)(i);
              function i() {
                return (0, o.Z)(this, i), t.apply(this, arguments);
              }
              return (
                (0, c.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      return (0, A.tZ)(h.Block, {
                        children: (0, A.BX)(h.View, {
                          className: "skeleton-head-box",
                          children: [
                            (0, A.BX)(h.View, {
                              className: "skeleton-head-title",
                              children: [
                                (0, A.BX)(h.View, {
                                  className: "skeleton-left-box",
                                  children: [
                                    (0, A.tZ)(h.Text, {
                                      className: "add-skeleton-item",
                                      style: "width:400rpx;height:48rpx;",
                                    }),
                                    (0, A.tZ)(h.Text, {
                                      className: "add-skeleton-item",
                                      style:
                                        "width:290rpx;height:34rpx;margin-top: 8rpx;",
                                    }),
                                    (0, A.tZ)(h.Text, {
                                      className: "add-skeleton-item",
                                      style:
                                        "width:240rpx;height:34rpx;margin-top:16rpx;",
                                    }),
                                  ],
                                }),
                                (0, A.BX)(h.View, {
                                  className: "skeleton-right-box",
                                  children: [
                                    (0, A.tZ)(h.Text, {
                                      className: "add-skeleton-item",
                                      style:
                                        "width:80rpx;height:32rpx;margin-bottom: 8rpx;",
                                    }),
                                    (0, A.tZ)(h.Text, {
                                      className: "add-skeleton-item",
                                      style: "width:140rpx;height:32rpx;",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, A.tZ)(h.View, {
                              style: "margin:30rpx 30rpx 0;height:36rpx;",
                              className: "add-skeleton-item",
                            }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(m.default.Component),
            j = i(36318),
            z = i(19330),
            q = (function (e) {
              (0, a.Z)(i, e);
              var t = (0, s.Z)(i);
              function i() {
                return (0, o.Z)(this, i), t.apply(this, arguments);
              }
              return (
                (0, c.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props.data || {},
                        i = t.shelfItem,
                        n = t.extentList,
                        o = t.shelfIdx,
                        c = t.ticket,
                        a = t.isTieyou;
                      return (
                        t.isLogin,
                        i
                          ? (0, A.tZ)(h.Block, {
                              children: (0, A.BX)(h.View, {
                                className: "tick-list",
                                children: [
                                  (0, A.BX)(h.View, {
                                    className: "tick-lst-hd",
                                    children: [
                                      (0, A.tZ)(h.Text, {
                                        className: "tit",
                                        children: i.name || "",
                                      }),
                                      i.tag &&
                                        (0, A.tZ)(h.Text, {
                                          className: "tag",
                                          children: i.tag,
                                        }),
                                    ],
                                  }),
                                  i.newLevelSecondSaleUnitList.map(function (
                                    t,
                                    i
                                  ) {
                                    return (0, A.tZ)(
                                      h.Block,
                                      {
                                        children:
                                          (i < 4 || n[o].shelfMore) &&
                                          (0, A.BX)(h.Block, {
                                            children: [
                                              (0, A.BX)(h.View, {
                                                className:
                                                  "item " +
                                                  (n[o].secondLevel[i]
                                                    ? "open"
                                                    : ""),
                                                id: "ALBI",
                                                onClick: e.props.foldCommon,
                                                "data-ticket": c,
                                                "data-value":
                                                  !n[o].secondLevel[i],
                                                "data-idx": o,
                                                "data-type": "secondLevel",
                                                "data-second": i,
                                                children: [
                                                  (0, A.tZ)(h.View, {
                                                    className: "tit",
                                                    children: t.name || "",
                                                  }),
                                                  t.minPrice &&
                                                    (0, A.BX)(h.View, {
                                                      className: "price",
                                                      style:
                                                        "margin-right: 6rpx;",
                                                      children: [
                                                        t.minPrice,
                                                        (0, A.tZ)(h.Text, {
                                                          className: "em",
                                                          style:
                                                            "margin-left: -2rpx;",
                                                          children: "起",
                                                        }),
                                                      ],
                                                    }),
                                                  (0, A.tZ)(h.Text, {
                                                    className:
                                                      "ifont-open iconfont " +
                                                      (a ? "ty" : "zx"),
                                                  }),
                                                ],
                                              }),
                                              n[o].secondLevel[i] &&
                                                (0, A.BX)(h.View, {
                                                  className: "tick-detail",
                                                  children: [
                                                    t &&
                                                      t.resourceList &&
                                                      t.resourceList.map(
                                                        function (t, c) {
                                                          return (0, A.tZ)(
                                                            h.Block,
                                                            {
                                                              children:
                                                                (c < 4 ||
                                                                  n[o]
                                                                    .resourceMore[
                                                                    i
                                                                  ]) &&
                                                                (0, A.BX)(
                                                                  h.View,
                                                                  {
                                                                    className:
                                                                      "item",
                                                                    children: [
                                                                      (0, A.BX)(
                                                                        h.View,
                                                                        {
                                                                          className:
                                                                            "cont",
                                                                          id: "ALBJ",
                                                                          onClick:
                                                                            e
                                                                              .props
                                                                              .showPurchaseNote,
                                                                          "data-content":
                                                                            t,
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              A.tZ)(
                                                                                h.View,
                                                                                {
                                                                                  className:
                                                                                    "tit",
                                                                                  children:
                                                                                    t.name ||
                                                                                    "",
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              A.BX)(
                                                                                h.View,
                                                                                {
                                                                                  className:
                                                                                    "info",
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      A.tZ)(
                                                                                        h.Text,
                                                                                        {
                                                                                          className:
                                                                                            "color-primary",
                                                                                          children:
                                                                                            t.advanceBookingDesc ||
                                                                                            "",
                                                                                        }
                                                                                      ),
                                                                                      t.afterOrderMessage &&
                                                                                        (0,
                                                                                        A.BX)(
                                                                                          h.Block,
                                                                                          {
                                                                                            children:
                                                                                              [
                                                                                                (0,
                                                                                                A.tZ)(
                                                                                                  h.Text,
                                                                                                  {
                                                                                                    style:
                                                                                                      "color:#D8D8D8;",
                                                                                                    children:
                                                                                                      "|",
                                                                                                  }
                                                                                                ),
                                                                                                "v",
                                                                                                (0,
                                                                                                A.tZ)(
                                                                                                  h.Text,
                                                                                                  {
                                                                                                    className:
                                                                                                      "tgrey",
                                                                                                    children:
                                                                                                      t.afterOrderMessage ||
                                                                                                      "",
                                                                                                  }
                                                                                                ),
                                                                                              ],
                                                                                          }
                                                                                        ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              A.BX)(
                                                                                h.View,
                                                                                {
                                                                                  className:
                                                                                    "info",
                                                                                  children:
                                                                                    [
                                                                                      U.refundTypeDesc(
                                                                                        t.refundNewType
                                                                                      ) &&
                                                                                        (0,
                                                                                        A.BX)(
                                                                                          h.Block,
                                                                                          {
                                                                                            children:
                                                                                              [
                                                                                                (0,
                                                                                                A.tZ)(
                                                                                                  h.Text,
                                                                                                  {
                                                                                                    className:
                                                                                                      "tgrey",
                                                                                                    children:
                                                                                                      U.refundTypeDesc(
                                                                                                        t.refundNewType
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                                "|",
                                                                                              ],
                                                                                          }
                                                                                        ),
                                                                                      (0,
                                                                                      A.tZ)(
                                                                                        h.Text,
                                                                                        {
                                                                                          className:
                                                                                            "tgrey",
                                                                                          children:
                                                                                            "购票须知",
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      A.tZ)(
                                                                                        h.Text,
                                                                                        {
                                                                                          className:
                                                                                            "ifont-arr iconfont",
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                      (0, A.BX)(
                                                                        h.View,
                                                                        {
                                                                          className:
                                                                            "rbox",
                                                                          children:
                                                                            [
                                                                              t
                                                                                .couponInfo
                                                                                .couponDesc &&
                                                                                (0,
                                                                                A.tZ)(
                                                                                  h.Block,
                                                                                  {
                                                                                    children:
                                                                                      (0,
                                                                                      A.tZ)(
                                                                                        h.View,
                                                                                        {
                                                                                          className:
                                                                                            "tag",
                                                                                          children:
                                                                                            t
                                                                                              .couponInfo
                                                                                              .couponDesc,
                                                                                        }
                                                                                      ),
                                                                                  }
                                                                                ),
                                                                              (0,
                                                                              A.BX)(
                                                                                h.View,
                                                                                {
                                                                                  className:
                                                                                    "mtxt",
                                                                                  children:
                                                                                    [
                                                                                      t.marketPrice &&
                                                                                        t.marketPrice >
                                                                                          t.salePrice &&
                                                                                        (0,
                                                                                        A.tZ)(
                                                                                          h.Text,
                                                                                          {
                                                                                            className:
                                                                                              "tgrey s",
                                                                                            children:
                                                                                              "¥" +
                                                                                              t.marketPrice,
                                                                                          }
                                                                                        ),
                                                                                      (0,
                                                                                      A.tZ)(
                                                                                        h.Text,
                                                                                        {
                                                                                          className:
                                                                                            "price",
                                                                                          children:
                                                                                            t.salePrice,
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              A.tZ)(
                                                                                h.Button,
                                                                                {
                                                                                  className:
                                                                                    "btn-book ticket-btn-red",
                                                                                  id: "ALBK",
                                                                                  onClick:
                                                                                    e
                                                                                      .props
                                                                                      .goToBook,
                                                                                  "data-resource":
                                                                                    t,
                                                                                  children:
                                                                                    "立即预订",
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                            },
                                                            "resourceIdx"
                                                          );
                                                        }
                                                      ),
                                                    t.resourceList.length > 4 &&
                                                      (0, A.tZ)(h.Block, {
                                                        children: n[o]
                                                          .resourceMore[i]
                                                          ? (0, A.BX)(h.View, {
                                                              className: "more",
                                                              "data-value": 0,
                                                              "data-idx": o,
                                                              "data-second": i,
                                                              "data-ticket": c,
                                                              "data-type":
                                                                "resourceMore",
                                                              id: "ALBM",
                                                              onClick:
                                                                e.props
                                                                  .foldCommon,
                                                              children: [
                                                                "收起",
                                                                (0, A.tZ)(
                                                                  h.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-arrdown2 iconfont",
                                                                    style:
                                                                      "transform:rotate(180deg)",
                                                                  }
                                                                ),
                                                              ],
                                                            })
                                                          : (0, A.BX)(h.View, {
                                                              className: "more",
                                                              "data-value": 1,
                                                              "data-idx": o,
                                                              "data-type":
                                                                "resourceMore",
                                                              "data-second": i,
                                                              "data-ticket": c,
                                                              id: "ALBL",
                                                              onClick:
                                                                e.props
                                                                  .foldCommon,
                                                              children: [
                                                                "查看更多",
                                                                (0, A.tZ)(
                                                                  h.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-arrdown2 iconfont",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                      }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                      },
                                      "secondLevelIdx"
                                    );
                                  }),
                                  i.newLevelSecondSaleUnitList.length > 4 &&
                                    (0, A.tZ)(h.Block, {
                                      children: n[o].shelfMore
                                        ? (0, A.BX)(h.View, {
                                            className:
                                              "show-more color-primary",
                                            "data-value": 0,
                                            "data-idx": o,
                                            "data-type": "shelfMore",
                                            "data-ticket": c,
                                            id: "ALBO",
                                            onClick: this.props.foldCommon,
                                            children: [
                                              "收起",
                                              (0, A.tZ)(h.Text, {
                                                className:
                                                  "ifont-arrdown2 iconfont",
                                                style:
                                                  "transform:rotate(180deg)",
                                              }),
                                            ],
                                          })
                                        : (0, A.BX)(h.View, {
                                            className:
                                              "show-more color-primary",
                                            "data-value": 1,
                                            "data-ticket": c,
                                            "data-idx": o,
                                            "data-type": "shelfMore",
                                            id: "ALBN",
                                            onClick: this.props.foldCommon,
                                            children: [
                                              "查看更多" +
                                                (i.newLevelSecondSaleUnitList
                                                  .length -
                                                  4) +
                                                "个票种",
                                              (0, A.tZ)(h.Text, {
                                                className:
                                                  "ifont-arrdown2 iconfont",
                                              }),
                                            ],
                                          }),
                                    }),
                                ],
                              }),
                            })
                          : (0, A.tZ)(h.View, {})
                      );
                    },
                  },
                ]),
                i
              );
            })(m.default.Component),
            Y = (function (e) {
              (0, a.Z)(i, e);
              var t = (0, s.Z)(i);
              function i() {
                return (0, o.Z)(this, i), t.apply(this, arguments);
              }
              return (
                (0, c.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props.data || {},
                        i = t.activityList,
                        n = t.activityExtentList;
                      return (
                        t.isLogin,
                        i
                          ? (0, A.tZ)(h.Block, {
                              children:
                                i &&
                                (0, A.tZ)(h.Block, {
                                  children: i.map(function (t, i) {
                                    return (0, A.tZ)(
                                      h.Block,
                                      {
                                        children: (0, A.BX)(h.View, {
                                          className: "tick-list recommend-lyj",
                                          children: [
                                            (0, A.tZ)(h.View, {
                                              className: "recommend-hd",
                                              children: t.title,
                                            }),
                                            (0, A.BX)(h.View, {
                                              className: "tick-detail",
                                              children: [
                                                t &&
                                                  t.resourceList &&
                                                  t.resourceList.map(function (
                                                    t,
                                                    o
                                                  ) {
                                                    var c;
                                                    return (0, A.tZ)(
                                                      h.Block,
                                                      {
                                                        children:
                                                          (o < 4 || n[i]) &&
                                                          (0, A.BX)(h.View, {
                                                            className: "item",
                                                            children: [
                                                              (0, A.BX)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "cont",
                                                                  id: "ALBC",
                                                                  onClick:
                                                                    e.props
                                                                      .showPurchaseNote,
                                                                  "data-content":
                                                                    t,
                                                                  children: [
                                                                    (0, A.tZ)(
                                                                      h.View,
                                                                      {
                                                                        className:
                                                                          "tit",
                                                                        children:
                                                                          t.name ||
                                                                          "",
                                                                      }
                                                                    ),
                                                                    (0, A.BX)(
                                                                      h.View,
                                                                      {
                                                                        className:
                                                                          "info",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            A.tZ)(
                                                                              h.Text,
                                                                              {
                                                                                className:
                                                                                  "color-primary",
                                                                                children:
                                                                                  t.advanceBookingDesc ||
                                                                                  "",
                                                                              }
                                                                            ),
                                                                            t.afterOrderMessage &&
                                                                              (0,
                                                                              A.BX)(
                                                                                h.Block,
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      A.tZ)(
                                                                                        h.Text,
                                                                                        {
                                                                                          style:
                                                                                            "color:#D8D8D8;",
                                                                                          children:
                                                                                            "|",
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      A.tZ)(
                                                                                        h.Text,
                                                                                        {
                                                                                          className:
                                                                                            "tgrey",
                                                                                          children:
                                                                                            t.afterOrderMessage ||
                                                                                            "",
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, A.BX)(
                                                                      h.View,
                                                                      {
                                                                        className:
                                                                          "info",
                                                                        children:
                                                                          [
                                                                            U.refundTypeDesc(
                                                                              t.refundNewType
                                                                            ) &&
                                                                              (0,
                                                                              A.BX)(
                                                                                h.Block,
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      A.tZ)(
                                                                                        h.Text,
                                                                                        {
                                                                                          className:
                                                                                            "tgrey",
                                                                                          children:
                                                                                            U.refundTypeDesc(
                                                                                              t.refundNewType
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                      "|",
                                                                                    ],
                                                                                }
                                                                              ),
                                                                            (0,
                                                                            A.tZ)(
                                                                              h.Text,
                                                                              {
                                                                                className:
                                                                                  "tgrey",
                                                                                children:
                                                                                  "购票须知",
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            A.tZ)(
                                                                              h.Text,
                                                                              {
                                                                                className:
                                                                                  "ifont-arr iconfont",
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, A.BX)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "rbox",
                                                                  children: [
                                                                    (null ==
                                                                      t ||
                                                                    null ===
                                                                      (c =
                                                                        t.couponInfo) ||
                                                                    void 0 === c
                                                                      ? void 0
                                                                      : c.couponDesc) &&
                                                                      (0, A.tZ)(
                                                                        h.Block,
                                                                        {
                                                                          children:
                                                                            (0,
                                                                            A.tZ)(
                                                                              h.View,
                                                                              {
                                                                                className:
                                                                                  "detail-coupon-price",
                                                                                children:
                                                                                  t
                                                                                    .couponInfo
                                                                                    .couponDesc,
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                    (0, A.BX)(
                                                                      h.View,
                                                                      {
                                                                        className:
                                                                          "mtxt",
                                                                        children:
                                                                          [
                                                                            t &&
                                                                              t.marketPrice &&
                                                                              t.marketPrice >
                                                                                t.salePrice &&
                                                                              (0,
                                                                              A.BX)(
                                                                                h.Text,
                                                                                {
                                                                                  className:
                                                                                    "tgrey",
                                                                                  children:
                                                                                    [
                                                                                      "平日价",
                                                                                      (0,
                                                                                      A.tZ)(
                                                                                        h.Text,
                                                                                        {
                                                                                          className:
                                                                                            "s",
                                                                                          children:
                                                                                            "¥" +
                                                                                            t.marketPrice,
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                            (0,
                                                                            A.tZ)(
                                                                              h.Text,
                                                                              {
                                                                                className:
                                                                                  "price",
                                                                                children:
                                                                                  null ==
                                                                                  t
                                                                                    ? void 0
                                                                                    : t.salePrice,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, A.tZ)(
                                                                      h.Button,
                                                                      {
                                                                        className:
                                                                          "btn-book ticket-btn-red",
                                                                        id: "ALBD",
                                                                        onClick:
                                                                          e
                                                                            .props
                                                                            .goToBook,
                                                                        "data-resource":
                                                                          t,
                                                                        children:
                                                                          "立即预订",
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                      },
                                                      "resourceIdx"
                                                    );
                                                  }),
                                                t.resourceList &&
                                                  t.resourceList.length > 4 &&
                                                  (0, A.tZ)(h.Block, {
                                                    children: n[i]
                                                      ? (0, A.BX)(h.View, {
                                                          className:
                                                            "show-more color-primary",
                                                          id: "ALBF",
                                                          onClick:
                                                            e.props
                                                              .foldActivity,
                                                          "data-value": 0,
                                                          "data-indicator": i,
                                                          children: [
                                                            "收起",
                                                            (0, A.tZ)(h.Text, {
                                                              className:
                                                                "ifont-arrdown2 iconfont",
                                                              style:
                                                                "transform:rotate(180deg)",
                                                            }),
                                                          ],
                                                        })
                                                      : (0, A.BX)(h.View, {
                                                          className:
                                                            "show-more color-primary",
                                                          id: "ALBE",
                                                          onClick:
                                                            e.props
                                                              .foldActivity,
                                                          "data-value": 1,
                                                          "data-indicator": i,
                                                          children: [
                                                            "查看更多",
                                                            (0, A.tZ)(h.Text, {
                                                              className:
                                                                "ifont-arrdown2 iconfont",
                                                            }),
                                                          ],
                                                        }),
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      "idx"
                                    );
                                  }),
                                }),
                            })
                          : (0, A.tZ)(h.View, {})
                      );
                    },
                  },
                ]),
                i
              );
            })(m.default.Component),
            H = (function (e) {
              (0, a.Z)(i, e);
              var t = (0, s.Z)(i);
              function i() {
                return (0, o.Z)(this, i), t.apply(this, arguments);
              }
              return (
                (0, c.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props.data || {},
                        i = t.saleUnitTypeList,
                        n = t.scenicExtentList,
                        o = (t.isLogin, t.isTieyou);
                      return i
                        ? (0, A.tZ)(h.Block, {
                            children:
                              i &&
                              (0, A.tZ)(h.Block, {
                                children: i.map(function (t, i) {
                                  return (0, A.tZ)(
                                    h.Block,
                                    {
                                      children:
                                        t.resourceList && t.resourceList.length
                                          ? (0, A.tZ)(h.Block, {
                                              children: (0, A.BX)(h.View, {
                                                className: "tick-list",
                                                children: [
                                                  (0, A.BX)(h.View, {
                                                    className: "tick-lst-hd",
                                                    children: [
                                                      (0, A.tZ)(h.Text, {
                                                        className: "tit",
                                                        children: t.name,
                                                      }),
                                                      t.tag &&
                                                        (0, A.tZ)(h.Text, {
                                                          className: "tag",
                                                          children: t.tag,
                                                        }),
                                                    ],
                                                  }),
                                                  t.resourceList &&
                                                    t.resourceList.length &&
                                                    (0, A.BX)(h.View, {
                                                      className: "tick-detail",
                                                      children: [
                                                        t &&
                                                          t.resourceList &&
                                                          t.resourceList.map(
                                                            function (t, o) {
                                                              return (0, A.tZ)(
                                                                h.Block,
                                                                {
                                                                  children:
                                                                    (o < 4 ||
                                                                      n[i]
                                                                        .shelfMore) &&
                                                                    (0, A.BX)(
                                                                      h.View,
                                                                      {
                                                                        className:
                                                                          "item",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            A.BX)(
                                                                              h.View,
                                                                              {
                                                                                className:
                                                                                  "cont",
                                                                                id: "ALBP",
                                                                                onClick:
                                                                                  e
                                                                                    .props
                                                                                    .showPurchaseNote,
                                                                                "data-content":
                                                                                  t,
                                                                                children:
                                                                                  [
                                                                                    (0,
                                                                                    A.tZ)(
                                                                                      h.View,
                                                                                      {
                                                                                        className:
                                                                                          "tit",
                                                                                        children:
                                                                                          t.name ||
                                                                                          "",
                                                                                      }
                                                                                    ),
                                                                                    (0,
                                                                                    A.BX)(
                                                                                      h.View,
                                                                                      {
                                                                                        className:
                                                                                          "info",
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            A.tZ)(
                                                                                              h.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "color-primary",
                                                                                                children:
                                                                                                  t.advanceBookingDesc ||
                                                                                                  "",
                                                                                              }
                                                                                            ),
                                                                                            t.afterOrderMessage &&
                                                                                              (0,
                                                                                              A.BX)(
                                                                                                h.Block,
                                                                                                {
                                                                                                  children:
                                                                                                    [
                                                                                                      (0,
                                                                                                      A.tZ)(
                                                                                                        h.Text,
                                                                                                        {
                                                                                                          style:
                                                                                                            "color:#D8D8D8;",
                                                                                                          children:
                                                                                                            "|",
                                                                                                        }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      A.tZ)(
                                                                                                        h.Text,
                                                                                                        {
                                                                                                          className:
                                                                                                            "tgrey",
                                                                                                          children:
                                                                                                            t.afterOrderMessage ||
                                                                                                            "",
                                                                                                        }
                                                                                                      ),
                                                                                                    ],
                                                                                                }
                                                                                              ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                    (0,
                                                                                    A.BX)(
                                                                                      h.View,
                                                                                      {
                                                                                        className:
                                                                                          "info",
                                                                                        children:
                                                                                          [
                                                                                            U.refundTypeDesc(
                                                                                              t.refundNewType
                                                                                            ) &&
                                                                                              (0,
                                                                                              A.BX)(
                                                                                                h.Block,
                                                                                                {
                                                                                                  children:
                                                                                                    [
                                                                                                      (0,
                                                                                                      A.tZ)(
                                                                                                        h.Text,
                                                                                                        {
                                                                                                          className:
                                                                                                            "tgrey",
                                                                                                          children:
                                                                                                            U.refundTypeDesc(
                                                                                                              t.refundNewType
                                                                                                            ),
                                                                                                        }
                                                                                                      ),
                                                                                                      "|",
                                                                                                    ],
                                                                                                }
                                                                                              ),
                                                                                            (0,
                                                                                            A.tZ)(
                                                                                              h.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "tgrey",
                                                                                                children:
                                                                                                  "购票须知",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            A.tZ)(
                                                                                              h.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "ifont-arr iconfont",
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            A.BX)(
                                                                              h.View,
                                                                              {
                                                                                className:
                                                                                  "rbox",
                                                                                children:
                                                                                  [
                                                                                    t &&
                                                                                      t.couponInfo &&
                                                                                      t
                                                                                        .couponInfo
                                                                                        .couponDesc &&
                                                                                      (0,
                                                                                      A.tZ)(
                                                                                        h.Block,
                                                                                        {
                                                                                          children:
                                                                                            (0,
                                                                                            A.tZ)(
                                                                                              h.View,
                                                                                              {
                                                                                                className:
                                                                                                  "tag",
                                                                                                children:
                                                                                                  t
                                                                                                    .couponInfo
                                                                                                    .couponDesc,
                                                                                              }
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                    (0,
                                                                                    A.BX)(
                                                                                      h.View,
                                                                                      {
                                                                                        className:
                                                                                          "mtxt",
                                                                                        children:
                                                                                          [
                                                                                            !!t.marketPrice &&
                                                                                              t.marketPrice >
                                                                                                t.salePrice &&
                                                                                              (0,
                                                                                              A.tZ)(
                                                                                                h.Text,
                                                                                                {
                                                                                                  className:
                                                                                                    "tgrey s",
                                                                                                  children:
                                                                                                    "¥" +
                                                                                                    t.marketPrice,
                                                                                                }
                                                                                              ),
                                                                                            (0,
                                                                                            A.tZ)(
                                                                                              h.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "price",
                                                                                                children:
                                                                                                  t.salePrice,
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                    (0,
                                                                                    A.tZ)(
                                                                                      h.Button,
                                                                                      {
                                                                                        className:
                                                                                          "btn-book ticket-btn-red",
                                                                                        id: "ALBQ",
                                                                                        onClick:
                                                                                          e
                                                                                            .props
                                                                                            .goToBook,
                                                                                        "data-resource":
                                                                                          t,
                                                                                        children:
                                                                                          "立即预订",
                                                                                      }
                                                                                    ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                },
                                                                "resourceIdx"
                                                              );
                                                            }
                                                          ),
                                                        t.resourceList.length >
                                                          4 &&
                                                          (0, A.tZ)(h.Block, {
                                                            children: n[i]
                                                              .shelfMore
                                                              ? (0, A.BX)(
                                                                  h.View,
                                                                  {
                                                                    className:
                                                                      "show-more color-primary",
                                                                    "data-value": 0,
                                                                    "data-idx":
                                                                      i,
                                                                    "data-type":
                                                                      "shelfMore",
                                                                    "data-ticket":
                                                                      "scenicExtentList",
                                                                    id: "ALBS",
                                                                    onClick:
                                                                      e.props
                                                                        .foldCommon,
                                                                    children: [
                                                                      "收起",
                                                                      (0, A.tZ)(
                                                                        h.Text,
                                                                        {
                                                                          className:
                                                                            "ifont-arrdown2 iconfont",
                                                                          style:
                                                                            "transform:rotate(180deg)",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                )
                                                              : (0, A.BX)(
                                                                  h.View,
                                                                  {
                                                                    className:
                                                                      "show-more color-primary",
                                                                    "data-value": 1,
                                                                    "data-ticket":
                                                                      "scenicExtentList",
                                                                    "data-idx":
                                                                      i,
                                                                    "data-type":
                                                                      "shelfMore",
                                                                    id: "ALBR",
                                                                    onClick:
                                                                      e.props
                                                                        .foldCommon,
                                                                    children: [
                                                                      "查看更多",
                                                                      (0, A.tZ)(
                                                                        h.Text,
                                                                        {
                                                                          className:
                                                                            "ifont-arrdown2 iconfont",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                          }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                            })
                                          : (0, A.tZ)(h.Block, {
                                              children: (0, A.tZ)(q, {
                                                data: {
                                                  isTieyou: o,
                                                  shelfItem: t,
                                                  shelfIdx: i,
                                                  extentList: n,
                                                  ticket: "scenicExtentList",
                                                },
                                                foldCommon: e.props.foldCommon,
                                              }),
                                            }),
                                    },
                                    "shelfIdx"
                                  );
                                }),
                              }),
                          })
                        : (0, A.tZ)(h.View, {});
                    },
                  },
                ]),
                i
              );
            })(m.default.Component),
            G = i(81957),
            J = i(73851),
            _ = {
              scrollY: 0,
              pageId: N.default.isTieyou ? "10650059440" : "10650059422",
              data: {
                isTieyou: N.default.isTieyou,
                isLogin: !1,
                showSkeleton: !0,
                imageList: [],
                imageIndicator: 1,
                scenicSpotInfo: {},
                productDescription: null,
                activeMainRes: {},
                openBuyReading: !1,
                openScenicInfo: !1,
                isShowTicketCouponPop: !1,
                popCouponList: [],
                sceneID: "",
                couponStyle: {},
                hasCoupon: !1,
                couponTag: {},
                commentInfo: [],
                commentHotTags: [],
                allCommentTags: {},
                showPageProductDesc: !1,
                activityList: [],
                activityExtentList: [],
                saleUnitTypeList: [],
                scenicExtentList: [],
                otherSaleUnitTypeList: [],
                otherSaleUnitExtentList: [],
              },
              onLoad: function (e) {
                this.options = e = y.cQ.parseQrCodeScene(e);
                var t = e.scenicSpotId,
                  i = void 0 === t ? "" : t;
                try {
                  if (e.scenicInfo && "string" == typeof e.scenicInfo) {
                    var n = JSON.parse(decodeURIComponent(e.scenicInfo));
                    this.setData({ scenicSpotInfo: Object.assign({}, n) });
                    var o = n.name || "景点详情";
                    n.name &&
                      n.name.length > 12 &&
                      (o = n.name.substring(0, 12) + "..."),
                      p().setNavigationBarTitle({ title: o });
                  }
                } catch (e) {}
                this.queryImageList(i),
                  this.initCoupon(),
                  this.queryScenicComment(i);
              },
              onShow: function () {
                this.setData({ isLogin: !!L.ZP.isLogin });
                var e = this.options || {},
                  t = e.scenicSpotId,
                  i = void 0 === t ? "" : t,
                  n = e.activityId;
                this.queryDetailInfo(i, n);
              },
              changeCurrentImage: function (e) {
                var t = e.detail.current;
                this.setData({ imageIndicator: t + 1 });
              },
              queryImageList: function (e) {
                var t = this;
                (0, k.bC)({
                  imageSizeKeyList: ["C_640_360"],
                  imageLimit: 10,
                  scenicSpotIDList: [e],
                }).then(function (e) {
                  if (1 === e.resultCode) {
                    console.log("图片请求结果---\x3e", e);
                    try {
                      t.setData({
                        imageList:
                          e.scenicSpotImageList[0].imageSizeMapList[0]
                            .imageURLList || [],
                      });
                    } catch (e) {}
                  }
                });
              },
              queryDetailInfo: function (e, t) {
                var i = this,
                  n = {
                    activityId: +t || null,
                    scenicSpotIDList: [e],
                    imageSizeKey: "C_640_360",
                    responseDataType: 0,
                  };
                (0, k.om)(n)
                  .then(function (e) {
                    if (
                      1 === e.resultCode &&
                      e.scenicSpotInfoList &&
                      e.scenicSpotInfoList.length
                    ) {
                      var t =
                          (e.scenicSpotInfoList[0] &&
                            e.scenicSpotInfoList[0].productInfo) ||
                          {},
                        n = t.saleUnitTypeList || [],
                        o = t.otherSaleUnitTypeList || [];
                      i.setData({
                        showSkeleton: !1,
                        scenicSpotInfo: e.scenicSpotInfoList[0],
                        showPageProductDesc: i.judgePageProductDescShow(t),
                        activityList: D(t),
                        activityExtentList: X(D(t)),
                        saleUnitTypeList: C(n),
                        scenicExtentList: b(C(n)),
                        otherSaleUnitTypeList: I(o),
                        otherSaleUnitExtentList: b(I(o)),
                        productDescription:
                          t.productDescription &&
                          t.productDescription.replace(
                            /\<img/gi,
                            '<img class="rich-img" '
                          ),
                      });
                    } else J.Z.showToast(e.resultMessage || "网络异常，请稍后再试～");
                  })
                  .catch(function () {
                    J.Z.showToast("网络异常，请稍后再试～");
                  });
              },
              queryScenicComment: function (e) {
                var t = this;
                if (e) {
                  var i = {
                    scenicSpotId: e,
                    imageFilter: !1,
                    pageIndex: 1,
                    pageSize: 25,
                    sortType: 3,
                    imageHeight: 200,
                    imageWidth: 200,
                    commentTagId: 0,
                  };
                  (0, k.mn)(i).then(function (e) {
                    console.log("点评数据-----\x3e", e),
                      1 === e.resultCode &&
                        t.setData({
                          commentInfo: V(
                            (e.commentResult && e.commentResult.commentInfo) ||
                              []
                          ),
                          commentHotTags: []
                            .concat(
                              (e.commentResult &&
                                e.commentResult.imageCommentTags) ||
                                [],
                              (e.commentResult &&
                                e.commentResult.commentHotTags) ||
                                []
                            )
                            .slice(0, 6),
                          allCommentTags:
                            e.commentResult && e.commentResult.allCommentTags,
                        });
                  });
                }
              },
              foldCommon: function (e) {
                var t = this,
                  i = e.currentTarget.dataset,
                  n = i.value,
                  o = i.idx,
                  c = i.type,
                  a = i.second,
                  s = i.ticket,
                  r = void 0 === s ? "otherSaleUnitExtentList" : s,
                  l = [].concat(this.data[r]);
                switch (c) {
                  case "shelfMore":
                    l.splice(o, 1, {
                      shelfMore: !!n,
                      secondLevel: l[o].secondLevel,
                      resourceMore: l[o].resourceMore,
                    });
                    break;
                  case "resourceMore":
                  case "secondLevel":
                    var d = [].concat(l[o][c]);
                    d.splice(a, 1, !!n),
                      l.splice(o, 1, {
                        shelfMore: l[o].shelfMore,
                        secondLevel: "secondLevel" === c ? d : l[o].secondLevel,
                        resourceMore:
                          "resourceMore" === c ? d : l[o].resourceMore,
                      });
                }
                "otherSaleUnitExtentList" === r
                  ? this.setData({ otherSaleUnitExtentList: l }, function () {
                      t.scrollPage(e);
                    })
                  : this.setData({ scenicExtentList: l }, function () {
                      t.scrollPage(e);
                    });
              },
              scrollPage: function (e) {
                try {
                  var t = e.currentTarget.dataset.value,
                    i = (0, d.Z)(e.touches, 1)[0];
                  t && (this.scrollY = Math.ceil(i.pageY - i.clientY)),
                    !t &&
                      this.scrollY &&
                      p().pageScrollTo({
                        scrollTop: this.scrollY,
                        duration: 300,
                      });
                } catch (e) {}
              },
              foldActivity: function (e) {
                var t = e.currentTarget.dataset,
                  i = t.value,
                  n = t.indicator,
                  o = [].concat(this.data.activityExtentList);
                o.splice(n, 1, !!i), this.setData({ activityExtentList: o });
              },
              judgePageProductDescShow: function (e) {
                var t = e.otherSaleUnitTypeList,
                  i = e.saleUnitTypeList,
                  n = e.activityResourceList,
                  o = e.recommendResource,
                  c = e.productDescription;
                return !(
                  (t && t.length) ||
                  (i && i.length) ||
                  (n && n.length) ||
                  (o && o.resourceList && o.resourceList.length) ||
                  !c
                );
              },
              showPurchaseNote: function (e) {
                var t = e.currentTarget.dataset.content;
                this.setData({ activeMainRes: t, openBuyReading: !0 });
              },
              closeBuyReading: function () {
                this.setData({ activeMainRes: {}, openBuyReading: !1 });
              },
              showScenicInfo: function () {
                this.setData({ openScenicInfo: !0 });
              },
              closeScenicInfo: function () {
                this.setData({ openScenicInfo: !1 });
              },
              mapNavigate: function () {
                var e = this.data.scenicSpotInfo;
                e.latitude && e.longitude
                  ? (J.Z.showLoading(),
                    p().openLocation({
                      latitude: parseFloat(e.latitude),
                      longitude: parseFloat(e.longitude),
                      name: e.name || "景点位置",
                      address: e.address || "",
                      complete: function () {
                        J.Z.hideLoading();
                      },
                      fail: function () {
                        J.Z.showToast("获取导航信息失败");
                      },
                    }))
                  : J.Z.showToast("获取景点位置信息失败");
              },
              goToBook: function (e) {
                var t = this;
                return (0, l.Z)(
                  (0, r.Z)().mark(function i() {
                    var n, o, c, a, s;
                    return (0, r.Z)().wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            if (L.ZP.isLogin) {
                              i.next = 3;
                              break;
                            }
                            return (i.next = 3), L.ZP.doLogin();
                          case 3:
                            (n = e.currentTarget.dataset.resource),
                              (o = t.options || {}),
                              (c = o.source),
                              (a = void 0 === c ? "wechat" : c),
                              (s = t.data.scenicSpotInfo.iD),
                              y.F0.navigateTo(
                                "book",
                                {
                                  spotId: s || "",
                                  source: a,
                                  resourceId: n.id,
                                  couponPrice: n.couponPrice || "",
                                },
                                !0
                              );
                          case 7:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  })
                )();
              },
              afterLoginRoute: function (e) {
                var t = this;
                this.data.isLogin
                  ? this.goToBook(e)
                  : L.ZP.doLogin().then(
                      function () {
                        t.setData({ isLogin: !0 }), t.goToBook(e);
                      },
                      function (e) {
                        console.log(e);
                      }
                    );
              },
              onShareAppMessage: function () {
                var e = this.data,
                  t = e.scenicSpotInfo,
                  i = e.imageList,
                  n = encodeURIComponent(
                    JSON.stringify({
                      address: t.address,
                      commentCount: t.commentCount,
                      commentGrade: t.commentGrade,
                      name: t.name,
                      pmRecommand: t.pmRecommand,
                      sortDesc: t.sortDesc,
                      star: t.star,
                    })
                  );
                return {
                  bu: "ticket",
                  title: "".concat(t.name || "门票详情"),
                  path: "/pages/ticket/packageA/detail/detail?scenicSpotId="
                    .concat(t.iD, "&scenicInfo=")
                    .concat(n, "&source=share"),
                  imageUrl: i[0],
                };
              },
              toggleTextFold: function (e) {
                var t = e.currentTarget.dataset,
                  i = t.item,
                  n = t.index,
                  o = this.data.commentInfo;
                (o[n].contentFold = !i.contentFold),
                  this.setData({ commentInfo: o });
              },
              goToComment: function (e) {
                var t = this.data.scenicSpotInfo,
                  i = { scenicSpotId: t.iD, scenicSpotName: t.name },
                  n = e.currentTarget.dataset.commentTagId;
                n && (i.commentTagId = n), y.F0.navigateTo("evaluate", i);
              },
              empty: function () {},
            },
            K = Object.assign({}, _, M.G),
            Q =
              (0, G.h)()(
                (P =
                  Z()(K)(
                    (P = (function (e) {
                      (0, a.Z)(i, e);
                      var t = (0, s.Z)(i);
                      function i() {
                        return (0, o.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.isTieyou,
                                n = t.imageList,
                                o = t.imageIndicator,
                                c = t.scenicSpotInfo,
                                a = t.hasCoupon,
                                s = t.productDescription,
                                r = t.allCommentTags,
                                l = t.showSkeleton,
                                d = t.couponTag,
                                m = t.activityList,
                                u = t.isLogin,
                                p = t.activityExtentList,
                                g = t.saleUnitTypeList,
                                Z = t.scenicExtentList,
                                N = t.otherSaleUnitExtentList,
                                L = t.otherSaleUnitTypeList,
                                w = t.showPageProductDesc,
                                y = t.commentInfo,
                                k = t.commentHotTags,
                                v = t.openBuyReading,
                                T = t.activeMainRes,
                                x = t.openScenicInfo,
                                V = t.popCouponList,
                                I = t.couponStyle,
                                S = t.isShowTicketCouponPop;
                              return (0, A.BX)(h.Block, {
                                children: [
                                  (0, A.BX)(h.View, {
                                    className: "tick-pic " + (i ? "ty" : "zx"),
                                    children: [
                                      (0, A.tZ)(h.Swiper, {
                                        className: "swiper",
                                        indicatorDots: !0,
                                        autoplay: !0,
                                        interval: 5e3,
                                        duration: 1e3,
                                        indicatorActiveColor: "white",
                                        circular: "true",
                                        onChange: this.changeCurrentImage,
                                        children: n.map(function (e, t) {
                                          return (0,
                                          A.tZ)(h.Block, { children: (0, A.tZ)(h.SwiperItem, { itemId: t, children: (0, A.tZ)(h.Image, { src: e, className: "slide-image", mode: "aspectFill", lazyLoad: "true" }) }) }, "index");
                                        }),
                                      }),
                                      n &&
                                        n.length &&
                                        (0, A.tZ)(h.View, {
                                          className: "pic-num",
                                          children: o + "/" + n.length,
                                        }),
                                      (0, A.tZ)(h.View, {
                                        children: (0, A.tZ)(h.Image, {
                                          src: "https://images3.c-ctrip.com/zt/hotel/hotel-fenxiang.png",
                                          className: "shareIcon",
                                        }),
                                      }),
                                      (0, A.tZ)(h.View, {
                                        children: (0, A.tZ)(h.Button, {
                                          className: "shareIcon share-btn",
                                          hoverClass: "btn-hover",
                                          openType: "share",
                                        }),
                                      }),
                                    ],
                                  }),
                                  c.name || c.pmRecommand
                                    ? (0, A.BX)(h.View, {
                                        className:
                                          "tick-top " +
                                          (a ? "tick-top-bottom-pad" : ""),
                                        children: [
                                          (0, A.BX)(h.View, {
                                            className:
                                              "tick-top-hd static-header",
                                            children: [
                                              (0, A.BX)(h.View, {
                                                className: "cont",
                                                id: "ALBj",
                                                onClick: this.showScenicInfo,
                                                children: [
                                                  (0, A.tZ)(h.View, {
                                                    className: "tit",
                                                    children: c.name || "",
                                                  }),
                                                  (0, A.tZ)(h.View, {
                                                    className: "txt",
                                                    children:
                                                      c.pmRecommand || "",
                                                  }),
                                                  s &&
                                                    (0, A.BX)(h.View, {
                                                      className:
                                                        "info color-primary",
                                                      children: [
                                                        (0, A.tZ)(h.Text, {
                                                          children: "开放时间",
                                                        }),
                                                        "|",
                                                        (0, A.tZ)(h.Text, {
                                                          children: "景点介绍",
                                                        }),
                                                        (0, A.tZ)(h.Text, {
                                                          className:
                                                            "ifont-arr iconfont",
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                              c.commentGrade
                                                ? (0, A.BX)(h.View, {
                                                    className: "rbox",
                                                    id: "ALBk",
                                                    onClick: this.goToComment,
                                                    children: [
                                                      (0, A.BX)(h.View, {
                                                        className:
                                                          "grade ".concat(
                                                            i ? "ty" : "zx"
                                                          ),
                                                        children: [
                                                          (0, A.tZ)(h.Text, {
                                                            className: "strong",
                                                            children: B.fixNum(
                                                              c.commentGrade,
                                                              1
                                                            ),
                                                          }),
                                                          "分",
                                                        ],
                                                      }),
                                                      (0, A.BX)(h.View, {
                                                        className:
                                                          "txt ".concat(
                                                            i ? "ty" : "zx"
                                                          ),
                                                        children: [
                                                          (r.commentCount ||
                                                            "-") + "人点评",
                                                          (0, A.tZ)(h.Text, {
                                                            className:
                                                              "ifont-arr iconfont",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  })
                                                : (0, A.tZ)(h.View, {
                                                    className: "rbox",
                                                    children: (0, A.tZ)(
                                                      h.View,
                                                      {
                                                        className:
                                                          "grade ".concat(
                                                            i ? "ty" : "zx"
                                                          ),
                                                        children: (0, A.tZ)(
                                                          h.Text,
                                                          {
                                                            children: l
                                                              ? ""
                                                              : "暂无评分",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                            ],
                                          }),
                                          c.sortDesc &&
                                            (0, A.tZ)(h.Block, {
                                              children: (0, A.BX)(h.View, {
                                                className: "tick-top-bd",
                                                children: [
                                                  (0, A.tZ)(h.Image, {
                                                    src: "https://images3.c-ctrip.com/ztrip/attractionTicket/rank.png",
                                                    className:
                                                      "rank-desc-image",
                                                  }),
                                                  (0, A.tZ)(h.View, {
                                                    className: "rank-desc",
                                                    children: c.sortDesc,
                                                  }),
                                                ],
                                              }),
                                            }),
                                          c.address &&
                                            (0, A.BX)(h.View, {
                                              className: "tick-top-bd",
                                              children: [
                                                (0, A.BX)(h.View, {
                                                  className: "address",
                                                  children: [
                                                    (0, A.tZ)(h.Text, {
                                                      className:
                                                        "ifont-location iconfont",
                                                    }),
                                                    c.address,
                                                  ],
                                                }),
                                                (0, A.BX)(h.Button, {
                                                  className: "btn-gps",
                                                  id: "ALBl",
                                                  onClick: this.mapNavigate,
                                                  children: [
                                                    (0, A.tZ)(h.Text, {
                                                      className:
                                                        "ifont-gps iconfont",
                                                    }),
                                                    "导航",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          a &&
                                            (0, A.tZ)(h.Block, {
                                              children: (0, A.BX)(h.View, {
                                                className: "list-hongbao",
                                                children: [
                                                  (0, A.tZ)(h.Icon, {
                                                    className: "icon-hongbao",
                                                  }),
                                                  (0, A.BX)(h.View, {
                                                    className: "cont",
                                                    children: [
                                                      "您有" +
                                                        (d.totalCount || "-") +
                                                        "张优惠券" +
                                                        (1 === d.tagType
                                                          ? "可领取"
                                                          : "可使用"),
                                                      d.totalCouponPrice &&
                                                        (0, A.tZ)(h.Text, {
                                                          children:
                                                            "，可减" +
                                                            d.totalCouponPrice +
                                                            "元",
                                                        }),
                                                    ],
                                                  }),
                                                  1 === d.tagType &&
                                                    (0, A.tZ)(h.Button, {
                                                      className:
                                                        "btn-go btn-red",
                                                      id: "ALBm",
                                                      onClick: this.showPop,
                                                      children: "领取",
                                                    }),
                                                ],
                                              }),
                                            }),
                                        ],
                                      })
                                    : (0, A.tZ)(h.Block, {
                                        children: (0, A.tZ)(O, {}),
                                      }),
                                  l &&
                                    (0, A.tZ)(h.Block, {
                                      children: (0, A.tZ)(F, {}),
                                    }),
                                  (0, A.BX)(h.View, {
                                    className: "shelf-v2-wrap",
                                    children: [
                                      (0, A.tZ)(Y, {
                                        data: {
                                          isTieyou: i,
                                          activityList: m,
                                          isLogin: u,
                                          activityExtentList: p,
                                        },
                                        showPurchaseNote: this.showPurchaseNote,
                                        goToBook: this.goToBook,
                                        foldActivity: this.foldActivity,
                                        afterLoginRoute: this.afterLoginRoute,
                                        foldCommon: this.foldCommon,
                                      }),
                                      (0, A.tZ)(H, {
                                        data: {
                                          isTieyou: i,
                                          saleUnitTypeList: g,
                                          scenicExtentList: Z,
                                          isLogin: u,
                                        },
                                        showPurchaseNote: this.showPurchaseNote,
                                        goToBook: this.goToBook,
                                        foldActivity: this.foldActivity,
                                        afterLoginRoute: this.afterLoginRoute,
                                        foldCommon: this.foldCommon,
                                      }),
                                      L &&
                                        L.length > 0 &&
                                        (0, A.tZ)(h.Block, {
                                          children: L.map(function (t, n) {
                                            return (0,
                                            A.tZ)(h.Block, { children: (0, A.tZ)(q, { data: { isTieyou: i, shelfItem: t, shelfIdx: n, extentList: N, ticket: N, isLogin: u }, foldCommon: e.foldCommon, showPurchaseNote: e.showPurchaseNote, goToBook: e.goToBook, afterLoginRoute: e.afterLoginRoute }) }, "shelfIdx");
                                          }),
                                        }),
                                    ],
                                  }),
                                  w &&
                                    (0, A.tZ)(h.Block, {
                                      children: (0, A.tZ)(h.View, {
                                        className: "product-info-wrap",
                                        children: (0, A.BX)(h.View, {
                                          className: "product-info-content",
                                          children: [
                                            c.openTimeDesc &&
                                              (0, A.BX)(h.Block, {
                                                children: [
                                                  (0, A.tZ)(h.View, {
                                                    style:
                                                      "color: #222222;margin-bottom: 12rpx;",
                                                    children: "开放时间",
                                                  }),
                                                  (0, A.tZ)(h.View, {
                                                    style:
                                                      "color: #666666; margin-bottom: 24rpx;",
                                                    children: c.openTimeDesc,
                                                  }),
                                                ],
                                              }),
                                            s &&
                                              (0, A.BX)(h.Block, {
                                                children: [
                                                  (0, A.tZ)(h.View, {
                                                    style:
                                                      "color: #222222;margin-bottom: 12rpx;",
                                                    children: "景点介绍",
                                                  }),
                                                  (0, A.tZ)(f.ZtRichText, {
                                                    nodes: s,
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  y &&
                                    y.length &&
                                    !l &&
                                    (0, A.tZ)(h.Block, {
                                      children: (0, A.tZ)(E, {
                                        data: {
                                          isTieyou: i,
                                          commentInfo: y,
                                          commentHotTags: k,
                                          allCommentTags: r,
                                        },
                                        goToComment: this.goToComment,
                                        toggleTextFold: this.toggleTextFold,
                                      }),
                                    }),
                                  (0, A.tZ)(h.View, {
                                    className: "buy-reading-wrap",
                                    children: (0, A.tZ)(z.Z, {
                                      data: {
                                        isTieyou: i,
                                        openBuyReading: v,
                                        activeMainRes: T,
                                        isLogin: u,
                                        applyBtn: !0,
                                      },
                                      closeBuyReading: this.closeBuyReading,
                                      goToBook: this.goToBook,
                                      afterLoginRoute: this.afterLoginRoute,
                                    }),
                                  }),
                                  (0, A.tZ)(h.View, {
                                    className:
                                      "pop-mask " + (x ? "active" : ""),
                                    id: "ALBn",
                                    onClick: this.closeScenicInfo,
                                    onTouchMove: this.empty,
                                    children: (0, A.tZ)(h.View, {
                                      className: "pop-botm",
                                      id: "ALBo",
                                      onClick: this.empty,
                                      children: (0, A.tZ)(h.View, {
                                        className: "pop-botm-bd",
                                        children: (0, A.tZ)(h.ScrollView, {
                                          scrollY: "true",
                                          className: "pop-scroll",
                                          children: s
                                            ? (0, A.BX)(h.View, {
                                                className: "pop-tick-info-bd",
                                                children: [
                                                  c.openTimeDesc &&
                                                    (0, A.BX)(h.Block, {
                                                      children: [
                                                        (0, A.tZ)(h.View, {
                                                          style:
                                                            "color: #222222;margin-bottom: 12rpx;",
                                                          children: "开放时间",
                                                        }),
                                                        (0, A.tZ)(h.View, {
                                                          style:
                                                            "color: #666666; margin-bottom: 24rpx;",
                                                          children:
                                                            c.openTimeDesc,
                                                        }),
                                                      ],
                                                    }),
                                                  (0, A.tZ)(h.View, {
                                                    style:
                                                      "color: #222222;margin-bottom: 12rpx;",
                                                    children: "景点介绍",
                                                  }),
                                                  (0, A.tZ)(f.ZtRichText, {
                                                    nodes: s,
                                                  }),
                                                ],
                                              })
                                            : (0, A.tZ)(h.View, {
                                                className: "pop-tick-info-bd",
                                                children: (0, A.tZ)(h.Text, {
                                                  children: "暂无数据",
                                                }),
                                              }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  S &&
                                    V.length &&
                                    (0, A.tZ)(h.Block, {
                                      children: (0, A.tZ)(j.Z, {
                                        data: {
                                          popCouponList: V,
                                          isLogin: u,
                                          couponStyle: I,
                                        },
                                        receiveRequest: this.receiveRequest,
                                        closePop: this.closePop,
                                      }),
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(m.default.Component))
                  ) || P)
              ) || P;
          (Q.enableShareAppMessage = !0),
            Page(
              (0, n.createPageConfig)(
                Q,
                "pages/ticket/packageA/detail/detail",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "景点详情",
                  navigationBarBackgroundColor: "#fff",
                  backgroundColor: "#fff",
                  navigationBarTextStyle: "black",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [14856, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(82516);
        }),
          e.O();
      },
    ]);
})();
