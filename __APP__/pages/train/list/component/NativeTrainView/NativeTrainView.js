require("../../../sub-vendors.js"),
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [72065],
    {
      16627: function (e, t, a) {
        var i = a(79792).default,
          n = a(49120).showToast;
        Component({
          behaviors: [],
          properties: {
            train: {
              type: Object,
              observer: function () {
                this.updateHasScaned();
              },
            },
            isHouBuConfig: Boolean,
            isNewGuest: Boolean,
            id: String,
            isShareMode: { type: Boolean },
            enableShareCheck: Boolean,
            isAlternateMode: {
              type: Boolean,
              observer: function (e) {
                e && this.updateAlternateData();
              },
            },
            selectDate: { type: String },
            alternateListData: {
              type: Array,
              value: [],
              observer: function () {
                this.updateAlternateData();
              },
            },
            modeType: {
              type: String,
              value: "",
              observer: function () {
                this.updateModeType();
              },
            },
            seats: {
              type: Array,
              observer: function () {
                this.updateAlternateData();
              },
            },
            isShowAlternatedot: { type: Boolean },
            alternatedotAni: { type: Object },
            trainItemScanedKeyList: {
              type: Array,
              observer: function () {
                this.updateHasScaned();
              },
            },
          },
          data: {
            noSeat: !1,
            seats: [],
            subTrainSeat: null,
            hasScaned: !1,
            isSaleTimeMode: !1,
          },
          options: { addGlobalClass: !0 },
          lifetimes: {
            attached: function () {
              this.updateData();
            },
            detached: function () {},
          },
          methods: {
            updateData: function () {
              var e = this.properties,
                t = e.train,
                a = e.id;
              this.setData({
                compId: t.timelineAnchorId || "tv_".concat(a),
                zxTyStr: i.zxTyStr,
              });
            },
            clickTrainItem: function () {
              var e;
              if (this.properties.isShareMode)
                return !this.properties.enableShareCheck ||
                  (null !== (e = this.properties.train) &&
                    void 0 !== e &&
                    e._isChecked4Share)
                  ? void this.triggerEvent("checkevent", {
                      train: this.properties.train._shareKey,
                    })
                  : void n("当前仅支持挑选10条以内的车次分享哦~");
              this.setData({ hasScaned: !0 }),
                this.triggerEvent("clickevent", {
                  train: this.properties.train,
                  hasScaned: this.data.hasScaned,
                });
            },
            updateAlternateData: function () {
              var e = this.properties,
                t = e.train,
                a = e.alternateListData,
                i = this.data,
                n = i.seats,
                r = i.selectDate,
                s = [];
              a.length > 0 &&
                a.map(function (e) {
                  e.TrainNumber === t.TrainNumber &&
                    e._selectedSeatName &&
                    r === e._selectDate &&
                    e._selectDate === t._selectDate &&
                    e.DepartStation === t.DepartStation &&
                    e.ArriveStation === t.ArriveStation &&
                    s.push(e._selectedSeatName);
                }),
                n.map(function (e) {
                  e._hasAlternated = s.some(function (t) {
                    return t === e.SeatName;
                  });
                }),
                this.setData({ seats: n });
            },
            onClickAlternateIcon: function (e) {
              if (this.properties.isAlternateMode) {
                var t = e.currentTarget.dataset.seatname,
                  a = this.properties,
                  i = a.train,
                  n = a.seats;
                i.seats = n;
                var r = {
                  train: i,
                  type: n.find(function (e) {
                    return e.SeatName === t;
                  })._hasAlternated
                    ? "delete"
                    : "add",
                  seatName: t,
                  domInfo: e,
                };
                this.triggerEvent("alternatevent", r);
              } else this.clickTrainItem();
            },
            onClickQueueInfoIcon: function () {
              this.triggerEvent("grabqueue");
            },
            updateHasScaned: function () {
              var e = this.properties,
                t = e.train,
                a = e.trainItemScanedKeyList;
              this.setData({ hasScaned: a.includes(t._shareKey) });
            },
            onClickAllRemainTicket: function () {
              this.triggerEvent("allremianticket", {
                train: this.properties.train,
              });
            },
            onClickSmartScheme: function () {
              this.triggerEvent("clicksmartscheme", {
                train: this.properties.train,
              });
            },
            updateModeType: function () {
              var e = this.properties.modeType;
              this.setData({ isSaleTimeMode: "robOpeningTimeQuery" === e });
            },
          },
        });
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (t) {
          return e((e.s = t));
        })(16627);
      }),
        e.O();
    },
  ]);
