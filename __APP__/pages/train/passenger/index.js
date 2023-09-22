!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/dc0cfe7c36c66175a01e7585a0cfebf3.js"),
    require("../sub-common/19f27d7cebe94aa1035a5e0048e105a3.js"),
    require("../sub-common/8e7fedfd866fcd380b23fd0a31b6f284.js"),
    require("../sub-common/342bdcbe80e808fa7b62443e18d9142f.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [48415],
      {
        49253: function (e, t, n) {
          var i,
            a = n(32180),
            r = n(79301),
            o = n(95308),
            s = n(74921),
            l = n(298),
            c = n(57042),
            u = n(24460),
            d = n(21867),
            f = n(86066),
            m = n(52500),
            h = n(25391),
            p = n(81957),
            v = n(71515),
            N = n(3205),
            g = n(92954),
            y = n.n(g),
            C = n(20592),
            T = n(49120),
            Z = n(13025),
            w = n(63899),
            b = n(79792),
            S = n(45742),
            V = n(96158),
            x = n(85423),
            I = n(34229),
            k = n(48813),
            P = ["children", "className", "renderView"],
            B = function (e) {
              var t = e.openOcr;
              return (0, k.BX)(v.View, {
                className: "flex flex-column flex-center ocr-btn",
                id: "AKFK",
                onClick: t,
                children: [
                  (0, k.BX)(v.View, {
                    className: "title flex flex-center",
                    children: [
                      (0, k.tZ)(v.Image, {
                        className: "ocr-icon",
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/icon_smzj@3x.webp",
                        webp: !0,
                        mode: "aspectFi",
                      }),
                      (0, k.tZ)(v.View, { children: "扫描证件添加" }),
                    ],
                  }),
                  (0, k.tZ)(v.View, {
                    className: "desc",
                    children: "仅支持身份证和中国大陆护照",
                  }),
                ],
              });
            },
            A = function (e) {
              var t = e.name,
                n = void 0 === t ? "" : t,
                i = e.icon,
                a = void 0 === i ? "" : i,
                r = e.iconSize,
                o = void 0 === r ? 12 : r,
                s = e.onClick,
                l = void 0 === s ? function () {} : s,
                c = e.renderCell,
                u = void 0 === c ? function () {} : c;
              return (0, k.BX)(v.View, {
                className: "table-cell flex flex-center",
                id: "AKFL",
                onClick: l,
                children: [
                  (0, k.tZ)(v.View, {
                    className: "name",
                    children:
                      "function" == typeof n ? (null == n ? void 0 : n()) : n,
                  }),
                  (0, k.tZ)(v.View, {
                    className: "content flex-1",
                    children: null == u ? void 0 : u(),
                  }),
                  a &&
                    (0, k.tZ)(v.Text, {
                      className: "icon iconfont2 ".concat(a),
                      style: { fontSize: "".concat(o, "px") },
                    }),
                ],
              });
            },
            F = function (e) {
              var t = e.children,
                n = e.className,
                i = e.renderView,
                a = (0, s.Z)(e, P);
              return (0, k.tZ)(
                v.View,
                (0, l.Z)(
                  (0, l.Z)({ className: "unit-cell ".concat(n) }, a),
                  {},
                  { children: i ? (null == i ? void 0 : i()) : t }
                )
              );
            },
            R = function () {
              return (0, k.BX)(F, {
                className: "trn-ticket-desc",
                children: [
                  (0, k.BX)(v.View, {
                    className: "flex flex-center title-view",
                    children: [
                      (0, k.BX)(v.View, {
                        className: "flex-1 flex flex-center title",
                        style: { justifyContent: "start" },
                        children: [
                          (0, k.tZ)(v.Text, { children: "儿童购票说明" }),
                          (0, k.tZ)(v.View, {
                            className: "tag",
                            children: "新规",
                          }),
                        ],
                      }),
                      (0, k.BX)(v.View, {
                        className: "flex flex-center desc",
                        id: "AKFM",
                        onClick: function () {
                          N.Z.twebview({
                            data: {
                              url: "https://".concat(
                                b.default.h5domain,
                                "/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=child"
                              ),
                            },
                          });
                        },
                        children: [
                          "更多说明",
                          (0, k.tZ)(v.Text, {
                            className: "icon iconfont2 ifont2-arr",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.tZ)(x.iA, {
                    className: "table-content",
                    children: (0, k.BX)(x.p3, {
                      children: [
                        (0, k.BX)(x.Tr, {
                          className: "hd-tr",
                          children: [
                            (0, k.tZ)(x.Td, {
                              className: "c",
                              children: "年龄",
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "c",
                              children: "购票方式及类型",
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "c",
                              children: "是否有座",
                            }),
                          ],
                        }),
                        (0, k.BX)(x.Tr, {
                          children: [
                            (0, k.tZ)(x.Td, {
                              className: "l",
                              children: "≥14周岁",
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "l",
                              children: "儿童本人身份证购买成人票",
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "c",
                              children: "有座",
                            }),
                          ],
                        }),
                        (0, k.BX)(x.Tr, {
                          children: [
                            (0, k.tZ)(x.Td, {
                              className: "l",
                              children: "6-14周岁",
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "l",
                              children: (0, k.tZ)(I.ZtRichText, {
                                nodes:
                                  '儿童本人身份证购买<font color="#FD9227">优惠儿童票</font>',
                              }),
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "c",
                              children: "有座",
                            }),
                          ],
                        }),
                        (0, k.BX)(x.Tr, {
                          children: [
                            (0, k.tZ)(x.Td, {
                              className: "l",
                              children: "<6周岁",
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "l",
                              children: (0, k.tZ)(I.ZtRichText, {
                                nodes:
                                  '儿童本人身份证购买<font color="#03B86F">免费儿童票</font>',
                              }),
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "c",
                              children: "无座",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, k.BX)(v.View, {
                    className: "extra-desc",
                    children: [
                      (0, k.tZ)(v.View, {
                        className: "title",
                        children: "其他说明",
                      }),
                      (0, k.BX)(v.View, {
                        className: "desc-content",
                        children: [
                          (0, k.tZ)(v.View, {
                            className: "text-li flex",
                            children: (0, k.BX)(v.View, {
                              className: "text-li-con flex-1",
                              children: [
                                "如儿童无身份证，",
                                (0, k.tZ)(v.Text, {
                                  children: "需携带户口本，人工检票进站.",
                                }),
                              ],
                            }),
                          }),
                          (0, k.tZ)(v.View, {
                            className: "text-li flex",
                            children: (0, k.BX)(v.View, {
                              className: "text-li-con flex-1",
                              children: [
                                "每一名持票成年人旅客可",
                                (0, k.tZ)(v.Text, {
                                  children:
                                    "免费携带一名未满6周岁且不单独占用席位的儿童乘车",
                                }),
                                "，超过一名时，超过人数应当购买儿童优惠票。儿童年龄按乘车日期计算。",
                              ],
                            }),
                          }),
                          (0, k.tZ)(v.View, {
                            className: "text-li flex",
                            children: (0, k.BX)(v.View, {
                              className: "text-li-con flex-1",
                              children: [
                                "免费乘车儿童未在线申报免费儿童票，",
                                (0, k.tZ)(v.Text, {
                                  children: "需发车前在售票窗口办理申报手续。",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            },
            $ = function () {
              return (0, k.BX)(F, {
                className: "trn-ticket-desc",
                children: [
                  (0, k.BX)(v.View, {
                    className: "flex flex-center title-view",
                    children: [
                      (0, k.tZ)(v.View, {
                        className: "flex-1 flex flex-center title",
                        style: { justifyContent: "start" },
                        children: (0, k.tZ)(v.Text, {
                          children: "学生购票说明",
                        }),
                      }),
                      (0, k.BX)(v.View, {
                        className: "flex flex-center desc",
                        id: "AKFN",
                        onClick: function () {
                          N.Z.twebview({
                            data: {
                              url: "https://".concat(
                                b.default.h5domain,
                                "/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=student"
                              ),
                            },
                          });
                        },
                        children: [
                          "更多说明",
                          (0, k.tZ)(v.Text, {
                            className: "icon iconfont2 ifont2-arr",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.tZ)(x.iA, {
                    className: "table-content",
                    children: (0, k.BX)(x.p3, {
                      children: [
                        (0, k.BX)(x.Tr, {
                          children: [
                            (0, k.tZ)(x.Td, {
                              className: "c hd-tr",
                              children: "乘车时间",
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "l",
                              children: "因疫情影响，铁路局暂定学生票全年可订",
                            }),
                          ],
                        }),
                        (0, k.BX)(x.Tr, {
                          children: [
                            (0, k.tZ)(x.Td, {
                              className: "c hd-tr",
                              children: "优惠坐席",
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "l",
                              children: "二等座、硬座、硬卧、无座",
                            }),
                          ],
                        }),
                        (0, k.BX)(x.Tr, {
                          children: [
                            (0, k.tZ)(x.Td, {
                              className: "c hd-tr",
                              children: "优惠价格",
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "l",
                              children:
                                "二等座(7.5折）、硬卧(全价-50%硬座价格)、硬座（5折）",
                            }),
                          ],
                        }),
                        (0, k.BX)(x.Tr, {
                          children: [
                            (0, k.tZ)(x.Td, {
                              className: "c hd-tr",
                              children: "使用次数",
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "l",
                              children:
                                "每年限于4次单程，当年未使用次数不能留至下年",
                            }),
                          ],
                        }),
                        (0, k.BX)(x.Tr, {
                          children: [
                            (0, k.tZ)(x.Td, {
                              className: "c hd-tr",
                              children: "乘车区间",
                            }),
                            (0, k.tZ)(x.Td, {
                              className: "l",
                              children: "必须与学生优惠区间路段一致",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, k.BX)(v.View, {
                    className: "extra-desc",
                    children: [
                      (0, k.tZ)(v.View, {
                        className: "title",
                        children: "其他说明",
                      }),
                      (0, k.tZ)(v.View, {
                        className: "desc-content",
                        children: (0, k.tZ)(v.View, {
                          className: "text-li",
                          children: (0, k.tZ)(v.View, {
                            className: "text-li-con",
                            children:
                              "首次在网上购买学生票的用户，乘车前须到车站办理学生优惠资质，核验后方可乘车。",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              });
            },
            E = function (e) {
              var t = e.isSelect,
                n = void 0 !== t && t,
                i = e.onSelect,
                a = void 0 === i ? function () {} : i,
                r = n
                  ? '已将该乘客添加至受让（受让人可<font color="#00C777">免费兑换车票</font>）'
                  : '将该乘客添加至受让人（受让人可<font color="#FD9227">免费兑换车票</font>）';
              return (0, k.BX)(v.View, {
                className: "flex flex-center add-assignee ".concat(
                  n ? "selected" : ""
                ),
                children: [
                  (0, k.tZ)(v.View, {
                    className: "flex-1",
                    children: (0, k.tZ)(I.ZtRichText, { nodes: r }),
                  }),
                  (0, k.tZ)(v.View, {
                    className: "switch-ui",
                    onClick: a,
                    children: (0, k.tZ)(v.View, { className: "switch-point" }),
                  }),
                ],
              });
            },
            _ = n(90129),
            X = n(94262),
            D = (function (e) {
              (0, d.Z)(n, e);
              var t = (0, f.Z)(n);
              function n(e) {
                var i;
                return (
                  (0, c.Z)(this, n),
                  ((i = t.call(this, e)).state = {
                    isTieyou: b.default.isTieyou,
                    show: !1,
                    nameInputFocus: !1,
                    noInputFocus: !1,
                  }),
                  i
                );
              }
              return (
                (0, u.Z)(n, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.initPage(this.props);
                    },
                  },
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      this.initPage(e);
                    },
                  },
                  {
                    key: "initPage",
                    value: function (e) {
                      this.setState({
                        show: e.visible,
                        name: e.info && e.info.name,
                        no: e.info && e.info.no,
                      });
                    },
                  },
                  {
                    key: "onClickRepeat",
                    value: function () {
                      this.props.onRepeat();
                    },
                  },
                  {
                    key: "onClickConfirm",
                    value: function () {
                      var e = this.state,
                        t = e.name,
                        n = e.no;
                      this.props.onConfirm({ name: t, no: n });
                    },
                  },
                  {
                    key: "onClickCancel",
                    value: function () {
                      this.props.onCancel();
                    },
                  },
                  {
                    key: "setUserInfoName",
                    value: function (e) {
                      this.setState({ name: e.detail.value });
                    },
                  },
                  {
                    key: "setUserInfoNo",
                    value: function (e) {
                      this.setState({ no: e.detail.value });
                    },
                  },
                  {
                    key: "focusNameInput",
                    value: function () {
                      this.setState({ nameInputFocus: !0 });
                    },
                  },
                  {
                    key: "focusNoInput",
                    value: function () {
                      this.setState({ noInputFocus: !0 });
                    },
                  },
                  {
                    key: "onNameInputBlur",
                    value: function () {
                      this.setState({ nameInputFocus: !1 });
                    },
                  },
                  {
                    key: "onNoInputBlur",
                    value: function () {
                      this.setState({ noInputFocus: !1 });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.state,
                        t = e.isTieyou,
                        n = e.show,
                        i = e.name,
                        a = e.no,
                        r = e.nameInputFocus,
                        o = e.noInputFocus;
                      return (0, k.tZ)(v.View, {
                        className: "bus-card-ocr-modal",
                        children:
                          n &&
                          (0, k.BX)(v.View, {
                            className: (t ? "ty" : "zx") + " cardocr-modal",
                            children: [
                              (0, k.tZ)(v.View, {
                                className:
                                  "modal-mask " + (n ? "visible" : "hidden"),
                              }),
                              (0, k.tZ)(v.View, {
                                className:
                                  "modal-view " + (n ? "visible" : "hidden"),
                                children: (0, k.BX)(v.View, {
                                  className: "modal-content",
                                  children: [
                                    (0, k.tZ)(v.View, {
                                      className: "title",
                                      children: "请核对扫描信息是否正确",
                                    }),
                                    (0, k.tZ)(v.View, {
                                      className: "desc",
                                      children:
                                        "请您仔细核对姓名或证件号码错误将导致无法正常出票和乘车",
                                    }),
                                    (0, k.BX)(v.View, {
                                      className: "info",
                                      children: [
                                        (0, k.BX)(v.View, {
                                          className: "item",
                                          children: [
                                            (0, k.tZ)(v.View, {
                                              className: "label",
                                              children: "姓名",
                                            }),
                                            (0, k.tZ)(v.Input, {
                                              className: "txt input",
                                              type: "text",
                                              value: i,
                                              holdKeyboard: !0,
                                              focus: r,
                                              onInput:
                                                this.setUserInfoName.bind(this),
                                              onBlur:
                                                this.onNameInputBlur.bind(this),
                                            }),
                                            (0, k.tZ)(v.View, {
                                              className: "ifont-edit iconfont",
                                              id: "AKBl",
                                              onClick:
                                                this.focusNameInput.bind(this),
                                            }),
                                          ],
                                        }),
                                        (0, k.BX)(v.View, {
                                          className: "item",
                                          children: [
                                            (0, k.tZ)(v.View, {
                                              className: "label",
                                              children: "证件号码",
                                            }),
                                            (0, k.tZ)(v.Input, {
                                              className: "txt input",
                                              type: "text",
                                              maxlength: "18",
                                              holdKeyboard: !0,
                                              value: a,
                                              focus: o,
                                              onInput:
                                                this.setUserInfoNo.bind(this),
                                              onBlur:
                                                this.onNoInputBlur.bind(this),
                                            }),
                                            (0, k.tZ)(v.View, {
                                              className: "ifont-edit iconfont",
                                              id: "AKBm",
                                              onClick:
                                                this.focusNoInput.bind(this),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, k.BX)(v.View, {
                                      className: "bottom",
                                      children: [
                                        (0, k.tZ)(v.View, {
                                          className:
                                            "repeat-btn " + (t ? "ty" : "zx"),
                                          id: "AKBn",
                                          onClick:
                                            this.onClickRepeat.bind(this),
                                          children: "重新扫描",
                                        }),
                                        (0, k.tZ)(v.View, {
                                          className: "ok-btn",
                                          id: "AKBo",
                                          onClick:
                                            this.onClickConfirm.bind(this),
                                          children: "确认无误",
                                        }),
                                      ],
                                    }),
                                    (0, k.tZ)(v.View, {
                                      className: "close-icon",
                                      id: "AKBp",
                                      onClick: this.onClickCancel.bind(this),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                      });
                    },
                  },
                ]),
                n
              );
            })(m.default.Component);
          !(function (e) {
            e.OcrResult = "OcrResult";
          })(i || (i = {}));
          var L,
            O = "身份证",
            M = "护照",
            K = "台湾居民来往大陆通行证",
            z = "港澳台居民居住证",
            j = 0,
            H = 1,
            G = { 1: "成人", 2: "儿童", 3: "学生" },
            q = { M: "男", F: "女" },
            U = "smart",
            Y = void 0,
            W = function () {},
            J = function () {},
            Q = (0, m.forwardRef)(function (e, t) {
              (0, X.Z)(e);
              var n = (0, m.useState)(null),
                a = (0, _.Z)(n, 2),
                r = a[0],
                o = a[1],
                s = (0, m.useState)(!1),
                l = (0, _.Z)(s, 2),
                c = l[0],
                u = l[1],
                d = (0, m.useState)(!1),
                f = (0, _.Z)(d, 2),
                h = f[0],
                p = f[1];
              (0, m.useImperativeHandle)(t, function () {
                return {
                  showToast: function (e) {
                    o(null == e ? void 0 : e.toast),
                      (W =
                        (null == e ? void 0 : e.onConfirm) || function () {}),
                      (J = (null == e ? void 0 : e.onCancel) || function () {}),
                      p(!0);
                  },
                  closeToast: function (e) {
                    (e && e !== (null == r ? void 0 : r.toastCode)) || u(!1);
                  },
                };
              }),
                (0, m.useLayoutEffect)(
                  function () {
                    r &&
                      h &&
                      y().nextTick(function () {
                        u(!0), p(!1);
                      });
                  },
                  [h, r]
                );
              var v = function () {
                for (
                  var e, t = arguments.length, n = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  n[i] = arguments[i];
                null === (e = W) ||
                  void 0 === e ||
                  e.call.apply(e, [Y].concat(n)),
                  u(!1),
                  (W = J = function () {});
              };
              if (!r) return null;
              switch (r.toastCode) {
                case i.OcrResult:
                  return (0, k.tZ)(D, {
                    visible: c,
                    info: r.data,
                    onRepeat: v.bind(Y, 0),
                    onConfirm: v.bind(Y, 1),
                    onCancel: function () {
                      for (
                        var e, t = arguments.length, n = new Array(t), i = 0;
                        i < t;
                        i++
                      )
                        n[i] = arguments[i];
                      null === (e = J) ||
                        void 0 === e ||
                        e.call.apply(e, [Y].concat(n)),
                        u(!1),
                        (W = J = function () {});
                    }.bind(Y),
                  });
                default:
                  return null;
              }
            }),
            ee = n(77900),
            te = n(8271),
            ne = n.n(te),
            ie = n(52740),
            ae = function (e) {
              var t = e.Birthday;
              return (ne()().valueOf() - ne()(t).valueOf()) / 864e5 <= 5110;
            },
            re = function (e, t, n) {
              return !(
                !(function (e) {
                  var t = e.CNName;
                  if (!t) return (0, T.showToast)("姓名不能为空"), !1;
                  var n = ee.Z.isValidChineseName(t),
                    i = /^[A-Za-z ]+$/,
                    a = t.split(" "),
                    r = (0, _.Z)(a, 2),
                    o = r[0],
                    s = r[1],
                    l = i.test(o) && (!s || i.test(s));
                  return !(
                    !n &&
                    !l &&
                    ((0, T.getCurrentPage)().showCommonDialog(
                      "请填写正确的姓名"
                    ),
                    1)
                  );
                })(e) ||
                !(function (e, t) {
                  var n,
                    i = e.cardType,
                    a = e.IdentityNo;
                  if (!a)
                    return (
                      (0, T.getCurrentPage)().showCommonDialog(
                        "证件号码不能为空"
                      ),
                      !1
                    );
                  var r =
                    null ===
                      (n = ie.BT.find(function (e) {
                        return e.commonServiceCode == i;
                      })) || void 0 === n
                      ? void 0
                      : n.label;
                  return (0, V.nR)(r, a)
                    ? !(
                        2 == i &&
                        !ee.Z.isValidChineseName(e.CNName) &&
                        "CN" === e.Nationality &&
                        t !== U &&
                        ((0, T.getCurrentPage)().showCommonDialog(
                          "请根据护照显示填写正确的中文姓名"
                        ),
                        1)
                      )
                    : ((0, T.getCurrentPage)().showCommonDialog(
                        "请填写正确的".concat(r)
                      ),
                      !1);
                })(e, n) ||
                !(function (e) {
                  var t = e.Birthday;
                  if (!t)
                    return (
                      (0, T.getCurrentPage)().showCommonDialog(
                        "请选择出生日期"
                      ),
                      !1
                    );
                  if (ne()(t).valueOf() > ne()().valueOf())
                    return (
                      (0, T.getCurrentPage)().showCommonDialog(
                        "请选择正确的出生日期"
                      ),
                      !1
                    );
                  if (e.isChild) {
                    var n = (ne()().valueOf() - ne()(t).valueOf()) / 864e5;
                    if (n > 5110 || n < 30)
                      return (
                        (0, T.getCurrentPage)().showCommonDialog(
                          "出生满30天且小于".concat(
                            14,
                            "周岁才可以购买儿童票。请填写正确的出生日期。"
                          )
                        ),
                        !1
                      );
                  }
                  return !0;
                })(e) ||
                ((function (e) {
                  var t = e.Mobile,
                    n = e.countryCode;
                  return (
                    !!t &&
                    ("86" == n
                      ? /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/.test(t)
                      : "852" === n
                      ? /^(5|6|8|9)\d{7}$/.test(t)
                      : "853" === n
                      ? /^6\d{7}$/.test(t)
                      : "886" === n
                      ? /^[0][9]\d{8}$/.test(t)
                      : /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/.test(t))
                  );
                })(e)
                  ? !(function (e) {
                      return !(
                        "护照" === e.IdentityType &&
                        !e.Nationality &&
                        ((0, T.getCurrentPage)().showCommonDialog(
                          "国籍不能为空"
                        ),
                        1)
                      );
                    })(e) ||
                    !(function (e) {
                      var t = e.IdentityType;
                      return !(
                        "身份证" != t &&
                        "港澳台居民居住证" != t &&
                        !e.CardTimeLimit &&
                        ((0, T.getCurrentPage)().showCommonDialog(
                          "请选择证件有效期"
                        ),
                        1)
                      );
                    })(e) ||
                    (t &&
                      !(function (e) {
                        return !(
                          "护照" === e.IdentityType &&
                          !e.IssueAt &&
                          ((0, T.getCurrentPage)().showCommonDialog(
                            "发证机关不能为空"
                          ),
                          1)
                        );
                      })(e)) ||
                    (t &&
                      !(function (e) {
                        var t = e.IdentityType;
                        return !(
                          "身份证" != t &&
                          "港澳台居民居住证" != t &&
                          !e.Gender &&
                          ((0, T.getCurrentPage)().showCommonDialog(
                            "请选择性别"
                          ),
                          1)
                        );
                      })(e))
                  : ((0, T.getCurrentPage)().showCommonDialog(
                      "请输入正确的手机号码"
                    ),
                    1))
              );
            },
            oe = n(79204),
            se = (0, m.forwardRef)(function (e, t) {
              var n,
                i = e.placeHolder,
                a = void 0 === i ? "请选择证件类型" : i,
                r = e.defaultValue,
                o = e.isOpenNewCard,
                s = e.onChange,
                l = (0, m.useState)(r || "1"),
                c = (0, _.Z)(l, 2),
                u = c[0],
                d = c[1];
              (0, m.useImperativeHandle)(t, function () {
                return {
                  getValue: function () {
                    return u;
                  },
                  setValue: d,
                };
              });
              var f =
                null ===
                  (n = ie.BT.find(function (e) {
                    return e.commonServiceCode == u;
                  })) || void 0 === n
                  ? void 0
                  : n.label;
              return (0, k.tZ)(v.View, {
                className: "id-type-seletor",
                id: "AKFG",
                onClick: function () {
                  var e = ie.BT.filter(function (e) {
                    return !!o || "32" !== e.commonServiceCode;
                  }).map(function (e) {
                    return e.label;
                  });
                  y().showActionSheet({
                    itemList: e,
                    success: function (t) {
                      var n;
                      n = b.default.isAlipay ? e[t.index] : e[t.tapIndex];
                      var i = ie.BT.find(function (e) {
                        return e.label === n;
                      }).commonServiceCode;
                      n && i && (d(i), s(i));
                    },
                  });
                },
                children: f || a,
              });
            }),
            le = (0, m.forwardRef)(function (e, t) {
              var n = e.defaultValue,
                i = e.onChange,
                a = (0, m.useState)(Object.keys(G)[0] || n),
                r = (0, _.Z)(a, 2),
                o = r[0],
                s = r[1],
                l = Object.keys(G);
              return (
                (0, m.useImperativeHandle)(t, function () {
                  return {
                    getValue: function () {
                      return o;
                    },
                    setValue: s,
                  };
                }),
                (0, k.tZ)(v.ScrollView, {
                  className: "psg-type-seletor",
                  scrollX: !0,
                  children: l.map(function (e, t) {
                    return (0, k.tZ)(
                      v.View,
                      {
                        className: "item ".concat(o == e ? "active" : ""),
                        id: "AKFJ",
                        onClick: function () {
                          s(e), null == i || i(e);
                        },
                        children: G[e],
                      },
                      t
                    );
                  }),
                })
              );
            }),
            ce = (0, m.forwardRef)(function (e, t) {
              var n = e.defaultValue,
                i = e.placeholder,
                a = (0, m.useState)(void 0 === n ? "CN" : n),
                s = (0, _.Z)(a, 2),
                l = s[0],
                c = s[1];
              (0, m.useImperativeHandle)(t, function () {
                return {
                  getValue: function () {
                    return l;
                  },
                  setValue: c,
                };
              });
              var u = (function () {
                var e = (0, o.Z)(
                  (0, r.Z)().mark(function e() {
                    var t, n;
                    return (0, r.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, T.getCurrentPage)().navigateToAsync({
                                  url: "/functionalPages/country/country",
                                })
                              );
                            case 3:
                              (t = e.sent),
                                (n = t.res),
                                c(n.code),
                                (e.next = 10);
                              break;
                            case 8:
                              (e.prev = 8), (e.t0 = e.catch(0));
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              return (0,
              k.tZ)(v.View, { className: l ? "" : "placeholder", id: "AKFH", onClick: u, children: l || i });
            }),
            ue = (0, m.forwardRef)(function (e, t) {
              var n = e.defaultValue,
                i = Object.keys(q),
                a = (0, m.useState)(n),
                r = (0, _.Z)(a, 2),
                o = r[0],
                s = r[1];
              return (
                (0, m.useImperativeHandle)(t, function () {
                  return {
                    getValue: function () {
                      return o;
                    },
                    setValue: s,
                  };
                }),
                (0, k.tZ)(v.View, {
                  className: "gender-selector",
                  children: i.map(function (e, t) {
                    return (0, k.tZ)(
                      v.View,
                      {
                        className: "item ".concat(o == e ? "active" : ""),
                        id: "AKFF",
                        onClick: function () {
                          s(e);
                        },
                        children: q[e],
                      },
                      t
                    );
                  }),
                })
              );
            }),
            de = m.default.memo(ue),
            fe = (0, m.forwardRef)(function (e, t) {
              var n = e.isOpenNewCard,
                i = e.onPsgTypeChange,
                a = e.defaultValue,
                r = e.startCardTimeLimit,
                o = e.hasFlightTrip,
                s = (0, m.useRef)({}),
                c = (0, m.useState)(!1),
                u = (0, _.Z)(c, 2),
                d = u[0],
                f = u[1],
                h = (0, m.useState)(!1),
                p = (0, _.Z)(h, 2),
                N = p[0],
                g = p[1],
                C = (0, m.useState)(!1),
                Z = (0, _.Z)(C, 2),
                w = Z[0],
                b = Z[1],
                S = (0, m.useState)("1990-10-01"),
                V = (0, _.Z)(S, 2),
                x = V[0],
                P = V[1],
                B = (0, m.useState)("2033-01-01"),
                R = (0, _.Z)(B, 2),
                $ = R[0],
                E = R[1],
                X = function () {
                  var e,
                    t,
                    n,
                    i,
                    a,
                    r,
                    o,
                    l,
                    c =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    u = c.CNName,
                    d = c.Birthday,
                    m = c.CardTimeLimit,
                    h = c.IdentityNo,
                    p = c.IdentityType,
                    v = c.PassengerType,
                    N = c.Nationality,
                    C = c.Mobile,
                    T = c.countryCode,
                    Z = c.cardType,
                    w = c.Gender,
                    S = c.IssueAt;
                  u && s.current.$nameRef && (s.current.$nameRef.value = u),
                    h && s.current.$idNoRef && (s.current.$idNoRef.value = h),
                    C && s.current.$telRef && (s.current.$telRef.value = C),
                    v &&
                      (null === (e = s.current.$PsgTypeSeletorRef) ||
                        void 0 === e ||
                        null === (t = e.setValue) ||
                        void 0 === t ||
                        t.call(e, v)),
                    p &&
                      (null === (n = s.current.$IdTypeSeletorRef) ||
                        void 0 === n ||
                        null === (i = n.setValue) ||
                        void 0 === i ||
                        i.call(n, Z)),
                    p && f(2 == Z),
                    p && g(!(1 == Z || 32 == Z)),
                    p &&
                      (null === (a = s.current.$MobileCodeSelector) ||
                        void 0 === a ||
                        null === (r = a.setEnableSelect) ||
                        void 0 === r ||
                        r.call(a, 1 != Z)),
                    T &&
                      (null === (o = s.current.$MobileCodeSelector) ||
                        void 0 === o ||
                        null === (l = o.setValue) ||
                        void 0 === l ||
                        l.call(o, T)),
                    p && b(!(1 == Z || 32 == Z)),
                    y().nextTick(function () {
                      var e, t, n, i, a, r;
                      N &&
                        (null === (e = s.current.$NationalitySelectorRef) ||
                          void 0 === e ||
                          null === (t = e.setValue) ||
                          void 0 === t ||
                          t.call(e, N)),
                        m && E(m),
                        d && P(d),
                        S &&
                          (null ===
                            (n = s.current.$IssuanceNationalitySelectorRef) ||
                            void 0 === n ||
                            null === (i = n.setValue) ||
                            void 0 === i ||
                            i.call(n, S)),
                        w &&
                          (null === (a = s.current.$GenderSelectorRef) ||
                            void 0 === a ||
                            null === (r = a.setValue) ||
                            void 0 === r ||
                            r.call(a, w));
                    });
                };
              return (
                (0, m.useLayoutEffect)(function () {
                  X(a);
                }, []),
                (0, m.useEffect)(
                  function () {
                    X(a);
                  },
                  [a]
                ),
                (0, m.useImperativeHandle)(t, function () {
                  return {
                    getFormValue: function () {
                      var e, t, n, i, r, o, c, u, f, m, h;
                      return (0, l.Z)(
                        (0, l.Z)({}, a),
                        {},
                        {
                          CNName:
                            null === (e = s.current.$nameRef) || void 0 === e
                              ? void 0
                              : e.value,
                          PassengerType:
                            null === (t = s.current.$PsgTypeSeletorRef) ||
                            void 0 === t
                              ? void 0
                              : t.getValue(),
                          IdentityNo:
                            null === (n = s.current.$idNoRef) || void 0 === n
                              ? void 0
                              : n.value,
                          IdentityType:
                            null ===
                              (i = ie.BT.find(function (e) {
                                var t;
                                return (
                                  e.commonServiceCode ==
                                  (null === (t = s.current.$IdTypeSeletorRef) ||
                                  void 0 === t
                                    ? void 0
                                    : t.getValue())
                                );
                              })) || void 0 === i
                              ? void 0
                              : i.serviceName,
                          cardType:
                            null === (r = s.current.$IdTypeSeletorRef) ||
                            void 0 === r
                              ? void 0
                              : r.getValue(),
                          Mobile:
                            null === (o = s.current.$telRef) || void 0 === o
                              ? void 0
                              : o.value,
                          Nationality: d
                            ? null ===
                                (c = s.current.$NationalitySelectorRef) ||
                              void 0 === c
                              ? void 0
                              : c.getValue()
                            : "CN",
                          Birthday: (function () {
                            var e, t;
                            if (
                              1 ==
                                (null === (e = s.current.$IdTypeSeletorRef) ||
                                void 0 === e
                                  ? void 0
                                  : e.getValue()) &&
                              null !== (t = s.current.$idNoRef) &&
                              void 0 !== t &&
                              t.value
                            ) {
                              var n,
                                i =
                                  null === (n = s.current.$idNoRef) ||
                                  void 0 === n
                                    ? void 0
                                    : n.value.substring(6, 14),
                                a = ne()(i).format("YYYY-MM-DD");
                              return P(a), a;
                            }
                            return x;
                          })(),
                          CardTimeLimit: $,
                          isChild:
                            2 ==
                            (null === (u = s.current.$PsgTypeSeletorRef) ||
                            void 0 === u
                              ? void 0
                              : u.getValue()),
                          countryCode:
                            null === (f = s.current.$MobileCodeSelector) ||
                            void 0 === f
                              ? void 0
                              : f.getValue(),
                          Gender:
                            null === (m = s.current.$GenderSelectorRef) ||
                            void 0 === m
                              ? void 0
                              : m.getValue(),
                          IssueAt: d
                            ? null ===
                                (h =
                                  s.current.$IssuanceNationalitySelectorRef) ||
                              void 0 === h
                              ? void 0
                              : h.getValue()
                            : "CN",
                        }
                      );
                    },
                    setFormValue: X,
                  };
                }),
                (0, k.BX)(F, {
                  className: "psg-form",
                  children: [
                    (0, k.BX)(v.View, {
                      children: [
                        (0, k.tZ)(A, {
                          name: function () {
                            return (0, k.BX)(v.View, {
                              className: "flex flex-center name-label",
                              style: { justifyContent: "start" },
                              id: "AKFI",
                              onClick: function () {
                                var e, t, n;
                                null === (e = (0, T.getCurrentPage)()) ||
                                  void 0 === e ||
                                  null === (t = e.$CommonSceneDrawer) ||
                                  void 0 === t ||
                                  null === (n = t.alert) ||
                                  void 0 === n ||
                                  n.call(t, {
                                    title: "姓名填写说明",
                                    content: function () {
                                      return (0, k.BX)(v.View, {
                                        style: {
                                          textAlign: "left",
                                          fontSize: "14px",
                                        },
                                        children: [
                                          (0, k.tZ)(v.View, {
                                            children:
                                              "1 使用身份证、回乡证、台胞证预订火车票请优先使用中文姓名；",
                                          }),
                                          (0, k.tZ)(v.View, {
                                            children:
                                              "2.使用护照购票如护照上有中文名，请输入中文名；",
                                          }),
                                          (0, k.tZ)(v.View, {
                                            children:
                                              "3. 如姓名中有“？”“・(中点）”或“(下点）”时，请仔细辨析身份证原件上的字符，准确输入；",
                                          }),
                                          (0, k.tZ)(v.View, {
                                            children:
                                              "4. 如姓名中有生僻字无法输入时，可直接输入拼音代替；",
                                          }),
                                          (0, k.tZ)(v.View, {
                                            children:
                                              " 5. 如姓名中有繁体字无法输入时，可以用筒体字代替;",
                                          }),
                                          (0, k.tZ)(v.View, {
                                            children:
                                              " 6. 如姓名较长，汉字或英文字符合计超过30个(1个汉字算2个英文字符)字符时，请按照姓名中第一个汉字或英文字符开始按顺序连续输入30个字符，空格字符不輸入，英文字符不需要区分大小写。",
                                          }),
                                        ],
                                      });
                                    },
                                  });
                              },
                              children: [
                                (0, k.tZ)(v.Text, { children: "姓名" }),
                                (0, k.tZ)(v.Text, {
                                  className: "ifont-detail iconfont",
                                }),
                              ],
                            });
                          },
                          renderCell: function () {
                            return (0, k.tZ)(v.Input, {
                              placeholder: "请输入姓名",
                              placeholderClass: "placeholder",
                              cursorSpacing: 50,
                              alwaysEmbed: !0,
                              ref: function (e) {
                                return (s.current.$nameRef = e);
                              },
                            });
                          },
                        }),
                        (0, k.tZ)(A, {
                          name: "乘客类型",
                          iconSize: 20,
                          renderCell: function () {
                            return (0, k.tZ)(le, {
                              ref: function (e) {
                                return (s.current.$PsgTypeSeletorRef = e);
                              },
                              onChange: i,
                            });
                          },
                        }),
                        o &&
                          w &&
                          (0, k.tZ)(A, {
                            name: "乘客性别",
                            iconSize: 20,
                            renderCell: function () {
                              return (0, k.tZ)(de, {
                                ref: function (e) {
                                  return (s.current.$GenderSelectorRef = e);
                                },
                              });
                            },
                          }),
                        (0, k.tZ)(A, {
                          name: "证件类型",
                          icon: "ifont2-arr",
                          renderCell: function () {
                            return (0, k.tZ)(se, {
                              isOpenNewCard: n,
                              ref: function (e) {
                                return (s.current.$IdTypeSeletorRef = e);
                              },
                              onChange: function (e) {
                                var t, n, i, a;
                                f(2 == e), g(!(1 == e || 32 == e));
                                var r,
                                  o = 1 != e;
                                null === (t = s.current) ||
                                  void 0 === t ||
                                  null === (n = t.$MobileCodeSelector) ||
                                  void 0 === n ||
                                  null === (i = n.setEnableSelect) ||
                                  void 0 === i ||
                                  i.call(n, o),
                                  (null === (a = s.current) || void 0 === a
                                    ? void 0
                                    : a.isEnableSelect) !== o &&
                                    (null ===
                                      (r = s.current.$MobileCodeSelector) ||
                                      void 0 === r ||
                                      r.init()),
                                  (s.current.isEnableSelect = o),
                                  b(!(1 == e || 32 == e));
                              },
                            });
                          },
                        }),
                        d &&
                          (0, k.tZ)(A, {
                            name: "国籍",
                            icon: "ifont2-arr",
                            renderCell: function () {
                              return (0, k.tZ)(ce, {
                                ref: function (e) {
                                  return (s.current.$NationalitySelectorRef =
                                    e);
                                },
                                placeholder: "请选择国籍",
                              });
                            },
                          }),
                        o &&
                          d &&
                          (0, k.tZ)(A, {
                            name: "发证机关",
                            icon: "ifont2-arr",
                            renderCell: function () {
                              return (0, k.tZ)(ce, {
                                ref: function (e) {
                                  return (s.current.$IssuanceNationalitySelectorRef =
                                    e);
                                },
                                defaultValue: "",
                                placeholder: "请选择发证机关",
                              });
                            },
                          }),
                        (0, k.tZ)(A, {
                          name: "证件号码",
                          renderCell: function () {
                            return (0, k.tZ)(v.Input, {
                              placeholder: "请输入证件号码",
                              placeholderClass: "placeholder",
                              cursorSpacing: 50,
                              alwaysEmbed: !0,
                              ref: function (e) {
                                return (s.current.$idNoRef = e);
                              },
                            });
                          },
                        }),
                        N &&
                          (0, k.tZ)(A, {
                            name: "出生日期",
                            icon: "ifont2-arr",
                            renderCell: function () {
                              return (0, k.tZ)(v.Picker, {
                                mode: "date",
                                value: x,
                                start: "1890-01-01",
                                end: "2030-12-31",
                                onChange: function (e) {
                                  P(e.detail.value);
                                },
                                children: (0, k.tZ)(v.Text, {
                                  className: "strong",
                                  children: x || "请选择出生日期",
                                }),
                              });
                            },
                          }),
                        N &&
                          (0, k.tZ)(A, {
                            name: "证件有效期",
                            icon: "ifont2-arr",
                            renderCell: function () {
                              return (0, k.tZ)(v.Picker, {
                                mode: "date",
                                value: $,
                                start: r || "2021-01-01",
                                end: "2030-12-31",
                                onChange: function (e) {
                                  E(e.detail.value);
                                },
                                children: (0, k.tZ)(v.Text, {
                                  className: "strong",
                                  children: $ || "请选择证件有效期",
                                }),
                              });
                            },
                          }),
                        (0, k.tZ)(A, {
                          name: "手机号码",
                          icon: "ifont2-tongxunlu_linea_20",
                          iconSize: 20,
                          renderCell: function () {
                            return (0, k.BX)(v.View, {
                              className: "flex",
                              children: [
                                (0, k.tZ)(oe.Z, {
                                  className: "input-txt",
                                  style: { paddingRight: "6px" },
                                  ref: function (e) {
                                    return (s.current.$MobileCodeSelector = e);
                                  },
                                }),
                                (0, k.tZ)(v.Input, {
                                  className: "flex-1",
                                  placeholder: "请输入手机号码",
                                  placeholderClass: "placeholder",
                                  cursorSpacing: 50,
                                  alwaysEmbed: !0,
                                  ref: function (e) {
                                    return (s.current.$telRef = e);
                                  },
                                }),
                              ],
                            });
                          },
                        }),
                      ],
                    }),
                    (0, k.tZ)(v.View, {
                      className: "btm-tip",
                      children: (0, k.tZ)(I.ZtRichText, {
                        nodes:
                          "根据铁路局防疫规定：乘客须填写<font color='#FD9227'>本人手机号</font>方可出票成功，18岁以下和70岁以上乘客可填写<font color='#FD9227'>亲友手机号</font>",
                      }),
                    }),
                  ],
                })
              );
            }),
            me = m.default.memo(fe),
            he = n(9416),
            pe = n(81437),
            ve = function (e) {
              var t = e.onCheck,
                n = (0, m.useState)(!1),
                i = (0, _.Z)(n, 2),
                a = i[0],
                r = i[1],
                o = (0, m.useRef)({});
              return (0, k.BX)(F, {
                className: "form-helper-box",
                children: [
                  (0, k.tZ)(v.Textarea, {
                    className: "form-helper-input",
                    placeholder:
                      "粘贴整段乘车人信息，系统会自动帮您填入 (例如：张三 17800000000 411010200008098887)",
                    placeholderClass: "plc-holder",
                    cursorSpacing: 50,
                    onChange: function (e) {
                      r(!!e.detail.value);
                    },
                    ref: function (e) {
                      return (o.current = e);
                    },
                  }),
                  (0, k.tZ)(v.View, {
                    className: "btn-submit ".concat(a ? "active" : ""),
                    id: "AKFE",
                    onClick: function () {
                      var e = o.current.value.split(" "),
                        n = {
                          Mobile: "",
                          CNName: "",
                          IdentityNo: "",
                          IdentityType: "",
                        };
                      if (
                        (e.map(function (e) {
                          if (n.Mobile || !/^1[3456789]\d{9}$/.test(e)) {
                            if (!n.IdentityNo) {
                              var t = ee.Z.isValidSFZ(e),
                                i = pe.Z.isValidPassport(e),
                                a = pe.Z.isValidHKMacao(e),
                                r = pe.Z.isValidTaiwan(e);
                              if (t || i || a || r)
                                return (
                                  (n.IdentityNo = e),
                                  (n.IdentityType = t
                                    ? O
                                    : i
                                    ? M
                                    : a
                                    ? z
                                    : r
                                    ? K
                                    : ""),
                                  void (n.cardType = t
                                    ? 1
                                    : i
                                    ? 2
                                    : a
                                    ? 32
                                    : r
                                    ? 8
                                    : "")
                                );
                            }
                            n.CNName ||
                              (!ee.Z.isValidChineseName(e) &&
                                !/^[A-Za-z ]+$/.test(e)) ||
                              (n.CNName = e);
                          } else n.Mobile = e;
                        }),
                        Object.keys(n).every(function (e) {
                          return !n[e];
                        }))
                      )
                        (0, T.showToast)("抱歉，未识别成功");
                      else {
                        var i = "";
                        n.Mobile && (i = "手机号码"),
                          n.CNName &&
                            (i = ""
                              .concat(i)
                              .concat(i.length > 0 ? "、" : "", "姓名")),
                          n.IdentityNo &&
                            (i = ""
                              .concat(i)
                              .concat(i.length > 0 ? "、" : "", "证件号码")),
                          (0, T.showToast)("已为您自动填充".concat(i)),
                          null == t || t(n);
                      }
                    },
                    children: "快速识别",
                  }),
                ],
              });
            },
            Ne = ["onConfirm", "onCancel"],
            ge =
              (0, p.h)(!1, { usePageWrapper: !0 })(
                (L = (function (e) {
                  (0, d.Z)(n, e);
                  var t = (0, f.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, c.Z)(this, n),
                      ((i = t.call(this, e)).disableBgStyle = !0),
                      (i.pageTitle = "编辑乘客"),
                      (i.pageRootClassName = "trn-psg-edit"),
                      (i.pageId = b.default.isTieyou
                        ? "10650060902"
                        : "10650060896"),
                      (i.state = {
                        pas: i.createNewPas(),
                        actionType: j,
                        isOpenNewCard: !1,
                        isShowStudentDesc: !1,
                        isShowChildDesc: !1,
                        startCardTimeLimit: "",
                        hasFlightTrip: !1,
                        isShowAssigneeTiper: !1,
                        isAddAssigneeTiperSelect: !1,
                      }),
                      i
                    );
                  }
                  return (
                    (0, u.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t = (0, g.getCurrentInstance)().router.params;
                          console.log(
                            "pas index options = ",
                            t,
                            C.ET,
                            C.ET.pas
                          );
                          var n = t.data || {};
                          this.fromPage = n.fromPage;
                          var i = C.ET.pas;
                          if (
                            (this.setState(
                              { isShowAssigneeTiper: n.isShowAssigneeTiper },
                              function () {
                                e.ubtTrace(
                                  "TZWPassengerEdit_AssigneeBanenr_exposure",
                                  { PageId: e.pageId }
                                );
                              }
                            ),
                            void 0 !== i)
                          )
                            this.setState({
                              pas: this.createNewPas(
                                (0, l.Z)(
                                  (0, l.Z)({}, i),
                                  {},
                                  { IdentityNo: i.newPas ? "" : i.IdentityNo }
                                )
                              ),
                              actionType: H,
                              startCardTimeLimit: n.startCardTimeLimit,
                              hasFlightTrip: n.hasFlightTrip,
                            }),
                              this.setPageTitle("编辑乘客");
                          else {
                            var a = this.createNewPas({
                              PassengerType: t.defaultPasType || 1,
                            });
                            this.setState({
                              pas: a,
                              actionType: j,
                              startCardTimeLimit: n.startCardTimeLimit,
                              hasFlightTrip: n.hasFlightTrip,
                            }),
                              this.setPageTitle("新增乘客");
                          }
                          this.getNewCardConfig(),
                            this.getConfigInfo(),
                            y().nextTick(function () {
                              var t;
                              e.onPsgTypeChange(
                                null === (t = e.state.pas) || void 0 === t
                                  ? void 0
                                  : t.PassengerType
                              );
                            });
                        },
                      },
                      {
                        key: "getNewCardConfig",
                        value: function () {
                          var e = this;
                          (0, T.showLoading)();
                          return (0, Z.fu)({
                            ConfigKey: "tieyou_wx_hongkong_newcard",
                          })
                            .then(function (t) {
                              t.ConfigInfo &&
                                "1" == t.ConfigInfo.Content &&
                                e.setData({ isOpenNewCard: !0 });
                            })
                            .catch(function (e) {
                              return console.log(e);
                            })
                            .finally(T.hideLoading);
                        },
                      },
                      {
                        key: "getConfigInfo",
                        value: function () {
                          var e = this;
                          return (0, Z.fu)({
                            ConfigKey: "tieyou_wx_passengerindex_key",
                          })
                            .then(function (t) {
                              if (t.ConfigInfo && t.ConfigInfo.Content) {
                                var n = JSON.parse(t.ConfigInfo.Content);
                                e.showLogin12306PopFlag =
                                  1 === n.showLogin12306Pop;
                              }
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                        },
                      },
                      {
                        key: "createNewPas",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          return (0, l.Z)(
                            (0, l.Z)(
                              {},
                              {
                                isChild: 0,
                                Birthday: "1990-10-01",
                                CNName: "",
                                ENFirstName: "",
                                ENLastName: "",
                                PassengerID: 0,
                                IdentityNo: "",
                                IdentityType: O,
                                IsENName: !1,
                                IsSelf: !1,
                                PassengerType: 1,
                                CheckStatus: "",
                                CheckStatusName: "",
                                cardType: "1",
                                Nationality: "CN",
                                Mobile: "",
                              }
                            ),
                            e
                          );
                        },
                      },
                      {
                        key: "updatePas",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          this.setState({
                            pas: this.createNewPas(
                              (0, l.Z)((0, l.Z)({}, this.state.pas || {}), e)
                            ),
                          });
                        },
                      },
                      {
                        key: "openOcr",
                        value: function () {
                          var e = this;
                          this.ubtTrace("c_trn_z_10650060896", {
                            bizKey: "scan_passenger_idcard_click",
                          }),
                            N.Z.ocr(
                              { bizType: "TRA", title: "证件识别" },
                              function (t) {
                                e.handleShowModalAsync({
                                  toast: {
                                    toastCode: i.OcrResult,
                                    data: { name: t.name, no: t.idCardNo },
                                  },
                                  onConfirm: function (t, n) {
                                    0 !== t
                                      ? (e.ubtTrace("c_trn_z_10650060896", {
                                          bizKey:
                                            "confirm_passenger_info_click",
                                          status: "1",
                                        }),
                                        e.updatePas({
                                          CNName: null == n ? void 0 : n.name,
                                          IdentityNo: null == n ? void 0 : n.no,
                                          IdentityType: O,
                                          cardType: "1",
                                        }),
                                        e.$PassengerForm.setFormValue({
                                          CNName: null == n ? void 0 : n.name,
                                          IdentityNo: null == n ? void 0 : n.no,
                                          IdentityType: O,
                                          cardType: "1",
                                        }))
                                      : e.openOcr();
                                  },
                                });
                              }
                            );
                        },
                      },
                      {
                        key: "handleShowModalAsync",
                        value: function (e) {
                          var t = this,
                            n =
                              "string" == typeof e
                                ? { toast: { toastCode: e }, data: {} }
                                : e,
                            i = n.onConfirm,
                            a = n.onCancel,
                            r = (0, s.Z)(n, Ne);
                          return new Promise(function (e) {
                            var n;
                            null === (n = t.$CommonToaster) ||
                              void 0 === n ||
                              n.showToast(
                                (0, l.Z)(
                                  (0, l.Z)({}, r),
                                  {},
                                  {
                                    onConfirm: function () {
                                      for (
                                        var t = arguments.length,
                                          n = new Array(t),
                                          a = 0;
                                        a < t;
                                        a++
                                      )
                                        n[a] = arguments[a];
                                      null == i || i.apply(void 0, n),
                                        e({ code: 1, data: n });
                                    },
                                    onCancel: function () {
                                      for (
                                        var t = arguments.length,
                                          n = new Array(t),
                                          i = 0;
                                        i < t;
                                        i++
                                      )
                                        n[i] = arguments[i];
                                      null == a || a.apply(void 0, n),
                                        e({ code: 0, data: n });
                                    },
                                  }
                                )
                              );
                          });
                        },
                      },
                      {
                        key: "onConfirm",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, n, i, a, o, s;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state),
                                          (n = t.hasFlightTrip),
                                          (i = t.actionType),
                                          (a = t.isAddAssigneeTiperSelect),
                                          (o =
                                            this.$PassengerForm.getFormValue()),
                                          (s = this.fromPage),
                                          re(o, n, s))
                                        ) {
                                          e.next = 5;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 5:
                                        if (!o.isChild && !ae(o)) {
                                          e.next = 11;
                                          break;
                                        }
                                        return (
                                          (e.next = 8),
                                          this.$CommonSceneDrawer.confirmAsync({
                                            title: "儿童监护人确认",
                                            content:
                                              "请确认您是儿童乘客<span style='color:"
                                                .concat(
                                                  b.default.isTieyou
                                                    ? "#fc6e51"
                                                    : "#0080ff",
                                                  "'>"
                                                )
                                                .concat(
                                                  this.state.pas.CNName,
                                                  "</span>(未满",
                                                  14,
                                                  "周岁)的监护人或已征得其监护人同意，不符合请点击【暂缓】，否则因此产生的法律责任将自行承担"
                                                ),
                                            leftButtonName: "暂缓",
                                            rightButtonName: "确认并继续",
                                          })
                                        );
                                      case 8:
                                        if (e.sent) {
                                          e.next = 11;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 11:
                                        this.ubtTrace("c_trn_z_10650060896", {
                                          bizKey:
                                            "confirm_passenger_info_click",
                                          status: "0",
                                        }),
                                          i === j &&
                                            this.ubtTrace(
                                              "TZWPassengerEdit_Add_click",
                                              {
                                                PageId: this.pageId,
                                                clickType: a ? 1 : 0,
                                              }
                                            ),
                                          this.submitPasInfo(o);
                                      case 14:
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
                        key: "submitPasInfo",
                        value: function (e) {
                          var t = this,
                            n = {
                              passengerID: e.PassengerID || "",
                              passengerType: G["".concat(e.PassengerType)],
                              passengerName: e.CNName || "",
                              passengerENFirstName: e.ENFirstName || "",
                              middleName: e.MiddleName || "",
                              passengerENLastName: e.ENLastName || "",
                              cardType: e.cardType,
                              passportType: e.IdentityType,
                              passportCode: e.IdentityNo,
                              passengerBirth: e.Birthday,
                              mobile: e.Mobile || "",
                              gender: e.Gender || "",
                              nationality: e.Nationality || "",
                              cardTimeLimit: e.CardTimeLimit || "",
                              isTempPassenger: e.isTempPassenger || 0,
                              openId: e.openId || "",
                              studentInfo: e.StudentInfo || "",
                              showPassportCode: e.ShowPassportCode || "",
                              maskPassportCode: "",
                              countryCode: e.countryCode || "86",
                              _oldCardList: e._oldCardList || [],
                              issueAt: e.IssueAt || "",
                            };
                          C.ET.pas && !e.newPas
                            ? e.IsENName
                              ? (n.passengerName = C.ET.pas.CNName)
                              : ((n.passengerENFirstName =
                                  C.ET.pas.ENFirstName || ""),
                                (n.passengerENLastName =
                                  C.ET.pas.ENLastName || ""))
                            : e.IsENName
                            ? (n.passengerName = "")
                            : ((n.passengerENFirstName = ""),
                              (n.passengerENLastName = "")),
                            (n.passengerName = n.passengerName.trim()),
                            (n.passengerENFirstName =
                              n.passengerENFirstName.trim()),
                            (n.passengerENLastName =
                              n.passengerENLastName.trim()),
                            (0, T.showLoading)();
                          var i = function () {
                            var n =
                              (e.PassengerID ? "编辑" : "新增") +
                              "乘客失败，请稍候再试";
                            t.showCommonDialog(n);
                          };
                          h.ZP.saveCommonPassenger({ commonPassengerInfo: n })
                            .then(
                              (function () {
                                var n = (0, o.Z)(
                                  (0, r.Z)().mark(function n(a) {
                                    return (0, r.Z)().wrap(function (n) {
                                      for (;;)
                                        switch ((n.prev = n.next)) {
                                          case 0:
                                            if (1 != a.resultCode) {
                                              n.next = 13;
                                              break;
                                            }
                                            if (
                                              (g.eventCenter.trigger(
                                                S.n.EDIT_PASSENGER
                                              ),
                                              g.eventCenter.trigger(
                                                S.n.PASSENGER_EDIT_SUBMIT
                                              ),
                                              t.state.actionType !== j ||
                                                !t.state
                                                  .isAddAssigneeTiperSelect)
                                            ) {
                                              n.next = 8;
                                              break;
                                            }
                                            return (
                                              (0, T.showLoading)("请稍候"),
                                              (n.next = 7),
                                              t.handleAddToAssignee(e)
                                            );
                                          case 7:
                                            (0, T.hideLoading)();
                                          case 8:
                                            return (
                                              (n.next = 10),
                                              (0, T.showToastAsync)(
                                                "保存成功！"
                                              )
                                            );
                                          case 10:
                                            t.confirmBack(null), (n.next = 14);
                                            break;
                                          case 13:
                                            i.call(null);
                                          case 14:
                                          case "end":
                                            return n.stop();
                                        }
                                    }, n);
                                  })
                                );
                                return function (e) {
                                  return n.apply(this, arguments);
                                };
                              })()
                            )
                            .catch(function () {
                              i.call(null);
                            })
                            .finally(function () {
                              (0, T.hideLoading)();
                            });
                        },
                      },
                      {
                        key: "onDeletePsg",
                        value: function () {
                          var e = this;
                          this.$CommonSceneDrawer.confirm({
                            content: "确认删除该乘车人吗",
                            cancelText: "取消",
                            confirmText: "删除",
                            onConfirm: (function () {
                              var t = (0, o.Z)(
                                (0, r.Z)().mark(function t() {
                                  var n, i, a, o, s, l, c, u, d;
                                  return (0, r.Z)().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            (n = e.state.pas),
                                            (i = n.PassengerID),
                                            (a = n.IdentityType),
                                            (o = n.openId || ""),
                                            (s = n.IdentityNo),
                                            (l = n.isTempPassenger || 0),
                                            (0, T.showLoading)(),
                                            (t.next = 9),
                                            (0, he.Kb)({
                                              passengerId: i,
                                              passportType: a,
                                              openId: o,
                                              certificateNum: s,
                                              isTempPassenger: l,
                                            })
                                          );
                                        case 9:
                                          return (
                                            (c = t.sent),
                                            (u = c.resultCode),
                                            (d = c.resultMessage),
                                            (0, T.hideLoading)(),
                                            (t.next = 15),
                                            (0, T.showToastAsync)(
                                              1 === u ? "删除成功" : d
                                            )
                                          );
                                        case 15:
                                          1 === u && e.confirmBack();
                                        case 16:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function () {
                                return t.apply(this, arguments);
                              };
                            })(),
                          });
                        },
                      },
                      {
                        key: "onPsgTypeChange",
                        value: function (e) {
                          this.setState({
                            isShowStudentDesc: 3 == e,
                            isShowChildDesc: 2 == e,
                          });
                        },
                      },
                      {
                        key: "onFastFill",
                        value: function (e) {
                          var t, n;
                          null ===
                            (t = (n = this.$PassengerForm).setFormValue) ||
                            void 0 === t ||
                            t.call(n, e);
                        },
                      },
                      {
                        key: "onAddAssigneeTiperSelect",
                        value: function () {
                          this.setState({
                            isAddAssigneeTiperSelect:
                              !this.state.isAddAssigneeTiperSelect,
                          }),
                            this.ubtTrace(
                              "TZWPassengerEdit_AssigneeBanenr_click",
                              { PageId: this.pageId }
                            );
                        },
                      },
                      {
                        key: "handleAddToAssignee",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var n, i;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = {
                                            name: t.CNName,
                                            id_type: t.cardType,
                                            id_type_name: t.IdentityType,
                                            sex_name: "1",
                                            type_name:
                                              G["".concat(t.PassengerType)],
                                            id_no: t.IdentityNo,
                                            mobile: t.Mobile,
                                            self: !1,
                                            email: "",
                                            mobileCode: t.countryCode || "86",
                                          }),
                                          (i = { type: 1, addAssignee: n }),
                                          (e.prev = 2),
                                          (e.next = 5),
                                          (0, V.Li)({ reqParams: i })
                                        );
                                      case 5:
                                        e.next = 10;
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(2)),
                                          console.log(e.t0);
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[2, 7]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.actionType,
                            i = t.isOpenNewCard,
                            a = t.isShowStudentDesc,
                            r = t.isShowChildDesc,
                            o = t.pas,
                            s = t.startCardTimeLimit,
                            l = t.hasFlightTrip,
                            c = t.isAddAssigneeTiperSelect,
                            u = t.isShowAssigneeTiper;
                          return (0, k.BX)(v.View, {
                            className: "page-content",
                            children: [
                              n === j &&
                                (0, k.tZ)(B, {
                                  openOcr: this.openOcr.bind(this),
                                }),
                              (0, k.tZ)(me, {
                                ref: function (t) {
                                  return (e.$PassengerForm = t);
                                },
                                isOpenNewCard: i,
                                defaultValue: o,
                                startCardTimeLimit: s,
                                hasFlightTrip: l,
                                onPsgTypeChange: this.onPsgTypeChange,
                              }),
                              n === j &&
                                (0, k.tZ)(ve, { onCheck: this.onFastFill }),
                              r && (0, k.tZ)(R, {}),
                              a && (0, k.tZ)($, {}),
                              n === H &&
                                !o.newPas &&
                                (0, k.tZ)(F, {
                                  className: "del-btn",
                                  id: "AKFO",
                                  onClick: this.onDeletePsg.bind(this),
                                  children: "删除乘客",
                                }),
                              (0, k.BX)(v.View, {
                                className: "tips-view",
                                children: [
                                  (0, k.tZ)(v.View, {
                                    className: "title",
                                    children:
                                      "请您在添加乘客前仔细阅读以下内容：",
                                  }),
                                  (0, k.tZ)(v.View, {
                                    className: "desc",
                                    children:
                                      "根据铁路12306等铁路客运机构实名制购票要求，购买火车票需提供乘客的证件信息和手机号，并需在服务中出具对应证件信息用干验证，请确保录入信息的真实有效。我们将采取措施保护您录入的证件信息和手机号，且仅授权提供给服务方、铁路12306、铁路代售点等用于为您提供服务。",
                                  }),
                                ],
                              }),
                              (0, k.tZ)(w.Z, {
                                className: "trn-psg-edit-footer",
                                renderExter: function () {
                                  return u
                                    ? (0, k.tZ)(E, {
                                        isSelect: c,
                                        onSelect: e.onAddAssigneeTiperSelect,
                                      })
                                    : null;
                                },
                                children: (0, k.tZ)(v.View, {
                                  className: "btn",
                                  id: "AKFP",
                                  onClick: this.onConfirm,
                                  children: n === j ? "确认添加" : "确认修改",
                                }),
                              }),
                              (0, k.tZ)(Q, {
                                ref: function (t) {
                                  return (e.$CommonToaster = t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(m.default.Component))
              ) || L;
          Page(
            (0, a.createPageConfig)(
              ge,
              "pages/train/passenger/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "编辑乘车人",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
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
            98655, 8014, 81198, 77, 37513, 71341, 1709, 98398, 19559, 11216,
            68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(49253);
          }
        ),
          e.O();
      },
    ]);
})();
