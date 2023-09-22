!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [60882],
      {
        26445: function (e, a, t) {
          var n,
            r = t(32180),
            o = t(79301),
            i = t(95308),
            c = t(57042),
            s = t(24460),
            l = t(81876),
            u = t(21867),
            h = t(86066),
            m = t(45023),
            d = t(52500),
            v = t(92954),
            p = t.n(v),
            f = t(71515),
            Z = t(32297),
            N = t(50238),
            w = t(81957),
            k = t(10741),
            g = t(79910),
            x = t(2809),
            b = t(79792),
            C = t(49120),
            B = t(18783),
            A = t(34229),
            S = t(48813),
            U = d.default.memo(function (e) {
              var a = e.isShow,
                t = e.onClose,
                n = e.onChooseAvatar;
              return (0, S.tZ)(A.ZtActivityPop, {
                show: a,
                onClose: t,
                onWrapClose: t,
                className: "user-info-auth-pop",
                children: (0, S.BX)(f.View, {
                  className: "auth-pop",
                  children: [
                    (0, S.tZ)(f.View, {
                      className: "auth-pop-txt",
                      children:
                        "申请访问您的微信头像/相机/相册/文件，用于获取图片来更换头像",
                    }),
                    (0, S.BX)(f.View, {
                      className: "flex",
                      children: [
                        (0, S.tZ)(f.View, {
                          className: "flex-1 btn-item",
                          id: "ACBt",
                          onClick: t,
                          children: "拒绝",
                        }),
                        (0, S.tZ)(f.Button, {
                          "open-type": "chooseAvatar",
                          onChooseAvatar: function (e) {
                            p().setStorageSync("USER_INFO_AUTH_POP", !0),
                              t(),
                              n(e);
                          },
                          className: "flex-1 btn-item",
                          children: "同意",
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            T =
              (0, w.h)()(
                (n = (function (e) {
                  (0, u.Z)(t, e);
                  var a = (0, h.Z)(t);
                  function t(e) {
                    var n;
                    return (
                      (0, c.Z)(this, t),
                      (n = a.call(this, e)),
                      (0, m.Z)((0, l.Z)(n), "pageId", "10650086935"),
                      (0, m.Z)(
                        (0, l.Z)(n),
                        "loadData",
                        (0, i.Z)(
                          (0, o.Z)().mark(function e() {
                            var a;
                            return (0, o.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        (0, B.N_)(!0)
                                      );
                                    case 3:
                                      (a = e.sent),
                                        n.setState({
                                          nickName:
                                            null == a ? void 0 : a.nickName,
                                          avatarUrl:
                                            null == a ? void 0 : a.avatarUrl,
                                        }),
                                        (e.next = 9);
                                      break;
                                    case 7:
                                      (e.prev = 7), (e.t0 = e.catch(0));
                                    case 9:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 7]]
                            );
                          })
                        )
                      ),
                      (0, m.Z)((0, l.Z)(n), "showAuthPop", function () {
                        n.setState({ isShowAuthPop: !0 });
                      }),
                      (0, m.Z)(
                        (0, l.Z)(n),
                        "onChooseAvatar",
                        (function () {
                          var e = (0, i.Z)(
                            (0, o.Z)().mark(function e(a) {
                              var t, r, i, c;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            (null == a ? void 0 : a.detail) ||
                                            {}),
                                          !(r = t.avatarUrl))
                                        ) {
                                          e.next = 12;
                                          break;
                                        }
                                        return (
                                          (e.prev = 2),
                                          (e.next = 5),
                                          (0, N.dh)([r])
                                        );
                                      case 5:
                                        (i = e.sent) &&
                                          i.length &&
                                          n.setState({
                                            avatarUrl:
                                              null === (c = i[0]) ||
                                              void 0 === c
                                                ? void 0
                                                : c.imgUrl,
                                          }),
                                          (e.next = 12);
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(2)),
                                          (0, C.showToast)({
                                            title: "网络异常，头像上传失败",
                                          });
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[2, 9]]
                              );
                            })
                          );
                          return function (a) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                      (0, m.Z)((0, l.Z)(n), "inputNickName", function (e) {
                        var a;
                        n.setState({
                          nickName:
                            null === (a = e.detail) || void 0 === a
                              ? void 0
                              : a.value,
                        });
                      }),
                      (0, m.Z)(
                        (0, l.Z)(n),
                        "submit",
                        (0, i.Z)(
                          (0, o.Z)().mark(function e() {
                            var a, t, r, i;
                            return (0, o.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((a = n.state),
                                        (t = a.nickName),
                                        (r = a.avatarUrl),
                                        Z.Z.isLogin)
                                      ) {
                                        e.next = 3;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 3:
                                      if (!t || !r) {
                                        e.next = 17;
                                        break;
                                      }
                                      if (
                                        Z.Z.nickName !== t ||
                                        Z.Z.avatarUrl !== r
                                      ) {
                                        e.next = 7;
                                        break;
                                      }
                                      return (
                                        n.navigateBack({
                                          nickName: t,
                                          avatarUrl: r,
                                        }),
                                        e.abrupt("return")
                                      );
                                    case 7:
                                      return (
                                        (e.prev = 7),
                                        (e.next = 10),
                                        (0, k.ryV)({
                                          name: t,
                                          photoUrl: r,
                                          openid: Z.Z.openid,
                                        })
                                      );
                                    case 10:
                                      1 ===
                                      (null == (i = e.sent)
                                        ? void 0
                                        : i.resultCode)
                                        ? ((Z.Z.nickName = t),
                                          (Z.Z.avatarUrl = r),
                                          n.navigateBack({
                                            avatarUrl: r,
                                            nickName: t,
                                          }))
                                        : (0, C.showToast)({
                                            title:
                                              (null == i
                                                ? void 0
                                                : i.message) ||
                                              "网络异常，保存失败",
                                          }),
                                        (e.next = 17);
                                      break;
                                    case 14:
                                      (e.prev = 14),
                                        (e.t0 = e.catch(7)),
                                        (0, C.showToast)({
                                          title: "网络异常，保存失败",
                                        });
                                    case 17:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[7, 14]]
                            );
                          })
                        )
                      ),
                      (n.state = {
                        nickName: "",
                        avatarUrl: "",
                        isShowAuthPop: !1,
                      }),
                      n
                    );
                  }
                  return (
                    (0, s.Z)(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            a =
                              g.Z.compareVersion(x.ZP.SDKVersion, "2.21.2") >=
                              0;
                          b.default.isWechat && a
                            ? this.loadData()
                            : p().showModal({
                                title: "温馨提示",
                                content:
                                  "当前微信版本过低，请先升级后使用该功能",
                                confirmText: "我知道了",
                                showCancel: !1,
                                success: function (a) {
                                  a.confirm, e.navigateBack();
                                },
                              });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            a = this.state,
                            t = a.nickName,
                            n = a.avatarUrl,
                            r = a.isShowAuthPop,
                            o = !!t && !!n,
                            i = p().getStorageSync("USER_INFO_AUTH_POP");
                          return (0, S.BX)(f.View, {
                            className: "userInfo-management",
                            children: [
                              (0, S.BX)(f.View, {
                                className: "userInfo-management-c",
                                children: [
                                  (0, S.BX)(f.View, {
                                    className: "item",
                                    children: [
                                      (0, S.tZ)(f.View, { children: "头像" }),
                                      (0, S.tZ)(f.View, {
                                        className: "image-btn",
                                        children: i
                                          ? (0, S.BX)(f.Button, {
                                              className:
                                                "right-box image-btn-c",
                                              "open-type": "chooseAvatar",
                                              onChooseAvatar:
                                                this.onChooseAvatar,
                                              children: [
                                                n
                                                  ? (0, S.tZ)(f.Image, {
                                                      src: n,
                                                      className: "image",
                                                    })
                                                  : (0, S.tZ)(f.Text, {
                                                      className: "account",
                                                      children: "请选择头像",
                                                    }),
                                                (0, S.tZ)(f.Text, {
                                                  className:
                                                    "iconfont ifont-arr icon",
                                                }),
                                              ],
                                            })
                                          : (0, S.BX)(f.Button, {
                                              className:
                                                "right-box image-btn-c",
                                              id: "ACBu",
                                              onClick: this.showAuthPop,
                                              children: [
                                                n
                                                  ? (0, S.tZ)(f.Image, {
                                                      src: n,
                                                      className: "image",
                                                    })
                                                  : (0, S.tZ)(f.Text, {
                                                      className: "account",
                                                      children: "请选择头像",
                                                    }),
                                                (0, S.tZ)(f.Text, {
                                                  className:
                                                    "iconfont ifont-arr icon",
                                                }),
                                              ],
                                            }),
                                      }),
                                    ],
                                  }),
                                  (0, S.BX)(f.View, {
                                    className: "item",
                                    children: [
                                      (0, S.tZ)(f.View, { children: "昵称" }),
                                      (0, S.BX)(f.View, {
                                        className: "right-box",
                                        children: [
                                          (0, S.tZ)(f.Input, {
                                            className: "account",
                                            type: "nickname",
                                            value: t,
                                            onInput: this.inputNickName,
                                            placeholder: "请输入昵称",
                                            placeholderClass:
                                              "placeholder-class",
                                            maxLength: "20",
                                          }),
                                          (0, S.tZ)(f.Text, {
                                            className:
                                              "iconfont ifont-arr icon",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, S.tZ)(f.Button, {
                                className: "handleWithdraw ".concat(
                                  o ? "" : "unSubmit"
                                ),
                                id: "ACBv",
                                onClick: this.submit,
                                children: "保存",
                              }),
                              (0, S.tZ)(U, {
                                isShow: r,
                                onClose: function () {
                                  return e.setState({ isShowAuthPop: !1 });
                                },
                                onChooseAvatar: this.onChooseAvatar,
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    t
                  );
                })(d.Component))
              ) || n;
          Page(
            (0, r.createPageConfig)(
              T,
              "pages/usercenter/userInfo/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#EFEFEF",
                navigationBarTitleText: "个人信息",
                navigationBarTextStyle: "black",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [71229, 10313, 19559, 11216, 68592], function () {
          return (function (a) {
            return e((e.s = a));
          })(26445);
        }),
          e.O();
      },
    ]);
})();
