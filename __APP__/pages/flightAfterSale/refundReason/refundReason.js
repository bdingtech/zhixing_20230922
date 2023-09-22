!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [73303],
      {
        98414: function (e, t, n) {
          var i,
            o = n(32180),
            r = n(57042),
            a = n(24460),
            s = n(81876),
            c = n(21867),
            u = n(86066),
            l = n(45023),
            d = n(52500),
            m = n(92954),
            f = n(81957),
            p = n(71515),
            h = n(49120),
            g = n(34229),
            k = n(50238),
            v = n(48813),
            Z = function (e) {
              var t = e.maxCount,
                n = void 0 === t ? 1 : t,
                i = e.onImagePicked,
                o = void 0 === i ? function () {} : i,
                r = e.className,
                a = void 0 === r ? "" : r;
              return (0, v.BX)(p.View, {
                className: "image-picker ".concat(a),
                id: "AbAV",
                onClick: function (e) {
                  e.stopPropagation(),
                    (0, k.Ix)({ count: n }).then(function (e) {
                      o &&
                        o({
                          imageList:
                            null == e
                              ? void 0
                              : e.map(function (e) {
                                  return e.imgUrl;
                                }),
                        });
                    });
                },
                children: [
                  (0, v.tZ)(p.Image, {
                    className: "picker-icon",
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/xchengxu/icon_push@3x.png",
                  }),
                  (0, v.tZ)(p.View, {
                    className: "picker-title",
                    children: "上传证明",
                  }),
                ],
              });
            },
            x = (function (e) {
              (0, c.Z)(n, e);
              var t = (0, u.Z)(n);
              function n(e) {
                var i;
                return (
                  (0, r.Z)(this, n),
                  (i = t.call(this, e)),
                  (0, l.Z)((0, s.Z)(i), "onRefundItemClick", function (e) {
                    e.showUploadButton
                      ? i.toggleUploadProofBox()
                      : i.props.goToRefundOperate(e);
                  }),
                  (0, l.Z)((0, s.Z)(i), "onImagePicked", function (e) {
                    var t = e.imageList,
                      n = i.state.curTicketIndex,
                      o = i.state.imgListArr.slice();
                    if ((null == t ? void 0 : t.length) > 0) {
                      var r = o[n];
                      (o[n] = r.concat(t)), i.setState({ imgListArr: o });
                    }
                  }),
                  (0, l.Z)((0, s.Z)(i), "onClickNext", function (e) {
                    var t = i.state.imgListArr;
                    if (
                      t.some(function (e) {
                        return 0 == e.length;
                      }) &&
                      e.proofMustUpload
                    )
                      return (0, h.showToast)(e.uploadHint);
                    i.props.updateTicketWithProof({
                      needCustomPerson: e.needCustomPerson,
                      imgListArr: t,
                    }),
                      i.props.goToRefundOperate(e);
                  }),
                  (0, l.Z)((0, s.Z)(i), "removeImage", function (e) {
                    var t = e.index,
                      n = i.state.imgListArr.slice();
                    n[i.state.curTicketIndex].splice(t, 1),
                      i.setState({ imgListArr: n });
                  }),
                  (i.state = {
                    uploadProofBoxVisible: !1,
                    imgListArr: [[]],
                    curTicketIndex: 0,
                  }),
                  i
                );
              }
              return (
                (0, a.Z)(n, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e = this.props,
                        t = e.reason,
                        n = e.tickets;
                      if (t.needCustomPerson && n.length > 1) {
                        var i = [];
                        n.forEach(function () {
                          i.push([]);
                        }),
                          this.setState({ imgListArr: i });
                      }
                    },
                  },
                  {
                    key: "toggleUploadProofBox",
                    value: function () {
                      var e = this.state.uploadProofBoxVisible;
                      this.setState({ uploadProofBoxVisible: !e });
                    },
                  },
                  {
                    key: "onSwitchTab",
                    value: function (e) {
                      var t = e.index;
                      this.setState({ curTicketIndex: t });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e,
                        t,
                        n = this,
                        i = this.props,
                        o = i.reason,
                        r = i.tickets,
                        a = this.state,
                        s = a.uploadProofBoxVisible,
                        c = a.imgListArr,
                        u = a.curTicketIndex,
                        l =
                          c.some(function (e) {
                            return 0 == e.length;
                          }) && o.proofMustUpload,
                        d = o.maxPhotos - c[u].length;
                      return (0, v.BX)(p.View, {
                        className: "reason-item",
                        children: [
                          (0, v.BX)(p.View, {
                            className: "reason-item-banner",
                            id: "AbAW",
                            onClick: function () {
                              return n.onRefundItemClick(o);
                            },
                            children: [
                              (0, v.BX)(p.View, {
                                className: "left",
                                children: [
                                  (0, v.tZ)(p.View, {
                                    className: "title",
                                    children: (0, v.tZ)(g.ZtRichText, {
                                      nodes: o.title,
                                      space: "nbsp",
                                    }),
                                  }),
                                  (0, v.tZ)(p.View, {
                                    className: "sub-title",
                                    children: (0, v.tZ)(g.ZtRichText, {
                                      nodes: o.subTitle,
                                      space: "nbsp",
                                    }),
                                  }),
                                ],
                              }),
                              (0, v.tZ)(p.Text, {
                                className: "ifont-arr iconfont",
                              }),
                            ],
                          }),
                          o.showUploadButton &&
                            s &&
                            (0, v.BX)(p.View, {
                              className: "upload-proof-box",
                              children: [
                                (0, v.tZ)(p.View, {
                                  className: "line-divider",
                                }),
                                (0, v.BX)(p.View, {
                                  className: "upload-hint",
                                  children: [
                                    o.uploadHint,
                                    "  ",
                                    "(最多".concat(o.maxPhotos, "张)"),
                                  ],
                                }),
                                r.length > 1 &&
                                  o.needCustomPerson &&
                                  (0, v.tZ)(p.View, {
                                    className: "ticket-tab",
                                    children: r.map(function (e, t) {
                                      return (0, v.tZ)(
                                        p.View,
                                        {
                                          className: "ticket-tab-item ".concat(
                                            u == t ? "cur" : ""
                                          ),
                                          id: "AbAX",
                                          onClick: function () {
                                            return n.onSwitchTab({ index: t });
                                          },
                                          children: e.passengerName,
                                        },
                                        t
                                      );
                                    }),
                                  }),
                                (0, v.BX)(p.View, {
                                  className: "image-list",
                                  children: [
                                    null == c ||
                                    null === (e = c[u]) ||
                                    void 0 === e
                                      ? void 0
                                      : e.map(function (e, t) {
                                          return (0, v.BX)(
                                            p.View,
                                            {
                                              className:
                                                "upload-img-wrapper image-item",
                                              children: [
                                                (0, v.tZ)(p.Image, {
                                                  className: "upload-img",
                                                  src: e,
                                                }),
                                                (0, v.tZ)(p.Image, {
                                                  className: "close-icon",
                                                  id: "AbAY",
                                                  onClick: function () {
                                                    return n.removeImage({
                                                      index: t,
                                                    });
                                                  },
                                                  src: "https://images3.c-ctrip.com/ztrip/zhixingios/xchengxu/icon_del@3x.png",
                                                }),
                                              ],
                                            },
                                            t
                                          );
                                        }),
                                    (null == c ||
                                    null === (t = c[u]) ||
                                    void 0 === t
                                      ? void 0
                                      : t.length) < o.maxPhotos &&
                                      (0, v.tZ)(Z, {
                                        className: "image-item",
                                        onImagePicked: this.onImagePicked,
                                        maxCount: d,
                                      }),
                                  ],
                                }),
                                (0, v.tZ)(p.View, {
                                  className: "entrance-tips",
                                  children: o.entranceTips,
                                }),
                                (0, v.tZ)(p.Button, {
                                  className:
                                    "btn-primary proof-next-btn ".concat(
                                      l ? "disabled" : ""
                                    ),
                                  id: "AbAZ",
                                  onClick: function () {
                                    return n.onClickNext(o);
                                  },
                                  children: "下一步",
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
            })(d.Component),
            b =
              (0, f.h)()(
                (i = (function (e) {
                  (0, c.Z)(n, e);
                  var t = (0, u.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, r.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, l.Z)((0, s.Z)(i), "pageId", "10650060705"),
                      (0, l.Z)((0, s.Z)(i), "goToRefundOperate", function (e) {
                        var t = e.reasonId,
                          n = e.userAction,
                          o = e.submitTips,
                          r = e.applyTips;
                        i.navigateTo({
                          url: "/pages/flightAfterSale/refundDetail/refundDetail",
                          data: {
                            needShowFree: "VOLUNTARY" !== n,
                            refundModel: i.refundModel,
                            orderType: i.orderType,
                            rescheduleRefundRemark: i.rescheduleRefundRemark,
                            orderNumber: i.orderNumber,
                            remarks: {
                              reasonId: t,
                              userAction: n,
                              submitTips: o,
                              applyTips: r,
                            },
                            goReasonPage: !0,
                            delta: i.delta,
                          },
                        });
                      }),
                      (0, l.Z)(
                        (0, s.Z)(i),
                        "updateTicketWithProof",
                        function (e) {
                          var t = e.needCustomPerson,
                            n = e.imgListArr,
                            o = i.refundModel.segmentList;
                          null == o ||
                            o.forEach(function (e) {
                              var i;
                              null === (i = e.tickets) ||
                                void 0 === i ||
                                i.forEach(function (e, i) {
                                  e.photos = t ? n[i] : n[0];
                                });
                            });
                        }
                      ),
                      (i.state = { reasonList: [], tickets: [] }),
                      i
                    );
                  }
                  return (
                    (0, a.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, m.getCurrentInstance)().router.params
                              .data,
                            t = e.refundModel,
                            n = e.orderType,
                            i = e.rescheduleRefundRemark,
                            o = e.orderNumber,
                            r = e.delta,
                            a = void 0 === r ? 0 : r;
                          console.log("refundModel", t);
                          var s = (t || {}).segmentList,
                            c = s.map(function (e) {
                              return e.canRefundReasonList;
                            })[0],
                            u = s.map(function (e) {
                              return e.tickets;
                            })[0];
                          this.setState({ reasonList: c, tickets: u }),
                            (this.delta = a + 1),
                            (this.refundModel = t),
                            (this.orderType = n),
                            (this.rescheduleRefundRemark = i),
                            (this.orderNumber = o);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.reasonList,
                            i = t.tickets;
                          return (0, v.tZ)(p.View, {
                            className: "flight-refund-reason",
                            children: n.map(function (t, n) {
                              return (0,
                              v.tZ)(x, { reason: t, tickets: i, goToRefundOperate: e.goToRefundOperate, updateTicketWithProof: e.updateTicketWithProof }, n);
                            }),
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(d.Component))
              ) || i;
          Page(
            (0, o.createPageConfig)(
              b,
              "pages/flightAfterSale/refundReason/refundReason",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "选择退票原因",
                backgroundColor: "#5495e6",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [71229, 10313, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(98414);
        }),
          e.O();
      },
    ]);
})();
