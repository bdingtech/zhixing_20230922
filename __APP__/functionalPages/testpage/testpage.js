!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [51520],
      {
        39811: function (e, t, n) {
          var i,
            a = n(32180),
            o = n(79301),
            s = n(95308),
            c = n(298),
            l = n(57042),
            r = n(24460),
            h = n(21867),
            d = n(86066),
            m = n(52500),
            u = n(71515),
            g = n(92954),
            f = n.n(g),
            p = n(79792),
            N = (n(45553), n(18783)),
            w = n(2809),
            b = n(49120),
            v = n(42151),
            T = n(62607),
            y = n(81341),
            C = n(21999),
            S = n(50238),
            Z = n(81957),
            k = n(34229),
            x = n(94190),
            B = n(25391),
            V = n(96158),
            X = n(93415),
            I = n(48813),
            L = "SMART_HOLD_DEBUG",
            E =
              (0, Z.h)()(
                (i = (function (e) {
                  (0, h.Z)(n, e);
                  var t = (0, d.Z)(n);
                  function n() {
                    var e;
                    return (
                      (0, l.Z)(this, n),
                      ((e = t.call(this)).pageId = p.default.isTieyou
                        ? "10650012155"
                        : "10650012154"),
                      (e.state = {
                        env: "",
                        canaryIdc: "",
                        debugMode: !1,
                        debugSmartHold: !1,
                        systemInfo: {},
                        clientID: "",
                        openid: "",
                        phoneNumber: "",
                        mask: !1,
                        maskType: !1,
                        transition: !1,
                        showSystemInfo: !1,
                        showCidDialog: !1,
                        inputDialogValue: "",
                        inputDialogShowType: "none",
                        subEnv: "",
                        showEnvSelector: !1,
                        showColonySelector: !1,
                        storageInfo: "",
                        storageKeys: [],
                        sharePictureWorkable: !1,
                        scanFaceWorkable: !1,
                        closeGrabRateReLaunch: !1,
                        showHotelBeetle: !1,
                        capturePacketProxy: !1,
                        isEarthWandering: !1,
                      }),
                      e
                    );
                  }
                  return (
                    (0, r.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.init(), this.getSystemInfo();
                        },
                      },
                      {
                        key: "init",
                        value: function () {
                          var e = T.uG.get();
                          this.setState({
                            clientID: N.ZP.cid || "",
                            openid: N.ZP.openid || "",
                            phoneNumber: N.ZP.userName || "",
                            env: f().getStorageSync("GLOBAL_ENV") || "prod",
                            canaryIdc: f().getStorageSync("GLOBAL_CANARY_IDC"),
                            subEnv:
                              f().getStorageSync("GLOBAL_FAT_SUBENV") || "",
                            grabListVersion:
                              f().getStorageSync("GLOBAL_GRAB_LIST_VERSION") ||
                              "cid",
                            debugMode: __wxConfig && __wxConfig.debug,
                            debugSmartHold: f().getStorageSync(L) || !1,
                            encryptClosed: y.OG.get() || !1,
                            sharePictureWorkable: y.J8.get() || !1,
                            scanFaceWorkable: y.QV.get() || !1,
                            closeGrabRateReLaunch: y.OO.get() || !1,
                            showHotelBeetle:
                              "devtools" === w.ZP.platform || e.showHotelBeetle,
                            capturePacketProxy: y.lO.get() || !1,
                            isEarthWandering: y.Gp.get() || !1,
                          }),
                            this.getStorageInfo();
                        },
                      },
                      {
                        key: "switchGlobalEnv",
                        value: function (e) {
                          var t = this;
                          this.state.env !== e &&
                            f().showModal({
                              title: "提示",
                              content: "正在切换到 ".concat(
                                "prod" === e
                                  ? "生产"
                                  : "canary" === e
                                  ? "堡垒"
                                  : e,
                                " 环境,切换后将关闭小程序，需要重新打开"
                              ),
                              success: function (n) {
                                if (n.confirm)
                                  try {
                                    f().setStorageSync("GLOBAL_ENV", e),
                                      t.setState({ env: e }),
                                      "canary" != e ||
                                        f().getStorageSync(
                                          "GLOBAL_CANARY_IDC"
                                        ) ||
                                        t._switchGlobalColony();
                                  } catch (e) {
                                    console.log(e);
                                  }
                                else n.cancel;
                              },
                              confirmText: "切换",
                            });
                        },
                      },
                      {
                        key: "switchGrabListVersion",
                        value: function (e) {
                          this.state.grabListVersion !== e &&
                            (f().setStorageSync("GLOBAL_GRAB_LIST_VERSION", e),
                            this.setState({ grabListVersion: e }));
                        },
                      },
                      {
                        key: "_switchGlobalColony",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "SHARB";
                          f().setStorageSync("GLOBAL_CANARY_IDC", e),
                            this.setState({ canaryIdc: e }),
                            (0, v.lo)(e);
                        },
                      },
                      {
                        key: "switchGlobalColony",
                        value: function (e) {
                          var t = this;
                          if (this.state.canaryIdc !== e) {
                            var n = "不指定堡垒集群";
                            e &&
                              (n = "正在切换到堡垒环境之 ".concat(e, " 集群")),
                              f().showModal({
                                title: "提示",
                                content: n,
                                success: function (n) {
                                  if (n.confirm)
                                    try {
                                      t._switchGlobalColony(e);
                                    } catch (e) {
                                      console.log(e);
                                    }
                                  else n.cancel;
                                },
                                confirmText: "切换",
                              });
                          }
                        },
                      },
                      {
                        key: "debugModeChange",
                        value: function (e) {
                          f().setEnableDebug({ enableDebug: e }),
                            this.setState({ debugMode: e });
                        },
                      },
                      {
                        key: "debugEncryptChange",
                        value: function (e) {
                          y.OG.set(e), this.setState({ encryptClosed: e });
                        },
                      },
                      {
                        key: "debugSecSkillChange",
                        value: function () {
                          var e = this.$secSkillInput.value;
                          x.XK.set(e || 10),
                            (0, b.showToast)("设置完成，请重启小程序");
                        },
                      },
                      {
                        key: "debug12306PreCheckChange",
                        value: function () {
                          var e = this.$12306PreCheckInput.value;
                          x.a7.set(e || 15),
                            (0, b.showToast)("设置完成，请重启小程序");
                        },
                      },
                      {
                        key: "debugSmartHoldChange",
                        value: function (e) {
                          f().setStorageSync(L, e),
                            this.setState({ debugSmartHold: e });
                        },
                      },
                      {
                        key: "copyToClipboard",
                        value: function (e) {
                          f().setClipboardData({
                            data: e,
                            success: function () {
                              (0, b.showToast)("复制成功");
                            },
                            fail: function (e) {
                              (0, b.showModal)(
                                "复制失败，原因：" + JSON.stringify(e)
                              );
                            },
                          });
                        },
                      },
                      {
                        key: "getSystemInfo",
                        value: function () {
                          var e = this;
                          if (
                            (f().getSystemInfo({
                              success: function (t) {
                                e.setState({
                                  systemInfo: (0, c.Z)(
                                    (0, c.Z)({}, t),
                                    {},
                                    { TaroVersion: p.default.taroVersion }
                                  ),
                                });
                              },
                            }),
                            p.default.isWechat)
                          )
                            try {
                              this.setState({
                                buildVersion:
                                  (wx && wx.buildVersion) || "暂无信息",
                              });
                            } catch (e) {
                              this.setState({ buildVersion: "获取信息报错" });
                            }
                        },
                      },
                      {
                        key: "getStorageInfo",
                        value: function () {
                          var e = this;
                          f().getStorageInfo({
                            success: function (t) {
                              var n = t.currentSize,
                                i = t.limitSize,
                                a = "("
                                  .concat((n / 1024).toFixed(2), "MB/")
                                  .concat((i / 1024).toFixed(2), "MB)");
                              e.setState({
                                storageInfo: a,
                                storageKeys: t.keys,
                              }),
                                console.log("storageKeys", t.keys);
                            },
                          });
                        },
                      },
                      {
                        key: "onClearStorage",
                        value: function () {
                          var e = this;
                          (0, b.showModal)({
                            title: "提示",
                            content:
                              "清除本地缓存？(clientId, 用户登陆信息，访问环境信息, 通用配置不会被清除)",
                            showCancel: !0,
                            cancelColor: "#999999",
                            success: function (t) {
                              t.confirm && e.doClearStorage();
                            },
                          });
                        },
                      },
                      {
                        key: "doClearStorage",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e() {
                              var t, n;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        (0, b.showLoading)();
                                        try {
                                          (t = this.state.storageKeys),
                                            (n = [
                                              "__plugins__/wx104a1a20c3f81ec2/WEWORK_STORAGE_CACHE",
                                              "__plugins__/wx104a1a20c3f81ec2/WEWORK_NS_KEY",
                                              "__plugins__/wx4d2deeab3aed6e5a/WEWORK_STORAGE_CACHE",
                                              "__plugins__/wx4d2deeab3aed6e5a/WEWORK_NS_KEY",
                                              "clientID",
                                              "auth",
                                              "duid",
                                              "userName",
                                              "TRAIN_BOOK_STORE",
                                              "openid",
                                              "SECRET_TOKEN",
                                              "GROUP_ID",
                                              "UNION_ID",
                                              "SECRET_TOKEN_UPDATE_TIME",
                                              "zhixingwx_GlobalConfig",
                                              "launchSourceStorage",
                                              "ABTestingManager_NEW",
                                              "GLOBAL_CANARY_IDC",
                                              "GLOBAL_ENV",
                                            ]),
                                            t.forEach(function (e) {
                                              n.includes(e) ||
                                                f().removeStorageSync(e);
                                            }),
                                            this.init();
                                        } catch (e) {
                                          (0, b.showToast)("清除失败");
                                        } finally {
                                          (0, b.hideLoading)();
                                        }
                                      case 2:
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
                        key: "onUploadImage",
                        value: function () {
                          var e = this;
                          (0, S.Ix)({ count: 9 }).then(function (t) {
                            e.showCommonDrawer({
                              title: "您已上传以下图片",
                              content: function () {
                                return (0, I.BX)(u.View, {
                                  className: "train-common-drawer-bd",
                                  children: [
                                    t.map(function (t, n) {
                                      return (0, I.tZ)(u.View, {
                                        className: "desc",
                                        onClick: function (n) {
                                          n.stopPropagation(),
                                            e.copyToClipboard(t.imgUrl);
                                        },
                                        children: t.imgUrl,
                                      });
                                    }),
                                    (0, I.BX)(u.View, {
                                      className:
                                        "flex-align-items-center color-primary",
                                      onClick: function () {
                                        return e.copyToClipboard(
                                          t
                                            .map(function (e) {
                                              return e.imgUrl;
                                            })
                                            .join("\n")
                                        );
                                      },
                                      style: { marginTop: "20rpx" },
                                      children: [
                                        (0, I.tZ)(u.Text, {
                                          className: "iconfont2 ifont2-copy",
                                          style: { marginRight: "6rpx" },
                                        }),
                                        "复制",
                                      ],
                                    }),
                                  ],
                                });
                              },
                              className: "upload-image-pop",
                            });
                          });
                        },
                      },
                      {
                        key: "toggleSystemInfo",
                        value: function () {
                          var e = this,
                            t = this.state.showSystemInfo;
                          this.setState({
                            maskType: "systemInfo",
                            mask: !t,
                            showSystemInfo: !t,
                          }),
                            setTimeout(function () {
                              e.setState({ transition: !t });
                            }, 10);
                        },
                      },
                      {
                        key: "toggleCidDialog",
                        value: function () {
                          var e = this,
                            t = this.state.showCidDialog;
                          this.setState({
                            maskType: "cidDialog",
                            mask: !t,
                            showCidDialog: !t,
                          }),
                            setTimeout(function () {
                              e.setState({ transition: !t });
                            }, 10);
                        },
                      },
                      {
                        key: "closeMask",
                        value: function (e) {
                          "cidDialog" === e
                            ? this.toggleCidDialog()
                            : "systemInfo" === e
                            ? this.toggleSystemInfo()
                            : "envSelector" === e
                            ? this.handleChangeEnv()
                            : "colonySelector" === e
                            ? this.handleChangeColony()
                            : "grabListSelector" === e &&
                              this.handleChangeGrabList();
                        },
                      },
                      {
                        key: "updateInputCid",
                        value: function (e) {
                          this.setState({ cid: e.detail.value });
                        },
                      },
                      {
                        key: "handleUpdateInput",
                        value: function (e) {
                          this.setState({ inputDialogValue: e.detail.value });
                        },
                      },
                      {
                        key: "handleInputConfirm",
                        value: function () {
                          var e = this.state,
                            t = e.inputDialogShowType,
                            n = e.inputDialogValue;
                          return (
                            this.toggleInputDialog(),
                            "cid" == t
                              ? this.setClientId(n)
                              : "subEnv" == t
                              ? this.setSubEnv(n)
                              : void 0
                          );
                        },
                      },
                      {
                        key: "toggleInputDialog",
                        value: function (e) {
                          var t = this,
                            n = this.state,
                            i = {
                              cid: (n.inputDialogShowType, n.clientID),
                              subEnv: n.subEnv,
                            };
                          if (e)
                            return (
                              this.setState({
                                mask: ["cid", "subEnv"].includes(e),
                                maskType: e,
                                inputDialogShowType: e,
                                inputDialogValue: i[e] || "",
                              }),
                              void setTimeout(function () {
                                t.setState({ transition: !0 });
                              }, 10)
                            );
                          this.setState({
                            mask: !1,
                            maskType: "",
                            inputDialogShowType: "none",
                          }),
                            setTimeout(function () {
                              t.setState({ transition: !1 });
                            }, 10);
                        },
                      },
                      {
                        key: "setClientId",
                        value: function (e) {
                          (N.ZP.cid = e),
                            this.setState({ clientID: e }),
                            (0, b.showToast)("设置成功");
                        },
                      },
                      {
                        key: "setSubEnv",
                        value: function (e) {
                          var t = this.state.env;
                          "fat" !== (null == t ? void 0 : t.toLowerCase()) &&
                            (0, b.showToast)(
                              "当前非FAT环境，设置的subEnv可能不生效"
                            ),
                            f().setStorageSync("GLOBAL_FAT_SUBENV", e),
                            this.setState({ subEnv: e }),
                            (0, v.Sw)(e);
                        },
                      },
                      {
                        key: "confirmChangeCID",
                        value: function () {
                          this.toggleCidDialog(), this.setClientId();
                        },
                      },
                      {
                        key: "handleChangeEnv",
                        value: function () {
                          var e = this,
                            t = this.state.showEnvSelector;
                          this.setState({
                            maskType: "envSelector",
                            mask: !t,
                            showEnvSelector: !t,
                          }),
                            setTimeout(function () {
                              e.setState({ transition: !t });
                            }, 10);
                        },
                      },
                      {
                        key: "handleChangeColony",
                        value: function () {
                          var e = this,
                            t = this.state.showColonySelector;
                          this.setState({
                            maskType: "colonySelector",
                            mask: !t,
                            showColonySelector: !t,
                          }),
                            setTimeout(function () {
                              e.setState({ transition: !t });
                            }, 10);
                        },
                      },
                      {
                        key: "handleChangeGrabList",
                        value: function () {
                          var e = this,
                            t = this.state.showGrabListSelector;
                          this.setState({
                            maskType: "grabListSelector",
                            mask: !t,
                            showGrabListSelector: !t,
                          }),
                            setTimeout(function () {
                              e.setState({ transition: !t });
                            }, 10);
                        },
                      },
                      {
                        key: "toggleShowHotelBeetle",
                        value: function () {
                          var e = this.state.showHotelBeetle,
                            t = T.uG.get(),
                            n = Object.assign({}, t, { showHotelBeetle: !e });
                          T.uG.set(n), this.setState({ showHotelBeetle: !e });
                        },
                      },
                      {
                        key: "toDebugPage",
                        value: function (e, t) {
                          var n =
                            "/functionalPages/testpage/section?section=".concat(
                              e
                            );
                          "scanCode" === e &&
                            (n += t
                              ? "&qrData=".concat(encodeURIComponent(t))
                              : ""),
                            this.navigateTo({ url: n });
                        },
                      },
                      {
                        key: "handleScanAndNavigate",
                        value: function () {
                          var e = this,
                            t = "";
                          f()
                            .scanCode()
                            .then(
                              function (n) {
                                console.log(n),
                                  "WX_CODE" === n.scanType
                                    ? (t = n.path)
                                    : n.result.includes(
                                        "/soa2/15766/startMcdScan"
                                      )
                                    ? (0, X.p)(n.result)
                                    : (t = n.result),
                                  e.toDebugPage("scanCode", t);
                              },
                              function (e) {
                                console.log(e),
                                  "scanCode:fail cancel" === e.errMsg
                                    ? (0, b.showToast)("取消扫码")
                                    : (0, b.showModal)(JSON.stringify(e));
                              }
                            );
                        },
                      },
                      {
                        key: "sharePicWorkableChange",
                        value: function (e) {
                          y.J8.set(e),
                            this.setState({ sharePictureWorkable: e });
                        },
                      },
                      {
                        key: "scanFaceWorkableChange",
                        value: function (e) {
                          y.QV.set(e), this.setState({ scanFaceWorkable: e });
                        },
                      },
                      {
                        key: "onGrabRateSubmitChange",
                        value: function (e) {
                          y.OO.set(e),
                            this.setState({ closeGrabRateReLaunch: e });
                        },
                      },
                      {
                        key: "onCapturePacketProxy",
                        value: function (e) {
                          y.lO.set(e), this.setState({ capturePacketProxy: e });
                        },
                      },
                      {
                        key: "onIsEarthWanderingChange",
                        value: function (e) {
                          y.Gp.set(e), this.setState({ isEarthWandering: e });
                        },
                      },
                      {
                        key: "toMemberPage",
                        value: function () {
                          this.navigateTo({
                            url: "/pages/taroCRN/train/pages/member/home/index",
                          });
                        },
                      },
                      {
                        key: "logOut12306",
                        value: function () {
                          x.WG.removeAsync("bind12306"),
                            (0, b.showToast)("已退出12306");
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.env,
                            i = t.debugMode,
                            a = t.encryptClosed,
                            o = t.debugSmartHold,
                            s = t.transition,
                            c = t.maskType,
                            l = t.mask,
                            r = t.clientID,
                            h = (t.cid, t.openid),
                            d = t.phoneNumber,
                            m = (t.showCidDialog, t.inputDialogShowType),
                            g = t.inputDialogValue,
                            f = t.subEnv,
                            N = t.showSystemInfo,
                            w = t.showEnvSelector,
                            b = t.showColonySelector,
                            v = t.canaryIdc,
                            T = t.systemInfo,
                            y = t.buildVersion,
                            S = t.storageInfo,
                            Z = t.sharePictureWorkable,
                            x = t.scanFaceWorkable,
                            X = t.closeGrabRateReLaunch,
                            L = t.showGrabListSelector,
                            E = t.grabListVersion,
                            _ = t.showHotelBeetle,
                            D = t.capturePacketProxy,
                            G = t.isEarthWandering,
                            A = p.default.isTieyou && p.default.isWechat;
                          return (0, I.BX)(u.View, {
                            className: "testpage",
                            children: [
                              A &&
                                (0, I.BX)(u.View, {
                                  className: "header",
                                  children: [
                                    (0, I.BX)(u.Text, {
                                      userSelect: !0,
                                      className: "item",
                                      onLongPress: this.copyToClipboard.bind(
                                        this,
                                        d
                                      ),
                                      children: [
                                        "phone: ",
                                        "" === d ? "未登录" : d,
                                      ],
                                    }),
                                    (0, I.BX)(u.Text, {
                                      userSelect: !0,
                                      className: "item",
                                      onLongPress: this.copyToClipboard.bind(
                                        this,
                                        r
                                      ),
                                      children: ["cid: ", r],
                                    }),
                                    (0, I.BX)(u.Text, {
                                      userSelect: !0,
                                      className: "item",
                                      onLongPress: this.copyToClipboard.bind(
                                        this,
                                        h
                                      ),
                                      children: ["openid: ", h],
                                    }),
                                    (0, I.tZ)(u.OpenData, {
                                      className: "avatar",
                                      type: "userAvatarUrl",
                                    }),
                                  ],
                                }),
                              (0, I.tZ)(u.View, { onClick: function () {} }),
                              !A &&
                                (0, I.BX)(u.View, {
                                  className: "header",
                                  children: [
                                    (0, I.BX)(u.View, {
                                      className: "item",
                                      onLongPress: this.copyToClipboard.bind(
                                        this,
                                        d
                                      ),
                                      children: [
                                        "phone: ",
                                        "" === d ? "未登录" : d,
                                      ],
                                    }),
                                    (0, I.BX)(u.View, {
                                      className: "item",
                                      onLongPress: this.copyToClipboard.bind(
                                        this,
                                        r
                                      ),
                                      children: ["cid: ", r],
                                    }),
                                    (0, I.BX)(u.View, {
                                      className: "item",
                                      onLongPress: this.copyToClipboard.bind(
                                        this,
                                        h
                                      ),
                                      children: ["openid: ", h],
                                    }),
                                    (0, I.tZ)(u.OpenData, {
                                      className: "avatar",
                                      type: "userAvatarUrl",
                                    }),
                                  ],
                                }),
                              (0, I.tZ)(u.View, {
                                className: "tip",
                                children: "* 长按文字即可进行复制",
                              }),
                              (0, I.BX)(u.View, {
                                className: "container",
                                children: [
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    onClick: this.toMemberPage,
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-flthaoshi icon icon-red",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "新版12306会员页",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-flthaoshi icon icon-red",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "打开调试工具",
                                      }),
                                      (0, I.tZ)(k.ZtSwitch, {
                                        className: "switch",
                                        color: "#0080FF",
                                        checked: i,
                                        onChange: this.debugModeChange,
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-luggage icon icon-red",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "关闭接口加密",
                                      }),
                                      (0, I.tZ)(k.ZtSwitch, {
                                        className: "switch",
                                        color: "#0080FF",
                                        checked: a,
                                        onChange: this.debugEncryptChange,
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    onClick: this.logOut12306,
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-flthaoshi icon icon-red",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "退出12306登录",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-luggage icon icon-red",
                                      }),
                                      (0, I.tZ)(k.ZtInput, {
                                        className: "operation",
                                        type: "number",
                                        ref: function (t) {
                                          e.$secSkillInput = t;
                                        },
                                        placeholder:
                                          "当前秒杀开始时间: ".concat(
                                            (0, B.kH)(),
                                            "分钟"
                                          ),
                                      }),
                                      (0, I.tZ)(k.ZtSwitch, {
                                        className: "switch",
                                        color: "#0080FF",
                                        onChange: this.debugSecSkillChange,
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-luggage icon icon-red",
                                      }),
                                      (0, I.tZ)(k.ZtInput, {
                                        className: "operation",
                                        type: "number",
                                        ref: function (t) {
                                          e.$12306PreCheckInput = t;
                                        },
                                        placeholder:
                                          "t6密码预检查有效期: ".concat(
                                            (0, V.zv)(),
                                            "分钟"
                                          ),
                                      }),
                                      (0, I.tZ)(k.ZtSwitch, {
                                        className: "switch",
                                        color: "#0080FF",
                                        onChange: this.debug12306PreCheckChange,
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-goldhand icon icon-Orchid",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "开启智能扣位调试",
                                      }),
                                      (0, I.tZ)(k.ZtSwitch, {
                                        className: "switch",
                                        color: "#0080FF",
                                        checked: o,
                                        onChange: this.debugSmartHoldChange,
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-hotel icon icon-blue",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "酒店甲壳虫",
                                      }),
                                      (0, I.tZ)(k.ZtSwitch, {
                                        className: "switch",
                                        color: "#0080FF",
                                        checked: _,
                                        onChange: this.toggleShowHotelBeetle,
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    onClick: this.handleChangeEnv,
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-flight icon icon-yellow",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "环境切换(当前".concat(
                                          "prod" === n
                                            ? "生产"
                                            : "canary" === n
                                            ? "堡垒"
                                            : n,
                                          ")"
                                        ),
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-more right-row",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    onClick: function () {
                                      return e.toggleInputDialog("subEnv");
                                    },
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-goldhand icon icon-yellow",
                                      }),
                                      (0, I.BX)(u.Text, {
                                        className: "operation",
                                        children: [
                                          "设置FAT子环境（",
                                          f || "未设置",
                                          "）",
                                        ],
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-more right-row",
                                      }),
                                    ],
                                  }),
                                  "canary" === n &&
                                    (0, I.BX)(u.View, {
                                      className: "item iconfont",
                                      onClick: this.handleChangeColony,
                                      children: [
                                        (0, I.tZ)(u.Text, {
                                          className:
                                            "ifont-eyeclosed icon icon-DarkSlateBlue",
                                        }),
                                        (0, I.tZ)(u.Text, {
                                          className: "operation",
                                          children:
                                            "堡垒环境需要指定的集群:".concat(v),
                                        }),
                                        (0, I.tZ)(u.Text, {
                                          className: "ifont-more right-row",
                                        }),
                                      ],
                                    }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    onLongPress: function () {
                                      return e.toDebugPage("scanCode");
                                    },
                                    onLongTap: function () {
                                      return e.toDebugPage("scanCode");
                                    },
                                    onClick: this.handleScanAndNavigate,
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-scan icon icon-green",
                                      }),
                                      (0, I.BX)(u.Text, {
                                        className: "operation",
                                        children: [
                                          "扫码跳转",
                                          (0, I.tZ)(u.Text, {
                                            className: "tip",
                                            children: "(点击或长按)",
                                          }),
                                        ],
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-more right-row",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    onLongPress: function () {
                                      return e.toDebugPage("webComp");
                                    },
                                    onLongTap: function () {
                                      return e.toDebugPage("webComp");
                                    },
                                    onClick: function () {
                                      return e.toDebugPage("webComp");
                                    },
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-vs icon icon-green",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "webcomp调试",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-more right-row",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    onClick: this.toggleSystemInfo,
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-detail icon icon-blue",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "设备信息",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-more right-row",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    onClick: function () {
                                      e.toggleInputDialog("cid");
                                    },
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-wait icon icon-red",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "设置cid",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-more right-row",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    onClick: this.toDebugPage.bind(
                                      this,
                                      "abTest"
                                    ),
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-goldhand icon icon-yellow",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "设置ABtest",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-more right-row",
                                      }),
                                    ],
                                  }),
                                  p.default.isWechat &&
                                    (0, I.BX)(u.View, {
                                      className: "item iconfont",
                                      onClick: this.toDebugPage.bind(
                                        this,
                                        "subscribe"
                                      ),
                                      children: [
                                        (0, I.tZ)(u.Text, {
                                          className:
                                            "ifont-wechat icon icon-green",
                                        }),
                                        (0, I.tZ)(u.Text, {
                                          className: "operation",
                                          children: "消息订阅",
                                        }),
                                        (0, I.tZ)(u.Text, {
                                          className: "ifont-more right-row",
                                        }),
                                      ],
                                    }),
                                  (0, I.BX)(u.Button, {
                                    className: "item iconfont",
                                    openType: "contact",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className: ".ifont-tel2 icon icon-red",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "客服",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-more right-row",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-goldhand icon icon-share-pic",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "开启微信图片分享",
                                      }),
                                      (0, I.tZ)(k.ZtSwitch, {
                                        className: "switch",
                                        color: "#0080FF",
                                        checked: Z,
                                        onChange: this.sharePicWorkableChange,
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-goldhand icon icon-share-pic",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "开启微信扫脸功能",
                                      }),
                                      (0, I.tZ)(k.ZtSwitch, {
                                        className: "switch",
                                        color: "#0080FF",
                                        checked: x,
                                        onChange: this.scanFaceWorkableChange,
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-goldhand icon icon-share-pic",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "抢票下单不进行reLaunch跳转",
                                      }),
                                      (0, I.tZ)(k.ZtSwitch, {
                                        className: "switch",
                                        type: "switch",
                                        color: "#0080FF",
                                        checked: X,
                                        onChange: this.onGrabRateSubmitChange,
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    onClick: this.handleChangeGrabList,
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-flight icon icon-yellow",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children:
                                          "抢票列表页用新接口(当前".concat(
                                            "cid" === E
                                              ? "根据cid"
                                              : "on" === E
                                              ? "新接口"
                                              : "老接口",
                                            ")"
                                          ),
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-more right-row",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-goldhand icon icon-share-pic",
                                      }),
                                      (0, I.BX)(u.Text, {
                                        className: "operation",
                                        children: [
                                          "接口抓包代理",
                                          (0, I.tZ)(u.Text, {
                                            className: "tip",
                                            children: "(右上角三个点→重新进入)",
                                          }),
                                        ],
                                      }),
                                      (0, I.tZ)(k.ZtSwitch, {
                                        className: "switch",
                                        type: "switch",
                                        color: "#0080FF",
                                        checked: D,
                                        onChange: this.onCapturePacketProxy,
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "ifont-goldhand icon icon-share-pic",
                                      }),
                                      (0, I.BX)(u.Text, {
                                        className: "operation",
                                        children: [
                                          "流浪地球测试",
                                          (0, I.tZ)(u.Text, {
                                            className: "tip",
                                            children: "(右上角三个点→重新进入)",
                                          }),
                                        ],
                                      }),
                                      (0, I.tZ)(k.ZtSwitch, {
                                        className: "switch",
                                        type: "switch",
                                        color: "#0080FF",
                                        checked: G,
                                        onChange: this.onIsEarthWanderingChange,
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "item iconfont",
                                    onClick: this.onUploadImage.bind(this),
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-download icon",
                                        style: { transform: "rotate(180deg)" },
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "operation",
                                        children: "上传图片",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className: "ifont-more right-row",
                                      }),
                                    ],
                                  }),
                                  (0, I.tZ)(u.View, {
                                    className: "item iconfont",
                                    onClick: this.onClearStorage.bind(this),
                                    children: (0, I.BX)(u.Text, {
                                      className: "operation tblue",
                                      children: ["清除缓存 ", S],
                                    }),
                                  }),
                                  (0, I.tZ)(u.Navigator, {
                                    className: "item iconfont",
                                    openType: "navigate",
                                    url: "weixin://dl/business/?ticket=t85e63cae8b3d73f219decc57918f16ba",
                                    children: "测试直付方式1，通过url",
                                  }),
                                  (0, I.tZ)(u.Navigator, {
                                    className: "item iconfont",
                                    openType: "navigate",
                                    shortLink:
                                      "weixin://dl/business/?ticket=t85e63cae8b3d73f219decc57918f16ba",
                                    children: "测试直付方式2",
                                  }),
                                  (0, I.tZ)(u.Navigator, {
                                    className: "item iconfont",
                                    path: "weixin://dl/business/?ticket=t85e63cae8b3d73f219decc57918f16ba",
                                    children: "测试直付方式3，通过path",
                                  }),
                                ],
                              }),
                              l &&
                                (0, I.tZ)(u.View, {
                                  className: "pop-mask " + (s ? "active" : ""),
                                  onClick: this.closeMask.bind(this, c),
                                }),
                              (0, I.BX)(u.View, {
                                className:
                                  "env pop-botm " + (w ? "active" : ""),
                                children: [
                                  (0, I.BX)(u.View, {
                                    className: "env-item ".concat(
                                      "prod" === n ? "env-item-checked" : ""
                                    ),
                                    onClick: this.switchGlobalEnv.bind(
                                      this,
                                      "prod"
                                    ),
                                    hoverClass:
                                      "prod" !== n ? "env-item-hover" : "",
                                    children: [
                                      (0, I.tZ)(u.Text, { children: "生产" }),
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "prod" === n
                                            ? "iconfont ifont-selected"
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "env-item ".concat(
                                      "canary" === n ? "env-item-checked" : ""
                                    ),
                                    onClick: this.switchGlobalEnv.bind(
                                      this,
                                      "canary"
                                    ),
                                    hoverClass:
                                      "canary" !== n ? "env-item-hover" : "",
                                    children: [
                                      (0, I.tZ)(u.Text, { children: "堡垒" }),
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "canary" === n
                                            ? "iconfont ifont-selected"
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "env-item ".concat(
                                      "uat" === n ? "env-item-checked" : ""
                                    ),
                                    onClick: this.switchGlobalEnv.bind(
                                      this,
                                      "uat"
                                    ),
                                    hoverClass:
                                      "uat" !== n ? "env-item-hover" : "",
                                    children: [
                                      (0, I.tZ)(u.Text, { children: "UAT" }),
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "uat" === n
                                            ? "iconfont ifont-selected"
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "env-item ".concat(
                                      "fat" === n ? "env-item-checked" : ""
                                    ),
                                    onClick: this.switchGlobalEnv.bind(
                                      this,
                                      "fat"
                                    ),
                                    hoverClass:
                                      "fat" !== n ? "env-item-hover" : "",
                                    children: [
                                      (0, I.tZ)(u.Text, { children: "FAT" }),
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "fat" === n
                                            ? "iconfont ifont-selected"
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, I.tZ)(u.View, {
                                    className: "tip",
                                    children:
                                      "* 设置完成→右上角三个点→重新进入小程序，才能生效",
                                  }),
                                ],
                              }),
                              (0, I.BX)(u.View, {
                                className:
                                  "env pop-botm " + (L ? "active" : ""),
                                children: [
                                  (0, I.BX)(u.View, {
                                    className: "env-item ".concat(
                                      "cid" === E ? "env-item-checked" : ""
                                    ),
                                    onClick: this.switchGrabListVersion.bind(
                                      this,
                                      "cid"
                                    ),
                                    hoverClass:
                                      "cid" !== n ? "env-item-hover" : "",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        children: "根据cid",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "cid" === E
                                            ? "iconfont ifont-selected"
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "env-item ".concat(
                                      "on" === E ? "env-item-checked" : ""
                                    ),
                                    onClick: this.switchGrabListVersion.bind(
                                      this,
                                      "on"
                                    ),
                                    hoverClass:
                                      "on" !== n ? "env-item-hover" : "",
                                    children: [
                                      (0, I.tZ)(u.Text, { children: "新接口" }),
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "on" === E
                                            ? "iconfont ifont-selected"
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "env-item ".concat(
                                      "off" === E ? "env-item-checked" : ""
                                    ),
                                    onClick: this.switchGrabListVersion.bind(
                                      this,
                                      "off"
                                    ),
                                    hoverClass:
                                      "off" !== n ? "env-item-hover" : "",
                                    children: [
                                      (0, I.tZ)(u.Text, { children: "老接口" }),
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "off" === E
                                            ? "iconfont ifont-selected"
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, I.tZ)(u.View, {
                                    className: "tip",
                                    children:
                                      "* 设置完成→右上角三个点→重新进入小程序，才能生效",
                                  }),
                                ],
                              }),
                              (0, I.BX)(u.View, {
                                className:
                                  "env pop-botm " + (b ? "active" : ""),
                                children: [
                                  (0, I.BX)(u.View, {
                                    className: "env-item ".concat(
                                      "mirror" === v ? "env-item-checked" : ""
                                    ),
                                    onClick: this.switchGlobalColony.bind(
                                      this,
                                      "mirror"
                                    ),
                                    hoverClass:
                                      "mirror" !== v ? "env-item-hover" : "",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        children: "mirror(新版堡垒)",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "mirror" === v
                                            ? "iconfont ifont-selected"
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "env-item ".concat(
                                      "SHARB" === v ? "env-item-checked" : ""
                                    ),
                                    onClick: this.switchGlobalColony.bind(
                                      this,
                                      "SHARB"
                                    ),
                                    hoverClass:
                                      "SHARB" !== v ? "env-item-hover" : "",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        children: "SHARB(日阪)",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "SHARB" === v
                                            ? "iconfont ifont-selected"
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "env-item ".concat(
                                      "SHAXY" === v ? "env-item-checked" : ""
                                    ),
                                    onClick: this.switchGlobalColony.bind(
                                      this,
                                      "SHAXY"
                                    ),
                                    hoverClass:
                                      "SHAXY" !== v ? "env-item-hover" : "",
                                    children: [
                                      (0, I.tZ)(u.Text, {
                                        children: "SHAXY(新源)",
                                      }),
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "SHAXY" === v
                                            ? "iconfont ifont-selected"
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "env-item ".concat(
                                      "" === v ? "env-item-checked" : ""
                                    ),
                                    onClick: this.switchGlobalColony.bind(
                                      this,
                                      ""
                                    ),
                                    hoverClass:
                                      "" !== v ? "env-item-hover" : "",
                                    children: [
                                      (0, I.tZ)(u.Text, { children: "不指定" }),
                                      (0, I.tZ)(u.Text, {
                                        className:
                                          "" === v
                                            ? "iconfont ifont-selected"
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, I.tZ)(u.View, {
                                    className: "tip",
                                    children:
                                      "* 设置完成,如有异常→右上角三个点→重新进入小程序，才能生效",
                                  }),
                                ],
                              }),
                              (0, I.BX)(u.View, {
                                className: "pop-botm " + (N ? "active" : ""),
                                children: [
                                  (0, I.BX)(u.View, {
                                    className: "pop-botm-hd",
                                    children: [
                                      (0, I.tZ)(u.View, {
                                        className: "btn-cancel",
                                        onClick: this.toggleSystemInfo,
                                        children: "关闭",
                                      }),
                                      (0, I.tZ)(u.View, {
                                        className: "tit",
                                        children: "设备信息",
                                      }),
                                      (0, I.tZ)(u.View, {
                                        className: "btn-submit",
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "pop-botm-bd",
                                    children: [
                                      (0, I.BX)(u.View, {
                                        className: "col",
                                        children: [
                                          (0, I.tZ)(u.Label, {
                                            className: "lb long",
                                            children: "设备品牌",
                                          }),
                                          (0, I.tZ)(u.Text, {
                                            children: T.brand,
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(u.View, {
                                        className: "col",
                                        children: [
                                          (0, I.tZ)(u.Label, {
                                            className: "lb long",
                                            children: "设备型号",
                                          }),
                                          (0, I.tZ)(u.Text, {
                                            children: T.model,
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(u.View, {
                                        className: "col",
                                        children: [
                                          (0, I.tZ)(u.Label, {
                                            className: "lb long",
                                            children: "微信版本号",
                                          }),
                                          (0, I.tZ)(u.Text, {
                                            children: T.version,
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(u.View, {
                                        className: "col",
                                        children: [
                                          (0, I.tZ)(u.Label, {
                                            className: "lb long",
                                            children: "操作系统及版本",
                                          }),
                                          (0, I.tZ)(u.Text, {
                                            children: T.system,
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(u.View, {
                                        className: "col",
                                        children: [
                                          (0, I.tZ)(u.Label, {
                                            className: "lb long",
                                            children: "客户端平台",
                                          }),
                                          (0, I.tZ)(u.Text, {
                                            children: T.platform,
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(u.View, {
                                        className: "col",
                                        children: [
                                          (0, I.tZ)(u.Label, {
                                            className: "lb long",
                                            children: "客户端基础库版本",
                                          }),
                                          (0, I.tZ)(u.Text, {
                                            children: T.SDKVersion,
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(u.View, {
                                        className: "col",
                                        children: [
                                          (0, I.tZ)(u.Label, {
                                            className: "lb long",
                                            children: "Taro3版本",
                                          }),
                                          (0, I.tZ)(u.Text, {
                                            children: T.TaroVersion,
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(u.View, {
                                        className: "col",
                                        children: [
                                          (0, I.tZ)(u.Label, {
                                            className: "lb long",
                                            children: "小程序代码版本",
                                          }),
                                          (0, I.tZ)(u.Text, {
                                            children: p.default.appVersion,
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(u.View, {
                                        className: "col",
                                        children: [
                                          (0, I.tZ)(u.Label, {
                                            className: "lb long",
                                            children: "小程序代码版本号",
                                          }),
                                          (0, I.tZ)(u.Text, {
                                            children: p.default.version,
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(u.View, {
                                        className: "col",
                                        children: [
                                          (0, I.tZ)(u.Label, {
                                            className: "lb long",
                                            children: "打包信息",
                                          }),
                                          (0, I.tZ)(u.Text, { children: y }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, I.BX)(u.View, {
                                className: "dialog",
                                style: "display: ".concat(
                                  ["cid", "subEnv"].includes(m)
                                    ? "blcok"
                                    : "none"
                                ),
                                children: [
                                  (0, I.BX)(u.View, {
                                    className: "title",
                                    children: ["请输入", m],
                                  }),
                                  (0, I.tZ)(u.Input, {
                                    className: "main",
                                    type: "text",
                                    value: g,
                                    cursorSpacing: "80",
                                    focus: ["cid", "subEnv"].includes(m),
                                    onInput: this.handleUpdateInput,
                                  }),
                                  (0, I.BX)(u.View, {
                                    className: "footer",
                                    children: [
                                      (0, I.tZ)(u.Button, {
                                        className: "btn-cancel",
                                        onClick: function () {
                                          return e.toggleInputDialog();
                                        },
                                        children: "取消",
                                      }),
                                      (0, I.tZ)(u.Button, {
                                        className: "btn-confirm",
                                        onClick: this.handleInputConfirm,
                                        children: "确定",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, I.tZ)(C.Z, {
                                ref: function (t) {
                                  e.onDrawerAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(m.default.Component))
              ) || i;
          Page(
            (0, a.createPageConfig)(
              E,
              "functionalPages/testpage/testpage",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "小程序测试页",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                backgroundColor: "#fff",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [71229, 10313, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(39811);
        }),
          e.O();
      },
    ]);
})();
