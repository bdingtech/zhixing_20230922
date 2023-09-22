!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/9cf383cff2ba8ce0456965e69ba11b63.js"),
    require("../sub-common/3edb2b96731d94d93a96699eab306b50.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [71908],
      {
        32702: function (e, t, n) {
          var r,
            a = n(32180),
            i = n(79301),
            c = n(95308),
            o = n(57042),
            u = n(24460),
            s = n(81876),
            f = n(21867),
            l = n(86066),
            d = n(45023),
            b = n(81957),
            p = n(49120),
            m = n(74867),
            Z = n(71515),
            v = n(92954),
            g = n(52500),
            h = n(5055),
            w = n(13979),
            k = n(61537),
            T = n(48813),
            B =
              (0, b.h)(!1, { usePageWrapper: !0 })(
                (r = (function (e) {
                  (0, f.Z)(n, e);
                  var t = (0, l.Z)(n);
                  function n(e) {
                    var r;
                    return (
                      (0, o.Z)(this, n),
                      (r = t.call(this, e)),
                      (0, d.Z)((0, s.Z)(r), "$FaceProtocolRef", void 0),
                      (0, d.Z)(
                        (0, s.Z)(r),
                        "onFaceClick",
                        (0, c.Z)(
                          (0, i.Z)().mark(function e() {
                            var t, n;
                            return (0, i.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        r.$FaceProtocolRef.checkProtocol()
                                      );
                                    case 2:
                                      if (e.sent) {
                                        e.next = 5;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 5:
                                      return (
                                        (e.prev = 5),
                                        (e.next = 8),
                                        r.navigateToAsync({
                                          url: "/pages/12306/face/face",
                                          data: r.faceInfo,
                                        })
                                      );
                                    case 8:
                                      if (
                                        ((n = e.sent),
                                        "return" === r.faceInfo.failAction ||
                                          1 ==
                                            (null === (t = n.res) ||
                                            void 0 === t
                                              ? void 0
                                              : t.certificationResultCode))
                                      ) {
                                        e.next = 12;
                                        break;
                                      }
                                      return (
                                        (0, p.showToast)("扫脸失败~"),
                                        e.abrupt("return")
                                      );
                                    case 12:
                                      r.confirmBack(n.res), (e.next = 18);
                                      break;
                                    case 15:
                                      (e.prev = 15),
                                        (e.t0 = e.catch(5)),
                                        m.Z.commonDebugTrace(
                                          "face fail:".concat(
                                            JSON.stringify(e.t0)
                                          )
                                        );
                                    case 18:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[5, 15]]
                            );
                          })
                        )
                      ),
                      (0, d.Z)((0, s.Z)(r), "renderBtnView", function () {
                        return (0,
                        T.tZ)(Z.View, { className: "face-btn", id: "AgAz", onClick: r.onFaceClick, children: "同意协议并开始认证" });
                      }),
                      (0, d.Z)((0, s.Z)(r), "renderTipView", function () {
                        var e = r.state.useName;
                        return e
                          ? (0, T.BX)(Z.View, {
                              className: "face-tip",
                              children: [
                                "请确认是账号本人：",
                                (0, T.tZ)(Z.Text, {
                                  className: "name",
                                  children: e,
                                }),
                              ],
                            })
                          : null;
                      }),
                      (0, d.Z)((0, s.Z)(r), "renderBottomView", function () {
                        return (0, T.tZ)(w.Z, {
                          onRef: function (e) {
                            return (r.$FaceProtocolRef = e);
                          },
                        });
                      }),
                      (r.state = { title: "", subTitle: "", useName: "" }),
                      (r.pageId = "10650085964"),
                      (r.pageTitle = "人证核验"),
                      (r.disablePageBgStyle = !0),
                      r
                    );
                  }
                  return (
                    (0, u.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e =
                              (0, v.getCurrentInstance)().router.params || {},
                            t = e.faceInfo,
                            n = e.title,
                            r = void 0 === n ? "" : n,
                            a = e.subTitle,
                            i = void 0 === a ? "" : a,
                            c = e.useName;
                          (this.faceInfo = t),
                            this.setState({
                              title: r || "您需要完成人脸核验",
                              subTitle: i,
                              useName: c,
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.subTitle,
                            n = e.title;
                          return (0, T.tZ)(h.Z, {
                            icon: k.ow.img_face_check,
                            title1: n,
                            title2: t,
                            renderBtnView: this.renderBtnView,
                            renderTipView: this.renderTipView,
                            renderBottomView: this.renderBottomView,
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(g.default.Component))
              ) || r;
          Page(
            (0, a.createPageConfig)(
              B,
              "pages/12306/faceAuth/faceAuth",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "验证",
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [37013, 61094, 26450, 52593, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(32702);
        }),
          e.O();
      },
    ]);
})();
