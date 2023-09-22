!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [86742],
      {
        2484: function (e, t, o) {
          var n,
            a = o(32180),
            i = o(57042),
            s = o(24460),
            r = o(81876),
            c = o(21867),
            l = o(86066),
            h = o(45023),
            d = o(52500),
            u = o(71515),
            g = o(34229),
            f = o(92954),
            m = o.n(f),
            b = (o(48792), o(79792)),
            v = o(18783),
            p = o(49120),
            w = o(13025),
            B = o(79910),
            y = o(86977),
            I = o(81957),
            C = o(48813),
            k = "分享好友",
            T = "保存图片",
            x = [
              {
                code: "kanjia",
                tieyou: [
                  "VEsYH-Oc-z4Q1vp7UoFIylkukry0UYTHxuJNrU_9CZs",
                  "G7F5FqHIwreDStUmL6ipgz8Q5CUGGFcnQDlFgLzV6O0",
                  "X1-vIt06A_tyhEfwKqbk0dbJPMAIO-G577rta3YN7H4",
                ],
                zhixing: [
                  "jatIqVBxwtURdWbTb5RuyGw7AGafPo4geNRp7cvp0mE",
                  "IrwH7T6PBS8cncQ-_j8KbPFlqc7jSrMoca8k4Wr2MAg",
                  "NdvyuBq2SJA1v9c5QcPwcsqbLUrdENKwG409niPJCK8",
                ],
              },
              {
                code: "stucard",
                tieyou: [
                  "VEsYH-Oc-z4Q1vp7UoFIylkukry0UYTHxuJNrU_9CZs",
                  "G7F5FqHIwreDStUmL6ipgz8Q5CUGGFcnQDlFgLzV6O0",
                  "X1-vIt06A_tyhEfwKqbk0dbJPMAIO-G577rta3YN7H4",
                ],
                zhixing: [
                  "jatIqVBxwtURdWbTb5RuyGw7AGafPo4geNRp7cvp0mE",
                  "IrwH7T6PBS8cncQ-_j8KbPFlqc7jSrMoca8k4Wr2MAg",
                  "NdvyuBq2SJA1v9c5QcPwcsqbLUrdENKwG409niPJCK8",
                ],
              },
            ],
            P = { kanjia: "202009-kanjia", stucard: "202010-stucard" },
            N =
              (0, I.h)()(
                (n = (function (e) {
                  (0, c.Z)(o, e);
                  var t = (0, l.Z)(o);
                  function o() {
                    var e;
                    (0, i.Z)(this, o);
                    for (
                      var n = arguments.length, a = new Array(n), s = 0;
                      s < n;
                      s++
                    )
                      a[s] = arguments[s];
                    return (
                      (e = t.call.apply(t, [this].concat(a))),
                      (0, h.Z)((0, r.Z)(e), "state", {
                        img: "",
                        imgBase64: "",
                        shareImg: "",
                        bgColor: "",
                        leftBtnTxt: k,
                        rightBtnTxt: T,
                        showRightBtn: !0,
                        openId: v.ZP.openId,
                        subscribeCode: "",
                        styleType: "0",
                        floatTip: "",
                      }),
                      (0, h.Z)(
                        (0, r.Z)(e),
                        "pageId",
                        b.default.isTieyou ? "10650010324" : "10650010322"
                      ),
                      e
                    );
                  }
                  return (
                    (0, s.Z)(o, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = Object(
                              (0, f.getCurrentInstance)().router.params
                            ),
                            t = e.img,
                            o = void 0 === t ? "" : t,
                            n = e.imgBase64,
                            a = void 0 === n ? "" : n,
                            i = e.shareImg,
                            s = void 0 === i ? "" : i,
                            r = e.navTitle,
                            c = void 0 === r ? "" : r,
                            l = e.navBgColor,
                            h = void 0 === l ? "" : l,
                            d = e.bgColor,
                            u = void 0 === d ? "" : d,
                            g = e.leftBtnTxt,
                            b = void 0 === g ? k : g,
                            v = e.leftBtnColor,
                            w = void 0 === v ? "fff" : v,
                            B = e.leftBtnBgColor,
                            y = void 0 === B ? "cd3c44" : B,
                            I = e.rightBtnTxt,
                            C = void 0 === I ? T : I,
                            x = e.rightBtnColor,
                            P = void 0 === x ? "1d2a43" : x,
                            N = e.rightBtnBgColor,
                            Z = void 0 === N ? "f5c750" : N,
                            F = e.showRightBtn,
                            S = void 0 === F || F,
                            U = e.sharePath,
                            A = void 0 === U ? "" : U,
                            _ = e.shareTitle,
                            R = void 0 === _ ? "" : _,
                            M = e.subscribeCode,
                            E = void 0 === M ? "" : M,
                            V = e.styleType,
                            j = void 0 === V ? "0" : V,
                            O = e.floatTip,
                            G = void 0 === O ? "" : O;
                          (c = decodeURIComponent(c)),
                            (b = decodeURIComponent(b)),
                            (C = decodeURIComponent(C)),
                            (o = decodeURIComponent(o)),
                            (s = decodeURIComponent(s)),
                            (A = decodeURIComponent(A)),
                            (R = decodeURIComponent(R)),
                            (G = decodeURIComponent(G)),
                            (S = "false" !== S && 0 !== S && S),
                            this.setState({
                              img: o,
                              bgColor: u,
                              leftBtnTxt: b,
                              leftBtnColor: w,
                              leftBtnBgColor: y,
                              rightBtnTxt: C,
                              rightBtnColor: P,
                              rightBtnBgColor: Z,
                              showRightBtn: S,
                              shareImg: s,
                              subscribeCode: E,
                              styleType: j,
                              floatTip: G,
                              imgBase64: a,
                            }),
                            m().showShareMenu &&
                              m().showShareMenu({ withShareTicket: !0 }),
                            c && m().setNavigationBarTitle({ title: c }),
                            h &&
                              (0, p.setNavigationBarColor)({
                                frontColor: "#ffffff",
                                backgroundColor: "#".concat(h),
                              }),
                            Object.assign(this, {
                              sharePath: A,
                              shareImg: s,
                              shareTitle: R,
                            });
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e = this;
                          this.getOpenId().then(function () {
                            e.getZtripWechatSubscribleMessage();
                          });
                        },
                      },
                      {
                        key: "getOpenId",
                        value: function () {
                          var e = this;
                          return (0, v.M9)()
                            .then(function (t) {
                              var o = t.openid;
                              e.setState({ openId: o });
                            })
                            .catch(function (t) {
                              console.log(t);
                              var o = v.ZP.openId || "";
                              e.setState({ openId: o });
                            });
                        },
                      },
                      {
                        key: "getZtripWechatSubscribleMessage",
                        value: function () {
                          var e = this,
                            t =
                              x.find(function (t) {
                                return t.code === e.state.subscribeCode;
                              }) || null;
                          if (t) {
                            var o = b.default.isTieyou ? t.tieyou : t.zhixing;
                            return (0, w.Ej)({
                              templateIds: o,
                              openId: this.state.openId,
                            }).then(function (t) {
                              1 === t.resultCode &&
                                (e.subscribeTemplateIds = o.filter(function (
                                  e
                                ) {
                                  return !t.templateIds.includes(e);
                                }));
                            });
                          }
                          this.subscribeTemplateIds = null;
                        },
                      },
                      {
                        key: "onSubscribe",
                        value: function () {
                          var e = this,
                            t =
                              x.find(function (t) {
                                return t.code === e.state.subscribeCode;
                              }) || null;
                          if (t) {
                            var o = b.default.isTieyou ? t.tieyou : t.zhixing;
                            this.subscribeTemplateIds &&
                              B.Z.setSubscribe(this.subscribeTemplateIds).then(
                                function (t) {
                                  if (t)
                                    return (0, w.NP)({
                                      templateIds: o,
                                      openId: e.state.openId,
                                      source: P[e.state.subscribeCode],
                                    }).then(function (t) {
                                      console.log(t),
                                        e.getZtripWechatSubscribleMessage();
                                    });
                                }
                              );
                          }
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          return {
                            bu: "train",
                            path: (0, y.ub)(this.sharePath),
                            imageUrl: this.state.shareImg,
                            title: this.shareTitle,
                          };
                        },
                      },
                      {
                        key: "saveFail",
                        value: function () {
                          (0, p.showModal)("图片保存失败");
                        },
                      },
                      {
                        key: "save",
                        value: function () {
                          var e = this.state,
                            t = e.img;
                          e.imgBase64,
                            t ? this.saveByDownload() : this.saveImageBase64();
                        },
                      },
                      {
                        key: "removeBase64Prefix",
                        value: function (e) {
                          if (!e) return !1;
                          var t = "base64,",
                            o = e.indexOf(t);
                          return -1 !== o && e.slice(o + t.length);
                        },
                      },
                      {
                        key: "saveImageBase64",
                        value: function () {
                          var e = this.state.imgBase64,
                            t = this.removeBase64Prefix(e);
                          if (t) {
                            var o = wx.getFileSystemManager(),
                              n = ""
                                .concat(wx.env.USER_DATA_PATH, "/poster_")
                                .concat(Date.now(), ".png");
                            o.writeFile({
                              filePath: n,
                              data: t,
                              encoding: "base64",
                              success: function () {
                                m().saveImageToPhotosAlbum({
                                  filePath: n,
                                  success: function () {
                                    (0, p.showToast)("已保存到相册");
                                  },
                                  fail: function (e) {
                                    console.log(
                                      "saveImageToPhotosAlbum err:",
                                      e
                                    ),
                                      (0, p.showToast)("图片保存失败, 请重试");
                                  },
                                });
                              },
                              fail: function (e) {
                                console.log("writeFile err:", e);
                              },
                              complete: function () {
                                (0, p.hideLoading)();
                              },
                            });
                          } else (0, p.showToast)("图片异常, 请重试");
                        },
                      },
                      {
                        key: "saveByDownload",
                        value: function () {
                          var e = this,
                            t = this.state.img;
                          (0, p.showLoading)("正在保存图片"),
                            m().downloadFile({
                              url: t,
                              success: function (t) {
                                (0, p.hideLoading)(),
                                  (e.downloadFilePath = t.tempFilePath),
                                  e.saveSharePic();
                              },
                              fail: function (t) {
                                console.log(t),
                                  (0, p.hideLoading)(),
                                  e.saveFail();
                              },
                            });
                        },
                      },
                      {
                        key: "saveSharePic",
                        value: function () {
                          var e = this;
                          m().saveImageToPhotosAlbum({
                            filePath: this.downloadFilePath,
                            success: function (e) {
                              console.log(e),
                                (0, p.showModal)("已保存到相册系统");
                            },
                            fail: function (t) {
                              console.log(
                                "*********** 保存海报图片 - 失败 ************"
                              ),
                                console.log(t),
                                e.saveFail();
                            },
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.bgColor,
                            o = e.img,
                            n = e.leftBtnBgColor,
                            a = e.leftBtnColor,
                            i = e.leftBtnTxt,
                            s = e.rightBtnBgColor,
                            r = e.rightBtnColor,
                            c = e.rightBtnTxt,
                            l = e.showRightBtn,
                            h = e.styleType,
                            d = e.floatTip,
                            f = e.imgBase64;
                          return (0, C.tZ)(u.Block, {
                            children:
                              "1" === h
                                ? (0, C.tZ)(u.View, {
                                    className: "share-page-new",
                                    style: "background-color: #" + t,
                                    children: (0, C.BX)(u.View, {
                                      className: "img-box-new",
                                      style: "background-color: #" + t,
                                      children: [
                                        (0, C.tZ)(u.View, {
                                          className: "img-mid-new",
                                          children: (0, C.tZ)(u.Image, {
                                            src: o || f,
                                            className: "img-new",
                                            mode: "widthFix",
                                          }),
                                        }),
                                        (0, C.BX)(u.View, {
                                          className: "btn-box-new",
                                          style: "background-color: #" + t,
                                          children: [
                                            d &&
                                              (0, C.tZ)(u.View, {
                                                className: "banner",
                                                children: (0, C.tZ)(
                                                  g.ZtRichText,
                                                  {
                                                    nodes: d,
                                                    className: "banner-txt",
                                                  }
                                                ),
                                              }),
                                            (0, C.BX)(u.View, {
                                              className: "btn-box-content-new",
                                              children: [
                                                (0, C.BX)(u.Button, {
                                                  className: "btn-save-new",
                                                  onClick: this.save,
                                                  "data-ubt-key":
                                                    "train_wx_h5share_save",
                                                  children: [
                                                    (0, C.tZ)(u.Image, {
                                                      src: "https://images3.c-ctrip.com/zt/0yingxiao/kanjia/%E6%9C%8B%E5%8F%8B%E5%9C%88.png",
                                                      mode: "widthFix",
                                                    }),
                                                    "保存图片分享",
                                                  ],
                                                }),
                                                (0, y.JO)() &&
                                                  (0, C.BX)(u.Button, {
                                                    className: "btn-share-new",
                                                    onClick: this.onSubscribe,
                                                    openType: "share",
                                                    "data-ubt-key":
                                                      "train_wx_h5share_share",
                                                    children: [
                                                      (0, C.tZ)(u.Image, {
                                                        src: "https://images3.c-ctrip.com/zt/0yingxiao/kanjia/%E5%BE%AE%E4%BF%A1.png",
                                                        mode: "widthFix",
                                                      }),
                                                      i,
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  })
                                : (0, C.BX)(u.View, {
                                    className: "share-page",
                                    style: "background-color: #" + t,
                                    children: [
                                      (0, C.tZ)(u.View, {
                                        className: "img-box",
                                        style: "background-color: #" + t,
                                        children: (0, C.tZ)(u.View, {
                                          className: "img-mid",
                                          children: (0, C.tZ)(u.Image, {
                                            src: o || f,
                                            className: "img",
                                            mode: "widthFix",
                                          }),
                                        }),
                                      }),
                                      (0, C.BX)(u.View, {
                                        className: "btn-box",
                                        style: "background-color: #" + t,
                                        children: [
                                          (0, y.JO)() &&
                                            (0, C.tZ)(u.Button, {
                                              className: "btn-share flex-1",
                                              style:
                                                "background-color:#" +
                                                n +
                                                ";color:#" +
                                                a,
                                              onClick: this.onSubscribe,
                                              openType: "share",
                                              "data-ubt-key":
                                                "train_wx_h5share_share",
                                              children: i,
                                            }),
                                          l &&
                                            (0, C.tZ)(u.Button, {
                                              className: "btn-save flex-1",
                                              style:
                                                "background-color:#" +
                                                s +
                                                ";color:#" +
                                                r,
                                              onClick: this.save,
                                              "data-ubt-key":
                                                "train_wx_h5share_save",
                                              children: c,
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                          });
                        },
                      },
                    ]),
                    o
                  );
                })(d.default.Component))
              ) || n;
          (N.enableShareAppMessage = !0),
            Page(
              (0, a.createPageConfig)(
                N,
                "functionalPages/share/share",
                { root: { cn: [] } },
                {} || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(2484);
        }),
          e.O();
      },
    ]);
})();
