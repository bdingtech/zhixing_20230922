!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [12751],
      {
        40141: function (e, r, t) {
          var o,
            a = t(32180),
            n = t(79301),
            s = t(95308),
            i = t(57042),
            u = t(24460),
            c = t(21867),
            f = t(86066),
            m = (t(52500), t(81957)),
            g = t(96158),
            d = t(97939),
            l = t(49120),
            p = t(74867),
            b = t(43261),
            v =
              (0, m.h)(!1, { usePageWrapper: !0 })(
                (o = (function (e) {
                  (0, c.Z)(t, e);
                  var r = (0, f.Z)(t);
                  function t(e) {
                    var o;
                    return (
                      (0, i.Z)(this, t),
                      ((o = r.call(this, e)).state = {
                        mobile: "",
                        mobileCode: "",
                        userName: "",
                        password: "",
                        registerKey: "",
                      }),
                      (o.btnName = "完成注册"),
                      o
                    );
                  }
                  return (
                    (0, u.Z)(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this.$instance.router.params || {},
                            r = e.mobile,
                            t = e.mobileCode,
                            o = e.userName,
                            a = e.password,
                            n = e.registerKey;
                          this.setState({
                            mobile: r,
                            mobileCode: t,
                            userName: o,
                            password: a,
                            registerKey: n,
                          });
                        },
                      },
                      {
                        key: "onSubmit",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, n.Z)().mark(function e(r) {
                              var t, o;
                              return (0, n.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = this.state.registerKey),
                                          (0, l.showLoading)(),
                                          (e.prev = 2),
                                          (e.next = 5),
                                          (0, d.Dd)({
                                            registerKey: t,
                                            verificationCode: r,
                                          })
                                        );
                                      case 5:
                                        if (
                                          !(o = e.sent) ||
                                          2 === o.registerStatus
                                        ) {
                                          e.next = 8;
                                          break;
                                        }
                                        throw new Error(o.resultMessage);
                                      case 8:
                                        (0, l.hideLoading)(),
                                          p.Z.commonDebugTrace(
                                            "港澳台注册12306第二步-短信核验成功"
                                          ),
                                          this.confirmBack(),
                                          (e.next = 18);
                                        break;
                                      case 13:
                                        (e.prev = 13),
                                          (e.t0 = e.catch(2)),
                                          (0, l.hideLoading)(),
                                          (0, l.showToast)(
                                            e.t0.Message ||
                                              e.t0.message ||
                                              "网络错误，请稍候重试~"
                                          ),
                                          p.Z.commonDebugTrace({
                                            step: "港澳台注册12306第二步-短信核验失败",
                                            err: e.t0,
                                          });
                                      case 18:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 13]]
                              );
                            })
                          );
                          return function (r) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getMsgCode",
                        value: function () {
                          var e = this.state,
                            r = e.mobile,
                            t = e.mobileCode,
                            o = e.userName,
                            a = e.password;
                          return (0, g.cF)({
                            userName: o,
                            password: a,
                            mobileCode: t,
                            mobileNo: r,
                          });
                        },
                      },
                    ]),
                    t
                  );
                })(b.Z))
              ) || o;
          Page(
            (0, a.createPageConfig)(
              v,
              "pages/12306/register/sendSms/sendSms",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "信息验证",
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [37013, 19559, 11216, 68592], function () {
          return (function (r) {
            return e((e.s = r));
          })(40141);
        }),
          e.O();
      },
    ]);
})();
