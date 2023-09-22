!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [96432],
      {
        28184: function (t, e, i) {
          var o,
            n = i(32180),
            a = i(57042),
            c = i(24460),
            s = i(21867),
            r = i(86066),
            l = i(52500),
            h = i(71515),
            d = i(92954),
            u = i.n(d),
            p = i(48792),
            g = i.n(p),
            m = i(79792),
            C = i(3205),
            y = i(13025),
            f = i(27113),
            w = i(18783),
            N = (i(49120), i(79910)),
            L = i(45066),
            v = i(73851),
            D = i(55099),
            S = i(36039),
            Z = i(80048),
            I = i(20689),
            k = i(81957),
            A = i(48813),
            B = S.Z.deepClone,
            T = S.Z.isEmptyObj,
            V = S.Z.dealCityItem,
            b = 864e5,
            x = { cityName: "上海", cityID: 2 },
            F = {
              pageId: m.default.isTieyou ? "10650059436" : "10650059418",
              data: {
                isTieyou: m.default.isTieyou,
                isShowMoreBtn: !1,
                showSwitchCityModal: !1,
                showConfirmLocationModal: !1,
                loadingState: 1,
                themeTagList: [],
                spotList: [],
                newLocateCity: null,
                historyList: [],
                currentCity: { cityID: null, cityName: "..." },
                isLogin: !1,
                couponList: [],
                sceneID: "",
                isShowCouponAlert: !1,
                isShowCouponStick: !0,
                totalCoupon: 0,
                couponBgImage:
                  "https://images3.c-ctrip.com/ztrip/attractionTicket/couponBgTitleNew.png",
                couponBtnImage:
                  "https://images3.c-ctrip.com/ztrip/attractionTicket/receiveCouponBtn.png",
                couponBgColor: ["#FF1A25", "#FD1440", "#FF1A25", "#FD1440"],
              },
              onLoad: function (t) {
                var e = this;
                (this.options = t = L.cQ.parseQrCodeScene(t)),
                  d.eventCenter.once("receiveCoupon", function () {
                    e.setData({ isShowCouponStick: !1 });
                  }),
                  this.queryCoupon(),
                  this.getCityListHistory(),
                  this.getCityList();
                var i = t,
                  o = i.cityID,
                  n = i.cityName;
                if (o && n) {
                  var a = { cityID: o, cityName: n };
                  I.$s.set(a),
                    this.setData({ currentCity: a }),
                    this.getHotSpotList();
                } else
                  this.setData(
                    { currentCity: { cityID: null, cityName: "定位中..." } },
                    function () {
                      e.isNeedSwitchCity(), e.initPage();
                    }
                  );
              },
              onShow: function () {
                w.ZP.isLogin && this.setData({ isLogin: !0 }),
                  console.log("onshow");
                var t = I.$s.get();
                !T(t) &&
                  t.cityID &&
                  t.cityID !== this.data.currentCity.cityID &&
                  (console.log(t),
                  this.setData({ currentCity: t }),
                  this.getHotSpotList());
              },
              goSearchPage: function () {
                var t = B(this.data.currentCity),
                  e = this.options.source,
                  i = void 0 === e ? "wechat" : e;
                (t.source = i), L.F0.navigateTo("search", t);
              },
              queryCoupon: function () {
                var t = this,
                  e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                (0, D.Ur)({ sceneID: Z.b, backType: 0, needCoupon: 0 })
                  .then(function (i) {
                    if ((console.log("获取优惠券", i), 1 == i.resultCode)) {
                      var o = i.promotionReceiveScenicSpotCouponList || [];
                      if (o.length > 0) {
                        var n = 0;
                        o &&
                          o.length > 0 &&
                          o.forEach(function (t) {
                            return (n += t.price);
                          });
                        var a = I.v8.get(),
                          c = !1,
                          s = !0,
                          r = Date.now();
                        a
                          ? r - a > b && ((c = !0), (s = !1), I.v8.set(r))
                          : (I.v8.set(r), (c = !0), (s = !1));
                        var l =
                            i.couponBgImage ||
                            "https://images3.c-ctrip.com/ztrip/attractionTicket/couponBgTitleNew.png",
                          h =
                            i.couponBtnImage ||
                            "https://images3.c-ctrip.com/ztrip/attractionTicket/receiveCouponBtn.png",
                          d = i.couponBgColor || [
                            "#FF1A25",
                            "#FD1440",
                            "#FF1A25",
                            "#FD1440",
                          ];
                        e
                          ? t.setData({
                              couponList: o,
                              totalCoupon: n,
                              sceneID: i.sceneID,
                              isShowCouponAlert: !0,
                              isShowCouponStick: !1,
                              couponBgImage: l,
                              couponBtnImage: h,
                              couponBgColor: d,
                            })
                          : t.setData({
                              couponList: o,
                              totalCoupon: n,
                              sceneID: i.sceneID,
                              isShowCouponAlert: c,
                              isShowCouponStick: s,
                              couponBgImage: l,
                              couponBtnImage: h,
                              couponBgColor: d,
                            });
                      } else
                        t.setData(
                          { isShowCouponAlert: !1, isShowCouponStick: !1 },
                          function () {
                            e &&
                              setTimeout(function () {
                                v.Z.showToast("您已经领取过优惠券了！");
                              }, 300);
                          }
                        );
                    } else
                      t.setData({
                        isShowCouponAlert: !1,
                        isShowCouponStick: !1,
                      });
                  })
                  .catch(function (t) {
                    console.log(t);
                  });
              },
              getCityListHistory: function () {
                var t = I.O5.getAttr("historyCities");
                t
                  ? this.setData({ historyList: t })
                  : this.setData({ historyList: [] });
              },
              isNeedSwitchCity: function () {
                var t = this,
                  e = I.$s.get(),
                  i = I.sE.get();
                !T(i) &&
                  e &&
                  (0, f.CC)()
                    .then(
                      function (o) {
                        var n = o.cityId,
                          a = { cityID: n, cityName: o.cityName };
                        I.sE.set(a),
                          n &&
                            a.cityID !== i.cityID &&
                            a.cityID !== e.cityID &&
                            t.setData({
                              newLocateCity: a,
                              showSwitchCityModal: !0,
                            });
                      },
                      function (t) {
                        console.log(t);
                      }
                    )
                    .catch(function () {});
              },
              getCityList: function () {
                var t = (I.O5.get() || {}).cityMainList || {};
                T(t) &&
                  (0, D.tn)()
                    .then(function (t) {
                      if (1 === t.resultCode) {
                        var e = t.domesticCity,
                          i = e.cities;
                        i.forEach(function (t) {
                          V(t.cities);
                        }),
                          console.log(i);
                        var o = e.recommendcities;
                        V(o), I.O5.setAttr("hotCities", o);
                        var n = N._.map(i, "firstchar");
                        I.O5.setAttr("cityTags", n);
                        var a = {};
                        i.forEach(function (t) {
                          a[t.firstchar] = t.cities;
                        }),
                          I.O5.setAttr("cityMainList", a);
                      }
                    })
                    .catch(function () {});
              },
              goCitySelPage: function () {
                var t = this,
                  e = { inlandCities: I.O5.get() || {}, interCities: {} };
                console.log("citydata", e),
                  C.Z.city(
                    {
                      title: "目的地列表",
                      bu: "ticket",
                      handleSearch: function (t, e, i) {
                        var o = [];
                        (0, D.Z$)({ keyword: t, overseasCityFlag: 0 }).then(
                          function (t) {
                            1 === t.resultCode && ((o = t.cities), V(o), i(o));
                          }
                        );
                      },
                      loadData: function (t) {
                        t(e);
                      },
                      handleCurrentPosition: function (t, e) {
                        var i = {
                          Latitude: t.latitude,
                          Longitude: t.longitude,
                          Language: "CN",
                        };
                        (0, y.T_)(i)
                          .then(function (t) {
                            console.log(t),
                              e({
                                cityName: t.CityEntities[0].CityName,
                                cityID: t.DistrictId,
                                countryName: t.CountryName,
                              });
                          })
                          .catch(function () {});
                      },
                    },
                    function (e) {
                      console.log("选中的城市", e);
                      var i = { cityID: e.cityID, cityName: e.cityName };
                      I.$s.set(i),
                        t.setData({ currentCity: i }),
                        t.pushToHistory(e),
                        t.getHotSpotList();
                    }
                  );
              },
              pushToHistory: function (t) {
                var e = this.data.historyList;
                if (0 == e.length) e.push(t);
                else {
                  for (var i = B(t), o = 0; o < e.length; o++)
                    if (
                      Number(t.cityID) === Number(e[o].cityID) &&
                      t.cityName === e[o].cityName
                    ) {
                      e.splice(o, 1);
                      break;
                    }
                  e.unshift(i), (e = e.slice(0, 4));
                }
                this.setData({ historyList: e }),
                  I.O5.setAttr("historyCities", e);
              },
              getHotSpotList: function () {
                var t = this,
                  e = this.data.currentCity || x,
                  i = this.data.loadingState,
                  o = {
                    cityID: e.cityID + "",
                    cityName: e.cityName,
                    responseDataType: 0,
                    imageSizeKey: "C_500_280_Q90",
                    sceneID: Z.b,
                  };
                console.log(e),
                  console.log("请求city1111111111111111111", o),
                  v.Z.showLoading(""),
                  (0, D.Gw)(o)
                    .then(function (e) {
                      if (
                        (console.log("景点数据", e),
                        v.Z.hideLoading(),
                        1 === e.resultCode)
                      ) {
                        var o = e.labelStatisticShowList || [];
                        o.splice(5);
                        var n = B(e.scenicSpotList);
                        (n && 0 != n.length) || (i = 2);
                        var a = !1;
                        n.length > 8 && (a = !0),
                          n.splice(8),
                          n.forEach(function (t) {
                            t.commentGrade > 0
                              ? (t.commentGrade = t.commentGrade.toFixed(1))
                              : (t.commentGrade = "暂无评");
                            var e = "";
                            t.displayTagList.forEach(function (t) {
                              t.includes("已售") && (e = t);
                            }),
                              (t.displayTagList = e);
                          }),
                          t.setData(
                            {
                              themeTagList: o,
                              spotList: n,
                              isShowMoreBtn: a,
                              loadingState: i,
                            },
                            function () {}
                          );
                      } else v.Z.hideLoading(), t.setData({ loadingState: 3 });
                    })
                    .catch(function () {
                      t.setData({ loadingState: 3 }), v.Z.showToast("网络超时");
                    });
              },
              tagClick: function (t) {
                var e = this.data.currentCity,
                  i = e.cityID,
                  o = e.cityName,
                  n = t.currentTarget.dataset.item,
                  a = this.options.source,
                  c = void 0 === a ? "wechat" : a,
                  s = {
                    text: n.text,
                    spotValue: n.value,
                    cityID: i,
                    cityName: o,
                    source: c,
                  };
                console.log(s), L.F0.navigateTo("list", s), console.log(n);
              },
              spotClick: function (t) {
                var e = t.currentTarget.dataset.item,
                  i = this.options.source,
                  o = void 0 === i ? "wechat" : i,
                  n = {
                    scenicSpotId: e.iD,
                    scenicInfo: encodeURIComponent(
                      JSON.stringify({
                        address: e.address,
                        commentCount: e.commentCount,
                        commentGrade: e.commentGrade,
                        iD: e.iD,
                        name: e.name,
                        pmRecommand: e.pmRecommand,
                        sortDesc: e.sortDesc,
                        star: e.star,
                      })
                    ),
                    source: o,
                  };
                L.F0.navigateTo("detail", n);
              },
              viewMoreSpot: function () {
                var t = this.data.currentCity,
                  e = t.cityID,
                  i = t.cityName,
                  o = this.options.source,
                  n = {
                    text: "",
                    spotValue: "",
                    cityID: e,
                    cityName: i,
                    source: void 0 === o ? "wechat" : o,
                  };
                console.log(n), L.F0.navigateTo("list", n);
              },
              initPage: function () {
                var t = this,
                  e = I.$s.get();
                if ((console.log("当前所选城市", e), !T(e) && e.cityID))
                  this.setData({ currentCity: e }), this.getHotSpotList();
                else {
                  var i = function (e) {
                    var i =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    console.log("携程定位失败", e),
                      v.Z.hideLoading(),
                      t.setData({ currentCity: x }),
                      I.$s.set(x);
                    var o = I.RX.get(),
                      n = Date.now();
                    o
                      ? n - o > b &&
                        (i && t.setData({ showConfirmLocationModal: !0 }),
                        I.RX.set(n))
                      : (t.setData({ showConfirmLocationModal: !0 }),
                        I.RX.set(n)),
                      t.getHotSpotList();
                  };
                  (0, f.CC)().then(
                    function (e) {
                      e.latitude && e.longitude
                        ? t.dealCtripCityRes(e.cityId, e.cityName, !0)
                        : i();
                    },
                    function (t) {
                      console.log(t), i(t);
                    }
                  );
                }
              },
              dealCtripCityRes: function (t, e) {
                var i =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                if (e && t) {
                  var o = { cityID: t, cityName: e };
                  i && I.sE.set(o),
                    this.setData({ currentCity: o }),
                    I.$s.set(o),
                    this.getHotSpotList();
                }
              },
              handleHideConfirmModal: function () {
                this.setData({ showConfirmLocationModal: !1 });
              },
              handlerOpenSetting: function (t) {
                var e = this;
                this.handleHideConfirmModal(),
                  t.detail.authSetting["scope.userLocation"] &&
                    (console.log("开启定位"),
                    (0, f.CC)()
                      .then(
                        function (t) {
                          e.dealCtripCityRes(t.cityId, t.cityName, !0);
                        },
                        function (t) {
                          console.log(t);
                        }
                      )
                      .catch(function () {}));
              },
              closeSwitchModal: function () {
                this.setData({ showSwitchCityModal: !1 });
              },
              switchCity: function () {
                var t = this.data.newLocateCity;
                I.$s.set(t),
                  this.setData({ currentCity: t, showSwitchCityModal: !1 }),
                  this.getHotSpotList();
              },
              receiveAfterCheckLogin: function () {
                var t = this;
                v.Z.isLogin(!0)
                  .then(function (e) {
                    e
                      ? t.receiveCoupon()
                      : t.doLogin(function () {
                          t.queryCoupon(!0);
                        });
                  })
                  .catch(function () {
                    t.showToast("网络超时");
                  });
              },
              receiveCoupon: function () {
                var t = this;
                this.setData({ isShowCouponAlert: !1 }, function () {
                  var e = t.data,
                    i = e.couponList,
                    o = e.sceneID,
                    n = [];
                  i.forEach(function (t) {
                    n.push(t.promotionKey);
                  }),
                    v.Z.showLoading("处理中..."),
                    (0, D._d)({
                      sceneID: o,
                      promotionReceiveScenicSpotCouponList: n,
                    })
                      .then(function (e) {
                        v.Z.hideLoading(),
                          console.log("领取优惠券结果", e),
                          1 === e.resultCode
                            ? (v.Z.showToast({ message: "领取成功" }),
                              t.setData({ isShowCouponStick: !1 }))
                            : (t.setData({ isShowCouponStick: !0 }),
                              v.Z.showToast(e.resultMessage || "网络错误～"));
                      })
                      .catch(function () {
                        v.Z.hideLoading();
                      });
                });
              },
              doLogin: function (t) {
                var e = this;
                w.ZP.doLogin().then(
                  function () {
                    e.setData({ isLogin: !0 }), t && t();
                  },
                  function () {
                    u().showToast({
                      title: "取消登录",
                      icon: "none",
                      duration: 1500,
                    });
                  }
                );
              },
              receiveCouponAfterLogin: function () {
                var t = this;
                this.doLogin(function () {
                  t.queryCoupon(!0);
                });
              },
              toggleCouponListPop: function () {
                this.setData({ isShowCouponAlert: !1, isShowCouponStick: !0 });
              },
              showCouponAlert: function () {
                this.setData({ isShowCouponAlert: !0, isShowCouponStick: !1 });
              },
            },
            M =
              (0, k.h)()(
                (o =
                  g()(F)(
                    (o = (function (t) {
                      (0, s.Z)(i, t);
                      var e = (0, r.Z)(i);
                      function i() {
                        return (0, a.Z)(this, i), e.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var t = this,
                                e = this.data,
                                i = e.currentCity,
                                o = e.themeTagList,
                                n = e.isShowMoreBtn,
                                a = e.spotList,
                                c = e.partner,
                                s = e.loadingState,
                                r = e.isTieyou,
                                l = e.showConfirmLocationModal,
                                d = e.showSwitchCityModal,
                                u = e.newLocateCity,
                                p = e.isShowCouponAlert,
                                g = e.couponBgImage,
                                m = e.couponBgColor,
                                C = e.couponList,
                                y = e.couponBtnImage,
                                f = e.isLogin,
                                w = e.totalCoupon,
                                N = e.isShowCouponStick;
                              return (0, A.BX)(h.View, {
                                className: "page",
                                children: [
                                  (0, A.tZ)(h.View, {
                                    className: "index-search bgcolor-dark",
                                    children: (0, A.BX)(h.View, {
                                      className: "index-search-bd",
                                      children: [
                                        (0, A.BX)(h.View, {
                                          className: "city",
                                          id: "ALAD",
                                          onClick: this.goCitySelPage,
                                          children: [
                                            (0, A.tZ)(h.Text, {
                                              className: "txt",
                                              children: i.cityName,
                                            }),
                                            (0, A.tZ)(h.Text, {
                                              className: "ifont-arr iconfont",
                                            }),
                                          ],
                                        }),
                                        (0, A.tZ)(h.Text, {
                                          className: "ifont-search iconfont",
                                        }),
                                        (0, A.tZ)(h.View, {
                                          className: "input-txt input-pld",
                                          id: "ALAE",
                                          onClick: this.goSearchPage,
                                          children: "搜索您感兴趣的景点",
                                        }),
                                      ],
                                    }),
                                  }),
                                  a.length > 0
                                    ? (0, A.BX)(h.View, {
                                        className: "index-view",
                                        children: [
                                          (0, A.tZ)(h.View, {
                                            className: "index-type",
                                            children: o.map(function (e, i) {
                                              return (0,
                                              A.BX)(h.View, { className: "item", "data-item": e, id: "ALAF", onClick: t.tagClick, children: [(0, A.tZ)(h.Image, { src: e.iCon }), (0, A.tZ)(h.View, { className: "txt", children: e.text })] }, i);
                                            }),
                                          }),
                                          (0, A.BX)(h.View, {
                                            className: "index-tit",
                                            children: [
                                              (0, A.tZ)(h.View, {
                                                className: "strong",
                                                children: "人气景点",
                                              }),
                                              n &&
                                                (0, A.BX)(h.View, {
                                                  className: "more",
                                                  id: "ALAG",
                                                  onClick: this.viewMoreSpot,
                                                  children: [
                                                    "查看更多",
                                                    (0, A.tZ)(h.Text, {
                                                      className:
                                                        "ifont-arr iconfont",
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          (0, A.tZ)(h.View, {
                                            className: "index-list",
                                            children: a.map(function (e, i) {
                                              return (0,
                                              A.BX)(h.View, { className: "item", id: "ALAH", onClick: t.spotClick, "data-item": e, children: [i < 3 && (0, A.tZ)(h.View, { className: "tag", children: (0, A.tZ)(h.Icon, { className: "no" + (i + 1) }) }), (0, A.tZ)(h.Image, { src: e.imageURL }), e.star >= 4 ? (0, A.tZ)(h.View, { className: "tit", children: e.name + "(" + e.star + "A)" }) : (0, A.tZ)(h.View, { className: "tit", children: e.name }), (0, A.BX)(h.View, { className: "txt", children: [(0, A.tZ)(h.Text, { className: "eva", style: "color:" + ("tieyou" == c ? "#FE4839" : "#198CFF"), children: e.commentGrade + "分" }), !!e.displayTagList && (0, A.tZ)(h.Text, { className: "splitLine" }), e.displayTagList] }), e.salePrice > 0 ? (0, A.BX)(h.View, { className: "price", style: "display:flex;align-items:center", children: [(0, A.tZ)(h.Text, { children: e.salePrice }), (0, A.tZ)(h.Text, { className: "em", style: "margin-top:5rpx", children: "起" }), e.couponInfo && e.couponInfo.couponDesc && e.couponInfo.couponDesc.length > 0 && (0, A.BX)(h.Block, { children: [(0, A.tZ)(h.View, { className: "corner" }), (0, A.tZ)(h.View, { className: "cornerRight", children: (0, A.tZ)(h.Text, { className: "couponDescStyle", children: e.couponInfo.couponDesc }) })] })] }) : (0, A.tZ)(h.View, { className: "price noIcon", children: (0, A.tZ)(h.Text, { className: "em" }) })] }, "iD");
                                            }),
                                          }),
                                          n &&
                                            (0, A.tZ)(h.View, {
                                              className: "index-btnbox",
                                              children: (0, A.tZ)(h.View, {
                                                id: "ALAI",
                                                onClick: this.viewMoreSpot,
                                                className: "btn-primary",
                                                style:
                                                  "display:flex;justify-content:center",
                                                children: "查看更多景点",
                                              }),
                                            }),
                                        ],
                                      })
                                    : 3 == s
                                    ? (0, A.tZ)(h.View, {
                                        children: (0, A.BX)(h.View, {
                                          className: "page-blank-bd",
                                          children: [
                                            (0, A.tZ)(h.Image, {
                                              src:
                                                "http://images3.c-ctrip.com/zt/wechat/" +
                                                (r
                                                  ? "img-blank-ty"
                                                  : "img-blank-zx") +
                                                ".png",
                                              className: "img-blank",
                                            }),
                                            (0, A.tZ)(h.View, {
                                              className: "txt",
                                              children:
                                                "当前网络不给力，请刷新当前页面重试",
                                            }),
                                            (0, A.tZ)(h.Button, {
                                              className:
                                                "btn-reload btn-primary",
                                              id: "ALAJ",
                                              onClick: this.getHotSpotList,
                                              children: "重新加载",
                                            }),
                                          ],
                                        }),
                                      })
                                    : 2 == s &&
                                      (0, A.tZ)(h.View, {
                                        children: (0, A.BX)(h.View, {
                                          className: "page-blank-bd",
                                          children: [
                                            (0, A.tZ)(h.Image, {
                                              src:
                                                "http://images3.c-ctrip.com/zt/wechat/" +
                                                (r
                                                  ? "img-blank-ty"
                                                  : "img-blank-zx") +
                                                ".png",
                                              className: "img-blank",
                                            }),
                                            (0, A.tZ)(h.View, {
                                              className: "txt",
                                              children:
                                                "该城市暂无人气景点，请切换城市重新查看",
                                            }),
                                          ],
                                        }),
                                      }),
                                  l &&
                                    (0, A.tZ)(h.View, {
                                      id: "ALAK",
                                      onClick: this.handleHideConfirmModal,
                                    }),
                                  l &&
                                    (0, A.BX)(h.View, {
                                      className: "dialog",
                                      children: [
                                        (0, A.tZ)(h.View, {
                                          className: "dialog-hd",
                                          children: (0, A.tZ)(h.Text, {
                                            className: "dialog-title",
                                            children: "开启定位",
                                          }),
                                        }),
                                        (0, A.tZ)(h.View, {
                                          className: "dialog-bd",
                                          children:
                                            "为您推荐身边更多好玩景点～",
                                        }),
                                        (0, A.BX)(h.View, {
                                          className: "dialog-ft",
                                          children: [
                                            (0, A.tZ)(h.Button, {
                                              className:
                                                "dialog-btn dialog-btn-default",
                                              id: "ALAL",
                                              onClick:
                                                this.handleHideConfirmModal,
                                              children: "稍等一会",
                                            }),
                                            (0, A.tZ)(h.Button, {
                                              className:
                                                "dialog-btn dialog-btn-primary",
                                              openType: "openSetting",
                                              onOpenSetting:
                                                this.handlerOpenSetting,
                                              children: "立即开启",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  d &&
                                    (0, A.tZ)(h.View, {
                                      className: "mask",
                                      id: "ALAM",
                                      onClick: this.handleHideConfirmModal,
                                    }),
                                  d &&
                                    u &&
                                    (0, A.BX)(h.View, {
                                      className: "dialog",
                                      children: [
                                        (0, A.tZ)(h.View, {
                                          className: "dialog-hd",
                                          children: (0, A.tZ)(h.Text, {
                                            className: "dialog-title",
                                            children:
                                              "您当前的定位城市为" + u.cityName,
                                          }),
                                        }),
                                        (0, A.tZ)(h.View, {
                                          className: "dialog-bd",
                                          children:
                                            "是否切换为" +
                                            u.cityName +
                                            "周边景点",
                                        }),
                                        (0, A.BX)(h.View, {
                                          className: "dialog-ft",
                                          children: [
                                            (0, A.tZ)(h.Button, {
                                              className:
                                                "dialog-btn dialog-btn-default",
                                              id: "ALAN",
                                              onClick: this.closeSwitchModal,
                                              children: "暂不切换",
                                            }),
                                            (0, A.tZ)(h.Button, {
                                              className:
                                                "dialog-btn dialog-btn-primary",
                                              id: "ALAO",
                                              onClick: this.switchCity,
                                              children: "立即切换",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, A.tZ)(h.View, {
                                    className:
                                      "pop-mask " + (p ? "active" : ""),
                                    onTouchMove: this.noop,
                                  }),
                                  p &&
                                    C &&
                                    C.length > 0 &&
                                    (0, A.BX)(h.View, {
                                      className: "pop-mid pop-coupon",
                                      children: [
                                        (0, A.tZ)(h.View, {
                                          className: "pop-coupon-hd",
                                          style:
                                            "background: url(" +
                                            (g ||
                                              "https://images3.c-ctrip.com/ztrip/attractionTicket/couponBgTitleNew.png") +
                                            ") no-repeat;background-size: cover;",
                                        }),
                                        (0, A.BX)(h.View, {
                                          className: "pop-coupon-bd",
                                          style:
                                            "background: " +
                                            ((m && m[0]) || "#FF1A25"),
                                          children: [
                                            (0, A.tZ)(h.View, {
                                              className: "pop-coupon-list",
                                              children: C.map(function (t, e) {
                                                return (0,
                                                A.BX)(h.View, { className: "item", children: [(0, A.tZ)(h.View, { className: "price", children: t.price }), (0, A.BX)(h.View, { className: "cont", children: [(0, A.tZ)(h.View, { className: "tit", children: t.promotionTitle }), (0, A.tZ)(h.View, { className: "txt", children: t.promotionDes })] })] }, e);
                                              }),
                                            }),
                                            (0, A.BX)(h.View, {
                                              style:
                                                "position:relative;margin-top:" +
                                                (C.length > 2
                                                  ? C.length > 3
                                                    ? "40rpx"
                                                    : "20rpx"
                                                  : "0"),
                                              children: [
                                                (0, A.tZ)(h.Image, {
                                                  src:
                                                    y ||
                                                    "https://images3.c-ctrip.com/ztrip/attractionTicket/receiveCouponBtn.png",
                                                  className: "receive-btn-wrap",
                                                }),
                                                (0, A.tZ)(h.View, {
                                                  children: f
                                                    ? (0, A.tZ)(h.Button, {
                                                        className: "btn-get",
                                                        id: "ALAQ",
                                                        onClick:
                                                          this
                                                            .receiveAfterCheckLogin,
                                                        children: "立即领取",
                                                      })
                                                    : (0, A.tZ)(h.Button, {
                                                        className: "btn-get",
                                                        id: "ALAP",
                                                        onClick:
                                                          this
                                                            .receiveCouponAfterLogin,
                                                        children: "立即领取",
                                                      }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, A.tZ)(h.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "ALAR",
                                          onClick: this.toggleCouponListPop,
                                        }),
                                      ],
                                    }),
                                  N &&
                                    !!w &&
                                    C.length > 0 &&
                                    (0, A.tZ)(h.View, {
                                      className: "fixed-hongbao",
                                      id: "ALAS",
                                      onClick: this.showCouponAlert,
                                      children: (0, A.tZ)(h.View, {
                                        className: "price",
                                        children: w,
                                      }),
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(l.default.Component))
                  ) || o)
              ) || o;
          Page(
            (0, n.createPageConfig)(
              M,
              "pages/ticket/index/index",
              { root: { cn: [] } },
              {
                disableScroll: !0,
                navigationBarTitleText: "门票首页",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0075F4",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [14856, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(28184);
        }),
          t.O();
      },
    ]);
})();
