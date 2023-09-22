!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [25487],
    {
      58312: function (t, n, o) {
        var e,
          i = o(32180),
          a = o(57042),
          r = o(24460),
          c = o(21867),
          l = o(86066),
          u = o(52500),
          s = o(92954),
          p = o.n(s),
          m = o(71515),
          f = o(79792),
          h = o(3205),
          d = o(81957),
          g = o(81341),
          y = o(58676),
          v = o(79910),
          C = o(2809),
          P = o(48813),
          k =
            (0, d.h)()(
              (e = (function (t) {
                (0, c.Z)(o, t);
                var n = (0, l.Z)(o);
                function o(t) {
                  return (0, a.Z)(this, o), n.call(this, t);
                }
                return (
                  (0, r.Z)(o, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var t = this,
                          n = this.$router.params.platformPrivacyContractName;
                        this.platformPrivacyContractName = decodeURIComponent(
                          n || ""
                        );
                        var o =
                          f.default.isWechat &&
                          v.Z.compareVersion(C.ZP.SDKVersion, "2.17.3") < 0;
                        f.default.isBaidu || o
                          ? this.showCommonDialog({
                              title: "软件服务协议",
                              maskClose: !1,
                              content: function () {
                                return t.renderPolicyContent();
                              },
                              buttonName:
                                "同意并继续(若不同意请点击右上角关闭按钮)",
                              className: "policy-pop",
                              onButtonClick: function () {
                                p().navigateBack(), g.v9.set(!0);
                              },
                            })
                          : this.showMultiButtonDialog({
                              title: "软件服务协议",
                              content: function () {
                                return t.renderPolicyContent();
                              },
                              leftButtonName: "不同意",
                              rightButtonName: "同意并继续",
                              rightButtonOpenType: n
                                ? "agreePrivacyAuthorization"
                                : "",
                              maskClose: !1,
                              onLeftButtonClick: function () {
                                p().exitMiniProgram();
                              },
                              onRightButtonClick: function () {
                                p().navigateBack(), g.v9.set(!0);
                              },
                            });
                      },
                    },
                    {
                      key: "renderPolicyContent",
                      value: function () {
                        var t = this;
                        return (0, P.BX)(m.View, {
                          className: "mini-policy-pop",
                          children: [
                            (0, P.BX)(m.View, {
                              children: [
                                "为了提供更好的旅行服务，在使用我们的产品前，请您阅读完整版的",
                                (0, P.tZ)(m.Text, {
                                  className: "color-primary",
                                  id: "ACBL",
                                  onClick: function () {
                                    return t.goPersonalPage(!1);
                                  },
                                  children: "《软件服务协议》",
                                }),
                                this.platformPrivacyContractName
                                  ? (0, P.BX)(P.HY, {
                                      children: [
                                        (0, P.tZ)(P.HY, { children: "、" }),
                                        " ",
                                        (0, P.tZ)(m.Text, {
                                          className: "color-primary",
                                          id: "ACBM",
                                          onClick: p().openPrivacyContract,
                                          children:
                                            this.platformPrivacyContractName,
                                        }),
                                      ],
                                    })
                                  : "",
                                "和",
                                (0, P.tZ)(m.Text, {
                                  className: "color-primary",
                                  id: "ACBM",
                                  onClick: function () {
                                    return t.goPersonalPage(!0);
                                  },
                                  children: "《隐私权政策》",
                                }),
                                "的所有条款，包括：",
                              ],
                            }),
                            (0, P.tZ)(m.Text, {
                              children:
                                "1. 为向您提供包括账户注册、旅游服务预订、交易支付在内的基本功能，我们可能会基于具体业务场景收集您的个人信息；\n2. 我们会基于您的授权来为您提供更好的旅行服务，这些授权包括定位（为您精确推荐附近的优质旅游资源）、设备信息（为保障账户、交易安全及补偿GPS信号不佳时的定位数据，获取包括IMEI，IMSI在内的设备标识符）、存储空间（减少重复加载，节省您的流量），您有权拒绝或取消这些授权；\n3. 我们会基于先进的技术和管理措施保护您个人信息的安全；\n4. 未经您的同意，我们不会将您的个人信息共享给第三方。",
                            }),
                          ],
                        });
                      },
                    },
                    {
                      key: "goPersonalPage",
                      value: function (t) {
                        var n =
                            "kyb" === f.default.jetpack
                              ? "5102"
                              : f.default.isTieyou
                              ? "1002"
                              : "1003",
                          o = t
                            ? "https://pages.c-ctrip.com/ztrip/document/privacypolicyzx.html?appid=".concat(
                                n,
                                "&noticetype=1&title=隐私协议&from_native_page=1"
                              )
                            : "https://pages.c-ctrip.com/ztrip/document/privacypolicyzx.html?appid=".concat(
                                n
                              );
                        h.Z.twebview({ data: { url: o } });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var t = this;
                        return (0, P.tZ)(m.View, {
                          children: (0, P.tZ)(y.Z, {
                            ref: function (n) {
                              t.onDialogAttach(n);
                            },
                          }),
                        });
                      },
                    },
                  ]),
                  o
                );
              })(u.Component))
            ) || e;
        Page(
          (0, i.createPageConfig)(
            k,
            "pages/miniPolicy/miniPolicy",
            { root: { cn: [] } },
            {
              navigationBarTitleText: "软件服务协议",
              navigationBarTextStyle: "white",
              navigationBarBackgroundColor: "#222",
              backgroundColorTop: "#222222",
              backgroundColorBottom: "#fff",
            } || {}
          )
        );
      },
    },
    function (t) {
      t.O(0, [19559, 11216, 68592], function () {
        return (function (n) {
          return t((t.s = n));
        })(58312);
      }),
        t.O();
    },
  ]);
})();
