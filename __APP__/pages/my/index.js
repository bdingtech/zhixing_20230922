!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [82825],
    {
      25182: function (e, i, t) {
        var n,
          l = t(32180),
          a = t(79301),
          r = t(95308),
          c = t(298),
          o = t(57042),
          s = t(24460),
          u = t(81876),
          d = t(21867),
          m = t(86066),
          p = t(45023),
          g = t(52500),
          h = (t(92954), t(71515)),
          f = t(32297),
          v = t(81957),
          Z = t(79910),
          w = t(13025),
          y = t(79792),
          N = t(81341),
          x = t(91377),
          b = t(48813),
          k = {
            0: "normal",
            10: "baiYin",
            20: "gold",
            30: "boJin",
            40: "black",
          },
          V = {
            0: "normal-txt",
            10: "baiYIn-txt",
            20: "gold-txt",
            30: "boJin-txt",
            40: "black-txt",
          },
          U = g.default.memo(function (e) {
            var i,
              t,
              n,
              l,
              a,
              r,
              c,
              o,
              s = e.data,
              u = e.onClick,
              d = e.ubtTrace,
              m = e.memberType;
            if (!s) return (0, b.tZ)(h.View, {});
            var p = k[null == s ? void 0 : s.grade] || "normal",
              g = V[null == s ? void 0 : s.grade] || "normal-txt";
            return (0, b.BX)(h.View, {
              className: "my-page-vip",
              id: "AUAI",
              onClick: function () {
                d("VIP_button_click"),
                  u(
                    m
                      ? "https://".concat(
                          y.default.h5domain,
                          "/ztrip/webapp/ztrip-member/myMember?isHideNavBar=YES&isImmersiveMode=YES"
                        )
                      : "/pages/usercenter/member/member"
                  );
              },
              children: [
                (0, b.BX)(h.View, {
                  className: "content ".concat(p),
                  children: [
                    (0, b.BX)(h.View, {
                      className: "vip-detail flex-align-items-center",
                      children: [
                        (0, b.BX)(h.View, {
                          className: "flex-1",
                          children: [
                            (0, b.BX)(h.View, {
                              className: "flex-align-items-center",
                              children: [
                                (0, b.tZ)(h.Image, {
                                  src: null == s ? void 0 : s.icon,
                                  className: "vip-icon",
                                }),
                                (0, b.tZ)(h.View, {
                                  className: "grade-name ".concat(g),
                                  children: null == s ? void 0 : s.gradeName,
                                }),
                              ],
                            }),
                            !(null == s || !s.buttonTitle) &&
                              (0, b.tZ)(h.View, {
                                className: "vip-desc ".concat(g),
                                children: null == s ? void 0 : s.buttonTitle,
                              }),
                          ],
                        }),
                        (null == s ||
                        null === (i = s.centerVipInfoEntity) ||
                        void 0 === i ||
                        null === (t = i.moreCenterVipRightsList) ||
                        void 0 === t
                          ? void 0
                          : t.length) > 0 &&
                          (0, b.tZ)(h.Swiper, {
                            autoplay: !0,
                            vertical: !0,
                            className: "rights-swiper",
                            interval: 3e3,
                            circular: !0,
                            children:
                              null == s ||
                              null === (n = s.centerVipInfoEntity) ||
                              void 0 === n ||
                              null === (l = n.moreCenterVipRightsList) ||
                              void 0 === l
                                ? void 0
                                : l.map(function (e, i) {
                                    var t;
                                    return (0, b.tZ)(
                                      h.SwiperItem,
                                      {
                                        children: (0, b.tZ)(h.View, {
                                          className: "flex swiper-item",
                                          children:
                                            null == e ||
                                            null === (t = e.dataList) ||
                                            void 0 === t
                                              ? void 0
                                              : t.map(function (e) {
                                                  return (0,
                                                  b.BX)(h.View, { className: "right", children: [(0, b.tZ)(h.Image, { src: null == e ? void 0 : e.icon, className: "more-rights-icon" }), (0, b.tZ)(h.Text, { className: "rights-name ".concat(g), children: null == e ? void 0 : e.name })] }, null == e ? void 0 : e.name);
                                                }),
                                        }),
                                      },
                                      "right_swiper_".concat(i)
                                    );
                                  }),
                          }),
                        (0, b.tZ)(h.Image, {
                          className: "arrow",
                          src:
                            (null == s ? void 0 : s.buttonIcon) ||
                            "https://images3.c-ctrip.com/ztrip/train_bin/12yue/gerenzhongxin/icon_me_huangjin_kapian_jiantou@3x.png",
                        }),
                      ],
                    }),
                    (0, b.tZ)(h.View, { className: "line ".concat(p) }),
                    (null == s ||
                    null === (a = s.carouselEntitys) ||
                    void 0 === a
                      ? void 0
                      : a.length) > 0 &&
                      (0, b.tZ)(h.View, {
                        className: "more-Entity",
                        children: (0, b.tZ)(h.Swiper, {
                          autoplay: !0,
                          vertical: !0,
                          className: "more-swiper",
                          interval: 5e3,
                          circular: !0,
                          children:
                            null == s ||
                            null === (r = s.carouselEntitys) ||
                            void 0 === r
                              ? void 0
                              : r.map(function (e, i) {
                                  return (0,
                                  b.BX)(h.SwiperItem, { className: "more-item flex-align-items-center", children: [!(null == e || !e.iconUrl) && (0, b.tZ)(h.Image, { src: null == e ? void 0 : e.iconUrl, className: "more-icon" }), (0, b.tZ)(h.View, { className: "more-name flex-1 ".concat(g), children: null == e ? void 0 : e.title }), (0, b.tZ)(h.View, { className: "more-btn flex-center ".concat(p), children: null == e ? void 0 : e.buttonTitle })] }, "more_right_".concat(i));
                                }),
                        }),
                      }),
                  ],
                }),
                (null == s || null === (c = s.jumpCards) || void 0 === c
                  ? void 0
                  : c.length) > 0 &&
                  y.default.isWechat &&
                  (0, b.tZ)(h.View, {
                    className: "activity ".concat(p),
                    children: (0, b.tZ)(h.Swiper, {
                      className: "activity-swiper",
                      autoplay: !0,
                      vertical: !0,
                      interval: 4e3,
                      circular: !0,
                      children:
                        null == s || null === (o = s.jumpCards) || void 0 === o
                          ? void 0
                          : o.map(function (e, i) {
                              return (0, b.tZ)(
                                h.SwiperItem,
                                {
                                  children: (0, b.BX)(h.View, {
                                    className: "flex-align-items-center card-c",
                                    id: "AUAJ",
                                    onClick: function (i) {
                                      i.stopPropagation(),
                                        (null == e ? void 0 : e.jumpUrl) &&
                                          u(null == e ? void 0 : e.jumpUrl);
                                    },
                                    children: [
                                      (0, b.tZ)(h.Image, {
                                        src: null == e ? void 0 : e.icon,
                                        className: "icon",
                                      }),
                                      (0, b.tZ)(h.View, {
                                        className: "flex-1 txt "
                                          .concat(g, " ")
                                          .concat(p),
                                        children: null == e ? void 0 : e.title,
                                      }),
                                      (0, b.tZ)(h.Image, {
                                        className: "arrow",
                                        src:
                                          (null == s ? void 0 : s.buttonIcon) ||
                                          "https://images3.c-ctrip.com/ztrip/train_bin/12yue/gerenzhongxin/icon_me_huangjin_kapian_jiantou@3x.png",
                                      }),
                                    ],
                                  }),
                                },
                                "jump-card-".concat(i)
                              );
                            }),
                    }),
                  }),
              ],
            });
          }),
          _ = g.default.memo(function (e) {
            var i = e.list,
              t = e.onClick,
              n = e.ubtTrace;
            return null != i && i.length
              ? (0, b.tZ)(h.View, {
                  className: "my-page-activity flex-align-items-center",
                  children: i.map(function (e, l) {
                    return (0, b.BX)(
                      h.Block,
                      {
                        children: [
                          (0, b.BX)(h.View, {
                            className: "flex-align-items-center flex-1",
                            id: "AUAA",
                            onClick: function () {
                              n(
                                (null == e
                                  ? void 0
                                  : e.title.indexOf("学生专区")) > -1
                                  ? "student_area_click"
                                  : "point_center_click"
                              ),
                                (null == e ? void 0 : e.url) &&
                                  t(null == e ? void 0 : e.url);
                            },
                            children: [
                              (0, b.BX)(h.View, {
                                className: "flex-1",
                                children: [
                                  (0, b.tZ)(h.Text, {
                                    className: "title",
                                    children: null == e ? void 0 : e.title,
                                  }),
                                  (0, b.BX)(h.View, {
                                    className: "flex-align-items-center",
                                    children: [
                                      (0, b.tZ)(h.Text, {
                                        className: "desc",
                                        children: null == e ? void 0 : e.desc,
                                      }),
                                      (0, b.tZ)(h.Text, {
                                        className: "iconfont ifont-more arrow",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, b.tZ)(h.Image, {
                                className: "icon",
                                src: null == e ? void 0 : e.icon,
                              }),
                            ],
                          }),
                          l !== i.length - 1 &&
                            (0, b.tZ)(h.View, { className: "line" }),
                        ],
                      },
                      null == e ? void 0 : e.title
                    );
                  }),
                })
              : (0, b.tZ)(h.View, {});
          }),
          T = t(90129),
          C = g.default.memo(function (e) {
            var i = e.list,
              t = e.onClick,
              n = e.judgeConditions,
              l = e.ubtTrace,
              a = (0, g.useState)([]),
              r = (0, T.Z)(a, 2),
              o = r[0],
              s = r[1];
            if (
              ((0, g.useEffect)(
                function () {
                  if ((null == i ? void 0 : i.length) > 0) {
                    var e = i.map(function (e) {
                        return null != e && e.isNeedOtherJudge
                          ? null != e &&
                            e.isNeedOtherJudge &&
                            "有奖反馈" === (null == e ? void 0 : e.title)
                            ? null != n && n.isShowQuestionEntry
                              ? (0, c.Z)(
                                  (0, c.Z)({}, e),
                                  {},
                                  {
                                    url:
                                      null == n
                                        ? void 0
                                        : n.questionEntryJUmpUrl,
                                  }
                                )
                              : null
                            : null != e &&
                              e.isNeedOtherJudge &&
                              "智行福利官" === (null == e ? void 0 : e.title) &&
                              y.default.isWechat
                            ? e
                            : null
                          : e;
                      }),
                      t =
                        null == e
                          ? void 0
                          : e.filter(function (e) {
                              return !!e;
                            });
                    s(t);
                  }
                },
                [i, n]
              ),
              null == o || !o.length)
            )
              return (0, b.tZ)(h.View, {});
            if ((null == o ? void 0 : o.length) <= 8)
              return (0, b.tZ)(h.View, {
                className: "my-page-random-activity",
                children:
                  null == o
                    ? void 0
                    : o.map(function (e, i) {
                        return (0, b.BX)(
                          h.View,
                          {
                            className: "item flex-center",
                            id: "AUAG",
                            onClick: function () {
                              l("events_area".concat(i + 1, "_click")),
                                (null == e ? void 0 : e.url) &&
                                  t(null == e ? void 0 : e.url);
                            },
                            children: [
                              (0, b.tZ)(h.Image, {
                                className: "icon",
                                src: null == e ? void 0 : e.icon,
                              }),
                              (0, b.tZ)(h.View, {
                                className: "name",
                                children: null == e ? void 0 : e.title,
                              }),
                            ],
                          },
                          null == e ? void 0 : e.title
                        );
                      }),
              });
            var u = (function () {
              for (var e = 0, i = []; e < o.length; )
                i.push(o.slice(e, (e += 2)));
              return i;
            })();
            return (0, b.tZ)(h.View, {
              className: "my-page-random-activity scroll",
              children:
                null == u
                  ? void 0
                  : u.map(function (e, i) {
                      return (0, b.tZ)(
                        h.View,
                        {
                          className: "group-item",
                          children:
                            null == e
                              ? void 0
                              : e.map(function (e) {
                                  return (0, b.BX)(
                                    h.View,
                                    {
                                      className: "scroll-item  flex-center",
                                      id: "AUAH",
                                      onClick: function () {
                                        l(
                                          "events_area".concat(i + 1, "_click")
                                        ),
                                          (null == e ? void 0 : e.url) &&
                                            t(null == e ? void 0 : e.url);
                                      },
                                      children: [
                                        (0, b.tZ)(h.Image, {
                                          className: "icon",
                                          src: null == e ? void 0 : e.icon,
                                        }),
                                        (0, b.tZ)(h.View, {
                                          className: "name",
                                          children:
                                            null == e ? void 0 : e.title,
                                        }),
                                      ],
                                    },
                                    null == e ? void 0 : e.title
                                  );
                                }),
                        },
                        "group_index_".concat(i)
                      );
                    }),
            });
          }),
          A = g.default.memo(function (e) {
            var i = e.data,
              t = e.onClick,
              n = e.ubtTrace,
              l = i.isInGroup,
              a = i.isWechatFriend,
              r = i.isOfficialFlow,
              c = i.friendUrl,
              o = i.groupUrl,
              s = i.officialUrl;
            return (0, b.BX)(h.View, {
              className: "my-page-wechat-entry",
              children: [
                (0, b.BX)(h.View, {
                  className: "item",
                  id: "AUAB",
                  onClick: function () {
                    n("task_area1_click"), !r && t(s);
                  },
                  children: [
                    (0, b.tZ)(h.Image, {
                      className: "icon",
                      src: "https://images3.c-ctrip.com/ztrip/train_bin/12yue/gerenzhongxin/gongneng/icon_me_weixin@3x.png",
                    }),
                    (0, b.BX)(h.View, {
                      className: "flex-1",
                      children: [
                        (0, b.tZ)(h.View, {
                          className: "title",
                          children: "关注微信公众号",
                        }),
                        (0, b.tZ)(h.View, {
                          className: "desc",
                          children: "出行通知贴心服务",
                        }),
                      ],
                    }),
                    (0, b.tZ)(h.View, {
                      className: "btn-txt",
                      children: r ? "已开启" : "去开启",
                    }),
                    (0, b.tZ)(h.Text, {
                      className: "iconfont arrow ifont-more",
                    }),
                  ],
                }),
                !y.default.isTieyou &&
                  (0, b.BX)(h.View, {
                    className: "item",
                    id: "AUAC",
                    onClick: function () {
                      n("task_area2_click"), !a && t(c);
                    },
                    children: [
                      (0, b.tZ)(h.Image, {
                        className: "icon",
                        src: "https://images3.c-ctrip.com/ztrip/train_bin/22-01/icon_me_qiwei_b@3x.png",
                      }),
                      (0, b.BX)(h.View, {
                        className: "flex-1",
                        children: [
                          (0, b.tZ)(h.View, {
                            className: "title",
                            children: "添加福利官",
                          }),
                          (0, b.tZ)(h.View, {
                            className: "desc",
                            children: "领特惠价、优惠券及第一手福利",
                          }),
                        ],
                      }),
                      (0, b.tZ)(h.View, {
                        className: "btn-txt",
                        children: a ? "已开启" : "去开启",
                      }),
                      (0, b.tZ)(h.Text, {
                        className: "iconfont arrow ifont-more",
                      }),
                    ],
                  }),
                !y.default.isTieyou &&
                  (0, b.BX)(h.View, {
                    className: "item",
                    id: "AUAD",
                    onClick: function () {
                      n("task_area3_click"), !l && t(o);
                    },
                    children: [
                      (0, b.tZ)(h.Image, {
                        className: "icon",
                        src: "https://images3.c-ctrip.com/ztrip/train_bin/12yue/gerenzhongxin/gongneng/icon_me_gongneng_fuli2@3x.png",
                      }),
                      (0, b.BX)(h.View, {
                        className: "flex-1",
                        children: [
                          (0, b.tZ)(h.View, {
                            className: "title",
                            children: "官方福利群",
                          }),
                          (0, b.tZ)(h.View, {
                            className: "desc",
                            children: "加入立享官方福利",
                          }),
                        ],
                      }),
                      (0, b.tZ)(h.View, {
                        className: "btn-txt",
                        children: l ? "已开启" : "去开启",
                      }),
                      (0, b.tZ)(h.Text, {
                        className: "iconfont arrow ifont-more",
                      }),
                    ],
                  }),
              ],
            });
          }),
          S = function (e) {
            return e ? e.substr(0, 3) + "****" + e.substr(7) : "";
          },
          I = g.default.memo(function (e) {
            var i = e.onClose,
              t = e.data,
              n = e.navigateTo;
            return t
              ? (0, b.BX)(h.View, {
                  className: "my-page-wechat-float",
                  id: "AUAE",
                  onClick: function () {
                    return (
                      (null == t ? void 0 : t.jumpUrl) && n({ url: t.jumpUrl })
                    );
                  },
                  children: [
                    (0, b.tZ)(h.Image, {
                      className: "money-1",
                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ybq@3x.png",
                    }),
                    (0, b.tZ)(h.Image, {
                      className: "money-2",
                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/zbjb@3x.png",
                    }),
                    (0, b.BX)(h.View, {
                      className: "float-bg",
                      children: [
                        (0, b.tZ)(h.View, {
                          className: "title",
                          children: null == t ? void 0 : t.title,
                        }),
                        (0, b.tZ)(h.View, {
                          className: "desc",
                          children: null == t ? void 0 : t.desc,
                        }),
                      ],
                    }),
                    (0, b.tZ)(h.View, {
                      className: "btn",
                      children: null == t ? void 0 : t.button,
                    }),
                    (0, b.tZ)(h.Image, {
                      id: "AUAF",
                      onClick: function (e) {
                        e.stopPropagation(), i();
                      },
                      className: "close",
                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/gbxan@3x.png",
                    }),
                  ],
                })
              : (0, b.tZ)(h.View, {});
          }),
          B = t(21317),
          E = t(57531),
          W = (0, E.Z)(B.Z),
          F = t(23335),
          X = (0, E.Z)(F.Z),
          z =
            (0, v.h)(!1, { usePageWrapper: !0 })(
              (n = (function (e) {
                (0, d.Z)(t, e);
                var i = (0, m.Z)(t);
                function t(e) {
                  var n;
                  return (
                    (0, o.Z)(this, t),
                    (n = i.call(this, e)),
                    (0, p.Z)(
                      (0, u.Z)(n),
                      "pageId",
                      y.default.isTieyou ? "10650080863" : "10650078849"
                    ),
                    (0, p.Z)((0, u.Z)(n), "pageRootClassName", "my-page"),
                    (0, p.Z)(
                      (0, u.Z)(n),
                      "requestUserCenterVipInfo",
                      function () {
                        (0, w.ZO)({ isNewVersion: "1" })
                          .then(function (e) {
                            1 === (null == e ? void 0 : e.resultCode) &&
                            null != e &&
                            e.userCenterVipEntity
                              ? n.setState({
                                  userCenterVipEntity:
                                    null == e ? void 0 : e.userCenterVipEntity,
                                  gradeType: null == e ? void 0 : e.gradeType,
                                })
                              : n.setState({
                                  userCenterVipEntity: {},
                                  gradeType: 0,
                                });
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      }
                    ),
                    (0, p.Z)(
                      (0, u.Z)(n),
                      "getShowEntranceForQuestionaire",
                      function () {
                        (0, w.zT)()
                          .then(function (e) {
                            var i;
                            1 === (null == e ? void 0 : e.resultCode)
                              ? n.setState({
                                  isShowQuestionEntry: !0,
                                  questionEntryJUmpUrl:
                                    (null == e ||
                                    null === (i = e.data) ||
                                    void 0 === i
                                      ? void 0
                                      : i.linkUrl) || "",
                                })
                              : n.setState({
                                  isShowQuestionEntry: !1,
                                  questionEntryJUmpUrl: "",
                                });
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      }
                    ),
                    (0, p.Z)(
                      (0, u.Z)(n),
                      "requestZtripWechatPartnerStatus",
                      function () {
                        var e = {
                          isInGroup: !1,
                          isWechatFriend: !1,
                          isOfficialFlow: !1,
                          friendUrl: "",
                          groupUrl: "",
                          officialUrl: "",
                          isShowCompanyWechatFloat: !1,
                        };
                        if (f.Z.isLogin && y.default.isWechat) {
                          (0, w._S)(
                            {
                              source: "miniPsCtrTask",
                              pageKey: "miniPsCtrTask",
                            },
                            { checkFrameworkLogin: !0 }
                          )
                            .then(function (i) {
                              1 === (null == i ? void 0 : i.resultCode)
                                ? n.setState({
                                    isInGroup: !(null == i || !i.isInGroup),
                                    isWechatFriend: !(
                                      null == i || !i.isWechatFriend
                                    ),
                                    isOfficialFlow: !(
                                      null == i || !i.isOfficialFlow
                                    ),
                                    friendUrl: null == i ? void 0 : i.friendUrl,
                                    groupUrl: null == i ? void 0 : i.groupUrl,
                                    officialUrl:
                                      null == i ? void 0 : i.officialUrl,
                                    isShowCompanyWechatFloat:
                                      y.default.isWechat &&
                                      !y.default.isTieyou &&
                                      !(null != i && i.isWechatFriend),
                                  })
                                : n.setState((0, c.Z)({}, e));
                            })
                            .catch(function () {});
                        } else n.setState((0, c.Z)({}, e));
                      }
                    ),
                    (0, p.Z)((0, u.Z)(n), "clickHead", function () {
                      n.ubtTrace("head_button_click"),
                        f.Z.isLogin
                          ? y.default.isWechat &&
                            n.navigateTo({
                              url: "/pages/usercenter/userInfo/index",
                            })
                          : n.login();
                    }),
                    (0, p.Z)((0, u.Z)(n), "checkClickWithLogin", function (e) {
                      f.Z.isLogin
                        ? "string" == typeof e
                          ? e && Z.Z.commonNavigator(e)
                          : "function" == typeof e && e && e()
                        : n.login();
                    }),
                    (0, p.Z)((0, u.Z)(n), "login", function () {
                      f.Z.doLogin().then(
                        function () {},
                        function () {
                          console.log("取消登录");
                        }
                      );
                    }),
                    (n.state = {
                      userCenterVipEntity: {},
                      normalActivityModule: [],
                      regularActivityModule: [],
                      isShowQuestionEntry: !1,
                      questionEntryJUmpUrl: "",
                      isInGroup: !1,
                      isWechatFriend: !1,
                      isOfficialFlow: !1,
                      friendUrl: "",
                      groupUrl: "",
                      officialUrl: "",
                      isShowCompanyWechatFloat: !1,
                      floatDialogData: null,
                      gradeType: 0,
                      popType: "",
                    }),
                    n
                  );
                }
                return (
                  (0, s.Z)(t, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        this.getActivitiesConfig(),
                          this.setPageBackgroundImage(
                            "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/img_grzx_bg@2x.png"
                          );
                      },
                    },
                    {
                      key: "renderHeaderView",
                      value: function () {
                        var e = this,
                          i = (0, b.tZ)(h.Image, {
                            id: "AUAK",
                            src: "https://images3.c-ctrip.com/ztrip/train_bin/22-12/me/btn_me_set_b@3x.png",
                            className: "set",
                            onClick: function () {
                              e.navigateTo({
                                url: "/pages/usercenter/management/index",
                              });
                            },
                          });
                        return (0, b.BX)(h.View, {
                          style: { height: "44px" },
                          className: "real-header",
                          children: [
                            y.default.isAlipay
                              ? (0, b.tZ)(h.View, { className: "hd-left" })
                              : i,
                            (0, b.tZ)(h.Text, {
                              className: "title-txt",
                              children: "我的",
                            }),
                            y.default.isAlipay && i,
                          ],
                        });
                      },
                    },
                    {
                      key: "componentDidShow",
                      value: function () {
                        this.requestUserCenterVipInfo(),
                          this.getShowEntranceForQuestionaire(),
                          this.requestZtripWechatPartnerStatus(),
                          this.handlePopModal();
                      },
                    },
                    {
                      key: "handlePopModal",
                      value: (function () {
                        var e = (0, r.Z)(
                          (0, a.Z)().mark(function e() {
                            var i, t;
                            return (0, a.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        this.requestMemberUpgrade()
                                      );
                                    case 2:
                                      if (
                                        ((i = e.sent),
                                        (t = this.state.popType) ||
                                          0 !== i ||
                                          N.Ll.get())
                                      ) {
                                        e.next = 8;
                                        break;
                                      }
                                      return (
                                        this.setState({
                                          popType: "newSystemMember",
                                        }),
                                        N.Ll.set(!0),
                                        e.abrupt("return")
                                      );
                                    case 8:
                                      if (t || !i || N.ik.get() === i) {
                                        e.next = 12;
                                        break;
                                      }
                                      return (
                                        this.setState({
                                          popType: "upgradeMember",
                                        }),
                                        N.ik.set(i),
                                        e.abrupt("return")
                                      );
                                    case 12:
                                      this.setState({ popType: "" });
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
                      key: "getActivitiesConfig",
                      value: function () {
                        var e,
                          i,
                          t = (0, x.gL)("my-page-activities") || {},
                          n = (0, x.gL)("my-page-float-dialog") || {},
                          l = y.default.isTieyou ? "tieyou" : "zhixing",
                          a =
                            (null == t || null === (e = t[l]) || void 0 === e
                              ? void 0
                              : e.normalActivityModule) || [];
                        y.default.isWechat ||
                          (a = a.filter(function (e) {
                            return (
                              "学生专区" !== (null == e ? void 0 : e.title)
                            );
                          })),
                          this.setState({
                            normalActivityModule: a,
                            regularActivityModule:
                              (null == t || null === (i = t[l]) || void 0 === i
                                ? void 0
                                : i.regularActivityModule) || [],
                            floatDialogData: null == n ? void 0 : n[l],
                          });
                      },
                    },
                    {
                      key: "requestMemberUpgrade",
                      value: function () {
                        return new Promise(function (e) {
                          (0, w.hc)({}, { checkFrameworkLogin: !1 })
                            .then(function (i) {
                              var t;
                              e(
                                null == i ||
                                  null ===
                                    (t = i.vipUpgradePackagePopWindowNative) ||
                                  void 0 === t
                                  ? void 0
                                  : t.grade
                              );
                            })
                            .catch(function () {
                              return e();
                            });
                        });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this,
                          i = this.state,
                          t = i.userCenterVipEntity,
                          n = i.gradeType,
                          l = i.normalActivityModule,
                          a = i.regularActivityModule,
                          r = i.isInGroup,
                          c = i.isWechatFriend,
                          o = i.isOfficialFlow,
                          s = i.friendUrl,
                          u = i.groupUrl,
                          d = i.officialUrl,
                          m = i.isShowCompanyWechatFloat,
                          p = i.floatDialogData,
                          g = i.isShowQuestionEntry,
                          v = i.questionEntryJUmpUrl,
                          Z = i.popType;
                        return (0, b.BX)(h.View, {
                          className: "my-page",
                          children: [
                            (0, b.tZ)(h.View, { className: "bg" }),
                            (0, b.BX)(h.View, {
                              className: "flex-align-items-center",
                              id: "AUAL",
                              onClick: this.clickHead,
                              children: [
                                (0, b.tZ)(h.Image, {
                                  className: "photo",
                                  src:
                                    (f.Z.isLogin &&
                                      (null === f.Z || void 0 === f.Z
                                        ? void 0
                                        : f.Z.avatarUrl)) ||
                                    (y.default.isTieyou
                                      ? "https://images3.c-ctrip.com/ztrip/train_bin/12yue/gerenzhongxin/gongneng/icon_me_touxiang2@3x.png"
                                      : "https://images3.c-ctrip.com/ztrip/train_bin/12yue/gerenzhongxin/gongneng/icon_me_touxiang@3x.png"),
                                }),
                                f.Z.isLogin
                                  ? (0, b.tZ)(h.Text, {
                                      className: "phone",
                                      children: S(
                                        null === f.Z || void 0 === f.Z
                                          ? void 0
                                          : f.Z.userName
                                      ),
                                    })
                                  : (0, b.tZ)(h.Text, {
                                      className: "login",
                                      children: "登录或注册",
                                    }),
                              ],
                            }),
                            (0, b.tZ)(U, {
                              data: t,
                              id: "AUAM",
                              onClick: this.checkClickWithLogin,
                              ubtTrace: this.ubtTrace,
                              memberType: n,
                            }),
                            (0, b.tZ)(_, {
                              list: l,
                              id: "AUAN",
                              onClick: this.checkClickWithLogin,
                              ubtTrace: this.ubtTrace,
                            }),
                            y.default.isWechat &&
                              (0, b.tZ)(C, {
                                list: a,
                                id: "AUAO",
                                onClick: this.checkClickWithLogin,
                                judgeConditions: {
                                  isShowQuestionEntry: g,
                                  questionEntryJUmpUrl: v,
                                },
                                ubtTrace: this.ubtTrace,
                              }),
                            y.default.isWechat &&
                              !y.default.isTieyou &&
                              (0, b.tZ)(A, {
                                data: {
                                  isInGroup: r,
                                  isWechatFriend: c,
                                  isOfficialFlow: o,
                                  friendUrl: s,
                                  groupUrl: u,
                                  officialUrl: d,
                                },
                                id: "AUAP",
                                onClick: this.checkClickWithLogin,
                                ubtTrace: this.ubtTrace,
                              }),
                            m &&
                              (0, b.tZ)(I, {
                                data: p,
                                navigateTo: this.navigateTo,
                                onClose: function () {
                                  return e.setState({
                                    isShowCompanyWechatFloat: !1,
                                  });
                                },
                              }),
                            "newSystemMember" === Z &&
                              (0, b.tZ)(W, {
                                close: function () {
                                  return e.setState({ popType: "" });
                                },
                              }),
                            "upgradeMember" === Z &&
                              (0, b.tZ)(X, {
                                pageId: this.pageId,
                                close: function () {
                                  return e.setState({ popType: "" });
                                },
                              }),
                          ],
                        });
                      },
                    },
                  ]),
                  t
                );
              })(g.Component))
            ) || n;
        Page(
          (0, l.createPageConfig)(
            z,
            "pages/my/index",
            { root: { cn: [] } },
            {
              navigationBarBackgroundColor: "#fff",
              backgroundColorTop: "#EFEFEF",
              navigationBarTitleText: "我的",
              navigationBarTextStyle: "black",
              navigationStyle: "custom",
            } || {}
          )
        );
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (i) {
          return e((e.s = i));
        })(25182);
      }),
        e.O();
    },
  ]);
})();
