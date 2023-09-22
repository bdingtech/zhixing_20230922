!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [606],
    {
      39886: function (e, n, t) {
        t.d(n, {
          LV: function () {
            return p;
          },
          M0: function () {
            return i;
          },
          Wj: function () {
            return h;
          },
          fN: function () {
            return l;
          },
          k9: function () {
            return c;
          },
          kR: function () {
            return o;
          },
          ok: function () {
            return d;
          },
          or: function () {
            return s;
          },
          pj: function () {
            return m;
          },
          xz: function () {
            return u;
          },
          zr: function () {
            return f;
          },
        });
        var a = t(79792),
          r = t(17377),
          i = (0, r.ZP)({
            serviceCode: "19833",
            channel: a.default.train_channel,
            path: "getShipProductList",
            bu: "ship",
          }),
          c = (0, r.ZP)({
            serviceCode: "23698",
            channel: a.default.train_channel,
            path: "getShipLine",
            bu: "ship",
          }),
          u = (0, r.ZP)({
            serviceCode: "23698",
            channel: a.default.train_channel,
            path: "searchLine",
            bu: "ship",
          }),
          o = (0, r.ZP)({
            serviceCode: "23698",
            channel: a.default.train_channel,
            path: "getOrderDetail",
            bu: "ship",
          }),
          d = (0, r.ZP)({
            serviceCode: "23698",
            channel: a.default.train_channel,
            path: "orderCancel",
            bu: "ship",
          }),
          l = (0, r.ZP)({
            serviceCode: "23698",
            channel: a.default.train_channel,
            path: "applyRefundTicket",
            bu: "ship",
          }),
          s = (0, r.ZP)({
            serviceCode: "23698",
            channel: a.default.train_channel,
            path: "getTicketLeft",
            bu: "ship",
          }),
          f = (0, r.ZP)({
            serviceCode: "23698",
            channel: a.default.train_channel,
            path: "getZTPassengerList",
            bu: "ship",
          }),
          m = (0, r.ZP)({
            serviceCode: "16586",
            channel: a.default.train_channel,
            path: "SaveCommonPassenger",
            bu: "ship",
          }),
          h = (0, r.ZP)({
            serviceCode: "23698",
            channel: a.default.train_channel,
            path: "checkPassengerType",
            bu: "ship",
          }),
          p = (0, r.ZP)({
            serviceCode: "19833",
            channel: a.default.train_channel,
            path: "CreateBookingOrder",
            bu: "ship",
          });
      },
      70807: function (e, n, t) {
        t.d(n, {
          cN: function () {
            return a;
          },
          cx: function () {
            return i;
          },
          nh: function () {
            return r;
          },
        });
        var a = [
            { name: "身份证", code: "1" },
            { name: "二代身份证", code: "1" },
            { name: "护照", code: "2" },
            { name: "学生证", code: "3" },
            { name: "军人证", code: "4" },
            { name: "驾驶证", code: "6" },
            { name: "回乡证", code: "7" },
            { name: "台胞证", code: "8" },
            { name: "港澳通行证", code: "10" },
            { name: "国际海员证", code: "11" },
            { name: "外国人永久居留证", code: "20" },
            { name: "旅行证", code: "21" },
            { name: "台湾通行证", code: "22" },
            { name: "士兵证", code: "23" },
            { name: "临时身份证", code: "24" },
            { name: "户口簿", code: "25" },
            { name: "警官证", code: "26" },
            { name: "出生证明", code: "27" },
            { name: "美国驾照", code: "29" },
            { name: "俄籍国内护照", code: "30" },
            { name: "海外当地旅行证件", code: "31" },
            { name: "港澳台居民居住证", code: "32" },
            { name: "香港身份证", code: "33" },
            { name: "香港居民身份证", code: "33" },
            { name: "澳门身份证", code: "34" },
          ],
          r = {
            CN: "中国大陆",
            HK: "中国香港",
            MO: "中国澳门",
            TW: "中国台湾",
            US: "美国",
            GB: "英国",
            JP: "日本",
            CA: "加拿大",
            FR: "法国",
            KR: "韩国",
            DE: "德国",
            DJ: "吉布提",
            DK: "丹麦",
            DM: "多米尼克",
            DO: "多米尼加",
            DZ: "阿尔及利亚",
            EC: "厄瓜多尔",
            EE: "爱沙尼亚",
            EG: "埃及",
            EH: "西撒哈拉",
            ER: "厄立特里亚",
            ES: "西班牙",
            ET: "埃塞俄比亚",
            FI: "芬兰",
            FJ: "斐济",
            FK: "福克兰群岛（马尔维纳斯）",
            FM: "密克罗尼西亚",
            FO: "法罗群岛",
            CC: "科科斯（基林）群岛",
            CD: "刚果（金）",
            CF: "中非",
            CG: "刚果（布）",
            CH: "瑞士",
            CI: "科特迪瓦",
            CK: "库克群岛",
            CL: "智利",
            CM: "喀麦隆",
            CO: "哥伦比亚",
            CR: "哥斯达黎加",
            CS: "塞尔维亚",
            CU: "古巴",
            CV: "佛得角",
            CX: "圣诞岛",
            CY: "塞浦路斯",
            CZ: "捷克",
            AD: "安道尔",
            AE: "阿联酋",
            AF: "阿富汗",
            AG: "安提瓜和巴布达",
            AI: "安圭拉",
            AL: "阿尔巴尼亚",
            AM: "亚美尼亚",
            AN: "荷属安的列斯",
            AO: "安哥拉",
            AQ: "南极洲",
            AR: "阿根廷",
            AS: "美属萨摩亚",
            AT: "奥地利",
            AU: "澳大利亚",
            AW: "阿鲁巴",
            AZ: "阿塞拜疆",
            BA: "波黑",
            BB: "巴巴多斯",
            BD: "孟加拉国",
            BE: "比利时",
            BF: "布基纳法索",
            BG: "保加利亚",
            BH: "巴林",
            BI: "布隆迪",
            BJ: "贝宁",
            BM: "百慕大",
            BN: "文莱",
            BO: "玻利维亚",
            BR: "巴西",
            BS: "巴哈马",
            BT: "不丹",
            BV: "布维岛",
            BW: "博茨瓦纳",
            BY: "白俄罗斯",
            BZ: "伯利兹",
            MP: "北马里亚纳",
            MQ: "马提尼克",
            MR: "毛里塔尼亚",
            MS: "蒙特塞拉特",
            MT: "马耳他",
            MU: "毛里求斯",
            MV: "马尔代夫",
            MW: "马拉维",
            MX: "墨西哥",
            MY: "马来西亚",
            MZ: "莫桑比克",
            NA: "纳米尼亚",
            NC: "新喀里多尼亚",
            NE: "尼日尔",
            NF: "诺福克岛",
            NG: "尼日利亚",
            NI: "尼加拉瓜",
            NL: "荷兰",
            NO: "挪威",
            NP: "尼泊尔",
            NR: "瑙鲁",
            NU: "纽埃",
            NZ: "新西兰",
            OM: "阿曼",
            PA: "巴拿马",
            PE: "秘鲁",
            PF: "法属波利尼西亚",
            PG: "巴布亚新几内亚",
            PH: "菲律宾",
            PK: "巴基斯坦",
            PL: "波兰",
            PM: "圣皮埃尔和密克隆",
            PN: "皮特凯恩",
            PR: "波多黎各",
            PS: "巴勒斯坦",
            PT: "葡萄牙",
            PW: "帕劳",
            PY: "巴拉圭",
            QA: "卡塔尔",
            RE: "留尼汪",
            RO: "罗马尼亚",
            RU: "俄罗斯",
            RW: "卢旺达",
            SA: "沙特阿拉伯",
            SB: "所罗门群岛",
            SC: "塞舌尔",
            SD: "苏丹",
            SE: "瑞典",
            SG: "新加坡",
            SH: "圣赫勒拿",
            SI: "斯洛文尼亚",
            SJ: "斯瓦尔巴岛和扬马延岛",
            SK: "斯洛伐克",
            SL: "塞拉利昂",
            SM: "圣马力诺",
            SN: "塞内加尔",
            SO: "索马里",
            SR: "苏里南",
            ST: "圣多美和普林西比",
            SV: "萨尔瓦多",
            SY: "叙利亚",
            SZ: "斯威士兰",
            TC: "特克斯和凯科斯群岛",
            TD: "乍得",
            TF: "法属南部领土",
            TG: "多哥",
            TH: "泰国",
            TJ: "塔吉克斯坦",
            TK: "托克劳",
            TM: "土库曼斯坦",
            TN: "突尼斯",
            TO: "汤加",
            TP: "东帝汶",
            TR: "土耳其",
            TT: "特立尼达和多巴哥",
            TV: "图瓦卢",
            KW: "科威特",
            KY: "开曼群岛",
            KZ: "哈萨克斯坦",
            LA: "老挝",
            LB: "黎巴嫩",
            LC: "圣卢西亚",
            LI: "列支敦士登",
            LK: "斯里兰卡",
            LR: "利比里亚",
            LS: "莱索托",
            LT: "立陶宛",
            LU: "卢森堡",
            LV: "拉脱维亚",
            LY: "利比亚",
            MA: "摩洛哥",
            MC: "摩纳哥",
            MD: "摩尔多瓦",
            MG: "马达加斯加",
            MH: "马绍尔群岛",
            MK: "前南马其顿",
            ML: "马里",
            MM: "缅甸",
            MN: "蒙古",
            UY: "乌拉圭",
            UZ: "乌兹别克斯坦",
            VA: "梵蒂冈",
            VC: "圣文森特和格林纳丁斯",
            VE: "委内瑞拉",
            VG: "英属维尔京群岛",
            VI: "美属维尔京群岛",
            VN: "越南",
            VU: "瓦努阿图",
            WF: "瓦利斯和富图纳",
            WS: "萨摩亚",
            YE: "也门",
            YT: "马约特",
            YU: "南斯拉夫",
            ZA: "南非",
            ZM: "赞比亚",
            ZW: "津巴布韦",
            GD: "格林纳达",
            GE: "格鲁吉亚",
            GF: "法属圭亚那",
            GH: "加纳",
            GI: "直布罗陀",
            GL: "格陵兰",
            GM: "冈比亚",
            GN: "几内亚",
            GP: "瓜德罗普",
            GQ: "赤道几内亚",
            GR: "希腊",
            GS: "南乔治亚岛和南桑德韦奇岛",
            GT: "危地马拉",
            GU: "关岛",
            GW: "几内亚比绍",
            GY: "圭亚那",
            HM: "赫德岛和麦克唐纳岛",
            HN: "洪都拉斯",
            HR: "克罗地亚",
            HT: "海地",
            HU: "匈牙利",
            ID: "印度尼西亚",
            IE: "爱尔兰",
            IL: "以色列",
            IN: "印度",
            IO: "英属印度洋领地",
            IQ: "伊拉克",
            IR: "伊朗",
            IS: "冰岛",
            IT: "意大利",
            JM: "牙买加",
            JO: "约旦",
            GA: "加蓬",
            TZ: "坦桑尼亚",
            UA: "乌克兰",
            UG: "乌干达",
            UM: "美国本土外小岛屿",
            KE: "肯尼亚",
            KG: "吉尔吉斯斯坦",
            KH: "柬埔寨",
            KI: "基里巴斯",
            KM: "科摩罗",
            KN: "圣基茨和尼维斯",
            KP: "朝鲜",
          },
          i = {
            CNAME: "中文姓名",
            FENAME: "英文姓",
            LENAME: "英文名",
            CARDTYPE: "证件类型",
            CARDNUM: "证件号",
            BIRTH: "出生日期",
            GENDER: "性别",
            COUNTRY: "国家/地区",
            FREQUENCY: "签发次数",
            STAYDAYS: "可停留天数",
            NATIONALITY: "国籍",
            STUDENT: "学生证",
            TICKET: "票种",
          };
      },
      93621: function (e, n, t) {
        var a = t(79792),
          r = t(92954),
          i = t.n(r),
          c = t(8271),
          u = t.n(c),
          o = t(79910),
          d = t(70807),
          l = Object.prototype.toString;
        function s() {
          if (arguments.length <= 1) return arguments[0] || "";
          var e = arguments[0],
            n = Array.prototype.slice.call(arguments, 1);
          return e.replace(/\{(\d+)\}/g, function (e, t) {
            return n[t];
          });
        }
        function f(e) {
          return "M" == e ? "男" : "F" == e ? "女" : "";
        }
        function m(e) {
          var n = d.cN.find(function (n) {
            return n.code == e;
          });
          return n ? n.name : "身份证";
        }
        function h(e) {
          var n = d.cN.find(function (n) {
            return n.name == e;
          });
          return n ? n.code : "999";
        }
        function p(e, n, t) {
          var a,
            r = "",
            i = "";
          if (o.Z.isEmptyObject(e))
            return { cardType: a, cardNo: r, cardVisaDate: i };
          if (t) {
            if (e.foreignInfo) {
              var c = e.foreignInfo.cardList[0] || {};
              (a = c.key), (r = c.value);
            }
            a || (a = n[0].requiredCard[0].idType);
          } else {
            for (
              var d = function (t, c) {
                  var o,
                    d = n[t],
                    l = "";
                  e.lastEditCardType
                    ? ((l = e.lastEditCardType), (a = m(l)))
                    : ((a = d.idType), (l = h(a)));
                  var s =
                    null === (o = e.CommonPassengerCard) || void 0 === o
                      ? void 0
                      : o.find(function (e) {
                          return e.CardType == l;
                        });
                  if (s)
                    return (
                      (r = s.CardNo),
                      (i = s.CardTimelimit
                        ? u()(s.CardTimelimit.replace(/\-/gi, "/")).format(
                            "YYYY-MM-DD"
                          )
                        : ""),
                      "break"
                    );
                },
                l = 0,
                s = n.length;
              l < s;
              l++
            ) {
              if ("break" === d(l)) break;
            }
            r || (a = n[0].idType);
          }
          return { cardType: a, cardNo: r, cardVisaDate: i };
        }
        function v(e, n) {
          var t = {
              nationality: function () {
                if (o.Z.isEmptyObject(n)) return "请选择具体国籍";
              },
              cname: function () {
                if (o.Z.isEmptyObject(n)) return "请输入姓名";
                return /^[\u4e00-\u9fa5]{2,14}$/.test(n)
                  ? void 0
                  : "请输入正确的中文姓名，不能包含字母和标点符号";
              },
              ename: function () {
                return n
                  ? /[a-zA-Z]/.test(n)
                    ? void 0
                    : "请输入正确的英文姓名"
                  : "请输入英文姓名";
              },
              idCard: function () {
                return o.Z.isEmptyObject(n)
                  ? "请输入证件号码"
                  : /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(
                      n
                    )
                  ? void 0
                  : "请输入正确的身份证号码";
              },
              passCard: function () {
                return o.Z.isEmptyObject(n)
                  ? "请输入证件号码"
                  : /^([a-zA-z]|[0-9]){5,17}$/.test(n)
                  ? void 0
                  : "请输入正确的护照号码";
              },
              card: function () {
                if (o.Z.isEmptyObject(n)) return "请输入证件号码";
              },
              country: function () {
                return o.Z.isEmptyObject(n)
                  ? "请选择国籍"
                  : "外籍" == n && o.Z.isEmptyObject(n)
                  ? "请选择具体国籍"
                  : void 0;
              },
              studentCardNo: function () {
                if (o.Z.isEmptyObject(n)) return "请填写学生证号码";
              },
              gender: function () {
                if (o.Z.isEmptyObject(n)) return "请选择乘客性别";
              },
              frequency: function () {
                if (o.Z.isEmptyObject(n)) return "请填写签发次数";
              },
              stayDays: function () {
                if (o.Z.isEmptyObject(n)) return "请填写入境可停留天数";
              },
            },
            a = null;
          return t[e] && (a = t[e].call()), a;
        }
        var N = function (e) {
          var n = "A";
          switch (e) {
            case "adult":
              n = "A";
              break;
            case "child":
              n = "C";
              break;
            case "childCarry":
              n = "TC";
          }
          return n;
        };
        n.Z = {
          getShipUtmSource: function () {
            var e = "xcx_ship_"
                .concat(a.default.miniType, "_")
                .concat(a.default.jetpack),
              n = i().getStorageSync("SHIP_UTMSOURCE"),
              t = new Date().getTime() / 1e3;
            return n && n.timeStamp && t - n.timeStamp < 3600 ? n.source : e;
          },
          AppendParams: function (e, n) {
            if (((e = e || ""), !n)) return e || "";
            if (
              (function (e) {
                return "[object String]" === l.call(e);
              })(n)
            )
              return (e + "&" + n).replace(/[&?]{1,2}/, "?");
            for (
              var t = Object.keys(n), a = [], r = 0, i = t.length;
              r < i;
              r++
            )
              a.push(s("{0}={1}", t[r], n[t[r]]));
            var c = a.join("&").replace(/%20/g, "+");
            return decodeURI((e + "&" + c).replace(/[&?]{1,2}/, "?"));
          },
          saveShipUtmSource: function (e) {
            var n = new Date().getTime() / 1e3;
            i().setStorageSync("SHIP_UTMSOURCE", { source: e, timeStamp: n });
          },
          getDisplayPassengerType: function (e) {
            var n = "成人票";
            switch (e) {
              case "TC":
                n = "携童票";
                break;
              case "C":
                n = "儿童票";
                break;
              case "A":
                n = "成人票";
            }
            return n;
          },
          getPassengerFormatData: function (e, n, t, a) {
            var r,
              i = e.CNName,
              c = e.ENFirstName,
              u = e.ENLastName,
              o = e.Nationality,
              l = e.Gender,
              s = e.Birthday,
              m = e.ticketTypeId,
              h = e.foreignInfo,
              C = void 0 === h ? {} : h,
              T = e.frequency,
              y = e.stayDays,
              g = e.isMinor,
              b = { gender: f(l), passengerType: N(m), birth: s };
            if (
              (e.isStudent &&
                ((b.isStudent = 1),
                (b.studentCardNo = (function (e) {
                  var n;
                  return (
                    (
                      (null == e ||
                      null === (n = e.CommonPassengerCard) ||
                      void 0 === n
                        ? void 0
                        : n.find(function (e) {
                            return "3" == e.CardType;
                          })) || {}
                    ).CardNo || ""
                  );
                })(e))),
              T && (b.taibaoNumber = T),
              y && (b.stayDays = y),
              t)
            ) {
              var Z,
                A = function (e) {
                  var n = [];
                  return (
                    e.forEach(function (e) {
                      n.push({ name: e.key, value: e.value });
                    }),
                    n
                  );
                };
              console.log("foreignInfo", C, o),
                (b.country = C.country),
                "外籍" == C.country
                  ? (b.nationality = d.nh[o])
                  : (b.nationality = C.country),
                (b.idCard = []),
                null === (Z = C.cardList) ||
                  void 0 === Z ||
                  Z.forEach(function (e) {
                    b.idCard.push({
                      idType: e.key,
                      idNum: e.value,
                      date: A(e.infoList),
                    });
                  }),
                v ||
                  ((b.idType = b.idCard[0].idType),
                  (b.idNum = b.idCard[0].idNum)),
                (r =
                  null == n
                    ? void 0
                    : n.find(function (e) {
                        return e.country == C.country;
                      }));
            } else {
              var S = p(e, n, t) || {};
              a &&
                (b.idCard = [
                  {
                    idType: S.cardType,
                    idNum: S.cardNo,
                    visaDate: S.cardVisaDate,
                  },
                ]),
                (b.idType = S.cardType),
                (b.idNum = S.cardNo),
                (b.visaDate = S.cardVisaDate),
                (r =
                  null == n
                    ? void 0
                    : n.find(function (e) {
                        return e.idType == b.idType;
                      }));
            }
            return (
              (b.isMinor = g),
              r
                ? (r.cname && (b.cName = i),
                  r.ename && (b.eName = "".concat(u, "/").concat(c)))
                : ((b.cName = i), (b.eName = "".concat(u, "/").concat(c))),
              "护照" == (b.idType || (b.idCard[0] ? b.idCard[0].idType : "")) &&
              b.eName
                ? (b.displayName = b.eName)
                : (b.displayName = b.cName),
              console.log("passengerData", b),
              b
            );
          },
          getCardInfo: p,
          maskCardNum: function (e) {
            var n = 0,
              t = 0;
            if (e) {
              var a = e.length;
              if (18 == a) (n = 4), (t = 3);
              else {
                var r = Math.floor(a / 3) + 1;
                (n = 1 * parseInt(((a - r) / 2).toFixed())), (t = a - r - n);
              }
              return (function (e, a, r) {
                for (var i = e.length - n - t, c = "", u = 0; u < i; u++)
                  c += "*";
                return e.substring(0, a) + c + e.substring(e.length - r);
              })(e, n, t);
            }
            return e;
          },
          getCardTypeName: m,
          getCardNumByCardType: function (e, n) {
            var t = h(n),
              a =
                null == e
                  ? void 0
                  : e.find(function (e) {
                      return e.CardType == t;
                    });
            return a ? a.CardNo : "";
          },
          getCardCode: h,
          checkPassengerInput: v,
          checkAgeOlderThan18: function (e) {
            var n = 0,
              t = (e || "").split("-"),
              a = t && t.length >= 1 && t[0],
              r = t && t.length >= 2 && t[1],
              i = t && t.length >= 3 && t[2],
              c = new Date(),
              u = c.getFullYear(),
              o = c.getMonth() + 1,
              d = c.getDate();
            if (u == a) n = 0;
            else {
              var l = u - a;
              if (l > 0)
                if (o == r) {
                  n = d - i < 0 ? l - 1 : l;
                } else {
                  n = o - r < 0 ? l - 1 : l;
                }
              else n = -1;
            }
            var s = !1;
            return n - 18 > 0 && (s = !0), s;
          },
          getAge: function (e) {
            var n = 0,
              t = (e || "").split("-"),
              a = t && t.length >= 1 && t[0],
              r = t && t.length >= 2 && t[1],
              i = t && t.length >= 3 && t[2],
              c = new Date(),
              u = c.getFullYear(),
              o = c.getMonth() + 1,
              d = c.getDate();
            if (u == a) n = 0;
            else {
              var l = u - a;
              if (l > 0)
                if (o == r) {
                  n = d - i < 0 ? l - 1 : l;
                } else {
                  n = o - r < 0 ? l - 1 : l;
                }
              else n = -1;
            }
            return n;
          },
          getUuid: function () {
            for (var e = [], n = "0123456789abcdef", t = 0; t < 36; t++)
              e[t] = n.substr(Math.floor(16 * Math.random()), 1);
            return (
              (e[14] = "4"),
              (e[19] = n.substr((3 & e[19]) | 8, 1)),
              (e[8] = e[13] = e[18] = e[23] = "-"),
              e.join("")
            );
          },
          getPassengerDisplayName: function (e, n, t) {
            var a = e.CNName;
            return (
              (("护照" == p(e, n, t).cardType && !t) || !a) &&
                e.ENLastName &&
                e.ENFirstName &&
                (a = e.ENLastName + "/" + e.ENFirstName),
              a
            );
          },
          isVehicleNumber: function (e) {
            return /^(([\u4eac\u6d25\u6caa\u6e1d\u5180\u8c6b\u4e91\u8fbd\u9ed1\u6e58\u7696\u9c81\u65b0\u82cf\u6d59\u8d63\u9102\u6842\u7518\u664b\u8499\u9655\u5409\u95fd\u8d35\u7ca4\u9752\u85cf\u5ddd\u5b81\u743c\u4f7f\u9886][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([\u4eac\u6d25\u6caa\u6e1d\u5180\u8c6b\u4e91\u8fbd\u9ed1\u6e58\u7696\u9c81\u65b0\u82cf\u6d59\u8d63\u9102\u6842\u7518\u664b\u8499\u9655\u5409\u95fd\u8d35\u7ca4\u9752\u85cf\u5ddd\u5b81\u743c\u4f7f\u9886][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9\u6302\u5b66\u8b66\u6e2f\u6fb3\u4f7f\u9886]))$/.test(
              e
            );
          },
          getChannelValue: function () {
            return a.default.isTieyou ? "wxTyShip" : "wxZxShip";
          },
          covertPassengerType: N,
          getTicketTypeId: function (e) {
            var n = "adult";
            switch (e) {
              case "A":
                n = "adult";
                break;
              case "C":
                n = "child";
                break;
              case "TC":
                n = "childCarry";
            }
            return n;
          },
        };
      },
      31251: function (e, n, t) {
        var a = t(90129),
          r = t(52500),
          i = t(71515),
          c = t(34229),
          u = t(85423),
          o = t(48813),
          d = function (e) {
            var n = e.isActive,
              t = e.tabName,
              a = e.onTabClick,
              r = void 0 === a ? function () {} : a;
            return (0, o.BX)(i.View, {
              className: "tab-item flex-1 flex-align-items-center flex-column",
              id: "AOAL",
              onClick: r,
              children: [
                (0, o.tZ)(i.View, {
                  className: "tab-name ".concat(n ? "active" : ""),
                  children: t,
                }),
                (0, o.tZ)(i.View, {
                  className: "bar ".concat(n ? "active" : ""),
                }),
              ],
            });
          },
          l = function (e) {
            var n,
              t,
              a = e.data;
            return !a ||
              (null == a || null === (n = a.list) || void 0 === n
                ? void 0
                : n.length) <= 0
              ? (0, o.tZ)(o.HY, {})
              : (0, o.BX)(i.View, {
                  className: "table-item",
                  children: [
                    (0, o.tZ)(i.View, {
                      className: "title",
                      children: a.title,
                    }),
                    (0, o.tZ)(u.iA, {
                      className: "desc-table",
                      children:
                        null == a || null === (t = a.list) || void 0 === t
                          ? void 0
                          : t.map(function (e, n) {
                              var t;
                              return (0, o.BX)(
                                u.Tr,
                                {
                                  className: "rft-tr",
                                  children: [
                                    (0, o.tZ)(u.Td, {
                                      className: "rft-td td-label",
                                      children: e.title,
                                    }),
                                    (0, o.tZ)(u.Td, {
                                      className: "rft-td td-desc",
                                      children:
                                        null === (t = e.desc) || void 0 === t
                                          ? void 0
                                          : t.map(function (e, n) {
                                              return (0,
                                              o.tZ)(i.Text, { className: "txt", children: e }, n);
                                            }),
                                    }),
                                  ],
                                },
                                n
                              );
                            }),
                    }),
                  ],
                });
          },
          s = function (e) {
            var n,
              t,
              a = e.data;
            return !a ||
              (null === (n = a.content) || void 0 === n ? void 0 : n.length) <=
                0
              ? (0, o.tZ)(o.HY, {})
              : (0, o.BX)(i.View, {
                  className: "normal-item",
                  children: [
                    (0, o.tZ)(i.View, {
                      className: "title",
                      children: null == a ? void 0 : a.title,
                    }),
                    (0, o.tZ)(i.View, {
                      className: "desc-list",
                      children:
                        null == a || null === (t = a.content) || void 0 === t
                          ? void 0
                          : t.map(function (e, n) {
                              return (0, o.tZ)(i.Text, { children: e }, n);
                            }),
                    }),
                  ],
                });
          };
        n.Z = r.default.memo(function (e) {
          var n,
            t = e.visible,
            u = void 0 !== t && t,
            f = e.instructionList,
            m = void 0 === f ? [] : f,
            h = e.onClose,
            p = void 0 === h ? function () {} : h,
            v = (0, r.useState)(0),
            N = (0, a.Z)(v, 2),
            C = N[0],
            T = N[1];
          if ((null == m ? void 0 : m.length) <= 0)
            return (0, o.tZ)(i.View, {});
          var y = m.map(function (e) {
              return e.ruleTitle;
            }),
            g = m[C];
          return (0, o.tZ)(c.ZtDrawer, {
            show: u,
            isDefineHead: !0,
            className: "ship-booking-rule-drawer",
            children: (0, o.BX)(i.View, {
              className: "content",
              children: [
                (0, o.tZ)(i.View, {
                  className: "drawer-tit",
                  children: "预订须知",
                }),
                (0, o.tZ)(i.View, {
                  className: "iconfont2 ifont2-close",
                  id: "AOAM",
                  onClick: p,
                }),
                (0, o.tZ)(i.View, {
                  className: "tab-list flex-align-items-center",
                  children: y.map(function (e, n) {
                    return (0, o.tZ)(
                      d,
                      {
                        tabName: e,
                        isActive: n === C,
                        onTabClick: function () {
                          return (function (e) {
                            e !== C && T(e);
                          })(n);
                        },
                      },
                      n
                    );
                  }),
                }),
                (0, o.tZ)(r.Fragment, {
                  children:
                    g &&
                    (0, o.BX)(i.ScrollView, {
                      scrollY: !0,
                      scrollWithAnimation: !0,
                      className: "cont-scroll",
                      children: [
                        (null === (n = g.content) || void 0 === n
                          ? void 0
                          : n.length) > 0 &&
                          (0, o.tZ)(l, {
                            data: { title: g.title, list: g.content },
                          }),
                        (function (e) {
                          var n,
                            t,
                            a = [];
                          return (
                            (null == e ||
                            null === (n = e.newContent) ||
                            void 0 === n
                              ? void 0
                              : n.length) > 0
                              ? (a = e.newContent)
                              : a.push({
                                  title: null == e ? void 0 : e.title,
                                  content: null == e ? void 0 : e.desc,
                                }),
                            (0, o.tZ)(r.Fragment, {
                              children:
                                null === (t = a) || void 0 === t
                                  ? void 0
                                  : t.map(function (e, n) {
                                      return (0, o.tZ)(s, { data: e }, n);
                                    }),
                            })
                          );
                        })(g),
                      ],
                    }),
                }),
              ],
            }),
          });
        });
      },
    },
  ]);
})();
