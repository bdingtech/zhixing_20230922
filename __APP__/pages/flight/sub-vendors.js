!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [56620],
    {
      92603: function (e, t, i) {
        var n = i(298),
          c = i(57042),
          a = i(24460),
          l = i(21867),
          r = i(86066);
        t.Z = function (e) {
          return function (t) {
            return (function (t) {
              (0, l.Z)(s, t);
              var i = (0, r.Z)(s);
              function s() {
                return (0, c.Z)(this, s), i.apply(this, arguments);
              }
              return (
                (0, a.Z)(s, [
                  {
                    key: "onShareAppMessage",
                    value: function () {
                      return (0, n.Z)(
                        (0, n.Z)({}, e),
                        {},
                        { path: "/".concat(this.props.tid) }
                      );
                    },
                  },
                ]),
                s
              );
            })(t);
          };
        };
      },
      84211: function (e, t, i) {
        i.d(t, {
          UT: function () {
            return l;
          },
          c0: function () {
            return a;
          },
          mD: function () {
            return c;
          },
        }),
          i(92954);
        var n = i(98920),
          c = n.Z.getInstance("FLIGHT_BOOKX_STORE"),
          a = n.Z.getInstance("FLIGHT_BARGAIN_POP_CLOSE"),
          l = n.Z.getInstance("FLIGHT_CONTACT_PHONE");
      },
      57169: function (e, t, i) {
        i.d(t, {
          Y: function () {
            return m;
          },
        });
        var n = i(90129),
          c = i(52500),
          a = i(71515),
          l = i(49120),
          r = i(34229),
          s = i(55916),
          o = i(48813),
          d = function (e) {
            var t = e.onClose,
              i = (0, c.useState)(),
              d = (0, n.Z)(i, 2),
              m = d[0],
              u = d[1];
            if (
              ((0, c.useEffect)(function () {
                (0, l.showLoading)(),
                  (0, s.F3)()
                    .then(function (e) {
                      if (1 == e.resultCode) {
                        var i = e.data;
                        u(i);
                      } else (0, l.showToast)("网络错误"), t();
                    })
                    .catch(function () {
                      (0, l.showToast)("网络错误"), t();
                    })
                    .finally(l.hideLoading);
              }, []),
              !m)
            )
              return (0, o.tZ)(o.HY, {});
            var f = m.title,
              h = m.subtitle,
              p = m.delayInfo,
              N = m.couponInfos,
              g = m.rule;
            return (0, o.BX)(a.View, {
              className: "air-train-rights",
              children: [
                (0, o.tZ)(a.View, { className: "head-tit", children: f }),
                (0, o.BX)(a.View, {
                  className: "rights-cont",
                  children: [
                    (0, o.tZ)(a.View, {
                      className: "right-tit flex-align-items-center",
                      children: h,
                    }),
                    (0, o.BX)(a.View, {
                      className: "main-right",
                      children: [
                        (0, o.tZ)(a.View, {
                          className: "cont",
                          children: (0, o.tZ)(r.ZtRichText, {
                            nodes: null == p ? void 0 : p.title,
                          }),
                        }),
                        (0, o.tZ)(a.Text, {
                          className: "desc",
                          children: null == p ? void 0 : p.content,
                        }),
                      ],
                    }),
                    (0, o.tZ)(a.View, {
                      className: "sub-rights flex",
                      children:
                        null == N
                          ? void 0
                          : N.map(function (e) {
                              return (0,
                              o.BX)(a.View, { className: "right-item flex-1 flex-align-items-center", children: [(0, o.tZ)(a.View, { className: "amount flex-center", children: (0, o.tZ)(a.Text, { className: "amount-txt", children: e.couponAmount }) }), (0, o.BX)(a.View, { className: "flex-1", children: [(0, o.tZ)(a.Text, { className: "cont-txt", children: e.title }), (0, o.tZ)(a.View, { className: "desc", children: e.content })] })] }, e.title);
                            }),
                    }),
                  ],
                }),
                (0, o.tZ)(a.View, {
                  className: "rules",
                  children: (0, o.tZ)(r.ZtRichText, { nodes: g }),
                }),
              ],
            });
          },
          m = function () {
            var e = (0, l.getCurrentPage)();
            null == e ||
              e.showCommonDrawer({
                hideClose: !1,
                hideTitle: !0,
                content: function (e) {
                  var t = e.onClose;
                  return (0, o.tZ)(d, { onClose: t });
                },
                className: "air-train-rights-drawer",
              });
          };
      },
      41335: function (e, t, i) {
        var n = i(52500),
          c = i(71515),
          a = i(34229),
          l = i(48813);
        t.Z = n.default.memo(function (e) {
          var t = e.data,
            i = e.onClick,
            n = (t || {}).topText;
          return n
            ? (0, l.BX)(c.View, {
                className: "announcement-banner flex-center",
                id: "AcCK",
                onClick: i,
                children: [
                  (0, l.tZ)(c.View, {
                    className: "cont flex-1",
                    children: (0, l.tZ)(a.ZtRichText, {
                      nodes: n,
                      className: "txt",
                    }),
                  }),
                  (0, l.tZ)(c.View, { className: "ifont2-arr iconfont2" }),
                ],
              })
            : (0, l.tZ)(l.HY, {});
        });
      },
      92298: function (e, t, i) {
        i.d(t, {
          g: function () {
            return u;
          },
        });
        var n = i(52500),
          c = i(71515),
          a = i(4845),
          l = i(34229),
          r = i(49120),
          s = i(79910),
          o = i(48813),
          d = {
            xPage: [
              {
                title: "商旅用户订机票",
                desc: "选择<b>【商旅返现套餐】</b>，并购买机票",
                img: "https://images3.c-ctrip.com/ztrip/zhixingios/list/10.0/img_shanglv02.png",
              },
              {
                title: "可申请全额电子发票",
                desc: "按实付金额申请电子发票（含机建、燃油、附加产品）",
                img: "https://images3.c-ctrip.com/ztrip/zhixingios/list/10.0/img_shanglv05.png",
              },
              {
                title:
                  "额外拿到了<span style='color: #FF5959'>返现</span>，赚到了!",
                desc: "起飞后，进入订单详情页领取返现",
                img: "https://images3.c-ctrip.com/ztrip/zhixingios/list/10.0/img_shanglv04.png",
              },
            ],
            listPage: [
              {
                title: "选择航班，查看报价详情",
                img: "https://images3.c-ctrip.com/ztrip/zhixingios/list/10.0/img_shanglv01.png",
              },
              {
                title: "商旅用户订机票",
                desc: "选择<b>【商旅返现套餐】</b>，并购买机票",
                img: "https://images3.c-ctrip.com/ztrip/zhixingios/list/10.0/img_shanglv02.png",
              },
              {
                title: "可申请全额电子发票",
                desc: "按实付金额申请电子发票（含机建、燃油、附加产品）",
                img: "https://images3.c-ctrip.com/ztrip/zhixingios/list/10.0/img_shanglv05.png",
              },
              {
                title:
                  "额外拿到了<span style='color: #FF5959'>返现</span>，赚到了!",
                desc: "起飞后，进入订单详情页领取返现",
                img: "https://images3.c-ctrip.com/ztrip/zhixingios/list/10.0/img_shanglv04.png",
              },
            ],
          },
          m = n.default.memo(function (e) {
            var t = e.source,
              i = e.onClose,
              n = d[t];
            return (0, o.BX)(c.View, {
              className: "business-drawer-cont flex-1 flex flex-column",
              children: [
                (0, o.BX)(c.View, {
                  className: "business-drawer-hd flex-column flex-center",
                  children: [
                    (0, o.tZ)(c.Image, {
                      className: "hd-title",
                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/list/10.0/biaoti_shanglv.png",
                    }),
                    (0, o.tZ)(c.View, {
                      className: "hd-sub-title flex-align-items-center",
                      children: "按实付金额全额开具电子发票，起飞后返现金",
                    }),
                  ],
                }),
                (0, o.tZ)(c.View, {
                  className: "business-drawer-bd flex flex-1",
                  children: (0, o.tZ)(c.View, {
                    className: "steps-wrap flex-1",
                    children:
                      null == n
                        ? void 0
                        : n.map(function (e, t) {
                            return (0,
                            o.BX)(c.View, { className: "business-step", children: [(0, o.tZ)(c.View, { className: "step-node" }), (0, o.tZ)(l.ZtRichText, { className: "step-title", nodes: e.title }), e.desc && (0, o.tZ)(l.ZtRichText, { className: "step-desc", nodes: e.desc }), (0, o.tZ)(c.Image, { className: "step-img", mode: "widthFix", src: e.img })] }, t);
                          }),
                  }),
                }),
                (0, o.tZ)(a.Z, { onConfirm: i }),
              ],
            });
          }),
          u = function (e) {
            var t;
            "listPage" === e
              ? s.Z.sendUbtTrace("FltWSList_BusiCashBackFloat_exposure")
              : "xPage" === e &&
                s.Z.sendUbtTrace("FltWMid_BusiCashBackFloat_exposure"),
              null === (t = (0, r.getCurrentPage)()) ||
                void 0 === t ||
                t.showCommonDrawer({
                  hideTitle: !0,
                  content: function (t) {
                    var i = t.onClose;
                    return (0, o.tZ)(m, { source: e, onClose: i });
                  },
                  height: "75vh",
                });
          };
      },
      92794: function (e, t, i) {
        i.d(t, {
          x: function () {
            return N;
          },
        });
        var n = i(22276),
          c = i(90129),
          a = i(52500),
          l = i(71515),
          r = i(49120),
          s = i(79792),
          o = i(9062),
          d = i(48813),
          m = ["去程", "返程"],
          u = ["第1程", "第2程"],
          f = s.default.isTieyou,
          h = function (e) {
            return "".concat(e.key, "_").concat(e.code);
          },
          p = function (e) {
            var t = e.tripType,
              i = e.filterTab,
              r = void 0 === i ? [] : i,
              s = e.departureFilterList,
              p = void 0 === s ? [] : s,
              N = e.returnFilterList,
              g = void 0 === N ? [] : N,
              w = e.onFilterTabClick,
              Z = e.onCancle,
              x = e.onConfirm,
              V = e.selectKey,
              v = e.filterSelected,
              T = (0, a.useState)(0),
              C = (0, c.Z)(T, 2),
              y = C[0],
              B = C[1],
              X = (0, a.useState)(0),
              b = (0, c.Z)(X, 2),
              A = b[0],
              S = b[1],
              k = (0, a.useState)(0),
              I = (0, c.Z)(k, 2),
              D = I[0],
              z = I[1],
              _ = (0, a.useState)([]),
              P = (0, c.Z)(_, 2),
              F = P[0],
              H = P[1],
              M = (0, a.useState)([]),
              R = (0, c.Z)(M, 2),
              O = R[0],
              Y = R[1],
              L = (0, a.useState)([]),
              E = (0, c.Z)(L, 2),
              U = E[0],
              W = E[1],
              J = (0, a.useState)([]),
              j = (0, c.Z)(J, 2),
              G = j[0],
              K = j[1],
              Q = t === o.zM.round ? m : u;
            (0, a.useEffect)(
              function () {
                !(function (e) {
                  var t =
                      (null == e
                        ? void 0
                        : e.findIndex(function (e) {
                            return e.active;
                          })) || 0,
                    i = e[0].subIndex,
                    n = e[1].subIndex;
                  B(t), S(i), z(n);
                })(r);
              },
              [r]
            ),
              (0, a.useEffect)(
                function () {
                  !(function (e, t) {
                    var i = e.filter(function (e) {
                        return e.active;
                      }),
                      c = t.filter(function (e) {
                        return e.active;
                      }),
                      a =
                        null == i
                          ? void 0
                          : i.reduce(function (e, t) {
                              return [].concat((0, n.Z)(e), (0, n.Z)(t.list));
                            }, []),
                      l =
                        null == c
                          ? void 0
                          : c.reduce(function (e, t) {
                              return [].concat((0, n.Z)(e), (0, n.Z)(t.list));
                            }, []),
                      r =
                        (null == a
                          ? void 0
                          : a.filter(function (e) {
                              return e.selected;
                            })) || [],
                      s =
                        (null == l
                          ? void 0
                          : l.filter(function (e) {
                              return e.selected;
                            })) || [];
                    W(
                      i.map(function (e) {
                        return e.prop;
                      })
                    ),
                      K(
                        c.map(function (e) {
                          return e.prop;
                        })
                      ),
                      H(r.map(h)),
                      Y(s.map(h));
                  })(p, g);
                },
                [p, g]
              ),
              (0, a.useEffect)(
                function () {
                  var e = F.map(function (e) {
                    var t;
                    return null === (t = e.split("_")) || void 0 === t
                      ? void 0
                      : t[0];
                  });
                  W(e);
                },
                [F]
              ),
              (0, a.useEffect)(
                function () {
                  var e = O.map(function (e) {
                    var t;
                    return null === (t = e.split("_")) || void 0 === t
                      ? void 0
                      : t[0];
                  });
                  K(e);
                },
                [O]
              );
            var q = function (e, t) {
                var i = 0 == y ? "depart" : "return",
                  c = 0 == y ? F : O,
                  a = 0 == y ? H : Y,
                  l = h(e),
                  r = c.findIndex(function (e) {
                    return e === l;
                  });
                -1 !== r ? c.splice(r, 1) : c.push(l),
                  a((0, n.Z)(c)),
                  v(t, { type: i });
              },
              $ = function (e) {
                return (0 === y ? F : O).includes(h(e));
              },
              ee = function (e) {
                return (0 === y ? U : G).includes(e.prop);
              };
            return (0, d.BX)(l.View, {
              className: "filter-list-cont  ".concat(f ? "ty" : "zx"),
              children: [
                (0, d.BX)(l.View, {
                  className: "filter-list-hd",
                  children: [
                    (0, d.tZ)(l.Button, {
                      className: "btn-cancel",
                      id: "AcCP",
                      onClick: Z,
                      children: "取消",
                    }),
                    Q.map(function (e, t) {
                      return (0, d.tZ)(
                        l.View,
                        {
                          className: "tit ".concat(y == t ? "active" : ""),
                          id: "AcCQ",
                          onClick: function () {
                            return (function (e) {
                              B(e), w(e);
                            })(t);
                          },
                          children: e,
                        },
                        "index"
                      );
                    }),
                    (0, d.tZ)(l.Button, {
                      className: "btn-submit color-primary",
                      id: "AcCR",
                      onClick: x,
                      children: "确定",
                    }),
                  ],
                }),
                (0, d.tZ)(l.View, {
                  className: "filter-cont",
                  children: r.map(function (e, t) {
                    var i = [p, g],
                      n = 0 === y ? A : D;
                    return (0, d.BX)(
                      l.View,
                      {
                        className: "pop-filter-bd ".concat(
                          y === t ? "active" : ""
                        ),
                        children: [
                          (0, d.tZ)(l.View, {
                            className: "lbox",
                            children:
                              i &&
                              i[t] &&
                              i[t].map(function (e, t) {
                                return (0, d.tZ)(d.HY, {
                                  children: (0, d.BX)(l.View, {
                                    className: "item "
                                      .concat(n === t ? "cur" : "", " ")
                                      .concat(e.active ? "active" : ""),
                                    id: "AcCS",
                                    onClick: function () {
                                      !(function (e) {
                                        0 === y ? S(e) : z(e), V(e, y);
                                      })(t);
                                    },
                                    children: [
                                      e.name,
                                      ee(e) &&
                                        (0, d.tZ)(l.Icon, {
                                          className: "i-dot bgcolor-primary",
                                        }),
                                    ],
                                  }),
                                });
                              }),
                          }),
                          (0, d.tZ)(l.View, {
                            className: "rbox",
                            children:
                              i &&
                              i[y] &&
                              i[y][n] &&
                              i[y][n].list.map(function (e, t) {
                                return (0, d.tZ)(d.HY, {
                                  children: (0, d.BX)(l.View, {
                                    className: "item "
                                      .concat($(e) ? "color-primary" : "", " ")
                                      .concat(e.disabled ? "disabled" : ""),
                                    id: "AcCT",
                                    onClick: function () {
                                      return q(e, t);
                                    },
                                    children: [
                                      e.icon &&
                                        (0, d.tZ)(l.Image, {
                                          className: "airline-logo",
                                          src: e.icon,
                                        }),
                                      e.title,
                                      (0, d.tZ)(l.Text, {
                                        className:
                                          ($(e)
                                            ? "ifont-checkboxed"
                                            : "ifont-checkbox") + " iconfont",
                                      }),
                                    ],
                                  }),
                                });
                              }),
                          }),
                        ],
                      },
                      "tabIndex"
                    );
                  }),
                }),
              ],
            });
          },
          N = function (e) {
            var t,
              i = e.tripType,
              n = e.filterTab,
              c = e.departureFilterList,
              a = e.returnFilterList,
              l = e.handleFilterTabClick,
              s = e.cancelFilter,
              o = e.confirmFilter,
              m = e.selectKey,
              u = e.filterSelected;
            null === (t = (0, r.getCurrentPage)()) ||
              void 0 === t ||
              t.showCommonDrawer({
                hideTitle: !0,
                hideClose: !0,
                className: "filter-list-drawer",
                content: function (e) {
                  var t = e.onClose;
                  return (0, d.tZ)(p, {
                    tripType: i,
                    filterTab: n,
                    departureFilterList: c,
                    returnFilterList: a,
                    onFilterTabClick: l,
                    onCancle: function () {
                      s(), t();
                    },
                    onConfirm: function () {
                      o(!1), t();
                    },
                    selectKey: m,
                    filterSelected: u,
                  });
                },
              });
          };
      },
      1734: function (e, t, i) {
        var n = i(52500),
          c = i(71515),
          a = i(8271),
          l = i.n(a),
          r = i(45245),
          s = i(48813);
        t.Z = n.default.memo(function (e) {
          var t = e.flight,
            i = e.departTime,
            n = e.className,
            a = void 0 === n ? "" : n,
            o = e.fromPage,
            d = t.dptTime,
            m = t.arrTime,
            u = t.dptAName,
            f = t.arrAName,
            h = t.arrTrm,
            p = t.dptTrm,
            N = t.airIcon,
            g = t.airName,
            w = t.flightNo,
            Z = t.planeType,
            x = t.ct,
            V = t.mealType,
            v = t.shared,
            T = t.actAirName,
            C = t.actFlightNo,
            y = t.dtls,
            B = t.punctuality,
            X = function (e) {
              return l()(i).format("YYYY-MM-DD") != l()(e).format("YYYY-MM-DD");
            };
          return (0, s.BX)(c.View, {
            className: "flight-segment-comp flight-segment ".concat(a || ""),
            children: [
              (0, s.BX)(c.View, {
                className: "main-info flex",
                children: [
                  (0, s.BX)(c.View, {
                    className: "from flex-1",
                    children: [
                      (0, s.BX)(c.View, {
                        className: "time",
                        children: [
                          l()(d).format("HH:mm"),
                          X(d) &&
                            (0, s.tZ)(c.View, {
                              className: "diff-time",
                              children: l()(d).format("M月DD日"),
                            }),
                        ],
                      }),
                      (0, s.BX)(c.View, {
                        className: "station",
                        children: [u, p || ""],
                      }),
                    ],
                  }),
                  (0, s.tZ)(c.View, {
                    className: "mid flex-center flex-column",
                    children:
                      (null == y ? void 0 : y.length) > 0 &&
                      (0, s.tZ)(c.View, {
                        className: "stop-by",
                        children: y[0],
                      }),
                  }),
                  (0, s.BX)(c.View, {
                    className: "to flex-1",
                    children: [
                      (0, s.BX)(c.View, {
                        className: "time",
                        children: [
                          l()(m).format("HH:mm"),
                          X(m) &&
                            (0, s.tZ)(c.View, {
                              className: "diff-time",
                              children: l()(m).format("M月DD日"),
                            }),
                        ],
                      }),
                      (0, s.BX)(c.View, {
                        className: "station",
                        children: [f, h || ""],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.tZ)(c.View, {
                className: "basic-info flex-center",
                id: "AcCU",
                onClick: function () {
                  return "book" != o && r.Z.toAircraftInfo(t);
                },
                children: (0, s.BX)(c.View, {
                  children: [
                    (0, s.BX)(c.View, {
                      className: "flex-align-items-center",
                      children: [
                        (0, s.BX)(c.View, {
                          className: "flex-align-items-center",
                          children: [
                            (0, s.BX)(c.View, {
                              className: "basic-item flex-align-items-center",
                              children: [
                                (0, s.tZ)(c.Image, {
                                  src: N,
                                  lazyLoad: !0,
                                  className: "air-icon",
                                }),
                                g,
                                w,
                              ],
                            }),
                            Z &&
                              (0, s.tZ)(c.View, {
                                className: "basic-item",
                                children: Z,
                              }),
                            x &&
                              (0, s.tZ)(c.View, {
                                className: "basic-item",
                                children: x,
                              }),
                            "book" == o &&
                              B &&
                              (0, s.tZ)(c.View, {
                                className: "basic-item",
                                children: B,
                              }),
                            V &&
                              (0, s.tZ)(c.View, {
                                className: "basic-item",
                                children: V,
                              }),
                          ],
                        }),
                        "book" != o &&
                          (0, s.tZ)(c.View, {
                            className: "ifont-arr iconfont",
                          }),
                      ],
                    }),
                    v &&
                      (0, s.BX)(c.View, {
                        className:
                          "shared-flight basic-item flex-align-items-center",
                        style: "marginTop: 4rpx;",
                        children: [
                          (0, s.tZ)(c.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/10/icon_gongxiang@3x.png",
                            lazyLoad: !0,
                            className: "air-icon",
                          }),
                          "实际承运: ",
                          T,
                          C,
                        ],
                      }),
                  ],
                }),
              }),
            ],
          });
        });
      },
      6954: function (e, t, i) {
        i.d(t, {
          Z: function () {
            return f;
          },
        });
        var n = i(22276),
          c = (i(52500), i(92954)),
          a = i.n(c),
          l = i(71515),
          r = i(49120),
          s = i(4845),
          o = i(3205),
          d = i(34229),
          m = i(48813);
        function u(e) {
          var t = e.data,
            i = e.fromPage,
            c = e.onClose,
            r = t.ruleTitle,
            u = t.rule,
            f = t.xCouponInfo,
            h = t.jumpUrl,
            p = t.buttonName,
            N = "detail" === i,
            g = !((null == f ? void 0 : f.length) > 0),
            w = [t],
            Z = [{ ruleTitle: r, rule: u }];
          g ||
            (w.push.apply(w, (0, n.Z)(f)),
            Z.push.apply(
              Z,
              (0, n.Z)(
                f.map(function (e) {
                  return { ruleTitle: e.ruleTitle, rule: e.rule };
                })
              )
            ));
          return (0, m.BX)(m.HY, {
            children: [
              (0, m.BX)(l.View, {
                className: "flt-train-coupon mh-50vh ".concat(
                  N ? "show-btn" : ""
                ),
                children: [
                  (0, m.BX)(l.View, {
                    className: "coupons-warp ".concat(g ? "" : "multi"),
                    children: [
                      null == w
                        ? void 0
                        : w.map(function (e) {
                            return (0,
                            m.BX)(l.View, { className: "coupon-view flex flex-align-items-center", children: [(0, m.tZ)(l.View, { className: "coupon-price flex-center", children: (0, m.tZ)(l.View, { className: "price", children: e.amount }) }), (0, m.BX)(l.View, { className: "coupon-desc flex-1 ", children: [(0, m.tZ)(l.View, { className: "desc", children: e.desc }), (0, m.tZ)(l.View, { className: "sub-desc", children: e.subDesc })] }), (0, m.tZ)(l.View, { className: "coupon-bg" })] }, e.desc);
                          }),
                      g &&
                        (0, m.tZ)(l.View, {
                          className: "rule-wrap",
                          children: (0, m.tZ)(d.ZtRichText, { nodes: u }),
                        }),
                    ],
                  }),
                  !g &&
                    (0, m.tZ)(l.View, {
                      className: "rule-list-wrap",
                      children: Z.map(function (e) {
                        return (0,
                        m.BX)(l.View, { className: "rule-item", children: [(0, m.tZ)(l.View, { className: "rule-tit", children: e.ruleTitle }), (0, m.tZ)(l.View, { className: "rule-txt", children: (0, m.tZ)(d.ZtRichText, { nodes: e.rule }) })] }, e.ruleTitle);
                      }),
                    }),
                ],
              }),
              N &&
                (0, m.tZ)(s.Z, {
                  buttonText: p,
                  onConfirm: function () {
                    null == c || c(),
                      null != h && h.startsWith("http")
                        ? o.Z.twebview({ data: { url: h } })
                        : a().reLaunch({ url: h });
                  },
                }),
            ],
          });
        }
        function f() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.data,
            i = e.fromPage;
          if (t) {
            var n = (0, r.getCurrentPage)();
            null == n ||
              n.showCommonDrawer({
                hideClose: !1,
                title: "使用规则",
                className: "flt-train-coupon-drawer",
                content: function (e) {
                  var n = e.onClose;
                  return (0, m.tZ)(u, { data: t, fromPage: i, onClose: n });
                },
              });
          }
        }
      },
      53237: function (e, t, i) {
        var n = i(52500),
          c = i(71515),
          a = i(21828),
          l = i(26862),
          r = i(9062),
          s = i(48813);
        t.Z = n.default.memo(function (e) {
          var t = e.tripType,
            i = e.price,
            n = e.coupon,
            o = e.isDetailShow,
            d = e.onToggleDetail,
            m = e.onNextStep,
            u = t === r.zM.round ? "往返总价" : "多程总价";
          return (0,
          s.BX)(a.Z, { className: "pay-box", children: [(0, s.BX)(c.View, { className: "lbox flex-1 flex", children: [(0, s.BX)(c.View, { className: "price-info", children: [(0, s.BX)(c.View, { className: "info flex-align-items-center", children: [(0, s.BX)(c.View, { className: "price", children: [(0, s.tZ)(c.Text, { className: "rmb-sign", children: (0, s.tZ)(l.Z, {}) }), i] }), i > 0 && n && (0, s.tZ)(c.View, { className: "tag color-red", children: n })] }), (0, s.tZ)(c.View, { className: "desc", children: u })] }), (0, s.BX)(c.View, { className: "detail-btn flex-align-items-center", id: "AcCZ", onClick: d, children: ["详情", (0, s.tZ)(c.Text, { className: "iconfont2 ifont2-shouqi_linea_12 ".concat(o ? "down" : "up") })] })] }), (0, s.tZ)(c.View, { className: "rbox", children: (0, s.tZ)(c.View, { className: "next-btn flex-center", id: "AcCa", onClick: m, children: "下一步" }) })] });
        });
      },
      43653: function (e, t, i) {
        i.d(t, {
          P: function () {
            return f;
          },
        });
        var n,
          c = i(90129),
          a = i(45023),
          l = (i(52500), i(71515)),
          r = i(49120),
          s = i(34229),
          o = i(9062),
          d = i(48813),
          m =
            ((n = {}),
            (0, a.Z)(
              n,
              o.JH.UP,
              "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/x_ye/bianjia_pic@3x.png"
            ),
            (0, a.Z)(
              n,
              o.JH.DOWN,
              "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/x_ye/jianjia_pic@3x.png"
            ),
            (0, a.Z)(
              n,
              o.JH.SERVICE_CHANGE,
              "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/x_ye/shouqin_pic.png"
            ),
            n),
          u = function (e) {
            var t = e.data,
              i = e.onClose,
              n = e.onCancel,
              a = e.onConfirm,
              r = t || {},
              u = r.changeType,
              f = r.price,
              h = r.originPrice,
              p = r.title,
              N = r.content,
              g = r.originPolicyOffer,
              w = r.newPolicyOffer,
              Z = u == o.JH.DOWN,
              x = u == o.JH.SERVICE_CHANGE && g && w,
              V = Z ? ["", "赶紧预定"] : ["查看其他价格", "预定新报价"],
              v = (0, c.Z)(V, 2),
              T = v[0],
              C = v[1];
            return (0, d.BX)(l.View, {
              className: "flt-price-change",
              children: [
                (0, d.tZ)(l.View, {
                  className: "hd-img-wrap flex-center",
                  children: (0, d.tZ)(l.Image, {
                    className: "hd-img",
                    src: m[u],
                  }),
                }),
                (0, d.tZ)(l.View, {
                  className: "change-tit flex-center",
                  children: (0, d.tZ)(s.ZtRichText, {
                    className: "txt",
                    nodes: p,
                  }),
                }),
                !!N &&
                  (0, d.tZ)(l.View, {
                    className: "cont flex-center",
                    children: (0, d.tZ)(s.ZtRichText, {
                      className: "txt",
                      nodes: N,
                    }),
                  }),
                x &&
                  (0, d.tZ)(l.View, {
                    className: "service-change-module flex-center",
                    children: [g, w].map(function (e, t) {
                      return (0,
                      d.BX)(l.View, { className: "policy-offer flex-center flex-column flex-1 ".concat(1 == t ? "new" : "origin"), children: [(0, d.tZ)(l.View, { className: "price", children: 1 == t ? h : f }), (0, d.BX)(l.View, { className: "price-status flex-center", children: [(0, d.tZ)(s.ZtRichText, { className: "txt", nodes: e.subTitle }), (0, d.tZ)(l.View, { className: "tag", children: e.tag })] }), (0, d.tZ)(l.View, { className: "service-desc flex-center", children: (0, d.tZ)(s.ZtRichText, { className: "desc", nodes: e.serviceTitle + e.serviceContent }) }), 1 == t && (0, d.tZ)(l.Image, { className: "offer-icon", src: "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/x_ye/zang_icon.png" })] }, t);
                    }),
                  }),
                (0, d.BX)(l.View, {
                  className: "opt-wrap flex-center",
                  children: [
                    !Z &&
                      (0, d.tZ)(l.Button, {
                        className: "cancle-btn flex-1 flex-center",
                        id: "AcCb",
                        onClick: function () {
                          null == i || i(), null == n || n(t);
                        },
                        children: T,
                      }),
                    (0, d.tZ)(l.Button, {
                      className: "confirm-btn flex-1 flex-center",
                      id: "AcCc",
                      onClick: function () {
                        null == i || i(), null == a || a(t);
                      },
                      children: C,
                    }),
                  ],
                }),
              ],
            });
          };
        function f(e) {
          var t = e.priceChange,
            i = e.onCancel,
            n = e.onConfirm,
            c = (t || {}).changeType;
          if (t && ![o.JH.NONE, o.JH.COVER].includes(c)) {
            var a = (0, r.getCurrentPage)();
            null == a ||
              a.showCommonDrawer({
                hideTitle: !0,
                hideClose: !1,
                content: function (e) {
                  var c = e.onClose;
                  return (0, d.tZ)(u, {
                    data: t,
                    onClose: c,
                    onCancel: i,
                    onConfirm: n,
                  });
                },
              });
          }
        }
      },
      78996: function (e, t, i) {
        i.d(t, {
          Z: function () {
            return X;
          },
        });
        var n = i(90129),
          c = i(71515),
          a = i(92954),
          l = i.n(a),
          r = i(52500),
          s = i(79792),
          o = i(34229),
          d = i(18433),
          m = i(4102),
          u = i(8271),
          f = i.n(u),
          h = i(48813);
        var p = r.default.memo(function (e) {
            var t = e.data,
              i = void 0 === t ? {} : t,
              n = e.type,
              a = e.flightClick,
              l = e.isTransfer,
              r = i.dptTimeStr,
              s = i.dptAName,
              o = i.dptTrm,
              d = i.abbr,
              m = i.sequences,
              u = i.arrTimeStr,
              f = i.dayDiff,
              p = i.arrAName,
              N = i.arrTrm,
              g = i.apr,
              w = i.priceDifferences,
              Z = i.selected;
            return (0,
            h.tZ)(c.View, { className: "flight-round-multi-list-item", children: (0, h.BX)(c.View, { className: "item ".concat(Z ? "cur" : ""), id: "AcCg", onClick: a, children: [(0, h.BX)(c.View, { className: "fromto", children: [(0, h.BX)(c.View, { className: "from", children: [(0, h.tZ)(c.View, { className: "time", children: r }), (0, h.tZ)(c.View, { className: "station", children: s + o })] }), (0, h.BX)(c.View, { className: "mid", children: [(0, h.tZ)(c.Icon, { className: "icon-fromto ".concat(l ? "trans" : m[0].stop ? "stop" : "") }), l && (0, h.tZ)(c.View, { className: "txt", children: d }), !l && m[0].stop && (0, h.tZ)(c.View, { className: "txt", children: d })] }), (0, h.BX)(c.View, { className: "to", children: [(0, h.tZ)(c.View, { className: "time", children: u }), f > 0 && (0, h.tZ)(c.Text, { className: "add", children: "+" + f + "天" }), (0, h.tZ)(c.View, { className: "station", children: p + N })] })] }), (0, h.BX)(c.View, { className: "flight-info", children: [l ? (0, h.tZ)(c.View, { className: "cont flex-1", children: "".concat(m[0].airName, " | ").concat(m[1].airName) }) : (0, h.tZ)(c.View, { className: "cont flex-1", children: m[0].airFullName + m[0].flightNo }), (0, h.BX)(c.View, { className: "rbox", children: [(0, h.tZ)(c.View, { className: "txt", children: "往返总价" }), (0, h.BX)(c.View, { className: "total color-red", children: ["return" === n && (0, h.BX)(h.HY, { children: [(0, h.tZ)(c.View, { className: "add", children: w >= 0 ? "+" : "-" }), (0, h.tZ)(c.View, { className: "price", children: Math.abs(w) })] }), "depart" === n && (0, h.tZ)(c.View, { className: "price", children: g }), "return" !== n && (0, h.tZ)(c.View, { className: "em", children: "起" })] })] })] })] }) });
          }),
          N = i(9062),
          g = N.UQ.findIndex(function (e) {
            return "出发机场" === e;
          }),
          w = N.UQ.findIndex(function (e) {
            return "到达机场" === e;
          });
        var Z = r.default.memo(function (e) {
            var t = e.title,
              i = e.type,
              a = e.filterOpts,
              l = void 0 === a ? [] : a,
              s = e.filterSelected,
              o = e.className,
              d = e.isFilterAirport,
              m = e.handleResetAirpot,
              u = l.filter(function (e) {
                return "dptACode" === e.prop;
              }),
              f = l.filter(function (e) {
                return "arrACode" === e.prop;
              }),
              p = (0, r.useState)(u),
              N = (0, n.Z)(p, 2),
              Z = N[0],
              x = N[1],
              V = (0, r.useState)(f),
              v = (0, n.Z)(V, 2),
              T = v[0],
              C = v[1];
            (0, r.useEffect)(
              function () {
                x(
                  l.filter(function (e) {
                    return "dptACode" === e.prop;
                  })
                ),
                  C(
                    l.filter(function (e) {
                      return "arrACode" === e.prop;
                    })
                  );
              },
              [l]
            );
            var y = function (e, t, i) {
              s &&
                s(e, {
                  triggerConfirmFilter: !0,
                  type: t,
                  mainTab: [
                    { active: "depart" === t, subIndex: i },
                    { active: "return" === t, subIndex: i },
                  ],
                });
            };
            return (
              ((Z[0] && Z[0].list.length > 1) ||
                (T[0] && T[0].list.length > 1)) &&
              (0, h.BX)(c.View, {
                className: "flight-fast-filter-container ".concat(o),
                children: [
                  (0, h.BX)(c.View, {
                    className: "htit",
                    children: [
                      t,
                      d &&
                        (0, h.tZ)(c.Text, {
                          className: "rbox color-primary",
                          id: "AcCM",
                          onClick: function () {
                            m && m();
                          },
                          children: "重置",
                        }),
                    ],
                  }),
                  Z[0] &&
                    Z[0].list.length > 1 &&
                    (0, h.BX)(c.View, {
                      className: "lst",
                      children: [
                        (0, h.tZ)(c.View, {
                          className: "label",
                          children: "起",
                        }),
                        Z[0].list.map(function (e, t) {
                          return (0, h.tZ)(
                            c.View,
                            {
                              className: "cont ".concat(
                                e.selected ? "cur" : ""
                              ),
                              id: "AcCN",
                              onClick: function () {
                                return y(t, i, g);
                              },
                              children: e.shortTitle,
                            },
                            "index"
                          );
                        }),
                      ],
                    }),
                  T[0] &&
                    T[0].list.length > 1 &&
                    (0, h.BX)(c.View, {
                      className: "lst",
                      children: [
                        (0, h.tZ)(c.View, {
                          className: "label",
                          children: "降",
                        }),
                        T[0].list.map(function (e, t) {
                          return (0, h.tZ)(
                            c.View,
                            {
                              className: "cont ".concat(
                                e.selected ? "cur" : ""
                              ),
                              id: "AcCO",
                              onClick: function () {
                                return y(t, i, w);
                              },
                              children: e.shortTitle,
                            },
                            "index"
                          );
                        }),
                      ],
                    }),
                ],
              })
            );
          }),
          x = 48,
          V = function (e) {
            return f()(e).format("MM-DD");
          };
        var v = r.default.memo(function (e) {
            var t = e.type,
              i = e.date,
              a = e.dateList,
              s = e.onDateChange,
              o = e.toCalendar,
              d = (0, r.useRef)(0),
              u = (0, r.useState)(""),
              f = (0, n.Z)(u, 2),
              p = f[0],
              N = f[1];
            (0, r.useEffect)(
              function () {
                var e = a.findIndex(function (e) {
                  return m.Z.isSameDay(e.date, i);
                });
                N(
                  (function (e, t, i) {
                    var n = t.findIndex(function (t) {
                      return m.Z.isSameDay(t.date, e);
                    });
                    return "".concat(i, "-").concat(0 == n ? n : n - 1);
                  })(i, a, t)
                ),
                  (d.current = 0 === e ? 0 : x * (e - 1) + 2);
              },
              [i, a, t]
            ),
              (0, r.useEffect)(
                function () {
                  l()
                    .createSelectorQuery()
                    .select("#head-wrap >>> #".concat(t, "-0"))
                    .boundingClientRect(function (e) {
                      var t = (e || {}).width;
                      x = t ? t + 4 : x;
                    })
                    .exec();
                },
                [i]
              );
            var g = function (e) {
              var i = e.idx,
                n = e.data,
                a = e.selected;
              return (0, h.BX)(c.View, {
                id: "".concat(t, "-").concat(i),
                className: "date-item ".concat(a ? "selected" : ""),
                onClick: function () {
                  return (function (e) {
                    null == s || s(e.date, t);
                  })(n);
                },
                children: [
                  (0, h.tZ)(c.View, { className: "date", children: V(n.date) }),
                  (0, h.tZ)(c.View, {
                    className: "day-type",
                    children: n.desc,
                  }),
                ],
              });
            };
            return (0, h.tZ)(c.CustomWrapper, {
              children: (0, h.BX)(c.View, {
                className: "date-selector flex-align-items-center",
                children: [
                  (0, h.tZ)(c.View, {
                    className: "date-selector-wrap flex-1",
                    children: (0, h.tZ)(c.ScrollView, {
                      scrollX: !0,
                      scrollLeft: d.current,
                      scrollIntoView: p,
                      scrollWithAnimation: !0,
                      className: "date-list",
                      children: a.map(function (e, t) {
                        return (0,
                        h.tZ)(g, { idx: t, data: e, selected: m.Z.isSameDay(e.date, i) }, t);
                      }),
                    }),
                  }),
                  (0, h.tZ)(c.View, {
                    className: "calendar-btn flex-center",
                    id: "AcCf",
                    onClick: function () {
                      o(t);
                    },
                    children: (0, h.tZ)(c.Text, {
                      className: "iconfont2 ifont2-calendar",
                    }),
                  }),
                ],
              }),
            });
          }),
          T = i(79910);
        var C = r.default.memo(function (e) {
            var t = e.type,
              i = e.priceSort,
              a = e.timeSort,
              l = e.orderType,
              o = e.onSortAction,
              d = (0, r.useState)("price"),
              m = (0, n.Z)(d, 2),
              u = m[0],
              f = m[1],
              p = (0, r.useState)("价格排序"),
              N = (0, n.Z)(p, 2),
              g = N[0],
              w = N[1],
              Z = (0, r.useState)("时间排序"),
              x = (0, n.Z)(Z, 2),
              V = x[0],
              v = x[1];
            (0, r.useEffect)(
              function () {
                f(l);
              },
              [l]
            ),
              (0, r.useEffect)(
                function () {
                  "price" === l
                    ? (w("ascend" === i ? "价格低-高" : "价格高-低"),
                      v("时间排序"))
                    : "time" === l &&
                      (v("ascend" === a ? "时间早-晚" : "时间晚-早"),
                      w("价格排序"));
                },
                [i, a, l]
              );
            var C = {
                transform: "translateX(".concat(
                  "price" === u ? "0" : "100",
                  "%)"
                ),
              },
              y = T.Z.debounce(function (e) {
                o(e), f(e.sort);
              }, 200);
            return (0, h.BX)(c.View, {
              className: "flt-roundtrip-sort-nav",
              children: [
                (0, h.BX)(c.View, {
                  className: "nav-list flex",
                  children: [
                    (0, h.tZ)(c.View, {
                      className: "nav-item flex-1 flex-center ".concat(
                        "price" === u ? "cur" : ""
                      ),
                      id: "AcCh",
                      onClick: function () {
                        return y({ type: t, sort: "price" });
                      },
                      children: g,
                    }),
                    (0, h.tZ)(c.View, {
                      className: "nav-item flex-1 flex-center ".concat(
                        "time" === u ? "cur" : ""
                      ),
                      id: "AcCi",
                      onClick: function () {
                        return y({ type: t, sort: "time" });
                      },
                      children: V,
                    }),
                  ],
                }),
                (0, h.tZ)(c.View, {
                  className: "scroll-bar",
                  style: C,
                  children: (0, h.tZ)(c.View, {
                    className: "scroller ".concat(s.default.zxTyStr),
                  }),
                }),
              ],
            });
          }),
          y = 0,
          B = function (e) {
            return ""
              .concat(f()(e).format("M月DD日"), " ")
              .concat(m.Z.getWeekDayDesc(e));
          };
        var X = r.default.memo(function (e) {
          var t = e.type,
            i = e.date,
            a = e.dateList,
            m = void 0 === a ? [] : a,
            u = e.list,
            f = void 0 === u ? [] : u,
            N = e.transferList,
            g = void 0 === N ? [] : N,
            w = e.skeletonShow,
            x = e.scrollListHeight,
            V = e.handleFlightClick,
            T = e.toCalendar,
            X = e.orderType,
            b = e.priceSort,
            A = e.timeSort,
            S = e.onSortAction,
            k = e.onListScroll,
            I = e.selectedData,
            D = void 0 === I ? {} : I,
            z = e.cityData,
            _ = e.title,
            P = e.isClear,
            F = e.filterOpts,
            H = void 0 === F ? [] : F,
            M = e.filterSelected,
            R = e.handleResetAirpot,
            O = e.onDateChange,
            Y = (0, r.useState)(!1),
            L = (0, n.Z)(Y, 2),
            E = L[0],
            U = L[1],
            W = (0, r.useState)(!0),
            J = (0, n.Z)(W, 2),
            j = J[0],
            G = J[1],
            K = (0, r.useState)(!1),
            Q = (0, n.Z)(K, 2),
            q = Q[0],
            $ = Q[1],
            ee = (0, r.useState)(""),
            te = (0, n.Z)(ee, 2),
            ie = te[0],
            ne = te[1],
            ce = D.flightAirName,
            ae = D.flightTime,
            le = D.pirce,
            re = null != g && g.length ? g : null,
            se = !f.length && !g.length && !w,
            oe = { height: "".concat(x, "px") },
            de = (0, d.Z)({
              selector: "#".concat(t, "-list-wrap"),
              targetSelector: "#".concat(
                t,
                "-list-wrap >>> .flight-round-multi-list-item .item.cur"
              ),
              observeCallback: function (e) {
                e.intersectionRatio > 0 ? U(!1) : w || U(!0);
              },
              callbackDeps: [w],
            });
          (0, r.useEffect)(
            function () {
              var e = !!H.filter(function (e) {
                return (
                  ("dptACode" === e.prop || "arrACode" === e.prop) &&
                  e.active &&
                  e.list.length > 1
                );
              }).length;
              $(e), "return" === t && ne(0);
            },
            [H]
          ),
            (P || se) && G(!0),
            (0, r.useEffect)(
              function () {
                U(!1),
                  l().nextTick(function () {
                    ne(0);
                  }),
                  console.log("---type---", t);
              },
              [f, re]
            );
          var me = function (e) {
              V && V(e), ("depart" === t || "return" === t) && ne(0);
            },
            ue = {
              enhanced: !0,
              bounces: !1,
              showScrollbar: !1,
              scrollY: !w,
              style: oe,
              upperThreshold: 15,
              lowerThreshold: 500,
              scrollTop: ie,
              onScroll: function (e) {
                var t = (e.detail || {}).deltaY;
                Math.sign(y) === Math.sign(t)
                  ? !t ||
                    Math.abs(t) <= 15 ||
                    (t < 0 && j ? G(!1) : t > 0 && !j && G(!0),
                    (y = t),
                    null == k || k(e))
                  : (y = t);
              },
              onScrollToUpper: function () {
                j || G(!0);
              },
            };
          return (0, h.tZ)(c.View, {
            className: "flight-round-multi-list",
            children: (0, h.BX)(c.View, {
              className: "flt-round-list-wrap flex flex-column ".concat(
                s.default.isTieyou ? "ty" : "zx"
              ),
              children: [
                (0, h.BX)(c.View, {
                  id: "head-wrap",
                  className: j ? "" : "hide",
                  children: [
                    (0, h.BX)(c.View, {
                      className: "roundtrip-top bgcolor-primary",
                      id: "AcCj",
                      onClick: function () {
                        T && T();
                      },
                      children: [
                        (0, h.BX)(c.View, {
                          className: "tit flex-1 flex-align-items-center",
                          children: [
                            _,
                            !j &&
                              (0, h.tZ)(c.View, {
                                className: "date flex-1",
                                children: B(i),
                              }),
                          ],
                        }),
                        z &&
                          (0, h.tZ)(c.View, { className: "city", children: z }),
                      ],
                    }),
                    (0, h.BX)(c.View, {
                      className: "hide-wrap ".concat(j ? "" : "hide"),
                      children: [
                        (0, h.tZ)(v, {
                          type: t,
                          date: i,
                          dateList: m,
                          onDateChange: O,
                          toCalendar: T,
                        }),
                        (0, h.tZ)(C, {
                          type: t,
                          priceSort: b,
                          timeSort: A,
                          orderType: X,
                          onSortAction: S,
                        }),
                      ],
                    }),
                    (!P || !se) &&
                      (0, h.BX)(c.View, {
                        className: "roundtrip-selected ".concat(
                          E ? "show" : ""
                        ),
                        children: [
                          (0, h.tZ)(c.View, {
                            className: "label",
                            children: "已选",
                          }),
                          (0, h.tZ)(c.View, {
                            className: "cont flex-1",
                            children: "".concat(ce, " ").concat(ae),
                          }),
                          (0, h.tZ)(c.View, {
                            className: "price color-red",
                            children: le,
                          }),
                        ],
                      }),
                  ],
                }),
                P
                  ? null
                  : (0, h.BX)(c.View, {
                      id: "".concat(t, "-list-wrap"),
                      className: "roundtrip-list ".concat(w ? "loading" : ""),
                      children: [
                        w &&
                          (0, h.tZ)(c.View, {
                            className: "skeleton-wrap",
                            children: Array(7)
                              .fill(1)
                              .map(function () {
                                return (0,
                                h.tZ)(c.View, { className: "loading", children: (0, h.tZ)(c.View, { className: "img-loading" }) }, "index");
                              }),
                          }),
                        (0, h.tZ)(o.ZtVirtualList, {
                          className: "list-direct",
                          listId: "".concat(t, "-selector"),
                          list: f,
                          onRender: function (e, i) {
                            var n = "".concat(_, "机场筛选");
                            return se
                              ? null
                              : (0, h.BX)(h.HY, {
                                  children: [
                                    q &&
                                      0 === i &&
                                      (0, h.tZ)(Z, {
                                        className: "first-filter-child",
                                        title: n,
                                        type: t,
                                        filterOpts: H,
                                        filterSelected: M,
                                        isFilterAirport: q,
                                        handleResetAirpot: R,
                                      }),
                                    !q &&
                                      f.length > 10 &&
                                      4 === i &&
                                      (0, h.tZ)(Z, {
                                        title: n,
                                        type: t,
                                        filterOpts: H,
                                        filterSelected: M,
                                        isFilterAirport: q,
                                        handleResetAirpot: R,
                                      }),
                                    (0, h.tZ)(p, {
                                      data: e,
                                      flightClick: function () {
                                        return me({
                                          item: e,
                                          type: t,
                                          index: i,
                                        });
                                      },
                                      index: i,
                                      type: t,
                                      ref: function (t) {
                                        e.selected && de(t);
                                      },
                                    }),
                                  ],
                                });
                          },
                          scrollViewProps: ue,
                          onRenderBottom: function () {
                            return (0, h.BX)(h.HY, {
                              children: [
                                null != g && g.length
                                  ? (0, h.BX)(c.View, {
                                      className: "list-trans",
                                      children: [
                                        (0, h.tZ)(c.View, {
                                          className: "htit",
                                          children: "更多中转航班",
                                        }),
                                        g.map(function (e, i) {
                                          return (0, h.tZ)(
                                            p,
                                            {
                                              isTransfer: !0,
                                              data: e,
                                              flightClick: function () {
                                                return me({
                                                  item: e,
                                                  type: t,
                                                  index: i,
                                                });
                                              },
                                              index: i,
                                              type: t,
                                              ref: function (t) {
                                                e.selected && de(t);
                                              },
                                            },
                                            e.token
                                          );
                                        }),
                                      ],
                                    })
                                  : null,
                                !se &&
                                  (0, h.tZ)(c.View, {
                                    className: "list-more",
                                    children: "没有更多了~",
                                  }),
                                se &&
                                  "return" === t &&
                                  (0, h.BX)(c.View, {
                                    className: "list-none",
                                    children: [
                                      (0, h.tZ)(c.Icon, {
                                        className: "icon-none",
                                      }),
                                      (0, h.tZ)(c.View, {
                                        className: "tit",
                                        children: "暂无内容",
                                      }),
                                      (0, h.tZ)(c.View, {
                                        className: "txt",
                                        children: "该筛选条件下无航班",
                                      }),
                                    ],
                                  }),
                              ],
                            });
                          },
                          autoScrollTop: !1,
                        }),
                      ],
                    }),
              ],
            }),
          });
        });
      },
      44184: function (e, t, i) {
        var n = i(52500),
          c = i(71515),
          a = i(48813);
        t.Z = n.default.memo(function (e) {
          var t = e.className;
          return (0, a.tZ)(c.View, {
            className: "single-flight-skeleton-container ".concat(t || ""),
            catchMove: !0,
            children: Array(7)
              .fill(0)
              .map(function (e, t) {
                return (0,
                a.BX)(c.View, { className: "skeleton-item", children: [(0, a.BX)(c.View, { className: "bd", children: [(0, a.BX)(c.View, { className: "place", children: [(0, a.tZ)(c.View, { className: "title" }), (0, a.tZ)(c.View, { className: "desc" })] }), (0, a.tZ)(c.View, { className: "division" }), (0, a.BX)(c.View, { className: "place", children: [(0, a.tZ)(c.View, { className: "title" }), (0, a.tZ)(c.View, { className: "desc" })] }), (0, a.BX)(c.View, { className: "price", children: [(0, a.tZ)(c.View, { className: "title" }), (0, a.tZ)(c.View, { className: "desc" })] })] }), (0, a.tZ)(c.View, { className: "hd", children: (0, a.tZ)(c.View, { className: "desc" }) })] }, t);
              }),
          });
        });
      },
      46260: function (e, t, i) {
        i.d(t, {
          Q: function () {
            return N;
          },
        });
        var n = i(52500),
          c = i(71515),
          a = i(49120),
          l = (i(92954), i(79792)),
          r = i(9062),
          s = i(34229),
          o = i(45245),
          d = i(48813);
        var m = n.default.memo(function (e) {
          var t = e.flight,
            i = void 0 === t ? {} : t,
            n = e.transferOrange,
            a = e.roundOrange,
            l = e.flightIndex,
            s = e.fromPage,
            m = e.initDate,
            u = i.airIcon,
            f = i.airName,
            h = i.actAirName,
            p = i.actFlightNo,
            N = i.shared,
            g = i.flightNo,
            w = i.dptTimeStr,
            Z = i.dptTrm,
            x = i.dptAName,
            V = i.dptMonthDay,
            v = i.arrMonthDay,
            T = i.arrTimeStr,
            C = i.arrAName,
            y = i.arrTrm,
            B = i.planeType,
            X = i.punctuality,
            b = i.mealType,
            A = i.dtlsStr,
            S = "".concat(x || "").concat(Z || ""),
            k = "".concat(C || "").concat(y || ""),
            I = "".concat(f).concat(g),
            D = h ? "实际承运:".concat(h).concat(p) : null;
          return (0, d.BX)(c.View, {
            className: "flight-modify-vertical",
            children: [
              (0, d.BX)(c.View, {
                className: "".concat(A ? "stop-lbox" : "lbox"),
                children: [
                  V !== m &&
                    (0, d.tZ)(c.View, {
                      className: "start-date color-orange",
                      children: V,
                    }),
                  (0, d.tZ)(c.View, { className: "time", children: w }),
                  v !== m &&
                    (0, d.tZ)(c.View, {
                      className: "date color-orange",
                      children: v,
                    }),
                  (0, d.tZ)(c.View, { className: "time", children: T }),
                ],
              }),
              (0, d.BX)(c.View, {
                className: "".concat(A ? "stop-cont" : "cont"),
                children: [
                  (0, d.tZ)(c.View, {
                    className: "station",
                    children:
                      a && 0 === l
                        ? (0, d.BX)(c.Text, {
                            className: "color-orange",
                            children: [x || "", Z || ""],
                          })
                        : n
                        ? (0, d.BX)(d.HY, {
                            children: [
                              x || "",
                              (0, d.tZ)(c.Text, {
                                className: "color-orange",
                                children: Z || "",
                              }),
                            ],
                          })
                        : S,
                  }),
                  A &&
                    (0, d.tZ)(c.View, {
                      className: "mid",
                      children: (0, d.tZ)(c.Text, {
                        className: "jinting",
                        children: A,
                      }),
                    }),
                  (0, d.tZ)(c.View, {
                    className: "station",
                    children:
                      a && 1 === l
                        ? (0, d.BX)(c.Text, {
                            className: "color-orange",
                            children: [C || "", y || ""],
                          })
                        : k,
                  }),
                ],
              }),
              (0, d.BX)(c.View, {
                className: "rbox",
                id: "AcCW",
                onClick: function () {
                  return o.Z.toAircraftInfo(i);
                },
                children: [
                  (0, d.BX)(c.View, {
                    className: "txt",
                    children: [
                      (0, d.tZ)(c.Image, { src: u, className: "logo" }),
                      (0, d.tZ)(c.Text, {
                        style: { whiteSpace: "pre-wrap" },
                        children: I,
                      }),
                    ],
                  }),
                  (0, d.BX)(c.View, {
                    className: "txt",
                    children: [
                      N && D ? D + "\n" : "",
                      B || "",
                      X ? "\n" : "",
                      X || "",
                      (0, d.tZ)(c.Text, {
                        className: "ifont-arr iconfont ".concat(
                          s === r.NU.bookx ? "" : "hidden"
                        ),
                      }),
                    ],
                  }),
                  b && (0, d.tZ)(c.View, { className: "txt", children: b }),
                ],
              }),
            ],
          });
        });
        var u = n.default.memo(function (e) {
            var t = e.flight,
              i = void 0 === t ? {} : t,
              n = e.roundOrange,
              a = e.segmentIndex,
              l = e.fromPage,
              s = i.dptTimeStr,
              m = i.dptTrm,
              u = i.dptAName,
              f = i.arrMonthDay,
              h = i.arrTimeStr,
              p = i.arrAName,
              N = i.arrTrm,
              g = i.planeType,
              w = i.punctuality,
              Z = i.mealType,
              x = i.dtlsStr,
              V = i.ct,
              v = i.dptMonthDay,
              T = "".concat(u || "").concat(m || ""),
              C = "".concat(p || "").concat(N || "");
            return (0, d.BX)(c.View, {
              className: "flight-modify-direct",
              children: [
                (0, d.BX)(c.View, {
                  className: "from",
                  children: [
                    (0, d.tZ)(c.View, { className: "time", children: s }),
                    (0, d.tZ)(c.View, {
                      className: "station",
                      children:
                        0 === a && n
                          ? (0, d.BX)(c.Text, {
                              className: "color-orange",
                              children: [u || "", m || ""],
                            })
                          : T,
                    }),
                  ],
                }),
                (0, d.BX)(c.View, {
                  className: "mid",
                  children: [
                    (0, d.tZ)(c.Icon, { className: "icon-fromto" }),
                    x &&
                      (0, d.tZ)(c.View, { className: "jingting", children: x }),
                  ],
                }),
                (0, d.BX)(c.View, {
                  className: "to",
                  children: [
                    v !== f &&
                      f &&
                      (0, d.tZ)(c.View, {
                        className: "date color-orange",
                        children: f,
                      }),
                    (0, d.tZ)(c.View, { className: "time", children: h }),
                    (0, d.tZ)(c.View, {
                      className: "station",
                      children:
                        1 === a && n
                          ? (0, d.BX)(c.Text, {
                              className: "color-orange",
                              children: [p || "", N || ""],
                            })
                          : C,
                    }),
                  ],
                }),
                (0, d.BX)(c.View, {
                  className: "info",
                  id: "AcCV",
                  onClick: function () {
                    return o.Z.toAircraftInfo(i);
                  },
                  children: [
                    V &&
                      (0, d.BX)(c.Text, {
                        className: "item",
                        children: ["共", V],
                      }),
                    g && (0, d.tZ)(c.Text, { className: "item", children: g }),
                    w && (0, d.tZ)(c.Text, { className: "item", children: w }),
                    Z && (0, d.tZ)(c.Text, { className: "item", children: Z }),
                    l === r.NU.bookx &&
                      (0, d.tZ)(c.Text, { className: "ifont-arr iconfont" }),
                  ],
                }),
              ],
            });
          }),
          f = l.default.isTieyou;
        var h = n.default.memo(function (e) {
            var t = e.segments,
              i = void 0 === t ? [] : t,
              n = e.tripType,
              a = e.tripTips,
              l = e.toTransferTip,
              o = e.className,
              h = void 0 === o ? "" : o,
              p = e.fromPage,
              N = e.toggleTripTip,
              g = function (e) {
                l && l(e);
              };
            return (0, d.tZ)(c.View, {
              className: "flight-flight-segment flex-1 flex flex-column",
              children: (0, d.tZ)(c.ScrollView, {
                scrollY: !0,
                className: "flex-1 white-box modify-box "
                  .concat(f ? "ty" : "zx", " ")
                  .concat(h),
                children: (0, d.BX)(c.View, {
                  className: "scroll-view-box",
                  children: [
                    i &&
                      i.map(function (e, t) {
                        return (0, d.tZ)(d.HY, {
                          children:
                            e.flights &&
                            e.flights.map(function (a, l) {
                              var s = a.airIcon,
                                o = a.airName,
                                f = a.flightNo,
                                h = a.dptMonthDay,
                                N = a.dptWeekDay,
                                w = a.actAirName,
                                Z = a.actFlightNo,
                                x = a.actAirIcon,
                                V = a.ct,
                                v = "".concat(o || "").concat(f || ""),
                                T = !1,
                                C = !1;
                              if (
                                (e.flights.length > 1 &&
                                  (T =
                                    e.flights[0].arrTrm !==
                                    e.flights[1].dptTrm),
                                p === r.NU.bookx &&
                                  !e.dtls &&
                                  n === r.zM.round &&
                                  i.length > 1)
                              ) {
                                var y = i[0].flights[0],
                                  B = i[1].flights[0];
                                C =
                                  y.dptAName !== B.arrAName ||
                                  y.dptTrm !== B.arrTrm;
                              }
                              var X =
                                (e.flights.length &&
                                  e.flights[0].dptMonthDay) ||
                                "";
                              return (0, d.BX)(d.HY, {
                                children: [
                                  0 === l &&
                                    (0, d.BX)(c.View, {
                                      className: "modify-hd",
                                      children: [
                                        n === r.zM.multi &&
                                          (0, d.tZ)(c.View, {
                                            className: "tag bgcolor-primary",
                                            children:
                                              1 === t ? "第2程" : "第1程",
                                          }),
                                        n === r.zM.round &&
                                          (0, d.tZ)(c.View, {
                                            className: "tag bgcolor-primary",
                                            children: 1 === t ? "返程" : "去程",
                                          }),
                                        n === r.zM.transfer &&
                                          0 === l &&
                                          (0, d.tZ)(c.View, {
                                            className: "tag bgcolor-primary",
                                            children: "中转",
                                          }),
                                        !e.dtls &&
                                          (0, d.BX)(c.View, {
                                            className: "cont",
                                            children: [
                                              (0, d.BX)(c.View, {
                                                className: "txt",
                                                children: [
                                                  (0, d.tZ)(c.Image, {
                                                    src: s,
                                                    className: "logo",
                                                  }),
                                                  ""
                                                    .concat(v || "", "  ")
                                                    .concat(h || "", "  ")
                                                    .concat(N || ""),
                                                ],
                                              }),
                                              a.shared &&
                                                p === r.NU.bookx &&
                                                (0, d.BX)(c.View, {
                                                  className: "txt",
                                                  children: [
                                                    (0, d.tZ)(c.Text, {
                                                      className:
                                                        "ifont-carrier iconfont",
                                                    }),
                                                    "实际承运：",
                                                    (0, d.tZ)(c.Image, {
                                                      src: x,
                                                      className: "logo",
                                                    }),
                                                    "".concat(w).concat(Z),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        e.dtls &&
                                          (0, d.BX)(c.View, {
                                            className: "cont",
                                            children: [
                                              p !== r.NU.bookx &&
                                                (0, d.tZ)(c.Text, {
                                                  className: "txt city-name",
                                                  children: ""
                                                    .concat(e.dptName, "-")
                                                    .concat(e.arrName),
                                                }),
                                              (0, d.tZ)(c.View, {
                                                className: "txt",
                                                children: ""
                                                  .concat(h || "", "  ")
                                                  .concat(N || "", "  ")
                                                  .concat(
                                                    V ? "共".concat(e.ct) : ""
                                                  ),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  !e.dtls &&
                                    (0, d.tZ)(u, {
                                      flight: a,
                                      roundOrange: C,
                                      segmentIndex: t,
                                      fromPage: p,
                                    }),
                                  e.dtls &&
                                    (0, d.BX)(d.HY, {
                                      children: [
                                        0 === l &&
                                          (0, d.BX)(d.HY, {
                                            children: [
                                              (0, d.tZ)(m, {
                                                flight: a,
                                                roundOrange: C,
                                                flightIndex: l,
                                                fromPage: p,
                                                initDate: X,
                                              }),
                                              e.dtls && e.dtls.length
                                                ? (0, d.BX)(c.View, {
                                                    className: "modify-transit",
                                                    id: "AcCX",
                                                    onClick: function () {
                                                      return g({
                                                        title: e.nfyt,
                                                        content: e.nfyc,
                                                      });
                                                    },
                                                    children: [
                                                      (0, d.tZ)(c.View, {
                                                        className: "tit",
                                                      }),
                                                      (0, d.tZ)(c.View, {
                                                        className: "cont",
                                                        children:
                                                          e.dtls[0] || "中转",
                                                      }),
                                                      (0, d.BX)(c.View, {
                                                        className:
                                                          "rbox color-primary",
                                                        children: [
                                                          e.nfyt || "",
                                                          " ",
                                                          e.nfyt &&
                                                            (0, d.tZ)(c.Text, {
                                                              className:
                                                                "ifont-arr iconfont",
                                                            }),
                                                        ],
                                                      }),
                                                    ],
                                                  })
                                                : null,
                                            ],
                                          }),
                                        1 === l &&
                                          (0, d.tZ)(m, {
                                            flight: a,
                                            transferOrange: T,
                                            roundOrange: C,
                                            flightIndex: l,
                                            tripType: n,
                                            initDate: X,
                                            fromPage: p,
                                          }),
                                      ],
                                    }),
                                ],
                              });
                            }),
                        });
                      }),
                    a &&
                      (0, d.tZ)(c.View, {
                        className: "modify-tips",
                        children: (0, d.tZ)(s.ZtRichText, {
                          nodes: a.textOverflow
                            ? a.showAll
                              ? a.originTxt
                              : a.combinedTxt
                            : a.originTxt,
                          id: "AcCY",
                          onClick: function () {
                            N && N();
                          },
                        }),
                      }),
                  ],
                }),
              }),
            });
          }),
          p = function (e) {
            var t = e.tripType,
              i = e.segments,
              n = e.fromPage;
            return (0, d.tZ)(c.View, {
              className: "trip-detail-cont",
              children: (0, d.tZ)(h, { tripType: t, segments: i, fromPage: n }),
            });
          },
          N = function (e) {
            var t,
              i = e.tripType,
              n = e.segments,
              c = e.fromPage,
              l = e.onDetailClose;
            null === (t = (0, a.getCurrentPage)()) ||
              void 0 === t ||
              t.showCommonDrawer({
                title: "航班详情",
                className: "trip-detail-drawer",
                content: function () {
                  return (0, d.tZ)(p, {
                    tripType: i,
                    segments: n,
                    fromPage: c,
                  });
                },
                beforeClose: function () {
                  null == l || l();
                },
              });
          };
      },
    },
  ]);
})();
