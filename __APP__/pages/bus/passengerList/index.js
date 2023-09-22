!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/e4417bd6df8881f75099b5a95342fe64.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [87419],
      {
        10186: function (e, t, s) {
          var n,
            a = s(32180),
            i = s(298),
            r = s(57042),
            c = s(24460),
            l = s(21867),
            o = s(86066),
            d = s(52500),
            u = s(92954),
            h = s.n(u),
            g = s(79792),
            m = s(79910),
            p = s(71515),
            f = s(4601),
            y = s(49120),
            T = s(43796),
            C = s(43005),
            k = s(81957),
            P = s(5830),
            N = s(48813),
            b = { 1: "身份证", 2: "护照", 7: "回乡证", 8: "台胞证" },
            v =
              (0, k.h)()(
                (n = (function (e) {
                  (0, l.Z)(s, e);
                  var t = (0, o.Z)(s);
                  function s(e) {
                    var n;
                    return (
                      (0, r.Z)(this, s),
                      ((n = t.call(this, e)).pageId = "10650060397"),
                      (n.state = {
                        isTieyou: g.default.isTieyou,
                        detail: null,
                        selectedPasIds: [],
                        memberPas: [],
                        buyTicketRule: null,
                        showGuide: !1,
                      }),
                      n
                    );
                  }
                  return (
                    (0, c.Z)(s, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t =
                              (0, u.getCurrentInstance)().router &&
                              (0, u.getCurrentInstance)().router.params;
                          console.log("params", t);
                          var s = JSON.parse(t.data || "");
                          console.log("data", s);
                          var n = null;
                          s && s.buyTicketRule && (n = s.buyTicketRule),
                            h().setNavigationBarTitle({ title: "选择乘车人" }),
                            (0, y.setNavigationBarColor)({
                              frontColor: "#000000",
                              backgroundColor: "#f8f8f8",
                            }),
                            this.setState({
                              selectedPasIds: s.selectedPasIds || [],
                              buyTicketRule: n,
                            }),
                            this.getPassengerData(),
                            (0, T.MX)({ utmSource: s.utmSource }).then(
                              function (t) {
                                t &&
                                  e.setState({
                                    showGuide: !(0, T.Bq)(
                                      T.t0.ADD_PASSENGER_IN_PASSENGER_LIST
                                    ),
                                  });
                              }
                            );
                        },
                      },
                      {
                        key: "getPassengerData",
                        value: function (e) {
                          var t = this,
                            s = {
                              headerPartner: g.default.isTieyou
                                ? "tieyou"
                                : "zhixing",
                              source: "flight",
                            };
                          (0, C.JV)(s)
                            .then(function (s) {
                              if (
                                (console.log("getCommonPassengerPromise", s),
                                1 === s.resultCode)
                              ) {
                                var n = t.state,
                                  a = n.buyTicketRule,
                                  r = n.selectedPasIds,
                                  c = s.commonPassengers,
                                  l = void 0 === c ? [] : c,
                                  o = P.c.transferPassengerInfo(l),
                                  d = t.handlePassengerRes(o, a);
                                if (
                                  (console.log("list", d),
                                  e && "add" === e.type)
                                ) {
                                  var u = e.passengerID;
                                  t.setState(
                                    {
                                      memberPas: d.map(function (e) {
                                        var t = -1 !== r.indexOf(e.PassengerID);
                                        return (0,
                                        i.Z)((0, i.Z)({}, e), {}, { isSelected: t, unableCheck: !0 });
                                      }),
                                    },
                                    function () {
                                      t.onClickSelect(
                                        d.find(function (e) {
                                          return e.PassengerID == u;
                                        })
                                      );
                                    }
                                  );
                                } else
                                  t.setState(
                                    {
                                      memberPas: d.map(function (e) {
                                        var t = !0;
                                        (e.idcard.text && e.idcard.no) ||
                                          (t = !1);
                                        var s = -1 !== r.indexOf(e.PassengerID);
                                        return (0,
                                        i.Z)((0, i.Z)({}, e), {}, { isSelected: s, unableCheck: t });
                                      }),
                                    },
                                    function () {
                                      console.log(t.state);
                                    }
                                  );
                              }
                            })
                            .catch(function (e) {
                              h().showToast({
                                title: "获取乘客信息失败，请稍后再试~",
                                icon: "none",
                                duration: 1500,
                              }),
                                console.log(e);
                            });
                        },
                      },
                      {
                        key: "handlePassengerRes",
                        value: function (e, t) {
                          var s = [];
                          return (
                            e.forEach(function (e) {
                              var n = e,
                                a = e.CommonPassengerCard,
                                i = JSON.parse(
                                  JSON.stringify(
                                    t.supportPassengerIdentityTypes
                                  )
                                ),
                                r = [];
                              i.forEach(function (e, t) {
                                "二代身份证" === e && (i[t] = "身份证");
                              }),
                                a.forEach(function (e) {
                                  (e.text = b[e.CardType]),
                                    (e.no = e.CardNo),
                                    (e.type = e.CardType),
                                    i.some(function (t) {
                                      return t == e.text;
                                    }) &&
                                      e.CardNo &&
                                      b[e.CardType] &&
                                      r.push(e);
                                }),
                                (a = r),
                                (a = m._.sortBy(a, "CardType")),
                                (n.CommonPassengerCard = a),
                                (n.idcards = a);
                              var c = a[0] || {};
                              (n.idcard = Object.assign({}, c)),
                                (!n.PassengerType ||
                                  ("A" != n.PassengerType &&
                                    "C" != n.PassengerType &&
                                    "X" != n.PassengerType)) &&
                                  (n.PassengerType = "A"),
                                (n.isChild = "C" == n.PassengerType ? 1 : 0),
                                (n.isTakeChild =
                                  "X" == n.PassengerType ? 1 : 0),
                                (n.birth = n.BirthDay),
                                (n.id = n.PassengerID),
                                (n.ptypeText = n.isTakeChild
                                  ? "携童票"
                                  : n.isChild
                                  ? "儿童票"
                                  : "成人票"),
                                (n.cname = n.CNName),
                                (n.EName = n.ENFirstName + " " + n.ENLastName),
                                (n.name =
                                  2 == n.idcard.type
                                    ? n.EName || n.cname
                                    : n.cname || n.EName),
                                n.CommonPassengerCard &&
                                  n.CommonPassengerCard.length &&
                                  s.push(n);
                            }),
                            s
                          );
                        },
                      },
                      {
                        key: "onClickAdd",
                        value: function () {
                          var e = this,
                            t = this.state.buyTicketRule;
                          this.navigateTo(
                            {
                              url: "/pages/bus/editPassenger/index",
                              data: JSON.stringify({
                                buyTicketRule: t,
                                pasInfo: null,
                              }),
                              callback: function (t) {
                                console.log("res", t),
                                  t &&
                                    t.needRefresh &&
                                    e.getPassengerData({
                                      type: "add",
                                      passengerID: t.passengerID,
                                    });
                              },
                            },
                            this
                          );
                        },
                      },
                      {
                        key: "checkDeletable",
                        value: function (e, t) {
                          var s,
                            n,
                            a = t;
                          if (1 == e.isChild || 1 == e.isTakeChild) return !0;
                          var i = [],
                            r = [],
                            c = [];
                          return (
                            m._.each(a, function (e) {
                              ("A" != e.passengerType &&
                                "A" != e.PassengerType) ||
                                r.push(e),
                                ("X" != e.passengerType &&
                                  "X" != e.PassengerType) ||
                                  i.push(e),
                                ("C" != e.passengerType &&
                                  "C" != e.PassengerType) ||
                                  c.push(e);
                            }),
                            (s = c.length > 0 || i.length > 0),
                            (n =
                              (r = r.filter(function (t) {
                                var s = e.PassengerID || e.id;
                                return s
                                  ? s != (t.PassengerID || t.id)
                                  : t.cname &&
                                      t.cname != e.cname &&
                                      t.idcard.no != e.idcard.no;
                              })).length > 0),
                            !s || n
                          );
                        },
                      },
                      {
                        key: "onClickSelect",
                        value: function (e) {
                          var t = this;
                          if (e) {
                            var s = this.state,
                              n = s.memberPas,
                              a = s.buyTicketRule;
                            if (!P.c.isValidName(e))
                              return h().showModal({
                                title: "提示",
                                content: "姓名不正确，请重新编辑",
                                showCancel: !1,
                              });
                            var r = [],
                              c = [],
                              l = [],
                              o = [];
                            if (
                              (m._.each(n, function (e) {
                                e.isSelected &&
                                  (r.push(e),
                                  "A" == e.PassengerType && l.push(e),
                                  "X" == e.PassengerType && c.push(e),
                                  "C" == e.PassengerType && o.push(e));
                              }),
                              e.idcard && e.idcard.text && e.idcard.no)
                            ) {
                              var d = "";
                              if (
                                (e.isSelected
                                  ? this.checkDeletable(e, r)
                                    ? "A" == e.PassengerType &&
                                      (l.length >= c.length ||
                                        (d = "成人不能比携童数量少"))
                                    : (d = "儿童不能单独出行，请先删除儿童。")
                                  : e.isTakeChild
                                  ? a.supportTicketType &&
                                    -1 !== a.supportTicketType.indexOf(3)
                                    ? c.length < a.supportTakeChildNumber
                                      ? c.length < l.length ||
                                        (d = "携童数量不能超过成人")
                                      : (d = "携童超过限定数量")
                                    : (d = "该车次不支持免票携童")
                                  : !e.isChild ||
                                    (a.supportTicketType &&
                                      -1 !== a.supportTicketType.indexOf(2))
                                  ? e.isChild &&
                                    !(function (e) {
                                      return m._.find(e, function (e) {
                                        return !e.isChild;
                                      });
                                    })(r)
                                    ? (d = "儿童不能单独出行，请先添加成人")
                                    : r.filter(function (e) {
                                        return "X" !== e.PassengerType;
                                      }).length >= a.maxSaleTicketNumber &&
                                      (d = "最多选".concat(
                                        a.maxSaleTicketNumber,
                                        "名乘客哦~"
                                      ))
                                  : (d = "该车次不支持儿童票"),
                                d)
                              )
                                h().showToast({
                                  title: d,
                                  icon: "none",
                                  duration: 1500,
                                });
                              else {
                                var u = e.isSelected,
                                  g = n.map(function (t) {
                                    return (0,
                                    i.Z)((0, i.Z)({}, t), {}, { isSelected: t.PassengerID === e.PassengerID ? !u : t.isSelected });
                                  });
                                this.setState({ memberPas: g });
                              }
                            } else
                              this.navigateTo(
                                {
                                  url: "/pages/bus/editPassenger/index",
                                  data: JSON.stringify({
                                    buyTicketRule: a,
                                    pasInfo: e,
                                  }),
                                  callback: function (e) {
                                    console.log("res", e),
                                      e &&
                                        e.needRefresh &&
                                        t.getPassengerData();
                                  },
                                },
                                this
                              );
                          }
                        },
                      },
                      {
                        key: "onClickEdit",
                        value: function (e) {
                          var t = this,
                            s = this.state.buyTicketRule;
                          this.navigateTo(
                            {
                              url: "/pages/bus/editPassenger/index",
                              data: JSON.stringify({
                                buyTicketRule: s,
                                pasInfo: e,
                              }),
                              callback: function (e) {
                                console.log("res", e),
                                  e && e.needRefresh && t.getPassengerData();
                              },
                            },
                            this
                          );
                        },
                      },
                      {
                        key: "onClickConfirm",
                        value: function () {
                          var e = this.state.memberPas,
                            t = [];
                          e.forEach(function (e) {
                            e.isSelected && t.push(e.PassengerID);
                          }),
                            this.invokeCallback({
                              needRefresh: !0,
                              selectedPasIds: t,
                            }),
                            this.navigateBack();
                        },
                      },
                      {
                        key: "onGuideRead",
                        value: function () {
                          (0, T.EC)(T.t0.ADD_PASSENGER_IN_PASSENGER_LIST),
                            this.setState({ showGuide: !1 });
                        },
                      },
                      {
                        key: "handleCloseGuide",
                        value: function () {
                          var e = this;
                          (0, T.G8)("skip").finally(function () {
                            e.setState({ showGuide: !1 });
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            s = t.isTieyou,
                            n = t.memberPas,
                            a = t.showGuide,
                            i = (0, N.BX)(p.View, {
                              className: "guide-bus-passenerList",
                              children: [
                                (0, N.BX)(p.View, {
                                  className: "guide-row",
                                  children: [
                                    (0, N.tZ)(p.Image, {
                                      src: "https://images3.c-ctrip.com/train/yzh/bus-mini/guide/hands@3x.png",
                                      mode: "aspectFit",
                                      className: "guide-point",
                                    }),
                                    (0, N.tZ)(p.Image, {
                                      src: "https://images3.c-ctrip.com/train/yzh/bus-mini/guide/yd@3x.png",
                                      mode: "widthFix",
                                      className: "guide-line",
                                    }),
                                    (0, N.BX)(p.View, {
                                      className: "guide-text",
                                      children: [
                                        "点击",
                                        (0, N.tZ)(p.Text, {
                                          className: "hl",
                                          children: "新增乘客",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, N.tZ)(p.View, {
                                  className: "guide-jump-btn",
                                  id: "AdFL",
                                  onClick: this.handleCloseGuide,
                                  children: "跳过",
                                }),
                              ],
                            });
                          return (0, N.BX)(p.View, {
                            className: (s ? "ty" : "zx") + " passenger-list",
                            children: [
                              (0, N.tZ)(p.View, {
                                className: "fixed-top",
                                children: (0, N.tZ)(p.View, {
                                  className: "content",
                                  children: (0, N.tZ)(f.Z, {
                                    showGuide: a,
                                    TipComp: i,
                                    rootContentClassName:
                                      "bus-passenerList-guide-display-conent",
                                    onRead: this.onGuideRead.bind(this),
                                    children: (0, N.BX)(p.View, {
                                      className: "btn",
                                      id: "AdFM",
                                      onClick: this.onClickAdd,
                                      children: [
                                        (0, N.tZ)(p.Text, {
                                          className: "ifont-fail iconfont",
                                        }),
                                        (0, N.tZ)(p.Text, {
                                          className: "txt",
                                          children: "新增乘客",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                              (0, N.tZ)(p.View, {
                                className: "wrap",
                                children: n.map(function (t, s) {
                                  return (0,
                                  N.BX)(p.View, { className: "item " + (t.isSelected ? "cur" : ""), id: "AdFN", onClick: e.onClickSelect.bind(e, t), children: [(0, N.tZ)(p.View, { className: "check", children: (0, N.tZ)(p.View, { className: "icon-check" }) }), (0, N.BX)(p.View, { className: "main", children: [(0, N.BX)(p.View, { className: "title", children: [(0, N.tZ)(p.View, { className: "name", children: t.name }), (0, N.tZ)(p.View, { className: "type", children: t.ptypeText })] }), (0, N.tZ)(p.View, { className: "card", children: t.idcard.text && t.idcard.no ? (0, N.BX)(p.Block, { children: [(0, N.tZ)(p.Text, { children: t.idcard.text }), (0, N.tZ)(p.Text, { children: t.idcard.no })] }) : (0, N.tZ)(p.Block, { children: (0, N.tZ)(p.Text, { className: "red", children: "信息不全，点击编辑补充信息" }) }) })] }), (0, N.tZ)(p.View, { className: "edit", id: "AdFO", onClick: e.onClickEdit.bind(e, t), children: (0, N.tZ)(p.Text, { className: "ifont-edit iconfont" }) })] }, s);
                                }),
                              }),
                              (0, N.tZ)(p.View, {
                                className: "fixed-bottom",
                                children: (0, N.tZ)(p.View, {
                                  className: "content",
                                  children: (0, N.tZ)(p.Button, {
                                    className: "btn",
                                    id: "AdFP",
                                    onClick: this.onClickConfirm,
                                    children: "确定",
                                  }),
                                }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    s
                  );
                })(d.default.Component))
              ) || n;
          Page(
            (0, a.createPageConfig)(
              v,
              "pages/bus/passengerList/index",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [86230, 36941, 97144, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(10186);
        }),
          e.O();
      },
    ]);
})();
