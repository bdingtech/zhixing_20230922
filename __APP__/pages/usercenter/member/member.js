!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [6145],
      {
        5353: function (e, n, t) {
          var i = t(32180),
            o = t(57042),
            r = t(24460),
            l = t(81876),
            a = t(21867),
            c = t(86066),
            s = t(45023),
            u = t(52500),
            d = t(71515),
            m = t(92954),
            f = t.n(m),
            h = t(79792),
            p = t(44778),
            v = t(65573),
            g = t(18783),
            w = t(81957),
            b = {
              name: "page",
              state: {},
              reducers: {
                set: function (e, n) {
                  return n;
                },
                clear: function () {
                  return {};
                },
              },
            },
            y = t(298),
            Z = t(49120),
            N = t(59163),
            V = {
              name: "vipGradeInfo",
              state: {
                currentGrade: 0,
                displayGrade: 0,
                experienceVipFlag: !1,
                isNewMember: !0,
                isShowRights: !1,
                vipInfoList: [],
                needRefresh: !0,
                isNewSystem: !1,
                isShowNps: !1,
              },
              reducers: {
                set: function (e, n) {
                  return (0, y.Z)((0, y.Z)({}, e), n);
                },
                clear: function () {
                  return {};
                },
                setDisplayGrade: function (e, n) {
                  return (0, y.Z)(
                    (0, y.Z)({}, e),
                    {},
                    { displayGrade: Number(n) }
                  );
                },
                setIsShowRights: function (e, n) {
                  return (0, y.Z)((0, y.Z)({}, e), {}, { isShowRights: n });
                },
                setCurrentGrade: function (e, n) {
                  return (0, y.Z)((0, y.Z)({}, e), {}, { currentGrade: n });
                },
                setNeedRefresh: function (e, n) {
                  return (0, y.Z)((0, y.Z)({}, e), {}, { needRefresh: n });
                },
              },
              effects: function (e) {
                return {
                  requestVipDetailInfo: function (n) {
                    var t,
                      i =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    null != i &&
                    null !== (t = i.vipGradeInfo) &&
                    void 0 !== t &&
                    t.needRefresh
                      ? ((0, Z.showLoading)(),
                        (0, N.tb)(
                          {},
                          { checkLogin: !1, checkFrameworkLogin: !1 }
                        )
                          .then(function (n) {
                            if (
                              ((0, Z.hideLoading)(),
                              1 === (null == n ? void 0 : n.resultCode))
                            )
                              return (
                                e.vipGradeInfo.set({
                                  currentGrade: null == n ? void 0 : n.grade,
                                  displayGrade: null == n ? void 0 : n.grade,
                                  vipInfoList:
                                    (null == n ? void 0 : n.vipInfoList) || [],
                                  experienceVipFlag:
                                    null == n ? void 0 : n.experienceVipFlag,
                                  isRmbVipFlag:
                                    null == n ? void 0 : n.isRmbVipFlag,
                                  isMonthCardFlag:
                                    2 ===
                                    (null == n ? void 0 : n.vipPeriodType),
                                  isNewMonthCardFlag:
                                    3 ===
                                    (null == n ? void 0 : n.vipPeriodType),
                                  isNotMonthOrNewMonthCardFlag:
                                    2 !==
                                      (null == n ? void 0 : n.vipPeriodType) ||
                                    3 !==
                                      (null == n ? void 0 : n.vipPeriodType),
                                }),
                                {
                                  grade: null == n ? void 0 : n.grade,
                                  isRmbVipFlag:
                                    null == n ? void 0 : n.isRmbVipFlag,
                                }
                              );
                            (0,
                            Z.showToast)((null == n ? void 0 : n.resultMessage) || "加载失败，请稍后重试！");
                          })
                          .then(function (n) {
                            var t = n.grade,
                              i = n.isRmbVipFlag;
                            e.beforeBuy.requestVipDetailBuyPackage({
                              grade: t,
                              isRmbVipFlag: i,
                            }),
                              e.afterBuy.requestVipCenterActivityInfo(t),
                              i &&
                                (e.afterBuy.requestGetVipRightProcess(),
                                e.afterBuy.requestHotelRecommend(),
                                e.refundMember.requestRenewCancelVipOrderInfos());
                          })
                          .catch(function (e) {
                            console.log(e), (0, Z.hideLoading)();
                          }))
                      : e.vipGradeInfo.set({ needRefresh: !0 });
                  },
                  changeGrade: function () {
                    var n,
                      t,
                      i =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      o =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      r = Number(i),
                      l =
                        null == o ||
                        null === (n = o.vipGradeInfo) ||
                        void 0 === n
                          ? void 0
                          : n.displayGrade,
                      a = [0, 10, 20, 30],
                      c = [40],
                      s =
                        null == o ||
                        null === (t = o.vipGradeInfo) ||
                        void 0 === t
                          ? void 0
                          : t.isRmbVipFlag;
                    ((a.some(function (e) {
                      return e === l;
                    }) &&
                      c.some(function (e) {
                        return e === r;
                      })) ||
                      (c.some(function (e) {
                        return e === l;
                      }) &&
                        a.some(function (e) {
                          return e === r;
                        }))) &&
                      e.beforeBuy.requestVipDetailBuyPackage({
                        grade: r,
                        isRmbVipFlag: s,
                      }),
                      e.vipGradeInfo.setDisplayGrade(Number(i));
                  },
                  requestVipNps: function () {
                    (0, N.wb)()
                      .then(function (n) {
                        e.vipGradeInfo.set({
                          isShowNps: null == n ? void 0 : n.disclose,
                        });
                      })
                      .catch(function (e) {
                        return console.log(e);
                      });
                  },
                };
              },
            },
            C = {
              name: "refundMember",
              state: {
                showBuyRecordList: !1,
                showRefundMemberPop: !1,
                recordItem: null,
                buyRecordEntity: null,
                refundMemberItem: null,
              },
              reducers: {
                setState: function (e, n) {
                  return (0, y.Z)((0, y.Z)({}, e), n);
                },
                clear: function () {
                  return {};
                },
                setIsShowBuyRecordList: function (e, n) {
                  return (0, y.Z)(
                    (0, y.Z)({}, e),
                    {},
                    { showBuyRecordList: n }
                  );
                },
                setShowRefundMemberPop: function (e, n) {
                  return (0, y.Z)(
                    (0, y.Z)({}, e),
                    {},
                    { showRefundMemberPop: n }
                  );
                },
                setRefundMemberItem: function (e, n) {
                  return (0, y.Z)((0, y.Z)({}, e), {}, { refundMemberItem: n });
                },
              },
              effects: function (e) {
                return {
                  requestRenewCancelVipOrderInfos: function () {
                    (0, N.O)({ source: 1 })
                      .then(function (n) {
                        1 == (null == n ? void 0 : n.resultCode)
                          ? e.refundMember.setState({
                              buyRecordEntity:
                                null == n ? void 0 : n.buyRecordEntity,
                            })
                          : e.refundMember.setState({ buyRecordEntity: null });
                      })
                      .catch(function (e) {
                        return console.log(e);
                      });
                  },
                  onRefundMember: function (n, t) {
                    var i,
                      o,
                      r = n.btn,
                      l = n.refundItem;
                    if (0 !== (null == r ? void 0 : r.type))
                      if (
                        null != l &&
                        null !== (i = l.buyDetailEntity) &&
                        void 0 !== i &&
                        i.refundFlag
                      ) {
                        var a = null == l ? void 0 : l.title,
                          c =
                            "• 确认后，退款将在1～3个工作日内退回您的账户,<br /> • 退订"
                              .concat(
                                a,
                                "后，将根据您目前的消费情况重新调整您的会员等级,<br /> • 如您已使用过或正在使用购买"
                              )
                              .concat(
                                a,
                                "赠送的会员权益（如抢票券、优惠券、机票酒店会员价等），将无法退订"
                              )
                              .concat(a);
                        null == t ||
                          null === (o = t.page) ||
                          void 0 === o ||
                          o.showMultiButtonDialog({
                            title: "确认退订" + a + "吗？",
                            content: c,
                            leftButtonName: "取消",
                            rightButtonName: "确认",
                            onRightButtonClick: function () {
                              var n, i, o;
                              (0, Z.showLoading)("退订中...");
                              var r = {
                                title:
                                  null == l ||
                                  null === (n = l.buyDetailEntity) ||
                                  void 0 === n
                                    ? void 0
                                    : n.title,
                                refundFlag:
                                  null == l ||
                                  null === (i = l.buyDetailEntity) ||
                                  void 0 === i
                                    ? void 0
                                    : i.refundFlag,
                                packageType:
                                  null == l ||
                                  null === (o = l.buyDetailEntity) ||
                                  void 0 === o
                                    ? void 0
                                    : o.packageType,
                              };
                              (0, N.mT)(r)
                                .then(function (n) {
                                  var i, o;
                                  (0, Z.hideLoading)(),
                                    e.refundMember.setShowRefundMemberPop(!1),
                                    1 === (null == n ? void 0 : n.resultCode)
                                      ? null == t ||
                                        null === (i = t.page) ||
                                        void 0 === i ||
                                        i.showCommonDialog({
                                          content: "您购买的".concat(
                                            r.title,
                                            "已退订成功，退款将在1～3个工作日内退回您的支付渠道账户，请注意查收！"
                                          ),
                                          title: "温馨提示",
                                          buttonName: "我知道了",
                                          onButtonClick: function () {
                                            (0, Z.showToast)("退订成功！"),
                                              e.vipGradeInfo.requestVipDetailInfo();
                                          },
                                        })
                                      : null == t ||
                                        null === (o = t.page) ||
                                        void 0 === o ||
                                        o.showCommonDialog({
                                          content:
                                            null == n
                                              ? void 0
                                              : n.resultMessage,
                                          title: "温馨提示",
                                          buttonName: "我知道了",
                                          onButtonClick: function () {
                                            e.vipGradeInfo.requestVipDetailInfo();
                                          },
                                        });
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    (0, Z.showToast)("网络异常，请稍后再试");
                                });
                            },
                            onLeftButtonClick: function () {},
                          });
                      } else (0, Z.showToast)("暂不能退订该会员");
                  },
                };
              },
            },
            T = {
              name: "beforeBuy",
              state: {
                chooseMemberType: null,
                isLoaded: !1,
                showMemberCoupon: !1,
                selectedCouponEntity: null,
              },
              reducers: {
                setState: function (e, n) {
                  return (0, y.Z)((0, y.Z)({}, e), n);
                },
                clear: function () {
                  return {};
                },
                chooseMember: function (e, n) {
                  return (0, y.Z)((0, y.Z)({}, e), {}, { chooseMemberType: n });
                },
                setShowMemberCoupon: function (e, n) {
                  return (0, y.Z)((0, y.Z)({}, e), {}, { showMemberCoupon: n });
                },
                setSelectedCouponEntity: function (e, n) {
                  return (0, y.Z)(
                    (0, y.Z)({}, e),
                    {},
                    { selectedCouponEntity: n }
                  );
                },
              },
              effects: function (e) {
                return {
                  requestVipDetailBuyPackage: function (n) {
                    var t = n.grade,
                      i = n.isRmbVipFlag,
                      o = 40 === t ? 1 : 0;
                    (0, N.hi)(
                      { pageOrigin: o, pageVersion: "709987" },
                      { checkLogin: !1, checkFrameworkLogin: !1 }
                    )
                      .then(function (n) {
                        var t;
                        if (
                          (console.log("购买信息", n),
                          1 === (null == n ? void 0 : n.resultCode) &&
                            null != n &&
                            null !== (t = n.vipTypes) &&
                            void 0 !== t &&
                            t.length)
                        ) {
                          var o,
                            r,
                            l,
                            a,
                            c,
                            s = n.vipTypes,
                            u = void 0 === s ? [] : s,
                            d = n.expireRenewEntity,
                            m = n.renewVipEntity,
                            f = n.buyDescriptionList,
                            h = void 0 === f ? [] : f,
                            p = n.mainTitle,
                            v = n.isBuyPackage,
                            g = n.renewText,
                            w = n.unionCardProcess,
                            b = n.gradeType,
                            y = u[0],
                            Z =
                              null == y ||
                              null === (o = y.vipOpenPriceList) ||
                              void 0 === o
                                ? void 0
                                : o.findIndex(function (e) {
                                    return null == e ? void 0 : e.renewFlag;
                                  }),
                            N =
                              Z > 0
                                ? null == y ||
                                  null === (r = y.vipOpenPriceList) ||
                                  void 0 === r
                                  ? void 0
                                  : r[Z]
                                : null == y ||
                                  null === (l = y.vipOpenPriceList) ||
                                  void 0 === l
                                ? void 0
                                : l[0],
                            V =
                              (null == N ||
                              null === (a = N.vipCouponEntity) ||
                              void 0 === a ||
                              null === (c = a.promotionList) ||
                              void 0 === c
                                ? void 0
                                : c[0]) || null;
                          e.beforeBuy.setState({
                            showPurchaseNotPay: !0,
                            buyMemberdata: n,
                            GrabData: y,
                            expireRenewEntity: d,
                            PurchaseData:
                              (null == u ? void 0 : u.length) > 1 ? u[1] : "",
                            renewVipEntity: m,
                            renewFlag: null == m ? void 0 : m.renewFlag,
                            buyDescriptionList: h,
                            mainTitle: p,
                            ContinuousPayment:
                              (null == m ? void 0 : m.renewFlag) &&
                              !(null == m || !m.cardCode),
                            isBuyPackage: v,
                            renewText: g,
                            selectedCouponEntity: V,
                            chooseMemberType: N,
                            isLoaded: !0,
                          }),
                            e.vipGradeInfo.set({ isNewSystem: !!b }),
                            b || e.vipGradeInfo.requestVipNps(),
                            i ||
                              null == e ||
                              e.afterBuy.setState({
                                unionCardProcess: w || [],
                              });
                        } else e.beforeBuy.setState({ isLoaded: !0 });
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                  },
                };
              },
            },
            I = t(27113),
            x = t(2809),
            B = t(8271),
            S = t.n(B),
            R = {
              name: "afterBuy",
              state: {
                thirdVipInfo: null,
                rightProcessInfo: [],
                renewEntityOfRights: null,
                showHotVipConfirm: !1,
                hotVipConfirmToast: null,
                hotelListInfo: [],
                showHotelRuleModal: !1,
                showUnionMemberModal: !1,
                unionMemberToast: null,
              },
              reducers: {
                setState: function (e, n) {
                  return (0, y.Z)((0, y.Z)({}, e), n);
                },
                clear: function () {
                  return {};
                },
                setShowHotVipConfirm: function (e, n) {
                  return (0, y.Z)(
                    (0, y.Z)({}, e),
                    {},
                    { showHotVipConfirm: n }
                  );
                },
                setHotVipConfirmToast: function (e, n) {
                  return (0, y.Z)(
                    (0, y.Z)({}, e),
                    {},
                    { hotVipConfirmToast: n }
                  );
                },
                setShowHotelRuleModal: function (e, n) {
                  return (0, y.Z)(
                    (0, y.Z)({}, e),
                    {},
                    { showHotelRuleModal: n }
                  );
                },
                setShowUnionMemberModal: function (e, n) {
                  return (0, y.Z)(
                    (0, y.Z)({}, e),
                    {},
                    { showUnionMemberModal: n }
                  );
                },
              },
              effects: function (e) {
                return {
                  requestGetVipRightProcess: function () {
                    (0, N.VA)(
                      { scene: "709987" },
                      { checkLogin: !1, checkFrameworkLogin: !1 }
                    )
                      .then(function (n) {
                        if (1 === (null == n ? void 0 : n.resultCode)) {
                          var t,
                            i,
                            o,
                            r,
                            l,
                            a,
                            c,
                            s =
                              null == n ||
                              null === (t = n.rightProcessInfos[0]) ||
                              void 0 === t
                                ? void 0
                                : t.thirdVipInfo;
                          null != n &&
                            null !== (i = n.rightProcessInfos[0]) &&
                            void 0 !== i &&
                            null !== (o = i.rightInfos) &&
                            void 0 !== o &&
                            o.length &&
                            (null == n ||
                              null === (a = n.rightProcessInfos[0]) ||
                              void 0 === a ||
                              null === (c = a.rightInfos) ||
                              void 0 === c ||
                              c.forEach(function (e) {
                                var n;
                                if (
                                  null != e &&
                                  null !== (n = e.rightDetails) &&
                                  void 0 !== n &&
                                  n.length
                                ) {
                                  for (
                                    var t = [],
                                      i = JSON.parse(
                                        JSON.stringify(
                                          (null == e
                                            ? void 0
                                            : e.rightDetails) || []
                                        )
                                      );
                                    (null == i ? void 0 : i.length) > 0;

                                  ) {
                                    var o;
                                    t.push({
                                      giftRightsMergeList:
                                        null == i ||
                                        null === (o = i.splice(0, 2)) ||
                                        void 0 === o
                                          ? void 0
                                          : o.map(function (e) {
                                              return {
                                                icon:
                                                  null == e ? void 0 : e.icon,
                                                url:
                                                  null == e
                                                    ? void 0
                                                    : e.buttonUrl,
                                                title:
                                                  null == e
                                                    ? void 0
                                                    : e.rightName,
                                                subTitle:
                                                  null == e
                                                    ? void 0
                                                    : e.leftDesc,
                                              };
                                            }),
                                    });
                                  }
                                  e.rightDetailInfo = t;
                                }
                              })),
                            e.afterBuy.setState({
                              thirdVipInfo: s,
                              rightProcessInfo:
                                (null == n ||
                                null === (r = n.rightProcessInfos[0]) ||
                                void 0 === r
                                  ? void 0
                                  : r.rightInfos) || [],
                              renewEntityOfRights:
                                (null == n ? void 0 : n.renewEntity) || null,
                              popUpEntity:
                                (null == n ? void 0 : n.popUpEntity) || null,
                              unionCardProcess:
                                (null == n ||
                                null === (l = n.rightProcessInfos[0]) ||
                                void 0 === l
                                  ? void 0
                                  : l.unionCardProcess) || [],
                            });
                        }
                      })
                      .catch(function (e) {
                        return console.log(e);
                      });
                  },
                  requestHotelRecommend: function () {
                    (0, I.y9)()
                      .then(function (n) {
                        console.log("成功res", n);
                        var t = {
                          data: {
                            cityId: null,
                            cityName: n.cityName || "上海",
                            checkIn: S()().format("YYYY-MM-DD"),
                            checkOut: S()().add(1, "day").format("YYYY-MM-DD"),
                            partner: x.ZP.partner,
                            version: 9985,
                            lineType: 1,
                            allianceName: "",
                            offlineHotelType: 0,
                            queryFilterList: [
                              {
                                filterID: "22|77",
                                type: "22",
                                title: "黑钻体验价",
                                subType: "2",
                                sceneBitMap: 0,
                                scenarioType: "ConvenientModule",
                                filterType: 0,
                                value: "77",
                                childValue: null,
                                parentValue: null,
                              },
                            ],
                            searchType: 1,
                            hotelIdList: null,
                          },
                        };
                        (0, N.xx)(t, {
                          checkLogin: !1,
                          checkFrameworkLogin: !1,
                        })
                          .then(function (n) {
                            var t, i, o, r;
                            1 === (null == n ? void 0 : n.resultCode) &&
                              (null == n ||
                              null === (t = n.data) ||
                              void 0 === t ||
                              null === (i = t.hotelSimpleInfoType) ||
                              void 0 === i
                                ? void 0
                                : i.length) >= 2 &&
                              e.afterBuy.setState({
                                hotelListInfo: {
                                  hotelSimpleInfoList:
                                    null == n ||
                                    null === (o = n.data) ||
                                    void 0 === o
                                      ? void 0
                                      : o.hotelSimpleInfoType.slice(0, 6),
                                  listUrl:
                                    (null == n ||
                                    null === (r = n.data) ||
                                    void 0 === r
                                      ? void 0
                                      : r.listUrl) || "",
                                },
                              });
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      })
                      .catch();
                  },
                  requestVipCenterActivityInfo: function (n) {
                    (0, N.z1)({ cardGrade: n })
                      .then(function (n) {
                        1 === (null == n ? void 0 : n.resultCode) &&
                          e.afterBuy.setState({
                            marketingEntity:
                              null == n ? void 0 : n.marketingEntity,
                          });
                      })
                      .catch(function (e) {
                        return console.log(e);
                      });
                  },
                  hotVipConfirmSuccessCb: function () {
                    e.afterBuy.setShowHotVipConfirm(!1),
                      e.afterBuy.requestGetVipRightProcess();
                  },
                  receiveUnionMember: function (n) {
                    var t = n.cardType,
                      i = n.receiveType,
                      o = n.code;
                    (0, Z.showLoading)("领取中...");
                    var r = { code: o, cardType: t };
                    r.cardType || delete r.cardType,
                      (0, N.AT)(r)
                        .then(function (n) {
                          if (
                            ((0, Z.hideLoading)(),
                            1 == (null == n ? void 0 : n.resultCode))
                          ) {
                            if (((0, Z.showToast)("领取成功"), 1 === i))
                              return void (
                                (null == n ? void 0 : n.toastInfo) &&
                                e.afterBuy.setState({
                                  unionMemberToast: {
                                    toastInfo: null == n ? void 0 : n.toastInfo,
                                    receiveType: i,
                                  },
                                  showUnionMemberModal: !0,
                                })
                              );
                            e.afterBuy.setState({ showUnionMemberModal: !1 }),
                              e.afterBuy.requestGetVipRightProcess();
                          } else (0, Z.showToast)((null == n ? void 0 : n.resultMessage) || "领取失败"), e.afterBuy.setState({ showUnionMemberModal: !1 });
                        })
                        .catch(function () {
                          (0, Z.hideLoading)(),
                            (0, Z.showToast)("网络异常，请稍后重试");
                        });
                  },
                };
              },
            },
            M = t(93761),
            _ = {
              page: b,
              vipGradeInfo: V,
              refundMember: C,
              beforeBuy: T,
              afterBuy: R,
              buyMember: {
                name: "buyMember",
                state: { isSelectedRule: !1 },
                reducers: {
                  set: function (e, n) {
                    return n;
                  },
                  clear: function () {
                    return {};
                  },
                  setSelectRule: function (e, n) {
                    return (0, y.Z)((0, y.Z)({}, e), {}, { isSelectedRule: n });
                  },
                },
                effects: function (e) {
                  return {
                    openVipCenterCard: function (n, t) {
                      var i,
                        o,
                        r,
                        l = n.renewVipFlag,
                        a =
                          null == t ||
                          null === (i = t.beforeBuy) ||
                          void 0 === i
                            ? void 0
                            : i.chooseMemberType;
                      if (
                        null == t || null === (o = t.buyMember) || void 0 === o
                          ? void 0
                          : o.isSelectedRule
                      ) {
                        var c = [];
                        c.push({
                          name: "ubtAppId",
                          value: h.default.memberSellUbtValue || "10000",
                        });
                        var s,
                          u,
                          d,
                          m = [],
                          f = 0;
                        null != t &&
                          null !== (r = t.beforeBuy) &&
                          void 0 !== r &&
                          r.selectedCouponEntity &&
                          (m.push(
                            null == t ||
                              null === (s = t.beforeBuy) ||
                              void 0 === s
                              ? void 0
                              : s.selectedCouponEntity
                          ),
                          (f =
                            (null == t ||
                            null === (u = t.beforeBuy) ||
                            void 0 === u ||
                            null === (d = u.selectedCouponEntity) ||
                            void 0 === d
                              ? void 0
                              : d.price) || 0));
                        var p = {
                          price:
                            Number((null == a ? void 0 : a.price) || 0) -
                            f +
                            "",
                          vipCode: null == a ? void 0 : a.code,
                          orderScene: 12,
                          packageType: 0,
                          renewVipFlag: l,
                          promotionList: m,
                        };
                        return (0, N.dD)(p, { extension: c })
                          .then(function (n) {
                            var t = n.resultCode,
                              i = n.goodsId,
                              o = n.orderNumber,
                              r = n.resultMessage;
                            0 === t
                              ? g.ZP.doLogin().then(
                                  function () {
                                    e.buyMember.openVipCenterCard();
                                  },
                                  function () {
                                    console.log("取消登录");
                                  }
                                )
                              : 1 === t
                              ? M.ZP.doPayment({
                                  business: "common",
                                  orderNumber: o,
                                  goodsId: i,
                                  title: "购买会员",
                                })
                                  .then(function () {
                                    (0, Z.showToast)("支付成功"),
                                      e.vipGradeInfo.requestVipDetailInfo();
                                  })
                                  .catch(function () {})
                              : (0, Z.showToast)(r || "网络出小差，请稍后重试");
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      }
                      (0, Z.showToast)("请先勾选会员购买说明");
                    },
                  };
                },
              },
            },
            G = t(94262),
            k = t(48813),
            E = function (e) {
              return (
                (0, G.Z)(e),
                (0, k.tZ)(d.View, {
                  className: "member-page-header",
                  children: h.default.isTieyou
                    ? (0, k.tZ)(d.Text, {
                        style: "color: #fff",
                        children: "会员中心",
                      })
                    : (0, k.tZ)(d.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_bin/22-08/hyzx/img_hyzx_slogan@3x.png",
                        className: "title-icon",
                      }),
                })
              );
            },
            L = t(41760),
            X = (0, v.$j)(function (e) {
              return {
                displayGrade: e.vipGradeInfo.displayGrade,
                isNewSystem: e.vipGradeInfo.isNewSystem,
              };
            })(function (e) {
              var n = e.displayGrade,
                t = e.isNewSystem;
              return (0,
              k.BX)(d.View, { children: [t ? (0, k.tZ)(d.View, { className: "member-page-linear-bg ".concat(40 === n ? "diamond-v2" : "platinum-v2") }) : (0, k.tZ)(d.View, { className: "member-page-linear-bg ".concat(n > 20 ? L.Zo[n] : "") }), n > 20 && (0, k.tZ)(d.Image, { className: "member-page-linear-bg-tag", src: 40 === n ? "https://images3.c-ctrip.com/ztrip/train_bin/22-08/hyzx/img_hyzx_bg_hz@3x.png" : "https://images3.c-ctrip.com/ztrip/train_bin/22-08/hyzx/img_hyzx_bg_bj@3x.png" })] });
            }),
            P = t(90129),
            D = t(79910),
            A = t(9196),
            z = (0, v.$j)(
              function (e) {
                return {
                  isShowRights: e.vipGradeInfo.isShowRights,
                  displayGrade: e.vipGradeInfo.displayGrade,
                  vipInfoList: e.vipGradeInfo.vipInfoList,
                  showCommonDialog: e.page.showCommonDialog,
                };
              },
              function (e) {
                return {
                  onShowRights: function (n) {
                    return e.vipGradeInfo.setIsShowRights(n);
                  },
                };
              }
            )(function (e) {
              var n,
                t,
                i,
                o,
                r,
                l = e.displayGrade,
                a = e.isShowRights,
                c = e.vipInfoList,
                s = e.onMore,
                u = e.showCommonDialog,
                m =
                  (null == c ||
                  null ===
                    (n = c.find(function (e) {
                      return (null == e ? void 0 : e.cardGrade) === l;
                    })) ||
                  void 0 === n
                    ? void 0
                    : n.enjoyRightList) || [];
              return null != m && m.length
                ? (0, k.BX)(d.View, {
                    className: "member-page-rights ".concat(
                      a ? "active" : "hide"
                    ),
                    children: [
                      (0, k.BX)(d.View, {
                        className: "title flex-align-items-center",
                        id: "ACBH",
                        onClick: s,
                        children: [
                          (0, k.tZ)(d.View, {
                            className: "flex-1",
                            children:
                              null == m || null === (t = m[0]) || void 0 === t
                                ? void 0
                                : t.title,
                          }),
                          (0, k.tZ)(d.Text, { children: "更多" }),
                          (0, k.tZ)(d.Text, {
                            className: "iconfont ifont-arr arrow",
                          }),
                        ],
                      }),
                      (0, k.tZ)(d.View, {
                        className: "rights-list flex",
                        children:
                          null == m ||
                          null === (i = m[0]) ||
                          void 0 === i ||
                          null === (o = i.rightList) ||
                          void 0 === o ||
                          null === (r = o.slice(0, 4)) ||
                          void 0 === r
                            ? void 0
                            : r.map(function (e, n) {
                                return (0, k.BX)(
                                  d.View,
                                  {
                                    className: "flex-1 right-item",
                                    id: "ACBI",
                                    onClick: function () {
                                      null != e && e.jumpUrl
                                        ? D.Z.commonNavigator(
                                            null == e ? void 0 : e.jumpUrl
                                          )
                                        : (null == e
                                            ? void 0
                                            : e.rightInfoDetailDesc) &&
                                          (null == u ||
                                            u({
                                              content:
                                                null == e
                                                  ? void 0
                                                  : e.rightInfoDetailDesc,
                                              title: "温馨提示",
                                              buttonName: "我知道了",
                                              onButtonClick: function () {},
                                            }));
                                    },
                                    children: [
                                      (null == e ? void 0 : e.iconUrl) &&
                                        (0, k.tZ)(d.Image, {
                                          className: "icon",
                                          src: null == e ? void 0 : e.iconUrl,
                                          style: "".concat(
                                            1 ===
                                              (null == e ? void 0 : e.isHave)
                                              ? "opacity: 1"
                                              : "opacity: 0.4"
                                          ),
                                        }),
                                      (0, k.tZ)(d.View, {
                                        className: "right-title",
                                        children:
                                          null == e ? void 0 : e.subTitle,
                                      }),
                                      (0, k.tZ)(d.View, {
                                        className: "sub-title",
                                        children: null == e ? void 0 : e.title,
                                      }),
                                    ],
                                  },
                                  "vip-right-".concat(n)
                                );
                              }),
                      }),
                    ],
                  })
                : (0, k.tZ)(d.View, {});
            }),
            F = function (e) {
              var n,
                t,
                i,
                o = e.gradeInfo,
                r = e.currentGrade,
                l = e.experienceVipFlag,
                a = e.displayGrade,
                c = e.onItem,
                s = e.isNewSystem,
                u = (null == o ? void 0 : o.cardGrade) || 0,
                m = null == o ? void 0 : o.cardEntity,
                f = null == m ? void 0 : m.validTime,
                h =
                  (null == m ||
                  null === (n = m.upgradeConditions) ||
                  void 0 === n
                    ? void 0
                    : n.obtainedCount) || 0,
                p =
                  (null == m ||
                  null === (t = m.upgradeConditions) ||
                  void 0 === t
                    ? void 0
                    : t.criticalCount) || 1200,
                v = h ? (h > p ? 100 : (h / p) * 100) : 5;
              return (0, k.tZ)(d.SwiperItem, {
                itemId: null == o ? void 0 : o.cardGrade,
                children: (0, k.tZ)(d.View, {
                  className: "scroll-item",
                  children: (0, k.BX)(d.View, {
                    className: "grade-item ".concat(L.Zo[u]),
                    id: "ACBG",
                    onClick: c,
                    children: [
                      u > r &&
                        (0, k.tZ)(d.Image, {
                          src: L.zI[u],
                          className: "lock-icon",
                        }),
                      u === r &&
                        (0, k.tZ)(d.Image, {
                          src: L.fJ[u],
                          className: "lock-icon",
                        }),
                      (0, k.BX)(d.View, {
                        children: [
                          (0, k.BX)(d.View, {
                            className: "flex-align-items-center grade-title",
                            children: [
                              (0, k.tZ)(d.Image, {
                                src: L.tI[u],
                                className: "grade-name",
                              }),
                              l &&
                                30 === u &&
                                (0, k.tZ)(d.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train_bin/22-05/img_hy_tyb@3x.png",
                                  className: "plus-icon experience",
                                }),
                              !l &&
                                u === r &&
                                r >= 30 &&
                                (0, k.tZ)(d.Image, {
                                  src:
                                    40 === r
                                      ? "https://images3.c-ctrip.com/ztrip/train_bin/22-08/hyzx/img_hyzx_kp_plus_hz@3x.png"
                                      : "https://images3.c-ctrip.com/ztrip/train_bin/22-08/hyzx/img_hyzx_kp_plus@3x.png",
                                  className: "plus-icon",
                                }),
                            ],
                          }),
                          (0, k.BX)(d.View, {
                            className: "rights",
                            style: "color: ".concat(L.qA[u], ";opacity: 0.5"),
                            children: [
                              !!f &&
                                (0, k.tZ)(d.Text, {
                                  className: "valid-time",
                                  children: f + "到期",
                                }),
                              !f &&
                                h < p &&
                                (0, k.BX)(d.Text, {
                                  children: [
                                    (0, k.tZ)(d.Text, {
                                      children: "查看当前等级权益明细",
                                    }),
                                    (0, k.tZ)(d.Text, {
                                      className: "ifont-arr iconfont arrow",
                                    }),
                                  ],
                                }),
                              a >= r &&
                                !!f &&
                                (0, k.BX)(d.Text, {
                                  children: [
                                    (0, k.tZ)(d.Text, { children: "查看权益" }),
                                    (0, k.tZ)(d.Text, {
                                      className: "ifont-arr iconfont arrow",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, k.BX)(d.View, {
                        children: [
                          (0, k.BX)(d.View, {
                            className: "obtained flex-align-items-center",
                            style: "color: ".concat(L.qA[u]),
                            children: [
                              (0, k.BX)(d.View, {
                                className: "flex-1",
                                children: [
                                  (0, k.BX)(d.Text, {
                                    className: "obtained-count",
                                    children: [
                                      " ",
                                      (null == m ||
                                      null === (i = m.upgradeConditions) ||
                                      void 0 === i
                                        ? void 0
                                        : i.obtainedCount) || "0",
                                    ],
                                  }),
                                  (0, k.tZ)(d.Text, {
                                    className: "obtained-txt",
                                    children: s ? "成长值" : "经验值",
                                  }),
                                ],
                              }),
                              s &&
                                (0, k.BX)(d.View, {
                                  children: [
                                    (0, k.tZ)(d.Text, {
                                      className: "obtained-txt",
                                      style: "font-weight: 500;opacity:1",
                                      children: "升级攻略",
                                    }),
                                    (0, k.tZ)(d.Text, {
                                      className: "ifont-arr iconfont arrow",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, k.tZ)(d.View, {
                            className: "progress",
                            children: (0, k.tZ)(d.View, {
                              className: "progress-line ".concat(L.Zo[u]),
                              style: "width: " + v + "%;",
                            }),
                          }),
                        ],
                      }),
                      (0, k.tZ)(d.Image, {
                        className: "vip-grade-icon",
                        src: L.ZB[u],
                      }),
                    ],
                  }),
                }),
              });
            },
            U = (0, v.$j)(
              function (e) {
                return {
                  currentGrade: e.vipGradeInfo.currentGrade,
                  displayGrade: e.vipGradeInfo.displayGrade,
                  experienceVipFlag: e.vipGradeInfo.experienceVipFlag,
                  vipInfoList: e.vipGradeInfo.vipInfoList,
                  navigateTo: e.page.navigateTo,
                  isShowRights: e.vipGradeInfo.isShowRights,
                  isNewSystem: e.vipGradeInfo.isNewSystem,
                };
              },
              function (e) {
                return {
                  changeGrade: function (n) {
                    return e.vipGradeInfo.changeGrade(n);
                  },
                  setNeedRefresh: function (n) {
                    return e.vipGradeInfo.setNeedRefresh(n);
                  },
                };
              }
            )(function (e) {
              var n = e.currentGrade,
                t = e.displayGrade,
                i = e.changeGrade,
                o = e.experienceVipFlag,
                r = e.vipInfoList,
                l = e.navigateTo,
                a = e.setNeedRefresh,
                c = e.isShowRights,
                s = e.isNewSystem,
                m = (0, u.useState)(!1),
                f = (0, P.Z)(m, 2),
                p = f[0],
                v = f[1],
                g = function () {
                  a(!1),
                    s
                      ? D.Z.commonNavigator(
                          "https://".concat(
                            h.default.h5domain,
                            "/ztrip/webapp/ztrip-member/equityUpgrade?isHideNavBar=YES&isImmersiveMode=YES"
                          )
                        )
                      : null == l ||
                        l({
                          url: "/pages/usercenter/memberRights/index?grade=".concat(
                            t
                          ),
                        });
                };
              return (
                (0, u.useEffect)(
                  function () {
                    if (c) {
                      var e = setTimeout(function () {
                        v(c);
                      }, 200);
                      return function () {
                        clearInterval(e);
                      };
                    }
                    v(c);
                  },
                  [c]
                ),
                (null == r ? void 0 : r.length) <= 1 || s
                  ? (0, k.tZ)(d.View, {
                      className: "member-page-vipGrade",
                      children: (0, k.tZ)(d.View, {
                        className: "vip-scroll",
                        children: (0, k.tZ)(F, {
                          gradeInfo: null == r ? void 0 : r[0],
                          experienceVipFlag: o,
                          currentGrade: n,
                          displayGrade: t,
                          onItem: g,
                          isNewSystem: s,
                        }),
                      }),
                    })
                  : (0, k.BX)(d.View, {
                      className: "member-page-vipGrade",
                      children: [
                        (0, k.tZ)(d.Swiper, {
                          vertical: !1,
                          previousMargin: "20px",
                          nextMargin: "20px",
                          className: "vip-scroll",
                          current: Number(t) / 10,
                          onChange: function (e) {
                            var n, t;
                            (null == e ||
                            null === (n = e.detail) ||
                            void 0 === n
                              ? void 0
                              : n.current) > -1 &&
                              i(
                                10 *
                                  (null == e ||
                                  null === (t = e.detail) ||
                                  void 0 === t
                                    ? void 0
                                    : t.current)
                              );
                          },
                          children:
                            null == r
                              ? void 0
                              : r.map(function (e) {
                                  return (0,
                                  k.tZ)(F, { gradeInfo: e, experienceVipFlag: o, currentGrade: n, displayGrade: t, onItem: g }, "vip_".concat(e));
                                }),
                        }),
                        (0, k.tZ)(A.Z, {
                          changeGrade: i,
                          displayGrade: t,
                          showArrow: p,
                        }),
                        (0, k.tZ)(z, { onMore: g }),
                      ],
                    })
              );
            }),
            q = t(43621),
            H = (0, t(57531).Z)(q.Z),
            j = t(34229),
            O = function (e) {
              var n = e.list,
                t = e.isShow,
                i = e.onClose,
                o = e.title;
              return (0, k.tZ)(d.View, {
                className: "member-page-buyRules-modal",
                children: (0, k.tZ)(j.ZtActivityPop, {
                  show: t,
                  onClose: i,
                  onWrapClose: i,
                  children: (0, k.BX)(d.ScrollView, {
                    className: "rule-content",
                    scrollY: !0,
                    children: [
                      (0, k.tZ)(d.View, {
                        className: "rule-title",
                        children: o || "购买说明",
                      }),
                      null == n
                        ? void 0
                        : n.map(function (e, n) {
                            return (0,
                            k.tZ)(d.View, { className: "rule-txt", children: e }, "hotel-rule_".concat(n));
                          }),
                    ],
                  }),
                }),
              });
            },
            $ = (0, v.$j)(
              function (e) {
                return {
                  memberItem: e.beforeBuy.chooseMemberType,
                  renewVipEntity: e.beforeBuy.renewVipEntity,
                  buyRecordEntity: e.refundMember.buyRecordEntity,
                  isSelectedRule: e.buyMember.isSelectedRule,
                };
              },
              function (e) {
                return {
                  onBuyRecordList: function (n) {
                    return e.refundMember.setIsShowBuyRecordList(n);
                  },
                  setSelectRule: function (n) {
                    return e.buyMember.setSelectRule(n);
                  },
                };
              }
            )(function (e) {
              var n,
                t,
                i = e.showOpenText,
                o = e.className,
                r = e.memberItem,
                l = e.buyRecordEntity,
                a = e.onBuyRecordList,
                c = e.isSelectedRule,
                s = e.setSelectRule,
                m = (0, u.useState)(!1),
                f = (0, P.Z)(m, 2),
                h = f[0],
                p = f[1],
                v = (0, u.useState)(""),
                g = (0, P.Z)(v, 2),
                w = g[0],
                b = (g[1], (0, u.useState)([])),
                y = (0, P.Z)(b, 2),
                Z = y[0],
                N =
                  (y[1],
                  (null == r || null === (n = r.title) || void 0 === n
                    ? void 0
                    : n.indexOf("年卡")) > -1),
                V =
                  !i &&
                  (null == l ||
                  null === (t = l.refundVipOrderList) ||
                  void 0 === t
                    ? void 0
                    : t.length) > 0;
              return (0, k.BX)(d.View, {
                children: [
                  (0, k.BX)(d.View, {
                    className: "member-page-rule ".concat(o),
                    onClick: function () {
                      s(!c);
                    },
                    children: [
                      i &&
                        (0, k.tZ)(d.Text, {
                          className: "iconfont2  ".concat(
                            c
                              ? "color-primary ifont2-checkboxed"
                              : "ifont2-checkbox"
                          ),
                        }),
                      (0, k.BX)(d.View, {
                        children: [
                          " ",
                          i &&
                            (0, k.tZ)(d.Text, {
                              style: "color: #adb1b6;opacity:0.7",
                              children: "请在支付前仔细阅读",
                            }),
                          (0, k.tZ)(d.Text, {
                            id: "ACAu",
                            onClick: function (e) {
                              e.stopPropagation(),
                                (null == r ? void 0 : r.agreementUrl) &&
                                  D.Z.commonNavigator(
                                    null == r ? void 0 : r.agreementUrl
                                  );
                            },
                            children: "《会员购买说明》",
                          }),
                          i &&
                            N &&
                            (0, k.tZ)(d.Text, {
                              style: "color: #adb1b6;opacity:0.7",
                              children: "小程序暂不支持无限次抢票",
                            }),
                          V &&
                            (0, k.tZ)(d.Text, {
                              className: "line",
                              children: " | ",
                            }),
                          V &&
                            (0, k.tZ)(d.Text, {
                              id: "ACAw",
                              onClick: function (e) {
                                e.stopPropagation(), a(!0);
                              },
                              children: "购买记录",
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.tZ)(O, {
                    isShow: h,
                    title: w,
                    list: Z,
                    onClose: function () {
                      return p(!1);
                    },
                  }),
                ],
              });
            }),
            W = (0, v.$j)(
              function (e) {
                return {
                  renewEntityOfRights: e.afterBuy.renewEntityOfRights,
                  isRmbVipFlag: e.vipGradeInfo.isRmbVipFlag,
                  displayGrade: e.vipGradeInfo.displayGrade,
                  currentGrade: e.vipGradeInfo.currentGrade,
                  memberItem: e.beforeBuy.chooseMemberType,
                  isNewSystem: e.vipGradeInfo.isNewSystem,
                  isLoaded: e.beforeBuy.isLoaded,
                };
              },
              function (e) {
                return {
                  buyMember: function (n) {
                    return e.buyMember.openVipCenterCard(n);
                  },
                };
              }
            )(function (e) {
              var n = e.renewEntityOfRights,
                t = e.displayGrade,
                i = e.currentGrade,
                o = e.isRmbVipFlag,
                r = e.memberItem,
                l = e.buyMember,
                a = e.isNewSystem,
                c = e.type,
                s = e.isLoaded,
                u = function () {
                  var e, o, l;
                  return a && 40 == i
                    ? { buttonText: "您已是更高等级", tag: "" }
                    : null != n && n.renew && t === i
                    ? {
                        buttonText: 40 === t ? "续费黑钻会员" : "续费铂金会员",
                        tag: null == n ? void 0 : n.tag,
                      }
                    : {
                        buttonText:
                          (null == r ||
                          null === (e = r.buttonEntity) ||
                          void 0 === e
                            ? void 0
                            : e.buttonText) || "立即购买",
                        tag:
                          (null == r ||
                          null === (o = r.buttonEntity) ||
                          void 0 === o
                            ? void 0
                            : o.subText) ||
                          (null == r ||
                          null === (l = r.buttonEntity) ||
                          void 0 === l
                            ? void 0
                            : l.tag) ||
                          "",
                      };
                },
                m = function () {
                  (a && 40 == i) ||
                    l({ renewVipFlag: null == r ? void 0 : r.renewFlag });
                },
                f = function () {
                  var e;
                  return (0, k.BX)(d.View, {
                    className: a
                      ? "member-page-bottom-buy-v2"
                      : "member-page-bottom-buy",
                    children: [
                      (0, k.BX)(d.View, {
                        className: a && 40 == i ? "btn disable" : "btn",
                        id: "ACAg",
                        onClick: m,
                        children: [
                          null === (e = u()) || void 0 === e
                            ? void 0
                            : e.buttonText,
                          !!u().tag &&
                            (0, k.BX)(d.View, {
                              children: [
                                (0, k.tZ)(d.View, {
                                  className: "tag",
                                  children: (0, k.tZ)(j.ZtRichText, {
                                    nodes: u().tag,
                                  }),
                                }),
                                (0, k.tZ)(d.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train_bin/22-09/img_hyzx_an_qp@3x.png",
                                  className: "tag-arrow",
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, k.tZ)($, { showOpenText: !0 }),
                    ],
                  });
                };
              return s
                ? "bottom" === c && a
                  ? (0, k.tZ)(d.View, {})
                  : null != n && n.renew
                  ? f()
                  : o && t <= i
                  ? (0, k.tZ)(d.View, {})
                  : f()
                : (0, k.tZ)(d.View, {});
            }),
            Y = function (e) {
              var n,
                t = e.chooseMemberType,
                i = e.couponTitle,
                o = e.setShowCouponPop;
              return (0, k.BX)(d.View, {
                className: "coupon-wrap",
                id: "ACAr",
                onClick: function () {
                  return o(!0);
                },
                children: [
                  (0, k.tZ)(d.Text, {
                    children:
                      null == t ||
                      null === (n = t.vipCouponEntity) ||
                      void 0 === n
                        ? void 0
                        : n.title,
                  }),
                  (0, k.BX)(d.View, {
                    children: [
                      (0, k.tZ)(d.Text, {
                        className: "coupon-price",
                        children: i,
                      }),
                      (0, k.tZ)(d.Text, {
                        className: "iconfont ifont-arr coupon-arr",
                      }),
                    ],
                  }),
                ],
              });
            },
            K = (0, v.$j)(
              function (e) {
                return {
                  GrabData: e.beforeBuy.GrabData,
                  displayLevel: e.vipGradeInfo.displayLevel,
                  chooseMemberType: e.beforeBuy.chooseMemberType,
                  selectedCouponEntity: e.beforeBuy.selectedCouponEntity,
                  isNewSystem: e.vipGradeInfo.isNewSystem,
                };
              },
              function (e) {
                return {
                  chooseMember: function (n) {
                    return e.beforeBuy.chooseMember(n);
                  },
                  setShowCouponPop: function (n) {
                    return e.beforeBuy.setShowMemberCoupon(n);
                  },
                  setSelectedCouponEntity: function (n) {
                    return e.beforeBuy.setSelectedCouponEntity(n);
                  },
                };
              }
            )(function (e) {
              var n,
                t,
                i = e.GrabData,
                o = e.displayLevel,
                r = e.chooseMember,
                l = e.chooseMemberType,
                a = e.setShowCouponPop,
                c = e.selectedCouponEntity,
                s = e.setSelectedCouponEntity,
                m = e.isNewSystem,
                f = (0, u.useState)(0),
                h = (0, P.Z)(f, 2),
                p = h[0],
                v = h[1],
                g = (0, u.useState)("card_0"),
                w = (0, P.Z)(g, 2),
                b = w[0],
                y = w[1];
              if (
                ((0, u.useEffect)(
                  function () {
                    !(function () {
                      var e,
                        n = i,
                        t =
                          null == n ||
                          null === (e = n.vipOpenPriceList) ||
                          void 0 === e
                            ? void 0
                            : e.findIndex(function (e) {
                                return (
                                  (null == e ? void 0 : e.title) ===
                                  (null == l ? void 0 : l.title)
                                );
                              });
                      v(t), y("card_".concat(t));
                    })();
                  },
                  [i, o]
                ),
                !i)
              )
                return (0, k.tZ)(d.View, {});
              var Z = c
                  ? "-¥" + (null == c ? void 0 : c.price)
                  : "你有可用代金券",
                N = function (e) {
                  return null != c && c.price
                    ? e - (null == c ? void 0 : c.price)
                    : e;
                };
              return (0, k.BX)(d.View, {
                className: "member-page-card",
                children: [
                  (0, k.tZ)(d.ScrollView, {
                    scrollX: !0,
                    className: "member-page-card-scroll",
                    scrollIntoView: b,
                    children:
                      null == i ||
                      null === (n = i.vipOpenPriceList) ||
                      void 0 === n
                        ? void 0
                        : n.map(function (e, n) {
                            return (0, k.tZ)(
                              d.View,
                              {
                                className: "card",
                                id: "card_".concat(n),
                                onClick: function () {
                                  return (function (e, n) {
                                    var t;
                                    v(n),
                                      s(
                                        (null == e ||
                                        null === (t = e.vipCouponEntity) ||
                                        void 0 === t
                                          ? void 0
                                          : t.promotionList[0]) || null
                                      ),
                                      r(e);
                                  })(e, n);
                                },
                                children: (0, k.BX)(d.View, {
                                  className: "card-c ".concat(
                                    p === n ? "active" : "",
                                    " flex-align-items-center"
                                  ),
                                  children: [
                                    (0, k.BX)(d.View, {
                                      className: "flex-1",
                                      children: [
                                        (0, k.tZ)(d.View, {
                                          className: "title",
                                          children:
                                            null == e ? void 0 : e.title,
                                        }),
                                        (0, k.tZ)(d.View, {
                                          className: "sub-title",
                                          children: null == e ? void 0 : e.desc,
                                        }),
                                      ],
                                    }),
                                    (0, k.tZ)(d.View, {
                                      className: "price-unit",
                                      children: "¥",
                                    }),
                                    (0, k.tZ)(d.View, {
                                      className: "price",
                                      children:
                                        p === n
                                          ? N(null == e ? void 0 : e.price) ||
                                            "--"
                                          : (null == e ? void 0 : e.price) ||
                                            "--",
                                    }),
                                    !(null == e || !e.sendVipDesc) &&
                                      (0, k.BX)(d.View, {
                                        className: "send-tag",
                                        children: [
                                          (0, k.tZ)(d.View, {
                                            className: "send-tag-c",
                                            children:
                                              null == e
                                                ? void 0
                                                : e.sendVipDesc,
                                          }),
                                          (0, k.tZ)(d.Image, {
                                            className: "tag-dot",
                                            src: "https://images3.c-ctrip.com/ztrip/train_bin/22-02/huiyuanzhongxin/img_huiyuan_tag@3x.png",
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              },
                              "member-card_".concat(n)
                            );
                          }),
                  }),
                  !(
                    null == l ||
                    null === (t = l.vipCouponEntity) ||
                    void 0 === t ||
                    !t.title
                  ) &&
                    (0, k.tZ)(Y, {
                      couponTitle: Z,
                      chooseMemberType: l,
                      setShowCouponPop: a,
                    }),
                  m && (0, k.tZ)(W, { type: "card" }),
                ],
              });
            }),
            J = (0, v.$j)(
              function (e) {
                return { chooseMemberType: e.beforeBuy.chooseMemberType };
              },
              function () {
                return {};
              }
            )(function (e) {
              var n,
                t,
                i,
                o,
                r,
                l,
                a = e.chooseMemberType;
              return null == a || !a.unionVipRight || h.default.isAlipay
                ? (0, k.tZ)(d.View, {})
                : (0, k.BX)(d.View, {
                    className: "member-page-hot-member",
                    children: [
                      (0, k.BX)(d.View, {
                        className: "title",
                        children: [
                          (0, k.tZ)(d.View, {
                            className: "tit",
                            children:
                              (null == a ||
                              null === (n = a.unionVipRight) ||
                              void 0 === n
                                ? void 0
                                : n.title) || "",
                          }),
                          (0, k.tZ)(d.View, {
                            className: "txt",
                            children:
                              (null == a ||
                              null === (t = a.unionVipRight) ||
                              void 0 === t
                                ? void 0
                                : t.subTitle) || "",
                          }),
                        ],
                      }),
                      (0, k.BX)(d.View, {
                        className: "content",
                        children: [
                          !(
                            null == a ||
                            null === (i = a.unionVipRight) ||
                            void 0 === i ||
                            !i.tag
                          ) &&
                            (0, k.tZ)(d.View, {
                              className: "flex",
                              children: (0, k.tZ)(d.View, {
                                className: "top-tag flex-center",
                                children:
                                  null == a ||
                                  null === (o = a.unionVipRight) ||
                                  void 0 === o
                                    ? void 0
                                    : o.tag,
                              }),
                            }),
                          (0, k.tZ)(d.View, {
                            className: "content-l",
                            children:
                              null == a ||
                              null === (r = a.unionVipRight) ||
                              void 0 === r ||
                              null === (l = r.giftRightsList) ||
                              void 0 === l
                                ? void 0
                                : l.map(function (e, n) {
                                    return (0,
                                    k.BX)(d.View, { className: "item flex flex-column", children: [(0, k.tZ)(d.Image, { className: "icon", src: null == e ? void 0 : e.icon }), (0, k.tZ)(d.View, { className: "name-txt", children: (null == e ? void 0 : e.title) || "" }), !(null == e || !e.subTitle) && (0, k.tZ)(d.View, { className: "desc", children: null == e ? void 0 : e.subTitle })] }, "vipitem_".concat(n));
                                  }),
                          }),
                        ],
                      }),
                    ],
                  });
            }),
            Q = function (e) {
              var n = e.data,
                t = e.onRight;
              return (0, k.tZ)(d.View, {
                style: "display: flex;flex-direction: column;",
                id: "ACAi",
                onClick: function () {
                  (null == n ? void 0 : n.url) &&
                    (null == t || t(null == n ? void 0 : n.url));
                },
                children: (0, k.BX)(d.View, {
                  className: "right-wrap flex-align-items-center",
                  children: [
                    (0, k.tZ)(d.Image, {
                      src: null == n ? void 0 : n.icon,
                      className: "right-icon",
                    }),
                    (0, k.BX)(d.View, {
                      className: "flex-1",
                      children: [
                        (0, k.tZ)(d.View, {
                          className: "right-name",
                          children: null == n ? void 0 : n.title,
                        }),
                        (0, k.BX)(d.View, {
                          className: "flex-align-items-center",
                          children: [
                            !(null == n || !n.subTitle) &&
                              (0, k.tZ)(j.ZtRichText, {
                                className: "right-desc",
                                nodes: null == n ? void 0 : n.subTitle,
                              }),
                            !(null == n || !n.url) &&
                              (0, k.tZ)(d.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_bin/22-08/hyzx/icon_hyzx_qy_jt@3x.png",
                                className: "right-arrow",
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            },
            ee = function (e) {
              var n = e.rights,
                t = e.onRight,
                i = (0, u.useState)([]),
                o = (0, P.Z)(i, 2),
                r = o[0],
                l = o[1];
              return (
                (0, u.useEffect)(
                  function () {
                    if (null != n && n.length) {
                      var e = [];
                      n.forEach(function (n) {
                        var t;
                        null != n &&
                          null !== (t = n.giftRightsMergeList) &&
                          void 0 !== t &&
                          t.length &&
                          (null == n ||
                            n.giftRightsMergeList.forEach(function (n) {
                              e.push(n);
                            }));
                      }),
                        l(e);
                    }
                  },
                  [n]
                ),
                null != n && n.length
                  ? (null == r ? void 0 : r.length) < 4
                    ? (0, k.tZ)(d.View, {
                        className: "member-page-rights-scroll flex",
                        children:
                          null == r
                            ? void 0
                            : r.map(function (e, n) {
                                return (0,
                                k.tZ)(d.View, { style: "display: flex;flex-direction: column;", children: (0, k.tZ)(Q, { data: e, onRight: t }, "right-".concat(n, "-").concat(n)) }, "rights-".concat(n));
                              }),
                      })
                    : (0, k.tZ)(d.View, {
                        className: "member-page-rights-scroll flex",
                        children:
                          null == n
                            ? void 0
                            : n.map(function (e, n) {
                                return (0, k.tZ)(
                                  d.View,
                                  {
                                    style:
                                      "display: flex;flex-direction: column;",
                                    children:
                                      null == e
                                        ? void 0
                                        : e.giftRightsMergeList.map(function (
                                            e,
                                            i
                                          ) {
                                            return (0, k.tZ)(
                                              Q,
                                              { data: e, onRight: t },
                                              "right-".concat(n, "-").concat(i)
                                            );
                                          }),
                                  },
                                  "rights-".concat(n)
                                );
                              }),
                      })
                  : (0, k.tZ)(d.View, {})
              );
            },
            ne = function (e) {
              var n = e.data;
              return (0, k.BX)(d.View, {
                className: "business-rights",
                children: [
                  (0, k.BX)(d.View, {
                    className: "title-wrap flex-align-items-center",
                    children: [
                      (0, k.tZ)(d.Text, {
                        className: "title",
                        children: null == n ? void 0 : n.title,
                      }),
                      !(null == n || !n.subTitle) &&
                        (0, k.tZ)(j.ZtRichText, {
                          className: "sub-title",
                          nodes: null == n ? void 0 : n.subTitle,
                          space: "nbsp",
                        }),
                    ],
                  }),
                  (0, k.tZ)(ee, {
                    rights: null == n ? void 0 : n.giftRightsList,
                  }),
                ],
              });
            },
            te = (0, v.$j)(
              function (e) {
                return { chooseMemberType: e.beforeBuy.chooseMemberType };
              },
              function () {
                return {};
              }
            )(function (e) {
              var n,
                t,
                i = e.chooseMemberType;
              return null != i &&
                null !== (n = i.productGiftRight) &&
                void 0 !== n &&
                n.length
                ? (0, k.tZ)(d.View, {
                    className: "member-page-giftRights",
                    children:
                      null == i ||
                      null === (t = i.productGiftRight) ||
                      void 0 === t
                        ? void 0
                        : t.map(function (e, n) {
                            return (0,
                            k.tZ)(ne, { data: e }, "business-rights-".concat(n));
                          }),
                  })
                : (0, k.tZ)(d.View, {});
            }),
            ie = (0, v.$j)(
              function (e) {
                return { data: e.afterBuy.marketingEntity };
              },
              function () {
                return {};
              }
            )(function (e) {
              var n,
                t,
                i,
                o = e.data;
              if (
                null == o ||
                null === (n = o.bannerInfos) ||
                void 0 === n ||
                !n.length
              )
                return (0, k.tZ)(d.View, {});
              return (0, k.tZ)(d.Swiper, {
                className: "member-page-recommend-banner",
                autoplay: !0,
                circular: !0,
                indicatorDots:
                  (null == o || null === (t = o.bannerInfos) || void 0 === t
                    ? void 0
                    : t.length) > 1,
                indicatorColor: "#efb291",
                indicatorActiveColor: "#fdf1e8",
                children:
                  null == o || null === (i = o.bannerInfos) || void 0 === i
                    ? void 0
                    : i.map(function (e, n) {
                        return (0, k.tZ)(
                          d.SwiperItem,
                          {
                            id: "ACAx",
                            onClick: function () {
                              return (
                                e.jumpUrl &&
                                (function (e, n) {
                                  0 !== n
                                    ? D.Z.commonNavigator(e)
                                    : f().navigateToMiniProgram({
                                        appId: "wxaf35009675aa0b2a",
                                        path: "/pages/index/index?scene=Kd8YelP&source_id=0",
                                      });
                                })(e.jumpUrl, n)
                              );
                            },
                            children: (0, k.tZ)(d.Image, {
                              src: null == e ? void 0 : e.imageUrl,
                              className: "banner-item",
                            }),
                          },
                          "recommend-banner-".concat(n)
                        );
                      }),
              });
            }),
            oe = (0, v.$j)(
              function (e) {
                return { data: e.afterBuy.unionCardProcess };
              },
              function (e) {
                return {
                  onReceive: function (n) {
                    return e.afterBuy.receiveUnionMember(n);
                  },
                  setAfterBuyState: function (n) {
                    return e.afterBuy.setState(n);
                  },
                };
              }
            )(function (e) {
              var n = e.data,
                t = e.onReceive,
                i = e.setAfterBuyState;
              if (null == n || !n.length) return (0, k.tZ)(d.View, {});
              return (0, k.BX)(d.View, {
                className: "member-page-union-card",
                children: [
                  (0, k.tZ)(d.View, {
                    className: "title",
                    children: "会员福利",
                  }),
                  null == n
                    ? void 0
                    : n.map(function (e, n) {
                        return (0, k.BX)(
                          d.View,
                          {
                            className: "item-wrap",
                            children: [
                              (0, k.tZ)(d.Image, {
                                src: null == e ? void 0 : e.icon,
                                className: "icon",
                              }),
                              (0, k.BX)(d.View, {
                                className: "flex-1",
                                children: [
                                  (0, k.tZ)(d.View, {
                                    className: "name",
                                    children: null == e ? void 0 : e.name,
                                  }),
                                  (0, k.tZ)(d.View, {
                                    className: "desc",
                                    children: null == e ? void 0 : e.desc,
                                  }),
                                ],
                              }),
                              (0, k.tZ)(d.View, {
                                className: "btn flex-center ".concat(
                                  0 !== (null == e ? void 0 : e.state)
                                    ? "over"
                                    : ""
                                ),
                                id: "ACBC",
                                onClick: function () {
                                  return (function (e) {
                                    0 === (null == e ? void 0 : e.state) &&
                                      (null != e && e.buttonUrl
                                        ? (0, Z.showToast)("小程序暂不支持领取")
                                        : 1 !==
                                          (null == e ? void 0 : e.receiveType)
                                        ? i({
                                            showUnionMemberModal: !0,
                                            unionMemberToast: {
                                              toastInfo:
                                                null == e
                                                  ? void 0
                                                  : e.toastInfo,
                                              receiveType:
                                                null == e
                                                  ? void 0
                                                  : e.receiveType,
                                              code: null == e ? void 0 : e.code,
                                              cardType:
                                                null == e ? void 0 : e.cardType,
                                            },
                                          })
                                        : t({
                                            cardType:
                                              null == e ? void 0 : e.cardType,
                                            receiveType:
                                              null == e
                                                ? void 0
                                                : e.receiveType,
                                            code: null == e ? void 0 : e.code,
                                          }));
                                  })(e);
                                },
                                children:
                                  (null == e ? void 0 : e.buttonText) || "",
                              }),
                            ],
                          },
                          "union-item-".concat(n)
                        );
                      }),
                ],
              });
            }),
            re = function (e) {
              var n = e.isNewSystem;
              return (0, k.BX)(d.View, {
                className: "member-page-before-buy",
                children: [
                  (0, k.tZ)(K, {}),
                  (0, k.tZ)(J, {}),
                  (0, k.tZ)(te, {}),
                  (0, k.tZ)(ie, {}),
                  !n && (0, k.tZ)(oe, {}),
                ],
              });
            },
            le = (0, v.$j)(
              function (e) {
                return { data: e.afterBuy.thirdVipInfo };
              },
              function (e) {
                return {
                  onShowVipConfirm: function (n) {
                    return e.afterBuy.setShowHotVipConfirm(n);
                  },
                  hotVipConfirmToast: function (n) {
                    return e.afterBuy.setHotVipConfirmToast(n);
                  },
                };
              }
            )(function (e) {
              var n,
                t,
                i = e.data,
                o = e.onShowVipConfirm,
                r = e.hotVipConfirmToast,
                l = (0, u.useState)(0),
                a = (0, P.Z)(l, 2),
                c = a[0],
                s = a[1],
                m = (0, u.useState)(null),
                f = (0, P.Z)(m, 2),
                h = f[0],
                p = f[1];
              (0, u.useEffect)(
                function () {
                  var e;
                  p(
                    null == i || null === (e = i.thirdVipInfos) || void 0 === e
                      ? void 0
                      : e[0]
                  );
                },
                [i]
              );
              return null != i &&
                null !== (n = i.thirdVipInfos) &&
                void 0 !== n &&
                n.length
                ? (0, k.BX)(d.View, {
                    className: "member-page-third-vip",
                    children: [
                      (0, k.tZ)(d.View, {
                        className: "hot-member-swiper",
                        children:
                          null == i ||
                          null === (t = i.thirdVipInfos) ||
                          void 0 === t
                            ? void 0
                            : t.map(function (e, n) {
                                return (0, k.tZ)(
                                  d.View,
                                  {
                                    className: "item ".concat(
                                      0 === (null == i ? void 0 : i.state) &&
                                        n === c
                                        ? "selected"
                                        : ""
                                    ),
                                    id: "ACAe",
                                    onClick: function () {
                                      0 === (null == i ? void 0 : i.state) &&
                                        (s(n), p(e));
                                    },
                                    children: (0, k.BX)(d.View, {
                                      className: "item-c",
                                      children: [
                                        (0, k.tZ)(d.Image, {
                                          className: "icon",
                                          src: null == e ? void 0 : e.icon,
                                        }),
                                        (0, k.tZ)(d.View, {
                                          className: "name-txt",
                                          children: null == e ? void 0 : e.name,
                                        }),
                                        (0, k.tZ)(d.View, {
                                          className: "desc",
                                          children: null == e ? void 0 : e.desc,
                                        }),
                                      ],
                                    }),
                                  },
                                  "tVip_".concat(n)
                                );
                              }),
                      }),
                      0 === (null == i ? void 0 : i.state)
                        ? (0, k.BX)(d.View, {
                            className: "btn",
                            id: "ACAf",
                            onClick: function () {
                              0 === (null == i ? void 0 : i.state) &&
                                (o(!0), r(h));
                            },
                            children: [
                              (0, k.tZ)(d.Text, {
                                children:
                                  (null == h ? void 0 : h.buttonText) || "",
                              }),
                              (0, k.tZ)(j.ZtRichText, {
                                className: "time",
                                nodes: (null == i ? void 0 : i.subTitle) || "",
                              }),
                            ],
                          })
                        : (0, k.tZ)(d.View, {
                            className: "btn overdue",
                            children: (0, k.tZ)(d.Text, {
                              children: null == i ? void 0 : i.buttonText,
                            }),
                          }),
                    ],
                  })
                : (0, k.tZ)(d.View, {});
            }),
            ae = function (e) {
              var n = e.selectedTab,
                t = e.onSelectTab,
                i = e.tabs,
                o = e.rightProcessInfo;
              return (0, k.tZ)(d.View, {
                className: "tabs flex",
                children:
                  null == i
                    ? void 0
                    : i.map(function (e, i) {
                        var r,
                          l = i === n;
                        return (0, k.BX)(
                          d.View,
                          {
                            className: "tab flex-1",
                            id: "ACAc",
                            onClick: function () {
                              return t(i);
                            },
                            children: [
                              (0, k.tZ)(d.View, {
                                className: "tab-txt ".concat(l ? "active" : ""),
                                children: e,
                              }),
                              l && (0, k.tZ)(d.View, { className: "line" }),
                              1 === i &&
                                1 !== n &&
                                !(
                                  null == o ||
                                  null === (r = o[1]) ||
                                  void 0 === r ||
                                  !r.tag
                                ) &&
                                (0, k.BX)(d.View, {
                                  className: "hotel-tag-wrap",
                                  children: [
                                    (0, k.tZ)(d.View, {
                                      className: "hotel-tag",
                                      children: "大额特惠",
                                    }),
                                    (0, k.tZ)(d.Image, {
                                      src: "https://images3.c-ctrip.com/ztrip/train_bin/22-09/img_hyzx_tab_qp@3x.png",
                                      className: "hotel-arrow",
                                    }),
                                  ],
                                }),
                            ],
                          },
                          e
                        );
                      }),
              });
            },
            ce = function (e) {
              var n = e.rights,
                t = e.onMoreRights,
                i = e.onRight,
                o = e.showMoreBtn;
              return (0, k.BX)(d.View, {
                children: [
                  (0, k.tZ)(ee, { rights: n, onRight: i }),
                  o &&
                    (0, k.tZ)(d.View, {
                      className: "use-rights flex-center",
                      id: "ACAd",
                      onClick: t,
                      children: "前往使用全部权益",
                    }),
                ],
              });
            },
            se = (0, v.$j)(
              function (e) {
                return {
                  rightProcessInfo: e.afterBuy.rightProcessInfo,
                  thirdVipInfo: e.afterBuy.thirdVipInfo,
                  renewEntityOfRights: e.afterBuy.renewEntityOfRights,
                };
              },
              function () {
                return {};
              }
            )(function (e) {
              var n,
                t,
                i = e.rightProcessInfo,
                o = e.thirdVipInfo,
                r = e.renewEntityOfRights,
                l = (0, u.useState)(["火车票", "酒店", "机票", "优惠"]),
                a = (0, P.Z)(l, 2),
                c = a[0],
                s = a[1],
                m = (0, u.useState)(4),
                f = (0, P.Z)(m, 2),
                h = f[0],
                p = f[1];
              (0, u.useEffect)(
                function () {
                  if (null != i && i.length) {
                    var e =
                      null == i
                        ? void 0
                        : i.map(function (e) {
                            return e.rightType;
                          });
                    o && e.push("联名"), p(null == i ? void 0 : i.length), s(e);
                  }
                },
                [i, o]
              );
              var v = (0, u.useState)(0),
                g = (0, P.Z)(v, 2),
                w = g[0],
                b = g[1];
              return null != i && i.length
                ? (0, k.BX)(d.View, {
                    className: "member-page-afterBuy-rights",
                    children: [
                      (0, k.tZ)(ae, {
                        selectedTab: w,
                        tabs: c,
                        onSelectTab: function (e) {
                          return b(e);
                        },
                        rightProcessInfo: i,
                      }),
                      (0, k.BX)(d.View, {
                        className: "rights",
                        children: [
                          w !== h &&
                            (0, k.tZ)(ce, {
                              showMoreBtn: !(
                                (null != r && r.renew) ||
                                null == i ||
                                null === (n = i[w]) ||
                                void 0 === n ||
                                !n.jumpUrl
                              ),
                              rights:
                                null == i || null === (t = i[w]) || void 0 === t
                                  ? void 0
                                  : t.rightDetailInfo,
                              onMoreRights: function () {
                                var e;
                                D.Z.commonNavigator(
                                  null == i ||
                                    null === (e = i[w]) ||
                                    void 0 === e
                                    ? void 0
                                    : e.jumpUrl
                                );
                              },
                              onRight: function (e) {
                                D.Z.commonNavigator(e);
                              },
                            }),
                          w === h && !!o && (0, k.tZ)(le, {}),
                        ],
                      }),
                    ],
                  })
                : (0, k.tZ)(d.View, {});
            }),
            ue = function (e) {
              var n = e.data,
                t = e.goHotelList;
              return (0, k.BX)(d.View, {
                className: "hotel-item",
                id: "ACAp",
                onClick: t,
                children: [
                  (0, k.tZ)(d.Image, {
                    src: null == n ? void 0 : n.pictrue,
                    className: "hotel-icon",
                  }),
                  (0, k.tZ)(d.View, {
                    className: "hotel-name text-overflow",
                    children: null == n ? void 0 : n.hotelName,
                  }),
                  (0, k.BX)(d.View, {
                    className: "comment-wrap flex-align-items-center",
                    children: [
                      (0, k.tZ)(d.View, {
                        className: "score",
                        children: null == n ? void 0 : n.commentScore,
                      }),
                      (0, k.tZ)(d.View, {
                        className: "comment text-overflow",
                        children:
                          (null == n ? void 0 : n.commentView) || "暂无评价",
                      }),
                    ],
                  }),
                  (0, k.BX)(d.View, {
                    className: "price-wrap",
                    children: [
                      (0, k.tZ)(d.View, { className: "unit", children: "¥" }),
                      (0, k.tZ)(d.View, {
                        className: "show-price",
                        children: null == n ? void 0 : n.couponSalePrice,
                      }),
                      (0, k.tZ)(d.View, {
                        className: "member-tag",
                        children: "会员专享价",
                      }),
                      (0, k.BX)(d.View, {
                        className: "origin-price",
                        children: ["¥", null == n ? void 0 : n.originalPrice],
                      }),
                    ],
                  }),
                ],
              });
            },
            de = (0, v.$j)(
              function (e) {
                return {
                  listInfo: e.afterBuy.hotelListInfo,
                  popUpEntity: e.afterBuy.popUpEntity,
                  navigateTo: e.page.navigateTo,
                };
              },
              function (e) {
                return {
                  onShowHotelRuleModal: function (n) {
                    return e.afterBuy.setShowHotelRuleModal(n);
                  },
                };
              }
            )(function (e) {
              var n,
                t,
                i = e.listInfo,
                o = e.popUpEntity,
                r = e.navigateTo,
                l = e.onShowHotelRuleModal;
              if (
                null == i ||
                null === (n = i.hotelSimpleInfoList) ||
                void 0 === n ||
                !n.length
              )
                return (0, k.tZ)(d.View, {});
              var a = function () {
                (null == i ? void 0 : i.listUrl) &&
                  r({ url: null == i ? void 0 : i.listUrl });
              };
              return (0, k.BX)(d.View, {
                className: "member-page-hotel",
                children: [
                  (0, k.BX)(d.View, {
                    className: "title-wrap flex-align-items-center",
                    children: [
                      (0, k.tZ)(d.View, {
                        className: "flex-1 title-txt",
                        children: "酒店·无限次会员价",
                      }),
                      !(null == o || !o.popUpContentV1) &&
                        (0, k.BX)(d.View, {
                          id: "ACAn",
                          onClick: function () {
                            return l(!0);
                          },
                          children: [
                            (0, k.tZ)(d.Text, {
                              className: "desc",
                              children: null == o ? void 0 : o.popUpContentV1,
                            }),
                            (0, k.tZ)(d.Text, {
                              className: "iconfont ifont-detail info-icon",
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, k.tZ)(d.View, {
                    className: "hotel-scroll flex",
                    children:
                      null == i ||
                      null === (t = i.hotelSimpleInfoList) ||
                      void 0 === t
                        ? void 0
                        : t.map(function (e, n) {
                            return (0,
                            k.tZ)(ue, { data: e, goHotelList: a }, "hotel_".concat(n));
                          }),
                  }),
                  (0, k.tZ)(d.View, {
                    className: "use-btn flex-center",
                    id: "ACAo",
                    onClick: a,
                    children: "查看大额优惠酒店",
                  }),
                ],
              });
            }),
            me = (0, v.$j)(
              function (e) {
                return {
                  displayGrade: e.vipGradeInfo.displayGrade,
                  currentGrade: e.vipGradeInfo.currentGrade,
                  isNewSystem: e.vipGradeInfo.isNewSystem,
                };
              },
              function () {
                return {};
              }
            )(function (e) {
              var n = e.displayGrade,
                t = e.currentGrade,
                i = e.isNewSystem;
              return (0,
              k.BX)(d.View, { className: "member-page-after-buy", children: [(0, k.tZ)(se, {}), (0, k.tZ)(de, {}), (0, k.tZ)(ie, {}), !i && (0, k.tZ)(oe, {}), n === t && (0, k.tZ)($, { className: "member-rule" })] });
            }),
            fe = (0, v.$j)(
              function (e) {
                return {
                  isShowRights: e.vipGradeInfo.isShowRights,
                  isRmbVipFlag: e.vipGradeInfo.isRmbVipFlag,
                  displayGrade: e.vipGradeInfo.displayGrade,
                  currentGrade: e.vipGradeInfo.currentGrade,
                  isNewSystem: e.vipGradeInfo.isNewSystem,
                  isLoaded: e.beforeBuy.isLoaded,
                  isShowNps: e.vipGradeInfo.isShowNps,
                };
              },
              function (e) {
                return {
                  onShowRights: function (n) {
                    return e.vipGradeInfo.setIsShowRights(n);
                  },
                  requestVipNps: function () {
                    return e.vipGradeInfo.requestVipNps();
                  },
                };
              }
            )(function (e) {
              var n = e.isShowRights,
                t = e.onShowRights,
                i = e.isRmbVipFlag,
                o = e.displayGrade,
                r = e.currentGrade,
                l = e.isLoaded,
                a = e.isNewSystem,
                c = e.isShowNps,
                s = e.requestVipNps,
                m = (0, u.useState)(!1),
                h = (0, P.Z)(m, 2),
                p = h[0],
                v = h[1];
              if (!l) return (0, k.tZ)(d.View, {});
              return (0, k.BX)(d.View, {
                className: a ? "member-page-main-v2" : "member-page-main",
                children: [
                  !a && (0, k.tZ)(d.View, { className: "linear-bg" }),
                  !a &&
                    (0, k.tZ)(d.View, {
                      className: "arrow flex-center",
                      id: "ACAq",
                      onClick: function () {
                        n && f().setStorageSync("MEMBER_SHOW_RIGHTS_CLICK", !0),
                          t(!n),
                          v(!0);
                      },
                      children: (0, k.tZ)(d.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_bin/22-08/hyzx/icon_hyzx_qy_zk_jt@3x.png",
                        className: "arrow-icon ".concat(
                          p ? (n ? "up-animation" : "down-animation") : ""
                        ),
                      }),
                    }),
                  i
                    ? i && o > r
                      ? (0, k.tZ)(re, { isNewSystem: a })
                      : (0, k.tZ)(d.View, {})
                    : (0, k.tZ)(re, { isNewSystem: a }),
                  i && o <= r ? (0, k.tZ)(me, {}) : (0, k.tZ)(d.View, {}),
                  c &&
                    (0, k.tZ)(d.View, {
                      className: "member-nps",
                      children: (0, k.tZ)(H, {
                        submitCallback: function () {
                          console.log("提交成功"),
                            (0, N.C3)()
                              .then(function (e) {
                                1 === (null == e ? void 0 : e.resultCode) &&
                                  s();
                              })
                              .catch(function (e) {
                                return console.log(e);
                              });
                        },
                        line: "common",
                        scene: a ? "member_rank_new_j2" : "member_rank_old_j2",
                      }),
                    }),
                ],
              });
            }),
            he = t(79301),
            pe = t(95308),
            ve = t(91006),
            ge = t.n(ve),
            we = function (e) {
              var n = e.isShow,
                t = e.data,
                i = e.close,
                o = e.receiveCb,
                r = e.groupCode,
                l = (0, u.useState)(""),
                a = (0, P.Z)(l, 2),
                c = a[0],
                s = a[1],
                m = t || {},
                f = m.receiveType,
                h = m.toastInfo,
                p = (function () {
                  var e = (0, pe.Z)(
                    (0, he.Z)().mark(function e() {
                      var n, i;
                      return (0, he.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (1 !== f || c) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  (0, Z.showToast)("请输入qq号"),
                                  e.abrupt("return")
                                );
                              case 3:
                                return (
                                  (e.prev = 3),
                                  (n = {
                                    groupCode: r,
                                    code: (null == t ? void 0 : t.code) || "",
                                  }),
                                  1 === f && (n.account = c),
                                  (e.next = 8),
                                  (0, N.Wc)(n)
                                );
                              case 8:
                                1 ===
                                (null == (i = e.sent) ? void 0 : i.resultCode)
                                  ? (o(), (0, Z.showToast)("领取成功"))
                                  : (0, Z.showToast)(
                                      (null == i ? void 0 : i.message) ||
                                        "领取失败，请稍后再试"
                                    ),
                                  (e.next = 15);
                                break;
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(3)),
                                  (0, Z.showToast)("领取失败，请稍后再试");
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[3, 12]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
              return (0, k.BX)(j.ZtDrawer, {
                show: n,
                onWrapClose: function () {
                  return i(!1);
                },
                onClose: function () {
                  return i(!1);
                },
                className: "hot-vip-dialog",
                children: [
                  (0, k.tZ)(d.View, {
                    className: "icon-con",
                    children: (0, k.tZ)(d.Image, {
                      className: "icon",
                      src: null == h ? void 0 : h.icon,
                    }),
                  }),
                  0 === f
                    ? (0, k.tZ)(d.View, {
                        className: "phone-num",
                        children: null == h ? void 0 : h.user,
                      })
                    : (0, k.tZ)(d.Input, {
                        type: "number",
                        className: "input-txt",
                        placeholder: "请输入QQ号码",
                        placeholderClass: "input-plder",
                        value: c,
                        onInput: function (e) {
                          var n = ((null == e ? void 0 : e.detail) || {}).value;
                          s(n);
                        },
                        cursorSpacing: 45,
                        alwaysEmbed: !0,
                      }),
                  (0, k.tZ)(d.View, {
                    className: "desc",
                    children: null == h ? void 0 : h.title,
                  }),
                  !(null == h || !h.subTitle) &&
                    (0, k.tZ)(d.View, {
                      className: "sub-desc",
                      children: null == h ? void 0 : h.subTitle,
                    }),
                  (0, k.BX)(d.View, {
                    className: "flex btn",
                    children: [
                      (0, k.tZ)(d.View, {
                        className: "btn-item cancel-btn",
                        id: "ACAl",
                        onClick: function () {
                          return i(!1);
                        },
                        children: "稍后领取",
                      }),
                      (0, k.tZ)(d.View, {
                        className: "btn-item confirm-btn",
                        id: "ACAm",
                        onClick: p,
                        children: "立即领取",
                      }),
                    ],
                  }),
                ],
              });
            };
          (we.propTypes = {
            isShow: ge().bool,
            data: ge().object,
            groupCode: ge().string,
            close: ge().func,
            receiveCb: ge().func,
          }),
            (we.defaultProps = {
              isShow: !1,
              data: {},
              groupCode: "",
              close: function () {},
              receiveCb: function () {},
            });
          var be,
            ye = (0, v.$j)(
              function (e) {
                var n;
                return {
                  isShow: e.afterBuy.showHotVipConfirm,
                  data: e.afterBuy.hotVipConfirmToast,
                  groupCode:
                    null === (n = e.afterBuy.thirdVipInfo) || void 0 === n
                      ? void 0
                      : n.groupCode,
                };
              },
              function (e) {
                return {
                  close: function (n) {
                    return e.afterBuy.setShowHotVipConfirm(n);
                  },
                  receiveCb: function (n) {
                    return e.afterBuy.hotVipConfirmSuccessCb(n);
                  },
                };
              }
            )(we),
            Ze = (0, v.$j)(
              function (e) {
                return {
                  isShow: e.refundMember.showBuyRecordList,
                  data: e.refundMember.buyRecordEntity,
                };
              },
              function (e) {
                return {
                  onShowRefundPop: function (n) {
                    return e.refundMember.setShowRefundMemberPop(n);
                  },
                  onClose: function () {
                    return e.refundMember.setIsShowBuyRecordList(!1);
                  },
                  setRefundMemberItem: function (n) {
                    return e.refundMember.setRefundMemberItem(n);
                  },
                };
              }
            )(function (e) {
              var n,
                t = e.isShow,
                i = e.onShowRefundPop,
                o = e.onClose,
                r = e.data,
                l = e.setRefundMemberItem;
              return (0, k.tZ)(j.ZtDrawer, {
                show: t,
                isShowClose: !1,
                title: "购买记录",
                leftButton: "取消",
                className: "member-page-buyRecord-pop",
                leftTrigger: o,
                onWrapClose: o,
                drawerStyle: { minHeight: "40%" },
                children: (0, k.tZ)(d.View, {
                  className: "content",
                  children:
                    null == r ||
                    null === (n = r.refundVipOrderList) ||
                    void 0 === n
                      ? void 0
                      : n.map(function (e, n) {
                          return (0, k.BX)(
                            d.View,
                            {
                              className: "item flex-align-items-center",
                              id: "ACAh",
                              onClick: function () {
                                return (function (e) {
                                  o(), i(!0), l(e);
                                })(e);
                              },
                              children: [
                                (0, k.tZ)(d.View, {
                                  className: "name flex-1",
                                  children: null == e ? void 0 : e.title,
                                }),
                                (0, k.tZ)(d.View, {
                                  className: "time",
                                  children: null == e ? void 0 : e.expireTime,
                                }),
                                (0, k.tZ)(d.Text, {
                                  className: "iconfont ifont-arr arrow",
                                }),
                              ],
                            },
                            "record_".concat(n)
                          );
                        }),
                }),
              });
            }),
            Ne = (0, v.$j)(
              function (e) {
                return {
                  isShow: e.refundMember.showRefundMemberPop,
                  data: e.refundMember.refundMemberItem,
                };
              },
              function (e) {
                return {
                  onClose: function () {
                    return e.refundMember.setShowRefundMemberPop(!1);
                  },
                  onShowBuyRecordList: function () {
                    return e.refundMember.setIsShowBuyRecordList(!0);
                  },
                  onRefundMember: function (n) {
                    return e.refundMember.onRefundMember(n);
                  },
                };
              }
            )(function (e) {
              var n,
                t,
                i,
                o,
                r,
                l,
                a,
                c = e.isShow,
                s = e.onClose,
                u = e.onShowBuyRecordList,
                m = e.data,
                f = e.onRefundMember;
              return (0, k.tZ)(j.ZtDrawer, {
                show: c,
                className: "member-page-refund-pop",
                isDefineHead: !0,
                onWrapClose: s,
                children: (0, k.BX)(d.View, {
                  className: "container",
                  children: [
                    (0, k.BX)(d.View, {
                      className: "title flex-center",
                      children: [
                        (0, k.tZ)(d.View, {
                          className: "title-txt",
                          children: null == m ? void 0 : m.title,
                        }),
                        (0, k.tZ)(d.Text, {
                          className: "iconfont ifont-arr arrow",
                          id: "ACAy",
                          onClick: function () {
                            s(), u();
                          },
                        }),
                      ],
                    }),
                    (0, k.BX)(d.View, {
                      children: [
                        (0, k.BX)(d.View, {
                          className: "table flex-align-items-center",
                          children: [
                            (0, k.tZ)(d.Text, {
                              className: "table-name",
                              children: "订单时间",
                            }),
                            (0, k.tZ)(d.Text, {
                              className: "table-desc",
                              children:
                                null == m ||
                                null === (n = m.buyDetailEntity) ||
                                void 0 === n
                                  ? void 0
                                  : n.orderBeginTime,
                            }),
                          ],
                        }),
                        (0, k.BX)(d.View, {
                          className: "table flex-align-items-center",
                          children: [
                            (0, k.tZ)(d.Text, {
                              className: "table-name",
                              children: "到期时间",
                            }),
                            (0, k.tZ)(d.Text, {
                              className: "table-desc",
                              children:
                                null == m ||
                                null === (t = m.buyDetailEntity) ||
                                void 0 === t
                                  ? void 0
                                  : t.orderEndTime,
                            }),
                          ],
                        }),
                        (0, k.BX)(d.View, {
                          className: "table flex-align-items-center",
                          children: [
                            (0, k.tZ)(d.Text, {
                              className: "table-name",
                              children: "订单价格",
                            }),
                            (0, k.tZ)(d.Text, {
                              className: "table-desc",
                              children: "¥".concat(
                                null == m ||
                                  null === (i = m.buyDetailEntity) ||
                                  void 0 === i
                                  ? void 0
                                  : i.orderValue
                              ),
                            }),
                          ],
                        }),
                        !(
                          null == m ||
                          null === (o = m.buyDetailEntity) ||
                          void 0 === o ||
                          !o.discountValue
                        ) &&
                          (0, k.BX)(d.View, {
                            className: "table flex-align-items-center",
                            children: [
                              (0, k.tZ)(d.Text, {
                                className: "table-name",
                                children: "立减优惠",
                              }),
                              (0, k.tZ)(d.Text, {
                                className: "table-desc",
                                children: "¥".concat(
                                  null == m ||
                                    null === (r = m.buyDetailEntity) ||
                                    void 0 === r
                                    ? void 0
                                    : r.discountValue
                                ),
                              }),
                            ],
                          }),
                        (0, k.BX)(d.View, {
                          className: "table flex-align-items-center",
                          children: [
                            (0, k.tZ)(d.Text, {
                              className: "table-name",
                              children: "实际支付",
                            }),
                            (0, k.tZ)(d.Text, {
                              style: "color:#ff5959;",
                              children: "¥".concat(
                                null == m ||
                                  null === (l = m.buyDetailEntity) ||
                                  void 0 === l
                                  ? void 0
                                  : l.realPayVale
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.tZ)(d.View, {
                      className: "btn-wrap",
                      children:
                        null == m || null === (a = m.buttonList) || void 0 === a
                          ? void 0
                          : a.map(function (e, n) {
                              var t;
                              return null != m &&
                                null !== (t = m.buyDetailEntity) &&
                                void 0 !== t &&
                                t.refundFlag
                                ? (0, k.tZ)(
                                    d.View,
                                    {
                                      className: "btn flex-center flex-1",
                                      style: "color: ".concat(
                                        1 == (null == e ? void 0 : e.status)
                                          ? "#ccc"
                                          : "#999"
                                      ),
                                      id: "ACAz",
                                      onClick: function () {
                                        return f({ btn: e, refundItem: m });
                                      },
                                      children:
                                        null == e ? void 0 : e.buttonName,
                                    },
                                    "refund-btn_".concat(n)
                                  )
                                : (0, k.tZ)(
                                    d.View,
                                    {
                                      id: "ACBA",
                                      onClick: function () {
                                        return f({ btn: e, refundItem: m });
                                      },
                                      className: "btn flex-center flex-1",
                                      children:
                                        null == e ? void 0 : e.buttonName,
                                    },
                                    "refund-btn_".concat(n)
                                  );
                            }),
                    }),
                  ],
                }),
              });
            }),
            Ve = (0, v.$j)(
              function (e) {
                return {
                  isShow: e.afterBuy.showHotelRuleModal,
                  popUpEntity: e.afterBuy.popUpEntity,
                };
              },
              function (e) {
                return {
                  close: function (n) {
                    return e.afterBuy.setShowHotelRuleModal(n);
                  },
                };
              }
            )(function (e) {
              var n,
                t,
                i = e.popUpEntity,
                o = e.isShow,
                r = e.close,
                l = function () {
                  r(!1);
                };
              return (0, k.tZ)(d.View, {
                className: "member-page-hotel-modal",
                children: (0, k.tZ)(j.ZtActivityPop, {
                  show: o,
                  onClose: l,
                  onWrapClose: l,
                  children: (0, k.BX)(d.View, {
                    className: "rule-content",
                    children: [
                      (0, k.tZ)(d.View, {
                        className: "rule-title",
                        children: "规则说明",
                      }),
                      null == i ||
                      null === (n = i.rule) ||
                      void 0 === n ||
                      null === (t = n.ruleContents) ||
                      void 0 === t
                        ? void 0
                        : t.map(function (e, n) {
                            return (0,
                            k.tZ)(d.View, { className: "rule-txt", children: e }, "hotel-rule_".concat(n));
                          }),
                    ],
                  }),
                }),
              });
            }),
            Ce = (0, v.$j)(
              function (e) {
                return {
                  isShow: e.afterBuy.showUnionMemberModal,
                  data: e.afterBuy.unionMemberToast,
                };
              },
              function (e) {
                return {
                  close: function (n) {
                    return e.afterBuy.setShowUnionMemberModal(n);
                  },
                  onReceive: function (n) {
                    return e.afterBuy.receiveUnionMember(n);
                  },
                  onRefresh: function (n) {
                    return e.afterBuy.requestGetVipRightProcess(n);
                  },
                };
              }
            )(function (e) {
              var n = e.isShow,
                t = e.data,
                i = e.close,
                o = e.onReceive,
                r = e.onRefresh;
              if (!t) return (0, k.tZ)(d.View, {});
              var l = null == t ? void 0 : t.toastInfo,
                a = null == t ? void 0 : t.receiveType;
              return (0, k.BX)(j.ZtDrawer, {
                show: n,
                onWrapClose: function () {
                  return i(!1);
                },
                onClose: function () {
                  return i(!1);
                },
                className: "member-union-vip-dialog",
                children: [
                  (0, k.tZ)(d.View, {
                    className: "icon-con",
                    children: (0, k.tZ)(d.Image, {
                      className: "icon",
                      src: null == l ? void 0 : l.icon,
                    }),
                  }),
                  (0, k.tZ)(d.View, {
                    className: "phone-num",
                    children: null == l ? void 0 : l.user,
                  }),
                  (0, k.tZ)(d.View, {
                    className: "desc",
                    children: null == l ? void 0 : l.title,
                  }),
                  !(null == l || !l.subTitle) &&
                    (0, k.tZ)(d.View, {
                      className: "sub-desc",
                      children: null == l ? void 0 : l.subTitle,
                    }),
                  1 !== a &&
                    (0, k.BX)(d.View, {
                      className: "flex btn",
                      children: [
                        (0, k.tZ)(d.View, {
                          className: "btn-item cancel-btn",
                          id: "ACBD",
                          onClick: function () {
                            return i(!1);
                          },
                          children: "稍后领取",
                        }),
                        (0, k.tZ)(d.View, {
                          className: "btn-item confirm-btn",
                          id: "ACBE",
                          onClick: function () {
                            o({
                              cardType: null == t ? void 0 : t.cardType,
                              receiveType: a,
                              code: null == t ? void 0 : t.code,
                            });
                          },
                          children: "立即领取",
                        }),
                      ],
                    }),
                  1 === a &&
                    (0, k.tZ)(d.View, {
                      className: "flex btn",
                      children: (0, k.tZ)(d.View, {
                        className: "btn-item confirm-btn",
                        id: "ACBF",
                        onClick: function () {
                          var e = l.user;
                          f().setClipboardData({
                            data: e,
                            success: function () {
                              (0, Z.showToast)("已复制"), i(!1), r();
                            },
                          });
                        },
                        children: "复制兑换码",
                      }),
                    }),
                ],
              });
            }),
            Te = (0, v.$j)(
              function (e) {
                return {
                  isShow: e.beforeBuy.showMemberCoupon,
                  chooseMemberType: e.beforeBuy.chooseMemberType,
                  selectedCoupon: e.beforeBuy.selectedCouponEntity,
                };
              },
              function (e) {
                return {
                  onClose: function (n) {
                    return e.beforeBuy.setShowMemberCoupon(n);
                  },
                  onSelect: function (n) {
                    return e.beforeBuy.setSelectedCouponEntity(n);
                  },
                };
              }
            )(function (e) {
              var n,
                t = e.isShow,
                i = e.onClose,
                o = e.chooseMemberType,
                r = e.selectedCoupon,
                l = e.onSelect,
                a =
                  null == o || null === (n = o.vipCouponEntity) || void 0 === n
                    ? void 0
                    : n.promotionList;
              return (0, k.tZ)(j.ZtDrawer, {
                show: t,
                isShowClose: !0,
                onWrapClose: function () {
                  return i(!1);
                },
                onClose: function () {
                  return i(!1);
                },
                className: "member-coupon-pop",
                title: "优惠券",
                closeIconParams: { color: "#ccc", size: 30 },
                children: (0, k.BX)(d.View, {
                  className: "content",
                  children: [
                    (0, k.BX)(d.View, {
                      className: "unUse-wrap",
                      id: "ACAs",
                      onClick: function () {
                        i(!1), l(null);
                      },
                      children: [
                        (0, k.tZ)(d.Text, { children: "不使用优惠券" }),
                        (0, k.tZ)(d.Image, {
                          className: "coupon-radio",
                          src: r
                            ? "https://images3.c-ctrip.com/ztrip/train_bin/22-11/icon_hyzx_weixuan@3x.png"
                            : "https://images3.c-ctrip.com/ztrip/train_bin/22-11/icon_hyzx_yixuan@3x.png",
                        }),
                      ],
                    }),
                    null == a
                      ? void 0
                      : a.map(function (e, n) {
                          return (0, k.BX)(
                            d.View,
                            {
                              className: "coupon-wrap",
                              id: "ACAt",
                              onClick: function () {
                                i(!1), l(e);
                              },
                              children: [
                                (0, k.BX)(d.View, {
                                  className: "price-wrap",
                                  children: [
                                    (0, k.tZ)(d.Text, {
                                      className: "unit",
                                      children: "¥",
                                    }),
                                    (0, k.tZ)(d.Text, {
                                      children:
                                        (null == e ? void 0 : e.price) || "",
                                    }),
                                  ],
                                }),
                                (0, k.BX)(d.View, {
                                  className: "coupon-detail",
                                  children: [
                                    (0, k.tZ)(d.Text, {
                                      className: "title",
                                      children: null == e ? void 0 : e.title,
                                    }),
                                    !(null == e || !e.subTitle) &&
                                      (0, k.tZ)(d.View, {
                                        className: "sub-title",
                                        children:
                                          null == e ? void 0 : e.subTitle,
                                      }),
                                  ],
                                }),
                                (0, k.tZ)(d.Image, {
                                  className: "coupon-radio",
                                  src:
                                    (null == e ? void 0 : e.couponCode) ===
                                    (null == r ? void 0 : r.couponCode)
                                      ? "https://images3.c-ctrip.com/ztrip/train_bin/22-11/icon_hyzx_yixuan@3x.png"
                                      : "https://images3.c-ctrip.com/ztrip/train_bin/22-11/icon_hyzx_weixuan@3x.png",
                                }),
                              ],
                            },
                            "member-coupon-".concat(n)
                          );
                        }),
                  ],
                }),
              });
            }),
            Ie = (0, v.$j)(
              function (e) {
                return { isNewSystem: e.vipGradeInfo.isNewSystem };
              },
              function () {
                return {};
              }
            )(function (e) {
              var n = e.onChangeTab,
                t = e.isNewSystem,
                i = e.navigateTo;
              return t
                ? (0, k.BX)(d.View, {
                    className: " _kd _a _oN _v _s _t _r _Ie _Id _Sb _i _l",
                    children: [
                      (0, k.BX)(d.View, {
                        className: " _Db _i _n _l",
                        id: "ACBB",
                        onClick: n,
                        children: [
                          (0, k.tZ)(d.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_bin/23-05/hyzx/icon_tab3@3x.png",
                            className: " _he _yf _Hp",
                          }),
                          (0, k.tZ)(d.Text, {
                            className: " _Kc _rl",
                            children: "我的会员",
                          }),
                        ],
                      }),
                      (0, k.BX)(d.View, {
                        className: " _Db _i _n _l",
                        children: [
                          (0, k.tZ)(d.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_bin/23-05/hyzx/icon_tab4@3x.png",
                            className: " _he _yf _Hp",
                          }),
                          (0, k.tZ)(d.Text, {
                            className: " _Kc _rl",
                            style: "color:#222",
                            children: "升级付费会员",
                          }),
                        ],
                      }),
                      (0, k.BX)(d.View, {
                        className: " _Db _i _n _l",
                        onClick: function () {
                          return i({ url: "/pages/usercenter/kaquan/kaquan" });
                        },
                        children: [
                          (0, k.tZ)(d.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_bin/23-07/icon_hyzx_tab_yhq@3x.png",
                            className: " _he _yf _Hp",
                          }),
                          (0, k.tZ)(d.Text, {
                            className: " _Kc _rl",
                            children: "优惠券",
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, k.tZ)(d.View, {});
            }),
            xe = h.default.isTieyou,
            Be =
              (0, w.h)(!1, { usePageWrapper: !0 })(
                (be = (function (e) {
                  (0, a.Z)(t, e);
                  var n = (0, c.Z)(t);
                  function t(e) {
                    var i, r, a, c, u, d;
                    (0, o.Z)(this, t),
                      (d = n.call(this, e)),
                      (0, s.Z)((0, l.Z)(d), "disablePageBgStyle", !0),
                      (0, s.Z)(
                        (0, l.Z)(d),
                        "pageRootClassName",
                        "member-page-root"
                      ),
                      (0, s.Z)((0, l.Z)(d), "pageTitle", "会员中心");
                    var f = (
                        (null === (i = (0, m.getCurrentInstance)()) ||
                        void 0 === i ||
                        null === (r = i.router) ||
                        void 0 === r
                          ? void 0
                          : r.params) || {}
                      ).from,
                      h = void 0 === f ? "" : f;
                    return (
                      (d.pageId = xe ? "10650088156" : "10650088154"),
                      (d.store = (0, p.S1)({ models: _ })),
                      null === (a = d.store) ||
                        void 0 === a ||
                        null === (c = a.dispatch) ||
                        void 0 === c ||
                        null === (u = c.page) ||
                        void 0 === u ||
                        u.set((0, l.Z)(d)),
                      (d.state = { isInit: !0, from: h }),
                      d
                    );
                  }
                  return (
                    (0, r.Z)(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            n,
                            t,
                            i = this,
                            o = f().getStorageSync("MEMBER_SHOW_RIGHTS") || !1;
                          null === (e = this.store) ||
                            void 0 === e ||
                            null === (n = e.dispatch) ||
                            void 0 === n ||
                            null === (t = n.vipGradeInfo) ||
                            void 0 === t ||
                            t.setIsShowRights(o),
                            g.ZP.isLogin
                              ? (this.initPageTime = new Date().getTime())
                              : g.ZP.doLogin()
                                  .then(function () {
                                    i.initPageTime = new Date().getTime();
                                  })
                                  .catch(function (e) {
                                    console.log(e), i.navigateBack();
                                  });
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          var e = new Date().getTime(),
                            n = f().getStorageSync("MEMBER_SHOW_RIGHTS_CLICK");
                          this.initPageTime &&
                          e - this.initPageTime <= 5e3 &&
                          !n
                            ? f().setStorageSync("MEMBER_SHOW_RIGHTS", !0)
                            : f().setStorageSync("MEMBER_SHOW_RIGHTS", !1);
                        },
                      },
                      {
                        key: "renderBackgroundView",
                        value: function () {
                          return (0, k.tZ)(v.zt, {
                            store: this.store,
                            children: (0, k.tZ)(X, {}),
                          });
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          return (0, k.tZ)(E, {});
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e,
                            n,
                            t,
                            i = this,
                            o = this.state.from;
                          g.ZP.isLogin &&
                            ("newSystem" === o
                              ? (null === (e = this.store) ||
                                  void 0 === e ||
                                  null === (n = e.dispatch) ||
                                  void 0 === n ||
                                  null === (t = n.vipGradeInfo) ||
                                  void 0 === t ||
                                  t.requestVipDetailInfo(),
                                this.setState({ isInit: !1 }))
                              : (0, N.hi)(
                                  { pageOrigin: 1, pageVersion: "709987" },
                                  { checkLogin: !1, checkFrameworkLogin: !1 }
                                )
                                  .then(function (e) {
                                    if (null != e && e.gradeType) {
                                      var n = "https://".concat(
                                        h.default.h5domain,
                                        "/ztrip/webapp/ztrip-member/myMember?isHideNavBar=YES&isImmersiveMode=YES"
                                      );
                                      f().redirectTo({
                                        url: "/functionalPages/twebview/index?url=".concat(
                                          encodeURIComponent(n)
                                        ),
                                      });
                                    } else {
                                      var t, o, r;
                                      i.setState({ isInit: !1 }),
                                        null === (t = i.store) ||
                                          void 0 === t ||
                                          null === (o = t.dispatch) ||
                                          void 0 === o ||
                                          null === (r = o.vipGradeInfo) ||
                                          void 0 === r ||
                                          r.requestVipDetailInfo();
                                    }
                                  })
                                  .catch(function (e) {
                                    i.setState({ isInit: !1 }), console.log(e);
                                  }));
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return this.state.isInit
                            ? (0, k.tZ)(d.View, {})
                            : (0, k.tZ)(v.zt, {
                                store: this.store,
                                children: (0, k.BX)(d.View, {
                                  className: "member-page",
                                  children: [
                                    (0, k.tZ)(U, {}),
                                    (0, k.tZ)(fe, {}),
                                    (0, k.tZ)(W, { type: "bottom" }),
                                    (0, k.tZ)(Ze, {}),
                                    (0, k.tZ)(Ne, {}),
                                    (0, k.tZ)(ye, {}),
                                    (0, k.tZ)(Ve, {}),
                                    (0, k.tZ)(Ce, {}),
                                    (0, k.tZ)(Te, {}),
                                    (0, k.tZ)(Ie, {
                                      navigateTo: this.navigateTo,
                                      onChangeTab: function () {
                                        return e.navigateBack();
                                      },
                                    }),
                                  ],
                                }),
                              });
                        },
                      },
                    ]),
                    t
                  );
                })(u.Component))
              ) || be;
          Page(
            (0, i.createPageConfig)(
              Be,
              "pages/usercenter/member/member",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "会员中心",
                navigationBarTextStyle: "white",
                navigationBarBackgroundColor: "#222",
                backgroundColorTop: "#222222",
                backgroundColorBottom: "#fff",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [59871, 3322, 36332, 95854, 21641, 19559, 11216, 68592],
          function () {
            return (function (n) {
              return e((e.s = n));
            })(5353);
          }
        ),
          e.O();
      },
    ]);
})();
