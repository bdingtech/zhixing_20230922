!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [50285],
      {
        76075: function (e, t, n) {
          var a,
            o = n(32180),
            i = n(79301),
            r = n(95308),
            c = n(22276),
            s = n(298),
            m = n(57042),
            l = n(24460),
            u = n(21867),
            d = n(86066),
            h = n(52500),
            f = n(71515),
            p = n(92954),
            g = n(81957),
            v = n(80626),
            y = n(79404),
            I = n(79792),
            w = n(50238),
            N = n(49120),
            Z = n(92667),
            k = n(85486),
            T = n(53950),
            C = n(48813),
            x =
              (0, g.h)(!1, { usePageWrapper: !0 })(
                (a = (function (e) {
                  (0, u.Z)(n, e);
                  var t = (0, d.Z)(n);
                  function n(e) {
                    var a;
                    return (
                      (0, m.Z)(this, n),
                      ((a = t.call(this, e)).pageTitle = "酒店点评"),
                      (a.pageId = "10650099294"),
                      (a.commentExt = {
                        Guid: "",
                        Idfa: "",
                        DeviceName: "",
                        OsName: I.default.miniType,
                        OsVer: "",
                        EnvDeviceName: "",
                      }),
                      (a.state = {
                        commentDetails: [
                          {
                            id: 0,
                            type: "房间卫生",
                            score: -1,
                            text: "",
                            scores: [0, 1, 2, 3, 4],
                          },
                          {
                            id: 1,
                            type: "周边环境",
                            score: -1,
                            text: "",
                            scores: [0, 1, 2, 3, 4],
                          },
                          {
                            id: 2,
                            type: "酒店服务",
                            score: -1,
                            text: "",
                            scores: [0, 1, 2, 3, 4],
                          },
                          {
                            id: 3,
                            type: "设备设施",
                            score: -1,
                            text: "",
                            scores: [0, 1, 2, 3, 4],
                          },
                        ],
                        commentText: "",
                        commentImages: [],
                        travelType: -1,
                      }),
                      a
                    );
                  }
                  return (
                    (0, l.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.PageInstance = (0, p.getCurrentInstance)();
                          var e = this.PageInstance.router.params || {},
                            t = e.data ? (0, v.X5)(e.data) : {};
                          this.setState(
                            (0, s.Z)(
                              (0, s.Z)({}, t),
                              {},
                              {
                                hotelName: decodeURIComponent(
                                  null == t ? void 0 : t.hotelName
                                ),
                              }
                            )
                          );
                        },
                      },
                      {
                        key: "onClickEmoji",
                        value: function (e, t) {
                          var n = this.state.commentDetails,
                            a = n.findIndex(function (t) {
                              return t.id === e;
                            });
                          (n[a].score = t),
                            (n[a].text = T.V6[t].txt),
                            this.setState({ commentDetails: n });
                        },
                      },
                      {
                        key: "onCommentInput",
                        value: function (e) {
                          this.setState({ commentText: e.detail.value });
                        },
                      },
                      {
                        key: "onUploadImages",
                        value: function () {
                          var e = this;
                          (0, w.Ix)({ count: 9 }).then(function (t) {
                            if (
                              (console.error("imageList", t),
                              null != t && t.length)
                            ) {
                              var n = e.state.commentImages,
                                a = t.map(function (e) {
                                  return e.imgUrl;
                                }),
                                o = [].concat(
                                  (0, c.Z)(
                                    n.filter(function (e) {
                                      return !a.includes(e.imgUrl);
                                    })
                                  ),
                                  (0, c.Z)(t)
                                );
                              e.setState({ commentImages: o });
                            }
                          });
                        },
                      },
                      {
                        key: "onDeleteSelected",
                        value: function (e) {
                          var t = this.state.commentImages;
                          this.setState({
                            commentImages: t.filter(function (t) {
                              return t.imgUrl !== e;
                            }),
                          });
                        },
                      },
                      {
                        key: "onSetTravelType",
                        value: function (e) {
                          this.setState({ travelType: e });
                        },
                      },
                      {
                        key: "commentReqSelector",
                        value: function () {
                          var e = this.state,
                            t = e.hotelId,
                            n = e.orderId,
                            a = e.commentDetails,
                            o = e.travelType,
                            i = e.commentText,
                            r = e.commentImages.map(function (e, t) {
                              return { imageTitle: t, imageUrl: e.imgUrl };
                            });
                          return {
                            hotelId: t,
                            orderId: n,
                            ratPoint: a[0].score + 1,
                            raAtPoint: a[1].score + 1,
                            servPoint: a[2].score + 1,
                            faclPoint: a[3].score + 1,
                            subject: "",
                            content: i,
                            userIdentity: o,
                            imageInfoList: r || [],
                            version: y.Z.clientVersion,
                          };
                        },
                      },
                      {
                        key: "formCheck",
                        value: function (e) {
                          var t = this.state,
                            n = t.commentDetails,
                            a = t.commentText,
                            o = t.travelType;
                          if (e.ratPoint < 1) {
                            var i = n[0].type;
                            return (
                              (0, N.showToast)("请为".concat(i, "打星呦")), !1
                            );
                          }
                          if (e.raAtPoint < 1) {
                            var r = n[1].type;
                            return (
                              (0, N.showToast)("请为".concat(r, "打星呦")), !1
                            );
                          }
                          if (e.servPoint < 1) {
                            var c = n[2].type;
                            return (
                              (0, N.showToast)("请为".concat(c, "打星呦")), !1
                            );
                          }
                          if (e.faclPoint < 1) {
                            var s = n[3].type;
                            return (
                              (0, N.showToast)("请为".concat(s, "打星呦")), !1
                            );
                          }
                          if ((null == a ? void 0 : a.length) < 5)
                            (0, N.showToast)("点评还没写到5个字呦");
                          else {
                            if (!(o < 0)) return !0;
                            (0, N.showToast)("您还没有选择入住类型呦");
                          }
                        },
                      },
                      {
                        key: "onSubmitComment",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, i.Z)().mark(function e() {
                              var t, n, a, o, r, c, m, l, u, d;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (t = this.state),
                                          (n = t.orderId),
                                          (a = t.hotelId),
                                          (o = t.hotelName),
                                          (r = t.cityId),
                                          (c = t.queryBitMap),
                                          (m = t.geoList),
                                          (l = this.commentReqSelector()),
                                          (u = (0, s.Z)(
                                            (0, s.Z)({}, l),
                                            {},
                                            { commentExt: this.commentExt }
                                          )),
                                          this.formCheck(l))
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 6:
                                        return (
                                          (0, N.showLoading)("正在提交..."),
                                          (e.next = 9),
                                          (0, Z.j_)({ data: u })
                                        );
                                      case 9:
                                        (d = e.sent),
                                          (0, N.hideLoading)(),
                                          d.resultCode < 1
                                            ? (0, N.showToast)(
                                                d.resultMessage ||
                                                  "提交评论失败"
                                              )
                                            : ((0, N.showToast)(
                                                d.resultMessage ||
                                                  "提交评论成功"
                                              ),
                                              this.navigateTo({
                                                url: "/pages/hotel/comment/myComments",
                                                data: {
                                                  orderId: n,
                                                  hotelId: a,
                                                  hotelName: o,
                                                  cityId: r,
                                                  queryBitMap: c,
                                                  geoList: m,
                                                  type: 1,
                                                },
                                              })),
                                          (e.next = 18);
                                        break;
                                      case 14:
                                        (e.prev = 14),
                                          (e.t0 = e.catch(0)),
                                          console.error(
                                            "onSubmitComment error",
                                            e.t0
                                          ),
                                          (0, N.hideLoading)();
                                      case 18:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 14]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onClickRuleDesc",
                        value: function () {
                          this.ubtTrace("comment_commentRule_click", {
                            PageId: this.pageId,
                          }),
                            (0, v.YI)(T.Z9);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.hotelName,
                            a = t.commentDetails,
                            o = t.commentText,
                            i = t.commentImages,
                            r = t.travelType,
                            c =
                              i.length > 8
                                ? T.Y_.addPhoto.off
                                : T.Y_.addPhoto.on;
                          return (0, C.BX)(f.View, {
                            className: "ht-comment-page",
                            children: [
                              (0, C.BX)(f.View, {
                                className: "comment-box",
                                children: [
                                  (0, C.BX)(f.View, {
                                    className: "tit-wrap",
                                    children: [
                                      (0, C.tZ)(f.View, {
                                        className: "tit",
                                        children: n,
                                      }),
                                      (0, C.BX)(f.View, {
                                        className: "rule-desc",
                                        onClick: this.onClickRuleDesc,
                                        children: [
                                          (0, C.tZ)(f.Image, {
                                            className: "icon",
                                            src: T.Y_.ruleIcon,
                                          }),
                                          (0, C.tZ)(f.Text, {
                                            className: "primary",
                                            children: "点评须知",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, C.tZ)(f.View, {
                                    className: "scores",
                                    children: a.map(function (t, n) {
                                      var a = t.score,
                                        o = t.scores,
                                        i = t.type,
                                        r = t.text,
                                        c = t.id;
                                      return (0, C.BX)(
                                        f.View,
                                        {
                                          className: "item",
                                          children: [
                                            (0, C.tZ)(f.View, {
                                              className: "label",
                                              children: i,
                                            }),
                                            (0, C.tZ)(f.View, {
                                              className: "",
                                              children: (0, C.tZ)(
                                                f.CustomWrapper,
                                                {
                                                  children: o.map(function (
                                                    t,
                                                    n
                                                  ) {
                                                    var o =
                                                      n > a
                                                        ? T.V6[t].off
                                                        : T.V6[a].on;
                                                    return (0, C.tZ)(
                                                      f.Image,
                                                      {
                                                        className: "emoji",
                                                        src: o,
                                                        id: "AXBa",
                                                        onClick:
                                                          e.onClickEmoji.bind(
                                                            e,
                                                            c,
                                                            n
                                                          ),
                                                      },
                                                      n
                                                    );
                                                  }),
                                                }
                                              ),
                                            }),
                                            (0, C.tZ)(f.View, {
                                              className: "txt",
                                              children: r,
                                            }),
                                          ],
                                        },
                                        n
                                      );
                                    }),
                                  }),
                                  (0, C.BX)(f.View, {
                                    className: "comments",
                                    children: [
                                      (0, C.tZ)(f.Textarea, {
                                        className: "comment-input",
                                        placeholder:
                                          "亲，卫生如何，周边环境如何，服务是否周到，酒店设施好用吗？（写够5字，才能提交呦，相信你不会敷衍小智的～）",
                                        placeholderClass: "comment-holder",
                                        cursorSpacing: 50,
                                        onChange: this.onCommentInput,
                                      }),
                                      (0, C.BX)(f.View, {
                                        className: "desc",
                                        children: ["已写", o.length, "个字"],
                                      }),
                                      (0, C.BX)(f.View, {
                                        className: "actions",
                                        children: [
                                          null == i
                                            ? void 0
                                            : i.map(function (t, n) {
                                                return (0,
                                                C.BX)(f.View, { className: "item", children: [(0, C.tZ)(f.Image, { className: "photo", src: t.imgUrl }), (0, C.tZ)(f.Image, { className: "close", src: T.Y_.imageClose, id: "AXBb", onClick: e.onDeleteSelected.bind(e, t.imgUrl) })] }, n);
                                              }),
                                          (0, C.tZ)(f.Image, {
                                            className: "item",
                                            src: c,
                                            id: "AXBc",
                                            onClick: this.onUploadImages,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, C.BX)(f.View, {
                                className: "lived-types",
                                children: [
                                  (0, C.tZ)(f.View, {
                                    className: "tit",
                                    children: "入住类型",
                                  }),
                                  T.rc.map(function (t) {
                                    var n = t.id === r,
                                      a = "type".concat(
                                        (0, v.gP)(n, " active primary")
                                      );
                                    return (0,
                                    C.tZ)(f.View, { className: a, id: "AXBd", onClick: e.onSetTravelType.bind(e, t.id), children: t.name }, t.id);
                                  }),
                                ],
                              }),
                              (0, C.tZ)(k.Z, {}),
                              (0, C.tZ)(f.View, {
                                className: "btn-wrap",
                                children: (0, C.tZ)(f.View, {
                                  className: "btn btn-primary",
                                  id: "AXBe",
                                  onClick: this.onSubmitComment,
                                  children: "提交",
                                }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(h.Component))
              ) || a;
          Page(
            (0, o.createPageConfig)(
              x,
              "pages/hotel/comment/comment",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "酒店点评",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#fff",
                backgroundColorBottom: "#efefef",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 71229, 10313, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(76075);
        }),
          e.O();
      },
    ]);
})();
