!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [36793],
    {
      26799: function (e, t, s) {
        s.d(t, {
          Z: function () {
            return K;
          },
        });
        var n = s(90983),
          r = s(79301),
          a = s(95308),
          o = s(74921),
          i = (s(52500), s(92954)),
          c = s.n(i),
          l = s(39509),
          u = s(71515),
          h = s(79792),
          g = s(49120),
          d = s(20592),
          m = s(18783),
          f = s(79910),
          p = s(27113),
          v = s(10741),
          k = s(13025),
          y = s(79295),
          C = s(86977),
          b = s(81341),
          P = s(74867),
          T = s(93761),
          S = (s(81957), s(298)),
          w = s(57042),
          _ = s(24460),
          I = (function () {
            function e(t) {
              var s = this;
              (0, w.Z)(this, e),
                (this.source = t.source || "ztrip"),
                (this.socketKey = t.socketKey || ""),
                (this.keep = !1),
                (this.url = t.url || ""),
                (this.socket = null),
                (this.onMessage = t.onMessage),
                (this.onOpen = t.onOpen),
                (this.onGetKey = t.onGetKey),
                (this.onError = t.onError),
                (this.onClose = t.onClose),
                (this.socketUrl =
                  t.socketUrl || "wss://m.ctrip.com/miniapp/sockets/wss/"),
                (this.requestUrl =
                  t.requestUrl ||
                  "https://m.ctrip.com/miniapp/sockets/createSignatureKey"),
                (this.type = "miniapp"),
                (this.retry = 0),
                (this.retrying = !1),
                (this.connectError = !1),
                (this.messageArr = []),
                (this.messagePos = t.pos || 0),
                (this.messageNum = 0),
                (this.messageReceived = {}),
                (this.messageResend = {}),
                (this._handledMessageIdQueue = []),
                (this.eventObj = {}),
                this.checkSourceExit() &&
                  (this.getSocketsKey()
                    .then(function () {
                      if (
                        (s.timer && clearTimeout(s.timer),
                        s.socketKey && "function" == typeof s.onGetKey)
                      ) {
                        if (s.url) {
                          var e = -1 !== s.url.indexOf("?") ? "&" : "?";
                          s.url += ""
                            .concat(e, "minisocketkey=")
                            .concat(s.socketKey);
                        }
                        s.onGetKey(s.url || s.socketKey);
                      }
                      s.initSocket();
                    })
                    .catch(function (e) {
                      s.timer && clearTimeout(s.timer),
                        s._flushEvent(
                          "onError",
                          (0, S.Z)(
                            (0, S.Z)({ status: "1002" }, e),
                            {},
                            { message: "Get socketKey error." }
                          )
                        );
                    }),
                  (this.timer = setTimeout(function () {
                    (s.connectError = !0),
                      s._flushEvent("onError", {
                        status: "1003",
                        message: "get socketKey timeout.",
                      });
                  }, t.timeout || 1e4)));
            }
            return (
              (0, _.Z)(e, [
                {
                  key: "initSocket",
                  value: function () {
                    var e = this;
                    if (!this.connectError) {
                      if (!this.socketKey)
                        return (
                          this._flushEvent("onError", {
                            status: "1004",
                            errMsg: "no valid socketKey found.",
                          }),
                          void (this.connectError = !0)
                        );
                      if (this.checkSocketValid()) this._flushMessage();
                      else {
                        this.sendUbt("connectSocket", "", {});
                        var t = wx.connectSocket({
                          url: ""
                            .concat(this.socketUrl, "?key=")
                            .concat(this.socketKey, "&type=")
                            .concat(this.type, "&pos=")
                            .concat(this.messagePos),
                          success: function (t) {
                            console.log("socket success:", t),
                              e.sendUbt("connectSocket_success", {});
                          },
                          fail: function (t) {
                            console.log("socket fail:", t),
                              e.sendUbt("connectSocket_fail", {
                                errCode: (t && t.errno) || "",
                                errMsg: (t && (t.message || t.errMsg)) || "",
                              });
                          },
                        });
                        t.onOpen(function () {
                          console.log("socket open success."),
                            e.sendUbt("onOpen", {});
                        }),
                          console.log("socketClient: ", t),
                          t.onError(function (s) {
                            console.log("developClient Open Error", s),
                              e.sendUbt("onError", {
                                errMsg: (s && s.message) || "",
                                connectError: e.connectError,
                                serverError: t.serverError,
                                clientClose: t.clientClose,
                                serverClose: t.serverClose,
                              }),
                              e.connectError ||
                              t.serverError ||
                              t.clientClose ||
                              t.serverClose
                                ? e._flushEvent(
                                    "onError",
                                    (0, S.Z)(
                                      (0, S.Z)({ status: "1008" }, s),
                                      {},
                                      { errMsg: "Socket onError." }
                                    )
                                  )
                                : e.reConnect();
                          }),
                          t.onClose(function (s) {
                            console.log("onClose:", s),
                              e.sendUbt("onClose", {
                                serverClose: t.serverClose,
                                clientClose: t.clientClose,
                                connectError: e.connectError,
                                serverError: t.serverError,
                              }),
                              t.serverClose || t.clientClose
                                ? e._flushEvent("onClose", {
                                    message: " Socket Close.",
                                  })
                                : e.connectError ||
                                  t.serverError ||
                                  e.reConnect();
                          }),
                          t.onMessage(function (s) {
                            if (
                              (console.log("message:", s),
                              "string" == typeof s.data)
                            )
                              try {
                                (JSON.parse(s.data) || []).forEach(function () {
                                  var n =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {},
                                    r = n.type,
                                    a = n.data,
                                    o = n._messageId,
                                    i = n._bTime;
                                  if ("message" === r) {
                                    if (((e.messagePos += 1), i))
                                      try {
                                        var c = (0, g.getCurrentPage)();
                                        P.Z.ubtMetric({
                                          name: "mini_socket_h5_message_time",
                                          tag: {
                                            mPos: e.messagePos,
                                            mLength: s.data.length,
                                            h5Url: e.url || "",
                                            pagePath: c.route,
                                            messageId: o,
                                          },
                                          value: new Date().getTime() - i,
                                        });
                                      } catch (e) {
                                        console.log(e);
                                      }
                                    a && a._messageId && a.isReceived
                                      ? e._flushmessageReceived(a._messageId)
                                      : e._handledMessageIdQueue.includes(o)
                                      ? console.log(
                                          "This Message Has Already Used.",
                                          o
                                        )
                                      : "function" == typeof e.onMessage &&
                                        (n._messageId &&
                                          e._handledMessageIdQueue.push(o),
                                        e.onMessage(a)),
                                      o &&
                                        e.send(
                                          { isReceived: !0, _messageId: o },
                                          !0
                                        );
                                  } else "close" === r ? (t.serverClose = !0) : "error" === r ? ((t._error = a), (t.serverError = !0), (e.connectError = !0), e._flushEvent("onError", { status: "1005", message: n.data })) : "open" === r && (e._flushMessage(), "function" == typeof e.onOpen && (e.onOpen(), (e.onOpen = null)));
                                });
                              } catch (t) {
                                console.log(t),
                                  e._flushEvent("onError", {
                                    status: "1006",
                                    message: s.data,
                                  });
                              }
                            else
                              e._flushEvent("onError", {
                                status: "1007",
                                message: s,
                              });
                          }),
                          (this.socket = t);
                      }
                    }
                  },
                },
                {
                  key: "_createMessageId",
                  value: function () {
                    return ""
                      .concat(this.type, "_")
                      .concat(new Date().getTime(), "_")
                      .concat(this.messageNum++, "_")
                      .concat(parseInt("" + 100 * Math.random()));
                  },
                },
                {
                  key: "reConnect",
                  value: function () {
                    var e = this;
                    if (
                      (console.log("socket connected error."),
                      !this.retrying && !this.connectError)
                    ) {
                      if (((this.retrying = !0), this.retry++, this.retry > 10))
                        return (
                          "function" == typeof this.onError &&
                            this.onError({
                              message: "socket connected error.",
                            }),
                          void (this.connectError = !0)
                        );
                      setTimeout(function () {
                        (e.retrying = !1), e.initSocket();
                      }, 3e3);
                    }
                  },
                },
                {
                  key: "checkSourceExit",
                  value: function () {
                    if (this.source) return !0;
                    (this.connectError = !0),
                      this._flushEvent("onError", {
                        status: "1010",
                        message: "source is required!",
                      });
                  },
                },
                {
                  key: "getSocketsKey",
                  value: function () {
                    var e = this;
                    return new Promise(
                      (function () {
                        var t = (0, a.Z)(
                          (0, r.Z)().mark(function t(s, n) {
                            return (0, r.Z)().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), (0, m.i2)();
                                  case 2:
                                    c().request({
                                      data: {
                                        cid: m.ZP.cid,
                                        openId: m.ZP.openid,
                                        source: e.source,
                                      },
                                      method: "POST",
                                      url: e.requestUrl,
                                      success: function () {
                                        var t =
                                          arguments.length > 0 &&
                                          void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {};
                                        if (
                                          ((e.socketKey =
                                            (t.data && t.data.key) || ""),
                                          !e.socketKey)
                                        )
                                          return (
                                            console.log(t),
                                            n({
                                              status: "1009",
                                              message: "Get socketKey failed.",
                                            })
                                          );
                                        console.log(
                                          "this.socketKey:",
                                          e.socketKey
                                        ),
                                          s(e.socketKey);
                                      },
                                      fail: function (e) {
                                        n(e);
                                      },
                                    });
                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e, s) {
                          return t.apply(this, arguments);
                        };
                      })()
                    );
                  },
                },
                {
                  key: "_flushEvent",
                  value: function (e, t) {
                    this.eventObj[e] ||
                      ("function" == typeof this[e] &&
                        ((this.eventObj[e] = !0), this[e](t)));
                  },
                },
                {
                  key: "_flushMessage",
                  value: function () {
                    for (var e = null; (e = this.messageArr.shift()); )
                      this._send(e, !0);
                  },
                },
                {
                  key: "_flushmessageReceived",
                  value: function (e) {
                    if (this.messageReceived[e]) {
                      var t = this.messageReceived[e],
                        s = t.resolve,
                        n = t.timer;
                      n && clearTimeout(n),
                        this._ubtSendStatus(e, "resolve"),
                        delete this.messageReceived[e],
                        s();
                    }
                  },
                },
                {
                  key: "_send",
                  value: function (e, t) {
                    this.checkSocketValid()
                      ? ((e = JSON.stringify(e)),
                        this.socket.send({
                          data: e,
                          success: function (e) {
                            console.log("send msg success: ", e);
                          },
                          fail: function (e) {
                            console.log("send msg fail: ", e);
                          },
                        }))
                      : this.connectError
                      ? this._flushEvent("onError", {
                          status: 400,
                          message: "client connect error.",
                        })
                      : t || this.messageArr.push(e);
                  },
                },
                {
                  key: "sendUbt",
                  value: function (e, t) {
                    try {
                      P.Z.ubtMetric({
                        name: "miniapp_minisocket_"
                          .concat(e, "_")
                          .concat(0 === this.retry ? "firstTry" : "retry"),
                        tag: (0, S.Z)(
                          (0, S.Z)({}, t),
                          {},
                          {
                            socketKey: this.socketKey,
                            messagePos: this.messagePos,
                            source: this.source || "",
                          }
                        ),
                        value: this.retry,
                      });
                    } catch (e) {
                      console.error("sendUbt error:", e);
                    }
                  },
                },
                {
                  key: "_ubtSendStatus",
                  value: function (e, t) {
                    try {
                      var s = (0, g.getCurrentPage)(),
                        n = this.messageReceived[e];
                      if (n) {
                        var r = n._bTime;
                        r &&
                          P.Z.ubtMetric({
                            name: "mini_socket_miniApp_send_status",
                            tag: {
                              h5Url: this.url || "",
                              pagePath: s.route,
                              messageId: e,
                              status: t,
                            },
                            value: new Date().getTime() - r,
                          });
                      }
                    } catch (e) {
                      console.log(e);
                    }
                  },
                },
                {
                  key: "send",
                  value: function (e, t, s) {
                    var n = this;
                    return new Promise(function (r, a) {
                      var o = {
                        type: "message",
                        data: e,
                        _bTime: new Date().getTime(),
                      };
                      if (!t) {
                        var i = s || n._createMessageId(),
                          c = setTimeout(function () {
                            n._ubtSendStatus(i, "reject"),
                              delete n.messageReceived[i],
                              console.log("msg._messageId timeout:", i),
                              (n.messageResend[i] = e),
                              a(i);
                          }, 1e4);
                        (n.messageReceived[i] = {
                          resolve: r,
                          timer: c,
                          _bTime: new Date().getTime(),
                        }),
                          (o._messageId = i);
                      }
                      return n._send(o);
                    });
                  },
                },
                {
                  key: "reSend",
                  value: function (e) {
                    var t = this;
                    return new Promise(function (s, n) {
                      if (!t.messageResend[e])
                        return n("no message with messageId ".concat(e));
                      t.send(t.messageResend[e], !1, e).then(s).catch(n);
                    });
                  },
                },
                {
                  key: "close",
                  value: function () {
                    this.checkSocketValid()
                      ? (this.socket.send(JSON.stringify({ type: "close" })),
                        (this.socket.clientClose = !0),
                        this.socket.close())
                      : this.socket &&
                        3 === this.socket.readyState &&
                        this._flushEvent("onClose", {
                          message: "Socket already closed.",
                        });
                  },
                },
                {
                  key: "checkSocketValid",
                  value: function () {
                    return (
                      this.socket &&
                      1 === this.socket.readyState &&
                      !this.socket.clientClose
                    );
                  },
                },
              ]),
              e
            );
          })();
        var U = s(41969),
          E = s.n(U),
          Z = s(80626),
          x = s(48813),
          D =
            "https://pages.c-ctrip.com/market/components/static/icon-friend.png",
          M =
            "https://pages.c-ctrip.com/market/components/static/icon-weixin.png",
          B =
            "https://images3.c-ctrip.com/train/tieyou-mini-img/popup_close.png",
          N = function (e) {
            var t = e.show,
              s = e.transitionShare,
              n = e.shareType,
              r = void 0 === n ? "C" : n,
              a = e.onClose,
              o = e.navigateToTimeline,
              i = ["A", "C"].includes(r),
              c = ["B", "C"].includes(r),
              l = "share-pop-wrap".concat((0, Z.gP)(t, " show")),
              g = "content"
                .concat((0, Z.gP)(s, " transition"))
                .concat((0, Z.gP)("ios" === h.default.os, " ios"));
            return (0, x.BX)(u.CoverView, {
              className: l,
              children: [
                (0, x.tZ)(u.CoverView, { className: "mask", onClick: a }),
                (0, x.BX)(u.CoverView, {
                  className: g,
                  children: [
                    (0, x.tZ)(u.CoverView, {
                      className: "tit",
                      children: "请选择分享方式",
                    }),
                    (0, x.tZ)(u.CoverImage, {
                      src: B,
                      className: "icon-closed",
                      onClick: a,
                    }),
                    (0, x.BX)(u.CoverView, {
                      className: "btns",
                      children: [
                        i &&
                          (0, x.BX)(u.Button, {
                            className: "share friend",
                            openType: "share",
                            children: [
                              (0, x.tZ)(u.CoverImage, {
                                src: M,
                                className: "share-icon",
                                mode: "widthFix",
                              }),
                              (0, x.tZ)(u.CoverView, {
                                className: "txt",
                                children: "微信好友",
                              }),
                            ],
                          }),
                        c &&
                          (0, x.BX)(u.CoverView, {
                            className: "share timeline",
                            onClick: o,
                            children: [
                              (0, x.tZ)(u.CoverImage, {
                                src: D,
                                className: "share-icon",
                                mode: "widthFix",
                              }),
                              (0, x.tZ)(u.CoverView, {
                                className: "txt",
                                children: "朋友圈",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          O = ["needRefresh", "backToMini"],
          A = function () {},
          R = function (e) {
            return e ? (e.startsWith("#") ? e : "#".concat(e)) : "";
          },
          K = {
            pageId: h.default.isTieyou ? "10650048339" : "10650048341",
            socketClient: null,
            data: {
              canWebView: c().canIUse("web-view"),
              wsg: "",
              url: "",
              shareUseOriginUrl: "0",
              shareMenuShow: !1,
              transitionShare: !1,
            },
            shareData: {
              bu: "",
              title: "",
              path: "",
              imageUrl: "",
              desc: "",
              customer: null,
              midImage: "",
            },
            bridgeIns: A,
            openId: m.ZP.openid || "",
            unionId: m.ZP.unionid || "",
            openGId: m.ZP.groupId || "",
            searchParams: null,
            cityName: "",
            longitude: null,
            atitude: null,
            utmSource: "",
            onLoad: function () {
              var e = this,
                t = ((0, i.getCurrentInstance)(),
                Object(this.$router.params.data)).url,
                s = Object(this.$router.params.data),
                n = s.bridgeIns,
                r = void 0 === n ? A : n,
                a = s.utmSource,
                o = void 0 === a ? "" : a;
              (this.bridgeIns = r), (this.utmSource = o);
              var c = "";
              if (!t) {
                if (!(t = this.$router.params.url))
                  return void this.showUrlError();
                (c = this.$router.params.loginToken || ""),
                  (t = decodeURIComponent(t));
              }
              this.initPage(t, c),
                wx.onCopyUrl &&
                  wx.onCopyUrl(function () {
                    var s = "url=".concat(encodeURIComponent(t));
                    return (
                      e.ubtDevTrace("o_mini_copyurl", { query: s }),
                      { query: s }
                    );
                  });
            },
            onShow: function () {
              var e = this;
              console.log("page onShow");
              try {
                var t = d.Bc.WEBVIEW_REFRESH_BACK_DATA || {},
                  s = t.needRefresh,
                  n = void 0 !== s && s,
                  r = t.backToMini,
                  a = void 0 !== r && r,
                  i = (0, o.Z)(t, O),
                  c = "";
                if (n) {
                  if (i.h5Url) c = i.h5Url;
                  else {
                    var l = this.data.url,
                      u = l.split("#")[1] || "",
                      h = l.replace(/#.*/, "").split("?")[0];
                    for (var g in i) this.searchParams.set(g, i[g]);
                    c =
                      h +
                      "?" +
                      this.searchParams.toString() +
                      (u ? "#".concat(u) : "");
                  }
                  d.Bc.WEBVIEW_REFRESH_BACK_DATA = {};
                  try {
                    this.ubtTrace("179863", { h5Url: c, timing: "onshow" });
                  } catch (e) {
                    console.log(e);
                  }
                  a
                    ? (this.setData({ url: "" }),
                      setTimeout(function () {
                        e.setData({ url: c });
                      }, 500))
                    : this.setData({ url: c });
                }
              } catch (e) {
                console.log(e);
              }
            },
            detached: function () {
              this.socketClient && this.socketClient.close(),
                wx.offCopyUrl && wx.offCopyUrl();
            },
            showUrlError: function () {
              this.setData({
                url: "",
                wsg: "目标地址出了点问题，请重新打开该页面",
              });
            },
            initNavigation: function (e) {
              var t,
                s = this.$router,
                n =
                  (null == s || null === (t = s.params) || void 0 === t
                    ? void 0
                    : t.data) || {},
                r = n.title,
                a = n.titleColor,
                o = n.titleBgColor,
                i = n.bgColor,
                c = n.bgColorTop,
                l = n.bgColorBottom,
                u = {
                  navigationBarTitleText:
                    e.get("title") || r || "页面加载中...",
                  navigationBarFrontColor:
                    R(e.get("titleColor")) || a || "#000000",
                  navigationBarBackgroundColor:
                    R(e.get("titleBgColor")) || o || "#ffffff",
                  backgroundColorTop: R(e.get("bgColorTop")) || c || "#ffffff",
                  backgroundColorBottom:
                    R(e.get("bgColorBottom")) || l || "#ffffff",
                  backgroundColor: i || "#ffffff",
                };
              h.default.isAlipay || (0, g.setPageConfig)(u);
            },
            initPage: function (e, t) {
              var s = this;
              return (0, a.Z)(
                (0, r.Z)().mark(function n() {
                  var a,
                    o,
                    i,
                    u,
                    h,
                    g,
                    d,
                    v,
                    k,
                    C,
                    b,
                    P,
                    T,
                    S,
                    w,
                    _,
                    I,
                    U,
                    E,
                    Z,
                    x,
                    D;
                  return (0, r.Z)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              ((a = new l.Z(
                                e.replace(/#.*/, "").split("?")[1]
                              )),
                              (s.searchParams = a),
                              (o = [
                                "_sync",
                                "mp",
                                "_cid",
                                "_token",
                                "secretToken",
                                "openGId",
                                "openId",
                                "unionId",
                                "latitude",
                                "longitude",
                                "nickName",
                                "avatar",
                              ]),
                              s.searchParams.forEach(function (e, t) {
                                o.includes(t) && s.searchParams.delete(t);
                              }),
                              (i = a.get("needLogin")),
                              (u = a.get("needAuth")),
                              (h = a.get("needSubscribe")),
                              (g = a.get("needLocation")),
                              (d = a.get("source")),
                              (v = a.get("loginSource")),
                              (k = a.get("allianceid")),
                              (C = a.get("sid")),
                              (b = a.get("shareUseOriginUrl")),
                              (s.oldTokenModel = a.get("oldTokenModel")),
                              !t)
                            ) {
                              n.next = 17;
                              break;
                            }
                            return (
                              (n.next = 17), (0, m.tN)().catch(function () {})
                            );
                          case 17:
                            if (
                              (s.initNavigation(a),
                              k &&
                                C &&
                                y.Z.setUnionData({ allianceid: k, sid: C }),
                              s.openId && s.unionId)
                            ) {
                              n.next = 33;
                              break;
                            }
                            return (
                              (n.prev = 20),
                              (n.next = 23),
                              (0, m.M9)({ isSaveSessionKey: 2 })
                            );
                          case 23:
                            (P = n.sent),
                              (T = P.openid),
                              (S = P.unionid),
                              (s.openId = T),
                              (s.unionId = S),
                              (n.next = 33);
                            break;
                          case 30:
                            (n.prev = 30),
                              (n.t0 = n.catch(20)),
                              console.error("getOpenIdAction", n.t0);
                          case 33:
                            if (
                              ((w = e.replace(/#.*/, "").split("?")[0]),
                              !v &&
                                w.includes("activity/") &&
                                !w.includes("activity/static"))
                            )
                              try {
                                (_ = w
                                  .split("activity/")[1]
                                  .split("/")[0]
                                  .replace(/^\d+|-/g, "")),
                                  (v = "".concat(d || "", "-").concat(_));
                              } catch (e) {}
                            if (
                              (w.includes("20221010-flight-invite-prize") &&
                                (v = "3174788663"),
                              v &&
                                f.Z.setLaunchSource({
                                  loginSoureType: "wechat",
                                  loginSourceName: v,
                                }),
                              "1" !== g)
                            ) {
                              n.next = 44;
                              break;
                            }
                            return (
                              (n.next = 40),
                              (0, p.CC)().catch(function () {
                                return {};
                              })
                            );
                          case 40:
                            (I = n.sent),
                              (s.cityName = I.cityName || ""),
                              (s.latitude = I.latitude || ""),
                              (s.longitude = I.longitude || "");
                          case 44:
                            if (
                              ((U = m.ZP.auth || ""),
                              (E = ""),
                              !U || e.includes(".ctrip.com"))
                            ) {
                              n.next = 55;
                              break;
                            }
                            return (
                              (n.prev = 47), (n.next = 50), s.getTokenByAuth()
                            );
                          case 50:
                            (E = n.sent), (n.next = 55);
                            break;
                          case 53:
                            (n.prev = 53), (n.t1 = n.catch(47));
                          case 55:
                            if (E || "1" !== i || "1" != u) {
                              n.next = 57;
                              break;
                            }
                            return n.abrupt("return", s.goToLoginAndAuth(e));
                          case 57:
                            if (E || "1" !== i) {
                              n.next = 59;
                              break;
                            }
                            return n.abrupt("return", s.goToLogin(e));
                          case 59:
                            if (
                              ((Z = c().getStorageSync("USERINFONEW") || {}),
                              (x = Z.nickName),
                              (D = Z.avatarUrl),
                              x || D || "1" != u)
                            ) {
                              n.next = 62;
                              break;
                            }
                            return n.abrupt("return", s.gotoAuth(e, E));
                          case 62:
                            if ("1" != h) {
                              n.next = 64;
                              break;
                            }
                            return n.abrupt("return", s.goToSubscribe(e));
                          case 64:
                            s.goUrl({
                              url: e,
                              token: E,
                              nickName: x,
                              avatar: D,
                              shareUseOriginUrl: b,
                            });
                          case 65:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [
                      [20, 30],
                      [47, 53],
                    ]
                  );
                })
              )();
            },
            getHostFromH5Url: function (e) {
              if (e.startsWith("http")) return e.split("/")[2];
            },
            goUrl: function (e) {
              var t = this,
                s = e.url,
                n = e.token,
                r = void 0 === n ? "" : n,
                a = e.avatar,
                o = void 0 === a ? "" : a,
                i = e.nickName,
                l = void 0 === i ? "" : i,
                u = e.shareUseOriginUrl,
                g = void 0 === u ? "0" : u,
                d = s.split("#")[1] || "",
                f = s.replace(/#.*/, "").split("?")[0],
                p = "1" === this.searchParams.get("needThirdLogin"),
                v = "1" === this.searchParams.get("needSocketSupport"),
                k = "https://".concat(
                  this.getHostFromH5Url(s),
                  "/webapp/train/activity/static/common/thirdLogin.html"
                );
              this.searchParams.set("mp", 1);
              var C = h.default.isTieyou ? "3" : "2";
              if (
                (this.searchParams.set("_sync", C),
                this.oldTokenModel || this.searchParams.set("_et", "aes"),
                r && this.searchParams.set("_token", r),
                o && this.searchParams.set("avatar", o),
                l && this.searchParams.set("nickName", l),
                this.cityName &&
                  this.searchParams.set("cityName", this.cityName),
                this.latitude &&
                  this.searchParams.set("latitude", this.latitude),
                this.longitude &&
                  this.searchParams.set("longitude", this.longitude),
                m.ZP.cid && this.searchParams.set("_cid", m.ZP.cid),
                this.openId && this.searchParams.set("openId", this.openId),
                this.unionId && this.searchParams.set("unionId", this.unionId),
                m.ZP.secretToken &&
                  this.searchParams.set("secretToken", m.ZP.secretToken),
                this.openGId && this.searchParams.set("openGId", this.openGId),
                p && this.searchParams.set("redirectUrl", s),
                "canary" === c().getStorageSync("GLOBAL_ENV"))
              ) {
                this.searchParams.set("env", "canary"),
                  this.searchParams.set("isCtripCanaryReq", "1");
                var T = c().getStorageSync("GLOBAL_CANARY_IDC");
                T && this.searchParams.set("idc", T);
              }
              if (
                (this.utmSource &&
                  this.searchParams.set("m_utmSource", this.utmSource),
                this.searchParams.set("miniProgramType", h.default.miniType),
                this.searchParams.set("jetpack", h.default.jetpack),
                this.searchParams.set("m_aid", y.Z.getUnionData().aid),
                this.searchParams.set("m_sid", y.Z.getUnionData().sid),
                b.lO.get())
              ) {
                this.searchParams.set("z-proxy", "1");
                var S = P.Z.getSessionId();
                this.searchParams.set("sessionid", S);
              }
              var w =
                (p ? k : f) +
                "?" +
                this.searchParams.toString() +
                (d ? "#".concat(d) : "");
              console.log("newUrl", w);
              try {
                this.ubtTrace("179863", { h5Url: w, timing: "onload" });
              } catch (e) {
                console.log(e);
              }
              v
                ? (this.socketClient = (function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return (
                      e.socketObserverKey &&
                        ["onMessage", "onOpen", "onError", "onClose"].forEach(
                          function (t) {
                            var s = e[t];
                            e[t] = function (e) {
                              s && s.apply(null, e);
                            };
                          }
                        ),
                      new I(e)
                    );
                  })({
                    url: w,
                    onGetKey: function (e) {
                      console.error("onGetKey", e),
                        t.setData({ url: e, shareUseOriginUrl: g });
                    },
                    onMessage: function (e) {
                      t.onMessageHandle(e), console.error("onMessage", e);
                    },
                  }))
                : this.setData({ url: w, shareUseOriginUrl: g });
            },
            onMessageHandle: function (e) {
              var t = this;
              return (0, a.Z)(
                (0, r.Z)().mark(function s() {
                  var n, a, o, i, l, u, h, g, d, f, p, v, y, C;
                  return (0, r.Z)().wrap(
                    function (s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            if (
                              ((s.prev = 0),
                              (n = JSON.parse(e)),
                              (a = n.action),
                              (o = n.info),
                              (i = n.shareType),
                              (l = void 0 === i ? "C" : i),
                              "share" != a || null == o || !o.miniProgramPath)
                            ) {
                              s.next = 13;
                              break;
                            }
                            return (
                              (t.shareData.title = o.title),
                              (t.shareData.path = o.miniProgramPath),
                              (t.shareData.imageUrl = o.miniProgramImage),
                              (t.shareData.midImage = o.image),
                              console.log("onMessageHandle", t.shareData),
                              t.setData({ shareMenuShow: !0, shareType: l }),
                              t.transitionShareTimeout &&
                                (clearTimeout(t.transitionShareTimeout),
                                (t.transitionShareTimeout = null)),
                              (t.transitionShareTimeout = setTimeout(
                                function () {
                                  t.setData({ transitionShare: !0 });
                                },
                                100
                              )),
                              s.abrupt("return")
                            );
                          case 13:
                            if ("pay" != a || !o.orderNumbder) {
                              s.next = 16;
                              break;
                            }
                            return (
                              T.ZP.doPayment({
                                business: o.business || "common",
                                goodsId: o.goodsId || "",
                                orderNumber: o.orderNumbder,
                              })
                                .then(function () {
                                  var e;
                                  null === (e = t.socketClient) ||
                                    void 0 === e ||
                                    e.send({
                                      action: "pay",
                                      info: { success: !0 },
                                    });
                                })
                                .catch(function () {
                                  var e;
                                  null === (e = t.socketClient) ||
                                    void 0 === e ||
                                    e.send({
                                      action: "pay",
                                      info: { success: !1 },
                                    });
                                }),
                              s.abrupt("return")
                            );
                          case 16:
                            if (
                              ("openOtherMini" == a &&
                                o.appid &&
                                o.miniProgramPath &&
                                c().showModal({
                                  title: "温馨提示",
                                  content: "将要打开第三方小程序",
                                  confirmText: "确定",
                                  showCancel: !1,
                                  confirmColor: "#0080FF",
                                  success: function (e) {
                                    e.confirm &&
                                      c()
                                        .navigateToMiniProgram({
                                          appId: o.appid,
                                          path: o.miniProgramPath,
                                        })
                                        .then(function () {
                                          var e;
                                          null === (e = t.socketClient) ||
                                            void 0 === e ||
                                            e.send({
                                              action: "openOtherMini",
                                              info: { success: !0 },
                                            });
                                        })
                                        .catch(function (e) {
                                          var s;
                                          null === (s = t.socketClient) ||
                                            void 0 === s ||
                                            s.send({
                                              action: "openOtherMini",
                                              info: {
                                                success: !1,
                                                message: JSON.stringify(e),
                                              },
                                            });
                                        });
                                  },
                                  fail: function () {
                                    var e;
                                    null === (e = t.socketClient) ||
                                      void 0 === e ||
                                      e.send({
                                        action: "openOtherMini",
                                        info: {
                                          success: !1,
                                          message: JSON.stringify(err),
                                        },
                                      });
                                  },
                                }),
                              "getRunData" != a)
                            ) {
                              s.next = 35;
                              break;
                            }
                            s.next = 20;
                            break;
                          case 20:
                            return (s.next = 22), (0, m.aH)();
                          case 22:
                            if (null != (h = s.sent) && h.code) {
                              s.next = 25;
                              break;
                            }
                            return s.abrupt(
                              "return",
                              null === (g = t.socketClient) || void 0 === g
                                ? void 0
                                : g.send({
                                    action: "getRunData",
                                    info: {
                                      success: !1,
                                      message: "get code fail",
                                    },
                                  })
                            );
                          case 25:
                            return (s.next = 27), c().getWeRunData();
                          case 27:
                            return (
                              (d = s.sent),
                              (f = d.encryptedData),
                              (p = d.iv),
                              (s.next = 31),
                              (0, k.hI)({
                                code: h.code,
                                iv: p,
                                encryptedData: f,
                                partner: "zhixingwx",
                              })
                            );
                          case 31:
                            if (!(v = s.sent) || !v.stepInfoList) {
                              s.next = 34;
                              break;
                            }
                            return s.abrupt(
                              "return",
                              null === (y = t.socketClient) || void 0 === y
                                ? void 0
                                : y.send({
                                    action: "getRunData",
                                    info: { success: !0, data: v.stepInfoList },
                                  })
                            );
                          case 34:
                            return s.abrupt(
                              "return",
                              null === (u = t.socketClient) || void 0 === u
                                ? void 0
                                : u.send({
                                    action: "getRunData",
                                    info: {
                                      success: !1,
                                      message: "get runData fail",
                                    },
                                  })
                            );
                          case 35:
                            s.next = 41;
                            break;
                          case 37:
                            (s.prev = 37),
                              (s.t0 = s.catch(0)),
                              console.error("onMessageHandle error", s.t0, e),
                              null === (C = t.socketClient) ||
                                void 0 === C ||
                                C.send({
                                  action: "",
                                  info: {
                                    success: !1,
                                    message: JSON.stringify(s.t0),
                                  },
                                });
                          case 41:
                          case "end":
                            return s.stop();
                        }
                    },
                    s,
                    null,
                    [[0, 37]]
                  );
                })
              )();
            },
            getTokenByAuth: function () {
              var e = this;
              return new Promise(function (t, s) {
                if (e.oldTokenModel) {
                  var n = {
                    context: { platform: "miniapp", clientid: m.ZP.cid },
                  };
                  (0, k.Cn)(n).then(
                    function (e) {
                      e && e.token ? t(e.token) : s();
                    },
                    function (e) {
                      s(e);
                    }
                  );
                } else
                  try {
                    var r = E().enc.Utf8.parse("L278R7v7Hb6R88J5"),
                      a = ""
                        .concat(m.ZP.auth, "|")
                        .concat(m.ZP.duid, "|")
                        .concat(new Date().getTime()),
                      o = E().AES.encrypt(a, r, {
                        mode: E().mode.ECB,
                        padding: E().pad.Pkcs7,
                      });
                    (o = o.toString()), t(o);
                  } catch (e) {
                    s(e);
                  }
              });
            },
            navigateToShare: function (e) {
              var t = this;
              e &&
                e.shareData &&
                setTimeout(function () {
                  console.warn(
                    "注意：左右按钮功能是反着来的，leftBtnTex对应于页面的右侧保存图片按钮"
                  ),
                    t.navigateTo({
                      url: "/functionalPages/share/share",
                      data: {
                        shareImg: e.shareData.shareImage,
                        img: e.imageUrl,
                        imgBase64: e.base64Data,
                        leftBtnBgColor: e.rightBtnBgColor,
                        leftBtnTxt: e.rightBtnTxt,
                        leftBtnColor: e.rightBtnColor,
                        rightBtnBgColor: e.leftBtnBgColor,
                        rightBtnTxt: e.leftBtnTxt,
                        rightBtnColor: e.leftBtnColor,
                        bgColor: e.bgColor,
                        shareTitle: e.shareData.shareTitle,
                        sharePath: e.shareData.sharePath,
                        showRightBtn: e.showRightBtn,
                      },
                    });
                }, 300);
            },
            onWebMessage: function (e) {
              h.default.isAlipay && (e.detail.data = [e.detail.data]);
              var t,
                s = (0, n.Z)(e.detail.data);
              try {
                for (s.s(); !(t = s.n()).done; ) {
                  var r = t.value;
                  "onShare" === r.type
                    ? ((this.shareData = r.shareData), (r.needClean = 1))
                    : "onSaveImage" === r.type
                    ? (console.log("onSaveImage", r.subscribeTmpIds),
                      this.navigateToShare(r),
                      (r.needClean = 1))
                    : this.bridgeIns(e);
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
              this.cleanMessage(e.detail.data);
            },
            cleanMessage: function (e) {
              for (var t = e.length - 1; t >= 0; t--)
                e[t].needClean && e.splice(t, 1);
            },
            onShareAppMessage: function () {
              var e = this.data || {},
                t = e.shareUseOriginUrl,
                s = e.url;
              return (
                this.shareData.title ||
                  (this.shareData.title = h.default.isTieyou
                    ? "铁友"
                    : "智行火车票特价机票酒店汽车门票"),
                this.shareData.path ||
                  (this.shareData.path = "1" === t ? s : f.Z.getHomePath()),
                (this.shareData.path = (0, C.ub)(this.shareData.path)),
                console.log("share data", this.shareData),
                this.shareData
              );
            },
            goToLogin: function (e) {
              var t = this;
              m.ZP.doLogin().then(
                (0, a.Z)(
                  (0, r.Z)().mark(function s() {
                    var n;
                    return (0, r.Z)().wrap(
                      function (s) {
                        for (;;)
                          switch ((s.prev = s.next)) {
                            case 0:
                              return (
                                (n = ""),
                                (s.prev = 1),
                                (s.next = 4),
                                t.getTokenByAuth()
                              );
                            case 4:
                              (n = s.sent), (s.next = 10);
                              break;
                            case 7:
                              (s.prev = 7),
                                (s.t0 = s.catch(1)),
                                console.log(s.t0);
                            case 10:
                              n
                                ? t.goUrl({ url: e, token: n })
                                : (c().showToast({
                                    title: "登录失败，请重新登录",
                                    icon: "none",
                                    duration: 2e3,
                                  }),
                                  t.goUrl({ url: e }));
                            case 11:
                            case "end":
                              return s.stop();
                          }
                      },
                      s,
                      null,
                      [[1, 7]]
                    );
                  })
                ),
                function () {
                  t.goUrl({ url: e });
                }
              );
            },
            gotoAuth: function (e, t) {
              var s = this;
              m.ZP.avatarAndNameAuth().then(
                function (n) {
                  var r = n.Data,
                    a = r.nickName,
                    o = r.avatarUrl;
                  s.updateShareUserInfo({ nickName: a, avatarUrl: o }),
                    s.goUrl({ url: e, token: t, avatar: o, nickName: a });
                },
                function (n) {
                  console.log("Avatar and name auth after login error", n),
                    s.goUrl({ url: e, token: t });
                }
              );
            },
            goToLoginAndAuth: function (e) {
              var t = this;
              m.ZP.doLogin().then(
                (0, a.Z)(
                  (0, r.Z)().mark(function s() {
                    var n;
                    return (0, r.Z)().wrap(
                      function (s) {
                        for (;;)
                          switch ((s.prev = s.next)) {
                            case 0:
                              return (
                                (n = ""),
                                (s.prev = 1),
                                (s.next = 4),
                                t.getTokenByAuth()
                              );
                            case 4:
                              (n = s.sent), (s.next = 10);
                              break;
                            case 7:
                              (s.prev = 7),
                                (s.t0 = s.catch(1)),
                                console.log(s.t0);
                            case 10:
                              n
                                ? t.gotoAuth(e, n)
                                : (c().showToast({
                                    title: "登录失败，请重新登录",
                                    icon: "none",
                                    duration: 2e3,
                                  }),
                                  t.goUrl({ url: e }));
                            case 11:
                            case "end":
                              return s.stop();
                          }
                      },
                      s,
                      null,
                      [[1, 7]]
                    );
                  })
                ),
                function () {
                  t.goUrl({ url: e });
                }
              );
            },
            goToSubscribe: function (e) {
              var t = this;
              m.ZP.subscribe(e).then(function (s) {
                console.log("sub", s),
                  t.searchParams.delete("needSubscribe"),
                  t.goUrl({ url: e });
              });
            },
            updateShareUserInfo: function (e) {
              var t = this;
              return (0, a.Z)(
                (0, r.Z)().mark(function s() {
                  var n, a, o, i;
                  return (0, r.Z)().wrap(
                    function (s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            if (
                              ((n = e.nickName),
                              (a = e.avatarUrl),
                              (o = t.openId) && n && a)
                            ) {
                              s.next = 4;
                              break;
                            }
                            return s.abrupt("return");
                          case 4:
                            return (
                              (i = { photoUrl: a, name: n, openId: o }),
                              (s.prev = 5),
                              (s.next = 8),
                              (0, v.ryV)(i)
                            );
                          case 8:
                            s.next = 13;
                            break;
                          case 10:
                            (s.prev = 10),
                              (s.t0 = s.catch(5)),
                              console.log(s.t0);
                          case 13:
                          case "end":
                            return s.stop();
                        }
                    },
                    s,
                    null,
                    [[5, 10]]
                  );
                })
              )();
            },
            onCloseShareView: function () {
              this.setData({ shareMenuShow: !1, transitionShare: !1 });
            },
            navigateToTimeline: function () {
              this.navigateTo({
                url: "/functionalPages/share/share",
                data: {
                  shareImg: this.shareData.imageUrl,
                  img: this.shareData.midImage,
                  shareTitle: this.shareData.title,
                  sharePath: this.shareData.path,
                },
              });
            },
            render: function () {
              var e = this.data,
                t = e.url,
                s = e.wsg,
                n = e.canWebView,
                r = e.shareMenuShow,
                a = e.transitionShare,
                o = e.shareType;
              return (0, x.BX)(x.HY, {
                children: [
                  n
                    ? (0, x.tZ)(x.HY, {
                        children: t
                          ? (0, x.tZ)(u.WebView, {
                              src: t,
                              onMessage: this.onWebMessage,
                            })
                          : (0, x.tZ)(u.View, { children: s }),
                      })
                    : (0, x.tZ)(u.View, {
                        children:
                          "亲爱的用户，您的APP版本太低啦，快去升级APP吧",
                      }),
                  r &&
                    (0, x.tZ)(N, {
                      show: r,
                      transitionShare: a,
                      shareType: o,
                      onClose: this.onCloseShareView,
                      navigateToTimeline: this.navigateToTimeline,
                    }),
                ],
              });
            },
          };
      },
    },
  ]);
})();
