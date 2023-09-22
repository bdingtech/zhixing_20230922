!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/fecc9c60875b710a8101d0d50626beef.js"),
    require("../sub-common/21c38908e8fa4730fcf449c938917721.js"),
    require("../sub-common/e18ac9e89d62ef13595cf53c81489989.js"),
    require("../sub-common/af9a4e372fc86155ae3439262ddc36ee.js"),
    require("../sub-common/98288617f7b79bd93e6764129b2de6f6.js"),
    require("../sub-common/488f20d3ae601fc19d5c835f8ad41f52.js"),
    require("../sub-common/64b09328b6ab714bf257627ff5257a73.js"),
    require("../sub-common/a84a67620e54e4b0717aaaabef4d4f88.js"),
    require("../sub-common/1bfc4d45433b8de6b344d141f5c6c906.js"),
    require("../sub-common/6fe85c0e7576cabc17e868b8e899da37.js"),
    require("../sub-common/e255e3ffa6c0fa3b59639b749cd45155.js"),
    require("../sub-common/41e826946d5acf662d18dcccdf7ba9c9.js"),
    require("../sub-common/72d4a16e30125614fb36cb40015efca3.js"),
    require("../sub-common/e5d3d1be4be16b526d43188e1b24d26e.js"),
    require("../sub-common/72f6836a38da788b04d6df340945e671.js"),
    require("../sub-common/a2ac0ceb5f7d0d895cfbf0fbbe36cfa7.js"),
    require("../sub-common/fc8d2c41f03b7cf8df3076a401470a28.js"),
    require("../sub-common/82eba6c76a1180b32ebf23e60fff4c61.js"),
    require("../sub-common/d713e6c3587d81e961c85ebd4545654c.js"),
    require("../sub-common/997c205d01c5de4e84ea7969bc153c7a.js"),
    require("../sub-common/a55a85f92755291b80f1ffba0a0f2078.js"),
    require("../sub-common/e556aa0a4ecdf85baf45d8862bd5c225.js"),
    require("../sub-common/bf8d08333ee1f94c22729af905231683.js"),
    require("../sub-common/272d8bbab9a1c37d89fde323ad99b1ba.js"),
    require("../sub-common/57d478fa742525b60c72501c451a2545.js"),
    require("../sub-common/314504bff335087e517ba105944a68ae.js"),
    require("../sub-common/430c3e85a7092b3db54bce2b240b905f.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [51095],
      {
        34759: function (e, t, i) {
          var a = i(32180),
            n = i(57042),
            s = i(24460),
            r = i(21867),
            o = i(86066),
            c = i(90129),
            l = i(77610),
            d = i(79301),
            u = i(95308),
            p = i(22276),
            h = i(298),
            m = i(52500),
            b = i(71515),
            g = i(34229),
            f = i(92954),
            y = i.n(f),
            w = i(48792),
            S = i.n(w),
            v = i(79792),
            T = i(48813),
            N = (function (e) {
              (0, r.Z)(i, e);
              var t = (0, o.Z)(i);
              function i(e) {
                var a;
                return (
                  (0, n.Z)(this, i),
                  ((a = t.call(this, e)).state = {
                    isAlipay: v.default.isAlipay,
                    isTieyou: v.default.isTieyou,
                  }),
                  a
                );
              }
              return (
                (0, s.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.state,
                        t = e.isAlipay,
                        i = e.isTieyou;
                      return (0, T.tZ)(b.View, {
                        className: "common-switch-view",
                        children: t
                          ? (0, T.tZ)(b.View, {
                              className: ""
                                .concat(i ? "ty" : "zx", " switch ")
                                .concat(this.props.checked ? "active" : "", " ")
                                .concat(this.props.isVip ? "vip" : ""),
                              disabled: this.props.disabled,
                              id: "AACO",
                              onClick: this.props.disabled
                                ? function () {}
                                : this.props.onChange ||
                                  this.props.toggleSwitch,
                            })
                          : (0, T.tZ)(b.Switch, {
                              className:
                                this.props.className ||
                                "wx-switch-input " + (i ? "ty" : "zx"),
                              checked: this.props.checked || !1,
                              disabled: this.props.disabled,
                              onChange:
                                this.props.onChange || this.props.toggleSwitch,
                            }),
                      });
                    },
                  },
                ]),
                i
              );
            })(m.default.Component),
            P = i(61896),
            C = i(79910),
            I = i(8271),
            k = i.n(I),
            Z = i(5050),
            V = i(477),
            x = i(21999),
            B = i(20592),
            _ = i(1269),
            D = i(94190),
            G = i(13025),
            A = i(3205),
            X = i(18783),
            M = i(10741),
            L = i(96158),
            R = i(44830),
            F = i(25391),
            z = i(28509),
            U = i(93761),
            H = i(49120),
            O = i(21294),
            E = i(2657),
            j = i(58676),
            q = i(41341),
            K = i(65592),
            W = i(67813),
            Y = i(53346),
            J = i(43809),
            Q = i(17368),
            $ = i(8724),
            ee = i(92959),
            te = i(26871),
            ie = i(16575),
            ae = i(66101),
            ne = i(83315),
            se = {
              data: {
                speedSlider: {
                  items: [],
                  index: 0,
                  costPrice: 1,
                  speedPkgNums: 0,
                  pasNums: 1,
                  touchendHandlerFn: "speedSliderTouchendHandler",
                  touchmoveHandlerFn: "speedSliderTouchmoveHandler",
                  onChangeFn: "",
                  selectedItem: null,
                  speedLineStyle: "width: 0px",
                },
              },
              methods: {
                speedSliderModelInit: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 1,
                    a =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : this.data.speedSlider.onChangeFn,
                    n =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : 0,
                    s = t.length ? t[e] : null,
                    r = t.length ? t[n] : null,
                    o = this.data.speedSlider;
                  return (
                    this.setData({
                      speedSlider: Object.assign(
                        {},
                        (0, h.Z)(
                          (0, h.Z)({}, o),
                          {},
                          {
                            onChangeFn: a,
                            items: t,
                            pasNums: i,
                            index: e,
                            selectedItem: s,
                            defaultItem: r,
                          }
                        )
                      ),
                    }),
                    C._.isFunction(this[this.data.speedSlider.onChangeFn]) &&
                      this[this.data.speedSlider.onChangeFn](),
                    Promise.resolve()
                  );
                },
                speedSliderInit: function () {
                  for (
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : this.data.speedSlider.index,
                      i = ne.Z.getDeferred(),
                      a = arguments.length,
                      n = new Array(a > 1 ? a - 1 : 0),
                      s = 1;
                    s < a;
                    s++
                  )
                    n[s - 1] = arguments[s];
                  return (
                    this.speedSliderModelInit.apply(this, [t].concat(n)),
                    setTimeout(function () {
                      e.speedSliderSetLevel(t), i.resolve();
                    }, 20),
                    i.promise
                  );
                },
                speedSliderTouchendHandler: function (e) {
                  var t = this;
                  if (e.detail || (e.changedTouches && e.changedTouches[0])) {
                    var i =
                      (e.detail && e.detail.x) ||
                      (e.changedTouches && e.changedTouches[0].pageX);
                    this.speedSlider_getLevelLeftOffsets()
                      .then(function (e) {
                        return t.speedSlider_getSliderIndex(e, i);
                      })
                      .then(function (e) {
                        var i = e.levelLeftCenterXs,
                          a = e.index;
                        t.speedSlider_SetIndexAndPos(i, a);
                      });
                  }
                },
                speedSliderSetLevel: function (e) {
                  var t = this;
                  return this.speedSlider_getLevelLeftOffsets().then(function (
                    i
                  ) {
                    return t.speedSlider_SetIndexAndPos(i, e);
                  });
                },
                speedSlider_getLevelLeftOffsets: function () {
                  var e = ne.Z.getDeferred(),
                    t = this;
                  if (
                    this.speedSilder_levelRects &&
                    this.speedSilder_levelRects.length
                  )
                    e.resolve(this.speedSilder_levelRects);
                  else {
                    y()
                      .createSelectorQuery()
                      .selectAll(".speed-type .item")
                      .boundingClientRect()
                      .exec(function (i) {
                        var a,
                          n = [],
                          s = 0;
                        null == i ||
                          null === (a = i[0]) ||
                          void 0 === a ||
                          a.forEach(function (e, t) {
                            var i,
                              a = e.left,
                              r = e.width;
                            0 === t
                              ? ((s = a), (i = a))
                              : (i = a + (r - 35) / 2),
                              n.push({ left: a - s, center: i - s });
                          }),
                          (t.speedSilder_levelRects = n),
                          e.resolve(n);
                      });
                  }
                  return e.promise;
                },
                speedSlider_getSliderIndex: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    i = ne.Z.getDeferred();
                  if (e.length) {
                    var a = 0;
                    if (t < e[0].left);
                    else if (t > e[e.length - 1].left) a = e.length - 1;
                    else
                      for (var n = 1; n < e.length; n++)
                        if (t < e[n].left) {
                          a = n - 1;
                          break;
                        }
                    return (
                      i.resolve({ levelLeftCenterXs: e, index: a }), i.promise
                    );
                  }
                  i.reject();
                },
                getSpeedLineStyle: function (e) {
                  return "left: ".concat(e, "px;");
                },
                speedSlider_SetIndexAndPos: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    i = e[t];
                  this.setData({
                    "speedSlider.speedLineStyle": i
                      ? this.getSpeedLineStyle(i.center)
                      : "",
                  }),
                    this.speedSlider_SetIndex(t);
                },
                speedSlider_SetIndex: function (e) {
                  var t = this.data.speedSlider.items[e],
                    i = this.data.speedSlider.index,
                    a = {
                      "speedSlider.index": e,
                      "speedSlider.speedPkgNums": t.speedPkgNums,
                      "speedSlider.selectedItem": t,
                    };
                  this.setData(a),
                    e != i &&
                      C._.isFunction(this[this.data.speedSlider.onChangeFn]) &&
                      this[this.data.speedSlider.onChangeFn]();
                },
                speedSliderTouchmoveHandler: ne.Z.throttle(function (e) {
                  var t = this;
                  if (e.detail || (e.changedTouches && e.changedTouches[0])) {
                    var i =
                      (e.detail && e.detail.x) ||
                      (e.changedTouches && e.changedTouches[0].pageX);
                    this.setData({
                      "speedSlider.speedLineStyle": this.getSpeedLineStyle(
                        i - 30
                      ),
                    }),
                      this.speedSlider_getLevelLeftOffsets()
                        .then(function (e) {
                          return t.speedSlider_getSliderIndex(e, i);
                        })
                        .then(function (e) {
                          e.levelLeftCenterXs;
                          var i = e.index;
                          t.speedSlider_SetIndex(i);
                        });
                  }
                }, 28),
                speedSliderDraw: function () {
                  this.speedSliderSetLevel(this.data.speedSlider.index);
                },
              },
            };
          function re(e, t) {
            var i,
              a = e.defaultSpeedpackCount,
              n = e.currentPackageNum,
              s = e.speedFactor,
              r = e.goldVipRight,
              o = e.isUseGoldGrabToken,
              c = e.basicSuccessRate,
              l = e.acceptNoseat,
              d = e.selectedCrossStations,
              u = e.monitor,
              p = e.acceptNearTrain,
              h = e.nearTrainStartTime,
              m = e.nearTrainEndTime,
              b = 4 == r.vipGrade;
            e.membershipVersion && "A" == e.membershipVersion
              ? (i = r.speedFactor)
              : r.vipInfo &&
                r.vipInfo.speedFactor &&
                (i = r.vipInfo.speedFactor);
            var g,
              f,
              y,
              w = (function (e, t, i, a, n, s, r, o) {
                var c = o,
                  l = (50 * a - t * a) / 100,
                  d =
                    (Math.pow(1 - Math.pow(1 - r, c[0]), c[1]) - r) /
                    (1 / (Math.pow(c[2], c[3] * l) - 1) + 1);
                return s
                  ? ((l = (50 * i - t * i) / 100),
                    {
                      currentY1:
                        (Math.pow(1 - Math.pow(1 - r, c[0]), c[1]) - r) /
                        (1 / (Math.pow(c[2], c[3] * l) - 1) + 1),
                      vipY1: d,
                    })
                  : e > t
                  ? ((l = (e * i - t * i) / 100),
                    n && (l *= 0.8),
                    {
                      currentY1:
                        (Math.pow(1 - Math.pow(1 - r, c[0]), c[1]) - r) /
                        (1 / (Math.pow(c[2], c[3] * l) - 1) + 1),
                      vipY1: d,
                    })
                  : e < t
                  ? ((l = (t * i - e * i) / 50),
                    {
                      currentY1:
                        (Math.pow(1 - Math.pow(r, c[0]), c[1]) - 1) /
                        (1 / (Math.pow(c[2], c[3] * l) - 1) + 1),
                      vipY1: d,
                    })
                  : { currentY1: 0, vipY1: d };
              })(n, a, s, i, b, o, c, [0.83, 0.3, 3.3, 2.19]),
              S = w.vipY1,
              v = w.currentY1;
            if (
              ((g = l
                ? 0.06 * (Math.pow(1 - Math.pow(1 - c, 0.83), 0.3) - c)
                : 0),
              d && d.length > 0)
            ) {
              var T = (function (e, t) {
                for (var i = 0, a = 0; a < e.length; a++)
                  if (e[a].extraAmountInfos)
                    for (var n = 0; n < e[a].extraAmountInfos.length; n++)
                      -1 != t.indexOf(e[a].extraAmountInfos[n].seatType) &&
                        (i += e[a].extraAmountInfos[n].successRate);
                return i;
              })(d, u.seatNames);
              f =
                ((Math.pow(1 - Math.pow(1 - c, 0.83), 0.3) - c) /
                  (1 / Math.pow(T, 0.72) + 1)) *
                0.5;
            } else f = 0;
            if (p) {
              var N = 1 - (24 - (m - h)) / 24;
              y =
                (Math.pow(1 - Math.pow(1 - c, 0.83), 0.3) - c) *
                Math.sqrt(2 * N - N * N) *
                0.2;
            } else y = 0;
            t(null, {
              currentSuccessRate: c + v + g + f + y,
              buyVipSuccessRate: c + S + g + f + y,
            });
          }
          var oe = function (e) {
              var t = e.visible,
                i = e.vipRightPriceMerge,
                a = e.buyMemberSucRate,
                n = e.isInformalVip,
                s = e.onClose,
                r = e.onConfirm;
              if (!i) return null;
              var o = i.title,
                c = i.subTitle,
                l = i.trainRight,
                d = i.otherRight,
                u = i.salePrice,
                p = i.originPrice,
                h = i.buttonText,
                m = i.priceDesc;
              return (0, T.tZ)(b.Block, {
                children: (0, T.tZ)(g.ZtDrawer, {
                  show: t,
                  onWrapClose: s,
                  onClose: s,
                  children: (0, T.BX)(b.View, {
                    className: "member-ship-pop",
                    children: [
                      (0, T.BX)(b.View, {
                        className: "pop-vipbuy-hd",
                        children: [
                          (0, T.tZ)(b.View, { className: "tit", children: o }),
                          (0, T.tZ)(g.ZtRichText, {
                            className: "txt",
                            nodes: c,
                          }),
                        ],
                      }),
                      (0, T.BX)(b.View, {
                        className: "pop-vipbuy-bd",
                        children: [
                          (0, T.BX)(b.View, {
                            className: "tit",
                            children: [
                              "火车权益",
                              (0, T.tZ)(b.Text, { children: l.valueDesc }),
                            ],
                          }),
                          (0, T.BX)(b.View, {
                            className: "pop-equity-train ".concat(
                              n ? "informalVip" : ""
                            ),
                            children: [
                              (0, T.BX)(b.View, {
                                className: "item vip",
                                children: [
                                  (0, T.tZ)(b.View, { className: "img-bg" }),
                                  (0, T.tZ)(b.View, {
                                    className: "hd",
                                    children: l.productList[0].name,
                                  }),
                                  (0, T.tZ)(b.View, {
                                    className: "strong",
                                    children: l.productList[0].count,
                                  }),
                                  (0, T.tZ)(b.View, {
                                    className: "txt",
                                    children: l.productList[0].value,
                                  }),
                                ],
                              }),
                              (0, T.BX)(b.View, {
                                className: "item first",
                                children: [
                                  (0, T.tZ)(b.View, { className: "img-bg" }),
                                  (0, T.tZ)(b.View, {
                                    className: "hd",
                                    children: l.productList[1].name,
                                  }),
                                  (0, T.tZ)(b.View, {
                                    className: "strong",
                                    children: l.productList[1].count,
                                  }),
                                  (0, T.tZ)(b.View, {
                                    className: "txt",
                                    children: l.productList[1].value,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, T.BX)(b.View, {
                            className: "tit",
                            children: [
                              "更多专享权益",
                              (0, T.tZ)(b.Text, { children: d.valueDesc }),
                            ],
                          }),
                          (0, T.tZ)(b.View, {
                            className: "pop-equity-more",
                            children: (0, T.tZ)(b.View, {
                              className: "helper-container",
                              children: d.couponRights.map(function (e) {
                                return (0,
                                T.tZ)(b.Block, { children: (0, T.BX)(b.View, { className: "item", children: [(0, T.tZ)(b.Image, { className: "icon", src: e.icon }), (0, T.BX)(b.View, { className: "cont", children: [(0, T.tZ)(b.View, { className: "strong", children: e.title }), (0, T.tZ)(b.View, { className: "txt", children: e.subTitle })] })] }) }, "title");
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, T.tZ)(b.View, {
                        className: "pop-vipbuy-botm",
                        children: (0, T.BX)(b.View, {
                          className: "pop-vipbuy-botm-bd",
                          children: [
                            (0, T.BX)(b.View, {
                              className: "cont",
                              children: [
                                (0, T.BX)(b.View, {
                                  className: "tit",
                                  children: [
                                    (0, T.tZ)(b.Text, {
                                      className: "strong",
                                      children: u,
                                    }),
                                    (0, T.tZ)(b.Text, {
                                      className: "b",
                                      children: "/年",
                                    }),
                                    !n &&
                                      (0, T.tZ)(b.Text, {
                                        className: "s",
                                        children: "￥" + p + "/年",
                                      }),
                                  ],
                                }),
                                (0, T.tZ)(b.View, {
                                  className: "txt",
                                  children: n
                                    ? m
                                    : "开通后抢票成功率可达" +
                                      F.ZP.getSuccessRateText(a),
                                }),
                              ],
                            }),
                            (0, T.tZ)(b.Button, {
                              className: "btn-submit",
                              id: "AHAQ",
                              onClick: r,
                              "data-ubt-key": "wx_grabrate_chooseBuyMember",
                              children: h,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              });
            },
            ce = i(25958),
            le = (function (e) {
              (0, r.Z)(i, e);
              var t = (0, o.Z)(i);
              function i() {
                return (0, n.Z)(this, i), t.apply(this, arguments);
              }
              return (
                (0, s.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props.data || {},
                        t = e.showType,
                        i = e.wechatPayScoreInfo;
                      return i
                        ? (0, T.tZ)(ce.Z, {
                            show: "update-pay-way" == t,
                            hiddenCloseIcon: !0,
                            propStyle: "background: transparent;",
                            onClose: function () {},
                            ubtTrace: function () {},
                            children: (0, T.BX)(b.View, {
                              className: "train-pay-score-upper-version-dialog",
                              children: [
                                (0, T.tZ)(b.View, { className: "top-img" }),
                                (0, T.tZ)(b.View, {
                                  className: "title",
                                  children: i.title,
                                }),
                                (0, T.tZ)(b.View, {
                                  className: "sub-title",
                                  children: i.subtitle,
                                }),
                                (0, T.BX)(b.View, {
                                  className: "btn-content",
                                  id: "AHAR",
                                  onClick: this.props.upperPayScore,
                                  children: [
                                    (0, T.tZ)(b.View, {
                                      className: "btn-name",
                                      children: i.buttonName,
                                    }),
                                    (0, T.tZ)(b.View, {
                                      className: "btn-desc",
                                      children: i.desc,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          })
                        : (0, T.tZ)(b.View, {});
                    },
                  },
                ]),
                i
              );
            })(m.default.Component),
            de = function () {
              var e = v.default.isTieyou
                  ? "rgba(252, 110, 81, 0)"
                  : "rgba(25, 140, 255, 0)",
                t = v.default.isTieyou
                  ? "rgba(252, 110, 81, 1)"
                  : "rgba(25, 140, 255, 1)";
              return (0, T.BX)(b.View, {
                className: "train-module-title",
                style: {
                  background: "linear-gradient(to bottom, ".concat(
                    v.default.isTieyou ? "#FFEBE7" : "#E8F3FF",
                    ", #fff)"
                  ),
                },
                children: [
                  (0, T.tZ)(b.View, {
                    className: "line",
                    style: {
                      background: "linear-gradient(to right, "
                        .concat(e, ",  ")
                        .concat(t, ")"),
                    },
                  }),
                  (0, T.tZ)(b.View, {
                    className: "text color-primary",
                    children: "选择以下方案 成功率更高",
                  }),
                  (0, T.tZ)(b.View, {
                    className: "line",
                    style: {
                      background: "linear-gradient(to left, "
                        .concat(e, ",  ")
                        .concat(t, ")"),
                    },
                  }),
                ],
              });
            },
            ue = m.default.memo(function (e) {
              var t = e.propStyle,
                i = e.data,
                a = e.checked,
                n = e.onChange,
                s = void 0 === n ? function () {} : n,
                r = i || {},
                o = r.headIcon,
                c = r.title,
                l = r.subTitle;
              return (0,
              T.tZ)(b.Block, { children: !!c && (0, T.BX)(b.View, { className: "switch-row", style: t, children: [(0, T.tZ)(b.Image, { src: o, className: "icon-head" }), (0, T.BX)(b.View, { className: "title-box", children: [(0, T.tZ)(b.View, { className: "title", children: c }), (0, T.tZ)(b.View, { className: "sub-title", children: l })] }), (0, T.tZ)(N, { onChange: s, checked: a })] }) });
            }),
            pe = m.default.memo(function (e) {
              var t = e.visible,
                i = void 0 !== t && t,
                a = e.greenChannelInfo,
                n = void 0 === a ? {} : a,
                s = e.drawerStatus,
                r = e.isXbookProductType,
                o = e.checked,
                c = e.onChecked,
                l = void 0 === c ? function () {} : c,
                d = e.onClose,
                u = void 0 === d ? function () {} : d,
                p = e.onProductOperation,
                h = void 0 === p ? function () {} : p,
                f = e.ubtTrace,
                y = void 0 === f ? function () {} : f;
              (0, m.useEffect)(
                function () {
                  i &&
                    y("s_trn_z_10650005126", {
                      exposureType: "actionbar",
                      bizKey: "z_grab_success_axq_lanjie_actionbar_show",
                      from: "greenChannelGrab" === r ? 1 : 0,
                      xprodStatus: o ? 1 : 0,
                    });
                },
                [i]
              );
              var w = (n || {}).greenChannelProduct,
                S = void 0 === w ? {} : w;
              if (!n) return (0, T.tZ)(T.HY, {});
              var N = "",
                P = "";
              3 === s
                ? (N = "确认放弃")
                : 4 === s
                ? (N = "否")
                : 5 === s && (N = "放弃选择"),
                3 === s
                  ? (P = "暂不取消")
                  : 4 === s
                  ? (P = "是")
                  : 5 === s && (P = "我知道了");
              return (0, T.tZ)(g.ZtDrawer, {
                drawerStyle: { background: "#f5f5f5", borderRadius: "40rpx" },
                className: "green-channel-drawer",
                show: i,
                isShowClose: !1,
                onWrapClose: function () {
                  u();
                },
                children: (0, T.BX)(b.View, {
                  className: "container",
                  children: [
                    (0, T.tZ)(b.Image, {
                      className: "bg",
                      src: "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/cgly/img_axqbj@3x.webp",
                    }),
                    (0, T.BX)(b.View, {
                      className: "hd",
                      children: [
                        (0, T.tZ)(b.View, {
                          className: "tit",
                          children: S.newTitle,
                        }),
                        (0, T.tZ)(b.Image, {
                          className: "card-icon-closed",
                          src: "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/cgly/btn_gbtc@3x.webp",
                          webp: !0,
                          id: "AHAr",
                          onClick: function () {
                            u(), 4 === s && h(!1);
                          },
                        }),
                      ],
                    }),
                    (0, T.BX)(b.View, {
                      className: "bd",
                      children: [
                        (0, T.BX)(b.View, {
                          className: "content",
                          children: [
                            (0, T.BX)(b.View, {
                              className: "tit-box",
                              children: [
                                (0, T.tZ)(b.View, { className: "line" }),
                                (0, T.tZ)(b.View, {
                                  className: "tit",
                                  children: "享以下保障服务",
                                }),
                                (0, T.tZ)(b.View, {
                                  className: "tag",
                                  children: S.saveMoneyTag,
                                }),
                                (0, T.tZ)(b.View, {
                                  className: "price",
                                  children: "¥".concat(S.salePrice, "/人"),
                                }),
                              ],
                            }),
                            (0, T.BX)(b.View, {
                              className: "detail",
                              children: [
                                (0, T.BX)(b.View, {
                                  className: "card-top",
                                  children: [
                                    (0, T.BX)(b.View, {
                                      className: "card-tit-box",
                                      children: [
                                        (0, T.tZ)(g.ZtRichText, {
                                          className: "card-tit",
                                          nodes:
                                            null == S ? void 0 : S.productTitle,
                                        }),
                                        (0, T.tZ)(b.View, {
                                          className: "card-sub-tit",
                                          children:
                                            null == S ? void 0 : S.productDesc,
                                        }),
                                      ],
                                    }),
                                    (0, T.tZ)(b.Image, {
                                      className: "img-cash",
                                      src: "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/cgly/icon_xj@3x.webp",
                                      webp: !0,
                                    }),
                                  ],
                                }),
                                (0, T.BX)(b.View, {
                                  style: {
                                    display: "flex",
                                    marginTop: "16rpx",
                                    justifyContent: "space-between",
                                  },
                                  children: [
                                    (0, T.BX)(b.View, {
                                      className: "card-middle",
                                      children: [
                                        (0, T.BX)(b.View, {
                                          className: "card-tit-box",
                                          children: [
                                            (0, T.tZ)(g.ZtRichText, {
                                              nodes:
                                                S.greenChannelProductDescList[0]
                                                  .title,
                                              className: "tit",
                                            }),
                                            (0, T.tZ)(b.View, {
                                              className: "card-sub-tit",
                                              children:
                                                S.greenChannelProductDescList[0]
                                                  .subTitle,
                                            }),
                                          ],
                                        }),
                                        (0, T.tZ)(b.Image, {
                                          className: "img-cash",
                                          src: "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/cgly/icon_gsqp@3x.webp",
                                          webp: !0,
                                        }),
                                      ],
                                    }),
                                    (0, T.BX)(b.View, {
                                      className: "card-middle",
                                      children: [
                                        (0, T.BX)(b.View, {
                                          className: "card-tit-box",
                                          children: [
                                            (0, T.tZ)(g.ZtRichText, {
                                              nodes:
                                                S.greenChannelProductDescList[1]
                                                  .title,
                                              className: "tit",
                                            }),
                                            (0, T.tZ)(b.View, {
                                              className: "card-sub-tit",
                                              children:
                                                S.greenChannelProductDescList[1]
                                                  .subTitle,
                                            }),
                                          ],
                                        }),
                                        (0, T.tZ)(b.Image, {
                                          className: "img-cash",
                                          src: "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/cgly/icon_jdq@3x.webp",
                                          webp: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, T.BX)(b.View, {
                              className: "tips",
                              children: [
                                (0, T.tZ)(b.View, {
                                  className: "txt",
                                  children: "· " + S.newDesc,
                                }),
                                (0, T.BX)(b.View, {
                                  className: "txt",
                                  id: "AHAs",
                                  onClick: function () {
                                    var e =
                                      "https://pages.c-ctrip.com/ztrip/document/zx_axqpfw.html";
                                    v.default.isTieyou &&
                                      (e =
                                        "https://pages.c-ctrip.com/ztrip/document/ty_axqpfw.html"),
                                      A.Z.twebview({ data: { url: e } });
                                  },
                                  children: [
                                    (0, T.tZ)(b.Text, {
                                      children: "· 点击阅读",
                                    }),
                                    (0, T.tZ)(b.Text, {
                                      style: {
                                        color: "#222222",
                                        fontWeight: "400",
                                      },
                                      children: "《安心保障服务说明》",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, T.BX)(b.View, {
                          className: "btn-box",
                          children: [
                            [1, 2].includes(s) &&
                              (0, T.tZ)(T.HY, {
                                children: (0, T.tZ)(b.Button, {
                                  className: "btn-single",
                                  id: "AHAt",
                                  onClick: function () {
                                    1 === s ? u() : 2 === s && (u(), l(!0));
                                  },
                                  children: 1 === s ? "我知道了" : "确认选择",
                                }),
                              }),
                            [3, 4, 5].includes(s) &&
                              (0, T.BX)(T.HY, {
                                children: [
                                  (0, T.tZ)(b.Button, {
                                    className: "btn-double left",
                                    id: "AHAu",
                                    onClick: function () {
                                      3 === s
                                        ? (u(), l(!1))
                                        : 4 === s
                                        ? (u(), h(!1))
                                        : 5 === s && (u(), l(!1)),
                                        5 === s &&
                                          y("c_trn_z_10650005126", {
                                            bizKey:
                                              "z_grab_success_axq_lanjie_fqbz_click",
                                          });
                                    },
                                    children: N,
                                  }),
                                  (0, T.tZ)(b.Button, {
                                    className: "btn-double right",
                                    id: "AHAv",
                                    onClick: function () {
                                      3 === s
                                        ? u()
                                        : 4 === s
                                        ? (u(), h(!0))
                                        : 5 === s && u(),
                                        5 === s &&
                                          y("c_trn_z_10650005126", {
                                            bizKey:
                                              "z_grab_success_axq_lanjie_jxbz_click",
                                          });
                                    },
                                    children: P,
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
            }),
            he = m.default.memo(function (e) {
              var t = e.visible,
                i = void 0 !== t && t,
                a = e.content,
                n = e.onClose,
                s = void 0 === n ? function () {} : n,
                r = e.onProductOperation,
                o = void 0 === r ? function () {} : r;
              if (!a) return (0, T.tZ)(T.HY, {});
              var c = a.title,
                l = a.subTitle,
                d = a.type,
                u = a.choiceBlocks,
                p = void 0 === u ? [] : u,
                h = p[0],
                m = p[1];
              return (0, T.tZ)(g.ZtDrawer, {
                drawerStyle: { background: "#f5f5f5", borderRadius: "40rpx" },
                className: "special-person-grab-intercept-drawer",
                show: i,
                onWrapClose: s,
                onClose: s,
                children: (0, T.BX)(b.View, {
                  className: "container",
                  children: [
                    (0, T.BX)(b.View, {
                      className: "hd",
                      children: [
                        (0, T.tZ)(g.ZtRichText, { className: "tit", nodes: c }),
                        (0, T.tZ)(g.ZtRichText, {
                          className: "sub-tit",
                          nodes: l,
                        }),
                      ],
                    }),
                    (0, T.BX)(b.View, {
                      className: "bd",
                      children: [
                        (0, T.BX)(b.View, {
                          className: "content",
                          children: [
                            (0, T.tZ)(b.Image, {
                              className: "bg",
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/08/img_24h%20bg.png",
                            }),
                            (0, T.BX)(b.View, {
                              className: "desc-box",
                              children: [
                                h &&
                                  (0, T.BX)(b.View, {
                                    className: "item",
                                    children: [
                                      (0, T.tZ)(b.Image, {
                                        className: "icon-head",
                                        src: h.icon,
                                      }),
                                      (0, T.tZ)(b.View, {
                                        className: "tit",
                                        children: h.title,
                                      }),
                                      (0, T.tZ)(b.View, {
                                        className: "sub-tit",
                                        children: h.subTitle,
                                      }),
                                      (0, T.tZ)(b.View, {
                                        className: "deatil",
                                        children: h.tips.map(function (e) {
                                          return (0,
                                          T.BX)(b.View, { className: "desc", nodes: e, children: [(0, T.tZ)(b.Image, { className: "x", src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_cha.webp", webp: !0 }), (0, T.tZ)(g.ZtRichText, { nodes: e })] }, e);
                                        }),
                                      }),
                                    ],
                                  }),
                                m &&
                                  (0, T.BX)(b.View, {
                                    className: "item",
                                    children: [
                                      (0, T.tZ)(b.Image, {
                                        className: "icon-head",
                                        src: m.icon,
                                      }),
                                      (0, T.tZ)(b.View, {
                                        className: "tit",
                                        children: m.title,
                                      }),
                                      (0, T.tZ)(b.View, {
                                        className: "sub-tit",
                                        children: m.subTitle,
                                      }),
                                      (0, T.tZ)(b.View, {
                                        className: "deatil",
                                        children: m.tips.map(function (e) {
                                          return (0,
                                          T.tZ)(b.View, { className: "desc", nodes: e, children: (0, T.tZ)(g.ZtRichText, { nodes: e }) }, e);
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, T.BX)(b.View, {
                          className: "btn-box",
                          children: [
                            (0, T.tZ)(b.Button, {
                              className: "btn-double left",
                              id: "AHAb",
                              onClick: function () {
                                o(!1);
                              },
                              children: "普通抢票",
                            }),
                            (0, T.tZ)(b.Button, {
                              className: "btn-double right",
                              id: "AHAc",
                              onClick: function () {
                                o(!0, d);
                              },
                              children: "开启专人抢票",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            me = m.default.memo(function (e) {
              var t = e.visible,
                i = void 0 !== t && t,
                a = e.content,
                n = e.unionVipCode,
                s = void 0 === n ? "" : n,
                r = e.onClose,
                o = void 0 === r ? function () {} : r,
                l = e.onProductOperation,
                d = void 0 === l ? function () {} : l,
                u = (0, m.useState)(0),
                p = (0, c.Z)(u, 2),
                h = p[0],
                f = p[1];
              if (
                ((0, m.useEffect)(
                  function () {
                    var e,
                      t,
                      n,
                      r = 0;
                    i &&
                      ((null == a ||
                      null === (e = a.interceptToastEntityInfo) ||
                      void 0 === e ||
                      null === (t = e.sendVipInfo) ||
                      void 0 === t ||
                      null === (n = t.rightList) ||
                      void 0 === n
                        ? void 0
                        : n.length) > 0 &&
                        s &&
                        (r =
                          a.interceptToastEntityInfo.sendVipInfo.rightList.findIndex(
                            function (e) {
                              return e.rightCode === s;
                            }
                          )),
                      r < 0 && (r = 0),
                      f(r));
                  },
                  [i, s, a]
                ),
                !a)
              )
                return (0, T.tZ)(T.HY, {});
              var y = a.title,
                w = a.subTitle,
                S = a.iconUrl,
                v = a.interceptToastEntityInfo,
                N = void 0 === v ? {} : v;
              return (0, T.tZ)(g.ZtDrawer, {
                drawerStyle: { background: "#f5f5f5", borderRadius: "40rpx" },
                className: "season-member-intercept-drawer",
                show: i,
                onWrapClose: o,
                onClose: o,
                children: (0, T.BX)(b.View, {
                  className: "container",
                  children: [
                    (0, T.tZ)(b.View, { className: "bg" }),
                    (0, T.tZ)(b.Image, { className: "icon-bg", src: S }),
                    (0, T.BX)(b.View, {
                      className: "hd",
                      children: [
                        (0, T.tZ)(b.View, { className: "tit", children: y }),
                        (0, T.tZ)(g.ZtRichText, {
                          className: "sub-tit",
                          nodes: w,
                        }),
                      ],
                    }),
                    (0, T.BX)(b.View, {
                      className: "bd",
                      children: [
                        (0, T.BX)(b.View, {
                          className: "content",
                          children: [
                            (0, T.BX)(b.View, {
                              className: "tit-box",
                              children: [
                                (0, T.tZ)(b.View, { className: "line" }),
                                (0, T.tZ)(b.View, {
                                  className: "tit",
                                  children: "享以下保障服务",
                                }),
                                (0, T.tZ)(b.View, {
                                  className: "price",
                                  children: "".concat(N.priceDesc),
                                }),
                              ],
                            }),
                            (0, T.tZ)(b.View, {
                              className: "detail",
                              children: (0, T.BX)(b.View, {
                                className: "detail-box",
                                children: [
                                  (0, T.BX)(b.View, {
                                    className: "card-middle",
                                    children: [
                                      (0, T.BX)(b.View, {
                                        className: "card-tit-box",
                                        children: [
                                          (0, T.tZ)(g.ZtRichText, {
                                            nodes: N.rightList[0].title,
                                            className: "tit",
                                            style: "white-space: pre;",
                                          }),
                                          (0, T.tZ)(b.View, {
                                            className: "card-sub-tit",
                                            children: N.rightList[0].subTitle,
                                          }),
                                        ],
                                      }),
                                      (0, T.tZ)(b.Image, {
                                        className: "img-cash",
                                        src: N.rightList[0].iconUrl,
                                        webp: !0,
                                      }),
                                    ],
                                  }),
                                  (0, T.BX)(b.View, {
                                    className: "card-middle",
                                    children: [
                                      (0, T.BX)(b.View, {
                                        className: "card-tit-box",
                                        children: [
                                          (0, T.tZ)(g.ZtRichText, {
                                            nodes: N.rightList[1].title,
                                            className: "tit",
                                            style: "white-space: pre;",
                                          }),
                                          (0, T.tZ)(b.View, {
                                            className: "card-sub-tit",
                                            children: N.rightList[1].subTitle,
                                          }),
                                        ],
                                      }),
                                      (0, T.tZ)(b.Image, {
                                        className: "img-cash",
                                        src: N.rightList[1].iconUrl,
                                        webp: !0,
                                      }),
                                    ],
                                  }),
                                  N &&
                                    N.sendVipInfo &&
                                    !N.sendVipInfo.chose &&
                                    (0, T.BX)(b.View, {
                                      className: "union-vip-rights-box",
                                      children: [
                                        (0, T.tZ)(b.View, {
                                          className: "tit-box",
                                          children: (0, T.tZ)(g.ZtRichText, {
                                            className: "tit",
                                            nodes: N.sendVipInfo.title,
                                          }),
                                        }),
                                        (0, T.tZ)(b.View, {
                                          className: "detail-box",
                                          children: N.sendVipInfo.rightList.map(
                                            function (e) {
                                              return (0, T.BX)(
                                                b.View,
                                                {
                                                  className: "platform-vip-box",
                                                  children: [
                                                    (0, T.tZ)(b.Image, {
                                                      className: "icon",
                                                      src: e.iconUrl,
                                                    }),
                                                    (0, T.tZ)(b.View, {
                                                      className: "tit",
                                                      children: e.title,
                                                    }),
                                                    (0, T.tZ)(b.View, {
                                                      className: "desc",
                                                      children: e.subTitle,
                                                    }),
                                                  ],
                                                },
                                                e.iconUrl
                                              );
                                            }
                                          ),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            }),
                            N &&
                              N.sendVipInfo &&
                              !!N.sendVipInfo.chose &&
                              (0, T.BX)(b.View, {
                                className: "chosen-union-vip-rights-box",
                                children: [
                                  (0, T.BX)(b.View, {
                                    className: "tit-box",
                                    children: [
                                      (0, T.tZ)(b.View, { className: "line" }),
                                      (0, T.tZ)(g.ZtRichText, {
                                        className: "tit",
                                        nodes: N.sendVipInfo.title,
                                      }),
                                    ],
                                  }),
                                  (0, T.tZ)(b.View, {
                                    className: "detail-box",
                                    children: N.sendVipInfo.rightList.map(
                                      function (e, t) {
                                        return (0, T.BX)(
                                          b.View,
                                          {
                                            className:
                                              "platform-vip-checked-box ".concat(
                                                h === t ? "selected" : ""
                                              ),
                                            id: "AHAT",
                                            onClick: function () {
                                              return f(t);
                                            },
                                            children: [
                                              (0, T.tZ)(b.Image, {
                                                className: "icon",
                                                src: e.iconUrl,
                                              }),
                                              (0, T.tZ)(b.View, {
                                                className: "tit",
                                                children: e.title,
                                              }),
                                              (0, T.tZ)(b.View, {
                                                className: "desc",
                                                children: e.subTitle,
                                              }),
                                              (0, T.tZ)(b.View, {
                                                className: "iconfont2 ".concat(
                                                  h === t
                                                    ? "ifont2-checkboxed"
                                                    : "ifont2-checkbox",
                                                  " vip-checkbox"
                                                ),
                                              }),
                                            ],
                                          },
                                          e.iconUrl
                                        );
                                      }
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, T.BX)(b.View, {
                          className: "btn-box",
                          children: [
                            (0, T.tZ)(b.Button, {
                              className: "btn-double left",
                              id: "AHAU",
                              onClick: function () {
                                d(!1);
                              },
                              children: "否",
                            }),
                            (0, T.tZ)(b.Button, {
                              className: "btn-double right",
                              id: "AHAV",
                              onClick: function () {
                                var e,
                                  t,
                                  i = "";
                                null != N &&
                                  null !== (e = N.sendVipInfo) &&
                                  void 0 !== e &&
                                  null !== (t = e.rightList) &&
                                  void 0 !== t &&
                                  t[h] &&
                                  (i = N.sendVipInfo.rightList[h].rightCode),
                                  d(!0, i);
                              },
                              children: "是",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            be = (function (e) {
              (0, r.Z)(i, e);
              var t = (0, o.Z)(i);
              function i() {
                return (0, n.Z)(this, i), t.apply(this, arguments);
              }
              return (
                (0, s.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props.data || {},
                        t = e.items,
                        i = e.index,
                        a = e.speedLineStyle;
                      return (0, T.tZ)(T.HY, {
                        children: (0, T.BX)(b.View, {
                          className: "speed-plan",
                          onTouchEnd: this.props.speedSliderTouchendHandler,
                          onTouchMove: this.props.speedSliderTouchmoveHandler,
                          children: [
                            (0, T.tZ)(b.View, {
                              className: "speed-type speed-stage",
                              children: t.map(function (e, t) {
                                return (0,
                                T.tZ)(b.View, { className: "item " + (t === i ? "current" : ""), children: (0, T.BX)(b.View, { className: "speed-txt", children: ["VIP" === e.title && (0, T.tZ)(b.Text, { className: "ifont-crown iconfont" }), e.title] }) }, t);
                              }),
                            }),
                            (0, T.tZ)(b.View, {
                              className: "speed-line-new",
                              children: [0, 1, 2, 3, 4, 5, 6, 7].map(function (
                                e,
                                t
                              ) {
                                return (0, T.tZ)(
                                  m.default.Fragment,
                                  {
                                    children:
                                      t <= i &&
                                      (0, T.tZ)(b.View, {
                                        className: "item nth".concat(t),
                                      }),
                                  },
                                  t
                                );
                              }),
                            }),
                            (0, T.tZ)(b.View, {
                              className: "speed-line-stud",
                              children: (0, T.tZ)(b.Icon, {
                                className: "icon-stud2",
                                style: a,
                              }),
                            }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                i
              );
            })(m.default.Component),
            ge = i(81957),
            fe = m.default.memo(function (e) {
              var t = e.isTieyou,
                i = void 0 !== t && t,
                a = e.nonPackageSuccessRateTxt,
                n = void 0 === a ? "" : a,
                s = e.recommendPackageSuccessRateTxt,
                r = void 0 === s ? "" : s,
                o = e.showType,
                c = void 0 === o ? "" : o,
                l = e.defaultSpeedLevelTxt,
                d = void 0 === l ? "" : l,
                u = e.recommendSpeedLevelTxt,
                p = void 0 === u ? "" : u,
                h = e.recommendSpeedPkgNums,
                m = void 0 === h ? "" : h,
                g = e.price,
                f = void 0 === g ? "" : g,
                y = e.onClickGrab,
                w = void 0 === y ? function () {} : y,
                S = e.onClickPriceDetail,
                v = void 0 === S ? function () {} : S,
                N = (0, E.Gq)();
              return (0,
              T.BX)(b.View, { className: "grabrate-button-group-component", children: ["B" != N && "C" != N && "F" != N && "G" != N && (0, T.BX)(b.View, { className: "default-style", children: [(0, T.BX)(b.Button, { className: "btn-grab-free ".concat(i ? "ty" : "zx"), id: "AHAg", onClick: w, "data-type": "free", children: [(0, T.BX)(b.Text, { className: "title", children: [d, "抢票"] }), (0, T.BX)(b.Text, { className: "desc", children: ["成功率 ", n] })] }), (0, T.BX)(b.Button, { className: "btn-grab " + (i ? "ty" : "zx"), id: "AHAh", onClick: w, "data-type": "recommendSpeed", formType: "submit", children: [(0, T.BX)(b.Text, { className: "title", children: ["开始", p, "抢票"] }), (0, T.BX)(b.Text, { className: "desc", children: ["成功率 ", r, " ", m, "元/张"] })] })] }), "B" == N && (0, T.BX)(b.View, { className: "b-test", children: [(0, T.BX)(b.Button, { className: "btn free-grab-btn ".concat(i ? "ty" : "zx"), "data-type": "free", id: "AHAi", onClick: w, children: [(0, T.BX)(b.Text, { className: "title", children: [d, "抢票"] }), (0, T.BX)(b.Text, { className: "sub-title", children: ["成功率", n] })] }), (0, T.BX)(b.Button, { className: "btn grab-btn b-grab-btn ".concat(i ? "ty" : "zx"), "data-type": "recommendSpeed", id: "AHAj", onClick: w, children: [(0, T.BX)(b.Text, { className: "title", children: [p, "抢票·抢不到退"] }), (0, T.BX)(b.Text, { className: "sub-title", children: ["成功率", r, " ", m ? "¥".concat(m, "/张") : ""] })] })] }), "C" == N && (0, T.BX)(b.View, { className: "c-test", children: [(0, T.BX)(b.View, { className: "price-detail", children: [(0, T.BX)(b.View, { children: [(0, T.tZ)(b.Text, { className: "unit", children: "¥" }), (0, T.tZ)(b.Text, { className: "price", children: f })] }), (0, T.BX)(b.View, { className: "detail", id: "AHAk", onClick: v, children: [(0, T.tZ)(b.Text, { className: "desc", children: "明细" }), (0, T.tZ)(b.Text, { className: "".concat("price-detail" == c ? "revert-icon" : "", " ifont-arrdown2 iconfont") })] })] }), (0, T.BX)(b.View, { className: "btn-container", children: [(0, T.BX)(b.Button, { className: "btn free-grab-btn ".concat(i ? "ty" : "zx"), "data-type": "free", id: "AHAl", onClick: w, children: [d, "抢票"] }), (0, T.BX)(b.Button, { className: "btn grab-btn c-grab-btn ".concat(i ? "ty" : "zx"), "data-type": "recommendSpeed", id: "AHAm", onClick: w, children: [(0, T.BX)(b.Text, { className: "title", children: [p, "抢票"] }), (0, T.BX)(b.Text, { className: "sub-title", children: ["成功率", r, " ", m ? "¥".concat(m, "/张") : ""] })] })] })] }), "F" == N && (0, T.BX)(b.View, { className: "f-test", children: [(0, T.BX)(b.View, { className: "free-grab", id: "AHAn", onClick: w, "data-type": "free", children: [(0, T.BX)(b.Text, { className: "txt", children: [d, "抢票"] }), (0, T.tZ)(b.Text, { className: "ifont-arr iconfont" })] }), (0, T.BX)(b.Button, { className: "d-btn-grab " + (i ? "ty" : "zx"), id: "AHAo", onClick: w, "data-type": "recommendSpeed", formType: "submit", children: [(0, T.BX)(b.Text, { className: "title", children: ["开始", p, "抢票"] }), (0, T.BX)(b.Text, { className: "desc", children: ["成功率", r, " ¥", m, "元/张"] })] })] }), "G" == N && (0, T.BX)(b.View, { className: "g-test", children: [(0, T.BX)(b.View, { className: "free-grab", id: "AHAp", onClick: w, "data-type": "free", children: [(0, T.BX)(b.Text, { className: "txt", children: [d, "抢票"] }), (0, T.tZ)(b.Text, { className: "ifont-arr iconfont" })] }), (0, T.BX)(b.Button, { className: "g-btn-grab " + (i ? "ty" : "zx"), id: "AHAq", onClick: w, "data-type": "recommendSpeed", formType: "submit", children: [(0, T.BX)(b.View, { className: "title", children: ["开始", p, "抢票"] }), (0, T.BX)(b.View, { className: "desc", children: ["成功率", r, " ¥", m, "元/张"] })] })] })] });
            }),
            ye = m.default.memo(function (e) {
              var t = e.isChecked,
                i = void 0 !== t && t,
                a = e.versionFlag,
                n = void 0 !== a && a;
              return (0,
              T.tZ)(b.View, { className: "season-member-switch  ".concat(i ? "active" : "", " ").concat(n ? "v2" : ""), children: (0, T.tZ)(b.View, { className: "ball" }) });
            }),
            we = m.default.memo(function (e) {
              var t,
                i = e.content,
                a = e.isChecked,
                n = void 0 !== a && a,
                s = e.hideBuyButton,
                r = void 0 !== s && s,
                o = e.isGrabVipTicketChecked,
                c = void 0 !== o && o,
                l = e.goldGrabNumShown,
                d = e.speedSliderTitle,
                u = e.speedLevelNameList,
                p = void 0 === u ? [] : u,
                h = e.cardCode,
                g = e.onShowDetail,
                f = void 0 === g ? function () {} : g,
                y = e.onChecked,
                w = void 0 === y ? function () {} : y,
                S = e.onGrabVipTicketChecked,
                v = void 0 === S ? function () {} : S,
                N = e.onConfirm,
                P = void 0 === N ? function () {} : N,
                C = e.ubtTrace,
                I = void 0 === C ? function () {} : C;
              (0, m.useEffect)(function () {
                I(208753, {
                  exposureType: "normal",
                  bizKey: "z_success_grab_applet_vip_modeule_show",
                }),
                  I(215823, {
                    bizKey: "vipSaleModuleShow",
                    terminaltype: "Applets",
                    line: "GRAB",
                    cardCode: h,
                    scene: "grabSuccessRate",
                    selectedType: "F",
                  });
              }, []);
              var k = (i || {}).vipReleatedRightEntity;
              return k
                ? (0, T.BX)(b.View, {
                    id: "AHAW",
                    onClick: function () {
                      I(208755, {
                        bizKey: "z_success_grab_applet_vip_modeule_click",
                      });
                    },
                    children: [
                      !r &&
                        (0, T.BX)(b.View, {
                          className: "season-member-switcher",
                          id: "AHAX",
                          onClick: function () {
                            I(215824, {
                              bizKey: "vipSaleModuleShow",
                              terminaltype: "Applets",
                              line: "GRAB",
                              cardCode: h,
                              scene: "grabSuccessRate",
                              selectedType: n ? "T" : "F",
                              clickType: "detailExpand",
                            }),
                              f();
                          },
                          children: [
                            (0, T.BX)(b.View, {
                              className: "season-member-switcher-header",
                              children: [
                                (0, T.tZ)(b.View, {
                                  className: "title-box",
                                  children: (0, T.tZ)(b.Image, {
                                    src:
                                      null === (t = k.titleEntity) ||
                                      void 0 === t
                                        ? void 0
                                        : t.memberIcon,
                                    className: "img-title",
                                  }),
                                }),
                                (0, T.tZ)(b.Swiper, {
                                  className: "rights-box",
                                  autoplay: !0,
                                  vertical: "true",
                                  interval: "2000",
                                  circular: "true",
                                  children: k.secondPageOpenTitleList.map(
                                    function (e, t) {
                                      return (0, T.BX)(
                                        b.SwiperItem,
                                        {
                                          className: "right-box",
                                          children: [
                                            (0, T.tZ)(b.View, {
                                              className: "icon-box",
                                              children: e.iconUrl.map(function (
                                                e
                                              ) {
                                                return (0, T.tZ)(
                                                  b.Image,
                                                  {
                                                    className: "icon-right",
                                                    src: e,
                                                  },
                                                  e
                                                );
                                              }),
                                            }),
                                            (0, T.tZ)(b.View, {
                                              className: "desc",
                                              children: e.openDesc,
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                    }
                                  ),
                                }),
                              ],
                            }),
                            (0, T.BX)(b.View, {
                              className: "season-member-switcher-container",
                              children: [
                                (0, T.BX)(b.View, {
                                  className: "left-box",
                                  children: [
                                    (0, T.BX)(b.View, {
                                      className: "tit-box",
                                      children: [
                                        (0, T.tZ)(b.View, {
                                          className: "speed",
                                          children: n
                                            ? "VIP速度"
                                            : "VIP" ===
                                              (null == d
                                                ? void 0
                                                : d.toUpperCase())
                                            ? d + "速度"
                                            : d,
                                        }),
                                        (0, T.tZ)(b.View, {
                                          className: "current",
                                          children: "（当前速度）",
                                        }),
                                      ],
                                    }),
                                    (0, T.BX)(b.View, {
                                      className: "process-box",
                                      children: [
                                        (0, T.tZ)(b.View, {
                                          className: "grey-line",
                                        }),
                                        (0, T.tZ)(b.View, {
                                          className: "process-line ".concat(
                                            n
                                              ? "vip"
                                              : "l" +
                                                  p.findIndex(function (e) {
                                                    return (
                                                      (null == e
                                                        ? void 0
                                                        : e.toUpperCase()) ===
                                                      (n
                                                        ? "VIP"
                                                        : null == d
                                                        ? void 0
                                                        : d.toUpperCase())
                                                    );
                                                  })
                                          ),
                                          children: (0, T.BX)(b.View, {
                                            className: "circular-box",
                                            children: [
                                              (0, T.tZ)(b.View, {
                                                className: "circular one",
                                              }),
                                              (0, T.tZ)(b.View, {
                                                className: "circular two",
                                              }),
                                              (0, T.tZ)(b.View, {
                                                className: "circular three",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, T.tZ)(b.View, {
                                      className: "txt-speed",
                                      children: p.map(function (e) {
                                        return (0,
                                        T.BX)(b.View, { className: "".concat("VIP" === (null == e ? void 0 : e.toUpperCase()) ? "vip" : "", " ").concat((n ? "VIP" : null == d ? void 0 : d.toUpperCase()) === (null == e ? void 0 : e.toUpperCase()) ? "cur" : ""), children: ["VIP" === (null == e ? void 0 : e.toUpperCase()) && (0, T.tZ)(b.Image, { className: "icon-vip-sms", src: "".concat("VIP" === (n ? "VIP" : null == d ? void 0 : d.toUpperCase()) ? "https://images3.c-ctrip.com/ztrip/train_bin/22-06/icon_hy_logo@3x.png" : "https://images3.c-ctrip.com/ztrip/train_bin/22-06/icon_hy_logo2@3x.png") }), (0, T.tZ)(b.View, { children: e })] }, e);
                                      }),
                                    }),
                                    (0, T.BX)(b.View, {
                                      className: "tip-box",
                                      id: "AHAY",
                                      onClick: function (e) {
                                        e.stopPropagation(),
                                          I(208755, {
                                            bizKey:
                                              "z_success_grab_applet_vip_modeule_click",
                                          }),
                                          I(215824, {
                                            bizKey: "vipSaleModuleShow",
                                            terminaltype: "Applets",
                                            line: "GRAB",
                                            cardCode: h,
                                            scene: "grabSuccessRate",
                                            selectedType: "T",
                                            clickType: "getReserve",
                                          }),
                                          P();
                                      },
                                      children: [
                                        (0, T.tZ)(b.Image, {
                                          className: "bg",
                                          src: "https://images3.c-ctrip.com/ztrip/train_bin/22-06/img_qipao@3x.png",
                                        }),
                                        (0, T.tZ)(b.View, {
                                          className: "tip",
                                          children: "成功率高",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, T.BX)(b.View, {
                                  className: "right-box ".concat(
                                    k.discountTag ? "" : "v1"
                                  ),
                                  children: [
                                    (0, T.tZ)(ye, {
                                      isChecked: n,
                                      versionFlag: k.discountTag,
                                    }),
                                    (0, T.tZ)(b.View, {
                                      className: "price",
                                      children: k.priceDesc,
                                    }),
                                    (0, T.tZ)(b.View, {
                                      className: "hot-area",
                                      id: "AHAZ",
                                      onClick: function (e) {
                                        e.stopPropagation(),
                                          I(215824, {
                                            bizKey: "vipSaleModuleShow",
                                            terminaltype: "Applets",
                                            line: "GRAB",
                                            cardCode: h,
                                            scene: "grabSuccessRate",
                                            selectedType: n ? "F" : "T",
                                            clickType: "getReserve",
                                          }),
                                          I(208755, {
                                            bizKey:
                                              "z_success_grab_applet_vip_modeule_click",
                                          }),
                                          w();
                                      },
                                    }),
                                    k.discountTag &&
                                      (0, T.tZ)(b.View, {
                                        className: "discount-tag",
                                        children: k.discountTag,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      l > 0 &&
                        (0, T.BX)(b.View, {
                          className: "grab-vip-ticket",
                          children: [
                            (0, T.tZ)(b.Image, {
                              className: "icon-vip-sms",
                              src: "https://images3.c-ctrip.com/ztrip/train_bin/22-06/xcx/icon_xcx_hy@3x.png",
                            }),
                            (0, T.tZ)(b.View, {
                              className: "tit-gvt",
                              children: "VIP抢票券",
                            }),
                            (0, T.tZ)(b.View, {
                              className: "num",
                              children: "剩余" + l + "张",
                            }),
                            (0, T.tZ)(b.Image, {
                              className: "icon-checked",
                              id: "AHAa",
                              onClick: v,
                              src: c
                                ? "https://images3.c-ctrip.com/ztrip/train_bin/22-06/xcx/icon_yixuan@3x.png"
                                : "https://images3.c-ctrip.com/ztrip/train_bin/22-06/xcx/icon_weixuan@3x.png",
                            }),
                          ],
                        }),
                    ],
                  })
                : (0, T.tZ)(b.View, {});
            }),
            Se = i(35657),
            ve = i(83011),
            Te = m.default.memo(function (e) {
              var t = e.content,
                i = e.type,
                a = e.onTypeChange,
                n = e.ubtTrace,
                s = void 0 === n ? function () {} : n;
              if (
                ((0, m.useEffect)(
                  function () {
                    t &&
                      s("s_trn_z_10650005126", {
                        exposureType: "normal",
                        bizKey: "z_grab_success_24h_zrq_plan_no_x15_show",
                      });
                  },
                  [t]
                ),
                !t)
              )
                return (0, T.tZ)(b.View, {});
              var r = t || {},
                o = r.title,
                c = r.options,
                l = r.productDescList,
                d = r.hotTitle,
                u = !(
                  null == c ||
                  !c.find(function (e) {
                    return (
                      "grabbingTicketDay" === e.code ||
                      "cityGrabbingDay" === e.code
                    );
                  })
                );
              return (0, T.BX)(b.View, {
                className: "special-person-grab-selecter-box",
                style: u
                  ? "background: linear-gradient(-176.65deg, rgb(255, 237, 237) 5.07%, rgb(255, 255, 255) 21.77%, rgb(255, 255, 255) 77.32%);"
                  : "",
                children: [
                  u &&
                    (0, T.tZ)(b.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/ds@3x.png",
                      className: "bg-image",
                    }),
                  (0, T.BX)(b.View, {
                    className: "flex-align-items-center",
                    children: [
                      u
                        ? (0, T.BX)(T.HY, {
                            children: [
                              (0, T.BX)(b.View, {
                                className: "activity-icon-box",
                                children: [
                                  (0, T.tZ)(b.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_05/zrq@3x.png",
                                    className: "activity-icon",
                                  }),
                                  (0, T.tZ)(b.View, {
                                    className: "txt",
                                    children: d,
                                  }),
                                ],
                              }),
                              (0, T.tZ)(g.ZtRichText, {
                                className: "tit",
                                nodes: o,
                              }),
                            ],
                          })
                        : (0, T.tZ)(g.ZtRichText, {
                            className: "tit",
                            nodes: o,
                          }),
                      (0, T.tZ)(Q.Z, {
                        mode: "img",
                        iconUrl:
                          "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_16.png",
                        jumpUrl:
                          "https://market.suanya.com/document/static/".concat(
                            v.default.isTieyou ? "ty" : "zx",
                            u ? "_24hFriday.html" : "_24zrqpfw.html"
                          ),
                      }),
                    ],
                  }),
                  (0, T.tZ)(Se.Z, {
                    propStyle: { marginTop: "26rpx" },
                    content: c,
                    type: i,
                    v2: !!u,
                    onTypeChange: function (e) {
                      var t;
                      s("c_trn_z_10650005126", {
                        bizKey: "z_grab_success_24h_zrq_plan_no_x15_click",
                        price:
                          null == c ||
                          null ===
                            (t = c.find(function (e) {
                              return e.type === i;
                            })) ||
                          void 0 === t
                            ? void 0
                            : t.salePrice,
                      }),
                        a(e);
                    },
                  }),
                  (0, T.tZ)(ve.Z, {
                    content: l,
                    style: { marginTop: "16rpx" },
                    dotStyle: { color: "#cccccc", marginRight: "12rpx" },
                    txtStyle: { color: "#999" },
                  }),
                ],
              });
            }),
            Ne = m.default.memo(function (e) {
              var t = e.content,
                i = e.isXbookProductType,
                a = e.onClick,
                n = e.ubtTrace,
                s = {
                  memberGrab: 2,
                  singleSpecialPersonGrab: 0,
                  multiplySpecialPersonGrab: 1,
                  greenChannelGrab: 3,
                };
              return (
                (0, m.useEffect)(function () {
                  n("s_trn_z_10650005126", {
                    exposureType: "normal",
                    bizKey: "z_grab_success_grabtype_show",
                    grabType: s[i],
                  }),
                    1 === s[i] &&
                      n("s_trn_z_10650005126", {
                        exposureType: "normal",
                        bizKey: "z_grab_success_24h_zrq_button_x15_show",
                      });
                }, []),
                t
                  ? (0, T.BX)(b.View, {
                      className: "special-person-grab-selecter-banner",
                      id: "AHAd",
                      onClick: function () {
                        n("c_trn_z_10650005126", {
                          bizKey: "z_grab_success_grabtype_click",
                          grabType: s[i],
                        }),
                          1 === s[i] &&
                            n("c_trn_z_10650005126", {
                              bizKey: "z_grab_success_24h_zrq_button_x15_click",
                            }),
                          a();
                      },
                      children: [
                        (0, T.tZ)(b.View, {
                          className: "label",
                          children: "抢票服务",
                        }),
                        (0, T.tZ)(b.View, {
                          className: "content",
                          children: t,
                        }),
                        (0, T.tZ)(b.Text, { className: "ifont-arr iconfont" }),
                      ],
                    })
                  : (0, T.tZ)(b.View, {})
              );
            });
          var Pe = m.default.memo(function (e) {
            var t = e.visible,
              i = e.content,
              a = e.productType,
              n = e.onClose,
              s = void 0 === n ? function () {} : n,
              r = e.onConfirm,
              o = void 0 === r ? function () {} : r,
              l = e.ubtTrace,
              d = void 0 === l ? function () {} : l,
              u = i || {},
              p = u.title,
              h = u.options,
              f = (0, m.useState)(0),
              y = (0, c.Z)(f, 2),
              w = y[0],
              S = y[1];
            return (
              (0, m.useEffect)(
                function () {
                  S(a);
                },
                [a, t]
              ),
              i
                ? (0, T.BX)(g.ZtDrawer, {
                    show: t,
                    isDefineHead: !0,
                    onWrapClose: s,
                    drawerStyle: { borderRadius: "40rpx 40rpx 0 0" },
                    className: "special-person-grab-selecter-drawer",
                    children: [
                      (0, T.BX)(b.View, {
                        className: "header",
                        children: [
                          (0, T.BX)(b.View, {
                            className: "flex-center",
                            children: [
                              (0, T.tZ)(g.ZtRichText, {
                                className: "tit",
                                nodes: p,
                              }),
                              (0, T.tZ)(Q.Z, {
                                mode: "img",
                                iconUrl:
                                  "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_16.png",
                                jumpUrl:
                                  "https://market.suanya.com/document/static/".concat(
                                    v.default.isTieyou ? "ty" : "zx",
                                    "_24zrqpfw.html"
                                  ),
                              }),
                            ],
                          }),
                          (0, T.tZ)(b.Icon, {
                            className: "icon-cancel",
                            size: "48rpx",
                            type: "cancel",
                            color: "#cccccc",
                            id: "AHAe",
                            onClick: function () {
                              s();
                            },
                          }),
                        ],
                      }),
                      (0, T.tZ)(b.View, {
                        className: "container",
                        children: (0, T.tZ)(Se.Z, {
                          content: h,
                          type: w,
                          onTypeChange: function (e) {
                            S(e);
                          },
                        }),
                      }),
                      (0, T.tZ)(b.View, {
                        className: "btn-box",
                        children: (0, T.tZ)(b.Button, {
                          className: "btn",
                          id: "AHAf",
                          onClick: function () {
                            var e;
                            d("c_trn_z_10650005126", {
                              bizKey:
                                "z_grab_success_24h_zrq_button_x15_xgprice_click",
                              price:
                                null == h ||
                                null ===
                                  (e = h.find(function (e) {
                                    return e.type === w;
                                  })) ||
                                void 0 === e
                                  ? void 0
                                  : e.salePrice,
                            }),
                              s(),
                              o(w);
                          },
                          children: "确认选择",
                        }),
                      }),
                    ],
                  })
                : (0, T.tZ)(b.View, {})
            );
          });
          function Ce() {
            return (0, T.BX)(b.View, {
              className: "grab-checkbox-wrapper",
              children: [
                "请您在提交订单前仔细阅读",
                (0, T.tZ)(b.Text, {
                  className: "color-primary",
                  id: "AHAB",
                  onClick: function () {
                    var e = v.default.isTieyou;
                    A.Z.twebview({
                      data: {
                        url: e
                          ? "https://pages.ctrip.com/ztrip/document/policy.html"
                          : "https://pages.ctrip.com/ztrip/document/policyzx.html",
                      },
                    });
                  },
                  children: "《火车票信息服务协议》",
                }),
                "、",
                (0, T.tZ)(b.Text, {
                  className: "color-primary",
                  id: "AHAC",
                  onClick: function () {
                    var e = v.default.isTieyou,
                      t =
                        "https://market.suanya.com/document/static/train/".concat(
                          e ? "ty-" : "",
                          "protect.html"
                        );
                    A.Z.twebview({ data: { url: t } });
                  },
                  children: "《个人信息授权说明》",
                }),
                "和",
                (0, T.tZ)(b.Text, {
                  className: "color-primary",
                  id: "AHAD",
                  onClick: function () {
                    var e = v.default.isTieyou,
                      t = "https://m.".concat(
                        e ? "tieyou" : "suanya",
                        ".com/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=grab"
                      );
                    A.Z.twebview({ data: { url: t } });
                  },
                  children: "《抢票说明》",
                }),
              ],
            });
          }
          var Ie,
            ke = m.default.memo(function (e) {
              var t = e.isTieyou,
                i = e.content,
                a = void 0 === i ? {} : i,
                n = e.isChecked,
                s = void 0 !== n && n,
                r = e.onChecked,
                o = void 0 === r ? function () {} : r,
                c = e.onShowTips,
                l = void 0 === c ? function () {} : c,
                d = a.icon,
                u = a.title,
                p = a.tag,
                h = a.subTitle;
              return (0,
              T.BX)(b.View, { className: " _Ki _i _l _Vb _dc _mO", children: [(0, T.tZ)(b.Image, { src: d, className: " _Ef _db" }), (0, T.BX)(b.View, { className: " _Sf _j", children: [(0, T.BX)(b.View, { className: " _i _l", children: [(0, T.tZ)(b.View, { className: " _Ua _U _Xb _Pa", children: u }), (0, T.tZ)(b.View, { className: "ifont-detail iconfont ".concat(" _Zg _ed _Bd"), id: "AHAS", onClick: l }), p && (0, T.tZ)(b.View, { className: " _Zg _Al _P _Ze _af _kc _p -Ng", children: p })] }), (0, T.tZ)(b.View, { className: " _Ac _Ma _Na", children: h })] }), (0, T.tZ)(N, { className: "wx-switch-input " + (t ? "ty" : "zx"), onChange: o, checked: s })] });
            }),
            Ze = v.default.isTieyou,
            Ve = ne.Z.getHours(),
            xe = y().getStorageSync("GRAB_RATE_SUBMIT"),
            Be = {
              pageId: Ze ? "10650005127" : "10650005126",
              ubtState: !1,
              data: {
                isTieyou: Ze,
                repeatGrabOrder: "",
                pageLoading: !0,
                showType: "",
                navigatorExtraData: {},
                dStation: "",
                aStation: "",
                chosenTrainList: [],
                otherDates: [],
                otherTrainsSeatsArr: [],
                mobile: "",
                allPas: [],
                freeChildren: [],
                totalPrice: 0,
                computeJLSuccessRating: !1,
                successRate: null,
                jLSuccessRate: "",
                recommendTrainList: [],
                isShowSpeedSlider: !1,
                availablePoint: 0,
                isShowCrossStationFlag: !1,
                isAcceptNoSeat: !1,
                isOpenWeiXinCreditPay: !1,
                trainPrice: 0,
                CrossStationGrabTicketInfoList: [],
                CrossStationGrabTicketExtraAmount: 0,
                isIPhoneX: ne.Z.isIphoneX(),
                basicSuccessRate: 0,
                displayBasicSuccessRate: "---",
                basicSuccessRatePercent: 0,
                isSpeedChanged: !1,
                speedPointDefaultCount: 0,
                payTypeInfoV1: {},
                hasPreTrain: !1,
                prePayInfoV1: {},
                creditPayInfoV1: {},
                highestTicketPrice: 0,
                isShowMemberVip: !1,
                isSelectedMemberVip: !1,
                goldGrabInfo: {},
                canBuyMember: !1,
                vipInfo: null,
                vipSwitcherInfo: null,
                vipRightPriceMerge: null,
                isSelectedBuyMember: !1,
                buyMemberSucRate: "---",
                memberName: "",
                memberTagClass: "",
                goldGrabNumShown: 0,
                selectedUniversity: null,
                studentActivitySpeedList: [],
                isShowStudentChannel: !1,
                isStudentVIP: !1,
                priorityTicketRight: null,
                isAcceptPriorityTicketRight: !1,
                bookProcessInfo: null,
                speedPackInfo: null,
                bookProcessType: 0,
                robSwitchType: "",
                studentActivityInfo: null,
                isShowStudentChannelNew: !1,
                priceDetail: null,
                showSubscribeMask: !1,
                isGreenChannelChecked: !1,
                greenChannelInfo: null,
                promiseToast: null,
                promiseTopTitle: "",
                promiseSwitch: null,
                promiseIntoCarChecked: !1,
                showLowerBerthTips: !1,
                couponDescDrawerInfo: null,
                couponDescData: null,
                couponList: [],
                couponChooseTotalPrice: 0,
                couponCanUseNum: 0,
                couponSelectedNum: 0,
              },
              onLoad: function (e) {
                var t, i, a, n, s, r, o;
                console.log("grabrate page onLoad options ===> ", e),
                  v.default.isWechat &&
                    console.error(wx.buildVersion || "暂无信息"),
                  console.log(JSON.stringify(e));
                var c = ne.Z.getDeferred(),
                  l = C._.pick(
                    e.data || {},
                    "dStation",
                    "aStation",
                    "chosenTrainList",
                    "otherDates",
                    "otherTrainsSeatsArr",
                    "mobile",
                    "allPas",
                    "repeatGrabOrder",
                    "freeChildren",
                    "basicSuccessRate",
                    "selectedUniversity",
                    "grabSeatProductsShowType",
                    "robWindowNum",
                    "robRoadNum",
                    "robBedNum",
                    "robBottomBedNum",
                    "isRobConsecutiveSeats",
                    "isRobSameCarriage",
                    "isRobBottomBed",
                    "isRobBed",
                    "grabSeatProducts",
                    "ticketOffsetTime",
                    "studentActivityInfo",
                    "isShowStudentChannelNew"
                  );
                (this.isPre =
                  null === (t = e.data) || void 0 === t ? void 0 : t.isPre),
                  (this.needInterceptToast =
                    null === (i = e.data) || void 0 === i
                      ? void 0
                      : i.needInterceptToast),
                  (this.chosenCrossStations =
                    null === (a = e.data) || void 0 === a
                      ? void 0
                      : a.chosenCrossStations),
                  (this.trainViewModeType =
                    null === (n = e.data) || void 0 === n
                      ? void 0
                      : n.trainViewModeType),
                  (this.mainTrainPrice =
                    null === (s = e.data) || void 0 === s
                      ? void 0
                      : s.mainTrainPrice),
                  (this.selectedCombineSeat =
                    null === (r = e.data) || void 0 === r
                      ? void 0
                      : r.selectedCombineSeat);
                var d =
                  null === (o = e.data) || void 0 === o
                    ? void 0
                    : o.xbookShowedProducts;
                d &&
                  (this.xbookShowedProductName = Object.keys(d).find(function (
                    e
                  ) {
                    return "first" === d[e];
                  }));
                var u = (100 * (l.basicSuccessRate || 0.45)).toFixed(1),
                  p = (100 * (l.basicSuccessRate || 0.45)).toFixed(1);
                Object.assign(
                  this,
                  C._.pick(
                    e.data || {},
                    "fromPage",
                    u,
                    "userAuth12306Status",
                    "trainNoCanCandidate"
                  )
                ),
                  (this.isUserBindAccount = !0),
                  (this.isBind12306Config = !1),
                  this.setData(
                    (0, h.Z)(
                      (0, h.Z)({}, l),
                      {},
                      {
                        allPasLength: l.allPas.length,
                        basicSuccessRatePercent: p,
                      }
                    )
                  ),
                  this.onPageLoad(e).finally(function () {
                    return c.resolve();
                  }),
                  (this.onLoadPromise = c.promise),
                  this.load12306FromStore(),
                  this.judgeHasPreTrain(),
                  this.getUserBindAccount(),
                  this.getGrabCouponInfo(),
                  (this.abTestValue = (0, E.Gq)()),
                  (this.interceptDrawerAbTestValue = (0, E.el)()),
                  (this.specialGrabAbTestValue = v.default.isTieyou
                    ? "A"
                    : (0, E.fC)());
              },
              onShow: function () {
                var e = this;
                this.onLoadPromise.then(function () {
                  return e.onPageShow();
                }),
                  (this.ubtState = !0);
              },
              onPageLoad: function (e) {
                var t = this;
                return (
                  this.getCrossStationGrabTicketInfo(),
                  this.getPromiseIntoCarInfo(e),
                  this.checkShowLowerBerthTips(e),
                  this.queryConfig(),
                  this.getConfig(),
                  (this.grabTicketHeatPromise = this.getGrabTicketHeat()),
                  Promise.all([this.getUserPointInfo()])
                    .then(function () {
                      return t.getSchoolSpeed();
                    })
                    .then(function () {
                      return t.getVipInfo();
                    })
                    .then(function () {
                      var i;
                      return t.getPackageInfo(
                        null == e || null === (i = e.data) || void 0 === i
                          ? void 0
                          : i.xbookSelectedProduct
                      );
                    })
                    .then(function () {
                      return t.resetPrice();
                    })
                    .then(function () {
                      return t.initSpeedSlider();
                    })
                    .then(function () {
                      return t.getGrabOrderPayTypeV1Info();
                    })
                    .then(function () {
                      return t.showSpeedPackChangeTipPop();
                    })
                    .catch(function (e) {
                      return console.log(e);
                    })
                    .finally(function () {
                      var i;
                      t.handleXbookProdect(
                        null == e || null === (i = e.data) || void 0 === i
                          ? void 0
                          : i.xbookSelectedProduct
                      ),
                        t.setData({ pageLoading: !1 });
                      var a = t.data,
                        n = a.isSelectedMemberVip,
                        s = a.greenChannelInfo;
                      !n && s && t.newUbtTrace(192146);
                    }),
                  Promise.resolve()
                );
              },
              onPageShow: function () {
                var e = this;
                Promise.resolve()
                  .then(function () {
                    return e.resetPrice();
                  })
                  .then(function () {
                    console.log(
                      "AppConfig.scene=====>",
                      v.default.scene,
                      e.isSignCreditPay
                    ),
                      1038 == v.default.scene &&
                        e.isSignCreditPay &&
                        ((e.isSignCreditPay = !1),
                        e.signedCreditPay(B.Bc.options || {}));
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              },
              getGrabCouponInfo: function () {
                var e = this,
                  t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                return (0, ie.rv)({
                  userInfo: { phone: X.ZP.userName },
                  isAppointment: !0 === this.isPre ? 1 : 0,
                })
                  .then(function (i) {
                    1 === i.resultCode &&
                      (i.couponDetailInfo
                        ? e.setData({ couponList: i.couponDetailInfo })
                        : e.setData({ couponList: [] }),
                      e.resetPrice({ resetCouponList: t }));
                  })
                  .catch(function (t) {
                    console.error(t), e.setData({ couponList: [] });
                  });
              },
              handleXbookProdect: function (e) {
                if (e) {
                  var t = e.grabBoxName,
                    i = e.code;
                  if ("memberForRob" === t) {
                    var a = this.data,
                      n = a.isStudentVIP,
                      s = a.robSwitchType,
                      r = a.seasonMemberShipBannerInfo;
                    !n &&
                      "swellMoney" !== s &&
                      null != r &&
                      r.vipReleatedRightEntity &&
                      (this.changeBuyMember(!0),
                      this.setData({ isXbookProductType: "memberGrab" }));
                  } else if ("grab24Hours" === t) {
                    var o = this.data,
                      c = o.specificallyGrabBannerInfo,
                      l = o.specialPersonGrabInfo;
                    if ("B" === i && c)
                      this.setData({
                        isSpecificallyGrabChecked: !0,
                        isXbookProductType: "singleSpecialPersonGrab",
                      });
                    else if ("C" === i && l && l.options) {
                      var d;
                      this.setData({
                        specialPersonGrabType:
                          null === (d = l.options[l.options.length - 1]) ||
                          void 0 === d
                            ? void 0
                            : d.type,
                        isXbookProductType: "multiplySpecialPersonGrab",
                      });
                    }
                  } else if ("grabGreenChannel" === t) {
                    this.data.greenChannelInfo &&
                      this.setData({
                        isGreenChannelChecked: !0,
                        isXbookProductType: "greenChannelGrab",
                      });
                  } else
                    "grabSeatUpgrade" === t &&
                      this.setData({
                        seatUpgradeInfo: e,
                        seatUpgradeDrawerInfo: e.toastInfo,
                        seatUpgradeStatus: 1,
                        isSeatUpgradeChecked: !0,
                      });
                  this.resetPrice();
                }
              },
              showSpeedPackChangeTipPop: function () {
                var e = this.state.speedPackChangeTipImage,
                  t = D.wO.get() || "";
                e &&
                  -1 === t.indexOf("SpeedPackChangeTipPop") &&
                  (this.setData({ showType: "speedPackChangeTipPop" }),
                  D.wO.set("".concat(t, "SpeedPackChangeTipPop,")));
              },
              getVipInfo: function () {
                var e = this;
                if (!this.data.isStudentVIP) {
                  var t = function (t) {
                      var i = e.data,
                        a = i.robSwitchType,
                        n = i.isStudentVIP;
                      t && t.code && (e.baseGoldGrabCode = t.code),
                        t &&
                          t.goldGrabNum > 0 &&
                          (n ||
                            "stu" === a ||
                            "certifiedStudent" === a ||
                            "newGuest" === a ||
                            "swellMoney" === a ||
                            e.ubtTrace(215823, {
                              bizKey: "vipAfterSaleModuleShow",
                              terminaltype: "Applets",
                              line: "GRAB",
                              scene: "grabSuccessRate",
                            }),
                          e.setData({
                            isShowMemberVip: !0,
                            isSelectedMemberVip:
                              "stu" !== a &&
                              "certifiedStudent" !== a &&
                              "newGuest" !== a &&
                              "swellMoney" !== a &&
                              t.grabSwitch,
                            goldGrabInfo: t,
                            goldGrabNumShown: t.goldGrabNum,
                          }),
                          t.grabSwitch && e.setVIPBackground());
                    },
                    i = {
                      0: "普通",
                      10: "白银",
                      20: "黄金",
                      30: "铂金",
                      40: "黑钻",
                    },
                    a = {
                      0: "",
                      10: "baiyin",
                      20: "huangjin",
                      30: "bojin",
                      40: "heizuan",
                    },
                    n = {
                      isAllStudent: (this.data.allPas || []).every(function (
                        e
                      ) {
                        return 3 == e.PassengerType;
                      })
                        ? 1
                        : 0,
                      scene: 100,
                    };
                  return (
                    this.mainTrainPrice
                      ? (n.currentTrainInfo = {
                          mainTrainPrice: this.mainTrainPrice,
                        })
                      : (n.currentTrainInfo = {
                          mainTrainPrice: this.getSeatMaxPriceV2(
                            this.data.otherTrainsSeatsArr
                          ),
                        }),
                    (0, ie.Z8)(n)
                      .then(function (n) {
                        var s = n.resultCode,
                          r = void 0 === s ? -1 : s,
                          o = {
                            1: {
                              run: function () {
                                if (
                                  (t(n.goldGrabInfo),
                                  (function (t) {
                                    (e.claimAmount = t.claimAmount),
                                      (e.claimCount = t.claimCount),
                                      (e.claimSecretAmount =
                                        t.claimSecretAmount);
                                  })(n.grabMemberEntity),
                                  e.getSeasonMemberInterceptDrawer(
                                    n.grabSuccessInterceptToastEntity
                                  ),
                                  n.wechatVipInfoV1)
                                ) {
                                  var s,
                                    r,
                                    o,
                                    c,
                                    l,
                                    d,
                                    u,
                                    p = n.vipGrade || 0;
                                  (e.vipNoSelectedDesc = ""),
                                    (e.vipSelectedDesc = ""),
                                    (e.baseMemberName = i["".concat(p)]),
                                    (e.baseSpeedFactor = n.speedFactor || 1),
                                    (e.platinumSpeedFactor =
                                      (null ===
                                        (s =
                                          n.wechatVipInfoV1
                                            .recommendVipInfoList) ||
                                      void 0 === s ||
                                      null === (r = s[0]) ||
                                      void 0 === r ||
                                      null === (o = r.vipReleatedRightEntity) ||
                                      void 0 === o
                                        ? void 0
                                        : o.speedFactor) || 1),
                                    (e.seasonMemberProductDescInfo =
                                      null ===
                                        (c =
                                          n.wechatVipInfoV1
                                            .recommendVipInfoList) ||
                                      void 0 === c ||
                                      null === (l = c[0]) ||
                                      void 0 === l
                                        ? void 0
                                        : l.vipSwitchRetainToastEntity);
                                  var h =
                                    null ===
                                      (d =
                                        n.wechatVipInfoV1.vipDetailInfoList) ||
                                    void 0 === d
                                      ? void 0
                                      : d[0];
                                  h.grabSuccessNoSelectedVipDesc &&
                                    ((e.vipNoSelectedDesc =
                                      h.grabSuccessNoSelectedVipDesc),
                                    (e.vipSelectedDesc =
                                      h.grabSuccessSelectedVipDesc)),
                                    e.setData({
                                      seasonMemberShipDrawerInfo: h || null,
                                      seasonMemberShipBannerInfo:
                                        (null ===
                                          (u =
                                            n.wechatVipInfoV1
                                              .recommendVipInfoList) ||
                                        void 0 === u
                                          ? void 0
                                          : u[0]) || null,
                                      memberName: e.baseMemberName,
                                      isShowSeasonMember: !0,
                                      canBuyMember: !0,
                                      speedFactor: e.baseSpeedFactor,
                                    }),
                                    F.ZP.GetSpeedLvlName().then(function (t) {
                                      var i = t.map(function (e) {
                                        return e.name;
                                      });
                                      e.setData({ speedLevelNameList: i });
                                    });
                                } else {
                                  var m = n.vipInfo || {};
                                  m.rightList = m.rightList.map(function (e) {
                                    return {
                                      desc: e,
                                      type: e.includes("成功率可达") ? 1 : 0,
                                    };
                                  });
                                  var b = n.vipGrade || 0;
                                  (e.baseMemberName = i["".concat(b)]),
                                    (e.baseMemberTagClass = a["".concat(b)]),
                                    (e.baseSpeedFactor = n.speedFactor || 1),
                                    (e.platinumSpeedFactor =
                                      m.speedFactor || 1);
                                  var g = !1;
                                  "informal" === m.codeType && (g = !0);
                                  var f = null;
                                  m.v1StyleVipInfo && (f = m.v1StyleVipInfo),
                                    f &&
                                      (g
                                        ? e.newUbtTrace(206051)
                                        : e.newUbtTrace(206057));
                                  var y = e.data,
                                    w = y.isStudentVIP,
                                    S = y.robSwitchType,
                                    v = y.isShowSeasonMember,
                                    T = y.canBuyMember;
                                  !w &&
                                    "stu" !== S &&
                                    "swellMoney" !== S &&
                                    "certifiedStudent" !== S &&
                                    !v &&
                                    T &&
                                    m &&
                                    f &&
                                    (e.ubtTrace(215823, {
                                      bizKey: "vipSaleModuleShow",
                                      terminaltype: "Applets",
                                      line: "GRAB",
                                      cardCode: m.code,
                                      scene: "grabSuccessRate",
                                      selectedType: "F",
                                    }),
                                    e.ubtTrace(208753, {
                                      exposureType: "normal",
                                      bizKey:
                                        "z_success_grab_applet_vip_modeule_show",
                                    })),
                                    e.setData({
                                      canBuyMember: !0,
                                      isInformalVip: g,
                                      vipInfo: n.vipInfo || {},
                                      vipSwitcherInfo: f,
                                      vipRightPriceMerge:
                                        n.vipRightPriceMerge || {},
                                      speedFactor: e.baseSpeedFactor,
                                      memberName: i["".concat(b)],
                                      memberTagClass: a["".concat(b)],
                                    }),
                                    !e.data.isStudentVIP &&
                                      e.data.canBuyMember &&
                                      e.data.vipInfo &&
                                      e.newUbtTrace(138300);
                                }
                                e.calBuyMemberSucRate();
                              },
                            },
                            "-2": {
                              run: function () {
                                t(n.goldGrabInfo),
                                  (e.baseSpeedFactor = n.speedFactor || 1),
                                  e.setData({
                                    canBuyMember: !1,
                                    speedFactor: e.baseSpeedFactor,
                                    memberName: "黑钻",
                                    memberTagClass: "heizuan",
                                  });
                              },
                            },
                            "-3": {
                              run: function () {
                                t(n.goldGrabInfo);
                                var s = n.vipGrade || 0;
                                (e.baseSpeedFactor = n.speedFactor || 1),
                                  e.setData({
                                    canBuyMember: !1,
                                    speedFactor: e.baseSpeedFactor,
                                    memberName: i["".concat(s)],
                                    memberTagClass: a["".concat(s)],
                                  });
                              },
                            },
                          };
                        o["".concat(r)] && o["".concat(r)].run();
                      })
                      .catch(function (e) {
                        return console.log(e);
                      })
                  );
                }
              },
              getSeasonMemberInterceptDrawer: function (e) {
                e
                  ? this.setState({
                      seasonMemberInterceptDrawerInfo: e || null,
                    })
                  : this.setState({ seasonMemberInterceptDrawerInfo: null });
              },
              setVIPBackground: function () {
                if ("swellMoney" !== this.data.robSwitchType) {
                  var e = "#F0C66F";
                  this.setNavigationBarColor(e), (0, H.setBackgroundColor)(e);
                }
              },
              getCrossStationGrabTicketInfo: function () {
                var e = this,
                  t = this.data,
                  i = t.otherDates,
                  a = t.dStation,
                  n = t.aStation,
                  s = t.chosenTrainList,
                  r = t.otherTrainsSeatsArr,
                  o = i,
                  c = {
                    departStation: a,
                    arriveStation: n,
                    departDate: o[0],
                    alternativeTrainNums: s
                      .map(function (e) {
                        return e.TrainNumber;
                      })
                      .join(","),
                    alternativeDepartDates: o.join(","),
                    alternativeTrainSeats: r
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return e.SeatName;
                      })
                      .join(","),
                    fromPage: 2,
                  };
                return (0, M.YFh)(c)
                  .then(function (t) {
                    var i = t.resultCode,
                      a = t.crossStationInfos;
                    1 == i &&
                      C.Z.notEmptyArray(a) &&
                      (F.ZP.formatCrossSolutions(a, r),
                      e.setData({
                        CrossStationGrabTicketInfoList: a.map(function (e) {
                          return Object.assign(e, {
                            isCrossStationGrabCheckoutSelected: !1,
                          });
                        }),
                      }));
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              getPromiseIntoCarInfo: function (e) {
                var t,
                  i,
                  a,
                  n,
                  s,
                  r,
                  o = this,
                  c = (e || {}).data,
                  l = void 0 === c ? {} : c,
                  d = this.getSeatNames(l.otherTrainsSeatsArr);
                this.seatNameList = d.split(",");
                var u = {
                    departStation: l.dStation,
                    arriveStation: l.aStation,
                    trainNumbers: this.getTrainNums(l.chosenTrainList),
                    seatNames: d,
                    departDate: this.getFromDates(l.otherDates),
                    departTime:
                      null === (t = l.chosenTrainList) ||
                      void 0 === t ||
                      null === (i = t[0]) ||
                      void 0 === i
                        ? void 0
                        : i.DepartTime,
                    source: "setPage",
                  },
                  p =
                    (null === (a = l.chosenTrainList) || void 0 === a
                      ? void 0
                      : a.length) > 1
                      ? "等".concat(
                          null === (n = l.chosenTrainList) || void 0 === n
                            ? void 0
                            : n.length,
                          "个车次"
                        )
                      : "",
                  h = "保障乘坐<font color='#FFF194'>「"
                    .concat(
                      null === (s = l.chosenTrainList) ||
                        void 0 === s ||
                        null === (r = s[0]) ||
                        void 0 === r
                        ? void 0
                        : r.TrainNumber,
                      "」"
                    )
                    .concat(p, "；")
                    .concat(l.dStation, "站</font>上车，<font color='#FFF194'>")
                    .concat(l.aStation, "站</font>下车");
                (0, M.pe1)(u)
                  .then(function (e) {
                    if ((console.log("getPromiseIntoCarPromise", e), e))
                      if (1 == e.resultCode) {
                        var t = e.promiseEnter || {},
                          i = t.setPageIcon,
                          a = t.setPageSubTitle,
                          n = t.setPageTitle;
                        o.setData({
                          promiseToast: e.promiseToast || {},
                          promiseTopTitle: h,
                          promiseSwitch: { headIcon: i, title: n, subTitle: a },
                        });
                        var s = o.data.promiseIntoCarChecked;
                        o.ubtTrace(208753, {
                          exposureType: "normal",
                          bizKey: "z_guarantee_plan_module_show",
                          state: s ? 1 : 0,
                        });
                      } else {
                        var r = "网络请求失败，请重试";
                        e.resultMessage && (r = e.resultMessage),
                          console.error(r);
                      }
                    else console.error("网络请求失败，请重试");
                  })
                  .catch(function (e) {
                    console.error(e);
                  });
              },
              checkShowLowerBerthTips: function (e) {
                var t = (e || {}).data;
                ((void 0 === t ? {} : t).otherTrainsSeatsArr || []).some(
                  function (e) {
                    return (
                      ("硬卧" === e.SeatName || "软卧" === e.SeatName) &&
                      e.selected
                    );
                  }
                ) && this.setData({ showLowerBerthTips: !0 });
              },
              onPromiseSwitchChange: function (e) {
                this.ubtTrace(208755, {
                  bizKey: "z_guarantee_plan_module_click",
                  state: e ? 0 : 1,
                }),
                  e
                    ? (this.openPromiseIntoCarDrawer(),
                      this.setData({ promiseIntoCarChecked: !0 }))
                    : (this.setData({ promiseIntoCarChecked: !1 }),
                      (this.promiseIntoCarCrossInfos = []),
                      this.resetPrice());
              },
              openPromiseIntoCarDrawer: function () {
                this.ubtTrace(208753, {
                  exposureType: "actionbar",
                  bizKey: "z_guarantee_success_plan_actionbar_show",
                }),
                  this.setData({ showType: "promiseIntoCarDrawer" });
              },
              confirmPromiseIntoCarInfo: function (e) {
                this.promiseIntoCarCrossInfos = (0, p.Z)(e);
              },
              toggleSpeedSlider: function () {
                if (
                  (this.newUbtTrace(201263),
                  "aliGuest" !== this.data.robSwitchType)
                ) {
                  var e = !this.data.isShowSpeedSlider,
                    t = e ? "show-speed-slider" : "";
                  e && this.newUbtTrace(201264),
                    this.setData({ isShowSpeedSlider: e, showType: t }),
                    this.speedSliderDraw(),
                    (this.tmpSpeedIndex = this.data.speedSlider.index);
                }
              },
              initSpeedSlider: function () {
                var e = this;
                return F.ZP.GetSpeedLvlName().then(function (t) {
                  var i = t.map(function (e) {
                      return (0, h.Z)((0, h.Z)({}, e), {}, { title: e.name });
                    }),
                    a = 0;
                  (a = e.getDefaultSpeedIndex()),
                    "aliGuest" === e.data.robSwitchType &&
                      (a = i.findIndex(function (e) {
                        return 30 === e.speedPkgNums;
                      }));
                  var n = a,
                    s = e.data.speedSlider.index;
                  0 == s && (s = a);
                  var r = i[s];
                  e.setData({ recommendSpeedInfo: r }),
                    "aliGuest" !== e.data.robSwitchType && (s = 0);
                  var o = [s, i, e.data.allPas.length, "resetPrice", n];
                  return e.data.isShowSpeedSlider
                    ? e.speedSliderInit.apply(e, o)
                    : e.speedSliderModelInit.apply(e, o);
                });
              },
              getDefaultSpeedIndex: function () {
                var e = this.data.speedPointDefaultCount,
                  t = 2;
                return (
                  0 == e
                    ? (t = 0)
                    : 10 == e
                    ? (t = 1)
                    : 30 == e
                    ? (t = 3)
                    : 40 == e
                    ? (t = 4)
                    : 50 == e && (t = 5),
                  t
                );
              },
              getPackageNums: function () {
                var e = this.data,
                  t = e.speedSlider,
                  i = e.availablePoint,
                  a = e.allPasLength,
                  n = { payPkgNum: 0, userPkgNum: 0 },
                  s = t && t.speedPkgNums ? t.speedPkgNums : 0;
                return (
                  i <= 0 && ((n.payPkgNum = s), (n.userPkgNum = 0)),
                  i >= s * a
                    ? ((n.payPkgNum = 0), (n.userPkgNum = s * a))
                    : ((n.payPkgNum = s * a - i), (n.userPkgNum = i)),
                  n
                );
              },
              resetPrice: function (e) {
                var t = this;
                return (0, u.Z)(
                  (0, d.Z)().mark(function i() {
                    var a,
                      n,
                      s,
                      r,
                      o,
                      c,
                      l,
                      u,
                      p,
                      h,
                      m,
                      b,
                      g,
                      f,
                      y,
                      w,
                      S,
                      v,
                      T,
                      N,
                      P,
                      I,
                      k,
                      V,
                      x,
                      B,
                      _,
                      D,
                      G,
                      A,
                      X,
                      M,
                      L,
                      R,
                      F,
                      U,
                      H,
                      O,
                      E,
                      j,
                      q,
                      K,
                      W,
                      Y,
                      J,
                      Q,
                      $,
                      ee,
                      ie,
                      ae,
                      ne,
                      se,
                      re,
                      oe,
                      ce,
                      le,
                      de,
                      ue,
                      pe,
                      he,
                      me,
                      be,
                      ge,
                      fe,
                      ye;
                    return (0, d.Z)().wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            (n = (e || {}).resetCouponList),
                              (s = void 0 !== n && n),
                              (r = t.data),
                              (o = r.otherTrainsSeatsArr),
                              (c = r.isShowCrossStationFlag),
                              (l = r.CrossStationGrabTicketInfoList),
                              (u = r.speedSlider),
                              (p = r.allPasLength),
                              (h = r.isSelectedBuyMember),
                              (m = r.isSelectedMemberVip),
                              (b = r.priorityTicketRight),
                              (g = r.isAcceptPriorityTicketRight),
                              (f = r.robSwitchType),
                              (y = r.vipRightPriceMerge),
                              (w = r.isInformalVip),
                              (S = r.seasonMemberShipDrawerInfo),
                              (v = r.isStudentVIP),
                              (T = r.dStation),
                              (N = r.aStation),
                              (P = r.grabSeatProductsShowType),
                              (I = r.grabSeatProducts),
                              (k = r.robWindowNum),
                              (V = r.robRoadNum),
                              (x = r.isRobConsecutiveSeats),
                              (B = r.isRobSameCarriage),
                              (_ = r.isRobBottomBed),
                              (D = r.robBottomBedNum),
                              (G = r.robBedNum),
                              (A = r.isRobBed),
                              (X = r.greenChannelInfo),
                              (M = r.isGreenChannelChecked),
                              (L = r.isSeatUpgradeChecked),
                              (R = r.seatUpgradeInfo),
                              (F = r.seatUpgradeDrawerInfo),
                              (U = r.isSpecificallyGrabChecked),
                              (H = r.specificallyGrabBannerInfo),
                              (O = r.specialPersonGrabInfo),
                              (E = r.specialPersonGrabType),
                              (j = r.couponList),
                              (q = []),
                              (K =
                                C._.max(
                                  o
                                    .filter(function (e) {
                                      return e.selected;
                                    })
                                    .map(function (e) {
                                      return e.SeatPrice;
                                    })
                                ) || 0),
                              t.setData({ trainPrice: K }),
                              (W =
                                t.CrossStationGrabTicketGetCrossStationGrabExtraAmount()),
                              (Y = K + W),
                              "swellMoney" === f ||
                                v ||
                                (h &&
                                  (S || y) &&
                                  ((J = ""),
                                  (Q = ""),
                                  S
                                    ? ((J = "铂金会员"),
                                      t.seasonMemberProductDescInfo &&
                                        ((ee = t.seasonMemberProductDescInfo),
                                        (J = ee.title + "（" + ee.tip + "）")),
                                      (Q =
                                        (null === ($ = S.openVipDescEntity) ||
                                        void 0 === $
                                          ? void 0
                                          : $.salePrice) || ""))
                                    : y &&
                                      ((J = w ? "铂金试用会员" : "铂金会员"),
                                      (Q = y.salePrice)),
                                  q.push({
                                    name: J,
                                    total: Q,
                                    desc: "￥".concat(Q),
                                    type: "extra",
                                    calcType: 2,
                                  }),
                                  S &&
                                    S.discount &&
                                    q.push({
                                      name: J + " 专属立减价格",
                                      total: Number("-" + S.discount),
                                      desc: "￥-".concat(S.discount),
                                      type: "extra",
                                      calcType: 2,
                                    }))),
                              m ||
                                (h && w
                                  ? b &&
                                    g &&
                                    q.push({
                                      name: b.title,
                                      unit: +b.price,
                                      total: +b.price,
                                      desc: "".concat(b.price),
                                      calcType: 2,
                                    })
                                  : M && X
                                  ? q.push({
                                      name: X.greenChannelEntrance.title,
                                      unit: +X.greenChannelProduct.salePrice,
                                      total:
                                        +X.greenChannelProduct.salePrice * p,
                                      desc: ""
                                        .concat(
                                          X.greenChannelEntrance.title,
                                          "x"
                                        )
                                        .concat(p),
                                      calcType: 1,
                                    })
                                  : ((ie = t.getPackageNums()),
                                    (ae = ie.payPkgNum),
                                    (ne = ie.userPkgNum) > 0 &&
                                      q.push({
                                        name: "使用账户中的".concat(
                                          Z.Z.SPEED_PACK
                                        ),
                                        total: ne * u.costPrice,
                                        desc: "".concat(ne, "个"),
                                        type: "extra",
                                        calcType: 0,
                                      }),
                                    ae > 0 &&
                                      q.push({
                                        name: "购买".concat(Z.Z.SPEED_PACK),
                                        unit: Math.floor(ae / p) * u.costPrice,
                                        total: ae * u.costPrice,
                                        desc: "".concat(ae, "个"),
                                        calcType: 2,
                                      }),
                                    b &&
                                      g &&
                                      q.push({
                                        name: b.title,
                                        unit: +b.price,
                                        total: +b.price,
                                        desc: "".concat(b.price),
                                        calcType: 2,
                                      }))),
                              L &&
                                R &&
                                F &&
                                q.push({
                                  name: F.headTitle || "",
                                  unit: +R.salePrice,
                                  total: +R.salePrice * p,
                                  desc: "".concat(R.salePrice, "x").concat(p),
                                  calcType: 1,
                                }),
                              O && E && 0 !== E
                                ? ((se =
                                    O.options.find(function (e) {
                                      return e.type === E;
                                    }) || {}),
                                  q.push({
                                    name:
                                      t.specialPersonGrabBannerTitle + se.title,
                                    unit: se.salePrice,
                                    total: se.salePrice * p,
                                    desc: ""
                                      .concat(se.salePrice, "x")
                                      .concat(p),
                                    calcType: 1,
                                  }))
                                : U &&
                                  H &&
                                  q.push({
                                    name: "24小时专人抢票",
                                    unit: H.price,
                                    total: H.price * p,
                                    desc: "".concat(H.price, "x").concat(p),
                                    calcType: 1,
                                  }),
                              ((c && l.length && W > 0) ||
                                (null === (a = t.promiseIntoCarCrossInfos) ||
                                void 0 === a
                                  ? void 0
                                  : a.length) > 0) &&
                                q.push({
                                  name: "跨站抢",
                                  unit: W,
                                  total: W * p,
                                  desc: "".concat(W, "x").concat(p),
                                  calcType: 1,
                                }),
                              P > 0 &&
                                I &&
                                p &&
                                I.forEach(function (e) {
                                  if (5 === e.productType && k > 0)
                                    q.push({
                                      name: e.title,
                                      unit: e.price,
                                      total: +e.price * k,
                                      desc: "".concat(e.price, "x").concat(k),
                                      calcType: 2,
                                    });
                                  else if (6 === e.productType && V > 0)
                                    q.push({
                                      name: e.title,
                                      unit: e.price,
                                      total: +e.price * V,
                                      desc: "".concat(e.price, "x").concat(V),
                                      calcType: 2,
                                    });
                                  else if (7 === e.productType && x)
                                    q.push({
                                      name: e.title,
                                      unit: e.price,
                                      total: 1 * +e.price,
                                      desc: "".concat(e.price, "x1"),
                                      calcType: 2,
                                    });
                                  else if (25 === e.productType && B)
                                    q.push({
                                      name: e.title,
                                      unit: e.price,
                                      total: 1 * +e.price,
                                      desc: "".concat(e.price, "x1"),
                                      calcType: 2,
                                    });
                                  else if (8 === e.productType && A)
                                    q.push({
                                      name: e.title,
                                      unit: e.price,
                                      total: +e.price * p,
                                      desc: "".concat(e.price, "x").concat(p),
                                      calcType: 1,
                                    });
                                  else if (8 === e.productType && G > 0)
                                    q.push({
                                      name: e.title,
                                      unit: e.price,
                                      total: +e.price * G,
                                      desc: "".concat(e.price, "x").concat(G),
                                      calcType: 2,
                                    });
                                  else if (24 === e.productType) {
                                    var t = {};
                                    _
                                      ? (t = {
                                          name: e.title,
                                          unit: e.price,
                                          total: +e.price * p,
                                          desc: ""
                                            .concat(e.price, "x")
                                            .concat(p),
                                          calcType: 1,
                                        })
                                      : D > 0 &&
                                        (t = {
                                          name: e.title,
                                          unit: e.price,
                                          total: +e.price * D,
                                          desc: ""
                                            .concat(e.price, "x")
                                            .concat(D),
                                          calcType: 2,
                                        }),
                                      q.push(t);
                                  }
                                }),
                              (re = K),
                              (oe = q.reduce(function (e, t) {
                                return 1 === t.calcType
                                  ? (0, z.IH)(e, t.unit)
                                  : e;
                              }, 0)),
                              (ce = q.reduce(function (e, t) {
                                return 2 === t.calcType
                                  ? (0, z.IH)(e, t.total)
                                  : e;
                              }, 0)),
                              (le = 0);
                            try {
                              (de = (0, z.ui)((0, z.IH)(re, W), p)),
                                (ue =
                                  (0, te.GP)({
                                    couponList: j || [],
                                    chooseProductList: [],
                                    ticketPrice: de,
                                  }) || {}),
                                (s ||
                                  ((null == ue ? void 0 : ue.length) > 0 &&
                                    !t.previousTicketPrice) ||
                                  t.previousTicketPrice !== de) &&
                                  (0, te.Cv)(ue),
                                j.length > 0 && (t.previousTicketPrice = de),
                                (pe = (0, te.YE)(ue)),
                                (he = pe.couponSelectedNum),
                                (me = pe.couponCanUseNum),
                                (be = pe.couponChooseTotalPrice),
                                (le = be),
                                ue &&
                                  t.setData({
                                    couponChooseTotalPrice: le,
                                    couponSelectedNum: he,
                                    couponCanUseNum: me,
                                    couponList: ue,
                                  });
                            } catch (e) {
                              console.error(e);
                            }
                            return (
                              (ge = (0, z.IH)(re, oe)),
                              (fe =
                                re < 0
                                  ? 0
                                  : (0, z.lu)((0, z.IH)(ge * p, ce), le)),
                              (ye = {
                                couponChooseTotalPrice: le,
                                route: "".concat(T, "-").concat(N),
                                ticketInfo: "¥".concat(K, "x").concat(p),
                                totalPrice: fe,
                                productDetailList: q,
                                tips: [
                                  "先付钱再抢票，会预收最高座席的费用，抢票成功后，会以实际出票价格，将差价退回原支付账户",
                                  "若您的"
                                    .concat(
                                      Z.Z.SPEED_PACK,
                                      "账户中有余额，会优先扣取其中的"
                                    )
                                    .concat(Z.Z.SPEED_PACK),
                                ],
                              }),
                              o.some(function (e) {
                                return (
                                  ("硬卧" === e.SeatName ||
                                    "软卧" === e.SeatName) &&
                                  e.selected
                                );
                              }) &&
                                (ye.ticketInfo =
                                  "（下铺价格）" + ye.ticketInfo),
                              (ye.priceTips = ""),
                              t.isIncludeStudentOrChildren()
                                ? (ye.tips.push(
                                    "学生票、儿童票暂收取全价，抢票成功后1-3个工作日内原路退回差价"
                                  ),
                                  (ye.priceTips =
                                    "学生票、儿童票暂收取全价，抢票成功后1-3个工作日内原路退回差价"))
                                : t.isIncludeStudentTicket()
                                ? (ye.tips.push(
                                    "学生票暂收取全价，抢票成功后1-3个工作日内原路退回差价"
                                  ),
                                  (ye.priceTips =
                                    "学生票暂收取全价，抢票成功后1-3个工作日内原路退回差价"))
                                : t.isIncludeChildrenTicket() &&
                                  (ye.tips.push(
                                    "儿童票暂收取全价，抢票成功后1-3个工作日内原路退回差价"
                                  ),
                                  (ye.priceTips =
                                    "儿童票暂收取全价，抢票成功后1-3个工作日内原路退回差价")),
                              t.setData({
                                priceDetail: ye,
                                totalPrice: fe,
                                CrossStationGrabTicketExtraAmount: W,
                                highestTicketPrice: Y,
                              }),
                              t.calJLSuccessRate(),
                              i.abrupt("return", {
                                trainPrice: K,
                                allPasLength: p,
                                totalPrice: fe,
                              })
                            );
                          case 27:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  })
                )();
              },
              onConfirmCouponList: function (e) {
                this.setData({ couponList: e, showType: "" }),
                  this.resetPrice();
              },
              isIncludeStudentOrChildren: function () {
                var e = this.data.allPas;
                return (
                  this.isIncludeChildrenTicket(e) &&
                  this.isIncludeStudentTicket(e)
                );
              },
              isIncludeChildrenTicket: function () {
                return this.data.allPas.find(function (e) {
                  return e.isChild;
                });
              },
              isIncludeStudentTicket: function () {
                return this.data.allPas.find(function (e) {
                  return (
                    3 == e.PassengerType && !e.convertStu && !e.isStudentToAdult
                  );
                });
              },
              CrossStationGrabTicketGetCrossStationGrabExtraAmount:
                function () {
                  var e,
                    t,
                    i = 0;
                  if (
                    (null === (e = this.chosenCrossStations) || void 0 === e
                      ? void 0
                      : e.length) > 0
                  ) {
                    var a = this.chosenCrossStations.map(function (e) {
                      return e.f_extraAmount;
                    });
                    i = Math.max.apply(Math, [0].concat((0, p.Z)(a)));
                  }
                  var n = 0;
                  return (
                    (null === (t = this.promiseIntoCarCrossInfos) ||
                    void 0 === t
                      ? void 0
                      : t.length) > 0 &&
                      (n =
                        Math.max.apply(
                          Math,
                          (0, p.Z)(
                            this.promiseIntoCarCrossInfos.map(function (e) {
                              return e.extraAmount || 0;
                            })
                          )
                        ) || 0),
                    Math.max(i, n)
                  );
                },
              getSpeedPkgOringalPrice: function () {
                var e = this.data,
                  t = e.speedSlider,
                  i = e.isStudentVIP;
                if (e.isSelectedMemberVip || i) return 0;
                var a = t.selectedItem;
                return a ? a.speedPkgNums * t.costPrice : 0;
              },
              getUserPointInfo: function () {
                var e = this;
                return (0, M.xkK)().then(function (t) {
                  if (1 == t.resultCode)
                    return (
                      e.setData({ availablePoint: t.AvailablePoint }),
                      t.AvailablePoint
                    );
                });
              },
              calJLSuccessRate: function () {
                try {
                  var e = this.getGrabSuccessRateForSuccessPage(),
                    t = this.getGrabSuccessRateForSuccessPage({
                      isBuyPackage: !1,
                    }),
                    i = this.getGrabSuccessRateForSuccessPage({
                      isBuyDefaultPackage: !0,
                    }),
                    a = this.getGrabSuccessRateForSuccessPage({
                      isRecommendPackage: !0,
                    });
                  e &&
                    this.setData({
                      successRate: e,
                      jLSuccessRate: (100 * e).toFixed(1),
                      nonPackageSuccessRate: (100 * t).toFixed(1),
                      defaultPackageSuccessRate: (100 * i).toFixed(1),
                      recommendPackageSuccessRate: (100 * a).toFixed(1),
                    });
                } catch (e) {
                  console.error(e);
                }
              },
              openPrice: function () {
                "price-detail" === this.data.showType
                  ? this.hideBackDrop()
                  : this.setData({ showType: "price-detail" });
              },
              hideBackDrop: function () {
                var e = this.data.showType;
                if ("show-speed-slider" === (void 0 === e ? "" : e))
                  return this.cancelSelectedSpeed(), !1;
                this.setData({ showType: "" });
              },
              toggleUseMemberVip: function () {
                var e = this.data.isSelectedMemberVip;
                (e = !e),
                  this.setData({ isSelectedMemberVip: e }),
                  this.resetPrice(),
                  e
                    ? this.setVIPBackground()
                    : this.setNavigationBarColor(
                        "".concat(Ze ? "#3C4365" : "#0066E6")
                      );
              },
              setNavigationBarColor: function (e) {
                (0, H.setNavigationBarColor)({
                  backgroundColor: e,
                  frontColor: "#ffffff",
                }),
                  (0, H.setBackgroundColor)({
                    backgroundColor: e,
                    frontColor: "#ffffff",
                  });
              },
              submitGrabOrder: function () {
                var e = this,
                  t = this.data,
                  i = t.speedSlider,
                  a = void 0 === i ? {} : i,
                  n = t.availablePoint,
                  s = a.selectedItem,
                  r = void 0 === s ? {} : s;
                return (0, M.xkK)().then(function (t) {
                  if (1 == t.resultCode) {
                    if (
                      t.AvailablePoint >= r.speedPkgNums ||
                      t.AvailablePoint === n
                    )
                      return e.createGrabOrder();
                    e.setData({ availablePoint: t.AvailablePoint }),
                      e.resetPrice();
                  } else e.getUserPointInfo().then(e.resetPrice);
                  e.ubtTrace(101591, { code: 1 }),
                    (0, H.showToast)("您的订单金额有更新");
                });
              },
              validateStuPsg: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.stuPsgs,
                  i = void 0 === t ? this.data.allPas : t,
                  a = e.seatNames,
                  n =
                    void 0 === a
                      ? this.data.otherTrainsSeatsArr
                          .filter(function (e) {
                            return e.selected;
                          })
                          .map(function (e) {
                            return e.SeatName;
                          })
                      : a,
                  s = e.dates,
                  r = void 0 === s ? (0, p.Z)(this.data.otherDates) : s,
                  o = n,
                  c = r,
                  l = i;
                "string" == typeof n && (o = [n]),
                  "string" == typeof r && (c = [r]);
                var d = (l = i.filter(function (e) {
                  return 3 == e.PassengerType;
                })).every(function (e) {
                  return e.convertStu || e.isStudentToAdult;
                });
                if (d) return !0;
                var u = (0, R.e)({
                  newStuPsgs: l,
                  newSeatNames: o,
                  newDates: c,
                });
                return !!u.isPass || ((0, H.showModal)(u.errMsg), !1);
              },
              submitOrder: function () {
                return this.submitGrabOrder();
              },
              updateChildInfo: function () {
                for (
                  var e = this.data.allPas,
                    t = C._.find(e, function (e) {
                      return !e.isChild;
                    }),
                    i = [],
                    a = 0;
                  a < e.length;
                  a++
                )
                  1 == e[a].isChild && i.push(a);
                for (var n = 0; n < i.length; n++) e[i[n]].idcard = t.idcard;
                this.setData({ allPas: e });
              },
              submit: function () {
                if (this.validateStuPsg())
                  return X.ZP.auth && X.ZP.isLogin
                    ? this.submitOrder()
                    : void X.ZP.doLogin()
                        .then(function () {})
                        .catch(function (e) {
                          console.log(e);
                        });
              },
              submitWithPackageSelection: function (e) {
                var t = (e.currentTarget.dataset || {}).type,
                  i = void 0 === t ? "free" : t;
                switch (i) {
                  case "default":
                  case "nonFree":
                  case "recommendSpeed":
                    this.submitGrab({ speedGrabType: i });
                    break;
                  case "useMemberVip":
                  case "useStudentVIP":
                    this.submit();
                    break;
                  default:
                    this.showRecommendSpeedPop();
                }
                switch (i) {
                  case "default":
                    this.packageTrace(5, "挽留弹窗开始X速抢票");
                    break;
                  case "nonFree":
                    this.packageTrace(1, "开始X速抢票");
                    break;
                  case "free":
                    this.packageTrace(2, "开始低速抢票");
                    break;
                  case "useMemberVip":
                    this.packageTrace(8, "会员VIP抢票券下单");
                }
              },
              submitGrabFree: function () {
                var e = this;
                return (0, u.Z)(
                  (0, d.Z)().mark(function t() {
                    var i, a, n, s;
                    return (0, d.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              !e.isBind12306Config ||
                              e.isUserBindAccount ||
                              "recommendSpeedPop" !== e.data.showType
                            ) {
                              t.next = 10;
                              break;
                            }
                            return (t.next = 3), F.ZP.getTrain12306Config();
                          case 3:
                            if (((i = t.sent), i.isIn12306WorkTime)) {
                              t.next = 9;
                              break;
                            }
                            return (
                              (a = e.data.speedSlider),
                              (n = (void 0 === a ? {} : a).defaultItem),
                              (s = void 0 === n ? {} : n),
                              t.abrupt(
                                "return",
                                (0, H.showModal)({
                                  content: ""
                                    .concat(i.trainTips.grabrate, "建议选择")
                                    .concat(s.title || "中速", "抢票，")
                                    .concat(
                                      s.speedPkgNums || 10,
                                      "元/人，将在系统维护时间过后帮您继续抢票。"
                                    ),
                                  showCancel: !0,
                                  cancelText: "取消",
                                  confirmText: "".concat(
                                    s.title || "中速",
                                    "抢票"
                                  ),
                                  success: function (t) {
                                    t.confirm &&
                                      e.submitGrab({
                                        speedGrabType: "default",
                                      });
                                  },
                                })
                              )
                            );
                          case 9:
                            return t.abrupt("return", e.goLogin12306());
                          case 10:
                            e.submitGrab(),
                              e.packageTrace(4, "挽留弹窗开始低速抢票");
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              submitGrab: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.speedGrabType,
                  i = void 0 === t ? "free" : t;
                if (
                  ((this.speedGrabType = i),
                  this.data.payTypeInfoV1 &&
                    "2" == this.data.payTypeInfoV1.signVersion)
                )
                  return (
                    this.setData({ showType: "update-pay-way" }),
                    void this.newUbtTrace(192117)
                  );
                this.setData({ showType: "" }), this.submit();
              },
              getHasBuyXProduct: function () {
                var e = this.data,
                  t = e.isGreenChannelChecked,
                  i = e.isSeatUpgradeChecked,
                  a = e.isSpecificallyGrabChecked,
                  n = e.specialPersonGrabType,
                  s = e.isSelectedBuyMember;
                return t || i || a || n > 0 || s;
              },
              showRecommendSpeedPop: function () {
                if (this.needInterceptToast) {
                  if (this.hasInterceptDrawer) return this.submitGrab();
                  if (this.getHasBuyXProduct()) return this.submitGrab();
                  var e,
                    t = this.data,
                    i = t.greenChannelInfo,
                    a = t.specialPersonGrabInterceptDrawerInfo,
                    n = t.seasonMemberInterceptDrawerInfo;
                  a && "grab24Hours" !== this.xbookShowedProductName
                    ? (this.setData({
                        showType: "specialPersonGrabInterceptDrawer",
                      }),
                      (this.hasInterceptDrawer = !0),
                      (e = 2))
                    : i &&
                      i.greenChannelProduct &&
                      "grabGreenChannel" !== this.xbookShowedProductName
                    ? (this.setData({
                        showType: "recommendGreenPop",
                        greenChannelStatus: 4,
                      }),
                      (this.hasInterceptDrawer = !0),
                      (e = 1))
                    : n && "memberForRob" !== this.xbookShowedProductName
                    ? (this.setData({
                        showType: "seasonMemberInterceptDrawer",
                      }),
                      (this.hasInterceptDrawer = !0),
                      (e = 0))
                    : this.submitGrab(),
                    e >= 0 &&
                      this.ubtTrace("s_trn_z_10650005126", {
                        exposureType: "actionbar",
                        bizKey: "z_grab_success_lanjie_actionbar_show",
                        type: e,
                      });
                } else this.submitGrab();
              },
              getGrabTicketHeat: function () {
                var e = this,
                  t = this.data,
                  i = t.aStation,
                  a = t.dStation,
                  n = t.otherDates,
                  s = (void 0 === n ? [] : n)[0];
                if (!s) return Promise.reject();
                var r = { departName: a, arriveName: i, departDate: s.dayStr };
                return (0, ie.Qx)(r)
                  .then(function (t) {
                    1 === t.resultCode &&
                      e.setData({ heatInfo: { count: t.count } });
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              },
              openCombineSeat: function (e) {
                return (0, M.Xbu)({ fromPage: 2, orderNumber: e })
                  .then(function (e) {
                    1 === (null == e ? void 0 : e.resultCode)
                      ? console.log("接受组合座出票方案成功")
                      : console.error(
                          "接受组合座出票方案失败",
                          e.resultMessage
                        );
                  })
                  .catch(function (e) {
                    console.error("接受组合座出票方案失败", e);
                  });
              },
              createGrabOrder: ne.Z.throttle(function () {
                var e = this;
                (0, H.showLoading)();
                var t = this.getCreateGrabOrderParams(),
                  i = function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return (0, H.showModal)(
                      e.resultMessage ||
                        "系统异常，提交订单失败。我们正在努力修复，请稍候再试。"
                    );
                  };
                return (0, ie.Ep)(t)
                  .then(
                    (function () {
                      var a = (0, u.Z)(
                        (0, d.Z)().mark(function a(n) {
                          return (0, d.Z)().wrap(
                            function (a) {
                              for (;;)
                                switch ((a.prev = a.next)) {
                                  case 0:
                                    if (1 != n.resultCode) {
                                      a.next = 20;
                                      break;
                                    }
                                    if (
                                      (e.selectedCombineSeat &&
                                        e.openCombineSeat(n.orderNumber),
                                      C.Z.orderLog("train_rob"),
                                      B.ET.robShareNavigateBackHome &&
                                        e.ubtTrace(106277, {
                                          openId: X.ZP.openid,
                                          orderNumber: n.orderNumber,
                                        }),
                                      (e._extraOrderType = n.extraOrderType),
                                      !n.isNeedPay || !v.default.isWechat)
                                    ) {
                                      a.next = 7;
                                      break;
                                    }
                                    return a.abrupt(
                                      "return",
                                      e._pay({
                                        orderNumber: n.orderNumber,
                                        OrderId: n.orderNumber,
                                      })
                                    );
                                  case 7:
                                    if (1002 != t.bookType) {
                                      a.next = 16;
                                      break;
                                    }
                                    return (
                                      (a.prev = 8),
                                      (a.next = 11),
                                      (0, M.hx)({
                                        fromPage: 2,
                                        orderNumber: n.orderNumber,
                                      })
                                    );
                                  case 11:
                                    a.next = 16;
                                    break;
                                  case 13:
                                    (a.prev = 13),
                                      (a.t0 = a.catch(8)),
                                      console.log(a.t0);
                                  case 16:
                                    e.checkZhongZhuanStore(n.orderNumber),
                                      xe
                                        ? e.navigateTo({
                                            url: F.ZP.getTrainGrabOrderDetailUrl(
                                              n.orderNumber,
                                              "&fromPage=grabratePage&isCreditPay=1"
                                            ),
                                          })
                                        : y().reLaunch({
                                            url: F.ZP.getTrainGrabOrderDetailUrl(
                                              n.orderNumber,
                                              "&fromPage=grabratePage&isCreditPay=1"
                                            ),
                                          }),
                                      (a.next = 26);
                                    break;
                                  case 20:
                                    if (1 !== n.errorCode) {
                                      a.next = 24;
                                      break;
                                    }
                                    return (
                                      (0, H.showToast)(
                                        n.resultMessage || "网络异常～"
                                      ),
                                      e.getGrabCouponInfo(!0),
                                      a.abrupt("return")
                                    );
                                  case 24:
                                    (0, H.hideLoading)(), i(n);
                                  case 26:
                                  case "end":
                                    return a.stop();
                                }
                            },
                            a,
                            null,
                            [[8, 13]]
                          );
                        })
                      );
                      return function (e) {
                        return a.apply(this, arguments);
                      };
                    })()
                  )
                  .catch(function () {
                    (0, H.hideLoading)(), i();
                  });
              }, 1500),
              getCreateGrabOrderParams: function () {
                var e,
                  t,
                  i = {},
                  a = this.data,
                  n = a.allPas,
                  s = void 0 === n ? [] : n,
                  r = a.freeChildren,
                  o = a.mobile,
                  c = void 0 === o ? "" : o,
                  d = a.payTypeInfoV1,
                  u = void 0 === d ? {} : d,
                  p = a.chosenTrainList,
                  h = void 0 === p ? [] : p,
                  m = a.otherTrainsSeatsArr,
                  b = void 0 === m ? [] : m,
                  g = a.dStation,
                  f = void 0 === g ? "" : g,
                  y = a.aStation,
                  w = void 0 === y ? "" : y,
                  S = a.otherDates,
                  v = void 0 === S ? [] : S,
                  T = a.isOpenWeiXinCreditPay,
                  N = a.isSelectedMemberVip,
                  P = void 0 !== N && N,
                  C = a.isInformalVip,
                  I = void 0 !== C && C,
                  k = a.speedSlider,
                  Z = void 0 === k ? {} : k,
                  V = a.isSelectedBuyMember,
                  x = void 0 !== V && V,
                  B = a.vipInfo,
                  _ = void 0 === B ? null : B,
                  D = a.seasonMemberShipDrawerInfo,
                  G = void 0 === D ? null : D,
                  A = a.isStudentVIP,
                  X = void 0 !== A && A,
                  M = a.selectedUniversity,
                  L = void 0 === M ? null : M,
                  R = a.priorityTicketRight,
                  z = void 0 === R ? null : R,
                  U = a.isAcceptPriorityTicketRight,
                  H = void 0 !== U && U,
                  O = a.grabSeatProductsShowType,
                  E = void 0 === O ? 0 : O,
                  j = a.robWindowNum,
                  q = void 0 === j ? 0 : j,
                  K = a.robRoadNum,
                  W = void 0 === K ? 0 : K,
                  Y = a.robBottomBedNum,
                  J = a.robBedNum,
                  Q = void 0 === J ? 0 : J,
                  $ = a.isRobBed,
                  ee = void 0 !== $ && $,
                  ie = a.isRobBottomBed,
                  ae = void 0 !== ie && ie,
                  se = a.isRobConsecutiveSeats,
                  re = void 0 !== se && se,
                  oe = a.isRobSameCarriage,
                  ce = void 0 !== oe && oe,
                  le = a.grabSeatProducts,
                  de = void 0 === le ? null : le,
                  ue = a.bookProcessType,
                  pe = void 0 === ue ? 0 : ue,
                  he = a.robSwitchType,
                  me = a.ticketOffsetTime,
                  be = a.greenChannelInfo,
                  ge = a.isGreenChannelChecked,
                  fe = a.isSeatUpgradeChecked,
                  ye = a.seatUpgradeInfo,
                  we = a.successRate,
                  Se = a.recommendSpeedInfo,
                  ve = a.speedPackInfo,
                  Te = a.repeatGrabOrder,
                  Ne = a.isSpecificallyGrabChecked,
                  Pe = a.specificallyGrabBannerInfo,
                  Ce = a.specialPersonGrabInfo,
                  Ie = a.specialPersonGrabType,
                  ke = a.couponList,
                  Ve = F.ZP.encode12306Account({
                    login12306Name: this.userName12306 || "",
                    login12306Pas: this.userPas12306 || "",
                  }),
                  xe = [],
                  Be = [];
                (i.mobile = c),
                  (i.contactMobile = c),
                  (i.productCodes = ""),
                  (i.bookType = 1001),
                  (i.userName = Ve.login12306Name),
                  (i.password = Ve.login12306Pas),
                  (i.bindCardFlag = 0),
                  (i.acceptBindCardFlag = 0),
                  (i.defaultSpeedSum = 0),
                  (i.ticketOffsetTime = me),
                  (i.successRate = we || 0);
                var _e = s.length;
                E > 0 &&
                  de &&
                  _e &&
                  (de.forEach(function (e) {
                    5 === e.productType && q > 0
                      ? (xe.push({ type: 5, num: q }),
                        e.typeFlag &&
                          Be.push({
                            typeFlag: e.typeFlag,
                            shelfId: e.shelfId,
                            goodsId: e.goodsId,
                            goodsNum: q,
                          }))
                      : 6 === e.productType && W > 0
                      ? (xe.push({ type: 6, num: W }),
                        e.typeFlag &&
                          Be.push({
                            typeFlag: e.typeFlag,
                            shelfId: e.shelfId,
                            goodsId: e.goodsId,
                            goodsNum: W,
                          }))
                      : 7 === e.productType && re
                      ? (xe.push({ type: 7, num: 1 }),
                        e.typeFlag &&
                          Be.push({
                            typeFlag: e.typeFlag,
                            shelfId: e.shelfId,
                            goodsId: e.goodsId,
                            goodsNum: 1,
                          }))
                      : 25 === e.productType && ce
                      ? (xe.push({ type: 25, num: 1 }),
                        e.typeFlag &&
                          Be.push({
                            typeFlag: e.typeFlag,
                            shelfId: e.shelfId,
                            goodsId: e.goodsId,
                            goodsNum: 1,
                          }))
                      : 8 === e.productType && ee
                      ? (xe.push({ type: 8, num: _e }),
                        e.typeFlag &&
                          Be.push({
                            typeFlag: e.typeFlag,
                            shelfId: e.shelfId,
                            goodsId: e.goodsId,
                            goodsNum: _e,
                          }))
                      : 8 === e.productType && Q > 0
                      ? (xe.push({ type: 8, num: Q }),
                        e.typeFlag &&
                          Be.push({
                            typeFlag: e.typeFlag,
                            shelfId: e.shelfId,
                            goodsId: e.goodsId,
                            goodsNum: Q,
                          }))
                      : 24 === e.productType &&
                        (ae
                          ? (xe.push({ type: 24, num: _e }),
                            e.typeFlag &&
                              Be.push({
                                typeFlag: e.typeFlag,
                                shelfId: e.shelfId,
                                goodsId: e.goodsId,
                                goodsNum: _e,
                              }))
                          : Y > 0 &&
                            (xe.push({ type: 24, num: Y }),
                            e.typeFlag &&
                              Be.push({
                                typeFlag: e.typeFlag,
                                shelfId: e.shelfId,
                                goodsId: e.goodsId,
                                goodsNum: Y,
                              })));
                  }),
                  xe.length > 0 &&
                    ((i.productList = xe),
                    Be.length > 0 && (i.treasuresGoods = Be))),
                  T && (i.bookType = 1002),
                  (i.passengerList = s.map(function (e) {
                    return L && "stu" === he
                      ? {
                          passengerName: e.pasName
                            ? e.pasName.trim().toUpperCase()
                            : e.CNName.trim().toUpperCase(),
                          passengerType:
                            3 != e.PassengerType
                              ? e.isChild
                                ? "儿童票"
                                : "成人票"
                              : e.convertStu || e.isStudentToAdult
                              ? "成人票"
                              : "学生票",
                          identityType: F.ZP.getCardType(parseInt(e.cardType)),
                          identityNo: e.isInvited
                            ? e.identityNoPass
                            : e.idcard.no.toUpperCase(),
                          passengerFlag: e.isInvited ? 3 : 2,
                          contactMobileNo: e.Mobile,
                          studentInfo: {
                            schoolName: L.cn,
                            schoolCode: L.code + "-" + L.sp,
                          },
                          expireDate: e.CardTimeLimit || "",
                          nationality: e.Nationality || "",
                          birthDay: e.Birthday || "",
                        }
                      : {
                          passengerName: e.pasName
                            ? e.pasName.trim().toUpperCase()
                            : e.CNName.trim().toUpperCase(),
                          passengerType:
                            3 != e.PassengerType
                              ? e.isChild
                                ? "儿童票"
                                : "成人票"
                              : e.convertStu || e.isStudentToAdult
                              ? "成人票"
                              : "学生票",
                          identityType: F.ZP.getCardType(parseInt(e.cardType)),
                          identityNo: e.isInvited
                            ? e.identityNoPass
                            : e.idcard.no.toUpperCase(),
                          passengerFlag: e.isInvited ? 3 : 2,
                          contactMobileNo: e.Mobile,
                          expireDate: e.CardTimeLimit || "",
                          nationality: e.Nationality || "",
                          birthDay: e.Birthday || "",
                        };
                  })),
                  (i.freePassengerList = r.map(function (e) {
                    var t = e.pasName,
                      i = void 0 === t ? "" : t,
                      a = e.IdentityNo,
                      n = void 0 === a ? "" : a,
                      s = e.isInvited,
                      r = void 0 !== s && s,
                      o = e.identityNoPass,
                      c = void 0 === o ? "" : o,
                      l = e.Mobile,
                      d = void 0 === l ? "" : l,
                      u = e.cardType,
                      p = void 0 === u ? "" : u;
                    return {
                      freeType: 1,
                      passengerName: i,
                      identityType: F.ZP.getCardType(parseInt(p)),
                      identityNo: r ? c : n,
                      contactMobileNo: d,
                      relatedPassportName: "",
                      relatedPassportNumber: "",
                    };
                  }));
                var De = h.map(function (e) {
                  var t = {
                    trainNumber: e.TrainNumber,
                    departStation: e.DepartStation,
                    arriveStation: e.ArriveStation,
                  };
                  return (
                    (t.departTime = e.DepartTime),
                    (t.arriveTime = e.ArriveTime),
                    (t.time = e.TimesCost),
                    (t.durationMinute = e.RunTime),
                    (!1 !== e.IsFastPass && !0 !== e.IsFastPass) ||
                      ((t.exchangeable = e.IsCanPointsPay ? 1 : 2),
                      (t.fastPass = e.IsFastPass ? 1 : 2),
                      (t.isJy = e.IsCanSilent ? 1 : 2)),
                    t
                  );
                });
                (i.trainInfo = {
                  trainNo: this.getTrainNums(h),
                  seatName: this.getSeatNames(b),
                  fromName: f,
                  toName: w,
                  fromDate: this.getFromDates(v),
                  mainFromTime: h[0].DepartTime,
                  mainToTime: h[0].ArriveTime,
                  trainStationInfos: De,
                }),
                  (i.nearTrainFlag = 0),
                  (i.crossStationFlag = 0),
                  (null === (e = this.chosenCrossStations) || void 0 === e
                    ? void 0
                    : e.length) > 0 &&
                    ((i.crossStationFlag = 1),
                    (i.crossStationInfos = this.chosenCrossStations.map(
                      function (e) {
                        var t = (0, l.Z)({}, e);
                        return (
                          (t.extraAmount = t.f_extraAmount),
                          (t.successRate = t.f_successRate),
                          t
                        );
                      }
                    ))),
                  (null === (t = this.promiseIntoCarCrossInfos) || void 0 === t
                    ? void 0
                    : t.length) > 0 &&
                    ((i.crossStationFlag = 1),
                    (i.crossStationInfos = [].concat(
                      this.promiseIntoCarCrossInfos,
                      i.crossStationInfos || []
                    )));
                var Ge = (ve.speedRange || "").split(",").map(function (e) {
                  return +e;
                });
                if (null != Z && Z.selectedItem) {
                  var Ae = Ge.indexOf(Z.selectedItem.speedPkgNums);
                  i.selectSpeed = Ae + 1;
                }
                if ("swellMoney" !== he)
                  if (X);
                  else if (P)
                    (i.productCodes = this.baseGoldGrabCode),
                      (i.speedSum = 0),
                      (i.autoRenew = !1);
                  else if (x && I) (i.speedSum = 0), (i.autoRenew = !1);
                  else if (
                    "stu" === he ||
                    "newGuest" === he ||
                    "aliGuest" === he ||
                    "certifiedStudent" === he
                  );
                  else {
                    var Xe = this.speedGrabType,
                      Me = void 0 === Xe ? "free" : Xe,
                      Le = 0;
                    if ("free" === Me) Le = 0;
                    else if ("nonFree" === Me)
                      Z.selectedItem && (Le = Z.selectedItem.speedPkgNums);
                    else if ("recommendSpeed" === Me) {
                      Le = (null == Se ? void 0 : Se.speedPkgNums) || 0;
                      var Re = Ge.indexOf(Le);
                      i.selectSpeed = Re + 1;
                    } else if ("default" === Me && Z.defaultItem) {
                      Le = Z.defaultItem.speedPkgNums;
                      var Fe = Ge.indexOf(Le);
                      i.selectSpeed = Fe + 1;
                    }
                    (i.speedSum = Le), (i.autoRenew = !1);
                  }
                if (
                  (this.fromPage &&
                    (i.remark = "fromPage=".concat(this.fromPage)),
                  Te && this.fromPage
                    ? (i.remark = "fromPage="
                        .concat(this.fromPage, "|conflict:")
                        .concat(Te))
                    : Te && (i.remark = "conflict:".concat(Te)),
                  (i.candidateFlag = ""),
                  ne.Z.isNotEmptyObj(u) && (i.candidateFlag = u.candidateFlag),
                  (i.userAuth12306Status = this.userAuth12306Status || -1),
                  (i.trainNoCanCandidate = this.trainNoCanCandidate || 0),
                  x &&
                    "swellMoney" !== he &&
                    (G
                      ? (i.vipCode = G.cardCode)
                      : _ && _.code && (i.vipCode = _.code)),
                  L &&
                    (i.studentActivityInfo = {
                      name: L.cn,
                      code: L.code + L.sp,
                    }),
                  (i.abConfig = [
                    {
                      abKey: Ze ? "180403_zxhtl_jdhy" : "180417_zxtra_hydg",
                      abValue: "B",
                    },
                  ]),
                  x &&
                    !I &&
                    ((i.guaranteerAmount = this.claimAmount || 0),
                    (i.guaranteeCount = this.claimCount || 0)),
                  this.claimSecretAmount &&
                    (i.guaranteeSecretAmount = this.claimSecretAmount || ""),
                  !P &&
                    !ge &&
                    z &&
                    H &&
                    "stu" !== he &&
                    "certifiedStudent" !== he &&
                    "newGuest" !== he &&
                    "swellMoney" !== he &&
                    (i.priorityTicketRight = {
                      version: z.version || "",
                      expectTime: z.expectTime || "",
                    }),
                  Ce)
                ) {
                  if (Ie && 0 !== Ie) {
                    var ze = Ce.options.find(function (e) {
                        return e.type === Ie;
                      }),
                      Ue = i.productList || [],
                      He = { type: ze.type, num: _e };
                    ze.code && (He.code = ze.code),
                      Ue.push(He),
                      (i.productList = Ue),
                      ze.goodsInfo &&
                        ((ze.goodsInfo.goodsNum = _e),
                        Be.push(ze.goodsInfo),
                        (i.treasuresGoods = Be));
                  }
                } else if (Ne && Pe) {
                  var Oe = i.productList || [];
                  Oe.push({ type: 17, num: _e }), (i.productList = Oe);
                }
                if (
                  (!P &&
                    ge &&
                    be &&
                    ((i.speedSum = 0),
                    (i.autoRenew = !1),
                    (i.priorityTicketRight = null),
                    1 === be.type
                      ? (i.productCodes = be.greenChannelProduct.code)
                      : ((i.productCodes = ""),
                        i.productList || (i.productList = []),
                        i.productList.push({
                          type: 2 === be.type ? 9 : 10,
                          num: _e,
                          code: be.greenChannelProduct.code,
                        })),
                    be.goodsInfo &&
                      ((be.goodsInfo.goodsNum = _e),
                      Be.push(be.goodsInfo),
                      (i.treasuresGoods = Be))),
                  fe &&
                    ye &&
                    (i.productList || (i.productList = []),
                    i.productList.push({
                      num: _e,
                      code: ye.productCode,
                      type: ye.productType,
                      extInfo: {
                        effectiveDateTime: ye.effectiveDateTime,
                        upSeatName: ye.upSeatName,
                        secretInfo: ye.secretInfo,
                      },
                      salePrice: ye.salePrice,
                    }),
                    ye.goodsInfo &&
                      ((ye.goodsInfo.goodsNum = _e),
                      Be.push(ye.goodsInfo),
                      (i.treasuresGoods = Be))),
                  i.speedSum && ve.goodsInfo)
                ) {
                  var Ee = ve.goodsInfo;
                  (Ee.goodsNum = i.speedSum),
                    Be.push(Ee),
                    (i.treasuresGoods = Be);
                }
                this.trainViewModeType &&
                  (i.businessTag = this.trainViewModeType);
                var je = ((0, te.YE)(ke) || {}).chooseCouponList;
                return (
                  (null == je ? void 0 : je.length) > 0 &&
                    (i.useCouponDetailInfoList = je.map(function (e) {
                      return {
                        useCouponCode: e.couponCode,
                        promotionId: e.promotionId,
                      };
                    })),
                  (i.bookProcess = pe),
                  i
                );
              },
              _pay: function (e) {
                var t = this,
                  i = function (i) {
                    if ((t.checkZhongZhuanStore(e.orderNumber), 0 != i))
                      try {
                        (0, M.hx)({ fromPage: 2, orderNumber: e.orderNumber });
                      } catch (e) {
                        console.log(e);
                      }
                    var a = F.ZP.getTrainGrabOrderDetailUrl(
                      e.orderNumber,
                      "&fromPage=grabratePage"
                    );
                    xe ? y().navigateTo({ url: a }) : y().reLaunch({ url: a });
                  };
                U.ZP.doPayment({
                  business: "train",
                  orderNumber: e.orderNumber,
                })
                  .then(function () {
                    !(function (e) {
                      C.Z.getSubscribe(V.Z.TMPIDS)
                        .then(function (a) {
                          var n = a.mainSwitch,
                            s = a.unKnownList;
                          n && Array.isArray(s) && s.length > 0
                            ? (t.setData({ showSubscribeMask: !0 }),
                              C.Z.doSubscribe(s, "RobTicket_pay")
                                .then(function () {
                                  t.setData({ showSubscribeMask: !1 }), i(e);
                                })
                                .catch(function (a) {
                                  console.log(JSON.stringify(a)),
                                    t.setData({ showSubscribeMask: !1 }),
                                    i(e);
                                }))
                            : i(e);
                        })
                        .catch(function (a) {
                          t.setData({ showSubscribeMask: !1 }),
                            console.log(JSON.stringify(a)),
                            i(e);
                        });
                    })(1);
                  })
                  .catch(function () {
                    i(0);
                  });
              },
              goDetail: function (e) {
                this.checkZhongZhuanStore(e);
                var t = F.ZP.getTrainGrabOrderDetailUrl(e);
                xe ? this.navigateTo({ url: t }) : y().reLaunch({ url: t });
              },
              checkZhongZhuanStore: function (e) {
                if (B.ET.train && 1 === B.ET.train.bookxCreateType)
                  try {
                    var t = y().getStorageSync("separateOrderIds") || [],
                      i =
                        y().getStorageSync("separateOrderTrainInfoRelated") ||
                        [],
                      a = B.ET.train.fromDetailId;
                    if (a) {
                      var n = t.findIndex(function (e) {
                        return e === a;
                      });
                      n > -1 &&
                        (t.splice(n, 1),
                        y().setStorageSync("separateOrderIds", t));
                      var s = i.findIndex(function (e) {
                        return e.oidRelated === a;
                      });
                      s > -1 &&
                        (i.splice(s, 1),
                        y().setStorageSync("separateOrderTrainInfoRelated", i));
                    } else {
                      if (t.length > 5) {
                        var r = t.shift(),
                          o = i.findIndex(function (e) {
                            return e.oidRelated === r;
                          });
                        o >= 0 && i.splice(o, 1);
                      }
                      (B.ET.trainRelated.oidRelated = e),
                        t.push(e),
                        i.push(
                          (0, h.Z)(
                            (0, h.Z)({}, B.ET.trainRelated),
                            {},
                            { zhongZhuanTrainInfo: B.ET.zhongZhuanTrainInfo }
                          )
                        ),
                        y().setStorageSync("separateOrderIds", t),
                        y().setStorageSync("separateOrderTrainInfoRelated", i),
                        (B.ET.trainRelated = null),
                        (B.ET.zhongZhuanTrainInfo = null);
                    }
                  } catch (e) {
                    console.log(e);
                  }
              },
              hidePayWay: function () {
                this.setData({ showType: "" });
              },
              payFirst: function () {
                this.submitOrder(), this.hidePayWay();
              },
              upperPayScore: function () {
                this.newUbtTrace(192118),
                  this.setData({ showType: "" }),
                  (this.isSignCreditPay = !0),
                  y().navigateToMiniProgram({
                    appId: "wxd8f3793ea3b935b8",
                    path: "pages/use/enable",
                    extraData: (0, h.Z)({}, this.data.navigatorExtraData),
                    success: function () {},
                    fail: function () {},
                    complete: function () {},
                  });
              },
              payLater: function () {
                this.data.payTypeInfoV1 &&
                "2" == this.data.payTypeInfoV1.signVersion
                  ? this.setData({ showType: "update-pay-way" })
                  : this.hidePayWay();
              },
              getCreditPayExtraData: function (e) {
                var t = this,
                  i = {
                    payType: "weixinapp",
                    source: "train",
                    version: "0" == e.signVersion ? 0 : 1,
                  };
                return (
                  console.log("getCreditPayExtraData start", i),
                  (0, ie.Ti)(i, {
                    extension: [
                      { name: "appId", value: "5115" },
                      { name: "partner", value: v.default.partner },
                    ],
                  })
                    .then(function (i) {
                      if (
                        (console.log("getCreditPayExtraData result", i),
                        i.resultCode && 1 === i.resultCode)
                      ) {
                        var a =
                          "0" == e.signVersion
                            ? JSON.parse(i.signInfo)
                            : { apply_permissions_token: i.signInfo };
                        (a.path =
                          "0" == e.signVersion
                            ? "pages/index/index"
                            : "pages/use/enable"),
                          (a.signAppid =
                            "0" == e.signVersion
                              ? "wxbd687630cd02ce1d"
                              : "wxd8f3793ea3b935b8"),
                          console.log("navigatorExtraData", a),
                          t.setData({ navigatorExtraData: a });
                      }
                    })
                    .catch(function (e) {
                      return console.log(e);
                    })
                );
              },
              signedCreditPay: function (e) {
                var t = this;
                (0, H.showLoading)();
                var i = e.referrerInfo,
                  a = i.appId,
                  n = i.extraData;
                if (
                  (console.error("signedCreditPay start ", e),
                  "wxbd687630cd02ce1d" !== a && "wxd8f3793ea3b935b8" != a)
                )
                  return (0, H.hideLoading)();
                this.signedCreditPayTimer = setTimeout(function () {
                  return void 0 === n || void 0 === n.return_code
                    ? t
                        .getGrabOrderPayTypeV1Info()
                        .then(function () {
                          return (
                            (0, H.hideLoading)(),
                            t.data.isOpenWeiXinCreditPay
                              ? ((0, H.showToast)("开通成功"),
                                void t.submitOrder())
                              : (0, H.showToast)("开通失败")
                          );
                        })
                        .catch(function () {
                          (0, H.hideLoading)(), (0, H.showToast)("开通失败");
                        })
                    : "SUCCESS" == n.return_code
                    ? ((0, H.showToast)("开通成功"), void t.submitOrder())
                    : void (0, H.showToast)("开通失败");
                }, 1500);
              },
              goSign: function () {
                this.isSignCreditPay = !0;
              },
              cancelSelectedSpeed: function () {
                this.setData({ showType: "", isShowSpeedSlider: !1 }),
                  this.speedSliderSetLevel(this.tmpSpeedIndex);
              },
              confirmSelectedSpeed: function () {
                this.newUbtTrace(201266),
                  this.setData({
                    showType: "",
                    isShowSpeedSlider: !1,
                    isSpeedChanged: !0,
                  });
              },
              upSpeedSlider: function () {
                var e,
                  t = this.data.speedSlider,
                  i = t.index,
                  a = i;
                i <
                  ((null == t || null === (e = t.items) || void 0 === e
                    ? void 0
                    : e.length) || 0) -
                    1 && a++,
                  this.speedSliderSetLevel(a);
              },
              handleSpeedPoint: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                this.setData({ speedPointDefaultCount: e.defaultCount });
              },
              handleSpecificallyGrabV2: function (e) {
                if (e) {
                  var t;
                  this.setData({
                    specialPersonGrabInfo:
                      {
                        title: e.expandTitle,
                        hotTitle: e.hotTitle,
                        options: e.optionsInfo || [],
                        productDescList: e.productDescList || [],
                      } || null,
                  }),
                    (this.specialPersonGrabBannerTitle = e.bannerTitle || ""),
                    (this.specialPersonGrabTypeList = e.optionsInfo || []);
                  var i =
                    null === (t = this.specialPersonGrabTypeList) ||
                    void 0 === t
                      ? void 0
                      : t.find(function (e) {
                          return "grabbingTicketDay" === e.code;
                        });
                  i && this.setData({ specialPersonGrabType: i.type });
                } else
                  this.setData({ specialPersonGrabInfo: null }),
                    (this.specialPersonGrabBannerTitle = ""),
                    (this.specialPersonGrabTypeList = []);
              },
              getSpecificallyGrabBannerTitle: function () {
                var e,
                  t,
                  i,
                  a = this.data.specialPersonGrabType,
                  n = "",
                  s =
                    (null === (e = this.specialPersonGrabTypeList) ||
                    void 0 === e
                      ? void 0
                      : e.find(function (e) {
                          return e.type === a;
                        })) || {};
                return (
                  s.type > 0
                    ? (n =
                        this.specialPersonGrabBannerTitle +
                        ((null === (t = this.specialPersonGrabTypeList) ||
                        void 0 === t ||
                        null ===
                          (i = t.find(function (e) {
                            return e.type === a;
                          })) ||
                        void 0 === i
                          ? void 0
                          : i.title) || ""))
                    : 0 === s.type && (n = s.title),
                  n
                );
              },
              onSpecialPersonGrabTypeChange: function (e) {
                this.setData({ specialPersonGrabType: e }), this.resetPrice();
              },
              handleSpecificallyGrab: function (e) {
                e
                  ? (e.nightGrabSpecificallyBanner &&
                      this.ubtTrace(208753, {
                        exposureType: "normal",
                        bizKey: "z_grab_success_24h_zrq_modelue_show",
                      }),
                    this.setData({
                      specificallyGrabBannerInfo:
                        e.nightGrabSpecificallyBanner || null,
                      specificallyGrabDrawerInfo:
                        e.nightGrabSpecificallyToast || null,
                    }))
                  : this.setData({
                      specificallyGrabBannerInfo: null,
                      specificallyGrabDrawerInfo: null,
                    });
              },
              getGrabProductBannerContent: function () {
                var e = this.data,
                  t = e.isXbookProductType,
                  i = e.seasonMemberShipBannerInfo,
                  a = e.isSpecificallyGrabChecked,
                  n = e.isSelectedBuyMember,
                  s = e.isGreenChannelChecked,
                  r = e.greenChannelInfo,
                  o = "普通抢票";
                return (
                  "multiplySpecialPersonGrab" === t
                    ? (o = this.getSpecificallyGrabBannerTitle())
                    : "singleSpecialPersonGrab" === t
                    ? (o = a ? "24小时专人抢" : "未开启24小时专人抢")
                    : "memberGrab" === t
                    ? null != i &&
                      i.vipReleatedRightEntity &&
                      (o = n
                        ? this.vipSelectedDesc || ""
                        : this.vipNoSelectedDesc || "")
                    : "greenChannelGrab" === t &&
                      r &&
                      r.greenChannelProduct &&
                      (o = s
                        ? r.greenChannelProduct.grabProductName || "安心抢票享"
                        : "未开启安心抢票"),
                  o
                );
              },
              onGrabProductBannerClick: function () {
                var e = this.data,
                  t = e.isXbookProductType,
                  i = e.isSelectedBuyMember,
                  a = e.isSpecificallyGrabChecked,
                  n = e.isGreenChannelChecked;
                "multiplySpecialPersonGrab" === t
                  ? this.setData({
                      showType: "specialPersonGrabSelecterDrawer",
                    })
                  : "singleSpecialPersonGrab" === t
                  ? this.setData({
                      showType: "specificallyGrabDrawer",
                      specificallyGrabDrawerStatus: a ? 2 : 3,
                    })
                  : "memberGrab" === t
                  ? this.setData({
                      showType: "seasonMemberShipDrawer",
                      seasonMemberShipDrawerStatus: i ? 2 : 1,
                    })
                  : "greenChannelGrab" === t &&
                    this.setData({
                      showType: "recommendGreenPop",
                      greenChannelStatus: n ? 5 : 2,
                    });
              },
              getFromDates: function (e) {
                var t = "";
                return Array.isArray(e) && e.length > 0 && (t = e.join(",")), t;
              },
              getTrainNums: function (e) {
                var t = "";
                return (
                  Array.isArray(e) &&
                    e.length > 0 &&
                    (t = e
                      .map(function (e) {
                        return e.TrainNumber;
                      })
                      .join(",")),
                  t
                );
              },
              getSeatNames: function (e) {
                var t = "";
                return (
                  Array.isArray(e) &&
                    e.length > 0 &&
                    (t = e
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return e.SeatName;
                      })
                      .join(",")),
                  t
                );
              },
              getPassengers: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = [];
                return (
                  e.forEach(function (e) {
                    var i = e.pasName,
                      a = e.PassengerType,
                      n = e.IdentityType,
                      s = e.IdentityNo;
                    t.push({
                      passengerName: i,
                      passengerType: a,
                      identityType: n,
                      identityNo: s,
                    });
                  }),
                  t
                );
              },
              getSign: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = "",
                  i = [
                    "passengers",
                    "extendInfo",
                    "nearTrainExtend",
                    "head",
                    "sign",
                  ],
                  a = "hsk5lb6550vraebu82ovwsslg2o4enm1";
                Object.keys(e)
                  .sort()
                  .forEach(function (a) {
                    i.includes(a) || (t += "".concat(a, "=").concat(e[a], "&"));
                  }),
                  (t = t.substring(0, t.length - 1));
                var n = O.Z.MD5(t).toLowerCase();
                return (n = O.Z.MD5("".concat(a).concat(n)).toLowerCase());
              },
              getGrabSuccessRateForSuccessPage: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.isBuyPackage,
                  i = void 0 === t || t,
                  a = e.isBuyDefaultPackage,
                  n = void 0 !== a && a,
                  s = e.canShowBuyMemberSucRate,
                  r = void 0 !== s && s,
                  o = e.isRecommendPackage,
                  c = void 0 !== o && o;
                try {
                  var l = this.data,
                    d = l.isSelectedMemberVip,
                    u = void 0 !== d && d,
                    p = l.isSelectedBuyMember,
                    h = void 0 !== p && p,
                    m = l.isInformalVip,
                    b = void 0 !== m && m,
                    g = l.isStudentVIP,
                    f = void 0 !== g && g,
                    y = l.recommendSpeedInfo,
                    w = l.speedSlider,
                    S = l.speedPointDefaultCount,
                    v = l.basicSuccessRate,
                    T = l.CrossStationGrabTicketInfoList,
                    N = void 0 === T ? [] : T,
                    P = l.otherTrainsSeatsArr,
                    C = l.canBuyMember,
                    I = void 0 !== C && C,
                    k = l.vipInfo,
                    Z = void 0 === k ? null : k,
                    V = l.seasonMemberShipBannerInfo,
                    x = l.speedFactor,
                    B = void 0 === x ? 1 : x,
                    _ = l.robSwitchType,
                    D = void 0 !== _ && _,
                    G = 0;
                  (D && "aliGuest" !== D) ||
                    ((G =
                      f || u || (h && b) || (r && I && (Z || V))
                        ? 50
                        : w && w.selectedItem && w.selectedItem.speedPkgNums),
                    i
                      ? n
                        ? (G = w.defaultItem.speedPkgNums)
                        : c && (G = (null == y ? void 0 : y.speedPkgNums) || 0)
                      : (G = 0)),
                    ("stu" !== D &&
                      "certifiedStudent" !== D &&
                      "newGuest" !== D &&
                      "swellMoney" !== D) ||
                      (G = w.items[3].speedPkgNums);
                  var A = {};
                  (A.defaultSpeedpackCount = S),
                    (A.currentPackageNum = G),
                    (A.speedFactor = B || 1),
                    (A.goldVipRight = {}),
                    (A.isUseGoldGrabToken = !1),
                    (A.basicSuccessRate = v),
                    (A.acceptNoseat = !1),
                    (A.selectedCrossStations = N.filter(function (e) {
                      return e.isCrossStationGrabCheckoutSelected;
                    }).concat(this.promiseIntoCarCrossInfos || [])),
                    (A.monitor = {
                      seatNames: P.filter(function (e) {
                        return e.selected;
                      })
                        .map(function (e) {
                          return e.SeatName;
                        })
                        .join(","),
                    }),
                    (A.acceptNearTrain = 0),
                    (A.nearTrainStartTime = Ve.indexOf(Ve[0])),
                    (A.nearTrainEndTime = Ve.indexOf(Ve[Ve.length - 1]));
                  var X = 0,
                    M = function (e, t) {
                      e || (X = t.currentSuccessRate);
                    };
                  return re(A, M), X;
                } catch (e) {
                  return 0;
                }
              },
              load12306FromStore: function () {
                if (ae.WG.get()) {
                  var e = ae.WG.get().bind12306 || {};
                  (this.userName12306 = e.name || ""),
                    (this.userPas12306 = e.pwd || "");
                }
              },
              judgeHasPreTrain: function () {
                var e = this.data,
                  t = e.chosenTrainList,
                  i = void 0 === t ? [] : t,
                  a = e.otherDates,
                  n = void 0 === a ? [] : a;
                if (Array.isArray(i)) {
                  var s = n
                      .map(function (e) {
                        return k()(e).valueOf();
                      })
                      .sort(function (e, t) {
                        return e < t;
                      })
                      .shift(),
                    r = new Date().getTime(),
                    o = Math.abs(s - r),
                    c = Math.floor(o / 864e5);
                  i.find(function (e) {
                    return e.PreSaleDay >= 0 && e.PreSaleDay <= c;
                  }) && this.setData({ hasPreTrain: !0 });
                }
              },
              getGrabOrderPayTypeV1Info: function () {
                var e = this,
                  t = this.getPayTypeV1Params();
                return (0, ie.UQ)(t)
                  .then(function (t) {
                    if (1 == t.resultCode) {
                      var i = (0, l.Z)({}, t);
                      console.log("getGrabOrderPayTypeV1Info result ", t),
                        (i.isOpenCreditPay && "2" != i.signVersion) ||
                          e.getCreditPayExtraData(i),
                        e.setData({
                          payTypeInfoV1: i,
                          isOpenWeiXinCreditPay: i.isOpenCreditPay,
                        }),
                        e.handleBookTypeV1();
                    }
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              },
              handleBookTypeV1: function () {
                var e = this.data.payTypeInfoV1,
                  t = (void 0 === e ? {} : e).bookType || [],
                  i =
                    t.find(function (e) {
                      return 1001 == e.type;
                    }) || {},
                  a =
                    t.find(function (e) {
                      return 1002 == e.type;
                    }) || {};
                this.setData({ prePayInfoV1: i, creditPayInfoV1: a });
              },
              getPayTypeV1Params: function () {
                var e,
                  t = this.data,
                  i = t.mobile,
                  a = void 0 === i ? "" : i,
                  n = t.jLSuccessRate,
                  s = void 0 === n ? "" : n,
                  r = t.allPas,
                  o = void 0 === r ? [] : r,
                  c = t.speedSlider,
                  l = void 0 === c ? {} : c,
                  d = t.hasPreTrain,
                  u = void 0 !== d && d,
                  p = t.isSelectedBuyMember,
                  h = t.vipInfo,
                  m = void 0 === h ? {} : h,
                  b = t.seasonMemberShipDrawerInfo,
                  g = void 0 === b ? {} : b,
                  f = 0,
                  y =
                    (null === (e = l.selectedItem) || void 0 === e
                      ? void 0
                      : e.speedPkgNums) || 0;
                y > 0 && o.length > 0 && (f = y * o.length);
                var w = this.getPayTypePasListV1(),
                  S = this.getPayTypeFromDateV1(),
                  v = {
                    mobile: a,
                    userName: this.userName12306 || "",
                    speedTotalSum: f,
                    resignFlag: 0,
                    version: "1.0",
                    departDates: S,
                    successRate: s || 0,
                    passengerList: w,
                    userAuth12306Status: this.userAuth12306Status
                      ? this.userAuth12306Status
                      : -1,
                    trainNoCanCandidate: this.trainNoCanCandidate
                      ? this.trainNoCanCandidate
                      : 0,
                    vipCode:
                      (p &&
                        ((null == g ? void 0 : g.cardCode) ||
                          (null == m ? void 0 : m.code))) ||
                      "",
                  };
                return u && (v.bookingFlag = "pre"), v;
              },
              getPayTypeFromDateV1: function () {
                var e = "",
                  t = this.data.otherDates,
                  i = void 0 === t ? [] : t;
                return ne.Z.isArray(i) && i.length > 0 && (e = i.join(",")), e;
              },
              getPayTypePasListV1: function () {
                var e = [],
                  t = this.data,
                  i = t.allPas,
                  a = void 0 === i ? [] : i,
                  n = t.mobile,
                  s = void 0 === n ? "" : n;
                return (
                  ne.Z.isArray(a) &&
                    a.length > 0 &&
                    (e = a.map(function (e) {
                      var t = e.pasName,
                        i = void 0 === t ? "" : t,
                        a = e.CNName,
                        n = void 0 === a ? "" : a,
                        r = e.IsSelf,
                        o = void 0 !== r && r,
                        c = e.IdentityNo,
                        l = void 0 === c ? "" : c,
                        d = e.IdentityType,
                        u = void 0 === d ? "" : d;
                      return {
                        mobile: s,
                        name: i ? i.trim() : n.trim(),
                        idCardNo: l,
                        cardType: F.ZP.getCardType(parseInt(u)),
                        isSelf: o,
                      };
                    })),
                  e
                );
              },
              packageTrace: function (e, t) {
                this.ubtTrace(103283, { c: e, msg: t });
              },
              getSchoolSpeed: function () {
                var e = this,
                  t = this.data.selectedUniversity;
                if (t) {
                  (0, H.showLoading)();
                  var i = {
                    schoolCode: t.code + t.sp,
                    partner: v.default.partner,
                  };
                  return (0, ie.bP)(i)
                    .then(function (t) {
                      if (1 === t.resultCode) {
                        var i = t.speedList,
                          a = void 0 === i ? [] : i,
                          n = 3 === a[0].type;
                        if (
                          (e.setData({
                            studentActivitySpeedList: a,
                            isShowStudentChannel: 3 === a[0].type,
                            isStudentVIP: n,
                          }),
                          n)
                        ) {
                          var s = "#F0C66F";
                          e.setNavigationBarColor(s),
                            (0, H.setBackgroundColor)(s);
                        }
                      }
                    })
                    .catch(function (e) {
                      return console.log(e);
                    })
                    .finally(function () {
                      return (0, H.hideLoading)();
                    });
                }
              },
              getUserBindAccount: function () {
                var e = this;
                return (0, M.USE)()
                  .then(function (t) {
                    console.log(
                      "grabrate获取绑定12306账号getUserBindAccount res ==> ",
                      t
                    ),
                      1 !== t.resultCode ||
                      (t.accounts &&
                        (!Array.isArray(t.accounts) || 0 !== t.accounts.length))
                        ? (e.isUserBindAccount = !0)
                        : (e.isUserBindAccount = !1);
                  })
                  .catch(function (t) {
                    console.log(t), (e.isUserBindAccount = !0);
                  });
              },
              goLogin12306: function () {
                var e = this.data.speedSlider,
                  t = (void 0 === e ? {} : e).defaultItem,
                  i = void 0 === t ? {} : t;
                (this.goLogin12306H5PackageName = "开始"
                  .concat(i.title, "抢票(¥")
                  .concat(i.speedPkgNums, "/人)")),
                  (this.goLogin12306H5Package = ""),
                  (this.goLogin12306H5Type = 2),
                  this.goLogin12306H5();
              },
              goLogin12306H5: function () {
                var e = this,
                  t = this.userName12306 || "",
                  i = this.userPas12306 || "",
                  a = "https://"
                    .concat(
                      v.default.h5domain,
                      "/webapp/train/activity/ztrip-train-12306/?partner="
                    )
                    .concat(
                      v.default.partner,
                      "#/login?from=grabrate&userName="
                    )
                    .concat(t, "&loginPW=")
                    .concat(i, "&type=")
                    .concat(this.goLogin12306H5Type || "", "&packageName=")
                    .concat(
                      encodeURIComponent(this.goLogin12306H5PackageName || "")
                    );
                A.Z.twebview({
                  data: {
                    url: a,
                    bridgeIns: function (t) {
                      if (
                        (console.log("grabrate webviewCB e = ", t),
                        Array.isArray(t.detail.data))
                      ) {
                        var i = t.detail.data;
                        L.Tq.call(e, i);
                        var a = (0, c.Z)(i, 1)[0],
                          n = a.userName,
                          s = void 0 === n ? "" : n,
                          r = a.loginPW,
                          o = void 0 === r ? "" : r,
                          l = a.enableVip;
                        void 0 !== l && l
                          ? e.submitGrab({ speedGrabType: "nonFree" })
                          : s && o && e.submitGrab();
                      }
                    },
                    needLogin: !0,
                  },
                });
              },
              queryConfig: function () {
                var e = this;
                return (0, G.fu)({ ConfigKey: "tieyou_wx_grabrate_key" })
                  .then(function (t) {
                    if (t.ConfigInfo && t.ConfigInfo.Content) {
                      var i = JSON.parse(t.ConfigInfo.Content);
                      (e.isBind12306Config = 1 === i.bind12306),
                        e.setData({
                          isShowCrossStationFlag: 1 === i.openCrossStation,
                        });
                    }
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              },
              getConfig: function () {
                var e = this;
                return (0, u.Z)(
                  (0, d.Z)().mark(function t() {
                    var i, a, n, s, r, o;
                    return (0, d.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (i = {
                                  keys: ["mini-fe-train-speedpack-change-tip"],
                                }),
                                (t.next = 4),
                                (0, G.SZ)(i)
                              );
                            case 4:
                              1 === (a = t.sent).resultCode &&
                                ((s = (a || {}).configDataList),
                                (r =
                                  null ===
                                    (n = (void 0 === s ? [] : s).find(function (
                                      e
                                    ) {
                                      return (
                                        "mini-fe-train-speedpack-change-tip" ===
                                        e.key
                                      );
                                    })) || void 0 === n
                                    ? void 0
                                    : n.data[Ze ? "tieyou" : "zhixing"]) &&
                                  r.isOpen &&
                                  r.imgUrl &&
                                  ((o = r.imgUrl),
                                  e.setData({
                                    speedPackChangeTipImage:
                                      o ||
                                      "https://images3.c-ctrip.com/ztrip/train_bin/22-04/gaimingtanchuang/img_tc_zhixingxcx@3x.png",
                                  }))),
                                (t.next = 11);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(0)),
                                console.log(t.t0);
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
              openBuyMemberPop: function () {
                var e = this.data.isInformalVip;
                e ? this.newUbtTrace(206053) : this.newUbtTrace(206059),
                  this.setData({ showType: "show-member-pop" }),
                  e ? this.newUbtTrace(206055) : this.newUbtTrace(206061),
                  this.getGrabOrderPayTypeV1Info();
              },
              changeBuyMember: function (e) {
                var t = this.data,
                  i = t.vipInfo,
                  a = t.isInformalVip;
                if (
                  (t.isShowSeasonMember ||
                    (this.ubtTrace(208755, {
                      bizKey: "z_success_grab_applet_vip_modeule_click",
                    }),
                    this.ubtTrace(215824, {
                      bizKey: "vipSaleModuleShow",
                      terminaltype: "Applets",
                      line: "GRAB",
                      cardCode: null == i ? void 0 : i.code,
                      scene: "grabSuccessRate",
                      selectedType: e ? "T" : "F",
                      clickType: "getReserve",
                    })),
                  e)
                )
                  return (
                    a ? this.newUbtTrace(206052) : this.newUbtTrace(206058),
                    this.getGrabOrderPayTypeV1Info(),
                    void this.chooseBuyMember()
                  );
                a ? this.newUbtTrace(206054) : this.newUbtTrace(206060);
                var n = this.data,
                  s = n.isSelectedMemberVip,
                  r = void 0 !== s && s,
                  o = n.goldGrabInfo,
                  c = void 0 === o ? null : o;
                c && c.goldGrabNum > 0
                  ? this.setData({
                      isSelectedBuyMember: !1,
                      goldGrabNumShown: c.goldGrabNum,
                      memberName: this.baseMemberName,
                      memberTagClass: this.baseMemberTagClass,
                      speedFactor: this.baseSpeedFactor,
                    })
                  : (this.setData({
                      isSelectedBuyMember: !1,
                      isSelectedMemberVip: !1,
                      goldGrabNumShown: 0,
                      memberName: this.baseMemberName,
                      memberTagClass: this.baseMemberTagClass,
                      speedFactor: this.baseSpeedFactor,
                    }),
                    (r = !1)),
                  a && ((r = !1), this.setData({ isSelectedMemberVip: !1 })),
                  r ||
                    this.setNavigationBarColor(
                      "".concat(Ze ? "#3C4365" : "#0066E6")
                    ),
                  this.resetPrice(),
                  this.getGrabOrderPayTypeV1Info();
              },
              onConfirmBuyMember: function () {
                this.data.isInformalVip
                  ? this.newUbtTrace(206056)
                  : this.newUbtTrace(206062),
                  this.chooseBuyMember();
              },
              chooseBuyMember: function () {
                var e = this.data,
                  t = e.vipRightPriceMerge,
                  i = void 0 === t ? {} : t,
                  a = e.seasonMemberShipBannerInfo,
                  n = void 0 === a ? {} : a,
                  s = e.goldGrabInfo,
                  r = void 0 === s ? null : s,
                  o = e.isInformalVip,
                  c = 0;
                if ((r && r.goldGrabNum > 0 && (c = r.goldGrabNum), o))
                  this.setData({
                    isSelectedBuyMember: !0,
                    showType: "",
                    goldGrabNumShown: c,
                    memberName: "铂金",
                    memberTagClass: "bojin",
                    speedFactor: this.platinumSpeedFactor,
                    isGreenChannelChecked: !1,
                  }),
                    this.resetPrice(),
                    this.setVIPBackground();
                else {
                  var l;
                  if (n)
                    c =
                      c +
                        (null === (l = n.vipReleatedRightEntity) || void 0 === l
                          ? void 0
                          : l.sendGrabTokenCount) || 3;
                  else if (i) {
                    var d = (i.trainRight || {}).grabToken;
                    if (d && d.count) {
                      var u = Number.parseInt(d.count);
                      "number" == typeof u && u > 0 && (c += u);
                    }
                  }
                  this.setData({
                    isSelectedBuyMember: !0,
                    showType: "",
                    goldGrabNumShown: c,
                    memberName: "铂金",
                    memberTagClass: "bojin",
                    speedFactor: this.platinumSpeedFactor,
                  }),
                    c > 0 &&
                      (this.setData({ isSelectedMemberVip: !0 }),
                      this.setData({ isGreenChannelChecked: !1 }),
                      this.resetPrice(),
                      this.setVIPBackground());
                }
                this.getGrabOrderPayTypeV1Info();
              },
              calBuyMemberSucRate: function () {
                try {
                  var e = this.getGrabSuccessRateForSuccessPage({
                    canShowBuyMemberSucRate: !0,
                  });
                  e && this.setData({ buyMemberSucRate: (100 * e).toFixed(1) });
                } catch (e) {}
              },
              isAllStudentTicket: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
                return e.every(function (e) {
                  return (
                    3 == e.PassengerType && !e.convertStu && !e.isStudentToAdult
                  );
                });
              },
              getPackageInfo: function (e) {
                var t = this,
                  i = this.data,
                  a = i.mobile,
                  n = void 0 === a ? "" : a,
                  s = i.allPas,
                  r = void 0 === s ? [] : s,
                  o = i.basicSuccessRate,
                  c = void 0 === o ? 0 : o,
                  l = i.dStation,
                  d = void 0 === l ? "" : l,
                  u = i.aStation,
                  p = void 0 === u ? "" : u,
                  h = i.chosenTrainList,
                  m = void 0 === h ? [] : h,
                  b = i.otherDates,
                  g = void 0 === b ? [] : b,
                  f = i.otherTrainsSeatsArr,
                  y = void 0 === f ? [] : f,
                  w = [];
                if (Array.isArray(r) && r.length > 0) {
                  var S = { 1: "成人票", 2: "儿童票", 3: "学生票" };
                  w = r.map(function (e) {
                    return {
                      passengerName: e.pasName,
                      passengerType: S["".concat(e.PassengerType)] || "成人票",
                      identityType: e.IdentityType,
                      identityNo: e.IdentityNo,
                    };
                  });
                }
                var v = {
                    fromNames: d,
                    toNames: p,
                    fromDates: this.getFromDates(g),
                    trainNums: this.getTrainNums(m),
                    seats: this.getSeatNames(y),
                    mainFromTime: ne.Z.formatTimeStamp(m[0].DepartTimeStamp),
                    seatMaxPrice: this.getSeatMaxPrice(y),
                    maxTicketPrice: this.getSeatMaxPriceV2(y),
                    earlyFromTime: this.getEarlyFromTime(m),
                  },
                  T = {
                    mobile: n,
                    passengers: w,
                    orderType: this.isPre ? 3 : 0,
                    successRate: c,
                    orderInfo: v,
                    userAuth12306Status: this.userAuth12306Status,
                    trainNoCanCandidate: this.trainNoCanCandidate,
                    grabSuccessAnxiousTime: "",
                  },
                  N = e || {},
                  P = N.goodsInfo,
                  C = N.grabBoxName,
                  I = N.code,
                  k = N.type;
                return (
                  P && ((T.treasureFlag = 1), (T.selectedGoods = [P])),
                  "grabGreenChannel" === C
                    ? (T.selectedProducts = [
                        { type: k, productCode: I, num: r.length },
                      ])
                    : "grab24Hours" === C && k
                    ? (T.specialPersonPriceCode = k)
                    : "grabSeatUpgrade" === C &&
                      (T.selectedProducts = [
                        { type: k, productCode: I, num: r.length },
                      ]),
                  (0, ie.Tq)(T)
                    .then(function (e) {
                      var i = e.resultCode,
                        a = e.priorityTicketRight,
                        n = e.bookProcessInfo,
                        s = void 0 === n ? {} : n,
                        o = e.wechatPayScoreInfo,
                        c = e.greenChannel,
                        l = e.speedPackInfo,
                        d = e.nightSpecificallyGrabInfo,
                        u = e.specialPersonGrabInfo,
                        p = e.nightGrabToast,
                        h = e.hotelCouponInfo;
                      if ((console.log("wechatPayScoreInfo", o), 1 === i)) {
                        if (
                          (t.handleSpeedPoint(e.speedPoint),
                          t.handleSpecificallyGrab(d),
                          t.handleSpecificallyGrabV2(u),
                          t.handleSpecialPersonGrabInterceptDrawer(p),
                          a &&
                            Object.keys(a).length > 0 &&
                            (a.toast &&
                              (a.toast.descTitle &&
                                (a.toast.newDescTitle = ne.Z.convertStr(
                                  a.toast.descTitle
                                )),
                              a.toast.descSubTitle &&
                                (a.toast.newDescSubTitle = ne.Z.convertStr(
                                  a.toast.descSubTitle
                                ))),
                            t.setData({
                              priorityTicketRight: a,
                              isAcceptPriorityTicketRight:
                                !(!s || 0 !== s.bookProcess) && a.defaultOpen,
                            })),
                          s)
                        ) {
                          var m = "";
                          if (
                            (t.isAllStudentTicket(r) && 1 === s.bookProcess
                              ? (m = "stu")
                              : 2 === s.bookProcess || 3 === s.bookProcess
                              ? (m = "newGuest")
                              : 17 === s.bookProcess
                              ? (m = "aliGuest")
                              : 20 === s.bookProcess
                              ? (m = "certifiedStudent")
                              : 10 === s.bookProcess && (m = "swellMoney"),
                            "stu" === m ||
                              "newGuest" === m ||
                              "aliGuest" === m ||
                              "certifiedStudent" === m)
                          ) {
                            var b = s.buttonInfo,
                              g = s.toastInfo;
                            (t.newGuestToast = g),
                              t.setData({ newGuestButtonInfo: b });
                          }
                          var f =
                            "stu" !== m &&
                            "certifiedStudent" !== m &&
                            "newGuest" !== m &&
                            "swellMoney" !== m &&
                            t.data.isAcceptPriorityTicketRight;
                          t.setData({
                            bookProcessInfo: s,
                            bookProcessType: s.bookProcess || 0,
                            robSwitchType: m,
                            isAcceptPriorityTicketRight: f,
                          }),
                            t.promptAboutSwellMoney(),
                            t.promptAboutNewGuest(),
                            t.promptAboutStu(),
                            t.promptAboutAliGuest(),
                            o && t.setData({ wechatPayScoreInfo: o }),
                            "stu" === t.data.robSwitchType &&
                              s &&
                              s.welfareInfo &&
                              t.newUbtTrace(151867);
                        }
                        c &&
                          c.greenChannelEntrance &&
                          c.greenChannelProduct &&
                          c.greenChannelLowGrab &&
                          t.setData({
                            greenChannelInfo: c,
                            isGreenChannelChecked:
                              !!c.greenChannelEntrance.defaultOpen,
                          }),
                          l &&
                            ((t.couponPrices = l.couponPrices || []),
                            t.setData({ speedPackInfo: l })),
                          t.setData({ couponDescData: h });
                      }
                    })
                    .catch(function (e) {
                      return console.log(e);
                    })
                );
              },
              promptAboutSwellMoney: function () {
                var e = this.data.robSwitchType,
                  t = X.ZP.duid,
                  i =
                    -1 ===
                    (y().getStorageSync("canShowSwellMoney") || []).indexOf(t);
                "swellMoney" === e &&
                  i &&
                  this.setData({ showType: "swell-money-popup" });
              },
              promptAboutNewGuest: function () {
                var e = this.data,
                  t = e.bookProcessInfo,
                  i = e.robSwitchType,
                  a = t && t.passengerName ? t.passengerName : "";
                if (
                  -1 ===
                    (y().getStorageSync("cantNewGuestAcce") || []).indexOf(a) &&
                  !!a &&
                  "aliGuest" !== i
                )
                  return (
                    this.showCommonDialog({
                      title: "温馨提示",
                      content: '乘客 <Font color="#1A8CFF">'.concat(
                        t.passengerName,
                        "</Font> 曾在智行抢票成功无法享免费高速抢票，敬请谅解～"
                      ),
                      buttonName: "我知道了",
                    }),
                    void this.newUbtTrace(151770)
                  );
                "newGuest" === i &&
                  ((0, H.showToast)(this.newGuestToast || ""),
                  this.newUbtTrace(151724));
              },
              promptAboutAliGuest: function () {
                "aliGuest" === this.data.robSwitchType &&
                  (0, H.showToast)(this.newGuestToast || "");
              },
              promptAboutStu: function () {
                var e = this.data.robSwitchType;
                ("stu" !== e && "certifiedStudent" !== e) ||
                  (0, H.showToast)(this.newGuestToast || "");
              },
              closeCantNewGuestAccePrompt: function () {
                var e = this.data.bookProcessInfo,
                  t = e && e.passengerName ? e.passengerName : "",
                  i = y().getStorageSync("cantNewGuestAcce") || [];
                i.length > 10 ? (i.pop(), i.push(t)) : i.push(t),
                  y().setStorageSync("cantNewGuestAcce", i),
                  this.hideShowType();
              },
              closeSwellMoneyPopup: function () {
                this.setPopupShowStore("canShowSwellMoney"),
                  this.hideShowType();
              },
              setPopupShowStore: function (e) {
                var t = X.ZP.duid,
                  i = y().getStorageSync(e) || [];
                i.length > 10 ? (i.pop(), i.push(t)) : i.push(t),
                  y().setStorageSync(e, i);
              },
              hideShowType: function () {
                this.setData({ showType: "" });
              },
              submitWithActivity: function () {
                if (this.validateStuPsg()) {
                  if (X.ZP.auth && X.ZP.isLogin)
                    return v.default.isWechat &&
                      this.data.isOpenWeiXinCreditPay &&
                      this.data.payTypeInfoV1 &&
                      "2" == this.data.payTypeInfoV1.signVersion
                      ? (console.error(
                          "submitGrab",
                          "如果是信用付需要升级，在此处提示"
                        ),
                        void this.setData({ showType: "update-pay-way" }))
                      : this.submitOrder();
                  X.ZP.doLogin()
                    .then(function () {})
                    .catch(function (e) {
                      console.log(e);
                    });
                }
              },
              getSeatMaxPrice: function (e) {
                var t = 0;
                return (
                  Array.isArray(e) &&
                    e.length > 0 &&
                    (t = C._.max(
                      e
                        .filter(function (e) {
                          return e.selected;
                        })
                        .map(function (e) {
                          return e.ShowSeatPrice || e.SeatPrice;
                        })
                    )),
                  t
                );
              },
              getSeatMaxPriceV2: function (e) {
                var t = 0;
                return (
                  Array.isArray(e) &&
                    e.length > 0 &&
                    (t = C._.max(
                      e
                        .filter(function (e) {
                          return e.selected;
                        })
                        .map(function (e) {
                          return e.SeatPrice || e.ShowSeatPrice;
                        })
                    )),
                  t
                );
              },
              getEarlyFromTime: function (e) {
                var t = "";
                if (Array.isArray(e) && e.length > 0) {
                  var i = C._.min(
                    e.map(function (e) {
                      return e.DepartTimeStamp;
                    })
                  );
                  t = ne.Z.formatTimeStamp(i);
                }
                return t;
              },
              togglePriorityTicketRight: function () {
                var e = this.data,
                  t = e.isAcceptPriorityTicketRight,
                  i = e.priorityTicketRight;
                this.setData({
                  isAcceptPriorityTicketRight: !t,
                  showType:
                    !t && i.toast ? "show-priority-ticket-right-pop" : "",
                }),
                  this.resetPrice();
              },
              closePriorityTicketRightPop: function () {
                this.setData({ showType: "" });
              },
              newUbtTrace: function (e) {
                try {
                  this.ubtTrace(e, {
                    openId: X.ZP.openid || "",
                    userName: X.ZP.userName || "",
                    cid: X.ZP.cid || "",
                  });
                } catch (e) {
                  console.log(e);
                }
              },
              onClickGreenChannelPay: function () {
                this.submitGrab({ speedGrabType: "nonFreeGreen" });
              },
              onGreenChannelDrawerChecked: function (e) {
                this.setData({ isGreenChannelChecked: e }), this.resetPrice();
              },
              onGreenChannelDrawerPay: function (e) {
                this.ubtTrace("s_trn_z_10650005126", {
                  bizKey: "z_grab_success_lanjie_actionbar_click",
                  type: 1,
                  location: e ? 0 : 1,
                }),
                  this.setData({ isGreenChannelChecked: e }),
                  this.resetPrice(),
                  this.onClickGreenChannelPay();
              },
              onClickGreenChannelBanner: function () {
                this.newUbtTrace(192147),
                  this.data.isGreenChannelChecked
                    ? this.setData({
                        showType: "recommendGreenPop",
                        greenChannelStatus: 3,
                      })
                    : (this.setData({ isGreenChannelChecked: !0 }),
                      this.newUbtTrace(192148)),
                  this.resetPrice();
              },
              onClickGreenChannelBannerTips: function () {
                var e = this.data.isGreenChannelChecked;
                this.setData({
                  showType: "recommendGreenPop",
                  greenChannelStatus: e ? 1 : 2,
                });
              },
              onSeatUpgradeBannerChecked: function (e) {
                this.setData({ isSeatUpgradeChecked: e }), this.resetPrice();
              },
              onSeatUpgradeDrawerPay: function (e) {
                this.setData({ isSeatUpgradeChecked: e }),
                  this.resetPrice(),
                  this.submitGrab({ speedGrabType: "nonFree" });
              },
              onClickSeatUpgradeBanner: function () {
                this.data.isSeatUpgradeChecked
                  ? this.setData({
                      showType: "recommendSeatUpgradePop",
                      seatUpgradeStatus: 3,
                    })
                  : this.setData({ isSeatUpgradeChecked: !0 }),
                  this.resetPrice();
              },
              onClickSeatUpgradeBannerTips: function () {
                var e = this.data.isSeatUpgradeChecked;
                this.setData({
                  showType: "recommendSeatUpgradePop",
                  seatUpgradeStatus: e ? 1 : 2,
                });
              },
              handleSpecialPersonGrabInterceptDrawer: function (e) {
                e
                  ? this.setData({
                      specialPersonGrabInterceptDrawerInfo: e || null,
                    })
                  : this.setData({
                      specialPersonGrabInterceptDrawerInfo: null,
                    });
              },
              onSpecialPersonGrabInterceptDrawerPay: function (e, t) {
                var i = this.data,
                  a = i.specialPersonGrabInfo,
                  n = i.specificallyGrabBannerInfo;
                this.ubtTrace("s_trn_z_10650005126", {
                  bizKey: "z_grab_success_lanjie_actionbar_click",
                  type: 2,
                  location: e ? 0 : 1,
                }),
                  e &&
                    (a
                      ? this.onSpecialPersonGrabTypeChange(t)
                      : n &&
                        (this.setData({ isSpecificallyGrabChecked: !0 }),
                        this.resetPrice())),
                  this.closeShowType(),
                  this.submit();
              },
              onSeasonMemberInterceptDrawerPay: function (e) {
                this.ubtTrace("s_trn_z_10650005126", {
                  bizKey: "z_grab_success_lanjie_actionbar_click",
                  type: 0,
                  location: e ? 0 : 1,
                }),
                  e && (this.changeBuyMember(e), this.resetPrice()),
                  this.submit();
              },
              getCounponPrice: function (e) {
                return (this.couponPrices || [])[e - 1] || "";
              },
              closeShowType: function () {
                this.setData({ showType: "" });
              },
              onShowCouponInfoDrawer: function (e) {
                var t,
                  i = this.data.couponDescData || {},
                  a = i.commonHeadTitle,
                  n = i.hotelCoupons,
                  s = void 0 === n ? [] : n,
                  r =
                    null == s ||
                    null ===
                      (t = s.find(function (t) {
                        return t.couponPrice === e;
                      })) ||
                    void 0 === t
                      ? void 0
                      : t.couponDesc,
                  o = "";
                r && a && (o = a.replace("%s", r)),
                  o && this.setState({ couponDescDrawerInfo: o });
              },
            };
          ne.Z.useMixin(Be, [se]);
          var _e =
            (0, ge.h)()(
              (Ie =
                S()(Be)(
                  (Ie = (function (e) {
                    (0, r.Z)(i, e);
                    var t = (0, o.Z)(i);
                    function i() {
                      return (0, n.Z)(this, i), t.apply(this, arguments);
                    }
                    return (
                      (0, s.Z)(i, [
                        {
                          key: "renderSelectView",
                          value: function () {
                            var e = this.data,
                              t = e.showType,
                              i = e.navigatorExtraData,
                              a = e.creditPayInfoV1,
                              n = e.prePayInfoV1,
                              s = e.isOpenWeiXinCreditPay;
                            return (0, T.tZ)(b.Block, {
                              children: (0, T.tZ)(b.Block, {
                                children: (0, T.BX)(b.View, {
                                  className:
                                    "pop-botm " +
                                    ("select-pay-way" === t ? "active" : ""),
                                  children: [
                                    (0, T.BX)(b.View, {
                                      className: "pop-botm-hd",
                                      children: [
                                        (0, T.tZ)(b.View, {
                                          className: "cell cancel-btn",
                                          id: "AHAw",
                                          onClick: this.hidePayWay,
                                          children: "取消",
                                        }),
                                        (0, T.tZ)(b.View, {
                                          className: "cell center-tit",
                                          children: "选择支付方式",
                                        }),
                                        (0, T.tZ)(b.View, {
                                          className: "cell cancel-btn",
                                        }),
                                      ],
                                    }),
                                    n.type || a.type
                                      ? (0, T.BX)(b.View, {
                                          className:
                                            "pop-botm-bd tips-book-pay",
                                          children: [
                                            n.type &&
                                              (0, T.BX)(b.View, {
                                                className: "item",
                                                children: [
                                                  (0, T.tZ)(b.Button, {
                                                    className: "btn-primary",
                                                    id: "AHAx",
                                                    onClick: this.payFirst,
                                                    "data-ubt-key":
                                                      "wx_booking_payFirst",
                                                    children:
                                                      n.title ||
                                                      "预付票款，自动出票",
                                                  }),
                                                  n.tag &&
                                                    (0, T.tZ)(b.View, {
                                                      className:
                                                        "tag " +
                                                        (Ze ? "ty" : "zx"),
                                                      children: n.tag,
                                                    }),
                                                  (0, T.tZ)(b.View, {
                                                    className: "txt",
                                                    children:
                                                      n.remark ||
                                                      "抢到票后直接为您出票，抢不到全额退款",
                                                  }),
                                                ],
                                              }),
                                            a.type &&
                                              (0, T.BX)(b.View, {
                                                className: "item",
                                                children: [
                                                  s
                                                    ? (0, T.tZ)(b.Button, {
                                                        className: "btn-line",
                                                        id: "AHAy",
                                                        onClick: this.payLater,
                                                        "data-ubt-key":
                                                          "wx_booking_payLater",
                                                        children:
                                                          a.title ||
                                                          "抢到票，再付票款",
                                                      })
                                                    : (0, T.tZ)(b.Navigator, {
                                                        className: "btn-line",
                                                        target: "miniProgram",
                                                        appId:
                                                          i.signAppid ||
                                                          "wxbd687630cd02ce1d",
                                                        id: "AHAz",
                                                        onClick: this.goSign,
                                                        path: i.path || "",
                                                        extraData: i,
                                                        openType: "navigate",
                                                        version: "release",
                                                        "data-ubt-key":
                                                          "wx_booking_payLater2",
                                                        children:
                                                          a.titile ||
                                                          "抢到票，再付票款",
                                                      }),
                                                  s
                                                    ? (0, T.tZ)(b.View, {
                                                        className: "txt",
                                                        children:
                                                          a.remark ||
                                                          "开通微信免密支付，官方担保，不占用资金",
                                                      })
                                                    : (0, T.tZ)(b.View, {
                                                        className: "txt",
                                                        children:
                                                          "开通微信免密支付，官方担保，不占用资金",
                                                      }),
                                                ],
                                              }),
                                          ],
                                        })
                                      : (0, T.BX)(b.View, {
                                          className:
                                            "pop-botm-bd tips-book-pay",
                                          children: [
                                            (0, T.BX)(b.View, {
                                              className: "item",
                                              children: [
                                                (0, T.tZ)(b.Button, {
                                                  className: "btn-primary",
                                                  id: "AHBA",
                                                  onClick: this.payFirst,
                                                  "data-ubt-key":
                                                    "wx_booking_payFirst",
                                                  children:
                                                    "预付票款，自动出票",
                                                }),
                                                !s &&
                                                  (0, T.tZ)(b.View, {
                                                    className:
                                                      "tag " +
                                                      (Ze ? "ty" : "zx"),
                                                    children: "推荐",
                                                  }),
                                                (0, T.tZ)(b.View, {
                                                  className: "txt",
                                                  children:
                                                    "抢到票后直接为您出票，抢不到全额退款",
                                                }),
                                              ],
                                            }),
                                            (0, T.BX)(b.View, {
                                              className: "item",
                                              children: [
                                                s
                                                  ? (0, T.tZ)(b.Button, {
                                                      className: "btn-line",
                                                      id: "AHBB",
                                                      onClick: this.payLater,
                                                      "data-ubt-key":
                                                        "wx_booking_payLater",
                                                      children:
                                                        "抢到票，再付票款",
                                                    })
                                                  : (0, T.tZ)(b.Navigator, {
                                                      className: "btn-line",
                                                      target: "miniProgram",
                                                      appId:
                                                        i.signAppid ||
                                                        "wxbd687630cd02ce1d",
                                                      id: "AHBC",
                                                      onClick: this.goSign,
                                                      path: i.path || "",
                                                      extraData: i,
                                                      openType: "navigate",
                                                      version: "release",
                                                      "data-ubt-key":
                                                        "wx_booking_payLater2",
                                                      children:
                                                        "抢到票，再付票款",
                                                    }),
                                                (0, T.tZ)(b.View, {
                                                  className: "txt",
                                                  children:
                                                    "开通微信免密支付，官方担保，不占用资金",
                                                }),
                                              ],
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
                            var e,
                              t,
                              i,
                              a,
                              n,
                              s,
                              r,
                              o,
                              c,
                              l,
                              d,
                              u,
                              p,
                              m,
                              f,
                              y,
                              w = this,
                              S = this.data,
                              v = S.isTieyou,
                              C = S.isSelectedMemberVip,
                              I = S.isStudentVIP,
                              k = S.bookProcessType,
                              V = S.pageLoading,
                              B = S.computeJLSuccessRating,
                              D = S.robSwitchType,
                              G = S.jLSuccessRate,
                              A = S.displayBasicSuccessRate,
                              X = S.speedSlider,
                              M = S.allPasLength,
                              L = S.recommendSpeedInfo,
                              R = S.recommendPackageSuccessRate,
                              z = S.isSelectedBuyMember,
                              U = S.canBuyMember,
                              O = S.vipInfo,
                              E = S.vipSwitcherInfo,
                              ie = S.buyMemberSucRate,
                              ae = S.isShowMemberVip,
                              ne = S.isInformalVip,
                              se = S.goldGrabInfo,
                              re = S.goldGrabNumShown,
                              ce = S.bookProcessInfo,
                              ge = S.priorityTicketRight,
                              ye = S.isAcceptPriorityTicketRight,
                              Se = S.selectPackage,
                              ve = S.packageList,
                              Ie = S.memberName,
                              Ze = S.isOpenWeiXinCreditPay,
                              Ve = S.allPas,
                              xe = S.isIPhoneX,
                              Be = S.isSpeedChanged,
                              _e = S.nonPackageSuccessRate,
                              De = S.showType,
                              Ge = S.wechatPayScoreInfo,
                              Ae = S.isShowSpeedSlider,
                              Xe = S.speedFactor,
                              Me = S.heatInfo,
                              Le = S.defaultPackageSuccessRate,
                              Re = S.vipRightPriceMerge,
                              Fe = S.priceDetail,
                              ze = S.showSubscribeMask,
                              Ue = S.greenChannelInfo,
                              He = S.greenChannelStatus,
                              Oe = S.isGreenChannelChecked,
                              Ee = S.seatUpgradeInfo,
                              je = S.seatUpgradeDrawerInfo,
                              qe = S.seatUpgradeStatus,
                              Ke = S.isSeatUpgradeChecked,
                              We = S.speedPackInfo,
                              Ye = S.promiseToast,
                              Je = S.promiseTopTitle,
                              Qe = S.promiseSwitch,
                              $e = S.promiseIntoCarChecked,
                              et = S.newGuestButtonInfo,
                              tt = S.showLowerBerthTips,
                              it = S.speedPackChangeTipImage,
                              at = S.isSpecificallyGrabChecked,
                              nt = S.specificallyGrabBannerInfo,
                              st = S.specificallyGrabDrawerInfo,
                              rt = S.specificallyGrabDrawerStatus,
                              ot = void 0 === rt ? 1 : rt,
                              ct = S.specialPersonGrabInfo,
                              lt = S.specialPersonGrabType,
                              dt = void 0 === lt ? 0 : lt,
                              ut = S.specialPersonGrabInterceptDrawerInfo,
                              pt = S.isXbookProductType,
                              ht = S.isShowSeasonMember,
                              mt = S.seasonMemberShipDrawerInfo,
                              bt = S.seasonMemberInterceptDrawerInfo,
                              gt = S.seasonMemberShipDrawerStatus,
                              ft = void 0 === gt ? 1 : gt,
                              yt = S.seasonMemberShipBannerInfo,
                              wt = S.speedLevelNameList,
                              St = S.couponDescDrawerInfo,
                              vt = S.couponList,
                              Tt = S.couponChooseTotalPrice,
                              Nt = S.couponCanUseNum,
                              Pt = !(
                                (z && ne) ||
                                C ||
                                I ||
                                Oe ||
                                "stu" === D ||
                                "certifiedStudent" === D ||
                                "newGuest" === D ||
                                "swellMoney" === D
                              );
                            Pt &&
                              this.ubtState &&
                              (this.newUbtTrace(201262), (this.ubtState = !1));
                            var Ct = "";
                            null != X &&
                              X.selectedItem &&
                              We &&
                              We.availablePackageNum <
                                X.selectedItem.speedPkgNums * M &&
                              (Ct = this.getCounponPrice(X.index));
                            var It = !(I || C || z) && X && !D && !Be && !Oe,
                              kt =
                                C ||
                                (z && ne) ||
                                Oe ||
                                Ke ||
                                at ||
                                (ct && dt && 0 !== dt),
                              Zt =
                                (C || (z && ne) || I) &&
                                (0 === k ||
                                  1 === k ||
                                  2 === k ||
                                  3 === k ||
                                  17 === k),
                              Vt =
                                "stu" !== D &&
                                "certifiedStudent" !== D &&
                                "newGuest" !== D &&
                                !C &&
                                !(z && ne) &&
                                Ue,
                              xt =
                                "stu" !== D && "certifiedStudent" !== D && Ee;
                            return (0, T.BX)(b.Block, {
                              children: [
                                (0, T.BX)(b.View, {
                                  className: "page " + (v ? "ty" : "zx"),
                                  children: [
                                    (0, T.tZ)(b.View, {
                                      className:
                                        "bookqp " + (Zt ? "vip-type" : ""),
                                      children: V
                                        ? (0, T.tZ)(b.Block, {
                                            children: (0, T.BX)(b.View, {
                                              className: "grabrate-loading",
                                              children: [
                                                (0, T.tZ)(b.View, {
                                                  className: "txt",
                                                  children:
                                                    "正在为你加载，请耐心等待",
                                                }),
                                                (0, T.tZ)(b.View, {
                                                  className: "loading-bar",
                                                  children: (0, T.tZ)(b.Icon, {
                                                    className: "icon-loading",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          })
                                        : (0, T.BX)(b.Block, {
                                            children: [
                                              (0, T.BX)(b.View, {
                                                className:
                                                  "qiangpiao-sucrate " +
                                                  (v ? "ty" : "zx"),
                                                children: [
                                                  B
                                                    ? (0, T.tZ)(b.View, {
                                                        className: "strong",
                                                        children:
                                                          "正在计算中...",
                                                      })
                                                    : (0, T.tZ)(b.View, {
                                                        className: "strong",
                                                        children: kt
                                                          ? (0, T.tZ)(T.HY, {
                                                              children: "高",
                                                            })
                                                          : It
                                                          ? (0, T.BX)(T.HY, {
                                                              children: [
                                                                " ",
                                                                F.ZP.getSuccessRateText(
                                                                  R
                                                                ),
                                                                " ",
                                                              ],
                                                            })
                                                          : (0, T.tZ)(T.HY, {
                                                              children:
                                                                F.ZP.getSuccessRateText(
                                                                  G || A
                                                                ),
                                                            }),
                                                      }),
                                                  D && "aliGuest" !== D
                                                    ? (0, T.tZ)(b.Block, {
                                                        children:
                                                          "swellMoney" === D &&
                                                          (0, T.tZ)(b.View, {
                                                            className: "txt",
                                                            children: "高速",
                                                          }),
                                                      })
                                                    : (0, T.tZ)(b.Block, {
                                                        children:
                                                          C || (z && ne) || I
                                                            ? (0, T.tZ)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "txt",
                                                                  children:
                                                                    "VIP",
                                                                }
                                                              )
                                                            : (null == X ||
                                                              null ===
                                                                (e =
                                                                  X.selectedItem) ||
                                                              void 0 === e
                                                                ? void 0
                                                                : e.title) &&
                                                              (0, T.tZ)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "txt",
                                                                  children: It
                                                                    ? null == L
                                                                      ? void 0
                                                                      : L.title
                                                                    : X
                                                                        .selectedItem
                                                                        .title,
                                                                }
                                                              ),
                                                      }),
                                                ],
                                              }),
                                              (0, T.BX)(b.View, {
                                                className: "qiangpiao-box",
                                                children: [
                                                  !I &&
                                                    !("swellMoney" === D) &&
                                                    !ht &&
                                                    (0, T.BX)(b.View, {
                                                      className:
                                                        "train-list qiangpiao-vip",
                                                      children: [
                                                        U &&
                                                          O &&
                                                          E &&
                                                          (0, T.BX)(b.View, {
                                                            className:
                                                              "vip-switcher",
                                                            children: [
                                                              (0, T.BX)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "vip-switcher-header",
                                                                  children: [
                                                                    (0, T.tZ)(
                                                                      b.View,
                                                                      {
                                                                        className:
                                                                          "title-box",
                                                                        children:
                                                                          (0,
                                                                          T.tZ)(
                                                                            b.Image,
                                                                            {
                                                                              src: E.vipIcon,
                                                                              className:
                                                                                "img-title",
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                    (0, T.tZ)(
                                                                      b.View,
                                                                      {
                                                                        className:
                                                                          "desc",
                                                                        id: "AHBD",
                                                                        onClick:
                                                                          this
                                                                            .openBuyMemberPop,
                                                                        children:
                                                                          E.desc,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, T.BX)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "vip-switcher-container",
                                                                  children: [
                                                                    (0, T.BX)(
                                                                      b.View,
                                                                      {
                                                                        className:
                                                                          "right-box",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            T.BX)(
                                                                              b.View,
                                                                              {
                                                                                className:
                                                                                  "right first",
                                                                                children:
                                                                                  [
                                                                                    (0,
                                                                                    T.tZ)(
                                                                                      b.Image,
                                                                                      {
                                                                                        src:
                                                                                          null ===
                                                                                            (t =
                                                                                              E.rightList) ||
                                                                                          void 0 ===
                                                                                            t ||
                                                                                          null ===
                                                                                            (i =
                                                                                              t[0]) ||
                                                                                          void 0 ===
                                                                                            i
                                                                                            ? void 0
                                                                                            : i.icon,
                                                                                        className:
                                                                                          "icon-right",
                                                                                      }
                                                                                    ),
                                                                                    (0,
                                                                                    T.BX)(
                                                                                      b.View,
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            T.tZ)(
                                                                                              b.View,
                                                                                              {
                                                                                                className:
                                                                                                  "sub-title",
                                                                                                children:
                                                                                                  (null ===
                                                                                                    (a =
                                                                                                      E.rightList) ||
                                                                                                  void 0 ===
                                                                                                    a ||
                                                                                                  null ===
                                                                                                    (n =
                                                                                                      a[0]) ||
                                                                                                  void 0 ===
                                                                                                    n
                                                                                                    ? void 0
                                                                                                    : n.title) ||
                                                                                                  "",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            T.tZ)(
                                                                                              b.View,
                                                                                              {
                                                                                                className:
                                                                                                  "tit",
                                                                                                children:
                                                                                                  (null ===
                                                                                                    (s =
                                                                                                      E.rightList) ||
                                                                                                  void 0 ===
                                                                                                    s ||
                                                                                                  null ===
                                                                                                    (r =
                                                                                                      s[0]) ||
                                                                                                  void 0 ===
                                                                                                    r
                                                                                                    ? void 0
                                                                                                    : r.subTitle) ||
                                                                                                  "",
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            T.tZ)(
                                                                              b.Image,
                                                                              {
                                                                                src: "https://images3.c-ctrip.com/ztrip/train_bin/12yue/huiyuanxiaochengxu/icon_huiyuan_lianhe@3x.png",
                                                                                className:
                                                                                  "icon-x",
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            T.BX)(
                                                                              b.View,
                                                                              {
                                                                                className:
                                                                                  "right second",
                                                                                children:
                                                                                  [
                                                                                    (0,
                                                                                    T.tZ)(
                                                                                      b.Image,
                                                                                      {
                                                                                        src:
                                                                                          null ===
                                                                                            (o =
                                                                                              E.rightList) ||
                                                                                          void 0 ===
                                                                                            o ||
                                                                                          null ===
                                                                                            (c =
                                                                                              o[1]) ||
                                                                                          void 0 ===
                                                                                            c
                                                                                            ? void 0
                                                                                            : c.icon,
                                                                                        className:
                                                                                          "icon-right",
                                                                                      }
                                                                                    ),
                                                                                    (0,
                                                                                    T.BX)(
                                                                                      b.View,
                                                                                      {
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            T.tZ)(
                                                                                              b.View,
                                                                                              {
                                                                                                className:
                                                                                                  "sub-title",
                                                                                                children:
                                                                                                  (null ===
                                                                                                    (l =
                                                                                                      E.rightList) ||
                                                                                                  void 0 ===
                                                                                                    l ||
                                                                                                  null ===
                                                                                                    (d =
                                                                                                      l[1]) ||
                                                                                                  void 0 ===
                                                                                                    d
                                                                                                    ? void 0
                                                                                                    : d.title) ||
                                                                                                  "",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            T.tZ)(
                                                                                              b.View,
                                                                                              {
                                                                                                className:
                                                                                                  "tit",
                                                                                                children:
                                                                                                  (null ===
                                                                                                    (u =
                                                                                                      E.rightList) ||
                                                                                                  void 0 ===
                                                                                                    u ||
                                                                                                  null ===
                                                                                                    (p =
                                                                                                      u[1]) ||
                                                                                                  void 0 ===
                                                                                                    p
                                                                                                    ? void 0
                                                                                                    : p.subTitle) ||
                                                                                                  "",
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, T.tZ)(
                                                                      N,
                                                                      {
                                                                        className:
                                                                          "wx-switch-input vip",
                                                                        isVip:
                                                                          !0,
                                                                        checked:
                                                                          z,
                                                                        "data-ubt-key":
                                                                          "wx_grabrate_chooseBuyMemberSwitch",
                                                                        onChange:
                                                                          function (
                                                                            e
                                                                          ) {
                                                                            w.changeBuyMember(
                                                                              e
                                                                                .detail
                                                                                .value ||
                                                                                e
                                                                                  .detail
                                                                                  .checked ||
                                                                                !z
                                                                            );
                                                                          },
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ae &&
                                                          !(ne && z) &&
                                                          (0, T.BX)(b.View, {
                                                            className:
                                                              "item own ".concat(
                                                                U ? "" : "only"
                                                              ),
                                                            id: "AHBE",
                                                            onClick:
                                                              this
                                                                .toggleUseMemberVip,
                                                            "data-ubt-key":
                                                              "wx_grabrate_chooseVipcoupon",
                                                            children: [
                                                              (0, T.tZ)(
                                                                b.Icon,
                                                                {
                                                                  className:
                                                                    "icon-vip",
                                                                }
                                                              ),
                                                              (0, T.BX)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "cont",
                                                                  children: [
                                                                    (0, T.tZ)(
                                                                      b.View,
                                                                      {
                                                                        className:
                                                                          "tit",
                                                                        children:
                                                                          se.title ||
                                                                          "VIP抢票券",
                                                                      }
                                                                    ),
                                                                    (0, T.tZ)(
                                                                      b.View,
                                                                      {
                                                                        className:
                                                                          "txt",
                                                                        children:
                                                                          se.subTitle ||
                                                                          "VIP抢票，有票优先出",
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, T.tZ)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "tgrey",
                                                                  children:
                                                                    "（剩余" +
                                                                    re +
                                                                    "张）",
                                                                }
                                                              ),
                                                              (0, T.tZ)(
                                                                b.Text,
                                                                {
                                                                  className:
                                                                    "iconfont " +
                                                                    (C
                                                                      ? "ifont-checkboxed"
                                                                      : "ifont-checkbox"),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        !ae &&
                                                          !ne &&
                                                          z &&
                                                          (0, T.BX)(b.View, {
                                                            className:
                                                              "item buy",
                                                            id: "AHBF",
                                                            onClick:
                                                              this
                                                                .toggleUseMemberVip,
                                                            "data-ubt-key":
                                                              "wx_grabrate_chooseVipcoupon",
                                                            children: [
                                                              (0, T.tZ)(
                                                                b.Icon,
                                                                {
                                                                  className:
                                                                    "icon-vip",
                                                                }
                                                              ),
                                                              (0, T.BX)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "cont",
                                                                  children: [
                                                                    (0, T.tZ)(
                                                                      b.View,
                                                                      {
                                                                        className:
                                                                          "tit",
                                                                        children:
                                                                          "VIP抢票券",
                                                                      }
                                                                    ),
                                                                    (0, T.tZ)(
                                                                      b.View,
                                                                      {
                                                                        className:
                                                                          "txt",
                                                                        children:
                                                                          "VIP抢票，有票优先出",
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, T.tZ)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "tgrey",
                                                                  children:
                                                                    "（剩余" +
                                                                    re +
                                                                    "张）",
                                                                }
                                                              ),
                                                              (0, T.tZ)(
                                                                b.Text,
                                                                {
                                                                  className:
                                                                    "iconfont " +
                                                                    (C
                                                                      ? "ifont-checkboxed"
                                                                      : "ifont-checkbox"),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                      ],
                                                    }),
                                                  !I &&
                                                    !("swellMoney" === D) &&
                                                    U &&
                                                    ht &&
                                                    (0, T.tZ)(b.View, {
                                                      className:
                                                        "qiangpiao-vip",
                                                      children: (0, T.tZ)(we, {
                                                        content: yt,
                                                        hideBuyButton:
                                                          "memberGrab" === pt,
                                                        isChecked: z,
                                                        isGrabVipTicketChecked:
                                                          C,
                                                        goldGrabNumShown: re,
                                                        speedSliderTitle:
                                                          null == X ||
                                                          null ===
                                                            (m =
                                                              X.selectedItem) ||
                                                          void 0 === m
                                                            ? void 0
                                                            : m.title,
                                                        speedLevelNameList: wt,
                                                        cardCode:
                                                          (null == mt
                                                            ? void 0
                                                            : mt.cardCode) ||
                                                          "",
                                                        onShowDetail:
                                                          function () {
                                                            w.setData({
                                                              showType:
                                                                "seasonMemberShipDrawer",
                                                            });
                                                          },
                                                        onChecked: function () {
                                                          w.changeBuyMember(!z);
                                                        },
                                                        onGrabVipTicketChecked:
                                                          this
                                                            .toggleUseMemberVip,
                                                        onConfirm: function () {
                                                          z ||
                                                            w.changeBuyMember(
                                                              !0
                                                            );
                                                        },
                                                        ubtTrace: this.ubtTrace,
                                                      }),
                                                    }),
                                                  "swellMoney" === D &&
                                                    ce &&
                                                    ce.welfareInfo &&
                                                    (0, T.BX)(b.View, {
                                                      className:
                                                        "white-box stu-welfare " +
                                                        (v ? "ty" : "zx"),
                                                      children: [
                                                        (0, T.tZ)(b.Image, {
                                                          src: ce.welfareInfo[1]
                                                            .icon,
                                                          className: "icon-stu",
                                                        }),
                                                        (0, T.BX)(b.View, {
                                                          className: "cont",
                                                          children: [
                                                            (0, T.BX)(b.View, {
                                                              className: "tit",
                                                              children: [
                                                                ce
                                                                  .welfareInfo[1]
                                                                  .title + "·",
                                                                (0, T.tZ)(
                                                                  b.View,
                                                                  {
                                                                    className:
                                                                      "tit-img-swell",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, T.tZ)(b.View, {
                                                              className: "txt",
                                                              children:
                                                                ce
                                                                  .welfareInfo[1]
                                                                  .subTitle,
                                                            }),
                                                          ],
                                                        }),
                                                        (0, T.BX)(b.Button, {
                                                          className:
                                                            "btn-submit",
                                                          disabled: "true",
                                                          children: [
                                                            (0, T.tZ)(b.Text, {
                                                              className:
                                                                "ifont-list iconfont",
                                                            }),
                                                            ce.welfareInfo[1]
                                                              .buttonName,
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  "swellMoney" === D &&
                                                    (0, T.BX)(b.View, {
                                                      className:
                                                        "white-box speed-box " +
                                                        (v ? "ty" : "zx"),
                                                      children: [
                                                        (0, T.BX)(b.View, {
                                                          className: "speed-hd",
                                                          children: [
                                                            "swellMoney" ===
                                                              D &&
                                                              (0, T.tZ)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "tit",
                                                                  children:
                                                                    "当前抢票速度：高速",
                                                                }
                                                              ),
                                                            "stu" === D &&
                                                              (0, T.tZ)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "txt",
                                                                  children:
                                                                    "*可领取学生福利免费升级",
                                                                }
                                                              ),
                                                            "newGuest" === D &&
                                                              (0, T.tZ)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "txt",
                                                                  children:
                                                                    "*可领取新客福利免费升级",
                                                                }
                                                              ),
                                                            "swellMoney" ===
                                                              D &&
                                                              (0, T.tZ)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "txt",
                                                                  children:
                                                                    "*可领取膨胀金福利免费升级",
                                                                }
                                                              ),
                                                          ],
                                                        }),
                                                        (0, T.BX)(b.View, {
                                                          className:
                                                            "speed-step",
                                                          children: [
                                                            (0, T.tZ)(b.View, {
                                                              className: "item",
                                                              children: "低速",
                                                            }),
                                                            (0, T.tZ)(b.View, {
                                                              className: "item",
                                                              children: "中速",
                                                            }),
                                                            (0, T.tZ)(b.View, {
                                                              className: "item",
                                                              children: "快速",
                                                            }),
                                                            (0, T.tZ)(b.View, {
                                                              className:
                                                                "item " +
                                                                ("swellMoney" ===
                                                                D
                                                                  ? "cur"
                                                                  : ""),
                                                              children: "高速",
                                                            }),
                                                            (0, T.tZ)(b.View, {
                                                              className: "item",
                                                              children: "极速",
                                                            }),
                                                            (0, T.BX)(b.View, {
                                                              className:
                                                                "item vip",
                                                              children: [
                                                                (0, T.tZ)(
                                                                  b.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-crown iconfont",
                                                                  }
                                                                ),
                                                                "VIP",
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        (0, T.tZ)(b.View, {
                                                          className:
                                                            "speed-now",
                                                          children:
                                                            "swellMoney" ===
                                                              D &&
                                                            (0, T.tZ)(b.View, {
                                                              className: "line",
                                                              style:
                                                                "width:60%",
                                                            }),
                                                        }),
                                                      ],
                                                    }),
                                                  ge &&
                                                    !(
                                                      "stu" === D ||
                                                      "certifiedStudent" ===
                                                        D ||
                                                      "newGuest" === D ||
                                                      "swellMoney" === D
                                                    ) &&
                                                    (0, T.tZ)(b.View, {
                                                      className:
                                                        "train-list qiangpiao-linjin priority-ticket-right",
                                                      children: (0, T.BX)(
                                                        b.Block,
                                                        {
                                                          children: [
                                                            (0, T.BX)(b.View, {
                                                              className: "item",
                                                              children: [
                                                                (0, T.tZ)(
                                                                  b.Image,
                                                                  {
                                                                    src: ge.icon,
                                                                    className:
                                                                      "i-img",
                                                                  }
                                                                ),
                                                                (0, T.BX)(
                                                                  b.View,
                                                                  {
                                                                    className:
                                                                      "cont",
                                                                    children: [
                                                                      (0, T.BX)(
                                                                        b.View,
                                                                        {
                                                                          className:
                                                                            "tit",
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              T.tZ)(
                                                                                b.Text,
                                                                                {
                                                                                  children:
                                                                                    ge.title ||
                                                                                    "".concat(
                                                                                      Z
                                                                                        .Z
                                                                                        .PRIORITY_TICKET,
                                                                                      "特权"
                                                                                    ),
                                                                                }
                                                                              ),
                                                                              (C ||
                                                                                ge.tag) &&
                                                                                (0,
                                                                                T.tZ)(
                                                                                  b.Text,
                                                                                  {
                                                                                    className:
                                                                                      "tag bdcolor-red color-red",
                                                                                    style:
                                                                                      "margin-left: 10rpx;",
                                                                                    children:
                                                                                      C
                                                                                        ? "免费赠送"
                                                                                        : ge.tag,
                                                                                  }
                                                                                ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                      (0, T.tZ)(
                                                                        b.View,
                                                                        {
                                                                          className:
                                                                            "txt",
                                                                          children:
                                                                            ge.subTitle ||
                                                                            "大数据显示，发车前会放出无座票",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                                Oe &&
                                                                  (0, T.tZ)(
                                                                    b.View,
                                                                    {
                                                                      className:
                                                                        "check-txt color-primary",
                                                                      children:
                                                                        "免费赠送",
                                                                    }
                                                                  ),
                                                                !Oe &&
                                                                  (0, T.tZ)(
                                                                    b.Block,
                                                                    {
                                                                      children:
                                                                        C
                                                                          ? (0,
                                                                            T.tZ)(
                                                                              N,
                                                                              {
                                                                                className:
                                                                                  "wx-switch-input " +
                                                                                  (v
                                                                                    ? "ty"
                                                                                    : "zx"),
                                                                                checked: 1,
                                                                                onChange:
                                                                                  function () {},
                                                                              }
                                                                            )
                                                                          : (0,
                                                                            T.tZ)(
                                                                              N,
                                                                              {
                                                                                className:
                                                                                  "wx-switch-input " +
                                                                                  (v
                                                                                    ? "ty"
                                                                                    : "zx"),
                                                                                onChange:
                                                                                  this
                                                                                    .togglePriorityTicketRight,
                                                                                checked:
                                                                                  ye,
                                                                              }
                                                                            ),
                                                                    }
                                                                  ),
                                                              ],
                                                            }),
                                                            !C &&
                                                              ge.toast &&
                                                              ge.toast
                                                                .newDescTitle &&
                                                              (0, T.BX)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "youxian-info",
                                                                  children: [
                                                                    (0, T.tZ)(
                                                                      g.ZtRichText,
                                                                      {
                                                                        className:
                                                                          "lbox bgcolor-primary",
                                                                        nodes:
                                                                          ge
                                                                            .toast
                                                                            .newDescTitle,
                                                                        space:
                                                                          "nbsp",
                                                                      }
                                                                    ),
                                                                    ge.toast
                                                                      .newDescSubTitle &&
                                                                      (0, T.tZ)(
                                                                        g.ZtRichText,
                                                                        {
                                                                          className:
                                                                            "cont color-primary",
                                                                          nodes:
                                                                            ge
                                                                              .toast
                                                                              .newDescSubTitle,
                                                                          space:
                                                                            "nbsp",
                                                                        }
                                                                      ),
                                                                  ],
                                                                }
                                                              ),
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  "singleSpecialPersonGrab" !==
                                                    pt &&
                                                    nt &&
                                                    (0, T.tZ)(K.Z, {
                                                      content: nt,
                                                      propStyle:
                                                        "margin: 20rpx",
                                                      isChecked: at,
                                                      onChecked: function () {
                                                        at ||
                                                          w.ubtTrace(203520, {
                                                            bizKey:
                                                              "z_grab_success_24h_zrq_modelue_click",
                                                          }),
                                                          w.setData({
                                                            isSpecificallyGrabChecked:
                                                              !at,
                                                          }),
                                                          w.resetPrice();
                                                      },
                                                      onShowDetail:
                                                        function () {
                                                          at ||
                                                            (w.ubtTrace(
                                                              203520,
                                                              {
                                                                bizKey:
                                                                  "z_grab_success_24h_zrq_modelue_click",
                                                              }
                                                            ),
                                                            w.ubtTrace(203518, {
                                                              exposureType:
                                                                "actionbar",
                                                              bizKey:
                                                                "z_grab_success_24h_zrq_actionbar_show",
                                                            })),
                                                            w.setData({
                                                              showType:
                                                                "specificallyGrabDrawer",
                                                            });
                                                        },
                                                      fromPage: "grabrate",
                                                    }),
                                                  ("multiplySpecialPersonGrab" !==
                                                    pt ||
                                                    ("multiplySpecialPersonGrab" ===
                                                      pt &&
                                                      "B" ===
                                                        this
                                                          .specialGrabAbTestValue)) &&
                                                    (0, T.tZ)(Te, {
                                                      content: ct,
                                                      type: dt,
                                                      onTypeChange:
                                                        this
                                                          .onSpecialPersonGrabTypeChange,
                                                      ubtTrace: this.ubtTrace,
                                                    }),
                                                  Vt &&
                                                    !Ke &&
                                                    "greenChannelGrab" !== pt &&
                                                    (0, T.tZ)(ke, {
                                                      isTieyou: v,
                                                      content:
                                                        Ue.greenChannelEntrance,
                                                      isChecked: Oe,
                                                      onChecked:
                                                        this.onClickGreenChannelBanner.bind(
                                                          this
                                                        ),
                                                      onShowTips:
                                                        this.onClickGreenChannelBannerTips.bind(
                                                          this
                                                        ),
                                                    }),
                                                  xt &&
                                                    !Oe &&
                                                    (0, T.tZ)(ke, {
                                                      isTieyou: v,
                                                      content: {
                                                        icon: Ee.icon,
                                                        title: Ee.title,
                                                        tag: Ee.titleTag,
                                                        subTitle:
                                                          Ee.remark +
                                                          " ￥" +
                                                          Ee.salePrice +
                                                          "/人",
                                                      },
                                                      isChecked: Ke,
                                                      onChecked:
                                                        this.onClickSeatUpgradeBanner.bind(
                                                          this
                                                        ),
                                                      onShowTips:
                                                        this.onClickSeatUpgradeBannerTips.bind(
                                                          this
                                                        ),
                                                    }),
                                                  Qe &&
                                                    (0, T.BX)(b.View, {
                                                      className:
                                                        "train-list qiangpiao-linjin",
                                                      children: [
                                                        (0, T.tZ)(de, {}),
                                                        Qe &&
                                                          (0, T.tZ)(ue, {
                                                            propStyle:
                                                              "margin: 16px -5px;",
                                                            checked: $e,
                                                            data: Qe,
                                                            onChange:
                                                              function () {
                                                                w.onPromiseSwitchChange(
                                                                  !$e
                                                                );
                                                              },
                                                          }),
                                                      ],
                                                    }),
                                                  Se &&
                                                    ve &&
                                                    ve[0] &&
                                                    !(
                                                      "stu" === D ||
                                                      "certifiedStudent" ===
                                                        D ||
                                                      "newGuest" === D ||
                                                      "swellMoney" === D
                                                    ) &&
                                                    (0, T.tZ)(b.View, {
                                                      className: "train-list",
                                                      children: (0, T.BX)(
                                                        b.View,
                                                        {
                                                          className:
                                                            "item add-box",
                                                          style:
                                                            "border-bottom: 0;",
                                                          id: "AHBG",
                                                          onClick:
                                                            this.goInsurance,
                                                          children: [
                                                            (0, T.tZ)(b.Text, {
                                                              className:
                                                                "label",
                                                              children:
                                                                "套餐类型",
                                                            }),
                                                            (0, T.tZ)(b.View, {
                                                              className: "cont",
                                                              children:
                                                                Se.PackageTitle,
                                                            }),
                                                            (0, T.tZ)(b.View, {
                                                              className:
                                                                "cont txt-right",
                                                              children:
                                                                Se.PackageRightTitle,
                                                            }),
                                                            (0, T.tZ)(b.Text, {
                                                              className:
                                                                "ifont-arr iconfont",
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  pt &&
                                                    (("greenChannelGrab" ===
                                                      pt &&
                                                      Vt) ||
                                                      ("multiplySpecialPersonGrab" ===
                                                        pt &&
                                                        "B" !==
                                                          this
                                                            .specialGrabAbTestValue) ||
                                                      ("greenChannelGrab" !==
                                                        pt &&
                                                        "multiplySpecialPersonGrab" !==
                                                          pt)) &&
                                                    (0, T.tZ)(Ne, {
                                                      isXbookProductType: pt,
                                                      content:
                                                        this.getGrabProductBannerContent(),
                                                      id: "AHBH",
                                                      onClick:
                                                        this
                                                          .onGrabProductBannerClick,
                                                      ubtTrace: this.ubtTrace,
                                                    }),
                                                  Pt &&
                                                    (0, T.tZ)(b.View, {
                                                      className:
                                                        "train-list grab-speed",
                                                      children: (0, T.BX)(
                                                        b.View,
                                                        {
                                                          className:
                                                            "item add-box",
                                                          id: "AHBI",
                                                          onClick:
                                                            this
                                                              .toggleSpeedSlider,
                                                          children: [
                                                            (0, T.tZ)(b.View, {
                                                              className:
                                                                "label",
                                                              children:
                                                                "抢票速度",
                                                            }),
                                                            X.selectedItem &&
                                                              (0, T.tZ)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "cont txt-right",
                                                                  children:
                                                                    "".concat(
                                                                      X
                                                                        .selectedItem
                                                                        .title,
                                                                      "抢票"
                                                                    ),
                                                                }
                                                              ),
                                                            "低速" ===
                                                              (null == X ||
                                                              null ===
                                                                (f =
                                                                  X.selectedItem) ||
                                                              void 0 === f
                                                                ? void 0
                                                                : f.title) &&
                                                              We &&
                                                              We.availablePackageNum >
                                                                0 &&
                                                              (0, T.BX)(
                                                                b.View,
                                                                {
                                                                  className:
                                                                    "available-tip",
                                                                  children: [
                                                                    "有可用",
                                                                    Z.Z
                                                                      .SPEED_PACK,
                                                                  ],
                                                                }
                                                              ),
                                                            "aliGuest" !== D &&
                                                              "certifiedStudent" !==
                                                                D &&
                                                              (0, T.tZ)(
                                                                b.Text,
                                                                {
                                                                  className:
                                                                    "ifont-arr iconfont",
                                                                }
                                                              ),
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  Ze &&
                                                    (0, T.tZ)(b.View, {
                                                      className: "train-list",
                                                      children: (0, T.BX)(
                                                        b.View,
                                                        {
                                                          className:
                                                            "item add-box",
                                                          children: [
                                                            (0, T.tZ)(b.View, {
                                                              className:
                                                                "label",
                                                              children:
                                                                "支付方式",
                                                            }),
                                                            (0, T.tZ)(b.View, {
                                                              className:
                                                                "cont txt-right",
                                                              children:
                                                                "已开通微信免密付",
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  Ve.length > 0 &&
                                                    Fe &&
                                                    (0, T.BX)(b.View, {
                                                      className: "priceInfoBox",
                                                      children: [
                                                        Fe.priceTips &&
                                                          (0, T.tZ)(b.View, {
                                                            className:
                                                              "priceTips",
                                                            children:
                                                              Fe.priceTips,
                                                          }),
                                                        (0, T.BX)(b.View, {
                                                          className:
                                                            "priceInfoItemBox",
                                                          style: Fe.priceTips
                                                            ? "margin-top: -20rpx"
                                                            : "",
                                                          children: [
                                                            (0, T.BX)(b.View, {
                                                              className:
                                                                "priceInfoItem",
                                                              onClick:
                                                                function () {
                                                                  (null == vt
                                                                    ? void 0
                                                                    : vt.length) >
                                                                  0
                                                                    ? w.setData(
                                                                        {
                                                                          showType:
                                                                            "RobCouponListDrawer",
                                                                        }
                                                                      )
                                                                    : (0,
                                                                      H.showToast)(
                                                                        "暂无可用优惠券～"
                                                                      );
                                                                },
                                                              children: [
                                                                (0, T.tZ)(
                                                                  b.View,
                                                                  {
                                                                    className:
                                                                      "priceInfoLabel",
                                                                    children:
                                                                      "优惠券",
                                                                  }
                                                                ),
                                                                (0, T.tZ)(
                                                                  b.View,
                                                                  {
                                                                    className:
                                                                      "priceInfoValue",
                                                                    style:
                                                                      Tt > 0
                                                                        ? {}
                                                                        : {
                                                                            color:
                                                                              "#999999",
                                                                          },
                                                                    children:
                                                                      Tt > 0
                                                                        ? "已减¥".concat(
                                                                            Tt
                                                                          )
                                                                        : "未选择",
                                                                  }
                                                                ),
                                                                (0, T.tZ)(
                                                                  b.View,
                                                                  {
                                                                    className:
                                                                      "blank",
                                                                  }
                                                                ),
                                                                Nt > 0 &&
                                                                  !(Tt > 0) &&
                                                                  (0, T.tZ)(
                                                                    b.View,
                                                                    {
                                                                      className:
                                                                        "priceInfoTag",
                                                                      children:
                                                                        "".concat(
                                                                          Nt,
                                                                          "张可用"
                                                                        ),
                                                                    }
                                                                  ),
                                                                (0, T.tZ)(
                                                                  b.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-arr iconfont",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, T.BX)(b.View, {
                                                              className:
                                                                "priceInfoItem",
                                                              id: "AHBJ",
                                                              onClick:
                                                                this.openPrice.bind(
                                                                  this
                                                                ),
                                                              children: [
                                                                (0, T.tZ)(
                                                                  b.View,
                                                                  {
                                                                    className:
                                                                      "priceInfoLabel",
                                                                    children:
                                                                      "票价明细",
                                                                  }
                                                                ),
                                                                (0, T.tZ)(
                                                                  b.View,
                                                                  {
                                                                    className:
                                                                      "priceInfoValue",
                                                                    children:
                                                                      (0, T.tZ)(
                                                                        b.Text,
                                                                        {
                                                                          className:
                                                                            "color-red",
                                                                          children:
                                                                            "¥" +
                                                                            Fe.totalPrice,
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                Tt > 0 &&
                                                                  (0, T.BX)(
                                                                    b.View,
                                                                    {
                                                                      className:
                                                                        "detailCouponTag",
                                                                      children:
                                                                        [
                                                                          "券已抵扣¥",
                                                                          Tt,
                                                                        ],
                                                                    }
                                                                  ),
                                                                (0, T.tZ)(
                                                                  b.View,
                                                                  {
                                                                    className:
                                                                      "blank",
                                                                  }
                                                                ),
                                                                (0, T.tZ)(
                                                                  b.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-arr iconfont",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  (0, T.tZ)(Ce, {}),
                                                  (0, T.tZ)(_.Z, {}),
                                                ],
                                              }),
                                            ],
                                          }),
                                    }),
                                    tt &&
                                      (0, T.tZ)(b.View, {
                                        className: "sleeper-tips",
                                        children:
                                          "卧铺支付时暂收下铺价格，抢票成功后在1-3个工作日退还差价",
                                      }),
                                    !C &&
                                      Oe &&
                                      (0, T.tZ)(b.View, {
                                        className: "pay-box green-channel-btn",
                                        children: (0, T.tZ)(b.View, {
                                          className: "btn btn-grab",
                                          id: "AHBK",
                                          onClick: this.onClickGreenChannelPay,
                                          children: "开始抢票",
                                        }),
                                      }),
                                    !(!C && Oe) &&
                                      (0, T.tZ)(b.View, {
                                        className: xe ? "iphone-x" : "",
                                        children:
                                          I || C || z || !X || D
                                            ? (I || C || z) &&
                                              "swellMoney" !== D
                                              ? (0, T.tZ)(b.Form, {
                                                  reportSubmit: "true",
                                                  children: (0, T.tZ)(b.View, {
                                                    className:
                                                      "pay-box ".concat(
                                                        xe ? "isPhoneX" : ""
                                                      ),
                                                    children: I
                                                      ? (0, T.tZ)(b.Button, {
                                                          className:
                                                            "btn-grab btn-next vip-type",
                                                          id: "AHBO",
                                                          onClick:
                                                            this
                                                              .submitWithPackageSelection,
                                                          "data-type":
                                                            "useStudentVIP",
                                                          "data-ubt-key":
                                                            "wx_grabrate_useStudentVIP",
                                                          formType: "submit",
                                                          children: "开始抢票",
                                                        })
                                                      : C || (z && ne)
                                                      ? (0, T.tZ)(b.Button, {
                                                          className:
                                                            "btn-grab btn-next vip-type",
                                                          id: "AHBP",
                                                          onClick:
                                                            this
                                                              .submitWithPackageSelection,
                                                          "data-type":
                                                            "useMemberVip",
                                                          "data-ubt-key":
                                                            "wx_grabrate_useMemberVip",
                                                          formType: "submit",
                                                          children: "开始抢票",
                                                        })
                                                      : (0, T.tZ)(b.Block, {
                                                          children: X
                                                            .selectedItem
                                                            .speedPkgNums
                                                            ? (0, T.tZ)(
                                                                b.Button,
                                                                {
                                                                  className:
                                                                    "btn-grab btn-next",
                                                                  id: "AHBQ",
                                                                  onClick:
                                                                    this
                                                                      .submitWithPackageSelection,
                                                                  "data-type":
                                                                    "nonFree",
                                                                  formType:
                                                                    "submit",
                                                                  children:
                                                                    "开始抢票",
                                                                }
                                                              )
                                                            : (0, T.tZ)(
                                                                b.Button,
                                                                {
                                                                  className:
                                                                    "btn-grab btn-next",
                                                                  id: "AHBR",
                                                                  onClick:
                                                                    this
                                                                      .submitWithPackageSelection,
                                                                  "data-type":
                                                                    "free",
                                                                  formType:
                                                                    "submit",
                                                                  children:
                                                                    "开始抢票",
                                                                }
                                                              ),
                                                        }),
                                                  }),
                                                })
                                              : (0, T.tZ)(T.HY, {
                                                  children:
                                                    "stu" === D ||
                                                    "newGuest" === D ||
                                                    "aliGuest" === D ||
                                                    "certifiedStudent" === D
                                                      ? (0, T.tZ)(b.View, {
                                                          className: "pay-box",
                                                          children: (0, T.BX)(
                                                            b.View,
                                                            {
                                                              className:
                                                                "btn-new-guest",
                                                              id: "AHBS",
                                                              onClick:
                                                                this
                                                                  .submitWithActivity,
                                                              children: [
                                                                (0, T.tZ)(
                                                                  b.View,
                                                                  {
                                                                    className:
                                                                      "name",
                                                                    children:
                                                                      (null ==
                                                                      et
                                                                        ? void 0
                                                                        : et.buttonName) ||
                                                                      "",
                                                                  }
                                                                ),
                                                                (null == et
                                                                  ? void 0
                                                                  : et.icon) &&
                                                                  (0, T.tZ)(
                                                                    b.Image,
                                                                    {
                                                                      src:
                                                                        null ==
                                                                        et
                                                                          ? void 0
                                                                          : et.icon,
                                                                      mode: "heightFix",
                                                                      className:
                                                                        "tag",
                                                                      webp: !0,
                                                                    }
                                                                  ),
                                                              ],
                                                            }
                                                          ),
                                                        })
                                                      : "swellMoney" === D
                                                      ? (0, T.tZ)(b.View, {
                                                          className: "pay-box",
                                                          children: (0, T.tZ)(
                                                            b.Button,
                                                            {
                                                              className:
                                                                "btn-grab btn-next",
                                                              id: "AHBT",
                                                              onClick:
                                                                this
                                                                  .submitWithActivity,
                                                              children:
                                                                "开始抢票",
                                                            }
                                                          ),
                                                        })
                                                      : (0, T.tZ)(b.View, {
                                                          className: "pay-box",
                                                          children: (0, T.tZ)(
                                                            b.Button,
                                                            {
                                                              className:
                                                                "btn-grab btn-next",
                                                              id: "AHBU",
                                                              onClick:
                                                                this
                                                                  .submitWithActivity,
                                                              children:
                                                                "下一步",
                                                            }
                                                          ),
                                                        }),
                                                })
                                            : (0, T.tZ)(b.Form, {
                                                reportSubmit: "true",
                                                children: Be
                                                  ? (0, T.tZ)(b.View, {
                                                      className:
                                                        "pay-box ".concat(
                                                          xe ? "isPhoneX" : ""
                                                        ),
                                                      children:
                                                        X.selectedItem &&
                                                        X.selectedItem
                                                          .speedPkgNums
                                                          ? (0, T.tZ)(
                                                              b.Button,
                                                              {
                                                                className:
                                                                  "btn-grab btn-next",
                                                                id: "AHBL",
                                                                onClick:
                                                                  this
                                                                    .submitWithPackageSelection,
                                                                "data-type":
                                                                  "nonFree",
                                                                formType:
                                                                  "submit",
                                                                children:
                                                                  "下一步",
                                                              }
                                                            )
                                                          : (0, T.tZ)(
                                                              b.Button,
                                                              {
                                                                className:
                                                                  "btn-grab btn-next",
                                                                id: "AHBM",
                                                                onClick:
                                                                  this
                                                                    .submitWithPackageSelection,
                                                                "data-type":
                                                                  "free",
                                                                formType:
                                                                  "submit",
                                                                children:
                                                                  "下一步",
                                                              }
                                                            ),
                                                    })
                                                  : Ke
                                                  ? (0, T.tZ)(b.View, {
                                                      className:
                                                        "pay-box ".concat(
                                                          xe ? "isPhoneX" : ""
                                                        ),
                                                      children: (0, T.tZ)(
                                                        b.Button,
                                                        {
                                                          className:
                                                            "btn-grab btn-next",
                                                          id: "AHBN",
                                                          onClick:
                                                            this
                                                              .submitWithPackageSelection,
                                                          children: "下一步",
                                                        }
                                                      ),
                                                    })
                                                  : (0, T.tZ)(fe, {
                                                      isTieyou: v,
                                                      nonPackageSuccessRateTxt:
                                                        F.ZP.getSuccessRateText(
                                                          _e
                                                        ),
                                                      recommendPackageSuccessRateTxt:
                                                        F.ZP.getSuccessRateText(
                                                          R
                                                        ),
                                                      defaultSpeedLevelTxt:
                                                        (X.items &&
                                                          X.items[0] &&
                                                          X.items[0].title) ||
                                                        "",
                                                      recommendSpeedLevelTxt:
                                                        (null == L
                                                          ? void 0
                                                          : L.title) || "",
                                                      recommendSpeedPkgNums:
                                                        (null == L
                                                          ? void 0
                                                          : L.speedPkgNums) ||
                                                        "",
                                                      price:
                                                        (null == Fe
                                                          ? void 0
                                                          : Fe.totalPrice) ||
                                                        "",
                                                      showType: De,
                                                      onClickGrab:
                                                        this
                                                          .submitWithPackageSelection,
                                                      onClickPriceDetail:
                                                        this.openPrice,
                                                    }),
                                              }),
                                      }),
                                    "price-detail" === De &&
                                      (0, T.tZ)(b.View, {
                                        className:
                                          "action-sheet-shade-box ".concat(
                                            "price-detail" === De
                                              ? "active"
                                              : ""
                                          ),
                                        id: "AHBV",
                                        onClick: this.hideBackDrop,
                                      }),
                                    (0, T.BX)(b.View, {
                                      className: "action-sheet "
                                        .concat(
                                          "price-detail" === De ? "active" : "",
                                          " "
                                        )
                                        .concat(
                                          "F" == this.abTestValue
                                            ? "f-group"
                                            : "G" == this.abTestValue
                                            ? "g-group"
                                            : ""
                                        ),
                                      children: [
                                        (0, T.BX)(b.View, {
                                          className: "hd",
                                          children: [
                                            (0, T.tZ)(b.Text, {
                                              className: "title",
                                              children: "价格明细",
                                            }),
                                            (0, T.tZ)(b.Image, {
                                              id: "AHBW",
                                              onClick: this.hideBackDrop,
                                              className: "close",
                                              mode: "aspectFill",
                                              src: "https://images3.c-ctrip.com/train/tieyou-mini-img/popup_close.png",
                                            }),
                                          ],
                                        }),
                                        Fe &&
                                          (0, T.BX)(b.View, {
                                            className: "bd",
                                            children: [
                                              (0, T.tZ)(b.View, {
                                                className: "bd-babel",
                                                children: "票价",
                                              }),
                                              (0, T.BX)(b.View, {
                                                className: "list-item",
                                                children: [
                                                  (0, T.tZ)(b.Text, {
                                                    className: "name",
                                                    children: Fe.route,
                                                  }),
                                                  (0, T.tZ)(b.Text, {
                                                    className: "value",
                                                    children: Fe.ticketInfo,
                                                  }),
                                                ],
                                              }),
                                              Fe &&
                                                Fe.productDetailList &&
                                                Fe.productDetailList.length >
                                                  0 &&
                                                (0, T.BX)(b.Block, {
                                                  children: [
                                                    (0, T.tZ)(b.View, {
                                                      className: "bd-babel",
                                                      children: "附加产品",
                                                    }),
                                                    Fe.productDetailList.map(
                                                      function (e, t) {
                                                        return (0, T.BX)(
                                                          b.View,
                                                          {
                                                            className:
                                                              "list-item",
                                                            children: [
                                                              (0, T.tZ)(
                                                                b.Text,
                                                                {
                                                                  className:
                                                                    "name",
                                                                  children:
                                                                    e.name,
                                                                }
                                                              ),
                                                              (0, T.tZ)(
                                                                b.Text,
                                                                {
                                                                  className:
                                                                    "value",
                                                                  children:
                                                                    e.desc,
                                                                }
                                                              ),
                                                            ],
                                                          },
                                                          ""
                                                            .concat(e.name, "_")
                                                            .concat(t)
                                                        );
                                                      }
                                                    ),
                                                  ],
                                                }),
                                              !!Tt &&
                                                (0, T.BX)(b.View, {
                                                  className: "couponTotalPrice",
                                                  children: [
                                                    (0, T.tZ)(b.View, {
                                                      className: "label",
                                                      children: "优惠券抵扣",
                                                    }),
                                                    (0, T.BX)(b.View, {
                                                      className: "value",
                                                      children: ["-", Tt],
                                                    }),
                                                  ],
                                                }),
                                              (0, T.tZ)(b.View, {
                                                className: "line",
                                              }),
                                              (0, T.BX)(b.View, {
                                                className: "total",
                                                children: [
                                                  (0, T.tZ)(b.Text, {
                                                    className: "name",
                                                    children: "总计",
                                                  }),
                                                  (0, T.BX)(b.Text, {
                                                    className: "value",
                                                    children: [
                                                      "￥",
                                                      Fe.totalPrice,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, T.tZ)(b.View, {
                                                className: "tip-box",
                                                children:
                                                  Fe &&
                                                  Fe.tips &&
                                                  Fe.tips.map(function (e) {
                                                    return (0,
                                                    T.tZ)(b.View, { className: "tip", children: e }, e);
                                                  }),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    (0, T.tZ)(le, {
                                      data: {
                                        showType: De,
                                        wechatPayScoreInfo: Ge,
                                      },
                                      upperPayScore: this.upperPayScore,
                                    }),
                                    (0, T.tZ)(b.View, {
                                      children:
                                        !(
                                          "price-detail" === De ||
                                          "recommendGreenPop" === De ||
                                          "show-member-pop" === De ||
                                          "speedPackChangeTipPop" === De ||
                                          "specificallyGrabDrawer" === De ||
                                          "seasonMemberShipDrawer" === De ||
                                          "specialPersonGrabSelecterDrawer" ===
                                            De ||
                                          "specialPersonGrabInterceptDrawer" ===
                                            De ||
                                          "seasonMemberInterceptDrawer" ===
                                            De ||
                                          "promiseIntoCarDrawer" === De ||
                                          "recommendSeatUpgradePop" === De ||
                                          "RobCouponListDrawer" === De
                                        ) &&
                                        (0, T.tZ)(b.View, {
                                          className:
                                            "backmask " + (De ? "active" : ""),
                                          id: "AHBX",
                                          onClick: this.hideBackDrop,
                                          onTouchMove: this.noop,
                                        }),
                                    }),
                                    this.renderSelectView(),
                                  ],
                                }),
                                (0, T.BX)(b.View, {
                                  className:
                                    "grab-speed-pop " + (Ae ? "active" : ""),
                                  catchMove: !0,
                                  children: [
                                    (0, T.BX)(b.View, {
                                      className: "grab-speed-pop-hd",
                                      children: [
                                        (0, T.BX)(b.View, {
                                          className: "left-txt",
                                          children: [
                                            (0, T.tZ)(b.Text, {
                                              className: "tit",
                                              children: B
                                                ? "正在计算中..."
                                                : (0, T.tZ)(b.Block, {
                                                    children:
                                                      F.ZP.getSuccessRateText(
                                                        G || A
                                                      ),
                                                  }),
                                            }),
                                            (0, T.tZ)(b.Text, {
                                              className: "desc",
                                              children: " (".concat(
                                                (null == X ||
                                                null === (y = X.selectedItem) ||
                                                void 0 === y
                                                  ? void 0
                                                  : y.title) || "",
                                                "成功率)"
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, T.tZ)(b.View, {
                                          className: v ? "btn ty" : "btn zx",
                                          id: "AHBY",
                                          onClick: this.upSpeedSlider,
                                          children: "提升速度",
                                        }),
                                      ],
                                    }),
                                    (0, T.BX)(b.View, {
                                      className:
                                        "pop-botm-bd pop-speed-box " +
                                        (xe ? "iphone-x" : ""),
                                      children: [
                                        (0, T.tZ)(be, {
                                          data: (0, h.Z)(
                                            (0, h.Z)({}, X),
                                            {},
                                            { a: 1 }
                                          ),
                                          speedSliderTouchendHandler:
                                            this.speedSliderTouchendHandler,
                                          speedSliderTouchmoveHandler:
                                            this.speedSliderTouchmoveHandler,
                                        }),
                                        (0, T.BX)(b.View, {
                                          className: "pop-speed-info",
                                          children: [
                                            X &&
                                              X.selectedItem &&
                                              (0, T.BX)(b.View, {
                                                className:
                                                  "tit flex-align-items-center",
                                                children: [
                                                  X.selectedItem.title + "抢票",
                                                  (0, T.BX)(b.Text, {
                                                    className: "tred",
                                                    children: [
                                                      (0, T.tZ)(b.Text, {
                                                        className: "price",
                                                        children:
                                                          "¥" +
                                                          X.selectedItem
                                                            .speedPkgNums *
                                                            X.costPrice,
                                                      }),
                                                      "/人",
                                                    ],
                                                  }),
                                                  !!Ct &&
                                                    (0, T.tZ)(Q.Z, {
                                                      mode: "img",
                                                      iconUrl:
                                                        "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_16.png",
                                                      onClickHandle:
                                                        function () {
                                                          return w.onShowCouponInfoDrawer(
                                                            Ct
                                                          );
                                                        },
                                                    }),
                                                ],
                                              }),
                                            null != X &&
                                            X.selectedItem &&
                                            We &&
                                            We.availablePackageNum > 0
                                              ? (0, T.BX)(b.View, {
                                                  className:
                                                    "available-package-num ".concat(
                                                      v ? "ty" : "zx"
                                                    ),
                                                  children: [
                                                    (0, T.tZ)(b.Image, {
                                                      src: v
                                                        ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_jiasubao_ty.png"
                                                        : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_jiasubao_zx.png",
                                                      className: "img",
                                                    }),
                                                    (0, T.BX)(b.Text, {
                                                      className: "apn-txt",
                                                      children: [
                                                        "账户有",
                                                        (0, T.tZ)(b.Text, {
                                                          className: v
                                                            ? "primaryColor ty"
                                                            : "primaryColor zx",
                                                          children:
                                                            We.availablePackageNum,
                                                        }),
                                                        "个",
                                                        Z.Z.SPEED_PACK,
                                                        "，",
                                                        "低速" ===
                                                        X.selectedItem.title
                                                          ? (0, T.tZ)(b.Text, {
                                                              children:
                                                                "使用时自动抵扣",
                                                            })
                                                          : (0, T.BX)(b.Text, {
                                                              children: [
                                                                "已使用",
                                                                We.availablePackageNum >
                                                                X.selectedItem
                                                                  .speedPkgNums *
                                                                  M
                                                                  ? X
                                                                      .selectedItem
                                                                      .speedPkgNums *
                                                                    M
                                                                  : We.availablePackageNum,
                                                                "个",
                                                                (0, T.BX)(
                                                                  b.Text,
                                                                  {
                                                                    style:
                                                                      "color: #FF5959;",
                                                                    children: [
                                                                      "抵扣¥",
                                                                      (We.availablePackageNum >
                                                                      X
                                                                        .selectedItem
                                                                        .speedPkgNums *
                                                                        M
                                                                        ? X
                                                                            .selectedItem
                                                                            .speedPkgNums *
                                                                          M
                                                                        : We.availablePackageNum) *
                                                                        X.costPrice,
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                      ],
                                                    }),
                                                  ],
                                                })
                                              : (0, T.tZ)(b.View, {}),
                                            Ie &&
                                            null != X &&
                                            X.selectedItem &&
                                            "低速" !== X.selectedItem.title
                                              ? (0, T.BX)(b.View, {
                                                  className: "txt first-txt",
                                                  children: [
                                                    Ie + "会员赠送",
                                                    (0, T.tZ)(b.Text, {
                                                      className: v
                                                        ? "primaryColor ty"
                                                        : "primaryColor zx",
                                                      children:
                                                        (10 *
                                                          Xe *
                                                          X.selectedItem
                                                            .speedPkgNums) /
                                                          10 -
                                                        X.selectedItem
                                                          .speedPkgNums,
                                                    }),
                                                    "个".concat(
                                                      Z.Z.SPEED_PACK
                                                    ) +
                                                      (X.selectedItem.title
                                                        ? "，开抢后享受" +
                                                          X.selectedItem.title +
                                                          "抢票。"
                                                        : ""),
                                                  ],
                                                })
                                              : (0, T.tZ)(b.View, {
                                                  className: "txt first-txt",
                                                  style: "color: #FF5959;",
                                                  children:
                                                    "1M低速宽带抢票，网络速度较拥挤",
                                                }),
                                            (0, T.BX)(b.View, {
                                              className: "txt",
                                              children: [
                                                "任何原因取消抢票或抢票失败，承诺",
                                                (0, T.tZ)(b.Text, {
                                                  style: "color: #fc6e51;",
                                                  children: "全额退款！",
                                                }),
                                              ],
                                            }),
                                            Ct &&
                                              (0, T.BX)(b.View, {
                                                className: "txt",
                                                children: [
                                                  "抢票成功即送",
                                                  Ct,
                                                  "元酒店优惠券",
                                                ],
                                              }),
                                          ],
                                        }),
                                        (0, T.BX)(b.View, {
                                          className: "add-btn ".concat(
                                            v ? "ty" : "zx"
                                          ),
                                          id: "AHBZ",
                                          onClick: this.confirmSelectedSpeed,
                                          children: [
                                            We &&
                                              (null == X
                                                ? void 0
                                                : X.selectedItem) &&
                                              "¥" +
                                                (We.availablePackageNum -
                                                  X.selectedItem.speedPkgNums *
                                                    M >
                                                0
                                                  ? 0
                                                  : X.selectedItem
                                                      .speedPkgNums *
                                                      M -
                                                    We.availablePackageNum) *
                                                  X.costPrice +
                                                " ",
                                            "确认选择",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                "recommendSpeedPop" === De &&
                                  (0, T.tZ)(b.View, {
                                    className: "pop-botm active",
                                    children: (0, T.BX)(b.View, {
                                      className: "pop-botm-bd pop-dsf-box",
                                      children: [
                                        (0, T.BX)(b.View, {
                                          className:
                                            "pop-dsf-hd " + (v ? "ty" : "zx"),
                                          children: [
                                            (0, T.BX)(b.View, {
                                              className: "strong",
                                              children: [
                                                "当前",
                                                (0, T.tZ)(b.Text, {
                                                  className: "color-red",
                                                  children: Me && Me.count,
                                                }),
                                                "人正在抢该路线",
                                              ],
                                            }),
                                            (0, T.tZ)(b.View, {
                                              className: "txt color-red",
                                              children:
                                                "票源紧张，" +
                                                X.items[0].title +
                                                "抢票很可能抢不到票！",
                                            }),
                                          ],
                                        }),
                                        (0, T.BX)(b.View, {
                                          className: "pop-dsf-bd",
                                          children: [
                                            (0, T.BX)(b.View, {
                                              className: "tit",
                                              children: [
                                                "建议选择" +
                                                  X.defaultItem.title +
                                                  "抢票",
                                                (0, T.tZ)(b.Text, {
                                                  className:
                                                    "tag color-red bdcolor-red",
                                                  children: "已选用户最多",
                                                }),
                                                (0, T.tZ)(b.Text, {
                                                  className: "fr",
                                                  children:
                                                    "¥" +
                                                    X.defaultItem.speedPkgNums +
                                                    "/人",
                                                }),
                                              ],
                                            }),
                                            (0, T.BX)(b.View, {
                                              className: "item",
                                              children: [
                                                "任何原因取消抢票或抢票失败，承诺",
                                                (0, T.tZ)(b.Text, {
                                                  className: "color-red",
                                                  children: "全额退款",
                                                }),
                                                "！",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, T.BX)(b.View, {
                                          className: "pop-dsf-btn",
                                          children: [
                                            (0, T.BX)(b.Button, {
                                              className: "btn-grey",
                                              id: "AHBa",
                                              onClick: this.submitGrabFree,
                                              children: [
                                                "开始" +
                                                  (X.items[0].title || "") +
                                                  "抢票",
                                                (0, T.tZ)(b.Text, {
                                                  children:
                                                    "成功率 " +
                                                    (F.ZP.getSuccessRateText(
                                                      _e
                                                    ) || "_%"),
                                                }),
                                              ],
                                            }),
                                            (0, T.BX)(b.Button, {
                                              className: "btn-red",
                                              id: "AHBb",
                                              onClick:
                                                this.submitWithPackageSelection,
                                              "data-type": "default",
                                              children: [
                                                "开始" +
                                                  (X.defaultItem.title || "") +
                                                  "抢票",
                                                (0, T.tZ)(b.Text, {
                                                  children:
                                                    "成功率 " +
                                                    F.ZP.getSuccessRateText(Le),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                (0, T.tZ)(pe, {
                                  visible: "recommendGreenPop" === De,
                                  isXbookProductType: pt,
                                  greenChannelInfo: Ue,
                                  drawerStatus: He,
                                  checked: Oe,
                                  onClose: this.closeShowType,
                                  onProductOperation:
                                    this.onGreenChannelDrawerPay,
                                  onChecked: this.onGreenChannelDrawerChecked,
                                  ubtTrace: this.ubtTrace,
                                }),
                                (0, T.tZ)(he, {
                                  visible:
                                    "specialPersonGrabInterceptDrawer" === De,
                                  content: ut,
                                  onClose: this.closeShowType,
                                  onProductOperation:
                                    this.onSpecialPersonGrabInterceptDrawerPay,
                                }),
                                (0, T.tZ)(me, {
                                  visible: "seasonMemberInterceptDrawer" === De,
                                  greenChannelInfo: Ue,
                                  content: bt,
                                  onClose: this.closeShowType,
                                  onProductOperation:
                                    this.onSeasonMemberInterceptDrawerPay,
                                }),
                                Re &&
                                  (0, T.tZ)(oe, {
                                    visible: "show-member-pop" === De,
                                    vipRightPriceMerge: Re,
                                    buyMemberSucRate: ie,
                                    isInformalVip: ne,
                                    onClose: this.hideBackDrop,
                                    onConfirm: this.onConfirmBuyMember,
                                  }),
                                "show-priority-ticket-right-pop" === De &&
                                  ge &&
                                  (0, T.tZ)(b.Block, {
                                    children: ge.toast.descTitle
                                      ? (0, T.BX)(b.View, {
                                          className: "pop-youxian card",
                                          children: [
                                            (0, T.BX)(b.Button, {
                                              className: "btn-big btn-go",
                                              id: "AHBc",
                                              onClick:
                                                this
                                                  .closePriorityTicketRightPop,
                                              children: [
                                                ge.toast.btnName || "好的",
                                                (0, T.tZ)(b.Text, {
                                                  children:
                                                    "¥" +
                                                    ge.price +
                                                    " 抢票失败全额退款",
                                                }),
                                              ],
                                            }),
                                            (0, T.BX)(b.View, {
                                              className: "pop-youxian-bd",
                                              children: [
                                                (0, T.BX)(b.View, {
                                                  className: "tit",
                                                  children: [
                                                    ge.toast.descTitle,
                                                    ge.toast.tag &&
                                                      (0, T.tZ)(b.Text, {
                                                        className: "tag",
                                                        children: ge.toast.tag,
                                                      }),
                                                  ],
                                                }),
                                                ge.toast.newDescSubTitle &&
                                                  (0, T.tZ)(g.ZtRichText, {
                                                    className: "txt",
                                                    nodes:
                                                      ge.toast.newDescSubTitle,
                                                  }),
                                                (0, T.tZ)(b.View, {
                                                  className: "tgrey",
                                                  children:
                                                    (ge.toast.desc &&
                                                      ge.toast.desc.join()) ||
                                                    "若该时段内未抢票成功，可退订".concat(
                                                      Z.Z.PRIORITY_TICKET,
                                                      "特权"
                                                    ),
                                                }),
                                              ],
                                            }),
                                            (0, T.tZ)(b.Text, {
                                              className:
                                                "ifont-closed iconfont",
                                              id: "AHBd",
                                              onClick:
                                                this
                                                  .closePriorityTicketRightPop,
                                            }),
                                          ],
                                        })
                                      : (0, T.BX)(b.View, {
                                          className: "pop-youxian",
                                          children: [
                                            (0, T.BX)(b.Button, {
                                              className: "btn-big btn-go",
                                              id: "AHBe",
                                              onClick:
                                                this
                                                  .closePriorityTicketRightPop,
                                              children: [
                                                ge.toast.btnName || "好的",
                                                (0, T.tZ)(b.Text, {
                                                  children:
                                                    "¥" +
                                                    ge.price +
                                                    " 抢票失败全额退款",
                                                }),
                                              ],
                                            }),
                                            (0, T.tZ)(b.Text, {
                                              className:
                                                "ifont-closed iconfont",
                                              id: "AHBf",
                                              onClick:
                                                this
                                                  .closePriorityTicketRightPop,
                                            }),
                                          ],
                                        }),
                                  }),
                                "swell-money-popup" === De &&
                                  (0, T.tZ)(b.View, {
                                    className: "shade-box",
                                    id: "AHBg",
                                    onClick: this.closeSwellMoneyPopup,
                                  }),
                                "swell-money-popup" === De &&
                                  (0, T.tZ)(b.View, {
                                    className: "pop-swell-money",
                                    id: "AHBh",
                                    onClick: this.closeSwellMoneyPopup,
                                    children: (0, T.tZ)(b.Text, {
                                      className: "ifont-closed iconfont",
                                      id: "AHBi",
                                      onClick: this.closeSwellMoneyPopup,
                                    }),
                                  }),
                                ze && (0, T.tZ)(P.Z, { style: { top: "5%" } }),
                                (0, T.tZ)(ee.Z, {
                                  fromPage: "grabrate",
                                  visible: "promiseIntoCarDrawer" === De,
                                  topTitle: Je,
                                  content: Ye,
                                  onConfirm: function (e) {
                                    w.closeShowType(),
                                      w.confirmPromiseIntoCarInfo(e),
                                      w.resetPrice();
                                  },
                                  onClose: function () {
                                    w.closeShowType(),
                                      w.setData({ promiseIntoCarChecked: !1 });
                                  },
                                  seatNameList: this.seatNameList,
                                }),
                                "speedPackChangeTipPop" === De &&
                                  (0, T.tZ)(q.Z, {
                                    visible: "speedPackChangeTipPop" === De,
                                    fromPage: "grabrate",
                                    imgSrc: it,
                                    ubtTrace: this.ubtTrace,
                                    onClose: this.closeShowType,
                                  }),
                                (0, T.tZ)(W.Z, {
                                  visible: "specificallyGrabDrawer" === De,
                                  content: st,
                                  price: null == nt ? void 0 : nt.price,
                                  drawerStatus: ot,
                                  isXbookProductType: pt,
                                  hasChecked: at,
                                  fromPage: "grabrate",
                                  onClose: this.closeShowType,
                                  onRefuse: function () {
                                    w.setData({
                                      isSpecificallyGrabChecked: !1,
                                    }),
                                      w.resetPrice(),
                                      w.closeShowType();
                                  },
                                  onConfirm: function () {
                                    w.ubtTrace(203520, {
                                      bizKey:
                                        "z_grab_success_24h_zrq_actionbar_click",
                                    }),
                                      w.setData({
                                        isSpecificallyGrabChecked: !0,
                                      }),
                                      w.resetPrice(),
                                      w.closeShowType();
                                  },
                                  ubtTrace: this.ubtTrace,
                                }),
                                (0, T.tZ)(J.Z, {
                                  visible: "seasonMemberShipDrawer" === De,
                                  checked: z,
                                  isXbookProductType: pt,
                                  drawerStatus: ft,
                                  content: mt,
                                  onClose: function () {
                                    w.closeShowType();
                                  },
                                  onRefuse: function () {
                                    z && w.changeBuyMember(!1),
                                      w.closeShowType();
                                  },
                                  onConfirm: function () {
                                    z || w.changeBuyMember(!0),
                                      w.closeShowType();
                                  },
                                  ubtTrace: this.ubtTrace,
                                }),
                                (0, T.tZ)(Pe, {
                                  visible:
                                    "specialPersonGrabSelecterDrawer" === De,
                                  content: ct,
                                  productType: dt,
                                  onClose: this.closeShowType,
                                  onConfirm: function (e) {
                                    w.setData({ specialPersonGrabType: e }),
                                      w.closeShowType(),
                                      w.resetPrice();
                                  },
                                  ubtTrace: this.ubtTrace,
                                }),
                                (0, T.tZ)(Y.Z, {
                                  visible: "recommendSeatUpgradePop" === De,
                                  isXbookProductType: pt,
                                  content: je,
                                  drawerStatus: qe,
                                  pageId: this.pageId,
                                  checked: Ke,
                                  onClose: this.closeShowType,
                                  onProductOperation:
                                    this.onSeatUpgradeDrawerPay,
                                  onChecked: this.onSeatUpgradeBannerChecked,
                                  ubtTrace: this.ubtTrace,
                                }),
                                St &&
                                  (0, T.tZ)($.Z, {
                                    detailInfo: {
                                      title: "产品说明",
                                      content: St,
                                    },
                                    onClose: function () {
                                      w.setData({ couponDescDrawerInfo: null });
                                    },
                                  }),
                                (0, T.tZ)(te.ZP, {
                                  isShow: "RobCouponListDrawer" === De,
                                  onClose: this.closeShowType.bind(this),
                                  onConfirmCouponList:
                                    this.onConfirmCouponList.bind(this),
                                  couponList: vt,
                                }),
                                (0, T.tZ)(x.Z, {
                                  ref: function (e) {
                                    w.onDrawerAttach(e);
                                  },
                                }),
                                (0, T.tZ)(j.Z, {
                                  ref: function (e) {
                                    w.onDialogAttach(e);
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
                ) || Ie)
            ) || Ie;
          Page(
            (0, a.createPageConfig)(
              _e,
              "pages/trainRob/grabrate/grabrate",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "提升成功率",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            31593, 3322, 36332, 95854, 35203, 4978, 20858, 19772, 87032, 82524,
            43278, 42552, 67074, 62396, 54576, 85786, 20481, 14810, 3997, 55464,
            74171, 55525, 25323, 50460, 7934, 74492, 77923, 35835, 1768, 94181,
            5182, 59337, 92167, 70592, 15924, 10162, 30341, 42658, 51059, 77097,
            42500, 63585, 69455, 79793, 42421, 91159, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(34759);
          }
        ),
          e.O();
      },
    ]);
})();
