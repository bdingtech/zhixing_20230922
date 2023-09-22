!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [28886],
      {
        49781: function (e, t, n) {
          var a,
            o,
            i,
            c = n(32180),
            r = n(57042),
            s = n(24460),
            u = n(21867),
            l = n(86066),
            p = n(79301),
            g = n(95308),
            d = n(52500),
            h = n(71515),
            m = n(92954),
            f = n.n(m),
            w = n(48792),
            Z = n.n(w),
            v = n(79792),
            N = n(49120),
            y = n(18783),
            x = n(25949),
            b = n.n(x),
            k = n(27113),
            V = n(81957),
            I = n(17782),
            S = {
              sourceList: ["qiweihuanyingyu"],
              topNotes: ["先领券，再订票"],
              pageStyle: {
                background:
                  "linear-gradient(to bottom,#3306c9 15%,#5f9ff7 35%,#cef4fb 85%)",
              },
              slogan:
                "https://images3.c-ctrip.com/zt/activity/20220324-ztrip-private-group/slogan.png",
              giftBagIcon:
                "https://images3.c-ctrip.com/zt/activity/20220324-ztrip-private-group/top-after.png",
              heartIcon:
                "https://images3.c-ctrip.com/zt/activity/20220324-ztrip-private-group/icon-heart.png",
              htit: "https://images3.c-ctrip.com/zt/activity/20220324-ztrip-private-group/tit-qunyouzhuanxiang.png",
              content: [
                {
                  icon: "https://images3.c-ctrip.com/zt/activity/20220324-ztrip-private-group/icon-chuxingdaequan.png",
                  tit: "20元大额券",
                  text: "火车机票酒店",
                },
                {
                  icon: "https://images3.c-ctrip.com/zt/activity/20220324-ztrip-private-group/icon-vipqiangpiaoquan.png",
                  tit: "vip抢票×2",
                  text: "回家无忧",
                },
                {
                  icon: "https://images3.c-ctrip.com/zt/activity/20220324-ztrip-private-group/icon-dingdanmiandan.png",
                  tit: "订单免单",
                  text: "现金到账",
                },
                {
                  icon: "https://images3.c-ctrip.com/zt/activity/20220324-ztrip-private-group/icon-tejiajijiu.png",
                  tit: "特价机票酒店",
                  text: "低至1折",
                },
                {
                  icon: "https://images3.c-ctrip.com/zt/activity/20220324-ztrip-private-group/icon-yangmaofuli.png",
                  tit: "不定期羊毛福利",
                  text: "一手福利消息",
                },
              ],
            },
            C = n(48813),
            T = "ios" === v.default.os ? "8.0.6" : "8.0.3",
            z = new Date(),
            P = ""
              .concat(z.getFullYear())
              .concat(z.getMonth() + 1)
              .concat(z.getDate())
              .concat(z.getHours()),
            A = v.default.appVersion,
            B = function (e, t) {
              if (!e || !t) return !1;
              for (
                var n = e.split("."), a = t.split("."), o = 0;
                o < n.length;
                o++
              ) {
                if (parseInt(n[o]) > parseInt(a[o])) return !0;
                if (parseInt(n[o]) < parseInt(a[o])) return !1;
              }
              return !0;
            },
            L =
              ((a = (0, V.h)()),
              (o = Z()({
                pageId: "10650079646",
                data: {
                  area: "",
                  source: "",
                  groupQrcode: "",
                  areaList: [],
                  areaName: "",
                  showSection: !1,
                  isPhoneVersion: !1,
                  groupId: "",
                  pageConfig: S,
                  showToStudent: !1,
                  showLocationModal: !1,
                  locationInfo: null,
                  needLocation: !0,
                  pageType: "common",
                  loading: !0,
                },
                onLoad: function (e) {
                  var t = this;
                  return (0, g.Z)(
                    (0, p.Z)().mark(function n() {
                      var a;
                      return (0, p.Z)().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.next = 2), t.syncLoginStatus();
                            case 2:
                              return (
                                (a = B(A, T)),
                                console.log(a, "isPhoneVersion"),
                                t.setData({
                                  source: e.source,
                                  isPhoneVersion: a,
                                  area: e.area || "jiangzhehu",
                                  areaName: "江浙沪",
                                }),
                                (t.animation = f().createAnimation({
                                  duration: 200,
                                  timingFunction: "linear",
                                })),
                                (n.next = 8),
                                t.getActivityInfo()
                              );
                            case 8:
                              t.bindActiviySource(e.source),
                                t.ubtTrace(212595, {
                                  openId: y.ZP.openid || "",
                                  userName: y.ZP.userName || "",
                                  cid: y.ZP.cid || "",
                                  bizKey: "joinGroup_joinOther_show",
                                });
                            case 10:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
                },
                onShareAppMessage: function () {
                  return {
                    bu: "train",
                    path: "pages/activity/train/groupScanCode/index?source=market",
                    imageUrl:
                      "https://images3.c-ctrip.com/ztrip/2020LU/2022-05/1.jpg",
                    title: "【必领】加群获取第一手羊毛信息",
                  };
                },
                syncLoginStatus: function () {
                  return (0, g.Z)(
                    (0, p.Z)().mark(function e() {
                      var t;
                      return (0, p.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = (0, m.getCurrentInstance)()),
                                !(t.router.params.loginToken || ""))
                              ) {
                                e.next = 5;
                                break;
                              }
                              return (
                                (e.next = 5), (0, y.tN)().catch(function () {})
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                getActivityInfo: function () {
                  var e = this;
                  return (0, g.Z)(
                    (0, p.Z)().mark(function t() {
                      var n, a;
                      return (0, p.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = e.data.needLocation),
                                  (t.prev = 1),
                                  (0, N.showLoading)(),
                                  e.setData({ loading: !0 }),
                                  (t.next = 6),
                                  (0, I.J9)({
                                    area: e.data.area,
                                    source: e.data.source,
                                    needLocation: n,
                                  })
                                );
                              case 6:
                                (a = t.sent),
                                  console.log(
                                    "getActivityInfoOn2020PrivateGroup",
                                    a
                                  ),
                                  (0, N.hideLoading)(),
                                  e.setData({ loading: !1 }),
                                  1 === a.resultCode
                                    ? e.handleInitData(a)
                                    : 2 === a.resultCode
                                    ? e.openLocation()
                                    : f().showToast({
                                        title: "网络错误，请稍后重试",
                                        icon: "none",
                                        duration: 1500,
                                      }),
                                  (t.next = 16);
                                break;
                              case 13:
                                (t.prev = 13),
                                  (t.t0 = t.catch(1)),
                                  console.log(t.t0, "err");
                              case 16:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[1, 13]]
                      );
                    })
                  )();
                },
                bindActiviySource: function (e) {
                  e && (0, I.S$)({ source: e });
                },
                handleInitData: function (e) {
                  var t = this,
                    n = e.groupQrcode,
                    a = e.areaList,
                    o = e.areaName,
                    i = e.groupId,
                    c = e.pageConfig,
                    r = e.pageType,
                    s = "student" === r;
                  (this.pageId = s ? "10650080198" : "10650079646"),
                    this.setData(
                      {
                        groupQrcode:
                          n.indexOf("?") > 0
                            ? "".concat(n, "&v=").concat(P)
                            : "".concat(n, "?v=").concat(P),
                        areaList: a,
                        areaName: o,
                        groupId: i,
                        pageConfig: c || S,
                        pageType: r,
                        showToStudent: s,
                      },
                      function () {
                        if ((console.log(t.data, "data"), i)) {
                          var e = s ? 214643 : 212593,
                            n = s
                              ? "ToStudentGroupButtonShow"
                              : "joinGroup_clickToJoin_show";
                          214643 === e &&
                            console.log("214643 学生群页面 点我加群曝光"),
                            t.ubtTrace(e, {
                              openId: y.ZP.openid || "",
                              userName: y.ZP.userName || "",
                              cid: y.ZP.cid || "",
                              bizKey: n,
                              exposureType: "normal",
                            });
                        }
                      }
                    );
                },
                showAreaChooseFloat: function () {
                  "studentWelfareGroup" === this.data.source
                    ? (console.log("学生群页面 浮层曝光"),
                      this.ubtTrace(214643, {
                        openId: y.ZP.openid || "",
                        userName: y.ZP.userName || "",
                        cid: y.ZP.cid || "",
                        bizKey: "ToOtherGroupHintShow",
                        exposureType: "normal",
                      }),
                      console.log("this.pageId", this.pageId))
                    : this.ubtTrace(212596, {
                        openId: y.ZP.openid || "",
                        userName: y.ZP.userName || "",
                        cid: y.ZP.cid || "",
                        bizKey: "joinGroup_joinOther_click",
                      }),
                    this.showSection();
                },
                chooseAreaAction: function (e) {
                  var t = this;
                  console.log("item", e),
                    this.setData(
                      { areaName: e.name, area: e.area },
                      (0, g.Z)(
                        (0, p.Z)().mark(function e() {
                          return (0, p.Z)().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), t.getActivityInfo();
                                case 2:
                                  t.hideSection();
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )
                    );
                },
                showSection: function () {
                  var e = this;
                  this.animation.translateY("-100%").step(),
                    this.setData({ showSection: !0 }, function () {
                      setTimeout(function () {
                        e.setData({ animationData: e.animation.export() });
                      }, 100);
                    });
                },
                hideSection: function () {
                  this.setData({ showSection: !1 });
                },
                startmessage: function () {
                  console.log("开始回调");
                },
                completemessage: function () {
                  console.log("结束回调");
                },
                getNoticeListArr: function (e) {
                  for (
                    var t = Math.ceil(e.length / 3), n = [], a = 0;
                    a < t;
                    a++
                  ) {
                    var o = [e[3 * a]];
                    e[3 * a + 1] && o.push(e[3 * a + 1]),
                      e[3 * a + 2] && o.push(e[3 * a + 2]),
                      n.push(o);
                  }
                  return n;
                },
                renderLi: function (e, t) {
                  return e.map(function (e, n) {
                    return (0,
                    C.BX)(h.View, { className: "li", children: [(0, C.tZ)(h.Image, { src: e.icon, className: "icon" }), e.tit.includes("http") ? (0, C.tZ)(h.Image, { className: "image", src: e.tit, mode: "heightFix" }) : (0, C.tZ)(h.View, { className: "tit", children: e.tit }), (0, C.tZ)(h.View, { className: "text", children: e.text })] }, "li-".concat(t, "-").concat(n));
                  });
                },
                onClickJoinGroupBtn: function () {
                  console.log("点击了加群按钮");
                  var e = this.data.showToStudent,
                    t = e ? 214644 : 212594,
                    n = e
                      ? "ZeroHotelWinRecordPageRedemRoomClick"
                      : "joinGroup_clickToJoin_click";
                  214644 === t && console.log("学生群页面 加群按钮点击"),
                    this.ubtTrace(t, {
                      openId: y.ZP.openid || "",
                      userName: y.ZP.userName || "",
                      cid: y.ZP.cid || "",
                      bizKey: n,
                      exposureType: "normal",
                    });
                },
                onClickSelectArea: function () {
                  if (
                    (console.log("点击了选区域的浮层"), this.data.showToStudent)
                  ) {
                    console.log("学生群页面 选择区域浮层点击");
                    this.ubtTrace(214644, {
                      openId: y.ZP.openid || "",
                      userName: y.ZP.userName || "",
                      cid: y.ZP.cid || "",
                      bizKey: "ZeroHotelWinRecordHistoryPageRedemRoomClick",
                      exposureType: "normal",
                    });
                  }
                },
                beginLocate: function () {
                  var e = this;
                  console.log("定位方法调用前"),
                    (0, k.y9)()
                      .then(
                        (function () {
                          var t = (0, g.Z)(
                            (0, p.Z)().mark(function t(n) {
                              var a, o, i;
                              return (0, p.Z)().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        (console.log("定位方法调用成功res", n),
                                        (a = n.latitude),
                                        (o = n.longitude),
                                        (i = n.cityName),
                                        !a)
                                      ) {
                                        t.next = 9;
                                        break;
                                      }
                                      return (
                                        (t.next = 5),
                                        (0, I.PL)({
                                          longitude: o,
                                          latitude: a,
                                          cityName: i,
                                        })
                                      );
                                    case 5:
                                      console.warn("已经定位成功"),
                                        e.setData(
                                          { area: "" },
                                          (0, g.Z)(
                                            (0, p.Z)().mark(function t() {
                                              return (0, p.Z)().wrap(function (
                                                t
                                              ) {
                                                for (;;)
                                                  switch ((t.prev = t.next)) {
                                                    case 0:
                                                      return (
                                                        (t.next = 2),
                                                        e.getActivityInfo()
                                                      );
                                                    case 2:
                                                    case "end":
                                                      return t.stop();
                                                  }
                                              },
                                              t);
                                            })
                                          )
                                        ),
                                        (t.next = 10);
                                      break;
                                    case 9:
                                      e.setData(
                                        { needLocation: !1 },
                                        (0, g.Z)(
                                          (0, p.Z)().mark(function t() {
                                            return (0, p.Z)().wrap(function (
                                              t
                                            ) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    return (
                                                      (t.next = 2),
                                                      e.getActivityInfo()
                                                    );
                                                  case 2:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            },
                                            t);
                                          })
                                        )
                                      );
                                    case 10:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()
                      )
                      .catch(function (t) {
                        console.log("定位方法调用失败err", t),
                          e.setData(
                            { needLocation: !1 },
                            (0, g.Z)(
                              (0, p.Z)().mark(function t() {
                                return (0, p.Z)().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.next = 2), e.getActivityInfo()
                                        );
                                      case 2:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            )
                          );
                      });
                },
                openLocation: function () {
                  var e = this;
                  return (0, g.Z)(
                    (0, p.Z)().mark(function t() {
                      return (0, p.Z)().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              e.beginLocate();
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )();
                },
              })),
              a(
                (i =
                  o(
                    (i = (function (e) {
                      (0, u.Z)(n, e);
                      var t = (0, l.Z)(n);
                      function n() {
                        return (0, r.Z)(this, n), t.apply(this, arguments);
                      }
                      return (
                        (0, s.Z)(n, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                n = t.groupQrcode,
                                a = t.areaName,
                                o = t.showSection,
                                i = t.isPhoneVersion,
                                c = t.groupId,
                                r = t.pageConfig,
                                s = t.showToStudent,
                                u = t.areaList,
                                l = t.loading,
                                p = this.getNoticeListArr(r.content);
                              console.log("noticeListArr", p);
                              var g = r.pageStyle,
                                d = r.slogan,
                                m = r.giftBagIcon,
                                f = r.heartIcon,
                                w = r.htit,
                                Z = r.topNotes,
                                v = r.topNotesStyle,
                                N = s
                                  ? {}
                                  : {
                                      background:
                                        "url(https://images3.c-ctrip.com/zt/activity/20220324-ztrip-private-group/top-bg.png) no-repeat left bottom",
                                    };
                              return (
                                console.log("areaName", a),
                                console.log("showToStudent", s),
                                console.log("slogan", d),
                                l
                                  ? (0, C.tZ)(h.View, {})
                                  : (0, C.tZ)(h.Block, {
                                      children: (0, C.BX)(h.View, {
                                        className: b()("groupScanCode", {
                                          showToStudent: s,
                                        }),
                                        children: [
                                          (0, C.BX)(h.View, {
                                            className: "top-box",
                                            style: N,
                                            children: [
                                              (0, C.tZ)(h.View, {
                                                className: b()({
                                                  slogan: !0,
                                                  "slogan-student": s,
                                                }),
                                                style: {
                                                  background: "url(".concat(
                                                    d,
                                                    ") no-repeat"
                                                  ),
                                                },
                                              }),
                                              (0, C.tZ)(h.View, {
                                                className: "subtit",
                                                style: v,
                                                children: Z,
                                              }),
                                              (0, C.tZ)(h.View, {
                                                className: "icon-heart",
                                                style: {
                                                  background: "url(".concat(
                                                    f,
                                                    ") no-repeat"
                                                  ),
                                                },
                                              }),
                                              (0, C.tZ)(h.View, {
                                                className: "icon-coin",
                                              }),
                                              (0, C.tZ)(h.View, {
                                                className: b()({
                                                  "top-box-after": !0,
                                                  "show-to-student-top-box-after":
                                                    s,
                                                }),
                                                style: {
                                                  background: "url(".concat(
                                                    m,
                                                    ") no-repeat"
                                                  ),
                                                },
                                              }),
                                            ],
                                          }),
                                          (0, C.BX)(h.View, {
                                            className: "wrap",
                                            children: [
                                              (0, C.BX)(h.View, {
                                                className: "white-box",
                                                children: [
                                                  (0, C.tZ)(h.Image, {
                                                    src: w,
                                                    className: "htit",
                                                  }),
                                                  s &&
                                                    (0, C.BX)(h.View, {
                                                      className: "htxt",
                                                      children: [
                                                        "整个",
                                                        (0, C.tZ)(h.Text, {
                                                          className: "torage",
                                                          children: a,
                                                        }),
                                                        "的学生都在群里啦，快来找找有没有你的朋友吧～",
                                                      ],
                                                    }),
                                                  p.map(function (t, n) {
                                                    return (0,
                                                    C.tZ)(h.View, { className: "exclusive-list", children: e.renderLi(t, n) }, "ul-".concat(n));
                                                  }),
                                                  (0, C.tZ)(h.View, {
                                                    children:
                                                      i && c
                                                        ? (0, C.BX)(h.View, {
                                                            className:
                                                              "exclusive-btn",
                                                            children: [
                                                              (0, C.tZ)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "chat-group-plugin",
                                                                  id: "AeCe",
                                                                  onClick:
                                                                    this
                                                                      .onClickJoinGroupBtn,
                                                                  children: (0,
                                                                  C.tZ)(
                                                                    "chatGroupPlugin",
                                                                    {
                                                                      url: c,
                                                                      paddingStyle: 10,
                                                                      contactText:
                                                                        "",
                                                                      startmessage:
                                                                        this
                                                                          .startmessage,
                                                                      completemessage:
                                                                        this
                                                                          .completemessage,
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                              (0, C.tZ)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "btn-submit",
                                                                  children: (0,
                                                                  C.BX)(
                                                                    h.Text,
                                                                    {
                                                                      className:
                                                                        "tit",
                                                                      children:
                                                                        [
                                                                          "点我加入",
                                                                          a,
                                                                          s
                                                                            ? "校园群"
                                                                            : "福利群",
                                                                        ],
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                              (0, C.tZ)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "icon-hand",
                                                                }
                                                              ),
                                                            ],
                                                          })
                                                        : (0, C.BX)(h.View, {
                                                            className:
                                                              "qrcode-bd",
                                                            children: [
                                                              (0, C.BX)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "tit",
                                                                  children: [
                                                                    i && c
                                                                      ? "点击加"
                                                                      : "",
                                                                    "小智",
                                                                    (0, C.tZ)(
                                                                      h.Text,
                                                                      {
                                                                        className:
                                                                          "torage",
                                                                        children:
                                                                          a,
                                                                      }
                                                                    ),
                                                                    "福利群",
                                                                  ],
                                                                }
                                                              ),
                                                              (0, C.tZ)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "qrcode-show",
                                                                  children: (0,
                                                                  C.tZ)(
                                                                    h.Image,
                                                                    {
                                                                      src: n,
                                                                      className:
                                                                        "img",
                                                                      "show-menu-by-longpress":
                                                                        !0,
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                              (0, C.tZ)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "tips",
                                                                  children:
                                                                    "可截图扫码加群",
                                                                }
                                                              ),
                                                              (0, C.tZ)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "icon-hand",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                  }),
                                                  (0, C.BX)(h.View, {
                                                    className: "chose-other",
                                                    id: "AeCf",
                                                    onClick:
                                                      this.showAreaChooseFloat,
                                                    children: [
                                                      "不是",
                                                      a,
                                                      "？选择其他群 ",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              o &&
                                                (0, C.BX)(h.Block, {
                                                  children: [
                                                    (0, C.tZ)(h.View, {
                                                      className: "shadow",
                                                      id: "AeCg",
                                                      onClick: this.hideSection,
                                                    }),
                                                    (0, C.BX)(h.View, {
                                                      className:
                                                        "pop-botm pop-select-area",
                                                      id: "AeCh",
                                                      onClick:
                                                        this.onClickSelectArea,
                                                      children: [
                                                        (0, C.BX)(h.View, {
                                                          className:
                                                            "pop-botm-hd",
                                                          children: [
                                                            (0, C.tZ)(h.View, {
                                                              class:
                                                                "image-box",
                                                              children: (0,
                                                              C.tZ)(h.Image, {
                                                                src: "https://images3.c-ctrip.com/zt/activity/20220324-ztrip-private-group/tit-xuanzhequyu.png",
                                                                mode: "heightFix",
                                                                className:
                                                                  "tit",
                                                              }),
                                                            }),
                                                            (0, C.tZ)(h.View, {
                                                              className:
                                                                "icon-closed",
                                                              id: "AeCi",
                                                              onClick:
                                                                this
                                                                  .hideSection,
                                                            }),
                                                          ],
                                                        }),
                                                        (0, C.BX)(h.View, {
                                                          className:
                                                            "pop-botm-bd",
                                                          children: [
                                                            (0, C.tZ)(h.View, {
                                                              className:
                                                                "select-area-list",
                                                              children: u.map(
                                                                function (t) {
                                                                  return (0,
                                                                  C.tZ)(
                                                                    h.View,
                                                                    {
                                                                      id: "AeCj",
                                                                      onClick:
                                                                        function () {
                                                                          return e.chooseAreaAction(
                                                                            t
                                                                          );
                                                                        },
                                                                      className:
                                                                        "li ".concat(
                                                                          t.name ===
                                                                            a
                                                                            ? "cur"
                                                                            : ""
                                                                        ),
                                                                      children:
                                                                        t.name,
                                                                    },
                                                                    t.area
                                                                  );
                                                                }
                                                              ),
                                                            }),
                                                            (0, C.BX)(h.View, {
                                                              className:
                                                                "title",
                                                              children: [
                                                                (0, C.tZ)(
                                                                  h.View,
                                                                  {
                                                                    children:
                                                                      "区域在不断覆盖中…",
                                                                  }
                                                                ),
                                                                (0, C.tZ)(
                                                                  h.View,
                                                                  {
                                                                    children:
                                                                      "若您的区域未包括在上方，可先加一个临近的区域",
                                                                  }
                                                                ),
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
                                          (0, C.tZ)(h.View, {
                                            className: "groupScanCode-after",
                                            style: g,
                                          }),
                                        ],
                                      }),
                                    })
                              );
                            },
                          },
                        ]),
                        n
                      );
                    })(d.default.Component))
                  ) || i)
              ) || i);
          (L.enableShareAppMessage = !0),
            Page(
              (0, c.createPageConfig)(
                L,
                "pages/activity/train/groupScanCode/index",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "智行内部福利",
                  navigationBarTextStyle: "black",
                  navigationBarBackgroundColor: "#FFF",
                  backgroundColorTop: "#FFF",
                  backgroundColorBottom: "#FFF",
                  enablePullDownRefresh: !1,
                  usingComponents: {
                    chatGroupPlugin: "plugin://chatGroupPlugin/cell",
                  },
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [24945, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(49781);
        }),
          e.O();
      },
    ]);
})();
