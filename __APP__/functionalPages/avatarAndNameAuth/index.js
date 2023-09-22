!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [14966],
      {
        91558: function (e, t, a) {
          var n,
            o = a(32180),
            i = a(298),
            r = a(57042),
            c = a(24460),
            s = a(81876),
            l = a(21867),
            u = a(86066),
            h = a(45023),
            d = a(52500),
            g = a(92954),
            f = a.n(g),
            v = a(71515),
            p = a(79910),
            m = a(49120),
            k = a(81957),
            A = a(79792),
            C = a(48813),
            B =
              (0, k.h)()(
                (n = (function (e) {
                  (0, l.Z)(a, e);
                  var t = (0, u.Z)(a);
                  function a() {
                    var e;
                    (0, r.Z)(this, a);
                    for (
                      var n = arguments.length, o = new Array(n), i = 0;
                      i < n;
                      i++
                    )
                      o[i] = arguments[i];
                    return (
                      (e = t.call.apply(t, [this].concat(o))),
                      (0, h.Z)((0, s.Z)(e), "pageId", "10650060345"),
                      (0, h.Z)((0, s.Z)(e), "isAuthCompletedBack", !1),
                      e
                    );
                  }
                  return (
                    (0, c.Z)(a, [
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          if (!this.isAuthCompletedBack) {
                            console.log(
                              "非授权流程下的页面返回,写入授权失败回调数据"
                            );
                            this.navigateBack({
                              ReturnCode: "-1",
                              Message: "昵称头像授权失败",
                              Data: null,
                            });
                          }
                        },
                      },
                      {
                        key: "onGetUserInfo",
                        value: function (e) {
                          var t = e.target.userInfo,
                            a = void 0 === t ? {} : t,
                            n = a.nickName,
                            o = void 0 === n ? "" : n,
                            r = a.avatarUrl;
                          if (o || (void 0 === r ? "" : r)) {
                            f().setStorage({
                              key: "USERINFONEW",
                              data: (0, i.Z)({}, a),
                            });
                            var c = {
                              ReturnCode: "0",
                              Message: "昵称头像授权成功",
                              Data: a,
                            };
                            this.goBackWithAuthCompleted(c);
                          } else {
                            this.goBackWithAuthCompleted({
                              ReturnCode: "-1",
                              Message: "昵称头像授权失败",
                              Data: null,
                            });
                          }
                        },
                      },
                      {
                        key: "getUserProfileAction",
                        value: function () {
                          var e = this;
                          (0, m.getUserProfileInfo)({ forceUpdate: !0 })
                            .then(function (t) {
                              var a = t.nickName,
                                n = void 0 === a ? "" : a,
                                o = t.avatarUrl;
                              if (n || (void 0 === o ? "" : o)) {
                                var i = {
                                  ReturnCode: "0",
                                  Message: "昵称头像授权成功",
                                  Data: t,
                                };
                                e.goBackWithAuthCompleted(i);
                              } else {
                                e.goBackWithAuthCompleted({
                                  ReturnCode: "-1",
                                  Message: "昵称头像授权失败",
                                  Data: null,
                                });
                              }
                            })
                            .catch(function () {
                              e.goBackWithAuthCompleted({
                                ReturnCode: "-1",
                                Message: "昵称头像授权失败",
                                Data: null,
                              });
                            });
                        },
                      },
                      {
                        key: "goBackWithAuthCompleted",
                        value: function (e) {
                          (this.isAuthCompletedBack = !0), this.navigateBack(e);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = A.default.isTieyou
                              ? "https://images3.c-ctrip.com/zt/activity/avatarAndNameAuth/logo-ty.jpg"
                              : "https://images3.c-ctrip.com/zt/activity/avatarAndNameAuth/logo-zx.jpg",
                            t = p.Z.canUseGetUserProfile;
                          return (0, C.tZ)(v.Block, {
                            children: (0, C.BX)(v.View, {
                              className: "wrap",
                              children: [
                                (0, C.tZ)(v.Image, { src: e }),
                                (0, C.BX)(v.View, {
                                  className: "txt-box",
                                  children: [
                                    (0, C.tZ)(v.View, {
                                      children: "参加活动请确认以下授权",
                                    }),
                                    (0, C.tZ)(v.View, {
                                      children:
                                        "获得你的公开信息（昵称，头像等）",
                                    }),
                                  ],
                                }),
                                t
                                  ? (0, C.tZ)(v.Button, {
                                      className: "btn",
                                      onClick: this.getUserProfileAction,
                                      children: "确认授权",
                                    })
                                  : (0, C.tZ)(v.Button, {
                                      className: "btn",
                                      openType: "getUserInfo",
                                      onGetuserinfo: this.onGetUserInfo,
                                      children: "确认授权",
                                    }),
                                (0, C.tZ)(v.View, {
                                  className: "tips-txt",
                                  children: "点击确认授权后，请点击“允许”",
                                }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(d.default.Component))
              ) || n;
          Page(
            (0, o.createPageConfig)(
              B,
              "functionalPages/avatarAndNameAuth/index",
              { root: { cn: [] } },
              { navigationBarTitleText: "授权" } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(91558);
        }),
          e.O();
      },
    ]);
})();
