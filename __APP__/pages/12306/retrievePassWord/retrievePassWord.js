!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/9cf383cff2ba8ce0456965e69ba11b63.js"),
    require("../sub-common/3edb2b96731d94d93a96699eab306b50.js"),
    require("../sub-common/df4e17a6370f960d660d521bbd32cf3a.js"),
    require("../sub-common/2134ee5804fe59fe466b0b63fc7acddc.js"),
    require("../sub-common/88207e971f98eff8a3e10f6ee2b5063b.js"),
    require("../sub-common/d3422b412cb888582adccda3ed6c55c4.js"),
    require("../sub-common/30e2515ebd297ee708f98fe67f15a40b.js"),
    require("../sub-common/789d0e61f3340fac4da62181ad8a5446.js"),
    require("../sub-common/40f2b7bd8efebebc05ab739cbbb4a01d.js"),
    require("../sub-common/342bdcbe80e808fa7b62443e18d9142f.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [17209],
      {
        93785: function (e, r, t) {
          var n = t(32180),
            a = t(57042),
            o = t(24460),
            s = t(81876),
            c = t(21867),
            i = t(86066),
            u = t(52500),
            f = t(18783),
            d = t(71515),
            m = t(81957),
            b = t(65573),
            p = t(298),
            l = t(45023),
            g = t(79038),
            Z = t(59772),
            v = t(46112),
            h = t(14665),
            y = (function (e) {
              (0, c.Z)(t, e);
              var r = (0, i.Z)(t);
              function t() {
                return (0, a.Z)(this, t), r.apply(this, arguments);
              }
              return (0, o.Z)(t);
            })(v.Z);
          (0, l.Z)(
            y,
            "store",
            (0, p.Z)((0, p.Z)({}, (0, g.Z)((0, Z.Z)(y), "store", y)), {
              models: (0, p.Z)(
                (0, p.Z)({}, (0, g.Z)((0, Z.Z)(y), "store", y).models || {}),
                {},
                { pasReaderModel: h.Z }
              ),
            })
          );
          var C,
            w = t(79301),
            P = t(95308),
            T = t(45742),
            k = t(92954),
            N = t(88424),
            R = t(94782),
            j = (function () {
              var e = (0, P.Z)(
                (0, w.Z)().mark(function e() {
                  var r;
                  return (0, w.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), (0, R.w)(y);
                        case 2:
                          (r =
                            y.getState().pasReaderModel
                              .filterCommonPassenger)[0] && q(r[0]);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            q = function (e) {
              var r = {
                $PassportCodeTypeRef: e.IdentityType,
                $IdNumberInputRef: e.IdentityNo,
                $UserNameInputRef: e.CNName,
                $MobileInputRef: e.Mobile,
              };
              Object.keys(r).forEach(function (e) {
                y.getPage().$RegisterForm.setFormVal(e, r[e]);
              });
            },
            x = (function () {
              var e = (0, P.Z)(
                (0, w.Z)().mark(function e(r) {
                  var t, n, a;
                  return (0, w.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = r.formValue),
                              (e.prev = 1),
                              (e.next = 4),
                              (0, N.a2)(
                                {
                                  idCardType: t.seletedPassportType.realType,
                                  idCardNo: t.idNumber,
                                  userName: t.userName,
                                  mobile: t.mobile,
                                  method:
                                    "pc" === y.getPage().resetType ? "sms" : "",
                                },
                                y.getPage()
                              )
                            );
                          case 4:
                            (n = e.sent),
                              (a = n.res),
                              k.eventCenter.trigger(
                                T.n.RETRIEVE_PASSWORD_SUCCESS,
                                { account: a._userName, password: a._password }
                              ),
                              y.showCommonDialog({
                                content: "重置密码成功，请重新登录~",
                                onButtonClick: function () {
                                  y.confirmBack({
                                    account: a._userName,
                                    password: a._password,
                                  });
                                },
                              }),
                              (e.next = 14);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(1)),
                              console.log("handleRetrieve err", e.t0),
                              e.t0.code === N.z0.actionFail &&
                                y.showCommonDialog({ content: e.t0.message });
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 10]]
                  );
                })
              );
              return function (r) {
                return e.apply(this, arguments);
              };
            })(),
            S = t(21563),
            B = t(88016),
            I = t(48813),
            $ =
              (0, m.h)(!1, { usePageWrapper: !0 })(
                (C = (function (e) {
                  (0, c.Z)(t, e);
                  var r = (0, i.Z)(t);
                  function t(e) {
                    var n;
                    return (
                      (0, a.Z)(this, t),
                      ((n = r.call(this, e)).pageId = "10650085962"),
                      (n.pageTitle = "找回密码"),
                      (n.disablePageBgStyle = !0),
                      (n.pageRootClassName = "train-12306-retrieve-page"),
                      (n.store = y.create((0, s.Z)(n)).store),
                      n
                    );
                  }
                  return (
                    (0, o.Z)(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.setPageData(), j();
                        },
                      },
                      {
                        key: "setPageData",
                        value: function () {
                          var e = this.$instance.router.params || {},
                            r = e.mobile,
                            t = e.resetType;
                          (this.mobile = r || f.ZP.userName),
                            (this.resetType = t);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            r = (this.$instance.router.params || {}).resetType;
                          return (0, I.BX)(b.zt, {
                            store: this.store,
                            children: [
                              (0, I.tZ)(S.Z, {
                                onPsgChange: q,
                                renderHeaderView: function () {
                                  return "pc" === r
                                    ? (0, I.tZ)(d.View, {
                                        className: "warn-red p",
                                        children:
                                          "您的账号密码好久没有修改了，为降低安全风险，请重新设置密码后再登录",
                                      })
                                    : null;
                                },
                              }),
                              (0, I.tZ)(B.Z, {
                                confirmText: "开始找回",
                                passPortTypeSelectorDisabled: !0,
                                onRef: function (r) {
                                  return (e.$RegisterForm = r);
                                },
                                handleConfirm: x,
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    t
                  );
                })(u.default.Component))
              ) || C;
          Page(
            (0, n.createPageConfig)(
              $,
              "pages/12306/retrievePassWord/retrievePassWord",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "找回密码",
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
        e.O(
          0,
          [
            37013, 61094, 26450, 52593, 74731, 10560, 11748, 83067, 60579,
            50127, 77585, 31472, 85379, 43412, 5207, 36250, 1709, 98398, 19559,
            11216, 68592,
          ],
          function () {
            return (function (r) {
              return e((e.s = r));
            })(93785);
          }
        ),
          e.O();
      },
    ]);
})();
