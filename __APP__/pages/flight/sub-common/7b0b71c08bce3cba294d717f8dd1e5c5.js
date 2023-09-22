!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [40980],
    {
      12396: function (e, t, i) {
        var r = i(298),
          a = i(90129),
          n = i(52500),
          c = (i(92954), i(91006)),
          l = i.n(c),
          o = i(71515),
          s = i(8271),
          u = i.n(s),
          d = i(2326),
          f = i(9062),
          h = i(94350),
          p = i(55916),
          C = i(26862),
          y = i(48813),
          D = "YYYY-MM-DD",
          v = u()().format(D),
          g = u()().add(1, "day").format(D),
          m = u()(v)
            .add(f.g2 - 1, "day")
            .format(D),
          w = function (e) {
            var t = e.flightType,
              i = {
                beginDate: v,
                endDate: m,
                chooseDate: v,
                title: "选择日期",
                bu: "flight",
              };
            t && (i.flightType = f.C4[t]),
              (0, h.X)({ calendarParams: i, exclusive: !0 });
          },
          Z = function (e) {
            var t = e.departCityCode,
              i = e.arriveCityCode,
              r = e.setPriceList,
              a = { data: { departCityCode: t, arriveCityCode: i } };
            return (0, p.MX)(a).then(function (e) {
              var t;
              if (
                1 == e.resultCode &&
                (null === (t = e.data) || void 0 === t ? void 0 : t.length) > 0
              ) {
                var i = e.data;
                r(i);
              }
            });
          },
          P = function (e) {
            var t = e.list,
              i = e.selectDate,
              r = e.setReRender,
              a = void 0 === r ? function () {} : r,
              n = e.handleSelectDate,
              c = void 0 === n ? function () {} : n,
              l = e.departCityCode,
              o = e.arriveCityCode,
              s = e.flightType,
              u = {
                beginDate: v,
                endDate: m,
                chooseDate: i,
                title: "选择日期",
                bu: "flight",
              };
            s && (u.flightType = f.C4[s]),
              l &&
                o &&
                (u.queryParams = {
                  data: { departCityCode: l, arriveCityCode: o },
                });
            (0, h.U)({
              calendarParams: u,
              onConfirm: function (e) {
                i !== e &&
                  (t.some(function (t) {
                    return t.flightDate == e;
                  }) || a(!0),
                  c(e));
              },
              exclusive: !0,
            });
          },
          T = function (e) {
            var t = u()(m).diff(u()(e), "day");
            return (
              "c-" +
              (e === v || e === g
                ? v
                : t < 3
                ? e
                : u()(e).subtract(2, "day").format(D))
            );
          },
          b = n.default.memo(function (e) {
            var t = e.dateDesc,
              i = e.weekDay,
              r = e.restDay,
              a = e.workDay,
              n = e.festival,
              c = e.showPrice,
              l = e.cur,
              s = r || a,
              u = n || (c ? t : i),
              d = r ? "休" : a ? "班" : "";
            return (0,
            y.BX)(y.HY, { children: [u, " ", s ? (0, y.tZ)(o.View, { className: "rest-icon ".concat(l ? "cur" : ""), children: d }) : c ? i : null] });
          }),
          k = function (e) {
            var t = e.selectDate,
              i = e.handleSelectDate,
              c = e.departCityCode,
              l = e.arriveCityCode,
              s = e.lowestPrice,
              u = e.flightType,
              f = e.showPrice,
              h = e.className,
              p = (0, n.useState)([]),
              D = (0, a.Z)(p, 2),
              v = D[0],
              g = D[1],
              m = (0, n.useState)(""),
              k = (0, a.Z)(m, 2),
              L = k[0],
              N = k[1],
              x = (0, n.useRef)({ reRender: !0, priceList: [] }),
              R = function (e) {
                x.current.reRender = e;
              },
              V = function (e) {
                x.current.priceList = e;
              },
              S = function (e) {
                e && N(T(e));
              };
            (0, n.useEffect)(function () {
              w({ flightType: u });
            }, []),
              (0, n.useEffect)(
                function () {
                  if (t)
                    if (x.current.reRender) {
                      var e = d.Z.generateDateMap({
                        priceList: x.current.priceList,
                        currentDate: t,
                      });
                      g(e);
                    } else S(t);
                },
                [t]
              ),
              (0, n.useEffect)(
                function () {
                  f &&
                    0 == x.current.priceList.length &&
                    c &&
                    l &&
                    Z({
                      departCityCode: c,
                      arriveCityCode: l,
                      setPriceList: V,
                    }).then(function () {
                      var e = d.Z.generateDateMap({
                        priceList: x.current.priceList,
                        currentDate: t,
                      });
                      g(e);
                    });
                },
                [c, l]
              );
            var X = (0, n.useCallback)(
              function () {
                setTimeout(function () {
                  S(t);
                }, 0);
              },
              [t]
            );
            (0, n.useLayoutEffect)(
              function () {
                v.length > 0 && x.current.reRender && (X(), R(!1));
              },
              [v]
            ),
              (0, n.useEffect)(
                function () {
                  if (f && s >= 0) {
                    if (null == v || !v.length) return;
                    var e = x.current.priceList.find(function (e) {
                      return e.flightDate.includes(t);
                    });
                    e &&
                      ((e.price = s),
                      g(function (e) {
                        return e.map(function (e) {
                          return (0,
                          r.Z)((0, r.Z)({}, e), {}, { price: e.flightDate.includes(t) ? s : e.price });
                        });
                      }));
                  }
                },
                [s]
              );
            var E = function (e) {
              e !== t && i(e);
            };
            return (0, y.BX)(o.View, {
              className: "flt-calendar flex-align-items-center ".concat(h),
              children: [
                (0, y.tZ)(o.View, {
                  className: "calendar-list-wrapper flex-1",
                  children: (0, y.tZ)(o.ScrollView, {
                    id: "flt-calendar-list",
                    className: "calendar-list",
                    scrollX: !0,
                    scrollWithAnimation: !0,
                    scrollIntoView: L,
                    children:
                      null == v
                        ? void 0
                        : v.map(function (e) {
                            var i = e.flightDate,
                              r = e.dateDesc,
                              a = e.weekDay,
                              n = e.price,
                              c = e.festival,
                              l = e.restDay,
                              s = e.workDay,
                              u = f ? "".concat(n || "--") : r;
                            return (0, y.BX)(
                              o.View,
                              {
                                className: "item ".concat(
                                  i == t ? "cur" : "",
                                  " "
                                ),
                                id: "c-".concat(i),
                                onClick: function () {
                                  return E(i);
                                },
                                children: [
                                  (0, y.tZ)(o.View, {
                                    className: "title flex-center",
                                    children: (0, y.tZ)(b, {
                                      dateDesc: r,
                                      weekDay: a,
                                      restDay: l,
                                      workDay: s,
                                      festival: c,
                                      showPrice: f,
                                      cur: i == t,
                                    }),
                                  }),
                                  (0, y.BX)(o.View, {
                                    className: "sub-title ".concat(
                                      f ? "show-price" : ""
                                    ),
                                    children: [f && (0, y.tZ)(C.Z, {}), u],
                                  }),
                                ],
                              },
                              "flightDate"
                            );
                          }),
                  }),
                }),
                (0, y.tZ)(o.View, {
                  className: "calendar-all flex-center",
                  id: "AACr",
                  onClick: function () {
                    return P({
                      list: v,
                      selectDate: t,
                      setReRender: R,
                      handleSelectDate: i,
                      flightType: u,
                      departCityCode: c,
                      arriveCityCode: l,
                    });
                  },
                  children: (0, y.tZ)(o.Text, {
                    className: "ifont2-calendar iconfont2",
                  }),
                }),
              ],
            });
          };
        (k.propTypes = {
          selectDate: l().string,
          handleSelectDate: l().func,
          departCityCode: l().string,
          arriveCityCode: l().string,
          lowestPrice: l().number,
          flightType: l().string,
          showPrice: l().bool,
        }),
          (k.defaultProps = {
            selectDate: v,
            handleSelectDate: function () {},
            departCityCode: "",
            arriveCityCode: "",
            lowestPrice: void 0,
            flightType: "",
            showPrice: !1,
          }),
          (t.Z = n.default.memo(k));
      },
    },
  ]);
})();
