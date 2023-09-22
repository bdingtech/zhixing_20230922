!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [78204],
      {
        72351: function (e, t, n) {
          var i,
            a = n(32180),
            r = n(57042),
            o = n(24460),
            l = n(21867),
            c = n(86066),
            u = n(52500),
            s = n(71515),
            d = n(92954),
            g = n.n(d),
            h = n(48792),
            p = n.n(h),
            m = n(81957),
            f = n(48813);
          function v(e) {
            return e && "string" == typeof e && e.length > 0 ? e : "";
          }
          var x = {
              pageId: "10650060655",
              data: {
                images: null,
                count: 0,
                bu: null,
                title: "图片浏览",
                currentIndex: 0,
                indexTitle: "",
              },
              onLoad: function (e) {
                var t,
                  n =
                    "string" == typeof (null == e ? void 0 : e.data)
                      ? JSON.parse(decodeURIComponent(e.data))
                      : null == e
                      ? void 0
                      : e.data;
                if (
                  null != n &&
                  null !== (t = n.images) &&
                  void 0 !== t &&
                  t.length
                ) {
                  var i = n.images || [],
                    a = n.index || 0,
                    r = n.bu || "",
                    o = n.title || "图片浏览";
                  this.setData({
                    images: i,
                    count: i.length,
                    bu: r,
                    title: o,
                    currentIndex: a,
                    indexTitle: v(i[0].title),
                    type: n.type,
                  });
                }
              },
              onShow: function () {
                g().setNavigationBarTitle({ title: this.data.title });
              },
              imageError: function (e) {
                console.log("imageError = ", e.detail);
                var t = e.detail.errMsg || "未知错误";
                this.ubtTrace({ bu: this.data.bu, error: t });
              },
              swiperChange: function (e) {
                console.log(e.detail);
                var t = e.detail.current,
                  n = this.data.images;
                this.setData({ currentIndex: t, indexTitle: v(n[t].title) });
              },
              onLoadedMetaData: function () {
                g().getNetworkType({
                  success: function (e) {
                    "wifi" === (null == e ? void 0 : e.networkType) &&
                      g().createVideoContext("video").play();
                  },
                });
              },
              onFullscreenChange: function (e) {
                var t = e.detail,
                  n = t.direction;
                t.fullscreen &&
                  "vertical" === n &&
                  (g().createVideoContext("video").exitFullScreen(),
                  g()
                    .createVideoContext("video")
                    .requestFullScreen({ direction: 90 }));
              },
            },
            w =
              (0, m.h)()(
                (i =
                  p()(x)(
                    (i = (function (e) {
                      (0, l.Z)(n, e);
                      var t = (0, c.Z)(n);
                      function n() {
                        return (0, r.Z)(this, n), t.apply(this, arguments);
                      }
                      return (
                        (0, o.Z)(n, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                n = t.currentIndex,
                                i = t.images,
                                a = t.indexTitle,
                                r = t.count,
                                o = "video" === t.type;
                              return (0, f.BX)(s.View, {
                                children: [
                                  (0, f.tZ)(s.Swiper, {
                                    duration: "200",
                                    indicatorDots: !1,
                                    autoplay: !1,
                                    className: "picture-scroll",
                                    onChange: this.swiperChange,
                                    current: n,
                                    children:
                                      null == i
                                        ? void 0
                                        : i.map(function (t, n) {
                                            return (0,
                                            f.BX)(s.SwiperItem, { children: [o && (0, f.tZ)(s.Video, { id: "video", objectFit: "cover", playBtnPosition: "center", className: "picture-item_show", onLoadedMetaData: e.onLoadedMetaData, onFullscreenChange: e.onFullscreenChange, src: t.hotelVideoInfo.url, controls: !0, showCenterPlayBtn: !0, enableAutoRotation: !0 }), !o && (0, f.tZ)(s.Image, { className: "picture-item_show", mode: "widthFix", src: t.imageUrl, onError: e.imageError })] }, n);
                                          }),
                                  }),
                                  !o &&
                                    (0, f.BX)(s.View, {
                                      className: "picture-item_detail",
                                      children: [
                                        (0, f.tZ)(s.Text, {
                                          className: "picture-item_title",
                                          children: a,
                                        }),
                                        (0, f.tZ)(s.Text, {
                                          className: "picture-item_number",
                                          children: n + 1 + "/" + r,
                                        }),
                                      ],
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        n
                      );
                    })(u.default.Component))
                  ) || i)
              ) || i;
          Page(
            (0, a.createPageConfig)(
              w,
              "pages/hotel/imagebox/imagebox",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "图片浏览",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#1B1B1B",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(72351);
        }),
          e.O();
      },
    ]);
})();
