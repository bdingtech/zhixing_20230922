!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [95415],
      {
        30948: function (e, t, a) {
          var n,
            l = a(32180),
            o = a(79301),
            i = a(95308),
            c = a(57042),
            s = a(24460),
            r = a(21867),
            u = a(86066),
            d = a(52500),
            h = a(92954),
            p = a.n(h),
            m = a(8271),
            k = a.n(m),
            v = a(79792),
            b = a(79910),
            f = a(81957),
            g = a(18783),
            x = a(30071),
            N = a(71515),
            I = a(49120),
            y = a(48813),
            w = b.A.isBaiduMap
              ? "https://apiproxy.ctrip.com/apiproxy/soa2/22823/hotelroomprice"
              : "https://apiproxy.ctrip.com/apiproxy/soa2/22823/newHotelRoomPriceUser",
            V = g.ZP.cid,
            Z = k()().format("YYYY-MM-DD"),
            D = k()().add(1, "day").format("YYYY-MM-DD"),
            T = {
              head: {
                syscode: null,
                lang: null,
                auth: null,
                cid: null,
                ctok: null,
                cver: null,
                sid: "367",
                extension: [
                  { name: "platform", value: "ios" },
                  { name: "reqTime", value: "1650435365" },
                  { name: "appVersion", value: "13.7.0.12" },
                  { name: "channel", value: "bd_search" },
                  { name: "netWork", value: "wifi" },
                  { name: "appid", value: "367" },
                ],
                pauth: null,
                sauth: null,
                appid: "367",
              },
              data: {
                checkInDate: Z,
                checkOutDate: D,
                hotelId: "25781109",
                mobile: "服务端提供",
              },
            },
            C = {
              data: { checkInDate: Z, checkOutDate: D, hotelId: "25781109" },
              head: {
                syscode: null,
                lang: null,
                auth: null,
                cid: V,
                ctok: null,
                cver: null,
                sid: "1000010",
                extension: [{ name: "source", value: "baidu_map" }],
                pauth: null,
                sauth: null,
                appid: "10000",
              },
            },
            R = v.default.isBaidu && !b.A.isBaiduMap,
            Y =
              (0, f.h)()(
                (n = (function (e) {
                  (0, r.Z)(a, e);
                  var t = (0, u.Z)(a);
                  function a(e) {
                    var n;
                    return (
                      (0, c.Z)(this, a),
                      ((n = t.call(this, e)).state = {
                        title: "智行报价测试页",
                        hotelId: "25781109",
                        checkInDate: k()().format("YYYY-MM-DD"),
                        checkOutDate: k()().add(1, "day").format("YYYY-MM-DD"),
                        roomInfos: [],
                        bdAppId: "10031067210911355170",
                        phoneNumber: "15317201207",
                        isCanary: x.C6.getAttr("canary"),
                        couponId: "10538884673",
                        couponIds: "11006398229",
                      }),
                      n
                    );
                  }
                  return (
                    (0, s.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.getHotelPrice();
                        },
                      },
                      {
                        key: "handleHotelId",
                        value: function (e) {
                          this.setState({ hotelId: e.detail.value });
                        },
                      },
                      {
                        key: "handlecouponId",
                        value: function (e) {
                          this.setState({ couponId: e.detail.value });
                        },
                      },
                      {
                        key: "handleHoteCheckInDate",
                        value: function (e) {
                          this.setState({ checkInDate: e.detail.value });
                        },
                      },
                      {
                        key: "handleBDAppId",
                        value: function (e) {
                          this.setState({ bdAppId: e.detail.value });
                        },
                      },
                      {
                        key: "handleHoteCheckOutDate",
                        value: function (e) {
                          this.setState({ checkOutDate: e.detail.value });
                        },
                      },
                      {
                        key: "handlePhoneNumber",
                        value: function (e) {
                          this.setState({ phoneNumber: e.detail.value });
                        },
                      },
                      {
                        key: "toBooking",
                        value: function (e) {
                          var t = R ? "bd_search" : "bdmap",
                            a = ""
                              .concat(e.bookingData, "&from=")
                              .concat(t, "&bdAppId=")
                              .concat(this.state.bdAppId, "&ouid=")
                              .concat(
                                "SW5aTWQzQjBNbHBNY2tZNFp6UlRUMHhvTjJ0eFowVlNlbFl5ZDBWRmNVSkJPVlJHUW1kNlRUaGpWMWxTZFZGU2RqSk1kSEozZVdsSWJtZFRNWGd6Y0hoS2MzVTRWbFoxVEdvMVVYRjFiU3RzVlZSbmVGTkpaSGg2UXpsaGQyOUxPRTQyTUdkVlRqbEtUVzVVYlhrMWVrNWNMMmhYUmxweldqUldVbTlWTXpkek0yMXdhekoxTWt4TmRGVnNabnBGY2twMVdFcDRSMU5hUjNOb0t6VldUMDlpZUdKWlpYQm5jRWhOVWx3dlJUQllkVVpuVmtRM1ZYRTRhMFpCTVZKVVRYUk1ObWxXYlRSQ1lsTlRZa04xYTIxQ1VXbG9Obkk0WlhwalpXdFFNRlJTYlU5Y0wzbDZVR05oY2pCNFRVRTlJZz09"
                              );
                          p().navigateTo({
                            url: "/pages/hotel/booking/booking?data="
                              .concat(a, "&isTest=1&couponIds=")
                              .concat(this.state.couponIds),
                          });
                        },
                      },
                      {
                        key: "getHotelRoomPrice",
                        value: (function () {
                          var e = (0, i.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var a,
                                n,
                                l,
                                i,
                                c,
                                s,
                                r,
                                u,
                                d,
                                h,
                                m = this;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (a = this.state),
                                          (n = a.hotelId),
                                          (l = a.checkInDate),
                                          (i = a.checkOutDate),
                                          (c = a.phoneNumber),
                                          (s = a.isCanary),
                                          (r = a.couponId),
                                          n || (u = "请填写酒店id"),
                                          l || (u = "请填写入离日期"),
                                          i || (u = "请填写入离日期"),
                                          R && !c && (u = "请填写手机号"),
                                          !u)
                                        ) {
                                          e.next = 8;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          (0, I.showToast)(u)
                                        );
                                      case 8:
                                        ((d = R ? T : C).data.checkInDate = l),
                                          (d.data.checkOutDate = i),
                                          (d.data.hotelId = n),
                                          R && t && (d.data.mobile = t),
                                          R && r && (d.data.couponId = r),
                                          (h = {}),
                                          s && (h["x-ctx-CanaryReq"] = "1"),
                                          p().request({
                                            method: "POST",
                                            url: w,
                                            header: h,
                                            data: d,
                                            success: function (e) {
                                              var t, a, n;
                                              console.log(
                                                "=> RoomPriceService success",
                                                e
                                              ),
                                                null != e &&
                                                  null !== (t = e.data) &&
                                                  void 0 !== t &&
                                                  null !== (a = t.data) &&
                                                  void 0 !== a &&
                                                  null !== (n = a.roomInfos) &&
                                                  void 0 !== n &&
                                                  n.length &&
                                                  m.setState(
                                                    {
                                                      roomInfos:
                                                        e.data.data.roomInfos,
                                                    },
                                                    function () {
                                                      (0, I.hideLoading)();
                                                    }
                                                  );
                                            },
                                            fail: function (e) {
                                              console.error(e),
                                                (0, I.showToast)(
                                                  e.errMsg || e.toString()
                                                ),
                                                (0, I.hideLoading)();
                                            },
                                          }),
                                          (e.next = 23);
                                        break;
                                      case 19:
                                        (e.prev = 19),
                                          (e.t0 = e.catch(0)),
                                          console.error(e.t0),
                                          (0, I.hideLoading)();
                                      case 23:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 19]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getMobileEncodePromise",
                        value: function () {
                          var e = this;
                          return new Promise(function (t) {
                            var a = {};
                            e.state.isCanary && (a["x-ctx-CanaryReq"] = "1"),
                              p().request({
                                method: "POST",
                                url: "https://apiproxy.ctrip.com/apiproxy/soa2/22823/getEncodeMobile",
                                header: a,
                                data: { data: { mobile: e.state.phoneNumber } },
                                success: function (e) {
                                  var a, n;
                                  t(
                                    null == e ||
                                      null === (a = e.data) ||
                                      void 0 === a ||
                                      null === (n = a.data) ||
                                      void 0 === n
                                      ? void 0
                                      : n.encodeData
                                  );
                                },
                                fail: function (e) {
                                  (0, I.showToast)(e.errMsg || e.toString()),
                                    t();
                                },
                              });
                          });
                        },
                      },
                      {
                        key: "getHotelPrice",
                        value: (function () {
                          var e = (0, i.Z)(
                            (0, o.Z)().mark(function e() {
                              var t;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (0, I.showLoading)(),
                                          !R)
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return (
                                          (e.next = 5),
                                          this.getMobileEncodePromise()
                                        );
                                      case 5:
                                        t = e.sent;
                                      case 6:
                                        return (
                                          (e.next = 8),
                                          this.getHotelRoomPrice(t)
                                        );
                                      case 8:
                                        e.next = 14;
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(0)),
                                          (0, I.hideLoading)(),
                                          console.error("getHotelPrice", e.t0);
                                      case 14:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 10]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "toggleCanary",
                        value: function () {
                          var e = !this.state.isCanary;
                          x.C6.setAttr("canary", e),
                            this.setState({ isCanary: e });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.title,
                            n = t.hotelId,
                            l = t.bdAppId,
                            o = t.checkInDate,
                            i = t.checkOutDate,
                            c = t.roomInfos,
                            s = t.phoneNumber,
                            r = t.isCanary,
                            u = t.couponId;
                          return (0, y.BX)(N.View, {
                            className: "swan-test-page",
                            children: [
                              (0, y.BX)(N.View, {
                                className: "title-wrapper",
                                children: [
                                  (0, y.tZ)(N.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/kaoshenjia/kaoyanrili/zhixing_logo@3x.png",
                                    className: "logo",
                                  }),
                                  (0, y.tZ)(N.Text, {
                                    className: "title",
                                    children: a,
                                  }),
                                ],
                              }),
                              (0, y.BX)(N.View, {
                                className: "group canary",
                                children: [
                                  (0, y.tZ)(N.Text, {
                                    className: "label",
                                    children: "开启堡垒",
                                  }),
                                  (0, y.tZ)(N.Switch, {
                                    className: "switch",
                                    color: "#0080FF",
                                    type: "checkbox",
                                    checked: r,
                                    onChange: this.toggleCanary,
                                  }),
                                ],
                              }),
                              (0, y.BX)(N.View, {
                                className: "content",
                                children: [
                                  (0, y.BX)(N.View, {
                                    className: "input-wrapper",
                                    children: [
                                      (0, y.BX)(N.View, {
                                        className: "group",
                                        children: [
                                          (0, y.tZ)(N.Text, {
                                            className: "label",
                                            children: "百度Client Id",
                                          }),
                                          (0, y.tZ)(N.Input, {
                                            type: "text",
                                            placeholder: "填写百度Client Id",
                                            className: "input-txt",
                                            placeholderClass:
                                              "input-placeholder",
                                            value: l,
                                            onInput: this.handleBDAppId,
                                            alwaysEmbed: !0,
                                          }),
                                        ],
                                      }),
                                      (0, y.BX)(N.View, {
                                        className: "inline",
                                        children: [
                                          (0, y.BX)(N.View, {
                                            className: "group",
                                            children: [
                                              (0, y.tZ)(N.Text, {
                                                className: "label",
                                                children: "入住日期",
                                              }),
                                              (0, y.tZ)(N.Input, {
                                                type: "text",
                                                maxlength: "30",
                                                placeholder: "填写入住日期",
                                                className: "input-txt",
                                                placeholderClass:
                                                  "input-placeholder",
                                                value: o,
                                                onInput:
                                                  this.handleHoteCheckInDate,
                                                alwaysEmbed: !0,
                                              }),
                                            ],
                                          }),
                                          (0, y.BX)(N.View, {
                                            className: "group",
                                            children: [
                                              (0, y.tZ)(N.Text, {
                                                className: "label",
                                                children: "离店日期",
                                              }),
                                              (0, y.tZ)(N.Input, {
                                                type: "text",
                                                maxlength: "30",
                                                placeholder: "填写离店日期",
                                                className: "input-txt",
                                                placeholderClass:
                                                  "input-placeholder",
                                                value: i,
                                                onInput:
                                                  this.handleHoteCheckOutDate,
                                                alwaysEmbed: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, y.BX)(N.View, {
                                        className: "inline",
                                        children: [
                                          (0, y.BX)(N.View, {
                                            className: "group",
                                            children: [
                                              (0, y.tZ)(N.Text, {
                                                className: "label",
                                                children: "酒店hotelid",
                                              }),
                                              (0, y.tZ)(N.Input, {
                                                type: "text",
                                                maxlength: "30",
                                                placeholder: "填写酒店id查询",
                                                className: "input-txt",
                                                placeholderClass:
                                                  "input-placeholder",
                                                value: n,
                                                onInput: this.handleHotelId,
                                                alwaysEmbed: !0,
                                              }),
                                            ],
                                          }),
                                          (0, y.BX)(N.View, {
                                            className: "group",
                                            children: [
                                              (0, y.tZ)(N.Text, {
                                                className: "label",
                                                children: "手机号(百度搜索)",
                                              }),
                                              (0, y.tZ)(N.Input, {
                                                type: "text",
                                                placeholder: "填写手机号",
                                                className: "input-txt",
                                                placeholderClass:
                                                  "input-placeholder",
                                                value: s,
                                                onInput: this.handlePhoneNumber,
                                                alwaysEmbed: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, y.tZ)(N.View, {
                                        className: "inline",
                                        children: (0, y.BX)(N.View, {
                                          className: "group",
                                          children: [
                                            (0, y.tZ)(N.Text, {
                                              className: "label",
                                              children: "couponId",
                                            }),
                                            (0, y.tZ)(N.Input, {
                                              type: "text",
                                              maxlength: "30",
                                              placeholder: "",
                                              className: "input-txt",
                                              placeholderClass:
                                                "input-placeholder",
                                              value: u,
                                              onInput: this.handlecouponId,
                                              alwaysEmbed: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, y.tZ)(N.Button, {
                                        className: "search-btn",
                                        id: "AXHR",
                                        onClick: this.getHotelPrice,
                                        children: "查询",
                                      }),
                                    ],
                                  }),
                                  c
                                    .filter(function (e) {
                                      return !!e;
                                    })
                                    .map(function (t, a) {
                                      return (0, y.tZ)(
                                        N.View,
                                        {
                                          className: "room-infos",
                                          children: t.price_info.map(function (
                                            t,
                                            a
                                          ) {
                                            return (0, y.BX)(
                                              N.View,
                                              {
                                                className: "info",
                                                children: [
                                                  (0, y.tZ)(N.View, {
                                                    className: "roomid",
                                                    children: t.room_id,
                                                  }),
                                                  (0, y.tZ)(N.View, {
                                                    className: "name",
                                                    children: t.ota_room_name,
                                                  }),
                                                  (0, y.BX)(N.View, {
                                                    className: "price",
                                                    children: [
                                                      "¥",
                                                      t.ota_price,
                                                    ],
                                                  }),
                                                  t.bookingData.includes(
                                                    "autoReceiveToken"
                                                  ) &&
                                                    (0, y.tZ)(N.View, {
                                                      className: "price",
                                                      children: "新客券",
                                                    }),
                                                  (0, y.tZ)(N.View, {
                                                    className: "book",
                                                    id: "AXHS",
                                                    onClick: function () {
                                                      return e.toBooking(t);
                                                    },
                                                    children: "预订",
                                                  }),
                                                ],
                                              },
                                              a
                                            );
                                          }),
                                        },
                                        a
                                      );
                                    }),
                                ],
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(d.default.Component))
              ) || n;
          Page(
            (0, l.createPageConfig)(
              Y,
              "pages/hotel/swan/swan",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(30948);
        }),
          e.O();
      },
    ]);
})();
