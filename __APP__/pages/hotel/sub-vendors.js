!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [89607],
    {
      30071: function (e, t, i) {
        i.d(t, {
          C6: function () {
            return o;
          },
          L6: function () {
            return c;
          },
          Xn: function () {
            return a;
          },
          ce: function () {
            return r;
          },
          gg: function () {
            return l;
          },
        }),
          i(92954);
        var n = i(98920),
          a =
            (n.Z.getInstance("HOTEL_LIST_STORE"),
            n.Z.getInstance("HOTEL_KEYWORD_SEARCH_HISTORY")),
          c = n.Z.getInstance("HOTEL_BOOKING_STORE"),
          l = n.Z.getInstance("HOTEL_SELECT_COUPON_STORE"),
          r = n.Z.getInstance("HOTEL_ORDER_PAGE_STORE"),
          o = n.Z.getInstance("HOTEL_SWAN_CONFIG_STORE");
      },
      47885: function (e, t, i) {
        var n = i(52500),
          a = i(71515),
          c = i(79792),
          l = i(62753),
          r = i(48813),
          o = {
            zx: "https://images3.c-ctrip.com/ztrip/hotel/2022/3/popup-hj-zx@3x.webp",
            ty: "https://images3.c-ctrip.com/ztrip/hotel/2022/3/popup-hj-ty@3x.webp",
          };
        t.Z = n.default.memo(function (e) {
          var t = e.show,
            i = e.onClose;
          return (0,
          r.tZ)(l.Z, { extraClass: "bargain", show: t, onClose: i, isWhite: !0, children: (0, r.BX)(a.View, { className: "bg-wrap", children: [(0, r.tZ)(a.Image, { className: "bg", src: o[c.default.zxTyStr], mode: "widthFix" }), (0, r.tZ)(a.View, { className: "btn btn-primary", id: "AXBj", onClick: i, children: "即刻体验" })] }) });
        });
      },
      87186: function (e, t, i) {
        var n = i(52500),
          a = i(92954),
          c = i.n(a),
          l = i(34229),
          r = i(71515),
          o = i(48813),
          s = function (e) {
            c().makePhoneCall({ phoneNumber: e });
          };
        t.Z = n.default.memo(function (e) {
          var t,
            i,
            a = e.list,
            c = e.show,
            d = e.onClose;
          return null != a &&
            null !== (t = a.details) &&
            void 0 !== t &&
            t.length
            ? (0, o.tZ)(l.ZtDrawer, {
                className: "consume-packages",
                show: c,
                onWrapClose: d,
                isDefineHead: !0,
                children: (0, o.BX)(r.View, {
                  className: "packages-wrap",
                  children: [
                    (0, o.BX)(r.View, {
                      className: "top-wrap",
                      children: [
                        (0, o.tZ)(r.Text, {
                          className: "ifont-closed iconfont",
                          id: "AXBk",
                          onClick: d,
                        }),
                        (0, o.tZ)(r.View, {
                          className: "title",
                          children: "入住即送",
                        }),
                      ],
                    }),
                    (0, o.tZ)(r.View, {
                      className: "content",
                      children: (0, o.BX)(r.ScrollView, {
                        scrollY: !0,
                        scrollWithAnimation: !0,
                        className: "content-scrollview",
                        children: [
                          (0, o.BX)(r.View, {
                            className: "pack",
                            children: [
                              (0, o.tZ)(r.View, {
                                className: "p-title",
                                children: "入住即送",
                              }),
                              (0, o.tZ)(r.View, {
                                className: "desc",
                                children: a.detailNameStr,
                              }),
                            ],
                          }),
                          null == a || null === (i = a.details) || void 0 === i
                            ? void 0
                            : i.map(function (e, t) {
                                return (0, o.tZ)(
                                  n.default.Fragment,
                                  {
                                    children: e.consumePackageDetails.map(
                                      function (e, i) {
                                        var n = "".concat(t, "_").concat(i),
                                          a = e.priefName,
                                          c = e.receptionTimes,
                                          l = e.unsuitableTime,
                                          d = e.accessRule,
                                          m = e.appointType,
                                          u = e.bookingPhones,
                                          h = e.xDescription;
                                        return (0, o.BX)(
                                          r.View,
                                          {
                                            className: "pack",
                                            children: [
                                              (0, o.tZ)(r.View, {
                                                className: "p-title",
                                                children: a,
                                              }),
                                              (null == c ? void 0 : c.length) >
                                                0 &&
                                                (0, o.BX)(r.View, {
                                                  className: "desc",
                                                  children: [
                                                    "接待时间: ",
                                                    c.join(","),
                                                  ],
                                                }),
                                              l &&
                                                (0, o.BX)(r.View, {
                                                  className: "desc",
                                                  children: ["不可用日期: ", l],
                                                }),
                                              d &&
                                                (0, o.BX)(r.View, {
                                                  className: "desc",
                                                  children: ["获取方式: ", d],
                                                }),
                                              m &&
                                                (0, o.BX)(r.View, {
                                                  className: "desc",
                                                  children: ["预约规则: ", m],
                                                }),
                                              u &&
                                                (0, o.BX)(r.View, {
                                                  className: "desc",
                                                  children: [
                                                    "联系电话:",
                                                    (0, o.tZ)(r.Text, {
                                                      className:
                                                        "color-primary",
                                                      id: "AXBl",
                                                      onClick: function () {
                                                        return s(u);
                                                      },
                                                      children: u,
                                                    }),
                                                  ],
                                                }),
                                              h &&
                                                (0, o.BX)(r.View, {
                                                  className: "desc",
                                                  children: [
                                                    (0, o.tZ)(r.Text, {
                                                      className: "label",
                                                      children: "特别说明: ",
                                                    }),
                                                    (0, o.tZ)(r.Text, {
                                                      className: "detail",
                                                      children: h,
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          },
                                          n
                                        );
                                      }
                                    ),
                                  },
                                  t
                                );
                              }),
                        ],
                      }),
                    }),
                  ],
                }),
              })
            : (0, o.tZ)(r.View, {});
        });
      },
      75515: function (e, t, i) {
        var n = i(52500),
          a = i(71515),
          c = i(48813),
          l = n.default.memo(function (e) {
            var t = e.couponTag,
              i = e.specialStylePromotionTag,
              n = e.promotionDiscountList,
              l = void 0 === n ? [] : n,
              r = e.showHotelPriceCallback,
              o = l.slice(0, 2);
            return (0, c.BX)(a.View, {
              className: "discount-tags",
              children: [
                o.map(function (e, t) {
                  var i = e.iconUrl,
                    n = e.text,
                    l = {
                      backgroundColor: e.backgroundColor,
                      color: e.textColor,
                    };
                  return (0,
                  c.BX)(a.View, { className: "discount-tag", children: [i ? (0, c.tZ)(a.Image, { className: "icon", src: i, mode: "heightFix" }) : (0, c.tZ)(a.View, { className: "text", style: l, children: n }), t !== o.length - 1 && (0, c.tZ)(a.View, { className: "v-line" })] }, t);
                }),
                t &&
                  (0, c.BX)(c.HY, {
                    children: [
                      (null == o ? void 0 : o.length) > 0 &&
                        (0, c.tZ)(a.View, { className: "v-line" }),
                      i
                        ? (0, c.BX)(a.View, {
                            className: "promotion-tag",
                            id: "AXBm",
                            onClick: r,
                            children: [
                              (0, c.tZ)(a.View, {
                                className: "left",
                                children: i.text,
                              }),
                              (0, c.tZ)(a.View, { className: "mid" }),
                              (0, c.BX)(a.View, {
                                className: "right",
                                children: [
                                  t,
                                  (0, c.tZ)(a.Text, {
                                    className: "iconfont ifont-arr",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, c.tZ)(a.View, {
                            className: "discount-tag discount-price",
                            id: "AXBn",
                            onClick: r,
                            children: (0, c.BX)(a.View, {
                              className: "text",
                              children: [
                                t,
                                (0, c.tZ)(a.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                          }),
                    ],
                  }),
              ],
            });
          });
        t.Z = l;
      },
      62753: function (e, t, i) {
        var n = i(52500),
          a = i(71515),
          c = i(90668),
          l = i(48813);
        t.Z = n.default.memo(function (e) {
          var t = e.extraClass,
            i = e.children,
            n = e.show,
            r = e.onClose,
            o = e.isWhite,
            s = e.closeStyle,
            d = "ht-drawer"
              .concat((0, c.gP)(n, " active"))
              .concat((0, c.gP)(t, " ".concat(t))),
            m = (0, c.gP)(o, "background:#ffffff;");
          return (0,
          l.BX)(a.View, { children: [(0, l.tZ)(a.View, { className: "ht-drawer-mask", id: "AXBo", onClick: r, style: (0, c.LP)(n) }), (0, l.BX)(a.View, { className: d, style: m, children: [o && (0, l.tZ)(a.Image, { className: "colorbg", mode: "widthFix", src: "https://images3.c-ctrip.com/ztrip/zhixingios/list/baby/icon_qinzi_bg@3x.png" }), (0, l.tZ)(a.View, { className: "ifont-closed iconfont", id: "AXBp", onClick: r, style: s }), (0, l.tZ)(a.View, { className: "drawer-wrap", children: i })] })] });
        });
      },
      85486: function (e, t, i) {
        var n = i(94262),
          a = (i(52500), i(71515)),
          c = i(79792),
          l = i(48813);
        t.Z = function (e) {
          (0, n.Z)(e);
          var t = c.default.isBaidu
            ? "https://images3.c-ctrip.com/ztrip/hotel/icons/xiaochengxu/jiudianxuanchuan@3x.png"
            : "https://images3.c-ctrip.com/ztrip/hotel/202109/slogan@3x.png";
          return (0, l.tZ)(a.View, {
            className: "ht-post-wrap",
            children: (0, l.tZ)(a.Image, {
              className: "post",
              mode: "widthFix",
              src: t,
            }),
          });
        };
      },
      47135: function (e, t, i) {
        var n = i(52500),
          a = i(71515),
          c = i(48813),
          l = {
            upgrade:
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/12/mianfeiquxiao/icon_jiantou@3x.webp",
            member: {
              4: {
                color: "#623fcf",
                name: "铂金",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/12/mianfeiquxiao/icon_bj@3x.webp",
                bg: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/12/mianfeiquxiao/jfqy_xq_fc_bojin1@3x.webp",
              },
              5: {
                color: "#352A4C",
                name: "黑钻",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/12/mianfeiquxiao/icon_hz@3x.webp",
                bg: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/12/mianfeiquxiao/jfqy_xq_fc_heizuan1@3x.webp",
              },
            },
          };
        t.Z = n.default.memo(function (e) {
          var t = e.userVipInfo,
            i = e.list,
            n = e.style;
          if (!t || null == i || !i.length) return null;
          var r = l.member[t.userLevel || t.memberLevel],
            o = i.find(function (e) {
              return 1 === e.type;
            }),
            s = i.find(function (e) {
              return 2 === e.type;
            });
          return (0,
          c.BX)(a.View, { className: "ht-member-cancel", style: n, children: [(0, c.tZ)(a.Image, { className: "bg", src: r.bg, webp: !0 }), (0, c.BX)(a.View, { className: "left", children: [(0, c.tZ)(a.View, { className: "tit", children: o.title }), (0, c.tZ)(a.View, { className: "desc", children: o.desc })] }), (0, c.tZ)(a.View, { className: "mid", children: (0, c.tZ)(a.Image, { className: "upgrade", src: l.upgrade, webp: !0 }) }), (0, c.BX)(a.View, { className: "right", children: [(0, c.BX)(a.View, { className: "tit-wrap", children: [(0, c.tZ)(a.Image, { className: "icon", src: r.icon, webp: !0 }), (0, c.tZ)(a.Text, { className: "tit", style: { color: r.color }, children: s.title })] }), (0, c.tZ)(a.View, { className: "desc", style: { color: r.color }, children: s.desc })] })] });
        });
      },
      74977: function (e, t, i) {
        var n = i(52500),
          a = i(92954),
          c = i.n(a),
          l = i(49120),
          r = i(71515),
          o = i(48813);
        t.Z = function (e) {
          var t = e.themeList,
            i = (0, n.useCallback)(function (e) {
              var t = (0, l.getCurrentPage)();
              null != t &&
                t.ubtTrace &&
                t.ubtTrace(208558, {
                  bizKey: "hotel_detail_facility_pic_click",
                });
              var i = {
                images: e.picUrlList.map(function (e) {
                  return { imageUrl: e };
                }),
                title: e.title,
              };
              c().navigateTo({
                url: "/pages/hotel/imagebox/imagebox?data=".concat(
                  encodeURIComponent(JSON.stringify(i))
                ),
              });
            }, []);
          return (
            (0, n.useEffect)(function () {
              var e = (0, l.getCurrentPage)();
              null != e &&
                e.ubtTrace &&
                e.ubtTrace(208557, {
                  bizKey: "hotel_detail_facility_pic_show",
                });
            }, []),
            (0, o.tZ)(r.ScrollView, {
              className: "picture-list",
              scrollWithAnimation: !0,
              scrollX: !0,
              children: t.map(function (e, t) {
                return (0, o.BX)(
                  r.View,
                  {
                    className: "list",
                    id: "AXCB",
                    onClick: function () {
                      return i(e);
                    },
                    children: [
                      (0, o.tZ)(r.View, {
                        className: "mask",
                        children: (0, o.BX)(r.View, {
                          className: "title",
                          children: [e.title, "(", e.picUrlList.length, "张)"],
                        }),
                      }),
                      (0, o.tZ)(r.View, {
                        className: "picture-wrap",
                        children: (0, o.tZ)(r.Image, {
                          src: e.picUrlList[0],
                          className: "picture",
                        }),
                      }),
                    ],
                  },
                  t
                );
              }),
            })
          );
        };
      },
      96427: function (e, t, i) {
        var n = i(90129),
          a = i(52500),
          c = (i(92954), i(79792)),
          l = i(71515),
          r = i(90668),
          o = i(99344),
          s = i(53950),
          d = i(18783),
          m = i(48813);
        t.Z = a.default.memo(function (e) {
          var t,
            i,
            u = e.visible,
            h = e.modalInfo,
            p = e.onClose,
            f = e.onComfirm,
            g = e.date,
            N = e.memberInfo,
            w = e.roomNumber,
            _ = (null == g ? void 0 : g.checkInDay_disp) || [],
            Z = (0, n.Z)(_, 1)[0],
            T = (null == g ? void 0 : g.checkOutDay_disp) || [],
            y = (0, n.Z)(T, 1)[0],
            v = (0, r.gP)(u, "visible", "hidden"),
            V = "price-detail-modal ".concat(v, " ").concat(c.default.zxTyStr),
            x = (0, a.useState)(0),
            b = (0, n.Z)(x, 2),
            B = b[0],
            C = b[1],
            I = (0, a.useState)(!1),
            X = (0, n.Z)(I, 2),
            E = X[0],
            k = X[1],
            P =
              !!d.ZP.isLogin &&
              ((null == g ? void 0 : g.totalDays) > 1 || w > 1);
          return (0, m.tZ)(l.View, {
            children: (0, m.tZ)(o.Z, {
              className: V,
              title: "",
              show: u,
              bgImage: (0, r.M$)(N, "PRICE", !1, !1),
              onClose: function () {
                return k(!1), C(0), void p();
              },
              children: (0, m.BX)(l.View, {
                className: "modal-content",
                children: [
                  (0, m.BX)(l.View, {
                    className: "content",
                    children: [
                      (0, m.BX)(l.View, {
                        className: "time-date",
                        children: [
                          Z,
                          "-",
                          y,
                          " ",
                          null == g ? void 0 : g.totalDays,
                          "晚",
                        ],
                      }),
                      (null == h ? void 0 : h.hotelTypeName) &&
                        (0, m.tZ)(l.View, {
                          className: "room-name",
                          children: null == h ? void 0 : h.hotelTypeName,
                        }),
                      (0, m.BX)(l.ScrollView, {
                        scrollY: !0,
                        scrollTop: B,
                        className: "price-scroll-box",
                        children: [
                          (function () {
                            var e, t, i, n;
                            return (0, m.BX)(l.View, {
                              className: "room-charge-box",
                              children: [
                                (0, m.BX)(l.View, {
                                  className: "room-charge",
                                  children: [
                                    (0, m.tZ)(l.Text, {
                                      className: "text-0",
                                      children: "房费",
                                    }),
                                    (0, m.BX)(l.View, {
                                      children: [
                                        P &&
                                          (0, m.tZ)(l.Text, {
                                            className: "text-1",
                                            children: "每间每晚",
                                          }),
                                        (0, m.BX)(l.Text, {
                                          className: "price",
                                          children: [
                                            (0, m.tZ)(l.Text, {
                                              className: "text-icon",
                                              children: "¥",
                                            }),
                                            (0, m.tZ)(l.Text, {
                                              children:
                                                (null == h
                                                  ? void 0
                                                  : h.price) || "--",
                                            }),
                                          ],
                                        }),
                                        !!d.ZP.isLogin &&
                                          (null == g ? void 0 : g.totalDays) >
                                            1 &&
                                          (0, m.BX)(l.View, {
                                            className: "many-night-btn",
                                            onClick: function () {
                                              return k(!E);
                                            },
                                            children: [
                                              (0, m.BX)(l.Text, {
                                                children: [
                                                  null == g
                                                    ? void 0
                                                    : g.totalDays,
                                                  "晚 ¥",
                                                  null == h ||
                                                  null === (e = h.priceInfo) ||
                                                  void 0 === e ||
                                                  null ===
                                                    (t =
                                                      e.multiNightPriceDetail) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.totalFee,
                                                ],
                                              }),
                                              (0, m.tZ)(l.Text, {
                                                className: "iconfont2 ".concat(
                                                  E
                                                    ? "ifont2-collapse"
                                                    : "ifont2-expand"
                                                ),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                E &&
                                  (0, m.tZ)(l.View, {
                                    className: "many-night-box",
                                    children:
                                      null == h ||
                                      null ===
                                        (i =
                                          h.priceInfo.multiNightPriceDetail) ||
                                      void 0 === i ||
                                      null === (n = i.everyNightPriceList) ||
                                      void 0 === n
                                        ? void 0
                                        : n.map(function (e, t) {
                                            return (0,
                                            m.BX)(l.View, { className: "item", children: [(0, m.tZ)(l.Text, { children: e.checkInDate }), (0, m.BX)(l.Text, { children: ["¥", e.fee, "*1"] })] }, e.checkInDate + t);
                                          }),
                                  }),
                              ],
                            });
                          })(),
                          (function (e) {
                            var t =
                              null == e
                                ? void 0
                                : e.find(function (e) {
                                    return 2 == e.type;
                                  });
                            return t
                              ? (0, m.BX)(l.View, {
                                  className: "bargain-room",
                                  children: [
                                    (0, m.BX)(l.View, {
                                      className: "tag-image",
                                      children: [
                                        (0, m.tZ)(l.Image, {
                                          src:
                                            2 == t.subType
                                              ? s.Y_.HOTEL_PRICE_BARGAIB_TITLE_9
                                              : s.Y_
                                                  .HOTEL_PRICE_BARGAIB_TITLE_95,
                                        }),
                                        (0, m.tZ)(l.Text, {
                                          className: "text",
                                          children: t.desc,
                                        }),
                                      ],
                                    }),
                                    (0, m.BX)(l.View, {
                                      children: [
                                        P &&
                                          (0, m.tZ)(l.Text, {
                                            className: "text-1",
                                            children: "每间每晚",
                                          }),
                                        (0, m.BX)(l.Text, {
                                          className: "price",
                                          children: [
                                            (0, m.tZ)(l.Text, {
                                              className: "text-icon",
                                              children: "-¥",
                                            }),
                                            (0, m.tZ)(l.Text, {
                                              children:
                                                null == t ? void 0 : t.price,
                                            }),
                                          ],
                                        }),
                                        !!d.ZP.isLogin &&
                                          (null == g ? void 0 : g.totalDays) >
                                            1 &&
                                          (0, m.BX)(l.View, {
                                            className: "many-text",
                                            children: [
                                              (0, m.BX)(l.Text, {
                                                children: [
                                                  null == g
                                                    ? void 0
                                                    : g.totalDays,
                                                  "晚",
                                                ],
                                              }),
                                              " -¥",
                                              null == t ? void 0 : t.totalPrice,
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                })
                              : void 0;
                          })(null == h ? void 0 : h.discountList),
                          (function (e) {
                            var t,
                              i,
                              n =
                                null == e
                                  ? void 0
                                  : e.filter(function (e) {
                                      return 2 != e.type;
                                    });
                            if (n && !(n.length < 1))
                              return (0, m.BX)(l.View, {
                                className: "preferential-box",
                                children: [
                                  (0, m.BX)(l.View, {
                                    className: "preferential-sum",
                                    children: [
                                      (0, m.tZ)(l.Text, {
                                        className: "text-0",
                                        children: "优惠",
                                      }),
                                      (0, m.BX)(l.View, {
                                        children: [
                                          P &&
                                            (0, m.tZ)(l.Text, {
                                              className: "text-1",
                                              children: "每间每晚",
                                            }),
                                          (0, m.BX)(l.Text, {
                                            className: "price",
                                            children: [
                                              (0, m.tZ)(l.Text, {
                                                className: "text-tag",
                                                children: "-",
                                              }),
                                              (0, m.tZ)(l.Text, {
                                                className: "text-icon",
                                                children: "¥",
                                              }),
                                              (0, m.tZ)(l.Text, {
                                                children: n.reduce(function (
                                                  e,
                                                  t
                                                ) {
                                                  return e + t.price;
                                                },
                                                0),
                                              }),
                                            ],
                                          }),
                                          !!d.ZP.isLogin &&
                                            (null == g ? void 0 : g.totalDays) >
                                              1 &&
                                            (0, m.BX)(l.View, {
                                              className: "many-text",
                                              children: [
                                                (0, m.BX)(l.Text, {
                                                  children: [
                                                    null == g
                                                      ? void 0
                                                      : g.totalDays,
                                                    "晚",
                                                  ],
                                                }),
                                                " -¥",
                                                null == h ||
                                                null === (t = h.priceInfo) ||
                                                void 0 === t ||
                                                null ===
                                                  (i =
                                                    t.multiNightPriceDetail) ||
                                                void 0 === i
                                                  ? void 0
                                                  : i.totalPromotionPrice,
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, m.tZ)(l.View, {
                                    className: "preferential-list",
                                    children:
                                      null == n
                                        ? void 0
                                        : n.map(function (e, t) {
                                            return (0,
                                            m.BX)(l.View, { className: "item", children: [(0, m.BX)(l.View, { className: "title-price", children: [(0, m.tZ)(l.View, { className: "title", children: e.title }), (0, m.BX)(l.View, { className: "price", children: ["-¥", d.ZP.isLogin && (null == g ? void 0 : g.totalDays) > 1 ? e.totalPrice : e.price] })] }), (0, m.tZ)(l.View, { className: "desc", children: e.desc })] }, t);
                                          }),
                                  }),
                                ],
                              });
                          })(null == h ? void 0 : h.discountList),
                          (0, m.BX)(l.View, {
                            className: "total-price",
                            children: [
                              (0, m.tZ)(l.Text, {
                                className: "text",
                                children: "优惠后",
                              }),
                              (0, m.BX)(l.View, {
                                children: [
                                  (0, m.BX)(l.View, {
                                    children: [
                                      P &&
                                        (0, m.tZ)(l.Text, {
                                          className: "all-price",
                                          children: "每间每晚",
                                        }),
                                      (0, m.tZ)(l.Text, {
                                        className: "text-q",
                                        children: "¥",
                                      }),
                                      (0, m.tZ)(l.Text, {
                                        className: "price",
                                        children:
                                          (null == h ? void 0 : h.totalPrice) ||
                                          "--",
                                      }),
                                    ],
                                  }),
                                  !!d.ZP.isLogin &&
                                    (null == g ? void 0 : g.totalDays) > 1 &&
                                    (0, m.BX)(l.View, {
                                      className: "all-price",
                                      children: [
                                        null == g ? void 0 : g.totalDays,
                                        "晚 ¥",
                                        null == h ||
                                        null === (t = h.priceInfo) ||
                                        void 0 === t ||
                                        null ===
                                          (i = t.multiNightPriceDetail) ||
                                        void 0 === i
                                          ? void 0
                                          : i.totalZXSalePrice,
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.tZ)(l.View, {
                    className: "btn-content",
                    children: (0, m.tZ)(l.View, {
                      className: "btn",
                      id: "AXCE",
                      onClick: function () {
                        return k(!1), C(0), void f(h);
                      },
                      children: "立即预订",
                    }),
                  }),
                ],
              }),
            }),
          });
        });
      },
      93004: function (e, t, i) {
        var n = i(52500),
          a = (i(92954), i(79792)),
          c = i(71515),
          l = i(48813);
        t.Z = n.default.memo(function (e) {
          var t = (function (e) {
            var t = new Array(5).fill("empty"),
              i = Math.floor(Number(e));
            t.fill("full", 0, i);
            var n = Number(e) % 1 != 0 ? 1 : 0;
            return t.fill("half", i, i + n), t;
          })(e.score);
          return (0, l.tZ)(n.default.Fragment, {
            children: t.map(function (e, t) {
              return (0,
              l.tZ)(c.Icon, { className: "icon-star ".concat(e, " ").concat(a.default.zxTyStr) }, t);
            }),
          });
        });
      },
      3414: function (e, t, i) {
        var n = i(90129),
          a = i(52500),
          c = i(71515),
          l = i(90668),
          r = i(48813),
          o = {
            tableHeaderMapping: {
              limitDesc: "限制说明",
              chargeDesc: "费用",
              bedChargeDesc: "床铺及费用",
              breakfastChargeDesc: "早餐及其费用",
              cancelLadderTime: "北京时间",
              cancelLadderText: "取消政策及费用",
              cancelPriceRemark: "取消政策及费用",
              cancelTimeDisplay: "北京时间",
            },
          };
        t.Z = a.default.memo(function (e) {
          var t = e.data;
          if (null != t && t.length && t[0]) {
            var i = (0, n.Z)(t, 1)[0],
              a = Object.keys(i).sort(function (e, t) {
                var i = 0,
                  n = 0;
                return (
                  "cancelTimeDisplay" === e && (i = 1),
                  "cancelTimeDisplay" === t && (n = 1),
                  n - i
                );
              });
            return (0, r.BX)(c.View, {
              className: "ht-table",
              children: [
                (0, r.tZ)(c.View, {
                  className: "tr bg-w",
                  children: a.map(function (e, t) {
                    return (0,
                    r.tZ)(c.View, { className: "th", children: o.tableHeaderMapping[e] }, t);
                  }),
                }),
                t.map(function (e, t) {
                  return (0, r.tZ)(
                    c.View,
                    {
                      className: "tr".concat((0, l.gP)(t % 2 == 0, " bg-g")),
                      children: a.map(function (t, i) {
                        return (0,
                        r.tZ)(c.View, { className: "td", children: e[t] }, i);
                      }),
                    },
                    t
                  );
                }),
              ],
            });
          }
        });
      },
      17767: function (e, t, i) {
        i.d(t, {
          Tw: function () {
            return l;
          },
          fG: function () {
            return n;
          },
          ns: function () {
            return a;
          },
        });
        var n = {
            PRICE: "PRICE",
            YOUNG: "YOUNG",
            COUPON: "COUPON",
            MEMBER: "MEMBER",
            ACTIVITY: "ACTIVITY",
            DETERRENT_COUPON: "DETERRENT_COUPON",
            HOME_WINDOW: "HOME_WINDOW",
            BARGAIN: "BARGAIN",
            COLLECT_CARD: "COLLECT_CARD",
          },
          a = {
            MEMBER: "/pages/usercenter/member/member",
            COUPON: "/pages/hotel/coupon/coupon",
          },
          c = {
            1: "zaocan",
            51: "chuang",
            4: "fangjianmianji",
            6: "louceng",
            17: "jinyan",
            18: "youchuang",
            29: "weiyusheshi",
            30: "bianlisheshi",
            31: "xishuyongpin",
            32: "shipinyinpin",
            33: "wuzhangaishehsi",
            34: "shiwaijingguan",
            35: "meitikeji",
            36: "feiyongzhengce",
            37: "wifi",
            38: "wifi",
            40: "djdiannao",
            41: "djxianka",
            42: "djxianshiqi",
            43: "djsheshi",
            50: "qita",
            54: "qingjiefuwu",
            55: "kefangsheshi",
            56: "kefangbuju",
            57: "wangluoyutongxun",
            58: "chufangyongping",
            59: "ertongsheshi",
            60: "jinghuafuwu",
            61: "dulisheshi",
            363: "tingchechang",
          },
          l = function (e) {
            return "https://images3.c-ctrip.com/ztrip/hotel/icons/sheshi-icon/hotel_".concat(
              c[e],
              "@3x.png"
            );
          };
      },
      45810: function (e, t, i) {
        var n = i(90129),
          a = i(52500),
          c = i(71515),
          l = i(49120),
          r = i(90668),
          o = i(79792),
          s = i(48813);
        t.Z = a.default.memo(function (e) {
          var t = e.pictures,
            i = e.hideTitle,
            d = (0, a.useState)(!1),
            m = (0, n.Z)(d, 2),
            u = m[0],
            h = m[1],
            p = t.length > 3 ? t.length / 3 : t.length > 1 ? t.length / 2 : 1,
            f = u ? t.length : Math.floor(p),
            g = "ifont-arr".concat((0, r.gP)(u, "up", "down"), " iconfont");
          return (0, s.BX)(c.View, {
            className: "hotel-detail-module picture-show",
            children: [
              !i &&
                (0, s.tZ)(c.View, { className: "title", children: "酒店卖点" }),
              (0, s.BX)(c.View, {
                className: "content-wrap pb0",
                children: [
                  t.slice(0, f).map(function (e, t) {
                    return (0,
                    s.tZ)(c.Image, { src: e, mode: "widthFix", className: "picture" }, t);
                  }),
                  !u &&
                    (0, s.tZ)(c.Image, {
                      className: "shadow",
                      mode: "widthFix",
                      src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/tag/tuwenxiu_zhezhao@3x-2.png",
                    }),
                  (0, s.BX)(c.View, {
                    className: "check-all",
                    id: "AXCw",
                    onClick: function () {
                      return (function () {
                        var e = (0, l.getCurrentPage)();
                        null != e &&
                          e.ubtTrace &&
                          e.ubtTrace(208558, {
                            bizKey: "hotel_detail_attraction_click",
                            pageId: o.default.isTieyou
                              ? "10650018761"
                              : "10650018584",
                          }),
                          h(!u);
                      })();
                    },
                    children: [
                      (0, s.tZ)(c.Text, {
                        children: u ? "收起" : "查看更多卖点",
                      }),
                      (0, s.tZ)(c.Text, { className: g }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      },
      70204: function (e, t, i) {
        i.d(t, {
          Z: function () {
            return L;
          },
        });
        var n = i(298),
          a = i(90129),
          c = i(52500),
          l = i(8271),
          r = i.n(l),
          o = i(71515),
          s = i(34229),
          d = i(90668),
          m = i(62753),
          u = i(47135),
          h = (i(92954), i(79792)),
          p = i(79910),
          f = i(2809),
          g = i(49120),
          N = i(48813),
          w = {
            cover_small:
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/dianjingfang_fenwei/lb_fc_dianjing_pai@3x.png",
            cover_large:
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/dianjingfang_fenwei/lb_fc_dianjing@3x.png",
            package_small:
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/dianjingfang_fenwei/lb_fc_dianjing_taocan2@3x.png",
            package_large:
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/dianjingfang_fenwei/lb_fc_dianjing_taocan@3x.png",
          },
          _ =
            "https://images3.c-ctrip.com/ztrip/hotel/t.ding/dianjingfang_fenwei/dj_mengban.png",
          Z = function (e) {
            var t = e.item,
              i = e.setDisplayedTooltips,
              n = e.lineFirst,
              a = t.icon,
              c = t.itemValue,
              l = c.split("").length > 7,
              r = "name".concat(l ? " underline" : "");
            return (0, N.BX)(o.View, {
              className: "item",
              id: "AXCR",
              onClick: function (e) {
                return l ? i(e, c, n) : i(e);
              },
              children: [
                (0, N.tZ)(o.Image, {
                  className: "icon",
                  mode: "widthFix",
                  src: a,
                }),
                (0, N.tZ)(o.Text, { className: r, children: c }),
              ],
            });
          },
          T = c.default.memo(function (e) {
            var t = e.devices,
              i = (0, c.useState)([]),
              n = (0, a.Z)(i, 2),
              l = n[0],
              r = n[1],
              s = t.length < 4,
              m = Math.ceil(t.length / 2),
              u = 4 === t.length ? 3 : m,
              h = s ? t : t.slice(0, u),
              p = s ? [] : t.slice(u, t.length),
              f = function (e, t, i) {
                e.stopPropagation();
                var n = l.find(function (e) {
                  return e.title === t;
                });
                r(
                  t && !n
                    ? [
                        {
                          left: e.detail.x,
                          top: i ? "274px" : "314px",
                          title: t,
                        },
                      ]
                    : []
                );
              };
            return (
              (0, c.useEffect)(
                function () {
                  var e = null;
                  null != l &&
                    l.length &&
                    (e = setTimeout(function () {
                      r([]), clearTimeout(e);
                    }, 3e3));
                },
                [l, r]
              ),
              (0, N.BX)(c.default.Fragment, {
                children: [
                  (0, N.tZ)(o.View, {
                    className: "tooltip-wrap",
                    children: l.map(function (e, t) {
                      return (0,
                      N.tZ)(o.View, { className: "tooltip", style: { left: e.left - 60, top: e.top }, children: e.title }, t);
                    }),
                  }),
                  (0, N.BX)(o.ScrollView, {
                    className: "device-wrap$".concat((0, d.gP)(s, " one")),
                    onScroll: function (e) {
                      l.length && r([]);
                    },
                    scrollWithAnimation: !0,
                    scrollX: !0,
                    children: [
                      h.length > 0 &&
                        (0, N.tZ)(o.View, {
                          className: "line",
                          children: h.map(function (e, t) {
                            return (0,
                            N.tZ)(Z, { item: e, setDisplayedTooltips: f, lineFirst: !0 }, "1_".concat(t));
                          }),
                        }),
                      p.length > 0 &&
                        (0, N.tZ)(o.View, {
                          className: "line",
                          children: p.map(function (e, t) {
                            return (0,
                            N.tZ)(Z, { item: e, setDisplayedTooltips: f }, "2_".concat(t));
                          }),
                        }),
                    ],
                  }),
                ],
              })
            );
          }),
          y = c.default.memo(function (e) {
            var t = e.isPackage,
              i = e.data,
              n = e.fromType,
              a = e.subRoomName,
              l = w,
              r = (function (e) {
                var t = [];
                return (
                  null == e ||
                    e.forEach(function (e) {
                      var i;
                      if (
                        null !== (i = e.subFacilityList) &&
                        void 0 !== i &&
                        i.length
                      ) {
                        var n = e.subFacilityList.map(function (e) {
                          return Object.assign({}, e, {
                            itemValue: e.itemTitle,
                          });
                        });
                        t = t.concat(n);
                      } else t.push(e);
                    }),
                  t
                );
              })(i),
              s = r.length < 4,
              d = t
                ? s
                  ? l.package_small
                  : l.package_large
                : s
                ? l.cover_small
                : l.cover_large,
              m = {
                backgroundImage: "url(".concat(d, ")"),
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                overflowX: "hidden",
                padding: "0 10px",
              };
            return (
              (0, c.useEffect)(
                function () {
                  var e = (0, g.getCurrentPage)();
                  null != e &&
                    e.ubtTrace &&
                    e.ubtTrace(208591, {
                      bizKey: "hotel_detail_room_pop_game_show",
                      pageId: h.default.isTieyou
                        ? "10650018761"
                        : "10650018584",
                      fromType: n,
                    });
                },
                [t, i, n]
              ),
              null != r && r.length
                ? (0, N.BX)(o.View, {
                    className: "esports-card",
                    children: [
                      !t && (0, N.tZ)(o.Image, { className: "header", src: _ }),
                      (0, N.BX)(o.View, {
                        className: "content",
                        style: m,
                        children: [
                          (0, N.tZ)(o.View, {
                            className: "room-name",
                            children: a,
                          }),
                          (0, N.tZ)(T, { devices: r }),
                        ],
                      }),
                    ],
                  })
                : null
            );
          }),
          v = c.default.memo(function (e) {
            var t,
              i,
              n = e.pointRight;
            return null != n &&
              null !== (t = n.pointRights) &&
              void 0 !== t &&
              t.length
              ? (0, N.BX)(o.View, {
                  className: "point-right",
                  children: [
                    (0, N.tZ)(o.View, {
                      className: "ptit",
                      children: "积分权益",
                    }),
                    null === (i = n.pointRights) || void 0 === i
                      ? void 0
                      : i.map(function (e, t) {
                          return (0,
                          N.BX)(o.View, { className: "item", children: [(0, N.tZ)(o.Text, { className: "tag", children: e.title }), (0, N.tZ)(o.Text, { className: "desc", children: e.desc })] }, t);
                        }),
                    (0, N.tZ)(o.View, { className: "gdesc", children: n.desc }),
                  ],
                })
              : null;
          }),
          V = {
            tableHeaderMapping: {
              limitDesc: "限制说明",
              chargeDesc: "费用",
              bedChargeDesc: "床铺及费用",
              breakfastChargeDesc: "早餐及其费用",
              cancelLadderTime: "北京时间",
              cancelLadderText: "取消政策及费用",
            },
            cancelMapping: {
              10020: "立即确认",
              10702: "30分钟内可免费取消",
              10602: "不可取消",
              10402: "免费取消",
            },
            packageHeadBanner:
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/2023-5/UI/ic-rilitaocan@2x.png",
            packageHeadTitle:
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/2023-5/UI/ic-taocan@2x.png",
            icons: {
              1: {
                name: "住",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/icons/tepaijiudian/ic-rl-zhu@3x.png",
              },
              2: {
                name: "食",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/icons/tepaijiudian/ic-rl-shi@3x.png",
              },
              3: {
                name: "享",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/icons/tepaijiudian/ic-rl-xiang@3x.png",
              },
              0: {
                name: "礼",
                icon: "https://images3.c-ctrip.com/ztrip/hotel/icons/tepaijiudian/ic-rl-li@3x.png",
              },
            },
            feeCharge: { 0: "免费", 1: "收费" },
            feeChargeColor: {
              免费: "#198CFF",
              收费: "#FD9227",
              品牌: "#3C5A86",
            },
            swiperProps: {
              circular: !0,
              duration: 1e3,
              indicatorDots: !1,
              interva: 5e3,
              autoplay: !0,
            },
            foodLevelUpArrow:
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/12/mianfeiquxiao/icon_jiantou@3x.webp",
          },
          x = function (e) {
            var t = e.detail,
              i = (0, c.useState)(!1),
              n = (0, a.Z)(i, 2),
              l = n[0],
              r = n[1],
              s = t.type,
              d = t.list,
              m = t.jointName,
              u = d.slice(0, l ? d.length : 1);
            return (0, N.BX)(o.View, {
              className: "package-info-wrap",
              children: [
                (0, N.BX)(o.View, {
                  className: "package-name",
                  children: [
                    (0, N.tZ)(o.Image, {
                      src: V.icons[s].icon,
                      className: "title-icon",
                      mode: "widthFix",
                    }),
                    (0, N.tZ)(o.Text, { className: "name", children: m }),
                  ],
                }),
                (0, N.tZ)(o.View, {
                  className: "list-wrap",
                  children: u.map(function (e, t) {
                    var i = e.appointType,
                      n = e.bookingPhones,
                      a = e.pics,
                      c = e.priefName,
                      l = e.receptionTimes,
                      r = e.usePeopleNum,
                      s = e.xDescription;
                    return (0, N.BX)(
                      o.View,
                      {
                        className: "list",
                        children: [
                          (null == a ? void 0 : a.length) &&
                            (0, N.tZ)(o.Swiper, {
                              className: "swiper",
                              circular: "true",
                              indicatorDots: !1,
                              interval: 5e3,
                              duration: 1e3,
                              autoplay: !0,
                              children: a.map(function (e, t) {
                                return (0,
                                N.tZ)(o.SwiperItem, { children: (0, N.tZ)(o.CustomWrapper, { children: (0, N.tZ)(o.Image, { src: e.url, className: "img", mode: "aspectFill" }) }) }, t);
                              }),
                            }),
                          (0, N.BX)(o.View, {
                            className: "content",
                            children: [
                              (0, N.tZ)(o.View, {
                                className: "prife-name",
                                children: c,
                              }),
                              l &&
                                (0, N.BX)(o.View, {
                                  className: "desc",
                                  children: ["接待时间; ", l.join(",")],
                                }),
                              r &&
                                (0, N.BX)(o.View, {
                                  className: "desc",
                                  children: ["使用人数: ", r],
                                }),
                              n &&
                                (0, N.BX)(o.View, {
                                  className: "desc",
                                  children: ["联系电话: ", n],
                                }),
                              i &&
                                (0, N.BX)(o.View, {
                                  className: "desc",
                                  children: ["预约规则: ", i],
                                }),
                              s &&
                                (0, N.BX)(o.View, {
                                  className: "desc",
                                  children: ["特别说明: ", s],
                                }),
                            ],
                          }),
                        ],
                      },
                      t
                    );
                  }),
                }),
                d.length > 1 &&
                  !l &&
                  (0, N.BX)(o.View, {
                    className: "more color-primary",
                    id: "AXDE",
                    onClick: function () {
                      return r(!0);
                    },
                    children: [
                      "查看全部",
                      (0, N.tZ)(o.Text, {
                        className: "ifont-arrdown2 iconfont",
                      }),
                    ],
                  }),
              ],
            });
          },
          b = function (e, t, i) {
            var n = ""
              .concat(e)
              .concat(
                (0, d.gP)(0 === (null == i ? void 0 : i.feeCharge), "免费")
              );
            return p.Z.highLightText(
              n,
              t,
              V.feeChargeColor[t],
              V.feeChargeColor[t]
            );
          },
          B = function (e) {
            if (e && e.length && e[0]) {
              var t = (0, a.Z)(e, 1)[0],
                i = Object.keys(t).filter(function (e) {
                  return !!V.tableHeaderMapping[e];
                });
              return (0, N.BX)(o.View, {
                className: "table",
                children: [
                  (0, N.tZ)(o.View, {
                    className: "tr bg-w",
                    children: i.map(function (e, t) {
                      return (0,
                      N.tZ)(o.View, { className: "th", children: V.tableHeaderMapping[e] }, t);
                    }),
                  }),
                  e.map(function (e, t) {
                    return (0, N.tZ)(
                      o.View,
                      {
                        className: "tr".concat((0, d.gP)(t % 2 == 0, " bg-g")),
                        children: i.map(function (t, i) {
                          return (0,
                          N.tZ)(o.View, { className: "td", children: e[t] }, i);
                        }),
                      },
                      t
                    );
                  }),
                ],
              });
            }
          },
          C = function (e) {
            return null != e && e.itemTitle
              ? (0, N.BX)(o.View, {
                  className: "facility-txt",
                  children: [
                    (0, N.tZ)(o.View, {
                      className: "tit",
                      children: e.itemTitle,
                    }),
                    (0, N.tZ)(o.View, {
                      className: "txt",
                      children: e.itemValue,
                    }),
                  ],
                })
              : null;
          },
          I = function (e) {
            var t = e.imageList,
              i = e.isSalesPackage,
              l = e.recommendWord,
              r = (0, c.useState)(0),
              s = (0, a.Z)(r, 2),
              m = s[0],
              u = s[1],
              h = "".concat(m + 1, "/").concat(null == t ? void 0 : t.length),
              p = "swiper-wrap".concat((0, d.gP)(i, " sales"));
            return null != t && t.length
              ? (0, N.BX)(o.View, {
                  className: p,
                  children: [
                    (0, N.tZ)(
                      o.Swiper,
                      (0, n.Z)(
                        (0, n.Z)(
                          {
                            className: "swiper",
                            onChange: function (e) {
                              return u(e.detail.current);
                            },
                          },
                          V.swiperProps
                        ),
                        {},
                        {
                          children: t.map(function (e, t) {
                            return (0,
                            N.tZ)(o.SwiperItem, { children: (0, N.tZ)(o.CustomWrapper, { children: (0, N.tZ)(o.Image, { className: "img", mode: "aspectFill", src: e.imageUrl }) }) }, t);
                          }),
                        }
                      )
                    ),
                    l &&
                      (0, N.BX)(o.Text, {
                        className: "rword",
                        children: ["“", l, "”"],
                      }),
                    (0, N.tZ)(o.View, { className: "count", children: h }),
                  ],
                })
              : null;
          },
          X = function (e) {
            var t,
              i,
              n = e.isSalesPackage,
              a = e.highValuePackage;
            if (
              !n ||
              null == a ||
              null === (t = a.details) ||
              void 0 === t ||
              !t.length
            )
              return null;
            var c =
              null == a || null === (i = a.details) || void 0 === i
                ? void 0
                : i.sort(function (e, t) {
                    return e.type - t.type;
                  });
            return (0, N.tZ)(o.View, {
              className: "sales-package",
              children: (0, N.tZ)(o.View, {
                className: "detail-wrap",
                children:
                  null == c
                    ? void 0
                    : c.map(function (e, t) {
                        return (0,
                        N.BX)(o.View, { className: "detail", children: [(0, N.tZ)(o.Text, { className: "name", children: V.icons[e.type].name }), (0, N.tZ)(o.Text, { className: "desc", children: e.jointName })] }, t);
                      }),
              }),
            });
          },
          E = function (e) {
            var t;
            return (0, N.tZ)(N.HY, {
              children:
                null == e || null === (t = e.slice(0, 2)) || void 0 === t
                  ? void 0
                  : t.map(function (e) {
                      return (0,
                      N.tZ)(o.View, { className: "tag-wrap", children: (0, N.tZ)(o.Text, { className: "tag", children: e }) }, e);
                    }),
            });
          },
          k = function (e) {
            var t,
              i = e.transition,
              n = e.room,
              l = n.facilityList,
              r = n.firstLineList,
              m = n.mealList,
              u = n.roomBasicList,
              p = n.secondLineList,
              f = n.typedBasicList,
              g = n.bedInfoTypeList,
              w = (0, c.useState)(!1),
              _ = (0, a.Z)(w, 2),
              Z = _[0],
              T = _[1],
              y =
                null == m
                  ? void 0
                  : m.filter(function (e) {
                      return !!e.desc;
                    }),
              v = Z ? l.length : 2,
              x =
                null == l
                  ? void 0
                  : l.slice(0, v).filter(function (e) {
                      return Boolean(e.title && e.description);
                    }),
              B = (null == f ? void 0 : f.length) > 2;
            return (
              (0, c.useEffect)(
                function () {
                  !i && Z && T(!1);
                },
                [Z, i]
              ),
              (0, N.BX)(N.HY, {
                children: [
                  (0, N.BX)(o.View, {
                    className: "facility-wrap",
                    children: [
                      (0, N.tZ)(o.View, {
                        className: "show-policy-wrapper",
                        children:
                          null == r
                            ? void 0
                            : r.map(function (e, t) {
                                return (0,
                                N.BX)(o.View, { className: "first", children: [(0, N.tZ)(o.View, { className: "icon-wrapper", children: (0, N.tZ)(o.Image, { className: "icon", src: e.iconUrl }) }), (0, N.tZ)(o.View, { className: "label", children: "".concat(e.itemValue).concat((0, d.gP)(4 === e.type, "m²")) })] }, t);
                              }),
                      }),
                      (0, N.tZ)(o.View, {
                        className: "typed-policy-wrap",
                        children:
                          null == p
                            ? void 0
                            : p.map(function (e, t) {
                                var i,
                                  n,
                                  a,
                                  c = b(e.itemValue, "收费", e.feeInfo),
                                  l = b(
                                    null === (i = e.addInfo) || void 0 === i
                                      ? void 0
                                      : i.itemValue,
                                    "收费",
                                    null === (n = e.addInfo) || void 0 === n
                                      ? void 0
                                      : n.feeInfo
                                  ),
                                  r =
                                    1 === e.type && e.itemValue.includes("兑");
                                return (0, N.BX)(
                                  o.View,
                                  {
                                    className: "typed-policy second",
                                    children: [
                                      (0, N.tZ)(o.View, {
                                        className: "left",
                                        children: (0, N.tZ)(o.View, {
                                          className: "icon-wrapper",
                                          children: (0, N.tZ)(o.Image, {
                                            className: "icon",
                                            src: e.iconUrl,
                                          }),
                                        }),
                                      }),
                                      (0, N.BX)(o.View, {
                                        className: "right",
                                        children: [
                                          (null == g ? void 0 : g.length) > 0 &&
                                            "bedInfo" === e.type &&
                                            (0, N.tZ)(o.View, {
                                              className: "room-bed-info",
                                              children:
                                                null == g
                                                  ? void 0
                                                  : g.map(function (e) {
                                                      return (0, N.BX)(o.View, {
                                                        className:
                                                          "line-item-li",
                                                        children: [
                                                          (0, N.tZ)(o.View, {
                                                            className:
                                                              "r-name flex-center",
                                                            children: (0, N.tZ)(
                                                              o.Text,
                                                              {
                                                                children:
                                                                  e.desc,
                                                              }
                                                            ),
                                                          }),
                                                          (0, N.tZ)(o.View, {
                                                            children:
                                                              e.bedDetailList.map(
                                                                function (e) {
                                                                  return (0,
                                                                  N.BX)(
                                                                    o.View,
                                                                    {
                                                                      className:
                                                                        "info-bed",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          N.tZ)(
                                                                            o.Text,
                                                                            {
                                                                              className:
                                                                                "text1",
                                                                              children:
                                                                                e.type,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          N.tZ)(
                                                                            o.Text,
                                                                            {
                                                                              children:
                                                                                e.widthDesc,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          N.BX)(
                                                                            o.Text,
                                                                            {
                                                                              className:
                                                                                "text3",
                                                                              children:
                                                                                [
                                                                                  "x",
                                                                                  e.num,
                                                                                ],
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  );
                                                                }
                                                              ),
                                                          }),
                                                        ],
                                                      });
                                                    }),
                                            }),
                                          (0, N.tZ)(o.View, {
                                            className: "value block",
                                            style: (0, d.LP)(!r),
                                            children: (0, N.tZ)(s.ZtRichText, {
                                              className: "content",
                                              nodes: c,
                                              space: "nbsp",
                                            }),
                                          }),
                                          (0, N.BX)(o.View, {
                                            className: "value new-breakfest",
                                            style: (0, d.LP)(r, "flex"),
                                            children: [
                                              (0, N.tZ)(o.Text, {
                                                className: "nofood",
                                                children: "无早餐",
                                              }),
                                              (0, N.tZ)(o.Image, {
                                                className: "level-up",
                                                src: V.foodLevelUpArrow,
                                              }),
                                              (0, N.tZ)(o.Text, {
                                                className: "changefood primary",
                                                children: e.itemValue,
                                              }),
                                            ],
                                          }),
                                          1 === e.type &&
                                            (null == y ? void 0 : y.length) >
                                              0 &&
                                            (0, N.tZ)(o.View, {
                                              className: "value block",
                                              children:
                                                1 === e.type &&
                                                (null == y
                                                  ? void 0
                                                  : y.map(function (e, t) {
                                                      return (0,
                                                      N.BX)(o.View, { children: [(0, N.BX)(o.Text, { className: "date", children: [e.dateStr, " "] }), (0, N.tZ)(o.Text, { className: "desc color-primary", children: e.desc })] }, t);
                                                    })),
                                            }),
                                          (null === (a = e.addInfo) ||
                                          void 0 === a
                                            ? void 0
                                            : a.itemValue) &&
                                            (0, N.tZ)(o.View, {
                                              className: "value block",
                                              children: (0, N.tZ)(
                                                s.ZtRichText,
                                                {
                                                  className: "content",
                                                  nodes: l,
                                                  space: "nbsp",
                                                }
                                              ),
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t
                                );
                              }),
                      }),
                      h.default.isWechat &&
                        (null == x
                          ? void 0
                          : x.map(function (e, t) {
                              return (0,
                              N.BX)(o.View, { className: "item3", children: [(0, N.tZ)(o.Text, { className: "label", children: e.title }), (0, N.tZ)(o.Text, { className: "desc", children: e.description })] }, t);
                            })),
                      (!h.default.isWechat || Z) &&
                        (null == f
                          ? void 0
                          : f.map(function (e, t) {
                              var i,
                                n = e.itemValues
                                  .map(function (e) {
                                    var t;
                                    return null === (t = e.roomConfig) ||
                                      void 0 === t
                                      ? void 0
                                      : t.point;
                                  })
                                  .filter(function (e) {
                                    return !!e;
                                  });
                              return (0, N.BX)(
                                o.View,
                                {
                                  className: "typed-policy third",
                                  children: [
                                    (0, N.BX)(o.View, {
                                      className: "left",
                                      children: [
                                        (0, N.tZ)(o.View, {
                                          className: "icon-wrapper",
                                          children: (0, N.tZ)(o.Image, {
                                            className: "icon",
                                            src: e.iconUrl,
                                          }),
                                        }),
                                        (0, N.tZ)(o.View, {
                                          className: "label",
                                          children: e.itemTitle,
                                        }),
                                      ],
                                    }),
                                    (0, N.BX)(o.View, {
                                      className: "right",
                                      children: [
                                        null === (i = e.itemValues) ||
                                        void 0 === i
                                          ? void 0
                                          : i.map(function (e, t) {
                                              var i,
                                                n,
                                                a,
                                                c = 1 === e.style,
                                                l = "value".concat(
                                                  (0, d.gP)(c, " t-line")
                                                ),
                                                r =
                                                  V.feeCharge[
                                                    null === (i = e.feeInfo) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : i.feeCharge
                                                  ],
                                                s =
                                                  0 ===
                                                  (null === (n = e.feeInfo) ||
                                                  void 0 === n
                                                    ? void 0
                                                    : n.feeCharge)
                                                    ? "color-primary"
                                                    : "color-charged",
                                                m =
                                                  null === (a = e.roomConfig) ||
                                                  void 0 === a
                                                    ? void 0
                                                    : a.brand;
                                              return (0,
                                              N.BX)(o.View, { className: l, children: [(0, N.tZ)(o.Text, { children: e.itemValue }), r && (0, N.tZ)(o.Text, { className: s, children: r }), e.provision && (0, N.tZ)(o.Text, { className: "color-charged", children: e.provision }), m && (0, N.tZ)(o.Text, { className: "primary", children: m })] }, t);
                                            }),
                                        n.map(function (e, t) {
                                          return (0,
                                          N.tZ)(o.View, { className: "item-desc", children: e }, t);
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t
                              );
                            })),
                      B &&
                        h.default.isWechat &&
                        (0, N.tZ)(o.View, {
                          className: "more color-primary",
                          id: "AXDF",
                          onClick: function () {
                            return T(!Z);
                          },
                          children: Z
                            ? (0, N.BX)(N.HY, {
                                children: [
                                  "收起",
                                  (0, N.tZ)(o.Text, {
                                    className: "ifont-arrdown2 iconfont",
                                    style: "transform:rotate(180deg)",
                                  }),
                                ],
                              })
                            : (0, N.BX)(N.HY, {
                                children: [
                                  "查看更多设施",
                                  (0, N.tZ)(o.Text, {
                                    className: "ifont-arrdown2 iconfont",
                                  }),
                                ],
                              }),
                        }),
                    ],
                  }),
                  h.default.isWechat &&
                    (null == u ||
                    null ===
                      (t = u.filter(function (e) {
                        return e.itemValue && 16 == e.type;
                      })) ||
                    void 0 === t
                      ? void 0
                      : t.map(function (e, t) {
                          return (0,
                          N.BX)(o.View, { className: "facility-txt", children: [(0, N.tZ)(o.View, { className: "tag ".concat(h.default.zxTyStr), children: "礼" }), (0, N.tZ)(o.View, { className: "txt", children: e.itemValue })] }, t);
                        })),
                ],
              })
            );
          },
          P = function (e) {
            var t,
              i = e.childPolicyInfo,
              n = e.room,
              l = e.specialRequest,
              r = e.transition,
              m = e.userVipInfo,
              h = (0, c.useState)(!1),
              p = (0, a.Z)(h, 2),
              f = p[0],
              g = p[1],
              w = n.cancellationPolicy,
              _ = n.confirmPolicy,
              Z = n.extraPaySurcharge,
              T = n.guaranteeInfo,
              y = n.payType,
              v = n.roomBasicList,
              V = n.pointCancelPolicyList,
              x = i.policeInfo,
              b = i.childExtraBed,
              I = i.childBreakfast,
              X = i.childItemTitle,
              E =
                1 != y &&
                (null == T ? void 0 : T.description) &&
                ![0, 2].includes(T.type),
              k =
                (null == V ? void 0 : V.length) > 0
                  ? "原取消政策"
                  : null == w
                  ? void 0
                  : w.title,
              P = (0, d.gP)(!(null != V && V.length), "primary");
            return (
              (0, c.useEffect)(
                function () {
                  !r && f && g(!1);
                },
                [f, r]
              ),
              (0, N.BX)(o.View, {
                className: "hotel-policy-wrapper",
                children: [
                  (0, N.tZ)(o.View, {
                    className: "policy-title",
                    children: "酒店政策",
                  }),
                  (null == v ? void 0 : v.length) > 0 &&
                    (0, N.BX)(N.HY, {
                      children: [
                        C(
                          v.find(function (e) {
                            return 28 === e.type;
                          })
                        ),
                        C(
                          v.find(function (e) {
                            return 53 === e.type;
                          })
                        ),
                      ],
                    }),
                  (null == V ? void 0 : V.length) > 0 &&
                    (0, N.BX)(o.View, {
                      className: "facility-tx",
                      children: [
                        (0, N.tZ)(o.View, {
                          className: "primary",
                          style: (0, d.Zt)({ b: 10, t: 10 }),
                          children: "限时取消",
                        }),
                        (0, N.tZ)(u.Z, { userVipInfo: m, list: V }),
                      ],
                    }),
                  w &&
                    (0, N.BX)(o.View, {
                      className: "facility-txt",
                      children: [
                        (0, N.tZ)(o.View, { className: P, children: k }),
                        w.description &&
                          (0, N.tZ)(o.View, {
                            className: "txt",
                            children: w.description,
                          }),
                        (null === (t = w.tableList) || void 0 === t
                          ? void 0
                          : t.length) && B(w.tableList),
                      ],
                    }),
                  l &&
                    (0, N.BX)(o.View, {
                      className: "facility-txt",
                      children: [
                        (0, N.tZ)(o.View, {
                          className: "tit",
                          children: "特别提示",
                        }),
                        (0, N.tZ)(o.View, { className: "txt", children: l }),
                      ],
                    }),
                  _ &&
                    (0, N.BX)(o.View, {
                      className: "facility-txt",
                      children: [
                        (0, N.tZ)(o.View, {
                          className: "tit color-primary",
                          children: _.title,
                        }),
                        _.description &&
                          (0, N.tZ)(o.View, {
                            className: "txt",
                            children: _.description,
                          }),
                      ],
                    }),
                  E &&
                    (0, N.BX)(o.View, {
                      className: "facility-txt",
                      children: [
                        (0, N.tZ)(o.View, {
                          className: "tit",
                          children: "到店付说明",
                        }),
                        (0, N.BX)(o.View, {
                          className: "txt",
                          children: [
                            T.description.substring(
                              0,
                              f ? T.description.length : 60
                            ),
                            (0, d.gP)(!f && T.description.length > 60, "..."),
                          ],
                        }),
                      ],
                    }),
                  f &&
                    (0, N.BX)(N.HY, {
                      children: [
                        X &&
                          (0, N.BX)(o.View, {
                            className: "child-wrapper",
                            children: [
                              (0, N.tZ)(o.View, {
                                className: "type-wrapper",
                                children: (0, N.tZ)(o.Text, {
                                  className: "type",
                                  children: X,
                                }),
                              }),
                              x.length > 0 &&
                                (0, N.tZ)(o.View, {
                                  className: "police-info",
                                  children: x.map(function (e, t) {
                                    return (0,
                                    N.tZ)(s.ZtRichText, { nodes: e, className: "des" }, t);
                                  }),
                                }),
                              (0, N.BX)(o.View, {
                                className: "sub-items-wrapper",
                                children: [
                                  b &&
                                    (0, N.BX)(o.View, {
                                      className: "sub-item block",
                                      children: [
                                        (0, N.tZ)(o.View, {
                                          className: "name",
                                          children: "床铺",
                                        }),
                                        b.childExtraBedDesc &&
                                          (0, N.tZ)(s.ZtRichText, {
                                            nodes: b.childExtraBedDesc,
                                            className: "des",
                                          }),
                                        B(b.extraBedDetailList),
                                      ],
                                    }),
                                  I &&
                                    (0, N.BX)(o.View, {
                                      className: "sub-item block",
                                      children: [
                                        (0, N.tZ)(o.View, {
                                          className: "name",
                                          children: "早餐",
                                        }),
                                        I.childBreakfastDesc &&
                                          (0, N.tZ)(s.ZtRichText, {
                                            nodes: I.childBreakfastDesc,
                                            className: "des",
                                          }),
                                        B(I.breakfastDetailList),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        Z &&
                          (0, N.BX)(o.View, {
                            className: "facility-txt",
                            children: [
                              (0, N.tZ)(o.View, {
                                className: "tit",
                                children: "税/其他费用",
                              }),
                              (0, N.tZ)(o.View, {
                                className: "txt",
                                children: Z,
                              }),
                            ],
                          }),
                      ],
                    }),
                  (X || Z) &&
                    (0, N.tZ)(o.View, {
                      className: "more color-primary",
                      id: "AXDG",
                      onClick: function () {
                        return g(!f);
                      },
                      children: f
                        ? (0, N.BX)(N.HY, {
                            children: [
                              "收起",
                              (0, N.tZ)(o.Text, {
                                className: "ifont-arrdown2 iconfont",
                                style: "transform:rotate(180deg)",
                              }),
                            ],
                          })
                        : (0, N.BX)(N.HY, {
                            children: [
                              "查看全部",
                              (0, N.tZ)(o.Text, {
                                className: "ifont-arrdown2 iconfont",
                              }),
                            ],
                          }),
                    }),
                ],
              })
            );
          },
          S = function (e) {
            var t = e.status,
              i = e.onBook;
            return !h.default.isWechat || [2, 4].includes(t)
              ? null
              : (0, N.tZ)(o.View, {
                  className: "botm-box",
                  children: (0, N.tZ)(o.Button, {
                    className: "btn-red",
                    id: "AXDH",
                    onClick: i,
                    children: "预订",
                  }),
                });
          },
          L = c.default.memo(function (e) {
            var t,
              i,
              l,
              u,
              g = e.fromType,
              w = e.transition,
              _ = e.userVipInfo,
              Z = e.room,
              T = e.specialRequest,
              b = e.childPolicyInfo,
              B = void 0 === b ? {} : b,
              C = e.onClose,
              L = e.onBook,
              R = void 0 === L ? function () {} : L,
              O = (0, c.useState)(!1),
              D = (0, a.Z)(O, 2),
              A = D[0],
              H = D[1];
            if (
              ((0, c.useEffect)(
                function () {
                  !w && A && H(!1);
                },
                [w, A]
              ),
              !Z || p.Z.isEmptyObject(Z))
            )
              return (0, N.tZ)(o.View, {});
            var j = Z.highValuePackage,
              z = Z.subRoomName,
              M = Z.imageList,
              F = Z.eSportsList,
              G = Z.giftBox,
              U = Z.status,
              Y = Z.roomName,
              W = Z.baseName,
              q = Z.pointRight,
              K = Z.recommendWord,
              Q = Z.roomTag,
              J = Z.tonightEndTime,
              $ =
                (null == j || null === (t = j.details) || void 0 === t
                  ? void 0
                  : t.length) > 0 && h.default.isWechat,
              ee =
                null == F
                  ? void 0
                  : F.filter(function (e) {
                      return "电竞网关账号" !== e.itemValue;
                    }),
              te = (null == ee ? void 0 : ee.length) > 0,
              ie = !$ && !te,
              ne = (0, d.gP)(A, z || W || Y),
              ae = (0, d.gP)(J, r()(+J).format("YYYY-MM-DD HH:mm:ss")),
              ce = f.ZP.menuInfo.top + (f.ZP.menuInfo.height - 22) / 2,
              le = {},
              re = { top: "".concat(ce + 1, "px") },
              oe = { marginTop: "".concat(ce, "px") },
              se = (0, n.Z)(
                { paddingTop: "".concat(ce, "px") },
                (0, d.LP)(!$ && A, "flex")
              );
            console.error("menuInfo", f.ZP.menuInfo),
              $
                ? ((le.backgroundImage = "url(".concat(
                    V.packageHeadBanner,
                    ")"
                  )),
                  (le.height = "".concat(ce + 56, "px")))
                : A || ((re.color = "#ffffff"), (re.borderColor = "#ffffff"));
            return (0, N.BX)(m.Z, {
              extraClass: "ht-room-detail",
              show: w,
              onClose: C,
              closeStyle: re,
              children: [
                (0, N.BX)(o.View, {
                  className: "title",
                  style: le,
                  children: [
                    $ &&
                      (0, N.tZ)(o.Image, {
                        className: "name-icon",
                        src: V.packageHeadTitle,
                        style: oe,
                      }),
                    (0, N.tZ)(o.View, {
                      className: "fix-head",
                      style: se,
                      children: (0, N.tZ)(o.View, {
                        className: "name",
                        children: ne,
                      }),
                    }),
                  ],
                }),
                (0, N.tZ)(o.View, {
                  className: "scroll-wrap",
                  children: (0, N.BX)(o.ScrollView, {
                    className: "scroll-details",
                    onScroll: function (e) {
                      var t = e.detail.scrollTop;
                      t > 210 && !A && H(!0), t <= 210 && A && H(!1);
                    },
                    scrollWithAnimation: !0,
                    scrollY: !0,
                    children: [
                      (0, N.tZ)(X, { isSalesPackage: $, highValuePackage: j }),
                      $ &&
                        (0, N.BX)(o.View, {
                          className: "subroom-name",
                          children: [
                            (0, N.tZ)(o.Image, {
                              src: V.icons[1].icon,
                              className: "title-icon",
                              mode: "widthFix",
                            }),
                            W,
                            " ",
                            E(Q),
                          ],
                        }),
                      (0, N.tZ)(I, {
                        imageList: M,
                        isSalesPackage: $,
                        recommendWord: K,
                      }),
                      ae &&
                        !(null != ee && ee.length) &&
                        (0, N.tZ)(o.View, {
                          className: "tonight-sale",
                          children: (0, N.BX)(o.View, {
                            className: "count-down-wrap",
                            children: [
                              (0, N.tZ)(o.Text, {
                                className: "prefix",
                                children: "距结束",
                              }),
                              ae &&
                                (0, N.tZ)(s.ZtCountdown, {
                                  className: "end-time",
                                  endTime: ae,
                                  onTimeup: function () {},
                                }),
                            ],
                          }),
                        }),
                      (0, N.BX)(o.View, {
                        className: "subroom-name",
                        style: (0, d.LP)(ie, "flex"),
                        children: [z || W || Y, " ", E(Q)],
                      }),
                      (0, N.tZ)(y, {
                        data: ee,
                        isPackage: $,
                        fromType: g,
                        subRoomName: z,
                      }),
                      (0, N.tZ)(k, { room: Z, transition: w }),
                      (null == G || null === (i = G.details) || void 0 === i
                        ? void 0
                        : i.length) > 0 &&
                        G.details.map(function (e, t) {
                          return (0,
                          N.tZ)(c.default.Fragment, { children: (0, N.tZ)(x, { detail: e }) }, "_".concat(t));
                        }),
                      $ &&
                        (null == j ||
                        null === (l = j.details) ||
                        void 0 === l ||
                        null ===
                          (u = l.filter(function (e) {
                            return 1 !== e.type;
                          })) ||
                        void 0 === u
                          ? void 0
                          : u.map(function (e, t) {
                              return (0,
                              N.tZ)(c.default.Fragment, { children: (0, N.tZ)(x, { detail: e }) }, t);
                            })),
                      h.default.isWechat &&
                        (0, N.tZ)(P, {
                          childPolicyInfo: B,
                          room: Z,
                          specialRequest: T,
                          transition: w,
                          userVipInfo: _,
                        }),
                      (0, N.tZ)(v, { pointRight: q }),
                    ],
                  }),
                }),
                (0, N.tZ)(S, { status: U, onBook: R }),
              ],
            });
          });
      },
      56819: function (e, t, i) {
        var n = i(90129),
          a = i(52500),
          c = (i(92954), i(49120)),
          l = i(71515),
          r = i(90668),
          o = i(79792),
          s = i(75515),
          d = i(14203),
          m = i(46596),
          u = i(48813),
          h = {
            starList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            tonightSaleBg:
              "https://images3.c-ctrip.com/zt/wechat/hotel/tonight-sale-bg.png",
            collectedIcon:
              "https://images3.c-ctrip.com/zt/hotel/hotel-yisc@3x.png",
            tonightIcon:
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/jinyetejia/jinye_lb_tag@3x.png",
            bargainIcon:
              "https://images3.c-ctrip.com/ztrip/hotel/2022/5/tag_xq_bhj@3x.webp",
            logoClassName: {
              2048: "blue",
              1024: "red",
              4096: "black",
              32768: "popular",
            },
          },
          p = a.default.memo(function (e) {
            var t = e.bargainIcon,
              i = e.groupLabel,
              n = e.incentiveInfo,
              a = e.tonightEndTime,
              c = e.priceInfo,
              r = e.hourRoomInfo,
              o = e.showHotelPriceCallback,
              s = c.couponTag,
              d = c.couponSalePrice,
              m = c.salePrice,
              h = c.discountPrice,
              p = c.noLoginPrice || (s ? d : m),
              f = "info".concat(i ? " end" : "");
            return (0,
            u.BX)(l.View, { className: f, children: [(0, u.tZ)(l.View, { className: "remark", style: { color: null == n ? void 0 : n.color }, children: null == n ? void 0 : n.content }), (0, u.BX)(l.View, { className: "pinfo", id: "AXEc", onClick: o, children: [!!h && !a && (0, u.tZ)(l.Text, { className: "s", children: "￥" + h }), t && (0, u.tZ)(l.Image, { className: "bagain-icon", mode: "widthFix", src: t }), (0, u.tZ)(l.Text, { className: "price color-red".concat(null != r && r.hourNum ? " hour-num" : ""), children: p }), (null == r ? void 0 : r.hourNum) && (0, u.BX)(l.Text, { className: "hour-num", children: ["/", r.hourNum, "小时"] })] })] });
          });
        t.Z = a.default.memo(function (e) {
          var t = e.index,
            i = e.hotel,
            f = e.itemType,
            g = e.pageId,
            N = e.showTonightTime,
            w = e.tonightSaleTime,
            _ = e.toHotelDetail,
            Z = e.showPriceModal,
            T = e.currentTouchIndex,
            y = e.onChangeCurrentTouchIndex,
            v = e.isNeedTouch,
            V = void 0 !== v && v,
            x = e.onDeleteEvent,
            b = i.hotelId,
            B = i.tonightEndTime,
            C = i.hotelBrandLabel,
            I = i.commonScore,
            X = i.commentNumber,
            E = i.collectionNumber,
            k = i.distanceRemark,
            P = i.hourRoomInfo,
            S = i.promotionTagList,
            L = i.promotionDiscountList,
            R = i.priceInfo,
            O = i.hotelStatus,
            D = i.logo,
            A = i.bigLogo,
            H = i.logoShowInfo,
            j = H.logoShowType,
            z = H.logoRemark,
            M = H.topLogoRemark,
            F = H.topLogoShowImg,
            G = H.logoShowIcon,
            U = i.importantRightIcon,
            Y = i.advertiseFlag,
            W = i.hotelRankInfo,
            q = i.name,
            K = i.starLicence,
            Q = i.commentView,
            J = i.specialStylePromotionTag,
            $ = i.platformPriceList,
            ee = i.dStarIcon,
            te = i.zoneStr,
            ie = i.recommendWord,
            ne = i.bargainIcon,
            ae = i.groupLabel,
            ce = i.incentiveInfo,
            le = (0, a.useState)(0),
            re = (0, n.Z)(le, 2),
            oe = re[0],
            se = re[1],
            de = (0, a.useState)(0),
            me = (0, n.Z)(de, 2),
            ue = me[0],
            he = me[1],
            pe = (0, a.useState)(0),
            fe = (0, n.Z)(pe, 2),
            ge = fe[0],
            Ne = fe[1],
            we = (0, a.useState)({
              transform: "translateX(0PX)",
              webkitTransform: "translateX(0PX)",
              transition: "transform 0.3s ease",
              WebkitTransition: "transform 0.3s ease",
            }),
            _e = (0, n.Z)(we, 2),
            Ze = _e[0],
            Te = _e[1],
            ye = 0,
            ve = (0, a.useCallback)(
              function (e) {
                Z && (e.stopPropagation(), Z());
              },
              [Z]
            ),
            Ve =
              !(null == R || !R.couponTag) ||
              (null == L ? void 0 : L.length) > 0;
          (0, a.useEffect)(
            function () {
              var e = (0, c.getCurrentPage)();
              null != W &&
                W.icon &&
                null != e &&
                e.ubtTrace &&
                e.ubtTrace(208560, {
                  pageId: g,
                  bizKey: "hotel_list_recommendinfo_show",
                  rankTItle: W.rankingTitle,
                  terminaltype: "Applets",
                });
            },
            [W, g]
          );
          var xe =
            O & m.Qj.CLOSED
              ? "https://images3.c-ctrip.com/ztrip/hotel/dahua/list/img_xieye@3x.webp"
              : O & m.Qj.SOLD_OUT
              ? "https://images3.c-ctrip.com/ztrip/hotel/dahua/list/img_shouqing@3x.webp"
              : void 0;
          return (0, u.tZ)(l.View, {
            className: "hotel-item-li",
            onTouchStart: function (e) {
              return (function (e) {
                V && (se(e.touches[0].pageX), he(e.touches[0].pageY));
              })(e);
            },
            onTouchMove: function (e) {
              return (function (e) {
                if (
                  V &&
                  ((ye = e.touches[0].pageY - ue),
                  Ne(e.touches[0].pageX - oe),
                  !(
                    Math.abs(ye) > Math.abs(e.touches[0].pageX - oe) ||
                    Math.abs(e.touches[0].pageX - oe) < 30
                  ))
                ) {
                  var i = ge > 0 ? 0 : -78;
                  Te({
                    transform: "translateX(".concat(i, "PX)"),
                    webkitTransform: "translateX(".concat(i, "PX)"),
                    transition: "transform 0.3s ease",
                    WebkitTransition: "transform 0.3s ease",
                  }),
                    y(t);
                }
              })(e);
            },
            onTouchEnd: function () {},
            children: (0, u.BX)(l.View, {
              class: "hotel-item-li-wrap",
              style:
                T === t
                  ? Ze
                  : {
                      transform: "translateX(0PX)",
                      webkitTransform: "translateX(0PX)",
                      transition: "transform 0.3s ease",
                      WebkitTransition: "transform 0.3s ease",
                    },
              children: [
                (0, u.BX)(l.View, {
                  className: "item "
                    .concat(o.default.zxTyStr, " ")
                    .concat(O !== m.Qj.NORMAL ? "abnormal-status" : ""),
                  onClick: _,
                  id: "hotel" + b,
                  children: [
                    N &&
                      (0, u.tZ)(l.Image, {
                        class: "tonight-sale-bg",
                        src: h.tonightSaleBg,
                      }),
                    "normal" === f &&
                      !!(O & m.Qj.SOLD_OUT) &&
                      (0, u.tZ)(l.Image, {
                        src: xe,
                        className: "status-image",
                      }),
                    !!(O & m.Qj.CLOSED) &&
                      (0, u.tZ)(l.Image, {
                        src: xe,
                        className: "status-image",
                      }),
                    (0, u.BX)(l.View, {
                      className: "lbox",
                      style: "background-image:url(".concat(A || D, ")"),
                      children: [
                        !A && (0, u.tZ)(l.View, { className: "none-icon" }),
                        512 === j &&
                          (0, u.tZ)(l.Image, {
                            className: "collected-hotel",
                            src: h.collectedIcon,
                          }),
                        Y &&
                          (0, u.tZ)(l.View, {
                            className: "tag-ad",
                            children: "广告",
                          }),
                        z &&
                          65536 != j &&
                          (0, u.tZ)(l.View, {
                            class: "tag-".concat(h.logoClassName[j] || "txt"),
                            children: (0, u.tZ)("text", {
                              class: "remark-txt",
                              children: z,
                            }),
                          }),
                        G &&
                          (0, u.tZ)(l.Image, {
                            className: "logo-show-icon",
                            src: G,
                            mode: "widthFix",
                          }),
                        M &&
                          (0, u.tZ)(l.View, {
                            className: "tag-jinpai",
                            children: M,
                          }),
                        F &&
                          (0, u.tZ)(l.Image, {
                            className: "tag-yxh",
                            mode: "heightFix",
                            src: F,
                          }),
                        N &&
                          w.second &&
                          (0, u.BX)(l.View, {
                            className: "tonight-countdown",
                            children: [
                              (0, u.tZ)(d.Z, {
                                src: h.tonightIcon,
                                className: "tonight-icon",
                                mode: "heightFix",
                                inline: !0,
                              }),
                              (0, u.BX)(l.View, {
                                className: "count-time",
                                children: [
                                  (0, u.tZ)(l.Text, { children: w.hour }),
                                  ":",
                                  (0, u.tZ)(l.Text, { children: w.minute }),
                                  ":",
                                  (0, u.tZ)(l.Text, { children: w.second }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, u.BX)(l.View, {
                      className: "cont",
                      children: [
                        (0, u.BX)(l.View, {
                          className: "tit",
                          children: [
                            (0, u.tZ)(l.Text, {
                              className: "name",
                              children: q,
                            }),
                            C &&
                              (0, u.tZ)(l.Text, {
                                className: "type",
                                children: C,
                              }),
                            (i.star || i.starIcon) &&
                              (0, u.BX)(l.View, {
                                className: "icon-wrapper",
                                children: [
                                  i.star &&
                                    h.starList.map(function (e) {
                                      return (0,
                                      u.BX)(a.default.Fragment, { children: [K && parseInt(i.star) >= e && (0, u.tZ)(l.View, { className: "hotel-star" }), !K && parseInt(i.star) >= e && (0, u.tZ)(l.View, { className: "hotel-zuanshi" })] }, "index");
                                    }),
                                  ee &&
                                    (0, u.tZ)(l.Image, {
                                      src: ee,
                                      className: "diam-icon",
                                      mode: "widthFix",
                                      webp: !0,
                                    }),
                                  i.starIcon &&
                                    (0, u.tZ)(l.Image, {
                                      src: i.starIcon,
                                      className: "star-icon",
                                    }),
                                ],
                              }),
                          ],
                        }),
                        (0, u.BX)(l.View, {
                          className: "desb",
                          children: [
                            parseFloat(I) > 0
                              ? (0, u.tZ)(l.View, {
                                  className: "score",
                                  children: I,
                                })
                              : (0, u.tZ)(l.View, {
                                  className: "comment-txt no-score",
                                  children: "暂无评分",
                                }),
                            (0, u.BX)(l.View, {
                              className: "comment-wrap",
                              children: [
                                X && (0, u.tZ)(l.View, { children: X }),
                                X && E && (0, u.tZ)(l.View, { children: "·" }),
                                E && (0, u.tZ)(l.View, { children: E }),
                              ],
                            }),
                          ],
                        }),
                        (ie || Q) &&
                          (0, u.tZ)(l.View, {
                            className: "recommend-wrap",
                            children: (0, u.tZ)(l.Text, {
                              className: "comment-txt",
                              children: "“".concat(ie || Q, "”"),
                            }),
                          }),
                        (null == P ? void 0 : P.hourRange) &&
                          (0, u.tZ)(l.View, {
                            className: "dist",
                            children: (0, u.BX)(l.Text, {
                              className: "c-as",
                              children: ["可住时段 ", P.hourRange],
                            }),
                          }),
                        (k || te) &&
                          (0, u.BX)(l.View, {
                            className: "dist",
                            children: [
                              (0, u.tZ)(l.Text, {
                                className: "c-as",
                                children: k,
                              }),
                              k &&
                                te &&
                                (0, u.tZ)(l.Text, {
                                  className: "dot",
                                  children: "·",
                                }),
                              (0, u.tZ)(l.Text, {
                                className: "c-as",
                                children: te,
                              }),
                            ],
                          }),
                        (0, u.BX)(l.View, {
                          className: "tag",
                          children: [
                            U &&
                              (0, u.tZ)(l.Image, {
                                src: U,
                                className: "tag-huiyuan",
                              }),
                            (i.promotionTagList || S || []).map(function (
                              e,
                              t
                            ) {
                              var i = e.backgroundColor,
                                n = e.textColor,
                                a = e.style,
                                c = "background-color:"
                                  .concat(i, ";color:")
                                  .concat(n, ";"),
                                o = "tag-white".concat(
                                  (0, r.gP)(3 === a, " member")
                                );
                              return (0, u.BX)(
                                l.View,
                                {
                                  className: o,
                                  style: c,
                                  children: [
                                    e.iconUrl &&
                                      (0, u.tZ)(l.Image, {
                                        className: "icon",
                                        src: e.iconUrl,
                                        mode: "heightFix",
                                      }),
                                    (0, u.tZ)(l.Text, {
                                      children: e.text + e.tagAmount,
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                          ],
                        }),
                        (null == W ? void 0 : W.icon) &&
                          (0, u.BX)(l.View, {
                            className: "rank",
                            children: [
                              (0, u.tZ)(d.Z, {
                                src: W.icon,
                                className: "left",
                                mode: "heightFix",
                              }),
                              (0, u.tZ)(l.View, {
                                className: "desc",
                                children: W.desc,
                              }),
                            ],
                          }),
                        0 == (O & m.Qj.CLOSED) &&
                          (0, u.BX)(u.HY, {
                            children: [
                              R &&
                                void 0 !== R.couponSalePrice &&
                                (0, u.tZ)(p, {
                                  groupLabel: ae,
                                  bargainIcon: ne,
                                  tonightEndTime: B,
                                  priceInfo: R,
                                  hourRoomInfo: P,
                                  showHotelPriceCallback: ve,
                                  incentiveInfo: ce,
                                }),
                              Ve &&
                                (0, u.BX)(l.View, {
                                  className: "binfo".concat(
                                    (0, r.gP)(ae, " spb")
                                  ),
                                  children: [
                                    ae &&
                                      (0, u.tZ)(l.View, {
                                        className: "glabel",
                                        children: ae,
                                      }),
                                    (0, u.tZ)(s.Z, {
                                      couponTag: R.couponTag,
                                      specialStylePromotionTag: J,
                                      promotionDiscountList: L,
                                      showHotelPriceCallback: ve,
                                    }),
                                  ],
                                }),
                              (null == $ ? void 0 : $.length) > 0 &&
                                (0, u.tZ)(l.View, {
                                  className: "parity-info",
                                  children: $.map(function (e, t) {
                                    return (0,
                                    u.BX)(l.View, { className: "parity-wrapper", children: [(0, u.BX)(l.View, { className: "parity", children: [(0, u.BX)(l.Text, { className: "name", children: [e.platformName, " "] }), (0, u.BX)(l.Text, { className: "price", children: ["¥", e.platformPriceDisplay || "--"] })] }), t < $.length - 1 && (0, u.tZ)(l.Text, { className: "slash", children: "/" })] }, t);
                                  }),
                                }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                V &&
                  (0, u.BX)(l.View, {
                    className: "delete-btn",
                    onClick: function () {
                      return x();
                    },
                    children: [
                      (0, u.tZ)(l.Text, {
                        className: "ifont2-shanchu_linea_20 iconfont2 del-icon",
                      }),
                      (0, u.tZ)(l.Text, { children: "删除" }),
                    ],
                  }),
              ],
            }),
          });
        });
      },
      46596: function (e, t, i) {
        i.d(t, {
          Bg: function () {
            return a;
          },
          En: function () {
            return b;
          },
          GB: function () {
            return c;
          },
          H9: function () {
            return n;
          },
          He: function () {
            return l;
          },
          K4: function () {
            return v;
          },
          KM: function () {
            return d;
          },
          MP: function () {
            return _;
          },
          M_: function () {
            return x;
          },
          NT: function () {
            return o;
          },
          Qj: function () {
            return B;
          },
          RA: function () {
            return p;
          },
          UG: function () {
            return V;
          },
          X3: function () {
            return w;
          },
          Y_: function () {
            return g;
          },
          Zi: function () {
            return N;
          },
          _2: function () {
            return m;
          },
          _J: function () {
            return r;
          },
          a6: function () {
            return h;
          },
          cF: function () {
            return T;
          },
          nj: function () {
            return s;
          },
          oN: function () {
            return Z;
          },
          wu: function () {
            return f;
          },
          yd: function () {
            return u;
          },
          zC: function () {
            return y;
          },
        });
        var n = {
            FILTER_CHANGE: "filter_change",
            FILTER_CHANGED: "FILTER_CHANGED",
            QUICK_FILTER_CHANGE: "quick_filter_change",
            RESET_FILTER: "reset_filter",
            RESET_FILTER_ITEMS: "reset_filter_items",
            RESET_ALL: "RESET_ALL",
            SORT_CHANGE: "sort_change",
            POSITION_CHANGE: "position_change",
            PRICE_STAR_CHANGE: "price_star_change",
            CLOSE_FILTER: "close_filter",
            SHOW_SCENARIO: "show_scenario",
            CLEAR_FILTER_ITEM: "clear_filter_item",
            CLOSE_BANNER: "close_banner",
            PAGE_CLICK: "PAGE_CLICK",
            TONIGHT_TIME: "TONIGHT_TIME",
            HOT_POSITION: "HOT_POSITION",
          },
          a = {
            train_pay_success: "HCZF_JD",
            train_order_detail: "HCDD_JD",
            inter_flight_pay_success: "jpzf_search_hotel",
            flight_pay_success: "jpzf_search_hotel",
            inter_flight_order_detail: "jpxq_search_hotel",
            flight_order_detail: "jpxq_search_hotel",
            bus_order_detail: "busBooking",
          },
          c = { priceStart: 0, priceLeft: 0, priceEnd: 0, priceRight: 0 },
          l = {
            data: {
              filterID: "17|1",
              type: "17",
              title: "智能排序",
              subType: "2",
              sceneBitMap: 0,
              scenarioType: "CommonModule",
              filterType: 0,
              value: "1",
            },
            extra: {
              hasChild: !1,
              scenarios: ["5"],
              nodeType: 0,
              subTitle: "",
              extraInfo: "",
              star: 0,
              selectIcon: "",
              unSelectIcon: "",
            },
            operation: { mode: 1, isRoomFilter: !1 },
            linkTitleStr: "排序_排序",
            filterKey: "17|1~排序",
            parentOperation: { mode: 1, isRoomFilter: !1 },
            parentData: {
              filterID: "17",
              type: "17",
              title: "排序",
              subType: "2",
              sceneBitMap: 0,
              filterType: 0,
            },
            scenarioNames: ["排序"],
          },
          r = {
            SORT: 5,
            POSITION: 3,
            PRICE_STAR: 4,
            FILTER: 2,
            QUICK_FILTER: 6,
          },
          o = {
            筛选: "filterData",
            位置区域: "positionData",
            "价格/星级": "priceStarData",
            排序: "sortData",
          },
          s = {
            1: "筛选",
            2: "筛选",
            3: "位置区域",
            4: "价格/星级",
            5: "排序",
            6: "快筛",
            7: "关键字",
          },
          d = "15|Range",
          m = "15",
          u = "29",
          h = "14",
          p = "YYYY-MM-DD",
          f = "https://images3.c-ctrip.com/zt/wechat/hotel/importantbg.png",
          g = {
            BARGAIN_TAG:
              "https://images3.c-ctrip.com/ztrip/hotel/2022/5/tag_xq_bhj@3x.webp",
            COLLECT_CARD:
              "https://images3.c-ctrip.com/ztrip/hotel/yuyantao/jikadaoqiwei/tc_jikapai.png?v2",
            BARGAIN_DESC_ZX:
              "https://images3.c-ctrip.com/ztrip/hotel/2022/3/popup-hj-zx@3x.webp",
            BARGAIN_DESC_TY:
              "https://images3.c-ctrip.com/ztrip/hotel/2022/3/popup-hj-ty@3x.webp",
            BACK_TOP:
              "https://images3.c-ctrip.com/ztrip/hotel/2022/6/top@3x.webp",
          },
          N = {
            NEW_GUEST: "NEW_GUEST",
            NOTICE: "NOTICE",
            ADVERTISEMENT: "ADVERTISEMENT",
            MEMBER: "MEMBER",
            COUPON: "COUPON",
            ACTIVITY: "ACTIVITY",
            STUDENT_PROMOTION: "STUDENT_PROMOTION",
            GUESS_STUDENT: "GUESS_STUDENT",
            SUBSIDY_ACTIVITY: "SUBSIDY_ACTIVITY",
            MEMBER_EXPERIENCE: "MEMBER_EXPERIENCE",
            FLIGHT_CASH: "FLIGHT_CASH",
            TRAIN_TIED_CASH: "TRAIN_TIED_CASH",
            ATMOSPHERE: "ATMOSPHERE",
          },
          w = {
            NO_HOTEL: "没有查询到酒店",
            NO_MORE: "没有更多酒店了",
            LOAD_MORE: "上拉加载更多",
            LOADING: "加载中...",
            RECEIVED_SUCCESS: "领取成功",
          },
          _ = {
            cityId: "2",
            cityName: "上海",
            cityAddress: "上海市",
            districtId: "0",
          },
          Z = {
            newGuestShow: { key: 209274, bizKey: "VX_list_xkxc_show" },
            newGuestClick: { key: 209279, bizKey: "VX_list_xkxclq_click" },
            newGuestClose: { key: 209280, bizKey: "VX_list_closexc_click" },
            filterTabClick: {
              2: "hotel_list_filter_click",
              3: "hotel_list_filter_poi_click",
              4: "hotel_list_filter_pricestar_click",
              5: "hotel_list_filter_rank_click",
            },
            listQuery: "O_HOTEL_LIST_QUERY",
            listRes: "O_HOTEL_LIST_RESPONSE",
            listShow: "O_HOTEL_LIST_SHOW_TIME",
          },
          T = "mianfang",
          y = { BARGAIN: "29|418", TONIGHT_SALE: "29|33" },
          v = {
            type_feature: "1",
            type_brand: "2",
            type_facility: "3",
            type_bedType: "4",
            type_breakfast: "5",
            type_comment: "6",
            type_payment: "7",
            type_business_district: "8",
            type_Administrative_Region: "9",
            type_Airport_Station: "10",
            type_Metro_station: "11",
            type_hot_landmark_1: "12",
            type_hot_landmark_2: "13",
            type_distance: "14",
            type_price: "15",
            type_star: "16",
            type_sort: "17",
            type_Poi: "18",
            type_city: "19",
            type_under_city: "20",
            type_under_county: "21",
            type_self_define: "22",
            type_hot_key_word: "23",
            type_my_position: "24",
            type_key_university: "25",
            type_key_hospital: "26",
            type_Metro_line: "27",
            type_hot: "28",
            type_preferential_promotion: "29",
            type_hotel: "30",
            type_key_destPosition: "36",
            type_key_same_brand: "38",
            type_custom_impress: "56",
            type_key_word_history: "1033",
            type_enquiry_price: "82",
            type_enquiry_sort: "83",
            type_integral_exchange: "89",
            type_room_facilities: "91",
            type_comment_number: "93",
            type_diamond_star: "99",
            type_10023: "10023",
          },
          V = [
            v.type_price,
            v.type_star,
            v.type_brand,
            v.type_comment,
            v.type_breakfast,
            v.type_bedType,
            v.type_facility,
            v.type_preferential_promotion,
            v.type_distance,
            v.type_self_define,
            v.type_feature,
            v.type_room_facilities,
            v.type_integral_exchange,
            v.type_comment_number,
            v.type_hotel,
          ],
          x = "29|23",
          b = "screenTrainAndFlight",
          B = { NORMAL: 0, SOLD_OUT: 32, CLOSED: 8192 };
      },
      92667: function (e, t, i) {
        i.d(t, {
          BK: function () {
            return V;
          },
          BN: function () {
            return f;
          },
          Cp: function () {
            return h;
          },
          Dq: function () {
            return y;
          },
          Gk: function () {
            return X;
          },
          IL: function () {
            return Z;
          },
          Jn: function () {
            return T;
          },
          Kw: function () {
            return p;
          },
          L4: function () {
            return z;
          },
          LF: function () {
            return d;
          },
          Nk: function () {
            return P;
          },
          TM: function () {
            return m;
          },
          Vl: function () {
            return N;
          },
          Xn: function () {
            return u;
          },
          YO: function () {
            return H;
          },
          Yb: function () {
            return _;
          },
          Zu: function () {
            return O;
          },
          _2: function () {
            return G;
          },
          _6: function () {
            return L;
          },
          _b: function () {
            return k;
          },
          bK: function () {
            return g;
          },
          dq: function () {
            return C;
          },
          hP: function () {
            return w;
          },
          io: function () {
            return B;
          },
          it: function () {
            return s;
          },
          j_: function () {
            return F;
          },
          k2: function () {
            return x;
          },
          kQ: function () {
            return M;
          },
          o$: function () {
            return v;
          },
          pE: function () {
            return E;
          },
          qs: function () {
            return D;
          },
          rX: function () {
            return j;
          },
          sR: function () {
            return S;
          },
          wO: function () {
            return I;
          },
          wy: function () {
            return b;
          },
          xB: function () {
            return R;
          },
          y8: function () {
            return A;
          },
        });
        var n = i(79792),
          a = i(17377),
          c = function (e) {
            return (0, a.ZP)({
              serviceCode: e.serviceCode,
              path: e.path,
              bu: "hotel",
              encryptFlag: e.encryptFlag,
            });
          },
          l = "16583",
          r = "14784",
          o = "17302",
          s = c({ serviceCode: r, path: "hotelListSearch" }),
          d = c({ serviceCode: r, path: "addHotelPriceMonitor" }),
          m = c({ serviceCode: r, path: "getTyHotelKeyWord" }),
          u = c({ serviceCode: r, path: "GetTyHotelPicList" }),
          h = c({ serviceCode: r, path: "getTrafficScenicDetails" }),
          p = c({
            serviceCode: o,
            path: n.default.isBaidu
              ? "TyHotelBookingCheck"
              : "GetTyHotelBookingCheck",
            encryptFlag: 1,
          }),
          f = c({
            serviceCode: o,
            path: n.default.isBaidu
              ? "GetUserPreferentialActivity"
              : "GetPreferentialActivity",
          }),
          g = c({
            serviceCode: o,
            path: n.default.isBaidu ? "HotelOrderCreate" : "HotelTyOrderCreate",
            encryptFlag: 1,
          }),
          N = c({ serviceCode: r, path: "getRoomFacility" }),
          w = c({ serviceCode: o, path: "InvoicePushSms" }),
          _ = c({ serviceCode: r, path: "advertisingReport" }),
          Z =
            (c({ serviceCode: o, path: "GetOrderPayInfo" }),
            c({
              serviceCode: o,
              path: n.default.isBaidu ? "GetOrderDetail" : "GetTyOrderDetail",
              encryptFlag: 1,
            })),
          T = c({ serviceCode: l, path: "startActivityTask" }),
          y = c({ serviceCode: o, path: "RemindCheckOrder" }),
          v = c({
            serviceCode: o,
            path: n.default.isBaidu ? "CancelHotelOrder" : "CancelOrder",
          }),
          V = c({ serviceCode: r, path: "GetTyHotelIntroductionForDetail" }),
          x = c({ serviceCode: r, path: "GetTyHotelCommentGroup" }),
          b = c({ serviceCode: l, path: "GetCouponList" }),
          B = c({ serviceCode: l, path: "GrantCoupon" }),
          C = c({ serviceCode: r, path: "getUserOperationHotelList" }),
          I = c({ serviceCode: l, path: "OperateUserHistory" }),
          X = c({
            serviceCode: o,
            path: n.default.isBaidu
              ? "TyHotelBookingCheckExtend"
              : "GetTyHotelBookingCheckExtend",
            encryptFlag: 1,
          }),
          E = c({ serviceCode: l, path: "grantCoupon" }),
          k = c({ serviceCode: l, path: "extractPriceAct" }),
          P =
            (c({ serviceCode: l, path: "joinAccelerationAct" }),
            c({ serviceCode: o, path: "GetTyOrderShareDetail" })),
          S = c({ serviceCode: r, path: "getHotelCoupons" }),
          L = c({ serviceCode: l, path: "receiveHotelCoupon" }),
          R = c({ serviceCode: r, path: "getHotelPriceMonitorFilter" }),
          O = c({ serviceCode: r, path: "GetTyHotelAskReplyList" }),
          D = c({ serviceCode: r, path: "GetHotelPriceMonitorTaskDetailInfo" }),
          A = c({ serviceCode: r, path: "delHotelPriceMonitorTask" }),
          H = c({ serviceCode: r, path: "getUserImportantRightV2" }),
          j = c({ serviceCode: r, path: "GetTyHotelDetail" }),
          z = c({ serviceCode: r, path: "GetTyHotelRoomPrice" }),
          M =
            (c({ serviceCode: l, path: "extractPriceAct" }),
            c({ serviceCode: o, path: "DeleteOrder" }),
            c({ serviceCode: r, path: "getHotelNearByRecommend" })),
          F = c({ serviceCode: o, path: "AddUserComment" }),
          G = c({ serviceCode: "19596", path: "frontEndPushMessage" });
      },
    },
  ]);
})();
