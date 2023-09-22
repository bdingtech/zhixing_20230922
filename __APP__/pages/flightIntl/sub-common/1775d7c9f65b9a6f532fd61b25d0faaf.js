!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [49608],
    {
      13975: function (e, n, t) {
        t.d(n, {
          $K: function () {
            return m;
          },
          AA: function () {
            return g;
          },
          AV: function () {
            return Q;
          },
          Al: function () {
            return M;
          },
          CI: function () {
            return J;
          },
          DA: function () {
            return te;
          },
          IP: function () {
            return ne;
          },
          IW: function () {
            return Y;
          },
          JJ: function () {
            return ce;
          },
          Km: function () {
            return u;
          },
          L4: function () {
            return s;
          },
          LJ: function () {
            return x;
          },
          Li: function () {
            return S;
          },
          Nd: function () {
            return P;
          },
          O6: function () {
            return N;
          },
          Of: function () {
            return ee;
          },
          P4: function () {
            return T;
          },
          PU: function () {
            return k;
          },
          Pk: function () {
            return V;
          },
          Q8: function () {
            return A;
          },
          R0: function () {
            return F;
          },
          Sd: function () {
            return y;
          },
          TF: function () {
            return I;
          },
          Tx: function () {
            return H;
          },
          U6: function () {
            return v;
          },
          Ut: function () {
            return d;
          },
          Ux: function () {
            return O;
          },
          VH: function () {
            return z;
          },
          XY: function () {
            return U;
          },
          Y9: function () {
            return K;
          },
          YU: function () {
            return L;
          },
          Yb: function () {
            return o;
          },
          _S: function () {
            return $;
          },
          a5: function () {
            return _;
          },
          b$: function () {
            return Z;
          },
          cj: function () {
            return ae;
          },
          dB: function () {
            return W;
          },
          dV: function () {
            return b;
          },
          eS: function () {
            return f;
          },
          en: function () {
            return R;
          },
          f1: function () {
            return w;
          },
          hv: function () {
            return i;
          },
          jv: function () {
            return C;
          },
          km: function () {
            return q;
          },
          oB: function () {
            return D;
          },
          rl: function () {
            return p;
          },
          rn: function () {
            return j;
          },
          ry: function () {
            return h;
          },
          uv: function () {
            return B;
          },
          xV: function () {
            return X;
          },
          xw: function () {
            return E;
          },
          yD: function () {
            return G;
          },
          zC: function () {
            return re;
          },
        });
        var c = t(79792),
          r = t(17377),
          a = "17094",
          l = "17766",
          i = (0, r.ZP)({
            serviceCode: "18366",
            channel: c.default.flight_channel,
            path: "packageSearchDetail",
          }),
          h = (0, r.ZP)({
            serviceCode: "18366",
            channel: c.default.flight_channel,
            path: "xProductSearchList",
          }),
          u = (0, r.ZP)({
            serviceCode: "18366",
            channel: c.default.flight_channel,
            path: "xProductOrderDetail",
          }),
          o = (0, r.ZP)({
            serviceCode: "18366",
            channel: c.default.flight_channel,
            path: "xProductQueryCancellation",
          }),
          f = (0, r.ZP)({
            serviceCode: "18366",
            channel: c.default.flight_channel,
            path: "xProductSubmitCancellation",
          }),
          d = (0, r.ZP)({
            serviceCode: "18366",
            channel: c.default.flight_channel,
            path: "receiveDelayReturnCash",
          }),
          s = (0, r.ZP)({
            serviceCode: a,
            channel: c.default.flight_channel,
            path: "PlaceOrder",
            correctVersion: "989",
            encryptFlag: 1,
          }),
          g = "710018",
          P = (0, r.ZP)({
            serviceCode: a,
            channel: c.default.flight_channel,
            path: "OrderDetail",
            correctVersion: g,
          }),
          p = (0, r.ZP)({
            serviceCode: l,
            channel: c.default.flight_channel,
            path: "GetProductDetail",
            correctVersion: "710024",
          }),
          C = (0, r.ZP)({
            serviceCode: l,
            channel: c.default.flight_channel,
            path: "GetSingleFlightDetail",
            correctVersion: "710024",
          }),
          v = (0, r.ZP)({
            serviceCode: l,
            channel: c.default.flight_channel,
            path: "GetHybridDetail",
          }),
          _ = (0, r.ZP)({
            serviceCode: l,
            channel: c.default.flight_channel,
            path: "GetMultiFlightDetail",
            correctVersion: g,
          }),
          Z = (0, r.ZP)({
            serviceCode: l,
            channel: c.default.flight_channel,
            path: "GetRoundFlightDetail",
            correctVersion: g,
          }),
          V = (0, r.ZP)({
            serviceCode: "18497",
            channel: c.default.flight_channel,
            path: "getVipPublicComponentInfo",
            correctVersion: g,
          }),
          G = (0, r.ZP)({
            serviceCode: "18366",
            channel: c.default.flight_channel,
            path: "rebookCondition",
            correctVersion: "710024",
          }),
          b = (0, r.ZP)({
            serviceCode: "18366",
            channel: c.default.flight_channel,
            path: "ticketReturnQuery",
            correctVersion: g,
          }),
          y = (0, r.ZP)({
            serviceCode: "16484",
            channel: c.default.flight_channel,
            path: "GetChatScene",
            correctVersion: g,
          }),
          D = (0, r.ZP)({
            serviceCode: "17420",
            channel: c.default.flight_channel,
            path: "receiveCouponByScene",
          }),
          m = (0, r.ZP)({
            serviceCode: "17420",
            channel: c.default.flight_channel,
            path: "collectCash",
          }),
          k = (0, r.ZP)({
            serviceCode: "17420",
            channel: c.default.flight_channel,
            path: "getReturnMoneyInfo",
          }),
          F = (0, r.ZP)({
            serviceCode: "17420",
            channel: c.default.flight_channel,
            path: "savingPotDetail",
          }),
          O = (0, r.ZP)({
            serviceCode: "17420",
            channel: c.default.flight_channel,
            path: "issueCashBack",
          }),
          S = (0, r.ZP)({
            serviceCode: "17420",
            channel: c.default.flight_channel,
            path: "issueOrderBoostPoints",
          }),
          x = (0, r.ZP)({
            serviceCode: "19363",
            channel: c.default.flight_channel,
            path: "GrabPriceRecommend",
          }),
          R = (0, r.ZP)({
            serviceCode: "17420",
            channel: c.default.flight_channel,
            path: "open",
          }),
          A = (0, r.ZP)({
            serviceCode: "17420",
            channel: c.default.flight_channel,
            path: "guessPriceTrend",
          }),
          w = (0, r.ZP)({
            serviceCode: "17420",
            channel: c.default.flight_channel,
            path: "guessPriceTrendShare",
          }),
          B = (0, r.ZP)({
            serviceCode: "17420",
            channel: c.default.flight_channel,
            path: "GetCouponByCredit",
            correctVersion: "31",
          }),
          L = (0, r.ZP)({
            serviceCode: "15987",
            channel: c.default.flight_channel,
            path: "GetTrainRecommendation",
          }),
          T = (0, r.ZP)({
            serviceCode: "17766",
            channel: c.default.flight_channel,
            path: "GetHybridList",
          }),
          U = (0, r.ZP)({
            serviceCode: "19363",
            channel: c.default.flight_channel,
            path: "GetGrabQA",
          }),
          I = (0, r.ZP)({
            serviceCode: "17766",
            channel: c.default.flight_channel,
            path: "FavCheck",
          }),
          J = (0, r.ZP)({
            serviceCode: "17766",
            channel: c.default.flight_channel,
            path: "GetLowPriceFlights",
          }),
          Q = (0, r.ZP)({
            serviceCode: "15987",
            channel: c.default.flight_channel,
            path: "HazyDestinationSearch",
          }),
          H = (0, r.ZP)({
            serviceCode: "17766",
            channel: c.default.flight_channel,
            path: "GetMultiFlights",
          }),
          Y = (0, r.ZP)({
            serviceCode: "17766",
            channel: c.default.flight_channel,
            path: "GetRoundFlights",
          }),
          M = (0, r.ZP)({
            serviceCode: "16484",
            channel: c.default.flight_channel,
            path: "submitCancelReason",
          }),
          j = (0, r.ZP)({
            serviceCode: "17094",
            channel: c.default.flight_channel,
            path: "cancelOrder",
          }),
          z = (0, r.ZP)({
            serviceCode: "17094",
            channel: c.default.flight_channel,
            path: "bookingVerify",
            encryptFlag: 1,
          }),
          K = (0, r.ZP)({
            serviceCode: "18366",
            channel: c.default.flight_channel,
            path: "refundQuery",
          }),
          $ = (0, r.ZP)({
            serviceCode: "20713",
            channel: c.default.flight_channel,
            path: "listBanners",
            correctVersion: "710010",
          }),
          N = (0, r.ZP)({
            serviceCode: "19363",
            channel: c.default.flight_channel,
            path: "modifyGrabOrder",
          }),
          W = (0, r.ZP)({
            serviceCode: "19363",
            channel: c.default.flight_channel,
            path: "grabOrderDetail",
          }),
          X = (0, r.ZP)({
            serviceCode: "19363",
            channel: c.default.flight_channel,
            path: "GrabOrderCheck",
          }),
          q = (0, r.ZP)({
            serviceCode: "19363",
            channel: c.default.flight_channel,
            path: "CreateGrabOrder",
            encryptFlag: 1,
          }),
          E = (0, r.ZP)({
            serviceCode: "15987",
            channel: c.default.flight_channel,
            path: "ViewPageUsers",
          }),
          ee = (0, r.ZP)({
            serviceCode: "18366",
            channel: c.default.flight_channel,
            path: "rebookCancel",
            correctVersion: "709988",
          }),
          ne = (0, r.ZP)({
            serviceCode: "18366",
            channel: c.default.flight_channel,
            path: "agreeProtectFlight",
            correctVersion: "709988",
          }),
          te = (0, r.ZP)({
            serviceCode: "20713",
            channel: c.default.flight_channel,
            path: "getGrowthPlanProgress",
          }),
          ce = (0, r.ZP)({
            serviceCode: "16586",
            channel: c.default.flight_channel,
            path: "prepareAddAirplanePassenger",
          }),
          re = (0, r.ZP)({
            serviceCode: "16586",
            channel: c.default.flight_channel,
            path: "addTempAirplanePassenger",
          }),
          ae = (0, r.ZP)({
            serviceCode: "15987",
            channel: c.default.flight_channel,
            path: "RecommendPassenger",
          });
      },
    },
  ]);
})();
