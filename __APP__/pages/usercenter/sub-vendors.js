!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [59871],
    {
      59163: function (e, n, i) {
        i.d(n, {
          AT: function () {
            return y;
          },
          An: function () {
            return h;
          },
          C3: function () {
            return Z;
          },
          O: function () {
            return x;
          },
          OJ: function () {
            return b;
          },
          Oj: function () {
            return u;
          },
          VA: function () {
            return _;
          },
          Wc: function () {
            return P;
          },
          _O: function () {
            return l;
          },
          cA: function () {
            return s;
          },
          dD: function () {
            return w;
          },
          hi: function () {
            return m;
          },
          i8: function () {
            return p;
          },
          m3: function () {
            return a;
          },
          mT: function () {
            return v;
          },
          nt: function () {
            return o;
          },
          rK: function () {
            return c;
          },
          tb: function () {
            return d;
          },
          wb: function () {
            return V;
          },
          xQ: function () {
            return g;
          },
          xx: function () {
            return z;
          },
          yB: function () {
            return C;
          },
          z1: function () {
            return f;
          },
        });
        var t = i(17377),
          r = i(79792),
          a = (0, t.ZP)({
            serviceCode: "18903",
            channel: "",
            path: "getUserVipCreditTradeRecord",
          }),
          c = (0, t.ZP)({
            serviceCode: "20707",
            channel: "",
            path: "GetCreditDeductionExchangeRecords",
          }),
          o =
            ((0, t.ZP)({
              serviceCode: "20707",
              channel: "",
              path: "getCouponsPackage",
              correctVersion: "967",
            }),
            (0, t.ZP)({
              serviceCode: "20707",
              channel: "",
              path: "getShopDetailInfoV1",
              correctVersion: "967",
            })),
          s =
            ((0, t.ZP)({
              serviceCode: "19833",
              channel: "",
              path: "addInvoice",
              bu: "bus",
            }),
            (0, t.ZP)({
              serviceCode: "14593",
              channel: r.default.train_channel,
              path: "getUserVipCreditInfo",
              correctVersion: "709992",
            })),
          p = (0, t.ZP)({
            serviceCode: "20707",
            channel: "",
            path: "GetCreditDeductionProducts",
            correctVersion: "709992",
          }),
          u = (0, t.ZP)({
            serviceCode: "18903",
            channel: "",
            path: "getManualReceiveOrderCreditInfo",
            correctVersion: "709992",
          }),
          h = (0, t.ZP)({
            serviceCode: "18903",
            channel: "",
            path: "manualReceiveCredit",
            correctVersion: "709992",
          }),
          g = (0, t.ZP)({
            serviceCode: "20707",
            channel: "",
            path: "buyShopFromVip",
            correctVersion: "709992",
          }),
          l = (0, t.ZP)({
            serviceCode: "18758",
            channel: r.default.train_channel,
            path: "getGuideToLineInfo",
          }),
          d = (0, t.ZP)({
            serviceCode: "18497",
            path: "wechatGetVipDetailInfo",
            correctVersion: "709992",
          }),
          m = (0, t.ZP)({
            serviceCode: "18646",
            path: "wechatGetVipDetailBuyPackage",
            correctVersion: "710014",
          }),
          _ = (0, t.ZP)({
            serviceCode: "18646",
            path: "wechatGetVipRightProcess",
            correctVersion: "709992",
          }),
          f = (0, t.ZP)({
            serviceCode: "18497",
            path: "getVipCenterActivityInfo",
            correctVersion: "709992",
          }),
          y = (0, t.ZP)({
            serviceCode: "18497",
            path: "receiveVipUnionCard",
            correctVersion: "709992",
          }),
          x = (0, t.ZP)({
            serviceCode: "18497",
            path: "getRenewCancelVipOrderInfo",
            correctVersion: "709992",
          }),
          v = (0, t.ZP)({
            serviceCode: "14593",
            path: "cancelVipCard",
            correctVersion: "709992",
          }),
          C = (0, t.ZP)({
            serviceCode: "18646",
            path: "wechatGetVipRightDetail",
            correctVersion: "709992",
            channel: r.default.train_channel,
          }),
          V = (0, t.ZP)({
            serviceCode: "14593",
            path: "VipDiscloseNps",
            channel: r.default.train_channel,
          }),
          Z = (0, t.ZP)({
            serviceCode: "14593",
            path: "VipNpsReport",
            channel: r.default.train_channel,
          }),
          b = (0, t.ZP)({
            serviceCode: "18497",
            channel: "",
            path: "getWechatVipCenterInfo",
          }),
          z = (0, t.ZP)({
            serviceCode: "14784",
            path: "GetHotelSimpleInfoList",
          }),
          w = (0, t.ZP)({
            serviceCode: "14593",
            channel: r.default.train_channel,
            path: "OpenVipCenterCard",
            correctVersion: "32",
          }),
          P =
            ((0, t.ZP)({
              serviceCode: "18497",
              channel: "",
              path: "getWechatMinVipDetailInfo",
              correctVersion: "38",
            }),
            (0, t.ZP)({
              serviceCode: "18497",
              channel: "",
              path: "receiveHotThirdVip",
            }));
        (0, t.ZP)({ serviceCode: "14593", channel: "", path: "getVipRecords" }),
          (0, t.ZP)({ serviceCode: "22522", channel: "", path: "login" });
      },
      41760: function (e, n, i) {
        i.d(n, {
          Bs: function () {
            return r;
          },
          ZB: function () {
            return p;
          },
          Zo: function () {
            return t;
          },
          fJ: function () {
            return c;
          },
          qA: function () {
            return s;
          },
          tI: function () {
            return o;
          },
          zI: function () {
            return a;
          },
        });
        var t = {
            0: "putong",
            10: "silver",
            20: "gold",
            30: "platinum",
            40: "diamond",
          },
          r = [
            { grade: 0, name: "普通" },
            { grade: 10, name: "白银" },
            { grade: 20, name: "黄金" },
            { grade: 30, name: "铂金" },
            { grade: 40, name: "黑钻" },
          ],
          a = {
            0: "https://images3.c-ctrip.com/ztrip/train_bin/9yue/huiyuankapian/img_tag_baiyin_weijiesuo@3x.png",
            10: "https://images3.c-ctrip.com/ztrip/train_bin/9yue/huiyuankapian/img_tag_baiyin_weijiesuo@3x.png",
            20: "https://images3.c-ctrip.com/ztrip/train_bin/9yue/huiyuankapian/img_tag_huangjin_weijiesuo@3x.png",
            30: "https://images3.c-ctrip.com/ztrip/train_bin/9yue/huiyuankapian/img_tag_bojin_weijiesuo@3x.png",
            40: "https://images3.c-ctrip.com/ztrip/train_bin/9yue/huiyuankapian/img_tag_heizuan_weijiesuo@3x.png",
          },
          c = {
            0: "https://images3.c-ctrip.com/ztrip/train_bin/9yue/huiyuankapian/img_tag_putong_dangqian@3x.png",
            10: "https://images3.c-ctrip.com/ztrip/train_bin/9yue/huiyuankapian/img_tag_baiyin_dangqian@3x.png",
            20: "https://images3.c-ctrip.com/ztrip/train_bin/9yue/huiyuankapian/img_tag_huangjin_dangqian@3x.png",
            30: "https://images3.c-ctrip.com/ztrip/train_bin/9yue/huiyuankapian/img_tag_bojin_dangqian@3x.png",
            40: "https://images3.c-ctrip.com/ztrip/train_bin/9yue/huiyuankapian/img_tag_heizuan_dangqian@3x.png",
          },
          o = {
            0: "https://images3.c-ctrip.com/ztrip/train_bin/6yue/huiyuan/img_logo_putong@3x.png",
            10: "https://images3.c-ctrip.com/ztrip/train_bin/6yue/huiyuan/img_logo_baiyin@3x.png",
            20: "https://images3.c-ctrip.com/ztrip/train_bin/6yue/huiyuan/img_logo_huangjin@3x.png",
            30: "https://images3.c-ctrip.com/ztrip/train_bin/6yue/huiyuan/img_logo_bojin@3x.png",
            40: "https://images3.c-ctrip.com/ztrip/train_bin/6yue/huiyuan/img_logo_heizuan@3x.png",
          },
          s = {
            0: "#0080ff",
            10: "#628796",
            20: "#9c580a",
            30: "#6158ff",
            40: "#fbdb9b",
          },
          p = {
            0: "https://images3.c-ctrip.com/ztrip/train_bin/ll/img_xcx_hyhz_pt2@3x.png",
            10: "https://images3.c-ctrip.com/ztrip/train_bin/ll/img_xcx_hyhz_by2@3x.png",
            20: "https://images3.c-ctrip.com/ztrip/train_bin/22-09/xcx/img_xcx_hyhz_hj@3x.png",
            30: "https://images3.c-ctrip.com/ztrip/train_bin/22-09/xcx/img_xcx_hyhz_bj@3x.png",
            40: "https://images3.c-ctrip.com/ztrip/train_bin/22-09/xcx/img_xcx_hyhz_hz@3x.png",
          };
      },
      9196: function (e, n, i) {
        var t = i(79301),
          r = i(95308),
          a = i(90129),
          c = i(52500),
          o = i(92954),
          s = i.n(o),
          p = i(71515),
          u = i(41760),
          h = i(48813);
        n.Z = function (e) {
          var n = e.changeGrade,
            i = e.displayGrade,
            o = void 0 === i ? 0 : i,
            g = e.showArrow,
            l = void 0 !== g && g,
            d = (0, c.useState)(0),
            m = (0, a.Z)(d, 2),
            _ = m[0],
            f = m[1],
            y = s().createSelectorQuery();
          (0, c.useEffect)(function () {
            s().nextTick(function () {
              try {
                y.select("#progress-line-10")
                  .boundingClientRect()
                  .exec(
                    (function () {
                      var e = (0, r.Z)(
                        (0, t.Z)().mark(function e(n) {
                          var i;
                          return (0, t.Z)().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  f(
                                    (null == n ||
                                    null === (i = n[0]) ||
                                    void 0 === i
                                      ? void 0
                                      : i.width) || 62
                                  );
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (n) {
                        return e.apply(this, arguments);
                      };
                    })()
                  );
              } catch (e) {
                console.log(e);
              }
            });
          }, []);
          var x = (_ * o) / 10;
          return (0, h.BX)(p.View, {
            className: "member-page-grade-progress",
            children: [
              (0, h.BX)(p.View, {
                className: "flex grade-progress-line",
                children: [
                  u.Bs.map(function (e, i) {
                    return (0, h.BX)(
                      p.View,
                      {
                        className: "flex-align-items-center",
                        id: "progress-line-".concat(e.grade),
                        children: [
                          (0, h.tZ)(p.View, {
                            className: "round",
                            id: "ACAj",
                            onClick: function () {
                              return n(e.grade);
                            },
                          }),
                          i < 4 &&
                            (0, h.tZ)(p.View, { className: "round-line" }),
                        ],
                      },
                      "progress_".concat(e.grade)
                    );
                  }),
                  (0, h.BX)(p.View, {
                    className: "flex-align-items-center active-progress",
                    children: [
                      (0, h.tZ)(p.View, {
                        className: "active-line",
                        style: {
                          width: "".concat(x, "px"),
                          transition: "all ease-in-out .3s;",
                        },
                      }),
                      (0, h.tZ)(p.View, {
                        className: "active-round",
                        style: {
                          left: "".concat(x - 3, "px"),
                          transition: "all ease-in-out .3s;",
                        },
                      }),
                      (0, h.tZ)(p.View, {
                        className: "round",
                        style: "opacity: 1",
                      }),
                    ],
                  }),
                  l &&
                    (0, h.tZ)(p.Image, {
                      style: {
                        left: "".concat(x - 12, "px"),
                        transition: "all ease-in-out .3s;",
                      },
                      className: "progress-arrow",
                      src: "https://images3.c-ctrip.com/ztrip/train_bin/22-08/hyzx/img_hyzx_qy_jt@3x.png",
                    }),
                ],
              }),
              (0, h.tZ)(p.View, {
                className: "flex",
                children: u.Bs.map(function (e) {
                  return (0, h.tZ)(
                    p.View,
                    {
                      className: "progress-name ".concat(
                        o === e.grade ? "active" : ""
                      ),
                      id: "ACAk",
                      onClick: function () {
                        return n(e.grade);
                      },
                      children: e.name,
                    },
                    "progress_".concat(e.name)
                  );
                }),
              }),
            ],
          });
        };
      },
    },
  ]);
})();
