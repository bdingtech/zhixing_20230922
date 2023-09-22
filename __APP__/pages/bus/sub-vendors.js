!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [86230],
    {
      90699: function (e, t, n) {
        var i = n(298),
          a = n(93212),
          c = n(92954),
          o = n.n(c),
          s = n(3106),
          r = n(5830),
          l = "zxxcx_ditui_yilabao",
          u = "offzxcz_",
          d = {
            getUtmSource: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e && (e.utmsource || e.utmSource);
              if (t) return "" + t;
              var n = o().getStorageSync("BUS_UTMSOURCE") || {},
                i = n.expireTimes || 1800;
              if (n && n.timeStamp) {
                var c = Date.parse(new Date()) / 1e3;
                if (n.source && -1 !== n.source.indexOf(l)) {
                  var s = Array.isArray(n.station) ? n.station : [];
                  return e
                    ? c - n.timeStamp > i ||
                      ((Array.isArray(e.station)
                        ? !e.station.some(function (e) {
                            return s.includes(e);
                          })
                        : !s.includes(e.station)) &&
                        (null == e || !e.noCheckStation))
                      ? "ctrip_xcx_c" + r.z.suffix
                      : n.source
                    : "ctrip_xcx_c" + r.z.suffix;
                }
                return c - n.timeStamp > i
                  ? "ctrip_xcx_c" + r.z.suffix
                  : n.source
                  ? "object" == (0, a.Z)(n.source) &&
                    n.source.constructor == Array
                    ? n.source.join("_")
                    : "" + n.source
                  : "ctrip_xcx_c" + r.z.suffix;
              }
              return "ctrip_xcx_c" + r.z.suffix;
            },
            isStationScanSource: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : d.getUtmSource();
              return String(e).indexOf(u) > -1;
            },
            isDTSource: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : d.getUtmSource();
              return String(e).indexOf("zxxcx_ditui_yilabao") > -1;
            },
            formatTime: function (e) {
              return e < 10 ? "0" + e : e;
            },
            countDown: function (e) {
              var t = e;
              return t < 0
                ? { hour: "00", min: "00", sec: "00", end: !0 }
                : {
                    hour: this.formatTime(parseInt(t / 3600)),
                    min: this.formatTime(parseInt((t % 3600) / 60)),
                    sec: this.formatTime(parseInt((t % 3600) % 60)),
                    ms: ((1e3 * t) % 1e3).toString().slice(0, 1),
                    end: !1,
                  };
            },
            getAge: function (e) {
              var t = "";
              18 == (e + "").length &&
                (t =
                  e.substr(6, 4) +
                  "/" +
                  e.substr(10, 2) +
                  "/" +
                  e.substr(12, 2));
              var n = new Date(t),
                i = new Date(),
                a = i.getFullYear() - n.getFullYear();
              return (
                (i.getMonth() < n.getMonth() ||
                  (i.getMonth() == n.getMonth() &&
                    i.getDate() < n.getDate())) &&
                  a--,
                a
              );
            },
            isValidName: function (e) {
              return e.name
                ? this.isValidName_Bus(e.name)
                : this.isValidName_Bus(e.ENFirstName) &&
                    this.isValidName_Bus(e.ENLastName);
            },
            isValidName_Bus: function (e) {
              var t = e;
              if (!t) return !1;
              return (
                (t = (t = t.replace(/^\s+/g, "")).replace(/\s+$/g, "")),
                !!/((^[\u4E00-\u9FA5]{1,14}([a-zA-Z]{0,26})$)|(^[a-zA-Z]+[\s\.]?([a-zA-Z]+[\s\.]?){0,4}[a-zA-Z]$))/.test(
                  t
                )
              );
            },
            convertObjToUrl: function (e) {
              var t = [],
                n = function (n) {
                  var i = e[n];
                  (null == i ? void 0 : i.constructor) == Array
                    ? i.forEach(function (e) {
                        t.push(n + "=" + e);
                      })
                    : t.push(n + "=" + i);
                };
              for (var i in e) n(i);
              return t.join("&");
            },
            transferPassengerInfo: function (e) {
              var t = this,
                n = [];
              return (
                null != e &&
                  e.length &&
                  (n = e.map(function (e) {
                    return {
                      InfoID: 0,
                      PassengerID: e.passengerID,
                      ENLastName: e.passengerENLastName || "",
                      PassengerType: t.transfterPassengerType(e.passengerType),
                      CNName: e.passengerName || "",
                      Gender: e.gender || "",
                      ENMiddleName: e.middleName || "",
                      Birthday: e.passengerBirth || "",
                      CommonPassengerCard: [
                        {
                          InfoID: "",
                          cipherIdCardNo: "",
                          CardTimelimit: e.cardTimeLimit || "",
                          PicPath: "",
                          PassportType: "",
                          CardNo: e.passportCode || "",
                          MaskCardNo: e.maskPassportCode || "",
                          IssueAt: "",
                          HasPic: "",
                          CardType: t.transferCardType(e.passportType) || "",
                          IsOverdue: "0",
                        },
                      ],
                      MobilePhoneForeign: e.mobile || "",
                      MobilePhone: e.mobile || "",
                      Nationality: e.nationality || "",
                      ENFirstName: e.passengerENFirstName || "",
                      isStudent: e.isStudent || !1,
                    };
                  })),
                n
              );
            },
            transfterPassengerType: function (e) {
              var t = "A";
              switch (e) {
                case "携童票":
                case "婴儿票":
                  t = "X";
                  break;
                case "儿童票":
                  t = "C";
                  break;
                case "成人票":
                  t = "A";
              }
              return t;
            },
            transferCardType: function (e) {
              var t = "1";
              switch (e) {
                case "身份证":
                  t = "1";
                  break;
                case "护照":
                  t = "2";
                  break;
                case "回乡证":
                  t = "7";
                  break;
                case "台胞证":
                  t = "8";
              }
              return t;
            },
            transferInsuranceTags: function (e) {
              var t = [];
              return (
                null != e &&
                  e.length &&
                  e.map(function (e) {
                    var n, i, a;
                    -1 !=
                      (null == e || null === (n = e.value) || void 0 === n
                        ? void 0
                        : n.indexOf("%%")) &&
                      t.push({
                        productInfoDesc:
                          null == e || null === (i = e.value) || void 0 === i
                            ? void 0
                            : i.split("%%")[0],
                        productDiscountDesc:
                          null == e || null === (a = e.value) || void 0 === a
                            ? void 0
                            : a.split("%%")[1],
                      });
                  }),
                t
              );
            },
            getXProductParams: function (e, t) {
              var n =
                3 == (null == t ? void 0 : t.productLine) ? "point" : "bus";
              return (0, i.Z)(
                {
                  fromCity: e.fromCity,
                  toCity: e.toCity,
                  fromStation: e.fromStation,
                  toStation: e.toStation,
                  fromDate: e.fromDate,
                  busNumber: e.busNumber,
                  symbol: e.symbol,
                  basicParams: { bigChannel: n },
                  basicBusParams: JSON.stringify(
                    (0, i.Z)(
                      (0, i.Z)({}, s.kT),
                      {},
                      { bigChannel: n, bigClientType: "wechat_xcx" }
                    )
                  ),
                },
                t
              );
            },
          };
        t.Z = d;
      },
      43005: function (e, t, n) {
        n.d(t, {
          AX: function () {
            return R;
          },
          BA: function () {
            return S;
          },
          CC: function () {
            return c;
          },
          D: function () {
            return f;
          },
          EQ: function () {
            return L;
          },
          Ed: function () {
            return j;
          },
          FH: function () {
            return A;
          },
          FQ: function () {
            return X;
          },
          GA: function () {
            return H;
          },
          HX: function () {
            return u;
          },
          IX: function () {
            return $;
          },
          Is: function () {
            return E;
          },
          JV: function () {
            return te;
          },
          Ml: function () {
            return D;
          },
          N2: function () {
            return m;
          },
          O9: function () {
            return K;
          },
          OB: function () {
            return B;
          },
          Qc: function () {
            return q;
          },
          Rc: function () {
            return _;
          },
          Rk: function () {
            return p;
          },
          Ro: function () {
            return O;
          },
          T8: function () {
            return P;
          },
          V0: function () {
            return U;
          },
          VP: function () {
            return M;
          },
          Vs: function () {
            return r;
          },
          Wb: function () {
            return W;
          },
          YK: function () {
            return l;
          },
          _7: function () {
            return J;
          },
          _S: function () {
            return y;
          },
          _U: function () {
            return C;
          },
          f8: function () {
            return v;
          },
          gX: function () {
            return T;
          },
          gj: function () {
            return g;
          },
          hD: function () {
            return z;
          },
          jY: function () {
            return Y;
          },
          jw: function () {
            return h;
          },
          kb: function () {
            return V;
          },
          kz: function () {
            return w;
          },
          lw: function () {
            return ee;
          },
          nI: function () {
            return b;
          },
          ov: function () {
            return x;
          },
          pN: function () {
            return o;
          },
          pi: function () {
            return k;
          },
          qP: function () {
            return G;
          },
          rg: function () {
            return I;
          },
          tN: function () {
            return N;
          },
          vW: function () {
            return ne;
          },
          vl: function () {
            return F;
          },
          vz: function () {
            return s;
          },
          yG: function () {
            return Z;
          },
          ym: function () {
            return Q;
          },
          ys: function () {
            return d;
          },
        });
        var i = n(79792),
          a = n(17377),
          c = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "fromCityList",
            bu: "bus",
          }),
          o = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "toCityList",
            bu: "bus",
          }),
          s = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getCityList",
            bu: "bus",
          }),
          r = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getToCityList",
            bu: "bus",
          }),
          l = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "keywordSearch",
            bu: "bus",
          }),
          u = (0, a.ZP)({
            serviceCode: "13025",
            channel: i.default.train_channel,
            path: "LocationCityList",
            bu: "bus",
          }),
          d = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getListBanner",
            bu: "bus",
          }),
          h = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getProductList",
            bu: "bus",
          }),
          m = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getPointBusProductList",
            bu: "bus",
          }),
          p = (0, a.ZP)({
            serviceCode: "20856",
            channel: i.default.train_channel,
            path: "getDiTuiWin",
            bu: "bus",
          }),
          f = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getXcxCouponWin",
            bu: "bus",
          }),
          g = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "receiveCoupon",
            bu: "bus",
          }),
          v = (0, a.ZP)({
            serviceCode: "20856",
            channel: i.default.train_channel,
            path: "oldCustomerIntercept",
            bu: "bus",
          }),
          w = (0, a.ZP)({
            serviceCode: "20856",
            channel: i.default.train_channel,
            path: "crossRecommend",
            bu: "bus",
          }),
          b = (0, a.ZP)({
            serviceCode: "21712",
            channel: i.default.train_channel,
            path: "redPacketV2ActivityWin",
            bu: "bus",
          }),
          x = (0, a.ZP)({
            serviceCode: "20856",
            channel: i.default.train_channel,
            path: "getRedPacketBrief",
            bu: "bus",
          }),
          Z = (0, a.ZP)({
            serviceCode: "21712",
            channel: i.default.train_channel,
            path: "redPacketV2ChoiceType",
            bu: "bus",
          }),
          N = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "purchaseOrder",
          }),
          C = (0, a.ZP)({
            serviceCode: "21712",
            channel: i.default.train_channel,
            path: "blindBoxOdEntry",
            bu: "bus",
          }),
          y = (0, a.ZP)({
            serviceCode: "17679",
            channel: i.default.train_channel,
            path: "getZtripWechatPartnerStatus",
          }),
          k = (0, a.ZP)({
            serviceCode: "20856",
            channel: i.default.train_channel,
            path: "jumpQW",
            bu: "bus",
          }),
          V = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getBusDetail",
            bu: "bus",
          }),
          S = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getBookNoticeV1",
            bu: "bus",
          }),
          B = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getXList",
            bu: "bus",
          }),
          T = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getXProductInfo",
            bu: "bus",
          }),
          I = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getCouponList",
            bu: "bus",
          }),
          P = (0, a.ZP)({
            serviceCode: "20856",
            channel: i.default.train_channel,
            path: "getXcxIndexCoupon",
            bu: "bus",
          }),
          _ = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getOrderDetail",
            bu: "bus",
            encryptFlag: 1,
          }),
          X = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "CreateBookingOrder",
            bu: "bus",
            encryptFlag: 1,
          }),
          D = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "weChatPayBack",
            bu: "bus",
          }),
          A = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "cancelOrder",
            bu: "bus",
          }),
          z = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "callOutTicket",
            bu: "bus",
          }),
          F = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getReturnTicketDetail",
            bu: "bus",
          }),
          M = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "applyReturnTicket",
            bu: "bus",
          }),
          R = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "getActiveDetail",
            bu: "bus",
          }),
          L = (0, a.ZP)({
            serviceCode: "20856",
            channel: i.default.train_channel,
            path: "receiveXcxIndexCoupon",
            bu: "bus",
          }),
          j = (0, a.ZP)({
            serviceCode: "20856",
            channel: i.default.train_channel,
            path: "getIndexCouponList",
            bu: "bus",
          }),
          O = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "receiveCouponByScene",
            bu: "bus",
          }),
          E = (0, a.ZP)({
            serviceCode: "19833",
            channel: i.default.train_channel,
            path: "bookingReturnConfig",
            bu: "bus",
          }),
          H = (0, a.ZP)({
            serviceCode: "21712",
            channel: i.default.train_channel,
            path: "getMarketActiveBanner",
            bu: "bus",
          }),
          U = (0, a.ZP)({
            serviceCode: "20856",
            channel: i.default.train_channel,
            path: "couponPackageWin",
            bu: "bus",
          }),
          W = (0, a.ZP)({
            serviceCode: "22538",
            channel: i.default.train_channel,
            path: "busDetail",
            bu: "bus",
          }),
          q = (0, a.ZP)({
            serviceCode: "22538",
            channel: i.default.train_channel,
            path: "placeOrder",
            bu: "bus",
          }),
          Y = (0, a.ZP)({
            serviceCode: "20856",
            channel: i.default.train_channel,
            path: "getXcxProductBanner",
            bu: "bus",
          }),
          J = (0, a.ZP)({
            serviceCode: "20856",
            channel: i.default.train_channel,
            path: "getXcxProductCouponDialog",
            bu: "bus",
          }),
          Q = (0, a.ZP)({
            serviceCode: "22538",
            channel: i.default.train_channel,
            path: "getCouponPackageDetail",
            bu: "bus",
          }),
          G = (0, a.ZP)({
            serviceCode: "22538",
            channel: i.default.train_channel,
            path: "applyReturnCoupon",
            bu: "bus",
          }),
          $ = (0, a.ZP)({
            serviceCode: "14374",
            channel: "",
            path: "getStudentInfo",
            bu: "bus",
          }),
          K = (0, a.ZP)({
            serviceCode: "21712",
            channel: "",
            path: "getTravelSendCouponInfo",
            bu: "bus",
          }),
          ee = (0, a.ZP)({
            serviceCode: "21712",
            channel: "",
            path: "receiveTravelAward",
            bu: "bus",
          }),
          te = (0, a.ZP)({
            serviceCode: "19833",
            channel: "",
            path: "getCommonPassenger",
            bu: "bus",
            encryptFlag: 1,
          }),
          ne = (0, a.ZP)({
            serviceCode: "19833",
            channel: "",
            path: "saveCommonPassenger",
            bu: "bus",
            encryptFlag: 1,
          });
      },
      65004: function (e, t, n) {
        var i = n(298),
          a = (n(92954), n(52500)),
          c = n(71515),
          o = n(79792),
          s = n(48813),
          r = {
            small: { fontSize: 12, height: 18 },
            large: { fontSize: 30, height: 72 },
          },
          l = function (e) {
            var t = e.style,
              n = t;
            if ("cycle" === e.shape) {
              var a = t.height,
                c = String(a).match(/\d/g).join("") / 2;
              n = (0, i.Z)((0, i.Z)({}, n), {}, { borderRadius: c });
            }
            for (var o in n)
              (n[o] =
                n[o] && !String(n[o]).endsWith("%")
                  ? "".concat(n[o], "px")
                  : n[o]),
                n[o] || delete n[o];
            return n;
          };
        t.Z = a.default.memo(function (e) {
          var t = e.btmText,
            n = e.btnText,
            a = e.size,
            u = void 0 === a ? "small" : a,
            d = e.onClick,
            h = void 0 === d ? function () {} : d,
            m = e.type,
            p = void 0 === m ? "normal" : m,
            f = e.shape,
            g = void 0 === f ? "normal" : f,
            v = e.width,
            w = void 0 === v ? "100%" : v,
            b = e.height,
            x = e.style,
            Z = void 0 === x ? {} : x,
            N = e.className,
            C = void 0 === N ? "" : N,
            y = e.disabled,
            k = o.default.isTieyou,
            V = r[u] || r.large,
            S = (0, i.Z)(
              (0, i.Z)({}, V),
              {},
              { width: w || Z.width, height: b || Z.height || V.height }
            );
          return (0, s.tZ)(c.Block, {
            children: (0, s.BX)(c.View, {
              className: "bus-btn  "
                .concat(k ? "ty" : "zx", " bus-btn-")
                .concat(p, " ")
                .concat(C, " ")
                .concat(y ? "btn-disabled" : ""),
              id: "AdAc",
              onClick: y ? function () {} : h,
              style: (0, i.Z)((0, i.Z)({}, l({ style: S, shape: g })), Z),
              children: [
                n,
                t && (0, s.tZ)(c.View, { className: "btmtext", children: t }),
              ],
            }),
          });
        });
      },
      63583: function (e, t, n) {
        var i = n(90129),
          a = n(52500),
          c = (n(92954), n(71515)),
          o = n(5830),
          s = n(48813);
        t.Z = a.default.memo(function (e) {
          var t = this,
            n = e.info,
            r = null,
            l = e.mode || "modeA",
            u = (0, a.useState)(n),
            d = (0, i.Z)(u, 2),
            h = d[0],
            m = d[1];
          return (
            (0, a.useEffect)(function () {
              !(function n(i) {
                var a = o.c.countDown(i),
                  c = a.hour,
                  s = a.min,
                  u = a.sec;
                if (a.end)
                  return (
                    clearTimeout(r), void (e && e.onChange && e.onChange(!1))
                  );
                "modeA" == l
                  ? m("".concat(s, "分").concat(u, "秒"))
                  : "modeB" == l &&
                    m("".concat(c, ":").concat(s, ":").concat(u)),
                  e && e.onReturnTime && e.onReturnTime(i),
                  (r = setTimeout(n.bind(t, i - 1), 1e3));
              })(n);
            }, []),
            (0, s.tZ)(c.Text, { className: "mod-count-down", children: h })
          );
        });
      },
      5994: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return h;
          },
        });
        var i = n(57042),
          a = n(24460),
          c = n(21867),
          o = n(86066),
          s = n(52500),
          r = n(92954),
          l = n.n(r),
          u = n(71515),
          d = n(48813),
          h = (function (e) {
            (0, c.Z)(n, e);
            var t = (0, o.Z)(n);
            function n(e) {
              return (0, i.Z)(this, n), t.call(this, e);
            }
            return (
              (0, a.Z)(n, [
                {
                  key: "onGoClick",
                  value: function () {
                    l().navigateTo({ url: "/pages/usercenter/kaquan/kaquan" });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props.supportClick;
                    return (0, d.BX)(u.View, {
                      className: "bus-dt-newguest-push-component",
                      children: [
                        (0, d.BX)(u.View, {
                          className: "title",
                          children: [
                            (0, d.BX)(u.View, {
                              className: "left",
                              children: [
                                (0, d.tZ)(u.Image, {
                                  src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/xhbtb@3x.png",
                                  mode: "aspectFit",
                                  className: "title-icon",
                                }),
                                (0, d.tZ)(u.Image, {
                                  src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/zxxrbt@3x.png",
                                  mode: "aspectFit",
                                  className: "title-title",
                                }),
                                (0, d.tZ)(u.View, {
                                  className: "price",
                                  children: "100",
                                }),
                                !e &&
                                  (0, d.tZ)(u.View, {
                                    className: "desc",
                                    children: "下单自动领取福利",
                                  }),
                              ],
                            }),
                            e &&
                              (0, d.BX)(u.View, {
                                className: "btn-go",
                                id: "AdAm",
                                onClick: this.onGoClick,
                                children: [
                                  (0, d.tZ)(u.Text, { children: "去查看" }),
                                  (0, d.tZ)(u.Image, {
                                    src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/ckgdan@3x.png",
                                    mode: "aspectFit",
                                    className: "go-icon",
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, d.tZ)(u.View, {
                          className: "content",
                          children: (0, d.tZ)(u.View, {
                            className: "card-content",
                            children: [
                              {
                                price: "40",
                                title: "火车加速价值",
                                imgurl:
                                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/hctb@3x.png",
                              },
                              {
                                price: "10",
                                title: "机票最高减",
                                imgurl:
                                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/fjtb@3x.png",
                              },
                              {
                                price: "50",
                                title: "酒店最高减",
                                imgurl:
                                  "https://pages.c-ctrip.com/bus-images/zhixing/icon/jdtb@3x.png",
                              },
                            ].map(function (e, t) {
                              return (0,
                              d.BX)(u.View, { className: "content-li", children: [(0, d.tZ)(u.Image, { src: e.imgurl, mode: "aspectFit", className: "content-li-icon" }), (0, d.tZ)(u.View, { className: "content-li-price", children: e.price }), (0, d.tZ)(u.View, { className: "content-li-title", children: e.title })] }, t);
                            }),
                          }),
                        }),
                      ],
                    });
                  },
                },
              ]),
              n
            );
          })(s.default.PureComponent);
      },
      85029: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return g;
          },
        });
        var i = n(57042),
          a = n(24460),
          c = n(81876),
          o = n(21867),
          s = n(86066),
          r = n(45023),
          l = n(52500),
          u = n(92954),
          d = n.n(u),
          h = n(71515),
          m = n(49120),
          p = n(79792),
          f = n(48813),
          g = (function (e) {
            (0, o.Z)(n, e);
            var t = (0, s.Z)(n);
            function n(e) {
              var a;
              return (
                (0, i.Z)(this, n),
                (a = t.call(this, e)),
                (0, r.Z)((0, c.Z)(a), "onSelect", function (e) {
                  var t = a.state.currentIndex;
                  if (-1 != e || -1 != t) {
                    var n = a.props,
                      i = n.insurePackageList,
                      c = n.defaultInsuranceCode,
                      o = -1 == e ? i[t] : i[e];
                    a.props.onSelectInsurance(o);
                    var s =
                      null == i
                        ? void 0
                        : i.findIndex(function (e) {
                            return (null == e ? void 0 : e.activityId) === c;
                          });
                    a.setState({
                      currentIndex: e == t ? (s >= 0 ? s : -1) : e,
                      insuranceTips: e >= 0 ? i[e].note : a.props.insuranceTips,
                    }),
                      (a.insuranceStatus["insurance_".concat(e)] = !0);
                  }
                }),
                (a.state = {
                  insuranceTips: "",
                  currentIndex: -1,
                  insureCardHeight: 0,
                  noIconList: [],
                  isDisplayMultiInsurances: !1,
                  oneInsuranceIndex: -1,
                }),
                (a.insuranceStatus = {}),
                a
              );
            }
            return (
              (0, a.Z)(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    this.initData(this.props, !0),
                      setTimeout(function () {
                        e.getInsureCardHeight();
                      }, 500);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    this.props !== e && this.initData(e);
                  },
                },
                {
                  key: "initData",
                  value: function (e) {
                    var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = e.insurePackageList;
                    if ((null == n ? void 0 : n.length) > 0) {
                      var i = n.findIndex(function (e) {
                          return e.isActive;
                        }),
                        a = [];
                      n.forEach(function (e) {
                        var t;
                        (null == e ||
                        null === (t = e.insuranceDescList) ||
                        void 0 === t
                          ? void 0
                          : t.length) > a.length && (a = e.insuranceDescList);
                      }),
                        this.setState({
                          insuranceTips: i >= 0 ? n[i].note : e.insuranceTips,
                          currentIndex: i,
                          noIconList: a,
                          isDisplayMultiInsurances: e.defaultInsuranceCode
                            ? n.length > 2
                            : n.length > 1,
                          oneInsuranceIndex: n.findIndex(function (t) {
                            return t.activityId !== e.defaultInsuranceCode;
                          }),
                        }),
                        t && i > 0 && this.props.onSelectInsurance(n[i]);
                    }
                  },
                },
                {
                  key: "getInsureCardHeight",
                  value: function () {
                    var e = this,
                      t = d()
                        .createSelectorQuery()
                        .in((0, m.getCurrentPage)());
                    t.selectAll(".card").boundingClientRect(),
                      t.exec(function (t) {
                        if (t && t.length > 0) {
                          var n = 0;
                          t[0].forEach(function (e) {
                            e.height > n && (n = e.height);
                          }),
                            e.setState({ insureCardHeight: n });
                        }
                      });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      t = this,
                      n = this.state,
                      i = n.insuranceTips,
                      a = n.currentIndex,
                      c = n.insureCardHeight,
                      o = n.noIconList,
                      s = n.isDisplayMultiInsurances,
                      r = n.oneInsuranceIndex,
                      l = this.props,
                      u = l.insurePackageList,
                      d = l.defaultInsuranceCode,
                      m = r >= 0 ? u[r] : null;
                    return (0, f.BX)(h.View, {
                      id: "insurance_cont",
                      className: "book-insurance-detail",
                      children: [
                        (0, f.BX)(h.View, {
                          className: "header flex ".concat(
                            a >= 0 ? "select-insure" : ""
                          ),
                          children: [
                            (0, f.tZ)(h.Image, {
                              className: "h-img",
                              src:
                                a >= 0
                                  ? "https://pages.c-ctrip.com/bus-images/zhixing/icon/bxyxicon@3x.png"
                                  : "https://pages.c-ctrip.com/bus-images/zhixing/icon/bxwxicon@3x.png",
                            }),
                            d &&
                              (0, f.tZ)(h.Image, {
                                className: "tit-img",
                                src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/bzsj@3x.png",
                              }),
                            (0, f.tZ)(h.View, {
                              className: "h-tit ".concat(
                                a >= 0 ? "selected" : ""
                              ),
                              children:
                                a >= 0
                                  ? "".concat(
                                      d ? "·" : "",
                                      "已添加保障，出行无忧"
                                    )
                                  : "出行有保障，旅途更安心",
                            }),
                          ],
                        }),
                        (0, f.BX)(h.View, {
                          className: "content",
                          children: [
                            s &&
                              (0, f.BX)(h.ScrollView, {
                                className: "muti-insurance",
                                scrollX: !0,
                                children: [
                                  !d &&
                                    (0, f.tZ)(
                                      h.View,
                                      {
                                        className:
                                          "insurance-item no-insurance",
                                        children: (0, f.BX)(h.View, {
                                          id: "AdFv",
                                          className:
                                            "card flex-align-items-center flex-column ".concat(
                                              -1 == a ? "active" : ""
                                            ),
                                          style:
                                            c > 0
                                              ? "height: ".concat(c, "px;")
                                              : "",
                                          onClick: function () {
                                            return t.onSelect(-1);
                                          },
                                          children: [
                                            (0, f.BX)(h.View, {
                                              className:
                                                "top flex-align-items-center flex-column",
                                              children: [
                                                (0, f.tZ)(h.Image, {
                                                  className: "icon",
                                                  src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/wbzicon@3x.png",
                                                }),
                                                (0, f.tZ)(h.View, {
                                                  className: "tit",
                                                  children: "无保障",
                                                }),
                                                (0, f.tZ)(h.View, {
                                                  className: "grap mt-24",
                                                }),
                                              ],
                                            }),
                                            (0, f.BX)(h.View, {
                                              className:
                                                "bottom flex-align-items-center flex-column",
                                              children: [
                                                (0, f.tZ)(h.View, {
                                                  className: "desc-cont",
                                                  children: o.map(function (
                                                    e,
                                                    t
                                                  ) {
                                                    return (0, f.tZ)(
                                                      h.View,
                                                      {
                                                        className: "desc-item",
                                                        children: (0, f.tZ)(
                                                          h.Image,
                                                          {
                                                            className:
                                                              "no-icon",
                                                            src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/ccicon.png",
                                                          },
                                                          t
                                                        ),
                                                      },
                                                      t
                                                    );
                                                  }),
                                                }),
                                                (0, f.tZ)(h.View, {
                                                  className:
                                                    "radio flex-center ".concat(
                                                      -1 == a ? "seleted" : ""
                                                    ),
                                                  children:
                                                    -1 == a &&
                                                    (0, f.tZ)(h.View, {
                                                      className: "solid-circle",
                                                    }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      0
                                    ),
                                  u.map(function (e, n) {
                                    var i, s;
                                    return d != e.activityId
                                      ? (0, f.BX)(
                                          h.View,
                                          {
                                            className: "insurance-item ".concat(
                                              d &&
                                                3 ==
                                                  (null == u
                                                    ? void 0
                                                    : u.length)
                                                ? "w-322"
                                                : ""
                                            ),
                                            children: [
                                              (0, f.BX)(h.View, {
                                                id: "idx".concat(n + 1),
                                                className:
                                                  "card flex-align-items-center flex-column ".concat(
                                                    a == n ? "active" : ""
                                                  ),
                                                style:
                                                  c > 0
                                                    ? "height: ".concat(
                                                        c,
                                                        "px;"
                                                      )
                                                    : "",
                                                onClick: function () {
                                                  return t.onSelect(n);
                                                },
                                                children: [
                                                  (0, f.BX)(h.View, {
                                                    className:
                                                      "top flex-align-items-center flex-column",
                                                    children: [
                                                      (0, f.tZ)(h.Image, {
                                                        className: "icon",
                                                        src: e.insuranceIcon,
                                                        mode: "aspectFit",
                                                      }),
                                                      (0, f.tZ)(h.View, {
                                                        className: "tit",
                                                        children: e.title,
                                                      }),
                                                      (0, f.BX)(h.View, {
                                                        className: "price",
                                                        children: [
                                                          (0, f.BX)(h.Text, {
                                                            className:
                                                              "price-desc",
                                                            children: [
                                                              d ? "+" : "",
                                                              d
                                                                ? e.addInsurePrice
                                                                : e.insurePackagePrice,
                                                              "元/人",
                                                            ],
                                                          }),
                                                          !!e.descUrl &&
                                                            (0, f.tZ)(h.Text, {
                                                              className:
                                                                "ifont-detail iconfont",
                                                              id: "AdAv",
                                                              onClick:
                                                                function (n) {
                                                                  n.stopPropagation(),
                                                                    t.props.gotoInsurancePage(
                                                                      e
                                                                    );
                                                                },
                                                            }),
                                                        ],
                                                      }),
                                                      (0, f.tZ)(h.View, {
                                                        className: "grap mt-7",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, f.BX)(h.View, {
                                                    className:
                                                      "bottom flex-align-items-center flex-column",
                                                    children: [
                                                      (0, f.BX)(h.View, {
                                                        className: "desc-cont",
                                                        children: [
                                                          (null ===
                                                            (i =
                                                              e.insuranceDescList) ||
                                                          void 0 === i
                                                            ? void 0
                                                            : i.length) > 0 &&
                                                            e.insuranceDescList.map(
                                                              function (e, t) {
                                                                return (0,
                                                                f.tZ)(
                                                                  h.View,
                                                                  {
                                                                    className:
                                                                      "desc-item",
                                                                    children:
                                                                      (0, f.BX)(
                                                                        h.Text,
                                                                        {
                                                                          className:
                                                                            "txt",
                                                                          children:
                                                                            [
                                                                              e.productInfoDesc,
                                                                              (0,
                                                                              f.tZ)(
                                                                                h.Text,
                                                                                {
                                                                                  className:
                                                                                    "green-txt",
                                                                                  children:
                                                                                    e.productDiscountDesc,
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
                                                          !(
                                                            null !==
                                                              (s =
                                                                e.insuranceDescList) &&
                                                            void 0 !== s &&
                                                            s.length
                                                          ) &&
                                                            (0, f.tZ)(h.Block, {
                                                              children: o.map(
                                                                function (
                                                                  e,
                                                                  t
                                                                ) {
                                                                  return (0,
                                                                  f.tZ)(
                                                                    h.View,
                                                                    {
                                                                      className:
                                                                        "desc-item",
                                                                      children:
                                                                        (0,
                                                                        f.tZ)(
                                                                          h.Image,
                                                                          {
                                                                            className:
                                                                              "no-icon",
                                                                            src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/ccicon.png",
                                                                          },
                                                                          t
                                                                        ),
                                                                    },
                                                                    t
                                                                  );
                                                                }
                                                              ),
                                                            }),
                                                        ],
                                                      }),
                                                      (0, f.tZ)(h.View, {
                                                        className:
                                                          "radio flex-center ".concat(
                                                            a == n
                                                              ? "seleted"
                                                              : ""
                                                          ),
                                                        children:
                                                          a == n &&
                                                          (0, f.tZ)(h.View, {
                                                            className:
                                                              "solid-circle",
                                                          }),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              0 == n &&
                                                e.unClick &&
                                                a < 0 &&
                                                (0, f.tZ)(h.View, {
                                                  className: "blue-bg mark-txt",
                                                  children: e.unClick,
                                                }),
                                              0 == n &&
                                                !e.unClick &&
                                                e.beforeClick &&
                                                a < 0 &&
                                                1 === e.defaultClick &&
                                                !t.insuranceStatus[
                                                  "insurance_".concat(n)
                                                ] &&
                                                (0, f.tZ)(h.View, {
                                                  className: "blue-bg mark-txt",
                                                  children: e.beforeClick,
                                                }),
                                              0 != n &&
                                                e.beforeClick &&
                                                a < 0 &&
                                                1 === e.defaultClick &&
                                                !t.insuranceStatus[
                                                  "insurance_".concat(n)
                                                ] &&
                                                (0, f.tZ)(h.View, {
                                                  className: "blue-bg mark-txt",
                                                  children: e.beforeClick,
                                                }),
                                              e.afterClick &&
                                                a == n &&
                                                (0, f.tZ)(h.View, {
                                                  className:
                                                    "green-bg mark-txt",
                                                  children: e.afterClick,
                                                }),
                                            ],
                                          },
                                          n + 1
                                        )
                                      : (0, f.tZ)(h.Block, {});
                                  }),
                                ],
                              }),
                            !s &&
                              m &&
                              (0, f.BX)(h.View, {
                                className:
                                  "single-insurance flex-align-items-center ".concat(
                                    a == r ? "active" : ""
                                  ),
                                id: "AdAw",
                                onClick: function () {
                                  return t.onSelect(r);
                                },
                                children: [
                                  (0, f.BX)(h.View, {
                                    className: "left",
                                    children: [
                                      (0, f.BX)(h.View, {
                                        className:
                                          "tit-cont flex-align-items-center",
                                        children: [
                                          (0, f.tZ)(h.Image, {
                                            className: "icon",
                                            src: m.insuranceIcon,
                                            mode: "aspectFit",
                                          }),
                                          (0, f.tZ)(h.Text, {
                                            className: "tit",
                                            children: m.title,
                                          }),
                                          !!m.descUrl &&
                                            (0, f.tZ)(h.Text, {
                                              className:
                                                "ifont-detail iconfont",
                                              id: "AdAx",
                                              onClick: function (e) {
                                                e.stopPropagation(),
                                                  t.props.gotoInsurancePage(m);
                                              },
                                            }),
                                        ],
                                      }),
                                      (0, f.BX)(h.View, {
                                        className:
                                          "sub-tit flex-align-items-center",
                                        children: [
                                          (0, f.tZ)(h.Text, {
                                            className: "point",
                                          }),
                                          (null === (e = m.insuranceDescList) ||
                                          void 0 === e
                                            ? void 0
                                            : e.length) &&
                                            m.insuranceDescList.map(function (
                                              e,
                                              t
                                            ) {
                                              var n;
                                              return (0, f.BX)(
                                                h.Block,
                                                {
                                                  children: [
                                                    (0, f.BX)(h.Text, {
                                                      className: "txt",
                                                      children: [
                                                        e.productInfoDesc,
                                                        (0, f.tZ)(h.Text, {
                                                          className:
                                                            "green-txt",
                                                          children:
                                                            e.productDiscountDesc,
                                                        }),
                                                      ],
                                                    }),
                                                    t !=
                                                      (null ===
                                                        (n =
                                                          m.insuranceDescList) ||
                                                      void 0 === n
                                                        ? void 0
                                                        : n.length) -
                                                        1 &&
                                                      (0, f.tZ)(h.Text, {
                                                        className: "txt",
                                                        children: " + ",
                                                      }),
                                                  ],
                                                },
                                                t
                                              );
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, f.BX)(h.View, {
                                    className: "right flex-align-items-center",
                                    children: [
                                      (0, f.BX)(h.View, {
                                        className: "price",
                                        children: [
                                          d ? "+" : "",
                                          d
                                            ? m.addInsurePrice
                                            : m.insurePackagePrice,
                                          "元/人",
                                        ],
                                      }),
                                      a !== r &&
                                        (0, f.tZ)(h.Image, {
                                          className: "sel-img",
                                          src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon_btnwxz@3x.png",
                                        }),
                                      a === r &&
                                        "ty" != p.default.jetpack &&
                                        (0, f.tZ)(h.Image, {
                                          className: "sel-img",
                                          src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon_xzh@3x.png",
                                        }),
                                      a === r &&
                                        "ty" == p.default.jetpack &&
                                        (0, f.tZ)(h.Image, {
                                          className: "sel-img",
                                          src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon_xzhty@3x.png",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            (0, f.tZ)(h.Block, {
                              children:
                                i &&
                                (0, f.tZ)(h.View, {
                                  className: "insurance-tips",
                                  children: i,
                                }),
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                },
              ]),
              n
            );
          })(l.default.PureComponent);
      },
      86467: function (e, t, n) {
        var i = n(52500),
          a = n(71515),
          c = n(34229),
          o = n(79792),
          s = n(48813);
        t.Z = i.default.memo(function (e) {
          var t,
            n = e.isShow,
            i = void 0 !== n && n,
            r = e.insuranceInfo,
            l = void 0 === r ? {} : r,
            u = e.onCancel,
            d = void 0 === u ? function () {} : u,
            h = e.onConfirm,
            m = void 0 === h ? function () {} : h,
            p = e.gotoInsurancePage,
            f = void 0 === p ? function () {} : p,
            g =
              "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon_i".concat(
                o.default.isTieyou ? "ty" : "i",
                "@3x.png"
              ),
            v =
              "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon_qy".concat(
                o.default.isTieyou ? "ty" : "",
                "@3x.png"
              );
          return (0, s.tZ)(a.View, {
            className: "bb-insurance-modal",
            children: (0, s.BX)(c.ZtDrawer, {
              show: i,
              title: "您尚未添加出行保障",
              onClose: d,
              children: [
                (0, s.tZ)(a.Image, {
                  className: "img",
                  src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/t@3x.png",
                }),
                (0, s.tZ)(a.View, {
                  className: "desc",
                  children: "多一份保障·家人更安心",
                }),
                (0, s.BX)(a.View, {
                  className: "ins-info",
                  children: [
                    (0, s.tZ)(a.Text, {
                      className: "txt sug-txt",
                      children: "建议购买:",
                    }),
                    (0, s.BX)(a.Text, {
                      className: "txt name-price",
                      children: [
                        l.title,
                        " ",
                        "¥".concat(l.insurePackagePrice, "/份"),
                      ],
                    }),
                  ],
                }),
                (0, s.tZ)(a.View, {
                  className: "ins-desc flex",
                  children:
                    null == l ||
                    null === (t = l.insuranceDescList) ||
                    void 0 === t
                      ? void 0
                      : t.map(function (e, t) {
                          return (0,
                          s.BX)(a.View, { className: "item flex", children: [(0, s.tZ)(a.Image, { className: "it-icon", src: v }), (0, s.BX)(a.View, { className: "it-txt", children: [(0, s.tZ)(a.Text, { children: e.productInfoDesc }), (0, s.tZ)(a.Text, { className: "high-txt", children: e.productDiscountDesc })] })] }, t);
                        }),
                }),
                (0, s.BX)(a.View, {
                  className: "ins-tips",
                  children: [
                    (0, s.tZ)(a.Text, { className: "note", children: l.note }),
                    !!l.descUrl &&
                      (0, s.tZ)(a.Text, {
                        className: "note tips",
                        id: "AdAy",
                        onClick: function () {
                          return f(l);
                        },
                        children: " 投保须知",
                      }),
                    !!l.descUrl &&
                      (0, s.tZ)(a.Image, {
                        className: "tips-icon",
                        src: g,
                        id: "AdAz",
                        onClick: function () {
                          return f(l);
                        },
                      }),
                  ],
                }),
                (0, s.BX)(a.View, {
                  className: "btn-group flex-align-items-center",
                  children: [
                    (0, s.tZ)(a.View, {
                      className: "btn",
                      id: "AdBA",
                      onClick: d,
                      children: "否",
                    }),
                    (0, s.tZ)(a.View, {
                      className: "btn ok",
                      id: "AdBB",
                      onClick: m,
                      children: "是",
                    }),
                  ],
                }),
              ],
            }),
          });
        });
      },
      28676: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return Z;
          },
        });
        var i,
          a = n(22276),
          c = n(90129),
          o = n(52500),
          s = n(92954),
          r = n.n(s),
          l = n(71515),
          u = n(79792),
          d = n(49120),
          h = n(57042),
          m = n(24460),
          p = n(21867),
          f = n(86066),
          g = n(81957),
          v = n(48813),
          w =
            (0, g.h)(!0)(
              (i = (function (e) {
                (0, p.Z)(n, e);
                var t = (0, f.Z)(n);
                function n(e) {
                  return (0, h.Z)(this, n), t.call(this, e);
                }
                return (
                  (0, m.Z)(n, [
                    {
                      key: "renderText",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "",
                          t = String(e).split("|n|") || [];
                        return t.map(function (e, t) {
                          return (0, v.tZ)(l.View, { children: e }, t);
                        });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this,
                          t = this.props,
                          n = t.tdWidth,
                          i = t.columnInfo,
                          a = t.rowInfo;
                        return (0, v.tZ)(l.View, {
                          className: "bus-mini-table",
                          children: (0, v.BX)(l.View, {
                            className: "zx-table",
                            children: [
                              (0, v.tZ)(l.View, {
                                className: "tr thead s-class-header",
                                children:
                                  null == i
                                    ? void 0
                                    : i.map(function (t, i) {
                                        return (0,
                                        v.tZ)(l.View, { className: "td", style: { width: "".concat(n / 2, "px") }, children: e.renderText(t) }, i);
                                      }),
                              }),
                              (0, v.tZ)(l.View, {
                                children:
                                  null == a
                                    ? void 0
                                    : a.map(function (t, i) {
                                        return (0, v.tZ)(
                                          l.View,
                                          {
                                            className: "tr s-class-row",
                                            children:
                                              null == t
                                                ? void 0
                                                : t.map(function (t, i) {
                                                    return (0,
                                                    v.tZ)(l.View, { className: "td", style: { width: "".concat(n / 2, "px") }, children: e.renderText(t) }, i);
                                                  }),
                                          },
                                          i
                                        );
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
              })(o.default.Component))
            ) || i,
          b = 0,
          x = [];
        var Z = o.default.memo(function (e) {
          var t = e.visible,
            n = e.info || [],
            i = e.curtab || 0,
            s = u.default.isTieyou,
            h = e.isSpecialTicket;
          n.forEach(function (e, t) {
            var i = 0;
            if (0 != t) for (var a = 0; a < t; a++) i += n[a].bookNotes.length;
            e.bookNotes.forEach(function (e, t) {
              e.idx = t + i + 1;
            });
          });
          var m = (0, o.useState)(""),
            p = (0, c.Z)(m, 2),
            f = p[0],
            g = p[1],
            Z = (0, o.useState)(1),
            N = (0, c.Z)(Z, 2),
            C = N[0],
            y = N[1],
            k = n.length,
            V = n.reduce(function (e, t) {
              return e + t.bookNotes.length;
            }, 0),
            S = [1],
            B = Array(k).keys();
          (0, a.Z)(B).forEach(function (e) {
            n.forEach(function () {
              0 !== e && (S[e] = S[e - 1] + n[e - 1].bookNotes.length);
            });
          }),
            0 != i &&
              setTimeout(function () {
                g("section".concat(S[i - 1]));
              }, 300);
          var T,
            I = (function (e) {
              var t = [],
                n = [],
                i = [],
                a = [];
              e.forEach(function (e) {
                e.bookNotes.forEach(function (e) {
                  e.noticeContent.forEach(function (e) {
                    2 === (null == e ? void 0 : e.showType) && (i = e.content),
                      3 == (null == e ? void 0 : e.showType) && (a = e.content);
                  });
                });
              });
              var c;
              c =
                "[object String]" == Object.prototype.toString.call(i[0])
                  ? JSON.parse(i[0])
                  : i[0];
              var o = (i[0] && c[h ? "2" : "1"].ticketRefundDesc) || "";
              ((i[0] && c[h ? "2" : "1"].refundRuleModelList) || []).forEach(
                function (e, i) {
                  if (0 === i)
                    Object.keys(e).forEach(function (t) {
                      n.push(e[t]);
                    });
                  else {
                    var a = [];
                    Object.keys(e).forEach(function (t) {
                      var n = [];
                      n.push(e.timeDesc), n.push(e.ruleDesc), a.push(e[t]);
                    }),
                      t.push(a);
                  }
                }
              );
              var s;
              s =
                "[object String]" == Object.prototype.toString.call(a[0])
                  ? JSON.parse(a[0])
                  : a[0];
              var r = (a[0] && s) || {},
                l = [
                  {
                    id: 1,
                    latitude: r.baiduY,
                    longitude: r.baiduX,
                    iconPath:
                      "https://images3.c-ctrip.com/train/wechat/bus/buslogo.png",
                    width: 20,
                    height: 20,
                    callout: {
                      display: "ALWAYS",
                      content: r.stationName || r.name || "",
                      borderRadius: 18,
                      bgColor: "#FFFFFF",
                      padding: 5,
                      textAlign: "center",
                    },
                  },
                ];
              return {
                tableInfo: { rowInfo: t, columnInfo: n, ticketRefundDesc: o },
                mapInfo: { mapInfo: r, markers: l },
              };
            })(n),
            P = function () {
              var e = I.mapInfo.mapInfo,
                t = (function (e, t) {
                  if (null == e || "" == e || null == t || "" == t)
                    return { lng: e, lat: t };
                  var n = 3.141592653589793,
                    i = parseFloat(e) - 0.0065,
                    a = parseFloat(t) - 0.006,
                    c = Math.sqrt(i * i + a * a) - 2e-5 * Math.sin(a * n),
                    o = Math.atan2(a, i) - 3e-6 * Math.cos(i * n);
                  return {
                    lng: (c * Math.cos(o)).toFixed(7),
                    lat: (c * Math.sin(o)).toFixed(7),
                  };
                })(Number(e.baiduX), Number(e.baiduY)),
                n = t.lng,
                i = t.lat;
              r().openLocation({
                latitude: Number(i),
                longitude: Number(n),
                name: e.stationName || e.name || "",
                address: e.address || "",
              });
            };
          return (0, v.tZ)(l.View, {
            children:
              t &&
              (0, v.BX)(l.View, {
                className: "bus-mod-notice-modal ".concat(s ? "ty" : "zx"),
                children: [
                  (0, v.tZ)(l.View, {
                    className: "modal-mask ".concat(t ? "visible" : "hidden"),
                    id: "AdBK",
                    onClick: function () {
                      e && e.onClose();
                    },
                  }),
                  (0, v.BX)(l.View, {
                    id: "modal-wrapper",
                    className: "modal-wrapper ".concat(
                      t ? "visible" : "hidden"
                    ),
                    children: [
                      (0, v.tZ)(l.View, {
                        className: "tab ".concat(s ? "ty" : "zx"),
                        children: n.map(function (e, t) {
                          return (0, v.tZ)(
                            l.Text,
                            {
                              className: "item ".concat(
                                C == t + 1 ? "active" : ""
                              ),
                              "data-type": "tab".concat(t),
                              id: "AdBL",
                              onClick: function (e) {
                                e.stopPropagation(),
                                  (function (e) {
                                    var t = e.currentTarget.dataset.type;
                                    (0, a.Z)(Array(k).keys()).forEach(function (
                                      e
                                    ) {
                                      var n = "tab".concat(e);
                                      t === n &&
                                        (console.log("stage2--------\x3e"),
                                        y(e + 1),
                                        g("section".concat(S[e])));
                                    });
                                  })(e);
                              },
                              children: e.tag,
                            },
                            t
                          );
                        }),
                      }),
                      (0, v.tZ)(l.ScrollView, {
                        className: "content ".concat(s ? "ty" : "zx"),
                        scrollY: !0,
                        scrollWithAnimation: !0,
                        scrollIntoView: f,
                        onScroll: function (e) {
                          var t = e.detail.scrollTop,
                            n = new Date().getTime();
                          if (T) {
                            if (!(n - T < 200)) {
                              T = n;
                              var i = b;
                              if (i)
                                for (var c = 1; c < S.length; c++) {
                                  if (
                                    c === S.length - 1 &&
                                    t - 45 >= x[S[c] - 2]
                                  ) {
                                    y(c + 1);
                                    break;
                                  }
                                  if (
                                    t - 45 >= x[S[c] - 2] &&
                                    t - 45 < x[S[c + 1] - 2]
                                  ) {
                                    y(c + 1);
                                    break;
                                  }
                                  if (t - 45 < x[S[c] - 2]) {
                                    y(1);
                                    break;
                                  }
                                }
                              else {
                                var o = (0, a.Z)(Array(V).keys()).map(function (
                                  e
                                ) {
                                  return (function (e) {
                                    return new Promise(function (t, n) {
                                      var i = r()
                                        .createSelectorQuery()
                                        .in((0, d.getCurrentPage)());
                                      i
                                        .select("".concat(e))
                                        .boundingClientRect(),
                                        i.exec(function (e) {
                                          e[0] && e[0].height
                                            ? t(e[0].height)
                                            : n("获取高度失败");
                                        });
                                    });
                                  })("#section".concat(e + 1));
                                });
                                Promise.all(o).then(function (e) {
                                  for (var n = 0; n < e.length; n++) i += e[n];
                                  for (var a = e.length - 2; a >= 0; a--) {
                                    for (
                                      var c = 0, o = a;
                                      o < e.length - 1;
                                      o++
                                    )
                                      c += e[o + 1];
                                    x[a] = i - c;
                                  }
                                  x.push(i), (b = i);
                                  for (var s = 1; s < S.length; s++) {
                                    if (
                                      s === S.length - 1 &&
                                      t >= x[S[s] - 2]
                                    ) {
                                      y(s + 1);
                                      break;
                                    }
                                    if (
                                      t >= x[S[s] - 2] &&
                                      t < x[S[s + 1] - 2]
                                    ) {
                                      y(s + 1);
                                      break;
                                    }
                                    if (t < x[S[s] - 2]) {
                                      y(1);
                                      break;
                                    }
                                  }
                                });
                              }
                            }
                          } else T = n;
                        },
                        children: n.map(function (e, t) {
                          return (0, v.tZ)(
                            l.Block,
                            {
                              children: e.bookNotes.map(function (e) {
                                return (0, v.BX)(
                                  l.View,
                                  {
                                    id: "section".concat(e.idx),
                                    className: "order",
                                    children: [
                                      (0, v.tZ)(l.View, {
                                        className: "title",
                                        children: e.title,
                                      }),
                                      (0, v.tZ)(l.View, {
                                        className: "deta",
                                        children: e.noticeContent.map(function (
                                          e,
                                          t
                                        ) {
                                          if (e)
                                            return (0, v.BX)(
                                              l.View,
                                              {
                                                className: "item ".concat(
                                                  2 == e.showType ||
                                                    5 == e.showType
                                                    ? "noflex"
                                                    : ""
                                                ),
                                                children: [
                                                  e.title &&
                                                    (0, v.tZ)(l.View, {
                                                      className: "tit "
                                                        .concat(
                                                          3 == e.showType
                                                            ? "none"
                                                            : "",
                                                          " "
                                                        )
                                                        .concat(
                                                          5 == e.showType
                                                            ? "tit-block"
                                                            : "",
                                                          " "
                                                        ),
                                                      children: e.title,
                                                    }),
                                                  (0 == e.showType ||
                                                    1 == e.showType) &&
                                                    (0, v.tZ)(l.View, {
                                                      className: "con",
                                                      children: e.content,
                                                    }),
                                                  5 == e.showType &&
                                                    (0, v.tZ)(l.View, {
                                                      className:
                                                        "con flex-checked-con",
                                                      children: (
                                                        e.content || []
                                                      ).map(function (e, t) {
                                                        return (0,
                                                        v.BX)(l.View, { className: "checked-item", children: [(0, v.tZ)(l.View, { className: "ifont-gou iconfont" }), e] }, t);
                                                      }),
                                                    }),
                                                  4 == e.showType &&
                                                    (0, v.tZ)(l.Swiper, {
                                                      className: "img-con",
                                                      indicatorDots: !1,
                                                      autoplay: !0,
                                                      interval: "3000",
                                                      children: (
                                                        e.content || []
                                                      ).map(function (e, t) {
                                                        return (0,
                                                        v.tZ)(l.SwiperItem, { className: "img-item", children: (0, v.tZ)(l.View, { className: "car-img", style: "background: url(".concat(e, ") no-repeat;background-size:contain;background-position:center;height:100%;") }) }, t);
                                                      }),
                                                    }),
                                                  2 == e.showType &&
                                                    (0, v.BX)(l.Block, {
                                                      children: [
                                                        (0, v.tZ)(w, {
                                                          tdWidth: "300",
                                                          columnInfo:
                                                            I.tableInfo
                                                              .columnInfo,
                                                          rowInfo:
                                                            I.tableInfo.rowInfo,
                                                        }),
                                                        (0, v.tZ)(l.View, {
                                                          className: "lst",
                                                          children: String(
                                                            I.tableInfo
                                                              .ticketRefundDesc ||
                                                              ""
                                                          )
                                                            .split("|n|")
                                                            .map(function (
                                                              e,
                                                              t
                                                            ) {
                                                              return (0, v.tZ)(
                                                                l.View,
                                                                { children: e },
                                                                t
                                                              );
                                                            }),
                                                        }),
                                                      ],
                                                    }),
                                                  3 == e.showType &&
                                                    (0, v.tZ)(l.Map, {
                                                      className: "map",
                                                      longitude:
                                                        I.mapInfo.mapInfo
                                                          .baiduX,
                                                      latitude:
                                                        I.mapInfo.mapInfo
                                                          .baiduY,
                                                      scale: 18,
                                                      markers:
                                                        I.mapInfo.markers,
                                                      showLocation: !0,
                                                      enableScroll: !1,
                                                      enableZoom: !1,
                                                      enableRotate: !1,
                                                      onTap: P,
                                                    }),
                                                ],
                                              },
                                              t
                                            );
                                        }),
                                      }),
                                    ],
                                  },
                                  e.idx
                                );
                              }),
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          });
        });
      },
      75150: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return N;
          },
        });
        var i,
          a = n(79301),
          c = n(95308),
          o = n(57042),
          s = n(24460),
          r = n(21867),
          l = n(86066),
          u = n(52500),
          d = n(92954),
          h = n.n(d),
          m = n(13025);
        function p() {
          return f.apply(this, arguments);
        }
        function f() {
          return (f = (0, c.Z)(
            (0, a.Z)().mark(function e() {
              var t, n, c;
              return (0, a.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.prev = 0), !(i && Object.keys(i).length > 0))) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return", i);
                      case 3:
                        return (
                          (e.next = 5),
                          (0, m.SZ)({ keys: ["mini-fe-person_save"] })
                        );
                      case 5:
                        (c = e.sent),
                          (i =
                            (null == c ||
                            null === (t = c.configDataList) ||
                            void 0 === t ||
                            null ===
                              (n = t.find(function (e) {
                                return "mini-fe-person_save" === e.key;
                              })) ||
                            void 0 === n
                              ? void 0
                              : n.data) || i),
                          (e.next = 12);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(0)),
                          console.log("fetch qconfig error", e.t0);
                      case 12:
                        return e.abrupt("return", i || {});
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })
          )).apply(this, arguments);
        }
        var g,
          v = n(81957),
          w = n(58676),
          b = n(49120),
          x = n(71515),
          Z = n(48813),
          N =
            (0, v.h)(!0)(
              (g = (function (e) {
                (0, r.Z)(n, e);
                var t = (0, l.Z)(n);
                function n(e) {
                  var i;
                  return (
                    (0, o.Z)(this, n),
                    ((i = t.call(this, e)).state = {
                      personSaveConfig: null,
                      isAgreed: !1,
                    }),
                    i
                  );
                }
                return (
                  (0, s.Z)(n, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        this.getConfig();
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function (e, t) {
                        var n = !(
                            e.isHideSingleModule ||
                            !e.isShow ||
                            !t.personSaveConfig
                          ),
                          i = !(
                            this.props.isHideSingleModule ||
                            !this.props.isShow ||
                            !this.state.personSaveConfig
                          );
                        n !== i &&
                          i &&
                          this.doTrace(
                            {
                              typeSnd: "list_childrenclause_check_show",
                              comment: "填写页-儿童协议曝光",
                            },
                            0
                          );
                      },
                    },
                    {
                      key: "getConfig",
                      value: (function () {
                        var e = (0, c.Z)(
                          (0, a.Z)().mark(function e() {
                            var t;
                            return (0, a.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), p();
                                    case 2:
                                      (t = e.sent),
                                        this.setState({
                                          personSaveConfig: t.child,
                                        });
                                    case 4:
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
                      key: "onCheckChange",
                      value: function () {
                        this.setState({ isAgreed: !this.state.isAgreed }),
                          !this.state.isAgreed &&
                            this.doTrace({
                              typeSnd: "list_childrenclause_check_click",
                              comment: "填写页-儿童协议点击",
                            });
                      },
                    },
                    {
                      key: "checkProtocolIsAgreed",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, n) {
                          e.props.isShow && e.state.personSaveConfig
                            ? e.state.isAgreed
                              ? t()
                              : (e.handleTip(), n())
                            : t();
                        });
                      },
                    },
                    {
                      key: "handleConfirmModalTip",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, n) {
                          e.props.isShow && e.state.personSaveConfig
                            ? (e.showMultiButtonDialog({
                                title: e.state.personSaveConfig.checkTitle,
                                content: e.state.personSaveConfig.checkText,
                                leftButtonName: "暂缓",
                                rightButtonName: "确定添加",
                                maskClose: !1,
                                onLeftButtonClick: function () {
                                  e.state.personSaveConfig.cancelText &&
                                    (0, b.showToast)(
                                      e.state.personSaveConfig.cancelText
                                    ),
                                    n();
                                },
                                onRightButtonClick: function () {
                                  e.doTrace({
                                    typeSnd:
                                      "addpassenger_childrenclause_button_click",
                                    comment: "新增乘客页-儿童协议点击",
                                  }),
                                    t();
                                },
                              }),
                              e.doTrace(
                                {
                                  typeSnd:
                                    "addpassenger_childrenclause_button_show",
                                  comment: "新增乘客页-儿童协议曝光",
                                },
                                0
                              ))
                            : t();
                        });
                      },
                    },
                    {
                      key: "handleTip",
                      value: function () {
                        (0, b.showToast)("请阅读并同意儿童条款~"),
                          h().pageScrollTo({
                            selector: ".mod-passenger-pannel .pannel",
                          });
                      },
                    },
                    {
                      key: "doTrace",
                      value: function () {
                        for (
                          var e,
                            t,
                            n = arguments.length,
                            i = new Array(n),
                            a = 0;
                          a < n;
                          a++
                        )
                          i[a] = arguments[a];
                        null === (e = (t = this.props).doBusTraceInfo) ||
                          void 0 === e ||
                          e.call.apply(e, [t].concat(i));
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this,
                          t = this.props,
                          n = t.isShow,
                          i = t.isHideSingleModule,
                          a = this.state,
                          c = a.personSaveConfig,
                          o = a.isAgreed;
                        return c && n
                          ? (0, Z.BX)(x.Block, {
                              children: [
                                i
                                  ? null
                                  : (0, Z.BX)(x.View, {
                                      className: "bus-personSave-protocol",
                                      children: [
                                        (0, Z.tZ)(x.View, {
                                          className: "protocol-text",
                                          children: c.protocolText,
                                        }),
                                        (0, Z.BX)(x.View, {
                                          className: "radio-view",
                                          id: "AdBM",
                                          onClick:
                                            this.onCheckChange.bind(this),
                                          children: [
                                            (function (e) {
                                              return (0, Z.tZ)(x.View, {
                                                className:
                                                  "ps_radio  iconfont ".concat(
                                                    e.isChecked
                                                      ? "ifont-radioed checked"
                                                      : "ifont-radio"
                                                  ),
                                              });
                                            })({ isChecked: o }),
                                            c.protocolAgreeText,
                                          ],
                                        }),
                                      ],
                                    }),
                                (0, Z.tZ)(w.Z, {
                                  ref: function (t) {
                                    e.onDialogAttach(t);
                                  },
                                }),
                              ],
                            })
                          : null;
                      },
                    },
                  ]),
                  n
                );
              })(u.default.PureComponent))
            ) || g;
      },
      29172: function (e, t, n) {
        var i = n(298),
          a = (n(92954), n(71515)),
          c = n(79792),
          o = n(52500),
          s = n(48813);
        t.Z = o.default.memo(function (e) {
          var t = e.checked,
            n = e.onClick,
            o = void 0 === n ? function () {} : n,
            r = e.value,
            l = e.size,
            u = void 0 === l ? 20 : l,
            d = e.style,
            h = void 0 === d ? {} : d,
            m = e.className,
            p = void 0 === m ? "" : m,
            f = c.default.isTieyou;
          return (0, s.tZ)(a.Block, {
            children: (0, s.tZ)(a.View, {
              className: ""
                .concat(
                  t ? "ifont-radioed" : "ifont-radio",
                  " iconfont bus-radio-comp "
                )
                .concat(f ? "ty" : "zx", " ")
                .concat(p),
              style: (0, i.Z)({ fontSize: "".concat(u, "px") }, h),
              id: "AdBN",
              onClick: o.bind(this, r),
            }),
          });
        });
      },
      27570: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return x;
          },
        });
        var i = n(90129),
          a = n(79301),
          c = n(95308),
          o = n(57042),
          s = n(24460),
          r = n(81876),
          l = n(21867),
          u = n(86066),
          d = n(45023),
          h = n(71515),
          m = n(52500),
          p = n(92954),
          f = n.n(p),
          g = n(25949),
          v = n.n(g),
          w = n(48813),
          b = { x: "left", y: "center" },
          x = (function (e) {
            (0, l.Z)(n, e);
            var t = (0, u.Z)(n);
            function n(e) {
              var i;
              return (
                (0, o.Z)(this, n),
                (i = t.call(this, e)),
                (0, d.Z)((0, r.Z)(i), "rootDomId", "scale-root"),
                (0, d.Z)((0, r.Z)(i), "scaleDomId", "scale-content"),
                (i.state = { scaleRate: 1, isScaling: !1 }),
                i
              );
            }
            return (
              (0, s.Z)(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.doScale();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    JSON.stringify(e) !== JSON.stringify(this.props) &&
                      (console.log("update scale..."), this.doScale());
                  },
                },
                {
                  key: "doScale",
                  value: function () {
                    var e = this;
                    this.props.onScaling && this.props.onScaling(),
                      this.setState({ scaleRate: 1, isScaling: !0 }),
                      f().nextTick(
                        (0, c.Z)(
                          (0, a.Z)().mark(function t() {
                            var n, i, c, o, s, r;
                            return (0, a.Z)().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), e.doSizeDiffSync();
                                  case 2:
                                    (c = t.sent),
                                      (o = c.scaleRate),
                                      (s = c.rSize),
                                      (r = c.vSize),
                                      e.setState({
                                        scaleRate: o,
                                        isScaling: !1,
                                      }),
                                      null ===
                                        (n = (i = e.props).onScaleFinish) ||
                                        void 0 === n ||
                                        n.call(i, { rSize: s, vSize: r });
                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        )
                      );
                  },
                },
                {
                  key: "doSizeDiffSync",
                  value: (function () {
                    var e = (0, c.Z)(
                      (0, a.Z)().mark(function e() {
                        var t = this;
                        return (0, a.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  new Promise(function (e) {
                                    f().nextTick(
                                      (0, c.Z)(
                                        (0, a.Z)().mark(function n() {
                                          var i;
                                          return (0, a.Z)().wrap(function (n) {
                                            for (;;)
                                              switch ((n.prev = n.next)) {
                                                case 0:
                                                  return (
                                                    (n.next = 2), t.doSizeDiff()
                                                  );
                                                case 2:
                                                  (i = n.sent), e(i);
                                                case 4:
                                                case "end":
                                                  return n.stop();
                                              }
                                          }, n);
                                        })
                                      )
                                    );
                                  })
                                );
                              case 1:
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
                },
                {
                  key: "getScaleRate",
                  value: function (e, t) {
                    var n = e.vw,
                      i = e.vh,
                      a = t.rw,
                      c = t.rh,
                      o = 1;
                    return (
                      (n > a || i > c) && 0 !== a && 0 !== c
                        ? (o = a / c > n / i ? c / i : a / n)
                        : 0 !== a && 0 === c
                        ? (o = a / n)
                        : 0 === a && 0 !== c && (o = c / i),
                      Math.min(o, 1)
                    );
                  },
                },
                {
                  key: "doSizeDiff",
                  value: (function () {
                    var e = (0, c.Z)(
                      (0, a.Z)().mark(function e() {
                        var t, n, c, o, s, r, l, u, d;
                        return (0, a.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = {
                                      rSize: null,
                                      vSize: null,
                                      scaleRate: 1,
                                    }),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    Promise.all([
                                      this.getDomSizeByID(this.rootDomId),
                                      this.getDomSizeByID(this.scaleDomId, !0),
                                    ])
                                  );
                                case 4:
                                  return (
                                    (n = e.sent),
                                    (c = (0, i.Z)(n, 2)),
                                    (o = c[0]),
                                    (s = o.width),
                                    (r = o.height),
                                    (l = c[1]),
                                    (u = l.width),
                                    (d = l.height),
                                    (t.rSize = { w: s, h: r }),
                                    (t.vSize = { w: u, h: d }),
                                    (t.scaleRate = this.getScaleRate(
                                      { vw: u, vh: d },
                                      { rw: s, rh: r }
                                    )),
                                    e.abrupt("return", t)
                                  );
                                case 18:
                                  return (
                                    (e.prev = 18),
                                    (e.t0 = e.catch(1)),
                                    console.warn(e.t0),
                                    e.abrupt("return", t)
                                  );
                                case 22:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[1, 18]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "getDomSizeByID",
                  value: function (e) {
                    var t = this,
                      n =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                    return new Promise(function (i) {
                      var o = f().createSelectorQuery();
                      try {
                        o.select("#".concat(e))
                          .boundingClientRect()
                          .exec(
                            (function () {
                              var o = (0, c.Z)(
                                (0, a.Z)().mark(function c(o) {
                                  var s, r, l;
                                  return (0, a.Z)().wrap(function (a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          if (o && o[0]) {
                                            a.next = 6;
                                            break;
                                          }
                                          return (
                                            (a.next = 3), t.getDomSizeByID(e, n)
                                          );
                                        case 3:
                                          return (
                                            (s = a.sent),
                                            i(s),
                                            a.abrupt("return")
                                          );
                                        case 6:
                                          (r = n
                                            ? Math.ceil(o[0].width)
                                            : Math.floor(o[0].width)),
                                            (l = n
                                              ? Math.ceil(o[0].height)
                                              : Math.floor(o[0].height)),
                                            i({ width: r, height: l });
                                        case 9:
                                        case "end":
                                          return a.stop();
                                      }
                                  }, c);
                                })
                              );
                              return function (e) {
                                return o.apply(this, arguments);
                              };
                            })()
                          );
                      } catch (e) {
                        console.warn(e), i({ width: 0, height: 0 });
                      }
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.className,
                      n = void 0 === t ? "" : t,
                      i = e.scaleContentClassName,
                      a = void 0 === i ? "" : i,
                      c = e.useAnimation,
                      o = void 0 !== c && c,
                      s = e.ellipsisBeyondWidth,
                      r = void 0 === s ? 0 : s,
                      l = e.useEllipsisX,
                      u = void 0 !== l && l,
                      d = e.transformOrigin,
                      m = void 0 === d ? b : d,
                      p = this.state,
                      f = p.scaleRate,
                      g = p.isScaling,
                      x = v()({ "scale-content": !0, hide: g, an: o }),
                      Z = v()({
                        "flex-l": "left" === m.x,
                        "flex-c": "center" === m.x,
                      }),
                      N = (0, w.tZ)(h.View, {
                        id: this.scaleDomId,
                        className: "".concat(x, " ").concat(a),
                        style: {
                          transform: "scale(".concat(f, ")"),
                          transformOrigin: "".concat(m.x, " ").concat(m.y),
                        },
                        children: u
                          ? (0, w.tZ)(h.View, {
                              style: { maxWidth: "".concat(r, "px") },
                              className: "ellipsis",
                              children: this.props.children,
                            })
                          : this.props.children,
                      });
                    return (0, w.tZ)(h.View, {
                      id: this.rootDomId,
                      className: "scale-view-public-component "
                        .concat(Z, " ")
                        .concat(n),
                      children: N,
                    });
                  },
                },
              ]),
              n
            );
          })(m.default.PureComponent);
      },
      1153: function (e, t, n) {
        var i = n(52500),
          a = (n(92954), n(71515)),
          c = n(48813);
        t.Z = i.default.memo(function (e) {
          var t = e.visible,
            n = e && e.option && e.option.wrapperOption,
            i = e && e.option && e.option.maskOption,
            o = (e && e.option && e.option.funcOption) || {};
          return (0, c.tZ)(a.View, {
            className: "bus-suite-modal",
            children:
              t &&
              (0, c.tZ)(a.View, {
                className: "mod-modal",
                children: (0, c.tZ)(a.View, {
                  className: "modal-mask ".concat(t ? "visible" : "hidden"),
                  style: i,
                  id: "AdBW",
                  onClick: o.isCloseByMask ? e && e.onClose : function () {},
                  children: (0, c.tZ)(a.View, {
                    id: "modal-wrapper",
                    style: n,
                    className: "modal-wrapper ".concat(
                      t ? "visible" : "hidden"
                    ),
                    onClick:
                      o && o.isCloseByAllArea
                        ? function (t) {
                            t.stopPropagation(), e.onClose();
                          }
                        : function (e) {
                            e.stopPropagation();
                          },
                    children: e.children,
                  }),
                }),
              }),
          });
        });
      },
      69878: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return g;
          },
        });
        var i = n(298),
          a = n(90129),
          c = n(57042),
          o = n(24460),
          s = n(21867),
          r = n(86066),
          l = n(92954),
          u = n.n(l),
          d = n(52500),
          h = n(71515),
          m = n(79792),
          p = n(48813);
        var f = d.default.memo(function (e) {
            var t = e.visible,
              n = e.showHead,
              i = void 0 === n || n,
              a = e.onCancel,
              c = void 0 === a ? function () {} : a,
              o = e.onConfirm,
              s = void 0 === o ? function () {} : o,
              r = e.shouldClickMaskVisible,
              l = void 0 === r || r,
              u = e.title,
              d = void 0 === u ? "" : u,
              f = e.contentStyle,
              g = void 0 === f ? {} : f,
              v = e.bodyStyle,
              w = void 0 === v ? {} : v,
              b = m.default.isTieyou;
            return t
              ? (0, p.BX)(h.View, {
                  className: "layer-component "
                    .concat(t ? "layer-com-show" : "layer-com-hide", " ")
                    .concat(b ? "ty" : "zx", " "),
                  children: [
                    (0, p.tZ)(h.View, {
                      className: "shadow",
                      id: "AdBC",
                      onClick: l ? c : function () {},
                      catchMove: !0,
                    }),
                    (0, p.BX)(h.View, {
                      className: "layer-content",
                      style: g,
                      catchMove: !0,
                      children: [
                        i &&
                          (0, p.BX)(h.View, {
                            className: "layer-head",
                            children: [
                              (0, p.tZ)(h.Text, {
                                className: "left",
                                id: "AdBD",
                                onClick: c,
                                children: "取消",
                              }),
                              (0, p.tZ)(h.View, {
                                className: "title",
                                children: d,
                              }),
                              (0, p.tZ)(h.Text, {
                                className: "right",
                                id: "AdBE",
                                onClick: s,
                                children: "确定",
                              }),
                            ],
                          }),
                        (0, p.tZ)(h.View, {
                          className: "layer-body",
                          style: w,
                          children: e.children,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, p.tZ)(h.View, {});
          }),
          g = (function (e) {
            (0, s.Z)(n, e);
            var t = (0, r.Z)(n);
            function n(e) {
              var i;
              return (
                (0, c.Z)(this, n),
                ((i = t.call(this, e)).state = { value: void 0 }),
                i
              );
            }
            return (
              (0, o.Z)(n, [
                {
                  key: "timeTransStr",
                  value: function (e) {
                    return e >= 10 ? "".concat(e) : "0".concat(e);
                  },
                },
                {
                  key: "getHours",
                  value: function () {
                    for (
                      var e = [],
                        t = this.props.hourStep,
                        n = void 0 === t ? 1 : t,
                        i = 0;
                      i < 24;
                      i += n
                    )
                      e.push(this.timeTransStr(i));
                    return e;
                  },
                },
                {
                  key: "getMins",
                  value: function () {
                    for (
                      var e = [],
                        t = this.props.minStep,
                        n = void 0 === t ? 1 : t,
                        i = 0;
                      i < 60;
                      i += 1 * n || 1
                    )
                      e.push(this.timeTransStr(i));
                    return e;
                  },
                },
                {
                  key: "validateValue",
                  value: function (e) {
                    var t,
                      n = this.props,
                      i = n.min,
                      a = void 0 === i ? "00:00" : i,
                      c = n.max,
                      o = void 0 === c ? "23:59" : c;
                    return (
                      Array.isArray(e)
                        ? (t = this.getTime(this.toStrFromValue(e)))
                        : "string" == typeof e && (t = this.getTime(e)),
                      t < this.getTime(a)
                        ? this.toValueFromStr(a)
                        : t > this.getTime(o)
                        ? this.toValueFromStr(o)
                        : Array.isArray(e)
                        ? e
                        : "string" == typeof e
                        ? this.toValueFromStr(e)
                        : this.toValueFromStr(a)
                    );
                  },
                },
                {
                  key: "toValueFromStr",
                  value: function (e) {
                    var t = String(e).split(":"),
                      n = (0, a.Z)(t, 2),
                      i = n[0],
                      c = void 0 === i ? "00" : i,
                      o = n[1],
                      s = void 0 === o ? "00" : o;
                    return [
                      -1 ===
                      this.getHours().findIndex(function (e) {
                        return e === c;
                      })
                        ? 0
                        : this.getHours().findIndex(function (e) {
                            return e === c;
                          }),
                      -1 ===
                      this.getMins().findIndex(function (e) {
                        return e === s;
                      })
                        ? 0
                        : this.getMins().findIndex(function (e) {
                            return e === s;
                          }),
                    ];
                  },
                },
                {
                  key: "toStrFromValue",
                  value: function (e) {
                    return ""
                      .concat(this.getHours()[e[0]], ":")
                      .concat(this.getMins()[e[1]]);
                  },
                },
                {
                  key: "onConfirmHandle",
                  value: function () {
                    var e =
                      this.state.value ||
                      this.toValueFromStr(this.props.defaultValue || "00:00");
                    this.getTime(this.toStrFromValue(e)) <
                      this.getTime(this.props.min || "00:00") &&
                      (e = this.toValueFromStr(this.props.min || "00:00")),
                      this.getTime(this.toStrFromValue(e)) >
                        this.getTime(this.props.max || "23:59") &&
                        (e = this.toValueFromStr(this.props.max || "23:59")),
                      this.props.onConfirm &&
                        this.props.onConfirm(this.toStrFromValue(e));
                  },
                },
                {
                  key: "getTime",
                  value: function (e) {
                    var t = e.split(":"),
                      n = (0, a.Z)(t, 2),
                      i = n[0],
                      c = void 0 === i ? 0 : i,
                      o = n[1];
                    return 60 * c + 1 * (void 0 === o ? 0 : o);
                  },
                },
                {
                  key: "onChange",
                  value: function (e) {
                    var t = this,
                      n = e.detail.value,
                      i = this.props,
                      a = i.min,
                      c = void 0 === a ? "00:00" : a,
                      o = i.max,
                      s = void 0 === o ? "23:59" : o,
                      r = this.toStrFromValue(n);
                    this.setState({ value: n }, function () {
                      return t.getTime(r) < t.getTime(c)
                        ? (t.setState({ value: t.toValueFromStr(c) }),
                          void u().showToast({
                            title: "不能早于 ".concat(c),
                            icon: "none",
                          }))
                        : t.getTime(r) > t.getTime(s)
                        ? (t.setState({ value: t.toValueFromStr(s) }),
                          void u().showToast({
                            title: "不能晚于 ".concat(s),
                            icon: "none",
                          }))
                        : void 0;
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props || {},
                      t = e.style,
                      n = void 0 === t ? {} : t,
                      a = e.indicatorStyle,
                      c = void 0 === a ? "" : a,
                      o = e.hourColumnStyle,
                      s = void 0 === o ? {} : o,
                      r = e.minColumnStyle,
                      l = void 0 === r ? {} : r,
                      u = e.visible,
                      d = void 0 !== u && u,
                      m = e.onCancel,
                      g = void 0 === m ? function () {} : m,
                      v = e.defaultValue,
                      w = e.title,
                      b = void 0 === w ? "选择时间" : w,
                      x = this.getHours(),
                      Z = this.getMins(),
                      N = {
                        textAlign: "center",
                        fontSize: "22px",
                        lineHeight: "34px",
                        width: "100%",
                        fontFamily: "PingFangSC-Regular",
                        color: "#3333333",
                      };
                    return (0, p.tZ)(f, {
                      visible: d,
                      onCancel: g,
                      onConfirm: this.onConfirmHandle.bind(this),
                      title: b,
                      bodyStyle: { padding: "20px 0" },
                      children: (0, p.BX)(h.PickerView, {
                        indicatorStyle: c,
                        style: (0, i.Z)({ height: "220px", width: "100%" }, n),
                        value: this.state.value || this.validateValue(v),
                        onChange: this.onChange.bind(this),
                        className: "time-piker-component",
                        children: [
                          (0, p.tZ)(h.PickerViewColumn, {
                            children: x.map(function (e, t) {
                              return (0,
                              p.tZ)(h.View, { className: "pk-column", style: (0, i.Z)((0, i.Z)({}, N), s), children: e }, t);
                            }),
                          }),
                          (0, p.tZ)(h.PickerViewColumn, {
                            children: Z.map(function (e, t) {
                              return (0,
                              p.tZ)(h.View, { className: "pk-column", style: (0, i.Z)((0, i.Z)({}, N), l), children: e }, t);
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
          })(d.default.Component);
      },
      72674: function (e, t, n) {
        var i = n(52500),
          a = n(71515),
          c = n(34229),
          o = n(79910),
          s = n(48813);
        t.Z = i.default.memo(function (e) {
          var t = e.activityData,
            n = void 0 === t ? {} : t,
            r = e.fromPage,
            l = void 0 === r ? "" : r,
            u = e.doReceiveCoupon,
            d = void 0 === u ? function () {} : u,
            h = e.doShowRuleDrawer,
            m = void 0 === h ? function () {} : h,
            p = e.doUbtTrace,
            f = void 0 === p ? function () {} : p;
          (0, i.useEffect)(function () {
            var e = {};
            switch (l) {
              case "booking":
                e = {
                  typeSnd: "book_mef_banner_show",
                  comment: "满额返活动模块曝光",
                };
                break;
              case "orderDetail":
                e =
                  null != n && n.activityCouponInfo
                    ? {
                        typeSnd: "orderdetail_twoorder_finish_show",
                        comment: "订单详情页完成两单后 曝光",
                      }
                    : {
                        typeSnd: "orderdetail_oneorder_finish_show",
                        comment: "订单详情页完成一单后 曝光",
                      };
            }
            f(e, 0);
          }, []);
          var g = [],
            v = n.orders[0];
          (v.status =
            v.orderState <= 0 && "booking" === l
              ? 2
              : v.travelState <= 0
              ? 3
              : 4),
            (v.bgUrl =
              "https://pages.c-ctrip.com/bus-images/zhixing/icon/".concat(
                2 === v.status ? "dbqwjs" : "hsdbqyjs",
                "@3x.png"
              )),
            (v.lockIcon =
              "https://pages.c-ctrip.com/bus-images/zhixing/icon/".concat(
                2 === v.status ? "wjsfs" : "yjshs",
                "@3x.png"
              )),
            g.push(v);
          var w = n.orders.length > 1 && n.orders[1];
          w.status =
            1 === v.orderState && w.orderState <= 0 && "booking" === l
              ? 2
              : w.orderState <= 0
              ? 1
              : w.travelState <= 0
              ? 3
              : 4;
          var b =
            w.status >= 3
              ? "dbqyjs"
              : "booking" === l && 1 === w.status
              ? "hsdbqwjs"
              : "fsdbqwjs";
          w.bgUrl = "https://pages.c-ctrip.com/bus-images/zhixing/icon/".concat(
            b,
            "@3x.png"
          );
          var x =
            w.status >= 3
              ? "yjshs"
              : "booking" === l && 1 === w.status
              ? "wjshs"
              : "wjsfs";
          return (
            (w.lockIcon =
              "https://pages.c-ctrip.com/bus-images/zhixing/icon/".concat(
                x,
                "@3x.png"
              )),
            g.push(w),
            (0, s.BX)(a.View, {
              className: "bus-travel-discount-activity",
              children: [
                (0, s.BX)(a.View, {
                  className: "header",
                  children: [
                    (0, s.BX)(a.View, {
                      className: "h-left",
                      children: [
                        (0, s.tZ)(a.Image, {
                          className: "title",
                          src: n.title,
                        }),
                        (0, s.tZ)(a.View, {
                          className: "sub-title",
                          children: (0, s.tZ)(c.ZtRichText, {
                            space: "nbsp",
                            nodes: o.Z.convertAppTextToHtmlStr(n.subTitle),
                          }),
                        }),
                      ],
                    }),
                    (0, s.BX)(a.View, {
                      className: "h-right",
                      id: "AdBc",
                      onClick: m,
                      children: [
                        (0, s.tZ)(a.Text, {
                          className: "rule",
                          children: "规则",
                        }),
                        (0, s.tZ)(a.Text, { className: "iconfont ifont-more" }),
                      ],
                    }),
                  ],
                }),
                !n.activityCouponInfo &&
                  (0, s.BX)(a.View, {
                    className: "content",
                    children: [
                      (0, s.tZ)(a.View, {
                        className: "order-state",
                        children: g.map(function (e, t) {
                          return (0,
                          s.BX)(a.View, { className: "item", style: "background: url('".concat(e.bgUrl, "');background-size: 100% 100%;"), children: [(0, s.BX)(a.View, { className: "ite-tit", children: [(0, s.tZ)(a.View, { className: "order-index", children: e.title }), (0, s.tZ)(a.View, { className: "coupon-desc", children: (0, s.tZ)(c.ZtRichText, { space: "nbsp", nodes: o.Z.convertAppTextToHtmlStr(e.couponDesc) }) })] }), (0, s.BX)(a.View, { className: "ite-sub-tit", children: [(0, s.tZ)(a.Image, { className: "lock-icon ".concat(3 === e.status || 4 === e.status ? "open-lock" : ""), src: e.lockIcon }), 1 === e.status && (0, s.tZ)(a.Text, { className: "normal-txt ".concat("orderDetail" === l ? "mark-txt" : ""), children: "待解锁" }), 2 === e.status && (0, s.tZ)(a.Text, { className: "normal-txt mark-txt", children: "即将解锁" }), 3 === e.status && (0, s.tZ)(a.Text, { className: "normal-txt", children: "已解锁（待出行）" }), 4 === e.status && (0, s.tZ)(a.Text, { className: "normal-txt", children: "已解锁" })] })] }, t);
                        }),
                      }),
                      (0, s.BX)(a.View, {
                        className: "progress-line",
                        children: [
                          (0, s.tZ)(a.View, { className: "normal-line" }),
                          (0, s.tZ)(a.View, {
                            className: "mark-line ".concat(
                              2 == w.status
                                ? "completing-second-order"
                                : v.status >= 3 && 1 == w.status
                                ? "completed-first-order"
                                : v.status >= 3 && w.status >= 3
                                ? "completed-secord-order"
                                : ""
                            ),
                          }),
                          v.status >= 3 &&
                            (0, s.tZ)(a.View, {
                              className: "solid-circle first",
                            }),
                          (v.status <= 2 || w.status >= 3) &&
                            (0, s.tZ)(a.View, {
                              className: "solid-circle second",
                            }),
                          w.status <= 2 &&
                            (0, s.tZ)(a.View, {
                              className: "hollow-circle ".concat(
                                v.status >= 3 ? "hc-secord-position" : ""
                              ),
                            }),
                        ],
                      }),
                      (0, s.tZ)(a.Image, {
                        className: "r-img",
                        src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/qfhdw@3x.png",
                      }),
                    ],
                  }),
                n.activityCouponInfo &&
                  (0, s.BX)(a.View, {
                    className: "coupon-info",
                    children: [
                      (0, s.BX)(a.View, {
                        className: "cp-left",
                        children: [
                          (0, s.BX)(a.View, {
                            className: "amount",
                            children: [
                              (0, s.tZ)(a.Text, {
                                className: "unit",
                                children: "¥",
                              }),
                              (0, s.tZ)(a.Text, {
                                className: "num",
                                children: n.activityCouponInfo.couponPrice,
                              }),
                            ],
                          }),
                          (0, s.BX)(a.View, {
                            className: "coupon-desc",
                            children: [
                              (0, s.tZ)(a.View, {
                                className: "cd-tit",
                                children: n.activityCouponInfo.couponTitle,
                              }),
                              (0, s.tZ)(a.View, {
                                className: "cd-sub-tit",
                                children: n.activityCouponInfo.couponSubTitle,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.tZ)(a.View, {
                        className: "btn",
                        id: "AdBd",
                        onClick: d,
                        children: "立即领取",
                      }),
                    ],
                  }),
              ],
            })
          );
        });
      },
      13622: function (e, t, n) {
        var i = n(52500),
          a = n(71515),
          c = n(34229),
          o = n(79910),
          s = n(48813),
          r = {
            borderRadius: "40rpx 40rpx 0 0",
            backgroundColor: "rgb(242, 242, 242)",
          };
        t.Z = i.default.memo(function (e) {
          var t,
            n,
            i,
            l = e.visible,
            u = void 0 !== l && l,
            d = e.fromPage,
            h = void 0 === d ? "" : d,
            m = e.activityData,
            p = void 0 === m ? null : m,
            f = e.onClose,
            g = void 0 === f ? function () {} : f;
          if (
            !p ||
            null == p ||
            null === (t = p.orders) ||
            void 0 === t ||
            !t.length
          )
            return (0, s.tZ)(a.View, {});
          var v = [],
            w = p.orders[0];
          (w.status =
            w.orderState <= 0 && "booking" === h
              ? 2
              : w.travelState <= 0
              ? 3
              : 4),
            (w.bgUrl =
              "https://pages.c-ctrip.com/bus-images/zhixing/icon/".concat(
                2 === w.status ? "dbqwjs" : "hsdbqyjs",
                "@3x.png"
              )),
            (w.lockIcon =
              "https://pages.c-ctrip.com/bus-images/zhixing/icon/".concat(
                2 === w.status ? "wjsfs" : "yjshs",
                "@3x.png"
              )),
            v.push(w);
          var b = p.orders.length > 1 && p.orders[1];
          b.status =
            1 === w.orderState && b.orderState <= 0 && "booking" === h
              ? 2
              : b.orderState <= 0
              ? 1
              : b.travelState <= 0
              ? 3
              : 4;
          var x =
            b.status >= 3
              ? "dbqyjs"
              : "booking" === h && 1 === b.status
              ? "hsdbqwjs"
              : "fsdbqwjs";
          b.bgUrl = "https://pages.c-ctrip.com/bus-images/zhixing/icon/".concat(
            x,
            "@3x.png"
          );
          var Z =
            b.status >= 3
              ? "yjshs"
              : "booking" === h && 1 === b.status
              ? "wjshs"
              : "wjsfs";
          (b.lockIcon =
            "https://pages.c-ctrip.com/bus-images/zhixing/icon/".concat(
              Z,
              "@3x.png"
            )),
            v.push(b);
          var N = p.rule,
            C =
              (null === (n = p.cumulativeOrder) || void 0 === n
                ? void 0
                : n.length) > 0;
          return (0, s.tZ)(c.ZtDrawer, {
            show: u,
            onClose: g,
            onWrapClose: g,
            closeIconParams: { type: "cancel", size: "22px", color: "#979797" },
            drawerStyle: r,
            height: "518px",
            className: "bus-travel-discount-activity-drawer",
            children: (0, s.BX)(a.View, {
              className: "tda-container",
              children: [
                (0, s.BX)(a.View, {
                  className: "header",
                  children: [
                    (0, s.tZ)(a.Image, { className: "title", src: p.title }),
                    (0, s.tZ)(a.View, {
                      className: "sub-title",
                      children: (0, s.tZ)(c.ZtRichText, {
                        space: "nbsp",
                        nodes: o.Z.convertAppTextToHtmlStr(p.subTitle),
                      }),
                    }),
                  ],
                }),
                (0, s.BX)(a.View, {
                  className: "middle-cont",
                  children: [
                    (0, s.tZ)(a.View, {
                      className: "order-state-info ".concat(
                        C ? "ab-position" : ""
                      ),
                      children: (0, s.BX)(a.View, {
                        className: "order-bg",
                        children: [
                          (0, s.tZ)(a.View, {
                            className: "order-state",
                            children: v.map(function (e, t) {
                              return (0,
                              s.BX)(a.View, { className: "item", style: "background: url('".concat(e.bgUrl, "');background-size: 100% 100%;"), children: [(0, s.BX)(a.View, { className: "ite-tit", children: [(0, s.tZ)(a.View, { className: "order-index", children: e.title }), (0, s.tZ)(a.View, { className: "coupon-desc", children: (0, s.tZ)(c.ZtRichText, { space: "nbsp", nodes: o.Z.convertAppTextToHtmlStr(e.couponDesc) }) })] }), (0, s.BX)(a.View, { className: "ite-sub-tit", children: [(0, s.tZ)(a.Image, { className: "lock-icon ".concat(3 === e.status || 4 === e.status ? "open-lock" : ""), src: e.lockIcon }), 1 === e.status && (0, s.tZ)(a.Text, { className: "normal-txt ".concat("orderDetail" === h ? "mark-txt" : ""), children: "待解锁" }), 2 === e.status && (0, s.tZ)(a.Text, { className: "normal-txt mark-txt", children: "即将解锁" }), 3 === e.status && (0, s.tZ)(a.Text, { className: "normal-txt", children: "已解锁（待出行）" }), 4 === e.status && (0, s.tZ)(a.Text, { className: "normal-txt", children: "已解锁" })] })] }, t);
                            }),
                          }),
                          (0, s.BX)(a.View, {
                            className: "progress-line",
                            children: [
                              (0, s.tZ)(a.View, { className: "normal-line" }),
                              (0, s.tZ)(a.View, {
                                className: "mark-line ".concat(
                                  2 == b.status
                                    ? "completing-second-order"
                                    : w.status >= 3 && 1 == b.status
                                    ? "completed-first-order"
                                    : w.status >= 3 && b.status >= 3
                                    ? "completed-secord-order"
                                    : ""
                                ),
                              }),
                              w.status >= 3 &&
                                (0, s.tZ)(a.View, {
                                  className: "solid-circle first",
                                }),
                              (w.status <= 2 || b.status >= 3) &&
                                (0, s.tZ)(a.View, {
                                  className: "solid-circle second",
                                }),
                              b.status <= 2 &&
                                (0, s.tZ)(a.View, {
                                  className: "hollow-circle ".concat(
                                    w.status >= 3 ? "hc-secord-position" : ""
                                  ),
                                }),
                            ],
                          }),
                          (0, s.tZ)(a.Image, {
                            className: "r-img",
                            src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/qfhdw@3x.png",
                          }),
                        ],
                      }),
                    }),
                    C &&
                      (0, s.tZ)(a.View, {
                        className: "trip-order",
                        children: (0, s.BX)(a.View, {
                          className: "co-cont",
                          children: [
                            (0, s.tZ)(a.View, {
                              className: "co-left",
                              children: "参与订单",
                            }),
                            (0, s.tZ)(a.View, {
                              className: "co-right",
                              children: p.cumulativeOrder.map(function (e, t) {
                                return (0,
                                s.tZ)(a.View, { className: "co-item", children: e }, t);
                              }),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                N &&
                  (0, s.BX)(a.View, {
                    className: "rule-detail",
                    children: [
                      (0, s.tZ)(a.Text, {
                        className: "rd-title",
                        children: N.title,
                      }),
                      (0, s.tZ)(a.ScrollView, {
                        scrollY: !0,
                        className: "txt-scroll",
                        children:
                          null === (i = N.ruleDetails) || void 0 === i
                            ? void 0
                            : i.map(function (e, t) {
                                return (0,
                                s.tZ)(a.View, { className: "rd-txt", children: e }, t);
                              }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
      },
      5830: function (e, t, n) {
        n.d(t, {
          z: function () {
            return g;
          },
          c: function () {
            return i.Z;
          },
        });
        var i = n(90699),
          a = n(92954),
          c = n.n(a),
          o = n(79792),
          s = {
            mainColor: "mainColor",
            headerBgColor: "headerBgColor",
            titleColor: "titleColor",
            mainBackColor: "mainBackColor",
            borderColor: "borderColor",
            lightMainColor: "lightMainColor",
            lightBorder: "lightBorder",
            lightBakColor: "lightBakColor",
            veryLightBakColor: "veryLightBakColor",
            linearBackground: "linearBackground",
            sloganImage: "ctripSlogan",
          },
          r = {
            mainColor: "#19A0F0",
            headerBgColor: "#19A0F0",
            mainBackColor: "#19A0F0",
            titleColor: "#ffffff",
          },
          l = { classConfig: s, colorConfig: r },
          u = {
            classConfig: {
              mainColor: "zhixing-mainColor",
              headerBgColor: "zhixing-headerBgColor",
              titleColor: "zhixing-titleColor",
              mainBackColor: "zhixing-mainBackColor",
              borderColor: "zhixing-borderColor",
              lightMainColor: "zhixing-lightMainColor",
              lightBorder: "zhixing-lightBorder",
              lightBakColor: "zhixing-lightBakColor",
              veryLightBakColor: "zhixing-veryLightBakColor",
              linearBackground: "zhixing-linearBackground",
              sloganImage: "zhixing-Slogan",
            },
            colorConfig: {
              mainColor: "#0066E6",
              headerBgColor: "#0066E6",
              mainBackColor: "#0066E6",
            },
          },
          d = {
            main: l,
            wx0e6ed4f51db9d078: { classConfig: {}, colorConfig: {} },
            wx1746b19d13d9bbe7: l,
            wx45dff5234240ad90: {
              classConfig: {
                mainColor: "tieyou-mainColor",
                headerBgColor: "tieyou-headerBgColor",
                titleColor: "tieyou-titleColor",
                mainBackColor: "tieyou-mainBackColor",
                borderColor: "tieyou-borderColor",
                lightMainColor: "tieyou-lightMainColor",
                lightBorder: "tieyou-lightBorder",
                lightBakColor: "tieyou-lightBakColor",
                veryLightBakColor: "tieyou-veryLightBakColor",
                linearBackground: "tieyou-linearBackground",
                sloganImage: "tieyou-Slogan",
              },
              colorConfig: {
                mainColor: "#fc6e51",
                headerBgColor: "#fc6e51",
                mainBackColor: "#fc6e51",
              },
            },
            wx76dcd806f382ec8e: u,
            wx8d638099006a5a3b: u,
          };
        var h =
            o.default.isWechat && c().getExtConfigSync
              ? c().getExtConfigSync()
              : {},
          m = o.default.appId,
          p = o.default.appId,
          f = {
            wx0e6ed4f51db9d078: {
              app: "ctrip",
              big_channel: "ctripwx",
              smallchannel: "ctripwx",
              suffix: "--wx",
              big_client_type: "wechatxcx",
              client_version: "1.1.1",
              report_submit: !0,
              showBottomBar: !0,
              supportAuthInfo: !0,
              showSlogan: 1,
              showRecommend: 1,
              usingPayComponents: !1,
              appName: "携程",
            },
            2017081708237081: {
              app: "ctrip",
              big_channel: "ctripali",
              smallchannel: "ctripali",
              suffix: "--alipay",
              big_client_type: "alixcx",
              client_version: "1.1.0",
              report_submit: !1,
              showBottomBar: !0,
              showSlogan: 1,
              showRecommend: 1,
              usingPayComponents: !1,
              appName: "携程",
            },
            wx1746b19d13d9bbe7: {
              app: "bus",
              big_channel: "bus",
              smallchannel: "1",
              suffix: "--wx--bus",
              big_client_type: "wechatxcx",
              client_version: "1.1.0",
              report_submit: !0,
              showBottomBar: !1,
              supportAuthInfo: !1,
              showSlogan: 1,
              showRecommend: 1,
              usingPayComponents: !1,
              appName: "汽车票大管家",
            },
            wx45dff5234240ad90: {
              app: "tieyou",
              big_channel: "train",
              smallchannel: "ticket99_apple_ios",
              suffix: "--wx--tybus",
              big_client_type: "ty_xcx_wx",
              client_version: "1.1.0",
              report_submit: !0,
              showBottomBar: !1,
              supportAuthInfo: !1,
              showSlogan: 0,
              showRecommend: 0,
              usingPayComponents: !1,
              appName: "铁友",
            },
            wx8d638099006a5a3b: {
              app: "zhixing",
              big_channel: "train",
              smallchannel: "ZXI",
              suffix: "--wx--zxbus",
              big_client_type: "wechatxcx",
              client_version: "1.1.0",
              report_submit: !0,
              showBottomBar: !1,
              supportAuthInfo: !1,
              showSlogan: 0,
              showRecommend: 0,
              usingPayComponents: !1,
              appName: "智行",
            },
            wx76dcd806f382ec8e: {
              app: "zhixing",
              big_channel: "train",
              smallchannel: "ZXI",
              suffix: "--wx--zxbus",
              big_client_type: "zx_xcx_wx",
              client_version: "1.1.0",
              report_submit: !0,
              showBottomBar: !1,
              supportAuthInfo: !1,
              showSlogan: 0,
              showRecommend: 0,
              usingPayComponents: !1,
              appName: "智行",
            },
            wx16ee5d2bd483c4f4: {
              app: "zhixing",
              big_channel: "train",
              smallchannel: "ZXI",
              suffix: "--wx--dtbus",
              big_client_type: "dt_xcx_wx",
              client_version: "1.1.0",
              report_submit: !0,
              showBottomBar: !1,
              supportAuthInfo: !1,
              showSlogan: 0,
              showRecommend: 0,
              usingPayComponents: !1,
              appName: "智行",
            },
            wx68dc39fb85fe30a4: {
              app: "zhixing",
              big_channel: "train",
              smallchannel: "ZXI",
              suffix: "--wx--dtbus",
              big_client_type: "dt_xcx_wx",
              client_version: "1.1.0",
              report_submit: !0,
              showBottomBar: !1,
              supportAuthInfo: !1,
              showSlogan: 0,
              showRecommend: 0,
              usingPayComponents: !1,
              appName: "智行",
            },
          };
        var g = (function (e, t) {
          var n = (function (e) {
              var t = d[e] || { classConfig: {}, colorConfig: {} };
              return (
                (t.classConfig = Object.assign({}, s, t.classConfig)),
                (t.colorConfig = Object.assign({}, r, t.colorConfig)),
                t
              );
            })(t || e),
            i = Object.assign(f.wx0e6ed4f51db9d078, n, f[e] || {}),
            a = {};
          return h && h.busConfig && (a = h.busConfig), Object.assign({}, i, a);
        })(m, p);
      },
      33359: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return m;
          },
        });
        var i,
          a = n(57042),
          c = n(24460),
          o = n(21867),
          s = n(86066),
          r = n(52500),
          l = (n(92954), n(71515)),
          u = n(79792),
          d = n(81957),
          h = n(48813),
          m =
            (0, d.h)(!0)(
              (i = (function (e) {
                (0, o.Z)(n, e);
                var t = (0, s.Z)(n);
                function n(e) {
                  var i;
                  return (
                    (0, a.Z)(this, n),
                    ((i = t.call(this, e)).state = {
                      isTieyou: u.default.isTieyou,
                      isShow: !1,
                    }),
                    i
                  );
                }
                return (
                  (0, c.Z)(n, [
                    {
                      key: "UNSAFE_componentWillReceiveProps",
                      value: function (e) {
                        this.setState({ isShow: e.visible });
                      },
                    },
                    {
                      key: "onCloseModal",
                      value: function () {
                        var e = this.state.isShow;
                        this.props.onClose(!e);
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this.state,
                          t = e.isTieyou,
                          n = e.isShow;
                        return (0, h.tZ)(l.View, {
                          className: "bus-fee-modal",
                          children:
                            n &&
                            (0, h.tZ)(l.View, {
                              className: "mod-fee-modal ".concat(
                                t ? "ty" : "zx"
                              ),
                              children: (0, h.tZ)(l.View, {
                                className: "modal-mask ".concat(
                                  n ? "visible" : "hidden"
                                ),
                                id: "AdCi",
                                onClick: this.onCloseModal.bind(this),
                                children: (0, h.BX)(l.View, {
                                  className: "modal-wrapper ".concat(
                                    n ? "visible" : "hidden"
                                  ),
                                  children: [
                                    (0, h.tZ)(l.View, {
                                      className: "header",
                                      children: (0, h.tZ)(l.Text, {
                                        className: "title",
                                        children: "服务费说明",
                                      }),
                                    }),
                                    (0, h.BX)(l.View, {
                                      className: "main",
                                      children: [
                                        (0, h.BX)(l.View, {
                                          className: "item",
                                          children: [
                                            (0, h.tZ)(l.View, {
                                              className: "tit",
                                              children: "为什么要收取服务费？",
                                            }),
                                            (0, h.tZ)(l.View, {
                                              className: "cont",
                                              children:
                                                "服务费由供应商及平台共同收取，平台收取的费用主要包含在线预订所需要收取的出票短信费、网站技术接入、升级等基础成本费用",
                                            }),
                                          ],
                                        }),
                                        (0, h.BX)(l.View, {
                                          className: "item",
                                          children: [
                                            (0, h.tZ)(l.View, {
                                              className: "tit",
                                              children:
                                                "收取服务费能为您带来什么服务？",
                                            }),
                                            (0, h.BX)(l.View, {
                                              className: "cont",
                                              children: [
                                                (0, h.tZ)(l.View, {
                                                  children:
                                                    "无需排队，车站原价购票",
                                                }),
                                                (0, h.tZ)(l.View, {
                                                  children:
                                                    "官方合作渠道，快速出票有保障",
                                                }),
                                                (0, h.tZ)(l.View, {
                                                  children:
                                                    "7*24小时售票服务，售后无忧",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, h.tZ)(l.View, {
                                          className: "tip",
                                          children:
                                            "收取服务费能保证平台为您持续提供更全面更优质的在线服务，感谢您的理解！",
                                        }),
                                        (0, h.tZ)(l.View, {
                                          className: "btn",
                                          id: "AdCk",
                                          onClick: this.onCloseModal.bind(this),
                                          children: "继续购票",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                        });
                      },
                    },
                  ]),
                  n
                );
              })(r.default.Component))
            ) || i;
      },
      21433: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return p;
          },
        });
        var i,
          a = n(57042),
          c = n(24460),
          o = n(21867),
          s = n(86066),
          r = n(52500),
          l = (n(92954), n(71515)),
          u = n(79792),
          d = n(79910),
          h = n(81957),
          m = n(48813),
          p =
            (0, h.h)(!0)(
              (i = (function (e) {
                (0, o.Z)(n, e);
                var t = (0, s.Z)(n);
                function n(e) {
                  var i;
                  return (
                    (0, a.Z)(this, n),
                    ((i = t.call(this, e)).state = {
                      isTieyou: u.default.isTieyou,
                      isIPhoneX: d.Z.isIPhoneX(),
                      isFeeModalShow: !1,
                      adults: {},
                      childs: {},
                      takeChilds: {},
                      serviceChargeList: {},
                      memberReducts: {},
                      serviceAllowance: null,
                      specialTicketDiscount: null,
                      xCouponDiscount: null,
                      memberProductInfo: null,
                      ticketTotal: 0,
                      selectedSpecialCouponList: null,
                    }),
                    i
                  );
                }
                return (
                  (0, c.Z)(n, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        console.log(d.Z.isIPhoneX());
                      },
                    },
                    {
                      key: "UNSAFE_componentWillReceiveProps",
                      value: function (e) {
                        if (!this.props.visible && e.visible && e.info) {
                          var t = e.info,
                            n = t.adults,
                            i = void 0 === n ? {} : n,
                            a = t.childs,
                            c = t.takeChilds,
                            o = t.insurances,
                            s = t.serviceChargeList,
                            r = t.couponPrice,
                            l = t.discountInfo,
                            u = t.memberReducts,
                            d = t.isDiTuiSource,
                            h = t.xCoupons,
                            m = t.serviceAllowance,
                            p = t.specialTicketDiscount,
                            f = t.xCouponDiscount,
                            g = t.redPackageDiscount,
                            v = t.lotteryFreeOrder,
                            w = t.memberProductInfo,
                            b = t.ticketTotal,
                            x = t.selectedSpecialCouponList;
                          this.setState({
                            isShow: e.visible,
                            adults: i,
                            childs: a,
                            insurances: o,
                            takeChilds: c,
                            serviceChargeList: s,
                            couponPrice: r,
                            discountInfo: l,
                            memberReducts: u,
                            isDiTuiSource: d,
                            xCoupons: h,
                            serviceAllowance: m,
                            specialTicketDiscount: p,
                            xCouponDiscount: f,
                            redPackageDiscount: g,
                            lotteryFreeOrder: v,
                            memberProductInfo: w,
                            ticketTotal: b,
                            selectedSpecialCouponList: x,
                          });
                        } else this.setState({ isShow: e.visible });
                      },
                    },
                    {
                      key: "onClickMask",
                      value: function () {
                        this.props.onClose();
                      },
                    },
                    {
                      key: "onToggleFeeModal",
                      value: function () {
                        var e = this.state.isFeeModalShow;
                        this.setState({ isFeeModalShow: !e }),
                          this.props.onCloseFeeModal(e);
                      },
                    },
                    { key: "noop", value: function () {} },
                    {
                      key: "render",
                      value: function () {
                        var e = this.state,
                          t = e.isTieyou,
                          n = e.isShow,
                          i = e.adults,
                          a = e.childs,
                          c = e.takeChilds,
                          o = e.insurances,
                          s = e.serviceChargeList,
                          r = e.couponPrice,
                          u = e.discountInfo,
                          d = e.memberReducts,
                          h = e.isDiTuiSource,
                          p = e.xCoupons,
                          f = void 0 === p ? [] : p,
                          g = e.isIPhoneX,
                          v = e.serviceAllowance,
                          w = e.specialTicketDiscount,
                          b = e.xCouponDiscount,
                          x = e.redPackageDiscount,
                          Z = e.lotteryFreeOrder,
                          N = e.memberProductInfo,
                          C = e.ticketTotal,
                          y = e.selectedSpecialCouponList;
                        return (0, m.tZ)(l.View, {
                          className: "bus-price-detail-modal",
                          children:
                            n &&
                            (0, m.tZ)(l.View, {
                              className: "mod-price-detail-modal ".concat(
                                t ? "ty" : "zx"
                              ),
                              children: (0, m.tZ)(l.View, {
                                className: "modal-mask ".concat(
                                  n ? "visible" : "hidden"
                                ),
                                id: "AdDN",
                                onClick: this.onClickMask,
                                children: (0, m.tZ)(l.View, {
                                  className: "modal-wrapper "
                                    .concat(g ? "iphonex" : "", " ")
                                    .concat(n ? "visible" : "hidden", " ")
                                    .concat(h ? "btn-sec" : "", " "),
                                  stopPropagation: !0,
                                  id: "AdDO",
                                  onClick: this.noop,
                                  children: (0, m.BX)(l.View, {
                                    className: "detail",
                                    children: [
                                      (0, m.BX)(l.View, {
                                        className: "detail-desc",
                                        children: [
                                          i &&
                                            !!i.count &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children: i.name,
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: [
                                                    i.isShowOriginPrice &&
                                                      (0, m.BX)(l.Text, {
                                                        className:
                                                          "origin-price",
                                                        children: [
                                                          "¥ ",
                                                          i.originPrice,
                                                          " x ",
                                                          i.count,
                                                          " ",
                                                          i.unit,
                                                        ],
                                                      }),
                                                    "¥ ",
                                                    N ? 0 : i.price,
                                                    " x ",
                                                    i.count,
                                                    " ",
                                                    i.unit,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          a &&
                                            a.isActive &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children: a.name,
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: [
                                                    "¥ ",
                                                    N ? 0 : a.price,
                                                    " x ",
                                                    a.count,
                                                    " ",
                                                    a.unit,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          c &&
                                            c.isActive &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children: c.name,
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: [
                                                    "¥ ",
                                                    N ? 0 : c.price,
                                                    " x ",
                                                    c.count,
                                                    " ",
                                                    c.unit,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          N &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children: N.title,
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: [
                                                    "¥ ",
                                                    N.payPrice + C,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          s &&
                                            !!s.price &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children: s.title,
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: [
                                                    "¥ ",
                                                    s.price,
                                                    " x ",
                                                    s.count,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          o &&
                                            !!o.count &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children: o.name,
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: [
                                                    "¥ ",
                                                    o.price,
                                                    " x ",
                                                    o.count,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          u &&
                                            (0, m.tZ)(l.View, {
                                              className: "item",
                                              children: (0, m.tZ)(l.View, {
                                                className: "tit",
                                                style: "color:#FF5959;",
                                                children: u,
                                              }),
                                            }),
                                          d &&
                                            Object.keys(d).length > 0 &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children: d.name,
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: [
                                                    "-¥ ",
                                                    d.amount * d.count,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          f.map(function (e, t) {
                                            return (0,
                                            m.BX)(l.View, { className: "item", children: [(0, m.tZ)(l.View, { className: "tit", children: e.name }), (0, m.BX)(l.View, { className: "cont", children: ["¥ ", e.price, " x ", e.count] })] }, t);
                                          }),
                                          (null == Z ? void 0 : Z.count) > 0 &&
                                            (null == Z ? void 0 : Z.price) >
                                              0 &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children: Z.name,
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: [
                                                    "¥ ",
                                                    Z.price * Z.count,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          !!r &&
                                            0 !== r &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children: "优惠券",
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: ["-¥ ", r],
                                                }),
                                              ],
                                            }),
                                          b &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children:
                                                    b.productName ||
                                                    "购买券包本单优惠",
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: [
                                                    "-¥ ",
                                                    b.productCostPrice,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          w &&
                                            !!w.price &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children: w.title,
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: [
                                                    "-¥ ",
                                                    w.price,
                                                    " x ",
                                                    w.count,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          x &&
                                            !!x.price &&
                                            !!x.count &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children: x.title,
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: ["-¥ ", x.price],
                                                }),
                                              ],
                                            }),
                                          v &&
                                            !!v.price &&
                                            (0, m.BX)(l.View, {
                                              className: "item",
                                              children: [
                                                (0, m.tZ)(l.View, {
                                                  className: "tit",
                                                  children: v.title,
                                                }),
                                                (0, m.BX)(l.View, {
                                                  className: "cont",
                                                  children: [
                                                    "-¥ ",
                                                    v.price,
                                                    " x ",
                                                    v.count,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          null == y
                                            ? void 0
                                            : y.map(function (e, t) {
                                                return (0,
                                                m.BX)(l.View, { className: "item", children: [(0, m.tZ)(l.View, { className: "tit", children: e.title }), (0, m.BX)(l.View, { className: "cont", children: ["¥ ", e.payShowPrice] })] }, t);
                                              }),
                                        ],
                                      }),
                                      s &&
                                        !!s.price &&
                                        (0, m.BX)(l.View, {
                                          className: "detail-fee",
                                          children: [
                                            (0, m.tZ)(l.Text, {
                                              className: "cont",
                                              children:
                                                "服务费包含技术接入费用、支付手续等费用；如出票失败，自动返回原支付账户",
                                            }),
                                            (0, m.tZ)(l.Text, {
                                              className: "cont link",
                                              id: "AdDP",
                                              onClick: this.onToggleFeeModal,
                                              children: "对服务费仍有疑问?",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                        });
                      },
                    },
                  ]),
                  n
                );
              })(r.default.Component))
            ) || i;
      },
    },
  ]);
})();
