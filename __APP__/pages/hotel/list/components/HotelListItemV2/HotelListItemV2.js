require("../../../sub-vendors.js"),
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [10479],
    {
      26444: function (t, e, i) {
        var o = i(79792).default;
        Component({
          behaviors: [],
          properties: { hotel: Object, itemType: String },
          data: {
            zxTyStr: o.zxTyStr,
            _configs: {
              tonightSaleBg:
                "https://images3.c-ctrip.com/zt/wechat/hotel/tonight-sale-bg.png",
              collectedIcon:
                "https://images3.c-ctrip.com/zt/hotel/hotel-yisc@3x.png",
              tonightIcon:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/jinyetejia/jinye_lb_tag@3x.png",
              logoClassName: {
                2048: "blue",
                1024: "red",
                4096: "black",
                32768: "popular",
              },
            },
            tonightSaleTime: {},
            statusImage: "",
          },
          lifetimes: {
            attached: function () {
              var t = this.data,
                e = t.hotel,
                i = t.itemType,
                o = e.hotelStatus;
              0 != (8192 & o)
                ? this.setData({
                    statusImage:
                      "https://images3.c-ctrip.com/ztrip/hotel/dahua/list/img_xieye@3x.webp",
                  })
                : 0 != (32 & o) &&
                  "normal" === i &&
                  this.setData({
                    statusImage:
                      "https://images3.c-ctrip.com/ztrip/hotel/dahua/list/img_shouqing@3x.webp",
                  }),
                this.setCountDown();
            },
            detached: function () {
              this.listTimerId &&
                (clearInterval(this.listTimerId), (this.listTimerId = null));
            },
          },
          methods: {
            setCountDown: function () {
              var t,
                e,
                i = this;
              if (
                null !== (t = this.data.hotel) &&
                void 0 !== t &&
                null !== (e = t.hotelAddInfo) &&
                void 0 !== e &&
                e.tonightEndTime
              ) {
                var o = this.data.hotel.hotelAddInfo.tonightEndTime;
                this.setCountDownImpl(o),
                  this.listTimerId && clearInterval(this.listTimerId),
                  (this.listTimerId = setInterval(function () {
                    i.setCountDownImpl(o);
                  }, 1e3));
              }
            },
            setCountDownImpl: function (t) {
              var e,
                i = new Date().getTime(),
                o = this.millisToSecond(t) - this.millisToSecond(i),
                n = this.computeRestTime(o),
                s = !(
                  n.stop ||
                  (null !== (e = this.data.hotel.priceInfo) &&
                    void 0 !== e &&
                    e.priceExtraDatas)
                );
              this.setData({ showTonightTime: s, tonightSaleTime: n });
            },
            millisToSecond: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              if ("undefined" !== t && 10 != t.toString().length)
                return Math.floor(t / 1e3);
            },
            checkTime: function (t) {
              var e = t;
              return t < 10 && (e = "0" + t), e.toString();
            },
            computeRestTime: function (t) {
              var e = !1,
                i = t;
              t < 0 && ((i = 0), (e = !0));
              var o = parseInt(i / 60 / 60 / 24, 10),
                n = parseInt((i / 60 / 60) % 24, 10),
                s = parseInt((i / 60) % 60, 10),
                a = parseInt(i % 60, 10);
              return {
                day: (o = o.toString()),
                hour: (n = this.checkTime(n)),
                minute: (s = this.checkTime(s)),
                second: (a = this.checkTime(a)),
                stop: e,
              };
            },
            toHotelDetail: function () {
              this.triggerEvent("ToHotelDetail", {});
            },
            onShowPriceModal: function () {
              this.triggerEvent("ShowPriceModal", {});
            },
          },
        });
      },
    },
    function (t) {
      t.O(0, [19559, 11216, 68592], function () {
        return (function (e) {
          return t((t.s = e));
        })(26444);
      }),
        t.O();
    },
  ]);
