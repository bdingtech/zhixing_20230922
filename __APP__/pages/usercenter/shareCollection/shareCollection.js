!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/b3c2309a95e8a51ddd777bd490fa43e7.js"),
    require("../sub-common/b1d98ac3cac0489744b471740be24b38.js"),
    require("../sub-common/0c9797aa251d43f43145ab2d45e4a48b.js"),
    require("../sub-common/ec3ca716e90bc4e14da1e7766b2b038d.js"),
    require("../sub-common/ddfd7b03545a7b34a24d4f4b3f57887f.js"),
    require("../sub-common/7b8f0a0a7a87c7a59205a94d6feafde5.js"),
    require("../sub-common/ab2fa7545e6121a2a6169982b3f71304.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [88949],
      {
        66364: function (e, t, n) {
          var i = n(32180),
            c = n(79301),
            a = n(95308),
            r = n(57042),
            o = n(24460),
            s = n(81876),
            l = n(21867),
            d = n(86066),
            u = n(52500),
            p = n(65573),
            f = n(92954),
            h = n.n(f),
            m = n(81957),
            g = n(79792),
            k = n(45023),
            x = n(41991),
            T = n(40852),
            v = n(298),
            Z = {
              state: {
                trainTicketCollection: null,
                pageIndex: 1,
                isLoadAll: !1,
                userSelectCoverInfo: null,
              },
              reducers: {
                setTrainTicketCollection: function (e, t) {
                  return (0, v.Z)(
                    (0, v.Z)({}, e),
                    {},
                    { trainTicketCollection: t }
                  );
                },
                setPageIndex: function (e, t) {
                  return (0, v.Z)((0, v.Z)({}, e), {}, { pageIndex: t });
                },
                setIsLoadAll: function (e, t) {
                  return (0, v.Z)((0, v.Z)({}, e), {}, { isLoadAll: t });
                },
                setUserSelectCoverInfo: function (e, t) {
                  return (0, v.Z)(
                    (0, v.Z)({}, e),
                    {},
                    { userSelectCoverInfo: t }
                  );
                },
              },
            },
            w = {
              state: {
                isShareTicket: !1,
                shareTicket: null,
                checkedTemplate: "",
                shareQRCodeImageUrl: "",
                isShowDeleteTicketModal: !1,
                deleteTicket: null,
                paidScrollRadio: 0,
                userTicketCovers: null,
              },
              reducers: {
                setIsShareTicket: function (e, t) {
                  return (0, v.Z)((0, v.Z)({}, e), {}, { isShareTicket: t });
                },
                setShareTicket: function (e, t) {
                  return (0, v.Z)((0, v.Z)({}, e), {}, { shareTicket: t });
                },
                setCheckedTemplate: function (e, t) {
                  return (0, v.Z)((0, v.Z)({}, e), {}, { checkedTemplate: t });
                },
                setShareQRCodeImageUrl: function (e, t) {
                  return (0, v.Z)(
                    (0, v.Z)({}, e),
                    {},
                    { shareQRCodeImageUrl: t }
                  );
                },
                setIsShowDeleteTicketModal: function (e, t) {
                  return (0, v.Z)(
                    (0, v.Z)({}, e),
                    {},
                    { isShowDeleteTicketModal: t }
                  );
                },
                setDeleteTicket: function (e, t) {
                  return (0, v.Z)((0, v.Z)({}, e), {}, { deleteTicket: t });
                },
                setPaidScrollRadio: function (e, t) {
                  return (0, v.Z)((0, v.Z)({}, e), {}, { paidScrollRadio: t });
                },
                setUserTicketCovers: function (e, t) {
                  return (0, v.Z)((0, v.Z)({}, e), {}, { userTicketCovers: t });
                },
              },
            },
            b = {
              state: {
                addVisible: !1,
                canAddCountTicketAmount: 0,
                addTicketList: null,
              },
              reducers: {
                setAddVisible: function (e, t) {
                  return (0, v.Z)((0, v.Z)({}, e), {}, { addVisible: t });
                },
                setCanAddCountTicketAmount: function (e, t) {
                  return (0, v.Z)(
                    (0, v.Z)({}, e),
                    {},
                    { canAddCountTicketAmount: t }
                  );
                },
                setAddTicketList: function (e, t) {
                  return (0, v.Z)((0, v.Z)({}, e), {}, { addTicketList: t });
                },
              },
            },
            C = (function (e) {
              (0, l.Z)(n, e);
              var t = (0, d.Z)(n);
              function n() {
                return (0, r.Z)(this, n), t.apply(this, arguments);
              }
              return (0, o.Z)(n);
            })(x.Z);
          (0, k.Z)(C, "store", {
            models: {
              my12306Model: T.Z,
              ticketModel: Z,
              shareModel: w,
              addModel: b,
            },
          });
          var y,
            I = n(90129),
            N = n(49120),
            S = n(18783),
            A = n(79910),
            _ = n(13025),
            D = n(8271),
            M = n.n(D),
            V = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e() {
                  var t,
                    n,
                    i,
                    a,
                    r = arguments;
                  return (0, c.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = r.length > 0 && void 0 !== r[0] ? r[0] : 1),
                              (n = C.getState().ticketModel.pageIndex),
                              (i = {
                                bizType: "TRAIN",
                                pageIndex: 2 === t ? n + 1 : 1,
                                pageSize: 20,
                                showPaidTicketCover: 1,
                              }),
                              C.getDispatch().ticketModel.setPageIndex(
                                2 === t ? n + 1 : 1
                              ),
                              (e.prev = 4),
                              (e.next = 7),
                              (0, _.QJ)(i)
                            );
                          case 7:
                            if (
                              (a = e.sent) &&
                              1 == a.resultCode &&
                              a.trainTicketCollection
                            ) {
                              e.next = 12;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 12:
                            return e.abrupt(
                              "return",
                              (0, v.Z)({}, a.trainTicketCollection)
                            );
                          case 13:
                            e.next = 19;
                            break;
                          case 15:
                            return (
                              (e.prev = 15),
                              (e.t0 = e.catch(4)),
                              console.log(e.t0),
                              e.abrupt("return", null)
                            );
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 15]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            L = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e(t) {
                  var n, i, a;
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n =
                              C.getState().ticketModel.trainTicketCollection),
                            (i = n.trainList),
                            (e.next = 4),
                            V(t)
                          );
                        case 4:
                          (a = e.sent)
                            ? ((a.trainList = i.concat(a.trainList)), z(a))
                            : C.getDispatch().ticketModel.setIsLoadAll(!0);
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
            })(),
            z = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e(t) {
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          (t.sectionListData = R(t.trainList)),
                            C.getDispatch().ticketModel.setTrainTicketCollection(
                              t
                            ),
                            h().setStorageSync(
                              "USERCENTER_SHARE_COLLECTION_TICKET_NUM",
                              (null == t ? void 0 : t.ticketAmount) || 0
                            );
                        case 5:
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
            R = function (e) {
              if (!(Array.isArray(e) && e.length > 0)) return [];
              var t = new Map();
              e.forEach(function (e) {
                var n = M()(e.departureTime).format("YYYY年M月");
                Array.isArray(t.get(n)) ? t.get(n).push(e) : t.set(n, [e]);
              });
              var n = [];
              return (
                t.forEach(function (e, t) {
                  n.push({ title: t, data: e });
                }),
                n
              );
            },
            B = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e(t) {
                  var n, i, a, r, o;
                  return (0, c.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (i = t.actionType),
                              (a = t.orderTicketList),
                              (r = {
                                orderTicketList: a,
                                ticketType: 0,
                                account12306:
                                  (null === (n = C.getState().my12306Model) ||
                                  void 0 === n
                                    ? void 0
                                    : n.login12306Name) || "",
                                actionType: i,
                              }),
                              (e.prev = 2),
                              (e.next = 5),
                              (0, _.RM)(r)
                            );
                          case 5:
                            if ((o = e.sent) && 1 == o.resultCode) {
                              e.next = 10;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 10:
                            return e.abrupt("return", (0, v.Z)({}, o));
                          case 11:
                            e.next = 17;
                            break;
                          case 13:
                            return (
                              (e.prev = 13),
                              (e.t0 = e.catch(2)),
                              console.log(e.t0),
                              e.abrupt("return", null)
                            );
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 13]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            P = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e(t) {
                  var n, i;
                  return (0, c.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = {
                                prizeVersion: 1,
                                ticketNumber: [t.ticketLongNum],
                                ticketsInfo: [
                                  {
                                    ticketNumber: t.ticketLongNum,
                                    coverId: t.paidTicketCoverInfo
                                      ? t.paidTicketCoverInfo.coverId
                                      : 0,
                                  },
                                ],
                                orderNumber: t.orderId,
                                source: "ticket_folder",
                              }),
                              (e.prev = 1),
                              (e.next = 4),
                              (0, _.Uc)(n)
                            );
                          case 4:
                            if ((i = e.sent) && 1 == i.resultCode && i.data) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", []);
                          case 9:
                            return e.abrupt("return", i.data);
                          case 10:
                            e.next = 16;
                            break;
                          case 12:
                            return (
                              (e.prev = 12),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              e.abrupt("return", [])
                            );
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 12]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            E = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e() {
                  var t, n, i;
                  return (0, c.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = {
                                bizType: "TRAIN",
                                account12306:
                                  (null === (t = C.getState().my12306Model) ||
                                  void 0 === t
                                    ? void 0
                                    : t.login12306Name) || "",
                              }),
                              (e.prev = 1),
                              (e.next = 4),
                              (0, _.QO)(n)
                            );
                          case 4:
                            if ((i = e.sent) && 1 === i.resultCode) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", (0, v.Z)({}, i));
                          case 9:
                            return e.abrupt("return", (0, v.Z)({}, i));
                          case 10:
                            e.next = 16;
                            break;
                          case 12:
                            return (
                              (e.prev = 12),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              e.abrupt("return", null)
                            );
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            X = function (e) {
              var t = e.ticketAmount || 0;
              C.getDispatch().addModel.setCanAddCountTicketAmount(t);
            },
            j = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e() {
                  var t, n;
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), E();
                        case 2:
                          (t = e.sent) &&
                          (null == t ? void 0 : t.ticketAmount) > 0
                            ? ((n = O(t.trainList || [])),
                              C.getDispatch().addModel.setAddVisible(!0),
                              C.getDispatch().addModel.setAddTicketList(n),
                              C.getDispatch().addModel.setCanAddCountTicketAmount(
                                t.ticketAmount
                              ))
                            : (0, N.showToast)("暂无可添加的火车订单~");
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            F = function () {
              C.getDispatch().addModel.setAddVisible(!1);
            },
            O = function (e) {
              if (!(Array.isArray(e) && e.length > 0)) return [];
              var t = new Map();
              e.forEach(function (e) {
                var n = M()(e.departureTime).format("M月D日"),
                  i = "".concat(n, " ").concat(e.trainNum);
                (e._selected = !1),
                  Array.isArray(t.get(i)) ? t.get(i).push(e) : t.set(i, [e]);
              });
              var n = [];
              return (
                t.forEach(function (e, t) {
                  n.push({ title: t, data: e });
                }),
                n
              );
            },
            U = function (e) {
              var t = C.getState().addModel.addTicketList;
              t.map(function (t) {
                t.data.map(function (t) {
                  t._selected = e;
                });
              }),
                C.getDispatch().addModel.setAddTicketList(t);
            },
            H = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e() {
                  var t, n, i;
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            F(),
                            (t = C.getState().addModel.addTicketList),
                            (n = []),
                            t.map(function (e) {
                              e.data.map(function (e) {
                                if (e._selected) {
                                  var t = {
                                    orderId: e.orderId,
                                    ticketNum: e.ticketLongNum,
                                  };
                                  n.push(t);
                                }
                              });
                            }),
                            (i = { actionType: "ADD", orderTicketList: n }),
                            (e.next = 7),
                            B(i)
                          );
                        case 7:
                          if (!e.sent) {
                            e.next = 13;
                            break;
                          }
                          return (
                            (e.next = 11), (0, N.showToastAsync)("添加成功~")
                          );
                        case 11:
                          e.next = 15;
                          break;
                        case 13:
                          return (
                            (e.next = 15),
                            (0, N.showToastAsync)("添加失败了，请稍后重试！")
                          );
                        case 15:
                          Q();
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Q = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e() {
                  var t, n, i, a, r, o, s, l, d;
                  return (0, c.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), S.ZP.isLogin)) {
                              e.next = 4;
                              break;
                            }
                            return (e.next = 4), S.ZP.doLogin();
                          case 4:
                            return (
                              (0, N.showLoading)(),
                              (e.next = 7),
                              Promise.all([V(), E(), G()])
                            );
                          case 7:
                            return (
                              (a = e.sent),
                              (r = (0, I.Z)(a, 3)),
                              (o = r[0]),
                              (s = r[1]),
                              (l = r[2]),
                              (e.next = 14),
                              z(o)
                            );
                          case 14:
                            X(s), Y(l), (e.next = 21);
                            break;
                          case 18:
                            (e.prev = 18),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 21:
                            C.getDispatch().my12306Model.refresh(),
                              (0, N.hideLoading)(),
                              C.getPage().unfreezePullDown(),
                              (d =
                                (null === (t = (0, f.getCurrentInstance)()) ||
                                void 0 === t ||
                                null === (n = t.router) ||
                                void 0 === n ||
                                null === (i = n.params) ||
                                void 0 === i
                                  ? void 0
                                  : i.fromSource) || ""),
                              C.ubtTrace("TZWBuyTicketClip_exposure", {
                                PageId: C.getPage().pageId,
                                fromSource: d,
                              });
                          case 26:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 18]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            W = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e(t) {
                  var n, i;
                  return (0, c.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = {
                                ticketNums: [t.ticketLongNum],
                                bizType: "TRAIN",
                                arrivalCity: t.toCity,
                                departureTime: t.departureTime,
                              }),
                              (e.prev = 1),
                              (e.next = 4),
                              (0, _.qu)(n)
                            );
                          case 4:
                            if (
                              (i = e.sent) &&
                              1 === i.resultCode &&
                              i.ticketCovers
                            ) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 9:
                            return e.abrupt("return", i.ticketCovers);
                          case 10:
                            e.next = 16;
                            break;
                          case 12:
                            return (
                              (e.prev = 12),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              e.abrupt("return", null)
                            );
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 12]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            q = function (e) {
              C.getDispatch().shareModel.setUserTicketCovers(e);
            },
            G = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e() {
                  var t, n;
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            "/pages/usercenter/shareCollection/shareCollection?fromSource=AppletsQRcode",
                            (t = {
                              width: 280,
                              wxAppId: g.default.appId,
                              hyalineFlag: 1,
                              pagePath:
                                "/pages/usercenter/shareCollection/shareCollection?fromSource=AppletsQRcode",
                            }),
                            (e.next = 4),
                            A.Z.geNewtQRCodeImageUrl(t)
                          );
                        case 4:
                          if (((e.t0 = e.sent), e.t0)) {
                            e.next = 7;
                            break;
                          }
                          e.t0 = "";
                        case 7:
                          return (n = e.t0), e.abrupt("return", n);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Y = function (e) {
              C.getDispatch().shareModel.setShareQRCodeImageUrl(e);
            },
            K = n(71515),
            J = n(48813),
            $ = (0, p.$j)(function (e) {
              var t = e.ticketModel,
                n = e.addModel;
              return {
                trainTicketCollection: t.trainTicketCollection,
                canAddCountTicketAmount: n.canAddCountTicketAmount,
              };
            })(function (e) {
              var t = e.trainTicketCollection,
                n = e.canAddCountTicketAmount;
              return (0,
              J.BX)(K.View, { className: "share-collection-head-detail", children: [(0, J.tZ)(K.View, { class: "light-background" }), (0, J.BX)(K.View, { className: "content", children: [(0, J.BX)(K.View, { className: "num flex", children: [(0, J.BX)(K.View, { className: "item ticket", children: [(0, J.BX)(K.View, { children: [(null == t ? void 0 : t.ticketAmount) || 0, (0, J.tZ)(K.Text, { className: "union", children: "张" })] }), (0, J.tZ)(K.View, { className: "desc", children: "保存票数" })] }), (0, J.tZ)(K.View, { className: "split-line" }), (0, J.BX)(K.View, { className: "item", children: [(0, J.BX)(K.View, { children: [(null == t ? void 0 : t.cityAmount) || 0, (0, J.tZ)(K.Text, { className: "union", children: "座" })] }), (0, J.tZ)(K.View, { className: "desc", children: "去过的城市" })] })] }), (0, J.BX)(K.View, { className: "add", id: "ACBY", onClick: j, children: [(0, J.tZ)(K.Text, { className: "add-icon" }), (0, J.tZ)(K.Text, { children: "添加" })] }), n > 0 && (0, J.tZ)(K.View, { className: "can-add flex flex-center", children: "可添加" })] }), (0, J.tZ)(K.Image, { class: "img", src: "https://images3.c-ctrip.com/ztrip/train_bin/22-07/wdpj/img_qj_pj2@3x.png" })] });
            }),
            ee = n(16832);
          !(function (e) {
            (e.WECHAT = "WEIXIN"),
              (e.FRIEND_CIRCLE = "WEIXIN_CIRCLE"),
              (e.SAVE_TO_LOCAL = "SAVE_TO_LOCAL"),
              (e.DELETE = "DELETE");
          })(y || (y = {}));
          var te,
            ne = [
              {
                name: "微信好友",
                iconSource:
                  "https://images3.c-ctrip.com/ztrip/train_xie/2022-08/icon_fx_1.png",
                type: y.WECHAT,
              },
              {
                name: "保存到相册",
                iconSource:
                  "https://images3.c-ctrip.com/ztrip/train_xie/2022-08/icon_fx_4.png",
                type: y.SAVE_TO_LOCAL,
              },
              {
                name: "删除车票",
                iconSource:
                  "https://images3.c-ctrip.com/ztrip/train_xie/2022-05/icon_sc.png",
                type: y.DELETE,
              },
            ],
            ie = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e(t) {
                  var n, i, a, r;
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), W(t);
                        case 2:
                          return (n = e.sent), q(n), (e.next = 6), P(t);
                        case 6:
                          if (((e.t0 = e.sent), e.t0)) {
                            e.next = 9;
                            break;
                          }
                          e.t0 = [];
                        case 9:
                          (i = e.t0),
                            (a = !!i.length && i[0].canBeFlip),
                            (t.canBeFlip = a),
                            (r = !!i.length && i[0].isGrantReward),
                            (t.isGrantReward = r),
                            (t._flipResult = i.length ? i[0] : null),
                            C.getDispatch().shareModel.setIsShareTicket(!0),
                            C.getDispatch().shareModel.setShareTicket(t);
                        case 17:
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
            ce = function () {
              C.getDispatch().shareModel.setIsShareTicket(!1),
                C.getDispatch().shareModel.setShareTicket(null),
                C.getDispatch().shareModel.setCheckedTemplate("");
            },
            ae = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e(t, n, i) {
                  var a,
                    r,
                    o,
                    s,
                    l,
                    d,
                    u,
                    p,
                    f,
                    h,
                    m,
                    k,
                    x,
                    T,
                    v,
                    Z,
                    w,
                    b,
                    y,
                    I,
                    N,
                    S,
                    D,
                    V,
                    L,
                    z,
                    R,
                    B,
                    P,
                    E,
                    X,
                    j,
                    F,
                    O;
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = {
                              KTZ: g.default.isTieyou
                                ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-12/img_ewm_ty_1.png"
                                : "https://images3.c-ctrip.com/ztrip/train_xie/2022-08/img_ewm_1.png",
                              GDC: g.default.isTieyou
                                ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-12/img_ewm_ty_2.png"
                                : "https://images3.c-ctrip.com/ztrip/train_xie/2022-08/img_ewm_2.png",
                            }),
                            (r = t.departure),
                            (o = t.arrival),
                            (s = t.departureTime),
                            (l = t.arrivalTime),
                            (d = t.ticketPrice),
                            (u = t.trainNum),
                            (p = t.carriageNum),
                            (f = t.seatNum),
                            (h = t.seatType),
                            (m = t.passengerName),
                            (k = t.ticketLongNum),
                            (x = t.identificationNum),
                            (T = t.paidTicketCoverInfo),
                            (v = C.getState().shareModel.shareQRCodeImageUrl),
                            (Z = ""
                              .concat(M()(s).format("YYYY年M月D日"), " ")
                              .concat(M()(s).format("HH:mm"), " 开")),
                            (w = ""
                              .concat(M()(l).format("M月D日"), " ")
                              .concat(M()(l).format("HH:mm"), " 到")),
                            (b = "".concat(p).concat(f, " ").concat(h)),
                            (y = []),
                            (y = ee.I2),
                            (I = C.getState().shareModel.checkedTemplate),
                            (N =
                              I ||
                              (A.Z.getIsGDCTrain(t.trainNum)
                                ? ee.a8.GDC
                                : ee.a8.KTZ)),
                            (S = "GDC" === N),
                            (D = n !== ee.a8.OTHER ? n : N),
                            (V = y.find(function (e) {
                              return e.type === D;
                            }).bg),
                            (L = i ? v : a[D]),
                            (z = g.default.isTieyou
                              ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-05/fx_hz_ty.png"
                              : "https://images3.c-ctrip.com/ztrip/train_bin/22-07/wdpj/img_yz_hcp@3x.png"),
                            (R =
                              null != T && T.firstImg && n === ee.a8.OTHER
                                ? null == T
                                  ? void 0
                                  : T.firstImg
                                : ""),
                            (B =
                              null != T && T.secondImg && n === ee.a8.OTHER
                                ? null == T
                                  ? void 0
                                  : T.secondImg
                                : ""),
                            (P =
                              null != T && T.thirdImg && n === ee.a8.OTHER
                                ? null == T
                                  ? void 0
                                  : T.thirdImg
                                : ""),
                            (E = "".concat(
                              n === ee.a8.OTHER && null != T && T.coverId
                                ? "margin-top: -78px;"
                                : ""
                            )),
                            (X = ""),
                            (j =
                              '\n    .share-paid-ticket {\n      font-family: "SourceHanSansCN-Regular";\n      position: relative;\n      width: 660px;\n      height: 788px;\n    }\n    .share-collection-oldTicket {\n      position: relative;\n      width: 660px;\n      height: 428px;\n      box-sizing: border-box;\n      '.concat(
                                E,
                                '  \n    }\n  \n    .gdc-padding {\n      padding: 24px 42px 0 42px;\n    }\n  \n    .ktz-padding {\n      padding: 36px 50px 0 50px;\n    }\n  \n    .ktz-padding .content .trian-info .from {\n      text-align: left;\n    }\n  \n    .ktz-padding .content .trian-info .to {\n      text-align: right;  \n    }\n  \n    .share-collection-oldTicket .bg {\n      position: absolute;\n      width: 660px;\n      height: 428px;\n      top: 0;\n      left: 0;\n      content: "";\n    }\n  \n    .share-collection-oldTicket .content {\n      width: 100%;\n      height: 100%;\n      position: relative;\n    }\n  \n    .share-collection-oldTicket .content .long-num {\n      color: #ff8673;\n      font-size: 28px;\n      font-family: PingFangSC-Medium;\n      font-weight: 500;\n      margin-bottom: 2px;\n      line-height: 40px;\n    }\n    .share-collection-oldTicket .content .trian-info {\n      justify-content: space-around;\n    }\n  \n    .share-collection-oldTicket .content .trian-info .from, .to {\n      flex: 2;\n      color: #333333;\n      font-size: 44px;\n      font-family: PingFangSC-Semibold;\n      font-weight: 600;\n      text-align: center;\n    }\n\n    .share-collection-oldTicket .content .trian-info .from .city, .to .city {\n      font-family: "SourceHanSansSC-Bold";\n      line-height: 60px;\n    }\n  \n    .share-collection-oldTicket .content .trian-info .from .desc, .to .desc {\n      color: #999999;\n      font-size: 20px;\n      line-height: 28px;\n      font-family: PingFangSC-Regular;\n      font-weight: normal;\n    }\n\n    .ktz-padding .content .trian-info .from .city {\n      text-align: left;\n    }\n\n    .ktz-padding .content .trian-info .from .desc {\n      text-align: left;\n    }\n\n    .ktz-padding .content .trian-info .to .city  {\n      text-align: right;  \n    }\n\n    .ktz-padding .content .trian-info .to .desc {\n      text-align: right;  \n    }\n\n    .ktz-padding .content .trian-info .from .city {\n      text-align: left;\n    }\n  \n    .share-collection-oldTicket .content .trian-info .trian-num {\n      flex: 1;\n      color: #333333;\n      font-size: 32px;\n      font-family: PingFangSC-Regular;\n      font-weight: normal;\n      justify-content: nomal;\n    }\n  \n    .share-collection-oldTicket .content .trian-info .trian-num .arrow {\n      width: 76px;\n      height: 8px;\n    }\n  \n    .share-collection-oldTicket .content .time {\n      color: #666666;\n      font-size: 24px;\n      font-family: PingFangSC-Regular;\n      font-weight: normal;\n      justify-content: space-between;\n      margin-top: 10px;\n      line-height: 34px;\n    }\n  \n    .share-collection-oldTicket .content .detail {\n      justify-content: space-between;\n      color: #666666;\n      font-size: 24px;\n      font-family: PingFangSC-Regular;\n      font-weight: normal;\n      line-height: 34px;\n    }\n  \n    .share-collection-oldTicket .content .detail .price .tit {\n      margin-left: 40px;\n    }\n  \n    .share-collection-oldTicket .content .ident-content {\n      justify-content: space-between;\n      margin-top: 18px;\n    }\n  \n    .share-collection-oldTicket .content .ident-content .left .ident {\n      color: #333333;\n      font-size: 24px;\n      font-family: PingFangSC-Semibold;\n      font-weight: 600;\n      margin-bottom: 4px;\n    }\n  \n    .share-collection-oldTicket .content .ident-content .left .tip-box {\n      color: #999999;\n      font-size: 20px;\n      font-family: PingFangSC-Regular;\n      font-weight: normal;\n      border: 2px dashed #bbbbbb;\n      width: 400px;\n      padding: 8px 0;\n      box-sizing: border-box;\n      height: 72px;\n    }\n\n    .share-collection-oldTicket .content .ident-content .left .tip-box .tip-box-up {\n      margin-bottom: 4px\n    }\n\n    .ktz-padding .content .ident-content .left .tip-box {\n      color: #666666;\n      border: 2px dashed #666666;\n    }\n\n    .share-collection-oldTicket .content .ident-content .right {\n      background: url(https://images3.c-ctrip.com/ztrip/train_xie/2022-06/img_bk1.png);\n      width:114px;\n      height: 114px;\n      background-size: 100%;\n    }\n  \n    .share-collection-oldTicket .content .ident-content .qr-img {\n        width: 114px;\n      height: 114px;\n    }\n  \n    .share-collection-oldTicket .content .seal-img {\n      width: 120px;\n      height: 120px;\n      position: absolute;\n      content: "";\n      right: 38%;\n      top: 43%;\n    }\n  \n    .share-collection-oldTicket .content .bottom-tip {\n      position: absolute;\n      content: "";\n      color: #333333;\n      font-size: 18px;\n      font-family: PingFangSC-Medium;\n      font-weight: 500;\n      bottom: 5%;\n      opacity: 0.3;\n    }\n  \n    .flex {\n      display: flex;\n    }\n  \n    .flex-center {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  \n    .flex-column {\n      flex-direction: column;\n    }\n\n    .share-paid-ticket .paid-bottom {\n      width: 660px;\n      height: 440px;\n      z-index: -1;\n    }\n\n    .share-paid-ticket .paid-top {\n      width: 660px;\n      height: 440px;\n      z-index: 10;\n      position: absolute;\n      content: "";\n      margin-top: -10px;\n    }\n  \n    .share-paid-ticket .share-collection-oldTicket .paid-left-bottom {\n      position: absolute;\n      content: "";\n      bottom: 0;\n      left: 2px;\n      width: 120px;\n      height: 120px;\n    }\n  '
                              )),
                            (F = '\n    <div class="long-num">'
                              .concat(
                                k,
                                '</div>\n    <div class="trian-info flex">\n      <div class="from flex flex-column">\n        <span class="city">'
                              )
                              .concat(
                                r,
                                '</span>\n        <span class="desc">Chu fa zhan</span>\n      </div>\n      <div class="trian-num flex flex-column flex-center">\n        <span>'
                              )
                              .concat(
                                u,
                                '</span>\n        <img class="arrow" src="https://images3.c-ctrip.com/ztrip/train_xie/2022-06/img_jt.png"></img>\n      </div>\n      <div class="to flex flex-column">\n        <span class="city">'
                              )
                              .concat(
                                o,
                                '</span>\n        <span class="desc">Dao Da zhan</span>\n      </div>\n    </div>\n    <div class="time flex">\n      <div>'
                              )
                              .concat(Z, "</div>\n      <div>")
                              .concat(
                                w,
                                '</div>\n    </div>\n    <div class="detail flex">\n      <div class="price">\n        <span>',
                                "￥".concat(d, " 元"),
                                '</span>\n        <span class="tit">网</span>\n      </div>\n      <div>'
                              )
                              .concat(
                                b,
                                '</div>\n    </div>\n    <div class="ident-content flex">\n      <div class="left flex flex-column" style="justify-content: space-around;">\n        <div class="ident">',
                                "".concat(x, " ").concat(m, " "),
                                '</div>\n        <div class="tip-box flex flex-column flex-center">\n          <span class="tip-box-up">扫码查看我的火车票夹</span>\n          <span>',
                                "".concat(
                                  g.default.isTieyou ? "铁友" : "智行",
                                  " 火车票祝您旅途愉快"
                                ),
                                "</span>\n        </div>\n      </div>\n      ",
                                "".concat(
                                  i
                                    ? '\n        <div class="right">\n          <img class="qr-img" src="'.concat(
                                        L,
                                        '" />\n        </div>\n        '
                                      )
                                    : '<img class="qr-img" src="'.concat(
                                        L,
                                        '" />'
                                      )
                                ),
                                '\n    </div>\n    <img class="seal-img" src="'
                              )
                              .concat(z, '" />\n  ')),
                            (X = " <div>\n    <style>\n    ".concat(
                              "".concat(j),
                              '\n    </style>\n    <div class="screenshot-section share-collection-oldTicket ',
                              "".concat(
                                n === ee.a8.GDC ? "gdc-padding" : "ktz-padding"
                              ),
                              ' flex flex-center">\n      <img class="bg" src="',
                              V,
                              '" />\n      <div class="content flex flex-column">\n        ',
                              "".concat(F),
                              "\n        ",
                              "".concat(
                                n === ee.a8.GDC
                                  ? '<View class="bottom-tip">ZX2022ZX2022ZX2022ZX2022</View>'
                                  : ""
                              ),
                              "\n      </div>\n    </div>\n  </div>"
                            )),
                            n === ee.a8.OTHER &&
                              (X = " <div>\n      <style>\n      "
                                .concat(
                                  "".concat(j),
                                  '\n      </style>\n      <div class="screenshot-section share-paid-ticket">\n        ',
                                  R
                                    ? '<img class="paid-top" src="'.concat(
                                        R,
                                        '" />'
                                      )
                                    : "",
                                  '\n        <img class="paid-bottom" src="'
                                )
                                .concat(
                                  B,
                                  '" />\n        <div class="share-collection-oldTicket ',
                                  "".concat(S ? "gdc-padding" : "ktz-padding"),
                                  '  flex flex-center">\n          <img class="bg" src="'
                                )
                                .concat(
                                  V,
                                  '" />\n          <div class="content flex flex-column">\n            ',
                                  "".concat(F),
                                  '\n          </div>\n          <img class="paid-left-bottom" src="'
                                )
                                .concat(
                                  P,
                                  '" />    \n        </div>\n      </div>\n    </div>'
                                )),
                            (e.next = 26),
                            (0, _.TF)({ renderType: 2, html: X, imgType: 1 })
                          );
                        case 26:
                          return (
                            (O = e.sent),
                            console.log("res.img", O.img),
                            e.abrupt("return", O.img)
                          );
                        case 29:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n, i) {
                return e.apply(this, arguments);
              };
            })(),
            re = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e(t, n, i) {
                  var a, r, o, s;
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = i),
                            (r =
                              C.getState().ticketModel.userSelectCoverInfo) &&
                              ((n.paidTicketCoverInfo = r), (a = ee.a8.OTHER)),
                            C.ubtTrace("TZWBuyTicketClip_TicketDetail_click", {
                              PageId: C.getPage().pageId,
                              orderId: null == n ? void 0 : n.orderId,
                              CardType: ""
                                .concat(ee.ZZ[i])
                                .concat(r ? r.coverName : "默认"),
                              clickType: t.name,
                              TicketId: null == n ? void 0 : n.ticketLongNum,
                            }),
                            t.type !== y.WECHAT)
                          ) {
                            e.next = 9;
                            break;
                          }
                          return (e.next = 7), ae(n, a, !0);
                        case 7:
                          (o = e.sent),
                            h().downloadFile({
                              url: o,
                              success: function (e) {
                                C.getDispatch().shareModel.setIsShareTicket(!1),
                                  console.log("res", e),
                                  h().showShareImageMenu({
                                    path: e.tempFilePath,
                                  });
                              },
                            });
                        case 9:
                          if (t.type !== y.SAVE_TO_LOCAL) {
                            e.next = 14;
                            break;
                          }
                          return (e.next = 12), ae(n, a, !1);
                        case 12:
                          (s = e.sent), le(s);
                        case 14:
                          t.type === y.DELETE &&
                            (C.getDispatch().shareModel.setIsShareTicket(!1),
                            C.getDispatch().shareModel.setIsShowDeleteTicketModal(
                              !0
                            ),
                            C.getDispatch().shareModel.setDeleteTicket(n));
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n, i) {
                return e.apply(this, arguments);
              };
            })(),
            oe = function () {
              C.getDispatch().shareModel.setIsShowDeleteTicketModal(!1);
            },
            se = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e(t) {
                  var n;
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            oe(),
                            (n = {
                              actionType: "DELETE",
                              orderTicketList: [
                                {
                                  orderId: t.orderId,
                                  ticketNum: t.ticketLongNum,
                                },
                              ],
                            }),
                            (e.next = 4),
                            B(n)
                          );
                        case 4:
                          if (!e.sent) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (e.next = 8), (0, N.showToastAsync)("删除成功~")
                          );
                        case 8:
                          e.next = 12;
                          break;
                        case 10:
                          return (
                            (e.next = 12),
                            (0, N.showToastAsync)("删除失败了，请稍后重试！")
                          );
                        case 12:
                          Q();
                        case 13:
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
            le = (function () {
              var e = (0, a.Z)(
                (0, c.Z)().mark(function e(t) {
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          h().downloadFile({
                            url: t,
                            success: function (e) {
                              if (200 === e.statusCode) {
                                var t = e.tempFilePath;
                                h().saveImageToPhotosAlbum({
                                  filePath: t,
                                  success: function () {
                                    h().showToast({ title: "已保存到相册" });
                                  },
                                  fail: function (e) {
                                    console.log("downloadNetFile err:", e),
                                      h().showToast({
                                        title: "图片保存失败, 请重试",
                                        icon: "none",
                                      });
                                  },
                                });
                              }
                            },
                          });
                        case 1:
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
            de = function () {
              oe(), C.getDispatch().shareModel.setIsShareTicket(!0);
            },
            ue = function (e, t) {
              var n = C.getState().ticketModel.userSelectCoverInfo;
              C.ubtTrace("TZWBuyTicketClip_TicketDetail_exposure", {
                PageId: C.getPage().pageId,
                orderId: null == t ? void 0 : t.orderId,
                CardType: ""
                  .concat(ee.ZZ[null == e ? void 0 : e.type])
                  .concat(n ? (null == n ? void 0 : n.coverName) : "默认"),
                TicketId: null == t ? void 0 : t.ticketLongNum,
              }),
                (function (e) {
                  C.getDispatch().shareModel.setCheckedTemplate(e.type);
                })(e);
            },
            pe = u.default.memo(function (e) {
              var t,
                n,
                i = e.ticket,
                c = void 0 === i ? {} : i,
                a = c.departure,
                r = c.arrival,
                o = c.departureTime,
                s = c.ticketNumDisplay,
                l = c.passengerName,
                d = c.trainNum,
                u = c.carriageNum,
                p = c.seatNum,
                f = c.seatType,
                h = ""
                  .concat(M()(o).format("M/D"), " ")
                  .concat(M()(o).format("HH:mm"), "出发"),
                m = "".concat(u).concat(p, " ").concat(f);
              return (0, J.BX)(K.View, {
                className: "share-collection-ticket-item",
                id: "ACBX",
                onClick: function () {
                  return ie(c);
                },
                children: [
                  (null === (t = c.paidTicketCoverInfo) || void 0 === t
                    ? void 0
                    : t.bgImg) &&
                    (0, J.tZ)(K.Image, {
                      class: "paid-cover-bgImg",
                      src:
                        null === (n = c.paidTicketCoverInfo) || void 0 === n
                          ? void 0
                          : n.bgImg,
                    }),
                  (0, J.BX)(K.View, {
                    className: "content",
                    children: [
                      (0, J.BX)(K.View, {
                        className: "ticket-info flex",
                        children: [
                          (0, J.BX)(K.View, {
                            className: "time flex",
                            children: [
                              (0, J.tZ)(K.Text, { children: h }),
                              c.paidTicketCoverInfo &&
                                (0, J.tZ)(K.Text, {
                                  className: "commemorate flex flex-center",
                                  children: "纪念版",
                                }),
                            ],
                          }),
                          (0, J.tZ)(K.Text, {
                            className: "number",
                            children: s,
                          }),
                        ],
                      }),
                      (0, J.BX)(K.View, {
                        className: "ticket-station",
                        children: [
                          (0, J.tZ)(K.View, {
                            className: "station-name from-station",
                            children: a,
                          }),
                          (0, J.BX)(K.View, {
                            className: "center-content flex flex-column",
                            children: [
                              (0, J.tZ)(K.View, { class: "train-img" }),
                              (0, J.tZ)(K.Text, {
                                className: "num",
                                children: d,
                              }),
                            ],
                          }),
                          (0, J.tZ)(K.View, {
                            className: "station-name to-station",
                            children: r,
                          }),
                        ],
                      }),
                      (0, J.BX)(K.View, {
                        className: "ticket-detail flex",
                        children: [
                          (0, J.tZ)(K.Text, {
                            className: "pas-name",
                            children: l,
                          }),
                          (0, J.tZ)(K.Text, {
                            className: "seat-info",
                            children: m,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            fe = (0, p.$j)(function (e) {
              var t = e.ticketModel;
              return {
                trainTicketCollection: t.trainTicketCollection,
                isLoadAll: t.isLoadAll,
              };
            })(function (e) {
              var t = e.trainTicketCollection,
                n = e.isLoadAll,
                i = (t || {}).sectionListData,
                c = void 0 === i ? [] : i;
              return (0, J.tZ)(K.View, {
                className: "share-collection-ticket-list",
                children:
                  c.length > 0
                    ? c.map(function (e, t) {
                        return (0, J.BX)(
                          K.View,
                          {
                            class: "ticket-item",
                            children: [
                              (0, J.BX)(K.View, {
                                class: "title flex flex-center",
                                children: [
                                  (0, J.tZ)(K.Text, { children: e.title }),
                                  0 === t &&
                                    (0, J.tZ)(K.Text, {
                                      className: "desc",
                                      children:
                                        "仅供个人收藏 不可作为真实车票使用",
                                    }),
                                ],
                              }),
                              e.data &&
                                e.data.map(function (e, t) {
                                  return (0,
                                  J.tZ)(K.Block, { children: (0, J.tZ)(pe, { ticket: e }) }, "ticket_item_".concat(t));
                                }),
                              t === c.length - 1 &&
                                n &&
                                (0, J.tZ)(K.View, {
                                  className: "load-all-tips",
                                  children: "到底啦，没有更多了",
                                }),
                            ],
                          },
                          "ticket_list_".concat(t)
                        );
                      })
                    : (0, J.BX)(K.View, {
                        className: "no-data flex flex-center flex-column",
                        children: [
                          (0, J.tZ)(K.Image, {
                            className: "img",
                            src: "https://images3.c-ctrip.com/ztrip/train_xie/2022-12/img_pjy_kzt.png",
                          }),
                          (0, J.tZ)(K.Text, { children: "暂未保存车票" }),
                          (0, J.tZ)(K.Text, { children: "右上角可添加车票" }),
                        ],
                      }),
              });
            }),
            he = n(80689),
            me = (0, p.$j)(
              function (e) {
                var t = e.shareModel;
                return {
                  isShareTicket: t.isShareTicket,
                  shareTicket: t.shareTicket,
                  checkedTemplate: t.checkedTemplate,
                  shareQRCodeImageUrl: t.shareQRCodeImageUrl,
                  userTicketCovers: t.userTicketCovers,
                };
              },
              function (e) {
                var t = e.shareModel,
                  n = e.ticketModel;
                return {
                  onUpdateScrollRadio: t.setPaidScrollRadio,
                  handleGetPaidCoverInfo: n.setUserSelectCoverInfo,
                };
              }
            )(function (e) {
              var t = e.isShareTicket,
                n = e.shareTicket,
                i = e.checkedTemplate,
                c = e.shareQRCodeImageUrl,
                a = e.onUpdateScrollRadio,
                r = e.userTicketCovers,
                o = e.handleGetPaidCoverInfo;
              if (!t || !n) return null;
              var s = A.Z.getIsGDCTrain((null == n ? void 0 : n.trainNum) || "")
                ? ee.a8.GDC
                : ee.a8.KTZ;
              return (0,
              J.tZ)(he.Z, { visible: !0, isShowFlipButton: !0, shareTicket: n, tempKey: s, checkedTemplate: i, shareQRCodeImageUrl: c, onCanCel: ce, onUpdateScrollRadio: a, onCheckTicketTemplate: ue, onShareAction: re, ShareActionArray: ne, ubtTrace: C.ubtTrace, pageId: C.getPage().pageId, userTicketCovers: r, handleGetPaidCoverInfo: o, clickUbtKey: "TZWBuyTicketClip_TicketDetail_exposure" });
            }),
            ge = n(34229),
            ke = (0, p.$j)(function (e) {
              var t = e.shareModel;
              return {
                isShowDeleteTicketModal: t.isShowDeleteTicketModal,
                deleteTicket: t.deleteTicket,
              };
            })(function (e) {
              var t = e.isShowDeleteTicketModal,
                n = e.deleteTicket;
              return t && n
                ? (0, J.tZ)(K.View, {
                    className: "share-collection-delete-ticket-modal",
                    children: (0, J.BX)(ge.ZtDrawer, {
                      show: !0,
                      closeIconParams: { color: "#ccc", size: 24 },
                      onClose: oe,
                      onWrapClose: oe,
                      title: "确认删除车票",
                      children: [
                        (0, J.tZ)(K.Image, {
                          id: "ACBU",
                          onClick: de,
                          className: "arr",
                          src: "https://images3.c-ctrip.com/ztrip/train_xie/2022-12/icon_pj_j%20t.png",
                        }),
                        (0, J.tZ)(K.View, {
                          className: "content",
                          children: (0, J.BX)(K.View, {
                            className: "btn-content flex",
                            children: [
                              (0, J.tZ)(K.View, {
                                className: "btn left",
                                id: "ACBV",
                                onClick: oe,
                                children: "我再想想",
                              }),
                              (0, J.tZ)(K.View, {
                                className: "btn right",
                                id: "ACBW",
                                onClick: function () {
                                  return se(n);
                                },
                                children: "确认删除",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  })
                : null;
            }),
            xe = (0, p.$j)(function (e) {
              var t = e.addModel;
              return {
                addVisible: t.addVisible,
                canAddCountTicketAmount: t.canAddCountTicketAmount,
                addTicketList: t.addTicketList,
              };
            })(function (e) {
              var t = e.addVisible,
                n = e.canAddCountTicketAmount,
                i = e.addTicketList,
                c = (0, u.useState)([]),
                a = (0, I.Z)(c, 2),
                r = a[0],
                o = a[1];
              if (!t || !i) return null;
              var s = function (e, t) {
                var n = JSON.parse(JSON.stringify(r)),
                  i = "".concat(e).concat(t);
                n.includes(i)
                  ? n.map(function (e, t) {
                      e === i && n.splice(t, 1);
                    })
                  : n.push(i),
                  o(n),
                  (function (e, t) {
                    var n = C.getState().addModel.addTicketList,
                      i = n[e].data[t];
                    (n[e].data[t]._selected = !i._selected),
                      C.getDispatch().addModel.setAddTicketList(n);
                  })(e, t);
              };
              return (0, J.tZ)(K.View, {
                className: "share-collection-add-ticket-modal",
                children: (0, J.BX)(ge.ZtDrawer, {
                  show: !0,
                  closeIconParams: { color: "#ccc", size: 24 },
                  onClose: F,
                  onWrapClose: F,
                  title: "火车票订单",
                  children: [
                    (0, J.tZ)(K.View, {
                      class: "content",
                      children: (0, J.tZ)(K.ScrollView, {
                        scrollY: !0,
                        scrollWithAnimation: !0,
                        className: "list-content",
                        children:
                          i &&
                          i.map(function (e, t) {
                            return (0, J.BX)(
                              K.View,
                              {
                                class: "add-ticket-list-item",
                                children: [
                                  (0, J.BX)(K.View, {
                                    className: "head flex",
                                    children: [
                                      (0, J.tZ)(K.View, {
                                        className: "station",
                                        children: ""
                                          .concat(e.data[0].departure, "-")
                                          .concat(e.data[0].arrival),
                                      }),
                                      (0, J.tZ)(K.View, {
                                        className: "title",
                                        children: e.title,
                                      }),
                                    ],
                                  }),
                                  (0, J.tZ)(K.View, {
                                    class: "select-content",
                                    children: e.data.map(function (e, n) {
                                      return (0, J.BX)(
                                        K.View,
                                        {
                                          className:
                                            "add-ticket-item flex flex-center",
                                          id: "ACBS",
                                          onClick: function () {
                                            return s(t, n);
                                          },
                                          children: [
                                            (0, J.tZ)(K.View, {
                                              children: e.passengerName,
                                            }),
                                            (0, J.tZ)(K.View, {
                                              className: "".concat(
                                                r.includes(
                                                  "".concat(t).concat(n)
                                                )
                                                  ? "selected-icon"
                                                  : "select-icon"
                                              ),
                                            }),
                                          ],
                                        },
                                        "add-ticket_item_".concat(n)
                                      );
                                    }),
                                  }),
                                ],
                              },
                              "add_ticket_list_".concat(t)
                            );
                          }),
                      }),
                    }),
                    (0, J.BX)(K.View, {
                      className: "btn-content flex",
                      children: [
                        (0, J.tZ)(K.View, {
                          className: "btn left flex flex-center",
                          id: "ACBT",
                          onClick: function () {
                            if (r.length === n) o([]), U(!1);
                            else {
                              var e = [];
                              i.map(function (t, n) {
                                t.data.map(function (t, i) {
                                  var c = "".concat(n).concat(i);
                                  e.push(c);
                                });
                              }),
                                o(e),
                                U(!0);
                            }
                          },
                          children: "一键"
                            .concat(n === r.length ? "取消" : "添加", "（")
                            .concat(n, "）"),
                        }),
                        (0, J.tZ)(K.View, {
                          id: "ACBx",
                          className: "btn ".concat(
                            r.length > 0 ? "right" : "gray-right",
                            " flex flex-center"
                          ),
                          onClick: function () {
                            0 === r.length
                              ? (0, N.showToast)("请先选择要添加的票~")
                              : H();
                          },
                          children: "确认添加".concat(
                            r.length > 0 ? "（".concat(r.length, "）") : ""
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            Te =
              (0, m.h)(!1, { usePageWrapper: !0 })(
                (te = (function (e) {
                  (0, l.Z)(n, e);
                  var t = (0, d.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, r.Z)(this, n),
                      ((i = t.call(this, e)).store = C.create(
                        (0, s.Z)(i)
                      ).store),
                      (i.pageRootClassName = "user-center-share-collection"),
                      (i.autoExpose = !0),
                      (i.pageId = g.default.isTieyou
                        ? "10650087383"
                        : "10650087381"),
                      (i.pageTitle = "我的票夹"),
                      i
                    );
                  }
                  return (
                    (0, o.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          Q();
                        },
                      },
                      {
                        key: "onPullDownRefresh",
                        value: (function () {
                          var e = (0, a.Z)(
                            (0, c.Z)().mark(function e() {
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.t0 = !this.isFreezePullDown),
                                          !e.t0)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (e.next = 4), Q();
                                      case 4:
                                        h().stopPullDownRefresh();
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
                        key: "freezePullDown",
                        value: function () {
                          this.isFreezePullDown = !0;
                        },
                      },
                      {
                        key: "unfreezePullDown",
                        value: function () {
                          this.isFreezePullDown = !1;
                        },
                      },
                      {
                        key: "onReachBottom",
                        value: function () {
                          C.getState().ticketModel.isLoadAll || L(2);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, J.BX)(p.zt, {
                            store: this.store,
                            children: [
                              (0, J.tZ)($, {}),
                              (0, J.tZ)(fe, {}),
                              (0, J.tZ)(ke, {}),
                              (0, J.tZ)(xe, {}),
                              (0, J.tZ)(me, {}),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(u.default.Component))
              ) || te;
          Page(
            (0, i.createPageConfig)(
              Te,
              "pages/usercenter/shareCollection/shareCollection",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "我的票夹",
                navigationBarTextStyle: "white",
                navigationBarBackgroundColor: "#222",
                backgroundColorTop: "#222222",
                backgroundColorBottom: "#fff",
                navigationStyle: "custom",
                enablePullDownRefresh: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            34335, 52306, 57822, 72660, 53647, 43883, 69666, 83196, 88564,
            88930, 4991, 56737, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(66364);
          }
        ),
          e.O();
      },
    ]);
})();
