!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/6deb9d1305c2b84d9103247c2ddc9f3d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [96268],
      {
        68717: function (e, t, i) {
          var n = i(32180),
            a = i(298),
            l = i(57042),
            o = i(24460),
            s = i(81876),
            r = i(21867),
            c = i(86066),
            _ = i(45023),
            m = i(52500),
            d = i(71515),
            u = i(92954),
            h = i.n(u),
            f = i(65573),
            v = i(23577),
            p = {
              state: {
                shipDetail: null,
                isWithCar: !1,
                isShowRulesPop: !1,
                title: "",
              },
              reducers: {
                setTitle: function (e, t) {
                  return (0, a.Z)((0, a.Z)({}, e), {}, { title: t });
                },
                setShipDetail: function (e, t) {
                  return (0, a.Z)((0, a.Z)({}, e), {}, { shipDetail: t });
                },
                setWithCar: function (e, t) {
                  return (0, a.Z)((0, a.Z)({}, e), {}, { isWithCar: t });
                },
                setShowRulesPop: function (e, t) {
                  return (0, a.Z)((0, a.Z)({}, e), {}, { isShowRulesPop: t });
                },
              },
            },
            g = (function (e) {
              (0, r.Z)(i, e);
              var t = (0, c.Z)(i);
              function i() {
                return (0, l.Z)(this, i), t.apply(this, arguments);
              }
              return (0, o.Z)(i);
            })(i(69410).Z);
          (0, _.Z)(g, "store", { models: { pageModel: p } });
          var N = i(87298),
            Z = i(30595),
            w = i(48813),
            b = m.default.memo(
              (0, f.$j)(function (e) {
                return { title: e.pageModel.title };
              })(function (e) {
                var t = e.title;
                return (0, w.tZ)(Z.Z, { title: t });
              })
            ),
            y = i(49528),
            V = i(53550),
            D = i(26282);
          var k = (0, f.$j)(function (e) {
              return { shipDetail: e.pageModel.shipDetail };
            })(function (e) {
              var t = e.shipDetail || {},
                i = t.fromDate,
                n = t.useTimeFmt,
                a = t.fromTime,
                l = t.toTime,
                o = t.fromStationName,
                s = t.toStationName,
                r = t.toDay,
                c = t.tagDescList,
                _ = t.isRunningClass,
                m = t.runningClassInfo,
                u = t.location,
                h = t.isTimePeriod,
                f = t.timePeriodInfo,
                p = ""
                  .concat(D.Z.formatDate(i, "MM-DD"), " ")
                  .concat(D.Z.getWeekDayDesc(i)),
                g = " 耗时".concat(n);
              1 === _ &&
                (g = " 耗时"
                  .concat(n, "  · ")
                  .concat(
                    null == m ? void 0 : m.runningClassInterval,
                    "分钟/班 · "
                  )
                  .concat(null == m ? void 0 : m.tag));
              var N = 1 === _ ? (null == m ? void 0 : m.beginTime) : a,
                Z = 1 === _ ? (null == m ? void 0 : m.endTime) : l;
              return (0, w.BX)(d.View, {
                className: " _Pt _Oa _a _Mb _yc",
                children: [
                  (0, w.BX)(d.View, {
                    className: " _i _Ga _l _Qt",
                    children: [
                      (0, w.tZ)(d.View, {
                        className:
                          " _nc _vi _lj _D _b _bh _i _Ga _l _n " +
                          (v.Z.isTieyou ? " _tr" : " _Zq"),
                        children: 1 === _ ? "流水班" : "出发",
                      }),
                      (0, w.BX)(d.Text, {
                        className: " _ok _F",
                        children: [
                          p,
                          !!h &&
                            (0, w.tZ)(d.Text, { children: " 固定时间段出发" }),
                          !!n && (0, w.tZ)(d.Text, { children: g }),
                        ],
                      }),
                    ],
                  }),
                  (0, w.BX)(d.View, {
                    className: " _Rt _i _Ga _l _St",
                    children: [
                      !h &&
                        (0, w.BX)(d.View, {
                          className: " _i _k _pf _p " + (1 === _ ? " _kk" : ""),
                          children: [
                            (0, w.BX)(d.View, {
                              className: " _dd _J _V _i _Ga _l _n",
                              children: [
                                1 === _ &&
                                  (0, w.tZ)(d.View, {
                                    className:
                                      " _dl _ff _b _Tt _Uc _Va _Ye _og _hb _o _Mb  _Mm",
                                    children: "首",
                                  }),
                                (0, w.tZ)(d.View, {
                                  style: { fontFamily: (0, y.QQ)() },
                                  children: N,
                                }),
                              ],
                            }),
                            (0, w.BX)(d.View, {
                              className: " _dd _J _V _i _Ga _l _n  _Xk",
                              children: [
                                1 === _ &&
                                  (0, w.tZ)(d.View, {
                                    className:
                                      " _dl _ff _b _Tt _Uc _Va _Ye _og _hb _o _Mb  _Hi",
                                    children: "末",
                                  }),
                                (0, w.tZ)(d.View, {
                                  style: { fontFamily: (0, y.QQ)() },
                                  children: Z,
                                }),
                              ],
                            }),
                            !!r &&
                              1 !== _ &&
                              (0, w.BX)(d.Text, {
                                className: " _Nd _Ut _u _Es _Vt",
                                children: ["+", r],
                              }),
                          ],
                        }),
                      (0, w.tZ)(d.Image, {
                        className: " _lb _Oo _gg",
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_arrows@3x.png",
                      }),
                      (0, w.BX)(d.View, {
                        className: " _bn _yc _j",
                        children: [
                          (0, w.tZ)(d.View, {
                            className: " _dd _vl _Z _yc _Xm _Ym",
                            numberOfLines: 1,
                            children: o,
                          }),
                          (0, w.tZ)(d.View, {
                            className: " _dd _vl _Z _yc _Xm _Ym  _Xk",
                            children: s,
                          }),
                        ],
                      }),
                      v.Z.isCRN &&
                        !!u &&
                        (0, w.BX)(d.View, {
                          className: " _i _k _l",
                          onClick: function () {},
                          children: [
                            (0, w.tZ)(V.Z, {
                              style: {
                                color: v.Z.isTieyou ? "#fc6e51" : "#0080FF",
                              },
                              children: "",
                            }),
                            (0, w.tZ)(d.View, {
                              className: " _B _Nd _N",
                              children: "港口地图",
                            }),
                          ],
                        }),
                    ],
                  }),
                  !(null == f || !f.noteDesc) &&
                    (0, w.tZ)(d.View, {
                      className: " _oc _F _ag _ss _Wt _yc",
                      children: null == f ? void 0 : f.noteDesc,
                    }),
                  (null == c ? void 0 : c.length) > 0
                    ? (0, w.tZ)(d.View, {
                        className: " _Vg _i _Ga _l _ag _E _Nd",
                        children: (0, w.tZ)(d.View, {
                          style: "flex: 1",
                          children:
                            null == c
                              ? void 0
                              : c.map(function (e, t) {
                                  return (0,
                                  w.BX)(d.View, { className: " _i _Ga _l", children: [(0, w.tZ)(d.Image, { className: " _fb _Ol _On", src: null == e ? void 0 : e.icon }), (0, w.tZ)(d.View, { className: " _Jo _j", style: { color: null == e ? void 0 : e.colour }, children: null == e ? void 0 : e.title })] }, t);
                                }),
                        }),
                      })
                    : (0, w.tZ)(d.View, { className: " _Xt" }),
                ],
              });
            }),
            C = (0, f.$j)(
              function (e) {
                var t = e.pageModel;
                return { shipDetail: t.shipDetail, isWithCar: t.isWithCar };
              },
              function (e) {
                var t = e.pageModel;
                return {
                  setWithCar: function (e) {
                    return t.setWithCar(e);
                  },
                };
              }
            )(function (e) {
              var t,
                i,
                n,
                a,
                l = e.shipDetail,
                o = e.setWithCar,
                s = e.isWithCar;
              if (
                null == l ||
                !l.carInfo ||
                null == l ||
                null === (t = l.carInfo) ||
                void 0 === t ||
                !t.isSupported
              )
                return (0, w.tZ)(d.View, {});
              var r = null == l ? void 0 : l.carInfo;
              return (0, w.BX)(d.View, {
                className: " _er _a _Oa _et",
                children: [
                  (0, w.BX)(d.View, {
                    className: " _i _Ga _l _dd _tb",
                    children: [
                      (0, w.tZ)(d.View, {
                        style: "flex: 1",
                        children: "带车上船",
                      }),
                      (0, w.BX)(d.View, {
                        className: " _i _Ga _l",
                        onClick: function () {
                          return o(!s);
                        },
                        children: [
                          (0, w.BX)(d.Text, {
                            className: " _hk",
                            children: [
                              "¥",
                              null == r ||
                              null === (i = r.carTypes[0]) ||
                              void 0 === i
                                ? void 0
                                : i.carPrice,
                              "/辆",
                            ],
                          }),
                          (0, w.tZ)(d.Image, {
                            src: s
                              ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_selected@3x.png"
                              : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_unselected@3x.png",
                            className: " _Ij _nc _Ee",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (null == r || null === (n = r.carDescList) || void 0 === n
                    ? void 0
                    : n.length) > 0 &&
                    (0, w.tZ)(d.View, {
                      className: " _Hk",
                      children:
                        null == r ||
                        null === (a = r.carDescList) ||
                        void 0 === a
                          ? void 0
                          : a.map(function (e, t) {
                              return (0,
                              w.BX)(d.View, { className: " _i _Ga _Nd _E _Q _ub", children: [(0, w.tZ)(d.View, { className: " _aa _pi _Ka _Kq _ft" }), (0, w.tZ)(d.Text, { children: e })] }, t);
                            }),
                    }),
                ],
              });
            }),
            T = i(35707),
            x = i(90113),
            X = m.default.memo(function (e) {
              var t,
                i,
                n,
                a = e.seat,
                l = e.isReturnOnly,
                o =
                  (null == a ||
                  null === (t = a.seatXList) ||
                  void 0 === t ||
                  null === (i = t[0]) ||
                  void 0 === i ||
                  null === (n = i.tagList) ||
                  void 0 === n
                    ? void 0
                    : n.map(function (e) {
                        return null == e ? void 0 : e.name;
                      })) || [];
              return (0, w.BX)(d.View, {
                className: " _Et _Oa _a _p _yc _Ft",
                children: [
                  (null == o ? void 0 : o.length) > 0 &&
                    (0, w.tZ)(d.View, {
                      className: " _i _Ga",
                      children: (0, w.tZ)(d.View, {
                        className: " _gb _P _Gt _vd _x _C _ve _Ht",
                        children: o.join("；"),
                      }),
                    }),
                  (0, w.BX)(d.View, {
                    className: " _i _Ga",
                    children: [
                      (0, w.tZ)(d.Image, {
                        src: a.seatImg,
                        className: " _ue _It _le _dc _Jt",
                      }),
                      (0, w.BX)(d.View, {
                        className: " _i _nj _Ac",
                        children: [
                          (0, w.tZ)(d.Text, {
                            className: " _dd _os",
                            numberOfLines: 2,
                            style:
                              null !== v.Z && void 0 !== v.Z && v.Z.isCRN
                                ? ""
                                : "-webkit-box-orient: vertical;display: -webkit-box;max-width: 100%;-webkit-line-clamp: 2;overflow: hidden;text-overflow: ellipsis;",
                            children: null == a ? void 0 : a.seatName,
                          }),
                          (0, w.tZ)(d.Text, {
                            className: " _cg _Nd _D",
                            numberOfLines: 4,
                            style:
                              null !== v.Z && void 0 !== v.Z && v.Z.isCRN
                                ? ""
                                : "-webkit-box-orient: vertical;display: -webkit-box;max-width: 100%;-webkit-line-clamp: 4;overflow: hidden;text-overflow: ellipsis;",
                            children: null == a ? void 0 : a.seatPs,
                          }),
                        ],
                      }),
                      (0, w.BX)(d.View, {
                        className: " _i _k _pf",
                        children: [
                          (0, w.BX)(d.View, {
                            className:
                              " _mn _i _Ga " +
                              (null != a && a.seatNum ? "" : " _Kc"),
                            children: [
                              (0, w.tZ)(d.Text, {
                                className: " _Jr _Bj _bf",
                                style: y.FS.zxRegular,
                                children: "¥",
                              }),
                              (0, w.tZ)(d.Text, {
                                className: " _Kt _bf",
                                style: y.FS.zxRegular,
                                children: null == a ? void 0 : a.seatPrice,
                              }),
                            ],
                          }),
                          (0, w.BX)(d.View, {
                            className:
                              " _Vf _Gc _Zq _dc _cg _p _i _Ga _n _l " +
                              (null != a && a.seatNum ? "" : " _Mt"),
                            onClick: function () {
                              if ((null == a ? void 0 : a.seatNum) > 0) {
                                var e,
                                  t,
                                  i,
                                  n = g.getPage(),
                                  o =
                                    null === (e = g.getState().pageModel) ||
                                    void 0 === e
                                      ? void 0
                                      : e.shipDetail,
                                  s =
                                    null === (t = g.getState().pageModel) ||
                                    void 0 === t
                                      ? void 0
                                      : t.isWithCar,
                                  r = a.seatXList,
                                  c =
                                    null == r ||
                                    null === (i = r[0]) ||
                                    void 0 === i
                                      ? void 0
                                      : i.vendor,
                                  _ = {
                                    fromCityName:
                                      null == n ? void 0 : n.from_city_name,
                                    toCityName:
                                      null == n ? void 0 : n.to_city_name,
                                    fromStationName:
                                      null == n ? void 0 : n.from_station_name,
                                    toStationName:
                                      null == n ? void 0 : n.to_station_name,
                                    shipName: null == n ? void 0 : n.ship_name,
                                    vendor: c,
                                    fromDate: null == n ? void 0 : n.from_date,
                                    fromTime: null == n ? void 0 : n.from_time,
                                    toDate: o.toDate,
                                    toTime: o.toTime,
                                    useTime: o.useTime,
                                    useTimeFmt: o.useTimeFmt,
                                    website: o.website,
                                    pickedSeat: a,
                                    isWithCar: s,
                                    utmSource: n.utmSource,
                                  };
                                if (1 === l)
                                  return void h().showToast({
                                    title: "暂不支持购买",
                                    icon: "none",
                                    duration: 2e3,
                                  });
                                T.Z.isLogin
                                  ? null == n ||
                                    n.navigateTo({
                                      url: "/pages/taroCRN/ship/pages/book/book",
                                      data: _,
                                    })
                                  : T.Z.doLogin().then(function () {
                                      null == n ||
                                        n.navigateTo({
                                          url: "/pages/taroCRN/ship/pages/book/book",
                                          data: _,
                                        });
                                    });
                              }
                            },
                            children: [
                              (0, w.tZ)(d.Text, {
                                className: " _Lt _b",
                                children:
                                  null != a && a.presaleBook
                                    ? "预约"
                                    : null != a && a.seatNum
                                    ? "订"
                                    : "售空",
                              }),
                              !(null == a || !a.seatNum) &&
                                (null == a ? void 0 : a.seatNum) < 20 &&
                                (0, w.BX)(d.View, {
                                  className:
                                    " _u _i _Ga _l _n _ci _io _Rj _Nt _Hi _Ot _b _B _Dn",
                                  children: [
                                    "剩",
                                    null == a ? void 0 : a.seatNum,
                                    "张",
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, w.BX)(d.View, {
                    className: " _i _Ga _l _bg",
                    onClick: function () {
                      return (0, x.F)(a.instructionsDesc);
                    },
                    children: [
                      (0, w.tZ)(d.Text, {
                        className: " _oc _kb",
                        children: "预订须知",
                      }),
                      (0, w.tZ)(d.View, { className: " _sf _wl _Yk _Dm" }),
                      (0, w.tZ)(d.View, {
                        className: " _oc _D",
                        children: "退改政策/取票方式",
                      }),
                      (0, w.tZ)(d.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_arrows1@3x.png",
                        className: " _ot _dg _cf _Kc",
                      }),
                    ],
                  }),
                ],
              });
            }),
            B = (0, f.$j)(function (e) {
              return { shipDetail: e.pageModel.shipDetail };
            })(function (e) {
              var t,
                i = e.shipDetail;
              return null != i &&
                null !== (t = i.seatInfo) &&
                void 0 !== t &&
                t.length
                ? (0, w.tZ)(d.View, {
                    children:
                      null == i
                        ? void 0
                        : i.seatInfo.map(function (e, t) {
                            return (0,
                            w.tZ)(X, { seat: e, isReturnOnly: i.isReturnOnly }, t);
                          }),
                  })
                : (0, w.tZ)(d.View, {});
            }),
            S = i(851),
            I = i(19972),
            P = (0, i(62631).Z)({
              serviceCode: "23698",
              channel: v.Z.train_channel,
              path: "getShipXProduct",
              bu: "ship",
            });
          var j,
            G =
              (0, N.h)(!1)(
                (j = (function (e) {
                  (0, r.Z)(i, e);
                  var t = (0, c.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, l.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, _.Z)(
                        (0, s.Z)(n),
                        "pageId",
                        v.Z.isCRN ? "10650104522" : ""
                      ),
                      (n.store = g.create((0, s.Z)(n)).store),
                      n
                    );
                  }
                  return (
                    (0, o.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.setPageData(),
                            (function () {
                              (0, I.Q)();
                              var e = g.getPage();
                              P({
                                fromCityName:
                                  null == e ? void 0 : e.from_city_name,
                                toCityName: null == e ? void 0 : e.to_city_name,
                                fromStationName:
                                  null == e ? void 0 : e.from_station_name,
                                toStationName:
                                  null == e ? void 0 : e.to_station_name,
                                shipName: null == e ? void 0 : e.ship_name,
                                vendor: null == e ? void 0 : e.vendor,
                                fromDate: null == e ? void 0 : e.from_date,
                                fromTime: null == e ? void 0 : e.from_time,
                                websites: null == e ? void 0 : e.websites,
                                fromPage: "XPage",
                              })
                                .then(function (t) {
                                  var i, n, a;
                                  1 === (null == t ? void 0 : t.code) &&
                                  (null == t ||
                                  null === (i = t.data) ||
                                  void 0 === i ||
                                  null === (n = i.seatInfo) ||
                                  void 0 === n
                                    ? void 0
                                    : n.length) > 0
                                    ? ((e.vendor =
                                        null == t ||
                                        null === (a = t.data) ||
                                        void 0 === a
                                          ? void 0
                                          : a.vendor),
                                      g
                                        .getDispatch()
                                        .pageModel.setShipDetail(
                                          null == t ? void 0 : t.data
                                        ))
                                    : e.showCommonDialog({
                                        content:
                                          (null == t ? void 0 : t.message) ||
                                          "网络异常，请稍后再试",
                                        title: "温馨提示",
                                        buttonName: "我知道了",
                                        onButtonClick: function () {
                                          e.navigateBack();
                                        },
                                      });
                                })
                                .catch(function () {
                                  h().showToast({
                                    title: "网络异常，请稍后再试",
                                    icon: "none",
                                    duration: 2e3,
                                  });
                                })
                                .finally(function () {
                                  (0, I.Z)();
                                });
                            })();
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "setPageData",
                        value: function () {
                          var e,
                            t = (0, u.getCurrentInstance)(),
                            i =
                              (null == t ||
                              null === (e = t.router) ||
                              void 0 === e
                                ? void 0
                                : e.params) || {};
                          if (i.searchParams)
                            try {
                              var n = JSON.parse(
                                decodeURIComponent(i.searchParams)
                              );
                              i = (0, a.Z)(
                                (0, a.Z)({}, i),
                                {},
                                {
                                  from_city_name: n.fromCityName,
                                  to_city_name: n.toCityName,
                                  from_date: n.fromDate,
                                  from_time: n.fromTime,
                                  ship_name: n.shipName,
                                  from_station_name: n.fromStationName,
                                  to_station_name: n.toStationName,
                                  vendor: n.vendor,
                                  utmSource: n.utmSource,
                                  websites: n.websites,
                                }
                              );
                            } catch (e) {
                              console.log(e);
                            }
                          console.log("page params", JSON.stringify(i));
                          var l = i,
                            o = l.from_city_name,
                            s = l.to_city_name,
                            r = l.from_date,
                            c = l.from_time,
                            _ = l.ship_name,
                            m = l.from_station_name,
                            d = l.to_station_name,
                            h = l.vendor,
                            f = l.websites,
                            p = l.utmSource;
                          (this.from_city_name = o),
                            (this.to_city_name = s),
                            (this.from_date = r),
                            (this.from_time = c),
                            (this.ship_name = _),
                            (this.from_station_name = m),
                            (this.to_station_name = d),
                            (this.vendor = h),
                            (this.utmSource = p),
                            (this.channel = ""
                              .concat(v.Z.miniType, "_")
                              .concat(v.Z.jetpack)),
                            (this.title = "".concat(o, "-").concat(s)),
                            (this.websites = f),
                            g.getDispatch("pageModel").setTitle(this.title);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return (0, w.BX)(f.zt, {
                            store: this.store,
                            children: [
                              (0, w.BX)(d.View, {
                                className: " _yd _p _Y _i _k",
                                children: [
                                  (0, w.tZ)(b, {}),
                                  (0, w.BX)(d.ScrollView, {
                                    className: " _j _p _Aj",
                                    scrollY: !0,
                                    children: [
                                      (0, w.tZ)(k, {}),
                                      (0, w.tZ)(C, {}),
                                      (0, w.tZ)(B, {}),
                                      (0, w.tZ)(d.View, {
                                        className: " _i _n _l",
                                        children: (0, w.tZ)(d.Image, {
                                          className: " _Fj _Gj _Hj _o",
                                          src: v.Z.isTieyou
                                            ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_ty@3x.png"
                                            : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/control_zx@3x.png",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, w.tZ)(S.Z, {
                                ref: function (t) {
                                  e.onDrawerAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(m.default.Component))
              ) || j;
          Page(
            (0, n.createPageConfig)(
              G,
              "pages/taroCRN/ship/pages/x/index",
              { root: { cn: [] } },
              {
                backgroundColor: "#0066E6",
                navigationStyle: "custom",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [98946, 7160, 83004, 55076, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(68717);
        }),
          e.O();
      },
    ]);
})();
