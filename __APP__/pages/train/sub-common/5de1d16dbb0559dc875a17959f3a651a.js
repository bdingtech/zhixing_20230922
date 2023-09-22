!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [67289],
    {
      15125: function (e, t, i) {
        i.d(t, {
          k: function () {
            return y;
          },
        }),
          i(52500);
        var a = i(34229),
          s = i(71515),
          n = i(92954),
          c = i.n(n),
          r = i(4102),
          l = i(79910),
          o = i(8271),
          m = i.n(o),
          d = i(79792),
          p = i(77649),
          h = i(48813),
          u = c().getSystemInfoSync().screenWidth - 32 - 12,
          g = { backgroundColor: "#F5F5F5" },
          y = {
            contrastText: d.default.isTieyou ? "#03B86F" : "#F76E21",
            mainTagColor: d.default.isTieyou ? "#FC6E51" : "#198CFF",
            lightTagColor: d.default.isTieyou ? "#FEC5B9" : "#9EC6FF",
          };
        t.Z = function (e) {
          var t = e.visible,
            i = e.onClose,
            n = e.type,
            c = e.subTrain,
            o = e.train,
            y = e.departDate;
          if (n && !c) {
            console.log(n);
            var w = (function (e) {
              return [3, "stride"].includes(e)
                ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/xy/img_kzdm@3x.png"
                : [1, "buyRob", "smartsttx"].includes(e)
                ? "https://images3.c-ctrip.com/ztrip/train.xin/2021_04/edition/buyandrob_zx.png"
                : [4, "robBuy", "smartgrt"].includes(e)
                ? "https://images3.c-ctrip.com/ztrip/train.xin/2021_04/edition/scramble_zx.png"
                : "https://images3.c-ctrip.com/ztrip/train.xin/2021_05/combination_seat_zx.png";
            })(n);
            return (0, h.tZ)(a.ZtActivityPop, {
              className: "combine-seat-intro-dialog",
              isShowClose: !0,
              show: t,
              onClose: i,
              onWrapClose: i,
              children: (0, h.tZ)(s.Image, {
                src: w,
                className: "combine-seat-img ".concat(3 == n ? "stride" : ""),
              }),
            });
          }
          if (!o || !c) return null;
          var N = { name: o.DepartStation, date: y, time: o.DepartTime },
            f = {
              name: o.ArriveStation,
              date: r.Z.getSpecialDay(y, o.TakeDays),
              time: o.ArriveTime,
            };
          if ([1, 2, 3, 4, 5].includes(n)) {
            var x = c.subTrainSegments,
              Z = c.trainNo,
              b = (0, p.VV)(n, x, N, f, { allWidth: u }),
              V = b.stations,
              T = b.trains,
              B = b.times,
              z = b.tips,
              v = b.seatType,
              C = b.title,
              _ = b.desc,
              D = l.Z.getCommonDayInfo(x[0].startDate),
              S = m()(x[0].startDate).format("M月D日"),
              F = function (e) {
                var t = e.tagText,
                  i = e.tagType,
                  a = e.lineType,
                  n = e.lineWidth,
                  c =
                    i === p.L8.BORDERED
                      ? "border"
                      : i === p.L8.SOLID
                      ? "solid"
                      : i === p.L8.LIGHT_SOLID
                      ? "light-solid"
                      : "";
                return i === p.L8.CIRCLE
                  ? (0, h.tZ)(s.View, {
                      className: "tag-style circle ".concat(
                        d.default.isTieyou ? "ty" : "zx"
                      ),
                    })
                  : void 0 !== a && void 0 !== n
                  ? (0, h.BX)(s.Block, {
                      children: [
                        a === p.Jy.LINE
                          ? (0, h.tZ)(s.View, {
                              className: "line-style ".concat(
                                d.default.isTieyou ? "ty" : "zx"
                              ),
                            })
                          : (0, h.tZ)(s.View, {
                              className: "dash-line-style ".concat(
                                d.default.isTieyou ? "ty" : "zx"
                              ),
                            }),
                        (0, h.tZ)(s.View, {
                          className: "tag-style "
                            .concat(c, " ")
                            .concat(d.default.isTieyou ? "ty" : "zx"),
                          children: t,
                        }),
                      ],
                    })
                  : (0, h.tZ)(s.View, {
                      style: { width: "100%" },
                      className: "tag-style "
                        .concat(c, " ")
                        .concat(d.default.isTieyou ? "ty" : "zx"),
                      children: t,
                    });
              };
            return (0, h.BX)(a.ZtDrawer, {
              show: t,
              onWrapClose: i,
              isShowClose: !1,
              drawerStyle: g,
              className: "train-combine-seat-intro-pop",
              children: [
                (0, h.tZ)(s.Image, {
                  className: "bg-img",
                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/img_bj@3x.webp",
                }),
                (0, h.BX)(s.View, {
                  className: "title-content",
                  children: [
                    (0, h.BX)(s.View, {
                      className: "title flex-center",
                      children: [
                        (0, h.tZ)(s.Image, {
                          className: "img",
                          webp: !0,
                          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/img_sqsm@3x.webp",
                        }),
                        C &&
                          (0, h.tZ)(s.View, { className: "name", children: C }),
                      ],
                    }),
                    (0, h.tZ)(s.View, { className: "desc", children: _ }),
                  ],
                }),
                (0, h.tZ)(s.Image, {
                  className: "scheme-icon",
                  webp: !0,
                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/img_sqpt@3x.webp",
                }),
                (0, h.BX)(s.View, {
                  className: "combine-seat-intro-pop",
                  children: [
                    (0, h.BX)(s.View, {
                      className: "content",
                      children: [
                        (0, h.BX)(s.View, {
                          className: "head-info",
                          children: [
                            (0, h.tZ)(s.Text, {
                              children: "".concat(S).concat(D, " ").concat(Z),
                            }),
                            (0, h.tZ)(s.Text, {
                              className: "seat",
                              children: v,
                            }),
                          ],
                        }),
                        (0, h.BX)(s.View, {
                          className: "route-map",
                          children: [
                            (0, h.tZ)(s.View, {
                              className: "times",
                              children: B.map(function (e, t) {
                                var i = e.time,
                                  a = e.disabled,
                                  n = e.dayDiff;
                                return (0,
                                h.tZ)(s.View, { style: (0, p.Bc)(B.length, t), className: "times-item ".concat(0 == t ? "start" : t === B.length - 1 ? "end" : "center"), children: (0, h.BX)(s.View, { className: "time-content ".concat(a ? "font-gray" : ""), children: [i, void 0 !== n && (0, h.BX)(s.View, { className: "diff-day ".concat(d.default.isTieyou ? "ty" : "zx", "}"), style: a ? "color: #999999" : "", children: ["+", n, "天"] })] }) }, "times" + t);
                              }),
                            }),
                            (0, h.tZ)(s.View, {
                              className: "trains-label",
                              children: T.map(function (e, t) {
                                return (0,
                                h.tZ)(s.View, { className: "label-item ".concat(0 == t ? "start" : t === T.length - 1 ? "end" : "center"), style: e.lineWidth ? "width: ".concat(e.lineWidth, "px") : "minWidth: ".concat(e.width, "px"), children: F(e) }, "label" + t);
                              }),
                            }),
                            (0, h.tZ)(s.View, {
                              className: "stations",
                              children: V.filter(function (e) {
                                return !!e.stationName;
                              }).map(function (e, t) {
                                var i = e.stationName,
                                  a = e.disabled;
                                return (0,
                                h.tZ)(s.View, { className: "".concat(0 == t ? "start" : t === V.length - 1 ? "end" : "center", " ").concat(a ? "font-gray" : ""), style: (0, p.Bc)(B.length, t), children: (0, h.tZ)(s.View, { children: i }) }, "stations" + t);
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, h.tZ)(s.View, {
                      className: "tips",
                      children: z.map(function (e, t) {
                        return (0,
                        h.BX)(s.View, { className: "tips-item", children: [(0, h.tZ)(s.Text, { className: "tips-icon" }), (0, h.tZ)(a.ZtRichText, { className: "tips-item", nodes: l.Z.convertAppTextToHtmlStr(e) })] }, t);
                      }),
                    }),
                  ],
                }),
              ],
            });
          }
          return null;
        };
      },
    },
  ]);
})();
