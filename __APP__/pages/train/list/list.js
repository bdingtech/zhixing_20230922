!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/849af97262623a3a03a4c9ba6f8707d6.js"),
    require("../sub-common/19f27d7cebe94aa1035a5e0048e105a3.js"),
    require("../sub-common/7a64e02088e78e12a60f5110f7cf05f1.js"),
    require("../sub-common/1bc3053f48eb4d260bc28c0ff4efae15.js"),
    require("../sub-common/8e7fedfd866fcd380b23fd0a31b6f284.js"),
    require("../sub-common/d33d0bff6905d6dc3872ed0c9fa55a20.js"),
    require("../sub-common/2e920853f1c2d7667026c4d194b5bc40.js"),
    require("../sub-common/b4b623867ae0351b46b8de2fb5023ee1.js"),
    require("../sub-common/8d557802042b658d7e8b89aab78635db.js"),
    require("../sub-common/d95d6e4c08de6037c2a3a34879bb09fe.js"),
    require("../sub-common/29561a292c88799a0a8f07ef3d700162.js"),
    require("../sub-common/41f6ac4c475c9f86a853fca751589060.js"),
    require("../sub-common/a7d9cc482f204c2537ff8bb0545f78ac.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [11598],
      {
        47127: function (e, t, i) {
          var a,
            n,
            r = i(32180),
            s = i(79301),
            o = i(298),
            c = i(95308),
            l = i(57042),
            u = i(24460),
            d = i(81876),
            m = i(21867),
            h = i(86066),
            f = i(45023),
            p = i(52500),
            g = i(92954),
            S = i.n(g),
            v = i(71515),
            T = i(81957),
            Z = i(79792),
            w = i(79910),
            y = i(79295),
            N = i(8271),
            b = i.n(N),
            k = i(49120),
            C = i(10741),
            V = i(2657),
            _ = i(4102),
            x = i(9062),
            D = i(94190),
            I = i(20592),
            B = i(25391),
            L = i(90983),
            A = i(34229),
            F = i(3205),
            P = i(18783),
            X = i(2326),
            M = i(55916),
            R = i(70352),
            E = i(2576),
            K = i(48665),
            O = i(79846),
            z = i(94383),
            G = i(2481),
            q = i(48813),
            H = void 0,
            Y = p.default.memo(function (e) {
              var t = e.nearbyRoutes,
                i = void 0 === t ? [] : t,
                a = Z.default.isTieyou,
                n = function (e) {
                  var t = e.departureCityName,
                    i = e.departureCityCode,
                    a = e.arrivalCityName,
                    n = e.arrivalCityCode,
                    r = e.departureDate;
                  S().navigateTo({
                    url: "/pages/flight/list/list?departCity="
                      .concat(t, "&departCityCode=")
                      .concat(i, "&arriveCity=")
                      .concat(a, "&arriveCityCode=")
                      .concat(n, "&departDate=")
                      .concat(r, "&nearby=0&fromPage=xcx_flt_linjin"),
                  });
                };
              return (0, q.tZ)(v.Block, {
                children:
                  1 === i.length
                    ? (0, q.BX)(v.View, {
                        className: "flight-list-recomd",
                        id: "AKEC",
                        onClick: n.bind(H, i[0]),
                        children: [
                          (0, q.tZ)(v.View, {
                            className: "tag-top",
                            children: "邻近机场 • 更省钱",
                          }),
                          (0, q.BX)(v.View, {
                            className: "cont",
                            children: [
                              (0, q.BX)(v.View, {
                                className: "tit",
                                children: [
                                  (0, q.tZ)(v.Text, {
                                    className: i[0].sequence0 ? "tgreen" : "",
                                    children: i[0].departureCityName,
                                  }),
                                  (0, q.tZ)(v.View, {
                                    className: "mid",
                                    children: (0, q.tZ)(v.Text, {
                                      className: "ifont-splane iconfont",
                                    }),
                                  }),
                                  (0, q.tZ)(v.Text, {
                                    className: i[0].sequence1 ? "tgreen" : "",
                                    children: i[0].arrivalCityName,
                                  }),
                                ],
                              }),
                              (0, q.tZ)(v.View, {
                                className: "txt",
                                children: i[0].trainDescription,
                              }),
                            ],
                          }),
                          (0, q.BX)(v.View, {
                            className: "rbox",
                            children: [
                              (0, q.tZ)(v.Text, {
                                className: "tag " + (a ? "ty" : "zx"),
                                children: i[0].tag,
                              }),
                              (0, q.tZ)(v.Text, {
                                className: "price color-primary",
                                children: i[0].lowestPrice,
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, q.BX)(v.View, {
                        className: "flight-list-recomd",
                        children: [
                          (0, q.tZ)(v.View, {
                            className: "tag-top",
                            children: "邻近机场 • 更省钱",
                          }),
                          (0, q.tZ)(v.View, {
                            className:
                              "list-recomd-more " +
                              (2 === i.length ? "two" : ""),
                            children: i.map(function (e, t) {
                              return (0,
                              q.BX)(v.View, { className: "item", id: "AKED", onClick: n.bind(H, e), children: [(0, q.BX)(v.View, { className: "tit", children: [(0, q.tZ)(v.Text, { className: e.sequence0 ? "tgreen" : "", children: e.departureCityName }), "-", (0, q.tZ)(v.Text, { className: e.sequence1 ? "tgreen" : "", children: e.arrivalCityName })] }), (0, q.tZ)(v.Text, { className: "price color-primary", children: e.lowestPrice }), (0, q.tZ)(v.Text, { className: "tag " + (a ? "ty" : "zx"), children: e.tag }), (0, q.tZ)(v.Text, { className: "ifont-arr iconfont" })] }, t);
                            }),
                          }),
                        ],
                      }),
              });
            }),
            j = p.default.memo(function (e) {
              var t,
                i,
                a,
                n = e.pageId,
                r = e.isStudent,
                s = e.title,
                o = e.ubtTrace,
                c = e.data,
                l = e.onClose,
                u = void 0 === l ? function () {} : l,
                d = e.onClick,
                m = void 0 === d ? function () {} : d,
                h = c.find(function (e) {
                  return 2 == e.trafficType || 1 == e.trafficType;
                }),
                f = c.find(function (e) {
                  return 4 == e.trafficType;
                }),
                p = {
                  ubtKeyName: "FltWDjtfltList_TrainFltCompare_exposure",
                  data: {
                    PageId: n,
                    UserGroup: null != f && f.cardTag ? 1 : 0,
                  },
                };
              return (0, q.BX)(v.View, {
                className: "train-flight-compare ".concat(
                  r ? "student" : "",
                  " autoExpose"
                ),
                "data-expose": p,
                ref:
                  null === k.getCurrentPage ||
                  void 0 === k.getCurrentPage ||
                  null === (t = (0, k.getCurrentPage)()) ||
                  void 0 === t
                    ? void 0
                    : t.refreshObserve,
                children: [
                  s &&
                    (0, q.BX)(v.View, {
                      className: "compare-hd flex-align-items-center",
                      children: [
                        (0, q.tZ)(v.Image, {
                          className: "hd-icon",
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/dajiaotong/icon_tongzhi.png",
                        }),
                        (0, q.tZ)(A.ZtRichText, {
                          nodes: "当前日期坐飞机".concat(s),
                          className: "hd-title",
                        }),
                      ],
                    }),
                  (0, q.tZ)(v.View, {
                    className: "compare-bd flex-center",
                    id: "AKEA",
                    onClick: function () {
                      null == o ||
                        o("FltWDjtfltList_TrainFltCompare_click", p.data),
                        m(f.flightNumber);
                    },
                    children: (0, q.BX)(v.View, {
                      className: "compare-cont flex",
                      children: [
                        (0, q.BX)(v.View, {
                          className: "train-box flex flex-column",
                          children: [
                            (0, q.BX)(v.View, {
                              className: "box-hd flex",
                              children: [
                                (0, q.tZ)(v.View, {
                                  className: "trans-type",
                                  children: h.title,
                                }),
                                h.trainNumber &&
                                  (0, q.tZ)(v.View, {
                                    className: "trans-number grey-txt",
                                    children: h.trainNumber,
                                  }),
                              ],
                            }),
                            (0, q.BX)(v.View, {
                              className:
                                "box-info flex-1 flex-center flex-column",
                              children: [
                                (0, q.BX)(v.View, {
                                  className: "price-info info-item",
                                  children: [
                                    (0, q.tZ)(v.Text, {
                                      className: "grey-txt",
                                      children: h.seatType,
                                    }),
                                    (0, q.tZ)(v.Text, {
                                      className: "rmb-sign",
                                      children: "¥",
                                    }),
                                    (0, q.tZ)(v.Text, {
                                      className: "price",
                                      children: h.price,
                                    }),
                                  ],
                                }),
                                (0, q.BX)(v.View, {
                                  className: "time-info info-item",
                                  children: [
                                    (0, q.tZ)(v.Text, {
                                      className: "grey-txt",
                                      children: "最短耗时",
                                    }),
                                    (0, q.tZ)(v.Text, {
                                      className: "time",
                                      children: h.costTime,
                                    }),
                                  ],
                                }),
                                (0, q.tZ)(v.View, {
                                  className: "ticket-info info-item",
                                  children:
                                    null === (i = h.tags) || void 0 === i
                                      ? void 0
                                      : i.map(function (e, t) {
                                          return (0,
                                          q.tZ)(v.Text, { className: "ticket", children: e }, t);
                                        }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, q.BX)(v.View, {
                          className: "flight-box flex flex-column",
                          children: [
                            (0, q.BX)(v.View, {
                              className: "box-hd flex flex-align-items-center",
                              children: [
                                (0, q.BX)(v.View, {
                                  className: "flex box-hd-left",
                                  children: [
                                    (0, q.tZ)(v.View, {
                                      className: "trans-type",
                                      children: f.title,
                                    }),
                                    (0, q.tZ)(v.View, {
                                      className: "trans-number grey-txt",
                                      children: f.flightNumber,
                                    }),
                                  ],
                                }),
                                f.cardTag
                                  ? (0, q.tZ)(v.Image, {
                                      className: "card-tag",
                                      mode: "heightFix",
                                      src: f.cardTag,
                                    })
                                  : (0, q.tZ)(v.View, {
                                      className: "recommend-tag flex-center",
                                      children: "推荐",
                                    }),
                              ],
                            }),
                            (0, q.BX)(v.View, {
                              className:
                                "box-info flex-1 flex-center flex-column",
                              children: [
                                (0, q.BX)(v.View, {
                                  className: "price-info info-item",
                                  children: [
                                    (0, q.tZ)(v.Text, {
                                      className: "grey-txt",
                                      children: f.seatType,
                                    }),
                                    (0, q.tZ)(v.Text, {
                                      className: "rmb-sign",
                                      children: "¥",
                                    }),
                                    (0, q.tZ)(v.Text, {
                                      className: "price",
                                      children: f.price,
                                    }),
                                  ],
                                }),
                                (0, q.BX)(v.View, {
                                  className: "time-info info-item",
                                  children: [
                                    (0, q.tZ)(v.Text, {
                                      className: "grey-txt",
                                      children: "最短耗时",
                                    }),
                                    (0, q.tZ)(v.Text, {
                                      className: "time",
                                      children: f.costTime,
                                    }),
                                  ],
                                }),
                                (0, q.tZ)(v.View, {
                                  className: "ticket-info info-item",
                                  children:
                                    null === (a = f.tags) || void 0 === a
                                      ? void 0
                                      : a.map(function (e, t) {
                                          return (0,
                                          q.tZ)(v.Text, { className: "ticket", children: e }, t);
                                        }),
                                }),
                                r &&
                                  (0, q.tZ)(v.View, {
                                    className: "student-tag",
                                    children: "学生专享",
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, q.tZ)(v.Image, {
                          className: "vs-icon",
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/dajiaotong/icon_vs_r.png",
                        }),
                      ],
                    }),
                  }),
                  (0, q.tZ)(v.Image, {
                    className: "guide-img",
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/dajiaotong/shou_img.png",
                  }),
                  (0, q.tZ)(v.Image, {
                    className: "close-btn",
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/list/icon_close_list@3x.png",
                    id: "AKEB",
                    onClick: u,
                  }),
                ],
              });
            }),
            U = p.default.memo(function (e) {
              var t = e.tag,
                i = e.tagPopupInfo,
                a = e.onClick;
              return t
                ? (0, q.BX)(q.HY, {
                    children: [
                      (0, q.BX)(v.View, {
                        className: "flt-top-tag ".concat(i ? "orange" : ""),
                        onClick: function (e) {
                          e.stopPropagation(), null == a || a(i);
                        },
                        children: [
                          !!i &&
                            (0, q.tZ)(v.Image, {
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/list/10.0/tag_jian.png",
                              mode: "heightFix",
                              className: "tag-icon",
                            }),
                          (0, q.tZ)(A.ZtRichText, { nodes: t }),
                          !!i &&
                            (0, q.tZ)(v.Text, {
                              className: "ifont2-jinggao_linea_28 iconfont2",
                            }),
                        ],
                      }),
                      (0, q.tZ)(v.View, { className: "top-tag-place-holder" }),
                    ],
                  })
                : (0, q.tZ)(q.HY, {});
            }),
            W = Z.default.isTieyou,
            J =
              (0, T.h)(!0)(
                (a = (function (e) {
                  (0, m.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var a;
                    return (
                      (0, l.Z)(this, i),
                      (a = t.call(this, e)),
                      (0, f.Z)((0, d.Z)(a), "getFlightVsTrain", function (e) {
                        var t = a.props,
                          i = t.flightInfo,
                          n = t.selectDate,
                          r = a.state.listLowestPrice,
                          s = i || {},
                          o = s.departureCode,
                          c = s.arrivalCode;
                        (0, M.tS)({
                          data: {
                            version: 1,
                            student: a.isStudent,
                            departureCityCode: o,
                            arrivalCityCode: c,
                            departureDate: e || n,
                            lowestPrice: r,
                          },
                        }).then(function (e) {
                          var t = e.resultCode,
                            i = e.data;
                          1 === t && i && a.setState({ flightVsTrainObj: i });
                        });
                      }),
                      (0, f.Z)((0, d.Z)(a), "doLogin", function () {
                        P.ZP.doLogin()
                          .then(function () {
                            a.setState({ isLogin: !0 }, function () {
                              a.getFlightList();
                            });
                          })
                          .catch(function () {
                            (0, k.showToast)("取消登录");
                          });
                      }),
                      (0, f.Z)((0, d.Z)(a), "closeFlightVsTrain", function () {
                        a.setState({ flightVsTrainShow: !1 });
                      }),
                      (0, f.Z)((0, d.Z)(a), "renderFlightVsTrain", function () {
                        var e = a.state,
                          t = e.flightVsTrainObj,
                          i = e.flightVsTrainShow,
                          n = t || {},
                          r = n.flightVSTrainInfoResponseInfos,
                          s = n.text,
                          o = n.studentPrivilege;
                        return P.ZP.isLogin && i && null != r && r.length
                          ? (0, q.tZ)(j, {
                              pageId: a.pageId,
                              ubtTrace: a.ubtTrace,
                              title: s,
                              isStudent: o,
                              data: r,
                              onClose: a.closeFlightVsTrain,
                              id: "AKDb",
                              onClick: function (e) {
                                a.onGoBookX(e);
                              },
                            })
                          : (0, q.tZ)(q.HY, {});
                      }),
                      (0, f.Z)(
                        (0, d.Z)(a),
                        "getAdvantageDrawInfo",
                        function (e) {
                          a.setState({ advantageDrawData: e });
                        }
                      ),
                      (0, f.Z)((0, d.Z)(a), "onAdvantageDraw", function (e) {
                        a.setState({ advantageDrawShow: e });
                      }),
                      (a.state = {
                        isFilter: !1,
                        showFilter: !1,
                        noFlightLine: !1,
                        noFlight: !1,
                        departDate: "",
                        singles: [],
                        transfers: [],
                        saleOuts: [],
                        noResultRecommends: [],
                        flightFilterList: X.Z.initNewFilter([
                          "起飞时间",
                          "出发机场",
                          "到达机场",
                          "航空公司",
                          "机型",
                        ]),
                        filterIndex: 0,
                        flightSortType: "price",
                        flightSortTimeOrder: "descend",
                        flightSortPriceOrder: "ascend",
                        parityHidden: !0,
                        priceGuaranteeHidden: !0,
                        filterFlightNumber: -1,
                        showNearby: !1,
                        tipAndFloat: {},
                        entrancePopup: {},
                        isShowNewCoupon: !1,
                        surpriseParams: {},
                        couponAmount: 0,
                        expiredTime: null,
                        isRescheduleDisableChooseDate: !1,
                        repairTicketSoluList: [],
                        tableTags: [],
                        drawLevel: !0,
                        isDrawShow: !1,
                        flightVsTrainObj: {},
                        flightVsTrainShow: !0,
                        advantageDrawShow: !1,
                        imagePopup: null,
                        advantageDrawData: {},
                        mask: !1,
                      }),
                      (a.isStudent = !1),
                      a
                    );
                  }
                  return (
                    (0, u.Z)(i, [
                      { key: "componentDidMount", value: function () {} },
                      {
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function (e) {
                          console.log("机票列表组件update"),
                            console.log(e),
                            (this.pageId = e.pageId);
                          var t = this.state.departDate,
                            i = this.props.hidden;
                          !1 !== e.hidden ||
                            (t === e.selectDate &&
                              (i === e.hidden || this._requested)) ||
                            (this.setState({ departDate: e.selectDate }),
                            (this.isStudent = e.isStudent),
                            this.getFlightList(e.selectDate),
                            this.handleImagePop());
                        },
                      },
                      {
                        key: "handleImagePop",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t, i, a, n, r;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          (0, M.cz)({
                                            sourcePage: "trainflight_list",
                                          })
                                        );
                                      case 2:
                                        (t = e.sent),
                                          (a = (i = t || {}).resultCode),
                                          (n = i.extendData),
                                          (r = i.resultMessage),
                                          1 == a &&
                                          2 ==
                                            (null == n ? void 0 : n.popType) &&
                                          null != n &&
                                          n.backGroundImg
                                            ? (this.ubtTrace(
                                                "FltWDjtfltList_NewCustomerPop_exposure",
                                                { PageId: this.pageId }
                                              ),
                                              this.setState({ imagePopup: n }))
                                            : console.error(r);
                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "handleImagePopupClose",
                        value: function () {
                          this.setState({ imagePopup: null });
                        },
                      },
                      {
                        key: "handleImagePopClick",
                        value: function () {
                          var e = (this.state.imagePopup || {}).jumpUrl;
                          this.ubtTrace("FltWDjtfltList_NewCustomerPop_click", {
                            PageId: this.pageId,
                          }),
                            e ? (0, X.g)(e) : this.handleImagePopupClose();
                        },
                      },
                      {
                        key: "getFlightList",
                        value: function (e) {
                          var t = this,
                            i = this.props,
                            a = i.selectDate,
                            n = i.flightInfo,
                            r = i.trainLowestPrice,
                            s = n ? n.tip : "",
                            o = this.state.flightFilterList;
                          if (a) {
                            if (!n) return this.setNoFlight();
                            var c = n.departureCode,
                              l = n.arrivalCode;
                            if (!c || !l) return this.handleNoFlight();
                            var u = {
                              data: {
                                version: 7,
                                source: 4,
                                cacheUsage: 0,
                                hasChild: !1,
                                hasBaby: !1,
                                segments: [
                                  { dptDate: e || a, dptCode: c, arrCode: l },
                                ],
                                student: this.isStudent,
                              },
                            };
                            (0, k.showLoading)(),
                              (0, M.j7)(u)
                                .then(
                                  function (e) {
                                    console.log(e), (0, k.hideLoading)();
                                    var i = e.resultCode,
                                      a = e.resultMessage;
                                    if (1 !== i)
                                      return (0, k.showModal)(
                                        a || "网络错误，请稍候再试"
                                      );
                                    var n = e.data || {},
                                      c = t.handleFlightData(n.singles || []),
                                      l = t.handleFlightData(
                                        n.recommends || []
                                      ),
                                      u = t.handleFlightData(
                                        n.preferences || []
                                      );
                                    if (
                                      ((t._saleOuts = t.handleFlightData(
                                        n.saleOuts || []
                                      )),
                                      console.log("---transfers---", l),
                                      0 === c.length && 0 === l.length)
                                    )
                                      return t.handleNoFlight();
                                    var d = X.Z.getListLowestPrice(c, l, u),
                                      m = n.nearbyAirport || {},
                                      h = w.Z.deepCopy(o),
                                      f = X.Z.updateNewFilter(c, {
                                        filterList: h,
                                      }).filterList;
                                    t._backups = {
                                      singles: w.Z.deepCopy(c),
                                      transfers: w.Z.deepCopy(l),
                                    };
                                    var p = 0;
                                    r && d <= r - 5 && (p = r - d);
                                    var g = n.announcement || {},
                                      S = g.entrancePopup,
                                      v = g.tipAndFloat;
                                    t.setState(
                                      {
                                        noFlight: !1,
                                        listLowestPrice: d,
                                        parityPrice: p,
                                        noFlightLineTip: s,
                                        showNoFlightLineTip: !!s,
                                        flightView: 0,
                                        flightFilterList: f,
                                        entrancePopup: S || {},
                                        tipAndFloat: v || {},
                                        surpriseParams: {
                                          version: 3,
                                          source: "commonflightlist",
                                          minPrice: d,
                                          depDate: c.length
                                            ? b()(
                                                X.Z.formatDateWithSlash(
                                                  c[0].dptTime
                                                )
                                              ).format("YYYY-MM-DD")
                                            : b()(
                                                X.Z.formatDateWithSlash(
                                                  l[0].dptTime
                                                )
                                              ).format("YYYY-MM-DD"),
                                          depCityCode: c.length
                                            ? c[0].dptCode
                                            : l[0].dptCode,
                                          arrCityCode: c.length
                                            ? c[0].arrCode
                                            : l[0].arrCode,
                                        },
                                      },
                                      function () {
                                        t.clearNoResultRecommendProducts(),
                                          m.enabled && t.getNearbyRecommend(d),
                                          t.checkPriceGuaranteeTip(),
                                          n.studentPrivilege &&
                                            t.setState({
                                              studentPrivilegeBtnVisible: !0,
                                            }),
                                          t.filterFlightsList();
                                      }
                                    );
                                  },
                                  function (e) {
                                    (0, k.showModal)(JSON.stringify(e));
                                  }
                                )
                                .finally(function () {
                                  (t._requested = !0),
                                    t.setState({ fixedBtnMessageLoaded: !0 }),
                                    t.getFlightVsTrain(e);
                                });
                          }
                        },
                      },
                      {
                        key: "setNoFlight",
                        value: function () {
                          this.setState({
                            singles: [],
                            transfers: [],
                            noFlight: !0,
                            showNoFlightLineTip: !1,
                          });
                        },
                      },
                      {
                        key: "handleFlightData",
                        value: function (e) {
                          return e.map(function (e) {
                            var t = b()(X.Z.formatDateWithSlash(e.dptTime)),
                              i = b()(X.Z.formatDateWithSlash(e.arrTime));
                            return (0,
                            o.Z)((0, o.Z)({}, e), {}, { dptTimeStr: t.format("HH:mm"), arrTimeStr: i.format("HH:mm"), dayDiff: X.Z.getDayDiff(t.format("YYYY-MM-DD"), i.format("YYYY-MM-DD")), abbr: e.abbr ? e.abbr.replace("|", "") : "", transfer: e.sequences.length > 1, airCode: e.sequences[0].airCode, cfts: e.sequences[0].cfts, departTimeHourSection: Math.floor(new Date(X.Z.formatDateWithSlash(e.dptTime)).getHours() / 6) });
                          });
                        },
                      },
                      {
                        key: "handleNoFlight",
                        value: function () {
                          var e = this;
                          console.log("搜索无结果");
                          var t = this.props,
                            i = t.selectDate,
                            a = t.flightInfo,
                            n = a.departureName,
                            r = void 0 === n ? "" : n,
                            s = a.departureCode,
                            c = void 0 === s ? "" : s,
                            l = a.arrivalName,
                            u = void 0 === l ? "" : l,
                            d = a.arrivalCode,
                            m = {
                              data: {
                                version: 5,
                                source: 4,
                                dptName: r,
                                dptCode: c,
                                arrName: u,
                                arrCode: void 0 === d ? "" : d,
                                dptDate: i,
                                hasEconomy: !0,
                              },
                            };
                          (0, k.showLoading)(),
                            console.log("无结果推荐"),
                            (0, M.tR)(m)
                              .then(
                                function (t) {
                                  var i = t.resultCode,
                                    a = t.data,
                                    n = (void 0 === a ? {} : a).products || [];
                                  1 === i && 0 !== n.length
                                    ? e.setState({
                                        noResultRecommends: n.map(function (t) {
                                          return (0, o.Z)(
                                            (0, o.Z)({}, t),
                                            {},
                                            {
                                              dptColor: t.nearbyInfos.some(
                                                function (e) {
                                                  return 0 === e.sequence;
                                                }
                                              ),
                                              arrColor: t.nearbyInfos.some(
                                                function (e) {
                                                  return 1 === e.sequence;
                                                }
                                              ),
                                              flights: e.handleFlightData(
                                                t.flights
                                              ),
                                            }
                                          );
                                        }),
                                        singles: [],
                                        transfers: [],
                                        noFlight: !1,
                                      })
                                    : (console.log("没有航班！"),
                                      e.setNoFlight());
                                },
                                function () {
                                  console.log("没有航班！"), e.setNoFlight();
                                }
                              )
                              .finally(function () {
                                (0, k.hideLoading)();
                              });
                        },
                      },
                      {
                        key: "clearNoResultRecommendProducts",
                        value: function () {
                          this.setState({ noResultRecommends: [] });
                        },
                      },
                      {
                        key: "getNearbyRecommend",
                        value: function (e) {
                          var t = this,
                            i = this.props,
                            a = i.selectDate,
                            n = i.flightInfo,
                            r = {
                              data: {
                                departureCityCode: n.departureCode,
                                arrivalCityCode: n.arrivalCode,
                                departureDate: a,
                                tripType: 0,
                                lowestPrice: e,
                                transType: 1,
                                version: 3,
                              },
                            };
                          (0, M.l5)(r)
                            .then(function (e) {
                              var i = e.resultCode,
                                a = e.data,
                                n =
                                  (void 0 === a ? {} : a)
                                    .lowestPriceFlightRoutes || [];
                              if (1 === i && n.length > 0) {
                                var r = t.state.singles,
                                  s = void 0 === r ? [] : r,
                                  c = 0;
                                s.length > 1
                                  ? (c = 1)
                                  : s.length > 0 && s.length <= 1 && (c = 2),
                                  t.setState({
                                    nearbyRoutes: n.map(function (e) {
                                      return (0, o.Z)(
                                        (0, o.Z)({}, e),
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
                                    nearbyCardPosition: c,
                                  });
                              } else t.state({ showNearby: !1 });
                            })
                            .catch(function () {});
                        },
                      },
                      {
                        key: "toggleParity",
                        value: function () {
                          var e = this.state.parityHidden;
                          this.setState({
                            parityHidden: !e,
                            parityTipHidden: !0,
                          }),
                            S().setStorage({ key: "parityHidden", data: !e });
                        },
                      },
                      {
                        key: "checkPriceGuaranteeTip",
                        value: function () {
                          var e = this.state.entrancePopup,
                            t = void 0 === e ? {} : e;
                          if (!this._checkedPriceGuarantee && 1 !== t.sw)
                            try {
                              var i = S().getStorageSync("MGPTipHidden");
                              this.setState({ priceGuaranteeHidden: !!i }),
                                (this._checkedPriceGuarantee = !0);
                            } catch (e) {}
                        },
                      },
                      {
                        key: "filterFlightsList",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0,
                            t = this.state,
                            i = t.flightSortType,
                            a = t.flightFilterList,
                            n = t.onlySingles,
                            r = t.sharedFlightHidden;
                          if (this._backups) {
                            var s = this._backups,
                              o = s.singles,
                              c = s.transfers,
                              l = X.Z.filterNewList(o, c, a),
                              u = l.straight,
                              d = l.transfer;
                            n && (d = []),
                              r &&
                                ((u = u.filter(function (e) {
                                  return !e.sequences[0].shared;
                                })),
                                (d = d.filter(function (e) {
                                  return (
                                    !e.sequences[0].shared &&
                                    !e.sequences[1].shared
                                  );
                                }))),
                              this.setState({
                                filterFlightNumber: u.length + d.length,
                              }),
                              1 !== e &&
                                ("time" === i && this.flightSortByTime(u, d),
                                "price" === i && this.flightSortByPrice(u, d));
                          }
                        },
                      },
                      {
                        key: "flightSortBy",
                        value: function (e) {
                          var t = this,
                            i = this.state,
                            a = i.flightSortTimeOrder,
                            n = i.flightSortPriceOrder,
                            r = i.singles,
                            s = i.transfers;
                          "time" === e
                            ? this.setState(
                                {
                                  flightSortType: "time",
                                  flightSortTimeOrder:
                                    "ascend" === a ? "descend" : "ascend",
                                  flightSortPriceOrder: "descend",
                                },
                                function () {
                                  t.flightSortByTime(r, s);
                                }
                              )
                            : this.setState(
                                {
                                  flightSortType: "price",
                                  flightSortPriceOrder:
                                    "ascend" === n ? "descend" : "ascend",
                                  flightSortTimeOrder: "descend",
                                },
                                function () {
                                  t.flightSortByPrice(r, s);
                                }
                              );
                        },
                      },
                      {
                        key: "flightSortByTime",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [],
                            i = this.state.flightSortTimeOrder,
                            a = function (e, t) {
                              return (
                                new Date(
                                  X.Z.formatDateWithSlash(e.dptTime)
                                ).getTime() -
                                new Date(
                                  X.Z.formatDateWithSlash(t.dptTime)
                                ).getTime()
                              );
                            },
                            n = e.sort(function (e, t) {
                              return "ascend" === i ? a(e, t) : a(t, e);
                            }),
                            r = t.sort(function (e, t) {
                              return "ascend" === i ? a(e, t) : a(t, e);
                            });
                          this.renderFlightList({ singles: n, transfers: r });
                        },
                      },
                      {
                        key: "flightSortByPrice",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [],
                            i = this.state.flightSortPriceOrder,
                            a = e.sort(function (e, t) {
                              return "ascend" === i
                                ? e.apr - t.apr
                                : t.apr - e.apr;
                            }),
                            n = t.sort(function (e, t) {
                              return "ascend" === i
                                ? e.apr - t.apr
                                : t.apr - e.apr;
                            });
                          this.renderFlightList({ singles: a, transfers: n });
                        },
                      },
                      {
                        key: "formatPrice",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t = e.map(function (e) {
                              return (0,
                              o.Z)((0, o.Z)({}, e), {}, { apr: Array.from(String(e.apr)).slice(0, 1) + "??" });
                            });
                          return t;
                        },
                      },
                      {
                        key: "renderFlightList",
                        value: function (e) {
                          var t = this,
                            i = e.singles,
                            a = void 0 === i ? [] : i,
                            n = e.transfers,
                            r = void 0 === n ? [] : n,
                            s = this.state.showNearby,
                            o = 0;
                          P.ZP.isLogin ||
                            ((a = this.formatPrice(a)),
                            (r = this.formatPrice(r))),
                            s &&
                              (a.length > 1
                                ? (o = 1)
                                : a.length > 0 && a.length <= 1 && (o = 2));
                          try {
                            if (a.length >= 10) {
                              var c = a.slice(0, 10);
                              this.setState({
                                singles: c,
                                transfers: r,
                                saleOuts: this._saleOuts,
                              }),
                                setTimeout(function () {
                                  t.setState({
                                    singles: a,
                                    transfers: r,
                                    nearbyCardPosition: o,
                                  });
                                }, 100);
                            } else
                              this.setState({
                                singles: a,
                                transfers: r,
                                saleOuts: this._saleOuts,
                                nearbyCardPosition: o,
                              });
                          } catch (e) {}
                          (0, k.hideLoading)();
                        },
                      },
                      {
                        key: "closeMask",
                        value: function (e) {
                          "filter" === e
                            ? this.cancelFlightFilter()
                            : "announcement" === e &&
                              this.toggleTopAnnouncement();
                        },
                      },
                      {
                        key: "onAnnouncementPopupClose",
                        value: function () {
                          var e = this.state.entrancePopup;
                          this.setState({
                            entrancePopup: (0, o.Z)(
                              (0, o.Z)({}, e),
                              {},
                              { sw: 0 }
                            ),
                            entrancePopupHidden: !0,
                          });
                        },
                      },
                      {
                        key: "toggleTopAnnouncement",
                        value: function () {
                          var e = this.state.showTopAnnouncement;
                          this.setState({
                            mask: !e,
                            showTopAnnouncement: !e,
                            maskType: "announcement",
                            transition: !e,
                          });
                        },
                      },
                      {
                        key: "toPriceGuaranteeRule",
                        value: function () {
                          var e = this.state.priceGuaranteeHidden,
                            t =
                              "https://market.suanya.com/activity/flight/static/maiguipeiintro.html?partner=".concat(
                                W ? "tieyou" : "zhixing"
                              );
                          F.Z.twebview({ data: { url: t } }),
                            e || this.hidePriceGuarantee();
                        },
                      },
                      {
                        key: "hidePriceGuarantee",
                        value: function () {
                          this.setState({ priceGuaranteeHidden: !0 }),
                            S().setStorage({ key: "MGPTipHidden", data: !0 });
                        },
                      },
                      {
                        key: "toStudentPrivilege",
                        value: function () {
                          var e = "https://m."
                            .concat(
                              W ? "tieyou" : "suanya",
                              ".com/webapp/train/activity/20200518-ztrip-flight-student-privilege/?partner="
                            )
                            .concat(W ? "tieyou" : "zhixing");
                          F.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "onGoBookX",
                        value: function (e) {
                          if (e) {
                            var t = this.state.singles,
                              i =
                                null == t
                                  ? void 0
                                  : t.find(function (t) {
                                      var i, a;
                                      return (
                                        (null == t ||
                                        null === (i = t.sequences) ||
                                        void 0 === i ||
                                        null === (a = i[0]) ||
                                        void 0 === a
                                          ? void 0
                                          : a.flightNo) === e
                                      );
                                    });
                            i && this.handleFlightClick(i);
                          }
                        },
                      },
                      {
                        key: "getFlightExposeData",
                        value: function (e, t) {
                          var i, a;
                          return e && t >= 0
                            ? {
                                PageId: this.pageId,
                                FlightWay: "S",
                                CompareList:
                                  null === (i = e.ota) || void 0 === i
                                    ? void 0
                                    : i.map(function (e) {
                                        return {
                                          Key: e.name,
                                          Value: String(e.pr),
                                        };
                                      }),
                                FromDate: e.dptTime,
                                ArriveDate: e.arrTime,
                                FromCityName: e.dptName,
                                ToCityName: e.arrName,
                                Price: e.apr,
                                ProductIds:
                                  (null === (a = e.sequences) || void 0 === a
                                    ? void 0
                                    : a.map(function (e) {
                                        return e.flightNo;
                                      })) || [],
                                Tag: e.tag || "",
                                Seq: t >= 0 ? t : -1,
                              }
                            : null;
                        },
                      },
                      {
                        key: "logFlightClick",
                        value: function (e, t) {
                          var i = this.getFlightExposeData(e, t);
                          e &&
                            i &&
                            this.ubtTrace(
                              "FltWDjtfltList_FlightList_FlightCard_click",
                              i
                            );
                        },
                      },
                      {
                        key: "handleFlightClick",
                        value: function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "single",
                            i = arguments.length > 2 ? arguments[2] : void 0;
                          e && t && this.logFlightClick(e, i),
                            P.ZP.isLogin || this.doLogin();
                          var a = [];
                          a.push({ key: "grab", value: e.grab }),
                            console.log("".concat(t, ": "), e),
                            this.toBookX({ flight: e, extension: a });
                        },
                      },
                      {
                        key: "handleGrabFlightClick",
                        value: function (e, t) {
                          if (!P.ZP.isLogin) return this.doLogin();
                          var i = [];
                          i.push({ key: "grab", value: e.grab }),
                            console.log("".concat(t, ": "), e),
                            this.toBookX({ flight: e, extension: i });
                        },
                      },
                      {
                        key: "handleRecommendFlightClick",
                        value: function (e, t) {
                          var i = [];
                          i.push({ key: "grab", value: e.grab }),
                            console.log("".concat(t, ": "), e),
                            this.toBookX({ flight: e, extension: i });
                        },
                      },
                      {
                        key: "handleNoResultMoreClick",
                        value: function (e) {
                          var t = this.state.noResultRecommends[e],
                            i = t.dptName,
                            a = t.dptCode,
                            n = t.arrName,
                            r = t.arrCode,
                            s = t.dptDate;
                          this.navigateTo({
                            url: "/pages/flight/list/list?departCity="
                              .concat(i, "&departCityCode=")
                              .concat(a, "&arriveCity=")
                              .concat(n, "&arriveCityCode=")
                              .concat(r, "&departDate=")
                              .concat(s, "&nearby=0"),
                          });
                        },
                      },
                      {
                        key: "handleClickTopTag",
                        value: function (e) {
                          if (e) {
                            var t = e.title,
                              i = e.content,
                              a = e.tips,
                              n = e.btnTxt;
                            this.props.onCommonSceneDrawer.alert({
                              title: t,
                              isShowClose: !0,
                              confirmText: n || "我知道了",
                              content: function () {
                                return (0, q.BX)(v.View, {
                                  className: "tag-popup-cont",
                                  children: [
                                    (0, q.tZ)(A.ZtRichText, { nodes: i }),
                                    (0, q.tZ)(v.View, {
                                      className: "tag-popup-desc",
                                      children: (0, q.tZ)(A.ZtRichText, {
                                        nodes: a,
                                      }),
                                    }),
                                  ],
                                });
                              },
                            });
                          }
                        },
                      },
                      {
                        key: "toBookX",
                        value: function (e) {
                          var t = e.flight,
                            i = e.extension,
                            a = void 0 === i ? [] : i,
                            n = t.sequences,
                            r = t.token,
                            s = this.props.flightInfo,
                            o = s.departureCode,
                            c = s.arrivalCode,
                            l = [
                              {
                                dptDate: this.state.departDate,
                                dptCode: o,
                                arrCode: c,
                              },
                            ],
                            u = [{}];
                          u[0].flights = n.map(function (e) {
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
                          var d = this.state.studentPrivilegeBtnVisible;
                          this.navigateTo({
                            url: "/pages/flight/bookx/bookx?token=".concat(
                              encodeURIComponent(r),
                              "&sourcePage=trainList&fromPage=xcx_djt_flt"
                            ),
                            data: {
                              segments: u,
                              query: {
                                segments: l,
                                hasChild: !1,
                                hasBaby: !1,
                                extension: a,
                              },
                              isStu: d,
                            },
                          });
                        },
                      },
                      {
                        key: "toNearbyAirport",
                        value: function (e) {
                          var t = e.departureCityName,
                            i = e.departureCityCode,
                            a = e.arrivalCityName,
                            n = e.arrivalCityCode,
                            r = e.departureDate;
                          this.navigateTo({
                            url: "/pages/flight/list/list?departCity="
                              .concat(t, "&departCityCode=")
                              .concat(i, "&arriveCity=")
                              .concat(a, "&arriveCityCode=")
                              .concat(n, "&departDate=")
                              .concat(r, "&nearby=0&fromPage=xcx_flt_linjin"),
                          });
                        },
                      },
                      {
                        key: "openFlightFilter",
                        value: function () {
                          var e = this.state,
                            t = e.flightFilterList,
                            i = e.selectedFilters,
                            a = void 0 === i ? [] : i,
                            n = e.filterFlightNumber,
                            r = e.onlySingles,
                            s = void 0 !== r && r,
                            o = e.sharedFlightHidden,
                            c = void 0 !== o && o;
                          (this.tempFilter = w.Z.deepCopy(t)),
                            (this.selectedFilters = w.Z.deepCopy(a)),
                            (this.filterFlightNumber = n),
                            (this.onlySingles = s),
                            (this.sharedFlightHidden = c),
                            this.setState({
                              mask: !0,
                              maskType: "filter",
                              showFilter: !0,
                              transition: !0,
                            });
                        },
                      },
                      {
                        key: "cancelFlightFilter",
                        value: function () {
                          this.setState({
                            flightFilterList: this.tempFilter,
                            selectedFilters: this.selectedFilters,
                            filterFlightNumber: this.filterFlightNumber || "",
                            onlySingles: this.onlySingles,
                            sharedFlightHidden: this.sharedFlightHidden,
                            filterIndex: 0,
                            mask: !1,
                            maskType: "",
                            showFilter: !1,
                            transition: !1,
                          });
                        },
                      },
                      {
                        key: "confirmFlightFilter",
                        value: function () {
                          var e = this.state,
                            t = e.flightFilterList,
                            i = e.filterFlightNumber,
                            a = e.onlySingles,
                            n = void 0 !== a && a,
                            r = e.sharedFlightHidden,
                            s = void 0 !== r && r;
                          if (i <= 0)
                            return (0, k.showToast)("该搜索条件下无航班");
                          var o =
                            t.filter(function (e) {
                              return e.active;
                            }).length > 0 ||
                            n ||
                            s;
                          this.setState(
                            {
                              mask: !1,
                              maskType: "",
                              showFilter: !1,
                              transition: !1,
                              isFilter: o,
                              filterIndex: 0,
                            },
                            this.filterFlightsList
                          );
                        },
                      },
                      {
                        key: "selectKey",
                        value: function (e) {
                          this.setState({ filterIndex: e });
                        },
                      },
                      {
                        key: "filterSelected",
                        value: function (e, t) {
                          var i,
                            a = this,
                            n = this.state,
                            r = n.filterIndex,
                            s = n.flightFilterList,
                            o = n.selectedFilters,
                            c = void 0 === o ? [] : o,
                            l = s[r].list[e].selected;
                          if (!t) {
                            if (((s[r].list[e].selected = !l), l)) {
                              var u = c.findIndex(function (t) {
                                return t.title === s[r].list[e].title;
                              });
                              console.log(u), u > -1 && c.splice(u, 1), (i = c);
                            } else
                              c.push({
                                key: s[r].list[e].key,
                                title: s[r].list[e].title,
                                code: s[r].list[e].code,
                              }),
                                (i = c);
                            0 ===
                            s[r].list.filter(function (e) {
                              return e.selected;
                            }).length
                              ? (s[r].active = !1)
                              : (s[r].active = !0),
                              this.setState(
                                { flightFilterList: s, selectedFilters: i },
                                function () {
                                  a.filterFlightsList(1);
                                }
                              );
                          }
                        },
                      },
                      {
                        key: "removeFilterKey",
                        value: function (e) {
                          var t,
                            i = this,
                            a = this.state,
                            n = a.selectedFilters,
                            r = a.flightFilterList,
                            s = n[e],
                            o = s.key,
                            c = s.code,
                            l = (0, L.Z)(r);
                          try {
                            for (l.s(); !(t = l.n()).done; ) {
                              var u = t.value;
                              if (u.prop === o) {
                                var d,
                                  m = 0,
                                  h = (0, L.Z)(u.list);
                                try {
                                  for (h.s(); !(d = h.n()).done; ) {
                                    var f = d.value;
                                    f.code === c && (f.selected = !1),
                                      f.selected && m++;
                                  }
                                } catch (e) {
                                  h.e(e);
                                } finally {
                                  h.f();
                                }
                                0 === m && (u.active = !1);
                              }
                            }
                          } catch (e) {
                            l.e(e);
                          } finally {
                            l.f();
                          }
                          n.splice(e, 1),
                            this.setState(
                              { selectedFilters: n, flightFilterList: r },
                              function () {
                                i.filterFlightsList(1);
                              }
                            );
                        },
                      },
                      {
                        key: "handleSinglesFilter",
                        value: function () {
                          var e = this,
                            t = this.state.onlySingles,
                            i = void 0 !== t && t;
                          this.setState({ onlySingles: !i }, function () {
                            e.filterFlightsList(1);
                          });
                        },
                      },
                      {
                        key: "handleShareFlightFilter",
                        value: function () {
                          var e = this,
                            t = this.state.sharedFlightHidden,
                            i = void 0 !== t && t;
                          this.setState(
                            { sharedFlightHidden: !i },
                            function () {
                              e.filterFlightsList(1);
                            }
                          );
                        },
                      },
                      {
                        key: "onFlightListScroll",
                        value: function (e) {
                          var t = (e.detail || {}).scrollTop,
                            i = void 0 === t ? 0 : t,
                            a = this.state.filterScrollHidden,
                            n = void 0 !== a && a,
                            r = new Date().getTime();
                          if (!this._lastScrollTopTime && !this._lastScrollTop)
                            return (
                              (this._lastScrollTopTime = r),
                              void (this._lastScrollTop = i)
                            );
                          if (!(r - this._lastScrollTopTime < 200)) {
                            if (
                              ((this._lastScrollTopTime = r),
                              i - this._lastScrollTop > 0)
                            ) {
                              if (
                                (i > 30 && (this._reachTop = !1),
                                this._reachBottom)
                              )
                                return;
                              if (this._reachTop) return;
                              n || this.setState({ filterScrollHidden: !0 });
                            } else
                              (this._reachBottom = !1),
                                n && this.setState({ filterScrollHidden: !1 });
                            this._lastScrollTop = i;
                          }
                        },
                      },
                      {
                        key: "onFlightListTop",
                        value: function () {
                          (this._reachTop = !0),
                            this.setState({ filterScrollHidden: !1 });
                        },
                      },
                      {
                        key: "onFlightListBottom",
                        value: function () {
                          (this._reachBottom = !0),
                            this.setState({ filterScrollHidden: !1 });
                        },
                      },
                      {
                        key: "getCouponInformation",
                        value: function (e) {
                          var t = e.expiredTime,
                            i = e.couponAmount,
                            a = e.isShowNewCoupon,
                            n = e.showDialog;
                          this.setState({
                            couponAmount: i,
                            expiredTime: t,
                            isShowNewCoupon: a,
                            showDialog: n,
                          });
                        },
                      },
                      {
                        key: "toggleCouponPopupVisible",
                        value: function (e) {
                          this.setState({ isShowNewCoupon: e });
                        },
                      },
                      {
                        key: "handleDrawClose",
                        value: function () {
                          this.setData({
                            isDrawShow: !1,
                            mask: !1,
                            transition: !1,
                          });
                        },
                      },
                      { key: "noop", value: function () {} },
                      {
                        key: "toFlightAllowanceWebview",
                        value: function () {
                          var e = "https://m."
                            .concat(
                              W ? "tieyou" : "suanya",
                              ".com/webapp/train/activity/20201012-ztrip-flight-allowance/?isHideNavBar=YES&partner="
                            )
                            .concat(W ? "tieyou" : "zhixing");
                          F.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.props.hidden,
                            i = void 0 === t || t,
                            a = this.state,
                            n = a.singles,
                            r = a.transfers,
                            s = a.saleOuts,
                            o = a.noResultRecommends,
                            c = a.isFilter,
                            l = a.showFilter,
                            u = a.noFlightLine,
                            d = a.noFlight,
                            m = a.transition,
                            h = a.mask,
                            f = a.maskType,
                            p = a.showDialog,
                            g = a.parityHidden,
                            S = a.tipAndFloat,
                            T = a.entrancePopup,
                            y = a.entrancePopupHidden,
                            N = a.showTopAnnouncement,
                            b = a.priceGuaranteeHidden,
                            C = a.surpriseParams,
                            V = void 0 === C ? {} : C,
                            _ = a.isShowNewCoupon,
                            x = a.couponAmount,
                            D = a.expiredTime,
                            I = a.drawLevel,
                            B = a.springFestivalHidden,
                            L = a.showNoFlightLineTip,
                            F = a.noFlightLineTip,
                            X = a.parityPrice,
                            M = a.showNearby,
                            H = a.nearbyCardPosition,
                            j = a.nearbyRoutes,
                            J = a.filterScrollHidden,
                            $ = a.flightSortType,
                            Q = a.flightSortPriceOrder,
                            ee = a.flightSortTimeOrder,
                            te = a.filterFlightNumber,
                            ie = a.selectedFilters,
                            ae = void 0 === ie ? [] : ie,
                            ne = a.onlySingles,
                            re = a.sharedFlightHidden,
                            se = a.flightFilterList,
                            oe = a.filterIndex,
                            ce = a.advantageDrawData,
                            le = a.advantageDrawShow,
                            ue = a.imagePopup,
                            de = w.Z.isIPhoneX(),
                            me = { expiredTime: D, couponAmount: x };
                          return (0, q.BX)(v.View, {
                            className: "flight-view",
                            style: "display: ".concat(i ? "none" : "block"),
                            children: [
                              (0, q.BX)(v.ScrollView, {
                                className: "flight-scroll-list",
                                scrollY: !(u || d || l),
                                enableBackToTop: !0,
                                onScroll: this.onFlightListScroll,
                                onScrollToUpper: this.onFlightListTop,
                                onScrollToLower: this.onFlightListBottom,
                                children: [
                                  1 === S.sw &&
                                    (0, q.BX)(v.View, {
                                      className: "top-announcement",
                                      id: "AKDc",
                                      onClick: this.toggleTopAnnouncement,
                                      children: [
                                        (0, q.tZ)(v.View, {
                                          className: "txt",
                                          children: (0, q.tZ)(A.ZtRichText, {
                                            style:
                                              "color: " + (S.topColor || ""),
                                            nodes: S.topText,
                                          }),
                                        }),
                                        (0, q.tZ)(v.Text, {
                                          className: "ifont-arr iconfont",
                                        }),
                                      ],
                                    }),
                                  (0, q.tZ)(v.View, {
                                    children:
                                      !i &&
                                      (0, q.tZ)(z.Z, {
                                        getAdvantageDrawInfo:
                                          this.getAdvantageDrawInfo,
                                        onOpenDraw: this.onAdvantageDraw,
                                        isLogin: P.ZP.isLogin,
                                      }),
                                  }),
                                  (0, q.tZ)(K.Z, {
                                    isLogin: P.ZP.isLogin,
                                    doLogin: this.doLogin,
                                  }),
                                  this.renderFlightVsTrain(),
                                  L &&
                                    (0, q.tZ)(v.View, {
                                      className: "flight-near-recomd",
                                      children: F,
                                    }),
                                  X > 0 &&
                                    (0, q.BX)(v.View, {
                                      className: "compare",
                                      style: "display: ".concat(
                                        0 === o.length && B ? "flex" : "none"
                                      ),
                                      children: [
                                        (0, q.tZ)(v.Image, {
                                          className: "robot",
                                          src: "https://pic.c-ctrip.com/train/zt/wechat/robot.png",
                                        }),
                                        (0, q.BX)(v.View, {
                                          className: "desc",
                                          children: [
                                            (0, q.BX)(v.View, {
                                              className: "title",
                                              children: [
                                                "当前日期机票比高铁",
                                                (0, q.tZ)(v.View, {
                                                  className: "label",
                                                  children: (0, q.tZ)(v.Text, {
                                                    children: "省" + X + "元",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, q.tZ)(v.View, {
                                              className: "ins",
                                              children:
                                                "此航线价格可能会上涨，建议尽快预订",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  n &&
                                    n.map(function (t, i) {
                                      var a, n, r;
                                      return (0, q.BX)(
                                        v.Block,
                                        {
                                          children: [
                                            (0, q.BX)(v.View, {
                                              id: "AKDd-".concat(i),
                                              className:
                                                "fltlist_item autoExpose",
                                              "data-expose": {
                                                ubtKeyName:
                                                  "FltWDjtfltList_FlightList_FlightCard_exposure",
                                                data: e.getFlightExposeData(
                                                  t,
                                                  i
                                                ),
                                              },
                                              "data-ubt-key":
                                                "xcx_djt_list_click",
                                              onClick: e.handleFlightClick.bind(
                                                e,
                                                t,
                                                "single",
                                                i
                                              ),
                                              ref:
                                                null ===
                                                  (a = (0,
                                                  k.getCurrentPage)()) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.refreshObserve,
                                              children: [
                                                (0, q.tZ)(U, {
                                                  tag: t.tag,
                                                  tagPopupInfo: t.tagPopupInfo,
                                                  onClick:
                                                    e.handleClickTopTag.bind(e),
                                                }),
                                                (0, q.BX)(v.View, {
                                                  className: "flt_intro",
                                                  children: [
                                                    (0, q.BX)(v.View, {
                                                      className: "flt_col",
                                                      children: [
                                                        (0, q.BX)(v.View, {
                                                          className:
                                                            "flt_depart",
                                                          children: [
                                                            (0, q.tZ)(v.Text, {
                                                              className:
                                                                "flt_time",
                                                              children:
                                                                t.dptTimeStr,
                                                            }),
                                                            (0, q.tZ)(v.Text, {
                                                              className:
                                                                "flt_airport ".concat(
                                                                  1 ===
                                                                    t.cityColor ||
                                                                    3 ===
                                                                      t.cityColor
                                                                    ? "torage"
                                                                    : ""
                                                                ),
                                                              children:
                                                                t.dptAName +
                                                                t.dptTrm,
                                                            }),
                                                          ],
                                                        }),
                                                        (0, q.BX)(v.View, {
                                                          className:
                                                            "separator",
                                                          children: [
                                                            t.abbr &&
                                                              (0, q.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "spt_type",
                                                                  children:
                                                                    t.abbr,
                                                                }
                                                              ),
                                                            (0, q.tZ)(v.View, {
                                                              className:
                                                                "spt_arr",
                                                            }),
                                                          ],
                                                        }),
                                                        (0, q.BX)(v.View, {
                                                          className:
                                                            "flt_arrival",
                                                          children: [
                                                            (0, q.tZ)(v.Text, {
                                                              className:
                                                                "flt_time",
                                                              children:
                                                                t.arrTimeStr,
                                                            }),
                                                            (0, q.tZ)(v.Text, {
                                                              className:
                                                                "flt_airport ".concat(
                                                                  2 ===
                                                                    t.cityColor ||
                                                                    3 ===
                                                                      t.cityColor
                                                                    ? "torage"
                                                                    : ""
                                                                ),
                                                              children:
                                                                t.arrAName +
                                                                t.arrTrm,
                                                            }),
                                                          ],
                                                        }),
                                                        t.dayDiff > 0 &&
                                                          (0, q.tZ)(v.Text, {
                                                            className: "next",
                                                            children:
                                                              "+".concat(
                                                                t.dayDiff,
                                                                "天"
                                                              ),
                                                          }),
                                                      ],
                                                    }),
                                                    (0, q.BX)(v.View, {
                                                      className: "price_col",
                                                      children: [
                                                        (0, q.BX)(v.View, {
                                                          className: "price",
                                                          children: [
                                                            t.stock &&
                                                              (0, q.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "tag",
                                                                  children:
                                                                    t.stock,
                                                                }
                                                              ),
                                                            (0, q.tZ)(v.Text, {
                                                              className:
                                                                "flt_price color-red",
                                                              children: t.apr,
                                                            }),
                                                          ],
                                                        }),
                                                        t.ccd &&
                                                          (0, q.tZ)(v.Text, {
                                                            className:
                                                              "discount-info bdcolor-red color-red",
                                                            children: t.ccd,
                                                          }),
                                                        t.pmt &&
                                                          (0, q.BX)(v.View, {
                                                            className:
                                                              "flt-pmt flex-center ".concat(
                                                                null !==
                                                                  (n = t.pmt) &&
                                                                  void 0 !==
                                                                    n &&
                                                                  n.icon
                                                                  ? ""
                                                                  : "without-icon"
                                                              ),
                                                            children: [
                                                              !(
                                                                null ===
                                                                  (r = t.pmt) ||
                                                                void 0 === r ||
                                                                !r.icon
                                                              ) &&
                                                                (0, q.tZ)(
                                                                  q.HY,
                                                                  {
                                                                    children:
                                                                      (0, q.tZ)(
                                                                        v.Image,
                                                                        {
                                                                          className:
                                                                            "flt-pmt-icon",
                                                                          src:
                                                                            t
                                                                              .pmt
                                                                              .icon ||
                                                                            "",
                                                                          mode: "heightFix",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                              (0, q.tZ)(
                                                                v.Text,
                                                                {
                                                                  className:
                                                                    "flt-pmt-txt",
                                                                  children:
                                                                    t.pmt.text,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, q.BX)(v.View, {
                                                  className: "airline_info",
                                                  children: [
                                                    (0, q.tZ)(v.Image, {
                                                      className: "airline_logo",
                                                      src: t.sequences[0]
                                                        .airIcon,
                                                    }),
                                                    (0, q.BX)(v.View, {
                                                      className: "airline_txt",
                                                      children: [
                                                        (0, q.BX)(v.Text, {
                                                          className: "span",
                                                          children: [
                                                            t.sequences[0]
                                                              .airFullName +
                                                              t.sequences[0]
                                                                .flightNo,
                                                            (0, q.tZ)(v.Text, {
                                                              className:
                                                                "color-red",
                                                              children: t
                                                                .sequences[0]
                                                                .shared
                                                                ? "共享"
                                                                : "",
                                                            }),
                                                          ],
                                                        }),
                                                        (0, q.tZ)(v.Text, {
                                                          className: "span",
                                                          children:
                                                            (t.sequences[0]
                                                              .cftn || "") +
                                                            (t.sequences[0].cfts
                                                              ? "(" +
                                                                t.sequences[0]
                                                                  .cfts +
                                                                ")"
                                                              : ""),
                                                        }),
                                                        (0, q.tZ)(v.Text, {
                                                          className: "span",
                                                          children: t.costTime,
                                                        }),
                                                      ],
                                                    }),
                                                    t.ncd && t.ncd.text
                                                      ? (0, q.BX)(v.View, {
                                                          className:
                                                            "holiday-info bdcolor-red color-red",
                                                          children: [
                                                            t.ncd.url &&
                                                              (0, q.tZ)(
                                                                v.Image,
                                                                {
                                                                  className:
                                                                    "holiday-img",
                                                                  src: t.ncd
                                                                    .url,
                                                                }
                                                              ),
                                                            (0, q.tZ)(v.Text, {
                                                              className: t.ncd
                                                                .url
                                                                ? ""
                                                                : "lb1",
                                                              children:
                                                                t.ncd.text,
                                                            }),
                                                          ],
                                                        })
                                                      : !!t.discount &&
                                                        (0, q.tZ)(v.Text, {
                                                          className:
                                                            "airline_tips",
                                                          children: t.discount,
                                                        }),
                                                  ],
                                                }),
                                                t.ota &&
                                                  t.ota.length > 0 &&
                                                  !g &&
                                                  (0, q.tZ)(v.View, {
                                                    className: "list-bijia",
                                                    children: t.ota.map(
                                                      function (e) {
                                                        return (0, q.tZ)(
                                                          v.View,
                                                          {
                                                            className: "item",
                                                            children:
                                                              e.name +
                                                              ": " +
                                                              (e.pr > 0
                                                                ? "￥" + e.pr
                                                                : "暂无"),
                                                          },
                                                          "index"
                                                        );
                                                      }
                                                    ),
                                                  }),
                                                0 !== t.grab &&
                                                  !c &&
                                                  (0, q.BX)(v.View, {
                                                    className:
                                                      "grab " +
                                                      (W ? "ty" : "zx"),
                                                    children: [
                                                      (0, q.BX)(v.View, {
                                                        className: "txt",
                                                        children: [
                                                          "经济舱已售罄，可抢",
                                                          (0, q.tZ)(v.Text, {
                                                            className:
                                                              "color-red",
                                                            children:
                                                              "￥" + t.gbpr,
                                                          }),
                                                          "全价经济舱",
                                                        ],
                                                      }),
                                                      (0, q.tZ)(v.Button, {
                                                        className: "btn-grab",
                                                        children: "抢票",
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                            M &&
                                              1 === H &&
                                              1 === i &&
                                              (0, q.tZ)(Y, { nearbyRoutes: j }),
                                          ],
                                        },
                                        t.flightNo
                                      );
                                    }),
                                  M &&
                                    2 === H &&
                                    (0, q.tZ)(Y, { nearbyRoutes: j }),
                                  s &&
                                    s.length > 0 &&
                                    !c &&
                                    (0, q.tZ)(v.View, {
                                      className: "division-line",
                                      children: "已售完，以下可抢票",
                                    }),
                                  s.length > 0 &&
                                    !c &&
                                    (0, q.tZ)(v.Block, {
                                      children: s.map(function (t) {
                                        return (0,
                                        q.BX)(v.View, { className: "fltlist_item", id: "AKDe", onClick: e.handleGrabFlightClick.bind(e, t, "grab"), children: [(0, q.BX)(v.View, { className: "flt_intro", children: [(0, q.BX)(v.View, { className: "flt_col", children: [(0, q.BX)(v.View, { className: "flt_depart", children: [(0, q.tZ)(v.Text, { className: "flt_time", children: t.dptTimeStr }), (0, q.tZ)(v.Text, { className: "flt_airport " + (1 === t.cityColor || 3 === t.cityColor ? "torage" : ""), children: t.dptAName + t.dptTrm })] }), (0, q.BX)(v.View, { className: "separator", children: [t.abbr && (0, q.tZ)(v.View, { className: "spt_type", children: t.abbr }), (0, q.tZ)(v.View, { className: "spt_arr" })] }), (0, q.BX)(v.View, { className: "flt_arrival", children: [(0, q.tZ)(v.Text, { className: "flt_time", children: t.arrTimeStr }), (0, q.tZ)(v.Text, { className: "flt_airport " + (2 === t.cityColor || 3 === t.cityColor ? "torage" : ""), children: t.arrAName + t.arrTrm })] }), t.dayDiff > 0 && (0, q.tZ)(v.Text, { className: "next", children: "+" + t.dayDiff + "天" })] }), (0, q.tZ)(v.View, { className: "price_col", children: (0, q.tZ)(v.View, { className: "status", children: "售完" }) })] }), (0, q.BX)(v.View, { className: "airline_info", children: [(0, q.tZ)(v.Image, { className: "airline_logo", src: t.sequences[0].airIcon }), (0, q.BX)(v.View, { className: "airline_txt", children: [(0, q.BX)(v.Text, { className: "span", children: [t.sequences[0].airFullName + t.sequences[0].flightNo, (0, q.tZ)(v.Text, { className: "color-red", children: t.sequences[0].shared ? "共享" : "" })] }), (0, q.tZ)(v.Text, { className: "span", children: (t.sequences[0].cftn || "") + (t.sequences[0].cfts ? "(" + t.sequences[0].cfts + ")" : "") }), (0, q.tZ)(v.Text, { className: "span", children: t.costTime })] }), (0, q.tZ)(v.View, { className: "grab-status-price " + (W ? "ty" : "zx"), children: "￥" + t.gbpr + "去抢票" })] })] }, t.flightNo);
                                      }),
                                    }),
                                  0 !== r.length &&
                                    (0, q.tZ)(v.View, {
                                      className: "division-line",
                                      children: "中转航班推荐",
                                    }),
                                  r.length > 0 &&
                                    (0, q.tZ)(v.Block, {
                                      children: r.map(function (t, i) {
                                        var a;
                                        return (0,
                                        q.BX)(v.View, { className: "fltlist_item autoExpose " + (t.clicked ? "clicked" : ""), "data-ubt-key": "xcx_djt_list_click", id: "AKDf", onClick: e.handleFlightClick.bind(e, t, "transfer", i + n.length), "data-expose": { ubtKeyName: "FltWDjtfltList_FlightList_FlightCard_exposure", data: e.getFlightExposeData(t, i + n.length) }, ref: null === (a = (0, k.getCurrentPage)()) || void 0 === a ? void 0 : a.refreshObserve, children: [(0, q.BX)(v.View, { className: "flt_intro", children: [(0, q.BX)(v.View, { className: "flt_col", children: [(0, q.BX)(v.View, { className: "flt_depart", children: [(0, q.tZ)(v.Text, { className: "flt_time", children: t.dptTimeStr }), (0, q.tZ)(v.Text, { className: "flt_airport", children: t.dptAName + t.dptTrm })] }), (0, q.BX)(v.View, { className: "separator", children: [t.abbr && (0, q.tZ)(v.View, { className: "spt_type", children: t.abbr }), (0, q.tZ)(v.View, { className: "spt_arr" })] }), (0, q.BX)(v.View, { className: "flt_arrival", children: [(0, q.tZ)(v.Text, { className: "flt_time", children: t.arrTimeStr }), (0, q.tZ)(v.Text, { className: "flt_airport", children: t.arrAName + t.arrTrm })] }), t.dayDiff > 0 && (0, q.tZ)(v.Text, { className: "next", children: "+" + t.dayDiff + "天" })] }), (0, q.BX)(v.View, { className: "price_col", children: [(0, q.BX)(v.View, { className: "price", children: [t.stock && (0, q.tZ)(v.View, { className: "tag", children: t.stock }), (0, q.tZ)(v.Text, { className: "flt_price color-red", children: t.apr })] }), t.ccd && (0, q.tZ)(v.Text, { className: "discount-info bdcolor-red color-red", children: t.ccd })] })] }), (0, q.BX)(v.View, { className: "airline_info", children: [(0, q.tZ)(v.Image, { className: "airline_logo", src: t.sequences[0].airIcon }), (0, q.tZ)(v.View, { className: "airline_txt", children: (0, q.tZ)(v.Text, { className: "span", children: t.sequences[0].airFullName + t.sequences[0].flightNo }) }), (0, q.tZ)(v.Image, { className: "airline_logo", src: t.sequences[1].airIcon }), (0, q.BX)(v.View, { className: "airline_txt", children: [(0, q.tZ)(v.Text, { className: "span", children: t.sequences[1].airFullName + t.sequences[1].flightNo }), (0, q.tZ)(v.Text, { className: "span", children: t.costTime })] }), t.discount && (0, q.tZ)(v.Text, { className: "airline_tips", children: t.discount })] })] }, t.flightNo);
                                      }),
                                    }),
                                  ((n && n[0]) || (r && r[0])) &&
                                    (0, q.tZ)(v.View, {
                                      className:
                                        "fltlist_end " + (de ? "iphone-x" : ""),
                                    }),
                                  u &&
                                    (0, q.BX)(v.View, {
                                      className: "list-none",
                                      children: [
                                        (0, q.tZ)(v.Image, {
                                          src:
                                            "http://images3.c-ctrip.com/zt/wechat/" +
                                            (W
                                              ? "list-none-ty"
                                              : "list-none-zx") +
                                            ".png",
                                          className: "img-none",
                                        }),
                                        (0, q.tZ)(v.View, {
                                          className: "txt",
                                          children: "抱歉，该线路暂无航班",
                                        }),
                                      ],
                                    }),
                                  d &&
                                    (0, q.BX)(v.View, {
                                      className: "list-none",
                                      children: [
                                        (0, q.tZ)(v.Icon, {
                                          className:
                                            "img-selnone " + (W ? "ty" : "zx"),
                                        }),
                                        (0, q.tZ)(v.View, {
                                          className: "tit",
                                          children: "暂无内容",
                                        }),
                                        (0, q.tZ)(v.View, {
                                          className: "txt",
                                          children:
                                            "没有找到出行方案，换个日期试试吧",
                                        }),
                                      ],
                                    }),
                                  o &&
                                    o[0] &&
                                    (0, q.tZ)(v.Block, {
                                      children: o.map(function (t, i) {
                                        return (0, q.BX)(
                                          v.View,
                                          {
                                            className: "flt-near-airport",
                                            children: [
                                              (0, q.BX)(v.View, {
                                                className:
                                                  "flt-near-airport-hd",
                                                children: [
                                                  (0, q.BX)(v.View, {
                                                    className: "cont",
                                                    children: [
                                                      (0, q.tZ)(v.Text, {
                                                        className: t.dptColor
                                                          ? "tgreen"
                                                          : "",
                                                        children: t.dptName,
                                                      }),
                                                      (0, q.tZ)(v.View, {
                                                        className: "mid",
                                                        children: (0, q.tZ)(
                                                          v.Text,
                                                          {
                                                            className:
                                                              "ifont-splane iconfont",
                                                          }
                                                        ),
                                                      }),
                                                      (0, q.tZ)(v.Text, {
                                                        className: t.arrColor
                                                          ? "tgreen"
                                                          : "",
                                                        children: t.arrName,
                                                      }),
                                                    ],
                                                  }),
                                                  t.trainDesc &&
                                                    (0, q.tZ)(v.View, {
                                                      className: "rbox",
                                                      children: t.trainDesc,
                                                    }),
                                                ],
                                              }),
                                              t.flights.map(function (t) {
                                                return (0,
                                                q.BX)(v.View, { className: "fltlist_item", id: "AKDg", onClick: e.handleRecommendFlightClick.bind(e, t, "recommend"), children: [(0, q.tZ)(U, { tag: t.tag, tagPopupInfo: t.tagPopupInfo, onClick: e.handleClickTopTag.bind(e) }), (0, q.BX)(v.View, { className: "flt_intro", children: [(0, q.BX)(v.View, { className: "flt_col", children: [(0, q.BX)(v.View, { className: "flt_depart", children: [(0, q.tZ)(v.Text, { className: "flt_time", children: t.dptTimeStr }), (0, q.tZ)(v.Text, { className: "flt_airport tgrey", children: t.dptAName + t.dptTrm })] }), (0, q.BX)(v.View, { className: "separator", children: [t.abbr && (0, q.tZ)(v.View, { className: "spt_type", children: t.abbr }), (0, q.tZ)(v.View, { className: "spt_arr" })] }), (0, q.BX)(v.View, { className: "flt_arrival", children: [(0, q.tZ)(v.Text, { className: "flt_time", children: t.arrTimeStr }), (0, q.tZ)(v.Text, { className: "flt_airport tgrey", children: t.arrAName + t.arrTrm })] }), t.dayDiff > 0 && (0, q.tZ)(v.Text, { className: "next", children: "+" + t.dayDiff + "天" })] }), (0, q.BX)(v.View, { className: "price_col", children: [(0, q.tZ)(v.View, { className: "price", children: (0, q.tZ)(v.Text, { className: "flt_price color-red", children: t.apr }) }), t.ccd && (0, q.tZ)(v.Text, { className: "discount-info bdcolor-red color-red", children: t.ccd })] })] }), (0, q.BX)(v.View, { className: "airline_info", children: [(0, q.tZ)(v.Image, { className: "airline_logo", src: t.sequences[0].airIcon }), (0, q.BX)(v.View, { className: "airline_txt", children: [(0, q.BX)(v.Text, { className: "span", children: [t.sequences[0].airFullName + t.sequences[0].flightNo, (0, q.tZ)(v.Text, { className: "color-red", children: t.sequences[0].shared ? "共享" : "" })] }), !t.transfer && (0, q.tZ)(v.Text, { className: "span", children: t.costTime })] }), t.transfer && (0, q.BX)(v.Block, { children: [(0, q.tZ)(v.Image, { className: "airline_logo", src: t.sequences[1].airIcon }), (0, q.BX)(v.View, { className: "airline_txt", children: [(0, q.BX)(v.Text, { className: "span", children: [t.sequences[1].airFullName + t.sequences[1].flightNo, (0, q.tZ)(v.Text, { className: "color-red", children: t.sequences[1].shared ? "共享" : "" })] }), (0, q.tZ)(v.Text, { className: "span", children: t.costTime })] })] }), (0, q.tZ)(v.Block, { children: t.ncd && t.ncd.text ? (0, q.BX)(v.View, { className: "holiday-info bdcolor-red color-red", children: [(0, q.tZ)(v.Image, { className: "holiday-img", src: t.ncd.url }), (0, q.tZ)(v.Text, { children: t.ncd.text })] }) : t.discount && (0, q.tZ)(v.Text, { className: "airline_tips", children: t.discount }) }), !1, !1] })] }, t.flightNo);
                                              }),
                                              (0, q.BX)(v.View, {
                                                className:
                                                  "flt-near-airport-more",
                                                id: "AKDh",
                                                onClick:
                                                  e.handleNoResultMoreClick.bind(
                                                    e,
                                                    i
                                                  ),
                                                children: [
                                                  "更多",
                                                  (0, q.tZ)(v.Text, {
                                                    className: "tgreen",
                                                    children:
                                                      t.dptName +
                                                      "-" +
                                                      t.arrName,
                                                  }),
                                                  "航班",
                                                  (0, q.tZ)(v.Text, {
                                                    className:
                                                      "ifont-arr iconfont",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          "index"
                                        );
                                      }),
                                    }),
                                ],
                              }),
                              (0, q.tZ)(v.View, {
                                children: (0, q.tZ)(v.View, {
                                  className: "pop-mask "
                                    .concat(h ? "show" : "", " ")
                                    .concat(m ? "active" : ""),
                                  id: "AKDi",
                                  onClick: this.closeMask.bind(this, f),
                                  onTouchMove: this.noop,
                                }),
                              }),
                              (0, q.tZ)(v.View, {
                                children:
                                  !I &&
                                  1 != p &&
                                  1 === T.sw &&
                                  !y &&
                                  (0, q.tZ)(v.View, {
                                    className: "pop-box",
                                    children: (0, q.tZ)(v.View, {
                                      className: "flight-pop-mid",
                                      children: (0, q.BX)(v.View, {
                                        className: "pop-tips-box",
                                        children: [
                                          (0, q.tZ)(v.Text, {
                                            className:
                                              "ifont-bell iconfont " +
                                              (W ? "ty" : "zx"),
                                          }),
                                          (0, q.tZ)(v.View, {
                                            className: "tit",
                                            children: T.title,
                                          }),
                                          (0, q.tZ)(v.View, {
                                            className: "txt",
                                            children: (0, q.tZ)(A.ZtRichText, {
                                              nodes: T.text,
                                            }),
                                          }),
                                          (0, q.tZ)(v.View, {
                                            className: "btn-box",
                                            children: (0, q.tZ)(v.Button, {
                                              className:
                                                "btn-primary btn-submit",
                                              id: "AKDj",
                                              onClick:
                                                this.onAnnouncementPopupClose,
                                              children: T.btn,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                              }),
                              (0, q.tZ)(v.View, {
                                children: (0, q.BX)(v.View, {
                                  className: "pop-botm " + (N ? "active" : ""),
                                  children: [
                                    (0, q.BX)(v.View, {
                                      className: "pop-botm-hd",
                                      onTouchMove: this.noop,
                                      children: [
                                        (0, q.tZ)(v.View, {
                                          className: "btn-cancel",
                                          style: "visibility: hidden",
                                          children: "取消",
                                        }),
                                        (0, q.tZ)(A.ZtRichText, {
                                          className: "tit",
                                          nodes: S.title,
                                        }),
                                        (0, q.tZ)(v.View, {
                                          className: "btn-submit color-primary",
                                          id: "AKDk",
                                          onClick: this.toggleTopAnnouncement,
                                          children: "确定",
                                        }),
                                      ],
                                    }),
                                    (0, q.tZ)(v.View, {
                                      className: "pop-botm-bd",
                                      children: (0, q.tZ)(v.View, {
                                        className: "announcement-box",
                                        children: (0, q.tZ)(v.View, {
                                          className: "txt",
                                          children: (0, q.tZ)(A.ZtRichText, {
                                            nodes: S.text,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              !Z.default.isBaidu &&
                                (0, q.tZ)(v.View, {
                                  className:
                                    "fixed-mrjt " + (de ? "iphone-x" : ""),
                                  id: "AKDl",
                                  onClick: this.toFlightAllowanceWebview,
                                }),
                              (0, q.tZ)(v.View, {
                                children:
                                  !I &&
                                  !b &&
                                  (0, q.BX)(v.View, {
                                    className: "pop-box",
                                    id: "AKDm",
                                    onClick: this.hidePriceGuarantee,
                                    children: [
                                      (0, q.tZ)(v.View, {
                                        className: "pop-mid2",
                                        id: "AKDn",
                                        onClick: this.noop,
                                        children: (0, q.BX)(v.View, {
                                          className: "pop-modal pop-mgp",
                                          children: [
                                            (0, q.tZ)(v.View, {
                                              className: "tit",
                                              children: "贵多少, 赔多少",
                                            }),
                                            (0, q.BX)(v.View, {
                                              className: "txt",
                                              children: [
                                                W ? "铁友" : "智行",
                                                "保证您购买的“买贵赔”机票产品为全网优惠价。",
                                              ],
                                            }),
                                            (0, q.tZ)(v.View, {
                                              className: "btn-box",
                                              children: (0, q.tZ)(v.Button, {
                                                className: "btn-see",
                                                id: "AKDo",
                                                onClick:
                                                  this.toPriceGuaranteeRule,
                                                children: "去看看",
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, q.tZ)(v.Icon, {
                                        className: "ifont-closed iconfont",
                                      }),
                                    ],
                                  }),
                              }),
                              P.ZP.isLogin &&
                                (0, q.tZ)(v.View, {
                                  children:
                                    0 === o.length &&
                                    !d &&
                                    (0, q.BX)(v.View, {
                                      className: "fltlist_filter flight "
                                        .concat(de ? "iphone-x" : "", " ")
                                        .concat(W ? "ty" : "zx", " ")
                                        .concat(J ? "hidden" : ""),
                                      children: [
                                        (0, q.BX)(v.View, {
                                          className: "item ".concat(
                                            c ? "selected" : ""
                                          ),
                                          id: "AKDp",
                                          onClick: this.openFlightFilter,
                                          children: [
                                            (0, q.tZ)(v.Text, {
                                              className:
                                                "ifont-fltscreen iconfont",
                                            }),
                                            (0, q.tZ)(v.View, {
                                              children: "筛选",
                                            }),
                                          ],
                                        }),
                                        (0, q.BX)(v.View, {
                                          className: "item ".concat(
                                            "time" == $ ? "selected" : ""
                                          ),
                                          id: "AKDq",
                                          onClick: this.flightSortBy.bind(
                                            this,
                                            "time"
                                          ),
                                          children: [
                                            (0, q.tZ)(v.Text, {
                                              className:
                                                "ifont-flttime iconfont",
                                            }),
                                            "time" == $
                                              ? (0, q.tZ)(v.View, {
                                                  children:
                                                    "ascend" === ee
                                                      ? "早-晚"
                                                      : "晚-早",
                                                })
                                              : (0, q.tZ)(v.View, {
                                                  children: "时间",
                                                }),
                                          ],
                                        }),
                                        (0, q.BX)(v.View, {
                                          className: "item ".concat(
                                            "price" == $ ? "selected" : ""
                                          ),
                                          id: "AKDr",
                                          onClick: this.flightSortBy.bind(
                                            this,
                                            "price"
                                          ),
                                          children: [
                                            (0, q.tZ)(v.Text, {
                                              className:
                                                "ifont-fltprice iconfont",
                                            }),
                                            "price" == $
                                              ? (0, q.tZ)(v.View, {
                                                  children:
                                                    "ascend" === Q
                                                      ? "低-高"
                                                      : "高-低",
                                                })
                                              : (0, q.tZ)(v.View, {
                                                  children: "价格",
                                                }),
                                          ],
                                        }),
                                        (0, q.BX)(v.View, {
                                          className: "item ".concat(
                                            g ? "" : "selected"
                                          ),
                                          id: "AKDs",
                                          onClick: this.toggleParity,
                                          children: [
                                            (0, q.tZ)(v.Text, {
                                              className:
                                                "ifont-fltbijia iconfont",
                                            }),
                                            (0, q.tZ)(v.View, {
                                              children: "比价",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                }),
                              (0, q.tZ)(v.View, {
                                children: (0, q.BX)(v.View, {
                                  className: "pop-filter-box ".concat(
                                    l ? "active" : ""
                                  ),
                                  children: [
                                    (0, q.BX)(v.View, {
                                      className: "pop-filter-hd",
                                      children: [
                                        (0, q.tZ)(v.Button, {
                                          className: "btn-cancel",
                                          id: "AKDt",
                                          onClick: this.cancelFlightFilter,
                                          children: "取消",
                                        }),
                                        (0, q.tZ)(v.View, {
                                          className: "tit",
                                          children:
                                            -1 !== te
                                              ? "共" + te + "个航班"
                                              : "筛选航班",
                                        }),
                                        (0, q.tZ)(v.Button, {
                                          className: "btn-submit color-primary",
                                          id: "AKDu",
                                          onClick: this.confirmFlightFilter,
                                          children: "确定",
                                        }),
                                      ],
                                    }),
                                    ae.length > 0 &&
                                      (0, q.tZ)(v.ScrollView, {
                                        className: "pop-filter-select",
                                        scrollY: !0,
                                        children: ae.map(function (t, i) {
                                          return (0,
                                          q.tZ)(v.Block, { children: (0, q.BX)(v.View, { className: "item", children: [(0, q.tZ)(v.Text, { children: t.title }), (0, q.tZ)(v.Text, { className: "icon-del", id: "AKDv", onClick: e.removeFilterKey.bind(e, i), children: "×" })] }) }, "index");
                                        }),
                                      }),
                                    (0, q.BX)(v.View, {
                                      className: "pop-filter-type ".concat(
                                        W ? "ty" : "zx"
                                      ),
                                      children: [
                                        (0, q.BX)(v.View, {
                                          className: "item ".concat(
                                            ne ? "active" : ""
                                          ),
                                          id: "AKDw",
                                          onClick: this.handleSinglesFilter,
                                          children: [
                                            "只看直飞(含经停)",
                                            (0, q.tZ)(v.Text, {
                                              className: "iconfont ".concat(
                                                ne
                                                  ? "ifont-checkboxed"
                                                  : "ifont-checkbox"
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, q.BX)(v.View, {
                                          className: "item ".concat(
                                            re ? "active" : ""
                                          ),
                                          id: "AKDx",
                                          onClick: this.handleShareFlightFilter,
                                          children: [
                                            "隐藏共享航班",
                                            (0, q.tZ)(v.Text, {
                                              className: "iconfont ".concat(
                                                re
                                                  ? "ifont-checkboxed"
                                                  : "ifont-checkbox"
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, q.BX)(v.View, {
                                      className:
                                        "pop-filter-bd " + (W ? "ty" : "zx"),
                                      children: [
                                        (0, q.tZ)(v.View, {
                                          className: "lbox",
                                          children: se.map(function (t, i) {
                                            return (0,
                                            q.tZ)(v.Block, { children: (0, q.BX)(v.View, { className: "item " + (oe === i ? "cur" : "") + " " + (se[i].active ? "active" : ""), id: "AKDy", onClick: e.selectKey.bind(e, i), children: [t.name, se[i].active && (0, q.tZ)(v.Icon, { className: "i-dot bgcolor-primary" })] }) }, "index");
                                          }),
                                        }),
                                        (0, q.tZ)(v.View, {
                                          className: "rbox",
                                          children: se[oe].list.map(function (
                                            t,
                                            i
                                          ) {
                                            return (0, q.tZ)(
                                              v.Block,
                                              {
                                                children: (0, q.BX)(v.View, {
                                                  className:
                                                    "item " +
                                                    (t.selected
                                                      ? "color-primary"
                                                      : "") +
                                                    " " +
                                                    (t.disabled
                                                      ? "disabled"
                                                      : ""),
                                                  id: "AKDz",
                                                  onClick:
                                                    e.filterSelected.bind(
                                                      e,
                                                      i,
                                                      t.disabled
                                                    ),
                                                  children: [
                                                    t.icon &&
                                                      (0, q.tZ)(v.Image, {
                                                        className:
                                                          "airline_logo",
                                                        src: t.icon,
                                                      }),
                                                    t.title,
                                                    (0, q.tZ)(v.Text, {
                                                      className:
                                                        (t.selected
                                                          ? "ifont-checkboxed"
                                                          : "ifont-checkbox") +
                                                        "  iconfont",
                                                    }),
                                                  ],
                                                }),
                                              },
                                              "index"
                                            );
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, q.tZ)(v.View, {
                                children:
                                  Z.default.isWechat &&
                                  !h &&
                                  b &&
                                  !(T && 1 === T.sw && !y) &&
                                  !!x &&
                                  !_ &&
                                  (0, q.tZ)(E.Z, {
                                    params: me,
                                    couponFixedShow: function () {
                                      e.toggleCouponPopupVisible(!0);
                                    },
                                  }),
                              }),
                              (0, q.tZ)(v.View, {
                                children:
                                  V.source &&
                                  (0, q.tZ)(R.Z, {
                                    params: V,
                                    getCouponInfomation:
                                      this.getCouponInformation,
                                    outerShow: _ && !I,
                                    handleCouponClose: function () {
                                      e.toggleCouponPopupVisible(!1);
                                    },
                                    handleReceive: function () {
                                      e.getFlightList();
                                    },
                                  }),
                              }),
                              (0, q.tZ)(v.View, {
                                children:
                                  !i &&
                                  P.ZP.isLogin &&
                                  (0, q.tZ)(O.Z, {
                                    ubtTrace: this.ubtTrace,
                                    pageId: this.pageId,
                                  }),
                              }),
                              (0, q.tZ)(G.Z, {
                                show: le,
                                bannerDrawInfo: ce,
                                onClose: this.onAdvantageDraw,
                              }),
                              (0, q.tZ)(v.View, {
                                className: "flt-new-user-pop",
                                onClick: this.handleImagePopClick,
                                children:
                                  ue &&
                                  (0, q.tZ)(A.ZtActivityPop, {
                                    show: !!ue,
                                    onClose: this.handleImagePopupClose,
                                    onWrapClose: this.handleImagePopupClose,
                                    className:
                                      "train-flight-list-popup ".concat(
                                        ue.popCode
                                      ),
                                    children: (0, q.tZ)(v.Image, {
                                      src: ue.backGroundImg,
                                      mode: "widthFix",
                                      className: "popup-img",
                                    }),
                                  }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(p.default.PureComponent))
              ) || a,
            $ = i(50185),
            Q = i(76977),
            ee = i(43796),
            te = (function (e) {
              (0, m.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var a;
                return (
                  (0, l.Z)(this, i),
                  ((a = t.call(this, e)).state = {
                    isTieyou: Z.default.isTieyou,
                    bus: null,
                  }),
                  a
                );
              }
              return (
                (0, u.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.setState({
                        bus: this.doFilterBus(this.props.busInfo),
                      });
                    },
                  },
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      this.setState({ bus: this.doFilterBus(e.busInfo) });
                    },
                  },
                  {
                    key: "doFilterBus",
                    value: function (e) {
                      var t = e.product || {},
                        i = t.fromStation,
                        a = !1;
                      t.fromStations &&
                        t.fromStations.length &&
                        (t.fromStations.length > 2
                          ? ((i =
                              t.fromStations
                                .map(function (e) {
                                  return e.stationName;
                                })
                                .slice(0, 2)
                                .join("、") +
                              "等".concat(t.fromStations.length, "站")),
                            (a = !0))
                          : (i = t.fromStations
                              .map(function (e) {
                                return e.stationName;
                              })
                              .join("、")));
                      var n = !1,
                        r = t.toStationShow || t.toStation;
                      return (
                        t.toStations &&
                          t.toStations.length &&
                          (t.toStations.length > 2
                            ? ((r =
                                t.toStations
                                  .map(function (e) {
                                    return e.stationName;
                                  })
                                  .slice(0, 2)
                                  .join("、") +
                                "等".concat(t.toStations.length, "站")),
                              (n = !0))
                            : (r = t.toStations
                                .map(function (e) {
                                  return e.stationName;
                                })
                                .join("、"))),
                        (0, o.Z)(
                          (0, o.Z)({}, t),
                          {},
                          {
                            fromStationText: i,
                            showFromStationMore: a,
                            toStationText: r,
                            showToStationMore: n,
                          }
                        )
                      );
                    },
                  },
                  {
                    key: "onClickBusTag",
                    value: function (e) {
                      S().showModal({
                        title: e.shiftType[0].title,
                        content: e.shiftType[0].desc,
                        showCancel: !1,
                      });
                    },
                  },
                  {
                    key: "onClickBusTimeDesc",
                    value: function () {
                      S().showToast({
                        title: "耗时仅供参考，受实时天气和路况影响",
                        icon: "none",
                        duration: 1500,
                      });
                    },
                  },
                  {
                    key: "onClickBus",
                    value: function () {
                      this.props.onSelectItem();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.state,
                        t = e.isTieyou,
                        i = e.bus;
                      return i
                        ? (0, q.tZ)(v.View, {
                            className: "train-bus-list-item",
                            children: (0, q.BX)(v.View, {
                              className:
                                "list-item " +
                                (t ? "ty " : "zx ") +
                                (i.bookInfo && 0 === i.bookInfo.bookable
                                  ? "none "
                                  : " "),
                              id: "AKDS",
                              onClick: this.onClickBus.bind(this),
                              children: [
                                i.shiftType &&
                                  i.shiftType[0] &&
                                  (0, q.BX)(v.Block, {
                                    children: [
                                      !i.shiftType[0].content &&
                                        (0, q.tZ)(v.View, {
                                          className: "tag",
                                          children: (0, q.tZ)(v.Text, {
                                            class: "text",
                                            children: i.shiftType[0].title,
                                          }),
                                        }),
                                      !!i.shiftType[0].content &&
                                        (0, q.BX)(v.View, {
                                          className: "tag",
                                          id: "AKDT",
                                          onClick: this.onClickBusTag.bind(
                                            this,
                                            i
                                          ),
                                          children: [
                                            (0, q.tZ)(v.Text, {
                                              class: "text more",
                                              children: i.shiftType[0].title,
                                            }),
                                            (0, q.tZ)(v.Text, {
                                              className:
                                                "ifont-detail iconfont",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                (0, q.BX)(v.View, {
                                  className: "content",
                                  children: [
                                    (0, q.BX)(v.View, {
                                      className: "left",
                                      children: [
                                        (0, q.BX)(v.View, {
                                          className: "time-info",
                                          children: [
                                            3 === i.fromTimeType
                                              ? (0, q.BX)(v.View, {
                                                  className: "time-start",
                                                  children: [
                                                    (0, q.tZ)(v.View, {
                                                      className: "time-text",
                                                      children: "任选时间",
                                                    }),
                                                    (0, q.BX)(v.View, {
                                                      className: "time-min",
                                                      children: [
                                                        i.fromTime,
                                                        " - ",
                                                        i.lastFromTime,
                                                      ],
                                                    }),
                                                  ],
                                                })
                                              : 2 === i.fromTimeType
                                              ? (0, q.BX)(v.View, {
                                                  className: "time-start",
                                                  children: [
                                                    !!i.fromTime &&
                                                      (0, q.BX)(v.View, {
                                                        className: "time-range",
                                                        children: [
                                                          (0, q.tZ)(v.View, {
                                                            className: "text",
                                                            children: "首",
                                                          }),
                                                          (0, q.tZ)(v.View, {
                                                            className: "time",
                                                            children:
                                                              i.fromTime,
                                                          }),
                                                        ],
                                                      }),
                                                    !!i.lastFromTime &&
                                                      (0, q.BX)(v.View, {
                                                        className: "time-range",
                                                        children: [
                                                          (0, q.tZ)(v.View, {
                                                            className: "text",
                                                            children: "末",
                                                          }),
                                                          (0, q.tZ)(v.View, {
                                                            className: "time",
                                                            children:
                                                              i.lastFromTime,
                                                          }),
                                                        ],
                                                      }),
                                                  ],
                                                })
                                              : (0, q.tZ)(v.View, {
                                                  className: "time-start",
                                                  children: i.fromTime,
                                                }),
                                            (0, q.tZ)(v.View, {
                                              className: "time-desc",
                                              id: "AKDU",
                                              onClick:
                                                this.onClickBusTimeDesc.bind(
                                                  this,
                                                  i
                                                ),
                                              children: i.costTimeDesc,
                                            }),
                                          ],
                                        }),
                                        (0, q.tZ)(v.View, {
                                          className: "line",
                                        }),
                                        (0, q.BX)(v.View, {
                                          className: "station-info",
                                          children: [
                                            (0, q.BX)(v.View, {
                                              className: "station",
                                              children: [
                                                (0, q.tZ)(v.View, {
                                                  className: "station-start",
                                                  children: i.fromStationText,
                                                }),
                                                !i.showFromStationMore &&
                                                  i.isNearest &&
                                                  !(
                                                    i.bookInfo &&
                                                    0 === i.bookInfo.bookable
                                                  ) &&
                                                  (0, q.tZ)(v.View, {
                                                    className: "near",
                                                    children: (0, q.tZ)(
                                                      v.View,
                                                      { className: "near-icon" }
                                                    ),
                                                  }),
                                                i.showFromStationMore &&
                                                  (0, q.tZ)(v.View, {
                                                    className: "station-arraw",
                                                    children: (0, q.tZ)(
                                                      v.Text,
                                                      {
                                                        className:
                                                          "ifont-arr iconfont",
                                                      }
                                                    ),
                                                  }),
                                              ],
                                            }),
                                            (0, q.BX)(v.View, {
                                              className: "station",
                                              children: [
                                                (0, q.tZ)(v.View, {
                                                  className: "station-end",
                                                  children: i.toStationText,
                                                }),
                                                i.showToStationMore &&
                                                  (0, q.tZ)(v.View, {
                                                    className: "station-arraw",
                                                    children: (0, q.tZ)(
                                                      v.Text,
                                                      {
                                                        className:
                                                          "ifont-arr iconfont",
                                                      }
                                                    ),
                                                  }),
                                              ],
                                            }),
                                            (0, q.tZ)(v.View, {
                                              className: "bus-desc",
                                              children: i.busType,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, q.BX)(v.View, {
                                      className: "right",
                                      children: [
                                        !!i.showPrice &&
                                          (0, q.tZ)(v.View, {
                                            className: "price",
                                            children: i.showPrice,
                                          }),
                                        i.bookInfo &&
                                          0 !== i.bookInfo.bookable &&
                                          !!i.priceSuffix &&
                                          (0, q.tZ)(v.View, {
                                            className: "coupon-tag",
                                            children: i.priceSuffix,
                                          }),
                                        i.bookInfo &&
                                          0 !== i.bookInfo.bookable &&
                                          !!i.remainTicketDesc &&
                                          (0, q.tZ)(v.View, {
                                            className: "count",
                                            children: i.remainTicketDesc,
                                          }),
                                        i.bookInfo &&
                                          0 !== i.bookInfo.bookable &&
                                          i.isPresell &&
                                          (0, q.tZ)(v.View, {
                                            className: "book-pre",
                                            children: "预约购票",
                                          }),
                                        i.bookInfo &&
                                          0 === i.bookInfo.bookable &&
                                          !!i.bookInfo.message &&
                                          (0, q.tZ)(v.View, {
                                            className: "reason",
                                            children: i.bookInfo.message,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          })
                        : (0, q.tZ)(v.View, {});
                    },
                  },
                ]),
                i
              );
            })(p.default.Component),
            ie = (function (e) {
              (0, m.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var a;
                return (
                  (0, l.Z)(this, i),
                  ((a = t.call(this, e)).state = {
                    isTieyou: Z.default.isTieyou,
                    filter: null,
                    show: !1,
                    count: 0,
                    selectedKey: "",
                    selectedAll: !0,
                    selectedItems: [],
                    selectedFilter: [],
                    confirmVisible: !1,
                  }),
                  a
                );
              }
              return (
                (0, u.Z)(i, [
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      !this.props.visible &&
                        e.visible &&
                        (console.log("nextProps.selecteds", e.selecteds),
                        this.computedData(e.filterInfo, e.selecteds)),
                        this.setState({ show: e.visible, count: e.busCount });
                    },
                  },
                  {
                    key: "computedData",
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        i = [],
                        a = [];
                      e.fromStationFilters &&
                        e.fromStationFilters.length &&
                        i.push({
                          title: "出发车站",
                          key: "fromStation",
                          subItems: e.fromStationFilters.map(function (e) {
                            var i = (t.fromStationList || []).some(function (
                                t
                              ) {
                                return e.stationName === t;
                              }),
                              n = {
                                key: "fromStation",
                                value: e.stationName,
                                show: e.stationName,
                                isSelected: i,
                              };
                            return i && a.push(n), n;
                          }),
                        }),
                        e.toStationFilters &&
                          e.toStationFilters.length &&
                          i.push({
                            title: "到达车站",
                            key: "toStation",
                            subItems: e.toStationFilters.map(function (e) {
                              var i = (t.toStationList || []).some(function (
                                  t
                                ) {
                                  return e.stationName === t;
                                }),
                                n = {
                                  key: "toStation",
                                  value: e.stationName,
                                  show: e.stationName,
                                  isSelected: i,
                                };
                              return i && a.push(n), n;
                            }),
                          }),
                        e.fromTimeList &&
                          e.fromTimeList.length &&
                          i.push({
                            title: "出发时间",
                            key: "fromTime",
                            subItems: e.fromTimeList.map(function (e, i) {
                              var n = (t.fromTimeList || []).some(function (e) {
                                  return i + 1 === e;
                                }),
                                r = {
                                  key: "fromTime",
                                  value: i + 1,
                                  show: e,
                                  isSelected: n,
                                };
                              return n && a.push(r), r;
                            }),
                          }),
                        e.upgradeServiceList &&
                          e.upgradeServiceList.length &&
                          i.push({
                            title: "升级服务",
                            key: "upgradeService",
                            subItems: e.upgradeServiceList.map(function (e) {
                              var i = (t.upgradeServiceList || []).some(
                                  function (t) {
                                    return e.code === t;
                                  }
                                ),
                                n = {
                                  key: "upgradeService",
                                  value: e.code,
                                  show: e.desc,
                                  isSelected: i,
                                };
                              return i && a.push(n), n;
                            }),
                          }),
                        this.setState({
                          filter: i,
                          selectedKey: i[0].key,
                          selectedItems: i[0].subItems,
                          selectedAll: i[0].subItems.every(function (e) {
                            return !e.isSelected;
                          }),
                          selectedFilter: a,
                          confirmVisible: !1,
                        });
                    },
                  },
                  {
                    key: "onClickTab",
                    value: function (e) {
                      var t = this.state.filter.find(function (t) {
                        return t.key === e.key;
                      }).subItems;
                      this.setState({
                        selectedKey: e.key,
                        selectedItems: t,
                        selectedAll: t.every(function (e) {
                          return !e.isSelected;
                        }),
                      });
                    },
                  },
                  {
                    key: "onClickItem",
                    value: function (e) {
                      var t = this,
                        i = this.state,
                        a = i.filter,
                        n = i.selectedFilter,
                        r = i.selectedItems,
                        s = -1;
                      a.forEach(function (t) {
                        t.subItems.forEach(function (t) {
                          t.key === e.key &&
                            t.value === e.value &&
                            ((t.isSelected = !t.isSelected),
                            t.isSelected ||
                              (s = n.findIndex(function (t) {
                                return t.key === e.key && t.value === e.value;
                              })));
                        });
                      }),
                        -1 === s ? n.push(e) : n.splice(s, 1),
                        this.setState(
                          {
                            filter: a,
                            selectedFilter: n,
                            selectedAll: r.every(function (e) {
                              return !e.isSelected;
                            }),
                            confirmVisible: !0,
                          },
                          function () {
                            t.doComputedCount();
                          }
                        );
                    },
                  },
                  {
                    key: "onClickClearItem",
                    value: function () {
                      var e = this,
                        t = this.state,
                        i = t.filter,
                        a = t.selectedAll,
                        n = t.selectedItems,
                        r = t.selectedFilter,
                        s = t.selectedKey;
                      a ||
                        (i.forEach(function (e) {
                          e.subItems.forEach(function (e) {
                            n.find(function (t) {
                              return e.key === t.key && e.value === t.value;
                            }) && (e.isSelected = !1);
                          });
                        }),
                        this.setState(
                          {
                            filter: i,
                            selectedFilter: r.filter(function (e) {
                              return e.key !== s;
                            }),
                            selectedItems: i.find(function (e) {
                              return e.key === s;
                            }).subItems,
                            selectedAll: !0,
                            confirmVisible: !0,
                          },
                          function () {
                            e.doComputedCount();
                          }
                        ));
                    },
                  },
                  {
                    key: "onClickClear",
                    value: function () {
                      var e = this;
                      if (this.state.selectedFilter.length) {
                        var t = this.state.filter;
                        t.forEach(function (e) {
                          e.subItems.forEach(function (e) {
                            e.isSelected = !1;
                          });
                        }),
                          this.setState(
                            {
                              filter: t,
                              selectedFilter: [],
                              selectedKey: t[0].key,
                              selectedItems: t[0].subItems,
                              selectedAll: !0,
                              confirmVisible: !0,
                            },
                            function () {
                              e.doComputedCount();
                            }
                          );
                      }
                    },
                  },
                  {
                    key: "doComputedCount",
                    value: function () {
                      var e = this.getFilterResult();
                      this.props.onRefreshCount(e);
                    },
                  },
                  {
                    key: "onClickConfirm",
                    value: function () {
                      var e = this.getFilterResult();
                      this.props.onConfirm(e);
                    },
                  },
                  {
                    key: "getFilterResult",
                    value: function () {
                      var e = this.state.selectedFilter,
                        t = {
                          fromStationList: [],
                          toStationList: [],
                          fromTimeList: [],
                          upgradeServiceList: [],
                        };
                      return (
                        e.forEach(function (e) {
                          "fromStation" === e.key &&
                            t.fromStationList.push(e.value),
                            "toStation" === e.key &&
                              t.toStationList.push(e.value),
                            "fromTime" === e.key &&
                              t.fromTimeList.push(e.value),
                            "upgradeService" === e.key &&
                              t.upgradeServiceList.push(e.value);
                        }),
                        t
                      );
                    },
                  },
                  {
                    key: "onClickClose",
                    value: function () {
                      this.props.onClose();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state,
                        i = t.show,
                        a = t.isTieyou,
                        n = t.filter,
                        r = t.count,
                        s = t.selectedFilter,
                        o = t.selectedKey,
                        c = t.selectedItems,
                        l = t.selectedAll,
                        u = t.confirmVisible;
                      return (0, q.tZ)(v.View, {
                        className: "train-bus-filter-modal",
                        children:
                          i &&
                          (0, q.BX)(v.View, {
                            className: (a ? "ty" : "zx") + " filter-modal",
                            children: [
                              (0, q.tZ)(v.View, {
                                className:
                                  "modal-mask " + (i ? "visible" : "hidden"),
                                id: "AKDL",
                                onClick: this.onClickClose.bind(this),
                              }),
                              (0, q.BX)(v.View, {
                                className:
                                  "modal-view " + (i ? "visible" : "hidden"),
                                children: [
                                  (0, q.BX)(v.View, {
                                    className: "modal-bar",
                                    children: [
                                      (0, q.tZ)(v.View, {
                                        className: "left-btn",
                                        id: "AKDM",
                                        onClick: this.onClickClear.bind(this),
                                        children: "重置",
                                      }),
                                      (0, q.BX)(v.View, {
                                        className: "title",
                                        children: ["共", r, "个班次"],
                                      }),
                                      u && r
                                        ? (0, q.tZ)(v.View, {
                                            className:
                                              "right-btn " + (u ? "cur" : ""),
                                            id: "AKDN",
                                            onClick:
                                              this.onClickConfirm.bind(this),
                                            children: "确定",
                                          })
                                        : (0, q.tZ)(v.View, {
                                            className: "right-btn",
                                            children: "确定",
                                          }),
                                    ],
                                  }),
                                  s &&
                                    s[0] &&
                                    (0, q.tZ)(v.View, {
                                      className: "select-content",
                                      children: s.map(function (t) {
                                        return (0,
                                        q.BX)(v.View, { className: "item", children: [(0, q.tZ)(v.Text, { className: "text", children: t.show }), (0, q.tZ)(v.Text, { class: "icon-del", id: "AKDO", onClick: e.onClickItem.bind(e, t), children: "×" })] }, "index");
                                      }),
                                    }),
                                  (0, q.BX)(v.View, {
                                    className: "list",
                                    children: [
                                      (0, q.tZ)(v.View, {
                                        className: "tab",
                                        children: n.map(function (t) {
                                          return (0,
                                          q.tZ)(v.View, { className: "item " + (t.key === o ? "cur" : ""), id: "AKDP", onClick: e.onClickTab.bind(e, t), children: t.title }, "index");
                                        }),
                                      }),
                                      (0, q.BX)(v.View, {
                                        className: "info",
                                        children: [
                                          (0, q.BX)(v.View, {
                                            className:
                                              "item " + (l ? "cur" : ""),
                                            id: "AKDQ",
                                            onClick:
                                              this.onClickClearItem.bind(this),
                                            children: [
                                              (0, q.tZ)(v.View, {
                                                className: "desc",
                                                children: "不限",
                                              }),
                                              (0, q.tZ)(v.View, {
                                                className: "icon-check",
                                              }),
                                            ],
                                          }),
                                          c.map(function (t) {
                                            return (0,
                                            q.BX)(v.View, { className: "item " + (t.isSelected ? "cur" : ""), id: "AKDR", onClick: e.onClickItem.bind(e, t), children: [(0, q.tZ)(v.View, { className: "desc", children: t.show }), (0, q.tZ)(v.View, { className: "icon-check" })] }, "index");
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      });
                    },
                  },
                ]),
                i
              );
            })(p.default.Component),
            ae = (function (e) {
              (0, m.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var a;
                return (
                  (0, l.Z)(this, i),
                  ((a = t.call(this, e)).state = {
                    show: !1,
                    fromStations: [],
                    toStations: [],
                    price: "",
                  }),
                  a
                );
              }
              return (
                (0, u.Z)(i, [
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      !this.props.visible &&
                        e.visible &&
                        this.computedData(e.info),
                        this.setState({ show: e.visible });
                    },
                  },
                  {
                    key: "computedData",
                    value: function (e) {
                      this.setState({
                        fromStations: e.fromStations
                          ? e.fromStations.map(function (e) {
                              return (0,
                              o.Z)((0, o.Z)({}, e), {}, { isSelected: !1 });
                            })
                          : {},
                        toStations: e.toStations
                          ? e.toStations.map(function (e) {
                              return (0,
                              o.Z)((0, o.Z)({}, e), {}, { isSelected: !1 });
                            })
                          : [],
                        price: e.price,
                      });
                    },
                  },
                  {
                    key: "onClickFromStation",
                    value: function (e) {
                      if (!e.isSelected) {
                        var t = this.state.fromStations;
                        this.setState({
                          fromStations: t.map(function (t) {
                            return (0,
                            o.Z)((0, o.Z)({}, t), {}, { isSelected: e.stationName === t.stationName });
                          }),
                        });
                      }
                    },
                  },
                  {
                    key: "onClickToStation",
                    value: function (e) {
                      if (!e.isSelected) {
                        var t = this.state.toStations;
                        this.setState({
                          toStations: t.map(function (t) {
                            return (0,
                            o.Z)((0, o.Z)({}, t), {}, { isSelected: e.stationName === t.stationName });
                          }),
                        });
                      }
                    },
                  },
                  {
                    key: "onClickClose",
                    value: function () {
                      this.props.onClose();
                    },
                  },
                  {
                    key: "onClickConFirm",
                    value: function () {
                      var e = this.state,
                        t = e.fromStations,
                        i = e.toStations,
                        a = t.find(function (e) {
                          return e.isSelected;
                        }),
                        n = i.find(function (e) {
                          return e.isSelected;
                        });
                      (t.length && !a) ||
                        (i.length && !n) ||
                        this.props.onConfirm(
                          a ? a.stationName : "",
                          n ? n.stationName : ""
                        );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state,
                        i = t.show,
                        a = t.fromStations,
                        n = t.toStations,
                        r = t.price;
                      return (0, q.tZ)(v.View, {
                        className: "train-bus-station-modal",
                        children:
                          i &&
                          (0, q.BX)(v.View, {
                            className: "station-modal",
                            children: [
                              (0, q.tZ)(v.View, {
                                className:
                                  "modal-mask " + (i ? "visible" : "hidden"),
                                id: "AKDV",
                                onClick: this.onClickClose.bind(this),
                              }),
                              (0, q.BX)(v.View, {
                                className:
                                  "modal-view " + (i ? "visible" : "hidden"),
                                children: [
                                  (0, q.BX)(v.View, {
                                    className: "modal-bar",
                                    children: [
                                      (0, q.tZ)(v.View, {
                                        className: "left-btn",
                                        id: "AKDW",
                                        onClick: this.onClickClose.bind(this),
                                        children: "取消",
                                      }),
                                      (0, q.tZ)(v.View, {
                                        className: "title",
                                        children: "请选择站点",
                                      }),
                                      (0, q.tZ)(v.View, {
                                        className: "right-btn",
                                      }),
                                    ],
                                  }),
                                  (0, q.BX)(v.View, {
                                    className: "modal-content",
                                    children: [
                                      (0, q.BX)(v.View, {
                                        className: "content",
                                        children: [
                                          a &&
                                            a[0] &&
                                            (0, q.BX)(v.View, {
                                              className: "stations",
                                              children: [
                                                (0, q.tZ)(v.View, {
                                                  className: "title",
                                                  children: "出发站",
                                                }),
                                                (0, q.tZ)(v.View, {
                                                  className: "list",
                                                  children: a.map(function (t) {
                                                    return (0,
                                                    q.tZ)(v.View, { className: "item " + (t.isSelected ? "cur" : ""), id: "AKDX", onClick: e.onClickFromStation.bind(e, t), children: t.stationName }, "index");
                                                  }),
                                                }),
                                              ],
                                            }),
                                          n &&
                                            n[0] &&
                                            (0, q.BX)(v.View, {
                                              className: "stations",
                                              children: [
                                                (0, q.tZ)(v.View, {
                                                  className: "title",
                                                  children: "到达站",
                                                }),
                                                (0, q.tZ)(v.View, {
                                                  className: "list",
                                                  children: n.map(function (t) {
                                                    return (0,
                                                    q.tZ)(v.View, { className: "item " + (t.isSelected ? "cur" : ""), id: "AKDY", onClick: e.onClickToStation.bind(e, t), children: t.stationName }, "index");
                                                  }),
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, q.BX)(v.View, {
                                        className: "bottom",
                                        children: [
                                          (0, q.tZ)(v.View, {
                                            className: "price",
                                            children: r,
                                          }),
                                          (0, q.tZ)(v.View, {
                                            className: "btn",
                                            id: "AKDZ",
                                            onClick:
                                              this.onClickConFirm.bind(this),
                                            children: "确定",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      });
                    },
                  },
                ]),
                i
              );
            })(p.default.Component),
            ne = i(17377),
            re = (0, ne.ZP)({
              serviceCode: "19833",
              path: "getProductList",
              bu: "bus",
            }),
            se = (0, ne.ZP)({
              serviceCode: "19833",
              path: "busTrainCompare",
              bu: "bus",
            }),
            oe =
              (0, T.h)(!0)(
                (n = (function (e) {
                  (0, m.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var a;
                    return (
                      (0, l.Z)(this, i),
                      ((a = t.call(this, e)).state = {
                        isTieyou: Z.default.isTieyou,
                        busList: [],
                        isBusTabLoading: !1,
                        isIPhoneX: w.Z.isIPhoneX(),
                        busTrainCompareInfo: null,
                        isCompareBannerShow: !1,
                        intercityBusBanner: null,
                        showUnableBusList: null,
                        unableBusList: [],
                        filterCount: 0,
                        filterByTime: !1,
                        filterModalVisible: !1,
                        selectStationModalVisible: !1,
                        busCount: 0,
                        filter: null,
                        filterParams: {},
                        selectStationModalInfo: null,
                        latitude: I.Bc.latitude || "",
                        longitude: I.Bc.longitude || "",
                        busParams: {},
                        selectedBus: {},
                        loadListNum: 20,
                        commonNoticeModal: null,
                      }),
                      a
                    );
                  }
                  return (
                    (0, u.Z)(i, [
                      {
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function (e) {
                          this.props.selectDate !== e.selectDate &&
                            this.setState({ loadListNum: 20 });
                        },
                      },
                      {
                        key: "componentDidUpdate",
                        value: function (e) {
                          console.log("汽车列表组件update"),
                            (this.props.hidden === e.hidden &&
                              this.props.selectDate === e.selectDate) ||
                              this.props.hidden ||
                              !this.props.selectDate ||
                              this.getInitData(
                                this.props.selectDate !== e.selectDate ||
                                  !this.state.busTrainCompareInfo
                              );
                        },
                      },
                      {
                        key: "getInitData",
                        value: function (e) {
                          this.getBusList(), e && this.getBusTrainCompareInfo();
                        },
                      },
                      {
                        key: "getBusList",
                        value: function () {
                          var e = this;
                          this.setState({ isBusTabLoading: !0 });
                          var t = this.props,
                            i = t.busDepartureCityName,
                            a = t.busArrivalCityName,
                            n = t.selectDate,
                            r = this.state,
                            s = r.latitude,
                            c = r.longitude,
                            l = r.busParams,
                            u = { fromCity: i, toCity: a, fromDate: n },
                            d = (0, o.Z)(
                              (0, o.Z)({}, l),
                              {},
                              { latitude: s, longitude: c },
                              u
                            );
                          re(d)
                            .then(function (t) {
                              1 === t.code
                                ? e.setState({
                                    isBusTabLoading: !1,
                                    intercityBusBanner: t.data.pointBusTab,
                                    busList: e.filterBusData(
                                      t.data.busProducts || []
                                    ),
                                    unableBusList: e.filterUnableBusData(
                                      t.data.busProducts || []
                                    ),
                                    filter: t.data.filter,
                                  })
                                : e.setState({ isBusTabLoading: !1 });
                            })
                            .catch(function (t) {
                              console.log(t),
                                e.setState({
                                  isBusTabLoading: !1,
                                  intercityBusBanner: null,
                                  busList: [],
                                  unableBusList: [],
                                  filter: null,
                                });
                            }),
                            this.setState({ busParams: d });
                        },
                      },
                      {
                        key: "filterBusData",
                        value: function (e) {
                          var t = e
                              .filter(function (e) {
                                return !(
                                  e.product.bookInfo &&
                                  0 === e.product.bookInfo.bookable
                                );
                              })
                              .sort(this.busSortByTime.bind(this)),
                            i = e
                              .filter(function (e) {
                                return (
                                  e.product.bookInfo &&
                                  0 === e.product.bookInfo.bookable
                                );
                              })
                              .sort(this.busSortByTime.bind(this));
                          return i[0] ? t.concat([i[0]]) : t;
                        },
                      },
                      {
                        key: "filterUnableBusData",
                        value: function (e) {
                          var t = e
                            .filter(function (e) {
                              return (
                                e.product.bookInfo &&
                                0 === e.product.bookInfo.bookable
                              );
                            })
                            .sort(this.busSortByTime.bind(this));
                          return t.length > 1 ? t.slice(1, t.length) : [];
                        },
                      },
                      {
                        key: "busSortByTime",
                        value: function (e, t) {
                          var i = this.state.filterByTime,
                            a = this.props.selectDate,
                            n = new Date(
                              a.replace(/-/g, "/") +
                                " " +
                                e.product.fromTime +
                                ":00"
                            ).getTime(),
                            r = new Date(
                              a.replace(/-/g, "/") +
                                " " +
                                t.product.fromTime +
                                ":00"
                            ).getTime();
                          return i ? r - n : n - r;
                        },
                      },
                      {
                        key: "filterStr",
                        value: function (e) {
                          return (e = (e = (e = (e = (e = (e = (e = (e = (e +=
                            "").replace(/%/g, "%25")).replace(
                            /\+/g,
                            "%2B"
                          )).replace(/ /g, "%20")).replace(
                            /\//g,
                            "%2F"
                          )).replace(/\?/g, "%3F")).replace(
                            /&/g,
                            "%26"
                          )).replace(/=/g, "%3D")).replace(/#/g, "%23"));
                        },
                      },
                      {
                        key: "formateObjToParamStr",
                        value: function (e) {
                          var t = [];
                          for (var i in e) {
                            var a = this.filterStr(e[i]);
                            t.push("".concat(i, "=").concat(a));
                          }
                          return t.join("&");
                        },
                      },
                      {
                        key: "getBusTrainCompareInfo",
                        value: function () {
                          var e = this,
                            t = this.props,
                            i = t.busDepartureCityName,
                            a = t.busArrivalCityName,
                            n = t.selectDate;
                          se({ fromCity: i, toCity: a, fromDate: n })
                            .then(function (t) {
                              1 === t.code &&
                                e.setState({
                                  isCompareBannerShow: !0,
                                  busTrainCompareInfo: t.data,
                                }),
                                t.data &&
                                  "性价比指数" === t.data.bus[0].title &&
                                  e.setState({ isCompareBannerShow: !1 });
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                        },
                      },
                      {
                        key: "onClickCompareBanner",
                        value: function () {
                          this.setState({ isCompareBannerShow: !1 });
                        },
                      },
                      {
                        key: "onClickIntercityBanner",
                        value: function () {
                          var e = this.props,
                            t = {
                              tabIndex: 1,
                              fromCity: e.busDepartureCityName,
                              toCity: e.busArrivalCityName,
                              date: e.selectDate,
                            };
                          this.navigateTo({
                            url:
                              "/pages/bus/list/list?" +
                              this.formateObjToParamStr(t),
                          });
                        },
                      },
                      {
                        key: "onClickTimeChange",
                        value: function (e, t) {
                          var i = this,
                            a = e.detail.value;
                          parseInt(a.replace(/:/g, "")) <
                            parseInt(t.product.fromTime.replace(/:/g, "")) ||
                            this.setState(
                              {
                                selectedBus: (0, o.Z)(
                                  (0, o.Z)({}, t),
                                  {},
                                  {
                                    fromStation: t.product.fromStation,
                                    toStation: t.product.toStation,
                                    fromTime: a,
                                  }
                                ),
                              },
                              function () {
                                i.goToBook();
                              }
                            );
                        },
                      },
                      {
                        key: "onClickBusItem",
                        value: function (e) {
                          var t = this;
                          console.log("onClickBusItem", e);
                          var i = e.product;
                          (i.bookInfo && 0 === i.bookInfo.bookable) ||
                            this.setState(
                              {
                                selectedBus: (0, o.Z)(
                                  (0, o.Z)({}, e),
                                  {},
                                  {
                                    fromStation: e.product.fromStation,
                                    toStation: e.product.toStation,
                                    fromTime: e.product.fromTime,
                                  }
                                ),
                              },
                              function () {
                                i.fromStations.length > 1 ||
                                i.toStations.length > 1
                                  ? t.checkBusStationOptions()
                                  : t.goToBook();
                              }
                            );
                        },
                      },
                      {
                        key: "checkBusStationOptions",
                        value: function () {
                          var e = this.state.selectedBus;
                          this.setState({
                            selectStationModalVisible: !0,
                            selectStationModalInfo: {
                              fromStations: e.product.fromStations,
                              toStations: e.product.toStations,
                              price: e.product.showPrice,
                            },
                          });
                        },
                      },
                      {
                        key: "onClickShowMoreUnableBus",
                        value: function () {
                          this.setState({ showUnableBusList: !0 });
                        },
                      },
                      {
                        key: "getBusCount",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : [];
                          return e.filter(function (e) {
                            return !(
                              e.product.bookInfo &&
                              0 === e.product.bookInfo.bookable
                            );
                          }).length;
                        },
                      },
                      {
                        key: "onRefreshCount",
                        value: function (e) {
                          var t = this,
                            i = this.state.busParams,
                            a = (0, o.Z)(
                              (0, o.Z)({}, i),
                              {},
                              {
                                fromStationList: e.fromStationList,
                                toStationList: e.toStationList,
                                fromTimeList: e.fromTimeList,
                                upgradeServiceList: e.upgradeServiceList,
                              }
                            );
                          re(a)
                            .then(function (e) {
                              t.setState({
                                busCount: t.getBusCount(
                                  e.data.busProducts || []
                                ),
                              });
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                        },
                      },
                      {
                        key: "onClickFilterConfirm",
                        value: function (e) {
                          var t =
                              e.fromStationList.length +
                              e.toStationList.length +
                              e.fromTimeList.length +
                              e.upgradeServiceList.length,
                            i = this.state.busParams;
                          this.setState(
                            {
                              filterModalVisible: !1,
                              filterParams: e,
                              filterCount: t,
                              busParams: (0, o.Z)(
                                (0, o.Z)({}, i),
                                {},
                                {
                                  fromStationList: e.fromStationList,
                                  toStationList: e.toStationList,
                                  fromTimeList: e.fromTimeList,
                                  upgradeServiceList: e.upgradeServiceList,
                                }
                              ),
                            },
                            this.getBusList
                          );
                        },
                      },
                      {
                        key: "onClickFilterClose",
                        value: function () {
                          this.setState({ filterModalVisible: !1 });
                        },
                      },
                      {
                        key: "onClickStationModalConfirm",
                        value: function (e, t) {
                          var i = this,
                            a = this.state.selectedBus;
                          this.setState(
                            {
                              selectedBus: (0, o.Z)(
                                (0, o.Z)({}, a),
                                {},
                                {
                                  fromStation: e || a.product.fromStation,
                                  toStation: t || a.product.toStation,
                                }
                              ),
                            },
                            function () {
                              i.goToBook();
                            }
                          );
                        },
                      },
                      {
                        key: "onClickStationModalClose",
                        value: function () {
                          this.setState({ selectStationModalVisible: !1 });
                        },
                      },
                      {
                        key: "onClickShowFilter",
                        value: function () {
                          var e = this.state.busList,
                            t = void 0 === e ? [] : e;
                          this.setState({
                            filterModalVisible: !0,
                            busCount: this.getBusCount(t),
                          });
                        },
                      },
                      {
                        key: "onClickFilterTime",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.filterByTime,
                            a = t.busList;
                          this.setState({ filterByTime: !i }, function () {
                            e.setState({ busList: e.filterBusData(a) });
                          });
                        },
                      },
                      {
                        key: "goToBook",
                        value: function () {
                          var e = this,
                            t = this.state.selectedBus,
                            i = !!P.ZP.isLogin;
                          1 === t.product.businessType
                            ? i
                              ? this.navigateToBookX()
                              : this.doLogin(function () {
                                  e.navigateToBookX();
                                })
                            : i
                            ? this.navigateToTourBookX()
                            : this.doLogin(function () {
                                e.navigateToTourBookX();
                              });
                        },
                      },
                      {
                        key: "navigateToBookX",
                        value: function () {
                          var e = this.state,
                            t = e.selectedBus,
                            i = e.utmSource,
                            a = void 0 === i ? "ctrip_xcx_c--wx--tybus" : i,
                            n = e.busParams,
                            r = t.product,
                            s = {
                              fromCity: r.fromCity,
                              toCity: r.toCity,
                              fromStation: t.fromStation,
                              toStation: t.toStation,
                              fromTime: t.fromTime || r.lastFromTime,
                              busNumber: r.busNumber,
                              date: this.props.selectDate,
                              fromDate: this.props.selectDate,
                              isNeedBusInfo: !0,
                              fullPrice: r.showPrice,
                              activityType: 0,
                              utmSource: a,
                              symbol: r.symbol,
                              abTest: [
                                { name: "160818_crm_nwpkg", version: "B" },
                              ],
                              productLine: 1,
                            };
                          console.log("naviParams".concat(s)),
                            this.navigateTo({
                              url:
                                "/pages/bus/newbook/book?" +
                                this.formateObjToParamStr(
                                  (0, o.Z)(
                                    (0, o.Z)({}, s),
                                    {},
                                    {
                                      titleFromCity: n.fromCity,
                                      titleToCity: n.toCity,
                                    }
                                  )
                                ),
                            });
                        },
                      },
                      {
                        key: "doLogin",
                        value: function (e) {
                          var t = this;
                          P.ZP.doLogin()
                            .then(function () {
                              t.setData({ isLogin: !0 }), e && e();
                            })
                            .catch(function () {
                              S().showToast({
                                title: "取消登录",
                                icon: "none",
                                duration: 1500,
                              });
                            });
                        },
                      },
                      {
                        key: "onScrollerLower",
                        value: function () {
                          console.error("scroll to lower"),
                            this.state.loadListNum <=
                              this.state.busList.length &&
                              this.setData({
                                loadListNum:
                                  this.state.loadListNum + 20 <
                                  this.state.busList.length
                                    ? this.state.loadListNum + 20
                                    : this.state.busList.length,
                              });
                        },
                      },
                      {
                        key: "getDOMHeight",
                        value: function (e) {
                          var t = this;
                          return new Promise(function (i) {
                            if (t["".concat(e, "_h")])
                              return i(t["".concat(e, "_h")]);
                            S()
                              .createSelectorQuery()
                              .select("#".concat(e))
                              .boundingClientRect(function (a) {
                                if (a)
                                  return (
                                    (t["".concat(e, "_h")] = a.height),
                                    void i(a.height)
                                  );
                                i(0);
                              })
                              .exec();
                          });
                        },
                      },
                      {
                        key: "onBusScroll",
                        value: function () {
                          var e,
                            t = this;
                          this.observeScrollEnd &&
                            clearTimeout(this.observeScrollEnd) &&
                            (this.observeScrollEnd = null),
                            null === (e = this.$CouponTip) ||
                              void 0 === e ||
                              e.handleKeepModalToSide(),
                            (this.observeScrollEnd = setTimeout(function () {
                              var e;
                              console.log("on scroll end"),
                                null === (e = t.$CouponTip) ||
                                  void 0 === e ||
                                  e.handleResumeModalFromSide(),
                                (t.observeScrollEnd = null);
                            }, 500));
                        },
                      },
                      {
                        key: "navigateToTourBookX",
                        value: function () {
                          var e = this.state,
                            t = e.selectedBus,
                            i = e.utmSource,
                            a = e.busParams,
                            n = t.product,
                            r = {
                              fromCity: n.fromCity,
                              toCity: n.toCity,
                              fromStation: t.fromStation,
                              toStation: t.toStation,
                              fromTime: t.fromTime,
                              busNumber: n.busNumber,
                              date: this.props.selectDate,
                              fromDate: this.props.selectDate,
                              utmSource: i,
                              productLine: 3,
                            };
                          this.navigateTo({
                            url:
                              "/pages/bus/newbook/book?" +
                              this.formateObjToParamStr(
                                (0, o.Z)(
                                  (0, o.Z)({}, r),
                                  {},
                                  {
                                    titleFromCity: a.fromCity,
                                    titleToCity: a.toCity,
                                  }
                                )
                              ),
                          });
                        },
                      },
                      {
                        key: "onNoticeModalVisibleChange",
                        value: function (e) {
                          this.setState({ commonNoticeModal: e });
                        },
                      },
                      {
                        key: "isDtSource",
                        value: function () {
                          var e;
                          return (
                            (null === (e = (0, ee.bL)()) || void 0 === e
                              ? void 0
                              : e.indexOf("zxxcx_ditui_yilabao")) > -1
                          );
                        },
                      },
                      {
                        key: "doBusNewTraceInfo",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 1;
                          this.ubtTrace(
                            1 === t ? "BUS_Bus_C_click" : "BUS_Bus_O_show",
                            (0, o.Z)(
                              {
                                pageId: Z.default.isTieyou
                                  ? "10320660964"
                                  : "10320660960",
                                type: Z.default.jetpack || "zx",
                                utmSource: (0, ee.bL)(),
                              },
                              e
                            )
                          );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isTieyou,
                            a = t.isIPhoneX,
                            n = t.busList,
                            r = t.isBusTabLoading,
                            s = t.busTrainCompareInfo,
                            c = t.isCompareBannerShow,
                            l = t.intercityBusBanner,
                            u = t.showUnableBusList,
                            d = t.unableBusList,
                            m = t.filterCount,
                            h = t.filterByTime,
                            f = t.filterModalVisible,
                            p = t.selectStationModalVisible,
                            g = t.busCount,
                            S = t.filter,
                            T = t.filterParams,
                            w = t.selectStationModalInfo,
                            y = t.loadListNum,
                            N = t.commonNoticeModal,
                            k = this.props,
                            C = k.busDepartureCityName,
                            V = k.busArrivalCityName,
                            _ = k.hidden;
                          return (0, q.BX)(v.View, {
                            style: "display: ".concat(_ ? "none" : "flex"),
                            className: "bus-view",
                            children: [
                              (0, q.BX)(v.View, {
                                className: "bus-scroll-content ".concat(
                                  a ? "iphone-x" : ""
                                ),
                                children: [
                                  !r &&
                                    n[0] &&
                                    (0, q.BX)(v.ScrollView, {
                                      style: { height: "100%" },
                                      scrollY: !0,
                                      onScrollToLower: function () {
                                        e.onScrollerLower();
                                      },
                                      lowerThreshold: 800,
                                      id: "bus_scroller",
                                      onScroll: this.onBusScroll.bind(this),
                                      children: [
                                        (0, q.tZ)($.Z, {
                                          isFromList: !0,
                                          refreshNoticeParams: {
                                            productType: "bus",
                                            toCity: V,
                                            fromCity: C,
                                            fromTime: b()(
                                              this.props.selectDate
                                            ).format("YYYY-MM-DD HH:mm:ss"),
                                          },
                                          onNoticeModalVisibleChange:
                                            this.onNoticeModalVisibleChange,
                                          useOuterModal: !0,
                                        }),
                                        s &&
                                          c &&
                                          (0, q.BX)(v.View, {
                                            className: "compare-banner ".concat(
                                              s.bus.length >= 4 ||
                                                s.train.length >= 4
                                                ? "adapt"
                                                : ""
                                            ),
                                            children: [
                                              (0, q.tZ)(v.View, {
                                                className: "notice-section",
                                                children: (0, q.tZ)(v.Text, {
                                                  className:
                                                    "ifont-closed iconfont",
                                                  id: "AKDG",
                                                  onClick:
                                                    this.onClickCompareBanner,
                                                }),
                                              }),
                                              (0, q.BX)(v.View, {
                                                className: "compare-section",
                                                children: [
                                                  (0, q.tZ)(v.View, {
                                                    className: "bus-compare",
                                                    children: (0, q.tZ)(
                                                      v.View,
                                                      {
                                                        className: "desc",
                                                        children: s.bus.map(
                                                          function (e, t) {
                                                            return t ===
                                                              s.bus.length - 1
                                                              ? (0, q.BX)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "bot",
                                                                    children: [
                                                                      (0, q.tZ)(
                                                                        v.View,
                                                                        {
                                                                          className:
                                                                            "title",
                                                                          children:
                                                                            e.title,
                                                                        }
                                                                      ),
                                                                      Array.from(
                                                                        {
                                                                          length:
                                                                            parseInt(
                                                                              e.content
                                                                            ),
                                                                        },
                                                                        function (
                                                                          e,
                                                                          t
                                                                        ) {
                                                                          return t;
                                                                        }
                                                                      ).map(
                                                                        function () {
                                                                          return (0,
                                                                          q.tZ)(
                                                                            v.Image,
                                                                            {
                                                                              className:
                                                                                "star",
                                                                              src: "https://images3.c-ctrip.com/train/wechat/bus/fivepointedstar.png",
                                                                            }
                                                                          );
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                )
                                                              : (0, q.BX)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "mid",
                                                                    children: [
                                                                      (0, q.tZ)(
                                                                        v.Text,
                                                                        {
                                                                          className:
                                                                            "title",
                                                                          children:
                                                                            e.title,
                                                                        }
                                                                      ),
                                                                      (0, q.BX)(
                                                                        v.Text,
                                                                        {
                                                                          className:
                                                                            "content",
                                                                          children:
                                                                            [
                                                                              " ",
                                                                              e.content,
                                                                            ],
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                );
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, q.tZ)(v.View, {
                                                    className: "train-compare",
                                                    children: (0, q.tZ)(
                                                      v.View,
                                                      {
                                                        className: "desc",
                                                        children: s.train.map(
                                                          function (e, t) {
                                                            return t ===
                                                              s.train.length - 1
                                                              ? (0, q.BX)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "bot",
                                                                    children: [
                                                                      (0, q.tZ)(
                                                                        v.View,
                                                                        {
                                                                          className:
                                                                            "title",
                                                                          children:
                                                                            e,
                                                                        }
                                                                      ),
                                                                      (0, q.tZ)(
                                                                        v.Image,
                                                                        {
                                                                          className:
                                                                            "star",
                                                                          src: "https://images3.c-ctrip.com/train/wechat/bus/fivepointedstar.png",
                                                                        }
                                                                      ),
                                                                      (0, q.tZ)(
                                                                        v.Image,
                                                                        {
                                                                          className:
                                                                            "star",
                                                                          src: "https://images3.c-ctrip.com/train/wechat/bus/fivepointedstar.png",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                )
                                                              : (0, q.tZ)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "mid",
                                                                    children: e,
                                                                  }
                                                                );
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        l &&
                                          (0, q.BX)(v.View, {
                                            className: "intercity-banner",
                                            id: "AKDH",
                                            onClick:
                                              this.onClickIntercityBanner,
                                            children: [
                                              (0, q.tZ)(v.Image, {
                                                className: "logo",
                                                src: l.icon,
                                              }),
                                              (0, q.BX)(v.View, {
                                                className: "desc",
                                                children: [
                                                  (0, q.BX)(v.View, {
                                                    className: "top-desc",
                                                    children: [
                                                      (0, q.tZ)(v.View, {
                                                        className: "title-desc",
                                                        children: l.title,
                                                      }),
                                                      (0, q.tZ)(v.View, {
                                                        className: "price-desc",
                                                        children: l.priceDesc,
                                                      }),
                                                    ],
                                                  }),
                                                  l.tagList &&
                                                    (0, q.tZ)(v.View, {
                                                      className: "tag-desc",
                                                      children: l.tagList.map(
                                                        function (e) {
                                                          return (0, q.tZ)(
                                                            v.Text,
                                                            {
                                                              className:
                                                                "tag " +
                                                                (i
                                                                  ? "ty"
                                                                  : "zx"),
                                                              children: e,
                                                            }
                                                          );
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                              (0, q.BX)(v.View, {
                                                className: "route",
                                                children: [
                                                  l.fromCity,
                                                  "-",
                                                  l.toCity,
                                                ],
                                              }),
                                            ],
                                          }),
                                        n.slice(0, y).map(function (t) {
                                          return 3 === t.product.fromTimeType
                                            ? (0, q.tZ)(v.Block, {
                                                children: (0, q.tZ)(v.Picker, {
                                                  mode: "time",
                                                  start: t.product.fromTime,
                                                  end: t.product.lastFromTime,
                                                  onChange: function (i) {
                                                    e.onClickTimeChange(i, t);
                                                  },
                                                  children: (0, q.tZ)(v.View, {
                                                    className: "none-click",
                                                    children: (0, q.tZ)(te, {
                                                      busInfo: t,
                                                      onSelectItem:
                                                        function () {},
                                                    }),
                                                  }),
                                                }),
                                              })
                                            : (0, q.tZ)(v.View, {
                                                className: "bus-list-item",
                                                children: (0, q.tZ)(v.View, {
                                                  children: (0, q.tZ)(te, {
                                                    busInfo: t,
                                                    onSelectItem:
                                                      e.onClickBusItem.bind(
                                                        e,
                                                        t
                                                      ),
                                                  }),
                                                }),
                                              });
                                        }),
                                        y >= n.length &&
                                          !u &&
                                          d[0] &&
                                          (0, q.tZ)(v.View, {
                                            className: "unable-cont",
                                            id: "AKDI",
                                            onClick:
                                              this.onClickShowMoreUnableBus,
                                            children: "查看更多",
                                          }),
                                        y < n.length &&
                                          (0, q.tZ)(v.View, {
                                            className: "unable-cont loading",
                                            children: "加载中...",
                                          }),
                                        u &&
                                          d[0] &&
                                          (0, q.tZ)(v.Block, {
                                            children: d.map(function (t) {
                                              return (0,
                                              q.tZ)(v.View, { className: "bus-list-item", children: (0, q.tZ)(te, { busInfo: t, onSelectItem: e.onClickBusItem.bind(e, t) }) }, "index");
                                            }),
                                          }),
                                      ],
                                    }),
                                  !r &&
                                    !n[0] &&
                                    (0, q.BX)(v.View, {
                                      class: "noreslut",
                                      children: [
                                        (0, q.tZ)(v.View, { class: "img" }),
                                        (0, q.BX)(v.View, {
                                          class: "text",
                                          children: [
                                            "对不起， 您搜索的",
                                            (0, q.BX)(v.Text, {
                                              class: "strong",
                                              children: [C, " - ", V],
                                            }),
                                          ],
                                        }),
                                        (0, q.tZ)(v.View, {
                                          class: "text",
                                          children: "未找到班次~",
                                        }),
                                      ],
                                    }),
                                  r &&
                                    (0, q.tZ)(v.View, {
                                      className:
                                        "loading-content bus-view " +
                                        (a ? "iphone-x" : ""),
                                      children: [0, 1, 2, 3, 4, 5, 6].map(
                                        function () {
                                          return (0, q.tZ)(v.View, {
                                            className: "item",
                                            children: (0, q.BX)(v.View, {
                                              className: "content",
                                              children: [
                                                (0, q.BX)(v.View, {
                                                  className: "left",
                                                  children: [
                                                    (0, q.BX)(v.View, {
                                                      className: "time-info",
                                                      children: [
                                                        (0, q.tZ)(v.View, {
                                                          className:
                                                            "time-start",
                                                          children: (0, q.tZ)(
                                                            v.View,
                                                            {
                                                              className: "text",
                                                            }
                                                          ),
                                                        }),
                                                        (0, q.tZ)(v.View, {
                                                          className:
                                                            "time-desc",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, q.tZ)(v.View, {
                                                      className: "line",
                                                    }),
                                                    (0, q.BX)(v.View, {
                                                      className: "station-info",
                                                      children: [
                                                        (0, q.tZ)(v.View, {
                                                          className: "station",
                                                          children: (0, q.tZ)(
                                                            v.View,
                                                            {
                                                              className:
                                                                "station-start",
                                                              children: (0,
                                                              q.tZ)(v.View, {
                                                                className:
                                                                  "text",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                        (0, q.tZ)(v.View, {
                                                          className: "station",
                                                          children: (0, q.tZ)(
                                                            v.View,
                                                            {
                                                              className:
                                                                "station-end",
                                                              children: (0,
                                                              q.tZ)(v.View, {
                                                                className:
                                                                  "text",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                        (0, q.tZ)(v.View, {
                                                          className: "bus-desc",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, q.tZ)(v.View, {
                                                  className: "right",
                                                  children: (0, q.tZ)(v.View, {
                                                    className: "price",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          });
                                        }
                                      ),
                                    }),
                                ],
                              }),
                              (0, q.BX)(v.View, {
                                className: "bus fixed-bottom",
                                children: [
                                  (0, q.BX)(v.View, {
                                    className: "tab",
                                    id: "AKDJ",
                                    onClick: this.onClickShowFilter.bind(this),
                                    children: [
                                      "筛选条件",
                                      !!m &&
                                        (0, q.tZ)(v.View, {
                                          class: "count-tag",
                                          children: m,
                                        }),
                                    ],
                                  }),
                                  (0, q.tZ)(v.View, { className: "line" }),
                                  (0, q.BX)(v.View, {
                                    className: "tab " + (h ? "cur" : ""),
                                    id: "AKDK",
                                    onClick: this.onClickFilterTime.bind(this),
                                    children: [
                                      "出发",
                                      h ? "晚 - 早" : "早 - 晚",
                                    ],
                                  }),
                                ],
                              }),
                              (0, q.tZ)(v.View, {
                                children:
                                  !r &&
                                  (0, q.BX)(v.Block, {
                                    children: [
                                      (0, q.tZ)(ie, {
                                        visible: f,
                                        busCount: g,
                                        filterInfo: S,
                                        selecteds: T,
                                        onRefreshCount:
                                          this.onRefreshCount.bind(this),
                                        onConfirm:
                                          this.onClickFilterConfirm.bind(this),
                                        onClose:
                                          this.onClickFilterClose.bind(this),
                                      }),
                                      (0, q.tZ)(ae, {
                                        visible: p,
                                        info: w,
                                        onConfirm:
                                          this.onClickStationModalConfirm.bind(
                                            this
                                          ),
                                        onClose:
                                          this.onClickStationModalClose.bind(
                                            this
                                          ),
                                      }),
                                    ],
                                  }),
                              }),
                              (0, q.tZ)($.M, (0, o.Z)({}, N || {})),
                              "dt" !== Z.default.jetpack &&
                                !this.isDtSource() &&
                                (0, q.tZ)(Q.Z, {
                                  ref: function (t) {
                                    return (e.$CouponTip = t);
                                  },
                                  doBusTraceInfo:
                                    this.doBusNewTraceInfo.bind(this),
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(p.default.Component))
              ) || n,
            ce = i(74921),
            le = i(90129),
            ue = i(22276),
            de = i(21294),
            me = i(97939),
            he = i(13025),
            fe = i(86977),
            pe = i(84828),
            ge = i(74867),
            Se = i(96158),
            ve = i(22373),
            Te = i(70273),
            Ze = i(28783),
            we = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.isShow,
                i = void 0 !== t && t,
                a = e.onClose,
                n = void 0 === a ? function () {} : a,
                r = e.onStepChange,
                s = void 0 === r ? function () {} : r,
                o = (0, p.useState)(1),
                c = (0, le.Z)(o, 2),
                l = c[0],
                u = c[1],
                d = function () {
                  n(), u(1), D.ZK.setAttr("newTrainlistShareGuideIsShown", !0);
                },
                m = function () {
                  if (l >= 3) return d();
                  u(l + 1), s(l);
                },
                h = !D.ZK.getAttr("newTrainlistShareGuideIsShown"),
                f = function (e) {
                  return 1 === e
                    ? {
                        tip: "https://images3.c-ctrip.com/ztrip/train_zhu/img_v10_list_ccfxyd_01.png",
                        content:
                          "https://images3.c-ctrip.com/ztrip/train_zhu/img_v10_list_ccfxyd_02.png",
                      }
                    : 2 === e
                    ? {
                        tip: "https://images3.c-ctrip.com/ztrip/train_zhu/img_v10_list_ccfxyd_03.png",
                        content:
                          "https://images3.c-ctrip.com/ztrip/train_zhu/img_v10_list_ccfxyd_04.png",
                      }
                    : 3 === e
                    ? {
                        tip: "https://images3.c-ctrip.com/ztrip/train_zhu/img_v10_list_ccfxyd_05.png",
                        content:
                          "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/yjx@3x.png",
                      }
                    : void 0;
                };
              return h || i
                ? (0, q.BX)(v.View, {
                    className: "train-list-share-guide ".concat(
                      i ? "show" : "hide"
                    ),
                    children: [
                      (0, q.tZ)(v.View, {
                        className: "mask",
                        id: "AKEE",
                        onClick: d,
                      }),
                      (0, q.BX)(v.View, {
                        className: "".concat(1 !== l ? "hide" : "show"),
                        children: [
                          (0, q.tZ)(v.Image, {
                            src: f(1).tip,
                            className: "share-gude-tip1",
                            mode: "aspectFit",
                            id: "AKEF",
                            onClick: m,
                          }),
                          (0, q.tZ)(v.Image, {
                            src: f(1).content,
                            className: "guide-img-1",
                            mode: "aspectFit",
                            id: "AKEG",
                            onClick: m,
                          }),
                        ],
                      }),
                      (0, q.BX)(v.View, {
                        className: "".concat(2 !== l ? "hide" : "show"),
                        children: [
                          (0, q.tZ)(v.Image, {
                            src: f(2).tip,
                            className: "share-gude-tip2",
                            mode: "aspectFit",
                            id: "AKEH",
                            onClick: m,
                          }),
                          (0, q.tZ)(v.Image, {
                            src: f(2).content,
                            className: "guide-img-2",
                            mode: "aspectFit",
                            id: "AKEI",
                            onClick: m,
                          }),
                        ],
                      }),
                      (0, q.BX)(v.View, {
                        className: "".concat(3 !== l ? "hide" : "show"),
                        children: [
                          (0, q.tZ)(v.Image, {
                            src: f(3).tip,
                            className: "share-gude-tip3",
                            mode: "aspectFit",
                            id: "AKEJ",
                            onClick: m,
                          }),
                          (0, q.tZ)(v.Image, {
                            src: f(3).content,
                            className: "guide-img-3",
                            mode: "aspectFit",
                            id: "AKEK",
                            onClick: m,
                          }),
                        ],
                      }),
                    ],
                  })
                : null;
            },
            ye = p.default.memo(function (e) {
              var t,
                i,
                a,
                n = e.isTieyou,
                r = e.trip,
                s = e.clickSmartTransitBox,
                o = void 0 === s ? function () {} : s;
              return (
                r.startDate &&
                  r.arriveDate &&
                  (r.diff = b()(r.arriveDate).diff(b()(r.startDate), "day")),
                (0, q.tZ)(v.View, {
                  className: "train-smart-trainsit-box",
                  children:
                    r &&
                    (0, q.BX)(v.View, {
                      className: "list-transit-bd ".concat(n ? "ty" : "zx"),
                      id: "AKCP",
                      onClick: o,
                      children: [
                        r.tagDesc &&
                          (0, q.tZ)(v.View, {
                            className: "list-item-tag",
                            children: r.tagDesc,
                          }),
                        (0, q.BX)(v.View, {
                          className: "sel-bd",
                          children: [
                            (0, q.BX)(v.View, {
                              className: "sel-from",
                              children: [
                                (0, q.tZ)(v.View, {
                                  className: "dtime",
                                  children: r.startTime,
                                }),
                                (0, q.tZ)(v.View, {
                                  className: "dstation",
                                  children: r.fromStation,
                                }),
                              ],
                            }),
                            (0, q.BX)(v.View, {
                              className: "smart-trans",
                              children: [
                                (0, q.tZ)(v.View, {
                                  className: "time",
                                  children: r.totalMinutesDesc,
                                }),
                                (0, q.tZ)(v.View, {
                                  className: "city",
                                  children: (0, q.tZ)(v.View, {
                                    className: "city-bd",
                                    children:
                                      r.transferData.transferAreaNameDesc,
                                  }),
                                }),
                                (0, q.BX)(v.View, {
                                  className:
                                    "delay-time flex-align-items-center",
                                  children: [
                                    (0, q.tZ)(v.View, {
                                      children:
                                        r.transferData.transferMinutesDesc,
                                    }),
                                    (null == r ||
                                    null === (t = r.transferData) ||
                                    void 0 === t
                                      ? void 0
                                      : t.useTransferMinDesc) &&
                                      (0, q.tZ)(v.Image, {
                                        className: "transfer-icon",
                                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/tag_hczn@3x.webp",
                                        webp: !0,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, q.BX)(v.View, {
                              className: "sel-to",
                              children: [
                                (0, q.BX)(v.View, {
                                  className: "dtime",
                                  children: [
                                    r.arriveTime,
                                    r.diff > 0 &&
                                      (0, q.BX)(v.Text, {
                                        className: "small",
                                        children: ["+", r.diff],
                                      }),
                                  ],
                                }),
                                (0, q.tZ)(v.View, {
                                  className: "astation",
                                  children: r.toStation,
                                }),
                              ],
                            }),
                            (0, q.BX)(v.View, {
                              className: "sel-price",
                              children: [
                                (0, q.tZ)(v.View, {
                                  className: "train-price color-red",
                                  children: (0, q.tZ)(v.View, {
                                    className: "price",
                                    children: r.totalPrice,
                                  }),
                                }),
                                (0, q.tZ)(v.View, {
                                  className: "smart-tags flex",
                                  children:
                                    null === (i = r.tripTagInfoList) ||
                                    void 0 === i
                                      ? void 0
                                      : i.map(function (e, t) {
                                          return (0,
                                          q.tZ)(v.View, { className: "tag-box", children: null == e ? void 0 : e.tagName }, t);
                                        }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, q.BX)(v.View, {
                          className: "sel-info",
                          children: [
                            (0, q.tZ)(v.View, {
                              className: "item-label",
                              children: r.cardName,
                            }),
                            (0, q.tZ)(v.View, { className: "gap" }),
                            r.seatTicketLefts &&
                              r.seatTicketLefts.length > 0 &&
                              r.seatTicketLefts.map(function (e, t) {
                                return (0,
                                q.BX)(v.View, { className: "item", children: [(0, q.tZ)(v.View, { className: "index", children: t + 1 }), (0, q.tZ)(A.ZtRichText, { nodes: e.seatTicketLeftDesc })] }, "index");
                              }),
                          ],
                        }),
                        (null == r ||
                        null === (a = r.transferData) ||
                        void 0 === a
                          ? void 0
                          : a.useTransferMinDesc) &&
                          (0, q.tZ)(v.View, {
                            className: "transfer-time",
                            children: r.transferData.useTransferMinDesc,
                          }),
                      ],
                    }),
                })
              );
            });
          var Ne = function (e) {
            var t = e.noDirectData,
              i = t.fromTime,
              a = t.toTime,
              n = t.title,
              r = t.trips,
              s = t.mainTitle,
              o = t.icon,
              c = t.isShowMore;
            if (
              !r.some(function (e) {
                return !!e._isFilterStation;
              })
            )
              return (0, q.tZ)(v.View, {});
            var l =
                o ||
                "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/icon_tj@3x.webp",
              u = s || "推荐中转";
            return (0, q.BX)(v.View, {
              className: "train-list-smartrec-nodirect-card",
              children: [
                (0, q.BX)(v.View, {
                  className: "card-header flex-align-items-center",
                  children: [
                    (0, q.BX)(v.View, {
                      className: "rec-label flex-align-items-center",
                      children: [
                        (0, q.tZ)(v.Image, {
                          className: "tag-bg",
                          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/img_tjzz@3x.webp",
                          webp: !0,
                        }),
                        (0, q.tZ)(v.Image, {
                          className: "icon",
                          src: l,
                          webp: !0,
                        }),
                        (0, q.tZ)(v.Text, {
                          className: "label-txt",
                          children: u,
                        }),
                      ],
                    }),
                    (0, q.tZ)(A.ZtRichText, {
                      className: "rec-title flex-1",
                      nodes: w.Z.convertAppTextToHtmlStr(n),
                    }),
                    c &&
                      (0, q.BX)(v.View, {
                        className: "rec-op",
                        id: "AKEL",
                        onClick: function () {
                          return e.clickMore({ fromTime: i, toTime: a });
                        },
                        children: [
                          "更多",
                          (0, q.tZ)(v.View, { className: "icon-triangle" }),
                        ],
                      }),
                  ],
                }),
                r.map(function (t, i) {
                  return (
                    t._isFilterStation &&
                    (0, q.BX)(
                      v.Block,
                      {
                        children: [
                          (0, q.tZ)(ye, {
                            trip: t,
                            clickSmartTransitBox: function () {
                              return e.clickSmartTransitBox({
                                trip: t,
                                orderSource: "smarttlnd",
                              });
                            },
                          }),
                          i !== r.length - 1 &&
                            (0, q.tZ)(v.View, { className: "separator-line" }),
                        ],
                      },
                      i
                    )
                  );
                }),
              ],
            });
          };
          var be = function (e) {
              var t = e.train,
                i = e.isHouBuConfig,
                a = e.isNewGuest,
                n = e.isAlternateMode,
                r = e._seats,
                s = e.selectDate,
                c = e.onAlternatevent,
                l = e.alternateListData,
                u = e.trainItemScanedKeyList,
                d = e.onAllremianticket,
                m = (0, p.useState)(!1),
                h = (0, le.Z)(m, 2),
                f = h[0],
                g = h[1],
                S = (0, p.useState)(t.seats),
                T = (0, le.Z)(S, 2),
                Z = T[0],
                w = T[1],
                y = t._noSeat,
                N = function (t) {
                  g(!0), e.clickItem({ train: t, hasScaned: !0 });
                };
              (0, p.useEffect)(
                function () {
                  var e = u.includes(t._shareKey);
                  g(e);
                },
                [t, u]
              );
              var b = t.timelineAnchorId
                ? { id: t.timelineAnchorId }
                : { id: "tv_".concat(e.id) };
              return (
                (0, p.useEffect)(
                  function () {
                    !(function () {
                      var e = [];
                      l.length > 0 &&
                        l.map(function (i) {
                          i.TrainNumber === t.TrainNumber &&
                            i._selectedSeatName &&
                            s === i._selectDate &&
                            i._selectDate === t._selectDate &&
                            i.DepartStation === t.DepartStation &&
                            i.ArriveStation === t.ArriveStation &&
                            e.push(i._selectedSeatName);
                        }),
                        r.map(function (t) {
                          t._hasAlternated = e.some(function (e) {
                            return e === t.SeatName;
                          });
                        });
                      var i = JSON.parse(JSON.stringify(r));
                      w(i);
                    })();
                  },
                  [n, l, r]
                ),
                (0, q.tZ)(
                  v.View,
                  (0, o.Z)(
                    (0, o.Z)(
                      {
                        className: "sel-box ".concat(f ? "scaned" : ""),
                        id: "AKEy",
                        onClick: function () {
                          return N(t);
                        },
                      },
                      b
                    ),
                    {},
                    {
                      children:
                        t.IsSaleStop && "列车停运" == t.SaleNote
                          ? (0, q.BX)(v.View, {
                              className: "sel-bd",
                              children: [
                                (0, q.BX)(v.View, {
                                  className: "sel-stop",
                                  children: [
                                    (0, q.tZ)(v.View, {
                                      className: "sel-stop-from",
                                      children: t.DepartStation,
                                    }),
                                    (0, q.BX)(v.View, {
                                      className: "sel-checi",
                                      children: [
                                        (0, q.tZ)(v.View, {
                                          className:
                                            "icon from " +
                                            (t.IsStartStation
                                              ? "shizhong"
                                              : "guolu"),
                                        }),
                                        (0, q.tZ)(v.View, {
                                          className:
                                            "icon to " +
                                            (t.IsEndStation
                                              ? "shizhong"
                                              : "guolu"),
                                        }),
                                      ],
                                    }),
                                    (0, q.tZ)(v.View, {
                                      className: "sel-stop-to",
                                      children: t.ArriveStation,
                                    }),
                                    (0, q.tZ)(v.View, {
                                      className: "checi",
                                      children: t.TrainNumber,
                                    }),
                                  ],
                                }),
                                (0, q.tZ)(v.View, {
                                  className: "sel-info",
                                  children: (0, q.tZ)(v.Text, {
                                    className: "color-red",
                                    children: "列车停运",
                                  }),
                                }),
                              ],
                            })
                          : (0, q.BX)(v.Block, {
                              children: [
                                (0, q.BX)(v.View, {
                                  className: "sel-bd",
                                  children: [
                                    (0, q.BX)(v.View, {
                                      className: "sel-from",
                                      children: [
                                        (0, q.tZ)(v.View, {
                                          className: "dtime",
                                          children: t.DepartTime,
                                        }),
                                        (0, q.tZ)(v.View, {
                                          className: "dstation",
                                          children: t.DepartStation,
                                        }),
                                      ],
                                    }),
                                    (0, q.BX)(v.View, {
                                      className: "sel-checi",
                                      children: [
                                        (0, q.tZ)(v.View, {
                                          className: "text",
                                          children: t.TimesCost,
                                        }),
                                        (0, q.tZ)(v.View, {
                                          className: "img",
                                          children: (0, q.tZ)(v.Image, {
                                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon_ht_lb@3x.png",
                                            className: "sel-icon",
                                          }),
                                        }),
                                        (0, q.BX)(v.View, {
                                          className: "text",
                                          children: [
                                            (0, q.tZ)(v.View, {
                                              className: "text-number",
                                              children: t.TrainNumber,
                                            }),
                                            !!t.isCanPointsPay &&
                                              (0, q.tZ)(v.View, {
                                                className: "att-img",
                                                children: (0, q.tZ)("image", {
                                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/tag_dh_n@3x.png",
                                                  className: "att-icon",
                                                }),
                                              }),
                                            t.IsFastPass &&
                                              (0, q.tZ)(v.View, {
                                                className: "att-img",
                                                children: (0, q.tZ)("image", {
                                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/tag_sfz_n@3x.png",
                                                  className: "att-sfz-icon ",
                                                }),
                                              }),
                                            !!t.IsCanSilent &&
                                              (0, q.tZ)(v.View, {
                                                className: "att-img",
                                                children: (0, q.tZ)("image", {
                                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/tag_j_n@3x.png",
                                                  className: "att-icon",
                                                }),
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, q.BX)(v.View, {
                                      className: "sel-to",
                                      children: [
                                        (0, q.BX)(v.View, {
                                          className: "dtime",
                                          children: [
                                            t.ArriveTime,
                                            (0, q.tZ)(v.Text, {
                                              className: "small",
                                              children:
                                                t.TakeDays > 0
                                                  ? "+" + t.TakeDays
                                                  : "",
                                            }),
                                          ],
                                        }),
                                        (0, q.tZ)(v.View, {
                                          className: "astation",
                                          children: t.ArriveStation,
                                        }),
                                      ],
                                    }),
                                    (0, q.BX)(v.View, {
                                      className: "sel-price",
                                      children: [
                                        (0, q.tZ)(v.View, {
                                          className: "train-price color-red",
                                          children: (0, q.tZ)(v.Text, {
                                            className: "price",
                                            children: t.SeatList[0].SeatPrice,
                                          }),
                                        }),
                                        t._hotelTagCashBack &&
                                          (0, q.tZ)(v.View, {
                                            className:
                                              "train-hotel-cashback color-red",
                                            children:
                                              t._hotelTagCashBack.crossText,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, q.BX)(v.View, {
                                  className: "sel-info",
                                  children: [
                                    t.isPreSale
                                      ? (0, q.tZ)(v.View, {
                                          className: "color-red",
                                          children: t.preSaleTimeStr,
                                        })
                                      : y
                                      ? (0, q.tZ)(v.View, {
                                          className: "color-red",
                                          children: a
                                            ? "车票已售罄，抢票成功率较低；新人免费高速抢票"
                                            : "暂无余票，" +
                                              (t.IsCanHB && i
                                                ? "可候补抢票"
                                                : "建议抢票") +
                                              (t.SucRate
                                                ? "，抢票成功率: " +
                                                  B.ZP.getSuccessRateText(
                                                    t.SucRate
                                                  )
                                                : ""),
                                        })
                                      : (0, q.tZ)(v.Block, {
                                          children: Z.map(function (e, a) {
                                            return (0, q.tZ)(
                                              v.Block,
                                              {
                                                children:
                                                  a < 4 &&
                                                  (0, q.tZ)(v.View, {
                                                    className:
                                                      "item " +
                                                      (e.SeatInventory
                                                        ? ""
                                                        : "disabled"),
                                                    children: e.isSubTrainSeat
                                                      ? (0, q.tZ)(v.Text, {
                                                          children:
                                                            e.subTrainSeatDesc,
                                                        })
                                                      : 0 == e.SeatInventory &&
                                                        t.IsCanHB &&
                                                        i
                                                      ? (0, q.BX)(v.Block, {
                                                          children: [
                                                            ("无座" ===
                                                              e.SeatName ||
                                                            "硬座" ===
                                                              e.SeatName
                                                              ? e.SeatName
                                                              : e.SeatName.replace(
                                                                  "座",
                                                                  ""
                                                                )) + " ",
                                                            "无座" ===
                                                              e._seatName ||
                                                            t._isExceedAlternatTime
                                                              ? (0, q.tZ)(
                                                                  v.Text,
                                                                  {
                                                                    className:
                                                                      "color-red",
                                                                    children:
                                                                      "抢",
                                                                  }
                                                                )
                                                              : (0, q.BX)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "".concat(
                                                                        n
                                                                          ? Z[a]
                                                                              ._hasAlternated
                                                                            ? "alternate-delete"
                                                                            : "alternate-add"
                                                                          : "color-red",
                                                                        " alternate"
                                                                      ),
                                                                    id: "AKEz",
                                                                    onClick:
                                                                      function (
                                                                        i
                                                                      ) {
                                                                        i.stopPropagation(),
                                                                          (function (
                                                                            e,
                                                                            i,
                                                                            a
                                                                          ) {
                                                                            if (
                                                                              n
                                                                            ) {
                                                                              t.seats =
                                                                                r;
                                                                              var s =
                                                                                  r.find(
                                                                                    function (
                                                                                      e
                                                                                    ) {
                                                                                      return (
                                                                                        e.SeatName ===
                                                                                        i
                                                                                      );
                                                                                    }
                                                                                  ),
                                                                                o =
                                                                                  {
                                                                                    train:
                                                                                      t,
                                                                                    type: s._hasAlternated
                                                                                      ? "delete"
                                                                                      : "add",
                                                                                    seatName:
                                                                                      i,
                                                                                    domInfo:
                                                                                      e,
                                                                                  };
                                                                              c(
                                                                                o
                                                                              );
                                                                            } else
                                                                              N(
                                                                                a
                                                                              );
                                                                          })(
                                                                            i,
                                                                            e.SeatName,
                                                                            t
                                                                          );
                                                                      },
                                                                    catchMove:
                                                                      !0,
                                                                    children: [
                                                                      (0, q.tZ)(
                                                                        v.Text,
                                                                        {
                                                                          children:
                                                                            "候补",
                                                                        }
                                                                      ),
                                                                      n &&
                                                                        (0,
                                                                        q.tZ)(
                                                                          v.View,
                                                                          {
                                                                            className:
                                                                              "alternate-icon",
                                                                            children:
                                                                              (0,
                                                                              q.tZ)(
                                                                                v.Image,
                                                                                {
                                                                                  className:
                                                                                    "img",
                                                                                  src: Z[
                                                                                    a
                                                                                  ]
                                                                                    ._hasAlternated
                                                                                    ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/choose@3x.png"
                                                                                    : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/tj@3x.png",
                                                                                }
                                                                              ),
                                                                          }
                                                                        ),
                                                                    ],
                                                                  }
                                                                ),
                                                          ],
                                                        })
                                                      : (0, q.BX)(v.Block, {
                                                          children: [
                                                            e.SeatInventory < 20
                                                              ? ("无座" ===
                                                                  e.SeatName ||
                                                                "硬座" ===
                                                                  e.SeatName
                                                                  ? e.SeatName
                                                                  : e.SeatName.replace(
                                                                      "座",
                                                                      ""
                                                                    )) +
                                                                " " +
                                                                e.SeatInventory +
                                                                "张"
                                                              : ("无座" ===
                                                                  e.SeatName ||
                                                                "硬座" ===
                                                                  e.SeatName
                                                                  ? e.SeatName
                                                                  : e.SeatName.replace(
                                                                      "座",
                                                                      ""
                                                                    )) + " 有",
                                                            0 ==
                                                              e.SeatInventory &&
                                                              (0, q.tZ)(
                                                                v.Text,
                                                                {
                                                                  className:
                                                                    "color-red",
                                                                  children:
                                                                    "(抢)",
                                                                }
                                                              ),
                                                          ],
                                                        }),
                                                  }),
                                              },
                                              "SeatName"
                                            );
                                          }),
                                        }),
                                    t.isPreSale &&
                                      (0, q.tZ)(v.View, {
                                        className: "tag-right",
                                        children: "去预约",
                                      }),
                                    !t.isPreSale &&
                                      y &&
                                      (0, q.tZ)(v.View, {
                                        className: "tag-right",
                                        children:
                                          t.IsCanHB && i
                                            ? "候补抢票"
                                            : "去抢票",
                                      }),
                                  ],
                                }),
                                t._subTrainTripDesc &&
                                  (0, q.BX)(v.View, {
                                    className: "sub-trip-desc",
                                    children: [
                                      (0, q.tZ)(v.View, {
                                        children: t._subTrainTripDesc,
                                      }),
                                      (0, q.BX)(v.View, {
                                        className: "tit-right",
                                        id: "AKFA",
                                        onClick: function (e) {
                                          e.stopPropagation(), d({ train: t });
                                        },
                                        children: [
                                          "更多有票方案",
                                          (0, q.tZ)(v.View, {
                                            className: "iconfont2 ifont2-arr",
                                          }),
                                        ],
                                      }),
                                      (0, q.tZ)(v.Image, {
                                        className: "top-arr-img",
                                        src: "https://images3.c-ctrip.com/ztrip/train.xin/2023_02/arror_list.webp",
                                        webp: !0,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                    }
                  )
                )
              );
            },
            ke = p.default.memo(function (e) {
              var t = e.tabListLen,
                i = e.stations,
                a = e.isShowAnchorTabOfTimeLine,
                n = e.onClickFilterTag,
                r = e.expKey,
                s = e.expData,
                c = e.ubtTrace,
                l = e.clickKey,
                u = e.isReschedule,
                d = e.selectDate,
                m = e.isListSwipeStart,
                h = e.isTicketOnly,
                f = e.preFilterTagMap,
                g = (0, p.useState)(""),
                S = (0, le.Z)(g, 2),
                T = S[0],
                Z = S[1],
                w = (0, p.useState)(!1),
                y = (0, le.Z)(w, 2),
                N = y[0],
                b = y[1];
              if (
                ((0, p.useEffect)(function () {
                  if (r && i.length > 0) {
                    var e = (0, o.Z)(
                      (0, o.Z)({}, s),
                      {},
                      {
                        Type:
                          (null == i
                            ? void 0
                            : i
                                .map(function (e) {
                                  return e.name;
                                })
                                .join(",")) || "",
                      }
                    );
                    (e.Type += "1" === h ? ",ticketOnly" : ""), c(r, e);
                  }
                }, []),
                (0, p.useEffect)(
                  function () {
                    T && d !== T && b(!0), Z(d);
                  },
                  [d]
                ),
                (0, p.useEffect)(
                  function () {
                    N && b(!1);
                  },
                  [m]
                ),
                !i.length)
              )
                return (0, q.tZ)(v.View, {});
              var k = function (e) {
                var t, i, a, r;
                "station" === e.filterTag
                  ? ((t =
                      null != e &&
                      null !== (a = e.station) &&
                      void 0 !== a &&
                      a.isPreSelected
                        ? 0
                        : 1),
                    (i =
                      null == e || null === (r = e.station) || void 0 === r
                        ? void 0
                        : r.name))
                  : ((t = f.ticketOnly ? 0 : 1), (i = "ticketOnly"));
                var u = (0, o.Z)(
                  (0, o.Z)({}, s),
                  {},
                  { Type: i, clickType: t }
                );
                c(l, u), n(e);
              };
              return (0, q.tZ)(v.View, {
                className: "trn-rec-fltr-bnr flex-align-items-center\n    "
                  .concat(
                    a && m && !N && t > 1 && !u ? "ceiling-color" : "",
                    " \n    "
                  )
                  .concat(1 === t || u ? "linear-background" : "", "\n    "),
                children: (0, q.tZ)(v.View, {
                  className: "fltr-tag-list-content flex-1",
                  children: (0, q.BX)(v.View, {
                    className: "fltr-tag-list",
                    children: [
                      "1" === h &&
                        (0, q.BX)(v.Block, {
                          children: [
                            (0, q.tZ)(v.View, {
                              className: "fltr-item with-close ".concat(
                                f.ticketOnly ? "cur" : ""
                              ),
                              id: "AKEP",
                              onClick: function () {
                                return k({
                                  filterTag: "ticketOnly",
                                  needRefresh: !0,
                                });
                              },
                              children: "只看有票",
                            }),
                            (0, q.tZ)(v.View, { className: "split-line" }),
                          ],
                        }),
                      i.length > 0 &&
                        i
                          .filter(function (e) {
                            return "D" === e.stationType;
                          })
                          .map(function (e, t) {
                            return (0, q.tZ)(
                              v.View,
                              {
                                className: "fltr-item with-close ".concat(
                                  e.isPreSelected ? "cur" : ""
                                ),
                                id: "AKEQ",
                                onClick: function () {
                                  return k({
                                    filterTag: "station",
                                    station: e,
                                  });
                                },
                                children: e.name,
                              },
                              t
                            );
                          }),
                      (0, q.tZ)(v.View, { className: "split-line" }),
                      i.length > 0 &&
                        i
                          .filter(function (e) {
                            return "A" === e.stationType;
                          })
                          .map(function (e, t) {
                            return (0, q.tZ)(
                              v.View,
                              {
                                className: "fltr-item with-close ".concat(
                                  e.isPreSelected ? "cur" : ""
                                ),
                                id: "AKER",
                                onClick: function () {
                                  return k({
                                    filterTag: "station",
                                    station: e,
                                  });
                                },
                                children: e.name,
                              },
                              t
                            );
                          }),
                    ],
                  }),
                }),
              });
            }),
            Ce = i(18433),
            Ve = p.default.memo(function (e) {
              var t = (0, p.useState)(0),
                i = (0, le.Z)(t, 2),
                a = i[0],
                n = i[1],
                r = (0, p.useState)(""),
                s = (0, le.Z)(r, 2),
                o = s[0],
                c = s[1],
                l = e.cards,
                u = void 0 === l ? [] : l,
                d = e.id,
                m = void 0 === d ? "" : d,
                h = e.clickCard,
                f = void 0 === h ? function () {} : h,
                g = e.selectedCardType,
                S = void 0 === g ? {} : g,
                T = e.renderButtom,
                Z = void 0 === T ? function () {} : T;
              if (
                ((0, p.useEffect)(
                  function () {
                    var e = S.cardName,
                      t = void 0 === e ? "" : e,
                      i = S.cardType,
                      a = void 0 === i ? "" : i,
                      r = u.findIndex(function (e) {
                        return e.cardType === a || e.cardName === t;
                      });
                    n(r < 0 ? 0 : r), c("".concat(m, "-szzcitem-0"));
                  },
                  [S, u]
                ),
                0 === u.length)
              )
                return (0, q.tZ)(v.View, {});
              return (0, q.BX)(v.View, {
                className: "train-smart-zhong-zhuan-card-box",
                children: [
                  (0, q.tZ)(v.View, {
                    className: "card-box",
                    children: (0, q.tZ)(v.ScrollView, {
                      scrollX: !0,
                      className: "SmartZhongZhuanCard-bd",
                      scrollIntoView: o,
                      scrollWithAnimation: !0,
                      children: u.map(function (e, t) {
                        return (0, q.BX)(
                          v.View,
                          {
                            className: "box ".concat(
                              a === t ? "active" : "",
                              " center"
                            ),
                            onClick: function () {
                              !(function (e, t) {
                                var i = u.findIndex(function (t) {
                                  return t.cardType === e.cardType;
                                });
                                i !== a &&
                                  (n(i),
                                  c("".concat(m, "-szzcitem-").concat(t)),
                                  f(e, i));
                              })(e, t);
                            },
                            id: "".concat(m, "-szzcitem-").concat(t),
                            children: [
                              (0, q.tZ)(v.View, {
                                className: "name",
                                children: e.cardName,
                              }),
                              (0, q.BX)(v.View, {
                                className: "priceAndTime",
                                children: [
                                  e.minPriceDesc &&
                                    (0, q.tZ)(v.View, {
                                      className: "time",
                                      children: e.minPriceDesc,
                                    }),
                                  (0, q.tZ)(v.View, {
                                    className: "price",
                                    children: e.minMinutesCostDesc,
                                  }),
                                ],
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                  }),
                  Z(),
                ],
              });
            }),
            _e = p.default.memo(function (e) {
              var t = e.stations,
                i = void 0 === t ? [] : t,
                a = e.source,
                n = void 0 === a ? "" : a,
                r = e.onSelectStation,
                s = void 0 === r ? function () {} : r;
              return i && 0 !== i.length
                ? (0, q.tZ)(v.ScrollView, {
                    scrollX: !0,
                    scrollWithAnimation: !0,
                    className: "sl-view",
                    children: i.map(function (e, t) {
                      return (0, q.tZ)(
                        v.View,
                        {
                          id: "TLSmartStationClick_".concat(t, "_").concat(n),
                          className: "station-item ".concat(
                            e.isSelected ? "cur" : ""
                          ),
                          onClick: function () {
                            return s(e.stationName);
                          },
                          children: e.stationName,
                        },
                        t
                      );
                    }),
                  })
                : (0, q.tZ)(q.HY, {});
            }),
            xe = p.default.memo(function (e) {
              var t = e.stations,
                i = void 0 === t ? [] : t,
                a = e.onSelectStation,
                n = void 0 === a ? function () {} : a;
              return i && 0 !== i.length
                ? (0, q.tZ)(v.View, {
                    className: "train-smart-stations-filter",
                    children: (0, q.tZ)(_e, {
                      stations: i,
                      source: "btmSmart",
                      onSelectStation: n,
                    }),
                  })
                : (0, q.tZ)(q.HY, {});
            }),
            De = Z.default.isTieyou,
            Ie = "SmartTravel",
            Be = function (e) {
              var t,
                i = e.tripCards,
                a = e.selectedCardType,
                n = e.clickCard,
                r = e.smartZhongZhuanInfo,
                s = e.clickSmartTransitBox,
                o = e.switchTab,
                c = e.observeCallback,
                l = e.isCeiling,
                u = e.stations,
                d = e.onSelectStation,
                m = (0, Ce.Z)({
                  selector: "#list-top",
                  targetSelector: "#train-list-tsmart-content",
                  observeCallback: c,
                  callbackDeps: [],
                });
              return (0, q.BX)(v.View, {
                className: "list-transit train-list-content",
                id: "train-list-tsmart-content",
                ref: m,
                children: [
                  (null == i ? void 0 : i.length) > 0 &&
                    (0, q.tZ)(v.View, {
                      className: "list-transit-hd",
                      children: "为您推荐更多智能中转方案",
                    }),
                  !l &&
                    (0, q.tZ)(Ve, {
                      cards: i,
                      selectedCardType: a,
                      clickCard: function (e, t) {
                        n(e, t);
                      },
                      id: "smart-tab-in-train-list",
                      isCeiling: l,
                      renderButtom: function () {
                        return (null == u ? void 0 : u.length) > 0
                          ? (0, q.tZ)(xe, { stations: u, onSelectStation: d })
                          : (0, q.tZ)(q.HY, {});
                      },
                    }),
                  (0, q.tZ)(v.Block, {
                    children:
                      r.filterSmartTrips &&
                      r.filterSmartTrips.map(function (e, t) {
                        return (0, q.tZ)(
                          ye,
                          {
                            trip: e,
                            isTieyou: De,
                            clickSmartTransitBox: function () {
                              s({ trip: e });
                            },
                          },
                          t
                        );
                      }),
                  }),
                  (null == r || null === (t = r.trips) || void 0 === t
                    ? void 0
                    : t.length) > 0 &&
                    (0, q.tZ)(v.Button, {
                      className: "btn-more",
                      id: "AKEx",
                      onClick: function () {
                        return o(Ie);
                      },
                      "data-ubt-key": "wx_list_zzList_2",
                      children: "查看更多智慧出行方案",
                    }),
                ],
              });
            },
            Le = i(91006),
            Ae = i.n(Le),
            Fe = i(18596),
            Pe = i(81437),
            Xe = Z.default.isTieyou,
            Me = "TRANSFER_CITY",
            Re = [
              {
                title: "",
                type: "HAS_TICKET",
                fList: [Ze.Z.ONLY_HAVE_TICKET, Ze.Z.SAME_STATION_TRANSFER],
              },
              {
                title: "出行方式",
                type: "TRIP_WAY",
                fList: [Ze.Z.NO_BUS, Ze.Z.NO_FLIGHT],
              },
              {
                title: "出发时间",
                type: "DEP_TIME",
                fList: [Ze.Z.T0_6, Ze.Z.T6_12, Ze.Z.T12_18, Ze.Z.T18_24],
              },
              { title: "中转城市", type: Me, fList: [] },
              {
                title: "换乘时长",
                type: "TRANSFER_TIME",
                fList: [Ze.Z.TD0_1, Ze.Z.TD1_2, Ze.Z.TD2_4, Ze.Z.TD4_24],
              },
            ],
            Ee = (function (e) {
              (0, m.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var a;
                return (
                  (0, l.Z)(this, i),
                  (a = t.call(this, e)),
                  (0, f.Z)((0, d.Z)(a), "handleDefaultSelCon", function () {
                    var e = a.props,
                      t = e.smartFilterConditions,
                      i = void 0 === t ? [] : t,
                      n = e.transferAreaNames,
                      r = void 0 === n ? [] : n,
                      s = [].concat((0, ue.Z)(r), [
                        Ze.Z.ONLY_HAVE_TICKET,
                        Ze.Z.NO_BUS,
                        Ze.Z.NO_FLIGHT,
                        Ze.Z.T0_6,
                        Ze.Z.T6_12,
                        Ze.Z.T12_18,
                        Ze.Z.T18_24,
                        Ze.Z.TD0_1,
                        Ze.Z.TD1_2,
                        Ze.Z.TD2_4,
                        Ze.Z.TD4_24,
                      ]);
                    return (
                      i.forEach(function (e) {
                        s.includes(e) ||
                          (i = i.filter(function (t) {
                            return t !== e;
                          }));
                      }),
                      i
                    );
                  }),
                  (0, f.Z)((0, d.Z)(a), "selectItem", function (e) {
                    var t = a.state.selectConditions,
                      i = void 0 === t ? [] : t;
                    w.Z.isEmptyObject(
                      i.find(function (t) {
                        return t === e;
                      })
                    )
                      ? ((i = [].concat((0, ue.Z)(i), [e])), a.selectLog(e))
                      : (i = i.filter(function (t) {
                          return t !== e;
                        })),
                      a.setState({ selectConditions: i }, function () {
                        a.requestByConditionsDebounce();
                      });
                  }),
                  (0, f.Z)((0, d.Z)(a), "reset", function () {
                    a.setState({ selectConditions: [] }, function () {
                      a.requestByConditions();
                    });
                  }),
                  (0, f.Z)(
                    (0, d.Z)(a),
                    "requestByConditions",
                    (0, c.Z)(
                      (0, s.Z)().mark(function e() {
                        var t, i, n, r, c, l, u, d, m, h;
                        return (0, s.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = a.props.requestParams),
                                    (i = void 0 === t ? {} : t),
                                    (e.prev = 1),
                                    (n = i.optionalParameter || {}),
                                    (r = a.state.selectConditions),
                                    (c = n.cardType),
                                    (l = void 0 === c ? "" : c),
                                    (u = {
                                      cacheControl: {
                                        useCache: !0,
                                        maxAge: 12e4,
                                        dedup: !0,
                                        dedupingInterval: 500,
                                      },
                                    }),
                                    (e.next = 8),
                                    (0, C.Dek)(
                                      (0, o.Z)(
                                        (0, o.Z)({}, i),
                                        {},
                                        {
                                          optionalParameter: (0, o.Z)(
                                            { cardType: l },
                                            Pe.Z.getSmartFilterResParams(r)
                                          ),
                                        }
                                      ),
                                      u
                                    )
                                  );
                                case 8:
                                  (d = e.sent),
                                    (m = d.data),
                                    (h = void 0 === m ? null : m),
                                    1 === d.resultCode && h
                                      ? a.setState({
                                          tripNum:
                                            (h.trips && h.trips.length) || 0,
                                        })
                                      : a.setState({ tripNum: 0 }),
                                    (e.next = 15);
                                  break;
                                case 13:
                                  (e.prev = 13), (e.t0 = e.catch(1));
                                case 15:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[1, 13]]
                        );
                      })
                    )
                  ),
                  (0, f.Z)((0, d.Z)(a), "confirmFilter", function () {
                    var e = a.state,
                      t = e.tripNum,
                      i = e.selectConditions;
                    if (t > 0) {
                      var n = a.props,
                        r = n.close,
                        s = n.confirmFilterCb;
                      r(),
                        Fe.Z.isEqual(i, a.props.smartFilterConditions) || s(i);
                    }
                  }),
                  (0, f.Z)((0, d.Z)(a), "selectLog", function (e) {
                    try {
                      var t = a.props;
                      (0,
                      t.ubtTrace)("224879", { fromSource: "train" === t.from ? "train_list" : "transferList", Vid: P.ZP.cid + new Date().getTime(), PageId: Z.default.isTieyou ? "10320660964" : "10320660960", type: e });
                    } catch (e) {}
                  }),
                  (a.state = {
                    filterItems: Re,
                    selectConditions: e.smartFilterConditions,
                    tripNum: e.tripNum,
                  }),
                  (a.requestByConditionsDebounce = w.Z.debounce(
                    a.requestByConditions,
                    300
                  )),
                  a
                );
              }
              return (
                (0, u.Z)(i, [
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      var t = e.ubtTrace,
                        i = e.from;
                      !this.props.isShow &&
                        e.isShow &&
                        (this.setState({
                          tripNum: e.tripNum,
                          selectConditions: e.smartFilterConditions,
                        }),
                        t("224880", {
                          fromSource:
                            "train" === i ? "train_list" : "transferList",
                          Vid: P.ZP.cid + new Date().getTime(),
                          PageId: Z.default.isTieyou
                            ? "10320660964"
                            : "10320660960",
                        }));
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        i = t.isShow,
                        a = t.close,
                        n = t.transferAreaNames,
                        r = this.state,
                        s = r.filterItems,
                        o = r.selectConditions,
                        c = void 0 === o ? [] : o,
                        l = r.tripNum,
                        u = l > 0;
                      return (0, q.tZ)(A.ZtDrawer, {
                        show: i,
                        isDefineHead: !0,
                        className: "smart-filter-dialog",
                        onWrapClose: a,
                        children: (0, q.BX)(v.View, {
                          className: "fcontainer",
                          children: [
                            (0, q.BX)(v.View, {
                              className: "hd",
                              children: [
                                (0, q.tZ)(v.View, {
                                  className: "cancel-btn",
                                  id: "AKCF",
                                  onClick: a,
                                  children: "取消",
                                }),
                                (0, q.tZ)(v.View, {
                                  className: "center-tit",
                                  children: "高级筛选",
                                }),
                                (0, q.tZ)(v.View, {
                                  className: "reset-btn color-primary",
                                  id: "AKCG",
                                  onClick: this.reset,
                                  children: "重置",
                                }),
                              ],
                            }),
                            (0, q.tZ)(v.View, {
                              className: "fcontent",
                              children: s.map(function (t, i) {
                                var a = t.title,
                                  r = t.fList,
                                  s = t.type === Me ? n : r;
                                return w.Z.notEmptyArray(s)
                                  ? (0, q.BX)(
                                      v.View,
                                      {
                                        children: [
                                          !!a &&
                                            (0, q.tZ)(v.View, {
                                              className: "fitem-title",
                                              children: a,
                                            }),
                                          (0, q.tZ)(v.View, {
                                            className: "f-list",
                                            children: s.map(function (t, i) {
                                              var a = c.includes(t);
                                              return (0, q.tZ)(
                                                v.View,
                                                {
                                                  className: "fitem-c ".concat(
                                                    Xe ? "fitem-ty" : "fitem-zx"
                                                  ),
                                                  children: (0, q.tZ)(v.View, {
                                                    className: "fitem ".concat(
                                                      a ? "selected" : "",
                                                      " "
                                                    ),
                                                    id: "AKCH",
                                                    onClick: function () {
                                                      return e.selectItem(t);
                                                    },
                                                    children: t,
                                                  }),
                                                },
                                                "fitem-".concat(i)
                                              );
                                            }),
                                          }),
                                        ],
                                      },
                                      "flist-filter-".concat(i)
                                    )
                                  : (0, q.tZ)(v.View, {});
                              }),
                            }),
                            (0, q.BX)(v.View, {
                              className: "footer",
                              children: [
                                !u &&
                                  (0, q.tZ)(v.View, {
                                    className: "tips",
                                    children:
                                      "当前条件无可用方案，建议重新筛选",
                                  }),
                                (0, q.tZ)(v.View, {
                                  className: "btn-container",
                                  children: (0, q.tZ)(v.View, {
                                    className: "btn bgcolor-primary ".concat(
                                      u ? "" : "noresult"
                                    ),
                                    id: "AKCI",
                                    onClick: this.confirmFilter,
                                    children: u
                                      ? "共".concat(l, "个可选方案")
                                      : "请重新筛选",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(p.Component);
          (0, f.Z)(Ee, "propTypes", {
            isShow: Ae().bool,
            close: Ae().func,
            transferAreaNames: Ae().array,
            requestParams: Ae().object,
            confirmFilterCb: Ae().func,
            smartFilterConditions: Ae().array,
            tripNum: Ae().number,
            ubtTrace: Ae().func,
            from: Ae().string,
          }),
            (0, f.Z)(Ee, "defaultProps", {
              isShow: !1,
              close: function () {},
              transferAreaNames: [],
              requestParams: {},
              confirmFilterCb: function () {},
              smartFilterConditions: [],
              tripNum: 0,
              ubtTrace: function () {},
              from: "",
            });
          var Ke = (function (e) {
            (0, m.Z)(i, e);
            var t = (0, h.Z)(i);
            function i(e) {
              var a;
              return (
                (0, l.Z)(this, i),
                (a = t.call(this, e)),
                (0, f.Z)((0, d.Z)(a), "onClickSortBy", function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    i = a.props,
                    n = i.onClickSmartSortBy,
                    r = i.smartSortObj,
                    s = i.ubtTrace,
                    o = i.from,
                    c = r.smartSortType,
                    l = r.smartSortAscending,
                    u = void 0 !== l && l;
                  if (c === Ze.Z.SMART_DEP_TIME || e !== c) {
                    var d =
                      e === Ze.Z.SMART_DEP_TIME
                        ? { bizKey: t, rankType: u ? 2 : 1, tabType: o }
                        : { bizKey: t, tabType: o };
                    s("c_trn_z_10320660960", d), n(e);
                  }
                }),
                (0, f.Z)((0, d.Z)(a), "showSmartFilter", function () {
                  a.setState({ isShowSmartFilterDialog: !0 });
                }),
                (0, f.Z)((0, d.Z)(a), "closeSmartFilterDialog", function () {
                  a.setState({ isShowSmartFilterDialog: !1 });
                }),
                (a.state = { isShowSmartFilterDialog: !1 }),
                a
              );
            }
            return (
              (0, u.Z)(i, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this.props,
                      t = e.ubtTrace,
                      i = e.from;
                    t("s_trn_z_trace_10320660960", {
                      bizKey: "z_mini_listPage_transfer_rankTag_show",
                      tabType: void 0 === i ? "" : i,
                    });
                  },
                },
                {
                  key: "shouldComponentUpdate",
                  value: function (e, t) {
                    return (
                      !Fe.Z.isEqual(this.props.smartSortObj, e.smartSortObj) ||
                      this.state.isShowSmartFilterDialog !==
                        t.isShowSmartFilterDialog ||
                      !Fe.Z.isEqual(
                        this.props.transferAreaNames,
                        e.transferAreaNames
                      ) ||
                      this.props.tripNum !== e.tripNum
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.state.isShowSmartFilterDialog,
                      i = this.props,
                      a = i.transferAreaNames,
                      n = i.requestParams,
                      r = i.confirmFilterCb,
                      s = i.smartFilterConditions,
                      o = void 0 === s ? [] : s,
                      c = i.smartSortObj,
                      l = i.tripNum,
                      u = i.ubtTrace,
                      d = i.from,
                      m = c.smartSortType,
                      h = c.smartSortAscending,
                      f = void 0 !== h && h;
                    return (0, q.BX)(v.View, {
                      className: "smart-fbar",
                      children: [
                        (0, q.tZ)(v.View, {
                          className: "item",
                          id: "AKCJ",
                          onClick: function () {
                            return e.onClickSortBy(
                              Ze.Z.SMART_RECOMMEND_SORT,
                              "z_mini_listPage_transfer_recommand_click"
                            );
                          },
                          children: (0, q.tZ)(v.Text, {
                            className: "text ".concat(
                              m === Ze.Z.SMART_RECOMMEND_SORT ? "selected" : ""
                            ),
                            children: "推荐排序",
                          }),
                        }),
                        (0, q.tZ)(v.View, { className: "line" }),
                        (0, q.tZ)(v.View, {
                          className: "item",
                          id: "AKCK",
                          onClick: function () {
                            return e.onClickSortBy(
                              Ze.Z.SMART_DEP_TIME,
                              "z_mini_listPage_transfer_departTime_click"
                            );
                          },
                          children: (0, q.tZ)(v.Text, {
                            className: "text ".concat(
                              m === Ze.Z.SMART_DEP_TIME ? "selected" : ""
                            ),
                            children:
                              m !== Ze.Z.SMART_DEP_TIME
                                ? "出发时间"
                                : f
                                ? "出发早-晚"
                                : "出发晚-早",
                          }),
                        }),
                        (0, q.tZ)(v.View, { className: "line" }),
                        (0, q.tZ)(v.View, {
                          className: "item",
                          id: "AKCL",
                          onClick: function () {
                            return e.onClickSortBy(
                              Ze.Z.SMART_COST_TIME,
                              "z_mini_listPage_transfer_timeConsuming_click"
                            );
                          },
                          children: (0, q.tZ)(v.Text, {
                            className: "text ".concat(
                              m === Ze.Z.SMART_COST_TIME ? "selected" : ""
                            ),
                            children: "耗时优先",
                          }),
                        }),
                        (0, q.tZ)(v.View, { className: "line" }),
                        (0, q.tZ)(v.View, {
                          className: "item",
                          id: "AKCM",
                          onClick: this.showSmartFilter,
                          children: (0, q.tZ)(v.Text, {
                            className: "text",
                            children: "高级筛选",
                          }),
                        }),
                        w.Z.notEmptyArray(o) &&
                          (0, q.tZ)(v.View, { className: "filter-selected" }),
                        (0, q.tZ)(Ee, {
                          isShow: t,
                          close: this.closeSmartFilterDialog,
                          transferAreaNames: a,
                          requestParams: n,
                          confirmFilterCb: r,
                          smartFilterConditions: o,
                          tripNum: l,
                          ubtTrace: u,
                          from: d,
                        }),
                      ],
                    });
                  },
                },
              ]),
              i
            );
          })(p.Component);
          (0, f.Z)(Ke, "propTypes", {
            onClickSmartSortBy: Ae().func,
            smartSortObj: Ae().object,
            transferAreaNames: Ae().array,
            requestParams: Ae().object,
            confirmFilterCb: Ae().func,
            smartFilterConditions: Ae().array,
            tripNum: Ae().number,
            ubtTrace: Ae().func,
            from: Ae().string,
          }),
            (0, f.Z)(Ke, "defaultProps", {
              onClickSmartSortBy: function () {},
              transferAreaNames: [],
              requestParams: {},
              confirmFilterCb: function () {},
              smartFilterConditions: [],
              smartSortObj: {},
              tripNum: 0,
              ubtTrace: function () {},
              from: "",
            });
          var Oe,
            ze = Ke,
            Ge = i(52949),
            qe = i(87402),
            He = p.default.memo(function (e) {
              var t = e.list,
                i = void 0 === t ? [] : t,
                a = e.preCandidateInfo,
                n = void 0 === a ? {} : a,
                r = e.onClose,
                s = e.onDeleteAlternate,
                o = e.onCloseAlternateMode,
                c = e.onClickNextStep,
                l = (0, p.useState)(!0),
                u = (0, le.Z)(l, 2),
                d = u[0],
                m = u[1],
                h = (0, p.useState)(!1),
                f = (0, le.Z)(h, 2),
                g = f[0],
                S = f[1];
              if (!n) return null;
              var T = n.limitNum,
                Z = n.candidateDetail;
              D.ZK.getAttr("alternateCloseGuideTip") ||
                (S(!0),
                setTimeout(function () {
                  D.ZK.setAttr("alternateCloseGuideTip", !0), S(!1);
                }, 3e3));
              var w = function (e) {
                return b()(e._selectDate).format("MM月DD日");
              };
              return (0, q.BX)(A.ZtDrawer, {
                show: !0,
                onClose: r,
                onWrapClose: r,
                isShowClose: !1,
                className: "trian-list-alternate-list-pop",
                children: [
                  (0, q.BX)(v.View, {
                    className: "alternate-list-pop",
                    children: [
                      (0, q.tZ)(v.Image, {
                        className: "bg-img",
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/tcbj@3x.png",
                      }),
                      (0, q.BX)(v.View, {
                        className: "pop-content",
                        children: [
                          (0, q.BX)(v.View, {
                            className: "title flex",
                            children: [
                              (0, q.BX)(v.View, {
                                className: "flex flex-center",
                                children: [
                                  (0, q.tZ)(v.View, { children: "候补列表" }),
                                  (0, q.tZ)(v.Image, {
                                    className: "tips-icon",
                                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_xi@3x.png",
                                    id: "AKDC",
                                    onClick: function () {
                                      Z && F.Z.twebview({ data: { url: Z } });
                                    },
                                  }),
                                ],
                              }),
                              (0, q.tZ)(v.Image, {
                                className: "close-icon",
                                src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_tcgbss@3x.png",
                                id: "AKDD",
                                onClick: r,
                              }),
                            ],
                          }),
                          (0, q.BX)(v.View, {
                            className: "radio-view flex",
                            children: [
                              (0, q.BX)(v.View, {
                                className: "tit flex",
                                children: [
                                  (0, q.tZ)(v.View, {
                                    children: "已开启官方候补模式",
                                  }),
                                  i.length > 0
                                    ? (0, q.tZ)(v.View, {
                                        className: "tit-num",
                                        children: "（已选"
                                          .concat(i.length, "/")
                                          .concat(T, "）"),
                                      })
                                    : (0, q.tZ)(v.View, {
                                        children: "，最多可选".concat(T, "个"),
                                      }),
                                ],
                              }),
                              (0, q.BX)(v.View, {
                                className: "switch-content flex",
                                children: [
                                  (0, q.tZ)(v.View, {
                                    className: "close-mode-tit",
                                    children: "关闭",
                                  }),
                                  (0, q.tZ)(A.ZtSwitch, {
                                    color: "#198CFF",
                                    checked: d,
                                    onChange: function () {
                                      m(!d), o(), r();
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g &&
                            (0, q.tZ)(v.View, {
                              className:
                                "close-guide-top flex flex-center trigon top-right-85",
                              children: "点击关闭候补模式",
                            }),
                          (0, q.tZ)(v.View, {
                            className: "list",
                            children:
                              0 === i.length
                                ? (0, q.BX)(v.View, {
                                    className:
                                      "no-list flex flex-center flex-column",
                                    children: [
                                      (0, q.tZ)(v.Image, {
                                        className: "no-list-img",
                                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/kzt@3x.png",
                                      }),
                                      (0, q.tZ)(v.View, {
                                        children: "您还尚未添加候补需求",
                                      }),
                                    ],
                                  })
                                : (0, q.tZ)(v.View, {
                                    className: "scroll-view-content",
                                    children: (0, q.tZ)(v.ScrollView, {
                                      scrollY: !0,
                                      className: "alternate-list",
                                      children: i.map(function (e, t) {
                                        return (0, q.BX)(
                                          v.View,
                                          {
                                            className: "alternate-item flex",
                                            children: [
                                              (0, q.BX)(v.View, {
                                                className:
                                                  "info flex flex-column",
                                                children: [
                                                  (0, q.BX)(v.View, {
                                                    className: "alt-bd flex",
                                                    children: [
                                                      (0, q.BX)(v.View, {
                                                        className: "alt-from",
                                                        children: [
                                                          (0, q.tZ)(v.View, {
                                                            className: "dtime",
                                                            children:
                                                              e.DepartTime,
                                                          }),
                                                          (0, q.tZ)(v.View, {
                                                            className:
                                                              "dstation",
                                                            children:
                                                              e.DepartStation,
                                                          }),
                                                        ],
                                                      }),
                                                      (0, q.BX)(v.View, {
                                                        className:
                                                          "alt-checi flex flex-center flex-column",
                                                        children: [
                                                          (0, q.tZ)(v.View, {
                                                            className: "text",
                                                            children:
                                                              e.TimesCost,
                                                          }),
                                                          (0, q.tZ)(v.Image, {
                                                            className: "img",
                                                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon_ht_lb@3x.png",
                                                          }),
                                                          (0, q.BX)(v.View, {
                                                            className: "text",
                                                            children: [
                                                              (0, q.tZ)(
                                                                v.View,
                                                                {
                                                                  children:
                                                                    e.TrainNumber,
                                                                }
                                                              ),
                                                              e.isCanPointsPay &&
                                                                (0, q.tZ)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "att-img",
                                                                    children:
                                                                      (0, q.tZ)(
                                                                        v.Image,
                                                                        {
                                                                          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/tag_dh_n@3x.png",
                                                                          className:
                                                                            "att-icon",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                              e.IsFastPass &&
                                                                (0, q.tZ)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "att-img",
                                                                    children:
                                                                      (0, q.tZ)(
                                                                        v.Image,
                                                                        {
                                                                          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/tag_sfz_n@3x.png",
                                                                          className:
                                                                            "att-sfz-icon ",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                              e.IsCanSilent &&
                                                                (0, q.tZ)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "att-img",
                                                                    children:
                                                                      (0, q.tZ)(
                                                                        v.Image,
                                                                        {
                                                                          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/tag_j_n@3x.png",
                                                                          className:
                                                                            "att-icon",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, q.BX)(v.View, {
                                                        className: "alt-to",
                                                        children: [
                                                          (0, q.tZ)(v.View, {
                                                            className: "atime",
                                                            children:
                                                              e.ArriveTime,
                                                          }),
                                                          (0, q.tZ)(v.View, {
                                                            className:
                                                              "astation",
                                                            children:
                                                              e.ArriveStation,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, q.tZ)(v.View, {
                                                    className: "desc flex",
                                                    children: (0, q.BX)(
                                                      v.View,
                                                      {
                                                        className:
                                                          "from-date flex",
                                                        children: [
                                                          (0, q.tZ)(v.View, {
                                                            children:
                                                              "出发时间 ".concat(
                                                                w(e)
                                                              ),
                                                          }),
                                                          (0, q.tZ)(v.View, {
                                                            className:
                                                              "seat-name",
                                                            children: ""
                                                              .concat(
                                                                e._selectedSeatName,
                                                                " ￥"
                                                              )
                                                              .concat(
                                                                e._selectedSeatPrice
                                                              ),
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, q.tZ)(v.View, {
                                                className:
                                                  "button flex flex-center",
                                                children: (0, q.tZ)(v.Image, {
                                                  className: "delete",
                                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_sc@3x.png",
                                                  id: "AKDE",
                                                  onClick: function () {
                                                    return s(e);
                                                  },
                                                }),
                                              }),
                                            ],
                                          },
                                          "alternate_list_".concat(t)
                                        );
                                      }),
                                    }),
                                  }),
                          }),
                          i.length > 0 &&
                            (0, q.tZ)(v.View, {
                              className: "list-bottom-view",
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, q.tZ)(v.View, {
                    className: "btn-content",
                    children: (0, q.tZ)(v.View, {
                      className: "btn",
                      id: "AKDF",
                      onClick: function () {
                        0 === i.length ? r() : c();
                      },
                      children: i.length > 0 ? "下一步" : "去添加",
                    }),
                  }),
                ],
              });
            }),
            Ye = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.isShow,
                i = void 0 !== t && t,
                a = e.onClose,
                n = void 0 === a ? function () {} : a,
                r = function () {
                  n(), D.ZK.setAttr("newTrainlistAlternateGuideIsShown", !0);
                },
                s = !D.ZK.getAttr("newTrainlistAlternateGuideIsShown");
              return s || i
                ? (0, q.BX)(v.View, {
                    className: "train-list-alternatet-guide ".concat(
                      i ? "show" : "hide"
                    ),
                    children: [
                      (0, q.tZ)(v.View, {
                        className: "mask",
                        id: "AKDA",
                        onClick: r,
                      }),
                      (0, q.tZ)(v.View, {
                        className: "content",
                        children: (0, q.BX)(v.View, {
                          className: "guide-content",
                          children: [
                            (0, q.tZ)(v.Image, {
                              className: "head-icon",
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/xz@3x.png",
                            }),
                            (0, q.BX)(v.View, {
                              className: "title flex flex-center",
                              children: [
                                (0, q.tZ)(v.View, {
                                  className: "high-light",
                                  children: "官方候补模式",
                                }),
                                "上线啦！",
                              ],
                            }),
                            (0, q.tZ)(v.Image, {
                              className: "ani",
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/ac.gif",
                            }),
                            (0, q.tZ)(v.View, {
                              className: "ok-btn fex flex-center",
                              id: "AKDB",
                              onClick: r,
                              children: "我知道了",
                            }),
                            (0, q.tZ)(v.Image, {
                              className: "bottom-icon",
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/sjx@3x.png",
                            }),
                          ],
                        }),
                      }),
                      (0, q.tZ)(v.Image, {
                        className: "car",
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/kqhb@3x.png",
                      }),
                    ],
                  })
                : null;
            },
            je = function (e) {
              var t = e.onRef,
                i = (0, p.useState)(!1),
                a = (0, le.Z)(i, 2),
                n = a[0],
                r = a[1],
                s = (0, p.useState)(0),
                o = (0, le.Z)(s, 2),
                c = o[0],
                l = o[1],
                u = (0, p.useState)(0),
                d = (0, le.Z)(u, 2),
                m = d[0],
                h = d[1],
                f = (0, p.useState)(!1),
                g = (0, le.Z)(f, 2),
                S = g[0],
                T = g[1],
                Z = (0, p.useState)(null),
                w = (0, le.Z)(Z, 2),
                y = w[0],
                N = w[1],
                b = (0, p.useState)(null),
                k = (0, le.Z)(b, 2),
                C = k[0],
                V = k[1];
              (0, p.useImperativeHandle)(t, function () {
                return {
                  start: function (e) {
                    N(e.linePos), V(e.finger), T(!0);
                  },
                };
              });
              return (
                (0, p.useEffect)(
                  function () {
                    S &&
                      y &&
                      C &&
                      (function (e, t) {
                        var i = 0,
                          a = e.bezier_points;
                        r(!0), l(t.x), h(t.Y);
                        var n = setInterval(function () {
                          i++,
                            l(a[i].x),
                            h(a[i].y),
                            i >= 14 && (clearInterval(n), r(!1));
                        }, 33);
                      })(y, C);
                  },
                  [S, y, C]
                ),
                n &&
                  (0, q.tZ)(v.View, {
                    className: "alternate-dot",
                    style: {
                      left: "".concat(c, "px"),
                      top: "".concat(m, "px"),
                    },
                  })
              );
            },
            Ue = p.default.memo(function (e) {
              var t,
                i = e.recInfo,
                a = e.onClick,
                n = void 0 === a ? function () {} : a;
              return i
                ? (0, q.BX)(v.View, {
                    className:
                      "trainlist-smart-rec-route flex-align-items-center",
                    id: "AKES",
                    onClick: n,
                    children: [
                      (0, q.tZ)(v.Image, {
                        className: "l-img",
                        src: i.recommendIcon,
                        webp: !0,
                      }),
                      (0, q.BX)(v.View, {
                        className: "m-cont flex-1",
                        children: [
                          (0, q.BX)(v.View, {
                            className: "sta-info flex-align-items-center",
                            children: [
                              (0, q.tZ)(v.View, {
                                className: "sta",
                                children: i.fromStation,
                              }),
                              (0, q.tZ)(v.Image, {
                                className: "trip-icon",
                                src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_05/Group%202@3x.png",
                              }),
                              (0, q.tZ)(v.View, {
                                className: "sta",
                                children: i.toStation,
                              }),
                            ],
                          }),
                          (0, q.BX)(v.View, {
                            className: "tags flex-align-items-center",
                            children: [
                              i.tagIconUrl &&
                                (0, q.tZ)(v.Image, {
                                  className: "coupon-tag",
                                  src: i.tagIconUrl,
                                }),
                              null === (t = i.recommendTagList) || void 0 === t
                                ? void 0
                                : t.map(function (e, t) {
                                    return (0,
                                    q.tZ)(v.View, { className: "tag-item", children: e }, t);
                                  }),
                            ],
                          }),
                        ],
                      }),
                      (0, q.BX)(v.View, {
                        className: "r-more",
                        children: [
                          (0, q.tZ)(v.View, {
                            className: "price-desc",
                            children: i.price,
                          }),
                          (0, q.BX)(v.View, {
                            className: "flex-align-items-center more-btn",
                            children: [
                              (0, q.tZ)(v.Text, {
                                className: "more-solution",
                                children: "更多方案",
                              }),
                              (0, q.tZ)(v.Text, {
                                className: "ifont2-arr iconfont2",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, q.tZ)(q.HY, {});
            }),
            We = i(76290),
            Je = p.default.memo(function (e) {
              var t = e.info;
              if (!t) return (0, q.tZ)(q.HY, {});
              var i = t.backGroundIconUrl,
                a = void 0 === i ? "" : i,
                n = t.iconUrl,
                r = void 0 === n ? "" : n,
                s = t.dataList,
                o = void 0 === s ? "" : s;
              return (0, q.BX)(v.View, {
                className:
                  "train-list-user-train-right-banner flex flex-center",
                children: [
                  (0, q.tZ)(v.Image, {
                    className: "left-img",
                    lazyLoad: !0,
                    src: r,
                    mode: "heightFix",
                  }),
                  (0, q.tZ)(v.View, {
                    className: "rights-text flex",
                    children:
                      o.length &&
                      o.map(function (e, t) {
                        return (0,
                        q.tZ)(v.View, { className: "item", children: (0, q.tZ)(v.View, { children: e }) }, "user_right_".concat(t));
                      }),
                  }),
                  (0, q.tZ)(v.Image, { className: "right-bg", src: a }),
                ],
              });
            }),
            $e = p.default.memo(function (e) {
              var t = e.info,
                i = e.propStyle;
              return t
                ? (0, q.tZ)(v.View, {
                    className: "festival-claim-banner",
                    style: i,
                    children: (0, q.tZ)(v.Image, {
                      className: "image",
                      src: t.picUrl,
                      webp: !0,
                    }),
                  })
                : (0, q.tZ)(q.HY, {});
            }),
            Qe = function (e) {
              var t = e.isAllPreSale,
                i = e.propStyle,
                a = e.info;
              return t && a
                ? (0, q.tZ)(v.View, {
                    className: "new-guest-banner ".concat(t ? "pre" : "no-pre"),
                    style: i,
                    children: (0, q.tZ)(v.Image, {
                      className: "img-pre",
                      src: a.picUrl,
                      webp: !0,
                    }),
                  })
                : (0, q.tZ)(q.HY, {});
            },
            et = function (e) {
              var t,
                i,
                a,
                n = e.list,
                r = void 0 === n ? [] : n,
                s = (0, p.useState)(!1),
                o = (0, le.Z)(s, 2),
                c = o[0],
                l = o[1],
                u = r
                  .filter(function (e) {
                    return "smartRec" !== e.type && e._isPreSecKill;
                  })
                  .sort(function (e, t) {
                    return e._saleDate > t._saleDate;
                  }),
                d = null === (t = u[0]) || void 0 === t ? void 0 : t._saleDate;
              if (
                ((0, p.useEffect)(
                  function () {
                    d &&
                      (0, k.getCurrentPage)().ubtTrace(
                        "TZWList_SeckillBanner_exposure",
                        { PageId: (0, k.getCurrentPage)().pageId }
                      );
                  },
                  [d]
                ),
                !d)
              )
                return null;
              return (0, q.BX)(v.View, {
                className: "flex flex-center trn-sec-kill-banner ",
                children: [
                  (0, q.tZ)(v.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_03/nz1@3x.png",
                    className: "icon-img",
                    mode: "aspectFit",
                  }),
                  c
                    ? (0, q.BX)(v.View, {
                        className: "flex-1",
                        children: [
                          null === (i = u[0]) || void 0 === i
                            ? void 0
                            : i.PreSaleTime,
                          "起售车次已开售，请刷新页面查看最新数据",
                        ],
                      })
                    : (0, q.BX)(v.View, {
                        className: "flex-1",
                        children: [
                          "距",
                          null === (a = u[0]) || void 0 === a
                            ? void 0
                            : a.PreSaleTime,
                          "开售车次仅",
                          (0, q.tZ)(A.ZtCountdown, {
                            className: "sec-kill-count-down",
                            isShowHour: !1,
                            format: { minute: "分", second: "秒" },
                            endTime: b()(d).format("YYYY-MM-DD HH:mm:ss"),
                            onTimeup: function () {
                              l(!0);
                            },
                          }),
                          ", 可提前下单",
                        ],
                      }),
                ],
              });
            };
          !(function (e) {
            (e.GrabNewUserBanner = "grabNewUserBanner"),
              (e.SecKillBanner = "seckillBanner"),
              (e.BannerV1_UserTrainRights = "BannerV1_UserTrainRights"),
              (e.SpecialDayBanner = "specialDayBanner"),
              (e.BannerV2_CertifiedStudent = "BannerV2_CertifiedStudent");
          })(Oe || (Oe = {}));
          var tt,
            it,
            at,
            nt = p.default.memo(function (e) {
              var t = e.info;
              if ((console.log("info", t), !t)) return (0, q.tZ)(q.HY, {});
              var i = t.iconUrl,
                a = void 0 === i ? "" : i,
                n = t.backGroundUrl,
                r = t.backGroundIconUrl,
                s = void 0 === r ? "" : r,
                o = t.dataList,
                c = void 0 === o ? [] : o,
                l = t.jumpUrl,
                u = void 0 === l ? "" : l,
                d = t.confirmBtnName,
                m = void 0 === d ? "" : d;
              return (0, q.BX)(v.View, {
                className: "train-List-common-bannerV2",
                onClick: function () {
                  u && w.Z.commonNavigator(u);
                },
                children: [
                  (0, q.tZ)(v.Image, { className: "bg-img", src: n, webp: !0 }),
                  (0, q.BX)(v.View, {
                    className: "content flex ".concat(m ? "" : "space-split"),
                    children: [
                      (0, q.tZ)(v.Image, {
                        className: "left-icon",
                        src: a,
                        webp: !0,
                        lazyLoad: !0,
                        mode: "widthFix",
                      }),
                      (0, q.BX)(v.View, {
                        className: "flex flex-center",
                        children: [
                          c.length &&
                            c.map(function (e, t) {
                              return (0,
                              q.tZ)(v.View, { className: "data-item", children: (0, q.tZ)(A.ZtRichText, { space: "nbsp", nodes: w.Z.convertAppTextToHtmlStr(e) }) }, "bannerV2_data_".concat(t));
                            }),
                          !m &&
                            u &&
                            (0, q.tZ)(v.View, {
                              className: "iconfont2 ifont2-arr",
                              children: m,
                            }),
                        ],
                      }),
                      m &&
                        (0, q.tZ)(v.View, {
                          className: "right-btn flex flex-center",
                          children: m,
                        }),
                    ],
                  }),
                  (0, q.tZ)(v.Image, {
                    className: "right-bg",
                    src: s,
                    webp: !0,
                  }),
                ],
              });
            }),
            rt = p.default.memo(function (e) {
              var t = e.areas,
                i = e.isAllPreSale,
                a = e.list;
              if (!t.length) return (0, q.tZ)(q.HY, {});
              var n = (function () {
                  var e = [];
                  return (
                    null == t ||
                      t.forEach(function (t) {
                        var a = We.ZP.parseOctopusAreaV2(t);
                        (null == a ? void 0 : a.areaCode) ===
                        Oe.GrabNewUserBanner
                          ? i && e.push(a)
                          : e.push(a);
                      }),
                    e
                  );
                })(),
                r =
                  (
                    n.filter(function (e) {
                      return (
                        e.areaCode.includes("BannerV1") ||
                        e.areaCode.includes("BannerV2")
                      );
                    }) || []
                  ).length > 1,
                s = function (e) {
                  if (!e) return (0, q.tZ)(q.HY, {});
                  switch (e.areaCode) {
                    case Oe.BannerV2_CertifiedStudent:
                      return (0, q.tZ)(nt, { info: e._jsonInfo });
                    case Oe.GrabNewUserBanner:
                      return (0, q.tZ)(Qe, {
                        propStyle: "margin: 6px 6px 0 6px",
                        isAllPreSale: i,
                        info: e._jsonInfo,
                      });
                    case Oe.SecKillBanner:
                      return (0, q.tZ)(et, { list: a });
                    case Oe.BannerV1_UserTrainRights:
                      return (0, q.tZ)(Je, { info: e._jsonInfo });
                    case Oe.SpecialDayBanner:
                      return (0, q.tZ)($e, {
                        info: e._jsonInfo,
                        propStyle: "margin: 6px 6px 0 6px",
                      });
                    default:
                      return (0, q.tZ)(q.HY, {});
                  }
                };
              return r
                ? (0, q.tZ)(v.Swiper, {
                    interval: 3e3,
                    autoplay: !0,
                    vertical: !0,
                    circular: !0,
                    className: "train-list-cross-banner-swiper",
                    children:
                      n &&
                      n.map(function (e, t) {
                        return (0,
                        q.tZ)(v.SwiperItem, { className: "banner-swiper-item", children: s(e) }, "list_cross_banner".concat(t));
                      }),
                  })
                : s(n[0]);
            }),
            st = function (e) {
              var t = e.list,
                i = (0, p.useState)(!1),
                a = (0, le.Z)(i, 2),
                n = a[0],
                r = a[1];
              (0, p.useEffect)(function () {
                setTimeout(function () {
                  r(!0);
                }, 3e3);
              }, []);
              var s = (function () {
                var e = "",
                  i = t.filter(function (e) {
                    return !(!e.SeatCount && !e._hasSubTrainSeat);
                  }),
                  a = i.length > 0,
                  n = t.some(function (e) {
                    return e._hasSubTrainSeat;
                  });
                return (
                  a || n
                    ? !a && n
                      ? (e = "该路线".concat(
                          i.length,
                          "个车次无票，已找到隐藏余票"
                        ))
                      : a && (e = "检索到直达车次尚有余票，可正常下单")
                    : (e = "检索到车次全部售罄，可切换条件看看"),
                  e
                );
              })();
              return (0, q.BX)(v.View, {
                className:
                  "train-list-smart-jianlou-banner flex flex-center ".concat(
                    n ? "hidden" : ""
                  ),
                children: [
                  (0, q.tZ)(v.Image, {
                    className: "left-icon",
                    webp: !0,
                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/img_jlsq@3x.webp",
                  }),
                  (0, q.tZ)(v.View, { className: "split-line" }),
                  (0, q.tZ)(v.View, { className: "desc", children: s }),
                ],
              });
            },
            ot = function (e, t, i) {
              var a =
                b()(e)
                  .subtract(t || 0, "day")
                  .format("YYYY-MM-DD") +
                " " +
                (i || "00:00");
              return b()(a).valueOf();
            },
            ct = function (e) {
              var t = e.trainList,
                i = e.hotLineInfo,
                a = (0, p.useState)(!1),
                n = (0, le.Z)(a, 2),
                r = n[0],
                s = n[1],
                o = (0, p.useState)(!1),
                c = (0, le.Z)(o, 2),
                l = c[0],
                u = c[1],
                d = (0, p.useRef)(!1);
              (0, p.useEffect)(function () {
                return (
                  S().eventCenter.on("LIST_SCROLL", function () {
                    d.current ? (d.current = !1) : u(!0);
                  }),
                  function () {
                    S().eventCenter.off("LIST_SCROLL");
                  }
                );
              }, []);
              var m = (0, p.useMemo)(
                function () {
                  for (var e = !1, i = {}, a = [], n = 0; n < t.length; n++) {
                    var r = t[n],
                      o = r.DepartStation,
                      c = r._selectDate,
                      l = r.PreSaleTime,
                      u = ot(c, I.ET.preSaleDays - 1, l);
                    if ((b()(u).isBefore(b()()) && (e = !0), !i[o])) {
                      i[o] = u;
                      var d = { station: o, time: +u };
                      a.push(d);
                    }
                  }
                  return e ? (s(!0), []) : (s(!1), a);
                },
                [t]
              );
              if (null != i && i.title) {
                var h = i.title,
                  f = i.focusTxt;
                return r
                  ? (0, q.tZ)(v.View, {})
                  : (0, q.BX)(v.View, {
                      children: [
                        (0, q.tZ)(v.View, {
                          className: " _Mb _lA _mA _Z _v _nA",
                          children: (0, q.BX)(v.View, {
                            className: " _p _oA _dc _yc _pA -ua",
                            children: [
                              (0, q.BX)(v.View, {
                                className: " _i _l _m _ob",
                                children: [
                                  (0, q.tZ)(v.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/07/img_HCQS_lb_y.webp",
                                    className: " _u _q _t _ru _lc",
                                    webp: !0,
                                  }),
                                  (0, q.tZ)(v.Image, {
                                    src: h,
                                    className: " _Do _De",
                                    webp: !0,
                                  }),
                                  (0, q.BX)(v.View, {
                                    className: " _eg _R _p _i _l",
                                    onClick: function () {
                                      (d.current = !0), u(!l);
                                    },
                                    children: [
                                      h &&
                                        (0, q.tZ)(v.Image, {
                                          src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/07/img_HCQS_rm.png",
                                          className: " _Ye _og _Va",
                                        }),
                                      (0, q.tZ)(A.ZtRichText, {
                                        nodes: f,
                                        className: " _sA _no",
                                      }),
                                      (0, q.tZ)(v.View, {
                                        className: "ifont-arr iconfont ".concat(
                                          l ? " _qA" : " _rA"
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              !l &&
                                (0, q.tZ)(v.View, {
                                  className: " _qd _i _k _l _ol _pb",
                                  children: m.map(function (e, t) {
                                    return (0,
                                    q.BX)(q.HY, { children: [(0, q.BX)(v.View, { className: " _i _Z", children: [(0, q.tZ)(v.View, { className: " _j _o _qc _Xb _sd", children: e.station }), (0, q.tZ)(v.View, { className: " _j _o _qc _x _bp", children: b()(e.time).format("MM月DD日 HH:mm") })] }, t), t !== m.length - 1 && (0, q.tZ)(v.View, { className: " _Rl _Yq _tA" })] });
                                  }),
                                }),
                            ],
                          }),
                        }),
                        (0, q.tZ)(v.View, {
                          className: " _pe _lA _mA _Mb _Z",
                          children: (0, q.BX)(v.View, {
                            className: " _p _oA _dc _yc _pA -ua",
                            children: [
                              (0, q.BX)(v.View, {
                                className: " _i _l _m _ob",
                                children: [
                                  (0, q.tZ)(v.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/07/img_HCQS_lb_y.webp",
                                    className: " _u _q _t _ru _lc",
                                    webp: !0,
                                  }),
                                  (0, q.tZ)(v.Image, {
                                    src: h,
                                    className: " _Do _De",
                                    webp: !0,
                                  }),
                                  (0, q.BX)(v.View, {
                                    className: " _eg _R _p _i _l",
                                    children: [
                                      h &&
                                        (0, q.tZ)(v.Image, {
                                          src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/07/img_HCQS_rm.png",
                                          className: " _Ye _og _Va",
                                        }),
                                      (0, q.tZ)(A.ZtRichText, {
                                        nodes: f,
                                        className: " _sA _no",
                                      }),
                                      (0, q.tZ)(v.View, {
                                        className: "ifont-arr iconfont ".concat(
                                          l ? " _qA" : " _rA"
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              !l &&
                                (0, q.tZ)(v.View, {
                                  className: " _qd _i _k _l _ol _pb",
                                  children: m.map(function (e, t) {
                                    return (0,
                                    q.BX)(q.HY, { children: [(0, q.BX)(v.View, { className: " _i _Z", children: [(0, q.tZ)(v.View, { className: " _j _o _qc _Xb _sd", children: e.station }), (0, q.tZ)(v.View, { className: " _j _o _qc _x _bp", children: b()(e.time).format("MM月DD日 HH:mm") })] }, t), t !== m.length - 1 && (0, q.tZ)(v.View, { className: " _Rl _Yq _tA" })] });
                                  }),
                                }),
                            ],
                          }),
                        }),
                      ],
                    });
              }
            },
            lt = p.default.memo(function (e) {
              var t = e.stations,
                i = void 0 === t ? [] : t,
                a = e.isScrollUp,
                n = e.onSelectStation,
                r = void 0 === n ? function () {} : n;
              return i && 0 !== i.length
                ? (0, q.tZ)(v.View, {
                    className: "train-virtual-stations-filter ".concat(
                      a ? "top0" : ""
                    ),
                    children: (0, q.tZ)(_e, {
                      stations: i,
                      source: "virtual",
                      onSelectStation: r,
                    }),
                  })
                : (0, q.tZ)(q.HY, {});
            }),
            ut = p.default.memo(function (e) {
              var t = e.tabListLen,
                i = e.isSaleTimeMode,
                a = e.isReschedule,
                n = e.hasTrainList,
                r = e.stations,
                s = e.virtualStations;
              return (0,
              q.tZ)(v.Block, { children: (0, q.BX)(v.View, { children: [(0, q.tZ)(v.View, { className: "train-list-scroll-place-holder\n        ".concat(t > 1 && !a && !i ? "" : "no-tap", "\n      ") }), (0, q.tZ)(v.View, { className: "train-list-scroll-place-holder-rec\n      ".concat(n && r.length > 0 ? "" : "no-rec", "\n      ") }), (0, q.tZ)(v.View, { className: "virtual-place-holder ".concat((null == s ? void 0 : s.length) > 0 ? "" : "no-rec") })] }) });
            }),
            dt = [
              "shareTrains",
              "data",
              "isStudent",
              "__navigator",
              "$taroTimestamp",
              "date",
              "isReschedule",
            ],
            mt = Z.default.isTieyou,
            ht = "Bus",
            ft = "SmartTravel",
            pt = "Plane",
            gt = {
              ticketOnly: !1,
              directOnly: !1,
              student: !1,
              isCanPointsPay: !1,
              isShared: !1,
              combineSeats: !1,
              isCanSilent: !1,
            },
            St =
              (0, T.h)(!0)(
                (tt = (function (e) {
                  (0, m.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var a;
                    return (
                      (0, l.Z)(this, i),
                      (a = t.call(this, e)),
                      (0, f.Z)(
                        (0, d.Z)(a),
                        "getSmartRequestParams",
                        function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "bottomRec",
                            i = a.state,
                            n = i.selectDate,
                            r = i.smartTravelTabInfo,
                            s = i.smartFilterConditions,
                            c = i.trainSearchCondition,
                            l = i.smartStations,
                            u = i.virtualStations;
                          if (!r || !r.smartTripInfo) return {};
                          var d = r.smartTripInfo,
                            m = d.fromLocation,
                            h = d.fromStationType,
                            f = d.fromAreaId,
                            p = d.toLocation,
                            g = d.toStationType,
                            S = d.toAreaId,
                            v = {
                              fromLocation: m,
                              fromStationType: h,
                              fromAreaId: f,
                              toLocation: p,
                              toStationType: g,
                              toAreaId: S,
                              departDate: n,
                            };
                          switch (t) {
                            case "bottomRec":
                              v.fromPage = "trainTraffic";
                              var T = { cardType: e };
                              if (
                                (w.Z.notEmptyArray(s) &&
                                  (T = (0, o.Z)(
                                    (0, o.Z)({}, T),
                                    Pe.Z.getSmartFilterResParams(s)
                                  )),
                                w.Z.notEmptyArray(l))
                              ) {
                                var Z = [];
                                l.map(function (e) {
                                  e.isSelected &&
                                    Z.push({
                                      stationType: e.stationType,
                                      stationName: e.stationName,
                                    });
                                }),
                                  (T.tripStationInfoList = Z);
                              }
                              w.Z.isNotEmptyObj(T) && (v.optionalParameter = T);
                              break;
                            case "interlude":
                              (v.fromStationFlag = !1),
                                (v.toStationFlag = !1),
                                (v.fromStationName =
                                  null == c ? void 0 : c.departureName),
                                (v.toStationName =
                                  null == c ? void 0 : c.arrivalName),
                                (v.multiFlag = 1);
                              break;
                            case "virtual":
                              (v.fromStationFlag = !1),
                                (v.toStationFlag = !1),
                                (v.fromStationName =
                                  null == c ? void 0 : c.departureName),
                                (v.toStationName =
                                  null == c ? void 0 : c.arrivalName);
                              var y = {};
                              if (w.Z.notEmptyArray(u)) {
                                var N = [];
                                u.map(function (e) {
                                  e.isSelected &&
                                    N.push({
                                      stationType: e.stationType,
                                      stationName: e.stationName,
                                    });
                                }),
                                  (y.tripStationInfoList = N);
                              }
                              w.Z.isNotEmptyObj(y) && (v.optionalParameter = y);
                          }
                          return v;
                        }
                      ),
                      (0, f.Z)((0, d.Z)(a), "handleSmartRes", function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t = a.state,
                          i = t.smartSortType,
                          n = t.smartSortAscending,
                          r = t.smartStations,
                          s = e.data,
                          c = void 0 === s ? null : s,
                          l = e.resultCode;
                        if (1 === l && c) {
                          var u,
                            d = [];
                          null === (u = c.tripStationInfoList) ||
                            void 0 === u ||
                            u.forEach(function (e) {
                              var t;
                              (
                                null ===
                                  (t = r.find(function (t) {
                                    return t.stationName === e.stationName;
                                  })) || void 0 === t
                                  ? void 0
                                  : t.isSelected
                              )
                                ? d.push(
                                    (0, o.Z)(
                                      (0, o.Z)({}, e),
                                      {},
                                      { isSelected: !0 }
                                    )
                                  )
                                : d.push(e);
                            });
                          var m = w.Z.notEmptyArray(c.trips)
                            ? c.trips
                                .map(function (e) {
                                  var t = e.seatTicketLefts.map(function (e) {
                                    return (0,
                                    o.Z)((0, o.Z)({}, e), {}, { seatTicketLeftDesc: B.ZP.convertAppRichText(e.seatTicketLeftDesc) });
                                  });
                                  return (0,
                                  o.Z)((0, o.Z)({}, e), {}, { seatTicketLefts: t, diff: b()(e.arriveDate).diff(b()(e.startDate), "day") });
                                })
                                .filter(function (e) {
                                  return e.schemeInfoV1;
                                })
                            : [];
                          m =
                            i === Ze.Z.SMART_RECOMMEND_SORT
                              ? m
                              : a.filterSmartListByCon(m, {
                                  smartSortType: i,
                                  smartSortAscending: n,
                                });
                          var h = Object.assign(
                            {},
                            (0, o.Z)(
                              (0, o.Z)({}, c),
                              {},
                              { trips: m, filterSmartTrips: m.slice(0, 30) }
                            )
                          );
                          a.setState({
                            smartZhongZhuanInfo: h,
                            smartStations: d,
                          });
                        } else a.setState({ smartZhongZhuanInfo: null });
                      }),
                      (0, f.Z)(
                        (0, d.Z)(a),
                        "filterSmartListByCon",
                        function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            i = e,
                            n = a.state.selectDate,
                            r = t.smartSortType,
                            s = t.smartSortAscending;
                          return r && w.Z.notEmptyArray(i)
                            ? (r === Ze.Z.SMART_RECOMMEND_SORT &&
                                (i = i.sort(function (e, t) {
                                  return t.score - e.score;
                                })),
                              r === Ze.Z.SMART_COST_TIME &&
                                (i = i.sort(function (e, t) {
                                  return e.totalMinutes - t.totalMinutes;
                                })),
                              r === Ze.Z.SMART_DEP_TIME &&
                                (i = s
                                  ? i.sort(function (e, t) {
                                      return b()(
                                        ""
                                          .concat(n, " ")
                                          .concat(e.startTime || "00:00", ":01")
                                      ).isBefore(
                                        b()(
                                          ""
                                            .concat(n, " ")
                                            .concat(t.startTime || "00:00")
                                        )
                                      )
                                        ? -1
                                        : 1;
                                    })
                                  : i.sort(function (e, t) {
                                      return b()(
                                        ""
                                          .concat(n, " ")
                                          .concat(t.startTime || "00:00", ":01")
                                      ).isAfter(
                                        b()(
                                          ""
                                            .concat(n, " ")
                                            .concat(e.startTime || "00:00")
                                        )
                                      )
                                        ? 1
                                        : -1;
                                    })),
                              i)
                            : i;
                        }
                      ),
                      (0, f.Z)(
                        (0, d.Z)(a),
                        "clickSmartTransitBox",
                        (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e(t, i) {
                              var n, r, o, c, l, u, d, m;
                              return (0, s.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((n = t.trip),
                                        (r = t.orderSource),
                                        (o = void 0 === r ? "smarttl" : r),
                                        (c = n.schemeInfoV1),
                                        !i || !n)
                                      ) {
                                        e.next = 9;
                                        break;
                                      }
                                      return (
                                        (l = n.startDate + " " + n.startTime),
                                        (e.next = 6),
                                        a.onInterceptTipsAsync(l)
                                      );
                                    case 6:
                                      if (e.sent) {
                                        e.next = 9;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 9:
                                      "smarttlnd" === o &&
                                        a.ubtTrace(197676, {
                                          bizKey:
                                            "mini_t_list_nodirectreco_click",
                                        }),
                                        (u = a.state.isReschedule),
                                        (d = (0, Te.j)()),
                                        (m = ""
                                          .concat(d, "?orderSource=")
                                          .concat(o, "&schemeInfoV1=")
                                          .concat(encodeURIComponent(c))),
                                        u &&
                                          (m = "".concat(
                                            m,
                                            "&isReschedule=true"
                                          )),
                                        a.navigateTo({ url: m });
                                    case 15:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t, i) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                      (0, f.Z)((0, d.Z)(a), "switchTab", function (e) {
                        a.props.onSwitchTab && a.props.onSwitchTab(e);
                      }),
                      (0, f.Z)((0, d.Z)(a), "onClickSmartSortBy", function (e) {
                        var t = a.state,
                          i = t.smartSortType,
                          n = t.smartSortAscending,
                          r = t.smartZhongZhuanInfo,
                          s = (r || {}).trips,
                          o = void 0 === s ? [] : s;
                        w.Z.notEmptyArray(o) &&
                          ((r.filterSmartTrips = a
                            .filterSmartListByCon(o, {
                              smartSortAscending: !n,
                              smartSortType: e,
                            })
                            .slice(0, 30)),
                          e !== Ze.Z.SMART_DEP_TIME
                            ? e !== i &&
                              a.setState({
                                smartSortType: e,
                                smartZhongZhuanInfo: r,
                              })
                            : a.setState({
                                smartSortAscending: !n,
                                smartSortType: e,
                                smartZhongZhuanInfo: r,
                              }));
                      }),
                      (0, f.Z)((0, d.Z)(a), "confirmSmartFilter", function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                        a.setState({ smartFilterConditions: e }, function () {
                          a.getSmartZhongZhuanCardInfo(function () {
                            a.getSmartZhongZhuanInfo(!0);
                          });
                        });
                      }),
                      (0, f.Z)((0, d.Z)(a), "filterByCanPoint", function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                        if (!e) return [];
                        var t = a.state.filterTagMap,
                          i = void 0 === t ? {} : t,
                          n = i.isCanPointsPay,
                          r = void 0 !== n && n;
                        return r
                          ? e.filter(function (e) {
                              return e.IsCanPointsPay;
                            })
                          : e;
                      }),
                      (0, f.Z)((0, d.Z)(a), "filterByCanSilent", function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                        if (!e) return [];
                        var t = a.state.filterTagMap,
                          i = void 0 === t ? {} : t,
                          n = i.isCanSilent,
                          r = void 0 !== n && n;
                        return r
                          ? e.filter(function (e) {
                              return e.IsCanSilent;
                            })
                          : e;
                      }),
                      (0, f.Z)((0, d.Z)(a), "filterBySeats", function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                        if (!e) return [];
                        var t = JSON.parse(JSON.stringify(e)),
                          i = a.state,
                          n = i.filterTagMap,
                          r = void 0 === n ? {} : n,
                          s = i.subTrainSeats,
                          o = i.fromPage,
                          c = r.combineSeats,
                          l = void 0 !== c && c;
                        if (!l) return e;
                        var u = [];
                        return (
                          l &&
                            (u = t.filter(function (e) {
                              var t = s.find(function (t) {
                                  return t.trainNo === e.TrainNumber;
                                }),
                                i =
                                  "h5SmartSystem" === o
                                    ? [1, 2, 3].includes(
                                        null == t ? void 0 : t.type
                                      )
                                    : [1, 2, 3, 4, 5].includes(
                                        null == t ? void 0 : t.type
                                      );
                              return !e.isPreSale && t && i;
                            })),
                          u
                        );
                      }),
                      (0, f.Z)((0, d.Z)(a), "filterByTicketOnly", function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                        if (!e) return [];
                        var t = a.state.filterTagMap;
                        return null != t && t.ticketOnly
                          ? e.filter(function (e) {
                              return !(!e.SeatCount && !e._hasSubTrainSeat);
                            })
                          : e;
                      }),
                      (0, f.Z)((0, d.Z)(a), "filterByShared", function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                        if (!e) return [];
                        var t = a.state.filterTagMap,
                          i = void 0 === t ? {} : t;
                        return null != i && i.isShared
                          ? e.filter(function (e) {
                              return e._isSharedFromFriend;
                            })
                          : e;
                      }),
                      (0, f.Z)((0, d.Z)(a), "onClickFilterTag", function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t = e.filterTag,
                          i = e.station,
                          n = e.needRefresh,
                          r = (0, o.Z)({}, a.state.preFilterTagMap);
                        if (
                          "isCanPointsPay" === t &&
                          a.props.isPointReschedule &&
                          r[t]
                        )
                          return (0, k.showToast)("已为您筛选可积分兑换车次");
                        if ("station" === t) {
                          var s = (0, ue.Z)(a.state.stations);
                          return (
                            s.find(function (e) {
                              return e.name === i.name;
                            }) &&
                              ((s.find(function (e) {
                                return e.name === i.name;
                              }).isSelected = !s.find(function (e) {
                                return e.name === i.name;
                              }).isSelected),
                              (s.find(function (e) {
                                return e.name === i.name;
                              }).isPreSelected = !s.find(function (e) {
                                return e.name === i.name;
                              }).isPreSelected)),
                            void a.setState({ stations: s }, function () {
                              a.renderFiltered(), a.getSmartRecommendList();
                            })
                          );
                        }
                        (r[t] = !r[t]),
                          a.setState(
                            n
                              ? {
                                  filterTagMap: (0, o.Z)({}, r),
                                  preFilterTagMap: (0, o.Z)({}, r),
                                }
                              : { preFilterTagMap: (0, o.Z)({}, r) },
                            function () {
                              if (
                                ("student" == t &&
                                  a.setState({ clickStudentNeedReload: !0 }),
                                n)
                              )
                                return a.renderFiltered();
                            }
                          );
                      }),
                      (0, f.Z)(
                        (0, d.Z)(a),
                        "onListScroll",
                        Pe.Z.throttle(function (e) {
                          a.onScrollDragStart &&
                            g.eventCenter.trigger("LIST_SCROLL");
                          var t = function () {
                            clearTimeout(a.clearStStoreTimer),
                              (a.clearStStoreTimer = null);
                          };
                          if (
                            (a.setState({ isFoldShareBtn: !0 }),
                            a.clearStStoreTimer && t(),
                            2 === a.scrollTopNumStore.length &&
                              a.scrollTopNumStore.shift(),
                            e.detail.scrollTop < 0)
                          )
                            return (
                              t(),
                              (a.scrollTopNumStore = []),
                              void a.setState({ scrollIntoViewId: "" })
                            );
                          if (
                            (a.scrollTopNumStore.push(e.detail.scrollTop),
                            (a.clearStStoreTimer = setTimeout(function () {
                              t(),
                                (a.scrollTopNumStore = []),
                                a.setState({ isFoldShareBtn: !1 });
                            }, 600)),
                            2 === a.scrollTopNumStore.length)
                          ) {
                            var i = (0, le.Z)(a.scrollTopNumStore, 2);
                            if (i[0] > i[1]) return void a.onSwipeUp();
                            a.onSwipeDown();
                          }
                          a.setState({ scrollIntoViewId: "" }),
                            a.onscrolling(e);
                        }, 200)
                      ),
                      (0, f.Z)(
                        (0, d.Z)(a),
                        "onDragStart",
                        Pe.Z.throttle(function (e) {
                          (a.onScrollDragStart = !0), a.onscrolling(e);
                        }, 50)
                      ),
                      (0, f.Z)(
                        (0, d.Z)(a),
                        "onDragEnd",
                        Pe.Z.throttle(function (e) {
                          a.onscrolling(e);
                        }, 50)
                      ),
                      (0, f.Z)(
                        (0, d.Z)(a),
                        "switchAdvancedFilter",
                        function (e) {
                          a.setState({
                            isShowSmartFilterBar: !!(
                              e && e.intersectionRatio > 0
                            ),
                          }),
                            console.log("observeCallback ====", e);
                        }
                      ),
                      (a.state = {
                        isLoaded: !1,
                        trainListShowNum: 40,
                        trainViewList: [],
                        moreTrainVisible: !1,
                        scrollTop: 0,
                        smartZhongZhuanInfo: null,
                        tripCards: [],
                        subTrainSeats: [],
                        recommendLine: "",
                        showRecommendTab: "",
                        isHouBuConfig: !1,
                        isShowNoTrainBlank: !1,
                        canShowNoNonstopTips: !1,
                        trainEmptyTipVisible: !1,
                        filterTrainType: 1,
                        filterTrainTime: 1,
                        sortType: "DepartTimeStamp",
                        sortAscending: !0,
                        isFilterViewAnimation: !1,
                        isFilterGCSelected: !1,
                        isFilterDSelected: !1,
                        isFilterZTKSelected: !1,
                        isFilterYLSelected: !1,
                        isFilterEarlyMorningSelected: !1,
                        isFilterMorningSelected: !1,
                        isFilterAfternoonSelected: !1,
                        isFilterNightSelected: !1,
                        filterTagMap: gt,
                        preFilterTagMap: gt,
                        selectDate: "",
                        hasFlight: !0,
                        smartTravelTabInfo: {},
                        isReschedule: !1,
                        stations: [],
                        isShowBlank: !1,
                        isGrabSuccessGuest: !0,
                        isShowAnchorTabOfTimeLine: !1,
                        scrollIntoViewId: null,
                        smartSortType: Ze.Z.SMART_RECOMMEND_SORT,
                        smartSortAscending: !1,
                        smartFilterConditions: [],
                        isShowSmartFilterBar: !1,
                        transferAreaNames: [],
                        isShareMode: !1,
                        trainViewModeType: "",
                        isShowShareGuide: !1,
                        isFoldShareBtn: !1,
                        isAlternateMode: !1,
                        isShowAlternateList: !1,
                        alternateListData: [],
                        isShowAlternateAbnormal: !1,
                        alternateAbnormalData: null,
                        preCandidateInfo: null,
                        hotelTagCashBack: null,
                        isShowAlternatedot: !1,
                        alternatedotAni: {},
                        isShowAlternateGuide: !1,
                        isListSwipeStart: !1,
                        recommendRuoteInfo: null,
                        trainCrossBanners: [],
                        smartStations: [],
                        virtualStations: [],
                        smartVirtualList: [],
                        isScrollUp: !1,
                      }),
                      (a.trainList = []),
                      (a.rawList = []),
                      (a.noDirectList = []),
                      (a.isFilterResetView = !1),
                      (a.preLogin12306 = !1),
                      (a.scrollTopNumStore = []),
                      (a.historyScrollIntoViewId = null),
                      (a.timeLineAnchors = [
                        {
                          name: "06:00-12:00",
                          hasAnchored: !1,
                          start: 360,
                          end: 720,
                        },
                        {
                          name: "12:00-18:00",
                          hasAnchored: !1,
                          start: 720,
                          end: 1080,
                        },
                        {
                          name: "18:00-24:00",
                          hasAnchored: !1,
                          start: 1080,
                          end: 1440,
                        },
                      ]),
                      (a.smartRequestParams = {}),
                      (a.selectedCardType = {}),
                      (a.smartRecList = []),
                      (a.isLoadVirtualList = !1),
                      a
                    );
                  }
                  return (
                    (0, u.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t = (0, g.getCurrentInstance)().router.params || {},
                            i = t.isGaotieOnly,
                            a = void 0 !== i && i,
                            n = t.isStudent,
                            r = void 0 === n ? "0" : n,
                            s = t.shareTrains,
                            c = void 0 === s ? "" : s,
                            l = t.shareOwner,
                            u = void 0 === l ? "" : l,
                            d = t.isTicketOnly,
                            m = void 0 === d ? "0" : d,
                            h = t.fromPage,
                            f = void 0 === h ? "" : h,
                            p = this.props,
                            S = p.trainSearchCondition,
                            v = p.departInfo,
                            T = p.arriveInfo,
                            Z = p.selectDate,
                            w = p.pageId,
                            y = p.dstation,
                            N = p.isReschedule,
                            b = p.tabListLen,
                            C = void 0 === b ? 0 : b,
                            V = p.isPointReschedule,
                            _ = "true" == a ? 6 : 1,
                            x = this.state.filterTagMap;
                          (this.pageId = w), this.initShareList(c, u);
                          var D = (0, o.Z)(
                            (0, o.Z)({}, x),
                            {},
                            {
                              student: "1" == r,
                              isShared: this.shareTrains.length > 0,
                              ticketOnly: "1" === m,
                              isCanPointsPay: 1 == V,
                            }
                          );
                          this.setState(
                            {
                              trainViewModeType:
                                "robOpeningTimeQuery" === f
                                  ? "robOpeningTimeQuery"
                                  : "",
                              filterTrainType: _,
                              isGaotieOnly: "true" == a,
                              departInfo: v,
                              arriveInfo: T,
                              trainSearchCondition: S,
                              filterTagMap: D,
                              preFilterTagMap: D,
                              selectDate: Z,
                              tabListLen: C,
                              fromPage: f,
                              isTicketOnly: m,
                            },
                            function () {
                              e.selectTrainModel(_),
                                e.getUserLabels(),
                                e.getHouBuConfig(),
                                setTimeout(function () {
                                  e.check12306Account();
                                }, 1e3);
                              var t = e.props.smartTravelTabInfo.smartTripInfo;
                              e.setState(
                                {
                                  smartTravelTabInfo:
                                    e.props.smartTravelTabInfo,
                                },
                                function () {
                                  (e.isLoadVirtualList = !!t && !N),
                                    e.loadData(e.props.selectDate, !!t);
                                }
                              );
                            }
                          ),
                            N && this.setState({ dstation: y }),
                            D.isCanPointsPay &&
                              (0, k.showToast)("已为您筛选可积分兑换车次"),
                            (I.ET.trainItemScanedKeyList = []);
                        },
                      },
                      {
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function (e) {
                          var t = this;
                          console.log("UNSAFE_componentWillReceiveProps", e);
                          var i = this.props,
                            a = i.hidden,
                            n = i.selectDate,
                            r = i.hasFlight,
                            s = i.isReschedule,
                            o = i.trainSearchCondition;
                          this.setState({ hasFlight: r, isReschedule: s });
                          var c = this.props.smartTravelTabInfo.smartTripInfo,
                            l = e.smartTravelTabInfo.smartTripInfo;
                          e.hidden ||
                            (a === e.hidden && n === e.selectDate) ||
                            (console.log("火车票列表组件  loadData"),
                            this.setState(
                              {
                                selectDate: e.selectDate,
                                subTrainSeats: [],
                                isShowSmartFilterBar: !1,
                                isListSwipeStart: !1,
                              },
                              function () {
                                I.ET.selectDate = e.selectDate;
                                var i = !!l;
                                (t.isLoadVirtualList = i && !s),
                                  t.loadData(e.selectDate, i);
                              }
                            )),
                            e.hidden ||
                              s ||
                              JSON.stringify(o) ===
                                JSON.stringify(e.trainSearchCondition) ||
                              this.setState(
                                {
                                  isLoaded: !1,
                                  departInfo: e.departInfo,
                                  arriveInfo: e.arriveInfo,
                                  subTrainSeats: [],
                                  isShowSmartFilterBar: !1,
                                  isListSwipeStart: !1,
                                  trainSearchCondition: e.trainSearchCondition,
                                  alternateListData: [],
                                },
                                function () {
                                  var i = !!l;
                                  (t.isLoadVirtualList = i),
                                    t.loadData(e.selectDate, i);
                                }
                              ),
                            "B" == (0, V.ie)() &&
                              !e.hidden &&
                              JSON.stringify(c) !== JSON.stringify(l) &&
                              (console.log("火车列表组件 loadSmartData"),
                              this.setState(
                                { smartTravelTabInfo: e.smartTravelTabInfo },
                                function () {
                                  (t.isLoadVirtualList = !s), t.loadSmartData();
                                }
                              ));
                        },
                      },
                      {
                        key: "loadData",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e(t) {
                              var i,
                                a,
                                n,
                                r,
                                o,
                                c,
                                l = this,
                                u = arguments;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i =
                                            !(
                                              u.length > 1 && void 0 !== u[1]
                                            ) || u[1]),
                                          (a = this.state),
                                          (n = a.isLoaded),
                                          (r = a.fromPage),
                                          n &&
                                            (0, k.showLoading)({
                                              title: "加载中",
                                            }),
                                          this.setState({
                                            scrollTop: Math.random(),
                                          }),
                                          this.setState({ subTrainSeats: [] }),
                                          (e.next = 7),
                                          this.getTrainListRecommend()
                                        );
                                      case 7:
                                        if (
                                          ((o = this.props.isReschedule),
                                          (c = null),
                                          o)
                                        ) {
                                          e.next = 13;
                                          break;
                                        }
                                        return (
                                          (e.next = 12),
                                          this.getIntelFlightRecommend()
                                        );
                                      case 12:
                                        c = e.sent;
                                      case 13:
                                        this.getGrabTicketSucRateInfo(t).then(
                                          function () {
                                            l.setState({ isLoaded: !0 }),
                                              o ||
                                                (c ||
                                                  "h5SmartSystem" === r ||
                                                  l.getTransferRouteRecommend(),
                                                l.judgeShowHouBuPop(),
                                                l.getPreCandidateInfo(),
                                                l.getTrainCrossBanner()),
                                              i && l.loadSmartData(),
                                              (0, k.hideLoading)(),
                                              l.onShowShareGuiode();
                                          }
                                        );
                                      case 14:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "initShareList",
                        value: function (e, t) {
                          if (
                            ((this.shareTrains =
                              this.transShareTrainsFromStr(e)),
                            this.shareTrains.length > 0)
                          ) {
                            var i,
                              a = /^(\d{3})\S{4}(\d{4})$/;
                            (this.isShareOwner =
                              (null == t
                                ? void 0
                                : t.replace(a, "$1****$2")) ===
                                (null === (i = P.ZP.userName) || void 0 === i
                                  ? void 0
                                  : i.replace(a, "$1****$2")) && !!t),
                              this.ubtTrace("s_trn_z_trace_10320660960", {
                                bizKey:
                                  "z_mini_listPage_screenshot_shareCard_show",
                                userType: this.isShareOwner ? 1 : 0,
                              });
                          }
                        },
                      },
                      {
                        key: "getSubTrainSeats4Train",
                        value: function (e) {
                          var t,
                            i = this;
                          if (
                            1 === e.resultCode &&
                            (null === (t = e.subTrainSeats) || void 0 === t
                              ? void 0
                              : t.length) > 0
                          ) {
                            var a = this.state,
                              n = a.selectDate,
                              r = a.fromPage,
                              s = e.subTrainSeats.map(function (e) {
                                return (0,
                                o.Z)((0, o.Z)({ departDate: n }, e), {}, { smartSeatCardTripInfo: e.smartSeatCardTripInfo ? (0, o.Z)((0, o.Z)({}, e.smartSeatCardTripInfo), {}, { _tagDesc: 1 === e.smartSeatCardTripInfo.type ? "补票".concat(Math.abs(e.smartSeatCardTripInfo.subTrainSegments[0].toStationDiff), "站") : "" }) : null });
                              });
                            this.setState({ subTrainSeats: s }),
                              s.some(function (e) {
                                return 3 == e.type;
                              }) &&
                                this.ubtTrace(197675, {
                                  exposureType: "normal",
                                  bizKey: "z_mini_list_zhcx_plan_show",
                                  type: "cross",
                                }),
                              s.some(function (e) {
                                return 1 == e.type;
                              }) &&
                                this.ubtTrace(197675, {
                                  exposureType: "normal",
                                  bizKey: "z_mini_list_zhcx_plan_show",
                                  type: "buy_grab",
                                }),
                              s.some(function (e) {
                                return 4 == e.type;
                              }) &&
                                this.ubtTrace(197675, {
                                  exposureType: "normal",
                                  bizKey: "z_mini_list_zhcx_plan_show",
                                  type: "grab_buy",
                                }),
                              s.some(function (e) {
                                return 2 == e.type;
                              }) &&
                                this.ubtTrace(197675, {
                                  exposureType: "normal",
                                  bizKey: "z_mini_list_zhcx_plan_show",
                                  type: "combine",
                                }),
                              s.some(function (e) {
                                return 5 == e.type;
                              }) &&
                                this.ubtTrace(197675, {
                                  exposureType: "normal",
                                  bizKey: "z_mini_list_zhcx_plan_show",
                                  type: "combine_cross",
                                }),
                              "h5SmartSystem" === r &&
                                s.forEach(function (e) {
                                  (3 !== e.type &&
                                    2 !== e.type &&
                                    1 !== e.type) ||
                                    (i.ubtTrace(
                                      "TZWList_TrainTab_ResTicketEntry_exposure",
                                      {
                                        PageId: i.pageId,
                                        DepartDate: n,
                                        DepartStation: e.fromStationName,
                                        ArriveStation: e.toStationName,
                                        scmType:
                                          3 === e.type
                                            ? "多买几站"
                                            : 2 === e.type
                                            ? "同车换座"
                                            : "上车补票",
                                      }
                                    ),
                                    i.ubtTrace("TZWList_Smart_Smart_exposure", {
                                      fromSource: "SmartSeatTrainRecommend",
                                      PageId: i.pageId,
                                      Status: "火车推荐智能坐席方案",
                                      Trip: [
                                        {
                                          index: 0,
                                          scmType:
                                            3 === e.type
                                              ? "跨站"
                                              : 2 === e.type
                                              ? "组合座"
                                              : "上车补",
                                          Source:
                                            3 === e.type
                                              ? "SmartJianlou_miniTrainListCross"
                                              : 2 === e.type
                                              ? "h5TrainListSmartSeatCombine"
                                              : "h5TrainListSmartSeatBuyGrab",
                                          tripid: e.tripId,
                                        },
                                      ],
                                      Vid: P.ZP.cid + new Date().getTime(),
                                    }));
                                }),
                              this.ubtTrace("s_trn_z_trace_10320660960", {
                                bizKey: "z_mini_list_noDirect_show",
                              });
                          }
                        },
                      },
                      {
                        key: "loadSmartData",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t = this;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        this.props.isReschedule ||
                                          this.getSmartZhongZhuanCardInfo(
                                            function () {
                                              t.getSmartZhongZhuanInfo();
                                            }
                                          ),
                                          this.isLoadVirtualList &&
                                            this.getSmartVirtualList(),
                                          this.getSmartRecommendList();
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getTrainListRecommend",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t, i, a;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          (0, C.Xa3)()
                                        );
                                      case 3:
                                        1 === (i = e.sent).resultCode &&
                                          null !== (t = i.hotelData) &&
                                          void 0 !== t &&
                                          t.hotelTagCashBackJson &&
                                          this.setState({
                                            hotelTagCashBack:
                                              null === (a = i.hotelData) ||
                                              void 0 === a
                                                ? void 0
                                                : a.hotelTagCashBackJson,
                                          }),
                                          (e.next = 10);
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(0)),
                                          console.log(e.t0);
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 7]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getUserLabels",
                        value: function () {
                          var e = this;
                          P.ZP.isLogin
                            ? (0, he.wu)()
                                .then(function (t) {
                                  if (1 === t.resultCode) {
                                    var i,
                                      a = !1;
                                    null === (i = t.labels) ||
                                      void 0 === i ||
                                      i.forEach(function (e) {
                                        111042 === e.labelCode &&
                                          "1" === e.labelValue &&
                                          (a = !0);
                                      }),
                                      e.setState({ isGrabSuccessGuest: a });
                                  } else console.warn("19786/getUserLabels", t);
                                })
                                .catch(function (e) {
                                  console.warn("19786/getUserLabels", e);
                                })
                            : this.setState({ isGrabSuccessGuest: !1 });
                        },
                      },
                      {
                        key: "getGrabTicketSucRateInfo",
                        value: function (e) {
                          var t = this,
                            i = this.state.trainSearchCondition;
                          return new Promise(
                            (function () {
                              var a = (0, c.Z)(
                                (0, s.Z)().mark(function a(n) {
                                  return (0, s.Z)().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          (0, C.Ocq)(
                                            {
                                              departureStation: i.departureName,
                                              arriveStation: i.arrivalName,
                                              departureDate:
                                                b()(e).format("YYYYMMDD"),
                                              grabType: 0,
                                            },
                                            {
                                              checkLogin: !1,
                                              checkFrameworkLogin: !1,
                                            }
                                          )
                                            .then(
                                              (function () {
                                                var i = (0, c.Z)(
                                                  (0, s.Z)().mark(function i(
                                                    a
                                                  ) {
                                                    var r, o, c, l, u;
                                                    return (0, s.Z)().wrap(
                                                      function (i) {
                                                        for (;;)
                                                          switch (
                                                            (i.prev = i.next)
                                                          ) {
                                                            case 0:
                                                              if (
                                                                ((r =
                                                                  a.resultCode),
                                                                (o =
                                                                  a.trainSucRateList),
                                                                (c =
                                                                  a.hotLineInfo),
                                                                !(
                                                                  1 === r &&
                                                                  o &&
                                                                  o.length > 0
                                                                ))
                                                              ) {
                                                                i.next = 9;
                                                                break;
                                                              }
                                                              return (
                                                                (i.next = 4),
                                                                t.getTainList(e)
                                                              );
                                                            case 4:
                                                              (l = i.sent) &&
                                                                l.length > 0 &&
                                                                ((u =
                                                                  t.convertTrainSucRateList(
                                                                    o
                                                                  )),
                                                                (t.rawList =
                                                                  l.map(
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      if (
                                                                        u[
                                                                          e
                                                                            .TrainNumber
                                                                        ]
                                                                      ) {
                                                                        var i =
                                                                          {};
                                                                        return (
                                                                          t.isNeedShowGrabSucRate(
                                                                            e
                                                                          ) &&
                                                                            (i.SucRate =
                                                                              u[
                                                                                e.TrainNumber
                                                                              ].trainSucRate),
                                                                          u[
                                                                            e
                                                                              .TrainNumber
                                                                          ]
                                                                            .tags &&
                                                                            t.isNeedShowGrabSucTag(
                                                                              e
                                                                            ) &&
                                                                            (i.SucRateTags =
                                                                              u[
                                                                                e.TrainNumber
                                                                              ].tags),
                                                                          (i.HotTrainInfo =
                                                                            u[
                                                                              e.TrainNumber
                                                                            ].hotTrainInfo),
                                                                          Object.assign(
                                                                            {},
                                                                            e,
                                                                            i
                                                                          )
                                                                        );
                                                                      }
                                                                      return e;
                                                                    }
                                                                  )),
                                                                (t.hotLineInfo =
                                                                  c),
                                                                t.renderFiltered()),
                                                                n(),
                                                                (i.next = 13);
                                                              break;
                                                            case 9:
                                                              return (
                                                                (i.next = 11),
                                                                t.getTainList(e)
                                                              );
                                                            case 11:
                                                              t.renderFiltered(),
                                                                n();
                                                            case 13:
                                                            case "end":
                                                              return i.stop();
                                                          }
                                                      },
                                                      i
                                                    );
                                                  })
                                                );
                                                return function (e) {
                                                  return i.apply(
                                                    this,
                                                    arguments
                                                  );
                                                };
                                              })()
                                            )
                                            .catch(
                                              (function () {
                                                var i = (0, c.Z)(
                                                  (0, s.Z)().mark(function i(
                                                    a
                                                  ) {
                                                    return (0, s.Z)().wrap(
                                                      function (i) {
                                                        for (;;)
                                                          switch (
                                                            (i.prev = i.next)
                                                          ) {
                                                            case 0:
                                                              return (
                                                                console.log(a),
                                                                (i.next = 3),
                                                                t.getTainList(e)
                                                              );
                                                            case 3:
                                                              t.renderFiltered(),
                                                                n();
                                                            case 5:
                                                            case "end":
                                                              return i.stop();
                                                          }
                                                      },
                                                      i
                                                    );
                                                  })
                                                );
                                                return function (e) {
                                                  return i.apply(
                                                    this,
                                                    arguments
                                                  );
                                                };
                                              })()
                                            );
                                        case 1:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, a);
                                })
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })()
                          );
                        },
                      },
                      {
                        key: "convertTrainSucRateList",
                        value: function () {
                          var e,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            i = {},
                            a = (0, L.Z)(t);
                          try {
                            for (a.s(); !(e = a.n()).done; ) {
                              var n = e.value,
                                r = n.trainNum,
                                s = n.seatTypeSucRateList,
                                o = n.tags,
                                c = n.hotTrainInfo;
                              i[r] = {
                                trainSucRate: s[0].trainSucRate,
                                tags: o,
                                hotTrainInfo: c,
                              };
                            }
                          } catch (e) {
                            a.e(e);
                          } finally {
                            a.f();
                          }
                          return i;
                        },
                      },
                      {
                        key: "isNeedShowGrabSucRate",
                        value: function (e) {
                          return B.ZP.isGaoTie(e.TrainNumber) ||
                            B.ZP.isDongChe(e.TrainNumber)
                            ? e.SeatList.some(function (e) {
                                return (
                                  B.ZP.isSecondClassSeat(e.SeatName) &&
                                  0 === e.SeatInventory
                                );
                              })
                            : e.SeatList.some(function (e) {
                                return (
                                  (Pe.Z.isHardSeat(e.SeatName) ||
                                    Pe.Z.isHardLieSeat(e.SeatName)) &&
                                  0 === e.SeatInventory
                                );
                              });
                        },
                      },
                      {
                        key: "isNeedShowGrabSucTag",
                        value: function (e) {
                          return B.ZP.isGaoTie(e.TrainNumber) ||
                            B.ZP.isDongChe(e.TrainNumber)
                            ? e.SeatList.some(function (e) {
                                return (
                                  B.ZP.isSecondClassSeat(e.SeatName) &&
                                  0 === e.SeatInventory
                                );
                              }) &&
                                e.SeatList.some(function (e) {
                                  return (
                                    !B.ZP.isSecondClassSeat(e.SeatName) &&
                                    e.SeatInventory > 0
                                  );
                                })
                            : e.SeatList.some(function (e) {
                                return (
                                  Pe.Z.isHardSeat(e.SeatName) &&
                                  0 === e.SeatInventory
                                );
                              }) &&
                                e.SeatList.some(function (e) {
                                  return (
                                    !Pe.Z.isHardSeat(e.SeatName) &&
                                    e.SeatInventory > 0
                                  );
                                });
                        },
                      },
                      {
                        key: "getTainList",
                        value: function (e) {
                          var t = this;
                          return new Promise(
                            (function () {
                              var i = (0, c.Z)(
                                (0, s.Z)().mark(function i(a) {
                                  var n,
                                    r,
                                    c,
                                    l,
                                    u,
                                    d,
                                    m,
                                    h,
                                    f,
                                    p,
                                    S,
                                    v,
                                    T,
                                    w,
                                    y,
                                    N,
                                    k,
                                    C,
                                    V,
                                    _,
                                    x;
                                  return (0, s.Z)().wrap(
                                    function (i) {
                                      for (;;)
                                        switch ((i.prev = i.next)) {
                                          case 0:
                                            return (
                                              t.saveSearchIntention(),
                                              (n = t.state),
                                              (r = n.filterTagMap),
                                              (c = n.trainSearchCondition),
                                              (l = n.subTrainSeats),
                                              (u = r.student),
                                              (d = {
                                                DepartStation: c.departureName,
                                                ArriveStation: c.arrivalName,
                                                DepartDate: e,
                                                ChannelName: Z.default.isTieyou
                                                  ? "tieyou"
                                                  : "zhixing",
                                                SearchType: u ? 1 : 0,
                                              }),
                                              (i.prev = 4),
                                              (i.next = 7),
                                              B.ZP.getTrainList(d)
                                            );
                                          case 7:
                                            if (
                                              !(
                                                (p = (p = i.sent).filter(
                                                  function (e) {
                                                    return !(
                                                      ("九龙" ===
                                                        e.ArriveStation &&
                                                        "广州东" ===
                                                          e.DepartStation) ||
                                                      ("广州东" ===
                                                        e.ArriveStation &&
                                                        "九龙" ===
                                                          e.DepartStation)
                                                    );
                                                  }
                                                )) && p.length < 1
                                              )
                                            ) {
                                              i.next = 14;
                                              break;
                                            }
                                            return (
                                              (t.trainList = []),
                                              (t.rawList = []),
                                              t.setState({
                                                trainViewList: [],
                                                trainListShowNum: 40,
                                                moreTrainVisible: !0,
                                              }),
                                              i.abrupt("return", a())
                                            );
                                          case 14:
                                            if (
                                              ((S = p),
                                              (S = Pe.Z.handleTrains(
                                                S,
                                                d.DepartDate
                                              )).length)
                                            ) {
                                              i.next = 21;
                                              break;
                                            }
                                            return (
                                              (t.trainList = []),
                                              (t.rawList = []),
                                              t.setState({
                                                trainViewList: [],
                                                trainListShowNum: 40,
                                                moreTrainVisible: !0,
                                              }),
                                              i.abrupt("return", a())
                                            );
                                          case 21:
                                            return (
                                              (v = d.DepartDate),
                                              (T = new Date().getTime()),
                                              (w = !1),
                                              (y = !1),
                                              (N =
                                                e ===
                                                decodeURIComponent(
                                                  null ===
                                                    (m = (0,
                                                    g.getCurrentInstance)()) ||
                                                    void 0 === m ||
                                                    null === (h = m.router) ||
                                                    void 0 === h ||
                                                    null === (f = h.params) ||
                                                    void 0 === f
                                                    ? void 0
                                                    : f.date
                                                )),
                                              S.forEach(function (i) {
                                                var a = b()(
                                                  ""
                                                    .concat(e, " ")
                                                    .concat(i.DepartTime)
                                                ).diff(
                                                  b()(+new Date()),
                                                  "minute"
                                                );
                                                (i.outage = a <= 25),
                                                  (i.IsCanHB = !0),
                                                  (i._shareKey = ""
                                                    .concat(i.TrainNumber, "_")
                                                    .concat(i.RunTime)),
                                                  (i._isSharedFromFriend =
                                                    N &&
                                                    t.shareTrains.includes(
                                                      i._shareKey
                                                    ));
                                                var n = i.seats.slice(),
                                                  r = l.find(function (e) {
                                                    return (
                                                      e.trainNo ===
                                                      i.TrainNumber
                                                    );
                                                  }),
                                                  s = !1;
                                                !i.isPreSale &&
                                                  r &&
                                                  [1, 2, 3, 4, 5].includes(
                                                    r.type
                                                  ) &&
                                                  (s = !0);
                                                var c = !i.SeatCount && !s;
                                                if (
                                                  ((i._isExceedAlternatTime =
                                                    a <= 120),
                                                  (i.seats = n.map(function (
                                                    e
                                                  ) {
                                                    var t;
                                                    return (0, o.Z)(
                                                      (0, o.Z)({}, e),
                                                      {},
                                                      {
                                                        _seatName:
                                                          "无座" ===
                                                            e.SeatName ||
                                                          "硬座" === e.SeatName
                                                            ? e.SeatName
                                                            : null ===
                                                                (t =
                                                                  e.SeatName) ||
                                                              void 0 === t
                                                            ? void 0
                                                            : t.replace(
                                                                "座",
                                                                ""
                                                              ),
                                                        _hasAlternated: !1,
                                                      }
                                                    );
                                                  })),
                                                  (i._selectDate = e),
                                                  (i._subTrainSeat = r),
                                                  (i._hasSubTrainSeat = s),
                                                  (i._noSeat = c),
                                                  w || (w = i.IsCanPointsPay),
                                                  y || (y = i.IsCanSilent),
                                                  -1 !==
                                                    i.SaleNote.indexOf(
                                                      "列车运行图调整"
                                                    ))
                                                )
                                                  return (
                                                    (i.isPreSale = !0),
                                                    void (i.preSaleTimeStr =
                                                      "列车运行图调整，可预约抢票，开售自动抢")
                                                  );
                                                var u = b()(v)
                                                    .subtract(
                                                      i.PreSaleDay || 0,
                                                      "day"
                                                    )
                                                    .format("YYYY-MM-DD"),
                                                  d =
                                                    u +
                                                    " " +
                                                    (i.PreSaleTime || "00:00"),
                                                  m = b()(d).valueOf(),
                                                  h =
                                                    b()(u).month() +
                                                    1 +
                                                    "月" +
                                                    b()(u).date() +
                                                    "日";
                                                if (
                                                  ((i._saleDate = m), m - T > 0)
                                                ) {
                                                  (i.isPreSale = !0),
                                                    (i.preSaleTimeStr =
                                                      h +
                                                      i.PreSaleTime +
                                                      "开售,可预约抢票,开售自动抢");
                                                  var f = (0, B.kH)();
                                                  f > 0 &&
                                                    b()(m)
                                                      .subtract(f, "minute")
                                                      .isBefore(b()(T)) &&
                                                    ((i.preSaleTimeStr =
                                                      '<span style="color:#666666"><span style="color:#198CFF">'.concat(
                                                        i.PreSaleTime,
                                                        "</span>起售，可提前下单，等待秒杀</span>"
                                                      )),
                                                    (i._isPreSecKill = !0));
                                                }
                                              }),
                                              (t.rawList = S),
                                              (k = t.getStations(S)),
                                              "",
                                              (V = S.filter(function (e) {
                                                return B.ZP.isGaoTie(
                                                  e.TrainNumber
                                                );
                                              })),
                                              (_ = S.filter(function (e) {
                                                return B.ZP.isDongChe(
                                                  e.TrainNumber
                                                );
                                              })),
                                              (C =
                                                V.length > 0
                                                  ? V.sort(function (e, t) {
                                                      return e.Price - t.Price;
                                                    })[0].Price
                                                  : _.length > 0
                                                  ? _.sort(function (e, t) {
                                                      return e.Price - t.Price;
                                                    })[0].Price
                                                  : ""),
                                              (x = 0),
                                              S.map(function (e) {
                                                e.seats.some(function (e) {
                                                  return (
                                                    ("二等座" === e.SeatName &&
                                                      e.SeatInventory > 0) ||
                                                    ("硬座" === e.SeatName &&
                                                      e.SeatInventory > 0) ||
                                                    ("硬卧" === e.SeatName &&
                                                      e.SeatInventory > 0)
                                                  );
                                                }) && (x += 1);
                                              }),
                                              t.ubtTrace(197675, {
                                                exposureType: "normal",
                                                bizKey:
                                                  "z_mini_listPage_leftTicket_info",
                                                departStation: c.departureName,
                                                arriveStation: c.arrivalName,
                                                departDate: e,
                                                total: S.length,
                                                hasLeftTicket: x,
                                              }),
                                              t.setState({
                                                stations: k,
                                                isSupportPoint: w,
                                                isSupportSilent: y,
                                              }),
                                              t.props
                                                .onChangeTrainLowestPrice &&
                                                t.props.onChangeTrainLowestPrice(
                                                  C
                                                ),
                                              i.abrupt("return", a(t.rawList))
                                            );
                                          case 41:
                                            return (
                                              (i.prev = 41),
                                              (i.t0 = i.catch(4)),
                                              console.log(i.t0),
                                              (t.trainList = []),
                                              (t.rawList = []),
                                              t.setState({
                                                isShowBlank: !0,
                                                trainViewList: [],
                                                trainListShowNum: 40,
                                                moreTrainVisible: !0,
                                              }),
                                              i.abrupt("return", a())
                                            );
                                          case 48:
                                          case "end":
                                            return i.stop();
                                        }
                                    },
                                    i,
                                    null,
                                    [[4, 41]]
                                  );
                                })
                              );
                              return function (e) {
                                return i.apply(this, arguments);
                              };
                            })()
                          );
                        },
                      },
                      {
                        key: "getHouBuConfig",
                        value: function () {
                          var e = this;
                          return (0, he.fu)({
                            ConfigKey: "tieyou_wx_mini_train_houbu",
                          })
                            .then(function (t) {
                              e.setState({
                                isHouBuConfig: !(
                                  !t.ConfigInfo || 3 != t.ConfigInfo.Content
                                ),
                              });
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                        },
                      },
                      {
                        key: "judgeShowHouBuPop",
                        value: function () {
                          try {
                            if (S().getStorageSync("trainListPageHouBuPop"))
                              return;
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      { key: "hideHouBuPop", value: function () {} },
                      {
                        key: "onTrainEmptyTipClose",
                        value: function () {
                          this.setState({ trainEmptyTipVisible: !1 });
                        },
                      },
                      {
                        key: "getStations",
                        value: function (e) {
                          var t = [],
                            i = this.state,
                            a = i.stations,
                            n = i.departInfo,
                            r = i.arriveInfo,
                            s = i.titleFromStationStr,
                            o = void 0 === s ? "" : s,
                            c = i.titleToStationStr,
                            l = void 0 === c ? "" : c,
                            u =
                              "T" == (null == n ? void 0 : n.stationType) &&
                              (null == n ? void 0 : n.name),
                            d =
                              "T" == (null == r ? void 0 : r.stationType) &&
                              (null == r ? void 0 : r.name);
                          e.forEach(function (e) {
                            var i = e.DepartStation,
                              n = e.ArriveStation;
                            if (
                              t.findIndex(function (e) {
                                return e.name === i;
                              }) < 0
                            ) {
                              var r,
                                s =
                                  a.length > 0
                                    ? null ===
                                        (r = a.find(function (e) {
                                          return e.name === i;
                                        })) || void 0 === r
                                      ? void 0
                                      : r.isSelected
                                    : u === i;
                              t.push({
                                name: i,
                                isSelected: !!s,
                                isPreSelected: !!s,
                                stationType: "D",
                                isShowInFilter: !0,
                              });
                            }
                            if (
                              t.findIndex(function (e) {
                                return e.name === n;
                              }) < 0
                            ) {
                              var o,
                                c =
                                  a.length > 0
                                    ? null ===
                                        (o = a.find(function (e) {
                                          return e.name === n;
                                        })) || void 0 === o
                                      ? void 0
                                      : o.isSelected
                                    : d === n;
                              t.push({
                                name: n,
                                isSelected: !!c,
                                isPreSelected: !!c,
                                stationType: "A",
                                isShowInFilter: !0,
                              });
                            }
                          }),
                            u &&
                              !t.some(function (e) {
                                return e.name === u;
                              }) &&
                              ((o && u !== o) ||
                                t.push({
                                  name: u,
                                  isSelected: !0,
                                  isPreSelected: !0,
                                  stationType: "D",
                                  isShowInFilter: !1,
                                })),
                            d &&
                              !t.some(function (e) {
                                return e.name === d;
                              }) &&
                              ((l && d !== l) ||
                                t.push({
                                  name: d,
                                  isSelected: !0,
                                  isPreSelected: !0,
                                  stationType: "A",
                                  isShowInFilter: !1,
                                }));
                          var m = t.filter(function (e) {
                              return "D" === e.stationType;
                            }),
                            h = t.filter(function (e) {
                              return "A" === e.stationType;
                            });
                          return m.concat(h);
                        },
                      },
                      {
                        key: "onClickSubTrainTrace",
                        value: function (e) {
                          var t = this,
                            i = [];
                          (i = e.seats.filter(function (e) {
                            return e.isSubTrainSeat;
                          })).length > 0 &&
                            i.map(function (e) {
                              2 == e.type &&
                                t.ubtTrace(197676, {
                                  bizKey: "z_mini_list_zhcx_plan_click",
                                  type: "combine",
                                }),
                                3 == e.type &&
                                  t.ubtTrace(197676, {
                                    bizKey: "z_mini_list_zhcx_plan_click",
                                    type: "cross",
                                  }),
                                [1, 4].includes(e.type) &&
                                  t.ubtTrace(197676, {
                                    bizKey: "z_mini_list_zhcx_plan_click",
                                    type: 1 == e.type ? "buy_grab" : "grab_buy",
                                  }),
                                5 == e.type &&
                                  t.ubtTrace(197676, {
                                    bizKey: "z_mini_list_zhcx_plan_click",
                                    type: "combine_cross",
                                  });
                            });
                        },
                      },
                      {
                        key: "clickItem",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e(t) {
                              var i,
                                a,
                                n,
                                r,
                                o,
                                c,
                                l,
                                u,
                                d,
                                m,
                                h,
                                f,
                                p,
                                g,
                                S,
                                v,
                                T,
                                Z,
                                w,
                                y,
                                N;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((a = t.train),
                                          t.hasScaned &&
                                            ((n = JSON.parse(
                                              JSON.stringify(
                                                I.ET.trainItemScanedKeyList
                                              )
                                            )).push(a._shareKey),
                                            (I.ET.trainItemScanedKeyList = n)),
                                          (r = this.state),
                                          (o = r.isReschedule),
                                          (c = void 0 !== o && o),
                                          (l = r.hotelTagCashBack),
                                          (u = r.selectDate),
                                          (d = r.titleFromStationStr),
                                          (m = r.titleToStationStr),
                                          (h = r.departInfo),
                                          (f = r.arriveInfo),
                                          (null === (i = this.shareTrains) ||
                                          void 0 === i
                                            ? void 0
                                            : i.length) > 0 &&
                                            this.ubtTrace(
                                              "c_trn_z_10320660960",
                                              {
                                                bizKey:
                                                  "z_mini_listPage_screenshot_shareCard_click",
                                                trainType: a._isSharedFromFriend
                                                  ? 0
                                                  : 1,
                                              }
                                            ),
                                          a.isCanPointsPay &&
                                            this.ubtTrace(
                                              "c_trn_z_10320660960",
                                              {
                                                bizKey:
                                                  "z_mini_list_creditTrain_click",
                                              }
                                            ),
                                          l &&
                                            ((p = JSON.parse(l)),
                                            (g = p.limitPrice),
                                            a.SeatList[0].SeatPrice > g &&
                                              this.ubtTrace(
                                                "TZWBuyList_TrainList_click",
                                                {
                                                  PageId: this.pageId,
                                                  DepartStation:
                                                    d ||
                                                    (null == h
                                                      ? void 0
                                                      : h.name) ||
                                                    "",
                                                  ArriveStation:
                                                    m ||
                                                    (null == f
                                                      ? void 0
                                                      : f.name) ||
                                                    "",
                                                  DepartDate: u,
                                                  ActivityType: p.crossText,
                                                }
                                              )),
                                          this.onClickSubTrainTrace(a),
                                          (S = this.trainList),
                                          (v = S.findIndex(function (e) {
                                            return e.cusIndex === a.cusIndex;
                                          })),
                                          !S[v].IsSaleStop ||
                                            "列车停运" != S[v].SaleNote)
                                        ) {
                                          e.next = 11;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 11:
                                        return (
                                          (e.next = 13),
                                          this.onInterceptTipsAsync(
                                            a._selectDate + " " + a.DepartTime
                                          )
                                        );
                                      case 13:
                                        if (e.sent) {
                                          e.next = 16;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 16:
                                        if (!c) {
                                          e.next = 32;
                                          break;
                                        }
                                        if (
                                          ((T = S[v]),
                                          (T.SeatList || []).some(function (e) {
                                            return (
                                              e.SeatInventory > 0 &&
                                              e.SeatBookable
                                            );
                                          }))
                                        ) {
                                          e.next = 22;
                                          break;
                                        }
                                        return (
                                          (0, k.showModal)(
                                            "您选择的车次已没有空余座位，请选择别的车次"
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 22:
                                        if (
                                          ((Z = this.state.dstation),
                                          (w = T.DepartStation) === Z)
                                        ) {
                                          e.next = 32;
                                          break;
                                        }
                                        return (
                                          (y = w.includes("站")
                                            ? w
                                            : "".concat(w, "站")),
                                          (N = Z.includes("站")
                                            ? Z
                                            : "".concat(Z, "站")),
                                          (e.next = 29),
                                          this.props.onCommonSceneDrawer.alertAsync(
                                            {
                                              title: "温馨提示",
                                              content:
                                                "您要改签的车站为<span style='color:#198CFF'>"
                                                  .concat(
                                                    y,
                                                    "</span>，与改签前的出发站<span style='color:#198CFF'>"
                                                  )
                                                  .concat(
                                                    N,
                                                    "</span>为同城车站，请您注意乘车车站的所在位置，已免影响您的旅程。"
                                                  ),
                                            }
                                          )
                                        );
                                      case 29:
                                        if (e.sent) {
                                          e.next = 32;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 32:
                                        this.goBooking({
                                          trainIndex: v,
                                          newBooking: 0,
                                        });
                                      case 33:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "goBooking",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t,
                                i,
                                a,
                                n,
                                r,
                                o,
                                c,
                                l,
                                u,
                                d,
                                m,
                                h,
                                f,
                                p,
                                g,
                                S,
                                v = arguments;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        (t =
                                          v.length > 0 && void 0 !== v[0]
                                            ? v[0]
                                            : {}),
                                          (i = t.trainIndex),
                                          (a = t.newBooking),
                                          (n = void 0 === a ? 0 : a),
                                          (r = t.ex),
                                          (o = void 0 === r ? {} : r),
                                          (c = this.trainList[i]);
                                        try {
                                          this.ubtDevTrace(
                                            "o_train_list_item",
                                            {
                                              trainNum: c.TrainNumber,
                                              departStation: c.DepartStation,
                                              arriveStation: c.ArriveStation,
                                              departTime: "".concat(
                                                c.DepartTime
                                              ),
                                              arriveTime: c.ArriveTime,
                                            }
                                          );
                                        } catch (e) {}
                                        if (
                                          (console.log(
                                            "getPreTicketJumpABTest:",
                                            (0, V.D8)()
                                          ),
                                          !c.isPreSale || "B" !== (0, V.D8)())
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        if (P.ZP.isLogin) {
                                          e.next = 14;
                                          break;
                                        }
                                        return (
                                          (e.prev = 6),
                                          (e.next = 9),
                                          P.ZP.doLogin()
                                        );
                                      case 9:
                                        e.next = 14;
                                        break;
                                      case 11:
                                        (e.prev = 11),
                                          (e.t0 = e.catch(6)),
                                          console.log("取消登陆");
                                      case 14:
                                        return (
                                          P.ZP.isLogin &&
                                            this.navigateTo({
                                              url: "/pages/trainRob/setgrab/setgrab",
                                              data: {
                                                fromPage: "trainlist",
                                                fromStation: {
                                                  name: c.DepartStation,
                                                },
                                                toStation: {
                                                  name: c.ArriveStation,
                                                },
                                                submitedDateList: [
                                                  b()(c.DepartTimeStamp).format(
                                                    "YYYY-MM-DD"
                                                  ),
                                                ],
                                                submitedTrainNumberList: [
                                                  c.TrainNumber,
                                                ],
                                                submitedSeatList: [],
                                              },
                                            }),
                                          e.abrupt("return")
                                        );
                                      case 16:
                                        n && o.cusRob
                                          ? this.navigateTo({
                                              url: "/pages/trainRob/setgrab/setgrab",
                                              data: {
                                                fromStation: {
                                                  name: c.DepartStation,
                                                },
                                                toStation: {
                                                  name: c.ArriveStation,
                                                },
                                                submitedDateList: [
                                                  b()(c.DepartTimeStamp).format(
                                                    "YYYY-MM-DD"
                                                  ),
                                                ],
                                                submitedTrainNumberList: [
                                                  c.TrainNumber,
                                                ],
                                                submitedSeatList: [o.SeatName],
                                              },
                                            })
                                          : ((l = c.DepartStation),
                                            (u = c.ArriveStation),
                                            (d = c.DepartTimeStamp),
                                            (m = c.TrainNumber),
                                            (h = this.state),
                                            (f = h.isReschedule),
                                            (p = h.filterTagMap),
                                            (g = h.fromPage),
                                            (S = h.trainViewModeType),
                                            this.navigateTo({
                                              url: "/pages/train/bookx/bookx",
                                              data: {
                                                train: c,
                                                fromStation: l,
                                                toStation: u,
                                                departDate:
                                                  b()(d).format("YYYY-MM-DD"),
                                                trainNo: m,
                                                isReschedule: f,
                                                trainViewModeType: S,
                                                isStudent: p.student,
                                                isPointReschedule:
                                                  this.props.isPointReschedule,
                                                isShowSmartJianLou:
                                                  "h5SmartSystem" === g,
                                                fromPage: g,
                                              },
                                            }));
                                      case 17:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[6, 11]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "check12306Account",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t, i, a;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state),
                                          (i = t.login12306Name),
                                          (a = t.login12306Pas),
                                          i && a)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          (this.preLogin12306 = !0),
                                          e.abrupt("return")
                                        );
                                      case 4:
                                        return (
                                          (e.prev = 4),
                                          (e.next = 7),
                                          (0, me.L5)({
                                            UserName: i,
                                            Password: a,
                                            Channel: "WX",
                                          })
                                        );
                                      case 7:
                                        (this.preLogin12306 = !1),
                                          (e.next = 13);
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(4)),
                                          (this.preLogin12306 = !0);
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[4, 10]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "trainScrollerLower",
                        value: function () {
                          var e = this.state,
                            t = e.trainListShowNum,
                            i = e.moreTrainVisible,
                            a =
                              this.trainList.length +
                              this.noDirectList.length +
                              this.smartRecList.length;
                          if (t < a) {
                            var n = !!(t + 20 < a);
                            this.setState({
                              trainListShowNum: n ? t + 20 : a,
                              moreTrainVisible: !n,
                            });
                          } else
                            t != a ||
                              i ||
                              this.setState({ moreTrainVisible: !0 });
                        },
                      },
                      {
                        key: "clickCard",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                          (this.selectedCardType = t),
                            this.setState({ smartStations: [] }, function () {
                              e.getSmartZhongZhuanInfo();
                            });
                        },
                      },
                      {
                        key: "getSmartZhongZhuanCardInfo",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e(t) {
                              var i,
                                a,
                                n,
                                r,
                                c,
                                l,
                                u,
                                d,
                                m,
                                h,
                                f,
                                p,
                                g,
                                S,
                                v,
                                T,
                                Z,
                                y,
                                N,
                                b;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((i = this.state),
                                          (a = i.smartTravelTabInfo),
                                          (n = i.transferAreaNames),
                                          (r = void 0 === n ? [] : n),
                                          a && a.smartTripInfo)
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 3:
                                        return (
                                          (c = this.selectedCardType),
                                          (l = void 0 === c ? {} : c),
                                          (u = this.smartRequestParams),
                                          (d = l.cardType),
                                          (m = void 0 === d ? "" : d),
                                          (h = l.cardName),
                                          (f = void 0 === h ? "" : h),
                                          (p = {
                                            tripCards: [],
                                            smartZhongZhuanInfo: null,
                                          }),
                                          (e.prev = 6),
                                          (g = this.getSmartRequestParams()),
                                          (e.next = 10),
                                          (0, C.Dek)(g)
                                        );
                                      case 10:
                                        (S = e.sent),
                                          (v = S.data),
                                          (T = void 0 === v ? null : v),
                                          1 === S.resultCode && T
                                            ? ((Z = T.tripCards),
                                              (N = (y =
                                                void 0 === Z ? [] : Z).find(
                                                function (e) {
                                                  return (
                                                    e.cardType === m ||
                                                    e.cardName === f
                                                  );
                                                }
                                              ))
                                                ? (this.selectedCardType = N)
                                                : ((this.selectedCardType = {}),
                                                  delete u.optionalParameter),
                                              (b = { tripCards: y || [] }),
                                              w.Z.notEmptyArray(r) ||
                                                (b = {
                                                  tripCards: y || [],
                                                  transferAreaNames:
                                                    (null == T
                                                      ? void 0
                                                      : T.transferAreaNames) ||
                                                    [],
                                                }),
                                              this.setState((0, o.Z)({}, b)))
                                            : this.setState((0, o.Z)({}, p)),
                                          t && t(),
                                          (e.next = 19);
                                        break;
                                      case 16:
                                        (e.prev = 16),
                                          (e.t0 = e.catch(6)),
                                          this.setState((0, o.Z)({}, p));
                                      case 19:
                                        return (e.prev = 19), e.finish(19);
                                      case 21:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[6, 16, 19, 21]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getSmartZhongZhuanInfo",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t,
                                i,
                                a,
                                n,
                                r,
                                o,
                                c,
                                l,
                                u = arguments;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            u.length > 0 &&
                                            void 0 !== u[0] &&
                                            u[0]),
                                          (i = this.state.smartTravelTabInfo),
                                          (a = this.selectedCardType),
                                          (n = (void 0 === a ? {} : a)
                                            .cardType),
                                          (r = void 0 === n ? "" : n),
                                          i && i.smartTripInfo)
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 6:
                                        return (
                                          (e.prev = 6),
                                          (o = t
                                            ? {
                                                cacheControl: {
                                                  useCache: !0,
                                                  maxAge: 12e4,
                                                  dedup: !0,
                                                  dedupingInterval: 500,
                                                },
                                              }
                                            : {}),
                                          (c = this.getSmartRequestParams(r)),
                                          (this.smartRequestParams =
                                            w.Z.deepCopy(c)),
                                          (e.next = 12),
                                          (0, C.Dek)(c, o)
                                        );
                                      case 12:
                                        (l = e.sent),
                                          this.handleSmartRes(l),
                                          (e.next = 20);
                                        break;
                                      case 16:
                                        (e.prev = 16),
                                          (e.t0 = e.catch(6)),
                                          this.setState({
                                            smartZhongZhuanInfo: null,
                                          }),
                                          console.log(e.t0);
                                      case 20:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[6, 16]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getTransferRouteRecommend",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.trainSearchCondition,
                            a = t.selectDate,
                            n = mt
                              ? [{ abKey: "180403_zxhtl_jdhy", abValue: "A" }]
                              : [{ abKey: "180417_zxtra_hydg", abValue: "A" }],
                            r = {
                              departureName: i.departureName,
                              arrivalName: i.arrivalName,
                              departureCode: i.departureCode,
                              arrivalCode: i.arrivalCode,
                              departureDate: a,
                              fromPage: 0,
                              abConfig: n,
                            };
                          return (0, C.Jtf)(r)
                            .then(function (t) {
                              if (1 === t.resultCode) {
                                var i = t.lines,
                                  a = void 0 === i ? [] : i,
                                  n = a.find(function (e) {
                                    return (
                                      1 === e.position && "Plane" === e.type
                                    );
                                  }),
                                  r = a.find(function (e) {
                                    return 1 === e.position && "Bus" === e.type;
                                  });
                                if (!n && !r) return;
                                if (n) {
                                  if (!n.departureCode) return;
                                  (n.purePrice = n.vipPrice.replace(
                                    /\xa5/g,
                                    ""
                                  )),
                                    e.setState({
                                      recommendLine: n,
                                      showRecommendTab: "flight",
                                    }),
                                    e.ubtTrace(102486, { openId: P.ZP.openid });
                                } else
                                  r &&
                                    ((r.purePrice = r.vipPrice.replace(
                                      /\xa5/g,
                                      ""
                                    )),
                                    e.setState({
                                      recommendLine: r,
                                      showRecommendTab: "bus",
                                    }));
                              }
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                        },
                      },
                      {
                        key: "gotoFlightOrBusList",
                        value: function () {
                          var e = this.state,
                            t = e.showRecommendTab,
                            i = e.hasFlight,
                            a = e.recommendLine,
                            n = void 0 === a ? {} : a,
                            r = e.selectDate;
                          if (i || "flight" !== t)
                            ("flight" !== t && "bus" !== t) ||
                              this.switchTab("flight" === t ? pt : ht);
                          else {
                            var s = n.departureName,
                              o = n.arrivalName,
                              c = n.departureCode,
                              l = n.arrivalCode,
                              u = n.departureDate,
                              d =
                                "HKG" === c || "HKG" === l
                                  ? "/pages/flightIntl/list/list"
                                  : "/pages/flight/list/list";
                            this.navigateTo({
                              url: ""
                                .concat(d, "?departCity=")
                                .concat(s, "&departCityCode=")
                                .concat(c, "&arriveCity=")
                                .concat(o, "&arriveCityCode=")
                                .concat(l, "&departDate=")
                                .concat(u || r, "&nearby=1}"),
                            });
                          }
                        },
                      },
                      {
                        key: "getTrainCrossBanner",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t, i, a, n, r, o, c, l, u, d;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = this.state),
                                          (i = t.selectDate),
                                          (a = t.titleFromStationStr),
                                          (n = t.titleToStationStr),
                                          (r = t.departInfo),
                                          (o = t.arriveInfo),
                                          (c = t.filterTagMap),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          (0, C.SON)({
                                            fromSource: 8,
                                            clientExtInfoList: [
                                              { key: "departDate", value: i },
                                              {
                                                key: "fromPage",
                                                value: "trainHome",
                                              },
                                              {
                                                key: "toStation",
                                                value:
                                                  n ||
                                                  (null == o
                                                    ? void 0
                                                    : o.name) ||
                                                  "",
                                              },
                                              {
                                                key: "fromStation",
                                                value:
                                                  a ||
                                                  (null == r
                                                    ? void 0
                                                    : r.name) ||
                                                  "",
                                              },
                                              {
                                                key: "chooseStudent",
                                                value: c.student ? "1" : "0",
                                              },
                                            ],
                                          })
                                        );
                                      case 4:
                                        null != (l = e.sent) &&
                                          l.resultCode &&
                                          ((u = l.areas),
                                          (d = void 0 === u ? [] : u),
                                          this.setState({
                                            trainCrossBanners: d,
                                          })),
                                          (e.next = 10);
                                        break;
                                      case 8:
                                        (e.prev = 8), (e.t0 = e.catch(1));
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 8]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "showFilterView",
                        value: function () {
                          this.setState({ isFilterViewAnimation: !0 }),
                            (this.isFilterResetView = !1);
                          var e = this.state,
                            t = e.filterTrainType,
                            i = e.filterTrainTime;
                          (this.prevFilterType = t),
                            (this.prevFilterTime = i),
                            this.filterViewExposure();
                        },
                      },
                      {
                        key: "filterViewExposure",
                        value: function () {
                          var e = [],
                            t = [],
                            i = this.state,
                            a = i.isSupportPoint,
                            n = i.stations,
                            r = i.isSupportSilent;
                          t.push("directOnly"),
                            a && t.push("creditTrain"),
                            r && t.push("静音车厢"),
                            t.push("combineSeat"),
                            t.push("学生票"),
                            e.push("ticketOnly");
                          var s = {
                            ticket: e,
                            Special: t,
                            stations: n.map(function (e) {
                              return e.name;
                            }),
                          };
                          this.ubtTrace(
                            "TZWList_TrainTab_AdvancedSelect_exposure",
                            { PageId: this.pageId, Type: JSON.stringify(s) }
                          );
                        },
                      },
                      {
                        key: "onClickSortBy",
                        value: function (e) {
                          var t = this,
                            i = this.state,
                            a = i.sortType,
                            n = i.sortAscending,
                            r = i.isAlternateMode,
                            s = this.trainList;
                          e != a || "DepartTimeStamp" != e
                            ? ("Alternate" === a ||
                                "Alternate" !== e ||
                                r ||
                                (console.log("开启候补模式"),
                                this.setState({ isAlternateMode: !0 })),
                              r &&
                                "Alternate" === e &&
                                (console.log("候补模式时点击展示候补列表弹窗"),
                                this.setState({ isShowAlternateList: !0 })),
                              this.setState(
                                { sortType: e, sortAscending: !0 },
                                function () {
                                  t.renderSmart(s, function () {
                                    t.mergeTrainViewListWithSmartRec();
                                  });
                                }
                              ))
                            : this.setState({ sortAscending: !n }, function () {
                                t.renderSmart(s, function () {
                                  t.mergeTrainViewListWithSmartRec();
                                });
                              });
                        },
                      },
                      {
                        key: "cancelFilter",
                        value: function () {
                          var e = this.prevFilterType,
                            t = this.prevFilterTime;
                          this.setState({
                            filterTrainType: e,
                            filterTrainTime: t,
                            preFilterTagMap: this.state.filterTagMap,
                          }),
                            this.hideFilterView(),
                            this.selectTrainModel(e),
                            this.selectTrainTime(t);
                        },
                      },
                      {
                        key: "hideFilterView",
                        value: function (e) {
                          var t = this;
                          return new Promise(function (i) {
                            t.setState(
                              {
                                isFilterViewAnimation: !1,
                                stations: t.state.stations.map(function (t) {
                                  return (0,
                                  o.Z)((0, o.Z)({}, t), e ? { isSelected: t.isPreSelected } : { isPreSelected: t.isSelected });
                                }),
                              },
                              function () {
                                i();
                              }
                            );
                          });
                        },
                      },
                      {
                        key: "setTrainTitle",
                        value: function () {
                          var e = this.state,
                            t = e.departInfo,
                            i = e.arriveInfo;
                          if (t && i) {
                            var a =
                                (null == t ? void 0 : t.name) ||
                                (null == t ? void 0 : t.showName),
                              n =
                                (null == i ? void 0 : i.name) ||
                                (null == i ? void 0 : i.showName);
                            (0, o.Z)({}, this.state.preFilterTagMap).student &&
                              (n += "(学生票)"),
                              this.props.setTitle(
                                "Train",
                                a && n ? "".concat(a, "-").concat(n) : ""
                              ),
                              this.setState({
                                titleFromStationStr: a,
                                titleToStationStr: n,
                              });
                          }
                        },
                      },
                      {
                        key: "confirmFilter",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t,
                                i,
                                a,
                                n,
                                r = this;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = this.state),
                                          (i = t.filterTrainType),
                                          (a = t.preFilterTagMap),
                                          (n = t.clickStudentNeedReload),
                                          this.setTrainTitle(),
                                          this.ubtFilterViewConfirm(),
                                          this.resetScrollTrainViewTop(),
                                          (e.next = 6),
                                          this.setStateSync({ filterTagMap: a })
                                        );
                                      case 6:
                                        return (
                                          (e.next = 8), this.hideFilterView(!0)
                                        );
                                      case 8:
                                        if (
                                          (this.selectTrainModel(
                                            0 === i ? 1 : i
                                          ),
                                          0 !== i)
                                        ) {
                                          e.next = 12;
                                          break;
                                        }
                                        return (
                                          this.setState(
                                            { filterTrainType: 1 },
                                            function () {
                                              if ((r.renderFiltered(), n))
                                                return r.reload(!0);
                                              r.getSmartRecommendList();
                                            }
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 12:
                                        if ((this.renderFiltered(), !n)) {
                                          e.next = 17;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.reload(!0)
                                        );
                                      case 17:
                                        this.getSmartRecommendList();
                                      case 18:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "ubtFilterViewConfirm",
                        value: function () {
                          var e = this.state,
                            t = e.isFilterGCSelected,
                            i = e.isFilterDSelected,
                            a = e.isFilterZTKSelected,
                            n = e.isFilterYLSelected,
                            r = e.isFilterEarlyMorningSelected,
                            s = e.isFilterMorningSelected,
                            o = e.isFilterAfternoonSelected,
                            c = e.isFilterNightSelected,
                            l = e.preFilterTagMap,
                            u = e.stations,
                            d = [],
                            m = [];
                          l.ticketOnly && d.push("ticketOnly"),
                            l.directOnly && m.push("directOnly"),
                            l.isCanPointsPay && m.push("creditTrain"),
                            l.combineSeats && m.push("combineSeat"),
                            l.isCanSilent && m.push("静音车厢"),
                            l.student && m.push("学生票");
                          var h = [];
                          (t || i) && h.push("高铁/动车"),
                            (a || n) && h.push("普快");
                          var f = [];
                          r && f.push("00:00-06:00"),
                            s && f.push("06:00-12:00"),
                            o && f.push("12:00-18:00"),
                            c && f.push("18:00-24:00");
                          var p = {
                            ticket: d,
                            Special: m,
                            trainType: h,
                            departTime: f,
                            stations: u
                              .filter(function (e) {
                                return e.isPreSelected;
                              })
                              .map(function (e) {
                                return e.name;
                              }),
                          };
                          this.ubtTrace(
                            "TZWList_TrainTab_AdvancedSelect_click",
                            {
                              PageId: this.pageId,
                              clickType: JSON.stringify(p),
                            }
                          );
                        },
                      },
                      {
                        key: "renderFiltered",
                        value: function () {
                          var e = this.state,
                            t = e.filterTrainType,
                            i = e.stations,
                            a = this.rawList;
                          if (a) {
                            var n = this.filterByType(a);
                            (n = this.handleTrainData(
                              w.Z.notEmptyArray(n) ? n : []
                            )),
                              (6 !== t && 4 !== t && 2 !== t) || 0 !== n.length
                                ? this.setState({ trainEmptyTipVisible: !1 })
                                : ((n = this.handleTrainData(a)),
                                  this.setState({ trainEmptyTipVisible: !0 })),
                              (n = this.filterByTime(n)),
                              (n = this.filterByStation(n, i)),
                              (n = this.filterByCanPoint(n)),
                              (n = this.filterByCanSilent(n)),
                              (n = this.filterByTicketOnly(n)),
                              (n = this.filterBySeats(n)),
                              (n = this.filterByShared(n)),
                              (n = this.handleHotelTag(n)),
                              this.renderSmart(n);
                          }
                        },
                      },
                      {
                        key: "handleHotelTag",
                        value: function (e) {
                          var t = this.state,
                            i = t.hotelTagCashBack,
                            a = t.selectDate,
                            n = t.titleFromStationStr,
                            r = t.titleToStationStr,
                            s = t.departInfo,
                            o = t.arriveInfo,
                            c = !1,
                            l = JSON.parse(i);
                          return (
                            e.map(function (e, t) {
                              if (i && !e.isPreSale) {
                                var a = l.skip,
                                  n = l.limitPrice;
                                (t % a == 0 || 0 === t) &&
                                  e.SeatList[0].SeatPrice > n &&
                                  ((e._hotelTagCashBack = l), (c = !0));
                              }
                            }),
                            c &&
                              this.ubtTrace("TZWBuyList_TrainList_exposure", {
                                PageId: this.pageId,
                                DepartStation:
                                  n || (null == s ? void 0 : s.name) || "",
                                ArriveStation:
                                  r || (null == o ? void 0 : o.name) || "",
                                DepartDate: a,
                                ActivityType: l.crossText,
                              }),
                            e
                          );
                        },
                      },
                      {
                        key: "doViewListRenderTrace",
                        value: function () {
                          var e,
                            t,
                            i,
                            a,
                            n = this.state,
                            r = n.stations,
                            s = n.departInfo,
                            o = n.trainSearchCondition,
                            c = n.selectDate,
                            l = n.arriveInfo,
                            u = n.trainViewList;
                          this.ubtTrace("s_trn_z_trace_10320660960", {
                            bizKey: "z_mini_listPage_trainInfo_show",
                            departCity:
                              (null == s ||
                              null === (e = s._cityInfo) ||
                              void 0 === e
                                ? void 0
                                : e.name) || o.departureName,
                            arriveCity:
                              (null == l ||
                              null === (t = l._cityInfo) ||
                              void 0 === t
                                ? void 0
                                : t.name) || o.arrivalName,
                            departStation:
                              (null ===
                                (i = r.find(function (e) {
                                  return e.isSelected && "D" == e.stationType;
                                })) || void 0 === i
                                ? void 0
                                : i.name) || o.departureName,
                            arriveStation:
                              (null ===
                                (a = r.find(function (e) {
                                  return e.isSelected && "A" == e.stationType;
                                })) || void 0 === a
                                ? void 0
                                : a.name) || o.arrivalName,
                            departDate: c,
                            total: u.length,
                          }),
                            u.some(function (e) {
                              return e.isCanPointsPay;
                            }) &&
                              this.ubtTrace("s_trn_z_trace_10320660960", {
                                bizKey: "z_mini_list_creditTrain_show",
                              });
                        },
                      },
                      {
                        key: "renderSmart",
                        value: function (e, t) {
                          var i = this,
                            a = e,
                            n = this.state,
                            r = n.sortAscending,
                            s = n.trainListShowNum,
                            o = n.sortType;
                          (a = a.sort(function (e, t) {
                            return e[o] - t[o];
                          })),
                            r || a.reverse(),
                            s > 0 &&
                              this.ubtDevTrace("o_mini_filter_click", {
                                trainShowNumber: s,
                              }),
                            a.length && a.length > 40
                              ? this.setState({ moreTrainVisible: !1 })
                              : this.setState({ moreTrainVisible: !0 });
                          try {
                            (this.trainList = this.putCancelTrainBehind(a)),
                              this.resetTimeLineAnchor(),
                              this.setState(
                                {
                                  trainViewList: this.trainList.map(function (
                                    e
                                  ) {
                                    return i.getPureViewItem(e);
                                  }),
                                },
                                function () {
                                  i.doViewListRenderTrace(), t && t();
                                }
                              );
                          } catch (e) {}
                        },
                      },
                      {
                        key: "resetScrollTrainView",
                        value: function () {
                          this.isFilterResetView ||
                            (this.trainList.length > 40 &&
                              (this.setState({
                                trainListShowNum: 40,
                                moreTrainVisible: !(
                                  this.trainList.length &&
                                  this.trainList.length > 40
                                ),
                              }),
                              (this.isFilterResetView = !0)));
                        },
                      },
                      {
                        key: "resetScrollTrainViewTop",
                        value: function () {
                          this.trainList.length > 40 &&
                            this.setState({ scrollTop: Math.random() });
                        },
                      },
                      {
                        key: "putCancelTrainBehind",
                        value: function (e) {
                          for (var t = [], i = e.length - 1; i >= 0; i--)
                            e[i].IsSaleStop ||
                              "列车停运" === e[i].SaleNote ||
                              (t.unshift(e[i]), e.splice(i, 1));
                          return [].concat(t, (0, ue.Z)(e));
                        },
                      },
                      {
                        key: "getPureViewItem",
                        value: function (e) {
                          var t,
                            i = this.state.fromPage,
                            a = JSON.parse(JSON.stringify(e.seats));
                          return (
                            e._hasSubTrainSeat &&
                              "h5SmartSystem" !== i &&
                              a.splice(
                                1,
                                0,
                                (0, o.Z)(
                                  { isSubTrainSeat: !0, SeatInventory: 1 },
                                  e._subTrainSeat
                                )
                              ),
                            {
                              IsSaleStop: e.IsSaleStop,
                              SaleNote: e.SaleNote,
                              DepartStation: e.DepartStation,
                              IsStartStation: e.IsStartStation,
                              IsEndStation: e.IsEndStation,
                              ArriveStation: e.ArriveStation,
                              TrainNumber: e.TrainNumber,
                              DepartTime: e.DepartTime,
                              TimesCost: e.TimesCost,
                              RunTime: e.RunTime,
                              IsFastPass: e.IsFastPass,
                              ArriveTime: e.ArriveTime,
                              TakeDays: e.TakeDays,
                              SeatList: e.SeatList,
                              isPreSale: e.isPreSale,
                              SeatCount: e.SeatCount,
                              IsCanHB: e.IsCanHB,
                              SucRate: e.SucRate,
                              _sucRateText: B.ZP.getSuccessRateText(e.SucRate),
                              _sucRateTags: e.SucRateTags,
                              _hotTrainInfo: e.HotTrainInfo,
                              _isCrossEnv: e._isCrossEnv,
                              _fromCountry: e._fromCountry,
                              _toCountry: e._toCountry,
                              preSaleTimeStr: e.preSaleTimeStr,
                              seats: a,
                              cusIndex: e.cusIndex,
                              timelineAnchorId: this.getTimelineAnchor(
                                e.DepartTime
                              ),
                              isCanPointsPay: e.IsCanPointsPay,
                              IsCanSilent: e.IsCanSilent,
                              _shareKey: e._shareKey,
                              _isChecked4Share: !(
                                null ===
                                  (t = this.state.trainViewList.find(function (
                                    t
                                  ) {
                                    return t._shareKey === e._shareKey;
                                  })) ||
                                void 0 === t ||
                                !t._isChecked4Share
                              ),
                              _isSharedFromFriend: e._isSharedFromFriend,
                              _isFilterStation: e._isFilterStation,
                              _selectDate: e._selectDate,
                              _FromCode: e._FromCode,
                              _ToCode: e._ToCode,
                              _hotelTagCashBack: e._hotelTagCashBack,
                              _noSeat: e._noSeat,
                              _isExceedAlternatTime: e._isExceedAlternatTime,
                              isCanSecKill: e.isCanSecKill,
                              _isPreSecKill: e._isPreSecKill,
                              _saleDate: e._saleDate,
                              PreSaleTime: e.PreSaleTime,
                              _subTrainSeat: e._subTrainSeat,
                              _isShowSmartJianLou:
                                e._hasSubTrainSeat &&
                                "h5SmartSystem" === i &&
                                [1, 2, 3].includes(e._subTrainSeat.type),
                              canChooseBedFlag: e.canChooseBedFlag,
                            }
                          );
                        },
                      },
                      {
                        key: "filterByType",
                        value: function (e) {
                          var t = this.state.filterTrainType;
                          return e
                            ? e.filter(function (e) {
                                return 1 == t || e.trainType & t;
                              })
                            : [];
                        },
                      },
                      {
                        key: "handleTrainData",
                        value: function (e) {
                          return e.map(function (e) {
                            return (0,
                            o.Z)((0, o.Z)({}, e), {}, { cusIndex: "".concat(e.TrainNumber, "_").concat(e.DepartStation, "_").concat(e.ArriveStation) });
                          });
                        },
                      },
                      {
                        key: "filterByTime",
                        value: function (e) {
                          var t = this.state.filterTrainTime;
                          return e
                            ? e.filter(function (e) {
                                return 1 == t || e.timePeriod & t;
                              })
                            : [];
                        },
                      },
                      {
                        key: "filterByStation",
                        value: function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : [];
                          if (!e) return [];
                          var i = JSON.parse(JSON.stringify(e)),
                            a = e,
                            n = [],
                            r = t.filter(function (e) {
                              return e.isSelected && "A" == e.stationType;
                            }),
                            s = t.filter(function (e) {
                              return e.isSelected && "D" == e.stationType;
                            });
                          return (
                            r.length &&
                              (a = a.filter(function (e) {
                                return (
                                  r.findIndex(function (t) {
                                    return t.name == e.ArriveStation;
                                  }) >= 0
                                );
                              })),
                            s.length &&
                              (a = a.filter(function (e) {
                                return (
                                  s.findIndex(function (t) {
                                    return t.name == e.DepartStation;
                                  }) >= 0
                                );
                              })),
                            a.forEach(function (e) {
                              e._isFilterStation = !0;
                            }),
                            (n = i.filter(function (e) {
                              return a.every(function (t) {
                                return t.TrainNumber !== e.TrainNumber;
                              });
                            })).forEach(function (e) {
                              e._isFilterStation = !1;
                            }),
                            a.concat(n)
                          );
                        },
                      },
                      {
                        key: "filterNoDirectListByStation",
                        value: function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : [];
                          if (!e) return [];
                          var i = t.filter(function (e) {
                              return e.isSelected && "A" == e.stationType;
                            }),
                            a = t.filter(function (e) {
                              return e.isSelected && "D" == e.stationType;
                            });
                          return (
                            e.map(function (e) {
                              if (i.length && a.length) {
                                var t =
                                    a.findIndex(function (t) {
                                      return t.name == e.fromStation;
                                    }) >= 0,
                                  n =
                                    i.findIndex(function (t) {
                                      return t.name == e.toStation;
                                    }) >= 0;
                                e._isFilterStation = !(!t || !n);
                              } else
                                i.length
                                  ? (e._isFilterStation =
                                      i.findIndex(function (t) {
                                        return t.name == e.toStation;
                                      }) >= 0)
                                  : a.length
                                  ? (e._isFilterStation =
                                      a.findIndex(function (t) {
                                        return t.name == e.fromStation;
                                      }) >= 0)
                                  : i.length ||
                                    a.length ||
                                    (e._isFilterStation = !0);
                            }),
                            e
                          );
                        },
                      },
                      {
                        key: "onClickNewSelectType",
                        value: function (e) {
                          var t = this;
                          e
                            ? (this.onClickSelectType(2),
                              setTimeout(function () {
                                t.onClickSelectType(4);
                              }, 500))
                            : (this.onClickSelectType(8),
                              setTimeout(function () {
                                t.onClickSelectType(16);
                              }, 500));
                        },
                      },
                      {
                        key: "onClickSelectType",
                        value: function (e) {
                          this.resetScrollTrainView();
                          var t = this.state.filterTrainType;
                          this.setState({ filterTrainType: e ^ t }),
                            this.selectTrainModel(e ^ t);
                        },
                      },
                      {
                        key: "selectTrainModel",
                        value: function (e) {
                          this.setState({
                            isFilterGCSelected: 2 & e,
                            isFilterDSelected: 4 & e,
                            isFilterZTKSelected: 8 & e,
                            isFilterYLSelected: 16 & e,
                          });
                        },
                      },
                      {
                        key: "onClickSelectTime",
                        value: function (e) {
                          this.resetScrollTrainView();
                          var t = this.state.filterTrainTime;
                          this.setState({ filterTrainTime: e ^ t }),
                            this.selectTrainTime(e ^ t);
                        },
                      },
                      {
                        key: "selectTrainTime",
                        value: function (e) {
                          this.setState({
                            isFilterEarlyMorningSelected: 2 & e,
                            isFilterMorningSelected: 4 & e,
                            isFilterAfternoonSelected: 8 & e,
                            isFilterNightSelected: 16 & e,
                          });
                        },
                      },
                      {
                        key: "onClickSelectStation",
                        value: function (e) {
                          this.resetScrollTrainView();
                          var t = this.state.stations;
                          this.setState({
                            stations: t.map(function (i, a) {
                              return (0,
                              o.Z)((0, o.Z)({}, i), {}, { isPreSelected: t[a].name === e.name ? !i.isPreSelected : i.isPreSelected });
                            }),
                          });
                        },
                      },
                      {
                        key: "saveSearchIntention",
                        value: function () {
                          var e = this.state,
                            t = e.selectDate,
                            i = e.isGaotieOnly,
                            a = e.trainSearchCondition;
                          try {
                            this.ubtTrace(mt ? 155692 : 155693, {
                              uid: P.ZP.uid || "",
                              cid: P.ZP.cid || "",
                              openid: P.ZP.openid || "",
                              intention: {
                                searchTime: new Date().getTime(),
                                startDate: t,
                                arriveStation: a.arrivalName,
                                departStation: a.departureName,
                                isGD: i,
                              },
                            });
                          } catch (e) {}
                        },
                      },
                      {
                        key: "reload",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                            i = this.state.selectDate;
                          this.setState({ isShowBlank: !1 }),
                            t
                              ? this.loadData(i)
                              : setTimeout(function () {
                                  e.loadData(i);
                                }, 1e3);
                        },
                      },
                      {
                        key: "onscrolling",
                        value: function (e) {
                          var t = this,
                            i = this.state.isListSwipeStart,
                            a = e.detail.scrollTop;
                          a > 50 &&
                            a < 400 &&
                            !i &&
                            this.setState(
                              { isListSwipeStart: !0 },
                              function () {
                                t.props.setListSwipeStart &&
                                  t.props.setListSwipeStart(!0);
                              }
                            );
                        },
                      },
                      {
                        key: "onSwipeUp",
                        value: function () {
                          this.judgeHideAnchorTabOfTimeLine(),
                            this.props.setSwipeDirection &&
                              this.props.setSwipeDirection(!1),
                            this.setState({ isScrollUp: !1 });
                        },
                      },
                      {
                        key: "onSwipeDown",
                        value: function () {
                          this.judgeShowAnchorTabOfTimeLine(),
                            this.props.setSwipeDirection &&
                              this.props.setSwipeDirection(!0),
                            this.setState({ isScrollUp: !0 });
                        },
                      },
                      {
                        key: "judgeShowAnchorTabOfTimeLine",
                        value: function () {
                          var e = this.state,
                            t = e.sortType,
                            i = e.sortAscending;
                          "DepartTimeStamp" === t &&
                            i &&
                            !this.timeLineAnchors.every(function (e) {
                              return !e.hasAnchored;
                            }) &&
                            this.setState({ isShowAnchorTabOfTimeLine: !0 });
                        },
                      },
                      {
                        key: "judgeHideAnchorTabOfTimeLine",
                        value: function () {
                          this.state.isShowAnchorTabOfTimeLine &&
                            this.setState({ isShowAnchorTabOfTimeLine: !1 });
                        },
                      },
                      {
                        key: "getTimelineAnchor",
                        value: function (e) {
                          try {
                            var t = e.split(":"),
                              i = (0, le.Z)(t, 2),
                              a = 60 * i[0] + 1 * i[1],
                              n = this.timeLineAnchors.findIndex(function (e) {
                                var t = e.start,
                                  i = e.end,
                                  n = e.hasAnchored;
                                return a >= t && a <= i && !n;
                              });
                            return -1 === n
                              ? ""
                              : ((this.timeLineAnchors[n].hasAnchored = !0),
                                "tl-anchor-".concat(n));
                          } catch (e) {
                            return "";
                          }
                        },
                      },
                      {
                        key: "onTimeLineAnchorTrigger",
                        value: function (e) {
                          var t;
                          null !== (t = this.timeLineAnchors[e]) &&
                            void 0 !== t &&
                            t.hasAnchored &&
                            (this.setState({
                              scrollIntoViewId: "tl-anchor-".concat(e),
                              trainListShowNum: this.state.trainViewList.length,
                            }),
                            (this.historyScrollIntoViewId = e));
                        },
                      },
                      {
                        key: "resetTimeLineAnchor",
                        value: function () {
                          this.timeLineAnchors.forEach(function (e) {
                            e.hasAnchored = !1;
                          }),
                            (this.scrollTopNumStore = []),
                            (this.historyScrollIntoViewId = null);
                        },
                      },
                      {
                        key: "getShareData",
                        value: function () {
                          var e,
                            t,
                            i,
                            a = this.state,
                            n = a.isShareMode,
                            r = a.trainViewList,
                            l = a.selectDate,
                            u =
                              null === (e = (0, g.getCurrentInstance)()) ||
                              void 0 === e ||
                              null === (t = e.router) ||
                              void 0 === t
                                ? void 0
                                : t.params,
                            d =
                              (u.shareTrains,
                              u.data,
                              u.isStudent,
                              u.__navigator,
                              u.$taroTimestamp,
                              u.date,
                              u.isReschedule,
                              (0, ce.Z)(u, dt)),
                            m = r.filter(function (e) {
                              return e._isChecked4Share;
                            }),
                            h = n
                              ? m
                                  .map(function (e) {
                                    return e._shareKey;
                                  })
                                  .join(",")
                              : "",
                            f = (0, o.Z)(
                              (0, o.Z)(
                                (0, o.Z)({}, d),
                                {},
                                { date: l },
                                n
                                  ? {
                                      shareTrains: h,
                                      shareOwner:
                                        null === (i = P.ZP.userName) ||
                                        void 0 === i
                                          ? void 0
                                          : i.replace(
                                              /^(\d{3})\S{4}(\d{4})$/,
                                              "$1****$2"
                                            ),
                                    }
                                  : {}
                              ),
                              {},
                              { fromPage: "trainListShare" }
                            );
                          for (var p in f) f[p] = decodeURIComponent(f[p]);
                          var S = "pages/train/list/list?".concat(
                              w.Z.stringifyQuery(f)
                            ),
                            v = "帮我看看坐哪趟车合适呢？",
                            T = Z.default.isTieyou
                              ? (0, fe.Uy)("tyTrainListShareImageUrl") || ""
                              : "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/fxt@2x.png",
                            y = new Promise(
                              (function () {
                                var e = (0, c.Z)(
                                  (0, s.Z)().mark(function e(t) {
                                    var i;
                                    return (0, s.Z)().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (0, k.showLoading)(
                                                n && "生成分享车次中"
                                              ),
                                              (e.next = 3),
                                              w.Z.generateShortPath4Share(S)
                                            );
                                          case 3:
                                            (i = e.sent),
                                              (0, k.hideLoading)(),
                                              t({
                                                title: v,
                                                path: i,
                                                imageUrl: T,
                                              });
                                          case 6:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            );
                          return (
                            n &&
                              this.ubtTrace("c_trn_z_10320660960", {
                                bizKey: "z_mini_listPage_pasScreenshot_click",
                                chooseNum: m.length,
                                actClick: this.isListShareGuideShown ? 0 : 1,
                                clickType: 1,
                              }),
                            { title: v, path: S, imageUrl: T, promise: y }
                          );
                        },
                      },
                      {
                        key: "onSwitchShareMode",
                        value: function () {
                          this.state.isShareMode
                            ? this.ubtTrace("c_trn_z_10320660960", {
                                bizKey: "z_mini_listPage_pasScreenshot_click",
                                chooseNum: 0,
                                actClick: this.isListShareGuideShown ? 0 : 1,
                                clickType: 0,
                              })
                            : this.ubtTrace("c_trn_z_10320660960", {
                                bizKey: "z_mini_listPage_Screenshot_click",
                                actClick: this.isListShareGuideShown ? 0 : 1,
                              }),
                            this.setState(
                              { isShareMode: !this.state.isShareMode },
                              this.onCheckChange.bind(this)
                            );
                        },
                      },
                      {
                        key: "onCheckChange",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.train,
                            i = this.state.trainViewList;
                          this.setState({
                            trainViewList: i.map(function (e) {
                              return (0,
                              o.Z)((0, o.Z)({}, e), {}, { _isChecked4Share: !!t && (e._shareKey === t ? !e._isChecked4Share : e._isChecked4Share) });
                            }),
                          });
                        },
                      },
                      {
                        key: "transShareTrainsFromStr",
                        value: function (e) {
                          return decodeURIComponent(e)
                            .split(",")
                            .map(function (e) {
                              return e;
                            })
                            .filter(function (e) {
                              return !!e;
                            });
                        },
                      },
                      {
                        key: "setStateSync",
                        value: function (e) {
                          var t = this;
                          return new Promise(function (i) {
                            t.setState(e, i);
                          });
                        },
                      },
                      {
                        key: "onShowShareGuiode",
                        value: function () {
                          var e = this;
                          D.ZK.getAttr("newTrainlistAlternateGuideIsShown") &&
                            !D.ZK.getAttr("newTrainlistShareGuideIsShown") &&
                            Z.default.isWechat &&
                            this.setState(
                              { isShowShareGuide: !0 },
                              function () {
                                (e.isListShareGuideShown = !0),
                                  e.ubtTrace("s_trn_z_trace_10320660960", {
                                    bizKey:
                                      "z_mini_listPage_screenshot_mantle_show",
                                  });
                              }
                            );
                        },
                      },
                      {
                        key: "onCloseShareListGuide",
                        value: function () {
                          this.setState({ isShowShareGuide: !1 });
                        },
                      },
                      {
                        key: "onStepChange",
                        value: function (e) {
                          e >= 1 && this.state.isShareMode;
                        },
                      },
                      {
                        key: "getPreCandidateInfo",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t,
                                i,
                                a,
                                n,
                                r,
                                o,
                                c = this;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (t = { fromPage: 1 }),
                                          (e.next = 4),
                                          (0, C.kcx)(t)
                                        );
                                      case 4:
                                        (i = e.sent) &&
                                          i.resultCode &&
                                          i.openCandidate &&
                                          ((a = i.candidateDetail),
                                          (n = i.limitNum),
                                          (r = i.sameDateLimitNum),
                                          (o = i.openCandidate),
                                          this.setState(
                                            {
                                              preCandidateInfo: {
                                                limitNum: n || 10,
                                                sameDateLimitNum: r || 5,
                                                candidateDetail: a,
                                                openCandidate: o,
                                              },
                                            },
                                            function () {
                                              c.onShowAlternateGuiode();
                                            }
                                          )),
                                          (e.next = 10);
                                        break;
                                      case 8:
                                        (e.prev = 8), (e.t0 = e.catch(0));
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 8]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "candidateCheckTrain",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e(t, i) {
                              var a,
                                n,
                                r,
                                o,
                                c,
                                l,
                                u,
                                d,
                                m,
                                h,
                                f,
                                p,
                                g = this;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (a = this.state.selectDate),
                                          (n = t.TrainNumber),
                                          (r = t.DepartTime),
                                          (o = t.ArriveTime),
                                          (c = t.DepartStation),
                                          (l = t.ArriveStation),
                                          (u = t._selectedSeatName),
                                          (d = qe.WG.get()),
                                          (m =
                                            null == d ? void 0 : d.bind12306),
                                          (this.totalPollingNum = 15),
                                          (e.prev = 5),
                                          (h = {
                                            userName:
                                              (null == m
                                                ? void 0
                                                : m.userName12306) || "",
                                            password:
                                              de.Z.tripleDESEncrypt(
                                                null == m ? void 0 : m.pwd
                                              ) || "",
                                            pollingKey: i,
                                            trainNumber: n,
                                            departTime: ""
                                              .concat(
                                                b()(a).format("YYYY-MM-DD"),
                                                " "
                                              )
                                              .concat(r, ":00"),
                                            arriveTime: ""
                                              .concat(
                                                b()(a).format("YYYY-MM-DD"),
                                                " "
                                              )
                                              .concat(o, ":00"),
                                            departStation: c,
                                            arriveStation: l,
                                            seatName: u,
                                          }),
                                          (e.next = 9),
                                          (0, C.KjX)(h)
                                        );
                                      case 9:
                                        if (1 !== (f = e.sent).resultCode) {
                                          e.next = 24;
                                          break;
                                        }
                                        if (!f.validCandidate) {
                                          e.next = 15;
                                          break;
                                        }
                                        return e.abrupt("return", !0);
                                      case 15:
                                        return (
                                          (0, k.hideLoading)(),
                                          ((p = {}).content =
                                            f.invalidDesc || ""),
                                          (p.buttons = [{ name: "我知道了" }]),
                                          (p.clickOption = function () {
                                            g.onCloseAlternateAbnormal();
                                          }),
                                          this.onShowAlternateAbnormal(p),
                                          e.abrupt("return", !1)
                                        );
                                      case 22:
                                        e.next = 36;
                                        break;
                                      case 24:
                                        if (2 !== f.resultCode) {
                                          e.next = 35;
                                          break;
                                        }
                                        return (
                                          (e.next = 27), w.Z.awaitTime(1e3)
                                        );
                                      case 27:
                                        if (
                                          ((this.pollingNum += 1),
                                          !(
                                            this.pollingNum <=
                                            this.totalPollingNum
                                          ))
                                        ) {
                                          e.next = 32;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.candidateCheckTrain(
                                            t,
                                            f.pollingKey
                                          )
                                        );
                                      case 32:
                                        return e.abrupt("return", !1);
                                      case 33:
                                        e.next = 36;
                                        break;
                                      case 35:
                                        return e.abrupt("return", !1);
                                      case 36:
                                        e.next = 41;
                                        break;
                                      case 38:
                                        (e.prev = 38),
                                          (e.t0 = e.catch(5)),
                                          console.log("e", e.t0);
                                      case 41:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[5, 38]]
                              );
                            })
                          );
                          return function (t, i) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getIsExceedSameDateLimitNum",
                        value: function (e, t) {
                          var i = JSON.parse(JSON.stringify(e));
                          if (0 === i.length) return !1;
                          var a = this.state.selectDate,
                            n = [];
                          return (
                            i.map(function (e) {
                              e._selectDate === a && n.push(e);
                            }),
                            n.length === t
                          );
                        },
                      },
                      {
                        key: "handleComparedDate",
                        value: function (e) {
                          var t = JSON.parse(JSON.stringify(e));
                          if (0 === t.length) return !0;
                          var i = [];
                          t.map(function (e) {
                            i.includes(e._selectDate) || i.push(e._selectDate);
                          });
                          var a = this.state.selectDate;
                          if (1 === i.length) {
                            var n = i[0];
                            return Math.abs(_.Z.getDiffDays(n, a)) <= 1;
                          }
                          return i.includes(a);
                        },
                      },
                      {
                        key: "addAlternate",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e(t, i) {
                              var a,
                                n,
                                r,
                                o,
                                c,
                                l,
                                u,
                                d,
                                m,
                                h,
                                f,
                                p = this;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((a = JSON.parse(JSON.stringify(t))),
                                          (n = this.state),
                                          (r = n.alternateListData),
                                          (o = n.preCandidateInfo),
                                          P.ZP.isLogin)
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return (
                                          (0, k.hideLoading)(),
                                          (e.next = 6),
                                          P.ZP.doLogin()
                                        );
                                      case 6:
                                        if (
                                          ((c = qe.WG.get()),
                                          (l =
                                            null == c ? void 0 : c.bind12306),
                                          c &&
                                            null != l &&
                                            l.userName12306 &&
                                            null != l &&
                                            l.pwd)
                                        ) {
                                          e.next = 20;
                                          break;
                                        }
                                        return (
                                          (0, k.hideLoading)(),
                                          (e.next = 12),
                                          this.goLogin12306()
                                        );
                                      case 12:
                                        if (
                                          ((u = qe.WG.get()),
                                          (d =
                                            null == u ? void 0 : u.bind12306),
                                          console.log("newbind12306", d),
                                          "0" ===
                                            (null == d
                                              ? void 0
                                              : d.memberStatus12306))
                                        ) {
                                          e.next = 18;
                                          break;
                                        }
                                        return (
                                          this.showGuideToMember(t, i),
                                          e.abrupt("return")
                                        );
                                      case 18:
                                        e.next = 24;
                                        break;
                                      case 20:
                                        if ("0" === l.memberStatus12306) {
                                          e.next = 24;
                                          break;
                                        }
                                        return (
                                          (0, k.hideLoading)(),
                                          this.showGuideToMember(t, i),
                                          e.abrupt("return")
                                        );
                                      case 24:
                                        if (
                                          ((m = o.sameDateLimitNum),
                                          (h = o.limitNum),
                                          !this.getIsExceedSameDateLimitNum(
                                            r,
                                            m
                                          ))
                                        ) {
                                          e.next = 34;
                                          break;
                                        }
                                        return (
                                          (0, k.hideLoading)(),
                                          ((f = {}).content =
                                            "同一候补订单中每个乘车日期最多可包含".concat(
                                              m,
                                              "个不同车次+席别的组合需求"
                                            )),
                                          (f.buttons = [{ name: "我知道了" }]),
                                          (f.clickOption = function () {
                                            p.onCloseAlternateAbnormal();
                                          }),
                                          this.onShowAlternateAbnormal(f),
                                          e.abrupt("return")
                                        );
                                      case 34:
                                        if (r.length !== h) {
                                          e.next = 38;
                                          break;
                                        }
                                        return (
                                          (0, k.hideLoading)(),
                                          (0, k.showToast)(
                                            "最多可添加".concat(h, "个候补需求")
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 38:
                                        if (this.handleComparedDate(r)) {
                                          e.next = 43;
                                          break;
                                        }
                                        return (
                                          (0, k.hideLoading)(),
                                          (0, k.showToast)(
                                            "请选择2个相邻的乘车日期"
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 43:
                                        return (
                                          (this.pollingNum = 0),
                                          (e.next = 46),
                                          this.candidateCheckTrain(t, "")
                                        );
                                      case 46:
                                        e.sent
                                          ? (r.push(a),
                                            this.setState(
                                              {
                                                alternateListData:
                                                  this.filterAlternateList(r),
                                              },
                                              function () {
                                                (0, k.hideLoading)(),
                                                  p.onShowAlternateDot(i);
                                              }
                                            ))
                                          : ((0, k.hideLoading)(),
                                            (0, k.showToast)("候补失败"));
                                      case 48:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function (t, i) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "filterAlternateList",
                        value: function (e) {
                          var t = JSON.parse(JSON.stringify(e));
                          return (t = t.sort(function (e, t) {
                            return b()(
                              ""
                                .concat(e._selectDate, " ")
                                .concat(e.DepartTime, ":00")
                            ).isBefore(
                              b()(
                                ""
                                  .concat(t._selectDate, " ")
                                  .concat(t.DepartTime, ":00")
                              )
                            )
                              ? -1
                              : 1;
                          }));
                        },
                      },
                      {
                        key: "getAlternateListIcon",
                        value: function () {
                          return new Promise(function (e, t) {
                            var i = S().createSelectorQuery();
                            i
                              .select("#alternate-list-icon")
                              .boundingClientRect(),
                              i.selectViewport().scrollOffset(),
                              i.exec(function (i) {
                                i && i[0]
                                  ? e(i[0])
                                  : t("获取候补列表购物车位置失败");
                              });
                          });
                        },
                      },
                      {
                        key: "onShowAlternateDot",
                        value: function (e) {
                          var t = this;
                          this.state.isShowAlternatedot ||
                            this.getAlternateListIcon().then(function (i) {
                              var a,
                                n =
                                  (i.left + i.right) / 2 -
                                  (20 / 750) *
                                    S().getSystemInfoSync().windowWidth,
                                r =
                                  (i.top + i.bottom) / 2 -
                                  (20 / 750) *
                                    S().getSystemInfoSync().windowWidth,
                                s = {},
                                o = {};
                              (s.x = e.touches[0].clientX),
                                (s.y = e.touches[0].clientY);
                              var c = { x: n, y: r };
                              s.y < c.y ? (o.y = s.y - 150) : (o.y = c.y - 150);
                              var l = !1;
                              s.x > c.x
                                ? ((l = !0),
                                  (o.y = s.y - Math.abs(c.y - s.y)),
                                  (o.x = Math.abs(s.x - c.x) / 2 - s.x))
                                : (o.x = Math.abs(s.x - c.x) / 2 + s.x);
                              var u = (function (e, t, i) {
                                for (
                                  var a = [],
                                    n = [],
                                    r = [],
                                    s = Math.sqrt(
                                      Math.pow(e[1].x - e[0].x, 2) +
                                        Math.pow(e[1].y - e[0].y, 2)
                                    ),
                                    o = s / t,
                                    c =
                                      Math.sqrt(
                                        Math.pow(e[2].x - e[1].x, 2) +
                                          Math.pow(e[2].y - e[1].y, 2)
                                      ) / t,
                                    l = (e[1].y - e[0].y) / (e[1].x - e[0].x),
                                    u = (e[2].y - e[1].y) / (e[2].x - e[1].x),
                                    d = Math.atan(l),
                                    m = Math.atan(u),
                                    h = 1;
                                  h <= t;
                                  h++
                                ) {
                                  var f = o * h,
                                    p = c * h,
                                    g = {};
                                  (g.x = i
                                    ? -f * Math.cos(d) + e[0].x
                                    : f * Math.cos(d) + e[0].x),
                                    (g.y = f * Math.sin(d) + e[0].y),
                                    n.push(g);
                                  var S = {};
                                  (S.x = i
                                    ? -p * Math.cos(m) + e[1].x
                                    : p * Math.cos(m) + e[1].x),
                                    (S.y = p * Math.sin(m) + e[1].y),
                                    r.push(S);
                                  var v = (S.y - g.y) / (S.x - g.x),
                                    T = Math.atan(v),
                                    Z =
                                      (f / s) *
                                      Math.sqrt(
                                        Math.pow(S.x - g.x, 2) +
                                          Math.pow(S.y - g.y, 2)
                                      ),
                                    w = {};
                                  (w.x = Z * Math.cos(T) + g.x),
                                    (w.y = Z * Math.sin(T) + g.y),
                                    a.push(w);
                                }
                                return { bezier_points: a };
                              })([s, o, c], 15, l);
                              null === (a = t.$startAnimation) ||
                                void 0 === a ||
                                a.start({ linePos: u, finger: s });
                            });
                        },
                      },
                      {
                        key: "deleteAlternate",
                        value: function (e) {
                          var t = JSON.parse(JSON.stringify(e)),
                            i = this.state.alternateListData,
                            a = [];
                          i.map(function (e) {
                            (e.TrainNumber === t.TrainNumber &&
                              e._selectedSeatName === t._selectedSeatName) ||
                              a.push(e);
                          }),
                            this.setState(
                              { alternateListData: a },
                              function () {
                                (0, k.showToast)("已从候补列表移除");
                              }
                            );
                        },
                      },
                      {
                        key: "onClickAlternate",
                        value: function (e) {
                          var t = e.train,
                            i = e.type,
                            a = e.seatName,
                            n = e.domInfo,
                            r = this.state,
                            s = r.selectDate,
                            o = r.isAlternateMode,
                            c = r.preCandidateInfo;
                          if (o && c) {
                            var l = JSON.parse(JSON.stringify(t)),
                              u = l.seats.find(function (e) {
                                return e.SeatName === a;
                              });
                            (l._selectedSeatName = a),
                              (l._selectedSeatPrice = u.SeatPrice),
                              (l._selectDate = s),
                              "add" === i
                                ? ((0, k.showLoading)(),
                                  this.addAlternate(l, n))
                                : this.deleteAlternate(l);
                          }
                        },
                      },
                      {
                        key: "onGrabQueue",
                        value: function () {
                          this.props.onCommonSceneDrawer.alertAsync({
                            title: "排队人数说明",
                            content: function () {
                              return (0, q.BX)(v.View, {
                                className: "grab-queue",
                                children: [
                                  (0, q.tZ)(v.View, {
                                    className: "grab-queue-main",
                                    children:
                                      "排队人数是根据用户当前查询日期中, 该车次主坐席（二等座或者硬座）在智行平台内用户抢票排队人数分析得出",
                                  }),
                                  (0, q.tZ)(v.View, {
                                    className: "grab-queue-sub",
                                    children:
                                      "*温馨提示：受高峰出行、网络状况等不可控因素影响，当前展示的排队数值非百分百准确，仅供参考",
                                  }),
                                ],
                              });
                            },
                            isShowClose: !1,
                          });
                        },
                      },
                      {
                        key: "showGuideToMember",
                        value: function (e, t) {
                          var i = this,
                            a = {
                              content: "提交候补订单需激活12306畅行会员",
                              buttons: [
                                { name: "不激活", type: 1 },
                                { name: "去激活", type: 2 },
                              ],
                              clickOption: function (a) {
                                2 === (null == a ? void 0 : a.type)
                                  ? i.goLogin12306Member(e, t)
                                  : i.onCloseAlternateAbnormal();
                              },
                            };
                          this.onShowAlternateAbnormal(a);
                        },
                      },
                      {
                        key: "goLogin12306",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t, i;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          this.navigateToAsync({
                                            url: "/pages/12306/login/login",
                                          })
                                        );
                                      case 3:
                                        return (
                                          (t = qe.WG.get()),
                                          (i =
                                            null == t ? void 0 : t.bind12306),
                                          ge.Z.commonDebugTrace(
                                            "login12306 success"
                                          ),
                                          (e.next = 8),
                                          (0, Se.Mm)(
                                            null == i
                                              ? void 0
                                              : i.userName12306,
                                            null == i ? void 0 : i.pwd
                                          )
                                        );
                                      case 8:
                                        Se.CZ.call(this), (e.next = 14);
                                        break;
                                      case 11:
                                        (e.prev = 11),
                                          (e.t0 = e.catch(0)),
                                          ge.Z.commonDebugTrace;
                                      case 14:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 11]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "goLogin12306Member",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e(t, i) {
                              var a, n, r;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          this.onCloseAlternateAbnormal(),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          this.navigateToAsync({
                                            url: "/pages/12306/member/member",
                                          })
                                        );
                                      case 4:
                                        if (
                                          ((a = e.sent),
                                          console.log("memberResult", a),
                                          1 !== a.code)
                                        ) {
                                          e.next = 13;
                                          break;
                                        }
                                        return (
                                          (n = qe.WG.get()),
                                          (r =
                                            null == n ? void 0 : n.bind12306),
                                          (e.next = 11),
                                          (0, Se.Mm)(
                                            null == r
                                              ? void 0
                                              : r.userName12306,
                                            null == r ? void 0 : r.pwd
                                          )
                                        );
                                      case 11:
                                        Se.CZ.call(this),
                                          this.addAlternate(t, i);
                                      case 13:
                                        e.next = 18;
                                        break;
                                      case 15:
                                        (e.prev = 15),
                                          (e.t0 = e.catch(1)),
                                          console.log("e", e.t0);
                                      case 18:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 15]]
                              );
                            })
                          );
                          return function (t, i) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onShowAlternateAbnormal",
                        value: function (e) {
                          this.setState({
                            alternateAbnormalData: e,
                            isShowAlternateAbnormal: !0,
                          });
                        },
                      },
                      {
                        key: "onCloseAlternateAbnormal",
                        value: function () {
                          this.setState({
                            alternateAbnormalData: null,
                            isShowAlternateAbnormal: !1,
                          });
                        },
                      },
                      {
                        key: "onCloseAlternateList",
                        value: function () {
                          this.setState({ isShowAlternateList: !1 });
                        },
                      },
                      {
                        key: "onCloseAlternateMode",
                        value: function () {
                          this.setState({
                            isAlternateMode: !1,
                            sortType: "DepartTimeStamp",
                          });
                        },
                      },
                      {
                        key: "goToCandidateOrderInput",
                        value: function () {
                          var e = this.state,
                            t = e.alternateListData,
                            i = e.preCandidateInfo,
                            a = e.selectDate,
                            n = e.titleFromStationStr,
                            r = e.titleToStationStr,
                            s = e.departInfo,
                            o = e.arriveInfo,
                            c = i.limitNum,
                            l = [];
                          t.map(function (e) {
                            var t = {};
                            (t.departStation = e.DepartStation),
                              (t.arriveStation = e.ArriveStation),
                              (t.departDate = e._selectDate),
                              (t.departTime = e.DepartTime),
                              (t.arriveDate = _.Z.getSpecialDay(
                                e._selectDate,
                                e.TakeDays
                              )),
                              (t.arriveTime = e.ArriveTime),
                              (t.trainNo = e.TrainNumber),
                              (t.seatName = e._selectedSeatName),
                              (t.ticketPrice = e._selectedSeatPrice),
                              (t.remark = ""),
                              (t.is_cross_border = !!e._isCrossEnv),
                              l.push(t);
                          });
                          var u = {
                            from: n || (null == s ? void 0 : s.name) || "",
                            to: r || (null == o ? void 0 : o.name) || "",
                            fromCode: t[0]._FromCode || "",
                            toCode: t[0]._ToCode || "",
                            date: a,
                            limitNum: c,
                            candidateList: l,
                          };
                          console.log("params", u),
                            this.navigateTo({
                              url: "/pages/taroCRN/train/pages/candidateOrderInput/index",
                              data: u,
                            });
                        },
                      },
                      {
                        key: "onShowAlternateGuiode",
                        value: function () {
                          D.ZK.getAttr("newTrainlistAlternateGuideIsShown") ||
                            this.setState({ isShowAlternateGuide: !0 });
                        },
                      },
                      {
                        key: "onCloseAlternateGuide",
                        value: function () {
                          this.setState({ isShowAlternateGuide: !1 });
                        },
                      },
                      {
                        key: "getSmartRecommendList",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t,
                                i,
                                a,
                                n,
                                r,
                                c,
                                l,
                                u,
                                d,
                                m,
                                h,
                                f,
                                p,
                                g,
                                S,
                                v,
                                T,
                                Z,
                                w,
                                y,
                                N,
                                b,
                                k,
                                V,
                                _,
                                x,
                                D,
                                B;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state),
                                          (i = t.smartTravelTabInfo),
                                          (a = t.filterTrainType),
                                          (n = t.stations),
                                          null != i && i.smartTripInfo)
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 3:
                                        return (
                                          (this.noDirectList = []),
                                          (this.smartRecList = []),
                                          (e.prev = 5),
                                          (r = this.getSmartRequestParams(
                                            "",
                                            "interlude"
                                          )),
                                          (c = ["trainListScene"]),
                                          (l = this.props.isReschedule)
                                            ? ((u =
                                                I.ET.rescheduleInfo.orderInfo),
                                              (r.orgBizOrderNumber =
                                                null == u
                                                  ? void 0
                                                  : u.tyOrderNo))
                                            : ((r.fromPage = "trainTraffic"),
                                              (c = c.concat([
                                                "timeSavingScene",
                                                "moneySavingScene",
                                                "todayDepartScene",
                                                "tomorrowDepartScene",
                                                "sleeperOvernightScene",
                                              ])),
                                              (d = {}),
                                              (m =
                                                null == n
                                                  ? void 0
                                                  : n.filter(function (e) {
                                                      return (
                                                        e.isSelected &&
                                                        "A" == e.stationType
                                                      );
                                                    })),
                                              (h =
                                                null == n
                                                  ? void 0
                                                  : n.filter(function (e) {
                                                      return (
                                                        e.isSelected &&
                                                        "D" == e.stationType
                                                      );
                                                    })),
                                              (f =
                                                (null == m
                                                  ? void 0
                                                  : m.length) > 0 ||
                                                (null == h
                                                  ? void 0
                                                  : h.length) > 0),
                                              (p = 1 !== a),
                                              (f || p) &&
                                                ((c = [
                                                  "timeSavingScene",
                                                  "moneySavingScene",
                                                  "sleeperOvernightScene",
                                                ]),
                                                (d = {
                                                  gdcOnly:
                                                    !!(2 & a) || !!(4 & a),
                                                }),
                                                (null == h
                                                  ? void 0
                                                  : h.length) > 0 &&
                                                  (d.fromStationName = h
                                                    .map(function (e) {
                                                      return e.name;
                                                    })
                                                    .join(",")),
                                                (null == m
                                                  ? void 0
                                                  : m.length) > 0 &&
                                                  (d.toStationName = m
                                                    .map(function (e) {
                                                      return e.name;
                                                    })
                                                    .join(","))),
                                              Pe.Z.isNotEmptyObj(d) &&
                                                (r.optionalParameter = d)),
                                          (r.trainSceneList = c),
                                          (g = l ? C.j55 : C.uwY),
                                          (e.next = 14),
                                          g(r)
                                        );
                                      case 14:
                                        1 ===
                                          (null == (S = e.sent)
                                            ? void 0
                                            : S.resultCode) &&
                                          ((v = S.noDirectList),
                                          (T = void 0 === v ? [] : v),
                                          (Z = S.timeSavingList),
                                          (w = void 0 === Z ? [] : Z),
                                          (y = S.moneySavingList),
                                          (N = void 0 === y ? [] : y),
                                          (b = S.todayDepartTripList),
                                          (k = void 0 === b ? [] : b),
                                          (V = S.tomorrowDepartTripList),
                                          (_ = void 0 === V ? [] : V),
                                          (x = S.sleeperOvernightList),
                                          (D = void 0 === x ? [] : x),
                                          (null == T ? void 0 : T.length) > 0 &&
                                            ((this.noDirectList = T.map(
                                              function (e) {
                                                return (0, o.Z)(
                                                  (0, o.Z)({}, e),
                                                  {},
                                                  {
                                                    trips:
                                                      e.trips &&
                                                      e.trips.map(function (e) {
                                                        return (0,
                                                        o.Z)((0, o.Z)({}, e), {}, { ArriveStation: e.fromStation, DepartStation: e.toStation });
                                                      }),
                                                  }
                                                );
                                              }
                                            )),
                                            this.noDirectList.length > 0 &&
                                              this.ubtTrace(
                                                "s_trn_z_trace_10320660960",
                                                {
                                                  bizKey:
                                                    "z_mini_list_noDirect_show",
                                                }
                                              )),
                                          (B = []),
                                          (null == k ? void 0 : k.length) > 0 &&
                                            (B = k),
                                          (null == _ ? void 0 : _.length) > 0 &&
                                            (B = B.concat(_)),
                                          (null == w ? void 0 : w.length) > 0 &&
                                            (B = B.concat(w)),
                                          (null == N ? void 0 : N.length) > 0 &&
                                            (B = B.concat(N)),
                                          (null == D ? void 0 : D.length) > 0 &&
                                            (B = B.concat(D)),
                                          B.length > 0 &&
                                            (this.smartRecList = B.map(
                                              function (e) {
                                                return (0, o.Z)(
                                                  (0, o.Z)({}, e),
                                                  {},
                                                  {
                                                    trips:
                                                      e.trips &&
                                                      e.trips.map(function (e) {
                                                        return (0,
                                                        o.Z)((0, o.Z)({}, e), {}, { ArriveStation: e.fromStation, DepartStation: e.toStation });
                                                      }),
                                                  }
                                                );
                                              }
                                            )),
                                          this.mergeTrainViewListWithSmartRec()),
                                          (e.next = 21);
                                        break;
                                      case 18:
                                        (e.prev = 18),
                                          (e.t0 = e.catch(5)),
                                          console.log(e.t0);
                                      case 21:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[5, 18]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "mergeTrainViewListWithSmartRec",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.filterTrainType,
                            a = t.filterTrainTime,
                            n = t.isReschedule;
                          if (
                            ((!!(2 & i) ||
                              !!(4 & i) ||
                              !(!!(8 & i) || !!(16 & i))) &&
                              1 === a) ||
                            n
                          ) {
                            var r = JSON.parse(
                                JSON.stringify(this.noDirectList)
                              ),
                              s = this.state,
                              c = s.trainViewList,
                              l = s.selectDate,
                              u = s.sortType,
                              d = s.sortAscending,
                              m = s.stations,
                              h = [].concat(c);
                            r.length > 0 &&
                              "DepartTimeStamp" === u &&
                              1 === i &&
                              r.forEach(function (t) {
                                if (
                                  ((t._isFilterStation = !0),
                                  d || t.trips.reverse(),
                                  (t.trips = e.filterNoDirectListByStation(
                                    t.trips,
                                    m
                                  )),
                                  t.trips.length > 0)
                                ) {
                                  var i = h.findIndex(function (e) {
                                      return d
                                        ? e.DepartTime &&
                                            b()(
                                              ""
                                                .concat(l, " ")
                                                .concat(t.fromTime, ":01")
                                            ).isBefore(
                                              b()(
                                                ""
                                                  .concat(l, " ")
                                                  .concat(e.DepartTime)
                                              )
                                            )
                                        : e.DepartTime &&
                                            b()(
                                              ""
                                                .concat(l, " ")
                                                .concat(t.fromTime, ":01")
                                            ).isAfter(
                                              b()(
                                                ""
                                                  .concat(l, " ")
                                                  .concat(e.DepartTime)
                                              )
                                            );
                                    }),
                                    a = -1 === i ? h.length : i;
                                  h.splice(
                                    a,
                                    0,
                                    (0, o.Z)(
                                      { type: "smartRec", isShowMore: !n },
                                      t
                                    )
                                  ),
                                    e.ubtTrace(197675, {
                                      exposureType: "normal",
                                      bizKey: "mini_t_list_nodirectreco_show",
                                    });
                                }
                              });
                            var f = JSON.parse(
                              JSON.stringify(this.smartRecList)
                            );
                            if (
                              f.length > 0 &&
                              -1 !== ["DepartTimeStamp", "RunTime"].indexOf(u)
                            ) {
                              switch (u) {
                                case "DepartTimeStamp":
                                  d
                                    ? f.sort(function (e, t) {
                                        var i, a, n, r;
                                        return b()(
                                          ""
                                            .concat(l, " ")
                                            .concat(
                                              null == e ||
                                                null === (i = e.trips) ||
                                                void 0 === i ||
                                                null === (a = i[0]) ||
                                                void 0 === a
                                                ? void 0
                                                : a.startTime,
                                              ":01"
                                            )
                                        ).isBefore(
                                          b()(
                                            ""
                                              .concat(l, " ")
                                              .concat(
                                                null == t ||
                                                  null === (n = t.trips) ||
                                                  void 0 === n ||
                                                  null === (r = n[0]) ||
                                                  void 0 === r
                                                  ? void 0
                                                  : r.startTime,
                                                ":00"
                                              )
                                          )
                                        )
                                          ? -1
                                          : 1;
                                      })
                                    : f.sort(function (e, t) {
                                        var i, a, n, r;
                                        return b()(
                                          ""
                                            .concat(l, " ")
                                            .concat(
                                              null == e ||
                                                null === (i = e.trips) ||
                                                void 0 === i ||
                                                null === (a = i[0]) ||
                                                void 0 === a
                                                ? void 0
                                                : a.startTime,
                                              ":01"
                                            )
                                        ).isAfter(
                                          b()(
                                            ""
                                              .concat(l, " ")
                                              .concat(
                                                null == t ||
                                                  null === (n = t.trips) ||
                                                  void 0 === n ||
                                                  null === (r = n[0]) ||
                                                  void 0 === r
                                                  ? void 0
                                                  : r.startTime,
                                                ":00"
                                              )
                                          )
                                        )
                                          ? -1
                                          : 1;
                                      });
                                  break;
                                case "RunTime":
                                  f.sort(function (e, t) {
                                    var i, a, n, r;
                                    return (
                                      (null == e ||
                                      null === (i = e.trips) ||
                                      void 0 === i ||
                                      null === (a = i[0]) ||
                                      void 0 === a
                                        ? void 0
                                        : a.totalMinutes) -
                                      (null == t ||
                                      null === (n = t.trips) ||
                                      void 0 === n ||
                                      null === (r = n[0]) ||
                                      void 0 === r
                                        ? void 0
                                        : r.totalMinutes)
                                    );
                                  });
                              }
                              f.forEach(function (t) {
                                if (
                                  ((t._isFilterStation = !0),
                                  (t.trips = e.filterNoDirectListByStation(
                                    t.trips,
                                    m
                                  )),
                                  t.trips.length > 0)
                                ) {
                                  var i,
                                    a = -1,
                                    n =
                                      null === (i = t.trips) || void 0 === i
                                        ? void 0
                                        : i[0];
                                  switch (u) {
                                    case "DepartTimeStamp":
                                      d || t.trips.reverse(),
                                        (a = h.findIndex(function (e) {
                                          return d
                                            ? e.DepartTime &&
                                                b()(
                                                  ""
                                                    .concat(l, " ")
                                                    .concat(
                                                      null == n
                                                        ? void 0
                                                        : n.startTime,
                                                      ":01"
                                                    )
                                                ).isBefore(
                                                  b()(
                                                    ""
                                                      .concat(l, " ")
                                                      .concat(e.DepartTime)
                                                  )
                                                )
                                            : e.DepartTime &&
                                                b()(
                                                  ""
                                                    .concat(l, " ")
                                                    .concat(
                                                      null == n
                                                        ? void 0
                                                        : n.startTime,
                                                      ":01"
                                                    )
                                                ).isAfter(
                                                  b()(
                                                    ""
                                                      .concat(l, " ")
                                                      .concat(e.DepartTime)
                                                  )
                                                );
                                        }));
                                      break;
                                    case "RunTime":
                                      a = h.findIndex(function (e) {
                                        return (
                                          (null == n
                                            ? void 0
                                            : n.totalMinutes) < e.RunTime
                                        );
                                      });
                                  }
                                  var r = -1 === a ? h.length : a;
                                  h.splice(
                                    r,
                                    0,
                                    (0, o.Z)({ type: "smartRec" }, t)
                                  );
                                }
                              });
                            }
                            (null == h ? void 0 : h.length) >
                              (null == c ? void 0 : c.length) &&
                              this.setState({ trainViewList: h });
                          }
                        },
                      },
                      {
                        key: "onInterceptTipsAsync",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e(t) {
                              var i,
                                a = this;
                              return (0, s.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        (i = b()(t).diff(b()(), "minutes")) &&
                                        !(i > 30)
                                      ) {
                                        e.next = 3;
                                        break;
                                      }
                                      return e.abrupt("return", !0);
                                    case 3:
                                      return e.abrupt(
                                        "return",
                                        new Promise(function (e) {
                                          a.props.onCommonSceneDrawer.alert({
                                            title: "温馨提示",
                                            confirmText: "我知道了",
                                            content:
                                              "您选择的列车距离发车仅剩".concat(
                                                i,
                                                "分钟<p/>请确保出票后可以及时进站乘车，以免耽误您的出行"
                                              ),
                                            onBreak: function () {
                                              e(!1);
                                            },
                                            onButtonClick: function () {
                                              e(!0);
                                            },
                                          });
                                        })
                                      );
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onGoToSmartJianLou",
                        value: function (e) {
                          var t = e.train,
                            i = this.state.subTrainSeats,
                            a = t.DepartStation,
                            n = t.ArriveStation,
                            r = t.TrainNumber,
                            s = t.RunTime,
                            o = t._selectDate,
                            c = t.DepartTime,
                            l = t.ArriveTime,
                            u = i.find(function (e) {
                              return e.trainNo === r;
                            }).type;
                          this.ubtTrace(
                            "TZWList_TrainTab_ResTicketEntry_click",
                            {
                              PageId: this.pageId,
                              DepartStation: a,
                              ArriveStation: n,
                              scmType:
                                3 === u
                                  ? "多买几站"
                                  : 2 === u
                                  ? "同车换座"
                                  : "上车补票",
                              DepartDate: o,
                            }
                          );
                          var d =
                            "https://pages.suanya.com/webapp/20230324-train-remaining-tickets-monitor/result?isHideNavBar=YES&isImmersiveMode=YES&from="
                              .concat(a, "&to=")
                              .concat(n, "&no=")
                              .concat(r, "&runTime=")
                              .concat(s, "&fromDate=")
                              .concat(encodeURIComponent(o), "&fromTime=")
                              .concat(encodeURIComponent(c), "&toTime=")
                              .concat(encodeURIComponent(l), "&source=")
                              .concat("miniSearchListPage");
                          w.Z.commonNavigator(d);
                        },
                      },
                      {
                        key: "onGoToSmartScheme",
                        value: function (e) {
                          var t = e.train,
                            i = t._subTrainSeat,
                            a = t.DepartStation,
                            n = t.ArriveStation,
                            r = t.DepartTime,
                            s = t.ArriveTime,
                            o = i.smartSeatCardTripInfo,
                            c = "";
                          if (
                            (this.ubtTrace("TZWList_Smart_Smart_click", {
                              fromSource: "SmartSeatTrainRecommend",
                              Index: 0,
                              PageId: this.pageId,
                              scmType:
                                3 === o.type
                                  ? "跨站"
                                  : 2 === o.type
                                  ? "组合座"
                                  : "上车补",
                              Source:
                                3 === o.type
                                  ? "SmartJianlou_miniTrainListCross"
                                  : 2 === o.type
                                  ? "h5TrainListSmartSeatCombine"
                                  : "h5TrainListSmartSeatBuyGrab",
                              Status: "火车推荐智能坐席方案",
                              TripId: i.tripId,
                              Vid: P.ZP.cid + new Date().getTime(),
                            }),
                            3 === o.type)
                          ) {
                            var l,
                              u,
                              d,
                              m,
                              h,
                              f,
                              p,
                              g,
                              S,
                              v,
                              T,
                              Z,
                              y,
                              N = {
                                originDepartStation: a,
                                originArrivalStation: n,
                                originDepartTime: r,
                                originArrivalTime: s,
                                recommendDepartStation:
                                  null === (l = o.subTrainSegments[0]) ||
                                  void 0 === l
                                    ? void 0
                                    : l.fromStation,
                                recommendArrivalStation:
                                  null === (u = o.subTrainSegments[0]) ||
                                  void 0 === u
                                    ? void 0
                                    : u.toStation,
                                recommendDepartTime:
                                  null === (d = o.subTrainSegments[0]) ||
                                  void 0 === d
                                    ? void 0
                                    : d.startTime,
                                recommendArrivalTime:
                                  null === (m = o.subTrainSegments[0]) ||
                                  void 0 === m
                                    ? void 0
                                    : m.arriveTime,
                                recommendOffset:
                                  null === (h = o.subTrainSegments[0]) ||
                                  void 0 === h
                                    ? void 0
                                    : h.toStationDiff,
                                recommendDepOffset:
                                  null === (f = o.subTrainSegments[0]) ||
                                  void 0 === f
                                    ? void 0
                                    : f.fromStationDiff,
                                fromStationDiff:
                                  null === (p = o.subTrainSegments[0]) ||
                                  void 0 === p
                                    ? void 0
                                    : p.fromStationDiff,
                                toStationDiff:
                                  null === (g = o.subTrainSegments[0]) ||
                                  void 0 === g
                                    ? void 0
                                    : g.toStationDiff,
                              };
                            console.log("strideInfo", N),
                              (c = ""
                                .concat(
                                  B.ZP.getTrainBookingUrl(),
                                  "?isStride=1&strideInfo="
                                )
                                .concat(
                                  encodeURIComponent(JSON.stringify(N)),
                                  "&fromPage=SmartJianlou_miniTrainListCross&dstation="
                                )
                                .concat(
                                  encodeURIComponent(
                                    null === (S = o.subTrainSegments[0]) ||
                                      void 0 === S
                                      ? void 0
                                      : S.fromStation
                                  ),
                                  "&astation="
                                )
                                .concat(
                                  encodeURIComponent(
                                    null === (v = o.subTrainSegments[0]) ||
                                      void 0 === v
                                      ? void 0
                                      : v.toStation
                                  ),
                                  "&ddate="
                                )
                                .concat(
                                  encodeURIComponent(
                                    null === (T = o.subTrainSegments[0]) ||
                                      void 0 === T
                                      ? void 0
                                      : T.startDate
                                  ),
                                  "&trainname="
                                )
                                .concat(
                                  encodeURIComponent(
                                    null === (Z = o.subTrainSegments[0]) ||
                                      void 0 === Z
                                      ? void 0
                                      : Z.trainNo
                                  ),
                                  "&seat="
                                )
                                .concat(
                                  encodeURIComponent(
                                    null === (y = o.subTrainSegments[0]) ||
                                      void 0 === y
                                      ? void 0
                                      : y.seatName
                                  ),
                                  "&isgd=0&stu=0"
                                ));
                          } else {
                            var b =
                              2 === o.type
                                ? "h5TrainListSmartSeatCombine"
                                : "h5TrainListSmartSeatBuyGrab";
                            c = ""
                              .concat((0, Te.j)(), "?&orderSource=")
                              .concat(b, "&schemeInfoV1=")
                              .concat(encodeURIComponent(o.schemeInfoV1));
                          }
                          w.Z.commonNavigator(c);
                        },
                      },
                      {
                        key: "getIntelFlightRecommend",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t,
                                i,
                                a,
                                n,
                                r,
                                o,
                                c,
                                l,
                                u,
                                d,
                                m,
                                h,
                                f,
                                p,
                                g,
                                S,
                                v,
                                T,
                                Z;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = null),
                                          (i = this.state),
                                          (a = i.selectDate),
                                          (n = i.smartTravelTabInfo),
                                          (r = i.trainSearchCondition),
                                          (o = i.fromPage),
                                          (null != n && n.smartTripInfo) ||
                                            (null != r && r.smartTripInfo))
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return e.abrupt("return", t);
                                      case 4:
                                        return (
                                          (c = []),
                                          null != n &&
                                            n.smartTripInfo &&
                                            c.push("trainGetTableTagRecommend"),
                                          null != r &&
                                            r.smartTripInfo &&
                                            c.push(
                                              "h5SmartSystem" === o
                                                ? "H5JumpTrainList"
                                                : "trainListScene"
                                            ),
                                          (e.prev = 7),
                                          (u =
                                            n.smartTripInfo ||
                                            (null == r
                                              ? void 0
                                              : r.smartTripInfo)),
                                          (d = u.fromLocation),
                                          (m = u.fromStationType),
                                          (h = void 0 === m ? "T" : m),
                                          (f = u.fromAreaId),
                                          (p = u.toLocation),
                                          (g = u.toStationType),
                                          (S = void 0 === g ? "T" : g),
                                          (v = u.toAreaId),
                                          (T = {
                                            fromLocation: d,
                                            fromStationType: h,
                                            fromAreaId: f,
                                            fromStationFlag: !1,
                                            toLocation: p,
                                            toStationType: S,
                                            toAreaId: v,
                                            toStationFlag: !1,
                                            multiFlag: 1,
                                            departDate: a,
                                            fromPage: "trainTraffic",
                                            fromStationName:
                                              null == r
                                                ? void 0
                                                : r.departureName,
                                            toStationName:
                                              null == r
                                                ? void 0
                                                : r.arrivalName,
                                            trainSceneList: c,
                                          }),
                                          (e.next = 12),
                                          (0, C.uwY)(T)
                                        );
                                      case 12:
                                        (Z = e.sent),
                                          1 ===
                                            (null == Z
                                              ? void 0
                                              : Z.resultCode) &&
                                            "InternationalFlight" ===
                                              (null ===
                                                (l = Z.recommendPlanInfo) ||
                                              void 0 === l
                                                ? void 0
                                                : l.trafficType) &&
                                            (t = Z.recommendPlanInfo),
                                          this.getSubTrainSeats4Train(Z),
                                          (e.next = 21);
                                        break;
                                      case 18:
                                        (e.prev = 18),
                                          (e.t0 = e.catch(7)),
                                          console.log(e.t0);
                                      case 21:
                                        return (
                                          this.setState({
                                            recommendRuoteInfo: t,
                                          }),
                                          e.abrupt("return", t)
                                        );
                                      case 23:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[7, 18]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "gotoIntelFlightListPage",
                        value: function () {
                          var e = this.state.recommendRuoteInfo;
                          e.pageJumpUrl && w.Z.commonNavigator(e.pageJumpUrl);
                        },
                      },
                      {
                        key: "getSmartVirtualList",
                        value: function () {
                          var e = this;
                          this.isLoadVirtualList = !1;
                          var t = this.getSmartRequestParams("", "virtual");
                          (0, C.xTg)(t)
                            .then(function (t) {
                              var i,
                                a = t.resultCode,
                                n = t.data;
                              if (
                                1 === a &&
                                (null == n ||
                                null ===
                                  (i = n.noDirectVirtualSchemeInfoList) ||
                                void 0 === i
                                  ? void 0
                                  : i.length) > 0
                              ) {
                                var r,
                                  s,
                                  c = e.state.virtualStations,
                                  l = [];
                                null === (r = n.tripStationInfoList) ||
                                  void 0 === r ||
                                  r.forEach(function (e) {
                                    var t;
                                    (
                                      null == c ||
                                      null ===
                                        (t = c.find(function (t) {
                                          return (
                                            t.stationName === e.stationName
                                          );
                                        })) ||
                                      void 0 === t
                                        ? void 0
                                        : t.isSelected
                                    )
                                      ? l.push(
                                          (0, o.Z)(
                                            (0, o.Z)({}, e),
                                            {},
                                            { isSelected: !0 }
                                          )
                                        )
                                      : l.push(e);
                                  });
                                var u = [];
                                null ===
                                  (s = n.noDirectVirtualSchemeInfoList) ||
                                  void 0 === s ||
                                  s.forEach(function (e) {
                                    var t,
                                      i =
                                        null === (t = e.trips) || void 0 === t
                                          ? void 0
                                          : t.map(function (e) {
                                              return (0,
                                              o.Z)((0, o.Z)({}, e), {}, { DepartStation: e.fromStation, ArriveStation: e.toStation });
                                            });
                                    u = u.concat(i);
                                  }),
                                  e.setState({
                                    virtualStations: l,
                                    smartVirtualList: u,
                                  });
                              } else e.setState({ virtualStations: [], smartVirtualList: [] });
                            })
                            .catch(function (t) {
                              console.log(t),
                                e.setState({
                                  virtualStations: [],
                                  smartVirtualList: [],
                                });
                            });
                        },
                      },
                      {
                        key: "onFilterStationInWithmSmart",
                        value: function (e) {
                          var t = this,
                            i = this.state.smartStations,
                            a = i.find(function (t) {
                              return t.stationName === e;
                            });
                          a &&
                            ((a.isSelected = !a.isSelected),
                            this.setState(
                              { smartStations: (0, ue.Z)(i) },
                              function () {
                                t.getSmartZhongZhuanInfo();
                              }
                            ));
                        },
                      },
                      {
                        key: "onFilterStationWithVirtual",
                        value: function (e) {
                          var t = this,
                            i = this.state.virtualStations,
                            a = i.find(function (t) {
                              return t.stationName === e;
                            });
                          a &&
                            ((a.isSelected = !a.isSelected),
                            this.setState(
                              { virtualStations: (0, ue.Z)(i) },
                              function () {
                                t.getSmartVirtualList();
                              }
                            ));
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            i,
                            a = this,
                            n = this.props.hidden,
                            r = void 0 === n || n,
                            s = this.state,
                            o = s.isLoaded,
                            c = s.trainEmptyTipVisible,
                            l = s.showRecommendTab,
                            u = s.recommendLine,
                            d = s.trainViewList,
                            m = s.subTrainSeats,
                            h = s.scrollTop,
                            f = s.moreTrainVisible,
                            g = s.trainListShowNum,
                            S = s.isHouBuConfig,
                            T = s.smartZhongZhuanInfo,
                            y = s.tripCards,
                            N = s.isShowNoTrainBlank,
                            b = s.canShowNoNonstopTips,
                            k = s.sortType,
                            C = s.sortAscending,
                            V = s.isFilterViewAnimation,
                            _ = s.isFilterGCSelected,
                            x = s.isFilterDSelected,
                            D = s.isFilterZTKSelected,
                            B = s.isFilterYLSelected,
                            L = s.isFilterEarlyMorningSelected,
                            A = s.isFilterMorningSelected,
                            F = s.isFilterAfternoonSelected,
                            P = s.isFilterNightSelected,
                            X = s.filterTagMap,
                            M = s.trainSearchCondition,
                            R = s.stations,
                            E = s.isShowBlank,
                            K = s.isReschedule,
                            O = s.selectDate,
                            z = s.isGrabSuccessGuest,
                            G = s.isShowAnchorTabOfTimeLine,
                            H = s.scrollIntoViewId,
                            Y = s.smartSortType,
                            j = s.smartSortAscending,
                            U = s.smartFilterConditions,
                            W = s.isShowSmartFilterBar,
                            J = s.transferAreaNames,
                            $ = void 0 === J ? [] : J,
                            Q = s.isSupportPoint,
                            ee = void 0 !== Q && Q,
                            te = s.isSupportSilent,
                            ie = void 0 !== te && te,
                            ae = s.isShareMode,
                            ne = s.preFilterTagMap,
                            re = s.isShowShareGuide,
                            se = s.isFoldShareBtn,
                            oe = s.isAlternateMode,
                            ce = s.trainViewModeType,
                            le = s.isShowAlternateList,
                            ue = s.alternateListData,
                            de = s.isShowAlternateAbnormal,
                            me = s.alternateAbnormalData,
                            he = s.preCandidateInfo,
                            fe = s.isShowAlternatedot,
                            ge = s.alternatedotAni,
                            Se = s.isShowAlternateGuide,
                            Te = s.tabListLen,
                            Ze = s.isListSwipeStart,
                            Ce = s.recommendRuoteInfo,
                            _e = s.isTicketOnly,
                            De = s.fromPage,
                            Ie = s.trainCrossBanners,
                            Le = s.smartStations,
                            Ae = s.virtualStations,
                            Fe = s.smartVirtualList,
                            Pe = s.isScrollUp,
                            Xe = w.Z.isIPhoneX(),
                            Me = Z.default.isWechat,
                            Re = "robOpeningTimeQuery" === ce,
                            Ee = u && !(!Me && "bus" === l) && !K && !Ce && !Re,
                            Ke = this.trainList.length > 0,
                            Oe = this.noDirectList.length > 0,
                            qe = f && d && d.length < 100 && !K && T && !ae,
                            We =
                              (null == T ||
                              null === (e = T.trips) ||
                              void 0 === e
                                ? void 0
                                : e.length) || 0,
                            Je = qe && We > 0,
                            $e = !Ke && Fe.length > 0,
                            Qe = !(Ee || Ke || Oe || Je || $e),
                            et =
                              d.length > 0 &&
                              d
                                .filter(function (e) {
                                  return !e.type;
                                })
                                .every(function (e) {
                                  return e.isPreSale;
                                }),
                            tt = d.filter(function (e) {
                              return e._isChecked4Share;
                            }).length,
                            it = Z.default.isWechat,
                            at = !K && Z.default.isWechat,
                            nt = at && !ae && !W,
                            ot = at && ae && !W,
                            dt = [],
                            ht = [];
                          (dt = d.filter(function (e) {
                            return e._isFilterStation;
                          })),
                            (i = d.filter(function (e) {
                              return !e._isFilterStation;
                            }));
                          var pt = dt.length;
                          ht = dt.concat(i);
                          var gt =
                            [_ || x, D || B].filter(function (e) {
                              return !!e;
                            }).length +
                            R.filter(function (e) {
                              return e.isSelected;
                            }).length +
                            [
                              ne.directOnly,
                              ne.ticketOnly,
                              ne.isCanPointsPay,
                              ne.isShared,
                              ne.combineSeats,
                              ne.student,
                              ne.isCanSilent,
                            ].filter(function (e) {
                              return !!e;
                            }).length +
                            [L, A, F, P].filter(function (e) {
                              return !!e;
                            }).length;
                          return (0, q.BX)(v.Block, {
                            children: [
                              (0, q.BX)(v.View, {
                                className:
                                  "train-view train " +
                                  (Xe ? "iphone-x " : "") +
                                  (ot ? "with-share-filter-mode " : "") +
                                  (Je
                                    ? "zhongzhuan-view-bottom"
                                    : "train-view-bottom"),
                                style: "display: ".concat(r ? "none" : "block"),
                                children: [
                                  !o &&
                                    (0, q.tZ)(v.View, {
                                      className: "train-list-load",
                                      children: [0, 1, 2, 3, 4, 5, 6].map(
                                        function () {
                                          return (0, q.tZ)(
                                            v.View,
                                            {
                                              className: "item",
                                              children: (0, q.BX)(v.View, {
                                                className: "content",
                                                children: [
                                                  (0, q.BX)(v.View, {
                                                    className: "left",
                                                    children: [
                                                      (0, q.BX)(v.View, {
                                                        className:
                                                          "station-info",
                                                        children: [
                                                          (0, q.BX)(v.View, {
                                                            className:
                                                              "start-station",
                                                            children: [
                                                              (0, q.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "time",
                                                                }
                                                              ),
                                                              (0, q.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "station",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, q.BX)(v.View, {
                                                            className:
                                                              "middle-info",
                                                            children: [
                                                              (0, q.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "top",
                                                                  children: (0,
                                                                  q.tZ)(
                                                                    v.View,
                                                                    {
                                                                      className:
                                                                        "text",
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                              (0, q.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "bottom",
                                                                  children: (0,
                                                                  q.tZ)(
                                                                    v.View,
                                                                    {
                                                                      className:
                                                                        "text",
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, q.BX)(v.View, {
                                                            className:
                                                              "end-station",
                                                            children: [
                                                              (0, q.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "time",
                                                                }
                                                              ),
                                                              (0, q.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "station",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, q.BX)(v.View, {
                                                        className:
                                                          "bottom-info",
                                                        children: [
                                                          (0, q.tZ)(v.View, {
                                                            className:
                                                              "bottom-item",
                                                          }),
                                                          (0, q.tZ)(v.View, {
                                                            className:
                                                              "bottom-item",
                                                          }),
                                                          (0, q.tZ)(v.View, {
                                                            className:
                                                              "bottom-item",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, q.tZ)(v.View, {
                                                    className: "right",
                                                    children: (0, q.tZ)(
                                                      v.View,
                                                      { className: "price" }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            },
                                            "index"
                                          );
                                        }
                                      ),
                                    }),
                                  o &&
                                    (0, q.BX)(v.Block, {
                                      children: [
                                        (0, q.tZ)(v.Block, {
                                          children:
                                            Ke &&
                                            !W &&
                                            (0, q.tZ)(ke, {
                                              tabListLen: Te,
                                              stations: R,
                                              isShowAnchorTabOfTimeLine: G,
                                              onClickFilterTag:
                                                this.onClickFilterTag,
                                              ubtTrace: this.ubtTrace,
                                              expKey:
                                                "TZWList_TrainTab_exposure",
                                              expData: {
                                                PageId: this.pageId,
                                                DepartStation: M.departureName,
                                                ArriveStation: M.arrivalName,
                                                DepartDate: O,
                                                fromSource:
                                                  "h5SmartSystem" === De
                                                    ? "ResTicket"
                                                    : "",
                                              },
                                              clickKey:
                                                "TZWList_TrainTab_Filter_click",
                                              isReschedule: K,
                                              selectDate: O,
                                              isListSwipeStart: Ze,
                                              isTicketOnly: _e,
                                              preFilterTagMap: ne,
                                            }),
                                        }),
                                        (0, q.tZ)(v.Block, {
                                          children:
                                            !Ke &&
                                            !W &&
                                            (0, q.tZ)(v.View, {
                                              children: (0, q.tZ)(lt, {
                                                stations: Ae,
                                                isScrollUp: Pe,
                                                onSelectStation:
                                                  this.onFilterStationWithVirtual.bind(
                                                    this
                                                  ),
                                              }),
                                            }),
                                        }),
                                        (0, q.tZ)(v.Block, {
                                          children:
                                            W &&
                                            Pe &&
                                            (0, q.tZ)(v.View, {
                                              className:
                                                "smart-filter-card-fixed",
                                              children: (0, q.tZ)(Ve, {
                                                cards: y,
                                                selectedCardType:
                                                  this.selectedCardType,
                                                clickCard: function (e, t) {
                                                  a.clickCard(e, t);
                                                },
                                                id: "smart-tab-in-train-list-fixed",
                                                renderButtom: function () {
                                                  return (null == Le
                                                    ? void 0
                                                    : Le.length) > 0
                                                    ? (0, q.tZ)(xe, {
                                                        stations: Le,
                                                        onSelectStation:
                                                          a.onFilterStationInWithmSmart.bind(
                                                            a
                                                          ),
                                                      })
                                                    : (0, q.tZ)(q.HY, {});
                                                },
                                              }),
                                            }),
                                        }),
                                        (0, q.BX)(v.ScrollView, {
                                          className:
                                            "listgroup " +
                                            (Xe ? "iphone-x" : ""),
                                          scrollY: !0,
                                          style: "height:100%",
                                          onScrollToLower: function () {
                                            a.trainScrollerLower();
                                          },
                                          lowerThreshold: 800,
                                          scrollTop: h,
                                          onScroll: this.onListScroll,
                                          scrollIntoView: H,
                                          scrollWithAnimation: !0,
                                          enhanced: !0,
                                          onDragStart: this.onDragStart,
                                          onDragEnd: this.onDragEnd,
                                          bounces: !1,
                                          children: [
                                            (0, q.tZ)(ut, {
                                              tabListLen: Te,
                                              isSaleTimeMode: Re,
                                              isReschedule: K,
                                              hasTrainList: Ke,
                                              stations: R,
                                              virtualStations: Ae,
                                            }),
                                            c &&
                                              (0, q.BX)(v.View, {
                                                className: "train-empty-tip",
                                                children: [
                                                  "没有搜到相关高铁、动车，默认显示所有车次",
                                                  (0, q.tZ)(v.Text, {
                                                    id: "AKET",
                                                    onClick:
                                                      this.onTrainEmptyTipClose,
                                                    className:
                                                      "ifont-closed iconfont",
                                                  }),
                                                ],
                                              }),
                                            Re &&
                                              (0, q.tZ)(ct, {
                                                hotLineInfo: this.hotLineInfo,
                                                trainList: this.trainList,
                                              }),
                                            "h5SmartSystem" !== De &&
                                              (0, q.tZ)(rt, {
                                                areas: Ie,
                                                isAllPreSale: et,
                                                list: ht,
                                              }),
                                            (0, q.tZ)(Ue, {
                                              recInfo: Ce,
                                              id: "AKEU",
                                              onClick:
                                                this.gotoIntelFlightListPage,
                                            }),
                                            Ee &&
                                              (0, q.BX)(v.View, {
                                                className:
                                                  "list-recomd train-list-content",
                                                id: "AKEV",
                                                onClick:
                                                  this.gotoFlightOrBusList,
                                                "data-ubt-key":
                                                  "flight" === l
                                                    ? "wx_list_trainList_gotoFlightList"
                                                    : "",
                                                children: [
                                                  (0, q.tZ)(v.Image, {
                                                    className: "label-img",
                                                    src: u.icon,
                                                  }),
                                                  (0, q.BX)(v.View, {
                                                    className: "cont",
                                                    children: [
                                                      (0, q.BX)(v.View, {
                                                        className: "station",
                                                        children: [
                                                          u.departureName,
                                                          (0, q.tZ)(v.Image, {
                                                            src: u.tripIcon,
                                                            className: "image",
                                                          }),
                                                          u.arrivalName,
                                                          (0, q.tZ)(v.View, {
                                                            className: "time",
                                                            children: u.desc,
                                                          }),
                                                        ],
                                                      }),
                                                      u.optimizationTagList &&
                                                        u.optimizationTagList
                                                          .length > 0 &&
                                                        (0, q.tZ)(v.View, {
                                                          className: "op-list",
                                                          children:
                                                            u.optimizationTagList.map(
                                                              function (e) {
                                                                return (0,
                                                                q.tZ)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "op",
                                                                    children: e,
                                                                  },
                                                                  "index"
                                                                );
                                                              }
                                                            ),
                                                        }),
                                                    ],
                                                  }),
                                                  (0, q.BX)(v.View, {
                                                    className: "rbox",
                                                    children: [
                                                      (0, q.tZ)(v.View, {
                                                        className:
                                                          "train-price color-red",
                                                        children: (0, q.tZ)(
                                                          v.Text,
                                                          {
                                                            className: "price",
                                                            children:
                                                              u.purePrice,
                                                          }
                                                        ),
                                                      }),
                                                      (0, q.tZ)(v.Text, {
                                                        className:
                                                          "tag bdcolor-red color-red",
                                                        children: u.tag,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            "h5SmartSystem" === De &&
                                              !et &&
                                              (0, q.tZ)(st, { list: ht }),
                                            (0, q.BX)(v.View, {
                                              className:
                                                "train-list-group train-list-content",
                                              id: "content-id",
                                              children: [
                                                ht.map(function (e, t) {
                                                  return t >= g
                                                    ? null
                                                    : "smartRec" === e.type
                                                    ? X.directOnly || ae
                                                      ? null
                                                      : (0, q.tZ)(
                                                          Ne,
                                                          {
                                                            noDirectData: e,
                                                            isTieyou: mt,
                                                            clickSmartTransitBox:
                                                              function (e) {
                                                                return a.clickSmartTransitBox(
                                                                  e,
                                                                  !0
                                                                );
                                                              },
                                                            clickMore:
                                                              function () {
                                                                return a.switchTab(
                                                                  ft
                                                                );
                                                              },
                                                          },
                                                          ""
                                                            .concat(O, "-")
                                                            .concat(t)
                                                        )
                                                    : (0, q.BX)(v.Block, {
                                                        children: [
                                                          i.length > 0 &&
                                                            t === pt &&
                                                            (0 === t
                                                              ? (0, q.BX)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "split-station-line",
                                                                    children: [
                                                                      (0, q.tZ)(
                                                                        v.Text,
                                                                        {
                                                                          className:
                                                                            "ifont-line-tips iconfont tips-color",
                                                                        }
                                                                      ),
                                                                      (0, q.tZ)(
                                                                        v.Text,
                                                                        {
                                                                          className:
                                                                            "red-text",
                                                                          children:
                                                                            "站点间无直达车次，",
                                                                        }
                                                                      ),
                                                                      (0, q.tZ)(
                                                                        v.Text,
                                                                        {
                                                                          children:
                                                                            "推荐发/到城市其他车次",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                )
                                                              : (0, q.tZ)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "split-station-line",
                                                                    children:
                                                                      "以下为发/到城市其他站点间车次",
                                                                  }
                                                                )),
                                                          (0, q.tZ)(
                                                            v.View,
                                                            {
                                                              id:
                                                                e.timelineAnchorId ||
                                                                "tv_"
                                                                  .concat(
                                                                    O,
                                                                    "-"
                                                                  )
                                                                  .concat(t),
                                                              children: it
                                                                ? (0, q.tZ)(
                                                                    "native-train-view",
                                                                    {
                                                                      onClickevent:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return a.clickItem(
                                                                            e.detail
                                                                          );
                                                                        },
                                                                      onCheckevent:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return a.onCheckChange(
                                                                            e.detail
                                                                          );
                                                                        },
                                                                      onAlternatevent:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return a.onClickAlternate(
                                                                            e.detail
                                                                          );
                                                                        },
                                                                      onGrabqueue:
                                                                        function () {
                                                                          return a.onGrabQueue();
                                                                        },
                                                                      onAllremianticket:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return a.onGoToSmartJianLou(
                                                                            e.detail
                                                                          );
                                                                        },
                                                                      onClicksmartscheme:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return a.onGoToSmartScheme(
                                                                            e.detail
                                                                          );
                                                                        },
                                                                      id: ""
                                                                        .concat(
                                                                          O,
                                                                          "-"
                                                                        )
                                                                        .concat(
                                                                          t
                                                                        ),
                                                                      train: e,
                                                                      index: t,
                                                                      isHouBuConfig:
                                                                        S,
                                                                      isNewGuest:
                                                                        !z,
                                                                      ubtTrace:
                                                                        a.ubtTrace,
                                                                      isShareMode:
                                                                        ae,
                                                                      enableShareCheck:
                                                                        tt >=
                                                                        10,
                                                                      isAlternateMode:
                                                                        oe,
                                                                      modeType:
                                                                        ce,
                                                                      alternateListData:
                                                                        ue,
                                                                      selectDate:
                                                                        O,
                                                                      seats:
                                                                        e.seats,
                                                                      isShowAlternatedot:
                                                                        fe,
                                                                      alternatedotAni:
                                                                        ge,
                                                                      trainItemScanedKeyList:
                                                                        I.ET
                                                                          .trainItemScanedKeyList,
                                                                    }
                                                                  )
                                                                : (0, q.tZ)(
                                                                    be,
                                                                    {
                                                                      id: ""
                                                                        .concat(
                                                                          O,
                                                                          "-"
                                                                        )
                                                                        .concat(
                                                                          t
                                                                        ),
                                                                      train: e,
                                                                      index: t,
                                                                      selectDate:
                                                                        O,
                                                                      isAlternateMode:
                                                                        oe,
                                                                      alternateListData:
                                                                        ue,
                                                                      _seats:
                                                                        e.seats,
                                                                      isShowAlternatedot:
                                                                        fe,
                                                                      alternatedotAni:
                                                                        ge,
                                                                      isHouBuConfig:
                                                                        S,
                                                                      isNewGuest:
                                                                        !z,
                                                                      clickItem:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return a.clickItem(
                                                                            e
                                                                          );
                                                                        },
                                                                      subTrainSeats:
                                                                        m,
                                                                      filterTagMap:
                                                                        X,
                                                                      isShareMode:
                                                                        ae,
                                                                      onAlternatevent:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return a.onClickAlternate(
                                                                            e
                                                                          );
                                                                        },
                                                                      trainItemScanedKeyList:
                                                                        I.ET
                                                                          .trainItemScanedKeyList,
                                                                      onAllremianticket:
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return a.onGoToSmartJianLou(
                                                                            e
                                                                          );
                                                                        },
                                                                    },
                                                                    ""
                                                                      .concat(
                                                                        O,
                                                                        "-"
                                                                      )
                                                                      .concat(t)
                                                                  ),
                                                            },
                                                            ""
                                                              .concat(O, "-")
                                                              .concat(t)
                                                          ),
                                                        ],
                                                      });
                                                }),
                                                $e &&
                                                  Fe.map(function (e, t) {
                                                    return t >= g || ae
                                                      ? (0, q.tZ)(q.HY, {})
                                                      : (0, q.tZ)(
                                                          ye,
                                                          {
                                                            trip: e,
                                                            clickSmartTransitBox:
                                                              function () {
                                                                return a.clickSmartTransitBox(
                                                                  {
                                                                    trip: e,
                                                                    orderSource:
                                                                      (null == e
                                                                        ? void 0
                                                                        : e.orderSource) ||
                                                                      "NoDirectVirtualScheme",
                                                                  }
                                                                );
                                                              },
                                                          },
                                                          t
                                                        );
                                                  }),
                                              ],
                                            }),
                                            (0, q.tZ)(v.View, {
                                              children:
                                                d.length > 0 &&
                                                !(
                                                  T &&
                                                  T.trips &&
                                                  T.trips.length > 0
                                                ) &&
                                                (0, q.tZ)(v.View, {
                                                  className: "sel-nomore",
                                                  children:
                                                    "共为您找到 " +
                                                    d.length +
                                                    " 列符合条件的火车",
                                                }),
                                            }),
                                            N
                                              ? (0, q.BX)(v.View, {
                                                  className: "list-none",
                                                  children: [
                                                    (0, q.tZ)(v.Image, {
                                                      src: "http://images3.c-ctrip.com/zt/wechat/list-none-zx.png",
                                                      className: "img-none",
                                                    }),
                                                    (0, q.tZ)(v.View, {
                                                      className: "txt",
                                                      children:
                                                        "抱歉，没有帮您找到符合条件的车次",
                                                    }),
                                                  ],
                                                })
                                              : b &&
                                                (0, q.tZ)(v.View, {
                                                  className: "list-stride",
                                                  children: (0, q.tZ)(v.View, {
                                                    className: "list-stride-hd",
                                                    children:
                                                      "当前路线没有直达火车车次，已为您推荐其他出行方案",
                                                  }),
                                                }),
                                            qe &&
                                              (0, q.tZ)(Be, {
                                                tripCards: y,
                                                selectedCardType:
                                                  this.selectedCardType,
                                                clickCard: this.clickCard,
                                                smartZhongZhuanInfo: T,
                                                stations: Le,
                                                clickSmartTransitBox:
                                                  this.clickSmartTransitBox,
                                                switchTab: this.switchTab,
                                                observeCallback:
                                                  this.switchAdvancedFilter,
                                                isCeiling: W,
                                                onSelectStation:
                                                  this.onFilterStationInWithmSmart.bind(
                                                    this
                                                  ),
                                              }),
                                            Qe &&
                                              (0, q.tZ)(pe.Z, {
                                                isNew: !0,
                                                fromPage: De,
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, q.tZ)(v.View, {
                                    children: (0, q.tZ)(p.default.Fragment, {
                                      children:
                                        !W && Ke
                                          ? (0, q.BX)(v.View, {
                                              className: "train-ftbar  train",
                                              children: [
                                                !ae &&
                                                  (0, q.tZ)(v.View, {
                                                    className: "filter-bar",
                                                    children: G
                                                      ? (0, q.tZ)(
                                                          p.default.Fragment,
                                                          {
                                                            children:
                                                              this.timeLineAnchors.map(
                                                                function (
                                                                  e,
                                                                  t
                                                                ) {
                                                                  return (0,
                                                                  q.tZ)(
                                                                    v.View,
                                                                    {
                                                                      className:
                                                                        "item time " +
                                                                        (a.historyScrollIntoViewId ==
                                                                        t
                                                                          ? "selected"
                                                                          : ""),
                                                                      style: {
                                                                        opacity:
                                                                          e.hasAnchored
                                                                            ? 1
                                                                            : 0.5,
                                                                      },
                                                                      id: "AKEb",
                                                                      onClick:
                                                                        a.onTimeLineAnchorTrigger.bind(
                                                                          a,
                                                                          t
                                                                        ),
                                                                      children:
                                                                        e.name,
                                                                    },
                                                                    t
                                                                  );
                                                                }
                                                              ),
                                                          }
                                                        )
                                                      : (0, q.BX)(
                                                          p.default.Fragment,
                                                          {
                                                            children: [
                                                              (0, q.BX)(
                                                                v.View,
                                                                {
                                                                  id: "AKEW",
                                                                  onClick:
                                                                    this.onClickSortBy.bind(
                                                                      this,
                                                                      "DepartTimeStamp"
                                                                    ),
                                                                  className:
                                                                    "item " +
                                                                    ("DepartTimeStamp" ==
                                                                    k
                                                                      ? "selected"
                                                                      : ""),
                                                                  children: [
                                                                    (0, q.tZ)(
                                                                      v.Image,
                                                                      {
                                                                        className:
                                                                          "filter-item-icon",
                                                                        src:
                                                                          "DepartTimeStamp" ==
                                                                          k
                                                                            ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_V10.0_lby_cfsj_selected.webp"
                                                                            : "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/icon_cfsj@3x.webp",
                                                                        webp: !0,
                                                                      }
                                                                    ),
                                                                    (0, q.tZ)(
                                                                      v.View,
                                                                      {
                                                                        className:
                                                                          "txt",
                                                                        children:
                                                                          (C
                                                                            ? "最早"
                                                                            : "最晚") +
                                                                          "发车",
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, q.BX)(
                                                                v.View,
                                                                {
                                                                  id: "AKEX",
                                                                  onClick:
                                                                    this.onClickSortBy.bind(
                                                                      this,
                                                                      "RunTime"
                                                                    ),
                                                                  className:
                                                                    "item " +
                                                                    ("RunTime" ==
                                                                    k
                                                                      ? "selected"
                                                                      : ""),
                                                                  children: [
                                                                    (0, q.tZ)(
                                                                      v.Image,
                                                                      {
                                                                        className:
                                                                          "filter-item-icon",
                                                                        src:
                                                                          "RunTime" ==
                                                                          k
                                                                            ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_V10.0_lby_hscd_selected.webp"
                                                                            : "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/icon_hscd@3x.webp",
                                                                        webp: !0,
                                                                      }
                                                                    ),
                                                                    (0, q.tZ)(
                                                                      v.View,
                                                                      {
                                                                        className:
                                                                          "txt",
                                                                        children:
                                                                          "耗时最短",
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, q.BX)(
                                                                v.View,
                                                                {
                                                                  id: "AKEY",
                                                                  onClick:
                                                                    this.onClickSortBy.bind(
                                                                      this,
                                                                      "Price"
                                                                    ),
                                                                  className:
                                                                    "item " +
                                                                    ("Price" ==
                                                                    k
                                                                      ? "selected"
                                                                      : ""),
                                                                  children: [
                                                                    (0, q.tZ)(
                                                                      v.Image,
                                                                      {
                                                                        className:
                                                                          "filter-item-icon",
                                                                        src:
                                                                          "Price" ==
                                                                          k
                                                                            ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_V10.0_lby_cpjg_selected.webp"
                                                                            : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_list_cpjg.webp",
                                                                        webp: !0,
                                                                      }
                                                                    ),
                                                                    (0, q.tZ)(
                                                                      v.View,
                                                                      {
                                                                        className:
                                                                          "txt",
                                                                        children:
                                                                          "车票价格",
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, q.BX)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "item",
                                                                  id: "AKEZ",
                                                                  onClick:
                                                                    this
                                                                      .showFilterView,
                                                                  children: [
                                                                    !!gt &&
                                                                      (0, q.tZ)(
                                                                        v.View,
                                                                        {
                                                                          className:
                                                                            "dot-byfilter",
                                                                          children:
                                                                            gt,
                                                                        }
                                                                      ),
                                                                    (0, q.tZ)(
                                                                      v.Image,
                                                                      {
                                                                        className:
                                                                          "filter-item-icon",
                                                                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/icon_gjsx@3x.webp",
                                                                        webp: !0,
                                                                      }
                                                                    ),
                                                                    (0, q.tZ)(
                                                                      v.View,
                                                                      {
                                                                        className:
                                                                          "txt",
                                                                        children:
                                                                          "高级筛选",
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              !(
                                                                null == he ||
                                                                !he.openCandidate
                                                              ) &&
                                                                (0, q.BX)(
                                                                  v.View,
                                                                  {
                                                                    id: "AKEa",
                                                                    onClick:
                                                                      this.onClickSortBy.bind(
                                                                        this,
                                                                        "Alternate"
                                                                      ),
                                                                    className:
                                                                      "item " +
                                                                      ("Alternate" ==
                                                                      k
                                                                        ? "selected"
                                                                        : "") +
                                                                      " item-alternate",
                                                                    children: [
                                                                      ue.length >
                                                                        0 &&
                                                                        oe &&
                                                                        (0,
                                                                        q.tZ)(
                                                                          v.View,
                                                                          {
                                                                            className:
                                                                              "alternate-list-dot",
                                                                            children:
                                                                              ue.length,
                                                                          }
                                                                        ),
                                                                      !Se &&
                                                                        (0,
                                                                        q.tZ)(
                                                                          v.Image,
                                                                          {
                                                                            id: "alternate-list-icon",
                                                                            className:
                                                                              "filter-item-icon",
                                                                            src:
                                                                              "Alternate" ==
                                                                              k
                                                                                ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_hbh@3x.png"
                                                                                : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_hbdjq@3x.png",
                                                                          }
                                                                        ),
                                                                      (0, q.tZ)(
                                                                        v.View,
                                                                        {
                                                                          className:
                                                                            "txt",
                                                                          children:
                                                                            oe
                                                                              ? "候补列表"
                                                                              : "开启候补",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                            ],
                                                          }
                                                        ),
                                                  }),
                                                (0, q.tZ)(v.Block, {
                                                  children:
                                                    ae &&
                                                    (0, q.BX)(v.View, {
                                                      className:
                                                        "share-mode-handle-view",
                                                      children: [
                                                        (0, q.tZ)(v.View, {
                                                          className:
                                                            "cancel-btn btn",
                                                          id: "AKEc",
                                                          onClick:
                                                            this.onSwitchShareMode.bind(
                                                              this
                                                            ),
                                                          children: "退出",
                                                        }),
                                                        (0, q.BX)(v.Button, {
                                                          className:
                                                            "sure-btn btn$ ".concat(
                                                              tt <= 0
                                                                ? "ghost"
                                                                : ""
                                                            ),
                                                          openType: "share",
                                                          disabled: tt <= 0,
                                                          children: [
                                                            "一键分享",
                                                            tt > 0 &&
                                                              "(已选".concat(
                                                                tt,
                                                                ")"
                                                              ),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                }),
                                              ],
                                            })
                                          : Je
                                          ? (0, q.tZ)(ze, {
                                              smartSortObj: {
                                                smartSortType: Y,
                                                smartSortAscending: j,
                                              },
                                              onClickSmartSortBy:
                                                this.onClickSmartSortBy,
                                              transferAreaNames: $,
                                              requestParams:
                                                this.smartRequestParams,
                                              confirmFilterCb:
                                                this.confirmSmartFilter,
                                              smartFilterConditions: U,
                                              tripNum: We,
                                              from: "train",
                                              ubtTrace: this.ubtTrace,
                                            })
                                          : (0, q.tZ)(v.View, {}),
                                    }),
                                  }),
                                  (0, q.tZ)(v.View, {
                                    children:
                                      E &&
                                      (0, q.tZ)(Ge.Z, {
                                        data: { isTieyou: mt, a: 1 },
                                        reload: this.reload,
                                      }),
                                  }),
                                  (0, q.tZ)(v.Block, {
                                    children:
                                      nt &&
                                      (0, q.tZ)(v.Image, {
                                        className: "share-btn ".concat(
                                          se ? "fold" : ""
                                        ),
                                        id: "AKEe",
                                        onClick:
                                          this.onSwitchShareMode.bind(this),
                                        src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_v10_list_ccfx.png",
                                      }),
                                  }),
                                ],
                              }),
                              (0, q.BX)(v.Block, {
                                children: [
                                  (0, q.tZ)(v.View, {
                                    className:
                                      "backmask " + (V ? "active" : ""),
                                    id: "AKEf",
                                    onClick: this.cancelFilter,
                                  }),
                                  (0, q.BX)(v.View, {
                                    className:
                                      "train tip-bot " + (V ? "active" : ""),
                                    children: [
                                      (0, q.BX)(v.View, {
                                        className: "cui-hd",
                                        children: [
                                          (0, q.tZ)(v.View, {
                                            className: "cell cancel-btn",
                                            id: "AKEg",
                                            onClick: this.cancelFilter,
                                            children: "取消",
                                          }),
                                          (0, q.tZ)(v.View, {
                                            className: "cell center-tit",
                                            children: "高级筛选",
                                          }),
                                          (0, q.tZ)(v.View, {
                                            className: "cell ok-btn",
                                            id: "AKEh",
                                            onClick: this.confirmFilter,
                                            children: "确定",
                                          }),
                                        ],
                                      }),
                                      (0, q.BX)(v.View, {
                                        className: "cui-bg t-filter-box",
                                        children: [
                                          (0, q.tZ)(v.View, {
                                            className: "tit",
                                            children: "车次类型",
                                          }),
                                          (0, q.BX)(v.View, {
                                            className: "t-filter-list",
                                            children: [
                                              (0, q.tZ)(v.View, {
                                                className: "item-c",
                                                children: (0, q.tZ)(v.View, {
                                                  id: "AKEi",
                                                  onClick:
                                                    this.onClickNewSelectType.bind(
                                                      this,
                                                      !0
                                                    ),
                                                  className:
                                                    "item " +
                                                    (_ || x ? "current" : ""),
                                                  children: "高铁/动车",
                                                }),
                                              }),
                                              (0, q.tZ)(v.View, {
                                                className: "item-c",
                                                children: (0, q.tZ)(v.View, {
                                                  id: "AKEj",
                                                  onClick:
                                                    this.onClickNewSelectType.bind(
                                                      this,
                                                      !1
                                                    ),
                                                  className:
                                                    "item " +
                                                    (D || B ? "current" : ""),
                                                  children: "普快",
                                                }),
                                              }),
                                            ],
                                          }),
                                          R.length > 0 &&
                                            (0, q.tZ)(v.View, {
                                              className: "tit",
                                              children: "出发站",
                                            }),
                                          (0, q.tZ)(v.View, {
                                            className: "t-filter-list",
                                            children: R.filter(function (e) {
                                              return "D" === e.stationType;
                                            }).map(function (e, t) {
                                              if (e.isShowInFilter)
                                                return (0, q.tZ)(
                                                  v.View,
                                                  {
                                                    className: "item-c",
                                                    children: (0, q.tZ)(
                                                      v.View,
                                                      {
                                                        className:
                                                          "item " +
                                                          (e.isPreSelected
                                                            ? "current"
                                                            : ""),
                                                        id: "AKEk",
                                                        onClick:
                                                          a.onClickSelectStation.bind(
                                                            a,
                                                            e
                                                          ),
                                                        children: e.name,
                                                      }
                                                    ),
                                                  },
                                                  t
                                                );
                                            }),
                                          }),
                                          R.length > 0 &&
                                            (0, q.tZ)(v.View, {
                                              className: "tit",
                                              children: "到达站",
                                            }),
                                          (0, q.tZ)(v.View, {
                                            className: "t-filter-list",
                                            children: R.filter(function (e) {
                                              return "A" === e.stationType;
                                            }).map(function (e, t) {
                                              if (e.isShowInFilter)
                                                return (0, q.tZ)(
                                                  v.View,
                                                  {
                                                    className: "item-c",
                                                    children: (0, q.tZ)(
                                                      v.View,
                                                      {
                                                        className:
                                                          "item " +
                                                          (e.isPreSelected
                                                            ? "current"
                                                            : ""),
                                                        id: "AKEl",
                                                        onClick:
                                                          a.onClickSelectStation.bind(
                                                            a,
                                                            e
                                                          ),
                                                        children: e.name,
                                                      }
                                                    ),
                                                  },
                                                  t
                                                );
                                            }),
                                          }),
                                          (0, q.tZ)(v.View, {
                                            className: "tit",
                                            children: "特殊筛选",
                                          }),
                                          (0, q.BX)(v.View, {
                                            className:
                                              "t-filter-list filter-tag",
                                            children: [
                                              (0, q.tZ)(v.View, {
                                                className: "item-c",
                                                children: (0, q.tZ)(v.View, {
                                                  id: "AKEm",
                                                  onClick:
                                                    this.onClickFilterTag.bind(
                                                      this,
                                                      {
                                                        filterTag: "directOnly",
                                                      }
                                                    ),
                                                  className:
                                                    "item " +
                                                    (ne.directOnly
                                                      ? "current"
                                                      : ""),
                                                  children: "只看直达",
                                                }),
                                              }),
                                              (0, q.tZ)(v.View, {
                                                className: "item-c",
                                                children: (0, q.tZ)(v.View, {
                                                  id: "AKEn",
                                                  onClick:
                                                    this.onClickFilterTag.bind(
                                                      this,
                                                      {
                                                        filterTag: "ticketOnly",
                                                      }
                                                    ),
                                                  className:
                                                    "item " +
                                                    (ne.ticketOnly
                                                      ? "current"
                                                      : ""),
                                                  children: "只看有票",
                                                }),
                                              }),
                                              ee &&
                                                (0, q.tZ)(v.View, {
                                                  className: "item-c",
                                                  children: (0, q.tZ)(v.View, {
                                                    id: "AKEo",
                                                    onClick:
                                                      this.onClickFilterTag.bind(
                                                        this,
                                                        {
                                                          filterTag:
                                                            "isCanPointsPay",
                                                        }
                                                      ),
                                                    className:
                                                      "item " +
                                                      (ne.isCanPointsPay
                                                        ? "current"
                                                        : ""),
                                                    children: "可积分兑换",
                                                  }),
                                                }),
                                              (null ===
                                                (t = this.shareTrains) ||
                                              void 0 === t
                                                ? void 0
                                                : t.length) > 0 &&
                                                (0, q.tZ)(v.View, {
                                                  className: "item-c",
                                                  children: (0, q.tZ)(v.View, {
                                                    id: "AKEp",
                                                    onClick:
                                                      this.onClickFilterTag.bind(
                                                        this,
                                                        {
                                                          filterTag: "isShared",
                                                        }
                                                      ),
                                                    className:
                                                      "item " +
                                                      (ne.isShared
                                                        ? "current"
                                                        : ""),
                                                    children: "好友挑选",
                                                  }),
                                                }),
                                              (0, q.tZ)(v.View, {
                                                className: "item-c",
                                                children: (0, q.tZ)(v.View, {
                                                  id: "AKEq",
                                                  onClick:
                                                    this.onClickFilterTag.bind(
                                                      this,
                                                      {
                                                        filterTag:
                                                          "combineSeats",
                                                      }
                                                    ),
                                                  className:
                                                    "item " +
                                                    (ne.combineSeats
                                                      ? "current"
                                                      : ""),
                                                  children: "组合座席",
                                                }),
                                              }),
                                              (0, q.tZ)(v.View, {
                                                className: "item-c",
                                                children: (0, q.tZ)(v.View, {
                                                  id: "AKEr",
                                                  onClick:
                                                    this.onClickFilterTag.bind(
                                                      this,
                                                      { filterTag: "student" }
                                                    ),
                                                  className:
                                                    "item " +
                                                    (ne.student
                                                      ? "current"
                                                      : ""),
                                                  children: "学生票",
                                                }),
                                              }),
                                              ie &&
                                                (0, q.tZ)(v.View, {
                                                  className: "item-c",
                                                  children: (0, q.tZ)(v.View, {
                                                    id: "AKEs",
                                                    onClick:
                                                      this.onClickFilterTag.bind(
                                                        this,
                                                        {
                                                          filterTag:
                                                            "isCanSilent",
                                                        }
                                                      ),
                                                    className:
                                                      "item " +
                                                      (ne.isCanSilent
                                                        ? "current"
                                                        : ""),
                                                    children: "静音车厢",
                                                  }),
                                                }),
                                            ],
                                          }),
                                          (0, q.tZ)(v.View, {
                                            className: "tit",
                                            children: "出发时间",
                                          }),
                                          (0, q.BX)(v.View, {
                                            className: "t-filter-list",
                                            children: [
                                              (0, q.tZ)(v.View, {
                                                className: "item-c",
                                                children: (0, q.tZ)(v.View, {
                                                  id: "AKEt",
                                                  onClick:
                                                    this.onClickSelectTime.bind(
                                                      this,
                                                      2
                                                    ),
                                                  className:
                                                    "item " +
                                                    (L ? "current" : ""),
                                                  children: "0点 - 6点",
                                                }),
                                              }),
                                              (0, q.tZ)(v.View, {
                                                className: "item-c",
                                                children: (0, q.tZ)(v.View, {
                                                  id: "AKEu",
                                                  onClick:
                                                    this.onClickSelectTime.bind(
                                                      this,
                                                      4
                                                    ),
                                                  className:
                                                    "item " +
                                                    (A ? "current" : ""),
                                                  children: "6点 - 12点",
                                                }),
                                              }),
                                              (0, q.tZ)(v.View, {
                                                className: "item-c",
                                                children: (0, q.tZ)(v.View, {
                                                  id: "AKEv",
                                                  onClick:
                                                    this.onClickSelectTime.bind(
                                                      this,
                                                      8
                                                    ),
                                                  className:
                                                    "item " +
                                                    (F ? "current" : ""),
                                                  children: "12点 - 18点",
                                                }),
                                              }),
                                              (0, q.tZ)(v.View, {
                                                className: "item-c",
                                                children: (0, q.tZ)(v.View, {
                                                  id: "AKEw",
                                                  onClick:
                                                    this.onClickSelectTime.bind(
                                                      this,
                                                      16
                                                    ),
                                                  className:
                                                    "item " +
                                                    (P ? "current" : ""),
                                                  children: "18点 - 24点",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, q.tZ)(v.Block, {
                                children: (0, q.tZ)(we, {
                                  isShow: re,
                                  onClose: this.onCloseShareListGuide,
                                  onStepChange: this.onStepChange,
                                }),
                              }),
                              (0, q.tZ)(v.Block, {
                                children: (0, q.tZ)(Ye, {
                                  isShow: Se,
                                  onClose: this.onCloseAlternateGuide,
                                }),
                              }),
                              (0, q.tZ)(v.Block, {
                                children:
                                  le &&
                                  (0, q.tZ)(He, {
                                    list: ue,
                                    preCandidateInfo: he,
                                    onClose: this.onCloseAlternateList,
                                    onDeleteAlternate: this.deleteAlternate,
                                    onCloseAlternateMode:
                                      this.onCloseAlternateMode,
                                    onClickNextStep:
                                      this.goToCandidateOrderInput,
                                  }),
                              }),
                              (0, q.tZ)(v.Block, {
                                children:
                                  !!me &&
                                  de &&
                                  (0, q.tZ)(ve.Z, {
                                    visible: !0,
                                    title: me.title,
                                    icon: me.icon,
                                    content: me.content,
                                    buttons: me.buttons,
                                    clickOption: me.clickOption,
                                    onCancel: this.onCloseAlternateAbnormal,
                                  }),
                              }),
                              (0, q.tZ)(v.CustomWrapper, {
                                children: (0, q.tZ)(je, {
                                  onRef: function (e) {
                                    a.$startAnimation = e;
                                  },
                                }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(p.default.PureComponent))
              ) || tt,
            vt = Z.default.isTieyou,
            Tt =
              (0, T.h)(!0)(
                (it = (function (e) {
                  (0, m.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var a;
                    return (
                      (0, l.Z)(this, i),
                      (a = t.call(this, e)),
                      (0, f.Z)(
                        (0, d.Z)(a),
                        "getSmartRequestParams",
                        function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t = a.state,
                            i = t.selectDate,
                            n = t.smartTravelTabInfo,
                            r = t.smartFilterConditions;
                          if (!n || !n.smartTripInfo) return {};
                          var s = n.smartTripInfo,
                            c = s.fromLocation,
                            l = s.fromStationType,
                            u = s.fromAreaId,
                            d = s.toLocation,
                            m = s.toStationType,
                            h = s.toAreaId,
                            f = {
                              fromLocation: c,
                              fromStationType: l,
                              fromAreaId: u,
                              toLocation: d,
                              toStationType: m,
                              toAreaId: h,
                              departDate: i,
                              fromPage: a.isFromFlight
                                ? "skyTrainHomePage"
                                : "trainTraffic",
                            },
                            p = { cardType: e };
                          return (
                            w.Z.notEmptyArray(r) &&
                              (p = (0, o.Z)(
                                (0, o.Z)({}, p),
                                Pe.Z.getSmartFilterResParams(r)
                              )),
                            w.Z.isNotEmptyObj(p) && (f.optionalParameter = p),
                            f
                          );
                        }
                      ),
                      (0, f.Z)((0, d.Z)(a), "handleSmartRes", function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t = a.state,
                          i = t.smartSortType,
                          n = t.smartSortAscending,
                          r = e.data,
                          s = void 0 === r ? null : r,
                          c = e.resultCode;
                        if (1 === c && s) {
                          var l = w.Z.notEmptyArray(s.trips)
                            ? s.trips
                                .map(function (e) {
                                  var t = e.seatTicketLefts.map(function (e) {
                                    return (0,
                                    o.Z)((0, o.Z)({}, e), {}, { seatTicketLeftDesc: B.ZP.convertAppRichText(e.seatTicketLeftDesc) });
                                  });
                                  return (0,
                                  o.Z)((0, o.Z)({}, e), {}, { seatTicketLefts: t, diff: b()(e.arriveDate).diff(b()(e.startDate), "day") });
                                })
                                .filter(function (e) {
                                  return e.schemeInfoV1;
                                })
                            : [];
                          l =
                            i === Ze.Z.SMART_RECOMMEND_SORT
                              ? l
                              : a.filterSmartListByCon(l, {
                                  smartSortType: i,
                                  smartSortAscending: n,
                                });
                          var u = Object.assign(
                            {},
                            (0, o.Z)(
                              (0, o.Z)({}, s),
                              {},
                              { trips: l, filterSmartTrips: l }
                            )
                          );
                          a.setState({ smartZhongZhuanInfo: u, noData: !1 });
                        } else a.setState({ noData: !0, smartZhongZhuanInfo: null });
                      }),
                      (0, f.Z)((0, d.Z)(a), "onClickSmartSortBy", function (e) {
                        var t = a.state,
                          i = t.smartSortType,
                          n = t.smartSortAscending,
                          r = t.smartZhongZhuanInfo,
                          s = (r || {}).trips,
                          o = void 0 === s ? [] : s;
                        w.Z.notEmptyArray(o) &&
                          ((r.filterSmartTrips = a
                            .filterSmartListByCon(o, {
                              smartSortAscending: !n,
                              smartSortType: e,
                            })
                            .slice(0, 30)),
                          e !== Ze.Z.SMART_DEP_TIME
                            ? e !== i &&
                              a.setState({
                                smartSortType: e,
                                smartZhongZhuanInfo: r,
                              })
                            : a.setState({
                                smartSortAscending: !n,
                                smartSortType: e,
                                smartZhongZhuanInfo: r,
                              }));
                      }),
                      (0, f.Z)(
                        (0, d.Z)(a),
                        "filterSmartListByCon",
                        function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            i = a.state.selectDate,
                            n = t.smartSortType,
                            r = t.smartSortAscending;
                          return n && w.Z.notEmptyArray(e)
                            ? (n === Ze.Z.SMART_RECOMMEND_SORT &&
                                (e = e.sort(function (e, t) {
                                  return t.score - e.score;
                                })),
                              n === Ze.Z.SMART_COST_TIME &&
                                (e = e.sort(function (e, t) {
                                  return e.totalMinutes - t.totalMinutes;
                                })),
                              n === Ze.Z.SMART_DEP_TIME &&
                                (e = r
                                  ? e.sort(function (e, t) {
                                      return b()(
                                        ""
                                          .concat(i, " ")
                                          .concat(e.startTime || "00:00", ":01")
                                      ).isBefore(
                                        b()(
                                          ""
                                            .concat(i, " ")
                                            .concat(t.startTime || "00:00")
                                        )
                                      )
                                        ? -1
                                        : 1;
                                    })
                                  : e.sort(function (e, t) {
                                      return b()(
                                        ""
                                          .concat(i, " ")
                                          .concat(t.startTime || "00:00", ":01")
                                      ).isAfter(
                                        b()(
                                          ""
                                            .concat(i, " ")
                                            .concat(e.startTime || "00:00")
                                        )
                                      )
                                        ? 1
                                        : -1;
                                    })),
                              e)
                            : e;
                        }
                      ),
                      (0, f.Z)((0, d.Z)(a), "confirmSmartFilter", function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                        a.setState({ smartFilterConditions: e }, function () {
                          a.getSmartZhongZhuanCardInfo(function () {
                            a.getSmartZhongZhuanInfo(!0);
                          });
                        });
                      }),
                      (a.state = {
                        smartZhongZhuanInfo: null,
                        tripCards: [],
                        isLoaded: !1,
                        selectDate: "",
                        smartTravelTabInfo: {},
                        noData: !1,
                        smartSortType: Ze.Z.SMART_RECOMMEND_SORT,
                        smartSortAscending: !1,
                        smartFilterConditions: [],
                        transferAreaNames: [],
                      }),
                      (a.smartRequestParams = {}),
                      (a.selectedCardType = {}),
                      (a.isFirstLoad = !0),
                      a
                    );
                  }
                  return (
                    (0, u.Z)(i, [
                      {
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function (e) {
                          var t = this;
                          console.log(e);
                          var i = this.props,
                            a = i.hidden,
                            n = i.selectDate,
                            r = i.smartTravelTabInfo,
                            s = i.tabType;
                          this.setState({ smartTravelTabInfo: r }),
                            (this.isFromFlight = "flightAndTrain" === s),
                            !e.hidden &&
                              (a !== e.hidden ||
                                n !== e.selectDate ||
                                (this.isFromFlight && this.isFirstLoad)) &&
                              (console.log("智慧中转列表组件  loadData"),
                              this.setState(
                                { selectDate: e.selectDate },
                                function () {
                                  (I.ET.selectDate = e.selectDate),
                                    t.loadData();
                                }
                              ));
                        },
                      },
                      {
                        key: "loadData",
                        value: function () {
                          var e = this,
                            t = this.state.smartTravelTabInfo;
                          t && t.smartTripInfo
                            ? ((0, k.showLoading)({ title: "加载中" }),
                              this.getSmartZhongZhuanCardInfo(function () {
                                e.getSmartZhongZhuanInfo();
                              }))
                            : this.setState({
                                isLoaded: !0,
                                noData: !0,
                                smartZhongZhuanInfo: null,
                                tripCards: [],
                                transferAreaNames: [],
                              });
                        },
                      },
                      {
                        key: "getSmartZhongZhuanCardInfo",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e(t) {
                              var i,
                                a,
                                n,
                                r,
                                c,
                                l,
                                u,
                                d,
                                m,
                                h,
                                f,
                                p,
                                g,
                                S,
                                v,
                                T,
                                Z,
                                y;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i = this.state.transferAreaNames),
                                          (a = void 0 === i ? [] : i),
                                          (n = this.selectedCardType),
                                          (r = void 0 === n ? {} : n),
                                          (c = this.smartRequestParams),
                                          (l = r.cardType),
                                          (u = void 0 === l ? "" : l),
                                          (d = r.cardName),
                                          (m = void 0 === d ? "" : d),
                                          (h = {
                                            tripCards: [],
                                            noData: !0,
                                            isLoaded: !0,
                                            smartZhongZhuanInfo: null,
                                            transferAreaNames: [],
                                          }),
                                          (e.prev = 4),
                                          (f = this.getSmartRequestParams()),
                                          (e.next = 8),
                                          (0, C.Dek)(f)
                                        );
                                      case 8:
                                        (p = e.sent),
                                          (g = p.data),
                                          (S = void 0 === g ? null : g),
                                          1 === p.resultCode && S
                                            ? ((v = S.tripCards),
                                              (T = void 0 === v ? [] : v),
                                              (Z = null),
                                              this.isFromFlight &&
                                              this.isFirstLoad
                                                ? ((this.isFirstLoad = !1),
                                                  (Z = T.find(function (e) {
                                                    var t, i, a, n;
                                                    return (
                                                      (null ===
                                                        (t = e.cardType) ||
                                                      void 0 === t
                                                        ? void 0
                                                        : t.includes("KF")) ||
                                                      (null ===
                                                        (i = e.cardType) ||
                                                      void 0 === i
                                                        ? void 0
                                                        : i.includes("FK")) ||
                                                      (null ===
                                                        (a = e.cardType) ||
                                                      void 0 === a
                                                        ? void 0
                                                        : a.includes("GF")) ||
                                                      (null ===
                                                        (n = e.cardType) ||
                                                      void 0 === n
                                                        ? void 0
                                                        : n.includes("FG"))
                                                    );
                                                  })))
                                                : (Z = T.find(function (e) {
                                                    return (
                                                      e.cardType === u ||
                                                      e.cardName === m
                                                    );
                                                  })),
                                              Z
                                                ? (this.selectedCardType = Z)
                                                : ((this.selectedCardType = {}),
                                                  delete c.optionalParameter),
                                              (y = {
                                                tripCards: T || [],
                                                noData: !1,
                                              }),
                                              w.Z.notEmptyArray(a) ||
                                                (y = {
                                                  tripCards: S.tripCards || [],
                                                  noData: !1,
                                                  transferAreaNames:
                                                    (null == S
                                                      ? void 0
                                                      : S.transferAreaNames) ||
                                                    [],
                                                }),
                                              this.setState((0, o.Z)({}, y)))
                                            : ((0, k.hideLoading)(),
                                              this.setState((0, o.Z)({}, h))),
                                          t && t(),
                                          (e.next = 18);
                                        break;
                                      case 14:
                                        (e.prev = 14),
                                          (e.t0 = e.catch(4)),
                                          (0, k.hideLoading)(),
                                          this.setState((0, o.Z)({}, h));
                                      case 18:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[4, 14]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getSmartZhongZhuanInfo",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t,
                                i,
                                a,
                                n,
                                r,
                                o,
                                c,
                                l = arguments;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            l.length > 0 &&
                                            void 0 !== l[0] &&
                                            l[0]),
                                          (i = this.selectedCardType),
                                          (a = (void 0 === i ? {} : i)
                                            .cardType),
                                          (n = void 0 === a ? "" : a),
                                          (e.prev = 3),
                                          (r = t
                                            ? {
                                                cacheControl: {
                                                  useCache: !0,
                                                  maxAge: 12e4,
                                                  dedup: !0,
                                                  dedupingInterval: 500,
                                                },
                                              }
                                            : {}),
                                          (o = this.getSmartRequestParams(n)),
                                          (this.smartRequestParams =
                                            w.Z.deepCopy(o)),
                                          (e.next = 9),
                                          (0, C.Dek)(o, r)
                                        );
                                      case 9:
                                        (c = e.sent),
                                          this.handleSmartRes(c),
                                          (0, k.hideLoading)(),
                                          (e.next = 18);
                                        break;
                                      case 14:
                                        (e.prev = 14),
                                          (e.t0 = e.catch(3)),
                                          console.log(e.t0),
                                          this.setState({
                                            noData: !0,
                                            smartZhongZhuanInfo: null,
                                          });
                                      case 18:
                                        return (
                                          (e.prev = 18),
                                          (0, k.hideLoading)(),
                                          this.setState({ isLoaded: !0 }),
                                          e.finish(18)
                                        );
                                      case 22:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[3, 14, 18, 22]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "clickCard",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          (this.selectedCardType = e),
                            this.getSmartZhongZhuanInfo();
                        },
                      },
                      {
                        key: "renderCard",
                        value: function (e) {
                          var t = this.state.smartZhongZhuanInfo,
                            i = t.trips,
                            a = [];
                          (a = (a =
                            "all" === e
                              ? i
                              : i.filter(function (t) {
                                  return e.includes(t.cardType);
                                })).slice(0, 30)),
                            this.setState({
                              smartZhongZhuanInfo: (0, o.Z)(
                                (0, o.Z)({}, t),
                                {},
                                { filterSmartTrips: a }
                              ),
                            });
                        },
                      },
                      {
                        key: "clickSmartTransitBox",
                        value: function (e) {
                          var t = e.schemeInfoV1,
                            i = (0, Te.j)();
                          this.navigateTo({
                            url: ""
                              .concat(i, "?orderSource=")
                              .concat("smarttt", "&schemeInfoV1=")
                              .concat(encodeURIComponent(t)),
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.props.hidden,
                            i = void 0 === t || t,
                            a = this.state,
                            n = a.smartZhongZhuanInfo,
                            r = a.tripCards,
                            s = a.isLoaded,
                            o = a.noData,
                            c = a.smartSortType,
                            l = a.smartSortAscending,
                            u = a.smartFilterConditions,
                            d = a.transferAreaNames,
                            m = void 0 === d ? [] : d,
                            h = w.Z.isIPhoneX(),
                            f = (n && n.trips && n.trips.length) || 0;
                          return (0, q.BX)(v.View, {
                            className:
                              "zhongzhuan-view smartzhongzhuan " +
                              (h ? "iphone-x" : ""),
                            style: "display: ".concat(i ? "none" : "block"),
                            children: [
                              (0, q.BX)(v.ScrollView, {
                                scrollY: !0,
                                className:
                                  "smart-list " + (h ? "iphone-x" : ""),
                                style: { height: "100%" },
                                children: [
                                  (0, q.BX)(v.View, {
                                    className: "list-transit",
                                    children: [
                                      (0, q.tZ)(Ve, {
                                        cards: r,
                                        selectedCardType: this.selectedCardType,
                                        clickCard: function (t, i) {
                                          e.clickCard(t, i);
                                        },
                                        id: "smart-tab-in-smart-transfer-list",
                                      }),
                                      n &&
                                        s &&
                                        (0, q.BX)(v.Block, {
                                          children: [
                                            n.filterSmartTrips &&
                                            n.filterSmartTrips.length > 0
                                              ? n.filterSmartTrips.map(
                                                  function (t) {
                                                    return (0, q.tZ)(
                                                      ye,
                                                      {
                                                        trip: t,
                                                        isTieyou: vt,
                                                        clickSmartTransitBox:
                                                          function () {
                                                            e.clickSmartTransitBox(
                                                              t
                                                            );
                                                          },
                                                      },
                                                      "index"
                                                    );
                                                  }
                                                )
                                              : (0, q.BX)(v.View, {
                                                  className:
                                                    "smartTransit-no-data-bd color-primary",
                                                  children: [
                                                    (0, q.tZ)(v.Image, {
                                                      src: vt
                                                        ? "https://images3.c-ctrip.com/ztrip/train.xin/2021_03/empty_state_ty.png"
                                                        : "https://images3.c-ctrip.com/ztrip/train.xin/2021_03/empty_state.png",
                                                      mdoe: "widthFix",
                                                      className: "no-data-img",
                                                    }),
                                                    (0, q.tZ)(v.Text, {
                                                      className: "tit",
                                                      children: "暂无数据",
                                                    }),
                                                    (0, q.tZ)(v.Text, {
                                                      className: "txt",
                                                      children:
                                                        "换个条件试试吧～",
                                                    }),
                                                  ],
                                                }),
                                            n.filterSmartTrips &&
                                              n.filterSmartTrips.length > 0 &&
                                              (0, q.tZ)(v.View, {
                                                className: "bottom-tips",
                                              }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  o && (0, q.tZ)(pe.Z, {}),
                                ],
                              }),
                              s &&
                                (0, q.tZ)(ze, {
                                  smartSortObj: {
                                    smartSortType: c,
                                    smartSortAscending: l,
                                  },
                                  onClickSmartSortBy: this.onClickSmartSortBy,
                                  transferAreaNames: m,
                                  requestParams: this.smartRequestParams,
                                  confirmFilterCb: this.confirmSmartFilter,
                                  smartFilterConditions: u,
                                  tripNum: f,
                                  from: "smart",
                                  ubtTrace: this.ubtTrace,
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(p.default.PureComponent))
              ) || it,
            Zt = i(96156),
            wt = "YYYY-MM-DD",
            yt = b()().format(wt),
            Nt = b()().add(1, "day").format(wt),
            bt = (function (e) {
              (0, m.Z)(i, e);
              var t = (0, h.Z)(i);
              function i(e) {
                var a;
                return (
                  (0, l.Z)(this, i),
                  ((a = t.call(this, e)).state = {
                    showThirdTab: !1,
                    dateView: "",
                    dateMap: [],
                    select: "",
                    begin: "",
                    end: "",
                    isFlight: !1,
                  }),
                  a
                );
              }
              return (
                (0, u.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.init(this.props);
                    },
                  },
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      this.init(e);
                    },
                  },
                  {
                    key: "init",
                    value: function (e) {
                      var t = this,
                        i = e.dateList || null,
                        a = e.chooseDate || yt;
                      this.setState(
                        { begin: e._begin, end: e._end, isFlight: e._isFlight },
                        function () {
                          t.setDateMap(i, a);
                        }
                      );
                    },
                  },
                  {
                    key: "setDateMap",
                    value: function (e, t) {
                      var i = this,
                        a = this.state,
                        n = a.begin,
                        r = a.end,
                        s = [];
                      if (e && e.length > 0) s = e;
                      else {
                        for (var o = 0; o < 365; o++)
                          s.push({
                            date:
                              0 === o
                                ? b()().format(wt)
                                : b()().add(o, "day").format(wt),
                            desc: "",
                          });
                        s = s.filter(function (e) {
                          return (
                            b()(e.date).valueOf() >= b()(n).valueOf() &&
                            b()(e.date).valueOf() <= b()(r).valueOf()
                          );
                        });
                      }
                      s.forEach(function (e) {
                        if (e.date === yt) e.weekDay = "今天";
                        else if (e.date === Nt) e.weekDay = "明天";
                        else {
                          var t = new Date(e.date.replace(/\-/g, "/"));
                          e.weekDay = [
                            "周日",
                            "周一",
                            "周二",
                            "周三",
                            "周四",
                            "周五",
                            "周六",
                          ][t.getDay()];
                        }
                        (e.dateStr = e.date.slice(5, 10)),
                          e.desc && i.setState({ showThirdTab: !0 });
                      }),
                        this.setState({ select: t, dateMap: s }, function () {
                          i.refreshSelectDate(t);
                        });
                    },
                  },
                  {
                    key: "refreshSelectDate",
                    value: function (e) {
                      var t,
                        i = this.state.dateMap,
                        a = i.findIndex(function (t) {
                          return t.date === e;
                        }),
                        n = i.findIndex(function (e) {
                          return e.isActive;
                        });
                      (t =
                        e === yt || e === Nt
                          ? yt
                          : b()(e).subtract(2, "day").format(wt)),
                        i.forEach(function (e, t) {
                          t === n && (e.isActive = !1),
                            t === a && (e.isActive = !0);
                        }),
                        this.setState({ dateView: "c-".concat(t), dateMap: i });
                    },
                  },
                  {
                    key: "onClickCalender",
                    value: (function () {
                      var e = (0, c.Z)(
                        (0, s.Z)().mark(function e() {
                          var t, i, a, n, r, o, c, l;
                          return (0, s.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (t = this.state),
                                      (i = t.select),
                                      (a = t.begin),
                                      (n = t.end),
                                      (r = t.isFlight),
                                      (o = r ? null : B.ZP.getCalendarInfo(n)),
                                      (e.prev = 2),
                                      (e.next = 5),
                                      null === (c = this.$CanlenderSeletor) ||
                                      void 0 === c
                                        ? void 0
                                        : c.trigger({
                                            calenderOpts: {
                                              beginDate: a,
                                              endDate: n,
                                              selectedDate: i,
                                              info: o,
                                              tip: r
                                                ? ""
                                                : "<span style='font-weight:500;font-family:PingFangSC-Medium;color:#FD8700;'>温馨提示：</span>根据疫情防控最新情况，铁路部门规定6月1日起，将铁路客票预售期调整为15天内。",
                                            },
                                          })
                                    );
                                  case 5:
                                    (l = e.sent),
                                      this.refreshSelectDate(l),
                                      this.props.onChangeDate(l),
                                      (e.next = 13);
                                    break;
                                  case 10:
                                    (e.prev = 10),
                                      (e.t0 = e.catch(2)),
                                      console.log("cancel select...");
                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[2, 10]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "onClickDate",
                    value: function (e) {
                      this.setState({ select: e }),
                        this.refreshSelectDate(e),
                        this.props.onChangeDate(e);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state,
                        i = t.dateView,
                        a = t.dateMap,
                        n = t.showThirdTab;
                      return (0, q.BX)(v.View, {
                        className: "train-date-picker",
                        children: [
                          (0, q.BX)(v.View, {
                            className: "date-picker " + (n ? "three " : "two "),
                            children: [
                              (0, q.tZ)(v.View, {
                                className: "calendar-list",
                                children: (0, q.tZ)(v.ScrollView, {
                                  className: "calendar-scroll-list",
                                  scrollX: !0,
                                  scrollWithAnimation: "true",
                                  scrollIntoView: i,
                                  children: a.map(function (t, i) {
                                    return (0, q.tZ)(
                                      v.Block,
                                      {
                                        children: (0, q.BX)(v.View, {
                                          className:
                                            "item " +
                                            (t.isActive
                                              ? "cur bgcolor-primary"
                                              : ""),
                                          id: "c-" + t.date,
                                          onClick: function () {
                                            return e.onClickDate(t.date);
                                          },
                                          children: [
                                            (0, q.tZ)(v.View, {
                                              className: "week-txt",
                                              children: t.weekDay,
                                            }),
                                            (0, q.tZ)(v.View, {
                                              className: "date-txt",
                                              children: t.dateStr,
                                            }),
                                            n &&
                                              (0, q.tZ)(v.View, {
                                                className: "desc",
                                                children: t.desc || "--",
                                              }),
                                          ],
                                        }),
                                      },
                                      String(i)
                                    );
                                  }),
                                }),
                              }),
                              (0, q.BX)(v.View, {
                                className: "calendar-all flex flex-center",
                                id: "AKDa",
                                onClick: this.onClickCalender.bind(this),
                                children: [
                                  (0, q.tZ)(v.View, {
                                    className: "left-shadow",
                                  }),
                                  (0, q.tZ)(v.View, { className: "img" }),
                                ],
                              }),
                            ],
                          }),
                          (0, q.tZ)(Zt.Z, {
                            onRef: function (t) {
                              return (e.$CanlenderSeletor = t);
                            },
                          }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(p.default.Component),
            kt = "Train",
            Ct = "Bus",
            Vt = "SmartTravel",
            _t = "Plane",
            xt = Z.default.isTieyou
              ? ["jCO-_qw188Vies9QYILu7Mx3Ho_7ih3yniv9P7Cb6V0"]
              : ["Rr_-dvOh1mfMq6MldrOHIq8MXJN6JBCLEqXa0TUdqYY"],
            Dt =
              (0, T.h)(!1, { usePageWrapper: !0 })(
                (at = (function (e) {
                  (0, m.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var a;
                    return (
                      (0, l.Z)(this, i),
                      (a = t.call(this, e)),
                      (0, f.Z)((0, d.Z)(a), "elementKey", ".sel-box"),
                      (0, f.Z)((0, d.Z)(a), "monitorId", "1"),
                      (a.state = {
                        tabType: kt,
                        tabList: [
                          {
                            name: "火车",
                            trafficType: "Train",
                            superscript: "火车",
                          },
                          {
                            name: "飞机",
                            trafficType: "Plane",
                            superscript: "飞机",
                          },
                          {
                            name: "智能中转",
                            trafficType: "SmartTravel",
                            superscript: "智能中转",
                          },
                        ],
                        tabInited: !1,
                        departDate: "",
                        beginDate: "",
                        endDate: "",
                        departDateStr: "",
                        dstation: "",
                        astation: "",
                        isGaotieOnly: !1,
                        departInfo: void 0,
                        arriveInfo: void 0,
                        isReschedule: !1,
                        trainViewModeType: "",
                        isRescheduleDisableChooseDate: !1,
                        rescheduleFromTime: "",
                        rescheduleFromDate: "",
                        pageLength: 1,
                        maskType: "",
                        shouldSubscribeMsgGuide: !1,
                        isStudent: !1,
                        trainListTitle: "",
                        flightTabTag: "",
                        listSwipeDirection: !1,
                        listSwipeStart: !1,
                        isPointReschedule: !1,
                      }),
                      (a.pageRootClassName =
                        "mix-traffic-list flex flex-column"),
                      (a.pageContentIsFullScreen = !0),
                      (a.pageId = Z.default.isTieyou
                        ? "10320660964"
                        : "10320660960"),
                      (a.autoExpose = !0),
                      a
                    );
                  }
                  return (
                    (0, u.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            t = this,
                            i = (0, g.getCurrentInstance)().router.params || {},
                            a = i.isReschedule,
                            n = void 0 !== a && a,
                            r = i.dstation,
                            s = i.astation,
                            o = i.date,
                            c = i.fromTime,
                            l = void 0 === c ? "" : c,
                            u = i.activityId,
                            d = i.isStudent,
                            m = i.departInfo,
                            h = i.arriveInfo,
                            f = i.isGaotieOnly,
                            p = i.tab,
                            v = i.subTab,
                            T = i.isRescheduleDisableChooseDate,
                            Z = i.isPointReschedule,
                            w = void 0 !== Z && Z,
                            y = i.fromPage,
                            N = void 0 === y ? "" : y;
                          p && this.setState({ tabType: p }),
                            (this.subTab = v),
                            n ||
                              null === (e = this.ubtTrace) ||
                              void 0 === e ||
                              e.call(this, "TZWList_exposure", {
                                PageId: this.pageId,
                                fromSource: N || "noSource",
                                appid: "5115",
                              }),
                            u && this.handleActivityId(u);
                          var k = o || _.Z.getToday();
                          this.setState(
                            {
                              trainViewModeType:
                                "robOpeningTimeQuery" === N
                                  ? "robOpeningTimeQuery"
                                  : "",
                              isReschedule: n,
                              isRescheduleDisableChooseDate: n && 1 == T,
                              dstation: decodeURIComponent(r),
                              astation: decodeURIComponent(s),
                              isGaotieOnly: "true" == f,
                              departInfo:
                                m && JSON.parse(decodeURIComponent(m)),
                              arriveInfo:
                                h && JSON.parse(decodeURIComponent(h)),
                              departDate: k,
                              departDateStr: ""
                                .concat(b()(k).format("M月D日"), " ")
                                .concat(_.Z.getWeekDayDesc(k)),
                              rescheduleFromTime: l,
                              rescheduleFromDate: k,
                              isStudent: 1 == d,
                              isPointReschedule: w,
                              fromPage: N,
                            },
                            function () {
                              t.getTabTags(),
                                t.getFlightTabTag(),
                                t.setDateData();
                            }
                          ),
                            this.preCheckSubscribeMsg();
                          var C = S().getCurrentPages(),
                            V = C ? C.length : 1;
                          this.setState({ pageLength: V });
                        },
                      },
                      {
                        key: "handleActivityId",
                        value: function (e) {
                          S().setStorageSync(
                            "activityId",
                            decodeURIComponent(e)
                          ),
                            y.Z.setAid(e);
                        },
                      },
                      {
                        key: "trainGetTableTags",
                        value: function () {
                          var e = this.state,
                            t = e.dstation,
                            i = e.astation,
                            a = e.departInfo,
                            n = e.arriveInfo,
                            r = e.departDate,
                            s = {
                              version: "4",
                              departureDate: r,
                              fromPage: e.fromPage,
                            };
                          return (
                            a && n
                              ? a.areaId && n.areaId
                                ? (s.newSearchCondition = {
                                    fromLocation: a.name,
                                    fromStationType: a.stationType || "",
                                    fromAreaId: a.areaId,
                                    toLocation: n.name,
                                    toStationType: n.stationType || "",
                                    toAreaId: n.areaId,
                                    departDate: r,
                                  })
                                : ((s.departureName = a.name),
                                  (s.arrivalName = n.name),
                                  (s.departureDate = r))
                              : ((s.departureName = t),
                                (s.arrivalName = i),
                                (s.departureDate = r)),
                            (0, C.$B2)(s, {
                              cacheControl: {
                                useCache: !0,
                                maxAge: 1e4,
                                dedup: !0,
                                dedupingInterval: 500,
                              },
                            })
                          );
                        },
                      },
                      {
                        key: "getTabTags",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t,
                                i,
                                a,
                                n,
                                r,
                                c,
                                l,
                                u,
                                d,
                                m,
                                h,
                                f,
                                p = this;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          this.trainGetTableTags()
                                        );
                                      case 3:
                                        ((t = e.sent) &&
                                          1 == t.resultCode &&
                                          t.tableTags) ||
                                          ((t = {}),
                                          (i = this.state),
                                          (a = i.dstation),
                                          (n = i.astation),
                                          (r = i.departInfo),
                                          (c = i.arriveInfo),
                                          (t.tableTags = [
                                            {
                                              name: "火车",
                                              trafficType: "Train",
                                              superscript: "火车",
                                              departureName:
                                                (null == r ? void 0 : r.name) ||
                                                a,
                                              arrivalName:
                                                (null == c ? void 0 : c.name) ||
                                                n,
                                            },
                                            {
                                              name: "飞机",
                                              trafficType: "Plane",
                                              superscript: "飞机",
                                            },
                                            {
                                              name: "智能中转",
                                              trafficType: "SmartTravel",
                                              superscript: "智能中转",
                                            },
                                          ])),
                                          (l = t.tableTags),
                                          (u = []),
                                          (d = "B" == (0, V.ie)()),
                                          (m = 0);
                                      case 9:
                                        if (!(m < l.length)) {
                                          e.next = 29;
                                          break;
                                        }
                                        if (
                                          "智能中转" != (h = l[m]).name ||
                                          Z.default.isTT
                                        ) {
                                          e.next = 14;
                                          break;
                                        }
                                        return (
                                          u.push(
                                            (0, o.Z)(
                                              (0, o.Z)({}, h),
                                              {},
                                              {
                                                name: d ? h.name : "中转",
                                                trafficType: d
                                                  ? "SmartTravel"
                                                  : "Transfer",
                                                superscript: d
                                                  ? "智慧出行"
                                                  : "中转",
                                                ubtKey: d
                                                  ? "wx_list_szzList"
                                                  : "wx_list_zzList",
                                              }
                                            )
                                          ),
                                          e.abrupt("continue", 26)
                                        );
                                      case 14:
                                        if ("汽车" != h.name) {
                                          e.next = 17;
                                          break;
                                        }
                                        return (
                                          u.push(
                                            (0, o.Z)(
                                              (0, o.Z)({}, h),
                                              {},
                                              {
                                                ubtKey: "",
                                                extraInfo: {
                                                  busDepartureCityName:
                                                    h.departureName,
                                                  busArrivalCityName:
                                                    h.arrivalName,
                                                },
                                              }
                                            )
                                          ),
                                          e.abrupt("continue", 26)
                                        );
                                      case 17:
                                        if ("火车" != h.name) {
                                          e.next = 20;
                                          break;
                                        }
                                        return (
                                          u.push(
                                            (0, o.Z)(
                                              (0, o.Z)({}, h),
                                              {},
                                              { ubtKey: "wx_list_trainList" }
                                            )
                                          ),
                                          e.abrupt("continue", 26)
                                        );
                                      case 20:
                                        if ("飞机" != h.name) {
                                          e.next = 23;
                                          break;
                                        }
                                        return (
                                          u.push(
                                            (0, o.Z)(
                                              (0, o.Z)({}, h),
                                              {},
                                              { ubtKey: "xcx_djt_tabclick" }
                                            )
                                          ),
                                          e.abrupt("continue", 26)
                                        );
                                      case 23:
                                        if ("中转" != h.name) {
                                          e.next = 26;
                                          break;
                                        }
                                        return (
                                          u.push(
                                            (0, o.Z)(
                                              (0, o.Z)({}, h),
                                              {},
                                              { ubtKey: "wx_list_zzList" }
                                            )
                                          ),
                                          e.abrupt("continue", 26)
                                        );
                                      case 26:
                                        m++, (e.next = 9);
                                        break;
                                      case 29:
                                        (f = u.find(function (e) {
                                          return (
                                            e.name === (d ? "智能中转" : "中转")
                                          );
                                        })),
                                          u.length < 2 &&
                                            f &&
                                            (u = [].concat([
                                              {
                                                name: "火车",
                                                trafficType: "Train",
                                                superscript: "火车",
                                              },
                                              (0, o.Z)({}, f),
                                            ])),
                                          console.log(u),
                                          this.setState({ tabList: u }),
                                          S().nextTick(function () {
                                            p.setState({ tabInited: !0 });
                                          }),
                                          (e.next = 39);
                                        break;
                                      case 36:
                                        (e.prev = 36),
                                          (e.t0 = e.catch(0)),
                                          console.log(e.t0);
                                      case 39:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 36]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getFlightTabTag",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t, i, a;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          this.state.tabList.some(function (e) {
                                            return e.trafficType == _t;
                                          })
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 3:
                                        return (
                                          (e.prev = 3),
                                          (e.next = 6),
                                          this.trainGetTableTags()
                                        );
                                      case 6:
                                        1 == (t = e.sent).resultCode &&
                                          ((i = t.tableTags),
                                          null !=
                                            (a =
                                              null == i
                                                ? void 0
                                                : i.find(function (e) {
                                                    return e.trafficType == _t;
                                                  })) &&
                                            a.productionLineDesc &&
                                            this.setState({
                                              flightTabTag:
                                                a.productionLineDesc,
                                            })),
                                          (e.next = 13);
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(3)),
                                          console.log(e.t0);
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[3, 10]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "setDateData",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t, i, a, n, r, o, c, l, u, d, m, h, f;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          B.ZP.getPreSaleDaysAsync()
                                        );
                                      case 2:
                                        (t = this.state),
                                          (i = t.departDate),
                                          (a = t.tabType),
                                          (n = t.rescheduleFromDate),
                                          (r = t.rescheduleFromTime),
                                          (o = t.isReschedule),
                                          (c = b()().format("YYYY-MM-DD")),
                                          (l = b()()),
                                          (u = b()(
                                            "".concat(n, " ").concat(r)
                                          )),
                                          (d = u.diff(l, "hour")),
                                          (m =
                                            d > 48
                                              ? b()().add(
                                                  I.ET.preSaleDays - 1,
                                                  "day"
                                                )
                                              : b()(n)),
                                          (h =
                                            a === _t
                                              ? b()().add(x.g2 - 1, "day")
                                              : "train" === a && o
                                              ? m
                                              : b()().add(
                                                  I.ET.preRobDays - 1,
                                                  "day"
                                                )),
                                          (f = i),
                                          (b()(f).valueOf() > h.valueOf() ||
                                            b()(f).valueOf() <
                                              b()(c).valueOf()) &&
                                            (f = c),
                                          this.setState({
                                            beginDate: c,
                                            endDate: h.format("YYYY-MM-DD"),
                                            departDate: f,
                                            departDateStr: ""
                                              .concat(
                                                b()(f).format("M月D日"),
                                                " "
                                              )
                                              .concat(_.Z.getWeekDayDesc(f)),
                                          });
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onClickChangeDate",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e(t) {
                              var i = this;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          this.setState({
                                            listSwipeStart: !1,
                                            listSwipeDirection: !1,
                                          }),
                                          (e.next = 3),
                                          w.Z.awaitTime(100)
                                        );
                                      case 3:
                                        this.setState(
                                          {
                                            departDate: t,
                                            departDateStr: ""
                                              .concat(
                                                b()(t).format("M月D日"),
                                                " "
                                              )
                                              .concat(_.Z.getWeekDayDesc(t)),
                                          },
                                          function () {
                                            i.getFlightTabTag();
                                          }
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "isGoIntlFlightList",
                        value: function (e) {
                          var t = this.state.tabList;
                          if (e == _t) {
                            var i =
                              t.find(function (e) {
                                return "飞机" == e.name;
                              }) || {};
                            return [i.departureCode, i.arrivalCode].includes(
                              "HKG"
                            );
                          }
                          return !1;
                        },
                      },
                      {
                        key: "goIntlFlightList",
                        value: function () {
                          var e = this.state,
                            t = e.tabList,
                            i = e.departDate,
                            a =
                              t.find(function (e) {
                                return "飞机" == e.name;
                              }) || {},
                            n = a.departureCode,
                            r = a.arrivalCode,
                            s = a.arrivalName,
                            o = a.departureName;
                          this.navigateTo({
                            url: "/pages/flightIntl/list/list?departCity="
                              .concat(o, "&departCityCode=")
                              .concat(n, "&arriveCity=")
                              .concat(s, "&arriveCityCode=")
                              .concat(r, "&departDate=")
                              .concat(i, "&nearby=1"),
                          });
                        },
                      },
                      {
                        key: "switchTab",
                        value: function (e) {
                          var t = this;
                          if (this.state.tabType !== e)
                            return this.isGoIntlFlightList(e)
                              ? this.goIntlFlightList()
                              : void this.setState(
                                  {
                                    tabType: e,
                                    listSwipeStart: !1,
                                    listSwipeDirection: !1,
                                  },
                                  function () {
                                    t.setDateData();
                                  }
                                );
                        },
                      },
                      {
                        key: "onSwitchTab",
                        value: function (e) {
                          this.state.tabList.some(function (t) {
                            return t.trafficType === e;
                          })
                            ? this.switchTab(e)
                            : (0, k.showModal)("暂无更多数据");
                        },
                      },
                      {
                        key: "changeTrainLowestPrice",
                        value: function (e) {
                          this.setState({ trainLowestPrice: e });
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          this.state.pageLength > 1
                            ? this.checkSubscribeMsgShow()
                            : w.Z.relaunchHome();
                        },
                      },
                      {
                        key: "checkSubscribeMsgShow",
                        value: function () {
                          var e = this,
                            t = this.state.shouldSubscribeMsgGuide,
                            i = D.C2.get() || "",
                            a = b()().format("YYYY-MM-DD");
                          if (i == a || !t) return this.navigateBack(), !0;
                          t &&
                            this.setState({
                              maskType: "showSubscribeMsgGuide",
                            }),
                            D.C2.set(a),
                            w.Z.setSubscribe(xt, !1)
                              .then(function () {
                                e.navigateBack();
                              })
                              .catch(function () {
                                e.navigateBack();
                              });
                        },
                      },
                      {
                        key: "preCheckSubscribeMsg",
                        value: function () {
                          var e = this;
                          Z.default.isWechat &&
                            w.Z.getSubscribe(xt).then(function (t) {
                              (e.toSubscribeIds = t.unKnownList || []),
                                t &&
                                  t.unKnownList &&
                                  t.unKnownList.length &&
                                  e.setState({ shouldSubscribeMsgGuide: !0 });
                            });
                        },
                      },
                      {
                        key: "closeMask",
                        value: function () {
                          this.setState({ maskType: "" });
                        },
                      },
                      {
                        key: "setTitle",
                        value: function (e, t) {
                          e === kt && this.setState({ trainListTitle: t });
                        },
                      },
                      {
                        key: "setSwipeDirection",
                        value: function (e) {
                          this.setState({ listSwipeDirection: e });
                        },
                      },
                      {
                        key: "setListSwipeStart",
                        value: function (e) {
                          this.setState({ listSwipeStart: e });
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          var e, t;
                          if (this.state.tabType === kt)
                            return null === (e = this.$trainComp) ||
                              void 0 === e ||
                              null === (t = e.getShareData) ||
                              void 0 === t
                              ? void 0
                              : t.call(e);
                        },
                      },
                      {
                        key: "onUserCaptureScreen",
                        value: function () {
                          var e, t;
                          if (this.state.tabType === kt)
                            return null === (e = this.$trainComp) ||
                              void 0 === e ||
                              null === (t = e.onUserCaptureScreen) ||
                              void 0 === t
                              ? void 0
                              : t.call(e);
                        },
                      },
                      {
                        key: "onClickChangeStation",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isReschedule,
                            a = t.departInfo,
                            n = t.arriveInfo,
                            r = t.dstation,
                            s = t.astation,
                            o = t.trainListTitle,
                            c = t.isStudent;
                          if (!i) {
                            var l = n,
                              u = a,
                              d = s,
                              m = r,
                              h = "",
                              f = o
                                ? o.includes("学生票")
                                  ? "(学生票)"
                                  : ""
                                : c
                                ? "(学生票)"
                                : "";
                            l && u
                              ? (h = "".concat(l.name, "-").concat(u.name) + f)
                              : d && m && (h = "".concat(d, "-").concat(m) + f),
                              this.setState(
                                {
                                  departInfo: l,
                                  arriveInfo: u,
                                  dstation: d,
                                  astation: m,
                                  trainListTitle: h,
                                },
                                function () {
                                  e.getTabTags(), e.getFlightTabTag();
                                }
                              );
                          }
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          var e = this.state,
                            t = e.departInfo,
                            i = e.arriveInfo,
                            a = e.trainListTitle,
                            n = e.dstation,
                            r = e.astation,
                            s = e.tabType,
                            o = e.isStudent,
                            c = e.isReschedule,
                            l = "车次列表";
                          return (
                            i && t
                              ? (l = "".concat(t.name, "-").concat(i.name))
                              : n && r && (l = "".concat(n, "-").concat(r)),
                            s === kt && a && (l = a),
                            l.includes("-")
                              ? (0, q.BX)(v.View, {
                                  className: "train-list-title-view",
                                  id: "AKFB",
                                  onClick: this.onClickChangeStation,
                                  children: [
                                    (0, q.tZ)(v.Text, {
                                      children: l.split("-")[0],
                                    }),
                                    (0, q.tZ)(v.Text, {
                                      className:
                                        "ifont-chage iconfont ifont-train-list-change",
                                    }),
                                    (0, q.tZ)(v.Text, {
                                      children: l.split("-")[1],
                                    }),
                                    o &&
                                      !a &&
                                      (0, q.tZ)(v.Text, {
                                        style: "margin-right: 8px",
                                        children: "(学生票)",
                                      }),
                                    c &&
                                      (0, q.tZ)(v.Text, { children: "(改签)" }),
                                  ],
                                })
                              : (0, q.BX)(v.View, {
                                  className: "train-list-title-view",
                                  children: [
                                    (0, q.tZ)(v.Text, { children: l }),
                                    c &&
                                      (0, q.tZ)(v.Text, { children: "(改签)" }),
                                  ],
                                })
                          );
                        },
                      },
                      {
                        key: "renderTop",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.departDateStr,
                            a = t.isRescheduleDisableChooseDate,
                            n = t.tabType,
                            r = t.beginDate,
                            s = t.departDate,
                            c = t.endDate,
                            l = t.tabInited,
                            u = {
                              chooseDate: s,
                              _begin: r,
                              _end: c,
                              _isFlight: n === _t,
                              onChangeDate: function (t) {
                                return e.onClickChangeDate(t);
                              },
                            };
                          return (0, q.tZ)(v.View, {
                            id: "list-top",
                            children: l
                              ? (0, q.tZ)(v.View, {
                                  children: a
                                    ? (0, q.tZ)(v.View, {
                                        className: "date bgcolor-dark",
                                        children: (0, q.BX)(v.View, {
                                          className: "gaiqian-disable-tips",
                                          children: [
                                            (0, q.tZ)(v.Image, {
                                              src: "https://images3.c-ctrip.com/train/tieyou-mini-img/202012/notice-icon@3x.png",
                                              mode: "widthFix",
                                              className: "notice-icon",
                                            }),
                                            "原车次已发车，您可改签今天(",
                                            i,
                                            ")出发的以下车次",
                                          ],
                                        }),
                                      })
                                    : (0, q.tZ)(bt, (0, o.Z)({}, u)),
                                })
                              : (0, q.tZ)(v.View, {
                                  className: "train-date-picker",
                                  children: (0, q.BX)(v.View, {
                                    className: "date-picker two",
                                    children: [
                                      (0, q.tZ)(v.View, {
                                        className: "calendar-list",
                                        children: (0, q.tZ)(v.View, {
                                          className: "calendar-scroll-list",
                                          scrollX: !0,
                                          children: (0, q.tZ)(v.View, {
                                            className: "item",
                                          }),
                                        }),
                                      }),
                                      (0, q.BX)(v.View, {
                                        className:
                                          "calendar-all flex flex-center",
                                        children: [
                                          (0, q.tZ)(v.View, {
                                            className: "left-shadow",
                                          }),
                                          (0, q.tZ)(v.View, {
                                            className: "img",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.departDate,
                            a = t.dstation,
                            n = t.astation,
                            r = t.departInfo,
                            s = t.arriveInfo,
                            c = t.isGaotieOnly,
                            l = t.isReschedule,
                            u = t.tabType,
                            d = t.tabList,
                            m = t.tabInited,
                            h = t.trainLowestPrice,
                            f = t.maskType,
                            p = t.isStudent,
                            g = t.isPointReschedule,
                            S = t.flightTabTag,
                            T = t.listSwipeDirection,
                            Z = t.listSwipeStart,
                            w = t.trainViewModeType;
                          if (!m) return this.renderTop();
                          var y = !(
                              null == d ||
                              !d.find(function (e) {
                                return !!e.tag;
                              })
                            ),
                            N = "robOpeningTimeQuery" === w,
                            b = {
                              hidden: u !== _t,
                              selectDate: i,
                              trainLowestPrice: h,
                              flightInfo:
                                d.find(function (e) {
                                  return "飞机" === e.name;
                                }) || {},
                              isStudent: p,
                              onCommonSceneDrawer: this.$CommonSceneDrawer,
                              pageId: this.pageId,
                            },
                            k = {
                              hidden: u !== kt,
                              selectDate: i,
                              trainSearchCondition:
                                d.find(function (e) {
                                  return e.trafficType === kt;
                                }) || {},
                              dstation: a,
                              astation: n,
                              isGaotieOnly: c,
                              departInfo: r,
                              arriveInfo: s,
                              tabListLen: d.length,
                              hasFlight:
                                d &&
                                d.some(function (e) {
                                  return e.trafficType === _t;
                                }),
                              smartTravelTabInfo:
                                d.find(function (e) {
                                  return e.trafficType === Vt;
                                }) || {},
                              isReschedule: l,
                              onSwitchTab: function (t) {
                                return e.onSwitchTab(t);
                              },
                              onChangeTrainLowestPrice: function (t) {
                                return e.changeTrainLowestPrice(t);
                              },
                              setTitle: this.setTitle.bind(this),
                              pageId: this.pageId,
                              onCommonSceneDrawer: this.$CommonSceneDrawer,
                              setSwipeDirection: function (t) {
                                return e.setSwipeDirection(t);
                              },
                              setListSwipeStart: this.setListSwipeStart,
                              isPointReschedule: g,
                            },
                            C = {
                              hidden: u !== Vt,
                              selectDate: i,
                              smartTravelTabInfo:
                                d.find(function (e) {
                                  return e.trafficType === Vt;
                                }) || {},
                              tabType: this.subTab,
                            };
                          console.log("extraInfo:", this.state.extraInfo);
                          var V =
                              (
                                d.find(function (e) {
                                  return "汽车" === e.name;
                                }) || {}
                              ).extraInfo || {},
                            _ = V.busDepartureCityName,
                            x = V.busArrivalCityName,
                            D = {
                              hidden: u !== Ct,
                              selectDate: i,
                              busDepartureCityName: _,
                              busArrivalCityName: x,
                            };
                          return (0, q.BX)(v.Block, {
                            children: [
                              this.renderTop(),
                              (0, q.BX)(v.View, {
                                className: "flex-1 flex flex-column "
                                  .concat(y ? "tag-show" : "", " ")
                                  .concat(
                                    l ||
                                      N ||
                                      (null == d ? void 0 : d.length) <= 1
                                      ? "no-tap-list"
                                      : ""
                                  ),
                                style: {
                                  overflow: "hidden",
                                  position: "relative",
                                },
                                children: [
                                  (0, q.tZ)(v.Block, {
                                    children:
                                      !l &&
                                      !N &&
                                      (null == d ? void 0 : d.length) > 1 &&
                                      (0, q.tZ)(v.View, {
                                        className: "tap "
                                          .concat(
                                            u === Vt ? "line0" : "",
                                            " \n                "
                                          )
                                          .concat(
                                            Z && T && "Train" === u
                                              ? "hidden"
                                              : ""
                                          ),
                                        id: "train-list-tabs",
                                        children: (0, q.BX)(v.View, {
                                          className: "tab-content",
                                          children: [
                                            d.map(function (t) {
                                              return (0,
                                              q.BX)(v.View, { className: "item flex-align-items-center flex-column ".concat(u === t.trafficType ? "active" : ""), id: "AKFC", onClick: e.switchTab.bind(e, t.trafficType), "data-ubt-key": t.ubtKey || "", children: [(0, q.tZ)(v.Text, { className: "tab-name", children: t.name }), t.tag && (0, q.tZ)(v.Text, { className: "tag-desc", children: t.tag }), t.trafficType == _t && S && (0, q.tZ)(v.View, { className: "tab-tag bd-1rpx", children: S })] }, t.trafficType);
                                            }),
                                            (0, q.tZ)(v.View, {
                                              className: "scrollbar",
                                              style: "width: ".concat(
                                                100 / d.length,
                                                "%"
                                              ),
                                              children: (0, q.tZ)(v.Text, {
                                                className: "scrollbar-content",
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                  }),
                                  !l &&
                                    !N &&
                                    (null == d ? void 0 : d.length) > 1 &&
                                    "Train" !== u &&
                                    (0, q.tZ)(v.View, {
                                      className: "place-holder-box",
                                    }),
                                  (0, q.tZ)(
                                    St,
                                    (0, o.Z)(
                                      (0, o.Z)({}, k),
                                      {},
                                      {
                                        ref: function (t) {
                                          return (e.$trainComp = t);
                                        },
                                      }
                                    )
                                  ),
                                  d.some(function (e) {
                                    return e.trafficType == Ct;
                                  }) && (0, q.tZ)(oe, (0, o.Z)({}, D)),
                                  d.some(function (e) {
                                    return e.trafficType == _t;
                                  }) && (0, q.tZ)(J, (0, o.Z)({}, b)),
                                  (0, q.tZ)(Tt, (0, o.Z)({}, C)),
                                ],
                              }),
                              (0, q.tZ)(v.CustomWrapper, {
                                children:
                                  "showSubscribeMsgGuide" === f &&
                                  (0, q.BX)(v.View, {
                                    children: [
                                      (0, q.tZ)(v.View, {
                                        className:
                                          "pop-mask " +
                                          ("showSubscribeMsgGuide" === f
                                            ? "show active"
                                            : ""),
                                        "data-type": f,
                                        id: "AKFD",
                                        onClick: this.closeMask,
                                        catchMove: !0,
                                      }),
                                      (0, q.BX)(v.View, {
                                        className: "pop-subscribe-demo",
                                        children: [
                                          (0, q.tZ)(v.View, {
                                            className: "hand",
                                          }),
                                          (0, q.tZ)(v.View, {
                                            className: "check",
                                          }),
                                          (0, q.tZ)(v.View, {
                                            className: "light",
                                          }),
                                          (0, q.tZ)(v.View, {
                                            className: "button",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(p.default.PureComponent))
              ) || at;
          (Dt.enableShareAppMessage = !0),
            Page(
              (0, r.createPageConfig)(
                Dt,
                "pages/train/list/list",
                { root: { cn: [] } },
                {
                  navigationBarBackgroundColor: "#0066E6",
                  backgroundColorTop: "#0066E6",
                  backgroundColorBottom: "#efefef",
                  disableScroll: !0,
                  navigationStyle: "custom",
                  enablePullDownRefresh: !0,
                  usingComponents: {
                    "native-train-view":
                      "./component/NativeTrainView/NativeTrainView",
                  },
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98655, 31162, 37513, 32690, 65982, 94885, 71341, 61857, 46263,
            80267, 73783, 42475, 46891, 83851, 29907, 79470, 86642, 56983,
            63511, 29126, 82316, 3683, 7460, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(47127);
          }
        ),
          e.O();
      },
    ]);
})();
