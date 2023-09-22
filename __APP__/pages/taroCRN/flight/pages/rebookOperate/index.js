!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [88170],
      {
        34958: function (e, n, i) {
          var t = i(32180),
            r = i(298),
            s = i(57042),
            a = i(24460),
            o = i(81876),
            l = i(21867),
            c = i(86066),
            u = i(45023),
            d = i(52500),
            _ = i(92954),
            f = i(71515),
            m = i(78200),
            p = i(90384),
            h = i(9776),
            g = i(23577),
            v = i(21145),
            b = i(46116),
            y = i(8271),
            N = i.n(y),
            k = i(48813);
          function Z(e) {
            var n,
              i = e.condition,
              t = e.tripType,
              s = e.handleRebookClick;
            if (!i) return (0, k.tZ)(k.HY, {});
            var a =
                (null === (n = i.segmentList) || void 0 === n
                  ? void 0
                  : n[0]) || {},
              o = a.segmentIndex,
              l = a.passengerList,
              c = a.flightBasicInfo || {},
              u = c.departCityName,
              d = c.arriveCityName,
              _ = c.takeoffTime,
              m = c.newRebookInfo,
              p = c.transferCity,
              h =
                null == l
                  ? void 0
                  : l.some(function (e) {
                      return e.canRebook;
                    }),
              g = o || {},
              v = g.segmentType,
              y = g.sequenceNum,
              Z = { 0: "", 1: "成人票", 2: "儿童票", 3: "婴儿票", 4: "老人票" };
            return (0, k.BX)(f.View, {
              className: " _Fi _jj _Oa _sq _Mb _yc",
              children: [
                (0, k.BX)(f.View, {
                  className: " _i _Ga _l _Yn",
                  children: [
                    (0, k.BX)(f.View, {
                      className: " _i _l _nl _yc",
                      children: [
                        (0, k.tZ)(f.View, {
                          className: " _w _vi _tq _b _yn _lj _ff _Mb",
                          children: (function () {
                            var e = "",
                              n = ["", "第一程", "第二程", "第三程", "第四程"];
                            if (1 == t) e = "直飞";
                            else if (2 == t) e = 1 == v ? "去程" : "返程";
                            else if (3 == t) e = 1 == v ? "第1程" : "第2程";
                            else if (4 == t) e = n[y || 1];
                            else if (5 == t) {
                              (e = 1 == v ? "去程" : "返程"), (e += n[y || 1]);
                            }
                            return e;
                          })(),
                        }),
                        (0, k.BX)(f.View, {
                          className: " _oo _i _l _yc _Qf",
                          children: [
                            (0, k.BX)(f.Text, {
                              className: " _dd _uq _U _vq _yc _Xm _Ym",
                              numberOfLines: 1,
                              children: [
                                u,
                                "-",
                                d,
                                p ? "(中转".concat(p, ")") : "",
                              ],
                            }),
                            m &&
                              (0, k.tZ)(f.View, {
                                className:
                                  " _gb _wq _gf _yj _af _Dn _xq _Ym _Mb",
                                children: "新航班",
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.BX)(f.Text, {
                      numberOfLines: "1",
                      className: " _Kc _Ti _S",
                      children: [N()(_).format("MM月DD日 HH:mm"), "起飞"],
                    }),
                  ],
                }),
                (0, k.tZ)(f.View, {
                  className: " _ol _pb _uk",
                  children:
                    null == l
                      ? void 0
                      : l.map(function (e, n) {
                          var i;
                          return (0,
                          k.BX)(f.View, { className: " _i _Ga _l", style: (0, r.Z)({}, n !== l.length - 1 ? { marginBottom: 16 } : {}), children: [(0, k.BX)(f.View, { className: " _i _l _nl _yc", children: [(0, k.tZ)(f.View, { className: " _dd _Ti _S", children: e.passengerName }), (0, k.tZ)(b.Z, { className: " _Zg _De _bh _Kc _aj _Q _Mb", borderColor: "#ccc", borderRadius: 4, children: Z[e.passengerType || 0] })] }), !e.canRebook && (0, k.tZ)(f.View, { className: " _Nd _yq _S", children: null !== (i = e.unRebookableReason) && void 0 !== i ? i : "" })] }, e.passengerName);
                        }),
                }),
                h &&
                  (0, k.tZ)(f.View, {
                    style:
                      "display: flex;justify-content: flex-end; flex: 1; flex-direction: row;",
                    onClick: function () {
                      return s(i);
                    },
                    children: (0, k.tZ)(f.View, {
                      className: " _qd _w _ra _zq _Mb _b _ig _S _Aq _Sj",
                      children: "去改签",
                    }),
                  }),
              ],
            });
          }
          var T,
            w = d.default.memo(function (e) {
              var n = e.data,
                i = e.tripType,
                t = e.onRebook;
              return (0, k.tZ)(k.HY, {
                children:
                  null == n
                    ? void 0
                    : n.map(function (e, n) {
                        return (0,
                        k.tZ)(Z, { tripType: i, condition: e, handleRebookClick: t }, n);
                      }),
              });
            });
          function L(e) {
            var n = e.isSplitOrder,
              i = e.conditionList;
            if (!i) return (0, k.tZ)(k.HY, {});
            return n &&
              (function (e) {
                return e.some(function (e) {
                  var n, i, t;
                  return !(
                    null == e ||
                    null === (n = e.segmentList) ||
                    void 0 === n ||
                    null === (i = n[0]) ||
                    void 0 === i ||
                    null === (t = i.passengerList) ||
                    void 0 === t ||
                    !t.some(function (e) {
                      return [2, 3].includes(e.passengerType);
                    })
                  );
                });
              })(i)
              ? (0, k.tZ)(f.View, {
                  className: " _xj _Oa _yj _Na _Q _kl _Ei _yc",
                  children:
                    "儿童婴儿乘客无法单独出行，须有年满18周岁成人陪同乘，以为成人乘客最多可以携带两名儿童/婴儿乘客，且需要与儿童婴儿乘客舱等一致",
                })
              : (0, k.tZ)(k.HY, {});
          }
          var I =
            (0, i(87298).h)()(
              (T = (function (e) {
                (0, l.Z)(i, e);
                var n = (0, c.Z)(i);
                function i(e) {
                  var t;
                  return (
                    (0, s.Z)(this, i),
                    (t = n.call(this, e)),
                    (0, u.Z)((0, o.Z)(t), "isIntl", !1),
                    (0, u.Z)((0, o.Z)(t), "pageId", ""),
                    (0, u.Z)((0, o.Z)(t), "params", void 0),
                    (0, u.Z)((0, o.Z)(t), "orderNumber", void 0),
                    (t.state = {
                      tripType: 0,
                      conditionList: null,
                      pageTitle: "选择改签行程",
                      isSplitOrder: !1,
                      explanation: [],
                    }),
                    t
                  );
                }
                return (
                  (0, a.Z)(i, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var e, n;
                        (this.params =
                          (null === (e = (0, _.getCurrentInstance)().router) ||
                          void 0 === e
                            ? void 0
                            : e.params) || {}),
                          (null !== (n = this.params) &&
                            void 0 !== n &&
                            n.orderNumber) ||
                            this.params.conditionList ||
                            (this.params = (0, h.DH)("flightRebookData") || {});
                        var i = this.params,
                          t = i.conditionList,
                          r = i.tripType,
                          s = i.explanation,
                          a = i.orderNumber,
                          o = i.isIntl;
                        (this.isIntl = !!o), (this.orderNumber = a);
                        var l = this.params.isSplitOrder;
                        g.Z.isCRN
                          ? this.isIntl &&
                            (this.pageId = l ? "10650103448" : "10650103446")
                          : this.isIntl &&
                            (this.pageId = l ? "10650103460" : "10650103458"),
                          this.setState({
                            tripType: r || 0,
                            isSplitOrder: l,
                            explanation: s,
                          }),
                          l && this.setPageTitle("选择改签乘机人"),
                          this.setState({
                            conditionList: l ? t : this.groupConditionList(t),
                          });
                      },
                    },
                    {
                      key: "groupConditionList",
                      value: function (e) {
                        if (!e) return null;
                        var n = [];
                        e.sort(function (e, n) {
                          var i,
                            t,
                            r =
                              null === (i = e.segmentList) || void 0 === i
                                ? void 0
                                : i[0].segmentIndex,
                            s =
                              null === (t = n.segmentList) || void 0 === t
                                ? void 0
                                : t[0].segmentIndex;
                          return (
                            10 * r.segmentType +
                            r.sequenceNum -
                            (10 * s.segmentType + s.sequenceNum)
                          );
                        });
                        var i = 0,
                          t = 0,
                          s = [];
                        return (
                          e.forEach(function (e) {
                            var r,
                              a =
                                null === (r = e.segmentList) || void 0 === r
                                  ? void 0
                                  : r[0].segmentIndex;
                            (i == a.segmentType && t == a.sequenceNum) ||
                              ((i = a.segmentType || 0),
                              (t = a.sequenceNum || 0),
                              s.length > 0 && (n.push(s), (s = []))),
                              s.push(e);
                          }),
                          n.push(s),
                          n.map(function (e) {
                            var n;
                            if (1 == e.length) return e[0];
                            var i = [];
                            return (
                              e.forEach(function (e) {
                                var n;
                                (
                                  (null === (n = e.segmentList) || void 0 === n
                                    ? void 0
                                    : n[0].passengerList) || []
                                ).forEach(function (e) {
                                  i.push(e);
                                });
                              }),
                              {
                                segmentList: [
                                  (0, r.Z)(
                                    (0, r.Z)(
                                      {},
                                      null === (n = e[0].segmentList) ||
                                        void 0 === n
                                        ? void 0
                                        : n[0]
                                    ),
                                    {},
                                    { passengerList: i }
                                  ),
                                ],
                                conditionList: e,
                              }
                            );
                          })
                        );
                      },
                    },
                    {
                      key: "setPageTitle",
                      value: function (e) {
                        this.setState({ pageTitle: e });
                      },
                    },
                    {
                      key: "handleRebook",
                      value: function (e) {
                        var n = e.segmentList,
                          i = e.conditionList,
                          t = this.params,
                          r = t.rescheduleRefundRemark,
                          s = t.refundAndChangeDetails,
                          a = this.state,
                          o = a.tripType,
                          l = a.explanation;
                        if ((null == i ? void 0 : i.length) > 1)
                          (0, m.gD)(
                            {
                              orderNumber: this.orderNumber || "",
                              conditionList: i,
                              tripType: o,
                              rescheduleRefundRemark: r,
                              refundAndChangeDetails: s,
                              isSplitOrder: !0,
                              explanation: l,
                              isIntl: this.isIntl,
                            },
                            this
                          );
                        else {
                          var c = (0, p.I)(null == n ? void 0 : n[0]);
                          (c.rebookReasons || []).length > 1
                            ? (0, m.D0)(
                                {
                                  orderNumber: this.orderNumber || "",
                                  segment: c,
                                  explanation: l,
                                  rescheduleRefundRemark: r,
                                  refundAndChangeDetails: s,
                                  isIntl: this.isIntl,
                                },
                                this
                              )
                            : ((c.passengerList = c.passengerList.filter(
                                function (e) {
                                  return e.canRebook;
                                }
                              )),
                              (0, m.Cc)(
                                {
                                  orderNumber: this.orderNumber || "",
                                  segment: c,
                                  explanation: l,
                                  rescheduleRefundRemark: r,
                                  refundAndChangeDetails: s,
                                  isIntl: this.isIntl,
                                },
                                this
                              ));
                        }
                      },
                    },
                    {
                      key: "getPageId",
                      value: function () {
                        return (
                          console.log("getPageId " + this.pageId), this.pageId
                        );
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this.state,
                          n = e.pageTitle,
                          i = e.conditionList,
                          t = e.tripType,
                          r = e.isSplitOrder;
                        return (0, k.BX)(f.View, {
                          className: " _Y _p _yd",
                          children: [
                            (0, k.tZ)(v.Z, { title: n }),
                            (0, k.BX)(f.View, {
                              className:
                                " _i _Ga _Sc _l _xj _yj _Na _Q _Mb _zj",
                              children: [
                                (0, k.tZ)(f.Text, {
                                  style: {
                                    color: "#fd8700",
                                    fontSize: 12,
                                    fontFamily: "PingFangSC-Medium",
                                    fontWeight: "bold",
                                  },
                                  children: "温馨提示：",
                                }),
                                "按产品提供方规定，需分开提交改签申请",
                              ],
                            }),
                            (0, k.BX)(f.ScrollView, {
                              showScrollbar: !1,
                              className: " _i _nj _sj",
                              showsVerticalScrollIndicator: !1,
                              children: [
                                (0, k.tZ)(w, {
                                  tripType: t,
                                  data: i,
                                  onRebook: this.handleRebook.bind(this),
                                }),
                                (0, k.tZ)(L, {
                                  isSplitOrder: !!r,
                                  conditionList: i,
                                }),
                              ],
                            }),
                          ],
                        });
                      },
                    },
                  ]),
                  i
                );
              })(d.default.Component))
            ) || T;
          Page(
            (0, t.createPageConfig)(
              I,
              "pages/taroCRN/flight/pages/rebookOperate/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#efefef",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                disableScroll: !0,
                navigationBarTitleText: "改签选择",
                enablePullDownRefresh: !1,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [98946, 7160, 83004, 19559, 11216, 68592], function () {
          return (function (n) {
            return e((e.s = n));
          })(34958);
        }),
          e.O();
      },
    ]);
})();
