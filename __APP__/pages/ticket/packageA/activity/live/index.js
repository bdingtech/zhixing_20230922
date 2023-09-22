!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [48073],
      {
        12595: function (e, t, i) {
          var c,
            a = i(32180),
            n = i(57042),
            o = i(24460),
            s = i(21867),
            r = i(86066),
            l = i(22276),
            d = i(52500),
            m = i(71515),
            h = i(92954),
            u = i.n(h),
            p = (i(49120), i(48792)),
            f = i.n(p),
            g = i(45066),
            w = i(55099),
            Z = i(52341),
            L = i(81957),
            k = i(73851),
            v = i(48813),
            x = {
              data: {
                activityThemeId: "",
                pageIndex: 1,
                scenicSpotList: [],
                showResource: [],
                cityList: [],
                isLoadAll: !1,
              },
              onLoad: function (e) {
                (this.options = e), this.fetchScenicSpotInfo();
              },
              fetchScenicSpotInfo: function (e) {
                var t = this,
                  i = this.options,
                  c = i.activityId,
                  a = i.gsCityId,
                  n = this.data,
                  o = n.pageIndex,
                  s = n.scenicSpotList,
                  r = n.cityList,
                  l = {
                    activityThemeId: "",
                    activityId: c,
                    gsCityId: a,
                    pagingParameter: {
                      pageIndex: 2 === e ? o + 1 : 1,
                      pageSize: 20,
                    },
                  };
                k.Z.showLoading(),
                  (0, w.Mb)(l)
                    .then(function (i) {
                      if (
                        (k.Z.hideLoading(),
                        1 === i.resultCode && i.scenicSpotList)
                      ) {
                        i.activityTitle &&
                          u().setNavigationBarTitle({ title: i.activityTitle });
                        var c =
                          2 === e
                            ? [].concat(s, i.scenicSpotList)
                            : i.scenicSpotList;
                        t.setData({
                          isLoadAll: i.scenicSpotList.length < 20,
                          pageIndex: 2 === e ? o + 1 : 1,
                          scenicSpotList: c,
                          cityList: i.cityList ? i.cityList : r,
                          showResource: t.setShowMore(c),
                        });
                      } else t.catchErr();
                    })
                    .catch(function (i) {
                      k.Z.hideLoading(), 2 !== e && t.catchErr();
                    });
              },
              catchErr: function () {
                var e = this;
                u().showModal({
                  title: "提示",
                  content: "当前直播太火爆了，再刷新一下吧~",
                  cancelText: "返回",
                  confirmText: "再试试",
                  showCancel: !0,
                  success: function (t) {
                    t.confirm ? e.fetchScenicSpotInfo() : u().navigateBack();
                  },
                });
              },
              setShowMore: function (e) {
                return e && e.length
                  ? (0, l.Z)(Array(e.length)).map(function (e) {
                      return !1;
                    })
                  : [];
              },
              resourceShowMore: function (e) {
                var t = e.currentTarget.dataset.spotidx,
                  i = [].concat(this.data.showResource);
                i.splice(t, 1, !this.data.showResource[t]),
                  this.setData({ showResource: i });
              },
              goDetail: function (e) {
                var t = e.currentTarget.dataset.item,
                  i = this.options || {},
                  c = i.source,
                  a = void 0 === c ? "wechat" : c,
                  n = i.activityId;
                g.F0.navigateTo("detail", {
                  activityId: n,
                  scenicSpotId: t.id,
                  source: a,
                  scenicInfo: encodeURIComponent(
                    JSON.stringify({
                      commentGrade: t.commentGrade,
                      iD: t.id,
                      name: t.name,
                      pmRecommand: t.pmRecommand,
                      star: t.star,
                    })
                  ),
                });
              },
              onReachBottom: function () {
                this.data.isLoadAll || this.fetchScenicSpotInfo(2);
              },
            },
            y =
              (0, L.h)()(
                (c =
                  f()(x)(
                    (c = (function (e) {
                      (0, s.Z)(i, e);
                      var t = (0, r.Z)(i);
                      function i() {
                        return (0, n.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, o.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.scenicSpotList,
                                c = t.showResource,
                                a = t.isLoadAll;
                              return (0, v.BX)(m.View, {
                                className: "wrap",
                                children: [
                                  i.map(function (t, i) {
                                    return (0, v.tZ)(
                                      m.Block,
                                      {
                                        children: (0, v.BX)(m.View, {
                                          className: "tick-box",
                                          children: [
                                            t.imageUrlList &&
                                            t.imageUrlList.length
                                              ? (0, v.tZ)(m.Block, {
                                                  children: (0, v.tZ)(
                                                    m.Swiper,
                                                    {
                                                      className: "swiper",
                                                      indicatorDots: "true",
                                                      autoplay: "true",
                                                      interval: "5000",
                                                      duration: "500",
                                                      indicatorColor:
                                                        "rgba(255,255,255,.7)",
                                                      indicatorActiveColor:
                                                        "#ffffff",
                                                      children:
                                                        t.imageUrlList.map(
                                                          function (e, t) {
                                                            return (0, v.tZ)(
                                                              m.Block,
                                                              {
                                                                children: (0,
                                                                v.tZ)(
                                                                  m.SwiperItem,
                                                                  {
                                                                    itemId: t,
                                                                    children:
                                                                      (0, v.tZ)(
                                                                        m.Image,
                                                                        {
                                                                          src: e,
                                                                          className:
                                                                            "slide-image",
                                                                          mode: "aspectFill",
                                                                          lazyLoad:
                                                                            "true",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                              },
                                                              "index"
                                                            );
                                                          }
                                                        ),
                                                    },
                                                    "spotIndex"
                                                  ),
                                                })
                                              : (0, v.tZ)(m.Block, {
                                                  children: (0, v.tZ)(m.Image, {
                                                    src: t.imageURL,
                                                    className: "slide-image",
                                                    mode: "aspectFill",
                                                    lazyLoad: "true",
                                                  }),
                                                }),
                                            (0, v.BX)(m.View, {
                                              className: "tick-hd",
                                              id: "ALAT",
                                              onClick: e.goDetail,
                                              "data-item": t,
                                              children: [
                                                (0, v.BX)(m.View, {
                                                  className: "cont",
                                                  children: [
                                                    (0, v.tZ)(m.View, {
                                                      className: "tit",
                                                      children: (0, v.tZ)(
                                                        m.Text,
                                                        {
                                                          className: "name",
                                                          children:
                                                            t.name +
                                                            (t.star >= 4
                                                              ? "（" +
                                                                t.star +
                                                                "A）"
                                                              : ""),
                                                        }
                                                      ),
                                                    }),
                                                    t.pmRecommand &&
                                                      (0, v.tZ)(m.Block, {
                                                        children: (0, v.tZ)(
                                                          m.View,
                                                          {
                                                            className: "txt",
                                                            children:
                                                              "“" +
                                                              t.pmRecommand +
                                                              "”",
                                                          }
                                                        ),
                                                      }),
                                                    (0, v.BX)(m.View, {
                                                      className: "status",
                                                      children: [
                                                        (0, v.tZ)(m.View, {
                                                          className: "grade",
                                                          children:
                                                            t.commentGrade
                                                              ? (0, v.BX)(
                                                                  m.Block,
                                                                  {
                                                                    children: [
                                                                      (0, v.tZ)(
                                                                        Z.Z,
                                                                        {
                                                                          data: {
                                                                            commentGrade:
                                                                              t.commentGrade,
                                                                          },
                                                                        }
                                                                      ),
                                                                      (0, v.tZ)(
                                                                        m.Text,
                                                                        {
                                                                          className:
                                                                            "t",
                                                                          children:
                                                                            (t.commentGrade ||
                                                                              "暂无评") +
                                                                            "分",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                )
                                                              : (0, v.tZ)(
                                                                  m.Block,
                                                                  {
                                                                    children:
                                                                      (0, v.tZ)(
                                                                        m.Text,
                                                                        {
                                                                          style:
                                                                            "font-size: 22rpx;",
                                                                          children:
                                                                            "暂无点评",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                        }),
                                                        t.saleCountDesc &&
                                                          (0, v.tZ)(m.View, {
                                                            className: "tgrey",
                                                            children:
                                                              t.saleCountDesc,
                                                          }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, v.tZ)(m.Button, {
                                                  className: "btn-go",
                                                  children: "去看看",
                                                }),
                                              ],
                                            }),
                                            (0, v.tZ)(m.View, {
                                              className: "tick-bd",
                                              id: "ALAU",
                                              onClick: e.goDetail,
                                              "data-item": t,
                                              children: t.resourceList.map(
                                                function (e, t) {
                                                  return (0, v.tZ)(
                                                    m.Block,
                                                    {
                                                      children:
                                                        (t < 4 || c[i]) &&
                                                        (0, v.BX)(m.View, {
                                                          className: "item",
                                                          children: [
                                                            (0, v.tZ)(m.View, {
                                                              className: "cont",
                                                              children: e.name,
                                                            }),
                                                            e.marketPrice >
                                                              e.salePrice &&
                                                              (0, v.tZ)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "s",
                                                                  children:
                                                                    "¥" +
                                                                    e.marketPrice,
                                                                }
                                                              ),
                                                            (0, v.tZ)(m.View, {
                                                              className:
                                                                "price",
                                                              children:
                                                                e.salePrice,
                                                            }),
                                                          ],
                                                        }),
                                                    },
                                                    "resourceIdx"
                                                  );
                                                }
                                              ),
                                            }),
                                            t.resourceList.length > 4 &&
                                              (0, v.tZ)(m.Block, {
                                                children: c[i]
                                                  ? (0, v.BX)(m.View, {
                                                      className: "tick-more",
                                                      id: "ALAV",
                                                      onClick:
                                                        e.resourceShowMore,
                                                      "data-spotidx": i,
                                                      children: [
                                                        "收起",
                                                        (0, v.tZ)(m.Text, {
                                                          className:
                                                            "ifont-arr iconfont",
                                                          style:
                                                            "transform:rotate(-90deg)",
                                                        }),
                                                      ],
                                                    })
                                                  : (0, v.BX)(m.View, {
                                                      className: "tick-more",
                                                      id: "ALAW",
                                                      onClick:
                                                        e.resourceShowMore,
                                                      "data-spotidx": i,
                                                      children: [
                                                        "查看更多",
                                                        (0, v.tZ)(m.Text, {
                                                          className:
                                                            "ifont-arr iconfont",
                                                        }),
                                                      ],
                                                    }),
                                              }),
                                          ],
                                        }),
                                      },
                                      "spotIndex"
                                    );
                                  }),
                                  a &&
                                    (0, v.tZ)(m.Text, {
                                      className: "ticket-load-all",
                                      children: "- 没有更多数据了 -",
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(d.default.Component))
                  ) || c)
              ) || c;
          Page(
            (0, a.createPageConfig)(
              y,
              "pages/ticket/packageA/activity/live/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                navigationBarBackgroundColor: "#296EF2",
                backgroundColor: "#296EF2",
                navigationBarTextStyle: "white",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [14856, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(12595);
        }),
          e.O();
      },
    ]);
})();
