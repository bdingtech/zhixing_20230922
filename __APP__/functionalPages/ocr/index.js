!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [7095],
      {
        57038: function (e, a, t) {
          var i,
            o = t(32180),
            n = t(57042),
            s = t(24460),
            c = t(21867),
            r = t(86066),
            l = t(298),
            h = t(52500),
            d = t(71515),
            u = t(92954),
            m = t.n(u),
            g = t(48792),
            f = t.n(g),
            T = t(81957),
            p = t(79792),
            b = t(49120),
            v = t(13025),
            w = t(86977),
            y = t(43796),
            C = t(48813),
            k = {
              pageId: "10650066655",
              data: {
                ocrSuccessTraceKey: "159334",
                ocrFailedTraceKey: "159335",
                ocrDevTraceKey: "159066",
                title: "证件识别",
                bizType: "",
                cameraWidth: 300,
                cameraHeight: 180,
                showFailModel: !1,
                source: "",
                isShowCamera: !0,
              },
              onLoad: function (e) {
                var a = this,
                  t = e.data || {};
                if ("string" == typeof t)
                  try {
                    t = JSON.parse(t);
                  } catch (e) {
                    console.log(e);
                  }
                var i = t,
                  o = i.bizType,
                  n = i.title,
                  s = i.source;
                this.setData({ bizType: o || "TRA", source: s }),
                  m().setNavigationBarTitle({ title: n || this.data.title }),
                  (0, b.setNavigationBarColor)({
                    frontColor: "#000000",
                    backgroundColor: "#FFFFFF",
                  }),
                  m().getSystemInfo({
                    success: function (e) {
                      var t = e.windowWidth - 40;
                      a.setData({ cameraWidth: t, cameraHeight: t / 1.59 });
                    },
                    fail: function () {},
                  }),
                  (this.cameraContext = m().createCameraContext()),
                  (this.durationTime = (0, w.Zm)());
              },
              beginTakePhoto: function () {
                var e = this;
                this.timer && clearTimeout(this.timer),
                  (this.timer = setTimeout(function () {
                    e.takePhotoTap();
                  }, this.durationTime)),
                  this.isChooseImageTap && (this.isChooseImageTap = !1);
              },
              tmpFilePathToBase64: function (e) {
                var a = this,
                  t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                m()
                  .getFileSystemManager()
                  .readFile({
                    filePath: e,
                    encoding: "base64",
                    success: function (e) {
                      var i = "data:image/png;base64," + e.data;
                      a.getOCRResult(i, t);
                    },
                    fail: function (e) {
                      a.beginTakePhoto(),
                        a.sendFailedDevTraceLog({
                          info: "tempFilePathToBase64 failed",
                          result: JSON.stringify(e),
                        });
                    },
                  });
              },
              chooseImageTap: function () {
                var e = this;
                "busEditPassenger" === this.data.source &&
                  this.doBusTraceInfo({
                    typeSnd: "idscan_album_button_click",
                    comment: "新身份证扫描页-相册按钮点击",
                  }),
                  this.data.showFailModel && this.hideFailModelTap(),
                  m().chooseImage({
                    count: 1,
                    sourceType: ["album"],
                    success: function (a) {
                      var t = a.tempFilePaths;
                      t && t.length > 0
                        ? ((e.isChooseImageTap = !0),
                          e.tmpFilePathToBase64(a.tempFilePaths[0], !0))
                        : (e.beginTakePhoto(),
                          e.ubtDevTrace(e.data.ocrDevTraceKey, {
                            info: "chooseImageTap failed",
                            bizType: e.data.bizType,
                            result: JSON.stringify(a),
                          }));
                    },
                    fail: function (a) {
                      e.beginTakePhoto(),
                        e.sendTraceLog(e.data.ocrDevTraceKey, {
                          info: "chooseImageTap failed",
                          bizType: e.data.bizType,
                          result: JSON.stringify(a),
                        });
                    },
                  });
              },
              takePhotoTap: function () {
                var e = this;
                this.cameraContext.takePhoto({
                  quality: "high",
                  success: function (a) {
                    a.tempImagePath && a.tempImagePath.length > 0
                      ? e.tmpFilePathToBase64(a.tempImagePath)
                      : (e.beginTakePhoto(),
                        e.sendTraceLog(e.data.ocrDevTraceKey, {
                          info: "takePhotoTap failed",
                          bizType: e.data.bizType,
                          result: JSON.stringify(a),
                        }));
                  },
                  fail: function (a) {
                    e.beginTakePhoto(),
                      e.sendTraceLog(e.data.ocrDevTraceKey, {
                        info: "takePhotoTap failed",
                        bizType: e.data.bizType,
                        result: JSON.stringify(a),
                      });
                  },
                });
              },
              getOCRResult: function (e, a) {
                var t = this,
                  i = this;
                function o(e) {
                  a ? i.showFailModelTap() : i.beginTakePhoto(),
                    i.sendTraceLog(i.data.ocrFailedTraceKey, {
                      info: "post /soa2/16169/doOCRFromImg failed",
                      bizType: i.data.bizType,
                      result: JSON.stringify(e),
                    });
                }
                var n = { image: e };
                (0, v.pS)(n).then(
                  function (e) {
                    var a = e || {};
                    if (0 === a.result.resultCode) {
                      if ((console.log(a), !a.idCardNo || !a.name))
                        return void o(a);
                      t.invokeCallback(a),
                        t.navigateBack(),
                        t.sendTraceLog(t.data.ocrSuccessTraceKey, {
                          info: "post /soa2/16169/doOCRFromImg success",
                          bizType: t.data.bizType,
                          result: JSON.stringify(a),
                        });
                    } else o(a);
                  },
                  function (e) {
                    console.log(e);
                  }
                );
              },
              showFailModelTap: function () {
                this.setData({ showFailModel: !0 });
              },
              hideFailModelTap: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                this.setData({ showFailModel: !1 }), e && this.beginTakePhoto();
              },
              sendTraceLog: function (e, a) {
                this.ubtTrace(e, a);
              },
              handleCardInfo: function () {
                this.doBusTraceInfo({
                  typeSnd: "idscan_album_button_click",
                  comment: "新身份证扫描页-手动输入按钮点击",
                }),
                  this.navigateBack();
              },
              doBusTraceInfo: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  a =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1,
                  t = (0, y.bL)();
                this.ubtTrace(
                  1 === a ? "BUS_Bus_C_click" : "BUS_Bus_O_show",
                  (0, l.Z)(
                    {
                      pageId: this.pageId,
                      type: p.default.jetpack || "zx",
                      utmSource: t,
                    },
                    e
                  )
                );
              },
              checkCameraAuth: function () {
                var e = this;
                console.log("check camera auth"),
                  this.setData({ isShowCamera: !1 }),
                  m().showModal({
                    title: "授权失败",
                    content:
                      "请在小程序设置界面（「右上角」-「设置」）中打开「摄像头」",
                    confirmText: "去设置",
                    cancelText: "取消",
                    success: function (a) {
                      a.confirm &&
                        m().openSetting({
                          success: function (a) {
                            a.authSetting["scope.camera"] &&
                              (e.setData({ isShowCamera: !0 }),
                              e.beginTakePhoto());
                          },
                        });
                    },
                  });
              },
            },
            N =
              (0, T.h)()(
                (i =
                  f()(k)(
                    (i = (function (e) {
                      (0, c.Z)(t, e);
                      var a = (0, r.Z)(t);
                      function t() {
                        return (0, n.Z)(this, t), a.apply(this, arguments);
                      }
                      return (
                        (0, s.Z)(t, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                a = this.data,
                                t = a.cameraHeight,
                                i = a.cameraWidth,
                                o = a.showFailModel,
                                n = a.source,
                                s = a.isShowCamera;
                              return (0, C.BX)(d.View, {
                                className: "functional-pages-ocr-v2",
                                children: [
                                  (0, C.BX)(d.View, {
                                    className: "content-box",
                                    children: [
                                      (0, C.tZ)(d.View, {
                                        className: "title",
                                        children: "扫描身份证",
                                      }),
                                      (0, C.BX)(d.View, {
                                        className: "camera-box",
                                        style: "width: "
                                          .concat(i, "px;height: ")
                                          .concat(t, "px"),
                                        children: [
                                          (0, C.tZ)(d.View, {
                                            className: "box-border lt",
                                          }),
                                          (0, C.tZ)(d.View, {
                                            className: "box-border rt",
                                          }),
                                          (0, C.tZ)(d.View, {
                                            className: "box-border rb",
                                          }),
                                          (0, C.tZ)(d.View, {
                                            className: "box-border lb",
                                          }),
                                          s &&
                                            (0, C.tZ)(d.Camera, {
                                              devicePosition: "back",
                                              onError: function () {
                                                return e.checkCameraAuth();
                                              },
                                              onInitDone: function () {
                                                e.isChooseImageTap ||
                                                  e.beginTakePhoto();
                                              },
                                              style: "width: "
                                                .concat(i - 2, "px;height: ")
                                                .concat(t - 2, "px;"),
                                              children: (0, C.tZ)(d.View, {
                                                className: "scan-cont",
                                                children: (0, C.tZ)(d.View, {
                                                  className: "scan",
                                                  style: "width: ".concat(
                                                    i,
                                                    "px;height: 26px;"
                                                  ),
                                                }),
                                              }),
                                            }),
                                        ],
                                      }),
                                      (0, C.tZ)(d.View, {
                                        className: "content-tip",
                                        children:
                                          "将身份证放在此框内, 尝试对齐边缘进行扫描",
                                      }),
                                      s &&
                                        (0, C.BX)(d.View, {
                                          className: "phone-album",
                                          onClick: this.chooseImageTap,
                                          children: [
                                            (0, C.tZ)(d.View, {
                                              className: "iconfont icon-image",
                                            }),
                                            (0, C.tZ)(d.View, {
                                              className: "album-btn-text",
                                              children: "相册",
                                            }),
                                          ],
                                        }),
                                      "busEditPassenger" === n &&
                                        (0, C.tZ)(d.View, {
                                          className: "bottom-cont",
                                          children: (0, C.tZ)(d.View, {
                                            className: "handle-btn",
                                            onClick: function () {
                                              return e.handleCardInfo();
                                            },
                                            children: "手动输入身份信息",
                                          }),
                                        }),
                                    ],
                                  }),
                                  o &&
                                    (0, C.tZ)(d.CoverView, {
                                      className: "content-common",
                                      children: (0, C.BX)(d.CoverView, {
                                        className: "fail-model",
                                        children: [
                                          (0, C.BX)(d.CoverView, {
                                            className: "model-content",
                                            children: [
                                              (0, C.tZ)(d.CoverView, {
                                                className: "model-title",
                                                children: "识别失败",
                                              }),
                                              (0, C.tZ)(d.CoverView, {
                                                className: "model-text",
                                                children:
                                                  "请检查证件是否清晰或正确",
                                              }),
                                            ],
                                          }),
                                          (0, C.BX)(d.CoverView, {
                                            className: "image-model-button",
                                            children: [
                                              (0, C.tZ)(d.CoverView, {
                                                className:
                                                  "image-button image-left",
                                                children: (0, C.tZ)(d.Button, {
                                                  className:
                                                    "image-cancel-button",
                                                  hoverClass:
                                                    "model-cancel-hover",
                                                  onClick: function () {
                                                    return e.hideFailModelTap(
                                                      !0
                                                    );
                                                  },
                                                  children: "取消",
                                                }),
                                              }),
                                              (0, C.tZ)(d.CoverView, {
                                                className:
                                                  "image-button image-right",
                                                children: (0, C.tZ)(d.Button, {
                                                  className: "image-ok-button",
                                                  hoverClass: "model-ok-hover",
                                                  onClick: this.chooseImageTap,
                                                  children: "重选照片",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        t
                      );
                    })(h.default.Component))
                  ) || i)
              ) || i;
          Page(
            (0, o.createPageConfig)(
              N,
              "functionalPages/ocr/index",
              { root: { cn: [] } },
              { disableScroll: !0 } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (a) {
            return e((e.s = a));
          })(57038);
        }),
          e.O();
      },
    ]);
})();
