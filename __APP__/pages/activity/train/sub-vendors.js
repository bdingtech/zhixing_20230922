!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [24945],
    {
      17782: function (e, t, n) {
        n.d(t, {
          CD: function () {
            return C;
          },
          Gv: function () {
            return h;
          },
          J9: function () {
            return g;
          },
          PL: function () {
            return P;
          },
          PM: function () {
            return v;
          },
          PS: function () {
            return a;
          },
          Qp: function () {
            return o;
          },
          S$: function () {
            return m;
          },
          S4: function () {
            return f;
          },
          XE: function () {
            return u;
          },
          Y2: function () {
            return Z;
          },
          bA: function () {
            return l;
          },
          bb: function () {
            return i;
          },
          dJ: function () {
            return p;
          },
          dr: function () {
            return d;
          },
          r$: function () {
            return c;
          },
          wU: function () {
            return s;
          },
        });
        var r = n(17377),
          c = (0, r.ZP)({
            serviceCode: "14593",
            channel: "",
            path: "FinishVipCredit",
            correctVersion: "32",
          }),
          o = (0, r.ZP)({
            serviceCode: "14593",
            channel: "",
            path: "AttendanceDay",
            correctVersion: "32",
          }),
          i = (0, r.ZP)({
            serviceCode: "14593",
            channel: "",
            path: "GetAttendanceConData",
            correctVersion: "32",
          }),
          a = (0, r.ZP)({
            serviceCode: "17679",
            channel: "",
            path: "launchActivityOn2020StuFreeVip",
          }),
          s = (0, r.ZP)({
            serviceCode: "17679",
            channel: "",
            path: "getStatusOn2020StuFreeVip",
          }),
          u = (0, r.ZP)({
            serviceCode: "17679",
            channel: "",
            path: "assistOn2020StuFreeVip",
          }),
          p = (0, r.ZP)({
            serviceCode: "17679",
            channel: "",
            path: "updateSchoolOn2020StuFreeVip",
          }),
          d = (0, r.ZP)({
            serviceCode: "17679",
            channel: "",
            path: "receiveCardOn2020StuFreeVip",
          }),
          l = (0, r.ZP)({
            serviceCode: "17679",
            channel: "",
            path: "get2020ZtripVIPCouponShareInfo",
          }),
          h = (0, r.ZP)({
            serviceCode: "17679",
            channel: "",
            path: "get2020ZtripVIPCouponShareKey",
          }),
          f = (0, r.ZP)({
            serviceCode: "17679",
            channel: "",
            path: "assist2020ZtripVIPCouponShare",
          }),
          Z = (0, r.ZP)({ serviceCode: "22522", path: "useCoupon" }),
          v = (0, r.ZP)({ serviceCode: "22522", path: "login" }),
          C = (0, r.ZP)({ serviceCode: "22522", path: "getCouponUseRecord" }),
          g = (0, r.ZP)({
            serviceCode: "17679",
            path: "getActivityInfoOn2020PrivateGroup",
          }),
          m = (0, r.ZP)({
            serviceCode: "17679",
            path: "bindZtripWechatCorpGroupSource",
          }),
          P = (0, r.ZP)({
            serviceCode: "17679",
            path: "addZtripUserLocationRecord",
          });
      },
      74927: function (e, t, n) {
        var r = n(79910),
          c = n(92954),
          o = n.n(c);
        t.Z = {
          data: {},
          onLoad: function (e) {
            var t = decodeURIComponent(r.Z.stringifyQuery(e));
            o().reLaunch({
              url: "/pages/activity/train/speedassistV2/index?".concat(t),
            });
          },
        };
      },
      69589: function (e, t, n) {
        var r = n(79301),
          c = n(95308),
          o = n(90129),
          i = n(52500),
          a = n(92954),
          s = n.n(a),
          u = n(71515),
          p = n(49120),
          d = n(17782),
          l = n(48813);
        t.Z = i.default.memo(function (e) {
          var t = e.closeModal,
            n = e.text,
            a = e.btnExposureUbtTrace,
            h = e.btnClickUbtTrace,
            f = (0, i.useState)(""),
            Z = (0, o.Z)(f, 2),
            v = Z[0],
            C = Z[1],
            g = (0, i.useCallback)(
              function () {
                console.log("点击一键加入智行福利群"),
                  console.log("groupId", v),
                  v
                    ? "function" == typeof h && h()
                    : (0, p.showToast)("未配置链接");
              },
              [v, h]
            );
          return (
            (0, i.useEffect)(
              function () {
                (function () {
                  var e = (0, c.Z)(
                    (0, r.Z)().mark(function e() {
                      var t;
                      return (0, r.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (0, p.showLoading)(),
                                  (e.next = 4),
                                  (0, d.J9)({ area: "vip" })
                                );
                              case 4:
                                1 === (t = e.sent).resultCode
                                  ? (C(t.groupId), (0, p.hideLoading)())
                                  : s().showToast({
                                      title: "网络错误，请稍后重试",
                                      icon: "none",
                                      duration: 1500,
                                    }),
                                  (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(0)),
                                  console.log(e.t0, "err");
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 8]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()(),
                  "function" == typeof a && a();
              },
              [a]
            ),
            (0, l.BX)(u.View, {
              className: "train-welfare-group-modal",
              children: [
                (0, l.tZ)(u.View, { className: "shade-box" }),
                (0, l.BX)(u.View, {
                  className: "pop-botm pop-qrcode",
                  children: [
                    (0, l.tZ)(u.View, {
                      className: "icon-closed",
                      id: "AeFs",
                      onClick: t,
                    }),
                    (0, l.BX)(u.View, {
                      className: "pop-qrcode-hd",
                      children: [
                        (0, l.tZ)("image", {
                          src: "https://images3.c-ctrip.com/zt/activity/20220223-ztrip-train-welfare-group/tit-zhyb.png",
                          className: "tit",
                        }),
                        (0, l.BX)(u.View, {
                          className: "txt",
                          children: [
                            "加入智行福利群，即得",
                            (0, l.tZ)(u.Text, {
                              className: "torage",
                              children: n,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.BX)(u.View, {
                      className: "pop-qrcode-bd joinGroup",
                      id: "AeFt",
                      onClick: g,
                      children: [
                        (0, l.tZ)("image", {
                          src: "https://images3.c-ctrip.com/ztrip/2020LU/2022-02/qp.png",
                          className: "button",
                        }),
                        (0, l.tZ)("image", {
                          src: "https://images3.c-ctrip.com/ztrip/2020LU/2022-02/sz.png",
                          className: "finger",
                        }),
                        (0, l.tZ)(u.View, {
                          className: "chat-group-plugin",
                          children: (0, l.tZ)("chatGroupPlugin", {
                            url: v,
                            paddingStyle: 10,
                            contactText: "",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        });
      },
    },
  ]);
})();
