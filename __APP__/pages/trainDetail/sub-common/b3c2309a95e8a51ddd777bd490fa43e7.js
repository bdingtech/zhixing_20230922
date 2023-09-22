!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [34335],
    {
      40852: function (e, n, s) {
        var u = s(79301),
          t = s(95308),
          i = s(298),
          l = s(94190),
          o = {
            state: {
              logedin: !1,
              login12306Name: "",
              login12306Pas: "",
              shownLogin12306Name: "",
              passengerList12306: [],
              memberStatus12306: null,
              auth12306Status: null,
              selfPassenger: null,
              userName12306: "",
            },
            reducers: {
              refresh: function (e) {
                var n,
                  s = l.WG.get().bind12306;
                return (0, i.Z)(
                  (0, i.Z)({}, e),
                  {},
                  {
                    logedin: s ? 1 : 0,
                    login12306Name: (null == s ? void 0 : s.name) || "",
                    login12306Pas: (null == s ? void 0 : s.pwd) || "",
                    shownLogin12306Name:
                      (null == s ? void 0 : s.inputUserName) ||
                      (null == s ? void 0 : s.name) ||
                      "",
                    passengerList12306:
                      (null == s ? void 0 : s.passengerList12306) || [],
                    memberStatus12306:
                      (null == s ? void 0 : s.memberStatus12306) || "-1",
                    auth12306Status:
                      "0" === (null == s ? void 0 : s.memberStatus12306)
                        ? 1
                        : -1,
                    mobile: null == s ? void 0 : s.mobilePhone12306,
                    userName12306: null == s ? void 0 : s.userName12306,
                    selfPassenger:
                      null == s ||
                      null === (n = s.passengerList12306) ||
                      void 0 === n
                        ? void 0
                        : n.find(function (e) {
                            return 1 == e.isSelf;
                          }),
                  }
                );
              },
            },
            effects: function () {
              return {
                login: function () {
                  return (0, t.Z)(
                    (0, u.Z)().mark(function e() {
                      return (0, u.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
              };
            },
          };
        n.Z = o;
      },
    },
  ]);
})();
