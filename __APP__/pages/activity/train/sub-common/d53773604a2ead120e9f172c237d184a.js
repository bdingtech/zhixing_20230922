!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [59789],
    {
      84926: function (e, n, o) {
        o.d(n, {
          fT: function () {
            return p;
          },
          kA: function () {
            return h;
          },
          l2: function () {
            return y;
          },
          nF: function () {
            return v;
          },
          sy: function () {
            return f;
          },
          x8: function () {
            return g;
          },
        });
        var t = o(93212),
          a = (o(52500), o(92954)),
          c = o.n(a),
          i = o(79792),
          r = o(86977),
          s = o(52690),
          l = o(41969),
          d = o.n(l),
          u = o(48813),
          v = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.shareKey,
              o = void 0 === n ? "" : n,
              t = e.reqTime,
              a = void 0 === t ? "" : t,
              c = e.openId,
              i = void 0 === c ? "" : c,
              r = e.accPackageId,
              s = void 0 === r ? "" : r,
              l = ""
                .concat(o)
                .concat(a)
                .concat(i)
                .concat(s, "7Ki9Xtdz2wyZKfoW");
            return d().MD5(l).toString();
          },
          h = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "";
            if (!e || !n || !o)
              return (
                console.warn("加速页根据shareKey获取缓存标识，缺少参数"), !1
              );
            var a = JSON.parse(c().getStorageSync(n) || "{}");
            console.log("activityMap 1:", a, (0, t.Z)(a));
            var i = a[o] || [];
            return i.some(function (n) {
              return n === e;
            });
          },
          g = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "";
            if (!e || !n || !o)
              return (
                console.warn("加速页根据shareKey设置缓存标识，缺少参数"), !1
              );
            var t = JSON.parse(c().getStorageSync(n) || "{}");
            console.log("activityMap 2:", t);
            var a = t[o] || [];
            a.length > 10 ? (a.shift(), a.push(e)) : a.push(e),
              (t[o] = a),
              c().setStorageSync(n, JSON.stringify(t));
          },
          p = function (e) {
            var n = e.showArriveStation,
              o = void 0 === n ? "" : n,
              t = e.shareKey,
              a = void 0 === t ? "" : t,
              c = e.arriveStation,
              s = void 0 === c ? "" : c,
              l = e.allianceid,
              d = void 0 === l ? "" : l,
              u = e.sid,
              v = void 0 === u ? "" : u,
              h = e.success,
              g = void 0 === h ? function () {} : h,
              p = e.shareImgs,
              f = void 0 === p ? [] : p,
              y = e.type,
              m = void 0 === y ? "" : y,
              w = e.abChannelType,
              S = void 0 === w ? "" : w,
              B = e.from,
              I = void 0 === B ? "" : B,
              b = e.robShareActivityType,
              T = void 0 === b ? "" : b,
              A = e.isShareGZH,
              C = void 0 !== A && A,
              N = e.pageKey,
              k = void 0 === N ? "" : N,
              K = e.shareTitle,
              F = void 0 === K ? "" : K,
              M = "我正在抢火车票",
              x = {
                回家: "home",
                去远方: "faraway",
                去学校: "school",
                去你心里: "heart",
              };
            F
              ? (M = F)
              : o
              ? (M = "".concat(o, "的火车票太难抢啦，需要你助我一臂之力！"))
              : s &&
                (M = "去".concat(s, "的火车票太难抢啦，需要你助我一臂之力！")),
              "stu" === T
                ? (M = "快来帮我加速，还能领¥548元的学生出行卡~")
                : "newGuest" === T
                ? (M = "快来帮我解锁VIP抢票，点击还能领¥180元出行大礼包")
                : "guoqing" === T &&
                  (M = "国庆免费高速抢票，不限次数。还可10.1元全国随心浪");
            var H;
            console.log("isShareGZH", C),
              (H = C
                ? "/pages/activity/train/speedassist/0904/speedassist0904?scene="
                    .concat(encodeURIComponent(a), "&allianceid=")
                    .concat(d, "&sid=")
                    .concat(v, "&type=")
                    .concat(m, "&toStation=")
                    .concat(s || "", "&tagCode=")
                    .concat(x[o] || "", "&abChannelFrom=")
                    .concat(I || "orderdetail", "&abChannelType=")
                    .concat(S, "&pageKey=")
                    .concat(k || "")
                : ""
                    .concat((0, r.eI)(), "?scene=")
                    .concat(encodeURIComponent(a), "&allianceid=")
                    .concat(d, "&sid=")
                    .concat(v, "&type=")
                    .concat(m, "&tagCode=")
                    .concat(x[o] || "", "&abChannelFrom=")
                    .concat(I || "orderdetail", "&abChannelType=")
                    .concat(S));
            var R =
              "https://images3.c-ctrip.com/train/wechat/share/robshare-".concat(
                i.default.isTieyou ? "ty" : "zx",
                ".png"
              );
            return (
              f && (R = f[Math.floor(Math.random() * f.length)]),
              { bu: "train", title: M, path: H, imageUrl: R, success: g }
            );
          },
          f = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            e &&
              Array.isArray(e) &&
              e.length > 0 &&
              e.forEach(function (e) {
                if (e.wechatNickName)
                  try {
                    e.wechatNickName = decodeURIComponent(e.wechatNickName);
                  } catch (n) {
                    e.wechatNickName = "微信用户";
                  }
              });
          },
          y = function (e) {
            var n = e.isLogin,
              o = e.needSubBeforeAcceRate,
              t = e.hasUserInfo,
              a = e.isSelf,
              c = e.accelerateStatusInfo,
              i = e.isTieyou,
              r = e.goldFingerInfo,
              l = e.grabSpeedLevelInfo,
              d = e.showGoldFingerPopup,
              v = c.statusCode,
              h = 205 !== v && 200 !== v && 201 !== v,
              g = 205 === v,
              p = 200 === v,
              f = 100 === v,
              y = 204 === v,
              m = 202 === v;
            function w(e) {
              var n = e.desc,
                o = void 0 === n ? "" : n;
              return (0, u.tZ)(s.Z, {
                isTieyou: i,
                goldFingerInfo: r,
                grabSpeedLevelInfo: l,
                accelerateStatusInfo: c,
                showGoldFingerPopup: d,
                desc: o,
              });
            }
            console.warn("是否登录", n),
              console.warn("是否订阅完了", !o),
              console.warn("是否授权了头像昵称", t),
              console.warn("是否本人", a),
              console.warn("抢票中", h),
              console.warn("抢票成功", g),
              console.warn("抢票结束", p),
              console.warn("加速好友可加速", f),
              console.warn("加速好友已给订单加过速", y),
              console.warn("加速次数已用完", m);
            var S = "",
              B = "",
              I = "loginBtn";
            return (
              console.log("needSubBeforeAcceRate1", o),
              n
                ? o
                  ? (h &&
                      (a
                        ? ((S = "我正在抢票，急需助力"), (I = "helpMeBtn"))
                        : ((S = "我正在抢票，急需助力"),
                          (B = w({ desc: "帮好友一键直升最高速度" })),
                          t
                            ? (I = "acceImmediateBtn")
                            : ((I = "oneKeyAccBtn"), console.log("位置1")))),
                    g &&
                      ((B = "抢票神器，首单抢不到就赔"),
                      (S = "我正在抢票，急需助力"),
                      (I = "acceImmediateBtn")),
                    p &&
                      ((B = "抢票神器，首单抢不到就赔"),
                      (S = "我正在抢票，急需助力"),
                      (I = "acceImmediateBtn")))
                  : o ||
                    (console.log("!needSubBeforeAcceRate", !o),
                    h &&
                      (a &&
                        ((S = (null == l ? void 0 : l.speedLevelDesc) || ""),
                        (I = "helpMeBtn")),
                      f &&
                        (t ||
                          ((S = "我正在抢票，急需助力"),
                          (B = w({ desc: "帮好友一键直升最高速度" })),
                          (I = "oneKeyAccBtn")),
                        t &&
                          ((S = "我正在抢票，急需助力"),
                          (B = w({ desc: "帮好友一键直升最高速度" })),
                          (I = "acceImmediateBtn"))),
                      y &&
                        ((S = "已帮好友助力成功！谢谢"),
                        (B = w({ desc: "帮好友一键直升最高速度" })),
                        (I = "travelAndHelpHimBtn")),
                      m &&
                        ((S = "抱歉，您的助力次数已用尽"),
                        (B = w({ desc: "帮好友一键直升最高速度" })),
                        (I = "travelAndHelpHimBtn"))),
                    g &&
                      ((B = "抢票神器，首单抢不到就赔"),
                      a
                        ? ((S = "".concat(
                            i ? "铁友" : "智行",
                            "已帮您抢票成功！"
                          )),
                          (I = "buyTicketBtn"))
                        : ((S = "当前订单抢票成功，无需助力"),
                          (I = "travelBtn"))),
                    p &&
                      ((B = "抢票神器，首单抢不到就赔"),
                      a
                        ? ((S = "抢票助力已结束"), (I = "buyTicketBtn"))
                        : ((S = "当前订单抢票结束，无需助力"),
                          (I = "travelBtn"))))
                : ((S = "我正在抢票，急需助力"),
                  (B = "抢票神器，首单抢不到就赔"),
                  (I = "loginBtn")),
              { lineOneText: S, lineTwoText: B, buttonType: I }
            );
          };
      },
    },
  ]);
})();
