!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/fecc9c60875b710a8101d0d50626beef.js"),
    require("../sub-common/a2ac0ceb5f7d0d895cfbf0fbbe36cfa7.js"),
    require("../sub-common/fc8d2c41f03b7cf8df3076a401470a28.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [87151],
      {
        79850: function (e, t, i) {
          var n,
            a = i(32180),
            r = i(57042),
            o = i(24460),
            s = i(21867),
            c = i(86066),
            l = i(52500),
            m = i(92954),
            d = i.n(m),
            u = i(71515),
            h = i(79792),
            g = i(81957),
            f = i(21999),
            p = i(58789),
            w = i(48813),
            T = (function (e) {
              (0, s.Z)(i, e);
              var t = (0, c.Z)(i);
              function i() {
                return (0, r.Z)(this, i), t.apply(this, arguments);
              }
              return (
                (0, o.Z)(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props.data || {},
                        t = e.solution,
                        i = e.index,
                        n = e.originalTrain,
                        a = e.isTieyou;
                      return t
                        ? (0, w.tZ)(u.Block, {
                            children: (0, w.BX)(u.View, {
                              className: "common-stride-train "
                                .concat(t.disabled ? "disabled" : "", " ")
                                .concat(a ? "ty" : "zx"),
                              id: "AACJ",
                              onClick:
                                this.props.CrossStationGrabTicketToggleItem,
                              "data-index": i,
                              "data-ubt-key": i,
                              children: [
                                (0, w.BX)(u.View, {
                                  className: "txt",
                                  children: [
                                    t.recommendDepartStation +
                                      "-" +
                                      t.recommendArriveStation,
                                    t.recommendArriveCount < 0 &&
                                      (0, w.tZ)(u.Text, {
                                        className: "tgrey",
                                        children: "先上车再补票",
                                      }),
                                    t.recommendDepartCount > 0 &&
                                      (0, w.BX)(u.Text, {
                                        className: "tgrey",
                                        children: [
                                          "需多付",
                                          (0, w.tZ)(u.Text, {
                                            className: "more-price",
                                            children: (0, w.tZ)(u.Text, {
                                              children: "￥" + t.f_extraAmount,
                                            }),
                                          }),
                                          "，在",
                                          (0, w.tZ)(u.Text, {
                                            className: "tgrey-station",
                                            children: n.DepartStation,
                                          }),
                                          "上车",
                                        ],
                                      }),
                                    t.recommendArriveCount > 0 &&
                                      (0, w.BX)(u.Text, {
                                        className: "tgrey",
                                        children: [
                                          "需多付",
                                          (0, w.tZ)(u.Text, {
                                            className: "more-price",
                                            children: (0, w.tZ)(u.Text, {
                                              children: "￥" + t.f_extraAmount,
                                            }),
                                          }),
                                          "，在",
                                          (0, w.tZ)(u.Text, {
                                            className: "tgrey-station",
                                            children: n.ArriveStation,
                                          }),
                                          "下车",
                                        ],
                                      }),
                                  ],
                                }),
                                (0, w.BX)(u.View, {
                                  className: "stride-bd",
                                  children: [
                                    t.recommendDepartCount > 0 &&
                                      (0, w.BX)(u.View, {
                                        className: "list",
                                        children: [
                                          (0, w.tZ)(u.View, {
                                            className: "station",
                                            children: t.recommendDepartStation,
                                          }),
                                          (0, w.tZ)(u.View, {
                                            className: "info",
                                            children:
                                              "多买" +
                                              t.recommendDepartCount +
                                              "站",
                                          }),
                                        ],
                                      }),
                                    (0, w.BX)(u.View, {
                                      className:
                                        "list list-original " +
                                        (t.recommendDepartCount < 0
                                          ? "bu"
                                          : ""),
                                      children: [
                                        (0, w.BX)(u.View, {
                                          className: "station now",
                                          children: [
                                            (0, w.tZ)(u.View, {
                                              className: "station-tag ".concat(
                                                t.recommendDepartCount > 0
                                                  ? "middle"
                                                  : ""
                                              ),
                                              children: "上车",
                                            }),
                                            n.DepartStation,
                                          ],
                                        }),
                                        t.recommendDepartCount < 0 &&
                                          (0, w.tZ)(u.View, {
                                            className: "info info-left-middle",
                                            children:
                                              "补票" +
                                              -t.recommendDepartCount +
                                              "站",
                                          }),
                                      ],
                                    }),
                                    t.recommendDepartCount < 0 &&
                                      (0, w.tZ)(u.View, {
                                        className:
                                          "list " +
                                          (t.recommendDepartCount < 0
                                            ? "bu"
                                            : ""),
                                        children: (0, w.tZ)(u.View, {
                                          className: "station",
                                          children: t.recommendDepartStation,
                                        }),
                                      }),
                                    t.recommendArriveCount < 0 &&
                                      (0, w.tZ)(u.View, {
                                        className: "list",
                                        children: (0, w.tZ)(u.View, {
                                          className: "station",
                                          children: t.recommendArriveStation,
                                        }),
                                      }),
                                    (0, w.BX)(u.View, {
                                      className:
                                        "list list-original " +
                                        (t.recommendArriveCount < 0
                                          ? "bu"
                                          : ""),
                                      children: [
                                        (0, w.BX)(u.View, {
                                          className: "station now",
                                          children: [
                                            (0, w.tZ)(u.View, {
                                              className: "station-tag ".concat(
                                                t.recommendArriveCount > 0
                                                  ? "middle"
                                                  : ""
                                              ),
                                              children: "下车",
                                            }),
                                            n.ArriveStation,
                                          ],
                                        }),
                                        t.recommendArriveCount < 0 &&
                                          (0, w.tZ)(u.View, {
                                            className: "info info-right-middle",
                                            children:
                                              "补票" +
                                              -t.recommendArriveCount +
                                              "站",
                                          }),
                                      ],
                                    }),
                                    t.recommendArriveCount > 0 &&
                                      (0, w.BX)(u.View, {
                                        className: "list",
                                        children: [
                                          (0, w.tZ)(u.View, {
                                            className: "station",
                                            children: t.recommendArriveStation,
                                          }),
                                          (0, w.tZ)(u.View, {
                                            className: "info",
                                            children:
                                              "多抢" +
                                              t.recommendArriveCount +
                                              "站",
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, w.tZ)(u.Text, {
                                  className:
                                    "iconfont " +
                                    (t.isCrossStationGrabCheckoutSelected ||
                                    t.disabled
                                      ? "ifont-radioed color-primary"
                                      : "ifont-radio"),
                                }),
                              ],
                            }),
                          })
                        : (0, w.tZ)(u.View, {});
                    },
                  },
                ]),
                i
              );
            })(l.default.Component),
            Z =
              (0, g.h)()(
                (n = (function (e) {
                  (0, s.Z)(i, e);
                  var t = (0, c.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, r.Z)(this, i),
                      ((n = t.call(this, e)).pageId = h.default.isTieyou
                        ? "10650060994"
                        : "10650060992"),
                      (n.state = {
                        isTieyou: h.default.isTieyou,
                        CrossStationGrabTicketInfoList: [],
                        originalTrain: {},
                      }),
                      n
                    );
                  }
                  return (
                    (0, o.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, m.getCurrentInstance)().router.params;
                          if ((console.log("params", e), e && e.data)) {
                            var t = e.data,
                              i = t.CrossStationGrabTicketInfoList,
                              n = t.originalTrain;
                            this.setState({
                              CrossStationGrabTicketInfoList: i,
                              originalTrain: n,
                            });
                          } else this.navigateBack();
                        },
                      },
                      {
                        key: "CrossStationGrabTicketToggleItem",
                        value: function (e) {
                          var t = this.state.CrossStationGrabTicketInfoList,
                            i = t[e.currentTarget.dataset.index];
                          (i.isCrossStationGrabCheckoutSelected =
                            !i.isCrossStationGrabCheckoutSelected),
                            this.setState({
                              CrossStationGrabTicketInfoList: t,
                            });
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          this.navigateBack();
                        },
                      },
                      {
                        key: "onComfirm",
                        value: function () {
                          var e = this.state.CrossStationGrabTicketInfoList;
                          this.invokeCallback(e), this.navigateBack();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isTieyou,
                            n = t.CrossStationGrabTicketInfoList,
                            a = t.originalTrain;
                          return (0, w.BX)(u.View, {
                            children: [
                              (null == n ? void 0 : n.length) > 0
                                ? (0, w.BX)(u.View, {
                                    className: "page ".concat(i ? "ty" : "zx"),
                                    children: [
                                      (0, w.BX)(u.View, {
                                        className: "wrap",
                                        children: [
                                          (0, w.tZ)(u.View, {
                                            className: "top-bg",
                                          }),
                                          (0, w.tZ)(u.View, {
                                            className: "top-bg-top",
                                          }),
                                          (0, w.BX)(u.View, {
                                            className: "content",
                                            children: [
                                              (0, w.BX)(u.View, {
                                                className:
                                                  "title flex-align-items-center",
                                                children: [
                                                  (0, w.tZ)(u.View, {
                                                    className: "top",
                                                  }),
                                                  (0, w.tZ)(p.Z, {
                                                    customizeStyle: {
                                                      content:
                                                        "font-size:".concat(
                                                          d().pxTransform(24),
                                                          ";color:#ff5959"
                                                        ),
                                                    },
                                                  }),
                                                ],
                                              }),
                                              (0, w.tZ)(u.View, {
                                                className: "top-item",
                                                children: (0, w.tZ)(T, {
                                                  data: {
                                                    originalTrain: a,
                                                    solution: n[0],
                                                    index: 0,
                                                    isTieyou: i,
                                                  },
                                                  CrossStationGrabTicketToggleItem:
                                                    this
                                                      .CrossStationGrabTicketToggleItem,
                                                }),
                                              }),
                                              n[1] &&
                                                (0, w.BX)(u.Block, {
                                                  children: [
                                                    (0, w.BX)(u.View, {
                                                      className:
                                                        "other-title flex-align-items-center",
                                                      children: [
                                                        (0, w.tZ)(u.View, {
                                                          className: "txt",
                                                          children: "其他方案",
                                                        }),
                                                        (0, w.tZ)(p.Z, {
                                                          customizeStyle: {
                                                            content:
                                                              "font-size:".concat(
                                                                d().pxTransform(
                                                                  24
                                                                ),
                                                                ";color:#ff5959"
                                                              ),
                                                          },
                                                        }),
                                                      ],
                                                    }),
                                                    (0, w.tZ)(u.View, {
                                                      className: "other-list",
                                                      children: n.map(function (
                                                        t,
                                                        n
                                                      ) {
                                                        return (0, w.tZ)(
                                                          u.Block,
                                                          {
                                                            children:
                                                              0 !== n &&
                                                              (0, w.tZ)(T, {
                                                                data: {
                                                                  originalTrain:
                                                                    a,
                                                                  solution: t,
                                                                  index: n,
                                                                  isTieyou: i,
                                                                },
                                                                CrossStationGrabTicketToggleItem:
                                                                  e.CrossStationGrabTicketToggleItem,
                                                              }),
                                                          },
                                                          "index"
                                                        );
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, w.tZ)(u.View, {
                                        className: "bottom-btn",
                                        children: (0, w.tZ)(u.View, {
                                          className: "btn btn-primary",
                                          id: "AHAA",
                                          onClick: this.onComfirm,
                                          children: "确认",
                                        }),
                                      }),
                                    ],
                                  })
                                : (0, w.BX)(u.View, {
                                    className: "page ".concat(i ? "ty" : "zx"),
                                    children: [
                                      (0, w.tZ)(u.View, {
                                        className: "top-bg",
                                      }),
                                      (0, w.BX)(u.View, {
                                        className: "empty-container",
                                        children: [
                                          (0, w.tZ)(u.Image, {
                                            src: i
                                              ? "https://images3.c-ctrip.com/ztrip/train.song/gonggong/img_zwnr_ty@3x.webp"
                                              : "https://images3.c-ctrip.com/ztrip/train.song/gonggong/img_zwnr@3x.png",
                                            className: "empty-icon",
                                          }),
                                          (0, w.tZ)(u.View, {
                                            className: "empty-desc",
                                            children: "暂无跨站方案",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              (0, w.tZ)(f.Z, {
                                ref: function (t) {
                                  e.onDrawerAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(l.default.Component))
              ) || n;
          Page(
            (0, a.createPageConfig)(
              Z,
              "pages/trainRob/crossTrainList/crossTrainList",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "跨站抢票",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [35203, 4978, 50460, 7934, 74492, 1768, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(79850);
          }
        ),
          e.O();
      },
    ]);
})();
