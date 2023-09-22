!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [36954],
      {
        22930: function (e, t, a) {
          var i,
            n,
            c = a(32180),
            s = a(57042),
            r = a(24460),
            o = a(21867),
            l = a(86066),
            d = a(298),
            h = a(52500),
            m = a(71515),
            u = a(92954),
            f = a.n(u),
            p = a(48792),
            y = a.n(p),
            g = a(2326),
            w = a(79792),
            N = a(79910),
            v = a(3205),
            Z = a(58676),
            k = a(49120),
            C = a(18783),
            V = a(55916),
            B = a(8271),
            I = a.n(B),
            b = a(4102),
            A = a(28352),
            x = a(81957),
            T = a(81876),
            D = a(45023),
            X = a(39173),
            U = a(79404),
            L = a(48813),
            P = "YYYY-MM-DD",
            S = w.default.isTieyou,
            R =
              (0, x.h)(!0)(
                (i = (function (e) {
                  (0, o.Z)(a, e);
                  var t = (0, l.Z)(a);
                  function a() {
                    var e;
                    (0, s.Z)(this, a);
                    for (
                      var i = arguments.length, n = new Array(i), c = 0;
                      c < i;
                      c++
                    )
                      n[c] = arguments[c];
                    return (
                      (e = t.call.apply(t, [this].concat(n))),
                      (0, D.Z)((0, T.Z)(e), "state", {
                        curCityId: 1,
                        hotelList: [],
                      }),
                      (0, D.Z)((0, T.Z)(e), "handleCityClick", function (t) {
                        var a = t.target.dataset.cityid;
                        e.setState({ curCityId: a }, e.getList);
                      }),
                      (0, D.Z)((0, T.Z)(e), "getList", function () {
                        (0,
                        k.showToast)({ title: "加载中...", icon: "loading", duration: 1e4 });
                        var t = {
                          data: {
                            cityId: e.state.curCityId,
                            checkInDate: I()().format(P),
                            checkOutDate: I()().add(1, "day").format(P),
                            hotelType: 1,
                            clientVersion: U.Z.clientVersion,
                            contrl: 3,
                            pageSize: 10,
                            districtId: 0,
                            index: 1,
                          },
                        };
                        (0, X.SH)(t)
                          .then(function (t) {
                            var a = t.data,
                              i = void 0 === a ? {} : a;
                            e.setState({ hotelList: i.hotelList || [] });
                          })
                          .catch(function () {
                            (0, k.showToast)("暂无数据哦～");
                          })
                          .finally(function () {
                            f().hideToast();
                          });
                      }),
                      (0, D.Z)((0, T.Z)(e), "gotoHotelDetail", function (t) {
                        var a = S ? "10320660963" : "10320660959",
                          i = {
                            hotel: t.currentTarget.dataset.item,
                            query: {
                              checkInDate: I()().format(P),
                              checkOutDate: I()().add(1, "day").format(P),
                              source: a,
                            },
                          };
                        console.log("--data hotel--", i),
                          e.navigateTo({
                            url: "/pages/hotel/detail/detail",
                            data: i,
                          });
                      }),
                      e
                    );
                  }
                  return (
                    (0, r.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.getList();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.curCityId,
                            i = t.hotelList,
                            n = this.props,
                            c = n.hotCitys,
                            s = n.handleHotelMore;
                          return (0, L.BX)(m.Block, {
                            children: [
                              (0, L.tZ)(m.View, {
                                className: "recomd-hcity",
                                children: (0, L.tZ)(m.View, {
                                  className: "recomd-hcity-list",
                                  children: c.map(function (t) {
                                    return (0,
                                    L.tZ)(m.View, { className: "item ".concat(a == t.cityId ? "cur" : ""), "data-cityid": t.cityId, id: "AeAn", onClick: e.handleCityClick, children: t.cityName }, t.cityId);
                                  }),
                                }),
                              }),
                              (0, L.BX)(m.View, {
                                className: "hotel",
                                children: [
                                  i.map(function (t) {
                                    return (0,
                                    L.BX)(m.View, { className: "item-hotel", "data-item": t, id: "AeAo", onClick: e.gotoHotelDetail, children: [(0, L.BX)(m.View, { className: "item-hotel-hd", children: [(0, L.tZ)(m.Image, { src: t.logo, className: "img", mode: "aspectFill" }), (0, L.BX)(m.View, { className: "price", children: [" ", t.priceInfo.couponSalePrice || ""] })] }), (0, L.BX)(m.View, { className: "item-hotel-bd", children: [(0, L.tZ)(m.View, { className: "tit", children: t.name || "" }), (0, L.tZ)(m.View, { className: "txt", children: t.zone || "" }), (0, L.BX)(m.View, { className: "txt", children: [(0, L.tZ)(m.Text, { className: "iconfont ifont-location" }), t.hotelAddInfo.distanceRemark] })] })] }, t.hotelId);
                                  }),
                                  (0, L.BX)(m.View, {
                                    className: "more",
                                    id: "AeAp",
                                    onClick: s,
                                    children: [
                                      "查看更多特价酒店",
                                      (0, L.tZ)(m.Text, {
                                        className: "ifont-arr iconfont",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(h.default.PureComponent))
              ) || i,
            M = w.default.isTieyou,
            z = "http://pic.c-ctrip.com/train/zt/wechat/avatar-default-".concat(
              M ? "ty" : "zx",
              ".png"
            ),
            F = g.Z.getDateStr(),
            H = I()(F).add(90, "day").format("YYYY-MM-DD"),
            O = [
              { cityName: "北京", cityId: 1 },
              { cityName: "上海", cityId: 2 },
              { cityName: "广州", cityId: 32 },
              { cityName: "深圳", cityId: 30 },
              { cityName: "成都", cityId: 28 },
              { cityName: "杭州", cityId: 17 },
              { cityName: "武汉", cityId: 477 },
              { cityName: "西安", cityId: 10 },
              { cityName: "重庆", cityId: 4 },
              { cityName: "青岛", cityId: 7 },
            ],
            j = [
              { label: "低价机票", key: "air" },
              { label: "特价酒店", key: "hotel" },
            ],
            K = {
              pageId: M ? "10650047338" : "10650043007",
              data: {
                isTieyou: M,
                canUseGetUserProfile: N.Z.canUseGetUserProfile,
                isLogin: !0,
                owner: !1,
                swiperList: [],
                invitedArray: [],
                succeedArray: [],
                isOnRoadPanel: !0,
                shareKey: "",
                isAuthorized: !1,
                isModalShow: !1,
                nickname: "",
                avatarUrl: z,
                departCity: "上海",
                departCityCode: "SHA",
                poiTagArray: [
                  { name: "国内热门", type: 6 },
                  { name: "国际热门", type: 1 },
                  { name: "东南亚", type: 2 },
                  { name: "港澳台(中国)", type: 3 },
                  { name: "海岛游", type: 4 },
                  { name: "免签/落地签", type: 7 },
                ],
                poiType: 6,
                flightList: [],
                assistNum: 0,
                isReceived: 0,
                tabType: "air",
                coupons: [],
              },
              onLoad: function (e) {
                var t = e.shareKey;
                this.setData({ shareKey: decodeURIComponent(t) }),
                  this.checkLogin(),
                  this.getOpenId(),
                  this.getUserInfo(),
                  this.getFlightList(),
                  N.Z.setLaunchSource({
                    loginSoureType: "wechat",
                    loginSourceName: "fltInviteCash",
                  });
              },
              onReady: function () {
                var e = this.data.isTieyou;
                f().setNavigationBarTitle({
                  title: "".concat(e ? "铁友机票" : "智行机票"),
                });
              },
              checkLogin: function () {
                var e = C.ZP.isLogin;
                return this.setData({ isLogin: e }), e;
              },
              getOpenId: function () {
                var e = this;
                C.ZP.openid
                  ? (this.setData({ openId: C.ZP.openid }),
                    this.getInviteCashBackInfo())
                  : (0, C.M9)().then(
                      function (t) {
                        var a = t.openid;
                        console.log("openid", a),
                          e.setData({ openId: a }),
                          e.getInviteCashBackInfo();
                      },
                      function () {
                        console.log("获取openId失败");
                      }
                    );
              },
              getPhoneNumberAction: function () {
                var e = this;
                this.doLogin(function () {
                  e.getInviteCashBackInfo("receive");
                });
              },
              doLogin: function (e) {
                var t = this;
                C.ZP.doLogin()
                  .then(function () {
                    t.setData({ isLogin: !0 }), null == e || e();
                  })
                  .catch(function () {
                    (0, k.showToast)("取消登录");
                  });
              },
              getInviteCashBackInfo: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  a = this.data,
                  i = a.shareKey,
                  n = a.isAuthorized,
                  c = { shareKey: i };
                (0, A.b4)(c).then(function (a) {
                  var i = a.resultCode,
                    c = a.resultMessage,
                    s = a.sharedInfo;
                  if (1 !== i)
                    return e.showCommonDialog(c || "网络错误，请稍候再试~");
                  var r = s.earnings,
                    o = void 0 === r ? 0 : r,
                    l = s.owner,
                    h = s.isLogin,
                    m = s.invited,
                    u = void 0 === m ? [] : m,
                    f = s.succeed,
                    p = void 0 === f ? [] : f,
                    y = s.noticeList,
                    g = void 0 === y ? [] : y,
                    w = s.coupons,
                    N = void 0 === w ? [] : w,
                    v = u.map(function (e) {
                      return (0,
                      d.Z)((0, d.Z)({}, e), {}, { nickname: decodeURIComponent(e.nickname) });
                    }),
                    Z = p.map(function (e) {
                      return (0,
                      d.Z)((0, d.Z)({}, e), {}, { nickname: decodeURIComponent(e.nickname) });
                    });
                  if (Array.isArray(N) && N.length)
                    var k = N.some(function (e) {
                      return 0 == e.status;
                    })
                      ? 0
                      : 1;
                  e.setData({
                    isLogin: h,
                    owner: l,
                    coupons: N || [],
                    earnings: o,
                    swiperList: g,
                    invitedArray: v,
                    succeedArray: Z,
                    isReceived: k,
                  }),
                    h &&
                      !l &&
                      0 === k &&
                      n &&
                      "receive" === t &&
                      e.handleReceiveAwardClick(),
                    !h ||
                      l ||
                      0 !== k ||
                      n ||
                      "receive" !== t ||
                      e.setData({ isModalShow: !0 });
                });
              },
              switchPanelStatus: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { currentTarget: { dataset: "" } },
                  t = e.currentTarget.dataset.type,
                  a = this.data.isOnRoadPanel;
                a !== ("onRoad" === t) &&
                  this.setData({ isOnRoadPanel: "onRoad" === t });
              },
              getUserInfo: function () {
                var e = this;
                if (!N.Z.canUseGetUserProfile)
                  return new Promise(function (t, a) {
                    f().getSetting({
                      success: function (i) {
                        i.authSetting["scope.userInfo"]
                          ? f().getUserInfo({
                              success: function (a) {
                                var i = a.userInfo,
                                  n = i.nickName,
                                  c = i.avatarUrl;
                                e.setData({
                                  isAuthorized: !0,
                                  nickName: n,
                                  avatarUrl: c,
                                }),
                                  t();
                              },
                              fail: function () {
                                a();
                              },
                            })
                          : a();
                      },
                      fail: function () {
                        a();
                      },
                    });
                  });
                (0, k.getUserProfileInfo)({ getOnly: !0 }).then(function (t) {
                  e.setData({
                    isAuthorized: !0,
                    nickName: t.nickName || "",
                    avatarUrl: t.avatarUrl || "",
                  });
                });
              },
              getUserProfileAction: function () {
                var e = this;
                this.data.isAuthorized
                  ? (this.handleReceiveAwardClick(),
                    this.setData({ isModalShow: !1 }))
                  : (0, k.getUserProfileInfo)()
                      .then(function (t) {
                        e
                          .setData({
                            nickName:
                              t.nickName || (M ? "铁友用户" : "智行用户"),
                            avatarUrl: t.avatarUrl || z,
                          })
                          .catch(function () {}),
                          e.handleReceiveAwardClick();
                      })
                      .catch(function () {
                        e.setData({
                          nickName: M ? "铁友用户" : "智行用户",
                          avatarUrl: z,
                        }),
                          e.handleReceiveAwardClick();
                      });
              },
              checkUserInfoAuthority: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = this.data.isAuthorized;
                t
                  ? (this.handleReceiveAwardClick(),
                    this.setData({ isModalShow: !1 }))
                  : e.detail && "getUserInfo:ok" === e.detail.errMsg
                  ? (this.setData({
                      nickName: e.detail.userInfo.nickName,
                      avatarUrl: e.detail.userInfo.avatarUrl,
                    }),
                    this.handleReceiveAwardClick())
                  : (this.setData({
                      nickName: M ? "铁友用户" : "智行用户",
                      avatarUrl: z,
                    }),
                    this.handleReceiveAwardClick());
              },
              handleReceiveAwardClick: function () {
                var e = this,
                  t = this.data,
                  a = t.shareKey,
                  i = t.nickName,
                  n = {
                    shareKey: a,
                    avatar: t.avatarUrl,
                    nickname: encodeURIComponent(i),
                  };
                (0, A.m1)(n).then(function (t) {
                  var a = t.resultCode,
                    i = t.resultMessage;
                  1 === a
                    ? ((0, k.showToast)("".concat(i)),
                      e.setData({ isReceived: 1, isModalShow: !1 }),
                      e.getInviteCashBackInfo())
                    : ((0, k.showToast)(
                        "".concat(i || "网络错误，请稍候再试~")
                      ),
                      e.setData({ isModalShow: !1 }));
                });
              },
              handleLinkToFlightClick: function (e) {
                var t = e.target.dataset.type;
                N.Z.relaunchHome(200 == t ? "flight" : "hotel");
              },
              handleModalClose: function () {
                var e = this.data.isModalShow;
                this.setData({
                  isModalShow: !e,
                  nickName: M ? "铁友用户" : "智行用户",
                  avatarUrl: z,
                }),
                  this.handleReceiveAwardClick();
              },
              chooseCity: function () {
                var e = this;
                v.Z.flightCity({
                  data: { title: "选择城市", intlHidden: !0 },
                  callback: function (t) {
                    var a = t.cityName,
                      i = t.cityCode;
                    e.setData({ departCity: a, departCityCode: i }),
                      e.getFlightList();
                  },
                });
              },
              handleTab: function (e) {
                var t = e.target.dataset.tab;
                this.setData({ tabType: t });
              },
              choosePoiType: function (e) {
                var t = e.currentTarget.dataset.type;
                this.data.poiType !== t &&
                  (this.setData({ poiType: t }), this.getFlightList());
              },
              handleHotelMore: function () {
                N.Z.relaunchHome("hotel");
              },
              getFlightList: function () {
                var e = this,
                  t = this.data,
                  a = {
                    data: {
                      depCode: t.departCityCode,
                      searchPoiType: t.poiType,
                      segmentType: 1,
                      sort: 1,
                      departureDates: [{ startDate: F, endDate: H }],
                    },
                  };
                (0, V.g)(a)
                  .then(function (t) {
                    console.log(t);
                    var a = t || {},
                      i = a.resultCode,
                      n = a.data.searchResult || [];
                    if (1 === i) {
                      var c = n
                        .filter(function (e) {
                          return "猜你喜欢" !== e.tag;
                        })
                        .slice(0, 10);
                      e.setData({
                        flightList: c.map(function (e) {
                          return (0,
                          d.Z)((0, d.Z)({}, e), {}, { week: b.Z.getWeekDay(e.goDateTime) });
                        }),
                      });
                    } else e.setData({ flightList: [] });
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              toTejiaIndex: function () {
                var e = this.data,
                  t = e.departCity,
                  a = e.departCityCode,
                  i = "?&departureCityName="
                    .concat(t, "&departureCityCode=")
                    .concat(
                      a,
                      "&departureInternational=0&hideHeader=1&partner="
                    )
                    .concat(w.default.partner, "&fromPage=xcxjkjs");
                v.Z.twebview({
                  data: {
                    url: ""
                      .concat(
                        "https://market.suanya.com/activity/flight/201904tejia-index/"
                      )
                      .concat(i),
                  },
                });
              },
              toFlightFuzzySearch: function (e) {
                var t = e.currentTarget.dataset.index,
                  a = this.data.flightList[t],
                  i = a.depCityName,
                  n = a.depCityCode,
                  c = a.arrCityName,
                  s = a.arrCityCode,
                  r = a.backDateTime,
                  o = a.isDomestic ? 0 : 1,
                  l = r ? 1 : 0,
                  d = "?departureCityName="
                    .concat(i, "&departureCityCode=")
                    .concat(n, "&arrivalCityName=")
                    .concat(c, "&arrivalCityCode=")
                    .concat(s, "&departureInternational=")
                    .concat(0, "&arrivalInternational=")
                    .concat(o, "&round=")
                    .concat(l, "&hideHeader=1&partner=")
                    .concat(w.default.partner, "&fromPage=xcxjkjs");
                v.Z.twebview({
                  data: {
                    url: ""
                      .concat(
                        "https://market.suanya.com/activity/flight/2019tejiasearch/"
                      )
                      .concat(d),
                  },
                });
              },
            },
            Y =
              (0, x.h)()(
                (n =
                  y()(K)(
                    (n = (function (e) {
                      (0, o.Z)(a, e);
                      var t = (0, l.Z)(a);
                      function a() {
                        return (0, s.Z)(this, a), t.apply(this, arguments);
                      }
                      return (
                        (0, r.Z)(a, [
                          {
                            key: "onShareAppMessage",
                            value: function () {
                              var e = this.data,
                                t = e.shareKey,
                                a = e.isTieyou,
                                i =
                                  "/pages/activity/flight/inviteCashBack/index?shareKey=".concat(
                                    encodeURIComponent(t)
                                  ),
                                n = "/pages/market/mdpage/index?url=".concat(
                                  encodeURIComponent(i)
                                ),
                                c = "".concat(
                                  a ? "铁友" : "智行",
                                  "机票·酒店超低价，送你60元红包~"
                                );
                              return (
                                console.log("path====>", n),
                                {
                                  title: c,
                                  bu: "train",
                                  imageUrl:
                                    "https://images3.c-ctrip.com/zt/flight/invite_new_wx.png",
                                  path: n,
                                }
                              );
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                a = t.canUseGetUserProfile,
                                i = t.owner,
                                n = t.swiperList,
                                c = t.earnings,
                                s = t.isOnRoadPanel,
                                r = t.invitedArray,
                                o = t.succeedArray,
                                l = t.coupons,
                                d = t.isReceived,
                                h = t.isLogin,
                                u = t.isTieyou,
                                f = t.departCity,
                                p = t.poiType,
                                y = t.poiTagArray,
                                g = t.flightList,
                                w = t.isModalShow,
                                N = t.tabType;
                              return (0, L.BX)(m.Block, {
                                children: [
                                  (0, L.BX)(m.View, {
                                    className: "top-box",
                                    children: [
                                      (0, L.tZ)(m.View, {
                                        className:
                                          "slogan3 " + (u ? "ty" : "zx"),
                                      }),
                                      (0, L.tZ)(m.View, {
                                        className: "top-notice",
                                        children:
                                          n &&
                                          n[0] &&
                                          (0, L.tZ)(m.Swiper, {
                                            className: "marquee",
                                            style: "width:390rpx;",
                                            autoplay: "true",
                                            vertical: "true",
                                            interval: "4000",
                                            circular: "true",
                                            duration: "1000",
                                            easingFunction: "easeInOutCubic",
                                            children: n.map(function (e, t) {
                                              return (0,
                                              L.tZ)(m.Block, { children: (0, L.tZ)(m.SwiperItem, { children: (0, L.BX)(m.View, { className: "item", children: [(0, L.tZ)(m.Image, { src: e.avatar, className: "avatar" }), (0, L.tZ)(m.View, { className: "txt", children: e.content })] }) }) }, t);
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                  (0, L.BX)(m.View, {
                                    className: "wrap",
                                    children: [
                                      !0 === i &&
                                        (0, L.BX)(m.Block, {
                                          children: [
                                            (0, L.BX)(m.View, {
                                              className: "invite-box",
                                              children: [
                                                (0, L.BX)(m.View, {
                                                  className: "invite-hd",
                                                  children: [
                                                    (0, L.tZ)(m.View, {
                                                      className: "tag",
                                                      children: "可提现",
                                                    }),
                                                    (0, L.tZ)(m.View, {
                                                      className: "tit",
                                                      children: "我的累计收益",
                                                    }),
                                                    (0, L.tZ)(m.View, {
                                                      className: "price",
                                                      children: c,
                                                    }),
                                                    (0, L.BX)(m.View, {
                                                      className: "txt",
                                                      children: [
                                                        "*可在",
                                                        u ? "铁友" : "智行",
                                                        "-我的钱包中提现，查看明细",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, L.tZ)(m.View, {
                                                  className: "invite-bd",
                                                  children: (0, L.tZ)(
                                                    m.Button,
                                                    {
                                                      className: "btn-invite",
                                                      openType: "share",
                                                      children: "继续邀请好友",
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, L.BX)(m.View, {
                                              className: "white-box coin-bg",
                                              children: [
                                                (0, L.tZ)(m.View, {
                                                  className: "white-tit",
                                                  children: (0, L.tZ)(m.View, {
                                                    className: "tit",
                                                    children: "我的邀请",
                                                  }),
                                                }),
                                                (0, L.BX)(m.View, {
                                                  className:
                                                    "white-bd friend-box",
                                                  children: [
                                                    (0, L.BX)(m.View, {
                                                      className: "friend-tab",
                                                      children: [
                                                        (0, L.tZ)(m.View, {
                                                          className:
                                                            "item " +
                                                            (s ? "cur" : ""),
                                                          "data-type": "onRoad",
                                                          id: "AeAq",
                                                          onClick:
                                                            this
                                                              .switchPanelStatus,
                                                          children:
                                                            "在路上 (" +
                                                            (r && r.length) +
                                                            "人)",
                                                        }),
                                                        (0, L.tZ)(m.View, {
                                                          className:
                                                            "item " +
                                                            (s ? "" : "cur"),
                                                          "data-type":
                                                            "succeed",
                                                          id: "AeAr",
                                                          onClick:
                                                            this
                                                              .switchPanelStatus,
                                                          children:
                                                            "已成功 (" +
                                                            (o && o.length) +
                                                            "人)",
                                                        }),
                                                      ],
                                                    }),
                                                    s &&
                                                      r &&
                                                      r[0] &&
                                                      (0, L.tZ)(m.View, {
                                                        className: "friend-bd",
                                                        children: r.map(
                                                          function (e, t) {
                                                            return (0, L.tZ)(
                                                              m.Block,
                                                              {
                                                                children: (0,
                                                                L.BX)(m.View, {
                                                                  className:
                                                                    "item",
                                                                  children: [
                                                                    (0, L.tZ)(
                                                                      m.Image,
                                                                      {
                                                                        src: e.avatar,
                                                                        className:
                                                                          "avatar",
                                                                      }
                                                                    ),
                                                                    (0, L.BX)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            L.tZ)(
                                                                              m.View,
                                                                              {
                                                                                className:
                                                                                  "tit",
                                                                                children:
                                                                                  e.nickname,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            L.tZ)(
                                                                              m.View,
                                                                              {
                                                                                className:
                                                                                  "txt",
                                                                                children:
                                                                                  e.date,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, L.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "rbox",
                                                                        children:
                                                                          e.status,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                              },
                                                              t
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                    !s &&
                                                      o &&
                                                      o[0] &&
                                                      (0, L.tZ)(m.View, {
                                                        className: "friend-bd",
                                                        children: o.map(
                                                          function (e, t) {
                                                            return (0, L.tZ)(
                                                              m.Block,
                                                              {
                                                                children: (0,
                                                                L.BX)(m.View, {
                                                                  className:
                                                                    "item",
                                                                  children: [
                                                                    (0, L.tZ)(
                                                                      m.Image,
                                                                      {
                                                                        src: e.avatar,
                                                                        className:
                                                                          "avatar",
                                                                      }
                                                                    ),
                                                                    (0, L.BX)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            L.tZ)(
                                                                              m.View,
                                                                              {
                                                                                className:
                                                                                  "tit",
                                                                                children:
                                                                                  e.nickname,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            L.tZ)(
                                                                              m.View,
                                                                              {
                                                                                className:
                                                                                  "txt",
                                                                                children:
                                                                                  e.date,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, L.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "rbox",
                                                                        children:
                                                                          e.status,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                              },
                                                              t
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                    ((s && (!r || !r[0])) ||
                                                      (!s && (!o || !o[0]))) &&
                                                      (0, L.BX)(m.View, {
                                                        className: "friend-bd",
                                                        children: [
                                                          (0, L.tZ)(m.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200713-ztrip-flight-invite-prize/blank.png",
                                                            className:
                                                              "img-blank",
                                                          }),
                                                          (0, L.tZ)(m.View, {
                                                            className: "blank",
                                                            children:
                                                              "暂无邀请好友~",
                                                          }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      !1 === i &&
                                        (0, L.BX)(m.Block, {
                                          children: [
                                            (0, L.BX)(m.View, {
                                              className: "white-box",
                                              children: [
                                                (0, L.tZ)(m.View, {
                                                  className: "white-tit",
                                                  children: (0, L.tZ)(m.View, {
                                                    className: "tit",
                                                    children: "我的优惠券",
                                                  }),
                                                }),
                                                (0, L.BX)(m.View, {
                                                  className:
                                                    "white-bd coupon-box",
                                                  children: [
                                                    l.length &&
                                                      (0, L.tZ)(m.View, {
                                                        className: "coupon-bd",
                                                        children: l.map(
                                                          function (t) {
                                                            return (0, L.BX)(
                                                              m.View,
                                                              {
                                                                className:
                                                                  "item "
                                                                    .concat(
                                                                      1 ==
                                                                        t.status
                                                                        ? "used"
                                                                        : "unget",
                                                                      " "
                                                                    )
                                                                    .concat(
                                                                      200 ==
                                                                        t.type
                                                                        ? "flight"
                                                                        : "hotel"
                                                                    ),
                                                                children: [
                                                                  (0, L.tZ)(
                                                                    m.View,
                                                                    {
                                                                      className:
                                                                        "price",
                                                                      children:
                                                                        t.price,
                                                                    }
                                                                  ),
                                                                  (0, L.BX)(
                                                                    m.View,
                                                                    {
                                                                      className:
                                                                        "cont",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          L.tZ)(
                                                                            m.View,
                                                                            {
                                                                              className:
                                                                                "tit",
                                                                              children:
                                                                                t.title,
                                                                            }
                                                                          ),
                                                                          2 ==
                                                                          t.status
                                                                            ? null
                                                                            : (0,
                                                                              L.tZ)(
                                                                                m.View,
                                                                                {
                                                                                  className:
                                                                                    "txt",
                                                                                  children:
                                                                                    t.remark,
                                                                                }
                                                                              ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                  -1 == t.status
                                                                    ? (0, L.tZ)(
                                                                        m.View,
                                                                        {
                                                                          className:
                                                                            "rbox",
                                                                          children:
                                                                            "限新客",
                                                                        }
                                                                      )
                                                                    : "",
                                                                  0 == t.status
                                                                    ? (0, L.tZ)(
                                                                        m.View,
                                                                        {
                                                                          className:
                                                                            "rbox",
                                                                          children:
                                                                            "待领取",
                                                                        }
                                                                      )
                                                                    : "",
                                                                  1 == t.status
                                                                    ? (0, L.tZ)(
                                                                        m.Button,
                                                                        {
                                                                          className:
                                                                            "btn-get",
                                                                          "data-type":
                                                                            t.type,
                                                                          id: "AeAs",
                                                                          onClick:
                                                                            e.handleLinkToFlightClick,
                                                                          children:
                                                                            200 ==
                                                                            t.type
                                                                              ? "去订\n机票"
                                                                              : "去订\n酒店",
                                                                        }
                                                                      )
                                                                    : "",
                                                                  2 == t.status
                                                                    ? (0, L.tZ)(
                                                                        m.View,
                                                                        {
                                                                          className:
                                                                            "rbox",
                                                                          children:
                                                                            "已使用",
                                                                        }
                                                                      )
                                                                    : "",
                                                                ],
                                                              },
                                                              t.type
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                    h &&
                                                      1 !== d &&
                                                      (0, L.tZ)(m.Block, {
                                                        children: a
                                                          ? (0, L.tZ)(
                                                              m.Button,
                                                              {
                                                                className:
                                                                  "btn-submit",
                                                                id: "AeAt",
                                                                onClick:
                                                                  this
                                                                    .getUserProfileAction,
                                                                children:
                                                                  "立即领取新客券",
                                                              }
                                                            )
                                                          : (0, L.tZ)(
                                                              m.Button,
                                                              {
                                                                className:
                                                                  "btn-submit",
                                                                openType:
                                                                  "getUserInfo",
                                                                onGetuserinfo:
                                                                  this
                                                                    .checkUserInfoAuthority,
                                                                children:
                                                                  "立即领取新客券",
                                                              }
                                                            ),
                                                      }),
                                                    !h &&
                                                      (0, L.tZ)(m.Button, {
                                                        className: "btn-submit",
                                                        lang: "zh_CN",
                                                        id: "AeAu",
                                                        onClick:
                                                          this
                                                            .getPhoneNumberAction,
                                                        children:
                                                          "立即领取新客券",
                                                      }),
                                                    (0, L.tZ)(m.View, {
                                                      className: "coupon-info",
                                                      children:
                                                        "*下单并机票出行或酒店入住成功，好友可赚5元",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, L.tZ)(m.View, {
                                              className: "white-box coin-bg",
                                              children: (0, L.BX)(m.View, {
                                                className:
                                                  "white-bd recomd-box",
                                                children: [
                                                  (0, L.tZ)(m.View, {
                                                    className: "recomd-tab",
                                                    children: j.map(function (
                                                      t
                                                    ) {
                                                      return (0, L.tZ)(
                                                        m.View,
                                                        {
                                                          className:
                                                            "item ".concat(
                                                              t.key == N
                                                                ? "cur"
                                                                : ""
                                                            ),
                                                          "data-tab": t.key,
                                                          id: "AeAv",
                                                          onClick: e.handleTab,
                                                          children: t.label,
                                                        },
                                                        t.key
                                                      );
                                                    }),
                                                  }),
                                                  "air" === N &&
                                                    (0, L.BX)(m.View, {
                                                      className:
                                                        "recomd-flight",
                                                      children: [
                                                        (0, L.BX)(m.View, {
                                                          className:
                                                            "recomd-hd",
                                                          children: [
                                                            (0, L.tZ)(m.View, {
                                                              className: "tit",
                                                              children:
                                                                (u
                                                                  ? "铁友"
                                                                  : "智行") +
                                                                "机票 全网低价",
                                                            }),
                                                            (0, L.BX)(m.View, {
                                                              className: "rbox",
                                                              id: "AeAw",
                                                              onClick:
                                                                this.chooseCity,
                                                              children: [
                                                                f + "出发",
                                                                (0, L.tZ)(
                                                                  m.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-arr iconfont open",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        (0, L.tZ)(m.View, {
                                                          className:
                                                            "recomd-tag",
                                                          children: y.map(
                                                            function (t, a) {
                                                              return (0, L.tZ)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "item " +
                                                                    (t.type ===
                                                                    p
                                                                      ? "cur"
                                                                      : ""),
                                                                  "data-type":
                                                                    t.type,
                                                                  id: "AeAx",
                                                                  onClick:
                                                                    e.choosePoiType,
                                                                  children:
                                                                    t.name,
                                                                },
                                                                a
                                                              );
                                                            }
                                                          ),
                                                        }),
                                                        (0, L.BX)(m.View, {
                                                          className:
                                                            "recomd-bd",
                                                          children: [
                                                            g.map(function (
                                                              t,
                                                              a
                                                            ) {
                                                              return (0, L.BX)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "item",
                                                                  children: [
                                                                    (0, L.BX)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            L.BX)(
                                                                              m.View,
                                                                              {
                                                                                className:
                                                                                  "tit",
                                                                                children:
                                                                                  [
                                                                                    (0,
                                                                                    L.tZ)(
                                                                                      m.View,
                                                                                      {
                                                                                        className:
                                                                                          "ellipsis",
                                                                                        children:
                                                                                          t.depCityName +
                                                                                          "-" +
                                                                                          t.arrCityName,
                                                                                      }
                                                                                    ),
                                                                                    !t.backDateTime &&
                                                                                      (0,
                                                                                      L.tZ)(
                                                                                        m.View,
                                                                                        {
                                                                                          className:
                                                                                            "tag",
                                                                                          children:
                                                                                            "单程",
                                                                                        }
                                                                                      ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            L.tZ)(
                                                                              m.View,
                                                                              {
                                                                                className:
                                                                                  "txt",
                                                                                children:
                                                                                  t.goDateTime +
                                                                                  " " +
                                                                                  t.week,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, L.BX)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "rbox",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            L.tZ)(
                                                                              m.View,
                                                                              {
                                                                                className:
                                                                                  "price",
                                                                                children:
                                                                                  t.price,
                                                                              }
                                                                            ),
                                                                            !t.isDomestic &&
                                                                              (0,
                                                                              L.tZ)(
                                                                                m.View,
                                                                                {
                                                                                  className:
                                                                                    "em",
                                                                                  children:
                                                                                    "含税",
                                                                                }
                                                                              ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, L.BX)(
                                                                      m.Button,
                                                                      {
                                                                        className:
                                                                          "btn-go",
                                                                        "data-index":
                                                                          a,
                                                                        id: "AeAy",
                                                                        onClick:
                                                                          e.toFlightFuzzySearch,
                                                                        children:
                                                                          [
                                                                            "更多",
                                                                            (0,
                                                                            L.tZ)(
                                                                              m.Text,
                                                                              {
                                                                                className:
                                                                                  "ifont-arr iconfont",
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                },
                                                                "index"
                                                              );
                                                            }),
                                                            (0, L.BX)(m.View, {
                                                              className: "more",
                                                              id: "AeAz",
                                                              onClick:
                                                                this
                                                                  .toTejiaIndex,
                                                              children: [
                                                                "查看更多特价机票",
                                                                (0, L.tZ)(
                                                                  m.Text,
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
                                                  "hotel" == N &&
                                                    (0, L.BX)(m.View, {
                                                      className: "recomd-hotel",
                                                      children: [
                                                        (0, L.tZ)(m.View, {
                                                          className:
                                                            "recomd-hd",
                                                          children: (0, L.tZ)(
                                                            m.View,
                                                            {
                                                              className: "tit",
                                                              children:
                                                                (u
                                                                  ? "铁友"
                                                                  : "智行") +
                                                                "酒店 全网低价",
                                                            }
                                                          ),
                                                        }),
                                                        (0, L.tZ)(R, {
                                                          hotCitys: O,
                                                          handleHotelMore:
                                                            this
                                                              .handleHotelMore,
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  w &&
                                    (0, L.BX)(m.Block, {
                                      children: [
                                        (0, L.tZ)(m.View, {
                                          className: "shade-box",
                                        }),
                                        (0, L.BX)(m.View, {
                                          className:
                                            "pop-accredit " + (u ? "ty" : "zx"),
                                          children: [
                                            (0, L.tZ)(m.View, {
                                              className:
                                                "pop-accredit-hd " +
                                                (u ? "ty" : "zx"),
                                            }),
                                            l.length &&
                                              l.map(function (e) {
                                                return (0,
                                                L.BX)(m.View, { className: "pop-accredit-coupon ".concat(200 == e.type ? "flight" : "hotel"), children: [(0, L.tZ)(m.View, { className: "price", children: e.price }), (0, L.BX)(m.View, { className: "cont", children: [(0, L.tZ)(m.View, { className: "tit", children: e.title || "" }), (0, L.tZ)(m.View, { className: "txt", children: e.remark || "" })] })] }, "index");
                                              }),
                                            a
                                              ? (0, L.tZ)(m.Button, {
                                                  className: "btn-submit",
                                                  id: "AeBA",
                                                  onClick:
                                                    this.getUserProfileAction,
                                                  children:
                                                    "还差一步, 授权头像&用户名",
                                                })
                                              : (0, L.tZ)(m.Button, {
                                                  className: "btn-submit",
                                                  openType: "getUserInfo",
                                                  lang: "zh_CN",
                                                  onGetuserinfo:
                                                    this.checkUserInfoAuthority,
                                                  children:
                                                    "还差一步, 授权头像&用户名",
                                                }),
                                            (0, L.tZ)(m.Text, {
                                              className:
                                                "ifont-closed iconfont",
                                              id: "AeBB",
                                              onClick: this.handleModalClose,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, L.tZ)(Z.Z, {
                                    ref: function (t) {
                                      e.onDialogAttach(t);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        a
                      );
                    })(h.default.Component))
                  ) || n)
              ) || n;
          (Y.enableShareAppMessage = !0),
            Page(
              (0, c.createPageConfig)(
                Y,
                "pages/activity/flight/inviteCashBack/index",
                { root: { cn: [] } },
                {
                  navigationBarBackgroundColor: "#ffffff",
                  backgroundColorTop: "#ffffff",
                  navigationBarTextStyle: "black",
                  backgroundColorBottom: "#FF6526",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [3127, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(22930);
        }),
          e.O();
      },
    ]);
})();
