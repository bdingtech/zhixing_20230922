!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/9cf383cff2ba8ce0456965e69ba11b63.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [93304],
      {
        37991: function (e, t, n) {
          var a,
            s = n(32180),
            i = n(79301),
            r = n(95308),
            o = n(57042),
            c = n(24460),
            u = n(81876),
            l = n(21867),
            d = n(86066),
            f = n(45023),
            h = n(52500),
            p = n(71515),
            g = (n(92954), n(58676)),
            m = n(49120),
            v = n(96158),
            w = n(81957),
            k = n(26498),
            b = n(79792),
            Z = n(48813),
            y =
              (0, w.h)()(
                (a = (function (e) {
                  (0, l.Z)(n, e);
                  var t = (0, d.Z)(n);
                  function n(e) {
                    var a;
                    return (
                      (0, o.Z)(this, n),
                      (a = t.call(this, e)),
                      (0, f.Z)(
                        (0, u.Z)(a),
                        "pageId",
                        b.default.isTieyou ? "10650082706" : "10650082704"
                      ),
                      (a.state = { passengers: [], selectPas: null }),
                      a
                    );
                  }
                  return (
                    (0, c.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.initData();
                        },
                      },
                      {
                        key: "initData",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, i.Z)().mark(function e() {
                              var t;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (0, m.showLoading)(),
                                          (e.next = 3),
                                          (0, v.Qw)()
                                        );
                                      case 3:
                                        (t = e.sent),
                                          (0, m.hideLoading)(),
                                          this.setState({
                                            passengers: t.filter(function (e) {
                                              return 1 == e.status;
                                            }),
                                          });
                                      case 6:
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
                        key: "onCheck",
                        value: function (e) {
                          var t;
                          this.setState({
                            selectPas:
                              (null === (t = this.state.selectPas) ||
                              void 0 === t
                                ? void 0
                                : t.passenger_uuid) === e.passenger_uuid
                                ? null
                                : e,
                          });
                        },
                      },
                      {
                        key: "submit",
                        value: function () {
                          this.state.selectPas
                            ? this.navigateBack(this.state.selectPas)
                            : (0, m.showToast)("请选择乘车人~");
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.passengers,
                            a = t.selectPas;
                          return (0, Z.BX)(p.View, {
                            className: "train-export-assignee-page",
                            children: [
                              (0, Z.tZ)(p.View, {
                                className: "list-content-view",
                                children: n.map(function (t, n) {
                                  return (0,
                                  Z.BX)(p.View, { className: "pas-li", id: "AKCd", onClick: e.onCheck.bind(e, t), children: [(0, Z.tZ)(k.Z, { checked: (null == a ? void 0 : a.passenger_uuid) === t.passenger_uuid }), (0, Z.BX)(p.View, { className: "l-r", children: [(0, Z.BX)(p.View, { className: "pas-name", children: [t.name, (0, Z.tZ)(p.View, { className: "t-name", children: t.ticket_type_name })] }), (0, Z.BX)(p.View, { className: "pas-desc", children: [t.id_type_name, " ", t.id_no] })] })] }, n);
                                }),
                              }),
                              (0, Z.tZ)(p.View, {
                                className: "bottom-view",
                                children: (0, Z.tZ)(p.Button, {
                                  className: "btn btn-primary",
                                  hoverClass: "btn-primary_hover",
                                  id: "AKCe",
                                  onClick: this.submit,
                                  children: "确定",
                                }),
                              }),
                              (0, Z.tZ)(g.Z, {
                                ref: function (t) {
                                  e.onDialogAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(h.default.Component))
              ) || a;
          Page(
            (0, s.createPageConfig)(
              y,
              "pages/train/exportAssignee/exportAssignee",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "选择乘车人",
                navigationBarBackgroundColor: "#fff",
                backgroundColorBottom: "#efefef",
                backgroundColorTop: "#efefef",
                navigationBarTextStyle: "black",
                enablePullDownRefresh: !1,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [61094, 26450, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(37991);
        }),
          e.O();
      },
    ]);
})();
