!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    require("../../../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../../../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [5218],
      {
        68878: function (e, i, t) {
          var n = t(32180),
            o = t(57042),
            r = t(24460),
            l = t(81876),
            c = t(21867),
            d = t(86066),
            a = t(45023),
            s = t(52500),
            u = t(33357),
            f = t(92954),
            h = t.n(f),
            v = t(49528),
            g = t(96677),
            p =
              (h().getSystemInfoSync().windowHeight,
              (0, v.lW)({
                scrollview_in_view: {
                  marginLeft: 8,
                  marginRight: 8,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "100%",
                },
                top_content: { flex: 1 },
                card_view: {
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 14,
                  paddingBottom: 14,
                  backgroundColor: "white",
                  marginTop: 8,
                },
                invoice_view: {
                  flexDirection: "column",
                  backgroundColor: g.Z.white,
                  marginTop: 8,
                  borderRadius: 10,
                  marginLeft: 8,
                  marginRight: 8,
                },
                invoice_label_view: {
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 10,
                  paddingBottom: 10,
                  justifyContent: "space-between",
                  borderRadius: 10,
                },
                invoice_switch: {
                  height: 24,
                  width: 44,
                  backgroundColor: g.Z.grey_cc,
                  borderRadius: 12,
                  alignItems: "flex-start",
                  borderWidth: 1,
                  borderColor: g.Z.grey_cc,
                  justifyContent: "center",
                },
                invoice_switch_selected: {
                  height: 24,
                  width: 44,
                  backgroundColor: g.Z.zxMainColor,
                  borderRadius: 12,
                  alignItems: "flex-end",
                  borderWidth: 1,
                  borderColor: g.Z.zxMainColor,
                  justifyContent: "center",
                },
                circle_view: {
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  backgroundColor: g.Z.white,
                  borderWidth: 1,
                  borderColor: g.Z.grey_cc,
                },
                circle_view_selected: {
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  backgroundColor: g.Z.white,
                  borderWidth: 1,
                  borderColor: g.Z.zxMainColor,
                },
              })),
            m =
              ((0, v.lW)({
                flex1: { flex: 1 },
                spacebetween_row: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
                spacebetween_center_row: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                },
                row: { display: "flex", flexDirection: "row" },
              }),
              t(298)),
            w = t(71515),
            y = t(53550),
            b = t(48813),
            Z = h().getSystemInfoSync().windowWidth,
            x = "#FF5959",
            I = s.default.memo(function (e) {
              var i = e.list,
                t = e.remark;
              return (0, b.BX)(w.View, {
                children: [
                  (0, b.tZ)(w.View, {
                    style: p.card_view,
                    children:
                      !!i &&
                      i.map(function (e) {
                        return (0,
                        b.BX)(w.View, { style: (0, m.Z)((0, m.Z)({}, S.item_view), (0, m.Z)({}, e.needBorder ? S.border_style : {})), children: [(0, b.BX)(w.View, { style: (0, m.Z)((0, m.Z)({}, S.row), S.flex1), children: [(0, b.tZ)(w.Text, { style: S.title, children: e.title }), (0, b.tZ)(w.Text, { style: (0, m.Z)((0, m.Z)({}, S.desc), S.flex1), children: e.desc })] }), !!e.onPress && !(null == e || !e.isShowChangeBtn) && (0, b.tZ)(w.View, { onClick: e.onPress, children: (0, b.tZ)(w.Text, { style: S.edit_btn, children: "修改" }) })] });
                      }),
                  }),
                  !!t &&
                    (0, b.BX)(w.View, {
                      style: S.remark_view,
                      children: [
                        (0, b.tZ)(y.Z, { style: S.icon, children: "" }),
                        (0, b.tZ)(w.Text, { style: S.remark, children: t }),
                      ],
                    }),
                ],
              });
            }),
            S = (0, v.lW)({
              remark_view: {
                marginTop: 5,
                width: Z - 16 - 4 - 15,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              },
              icon: { color: x, fontSize: 12, marginLeft: 15 },
              remark: { fontSize: 11, color: x, marginLeft: 4, lineHeight: 13 },
              item_view: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
              border_style: {
                borderBottomWidth: 1,
                borderBottomColor: g.Z.grey_e5,
                paddingBottom: 15,
                marginBottom: 15,
              },
              title: {
                fontSize: 15,
                color: g.Z.grey_66,
                width: 80,
                marginRight: 20,
              },
              desc: { fontSize: 15, color: g.Z.grey_33, fontWeight: "bold" },
              flex1: { flex: 1 },
              row: { display: "flex", flexDirection: "row" },
              edit_btn: { color: g.Z.zxMainColor, fontSize: 15 },
            }),
            k = h().getSystemInfoSync().windowWidth,
            _ = function (e) {
              var i = e.topRemark,
                t = e.closeModal,
                n = e.needPayToUsPrice,
                o = e.needPayToUsPriceList,
                r = e.paidPriceList,
                l = e.paidPrice;
              return (0, b.tZ)(w.View, {
                style: V.container,
                children: (0, b.BX)(w.View, {
                  style: { flex: 1, display: "flex", flexDirection: "column" },
                  children: [
                    (0, b.BX)(w.View, {
                      style: V.header,
                      children: [
                        (0, b.tZ)(y.Z, { style: V.transparent, children: "󰳭" }),
                        (0, b.tZ)(w.Text, {
                          style: V.title_text,
                          children: "退款明细",
                        }),
                        (0, b.tZ)(w.View, {
                          onClick: t,
                          children: (0, b.tZ)(y.Z, {
                            style: V.icon,
                            children: "󰳭",
                          }),
                        }),
                      ],
                    }),
                    !!i &&
                      (0, b.tZ)(w.View, {
                        style: V.top_remark,
                        children: (0, b.tZ)(w.Text, {
                          style: V.remark_text,
                          children: i,
                        }),
                      }),
                    (0, b.tZ)(C, { price: "¥".concat(l) }),
                    r.length > 0 &&
                      r.map(function (e) {
                        return (0, b.tZ)(R, (0, m.Z)({}, e));
                      }),
                    (0, b.tZ)(w.View, {
                      style: (0, m.Z)((0, m.Z)({}, T.line), { width: k - 32 }),
                    }),
                    (0, b.tZ)(C, {
                      title: "需扣款项",
                      price: "待确认" == n ? n : "¥" + n,
                    }),
                    o.map(function (e) {
                      return (0, b.tZ)(R, (0, m.Z)({}, e));
                    }),
                  ],
                }),
              });
            };
          function R(e) {
            var i = e.title,
              t = e.price,
              n = e.isCoupon,
              o = e.count,
              r = e.unit;
            return (0, b.BX)(w.View, {
              style: V.price_item_view,
              children: [
                (0, b.tZ)(w.View, {
                  style: V.left_title,
                  children: (0, b.tZ)(w.Text, {
                    style: V.left_title,
                    children: i,
                  }),
                }),
                (0, b.BX)(w.View, {
                  style: V.right_price_view,
                  children: [
                    (0, b.tZ)(w.Text, {
                      style: V.right_price_text,
                      children: n ? "- ¥" + t + " " : "¥" + t + " ",
                    }),
                    (0, b.BX)(w.Text, {
                      style: V.right_price_text,
                      children: [" X", o, "P" === r ? "人" : "份"],
                    }),
                  ],
                }),
              ],
            });
          }
          function C(e) {
            var i = e.price,
              t = e.title,
              n = void 0 === t ? "退订产品" : t;
            return (0, b.BX)(w.View, {
              style: T.view,
              children: [
                (0, b.tZ)(w.Text, { style: T.title, children: n }),
                (0, b.tZ)(w.Text, { style: T.right_price, children: i }),
              ],
            });
          }
          var T = (0, v.lW)({
              title: { fontSize: 16, color: "#222222" },
              view: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 6,
                marginTop: 15,
              },
              right_price: { fontSize: 16, color: "#222222" },
              line: { height: 0.5, marginTop: 15, backgroundColor: "#ededed" },
            }),
            V = (0, v.lW)({
              right_price_text: { fontSize: 13, color: "#999999" },
              right_price_view: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              price_item_view: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 5,
              },
              left_title_view: { flex: 1 },
              left_title: { fontSize: 13, color: "#999999" },
              remark_text: { fontSize: 12, color: "#F76D2F", lineHeight: 15 },
              top_remark: {
                backgroundColor: "#FFF8ED",
                borderRadius: 2,
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 12,
                paddingRight: 12,
              },
              title_text: {
                fontSize: 18,
                color: "#222222",
                fontWeight: "bold",
              },
              transparent: { fontSize: 16, color: "transparent" },
              icon: { fontSize: 26, color: "#979797" },
              header: {
                height: 54,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              container: {
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                backgroundColor: "white",
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 30,
                display: "flex",
                flexDirection: "row",
              },
            }),
            P = t(90729),
            D = t(8079);
          var B = t(39407),
            M = s.default.memo(function (e) {
              var i = e.refundPrice,
                t = e.invoiceRemark,
                n = e.isShowPriceInfo,
                o = e.sureToRefund,
                r = e.extraView,
                l = e.lookPriceDetail;
              return (0,
              b.tZ)(B.Z, { isHideIcon: !1, totalPriceTitle: "实退总额：", customLeftView: (0, b.tZ)(z, { refundPrice: i, invoiceRemark: t }), needShowPriceDetail: "待确认" != i.toString(), isShowPriceInfo: n, clickNext: o, extraView: r, togglePriceInfo: l });
            });
          function z(e) {
            var i = e.refundPrice,
              t = e.invoiceRemark;
            return (0, b.BX)(w.View, {
              style: { flex: 1 },
              children: [
                (0, b.BX)(w.View, {
                  style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  },
                  children: [
                    (0, b.tZ)(w.Text, {
                      style: { color: g.Z.grey_33, fontSize: 17 },
                      children: "退款：",
                    }),
                    (0, b.tZ)(w.View, {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 2,
                      },
                      children: (0, b.BX)(w.Text, {
                        style: {
                          color: g.Z.tyMainColor,
                          fontSize: 17,
                          fontWeight: "bold",
                        },
                        children: [i, " "],
                      }),
                    }),
                  ],
                }),
                !!t &&
                  (0, b.tZ)(w.Text, {
                    style: { fontSize: 12, color: g.Z.grey_99, marginTop: 2 },
                    children: t,
                  }),
              ],
            });
          }
          var L = t(19972),
            j = t(90582),
            N = t(32970);
          function X() {
            var e = arguments.length > 1 ? arguments[1] : void 0,
              i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            i ? (0, N.fy)(e) : (0, N.Cz)(e);
          }
          var W,
            F = (function () {
              function e(i, t) {
                var n = this;
                (0, o.Z)(this, e),
                  (0, a.Z)(this, "view", null),
                  (0, a.Z)(this, "refundModel", null),
                  (0, a.Z)(this, "judgeValidInvoiceDetail", function (e) {
                    var i,
                      t,
                      o,
                      r = e.email,
                      l = e.invoiceSelected,
                      c = e.address,
                      d = e.invoiceHead,
                      a = e.refundFeeInvoiceInfo;
                    if (
                      !(null === (i = n.refundModel) || void 0 === i
                        ? void 0
                        : i.getNeedShowInvoice()) ||
                      !l
                    )
                      return !0;
                    var s = c.deliveryDetailAddress,
                      u = c.receiver,
                      f = c.receiverMobile,
                      v = c.deliveryAddress,
                      g = d.invoiceType,
                      p = d.taxNumber,
                      m = d.invoiceTitle,
                      w = v + s;
                    if (
                      null !== (t = n.refundModel) &&
                      void 0 !== t &&
                      t.getIsPaperInvoice()
                    ) {
                      if (!w || 0 == w.length)
                        return (0, j.v)("", "请选择报销凭证邮寄地址"), !1;
                      if (!f || !u)
                        return (0, j.v)("", "联系人和联系电话不能为空"), !1;
                    }
                    return m
                      ? 2 == g &&
                        15 != p.length &&
                        18 != p.length &&
                        20 != p.length
                        ? ((0, j.v)("", "请填写正确的纳税人识别号"), !1)
                        : !!(
                            (null !== (o = n.refundModel) &&
                              void 0 !== o &&
                              o.getIsPaperInvoice() &&
                              (null == a || !a.enableElectronicDelivery)) ||
                            (r && P.Z.isEmail(r))
                          ) ||
                          (h().showToast({ title: "请输入正确的邮箱地址" }), !1)
                      : ((0, j.v)("", "请填写发票抬头"), !1);
                  }),
                  (0, a.Z)(this, "toOrderDetailPage", function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      i = arguments.length > 1 ? arguments[1] : void 0;
                    try {
                      var t;
                      X(
                        e,
                        i,
                        null === (t = n.refundModel) || void 0 === t
                          ? void 0
                          : t.getIsIntl()
                      );
                    } catch (e) {
                      console.log(e),
                        h().showToast({
                          title: "请回退到订单详情页刷新查看进度",
                        });
                    }
                  }),
                  (this.view = i),
                  (this.refundModel = t);
              }
              return (
                (0, r.Z)(e, [
                  {
                    key: "initData",
                    value: function () {
                      var e,
                        i,
                        t,
                        n,
                        o,
                        r,
                        l,
                        c,
                        d,
                        a,
                        s,
                        u = {
                          segmentList:
                            null === (e = this.refundModel) || void 0 === e
                              ? void 0
                              : e.getSelectSegmentList(),
                          hintText:
                            null === (i = this.refundModel) ||
                            void 0 === i ||
                            null === (t = i.getRefundData()) ||
                            void 0 === t
                              ? void 0
                              : t.hintText,
                          mobile:
                            null === (n = this.refundModel) ||
                            void 0 === n ||
                            null === (o = n.getRefundData()) ||
                            void 0 === o ||
                            null === (r = o.contactInfo) ||
                            void 0 === r
                              ? void 0
                              : r.mobile,
                          orderNumber:
                            null === (l = this.refundModel) ||
                            void 0 === l ||
                            null === (c = l.getOrderData()) ||
                            void 0 === c
                              ? void 0
                              : c.orderNumber,
                          invoiceSelected:
                            null === (d = this.refundModel) || void 0 === d
                              ? void 0
                              : d.getInvoiceSelected(),
                          refundFeeInvoiceInfo:
                            null === (a = this.refundModel) ||
                            void 0 === a ||
                            null === (s = a.getRefundData()) ||
                            void 0 === s
                              ? void 0
                              : s.refundFeeInvoiceInfo,
                        };
                      this.view.initData(u);
                    },
                  },
                  {
                    key: "refreshInvoiceDetail",
                    value: function (e) {
                      this.refundModel.setInvoiceSelected(!e),
                        this.refundModel.update();
                    },
                  },
                  {
                    key: "refreshInvoiceTypeSelected",
                    value: function (e) {
                      this.refundModel.setSelectElectronic(e),
                        this.refundModel.update();
                    },
                  },
                  {
                    key: "popMessage",
                    value: function (e) {
                      var i;
                      (0, j.v)(
                        "确定提交退票吗?",
                        null === (i = this.refundModel) || void 0 === i
                          ? void 0
                          : i.getSubmitRemark(),
                        { text: "取消" },
                        { text: "确认", callback: e }
                      );
                    },
                  },
                  {
                    key: "handleParam",
                    value: function (e) {
                      var i,
                        t = this;
                      null !== (i = this.refundModel) &&
                      void 0 !== i &&
                      i.getSelectReason()
                        ? (0, u.cW)(e.segmentList).then(function (i) {
                            if (
                              (console.log("uploadImagesSelect.result", i),
                              0 === i)
                            )
                              return (
                                h().showToast({
                                  title: "网络开小差了，请重新操作",
                                }),
                                void (t.view.canClickNext = !0)
                              );
                            2 !== i
                              ? Array.isArray(i) &&
                                t.getSubmitParam(
                                  (0, m.Z)(
                                    (0, m.Z)({}, e),
                                    {},
                                    { segmentList: i }
                                  )
                                )
                              : t.getSubmitParam(e);
                          })
                        : this.getSubmitParam(e);
                    },
                  },
                  {
                    key: "getSubmitParam",
                    value: function (e) {
                      var i,
                        t,
                        n,
                        o = e.segmentList,
                        r = e.invoiceSelected,
                        l = e.address,
                        c = e.invoiceHead,
                        d = e.email,
                        a = e.selectedRemarkObj,
                        s = e.refundFeeInvoiceInfo,
                        f = e.orderNumber;
                      (0, L.Q)("正在退票...", null, !0);
                      var h =
                          null === (i = this.refundModel) || void 0 === i
                            ? void 0
                            : i.getXProducts(),
                        v = {
                          isShowInvoice:
                            null === (t = this.refundModel) || void 0 === t
                              ? void 0
                              : t.getNeedShowInvoice(),
                          invoiceSelected: r,
                          address: l,
                          invoiceHead: c,
                          email: d,
                          selectedRemarkObj: a,
                          isPaper:
                            null === (n = this.refundModel) || void 0 === n
                              ? void 0
                              : n.getIsPaperInvoice(),
                          enableElectronicDelivery:
                            null == s ? void 0 : s.enableElectronicDelivery,
                        },
                        g = (0, u.Yy)(o, f, v, h, this.refundModel);
                      this.view.submitRefund(g);
                    },
                  },
                  {
                    key: "getNeedShowInvoice",
                    value: function () {
                      var e;
                      return null === (e = this.refundModel) || void 0 === e
                        ? void 0
                        : e.getNeedShowInvoice();
                    },
                  },
                  {
                    key: "getInvoiceData",
                    value: function () {
                      var e, i;
                      return {
                        isNeedShowInvoice:
                          null === (e = this.refundModel) || void 0 === e
                            ? void 0
                            : e.getNeedShowInvoice(),
                        isPaper:
                          null === (i = this.refundModel) || void 0 === i
                            ? void 0
                            : i.getIsPaperInvoice(),
                        displayPrice:
                          this.refundModel.getSumOfPriceForDisplay(),
                        paidArr: this.refundModel.getPaidPriceArr(),
                        paidPrice: this.refundModel.getPaidPrice(),
                        refundArr: this.refundModel.getRefundPriceArr(),
                        refundPrice: this.refundModel.getRefundPrice(),
                      };
                    },
                  },
                  {
                    key: "getInvoiceTypeList",
                    value: function (e) {
                      var i,
                        t,
                        n,
                        o,
                        r,
                        l,
                        c,
                        d,
                        a = this,
                        s = e.invoiceHead,
                        f = e.address,
                        h = e.selectedRemarkObj,
                        v = e.isElectronic,
                        p = e.refundFeeInvoiceInfo,
                        m =
                          null === (i = this.refundModel) || void 0 === i
                            ? void 0
                            : i.getIsFirstNeedInvoice(),
                        w = 2 == (null == p ? void 0 : p.deliveryType),
                        y = null == p ? void 0 : p.enableElectronicDelivery,
                        b = null == p ? void 0 : p.canChooseElectronic,
                        Z =
                          (null == p ? void 0 : p.canChooseElectronic) &&
                          (null == p ||
                          null === (t = p.electronicInvoiceRelateInfo) ||
                          void 0 === t
                            ? void 0
                            : t.invoiceRemark),
                        x =
                          null == p ||
                          null === (n = p.invoiceRelateInfo) ||
                          void 0 === n
                            ? void 0
                            : n.invoiceRemark,
                        I = m && b,
                        S =
                          null === (o = this.refundModel) || void 0 === o
                            ? void 0
                            : o.getIsPaperInvoice();
                      return [
                        {
                          onPress: function () {
                            a.view.invoiceTypeCompareRef &&
                              a.view.invoiceTypeCompareRef.open();
                          },
                          type: "FlightInvoiceTitle",
                          isShowHowToChooseInvoice: I,
                          isShow: I,
                          title: "凭证类型",
                          titleStyle: { fontSize: 15, color: g.Z.grey_66 },
                        },
                        {
                          type: "SelectInvoiceType",
                          showTopLine: I,
                          selectIndex: v,
                          canSelect: !!I,
                          onPress: function (e) {
                            a.view.selectInvoiceIndex(e);
                          },
                          value:
                            m && !b ? "纸质凭证" : w ? "电子凭证" : "纸质凭证",
                          isShow: !0,
                        },
                        {
                          title: "凭证清单",
                          value: (0, u.Nm)(b, Z, x, v),
                          onPress: function () {
                            a.view.invoiceDetailEpRef &&
                              a.view.invoiceDetailEpRef.open();
                          },
                          type: "invoiceType",
                          isShow: !0,
                        },
                        {
                          title: "邮寄方式",
                          value: "配送费".concat(
                            null == p ||
                              null === (r = p.invoiceRelateInfo) ||
                              void 0 === r
                              ? void 0
                              : r.deliveryPrice,
                            "元"
                          ),
                          type: "ItemView",
                          enable: !1,
                          isShow: !!S,
                        },
                        {
                          title: "寄出时间",
                          value:
                            (null == p ||
                            null === (l = p.invoiceRelateInfo) ||
                            void 0 === l
                              ? void 0
                              : l.deliveryText) || "",
                          type: "ItemView",
                          enable: !1,
                          isShow:
                            !!S &&
                            (null == p ||
                            null === (c = p.invoiceRelateInfo) ||
                            void 0 === c
                              ? void 0
                              : c.deliveryText),
                        },
                        {
                          title: "发票抬头",
                          value: "".concat(s && s.invoiceTitle),
                          subValue: "".concat(
                            (s && s.taxNumber && s.taxNumber) || ""
                          ),
                          enable: !0,
                          onPress: function () {
                            a.view.invoiceDetailRef.editInvoiceMessage();
                          },
                          typeIsAddress: !1,
                          editBtnType: !0,
                          type: "ChangeDetailView",
                          isShow: !0,
                        },
                        {
                          type: "EmptyHeight",
                          height: 15,
                          isShow: null == p ? void 0 : p.invoiceRemarkInfo,
                        },
                        {
                          type: "RemarksInvoice",
                          isShow: null == p ? void 0 : p.invoiceRemarkInfo,
                          selectAllSelect: h,
                          selectList:
                            null == p ||
                            null === (d = p.invoiceRemarkInfo) ||
                            void 0 === d
                              ? void 0
                              : d.remarkDetailList,
                          onClick: this.view.selectRemarkObj,
                          lookExample: this.view.lookRemarksExample,
                          needBottomLine: !0,
                          needMarginRight: !1,
                        },
                        {
                          title: "收件地址",
                          value: ""
                            .concat(f && f.receiver, "  ")
                            .concat(f && f.receiverMobile),
                          subValue: ""
                            .concat(f && f.deliveryAddress, "  ")
                            .concat(f && f.deliveryDetailAddress),
                          enable: !0,
                          onPress: function () {
                            a.view.invoiceDetailRef.editAddressMessage();
                          },
                          typeIsAddress: !0,
                          editBtnType: !0,
                          needBottomLine: !(S && !y),
                          type: "ChangeDetailView",
                          isShow: !!S,
                        },
                        {
                          title: "电子邮件",
                          type: "InputIemView",
                          getInputValue: this.view.refreshEmail,
                          needBottomLine: !1,
                          isShow: !S || y,
                        },
                      ];
                    },
                  },
                ]),
                e
              );
            })(),
            E = h().getSystemInfoSync().windowWidth,
            H = function (e) {
              var i = e.needBottom,
                t = void 0 === i || i,
                n = e.needRight,
                o = void 0 === n || n,
                r = e.value,
                l = void 0 === r ? "" : r,
                c = e.backgroundColor,
                d = void 0 === c ? "white" : c,
                a = e.textColor,
                s = void 0 === a ? g.Z.grey_66 : a,
                u = e.boxWidth,
                f = void 0 === u ? (E - 30) / 3 : u,
                h = e.boxHeight,
                v = void 0 === h ? 37 : h,
                p = e.lineColor,
                m = void 0 === p ? g.Z.grey_cc : p,
                y = t ? { borderBottomWidth: 1, borderBottomColor: m } : {},
                Z = o ? { borderRightWidth: 1, borderRightColor: m } : {};
              return (0, b.tZ)(w.View, {
                style: [
                  {
                    backgroundColor: d,
                    width: f,
                    height: v,
                    justifyContent: "center",
                    paddingLeft: 19,
                  },
                  y,
                  Z,
                ],
                children: (0, b.tZ)(w.Text, {
                  style: { fontSize: 13, color: s },
                  children: l,
                }),
              });
            },
            O = t(72077),
            A = h().getSystemInfoSync(),
            q = A.windowWidth,
            Q = A.windowHeight,
            U = ["", "发票形式", "发票收到时间", "费用", "丢失处理"],
            J = [
              "电子凭证",
              "电子版(邮箱)",
              "起飞后24小时",
              "无快递费",
              "一键补开",
            ],
            Y = ["纸质凭证", "纸质", "起飞后一周内", "收快递费", "补发快递"],
            G = [
              {
                title: "Q：智行可以提供什么类型的报销凭证？",
                desc: "智行将会根据您购买的机票产品，为您提供不同类型的报销凭证",
              },
              {
                title: "Q：如何开具报销凭证？",
                desc: "您可以选择在购买机票时，在填写页索要报销凭证；也可在购买机票后在订单详情页索要或者列表页批量索要",
              },
              {
                title: "Q：税号在哪里查？",
                desc: "税号在您公司营业执照上的名称为：统一社会信用代码，在税务登记证上名称为纳税人识别号。具体可询问贵公司相关财务人员",
              },
              {
                title: "Q：保险能不能和机票款开具在一张发票上？",
                desc: "保险不能和机票款合并开发票。因为保险法的相关规定，保险将单独提供发票",
              },
              {
                title: "Q：为什么我的报销凭证没收到？",
                desc: "智行app端均支持查询配送进度。电子发票支持再次发送，建议您也可以查看邮箱的垃圾邮件是否误入。纸质凭证如已签收，建议查找门卫或前台是否帮忙签收",
              },
            ],
            K = (function (e) {
              (0, c.Z)(t, e);
              var i = (0, d.Z)(t);
              function t(e) {
                var n;
                return (
                  (0, o.Z)(this, t),
                  ((n = i.call(this, e)).state = { isShow: !1 }),
                  n
                );
              }
              return (
                (0, r.Z)(t, [
                  {
                    key: "open",
                    value: function () {
                      this.setState({ isShow: !0 }, function () {});
                    },
                  },
                  {
                    key: "close",
                    value: function () {
                      this.setState({ isShow: !1 });
                    },
                  },
                  {
                    key: "getTopQuestions",
                    value: function () {
                      return (0, b.BX)(w.View, {
                        style: { paddingLeft: 15, paddingRight: 15 },
                        children: [
                          this.tagView(),
                          G.map(function (e) {
                            return (0,
                            b.BX)(w.View, { style: $.item_view, children: [(0, b.tZ)(w.Text, { style: $.title, children: e.title }), (0, b.tZ)(w.Text, { style: $.desc, children: e.desc })] });
                          }),
                          this.tagView("报销凭证对比", !0),
                        ],
                      });
                    },
                  },
                  {
                    key: "tagView",
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "报销问题",
                        i = arguments.length > 1 ? arguments[1] : void 0;
                      return (0, b.BX)(w.View, {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          marginBottom: 12,
                          marginTop: i ? 16 : 0,
                        },
                        children: [
                          (0, b.tZ)(w.View, {
                            style: {
                              height: 15,
                              width: 3,
                              borderRadius: 2,
                              backgroundColor: g.Z.zxMainColor,
                              marginRight: 7,
                            },
                          }),
                          (0, b.tZ)(w.Text, {
                            style: {
                              fontSize: 17,
                              color: g.Z.grey_33,
                              fontWeight: "bold",
                            },
                            children: e,
                          }),
                        ],
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this;
                      if (!this.state.isShow) return (0, b.tZ)(w.View, {});
                      var i = this.props.isShowQuestion,
                        t = this.props.zIndex
                          ? { zIndex: this.props.zIndex }
                          : {},
                        n = i ? { maxHeight: 0.8 * Q } : {};
                      return (0, b.BX)(w.View, {
                        style: [ee.container, t],
                        children: [
                          (0, b.tZ)(w.View, {
                            testID: O.oS.close_invoice_question_modal,
                            activeOpacity: 1,
                            onClick: function () {
                              e.close();
                            },
                            children: (0, b.tZ)(w.View, {
                              style: {
                                flex: 1,
                                backgroundColor: "transparent",
                                width: q,
                              },
                            }),
                          }),
                          (0, b.BX)(w.View, {
                            style: ee.container_view,
                            children: [
                              (0, b.BX)(w.View, {
                                style: ee.header_view,
                                children: [
                                  (0, b.tZ)(y.Z, {
                                    style: { color: "transparent" },
                                    children: "󰳭",
                                  }),
                                  (0, b.tZ)(w.Text, {
                                    style: ee.header_text,
                                    children:
                                      this.props.title || "凭证类型对比",
                                  }),
                                  (0, b.tZ)(w.View, {
                                    onClick: function () {
                                      e.close();
                                    },
                                    children: (0, b.tZ)(y.Z, {
                                      style: {
                                        color: g.Z.grey_99,
                                        fontSize: 21,
                                      },
                                      children: "󰳭",
                                    }),
                                  }),
                                ],
                              }),
                              (0, b.tZ)(w.View, {
                                style: n,
                                children: (0, b.BX)(w.ScrollView, {
                                  children: [
                                    !!i && this.getTopQuestions(),
                                    (0, b.BX)(w.View, {
                                      style: ee.table,
                                      children: [
                                        (0, b.tZ)(w.View, {
                                          children: U.map(function (e, i) {
                                            return (0,
                                            b.tZ)(H, { textColor: "#222222", backgroundColor: g.Z.grey_f5, needBottom: i !== U.length - 1, value: e });
                                          }),
                                        }),
                                        (0, b.tZ)(w.View, {
                                          children: J.map(function (e, i) {
                                            return (0,
                                            b.tZ)(H, { textColor: 0 == i ? "#222222" : g.Z.grey_66, backgroundColor: 0 == i ? g.Z.grey_f5 : "white", needBottom: i !== U.length - 1, value: e });
                                          }),
                                        }),
                                        (0, b.tZ)(w.View, {
                                          children: Y.map(function (e, i) {
                                            return (0,
                                            b.tZ)(H, { textColor: 0 == i ? "#222222" : g.Z.grey_66, backgroundColor: 0 == i ? g.Z.grey_f5 : "white", needBottom: i !== U.length - 1, value: e });
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, b.tZ)(w.View, {
                                      style: {
                                        height: 80,
                                        backgroundColor: "transparent",
                                        width: q,
                                      },
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      });
                    },
                  },
                ]),
                t
              );
            })(s.Component),
            $ = (0, v.lW)({
              item_view: {
                backgroundColor: g.Z.grey_f5,
                borderRadius: 6,
                padding: 15,
                marginBottom: 8,
              },
              title: {
                fontSize: 13,
                color: g.Z.grey_33,
                fontWeight: "bold",
                marginBottom: 8,
              },
              desc: { fontSize: 12, color: g.Z.grey_66, lineHeight: 16 },
            }),
            ee = (0, v.lW)({
              container_view: {
                backgroundColor: "white",
                width: q,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
              table: {
                borderWidth: 1,
                borderColor: g.Z.grey_cc,
                display: "flex",
                flexDirection: "row",
                borderRadius: 4,
                overflow: "hidden",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 5,
              },
              container: {
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.7)",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                flexDirection: "column",
                justifyContent: "flex-end",
              },
              header_view: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 54,
                marginLeft: 15,
                marginRight: 15,
              },
              header_text: {
                fontSize: 18,
                color: "#222222",
                fontWeight: "bold",
              },
            }),
            ie = K,
            te = h().getSystemInfoSync(),
            ne = te.windowWidth,
            oe = te.windowHeight,
            re = (function (e) {
              (0, c.Z)(t, e);
              var i = (0, d.Z)(t);
              function t(e) {
                var n;
                return (
                  (0, o.Z)(this, t),
                  ((n = i.call(this, e)).state = { isShow: !1 }),
                  n
                );
              }
              return (
                (0, r.Z)(t, [
                  {
                    key: "open",
                    value: function () {
                      this.setState({ isShow: !0 }, function () {});
                    },
                  },
                  {
                    key: "close",
                    value: function () {
                      this.setState({ isShow: !1 });
                    },
                  },
                  {
                    key: "getLabelView",
                    value: function (e) {
                      return (0, b.BX)(w.View, {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 15,
                          alignItems: "center",
                        },
                        children: [
                          (0, b.tZ)(w.View, {
                            style: {
                              height: 15,
                              width: 3,
                              backgroundColor: g.Z.zxMainColor,
                              borderRadius: 3,
                              marginRight: 6,
                            },
                          }),
                          (0, b.tZ)(w.Text, {
                            style: {
                              fontSize: 16,
                              color: g.Z.grey_33,
                              fontWeight: "bold",
                            },
                            children: e,
                          }),
                        ],
                      });
                    },
                  },
                  {
                    key: "eletronicView",
                    value: function () {
                      return (0, b.BX)(w.View, {
                        style: { paddingLeft: 15, paddingRight: 15 },
                        children: [
                          this.getLabelView("电子发票"),
                          (0, b.tZ)(w.Image, {
                            resizeMode: "contain",
                            style: {
                              height: 250,
                              marginTop: 15,
                              width: ne - 30,
                            },
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/baoxiao/fapiao.png",
                          }),
                        ],
                      });
                    },
                  },
                  {
                    key: "compareView",
                    value: function () {
                      return (0, b.BX)(w.View, {
                        children: [
                          (0, b.tZ)(w.View, {
                            style: le.cpmpare_top_view,
                            children: this.getLabelView("凭证类型对比"),
                          }),
                          (0, b.BX)(w.View, {
                            style: {
                              borderWidth: 1,
                              borderColor: g.Z.grey_cc,
                              display: "flex",
                              flexDirection: "row",
                              borderRadius: 4,
                              overflow: "hidden",
                              marginLeft: 15,
                              marginRight: 15,
                              marginBottom: 15,
                              marginTop: 5,
                            },
                            children: [
                              this.getFormItem([
                                "",
                                "发票形式",
                                "发票收到时间",
                                "费用",
                                "丢失处理",
                              ]),
                              this.getFormItem([
                                "电子凭证",
                                "电子版(邮箱)",
                                "起飞后24小时",
                                "无快递费",
                                "一键补开",
                              ]),
                              this.getFormItem([
                                "纸质凭证",
                                "纸质",
                                "起飞后一周内",
                                "收快递费",
                                "补发快递",
                              ]),
                            ],
                          }),
                        ],
                      });
                    },
                  },
                  {
                    key: "getFormItem",
                    value: function (e) {
                      return (0, b.tZ)(w.View, {
                        children: e.map(function (i, t) {
                          return (0,
                          b.tZ)(H, { textColor: 0 == t ? "#222222" : g.Z.grey_66, backgroundColor: 0 == t ? g.Z.grey_f5 : "white", needBottom: t !== e.length - 1, value: i });
                        }),
                      });
                    },
                  },
                  {
                    key: "getWebViewHeight",
                    value: function () {
                      return 1 == this.props.invoicetypeNumber ? 1300 : 900;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this;
                      if (!this.state.isShow) return (0, b.tZ)(w.View, {});
                      var i =
                        this.props.isEletronic && !this.props.isShowAllInvoice
                          ? (oe / 100) * 50
                          : (oe / 100) * 80 + 25;
                      return (0, b.BX)(w.View, {
                        style: le.container,
                        children: [
                          (0, b.tZ)(w.View, {
                            activeOpacity: 1,
                            onClick: function () {
                              e.close();
                            },
                            children: (0, b.tZ)(w.View, { style: { flex: 1 } }),
                          }),
                          (0, b.BX)(w.View, {
                            style: {
                              backgroundColor: "white",
                              width: ne,
                              paddingBottom: 50,
                              borderTopLeftRadius: 16,
                              borderTopRightRadius: 16,
                            },
                            children: [
                              (0, b.BX)(w.View, {
                                style: le.header_view,
                                children: [
                                  (0, b.tZ)(y.Z, {
                                    style: { color: "transparent" },
                                    children: "󰳭",
                                  }),
                                  (0, b.tZ)(w.Text, {
                                    style: le.header_text,
                                    children: "凭证样例",
                                  }),
                                  (0, b.tZ)(w.View, {
                                    activeOpacity: 1,
                                    onClick: function () {
                                      e.close();
                                    },
                                    children: (0, b.tZ)(y.Z, {
                                      style: {
                                        color: g.Z.grey_99,
                                        fontSize: 21,
                                      },
                                      children: "󰳭",
                                    }),
                                  }),
                                ],
                              }),
                              this.props.isShowAllInvoice
                                ? (0, b.tZ)(w.View, {
                                    children: (0, b.tZ)(w.View, {
                                      style: { height: i, marginTop: -10 },
                                      children: (0, b.BX)(w.ScrollView, {
                                        style: { flex: 1 },
                                        children: [
                                          this.props.isNeedSelectElectronic &&
                                            this.compareView(),
                                          this.props.isEletronic &&
                                            this.eletronicView(),
                                          this.props.isExitPaper &&
                                            (0, b.tZ)(w.WebView, {
                                              javaScriptEnabled: !0,
                                              domStorageEnabled: !0,
                                              startInLoadingState: !0,
                                              style: {
                                                border: "none",
                                                height: this.getWebViewHeight(),
                                              },
                                              mixedContentMode: "always",
                                              src: "https://pages.ctrip.com/ztrip/document/bxpz.html?invoiceType=(invoiceDesc)".replace(
                                                "(invoiceDesc)",
                                                this.props.invoicetypeNumber
                                              ),
                                            }),
                                        ],
                                      }),
                                    }),
                                  })
                                : (0, b.tZ)(w.View, {
                                    style: { height: i, marginTop: -10 },
                                    children: this.props.isEletronic
                                      ? this.eletronicView()
                                      : (0, b.tZ)(w.WebView, {
                                          javaScriptEnabled: !0,
                                          domStorageEnabled: !0,
                                          startInLoadingState: !0,
                                          style: { border: "none" },
                                          mixedContentMode: "always",
                                          src: "https://pages.ctrip.com/ztrip/document/bxpz.html?invoiceType=(invoiceDesc)".replace(
                                            "(invoiceDesc)",
                                            this.props.invoicetypeNumber
                                          ),
                                        }),
                                  }),
                            ],
                          }),
                        ],
                      });
                    },
                  },
                ]),
                t
              );
            })(s.Component),
            le = (0, v.lW)({
              container: {
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.7)",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                zIndex: 200,
                flexDirection: "column",
                justifyContent: "flex-end",
              },
              header_view: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 54,
                marginLeft: 15,
                marginRight: 15,
              },
              header_text: {
                fontSize: 18,
                color: "#222222",
                fontWeight: "bold",
              },
              cpmpare_top_view: {
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 12,
              },
            }),
            ce = re,
            de = h().getSystemInfoSync().windowWidth,
            ae = (function (e) {
              (0, c.Z)(t, e);
              var i = (0, d.Z)(t);
              function t(e) {
                var n;
                return (
                  (0, o.Z)(this, t),
                  ((n = i.call(this, e)).state = { isShow: !1 }),
                  n
                );
              }
              return (
                (0, r.Z)(t, [
                  {
                    key: "open",
                    value: function () {
                      this.setState({ isShow: !0 }, function () {});
                    },
                  },
                  {
                    key: "close",
                    value: function () {
                      this.setState({ isShow: !1 });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this;
                      return this.state.isShow
                        ? (0, b.tZ)(w.View, {
                            style: se.container,
                            onClick: function () {
                              e.close();
                            },
                            children: (0, b.BX)(w.View, {
                              style: se.content,
                              children: [
                                (0, b.BX)(w.View, {
                                  style: se.header_view,
                                  children: [
                                    (0, b.tZ)(y.Z, {
                                      style: se.top_left,
                                      children: "󰳭",
                                    }),
                                    (0, b.tZ)(w.Text, {
                                      style: se.header_text,
                                      children: "发票备注",
                                    }),
                                    (0, b.tZ)(y.Z, {
                                      testID: O.ap.close_remark_modal,
                                      styles: se.top_right,
                                      children: "󰳭",
                                    }),
                                  ],
                                }),
                                (0, b.BX)(w.View, {
                                  style: se.in_content,
                                  children: [
                                    (0, b.tZ)(w.Text, {
                                      style: se.bottom_text,
                                      children:
                                        "1. 您可向贵公司财务确认是否需要添加备注信息 \n2. 选择备注信息类型后，对应的备注信息会打印 \n3. 备注中的行程信息、航班号是您实际乘坐的航班信息 \n4. 保险发票暂不支持添加发票备注",
                                    }),
                                    (0, b.tZ)(w.Image, {
                                      resizeMode: "contain",
                                      src: "https://images3.c-ctrip.com/ztrip/flight/beizhu@3x.png",
                                      style: se.image,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          })
                        : (0, b.tZ)(w.View, {});
                    },
                  },
                ]),
                t
              );
            })(s.Component),
            se = (0, v.lW)({
              image: { height: (841 * (de - 30)) / 794, width: de - 30 },
              bottom_text: { fontSize: 13, color: g.Z.grey_33, lineHeight: 18 },
              in_content: { paddingLeft: 15, paddingRight: 15 },
              content: {
                backgroundColor: "white",
                width: de,
                paddingBottom: 80,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
              top_right: { color: g.Z.grey_99, fontSize: 21 },
              top_left: { color: "transparent" },
              container: {
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.7)",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                flexDirection: "column",
                justifyContent: "flex-end",
              },
              header_view: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 54,
                marginLeft: 15,
                marginRight: 15,
              },
              header_text: { fontSize: 18, color: "#222222" },
            }),
            ue = ae,
            fe = t(23577),
            he = t(21145),
            ve = t(87298),
            ge = t(59582),
            pe = t(25214),
            me =
              (0, ve.h)()(
                (W = (function (e) {
                  (0, c.Z)(t, e);
                  var i = (0, d.Z)(t);
                  function t(e) {
                    var n;
                    return (
                      (0, o.Z)(this, t),
                      (n = i.call(this, e)),
                      (0, a.Z)((0, l.Z)(n), "refundModel", void 0),
                      (0, a.Z)((0, l.Z)(n), "presenter", void 0),
                      (0, a.Z)((0, l.Z)(n), "canClickNext", !0),
                      (0, a.Z)((0, l.Z)(n), "invoiceDetailRef", null),
                      (0, a.Z)((0, l.Z)(n), "invoiceTypeCompareRef", null),
                      (0, a.Z)((0, l.Z)(n), "invoiceRemarksRef", null),
                      (0, a.Z)((0, l.Z)(n), "invoiceDetailEpRef", null),
                      (0, a.Z)(
                        (0, l.Z)(n),
                        "submitRequest",
                        P.Z.throttle(function () {
                          var e = n.state,
                            i = e.email,
                            t = e.invoiceSelected,
                            o = e.address,
                            r = e.invoiceHead,
                            l = e.refundFeeInvoiceInfo;
                          n.presenter.judgeValidInvoiceDetail({
                            email: i,
                            invoiceSelected: t,
                            address: o,
                            invoiceHead: r,
                            refundFeeInvoiceInfo: l,
                          }) && n.presenter.popMessage(n.uploadImage);
                        })
                      ),
                      (0, a.Z)((0, l.Z)(n), "uploadImage", function () {
                        if (n.canClickNext) {
                          n.canClickNext = !1;
                          var e = n.state,
                            i = e.segmentList,
                            t = e.invoiceSelected,
                            o = e.address,
                            r = e.invoiceHead,
                            l = e.email,
                            c = e.selectedRemarkObj,
                            d = e.refundFeeInvoiceInfo,
                            a = e.orderNumber;
                          n.presenter.handleParam({
                            segmentList: i,
                            invoiceSelected: t,
                            address: o,
                            invoiceHead: r,
                            email: l,
                            selectedRemarkObj: c,
                            refundFeeInvoiceInfo: d,
                            orderNumber: a,
                          });
                        } else (0, j.v)("", "正在申请退票,请勿重复申请!");
                      }),
                      (0, a.Z)((0, l.Z)(n), "submitRefund", function (e) {
                        console.log(e),
                          (n.canClickNext = !0),
                          (function e(i) {
                            return new Promise(function (t) {
                              (0, D.MQ)(i)
                                .then(function (n) {
                                  var o;
                                  if (
                                    1 ==
                                    (null == n ||
                                    null === (o = n.asyncData) ||
                                    void 0 === o
                                      ? void 0
                                      : o.resultState)
                                  ) {
                                    var r,
                                      l =
                                        null == n ||
                                        null === (r = n.asyncData) ||
                                        void 0 === r
                                          ? void 0
                                          : r.interval;
                                    setTimeout(function () {
                                      t(e(i));
                                    }, l);
                                  } else t(n);
                                })
                                .catch(function (e) {
                                  t({ resultMessage: "网络异常，请重试" });
                                });
                            });
                          })(e).then(function (e) {
                            (0, L.Z)(), (n.canClickNext = !0);
                            var i = null == e ? void 0 : e.resultCode,
                              t =
                                (null == e ? void 0 : e.resultMessage) ||
                                "网络异常，";
                            "SMT-200" === i
                              ? (0, j.v)("", t || "退票成功", {
                                  text: "确定",
                                  callback: function () {
                                    n.presenter.toOrderDetailPage(
                                      3,
                                      n.state.orderNumber
                                    );
                                  },
                                })
                              : (0, j.v)("", t || "退票失败，请重试", {
                                  text: "好的",
                                  callback: function () {
                                    n.presenter.toOrderDetailPage(
                                      0,
                                      n.state.orderNumber
                                    );
                                  },
                                });
                          });
                      }),
                      (0, a.Z)((0, l.Z)(n), "switchOnInvoice", function () {
                        n.presenter.refreshInvoiceDetail(
                          n.state.invoiceSelected
                        ),
                          n.setState({
                            invoiceSelected: !n.state.invoiceSelected,
                          });
                      }),
                      (0, a.Z)((0, l.Z)(n), "backToChangeTicket", function () {
                        n.pop();
                      }),
                      (0, a.Z)((0, l.Z)(n), "lookPriceDetail", function (e) {
                        n.setState({ isShowPriceInfo: e }),
                          e && n.ubtTrace("Fdetial_applyrefund_price");
                      }),
                      (0, a.Z)((0, l.Z)(n), "back", function () {
                        n.refundModel.getInvoiceSelected() !=
                          n.refundModel.getInitSelectInvoice() &&
                          n.switchOnInvoice(),
                          n.pop();
                      }),
                      (0, a.Z)((0, l.Z)(n), "refreshAddress", function (e) {
                        n.setState({ address: e }, function () {});
                      }),
                      (0, a.Z)((0, l.Z)(n), "refreshInvoice", function (e) {
                        n.setState({ invoiceHead: e }, function () {});
                      }),
                      (0, a.Z)((0, l.Z)(n), "refreshEmail", function (e) {
                        n.setState({ email: e });
                      }),
                      (0, a.Z)((0, l.Z)(n), "selectRemarkObj", function (e) {
                        var i = n.state.selectedRemarkObj;
                        i[e] ? (i[e] = !1) : (i[e] = !0),
                          n.setState({ selectedRemarkObj: i });
                      }),
                      (0, a.Z)((0, l.Z)(n), "lookRemarksExample", function () {
                        n.invoiceRemarksRef && n.invoiceRemarksRef.open();
                      }),
                      (0, a.Z)((0, l.Z)(n), "selectInvoiceIndex", function (e) {
                        n.presenter.refreshInvoiceTypeSelected(e),
                          n.setState({ isElectronic: e });
                      }),
                      (n.state = {
                        segmentList: [],
                        hintText: null,
                        mobile: "",
                        isShowPriceInfo: !1,
                        orderNumber: "",
                        invoiceSelected: !1,
                        address: {
                          provinceName: "",
                          cityName: "",
                          areaName: "",
                          receiver: "",
                          receiverMobile: "",
                          deliveryAddress: "",
                          deliveryDetailAddress: "",
                        },
                        email: "",
                        invoiceHead: {
                          invoiceTitle: "",
                          taxNumber: "",
                          invoiceType: "",
                        },
                        isElectronic: 1,
                        selectedRemarkObj: {},
                        refundFeeInvoiceInfo: {},
                      }),
                      n
                    );
                  }
                  return (
                    (0, r.Z)(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            i,
                            t,
                            n,
                            o,
                            r,
                            l,
                            c,
                            d,
                            a = (0, f.getCurrentInstance)();
                          a &&
                            a.router &&
                            a.router.params &&
                            (this.refundModel = (0, ge.O)(a.router.params)),
                            (this.presenter = new F(this, this.refundModel)),
                            this.presenter.initData(),
                            console.log(
                              "flt_refund_confirm_init",
                              this.refundModel
                            ),
                            this.ubtDevTrace("flt_refund_confirm_init", {
                              model: {
                                selectReason:
                                  null === (e = this.refundModel) ||
                                  void 0 === e ||
                                  null === (i = e.selectReason) ||
                                  void 0 === i
                                    ? void 0
                                    : i.userAction,
                                isFreePrice:
                                  null === (t = this.refundModel) ||
                                  void 0 === t
                                    ? void 0
                                    : t.isFreePrice,
                                isValidPrice:
                                  null === (n = this.refundModel) ||
                                  void 0 === n
                                    ? void 0
                                    : n.isValidPrice,
                                paidPrice:
                                  null === (o = this.refundModel) ||
                                  void 0 === o
                                    ? void 0
                                    : o.paidPrice,
                                refundPrice:
                                  null === (r = this.refundModel) ||
                                  void 0 === r
                                    ? void 0
                                    : r.refundPrice,
                                paidPriceMap:
                                  null === (l = this.refundModel) ||
                                  void 0 === l
                                    ? void 0
                                    : l.paidPriceMap,
                                refundPriceMap:
                                  null === (c = this.refundModel) ||
                                  void 0 === c
                                    ? void 0
                                    : c.refundPriceMap,
                                sumOfPrice:
                                  null === (d = this.refundModel) ||
                                  void 0 === d
                                    ? void 0
                                    : d.sumOfPrice,
                              },
                            });
                        },
                      },
                      {
                        key: "pageDidAppear",
                        value: function () {
                          this.ubtTrace("refund_checkout");
                        },
                      },
                      {
                        key: "initData",
                        value: function (e) {
                          var i = e.segmentList,
                            t = e.hintText,
                            n = e.mobile,
                            o = e.orderNumber,
                            r = e.invoiceSelected,
                            l = e.refundFeeInvoiceInfo;
                          e.email,
                            e.address,
                            e.invoiceHead,
                            e.selectedRemarkObj,
                            this.setState({
                              segmentList: i,
                              hintText: t,
                              mobile: n,
                              refundFeeInvoiceInfo: l,
                              orderNumber: o,
                              invoiceSelected: r,
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            i,
                            t,
                            n,
                            o,
                            r,
                            l,
                            c = this;
                          if (!this.presenter) return null;
                          var d = this.state,
                            a = d.invoiceHead,
                            s = d.address,
                            u = d.selectedRemarkObj,
                            f = d.isElectronic,
                            h = d.refundFeeInvoiceInfo,
                            v =
                              null === (e = this.presenter) || void 0 === e
                                ? void 0
                                : e.getInvoiceData(),
                            m =
                              (this.presenter.getInvoiceTypeList({
                                invoiceHead: a,
                                address: s,
                                selectedRemarkObj: u,
                                isElectronic: f,
                                refundFeeInvoiceInfo: h,
                              }),
                              v.isNeedShowInvoice &&
                                this.state.invoiceSelected &&
                                v.isPaper &&
                                "已扣除¥".concat(
                                  (null ===
                                    (i = this.state.refundFeeInvoiceInfo) ||
                                  void 0 === i ||
                                  null === (t = i.invoiceRelateInfo) ||
                                  void 0 === t
                                    ? void 0
                                    : t.deliveryPrice) || 20,
                                  "报销凭证配送费"
                                ));
                          return (0, b.BX)(w.View, {
                            style: { flex: 1 },
                            children: [
                              (0, b.BX)(w.View, {
                                style: {
                                  display: "flex",
                                  height: "100%",
                                  backgroundColor: "#f5f5f5",
                                  flexDirection: "column",
                                },
                                children: [
                                  (0, b.tZ)(he.Z, { title: "退票确认" }),
                                  !!this.presenter &&
                                    (0, b.BX)(w.View, {
                                      style: {
                                        flex: 1,
                                        backgroundColor: g.Z.main_bg,
                                      },
                                      children: [
                                        (0, b.tZ)(w.ScrollView, {
                                          style: {
                                            zIndex: 2,
                                            paddingBottom: 100,
                                          },
                                          contentContainerStyle: {
                                            paddingBottom: 100,
                                          },
                                          children: (0, b.BX)(w.View, {
                                            style: p.scrollview_in_view,
                                            children: [
                                              (0, b.BX)(w.View, {
                                                style: p.top_content,
                                                children: [
                                                  this.returnFlightInfoView(
                                                    this.backToChangeTicket
                                                  ),
                                                  !!this.state.mobile &&
                                                    (0, b.tZ)(I, {
                                                      remark:
                                                        null ===
                                                          (n = this.state) ||
                                                        void 0 === n ||
                                                        null ===
                                                          (o = n.hintText) ||
                                                        void 0 === o
                                                          ? void 0
                                                          : o.refundFeeInvoiceHint,
                                                      list: [
                                                        {
                                                          title: "联系方式",
                                                          desc: this.state
                                                            .mobile,
                                                          needBorder: !1,
                                                        },
                                                      ],
                                                    }),
                                                ],
                                              }),
                                              (0, b.tZ)(pe.Z, {
                                                style: {
                                                  paddingTop: 15,
                                                  marginBottom: 110,
                                                },
                                                backgroundColor: "#f5f5f5",
                                                url: "http://images3.c-ctrip.com/ztrip/img/chuxingbaozheng_shy_zx@3x.png",
                                                imageHeight: 58,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, b.tZ)(M, {
                                          refundPrice: v.displayPrice,
                                          invoiceRemark: m,
                                          isShowPriceInfo:
                                            this.state.isShowPriceInfo,
                                          sureToRefund: this.submitRequest,
                                          extraView: (0, b.tZ)(_, {
                                            topRemark:
                                              null ===
                                                (r = this.state.hintText) ||
                                              void 0 === r
                                                ? void 0
                                                : r.refundAfterRebookHint,
                                            closeModal:
                                              this.lookPriceDetail.bind(
                                                this,
                                                !1
                                              ),
                                            paidPriceList: v.paidArr,
                                            paidPrice: v.paidPrice,
                                            needPayToUsPrice: v.refundPrice,
                                            needPayToUsPriceList: v.refundArr,
                                          }),
                                          lookPriceDetail: this.lookPriceDetail,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, b.tZ)(ie, {
                                ref: function (e) {
                                  return (c.invoiceTypeCompareRef = e);
                                },
                                showModal: !0,
                              }),
                              (0, b.tZ)(ue, {
                                ref: function (e) {
                                  return (c.invoiceRemarksRef = e);
                                },
                              }),
                              (0, b.tZ)(ce, {
                                isEletronic: !v.isPaper,
                                invoicetypeNumber:
                                  this.state.refundFeeInvoiceInfo &&
                                  (null ===
                                    (l = this.state.refundFeeInvoiceInfo) ||
                                  void 0 === l
                                    ? void 0
                                    : l.invoiceType),
                                ref: function (e) {
                                  return (c.invoiceDetailEpRef = e);
                                },
                                showModal: !0,
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "returnFlightInfoView",
                        value: function (e) {
                          var i = this.state.segmentList;
                          return (0, b.tZ)(w.View, {
                            children: i.map(function (i) {
                              var t,
                                n = [
                                  {
                                    title: "退票的行程",
                                    desc: ""
                                      .concat(i.route, " ")
                                      .concat(i.formateDepartDate2),
                                    needBorder: !0,
                                  },
                                  {
                                    title: "退票的乘客",
                                    desc: (0, u.qy)(i.selectTickets),
                                    isShowChangeBtn:
                                      (null === (t = i.selectTickets) ||
                                      void 0 === t
                                        ? void 0
                                        : t.length) > 1,
                                    needBorder: !0,
                                    onPress: function () {
                                      e();
                                    },
                                  },
                                  {
                                    title: "退款方式",
                                    desc: "退款至原支付渠道",
                                    needBorder: !1,
                                  },
                                ];
                              return (0, b.tZ)(I, { list: n });
                            }),
                          });
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return fe.Z.isTieyou ? "10650051907" : "10650051905";
                        },
                      },
                    ]),
                    t
                  );
                })(s.Component))
              ) || W;
          Page(
            (0, n.createPageConfig)(
              me,
              "pages/taroCRN/flight/pagesRefund/refundConfirm/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#f5f5f5",
                backgroundColorTop: "#f5f5f5",
                backgroundColorBottom: "#f5f5f5",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                enablePullDownRefresh: !1,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98946, 3322, 36332, 95854, 7160, 83004, 59188, 35048, 70486, 97709,
            6189, 22843, 6878, 71229, 10313, 19559, 11216, 68592,
          ],
          function () {
            return (function (i) {
              return e((e.s = i));
            })(68878);
          }
        ),
          e.O();
      },
    ]);
})();
