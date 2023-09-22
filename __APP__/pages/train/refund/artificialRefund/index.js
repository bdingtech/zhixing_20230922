!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [89932],
      {
        39377: function (e, t, n) {
          var i,
            a = n(32180),
            c = n(79301),
            o = n(95308),
            s = n(57042),
            r = n(24460),
            l = n(81876),
            d = n(21867),
            u = n(86066),
            f = n(45023),
            p = n(52500),
            m = n(92954),
            h = n.n(m),
            g = n(71515),
            I = n(81957),
            w = n(34229),
            N = n(79792),
            k = n(49120),
            Z = n(13025),
            y = n(10741),
            P = n(48813),
            v =
              (0, I.h)()(
                (i = (function (e) {
                  (0, d.Z)(n, e);
                  var t = (0, u.Z)(n);
                  function n() {
                    var e;
                    return (
                      (0, s.Z)(this, n),
                      (e = t.call(this)),
                      (0, f.Z)((0, l.Z)(e), "pageId", "10650060603"),
                      (e.state = {
                        isTieyou: N.default.isTieyou,
                        firstPic: "",
                        secondPic: "",
                        firstPath: "",
                        secondPath: "",
                        showTipPop: !1,
                        pageInfo: {},
                      }),
                      e
                    );
                  }
                  return (
                    (0, r.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, m.getCurrentInstance)().router.params;
                          console.log("params:", e),
                            (this.oid =
                              (e.oid && decodeURIComponent(e.oid)) || ""),
                            (this.ticketId =
                              (e.ticketId && decodeURIComponent(e.ticketId)) ||
                              ""),
                            (this.eleToManual = e.eleToManual || ""),
                            (this.result = e.data.result),
                            console.log("oid tid:", this.oid, this.ticketId),
                            this.fetchPageInfo();
                        },
                      },
                      {
                        key: "fetchPageInfo",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (t = {
                                            orderNumber: this.oid,
                                            ticketId: this.ticketId,
                                          }),
                                          (e.t0 = this.result),
                                          e.t0)
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (e.next = 6), (0, y.Zw5)(t);
                                      case 6:
                                        e.t0 = e.sent;
                                      case 7:
                                        1 === (n = e.t0).resultCode &&
                                          this.setState({ pageInfo: n }),
                                          (e.next = 14);
                                        break;
                                      case 11:
                                        (e.prev = 11),
                                          (e.t1 = e.catch(0)),
                                          console.log("e:", e.t1);
                                      case 14:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 11]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "uploadPicHandler",
                        value: function (e) {
                          var t = this;
                          console.log("uploadPicHandler:", e),
                            h().chooseImage({
                              count: 1,
                              sourceType: ["album", "camera"],
                              success: function (n) {
                                var i = n.tempFilePaths;
                                i && i.length > 0
                                  ? t.tmpFilePathToBase64(i[0], e)
                                  : h().showToast({
                                      title: "获取图片失败",
                                      duration: 2e3,
                                      icon: "none",
                                    });
                              },
                            });
                        },
                      },
                      {
                        key: "tmpFilePathToBase64",
                        value: function (e, t) {
                          var n = this,
                            i = this.state.pageInfo;
                          h()
                            .getFileSystemManager()
                            .readFile({
                              filePath: e,
                              encoding: "base64",
                              success: function (a) {
                                var c,
                                  o = "data:image/png;base64," + a.data,
                                  s = a.data;
                                console.log("imageBase64:", o),
                                  "first" === t
                                    ? "身份证" ===
                                      (null == i ||
                                      null === (c = i.passengerInfo) ||
                                      void 0 === c
                                        ? void 0
                                        : c.identityType)
                                      ? n.getOCRResult(o, s, e)
                                      : n.setState({
                                          firstPic: s,
                                          firstPath: e,
                                        })
                                    : n.setState({
                                        secondPic: s,
                                        secondPath: e,
                                      });
                              },
                              fail: function (e) {
                                console.log("tempFilePathToBase64 failed: ", e);
                              },
                            });
                        },
                      },
                      {
                        key: "getOCRResult",
                        value: function (e, t, n) {
                          var i = this;
                          function a(e) {
                            (0, k.hideLoading)(),
                              console.log("OCRFromImg failed: ", e),
                              h().showToast({
                                title: "识别身份证失败",
                                duration: 2e3,
                                icon: "none",
                              });
                          }
                          (0, k.showLoading)("证件识别中...");
                          var c = { image: e };
                          (0, Z.pS)(c).then(
                            function (e) {
                              (0, k.hideLoading)();
                              var c = e || {};
                              if (0 === c.result.resultCode) {
                                if ((console.log(c), !c.idCardNo || !c.name))
                                  return void a(c);
                                i.setState({ firstPic: t, firstPath: n });
                              } else a(c);
                            },
                            function (e) {
                              (0, k.hideLoading)(),
                                console.log(e),
                                h().showToast({
                                  title: "识别身份证失败",
                                  duration: 2e3,
                                  icon: "none",
                                });
                            }
                          );
                        },
                      },
                      {
                        key: "refundBtnHandler",
                        value: function () {
                          var e,
                            t = this.state,
                            n = t.pageInfo,
                            i = t.firstPic,
                            a = t.secondPic;
                          (
                            "护照" ===
                            (null == n ||
                            null === (e = n.passengerInfo) ||
                            void 0 === e
                              ? void 0
                              : e.identityType)
                              ? "" === i
                              : "" === i || "" === a
                          )
                            ? h().showToast({
                                title: "请您先上传好证件图片",
                                duration: 2e3,
                                icon: "none",
                              })
                            : this.setState({ showTipPop: !0 });
                        },
                      },
                      {
                        key: "cancel",
                        value: function () {
                          this.setState({ showTipPop: !1 });
                        },
                      },
                      {
                        key: "doApplyRefund",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (t = {
                                            orderNumber: this.oid,
                                            tickectId: this.ticketId,
                                            isRescheduleTicket: 0,
                                            partnerName: N.default.partner,
                                            productIds: "",
                                            firstPicture:
                                              this.state.firstPic || "",
                                            secondPicture:
                                              this.state.secondPic || "",
                                          }),
                                          "" !== this.eleToManual &&
                                            (t.eleToManual = Number(
                                              this.eleToManual
                                            )),
                                          (e.next = 5),
                                          (0, y.IM9)(t)
                                        );
                                      case 5:
                                        1 === (n = e.sent).resultCode
                                          ? this.confirmBack({
                                              applyRefundSuccess: !0,
                                            })
                                          : h().showToast({
                                              title:
                                                n.resultMessage ||
                                                "申请退票失败，请重试",
                                              duration: 2e3,
                                              icon: "none",
                                            }),
                                          (e.next = 12);
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(0)),
                                          console.log("e:", e.t0);
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 9]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t = this,
                            n = this.state,
                            i = n.pageInfo,
                            a = n.isTieyou,
                            c = n.firstPath,
                            o = n.secondPath,
                            s = n.showTipPop;
                          return (0, P.BX)(g.Block, {
                            children: [
                              (0, P.tZ)(g.View, {
                                className: "top-box " + (a ? "ty" : "zx"),
                                children: (0, P.tZ)(g.View, {
                                  className: "txt",
                                  children: i.desc,
                                }),
                              }),
                              (0, P.BX)(g.View, {
                                className: "wrap",
                                children: [
                                  (0, P.BX)(g.View, {
                                    className:
                                      "white-box refund-comm " +
                                      (a ? "ty" : "zx"),
                                    children: [
                                      i.applyRefundTicketRemindInfo &&
                                        (0, P.BX)(g.View, {
                                          className: "refund-comm-hd",
                                          children: [
                                            (0, P.tZ)(g.View, {
                                              className: "tit",
                                            }),
                                            (0, P.tZ)(g.View, {
                                              className: "tag-list",
                                              children:
                                                i.applyRefundTicketRemindInfo
                                                  .tags &&
                                                i.applyRefundTicketRemindInfo
                                                  .tags.length > 0 &&
                                                i.applyRefundTicketRemindInfo.tags.map(
                                                  function (e, t) {
                                                    return (0, P.tZ)(
                                                      g.View,
                                                      {
                                                        className: "item",
                                                        children: e,
                                                      },
                                                      "tag-".concat(t)
                                                    );
                                                  }
                                                ),
                                            }),
                                            (0, P.tZ)(g.View, {
                                              className: "txt",
                                              children:
                                                i.applyRefundTicketRemindInfo
                                                  .applyRefunDesc,
                                            }),
                                          ],
                                        }),
                                      (0, P.BX)(g.View, {
                                        className: "refund-comm-upload",
                                        children: [
                                          (0, P.tZ)(g.View, {
                                            className: "tit",
                                            children:
                                              i.uploadIdentityInfo &&
                                              i.uploadIdentityInfo.title,
                                          }),
                                          i.uploadIdentityInfo &&
                                          i.uploadIdentityInfo.pictureInfo &&
                                          (null ===
                                            (e =
                                              i.uploadIdentityInfo
                                                .pictureInfo) || void 0 === e
                                            ? void 0
                                            : e.length) > 0
                                            ? i.uploadIdentityInfo.pictureInfo.map(
                                                function (e, n) {
                                                  var i = 0 === n ? c : o;
                                                  return (0, P.BX)(
                                                    g.View,
                                                    {
                                                      className: "item",
                                                      children: [
                                                        (0, P.tZ)(g.View, {
                                                          className: "pic-box",
                                                          id: "".concat(
                                                            0 === n
                                                              ? "AKFd"
                                                              : "AKFe"
                                                          ),
                                                          onClick: function () {
                                                            return t.uploadPicHandler(
                                                              0 === n
                                                                ? "first"
                                                                : "second"
                                                            );
                                                          },
                                                          children: i
                                                            ? (0, P.tZ)(
                                                                g.Image,
                                                                {
                                                                  src: i,
                                                                  className:
                                                                    "img",
                                                                }
                                                              )
                                                            : (0, P.tZ)(
                                                                g.Image,
                                                                {
                                                                  src: e.pictureIcon,
                                                                  className:
                                                                    "img",
                                                                  webp: !0,
                                                                }
                                                              ),
                                                        }),
                                                        (0, P.tZ)(g.View, {
                                                          className: "txt",
                                                          children:
                                                            e.pictureDesc,
                                                        }),
                                                      ],
                                                    },
                                                    "upload-picture-".concat(n)
                                                  );
                                                }
                                              )
                                            : (0, P.BX)(g.Block, {
                                                children: [
                                                  (0, P.BX)(g.View, {
                                                    className: "item",
                                                    children: [
                                                      (0, P.tZ)(g.View, {
                                                        className: "pic-box",
                                                        id: "AKFd",
                                                        onClick: function () {
                                                          return t.uploadPicHandler(
                                                            "first"
                                                          );
                                                        },
                                                        children: c
                                                          ? (0, P.tZ)(g.Image, {
                                                              src: c,
                                                              className: "img",
                                                            })
                                                          : (0, P.tZ)(g.Image, {
                                                              src:
                                                                "https://pic.c-ctrip.com/train/zt/wechat/refund/upload-sfz-front-" +
                                                                (a
                                                                  ? "ty"
                                                                  : "zx") +
                                                                ".png",
                                                              className: "img",
                                                            }),
                                                      }),
                                                      (0, P.tZ)(g.View, {
                                                        className: "txt",
                                                        children:
                                                          "点击上传身份证人像面",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, P.BX)(g.View, {
                                                    className: "item",
                                                    children: [
                                                      (0, P.tZ)(g.View, {
                                                        className: "pic-box",
                                                        id: "AKFe",
                                                        onClick: function () {
                                                          return t.uploadPicHandler(
                                                            "second"
                                                          );
                                                        },
                                                        children: o
                                                          ? (0, P.tZ)(g.Image, {
                                                              src: o,
                                                              className: "img",
                                                            })
                                                          : (0, P.tZ)(g.Image, {
                                                              src:
                                                                "https://pic.c-ctrip.com/train/zt/wechat/refund/upload-sfz-reverse-" +
                                                                (a
                                                                  ? "ty"
                                                                  : "zx") +
                                                                ".png",
                                                              className: "img",
                                                            }),
                                                      }),
                                                      (0, P.tZ)(g.View, {
                                                        className: "txt",
                                                        children:
                                                          "点击上传身份证国徽面",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                        ],
                                      }),
                                      i.refundTicketInfo &&
                                        (0, P.BX)(g.View, {
                                          className: "refund-comm-detail",
                                          children: [
                                            (0, P.tZ)(g.View, {
                                              className: "tit",
                                              children:
                                                i.refundTicketInfo.priceTitle,
                                            }),
                                            (0, P.BX)(g.View, {
                                              className:
                                                "refund-comm-detail-info",
                                              children: [
                                                i.refundTicketInfo.priceInfo &&
                                                  i.refundTicketInfo.priceInfo
                                                    .length > 0 &&
                                                  i.refundTicketInfo.priceInfo.map(
                                                    function (e, t) {
                                                      return (0, P.BX)(
                                                        g.View,
                                                        {
                                                          className: "item",
                                                          children: [
                                                            (0, P.BX)(g.View, {
                                                              className: "cont",
                                                              children: [
                                                                (0, P.BX)(
                                                                  g.View,
                                                                  {
                                                                    className:
                                                                      "txt",
                                                                    children: [
                                                                      e.key,
                                                                      e.tag &&
                                                                        (0,
                                                                        P.tZ)(
                                                                          g.Text,
                                                                          {
                                                                            className:
                                                                              "tag " +
                                                                              (a
                                                                                ? "ty"
                                                                                : "zx"),
                                                                            children:
                                                                              e.tag,
                                                                          }
                                                                        ),
                                                                    ],
                                                                  }
                                                                ),
                                                                e.desc &&
                                                                  (0, P.tZ)(
                                                                    g.View,
                                                                    {
                                                                      className:
                                                                        "tgrey",
                                                                      children:
                                                                        e.desc,
                                                                    }
                                                                  ),
                                                              ],
                                                            }),
                                                            (0, P.tZ)(g.View, {
                                                              className:
                                                                "price",
                                                              children: e.value,
                                                            }),
                                                          ],
                                                        },
                                                        "refund-info-item-".concat(
                                                          t
                                                        )
                                                      );
                                                    }
                                                  ),
                                                (0, P.BX)(g.View, {
                                                  className: "total",
                                                  children: [
                                                    (0, P.tZ)(g.View, {
                                                      className: "cont",
                                                      children: (0, P.BX)(
                                                        g.View,
                                                        {
                                                          className: "txt",
                                                          children: [
                                                            i.refundTicketInfo
                                                              .leftRefundKeyDesc,
                                                            "：",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, P.tZ)(g.View, {
                                                      className:
                                                        "price color-primary",
                                                      children: (0, P.tZ)(
                                                        w.ZtRichText,
                                                        {
                                                          nodes:
                                                            i.refundTicketInfo
                                                              .leftRefundAmount,
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  i.tipDesc &&
                                    i.tipDesc.length > 0 &&
                                    i.tipDesc.map(function (e, t) {
                                      return (0,
                                      P.tZ)(g.View, { className: "info-txt", children: e }, "tip-".concat(t));
                                    }),
                                ],
                              }),
                              (0, P.BX)(g.View, {
                                className: "fixed-botm",
                                children: [
                                  (0, P.tZ)(g.View, {
                                    className: "cont",
                                    children: (0, P.tZ)(w.ZtRichText, {
                                      style:
                                        "font-size: 24px;font-weight: bold; color: #FE4839; display: inline-block;",
                                      nodes: i.buttomRefundAmountDesc,
                                    }),
                                  }),
                                  (0, P.tZ)(g.Button, {
                                    className: "btn-red btn-submit",
                                    id: "AKFf",
                                    onClick: this.refundBtnHandler,
                                    children: i.buttonName || "提交",
                                  }),
                                ],
                              }),
                              s &&
                                (0, P.BX)(g.View, {
                                  children: [
                                    (0, P.tZ)(g.View, {
                                      className: "shade-box",
                                    }),
                                    (0, P.BX)(g.View, {
                                      className: "pop-mid pop-modal",
                                      children: [
                                        (0, P.tZ)(g.View, {
                                          className: "tit",
                                          children:
                                            i.remindPopInfo &&
                                            i.remindPopInfo.title,
                                        }),
                                        (0, P.tZ)(g.View, {
                                          className: "txt",
                                          children:
                                            i.remindPopInfo &&
                                            i.remindPopInfo.desc,
                                        }),
                                        (0, P.tZ)(g.View, {
                                          className: "tips",
                                          children:
                                            i.remindPopInfo &&
                                            i.remindPopInfo.secondDesc,
                                        }),
                                        (0, P.BX)(g.View, {
                                          className: "pop-btn",
                                          children: [
                                            (0, P.tZ)(g.Button, {
                                              className: "btn-cancel",
                                              id: "AKFg",
                                              onClick: this.cancel,
                                              children:
                                                i.remindPopInfo &&
                                                i.remindPopInfo
                                                  .cancelButtonName,
                                            }),
                                            (0, P.tZ)(g.Button, {
                                              className:
                                                "btn-submit btn-primary",
                                              id: "AKFh",
                                              onClick: this.doApplyRefund,
                                              children:
                                                i.remindPopInfo &&
                                                i.remindPopInfo
                                                  .confirmButtonName,
                                            }),
                                          ],
                                        }),
                                      ],
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
                })(p.default.Component))
              ) || i;
          Page(
            (0, a.createPageConfig)(
              v,
              "pages/train/refund/artificialRefund/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
                navigationBarTitleText: "人工客票退票申请",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(39377);
        }),
          e.O();
      },
    ]);
})();
