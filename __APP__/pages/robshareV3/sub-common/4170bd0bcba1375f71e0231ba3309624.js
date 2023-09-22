!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [58792],
    {
      65363: function (e, t, n) {
        var a = n(298),
          i = n(74921),
          o = n(90129),
          c = n(92954),
          r = n.n(c),
          s = n(52500),
          u = n(27463),
          l = n(13025),
          h = n(34229),
          f = n(71515),
          d = n(79792),
          m = n(49120),
          p = n(79910),
          g = n(48813),
          _ = ["imageStyle", "children"];
        t.Z = function (e) {
          var t = e.isRequestImage,
            n = e.shareUrl,
            c = void 0 === n ? "/pages/home/index" : n,
            w = e.templateKey,
            Z = e.width,
            I = e.height,
            P = e.extraParams,
            v = e.onClose,
            y = void 0 === v ? function () {} : v,
            S = (0, s.useState)(""),
            x = (0, o.Z)(S, 2),
            C = x[0],
            T = x[1],
            B = s.default.useRef(["", "", null]);
          (0, u.Z)(
            function () {
              if (t) {
                if (C && p._.isEqual(B.current, [w, c, P])) return;
                if (w && c) {
                  var e = {
                    type: "template",
                    templateKey: w,
                    imageType: "url",
                    extraParams: P,
                    miniPicInfo: {
                      path: c,
                      appId: d.default.appId,
                      width: 100,
                    },
                    deviceScaleFactor: 2,
                  };
                  (B.current = [w, c, P]),
                    (0, l.iR)(e)
                      .then(function (e) {
                        1 == e.resultCode
                          ? T(e.img)
                          : console.error("node2Image接口返回错误");
                      })
                      .catch(function () {
                        return console.error("node2Image接口请求错误");
                      });
                }
              }
            },
            [t, c, w, P, C]
          );
          var F = function () {
              return new Promise(function (e, t) {
                r().downloadFile({
                  url: C,
                  success: function (t) {
                    e(t);
                  },
                  fail: t,
                });
              });
            },
            b = function () {
              (0, m.showLoading)(),
                F()
                  .then(function (e) {
                    if (200 === e.statusCode) {
                      var t = e.tempFilePath;
                      r().saveImageToPhotosAlbum({
                        filePath: t,
                        success: function () {
                          (0, m.showToast)("已保存到相册"), y();
                        },
                        fail: function () {
                          (0, m.showToast)("保存失败，请重试");
                        },
                      });
                    }
                  })
                  .catch(function () {
                    return (0, m.showToast)("保存失败，请重试");
                  })
                  .finally(m.hideLoading);
            },
            z = function () {
              (0, m.showLoading)(),
                F()
                  .then(function (e) {
                    200 === e.statusCode &&
                      r()
                        .showShareImageMenu({ path: e.tempFilePath })
                        .finally(function () {
                          y();
                        });
                  })
                  .catch(function () {
                    return (0, m.showToast)("分享失败，请重试");
                  })
                  .finally(m.hideLoading);
            };
          return {
            shareImage: C,
            handleSaveImage: b,
            handelShareImage: z,
            SharePicturePop: function (e) {
              var t = e.imageStyle,
                n = e.children,
                o = (0, i.Z)(e, _),
                c = { width: "".concat(Z, "rpx") };
              return (
                e.height && (c.height = I),
                (0, g.BX)(
                  h.ZtActivityPop,
                  (0, a.Z)(
                    (0, a.Z)(
                      {
                        isShowClose: !1,
                        onWrapClose: function () {
                          return y();
                        },
                        popStyle: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        },
                      },
                      o
                    ),
                    {},
                    {
                      children: [
                        (0, g.tZ)(f.Image, {
                          style: (0, a.Z)((0, a.Z)({}, c), t),
                          mode: "widthFix",
                          src: C,
                        }),
                        n,
                      ],
                    }
                  )
                )
              );
            },
            SavePictureButton: function (e) {
              return (0, g.BX)(
                f.Button,
                (0, a.Z)(
                  (0, a.Z)(
                    {
                      className: " _i _l _n _Oa _b _Pa _Qa _Ra _w",
                      onClick: b,
                    },
                    e
                  ),
                  {},
                  {
                    children: [
                      (0, g.tZ)(f.Image, {
                        className: " _Ta _Ua _Va",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/huodong/xiazai_icon.png",
                      }),
                      "保存图片",
                    ],
                  }
                )
              );
            },
            ShareFriendButton: function (e) {
              return (0, g.BX)(
                f.Button,
                (0, a.Z)(
                  (0, a.Z)(
                    {
                      className: " _i _l _n _Oa _b _Pa _Qa _Ra _Sa",
                      onClick: z,
                    },
                    e
                  ),
                  {},
                  {
                    children: [
                      (0, g.tZ)(f.Image, {
                        className: " _Ta _Ua _Va",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/huodong/wechat_icon.png",
                      }),
                      "分享好友",
                    ],
                  }
                )
              );
            },
          };
        };
      },
    },
  ]);
})();
