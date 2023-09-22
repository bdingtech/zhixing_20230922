!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [83805],
    {
      81954: function (e, t, n) {
        var i,
          a = n(57042),
          o = n(24460),
          r = n(21867),
          c = n(86066),
          l = n(52500),
          s = n(71515),
          u = n(92954),
          g = n.n(u),
          d = n(48792),
          h = n.n(d),
          f = n(79792),
          m = n(9153),
          p = n(49120),
          v = n(13025),
          S = n(48813),
          y = function () {
            return g().getSystemInfoSync().screenWidth;
          },
          b =
            h()({
              properties: {
                backgroundWidth: { type: [Number, String], value: 0 },
                backgroundHeight: { type: [Number, String], value: 0 },
                qrcodeWidth: { type: [Number, String], value: 0 },
                qrcodeHeight: { type: [Number, String], value: 0 },
                qrcodeX: { type: [Number, String], value: 0 },
                qrcodeY: { type: [Number, String], value: 0 },
                backgroundUrl: { type: [String], value: "" },
                iconUrl: { type: [String], value: "" },
                pagePath: { type: [String], value: "" },
                btnStyle: { type: [String], value: "" },
                btnText: { type: [String], value: "" },
                title: { type: [String], value: "" },
                subTitle: { type: [String], value: "" },
                subTitle2: { type: [String], value: "" },
                yaoTitle: { type: [String], value: "" },
                shareTitle: { type: [String], value: "" },
                topTitle: { type: [String], value: "" },
                topSubTitle: { type: [String], value: "" },
                bottomTitle: { type: [String], value: "" },
                bottomSubTitle: { type: [String], value: "" },
                mode: { type: [String], value: "modeA" },
                successNum: { type: [String], value: "" },
                springText: { type: [String], value: "" },
                canvasId: { type: [String], value: "myImage" },
                titleY: { type: [Number, String], value: 45 },
              },
              data: { isTieyou: f.default.isTieyou, showBtn: !1 },
              attached: function () {
                console.log(y());
                var e = this.data,
                  t = e.backgroundWidth,
                  n = e.backgroundHeight,
                  i = e.qrcodeWidth,
                  a = e.qrcodeHeight,
                  o = e.qrcodeX,
                  r = e.qrcodeY,
                  c = t ? parseInt(t) : 0.85 * y(),
                  l = n ? parseInt(n) : 1.28 * c,
                  s = i ? parseInt(i) : 0.3 * c,
                  u = a ? parseInt(a) : s,
                  g = o ? parseInt(o) : (c - s) / 2,
                  d = r ? parseInt(r) : 0.765 * c;
                console.log(c, l, s, u, g, d),
                  this.setData({
                    backgroundWidth: c,
                    backgroundHeight: l,
                    qrcodeWidth: s,
                    qrcodeHeight: u,
                    qrcodeX: g,
                    qrcodeY: d,
                  }),
                  console.log(this.data);
              },
              ready: function () {
                var e = this;
                setTimeout(function () {
                  e.getQRCodeImageUrl()
                    .then(function (t) {
                      return e.drawCanvas(t);
                    })
                    .catch(function () {
                      return e.triggerEvent("fail", {
                        msg: "生成图片失败，请稍候再试",
                      });
                    });
                }, 2e3);
              },
              methods: {
                init: function () {
                  var e = this;
                  this.getQRCodeImageUrl()
                    .then(function (t) {
                      return e.drawCanvas(t);
                    })
                    .catch(function () {
                      return e.triggerEvent("fail", {
                        msg: "生成图片失败，请稍候再试",
                      });
                    });
                },
                getSceneKey: function () {
                  var e = this.data.pagePath;
                  console.log("pagePath", e);
                  var t = { param: e, scene: m.ZP.generateParamsScene };
                  return new Promise(function (e, n) {
                    (0, v.OJ)(t)
                      .then(function (t) {
                        1 === t.resultCode ? e(t.key) : n();
                      })
                      .catch(function () {
                        return n();
                      });
                  });
                },
                getQRCodeImageUrl: function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    e.getSceneKey().then(
                      function (e) {
                        var i = {
                          width: "430",
                          scene: e,
                          page: "pages/market/unlimitQRCode/index",
                        };
                        (0, v.a2)(i)
                          .then(function (e) {
                            1 === e.resultCode && e.url ? t(e.url) : n();
                          })
                          .catch(function () {
                            return n();
                          });
                      },
                      function () {
                        n();
                      }
                    );
                  });
                },
                loadBackgroundImage: function () {
                  var e = this.data.backgroundUrl;
                  return new Promise(function (t, n) {
                    g().getImageInfo({
                      src: e,
                      success: function (e) {
                        t(e);
                      },
                      fail: function () {
                        n();
                      },
                    });
                  });
                },
                loadImageFunc: function (e) {
                  return new Promise(function (t, n) {
                    g().getImageInfo({
                      src: e,
                      success: function (e) {
                        t(e);
                      },
                      fail: function () {
                        n();
                      },
                    });
                  });
                },
                loadQRCodeImage: function (e) {
                  return new Promise(function (t, n) {
                    g().getImageInfo({
                      src: e,
                      success: function (e) {
                        t(e);
                      },
                      fail: function () {
                        n();
                      },
                    });
                  });
                },
                drawCanvas: function (e) {
                  var t = this,
                    n = this.properties,
                    i = n.backgroundWidth,
                    a = n.backgroundHeight,
                    o = n.qrcodeWidth,
                    r = n.qrcodeHeight,
                    c = n.qrcodeX,
                    l = n.qrcodeY,
                    s = n.title,
                    u = n.subTitle,
                    d = n.subTitle2,
                    h = n.yaoTitle,
                    f = n.shareTitle,
                    m = n.topTitle,
                    p = n.topSubTitle,
                    v = n.bottomTitle,
                    S = n.bottomSubTitle,
                    y = n.mode,
                    b = n.iconUrl,
                    I = n.successNum,
                    T = n.springText,
                    F = n.canvasId,
                    w = n.titleY,
                    x = b
                      ? [
                          this.loadBackgroundImage(),
                          this.loadQRCodeImage(e),
                          this.loadImageFunc(b),
                        ]
                      : [this.loadBackgroundImage(), this.loadQRCodeImage(e)];
                  Promise.all(x)
                    .then(function (e) {
                      var n = g().createCanvasContext(F, t);
                      if (
                        (n.drawImage(e[0].path, 0, 0, i, a), "newGuest" === y)
                      )
                        n.drawImage(e[2].path, 130, 0, 46, 18),
                          n.arc(150, 350, 25, 0, 4 * Math.PI),
                          n.clip(),
                          n.drawImage(e[1].path, c, l, o, r);
                      else if ("freeStuVipNew" === y)
                        n.save(),
                          n.arc(150, 340, 25, 0, 4 * Math.PI),
                          n.drawImage(e[1].path, c, l, o, r),
                          n.clip(),
                          n.restore();
                      else if ("freeStuVip" === y)
                        n.save(),
                          n.arc(150, 340, 25, 0, 4 * Math.PI),
                          n.clip(),
                          n.drawImage(e[1].path, c, l, o, r),
                          n.restore();
                      else if ("guoqingCard" === y) {
                        n.drawImage(e[1].path, c, l, o, r),
                          (n.fillStyle = "#999999"),
                          n.setFontSize(15),
                          n.fillText("已有", 25, 445),
                          (n.fillStyle = "#eb1933"),
                          n.setFontSize(15),
                          n.fillText(I, 55, 445);
                        var b = 8.5 * ("" + I).length + 55;
                        (n.fillStyle = "#eb1933"),
                          n.setFontSize(15),
                          n.fillText("人", b, 445),
                          (n.fillStyle = "#999999"),
                          n.setFontSize(15),
                          n.fillText("领取成功", b + 15, 445);
                      } else
                        "modeC" !== y && n.drawImage(e[1].path, c, l, o, r);
                      "modeA" === y
                        ? ((n.fillStyle = "#FFFFFF"),
                          n.setFontSize(20),
                          n.setTextAlign("center"),
                          n.fillText(s, 160, 52),
                          n.setFontSize(16),
                          n.fillText(f, 140, w),
                          n.fillText(u, 160, 80),
                          n.fillText(d, 160, 100),
                          (n.font = "bold 20px sans-serif"),
                          (n.fillStyle = "#F7D1A3"),
                          n.fillText(h, 136, 80),
                          (n.font = "bold 12px sans-serif"),
                          (n.fillStyle = "#FFFFFF"),
                          n.fillText(T, 150, 140))
                        : "modeC" === y
                        ? ((n.fillStyle = "#C9EBFF"),
                          n.setFontSize(13),
                          n.setTextAlign("center"),
                          n.fillText(m, 141, 45),
                          (n.fillStyle = "#FFFFFF"),
                          n.setFontSize(13),
                          n.fillText(p, 141, 122),
                          n.setFontSize(12),
                          (n.fillStyle = "#222"),
                          n.setTextAlign("center"),
                          n.fillText(v, 149, 330),
                          n.setFontSize(12),
                          n.setTextAlign("left"),
                          (n.fillStyle = "#fc6e51"),
                          n.fillText(S, 105, 345),
                          n.arc(c + o / 2, l + r / 2, 33, 0, 4 * Math.PI),
                          n.setLineWidth(0),
                          n.setFillStyle("#FFFFFF"),
                          n.fill(),
                          n.drawImage(e[1].path, c, l, o, r))
                        : "stu" === y &&
                          n.drawImage(e[2].path, 25, 390, 69, 27),
                        n.draw(),
                        t.setData({ showBtn: !0 }),
                        t.triggerEvent("success", { msg: "生成图片成功" });
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
                },
                checkAuthority: function () {
                  return new Promise(function (e, t) {
                    g().getSetting({
                      success: function (n) {
                        n.authSetting["scope.writePhotosAlbum"]
                          ? e()
                          : g().authorize({
                              scope: "scope.writePhotosAlbum",
                              success: function () {
                                e();
                              },
                              fail: function () {
                                t();
                              },
                            });
                      },
                    });
                  });
                },
                generateImageFilePath: function () {
                  var e = this.data,
                    t = e.backgroundWidth,
                    n = e.backgroundHeight,
                    i = e.canvasId;
                  return new Promise(function (e, a) {
                    g().canvasToTempFilePath(
                      {
                        x: 0,
                        y: 0,
                        width: t,
                        height: n,
                        destWidth: 2 * t,
                        destHeight: 2 * n,
                        canvasId: i,
                        success: function (t) {
                          return e(t);
                        },
                        fail: function () {
                          return a();
                        },
                      },
                      (0, u.getCurrentInstance)().page
                    );
                  });
                },
                saveImageToPhotosAlbum: function (e) {
                  return new Promise(function (t, n) {
                    g().saveImageToPhotosAlbum({
                      filePath: e,
                      success: function (e) {
                        return t(e);
                      },
                      fail: function () {
                        return n();
                      },
                    });
                  });
                },
                handleSave: function () {
                  var e = this;
                  this.triggerEvent("clicktrace", {}),
                    this.checkAuthority().then(
                      function () {
                        (0, p.showLoading)("保存中..."),
                          e.generateImageFilePath().then(function (t) {
                            e.saveImageToPhotosAlbum(t.tempFilePath).then(
                              function () {
                                (0, p.hideLoading)(),
                                  e.triggerEvent("savesuccess", {});
                              },
                              function () {
                                return (0, p.hideLoading)();
                              }
                            );
                          });
                      },
                      function () {
                        return g().showModal({
                          title: "授权失败",
                          content:
                            "请在小程序设置界面（「右上角」-「关于」-「右上角」-「设置」）中打开「保存到相册」",
                          confirmText: "去设置",
                          cancelText: "取消",
                          success: function (t) {
                            t.confirm &&
                              g().openSetting({
                                success: function (t) {
                                  t.authSetting["scope.writePhotosAlbum"] &&
                                    e.handleSave();
                                },
                              });
                          },
                        });
                      }
                    );
                },
                noop: function () {},
              },
            })(
              (i = (function (e) {
                (0, r.Z)(n, e);
                var t = (0, c.Z)(n);
                function n() {
                  return (0, a.Z)(this, n), t.apply(this, arguments);
                }
                return (
                  (0, o.Z)(n, [
                    {
                      key: "render",
                      value: function () {
                        var e = this.data,
                          t = e.backgroundWidth,
                          n = e.backgroundHeight,
                          i = e.btnStyle,
                          a = e.showBtn,
                          o = e.btnText,
                          r = e.canvasId;
                        return (0, S.BX)(s.View, {
                          className: "common-train-canvas-image",
                          children: [
                            (0, S.tZ)(s.View, {
                              className: "canvas-box",
                              children: (0, S.tZ)(s.Canvas, {
                                className: "canvas",
                                canvasId: r,
                                id: "AAEq",
                                onClick: this.noop,
                                style: "width: " + t + "px;height: " + n + "px",
                              }),
                            }),
                            a &&
                              (0, S.tZ)(s.Button, {
                                className: "btn",
                                style: i,
                                id: "AAEr",
                                onClick: this.handleSave.bind(this),
                                children: o,
                              }),
                          ],
                        });
                      },
                    },
                  ]),
                  n
                );
              })(l.default.Component))
            ) || i;
        t.Z = b;
      },
    },
  ]);
})();
