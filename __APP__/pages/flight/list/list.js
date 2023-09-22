!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/87dd7ca508f26cc44a96a97518946752.js"),
    require("../sub-common/1775d7c9f65b9a6f532fd61b25d0faaf.js"),
    require("../sub-common/99e1f8a4cc1290fc72ce9bc5d2852868.js"),
    require("../sub-common/77d3751beb3e2bc1242396ba7c218030.js"),
    require("../sub-common/1bc3053f48eb4d260bc28c0ff4efae15.js"),
    require("../sub-common/d33d0bff6905d6dc3872ed0c9fa55a20.js"),
    require("../sub-common/2e920853f1c2d7667026c4d194b5bc40.js"),
    require("../sub-common/b4b623867ae0351b46b8de2fb5023ee1.js"),
    require("../sub-common/7b0b71c08bce3cba294d717f8dd1e5c5.js"),
    require("../sub-common/d95d6e4c08de6037c2a3a34879bb09fe.js"),
    require("../sub-common/29561a292c88799a0a8f07ef3d700162.js"),
    require("../sub-common/41f6ac4c475c9f86a853fca751589060.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [25600],
      {
        10410: function (e, t, i) {
          var a = i(32180),
            r = i(298),
            n = i(57042),
            s = i(24460),
            l = i(81876),
            o = i(21867),
            c = i(86066),
            d = i(45023),
            h = i(52500),
            m = i(71515),
            u = i(92954),
            f = i.n(u),
            p = i(34229),
            g = i(81957),
            y = i(8271),
            N = i.n(y),
            v = i(3205),
            T = i(17377),
            w = i(79792),
            Z = i(18783),
            C = i(20592),
            b = i(49120),
            x = i(2326),
            S = i(79910),
            B = i(55916),
            k = i(21999),
            _ = i(70352),
            F = i(94383),
            V = i(2481),
            P = i(2576),
            X = i(24383),
            D = i(92603),
            L = i(79846),
            I = i(12396),
            H = i(82083),
            A = i(9062),
            q = i(59086),
            R = i(85377),
            z = i(45245),
            M = i(13975),
            E = i(44184),
            j = i(90129),
            Y = i(90983),
            U = i(91006),
            K = i.n(U),
            O = i(48813),
            W = function (e) {
              var t = e.singles,
                i = e.transfers,
                a = e.filterList,
                n = e.filterParams,
                s = e.setFilterParams,
                l = (function (e) {
                  var t = e.singles,
                    i = e.transfers,
                    a = e.filterList,
                    r = e.onlySingles,
                    n = x.Z.filterNewList(t, i, a),
                    s = n.straight,
                    l = n.transfer;
                  return r ? s.length : s.length + l.length;
                })({
                  singles: t,
                  transfers: i,
                  filterList: a,
                  onlySingles: n.onlySingles,
                });
              s((0, r.Z)((0, r.Z)({}, n), {}, { filterFlightNumber: l }));
            },
            J = function (e) {
              var t,
                i,
                a = e.visible,
                n = e.filterParamsInit,
                s = e.filterListInit,
                l = e.selectedFiltersInit,
                o = e.singles,
                c = e.transfers,
                d = e.onClose,
                u = e.confirmFilter,
                f = (0, h.useState)(n),
                p = (0, j.Z)(f, 2),
                g = p[0],
                y = p[1],
                N = (0, h.useState)(s),
                v = (0, j.Z)(N, 2),
                T = v[0],
                Z = v[1],
                C = (0, h.useState)(l),
                x = (0, j.Z)(C, 2),
                S = x[0],
                B = x[1];
              (0, h.useLayoutEffect)(
                function () {
                  a &&
                    (Z(s),
                    B(l),
                    W({
                      filterParams: n,
                      singles: o,
                      transfers: c,
                      filterList: s,
                      setFilterParams: y,
                    }));
                },
                [a]
              );
              var k = g.filterFlightNumber,
                _ = g.filterIndex,
                F = g.onlySingles,
                V = g.expandSharedFlight,
                P = function (e) {
                  var t = e.index;
                  e.disabled ||
                    (function (e) {
                      var t = e.index,
                        i = e.filterIndex,
                        a = e.filterList,
                        r = e.setFilterList,
                        n = e.selectedFilters,
                        s = e.setSelectedFilters,
                        l = a[i].list[t].selected;
                      if (((a[i].list[t].selected = !l), l)) {
                        var o = n.findIndex(function (e) {
                          return e.title === a[i].list[t].title;
                        });
                        o > -1 && n.splice(o, 1);
                      } else
                        n.push({
                          key: a[i].list[t].key,
                          title: a[i].list[t].title,
                          code: a[i].list[t].code,
                        });
                      0 ===
                      a[i].list.filter(function (e) {
                        return e.selected;
                      }).length
                        ? (a[i].active = !1)
                        : (a[i].active = !0),
                        r(a),
                        s(n),
                        W(e);
                    })({
                      index: t,
                      filterIndex: _,
                      filterList: T,
                      setFilterList: Z,
                      selectedFilters: S,
                      setSelectedFilters: B,
                      singles: o,
                      transfers: c,
                      filterParams: g,
                      setFilterParams: y,
                    });
                },
                X = function (e) {
                  !(function (e) {
                    var t,
                      i = e.index,
                      a = e.filterList,
                      r = e.setFilterList,
                      n = e.selectedFilters,
                      s = e.setSelectedFilters,
                      l = n[i],
                      o = l.key,
                      c = l.code,
                      d = (0, Y.Z)(a);
                    try {
                      for (d.s(); !(t = d.n()).done; ) {
                        var h = t.value;
                        if (h.prop === o) {
                          var m,
                            u = 0,
                            f = (0, Y.Z)(h.list);
                          try {
                            for (f.s(); !(m = f.n()).done; ) {
                              var p = m.value;
                              p.code === c && (p.selected = !1),
                                p.selected && u++;
                            }
                          } catch (e) {
                            f.e(e);
                          } finally {
                            f.f();
                          }
                          0 === u && (h.active = !1);
                        }
                      }
                    } catch (e) {
                      d.e(e);
                    } finally {
                      d.f();
                    }
                    n.splice(i, 1), r(a), s(n), W(e);
                  })({
                    index: e,
                    filterList: T,
                    setFilterList: Z,
                    selectedFilters: S,
                    setSelectedFilters: B,
                    filterParams: g,
                    singles: o,
                    transfers: c,
                    setFilterParams: y,
                  });
                };
              return (0, O.BX)(m.View, {
                className: "pop-filter-box",
                children: [
                  (0, O.BX)(m.View, {
                    className: "pop-filter-hd",
                    children: [
                      (0, O.tZ)(m.Button, {
                        className: "btn-cancel",
                        id: "AcEj",
                        onClick: d,
                        children: "取消",
                      }),
                      (0, O.tZ)(m.View, {
                        className: "tit",
                        children: -1 !== k ? "共" + k + "个航班" : "筛选航班",
                      }),
                      (0, O.tZ)(m.Button, {
                        className: "btn-submit color-primary",
                        id: "AcEk",
                        onClick: function () {
                          if (g.filterFlightNumber <= 0)
                            return (0, b.showToast)("该搜索条件下无航班");
                          d(),
                            u({
                              filterParams: g,
                              filterList: T,
                              selectedFilters: S,
                            });
                        },
                        children: "确定",
                      }),
                    ],
                  }),
                  (0, O.tZ)(m.View, {
                    className: "node-isolate-filter-select",
                    children:
                      (null == S ? void 0 : S.length) > 0 &&
                      (0, O.tZ)(m.ScrollView, {
                        className: "pop-filter-select",
                        scrollY: !0,
                        children: S.map(function (e, t) {
                          return (0, O.BX)(
                            m.View,
                            {
                              className: "item",
                              children: [
                                (0, O.tZ)(m.Text, { children: e.title }),
                                (0, O.tZ)(m.Text, {
                                  className: "icon-del",
                                  id: "AcEl",
                                  onClick: function () {
                                    return X(t);
                                  },
                                  children: "×",
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                  }),
                  (0, O.BX)(m.View, {
                    className: "pop-filter-type " + w.default.zxTyStr,
                    children: [
                      (0, O.BX)(m.View, {
                        className: "item " + (F ? "active" : ""),
                        id: "AcEm",
                        onClick: function () {
                          W({
                            filterParams: (0, r.Z)(
                              (0, r.Z)({}, g),
                              {},
                              { onlySingles: !g.onlySingles }
                            ),
                            singles: o,
                            transfers: c,
                            filterList: T,
                            setFilterParams: y,
                          });
                        },
                        children: [
                          "只看直飞(含经停)",
                          (0, O.tZ)(m.Text, {
                            className:
                              (F ? "ifont-checkboxed" : "ifont-checkbox") +
                              "  iconfont",
                          }),
                        ],
                      }),
                      (0, O.BX)(m.View, {
                        className: "item " + (V ? "active" : ""),
                        id: "AcEn",
                        onClick: function () {
                          W({
                            filterParams: (0, r.Z)(
                              (0, r.Z)({}, g),
                              {},
                              { expandSharedFlight: !g.expandSharedFlight }
                            ),
                            singles: o,
                            transfers: c,
                            filterList: T,
                            setFilterParams: y,
                          });
                        },
                        children: [
                          "展开共享航班",
                          (0, O.tZ)(m.Text, {
                            className:
                              (V ? "ifont-checkboxed" : "ifont-checkbox") +
                              "  iconfont",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, O.BX)(m.View, {
                    className: "pop-filter-bd " + w.default.zxTyStr,
                    children: [
                      (0, O.tZ)(m.View, {
                        className: "lbox",
                        children: T.map(function (e, t) {
                          return (0, O.BX)(
                            m.View,
                            {
                              className:
                                "item " +
                                (_ === t ? "cur" : "") +
                                " " +
                                (T[t].active ? "active" : ""),
                              id: "AcEo",
                              onClick: function () {
                                return (function (e) {
                                  e != g.filterIndex &&
                                    y(
                                      (0, r.Z)(
                                        (0, r.Z)({}, g),
                                        {},
                                        { filterIndex: e }
                                      )
                                    );
                                })(t);
                              },
                              children: [
                                e.name,
                                T[t].active &&
                                  (0, O.tZ)(m.Icon, {
                                    className: "i-dot bgcolor-primary",
                                  }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                      (0, O.tZ)(m.View, {
                        className: "rbox",
                        children:
                          null == T ||
                          null === (t = T[_]) ||
                          void 0 === t ||
                          null === (i = t.list) ||
                          void 0 === i
                            ? void 0
                            : i.map(function (e, t) {
                                return (0, O.BX)(
                                  m.View,
                                  {
                                    className:
                                      "item " +
                                      (e.selected ? "color-primary" : "") +
                                      " " +
                                      (e.disabled ? "disabled" : ""),
                                    id: "AcEp",
                                    onClick: function () {
                                      return P({
                                        index: t,
                                        disabled: e.disabled,
                                      });
                                    },
                                    children: [
                                      e.icon &&
                                        (0, O.tZ)(m.Image, {
                                          className: "airline_logo",
                                          src: e.icon,
                                        }),
                                      e.title,
                                      (0, O.tZ)(m.Text, {
                                        className:
                                          (e.selected
                                            ? "ifont-checkboxed"
                                            : "ifont-checkbox") + "  iconfont",
                                      }),
                                    ],
                                  },
                                  t
                                );
                              }),
                      }),
                    ],
                  }),
                ],
              });
            };
          (J.propTypes = {
            visible: K().bool,
            filterParamsInit: K().object,
            filterListInit: K().array,
            singles: K().array,
            transfers: K().array,
            selectedFiltersInit: K().array,
            onClose: K().func,
            confirmFilter: K().func,
          }),
            (J.defaultProps = {
              visible: !1,
              filterParamsInit: {
                filterFlightNumber: 0,
                filterIndex: 0,
                onlySingles: !1,
                expandSharedFlight: !1,
              },
              filterListInit: [],
              singles: [],
              transfers: [],
              selectedFiltersInit: [],
              onClose: function () {},
              confirmFilter: function () {},
            });
          var Q,
            G = function (e) {
              return JSON.parse(JSON.stringify(e));
            },
            $ = i(46408),
            ee = i(25949),
            te = i.n(ee),
            ie = h.default.memo(function (e) {
              var t = e.flight,
                i = t.tag,
                a = t.userPreferenceTag,
                r = t.isFlightHotel,
                n = r
                  ? "https://images3.c-ctrip.com/ztrip/zhixingios/xchengxu/img_list_jijiu@3x.png"
                  : "",
                s = r ? "机酒特惠" : i,
                l = "normal";
              return (
                !s && a && ((s = a), (l = "sptag")),
                s
                  ? (0, O.BX)(m.View, {
                      className: "tag-container flex-center ".concat(
                        "sptag" == l ? "sptag" : ""
                      ),
                      children: [
                        n &&
                          (0, O.tZ)(m.Image, { className: "tag-icon", src: n }),
                        s,
                      ],
                    })
                  : null
              );
            }),
            ae = h.default.memo(function (e) {
              var t,
                i,
                a,
                r,
                n,
                s,
                l,
                o,
                c,
                d,
                u = e.flight,
                g = e.hasChild,
                y = e.hasBaby,
                N = e.parityHidden,
                v = e.isFilter,
                T = e.expandSharedFlight,
                Z = e.pageId,
                C = e.ubtTrace,
                b = e.index,
                x =
                  null === (t = u.sequences) ||
                  void 0 === t ||
                  null === (i = t[0]) ||
                  void 0 === i
                    ? void 0
                    : i.shared,
                S = (u || {}).foldedFlights,
                B = (0, h.useState)(!0),
                k = (0, j.Z)(B, 2),
                _ = k[0],
                F = k[1],
                V = !_ || T,
                P = {
                  ubtKeyName: "FltWSList_FlightList_FlightCard_exposure",
                  data: {
                    PageId: Z,
                    isFlightHotel: null == u ? void 0 : u.isFlightHotel,
                    Tag:
                      null != u && u.isFlightHotel
                        ? null === (a = u.hotel) || void 0 === a
                          ? void 0
                          : a.desc
                        : null == u
                        ? void 0
                        : u.tag,
                    Price: null == u ? void 0 : u.apr,
                    FromDate: null == u ? void 0 : u.dptTime,
                    FromCityName: null == u ? void 0 : u.dptName,
                    ToCityName: null == u ? void 0 : u.arrName,
                    ArriveDate: null == u ? void 0 : u.arrTime,
                    CompareList:
                      null == u || null === (r = u.ota) || void 0 === r
                        ? void 0
                        : r.map(function (e) {
                            return { Key: e.name, Value: e.pr };
                          }),
                    FlightWay: "S",
                    ProductIds:
                      (null == u || null === (n = u.sequences) || void 0 === n
                        ? void 0
                        : n.map(function (e) {
                            return e.flightNo;
                          })) || [],
                  },
                };
              return (0, O.BX)(m.View, {
                id: "flightListItem_list_page_".concat(b),
                className: "fltlist_item ".concat(
                  u.isFlightHotel ? "flight-hotel" : "",
                  " autoExpose"
                ),
                "data-expose": P,
                "data-ubt-key": "xcx_flt_list_click",
                ref: function () {
                  $.Z.refreshObserve(f().getCurrentInstance().page);
                },
                onClick: function () {
                  u.isFlightHotel ||
                    null == C ||
                    C("FltWSList_FlightList_FlightCard_click", P.data),
                    e.handleFlightClick(u);
                },
                children: [
                  u.isFlightHotel
                    ? (0, O.BX)(m.View, {
                        className: "hotel-tag-top flex-align-items-center",
                        children: [
                          (0, O.BX)(m.View, {
                            className: "tag-title",
                            children: [
                              (0, O.tZ)(m.Image, {
                                className: "hotel-icon",
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/xchengxu/icon_jijiu@3x.png",
                              }),
                              "机酒特惠",
                            ],
                          }),
                          (0, O.tZ)(m.View, {
                            className: "hotel-desc",
                            children: (0, O.tZ)(p.ZtRichText, {
                              nodes:
                                null === (s = u.hotel) || void 0 === s
                                  ? void 0
                                  : s.desc,
                              space: "nbsp",
                            }),
                          }),
                        ],
                      })
                    : (0, O.tZ)(ie, { flight: u }),
                  (0, O.BX)(m.View, {
                    className: "flt_intro",
                    children: [
                      (0, O.BX)(m.View, {
                        className: "flt_col",
                        children: [
                          (0, O.BX)(m.View, {
                            className: "flt_depart",
                            children: [
                              (0, O.tZ)(m.Text, {
                                className: "flt_time",
                                children: u.dptTimeStr,
                              }),
                              (0, O.tZ)(m.Text, {
                                className:
                                  "flt_airport " +
                                  (1 === u.cityColor || 3 === u.cityColor
                                    ? "torage"
                                    : ""),
                                children: u.dptAName + u.dptTrm,
                              }),
                            ],
                          }),
                          (0, O.BX)(m.View, {
                            className: "separator",
                            children: [
                              u.abbr &&
                                (0, O.tZ)(m.View, {
                                  className: "spt_type",
                                  children: u.abbr,
                                }),
                              (0, O.tZ)(m.View, { className: "spt_arr" }),
                            ],
                          }),
                          (0, O.BX)(m.View, {
                            className: "flt_arrival",
                            children: [
                              (0, O.tZ)(m.Text, {
                                className: "flt_time",
                                children: u.arrTimeStr,
                              }),
                              (0, O.tZ)(m.Text, {
                                className:
                                  "flt_airport " +
                                  (2 === u.cityColor || 3 === u.cityColor
                                    ? "torage"
                                    : ""),
                                children: u.arrAName + u.arrTrm,
                              }),
                            ],
                          }),
                          u.dayDiff > 0 &&
                            (0, O.tZ)(m.Text, {
                              className: "next",
                              children: "+" + u.dayDiff + "天",
                            }),
                        ],
                      }),
                      (0, O.BX)(m.View, {
                        className: "price_col",
                        children: [
                          (0, O.BX)(m.View, {
                            className: "price",
                            children: [
                              !u.isFlightHotel &&
                                u.stock &&
                                (0, O.tZ)(m.View, {
                                  className: "tag",
                                  children: u.stock,
                                }),
                              (0, O.tZ)(m.Text, {
                                className: "flt_price color-red",
                                children: u.apr,
                              }),
                            ],
                          }),
                          u.isFlightHotel &&
                            (0, O.BX)(m.View, {
                              className: "hotel-price",
                              children: ["+酒店￥", u.hotel.price - u.apr],
                            }),
                          g && y
                            ? (0, O.tZ)(m.Text, {
                                className: "child-price",
                                children: "婴儿:￥" + u.bpr,
                              })
                            : u.ccd &&
                              !u.isFlightHotel &&
                              (0, O.tZ)(m.Text, {
                                className:
                                  "discount-info bdcolor-red color-red",
                                children: u.ccd,
                              }),
                          !g &&
                            !y &&
                            (null === (l = u.ncd) || void 0 === l
                              ? void 0
                              : l.text) &&
                            (0, O.BX)(m.View, {
                              className: "holiday-info bdcolor-red color-red",
                              children: [
                                u.ncd.url &&
                                  (0, O.tZ)(m.Image, {
                                    className: "holiday-img",
                                    src: u.ncd.url,
                                  }),
                                (0, O.tZ)(m.Text, {
                                  className: u.ncd.url ? "" : "lb1",
                                  children: u.ncd.text,
                                }),
                              ],
                            }),
                          u.spTag &&
                            (0, O.tZ)(m.View, {
                              className: "hotel-return",
                              children: u.spTag,
                            }),
                          u.pmt &&
                            (0, O.BX)(m.View, {
                              className: "flt-pmt flex-center ".concat(
                                null !== (o = u.pmt) && void 0 !== o && o.icon
                                  ? ""
                                  : "without-icon"
                              ),
                              children: [
                                !(
                                  null === (c = u.pmt) ||
                                  void 0 === c ||
                                  !c.icon
                                ) &&
                                  (0, O.tZ)(O.HY, {
                                    children: (0, O.tZ)(m.Image, {
                                      className: "flt-pmt-icon",
                                      src: u.pmt.icon || "",
                                      mode: "heightFix",
                                    }),
                                  }),
                                (0, O.tZ)(m.Text, {
                                  className: "flt-pmt-txt",
                                  children: u.pmt.text,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, O.BX)(m.View, {
                    className: "airline_info",
                    children: [
                      (0, O.tZ)(m.Image, {
                        className: "airline_logo",
                        src: u.sequences[0].airIcon,
                      }),
                      (0, O.BX)(m.View, {
                        className: "airline_txt",
                        children: [
                          (0, O.BX)(m.Text, {
                            className: "span",
                            children: [
                              u.sequences[0].airName + u.sequences[0].flightNo,
                              (0, O.tZ)(m.Text, { children: x ? "共享" : "" }),
                            ],
                          }),
                          (0, O.tZ)(m.Text, {
                            className: "span",
                            children:
                              (u.sequences[0].cftn || "") +
                              (u.sequences[0].cfts
                                ? "(" + u.sequences[0].cfts + ")"
                                : ""),
                          }),
                          !u.isFlightHotel &&
                            (0, O.tZ)(m.Text, {
                              className: "span",
                              children: u.costTime,
                            }),
                        ],
                      }),
                      !u.isFlightHotel &&
                        (0, O.BX)(h.default.Fragment, {
                          children: [
                            ((g && !y) || (!g && y)) &&
                              (0, O.tZ)(m.Text, {
                                className: "child-price",
                                children:
                                  (g ? "儿童" : "婴儿") +
                                  ":￥" +
                                  (g ? u.cpr : u.bpr),
                              }),
                            g &&
                              y &&
                              (0, O.tZ)(m.Text, {
                                className: "child-price",
                                children: "儿童:￥" + u.cpr,
                              }),
                            !g &&
                              !y &&
                              u.discount &&
                              (0, O.tZ)(p.ZtRichText, {
                                nodes: u.discount,
                                className: "airline_tips",
                              }),
                          ],
                        }),
                      u.isFlightHotel &&
                        (0, O.tZ)(m.View, {
                          className: "hotel-tag",
                          children: (0, O.tZ)(p.ZtRichText, {
                            nodes:
                              null === (d = u.hotel) || void 0 === d
                                ? void 0
                                : d.tag,
                          }),
                        }),
                    ],
                  }),
                  !u.isFlightHotel &&
                    u.ota &&
                    u.ota.length > 0 &&
                    !N &&
                    (0, O.tZ)(m.View, {
                      className: te()("list-bijia flex-align-items-center", {
                        fold: S.length > 0,
                      }),
                      children: u.ota.map(function (e, t) {
                        return (0,
                        O.tZ)(m.View, { className: "item", children: e.name + (e.pr > 0 ? "￥" + e.pr : "暂无") }, t);
                      }),
                    }),
                  0 !== u.grab &&
                    !v &&
                    (0, O.BX)(m.View, {
                      className: "grab " + (w.default.isTieyou ? "ty" : "zx"),
                      children: [
                        (0, O.BX)(m.View, {
                          className: "txt",
                          children: [
                            "经济舱已售罄，可抢",
                            (0, O.tZ)(m.Text, {
                              className: "color-red",
                              children: "￥" + u.gbpr,
                            }),
                            "全价经济舱",
                          ],
                        }),
                        (0, O.tZ)(m.Button, {
                          className: "btn-grab",
                          children: "抢票",
                        }),
                      ],
                    }),
                  (null == S ? void 0 : S.length) > 0 &&
                    (0, O.BX)(O.HY, {
                      children: [
                        !V &&
                          (0, O.BX)(m.View, {
                            className:
                              "folded-flight-banner flex-align-items-center",
                            id: "AcEr",
                            onClick: function (e) {
                              e.stopPropagation(), F(!1);
                            },
                            children: [
                              (0, O.BX)(m.View, {
                                className:
                                  "flt-icon-list flex-align-items-center",
                                children: [
                                  S.slice(0, 2).map(function (e, t) {
                                    return (0,
                                    O.tZ)(m.Image, { className: "flt-logo", src: e.sequences[0].airIcon, style: { zIndex: t + 1 } }, t);
                                  }),
                                  S.length > 2 &&
                                    (0, O.tZ)(
                                      m.Image,
                                      {
                                        className: "flt-logo more",
                                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/list/icon_hangsi_more@3x.png",
                                        style: { zIndex: 3 },
                                      },
                                      3
                                    ),
                                ],
                              }),
                              (0, O.BX)(m.View, {
                                className: "fold-text flex-1",
                                children: [
                                  "发现",
                                  S.length,
                                  "个共享航班",
                                  x ? "（含主飞）" : "",
                                ],
                              }),
                              (0, O.tZ)(m.Text, {
                                className: "ifont-arrdown2 iconfont",
                              }),
                            ],
                          }),
                        V &&
                          (0, O.tZ)(O.HY, {
                            children: S.map(function (t, i) {
                              var a, r;
                              return (0, O.BX)(
                                m.View,
                                {
                                  className:
                                    "folded-flight-banner flex-align-items-center",
                                  id: "AcEs",
                                  onClick: function (i) {
                                    i.stopPropagation(), e.handleFlightClick(t);
                                  },
                                  children: [
                                    (0, O.BX)(m.View, {
                                      className:
                                        "flex-1 flex-align-items-center",
                                      children: [
                                        (0, O.tZ)(m.Image, {
                                          className: "flt-logo",
                                          src: t.sequences[0].airIcon,
                                        }),
                                        (0, O.BX)(m.View, {
                                          className: "airline_txt",
                                          children: [
                                            (0, O.BX)(m.Text, {
                                              className: "span",
                                              children: [
                                                t.sequences[0].airName +
                                                  t.sequences[0].flightNo,
                                                (0, O.tZ)(m.Text, {
                                                  children:
                                                    null !==
                                                      (a = t.sequences) &&
                                                    void 0 !== a &&
                                                    null !== (r = a[0]) &&
                                                    void 0 !== r &&
                                                    r.shared
                                                      ? "共享"
                                                      : "",
                                                }),
                                              ],
                                            }),
                                            (0, O.tZ)(m.Text, {
                                              className: "span",
                                              children:
                                                (t.sequences[0].cftn || "") +
                                                (t.sequences[0].cfts
                                                  ? "(" +
                                                    t.sequences[0].cfts +
                                                    ")"
                                                  : ""),
                                            }),
                                            (0, O.tZ)(m.Text, {
                                              className: "span",
                                              children: t.costTime,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, O.BX)(m.View, {
                                      className:
                                        "right-btn flex-align-items-center",
                                      children: [
                                        (0, O.tZ)(m.View, {
                                          className: "price",
                                          children: t.apr,
                                        }),
                                        (0, O.tZ)(m.Text, {
                                          className: "ifont-arr iconfont",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                i
                              );
                            }),
                          }),
                      ],
                    }),
                ],
              });
            }),
            re = h.default.memo(function (e) {
              var t = e.flight,
                i = e.hasChild,
                a = e.hasBaby;
              return (0, O.BX)(m.View, {
                className: "fltlist_item",
                "data-ubt-key": "xcx_flt_list_click",
                id: "AcEy",
                onClick: function () {
                  return e.handleFlightClick(t);
                },
                children: [
                  (0, O.tZ)(ie, { flight: t }),
                  (0, O.BX)(m.View, {
                    className: "flt_intro",
                    children: [
                      (0, O.BX)(m.View, {
                        className: "flt_col",
                        children: [
                          (0, O.BX)(m.View, {
                            className: "flt_depart",
                            children: [
                              (0, O.tZ)(m.Text, {
                                className: "flt_time",
                                children: t.dptTimeStr,
                              }),
                              (0, O.tZ)(m.Text, {
                                className:
                                  "flt_airport " +
                                  (1 === t.cityColor || 3 === t.cityColor
                                    ? "torage"
                                    : ""),
                                children: t.dptAName + t.dptTrm,
                              }),
                            ],
                          }),
                          (0, O.BX)(m.View, {
                            className: "separator",
                            children: [
                              t.abbr &&
                                (0, O.tZ)(m.View, {
                                  className: "spt_type",
                                  children: t.abbr,
                                }),
                              (0, O.tZ)(m.View, { className: "spt_arr" }),
                            ],
                          }),
                          (0, O.BX)(m.View, {
                            className: "flt_arrival",
                            children: [
                              (0, O.tZ)(m.Text, {
                                className: "flt_time",
                                children: t.arrTimeStr,
                              }),
                              (0, O.tZ)(m.Text, {
                                className:
                                  "flt_airport " +
                                  (2 === t.cityColor || 3 === t.cityColor
                                    ? "torage"
                                    : ""),
                                children: t.arrAName + t.arrTrm,
                              }),
                            ],
                          }),
                          t.dayDiff > 0 &&
                            (0, O.tZ)(m.Text, {
                              className: "next",
                              children: "+" + t.dayDiff + "天",
                            }),
                        ],
                      }),
                      (0, O.BX)(m.View, {
                        className: "price_col",
                        children: [
                          (0, O.BX)(m.View, {
                            className: "price",
                            children: [
                              t.stock &&
                                (0, O.tZ)(m.View, {
                                  className: "tag",
                                  children: t.stock,
                                }),
                              (0, O.tZ)(m.Text, {
                                className: "flt_price color-red",
                                children: t.apr,
                              }),
                            ],
                          }),
                          i && a
                            ? (0, O.tZ)(m.Text, {
                                className: "child-price",
                                children: "婴儿:￥" + t.bpr,
                              })
                            : t.ccd &&
                              (0, O.tZ)(m.Text, {
                                className:
                                  "discount-info bdcolor-red color-red",
                                children: t.ccd,
                              }),
                        ],
                      }),
                    ],
                  }),
                  (0, O.BX)(m.View, {
                    className: "airline_info",
                    children: [
                      (0, O.tZ)(m.Image, {
                        className: "airline_logo",
                        src: t.sequences[0].airIcon,
                      }),
                      (0, O.tZ)(m.View, {
                        className: "airline_txt",
                        children: (0, O.tZ)(m.Text, {
                          className: "span",
                          children:
                            t.sequences[0].airName + t.sequences[0].flightNo,
                        }),
                      }),
                      (0, O.tZ)(m.Image, {
                        className: "airline_logo",
                        src: t.sequences[1].airIcon,
                      }),
                      (0, O.BX)(m.View, {
                        className: "airline_txt",
                        children: [
                          (0, O.tZ)(m.Text, {
                            className: "span",
                            children:
                              t.sequences[1].airName + t.sequences[1].flightNo,
                          }),
                          (0, O.tZ)(m.Text, {
                            className: "span",
                            children: t.costTime,
                          }),
                        ],
                      }),
                      t.discount &&
                        (0, O.tZ)(m.Text, {
                          className: "airline_tips",
                          children: t.discount,
                        }),
                      ((i && !a) || (!i && a)) &&
                        (0, O.tZ)(m.Text, {
                          className: "child-price",
                          children:
                            (i ? "儿童" : "婴儿") + ":￥" + (i ? t.cpr : t.bpr),
                        }),
                      i &&
                        a &&
                        (0, O.tZ)(m.Text, {
                          className: "child-price",
                          children: "儿童:￥" + t.cpr,
                        }),
                    ],
                  }),
                  t.note &&
                    (0, O.tZ)(m.View, {
                      className: "flight-note",
                      children: (0, O.tZ)(p.ZtRichText, {
                        nodes: t.note,
                        space: "nbsp",
                      }),
                    }),
                ],
              });
            }),
            ne = h.default.memo(function (e) {
              var t = e.nearbyRoutes,
                i = e.toNearbyAirport;
              return (0, O.BX)(m.View, {
                className: "list-recomd flex",
                id: "AcEw",
                onClick: function (e) {
                  return i(e, 0);
                },
                children: [
                  (0, O.tZ)(m.View, {
                    className: "tag-top",
                    children: "邻近机场",
                  }),
                  1 == t.length &&
                    (0, O.BX)(O.HY, {
                      children: [
                        (0, O.BX)(m.View, {
                          className: "cont flex-1",
                          children: [
                            (0, O.BX)(m.View, {
                              className: "tit flex-align-items-center",
                              children: [
                                (0, O.tZ)(m.Text, {
                                  className: t[0].sequence0 ? "tgreen" : "",
                                  children: t[0].departureCityName,
                                }),
                                (0, O.tZ)(m.View, {
                                  className: "mid",
                                  children: (0, O.tZ)(m.Text, {
                                    className: "ifont-splane iconfont",
                                  }),
                                }),
                                (0, O.tZ)(m.Text, {
                                  className: t[0].sequence1 ? "tgreen" : "",
                                  children: t[0].arrivalCityName,
                                }),
                              ],
                            }),
                            (0, O.tZ)(m.View, {
                              className: "txt",
                              children: t[0].trainDescription,
                            }),
                          ],
                        }),
                        (0, O.BX)(m.View, {
                          className: "rbox",
                          children: [
                            (0, O.tZ)(m.Text, {
                              className:
                                "tag " + (w.default.isTieyou ? "ty" : "zx"),
                              children: t[0].tag,
                            }),
                            (0, O.tZ)(m.Text, {
                              className: "price color-primary",
                              children: t[0].lowestPrice,
                            }),
                          ],
                        }),
                      ],
                    }),
                  t.length > 1 &&
                    (0, O.tZ)(m.View, {
                      className:
                        "list-recomd-more " +
                        (2 === t.length ? "two flex" : ""),
                      children: t.map(function (e, t) {
                        return (0, O.BX)(
                          m.View,
                          {
                            className: "item flex-1",
                            id: "AcEx",
                            onClick: function (e) {
                              return i(e, t);
                            },
                            children: [
                              (0, O.BX)(m.View, {
                                className: "tit",
                                children: [
                                  (0, O.tZ)(m.Text, {
                                    className: e.sequence0 ? "tgreen" : "",
                                    children: e.departureCityName,
                                  }),
                                  "-",
                                  (0, O.tZ)(m.Text, {
                                    className: e.sequence1 ? "tgreen" : "",
                                    children: e.arrivalCityName,
                                  }),
                                ],
                              }),
                              (0, O.tZ)(m.Text, {
                                className: "price color-primary",
                                children: e.lowestPrice,
                              }),
                              (0, O.tZ)(m.Text, {
                                className:
                                  "tag " + (w.default.isTieyou ? "ty" : "zx"),
                                children: e.tag,
                              }),
                              (0, O.tZ)(m.Text, {
                                className: "ifont-arr iconfont",
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                ],
              });
            }),
            se = i(48665),
            le = i(21828),
            oe = h.default.memo(function (e) {
              var t = e.showSkeleton,
                i = e.isLogin,
                a = e.noSinglesTab,
                r = e.filterScrollHidden,
                n = e.isFilter,
                s = e.sortType,
                l = e.timeSort,
                o = e.priceSort,
                c = e.parityHidden,
                d = e.parityTipHidden,
                h = e.openFilter,
                u = e.sortBy,
                f = [
                  {
                    type: "fitler",
                    name: "筛选",
                    current: n,
                    handler: h,
                    iconClass: "ifont-fltscreen iconfont",
                  },
                  {
                    type: "time",
                    name:
                      "time" != s ? "时间" : "ascend" === l ? "早-晚" : "晚-早",
                    current: "time" == s,
                    handler: function () {
                      return u({ type: "time" });
                    },
                    iconClass: "ifont-flttime iconfont",
                  },
                  {
                    type: "price",
                    name:
                      "price" != s
                        ? "价格"
                        : "ascend" === o
                        ? "低-高"
                        : "高-低",
                    current: "price" == s,
                    handler: function () {
                      return u({ type: "price" });
                    },
                    iconClass: "ifont-fltprice iconfont",
                  },
                  {
                    type: "parity",
                    name: "比价",
                    current: !c,
                    handler: e.toggleParity,
                    iconClass: "ifont-fltbijia iconfont",
                    tipRender: d
                      ? null
                      : (0, O.tZ)(m.View, {
                          className: "filter_tips trigon bottom",
                          children: "比价有优惠！",
                        }),
                  },
                ];
              return (0, O.tZ)(m.View, {
                className: "node-isolate-filter-bottom",
                children:
                  !t &&
                  i &&
                  "transfer" == a &&
                  (0, O.tZ)(le.Z, {
                    className:
                      "fltlist_filter " +
                      w.default.zxTyStr +
                      " " +
                      (r ? "hidden" : ""),
                    children: f.map(function (e, t) {
                      return (0,
                      O.BX)(m.View, { className: "item flex-1 ".concat(e.current ? "current" : ""), id: "AcEi", onClick: e.handler, children: [e.tipRender, (0, O.tZ)(m.Text, { className: e.iconClass }), (0, O.tZ)(m.View, { className: "txt", children: e.name })] }, t);
                    }),
                  }),
              });
            }),
            ce = i(92298),
            de = i(57169),
            he = "YYYY-MM-DD",
            me = N()().add(1, "day").format(he),
            ue = w.default.isTieyou,
            fe =
              (0, g.h)(!1, { usePageWrapper: !0 })(
                (Q =
                  (0, D.Z)({
                    title: "".concat(
                      w.default.partnerCN,
                      "火车机票酒店汽车票门票"
                    ),
                  })(
                    (Q = (function (e) {
                      (0, o.Z)(i, e);
                      var t = (0, c.Z)(i);
                      function i(e) {
                        var a;
                        return (
                          (0, n.Z)(this, i),
                          (a = t.call(this, e)),
                          (0, d.Z)(
                            (0, l.Z)(a),
                            "handleFlightClick",
                            function (e) {
                              if (a.state.isLogin) {
                                var t = e.ota,
                                  i = e.arrTime,
                                  r = e.costTime,
                                  n = e.transfer,
                                  s = e.apr,
                                  l = e.dptTime,
                                  o = e.userPreferenceTag,
                                  c = [];
                                if (
                                  (z.Z.setFlightUbtTrace(
                                    "flt_list_flight_product",
                                    {
                                      flight: {
                                        CompareList: t,
                                        EndTime: i,
                                        FlightTime: r,
                                        flightType: n ? "transfer" : "single",
                                        Price: s,
                                        StartTime: l,
                                        Tag: o ? [o] : [],
                                      },
                                    }
                                  ),
                                  e.isFlightHotel)
                                )
                                  return a.toFlightHotelBook({ flight: e });
                                c.push({ key: "grab", value: e.grab }),
                                  a.toBookX({ flight: e, extension: c });
                              } else a.doLogin();
                            }
                          ),
                          (0, d.Z)((0, l.Z)(a), "confirmFilter", function (e) {
                            var t = e.filterParams,
                              i = e.filterList,
                              r = e.selectedFilters,
                              n = t.onlySingles,
                              s = t.expandSharedFlight,
                              l =
                                i.filter(function (e) {
                                  return e.active;
                                }).length > 0 ||
                                n ||
                                s;
                            a.setState(
                              {
                                isFilter: l,
                                filterParams: t,
                                filterList: i,
                                selectedFilters: r,
                              },
                              function () {
                                a.filterFlightsList();
                              }
                            ),
                              f().nextTick(function () {
                                var e,
                                  t,
                                  i,
                                  l,
                                  o,
                                  c = {};
                                r.forEach(function (e) {
                                  c[e.key]
                                    ? c[e.key].push(e.title)
                                    : (c[e.key] = [e.title]);
                                });
                                var d = {
                                  DirectOnly: n ? 1 : 0,
                                  ShareFlightUnfold: s ? 1 : 0,
                                  DepartTimeAreas:
                                    (null === (e = c.departTimeHourSection) ||
                                    void 0 === e
                                      ? void 0
                                      : e.join(",")) || "",
                                  DepartAirports:
                                    (null === (t = c.dptACode) || void 0 === t
                                      ? void 0
                                      : t.join(",")) || "",
                                  ArriveAirports:
                                    (null === (i = c.arrACode) || void 0 === i
                                      ? void 0
                                      : i.join(",")) || "",
                                  AirLines:
                                    (null === (l = c.airCode) || void 0 === l
                                      ? void 0
                                      : l.join(",")) || "",
                                  FlightTypes:
                                    (null === (o = c.cfts) || void 0 === o
                                      ? void 0
                                      : o.join(",")) || "",
                                  pageid: a.pageId,
                                };
                                a.ubtTrace(
                                  "P0268_SP0000_M0001_ID0001_click",
                                  d
                                );
                              });
                          }),
                          (0, d.Z)(
                            (0, l.Z)(a),
                            "toNearbyAirport",
                            function (e, t) {
                              e.stopPropagation();
                              var i = a.state,
                                r = i.nearbyRoutes,
                                n = i.hasChild,
                                s = i.hasBaby,
                                l = r[t],
                                o = l.departureCityName,
                                c = l.departureCityCode,
                                d = l.arrivalCityName,
                                h = l.arrivalCityCode,
                                m = l.departureDate;
                              a.navigateTo({
                                url: "/pages/flight/list/list?departCity="
                                  .concat(o, "&departCityCode=")
                                  .concat(c, "&arriveCity=")
                                  .concat(d, "&arriveCityCode=")
                                  .concat(h, "&departDate=")
                                  .concat(
                                    m,
                                    "&nearby=0&fromPage=xcx_flt_linjin"
                                  ),
                                data: { hasChild: n, hasBaby: s },
                              });
                            }
                          ),
                          (0, d.Z)((0, l.Z)(a), "doLogin", function () {
                            Z.ZP.doLogin()
                              .then(function () {
                                a.setState({ isLogin: !0 }, function () {
                                  a.getFlightList(), a.getNewUserSubsidy();
                                });
                              })
                              .catch(function () {
                                (0, b.showToast)("取消登录");
                              });
                          }),
                          (0, d.Z)(
                            (0, l.Z)(a),
                            "handleDrawPopShow",
                            function (e, t) {
                              e && (a.identityName = t);
                            }
                          ),
                          (a.state = {
                            isTieyou: ue,
                            isLogin: Z.ZP.isLogin,
                            departDate: "",
                            departCity: "",
                            departCityCode: "",
                            arriveCity: "",
                            arriveCityCode: "",
                            hasChild: !1,
                            hasBaby: !1,
                            showSkeleton: !0,
                            singles: [],
                            flightHotel: null,
                            transfers: [],
                            saleOuts: [],
                            airTrains: [],
                            noFlight: !1,
                            noResultRecommends: [],
                            filterList: [],
                            selectedFilters: [],
                            newUserBannerInfo: null,
                            filterParams: {
                              filterFlightNumber: -1,
                              filterIndex: 0,
                              onlySingles: !1,
                              expandSharedFlight: !1,
                            },
                            sortType: "price",
                            priceSort: "ascend",
                            timeSort: "descend",
                            parityHidden: !0,
                            parityTipHidden: !0,
                            noSinglesTab: "transfer",
                            studentPrivilegeBtnVisible: !1,
                            surpriseParams: {},
                            isShowNewCoupon: !1,
                            couponAmount: 0,
                            expiredTime: null,
                            advantageDrawShow: !1,
                            advantageDrawData: {},
                            entrancePopupHidden: !1,
                            entranceDrawerTips: [],
                            filterScrollHidden: !1,
                            listScrollTop: 0,
                            listId: "",
                            showTopAnnouncement: !1,
                            showHead: !0,
                          }),
                          (a.pageId = ue ? "10650015507" : "10650001974"),
                          (a.pageRootClassName =
                            "flight-list-container flex flex-column"),
                          (a.pageContentIsFullScreen = !0),
                          (a.autoExpose = !0),
                          a
                        );
                      }
                      return (
                        (0, s.Z)(i, [
                          {
                            key: "componentDidMount",
                            value: function () {
                              var e = this,
                                t = this.$instance.router.params,
                                i = t.departDate,
                                a = void 0 === i ? me : i,
                                r = t.departCityCode,
                                n = void 0 === r ? "SHA" : r,
                                s = t.arriveCityCode,
                                l = void 0 === s ? "BJS" : s,
                                o = t.departCity,
                                c = void 0 === o ? "上海" : o,
                                d = t.arriveCity,
                                h = void 0 === d ? "北京" : d,
                                m = t.returnDate,
                                u = void 0 === m ? "" : m,
                                p = t.nearby,
                                g = void 0 === p ? "1" : p,
                                y = t.fromPage,
                                N = void 0 === y ? "" : y,
                                v = t.data || {},
                                T = v.hasChild,
                                w = void 0 !== T && T,
                                C = v.hasBaby,
                                b = void 0 !== C && C;
                              if (u)
                                return f().redirectTo({
                                  url: "/pages/flight/roundtrip/roundtrip?departCity="
                                    .concat(c, "&departCityCode=")
                                    .concat(n, "&arriveCity=")
                                    .concat(h, "&arriveCityCode=")
                                    .concat(l, "&departDate=")
                                    .concat(a, "&returnDate=")
                                    .concat(u),
                                });
                              this.setState(
                                {
                                  isLogin: Z.ZP.isLogin,
                                  departDate: x.Z.compareTodayToDate(a)
                                    ? me
                                    : a,
                                  departCity: decodeURIComponent(c),
                                  departCityCode: n,
                                  arriveCity: decodeURIComponent(h),
                                  arriveCityCode: l,
                                  hasChild: w,
                                  hasBaby: b,
                                  enableNearby: "1" === g,
                                  selectedFilters: [],
                                  filterList: x.Z.initNewFilter([
                                    "起飞时间",
                                    "出发机场",
                                    "到达机场",
                                    "航空公司",
                                    "机型",
                                  ]),
                                },
                                function () {
                                  e.setNavTitle(),
                                    e.getNewUserSubsidy(),
                                    e.getFlightList(),
                                    e.checkParity(),
                                    x.Z.recordFromPage(N);
                                }
                              );
                            },
                          },
                          {
                            key: "componentWillUnmount",
                            value: function () {
                              var e = this.state.departDate;
                              C.IK.selectDate = e;
                            },
                          },
                          {
                            key: "componentDidShow",
                            value: function () {
                              if (C.IK.forceListRefresh)
                                (C.IK.cacheUsage = 1),
                                  (C.IK.forceListRefresh = !1),
                                  this.getFlightList();
                              else {
                                var e = this.state.flightHotel;
                                e &&
                                  this.getProductDetail({ flight: e }).catch(
                                    function (e) {
                                      return console.log(e);
                                    }
                                  );
                              }
                            },
                          },
                          {
                            key: "onInterceptBackAsync",
                            value: function () {
                              var e = this;
                              return new Promise(function (t) {
                                var i = e.state,
                                  a = i.departDate,
                                  r = i.showMonitorCard,
                                  n = q.dF.getAttr("list-monitor-detainment"),
                                  s = !n || N()().diff(n, "day") >= 3,
                                  l = N()(a).diff(N()(), "day") > 7,
                                  o = !1;
                                l && s && r
                                  ? (q.dF.setAttr(
                                      "list-monitor-detainment",
                                      N()().format(he)
                                    ),
                                    e.ubtTrace(
                                      "FltSList_ForwardMonitorRetentionPop_exposure",
                                      { PageId: e.pageId }
                                    ),
                                    (function (e) {
                                      var t,
                                        i = e.onConfirm,
                                        a = e.onCancel;
                                      null === (t = (0, b.getCurrentPage)()) ||
                                        void 0 === t ||
                                        t.showCommonDrawer({
                                          hideClose: !1,
                                          hideTitle: !0,
                                          className: "monitor-detainment",
                                          beforeClose: function () {
                                            null == a || a();
                                          },
                                          content: function () {
                                            var e = [
                                              "24小时监控",
                                              "海量航班监控",
                                              "自动锁定低价",
                                            ];
                                            return (0, O.BX)(m.View, {
                                              style: {
                                                background:
                                                  "url(https://images3.c-ctrip.com/ztrip/zhixingios/list/baby/icon_qinzi_bg@3x.png) no-repeat top left / contain",
                                              },
                                              className:
                                                "flex-column flex-1 pb-120",
                                              children: [
                                                (0, O.BX)(m.View, {
                                                  className:
                                                    "p-16 flex-column flex-center",
                                                  children: [
                                                    (0, O.tZ)(m.View, {
                                                      className: "tit",
                                                      children:
                                                        "机票价太高？开启降价提醒",
                                                    }),
                                                    (0, O.tZ)(m.View, {
                                                      className:
                                                        "mt-8 flex-center",
                                                      children:
                                                        null == e
                                                          ? void 0
                                                          : e.map(function (e) {
                                                              return (0,
                                                              O.BX)(m.View, { className: "feat-item flex-align-items-center", children: [(0, O.tZ)(m.Text, { className: "iconfont2 ifont2-youshi_linea_12" }), (0, O.tZ)(m.Text, { className: "feat-txt", children: e })] }, e);
                                                            }),
                                                    }),
                                                  ],
                                                }),
                                                (0, O.tZ)(m.View, {
                                                  className: "cont",
                                                  children: (0, O.tZ)(m.Image, {
                                                    className: "img",
                                                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/list/wanliu_tc_jk.png",
                                                  }),
                                                }),
                                                (0, O.BX)(le.Z, {
                                                  children: [
                                                    (0, O.tZ)(m.Button, {
                                                      className:
                                                        "btn cancel flex-center",
                                                      id: "AcEu",
                                                      onClick: function () {
                                                        null == a || a();
                                                      },
                                                      children: "仍然退出",
                                                    }),
                                                    (0, O.tZ)(m.Button, {
                                                      className:
                                                        "btn confirm flex-center",
                                                      id: "AcEv",
                                                      onClick: function () {
                                                        null == i || i();
                                                      },
                                                      children: "开启降价提醒",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            });
                                          },
                                        });
                                    })({
                                      onConfirm: function () {
                                        o ||
                                          ((o = !0),
                                          e.ubtTrace(
                                            "FltSList_ForwardMonitorRetentPop_TurnOnAlert_click",
                                            { PageId: e.pageId }
                                          ),
                                          t(!1),
                                          e.toMonitorEdit({
                                            fromAction:
                                              "flight_list_head_detain",
                                          }),
                                          e.closeCommonDrawer());
                                      },
                                      onCancel: function () {
                                        o ||
                                          ((o = !0),
                                          e.ubtTrace(
                                            "FltSList_ForwardMonitorRetentionPop_Close_click",
                                            { PageId: e.pageId }
                                          ),
                                          t(!0));
                                      },
                                    }))
                                  : ((o = !0), t(!0));
                              });
                            },
                          },
                          {
                            key: "setNavTitle",
                            value: function () {
                              var e = this.state,
                                t = e.departCity,
                                i = e.arriveCity;
                              t && i
                                ? this.setPageTitle(
                                    "".concat(t, " ⇀ ").concat(i)
                                  )
                                : this.setPageTitle("航班列表");
                            },
                          },
                          {
                            key: "getCouponInfomation",
                            value: function (e) {
                              var t = e.expiredTime,
                                i = e.couponAmount,
                                a = e.isShowNewCoupon;
                              this.setState({
                                couponAmount: i,
                                expiredTime: t,
                                isShowNewCoupon: a,
                              });
                            },
                          },
                          {
                            key: "handleNewCouponClose",
                            value: function () {
                              this.setState({ isShowNewCoupon: !1 });
                            },
                          },
                          {
                            key: "handleCouponReceive",
                            value: function () {
                              this.getFlightList();
                            },
                          },
                          {
                            key: "getNewUserSubsidy",
                            value: function () {
                              var e = this,
                                t = this.state,
                                i = t.departCityCode,
                                a = t.arriveCityCode,
                                r = t.departDate;
                              (0, B.C7)({
                                source: 2,
                                departure: i,
                                arrival: a,
                                departDate: r,
                              }).then(function (t) {
                                var i;
                                e.setState({
                                  newUserBannerInfo:
                                    null === (i = t.data) || void 0 === i
                                      ? void 0
                                      : i.banner,
                                });
                              });
                            },
                          },
                          {
                            key: "getFlightList",
                            value: function (e) {
                              var t = this,
                                i = this.state,
                                a = i.departDate,
                                r = i.departCityCode,
                                n = i.arriveCityCode,
                                s = i.hasChild,
                                l = i.hasBaby,
                                o = i.enableNearby,
                                c = i.filterList,
                                d = e || a,
                                h = {
                                  data: {
                                    version: 13,
                                    source: 0,
                                    cacheUsage: C.IK.cacheUsage || 0,
                                    hasChild: s,
                                    hasBaby: l,
                                    segments: [
                                      { dptDate: d, dptCode: r, arrCode: n },
                                    ],
                                    student: !1,
                                  },
                                };
                              this.setState({
                                departDate: d,
                                showSkeleton: !0,
                                showNearby: !1,
                                noSinglesTab: "transfer",
                                airTrainsListLowestPrice: 0,
                                noResultRecommendsLowestPrice: 0,
                                listId: "".concat(r, "_").concat(n),
                                showHead: !0,
                              }),
                                (this._pass_query = h.data),
                                this.handleRequestQueue(d),
                                this.getFlightListPromise(h)
                                  .then(function (e) {
                                    if (
                                      t._requestQueue[
                                        t._requestQueue.length - 1
                                      ] === d
                                    ) {
                                      console.log(e);
                                      var i = e.resultCode,
                                        a = e.resultMessage;
                                      if (1 !== i)
                                        return t.showCommonDialog(
                                          a || "网络错误，请稍候再试"
                                        );
                                      var s = e.data || {};
                                      if (s.flightHotel) {
                                        var l = x.Z.handleFlightData([
                                          s.flightHotel,
                                        ])[0];
                                        (l.isFlightHotel = !0),
                                          t
                                            .getProductDetail({ flight: l })
                                            .catch(function (e) {
                                              return console.log(e);
                                            }),
                                          t.setState(
                                            { flightHotel: l },
                                            function () {
                                              t.logTraceForFlightHotel({
                                                keyName: "O_TRN_ZxFlight_Show",
                                                bizKey:
                                                  "flt_list_airhotel_show",
                                              });
                                            }
                                          );
                                      } else t.setState({ flightHotel: null });
                                      var h = x.Z.handleFlightData(
                                        s.singles || []
                                      );
                                      h = z.Z.foldSharedFlights(h);
                                      var m = x.Z.handleFlightData(
                                          s.recommends || []
                                        ),
                                        u = x.Z.handleFlightData(
                                          s.preferences || []
                                        );
                                      (t._saleOuts = x.Z.handleFlightData(
                                        s.saleOuts || []
                                      )),
                                        0 === h.length &&
                                          (t.handleNoSingleFlight(),
                                          t.getAirTrainList(),
                                          0 === m.length &&
                                            t.setState({
                                              noSinglesTab: "nearby",
                                            }));
                                      var f = x.Z.getListLowestPrice(h, m, u),
                                        p = s.nearbyAirport || {},
                                        g = S.Z.deepCopy(c),
                                        y = x.Z.updateNewFilter(h, {
                                          filterList: g,
                                        }).filterList;
                                      t._backups = {
                                        singles: S.Z.deepCopy(h),
                                        transfers: S.Z.deepCopy(m),
                                      };
                                      var N = s.announcement || {},
                                        v = N.entrancePopup,
                                        T = N.tipAndFloat,
                                        w = N.tips;
                                      if (
                                        (t.setState({
                                          listLowestPrice: f,
                                          filterList: y,
                                          entrancePopup: v || {},
                                          entranceDrawerTips: w,
                                          tipAndFloat: T || {},
                                          studentPrivilegeBtnVisible:
                                            !!s.studentPrivilege,
                                          surpriseParams: {
                                            version: 3,
                                            source: "flightlist",
                                            minPrice: f,
                                            depDate: d,
                                            depCityCode: r,
                                            arrCityCode: n,
                                          },
                                        }),
                                        t.clearNoResultRecommendProducts(),
                                        o && p.enabled)
                                      ) {
                                        var Z =
                                          0 === h.length && m.length > 0
                                            ? 2
                                            : 1;
                                        t.getNearbyRecommend(f, Z);
                                      }
                                      t.checkMonitorOrder(f, function () {
                                        t.filterFlightsList();
                                      });
                                    }
                                  })
                                  .catch(function (e) {
                                    var i;
                                    (null != e &&
                                      null !== (i = e.errMsg) &&
                                      void 0 !== i &&
                                      i.includes("abort")) ||
                                      t.showCommonDialog(
                                        JSON.stringify(e) ||
                                          "网络错误，请稍后再试~"
                                      );
                                  })
                                  .finally(function () {
                                    (C.IK.cacheUsage = 0),
                                      t.getNewUserSubsidy();
                                  });
                            },
                          },
                          {
                            key: "getFlightListPromise",
                            value: function (e) {
                              var t = this;
                              this.cancelLastRequest &&
                                this.cancelLastRequest(
                                  "cancel last unfinished request"
                                );
                              var i = (0, T.V3)(),
                                a = i.token,
                                r = i.cancel;
                              this.cancelLastRequest = r;
                              var n = {
                                cancelToken: a,
                                checkFrameworkLogin: !1,
                                checkLogin: !1,
                                cacheControl: {
                                  useCache: !0,
                                  maxAge: 3e4,
                                  dedup: !0,
                                  dedupingInterval: 500,
                                },
                              };
                              return (
                                z.Z.isListNewUI() &&
                                  (n.extension = [
                                    { name: "correctVersion", value: "709987" },
                                  ]),
                                new Promise(function (i, a) {
                                  (0, Z.M9)()
                                    .then(
                                      function () {},
                                      function () {
                                        console.error("获取openId失败");
                                      }
                                    )
                                    .finally(function () {
                                      (0, B.j7)(e, n)
                                        .then(function (e) {
                                          return i(e);
                                        })
                                        .catch(function (e) {
                                          return a(e);
                                        })
                                        .finally(function () {
                                          t.cancelLastRequest = null;
                                        });
                                    });
                                })
                              );
                            },
                          },
                          {
                            key: "handleRequestQueue",
                            value: function (e) {
                              var t = this._requestQueue || [];
                              t.push(e), (this._requestQueue = t);
                            },
                          },
                          {
                            key: "handleNoSingleFlight",
                            value: function () {
                              var e = this;
                              console.log("搜索无直飞");
                              var t = this.state,
                                i = t.departDate,
                                a = {
                                  data: {
                                    version: 5,
                                    source: 0,
                                    dptName: t.departCity,
                                    dptCode: t.departCityCode,
                                    arrName: t.arriveCity,
                                    arrCode: t.arriveCityCode,
                                    dptDate: i,
                                    hasEconomy: !0,
                                    hasBaby: t.hasBaby,
                                    hasChild: t.hasChild,
                                  },
                                };
                              (0, B.tR)(a).then(
                                function (t) {
                                  var i = t.resultCode,
                                    a = t.data,
                                    n = (void 0 === a ? {} : a).products || [];
                                  1 === i &&
                                    0 !== n.length &&
                                    e.setState({
                                      noResultRecommends: n.map(function (e) {
                                        return (0, r.Z)(
                                          (0, r.Z)({}, e),
                                          {},
                                          {
                                            dptColor: e.nearbyInfos.some(
                                              function (e) {
                                                return 0 === e.sequence;
                                              }
                                            ),
                                            arrColor: e.nearbyInfos.some(
                                              function (e) {
                                                return 1 === e.sequence;
                                              }
                                            ),
                                            flights: x.Z.handleFlightData(
                                              e.flights
                                            ),
                                          }
                                        );
                                      }),
                                      noResultRecommendsLowestPrice: S._.min(
                                        n.map(function (e) {
                                          return S._.min(
                                            e.flights.map(function (e) {
                                              return e.apr;
                                            })
                                          );
                                        })
                                      ),
                                    }),
                                    e.hideSkeleton();
                                },
                                function () {
                                  console.log("无邻近机场推荐！");
                                }
                              );
                            },
                          },
                          {
                            key: "clearNoResultRecommendProducts",
                            value: function () {
                              this.setState({
                                noResultRecommends: [],
                                noResultRecommendsLowestPrice: 0,
                              });
                            },
                          },
                          {
                            key: "getAirTrainList",
                            value: function () {
                              var e = this,
                                t = this.state,
                                i = t.departDate,
                                a = t.departCity,
                                r = t.departCityCode,
                                n = t.arriveCity,
                                s = {
                                  data: {
                                    version: 0,
                                    dptCode: r,
                                    dptName: a,
                                    arrCode: t.arriveCityCode,
                                    arrName: n,
                                    dptDate: i,
                                    hasChild: t.hasChild,
                                    hasBaby: t.hasBaby,
                                    business: !1,
                                  },
                                };
                              (0, M.P4)(s)
                                .then(function (t) {
                                  if ((console.log(t), 1 === t.resultCode)) {
                                    var i = (t.data || {}).transfers || [];
                                    e.setState({
                                      airTrains: e.handleAirTrainData(i),
                                      airTrainsListLowestPrice: S._.min(
                                        i.map(function (e) {
                                          return e.ppr;
                                        })
                                      ),
                                    });
                                  }
                                })
                                .catch(function (e) {
                                  console.log(e);
                                });
                            },
                          },
                          {
                            key: "handleAirTrainData",
                            value: function (e) {
                              return e.map(function (e) {
                                var t = N()(
                                  z.Z.formatDateWithSlash(
                                    e.seqs.filter(function (e) {
                                      return 1 === e.idx;
                                    })[0].dptTime
                                  )
                                );
                                return (0, r.Z)(
                                  (0, r.Z)({}, e),
                                  {},
                                  {
                                    seqs: e.seqs.map(function (e) {
                                      var i = N()(
                                          z.Z.formatDateWithSlash(e.dptTime)
                                        ),
                                        a = N()(
                                          z.Z.formatDateWithSlash(e.arrTime)
                                        );
                                      return (0,
                                      r.Z)((0, r.Z)({}, e), {}, { dptTimeStr: i.format("HH:mm"), arrTimeStr: a.format("HH:mm"), dayDiff: 2 === e.idx ? x.Z.getDayDiff(t.format(he), a.format(he)) : 0 });
                                    }),
                                  }
                                );
                              });
                            },
                          },
                          {
                            key: "handleAirTrainItemClick",
                            value: function (e) {
                              var t = e.currentTarget.dataset.index,
                                i = this.state.airTrains[t];
                              this.toBookX({ flight: i, type: "airTrain" });
                            },
                          },
                          {
                            key: "handleGrabFlightClick",
                            value: function (e) {
                              if (Z.ZP.isLogin) {
                                var t = e.currentTarget.dataset,
                                  i = t.index,
                                  a = t.type,
                                  r = this.state.saleOuts[i],
                                  n = [];
                                n.push({ key: "grab", value: r.grab }),
                                  console.log("".concat(a, " 1: "), r),
                                  this.toBookX({ flight: r, extension: n });
                              } else this.doLogin();
                            },
                          },
                          {
                            key: "handleRecommendFlightClick",
                            value: function (e) {
                              var t = e.currentTarget.dataset,
                                i = t.index,
                                a = t.idx,
                                r = this.state.noResultRecommends[i].flights[a],
                                n = [];
                              n.push({ key: "grab", value: r.grab }),
                                console.log("recommend: ", r),
                                this.toBookX({ flight: r, extension: n });
                            },
                          },
                          {
                            key: "handleNoResultMoreClick",
                            value: function (e) {
                              var t = e.currentTarget.dataset.index,
                                i = this.state.noResultRecommends[t],
                                a = i.dptName,
                                r = i.dptCode,
                                n = i.arrName,
                                s = i.arrCode,
                                l = i.dptDate;
                              this.navigateTo({
                                url: "/pages/flight/list/list?departCity="
                                  .concat(a, "&departCityCode=")
                                  .concat(r, "&arriveCity=")
                                  .concat(n, "&arriveCityCode=")
                                  .concat(s, "&departDate=")
                                  .concat(l, "&nearby=0"),
                              });
                            },
                          },
                          {
                            key: "logTraceForFlightHotel",
                            value: function (e) {
                              var t,
                                i = e.keyName,
                                a = e.bizKey,
                                r = this.state.flightHotel,
                                n = r.costTime,
                                s = r.apr,
                                l = r.sequences,
                                o = r.dptTime,
                                c = r.arrTime,
                                d = r.hotel,
                                h = r.isDingtou,
                                m = {
                                  bizKey: a,
                                  FlightTime: n,
                                  EndTime: c,
                                  StartTime: o,
                                  FlightType: "single",
                                  Price: s,
                                  ProductID: [
                                    null == l ||
                                    null === (t = l[0]) ||
                                    void 0 === t
                                      ? void 0
                                      : t.flightNo,
                                  ],
                                  HotelPrice: d.price - s,
                                  isDingtou: h,
                                };
                              this.ubtTrace(i, m);
                            },
                          },
                          {
                            key: "getProductDetail",
                            value: function (e) {
                              var t = {
                                  data: {
                                    skipXPage: !1,
                                    token: e.flight.token,
                                    cacheUsage: 0,
                                    version: 15,
                                    source: 0,
                                    hasChild: !1,
                                    hasBaby: !1,
                                    business: !1,
                                    student: !1,
                                    queryHigherClass: !1,
                                    segments: [],
                                  },
                                },
                                i = {
                                  cacheControl: {
                                    useCache: !0,
                                    maxAge: 6e4,
                                    dedup: !0,
                                    dedupingInterval: 500,
                                  },
                                };
                              return (0, M.jv)(t, i).then(function (e) {
                                if (1 == e.resultCode && e.data) {
                                  var t,
                                    a = e.data.products,
                                    r = {
                                      data: {
                                        policyVersion: 15,
                                        source: 0,
                                        token:
                                          null == a ||
                                          null === (t = a[0]) ||
                                          void 0 === t
                                            ? void 0
                                            : t.token,
                                      },
                                    };
                                  return (0, M.rl)(r, i).then(function (e) {
                                    return e;
                                  });
                                }
                                throw new Error(e.resultMessage);
                              });
                            },
                          },
                          {
                            key: "toFlightHotelBook",
                            value: function (e) {
                              var t = this,
                                i = e.flight;
                              this.logTraceForFlightHotel({
                                keyName: "O_TRN_ZxFlight_Click",
                                bizKey: "flt_list_airhotel_click",
                              }),
                                (0, b.showLoading)(),
                                this.getProductDetail({ flight: i })
                                  .then(function (e) {
                                    if (1 !== e.resultCode)
                                      return (
                                        (0, b.hideLoading)(),
                                        (0, b.showModal)(e.resultMessage)
                                      );
                                    var a = e.data,
                                      r = a.hur,
                                      n = a.htlpr,
                                      s = z.Z.handleFlightDataInBook(
                                        a.segments
                                      ),
                                      l = t.getParams({ flight: i }).query;
                                    t.navigateTo({
                                      url: "/pages/flight/book/book",
                                      data: {
                                        cabinDetail: a,
                                        segments: s,
                                        hur: r,
                                        htlpr: n,
                                        query: l,
                                        isFlightHotel: !0,
                                      },
                                    });
                                  })
                                  .catch(function (e) {
                                    console.log(e),
                                      null != e &&
                                        e.message &&
                                        (0, b.showModal)(e.message);
                                  })
                                  .finally(function () {
                                    return (0, b.hideLoading)();
                                  });
                            },
                          },
                          {
                            key: "toBookX",
                            value: function (e) {
                              var t = e.flight,
                                i = e.extension,
                                a = void 0 === i ? [] : i,
                                r = e.type,
                                n = void 0 === r ? "" : r,
                                s = this.state,
                                l = s.departCity,
                                o = s.arriveCity,
                                c = s.studentPrivilegeBtnVisible,
                                d = t.token,
                                h = this._pass_query,
                                m = h.hasChild,
                                u = h.hasBaby;
                              if ("airTrain" === n)
                                return (
                                  console.log(t),
                                  void this.navigateTo({
                                    url: "../bookx/bookx?token="
                                      .concat(
                                        encodeURIComponent(d),
                                        "&xType=airTrain&navTitle="
                                      )
                                      .concat(encodeURIComponent(l + "-" + o)),
                                    data: {
                                      query: { hasChild: m, hasBaby: u },
                                      isStu: c,
                                    },
                                  })
                                );
                              var f = this.getParams({
                                  flight: t,
                                  extension: a,
                                }),
                                p = f.segmentsFlights,
                                g = f.query;
                              this.navigateTo({
                                url: "../bookx/bookx?token=".concat(
                                  encodeURIComponent(d)
                                ),
                                data: { segments: p, query: g, isStu: c },
                              });
                            },
                          },
                          {
                            key: "getParams",
                            value: function (e) {
                              var t = e.flight,
                                i = e.extension,
                                a = void 0 === i ? [] : i,
                                r = [{}],
                                n = t.sequences,
                                s = this._pass_query,
                                l = s.segments,
                                o = s.hasChild,
                                c = s.hasBaby;
                              r[0].flights = n.map(function (e) {
                                return {
                                  dptTime: e.dptTime,
                                  arrTime: e.arrTime,
                                  airFullName: e.airFullName,
                                  flightNo: e.flightNo,
                                  dptAName: e.dpt,
                                  arrAName: e.arr,
                                  stop: e.stop,
                                };
                              });
                              var d = l,
                                h = r[0].flights[1] || r[0].flights[0];
                              return (
                                (d[0].flightNo = r[0].flights[0].flightNo),
                                (d[0].departTime = r[0].flights[0].dptTime),
                                (d[0].arriveTime = h.arrTime),
                                {
                                  segmentsFlights: r,
                                  query: {
                                    segments: d,
                                    hasChild: o,
                                    hasBaby: c,
                                    extension: a,
                                  },
                                }
                              );
                            },
                          },
                          {
                            key: "openFilter",
                            value: function () {
                              var e = this.state,
                                t = e.filterList,
                                i = e.selectedFilters,
                                a = void 0 === i ? [] : i,
                                r = e.filterParams,
                                n = this._backups;
                              !(function (e) {
                                var t = e.filterParams,
                                  i = e.filterList,
                                  a = e.selectedFilters,
                                  r = e.singles,
                                  n = e.transfers,
                                  s = e.confirmFilter,
                                  l = G(t),
                                  o = G(i),
                                  c = G(a);
                                (0, b.getCurrentPage)().showCommonDrawer({
                                  hideTitle: !0,
                                  hideClose: !0,
                                  content: function (e) {
                                    var t = e.onClose,
                                      i = e.visible;
                                    return (0, O.tZ)(J, {
                                      visible: i,
                                      filterParamsInit: l,
                                      filterListInit: o,
                                      selectedFiltersInit: c,
                                      singles: r,
                                      transfers: n,
                                      confirmFilter: s,
                                      onClose: t,
                                    });
                                  },
                                  className: "flt-list-filter-panel",
                                });
                              })({
                                filterParams: r,
                                filterList: t,
                                selectedFilters: a,
                                singles: n.singles,
                                transfers: n.transfers,
                                confirmFilter: this.confirmFilter,
                              });
                            },
                          },
                          {
                            key: "filterFlightsList",
                            value: function () {
                              var e = this.state,
                                t = e.sortType,
                                i = e.filterList,
                                a = e.filterParams.onlySingles,
                                r = this._backups,
                                n = r.singles,
                                s = r.transfers,
                                l = x.Z.filterNewList(n, s, i),
                                o = l.straight,
                                c = l.transfer;
                              a && (c = []),
                                "time" === t && this.sortByTime(o, c),
                                "price" === t && this.sortByPrice(o, c);
                            },
                          },
                          {
                            key: "sortBy",
                            value: function (e) {
                              var t = this,
                                i = e.type,
                                a = this.state,
                                r = a.timeSort,
                                n = a.priceSort,
                                s = a.singles,
                                l = a.transfers;
                              "time" === i
                                ? this.setState(
                                    {
                                      sortType: "time",
                                      timeSort:
                                        "ascend" === r ? "descend" : "ascend",
                                      priceSort: "descend",
                                    },
                                    function () {
                                      t.sortByTime(s, l);
                                    }
                                  )
                                : this.setState(
                                    {
                                      sortType: "price",
                                      priceSort:
                                        "ascend" === n ? "descend" : "ascend",
                                      timeSort: "descend",
                                    },
                                    function () {
                                      t.sortByPrice(s, l);
                                    }
                                  );
                            },
                          },
                          {
                            key: "sortByTime",
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : [],
                                t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : [],
                                i = this.state.timeSort,
                                a = S._.sortBy(
                                  e,
                                  this.sortByTimeKey(i, "dptTime")
                                ),
                                r = S._.sortBy(
                                  t,
                                  this.sortByTimeKey(i, "dptTime")
                                );
                              this.renderList({ singles: a, transfers: r });
                            },
                          },
                          {
                            key: "sortByPrice",
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : [],
                                t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : [],
                                i = this.state.priceSort,
                                a = S._.sortBy(
                                  e,
                                  this.sortByPriceKey(i, "apr")
                                ),
                                r = S._.sortBy(
                                  t,
                                  this.sortByPriceKey(i, "apr")
                                );
                              this.renderList({ singles: a, transfers: r });
                            },
                          },
                          {
                            key: "sortByTimeKey",
                            value: function (e) {
                              var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : "departTime";
                              return function (i) {
                                var a = new Date(
                                  z.Z.formatDateWithSlash(i[t])
                                ).getTime();
                                return "ascend" === e ? a : -a;
                              };
                            },
                          },
                          {
                            key: "sortByPriceKey",
                            value: function (e) {
                              var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : "adultPrice";
                              return function (i) {
                                return "ascend" === e ? i[t] : -i[t];
                              };
                            },
                          },
                          {
                            key: "renderList",
                            value: function (e) {
                              var t = e.singles,
                                i = void 0 === t ? [] : t,
                                a = e.transfers,
                                r = void 0 === a ? [] : a,
                                n = this.state,
                                s = n.showMonitorCard,
                                l = n.showNearby,
                                o = n.isLogin,
                                c = 0,
                                d = 0;
                              s &&
                                (c =
                                  i.length > 0
                                    ? i.length > 4
                                      ? 1
                                      : 2
                                    : r.length > 4
                                    ? 3
                                    : 4),
                                l &&
                                  (i.length > 1
                                    ? (d = 1)
                                    : i.length > 0 && i.length <= 1 && (d = 2)),
                                o ||
                                  ((i = this.formatPrice(i)),
                                  (r = this.formatPrice(r))),
                                this.setState({
                                  singles: i,
                                  transfers: r,
                                  saleOuts: this._saleOuts,
                                  monitorCardPosition: c,
                                  nearbyCardPosition: d,
                                }),
                                this.hideSkeleton();
                            },
                          },
                          {
                            key: "formatPrice",
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : [],
                                t = e.map(function (e) {
                                  return (0,
                                  r.Z)((0, r.Z)({}, e), {}, { apr: Array.from(String(e.apr)).slice(0, 1) + "??" });
                                });
                              return t;
                            },
                          },
                          {
                            key: "getLowerPrice",
                            value: function (e) {
                              var t = this.state.departDate,
                                i = null;
                              if (t) {
                                var a = new Date(t).getTime();
                                return (
                                  (i = e.find(function (e) {
                                    return (
                                      new Date(e.flightDate).getTime() == a
                                    );
                                  })) && i.price
                                );
                              }
                              return "";
                            },
                          },
                          {
                            key: "chooseDate",
                            value: function (e) {
                              var t = this;
                              this.setState({ noFlight: !1 }, function () {
                                t.getFlightList(e);
                              });
                            },
                          },
                          {
                            key: "getNearbyRecommend",
                            value: function (e, t) {
                              var i = this,
                                a = this.state,
                                n = a.departDate,
                                s = {
                                  data: {
                                    departureCityCode: a.departCityCode,
                                    arrivalCityCode: a.arriveCityCode,
                                    departureDate: n,
                                    tripType: 0,
                                    lowestPrice: e,
                                    transType: t,
                                    version: 3,
                                  },
                                };
                              (0, B.l5)(s).then(function (e) {
                                var t = e.resultCode,
                                  a = e.data,
                                  n =
                                    (void 0 === a ? {} : a)
                                      .lowestPriceFlightRoutes || [];
                                if (1 === t && n.length > 0) {
                                  var s = i.state.singles,
                                    l = void 0 === s ? [] : s,
                                    o = 0;
                                  l.length > 1
                                    ? (o = 1)
                                    : l.length > 0 && l.length <= 1 && (o = 2),
                                    i.setState({
                                      nearbyRoutes: n.map(function (e) {
                                        return (0, r.Z)(
                                          (0, r.Z)({}, e),
                                          {},
                                          {
                                            sequence0: e.nearbyInfos.some(
                                              function (e) {
                                                return 0 === e.sequence;
                                              }
                                            ),
                                            sequence1: e.nearbyInfos.some(
                                              function (e) {
                                                return 1 === e.sequence;
                                              }
                                            ),
                                          }
                                        );
                                      }),
                                      showNearby: !0,
                                      nearbyCardPosition: o,
                                    });
                                } else i.setState({ showNearby: !1 });
                              });
                            },
                          },
                          {
                            key: "couponFixedShow",
                            value: function () {
                              this.setState({ isShowNewCoupon: !0 });
                            },
                          },
                          {
                            key: "checkMonitorOrder",
                            value: function (e, t) {
                              var i = this,
                                a = this.state,
                                n = a.departDate,
                                s = {
                                  data: {
                                    version: 2,
                                    lowestPrice: e,
                                    departureCityCode: a.departCityCode,
                                    arrivalCityCode: a.arriveCityCode,
                                    departureDate: n,
                                  },
                                };
                              (0, M.xV)(s)
                                .then(function (e) {
                                  var a = e.resultCode,
                                    n = e.data,
                                    s = void 0 === n ? {} : n;
                                  1 === a
                                    ? i.setState({
                                        grabInfo: (0, r.Z)({}, s),
                                        showMonitorCard: !0,
                                      })
                                    : i.setState({ showMonitorCard: !1 }),
                                    t && t();
                                })
                                .catch(function () {
                                  i.setState({ showMonitorCard: !1 }), t && t();
                                });
                            },
                          },
                          {
                            key: "toMonitorEdit",
                            value: function (e) {
                              var t = this.state,
                                i = t.departCity,
                                a = t.departCityCode,
                                r = t.arriveCity,
                                n = t.arriveCityCode,
                                s = t.departDate,
                                l = (e || {}).fromAction || "xcx_list";
                              this.navigateTo({
                                url: "/pages/flight/monitoredit/monitoredit?departCityName="
                                  .concat(i, "&departCityCode=")
                                  .concat(a, "&arriveCityName=")
                                  .concat(r, "&arriveCityCode=")
                                  .concat(n, "&selectDate=")
                                  .concat(s, "&fromPage=")
                                  .concat(l),
                              });
                            },
                          },
                          {
                            key: "closeMonitorCard",
                            value: function () {
                              this.setState({ showMonitorCard: !1 });
                            },
                          },
                          {
                            key: "checkParity",
                            value: function () {
                              var e = this;
                              try {
                                var t = f().getStorageSync("parityTipHidden"),
                                  i = f().getStorageSync("parityHidden");
                                this.setState({
                                  parityTipHidden: !!t,
                                  parityHidden: !!i,
                                }),
                                  t ||
                                    setTimeout(function () {
                                      e.setState({ parityTipHidden: !0 }),
                                        f().setStorage({
                                          key: "parityTipHidden",
                                          data: !0,
                                        });
                                    }, 5e3);
                              } catch (e) {}
                            },
                          },
                          {
                            key: "toggleParity",
                            value: function () {
                              var e = this.state.parityHidden;
                              this.setState({
                                parityHidden: !e,
                                parityTipHidden: !0,
                              });
                              try {
                                f().setStorageSync("parityHidden", !e);
                              } catch (e) {}
                            },
                          },
                          {
                            key: "toFlightAllowanceWebview",
                            value: function () {
                              var e = this.state.isTieyou,
                                t = "https://m."
                                  .concat(
                                    e ? "tieyou" : "suanya",
                                    ".com/webapp/train/activity/20201012-ztrip-flight-allowance/?isHideNavBar=YES&identityName="
                                  )
                                  .concat(this.identityName || "", "&partner=")
                                  .concat(e ? "tieyou" : "zhixing");
                              this.ubtTrace("P0033_SP0000_M0000_ID0001_click", {
                                PageCode: this.pageId,
                                url: t,
                              }),
                                S.Z.commonNavigator(t);
                            },
                          },
                          {
                            key: "toStudentPrivilege",
                            value: function () {
                              var e = this.state.isTieyou,
                                t = "https://m."
                                  .concat(
                                    e ? "tieyou" : "suanya",
                                    ".com/webapp/train/activity/20200518-ztrip-flight-student-privilege/?partner="
                                  )
                                  .concat(e ? "tieyou" : "zhixing");
                              v.Z.twebview({ data: { url: t } });
                            },
                          },
                          {
                            key: "switchNoSinglesTab",
                            value: function (e) {
                              var t = e.currentTarget.dataset.type;
                              t !== this.state.noSinglesTab &&
                                this.setState({ noSinglesTab: t });
                            },
                          },
                          {
                            key: "onAnnouncementPopupClose",
                            value: function () {
                              var e = this.state.entrancePopup;
                              this.setState({
                                entrancePopup: (0, r.Z)(
                                  (0, r.Z)({}, e),
                                  {},
                                  { sw: 0 }
                                ),
                                entrancePopupHidden: !0,
                                showTopAnnouncement: !1,
                              });
                            },
                          },
                          {
                            key: "toggleTopAnnouncement",
                            value: function () {
                              this.setState({ showTopAnnouncement: !0 });
                            },
                          },
                          {
                            key: "hideSkeleton",
                            value: function () {
                              this.setState({ showSkeleton: !1 });
                            },
                          },
                          {
                            key: "onListScroll",
                            value: function (e) {
                              var t,
                                i,
                                a =
                                  !(
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                  ) || arguments[1],
                                r = this.state,
                                n = r.listId,
                                s = r.showHead,
                                l = 0;
                              l = a
                                ? null === (t = e[n]) ||
                                  void 0 === t ||
                                  null === (i = t.detail) ||
                                  void 0 === i
                                  ? void 0
                                  : i.scrollTop
                                : e.detail.scrollTop;
                              var o = this.state.filterScrollHidden;
                              if (
                                (this.setState({ listScrollTop: l }),
                                this._lastScrollTop)
                              ) {
                                if (l - this._lastScrollTop > 0) {
                                  if (
                                    (l >= 200 &&
                                      s &&
                                      this.setState({ showHead: !1 }),
                                    l > 30 && (this._reachTop = !1),
                                    this._reachBottom)
                                  )
                                    return;
                                  if (this._reachTop) return;
                                  o ||
                                    this.setState({ filterScrollHidden: !0 });
                                } else
                                  (this._reachBottom = !1),
                                    o &&
                                      this.setState({ filterScrollHidden: !1 });
                                this._lastScrollTop = l;
                              } else this._lastScrollTop = l;
                            },
                          },
                          {
                            key: "onListTop",
                            value: function () {
                              (this._reachTop = !0),
                                this.setState({
                                  filterScrollHidden: !1,
                                  showHead: !0,
                                });
                            },
                          },
                          {
                            key: "onListBottom",
                            value: function () {
                              this.state.filterScrollHidden &&
                                ((this._reachBottom = !0),
                                this.setState({ filterScrollHidden: !1 }));
                            },
                          },
                          {
                            key: "handleGetDiscount",
                            value: function (e) {
                              e && v.Z.twebview({ data: { url: e } });
                            },
                          },
                          {
                            key: "getAdvantageDrawInfo",
                            value: function (e) {
                              this.setState({ advantageDrawData: e });
                            },
                          },
                          {
                            key: "onAdvantageDraw",
                            value: function (e, t) {
                              return 18 === t
                                ? (0, ce.g)("listPage")
                                : 17 === t
                                ? (0, H.v)({ source: A.cK.LIST_BANNER })
                                : (8 === t &&
                                    this.setState({ advantageDrawShow: e }),
                                  21 == t ? (0, de.Y)() : void 0);
                            },
                          },
                          {
                            key: "handleRenderTop",
                            value: function () {
                              var e = this.state,
                                t = e.parityHidden,
                                i = e.departCityCode,
                                a = e.arriveCityCode,
                                r = e.noResultRecommends,
                                n = e.departDate,
                                s = e.isFilter,
                                l = e.tipAndFloat,
                                o = e.noSinglesTab,
                                c = e.airTrains,
                                d = e.isLogin,
                                h = e.flightHotel,
                                u = e.hasChild,
                                f = e.hasBaby,
                                g = e.newUserBannerInfo,
                                y = {
                                  arriveCityCode: a,
                                  departureCityCode: i,
                                  departureDate: n,
                                },
                                N =
                                  !!(
                                    ("nearby" === o && 0 === r.length) ||
                                    ("airTrain" === o && 0 === c.length)
                                  ) || !g;
                              return (0, O.BX)(O.HY, {
                                children: [
                                  (0, O.tZ)(m.View, {
                                    className: "node-isolate-tip-and-float",
                                    children:
                                      1 === (null == l ? void 0 : l.sw) &&
                                      "transfer" === o &&
                                      d &&
                                      (0, O.BX)(m.View, {
                                        className:
                                          "top-announcement flex-align-items-center",
                                        id: "AcEz",
                                        onClick: this.toggleTopAnnouncement,
                                        children: [
                                          (0, O.tZ)(m.View, {
                                            className: "txt flex-1",
                                            children: (0, O.tZ)(p.ZtRichText, {
                                              style:
                                                "color: " + (l.topColor || ""),
                                              nodes: S.Z.getEllipsisRichText(
                                                l.topText
                                              ),
                                              id: "AcFA",
                                              onClick:
                                                this.toggleTopAnnouncement,
                                            }),
                                          }),
                                          (0, O.tZ)(m.Text, {
                                            className: "ifont-arr iconfont",
                                          }),
                                        ],
                                      }),
                                  }),
                                  !N &&
                                    (0, O.tZ)(R.J, {
                                      data: { bannerInfo: g },
                                      fromPage: "flight_list",
                                    }),
                                  (0, O.tZ)(m.View, {
                                    className: "node-isolate-advantage-banner",
                                    children: (0, O.tZ)(F.Z, {
                                      getAdvantageDrawInfo:
                                        this.getAdvantageDrawInfo,
                                      onOpenDraw: this.onAdvantageDraw,
                                      tripInfo: y,
                                      visiable: N,
                                    }),
                                  }),
                                  (0, O.tZ)(m.View, {
                                    className: "node-isolate-flight-hotel",
                                    children:
                                      h &&
                                      (0, O.tZ)(ae, {
                                        index: 0,
                                        pageId: this.pageId,
                                        flight: h,
                                        hasChild: u,
                                        hasBaby: f,
                                        parityHidden: t,
                                        isFilter: s,
                                        handleFlightClick:
                                          this.handleFlightClick,
                                        ubtTrace: this.ubtTrace,
                                      }),
                                  }),
                                ],
                              });
                            },
                          },
                          {
                            key: "handleRenderBottom",
                            value: function () {
                              var e = this,
                                t = this.state,
                                i = t.showNearby,
                                a = t.nearbyCardPosition,
                                r = t.nearbyRoutes,
                                n = t.isTieyou,
                                s = t.monitorCardPosition,
                                l = t.noFlight,
                                o = t.showMonitorCard,
                                c = t.noSinglesTab,
                                d = t.grabInfo,
                                h = t.saleOuts,
                                u = t.isFilter,
                                f = t.transfers,
                                p = t.singles,
                                g = t.hasChild,
                                y = t.hasBaby,
                                N = t.noResultRecommends,
                                v = t.airTrains;
                              return (0, O.BX)(O.HY, {
                                children: [
                                  i &&
                                    2 === a &&
                                    r.length > 0 &&
                                    (0, O.tZ)(ne, {
                                      nearbyRoutes: r,
                                      toNearbyAirport: this.toNearbyAirport,
                                    }),
                                  2 === s &&
                                    !(l || !o || "transfer" !== c) &&
                                    (0, O.BX)(m.View, {
                                      className: "list-add-monitor",
                                      children: [
                                        (0, O.tZ)(m.Image, {
                                          className: "robot",
                                          src: "https://pic.c-ctrip.com/train/zt/wechat/robot.png",
                                        }),
                                        (0, O.BX)(m.View, {
                                          className: "cont",
                                          children: [
                                            (0, O.tZ)(m.View, {
                                              className: "tit",
                                              children: d.title,
                                            }),
                                            (0, O.BX)(m.View, {
                                              className: "tag",
                                              children: [
                                                d.tag1 &&
                                                  (0, O.tZ)(m.View, {
                                                    className:
                                                      "item " +
                                                      (n ? "ty" : "zx"),
                                                    children: d.tag1,
                                                  }),
                                                d.tag2 &&
                                                  (0, O.tZ)(m.View, {
                                                    className:
                                                      "item " +
                                                      (n ? "ty" : "zx"),
                                                    children: d.tag2,
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, O.tZ)(m.Form, {
                                          onSubmit: this.toMonitorEdit,
                                          reportSubmit: "true",
                                          "data-ubt-key":
                                            "xcx_flt_listmonitor_click",
                                          children: (0, O.tZ)(m.Button, {
                                            className:
                                              "btn-primary btn-monitor",
                                            hoverClass: "btn-monitor_hover",
                                            formType: "submit",
                                            children: "添加监控",
                                          }),
                                        }),
                                        (0, O.tZ)(m.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AcFB",
                                          onClick: this.closeMonitorCard,
                                        }),
                                      ],
                                    }),
                                  h.length > 0 &&
                                    !u &&
                                    (0, O.tZ)(m.View, {
                                      className: "division-line",
                                      children: "已售完，以下可抢票",
                                    }),
                                  h.length > 0 &&
                                    !u &&
                                    (0, O.tZ)(O.HY, {
                                      children: h.map(function (t, i) {
                                        return (0,
                                        O.BX)(m.View, { className: "fltlist_item no-ticket-fltlist-item", "data-index": i, "data-type": "grab", id: "AcFC", onClick: e.handleGrabFlightClick, children: [(0, O.BX)(m.View, { className: "flt_intro", children: [(0, O.BX)(m.View, { className: "flt_col", children: [(0, O.BX)(m.View, { className: "flt_depart", children: [(0, O.tZ)(m.Text, { className: "flt_time", children: t.dptTimeStr }), (0, O.tZ)(m.Text, { className: "flt_airport " + (1 === t.cityColor || 3 === t.cityColor ? "torage" : ""), children: t.dptAName + t.dptTrm })] }), (0, O.BX)(m.View, { className: "separator", children: [t.abbr && (0, O.tZ)(m.View, { className: "spt_type", children: t.abbr }), (0, O.tZ)(m.View, { className: "spt_arr" })] }), (0, O.BX)(m.View, { className: "flt_arrival", children: [(0, O.tZ)(m.Text, { className: "flt_time", children: t.arrTimeStr }), (0, O.tZ)(m.Text, { className: "flt_airport " + (2 === t.cityColor || 3 === t.cityColor ? "torage" : ""), children: t.arrAName + t.arrTrm })] }), t.dayDiff > 0 && (0, O.tZ)(m.Text, { className: "next", children: "+" + t.dayDiff + "天" })] }), (0, O.tZ)(m.View, { className: "price_col", children: (0, O.tZ)(m.View, { className: "status", children: "售完" }) })] }), (0, O.BX)(m.View, { className: "airline_info", children: [(0, O.tZ)(m.Image, { className: "airline_logo", src: t.sequences[0].airIcon }), (0, O.BX)(m.View, { className: "airline_txt", children: [(0, O.BX)(m.Text, { className: "span", children: [t.sequences[0].airName + t.sequences[0].flightNo, (0, O.tZ)(m.Text, { children: t.sequences[0].shared ? "共享" : "" })] }), (0, O.tZ)(m.Text, { className: "span", children: (t.sequences[0].cftn || "") + (t.sequences[0].cfts ? "(" + t.sequences[0].cfts + ")" : "") }), (0, O.tZ)(m.Text, { className: "span", children: t.costTime })] }), (0, O.tZ)(m.View, { className: "grab-status-price " + (n ? "ty" : "zx"), children: "￥" + t.gbpr + "去抢票" })] })] }, i);
                                      }),
                                    }),
                                  (null == f ? void 0 : f[0]) &&
                                    0 !== p.length &&
                                    (0, O.tZ)(m.View, {
                                      className: "division-line",
                                      children: "中转航班推荐",
                                    }),
                                  (null == f ? void 0 : f[0]) &&
                                    "transfer" === c &&
                                    (0, O.BX)(O.HY, {
                                      children: [
                                        f.map(function (t, i) {
                                          return (0,
                                          O.tZ)(re, { flight: t, hasChild: g, hasBaby: y, handleFlightClick: e.handleFlightClick }, i);
                                        }),
                                        3 === s &&
                                          !(l || !o) &&
                                          (0, O.BX)(m.View, {
                                            className: "list-add-monitor",
                                            children: [
                                              (0, O.tZ)(m.Image, {
                                                className: "robot",
                                                src: "https://pic.c-ctrip.com/train/zt/wechat/robot.png",
                                              }),
                                              (0, O.BX)(m.View, {
                                                className: "cont",
                                                children: [
                                                  (0, O.tZ)(m.View, {
                                                    className: "tit",
                                                    children: d.title,
                                                  }),
                                                  (0, O.BX)(m.View, {
                                                    className: "tag",
                                                    children: [
                                                      d.tag1 &&
                                                        (0, O.tZ)(m.View, {
                                                          className:
                                                            "item " +
                                                            (n ? "ty" : "zx"),
                                                          children: d.tag1,
                                                        }),
                                                      d.tag2 &&
                                                        (0, O.tZ)(m.View, {
                                                          className:
                                                            "item " +
                                                            (n ? "ty" : "zx"),
                                                          children: d.tag2,
                                                        }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, O.tZ)(m.Form, {
                                                onSubmit: this.toMonitorEdit,
                                                reportSubmit: "true",
                                                "data-ubt-key":
                                                  "xcx_flt_listmonitor_click",
                                                children: (0, O.tZ)(m.Button, {
                                                  className:
                                                    "btn-primary btn-monitor",
                                                  hoverClass:
                                                    "btn-monitor_hover",
                                                  formType: "submit",
                                                  children: "添加监控",
                                                }),
                                              }),
                                              (0, O.tZ)(m.Text, {
                                                className:
                                                  "ifont-closed iconfont",
                                                id: "AcFD",
                                                onClick: this.closeMonitorCard,
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  4 === s &&
                                    !(l || !o || "transfer" !== c) &&
                                    (0, O.BX)(m.View, {
                                      className: "list-add-monitor",
                                      children: [
                                        (0, O.tZ)(m.Image, {
                                          className: "robot",
                                          src: "https://pic.c-ctrip.com/train/zt/wechat/robot.png",
                                        }),
                                        (0, O.BX)(m.View, {
                                          className: "cont",
                                          children: [
                                            (0, O.tZ)(m.View, {
                                              className: "tit",
                                              children: d.title,
                                            }),
                                            (0, O.BX)(m.View, {
                                              className: "tag",
                                              children: [
                                                d.tag1 &&
                                                  (0, O.tZ)(m.View, {
                                                    className:
                                                      "item " +
                                                      (n ? "ty" : "zx"),
                                                    children: d.tag1,
                                                  }),
                                                d.tag2 &&
                                                  (0, O.tZ)(m.View, {
                                                    className:
                                                      "item " +
                                                      (n ? "ty" : "zx"),
                                                    children: d.tag2,
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, O.tZ)(m.Form, {
                                          onSubmit: this.toMonitorEdit,
                                          reportSubmit: "true",
                                          "data-ubt-key":
                                            "xcx_flt_listmonitor_click",
                                          children: (0, O.tZ)(m.Button, {
                                            className:
                                              "btn-primary btn-monitor",
                                            hoverClass: "btn-monitor_hover",
                                            formType: "submit",
                                            children: "添加监控",
                                          }),
                                        }),
                                        (0, O.tZ)(m.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AcFE",
                                          onClick: this.closeMonitorCard,
                                        }),
                                      ],
                                    }),
                                  "nearby" === c &&
                                    (0, O.BX)(O.HY, {
                                      children: [
                                        N.map(function (t, i) {
                                          return (0, O.BX)(
                                            m.View,
                                            {
                                              className: "flt-near-airport",
                                              children: [
                                                (0, O.BX)(m.View, {
                                                  className:
                                                    "flt-near-airport-hd",
                                                  children: [
                                                    (0, O.BX)(m.View, {
                                                      className: "cont",
                                                      children: [
                                                        (0, O.tZ)(m.Text, {
                                                          className: t.dptColor
                                                            ? "tgreen"
                                                            : "",
                                                          children: t.dptName,
                                                        }),
                                                        (0, O.tZ)(m.View, {
                                                          className: "mid",
                                                          children: (0, O.tZ)(
                                                            m.Text,
                                                            {
                                                              className:
                                                                "ifont-splane iconfont",
                                                            }
                                                          ),
                                                        }),
                                                        (0, O.tZ)(m.Text, {
                                                          className: t.arrColor
                                                            ? "tgreen"
                                                            : "",
                                                          children: t.arrName,
                                                        }),
                                                      ],
                                                    }),
                                                    t.trainDesc &&
                                                      (0, O.tZ)(m.View, {
                                                        className: "rbox",
                                                        children: t.trainDesc,
                                                      }),
                                                  ],
                                                }),
                                                t.flights.map(function (t, a) {
                                                  var r;
                                                  return (0,
                                                  O.BX)(m.View, { className: "fltlist_item", "data-index": i, "data-idx": a, "data-type": "recommend", id: "AcFF", onClick: e.handleRecommendFlightClick, children: [(0, O.tZ)(ie, { flight: t }), (0, O.BX)(m.View, { className: "flt_intro", children: [(0, O.BX)(m.View, { className: "flt_col", children: [(0, O.BX)(m.View, { className: "flt_depart", children: [(0, O.tZ)(m.Text, { className: "flt_time", children: t.dptTimeStr }), (0, O.tZ)(m.Text, { className: "flt_airport tgrey", children: t.dptAName + t.dptTrm })] }), (0, O.BX)(m.View, { className: "separator", children: [t.abbr && (0, O.tZ)(m.View, { className: "spt_type", children: t.abbr }), (0, O.tZ)(m.View, { className: "spt_arr" })] }), (0, O.BX)(m.View, { className: "flt_arrival", children: [(0, O.tZ)(m.Text, { className: "flt_time", children: t.arrTimeStr }), (0, O.tZ)(m.Text, { className: "flt_airport tgrey", children: t.arrAName + t.arrTrm })] }), t.dayDiff > 0 && (0, O.tZ)(m.Text, { className: "next", children: "+" + t.dayDiff + "天" })] }), (0, O.BX)(m.View, { className: "price_col", children: [(0, O.BX)(m.View, { className: "price", children: [t.stock && (0, O.tZ)(m.View, { className: "tag", children: t.stock }), (0, O.tZ)(m.Text, { className: "flt_price color-red", children: t.apr })] }), t.ccd && (0, O.tZ)(m.Text, { className: "discount-info bdcolor-red color-red", children: t.ccd }), !g && !y && (null === (r = t.ncd) || void 0 === r ? void 0 : r.text) && (0, O.BX)(m.View, { className: "holiday-info bdcolor-red color-red", children: [t.ncd.url && (0, O.tZ)(m.Image, { className: "holiday-img", src: t.ncd.url }), (0, O.tZ)(m.Text, { className: t.ncd.url ? "" : "lb1", children: t.ncd.text })] })] })] }), (0, O.BX)(m.View, { className: "airline_info", children: [(0, O.tZ)(m.Image, { className: "airline_logo", src: t.sequences[0].airIcon }), (0, O.BX)(m.View, { className: "airline_txt", children: [(0, O.BX)(m.Text, { className: "span", children: [t.sequences[0].airName + t.sequences[0].flightNo, (0, O.tZ)(m.Text, { children: t.sequences[0].shared ? "共享" : "" })] }), !t.transfer && (0, O.tZ)(m.Text, { className: "span", children: t.costTime })] }), t.transfer && (0, O.BX)(O.HY, { children: [(0, O.tZ)(m.Image, { className: "airline_logo", src: t.sequences[1].airIcon }), (0, O.BX)(m.View, { className: "airline_txt", children: [(0, O.BX)(m.Text, { className: "span", children: [t.sequences[1].airName + t.sequences[1].flightNo, (0, O.tZ)(m.Text, { children: t.sequences[1].shared ? "共享" : "" })] }), (0, O.tZ)(m.Text, { className: "span", children: t.costTime })] })] }), !y && !g && t.discount && (0, O.tZ)(m.Text, { className: "airline_tips", children: t.discount }), ((g && !y) || (!g && y)) && (0, O.tZ)(m.Text, { className: "child-price", children: (g ? "儿童" : "婴儿") + ":￥" + (g ? t.cpr : t.bpr) }), g && y && (0, O.tZ)(m.Text, { className: "child-price", children: "儿童:￥" + t.cpr })] })] }, t.flightNumber);
                                                }),
                                                (0, O.BX)(m.View, {
                                                  className:
                                                    "flt-near-airport-more",
                                                  "data-index": i,
                                                  id: "AcFG",
                                                  onClick:
                                                    e.handleNoResultMoreClick,
                                                  children: [
                                                    "更多",
                                                    (0, O.tZ)(m.Text, {
                                                      className: "tgreen",
                                                      children:
                                                        t.dptName +
                                                        "-" +
                                                        t.arrName,
                                                    }),
                                                    "航班",
                                                    (0, O.tZ)(m.Text, {
                                                      className:
                                                        "ifont-arr iconfont",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            i
                                          );
                                        }),
                                        0 === N.length && this.noDataRender(),
                                      ],
                                    }),
                                  "airTrain" === c &&
                                    (0, O.BX)(O.HY, {
                                      children: [
                                        0 !== v.length &&
                                          (0, O.tZ)(O.HY, {
                                            children: v.map(function (t, i) {
                                              return (0, O.BX)(
                                                m.View,
                                                {
                                                  className: "fltlist_item",
                                                  "data-index": i,
                                                  id: "AcFH",
                                                  onClick:
                                                    e.handleAirTrainItemClick,
                                                  children: [
                                                    (0, O.tZ)(ie, {
                                                      flight: t,
                                                    }),
                                                    (0, O.BX)(m.View, {
                                                      className: "flt_intro",
                                                      children: [
                                                        (0, O.BX)(m.View, {
                                                          className: "flt_col",
                                                          children: [
                                                            t.seqs.map(
                                                              function (e) {
                                                                return (0,
                                                                O.tZ)(O.HY, {
                                                                  children:
                                                                    1 ===
                                                                      e.idx &&
                                                                    (0, O.BX)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "flt_depart",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            O.tZ)(
                                                                              m.Text,
                                                                              {
                                                                                className:
                                                                                  "flt_time",
                                                                                children:
                                                                                  e.dptTimeStr,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            O.tZ)(
                                                                              m.Text,
                                                                              {
                                                                                className:
                                                                                  "flt_airport tgrey",
                                                                                children:
                                                                                  e.dptName,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                });
                                                              }
                                                            ),
                                                            (0, O.BX)(m.View, {
                                                              className:
                                                                "flt-train-trans",
                                                              children: [
                                                                t.seqs.map(
                                                                  function (e) {
                                                                    return (0,
                                                                    O.tZ)(
                                                                      O.HY,
                                                                      {
                                                                        children:
                                                                          1 ===
                                                                            e.idx &&
                                                                          (0,
                                                                          O.tZ)(
                                                                            m.Text,
                                                                            {
                                                                              className:
                                                                                ("FLT" ===
                                                                                e.type
                                                                                  ? "ifont-splane"
                                                                                  : "ifont-train") +
                                                                                " iconfont",
                                                                            }
                                                                          ),
                                                                      }
                                                                    );
                                                                  }
                                                                ),
                                                                (0, O.tZ)(
                                                                  m.Text,
                                                                  {
                                                                    className:
                                                                      "city",
                                                                    children:
                                                                      t.tsf,
                                                                  }
                                                                ),
                                                                t.seqs.map(
                                                                  function (e) {
                                                                    return (0,
                                                                    O.tZ)(
                                                                      O.HY,
                                                                      {
                                                                        children:
                                                                          2 ===
                                                                            e.idx &&
                                                                          (0,
                                                                          O.tZ)(
                                                                            m.Text,
                                                                            {
                                                                              className:
                                                                                ("FLT" ===
                                                                                e.type
                                                                                  ? "ifont-splane"
                                                                                  : "ifont-train") +
                                                                                " iconfont",
                                                                            }
                                                                          ),
                                                                      }
                                                                    );
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            t.seqs.map(
                                                              function (e) {
                                                                return (0,
                                                                O.BX)(O.HY, {
                                                                  children: [
                                                                    2 ===
                                                                      e.idx &&
                                                                      (0, O.BX)(
                                                                        m.View,
                                                                        {
                                                                          className:
                                                                            "flt_arrival",
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              O.tZ)(
                                                                                m.Text,
                                                                                {
                                                                                  className:
                                                                                    "flt_time",
                                                                                  children:
                                                                                    e.arrTimeStr,
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              O.tZ)(
                                                                                m.Text,
                                                                                {
                                                                                  className:
                                                                                    "flt_airport tgrey",
                                                                                  children:
                                                                                    e.arrName,
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                    e.dayDiff >
                                                                      0 &&
                                                                      (0, O.tZ)(
                                                                        m.Text,
                                                                        {
                                                                          className:
                                                                            "next",
                                                                          children:
                                                                            "+" +
                                                                            e.dayDiff +
                                                                            "天",
                                                                        }
                                                                      ),
                                                                  ],
                                                                });
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                        (0, O.BX)(m.View, {
                                                          className:
                                                            "price_col",
                                                          children: [
                                                            (0, O.tZ)(m.View, {
                                                              className:
                                                                "price",
                                                              children: (0,
                                                              O.tZ)(m.Text, {
                                                                className:
                                                                  "flt_price color-red",
                                                                children: t.ppr,
                                                              }),
                                                            }),
                                                            t.ccd &&
                                                              (0, O.tZ)(
                                                                m.Text,
                                                                {
                                                                  className:
                                                                    "discount-info bdcolor-red color-red",
                                                                  children:
                                                                    t.ccd,
                                                                }
                                                              ),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, O.BX)(m.View, {
                                                      className: "airline_info",
                                                      children: [
                                                        t.seqs.map(function (
                                                          e
                                                        ) {
                                                          return (0, O.tZ)(
                                                            O.HY,
                                                            {
                                                              children:
                                                                "FLT" ===
                                                                  e.type &&
                                                                (0, O.tZ)(
                                                                  m.Image,
                                                                  {
                                                                    className:
                                                                      "airline_logo",
                                                                    src: e.flt
                                                                      .airIcon,
                                                                  }
                                                                ),
                                                            }
                                                          );
                                                        }),
                                                        (0, O.BX)(m.View, {
                                                          className:
                                                            "airline_txt",
                                                          children: [
                                                            t.seqs.map(
                                                              function (e) {
                                                                return (0,
                                                                O.tZ)(O.HY, {
                                                                  children:
                                                                    "FLT" ===
                                                                      e.type &&
                                                                    (0, O.tZ)(
                                                                      m.Text,
                                                                      {
                                                                        className:
                                                                          "span",
                                                                        children:
                                                                          e.flt
                                                                            .airName +
                                                                          e.flt
                                                                            .flightNo,
                                                                      }
                                                                    ),
                                                                });
                                                              }
                                                            ),
                                                            t.seqs.map(
                                                              function (e) {
                                                                return (0,
                                                                O.tZ)(O.HY, {
                                                                  children:
                                                                    "TRN" ===
                                                                      e.type &&
                                                                    (0, O.tZ)(
                                                                      m.Text,
                                                                      {
                                                                        className:
                                                                          "span",
                                                                        children:
                                                                          e.trn
                                                                            .trnType +
                                                                          " " +
                                                                          e.trn
                                                                            .tktType,
                                                                      }
                                                                    ),
                                                                });
                                                              }
                                                            ),
                                                            (0, O.tZ)(m.Text, {
                                                              className: "span",
                                                              children: t.ct,
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                i
                                              );
                                            }),
                                          }),
                                        0 === v.length && this.noDataRender(),
                                      ],
                                    }),
                                  (0, O.tZ)(m.View, {
                                    className: "fill-padding",
                                  }),
                                ],
                              });
                            },
                          },
                          {
                            key: "noDataRender",
                            value: function () {
                              var e = this.state.isTieyou;
                              return (0, O.BX)(m.View, {
                                className: "list-none",
                                children: [
                                  (0, O.tZ)(m.Icon, {
                                    className:
                                      "img-selnone " + (e ? "ty" : "zx"),
                                  }),
                                  (0, O.tZ)(m.View, {
                                    className: "tit",
                                    children: "暂无内容",
                                  }),
                                  (0, O.tZ)(m.View, {
                                    className: "txt",
                                    children:
                                      "没有找到出行方案，换个日期试试吧",
                                  }),
                                ],
                              });
                            },
                          },
                          {
                            key: "handleRenderSingles",
                            value: function (e, t) {
                              var i = this.state,
                                a = i.isTieyou,
                                r = i.hasChild,
                                n = i.hasBaby,
                                s = i.parityHidden,
                                l = i.isFilter,
                                o = i.showNearby,
                                c = i.nearbyCardPosition,
                                d = i.nearbyRoutes,
                                h = i.monitorCardPosition,
                                u = i.noFlight,
                                f = i.showMonitorCard,
                                p = i.grabInfo,
                                g = i.isLogin,
                                y = i.filterParams.expandSharedFlight;
                              return (0, O.BX)(O.HY, {
                                children: [
                                  (0, O.tZ)(ae, {
                                    index: t,
                                    pageId: this.pageId,
                                    flight: e,
                                    hasChild: r,
                                    hasBaby: n,
                                    parityHidden: s,
                                    isFilter: l,
                                    expandSharedFlight: y,
                                    handleFlightClick: this.handleFlightClick,
                                    ubtTrace: this.ubtTrace,
                                  }),
                                  o &&
                                    1 === c &&
                                    d.length > 0 &&
                                    1 === t &&
                                    (0, O.tZ)(ne, {
                                      nearbyRoutes: d,
                                      toNearbyAirport: this.toNearbyAirport,
                                    }),
                                  1 === h &&
                                    4 === t &&
                                    !(u || !f) &&
                                    g &&
                                    (0, O.BX)(m.View, {
                                      className: "list-add-monitor",
                                      children: [
                                        (0, O.tZ)(m.Image, {
                                          className: "robot",
                                          src: "https://pic.c-ctrip.com/train/zt/wechat/robot.png",
                                        }),
                                        (0, O.BX)(m.View, {
                                          className: "cont",
                                          children: [
                                            (0, O.tZ)(m.View, {
                                              className: "tit",
                                              children: p.title,
                                            }),
                                            (0, O.tZ)(m.View, {
                                              className: "tag",
                                              children: p.savingPotRemark
                                                ? (0, O.tZ)(O.HY, {
                                                    children: (0, O.tZ)(
                                                      m.View,
                                                      {
                                                        className:
                                                          "remark color-primary",
                                                        children:
                                                          p.savingPotRemark,
                                                      }
                                                    ),
                                                  })
                                                : (0, O.BX)(O.HY, {
                                                    children: [
                                                      p.tag1 &&
                                                        (0, O.tZ)(m.View, {
                                                          className:
                                                            "item " +
                                                            (a ? "ty" : "zx"),
                                                          children: p.tag1,
                                                        }),
                                                      p.tag2 &&
                                                        (0, O.tZ)(m.View, {
                                                          className:
                                                            "item " +
                                                            (a ? "ty" : "zx"),
                                                          children: p.tag2,
                                                        }),
                                                    ],
                                                  }),
                                            }),
                                          ],
                                        }),
                                        (0, O.tZ)(m.Form, {
                                          onSubmit: this.toMonitorEdit,
                                          reportSubmit: "true",
                                          "data-ubt-key":
                                            "xcx_flt_listmonitor_click",
                                          children: (0, O.tZ)(m.Button, {
                                            className:
                                              "btn-primary btn-monitor",
                                            hoverClass: "btn-monitor_hover",
                                            formType: "submit",
                                            children: "添加监控",
                                          }),
                                        }),
                                        (0, O.tZ)(m.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AcFI",
                                          onClick: this.closeMonitorCard,
                                        }),
                                      ],
                                    }),
                                ],
                              });
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.state,
                                i = t.showSkeleton,
                                a = t.transfers,
                                r = t.noResultRecommends,
                                n = t.airTrains,
                                s = t.noSinglesTab,
                                l = t.listLowestPrice,
                                o = t.noResultRecommendsLowestPrice,
                                c = t.airTrainsListLowestPrice,
                                d = t.singles,
                                h = t.parityHidden,
                                u = t.isFilter,
                                f = t.filterScrollHidden,
                                g = t.sortType,
                                y = t.timeSort,
                                N = t.priceSort,
                                v = t.parityTipHidden,
                                T = t.entrancePopup,
                                Z = t.surpriseParams,
                                C = t.isShowNewCoupon,
                                b = t.couponAmount,
                                x = t.expiredTime,
                                S = t.isLogin,
                                B = t.advantageDrawShow,
                                F = t.advantageDrawData,
                                D = t.entrancePopupHidden,
                                H = t.listScrollTop,
                                A = t.departDate,
                                q = t.departCityCode,
                                R = t.arriveCityCode,
                                z = t.listId,
                                M = t.entranceDrawerTips,
                                j = t.showTopAnnouncement,
                                Y = t.showHead,
                                U = { expiredTime: x, couponAmount: b },
                                K = {
                                  lowerThreshold: 1e3,
                                  upperThreshold: 100,
                                  scrollTop: H,
                                  onScrollToUpper: this.onListTop,
                                },
                                W = C,
                                J =
                                  1 === (null == T ? void 0 : T.sw) && !D && !W,
                                Q =
                                  !!d &&
                                  !d[0] &&
                                  !(i || (!a[0] && !r[0] && !n[0]));
                              return (0, O.BX)(O.HY, {
                                children: [
                                  (0, O.tZ)(I.Z, {
                                    selectDate: A,
                                    departCityCode: q,
                                    arriveCityCode: R,
                                    handleSelectDate: this.chooseDate,
                                    lowestPrice: l,
                                    flightType: "single",
                                    showPrice: !0,
                                    className: Y ? "" : "hide",
                                  }),
                                  (0, O.tZ)(se.Z, {
                                    isLogin: S,
                                    doLogin: this.doLogin,
                                  }),
                                  (0, O.tZ)(m.View, {
                                    className: "node-isolate-fltlist-tab",
                                    children:
                                      Q &&
                                      (0, O.BX)(m.View, {
                                        className: "fltlist-tab flex",
                                        children: [
                                          a &&
                                            a[0] &&
                                            (0, O.BX)(m.View, {
                                              className:
                                                "item " +
                                                w.default.zxTyStr +
                                                " " +
                                                ("transfer" === s ? "cur" : ""),
                                              "data-type": "transfer",
                                              id: "AcFJ",
                                              onClick: this.switchNoSinglesTab,
                                              children: [
                                                (0, O.tZ)(m.View, {
                                                  className: "strong",
                                                  children: "飞机中转",
                                                }),
                                                (0, O.tZ)(m.View, {
                                                  className: "txt",
                                                  children: "￥" + l + "起",
                                                }),
                                              ],
                                            }),
                                          (0, O.BX)(m.View, {
                                            className:
                                              "item " +
                                              w.default.zxTyStr +
                                              " " +
                                              ("nearby" === s ? "cur" : ""),
                                            "data-type": "nearby",
                                            id: "AcFK",
                                            onClick: this.switchNoSinglesTab,
                                            children: [
                                              !1,
                                              (0, O.tZ)(m.View, {
                                                className: "strong",
                                                children: "邻近机场",
                                              }),
                                              (0, O.tZ)(m.View, {
                                                className: "txt",
                                                children: o
                                                  ? "￥" + o + "起"
                                                  : "暂无报价",
                                              }),
                                            ],
                                          }),
                                          (0, O.BX)(m.View, {
                                            className:
                                              "item " +
                                              w.default.zxTyStr +
                                              " " +
                                              ("airTrain" === s ? "cur" : ""),
                                            "data-type": "airTrain",
                                            id: "AcFL",
                                            onClick: this.switchNoSinglesTab,
                                            children: [
                                              (0, O.tZ)(m.View, {
                                                className: "strong",
                                                children: "空铁特惠",
                                              }),
                                              (0, O.tZ)(m.View, {
                                                className: "txt",
                                                children: c
                                                  ? "￥" + c + "起"
                                                  : "暂无报价",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  }),
                                  (0, O.BX)(m.View, {
                                    className: "fltlist flex-1",
                                    children: [
                                      i && (0, O.tZ)(E.Z, {}),
                                      !i &&
                                        !w.default.isH5 &&
                                        !w.default.isAlipay &&
                                        (0, O.tZ)(p.ZtVirtualList, {
                                          className: "flight-scroll-list",
                                          scrollViewProps: K,
                                          list: d,
                                          listId: z,
                                          screenNum: 3,
                                          onRender: this.handleRenderSingles,
                                          onRenderTop: this.handleRenderTop,
                                          onRenderBottom:
                                            this.handleRenderBottom,
                                          onComplete: this.onListBottom,
                                          onGetScrollData: this.onListScroll,
                                        }),
                                      !i &&
                                        (w.default.isH5 ||
                                          w.default.isAlipay) &&
                                        (0, O.BX)(m.ScrollView, {
                                          scrollY: !0,
                                          className: "flight-scroll-list",
                                          lowerThreshold: 400,
                                          onScroll: function (t) {
                                            return e.onListScroll(t, !1);
                                          },
                                          onScrollToUpper: this.onListTop,
                                          onScrollToLower: this.onListBottom,
                                          children: [
                                            this.handleRenderTop(),
                                            null == d
                                              ? void 0
                                              : d.map(function (t, i) {
                                                  return e.handleRenderSingles(
                                                    t,
                                                    i
                                                  );
                                                }),
                                            this.handleRenderBottom(),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, O.tZ)(oe, {
                                    showSkeleton: i,
                                    isLogin: S,
                                    noSinglesTab: s,
                                    filterScrollHidden: f,
                                    isFilter: u,
                                    sortType: g,
                                    timeSort: y,
                                    priceSort: N,
                                    parityHidden: h,
                                    parityTipHidden: v,
                                    openFilter: this.openFilter.bind(this),
                                    sortBy: this.sortBy.bind(this),
                                    toggleParity: this.toggleParity.bind(this),
                                  }),
                                  !w.default.isBaidu &&
                                    (0, O.tZ)(m.View, {
                                      className: "fixed-mrjt",
                                      id: "AcFM",
                                      onClick: this.toFlightAllowanceWebview,
                                    }),
                                  (0, O.tZ)(X.Z, {
                                    isShow: J || j,
                                    entrancePopup: T,
                                    entranceDrawerTips: M,
                                    onClose: this.onAnnouncementPopupClose,
                                  }),
                                  !J &&
                                    b &&
                                    !C &&
                                    (0, O.tZ)(P.Z, {
                                      params: U,
                                      couponFixedShow: this.couponFixedShow,
                                    }),
                                  (0, O.tZ)(m.View, {
                                    className: "node-isolate-draw-pop",
                                    children:
                                      S &&
                                      (0, O.tZ)(L.Z, {
                                        fromPage: "list",
                                        handleShow: this.handleDrawPopShow,
                                        ubtTrace: this.ubtTrace,
                                        pageId: this.pageId,
                                      }),
                                  }),
                                  (0, O.tZ)(_.Z, {
                                    params: Z,
                                    getCouponInfomation:
                                      this.getCouponInfomation,
                                    outerShow: W,
                                    handleCouponClose:
                                      this.handleNewCouponClose,
                                    handleReceive: this.handleCouponReceive,
                                  }),
                                  (0, O.tZ)(V.Z, {
                                    show: B,
                                    bannerDrawInfo: F,
                                    onClose: this.onAdvantageDraw,
                                  }),
                                  (0, O.tZ)(k.Z, {
                                    ref: function (t) {
                                      e.onDrawerAttach(t, !0);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(h.PureComponent))
                  ) || Q)
              ) || Q;
          Page(
            (0, a.createPageConfig)(
              fe,
              "pages/flight/list/list",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#efefef",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
                navigationBarTitleText: "",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            56620, 14906, 49608, 16048, 72032, 99010, 16386, 65982, 94885,
            61857, 46263, 80267, 73783, 42475, 46891, 40980, 79470, 86642,
            40981, 56983, 63511, 29126, 3683, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(10410);
          }
        ),
          e.O();
      },
    ]);
})();
