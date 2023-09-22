!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/641b9f552cd3c19e352aef60a88676a0.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [45305],
      {
        996: function (e, t, i) {
          var a,
            s,
            c,
            n,
            o,
            l = i(32180),
            r = i(57042),
            d = i(24460),
            h = i(21867),
            m = i(86066),
            u = i(45023),
            g = i(90983),
            w = i(298),
            p = i(90129),
            N = i(79301),
            f = i(95308),
            Z = i(52500),
            v = i(71515),
            x = i(92954),
            b = i.n(x),
            V = i(48792),
            D = i.n(V),
            B = i(79792),
            I = i(9153),
            S = i(18783),
            T = i(5050),
            C = i(49120),
            y = i(79910),
            k = i(8271),
            X = i.n(k),
            A = i(13025),
            G = i(10741),
            U = i(81957),
            P = i(17782),
            R = i(48813),
            z =
              D()({
                externalClasses: ["barrage-class", "box-class", "text-class"],
                properties: {
                  list: {
                    type: Array,
                    value: function () {
                      return [];
                    },
                  },
                  time: { type: Number, value: 3e3 },
                  from: { type: Number, value: 0 },
                },
                data: { currentList: [], index: 0, isFirst: !0 },
                ready: function () {
                  var e = this.getRandomNumber();
                  this.setData({ index: this.data.from, animationTime: e }),
                    this.initData();
                },
                detached: function () {
                  clearInterval(this.intervalId);
                },
                methods: {
                  initData: function () {
                    var e = this;
                    this.data.list.length
                      ? (this.addBullet(),
                        (this.intervalId = setInterval(function () {
                          e.addBullet();
                        }, 1e3 * this.data.animationTime)))
                      : setTimeout(function () {
                          e.initData();
                        }, 50);
                  },
                  addBullet: function () {
                    var e = this,
                      t = this.data,
                      i = t.currentList,
                      a = t.index,
                      s = t.list;
                    i.length < 3 &&
                      (i.push(s[this.data.index % s.length]),
                      this.setData({
                        currentList: JSON.parse(JSON.stringify(i)),
                        index: a + 1,
                      })),
                      setTimeout(function () {
                        e.removeBullet();
                      }, 1e3 * this.data.animationTime);
                  },
                  removeBullet: function () {
                    var e = this.data.currentList;
                    e.shift(),
                      this.setData({
                        currentList: JSON.parse(JSON.stringify(e)),
                      });
                  },
                  getRandomNumber: function () {
                    return [6, 7, 8, 9, 10][Math.floor(5 * Math.random())];
                  },
                },
              })(
                (a = (function (e) {
                  (0, h.Z)(i, e);
                  var t = (0, m.Z)(i);
                  function i() {
                    return (0, r.Z)(this, i), t.apply(this, arguments);
                  }
                  return (
                    (0, d.Z)(i, [
                      {
                        key: "render",
                        value: function () {
                          var e = this.data,
                            t = e.animationTime,
                            i = e.currentList;
                          return (0, R.tZ)(v.View, {
                            className: "common-activity-train-barrage",
                            children: (0, R.tZ)(v.View, {
                              className: "barrage-wrap barrage-class",
                              children: i.map(function (e, i) {
                                return (0,
                                R.BX)(v.View, { className: "box box-class", style: "animation: dmAnimation2 " + t + "s linear infinite forwards;", children: [(0, R.tZ)(v.Image, { src: e.avatar, className: "box-image" }), (0, R.tZ)(v.View, { className: "box-text text-class", children: e.comment })] }, i);
                              }),
                            }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(Z.default.Component))
              ) || a,
            L =
              D()({
                externalClasses: ["barrage-class", "box-class", "text-class"],
                properties: {
                  list: {
                    type: Array,
                    value: function () {
                      return [];
                    },
                  },
                  time: { type: Number, value: 3e3 },
                  from: { type: Number, value: 0 },
                },
                data: { currentList1: [], index: 0, isFirst: !0 },
                ready: function () {
                  var e = this.getRandomNumber();
                  this.setData({ index: this.data.from, animationTime: e }),
                    this.initData();
                },
                detached: function () {
                  clearInterval(this.intervalId);
                },
                methods: {
                  initData: function () {
                    var e = this;
                    this.data.list.length
                      ? (this.addBullet(),
                        (this.intervalId = setInterval(function () {
                          e.addBullet();
                        }, 1e3 * this.data.animationTime)))
                      : setTimeout(function () {
                          e.initData();
                        }, 50);
                  },
                  addBullet: function () {
                    var e = this,
                      t = this.data,
                      i = t.currentList1,
                      a = t.index,
                      s = t.list;
                    i.length < 3 &&
                      (i.push(s[this.data.index % s.length]),
                      this.setData({
                        currentList1: JSON.parse(JSON.stringify(i)),
                        index: a + 1,
                      })),
                      setTimeout(function () {
                        e.removeBullet();
                      }, 1e3 * this.data.animationTime);
                  },
                  removeBullet: function () {
                    var e = this.data.currentList1;
                    e.shift(),
                      this.setData({
                        currentList1: JSON.parse(JSON.stringify(e)),
                      });
                  },
                  getRandomNumber: function () {
                    return [6, 7, 8, 9, 10][Math.floor(5 * Math.random())];
                  },
                },
              })(
                (s = (function (e) {
                  (0, h.Z)(i, e);
                  var t = (0, m.Z)(i);
                  function i() {
                    return (0, r.Z)(this, i), t.apply(this, arguments);
                  }
                  return (
                    (0, d.Z)(i, [
                      {
                        key: "render",
                        value: function () {
                          var e = this.data,
                            t = e.animationTime,
                            i = e.currentList1;
                          return (0, R.tZ)(v.View, {
                            className: "common-activity-train-barrage1",
                            children: (0, R.tZ)(v.View, {
                              className: "barrage-wrap barrage-class",
                              children: i.map(function (e, i) {
                                return (0,
                                R.BX)(v.View, { className: "box box-class", style: "animation: dmAnimation2 " + t + "s linear infinite forwards;", children: [(0, R.tZ)(v.Image, { src: e.avatar, className: "box-image" }), (0, R.tZ)(v.View, { className: "box-text text-class", children: e.comment })] }, i);
                              }),
                            }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(Z.default.Component))
              ) || s,
            F =
              D()({
                externalClasses: ["barrage-class", "box-class", "text-class"],
                properties: {
                  list: {
                    type: Array,
                    value: function () {
                      return [];
                    },
                  },
                  time: { type: Number, value: 3e3 },
                  from: { type: Number, value: 0 },
                },
                data: { currentList2: [], index: 0, isFirst: !0 },
                ready: function () {
                  var e = this.getRandomNumber();
                  this.setData({ index: this.data.from, animationTime: e }),
                    this.initData();
                },
                detached: function () {
                  clearInterval(this.intervalId);
                },
                methods: {
                  initData: function () {
                    var e = this;
                    this.data.list.length
                      ? (this.addBullet(),
                        (this.intervalId = setInterval(function () {
                          e.addBullet();
                        }, 1e3 * this.data.animationTime)))
                      : setTimeout(function () {
                          e.initData();
                        }, 50);
                  },
                  addBullet: function () {
                    var e = this,
                      t = this.data,
                      i = t.currentList2,
                      a = t.index,
                      s = t.list;
                    i.length < 3 &&
                      (i.push(s[this.data.index % s.length]),
                      this.setData({
                        currentList2: JSON.parse(JSON.stringify(i)),
                        index: a + 1,
                      })),
                      setTimeout(function () {
                        e.removeBullet();
                      }, 1e3 * this.data.animationTime);
                  },
                  removeBullet: function () {
                    var e = this.data.currentList2;
                    e.shift(),
                      this.setData({
                        currentList2: JSON.parse(JSON.stringify(e)),
                      });
                  },
                  getRandomNumber: function () {
                    return [6, 7, 8, 9, 10][Math.floor(5 * Math.random())];
                  },
                },
              })(
                (c = (function (e) {
                  (0, h.Z)(i, e);
                  var t = (0, m.Z)(i);
                  function i() {
                    return (0, r.Z)(this, i), t.apply(this, arguments);
                  }
                  return (
                    (0, d.Z)(i, [
                      {
                        key: "render",
                        value: function () {
                          var e = this.data,
                            t = e.animationTime,
                            i = e.currentList2;
                          return (0, R.tZ)(v.View, {
                            className: "common-activity-train-barrage2",
                            children: (0, R.tZ)(v.View, {
                              className: "barrage-wrap barrage-class",
                              children: i.map(function (e, i) {
                                return (0,
                                R.BX)(v.View, { className: "box box-class", style: "animation: dmAnimation2 " + t + "s linear infinite forwards;", children: [(0, R.tZ)(v.Image, { src: e.avatar, className: "box-image" }), (0, R.tZ)(v.View, { className: "box-text text-class", children: e.comment })] }, i);
                              }),
                            }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(Z.default.Component))
              ) || c,
            O =
              D()({
                externalClasses: ["barrage-class", "box-class", "text-class"],
                properties: {
                  list: {
                    type: Array,
                    value: function () {
                      return [];
                    },
                  },
                  time: { type: Number, value: 3e3 },
                  from: { type: Number, value: 0 },
                },
                data: { currentList3: [], index: 0, isFirst: !0 },
                ready: function () {
                  var e = this.getRandomNumber();
                  this.setData({ index: this.data.from, animationTime: e }),
                    this.initData();
                },
                detached: function () {
                  clearInterval(this.intervalId);
                },
                methods: {
                  initData: function () {
                    var e = this;
                    this.data.list.length
                      ? (this.addBullet(),
                        (this.intervalId = setInterval(function () {
                          e.addBullet();
                        }, 1e3 * this.data.animationTime)))
                      : setTimeout(function () {
                          e.initData();
                        }, 50);
                  },
                  addBullet: function () {
                    var e = this,
                      t = this.data,
                      i = t.currentList3,
                      a = t.index,
                      s = t.list;
                    i.length < 3 &&
                      (i.push(s[this.data.index % s.length]),
                      this.setData({
                        currentList3: JSON.parse(JSON.stringify(i)),
                        index: a + 1,
                      })),
                      setTimeout(function () {
                        e.removeBullet();
                      }, 1e3 * this.data.animationTime);
                  },
                  removeBullet: function () {
                    var e = this.data.currentList3;
                    e.shift(),
                      this.setData({
                        currentList3: JSON.parse(JSON.stringify(e)),
                      });
                  },
                  getRandomNumber: function () {
                    return [6, 7, 8, 9, 10][Math.floor(5 * Math.random())];
                  },
                },
              })(
                (n = (function (e) {
                  (0, h.Z)(i, e);
                  var t = (0, m.Z)(i);
                  function i() {
                    return (0, r.Z)(this, i), t.apply(this, arguments);
                  }
                  return (
                    (0, d.Z)(i, [
                      {
                        key: "render",
                        value: function () {
                          var e = this.data,
                            t = e.animationTime,
                            i = e.currentList3;
                          return (0, R.tZ)(v.View, {
                            className: "common-activity-train-barrage3",
                            children: (0, R.tZ)(v.View, {
                              className: "barrage-wrap barrage-class",
                              children: i.map(function (e, i) {
                                return (0,
                                R.BX)(v.View, { className: "box box-class", style: "animation: dmAnimation2 " + t + "s linear infinite forwards;", children: [(0, R.tZ)(v.Image, { src: e.avatar, className: "box-image" }), (0, R.tZ)(v.View, { className: "box-text text-class", children: e.comment })] }, i);
                              }),
                            }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(Z.default.Component))
              ) || n,
            M = i(81954),
            E = b().getSystemInfoSync(),
            J = B.default.isTieyou,
            _ = [
              J
                ? "VEsYH-Oc-z4Q1vp7UoFIylkukry0UYTHxuJNrU_9CZs"
                : "jatIqVBxwtURdWbTb5RuyGw7AGafPo4geNRp7cvp0mE",
              J
                ? "G7F5FqHIwreDStUmL6ipgz8Q5CUGGFcnQDlFgLzV6O0"
                : "IrwH7T6PBS8cncQ-_j8KbPFlqc7jSrMoca8k4Wr2MAg",
              "6SHfA5CQHsG9EIz9BN8QKSXsgD4iNrdSAlOApMxJJzg",
              J
                ? "X1-vIt06A_tyhEfwKqbk0dbJPMAIO-G577rta3YN7H4"
                : "NdvyuBq2SJA1v9c5QcPwcsqbLUrdENKwG409niPJCK8",
            ],
            H = [
              J
                ? "X1-vIt06A_tyhEfwKqbk0dbJPMAIO-G577rta3YN7H4"
                : "NdvyuBq2SJA1v9c5QcPwcsqbLUrdENKwG409niPJCK8",
            ],
            q = [
              J
                ? "G7F5FqHIwreDStUmL6ipgz8Q5CUGGFcnQDlFgLzV6O0"
                : "IrwH7T6PBS8cncQ-_j8KbPFlqc7jSrMoca8k4Wr2MAg",
            ],
            K = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.title,
                i = void 0 === t ? "" : t,
                a = e.content,
                s = void 0 === a ? "网络开小差啦，请稍后再试吧~" : a,
                c = e.showCancel,
                n = void 0 !== c && c,
                o = e.success,
                l = void 0 === o ? function () {} : o;
              return b().showModal({
                title: i,
                content: s.toString(),
                showCancel: n,
                success: l,
              });
            },
            j = {
              pageId: J ? "10650051565" : "10650051563",
              data: {
                isFirstPage: 0 === (b().getCurrentPages() || []).length,
                scrollToTop: !0,
                statusBarHeight: E.statusBarHeight,
                isIphoneX: y.Z.isIPhoneX(),
                shareKey: "",
                school: "",
                showPage: !1,
                cardInfo: {},
                selfFlag: !1,
                isLogin: !1,
                assistedFlag: !1,
                getActivityInfoEnd: !1,
                bulletList: [],
                createdAt: "",
                status: 0,
                assistanceList: [],
                partnerName: J ? "铁友" : "智行",
                universityCode: "",
                universityName: "",
                showSuccessDialog: !1,
                showNoCountDialog: !1,
                showCardDialog: !1,
                showNoReceiveDialog: !1,
                showTimeoutDialog: !1,
                showInviteDialog: !1,
                showRuleDialog: !1,
                showAssistDialog: !1,
                assistResultText: "",
                showTipDialog: !1,
                remainInviteCount: 5,
                hourLeft: "",
                minuteLeft: "",
                secon: "",
                env: "wechatFriend",
                pyqImage: J
                  ? "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/pyq-ty3.png"
                  : "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/pyq-zx3.png",
                canMakePic: !0,
                errorPicMsg: "loading",
                pictureStatus: "loading",
                cashModuleVisible: !1,
                selfStatus: 0,
                orderNewUser: !1,
                confirmSchool: !1,
                showChooseSchoolConfirmDialog: !1,
                showChooseSchoolDialog: !1,
                showShareBackDialog: !1,
                hasShowOpenCardDialog: b().getStorageSync(
                  "ztrip-student-gift-hasShowOpenCardDialog"
                ),
                shareBackDialogNumber: 0,
                invitationBottom: !1,
                isFirstCome: !0,
                showRedeemDialog: !1,
                openCardRandomNumber: 0,
                sponsorAvatar: "",
                sponsorNickName: "",
                showReceiveSuccessPage: !1,
                showAssistSuccessReceivedDialog: !1,
                showAssistSuccessUsedDialog: !1,
                showAssistFailReceivedDialog: !1,
                selfOrderNewUser: !1,
                selfCardInfo: {},
                cardShort: "",
                showGoldFingerDialog: !1,
                showTrainHighSpeedDialog: !1,
                showTicketDialog: !1,
                showBusDialog: !1,
                showTrainHalfDialog: !1,
                showFlightDialog: !1,
                showHotelDialog: !1,
                showPriorityDraftDialog: !1,
                giftsModule: { showGiftsModule: !1, giftsList: [] },
                source: "",
                sourceConfigData: {},
                showMovieTopImg: !1,
                orderNumber: "",
                worth: 548,
                wxNickName: "",
                wxAvatar: "",
                identificationFlag: !1,
                showApprovalDialog: !1,
              },
              onLoad: function (e) {
                var t = this;
                if (
                  (y.Z.setLaunchSource({
                    loginSoureType: "wechat",
                    loginSourceName: "xslb",
                  }),
                  this.getConfigInfo(),
                  S.ZP.isLogin
                    ? this.setData({ isLogin: !0 })
                    : this.newUbtTrace("151912", "studentcard_login_show"),
                  e.scene)
                ) {
                  var i = decodeURIComponent(e.scene);
                  this.getGenerateParam(i).then(function () {
                    t.getSetting(), t.getOpenId();
                  });
                } else
                  this.handleRouteParams(e),
                    this.getSetting(),
                    this.getOpenId();
                this.setData({
                  openCardRandomNumber: this.generateRandomNumber(7, 15),
                });
              },
              getLocalUserInfo: function () {
                var e = this;
                return new Promise(function (t, i) {
                  var a = !1;
                  b().getUserInfo({
                    success: function (t) {
                      var i = t.userInfo,
                        s = void 0 === i ? "" : i;
                      s &&
                        (console.log(s),
                        e.setData({
                          wxNickName: s.nickName,
                          wxAvatar: s.avatarUrl,
                        }),
                        (a = !1));
                    },
                    fail: function (e) {
                      return console.log(e);
                    },
                    complete: function () {
                      e.setData({ isGetUserInfoFailed: a }), a ? i() : t();
                    },
                  });
                });
              },
              onHide: function () {
                clearInterval(this.intervalId);
              },
              onUnload: function () {
                clearInterval(this.intervalId);
              },
              onPageScroll: function (e) {
                e.scrollTop <= 5
                  ? this.setData({ scrollToTop: !0, invitationBottom: !1 })
                  : this.setData({ scrollToTop: !1, invitationBottom: !0 });
              },
              onShareAppMessage: function () {
                var e = this.data,
                  t = e.shareKey,
                  i = void 0 === t ? "" : t,
                  a = (e.partnerName, e.cardInfo),
                  s = void 0 === a ? {} : a,
                  c = s.universityName || this.data.universityName,
                  n = s.universityCode || this.data.universityCode;
                return {
                  bu: "train",
                  title: "学生火车票半价，机票立减20元，酒店最高减70，快来领取",
                  desc: "学生火车票半价，机票立减20元，酒店最高减70，快来领取",
                  path: "/pages/activity/train/newStudentGift/studentGift?shareKey="
                    .concat(
                      encodeURIComponent(i),
                      "&source=wechatFriend&universityCode="
                    )
                    .concat(n, "&universityName=")
                    .concat(c, "&env=wechatFriend"),
                  imageUrl: J
                    ? "https://images3.c-ctrip.com/zt/0yingxiao/xueshengkafanxian/chattieyou.jpg"
                    : "https://images3.c-ctrip.com/zt/0yingxiao/xueshengkafanxian/chatzhixing.jpg",
                  success: function () {
                    this.generateRandomShareBackDialog(),
                      this.setData({ showShareBackDialog: !0 });
                  },
                };
              },
              getSetting: function () {
                var e = this,
                  t = !1,
                  i = !0;
                return new Promise(function (a, s) {
                  b().getSetting({
                    success: function (s) {
                      s.authSetting["scope.userInfo"]
                        ? ((e.acceImm = !0),
                          (t = !0),
                          y.Z.canUseGetUserProfile
                            ? (0, C.getUserProfileInfo)({ getOnly: !0 })
                                .then(function (t) {
                                  t &&
                                    ((e.userInfo = t),
                                    b().setStorageSync("USERINFO", t),
                                    (i = !1));
                                })
                                .catch(function () {})
                                .finally(function () {
                                  e.setData({ isGetUserInfoFailed: i }), a();
                                })
                            : b().getUserInfo({
                                success: function (t) {
                                  var a = t.userInfo,
                                    s = void 0 === a ? "" : a;
                                  s &&
                                    ((e.userInfo = s),
                                    b().setStorageSync("USERINFO", s),
                                    (i = !1));
                                },
                                fail: function (e) {
                                  return console.log(e);
                                },
                                complete: function () {
                                  e.setData({ isGetUserInfoFailed: i }), a();
                                },
                              }))
                        : a("接口调用成功");
                    },
                    fail: function (e) {
                      return s(e);
                    },
                    complete: function () {
                      !t &&
                        e.newUbtTrace("151918", "studentcard_authorize_show"),
                        e.setData({ isAuthed: t });
                    },
                  });
                });
              },
              getOpenId: function () {
                var e = this;
                (0, S.M9)()
                  .then(function (t) {
                    var i = t.openid;
                    console.log("openid", i),
                      e.setData({ openId: i, canGetMobile: !0 }),
                      e.getActivityInfo(!0, !0).then(function (t) {
                        if (
                          (console.log("isiphonex", e.data.isIphoneX),
                          e.getSelfStatus().then(function (t) {
                            1 === t.resultCode &&
                              e.setData({
                                selfStatus: t.status,
                                selfOrderNewUser: t.orderNewUser,
                              });
                          }),
                          !e.data.selfFlag && e.data.assistedFlag)
                        ) {
                          var i = e.data,
                            a = i.env,
                            s = i.source,
                            c = i.orderNumber,
                            n = void 0 === c ? "" : c;
                          e.navigateTo({
                            url: "/pages/activity/train/newStudentGift/studentGift?env="
                              .concat(a, "&source=")
                              .concat(s, "&assistFlag=1&orderNumber=")
                              .concat(n),
                          });
                        }
                        e.getZtripWechatSubscribleMessage();
                      });
                  })
                  .catch(function () {
                    console.log("获取openId失败");
                    var t = S.ZP.openid || "";
                    t &&
                      (console.log("user_openid_in_storage", t),
                      e.setData({ openId: t })),
                      e.getZtripWechatSubscribleMessage(),
                      e.getActivityInfo(!0).then(function (t) {
                        if (
                          (e.getSelfStatus().then(function (t) {
                            1 === t.resultCode &&
                              e.setData({ selfStatus: t.status });
                          }),
                          !e.data.selfFlag && e.data.assistedFlag)
                        ) {
                          var i = e.data,
                            a = i.orderNumber,
                            s = void 0 === a ? "" : a,
                            c = i.source,
                            n = i.env;
                          e.navigateTo({
                            url: "/pages/activity/train/newStudentGift/studentGift?env="
                              .concat(n, "&source=")
                              .concat(c, "&assistFlag=1&orderNumber=")
                              .concat(s),
                          });
                        }
                      });
                  });
              },
              handleAssistWithPhoneLogin: function (e) {
                var t = this;
                return (0, f.Z)(
                  (0, N.Z)().mark(function i() {
                    return (0, N.Z)().wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            t.newUbtTrace("151914", "studentcard_login_click"),
                              t.handleAssistWithOriginLogin(e);
                          case 2:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  })
                )();
              },
              handleAssistWithOriginLogin: function (e) {
                var t = this;
                S.ZP.doLogin().then(
                  function () {
                    t.setData({ isLogin: !0 }),
                      t
                        .getSetting()
                        .then(t.getActivityInfo())
                        .then(function () {
                          t.data.selfFlag
                            ? 0 === t.data.status && t.launchOrReceive()
                            : t.assistFriend("passive");
                        });
                  },
                  function () {
                    console.log("取消登录");
                  }
                );
              },
              getZtripWechatSubscribleMessage: function () {
                var e = this;
                if (this.data.openId)
                  return (0, A.Ej)({
                    templateIds: this.data.selfFlag ? _ : H,
                    openId: this.data.openId,
                  }).then(function (t) {
                    1 === t.resultCode &&
                      (e.subscribeTemplateIds = (
                        e.data.selfFlag ? _ : H
                      ).filter(function (e) {
                        return !t.templateIds.includes(e);
                      }));
                  });
              },
              getZtripStudentCardWechatSubscribleMessage: function () {
                var e = this;
                return (0, A.Ej)({
                  templateIds: q,
                  openId: this.data.openId,
                }).then(function (t) {
                  1 === t.resultCode &&
                    (e.subscribeStudentCardTemplateIds = q.filter(function (e) {
                      return !t.templateIds.includes(e);
                    }));
                });
              },
              launchOrReceive: function () {
                var e = this,
                  t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                if (this.data.selfFlag && 2 === this.data.status)
                  return this.receiveCard();
                this.newUbtTrace("151923", "studentcard_activate_click");
                var i = this.data,
                  a = i.source,
                  s = i.openId,
                  c = i.confirmSchool,
                  n = i.selfFlag,
                  o = i.status,
                  l = i.orderNumber,
                  r =
                    this.data.universityName ||
                    this.data.cardInfo.universityName,
                  d =
                    this.data.universityCode ||
                    this.data.cardInfo.universityCode;
                return r
                  ? !c && n && 0 === o
                    ? (this.setData({
                        showTimeoutDialog: !1,
                        showChooseSchoolConfirmDialog: !0,
                      }),
                      Promise.resolve())
                    : ((0, C.showLoading)(),
                      (0, P.PS)({
                        source: "".concat(a, "_new"),
                        openId: s,
                        universityCode: d,
                        universityName: r,
                        orderNumber: l,
                      })
                        .then(function (i) {
                          return (
                            (0, C.hideLoading)(),
                            1 === i.resultCode
                              ? (e.setData({ assistanceList: [] }),
                                e.handleAssistList(),
                                t &&
                                  e.setData({
                                    showInviteDialog: !0,
                                    shareKey: i.shareKey || "",
                                  }),
                                e.getActivityInfo(),
                                i.shareKey)
                              : 2 === i.resultCode
                              ? (K({
                                  content: i.resultMessage,
                                  success: function () {
                                    e.onUseClick(!1);
                                  },
                                }),
                                Promise.reject(i))
                              : (K({ content: i.resultMessage }),
                                Promise.reject(i))
                          );
                        })
                        .catch(function (e) {
                          throw ((0, C.hideLoading)(), K(), e);
                        }))
                  : (this.setData({
                      showTimeoutDialog: !1,
                      showChooseSchoolDialog: !0,
                    }),
                    Promise.reject());
              },
              assistFriend: function () {
                var e = arguments,
                  t = this;
                return (0, f.Z)(
                  (0, N.Z)().mark(function i() {
                    var a;
                    return (0, N.Z)().wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (
                              (a =
                                e.length > 0 && void 0 !== e[0]
                                  ? e[0]
                                  : "initiative"),
                              t.newUbtTrace(
                                "151920",
                                "studentcard_authorize_click"
                              ),
                              (i.next = 4),
                              t.doSubscribe()
                            );
                          case 4:
                            if (((0, C.showLoading)(), "initiative" != a)) {
                              i.next = 9;
                              break;
                            }
                            (0, C.getUserProfileInfo)({ forceUpdate: !0 })
                              .then(function (e) {
                                e &&
                                  ((t.userInfo = e),
                                  t.setData({ isAuthed: !0 }));
                              })
                              .then(function () {
                                return Promise.all([
                                  t.getSelfStatus(),
                                  t.assistOn2020StuFreeVip(),
                                ]).then(function (e) {
                                  var i = (0, p.Z)(e, 2),
                                    a = i[0],
                                    s = i[1];
                                  if (((0, C.hideLoading)(), s && a)) {
                                    var c = s.resultCode,
                                      n = s.sponsorNickName,
                                      o = void 0 === n ? "" : n,
                                      l = s.sponsorAvatar,
                                      r = void 0 === l ? "" : l,
                                      d = s.assisterCardStatus,
                                      h = void 0 === d ? 0 : d;
                                    t.setData({
                                      sponsorNickName: o,
                                      sponsorAvatar: r,
                                    }),
                                      console.log("sponsorAvatar:", r);
                                    var m = a.status,
                                      u = a.cardInfo;
                                    if (1 === c) {
                                      if (0 === h)
                                        return void t.setData({
                                          showSuccessDialog: !0,
                                          selfStatus: m,
                                        });
                                      if (1 === h)
                                        return void t.setData({
                                          showAssistSuccessReceivedDialog: !0,
                                          selfStatus: m,
                                          selfCardInfo: u,
                                        });
                                      if (2 === h)
                                        return void t.setData({
                                          showAssistSuccessUsedDialog: !0,
                                          selfStatus: m,
                                          selfCardInfo: u,
                                        });
                                      t.setData({
                                        showCardDialog: !0,
                                        selfCardInfo: u,
                                        selfStatus: m,
                                      });
                                    } else
                                      0 === m
                                        ? t.setData({
                                            showNoCountDialog: !0,
                                            selfStatus: m,
                                          })
                                        : 2 === u.status
                                        ? t.setData({
                                            showAssistFailReceivedDialog: !0,
                                            selfStatus: m,
                                            selfCardInfo: u,
                                          })
                                        : t.setData({
                                            showNoReceiveDialog: !0,
                                            selfCardInfo: u,
                                            selfStatus: m,
                                          });
                                  }
                                });
                              })
                              .catch(function (e) {
                                (0, C.hideLoading)(), console.log(e);
                              }),
                              (i.next = 10);
                            break;
                          case 9:
                            return i.abrupt(
                              "return",
                              Promise.all([
                                t.getSelfStatus(),
                                t.assistOn2020StuFreeVip(),
                              ])
                                .then(function (e) {
                                  var i = (0, p.Z)(e, 2),
                                    a = i[0],
                                    s = i[1];
                                  if (((0, C.hideLoading)(), s && a)) {
                                    var c = s.resultCode,
                                      n = s.sponsorNickName,
                                      o = void 0 === n ? "" : n,
                                      l = s.sponsorAvatar,
                                      r = void 0 === l ? "" : l,
                                      d = s.assisterCardStatus,
                                      h = void 0 === d ? 0 : d;
                                    t.setData({
                                      sponsorNickName: o,
                                      sponsorAvatar: r,
                                    }),
                                      console.log("sponsorAvatar:", r);
                                    var m = a.status,
                                      u = a.cardInfo;
                                    if (1 === c) {
                                      if (0 === h)
                                        return void t.setData({
                                          showSuccessDialog: !0,
                                          selfStatus: m,
                                        });
                                      if (1 === h)
                                        return void t.setData({
                                          showAssistSuccessReceivedDialog: !0,
                                          selfStatus: m,
                                          selfCardInfo: u,
                                        });
                                      if (2 === h)
                                        return void t.setData({
                                          showAssistSuccessUsedDialog: !0,
                                          selfStatus: m,
                                          selfCardInfo: u,
                                        });
                                      t.setData({
                                        showCardDialog: !0,
                                        selfCardInfo: u,
                                        selfStatus: m,
                                      });
                                    } else
                                      0 === m
                                        ? t.setData({
                                            showNoCountDialog: !0,
                                            selfStatus: m,
                                          })
                                        : 2 === u.status
                                        ? t.setData({
                                            showAssistFailReceivedDialog: !0,
                                            selfStatus: m,
                                            selfCardInfo: u,
                                          })
                                        : t.setData({
                                            showNoReceiveDialog: !0,
                                            selfCardInfo: u,
                                            selfStatus: m,
                                          });
                                  }
                                })
                                .catch(function (e) {
                                  (0, C.hideLoading)(), console.log(e);
                                })
                            );
                          case 10:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  })
                )();
              },
              getSelfStatus: function () {
                var e = this;
                return (0, P.wU)({ source: this.data.source })
                  .then(function (t) {
                    if (1 === t.resultCode)
                      return (
                        e.setData({
                          sourceConfigData: t.sourceConfigData,
                          showMovieTopImg: t.showMovieTopImg,
                        }),
                        t
                      );
                    K({ content: t.resultMessage });
                  })
                  .catch(function (e) {
                    throw (K({ content: e.toString() }), e);
                  });
              },
              assistOn2020StuFreeVip: function () {
                var e = this;
                return (0, f.Z)(
                  (0, N.Z)().mark(function t() {
                    var i, a, s, c, n, o, l, r, d, h;
                    return (0, N.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (e.userInfo) {
                                t.next = 11;
                                break;
                              }
                              return (
                                (t.prev = 1),
                                (t.next = 4),
                                (0, C.getUserProfileInfo)({ forceUpdate: !0 })
                              );
                            case 4:
                              (e.userInfo = t.sent),
                                e.setData({ isAuthed: !0 }),
                                (t.next = 11);
                              break;
                            case 8:
                              return (
                                (t.prev = 8),
                                (t.t0 = t.catch(1)),
                                t.abrupt("return")
                              );
                            case 11:
                              return (
                                (i = e.data),
                                (a = i.shareKey),
                                (s = i.openId),
                                (c = i.env),
                                (n = e.userInfo),
                                (o = n.nickName),
                                (l = void 0 === o ? "" : o),
                                (r = n.avatarUrl),
                                (d = void 0 === r ? "" : r),
                                (h = S.ZP.secretToken || ""),
                                t.abrupt(
                                  "return",
                                  (0, P.XE)({
                                    shareKey: a,
                                    openId: s,
                                    secretToken: h,
                                    env: "".concat(c, "_new"),
                                    nickName: l,
                                    avatar: d,
                                  })
                                    .then(function (t) {
                                      if (
                                        (e.getActivityInfo(),
                                        1 === t.resultCode ||
                                          3 === t.resultCode)
                                      )
                                        return t;
                                      K({
                                        content: t.resultMessage,
                                        success: function () {
                                          t.confirm && e.onUseClick();
                                        },
                                      });
                                    })
                                    .catch(function (e) {
                                      throw (K(), e);
                                    })
                                )
                              );
                            case 15:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 8]]
                    );
                  })
                )();
              },
              getActivityInfo: function () {
                var e = this,
                  t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  i =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                (0, C.showLoading)();
                var a = this.data,
                  s = a.shareKey,
                  c = a.openId,
                  n = a.universityCode,
                  o = a.universityName,
                  l = a.source;
                return (0, P.wU)({
                  shareKey: s,
                  openId: c,
                  universityCode: n,
                  universityName: o,
                  source: l,
                })
                  .then(function (a) {
                    if (
                      ((0, C.hideLoading)(),
                      e.setData({ getActivityInfoEnd: !0 }),
                      1 === a.resultCode)
                    ) {
                      if (
                        (e.handleAssistList(a),
                        e.setData(
                          (0, w.Z)(
                            (0, w.Z)({}, a),
                            {},
                            { shareKey: a.shareKey || "" }
                          )
                        ),
                        i &&
                          !a.selfFlag &&
                          (2 === a.status || 3 === a.status || 4 === a.status))
                      ) {
                        var s = e.data,
                          c = s.env,
                          n = s.orderNumber,
                          r = void 0 === n ? "" : n;
                        return void e.navigateTo({
                          url: "/pages/activity/train/newStudentGift/studentGift?env="
                            .concat(c, "&source=")
                            .concat(l, "&status=")
                            .concat(a.status, "&orderNumber=")
                            .concat(r),
                        });
                      }
                      var d = a.cardInfo.universityName,
                        h = a.cardInfo.universityName;
                      o.length > 10 &&
                        (d =
                          o.slice(0, 6) + "…" + o.slice(o.length.length - 2)),
                        a.cardInfo.universityName.length > 10 &&
                          (h =
                            a.cardInfo.universityName.slice(0, 6) +
                            "…" +
                            a.cardInfo.universityName.slice(
                              a.cardInfo.universityName.length - 2
                            )),
                        e.setData({ shortUniversityName: d, cardShort: h }),
                        a.selfFlag &&
                          (a.createdAt &&
                            ((e.c_date = X()(a.createdAt).add(1, "day")),
                            e.calcLeftTime()),
                          t &&
                            (0 === a.status
                              ? e.newUbtTrace(
                                  "151921",
                                  "studentcard_activate_show"
                                )
                              : 1 === a.status &&
                                e.newUbtTrace(
                                  "151928",
                                  "studentcard_share_show"
                                ))),
                        a.selfFlag &&
                          0 !== a.status &&
                          e.newUbtTrace(
                            "151933",
                            "studentcard_selectSchoolPopup_show"
                          ),
                        4 === a.status &&
                          a.selfFlag &&
                          e.setData({ showTimeoutDialog: !0 });
                    } else K({ content: a.resultMessage });
                  })
                  .catch(function (e) {
                    throw (
                      ((0, C.hideLoading)(),
                      K({ content: "获取活动信息失败" }),
                      e)
                    );
                  });
              },
              handleAssistList: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.assistanceList,
                  i = void 0 === t ? [] : t,
                  a = 5 - i.length;
                this.setData({ remainInviteCount: a });
                for (var s = 0; s < a; s++) i.push(null);
                e.assistanceList = i;
              },
              onReceiveClick: function () {
                var e = this,
                  t = this.data,
                  i = t.source,
                  a = t.env,
                  s = t.orderNumber,
                  c = void 0 === s ? "" : s;
                return this.launchOrReceive(!1).then(function () {
                  e.navigateTo({
                    url: "/pages/activity/train/newStudentGift/studentGift?source="
                      .concat(i, "&env=")
                      .concat(a, "&orderNumber=")
                      .concat(c),
                  });
                });
              },
              getConfigInfo: function () {
                var e = this;
                return (0, A.fu)({ ConfigKey: "202007-stu-free-vip-rule" })
                  .then(function (t) {
                    if (t.ConfigInfo && t.ConfigInfo.Content) {
                      var i = JSON.parse(t.ConfigInfo.Content),
                        a = e.data.partnerName,
                        s = new RegExp("".concat(J ? "智行" : "铁友"), "g");
                      (i = i.map(function (e) {
                        return e.replace(s, a);
                      })),
                        e.setData({ ruleHtml: i });
                    }
                  })
                  .catch(function (e) {
                    throw (console.log(e), e);
                  });
              },
              receiveCard: function () {
                var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
                return (
                  (0, C.showLoading)(),
                  (0, P.dr)()
                    .then(function (t) {
                      return (
                        (0, C.hideLoading)(),
                        1 === t.resultCode || 3 === t.resultCode
                          ? (e && (0, C.showToast)("领取成功"), !0)
                          : (K({ content: t.resultCode }), !1)
                      );
                    })
                    .catch(function (e) {
                      throw ((0, C.hideLoading)(), K(), e);
                    })
                );
              },
              getUrlParams: function (e) {
                if (e) {
                  var t = e.indexOf("?");
                  if (-1 !== t) {
                    var i,
                      a = e.slice(t + 1).split("&"),
                      s = {},
                      c = (0, g.Z)(a);
                    try {
                      for (c.s(); !(i = c.n()).done; ) {
                        var n = i.value.split("=");
                        s[n[0]] = n[1];
                      }
                    } catch (e) {
                      c.e(e);
                    } finally {
                      c.f();
                    }
                    return s;
                  }
                }
              },
              getGenerateParam: function (e) {
                var t = this;
                return (
                  (0, C.showLoading)(),
                  (0, A.cq)({ key: e, scene: I.ZP.generateParamsScene })
                    .then(function (e) {
                      if (1 === e.resultCode) {
                        var i = t.getUrlParams(e.param || "") || {};
                        t.handleRouteParams(i);
                      }
                    })
                    .catch(function (e) {
                      return console.log(e);
                    })
                    .finally(function () {
                      return (0, C.hideLoading)();
                    })
                );
              },
              clickNavigateBack: function () {
                this.data.isFirstCome
                  ? this.setData({ isFirstCome: !1, showRedeemDialog: !0 })
                  : this.data.isFirstPage
                  ? y.Z.relaunchHome()
                  : b().navigateBack({
                      fail: function (e) {
                        y.Z.relaunchHome();
                      },
                    });
              },
              handleRouteParams: function (e) {
                var t = decodeURIComponent(e.shareKey || ""),
                  i = decodeURIComponent(e.universityCode || ""),
                  a = decodeURIComponent(e.universityName || ""),
                  s = decodeURIComponent(e.source || ""),
                  c = decodeURIComponent(e.env || ""),
                  n = decodeURIComponent(e.assistFlag || ""),
                  o = decodeURIComponent(e.statusCode || ""),
                  l = decodeURIComponent(e.status || ""),
                  r = decodeURIComponent(e.orderNumber || ""),
                  d = a;
                a.length > 10 &&
                  (d = a.slice(0, 6) + "…" + a.slice(a.length.length - 2)),
                  n
                    ? setTimeout(function () {
                        (0,
                        C.showToast)("您已为他助力过，赠您一张专属学生出行卡～");
                      }, 1e3)
                    : o
                    ? (this.setData({ showAssistDialog: !0 }),
                      0 == o
                        ? this.setData({
                            assistResultText: "加速已结束，赠您一份学生卡~",
                          })
                        : 1 == o
                        ? this.setData({
                            assistResultText: "加速成功，赠您一份学生卡~",
                          })
                        : 2 == o &&
                          this.setData({
                            assistResultText: "加速失败，赠您一份学生卡~",
                          }))
                    : l &&
                      (2 == l || 3 == l
                        ? setTimeout(function () {
                            (0,
                            C.showToast)("助力已完成，无法助力。赠您一张专属学生出行卡～");
                          }, 1e3)
                        : 4 == l &&
                          setTimeout(function () {
                            (0,
                            C.showToast)("助力已超时，无法助力。赠您一张专属学生出行卡～");
                          }, 1e3)),
                  this.setData({
                    shareKey: t,
                    universityCode: i,
                    universityName: a,
                    shortUniversityName: d,
                    source: s,
                    env: c,
                    orderNumber: r,
                    pagePath:
                      "/pages/activity/train/newStudentGift/studentGift?source=wechatTimeline&env=wechatTimeline&shareKey="
                        .concat(encodeURIComponent(t), "&universityCode=")
                        .concat(i, "&universityName=")
                        .concat(a),
                  });
              },
              onRuleClick: function () {
                this.setData({ showRuleDialog: !0 });
              },
              calcLeftTime: function () {
                var e = this,
                  t = this.c_date.valueOf(),
                  i = +new Date();
                if (!(t < i)) {
                  var a = (t - i) / 1e3,
                    s = Math.floor((a / 3600) % 24)
                      .toString()
                      .padStart(2, "0"),
                    c = Math.floor((a / 60) % 60)
                      .toString()
                      .padStart(2, "0"),
                    n = Math.floor(a % 60)
                      .toString()
                      .padStart(2, "0");
                  this.setData({ hourLeft: s, minuteLeft: c, secondLeft: n }),
                    (this.timeId = setTimeout(function () {
                      e.calcLeftTime();
                    }, 1e3));
                }
              },
              onSchoolChoose: function () {
                var e = this;
                this.newUbtTrace(
                  "151934",
                  "studentcard_selectSchoolPopup_click"
                ),
                  this.navigateTo({
                    url: "/pages/activity/train/school/school",
                    callback: function (t) {
                      e.setData({
                        showTimeoutDialog: !1,
                        showChooseSchoolDialog: !1,
                        showChooseSchoolConfirmDialog: !1,
                      });
                      var i = t.selectedUniversity,
                        a = void 0 === i ? {} : i,
                        s = a.cn,
                        c = a.code,
                        n = a.sp,
                        o = a.pcode;
                      return (
                        e.newUbtTrace(
                          "151925",
                          "studentcard_selectSchool_click"
                        ),
                        (0, P.dJ)({
                          provinceCode: o,
                          universityCode: c,
                          universityName: s,
                          universityPYcode: n,
                        })
                          .then(function (t) {
                            1 === t.resultCode
                              ? (e.getActivityInfo(),
                                e.setData({ confirmSchool: !0 }))
                              : K({ content: t.resultMessage });
                          })
                          .catch(function (e) {
                            throw (K(), e);
                          })
                      );
                    },
                  });
              },
              onUseClick: function () {
                var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
                e && this.newUbtTrace("151926", "studentcard_selectSchool_use");
                var t = this.data,
                  i = t.env,
                  a = void 0 === i ? "" : i,
                  s = t.source,
                  c = void 0 === s ? "wechatFriend" : s;
                this.navigateTo({
                  url: "/pages/activity/train/newStudentGift/studentGift?env="
                    .concat(a, "&source=")
                    .concat(c),
                });
              },
              onTimelineShare: function () {
                var e = this;
                this.newUbtTrace("151930", "studentcard_wechat_click");
                var t = this.data,
                  i = t.canMakePic,
                  a = t.errorPicMsg,
                  s = t.pictureStatus;
                if (!i) return (0, C.showToast)(a);
                "loading" === s && (0, C.showLoading)("图片加载中..."),
                  this.closeShareLayer(),
                  setTimeout(function () {
                    e.setData({ showCircleImage: !0 });
                  }, 250);
              },
              closeShareLayer: function () {
                this.setData({ showInviteDialog: !1 });
              },
              onRestartClick: function () {
                var e = this;
                return (
                  this.handleAssistList({}),
                  this.launchOrReceive().then(function (t) {
                    e.setData({
                      remainInviteCount: 5,
                      showTimeoutDialog: !1,
                      showInviteDialog: !0,
                    });
                  })
                );
              },
              closeDialog: function (e) {
                var t = e.currentTarget.dataset.dialog;
                this.setData((0, u.Z)({}, t, !1));
              },
              openDialog: function (e) {
                var t = e.currentTarget.dataset.dialog;
                this.setData((0, u.Z)({}, t, !0));
              },
              onSharePictureSuccess: function () {
                (0, C.hideLoading)(), (this.pictureStatus = "loading");
              },
              onSharePictureSave: function () {
                var e = this;
                b().showModal({
                  title: "提示",
                  content: "图片保存成功，快去发个朋友圈吧~",
                  showCancel: !1,
                  success: function () {
                    e.setData({ showCircleImage: !1 });
                  },
                });
              },
              onSharePictureFail: function (e) {
                console.log(e.detail),
                  this.data.showCircleImage &&
                    ((0, C.hideLoading)(), (0, C.showToast)(e.detail.msg)),
                  this.setData({
                    canMakePic: !1,
                    errorPicMsg: e.detail.msg,
                    showCircleImage: !1,
                  });
              },
              doSubscribe: function () {
                var e = this;
                if (this.data.openId)
                  return new Promise(function (t) {
                    y.Z.setSubscribe(e.subscribeTemplateIds)
                      .then(function (i) {
                        i &&
                          (0, A.NP)({
                            templateIds: e.subscribeTemplateIds,
                            openId: e.data.openId,
                            source: "2020-stu-free-vip-new",
                          })
                            .then(function (i) {
                              console.log("share", i),
                                e.getZtripWechatSubscribleMessage(),
                                t(i);
                            })
                            .catch(t),
                          t();
                      })
                      .catch(t);
                  });
              },
              onSubscribe: function () {
                var e = this;
                return (0, f.Z)(
                  (0, N.Z)().mark(function t() {
                    return (0, N.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (e.newUbtTrace("151931", "studentcard_pyq_click"),
                              !e.data.selfFlag)
                            ) {
                              t.next = 5;
                              break;
                            }
                            return (t.next = 4), e.doSubscribe();
                          case 4:
                            setTimeout(function () {
                              e.generateRandomShareBackDialog(),
                                e.setData({ showShareBackDialog: !0 });
                            }, 1500);
                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              onSubscribeStudentCard: function () {
                var e = this;
                y.Z.setSubscribe(this.subscribeStudentCardTemplateIds).then(
                  function (t) {
                    if ((console.log(t), t))
                      return (0, A.NP)({
                        templateIds: q,
                        openId: e.data.openId,
                        source: "2020-stu-free-vip-new",
                      }).then(function (t) {
                        console.log("share", t),
                          e.getZtripStudentCardWechatSubscribleMessage();
                      });
                  }
                );
              },
              receiveCardClick: function () {
                var e = this;
                return this.receiveCard(!1).then(function (t) {
                  t &&
                    (e.data.selfFlag ? e.refreshStatus() : e.doShowTipDialog());
                });
              },
              doShowTipDialog: function () {
                this.setData({ showTipDialog: !0 });
              },
              newUbtTrace: function (e, t) {
                try {
                  this.ubtTrace(e, t);
                } catch (e) {
                  console.log(e);
                }
              },
              onClickConfirmSchool: function () {
                this.setData({
                  confirmSchool: !0,
                  showChooseSchoolConfirmDialog: !1,
                }),
                  this.launchOrReceive();
              },
              closeOpenCardDialog: function () {
                this.setData({ hasShowOpenCardDialog: !0 }),
                  b().setStorageSync(
                    "ztrip-student-gift-hasShowOpenCardDialog",
                    !0
                  );
              },
              openInvitation: function () {
                this.setData({ showInviteDialog: !0 });
              },
              generateRandomNumber: function (e, t) {
                return Math.floor((t - e + 1) * Math.random() + e);
              },
              generateRandomShareBackDialog: function () {
                this.setData({
                  shareBackDialogNumber: this.generateRandomNumber(0, 1),
                });
              },
              refreshStatus: function () {
                var e = this;
                this.getActivityInfo(!0, !0).then(function (t) {
                  if (
                    (e.getSelfStatus().then(function (t) {
                      1 === t.resultCode && e.setData({ selfStatus: t.status });
                    }),
                    e.setData({
                      showReceiveSuccessPage: !0,
                      showTipDialog: !1,
                    }),
                    !e.data.selfFlag && e.data.assistedFlag)
                  ) {
                    var i = e.data,
                      a = i.env,
                      s = i.source;
                    e.navigateTo({
                      url: "/pages/activity/train/newStudentGift/studentGift?env="
                        .concat(a, "&source=")
                        .concat(s, "&assistFlag=1"),
                    });
                  }
                });
              },
              onClickToInviteCashBack: function () {
                var e = "https://m.".concat(
                  J ? "tieyou" : "suanya",
                  ".com/webapp/train/activity/20201022-ztrip-stucard?source=stucardinvite&titleBgColor=078BF8"
                );
                b().redirectTo({
                  url: "/functionalPages/twebview/index?url=".concat(
                    encodeURIComponent(e)
                  ),
                });
              },
              onClickShowSuccessPage: function () {
                this.setData({
                  showReceiveSuccessPage: !0,
                  showAssistSuccessReceivedDialog: !1,
                  showAssistFailReceivedDialog: !1,
                  showAssistSuccessUsedDialog: !1,
                }),
                  console.log("showReceiveSuccessPage");
              },
              oPrivateBtnClick: function () {
                this.navigateTo({ url: "/pages/usercenter/member/member" });
              },
              updateShareUserInfo: function () {
                var e = this;
                return (0, f.Z)(
                  (0, N.Z)().mark(function t() {
                    var i, a, s, c, n;
                    return (0, N.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (i = e.data),
                                (a = i.wxNickName),
                                (s = i.wxAvatar),
                                (c = i.openId),
                                (n = { photoUrl: s, name: a, openId: c }),
                                (t.prev = 2),
                                (t.next = 5),
                                (0, G.ryV)(n)
                              );
                            case 5:
                              t.next = 10;
                              break;
                            case 7:
                              (t.prev = 7),
                                (t.t0 = t.catch(2)),
                                console.log(t.t0);
                            case 10:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[2, 7]]
                    );
                  })
                )();
              },
              getUserProfileInfoAction: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1,
                  i = this.data,
                  a = i.wxNickName,
                  s = i.wxAvatar,
                  c = i.isAuthed;
                this.newUbtTrace("170723"),
                  a && s && c
                    ? (this.updateShareUserInfo(),
                      1 == t
                        ? this.launchOrReceive()
                        : 2 == t
                        ? this.receiveCardClick()
                        : 3 == t && this.onRestartClick())
                    : (0, C.getUserProfileInfo)({ forceUpdate: !0 })
                        .then(function (i) {
                          e.setData({ isAuthed: !0 }),
                            console.log("userinof", i),
                            e.setData({
                              wxNickName: i && i.nickName,
                              wxAvatar: i && i.avatarUrl,
                            }),
                            e.updateShareUserInfo(),
                            1 == t
                              ? e.launchOrReceive()
                              : 2 == t
                              ? e.receiveCardClick()
                              : 3 == t && e.onRestartClick();
                        })
                        .catch(function () {
                          e.setData({ wxNickName: "", wxAvatar: "" }),
                            e.updateShareUserInfo();
                        });
              },
              checkUserInfoAuthority: function () {
                var e = arguments,
                  t = this;
                return (0, f.Z)(
                  (0, N.Z)().mark(function i() {
                    var a, s, c, n, o, l;
                    return (0, N.Z)().wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            (a = e.length > 0 && void 0 !== e[0] ? e[0] : {}),
                              (s = t.data),
                              (c = s.wxNickName),
                              (n = s.wxAvatar),
                              (o = s.isAuthed),
                              t.newUbtTrace("170723"),
                              c && n && o
                                ? t.updateShareUserInfo()
                                : a.detail &&
                                  "getUserInfo:ok" === a.detail.errMsg &&
                                  (t.setData({ isAuthed: !0 }),
                                  (l = JSON.parse(a.detail.rawData)),
                                  t.setData({
                                    wxNickName: l.nickName,
                                    wxAvatar: l.avatarUrl,
                                  }),
                                  t.updateShareUserInfo());
                          case 4:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  })
                )();
              },
              toSelfActivityPage: function () {
                this.navigateTo({
                  url: "/pages/activity/train/newStudentGift/studentGift?env="
                    .concat(this.data.env, "&source=")
                    .concat(this.data.source),
                });
              },
              showVaifyModal: function () {
                this.setData({ showApprovalDialog: !0 });
              },
              noop: function () {},
            },
            W =
              (0, U.h)()(
                (o =
                  D()(j)(
                    (o = (function (e) {
                      (0, h.Z)(i, e);
                      var t = (0, m.Z)(i);
                      function i() {
                        return (0, r.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, d.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = (t.universityName, t.showSuccessDialog),
                                a = t.showNoCountDialog,
                                s = (t.selfCardInfo, t.showCardDialog),
                                c = t.showNoReceiveDialog,
                                n = t.showTimeoutDialog,
                                o =
                                  (t.assistResultText,
                                  t.showAssistDialog,
                                  t.partnerName),
                                l = t.isIphoneX,
                                r = t.showTipDialog,
                                d = t.showChooseSchoolDialog,
                                h = t.ruleHtml,
                                m = t.showRuleDialog,
                                u = t.remainInviteCount,
                                g = t.hourLeft,
                                w = t.minuteLeft,
                                p = t.secondLeft,
                                N = t.assistanceList,
                                f = t.showInviteDialog,
                                Z =
                                  (t.scrollToTop,
                                  t.statusBarHeight,
                                  t.isFirstPage,
                                  t.cardInfo),
                                x = t.shortUniversityName,
                                b = t.selfFlag,
                                V = t.status,
                                D = (t.cashModuleVisible, t.shareKey),
                                B = t.isLogin,
                                I = t.assistedFlag,
                                S = t.isAuthed,
                                C = t.selfStatus,
                                y = t.getActivityInfoEnd,
                                k = t.bulletList,
                                X = t.showCircleImage,
                                A = t.pyqImage,
                                G = t.pagePath,
                                U =
                                  (t.orderNewUser,
                                  t.showChooseSchoolConfirmDialog),
                                P = (t.confirmSchool, t.hasShowOpenCardDialog),
                                E = t.showShareBackDialog,
                                _ = t.shareBackDialogNumber,
                                H = t.invitationBottom,
                                q = t.showRedeemDialog,
                                K = (t.openCardRandomNumber, t.sponsorNickName),
                                j = t.sponsorAvatar,
                                W = t.showReceiveSuccessPage,
                                Q = t.showAssistSuccessReceivedDialog,
                                Y = t.showAssistFailReceivedDialog,
                                $ = (t.selfOrderNewUser, t.cardShort),
                                ee = t.showGoldFingerDialog,
                                te = t.showTrainHighSpeedDialog,
                                ie = t.showTicketDialog,
                                ae = t.showBusDialog,
                                se = t.showTrainHalfDialog,
                                ce = t.showFlightDialog,
                                ne = t.showHotelDialog,
                                oe = t.showPriorityDraftDialog,
                                le = t.giftsModule,
                                re = t.sourceConfigData,
                                de = t.showMovieTopImg,
                                he = t.showAssistSuccessUsedDialog,
                                me = t.worth,
                                ue = t.identificationFlag,
                                ge = t.showApprovalDialog;
                              return (0, R.tZ)(v.Block, {
                                children: (0, R.BX)(v.View, {
                                  className: "wrap",
                                  children: [
                                    (0, R.tZ)(v.Button, {
                                      className: "rule-btn",
                                      id: "AeCp",
                                      onClick: this.onRuleClick,
                                    }),
                                    (0, R.tZ)(v.View, {
                                      class: "top-bar ".concat(
                                        l ? "top-bar-iphonex" : ""
                                      ),
                                      children: (0, R.tZ)(v.Icon, {
                                        class: "ifont-back",
                                        id: "AeCq",
                                        onClick: this.clickNavigateBack,
                                      }),
                                    }),
                                    (0, R.tZ)(v.View, {
                                      style: "display:none;",
                                      className: "shadow",
                                      children: (0, R.BX)(v.View, {
                                        className: "pop-box",
                                        children: [
                                          (0, R.tZ)(v.Icon, {
                                            className: "top-bg4",
                                          }),
                                          (0, R.tZ)(v.Text, {
                                            className: "txt2",
                                            children: "您的助力次数已用尽",
                                          }),
                                          (0, R.tZ)(v.Button, {
                                            className: "pop-btn1",
                                            children: "查看我的学生卡",
                                          }),
                                          (0, R.tZ)(v.View, {
                                            className: "pop-close-btn",
                                          }),
                                        ],
                                      }),
                                    }),
                                    d &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop1",
                                          children: [
                                            (0, R.tZ)(v.View, {
                                              className: "pop1-top",
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop1-wrap school",
                                              children: [
                                                (0, R.tZ)(v.View, {
                                                  className: "tips-txt",
                                                  children:
                                                    "本卡仅限学生领取,为确认您的身份",
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "choice-txt",
                                                  children: "请选择你的母校",
                                                }),
                                                (0, R.tZ)(v.Button, {
                                                  className: "choice-btn",
                                                  id: "AeCr",
                                                  onClick: this.onSchoolChoose,
                                                  children: "去选择",
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "btm-txt",
                                                  children:
                                                    "*根据铁路局规定,如学校与副卡信息不符,则后续将无法购买学生票",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop1-btm",
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-close-btn",
                                              id: "AeCs",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showChooseSchoolDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    U &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop1",
                                          children: [
                                            (0, R.tZ)(v.View, {
                                              className: "pop1-top",
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop1-wrap school",
                                              children: [
                                                (0, R.tZ)(v.View, {
                                                  className: "tips-txt",
                                                  children:
                                                    "本卡仅限学生领取,为确认您的身份",
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "choice-txt",
                                                  children:
                                                    "以下学校是否是你的母校",
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "school-name",
                                                  children: Z.universityName,
                                                }),
                                                (0, R.BX)(v.View, {
                                                  className: "school-btn-box",
                                                  children: [
                                                    (0, R.tZ)(v.Button, {
                                                      id: "AeCt",
                                                      onClick:
                                                        this
                                                          .onClickConfirmSchool,
                                                      children: "是",
                                                    }),
                                                    (0, R.tZ)(v.Button, {
                                                      id: "AeCu",
                                                      onClick:
                                                        this.onSchoolChoose,
                                                      children: "不是,去选择",
                                                    }),
                                                  ],
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "btm-txt",
                                                  children:
                                                    "*根据铁路局规定,如学校与副卡信息不符,则后续将无法购买学生票",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop1-btm",
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-close-btn",
                                              id: "AeCv",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showChooseSchoolConfirmDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    b &&
                                      1 === V &&
                                      !P &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-card",
                                          children: [
                                            (0, R.tZ)(v.View, {
                                              className: "pop-card-small",
                                              children: (0, R.tZ)(v.Image, {
                                                src:
                                                  "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/logo-" +
                                                  (J ? "ty2" : "zx2") +
                                                  ".png",
                                                className: "logo",
                                              }),
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-card-bd",
                                              children: [
                                                (0, R.BX)(v.View, {
                                                  className: "pop-card-bd-txt",
                                                  children: [
                                                    (0, R.BX)(v.View, {
                                                      className: "tit",
                                                      children: [
                                                        "恭喜您！您是",
                                                        $ || Z.universityName,
                                                      ],
                                                    }),
                                                    (0, R.BX)(v.View, {
                                                      className: "tit",
                                                      children: [
                                                        "前",
                                                        (0, R.tZ)(v.Text, {
                                                          className: "torage",
                                                          children: "15%",
                                                        }),
                                                        "领取出行卡的同学",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, R.tZ)(v.Button, {
                                                  className: "btn-submit",
                                                  id: "AeCy",
                                                  onClick:
                                                    this.closeOpenCardDialog,
                                                  children: "去解锁全部福利",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-close-btn",
                                              id: "AeCz",
                                              onClick: this.closeOpenCardDialog,
                                            }),
                                          ],
                                        }),
                                      }),
                                    m &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.tZ)(v.View, {
                                          className: "pop-rule",
                                          children: (0, R.BX)(v.View, {
                                            className: "rule-box",
                                            children: [
                                              (0, R.tZ)(v.View, {
                                                className: "tit",
                                                children: "活动规则",
                                              }),
                                              h.map(function (e, t) {
                                                return (0,
                                                R.tZ)(v.Text, { children: e }, "index");
                                              }),
                                              (0, R.tZ)(v.Icon, {
                                                className: "popCloseBtn",
                                                id: "AeDA",
                                                onClick: this.closeDialog,
                                                "data-dialog": "showRuleDialog",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    f &&
                                      (0, R.BX)(v.View, {
                                        className: "shadow",
                                        children: [
                                          (0, R.tZ)(v.View, {
                                            id: "AeDB",
                                            onClick: this.closeDialog,
                                            className: "pop-invitation-rest",
                                            "data-dialog": "showInviteDialog",
                                          }),
                                          (0, R.BX)(v.View, {
                                            className: "pop-invitation",
                                            children: [
                                              (0, R.tZ)(v.Icon, {}),
                                              (0, R.BX)(v.View, {
                                                className: "tit",
                                                children: [
                                                  "再邀请",
                                                  u,
                                                  "位同学助力,即可解锁福利",
                                                ],
                                              }),
                                              (0, R.BX)(v.View, {
                                                className: "time",
                                                children: [
                                                  (0, R.tZ)(v.Text, {
                                                    className: "t",
                                                    children: "需在",
                                                  }),
                                                  (0, R.tZ)(v.View, {
                                                    className: "d",
                                                    children: g,
                                                  }),
                                                  (0, R.tZ)(v.Text, {
                                                    className: "f",
                                                    children: ":",
                                                  }),
                                                  (0, R.tZ)(v.View, {
                                                    className: "d",
                                                    children: w,
                                                  }),
                                                  (0, R.tZ)(v.Text, {
                                                    className: "f",
                                                    children: ":",
                                                  }),
                                                  (0, R.tZ)(v.View, {
                                                    className: "d",
                                                    children: p,
                                                  }),
                                                  (0, R.tZ)(v.Text, {
                                                    className: "t",
                                                    children: "内完成",
                                                  }),
                                                ],
                                              }),
                                              (0, R.tZ)(v.View, {
                                                className: "name",
                                                children: N.map(function (
                                                  t,
                                                  i
                                                ) {
                                                  return (0, R.BX)(
                                                    v.View,
                                                    {
                                                      children: [
                                                        (0, R.tZ)(v.Button, {
                                                          openType: "share",
                                                          id: "AeDC",
                                                          onClick:
                                                            e.onSubscribe,
                                                          children: (0, R.tZ)(
                                                            v.Image,
                                                            {
                                                              src:
                                                                (t &&
                                                                  t.avatar) ||
                                                                "",
                                                            }
                                                          ),
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          children:
                                                            (t && t.nickName) ||
                                                            "待邀请",
                                                        }),
                                                      ],
                                                    },
                                                    "index"
                                                  );
                                                }),
                                              }),
                                              (0, R.BX)(v.View, {
                                                className: "btn",
                                                children: [
                                                  (0, R.tZ)(v.Button, {
                                                    className: "pyq",
                                                    id: "AeDD",
                                                    onClick:
                                                      this.onTimelineShare,
                                                  }),
                                                  (0, R.tZ)(v.Button, {
                                                    className: "wx",
                                                    openType: "share",
                                                    id: "AeDE",
                                                    onClick: this.onSubscribe,
                                                  }),
                                                ],
                                              }),
                                              (0, R.tZ)(v.View, {
                                                className: "txt",
                                                children:
                                                  "*我们将效验助力者学生身份，若不符合助力失败",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    X &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                      }),
                                    X &&
                                      (0, R.tZ)(v.View, {
                                        className: "share-image",
                                        id: "AeDF",
                                        onClick: this.closeDialog,
                                        onTouchMove: this.noop,
                                        "data-dialog": "showCircleImage",
                                        children: (0, R.tZ)(M.Z, {
                                          backgroundUrl: A,
                                          backgroundWidth: 300,
                                          backgroundHeight: 470,
                                          pagePath: G,
                                          qrcodeX: 195,
                                          qrcodeY: 380,
                                          qrcodeWidth: 50,
                                          qrcodeHeight: 50,
                                          mode: "freeStuVipNew",
                                          onSavesuccess:
                                            this.onSharePictureSave,
                                          onSuccess: this.onSharePictureSuccess,
                                          onFail: this.onSharePictureFail,
                                        }),
                                      }),
                                    E &&
                                      _ &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.tZ)(v.Icon, {
                                              className: "top-bg1",
                                            }),
                                            (0, R.tZ)(v.Text, {
                                              className: "txt",
                                              children:
                                                "分享给更多同学,\n可大大增加成功率",
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-btn1",
                                              openType: "share",
                                              id: "AeDG",
                                              onClick: this.onSubscribe,
                                              children: "分享给同学",
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDH",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showShareBackDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    E &&
                                      !_ &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.tZ)(v.Icon, {
                                              className: "top-bg2",
                                            }),
                                            (0, R.tZ)(v.Text, {
                                              className: "txt",
                                              children:
                                                "冲冲冲!\n学生卡马上就到手了!省钱!",
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-btn1",
                                              openType: "share",
                                              id: "AeDI",
                                              onClick: this.onSubscribe,
                                              children: "分享给同学",
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDJ",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showShareBackDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    q &&
                                      !(
                                        (b && 2 === Z.status && 3 !== V) ||
                                        W
                                      ) &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.tZ)(v.Icon, {
                                              className: "top-bg3",
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "tit",
                                              children: "真的不领吗?",
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "coupon",
                                              children: [
                                                (0, R.BX)(v.View, {
                                                  className: "bg-hc",
                                                  children: [
                                                    (0, R.tZ)(v.View, {
                                                      className: "t1",
                                                      children: "火车票",
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "t2",
                                                      children: "学生",
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "t3",
                                                      children: "半价",
                                                    }),
                                                  ],
                                                }),
                                                (0, R.BX)(v.View, {
                                                  className: "bg-jp",
                                                  children: [
                                                    (0, R.tZ)(v.View, {
                                                      className: "t1",
                                                      children: "机票",
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "t2",
                                                      children: "立减",
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "t3",
                                                      children: (0, R.tZ)(
                                                        v.Text,
                                                        { children: "20" }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, R.BX)(v.View, {
                                                  className: "bg-jd",
                                                  children: [
                                                    (0, R.tZ)(v.View, {
                                                      className: "t1",
                                                      children: "酒店",
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "t2",
                                                      children: "最高减",
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "t3",
                                                      children: (0, R.tZ)(
                                                        v.Text,
                                                        { children: "70" }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-btn1",
                                              id: "AeDK",
                                              onClick: this.closeDialog,
                                              "data-dialog": "showRedeemDialog",
                                              children: "去领取",
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDL",
                                              onClick: this.closeDialog,
                                              "data-dialog": "showRedeemDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    n &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.tZ)(v.Icon, {
                                              className: "top-bg3",
                                            }),
                                            (0, R.tZ)(v.Text, {
                                              className: "txt2",
                                              children:
                                                "倒计时用尽，未助力成功",
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-btn1",
                                              id: "AeDM",
                                              onClick: this.onRestartClick,
                                              children: "重新发起助力",
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDN",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showTimeoutDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    r &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop2 popIn",
                                          children: [
                                            (0, R.tZ)(v.Image, {
                                              src: J
                                                ? "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/logo-ty2.png"
                                                : "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/logo-zx2.png",
                                              className: "logo",
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "tit",
                                              children: "助力成功!您已解锁",
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "txt",
                                              children: [
                                                J ? "铁友" : "智行",
                                                $ || Z.universityName,
                                                "专属出行卡所有权益",
                                              ],
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "btn",
                                              id: "AeDO",
                                              onClick: this.refreshStatus,
                                              children: "立即查看",
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-close-btn",
                                              id: "AeDP",
                                              onClick: this.closeDialog,
                                              "data-dialog": "showTipDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    i &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-card",
                                          children: [
                                            (0, R.BX)(v.View, {
                                              className: "pop-card-big",
                                              children: [
                                                (0, R.tZ)(v.View, {
                                                  className: "txt",
                                                  children: "谢谢你帮我助力!",
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src:
                                                    j ||
                                                    "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/tx-".concat(
                                                      J ? "ty" : "zx",
                                                      ".png"
                                                    ),
                                                  className: "avatar",
                                                }),
                                                (0, R.BX)(v.View, {
                                                  className: "name",
                                                  children: [
                                                    "我是",
                                                    K || "当代大学生代表",
                                                  ],
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src:
                                                    "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/logo-" +
                                                    (J ? "ty2" : "zx2") +
                                                    ".png",
                                                  className: "logo",
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-card-bd",
                                              children: [
                                                (0, R.tZ)(v.View, {
                                                  className: "pop-card-bd-txt",
                                                  children: (0, R.tZ)(v.View, {
                                                    className: "tit",
                                                    children:
                                                      "也送你一张学生出行卡~",
                                                  }),
                                                }),
                                                (0, R.tZ)(v.Button, {
                                                  className: "btn-submit",
                                                  id: "AeDQ",
                                                  onClick:
                                                    this.toSelfActivityPage,
                                                  children: "去解锁全部福利",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-close-btn",
                                              id: "AeDR",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showSuccessDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    Q &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-card",
                                          children: [
                                            (0, R.BX)(v.View, {
                                              className: "pop-card-big",
                                              children: [
                                                (0, R.tZ)(v.View, {
                                                  className: "txt",
                                                  children: "谢谢你帮我助力!",
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src:
                                                    j ||
                                                    "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/tx-".concat(
                                                      J ? "ty" : "zx",
                                                      ".png"
                                                    ),
                                                  className: "avatar",
                                                }),
                                                (0, R.BX)(v.View, {
                                                  className: "name",
                                                  children: [
                                                    "我是",
                                                    K || "当代大学生代表",
                                                  ],
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src:
                                                    "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/logo-" +
                                                    (J ? "ty2" : "zx2") +
                                                    ".png",
                                                  className: "logo",
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-card-bd",
                                              children: [
                                                (0, R.tZ)(v.View, {
                                                  className: "pop-card-bd-txt",
                                                  children: (0, R.tZ)(v.View, {
                                                    className: "tit",
                                                    children:
                                                      "你的账号里也有一张学生卡哟，\n快去查看吧~",
                                                  }),
                                                }),
                                                (0, R.tZ)(v.Button, {
                                                  className: "btn-submit",
                                                  id: "AeDW",
                                                  onClick:
                                                    this.onClickShowSuccessPage,
                                                  children: "前往使用",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-close-btn",
                                              id: "AeDX",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showAssistSuccessReceivedDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    he &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-mid pop-blister",
                                          children: [
                                            (0, R.tZ)(v.View, {
                                              className: "pop-blister-hd",
                                              children: (0, R.tZ)(v.View, {
                                                className: "tit done",
                                              }),
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-blister-bd",
                                              children: (0, R.tZ)(v.View, {
                                                className: "btn-box",
                                                children: (0, R.BX)(v.View, {
                                                  className: "cont",
                                                  children: [
                                                    (0, R.tZ)(v.View, {
                                                      className: "light-box",
                                                      children: (0, R.tZ)(
                                                        v.View,
                                                        { className: "light" }
                                                      ),
                                                    }),
                                                    (0, R.BX)(v.View, {
                                                      className: "btn-submit",
                                                      id: "AeDY",
                                                      onClick:
                                                        this
                                                          .onClickToInviteCashBack,
                                                      children: [
                                                        (0, R.tZ)(v.Text, {
                                                          className: "text",
                                                          children: "领取福利",
                                                        }),
                                                        (0, R.tZ)(v.View, {
                                                          className: "desc",
                                                          children:
                                                            "同学使用该卡,您可获得10元/人奖学金",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-close-btn",
                                              id: "AeDZ",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showAssistSuccessUsedDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    s &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-card",
                                          children: [
                                            (0, R.BX)(v.View, {
                                              className: "pop-card-big",
                                              children: [
                                                (0, R.tZ)(v.View, {
                                                  className: "txt",
                                                  children: "谢谢你帮我助力!",
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src:
                                                    j ||
                                                    "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/tx-".concat(
                                                      J ? "ty" : "zx",
                                                      ".png"
                                                    ),
                                                  className: "avatar",
                                                }),
                                                (0, R.BX)(v.View, {
                                                  className: "name",
                                                  children: [
                                                    "我是",
                                                    K || "当代大学生代表",
                                                  ],
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src:
                                                    "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/logo-" +
                                                    (J ? "ty2" : "zx2") +
                                                    ".png",
                                                  className: "logo",
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-card-bd",
                                              children: [
                                                (0, R.tZ)(v.View, {
                                                  className: "pop-card-bd-txt",
                                                  children: (0, R.tZ)(v.View, {
                                                    className: "tit",
                                                    children:
                                                      "您已为TA助力成功，\n快去继续领取你的学生卡吧~",
                                                  }),
                                                }),
                                                (0, R.tZ)(v.Button, {
                                                  className: "btn-submit",
                                                  id: "AeDc",
                                                  onClick: this.onUseClick,
                                                  children: "查看我的助力",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-close-btn",
                                              id: "AeDd",
                                              onClick: this.closeDialog,
                                              "data-dialog": "showCardDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    a &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.tZ)(v.Icon, {
                                              className: "top-bg4",
                                            }),
                                            (0, R.tZ)(v.Text, {
                                              className: "txt2",
                                              children: "您的助力次数已用尽",
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-btn1",
                                              id: "AeDg",
                                              onClick: this.onReceiveClick,
                                              children: "发起我的助力",
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDh",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showNoCountDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    Y &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.tZ)(v.Icon, {
                                              className: "top-bg4",
                                            }),
                                            (0, R.tZ)(v.Text, {
                                              className: "txt2",
                                              children: "您的助力次数已用尽",
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-btn1",
                                              id: "AeDi",
                                              onClick:
                                                this.onClickShowSuccessPage,
                                              children: "去使用我的学生卡",
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDj",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showAssistFailReceivedDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    c &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.tZ)(v.Icon, {
                                              className: "top-bg4",
                                            }),
                                            (0, R.tZ)(v.Text, {
                                              className: "txt2",
                                              children: "您的助力次数已用尽",
                                            }),
                                            (0, R.tZ)(v.Button, {
                                              className: "pop-btn1",
                                              id: "AeDk",
                                              onClick: this.onUseClick,
                                              children: "查看我的助力",
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDl",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showNoReceiveDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ee &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.BX)(v.View, {
                                              className: "top-bg5",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  className: "dt",
                                                  children: "学生抢票金手指",
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/pop/newIcon/icon1.png",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.Text, {
                                              className: "txt-center",
                                              children:
                                                "一键帮好友加速至VIP抢票速度,\n装逼神器",
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-btn2",
                                              id: "AeDm",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showGoldFingerDialog",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  children: "知道了",
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "am",
                                                  children: (0, R.tZ)(v.Icon, {
                                                    className: "guang",
                                                  }),
                                                }),
                                                (0, R.tZ)(v.Icon, {
                                                  className: "more",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDn",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showGoldFingerDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    se &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.BX)(v.View, {
                                              className: "top-bg5",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  className: "dt",
                                                  children: "火车学生票5折",
                                                }),
                                                (0, R.tZ)(v.Text, {
                                                  className: "dd",
                                                  children:
                                                    "寒暑期预定学生票，最高享半价",
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/pop/newIcon/icon5.png",
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-coupon-box",
                                              children: [
                                                (0, R.BX)(v.View, {
                                                  className: "coupon-bg",
                                                  children: [
                                                    (0, R.BX)(v.View, {
                                                      className: "top",
                                                      children: [
                                                        (0, R.tZ)(v.Text, {
                                                          children: "5",
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          children: "折",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "btm",
                                                      children: "硬座及无座",
                                                    }),
                                                  ],
                                                }),
                                                (0, R.BX)(v.View, {
                                                  className: "coupon-bg",
                                                  children: [
                                                    (0, R.BX)(v.View, {
                                                      className: "top",
                                                      children: [
                                                        (0, R.tZ)(v.Text, {
                                                          children: "75",
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          children: "折",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "btm",
                                                      children: "硬卧及二等座",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-btn2",
                                              id: "AeDo",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showTrainHalfDialog",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  children: "知道了",
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "am",
                                                  children: (0, R.tZ)(v.Icon, {
                                                    className: "guang",
                                                  }),
                                                }),
                                                (0, R.tZ)(v.Icon, {
                                                  className: "more",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDp",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showTrainHalfDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    te &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.BX)(v.View, {
                                              className: "top-bg5",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  className: "dt",
                                                  children: "火车高速抢票",
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/pop/newIcon/icon2.png",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.Text, {
                                              className: "txt-center",
                                              children:
                                                "抢票免费直升高速，\n大大提高抢票成功率",
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-btn2",
                                              id: "AeDq",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showTrainHighSpeedDialog",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  children: "知道了",
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "am",
                                                  children: (0, R.tZ)(v.Icon, {
                                                    className: "guang",
                                                  }),
                                                }),
                                                (0, R.tZ)(v.Icon, {
                                                  className: "more",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDr",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showTrainHighSpeedDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    oe &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.BX)(v.View, {
                                              className: "top-bg5",
                                              children: [
                                                (0, R.BX)(v.Text, {
                                                  className: "dt",
                                                  children: [
                                                    T.Z.PRIORITY_TICKET,
                                                    "特权",
                                                  ],
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/pop/newIcon/icon8.png",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.Text, {
                                              className: "txt-center",
                                              children:
                                                "抢票速度相同时，有票优先出\n大大提高买票成功率",
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-btn2",
                                              id: "AeDs",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showPriorityDraftDialog",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  children: "知道了",
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "am",
                                                  children: (0, R.tZ)(v.Icon, {
                                                    className: "guang",
                                                  }),
                                                }),
                                                (0, R.tZ)(v.Icon, {
                                                  className: "more",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDt",
                                              onClick: this.closeDialog,
                                              "data-dialog":
                                                "showPriorityDraftDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ce &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.BX)(v.View, {
                                              className: "top-bg5",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  className: "dt",
                                                  children: "机票学生礼包",
                                                }),
                                                (0, R.tZ)(v.Text, {
                                                  className: "dd",
                                                  children:
                                                    "70元机票礼包，出行更省钱",
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/pop/newIcon/icon6.png",
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-coupon-box",
                                              children: [
                                                (0, R.BX)(v.View, {
                                                  className: "coupon-bg",
                                                  children: [
                                                    (0, R.BX)(v.View, {
                                                      className: "top",
                                                      children: [
                                                        (0, R.tZ)(v.Text, {
                                                          children: "50",
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          children: "元",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "btm",
                                                      children: "多人出行券",
                                                    }),
                                                  ],
                                                }),
                                                (0, R.BX)(v.View, {
                                                  className: "coupon-bg",
                                                  children: [
                                                    (0, R.tZ)(v.View, {
                                                      className: "jiaobiao",
                                                      children: "4张",
                                                    }),
                                                    (0, R.BX)(v.View, {
                                                      className: "top",
                                                      children: [
                                                        (0, R.tZ)(v.Text, {
                                                          children: "5",
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          children: "元",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "btm",
                                                      children: "机票补贴券",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-btn2",
                                              id: "AeDu",
                                              onClick: this.closeDialog,
                                              "data-dialog": "showFlightDialog",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  children: "知道了",
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "am",
                                                  children: (0, R.tZ)(v.Icon, {
                                                    className: "guang",
                                                  }),
                                                }),
                                                (0, R.tZ)(v.Icon, {
                                                  className: "more",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDv",
                                              onClick: this.closeDialog,
                                              "data-dialog": "showFlightDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ne &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.BX)(v.View, {
                                              className: "top-bg5",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  className: "dt",
                                                  children: "酒店学生礼包",
                                                }),
                                                (0, R.tZ)(v.Text, {
                                                  className: "dd",
                                                  children:
                                                    "70元酒店礼包，出行更省钱",
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/pop/newIcon/icon7.png",
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-coupon-box",
                                              children: [
                                                (0, R.BX)(v.View, {
                                                  className: "coupon-bg",
                                                  children: [
                                                    (0, R.BX)(v.View, {
                                                      className: "top",
                                                      children: [
                                                        (0, R.tZ)(v.Text, {
                                                          children: "50",
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          children: "元",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "btm",
                                                      children: "酒店优惠券",
                                                    }),
                                                  ],
                                                }),
                                                (0, R.BX)(v.View, {
                                                  className: "coupon-bg",
                                                  children: [
                                                    (0, R.BX)(v.View, {
                                                      className: "top",
                                                      children: [
                                                        (0, R.tZ)(v.Text, {
                                                          children: "20",
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          children: "元",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "btm",
                                                      children: "酒店优惠券",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-btn2",
                                              id: "AeDw",
                                              onClick: this.closeDialog,
                                              "data-dialog": "showHotelDialog",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  children: "知道了",
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "am",
                                                  children: (0, R.tZ)(v.Icon, {
                                                    className: "guang",
                                                  }),
                                                }),
                                                (0, R.tZ)(v.Icon, {
                                                  className: "more",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDx",
                                              onClick: this.closeDialog,
                                              "data-dialog": "showHotelDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ae &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.BX)(v.View, {
                                              className: "top-bg5",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  className: "dt",
                                                  children: "汽车票学生礼包",
                                                }),
                                                (0, R.tZ)(v.Text, {
                                                  className: "dd",
                                                  children:
                                                    "18元汽车票礼包，出行更省钱",
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/pop/newIcon/icon4.png",
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-coupon-box",
                                              children: [
                                                (0, R.BX)(v.View, {
                                                  className: "coupon-bg",
                                                  children: [
                                                    (0, R.tZ)(v.View, {
                                                      className: "jiaobiao",
                                                      children: "4张",
                                                    }),
                                                    (0, R.BX)(v.View, {
                                                      className: "top",
                                                      children: [
                                                        (0, R.tZ)(v.Text, {
                                                          children: "2",
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          children: "元",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "btm",
                                                      children: "汽车票立减券",
                                                    }),
                                                  ],
                                                }),
                                                (0, R.BX)(v.View, {
                                                  className: "coupon-bg",
                                                  children: [
                                                    (0, R.BX)(v.View, {
                                                      className: "top",
                                                      children: [
                                                        (0, R.tZ)(v.Text, {
                                                          children: "10",
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          children: "元",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "btm",
                                                      children: "船票立减券",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-btn2",
                                              id: "AeDy",
                                              onClick: this.closeDialog,
                                              "data-dialog": "showBusDialog",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  children: "知道了",
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "am",
                                                  children: (0, R.tZ)(v.Icon, {
                                                    className: "guang",
                                                  }),
                                                }),
                                                (0, R.tZ)(v.Icon, {
                                                  className: "more",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeDz",
                                              onClick: this.closeDialog,
                                              "data-dialog": "showBusDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ie &&
                                      (0, R.tZ)(v.View, {
                                        className: "shadow",
                                        children: (0, R.BX)(v.View, {
                                          className: "pop-box",
                                          children: [
                                            (0, R.BX)(v.View, {
                                              className: "top-bg5",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  className: "dt",
                                                  children: "景点门票学生礼包",
                                                }),
                                                (0, R.tZ)(v.Text, {
                                                  className: "dd",
                                                  children:
                                                    "60元门票礼包,旅行更划算",
                                                }),
                                                (0, R.tZ)(v.Image, {
                                                  src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/pop/newIcon/icon3.png",
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-coupon-box",
                                              children: [
                                                (0, R.BX)(v.View, {
                                                  className: "coupon-bg",
                                                  children: [
                                                    (0, R.BX)(v.View, {
                                                      className: "top",
                                                      children: [
                                                        (0, R.tZ)(v.Text, {
                                                          children: "50",
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          children: "元",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "btm",
                                                      children: "门票优惠券",
                                                    }),
                                                  ],
                                                }),
                                                (0, R.BX)(v.View, {
                                                  className: "coupon-bg",
                                                  children: [
                                                    (0, R.BX)(v.View, {
                                                      className: "top",
                                                      children: [
                                                        (0, R.tZ)(v.Text, {
                                                          children: "10",
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          children: "元",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "btm",
                                                      children: "门票优惠券",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, R.BX)(v.View, {
                                              className: "pop-btn2",
                                              id: "AeEA",
                                              onClick: this.closeDialog,
                                              "data-dialog": "showTicketDialog",
                                              children: [
                                                (0, R.tZ)(v.Text, {
                                                  children: "知道了",
                                                }),
                                                (0, R.tZ)(v.View, {
                                                  className: "am",
                                                  children: (0, R.tZ)(v.Icon, {
                                                    className: "guang",
                                                  }),
                                                }),
                                                (0, R.tZ)(v.Icon, {
                                                  className: "more",
                                                }),
                                              ],
                                            }),
                                            (0, R.tZ)(v.View, {
                                              className: "pop-close-btn",
                                              id: "AeEB",
                                              onClick: this.closeDialog,
                                              "data-dialog": "showTicketDialog",
                                            }),
                                          ],
                                        }),
                                      }),
                                    !((b && 2 === Z.status && 3 !== V) || W) &&
                                      (0, R.BX)(v.View, {
                                        className: "page1",
                                        children: [
                                          !(b && 1 === V) &&
                                            !J &&
                                            (0, R.tZ)(v.Icon, {
                                              className: "logo-zx",
                                              children: (0, R.tZ)(v.Image, {
                                                src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/logo.png",
                                              }),
                                            }),
                                          !(b && 1 === V) &&
                                            J &&
                                            (0, R.tZ)(v.Icon, {
                                              className: "logo-ty",
                                              children: (0, R.tZ)(v.Image, {
                                                src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/logo-ty2.png",
                                              }),
                                            }),
                                          !(b && 1 === V) &&
                                            (0, R.tZ)(v.View, {
                                              className: "top-img1",
                                              children: (0, R.tZ)(v.Image, {
                                                src: de
                                                  ? "https://images3.c-ctrip.com/zt/activity/20201022-ztrip-student-cash-back/privilege-top-rzsybjd.png"
                                                  : "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/top-img1.jpg",
                                              }),
                                            }),
                                          b &&
                                            0 !== V &&
                                            (0, R.tZ)(v.Button, {
                                              class: "btn-change",
                                              id: "AeEC",
                                              onClick: this.onSchoolChoose,
                                            }),
                                          b &&
                                            1 === V &&
                                            (0, R.tZ)(v.View, {
                                              className: "top-img2",
                                              children: (0, R.tZ)(v.Image, {
                                                src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/top-img2.jpg",
                                              }),
                                            }),
                                          (0, R.BX)(v.View, {
                                            className: "quanyi-box ".concat(
                                              b && 1 === V ? "mt60" : ""
                                            ),
                                            children: [
                                              b &&
                                                1 === V &&
                                                (0, R.tZ)(v.Icon, {
                                                  className: "icon-ren",
                                                }),
                                              Z.universityName &&
                                                Z.receivedStuAmount &&
                                                (0, R.tZ)(v.View, {
                                                  className: "roll-box",
                                                  children:
                                                    o +
                                                    "已累计为" +
                                                    Z.receivedStuAmount +
                                                    "位" +
                                                    (x || Z.universityName) +
                                                    "学生提供出行服务",
                                                }),
                                              (0, R.BX)(v.View, {
                                                className: "card1",
                                                children: [
                                                  (0, R.tZ)(v.View, {
                                                    className: J
                                                      ? "card-logo-ty"
                                                      : "card-logo-zx",
                                                    children:
                                                      Z.universityName ||
                                                      "大学生",
                                                  }),
                                                  (0, R.tZ)(v.Icon, {
                                                    className: "card-txt",
                                                  }),
                                                  (0, R.BX)(v.View, {
                                                    className: "card-pic",
                                                    children: [
                                                      (0, R.BX)(v.Text, {
                                                        style:
                                                          "text-decoration: line-through",
                                                        children: [me, "元"],
                                                      }),
                                                      (0, R.tZ)(v.Text, {
                                                        children: "0",
                                                      }),
                                                      (0, R.tZ)(v.Text, {
                                                        children: "元",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              b &&
                                                1 === V &&
                                                (0, R.BX)(v.View, {
                                                  className:
                                                    "invitation-box ".concat(
                                                      H
                                                        ? "invitation-box-bottom"
                                                        : ""
                                                    ),
                                                  children: [
                                                    (0, R.BX)(v.View, {
                                                      className: "tit",
                                                      children: [
                                                        "再邀请",
                                                        u,
                                                        "位同学助力,即可解锁福利",
                                                      ],
                                                    }),
                                                    (0, R.BX)(v.View, {
                                                      className: "time",
                                                      children: [
                                                        (0, R.tZ)(v.Text, {
                                                          className: "t",
                                                          children: "需在",
                                                        }),
                                                        (0, R.tZ)(v.View, {
                                                          className: "d",
                                                          children: g,
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          className: "f",
                                                          children: ":",
                                                        }),
                                                        (0, R.tZ)(v.View, {
                                                          className: "d",
                                                          children: w,
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          className: "f",
                                                          children: ":",
                                                        }),
                                                        (0, R.tZ)(v.View, {
                                                          className: "d",
                                                          children: p,
                                                        }),
                                                        (0, R.tZ)(v.Text, {
                                                          className: "t",
                                                          children: "内完成",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      className: "name",
                                                      children: N.map(function (
                                                        t,
                                                        i
                                                      ) {
                                                        return (0, R.BX)(
                                                          v.View,
                                                          {
                                                            children: [
                                                              (0, R.tZ)(
                                                                v.Button,
                                                                {
                                                                  openType:
                                                                    "share",
                                                                  id: "AeED",
                                                                  onClick:
                                                                    e.onSubscribe,
                                                                  children: (0,
                                                                  R.tZ)(
                                                                    v.Image,
                                                                    {
                                                                      src:
                                                                        (t &&
                                                                          t.avatar) ||
                                                                        "",
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                              (0, R.tZ)(
                                                                v.Text,
                                                                {
                                                                  children:
                                                                    (t &&
                                                                      t.nickName) ||
                                                                    "待邀请",
                                                                }
                                                              ),
                                                            ],
                                                          },
                                                          "index"
                                                        );
                                                      }),
                                                    }),
                                                    !H &&
                                                      (0, R.BX)(v.View, {
                                                        className: "btn",
                                                        children: [
                                                          (0, R.tZ)(v.Button, {
                                                            className: "pyq",
                                                            id: "AeEE",
                                                            onClick:
                                                              this
                                                                .onTimelineShare,
                                                          }),
                                                          (0, R.tZ)(v.Button, {
                                                            className: "wx",
                                                            openType: "share",
                                                            id: "AeEF",
                                                            onClick:
                                                              this.onSubscribe,
                                                          }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              !!re.reward &&
                                                (0, R.BX)(v.View, {
                                                  className: "privilege-coupon",
                                                  children: [
                                                    (0, R.tZ)(v.View, {
                                                      class: "tag",
                                                      children: "100%必得",
                                                    }),
                                                    (0, R.tZ)(v.View, {
                                                      class: "price",
                                                      children: re.reward / 100,
                                                    }),
                                                    (0, R.BX)(v.View, {
                                                      class: "cont",
                                                      children: [
                                                        "学生票价",
                                                        (0, R.tZ)(v.Text, {
                                                          children:
                                                            "无门槛单单立减",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              (0, R.BX)(v.View, {
                                                className: "decorate-box",
                                                children: [
                                                  (0, R.tZ)(v.View, {
                                                    className: "tit-box",
                                                    children: (0, R.BX)(
                                                      v.Text,
                                                      {
                                                        children: [
                                                          "出行卡权益价值",
                                                          me,
                                                          "元",
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  (0, R.BX)(v.View, {
                                                    className: "rights-list",
                                                    children: [
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon1.png",
                                                            id: "AeEG",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showTrainHalfDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "最低5折",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "火车学生票",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon2.png",
                                                            id: "AeEH",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showTrainHighSpeedDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值120元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "火车高速抢票",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon3.png",
                                                            id: "AeEI",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showPriorityDraftDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值40元",
                                                          }),
                                                          (0, R.BX)(v.View, {
                                                            children: [
                                                              "火车",
                                                              T.Z
                                                                .PRIORITY_TICKET,
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon4.png",
                                                            id: "AeEJ",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showGoldFingerDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值200元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "抢票金手指",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon5.png",
                                                            id: "AeEK",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showFlightDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值70元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "机票礼包",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon6.png",
                                                            id: "AeEL",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showHotelDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值70元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "酒店礼包",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon7.png",
                                                            id: "AeEM",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showBusDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值18元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "汽车礼包",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon8.png",
                                                            id: "AeEN",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showTicketDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值60元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "门票礼包",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, R.tZ)(v.View, {
                                                className: "decorate-btm",
                                              }),
                                              (0, R.BX)(v.View, {
                                                className: "unlock-box",
                                                children: [
                                                  (0, R.tZ)(v.Image, {
                                                    src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon-unlock.png",
                                                  }),
                                                  (0, R.tZ)(v.Text, {
                                                    children:
                                                      "更多权益待领取后解锁",
                                                  }),
                                                ],
                                              }),
                                              (0, R.BX)(v.View, {
                                                className: "decorate-box fuli",
                                                children: [
                                                  (0, R.tZ)(v.View, {
                                                    className: "tit-box",
                                                    children: (0, R.tZ)(
                                                      v.Text,
                                                      {
                                                        children:
                                                          "学生专属品牌福利",
                                                      }
                                                    ),
                                                  }),
                                                  le.showGiftsModule &&
                                                    (0, R.BX)(v.Block, {
                                                      children: [
                                                        (0, R.tZ)(v.View, {
                                                          className: "tips",
                                                          children:
                                                            "不定期更新,领卡成功后即可领取以下福利",
                                                        }),
                                                        (0, R.tZ)(v.View, {
                                                          className: "fuli-box",
                                                          children:
                                                            le.giftsList.map(
                                                              function (e) {
                                                                return (0,
                                                                R.BX)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "item",
                                                                    children: [
                                                                      (0, R.tZ)(
                                                                        v.Image,
                                                                        {
                                                                          src: e.imgUrl,
                                                                        }
                                                                      ),
                                                                      (0, R.tZ)(
                                                                        v.View,
                                                                        {
                                                                          children:
                                                                            e.title,
                                                                        }
                                                                      ),
                                                                      (0, R.tZ)(
                                                                        v.View,
                                                                        {
                                                                          children:
                                                                            e.text,
                                                                        }
                                                                      ),
                                                                    ],
                                                                  },
                                                                  e.title
                                                                );
                                                              }
                                                            ),
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                              (0, R.tZ)(v.View, {
                                                className: "decorate-btm",
                                              }),
                                            ],
                                          }),
                                          (0, R.BX)(v.View, {
                                            className:
                                              "bullet-chat " +
                                              (y && "bullet-bottom"),
                                            children: [
                                              k &&
                                                k[0] &&
                                                (0, R.tZ)(z, {
                                                  className: "barrage-wrap",
                                                  list: JSON.parse(
                                                    JSON.stringify(k)
                                                  ),
                                                  from: 0,
                                                }),
                                              k &&
                                                k[0] &&
                                                (0, R.tZ)(L, {
                                                  className: "barrage-wrap",
                                                  list: JSON.parse(
                                                    JSON.stringify(k)
                                                  ),
                                                  from: 4,
                                                }),
                                              k &&
                                                k[0] &&
                                                (0, R.tZ)(F, {
                                                  className: "barrage-wrap",
                                                  list: JSON.parse(
                                                    JSON.stringify(k)
                                                  ),
                                                  from: 8,
                                                }),
                                              k &&
                                                k[0] &&
                                                (0, R.tZ)(O, {
                                                  className: "barrage-wrap",
                                                  list: JSON.parse(
                                                    JSON.stringify(k)
                                                  ),
                                                  from: 12,
                                                }),
                                            ],
                                          }),
                                          y &&
                                            ((b && 1 !== V) || !b) &&
                                            (0, R.tZ)(v.View, {
                                              className: "btn-shadow",
                                              style: "z-index: 10",
                                              children: (0, R.tZ)(v.View, {
                                                children: B
                                                  ? (0, R.BX)(v.Block, {
                                                      children: [
                                                        D &&
                                                          !b &&
                                                          (0, R.tZ)(v.Block, {
                                                            children: I
                                                              ? (0, R.BX)(
                                                                  v.Block,
                                                                  {
                                                                    children: [
                                                                      (0 ===
                                                                        C ||
                                                                        4 ===
                                                                          C) &&
                                                                        (0,
                                                                        R.tZ)(
                                                                          v.Button,
                                                                          {
                                                                            id: "AeER",
                                                                            onClick:
                                                                              this
                                                                                .launchOrReceive,
                                                                            className:
                                                                              "btn-box",
                                                                            children:
                                                                              (0,
                                                                              R.BX)(
                                                                                v.Block,
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        v.View,
                                                                                        {
                                                                                          children:
                                                                                            (0,
                                                                                            R.tZ)(
                                                                                              v.Icon,
                                                                                              {}
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        v.Text,
                                                                                        {
                                                                                          className:
                                                                                            "txt1",
                                                                                          children:
                                                                                            "立即领取我的学校学生卡",
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        v.Text,
                                                                                        {
                                                                                          className:
                                                                                            "txt2",
                                                                                          children:
                                                                                            "限量卡，每个学校限前30%用户可领取",
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                          }
                                                                        ),
                                                                      (1 ===
                                                                        C ||
                                                                        2 ===
                                                                          C ||
                                                                        3 ===
                                                                          C) &&
                                                                        (0,
                                                                        R.tZ)(
                                                                          v.Button,
                                                                          {
                                                                            id: "AeES",
                                                                            onClick:
                                                                              this
                                                                                .onUseClick,
                                                                            className:
                                                                              "btn-box",
                                                                            children:
                                                                              (0,
                                                                              R.BX)(
                                                                                v.Block,
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        v.View,
                                                                                        {
                                                                                          children:
                                                                                            (0,
                                                                                            R.tZ)(
                                                                                              v.Icon,
                                                                                              {}
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        v.Text,
                                                                                        {
                                                                                          className:
                                                                                            "txt1",
                                                                                          children:
                                                                                            "立即领取我的学校学生卡",
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        v.Text,
                                                                                        {
                                                                                          className:
                                                                                            "txt2",
                                                                                          children:
                                                                                            "限量卡，每个学校限前30%用户可领取",
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                          }
                                                                        ),
                                                                    ],
                                                                  }
                                                                )
                                                              : (0, R.tZ)(
                                                                  v.Block,
                                                                  {
                                                                    children: S
                                                                      ? (0,
                                                                        R.tZ)(
                                                                          v.Button,
                                                                          {
                                                                            id: "AeEQ",
                                                                            onClick:
                                                                              this.assistFriend.bind(
                                                                                this,
                                                                                "passive"
                                                                              ),
                                                                            className:
                                                                              "btn-box",
                                                                            children:
                                                                              (0,
                                                                              R.BX)(
                                                                                v.Block,
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        v.View,
                                                                                        {
                                                                                          children:
                                                                                            (0,
                                                                                            R.tZ)(
                                                                                              v.Icon,
                                                                                              {}
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        v.Text,
                                                                                        {
                                                                                          className:
                                                                                            "txt1",
                                                                                          children:
                                                                                            "一键为好友助力",
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        v.Text,
                                                                                        {
                                                                                          className:
                                                                                            "txt2",
                                                                                          children:
                                                                                            "助力成功，你也能领取学生专属福利",
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                          }
                                                                        )
                                                                      : (0,
                                                                        R.tZ)(
                                                                          v.Button,
                                                                          {
                                                                            id: "AeEP",
                                                                            onClick:
                                                                              function () {
                                                                                e.assistFriend();
                                                                              },
                                                                            className:
                                                                              "btn-box",
                                                                            children:
                                                                              (0,
                                                                              R.BX)(
                                                                                v.Block,
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        v.View,
                                                                                        {
                                                                                          children:
                                                                                            (0,
                                                                                            R.tZ)(
                                                                                              v.Icon,
                                                                                              {}
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        v.Text,
                                                                                        {
                                                                                          className:
                                                                                            "txt1",
                                                                                          children:
                                                                                            "一键为好友助力",
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        v.Text,
                                                                                        {
                                                                                          className:
                                                                                            "txt2",
                                                                                          children:
                                                                                            "助力成功，你也能领取学生专属福利",
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                          }
                                                                        ),
                                                                  }
                                                                ),
                                                          }),
                                                        b &&
                                                          (0 === V ||
                                                            2 === V) &&
                                                          (0, R.tZ)(v.Button, {
                                                            className:
                                                              "btn-box",
                                                            id: "AeET",
                                                            onClick:
                                                              this.getUserProfileInfoAction.bind(
                                                                this,
                                                                1
                                                              ),
                                                            children: (0, R.BX)(
                                                              v.Block,
                                                              {
                                                                children: [
                                                                  (0, R.tZ)(
                                                                    v.View,
                                                                    {
                                                                      children:
                                                                        (0,
                                                                        R.tZ)(
                                                                          v.Icon,
                                                                          {}
                                                                        ),
                                                                    }
                                                                  ),
                                                                  2 === V
                                                                    ? (0, R.tZ)(
                                                                        v.Text,
                                                                        {
                                                                          className:
                                                                            "txt1",
                                                                          children:
                                                                            "立即领取",
                                                                        }
                                                                      )
                                                                    : (0, R.tZ)(
                                                                        v.Text,
                                                                        {
                                                                          className:
                                                                            "txt1",
                                                                          children:
                                                                            "0元免费开卡",
                                                                        }
                                                                      ),
                                                                  (0, R.tZ)(
                                                                    v.Text,
                                                                    {
                                                                      className:
                                                                        "txt2",
                                                                      children:
                                                                        "限量卡，每个学校限前30%用户可领取",
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                          }),
                                                        b &&
                                                          3 === V &&
                                                          (0, R.tZ)(v.Button, {
                                                            className:
                                                              "btn-box",
                                                            id: "AeEU",
                                                            onClick:
                                                              this.getUserProfileInfoAction.bind(
                                                                this,
                                                                2
                                                              ),
                                                            children: (0, R.BX)(
                                                              v.Block,
                                                              {
                                                                children: [
                                                                  (0, R.tZ)(
                                                                    v.View,
                                                                    {
                                                                      children:
                                                                        (0,
                                                                        R.tZ)(
                                                                          v.Icon,
                                                                          {}
                                                                        ),
                                                                    }
                                                                  ),
                                                                  (0, R.tZ)(
                                                                    v.Text,
                                                                    {
                                                                      className:
                                                                        "txt1",
                                                                      children:
                                                                        "领取权益",
                                                                    }
                                                                  ),
                                                                  (0, R.tZ)(
                                                                    v.Text,
                                                                    {
                                                                      className:
                                                                        "txt2",
                                                                      children:
                                                                        "限量卡，每个学校限前30%用户可领取",
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                          }),
                                                        b &&
                                                          4 === V &&
                                                          (0, R.tZ)(v.Button, {
                                                            className:
                                                              "btn-box",
                                                            id: "AeEV",
                                                            onClick:
                                                              this.getUserProfileInfoAction.bind(
                                                                this,
                                                                3
                                                              ),
                                                            children: (0, R.BX)(
                                                              v.Block,
                                                              {
                                                                children: [
                                                                  (0, R.tZ)(
                                                                    v.View,
                                                                    {
                                                                      children:
                                                                        (0,
                                                                        R.tZ)(
                                                                          v.Icon,
                                                                          {}
                                                                        ),
                                                                    }
                                                                  ),
                                                                  (0, R.tZ)(
                                                                    v.Text,
                                                                    {
                                                                      className:
                                                                        "txt1",
                                                                      children:
                                                                        "重新领取",
                                                                    }
                                                                  ),
                                                                  (0, R.tZ)(
                                                                    v.Text,
                                                                    {
                                                                      className:
                                                                        "txt2",
                                                                      children:
                                                                        "限量卡，每个学校限前30%用户可领取",
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                          }),
                                                      ],
                                                    })
                                                  : (0, R.tZ)(v.Block, {
                                                      children: (0, R.tZ)(
                                                        v.Button,
                                                        {
                                                          id: "AeEO",
                                                          onClick:
                                                            this
                                                              .handleAssistWithPhoneLogin,
                                                          className: "btn-box",
                                                          children: (0, R.BX)(
                                                            v.Block,
                                                            {
                                                              children: [
                                                                (0, R.tZ)(
                                                                  v.View,
                                                                  {
                                                                    children:
                                                                      (0, R.tZ)(
                                                                        v.Icon,
                                                                        {}
                                                                      ),
                                                                  }
                                                                ),
                                                                D
                                                                  ? (0, R.BX)(
                                                                      v.Block,
                                                                      {
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            R.BX)(
                                                                              v.Text,
                                                                              {
                                                                                className:
                                                                                  "txt1",
                                                                                children:
                                                                                  [
                                                                                    "登录",
                                                                                    o,
                                                                                    "为好友助力",
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            R.tZ)(
                                                                              v.Text,
                                                                              {
                                                                                className:
                                                                                  "txt2",
                                                                                children:
                                                                                  "助力成功，你也能领取学生专属福利",
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    )
                                                                  : (0, R.BX)(
                                                                      v.Block,
                                                                      {
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            R.tZ)(
                                                                              v.Text,
                                                                              {
                                                                                className:
                                                                                  "txt1",
                                                                                children:
                                                                                  "0元免费开卡",
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            R.tZ)(
                                                                              v.Text,
                                                                              {
                                                                                className:
                                                                                  "txt2",
                                                                                children:
                                                                                  "限量卡，每个学校限前30%用户可领取",
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                              ],
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                              }),
                                            }),
                                          b &&
                                            1 === V &&
                                            H &&
                                            (0, R.tZ)(v.View, {
                                              class: "btn-shadow",
                                              style: "z-index: 10",
                                              children: (0, R.BX)(v.View, {
                                                class: "btn-box",
                                                id: "AeEW",
                                                onClick: this.openInvitation,
                                                children: [
                                                  (0, R.tZ)(v.View, {
                                                    children: (0, R.tZ)(
                                                      v.Icon,
                                                      {}
                                                    ),
                                                  }),
                                                  (0, R.tZ)(v.Text, {
                                                    className: "txt3",
                                                    children: "邀请好友解锁",
                                                  }),
                                                ],
                                              }),
                                            }),
                                        ],
                                      }),
                                    b &&
                                      1 === V &&
                                      (0, R.BX)(v.View, {
                                        className: "page2",
                                        style: "display: none",
                                        children: [
                                          f &&
                                            (0, R.tZ)(v.View, {
                                              className: "shadow",
                                              children: (0, R.BX)(v.View, {
                                                className: "pop-invitation",
                                                children: [
                                                  (0, R.tZ)(v.Icon, {}),
                                                  (0, R.tZ)(v.View, {
                                                    className: "tit",
                                                    children:
                                                      "再邀请3位同学助力,即可解锁福利",
                                                  }),
                                                  (0, R.BX)(v.View, {
                                                    className: "time",
                                                    children: [
                                                      (0, R.tZ)(v.Text, {
                                                        className: "t",
                                                        children: "需在",
                                                      }),
                                                      (0, R.tZ)(v.View, {
                                                        className: "d",
                                                        children: "23",
                                                      }),
                                                      (0, R.tZ)(v.Text, {
                                                        className: "f",
                                                        children: ":",
                                                      }),
                                                      (0, R.tZ)(v.View, {
                                                        className: "d",
                                                        children: "23",
                                                      }),
                                                      (0, R.tZ)(v.Text, {
                                                        className: "f",
                                                        children: ":",
                                                      }),
                                                      (0, R.tZ)(v.View, {
                                                        className: "d",
                                                        children: "23",
                                                      }),
                                                      (0, R.tZ)(v.Text, {
                                                        className: "t",
                                                        children: "内完成",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, R.BX)(v.View, {
                                                    className: "name",
                                                    children: [
                                                      (0, R.BX)(v.View, {
                                                        children: [
                                                          (0, R.tZ)(
                                                            v.Image,
                                                            {}
                                                          ),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "待邀请",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        children: [
                                                          (0, R.tZ)(
                                                            v.Image,
                                                            {}
                                                          ),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "待邀请",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        children: [
                                                          (0, R.tZ)(
                                                            v.Image,
                                                            {}
                                                          ),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "待邀请",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        children: [
                                                          (0, R.tZ)(
                                                            v.Image,
                                                            {}
                                                          ),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "待邀请",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        children: [
                                                          (0, R.tZ)(
                                                            v.Image,
                                                            {}
                                                          ),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "待邀请",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, R.BX)(v.View, {
                                                    className: "btn",
                                                    children: [
                                                      (0, R.tZ)(v.Button, {
                                                        className: "pyq",
                                                      }),
                                                      (0, R.tZ)(v.Button, {
                                                        className: "wx",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, R.tZ)(v.View, {
                                                    className: "txt",
                                                    children:
                                                      "*我们将校验助力者学生身份，若不符合助力失败",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          (0, R.tZ)(v.Button, {
                                            class: "btn-change",
                                          }),
                                          (0, R.tZ)(v.View, {
                                            className: "top-img2",
                                            children: (0, R.tZ)(v.Image, {
                                              src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/top-img2.jpg",
                                            }),
                                          }),
                                          (0, R.BX)(v.View, {
                                            className: "quanyi-box",
                                            children: [
                                              (0, R.tZ)(v.Icon, {
                                                className: "icon-ren",
                                              }),
                                              (0, R.tZ)(v.View, {
                                                className: "roll-box",
                                                children:
                                                  "智行已累计为xxxx位xxx大学学生提供出行服务",
                                              }),
                                              (0, R.BX)(v.View, {
                                                className: "card1",
                                                children: [
                                                  (0, R.tZ)(v.View, {
                                                    className: J
                                                      ? "card-logo-ty"
                                                      : "card-logo-zx",
                                                    children: "大学生",
                                                  }),
                                                  (0, R.tZ)(v.Icon, {
                                                    className: "card-txt",
                                                  }),
                                                  (0, R.tZ)(v.Text, {
                                                    className: "card-date",
                                                    children:
                                                      "有效期:2020.12.31",
                                                  }),
                                                  (0, R.BX)(v.View, {
                                                    className: "card-pic",
                                                    children: [
                                                      (0, R.BX)(v.Text, {
                                                        children: [me, "元"],
                                                      }),
                                                      (0, R.tZ)(v.Text, {
                                                        children: "0",
                                                      }),
                                                      (0, R.tZ)(v.Text, {
                                                        children: "元",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, R.BX)(v.View, {
                                                className: "invitation-box",
                                                children: [
                                                  (0, R.BX)(v.View, {
                                                    className: "tit",
                                                    children: [
                                                      "再邀请",
                                                      u,
                                                      "位同学助力,即可解锁福利",
                                                    ],
                                                  }),
                                                  (0, R.BX)(v.View, {
                                                    className: "time",
                                                    children: [
                                                      (0, R.tZ)(v.Text, {
                                                        className: "t",
                                                        children: "需在",
                                                      }),
                                                      (0, R.tZ)(v.View, {
                                                        className: "d",
                                                        children: "23",
                                                      }),
                                                      (0, R.tZ)(v.Text, {
                                                        className: "f",
                                                        children: ":",
                                                      }),
                                                      (0, R.tZ)(v.View, {
                                                        className: "d",
                                                        children: "23",
                                                      }),
                                                      (0, R.tZ)(v.Text, {
                                                        className: "f",
                                                        children: ":",
                                                      }),
                                                      (0, R.tZ)(v.View, {
                                                        className: "d",
                                                        children: "23",
                                                      }),
                                                      (0, R.tZ)(v.Text, {
                                                        className: "t",
                                                        children: "内完成",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, R.BX)(v.View, {
                                                    className: "name",
                                                    children: [
                                                      (0, R.BX)(v.View, {
                                                        children: [
                                                          (0, R.tZ)(
                                                            v.Image,
                                                            {}
                                                          ),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "待邀请",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        children: [
                                                          (0, R.tZ)(
                                                            v.Image,
                                                            {}
                                                          ),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "待邀请",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        children: [
                                                          (0, R.tZ)(
                                                            v.Image,
                                                            {}
                                                          ),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "待邀请",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        children: [
                                                          (0, R.tZ)(
                                                            v.Image,
                                                            {}
                                                          ),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "待邀请",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        children: [
                                                          (0, R.tZ)(
                                                            v.Image,
                                                            {}
                                                          ),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "待邀请",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, R.BX)(v.View, {
                                                    className: "btn",
                                                    children: [
                                                      (0, R.tZ)(v.Button, {
                                                        className: "pyq",
                                                      }),
                                                      (0, R.tZ)(v.Button, {
                                                        className: "wx",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, R.BX)(v.View, {
                                                className: "decorate-box",
                                                children: [
                                                  (0, R.tZ)(v.View, {
                                                    className: "tit-box",
                                                    children: (0, R.BX)(
                                                      v.Text,
                                                      {
                                                        children: [
                                                          "出行卡权益价值",
                                                          me,
                                                          "元",
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  (0, R.BX)(v.View, {
                                                    className: "rights-list",
                                                    children: [
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon1.png",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "最低5折",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "火车学生票",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon2.png",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值120元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "火车高速抢票",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon3.png",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值40元",
                                                          }),
                                                          (0, R.BX)(v.View, {
                                                            children: [
                                                              "火车",
                                                              T.Z
                                                                .PRIORITY_TICKET,
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon4.png",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值200元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "抢票金手指",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon5.png",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值70元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "机票礼包",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon6.png",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值70元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "酒店礼包",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon7.png",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值28元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "汽车礼包",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon8.png",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值20元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "门票礼包",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, R.tZ)(v.View, {
                                                className: "decorate-btm",
                                              }),
                                              (0, R.BX)(v.View, {
                                                className: "unlock-box",
                                                children: [
                                                  (0, R.tZ)(v.Image, {
                                                    src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon-unlock.png",
                                                  }),
                                                  (0, R.tZ)(v.Text, {
                                                    children:
                                                      "更多权益待领取后解锁",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, R.BX)(v.View, {
                                            className:
                                              "bullet-chat " +
                                              (y &&
                                                ((b && 1 !== V) || !b) &&
                                                "bullet-bottom"),
                                            children: [
                                              k &&
                                                k[0] &&
                                                (0, R.tZ)(z, {
                                                  className: "barrage-wrap",
                                                  list: JSON.parse(
                                                    JSON.stringify(k)
                                                  ),
                                                  from: 0,
                                                }),
                                              k &&
                                                k[0] &&
                                                (0, R.tZ)(L, {
                                                  className: "barrage-wrap",
                                                  list: JSON.parse(
                                                    JSON.stringify(k)
                                                  ),
                                                  from: 4,
                                                }),
                                              k &&
                                                k[0] &&
                                                (0, R.tZ)(F, {
                                                  className: "barrage-wrap",
                                                  list: JSON.parse(
                                                    JSON.stringify(k)
                                                  ),
                                                  from: 8,
                                                }),
                                              k &&
                                                k[0] &&
                                                (0, R.tZ)(O, {
                                                  className: "barrage-wrap",
                                                  list: JSON.parse(
                                                    JSON.stringify(k)
                                                  ),
                                                  from: 12,
                                                }),
                                            ],
                                          }),
                                          (0, R.tZ)(v.View, {
                                            class: "btn-shadow",
                                            style: "z-index: 10",
                                            children: (0, R.BX)(v.View, {
                                              class: "btn-box",
                                              children: [
                                                (0, R.tZ)(v.View, {
                                                  children: (0, R.tZ)(
                                                    v.Icon,
                                                    {}
                                                  ),
                                                }),
                                                (0, R.tZ)(v.Text, {
                                                  className: "txt3",
                                                  children: "邀请好友解锁",
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ((b && 2 === Z.status && 3 !== V) || W) &&
                                      (0, R.BX)(v.View, {
                                        className: "page3",
                                        children: [
                                          (0, R.tZ)(v.Icon, {
                                            className: "zhezhao-bai",
                                          }),
                                          (0, R.tZ)(v.Icon, {
                                            className: "am-guang",
                                          }),
                                          ue &&
                                            (0, R.tZ)(v.View, {
                                              className: "renzheng",
                                            }),
                                          !ue &&
                                            (0, R.BX)(v.View, {
                                              className: "approve-name",
                                              id: "AeEX",
                                              onClick: this.showVaifyModal,
                                              children: [
                                                (0, R.tZ)(v.Icon, {
                                                  className: "icon-approve",
                                                }),
                                                (0, R.tZ)(v.Text, {
                                                  children: "待认证",
                                                }),
                                              ],
                                            }),
                                          (0, R.tZ)(v.View, {
                                            className: "top-img3",
                                            children: (0, R.tZ)(v.Image, {
                                              src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/top-img3.png",
                                            }),
                                          }),
                                          (0, R.BX)(v.View, {
                                            className: "quanyi-box",
                                            children: [
                                              (0, R.BX)(v.View, {
                                                className: "quanyi-tit",
                                                children: [
                                                  (0, R.tZ)(v.Image, {
                                                    src: J
                                                      ? "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/ty-tit.png"
                                                      : "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/zx-tit.png",
                                                  }),
                                                  (0, R.tZ)(v.Text, {
                                                    children:
                                                      "为大学生定制的专属出行服务",
                                                  }),
                                                ],
                                              }),
                                              (0, R.BX)(v.View, {
                                                className: "card2",
                                                children: [
                                                  (0, R.tZ)(v.View, {
                                                    className: J
                                                      ? "card-logo-ty"
                                                      : "card-logo-zx",
                                                  }),
                                                  (0, R.tZ)(v.Icon, {
                                                    className: "card-txt",
                                                  }),
                                                  (0, R.tZ)(v.Icon, {
                                                    className: "card-zs",
                                                  }),
                                                ],
                                              }),
                                              (0, R.BX)(v.View, {
                                                className: "decorate-box",
                                                children: [
                                                  (0, R.tZ)(v.View, {
                                                    className: "tit-box",
                                                    children: (0, R.BX)(
                                                      v.Text,
                                                      {
                                                        children: [
                                                          "出行卡权益价值",
                                                          me,
                                                          "元",
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  (0, R.BX)(v.View, {
                                                    className: "rights-list",
                                                    children: [
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon1.png",
                                                            id: "AeEY",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showTrainHalfDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children: "最低5折",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "火车学生票",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon2.png",
                                                            id: "AeEZ",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showTrainHighSpeedDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值120元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "火车高速抢票",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon3.png",
                                                            id: "AeEa",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showPriorityDraftDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值40元",
                                                          }),
                                                          (0, R.BX)(v.View, {
                                                            children: [
                                                              "火车",
                                                              T.Z
                                                                .PRIORITY_TICKET,
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon4.png",
                                                            id: "AeEb",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showGoldFingerDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值200元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "抢票金手指",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon5.png",
                                                            id: "AeEc",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showFlightDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值70元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "机票礼包",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon6.png",
                                                            id: "AeEd",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showHotelDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值70元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "酒店礼包",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon7.png",
                                                            id: "AeEe",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showBusDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值18元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "汽车礼包",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(v.View, {
                                                        class: "li",
                                                        children: [
                                                          (0, R.tZ)(v.Image, {
                                                            src: "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/icon8.png",
                                                            id: "AeEf",
                                                            onClick:
                                                              this.openDialog,
                                                            "data-dialog":
                                                              "showTicketDialog",
                                                          }),
                                                          (0, R.tZ)(v.Text, {
                                                            children:
                                                              "价值60元",
                                                          }),
                                                          (0, R.tZ)(v.View, {
                                                            children:
                                                              "门票礼包",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, R.tZ)(v.View, {
                                                className: "decorate-btm",
                                              }),
                                              (0, R.BX)(v.View, {
                                                className: "decorate-box fuli",
                                                children: [
                                                  (0, R.tZ)(v.View, {
                                                    className: "tit-box",
                                                    children: (0, R.tZ)(
                                                      v.Text,
                                                      {
                                                        children:
                                                          "学生专属品牌福利",
                                                      }
                                                    ),
                                                  }),
                                                  le.showGiftsModule &&
                                                    (0, R.BX)(v.Block, {
                                                      children: [
                                                        (0, R.tZ)(v.View, {
                                                          className: "tips",
                                                          children:
                                                            "不定期更新,领卡成功后即可领取以下福利",
                                                        }),
                                                        (0, R.tZ)(v.View, {
                                                          className: "fuli-box",
                                                          children:
                                                            le.giftsList.map(
                                                              function (e) {
                                                                return (0,
                                                                R.BX)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "item",
                                                                    children: [
                                                                      (0, R.tZ)(
                                                                        v.Image,
                                                                        {
                                                                          src: e.imgUrl,
                                                                        }
                                                                      ),
                                                                      (0, R.tZ)(
                                                                        v.View,
                                                                        {
                                                                          children:
                                                                            e.title,
                                                                        }
                                                                      ),
                                                                      (0, R.tZ)(
                                                                        v.View,
                                                                        {
                                                                          children:
                                                                            e.text,
                                                                        }
                                                                      ),
                                                                    ],
                                                                  },
                                                                  e.title
                                                                );
                                                              }
                                                            ),
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                              (0, R.tZ)(v.View, {
                                                className: "decorate-btm",
                                              }),
                                              (0, R.BX)(v.View, {
                                                className: "decorate-box rk",
                                                children: [
                                                  (0, R.tZ)(v.View, {
                                                    className: "tit-box",
                                                    children: (0, R.tZ)(
                                                      v.Text,
                                                      {
                                                        children:
                                                          "如何查看学生卡权益",
                                                      }
                                                    ),
                                                  }),
                                                  (0, R.tZ)(v.View, {
                                                    className: "jieshao",
                                                    children: (0, R.tZ)(
                                                      v.Image,
                                                      {
                                                        class: "zx",
                                                        src: J
                                                          ? "https://images3.c-ctrip.com/zt/0yingxiao/xueshengka/ty-js.png"
                                                          : "https://images3.c-ctrip.com/zt/activity/20200926-newStudentGift/zx-js.png",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, R.tZ)(v.View, {
                                                className: "decorate-btm",
                                              }),
                                              (0, R.tZ)(v.View, {
                                                class: "btn-shadow",
                                                children: (0, R.tZ)(v.Button, {
                                                  class: "btn-box",
                                                  id: "AeEg",
                                                  onClick:
                                                    this.oPrivateBtnClick,
                                                  children: (0, R.BX)(v.Block, {
                                                    children: [
                                                      (0, R.tZ)(v.View, {
                                                        children: (0, R.tZ)(
                                                          v.Icon,
                                                          {}
                                                        ),
                                                      }),
                                                      (0, R.tZ)(v.Text, {
                                                        className: "txt3",
                                                        children: "立即使用",
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                          ge &&
                                            (0, R.tZ)(v.View, {
                                              className: "shadow",
                                              children: (0, R.BX)(v.View, {
                                                className: "pop-botm pop-verif",
                                                children: [
                                                  (0, R.tZ)(v.Icon, {
                                                    className: "icon-closed",
                                                    id: "AeEh",
                                                    onClick: this.closeDialog,
                                                    "data-dialog":
                                                      "showApprovalDialog",
                                                  }),
                                                  (0, R.tZ)(v.View, {
                                                    className: "tit",
                                                  }),
                                                  (0, R.tZ)(v.View, {
                                                    className: "txt",
                                                    children:
                                                      "学生权益需认证学生身份后方可享受 ",
                                                  }),
                                                  (0, R.tZ)(v.View, {
                                                    className: "btn-box-verify",
                                                    children: (0, R.tZ)(
                                                      v.View,
                                                      {
                                                        className: "cont",
                                                        children: (0, R.BX)(
                                                          v.View,
                                                          {
                                                            className:
                                                              "btn-submit-verify",
                                                            children: [
                                                              (0, R.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "btn-tit",
                                                                  id: "AeEi",
                                                                  onClick:
                                                                    this
                                                                      .oPrivateBtnClick,
                                                                  children:
                                                                    "去认证",
                                                                }
                                                              ),
                                                              (0, R.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "desc",
                                                                  children:
                                                                    "认证后还有机会得智行90天铂金会员",
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, R.tZ)(v.View, {
                                                    className: "info",
                                                    children:
                                                      "*若学校信息与副卡不一致，则无法购票",
                                                  }),
                                                ],
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
                    })(Z.default.Component))
                  ) || o)
              ) || o;
          (W.enableShareAppMessage = !0),
            Page(
              (0, l.createPageConfig)(
                W,
                "pages/activity/train/newStudentGift/studentGift",
                { root: { cn: [] } },
                { navigationStyle: "custom", backgroundColor: "#1C1614" } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [24945, 83805, 51355, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(996);
        }),
          e.O();
      },
    ]);
})();
