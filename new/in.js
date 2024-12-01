/* jssdk-video.instant.message.js 2024-03-12 16:45 2d0f459d15e5a9c9bd6e0a1b18dccef8f69e0686 */
!function() {
    "use strict";
    var q = void 0;
    function F(e) {
        return e && document.cookie.length && (e = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) && e.length && e[1] ? decodeURIComponent(e[1]) : q
    }
    var e = navigator.userAgent.toLowerCase()
      , G = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substring(0, 4));
    var i = function() {
        return (i = Object.assign || function(e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }
        ).apply(this, arguments)
    };
    function J(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var o, i, a = n.call(e), r = [];
        try {
            for (; (void 0 === t || 0 < t--) && !(o = a.next()).done; )
                r.push(o.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (n = a.return) && n.call(a)
            } finally {
                if (i)
                    throw i.error
            }
        }
        return r
    }
    function X(e, t, n) {
        if (n || 2 === arguments.length)
            for (var o, i = 0, a = t.length; i < a; i++)
                !o && i in t || ((o = o || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
        return e.concat(o || Array.prototype.slice.call(t))
    }
    var e = {
        BASE_ROTATOR_URL: "//tsyndicate.com/do2/",
        IM_STYLE_URL: "//cdn.tsyndicate.com/sdk/v1/video.instant.message.v2.css",
        METRICS_COLLECTOR_URL: "////m.tsyndicate.com/ad_stat/ad_stat"
    }
      , n = e.METRICS_COLLECTOR_URL
      , a = "".concat(e.BASE_ROTATOR_URL, "{spot}/vast")
      , r = e.IM_STYLE_URL
      , c = 12
      , d = 25
      , l = 10
      , s = 30
      , u = 10
      , m = 3
      , p = 20
      , h = 5
      , v = ""
      , f = "00:00:00"
      , g = 10
      , I = "click"
      , L = "capped"
      , M = 0
      , S = 5
      , A = "Visit website"
      , Y = "AD"
      , $ = {
        closeButton: "ts-im-button-close",
        progressBar: "ts-im-progress-bar",
        progressBarCurrent: "ts-im-progress-bar__current",
        redirectButton: "ts-im-ad-link",
        mainContainer: "ts-im-container",
        buttonSound: "ts-im-button-sound",
        buttonSoundPlay: "ts-im-button-sound_play",
        title: "ts-im-title",
        videoWrapper: "ts-im-video-wrapper",
        video: "ts-im-video",
        closeButtonDelay: "ts-im-button-close-delay",
        ctaButtonWrapper: "ts-im-button-cta-wrapper",
        ctaButton: "ts-im-button-cta",
        ctaButtonLabel: "ts-im-button-cta__label",
        ctaButtonSvg: "ts-im-button-cta__svg",
        ctaButtonIcon: "ts-im-button-cta__icon",
        ctaButtonHeadline: "ts-im-button-cta__headline",
        ctaButtonBrandname: "ts-im-button-cta__brandname",
        ctaButtonCompanyInfo: "ts-im-button-cta__companyinfo",
        ctaButtonCompanyTextInfo: "ts-im-button-cta__textcontent",
        ctaButtonIconBackup: "ts-im-button-cta__icon_backup",
        ctaButtonIconBackupLabel: "ts-im-button-cta__icon_backup_label"
    };
    var Q = function(e) {
        var t, n, o = e.mediaFile, i = e.btnsHeight, a = e.width, e = e.widthInPercent, o = o.width / o.height;
        return e ? (e = window.innerHeight * window.innerWidth * e / 100,
        n = (t = i ? (-(t = i * (i = o)) + Math.sqrt(t * t + 4 * i * e)) / (2 * i) : Math.sqrt(e / o)) * o) : t = (n = a) / o,
        {
            videoWidth: n,
            videoHeight: t
        }
    };
    function Z(e) {
        var t = document.createElement("img");
        t.src = e,
        t.width = 1,
        t.height = 1,
        t.style.position = "absolute",
        t.style.top = "0",
        t.addEventListener("load", function() {
            return o(t)
        }),
        t.addEventListener("error", function() {
            return o(t)
        }),
        document.body.appendChild(t)
    }
    function o(e) {
        var t;
        null != (t = e.parentNode) && t.removeChild(e)
    }
    function P(a, e) {
        var t, n, o, i, r, c, d, l = a.width, s = a.contentTitle, R = a.countdownTimerInMillis, u = a.displayMode, m = a.cappedAction, p = a.cookieExpiresInMillis, O = a.cappedValueInMillis, h = a.cookieName, v = a.styleUrl, f = a.closeButtonDelayInMillis, g = a.hideOnComplete, y = a.showCTAButton, w = e.trackers, b = e.clickThroughTrackers, W = e.clickTrackers, k = e.mediaFiles, C = e.headline, E = e.brandname, e = e.staticResourceSrc, _ = (y ? ee : 0) + (s ? te : 0), T = "capped" === u, x = void 0 === p, j = "click" === m && x, H = "impression" === m || !x, z = Array.from(w), w = (u = v,
        (m = document.createElement("link")).type = "text/css",
        m.rel = "stylesheet",
        m.media = "all",
        m.href = u,
        m), N = (document.head.appendChild(w),
        document.createElement("div"));
        N.className = $.mainContainer,
        N.style.visibility = "hidden",
        (v = document.createElement("div")).className = $.videoWrapper;
        (u = document.createElement("div")).className = $.progressBar;
        var B = document.createElement("div")
          , I = (B.className = $.progressBarCurrent,
        u.appendChild(B),
        o = k[0],
        i = 0,
        k.forEach(function(e) {
            var t = Math.abs(e.width - l);
            t < i && (o = e),
            i = t
        }),
        o)
          , L = ((m = document.createElement("source")).src = (null == I ? void 0 : I.url) || "",
        m.type = (null == I ? void 0 : I.type) || "",
        document.createElement("video"))
          , M = (L.className = $.video,
        L.appendChild(m),
        L.controls = !1,
        L.autoplay = !0,
        L.muted = !0,
        L.setAttribute("playsinline", ""),
        L.setAttribute("controlslist", "nodownload"),
        L.addEventListener("timeupdate", function() {
            var n = L.currentTime
              , e = L.duration
              , e = Math.floor(100 / e * n);
            B.style.width = "".concat(e, "%"),
            z.forEach(function(e, t) {
                Number(e.offset) <= n && e.url && (Z(e.url),
                z.splice(t, 1))
            })
        }, !1),
        L.addEventListener("loadeddata", function() {
            (function() {
                var e = I && !I.width && L.videoWidth
                  , t = I && !I.height && L.videoHeight
                  , n = e || t;
                e && (I.width = L.videoWidth);
                t && (I.height = L.videoHeight);
                n && A()
            }
            )(),
            N.style.visibility = "visible",
            N.style.right = "0",
            N.style.margin = "0",
            N.style.transform = "none",
            T && H && setTimeout(D, R)
        }, !1),
        g && L.addEventListener("ended", V, !1),
        document.createElement("div"));
        M.addEventListener("click", function() {
            L.muted = !L.muted,
            L.muted ? M.className = $.buttonSound : M.className += " ".concat($.buttonSoundPlay)
        }),
        M.className = $.buttonSound;
        (w = document.createElement("div")).className = $.redirectButton,
        w.addEventListener("click", U);
        var S = document.createElement("div");
        function A() {
            var e, t, n, o, i;
            I && I.width && I.height && (i = G ? a.mobileWidthInPercent : a.widthInPercent,
            e = I.width / I.height,
            t = window.innerHeight * K - _,
            n = window.innerWidth * K,
            o = (i = Q({
                widthInPercent: i,
                width: l,
                mediaFile: I,
                btnsHeight: _
            })).videoWidth,
            i = i.videoHeight,
            L.style.removeProperty("max-height"),
            L.style.removeProperty("max-width"),
            t <= i && n <= o ? (L.style.maxHeight = "".concat(t, "px"),
            L.style.maxWidth = "".concat(n, "px"),
            L.style.removeProperty("height"),
            L.style.removeProperty("width"),
            N.style.width = "".concat(n, "px"),
            P(n)) : t <= i ? (L.style.height = "".concat(t, "px"),
            L.style.width = "auto",
            N.style.width = "".concat(i = t * e, "px"),
            P(i)) : n <= o ? (L.style.width = "".concat(n, "px"),
            L.style.height = "auto",
            N.style.width = "".concat(n, "px"),
            P(n)) : (L.style.width = "".concat(o, "px"),
            L.style.height = "auto",
            N.style.width = "".concat(o, "px"),
            P(o)))
        }
        function P(e) {
            n && (e < ne ? n.classList.add("hide_cta_icon") : n.classList.remove("hide_cta_icon")),
            t && (e < oe ? t.classList.add("hide_cta_info") : t.classList.remove("hide_cta_info"))
        }
        function U() {
            var e = b[0];
            window.open(e, "_blank"),
            W.forEach(Z),
            b.slice(1).forEach(function(e) {
                Z(e)
            }),
            T && j && D()
        }
        function V() {
            var e = N.parentNode;
            e && e.removeChild(N)
        }
        function D() {
            var e, t, n, o, i, a;
            F(h) || (e = h,
            t = "1",
            o = (n = void 0 === (n = {
                lifetimeInMillis: x ? O : p
            }) ? {} : n).lifetimeInMillis,
            i = n.domain,
            n = void 0 === (n = n.path) ? "/" : n,
            a = null === t,
            o = o !== q ? new Date((new Date).getTime() + o) : q,
            e = ["".concat(e, "=").concat(a ? "" : t), (o = (t = void 0 === (t = {
                expireDate: o,
                shouldDelete: a
            }) ? {} : t).expireDate,
            t.shouldDelete ? "expires=Thu, 01 Jan 1970 00:00:00 GMT" : o ? "expires=".concat(o.toUTCString()) : ""), i ? "domain=".concat(i) : "", "path=".concat(n)].filter(Boolean).join(";"),
            document.cookie = e)
        }
        S.className = $.closeButton,
        S.addEventListener("click", function() {
            V(),
            T && j && D()
        }),
        s && (k = document.createElement("div"),
        m = document.createTextNode(s),
        k.className = $.title,
        k.appendChild(m),
        N.appendChild(k)),
        N.appendChild(v),
        N.appendChild(S),
        f && (S.classList.add($.closeButtonDelay),
        setTimeout(function() {
            S.classList.remove($.closeButtonDelay),
            S.style.transition = "all 5s ease"
        }, f)),
        v.appendChild(M),
        v.appendChild(L),
        v.appendChild(w),
        v.appendChild(u),
        y && ((t = document.createElement("div")).className = $.ctaButtonWrapper,
        t.addEventListener("click", U),
        (g = document.createElement("div")).className = $.ctaButton,
        (s = document.createElement("div")).className = $.ctaButtonLabel,
        (m = document.createElement("div")).className = $.ctaButtonSvg,
        k = document.createTextNode("View more"),
        s.appendChild(k),
        g.appendChild(s),
        g.appendChild(m),
        (n = document.createElement("div")).className = $.ctaButtonCompanyInfo,
        e ? ((k = document.createElement("img")).className = $.ctaButtonIcon,
        k.src = e,
        n.appendChild(k)) : ((s = document.createElement("div")).className = "".concat($.ctaButtonIcon, " ").concat($.ctaButtonIconBackup),
        (m = document.createElement("div")).className = $.ctaButtonIconBackupLabel,
        k = document.createTextNode(Y),
        m.appendChild(k),
        s.appendChild(m),
        n.appendChild(s)),
        (k = document.createElement("div")).className = $.ctaButtonCompanyTextInfo,
        C && ((m = document.createElement("div")).className = $.ctaButtonHeadline,
        s = document.createTextNode(C),
        m.appendChild(s),
        k.appendChild(m)),
        E && ((s = document.createElement("div")).className = $.ctaButtonBrandname,
        m = document.createTextNode(E),
        s.appendChild(m),
        k.appendChild(s)),
        n.appendChild(k),
        t.appendChild(n),
        t.appendChild(g),
        N.appendChild(t)),
        A(),
        document.body.appendChild(N),
        window.addEventListener("resize", (r = A,
        function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            d && window.clearTimeout(d),
            d = window.setTimeout(function() {
                r.apply(void 0, X([], J(e), !1))
            }, c)
        }
        ), !(c = 400))
    }
    var K = .8
      , ee = 64
      , te = 14
      , ne = 350
      , oe = 250;
    function y(e, t, n) {
        var o = new XMLHttpRequest;
        o.onreadystatechange = function() {
            4 === o.readyState && 200 === o.status && t(o.responseXML)
        }
        ,
        o.onerror = n,
        o.open("GET", e, !0),
        o.send()
    }
    var w = function(e) {
        return e.map(function(e) {
            return null == e ? void 0 : e.trim()
        }).filter(Boolean).join(",").replace(/,+/g, ",").replace(/\s*,\s*/g, ",").replace(/\s+/g, " ").replace(/^,|,$/g, "")
    };
    var b = ["param1", "param2", "param3", "subid", "subid_1", "subid_2", "subid_3", "subid_4", "subid_5", "extid", "xhid", "abt", "xoc", "xvr", "xsrc", "xprf", "xch", "xou", "xma", "xtype"];
    function D(e) {
        var e = void 0 === (e = (e || {}).collectFromPath) || e
          , t = function() {
            for (var e = document.getElementsByTagName("meta"), t = [], n = 0; n < e.length; n++) {
                var o = e[n].getAttribute("name");
                "description" !== o && "keywords" !== o || (o = e[n].getAttribute("content")) && t.push(o)
            }
            return t
        }();
        return document.title && t.push(document.title),
        e && t.push.apply(t, X([], J((e = (e = window.location.pathname.split("/"))[e.length - 1].split(/[?#]/)[0]) && e.replace(/(x?html?)$/gi, "").match(/([a-zA-Z0-9]+)/g) || []), !1)),
        w(t)
    }
    function R(e) {
        var t, n, o, i, a = [(n = e,
        i = void 0 === (o = (void 0 === (o = {
            fallbackValues: {
                param3: "video.instant.message.js"
            }
        }) ? {} : o).fallbackValues) ? {} : o,
        b.map(function(e) {
            var t;
            return [e, null != (t = n[e]) ? t : i[e]]
        }).map(function(e) {
            var t = (e = J(e, 2))[0];
            return (e = e[1]) ? "".concat(t, "=").concat(e) : ""
        }).filter(Boolean).join("&")), (o = {
            keywords: [e.keywords, D()],
            charLimitCount: 1e3
        },
        a = o.keywords,
        t = o.charLimitCount,
        o = o.queryParamKey,
        (a = w(a).substring(0, t)) ? "".concat(o || "keywords", "=").concat(encodeURIComponent(a)) : void 0), (t = void 0 === (t = window.devicePixelRatio) ? 1 : t,
        (o = window.screen) && o.width && o.height ? (a = o.width * t,
        o = o.height * t,
        "w=".concat(a, "&h=").concat(o)) : q), (t = (new Date).getTimezoneOffset(),
        "tz=".concat(t).replace("-", "%2D"))].filter(Boolean).join("&");
        return "".concat(e.urlTemplate.replace("{spot}", e.spot), "?t=im-slider&").concat(a)
    }
    var O = "VASTAdTagURI"
      , W = "ClickThrough"
      , j = "Linear"
      , H = "Duration"
      , z = "MediaFile"
      , U = "Tracking"
      , V = "ClickTracking"
      , ie = "AdParameters"
      , ae = "CTABrandname"
      , re = "Headline"
      , ce = "StaticResource"
      , k = 1e3
      , C = 60 * k
      , de = 60 * C
      , E = function(e) {
        e = new Date("1970-01-01T".concat(e || f, "Z"));
        return 60 * e.getMinutes() + e.getSeconds()
    };
    function _(e, t) {
        var n = [];
        return Array.from(e.getElementsByTagName(t)).forEach(function(e) {
            e.textContent && n.push(e.textContent)
        }),
        n
    }
    function le(n) {
        var o = []
          , i = []
          , e = A
          , t = ""
          , a = Array.from(n.getElementsByTagName(O))
          , r = Array.from(n.getElementsByTagName(H))
          , c = E((null == (r = r[0]) ? void 0 : r.textContent) || "")
          , r = null == (r = Array.from(n.getElementsByTagName(j))[0]) ? void 0 : r.attributes.getNamedItem("skipoffset")
          , d = Array.from(n.getElementsByTagName(ie))
          , l = (null == (l = d[0]) ? void 0 : l.attributes.getNamedItem("xmlEncoded")) || (null == (l = d[0]) ? void 0 : l.attributes.getNamedItem("XmlEncoded"))
          , d = null == (d = d[0]) ? void 0 : d.textContent;
        function s(e) {
            var t;
            return /%/.test(e = void 0 === e ? f : e) ? (t = parseInt(e, 10),
            Math.ceil(c * t / 100)) : E(e)
        }
        function u(e, t) {
            return void 0 === t && (t = n),
            (null == (t = Array.from(t.getElementsByTagName(e))[0]) ? void 0 : t.textContent) || ""
        }
        return l && d && (l = d,
        d = (new DOMParser).parseFromString(l, "text/xml"),
        e = u(ae, d) || e,
        t = u(re, d)),
        Array.from(n.getElementsByTagName(z)).forEach(function(e) {
            var t;
            e.textContent && o.push({
                url: e.textContent,
                type: (null == (t = e.attributes.getNamedItem("type")) ? void 0 : t.value) || "",
                width: Number((null == (t = e.attributes.getNamedItem("width")) ? void 0 : t.value) || "0"),
                height: Number((null == (t = e.attributes.getNamedItem("height")) ? void 0 : t.value) || "0")
            })
        }),
        Array.from(n.getElementsByTagName(U)).forEach(function(e) {
            var t, n;
            e.textContent && (t = (null == (t = e.attributes.getNamedItem("event")) ? void 0 : t.value) || "start",
            n = (null == (n = e.attributes.getNamedItem("offset")) ? void 0 : n.value) || "",
            n = "start" === t ? 0 : s(n),
            i.push({
                event: t,
                offset: n,
                url: e.textContent
            }))
        }),
        {
            mediaFiles: o,
            durationInSeconds: c,
            url: (null == (l = a[0]) ? void 0 : l.textContent) || "",
            skipOffset: s(null == r ? void 0 : r.value),
            clickTrackers: _(n, V),
            clickThroughTrackers: _(n, W),
            staticResourceSrc: u(ce),
            trackers: i,
            brandname: e,
            headline: t
        }
    }
    function T(e, t) {
        return "boolean" == typeof e ? e : t
    }
    function x(e, t) {
        return "number" != typeof e && "string" != typeof e || (e = Number(e),
        !Number.isFinite(e)) ? t : e
    }
    function N(e, t) {
        return x(String(e).replace(/[\s%]/g, ""), t)
    }
    function se(e) {
        var t, n, o;
        if (e.spot && "string" == typeof e.spot)
            return n = (t = function(e) {
                if (e && typeof e === "number")
                    return {
                        width: e,
                        widthInPercent: null
                    };
                var t = x(e, 0);
                if (t)
                    return {
                        width: t,
                        widthInPercent: null
                    };
                var n = N(e, u), o = n <= p && n >= m ? n : u, i;
                return {
                    width: document.documentElement.clientWidth / 100 * o,
                    widthInPercent: o
                }
            }(e.width)).widthInPercent,
            t = t.width,
            i(i({}, (o = e,
            b.reduce(function(e, t) {
                var n = o[t];
                return e[t] = "number" == typeof n && !Number.isNaN(n) || "string" == typeof n && "" !== n ? String(n) : q,
                e
            }, {}))), {
                widthInPercent: n,
                width: t,
                spot: e.spot,
                cookieName: B(e.cookieName, "ts_video_instant_message"),
                cookieExpiresInMillis: function(e) {
                    if (null != e && "" !== e)
                        return x(e, c) * de
                }(e.cookieExpires),
                urlTemplate: B(e.vastLink, a),
                styleUrl: B(e.styleLink, r),
                countdownTimerInMillis: x(e.countdownTimer, h) * k,
                contentTitle: (n = e.content) && "object" == typeof n && n.title && "string" == typeof n.title ? String(n.title || v) : v,
                keywords: String(e.keywords || ""),
                displayMode: "capped" !== (t = e.displayMode) && "uncapped" !== t ? L : t,
                cappedAction: "click" !== (n = e.cappedAction) && "impression" !== n ? I : n,
                cappedValueInMillis: x(e.cappedValueInMinutes, g) * C,
                closeButtonDelayInMillis: function(e) {
                    e = x(e, M);
                    return Math.min(e, S) * k
                }(e.closeButtonDelay),
                hideOnComplete: T(e.hideOnComplete, !1),
                showCTAButton: T(e.showCTAButton, !0),
                mobileWidthInPercent: (t = e.mobileWidth,
                (n = N(t, d)) <= s && l <= n ? n : d),
                url: e.url
            });
        console.warn("TS: no spot provided")
    }
    function B(e, t) {
        return e && "string" == typeof e ? e : t
    }
    function ue(e) {
        var t, n, o, i = e.spot, a = e.format, r = e.serviceBaseUrl, c = e.details, e = e.eventType, a = ["ad_format=".concat(encodeURIComponent(a)), "spot=".concat(encodeURIComponent(i)), "event_type=".concat(encodeURIComponent(e))].join("&"), i = r.startsWith("//") ? "https:".concat(r) : r;
        e = "".concat(i, "?").concat(a),
        t = function() {}
        ,
        n = function() {
            return q
        }
        ,
        r = {
            method: "POST",
            headers: [["Content-Type", "application/json"]],
            body: c ? JSON.stringify(c) : q
        },
        i = void 0 === (i = (r = void 0 === r ? {} : r).method) ? "GET" : i,
        a = void 0 === (a = r.body) ? "" : a,
        c = void 0 === (c = r.headers) ? [] : c,
        r = void 0 !== (r = r.withCredentials) && r,
        (o = new XMLHttpRequest).withCredentials = r,
        o.onload = function() {
            if (200 === o.status) {
                var e = void 0;
                try {
                    e = JSON.parse(o.response)
                } catch (e) {}
                t(e)
            } else
                n()
        }
        ,
        o.onerror = n,
        o.open(i, e, !0),
        c.forEach(function(e) {
            var t = (e = J(e, 2))[0]
              , e = e[1];
            o.setRequestHeader(t, e)
        }),
        o.send(a)
    }
    e = Number(F("ts_slaEventsRandomChanceCount")),
    e = Number.isNaN(e) ? 1e4 : e;
    var me = 0 === Math.floor(Math.random() * e)
      , pe = "VIDEO_IM_SLIDER_SPOT_LOADING";
    function he(e) {
        var t, e = e.settings;
        me && ue({
            format: "video-im-slider",
            spot: e.spot,
            serviceBaseUrl: n,
            eventType: pe,
            details: (t = "capped" === (e = e).displayMode,
            {
                width: e.widthInPercent,
                mobile_width: e.mobileWidthInPercent,
                hide_on_complete: e.hideOnComplete,
                display_mode: e.displayMode,
                capped_value: t ? e.cappedValueInMillis / C : void 0,
                capped_action: t ? e.cappedAction : void 0,
                show_cta_button: e.showCTAButton,
                close_button_delay: e.closeButtonDelayInMillis / k
            })
        })
    }
    window.TSVideoInstantMessage = function(e) {
        var t, n = se(e);
        n && (e = Boolean(F(n.cookieName)),
        t = document.createElement("video").canPlayType,
        !e) && t && y(n.url || R(n), function(e) {
            !function t(n, e, o) {
                if (!e)
                    return;
                var i = le(e);
                o && (i.trackers = o.trackers,
                i.clickTrackers = o.clickTrackers);
                if (i.url)
                    return void y(i.url, function(e) {
                        t(n, e, i)
                    }, function() {
                        console.error("TS: error while loading data")
                    });
                try {
                    he({
                        settings: n
                    })
                } catch (e) {
                    console.error("Error while tracking SLA metrics", e)
                }
                P(n, i)
            }(n, e)
        }, function() {
            console.error("TS: error while loading data")
        })
    }
}();
