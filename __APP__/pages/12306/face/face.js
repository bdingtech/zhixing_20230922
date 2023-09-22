!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [5653],
      {
        33303: function (e, t, i) {
          var a,
            o = i(32180),
            n = i(298),
            c = i(57042),
            s = i(24460),
            r = i(21867),
            l = i(86066),
            u = i(52500),
            d = i(92954),
            h = i.n(d),
            m = i(71515),
            p = i(20592),
            f = i(79910),
            g = i(2809),
            y = i(79792),
            v = i(49120),
            T = i(21294),
            b = i(86977),
            _ = i(25391),
            C = i(81957),
            k = i(34752),
            I = i(48813),
            S = [
              { name: "检测图片质量", status: 0 },
              { name: "人证安全一致性", status: 0 },
            ],
            w = {
              1: { authType: 0, sceneId: 9 },
              2: { authType: 1, sceneId: 1 },
              3: { authType: 2, sceneId: 6 },
              4: { authType: 0, sceneId: 10 },
              5: { authType: 3, sceneId: 3 },
              6: { authType: 0, sceneId: 5 },
              7: { authType: 0, sceneId: 15 },
              8: { authType: 5, sceneId: 11 },
              9: { authType: 0, sceneId: 2 },
              11: { authType: 0, sceneId: 18 },
            },
            R =
              (0, C.h)()(
                (a = (function (e) {
                  (0, r.Z)(i, e);
                  var t = (0, l.Z)(i);
                  function i() {
                    var e, a, o;
                    return (
                      (0, c.Z)(this, i),
                      ((o = t.call(this)).pageId = y.default.isTieyou
                        ? "10650051954"
                        : "10650051952"),
                      (o.businessType =
                        1 *
                          (null === (e = (0, d.getCurrentInstance)().router) ||
                          void 0 === e ||
                          null === (a = e.params) ||
                          void 0 === a
                            ? void 0
                            : a.businessType) !=
                        1
                          ? 0
                          : 1),
                      (o.state = {
                        cameraWidth: 460,
                        cameraHeight: 640,
                        photos: [],
                        fromType: 0,
                        userName: "",
                        password: "",
                        certificationInfo: {},
                        h5Url: "",
                        rejectAuth: !1,
                        failAction: "",
                        securityTipVisible: !1,
                        countdown: 3,
                        popMask: !1,
                        popMaskTransition: !1,
                        submitLoadingVisible: !1,
                        submitLoadingStatus: S,
                        memberStatus: "",
                      }),
                      o
                    );
                  }
                  return (
                    (0, s.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          console.log("onLoad");
                          var e =
                            (0, d.getCurrentInstance)().router &&
                            (0, d.getCurrentInstance)().router.params;
                          console.log("params", e);
                          var t = e.fromType,
                            i = void 0 === t ? 0 : t,
                            a = e.userName,
                            o = void 0 === a ? "" : a,
                            n = e.password,
                            c = void 0 === n ? "" : n,
                            s = e.h5Url,
                            r = void 0 === s ? "" : s,
                            l = e.certificationInfo,
                            u = void 0 === l ? "" : l,
                            h = e.failAction,
                            m = void 0 === h ? "" : h,
                            p = e.sceneType,
                            f = void 0 === p ? 2 : p,
                            y = e.memberStatus,
                            v = void 0 === y ? "" : y;
                          this.setState({
                            fromType: +i,
                            userName: o,
                            password: c ? decodeURIComponent(c) : "",
                            h5Url: r ? decodeURIComponent(r) : "",
                            failAction: m,
                            memberStatus: v,
                          }),
                            (this.sceneType = f);
                          try {
                            if (u) {
                              var T = JSON.parse(u);
                              "[object Object]" ===
                                Object.prototype.toString.call(T) &&
                                this.setState({ certificationInfo: T });
                            }
                          } catch (e) {
                            console.log(e);
                          }
                          this.setState({
                            cameraWidth: g.ZP.windowWidth,
                            cameraHeight: g.ZP.windowHeight,
                          });
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e,
                            t = this,
                            i = this.state.rejectAuth;
                          if (y.default.isAlipay || y.default.isBaidu)
                            return h()
                              .showModal({
                                content: "小程序暂不支持该功能",
                                showCancel: !1,
                              })
                              .then(function () {
                                t.navigateBack({});
                              });
                          h().getSetting({
                            success: function (e) {
                              e &&
                              e.authSetting &&
                              e.authSetting.hasOwnProperty("scope.camera") &&
                              !e.authSetting["scope.camera"]
                                ? t.setState({ rejectAuth: !0 })
                                : (t.setState({ rejectAuth: !1 }),
                                  i &&
                                    h()
                                      .showModal({
                                        title: "提示",
                                        content: "请退出本页面重新进入",
                                        showCancel: !1,
                                      })
                                      .then(function (e) {
                                        e && e.confirm && t.navigateBack({});
                                      }));
                            },
                          }),
                            this.ubtTrace("s_trn_z_trace_10650051952", {
                              bizKey: "fc_mini_ndark_faceconfirm_loading_show",
                              exposureType: "normal",
                              type: this.businessType,
                              reason:
                                null ===
                                  (e = (0, d.getCurrentInstance)().router) ||
                                void 0 === e
                                  ? void 0
                                  : e.params.fromType,
                              sceneType: this.sceneType,
                              memberStatus: this.state.memberStatus,
                            });
                        },
                      },
                      {
                        key: "checkPhotosV2",
                        value: function (e) {
                          var t,
                            i,
                            a,
                            o,
                            n,
                            c,
                            s = this,
                            r = new Date().getTime() - (this._takeTime || 0);
                          r < 1500
                            ? setTimeout(function () {
                                s.setLoadingStatus([2, 1]);
                              }, 1500 - r)
                            : this.setLoadingStatus([2, 1]);
                          var l = { channel: "zhixing" },
                            u = e
                              ? ""
                              : T.Z.tripleDESEncrypt(
                                  JSON.stringify(
                                    this.state.photos.map(function (e) {
                                      return {
                                        image: e.imageData,
                                        quality: e.quality,
                                      };
                                    })
                                  )
                                );
                          (l.authType =
                            null === (t = w[this.state.fromType]) ||
                            void 0 === t
                              ? void 0
                              : t.authType),
                            (l.pollingkey = e || ""),
                            (l.certificationInfo = {
                              mobileNo:
                                null === (i = this.state.certificationInfo) ||
                                void 0 === i
                                  ? void 0
                                  : i.mobile,
                              userName: T.Z.tripleDESEncrypt(
                                this.state.userName
                              ),
                              userPassWord: T.Z.tripleDESEncrypt(
                                this.state.password
                              ),
                              sceneId: String(
                                null === (a = w[this.state.fromType]) ||
                                  void 0 === a
                                  ? void 0
                                  : a.sceneId
                              ),
                              terminalId: ""
                                .concat(
                                  decodeURIComponent(
                                    null ===
                                      (o = this.state.certificationInfo) ||
                                      void 0 === o
                                      ? void 0
                                      : o.name
                                  ),
                                  "#"
                                )
                                .concat(
                                  null === (n = this.state.certificationInfo) ||
                                    void 0 === n
                                    ? void 0
                                    : n.passportType,
                                  "#"
                                )
                                .concat(
                                  null === (c = this.state.certificationInfo) ||
                                    void 0 === c
                                    ? void 0
                                    : c.passportNumber
                                ),
                              imageData: u,
                            }),
                            console.log("face check params", l);
                          var m = function (e) {
                            var t, i, a, o;
                            s.hideSubmitLoading();
                            var n = s.state,
                              c = n.fromType,
                              r = n.h5Url,
                              u = n.failAction,
                              m = e.certificationResult,
                              f = e.retMessage,
                              g = e.callbackData,
                              y = l.pollingkey,
                              v =
                                null != f &&
                                f.includes("没有查询到证件号码对应的用户信息")
                                  ? 2
                                  : null;
                            s.ubtTrace("c_trn_z_10650051952", {
                              bizKey:
                                "fc_mini_ndark_faceconfirm_login_click_result",
                              exposureType: "normal",
                              type: s.businessType,
                              reason: s.state.fromType,
                              clickResult:
                                2 === m ? "fail" : 1 === m ? "succ" : "cancel",
                              sceneType: s.sceneType,
                              memberStatus: s.state.memberStatus,
                            });
                            var T = p.ET.GRAB_ORDER_FACE_DATA;
                            if (T && T.grabOrderId) {
                              var b = T.grabOrderId;
                              if (2 === m) {
                                if (
                                  (s.ubtTrace("c_trn_z_10650051952", {
                                    bizKey: "z_grab_12306vip_shualian_click",
                                    orderId: b,
                                    type: 1,
                                  }),
                                  (s.failCount = s.failCount
                                    ? s.failCount + 1
                                    : 1),
                                  s.failCount >= 2)
                                )
                                  return (
                                    h().navigateBack({ delta: 2 }),
                                    (T.isSkipFace = !0),
                                    void (p.ET.GRAB_ORDER_FACE_DATA = T)
                                  );
                              } else
                                1 === m &&
                                  s.ubtTrace("c_trn_z_10650051952", {
                                    bizKey: "z_grab_12306vip_shualian_click",
                                    orderId: b,
                                    type: 0,
                                  });
                            }
                            if (2 === m && "return" !== u)
                              return (
                                s.setState({ photos: [] }),
                                h().showToast({
                                  title: "人脸核验失败,请重试",
                                  icon: "none",
                                })
                              );
                            if (r) {
                              var _ = r,
                                C = r.indexOf("?") > -1 ? "&" : "?",
                                k = s.state.certificationInfo || {},
                                I = k.name,
                                S = k.passportNumber,
                                w = k.mobile,
                                R = k.passportType;
                              5 === c
                                ? (_ =
                                    _ +
                                    C +
                                    "userName="
                                      .concat(
                                        encodeURIComponent(I),
                                        "&idNumber="
                                      )
                                      .concat(S, "&mobile=")
                                      .concat(w, "&callbackData=")
                                      .concat(
                                        encodeURIComponent(g),
                                        "&cheackFacePollingKey="
                                      )
                                      .concat(y, "&certificationResultCode=")
                                      .concat(m, "&failCode=")
                                      .concat(v, "&canRetrieve=")
                                      .concat(1 == m ? 1 : 0))
                                : 3 === c
                                ? (_ =
                                    _ +
                                    C +
                                    "userName="
                                      .concat(
                                        encodeURIComponent(
                                          decodeURIComponent(I)
                                        ),
                                        "&idNumber="
                                      )
                                      .concat(S, "&mobile=")
                                      .concat(w, "&passportType=")
                                      .concat(+R, "&logout=1"))
                                : 2 === c
                                ? ((_ =
                                    _ +
                                    C +
                                    "certificationResultCode=".concat(m)),
                                  console.error("checkPhotos success", _))
                                : 4 == c && (_ = _ + C + "cerCode=".concat(m)),
                                (p.Bc.WEBVIEW_REFRESH_BACK_DATA = {
                                  h5Url: _,
                                  backToMini: !0,
                                  needRefresh: !0,
                                });
                            } else
                              4 === c &&
                                (p.Bc.WEBVIEW_REFRESH_BACK_DATA = {
                                  cerCode: m,
                                  needRefresh: !0,
                                });
                            s.ubtDevTrace("o_face_result", {
                              certificationResultCode: m,
                              CallbackData: g,
                              cheackFacePollingKey: y,
                              failCode: v,
                              fromType: c,
                            });
                            var N = {
                              certificationResultCode: m,
                              callbackData: g,
                              cheackFacePollingKey: y,
                              retMessage: f,
                              failCode: v,
                              fromType: c,
                            };
                            (null ===
                              (t = (0, d.getCurrentInstance)().router) ||
                            void 0 === t ||
                            null === (i = t.params) ||
                            void 0 === i
                              ? void 0
                              : i._jumpEventId) &&
                              d.eventCenter.trigger(
                                null ===
                                  (a = (0, d.getCurrentInstance)().router) ||
                                  void 0 === a ||
                                  null === (o = a.params) ||
                                  void 0 === o
                                  ? void 0
                                  : o._jumpEventId,
                                N
                              ),
                              s.navigateBack(N);
                          };
                          (0, k.kO)(l)
                            .then(function (e) {
                              console.log(e),
                                e && 1 == e.retCode
                                  ? 3 == e.certificationResult
                                    ? (console.log(e),
                                      console.log("==========="),
                                      console.log(e.pollingkey),
                                      setTimeout(function () {
                                        s.checkPhotosV2(e.pollingkey);
                                      }, 1e3 * e.rate))
                                    : 1 == e.certificationResult
                                    ? ((0, v.hideLoading)(),
                                      s.setLoadingStatus([2, 2]),
                                      m(e))
                                    : ((0, v.hideLoading)(), m(e))
                                  : ((0, v.hideLoading)(), m(e));
                            })
                            .catch(function (e) {
                              (0, v.hideLoading)(), console.log(e);
                            });
                        },
                      },
                      {
                        key: "checkPhotos",
                        value: function (e) {
                          var t = this,
                            i = new Date().getTime() - (this._takeTime || 0);
                          i < 1500
                            ? setTimeout(function () {
                                t.setLoadingStatus([2, 1]);
                              }, 1500 - i)
                            : this.setLoadingStatus([2, 1]);
                          var a = this.state.certificationInfo,
                            o = {};
                          (o.UserName = this.state.userName),
                            (o.Password = this.state.password),
                            (o.ImageDataList = e
                              ? []
                              : this.state.photos.map(function (e) {
                                  return {
                                    Image: e.imageData,
                                    Quality: e.quality,
                                    Width: e.width,
                                    Height: e.height,
                                    RECT: e.rect,
                                  };
                                }));
                          var n = (new Date().getTime() / 1e3).toFixed();
                          (o.SignInfo = {
                            SignSource:
                              "GetTrainImageAuthenticationResult.ctripwx",
                            SignTimeStamp: n + "",
                            Sign: T.Z.MD5(
                              "".concat(n, "07daaf60ac9182ecc4ef1e06c62587d8")
                            ).toLowerCase(),
                          }),
                            (o.FromType = this.state.fromType),
                            (o.PollingKey = e || ""),
                            !f.Z.isEmptyObject(a) &&
                              a.name &&
                              (o.CertificationInfo = {
                                AccountPassportName: decodeURIComponent(
                                  this.state.certificationInfo.name
                                ),
                                AccountPassportType:
                                  +this.state.certificationInfo.passportType,
                                AccountPassportNumber:
                                  this.state.certificationInfo.passportNumber,
                                MobileNo: this.state.certificationInfo.mobile,
                              }),
                            console.log("face check params", o);
                          var c = function (e) {
                            var i, a, n, c;
                            t.hideSubmitLoading();
                            var s = t.state,
                              r = s.fromType,
                              l = s.h5Url,
                              u = s.failAction,
                              m = e.CertificationResult,
                              f = e.RetMessage,
                              g = e.FailCode,
                              y = e.CallbackData,
                              v = o.PollingKey;
                            t.ubtTrace("c_trn_z_10650051952", {
                              bizKey:
                                "fc_mini_ndark_faceconfirm_login_click_result",
                              exposureType: "normal",
                              type: t.businessType,
                              reason: t.state.fromType,
                              clickResult:
                                2 === m ? "fail" : 1 === m ? "succ" : "cancel",
                              sceneType: t.sceneType,
                              memberStatus: t.state.memberStatus,
                            });
                            var T = p.ET.GRAB_ORDER_FACE_DATA;
                            if (T && T.grabOrderId) {
                              var b = T.grabOrderId;
                              if (2 === m) {
                                if (
                                  (t.ubtTrace("c_trn_z_10650051952", {
                                    bizKey: "z_grab_12306vip_shualian_click",
                                    orderId: b,
                                    type: 1,
                                  }),
                                  (t.failCount = t.failCount
                                    ? t.failCount + 1
                                    : 1),
                                  t.failCount >= 2)
                                )
                                  return (
                                    h().navigateBack({ delta: 2 }),
                                    (T.isSkipFace = !0),
                                    void (p.ET.GRAB_ORDER_FACE_DATA = T)
                                  );
                              } else
                                1 === m &&
                                  t.ubtTrace("c_trn_z_10650051952", {
                                    bizKey: "z_grab_12306vip_shualian_click",
                                    orderId: b,
                                    type: 0,
                                  });
                            }
                            if (2 === m && "return" !== u)
                              return (
                                t.setState({ photos: [] }),
                                h().showToast({
                                  title: "人脸核验失败,请重试",
                                  icon: "none",
                                })
                              );
                            if (l) {
                              var _ = l,
                                C = l.indexOf("?") > -1 ? "&" : "?",
                                k = t.state.certificationInfo || {},
                                I = k.name,
                                S = k.passportNumber,
                                w = k.mobile,
                                R = k.passportType;
                              5 === r
                                ? (_ =
                                    _ +
                                    C +
                                    "userName="
                                      .concat(
                                        encodeURIComponent(I),
                                        "&idNumber="
                                      )
                                      .concat(S, "&mobile=")
                                      .concat(w, "&callbackData=")
                                      .concat(
                                        encodeURIComponent(y),
                                        "&cheackFacePollingKey="
                                      )
                                      .concat(v, "&certificationResultCode=")
                                      .concat(m, "&failCode=")
                                      .concat(g, "&canRetrieve=")
                                      .concat(1 == m ? 1 : 0))
                                : 3 === r
                                ? (_ =
                                    _ +
                                    C +
                                    "userName="
                                      .concat(
                                        encodeURIComponent(
                                          decodeURIComponent(I)
                                        ),
                                        "&idNumber="
                                      )
                                      .concat(S, "&mobile=")
                                      .concat(w, "&passportType=")
                                      .concat(+R, "&logout=1"))
                                : 2 === r
                                ? ((_ =
                                    _ +
                                    C +
                                    "certificationResultCode=".concat(m)),
                                  console.error("checkPhotos success", _))
                                : 4 == r && (_ = _ + C + "cerCode=".concat(m)),
                                (p.Bc.WEBVIEW_REFRESH_BACK_DATA = {
                                  h5Url: _,
                                  backToMini: !0,
                                  needRefresh: !0,
                                });
                            } else
                              4 === r &&
                                (p.Bc.WEBVIEW_REFRESH_BACK_DATA = {
                                  cerCode: m,
                                  needRefresh: !0,
                                });
                            t.ubtDevTrace("o_face_result", {
                              certificationResultCode: m,
                              CallbackData: y,
                              cheackFacePollingKey: v,
                              failCode: g,
                              fromType: r,
                            });
                            var N = {
                              certificationResultCode: m,
                              callbackData: y,
                              cheackFacePollingKey: v,
                              retMessage: f,
                              failCode: g,
                              fromType: r,
                            };
                            (null ===
                              (i = (0, d.getCurrentInstance)().router) ||
                            void 0 === i ||
                            null === (a = i.params) ||
                            void 0 === a
                              ? void 0
                              : a._jumpEventId) &&
                              d.eventCenter.trigger(
                                null ===
                                  (n = (0, d.getCurrentInstance)().router) ||
                                  void 0 === n ||
                                  null === (c = n.params) ||
                                  void 0 === c
                                  ? void 0
                                  : c._jumpEventId,
                                N
                              ),
                              t.navigateBack(N);
                          };
                          (0, k.R9)(o)
                            .then(function (e) {
                              console.log(e),
                                e && 1 == e.RetCode
                                  ? 3 == e.CertificationResult
                                    ? (console.log(e),
                                      console.log("==========="),
                                      console.log(e.PollingKey),
                                      setTimeout(function () {
                                        t.checkPhotos(e.PollingKey);
                                      }, 1e3 * e.Rate))
                                    : 1 == e.CertificationResult
                                    ? ((0, v.hideLoading)(),
                                      t.setLoadingStatus([2, 2]),
                                      c(e))
                                    : ((0, v.hideLoading)(), c(e))
                                  : ((0, v.hideLoading)(), c(e));
                            })
                            .catch(function (e) {
                              (0, v.hideLoading)(), console.log(e);
                            });
                        },
                      },
                      {
                        key: "handlePhoto",
                        value: function (e) {
                          var t = this;
                          h().compressImage({
                            src: e.tempImagePath,
                            quality: 40,
                            success: function (i) {
                              h()
                                .getFileSystemManager()
                                .readFile({
                                  filePath: i.tempFilePath,
                                  encoding: "base64",
                                  success: function (i) {
                                    var a = t.state.photos;
                                    if (
                                      (a.push({
                                        imageData: i.data,
                                        height: e.height + "",
                                        width: e.width + "",
                                        quality: "40",
                                        rect: ""
                                          .concat(
                                            (0.237 * e.width).toFixed(),
                                            ","
                                          )
                                          .concat(
                                            (0.278 * e.height).toFixed(),
                                            ","
                                          )
                                          .concat(
                                            (0.729 * e.width).toFixed(),
                                            ","
                                          )
                                          .concat((0.579 * e.height).toFixed()),
                                      }),
                                      t.setData({ photos: a }),
                                      a.length < 2)
                                    )
                                      setTimeout(function () {
                                        t.takePhoto(a.length);
                                      }, 500);
                                    else {
                                      if (
                                        (0, b.Uy)(
                                          "isUseNew12306FaceAuthService"
                                        )
                                      )
                                        return void t.checkPhotosV2();
                                      t.checkPhotos();
                                    }
                                  },
                                  fail: function () {
                                    (0, v.hideLoading)();
                                  },
                                });
                            },
                            fail: function () {},
                          });
                        },
                      },
                      {
                        key: "takePhoto",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0,
                            i = this.state.securityTipVisible;
                          if (!i) {
                            var a = h().createCameraContext();
                            a.takePhoto({
                              quality: "high",
                              success: function (i) {
                                i.tempImagePath && i.tempImagePath.length > 0
                                  ? (console.log("res", i),
                                    (0, v.hideLoading)(),
                                    e.showSubmitLoading(),
                                    e.setLoadingStatus([1]),
                                    0 === t &&
                                      (e._takeTime = new Date().getTime()),
                                    e.handlePhoto(i))
                                  : (0, v.hideLoading)();
                              },
                              fail: function () {
                                (0, v.hideLoading)();
                              },
                              complete: function () {},
                            }),
                              0 === t &&
                                this.ubtTrace("c_trn_z_10650051952", {
                                  bizKey:
                                    "fc_mini_ndark_faceconfirm_login_click",
                                  exposureType: "normal",
                                  type: this.businessType,
                                  reason: this.state.fromType,
                                  sceneType: this.sceneType,
                                  memberStatus: this.state.memberStatus,
                                });
                          }
                        },
                      },
                      {
                        key: "onCameraInit",
                        value: function (e) {
                          console.log("camera init ok", e),
                            this.showSecurityTip();
                        },
                      },
                      {
                        key: "onCameraError",
                        value: function (e) {
                          console.error("camera init error", e),
                            e &&
                              e.detail &&
                              e.detail.errMsg &&
                              e.detail.errMsg.indexOf("auth") > -1 &&
                              (h().showToast({
                                title:
                                  "请允许使用摄像头权限，否则该功能无法正常使用，敬请谅解。",
                                icon: "none",
                                duration: 3e3,
                              }),
                              this.setState({ rejectAuth: !0 }));
                        },
                      },
                      {
                        key: "showSecurityTip",
                        value: function () {
                          this.setState({ securityTipVisible: !0 }),
                            this.doCountDown();
                        },
                      },
                      {
                        key: "doCountDown",
                        value: function () {
                          var e = this,
                            t = this.state.countdown;
                          t > 0
                            ? (this._timer = setTimeout(function () {
                                e.setState({ countdown: t - 1 }, function () {
                                  e.doCountDown();
                                });
                              }, 1e3))
                            : (this._timer && clearTimeout(this._timer),
                              this.setState({ securityTipVisible: !1 }));
                        },
                      },
                      {
                        key: "showSubmitLoading",
                        value: function () {
                          var e = this;
                          this.setState({
                            popMask: !0,
                            submitLoadingVisible: !0,
                          }),
                            setTimeout(function () {
                              e.setState({ popMaskTransition: !0 });
                            }, 10);
                        },
                      },
                      {
                        key: "hideSubmitLoading",
                        value: function () {
                          this.setState({
                            popMask: !1,
                            popMaskTransition: !1,
                            submitLoadingVisible: !1,
                            submitLoadingStatus: S,
                          });
                        },
                      },
                      {
                        key: "setLoadingStatus",
                        value: function (e) {
                          var t = this.state.submitLoadingStatus;
                          this.setState({
                            submitLoadingStatus: t.map(function (t, i) {
                              return (0,
                              n.Z)((0, n.Z)({}, t), {}, { status: e[i] });
                            }),
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          if (!_.ZP.getScanFaceWorkable())
                            return (0, I.tZ)(m.View, {
                              className: "face-tip",
                              id: "AgAz",
                              style: { textAlign: "center" },
                              children: "暂不支持 敬请期待",
                            });
                          var e = this.state,
                            t = e.cameraHeight,
                            i = e.cameraWidth,
                            a = e.rejectAuth,
                            o = e.securityTipVisible,
                            n = e.countdown,
                            c = e.popMask,
                            s = e.popMaskTransition,
                            r = e.submitLoadingVisible,
                            l = e.submitLoadingStatus;
                          return (0, I.tZ)(m.Block, {
                            children: (0, I.BX)(m.View, {
                              children: [
                                (0, I.tZ)(m.Camera, {
                                  devicePosition: "front",
                                  flash: "off",
                                  frameSize: "small",
                                  style: "height:"
                                    .concat(t, "px; width:")
                                    .concat(i),
                                  onInitDone: this.onCameraInit,
                                  onError: this.onCameraError,
                                  children: (0, I.BX)(m.CoverView, {
                                    className: "image-txt",
                                    children: [
                                      (0, I.tZ)(m.CoverView, {
                                        className: "tit",
                                        children: "拍摄时请确保",
                                      }),
                                      (0, I.tZ)(m.CoverView, {
                                        className: "txt",
                                        children:
                                          "1、光线充足。若光线过暗，请调整环境光线",
                                      }),
                                      (0, I.tZ)(m.CoverView, {
                                        className: "tit",
                                        children:
                                          "2、面部无反光且清晰，无倾斜，切勿遮挡面部",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, I.tZ)(m.View, {
                                  className: "image-avatar",
                                  children: (0, I.tZ)(m.Image, {
                                    className: "img",
                                    src: "https://images3.c-ctrip.com/train/dulujie/paizhaoguifan%20@3x.png",
                                  }),
                                }),
                                !a &&
                                  (0, I.tZ)(m.View, {
                                    className: "btn",
                                    id: "AgAy",
                                    onClick: this.takePhoto.bind(this, 0),
                                    hoverClass: "btn-hover",
                                    children: (0, I.tZ)(m.Image, {
                                      src: "https://images3.c-ctrip.com/train/dulujie/btn_take%20photo@3x.png",
                                    }),
                                  }),
                                a &&
                                  (0, I.tZ)(m.View, {
                                    className: "reject-btn",
                                    hoverClass: "btn-hover",
                                    children: (0, I.tZ)(m.Button, {
                                      openType: "openSetting",
                                      children: " 立即授权 ",
                                    }),
                                  }),
                                o &&
                                  (0, I.BX)(m.View, {
                                    className: "security-tip",
                                    children: [
                                      (0, I.tZ)(m.Image, {
                                        className: "security-img",
                                        src: "https://images3.c-ctrip.com/train/dulujie/security.png",
                                      }),
                                      (0, I.tZ)(m.View, {
                                        className: "notice",
                                        children:
                                          "为保证您的账号安全，请拍摄您",
                                      }),
                                      (0, I.tZ)(m.View, {
                                        className: "notice",
                                        children: "本人的面部照片以完成核验",
                                      }),
                                      (0, I.BX)(m.View, {
                                        className: "countdown",
                                        children: [
                                          (0, I.tZ)(m.View, {
                                            className: "int",
                                            children: n,
                                          }),
                                          (0, I.tZ)(m.View, {
                                            children: "秒后开始验证",
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(m.View, {
                                        className: "tip",
                                        children: [
                                          (0, I.tZ)(m.CoverImage, {
                                            className: "img",
                                            src: "https://images3.c-ctrip.com/train/dulujie/Kirby-Yicon-15786@3x.png",
                                          }),
                                          (0, I.tZ)(m.View, {
                                            children:
                                              "全程加密处理，保护您的隐私安全",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                c &&
                                  (0, I.tZ)(m.View, {
                                    className: "pop-mask ".concat(
                                      s ? "active" : ""
                                    ),
                                  }),
                                r &&
                                  (0, I.BX)(m.View, {
                                    className: "pop-submit",
                                    children: [
                                      (0, I.BX)(m.View, {
                                        className: "box",
                                        children: [
                                          (0, I.tZ)(m.Image, {
                                            className: "head-img",
                                            src: "https://images3.c-ctrip.com/train/dulujie/saolianjiance1.png",
                                          }),
                                          (0, I.tZ)(m.Image, {
                                            className: "line-img",
                                            src: "https://images3.c-ctrip.com/train/dulujie/line.png",
                                          }),
                                        ],
                                      }),
                                      l.map(function (e) {
                                        return (0,
                                        I.BX)(m.View, { className: "row", children: [(0, I.tZ)(m.View, { children: e.name }), 1 === e.status && (0, I.tZ)(m.View, { className: "loading" }), 2 === e.status && (0, I.tZ)(m.View, { className: "done" })] }, "name");
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(u.default.Component))
              ) || a;
          Page(
            (0, o.createPageConfig)(
              R,
              "pages/12306/face/face",
              { root: { cn: [] } },
              { navigationBarTitleText: "验证" } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [37013, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(33303);
        }),
          e.O();
      },
    ]);
})();
