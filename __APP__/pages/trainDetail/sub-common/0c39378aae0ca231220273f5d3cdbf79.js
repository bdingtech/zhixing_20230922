!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [92387],
    {
      75677: function (e, t, i) {
        var a = i(92954),
          r = i.n(a),
          n = i(52500),
          o = i(71515),
          s = i(34229),
          c = i(79910),
          l = i(79792),
          d = i(72347),
          m = i(48813),
          p = [
            {
              icon: "https://images3.c-ctrip.com/ztrip/train_xie/2021-12/icon_bzcp.png",
              content: "确认后立即出票，保障出行",
            },
            {
              icon: "https://images3.c-ctrip.com/ztrip/train_xie/2021-12/icon_zgsqp.png",
              content: "出票后，免费最高速帮您改签抢原方案",
            },
          ],
          u = l.default.isTieyou
            ? "https://images3.c-ctrip.com/ztrip/train_xie/2021-12/img_ip_jj_ty.png"
            : "https://images3.c-ctrip.com/ztrip/train_xie/2021-12/img_ip_jj_zx.png";
        t.Z = n.default.memo(function (e) {
          var t = e.visible,
            i = e.orderNumber,
            a = void 0 === i ? "" : i,
            l = e.data,
            h = void 0 === l ? {} : l,
            b = e.onCancel,
            _ = void 0 === b ? function () {} : b,
            v = e.onClose,
            N = void 0 === v ? function () {} : v,
            w = e.smartHoldSeatDetail,
            g = e.ubtTrace,
            f = void 0 === g ? function () {} : g,
            y = e.expKeyName,
            T = void 0 === y ? "" : y,
            Z = e.cliKeyName,
            x = void 0 === Z ? "" : Z,
            S = e.mobile,
            z = void 0 === S ? "" : S,
            A = e.allPas,
            V = void 0 === A ? [] : A,
            C = e.userAuth12306Status,
            k = e.orderInfo,
            H = r().getCurrentPages(),
            B = H ? H.length : 1;
          (0, n.useEffect)(
            function () {
              var e;
              w &&
                t &&
                f(T, {
                  exposureType: "normal",
                  bizKey: "z_mini_ow_smart_seat_recommand_stay_show",
                  stayType: null == w ? void 0 : w.tripType,
                  orderid: a,
                  smartHoldSeatOrderNumber:
                    null == w || null === (e = w.holdSeatTrip) || void 0 === e
                      ? void 0
                      : e.smartHoldSeatOrderNumber,
                  inApplets: 1 == B ? "0" : "1",
                });
            },
            [w, t]
          );
          var I = h.title,
            O = void 0 === I ? "抢票不易，建议先出票保证出行" : I,
            X = h.header,
            K = void 0 === X ? "接受新车票，您可享受" : X,
            j = h.tips,
            P = void 0 === j ? p : j,
            R = h.cancelBtnName,
            D = void 0 === R ? "我再想想" : R;
          return (0, m.tZ)(s.ZtDrawer, {
            show: t,
            className: "smart-hold-seat-detail-pop",
            isShowClose: !1,
            drawerStyle: { borderRadius: "32rpx 32rpx 0 0" },
            children: (0, m.BX)(o.View, {
              className: "smart-hold-seat-detain-container",
              children: [
                (0, m.BX)(o.View, {
                  className: "smart-hold-seat-detail-header-bar",
                  children: [
                    (0, m.tZ)(o.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/train_xie/2021-12/icon_tc_gb.png",
                      className: "close-icon",
                      id: "AACA",
                      onClick: _,
                    }),
                    (0, m.tZ)(o.Image, { src: u, className: "head-icon" }),
                  ],
                }),
                (0, m.BX)(o.View, {
                  className: "smart-hold-seat-detail-content",
                  children: [
                    (0, m.tZ)(o.View, {
                      className: "smart-hold-seat-detail-head",
                      children: (0, m.tZ)(o.View, {
                        className: "title",
                        children: (0, m.tZ)(s.ZtRichText, {
                          nodes: c.Z.convertAppTextToHtmlStr(O),
                          space: "nbsp",
                        }),
                      }),
                    }),
                    (0, m.BX)(o.View, {
                      className: "detain-bd",
                      children: [
                        (0, m.tZ)(o.View, {
                          className: "detain-bd-tit",
                          children: K,
                        }),
                        (0, m.tZ)(o.View, {
                          className: "detain-bd-desc",
                          children: P.map(function (e, t) {
                            return (0,
                            m.BX)(o.View, { className: "detain-bd-desc-item", children: [(0, m.tZ)(o.Image, { src: e.icon, className: "detain-icon" }), (0, m.tZ)(o.View, { className: "detain-tip", children: (0, m.tZ)(s.ZtRichText, { nodes: c.Z.convertAppTextToHtmlStr(e.content), space: "nbsp" }) })] }, t);
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, m.BX)(o.View, {
                  className: "smart-hold-seat-detail-bottom",
                  children: [
                    (0, m.tZ)(o.View, {
                      className: "refuse-button btm-button",
                      id: "AACB",
                      onClick: function () {
                        var e;
                        f(x, {
                          bizKey: "z_mini_ow_smart_seat_recommand_stay_click",
                          stayType: null == w ? void 0 : w.tripType,
                          orderid: a,
                          smartHoldSeatOrderNumber:
                            null == w ||
                            null === (e = w.holdSeatTrip) ||
                            void 0 === e
                              ? void 0
                              : e.smartHoldSeatOrderNumber,
                          inApplets: 1 == B ? "0" : "1",
                          value: 0,
                        }),
                          _();
                      },
                      children: D,
                    }),
                    (0, m.tZ)(o.View, {
                      className: "confirm-button btm-button",
                      id: "AACC",
                      onClick: function () {
                        var e;
                        f(x, {
                          bizKey: "z_mini_ow_smart_seat_recommand_stay_click",
                          stayType: null == w ? void 0 : w.tripType,
                          orderid: a,
                          smartHoldSeatOrderNumber:
                            null == w ||
                            null === (e = w.holdSeatTrip) ||
                            void 0 === e
                              ? void 0
                              : e.smartHoldSeatOrderNumber,
                          inApplets: 1 == B ? "0" : "1",
                          value: 1,
                        }),
                          (0, d.E)({
                            orderNumber: a,
                            refuseCallback: N,
                            grabOrderInfo: {
                              mobile: z,
                              orderInfo: k,
                              originTicketInfo:
                                null == w ? void 0 : w.originTicketInfo,
                              userAuth12306Status: C,
                              allPas: V,
                            },
                          });
                      },
                      children: "抢原方案",
                    }),
                  ],
                }),
              ],
            }),
          });
        });
      },
    },
  ]);
})();
