!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [14906],
    {
      45245: function (t, e, n) {
        var r = n(90983),
          a = n(298),
          o = n(22276),
          i = n(79301),
          c = n(95308),
          l = n(92954),
          u = n.n(l),
          s = n(79792),
          f = n(79910),
          d = n(8271),
          p = n.n(d),
          v = n(2657),
          h = n(3205),
          m = n(49120),
          y = n(4102),
          g = [
            "kXLnac15BL5LAygKgVCeA5b3qcrEvsBRhQZGJF2X6VM",
            "ceo0Cy8Pi0G5pLSXAIxGDi4AfQayTLAOVDw7Ujb8pc4",
            "uoNfOeSZNla1OgSFS2wOjEnnJlkDsZfjiliQOaj8aaw",
          ],
          k = [],
          D = {
            showModal: function (t) {
              u().showModal({
                title: t.t || "提示",
                content: t.m,
                showCancel: t.showCancel || !1,
                cancelText: t.cancelText || "取消",
                cancelColor: s.default.isTieyou ? "#fc6e51" : "#5495e6",
                confirmText: t.confirmText || "确定",
                confirmColor: s.default.isTieyou ? "#fc6e51" : "#5495e6",
                success: t.done,
              });
            },
            checkInvoiceTax: function (t) {
              return !!/^[A-Za-z0-9]{15,30}$/.test(t);
            },
            isIPhoneX: function () {
              return f.Z.isIPhoneX();
            },
            formatDateWithSlash: function (t) {
              return null == t ? void 0 : t.replace(/\-/g, "/");
            },
            convertAppTextToHtmlStr: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              return f.Z.convertAppTextToHtmlStr(t);
            },
            getRandomArbitrary: function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                r = Math.random() * (e - t) + t;
              return Number(r.toFixed(n));
            },
            doSubscribeAfterPay: function () {
              return (0, c.Z)(
                (0, i.Z)().mark(function t() {
                  var e;
                  return (0, i.Z)().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (e =
                                "zx" === s.default.jetpack
                                  ? g
                                  : "ty" === s.default.jetpack
                                  ? k
                                  : []),
                              (t.next = 4),
                              f.Z.doSubscribe(e)
                            );
                          case 4:
                            t.next = 9;
                            break;
                          case 6:
                            (t.prev = 6),
                              (t.t0 = t.catch(0)),
                              console.log(t.t0);
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 6]]
                  );
                })
              )();
            },
            splitFormat: function (t) {
              var e = t.value,
                n = t.keyCode,
                r = t.m,
                a = t.n,
                o = 8 == n;
              return e.length == r
                ? o
                  ? e.slice(0, -1)
                  : "".concat(e.slice(0, r - 1), " ").concat(e.charAt(r - 1))
                : e.length == a
                ? o
                  ? e.slice(0, -1)
                  : "".concat(e.slice(0, a - 1), " ").concat(e.charAt(a - 1))
                : e;
            },
            initSplitFormat: function (t) {
              var e = t.value,
                n = t.m,
                r = t.n;
              return e
                ? [e.slice(0, n), e.slice(n, n + r), e.slice(n + r)].join(" ")
                : "";
            },
            splitFormatIdentity: function (t) {
              var e = t.value,
                n = t.keyCode;
              return D.splitFormat({ value: e, keyCode: n, m: 7, n: 16 });
            },
            initSplitFormatIdentity: function (t) {
              return D.initSplitFormat({ value: t, m: 6, n: 8 });
            },
            splitFormatPhone: function (t) {
              var e = t.value,
                n = t.keyCode;
              return D.splitFormat({ value: e, keyCode: n, m: 4, n: 9 });
            },
            initSplitFormatPhone: function (t) {
              return D.initSplitFormat({ value: t, m: 3, n: 4 });
            },
            foldSharedFlights: function (t) {
              var e = [],
                n = t.filter(function (t) {
                  var e, n;
                  return !(
                    null !== (e = t.sequences) &&
                    void 0 !== e &&
                    null !== (n = e[0]) &&
                    void 0 !== n &&
                    n.shared
                  );
                }),
                r = t.filter(function (t) {
                  var e, n;
                  return null === (e = t.sequences) ||
                    void 0 === e ||
                    null === (n = e[0]) ||
                    void 0 === n
                    ? void 0
                    : n.shared;
                });
              return (
                n.forEach(function (t) {
                  var n = r.filter(function (e) {
                      var n;
                      return (
                        (null === (n = e.dirInfo) || void 0 === n
                          ? void 0
                          : n.dirToken) == t.token
                      );
                    }),
                    a = [t].concat((0, o.Z)(n));
                  a.sort(function (t, e) {
                    return t.apr - e.apr;
                  });
                  var i = a.shift();
                  (i.foldedFlights = a), e.push(i);
                }),
                e
              );
            },
            handleFlightDataInBook: function (t) {
              var e = t.some(function (t) {
                return t.dtls && t.dtls.length;
              });
              return t.map(function (t) {
                var n = p()(t.flights[0].dptTime).format("YYYY-MM-DD");
                return (0, a.Z)(
                  (0, a.Z)({}, t),
                  {},
                  {
                    dtls: e ? t.dtls || [] : t.dtls,
                    flights: t.flights.map(function (t) {
                      var e = t.dptTime,
                        r = t.arrTime,
                        o = t.dtls,
                        i = p()(e).format("YYYY-MM-DD"),
                        c = p()(r).format("YYYY-MM-DD");
                      return (0,
                      a.Z)((0, a.Z)({}, t), {}, { dptTimeStr: p()(e).format("HH:mm"), dptMonthDay: p()(e).format("M月D日"), dptWeekDay: f.Z.getWeekInfo(e), arrTimeStr: p()(r).format("HH:mm"), arrMonthDay: p()(r).format("M月D日"), dptDayDiff: n !== i ? p()(e).format("MM-DD") : "", arrDayDiff: n !== c ? p()(r).format("MM-DD") : "", dtlsStr: Array.isArray(o) ? o.join(" ") : o });
                    }),
                  }
                );
              });
            },
            setFlightUbtTrace: function (t, e) {
              var n = (u().getCurrentInstance().page || {}).ubtTrace;
              if (n)
                try {
                  n("O_TRN_ZxFlight_Click", (0, a.Z)({ actionKey: t }, e));
                } catch (t) {
                  console.log("--埋点报错--", t);
                }
            },
            isListNewUI: function () {
              return "B" == (0, v.W2)();
            },
            doFetch: function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : function () {},
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : function () {};
              return (
                (0, m.showLoading)(),
                t(e)
                  .then(function (t) {
                    1 == t.resultCode
                      ? n(t.data)
                      : (r(),
                        (0, m.showToast)(
                          t.resultMessage || "请求失败，请稍后重试！"
                        ));
                  })
                  .catch(function () {
                    (0, m.showToast)("请求失败，请稍后重试！"), r();
                  })
                  .finally(function () {
                    return (0, m.hideLoading)();
                  })
              );
            },
            pollingFetch: function (t, e) {
              var n = this;
              return t(e).then(
                (function () {
                  var r = (0, c.Z)(
                    (0, i.Z)().mark(function r(a) {
                      var o, c, l;
                      return (0, i.Z)().wrap(function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (1 != a.resultCode) {
                                r.next = 11;
                                break;
                              }
                              if (a.asyncData) {
                                r.next = 3;
                                break;
                              }
                              return r.abrupt("return", a.data);
                            case 3:
                              if (
                                ((o = a.asyncData),
                                (c = o.resultState),
                                (l = o.interval),
                                0 != c)
                              ) {
                                r.next = 6;
                                break;
                              }
                              return r.abrupt("return", a.data);
                            case 6:
                              return (r.next = 8), f.Z.awaitTime(l);
                            case 8:
                              return r.abrupt("return", n.pollingFetch(t, e));
                            case 11:
                              throw new Error(
                                a.resultMessage || "网络异常，请稍后重试~"
                              );
                            case 12:
                            case "end":
                              return r.stop();
                          }
                      }, r);
                    })
                  );
                  return function (t) {
                    return r.apply(this, arguments);
                  };
                })()
              );
            },
            handleContentFormat: function (t) {
              if (t) {
                console.log(t);
                var e,
                  n = t.remarkTitle,
                  a = t.remarkTail,
                  o = t.remarkUrl,
                  i = t.version,
                  c = (0, r.Z)(n.remarkTypeList);
                try {
                  for (c.s(); !(e = c.n()).done; ) {
                    var l = e.value;
                    l.contentList = [];
                    var u,
                      s = l.content.split("<br/>"),
                      d = (0, r.Z)(s);
                    try {
                      for (d.s(); !(u = d.n()).done; ) {
                        var p = u.value,
                          v = {};
                        (v.type = /\<\/a\>/g.test(p) ? "navigator" : "text"),
                          "text" === v.type
                            ? (v.content = D.convertAppTextToHtmlStr(p))
                            : (v.content = f.Z.convertLinkRickTextToArray(p)),
                          l.contentList.push(v);
                      }
                    } catch (t) {
                      d.e(t);
                    } finally {
                      d.f();
                    }
                  }
                } catch (t) {
                  c.e(t);
                } finally {
                  c.f();
                }
                var h,
                  m = (0, r.Z)(a.remarkTypeList);
                try {
                  for (m.s(); !(h = m.n()).done; ) {
                    var y = h.value;
                    y.contentList = [];
                    var g,
                      k = y.content.split("<br/>"),
                      Z = (0, r.Z)(k);
                    try {
                      for (Z.s(); !(g = Z.n()).done; ) {
                        var T = g.value,
                          x = {};
                        (x.type = /\<\/a\>/g.test(T) ? "navigator" : "text"),
                          "text" === x.type
                            ? (x.content = T)
                            : (x.content = f.Z.convertLinkRickTextToArray(T)),
                          y.contentList.push(x);
                      }
                    } catch (t) {
                      Z.e(t);
                    } finally {
                      Z.f();
                    }
                  }
                } catch (t) {
                  m.e(t);
                } finally {
                  m.f();
                }
                return (
                  0 === i &&
                    (t.remarkUrl.url =
                      "/functionalPages/twebview/index?url=".concat(
                        encodeURIComponent(
                          o.url.replace(/http:\/\//, "https://")
                        )
                      )),
                  t
                );
              }
            },
            toAircraftInfo: function (t) {
              var e = t.dptACode,
                n = t.dptCode,
                r = t.arrACode,
                a = t.arrCode,
                o = t.dptTime,
                i = t.flightNo,
                c = "?flightDate="
                  .concat(
                    encodeURIComponent(encodeURIComponent(o)),
                    "&departCityCode="
                  )
                  .concat(n, "&arriveCityCode=")
                  .concat(a, "&departAirportCode=")
                  .concat(e, "&arriveAirportCode=")
                  .concat(r, "&flightNo=")
                  .concat(i);
              h.Z.twebview({
                data: {
                  url: ""
                    .concat(
                      "https://market.suanya.com/activity/flight/flight-aircraft-info/"
                    )
                    .concat(c),
                },
              });
            },
            logJsonParseError: function (t) {
              f.Z.insertActionLog(
                "flight_json_parse_error",
                null,
                JSON.stringify(t)
              );
            },
            getDateList: function (t, e) {
              var n = p()(t),
                r = e ? p()(e) : p()(),
                a = [];
              a.push({ date: n, desc: y.Z.getWeekDayDesc(n) });
              for (var o = [], i = 1; i <= 7; i++) {
                var c = p()(n).subtract(i, "day"),
                  l = p()(n).add(i, "day");
                if (c.isAfter(r) || y.Z.isSameDay(c, r))
                  a.unshift({ date: c, desc: y.Z.getWeekDayDesc(c) });
                else {
                  var u = o.length + 1,
                    s = p()(n).add(u + 7, "day");
                  o.push({ date: s, desc: y.Z.getWeekDayDesc(s) });
                }
                a.push({ date: l, desc: y.Z.getWeekDayDesc(l) });
              }
              return [].concat(a, o);
            },
          };
        e.Z = D;
      },
    },
  ]);
})();
