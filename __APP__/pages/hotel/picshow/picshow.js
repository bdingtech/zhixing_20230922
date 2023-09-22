!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [16246],
      {
        70719: function (e, t, a) {
          var o,
            i = a(32180),
            n = a(57042),
            r = a(24460),
            s = a(21867),
            c = a(86066),
            l = a(22276),
            d = a(52500),
            u = a(71515),
            m = a(92954),
            h = a.n(m),
            f = a(48792),
            g = a.n(f),
            p = a(79792),
            v = a(49120),
            x = a(81957),
            I = a(90668),
            y = a(48813),
            T = {
              pageId: "10650060677",
              data: {
                isTieyou: p.default.isTieyou,
                categories: [],
                displayItems: [],
                data: {},
                rooms: [],
                roomIndex: 1e3,
                selectedIndex: 0,
              },
              onLoad: function (e) {
                var t,
                  a =
                    (null === (t = e.data) || void 0 === t
                      ? void 0
                      : t.hotelPicInfo) || {};
                return this.setPicData(a), this;
              },
              setPicData: function (e) {
                if (e) {
                  var t = e;
                  "string" == typeof e && (t = JSON.parse(e)),
                    (this.moreIndex0 = 1);
                  var a = this;
                  t.hotelImageList = t.hotelImageList.map(function (e, t) {
                    return (e.key = t), e;
                  });
                  var o = t,
                    i = [{ amount: 0, name: "全部" }].concat(
                      (0, l.Z)(o.imageCategory)
                    );
                  i.forEach(function (e, t) {
                    (e.index = t),
                      (e.key = "c" + t),
                      (e.amount = 0),
                      9 == e.id && a.setData({ roomIndex: t });
                  });
                  var n = o.hotelImageList,
                    r = [];
                  n.forEach(function (e) {
                    9 == e.categoryID && r.push(e), i[0].amount++;
                    for (var t = 0; t < i.length; t++) {
                      var a = i[t];
                      if (e.categoryID == a.id) {
                        a.amount++;
                        break;
                      }
                    }
                  }),
                    (this.storeRooms = r);
                  var s = this.handleRooms(),
                    c = i.filter(function (e) {
                      return e.amount > 0;
                    });
                  (this.selectedCate = c[0]),
                    this.setData({
                      categories: c,
                      displayItems: e.hotelImageList,
                      data: e,
                      rooms: s,
                    });
                }
              },
              selectCategory: function (e) {
                var t = e.currentTarget.dataset.item || [];
                (this.moreIndex0 = 1), (this.selectedCate = t);
                var a,
                  o = this.data.data;
                (a =
                  "全部" == t.name
                    ? o.hotelImageList
                    : o.hotelImageList.filter(function (e) {
                        return t.id == e.categoryID;
                      })),
                  this.ubtTrace(208565, {
                    bizKey: "hotel_album_tag_click",
                    picturetag: t.name,
                    pageId: "待申请",
                  }),
                  this.setData({ displayItems: a, selectedIndex: t.index });
              },
              openImageBox: function (e) {
                var t = e.currentTarget.dataset.piclist || [],
                  a = e.currentTarget.dataset.index || 0,
                  o = [];
                t.forEach(function (e) {
                  var t = {};
                  (t.imageUrl = e.imageUrl),
                    (t.title = e.imageTitle),
                    o.push(t);
                });
                var i = this.data,
                  n = i.categories,
                  r = i.selectedIndex;
                this.ubtTrace(208565, {
                  bizKey: "hotel_album_picture_click",
                  picturetag: n[r],
                  pageId: "待申请",
                }),
                  this.navigateTo({
                    url: "/pages/hotel/imagebox/imagebox",
                    data: { images: o, index: a },
                  });
              },
              handleRooms: function () {
                var e = this.storeRooms,
                  t = [],
                  a = [];
                return (
                  e.forEach(function (e) {
                    var o = a.indexOf(e.imageTitle);
                    if (-1 == o) {
                      a.push(e.imageTitle);
                      var i = {
                        title: e.imageTitle,
                        all: [],
                        data: [],
                        amount: 1,
                        extend: !1,
                        footer: "",
                        more: !1,
                      };
                      i.all.push(e), t.push(i);
                    } else {
                      var n = t[o];
                      n.all.push(e), n.amount++;
                    }
                  }),
                  t.forEach(function (e) {
                    var t = [];
                    e.all.forEach(function (e, a) {
                      var o = parseInt(a / 2);
                      (t[o] = t[o] || []), t[o].push(e);
                    }),
                      (e.all = t),
                      (e.data = e.all.slice(0, 2)),
                      (e.title = "".concat(e.title, "(").concat(e.amount, ")")),
                      (e.more = e.amount > 4),
                      (e.footer = "展开更多(".concat(e.amount - 4, "张)"));
                  }),
                  t
                );
              },
              onLoadedMetaData: function () {
                h().getNetworkType({
                  success: function (e) {
                    "wifi" === (null == e ? void 0 : e.networkType) &&
                      h().createVideoContext("video").play();
                  },
                });
              },
              openVideoBox: function (e) {
                p.default.isTT
                  ? (0, v.showToast)("暂不支持")
                  : this.navigateTo({
                      url: "/pages/hotel/imagebox/imagebox",
                      data: { images: [e], type: "video", title: "视频预览" },
                    });
              },
            },
            b =
              (0, x.h)()(
                (o =
                  g()(T)(
                    (o = (function (e) {
                      (0, s.Z)(a, e);
                      var t = (0, c.Z)(a);
                      function a() {
                        return (0, n.Z)(this, a), t.apply(this, arguments);
                      }
                      return (
                        (0, r.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                a = t.isTieyou,
                                o = t.selectedIndex,
                                i = t.categories,
                                n = t.displayItems;
                              return (0, y.BX)(u.Block, {
                                children: [
                                  (0, y.tZ)(u.View, {
                                    className:
                                      "hotel-picshow-tab " + (a ? "ty" : "zx"),
                                    children: i.map(function (t, a) {
                                      return (0,
                                      y.BX)(u.View, { className: o == t.index ? "item cur" : "item", id: "AXHP", onClick: e.selectCategory, "data-item": t, children: [t.name, "(", t.amount, ")"] }, a);
                                    }),
                                  }),
                                  (0, y.tZ)(u.View, {
                                    className: "hotel-box",
                                    children: (0, y.tZ)(u.View, {
                                      className: "hotel-picshow-bd",
                                      children: n.map(function (t, a) {
                                        var o,
                                          i = (a + 1) % 2 == 0,
                                          r = "item".concat(
                                            (0, I.gP)(i, " mr0")
                                          );
                                        return null !==
                                          (o = t.hotelVideoInfo) &&
                                          void 0 !== o &&
                                          o.url
                                          ? (0, y.tZ)(u.Video, {
                                              id: "video",
                                              objectFit: "cover",
                                              playBtnPosition: "center",
                                              className: r,
                                              onLoadedMetaData:
                                                e.onLoadedMetaData,
                                              src: t.hotelVideoInfo.url,
                                              onClick: function () {
                                                return e.openVideoBox(t);
                                              },
                                              controls: 0,
                                              showCenterPlayBtn: 0,
                                              children: (0, y.tZ)(u.View, {
                                                className: "txt",
                                                children: "视频",
                                              }),
                                            })
                                          : (0, y.BX)(
                                              u.View,
                                              {
                                                className: r,
                                                id: "AXHQ",
                                                onClick: e.openImageBox,
                                                "data-piclist": n,
                                                "data-index": a,
                                                children: [
                                                  (0, y.tZ)(u.Image, {
                                                    src: t.imageUrl,
                                                  }),
                                                  (0, y.tZ)(u.View, {
                                                    className: "txt",
                                                    children: t.imageTitle,
                                                  }),
                                                ],
                                              },
                                              "displayItems"
                                            );
                                      }),
                                    }),
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        a
                      );
                    })(d.default.Component))
                  ) || o)
              ) || o;
          Page(
            (0, i.createPageConfig)(
              b,
              "pages/hotel/picshow/picshow",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "酒店相册",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#fff",
                backgroundColorBottom: "#f5f5f5",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(70719);
        }),
          e.O();
      },
    ]);
})();
