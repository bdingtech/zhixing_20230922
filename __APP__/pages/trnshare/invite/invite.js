!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [31704],
    {
      83451: function (e, t, i) {
        var a,
          n = i(32180),
          s = i(57042),
          c = i(24460),
          o = i(21867),
          r = i(86066),
          l = i(298),
          d = i(52500),
          h = i(71515),
          m = i(92954),
          u = i.n(m),
          N = i(48792),
          p = i.n(N),
          f = i(79792),
          w = i(79910),
          g = i(2326),
          v = i(77900),
          Z = i(25391),
          V = i(18783),
          I = i(10741),
          T = i(49120),
          b = i(8271),
          x = i.n(b),
          y = i(4102),
          B = i(81957),
          k = i(48813),
          D = {
            pageId: f.default.isTieyou ? "10650018731" : "10650018730",
            data: {
              isTieyou: f.default.isTieyou,
              cnName: "",
              credentialNo: "",
              defaultPortrait:
                "https://images3.c-ctrip.com/zt/wechat/default_invite_avatar.png",
              showDrawer: !1,
              linkRot: !1,
            },
            onLoad: function (e) {
              var t = e.param,
                i = void 0 === t ? "" : t,
                a = e.openid;
              console.log("originator openId: ", a, i),
                (this.originatorOpenId = a),
                this.setData({ param: i }),
                this.getOpenId(),
                this.getUserInfo(),
                u().hideShareMenu && u().hideShareMenu();
            },
            getOpenId: function () {
              var e = this;
              (0, V.M9)().then(
                function (t) {
                  var i = t.openid;
                  console.log("openId: ", i),
                    e.setData({
                      openId: i,
                      isOriginator: i === e.originatorOpenId,
                    }),
                    e.getInvitedPassengersInfos();
                },
                function () {
                  console.log("获取openId失败"),
                    e.setData({ openId: "", isOriginator: !1 });
                }
              );
            },
            getUserInfo: function () {
              var e = this;
              u().getSetting({
                success: function (t) {
                  console.log(t),
                    t.authSetting["scope.userInfo"] &&
                      u().getUserInfo({
                        success: function (t) {
                          var i = t.userInfo,
                            a = i.nickName,
                            n = i.avatarUrl;
                          e.setData({ nickName: a, avatarUrl: n });
                        },
                      });
                },
              });
            },
            getInvitedPassengersInfos: function () {
              var e = this,
                t = this.data,
                i = {
                  openId: t.openId,
                  param: t.param,
                  type: t.isOriginator ? 2 : 1,
                };
              (0, I.N8W)(i)
                .then(function (t) {
                  var i = t.resultCode;
                  if (1 === i) {
                    var a = t.nickname,
                      n = t.picUrl,
                      s = t.userOrderTempInfo,
                      c = void 0 === s ? {} : s,
                      o = t.userTempPassengerEntityList,
                      r = void 0 === o ? [] : o;
                    e.setData({
                      originator: { nickname: a, picUrl: n },
                      trainInfo: e.handleTrainInfo(c),
                      passengerList: e.handlePassengers(r),
                    }),
                      e.doCountDown();
                  } else
                    -2 === i
                      ? (e.setData({ linkRot: !0 }),
                        setTimeout(function () {
                          e.toIndex();
                        }, 2e3))
                      : (0, T.showModal)({
                          content: "网络出错，请稍候再试",
                          success: function () {
                            e.toIndex();
                          },
                        });
                })
                .finally(function () {
                  u().stopPullDownRefresh();
                });
            },
            handleTrainInfo: function (e) {
              return (0, l.Z)(
                (0, l.Z)({}, e),
                {},
                {
                  departDate: x()(e.departureDate).format("M月D日"),
                  departWeekDay: y.Z.getWeekDay(e.departureDate),
                  arriveDate: e.arriveDate
                    ? x()(e.arriveDate).format("M月D日")
                    : "",
                  seatName: e.seatName || "",
                }
              );
            },
            handlePassengers: function (e) {
              var t = ["成人票", "儿童票", "学生票"];
              return e.map(function (e) {
                return (0,
                l.Z)((0, l.Z)({}, e), {}, { pasgerType: t[e.identityType - 1] });
              });
            },
            doCountDown: function () {
              var e = this.data.trainInfo,
                t = (void 0 === e ? {} : e).invalidTime,
                i = g.Z.countDown(t),
                a = i.min,
                n = i.sec;
              i.end
                ? this.countTimer && clearTimeout(this.payTimer)
                : (this.setData({ countTime: "".concat(a, ":").concat(n) }),
                  (this.countTimer = setTimeout(this.doCountDown, 1e3)));
            },
            showNonsupportToast: function (e) {
              var t = e.currentTarget.dataset.msg;
              (0, T.showToast)(t);
            },
            nameInput: function (e) {
              var t = e.detail.value;
              this.setData({ cnName: t.trim() });
            },
            credentialNumberInput: function (e) {
              var t = e.detail.value;
              this.setData({ credentialNo: t.trim() });
            },
            credentialPhoneInput: function (e) {
              var t = e.detail.value;
              this.setData({ phoneNo: t.trim() });
            },
            checkValidData: function () {
              var e = this.data,
                t = e.cnName,
                i = e.credentialNo,
                a = e.phoneNo;
              return a
                ? /^1[3456789]\d{9}$/.test(a)
                  ? v.Z.isValidChineseName(t)
                    ? !!v.Z.isValidSFZ(i) ||
                      ((0, T.showModal)("请输入正确的身份证号码"), !1)
                    : ((0, T.showModal)("请输入正确的中文名"), !1)
                  : ((0, T.showModal)("手机号码有误，请重填"), !1)
                : ((0, T.showModal)("手机号不能为空"), !1);
            },
            showDrawer$: function () {
              this.setData({ showDrawer: !0 });
            },
            hideDrawer: function () {
              this.setData({ showDrawer: !1 });
            },
            closeMask: function () {
              this.hideDrawer();
            },
            checkUserInfo: function (e) {
              if (this.checkValidData()) {
                var t = this.data,
                  i = t.avatarUrl,
                  a = t.nickName,
                  n = t.isTieyou,
                  s = t.defaultPortrait;
                if (i && a);
                else if ("getUserInfo:ok" === e.detail.errMsg) {
                  var c = e.detail.userInfo,
                    o = c.avatarUrl,
                    r = c.nickName;
                  this.setData({ nickName: r, avatarUrl: o });
                } else
                  this.setData({
                    nickName: "".concat(n ? "铁友" : "智行", "用户"),
                    avatarUrl: s,
                  });
                this.showDrawer$();
              }
            },
            handleSubmitAction: function (e) {
              var t = this,
                i = this.data.isTieyou
                  ? "1Umg-WA3HbJAH3rWSCPNL2WgKdD_5fqpFJ2R0wwLGxc"
                  : "EMW7V8tiT9y5fp2nlM1ewKckbrI03YfkyUliJtjn4LM";
              wx.requestSubscribeMessage({
                tmplIds: [i],
                success: function (e) {
                  console.log("success", e);
                },
                fail: function (e) {
                  console.log("fail", e);
                },
              });
              var a = e.detail.formId,
                n = void 0 === a ? "the formId is a mock one" : a;
              console.log(n);
              var s = this.data,
                c = s.cnName,
                o = s.credentialNo,
                r = s.openId,
                l = s.avatarUrl,
                d = s.param,
                h = s.phoneNo;
              if (!w.Z.isFastDoubleClick() && !this.isLoading) {
                var m = {
                  openId: r,
                  formId: n,
                  param: d,
                  UserTempPassengerEntity: {
                    cnName: c,
                    identityType: 1,
                    identityNo: o,
                    picUrl: l,
                    passengerType: 1,
                    mobile: h,
                  },
                };
                (0, T.showLoading)(),
                  (this.isLoading = !0),
                  (0, I.$tX)(m)
                    .then(
                      function (e) {
                        console.log(e);
                        var i = e.resultCode,
                          a = e.resultMessage;
                        1 === i
                          ? t.getInvitedPassengersInfos()
                          : (0, T.showModal)(a || "网络错误，请稍后再试");
                      },
                      function () {
                        (0, T.showModal)("网络错误，请稍后再试");
                      }
                    )
                    .finally(function () {
                      (0, T.hideLoading)(), t.hideDrawer(), (t.isLoading = !1);
                    });
              }
            },
            toTrainBooking: function () {
              var e = this.data.trainInfo,
                t = e.stationFrom,
                i = e.stationTo,
                a = e.trainTimes,
                n = e.departureDate,
                s = e.seatName;
              this.navigateTo({
                url: ""
                  .concat(Z.ZP.getTrainBookingUrl(), "?dstation=")
                  .concat(t, "&astation=")
                  .concat(i, "&trainName=")
                  .concat(a, "&ddate=")
                  .concat(n, "&seat=")
                  .concat(s),
              });
            },
            toIndex: function () {
              w.Z.relaunchHome();
            },
            onPullDownRefresh: function () {
              this.getInvitedPassengersInfos();
            },
            onShareAppMessage: function () {
              var e = this.data.param;
              return (
                console.log(e),
                {
                  title: "快来加入行程，我来帮你买票~",
                  path: "/pages/trnshare/invite/invite?param="
                    .concat(e, "&openid=")
                    .concat(this.originatorOpenId),
                  imageUrl:
                    "https://images3.c-ctrip.com/zt/wechat/fill_in_information.png",
                }
              );
            },
          },
          X =
            (0, B.h)()(
              (a =
                p()(D)(
                  (a = (function (e) {
                    (0, o.Z)(i, e);
                    var t = (0, r.Z)(i);
                    function i() {
                      return (0, s.Z)(this, i), t.apply(this, arguments);
                    }
                    return (
                      (0, c.Z)(i, [
                        {
                          key: "render",
                          value: function () {
                            var e = this.data,
                              t = e.isTieyou,
                              i = e.isOriginator,
                              a = e.trainInfo,
                              n = e.passengerList,
                              s = e.originator,
                              c = e.countTime,
                              o = e.defaultPortrait,
                              r = e.showDrawer,
                              l = e.cnName,
                              d = e.credentialNo,
                              m = e.phoneNo,
                              u = e.linkRot;
                            return a
                              ? (0, k.BX)(h.Block, {
                                  children: [
                                    (0, k.BX)(h.View, {
                                      className:
                                        "invite-top " + (t ? "ty" : "zx"),
                                      children: [
                                        (0, k.tZ)(h.View, {
                                          className: "tit",
                                          children:
                                            "邀请" +
                                            (i ? "好友" : "你") +
                                            "去「" +
                                            a.stationTo +
                                            "」",
                                        }),
                                        (0, k.tZ)(h.View, {
                                          className: "txt",
                                          children: i
                                            ? "好友填写完个人信息，一起买火车票"
                                            : "填写你的个人信息，TA帮你买火车票",
                                        }),
                                      ],
                                    }),
                                    (0, k.BX)(h.View, {
                                      className: "invite-box",
                                      children: [
                                        !i && n.length > 0
                                          ? (0, k.BX)(h.View, {
                                              className: "invite-suc",
                                              children: [
                                                (0, k.tZ)(h.Icon, {
                                                  className: "icon-suc",
                                                }),
                                                (0, k.tZ)(h.View, {
                                                  className: "txt",
                                                  children:
                                                    "已成功加入本次行程",
                                                }),
                                              ],
                                            })
                                          : (0, k.BX)(h.View, {
                                              className: "invite-sponsor",
                                              children: [
                                                (0, k.tZ)(h.Image, {
                                                  src: s.picUrl,
                                                  className: "avatar",
                                                }),
                                                (0, k.tZ)(h.View, {
                                                  className:
                                                    "tag " + (t ? "ty" : "zx"),
                                                  children: "发起人",
                                                }),
                                                (0, k.BX)(h.View, {
                                                  className: "txt",
                                                  children: [
                                                    "本次邀请将在",
                                                    (0, k.tZ)(h.Text, {
                                                      className: "time torage",
                                                      children: c,
                                                    }),
                                                    "后失效，请及时填写信息哦~",
                                                  ],
                                                }),
                                              ],
                                            }),
                                        (0, k.BX)(h.View, {
                                          className:
                                            "invite-tick " + (t ? "ty" : "zx"),
                                          children: [
                                            (0, k.BX)(h.View, {
                                              className: "from",
                                              children: [
                                                (0, k.tZ)(h.View, {
                                                  className: "date",
                                                  children:
                                                    a.departDate +
                                                    " " +
                                                    a.departWeekDay,
                                                }),
                                                (0, k.tZ)(h.View, {
                                                  className: "time",
                                                  children: a.departureTime,
                                                }),
                                                (0, k.tZ)(h.View, {
                                                  className: "station",
                                                  children: a.stationFrom,
                                                }),
                                              ],
                                            }),
                                            (0, k.BX)(h.View, {
                                              className: "mid",
                                              children: [
                                                (0, k.tZ)(h.View, {
                                                  className: "seat",
                                                  children: a.trainTimes,
                                                }),
                                                (0, k.tZ)(h.Text, {
                                                  className:
                                                    "ifont-station iconfont",
                                                }),
                                                (0, k.tZ)(h.View, {
                                                  className: "checi",
                                                  children: a.seatName,
                                                }),
                                              ],
                                            }),
                                            (0, k.BX)(h.View, {
                                              className: "to",
                                              children: [
                                                (0, k.tZ)(h.View, {
                                                  className: "date",
                                                  style:
                                                    "color: " +
                                                    (a.arriveDate
                                                      ? "#666"
                                                      : "#fff") +
                                                    ";",
                                                  children:
                                                    a.arriveDate || "暂无数据",
                                                }),
                                                (0, k.tZ)(h.View, {
                                                  className: "time",
                                                  children: a.arriveTime,
                                                }),
                                                (0, k.tZ)(h.View, {
                                                  className: "station",
                                                  children: a.stationTo,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        i
                                          ? (0, k.tZ)(h.Block, {
                                              children:
                                                n && n.length > 0
                                                  ? (0, k.BX)(h.View, {
                                                      className: "invite-bd",
                                                      children: [
                                                        (0, k.tZ)(h.View, {
                                                          className: "tit",
                                                          children:
                                                            "您的乘客信息",
                                                        }),
                                                        (0, k.tZ)(h.View, {
                                                          className:
                                                            "invite-list",
                                                          children: n.map(
                                                            function (e, t) {
                                                              return (0, k.tZ)(
                                                                h.Block,
                                                                {
                                                                  children: (0,
                                                                  k.BX)(
                                                                    h.View,
                                                                    {
                                                                      className:
                                                                        "item",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          k.tZ)(
                                                                            h.View,
                                                                            {
                                                                              className:
                                                                                "lbox",
                                                                              children:
                                                                                (0,
                                                                                k.tZ)(
                                                                                  h.Image,
                                                                                  {
                                                                                    src:
                                                                                      e.picUrl ||
                                                                                      o,
                                                                                    className:
                                                                                      "avatar",
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          k.BX)(
                                                                            h.View,
                                                                            {
                                                                              className:
                                                                                "cont",
                                                                              children:
                                                                                [
                                                                                  (0,
                                                                                  k.BX)(
                                                                                    h.View,
                                                                                    {
                                                                                      className:
                                                                                        "name",
                                                                                      children:
                                                                                        [
                                                                                          e.cnName,
                                                                                          (0,
                                                                                          k.tZ)(
                                                                                            h.Text,
                                                                                            {
                                                                                              className:
                                                                                                "tag",
                                                                                              children:
                                                                                                e.pasgerType,
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  k.tZ)(
                                                                                    h.View,
                                                                                    {
                                                                                      className:
                                                                                        "tgrey",
                                                                                      children:
                                                                                        e.identityNo,
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          k.tZ)(
                                                                            h.View,
                                                                            {
                                                                              className:
                                                                                "rbox",
                                                                              children:
                                                                                (0,
                                                                                k.tZ)(
                                                                                  h.Text,
                                                                                  {
                                                                                    className:
                                                                                      "color-primary",
                                                                                    children:
                                                                                      "已加入",
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                },
                                                                t
                                                              );
                                                            }
                                                          ),
                                                        }),
                                                        (0, k.tZ)(h.View, {
                                                          className:
                                                            "invite-btn-box mt70 " +
                                                            (t ? "ty" : "zx"),
                                                          children: (0, k.tZ)(
                                                            h.Button,
                                                            {
                                                              className:
                                                                "btn-invite",
                                                              "data-ubt-key":
                                                                "invite_friends_buy_tickets",
                                                              id: "ADAs",
                                                              onClick:
                                                                this
                                                                  .toTrainBooking,
                                                              children:
                                                                "去购票",
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    })
                                                  : n &&
                                                    0 === n.length &&
                                                    (0, k.BX)(h.View, {
                                                      className: "invite-bd",
                                                      children: [
                                                        (0, k.tZ)(h.View, {
                                                          className: "tit",
                                                          children:
                                                            "您的邀请状态",
                                                        }),
                                                        (0, k.BX)(h.View, {
                                                          className:
                                                            "invite-none",
                                                          children: [
                                                            (0, k.tZ)(h.Icon, {
                                                              className:
                                                                "icon-none " +
                                                                (t
                                                                  ? "ty"
                                                                  : "zx"),
                                                            }),
                                                            (0, k.tZ)(h.View, {
                                                              className:
                                                                "tgrey",
                                                              children:
                                                                "还没有好友加入哦，继续邀请吧",
                                                            }),
                                                          ],
                                                        }),
                                                        (0, k.tZ)(h.Button, {
                                                          className:
                                                            "fixed-home " +
                                                            (t ? "ty" : "zx"),
                                                          id: "ADAt",
                                                          onClick: this.toIndex,
                                                          "data-ubt-key":
                                                            "tieyou_wx_invite_toIndex",
                                                        }),
                                                        (0, k.tZ)(h.View, {
                                                          className:
                                                            "invite-btn-box " +
                                                            (t ? "ty" : "zx"),
                                                          children: (0, k.tZ)(
                                                            h.Button,
                                                            {
                                                              className:
                                                                "btn-invite",
                                                              "data-ubt-key":
                                                                "invite_friends_clicked",
                                                              openType: "share",
                                                              children:
                                                                "继续邀请好友",
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                            })
                                          : (0, k.BX)(h.Block, {
                                              children: [
                                                n &&
                                                  n.length > 0 &&
                                                  (0, k.BX)(h.View, {
                                                    className: "invite-bd",
                                                    children: [
                                                      (0, k.tZ)(h.View, {
                                                        className: "tit",
                                                        children:
                                                          "您的乘客信息",
                                                      }),
                                                      n &&
                                                        n.length > 0 &&
                                                        (0, k.BX)(h.Block, {
                                                          children: [
                                                            (0, k.tZ)(h.View, {
                                                              className:
                                                                "invite-list",
                                                              children: n.map(
                                                                function (
                                                                  e,
                                                                  t
                                                                ) {
                                                                  return (0,
                                                                  k.tZ)(
                                                                    h.Block,
                                                                    {
                                                                      children:
                                                                        (0,
                                                                        k.BX)(
                                                                          h.View,
                                                                          {
                                                                            className:
                                                                              "item",
                                                                            children:
                                                                              [
                                                                                (0,
                                                                                k.tZ)(
                                                                                  h.View,
                                                                                  {
                                                                                    className:
                                                                                      "lbox",
                                                                                    children:
                                                                                      (0,
                                                                                      k.tZ)(
                                                                                        h.Image,
                                                                                        {
                                                                                          src:
                                                                                            e.picUrl ||
                                                                                            o,
                                                                                          className:
                                                                                            "avatar",
                                                                                        }
                                                                                      ),
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                k.BX)(
                                                                                  h.View,
                                                                                  {
                                                                                    className:
                                                                                      "cont",
                                                                                    children:
                                                                                      [
                                                                                        (0,
                                                                                        k.BX)(
                                                                                          h.View,
                                                                                          {
                                                                                            className:
                                                                                              "name",
                                                                                            children:
                                                                                              [
                                                                                                e.cnName,
                                                                                                (0,
                                                                                                k.tZ)(
                                                                                                  h.Text,
                                                                                                  {
                                                                                                    className:
                                                                                                      "tag",
                                                                                                    children:
                                                                                                      e.pasgerType,
                                                                                                  }
                                                                                                ),
                                                                                              ],
                                                                                          }
                                                                                        ),
                                                                                        (0,
                                                                                        k.tZ)(
                                                                                          h.View,
                                                                                          {
                                                                                            className:
                                                                                              "tgrey",
                                                                                            children:
                                                                                              e.identityNo,
                                                                                          }
                                                                                        ),
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                k.tZ)(
                                                                                  h.View,
                                                                                  {
                                                                                    className:
                                                                                      "rbox",
                                                                                    children:
                                                                                      (0,
                                                                                      k.tZ)(
                                                                                        h.Text,
                                                                                        {
                                                                                          className:
                                                                                            "color-primary",
                                                                                          children:
                                                                                            "已加入",
                                                                                        }
                                                                                      ),
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        ),
                                                                    },
                                                                    t
                                                                  );
                                                                }
                                                              ),
                                                            }),
                                                            (0, k.tZ)(h.View, {
                                                              className:
                                                                "invite-btn-box " +
                                                                (t
                                                                  ? "ty"
                                                                  : "zx"),
                                                              children: (0,
                                                              k.tZ)(h.Button, {
                                                                className:
                                                                  "btn-invite",
                                                                "data-ubt-key":
                                                                  "friends_invited_index",
                                                                id: "ADAu",
                                                                onClick:
                                                                  this.toIndex,
                                                                children:
                                                                  "去小程序首页",
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                    ],
                                                  }),
                                                n &&
                                                  0 === n.length &&
                                                  (0, k.BX)(h.View, {
                                                    className: "invite-bd",
                                                    children: [
                                                      (0, k.tZ)(h.View, {
                                                        className: "tit",
                                                        children:
                                                          "填写您的信息",
                                                      }),
                                                      (0, k.BX)(h.View, {
                                                        className:
                                                          "invite-fillout",
                                                        children: [
                                                          (0, k.BX)(h.View, {
                                                            className: "item",
                                                            "data-msg":
                                                              "暂不支持其他乘客类型",
                                                            id: "ADAv",
                                                            onClick:
                                                              this
                                                                .showNonsupportToast,
                                                            children: [
                                                              (0, k.tZ)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "label",
                                                                  children:
                                                                    "乘客类型",
                                                                }
                                                              ),
                                                              (0, k.tZ)(
                                                                h.Text,
                                                                {
                                                                  children:
                                                                    "成人票",
                                                                }
                                                              ),
                                                              (0, k.tZ)(
                                                                h.Text,
                                                                {
                                                                  className:
                                                                    "iconfont ifont-more",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, k.BX)(h.View, {
                                                            className: "item",
                                                            children: [
                                                              (0, k.tZ)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "label",
                                                                  children:
                                                                    "乘客姓名",
                                                                }
                                                              ),
                                                              (0, k.tZ)(
                                                                h.Input,
                                                                {
                                                                  type: "text",
                                                                  className:
                                                                    "input-txt",
                                                                  placeholder:
                                                                    "请填写您的真实姓名",
                                                                  placeholderClass:
                                                                    "input-place",
                                                                  onInput:
                                                                    this
                                                                      .nameInput,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, k.BX)(h.View, {
                                                            className: "item",
                                                            children: [
                                                              (0, k.tZ)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "label",
                                                                  children:
                                                                    "证件类型",
                                                                }
                                                              ),
                                                              (0, k.tZ)(
                                                                h.Text,
                                                                {
                                                                  children:
                                                                    "身份证",
                                                                }
                                                              ),
                                                              (0, k.tZ)(
                                                                h.Text,
                                                                {
                                                                  className:
                                                                    "ifont-detail iconfont",
                                                                  "data-msg":
                                                                    "暂不支持其他证件类型",
                                                                  id: "ADAw",
                                                                  onClick:
                                                                    this
                                                                      .showNonsupportToast,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, k.BX)(h.View, {
                                                            className: "item",
                                                            children: [
                                                              (0, k.tZ)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "label",
                                                                  children:
                                                                    "证件号码",
                                                                }
                                                              ),
                                                              (0, k.tZ)(
                                                                h.Input,
                                                                {
                                                                  type: "text",
                                                                  className:
                                                                    "input-txt",
                                                                  placeholder:
                                                                    "与乘客证件号码一致",
                                                                  placeholderClass:
                                                                    "input-place",
                                                                  onInput:
                                                                    this
                                                                      .credentialNumberInput,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, k.BX)(h.View, {
                                                            className: "item",
                                                            children: [
                                                              (0, k.tZ)(
                                                                h.View,
                                                                {
                                                                  className:
                                                                    "label",
                                                                  children:
                                                                    "手机号",
                                                                }
                                                              ),
                                                              (0, k.tZ)(
                                                                h.Input,
                                                                {
                                                                  type: "text",
                                                                  className:
                                                                    "input-txt",
                                                                  placeholder:
                                                                    "请填写准确的手机号",
                                                                  placeholderClass:
                                                                    "input-place",
                                                                  onInput:
                                                                    this
                                                                      .credentialPhoneInput,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, k.tZ)(h.View, {
                                                        className:
                                                          "invite-btn-box " +
                                                          (t ? "ty" : "zx"),
                                                        children: (0, k.tZ)(
                                                          h.Button,
                                                          {
                                                            className:
                                                              "btn-invite",
                                                            "data-ubt-key":
                                                              "friends_invited_join",
                                                            openType:
                                                              "getUserInfo",
                                                            lang: "zh_CN",
                                                            onGetuserinfo:
                                                              this
                                                                .checkUserInfo,
                                                            children:
                                                              "提交资料并加入行程",
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                      ],
                                    }),
                                    r &&
                                      (0, k.tZ)(h.View, {
                                        className: "shade-box",
                                        id: "ADAx",
                                        onClick: this.closeMask,
                                      }),
                                    (0, k.BX)(h.View, {
                                      className:
                                        "inview-pop-botm " +
                                        (r ? "active" : ""),
                                      children: [
                                        (0, k.tZ)(h.View, {
                                          className: "inview-pop-hd",
                                          children: (0, k.BX)(h.View, {
                                            className: "tit",
                                            children: [
                                              "核对乘客信息",
                                              (0, k.tZ)(h.Text, {
                                                className:
                                                  "iconfont ifont-closed",
                                                id: "ADAy",
                                                onClick: this.hideDrawer,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, k.BX)(h.View, {
                                          className: "inview-pop-bd",
                                          children: [
                                            (0, k.BX)(h.View, {
                                              className: "inview-pasg-info",
                                              children: [
                                                (0, k.BX)(h.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, k.tZ)(h.Text, {
                                                      className: "label",
                                                      children: "乘客类型",
                                                    }),
                                                    "成人票",
                                                  ],
                                                }),
                                                (0, k.BX)(h.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, k.tZ)(h.Text, {
                                                      className: "label",
                                                      children: "乘客姓名",
                                                    }),
                                                    l,
                                                  ],
                                                }),
                                                (0, k.BX)(h.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, k.tZ)(h.Text, {
                                                      className: "label",
                                                      children: "证件号码",
                                                    }),
                                                    d + "（身份证）",
                                                  ],
                                                }),
                                                (0, k.BX)(h.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, k.tZ)(h.Text, {
                                                      className: "label",
                                                      children: "手机号",
                                                    }),
                                                    m,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, k.BX)(h.View, {
                                              className: "warn-tips",
                                              children: [
                                                (0, k.tZ)(h.Text, {
                                                  className:
                                                    "iconfont ifont-tips",
                                                }),
                                                "信息提交后不可改，请确认信息无误再提交哦",
                                              ],
                                            }),
                                            (0, k.BX)(h.View, {
                                              className:
                                                "invite-btn-box " +
                                                (t ? "ty" : "zx"),
                                              children: [
                                                (0, k.tZ)(h.Button, {
                                                  className: "btn-edit",
                                                  "data-ubt-key":
                                                    "friends_invited_modify",
                                                  id: "ADAz",
                                                  onClick: this.hideDrawer,
                                                  children: "去修改",
                                                }),
                                                (0, k.tZ)(h.Button, {
                                                  className: "btn-invite",
                                                  "data-ubt-key":
                                                    "friends_invited_submit",
                                                  id: "ADBA",
                                                  onClick:
                                                    this.handleSubmitAction,
                                                  children: "确认提交",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    u &&
                                      (0, k.tZ)(h.View, {
                                        className: "blank",
                                        children: (0, k.BX)(h.View, {
                                          className: "blank-fail",
                                          children: [
                                            (0, k.tZ)(h.Icon, {
                                              className:
                                                "img-fail " + (t ? "ty" : "zx"),
                                            }),
                                            (0, k.tZ)(h.View, {
                                              className: "txt",
                                              children:
                                                "本次邀请已失效，即将跳转小程序首页…",
                                            }),
                                          ],
                                        }),
                                      }),
                                  ],
                                })
                              : (0, k.tZ)(h.View, {});
                          },
                        },
                      ]),
                      i
                    );
                  })(d.default.Component))
                ) || a)
            ) || a;
        (X.enableShareAppMessage = !0),
          Page(
            (0, n.createPageConfig)(
              X,
              "pages/trnshare/invite/invite",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                navigationBarFrontColor: "#ffffff",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#FFFFFF",
              } || {}
            )
          );
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (t) {
          return e((e.s = t));
        })(83451);
      }),
        e.O();
    },
  ]);
})();
