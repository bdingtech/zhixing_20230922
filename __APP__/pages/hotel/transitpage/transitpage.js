!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [81210],
      {
        82092: function (e, t, a) {
          var o,
            n = a(32180),
            r = a(57042),
            i = a(24460),
            c = a(21867),
            l = a(86066),
            s = a(298),
            u = a(52500),
            g = a(71515),
            d = a(92954),
            f = a.n(d),
            h = a(48792),
            p = a.n(h),
            y = a(8271),
            m = a.n(y),
            k = a(4102),
            T = a(81957),
            D = a(48813),
            H = "YYYY-MM-DD",
            v = {
              pageId: "10650060679",
              data: {},
              onLoad: function (e) {
                var t = e.action;
                "hotelList" == t
                  ? this.onHotelListCall(e.params)
                  : "hotelDetail" == t
                  ? this.onHotelDetailCall(e.params)
                  : this.goHotelHomePage();
              },
              onHotelListCall: function (e) {
                var t = JSON.parse(decodeURIComponent(e || "{}"));
                if (t) {
                  var a = (0, s.Z)(
                    (0, s.Z)((0, s.Z)({}, this.getHotelQueryModel()), t),
                    {},
                    { fromTransit: !0 }
                  );
                  this.goTargetPage("/pages/hotel/list/list", {
                    queryModel: a,
                    fromPage: t.fromPage || "transitPage",
                  });
                } else this.goHotelHomePage();
              },
              onHotelDetailCall: function (e) {
                var t = JSON.parse(decodeURIComponent(e || "{}"));
                if (t && t.hotel) {
                  var a = t.query.checkInDate || m()().format(H),
                    o = k.Z.getSpecialDay(a, 1),
                    n = (0, s.Z)(
                      (0, s.Z)(
                        (0, s.Z)({}, this.getHotelQueryModel()),
                        t.query || {}
                      ),
                      {},
                      { checkOutDate: t.query.checkOutDate || o }
                    ),
                    r = (0, s.Z)(
                      (0, s.Z)({}, t),
                      {},
                      { query: n, fromTransit: !0 }
                    );
                  this.goTargetPage("/pages/hotel/detail/detail", r);
                } else this.goHotelHomePage();
              },
              goTargetPage: function (e, t) {
                f().redirectTo({
                  url: ""
                    .concat(e, "?data=")
                    .concat(encodeURIComponent(JSON.stringify(t))),
                });
              },
              goHotelHomePage: function () {
                f().reLaunch({
                  url: "/pages/home/index?tab=hotel&fromPage=xcx_hotel_transit_page",
                });
              },
              getHotelQueryModel: function () {
                var e = {
                    checkInDate: m()().format(H),
                    checkOutDate: m()().add(1, "day").format(H),
                  },
                  t = { cityId: "2", displayText: "上海" };
                return {
                  cityId: t.cityId,
                  cityName: t.displayText,
                  districtId: t.districtId,
                  checkInDate: e.checkInDate,
                  checkOutDate: e.checkOutDate,
                  hotelType: 1,
                  keyValue: "",
                  keyWordType: 0,
                  payType: 0,
                  contrl: 3,
                  contrlExt: 0,
                  queryBitMap: 0,
                  specialChannel: 0,
                  index: 1,
                  orderBy: 0,
                  desc: 1,
                  source: "train",
                  userSelect: 0,
                  travelType: 0,
                  sameCityFlag: !1,
                  searchMode: 1,
                };
              },
            },
            C =
              (0, T.h)()(
                (o =
                  p()(v)(
                    (o = (function (e) {
                      (0, c.Z)(a, e);
                      var t = (0, l.Z)(a);
                      function a() {
                        return (0, r.Z)(this, a), t.apply(this, arguments);
                      }
                      return (
                        (0, i.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              return (0, D.tZ)(g.View, {
                                className: "hotel-box",
                              });
                            },
                          },
                        ]),
                        a
                      );
                    })(u.default.Component))
                  ) || o)
              ) || o;
          Page(
            (0, n.createPageConfig)(
              C,
              "pages/hotel/transitpage/transitpage",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#fff",
                backgroundColorBottom: "#efefef",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(82092);
        }),
          e.O();
      },
    ]);
})();
