!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [57228],
      {
        84779: function (e, t, o) {
          var i,
            a = o(32180),
            n = o(57042),
            l = o(24460),
            c = o(21867),
            r = o(86066),
            s = o(90983),
            d = o(45023),
            m = o(22276),
            u = o(79301),
            h = o(95308),
            p = o(90129),
            g = o(298),
            f = o(52500),
            w = o(71515),
            v = o(92954),
            y = o.n(v),
            N = o(58676),
            I = o(48792),
            T = o.n(I),
            Z = o(3205),
            V = o(18783),
            k = o(79910),
            b = o(79792),
            x = o(2809),
            C = o(20592),
            P = o(62607),
            D = o(79404),
            R = o(17767),
            L = o(80626),
            B = o(90668),
            S = o(84116),
            X = o(48813),
            F = f.default.memo(function (e) {
              var t = e.loading,
                o = e.date,
                i = e.onHandleDateClick,
                a = e.roomNumber,
                n = e.showRoomCountPop,
                l = (0, f.useState)(o),
                c = (0, p.Z)(l, 2),
                r = c[0],
                s = c[1],
                d = r.checkInDate,
                m = r.checkOutDate,
                u = r.checkInDay_disp,
                h = r.checkOutDay_disp,
                g = r.totalDays,
                v = (0, f.useCallback)(
                  function () {
                    (0, L.oU)(
                      {
                        checkInDate: r.checkInDate,
                        checkOutDate: r.checkOutDate,
                      },
                      function (e) {
                        var t = (0, L.vc)(e.date),
                          o = (0, L.rv)(t);
                        s(t), i({ date: t, queryDate: o }), (0, L.VX)(t);
                      }
                    );
                  },
                  [r, i]
                ),
                y = (0, p.Z)(u, 2),
                N = y[0],
                I = y[1],
                T = (0, p.Z)(h, 2),
                Z = T[0],
                V = T[1];
              return (
                (0, f.useEffect)(
                  function () {
                    (o.checkInDate === d && o.checkOutDate === m) || s(o);
                  },
                  [o, d, m]
                ),
                (0, X.BX)(w.View, {
                  className: "hotel-date-room-count",
                  children: [
                    (0, X.BX)(w.View, {
                      className: "hotel-date-room-count-bd",
                      id: "AXBq",
                      onClick: v,
                      style: (0, B.LP)(g && !t, "flex"),
                      children: [
                        (0, X.BX)(w.View, {
                          className: "date",
                          children: [
                            N,
                            (0, X.tZ)(w.Text, {
                              className: "txt",
                              children: I,
                            }),
                          ],
                        }),
                        (0, X.BX)(w.View, {
                          className: "total-day-count",
                          children: [g, "晚"],
                        }),
                        (0, X.BX)(w.View, {
                          className: "date",
                          children: [
                            Z,
                            (0, X.tZ)(w.Text, {
                              className: "txt",
                              children: V,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, X.BX)(w.View, {
                      className: "hotel-room-count",
                      onClick: n,
                      style: (0, B.LP)(g && !t),
                      children: [
                        (0, X.BX)(w.Text, {
                          className: "name",
                          children: [a, "间"],
                        }),
                        (0, X.tZ)(w.Image, {
                          className: "arrow-icon",
                          src: S.W.location_arrow,
                          webp: !0,
                        }),
                      ],
                    }),
                  ],
                })
              );
            }),
            _ = o(27113),
            H = o(73130),
            M = o(39173),
            A = o(14203),
            O = o(8271),
            z = o.n(O),
            E = o(21999),
            q = o(35428),
            U = o(81957),
            j = [
              { title: "预订", selector: "hotelDate" },
              { title: "评价", selector: "evaluation" },
              { title: "卖点/设施", selector: ["pictureShow", "facility"] },
              { title: "推荐", selector: "recommend" },
            ],
            K = f.default.memo(function (e) {
              var t = e.elementsQuery,
                o = e.navView,
                i = e.rate,
                a = e.statusBarHeight,
                n = e.onTopNavigateTo,
                l = { position: "fixed", top: "".concat(a * i + 88, "rpx") },
                c = function (e) {
                  return (0, B.gP)(e === o || e.includes(o), "active");
                },
                r = j.filter(function (e) {
                  return Array.isArray(e.selector)
                    ? Object.keys(t).some(function (t) {
                        return e.selector.includes(t);
                      })
                    : !!t[e.selector];
                }),
                s = "width:calc(100% / ".concat(r.length, ")");
              return (0, X.tZ)(w.View, {
                className: "top-wrap",
                style: l,
                children: (0, X.tZ)(w.View, {
                  className: "top-bar-nav",
                  children: r.map(function (e, t) {
                    return (0, X.BX)(
                      w.View,
                      {
                        className: "item ".concat(c(e.selector)),
                        id: "AXDI",
                        onClick: function (t) {
                          return n(t, e);
                        },
                        style: s,
                        children: [
                          (0, X.tZ)(w.View, {
                            className: "title",
                            children: e.title,
                          }),
                          (0, X.tZ)(w.View, { className: "active-line" }),
                        ],
                      },
                      t
                    );
                  }),
                }),
              });
            }),
            Q = o(92667),
            W = o(96427),
            G = o(70204),
            Y = o(59020),
            J = o(49120),
            $ = f.default.memo(function (e) {
              var t,
                o = e.giftBox,
                i = e.isChild,
                a = e.onBriefClick,
                n = (0, f.useCallback)(
                  function (e) {
                    e.stopPropagation(), a && a();
                  },
                  [a]
                );
              if (
                null == o ||
                null === (t = o.details) ||
                void 0 === t ||
                !t.length
              )
                return null;
              var l = (0, B.gP)(i, " child");
              return (0, X.tZ)(w.View, {
                className: "package-wrap".concat(l),
                id: "AXBx",
                onClick: n,
                children: o.details
                  .sort(function (e, t) {
                    return t.type - e.type;
                  })
                  .map(function (e, t) {
                    var i = "";
                    return (
                      1 === o.type
                        ? (i = "礼")
                        : 2 === e.type
                        ? (i = "食")
                        : 3 === e.type && (i = "享"),
                      i
                        ? (0, X.BX)(
                            w.View,
                            {
                              className: "item",
                              children: [
                                (0, X.tZ)(w.View, {
                                  className: "icon-name",
                                  children: i,
                                }),
                                (0, X.tZ)(w.View, {
                                  className: "desc",
                                  children: e.jointName,
                                }),
                              ],
                            },
                            t
                          )
                        : null
                    );
                  }),
              });
            }),
            ee = {
              2: "https://images3.c-ctrip.com/ztrip/hotel/2022/1/eat@3x.png",
              3: "https://images3.c-ctrip.com/ztrip/hotel/2022/1/enjoy@3x.png",
            },
            te = {
              2: "https://images3.c-ctrip.com/ztrip/hotel/2022/2/food@3x.png",
              3: "https://images3.c-ctrip.com/ztrip/hotel/2022/2/play@3x.png",
            },
            oe = f.default.memo(function (e) {
              var t = e.screenWidth,
                o = e.giftBox,
                i = e.highValuePackage,
                a = e.onBriefClick,
                n = e.expanded,
                l = o || i,
                c = (0, f.useCallback)(
                  function (e) {
                    e.stopPropagation(), a && a();
                  },
                  [a]
                ),
                r = (0, f.useCallback)(function (e) {
                  var t = (0, J.getCurrentPage)();
                  null != t &&
                    t.ubtTrace &&
                    t.ubtTrace(208558, {
                      bizKey: "hotel_detail_xproduct_click",
                      pageId: b.default.isTieyou
                        ? "10650018761"
                        : "10650018584",
                      x_product_name: e,
                    });
                }, []),
                s = l.details.filter(function (e) {
                  return [2, 3].includes(e.type);
                }),
                d = (function (e, t, o) {
                  var i =
                    e.length > 1
                      ? Math.floor((t - 40 - 90 - 15) / 24)
                      : Math.floor((t - 40 - 45 - 10) / 12);
                  return e
                    .sort(function (e, t) {
                      return t.type - e.type;
                    })
                    .map(function (e) {
                      var t = (0, p.Z)(e.list, 1)[0].pics || [],
                        a = (0, p.Z)(t, 1)[0],
                        n = (null == a ? void 0 : a.url) || te[e.type],
                        l = !o && 3 === e.type,
                        c = { backgroundImage: "url(".concat(n, ")") },
                        r = { backgroundImage: "url(".concat(ee[e.type], ")") },
                        s = e.jointName.split(""),
                        d = o
                          ? [
                              s.slice(0, i).join(""),
                              s.slice(i, s.length).join(""),
                            ]
                          : [e.jointName];
                      return (0,
                      g.Z)((0, g.Z)({}, e), {}, { dashed: l, coverStyle: c, iconStyle: r, jointNames: d });
                    });
                })(s, t, n),
                m = s.length > 0,
                u = (0, B.gP)(n && m, " horizontal"),
                h = (0, B.gP)(1 === s.length, " one"),
                v = "package-wrap v2".concat(u).concat(h);
              return (0, X.tZ)(f.default.Fragment, {
                children:
                  (null == d ? void 0 : d.length) > 0 &&
                  (0, X.tZ)(w.View, {
                    className: v,
                    id: "AXBy",
                    onClick: c,
                    children: d.map(function (e, t) {
                      return (0, X.BX)(
                        w.View,
                        {
                          className: "item",
                          id: "AXBz",
                          onClick: function () {
                            return r(e.jointName);
                          },
                          children: [
                            (0, X.tZ)(w.View, {
                              className: "cover",
                              style: e.coverStyle,
                              children: (0, X.tZ)(w.View, {
                                className: "icon",
                                style: e.iconStyle,
                              }),
                            }),
                            (0, X.tZ)(w.View, {
                              className: "desc-wrap".concat(
                                (0, B.gP)(e.dashed, " dashed")
                              ),
                              children: e.jointNames.map(function (e, t) {
                                return (0,
                                X.tZ)(w.View, { className: "desc", children: e }, t);
                              }),
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
              });
            }),
            ie = ["无早", "无早餐", "无餐食"],
            ae = ["限时取消", "免费取消"],
            ne = [51, 18, 4],
            le = function (e) {
              var t = e.cancelItem,
                o = e.foodItem,
                i = e.highValuePackage;
              return (0, X.BX)(w.View, {
                className: "child-info",
                children: [
                  (null == o ? void 0 : o.itemValue) &&
                    (0, X.BX)(X.HY, {
                      children: [
                        (0, X.tZ)(w.Text, {
                          className: o.className,
                          children: o.itemValue,
                        }),
                        (null == t ? void 0 : t.itemValue) &&
                          (0, X.tZ)(w.Text, { className: "vline" }),
                      ],
                    }),
                  (null == t ? void 0 : t.itemValue) &&
                    (0, X.tZ)(w.Text, {
                      className: t.className,
                      children: t.itemValue,
                    }),
                  i &&
                    (0, X.tZ)(w.Image, {
                      className: "package-tag",
                      src: "https://images3.c-ctrip.com/ztrip/hotel/2022/2/tag_cztc1@3x.png",
                      mode: "heightFix",
                    }),
                ],
              });
            },
            ce = function (e) {
              var t = e.displayInfos,
                o = e.isHourRoom,
                i = e.isParentRoom,
                a = e.hourRoomStr,
                n = e.roomTip,
                l = e.cancelItem,
                c = e.foodItem,
                r = e.guaranteeInfo,
                s = (0, B.Mv)(null == c ? void 0 : c.itemValue),
                d = (0, B.Mv)(null == l ? void 0 : l.itemValue),
                m =
                  (d && null != l && l.isMember ? s : "".concat(s).concat(d))
                    .length > 25,
                u = !i && c && m,
                h =
                  !i &&
                  (null == r ? void 0 : r.roomDescTag) &&
                  ![0, 2].includes(r.type);
              return (0, X.BX)(w.View, {
                className: "physical-info",
                children: [
                  o &&
                    !i &&
                    (0, X.tZ)(w.View, {
                      className: "txt hour-room",
                      children: a,
                    }),
                  (null == t ? void 0 : t.length) > 0 &&
                    (0, X.tZ)(w.View, {
                      className: "row",
                      children: (0, X.tZ)(w.View, {
                        className: "base-wrap",
                        children: t.map(function (e, t) {
                          return (0,
                          X.tZ)(w.Text, { className: "base-info", children: e }, t);
                        }),
                      }),
                    }),
                  !i &&
                    n &&
                    (0, X.BX)(w.View, {
                      className: "row",
                      children: [
                        (0, X.tZ)(w.Image, {
                          className: "tip-icon",
                          src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/2023-6/Ui/ic_xuesheng@3x.webp",
                        }),
                        n,
                      ],
                    }),
                  u &&
                    (0, X.tZ)(w.View, {
                      className: "row fc",
                      children: (0, X.tZ)(w.Text, {
                        className: c.className,
                        children: c.itemValue,
                      }),
                    }),
                  h &&
                    (0, X.tZ)(w.View, {
                      className: "row",
                      children: (0, X.tZ)(w.Text, {
                        className: "txt",
                        children: r.roomDescTag,
                      }),
                    }),
                  (null == l ? void 0 : l.itemValue) &&
                    !l.isMember &&
                    (0, X.BX)(w.View, {
                      className: "row fc",
                      children: [
                        !i &&
                          c &&
                          !m &&
                          (0, X.BX)(X.HY, {
                            children: [
                              (0, X.tZ)(w.Text, {
                                className: c.className,
                                children: c.itemValue,
                              }),
                              (0, X.tZ)(w.View, { className: "vline" }),
                            ],
                          }),
                        (0, X.tZ)(w.Text, {
                          className: l.className,
                          children: l.itemValue,
                        }),
                      ],
                    }),
                  (null == l ? void 0 : l.isMember) &&
                    (0, X.BX)(X.HY, {
                      children: [
                        (null == c ? void 0 : c.itemValue) &&
                          !i &&
                          (0, X.tZ)(w.View, {
                            className: "row",
                            children: (0, X.tZ)(w.Text, {
                              className: c.className,
                              children: c.itemValue,
                            }),
                          }),
                        (0, X.tZ)(w.View, {
                          className: "row",
                          children: (0, X.tZ)(w.Text, {
                            className: l.className,
                            children: l.itemValue,
                          }),
                        }),
                      ],
                    }),
                ],
              });
            },
            re = f.default.memo(function (e) {
              var t = e.computerTagList,
                o = e.roomBasicList,
                i = e.roomTagList,
                a = void 0 === i ? [] : i,
                n = e.isParentRoom,
                l = e.roomTip,
                c = e.highValuePackage,
                r = e.isPhysical,
                s = e.isHourRoom,
                d = e.hourRoomStr,
                u = e.guaranteeInfo,
                h = (function (e) {
                  var t = [];
                  ne.forEach(function (o) {
                    var i = e.find(function (e) {
                        return e.type === o && e.itemValue;
                      }),
                      a = null == i ? void 0 : i.itemValue;
                    4 === (null == i ? void 0 : i.type) &&
                      (a = "".concat(i.itemValue, "m²")),
                      a && t.push(a);
                  });
                  var o = e.find(function (e) {
                    return 5 === e.type;
                  });
                  if (o) {
                    var i = "可住".concat(o.itemValue);
                    t.push(i);
                  }
                  return t;
                })(o),
                p = o.find(function (e) {
                  return !(1 != e.type || !e.itemValue);
                }),
                g = !ie.includes(null == p ? void 0 : p.itemValue);
              p &&
                (p.className = "food base-info".concat(
                  (0, B.gP)(g, " txt-dark-blue")
                ));
              var f = [].concat((0, m.Z)(o), (0, m.Z)(a)).find(function (e) {
                  return 3 == e.type && !!e.itemValue;
                }),
                w = o.find(function (e) {
                  return -3 == e.type && !!e.itemValue;
                }),
                v = w || f,
                y = ae.some(function (e) {
                  return -1 !== (null == v ? void 0 : v.itemValue.indexOf(e));
                });
              return (
                v &&
                  ((v.className = "cancel".concat(
                    (0, B.gP)(y, " txt-dark-blue")
                  )),
                  (v.isMember = !!w)),
                !n && null != t && t.length && h.unshift(t.join(" ")),
                r
                  ? (0, X.tZ)(ce, {
                      displayInfos: h,
                      isHourRoom: s,
                      isParentRoom: n,
                      hourRoomStr: d,
                      roomTip: l,
                      cancelItem: v,
                      foodItem: p,
                      guaranteeInfo: u,
                    })
                  : (0, X.tZ)(le, {
                      cancelItem: v,
                      foodItem: p,
                      isTxtGreen: y,
                      highValuePackage: c,
                    })
              );
            }),
            se = o(34229),
            de =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/jinyetejia/jinye_xq_mu_tag.png",
            me =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/jinyetejia/jinye_xq_zi_tag.webp",
            ue = f.default.memo(function (e) {
              var t = e.tonightRemark,
                o = e.tonightEndTime,
                i = e.isChild,
                a = i ? me : de,
                n = "tonight-countdown".concat((0, L.gP)(i, " child")),
                l = z()(+o).format("YYYY-MM-DD HH:mm:ss");
              return (0,
              X.BX)(w.View, { className: n, children: [(0, X.tZ)(A.Z, { className: "tonight-icon", src: a, mode: "heightFix", inline: !0 }), (0, X.BX)(w.View, { className: "count-time", children: [(0, X.tZ)(se.ZtCountdown, { className: "end-time", endTime: l }), t && (0, X.tZ)(w.Text, { children: t })] })] });
            }),
            he =
              "https://images3.c-ctrip.com/ztrip/hotel/hotel_bg_room_default_image.png",
            pe = f.default.memo(function (e) {
              var t = e.roomItem,
                o = e.lowestPriceRoom,
                i = e.type,
                a = e.isParentRoom,
                n = t || {},
                l = n.roomUrl,
                c = n.imageList,
                r = n.highValuePackage,
                s = n.imgRemark,
                d = n.tonightEndTime,
                m = n.status,
                u = ["lowest", "groupOnlyOne"].includes(i),
                h = [2, 4].includes(m),
                p = d && !h,
                g = (0, f.useCallback)(
                  function (e) {
                    if (a) {
                      e.stopPropagation();
                      var t = encodeURIComponent(
                        JSON.stringify({ images: c, index: 0 })
                      );
                      y().navigateTo({
                        url: "/pages/hotel/imagebox/imagebox?data=".concat(t),
                      });
                    }
                  },
                  [a, c]
                );
              return (0,
              X.BX)(w.View, { className: "lbox", children: [(0, X.tZ)(w.Image, { mode: "aspectFill", src: l || he, className: "img", id: "AXCl", onClick: g, children: c.length > 0 && (0, X.tZ)(w.View, { className: "no", children: c.length }) }), !p && !d && (0, X.BX)(X.HY, { children: [u && r && (0, X.tZ)(w.View, { className: "room-image-tag" }), "lowest" === i && !r && (0, X.tZ)(w.View, { className: "room-tag", children: s || "猜你喜欢" })] }), p && (0, X.tZ)(ue, { lowestPriceRoom: o, tonightEndTime: d })] });
            }),
            ge = f.default.memo(function (e) {
              var t = e.promotionTagList,
                o = e.isDiscount,
                i = "tag-box".concat((0, B.gP)(o, " discount"));
              return (0, X.tZ)(w.View, {
                className: i,
                children: t.map(function (e, t) {
                  var o = e.backgroundColor,
                    i = e.textColor,
                    a = e.borderColor,
                    n = e.iconUrl,
                    l = e.text,
                    c = e.tagAmount,
                    r = e.style,
                    s = { backgroundColor: o, color: i, borderColor: a },
                    d = "".concat(l).concat(c || ""),
                    m = "item".concat((0, B.gP)(3 === r, " member"));
                  return (0,
                  X.BX)(w.View, { className: m, style: s, children: [n && (0, X.tZ)(w.Image, { className: "icon", src: n, mode: "widthFix" }), d] }, t);
                }),
              });
            }),
            fe = o(75515),
            we = f.default.memo(function (e) {
              var t = e.room,
                o = e.isLogin,
                i = e.noop,
                a = e.roomType,
                n = e.groupIndex,
                l = e.childIndex,
                c = e.goToInput,
                r = t.num,
                s = t.status,
                d = t.payType,
                m = t.guaranteeInfo,
                u = t.canReceiveCouponItem,
                h = r ? "抢" : "订",
                p = "book-block red ".concat(b.default.zxTyStr);
              if ([2, 4].includes(s))
                return (
                  (p += " filter"),
                  (0, X.BX)(w.View, {
                    className: p,
                    children: [
                      (0, X.tZ)(w.Button, {
                        className: "btn-book",
                        disabled: !0,
                        children: "满房",
                      }),
                      (0, X.tZ)(w.View, {
                        className: "pay-way-box",
                        children: "在线付",
                      }),
                    ],
                  })
                );
              if (1 === d)
                return (0, X.BX)(w.View, {
                  className: p,
                  id: "AXCZ",
                  onClick: i,
                  children: [
                    o &&
                      (0, X.tZ)(w.Button, {
                        className: "btn-book btn-red",
                        id: "AXCa",
                        onClick: c,
                        "data-roomtype": a,
                        "data-groupindex": n,
                        "data-childindex": l,
                        children: h,
                      }),
                    !o &&
                      !b.default.isAlipay &&
                      (0, X.tZ)(w.Button, {
                        className: "btn-book btn-red",
                        id: "AXCb",
                        onClick: c,
                        "data-roomtype": a,
                        "data-groupindex": n,
                        "data-childindex": l,
                        children: h,
                      }),
                    !o &&
                      b.default.isAlipay &&
                      (0, X.tZ)(w.Button, {
                        className: "btn-book btn-red",
                        openType: "getAuthorize",
                        scope: "phoneNumber",
                        onGetAuthorize: c,
                        "data-roomtype": a,
                        "data-groupindex": n,
                        "data-childindex": l,
                        children: h,
                      }),
                    (0, X.tZ)(w.View, {
                      className: "pay-way-box",
                      children:
                        null != u && u.promotionKey ? "领券付" : "在线付",
                    }),
                  ],
                });
              if (0 == (null == m ? void 0 : m.type)) {
                var g = "btn-book-dd btn-red btn-line-".concat(
                  b.default.zxTyStr
                );
                return (0, X.BX)(w.View, {
                  className: p,
                  id: "AXCc",
                  onClick: i,
                  children: [
                    o &&
                      (0, X.tZ)(w.Button, {
                        className: g,
                        id: "AXCd",
                        onClick: c,
                        "data-roomtype": a,
                        "data-groupindex": n,
                        "data-childindex": l,
                        children: h,
                      }),
                    !o &&
                      !b.default.isAlipay &&
                      (0, X.tZ)(w.Button, {
                        className: g,
                        id: "AXCe",
                        onClick: c,
                        "data-roomtype": a,
                        "data-groupindex": n,
                        "data-childindex": l,
                        children: h,
                      }),
                    !o &&
                      b.default.isAlipay &&
                      (0, X.tZ)(w.Button, {
                        className: g,
                        openType: "getAuthorize",
                        scope: "phoneNumber",
                        onGetAuthorize: c,
                        "data-roomtype": a,
                        "data-groupindex": n,
                        "data-childindex": l,
                        children: h,
                      }),
                    (0, X.tZ)(w.View, {
                      className: "pay-way-box",
                      children:
                        null != u && u.promotionKey ? "领券付" : "到店付",
                    }),
                  ],
                });
              }
              return (0,
              X.BX)(w.View, { className: p, id: "AXCf", onClick: i, children: [o && (0, X.tZ)(w.Button, { className: "btn-book btn-red", id: "AXCg", onClick: c, "data-roomtype": a, "data-groupindex": n, "data-childindex": l, children: h }), !o && !b.default.isAlipay && (0, X.tZ)(w.Button, { className: "btn-book btn-red", id: "AXCh", onClick: c, "data-roomtype": a, "data-groupindex": n, "data-childindex": l, children: h }), !o && b.default.isAlipay && (0, X.tZ)(w.Button, { className: "btn-book btn-red", openType: "getAuthorize", scope: "phoneNumber", onGetAuthorize: c, "data-roomtype": a, "data-groupindex": n, "data-childindex": l, children: h }), (0, X.tZ)(w.View, { className: "pay-way-box", children: "到店付" })] });
            }),
            ve = f.default.memo(function (e) {
              var t,
                o,
                i = e.roomItem,
                a = e.hasAfter,
                n = e.showPriceModal,
                l = e.isShowEvery,
                c = e.isSelectManyNight,
                r = e.totalDays,
                s = "price color-red"
                  .concat(a ? " after" : "", " ")
                  .concat(b.default.zxTyStr),
                d = i.couponTag
                  ? i.priceInfo.couponSalePrice
                  : i.priceInfo.salePrice,
                m =
                  i.priceInfo.noLoginPrice ||
                  (c
                    ? null === (t = i.priceInfo) ||
                      void 0 === t ||
                      null === (o = t.multiNightPriceDetail) ||
                      void 0 === o
                      ? void 0
                      : o.totalZXSalePrice
                    : d),
                u = i.priceExtraDatas || [],
                h = (0, p.Z)(u, 1)[0],
                g = null == h ? void 0 : h.icon;
              return (0,
              X.BX)(w.View, { className: "", style: "display:flex;align-items:flex-end;justify-content:flex-end;", id: "AXDC", onClick: n, children: [g && (0, X.tZ)(w.Image, { className: "bargain-icon", src: g, mode: "widthFix" }), c && (0, X.BX)(w.View, { className: "every-text", children: ["每间", r, "晚"] }), !c && l && (0, X.tZ)(w.View, { className: "every-text", children: "每间" }), (0, X.tZ)(w.View, { className: s, children: (0, X.tZ)(w.Text, { children: m }) })] });
            }),
            ye = "积分兑房费立减",
            Ne = f.default.memo(function (e) {
              var t,
                o,
                i,
                a = e.isLogin,
                n = e.room,
                l = e.roomType,
                c = e.groupItem,
                r = e.isParentRoom,
                s = e.groupIndex,
                d = e.childIndex,
                m = e.noop,
                u = e.goToInput,
                h = e.goToBooking,
                p = e.showPriceModal,
                g = e.isChild,
                v = e.lowestPriceRoom,
                y = e.isShowEvery,
                N = e.isSelectManyNight,
                I = e.totalDays,
                T = n.baseId,
                Z = n.couponTag,
                V = n.hotelId,
                k = n.num,
                x = n.promotionTagList,
                C = n.promotionDiscountList,
                P = n.roomId,
                D = n.status,
                R = n.tonightEndTime,
                L = b.default.isWechat,
                S = [2, 4].includes(D),
                F = !S && !!k,
                _ = [];
              null == c ||
                null === (t = c.childList) ||
                void 0 === t ||
                t.forEach(function (e) {
                  var t;
                  null === (t = e.promotionTagList) ||
                    void 0 === t ||
                    t.forEach(function (e) {
                      _.find(function (t) {
                        return t.text === e.text;
                      }) || _.push(e);
                    });
                });
              var H = N
                  ? "优惠￥" +
                    (null == n ||
                    null === (o = n.priceInfo) ||
                    void 0 === o ||
                    null === (i = o.multiNightPriceDetail) ||
                    void 0 === i
                      ? void 0
                      : i.totalPromotionPrice)
                  : Z,
                M = r ? _ : x,
                A =
                  (null == M ? void 0 : M.length) < 3 &&
                  (null == M ? void 0 : M.length) > 0,
                O = !!H || (null == C ? void 0 : C.length) > 0,
                z = F || O,
                E = R && !S && g,
                q = (0, B.gP)(E, " remain"),
                U = "tips-discount".concat(q),
                j = (0, f.useCallback)(
                  function (e) {
                    e.stopPropagation(), p(n);
                  },
                  [n, p]
                );
              return (
                (0, f.useEffect)(
                  function () {
                    var e = (0, J.getCurrentPage)(),
                      t =
                        null == x
                          ? void 0
                          : x.find(function (e) {
                              return "积分兑早餐" === e.text;
                            }),
                      o =
                        null == x
                          ? void 0
                          : x.find(function (e) {
                              return e.text === ye;
                            });
                    if (null != e && e.ubtTrace && (t || o)) {
                      var i = {
                        bizKey: "hotel_detail_room_tag_show",
                        pageId: b.default.isTieyou
                          ? "10650018761"
                          : "10650018584",
                        detailTimeStamp: new Date().getTime(),
                        basicRoomId: T,
                        RoomId: P,
                        tagDesc: "积分兑早餐",
                      };
                      t && e.ubtTrace(208557, i),
                        o &&
                          ((i.hotelId = V),
                          (i.tagDesc = ye),
                          e.ubtTrace(208557, i));
                    }
                  },
                  [T, V, x, P, g]
                ),
                (0, X.BX)(w.View, {
                  className: "bottom-wrap",
                  children: [
                    (0, X.tZ)(w.View, {
                      className: "price-wrap",
                      children: (0, X.BX)(w.View, {
                        className: "price-tags-discount",
                        children: [
                          (0, X.tZ)(w.View, {
                            className: "price-tags",
                            children:
                              A && (0, X.tZ)(ge, { promotionTagList: M }),
                          }),
                          (0, X.tZ)(ve, {
                            roomItem: n,
                            showPriceModal: j,
                            isShowEvery: y,
                            isSelectManyNight: N,
                            totalDays: I,
                          }),
                          z &&
                            (0, X.BX)(w.View, {
                              className: U,
                              children: [
                                E &&
                                  (0, X.tZ)(ue, {
                                    lowestPriceRoom: v,
                                    tonightEndTime: R,
                                    isChild: g,
                                  }),
                                O &&
                                  (0, X.tZ)(fe.Z, {
                                    couponTag: H,
                                    promotionDiscountList: C,
                                    showHotelPriceCallback: function (e) {
                                      e.stopPropagation(), p(n);
                                    },
                                  }),
                              ],
                            }),
                        ],
                      }),
                    }),
                    !r &&
                      (0, X.BX)(w.View, {
                        className: "btn-wrap",
                        children: [
                          F &&
                            (0, X.tZ)(w.View, {
                              className: "tips color-red",
                              children: k,
                            }),
                          (0, X.tZ)(we, {
                            room: n,
                            isLogin: a,
                            isWechat: L,
                            noop: m,
                            goToInput: u,
                            roomType: l,
                            groupIndex: s,
                            childIndex: d,
                            goToBooking: h,
                          }),
                        ],
                      }),
                  ],
                })
              );
            }),
            Ie = f.default.memo(function (e) {
              var t = e.platformPriceList,
                o = e.isSelectManyNight;
              return (0, X.BX)(w.View, {
                className: "parity-info",
                children: [
                  (0, X.tZ)(w.View, {
                    className: "pk-icon",
                    children: (0, X.tZ)(w.Image, {
                      className: "icon",
                      src: "https://images3.c-ctrip.com/ztrip/hotel/202108/pk@3x.png",
                      mode: "widthFix",
                    }),
                  }),
                  null == t
                    ? void 0
                    : t.map(function (e, i) {
                        return (0,
                        X.BX)(w.View, { className: "parity-wrapper", children: [(0, X.BX)(w.View, { className: "parity", children: [(0, X.BX)(w.Text, { className: "name", children: [e.platformName, " "] }), (0, X.BX)(w.Text, { className: "price", children: ["¥", o ? (null == e ? void 0 : e.multiNightPlatformPrice) : e.platformPriceDisplay || "--"] })] }), i < t.length - 1 && (0, X.tZ)(w.Text, { className: "slash", children: "/" })] }, i);
                      }),
                ],
              });
            }),
            Te = "【积分兑】1份早餐",
            Ze = f.default.memo(function (e) {
              var t,
                o,
                i,
                a = e.isLogin,
                n = e.room,
                l = e.lowestPriceRoom,
                c = e.roomType,
                r = e.isHourRoom,
                s = e.showHourRooms,
                d = e.groupItem,
                m = e.groupIndex,
                u = e.childIndex,
                h = e.hotelRoomPriceObj,
                g = e.isParentRoom,
                v = e.screenWidth,
                y = e.noop,
                N = e.openRoomIntroduce,
                I = e.showPriceModal,
                T = e.goToBooking,
                Z = e.expandRoom,
                V = e.goToInput,
                k = e.isShowEvery,
                x = e.isSelectManyNight,
                C = e.totalDays,
                P = n.baseId,
                D = n.checkInTimeInterval,
                R = n.computerTagList,
                L = n.continuousStayTime,
                S = n.excitationTag,
                F = n.giftBox,
                _ = n.highValuePackage,
                H = n.imgRemark,
                M = n.promotionTagList,
                A = n.roomBasicList,
                O = n.roomId,
                z = n.roomTip,
                E = n.status,
                q = n.subRoomName,
                U = n.couponTag,
                j = n.guaranteeInfo,
                K =
                  (null == _ || null === (t = _.details) || void 0 === t
                    ? void 0
                    : t.length) > 0,
                Q = !g && K,
                W = [2, 4].includes(E),
                G = (0, B.gP)(
                  g && (null == d ? void 0 : d.isExpand),
                  " parent"
                ),
                Y = (0, B.gP)(null == d ? void 0 : d.isExpand, " open"),
                ee = (0, B.gP)(W, " filter"),
                te = (0, B.gP)(Q, " v2"),
                ie = "hotel-item-wrap".concat(G, " ").concat(E),
                ae = "hotel-item".concat(ee).concat(Y).concat(te),
                ne = "".concat(ae, " book-v2"),
                le = (0, B.gP)(
                  null == d ? void 0 : d.isExpand,
                  "open",
                  "closed"
                ),
                ce = "ifont-open iconfont color-primary ".concat(le),
                se = "tit".concat((0, B.gP)(g, " parent")),
                de = "连住".concat(L, "，可住时间段：").concat(D),
                me = !!(
                  "lowest" === c &&
                  null != h &&
                  null !== (o = h.platformPriceList) &&
                  void 0 !== o &&
                  o.length &&
                  S &&
                  H
                ),
                ue = [];
              null == d ||
                null === (i = d.childList) ||
                void 0 === i ||
                i.forEach(function (e) {
                  var t;
                  null === (t = e.promotionTagList) ||
                    void 0 === t ||
                    t.forEach(function (e) {
                      ue.find(function (t) {
                        return t.text === e.text;
                      }) || ue.push(e);
                    });
                });
              var he = null != ue && ue.length ? ue : M,
                fe = he.findIndex(function (e) {
                  return e.text.includes("下单再领");
                });
              if (fe > -1) {
                var we = he.splice(fe, 1),
                  ve = (0, p.Z)(we, 1)[0],
                  ye = he.findIndex(function (e) {
                    return e.text.includes("下单再领");
                  }),
                  Ze = ve;
                if (ye > -1) {
                  var Ve = he.splice(ye, 1),
                    ke = (0, p.Z)(Ve, 1)[0],
                    be = ve.text.replace("下单再领¥", ""),
                    xe = ke.text.replace("下单再领¥", "");
                  Ze = parseInt(be) > parseInt(xe) ? ve : ke;
                }
                he.splice(0, 0, Ze);
              }
              var Ce = U && (null == he ? void 0 : he.length) > 2,
                Pe = (0, f.useCallback)(
                  function () {
                    g
                      ? Z(m)
                      : N({
                          roomtype: c,
                          tabIndex: _ ? 1 : 0,
                          isHourRoom: s,
                          groupIndex: m,
                          childIndex: u,
                        });
                  },
                  [c, _, s, m, u, N, g, Z]
                );
              return (
                (0, f.useEffect)(
                  function () {
                    var e = (0, J.getCurrentPage)();
                    null != e &&
                      e.ubtTrace &&
                      (te &&
                        e.ubtTrace(208557, {
                          bizKey: "hotel_detail_xproduct_show",
                          pageId: b.default.isTieyou
                            ? "10650018761"
                            : "10650018584",
                        }),
                      (null == A
                        ? void 0
                        : A.find(function (e) {
                            return e.itemValue === Te;
                          })) &&
                        e.ubtTrace(208557, {
                          bizKey: "hotel_detail_room_tag_show",
                          pageId: b.default.isTieyou
                            ? "10650018761"
                            : "10650018584",
                          detailTimeStamp: new Date().getTime(),
                          basicRoomId: P,
                          RoomId: O,
                          tagDesc: Te,
                        }));
                  },
                  [P, A, O, te]
                ),
                (0, X.BX)(w.View, {
                  className: ie,
                  children: [
                    (0, X.BX)(w.View, {
                      className: ae,
                      id: "AXCm",
                      onClick: Pe,
                      children: [
                        (0, X.tZ)(pe, {
                          roomItem: n,
                          lowestPriceRoom: l,
                          type: c,
                          isParentRoom: g,
                        }),
                        (0, X.BX)(w.View, {
                          className: "cont",
                          children: [
                            (0, X.BX)(w.View, {
                              className: se,
                              children: [
                                q,
                                !g &&
                                  (0, X.tZ)(w.Text, {
                                    className: "ifont-arr iconfont",
                                  }),
                                g && (0, X.tZ)(w.Text, { className: ce }),
                              ],
                            }),
                            (0, X.tZ)(re, {
                              computerTagList: R,
                              hourRoomStr: de,
                              isHourRoom: r,
                              isParentRoom: g,
                              isPackageRoom: K,
                              roomBasicList: A,
                              guaranteeInfo: j,
                              roomTip: z,
                              isPhysical: !0,
                            }),
                            (0, X.tZ)($, { giftBox: F, onBriefClick: Pe }),
                            Ce &&
                              (0, X.tZ)(ge, {
                                promotionTagList: he,
                                isDiscount: !0,
                              }),
                            Q
                              ? (0, X.tZ)(oe, {
                                  screenWidth: v,
                                  giftBox: F,
                                  highValuePackage: _,
                                  onBriefClick: Pe,
                                })
                              : (0, X.tZ)(Ne, {
                                  isLogin: a,
                                  room: n,
                                  roomType: c,
                                  groupItem: d,
                                  isParentRoom: g,
                                  groupIndex: m,
                                  childIndex: u,
                                  noop: y,
                                  goToInput: V,
                                  goToBooking: T,
                                  showPriceModal: I,
                                  isShowEvery: k,
                                  isSelectManyNight: x,
                                  totalDays: C,
                                }),
                          ],
                        }),
                      ],
                    }),
                    Q &&
                      (0, X.BX)(w.View, {
                        className: ne,
                        children: [
                          (0, X.tZ)(w.View, { className: "lbox" }),
                          (0, X.tZ)(w.View, {
                            className: "cont",
                            children: (0, X.tZ)(Ne, {
                              isLogin: a,
                              room: n,
                              roomType: c,
                              groupItem: d,
                              isParentRoom: g,
                              groupIndex: m,
                              childIndex: u,
                              noop: y,
                              goToInput: V,
                              goToBooking: T,
                              showPriceModal: I,
                              isShowEvery: k,
                              isSelectManyNight: x,
                              totalDays: C,
                            }),
                          }),
                        ],
                      }),
                    me &&
                      (0, X.tZ)(w.View, {
                        id: "AXCn",
                        onClick: function () {
                          I(n);
                        },
                        children: (0, X.tZ)(Ie, {
                          platformPriceList: h.platformPriceList,
                          isSelectManyNight: x,
                        }),
                      }),
                  ],
                })
              );
            }),
            Ve =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/2023-6/Ui/ic_xuesheng@3x.webp",
            ke = function (e) {
              var t = e.showGuaranteeDesc,
                o = e.guaranteeInfo,
                i = e.roomTip,
                a = e.subRoomTip,
                n = e.giftBox,
                l = e.onBriefClick;
              return t
                ? (0, X.tZ)(w.View, {
                    className: "txt",
                    children: o.roomDescTag,
                  })
                : i || a
                ? (0, X.BX)(w.View, {
                    className: "txt",
                    children: [
                      (0, X.tZ)(w.Image, { className: "tip-icon", src: Ve }),
                      " ",
                      a || i,
                    ],
                  })
                : (0, X.tZ)($, { giftBox: n, onBriefClick: l, isChild: !0 });
            },
            be = f.default.memo(function (e) {
              var t,
                o = e.isLogin,
                i = e.lowestPriceRoom,
                a = e.screenWidth,
                n = e.room,
                l = e.noop,
                c = e.groupItem,
                r = e.isHourRoom,
                s = e.showHourRooms,
                d = e.groupIndex,
                m = e.childIndex,
                u = e.openRoomIntroduce,
                h = e.goToInput,
                p = e.goToBooking,
                g = e.showPriceModal,
                f = e.isShowEvery,
                v = e.isSelectManyNight,
                y = e.totalDays,
                N = n.status,
                I = n.highValuePackage,
                T = n.continuousStayTime,
                Z = n.checkInTimeInterval,
                V = n.giftBox,
                k = n.roomBasicList,
                b = n.roomTagList,
                x = n.roomTip,
                C = n.subRoomTip,
                P = n.promotionTagList,
                D = n.guaranteeInfo,
                R = V || I,
                L =
                  (null == R || null === (t = R.details) || void 0 === t
                    ? void 0
                    : t.length) > 0,
                S = [2, 4].includes(N),
                F = "hotel-item expanded".concat((0, B.gP)(S, " filter")),
                _ = {
                  tabIndex: I ? 1 : 0,
                  isHourRoom: s,
                  groupIndex: d,
                  childIndex: m,
                },
                H = (null == P ? void 0 : P.length) > 2,
                M =
                  (null == D ? void 0 : D.roomDescTag) &&
                  ![0, 2].includes(null == D ? void 0 : D.type);
              return (0, X.BX)(w.View, {
                className: F,
                id: "AXCi",
                onClick: function () {
                  return u(_);
                },
                children: [
                  (0, X.BX)(w.View, {
                    className: "tit",
                    children: [
                      (0, X.tZ)(re, {
                        roomBasicList: k,
                        roomTagList: b,
                        isPackageRoom: L,
                        highValuePackage: I,
                        isChild: !0,
                      }),
                      (0, X.tZ)(w.Text, { className: "ifont-arr iconfont" }),
                    ],
                  }),
                  r &&
                    (0, X.BX)(w.View, {
                      className: "txt hour-room",
                      children: ["连住", T, "，可住时间段：", Z],
                    }),
                  L &&
                    (0, X.tZ)(oe, {
                      screenWidth: a,
                      giftBox: V,
                      highValuePackage: I,
                      onBriefClick: function () {
                        return u(_);
                      },
                      expanded: !0,
                    }),
                  (0, X.tZ)(ke, {
                    showGuaranteeDesc: M,
                    guaranteeInfo: D,
                    roomTip: x,
                    subRoomTip: C,
                    giftBox: V,
                    onBriefClick: function () {
                      return u(_);
                    },
                  }),
                  H && (0, X.tZ)(ge, { promotionTagList: P, isDiscount: !0 }),
                  (0, X.tZ)(Ne, {
                    isLogin: o,
                    room: n,
                    roomType: "other",
                    groupItem: c,
                    groupIndex: d,
                    childIndex: m,
                    noop: l,
                    goToInput: h,
                    goToBooking: p,
                    showPriceModal: g,
                    lowestPriceRoom: i,
                    isChild: !0,
                    isShowEvery: f,
                    isSelectManyNight: v,
                    totalDays: y,
                  }),
                ],
              });
            }),
            xe = function (e, t, o) {
              var i,
                a,
                n,
                l = o.couponTag
                  ? null === (i = o.priceInfo) || void 0 === i
                    ? void 0
                    : i.couponSalePrice
                  : null === (a = o.priceInfo) || void 0 === a
                  ? void 0
                  : a.salePrice,
                c =
                  (null === (n = o.priceInfo) || void 0 === n
                    ? void 0
                    : n.noLoginPrice) || l;
              e.ubtTrace(208557, {
                bizKey: "hotel_detail_room_show",
                baseName: o.baseName,
                roomPrice: c,
                roomName: o.roomName,
                hotelid: t.hotelId,
                hotelDetailTimeStamp: new Date().getTime(),
                roomDetailTimeStamp: new Date().getTime(),
                roomid: o.roomId,
              });
            },
            Ce = f.default.memo(function (e) {
              var t,
                o = e.hotelDetail,
                i = e.isLogin,
                a = e.isHourRoom,
                n = e.showHourRooms,
                l = e.lowestPriceRoomVisible,
                c = e.lowestPriceRoom,
                r = e.hotelRoomList,
                s = void 0 === r ? [] : r,
                d = e.hotelRoomPriceObj,
                u = e.hasHourRooms,
                h = e.openRoomIntroduce,
                v = e.noop,
                y = e.showPriceModal,
                N = e.goToInput,
                I = e.goToBooking,
                T = e.expandRoom,
                Z = e.screenWidth,
                V = e.showNoFilter,
                k = e.roomNumber,
                x = e.hotelFilterListV2,
                C = e.isSelectManyNight,
                P = e.totalDays,
                D = e.modelType,
                R = (0, f.useState)(!1),
                L = (0, p.Z)(R, 2),
                S = L[0],
                F = L[1],
                _ =
                  null != d &&
                  null !== (t = d.platformPriceList) &&
                  void 0 !== t &&
                  t.length &&
                  c.excitationTag &&
                  c.imgRemark
                    ? " parity-bg"
                    : "",
                H = "hotel-price-parity"
                  .concat(_, " ")
                  .concat(b.default.zxTyStr),
                M = n && s.length > 0,
                A = "room-expand".concat((0, B.gP)(u, " hour")),
                O = s.filter(function (e) {
                  return ![2, 4].includes(e.parentRoom.status);
                }),
                z = s.filter(function (e) {
                  return [2, 4].includes(e.parentRoom.status);
                }),
                E = (null == c ? void 0 : c.baseId) && l,
                q =
                  "noFilter" === D ? (E ? 1 : 2) : E ? O.length : O.length || 1,
                U = []
                  .concat((0, m.Z)(O), (0, m.Z)(z))
                  .slice(0, S ? O.length + z.length : q),
                j = !V && 1 !== k,
                K = function (e) {
                  return N(e, n, V);
                },
                Q = function (e) {
                  return h(
                    (0, g.Z)((0, g.Z)({}, e), {}, { showNoRoomNumber: V })
                  );
                },
                W = function (e) {
                  return T(e, n, V);
                },
                G = function (e) {
                  return y(
                    (0, g.Z)((0, g.Z)({}, e), {}, { isNoRoomNumber: V })
                  );
                },
                Y = function (e) {
                  e.stopPropagation(), v();
                };
              (0, f.useEffect)(function () {
                var e = (0, J.getCurrentPage)();
                null != e &&
                  e.ubtTrace &&
                  U.length &&
                  !M &&
                  U.forEach(function (t) {
                    var i;
                    null !== (i = t.childList) && void 0 !== i && i.length
                      ? t.childList.forEach(function (t) {
                          xe(e, o, t);
                        })
                      : xe(e, o, t);
                  });
              }, []);
              return (0, X.BX)(X.HY, {
                children: [
                  M &&
                    (0, X.tZ)(w.View, {
                      className: "hour-room-title",
                      children: "钟点房",
                    }),
                  V &&
                    (0, X.tZ)(w.View, {
                      className: "hour-room-title",
                      children:
                        null != x && x.length
                          ? "不满足筛选条件的房型"
                          : "不满足".concat(k, "间的房型"),
                    }),
                  l &&
                    (null == c ? void 0 : c.baseId) &&
                    (0, X.tZ)(w.View, {
                      className: H,
                      children: (0, X.tZ)(Ze, {
                        lowestPriceRoom: c,
                        isLogin: i,
                        room: c,
                        roomType: "lowest",
                        isHourRoom: a,
                        showHourRooms: n,
                        screenWidth: Z,
                        hotelRoomPriceObj: d,
                        noop: Y,
                        openRoomIntroduce: Q,
                        showPriceModal: G,
                        goToBooking: I,
                        goToInput: K,
                        isShowEvery: j,
                        isSelectManyNight: C,
                        totalDays: P,
                      }),
                    }),
                  (null == U ? void 0 : U.length) > 0 &&
                    (0, X.tZ)(w.View, {
                      className: "hotel-list",
                      children: U.map(function (e, t) {
                        return 1 === (null == e ? void 0 : e.childList.length)
                          ? (0, X.tZ)(
                              f.default.Fragment,
                              {
                                children: (0, X.tZ)(Ze, {
                                  lowestPriceRoom: c,
                                  isLogin: i,
                                  room: (0, g.Z)(
                                    (0, g.Z)({}, e.parentRoom),
                                    {},
                                    {
                                      status: e.parentRoom.status,
                                      payType: e.parentRoom.payType,
                                      guaranteeInfo: e.parentRoom.guaranteeInfo,
                                      canReceiveCouponItem:
                                        e.canReceiveCouponItem,
                                    }
                                  ),
                                  roomType: "groupOnlyOne",
                                  isHourRoom: a,
                                  screenWidth: Z,
                                  showHourRooms: n,
                                  groupItem: e,
                                  groupIndex: t,
                                  childIndex: 0,
                                  hotelRoomPriceObj: d,
                                  noop: Y,
                                  openRoomIntroduce: Q,
                                  showPriceModal: G,
                                  goToBooking: I,
                                  goToInput: K,
                                  isShowEvery: j,
                                  isSelectManyNight: C,
                                  totalDays: P,
                                }),
                              },
                              t
                            )
                          : e.childList[1]
                          ? (0, X.BX)(
                              w.View,
                              {
                                id: "AXCj",
                                onClick: Y,
                                children: [
                                  (0, X.tZ)(Ze, {
                                    lowestPriceRoom: c,
                                    isLogin: i,
                                    room: e.parentRoom,
                                    roomType: "groupHasMany",
                                    isHourRoom: a,
                                    showHourRooms: n,
                                    groupItem: e,
                                    groupIndex: t,
                                    screenWidth: Z,
                                    hotelRoomPriceObj: d,
                                    noop: Y,
                                    openRoomIntroduce: Q,
                                    showPriceModal: G,
                                    goToBooking: I,
                                    goToInput: K,
                                    expandRoom: W,
                                    isParentRoom: !0,
                                    isShowEvery: j,
                                    isSelectManyNight: C,
                                    totalDays: P,
                                  }),
                                  e.isExpand &&
                                    (0, X.tZ)(w.View, {
                                      className: "hotel-select",
                                      children: e.childList.map(function (
                                        o,
                                        l
                                      ) {
                                        return (0, X.tZ)(
                                          f.default.Fragment,
                                          {
                                            children: (0, X.tZ)(be, {
                                              isLogin: i,
                                              lowestPriceRoom: c,
                                              screenWidth: Z,
                                              room: o,
                                              noop: Y,
                                              groupItem: e,
                                              isHourRoom: a,
                                              showHourRooms: n,
                                              groupIndex: t,
                                              childIndex: l,
                                              openRoomIntroduce: Q,
                                              goToInput: K,
                                              goToBooking: I,
                                              showPriceModal: G,
                                              isShowEvery: j,
                                              isSelectManyNight: C,
                                              totalDays: P,
                                            }),
                                          },
                                          l
                                        );
                                      }),
                                    }),
                                ],
                              },
                              t
                            )
                          : null;
                      }),
                    }),
                  (function () {
                    if ("normal" === D || "hourRoom" === D) {
                      if (
                        z.length > 0 &&
                        !S &&
                        (O.length || (!O.length && z.length - 1 > 0))
                      )
                        return (0, X.tZ)(X.HY, {
                          children: (0, X.BX)(w.View, {
                            className: A,
                            onClick: function () {
                              return F(!0);
                            },
                            children: [
                              "剩余",
                              O.length ? z.length : z.length - 1,
                              "个房型已订完",
                              (0, X.tZ)(w.Text, {
                                className: "iconfont ifont-arrdown",
                              }),
                            ],
                          }),
                        });
                    } else if (
                      "noFilter" === D &&
                      [].concat((0, m.Z)(O), (0, m.Z)(z)).length > (E ? 1 : 2)
                    )
                      return (0, X.tZ)(X.HY, {
                        children: S
                          ? (0, X.BX)(w.View, {
                              className: "room-expand",
                              onClick: function () {
                                return F(!1);
                              },
                              children: [
                                "收起",
                                (0, X.tZ)(w.Text, {
                                  className: "iconfont ifont-arrup",
                                }),
                              ],
                            })
                          : (0, X.BX)(w.View, {
                              className: "room-expand",
                              onClick: function () {
                                return F(!0);
                              },
                              children: [
                                "查看更多不满足筛选条件的房型",
                                (0, X.tZ)(w.Text, {
                                  className: "iconfont ifont-arrdown",
                                }),
                              ],
                            }),
                      });
                  })(),
                ],
              });
            }),
            Pe = [
              "比价是平台预估数据，仅供参考。具体因用户身份、平台促销等原因会产生偏差。",
              "划线价格为参考价，该价格指商品/服务的门市价、服务提供商的指导价、零售价、市场价或该商品/服务曾经展示过的销售价等，并非原价；由于商品/服务信息实时更新、服务提供商差异、市场价格波动等原因，该价格可能会与您预订时展示的不一致，仅供您参考。",
              "未划线价格指商品或服务的实时标价，该价格是在划线价基础上根据服务提供商让利、商品或服务参加活动、或会员使用优惠券的不同而计算出的优惠后的金额。具体成交价格以订单结算页价格为准。",
            ],
            De = function () {
              var e = (0, f.useState)([Pe[0]]),
                t = (0, p.Z)(e, 2),
                o = t[0],
                i = t[1],
                a = o.length !== Pe.length;
              return (0, X.BX)(w.View, {
                className: "hotel-detail-module price-statement",
                children: [
                  (0, X.tZ)(w.View, {
                    className: "title",
                    children: "价格说明",
                  }),
                  (0, X.BX)(w.View, {
                    className: "content-wrap content".concat(
                      (0, B.gP)(a, " pb0")
                    ),
                    children: [
                      o.map(function (e, t) {
                        return (0,
                        X.BX)(w.View, { className: "st", children: [(0, X.tZ)(w.View, { className: "dot" }), (0, X.tZ)(w.View, { className: "txt", children: e })] }, t);
                      }),
                      a &&
                        (0, X.BX)(w.View, {
                          className: "check-all",
                          id: "AXDD",
                          onClick: function () {
                            return i(Pe);
                          },
                          children: [
                            (0, X.tZ)(w.Text, {
                              className: "txt",
                              children: "查看全部说明",
                            }),
                            (0, X.tZ)(w.Text, {
                              className: "iconfont ifont-arrdown",
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            },
            Re = o(87186),
            Le = o(45810),
            Be = "hotelDate",
            Se = "evaluation",
            Xe = "pictureShow",
            Fe = "facility",
            _e = "recommend",
            He =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/xiaochegnxu-shoucang/Kirby-Yicon-bofang@3x.png",
            Me =
              "https://images3.c-ctrip.com/ztrip/hotel/2022/3/ic-play@3x.png",
            Ae = "https://images3.c-ctrip.com/ztrip/hotel/2022/3/ic-pic@3x.png",
            Oe =
              "http://images3.c-ctrip.com/ztrip/hotel/2018/hotel_detailPage_placeholderImage.jpg",
            ze = "COUPON",
            Ee = "COMPENSATE",
            qe =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/bangdanzhuliucheng/lb_bangdan1@3x.webp",
            Ue =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/bangdanzhuliucheng/lb_bangdan2@3x.webp",
            je = f.default.memo(function (e) {
              var t = e.loaded,
                o = e.list,
                i = e.pageId,
                a = e.hotelRankInfo,
                n = e.goPhotoPage,
                l = e.goRankList,
                c = e.isMuted,
                r = (0, f.useState)(!1),
                s = (0, p.Z)(r, 2),
                d = s[0],
                m = s[1],
                u = (0, f.useCallback)(function () {
                  y().getNetworkType({
                    success: function (e) {
                      "wifi" === (null == e ? void 0 : e.networkType) &&
                        (m(!0), y().createVideoContext("video").play());
                    },
                  });
                }, []),
                h = (0, f.useCallback)(
                  function () {
                    d && (m(!1), y().createVideoContext("video").pause(), n());
                  },
                  [d, n]
                ),
                v = (0, f.useCallback)(function (e) {
                  e.stopPropagation(),
                    m(!0),
                    y().createVideoContext("video").play();
                }, []),
                N = (0, f.useCallback)(
                  function (e, t) {
                    var o = (0, J.getCurrentPage)();
                    null != t &&
                      t.rankingTitle &&
                      null != o &&
                      o.ubtTrace &&
                      o.ubtTrace(208558, {
                        pageId: i,
                        bizKey: "hotel_detail_recommendinfo_click",
                        rankTItle: t.rankingTitle,
                      }),
                      l(e);
                  },
                  [i, l]
                ),
                I = {
                  id: "video",
                  objectFit: "cover",
                  controls: 0,
                  muted: c,
                  showCenterPlayBtn: 0,
                  onLoadedMetaData: u,
                  onEnded: function () {
                    return m(!1);
                  },
                  onError: function () {
                    return m(!1);
                  },
                },
                T = {
                  interval: 5e3,
                  duration: 1e3,
                  circular: !0,
                  autoplay: !!!o.find(function (e) {
                    var t;
                    return !(
                      null === (t = e.hotelVideoInfo) ||
                      void 0 === t ||
                      !t.url
                    );
                  }),
                },
                Z = (0, f.useCallback)(
                  function () {
                    d && (m(!1), y().createVideoContext("video").pause());
                  },
                  [d]
                );
              return (
                (0, f.useEffect)(
                  function () {
                    var e = (0, J.getCurrentPage)();
                    null != a &&
                      a.rankingTitle &&
                      null != e &&
                      e.ubtTrace &&
                      e.ubtTrace(208557, {
                        pageId: i,
                        bizKey: "hotel_detail_recommendinfo_show",
                        rankTItle: a.rankingTitle,
                        terminaltype: "Applets",
                      });
                  },
                  [a, i]
                ),
                (0, X.BX)(w.View, {
                  className: "picture-swiper",
                  children: [
                    (0, X.tZ)(
                      w.Swiper,
                      (0, g.Z)(
                        (0, g.Z)({ className: "swiper" }, T),
                        {},
                        {
                          onChange: Z,
                          children: o.slice(0, 4).map(function (e, t) {
                            var o,
                              i = !(
                                null === (o = e.hotelVideoInfo) ||
                                void 0 === o ||
                                !o.url
                              );
                            return (0,
                            X.BX)(w.SwiperItem, { children: [i && (0, X.tZ)(w.Video, (0, g.Z)((0, g.Z)({}, I), {}, { src: e.hotelVideoInfo.url, children: (0, X.tZ)(w.View, { className: "controls", id: "AXCx", onClick: h, children: !d && (0, X.tZ)(w.Image, { className: "play-icon", src: He, id: "AXCy", onClick: v }) }) })), !i && (0, X.tZ)(w.Image, { className: "slide-image", mode: "aspectFill", src: e.imageUrl, id: "AXCz", onClick: n })] }, t);
                          }),
                        }
                      )
                    ),
                    (null == a ? void 0 : a.rank) &&
                      b.default.isWechat &&
                      (0, X.BX)(w.View, {
                        className: "hotel-top-list",
                        id: "AXDA",
                        onClick: function () {
                          return N(a.jumpUrl, a);
                        },
                        children: [
                          (0, X.BX)(w.View, {
                            className: "left",
                            children: [
                              (0, X.tZ)(w.Image, {
                                src: qe,
                                className: "left-bg",
                                webp: !0,
                              }),
                              (0, X.tZ)(w.Text, {
                                className: "rank",
                                children: a.rank,
                              }),
                            ],
                          }),
                          (0, X.BX)(w.View, {
                            className: "right",
                            children: [
                              (0, X.tZ)(w.Image, {
                                src: Ue,
                                className: "right-bg",
                                webp: !0,
                              }),
                              (0, X.BX)(w.View, {
                                className: "content",
                                children: [
                                  (0, X.BX)(w.View, {
                                    className: "name",
                                    children: [
                                      (0, X.tZ)(w.Text, {
                                        children: a.rankingTitle,
                                      }),
                                      (0, X.tZ)(w.Text, {
                                        className: "ifont-arr iconfont",
                                      }),
                                    ],
                                  }),
                                  (0, X.tZ)(w.View, {
                                    className: "list-name",
                                    children: (0, X.tZ)(w.Text, {
                                      children: a.tabName,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    t &&
                      (0, X.BX)(w.View, {
                        className: "pic-num",
                        id: "AXDB",
                        onClick: n,
                        children: [
                          (0, X.tZ)(w.Image, {
                            className: "picon",
                            mode: "widthFix",
                            src: Me,
                          }),
                          (0, X.tZ)(w.Image, {
                            className: "picon",
                            mode: "widthFix",
                            src: Ae,
                          }),
                          o.length + "张",
                        ],
                      }),
                  ],
                })
              );
            }),
            Ke = [R.fG.DETERRENT_COUPON],
            Qe =
              "https://images3.c-ctrip.com/ztrip/hotel/2022/5/xcx-popup@3x.webp",
            We =
              "https://images3.c-ctrip.com/ztrip/hotel/2022/5/tag-jxhb@3x.webp",
            Ge =
              "https://images3.c-ctrip.com/ztrip/hotel/2022/5/tag-bdlj@3x.webp",
            Ye =
              "https://images3.c-ctrip.com/ztrip/hotel/2022/5/rp-leftline@3x.png",
            Je =
              "https://images3.c-ctrip.com/ztrip/hotel/2022/5/rp-rightline@3x.png",
            $e =
              "https://images3.c-ctrip.com/ztrip/hotel/2022/5/rp-float@3x.png",
            et = {
              title: "Oh No！倒计时结束 红包失效了",
              icon: "none",
              duration: 3e3,
            },
            tt = function (e, t) {
              var o = (0, J.getCurrentPage)();
              null != o && o.ubtTrace && o.ubtTrace(e, t);
            },
            ot = f.default.memo(function (e) {
              var t = e.couponTimerInfo,
                o = e.modals,
                i = e.pageId,
                a = e.onCloseModal,
                n = e.onShowModal,
                l = (0, B.Jk)(
                  o.filter(function (e) {
                    return e.visible;
                  }),
                  Ke
                ),
                c = l.type,
                r = l.modalInfo,
                s = (0, f.useCallback)(
                  function (e) {
                    tt(208557, {
                      bizKey: "hotel_detail_coupon_timeout_show",
                      pageId: i,
                    }),
                      a(R.fG.DETERRENT_COUPON, !0, e),
                      y().showToast(et);
                  },
                  [i, a]
                ),
                d = (0, f.useCallback)(
                  function () {
                    tt(208558, {
                      bizKey: "hotel_detail_coupon_buoy_click",
                      pageId: i,
                    }),
                      n(R.fG.DETERRENT_COUPON);
                  },
                  [i, n]
                ),
                m = (0, f.useCallback)(
                  function (e, t) {
                    e === R.fG.DETERRENT_COUPON &&
                      tt(208558, {
                        clickType: t ? "ord" : "close",
                        bizKey: "hotel_detail_coupon_pop_click",
                        pageId: i,
                      }),
                      a(e);
                  },
                  [a, i]
                );
              return (
                (0, f.useEffect)(
                  function () {
                    c === R.fG.DETERRENT_COUPON &&
                      tt(208557, {
                        bizKey: "hotel_detail_coupon_pop_show",
                        pageId: i,
                      }),
                      null != t &&
                        t.endTime &&
                        tt(208557, {
                          bizKey: "hotel_detail_coupon_buoy_show",
                          pageId: i,
                        });
                  },
                  [c, i, t]
                ),
                (0, X.BX)(w.View, {
                  className: "detail-modals",
                  children: [
                    !!r &&
                      (0, X.BX)(se.ZtActivityPop, {
                        className: "deterrent-modal",
                        show: c === R.fG.DETERRENT_COUPON,
                        onClose: function () {
                          return m(c);
                        },
                        onWrapClose: function () {
                          return m(c);
                        },
                        children: [
                          (0, X.tZ)(w.Image, {
                            src: Qe,
                            mode: "widthFix",
                            className: "bground",
                          }),
                          (0, X.BX)(w.View, {
                            className: "content",
                            children: [
                              (0, X.BX)(w.View, {
                                className: "desc",
                                children: [
                                  (0, X.tZ)(w.Text, {
                                    className: "txt",
                                    children: r.subTitle.split("#")[0],
                                  }),
                                  (0, X.tZ)(w.Image, {
                                    src: We,
                                    mode: "widthFix",
                                    className: "red",
                                    webp: !0,
                                  }),
                                  (0, X.tZ)(w.Text, {
                                    className: "txt",
                                    children: "促销房型",
                                  }),
                                ],
                              }),
                              (0, X.BX)(w.View, {
                                className: "price-wrap",
                                children: [
                                  (0, X.tZ)(w.View, {
                                    className: "price",
                                    children:
                                      null == r ? void 0 : r.currentCouponPrice,
                                  }),
                                  (0, X.tZ)(w.Image, {
                                    src: Ge,
                                    mode: "widthFix",
                                    className: "tag",
                                    webp: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, X.tZ)(w.View, {
                            className: "book",
                            id: "AXCt",
                            onClick: function () {
                              return m(c, !0);
                            },
                          }),
                          (0, X.BX)(w.View, {
                            className: "countdown-wrap",
                            children: [
                              (0, X.tZ)(w.Image, {
                                src: Ye,
                                mode: "heightFix",
                                className: "left",
                              }),
                              (0, X.BX)(w.View, {
                                className: "countdown-txt",
                                children: [
                                  (null == r ? void 0 : r.endTime) &&
                                    (0, X.tZ)(se.ZtCountdown, {
                                      endTime: r.endTime,
                                      isShowHour: !1,
                                      onTimeup: s,
                                    }),
                                  "后失效",
                                ],
                              }),
                              (0, X.tZ)(w.Image, {
                                src: Je,
                                mode: "heightFix",
                                className: "right",
                              }),
                            ],
                          }),
                        ],
                      }),
                    (null == t ? void 0 : t.endTime) &&
                      (0, X.BX)(w.View, {
                        id: "AXCu",
                        onClick: d,
                        children: [
                          (0, X.tZ)(w.Image, {
                            src: $e,
                            className: "deterrent-float",
                            mode: "widthFix",
                            id: "AXCv",
                            onClick: function () {},
                            webp: !0,
                          }),
                          (0, X.tZ)(se.ZtCountdown, {
                            className: "deterrent-time",
                            endTime: t.endTime,
                            isShowHour: !1,
                            onTimeup: function () {
                              return s(!0);
                            },
                          }),
                        ],
                      }),
                  ],
                })
              );
            }),
            it = o(74977),
            at = f.default.memo(function (e) {
              var t = e.hotelDetail,
                o = t.recommendTagList,
                i = t.facilityTypePicInfoList,
                a = e.hotelPolicyList,
                n = e.gotoFacilityDetail,
                l = e.hotelBasicInfoList;
              return (null != o && o.length) ||
                (null != a && a.length) ||
                (null != i && i.length) ||
                (null != l && l.length)
                ? (0, X.BX)(w.View, {
                    className: "hotel-detail-module facility",
                    id: "facility",
                    children: [
                      (0, X.tZ)(w.View, {
                        className: "title",
                        children: "设施与政策",
                      }),
                      (0, X.BX)(w.View, {
                        className: "content-wrap pb0",
                        children: [
                          (0, X.BX)(w.View, {
                            className: "hotel-facility",
                            children: [
                              (0, X.tZ)(w.View, {
                                className: "tit",
                                children: "基础设施",
                              }),
                              (null == i ? void 0 : i.length) > 0 &&
                                (0, X.tZ)(it.Z, { themeList: i }),
                              (0, X.tZ)(w.View, {
                                className: "facility-list",
                                children:
                                  null == o
                                    ? void 0
                                    : o.slice(0, 6).map(function (e, t) {
                                        return (0,
                                        X.BX)(w.View, { className: "item", children: [(0, X.tZ)(w.Image, { className: "img", src: e.imgUrl }), (0, X.tZ)(w.View, { className: "fac-desc", children: e.name })] }, t);
                                      }),
                              }),
                              null == a
                                ? void 0
                                : a.map(function (e, t) {
                                    return (0,
                                    X.BX)(f.default.Fragment, { children: [(0, X.tZ)(w.View, { className: "tit", children: e.itemTitle }), (0, X.tZ)(w.View, { className: "txt", children: (0, X.tZ)(se.ZtRichText, { nodes: e.itemValue }) })] }, t);
                                  }),
                              (0, X.BX)(w.View, {
                                className: "check-all",
                                id: "AXCS",
                                onClick: n,
                                children: [
                                  (0, X.tZ)(w.Text, {
                                    children: "查看全部设施",
                                  }),
                                  (0, X.tZ)(w.Text, {
                                    className: "ifont-arr iconfont",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (null == l ? void 0 : l.length) > 0 &&
                            (0, X.BX)(w.View, {
                              className: "sub-module book-remind",
                              children: [
                                (0, X.tZ)(w.View, {
                                  className: "title",
                                  children: "订房必读",
                                }),
                                (0, X.tZ)(w.View, {
                                  className: "list-wrap",
                                  children: l.slice(0, 3).map(function (e, t) {
                                    var o;
                                    return (0, X.BX)(
                                      w.View,
                                      {
                                        className: "item",
                                        children: [
                                          (0, X.tZ)(w.View, {
                                            className: "dot",
                                          }),
                                          (0, X.BX)(w.View, {
                                            className: "detail",
                                            children: [
                                              (0, X.tZ)(w.View, {
                                                className: "sub-tit",
                                                children: e.title,
                                              }),
                                              null === (o = e.subSectionList) ||
                                              void 0 === o
                                                ? void 0
                                                : o.map(function (e, t) {
                                                    return (0,
                                                    X.tZ)(w.View, { className: "txt", children: e.content }, t);
                                                  }),
                                            ],
                                          }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                                }),
                                (0, X.BX)(w.View, {
                                  className: "check-all",
                                  id: "AXCT",
                                  onClick: n,
                                  children: [
                                    (0, X.BX)(w.Text, {
                                      children: ["查看", l.length, "条·必读"],
                                    }),
                                    (0, X.tZ)(w.Text, {
                                      className: "ifont-arr iconfont",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  })
                : (0, X.tZ)(w.View, {});
            }),
            nt = f.default.memo(function (e) {
              var t = e.drawerType,
                o = e.drawerInfo,
                i = e.onDrawerClose,
                a = e.onHandleCoupon,
                n = o || {},
                l = n.promotionsList,
                c = n.hotelCouponList,
                r = n.totalCredit,
                s = n.height,
                d = { show: !!t, onWrapClose: i, isDefineHead: !0 };
              return (
                s && (d.height = s),
                (0, X.tZ)(
                  se.ZtDrawer,
                  (0, g.Z)(
                    (0, g.Z)({ className: "detail-drawers" }, d),
                    {},
                    {
                      children:
                        t === ze &&
                        (0, X.BX)(w.View, {
                          className: "drawer-coupon",
                          children: [
                            (0, X.BX)(w.View, {
                              className: "header",
                              children: [
                                (0, X.tZ)(w.View, {
                                  className: "tit",
                                  children: "优惠促销",
                                }),
                                (0, X.tZ)(w.Text, {
                                  className: "ifont-closed iconfont",
                                  id: "AXCP",
                                  onClick: i,
                                }),
                              ],
                            }),
                            (0, X.BX)(w.View, {
                              className: "content",
                              children: [
                                (null == l ? void 0 : l.length) > 0 &&
                                  (0, X.BX)(w.View, {
                                    className: "promotion",
                                    children: [
                                      (0, X.tZ)(w.View, {
                                        className: "subtit",
                                        children: "我的促销",
                                      }),
                                      l.map(function (e, t) {
                                        return (0, X.BX)(
                                          w.View,
                                          {
                                            className: "item",
                                            children: [
                                              (0, X.tZ)(A.Z, {
                                                src: e.tag,
                                                mode: "heightFix",
                                              }),
                                              e.subList.map(function (e, t) {
                                                return (0,
                                                X.BX)(f.default.Fragment, { children: [0 !== t && (0, X.tZ)(w.View, { className: "dash" }), (0, X.BX)(w.View, { className: "sub", children: [(0, X.tZ)(w.View, { className: "tit", children: e.title }), (0, X.tZ)(w.View, { className: "desc", children: e.describe })] }, t)] }, t);
                                              }),
                                            ],
                                          },
                                          t
                                        );
                                      }),
                                    ],
                                  }),
                                (null == c ? void 0 : c.length) > 0 &&
                                  (0, X.BX)(w.View, {
                                    className: "coupons",
                                    children: [
                                      (0, X.tZ)(w.View, {
                                        className: "subtit",
                                        children: "我的优惠券",
                                      }),
                                      c.map(function (e, t) {
                                        var o = e.type,
                                          i = e.receiveCode,
                                          n = e.receiveMessage,
                                          l = e.price,
                                          c = e.promotionTitle,
                                          s = e.promotionDes,
                                          d = e.rewardValue,
                                          m = "coupon-".concat(
                                            (0, B.gP)(2 === o, "yellow", "red")
                                          ),
                                          u = "item ".concat(m),
                                          h = "price".concat(
                                            (0, B.gP)(2 !== o, " color-red")
                                          ),
                                          p = 1 === i,
                                          g = 1 !== i && 5 === o,
                                          f = "btn-get ".concat(
                                            (0, B.gP)(
                                              p,
                                              "btn-red",
                                              "btn-received"
                                            )
                                          );
                                        return (0, X.BX)(
                                          w.View,
                                          {
                                            className: u,
                                            children: [
                                              (0, X.tZ)(w.View, {
                                                className: h,
                                                children: l,
                                              }),
                                              (0, X.BX)(w.View, {
                                                className: "cont",
                                                children: [
                                                  (0, X.tZ)(w.View, {
                                                    className: "strong",
                                                    children: c,
                                                  }),
                                                  (0, X.tZ)(w.View, {
                                                    className: "txt",
                                                    children: s,
                                                  }),
                                                  2 === o &&
                                                    r &&
                                                    (0, X.BX)(w.View, {
                                                      className: "tag",
                                                      children: [
                                                        "我的积分：",
                                                        (0, X.tZ)(w.Text, {
                                                          children: r,
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                              (0, X.BX)(w.View, {
                                                className: "rbox",
                                                children: [
                                                  (0, X.tZ)(w.Button, {
                                                    className: f,
                                                    disabled: g,
                                                    id: "AXCQ",
                                                    onClick: function () {
                                                      return a(e);
                                                    },
                                                    children: n,
                                                  }),
                                                  2 === o &&
                                                    1 !== i &&
                                                    (0, X.tZ)(w.View, {
                                                      className: "t",
                                                      children: d,
                                                    }),
                                                ],
                                              }),
                                              1 !== i &&
                                                5 !== o &&
                                                (0, X.tZ)(w.Icon, {
                                                  className: "done",
                                                }),
                                            ],
                                          },
                                          t
                                        );
                                      }),
                                    ],
                                  }),
                                (0, X.BX)(w.View, {
                                  className: "notice",
                                  children: [
                                    (0, X.tZ)(w.View, {
                                      className: "txt",
                                      children: "*兑换须知：",
                                    }),
                                    (0, X.tZ)(w.View, {
                                      className: "txt",
                                      children:
                                        "1. 部分酒店暂不支持使用优惠券，具体请见下单页面；",
                                    }),
                                    (0, X.tZ)(w.View, {
                                      className: "txt",
                                      children:
                                        "2. 优惠券与补贴金不可同时使用，兑换后不可退回积分。",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                    }
                  )
                )
              );
            }),
            lt = {
              mapIconUrl: {
                zx: "https://images3.c-ctrip.com/ztrip/hotel/2022/7/icon_xqmap@3x.webp",
                ty: "https://images3.c-ctrip.com/ztrip/hotel/202112/map_ty@3x.png",
              },
              star: "https://images3.c-ctrip.com/zt/wechat/hotel/xing.png",
              diamond: "https://images3.c-ctrip.com/zt/wechat/hotel/zuan.png",
              scanPost:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/2023-3/xiaochengxu/ic_saomading_pinxuan@3x.png",
            },
            ct = function (e, t, o, i, a, n) {
              var l, c;
              return (0, X.BX)(X.HY, {
                children: [
                  null == e
                    ? void 0
                    : e.map(function (e, t) {
                        return (0,
                        X.tZ)(w.Image, { src: i, className: "titicon" }, t);
                      }),
                  !!t &&
                    (0, X.tZ)(w.Image, {
                      src: t,
                      className: "diam-icon",
                      mode: "widthFix",
                      webp: !0,
                    }),
                  !!o &&
                    (0, X.tZ)(w.Image, {
                      src: o,
                      className: "star-icon",
                      webp: !0,
                    }),
                  !!a &&
                    !n &&
                    (0, X.BX)(w.View, {
                      className: "special-tag",
                      style: "background-color:"
                        .concat(a.backgroundColor, ";color:")
                        .concat(a.textColor),
                      children: [
                        a.iconUrl &&
                          (0, X.tZ)(w.Image, {
                            src: a.iconUrl,
                            className: "tag-icon",
                          }),
                        (0, X.tZ)(w.Text, {
                          children:
                            (null !== (l = a.text) && void 0 !== l ? l : "") +
                            (null !== (c = a.tagAmount) && void 0 !== c
                              ? c
                              : ""),
                        }),
                      ],
                    }),
                ],
              });
            },
            rt = f.default.memo(function (e) {
              var t = e.pageId,
                o = e.hotelDetail,
                i = o.address,
                a = o.name,
                n = o.openYear,
                l = o.fitmentYear,
                c = o.starList,
                r = o.dStarIcon,
                s = o.starIcon,
                d = o.facList,
                m = o.hotelTrafficList,
                u = o.zone,
                h = o.starLicence,
                g = o.specialTag,
                v = o.atmosphereInfo,
                y = e.isScanCodeUser,
                N = e.commentDetail,
                I = N.commentViewArr,
                T = N.commentNum,
                Z = N.commonScore,
                V = e.gotoFacilityDetail,
                k = e.gotoCommentPage,
                x = e.gotoMappage,
                C = (0, f.useState)(!1),
                P = (0, p.Z)(C, 2),
                D = P[0],
                R = P[1],
                L = m.map(function (e) {
                  return e.trafficRemark;
                }),
                S = (0, p.Z)(L, 2),
                F = S[0],
                _ = S[1],
                H = _ ? F : u || "暂无标题",
                M = _ || F,
                A = !(!n || !l),
                O = "hotel-intro "
                  .concat(b.default.zxTyStr)
                  .concat((0, B.gP)(y, " scan")),
                z = "".concat(n, "年开业 "),
                E = "".concat(l, "年装修"),
                q = Z && 0 !== parseFloat(Z),
                U = "left".concat((0, B.gP)(q, " pt0")),
                j = h ? lt.star : lt.diamond,
                K = (0, f.useCallback)(
                  function () {
                    !D && R(!0);
                  },
                  [D, R]
                ),
                Q = (0, f.useCallback)(
                  function () {
                    var e;
                    null === (e = (0, J.getCurrentPage)()) ||
                      void 0 === e ||
                      e.ubtTrace(230280, { PageId: t }),
                      (0, B.pV)(i),
                      D && R(!1);
                  },
                  [t, i, D, R]
                );
              (0, f.useEffect)(
                function () {
                  var e = null;
                  D &&
                    (e = setTimeout(function () {
                      R(!1), clearTimeout(e);
                    }, 3e3));
                },
                [D, R]
              );
              var W = y ? 17 : 20,
                G = a.substring(0, W),
                Y = a.substring(W),
                $ = (null == a ? void 0 : a.length) <= 10;
              return (0, X.BX)(X.HY, {
                children: [
                  (null == v ? void 0 : v.picUrl) &&
                    (0, X.tZ)(w.Image, {
                      className: "theme-banner",
                      src: null == v ? void 0 : v.picUrl,
                      mode: "widthFix",
                      webp: !0,
                    }),
                  (0, X.BX)(w.View, {
                    className: O,
                    children: [
                      y &&
                        (0, X.tZ)(w.Image, {
                          className: "scan-post",
                          src: lt.scanPost,
                          mode: "widthFix",
                        }),
                      (0, X.BX)(w.View, {
                        className: "title-wrap",
                        children: [
                          (0, X.BX)(w.View, {
                            className: "name-wrap",
                            children: [
                              (0, X.BX)(w.View, {
                                className: "fname",
                                children: [
                                  G &&
                                    (0, X.tZ)(w.Text, {
                                      className: "name-txt",
                                      children: G,
                                    }),
                                  $ && ct(c, r, s, j, g, y),
                                ],
                              }),
                              (0, X.BX)(w.View, {
                                className: "sname",
                                children: [
                                  Y &&
                                    (0, X.tZ)(w.Text, {
                                      className: "name-txt",
                                      children: Y,
                                    }),
                                  !$ && ct(c, r, s, j, g, y),
                                ],
                              }),
                            ],
                          }),
                          y &&
                            (0, X.tZ)(X.HY, {
                              children: q
                                ? (0, X.BX)(w.View, {
                                    className: "score ".concat(
                                      b.default.zxTyStr
                                    ),
                                    children: [
                                      Z,
                                      (0, X.tZ)(w.Text, {
                                        className: "unit",
                                        children: "分",
                                      }),
                                    ],
                                  })
                                : (0, X.tZ)(w.View, {
                                    className: "score none",
                                    children: "暂无评分",
                                  }),
                            }),
                        ],
                      }),
                      !y &&
                        (0, X.BX)(X.HY, {
                          children: [
                            (0, X.BX)(w.View, {
                              className: "hotel-intro-fac",
                              id: "AXCK",
                              onClick: V,
                              children: [
                                (0, X.tZ)(w.View, {
                                  className: "cont",
                                  children: (0, X.BX)(w.View, {
                                    className: "txt",
                                    children: [
                                      n &&
                                        (0, X.tZ)(w.Text, {
                                          className: "item",
                                          decode: !0,
                                          children: z,
                                        }),
                                      A &&
                                        (0, X.tZ)(w.Text, {
                                          className: "item line",
                                        }),
                                      l &&
                                        (0, X.tZ)(w.Text, {
                                          className: "item",
                                          children: E,
                                        }),
                                      null == d
                                        ? void 0
                                        : d.map(function (e, t) {
                                            return (0,
                                            X.tZ)(w.View, { className: "item", children: (A ? t < 2 : t < 3) && (0, X.BX)(f.default.Fragment, { children: [(0, X.tZ)(w.Image, { className: "fac-image", src: e.logoUrl }), (0, X.tZ)(w.Text, { className: "fac-text", children: e.name })] }) }, t);
                                          }),
                                    ],
                                  }),
                                }),
                                (0, X.BX)(w.View, {
                                  className: "fac-arr",
                                  children: [
                                    (0, X.tZ)(w.Text, {
                                      className: "color-primary",
                                      children: "详情",
                                    }),
                                    (0, X.tZ)(w.Text, {
                                      className:
                                        "ifont-arr iconfont color-primary",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, X.BX)(w.View, {
                              className: "score-map-wrap",
                              children: [
                                (0, X.BX)(w.View, {
                                  className: U,
                                  id: "AXCL",
                                  onClick: k,
                                  children: [
                                    q
                                      ? (0, X.tZ)(w.View, {
                                          className: "score ".concat(
                                            b.default.zxTyStr
                                          ),
                                          children: Z,
                                        })
                                      : (0, X.tZ)(w.View, {
                                          className: "score none",
                                          children: "暂无评分",
                                        }),
                                    (null == I ? void 0 : I.length) > 0
                                      ? (0, X.BX)(w.View, {
                                          className: "view",
                                          children: ["“", I.join("，"), "”"],
                                        })
                                      : (0, X.tZ)(w.View, {
                                          className: "view",
                                          children: "期待你的点评",
                                        }),
                                    (0, X.BX)(w.View, {
                                      className: "comment-num",
                                      children: [
                                        (0, X.BX)(w.Text, {
                                          children: ["共", T, "条点评"],
                                        }),
                                        (0, X.tZ)(w.Text, {
                                          className: "ifont-arr iconfont",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, X.BX)(w.View, {
                                  className: "hotel-intro-map",
                                  children: [
                                    (0, X.tZ)(w.View, {
                                      className: "tooltip",
                                      style: (0, B.LP)(D, "flex"),
                                      id: "AXCM",
                                      onClick: Q,
                                      children: "复制地址",
                                    }),
                                    (0, X.BX)(w.View, {
                                      className: "cont",
                                      id: "AXCN",
                                      onLongPress: K,
                                      children: [
                                        (0, X.BX)(w.View, {
                                          className: "tit-wrap",
                                          children: [
                                            (0, X.tZ)(w.Text, {
                                              className: "tit",
                                              children: H,
                                            }),
                                            (0, X.tZ)(w.Text, {
                                              className: "vline",
                                            }),
                                            (0, X.tZ)(w.Text, {
                                              className: "tit",
                                              children: i,
                                            }),
                                          ],
                                        }),
                                        (0, X.tZ)(w.View, {
                                          className: "map",
                                          children: (0, X.tZ)(w.View, {
                                            className: "txt",
                                            children: M,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, X.BX)(w.View, {
                                      className: "rbox",
                                      id: "AXCO",
                                      onClick: x,
                                      children: [
                                        (0, X.tZ)(w.Image, {
                                          src: lt.mapIconUrl[b.default.zxTyStr],
                                          className: "icon",
                                        }),
                                        (0, X.tZ)(w.View, {
                                          className: "map-name color-primary",
                                          children: "地图/周边",
                                        }),
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
                ],
              });
            }),
            st = b.default.isBaidu && "devtools" !== k.A.platform,
            dt = f.default.memo(function (e) {
              var t = e.topVisible,
                o = e.name,
                i = e.favoriteFlag,
                a = e.goBack,
                n = e.onClickFavorite,
                l = e.isMuted,
                c = e.toggleVideoMute,
                r = e.showVoiceCtrl,
                s = e.statusBarHeight,
                d = "padding-top:".concat(s, "px"),
                m = t ? "top-bar-scroll" : "top-bar",
                u = 1 === y().getCurrentPages().length,
                h = i
                  ? "ifont-collected iconfont color-red"
                  : "ifont-collect iconfont";
              return (0, X.BX)(w.View, {
                className: m,
                style: d,
                children: [
                  (0, X.tZ)(w.View, {
                    className: "lbox",
                    id: "AXCV",
                    onClick: a,
                    children:
                      !u &&
                      !st &&
                      (0, X.tZ)(w.Text, { className: "ifont-back iconfont" }),
                  }),
                  t && (0, X.tZ)(w.View, { className: "txt", children: o }),
                  (0, X.BX)(w.View, {
                    className: "rbox",
                    children: [
                      r &&
                        (0, X.tZ)(w.Text, {
                          className: "ifont2-hotel_".concat(
                            l ? "novoice" : "voice",
                            " iconfont2 voice-ctrl"
                          ),
                          id: "AXCW",
                          onClick: c,
                        }),
                      (0, X.tZ)(w.Text, {
                        id: "AXCX",
                        onClick: n,
                        className: h,
                      }),
                      (0, X.tZ)(w.Text, { className: "ifont-share iconfont" }),
                      (0, X.tZ)(w.Button, {
                        className: "btn-share",
                        openType: "share",
                        id: "AXCY",
                        onClick: function () {
                          var e = (0, J.getCurrentPage)();
                          null != e &&
                            e.ubtTrace &&
                            e.ubtTrace(208558, {
                              bizKey: "hotel_detail_share_click",
                            });
                        },
                      }),
                    ],
                  }),
                ],
              });
            }),
            mt = f.default.memo(function (e) {
              var t = e.showPromotionBrief,
                o = e.identityPromotions,
                i = e.trainCashBackImg,
                a = e.couponBriefList,
                n = e.onShowHotelCoupons,
                l = i ? [].concat((0, m.Z)(o), [i]) : o,
                c = a.slice(0, 3 - l.length);
              return (
                (0, f.useEffect)(
                  function () {
                    var e = (0, J.getCurrentPage)();
                    t &&
                      i &&
                      null != e &&
                      e.ubtTrace &&
                      e.ubtTrace(208557, {
                        bizKey: "hotel_detail_return_train_sevicefee_show",
                        pageId: b.default.isTieyou
                          ? "10650018761"
                          : "10650018584",
                      });
                  },
                  [t, i]
                ),
                t
                  ? (0, X.BX)(w.View, {
                      className: "coupon-rights",
                      children: [
                        (0, X.BX)(w.View, {
                          className: "coupon-wrap",
                          children: [
                            null == l
                              ? void 0
                              : l.map(function (e, t) {
                                  return (0,
                                  X.tZ)(w.Image, { className: "ident-promotion", mode: "heightFix", src: e }, t);
                                }),
                            null == c
                              ? void 0
                              : c.map(function (e, t) {
                                  return (0,
                                  X.BX)(w.View, { className: "coupon", children: [(0, X.tZ)(w.View, { className: "left" }), (0, X.tZ)(w.View, { className: "txt", children: e }, t), (0, X.tZ)(w.View, { className: "right" })] }, t);
                                }),
                          ],
                        }),
                        a.length > 0 &&
                          (0, X.BX)(w.View, {
                            className: "rbox",
                            id: "AXCJ",
                            onClick: n,
                            children: [
                              (0, X.tZ)(w.Text, {
                                className: "coupon-arr color-primary",
                                children: "领券",
                              }),
                              (0, X.tZ)(w.Text, {
                                className: "ifont-arr iconfont color-primary",
                              }),
                            ],
                          }),
                      ],
                    })
                  : (0, X.tZ)(w.View, {})
              );
            }),
            ut = o(25949),
            ht = o.n(ut),
            pt = f.default.memo(function (e) {
              var t = e.loadingState,
                o = e.list,
                i = e.onItemClick,
                a = e.isSelectManyNight,
                n = e.totalDays,
                l = e.onChangeSelectManyNight;
              return [2, 3, 4].includes(t)
                ? (0, X.BX)(w.View, {
                    className: "filter-select-box",
                    children: [
                      (0, X.tZ)(w.View, {
                        className: ht()(
                          "filter-tags",
                          V.ZP.isLogin && n > 1 ? "pr-170" : ""
                        ),
                        children: o.map(function (e, t) {
                          var o;
                          return (0, X.BX)(
                            w.View,
                            {
                              className: "item".concat(
                                (0, B.gP)(e.isSelected, " selected")
                              ),
                              id: "AXCU",
                              onClick: function () {
                                return i(e);
                              },
                              children: [
                                (null === (o = e.extra) || void 0 === o
                                  ? void 0
                                  : o.unSelectIcon) &&
                                  (0, X.tZ)(w.Image, {
                                    className: "ficon",
                                    src: e.extra.unSelectIcon,
                                  }),
                                (0, X.tZ)(w.Text, { children: e.data.title }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                      !!V.ZP.isLogin &&
                        n > 1 &&
                        (0, X.BX)(w.View, {
                          className: "many-night-select",
                          onClick: function () {
                            return l(!a);
                          },
                          children: [
                            (0, X.BX)(w.Text, { children: [n, "晚总价"] }),
                            (0, X.tZ)(w.Text, {
                              className: ht()(
                                a
                                  ? "ifont2-checkboxed select-ifont2-checkboxed"
                                  : "ifont2-checkbox",
                                "iconfont2"
                              ),
                            }),
                          ],
                        }),
                    ],
                  })
                : (0, X.tZ)(w.View, {
                    className: "skeleton-tag",
                    children: [0, 1, 2, 3].map(function (e, t) {
                      return (0, X.tZ)(w.View, { className: "item" }, t);
                    }),
                  });
            }),
            gt = o(93004),
            ft = {
              avatar:
                "https://pic.c-ctrip.com/train/zt/wechat/avatar-default-".concat(
                  b.default.zxTyStr,
                  ".png"
                ),
              remarkScoreLine:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/sheshixiangqingye-qietu/UI_fuhao@3x.webp",
              scroeTypes: [
                { title: "环境", key: "ratingAround" },
                { title: "服务", key: "ratingService" },
                { title: "设施", key: "ratingFacility" },
                { title: "卫生", key: "ratingRoom" },
              ],
            },
            wt = function (e) {
              var t = e.displayScores,
                o = e.hotelCommentAvgRatings,
                i = o.ratingOverall,
                a = o.ratingRemark,
                n = e.recommendRatio,
                l = e.gotoCommentPage,
                c = i || "暂无评分";
              i % 1 == 0 && (c = "".concat(i, ".0"));
              var r = "strong".concat((0, B.gP)(!!i, " no-score")),
                s = "高于同类".concat(n, "%的酒店"),
                d = (0, B.gP)(n, s),
                m = a || "不错";
              return (0, X.BX)(w.View, {
                className: "hotel-remark-score",
                id: "AXCo",
                onClick: l,
                children: [
                  (0, X.BX)(w.View, {
                    className: "score-box",
                    children: [
                      (0, X.BX)(w.View, {
                        className: "tit color-primary",
                        children: [
                          (0, X.tZ)(w.Text, { className: r, children: c }),
                          (0, X.tZ)(w.Text, {
                            className: "rating-remark",
                            children: m,
                          }),
                          (0, X.tZ)(w.Image, {
                            className: "line-img",
                            src: ft.remarkScoreLine,
                          }),
                        ],
                      }),
                      d && (0, X.tZ)(w.View, { className: "txt", children: d }),
                    ],
                  }),
                  (0, X.tZ)(w.View, {
                    className: "score-type",
                    children:
                      null == t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0,
                            X.BX)(w.View, { className: "item", children: [(0, X.tZ)(w.Text, { children: e.title }), (0, X.tZ)(w.View, { className: "score-line", children: (0, X.tZ)(w.View, { className: "line bgcolor-primary", style: e.style }) }), (0, X.tZ)(w.Text, { children: (0, B.a5)(e.text) })] }, t);
                          }),
                  }),
                ],
              });
            },
            vt = f.default.memo(function (e) {
              var t,
                o,
                i,
                a,
                n = e.hotelId,
                l = e.hotelCommentDynamicInfo,
                c = l.hotelCommentStatistic,
                r = l.hotelCommentQueryList,
                s = e.hotelCommentStaticInfo,
                d = s.hotelCommentAvgRatings,
                m = void 0 === d ? {} : d,
                u = s.recommendRatio,
                h = e.shortComment,
                p = h.commentGrade,
                g = h.nickName,
                v = h.ratings,
                N = h.content,
                I = h.imageList,
                T = h.bigImageList,
                Z = h.checkInDate,
                V = h.createDate,
                k = e.totalCount,
                b = e.askReplyList,
                x = e.gotoQAPage,
                C = (null == c ? void 0 : c.totalCount) > 0,
                P = "".concat(null == c ? void 0 : c.totalCount, "条评论"),
                D = (0, B.gP)(C, P),
                R = ft.scroeTypes.map(function (e) {
                  return {
                    title: e.title,
                    style: "width:".concat(20 * m[e.key], "%"),
                    text: m[e.key] || "暂无",
                  };
                }),
                L = (0, f.useCallback)(function (e, t) {
                  var o = [];
                  e.forEach(function (e) {
                    var t = {};
                    (t.imageUrl = e.imageUrl),
                      (t.title = e.imageTitle),
                      o.push(t);
                  });
                  var i = { images: o, index: t || 0 },
                    a = "/pages/hotel/imagebox/imagebox?data=".concat(
                      encodeURIComponent(JSON.stringify(i))
                    );
                  y().navigateTo({ url: a });
                }, []),
                S = (0, f.useCallback)(
                  function () {
                    var e = "/pages/hotel/dianping/dianping?hotelId=".concat(n);
                    y().navigateTo({ url: e });
                  },
                  [n]
                );
              return (0, X.BX)(w.View, {
                className: "hotel-detail-module evaluation",
                id: "evaluation",
                children: [
                  (0, X.tZ)(w.View, {
                    className: "title",
                    children: "住客评价",
                  }),
                  (0, X.BX)(w.View, {
                    className: "content-wrap pb0",
                    children: [
                      m &&
                        (0, X.tZ)(wt, {
                          displayScores: R,
                          hotelCommentAvgRatings: m,
                          recommendRatio: u,
                          gotoCommentPage: S,
                        }),
                      (null == r ? void 0 : r.length) > 0 &&
                        (0, X.BX)(w.View, {
                          className: "remark-tag",
                          id: "AXCp",
                          onClick: S,
                          children: [
                            (null === (t = r[0]) ||
                            void 0 === t ||
                            null === (o = t.items) ||
                            void 0 === o
                              ? void 0
                              : o.length) > 0 &&
                              (0, X.tZ)(w.View, {
                                className: "item",
                                children: "全部",
                              }),
                            null === (i = r[0]) ||
                            void 0 === i ||
                            null === (a = i.items) ||
                            void 0 === a
                              ? void 0
                              : a.map(function (e, t) {
                                  return (0,
                                  X.BX)(w.View, { className: "item", children: [e.name, " ", (0, X.tZ)(w.Text, { className: "no", children: "(".concat(e.val, ")") })] }, t);
                                }),
                          ],
                        }),
                      (0, X.tZ)(w.View, {
                        className: "hotel-remark-list",
                        children: (0, X.BX)(w.View, {
                          className: "item",
                          children: [
                            (0, X.BX)(w.View, {
                              className: "man-info",
                              children: [
                                (0, X.tZ)(w.Image, {
                                  src: ft.avatar,
                                  className: "avatar",
                                }),
                                (0, X.BX)(w.View, {
                                  className: "cont",
                                  children: [
                                    (0, X.BX)(w.View, {
                                      className: "name",
                                      children: [
                                        g,
                                        p &&
                                          (0, X.tZ)(w.Text, {
                                            className: "tag color-red",
                                            children: p,
                                          }),
                                      ],
                                    }),
                                    (0, X.BX)(w.View, {
                                      className: "evaluate",
                                      children: [
                                        (null == v ? void 0 : v.ratingOverall) >
                                          0 &&
                                          (0, X.tZ)(w.View, {
                                            className: "color-primary",
                                            children:
                                              v.ratingOverall +
                                              (v.ratingOverall % 1 == 0
                                                ? ".0"
                                                : ""),
                                          }),
                                        (null == v
                                          ? void 0
                                          : v.ratingOverall) &&
                                          (0, X.tZ)(gt.Z, {
                                            score: v.ratingOverall,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            N &&
                              (0, X.tZ)(w.View, {
                                className: "remark-txt",
                                children: N,
                              }),
                            (0, X.tZ)(w.View, {
                              className: "remark-pic",
                              children: I.map(function (e, t) {
                                return (0, X.tZ)(
                                  w.Image,
                                  {
                                    className: "pic",
                                    src: e.imageUrl,
                                    id: "AXCq",
                                    onClick: function () {
                                      return L(T, t);
                                    },
                                  },
                                  t
                                );
                              }),
                            }),
                            (0, X.tZ)(w.View, {
                              className: "remark-time",
                              children: ""
                                .concat(Z, "入住，")
                                .concat(V, "发表"),
                            }),
                          ],
                        }),
                      }),
                      (0, X.BX)(w.View, {
                        className: "check-all",
                        id: "AXCr",
                        onClick: S,
                        children: [
                          (0, X.tZ)(w.Text, { children: D }),
                          (0, X.tZ)(w.Text, {
                            className: "iconfont ifont-arr",
                          }),
                        ],
                      }),
                      k > 0 &&
                        (0, X.BX)(w.View, {
                          className: "sub-module",
                          children: [
                            (0, X.tZ)(w.View, {
                              className: "title",
                              children: "问大家",
                            }),
                            (0, X.tZ)(w.View, {
                              className: "hotel-qabox",
                              children: b.map(function (e) {
                                return (0,
                                X.BX)(w.View, { className: "item", children: [(0, X.tZ)(w.View, { className: "wen bgcolor-primary", children: "问" }), (0, X.tZ)(w.View, { className: "cont", children: e.title }), (0, X.tZ)(w.View, { className: "rbox", children: "".concat(e.tyReplyList.length, "个问答") })] }, "index");
                              }),
                            }),
                            (0, X.BX)(w.View, {
                              className: "check-all",
                              id: "AXCs",
                              onClick: x,
                              children: [
                                (0, X.tZ)(w.Text, {
                                  children: "".concat(k, "条问答"),
                                }),
                                (0, X.tZ)(w.Text, {
                                  className: "iconfont ifont-arr",
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            }),
            yt = "https://images3.c-ctrip.com/zt/wechat/hotel/railway.png",
            Nt = "https://images3.c-ctrip.com/zt/wechat/hotel/airport.png",
            It = "https://images3.c-ctrip.com/zt/wechat/hotel/senic-spot.png",
            Tt =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/ditu_youhua/ic_hesuan@3x.png",
            Zt = f.default.memo(function (e) {
              var t,
                o = e.pageId,
                i = e.trafficRailway,
                a = e.trafficAirport,
                n = e.scenicSpot,
                l = e.scenicCityInfo,
                c = e.covidMonitoringPoint,
                r = (0, f.useCallback)(
                  function () {
                    var e = l.cityId,
                      t = l.cityName,
                      o = "/pages/taroCRN/ticket/pages/index/index?cityName="
                        .concat(t, "&cityId=")
                        .concat(e, "&source=hotelDetailScenic");
                    y().navigateTo({ url: o });
                  },
                  [l]
                ),
                s = (0, f.useCallback)(function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = encodeURIComponent(
                      JSON.stringify({
                        commentCount: e.commentCount,
                        commentGrade: e.commentGrade,
                        iD: e.iD,
                        name: e.name,
                        pmRecommand: e.pmRecommand,
                        star: e.star,
                      })
                    );
                  y().navigateTo({
                    url: "/pages/ticket/packageA/detail/detail?scenicSpotId="
                      .concat(e.iD, "&scenicInfo=")
                      .concat(t, "&source=wechat"),
                  });
                }, []),
                d = (0, f.useCallback)(
                  function (e) {
                    var t = (0, J.getCurrentPage)();
                    null != t &&
                      t.ubtTrace &&
                      t.ubtTrace(221534, { PageId: o }),
                      Z.Z.twebview({ data: { url: e.poiDetailUrl } });
                  },
                  [o]
                ),
                m = (0, f.useCallback)(function () {
                  Z.Z.twebview({
                    data: {
                      url: "https://m.ctrip.com/webapp/mkt/healthy/healthy?innersid=389&hidelogo=true&popup=close&autoawaken=close",
                    },
                  });
                }, []);
              return (0, X.BX)(w.View, {
                className: "hotel-detail-module traffic",
                children: [
                  (0, X.tZ)(w.View, {
                    className: "title",
                    children: "交通与周边",
                  }),
                  (0, X.BX)(w.View, {
                    className: "content-wrap pb0",
                    children: [
                      i.length > 0 &&
                        (0, X.BX)(w.View, {
                          className: "traffic-ctn",
                          children: [
                            (0, X.BX)(w.View, {
                              className: "traffic-title",
                              children: [
                                (0, X.tZ)(w.Image, {
                                  className: "u-icon",
                                  src: yt,
                                }),
                                (0, X.tZ)(w.View, {
                                  className: "u-txt",
                                  children: "车站",
                                }),
                              ],
                            }),
                            (0, X.tZ)(w.View, {
                              className: "traffic-body",
                              children: i.map(function (e, t) {
                                return (0,
                                X.BX)(w.View, { className: "traffic-item", children: [(0, X.tZ)(w.View, { className: "station", children: e.stationName }), (0, X.BX)(w.View, { className: "distance", children: [(0, X.tZ)(w.Text, { className: "d-1", children: "距酒店直线" }), (0, X.tZ)(w.Text, { className: "d-2", children: e.distanceRemark })] })] }, "railway-".concat(t));
                              }),
                            }),
                          ],
                        }),
                      a.length > 0 &&
                        (0, X.BX)(w.View, {
                          className: "traffic-ctn",
                          children: [
                            (0, X.BX)(w.View, {
                              className: "traffic-title",
                              children: [
                                (0, X.tZ)(w.Image, {
                                  className: "u-icon",
                                  src: Nt,
                                }),
                                (0, X.tZ)(w.View, {
                                  className: "u-txt",
                                  children: "机场",
                                }),
                              ],
                            }),
                            (0, X.tZ)(w.View, {
                              className: "traffic-body",
                              children: a.map(function (e, t) {
                                return (0,
                                X.BX)(w.View, { className: "traffic-item", children: [(0, X.tZ)(w.View, { className: "station", children: e.stationName }), (0, X.BX)(w.View, { className: "distance", children: [(0, X.tZ)(w.Text, { className: "d-1", children: "距酒店直线" }), (0, X.tZ)(w.Text, { className: "d-2", children: e.distanceRemark })] })] }, "airport-".concat(t));
                              }),
                            }),
                          ],
                        }),
                      (null == c ? void 0 : c.length) > 0 &&
                        (0, X.BX)(w.View, {
                          className: "scenic-spot-ctn",
                          children: [
                            (0, X.BX)(w.View, {
                              className: "traffic-title",
                              children: [
                                (0, X.tZ)(w.Image, {
                                  className: "u-icon",
                                  src: Tt,
                                }),
                                (0, X.tZ)(w.View, {
                                  className: "u-txt",
                                  children: "核酸检测点",
                                }),
                              ],
                            }),
                            (0, X.tZ)(w.View, {
                              className: "scenic-spot-body",
                              children: (0, X.tZ)(w.View, {
                                className: "scenic-list-ctn",
                                children: c.map(function (e, t) {
                                  return (0, X.BX)(
                                    w.View,
                                    {
                                      className: "scenic-spot-item",
                                      id: "AXDJ",
                                      onClick: function () {
                                        return d(e);
                                      },
                                      children: [
                                        (0, X.tZ)(w.Image, {
                                          className: "spot-img",
                                          src: e.imageUrl,
                                        }),
                                        (0, X.tZ)(w.View, {
                                          className: "tit",
                                          children: e.name,
                                        }),
                                        (0, X.BX)(w.View, {
                                          className: "distance",
                                          children: [
                                            "距",
                                            e.address,
                                            e.distanceDesc,
                                          ],
                                        }),
                                      ],
                                    },
                                    "scenic-spot-".concat(t)
                                  );
                                }),
                              }),
                            }),
                            (0, X.BX)(w.View, {
                              className: "check-all",
                              id: "AXDK",
                              onClick: m,
                              children: [
                                (0, X.tZ)(w.Text, {
                                  children: "查看全部检测点",
                                }),
                                (0, X.tZ)(w.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                          ],
                        }),
                      (null == n ||
                      null === (t = n.scenicSpotList) ||
                      void 0 === t
                        ? void 0
                        : t.length) > 0 &&
                        (0, X.BX)(w.View, {
                          className: "scenic-spot-ctn",
                          children: [
                            (0, X.BX)(w.View, {
                              className: "traffic-title",
                              children: [
                                (0, X.tZ)(w.Image, {
                                  className: "u-icon",
                                  src: It,
                                }),
                                (0, X.BX)(w.View, {
                                  className: "u-txt",
                                  children: [l.cityName, "景点"],
                                }),
                              ],
                            }),
                            (0, X.tZ)(w.View, {
                              className: "scenic-spot-body",
                              children: (0, X.tZ)(w.View, {
                                className: "scenic-list-ctn",
                                children: n.scenicSpotList.map(function (e, t) {
                                  return (0, X.BX)(
                                    w.View,
                                    {
                                      className: "scenic-spot-item",
                                      id: "AXDL",
                                      onClick: function () {
                                        return s(e);
                                      },
                                      children: [
                                        (0, X.tZ)(w.Image, {
                                          className: "spot-img",
                                          src: e.imageURL,
                                        }),
                                        (0, X.tZ)(w.View, {
                                          className: "spot-price",
                                          children: e.salePrice,
                                        }),
                                        (0, X.tZ)(w.View, {
                                          className: "tit",
                                          children: e.name,
                                        }),
                                        (0, X.BX)(w.View, {
                                          className: "txt",
                                          children: [
                                            (0, X.tZ)(w.View, {
                                              className: "comment-grade",
                                              children: e.commentGrade,
                                            }),
                                            (0, X.tZ)(w.View, {
                                              className: "line",
                                            }),
                                            (0, X.tZ)(w.View, {
                                              className: "distance-desc",
                                              children: e.distanceDesc,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    "scenic-spot-".concat(t)
                                  );
                                }),
                              }),
                            }),
                            (0, X.BX)(w.View, {
                              className: "check-all",
                              id: "AXDM",
                              onClick: r,
                              children: [
                                (0, X.tZ)(w.Text, { children: "查看全部景点" }),
                                (0, X.tZ)(w.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            }),
            Vt = o(56819),
            kt = f.default.memo(function (e) {
              var t = e.recommendHotelList,
                o = e.gotoHotelDetail;
              return null != t && t.length
                ? (0, X.BX)(w.View, {
                    className: "hotel-detail-module recommend",
                    id: "recommend",
                    children: [
                      (0, X.tZ)(w.View, {
                        className: "title",
                        children: "附近相似酒店",
                      }),
                      (0, X.tZ)(w.View, {
                        className: "content-wrap hotel-sel-list",
                        children: t.map(function (e, t) {
                          return (0, X.tZ)(
                            f.default.Fragment,
                            {
                              children: (0, X.tZ)(Vt.Z, {
                                hotel: e,
                                index: t,
                                itemType: "normal",
                                toHotelDetail: function () {
                                  return o(e);
                                },
                              }),
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  })
                : (0, X.tZ)(w.View, {});
            }),
            bt = f.default.memo(function (e) {
              var t = e.data;
              return (0,
              X.tZ)(w.View, { className: "close-notice-wrap", children: (0, X.BX)(w.View, { className: "close-notice flex-align-items-center", children: [(0, X.tZ)(w.View, { className: "lbox", children: (0, X.tZ)(w.Image, { src: t.iconUrl, className: "close-image" }) }), (0, X.BX)(w.View, { className: "cont flex flex-column", children: [(0, X.tZ)(w.View, { className: "notice", children: t.title }), (0, X.tZ)(w.View, { className: "desc", children: t.content })] })] }) });
            }),
            xt = {
              compensate:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/maiguipei/mgp_xqy_1@3x.webp",
              guarantee:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/maiguipei/mgp_xqy_rzbz@3x.webp",
              consumePackage:
                "https://images3.c-ctrip.com/ztrip/hotel/2022/1/icon_rzjs@3x.png",
              redPack:
                "https://images3.c-ctrip.com/ztrip/hotel/2022/5/icon-login@3x.webp",
            },
            Ct = {
              pageId: b.default.isTieyou ? "10650018761" : "10650018584",
              data: {
                isBaidu: b.default.isBaidu,
                statusBarHeight: x.ZP.statusBarHeight,
                screenWidth: x.ZP.screenWidth,
                isLogin: !1,
                isFirstLoad: !0,
                query: {},
                hotel: {},
                geoList: [],
                posrem: "",
                positionRemarkType: "",
                hotelPicInfo: {},
                showHotelImageList: [
                  {
                    imageUrl: b.default.isTieyou
                      ? "https://images3.c-ctrip.com/ztrip/hotel/icons/xiaochengxu/jdtpxcx_bg_ty.png"
                      : "https://images3.c-ctrip.com/ztrip/hotel/icons/xiaochengxu/jdtpxcx_bg.png",
                  },
                ],
                hotelFilterListV2: [],
                selectedTagList: [],
                hotelDetail: {},
                commentViewArr: [],
                topVisible: !1,
                hotelRoomList: [],
                hotelRoomPriceObj: {},
                date: (0, L.vc)({
                  checkInDate: (0, L.tf)(),
                  checkOutDate: (0, L.cL)(),
                }),
                imageUrl:
                  "https://images3.c-ctrip.com/zt/hotel/hotel-fenxiang.png",
                showRoomModal: !1,
                transition: !1,
                showedRoom: {},
                specialRequest: "",
                isTieyou: b.default.isTieyou,
                loadRoomPriceState: 1,
                filterList: [],
                recommendHotelList: [],
                skeletonFlag: !0,
                identityPromotions: [],
                couponBriefList: [],
                hotelCouponList: [],
                promotionBrief: {},
                promotionsList: [],
                exchangeCouponItem: {},
                couponSecondPopVisible: !1,
                totalCredit: "",
                shortComment: {},
                hotelCommentDynamicInfo: {},
                hotelCommentStaticInfo: {},
                hotelPolicyList: [],
                lowestPriceRoom: {},
                topWrapperVisible: !1,
                lowestPriceRoomVisible: !1,
                shortCommentVisible: !1,
                rate: 0,
                totalCount: 0,
                askReplyList: [],
                hadRoomInsBannerInfo: null,
                hotelPriceDetailModalVisible: !1,
                hotelPriceDetailModalInfo: null,
                filterStudentFromList: !1,
                filterStudent: !1,
                trafficRailway: [],
                trafficAirport: [],
                scenicSpot: { scenicSpotList: [] },
                scenicCityInfo: {},
                suiteDetailPopupIndex: 0,
                commentDetail: {},
                eSportsTypes: [40, 41, 42, 43],
                eSportsList: [],
                childPolicyInfo: {},
                lookRoomVisible: !1,
                hourRoomData: { groupRoomList: [] },
                groupRoomList: [],
                showHourRooms: !1,
                isHourRoom: !1,
                guaranteeTab: null,
                showLivedPackages: !1,
                livedPackages: {},
                loginBannerVisible: !1,
                navView: null,
                navTab: Be,
                hotelBasicInfoList: [],
                elementsQuery: {},
                hotelRankInfo: null,
                modals: [],
                couponTimerInfo: null,
                drawerInfo: null,
                drawerType: null,
                smallHoursFlag: !1,
                isMuted: !0,
                showVoiceCtrl: !1,
                userVipInfo: {},
                isShowRoomCountSelect: !1,
                roomNumber: 1,
                noFilterSelectRoomList: [],
                lowestPriceNoFilterVisible: !1,
                isSelectManyNight: !1,
              },
              onLoad: function (e) {
                var t = this;
                if ((this.getSystemInfo(), null != e && e.data)) {
                  var o, i;
                  e.data = (0, B.X5)(e.data);
                  var a = e.data,
                    n = a.checkInFreeFilter,
                    l = a.filters,
                    c = void 0 === l ? [] : l,
                    r = a.geoList,
                    s = void 0 === r ? [] : r,
                    d = a.hotel,
                    m = void 0 === d ? {} : d,
                    u = a.posrem,
                    h = void 0 === u ? "" : u,
                    p = a.positionRemarkType,
                    g = void 0 === p ? "" : p,
                    f = a.query,
                    w = void 0 === f ? {} : f,
                    v = a.traceData,
                    N = a.queryTimeMillis,
                    I = a.hotelIndex;
                  y().setNavigationBarTitle({ title: m.name || "酒店详情" });
                  var T = (0, L.Nj)(),
                    Z = {
                      hotel: m,
                      geoList: s,
                      posrem: h,
                      positionRemarkType: g,
                      date: T.date,
                      traceData: v,
                      queryTimeMillis: N,
                      hotelIndex: I,
                      roomNumber: w.roomNumber || 1,
                    };
                  if (w.checkInDate) {
                    var V = (0, L.BB)({
                      checkInDate: w.checkInDate,
                      checkOutDate: w.checkOutDate,
                    });
                    (Z.date = (0, L.vc)({
                      checkInDate: V.checkInDate,
                      checkOutDate: V.checkOutDate,
                      smallHoursFlag: V.smallHoursFlag,
                    })),
                      (w.checkInDate = V.checkInDate),
                      (w.checkOutDate = V.checkOutDate),
                      (w.contrl = V.smallHoursFlag ? 4 : 3);
                  } else
                    (w.checkInDate = Z.date.checkInDate),
                      (w.checkOutDate = Z.date.checkOutDate),
                      (w.contrl = T.smallHoursFlag ? 4 : 3);
                  w.roomNumber || (w.roomNumber = 1),
                    null !== (o = Z.date) &&
                      void 0 !== o &&
                      o.totalDays &&
                      1 !==
                        (null === (i = Z.date) || void 0 === i
                          ? void 0
                          : i.totalDays) &&
                      P.v$.get() &&
                      (Z.isSelectManyNight = !0),
                    (Z.query = w),
                    (Z.isScanCodeUser = "hotelsmz" === w.fromPage),
                    (7 != w.hotelType &&
                      2 != w.specialChannel &&
                      1 !== m.hourRoomFlag) ||
                      (Z.isHourRoom = !0);
                  var k = this.hasChooseStudentPrompt(w);
                  (Z.filterStudentFromList = k),
                    (Z.filterStudent = k),
                    (this.queryFilterFromList = c),
                    (this.checkInFreeFilter = n),
                    this.setData(Z, function () {
                      t.refreshHotelData();
                    }),
                    this.setPageUbtTrace(m, w);
                }
                this.checkLogin(),
                  this.getOpenId(),
                  this.getHotelComment(),
                  this.getAskReplyList(),
                  this.getTyHotelUserInfo();
              },
              setPageUbtTrace: function (e, t) {
                var o = this.data.date;
                this.ubtTrace(203944, {
                  hotelId: e.hotelId,
                  checkInDate: o.checkInDate,
                  checkOutDate: o.checkOutDate,
                  fromPage: t.fromPage,
                });
              },
              onShow: function () {
                var e = this.data,
                  t = e.hotel,
                  o = e.query;
                t && o && this.setPageUbtTrace(t, o);
              },
              onUnload: function () {
                this.clearCountDown();
              },
              hasChooseStudentPrompt: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = !1;
                if (
                  e &&
                  e.queryFilterList &&
                  Array.isArray(e.queryFilterList) &&
                  e.queryFilterList.length > 0
                ) {
                  var o = e.queryFilterList.findIndex(function (e) {
                    return "29|45" === e.filterID;
                  });
                  o > -1 && (t = !0);
                }
                return t;
              },
              refreshHotelData: function (e) {
                this.getTyHotelPicList(),
                  this.getTyHotelDetail(),
                  this.getTyHotelRoomPrice(e),
                  this.getRecommendList(),
                  this.getHotelCoupons(),
                  this.getHotelFacilityDetail();
              },
              onClickLoginBanner: function () {
                var e = this;
                this.ubtTrace(209282, { bizKey: "VX_detail_wdlyd_click" }),
                  V.ZP.doLogin()
                    .then(function () {
                      e.setData({ isLogin: !0, loginBannerVisible: !1 }),
                        e.refreshHotelData();
                    })
                    .catch(function () {
                      console.log("login error");
                    });
              },
              onClickCloseLoginBanner: function () {
                this.setData({ loginBannerVisible: !1 });
              },
              getSystemInfo: function () {
                var e = this;
                y().getSystemInfo({
                  success: function (t) {
                    e.setData({ rate: 750 / t.windowWidth });
                  },
                });
              },
              getOpenId: function () {
                var e = this;
                V.ZP.openid
                  ? this.setData({ openId: V.ZP.openid })
                  : (0, V.M9)({ force: !0 }).then(
                      function (t) {
                        var o = t.openid;
                        console.log("openid", o), e.setData({ openId: o });
                      },
                      function () {
                        console.log("获取openId失败");
                      }
                    );
              },
              getTyHotelPicList: function () {
                var e = this,
                  t = {
                    data: {
                      hotelId: e.data.hotel.hotelId,
                      cityId: e.data.hotel.cityId,
                      subBusinessType: 0,
                      clientVersion: D.Z.clientVersion,
                    },
                  };
                (0, Q.Xn)(t).then(function (t) {
                  if (t && 1 === t.resultCode) {
                    var o = t.data,
                      i = [],
                      a = !1;
                    (0, B.yD)(o.hotelImageList)
                      ? i.push({ imageUrl: Oe })
                      : (i = i.concat(o.hotelImageList)),
                      o.hotelVideoInfo && (a = !0),
                      e.setData({
                        hotelPicInfo: o || {},
                        showHotelImageList: i,
                        showVoiceCtrl: a,
                      });
                  }
                });
              },
              hotelDetailUbtTrace: function () {
                this.ubtTrace("O_HOTEL_DETAIL", {
                  DeviceToken: V.ZP.openid,
                  Sequence: (0, g.Z)(
                    (0, g.Z)({}, this.data.hotel),
                    {},
                    {
                      query: this.data.query,
                      queryTimeMillis: this.data.queryTimeMillis,
                      traceData: this.data.traceData,
                      hotelIndex: this.data.hotelIndex,
                    }
                  ),
                });
              },
              getTyHotelDetail: function () {
                var e = this,
                  t = this.data,
                  o = t.hotel,
                  i = t.query,
                  a = t.positionRemarkType,
                  n = t.posrem,
                  l = t.isHourRoom,
                  c = t.geoList,
                  r = t.date,
                  s = {
                    data: {
                      checkInDate: r.checkInDate,
                      checkOutDate: r.checkOutDate,
                      hotelId: o.hotelId,
                      cityId: o.cityId || i.cityId,
                      clientVersion: D.Z.clientVersion,
                      isHourRoomHotel: l || o.hourRoomFlag ? 1 : 0,
                      positionRemarkType: a,
                      posrem: n,
                    },
                  };
                if (null != c && c.length) {
                  var d = (0, p.Z)(c, 1)[0];
                  d &&
                    ((s.data.type = d.type || 0),
                    (s.data.lat = d.lat || ""),
                    (s.data.lon = d.lon || ""));
                }
                this.hotelDetailUbtTrace(),
                  (0, Q.rX)(s)
                    .then(function (t) {
                      if (1 != t.resultCode) throw t.resultMessage;
                      var o = t.data,
                        i = o.starLevel,
                        a = o.commentView,
                        n = o.commentRemark,
                        l = o.commentNum,
                        c = o.commonScore,
                        r = o.childPolicyInfo,
                        s = o.starIcon,
                        d = o.hotelAddInfo,
                        m = o.consumePackages,
                        u = o.hotelBasicInfoList,
                        h = o.hotelRankInfo,
                        p = i
                          ? new Array(i).fill().map(function (e, t) {
                              return t;
                            })
                          : [],
                        f = [];
                      a ? (f = a.split("，")) : n && (f = [n]);
                      var w = {};
                      if (r) {
                        var v = r.childBreakfast,
                          y = r.childExtraBed,
                          N = r.policeInfo;
                        (w.childItemTitle = "儿童政策"),
                          (w.policeInfo = N
                            ? [N.context, N.specialTips].filter(function (e) {
                                return !!e;
                              })
                            : []),
                          y && (w.childExtraBed = y),
                          v && (w.childBreakfast = v);
                      }
                      var I = {};
                      if (null != m && m.length) {
                        var T = m.filter(function (e) {
                            return 3 === e.type;
                          }),
                          Z = T.length
                            ? T.filter(function (e) {
                                var t;
                                return null === (t = e.consumePackageDetails) ||
                                  void 0 === t
                                  ? void 0
                                  : t.length;
                              })
                                .map(function (e) {
                                  return e.consumePackageDetails
                                    .map(function (e) {
                                      return e.priefName;
                                    })
                                    .join("+");
                                })
                                .join("+")
                            : "";
                        Z &&
                          ((I.detailNameStr = Z),
                          (I.details = T),
                          e.ubtTrace(209281, { bizKey: "VX_list_xkkp_show" }),
                          e.ubtTrace(208557, {
                            bizKey: "hotel_detail_checkingive_show",
                          }));
                      }
                      e.setData({
                        hotelDetail: (0, g.Z)(
                          (0, g.Z)({}, o),
                          {},
                          { starList: p, starIcon: s }
                        ),
                        commentDetail: {
                          commentViewArr: f,
                          commentNum: l,
                          commonScore: c,
                        },
                        childPolicyInfo: w,
                        lastBookTimeStr:
                          (null == d ? void 0 : d.lastBookingOrder) ||
                          "半小时前有人看过",
                        livedPackages: I,
                        hotelRankInfo: h,
                        hotelBasicInfoList: u || [],
                      }),
                        e.fetchTrafficScenicDetails();
                    })
                    .catch(function () {});
              },
              fetchTrafficScenicDetails: function () {
                var e,
                  t = this,
                  o = this.data,
                  i = o.hotel,
                  a = o.date,
                  n = this.data.hotelDetail.geoList;
                n &&
                  n.length > 0 &&
                  n.forEach(function (t) {
                    3 == t.type && (e = t);
                  });
                var l = {
                  data: {
                    hotelId: i.hotelId,
                    cityId: i.cityId || this.data.query.cityId,
                    cityName: this.data.hotelDetail.cName,
                    hotelName:
                      i.name || i.hotelName || this.data.hotelDetail.name,
                    longitude: parseFloat(e.lon),
                    latitude: parseFloat(e.lat),
                    clientVersion: D.Z.clientVersion,
                    checkInTime: a.checkInDate,
                    checkOutTime: a.checkOutDate,
                  },
                };
                (0, Q.Cp)(l)
                  .then(function (e) {
                    if (null != e && e.data) {
                      var o = e.data,
                        i = o.scenicSpots,
                        a = o.traffics,
                        n = o.covidMonitoringPoint,
                        l = {};
                      if (null != i && i.length) {
                        var c,
                          r,
                          s =
                            null === (c = i[0].scenicSpotCategoryList) ||
                            void 0 === c
                              ? void 0
                              : c.find(function (e) {
                                  return 1 === e.categoryId;
                                });
                        null != s &&
                          null !== (r = s.scenicSpotList) &&
                          void 0 !== r &&
                          r.length &&
                          s.scenicSpotList.forEach(function (e) {
                            e.commentGrade &&
                              "number" == typeof e.commentGrade &&
                              (e.commentGrade = e.commentGrade.toFixed(1));
                          }),
                          (l.scenicCityInfo = i[0].cityInfo),
                          (l.scenicSpot = s);
                      }
                      if (null != a && a.length) {
                        var d = a.filter(function (e) {
                            return 2 === e.stationType;
                          }),
                          m = a.filter(function (e) {
                            return 1 === e.stationType;
                          });
                        (l.trafficRailway = d), (l.trafficAirport = m);
                      }
                      null != n && n.length && (l.covidMonitoringPoint = n),
                        Object.keys(l).length && t.setData(l);
                    }
                  })
                  .catch(function () {});
              },
              getRecommendList: function () {
                var e = this,
                  t = this.data,
                  o = t.hotel,
                  i = t.query,
                  a = t.date,
                  n = i.cityId || o.cityId;
                o.source && "searchResult" === o.source && (n = o.cityId);
                var l = (0, L.rv)(a),
                  c = {
                    data: {
                      cityId: n,
                      districtId: i.districtId || 0,
                      queryBitMap: i.queryBitMap || 0,
                      hiddenHotelList: [o.hotelId],
                      clientVersion: D.Z.clientVersion,
                      hotelType: i.hotelType || 1,
                      checkInDate: l.checkInDate,
                      checkOutDate: l.checkOutDate,
                      contrl: l.smallHoursFlag ? 4 : 3,
                      showPrice: o.priceInfo
                        ? o.priceInfo.couponTag
                          ? o.priceInfo.couponSalePrice
                          : o.priceInfo.salePrice
                        : null,
                      queryFilterList: [
                        {
                          filterID: "36",
                          type: "36",
                          title: o.name || o.hotelName,
                          value: ""
                            .concat(
                              o.geoList
                                ? o.geoList[0].lat + "|" + o.geoList[0].lon
                                : "",
                              "|"
                            )
                            .concat(o.name || o.hotelName),
                          sceneBitMap: 0,
                          filterType: 0,
                        },
                      ],
                      sameCityFlag: !!i.sameCityFlag,
                      index: 1,
                      pageSize: 6,
                      fromPage: i.fromPage,
                    },
                  };
                (0, M.SH)(c)
                  .then(function (t) {
                    if (1 === t.resultCode) {
                      var o = t.data || {};
                      e.setData({
                        recommendHotelList:
                          e.setHotelTagsInfo(o.hotelList) || [],
                      });
                    }
                  })
                  .catch(function () {});
              },
              setHotelTagsInfo: function (e) {
                return null == e
                  ? void 0
                  : e.map(function (e) {
                      var t,
                        o,
                        i,
                        a,
                        n = e.recommendWord,
                        l = e.commentView,
                        c = e.hotelAddInfo,
                        r = void 0 === c ? {} : c,
                        s = e.hotelExtraInfo,
                        d = void 0 === s ? {} : s,
                        m = (0, g.Z)((0, g.Z)((0, g.Z)({}, e), r), d);
                      m.commonScore = parseFloat(m.commonScore).toFixed(1);
                      var u =
                        null === (t = m.promotionTagList) || void 0 === t
                          ? void 0
                          : t.findIndex(function (e) {
                              return 1 === e.style;
                            });
                      u > -1 && m.promotionTagList.splice(u, 1);
                      var h =
                        null === (o = r.commentTagList) || void 0 === o
                          ? void 0
                          : o
                              .map(function (e) {
                                return e.text;
                              })
                              .join("，");
                      h && (m.commentView = n || l || h),
                        m.star &&
                          (m.starList = new Array(parseInt(m.star)).fill(1)),
                        (m.nearByPoi || m.zone || m.location) &&
                          (m.zoneStr = m.nearByPoi || m.zone || m.location);
                      var p = m.priceInfo,
                        f = p.couponTag,
                        w = p.couponSalePrice,
                        v = p.salePrice,
                        y = p.noLoginPrice,
                        N = f ? w : v;
                      return (
                        (m.displayPrice = y || N),
                        (m.showDiscountInfo =
                          !!f ||
                          (null === (i = m.promotionDiscountList) ||
                          void 0 === i
                            ? void 0
                            : i.length) > 0),
                        (m.promotionDiscountList =
                          (null === (a = m.promotionDiscountList) ||
                          void 0 === a
                            ? void 0
                            : a.slice(0, 2)) || []),
                        m
                      );
                    });
              },
              getControlBitmap: function (e) {
                var t = 0;
                return (
                  (7 == e.hotelType ||
                    2 == e.specialChannel ||
                    1 === this.data.hotel.hourRoomFlag) &&
                    (t = 1024),
                  4 == e.contrl && (t += 4),
                  t
                );
              },
              millisToSecond: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                if ("undefined" !== e)
                  return 10 == e.toString().length ? e : Math.floor(e / 1e3);
                console.warn("未传入props时间戳");
              },
              checkTime: function (e) {
                var t = e;
                return e < 10 && (t = "0" + e), t.toString();
              },
              clearCountDown: function () {
                this.detailTimerId &&
                  (clearInterval(this.detailTimerId),
                  (this.detailTimerId = null));
              },
              setCountDown: function (e) {
                var t,
                  o = this,
                  i = (
                    null !== (t = null != e ? e : this.data.hotelRoomList) &&
                    void 0 !== t
                      ? t
                      : []
                  ).find(function (e) {
                    return e.tonightEndTime;
                  });
                null != i &&
                  i.tonightEndTime &&
                  (this.clearCountDown(),
                  (this.detailTimerId = setInterval(function () {
                    o.setCountDownImpl(i.tonightEndTime);
                  }, 1e3)));
              },
              setCountDownImpl: function (e) {
                var t = new Date().getTime(),
                  o = this.millisToSecond(e) - this.millisToSecond(t);
                (0, B.JV)(o).stop &&
                  (this.clearCountDown(), this.getTyHotelRoomPrice());
              },
              hotelRoomPricePromise: function (e) {
                var t = this;
                return new Promise(function (o, i) {
                  var a = t.data,
                    n = a.hotel,
                    l = a.query,
                    c = a.date,
                    r = a.traceData,
                    s = !(V.ZP && V.ZP.auth),
                    d = t.getControlBitmap(l),
                    m = (0, L.rv)(c),
                    u = {
                      data: {
                        hotelId: n.hotelId,
                        cityId: n.cityId || l.cityId,
                        checkInDate: m.checkInDate,
                        checkOutDate: m.checkOutDate,
                        controlBitMap: e ? 1024 : d,
                        queryBitMap: l.queryBitMap,
                        quantity: 1,
                        payType: l.payType || 0,
                        clientVersion: D.Z.clientVersion,
                        hotelIndex: n.hotelIndex || 0,
                        anonymousFlag: s,
                        showPrice: n.realPrice,
                        fromPage: l.fromPage,
                        fkCode: V.ZP.secretToken,
                        roomNumber: t.data.roomNumber,
                      },
                    };
                  !e && r && (u.data.traceData = r),
                    l.allianceInfo && (u.data.allianceInfo = l.allianceInfo),
                    t.checkInFreeFilter &&
                      !e &&
                      (u.data.filterList = [t.checkInFreeFilter]),
                    (0, Q.L4)(u)
                      .then(function (i) {
                        if (1 !== i.resultCode) throw new Error("unexcept");
                        var a,
                          n,
                          l = i.data,
                          c = [],
                          r = [],
                          s = new Map(),
                          m = "",
                          u = [];
                        (0, B.Qr)(l) ||
                          (0, B.yD)(l.roomList) ||
                          (r = l.roomList),
                          (0, B.Qr)(l) ||
                            (0, B.Q6)(l.baseOrder) ||
                            (m = l.baseOrder),
                          (0, B.Q6)(m) || (u = m.split(",")),
                          u.forEach(function (e) {
                            s.set(e, []);
                          }),
                          r.forEach(function (e) {
                            var o = s.get(e.baseId),
                              i = e.consumePackages || [],
                              a = (0, B.Bf)(i),
                              n = a.giftBox,
                              l = a.highValuePackage;
                            (e.giftBox = n), (e.highValuePackage = l);
                            var c = [4, 6, 38, 18, 17, 51, 5, 1],
                              r = [2, 3, 23, 7, 8, 12, 10].concat(
                                t.data.eSportsTypes
                              ),
                              d = e.roomBasicList.filter(function (e) {
                                return 36 === e.type;
                              }),
                              m = [],
                              u = [],
                              h = [];
                            e.roomBasicList.forEach(function (e) {
                              var o = e.itemValue,
                                i = e.type;
                              if (o && (0, R.Tw)(i)) {
                                var a = m.find(function (t) {
                                    return t.type === e.type;
                                  }),
                                  n = (0, R.Tw)(i);
                                if (c.includes(i)) {
                                  if (![51, 5, 1].includes(i)) {
                                    var l = (0, g.Z)(
                                      (0, g.Z)({}, e),
                                      {},
                                      { iconUrl: n }
                                    );
                                    17 !== i ||
                                      o ||
                                      (l.itemValue = "吸烟详询酒店"),
                                      18 === i &&
                                        (o
                                          ? !o.includes("无窗") &&
                                            o.length > 4 &&
                                            (l.itemValue = "有窗户")
                                          : (l.itemValue = "窗户详询酒店")),
                                      u.push(l);
                                  }
                                } else
                                  r.includes(i)
                                    ? t.data.eSportsTypes.includes(i) &&
                                      h.push(e)
                                    : a
                                    ? a.itemValues.push((0, g.Z)({}, e))
                                    : m.push(
                                        (0, g.Z)(
                                          (0, g.Z)({}, e),
                                          {},
                                          {
                                            iconUrl: n,
                                            itemValues: [(0, g.Z)({}, e)],
                                          }
                                        )
                                      );
                              }
                            });
                            var p = e.extraBasicItemIdList || [],
                              f = [];
                            p.forEach(function (e) {
                              var t = m.find(function (t) {
                                return t.type === e;
                              });
                              t && f.push(t);
                            });
                            var w = [],
                              v = e.roomBasicList.find(function (e) {
                                return 51 === e.type;
                              }),
                              y = e.roomBasicList.find(function (e) {
                                return 5 === e.type;
                              }),
                              N = e.roomBasicList.find(function (e) {
                                return 1 === e.type;
                              }),
                              I = d.find(function (e) {
                                return 361 === e.subType;
                              }),
                              T = d.find(function (e) {
                                return 362 === e.subType;
                              }),
                              Z = d.find(function (e) {
                                return 363 === e.subType;
                              }),
                              V = v ? v.itemValue : "",
                              k = y ? y.itemValue : "",
                              b = ""
                                .concat(V)
                                .concat(V ? "，" : "")
                                .concat(k ? "可住".concat(k) : "");
                            b &&
                              w.push({
                                type: "bedInfo",
                                itemValue: b,
                                iconUrl: (0, R.Tw)(51),
                                addInfo: I,
                              }),
                              N &&
                                w.push(
                                  (0, g.Z)(
                                    (0, g.Z)({}, N),
                                    {},
                                    { iconUrl: (0, R.Tw)(1), addInfo: T }
                                  )
                                ),
                              Z &&
                                w.push(
                                  (0, g.Z)(
                                    (0, g.Z)({}, Z),
                                    {},
                                    { iconUrl: (0, R.Tw)(363) }
                                  )
                                ),
                              o.push(
                                (0, g.Z)(
                                  (0, g.Z)({}, e),
                                  {},
                                  {
                                    roomBasicList: e.roomBasicList,
                                    roomFiltersArr: (e.roomFilters || []).map(
                                      function (e) {
                                        return e.filterID;
                                      }
                                    ),
                                    typedBasicList: f,
                                    firstLineList: u,
                                    secondLineList: w,
                                    eSportsList: h,
                                  }
                                )
                              );
                          }),
                          u.forEach(function (e) {
                            var t = s.get(e);
                            if (!(0, B.yD)(t)) {
                              var o = { isExpand: !1, childList: t };
                              c.push(o);
                            }
                          }),
                          (0, B.Qr)(l) ||
                            (0, B.yD)(l.baseRoomList) ||
                            c.forEach(function (e) {
                              l.baseRoomList.forEach(function (t) {
                                (0, B.Q6)(e.childList[0].baseId) ||
                                  e.childList[0].baseId != t.baseId ||
                                  e.childList.forEach(function (o) {
                                    (0, B.Q6)(o.roomId) ||
                                      o.roomId != t.lowestPriceRoomId ||
                                      (!(0, B.Q6)(o.markId) &&
                                        o.markId != t.lowestMarkId) ||
                                      (e.parentRoom = o);
                                  });
                              });
                            }),
                          l &&
                            l.priceRelationInfo &&
                            l.priceRelationInfo.platformPriceList &&
                            (l.platformPriceList =
                              l.priceRelationInfo.platformPriceList);
                        var h =
                            (
                              (l.filters || []).find(function (e) {
                                return 51 === e.type;
                              }) || {}
                            ).filter || {},
                          p = t.queryFilterFromList.map(function (e) {
                            return e.data.filterID;
                          }),
                          f = [];
                        if (
                          null !== (a = t.queryFilterFromList) &&
                          void 0 !== a &&
                          a.length
                        ) {
                          var w = t.queryFilterFromList.find(function (e) {
                            return "1|771" === e.data.filterID;
                          });
                          if (
                            (w &&
                              f.push(
                                (0, g.Z)(
                                  (0, g.Z)({}, w),
                                  {},
                                  { isSelected: !0 }
                                )
                              ),
                            t.checkInFreeFilter)
                          ) {
                            var v = t.queryFilterFromList.find(function (e) {
                              return (
                                e.data.filterID === t.checkInFreeFilter.filterID
                              );
                            });
                            v &&
                              f.push(
                                (0, g.Z)(
                                  (0, g.Z)({}, v),
                                  {},
                                  { isSelected: !0 }
                                )
                              );
                          }
                          var y = t.queryFilterFromList.find(function (e) {
                            return "5|1" === e.data.filterID;
                          });
                          y &&
                            f.push(
                              (0, g.Z)((0, g.Z)({}, y), {}, { isSelected: !0 })
                            );
                        }
                        (null === (n = h.subItems) || void 0 === n
                          ? void 0
                          : n.length) > 0 &&
                          h.subItems.forEach(function (e) {
                            var t = !1;
                            p.indexOf(e.data.filterID) > -1 && (t = !0),
                              f.push(
                                (0, g.Z)((0, g.Z)({}, e), {}, { isSelected: t })
                              );
                          });
                        var N = {},
                          I = [];
                        if (0 !== c.length && !e) {
                          var T = c.filter(function (e) {
                            return (
                              4 != (4 & e.parentRoom.status) &&
                              2 != (2 & e.parentRoom.status)
                            );
                          });
                          (N = T.length > 0 ? T[0].parentRoom : {}),
                            T.forEach(function (e) {
                              (e.parentRoom.couponTag
                                ? e.parentRoom.priceInfo.couponSalePrice
                                : e.parentRoom.priceInfo.salePrice) <
                                (N.couponTag
                                  ? N.priceInfo.couponSalePrice
                                  : N.priceInfo.salePrice) &&
                                (N = e.parentRoom);
                            }),
                            c.forEach(function (t) {
                              if (t.parentRoom.roomId !== N.roomId) I.push(t);
                              else if (
                                t.childList.some(function (e) {
                                  return e.roomId !== N.roomId;
                                })
                              ) {
                                t.childList = t.childList.filter(function (e) {
                                  return e.roomId !== N.roomId;
                                });
                                var o = "";
                                t.childList.forEach(function (e, i) {
                                  var a = e.couponTag
                                    ? e.priceInfo.couponSalePrice
                                    : e.priceInfo.salePrice;
                                  (0 === i || a < o) &&
                                    ((o = a), (t.parentRoom = e));
                                }),
                                  I.push(t);
                              } else e && I.push(t);
                            });
                        }
                        r.length > 0 && t.setCountDown(r);
                        var Z = {
                          lowestPriceRoom: N,
                          filterList: I,
                          hotelRoomPriceObj: l || {},
                          hotelFilterListV2: f,
                          isFirstLoad: !1,
                          isHourRoom: 1024 === d,
                          groupRoomList: c,
                          modals: [],
                        };
                        !e &&
                          l.couponTimerInfo &&
                          (Z.couponTimerInfo = l.couponTimerInfo),
                          e || (Z.traceData = l.traceData);
                        var V = e
                          ? {
                              hourRoomData: (0, g.Z)(
                                (0, g.Z)({}, Z),
                                {},
                                { filterList: c }
                              ),
                              showHourRooms: !0,
                              hourRoomTraceData: l.traceData,
                            }
                          : Z;
                        (V.checkInFreeFlag = l.checkInFreeFlag), o(V);
                      })
                      .catch(function () {
                        t.setData({ loadRoomPriceState: 3 }), i();
                      });
                });
              },
              getTyHotelRoomPrice: function (e) {
                var t = this;
                return (0, h.Z)(
                  (0, u.Z)().mark(function o() {
                    var i, a, n, l, c, r, s, d;
                    return (0, u.Z)().wrap(
                      function (o) {
                        for (;;)
                          switch ((o.prev = o.next)) {
                            case 0:
                              return (
                                (o.prev = 0),
                                (r = t.data.isHourRoom),
                                (o.next = 4),
                                t.hotelRoomPricePromise()
                              );
                            case 4:
                              if (
                                ((s = o.sent),
                                null !== (i = s.couponTimerInfo) &&
                                  void 0 !== i &&
                                  i.endTime &&
                                  (s.modals = [
                                    {
                                      type: R.fG.DETERRENT_COUPON,
                                      modalInfo: s.couponTimerInfo,
                                      visible: e,
                                    },
                                  ]),
                                t.setData(s),
                                r || t.checkInFreeFilter)
                              ) {
                                o.next = 12;
                                break;
                              }
                              return (o.next = 10), t.hotelRoomPricePromise(!0);
                            case 10:
                              (d = o.sent), t.setData(d);
                            case 12:
                              t.hotelFilterV2(),
                                null !== (a = s.couponTimerInfo) &&
                                  void 0 !== a &&
                                  a.promotionKey &&
                                  setTimeout(
                                    (0, h.Z)(
                                      (0, u.Z)().mark(function e() {
                                        var o;
                                        return (0, u.Z)().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.next = 2),
                                                  t.receiveCouponWithPromotionKey(
                                                    null ===
                                                      (o = s.couponTimerInfo) ||
                                                      void 0 === o
                                                      ? void 0
                                                      : o.promotionKey
                                                  )
                                                );
                                              case 2:
                                                1 === e.sent.resultCode &&
                                                  t.refreshHotelData(!0);
                                              case 4:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    ),
                                    1e3 * s.couponTimerInfo.waitSecond
                                  ),
                                s.groupRoomList.length ||
                                  (null !== (n = d) &&
                                    void 0 !== n &&
                                    null !== (l = n.hourRoomData) &&
                                    void 0 !== l &&
                                    null !== (c = l.groupRoomList) &&
                                    void 0 !== c &&
                                    c.length) ||
                                  t.showCommonDialog("所有房型已售完"),
                                (o.next = 20);
                              break;
                            case 17:
                              (o.prev = 17),
                                (o.t0 = o.catch(0)),
                                console.log("getTyHotelRoomPrice error", o.t0);
                            case 20:
                            case "end":
                              return o.stop();
                          }
                      },
                      o,
                      null,
                      [[0, 17]]
                    );
                  })
                )();
              },
              selectTagV2: function (e) {
                var t,
                  o,
                  i = this,
                  a = this.data.hotelFilterListV2,
                  n = e.isSelected,
                  l = [];
                null != e &&
                  null !== (t = e.operation) &&
                  void 0 !== t &&
                  t.otherMutexIds &&
                  Array.isArray(e.operation.otherMutexIds) &&
                  (l = e.operation.otherMutexIds);
                var c = [],
                  r =
                    n &&
                    e.data.filterID ===
                      (null === (o = this.checkInFreeFilter) || void 0 === o
                        ? void 0
                        : o.filterID);
                a.forEach(function (t) {
                  var o, a, s;
                  if (t.data.title === e.data.title) a = !n;
                  else if (
                    (null === (o = l) || void 0 === o ? void 0 : o.length) > 0
                  ) {
                    var d;
                    a =
                      !(
                        null != t &&
                        null !== (d = t.operation) &&
                        void 0 !== d &&
                        d.selfMutexIds &&
                        l.indexOf(t.operation.selfMutexIds[0]) > -1
                      ) && t.isSelected;
                  } else a = t.isSelected;
                  "5|1" === t.data.filterID &&
                    (s = !a) &&
                    (i.queryFilterFromList = i.queryFilterFromList
                      .slice()
                      .filter(function (e) {
                        return "5|1" !== e.data.filterID;
                      })),
                    s ||
                      (r && t.data.filterID === e.data.filterID) ||
                      c.push((0, g.Z)((0, g.Z)({}, t), {}, { isSelected: a }));
                }),
                  this.ubtTrace(208558, {
                    bizKey: "hotel_detail_filter_click",
                    clickType: e.data.title,
                  }),
                  this.setData({ hotelFilterListV2: c }),
                  this.hotelFilterV2(),
                  r &&
                    ((this.checkInFreeFilter = null),
                    this.getTyHotelRoomPrice());
              },
              arrInclude: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  o = !0;
                return (
                  t.forEach(function (t) {
                    -1 === e.indexOf(t) && (o = !1);
                  }),
                  o
                );
              },
              hotelFilterV2: function () {
                var e,
                  t,
                  o = this,
                  i = this.data,
                  a = i.filterList,
                  n = i.lowestPriceRoom,
                  l = i.hourRoomData,
                  c = JSON.parse(JSON.stringify(a)),
                  r =
                    null != l &&
                    null !== (e = l.filterList) &&
                    void 0 !== e &&
                    e.length
                      ? JSON.parse(
                          JSON.stringify(null == l ? void 0 : l.filterList)
                        )
                      : [],
                  s =
                    (
                      this.data.hotelFilterListV2.filter(function (e) {
                        return e.isSelected;
                      }) || []
                    ).map(function (e) {
                      return e.data.filterID;
                    }) || [],
                  d = s.indexOf("29|45") > -1,
                  m = [],
                  u = [],
                  h = [],
                  p = function (e) {
                    e.childList.forEach(function (e) {
                      o.arrInclude(e.roomFiltersArr, s)
                        ? (e.isShow = !0)
                        : (e.isShow = !1);
                    });
                  },
                  g = function (e) {
                    var t = "";
                    e.childList.forEach(function (o, i) {
                      var a = o.couponTag
                        ? o.priceInfo.couponSalePrice
                        : o.priceInfo.salePrice;
                      (0 === i || a < t) && ((t = a), (e.parentRoom = o));
                    });
                  },
                  f = function (e, t) {
                    var o;
                    if (
                      null !== (o = e.childList) &&
                      void 0 !== o &&
                      o.length
                    ) {
                      var i = e.childList.filter(function (e) {
                          return (
                            e.isShow &&
                            (e.roomFiltersArr.includes("125|1") ||
                              (!e.roomFiltersArr.includes("125|1") &&
                                !e.roomFiltersArr.includes("125|0")))
                          );
                        }),
                        a = e.childList.filter(function (e) {
                          return (
                            !e.isShow || e.roomFiltersArr.includes("125|0")
                          );
                        });
                      if (t && i.length) return void u.push(e);
                      if (t) return;
                      if (i.length) {
                        var n = JSON.parse(JSON.stringify(e));
                        (n.childList = i), g(n), m.push(n);
                      }
                      if (a.length) {
                        var l = JSON.parse(JSON.stringify(e));
                        (l.childList = a), g(l), h.push(l);
                      }
                    }
                  };
                c.forEach(p),
                  c.forEach(function (e) {
                    return f(e);
                  });
                var w =
                    null == n || null === (t = n.roomFiltersArr) || void 0 === t
                      ? void 0
                      : t.includes("125|0"),
                  v = this.arrInclude(n.roomFiltersArr, s),
                  y = {
                    loadRoomPriceState: 2,
                    hotelRoomList: m,
                    filterStudent: d,
                    noFilterSelectRoomList: h,
                    lowestPriceRoomVisible: !w && v,
                    lowestPriceNoFilterVisible: !(!w && v),
                  };
                null != r &&
                  r.length &&
                  (null == r || r.forEach(p),
                  null == r ||
                    r.forEach(function (e) {
                      return f(e, !0);
                    }),
                  (y.hourRoomData = Object.assign({}, l, {
                    hotelRoomList: u,
                  }))),
                  this.setData(y);
              },
              onDateChosen: function (e) {
                var t = this;
                this.ubtTrace(208558, {
                  bizKey: "hotel_detail_datechange_click",
                });
                var o = this.data,
                  i = o.query,
                  a = o.date,
                  n = e.date;
                if (
                  n.checkInDate !== a.checkInDate ||
                  n.checkOut !== a.checkOutDate
                ) {
                  var l = Object.assign({}, i, (0, g.Z)({}, n));
                  (n.smallHoursFlag = (0, L.mD)(n.checkInDate)),
                    (l.contrl = n.smallHoursFlag ? 4 : 3);
                  var c = { date: n, query: l, loadRoomPriceState: 4 };
                  null != n &&
                  n.totalDays &&
                  1 !== (null == n ? void 0 : n.totalDays)
                    ? P.v$.get() && (c.isSelectManyNight = !0)
                    : (c.isSelectManyNight = !1),
                    this.setData(c, function () {
                      t.refreshHotelData();
                    });
                }
              },
              expandRoom: function (e, t, o) {
                var i = t
                  ? this.data.hourRoomData.hotelRoomList
                  : o
                  ? this.data.noFilterSelectRoomList
                  : this.data.hotelRoomList;
                i[e].isExpand = !i[e].isExpand;
                var a = t
                  ? {
                      hourRoomData: Object.assign({}, this.data.hourRoomData, {
                        hotelRoomList: (0, m.Z)(i),
                      }),
                    }
                  : o
                  ? { noFilterSelectRoomList: (0, m.Z)(i) }
                  : { hotelRoomList: (0, m.Z)(i) };
                this.setData(a);
              },
              goToInput: function (e, t, o) {
                var i = this,
                  a = e.currentTarget.dataset.groupindex,
                  n = e.currentTarget.dataset.childindex;
                if (!(0, B.Qr)(i.data.hotelDetail)) {
                  var l = {};
                  ((l =
                    "lowest" === e.currentTarget.dataset.roomtype
                      ? t
                        ? i.data.hourRoomData.lowestPriceRoom
                        : i.data.lowestPriceRoom
                      : t
                      ? i.data.hourRoomData.hotelRoomList[a].childList[n]
                      : o
                      ? i.data.noFilterSelectRoomList[a].childList[n]
                      : i.data.hotelRoomList[a].childList[n]).isNoRoomNumber =
                    o),
                    i.data.isLogin
                      ? i.jumpToInput(l)
                      : i.checkLogin()
                      ? i
                          .getTyHotelRoomPrice()
                          .then(function () {
                            i.jumpToInput(l);
                          })
                          .catch(function (e) {
                            console.log(e);
                          })
                      : i.doLogin(function () {
                          i.jumpToInput(l);
                        });
                }
              },
              noop: function () {},
              onClickFavorite: function () {
                var e = this,
                  t = this.data.hotelDetail,
                  o = t.favoriteFlag,
                  i = {
                    data: {
                      cityId: t.cityId,
                      hotelId: t.hotelId,
                      operateType: o ? 1 : 0,
                      searchType: 1,
                      version: D.Z.clientVersion,
                    },
                  };
                this.ubtTrace(208558, {
                  bizKey: o
                    ? "hotel_detail_cancel_collect_click"
                    : "hotel_detail_collect_click",
                  pageId: b.default.isTieyou ? "10650018761" : "10650018584",
                }),
                  (0, Q.wO)(i)
                    .then(function (t) {
                      if (1 === t.resultCode) {
                        y().showToast({
                          title: o ? "已取消收藏" : "收藏成功",
                          icon: "none",
                          duration: 1500,
                        });
                        e.setData((0, d.Z)({}, "hotelDetail.favoriteFlag", !o));
                      }
                    })
                    .catch(function () {});
              },
              jumpToInput: function (e) {
                var t = this;
                return (0, h.Z)(
                  (0, u.Z)().mark(function o() {
                    var i, a;
                    return (0, u.Z)().wrap(
                      function (o) {
                        for (;;)
                          switch ((o.prev = o.next)) {
                            case 0:
                              if (
                                ((o.prev = 0),
                                null === (i = e.canReceiveCouponItem) ||
                                  void 0 === i ||
                                  !i.promotionKey)
                              ) {
                                o.next = 8;
                                break;
                              }
                              return (
                                (o.next = 4),
                                t.receiveCouponWithPromotionKey(
                                  e.canReceiveCouponItem.promotionKey
                                )
                              );
                            case 4:
                              return (
                                1 ===
                                  (null == (a = o.sent)
                                    ? void 0
                                    : a.resultCode) && t.refreshHotelData(),
                                t.goToBook(e, a),
                                o.abrupt("return")
                              );
                            case 8:
                              t.goToBook(e), (o.next = 14);
                              break;
                            case 11:
                              (o.prev = 11),
                                (o.t0 = o.catch(0)),
                                console.error("jumpToInput error", o.t0);
                            case 14:
                            case "end":
                              return o.stop();
                          }
                      },
                      o,
                      null,
                      [[0, 11]]
                    );
                  })
                )();
              },
              goToBook: function (e, t) {
                var o, i, a, n;
                e.couponTag
                  ? (e.showPrice =
                      null == e || null === (a = e.priceInfo) || void 0 === a
                        ? void 0
                        : a.couponSalePrice)
                  : (e.showPrice =
                      null == e || null === (n = e.priceInfo) || void 0 === n
                        ? void 0
                        : n.salePrice);
                var l = {
                  room: e,
                  detail: this.data.hotelDetail,
                  hotel: this.data.hotel,
                  query: (0, g.Z)(
                    (0, g.Z)({}, this.data.query),
                    {},
                    {
                      roomNumber:
                        null != e && e.isNoRoomNumber
                          ? 1
                          : null === (o = this.data.query) || void 0 === o
                          ? void 0
                          : o.roomNumber,
                    }
                  ),
                  name:
                    this.data.hotel.name ||
                    this.data.hotel.hotelName ||
                    this.data.hotelDetail.name,
                  traceData: e.hourRoomFlag
                    ? this.data.hourRoomTraceData
                    : this.data.traceData,
                  queryTimeMillis: this.data.queryTimeMillis,
                  hotelIndex: this.data.hotelIndex,
                };
                t && (l.couponCode = null == t ? void 0 : t.resultCode),
                  null !== (i = this.data.couponTimerInfo) &&
                    void 0 !== i &&
                    i.endTime &&
                    (l.deterrentEndtime = this.data.couponTimerInfo.endTime),
                  this.navigateTo({
                    url: "/pages/hotel/booking/booking",
                    data: l,
                  });
              },
              receiveCouponWithPromotionKey: function (e) {
                var t = this;
                return (0, h.Z)(
                  (0, u.Z)().mark(function o() {
                    var i;
                    return (0, u.Z)().wrap(
                      function (o) {
                        for (;;)
                          switch ((o.prev = o.next)) {
                            case 0:
                              return (
                                (o.prev = 0),
                                (o.next = 3),
                                (0, Q._6)({
                                  data: {
                                    clientVersion: D.Z.clientVersion,
                                    promotionKey: e,
                                    hotelId: t.data.hotel.hotelId,
                                  },
                                })
                              );
                            case 3:
                              return (
                                1 !== (i = o.sent).resultCode &&
                                  y().showToast({
                                    title: "领取失败，请稍后再试~",
                                    icon: "none",
                                  }),
                                o.abrupt("return", i)
                              );
                            case 8:
                              (o.prev = 8),
                                (o.t0 = o.catch(0)),
                                y().showToast({
                                  title: "请稍候重试",
                                  icon: "none",
                                });
                            case 11:
                            case "end":
                              return o.stop();
                          }
                      },
                      o,
                      null,
                      [[0, 8]]
                    );
                  })
                )();
              },
              skipSenicItem: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                console.log("skip senic item:", e);
                var t = encodeURIComponent(
                    JSON.stringify({
                      commentCount: e.commentCount,
                      commentGrade: e.commentGrade,
                      iD: e.iD,
                      name: e.name,
                      pmRecommand: e.pmRecommand,
                      star: e.star,
                    })
                  ),
                  o = "/pages/ticket/packageA/detail/detail?scenicSpotId="
                    .concat(e.iD, "&scenicInfo=")
                    .concat(t, "&source=wechat");
                this.navigateTo({ url: o });
              },
              skipSenicList: function () {
                var e = this.data.scenicCityInfo,
                  t = e.cityId,
                  o = e.cityName,
                  i = "/pages/ticket/packageA/list/list?cityID="
                    .concat(t, "&cityName=")
                    .concat(o, "&source=wechat");
                this.navigateTo({ url: i });
              },
              onShareAppMessage: function () {
                var e = this.data,
                  t = e.hotel,
                  o = e.showHotelImageList,
                  i = e.date,
                  a = e.positionRemarkType,
                  n = e.query,
                  l = e.posrem,
                  c = o[0],
                  r = c.chatImageUrl || c.thumImageUrl || c.imageUrl,
                  s = t.name || t.hotelName,
                  d = {
                    hotelSearch: { date: i },
                    hotel: t,
                    query: (0, g.Z)(
                      (0, g.Z)({}, n),
                      {},
                      {
                        fromPage: "wechat_hotelDetailShare|" + this.pageId,
                        source: "wechat_hotelDetailShare|" + this.pageId,
                      }
                    ),
                    positionRemarkType: a,
                    posrem: l,
                    subBusinessType: 0,
                  };
                d.clientVersion = D.Z.clientVersion;
                var m =
                  "/pages/hotel/detail/detail?data=" +
                  encodeURIComponent(JSON.stringify(d));
                return {
                  bu: "train",
                  title: "".concat(s),
                  desc: "".concat(s),
                  path: m,
                  imageUrl: r,
                };
              },
              gotoInputFromRoomDetail: function () {
                var e = this;
                if (!(0, B.Qr)(e.data.hotelDetail)) {
                  var t = e.data.showedRoom;
                  e.data.isLogin
                    ? e.jumpToInput(t)
                    : V.ZP.doLogin().then(function () {
                        e.checkLogin()
                          ? e
                              .getTyHotelRoomPrice()
                              .then(function () {
                                e.jumpToInput(t);
                              })
                              .catch(function (e) {
                                console.log(e);
                              })
                          : e.doLogin(function () {
                              e.jumpToInput(t);
                            });
                      }),
                    e.closeRoomIntroduce();
                }
              },
              openRoomIntroduce: function (e) {
                var t,
                  o = this,
                  i = e.groupIndex,
                  a = e.childIndex,
                  n = e.roomtype,
                  l = e.tabIndex,
                  c = void 0 === l ? 0 : l,
                  r = e.isHourRoom,
                  d = e.showNoRoomNumber,
                  m = {};
                m =
                  "lowest" === n
                    ? r
                      ? this.data.hourRoomData.lowestPriceRoom
                      : this.data.lowestPriceRoom
                    : -1 == a
                    ? r
                      ? this.data.hourRoomData.hotelRoomList[i].parentRoom
                      : d
                      ? this.data.noFilterSelectRoomList[i].parentRoom
                      : this.data.hotelRoomList[i].parentRoom
                    : r
                    ? this.data.hourRoomData.hotelRoomList[i].childList[a]
                    : d
                    ? this.data.noFilterSelectRoomList[i].childList[a]
                    : this.data.hotelRoomList[i].childList[a];
                var u = "",
                  h = "",
                  p = "";
                if (
                  (m.roomBasicList &&
                    (m.roomBasicList.forEach(function (e) {
                      10 == e.type
                        ? (h = e.itemValue)
                        : 13 == e.type && (p = e.itemValue);
                    }),
                    (0, B.Q6)(h) || (0, B.Q6)(p)
                      ? (0, B.Q6)(h)
                        ? (0, B.Q6)(p) || (u = p)
                        : (u = h)
                      : (u = h + "\n" + p)),
                  null !== (t = m.roomTagList) && void 0 !== t && t.length)
                ) {
                  var g,
                    f = (0, s.Z)(m.roomTagList);
                  try {
                    for (f.s(); !(g = f.n()).done; ) {
                      var w = g.value;
                      if (10402 === w.itemId && w.description)
                        m.cancellationPolicy = {
                          title: "免费取消",
                          description: w.description,
                        };
                      else if (10502 === w.itemId) {
                        var v;
                        (m.cancellationPolicy = { title: "限时取消" }),
                          null !== (v = m.cancelLadderList) &&
                          void 0 !== v &&
                          v.length
                            ? (m.cancellationPolicy.tableList =
                                m.cancelLadderList)
                            : w.description &&
                              (m.cancellationPolicy.description =
                                w.description);
                      } else if (10602 === w.itemId && w.description)
                        m.cancellationPolicy = {
                          title: "不可取消",
                          description: w.description,
                        };
                      else if (10702 === w.itemId) {
                        var N;
                        (m.cancellationPolicy = {
                          title: "30分钟内可免费取消",
                        }),
                          null !== (N = m.cancelLadderList) &&
                          void 0 !== N &&
                          N.length
                            ? (m.cancellationPolicy.tableList =
                                m.cancelLadderList)
                            : w.description &&
                              (m.cancellationPolicy.description =
                                w.description);
                      } else
                        10020 === w.itemId &&
                          (m.confirmPolicy = {
                            title: "立即确认",
                            description: w.description,
                          });
                    }
                  } catch (e) {
                    f.e(e);
                  } finally {
                    f.f();
                  }
                }
                (m.recommendWord = this.data.hotelDetail.recommendWord),
                  this.ubtTrace(208558, { bizKey: "hotel_detail_room_click" }),
                  this.setData({
                    showRoomModal: !0,
                    showedRoom: m,
                    specialRequest: u,
                    suiteDetailPopupIndex: c,
                  }),
                  y().nextTick(function () {
                    o.setData({ transition: !0 });
                  });
              },
              closeRoomIntroduce: function () {
                this.setData({ transition: !1, showedRoom: {} });
              },
              catchMove: function () {},
              gotoFacilityDetail: function () {
                var e = this,
                  t = this.data,
                  o = t.hotel,
                  i = t.date,
                  a = t.hotelDetail,
                  n = t.query,
                  l = t.lastBookTimeStr;
                if (null != o && o.hotelId && i) {
                  var c = a.cityId,
                    r = a.cName,
                    s = a.geoList,
                    d =
                      null == s
                        ? void 0
                        : s.find(function (e) {
                            return 3 == e.type;
                          }),
                    m = {
                      checkInDate: i.checkInDate,
                      checkOutDate: i.checkOutDate,
                      hotelId: o.hotelId,
                      cityId: c,
                      cityName: r,
                      fromPage: n.fromPage || "applets_hotel_detail",
                      hotelPoint: { lng: d.lon, lat: d.lat },
                      lastBookTimeStr: l,
                    };
                  this.ubtTrace(208558, {
                    bizKey: "hotel_detail_facility_click",
                  }),
                    this.navigateTo({
                      url: "/pages/hotel/facility/facility",
                      data: m,
                      callback: function (t) {
                        null != t && t.isRoomView && e.toRoomListView();
                      },
                    });
                }
              },
              gotoMappage: function () {
                var e = this;
                return (0, h.Z)(
                  (0, u.Z)().mark(function t() {
                    var o,
                      i,
                      a,
                      n,
                      l,
                      c,
                      r,
                      s,
                      d,
                      m,
                      h,
                      g,
                      f,
                      w,
                      v,
                      N,
                      I,
                      T,
                      Z,
                      V,
                      k,
                      x,
                      C,
                      P,
                      D,
                      R,
                      L,
                      S,
                      X,
                      F,
                      H,
                      M,
                      A;
                    return (0, u.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (e.ubtTrace(208558, {
                                bizKey: "hotel_detail_map_click",
                              }),
                              (i = e.data),
                              (a = i.date),
                              (n = i.geoList),
                              (l = i.hotelDetail),
                              (c = i.posrem),
                              (r = i.positionRemarkType),
                              (s = i.query),
                              (d = l.name),
                              (m = l.cName),
                              (h = l.address),
                              (g = l.hotelId),
                              (f = l.cityId),
                              (w = [5, 6, 7, 8]),
                              (v =
                                null == n
                                  ? void 0
                                  : n.find(function (e) {
                                      return 3 == e.type;
                                    })),
                              (N =
                                null === (o = l.geoList) || void 0 === o
                                  ? void 0
                                  : o.find(function (e) {
                                      return 3 == e.type;
                                    })),
                              (I = w.includes(r)),
                              (T = []),
                              v &&
                                I &&
                                ((V = (0, B.Pr)(v.lon, v.lat)),
                                (k = (0, p.Z)(V, 2)),
                                (x = k[0]),
                                (C = k[1]),
                                T.push({ lat: C, lng: x }),
                                (Z = !0)),
                              N &&
                                ((P = (0, B.Pr)(N.lon, N.lat)),
                                (D = (0, p.Z)(P, 2)),
                                (R = D[0]),
                                (L = D[1]),
                                T.push({ lat: L, lng: R })),
                              (S = (0, B.SO)(T)),
                              (X = (0, p.Z)(S, 2)),
                              (F = X[0]),
                              (H = X[1]),
                              (M = {
                                checkInDate: a.checkInDate,
                                checkOutDate: a.checkOutDate,
                                query: s,
                                cityId: f,
                                cityName: m,
                                hotelId: g,
                                hotelName: d,
                                hotelAddress: h,
                                posrem: c,
                                positionRemarkType: r,
                                from: Z ? F : null,
                                to: Z ? H : F,
                                fromPage: s.fromPage,
                                sameCityFlag: s.sameCityFlag,
                              }),
                              !("您" === c && Z))
                            ) {
                              t.next = 18;
                              break;
                            }
                            return (
                              (t.next = 16), (0, _.y9)("gcj02", !0).catch()
                            );
                          case 16:
                            (A = t.sent) &&
                              (M.from = { lat: A.latitude, lng: A.longitude });
                          case 18:
                            if (!b.default.isWechat) {
                              t.next = 21;
                              break;
                            }
                            return (
                              e.navigateTo({
                                url: "/pages/hotel/map/map",
                                data: M,
                              }),
                              t.abrupt("return")
                            );
                          case 21:
                            y().openLocation({
                              latitude: parseFloat(M.to.lat),
                              longitude: parseFloat(M.to.lon),
                              name: d,
                              address: h,
                            });
                          case 22:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              authUserLocation: function (e) {
                y().showModal({
                  title: "请求授权当前位置",
                  content: "需要获取您的地理位置，请确认授权",
                  success: function (t) {
                    t.confirm
                      ? y().openSetting({
                          success: (function () {
                            var t = (0, h.Z)(
                              (0, u.Z)().mark(function t(o) {
                                return (0, u.Z)().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        o.authSetting["scope.userLocation"]
                                          ? e()
                                          : y().showToast({
                                              title: "授权失败",
                                              icon: "none",
                                              duration: 1e3,
                                            });
                                      case 1:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })(),
                        })
                      : t.cancel;
                  },
                });
              },
              gotoCommentPage: function () {
                this.ubtTrace(208558, { bizKey: "hotel_detail_score_click" }),
                  this.navigateTo({
                    url: "/pages/hotel/dianping/dianping?hotelId=".concat(
                      this.data.hotel.hotelId
                    ),
                  });
              },
              gotoQAPage: function () {
                var e = this.data.hotel.hotelId;
                this.navigateTo({
                  url: "/pages/hotel/dianping/dianping?hotelId=".concat(
                    e,
                    "&type=qa"
                  ),
                });
              },
              goPhotoPage: function () {
                var e,
                  t = this.data.hotelPicInfo;
                null != t &&
                  null !== (e = t.hotelImageList) &&
                  void 0 !== e &&
                  e.length &&
                  (this.ubtTrace(208558, {
                    bizKey: "hotel_detail_photo_entry_click",
                    pageId: b.default.isTieyou ? "10650018761" : "10650018584",
                  }),
                  this.navigateTo({
                    url: "/pages/hotel/picshow/picshow",
                    data: { hotelPicInfo: t },
                  }));
              },
              getHotelCoupons: function () {
                var e = this,
                  t = this.data,
                  o = t.hotel.hotelId,
                  i = t.date,
                  a = {
                    data: {
                      hotelId: o,
                      controlBitMap: "0",
                      checkInDate: i.checkInDate,
                      checkOutDate: i.checkOutDate,
                      clientVersion: D.Z.clientVersion,
                    },
                    head: {
                      extension: [{ name: "correctVersion", value: 25 }],
                    },
                  };
                (0, Q.sR)(a)
                  .then(function (t) {
                    if (t.data && 1 === t.resultCode) {
                      var o,
                        i,
                        a,
                        n,
                        l = t.data,
                        c = l.couponsList,
                        r = void 0 === c ? [] : c,
                        s = l.promotionBrief,
                        d = void 0 === s ? {} : s,
                        m = l.promotionsList,
                        u = void 0 === m ? [] : m,
                        h = l.trainCashBackImg,
                        p = l.identityPromotions,
                        g = void 0 === p ? [] : p,
                        f = l.totalCredit,
                        w = void 0 === f ? "" : f,
                        v = l.extraExposeData,
                        y = void 0 === v ? "" : v,
                        N = r.filter(function (e) {
                          return 3 !== e.type && 2 !== e.type;
                        }),
                        I = [];
                      null !== (o = d.promotionBriefList) &&
                        void 0 !== o &&
                        o.length &&
                        I.push(d.promotionBriefList[0]),
                        null !== (i = d.couponBriefList) &&
                          void 0 !== i &&
                          i.length &&
                          (I = I.concat(
                            d.couponBriefList.map(function (e) {
                              return e.desc;
                            })
                          ));
                      var T,
                        Z = [];
                      u
                        .filter(function (e) {
                          return 3 !== e.tagType;
                        })
                        .forEach(function (e) {
                          var t = Z.find(function (t) {
                              return t.tagType === e.tagType;
                            }),
                            o = { title: e.title, describe: e.describe };
                          t
                            ? t.subList.push(o)
                            : Z.push({
                                tag: e.tag,
                                tagType: e.tagType,
                                subList: [o],
                              });
                        }),
                        null != d &&
                        null !== (a = d.priceCompensate) &&
                        void 0 !== a &&
                        null !== (n = a.detail) &&
                        void 0 !== n &&
                        n.detail
                          ? (T = "compensate")
                          : y && (T = "guarantee"),
                        e.setData({
                          identityPromotions: g,
                          couponBriefList: I,
                          hotelCouponList: N,
                          totalCredit: w,
                          promotionBrief: d,
                          trainCashBackImg: h,
                          guaranteeTab: T,
                          promotionsList: Z,
                          hadRoomInsBannerInfo: y,
                          drawerInfo: {
                            promotionsList: u,
                            hotelCouponList: N,
                            totalCredit: w,
                          },
                        });
                    }
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              gotoHotelDetail: function (e) {
                var t = {
                  query: this.data.query,
                  hotel: e,
                  geoList: this.data.geoList,
                };
                this.ubtTrace(208558, {
                  bizKey: "hotel_detail_hotelcard_click",
                  hotelId: e.hotelId,
                }),
                  this.navigateTo({
                    url: "/pages/hotel/detail/detail",
                    data: t,
                  });
              },
              onShowHotelCoupons: function () {
                var e = this.data,
                  t = e.promotionsList,
                  o = e.hotelCouponList,
                  i = e.totalCredit;
                this.setData({
                  drawerType: ze,
                  drawerInfo: {
                    promotionsList: t,
                    hotelCouponList: o,
                    totalCredit: i,
                  },
                });
              },
              onDrawerClose: function () {
                this.setData({ drawerType: null, drawerInfo: null });
              },
              onShowPriceCompensate: function () {
                var e;
                this.ubtTrace(208558, {
                  bizKey: "hotel_detail_lowprice_click",
                  is_priceInsured:
                    3 ===
                    (null === (e = this.data.promotionBrief) || void 0 === e
                      ? void 0
                      : e.tagType)
                      ? "T"
                      : "F",
                });
                var t =
                  "compensate" === this.data.guaranteeTab ? "multi" : "single";
                (0, q.b)(this.data.guaranteeTab, t);
              },
              onShowLivedPackages: function () {
                this.ubtTrace(208558, {
                  bizKey: "hotel_detail_checkingive_click",
                }),
                  this.setData({ showLivedPackages: !0 });
              },
              onCloseLivedPackages: function () {
                this.setData({ showLivedPackages: !1 });
              },
              closeSecondPopup: function () {
                this.setData({ couponSecondPopVisible: !1 });
              },
              receiveCoupon: function (e) {
                var t = this,
                  o = e.currentTarget.dataset.item,
                  i = o.promotionKey,
                  a = o.promotionName;
                if (1 === o.receiveCode) {
                  var n = {
                    data: {
                      clientVersion: D.Z.clientVersion,
                      promotionKey: i,
                      promotionName: a,
                      hotelId: this.data.hotel.hotelId,
                    },
                  };
                  (0, Q._6)(n)
                    .then(function (e) {
                      1 === e.resultCode &&
                        (y().showToast({ title: "领取成功", icon: "none" }),
                        (C.wH.tempQueryStore = {}),
                        t.getHotelCoupons());
                    })
                    .catch(function () {
                      y().showToast({ title: "请稍候重试", icon: "none" });
                    });
                }
              },
              onHandleCoupon: function (e) {
                var t = e.receiveCode;
                if (1 === t)
                  return 5 === e.type && e.jumpUrl && 1 === t
                    ? this.navigateTo({ url: e.jumpUrl })
                    : void this.setData({
                        exchangeCouponItem: e,
                        couponSecondPopVisible: !0,
                      });
              },
              receiveSpecialCoupon: function () {
                var e = this,
                  t = this.data.exchangeCouponItem,
                  o = t.promotionKey,
                  i = t.scene;
                if (1 === t.receiveCode) {
                  var a = [];
                  a.push(o);
                  var n = {
                    data: {
                      scene: i,
                      promotionKeyList: a,
                      clientVersion: D.Z.clientVersion,
                    },
                  };
                  (0, M.nG)(n)
                    .then(function (t) {
                      1 === t.resultCode
                        ? (y().showToast({ title: "领取成功", icon: "none" }),
                          (C.wH.tempQueryStore = {}),
                          e.getHotelCoupons())
                        : y().showToast({ title: "领取失败", icon: "none" });
                    })
                    .catch(function () {
                      y().showToast({ title: "请稍候重试", icon: "none" });
                    });
                }
              },
              checkLogin: function () {
                var e = !!V.ZP.isLogin || this.data.isLogin;
                return (
                  this.setData({ isLogin: e, loginBannerVisible: !e }),
                  e ||
                    this.ubtTrace(209283, { bizKey: "VX_detail_wdlhp_show" }),
                  e
                );
              },
              doLogin: function (e) {
                var t = this;
                V.ZP.doLogin()
                  .then(function () {
                    t.setData({ isLogin: !0, loginBannerVisible: !1 }),
                      t
                        .getTyHotelRoomPrice()
                        .then(function () {
                          e && e();
                        })
                        .catch(function (e) {
                          console.log(e);
                        });
                  })
                  .catch(function () {
                    y().showToast({
                      title: "取消登录",
                      icon: "none",
                      duration: 1500,
                    });
                  });
              },
              openImageBox: function (e) {
                var t = e.currentTarget.dataset.piclist || [],
                  o = e.currentTarget.dataset.index || 0,
                  i = [];
                t.forEach(function (e) {
                  var t = {};
                  (t.imageUrl = e.imageUrl),
                    (t.title = e.imageTitle),
                    i.push(t);
                }),
                  this.navigateTo({
                    url: "/pages/hotel/imagebox/imagebox",
                    data: { images: i, index: o },
                  });
              },
              goRankList: function (e) {
                Z.Z.twebview({ data: { url: e } });
              },
              getHotelComment: function () {
                var e = this,
                  t = {
                    data: {
                      hotelId: this.data.hotel.hotelId,
                      pageIndex: 1,
                      pageSize: 10,
                      sortBy: 2,
                      orderBy: 1,
                      getTypeBitMap: 54,
                      operationType: 0,
                      controlBitMap: 14,
                      filterSettingList: [],
                      clientVersion: D.Z.clientVersion,
                    },
                  };
                (0, Q.k2)(t).then(function (t) {
                  if (1 === t.resultCode) {
                    var o,
                      i,
                      a = t.data,
                      n = a.groupList,
                      l = a.hotelCommentDynamicInfo,
                      c = a.hotelCommentStaticInfo,
                      r =
                        (null == n ? void 0 : n.length) > 0 &&
                        null !== (o = n[0]) &&
                        void 0 !== o &&
                        null !== (i = o.commentDetailList) &&
                        void 0 !== i &&
                        i.length
                          ? n[0].commentDetailList[0]
                          : {},
                      s = !1;
                    if (r && Object.keys(r).length > 0) {
                      s = !0;
                      var d = r.imageList.filter(function (e) {
                          return 1 === e.imageType;
                        }),
                        m = r.imageList.filter(function (e) {
                          return 2 === e.imageType;
                        });
                      (r.imageList = d),
                        (r.bigImageList = m),
                        (r.createDate = z()(r.createDate.split(".")[0]).format(
                          "YYYY-MM-DD"
                        ));
                    }
                    e.setData({
                      shortComment: r,
                      shortCommentVisible: s,
                      hotelCommentDynamicInfo: l,
                      hotelCommentStaticInfo: c,
                    });
                  }
                });
              },
              getHotelFacilityDetail: function () {
                var e = this,
                  t = {
                    data: {
                      hotelId: this.data.hotel.hotelId,
                      checkInDate: this.data.date.checkInDate,
                      checkOutDate: this.data.date.checkOutDate,
                      pageSource: 1,
                      clientVersion: D.Z.clientVersion,
                    },
                  };
                (0, Q.BK)(t).then(function (t) {
                  if (1 === t.resultCode) {
                    var o = t.data.hotelPolicyList;
                    e.setData({ hotelPolicyList: o.slice(0, 2) });
                  }
                });
              },
              getAskReplyList: function () {
                var e = this,
                  t = {
                    data: {
                      clientVersion: D.Z.clientVersion,
                      pageIndex: 0,
                      pageSize: 2,
                      hotelId: this.data.hotel.hotelId,
                    },
                  };
                (0, Q.Zu)(t)
                  .then(function (t) {
                    if (1 === t.resultCode) {
                      var o = t.data,
                        i = o.totalCount,
                        a = o.tyHotelAskReplyList;
                      e.setData({ totalCount: i, askReplyList: a });
                    }
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              },
              goBack: function () {
                var e = y().getCurrentPages();
                if (
                  this.data.query &&
                  this.data.query.source &&
                  "20210415-ztrip-hotel-friday-landpage" ===
                    this.data.query.source
                ) {
                  var t = this.data,
                    o = t.query,
                    i = t.date;
                  this.redirectTo({
                    url: "/pages/hotel/list/list",
                    data: {
                      queryModel: {
                        cityId: o.cityId,
                        cityName: o.cityName,
                        checkInDate: i.checkInDate,
                        checkOutDate: i.checkOutDate,
                      },
                    },
                  });
                } else if (e.length <= 1) k.Z.relaunchHome("hotel");
                else {
                  var a = this.data,
                    n = a.filterStudent,
                    l = !1;
                  a.filterStudentFromList && !n && (l = !0),
                    this.navigateBack({ needResetList: l });
                }
              },
              showHotelPriceDetailModal: function (e) {
                this.ubtTrace(208558, {
                  bizKey: "hotel_detail_pricedetail_click",
                }),
                  this.setData({
                    hotelPriceDetailModalVisible: !0,
                    hotelPriceDetailModalInfo: {
                      room: e,
                      priceInfo: null == e ? void 0 : e.priceInfo,
                      price: e.priceInfo.discountPrice || e.priceInfo.salePrice,
                      totalPrice:
                        e.priceInfo.couponSalePrice || e.priceInfo.salePrice,
                      discountList: e.promotionDetailList,
                      maskInfo: e.maskTag,
                      hotelTypeName:
                        (null != e && e.baseName) ||
                        (null != e && e.ratePlanName)
                          ? (null == e ? void 0 : e.baseName) +
                            (null == e ? void 0 : e.ratePlanName)
                          : "",
                    },
                  });
              },
              onCloseHotelPriceDetailModal: function () {
                this.setData({ hotelPriceDetailModalVisible: !1 });
              },
              onComfirmHotelPriceDetailModal: function (e) {
                var t = e.room;
                this.jumpToInput(t), this.onCloseHotelPriceDetailModal();
              },
              getPageElementsQuery: function () {
                var e = this;
                return (0, h.Z)(
                  (0, u.Z)().mark(function t() {
                    var o, i, a, n, l, c, r, s;
                    return (0, u.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.isGettingQuery = !0),
                              (t.next = 3),
                              Promise.all([
                                e.getElementClientRect(".date-box .hotel-date"),
                                e.getElementClientRect(
                                  ".hotel-detail-module.evaluation"
                                ),
                                e.getElementClientRect(".pictures-show-wrap"),
                                e.getElementClientRect(
                                  ".hotel-detail-module.facility"
                                ),
                                e.getElementClientRect(
                                  ".hotel-detail-module.recommend"
                                ),
                              ])
                            );
                          case 3:
                            (o = t.sent),
                              (i = (0, p.Z)(o, 5)),
                              (a = i[0]),
                              (n = i[1]),
                              (l = i[2]),
                              (c = i[3]),
                              (r = i[4]),
                              (s = {}),
                              null != a &&
                                a.top &&
                                (s.hotelDate = {
                                  top: a.top - 10,
                                  height: a.height,
                                }),
                              null != n &&
                                n.top &&
                                (s.evaluation = {
                                  top: n.top,
                                  height: n.height,
                                }),
                              null != l &&
                                l.top &&
                                (s.pictureShow = {
                                  top: l.top,
                                  height: l.height,
                                }),
                              null != c &&
                                c.top &&
                                (s.facility = { top: c.top, height: c.height }),
                              null != r &&
                                r.top &&
                                (s.recommend = {
                                  top: r.top,
                                  height: r.height,
                                }),
                              e.setData({ elementsQuery: s }, function () {
                                e.isGettingQuery = !1;
                              });
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              getElementClientRect: function (e) {
                return new Promise(function (t) {
                  y()
                    .createSelectorQuery()
                    .select(e)
                    .boundingClientRect(t)
                    .exec();
                });
              },
              toRoomListView: function () {
                y().pageScrollTo({
                  offsetTop: -130,
                  selector: "#hotelDate",
                  duration: 300,
                });
              },
              toRoomListFilter: function () {
                y().pageScrollTo({
                  offsetTop: -150,
                  selector: "#hotelDate",
                  duration: 300,
                });
              },
              onTopNavigateTo: function (e, t) {
                var o,
                  i = this,
                  a = this.data.elementsQuery,
                  n = void 0 === a ? {} : a,
                  l = t.selector;
                if (Array.isArray(l)) {
                  var c,
                    r = (0, p.Z)(t.selector, 2),
                    s = r[0],
                    d = r[1];
                  l = null !== (c = n[s]) && void 0 !== c && c.top ? s : d;
                }
                n[l] &&
                  ((this.isScrolling = !0),
                  (this.NavigatingTop =
                    (null === (o = n[l]) || void 0 === o ? void 0 : o.top) ||
                    0),
                  this.setData({ navView: l }),
                  this.clickedTimeout && clearTimeout(this.clickedTimeout),
                  y().pageScrollTo({
                    offsetTop: -130,
                    selector: "#".concat(l),
                    duration: 200,
                    complete: function () {
                      i.clickedTimeout = setTimeout(
                        function () {
                          i.isScrolling = !1;
                        },
                        "ios" === b.default.os ? 10 : 300
                      );
                    },
                  }));
              },
              onPageScroll: function (e) {
                var t;
                if (
                  !(
                    (null !== (t = this.data.elementsQuery) &&
                      void 0 !== t &&
                      t.hotelDate) ||
                    this.isGettingQuery
                  )
                )
                  return this.getPageElementsQuery();
                var o = new Date().getTime();
                if (
                  (this._lastScrollTopTime || (this._lastScrollTopTime = o),
                  !(o - this._lastScrollTopTime < 100 || this.isScrolling))
                ) {
                  var i = this.data,
                    a = i.topVisible,
                    n = i.topWrapperVisible,
                    l = i.lookRoomVisible,
                    c = i.elementsQuery,
                    r = i.navView,
                    s = c.hotelDate,
                    d = c.evaluation,
                    m = c.pictureShow,
                    u = c.facility,
                    h = c.recommend,
                    p =
                      (null == m ? void 0 : m.top) ||
                      (null == u ? void 0 : u.top),
                    g = (this.NavigatingTop || e.scrollTop) + 300,
                    f = {};
                  switch (!0) {
                    case e.scrollTop < 100:
                      a && (f.topVisible = !1),
                        n && (f.topWrapperVisible = !1),
                        l && (f.lookRoomVisible = !1);
                      break;
                    case e.scrollTop >= 100 &&
                      e.scrollTop < (null == s ? void 0 : s.top):
                      a || (f.topVisible = !0);
                      break;
                    case e.scrollTop >= (null == s ? void 0 : s.top) &&
                      g < ((null == d ? void 0 : d.top) || p):
                      a || (f.topVisible = !0),
                        n || (f.topWrapperVisible = !0),
                        r !== Be && (f.navView = Be);
                      break;
                    case g >= ((null == d ? void 0 : d.top) || p) && g < p:
                      l || (f.lookRoomVisible = !0),
                        r !== Se && (f.navView = Se);
                    case g >= p && g < (null == h ? void 0 : h.top):
                      m &&
                        g >= m.top &&
                        (r !== Xe && (f.navView = Xe),
                        this.ubtTrace(208557, {
                          bizKey: "hotel_detail_attraction_show",
                          pageId: b.default.isTieyou
                            ? "10650018761"
                            : "10650018584",
                        })),
                        g >= (null == u ? void 0 : u.top) &&
                          r !== Fe &&
                          (f.navView = Fe);
                      break;
                    case g >= (null == h ? void 0 : h.top):
                      r !== _e && (f.navView = _e);
                  }
                  this.NavigatingTop && (this.NavigatingTop = 0),
                    Object.keys(f).length &&
                      ((this._lastScrollTopTime = o), this.setData(f));
                }
              },
              onCloseModal: function (e, t, o) {
                var i = this,
                  a = this.data.modals,
                  n = a.find(function (t) {
                    return t.type === e;
                  }),
                  l = a.filter(function (t) {
                    return t.type !== e;
                  });
                if (n) {
                  n.visible = !1;
                  var c = { modals: [].concat((0, m.Z)(l), [n]) };
                  t && (c.couponTimerInfo = null),
                    this.setData(c, function () {
                      o && i.refreshHotelData();
                    });
                }
              },
              onShowModal: function (e) {
                var t = this.data.modals,
                  o = t.find(function (t) {
                    return t.type === e;
                  }),
                  i = t.filter(function (t) {
                    return t.type !== e;
                  });
                o &&
                  ((o.visible = !0),
                  this.setData({ modals: [].concat((0, m.Z)(i), [o]) }));
              },
              toggleVideoMute: function () {
                this.setData({ isMuted: !this.data.isMuted });
              },
              getTyHotelUserInfo: function () {
                var e = this;
                return (0, h.Z)(
                  (0, u.Z)().mark(function t() {
                    var o, i;
                    return (0, u.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (o = {
                                  data: { clientVersion: D.Z.clientVersion },
                                }),
                                (t.next = 4),
                                (0, M.aU)(o)
                              );
                            case 4:
                              1 ===
                                (null == (i = t.sent)
                                  ? void 0
                                  : i.resultCode) &&
                                i.data &&
                                e.setData({ userVipInfo: i.data.userVipInfo }),
                                (t.next = 11);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(0)),
                                console.log("getTyHotelUserInfo error", t.t0);
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 8]]
                    );
                  })
                )();
              },
              onChangeShowRoomSelect: function (e) {
                this.ubtTrace(243353, { PageId: this.state.pageId }),
                  this.setState({ isShowRoomCountSelect: e });
              },
              onChangeRoomCount: function (e) {
                var t = this,
                  o = this.data,
                  i = o.roomNumber,
                  a = o.query;
                if (e === i) this.onChangeShowRoomSelect(!1);
                else {
                  var n = Object.assign({}, a, { roomNumber: e });
                  this.setState(
                    {
                      roomNumber: e,
                      isShowRoomCountSelect: !1,
                      query: n,
                      loadRoomPriceState: 4,
                    },
                    function () {
                      t.refreshHotelData();
                    }
                  );
                }
              },
              onChangeSelectManyNight: function (e) {
                P.v$.set(e), this.setState({ isSelectManyNight: e });
              },
            },
            Pt =
              (0, U.h)()(
                (i =
                  T()(Ct)(
                    (i = (function (e) {
                      (0, c.Z)(o, e);
                      var t = (0, r.Z)(o);
                      function o() {
                        return (0, n.Z)(this, o), t.apply(this, arguments);
                      }
                      return (
                        (0, l.Z)(o, [
                          {
                            key: "render",
                            value: function () {
                              var e,
                                t,
                                o = this,
                                i = this.data,
                                a = i.topVisible,
                                n = i.statusBarHeight,
                                l = i.hotelDetail,
                                c = i.commentDetail,
                                r = i.childPolicyInfo,
                                s = i.hotelFilterListV2,
                                d = i.showHotelImageList,
                                m = i.hotelCommentDynamicInfo,
                                u = void 0 === m ? {} : m,
                                h = i.hotelCommentStaticInfo,
                                p = void 0 === h ? {} : h,
                                g = i.loadRoomPriceState,
                                f = i.hotelRoomList,
                                v = i.lowestPriceRoom,
                                y = i.isLogin,
                                I = i.hotelRoomPriceObj,
                                T = i.lowestPriceRoomVisible,
                                Z = i.shortComment,
                                V = void 0 === Z ? {} : Z,
                                k = i.shortCommentVisible,
                                x = i.totalCount,
                                C = i.askReplyList,
                                P = i.hotelPolicyList,
                                D = i.recommendHotelList,
                                R = i.exchangeCouponItem,
                                L = i.couponSecondPopVisible,
                                S = i.transition,
                                _ = i.showedRoom,
                                M = i.specialRequest,
                                O = i.hotelPriceDetailModalVisible,
                                z = i.hotelPriceDetailModalInfo,
                                q = i.isAlipay,
                                U = i.trafficRailway,
                                j = i.trafficAirport,
                                Q = i.scenicSpot,
                                J = i.scenicCityInfo,
                                $ = i.lookRoomVisible,
                                ee = i.lastBookTimeStr,
                                te = i.showHourRooms,
                                oe = i.isHourRoom,
                                ie = i.hourRoomData,
                                ae = i.showLivedPackages,
                                ne = i.livedPackages,
                                le = i.identityPromotions,
                                ce = i.couponBriefList,
                                re = i.loginBannerVisible,
                                se = i.navView,
                                de = i.topWrapperVisible,
                                me = i.elementsQuery,
                                ue = i.hotelBasicInfoList,
                                he = i.hotelRankInfo,
                                pe = i.modals,
                                ge = i.couponTimerInfo,
                                fe = i.drawerInfo,
                                we = i.drawerType,
                                ve = i.rate,
                                ye = i.screenWidth,
                                Ne = i.positionRemarkType,
                                Ie = i.trainCashBackImg,
                                Te = i.guaranteeTab,
                                Ze = i.covidMonitoringPoint,
                                Ve = i.date,
                                ke = i.isMuted,
                                be = i.showVoiceCtrl,
                                xe = i.userVipInfo,
                                Pe = i.isScanCodeUser,
                                Be = i.isShowRoomCountSelect,
                                Se = i.roomNumber,
                                Xe = i.noFilterSelectRoomList,
                                Fe = i.lowestPriceNoFilterVisible,
                                _e = i.isSelectManyNight,
                                He = I.hotelClosedInfo,
                                Me = I.memberInfo,
                                Ae = we === Ee || ae,
                                Oe = "wrap".concat((0, B.gP)(Ae, " o-hidden")),
                                ze =
                                  null == ie ||
                                  null === (e = ie.hotelRoomList) ||
                                  void 0 === e
                                    ? void 0
                                    : e.filter(function (e) {
                                        return ![2, 4].includes(
                                          e.parentRoom.status
                                        );
                                      }),
                                qe = (null == ze ? void 0 : ze.length) > 0,
                                Ue =
                                  "compensate" === Te
                                    ? xt.compensate
                                    : xt.guarantee,
                                Ke =
                                  ((null == le ? void 0 : le.length) > 0 ||
                                    (null == ce ? void 0 : ce.length) > 0 ||
                                    Ie) &&
                                  [2, 4].includes(g);
                              return (0, X.BX)(w.View, {
                                className: "detail-page ".concat(
                                  b.default.zxTyStr
                                ),
                                children: [
                                  (0, X.BX)(w.View, {
                                    className: "top ".concat(b.default.zxTyStr),
                                    children: [
                                      !q &&
                                        (0, X.tZ)(dt, {
                                          showVoiceCtrl: be,
                                          statusBarHeight: n,
                                          isMuted: ke,
                                          toggleVideoMute: this.toggleVideoMute,
                                          topVisible: a,
                                          name: null == l ? void 0 : l.name,
                                          favoriteFlag:
                                            null == l ? void 0 : l.favoriteFlag,
                                          goBack: this.goBack,
                                          onClickFavorite: this.onClickFavorite,
                                        }),
                                      de &&
                                        (0, X.tZ)(K, {
                                          elementsQuery: me,
                                          navView: se,
                                          rate: ve,
                                          statusBarHeight: n,
                                          onTopNavigateTo: this.onTopNavigateTo,
                                        }),
                                    ],
                                  }),
                                  (null == d ? void 0 : d.length) > 0 &&
                                    (0, X.tZ)(je, {
                                      isMuted: ke,
                                      list: d,
                                      loaded: !!l.name,
                                      hotelRankInfo: he,
                                      pageId: this.pageId,
                                      goPhotoPage: this.goPhotoPage,
                                      goRankList: this.goRankList,
                                    }),
                                  (0, X.BX)(w.View, {
                                    className: Oe,
                                    children: [
                                      (0, X.BX)(w.View, {
                                        className: "hotel-intro",
                                        style: (0, B.LP)(!l.name),
                                        children: [
                                          (0, X.BX)(w.View, {
                                            className: "skeleton-top-hd",
                                            children: [
                                              (0, X.tZ)(w.View, {
                                                className: "tit",
                                              }),
                                              (0, X.tZ)(w.View, {
                                                className: "desc",
                                              }),
                                            ],
                                          }),
                                          (0, X.tZ)(w.View, {
                                            className: "skeleton-top-evalt",
                                            children: (0, X.tZ)(w.View, {
                                              className: "item",
                                            }),
                                          }),
                                          (0, X.tZ)(w.View, {
                                            className: "skeleton-top-map",
                                            children: (0, X.tZ)(w.View, {
                                              className: "item",
                                            }),
                                          }),
                                          (0, X.tZ)(w.View, {
                                            className: "skeleton-top-coupon",
                                          }),
                                        ],
                                      }),
                                      (0, X.tZ)(w.View, {
                                        children:
                                          l.name &&
                                          (0, X.tZ)(rt, {
                                            pageId: this.pageId,
                                            hotelDetail: l,
                                            isScanCodeUser: Pe,
                                            commentDetail: c,
                                            positionRemarkType: Ne,
                                            gotoFacilityDetail:
                                              this.gotoFacilityDetail,
                                            gotoCommentPage:
                                              this.gotoCommentPage,
                                            gotoMappage: this.gotoMappage,
                                          }),
                                      }),
                                      !Pe &&
                                        (0, X.BX)(w.View, {
                                          children: [
                                            Te &&
                                              (0, X.tZ)(X.HY, {
                                                children: (0, X.tZ)(w.View, {
                                                  className:
                                                    "compensate-banner",
                                                  id: "AXDN",
                                                  onClick:
                                                    this.onShowPriceCompensate,
                                                  children: (0, X.tZ)(w.Image, {
                                                    className: "banner",
                                                    mode: "widthFix",
                                                    src: Ue,
                                                  }),
                                                }),
                                              }),
                                            (0, X.tZ)(w.View, {
                                              className: "bottom-line",
                                              id: "hotelDate",
                                            }),
                                          ],
                                        }),
                                      (0, X.tZ)(w.View, {
                                        children:
                                          ne.detailNameStr &&
                                          !Pe &&
                                          (0, X.BX)(X.HY, {
                                            children: [
                                              (0, X.BX)(w.View, {
                                                className:
                                                  "consume-packages-banner",
                                                id: "AXDO",
                                                onClick:
                                                  this.onShowLivedPackages,
                                                children: [
                                                  (0, X.BX)(w.View, {
                                                    className: "icon-wrap",
                                                    children: [
                                                      (0, X.tZ)(w.Image, {
                                                        src: xt.consumePackage,
                                                        className: "icon",
                                                        mode: "widthFix",
                                                      }),
                                                      (0, X.tZ)(w.View, {
                                                        className: "detail-str",
                                                        children:
                                                          ne.detailNameStr,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, X.BX)(w.View, {
                                                    className: "fac-arr",
                                                    children: [
                                                      (0, X.tZ)(w.Text, {
                                                        className:
                                                          "color-primary",
                                                        children: "详情",
                                                      }),
                                                      (0, X.tZ)(w.Text, {
                                                        className:
                                                          "ifont-arr iconfont color-primary",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, X.tZ)(w.View, {
                                                className: "bottom-line",
                                              }),
                                              (0, X.tZ)(Re.Z, {
                                                list: ne,
                                                show: ae,
                                                onClose:
                                                  this.onCloseLivedPackages,
                                              }),
                                            ],
                                          }),
                                      }),
                                      (0, X.BX)(w.View, {
                                        className: "date-box",
                                        children: [
                                          (0, X.tZ)(mt, {
                                            showPromotionBrief: Ke,
                                            trainCashBackImg: Ie,
                                            identityPromotions: le,
                                            couponBriefList: ce,
                                            onShowHotelCoupons:
                                              this.onShowHotelCoupons,
                                          }),
                                          (0, X.tZ)(F, {
                                            date: Ve,
                                            roomNumber: Se,
                                            onHandleDateClick:
                                              this.onDateChosen,
                                            showRoomCountPop: function () {
                                              o.onChangeShowRoomSelect(!0);
                                            },
                                            loading: Boolean(
                                              !(null != l && l.name)
                                            ),
                                          }),
                                          (0, X.tZ)(pt, {
                                            loadingState: g,
                                            list: s,
                                            isSelectManyNight: _e,
                                            totalDays:
                                              null == Ve
                                                ? void 0
                                                : Ve.totalDays,
                                            onItemClick: this.selectTagV2,
                                            onChangeSelectManyNight:
                                              this.onChangeSelectManyNight,
                                          }),
                                        ],
                                      }),
                                      (0, X.tZ)(w.View, {
                                        className: "hotel-skeleton-list",
                                        style: (0, B.LP)(
                                          (!f[0] && 1 === g) || 4 === g
                                        ),
                                        children: [0, 1, 2, 3, 4, 5, 6].map(
                                          function (e, t) {
                                            return (0, X.BX)(
                                              w.View,
                                              {
                                                className:
                                                  "hotel-item-wrap skeleton-list-item",
                                                children: [
                                                  (0, X.tZ)(w.View, {
                                                    className: "left",
                                                    children: (0, X.tZ)(
                                                      w.View,
                                                      { className: "image" }
                                                    ),
                                                  }),
                                                  (0, X.BX)(w.View, {
                                                    className: "mid",
                                                    children: [
                                                      (0, X.tZ)(w.View, {
                                                        className: "title",
                                                      }),
                                                      (0, X.tZ)(w.View, {
                                                        className: "desc",
                                                      }),
                                                      (0, X.tZ)(w.View, {
                                                        className: "desc2",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, X.tZ)(w.View, {
                                                    className: "right",
                                                    children: (0, X.tZ)(
                                                      w.View,
                                                      { className: "price" }
                                                    ),
                                                  }),
                                                ],
                                              },
                                              t
                                            );
                                          }
                                        ),
                                      }),
                                      (0, X.BX)(w.View, {
                                        children: [
                                          He && (0, X.tZ)(bt, { data: He }),
                                          !He &&
                                            (0, X.BX)(w.View, {
                                              className: "hotel-rooms-wrap",
                                              children: [
                                                (0, X.tZ)(Ce, {
                                                  hotelDetail: l,
                                                  isLogin: y,
                                                  isHourRoom: oe,
                                                  hasHourRooms: qe,
                                                  lowestPriceRoomVisible: T,
                                                  lowestPriceRoom: v,
                                                  hotelRoomList: f,
                                                  hotelRoomPriceObj: I,
                                                  screenWidth: ye,
                                                  modelType: "normal",
                                                  openRoomIntroduce:
                                                    this.openRoomIntroduce,
                                                  noop: this.noop,
                                                  showPriceModal:
                                                    this
                                                      .showHotelPriceDetailModal,
                                                  goToInput: this.goToInput,
                                                  goToBooking:
                                                    this
                                                      .gotoInputFromRoomDetail,
                                                  expandRoom: this.expandRoom,
                                                  roomNumber: Se,
                                                  totalDays:
                                                    null == Ve
                                                      ? void 0
                                                      : Ve.totalDays,
                                                  isSelectManyNight: _e,
                                                }),
                                                (0, X.tZ)(Ce, {
                                                  hotelDetail: l,
                                                  isLogin: y,
                                                  isHourRoom: oe,
                                                  showNoFilter:
                                                    (null == Xe
                                                      ? void 0
                                                      : Xe.length) > 0 || Fe,
                                                  hotelFilterListV2:
                                                    s.filter(function (e) {
                                                      return e.isSelected;
                                                    }) || [],
                                                  hasHourRooms: qe,
                                                  lowestPriceRoomVisible: Fe,
                                                  lowestPriceRoom: v,
                                                  hotelRoomList: Xe,
                                                  hotelRoomPriceObj: I,
                                                  screenWidth: ye,
                                                  openRoomIntroduce:
                                                    this.openRoomIntroduce,
                                                  noop: this.noop,
                                                  modelType: "noFilter",
                                                  showPriceModal:
                                                    this
                                                      .showHotelPriceDetailModal,
                                                  goToInput: this.goToInput,
                                                  goToBooking:
                                                    this
                                                      .gotoInputFromRoomDetail,
                                                  expandRoom: this.expandRoom,
                                                  roomNumber: Se,
                                                  totalDays:
                                                    null == Ve
                                                      ? void 0
                                                      : Ve.totalDays,
                                                  isSelectManyNight: _e,
                                                }),
                                                (0, X.tZ)(Ce, {
                                                  hotelDetail: l,
                                                  isLogin: y,
                                                  isHourRoom: te,
                                                  showHourRooms: te,
                                                  lowestPriceRoomVisible:
                                                    ie.lowestPriceRoomVisible,
                                                  lowestPriceRoom:
                                                    ie.lowestPriceRoom,
                                                  hotelRoomList:
                                                    ie.hotelRoomList,
                                                  hotelRoomPriceObj:
                                                    ie.hotelRoomPriceObj,
                                                  screenWidth: ye,
                                                  openRoomIntroduce:
                                                    this.openRoomIntroduce,
                                                  noop: this.noop,
                                                  modelType: "hourRoom",
                                                  showPriceModal:
                                                    this
                                                      .showHotelPriceDetailModal,
                                                  goToInput: this.goToInput,
                                                  goToBooking:
                                                    this
                                                      .gotoInputFromRoomDetail,
                                                  expandRoom: this.expandRoom,
                                                  roomNumber: Se,
                                                  totalDays:
                                                    null == Ve
                                                      ? void 0
                                                      : Ve.totalDays,
                                                  isSelectManyNight: _e,
                                                }),
                                              ],
                                            }),
                                          k &&
                                            (0, X.tZ)(vt, {
                                              hotelId:
                                                null == l ? void 0 : l.hotelId,
                                              hotelCommentDynamicInfo: u,
                                              hotelCommentStaticInfo: p,
                                              shortComment: V,
                                              totalCount: x,
                                              askReplyList: C,
                                              gotoQAPage: this.gotoQAPage,
                                            }),
                                          (null === (t = l.hotelPicShows) ||
                                          void 0 === t
                                            ? void 0
                                            : t.length) > 0 &&
                                            (0, X.tZ)(w.View, {
                                              className: "pictures-show-wrap",
                                              id: "pictureShow",
                                              children: (0, X.tZ)(Le.Z, {
                                                pictures: l.hotelPicShows,
                                              }),
                                            }),
                                        ],
                                      }),
                                      (0, X.tZ)(at, {
                                        hotelDetail: l,
                                        hotelPolicyList: P,
                                        hotelBasicInfoList: ue,
                                        gotoFacilityDetail:
                                          this.gotoFacilityDetail,
                                      }),
                                      (0, X.tZ)(Zt, {
                                        pageId: this.pageId,
                                        trafficRailway: U,
                                        trafficAirport: j,
                                        scenicSpot: Q,
                                        scenicCityInfo: J,
                                        covidMonitoringPoint: Ze,
                                      }),
                                      (0, X.tZ)(kt, {
                                        recommendHotelList: D,
                                        gotoHotelDetail: this.gotoHotelDetail,
                                      }),
                                      (0, X.tZ)(De, {}),
                                    ],
                                  }),
                                  (0, X.BX)(w.View, {
                                    className: "login-banner-wrap".concat(
                                      (0, B.gP)($, " lroom")
                                    ),
                                    style: (0, B.LP)(re, "flex"),
                                    children: [
                                      (0, X.tZ)(A.Z, {
                                        mode: "widthFix",
                                        src: xt.redPack,
                                        inline: !0,
                                      }),
                                      (0, X.BX)(w.View, {
                                        className: "content",
                                        children: [
                                          (0, X.tZ)(w.View, {
                                            className: "title",
                                            children: "登录解锁超值低价！",
                                          }),
                                          (0, X.tZ)(w.View, {
                                            className: "desc",
                                            children:
                                              "新客5折起, 买贵必赔, 超多优惠福利等你领",
                                          }),
                                        ],
                                      }),
                                      (0, X.tZ)(w.View, {
                                        className: "btn",
                                        id: "AXDP",
                                        onClick: this.onClickLoginBanner,
                                        children: "去登录",
                                      }),
                                    ],
                                  }),
                                  (0, X.BX)(w.View, {
                                    className: "botm-fixed",
                                    style: (0, B.LP)($, "flex"),
                                    children: [
                                      (0, X.BX)(w.View, {
                                        className: "last-book",
                                        children: [
                                          (0, X.tZ)(w.Image, {
                                            src: "https://images3.c-ctrip.com/ztrip/hotel/icons/xq/inout_hotel@3x.png",
                                            className: "icon",
                                          }),
                                          (0, X.tZ)(w.Text, {
                                            className: "text",
                                            children: ee,
                                          }),
                                        ],
                                      }),
                                      (0, X.tZ)(w.View, {
                                        className: "btn-wrap",
                                        children: (0, X.tZ)(w.Button, {
                                          class: "btn btn-primary",
                                          id: "AXDQ",
                                          onClick: this.toRoomListView,
                                          children: "查看房型",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, X.tZ)(w.View, {
                                    children:
                                      L &&
                                      (0, X.BX)(X.HY, {
                                        children: [
                                          (0, X.tZ)(w.View, {
                                            className: "coupon-second-pop-mask",
                                            id: "AXDR",
                                            onClick: this.closeSecondPopup,
                                          }),
                                          (0, X.BX)(w.View, {
                                            className:
                                              "coupon-second-popup-model",
                                            children: [
                                              (0, X.tZ)(w.View, {
                                                className: "tit",
                                                children: "兑换提醒",
                                              }),
                                              (0, X.BX)(w.View, {
                                                className: "desc",
                                                children: [
                                                  "确认使用",
                                                  (0, X.BX)(w.Text, {
                                                    className: "yellow",
                                                    children: [
                                                      R.remind,
                                                      "积分",
                                                    ],
                                                  }),
                                                  "兑换",
                                                  (0, X.BX)(w.Text, {
                                                    className: "red",
                                                    children: [R.price, "元"],
                                                  }),
                                                  "酒店优惠券?",
                                                ],
                                              }),
                                              (0, X.BX)(w.View, {
                                                className: "btn-ctn",
                                                children: [
                                                  (0, X.tZ)(w.View, {
                                                    className: "l",
                                                    id: "AXDS",
                                                    onClick:
                                                      this.closeSecondPopup,
                                                    children: "取消",
                                                  }),
                                                  (0, X.tZ)(w.View, {
                                                    className: "r",
                                                    id: "AXDT",
                                                    onClick:
                                                      this.receiveSpecialCoupon,
                                                    children: "确认兑换",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  }),
                                  (0, X.tZ)(w.CustomWrapper, {
                                    children: (0, X.tZ)(G.Z, {
                                      childPolicyInfo: r,
                                      room: _,
                                      specialRequest: M,
                                      transition: S,
                                      userVipInfo: xe,
                                      onClose: this.closeRoomIntroduce,
                                      onBook:
                                        this.gotoInputFromRoomDetail.bind(this),
                                      fromType: "HotelDetailPage",
                                    }),
                                  }),
                                  (0, X.tZ)(N.Z, {
                                    ref: function (e) {
                                      o.onDialogAttach(e);
                                    },
                                  }),
                                  (0, X.tZ)(W.Z, {
                                    visible: O,
                                    modalInfo: z,
                                    date: Ve,
                                    memberInfo: Me,
                                    roomNumber: Se,
                                    onClose:
                                      this.onCloseHotelPriceDetailModal.bind(
                                        this
                                      ),
                                    onComfirm:
                                      this.onComfirmHotelPriceDetailModal.bind(
                                        this
                                      ),
                                  }),
                                  (0, X.tZ)(ot, {
                                    couponTimerInfo: ge,
                                    modals: pe,
                                    pageId: this.pageId,
                                    onCloseModal: this.onCloseModal,
                                    onShowModal: this.onShowModal,
                                  }),
                                  (0, X.tZ)(nt, {
                                    drawerType: we,
                                    drawerInfo: fe,
                                    onDrawerClose: this.onDrawerClose,
                                    onHandleCoupon: this.onHandleCoupon,
                                  }),
                                  (0, X.tZ)(E.Z, {
                                    ref: function (e) {
                                      return o.onDrawerAttach(e);
                                    },
                                  }),
                                  (0, X.tZ)(H.Z, {}),
                                  (0, X.tZ)(Y.Z, {
                                    pageId: this.pageId,
                                    isVisible: Be,
                                    currentCount: Se,
                                    onConfirm: function (e) {
                                      o.onChangeRoomCount(e);
                                    },
                                    onClose: function () {
                                      o.onChangeShowRoomSelect(!1);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        o
                      );
                    })(f.default.Component))
                  ) || i)
              ) || i;
          (Pt.enableShareAppMessage = !0),
            Page(
              (0, a.createPageConfig)(
                Pt,
                "pages/hotel/detail/detail",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "酒店详情",
                  navigationBarTextStyle: "black",
                  navigationBarBackgroundColor: "#fff",
                  backgroundColor: "#fff",
                  navigationStyle: "custom",
                  usingComponents: {
                    "hotel-list-item":
                      "../list/components/HotelListItemV2/HotelListItemV2",
                  },
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(84779);
        }),
          e.O();
      },
    ]);
})();
