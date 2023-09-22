!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [92623],
      {
        74122: function (e, t, a) {
          var s,
            n = a(32180),
            i = a(45023),
            o = a(22276),
            c = a(79301),
            l = a(95308),
            r = a(298),
            u = a(57042),
            h = a(24460),
            d = a(21867),
            m = a(86066),
            p = a(52500),
            b = a(71515),
            w = a(92954),
            f = a.n(w),
            g = a(49120),
            v = a(81957),
            C = a(3205),
            k = (a(18783), a(13025)),
            Z = a(58801),
            T = a(2657),
            V = a(79910),
            N = a(62607),
            y = a(81341),
            S = a(34229),
            B = a(93415),
            I = a(41716),
            x = a(96678),
            A = a(48813),
            D =
              (0, v.h)()(
                (s = (function (e) {
                  (0, d.Z)(a, e);
                  var t = (0, m.Z)(a);
                  function a() {
                    var e;
                    return (
                      (0, u.Z)(this, a),
                      ((e = t.call(this)).state = {
                        qrData: "",
                        showSection: "",
                        abs: "",
                        duid: "",
                        auth: "",
                        userName: "",
                        compName: "",
                        templateId: "",
                        compParm: "",
                        compKey: "",
                        compQuery: {},
                        showWebComp: !1,
                        compList: [],
                        serverTemplateId: "",
                        hotel: {
                          disableListModalThreshold: !1,
                          disableCouponModalThreshold: !1,
                        },
                      }),
                      e
                    );
                  }
                  return (
                    (0, h.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e =
                              (0, w.getCurrentInstance)().router.params || {},
                            t = e.section,
                            a = void 0 === t ? "scanCode" : t,
                            s = e.qrData,
                            n = e.path,
                            i = e.optionsStr,
                            o = N.uG.get(),
                            c = Object.values(x.u);
                          this.setState({
                            showSection: a,
                            compList: c,
                            qrData: s
                              ? decodeURIComponent(s)
                              : f().getStorageSync("TEST_QRDATA") || "",
                            hotel: (0, r.Z)({}, o),
                            path: n,
                            optionsStr: i,
                          }),
                            "abTest" === a && this.getAbTestingValue();
                        },
                      },
                      {
                        key: "chooseCompName",
                        value: function (e) {
                          this.setState({
                            compName: this.state.compList[e.detail.value],
                          });
                        },
                      },
                      {
                        key: "getWebCompRender",
                        value: function () {
                          return (0, A.tZ)(b.View, {
                            children: (0, A.tZ)(b.Picker, {
                              mode: "selector",
                              range: this.state.compList,
                              onChange: this.chooseCompName,
                              children: (0, A.tZ)(b.View, {
                                className: "picker",
                                children:
                                  "" === this.state.compName
                                    ? "请选择"
                                    : this.state.compName,
                              }),
                            }),
                          });
                        },
                      },
                      {
                        key: "scanCode",
                        value: function () {
                          var e = this;
                          f().scanCode({
                            success: function (t) {
                              console.log(t),
                                "WX_CODE" === t.scanType
                                  ? e.setState({ qrData: t.path })
                                  : t.result.includes(
                                      "/soa2/15766/startMcdScan"
                                    )
                                  ? (0, B.p)(t.result)
                                  : e.setState({ qrData: t.result });
                            },
                            fail: function () {
                              (0, g.showModal)("扫码失败");
                            },
                          });
                        },
                      },
                      {
                        key: "qrDataChange",
                        value: function (e) {
                          var t = e.detail.value;
                          this.setState({ qrData: t.trim() });
                        },
                      },
                      {
                        key: "compQueryChange",
                        value: function (e) {
                          var t = e.detail.value;
                          this.setState({ compParm: t.trim() });
                        },
                      },
                      {
                        key: "routeToPage",
                        value: function () {
                          var e = this.state.qrData;
                          e &&
                            ("/" !== e[0] && (e = "/" + e),
                            e.includes("pages/home/index")
                              ? f().reLaunch({ url: e })
                              : V.Z.isTabUrl(e)
                              ? f().switchTab({ url: e })
                              : this.navigateTo({ url: e }));
                        },
                      },
                      {
                        key: "routeToWebview",
                        value: function () {
                          var e = this.state.qrData;
                          if (!e)
                            return (0, g.showModal)({
                              content: "请输入正确的H5地址",
                            });
                          f().setStorage({ key: "TEST_QRDATA", data: e }),
                            C.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "setAbValues",
                        value: function () {
                          y.xZ.setAsync(this.state.abs),
                            (0, T.tG)(this.state.abs),
                            (0, g.showSuccessToast)();
                        },
                      },
                      {
                        key: "getAbTestingValue",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              var t;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), y.xZ.getAsync();
                                      case 2:
                                        if ((t = e.sent)) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (e.next = 6), y.Jz.getAsync();
                                      case 6:
                                        t = e.sent;
                                      case 7:
                                        if (t) {
                                          e.next = 10;
                                          break;
                                        }
                                        return (
                                          (0, g.showModal)("读取AB失败"),
                                          e.abrupt("return")
                                        );
                                      case 10:
                                        this.setState({ abs: t });
                                      case 11:
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
                        key: "switchItemABValue",
                        value: function (e, t) {
                          this.setState(function (a) {
                            var s = (0, o.Z)(a.abs);
                            return (s[e].abValue = t), { abs: s };
                          });
                        },
                      },
                      {
                        key: "setAccountBindV1",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            a =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0;
                          if (!(a > 0))
                            return (0, k.eR)({ mobile: t, type: 0 })
                              .then(function () {})
                              .catch(function () {
                                a < 1 && e.setAccountBindV1(t, a + 1);
                              });
                        },
                      },
                      {
                        key: "onTemplateIdInput",
                        value: function (e) {
                          this.setData({ templateId: e.detail.value });
                        },
                      },
                      {
                        key: "subscribe",
                        value: function () {
                          var e = this.state.templateId;
                          f().requestSubscribeMessage({
                            tmplIds: [e],
                            success: function (e) {
                              console.log("success", e);
                            },
                            fail: function (e) {
                              console.log("fail", e);
                            },
                          });
                        },
                      },
                      {
                        key: "onServerTemplateIdInput",
                        value: function (e) {
                          this.setData({ serverTemplateId: e.detail.value });
                        },
                      },
                      {
                        key: "setSubscribeServer",
                        value: function () {
                          var e = this,
                            t = this.state.serverTemplateId.split(",");
                          this.getSubscribe(t)
                            .then(function (t) {
                              e.setSubscribe(t).finally(function () {});
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                        },
                      },
                      {
                        key: "getSubscribe",
                        value: function (e) {
                          return new Promise(function (t, a) {
                            var s = e;
                            Z.Z.getSubscribeMsgInfo(s).then(
                              function (e) {
                                console.log(
                                  "getSubscribe successCallBack unKnownList=====>",
                                  e.unKnownList
                                );
                                var a = e.mainSwitch,
                                  s = e.unKnownList;
                                a
                                  ? t(s)
                                  : (0, g.showToast)(
                                      "请在设置中打开消息订阅开关哦～"
                                    );
                              },
                              function (e) {
                                a(e);
                              }
                            );
                          });
                        },
                      },
                      {
                        key: "setSubscribe",
                        value: function (e) {
                          return new Promise(function (t) {
                            if (!e || 0 === e.length)
                              return (0, g.showToast)("无可订阅"), void t("");
                            Z.Z.executeSubscribeMsg(e).then(
                              function () {
                                (0, g.showToast)("订阅成功～"), t();
                              },
                              function (e) {
                                console.log(e), t();
                              }
                            );
                          });
                        },
                      },
                      {
                        key: "onCloseWebComp",
                        value: function () {
                          this.setState({ showWebComp: !1 });
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          return {
                            path: this.state.qrData,
                            imageUrl:
                              "https://images3.c-ctrip.com/ztrip/train.xin/2021_09/smart_share@3x.png",
                            title: "测试分享",
                          };
                        },
                      },
                      {
                        key: "toggleListModalThreshold",
                        value: function () {
                          var e = this.state.hotel,
                            t = Object.assign({}, e, {
                              disableListModalThreshold:
                                !e.disableListModalThreshold,
                            });
                          N.uG.set(t), this.setState(t);
                        },
                      },
                      {
                        key: "openWebComp",
                        value: function () {
                          if ("" === this.state.compName)
                            (0, g.showToast)("请选择需要打开的组件");
                          else {
                            var e = this.state.compList.indexOf(
                                this.state.compName
                              ),
                              t = Reflect.ownKeys(x.u)[e],
                              a = {};
                            try {
                              var s;
                              (a =
                                "" === this.state.compParm
                                  ? {}
                                  : JSON.parse(this.state.compParm)),
                                this.setState(
                                  ((s = { compKey: t, compQuery: a }),
                                  (0, i.Z)(s, "compQuery", a),
                                  (0, i.Z)(s, "showWebComp", !0),
                                  s)
                                );
                            } catch (e) {
                              (0, g.showToast)("传入组件的参数需要为对象类型"),
                                this.setState({ compParm: "" }),
                                (a = {});
                            }
                          }
                        },
                      },
                      {
                        key: "toggleHomeCouponModalThreshold",
                        value: function () {
                          var e = this.state.hotel,
                            t = Object.assign({}, e, {
                              disableCouponModalThreshold:
                                !e.disableCouponModalThreshold,
                            });
                          N.uG.set(t), this.setState(t);
                        },
                      },
                      {
                        key: "toHotelSwanTestPage",
                        value: function () {
                          f().navigateTo({ url: "/pages/hotel/swan/swan" });
                        },
                      },
                      {
                        key: "copyConfigContent",
                        value: function (e) {
                          f().setClipboardData({
                            data: e,
                            success: function (e) {
                              f().getClipboardData({
                                success: function (e) {},
                              });
                            },
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.showSection,
                            s = t.qrData,
                            n = t.abs,
                            i =
                              (t.duid, t.auth, t.userName, t.serverTemplateId),
                            o = t.hotel,
                            c = (t.path, t.optionsStr);
                          return (0, A.BX)(b.View, {
                            className: "debugger-utils",
                            children: [
                              "scanCode" === a &&
                                (0, A.BX)(b.View, {
                                  className: "section",
                                  children: [
                                    (0, A.tZ)(b.Textarea, {
                                      maxlength: "-1",
                                      value: s,
                                      onInput: this.qrDataChange,
                                    }),
                                    (0, A.BX)(b.View, {
                                      className: "frow",
                                      children: [
                                        (0, A.tZ)(b.Button, {
                                          className: "testbtn",
                                          onClick: this.scanCode,
                                          children: "扫码",
                                        }),
                                        (0, A.tZ)(b.Button, {
                                          className: "testbtn",
                                          onClick: this.routeToPage,
                                          children: "小程序页面跳转",
                                        }),
                                        (0, A.tZ)(b.Button, {
                                          className: "testbtn",
                                          onClick: this.routeToWebview,
                                          children: "H5页面跳转",
                                        }),
                                      ],
                                    }),
                                    (0, A.tZ)(b.Button, {
                                      className: "testbtn",
                                      openType: "share",
                                      children:
                                        "以当前二维码、网址内容为分享链接进行分分享",
                                    }),
                                  ],
                                }),
                              "abTest" === a &&
                                (0, A.BX)(b.View, {
                                  className: "section",
                                  children: [
                                    (0, A.tZ)(b.View, {
                                      className: "tip",
                                      children:
                                        "注意重新启动小程序，或者是扫码跳转，会重新读取ab实验的值",
                                    }),
                                    (0, A.tZ)(b.View, {
                                      className: "frow",
                                      style: "margin: 20rpx 0;",
                                      children: (0, A.tZ)(b.View, {
                                        className: "testbtn",
                                        onClick: this.setAbValues,
                                        children: "保存ab实验值",
                                      }),
                                    }),
                                    n &&
                                      n.map(function (t, a) {
                                        return (0,
                                        A.BX)(b.View, { className: "item", children: [(0, A.tZ)(b.View, { children: t.expCode }), (0, A.BX)(b.View, { className: "radio-group", children: [(0, A.tZ)(b.View, { className: "radio-btn " + ("A" === t.abValue ? "checked" : ""), onClick: e.switchItemABValue.bind(e, a, "A"), children: "A" }), (0, A.tZ)(b.View, { className: "radio-btn " + ("B" === t.abValue ? "checked" : ""), onClick: e.switchItemABValue.bind(e, a, "B"), children: "B" }), (0, A.tZ)(b.View, { className: "radio-btn " + ("C" === t.abValue ? "checked" : ""), onClick: e.switchItemABValue.bind(e, a, "C"), children: "C" }), (0, A.tZ)(b.View, { className: "radio-btn " + ("D" === t.abValue ? "checked" : ""), onClick: e.switchItemABValue.bind(e, a, "D"), children: "D" }), (0, A.tZ)(b.View, { className: "radio-btn " + ("E" === t.abValue ? "checked" : ""), onClick: e.switchItemABValue.bind(e, a, "E"), children: "E" }), (0, A.tZ)(b.View, { className: "radio-btn " + ("F" === t.abValue ? "checked" : ""), onClick: e.switchItemABValue.bind(e, a, "F"), children: "F" }), (0, A.tZ)(b.View, { className: "radio-btn " + ("G" === t.abValue ? "checked" : ""), onClick: e.switchItemABValue.bind(e, a, "G"), children: "G" })] })] }, "index");
                                      }),
                                  ],
                                }),
                              "subscribe" === a &&
                                (0, A.BX)(b.View, {
                                  className: "section",
                                  children: [
                                    (0, A.tZ)(b.View, {
                                      className: "tip",
                                      children: "微信消息订阅",
                                    }),
                                    (0, A.BX)(b.View, {
                                      className: "row",
                                      children: [
                                        (0, A.tZ)(b.Input, {
                                          className: "input",
                                          type: "text",
                                          value: i,
                                          placeholder: "输入templateId",
                                          onInput: this.onServerTemplateIdInput,
                                        }),
                                        (0, A.tZ)(b.Button, {
                                          className: "testbtn",
                                          onClick: this.setSubscribeServer,
                                          children: "订阅Server",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              "webComp" === a &&
                                (0, A.BX)(b.View, {
                                  className: "section",
                                  children: [
                                    (0, A.BX)(b.View, {
                                      className: "webCompItem",
                                      children: [
                                        (0, A.tZ)(b.Text, {
                                          className: "title",
                                          children: "选择组件类别：",
                                        }),
                                        (0, A.tZ)(b.View, {
                                          children: this.getWebCompRender(),
                                        }),
                                      ],
                                    }),
                                    (0, A.tZ)(b.View, {
                                      className: "webCompItem",
                                      children: (0, A.tZ)(b.Textarea, {
                                        maxlength: "-1",
                                        placeholder: "组件需要的参数值，对象",
                                        value: this.state.compParm,
                                        onInput: this.compQueryChange,
                                      }),
                                    }),
                                    (0, A.tZ)(b.View, {
                                      children: (0, A.tZ)(b.Button, {
                                        className: "testbtn",
                                        onClick: this.openWebComp,
                                        children: "弹出组件",
                                      }),
                                    }),
                                  ],
                                }),
                              "hotel" === a &&
                                (0, A.BX)(b.View, {
                                  className: "section hotel",
                                  children: [
                                    (0, A.tZ)(b.View, {
                                      className: "tip",
                                      children: "酒店业务配置",
                                    }),
                                    (0, A.BX)(b.View, {
                                      className: "item iconfont",
                                      children: [
                                        (0, A.tZ)(b.Text, {
                                          className: "operation",
                                          children:
                                            "关闭列表页0元住弹窗时间限制",
                                        }),
                                        (0, A.tZ)(S.ZtSwitch, {
                                          className: "switch",
                                          color: "#0080FF",
                                          checked: o.disableListModalThreshold,
                                          onChange:
                                            this.toggleListModalThreshold,
                                        }),
                                      ],
                                    }),
                                    (0, A.BX)(b.View, {
                                      className: "item iconfont",
                                      children: [
                                        (0, A.tZ)(b.Text, {
                                          className: "operation",
                                          children:
                                            "关闭首页/列表页优惠券弹窗限制",
                                        }),
                                        (0, A.tZ)(S.ZtSwitch, {
                                          className: "switch",
                                          color: "#0080FF",
                                          checked:
                                            o.disableCouponModalThreshold,
                                          onChange:
                                            this.toggleHomeCouponModalThreshold,
                                        }),
                                      ],
                                    }),
                                    (0, A.BX)(b.View, {
                                      className: "item iconfont",
                                      onClick: this.toHotelSwanTestPage,
                                      children: [
                                        (0, A.tZ)(b.Text, {
                                          className: "operation",
                                          children: "百度测试页",
                                        }),
                                        (0, A.tZ)(b.Text, {
                                          className: "ifont-more right-row",
                                        }),
                                      ],
                                    }),
                                    (0, A.tZ)(b.View, {
                                      className: "params",
                                      onClick: this.copyConfigContent.bind(
                                        this,
                                        "data=".concat(c)
                                      ),
                                      children: (0, A.BX)(b.View, {
                                        className: "txt",
                                        children: [
                                          "参数 ",
                                          c.slice(0, 50),
                                          "...(长度",
                                          c.length,
                                          ")",
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              !!this.state.showWebComp &&
                                (0, A.tZ)(
                                  I.Z,
                                  (0, r.Z)(
                                    (0, r.Z)(
                                      { type: this.state.compKey },
                                      this.state.compQuery
                                    ),
                                    {},
                                    {
                                      onClose: this.onCloseWebComp,
                                      close: this.onCloseWebComp,
                                    }
                                  )
                                ),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(p.default.Component))
              ) || s;
          (D.enableShareAppMessage = !0),
            Page(
              (0, n.createPageConfig)(
                D,
                "functionalPages/testpage/section",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "小程序测试页",
                  navigationBarBackgroundColor: "#fff",
                  navigationBarTextStyle: "black",
                  backgroundColor: "#fff",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(74122);
        }),
          e.O();
      },
    ]);
})();
