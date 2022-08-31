!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e((t.echarts = {}));
})(this, function (t) {
  "use strict";
  function e(t, e) {
    function n() {
      this.constructor = t;
    }
    if ("function" != typeof e && null !== e)
      throw new TypeError(
        "Class extends value " + String(e) + " is not a constructor or null"
      );
    pg(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
  }
  function n(t, e) {
    var n = e.browser,
      r = t.match(/Firefox\/([\d.]+)/),
      i = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
      o = t.match(/Edge?\/([\d.]+)/),
      a = /micromessenger/i.test(t);
    r && ((n.firefox = !0), (n.version = r[1])),
      i && ((n.ie = !0), (n.version = i[1])),
      o &&
        ((n.edge = !0),
        (n.version = o[1]),
        (n.newEdge = +o[1].split(".")[0] > 18)),
      a && (n.weChat = !0),
      (e.svgSupported = "undefined" != typeof SVGRect),
      (e.touchEventsSupported = "ontouchstart" in window && !n.ie && !n.edge),
      (e.pointerEventsSupported =
        "onpointerdown" in window && (n.edge || (n.ie && +n.version >= 11))),
      (e.domSupported = "undefined" != typeof document);
    var s = document.documentElement.style;
    (e.transform3dSupported =
      ((n.ie && "transition" in s) ||
        n.edge ||
        ("WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix()) ||
        "MozPerspective" in s) &&
      !("OTransition" in s)),
      (e.transformSupported =
        e.transform3dSupported || (n.ie && +n.version >= 9));
  }
  function r(t) {
    var e = {};
    if ("undefined" == typeof JSON) return e;
    for (var n = 0; n < t.length; n++) {
      var r = String.fromCharCode(n + 32),
        i = (t.charCodeAt(n) - _g) / xg;
      e[r] = i;
    }
    return e;
  }
  function i(t) {
    for (var e in Sg) t[e] && (Sg[e] = t[e]);
  }
  function o() {
    return Eg++;
  }
  function a() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    "undefined" != typeof console && console.error.apply(console, t);
  }
  function s(t) {
    if (null == t || "object" != typeof t) return t;
    var e = t,
      n = Cg.call(t);
    if ("[object Array]" === n) {
      if (!X(t)) {
        e = [];
        for (var r = 0, i = t.length; i > r; r++) e[r] = s(t[r]);
      }
    } else if (Tg[n]) {
      if (!X(t)) {
        var o = t.constructor;
        if (o.from) e = o.from(t);
        else {
          e = new o(t.length);
          for (var r = 0, i = t.length; i > r; r++) e[r] = t[r];
        }
      }
    } else if (!Mg[n] && !X(t) && !P(t)) {
      e = {};
      for (var a in t) t.hasOwnProperty(a) && a !== Rg && (e[a] = s(t[a]));
    }
    return e;
  }
  function l(t, e, n) {
    if (!I(e) || !I(t)) return n ? s(e) : t;
    for (var r in e)
      if (e.hasOwnProperty(r) && r !== Rg) {
        var i = t[r],
          o = e[r];
        !I(o) ||
        !I(i) ||
        M(o) ||
        M(i) ||
        P(o) ||
        P(i) ||
        A(o) ||
        A(i) ||
        X(o) ||
        X(i)
          ? (!n && r in t) || (t[r] = s(e[r]))
          : l(i, o, n);
      }
    return t;
  }
  function u(t, e) {
    for (var n = t[0], r = 1, i = t.length; i > r; r++) n = l(n, t[r], e);
    return n;
  }
  function h(t, e) {
    if (Object.assign) Object.assign(t, e);
    else for (var n in e) e.hasOwnProperty(n) && n !== Rg && (t[n] = e[n]);
    return t;
  }
  function c(t, e, n) {
    for (var r = w(e), i = 0; i < r.length; i++) {
      var o = r[i];
      (n ? null != e[o] : null == t[o]) && (t[o] = e[o]);
    }
    return t;
  }
  function p(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);
      for (var n = 0, r = t.length; r > n; n++) if (t[n] === e) return n;
    }
    return -1;
  }
  function f(t, e) {
    function n() {}
    var r = t.prototype;
    (n.prototype = e.prototype), (t.prototype = new n());
    for (var i in r) r.hasOwnProperty(i) && (t.prototype[i] = r[i]);
    (t.prototype.constructor = t), (t.superClass = e);
  }
  function d(t, e, n) {
    if (
      ((t = "prototype" in t ? t.prototype : t),
      (e = "prototype" in e ? e.prototype : e),
      Object.getOwnPropertyNames)
    )
      for (var r = Object.getOwnPropertyNames(e), i = 0; i < r.length; i++) {
        var o = r[i];
        "constructor" !== o &&
          (n ? null != e[o] : null == t[o]) &&
          (t[o] = e[o]);
      }
    else c(t, e, n);
  }
  function g(t) {
    return t ? ("string" == typeof t ? !1 : "number" == typeof t.length) : !1;
  }
  function v(t, e, n) {
    if (t && e)
      if (t.forEach && t.forEach === Dg) t.forEach(e, n);
      else if (t.length === +t.length)
        for (var r = 0, i = t.length; i > r; r++) e.call(n, t[r], r, t);
      else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t);
  }
  function y(t, e, n) {
    if (!t) return [];
    if (!e) return V(t);
    if (t.map && t.map === Lg) return t.map(e, n);
    for (var r = [], i = 0, o = t.length; o > i; i++)
      r.push(e.call(n, t[i], i, t));
    return r;
  }
  function m(t, e, n, r) {
    if (t && e) {
      for (var i = 0, o = t.length; o > i; i++) n = e.call(r, n, t[i], i, t);
      return n;
    }
  }
  function _(t, e, n) {
    if (!t) return [];
    if (!e) return V(t);
    if (t.filter && t.filter === Ig) return t.filter(e, n);
    for (var r = [], i = 0, o = t.length; o > i; i++)
      e.call(n, t[i], i, t) && r.push(t[i]);
    return r;
  }
  function x(t, e, n) {
    if (t && e)
      for (var r = 0, i = t.length; i > r; r++)
        if (e.call(n, t[r], r, t)) return t[r];
  }
  function w(t) {
    if (!t) return [];
    if (Object.keys) return Object.keys(t);
    var e = [];
    for (var n in t) t.hasOwnProperty(n) && e.push(n);
    return e;
  }
  function b(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    return function () {
      return t.apply(e, n.concat(Ag.call(arguments)));
    };
  }
  function S(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return function () {
      return t.apply(this, e.concat(Ag.call(arguments)));
    };
  }
  function M(t) {
    return Array.isArray ? Array.isArray(t) : "[object Array]" === Cg.call(t);
  }
  function T(t) {
    return "function" == typeof t;
  }
  function C(t) {
    return "string" == typeof t;
  }
  function k(t) {
    return "[object String]" === Cg.call(t);
  }
  function D(t) {
    return "number" == typeof t;
  }
  function I(t) {
    var e = typeof t;
    return "function" === e || (!!t && "object" === e);
  }
  function A(t) {
    return !!Mg[Cg.call(t)];
  }
  function L(t) {
    return !!Tg[Cg.call(t)];
  }
  function P(t) {
    return (
      "object" == typeof t &&
      "number" == typeof t.nodeType &&
      "object" == typeof t.ownerDocument
    );
  }
  function O(t) {
    return null != t.colorStops;
  }
  function R(t) {
    return null != t.image;
  }
  function E(t) {
    return "[object RegExp]" === Cg.call(t);
  }
  function B(t) {
    return t !== t;
  }
  function N() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = 0, r = t.length; r > n; n++) if (null != t[n]) return t[n];
  }
  function z(t, e) {
    return null != t ? t : e;
  }
  function F(t, e, n) {
    return null != t ? t : null != e ? e : n;
  }
  function V(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return Ag.apply(t, e);
  }
  function H(t) {
    if ("number" == typeof t) return [t, t, t, t];
    var e = t.length;
    return 2 === e
      ? [t[0], t[1], t[0], t[1]]
      : 3 === e
      ? [t[0], t[1], t[2], t[1]]
      : t;
  }
  function W(t, e) {
    if (!t) throw new Error(e);
  }
  function G(t) {
    return null == t
      ? null
      : "function" == typeof t.trim
      ? t.trim()
      : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }
  function U(t) {
    t[zg] = !0;
  }
  function X(t) {
    return t[zg];
  }
  function q(t) {
    return new Fg(t);
  }
  function Y(t, e) {
    for (
      var n = new t.constructor(t.length + e.length), r = 0;
      r < t.length;
      r++
    )
      n[r] = t[r];
    for (var i = t.length, r = 0; r < e.length; r++) n[r + i] = e[r];
    return n;
  }
  function j(t, e) {
    var n;
    if (Object.create) n = Object.create(t);
    else {
      var r = function () {};
      (r.prototype = t), (n = new r());
    }
    return e && h(n, e), n;
  }
  function Z(t) {
    var e = t.style;
    (e.webkitUserSelect = "none"),
      (e.userSelect = "none"),
      (e.webkitTapHighlightColor = "rgba(0,0,0,0)"),
      (e["-webkit-touch-callout"] = "none");
  }
  function K(t, e) {
    return t.hasOwnProperty(e);
  }
  function $() {}
  function Q(t, e) {
    return null == t && (t = 0), null == e && (e = 0), [t, e];
  }
  function J(t, e) {
    return (t[0] = e[0]), (t[1] = e[1]), t;
  }
  function te(t) {
    return [t[0], t[1]];
  }
  function ee(t, e, n) {
    return (t[0] = e), (t[1] = n), t;
  }
  function ne(t, e, n) {
    return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
  }
  function re(t, e, n, r) {
    return (t[0] = e[0] + n[0] * r), (t[1] = e[1] + n[1] * r), t;
  }
  function ie(t, e, n) {
    return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
  }
  function oe(t) {
    return Math.sqrt(ae(t));
  }
  function ae(t) {
    return t[0] * t[0] + t[1] * t[1];
  }
  function se(t, e, n) {
    return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
  }
  function le(t, e, n) {
    return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
  }
  function ue(t, e) {
    return t[0] * e[0] + t[1] * e[1];
  }
  function he(t, e, n) {
    return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
  }
  function ce(t, e) {
    var n = oe(e);
    return (
      0 === n
        ? ((t[0] = 0), (t[1] = 0))
        : ((t[0] = e[0] / n), (t[1] = e[1] / n)),
      t
    );
  }
  function pe(t, e) {
    return Math.sqrt(
      (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    );
  }
  function fe(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
  }
  function de(t, e) {
    return (t[0] = -e[0]), (t[1] = -e[1]), t;
  }
  function ge(t, e, n, r) {
    return (
      (t[0] = e[0] + r * (n[0] - e[0])), (t[1] = e[1] + r * (n[1] - e[1])), t
    );
  }
  function ve(t, e, n) {
    var r = e[0],
      i = e[1];
    return (
      (t[0] = n[0] * r + n[2] * i + n[4]),
      (t[1] = n[1] * r + n[3] * i + n[5]),
      t
    );
  }
  function ye(t, e, n) {
    return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t;
  }
  function me(t, e, n) {
    return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t;
  }
  function _e(t, e, n, r, i, o) {
    var a = r + "-" + i,
      s = t.length;
    if (o.hasOwnProperty(a)) return o[a];
    if (1 === e) {
      var l = Math.round(Math.log(((1 << s) - 1) & ~i) / Kg);
      return t[n][l];
    }
    for (var u = r | (1 << n), h = n + 1; r & (1 << h); ) h++;
    for (var c = 0, p = 0, f = 0; s > p; p++) {
      var d = 1 << p;
      d & i ||
        ((c += (f % 2 ? -1 : 1) * t[n][p] * _e(t, e - 1, h, u, i | d, o)), f++);
    }
    return (o[a] = c), c;
  }
  function xe(t, e) {
    var n = [
        [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
        [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
        [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
        [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
        [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
        [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
        [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
        [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]],
      ],
      r = {},
      i = _e(n, 8, 0, 0, 0, r);
    if (0 !== i) {
      for (var o = [], a = 0; 8 > a; a++)
        for (var s = 0; 8 > s; s++)
          null == o[s] && (o[s] = 0),
            (o[s] +=
              ((((a + s) % 2 ? -1 : 1) *
                _e(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, r)) /
                i) *
              e[a]);
      return function (t, e, n) {
        var r = e * o[6] + n * o[7] + 1;
        (t[0] = (e * o[0] + n * o[1] + o[2]) / r),
          (t[1] = (e * o[3] + n * o[4] + o[5]) / r);
      };
    }
  }
  function we(t, e, n, r, i) {
    if (e.getBoundingClientRect && gg.domSupported && !Me(e)) {
      var o = e[$g] || (e[$g] = {}),
        a = be(e, o),
        s = Se(a, o, i);
      if (s) return s(t, n, r), !0;
    }
    return !1;
  }
  function be(t, e) {
    var n = e.markers;
    if (n) return n;
    n = e.markers = [];
    for (var r = ["left", "right"], i = ["top", "bottom"], o = 0; 4 > o; o++) {
      var a = document.createElement("div"),
        s = a.style,
        l = o % 2,
        u = (o >> 1) % 2;
      (s.cssText = [
        "position: absolute",
        "visibility: hidden",
        "padding: 0",
        "margin: 0",
        "border-width: 0",
        "user-select: none",
        "width:0",
        "height:0",
        r[l] + ":0",
        i[u] + ":0",
        r[1 - l] + ":auto",
        i[1 - u] + ":auto",
        "",
      ].join("!important;")),
        t.appendChild(a),
        n.push(a);
    }
    return n;
  }
  function Se(t, e, n) {
    for (
      var r = n ? "invTrans" : "trans",
        i = e[r],
        o = e.srcCoords,
        a = [],
        s = [],
        l = !0,
        u = 0;
      4 > u;
      u++
    ) {
      var h = t[u].getBoundingClientRect(),
        c = 2 * u,
        p = h.left,
        f = h.top;
      a.push(p, f),
        (l = l && o && p === o[c] && f === o[c + 1]),
        s.push(t[u].offsetLeft, t[u].offsetTop);
    }
    return l && i ? i : ((e.srcCoords = a), (e[r] = n ? xe(s, a) : xe(a, s)));
  }
  function Me(t) {
    return "CANVAS" === t.nodeName.toUpperCase();
  }
  function Te(t, e, n, r) {
    return (
      (n = n || {}),
      r
        ? Ce(t, e, n)
        : tv && null != e.layerX && e.layerX !== e.offsetX
        ? ((n.zrX = e.layerX), (n.zrY = e.layerY))
        : null != e.offsetX
        ? ((n.zrX = e.offsetX), (n.zrY = e.offsetY))
        : Ce(t, e, n),
      n
    );
  }
  function Ce(t, e, n) {
    if (gg.domSupported && t.getBoundingClientRect) {
      var r = e.clientX,
        i = e.clientY;
      if (Me(t)) {
        var o = t.getBoundingClientRect();
        return (n.zrX = r - o.left), void (n.zrY = i - o.top);
      }
      if (we(Jg, t, r, i)) return (n.zrX = Jg[0]), void (n.zrY = Jg[1]);
    }
    n.zrX = n.zrY = 0;
  }
  function ke(t) {
    return t || window.event;
  }
  function De(t, e, n) {
    if (((e = ke(e)), null != e.zrX)) return e;
    var r = e.type,
      i = r && r.indexOf("touch") >= 0;
    if (i) {
      var o = "touchend" !== r ? e.targetTouches[0] : e.changedTouches[0];
      o && Te(t, o, e, n);
    } else {
      Te(t, e, e, n);
      var a = Ie(e);
      e.zrDelta = a ? a / 120 : -(e.detail || 0) / 3;
    }
    var s = e.button;
    return (
      null == e.which &&
        void 0 !== s &&
        Qg.test(e.type) &&
        (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
      e
    );
  }
  function Ie(t) {
    var e = t.wheelDelta;
    if (e) return e;
    var n = t.deltaX,
      r = t.deltaY;
    if (null == n || null == r) return e;
    var i = Math.abs(0 !== r ? r : n),
      o = r > 0 ? -1 : 0 > r ? 1 : n > 0 ? -1 : 1;
    return 3 * i * o;
  }
  function Ae(t, e, n, r) {
    t.addEventListener(e, n, r);
  }
  function Le(t, e, n, r) {
    t.removeEventListener(e, n, r);
  }
  function Pe(t) {
    var e = t[1][0] - t[0][0],
      n = t[1][1] - t[0][1];
    return Math.sqrt(e * e + n * n);
  }
  function Oe(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
  }
  function Re(t, e, n) {
    return {
      type: t,
      event: n,
      target: e.target,
      topTarget: e.topTarget,
      cancelBubble: !1,
      offsetX: n.zrX,
      offsetY: n.zrY,
      gestureEvent: n.gestureEvent,
      pinchX: n.pinchX,
      pinchY: n.pinchY,
      pinchScale: n.pinchScale,
      wheelDelta: n.zrDelta,
      zrByTouch: n.zrByTouch,
      which: n.which,
      stop: Ee,
    };
  }
  function Ee() {
    ev(this.event);
  }
  function Be(t, e, n) {
    if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
      for (var r = t, i = void 0, o = !1; r; ) {
        if ((r.ignoreClip && (o = !0), !o)) {
          var a = r.getClipPath();
          if (a && !a.contain(e, n)) return !1;
          r.silent && (i = !0);
        }
        var s = r.__hostTarget;
        r = s ? s : r.parent;
      }
      return i ? iv : !0;
    }
    return !1;
  }
  function Ne(t, e, n) {
    var r = t.painter;
    return 0 > e || e > r.getWidth() || 0 > n || n > r.getHeight();
  }
  function ze(t) {
    for (var e = 0; t >= hv; ) (e |= 1 & t), (t >>= 1);
    return t + e;
  }
  function Fe(t, e, n, r) {
    var i = e + 1;
    if (i === n) return 1;
    if (r(t[i++], t[e]) < 0) {
      for (; n > i && r(t[i], t[i - 1]) < 0; ) i++;
      Ve(t, e, i);
    } else for (; n > i && r(t[i], t[i - 1]) >= 0; ) i++;
    return i - e;
  }
  function Ve(t, e, n) {
    for (n--; n > e; ) {
      var r = t[e];
      (t[e++] = t[n]), (t[n--] = r);
    }
  }
  function He(t, e, n, r, i) {
    for (r === e && r++; n > r; r++) {
      for (var o, a = t[r], s = e, l = r; l > s; )
        (o = (s + l) >>> 1), i(a, t[o]) < 0 ? (l = o) : (s = o + 1);
      var u = r - s;
      switch (u) {
        case 3:
          t[s + 3] = t[s + 2];
        case 2:
          t[s + 2] = t[s + 1];
        case 1:
          t[s + 1] = t[s];
          break;
        default:
          for (; u > 0; ) (t[s + u] = t[s + u - 1]), u--;
      }
      t[s] = a;
    }
  }
  function We(t, e, n, r, i, o) {
    var a = 0,
      s = 0,
      l = 1;
    if (o(t, e[n + i]) > 0) {
      for (s = r - i; s > l && o(t, e[n + i + l]) > 0; )
        (a = l), (l = (l << 1) + 1), 0 >= l && (l = s);
      l > s && (l = s), (a += i), (l += i);
    } else {
      for (s = i + 1; s > l && o(t, e[n + i - l]) <= 0; )
        (a = l), (l = (l << 1) + 1), 0 >= l && (l = s);
      l > s && (l = s);
      var u = a;
      (a = i - l), (l = i - u);
    }
    for (a++; l > a; ) {
      var h = a + ((l - a) >>> 1);
      o(t, e[n + h]) > 0 ? (a = h + 1) : (l = h);
    }
    return l;
  }
  function Ge(t, e, n, r, i, o) {
    var a = 0,
      s = 0,
      l = 1;
    if (o(t, e[n + i]) < 0) {
      for (s = i + 1; s > l && o(t, e[n + i - l]) < 0; )
        (a = l), (l = (l << 1) + 1), 0 >= l && (l = s);
      l > s && (l = s);
      var u = a;
      (a = i - l), (l = i - u);
    } else {
      for (s = r - i; s > l && o(t, e[n + i + l]) >= 0; )
        (a = l), (l = (l << 1) + 1), 0 >= l && (l = s);
      l > s && (l = s), (a += i), (l += i);
    }
    for (a++; l > a; ) {
      var h = a + ((l - a) >>> 1);
      o(t, e[n + h]) < 0 ? (l = h) : (a = h + 1);
    }
    return l;
  }
  function Ue(t, e) {
    function n(t, e) {
      (l[c] = t), (u[c] = e), (c += 1);
    }
    function r() {
      for (; c > 1; ) {
        var t = c - 2;
        if (
          (t >= 1 && u[t - 1] <= u[t] + u[t + 1]) ||
          (t >= 2 && u[t - 2] <= u[t] + u[t - 1])
        )
          u[t - 1] < u[t + 1] && t--;
        else if (u[t] > u[t + 1]) break;
        o(t);
      }
    }
    function i() {
      for (; c > 1; ) {
        var t = c - 2;
        t > 0 && u[t - 1] < u[t + 1] && t--, o(t);
      }
    }
    function o(n) {
      var r = l[n],
        i = u[n],
        o = l[n + 1],
        h = u[n + 1];
      (u[n] = i + h),
        n === c - 3 && ((l[n + 1] = l[n + 2]), (u[n + 1] = u[n + 2])),
        c--;
      var p = Ge(t[o], t, r, i, 0, e);
      (r += p),
        (i -= p),
        0 !== i &&
          ((h = We(t[r + i - 1], t, o, h, h - 1, e)),
          0 !== h && (h >= i ? a(r, i, o, h) : s(r, i, o, h)));
    }
    function a(n, r, i, o) {
      var a = 0;
      for (a = 0; r > a; a++) p[a] = t[n + a];
      var s = 0,
        l = i,
        u = n;
      if (((t[u++] = t[l++]), 0 !== --o)) {
        if (1 === r) {
          for (a = 0; o > a; a++) t[u + a] = t[l + a];
          return void (t[u + o] = p[s]);
        }
        for (var c, f, d, g = h; ; ) {
          (c = 0), (f = 0), (d = !1);
          do
            if (e(t[l], p[s]) < 0) {
              if (((t[u++] = t[l++]), f++, (c = 0), 0 === --o)) {
                d = !0;
                break;
              }
            } else if (((t[u++] = p[s++]), c++, (f = 0), 1 === --r)) {
              d = !0;
              break;
            }
          while (g > (c | f));
          if (d) break;
          do {
            if (((c = Ge(t[l], p, s, r, 0, e)), 0 !== c)) {
              for (a = 0; c > a; a++) t[u + a] = p[s + a];
              if (((u += c), (s += c), (r -= c), 1 >= r)) {
                d = !0;
                break;
              }
            }
            if (((t[u++] = t[l++]), 0 === --o)) {
              d = !0;
              break;
            }
            if (((f = We(p[s], t, l, o, 0, e)), 0 !== f)) {
              for (a = 0; f > a; a++) t[u + a] = t[l + a];
              if (((u += f), (l += f), (o -= f), 0 === o)) {
                d = !0;
                break;
              }
            }
            if (((t[u++] = p[s++]), 1 === --r)) {
              d = !0;
              break;
            }
            g--;
          } while (c >= cv || f >= cv);
          if (d) break;
          0 > g && (g = 0), (g += 2);
        }
        if (((h = g), 1 > h && (h = 1), 1 === r)) {
          for (a = 0; o > a; a++) t[u + a] = t[l + a];
          t[u + o] = p[s];
        } else {
          if (0 === r) throw new Error();
          for (a = 0; r > a; a++) t[u + a] = p[s + a];
        }
      } else for (a = 0; r > a; a++) t[u + a] = p[s + a];
    }
    function s(n, r, i, o) {
      var a = 0;
      for (a = 0; o > a; a++) p[a] = t[i + a];
      var s = n + r - 1,
        l = o - 1,
        u = i + o - 1,
        c = 0,
        f = 0;
      if (((t[u--] = t[s--]), 0 !== --r)) {
        if (1 === o) {
          for (u -= r, s -= r, f = u + 1, c = s + 1, a = r - 1; a >= 0; a--)
            t[f + a] = t[c + a];
          return void (t[u] = p[l]);
        }
        for (var d = h; ; ) {
          var g = 0,
            v = 0,
            y = !1;
          do
            if (e(p[l], t[s]) < 0) {
              if (((t[u--] = t[s--]), g++, (v = 0), 0 === --r)) {
                y = !0;
                break;
              }
            } else if (((t[u--] = p[l--]), v++, (g = 0), 1 === --o)) {
              y = !0;
              break;
            }
          while (d > (g | v));
          if (y) break;
          do {
            if (((g = r - Ge(p[l], t, n, r, r - 1, e)), 0 !== g)) {
              for (
                u -= g, s -= g, r -= g, f = u + 1, c = s + 1, a = g - 1;
                a >= 0;
                a--
              )
                t[f + a] = t[c + a];
              if (0 === r) {
                y = !0;
                break;
              }
            }
            if (((t[u--] = p[l--]), 1 === --o)) {
              y = !0;
              break;
            }
            if (((v = o - We(t[s], p, 0, o, o - 1, e)), 0 !== v)) {
              for (
                u -= v, l -= v, o -= v, f = u + 1, c = l + 1, a = 0;
                v > a;
                a++
              )
                t[f + a] = p[c + a];
              if (1 >= o) {
                y = !0;
                break;
              }
            }
            if (((t[u--] = t[s--]), 0 === --r)) {
              y = !0;
              break;
            }
            d--;
          } while (g >= cv || v >= cv);
          if (y) break;
          0 > d && (d = 0), (d += 2);
        }
        if (((h = d), 1 > h && (h = 1), 1 === o)) {
          for (u -= r, s -= r, f = u + 1, c = s + 1, a = r - 1; a >= 0; a--)
            t[f + a] = t[c + a];
          t[u] = p[l];
        } else {
          if (0 === o) throw new Error();
          for (c = u - (o - 1), a = 0; o > a; a++) t[c + a] = p[a];
        }
      } else for (c = u - (o - 1), a = 0; o > a; a++) t[c + a] = p[a];
    }
    var l,
      u,
      h = cv,
      c = 0,
      p = [];
    return (l = []), (u = []), { mergeRuns: r, forceMergeRuns: i, pushRun: n };
  }
  function Xe(t, e, n, r) {
    n || (n = 0), r || (r = t.length);
    var i = r - n;
    if (!(2 > i)) {
      var o = 0;
      if (hv > i) return (o = Fe(t, n, r, e)), void He(t, n, r, n + o, e);
      var a = Ue(t, e),
        s = ze(i);
      do {
        if (((o = Fe(t, n, r, e)), s > o)) {
          var l = i;
          l > s && (l = s), He(t, n, n + l, n + o, e), (o = l);
        }
        a.pushRun(n, o), a.mergeRuns(), (i -= o), (n += o);
      } while (0 !== i);
      a.forceMergeRuns();
    }
  }
  function qe() {
    gv ||
      ((gv = !0),
      console.warn(
        "z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"
      ));
  }
  function Ye(t, e) {
    return t.zlevel === e.zlevel
      ? t.z === e.z
        ? t.z2 - e.z2
        : t.z - e.z
      : t.zlevel - e.zlevel;
  }
  function je(t) {
    return t > -wv && wv > t;
  }
  function Ze(t) {
    return t > wv || -wv > t;
  }
  function Ke(t, e, n, r, i) {
    var o = 1 - i;
    return o * o * (o * t + 3 * i * e) + i * i * (i * r + 3 * o * n);
  }
  function $e(t, e, n, r, i) {
    var o = 1 - i;
    return 3 * (((e - t) * o + 2 * (n - e) * i) * o + (r - n) * i * i);
  }
  function Qe(t, e, n, r, i, o) {
    var a = r + 3 * (e - n) - t,
      s = 3 * (n - 2 * e + t),
      l = 3 * (e - t),
      u = t - i,
      h = s * s - 3 * a * l,
      c = s * l - 9 * a * u,
      p = l * l - 3 * s * u,
      f = 0;
    if (je(h) && je(c))
      if (je(s)) o[0] = 0;
      else {
        var d = -l / s;
        d >= 0 && 1 >= d && (o[f++] = d);
      }
    else {
      var g = c * c - 4 * h * p;
      if (je(g)) {
        var v = c / h,
          d = -s / a + v,
          y = -v / 2;
        d >= 0 && 1 >= d && (o[f++] = d), y >= 0 && 1 >= y && (o[f++] = y);
      } else if (g > 0) {
        var m = xv(g),
          _ = h * s + 1.5 * a * (-c + m),
          x = h * s + 1.5 * a * (-c - m);
        (_ = 0 > _ ? -_v(-_, Mv) : _v(_, Mv)),
          (x = 0 > x ? -_v(-x, Mv) : _v(x, Mv));
        var d = (-s - (_ + x)) / (3 * a);
        d >= 0 && 1 >= d && (o[f++] = d);
      } else {
        var w = (2 * h * s - 3 * a * c) / (2 * xv(h * h * h)),
          b = Math.acos(w) / 3,
          S = xv(h),
          M = Math.cos(b),
          d = (-s - 2 * S * M) / (3 * a),
          y = (-s + S * (M + Sv * Math.sin(b))) / (3 * a),
          T = (-s + S * (M - Sv * Math.sin(b))) / (3 * a);
        d >= 0 && 1 >= d && (o[f++] = d),
          y >= 0 && 1 >= y && (o[f++] = y),
          T >= 0 && 1 >= T && (o[f++] = T);
      }
    }
    return f;
  }
  function Je(t, e, n, r, i) {
    var o = 6 * n - 12 * e + 6 * t,
      a = 9 * e + 3 * r - 3 * t - 9 * n,
      s = 3 * e - 3 * t,
      l = 0;
    if (je(a)) {
      if (Ze(o)) {
        var u = -s / o;
        u >= 0 && 1 >= u && (i[l++] = u);
      }
    } else {
      var h = o * o - 4 * a * s;
      if (je(h)) i[0] = -o / (2 * a);
      else if (h > 0) {
        var c = xv(h),
          u = (-o + c) / (2 * a),
          p = (-o - c) / (2 * a);
        u >= 0 && 1 >= u && (i[l++] = u), p >= 0 && 1 >= p && (i[l++] = p);
      }
    }
    return l;
  }
  function tn(t, e, n, r, i, o) {
    var a = (e - t) * i + t,
      s = (n - e) * i + e,
      l = (r - n) * i + n,
      u = (s - a) * i + a,
      h = (l - s) * i + s,
      c = (h - u) * i + u;
    (o[0] = t),
      (o[1] = a),
      (o[2] = u),
      (o[3] = c),
      (o[4] = c),
      (o[5] = h),
      (o[6] = l),
      (o[7] = r);
  }
  function en(t, e, n, r, i, o, a, s, l, u, h) {
    var c,
      p,
      f,
      d,
      g,
      v = 0.005,
      y = 1 / 0;
    (Tv[0] = l), (Tv[1] = u);
    for (var m = 0; 1 > m; m += 0.05)
      (Cv[0] = Ke(t, n, i, a, m)),
        (Cv[1] = Ke(e, r, o, s, m)),
        (d = Xg(Tv, Cv)),
        y > d && ((c = m), (y = d));
    y = 1 / 0;
    for (var _ = 0; 32 > _ && !(bv > v); _++)
      (p = c - v),
        (f = c + v),
        (Cv[0] = Ke(t, n, i, a, p)),
        (Cv[1] = Ke(e, r, o, s, p)),
        (d = Xg(Cv, Tv)),
        p >= 0 && y > d
          ? ((c = p), (y = d))
          : ((kv[0] = Ke(t, n, i, a, f)),
            (kv[1] = Ke(e, r, o, s, f)),
            (g = Xg(kv, Tv)),
            1 >= f && y > g ? ((c = f), (y = g)) : (v *= 0.5));
    return h && ((h[0] = Ke(t, n, i, a, c)), (h[1] = Ke(e, r, o, s, c))), xv(y);
  }
  function nn(t, e, n, r, i, o, a, s, l) {
    for (var u = t, h = e, c = 0, p = 1 / l, f = 1; l >= f; f++) {
      var d = f * p,
        g = Ke(t, n, i, a, d),
        v = Ke(e, r, o, s, d),
        y = g - u,
        m = v - h;
      (c += Math.sqrt(y * y + m * m)), (u = g), (h = v);
    }
    return c;
  }
  function rn(t, e, n, r) {
    var i = 1 - r;
    return i * (i * t + 2 * r * e) + r * r * n;
  }
  function on(t, e, n, r) {
    return 2 * ((1 - r) * (e - t) + r * (n - e));
  }
  function an(t, e, n, r, i) {
    var o = t - 2 * e + n,
      a = 2 * (e - t),
      s = t - r,
      l = 0;
    if (je(o)) {
      if (Ze(a)) {
        var u = -s / a;
        u >= 0 && 1 >= u && (i[l++] = u);
      }
    } else {
      var h = a * a - 4 * o * s;
      if (je(h)) {
        var u = -a / (2 * o);
        u >= 0 && 1 >= u && (i[l++] = u);
      } else if (h > 0) {
        var c = xv(h),
          u = (-a + c) / (2 * o),
          p = (-a - c) / (2 * o);
        u >= 0 && 1 >= u && (i[l++] = u), p >= 0 && 1 >= p && (i[l++] = p);
      }
    }
    return l;
  }
  function sn(t, e, n) {
    var r = t + n - 2 * e;
    return 0 === r ? 0.5 : (t - e) / r;
  }
  function ln(t, e, n, r, i) {
    var o = (e - t) * r + t,
      a = (n - e) * r + e,
      s = (a - o) * r + o;
    (i[0] = t), (i[1] = o), (i[2] = s), (i[3] = s), (i[4] = a), (i[5] = n);
  }
  function un(t, e, n, r, i, o, a, s, l) {
    var u,
      h = 0.005,
      c = 1 / 0;
    (Tv[0] = a), (Tv[1] = s);
    for (var p = 0; 1 > p; p += 0.05) {
      (Cv[0] = rn(t, n, i, p)), (Cv[1] = rn(e, r, o, p));
      var f = Xg(Tv, Cv);
      c > f && ((u = p), (c = f));
    }
    c = 1 / 0;
    for (var d = 0; 32 > d && !(bv > h); d++) {
      var g = u - h,
        v = u + h;
      (Cv[0] = rn(t, n, i, g)), (Cv[1] = rn(e, r, o, g));
      var f = Xg(Cv, Tv);
      if (g >= 0 && c > f) (u = g), (c = f);
      else {
        (kv[0] = rn(t, n, i, v)), (kv[1] = rn(e, r, o, v));
        var y = Xg(kv, Tv);
        1 >= v && c > y ? ((u = v), (c = y)) : (h *= 0.5);
      }
    }
    return l && ((l[0] = rn(t, n, i, u)), (l[1] = rn(e, r, o, u))), xv(c);
  }
  function hn(t, e, n, r, i, o, a) {
    for (var s = t, l = e, u = 0, h = 1 / a, c = 1; a >= c; c++) {
      var p = c * h,
        f = rn(t, n, i, p),
        d = rn(e, r, o, p),
        g = f - s,
        v = d - l;
      (u += Math.sqrt(g * g + v * v)), (s = f), (l = d);
    }
    return u;
  }
  function cn(t) {
    var e = t && Dv.exec(t);
    if (e) {
      var n = e[1].split(","),
        r = +G(n[0]),
        i = +G(n[1]),
        o = +G(n[2]),
        a = +G(n[3]);
      if (isNaN(r + i + o + a)) return;
      var s = [];
      return function (t) {
        return 0 >= t
          ? 0
          : t >= 1
          ? 1
          : Qe(0, r, o, 1, t, s) && Ke(0, i, a, 1, s[0]);
      };
    }
  }
  function pn(t) {
    return (t = Math.round(t)), 0 > t ? 0 : t > 255 ? 255 : t;
  }
  function fn(t) {
    return (t = Math.round(t)), 0 > t ? 0 : t > 360 ? 360 : t;
  }
  function dn(t) {
    return 0 > t ? 0 : t > 1 ? 1 : t;
  }
  function gn(t) {
    var e = t;
    return pn(
      e.length && "%" === e.charAt(e.length - 1)
        ? (parseFloat(e) / 100) * 255
        : parseInt(e, 10)
    );
  }
  function vn(t) {
    var e = t;
    return dn(
      e.length && "%" === e.charAt(e.length - 1)
        ? parseFloat(e) / 100
        : parseFloat(e)
    );
  }
  function yn(t, e, n) {
    return (
      0 > n ? (n += 1) : n > 1 && (n -= 1),
      1 > 6 * n
        ? t + (e - t) * n * 6
        : 1 > 2 * n
        ? e
        : 2 > 3 * n
        ? t + (e - t) * (2 / 3 - n) * 6
        : t
    );
  }
  function mn(t, e, n) {
    return t + (e - t) * n;
  }
  function _n(t, e, n, r, i) {
    return (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i), t;
  }
  function xn(t, e) {
    return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
  }
  function wn(t, e) {
    Ev && xn(Ev, e), (Ev = Rv.put(t, Ev || e.slice()));
  }
  function bn(t, e) {
    if (t) {
      e = e || [];
      var n = Rv.get(t);
      if (n) return xn(e, n);
      t += "";
      var r = t.replace(/ /g, "").toLowerCase();
      if (r in Ov) return xn(e, Ov[r]), wn(t, e), e;
      var i = r.length;
      if ("#" !== r.charAt(0)) {
        var o = r.indexOf("("),
          a = r.indexOf(")");
        if (-1 !== o && a + 1 === i) {
          var s = r.substr(0, o),
            l = r.substr(o + 1, a - (o + 1)).split(","),
            u = 1;
          switch (s) {
            case "rgba":
              if (4 !== l.length)
                return 3 === l.length
                  ? _n(e, +l[0], +l[1], +l[2], 1)
                  : _n(e, 0, 0, 0, 1);
              u = vn(l.pop());
            case "rgb":
              return 3 !== l.length
                ? void _n(e, 0, 0, 0, 1)
                : (_n(e, gn(l[0]), gn(l[1]), gn(l[2]), u), wn(t, e), e);
            case "hsla":
              return 4 !== l.length
                ? void _n(e, 0, 0, 0, 1)
                : ((l[3] = vn(l[3])), Sn(l, e), wn(t, e), e);
            case "hsl":
              return 3 !== l.length
                ? void _n(e, 0, 0, 0, 1)
                : (Sn(l, e), wn(t, e), e);
            default:
              return;
          }
        }
        _n(e, 0, 0, 0, 1);
      } else {
        if (4 === i || 5 === i) {
          var h = parseInt(r.slice(1, 4), 16);
          return h >= 0 && 4095 >= h
            ? (_n(
                e,
                ((3840 & h) >> 4) | ((3840 & h) >> 8),
                (240 & h) | ((240 & h) >> 4),
                (15 & h) | ((15 & h) << 4),
                5 === i ? parseInt(r.slice(4), 16) / 15 : 1
              ),
              wn(t, e),
              e)
            : void _n(e, 0, 0, 0, 1);
        }
        if (7 === i || 9 === i) {
          var h = parseInt(r.slice(1, 7), 16);
          return h >= 0 && 16777215 >= h
            ? (_n(
                e,
                (16711680 & h) >> 16,
                (65280 & h) >> 8,
                255 & h,
                9 === i ? parseInt(r.slice(7), 16) / 255 : 1
              ),
              wn(t, e),
              e)
            : void _n(e, 0, 0, 0, 1);
        }
      }
    }
  }
  function Sn(t, e) {
    var n = (((parseFloat(t[0]) % 360) + 360) % 360) / 360,
      r = vn(t[1]),
      i = vn(t[2]),
      o = 0.5 >= i ? i * (r + 1) : i + r - i * r,
      a = 2 * i - o;
    return (
      (e = e || []),
      _n(
        e,
        pn(255 * yn(a, o, n + 1 / 3)),
        pn(255 * yn(a, o, n)),
        pn(255 * yn(a, o, n - 1 / 3)),
        1
      ),
      4 === t.length && (e[3] = t[3]),
      e
    );
  }
  function Mn(t) {
    if (t) {
      var e,
        n,
        r = t[0] / 255,
        i = t[1] / 255,
        o = t[2] / 255,
        a = Math.min(r, i, o),
        s = Math.max(r, i, o),
        l = s - a,
        u = (s + a) / 2;
      if (0 === l) (e = 0), (n = 0);
      else {
        n = 0.5 > u ? l / (s + a) : l / (2 - s - a);
        var h = ((s - r) / 6 + l / 2) / l,
          c = ((s - i) / 6 + l / 2) / l,
          p = ((s - o) / 6 + l / 2) / l;
        r === s
          ? (e = p - c)
          : i === s
          ? (e = 1 / 3 + h - p)
          : o === s && (e = 2 / 3 + c - h),
          0 > e && (e += 1),
          e > 1 && (e -= 1);
      }
      var f = [360 * e, n, u];
      return null != t[3] && f.push(t[3]), f;
    }
  }
  function Tn(t, e) {
    var n = bn(t);
    if (n) {
      for (var r = 0; 3 > r; r++)
        (n[r] = 0 > e ? (n[r] * (1 - e)) | 0 : ((255 - n[r]) * e + n[r]) | 0),
          n[r] > 255 ? (n[r] = 255) : n[r] < 0 && (n[r] = 0);
      return Ln(n, 4 === n.length ? "rgba" : "rgb");
    }
  }
  function Cn(t) {
    var e = bn(t);
    return e
      ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
      : void 0;
  }
  function kn(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      n = n || [];
      var r = t * (e.length - 1),
        i = Math.floor(r),
        o = Math.ceil(r),
        a = e[i],
        s = e[o],
        l = r - i;
      return (
        (n[0] = pn(mn(a[0], s[0], l))),
        (n[1] = pn(mn(a[1], s[1], l))),
        (n[2] = pn(mn(a[2], s[2], l))),
        (n[3] = dn(mn(a[3], s[3], l))),
        n
      );
    }
  }
  function Dn(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      var r = t * (e.length - 1),
        i = Math.floor(r),
        o = Math.ceil(r),
        a = bn(e[i]),
        s = bn(e[o]),
        l = r - i,
        u = Ln(
          [
            pn(mn(a[0], s[0], l)),
            pn(mn(a[1], s[1], l)),
            pn(mn(a[2], s[2], l)),
            dn(mn(a[3], s[3], l)),
          ],
          "rgba"
        );
      return n ? { color: u, leftIndex: i, rightIndex: o, value: r } : u;
    }
  }
  function In(t, e, n, r) {
    var i = bn(t);
    return t
      ? ((i = Mn(i)),
        null != e && (i[0] = fn(e)),
        null != n && (i[1] = vn(n)),
        null != r && (i[2] = vn(r)),
        Ln(Sn(i), "rgba"))
      : void 0;
  }
  function An(t, e) {
    var n = bn(t);
    return n && null != e ? ((n[3] = dn(e)), Ln(n, "rgba")) : void 0;
  }
  function Ln(t, e) {
    if (t && t.length) {
      var n = t[0] + "," + t[1] + "," + t[2];
      return (
        ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]),
        e + "(" + n + ")"
      );
    }
  }
  function Pn(t, e) {
    var n = bn(t);
    return n
      ? ((0.299 * n[0] + 0.587 * n[1] + 0.114 * n[2]) * n[3]) / 255 +
          (1 - n[3]) * e
      : 0;
  }
  function On() {
    return Ln(
      [
        Math.round(255 * Math.random()),
        Math.round(255 * Math.random()),
        Math.round(255 * Math.random()),
      ],
      "rgb"
    );
  }
  function Rn(t) {
    return "linear" === t.type;
  }
  function En(t) {
    return "radial" === t.type;
  }
  function Bn(t, e, n) {
    return (e - t) * n + t;
  }
  function Nn(t, e, n, r) {
    for (var i = e.length, o = 0; i > o; o++) t[o] = Bn(e[o], n[o], r);
    return t;
  }
  function zn(t, e, n, r) {
    for (var i = e.length, o = i && e[0].length, a = 0; i > a; a++) {
      t[a] || (t[a] = []);
      for (var s = 0; o > s; s++) t[a][s] = Bn(e[a][s], n[a][s], r);
    }
    return t;
  }
  function Fn(t, e, n, r) {
    for (var i = e.length, o = 0; i > o; o++) t[o] = e[o] + n[o] * r;
    return t;
  }
  function Vn(t, e, n, r) {
    for (var i = e.length, o = i && e[0].length, a = 0; i > a; a++) {
      t[a] || (t[a] = []);
      for (var s = 0; o > s; s++) t[a][s] = e[a][s] + n[a][s] * r;
    }
    return t;
  }
  function Hn(t, e) {
    for (
      var n = t.length,
        r = e.length,
        i = n > r ? e : t,
        o = Math.min(n, r),
        a = i[o - 1] || { color: [0, 0, 0, 0], offset: 0 },
        s = o;
      s < Math.max(n, r);
      s++
    )
      i.push({ offset: a.offset, color: a.color.slice() });
  }
  function Wn(t, e, n) {
    var r = t,
      i = e;
    if (r.push && i.push) {
      var o = r.length,
        a = i.length;
      if (o !== a) {
        var s = o > a;
        if (s) r.length = a;
        else for (var l = o; a > l; l++) r.push(1 === n ? i[l] : Fv.call(i[l]));
      }
      for (var u = r[0] && r[0].length, l = 0; l < r.length; l++)
        if (1 === n) isNaN(r[l]) && (r[l] = i[l]);
        else for (var h = 0; u > h; h++) isNaN(r[l][h]) && (r[l][h] = i[l][h]);
    }
  }
  function Gn(t) {
    if (g(t)) {
      var e = t.length;
      if (g(t[0])) {
        for (var n = [], r = 0; e > r; r++) n.push(Fv.call(t[r]));
        return n;
      }
      return Fv.call(t);
    }
    return t;
  }
  function Un(t) {
    return (
      (t[0] = Math.floor(t[0]) || 0),
      (t[1] = Math.floor(t[1]) || 0),
      (t[2] = Math.floor(t[2]) || 0),
      (t[3] = null == t[3] ? 1 : t[3]),
      "rgba(" + t.join(",") + ")"
    );
  }
  function Xn(t) {
    return g(t && t[0]) ? 2 : 1;
  }
  function qn(t) {
    return t === Uv || t === Xv;
  }
  function Yn(t) {
    return t === Hv || t === Wv;
  }
  function jn() {
    return new Date().getTime();
  }
  function Zn(t) {
    var e = t.pointerType;
    return "pen" === e || "touch" === e;
  }
  function Kn(t) {
    (t.touching = !0),
      null != t.touchTimer &&
        (clearTimeout(t.touchTimer), (t.touchTimer = null)),
      (t.touchTimer = setTimeout(function () {
        (t.touching = !1), (t.touchTimer = null);
      }, 700));
  }
  function $n(t) {
    t && (t.zrByTouch = !0);
  }
  function Qn(t, e) {
    return De(t.dom, new ny(t, e), !0);
  }
  function Jn(t, e) {
    for (
      var n = e, r = !1;
      n &&
      9 !== n.nodeType &&
      !(r = n.domBelongToZr || (n !== e && n === t.painterRoot));

    )
      n = n.parentNode;
    return r;
  }
  function tr(t, e) {
    var n = e.domHandlers;
    gg.pointerEventsSupported
      ? v(Jv.pointer, function (r) {
          nr(e, r, function (e) {
            n[r].call(t, e);
          });
        })
      : (gg.touchEventsSupported &&
          v(Jv.touch, function (r) {
            nr(e, r, function (i) {
              n[r].call(t, i), Kn(e);
            });
          }),
        v(Jv.mouse, function (r) {
          nr(e, r, function (i) {
            (i = ke(i)), e.touching || n[r].call(t, i);
          });
        }));
  }
  function er(t, e) {
    function n(n) {
      function r(r) {
        (r = ke(r)),
          Jn(t, r.target) || ((r = Qn(t, r)), e.domHandlers[n].call(t, r));
      }
      nr(e, n, r, { capture: !0 });
    }
    gg.pointerEventsSupported
      ? v(ty.pointer, n)
      : gg.touchEventsSupported || v(ty.mouse, n);
  }
  function nr(t, e, n, r) {
    (t.mounted[e] = n), (t.listenerOpts[e] = r), Ae(t.domTarget, e, n, r);
  }
  function rr(t) {
    var e = t.mounted;
    for (var n in e)
      e.hasOwnProperty(n) && Le(t.domTarget, n, e[n], t.listenerOpts[n]);
    t.mounted = {};
  }
  function ir() {
    return [1, 0, 0, 1, 0, 0];
  }
  function or(t) {
    return (
      (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t
    );
  }
  function ar(t, e) {
    return (
      (t[0] = e[0]),
      (t[1] = e[1]),
      (t[2] = e[2]),
      (t[3] = e[3]),
      (t[4] = e[4]),
      (t[5] = e[5]),
      t
    );
  }
  function sr(t, e, n) {
    var r = e[0] * n[0] + e[2] * n[1],
      i = e[1] * n[0] + e[3] * n[1],
      o = e[0] * n[2] + e[2] * n[3],
      a = e[1] * n[2] + e[3] * n[3],
      s = e[0] * n[4] + e[2] * n[5] + e[4],
      l = e[1] * n[4] + e[3] * n[5] + e[5];
    return (
      (t[0] = r), (t[1] = i), (t[2] = o), (t[3] = a), (t[4] = s), (t[5] = l), t
    );
  }
  function lr(t, e, n) {
    return (
      (t[0] = e[0]),
      (t[1] = e[1]),
      (t[2] = e[2]),
      (t[3] = e[3]),
      (t[4] = e[4] + n[0]),
      (t[5] = e[5] + n[1]),
      t
    );
  }
  function ur(t, e, n) {
    var r = e[0],
      i = e[2],
      o = e[4],
      a = e[1],
      s = e[3],
      l = e[5],
      u = Math.sin(n),
      h = Math.cos(n);
    return (
      (t[0] = r * h + a * u),
      (t[1] = -r * u + a * h),
      (t[2] = i * h + s * u),
      (t[3] = -i * u + h * s),
      (t[4] = h * o + u * l),
      (t[5] = h * l - u * o),
      t
    );
  }
  function hr(t, e, n) {
    var r = n[0],
      i = n[1];
    return (
      (t[0] = e[0] * r),
      (t[1] = e[1] * i),
      (t[2] = e[2] * r),
      (t[3] = e[3] * i),
      (t[4] = e[4] * r),
      (t[5] = e[5] * i),
      t
    );
  }
  function cr(t, e) {
    var n = e[0],
      r = e[2],
      i = e[4],
      o = e[1],
      a = e[3],
      s = e[5],
      l = n * a - o * r;
    return l
      ? ((l = 1 / l),
        (t[0] = a * l),
        (t[1] = -o * l),
        (t[2] = -r * l),
        (t[3] = n * l),
        (t[4] = (r * s - a * i) * l),
        (t[5] = (o * i - n * s) * l),
        t)
      : null;
  }
  function pr(t) {
    var e = ir();
    return ar(e, t), e;
  }
  function fr(t) {
    return t > gy || -gy > t;
  }
  function dr(t, e) {
    for (var n = 0; n < wy.length; n++) {
      var r = wy[n];
      t[r] = e[r];
    }
  }
  function gr(t, e) {
    e = e || mg;
    var n = Py[e];
    n || (n = Py[e] = new Pv(500));
    var r = n.get(t);
    return null == r && ((r = Sg.measureText(t, e).width), n.put(t, r)), r;
  }
  function vr(t, e, n, r) {
    var i = gr(t, e),
      o = xr(e),
      a = mr(0, i, n),
      s = _r(0, o, r),
      l = new Ly(a, s, i, o);
    return l;
  }
  function yr(t, e, n, r) {
    var i = ((t || "") + "").split("\n"),
      o = i.length;
    if (1 === o) return vr(i[0], e, n, r);
    for (var a = new Ly(0, 0, 0, 0), s = 0; s < i.length; s++) {
      var l = vr(i[s], e, n, r);
      0 === s ? a.copy(l) : a.union(l);
    }
    return a;
  }
  function mr(t, e, n) {
    return "right" === n ? (t -= e) : "center" === n && (t -= e / 2), t;
  }
  function _r(t, e, n) {
    return "middle" === n ? (t -= e / 2) : "bottom" === n && (t -= e), t;
  }
  function xr(t) {
    return gr("国", t);
  }
  function wr(t, e) {
    return "string" == typeof t
      ? t.lastIndexOf("%") >= 0
        ? (parseFloat(t) / 100) * e
        : parseFloat(t)
      : t;
  }
  function br(t, e, n) {
    var r = e.position || "inside",
      i = null != e.distance ? e.distance : 5,
      o = n.height,
      a = n.width,
      s = o / 2,
      l = n.x,
      u = n.y,
      h = "left",
      c = "top";
    if (r instanceof Array)
      (l += wr(r[0], n.width)),
        (u += wr(r[1], n.height)),
        (h = null),
        (c = null);
    else
      switch (r) {
        case "left":
          (l -= i), (u += s), (h = "right"), (c = "middle");
          break;
        case "right":
          (l += i + a), (u += s), (c = "middle");
          break;
        case "top":
          (l += a / 2), (u -= i), (h = "center"), (c = "bottom");
          break;
        case "bottom":
          (l += a / 2), (u += o + i), (h = "center");
          break;
        case "inside":
          (l += a / 2), (u += s), (h = "center"), (c = "middle");
          break;
        case "insideLeft":
          (l += i), (u += s), (c = "middle");
          break;
        case "insideRight":
          (l += a - i), (u += s), (h = "right"), (c = "middle");
          break;
        case "insideTop":
          (l += a / 2), (u += i), (h = "center");
          break;
        case "insideBottom":
          (l += a / 2), (u += o - i), (h = "center"), (c = "bottom");
          break;
        case "insideTopLeft":
          (l += i), (u += i);
          break;
        case "insideTopRight":
          (l += a - i), (u += i), (h = "right");
          break;
        case "insideBottomLeft":
          (l += i), (u += o - i), (c = "bottom");
          break;
        case "insideBottomRight":
          (l += a - i), (u += o - i), (h = "right"), (c = "bottom");
      }
    return (
      (t = t || {}),
      (t.x = l),
      (t.y = u),
      (t.align = h),
      (t.verticalAlign = c),
      t
    );
  }
  function Sr(t, e, n, r, i) {
    n = n || {};
    var o = [];
    Ir(t, "", t, e, n, r, o, i);
    var a = o.length,
      s = !1,
      l = n.done,
      u = n.aborted,
      h = function () {
        (s = !0), a--, 0 >= a && (s ? l && l() : u && u());
      },
      c = function () {
        a--, 0 >= a && (s ? l && l() : u && u());
      };
    a || (l && l()),
      o.length > 0 &&
        n.during &&
        o[0].during(function (t, e) {
          n.during(e);
        });
    for (var p = 0; p < o.length; p++) {
      var f = o[p];
      h && f.done(h),
        c && f.aborted(c),
        n.force && f.duration(n.duration),
        f.start(n.easing);
    }
    return o;
  }
  function Mr(t, e, n) {
    for (var r = 0; n > r; r++) t[r] = e[r];
  }
  function Tr(t) {
    return g(t[0]);
  }
  function Cr(t, e, n) {
    if (g(e[n]))
      if ((g(t[n]) || (t[n] = []), L(e[n]))) {
        var r = e[n].length;
        t[n].length !== r &&
          ((t[n] = new e[n].constructor(r)), Mr(t[n], e[n], r));
      } else {
        var i = e[n],
          o = t[n],
          a = i.length;
        if (Tr(i))
          for (var s = i[0].length, l = 0; a > l; l++)
            o[l]
              ? Mr(o[l], i[l], s)
              : (o[l] = Array.prototype.slice.call(i[l]));
        else Mr(o, i, a);
        o.length = i.length;
      }
    else t[n] = e[n];
  }
  function kr(t, e) {
    return t === e || (g(t) && g(e) && Dr(t, e));
  }
  function Dr(t, e) {
    var n = t.length;
    if (n !== e.length) return !1;
    for (var r = 0; n > r; r++) if (t[r] !== e[r]) return !1;
    return !0;
  }
  function Ir(t, e, n, r, i, o, a, s) {
    for (
      var l = w(r),
        u = i.duration,
        h = i.delay,
        c = i.additive,
        f = i.setToFinal,
        d = !I(o),
        v = t.animators,
        y = [],
        m = 0;
      m < l.length;
      m++
    ) {
      var x = l[m],
        b = r[x];
      if (null != b && null != n[x] && (d || o[x]))
        if (!I(b) || g(b) || O(b)) y.push(x);
        else {
          if (e) {
            s || ((n[x] = b), t.updateDuringAnimation(e));
            continue;
          }
          Ir(t, x, n[x], b, i, o && o[x], a, s);
        }
      else s || ((n[x] = b), t.updateDuringAnimation(e), y.push(x));
    }
    var S = y.length;
    if (!c && S)
      for (var M = 0; M < v.length; M++) {
        var T = v[M];
        if (T.targetName === e) {
          var C = T.stopTracks(y);
          if (C) {
            var k = p(v, T);
            v.splice(k, 1);
          }
        }
      }
    if (
      (i.force ||
        ((y = _(y, function (t) {
          return !kr(r[t], n[t]);
        })),
        (S = y.length)),
      S > 0 || (i.force && !a.length))
    ) {
      var D = void 0,
        A = void 0,
        L = void 0;
      if (s) {
        (A = {}), f && (D = {});
        for (var M = 0; S > M; M++) {
          var x = y[M];
          (A[x] = n[x]), f ? (D[x] = r[x]) : (n[x] = r[x]);
        }
      } else if (f) {
        L = {};
        for (var M = 0; S > M; M++) {
          var x = y[M];
          (L[x] = Gn(n[x])), Cr(n, r, x);
        }
      }
      var T = new Zv(
        n,
        !1,
        !1,
        c
          ? _(v, function (t) {
              return t.targetName === e;
            })
          : null
      );
      (T.targetName = e),
        i.scope && (T.scope = i.scope),
        f && D && T.whenWithKeys(0, D, y),
        L && T.whenWithKeys(0, L, y),
        T.whenWithKeys(null == u ? 500 : u, s ? A : r, y).delay(h || 0),
        t.addAnimator(T, e),
        a.push(T);
    }
  }
  function Ar(t) {
    delete Hy[t];
  }
  function Lr(t) {
    if (!t) return !1;
    if ("string" == typeof t) return Pn(t, 1) < uy;
    if (t.colorStops) {
      for (var e = t.colorStops, n = 0, r = e.length, i = 0; r > i; i++)
        n += Pn(e[i].color, 1);
      return (n /= r), uy > n;
    }
    return !1;
  }
  function Pr(t, e) {
    var n = new Wy(o(), t, e);
    return (Hy[n.id] = n), n;
  }
  function Or(t) {
    t.dispose();
  }
  function Rr() {
    for (var t in Hy) Hy.hasOwnProperty(t) && Hy[t].dispose();
    Hy = {};
  }
  function Er(t) {
    return Hy[t];
  }
  function Br(t, e) {
    Vy[t] = e;
  }
  function Nr(t) {
    return t.replace(/^\s+|\s+$/g, "");
  }
  function zr(t, e, n, r) {
    var i = e[0],
      o = e[1],
      a = n[0],
      s = n[1],
      l = o - i,
      u = s - a;
    if (0 === l) return 0 === u ? a : (a + s) / 2;
    if (r)
      if (l > 0) {
        if (i >= t) return a;
        if (t >= o) return s;
      } else {
        if (t >= i) return a;
        if (o >= t) return s;
      }
    else {
      if (t === i) return a;
      if (t === o) return s;
    }
    return ((t - i) / l) * u + a;
  }
  function Fr(t, e) {
    switch (t) {
      case "center":
      case "middle":
        t = "50%";
        break;
      case "left":
      case "top":
        t = "0%";
        break;
      case "right":
      case "bottom":
        t = "100%";
    }
    return C(t)
      ? Nr(t).match(/%$/)
        ? (parseFloat(t) / 100) * e
        : parseFloat(t)
      : null == t
      ? 0 / 0
      : +t;
  }
  function Vr(t, e, n) {
    return (
      null == e && (e = 10),
      (e = Math.min(Math.max(0, e), qy)),
      (t = (+t).toFixed(e)),
      n ? t : +t
    );
  }
  function Hr(t) {
    return (
      t.sort(function (t, e) {
        return t - e;
      }),
      t
    );
  }
  function Wr(t) {
    if (((t = +t), isNaN(t))) return 0;
    if (t > 1e-14)
      for (var e = 1, n = 0; 15 > n; n++, e *= 10)
        if (Math.round(t * e) / e === t) return n;
    return Gr(t);
  }
  function Gr(t) {
    var e = t.toString().toLowerCase(),
      n = e.indexOf("e"),
      r = n > 0 ? +e.slice(n + 1) : 0,
      i = n > 0 ? n : e.length,
      o = e.indexOf("."),
      a = 0 > o ? 0 : i - 1 - o;
    return Math.max(0, a - r);
  }
  function Ur(t, e) {
    var n = Math.log,
      r = Math.LN10,
      i = Math.floor(n(t[1] - t[0]) / r),
      o = Math.round(n(Math.abs(e[1] - e[0])) / r),
      a = Math.min(Math.max(-i + o, 0), 20);
    return isFinite(a) ? a : 20;
  }
  function Xr(t, e, n) {
    if (!t[e]) return 0;
    var r = m(
      t,
      function (t, e) {
        return t + (isNaN(e) ? 0 : e);
      },
      0
    );
    if (0 === r) return 0;
    for (
      var i = Math.pow(10, n),
        o = y(t, function (t) {
          return ((isNaN(t) ? 0 : t) / r) * i * 100;
        }),
        a = 100 * i,
        s = y(o, function (t) {
          return Math.floor(t);
        }),
        l = m(
          s,
          function (t, e) {
            return t + e;
          },
          0
        ),
        u = y(o, function (t, e) {
          return t - s[e];
        });
      a > l;

    ) {
      for (
        var h = Number.NEGATIVE_INFINITY, c = null, p = 0, f = u.length;
        f > p;
        ++p
      )
        u[p] > h && ((h = u[p]), (c = p));
      ++s[c], (u[c] = 0), ++l;
    }
    return s[e] / i;
  }
  function qr(t, e) {
    var n = Math.max(Wr(t), Wr(e)),
      r = t + e;
    return n > qy ? r : Vr(r, n);
  }
  function Yr(t) {
    var e = 2 * Math.PI;
    return ((t % e) + e) % e;
  }
  function jr(t) {
    return t > -Xy && Xy > t;
  }
  function Zr(t) {
    if (t instanceof Date) return t;
    if (C(t)) {
      var e = jy.exec(t);
      if (!e) return new Date(0 / 0);
      if (e[8]) {
        var n = +e[4] || 0;
        return (
          "Z" !== e[8].toUpperCase() && (n -= +e[8].slice(0, 3)),
          new Date(
            Date.UTC(
              +e[1],
              +(e[2] || 1) - 1,
              +e[3] || 1,
              n,
              +(e[5] || 0),
              +e[6] || 0,
              e[7] ? +e[7].substring(0, 3) : 0
            )
          )
        );
      }
      return new Date(
        +e[1],
        +(e[2] || 1) - 1,
        +e[3] || 1,
        +e[4] || 0,
        +(e[5] || 0),
        +e[6] || 0,
        e[7] ? +e[7].substring(0, 3) : 0
      );
    }
    return new Date(null == t ? 0 / 0 : Math.round(t));
  }
  function Kr(t) {
    return Math.pow(10, $r(t));
  }
  function $r(t) {
    if (0 === t) return 0;
    var e = Math.floor(Math.log(t) / Math.LN10);
    return t / Math.pow(10, e) >= 10 && e++, e;
  }
  function Qr(t, e) {
    var n,
      r = $r(t),
      i = Math.pow(10, r),
      o = t / i;
    return (
      (n = e
        ? 1.5 > o
          ? 1
          : 2.5 > o
          ? 2
          : 4 > o
          ? 3
          : 7 > o
          ? 5
          : 10
        : 1 > o
        ? 1
        : 2 > o
        ? 2
        : 3 > o
        ? 3
        : 5 > o
        ? 5
        : 10),
      (t = n * i),
      r >= -20 ? +t.toFixed(0 > r ? -r : 0) : t
    );
  }
  function Jr(t, e) {
    var n = (t.length - 1) * e + 1,
      r = Math.floor(n),
      i = +t[r - 1],
      o = n - r;
    return o ? i + o * (t[r] - i) : i;
  }
  function ti(t) {
    function e(t, n, r) {
      return (
        t.interval[r] < n.interval[r] ||
        (t.interval[r] === n.interval[r] &&
          (t.close[r] - n.close[r] === (r ? -1 : 1) || (!r && e(t, n, 1))))
      );
    }
    t.sort(function (t, n) {
      return e(t, n, 0) ? -1 : 1;
    });
    for (var n = -1 / 0, r = 1, i = 0; i < t.length; ) {
      for (var o = t[i].interval, a = t[i].close, s = 0; 2 > s; s++)
        o[s] <= n && ((o[s] = n), (a[s] = s ? 1 : 1 - r)),
          (n = o[s]),
          (r = a[s]);
      o[0] === o[1] && a[0] * a[1] !== 1 ? t.splice(i, 1) : i++;
    }
    return t;
  }
  function ei(t) {
    var e = parseFloat(t);
    return e == t && (0 !== e || !C(t) || t.indexOf("x") <= 0) ? e : 0 / 0;
  }
  function ni(t) {
    return !isNaN(ei(t));
  }
  function ri() {
    return Math.round(9 * Math.random());
  }
  function ii(t, e) {
    return 0 === e ? t : ii(e, t % e);
  }
  function oi(t, e) {
    return null == t ? e : null == e ? t : (t * e) / ii(t, e);
  }
  function ai(t) {
    throw new Error(t);
  }
  function si(t, e, n) {
    return (e - t) * n + t;
  }
  function li(t) {
    return t instanceof Array ? t : null == t ? [] : [t];
  }
  function ui(t, e, n) {
    if (t) {
      (t[e] = t[e] || {}),
        (t.emphasis = t.emphasis || {}),
        (t.emphasis[e] = t.emphasis[e] || {});
      for (var r = 0, i = n.length; i > r; r++) {
        var o = n[r];
        !t.emphasis[e].hasOwnProperty(o) &&
          t[e].hasOwnProperty(o) &&
          (t.emphasis[e][o] = t[e][o]);
      }
    }
  }
  function hi(t) {
    return !I(t) || M(t) || t instanceof Date ? t : t.value;
  }
  function ci(t) {
    return I(t) && !(t instanceof Array);
  }
  function pi(t, e, n) {
    var r = "normalMerge" === n,
      i = "replaceMerge" === n,
      o = "replaceAll" === n;
    (t = t || []), (e = (e || []).slice());
    var a = q();
    v(e, function (t, n) {
      return I(t) ? void 0 : void (e[n] = null);
    });
    var s = fi(t, a, n);
    return (
      (r || i) && di(s, t, a, e),
      r && gi(s, e),
      r || i ? vi(s, e, i) : o && yi(s, e),
      mi(s),
      s
    );
  }
  function fi(t, e, n) {
    var r = [];
    if ("replaceAll" === n) return r;
    for (var i = 0; i < t.length; i++) {
      var o = t[i];
      o && null != o.id && e.set(o.id, i),
        r.push({
          existing: "replaceMerge" === n || Si(o) ? null : o,
          newOption: null,
          keyInfo: null,
          brandNew: null,
        });
    }
    return r;
  }
  function di(t, e, n, r) {
    v(r, function (i, o) {
      if (i && null != i.id) {
        var a = xi(i.id),
          s = n.get(a);
        if (null != s) {
          var l = t[s];
          W(!l.newOption, 'Duplicated option on id "' + a + '".'),
            (l.newOption = i),
            (l.existing = e[s]),
            (r[o] = null);
        }
      }
    });
  }
  function gi(t, e) {
    v(e, function (n, r) {
      if (n && null != n.name)
        for (var i = 0; i < t.length; i++) {
          var o = t[i].existing;
          if (
            !t[i].newOption &&
            o &&
            (null == o.id || null == n.id) &&
            !Si(n) &&
            !Si(o) &&
            _i("name", o, n)
          )
            return (t[i].newOption = n), void (e[r] = null);
        }
    });
  }
  function vi(t, e, n) {
    v(e, function (e) {
      if (e) {
        for (
          var r, i = 0;
          (r = t[i]) &&
          (r.newOption ||
            Si(r.existing) ||
            (r.existing && null != e.id && !_i("id", e, r.existing)));

        )
          i++;
        r
          ? ((r.newOption = e), (r.brandNew = n))
          : t.push({
              newOption: e,
              brandNew: n,
              existing: null,
              keyInfo: null,
            }),
          i++;
      }
    });
  }
  function yi(t, e) {
    v(e, function (e) {
      t.push({ newOption: e, brandNew: !0, existing: null, keyInfo: null });
    });
  }
  function mi(t) {
    var e = q();
    v(t, function (t) {
      var n = t.existing;
      n && e.set(n.id, t);
    }),
      v(t, function (t) {
        var n = t.newOption;
        W(
          !n || null == n.id || !e.get(n.id) || e.get(n.id) === t,
          "id duplicates: " + (n && n.id)
        ),
          n && null != n.id && e.set(n.id, t),
          !t.keyInfo && (t.keyInfo = {});
      }),
      v(t, function (t, n) {
        var r = t.existing,
          i = t.newOption,
          o = t.keyInfo;
        if (I(i)) {
          if (((o.name = null != i.name ? xi(i.name) : r ? r.name : Zy + n), r))
            o.id = xi(r.id);
          else if (null != i.id) o.id = xi(i.id);
          else {
            var a = 0;
            do o.id = "\x00" + o.name + "\x00" + a++;
            while (e.get(o.id));
          }
          e.set(o.id, t);
        }
      });
  }
  function _i(t, e, n) {
    var r = wi(e[t], null),
      i = wi(n[t], null);
    return null != r && null != i && r === i;
  }
  function xi(t) {
    return wi(t, "");
  }
  function wi(t, e) {
    return null == t ? e : C(t) ? t : D(t) || k(t) ? t + "" : e;
  }
  function bi(t) {
    var e = t.name;
    return !(!e || !e.indexOf(Zy));
  }
  function Si(t) {
    return t && null != t.id && 0 === xi(t.id).indexOf(Ky);
  }
  function Mi(t, e, n) {
    v(t, function (t) {
      var r = t.newOption;
      I(r) &&
        ((t.keyInfo.mainType = e),
        (t.keyInfo.subType = Ti(e, r, t.existing, n)));
    });
  }
  function Ti(t, e, n, r) {
    var i = e.type ? e.type : n ? n.subType : r.determineSubType(t, e);
    return i;
  }
  function Ci(t, e) {
    return null != e.dataIndexInside
      ? e.dataIndexInside
      : null != e.dataIndex
      ? M(e.dataIndex)
        ? y(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e);
          })
        : t.indexOfRawIndex(e.dataIndex)
      : null != e.name
      ? M(e.name)
        ? y(e.name, function (e) {
            return t.indexOfName(e);
          })
        : t.indexOfName(e.name)
      : void 0;
  }
  function ki() {
    var t = "__ec_inner_" + Qy++;
    return function (e) {
      return e[t] || (e[t] = {});
    };
  }
  function Di(t, e, n) {
    var r = Ii(e, n),
      i = r.mainTypeSpecified,
      o = r.queryOptionMap,
      a = r.others,
      s = a,
      l = n ? n.defaultMainType : null;
    return (
      !i && l && o.set(l, {}),
      o.each(function (e, r) {
        var i = Ai(t, r, e, {
          useDefault: l === r,
          enableAll: n && null != n.enableAll ? n.enableAll : !0,
          enableNone: n && null != n.enableNone ? n.enableNone : !0,
        });
        (s[r + "Models"] = i.models), (s[r + "Model"] = i.models[0]);
      }),
      s
    );
  }
  function Ii(t, e) {
    var n;
    if (C(t)) {
      var r = {};
      (r[t + "Index"] = 0), (n = r);
    } else n = t;
    var i = q(),
      o = {},
      a = !1;
    return (
      v(n, function (t, n) {
        if ("dataIndex" === n || "dataIndexInside" === n)
          return void (o[n] = t);
        var r = n.match(/^(\w+)(Index|Id|Name)$/) || [],
          s = r[1],
          l = (r[2] || "").toLowerCase();
        if (
          s &&
          l &&
          !(e && e.includeMainTypes && p(e.includeMainTypes, s) < 0)
        ) {
          a = a || !!s;
          var u = i.get(s) || i.set(s, {});
          u[l] = t;
        }
      }),
      { mainTypeSpecified: a, queryOptionMap: i, others: o }
    );
  }
  function Ai(t, e, n, r) {
    r = r || Jy;
    var i = n.index,
      o = n.id,
      a = n.name,
      s = { models: null, specified: null != i || null != o || null != a };
    if (!s.specified) {
      var l = void 0;
      return (s.models = r.useDefault && (l = t.getComponent(e)) ? [l] : []), s;
    }
    return "none" === i || i === !1
      ? (W(
          r.enableNone,
          '`"none"` or `false` is not a valid value on index option.'
        ),
        (s.models = []),
        s)
      : ("all" === i &&
          (W(r.enableAll, '`"all"` is not a valid value on index option.'),
          (i = o = a = null)),
        (s.models = t.queryComponents({
          mainType: e,
          index: i,
          id: o,
          name: a,
        })),
        s);
  }
  function Li(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : (t[e] = n);
  }
  function Pi(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e];
  }
  function Oi(t, e, n, r, i) {
    var o = null == e || "auto" === e;
    if (null == r) return r;
    if (D(r)) {
      var a = si(n || 0, r, i);
      return Vr(a, o ? Math.max(Wr(n || 0), Wr(r)) : e);
    }
    if (C(r)) return 1 > i ? n : r;
    for (
      var s = [], l = n, u = r, h = Math.max(l ? l.length : 0, u.length), c = 0;
      h > c;
      ++c
    ) {
      var p = t.getDimensionInfo(c);
      if (p && "ordinal" === p.type) s[c] = (1 > i && l ? l : u)[c];
      else {
        var f = l && l[c] ? l[c] : 0,
          d = u[c],
          a = si(f, d, i);
        s[c] = Vr(a, o ? Math.max(Wr(f), Wr(d)) : e);
      }
    }
    return s;
  }
  function Ri(t) {
    var e = { main: "", sub: "" };
    if (t) {
      var n = t.split(tm);
      (e.main = n[0] || ""), (e.sub = n[1] || "");
    }
    return e;
  }
  function Ei(t) {
    W(
      /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),
      'componentType "' + t + '" illegal'
    );
  }
  function Bi(t) {
    return !(!t || !t[nm]);
  }
  function Ni(t) {
    (t.$constructor = t),
      (t.extend = function (t) {
        var n,
          r = this;
        return (
          zi(r)
            ? (n = (function (t) {
                function n() {
                  return t.apply(this, arguments) || this;
                }
                return e(n, t), n;
              })(r))
            : ((n = function () {
                (t.$constructor || r).apply(this, arguments);
              }),
              f(n, this)),
          h(n.prototype, t),
          (n[nm] = !0),
          (n.extend = this.extend),
          (n.superCall = Hi),
          (n.superApply = Wi),
          (n.superClass = r),
          n
        );
      });
  }
  function zi(t) {
    return T(t) && /^class\s/.test(Function.prototype.toString.call(t));
  }
  function Fi(t, e) {
    t.extend = e.extend;
  }
  function Vi(t) {
    var e = ["__\x00is_clz", rm++].join("_");
    (t.prototype[e] = !0),
      (t.isInstance = function (t) {
        return !(!t || !t[e]);
      });
  }
  function Hi(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    return this.superClass.prototype[e].apply(t, n);
  }
  function Wi(t, e, n) {
    return this.superClass.prototype[e].apply(t, n);
  }
  function Gi(t) {
    function e(t) {
      var e = n[t.main];
      return (e && e[em]) || ((e = n[t.main] = {}), (e[em] = !0)), e;
    }
    var n = {};
    (t.registerClass = function (t) {
      var r = t.type || t.prototype.type;
      if (r) {
        Ei(r), (t.prototype.type = r);
        var i = Ri(r);
        if (i.sub) {
          if (i.sub !== em) {
            var o = e(i);
            o[i.sub] = t;
          }
        } else n[i.main] = t;
      }
      return t;
    }),
      (t.getClass = function (t, e, r) {
        var i = n[t];
        if ((i && i[em] && (i = e ? i[e] : null), r && !i))
          throw new Error(
            e
              ? "Component " +
                t +
                "." +
                (e || "") +
                " is used but not imported."
              : t + ".type should be specified."
          );
        return i;
      }),
      (t.getClassesByMainType = function (t) {
        var e = Ri(t),
          r = [],
          i = n[e.main];
        return (
          i && i[em]
            ? v(i, function (t, e) {
                e !== em && r.push(t);
              })
            : r.push(i),
          r
        );
      }),
      (t.hasClass = function (t) {
        var e = Ri(t);
        return !!n[e.main];
      }),
      (t.getAllClassMainTypes = function () {
        var t = [];
        return (
          v(n, function (e, n) {
            t.push(n);
          }),
          t
        );
      }),
      (t.hasSubTypes = function (t) {
        var e = Ri(t),
          r = n[e.main];
        return r && r[em];
      });
  }
  function Ui(t, e) {
    for (var n = 0; n < t.length; n++) t[n][1] || (t[n][1] = t[n][0]);
    return (
      (e = e || !1),
      function (n, r, i) {
        for (var o = {}, a = 0; a < t.length; a++) {
          var s = t[a][1];
          if (!((r && p(r, s) >= 0) || (i && p(i, s) < 0))) {
            var l = n.getShallow(s, e);
            null != l && (o[t[a][0]] = l);
          }
        }
        return o;
      }
    );
  }
  function Xi(t) {
    if ("string" == typeof t) {
      var e = sm.get(t);
      return e && e.image;
    }
    return t;
  }
  function qi(t, e, n, r, i) {
    if (t) {
      if ("string" == typeof t) {
        if ((e && e.__zrImageSrc === t) || !n) return e;
        var o = sm.get(t),
          a = { hostEl: n, cb: r, cbPayload: i };
        if (o) (e = o.image), !ji(e) && o.pending.push(a);
        else {
          var s = Sg.loadImage(t, Yi, Yi);
          (s.__zrImageSrc = t),
            sm.put(t, (s.__cachedImgObj = { image: s, pending: [a] }));
        }
        return e;
      }
      return t;
    }
    return e;
  }
  function Yi() {
    var t = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
        r = n.cb;
      r && r(this, n.cbPayload), n.hostEl.dirty();
    }
    t.pending.length = 0;
  }
  function ji(t) {
    return t && t.width && t.height;
  }
  function Zi(t, e, n, r, i) {
    if (!e) return "";
    var o = (t + "").split("\n");
    i = Ki(e, n, r, i);
    for (var a = 0, s = o.length; s > a; a++) o[a] = $i(o[a], i);
    return o.join("\n");
  }
  function Ki(t, e, n, r) {
    r = r || {};
    var i = h({}, r);
    (i.font = e), (n = z(n, "...")), (i.maxIterations = z(r.maxIterations, 2));
    var o = (i.minChar = z(r.minChar, 0));
    i.cnCharWidth = gr("国", e);
    var a = (i.ascCharWidth = gr("a", e));
    i.placeholder = z(r.placeholder, "");
    for (var s = (t = Math.max(0, t - 1)), l = 0; o > l && s >= a; l++) s -= a;
    var u = gr(n, e);
    return (
      u > s && ((n = ""), (u = 0)),
      (s = t - u),
      (i.ellipsis = n),
      (i.ellipsisWidth = u),
      (i.contentWidth = s),
      (i.containerWidth = t),
      i
    );
  }
  function $i(t, e) {
    var n = e.containerWidth,
      r = e.font,
      i = e.contentWidth;
    if (!n) return "";
    var o = gr(t, r);
    if (n >= o) return t;
    for (var a = 0; ; a++) {
      if (i >= o || a >= e.maxIterations) {
        t += e.ellipsis;
        break;
      }
      var s =
        0 === a
          ? Qi(t, i, e.ascCharWidth, e.cnCharWidth)
          : o > 0
          ? Math.floor((t.length * i) / o)
          : 0;
      (t = t.substr(0, s)), (o = gr(t, r));
    }
    return "" === t && (t = e.placeholder), t;
  }
  function Qi(t, e, n, r) {
    for (var i = 0, o = 0, a = t.length; a > o && e > i; o++) {
      var s = t.charCodeAt(o);
      i += s >= 0 && 127 >= s ? n : r;
    }
    return o;
  }
  function Ji(t, e) {
    null != t && (t += "");
    var n,
      r = e.overflow,
      i = e.padding,
      o = e.font,
      a = "truncate" === r,
      s = xr(o),
      l = z(e.lineHeight, s),
      u = !!e.backgroundColor,
      h = "truncate" === e.lineOverflow,
      c = e.width;
    n =
      null == c || ("break" !== r && "breakAll" !== r)
        ? t
          ? t.split("\n")
          : []
        : t
        ? io(t, e.font, c, "breakAll" === r, 0).lines
        : [];
    var p = n.length * l,
      f = z(e.height, p);
    if (p > f && h) {
      var d = Math.floor(f / l);
      n = n.slice(0, d);
    }
    if (t && a && null != c)
      for (
        var g = Ki(c, o, e.ellipsis, {
            minChar: e.truncateMinChar,
            placeholder: e.placeholder,
          }),
          v = 0;
        v < n.length;
        v++
      )
        n[v] = $i(n[v], g);
    for (var y = f, m = 0, v = 0; v < n.length; v++)
      m = Math.max(gr(n[v], o), m);
    null == c && (c = m);
    var _ = m;
    return (
      i && ((y += i[0] + i[2]), (_ += i[1] + i[3]), (c += i[1] + i[3])),
      u && (_ = c),
      {
        lines: n,
        height: f,
        outerWidth: _,
        outerHeight: y,
        lineHeight: l,
        calculatedLineHeight: s,
        contentWidth: m,
        contentHeight: p,
        width: c,
      }
    );
  }
  function to(t, e) {
    function n(t, e, n) {
      (t.width = e), (t.lineHeight = n), (p += n), (f = Math.max(f, e));
    }
    var r = new cm();
    if ((null != t && (t += ""), !t)) return r;
    for (
      var i,
        o = e.width,
        a = e.height,
        s = e.overflow,
        l =
          ("break" !== s && "breakAll" !== s) || null == o
            ? null
            : { width: o, accumWidth: 0, breakAll: "breakAll" === s },
        u = (lm.lastIndex = 0);
      null != (i = lm.exec(t));

    ) {
      var h = i.index;
      h > u && eo(r, t.substring(u, h), e, l),
        eo(r, i[2], e, l, i[1]),
        (u = lm.lastIndex);
    }
    u < t.length && eo(r, t.substring(u, t.length), e, l);
    var c = [],
      p = 0,
      f = 0,
      d = e.padding,
      g = "truncate" === s,
      v = "truncate" === e.lineOverflow;
    t: for (var y = 0; y < r.lines.length; y++) {
      for (var m = r.lines[y], _ = 0, x = 0, w = 0; w < m.tokens.length; w++) {
        var b = m.tokens[w],
          S = (b.styleName && e.rich[b.styleName]) || {},
          M = (b.textPadding = S.padding),
          T = M ? M[1] + M[3] : 0,
          C = (b.font = S.font || e.font);
        b.contentHeight = xr(C);
        var k = z(S.height, b.contentHeight);
        if (
          ((b.innerHeight = k),
          M && (k += M[0] + M[2]),
          (b.height = k),
          (b.lineHeight = F(S.lineHeight, e.lineHeight, k)),
          (b.align = (S && S.align) || e.align),
          (b.verticalAlign = (S && S.verticalAlign) || "middle"),
          v && null != a && p + b.lineHeight > a)
        ) {
          w > 0
            ? ((m.tokens = m.tokens.slice(0, w)),
              n(m, x, _),
              (r.lines = r.lines.slice(0, y + 1)))
            : (r.lines = r.lines.slice(0, y));
          break t;
        }
        var D = S.width,
          I = null == D || "auto" === D;
        if ("string" == typeof D && "%" === D.charAt(D.length - 1))
          (b.percentWidth = D), c.push(b), (b.contentWidth = gr(b.text, C));
        else {
          if (I) {
            var A = S.backgroundColor,
              L = A && A.image;
            L &&
              ((L = Xi(L)),
              ji(L) && (b.width = Math.max(b.width, (L.width * k) / L.height)));
          }
          var P = g && null != o ? o - x : null;
          null != P && P < b.width
            ? !I || T > P
              ? ((b.text = ""), (b.width = b.contentWidth = 0))
              : ((b.text = Zi(b.text, P - T, C, e.ellipsis, {
                  minChar: e.truncateMinChar,
                })),
                (b.width = b.contentWidth = gr(b.text, C)))
            : (b.contentWidth = gr(b.text, C));
        }
        (b.width += T), (x += b.width), S && (_ = Math.max(_, b.lineHeight));
      }
      n(m, x, _);
    }
    (r.outerWidth = r.width = z(o, f)),
      (r.outerHeight = r.height = z(a, p)),
      (r.contentHeight = p),
      (r.contentWidth = f),
      d && ((r.outerWidth += d[1] + d[3]), (r.outerHeight += d[0] + d[2]));
    for (var y = 0; y < c.length; y++) {
      var b = c[y],
        O = b.percentWidth;
      b.width = (parseInt(O, 10) / 100) * r.width;
    }
    return r;
  }
  function eo(t, e, n, r, i) {
    var o,
      a,
      s = "" === e,
      l = (i && n.rich[i]) || {},
      u = t.lines,
      h = l.font || n.font,
      c = !1;
    if (r) {
      var p = l.padding,
        f = p ? p[1] + p[3] : 0;
      if (null != l.width && "auto" !== l.width) {
        var d = wr(l.width, r.width) + f;
        u.length > 0 &&
          d + r.accumWidth > r.width &&
          ((o = e.split("\n")), (c = !0)),
          (r.accumWidth = d);
      } else {
        var g = io(e, h, r.width, r.breakAll, r.accumWidth);
        (r.accumWidth = g.accumWidth + f), (a = g.linesWidths), (o = g.lines);
      }
    } else o = e.split("\n");
    for (var v = 0; v < o.length; v++) {
      var y = o[v],
        m = new um();
      if (
        ((m.styleName = i),
        (m.text = y),
        (m.isLineHolder = !y && !s),
        (m.width = "number" == typeof l.width ? l.width : a ? a[v] : gr(y, h)),
        v || c)
      )
        u.push(new hm([m]));
      else {
        var _ = (u[u.length - 1] || (u[0] = new hm())).tokens,
          x = _.length;
        1 === x && _[0].isLineHolder ? (_[0] = m) : (y || !x || s) && _.push(m);
      }
    }
  }
  function no(t) {
    var e = t.charCodeAt(0);
    return e >= 33 && 383 >= e;
  }
  function ro(t) {
    return no(t) ? (pm[t] ? !0 : !1) : !0;
  }
  function io(t, e, n, r, i) {
    for (
      var o = [], a = [], s = "", l = "", u = 0, h = 0, c = 0;
      c < t.length;
      c++
    ) {
      var p = t.charAt(c);
      if ("\n" !== p) {
        var f = gr(p, e),
          d = r ? !1 : !ro(p);
        (o.length ? h + f > n : i + h + f > n)
          ? h
            ? (s || l) &&
              (d
                ? (s || ((s = l), (l = ""), (u = 0), (h = u)),
                  o.push(s),
                  a.push(h - u),
                  (l += p),
                  (u += f),
                  (s = ""),
                  (h = u))
                : (l && ((s += l), (l = ""), (u = 0)),
                  o.push(s),
                  a.push(h),
                  (s = p),
                  (h = f)))
            : d
            ? (o.push(l), a.push(u), (l = p), (u = f))
            : (o.push(p), a.push(f))
          : ((h += f),
            d
              ? ((l += p), (u += f))
              : (l && ((s += l), (l = ""), (u = 0)), (s += p)));
      } else
        l && ((s += l), (h += u)),
          o.push(s),
          a.push(h),
          (s = ""),
          (l = ""),
          (u = 0),
          (h = 0);
    }
    return (
      o.length || s || ((s = t), (l = ""), (u = 0)),
      l && (s += l),
      s && (o.push(s), a.push(h)),
      1 === o.length && (h += i),
      { accumWidth: h, lines: o, linesWidths: a }
    );
  }
  function oo(t, e, n) {
    return (
      _m.copy(t.getBoundingRect()),
      t.transform && _m.applyTransform(t.transform),
      (xm.width = e),
      (xm.height = n),
      !_m.intersect(xm)
    );
  }
  function ao(t, e, n, r, i, o) {
    (i[0] = wm(t, n)), (i[1] = wm(e, r)), (o[0] = bm(t, n)), (o[1] = bm(e, r));
  }
  function so(t, e, n, r, i, o, a, s, l, u) {
    var h = Je,
      c = Ke,
      p = h(t, n, i, a, Im);
    (l[0] = 1 / 0), (l[1] = 1 / 0), (u[0] = -1 / 0), (u[1] = -1 / 0);
    for (var f = 0; p > f; f++) {
      var d = c(t, n, i, a, Im[f]);
      (l[0] = wm(d, l[0])), (u[0] = bm(d, u[0]));
    }
    p = h(e, r, o, s, Am);
    for (var f = 0; p > f; f++) {
      var g = c(e, r, o, s, Am[f]);
      (l[1] = wm(g, l[1])), (u[1] = bm(g, u[1]));
    }
    (l[0] = wm(t, l[0])),
      (u[0] = bm(t, u[0])),
      (l[0] = wm(a, l[0])),
      (u[0] = bm(a, u[0])),
      (l[1] = wm(e, l[1])),
      (u[1] = bm(e, u[1])),
      (l[1] = wm(s, l[1])),
      (u[1] = bm(s, u[1]));
  }
  function lo(t, e, n, r, i, o, a, s) {
    var l = sn,
      u = rn,
      h = bm(wm(l(t, n, i), 1), 0),
      c = bm(wm(l(e, r, o), 1), 0),
      p = u(t, n, i, h),
      f = u(e, r, o, c);
    (a[0] = wm(t, i, p)),
      (a[1] = wm(e, o, f)),
      (s[0] = bm(t, i, p)),
      (s[1] = bm(e, o, f));
  }
  function uo(t, e, n, r, i, o, a, s, l) {
    var u = ye,
      h = me,
      c = Math.abs(i - o);
    if (1e-4 > c % Tm && c > 1e-4)
      return (
        (s[0] = t - n), (s[1] = e - r), (l[0] = t + n), void (l[1] = e + r)
      );
    if (
      ((Cm[0] = Mm(i) * n + t),
      (Cm[1] = Sm(i) * r + e),
      (km[0] = Mm(o) * n + t),
      (km[1] = Sm(o) * r + e),
      u(s, Cm, km),
      h(l, Cm, km),
      (i %= Tm),
      0 > i && (i += Tm),
      (o %= Tm),
      0 > o && (o += Tm),
      i > o && !a ? (o += Tm) : o > i && a && (i += Tm),
      a)
    ) {
      var p = o;
      (o = i), (i = p);
    }
    for (var f = 0; o > f; f += Math.PI / 2)
      f > i &&
        ((Dm[0] = Mm(f) * n + t),
        (Dm[1] = Sm(f) * r + e),
        u(s, Dm, s),
        h(l, Dm, l));
  }
  function ho(t) {
    var e = Math.round((t / Gm) * 1e8) / 1e8;
    return (e % 2) * Gm;
  }
  function co(t, e) {
    var n = ho(t[0]);
    0 > n && (n += Um);
    var r = n - t[0],
      i = t[1];
    (i += r),
      !e && i - n >= Um
        ? (i = n + Um)
        : e && n - i >= Um
        ? (i = n - Um)
        : !e && n > i
        ? (i = n + (Um - ho(n - i)))
        : e && i > n && (i = n - (Um - ho(i - n))),
      (t[0] = n),
      (t[1] = i);
  }
  function po(t, e, n, r, i, o, a) {
    if (0 === i) return !1;
    var s = i,
      l = 0,
      u = t;
    if (
      (a > e + s && a > r + s) ||
      (e - s > a && r - s > a) ||
      (o > t + s && o > n + s) ||
      (t - s > o && n - s > o)
    )
      return !1;
    if (t === n) return Math.abs(o - t) <= s / 2;
    (l = (e - r) / (t - n)), (u = (t * r - n * e) / (t - n));
    var h = l * o - a + u,
      c = (h * h) / (l * l + 1);
    return ((s / 2) * s) / 2 >= c;
  }
  function fo(t, e, n, r, i, o, a, s, l, u, h) {
    if (0 === l) return !1;
    var c = l;
    if (
      (h > e + c && h > r + c && h > o + c && h > s + c) ||
      (e - c > h && r - c > h && o - c > h && s - c > h) ||
      (u > t + c && u > n + c && u > i + c && u > a + c) ||
      (t - c > u && n - c > u && i - c > u && a - c > u)
    )
      return !1;
    var p = en(t, e, n, r, i, o, a, s, u, h, null);
    return c / 2 >= p;
  }
  function go(t, e, n, r, i, o, a, s, l) {
    if (0 === a) return !1;
    var u = a;
    if (
      (l > e + u && l > r + u && l > o + u) ||
      (e - u > l && r - u > l && o - u > l) ||
      (s > t + u && s > n + u && s > i + u) ||
      (t - u > s && n - u > s && i - u > s)
    )
      return !1;
    var h = un(t, e, n, r, i, o, s, l, null);
    return u / 2 >= h;
  }
  function vo(t) {
    return (t %= jm), 0 > t && (t += jm), t;
  }
  function yo(t, e, n, r, i, o, a, s, l) {
    if (0 === a) return !1;
    var u = a;
    (s -= t), (l -= e);
    var h = Math.sqrt(s * s + l * l);
    if (h - u > n || n > h + u) return !1;
    if (Math.abs(r - i) % Zm < 1e-4) return !0;
    if (o) {
      var c = r;
      (r = vo(i)), (i = vo(c));
    } else (r = vo(r)), (i = vo(i));
    r > i && (i += Zm);
    var p = Math.atan2(l, s);
    return (
      0 > p && (p += Zm), (p >= r && i >= p) || (p + Zm >= r && i >= p + Zm)
    );
  }
  function mo(t, e, n, r, i, o) {
    if ((o > e && o > r) || (e > o && r > o)) return 0;
    if (r === e) return 0;
    var a = (o - e) / (r - e),
      s = e > r ? 1 : -1;
    (1 === a || 0 === a) && (s = e > r ? 0.5 : -0.5);
    var l = a * (n - t) + t;
    return l === i ? 1 / 0 : l > i ? s : 0;
  }
  function _o(t, e) {
    return Math.abs(t - e) < Qm;
  }
  function xo() {
    var t = t_[0];
    (t_[0] = t_[1]), (t_[1] = t);
  }
  function wo(t, e, n, r, i, o, a, s, l, u) {
    if (
      (u > e && u > r && u > o && u > s) ||
      (e > u && r > u && o > u && s > u)
    )
      return 0;
    var h = Qe(e, r, o, s, u, Jm);
    if (0 === h) return 0;
    for (var c = 0, p = -1, f = void 0, d = void 0, g = 0; h > g; g++) {
      var v = Jm[g],
        y = 0 === v || 1 === v ? 0.5 : 1,
        m = Ke(t, n, i, a, v);
      l > m ||
        (0 > p &&
          ((p = Je(e, r, o, s, t_)),
          t_[1] < t_[0] && p > 1 && xo(),
          (f = Ke(e, r, o, s, t_[0])),
          p > 1 && (d = Ke(e, r, o, s, t_[1]))),
        (c +=
          2 === p
            ? v < t_[0]
              ? e > f
                ? y
                : -y
              : v < t_[1]
              ? f > d
                ? y
                : -y
              : d > s
              ? y
              : -y
            : v < t_[0]
            ? e > f
              ? y
              : -y
            : f > s
            ? y
            : -y));
    }
    return c;
  }
  function bo(t, e, n, r, i, o, a, s) {
    if ((s > e && s > r && s > o) || (e > s && r > s && o > s)) return 0;
    var l = an(e, r, o, s, Jm);
    if (0 === l) return 0;
    var u = sn(e, r, o);
    if (u >= 0 && 1 >= u) {
      for (var h = 0, c = rn(e, r, o, u), p = 0; l > p; p++) {
        var f = 0 === Jm[p] || 1 === Jm[p] ? 0.5 : 1,
          d = rn(t, n, i, Jm[p]);
        a > d || (h += Jm[p] < u ? (e > c ? f : -f) : c > o ? f : -f);
      }
      return h;
    }
    var f = 0 === Jm[0] || 1 === Jm[0] ? 0.5 : 1,
      d = rn(t, n, i, Jm[0]);
    return a > d ? 0 : e > o ? f : -f;
  }
  function So(t, e, n, r, i, o, a, s) {
    if (((s -= e), s > n || -n > s)) return 0;
    var l = Math.sqrt(n * n - s * s);
    (Jm[0] = -l), (Jm[1] = l);
    var u = Math.abs(r - i);
    if (1e-4 > u) return 0;
    if (u >= $m - 1e-4) {
      (r = 0), (i = $m);
      var h = o ? 1 : -1;
      return a >= Jm[0] + t && a <= Jm[1] + t ? h : 0;
    }
    if (r > i) {
      var c = r;
      (r = i), (i = c);
    }
    0 > r && ((r += $m), (i += $m));
    for (var p = 0, f = 0; 2 > f; f++) {
      var d = Jm[f];
      if (d + t > a) {
        var g = Math.atan2(s, d),
          h = o ? 1 : -1;
        0 > g && (g = $m + g),
          ((g >= r && i >= g) || (g + $m >= r && i >= g + $m)) &&
            (g > Math.PI / 2 && g < 1.5 * Math.PI && (h = -h), (p += h));
      }
    }
    return p;
  }
  function Mo(t, e, n, r, i) {
    for (
      var o,
        a,
        s = t.data,
        l = t.len(),
        u = 0,
        h = 0,
        c = 0,
        p = 0,
        f = 0,
        d = 0;
      l > d;

    ) {
      var g = s[d++],
        v = 1 === d;
      switch (
        (g === Km.M && d > 1 && (n || (u += mo(h, c, p, f, r, i))),
        v && ((h = s[d]), (c = s[d + 1]), (p = h), (f = c)),
        g)
      ) {
        case Km.M:
          (p = s[d++]), (f = s[d++]), (h = p), (c = f);
          break;
        case Km.L:
          if (n) {
            if (po(h, c, s[d], s[d + 1], e, r, i)) return !0;
          } else u += mo(h, c, s[d], s[d + 1], r, i) || 0;
          (h = s[d++]), (c = s[d++]);
          break;
        case Km.C:
          if (n) {
            if (
              fo(h, c, s[d++], s[d++], s[d++], s[d++], s[d], s[d + 1], e, r, i)
            )
              return !0;
          } else
            u +=
              wo(h, c, s[d++], s[d++], s[d++], s[d++], s[d], s[d + 1], r, i) ||
              0;
          (h = s[d++]), (c = s[d++]);
          break;
        case Km.Q:
          if (n) {
            if (go(h, c, s[d++], s[d++], s[d], s[d + 1], e, r, i)) return !0;
          } else u += bo(h, c, s[d++], s[d++], s[d], s[d + 1], r, i) || 0;
          (h = s[d++]), (c = s[d++]);
          break;
        case Km.A:
          var y = s[d++],
            m = s[d++],
            _ = s[d++],
            x = s[d++],
            w = s[d++],
            b = s[d++];
          d += 1;
          var S = !!(1 - s[d++]);
          (o = Math.cos(w) * _ + y),
            (a = Math.sin(w) * x + m),
            v ? ((p = o), (f = a)) : (u += mo(h, c, o, a, r, i));
          var M = ((r - y) * x) / _ + y;
          if (n) {
            if (yo(y, m, x, w, w + b, S, e, M, i)) return !0;
          } else u += So(y, m, x, w, w + b, S, M, i);
          (h = Math.cos(w + b) * _ + y), (c = Math.sin(w + b) * x + m);
          break;
        case Km.R:
          (p = h = s[d++]), (f = c = s[d++]);
          var T = s[d++],
            C = s[d++];
          if (((o = p + T), (a = f + C), n)) {
            if (
              po(p, f, o, f, e, r, i) ||
              po(o, f, o, a, e, r, i) ||
              po(o, a, p, a, e, r, i) ||
              po(p, a, p, f, e, r, i)
            )
              return !0;
          } else (u += mo(o, f, o, a, r, i)), (u += mo(p, a, p, f, r, i));
          break;
        case Km.Z:
          if (n) {
            if (po(h, c, p, f, e, r, i)) return !0;
          } else u += mo(h, c, p, f, r, i);
          (h = p), (c = f);
      }
    }
    return n || _o(c, f) || (u += mo(h, c, p, f, r, i) || 0), 0 !== u;
  }
  function To(t, e, n) {
    return Mo(t, 0, !1, e, n);
  }
  function Co(t, e, n, r) {
    return Mo(t, e, !0, n, r);
  }
  function ko(t) {
    return !!(t && "string" != typeof t && t.width && t.height);
  }
  function Do(t, e) {
    var n,
      r,
      i,
      o,
      a = e.x,
      s = e.y,
      l = e.width,
      u = e.height,
      h = e.r;
    0 > l && ((a += l), (l = -l)),
      0 > u && ((s += u), (u = -u)),
      "number" == typeof h
        ? (n = r = i = o = h)
        : h instanceof Array
        ? 1 === h.length
          ? (n = r = i = o = h[0])
          : 2 === h.length
          ? ((n = i = h[0]), (r = o = h[1]))
          : 3 === h.length
          ? ((n = h[0]), (r = o = h[1]), (i = h[2]))
          : ((n = h[0]), (r = h[1]), (i = h[2]), (o = h[3]))
        : (n = r = i = o = 0);
    var c;
    n + r > l && ((c = n + r), (n *= l / c), (r *= l / c)),
      i + o > l && ((c = i + o), (i *= l / c), (o *= l / c)),
      r + i > u && ((c = r + i), (r *= u / c), (i *= u / c)),
      n + o > u && ((c = n + o), (n *= u / c), (o *= u / c)),
      t.moveTo(a + n, s),
      t.lineTo(a + l - r, s),
      0 !== r && t.arc(a + l - r, s + r, r, -Math.PI / 2, 0),
      t.lineTo(a + l, s + u - i),
      0 !== i && t.arc(a + l - i, s + u - i, i, 0, Math.PI / 2),
      t.lineTo(a + o, s + u),
      0 !== o && t.arc(a + o, s + u - o, o, Math.PI / 2, Math.PI),
      t.lineTo(a, s + n),
      0 !== n && t.arc(a + n, s + n, n, Math.PI, 1.5 * Math.PI);
  }
  function Io(t, e, n) {
    if (e) {
      var r = e.x1,
        i = e.x2,
        o = e.y1,
        a = e.y2;
      (t.x1 = r), (t.x2 = i), (t.y1 = o), (t.y2 = a);
      var s = n && n.lineWidth;
      return s
        ? (h_(2 * r) === h_(2 * i) && (t.x1 = t.x2 = Lo(r, s, !0)),
          h_(2 * o) === h_(2 * a) && (t.y1 = t.y2 = Lo(o, s, !0)),
          t)
        : t;
    }
  }
  function Ao(t, e, n) {
    if (e) {
      var r = e.x,
        i = e.y,
        o = e.width,
        a = e.height;
      (t.x = r), (t.y = i), (t.width = o), (t.height = a);
      var s = n && n.lineWidth;
      return s
        ? ((t.x = Lo(r, s, !0)),
          (t.y = Lo(i, s, !0)),
          (t.width = Math.max(Lo(r + o, s, !1) - t.x, 0 === o ? 0 : 1)),
          (t.height = Math.max(Lo(i + a, s, !1) - t.y, 0 === a ? 0 : 1)),
          t)
        : t;
    }
  }
  function Lo(t, e, n) {
    if (!e) return t;
    var r = h_(2 * t);
    return (r + h_(e)) % 2 === 0 ? r / 2 : (r + (n ? 1 : -1)) / 2;
  }
  function Po(t) {
    return "string" != typeof t ||
      (-1 === t.indexOf("px") &&
        -1 === t.indexOf("rem") &&
        -1 === t.indexOf("em"))
      ? isNaN(+t)
        ? vg + "px"
        : t + "px"
      : t;
  }
  function Oo(t, e) {
    for (var n = 0; n < x_.length; n++) {
      var r = x_[n],
        i = e[r];
      null != i && (t[r] = i);
    }
  }
  function Ro(t) {
    return null != t.fontSize || t.fontFamily || t.fontWeight;
  }
  function Eo(t) {
    return Bo(t), v(t.rich, Bo), t;
  }
  function Bo(t) {
    if (t) {
      t.font = y_.makeFont(t);
      var e = t.align;
      "middle" === e && (e = "center"),
        (t.align = null == e || m_[e] ? e : "left");
      var n = t.verticalAlign;
      "center" === n && (n = "middle"),
        (t.verticalAlign = null == n || __[n] ? n : "top");
      var r = t.padding;
      r && (t.padding = H(t.padding));
    }
  }
  function No(t, e) {
    return null == t || 0 >= e || "transparent" === t || "none" === t
      ? null
      : t.image || t.colorStops
      ? "#000"
      : t;
  }
  function zo(t) {
    return null == t || "none" === t
      ? null
      : t.image || t.colorStops
      ? "#000"
      : t;
  }
  function Fo(t, e, n) {
    return "right" === e
      ? t - n[1]
      : "center" === e
      ? t + n[3] / 2 - n[1] / 2
      : t + n[3];
  }
  function Vo(t) {
    var e = t.text;
    return null != e && (e += ""), e;
  }
  function Ho(t) {
    return !!(
      t.backgroundColor ||
      t.lineHeight ||
      (t.borderWidth && t.borderColor)
    );
  }
  function Wo(t) {
    return null != t && "none" !== t;
  }
  function Go(t) {
    if (C(t)) {
      var e = F_.get(t);
      return e || ((e = Tn(t, -0.1)), F_.put(t, e)), e;
    }
    if (O(t)) {
      var n = h({}, t);
      return (
        (n.colorStops = y(t.colorStops, function (t) {
          return { offset: t.offset, color: Tn(t.color, -0.1) };
        })),
        n
      );
    }
    return t;
  }
  function Uo(t, e, n) {
    t.onHoverStateChange &&
      (t.hoverState || 0) !== n &&
      t.onHoverStateChange(e),
      (t.hoverState = n);
  }
  function Xo(t) {
    Uo(t, "emphasis", I_);
  }
  function qo(t) {
    t.hoverState === I_ && Uo(t, "normal", k_);
  }
  function Yo(t) {
    Uo(t, "blur", D_);
  }
  function jo(t) {
    t.hoverState === D_ && Uo(t, "normal", k_);
  }
  function Zo(t) {
    t.selected = !0;
  }
  function Ko(t) {
    t.selected = !1;
  }
  function $o(t, e, n) {
    e(t, n);
  }
  function Qo(t, e, n) {
    $o(t, e, n),
      t.isGroup &&
        t.traverse(function (t) {
          $o(t, e, n);
        });
  }
  function Jo(t, e, n, r) {
    for (var i = t.style, o = {}, a = 0; a < e.length; a++) {
      var s = e[a],
        l = i[s];
      o[s] = null == l ? r && r[s] : l;
    }
    for (var a = 0; a < t.animators.length; a++) {
      var u = t.animators[a];
      u.__fromStateTransition &&
        u.__fromStateTransition.indexOf(n) < 0 &&
        "style" === u.targetName &&
        u.saveTo(o, e);
    }
    return o;
  }
  function ta(t, e, n, r) {
    var i = n && p(n, "select") >= 0,
      o = !1;
    if (t instanceof i_) {
      var a = T_(t),
        s = i ? a.selectFill || a.normalFill : a.normalFill,
        l = i ? a.selectStroke || a.normalStroke : a.normalStroke;
      if (Wo(s) || Wo(l)) {
        r = r || {};
        var u = r.style || {};
        "inherit" === u.fill
          ? ((o = !0), (r = h({}, r)), (u = h({}, u)), (u.fill = s))
          : !Wo(u.fill) && Wo(s)
          ? ((o = !0), (r = h({}, r)), (u = h({}, u)), (u.fill = Go(s)))
          : !Wo(u.stroke) &&
            Wo(l) &&
            (o || ((r = h({}, r)), (u = h({}, u))), (u.stroke = Go(l))),
          (r.style = u);
      }
    }
    if (r && null == r.z2) {
      o || (r = h({}, r));
      var c = t.z2EmphasisLift;
      r.z2 = t.z2 + (null != c ? c : P_);
    }
    return r;
  }
  function ea(t, e, n) {
    if (n && null == n.z2) {
      n = h({}, n);
      var r = t.z2SelectLift;
      n.z2 = t.z2 + (null != r ? r : O_);
    }
    return n;
  }
  function na(t, e, n) {
    var r = p(t.currentStates, e) >= 0,
      i = t.style.opacity,
      o = r ? null : Jo(t, ["opacity"], e, { opacity: 1 });
    n = n || {};
    var a = n.style || {};
    return (
      null == a.opacity &&
        ((n = h({}, n)),
        (a = h({ opacity: r ? i : 0.1 * o.opacity }, a)),
        (n.style = a)),
      n
    );
  }
  function ra(t, e) {
    var n = this.states[t];
    if (this.style) {
      if ("emphasis" === t) return ta(this, t, e, n);
      if ("blur" === t) return na(this, t, n);
      if ("select" === t) return ea(this, t, n);
    }
    return n;
  }
  function ia(t) {
    t.stateProxy = ra;
    var e = t.getTextContent(),
      n = t.getTextGuideLine();
    e && (e.stateProxy = ra), n && (n.stateProxy = ra);
  }
  function oa(t, e) {
    !fa(t, e) && !t.__highByOuter && Qo(t, Xo);
  }
  function aa(t, e) {
    !fa(t, e) && !t.__highByOuter && Qo(t, qo);
  }
  function sa(t, e) {
    (t.__highByOuter |= 1 << (e || 0)), Qo(t, Xo);
  }
  function la(t, e) {
    !(t.__highByOuter &= ~(1 << (e || 0))) && Qo(t, qo);
  }
  function ua(t) {
    Qo(t, Yo);
  }
  function ha(t) {
    Qo(t, jo);
  }
  function ca(t) {
    Qo(t, Zo);
  }
  function pa(t) {
    Qo(t, Ko);
  }
  function fa(t, e) {
    return t.__highDownSilentOnTouch && e.zrByTouch;
  }
  function da(t) {
    var e = t.getModel();
    e.eachComponent(function (e, n) {
      var r = C_(n);
      if (r.isBlured) {
        var i =
          "series" === e
            ? t.getViewOfSeriesModel(n)
            : t.getViewOfComponentModel(n);
        i.group.traverse(function (t) {
          jo(t);
        });
      }
      r.isBlured = !1;
    });
  }
  function ga(t, e, n, r) {
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = t.getItemGraphicEl(e[n]);
        r && ha(r);
      }
    }
    var o = r.getModel();
    if (((n = n || "coordinateSystem"), null != t && e && "none" !== e)) {
      var a = o.getSeriesByIndex(t),
        s = a.coordinateSystem;
      s && s.master && (s = s.master);
      var l = [];
      o.eachSeries(function (t) {
        var o = a === t,
          u = t.coordinateSystem;
        u && u.master && (u = u.master);
        var h = u && s ? u === s : o;
        if (
          !(
            ("series" === n && !o) ||
            ("coordinateSystem" === n && !h) ||
            ("series" === e && o)
          )
        ) {
          var c = r.getViewOfSeriesModel(t);
          if (
            (c.group.traverse(function (t) {
              Yo(t);
            }),
            g(e))
          )
            i(t.getData(), e);
          else if (I(e))
            for (var p = w(e), f = 0; f < p.length; f++)
              i(t.getData(p[f]), e[p[f]]);
          l.push(t), (C_(t).isBlured = !0);
        }
      }),
        o.eachComponent(function (t, e) {
          if ("series" !== t) {
            var n = r.getViewOfComponentModel(e);
            n && n.blurSeries && n.blurSeries(l, o);
          }
        });
    }
  }
  function va(t, e, n) {
    if (null != t && null != e) {
      var r = n.getModel().getComponent(t, e);
      if (r) {
        C_(r).isBlured = !0;
        var i = n.getViewOfComponentModel(r);
        i &&
          i.focusBlurEnabled &&
          i.group.traverse(function (t) {
            Yo(t);
          });
      }
    }
  }
  function ya(t, e, n) {
    var r = t.seriesIndex,
      i = t.getData(e.dataType);
    if (i) {
      var o = Ci(i, e);
      o = (M(o) ? o[0] : o) || 0;
      var a = i.getItemGraphicEl(o);
      if (!a)
        for (var s = i.count(), l = 0; !a && s > l; )
          a = i.getItemGraphicEl(l++);
      if (a) {
        var u = w_(a);
        ga(r, u.focus, u.blurScope, n);
      } else {
        var h = t.get(["emphasis", "focus"]),
          c = t.get(["emphasis", "blurScope"]);
        null != h && ga(r, h, c, n);
      }
    }
  }
  function ma(t, e, n, r) {
    var i = { focusSelf: !1, dispatchers: null };
    if (null == t || "series" === t || null == e || null == n) return i;
    var o = r.getModel().getComponent(t, e);
    if (!o) return i;
    var a = r.getViewOfComponentModel(o);
    if (!a || !a.findHighDownDispatchers) return i;
    for (var s, l = a.findHighDownDispatchers(n), u = 0; u < l.length; u++)
      if ("self" === w_(l[u]).focus) {
        s = !0;
        break;
      }
    return { focusSelf: s, dispatchers: l };
  }
  function _a(t, e, n) {
    var r = w_(t),
      i = ma(r.componentMainType, r.componentIndex, r.componentHighDownName, n),
      o = i.dispatchers,
      a = i.focusSelf;
    o
      ? (a && va(r.componentMainType, r.componentIndex, n),
        v(o, function (t) {
          return oa(t, e);
        }))
      : (ga(r.seriesIndex, r.focus, r.blurScope, n),
        "self" === r.focus && va(r.componentMainType, r.componentIndex, n),
        oa(t, e));
  }
  function xa(t, e, n) {
    da(n);
    var r = w_(t),
      i = ma(
        r.componentMainType,
        r.componentIndex,
        r.componentHighDownName,
        n
      ).dispatchers;
    i
      ? v(i, function (t) {
          return aa(t, e);
        })
      : aa(t, e);
  }
  function wa(t, e) {
    if (Pa(e)) {
      var n = e.dataType,
        r = t.getData(n),
        i = Ci(r, e);
      M(i) || (i = [i]),
        t[
          e.type === z_ ? "toggleSelect" : e.type === B_ ? "select" : "unselect"
        ](i, n);
    }
  }
  function ba(t) {
    var e = t.getAllData();
    v(e, function (e) {
      var n = e.data,
        r = e.type;
      n.eachItemGraphicEl(function (e, n) {
        t.isSelected(n, r) ? ca(e) : pa(e);
      });
    });
  }
  function Sa(t) {
    var e = [];
    return (
      t.eachSeries(function (t) {
        var n = t.getAllData();
        v(n, function (n) {
          var r = (n.data, n.type),
            i = t.getSelectedDataIndices();
          if (i.length > 0) {
            var o = { dataIndex: i, seriesIndex: t.seriesIndex };
            null != r && (o.dataType = r), e.push(o);
          }
        });
      }),
      e
    );
  }
  function Ma(t, e, n) {
    Ia(t, !0), Qo(t, ia), ka(t, e, n);
  }
  function Ta(t) {
    Ia(t, !1);
  }
  function Ca(t, e, n, r) {
    r ? Ta(t) : Ma(t, e, n);
  }
  function ka(t, e, n) {
    var r = w_(t);
    null != e
      ? ((r.focus = e), (r.blurScope = n))
      : r.focus && (r.focus = null);
  }
  function Da(t, e, n, r) {
    n = n || "itemStyle";
    for (var i = 0; i < V_.length; i++) {
      var o = V_[i],
        a = e.getModel([o, n]),
        s = t.ensureState(o);
      s.style = r ? r(a) : a[H_[n]]();
    }
  }
  function Ia(t, e) {
    var n = e === !1,
      r = t;
    t.highDownSilentOnTouch &&
      (r.__highDownSilentOnTouch = t.highDownSilentOnTouch),
      (!n || r.__highDownDispatcher) &&
        ((r.__highByOuter = r.__highByOuter || 0),
        (r.__highDownDispatcher = !n));
  }
  function Aa(t) {
    return !(!t || !t.__highDownDispatcher);
  }
  function La(t) {
    var e = M_[t];
    return null == e && 32 >= S_ && (e = M_[t] = S_++), e;
  }
  function Pa(t) {
    var e = t.type;
    return e === B_ || e === N_ || e === z_;
  }
  function Oa(t) {
    var e = t.type;
    return e === R_ || e === E_;
  }
  function Ra(t) {
    var e = T_(t);
    (e.normalFill = t.style.fill), (e.normalStroke = t.style.stroke);
    var n = t.states.select || {};
    (e.selectFill = (n.style && n.style.fill) || null),
      (e.selectStroke = (n.style && n.style.stroke) || null);
  }
  function Ea(t, e) {
    if (e) {
      var n,
        r,
        i,
        o,
        a,
        s,
        l = t.data,
        u = t.len(),
        h = W_.M,
        c = W_.C,
        p = W_.L,
        f = W_.R,
        d = W_.A,
        g = W_.Q;
      for (i = 0, o = 0; u > i; ) {
        switch (((n = l[i++]), (o = i), (r = 0), n)) {
          case h:
            r = 1;
            break;
          case p:
            r = 1;
            break;
          case c:
            r = 3;
            break;
          case g:
            r = 2;
            break;
          case d:
            var v = e[4],
              y = e[5],
              m = U_(e[0] * e[0] + e[1] * e[1]),
              _ = U_(e[2] * e[2] + e[3] * e[3]),
              x = X_(-e[1] / _, e[0] / m);
            (l[i] *= m),
              (l[i++] += v),
              (l[i] *= _),
              (l[i++] += y),
              (l[i++] *= m),
              (l[i++] *= _),
              (l[i++] += x),
              (l[i++] += x),
              (i += 2),
              (o = i);
            break;
          case f:
            (s[0] = l[i++]),
              (s[1] = l[i++]),
              ve(s, s, e),
              (l[o++] = s[0]),
              (l[o++] = s[1]),
              (s[0] += l[i++]),
              (s[1] += l[i++]),
              ve(s, s, e),
              (l[o++] = s[0]),
              (l[o++] = s[1]);
        }
        for (a = 0; r > a; a++) {
          var w = G_[a];
          (w[0] = l[i++]),
            (w[1] = l[i++]),
            ve(w, w, e),
            (l[o++] = w[0]),
            (l[o++] = w[1]);
        }
      }
      t.increaseVersion();
    }
  }
  function Ba(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  }
  function Na(t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (Ba(t) * Ba(e));
  }
  function za(t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Na(t, e));
  }
  function Fa(t, e, n, r, i, o, a, s, l, u, h) {
    var c = l * (Z_ / 180),
      p = (j_(c) * (t - n)) / 2 + (Y_(c) * (e - r)) / 2,
      f = (-1 * Y_(c) * (t - n)) / 2 + (j_(c) * (e - r)) / 2,
      d = (p * p) / (a * a) + (f * f) / (s * s);
    d > 1 && ((a *= q_(d)), (s *= q_(d)));
    var g =
        (i === o ? -1 : 1) *
          q_(
            (a * a * s * s - a * a * f * f - s * s * p * p) /
              (a * a * f * f + s * s * p * p)
          ) || 0,
      v = (g * a * f) / s,
      y = (g * -s * p) / a,
      m = (t + n) / 2 + j_(c) * v - Y_(c) * y,
      _ = (e + r) / 2 + Y_(c) * v + j_(c) * y,
      x = za([1, 0], [(p - v) / a, (f - y) / s]),
      w = [(p - v) / a, (f - y) / s],
      b = [(-1 * p - v) / a, (-1 * f - y) / s],
      S = za(w, b);
    if ((Na(w, b) <= -1 && (S = Z_), Na(w, b) >= 1 && (S = 0), 0 > S)) {
      var M = Math.round((S / Z_) * 1e6) / 1e6;
      S = 2 * Z_ + (M % 2) * Z_;
    }
    h.addData(u, m, _, a, s, x, S, c, o);
  }
  function Va(t) {
    var e = new Ym();
    if (!t) return e;
    var n,
      r = 0,
      i = 0,
      o = r,
      a = i,
      s = Ym.CMD,
      l = t.match(K_);
    if (!l) return e;
    for (var u = 0; u < l.length; u++) {
      for (
        var h = l[u],
          c = h.charAt(0),
          p = void 0,
          f = h.match($_) || [],
          d = f.length,
          g = 0;
        d > g;
        g++
      )
        f[g] = parseFloat(f[g]);
      for (var v = 0; d > v; ) {
        var y = void 0,
          m = void 0,
          _ = void 0,
          x = void 0,
          w = void 0,
          b = void 0,
          S = void 0,
          M = r,
          T = i,
          C = void 0,
          k = void 0;
        switch (c) {
          case "l":
            (r += f[v++]), (i += f[v++]), (p = s.L), e.addData(p, r, i);
            break;
          case "L":
            (r = f[v++]), (i = f[v++]), (p = s.L), e.addData(p, r, i);
            break;
          case "m":
            (r += f[v++]),
              (i += f[v++]),
              (p = s.M),
              e.addData(p, r, i),
              (o = r),
              (a = i),
              (c = "l");
            break;
          case "M":
            (r = f[v++]),
              (i = f[v++]),
              (p = s.M),
              e.addData(p, r, i),
              (o = r),
              (a = i),
              (c = "L");
            break;
          case "h":
            (r += f[v++]), (p = s.L), e.addData(p, r, i);
            break;
          case "H":
            (r = f[v++]), (p = s.L), e.addData(p, r, i);
            break;
          case "v":
            (i += f[v++]), (p = s.L), e.addData(p, r, i);
            break;
          case "V":
            (i = f[v++]), (p = s.L), e.addData(p, r, i);
            break;
          case "C":
            (p = s.C),
              e.addData(p, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]),
              (r = f[v - 2]),
              (i = f[v - 1]);
            break;
          case "c":
            (p = s.C),
              e.addData(
                p,
                f[v++] + r,
                f[v++] + i,
                f[v++] + r,
                f[v++] + i,
                f[v++] + r,
                f[v++] + i
              ),
              (r += f[v - 2]),
              (i += f[v - 1]);
            break;
          case "S":
            (y = r),
              (m = i),
              (C = e.len()),
              (k = e.data),
              n === s.C && ((y += r - k[C - 4]), (m += i - k[C - 3])),
              (p = s.C),
              (M = f[v++]),
              (T = f[v++]),
              (r = f[v++]),
              (i = f[v++]),
              e.addData(p, y, m, M, T, r, i);
            break;
          case "s":
            (y = r),
              (m = i),
              (C = e.len()),
              (k = e.data),
              n === s.C && ((y += r - k[C - 4]), (m += i - k[C - 3])),
              (p = s.C),
              (M = r + f[v++]),
              (T = i + f[v++]),
              (r += f[v++]),
              (i += f[v++]),
              e.addData(p, y, m, M, T, r, i);
            break;
          case "Q":
            (M = f[v++]),
              (T = f[v++]),
              (r = f[v++]),
              (i = f[v++]),
              (p = s.Q),
              e.addData(p, M, T, r, i);
            break;
          case "q":
            (M = f[v++] + r),
              (T = f[v++] + i),
              (r += f[v++]),
              (i += f[v++]),
              (p = s.Q),
              e.addData(p, M, T, r, i);
            break;
          case "T":
            (y = r),
              (m = i),
              (C = e.len()),
              (k = e.data),
              n === s.Q && ((y += r - k[C - 4]), (m += i - k[C - 3])),
              (r = f[v++]),
              (i = f[v++]),
              (p = s.Q),
              e.addData(p, y, m, r, i);
            break;
          case "t":
            (y = r),
              (m = i),
              (C = e.len()),
              (k = e.data),
              n === s.Q && ((y += r - k[C - 4]), (m += i - k[C - 3])),
              (r += f[v++]),
              (i += f[v++]),
              (p = s.Q),
              e.addData(p, y, m, r, i);
            break;
          case "A":
            (_ = f[v++]),
              (x = f[v++]),
              (w = f[v++]),
              (b = f[v++]),
              (S = f[v++]),
              (M = r),
              (T = i),
              (r = f[v++]),
              (i = f[v++]),
              (p = s.A),
              Fa(M, T, r, i, b, S, _, x, w, p, e);
            break;
          case "a":
            (_ = f[v++]),
              (x = f[v++]),
              (w = f[v++]),
              (b = f[v++]),
              (S = f[v++]),
              (M = r),
              (T = i),
              (r += f[v++]),
              (i += f[v++]),
              (p = s.A),
              Fa(M, T, r, i, b, S, _, x, w, p, e);
        }
      }
      ("z" === c || "Z" === c) && ((p = s.Z), e.addData(p), (r = o), (i = a)),
        (n = p);
    }
    return e.toStatic(), e;
  }
  function Ha(t) {
    return null != t.setData;
  }
  function Wa(t, e) {
    var n = Va(t),
      r = h({}, e);
    return (
      (r.buildPath = function (t) {
        if (Ha(t)) {
          t.setData(n.data);
          var e = t.getContext();
          e && t.rebuildPath(e, 1);
        } else {
          var e = t;
          n.rebuildPath(e, 1);
        }
      }),
      (r.applyTransform = function (t) {
        Ea(n, t), this.dirtyShape();
      }),
      r
    );
  }
  function Ga(t, e) {
    return new Q_(Wa(t, e));
  }
  function Ua(t, n) {
    var r = Wa(t, n),
      i = (function (t) {
        function n(e) {
          var n = t.call(this, e) || this;
          return (
            (n.applyTransform = r.applyTransform),
            (n.buildPath = r.buildPath),
            n
          );
        }
        return e(n, t), n;
      })(Q_);
    return i;
  }
  function Xa(t, e) {
    for (var n = [], r = t.length, i = 0; r > i; i++) {
      var o = t[i];
      n.push(o.getUpdatedPathProxy(!0));
    }
    var a = new i_(e);
    return (
      a.createPathProxy(),
      (a.buildPath = function (t) {
        if (Ha(t)) {
          t.appendPath(n);
          var e = t.getContext();
          e && t.rebuildPath(e, 1);
        }
      }),
      a
    );
  }
  function qa(t, e, n, r, i, o, a, s) {
    var l = n - t,
      u = r - e,
      h = a - i,
      c = s - o,
      p = c * l - h * u;
    return fx > p * p
      ? void 0
      : ((p = (h * (e - o) - c * (t - i)) / p), [t + p * l, e + p * u]);
  }
  function Ya(t, e, n, r, i, o, a) {
    var s = t - n,
      l = e - r,
      u = (a ? o : -o) / hx(s * s + l * l),
      h = u * l,
      c = -u * s,
      p = t + h,
      f = e + c,
      d = n + h,
      g = r + c,
      v = (p + d) / 2,
      y = (f + g) / 2,
      m = d - p,
      _ = g - f,
      x = m * m + _ * _,
      w = i - o,
      b = p * g - d * f,
      S = (0 > _ ? -1 : 1) * hx(cx(0, w * w * x - b * b)),
      M = (b * _ - m * S) / x,
      T = (-b * m - _ * S) / x,
      C = (b * _ + m * S) / x,
      k = (-b * m + _ * S) / x,
      D = M - v,
      I = T - y,
      A = C - v,
      L = k - y;
    return (
      D * D + I * I > A * A + L * L && ((M = C), (T = k)),
      { cx: M, cy: T, x0: -h, y0: -c, x1: M * (i / w - 1), y1: T * (i / w - 1) }
    );
  }
  function ja(t) {
    var e;
    if (M(t)) {
      var n = t.length;
      if (!n) return t;
      e =
        1 === n
          ? [t[0], t[0], 0, 0]
          : 2 === n
          ? [t[0], t[0], t[1], t[1]]
          : 3 === n
          ? t.concat(t[2])
          : t;
    } else e = [t, t, t, t];
    return e;
  }
  function Za(t, e) {
    var n,
      r = cx(e.r, 0),
      i = cx(e.r0 || 0, 0),
      o = r > 0,
      a = i > 0;
    if (o || a) {
      if ((o || ((r = i), (i = 0)), i > r)) {
        var s = r;
        (r = i), (i = s);
      }
      var l = e.startAngle,
        u = e.endAngle;
      if (!isNaN(l) && !isNaN(u)) {
        var h = e.cx,
          c = e.cy,
          p = !!e.clockwise,
          f = ux(u - l),
          d = f > ix && f % ix;
        if ((d > fx && (f = d), r > fx))
          if (f > ix - fx)
            t.moveTo(h + r * ax(l), c + r * ox(l)),
              t.arc(h, c, r, l, u, !p),
              i > fx &&
                (t.moveTo(h + i * ax(u), c + i * ox(u)),
                t.arc(h, c, i, u, l, p));
          else {
            var g = void 0,
              v = void 0,
              y = void 0,
              m = void 0,
              _ = void 0,
              x = void 0,
              w = void 0,
              b = void 0,
              S = void 0,
              M = void 0,
              T = void 0,
              C = void 0,
              k = void 0,
              D = void 0,
              I = void 0,
              A = void 0,
              L = r * ax(l),
              P = r * ox(l),
              O = i * ax(u),
              R = i * ox(u),
              E = f > fx;
            if (E) {
              var B = e.cornerRadius;
              B &&
                ((n = ja(B)), (g = n[0]), (v = n[1]), (y = n[2]), (m = n[3]));
              var N = ux(r - i) / 2;
              if (
                ((_ = px(N, y)),
                (x = px(N, m)),
                (w = px(N, g)),
                (b = px(N, v)),
                (T = S = cx(_, x)),
                (C = M = cx(w, b)),
                (S > fx || M > fx) &&
                  ((k = r * ax(u)),
                  (D = r * ox(u)),
                  (I = i * ax(l)),
                  (A = i * ox(l)),
                  rx > f))
              ) {
                var z = qa(L, P, I, A, k, D, O, R);
                if (z) {
                  var F = L - z[0],
                    V = P - z[1],
                    H = k - z[0],
                    W = D - z[1],
                    G =
                      1 /
                      ox(
                        sx(
                          (F * H + V * W) /
                            (hx(F * F + V * V) * hx(H * H + W * W))
                        ) / 2
                      ),
                    U = hx(z[0] * z[0] + z[1] * z[1]);
                  (T = px(S, (r - U) / (G + 1))),
                    (C = px(M, (i - U) / (G - 1)));
                }
              }
            }
            if (E)
              if (T > fx) {
                var X = px(y, T),
                  q = px(m, T),
                  Y = Ya(I, A, L, P, r, X, p),
                  j = Ya(k, D, O, R, r, q, p);
                t.moveTo(h + Y.cx + Y.x0, c + Y.cy + Y.y0),
                  S > T && X === q
                    ? t.arc(
                        h + Y.cx,
                        c + Y.cy,
                        T,
                        lx(Y.y0, Y.x0),
                        lx(j.y0, j.x0),
                        !p
                      )
                    : (X > 0 &&
                        t.arc(
                          h + Y.cx,
                          c + Y.cy,
                          X,
                          lx(Y.y0, Y.x0),
                          lx(Y.y1, Y.x1),
                          !p
                        ),
                      t.arc(
                        h,
                        c,
                        r,
                        lx(Y.cy + Y.y1, Y.cx + Y.x1),
                        lx(j.cy + j.y1, j.cx + j.x1),
                        !p
                      ),
                      q > 0 &&
                        t.arc(
                          h + j.cx,
                          c + j.cy,
                          q,
                          lx(j.y1, j.x1),
                          lx(j.y0, j.x0),
                          !p
                        ));
              } else t.moveTo(h + L, c + P), t.arc(h, c, r, l, u, !p);
            else t.moveTo(h + L, c + P);
            if (i > fx && E)
              if (C > fx) {
                var X = px(g, C),
                  q = px(v, C),
                  Y = Ya(O, R, k, D, i, -q, p),
                  j = Ya(L, P, I, A, i, -X, p);
                t.lineTo(h + Y.cx + Y.x0, c + Y.cy + Y.y0),
                  M > C && X === q
                    ? t.arc(
                        h + Y.cx,
                        c + Y.cy,
                        C,
                        lx(Y.y0, Y.x0),
                        lx(j.y0, j.x0),
                        !p
                      )
                    : (q > 0 &&
                        t.arc(
                          h + Y.cx,
                          c + Y.cy,
                          q,
                          lx(Y.y0, Y.x0),
                          lx(Y.y1, Y.x1),
                          !p
                        ),
                      t.arc(
                        h,
                        c,
                        i,
                        lx(Y.cy + Y.y1, Y.cx + Y.x1),
                        lx(j.cy + j.y1, j.cx + j.x1),
                        p
                      ),
                      X > 0 &&
                        t.arc(
                          h + j.cx,
                          c + j.cy,
                          X,
                          lx(j.y1, j.x1),
                          lx(j.y0, j.x0),
                          !p
                        ));
              } else t.lineTo(h + O, c + R), t.arc(h, c, i, u, l, p);
            else t.lineTo(h + O, c + R);
          }
        else t.moveTo(h, c);
        t.closePath();
      }
    }
  }
  function Ka(t, e, n, r) {
    var i,
      o,
      a,
      s,
      l = [],
      u = [],
      h = [],
      c = [];
    if (r) {
      (a = [1 / 0, 1 / 0]), (s = [-1 / 0, -1 / 0]);
      for (var p = 0, f = t.length; f > p; p++) ye(a, a, t[p]), me(s, s, t[p]);
      ye(a, a, r[0]), me(s, s, r[1]);
    }
    for (var p = 0, f = t.length; f > p; p++) {
      var d = t[p];
      if (n) (i = t[p ? p - 1 : f - 1]), (o = t[(p + 1) % f]);
      else {
        if (0 === p || p === f - 1) {
          l.push(te(t[p]));
          continue;
        }
        (i = t[p - 1]), (o = t[p + 1]);
      }
      ie(u, o, i), he(u, u, e);
      var g = pe(d, i),
        v = pe(d, o),
        y = g + v;
      0 !== y && ((g /= y), (v /= y)), he(h, u, -g), he(c, u, v);
      var m = ne([], d, h),
        _ = ne([], d, c);
      r && (me(m, m, a), ye(m, m, s), me(_, _, a), ye(_, _, s)),
        l.push(m),
        l.push(_);
    }
    return n && l.push(l.shift()), l;
  }
  function $a(t, e, n) {
    var r = e.smooth,
      i = e.points;
    if (i && i.length >= 2) {
      if (r) {
        var o = Ka(i, r, n, e.smoothConstraint);
        t.moveTo(i[0][0], i[0][1]);
        for (var a = i.length, s = 0; (n ? a : a - 1) > s; s++) {
          var l = o[2 * s],
            u = o[2 * s + 1],
            h = i[(s + 1) % a];
          t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1]);
        }
      } else {
        t.moveTo(i[0][0], i[0][1]);
        for (var s = 1, c = i.length; c > s; s++) t.lineTo(i[s][0], i[s][1]);
      }
      n && t.closePath();
    }
  }
  function Qa(t, e, n) {
    var r = t.cpx2,
      i = t.cpy2;
    return null != r || null != i
      ? [
          (n ? $e : Ke)(t.x1, t.cpx1, t.cpx2, t.x2, e),
          (n ? $e : Ke)(t.y1, t.cpy1, t.cpy2, t.y2, e),
        ]
      : [
          (n ? on : rn)(t.x1, t.cpx1, t.x2, e),
          (n ? on : rn)(t.y1, t.cpy1, t.y2, e),
        ];
  }
  function Ja(t, e, n, r, i) {
    var o;
    if (e && e.ecModel) {
      var a = e.ecModel.getUpdatePayload();
      o = a && a.animation;
    }
    var s = e && e.isAnimationEnabled(),
      l = "update" === t;
    if (s) {
      var u = void 0,
        h = void 0,
        c = void 0;
      r
        ? ((u = z(r.duration, 200)), (h = z(r.easing, "cubicOut")), (c = 0))
        : ((u = e.getShallow(
            l ? "animationDurationUpdate" : "animationDuration"
          )),
          (h = e.getShallow(l ? "animationEasingUpdate" : "animationEasing")),
          (c = e.getShallow(l ? "animationDelayUpdate" : "animationDelay"))),
        o &&
          (null != o.duration && (u = o.duration),
          null != o.easing && (h = o.easing),
          null != o.delay && (c = o.delay)),
        T(c) && (c = c(n, i)),
        T(u) && (u = u(n));
      var p = { duration: u || 0, delay: c, easing: h };
      return p;
    }
    return null;
  }
  function ts(t, e, n, r, i, o, a) {
    var s,
      l = !1;
    T(i)
      ? ((a = o), (o = i), (i = null))
      : I(i) &&
        ((o = i.cb),
        (a = i.during),
        (l = i.isFrom),
        (s = i.removeOpt),
        (i = i.dataIndex));
    var u = "leave" === t;
    u || e.stopAnimation("leave");
    var h = Ja(
      t,
      r,
      i,
      u ? s || {} : null,
      r && r.getAnimationDelayParams ? r.getAnimationDelayParams(e, i) : null
    );
    if (h && h.duration > 0) {
      var c = h.duration,
        p = h.delay,
        f = h.easing,
        d = {
          duration: c,
          delay: p || 0,
          easing: f,
          done: o,
          force: !!o || !!a,
          setToFinal: !u,
          scope: t,
          during: a,
        };
      l ? e.animateFrom(n, d) : e.animateTo(n, d);
    } else e.stopAnimation(), !l && e.attr(n), a && a(1), o && o();
  }
  function es(t, e, n, r, i, o) {
    ts("update", t, e, n, r, i, o);
  }
  function ns(t, e, n, r, i, o) {
    ts("enter", t, e, n, r, i, o);
  }
  function rs(t) {
    if (!t.__zr) return !0;
    for (var e = 0; e < t.animators.length; e++) {
      var n = t.animators[e];
      if ("leave" === n.scope) return !0;
    }
    return !1;
  }
  function is(t, e, n, r, i, o) {
    rs(t) || ts("leave", t, e, n, r, i, o);
  }
  function os(t, e, n, r) {
    t.removeTextContent(),
      t.removeTextGuideLine(),
      is(t, { style: { opacity: 0 } }, e, n, r);
  }
  function as(t, e, n) {
    function r() {
      t.parent && t.parent.remove(t);
    }
    t.isGroup
      ? t.traverse(function (t) {
          t.isGroup || os(t, e, n, r);
        })
      : os(t, e, n, r);
  }
  function ss(t) {
    Wx(t).oldStyle = t.style;
  }
  function ls(t) {
    return i_.extend(t);
  }
  function us(t, e) {
    return qx(t, e);
  }
  function hs(t, e) {
    Xx[t] = e;
  }
  function cs(t) {
    return Xx.hasOwnProperty(t) ? Xx[t] : void 0;
  }
  function ps(t, e, n, r) {
    var i = Ga(t, e);
    return (
      n && ("center" === r && (n = ds(n, i.getBoundingRect())), gs(i, n)), i
    );
  }
  function fs(t, e, n) {
    var r = new u_({
      style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height },
      onload: function (t) {
        if ("center" === n) {
          var i = { width: t.width, height: t.height };
          r.setStyle(ds(e, i));
        }
      },
    });
    return r;
  }
  function ds(t, e) {
    var n,
      r = e.width / e.height,
      i = t.height * r;
    i <= t.width ? (n = t.height) : ((i = t.width), (n = i / r));
    var o = t.x + t.width / 2,
      a = t.y + t.height / 2;
    return { x: o - i / 2, y: a - n / 2, width: i, height: n };
  }
  function gs(t, e) {
    if (t.applyTransform) {
      var n = t.getBoundingRect(),
        r = n.calculateTransform(e);
      t.applyTransform(r);
    }
  }
  function vs(t, e) {
    for (var n = or([]); t && t !== e; )
      sr(n, t.getLocalTransform(), n), (t = t.parent);
    return n;
  }
  function ys(t) {
    return !t.isGroup;
  }
  function ms(t) {
    return null != t.shape;
  }
  function _s(t, e, n) {
    function r(t) {
      var e = {};
      return (
        t.traverse(function (t) {
          ys(t) && t.anid && (e[t.anid] = t);
        }),
        e
      );
    }
    function i(t) {
      var e = { x: t.x, y: t.y, rotation: t.rotation };
      return ms(t) && (e.shape = h({}, t.shape)), e;
    }
    if (t && e) {
      var o = r(t);
      e.traverse(function (t) {
        if (ys(t) && t.anid) {
          var e = o[t.anid];
          if (e) {
            var r = i(t);
            t.attr(i(e)), es(t, r, n, w_(t).dataIndex);
          }
        }
      });
    }
  }
  function xs(t, e) {
    return y(t, function (t) {
      var n = t[0];
      (n = Gx(n, e.x)), (n = Ux(n, e.x + e.width));
      var r = t[1];
      return (r = Gx(r, e.y)), (r = Ux(r, e.y + e.height)), [n, r];
    });
  }
  function ws(t, e) {
    var n = Gx(t.x, e.x),
      r = Ux(t.x + t.width, e.x + e.width),
      i = Gx(t.y, e.y),
      o = Ux(t.y + t.height, e.y + e.height);
    return r >= n && o >= i
      ? { x: n, y: i, width: r - n, height: o - i }
      : void 0;
  }
  function bs(t, e, n) {
    var r = h({ rectHover: !0 }, e),
      i = (r.style = { strokeNoScale: !0 });
    return (
      (n = n || { x: -1, y: -1, width: 2, height: 2 }),
      t
        ? 0 === t.indexOf("image://")
          ? ((i.image = t.slice(8)), c(i, n), new u_(r))
          : ps(t.replace("path://", ""), r, n, "center")
        : void 0
    );
  }
  function Ss(t) {
    var e = t.itemTooltipOption,
      n = t.componentModel,
      r = t.itemName,
      i = C(e) ? { formatter: e } : e,
      o = n.mainType,
      a = n.componentIndex,
      s = { componentType: o, name: r, $vars: ["name"] };
    s[o + "Index"] = a;
    var l = t.formatterParamsExtra;
    l &&
      v(w(l), function (t) {
        K(s, t) || ((s[t] = l[t]), s.$vars.push(t));
      });
    var u = w_(t.el);
    (u.componentMainType = o),
      (u.componentIndex = a),
      (u.tooltipConfig = {
        name: r,
        option: c({ content: r, formatterParams: s }, i),
      });
  }
  function Ms(t, e) {
    var n;
    t.isGroup && (n = e(t)), n || t.traverse(e);
  }
  function Ts(t, e) {
    if (t)
      if (M(t)) for (var n = 0; n < t.length; n++) Ms(t[n], e);
      else Ms(t, e);
  }
  function Cs(t, e) {
    for (var n = 0; n < A_.length; n++) {
      var r = A_[n],
        i = e[r],
        o = t.ensureState(r);
      (o.style = o.style || {}), (o.style.text = i);
    }
    var a = t.currentStates.slice();
    t.clearStates(!0), t.setStyle({ text: e.normal }), t.useStates(a, !0);
  }
  function ks(t, e, n) {
    var r,
      i = t.labelFetcher,
      o = t.labelDataIndex,
      a = t.labelDimIndex,
      s = e.normal;
    i &&
      (r = i.getFormattedLabel(
        o,
        "normal",
        null,
        a,
        s && s.get("formatter"),
        null != n ? { interpolatedValue: n } : null
      )),
      null == r &&
        (r = T(t.defaultText) ? t.defaultText(o, t, n) : t.defaultText);
    for (var l = { normal: r }, u = 0; u < A_.length; u++) {
      var h = A_[u],
        c = e[h];
      l[h] = z(
        i ? i.getFormattedLabel(o, h, null, a, c && c.get("formatter")) : null,
        r
      );
    }
    return l;
  }
  function Ds(t, e, n, r) {
    n = n || jx;
    for (var i = t instanceof y_, o = !1, a = 0; a < L_.length; a++) {
      var s = e[L_[a]];
      if (s && s.getShallow("show")) {
        o = !0;
        break;
      }
    }
    var l = i ? t : t.getTextContent();
    if (o) {
      i ||
        (l || ((l = new y_()), t.setTextContent(l)),
        t.stateProxy && (l.stateProxy = t.stateProxy));
      var u = ks(n, e),
        h = e.normal,
        c = !!h.getShallow("show"),
        p = As(h, r && r.normal, n, !1, !i);
      (p.text = u.normal), i || t.setTextConfig(Ls(h, n, !1));
      for (var a = 0; a < A_.length; a++) {
        var f = A_[a],
          s = e[f];
        if (s) {
          var d = l.ensureState(f),
            g = !!z(s.getShallow("show"), c);
          if (
            (g !== c && (d.ignore = !g),
            (d.style = As(s, r && r[f], n, !0, !i)),
            (d.style.text = u[f]),
            !i)
          ) {
            var v = t.ensureState(f);
            v.textConfig = Ls(s, n, !0);
          }
        }
      }
      (l.silent = !!h.getShallow("silent")),
        null != l.style.x && (p.x = l.style.x),
        null != l.style.y && (p.y = l.style.y),
        (l.ignore = !c),
        l.useStyle(p),
        l.dirty(),
        n.enableTextSetter &&
          (Qx(l).setLabelText = function (t) {
            var r = ks(n, e, t);
            Cs(l, r);
          });
    } else l && (l.ignore = !0);
    t.dirty();
  }
  function Is(t, e) {
    e = e || "label";
    for (var n = { normal: t.getModel(e) }, r = 0; r < A_.length; r++) {
      var i = A_[r];
      n[i] = t.getModel([i, e]);
    }
    return n;
  }
  function As(t, e, n, r, i) {
    var o = {};
    return Ps(o, t, n, r, i), e && h(o, e), o;
  }
  function Ls(t, e, n) {
    e = e || {};
    var r,
      i = {},
      o = t.getShallow("rotate"),
      a = z(t.getShallow("distance"), n ? null : 5),
      s = t.getShallow("offset");
    return (
      (r = t.getShallow("position") || (n ? null : "inside")),
      "outside" === r && (r = e.defaultOutsidePosition || "top"),
      null != r && (i.position = r),
      null != s && (i.offset = s),
      null != o && ((o *= Math.PI / 180), (i.rotation = o)),
      null != a && (i.distance = a),
      (i.outsideFill =
        "inherit" === t.get("color") ? e.inheritColor || null : "auto"),
      i
    );
  }
  function Ps(t, e, n, r, i) {
    n = n || jx;
    var o,
      a = e.ecModel,
      s = a && a.option.textStyle,
      l = Os(e);
    if (l) {
      o = {};
      for (var u in l)
        if (l.hasOwnProperty(u)) {
          var h = e.getModel(["rich", u]);
          Rs((o[u] = {}), h, s, n, r, i, !1, !0);
        }
    }
    o && (t.rich = o);
    var c = e.get("overflow");
    c && (t.overflow = c);
    var p = e.get("minMargin");
    null != p && (t.margin = p), Rs(t, e, s, n, r, i, !0, !1);
  }
  function Os(t) {
    for (var e; t && t !== t.ecModel; ) {
      var n = (t.option || jx).rich;
      if (n) {
        e = e || {};
        for (var r = w(n), i = 0; i < r.length; i++) {
          var o = r[i];
          e[o] = 1;
        }
      }
      t = t.parentModel;
    }
    return e;
  }
  function Rs(t, e, n, r, i, o, a, s) {
    n = (!i && n) || jx;
    var l = r && r.inheritColor,
      u = e.getShallow("color"),
      h = e.getShallow("textBorderColor"),
      c = z(e.getShallow("opacity"), n.opacity);
    ("inherit" === u || "auto" === u) && (u = l ? l : null),
      ("inherit" === h || "auto" === h) && (h = l ? l : null),
      o || ((u = u || n.color), (h = h || n.textBorderColor)),
      null != u && (t.fill = u),
      null != h && (t.stroke = h);
    var p = z(e.getShallow("textBorderWidth"), n.textBorderWidth);
    null != p && (t.lineWidth = p);
    var f = z(e.getShallow("textBorderType"), n.textBorderType);
    null != f && (t.lineDash = f);
    var d = z(e.getShallow("textBorderDashOffset"), n.textBorderDashOffset);
    null != d && (t.lineDashOffset = d),
      i || null != c || s || (c = r && r.defaultOpacity),
      null != c && (t.opacity = c),
      i || o || (null == t.fill && r.inheritColor && (t.fill = r.inheritColor));
    for (var g = 0; g < Zx.length; g++) {
      var v = Zx[g],
        y = z(e.getShallow(v), n[v]);
      null != y && (t[v] = y);
    }
    for (var g = 0; g < Kx.length; g++) {
      var v = Kx[g],
        y = e.getShallow(v);
      null != y && (t[v] = y);
    }
    if (null == t.verticalAlign) {
      var m = e.getShallow("baseline");
      null != m && (t.verticalAlign = m);
    }
    if (!a || !r.disableBox) {
      for (var g = 0; g < $x.length; g++) {
        var v = $x[g],
          y = e.getShallow(v);
        null != y && (t[v] = y);
      }
      var _ = e.getShallow("borderType");
      null != _ && (t.borderDash = _),
        ("auto" !== t.backgroundColor && "inherit" !== t.backgroundColor) ||
          !l ||
          (t.backgroundColor = l),
        ("auto" !== t.borderColor && "inherit" !== t.borderColor) ||
          !l ||
          (t.borderColor = l);
    }
  }
  function Es(t, e) {
    var n = e && e.getModel("textStyle");
    return G(
      [
        t.fontStyle || (n && n.getShallow("fontStyle")) || "",
        t.fontWeight || (n && n.getShallow("fontWeight")) || "",
        (t.fontSize || (n && n.getShallow("fontSize")) || 12) + "px",
        t.fontFamily || (n && n.getShallow("fontFamily")) || "sans-serif",
      ].join(" ")
    );
  }
  function Bs(t, e, n, r) {
    if (t) {
      var i = Qx(t);
      (i.prevValue = i.value), (i.value = n);
      var o = e.normal;
      (i.valueAnimation = o.get("valueAnimation")),
        i.valueAnimation &&
          ((i.precision = o.get("precision")),
          (i.defaultInterpolatedText = r),
          (i.statesModels = e));
    }
  }
  function Ns(t, e, n, r, i) {
    function o(r) {
      var o = Oi(n, a.precision, l, u, r);
      a.interpolatedValue = 1 === r ? null : o;
      var h = ks(
        { labelDataIndex: e, labelFetcher: i, defaultText: s ? s(o) : o + "" },
        a.statesModels,
        o
      );
      Cs(t, h);
    }
    var a = Qx(t);
    if (a.valueAnimation && a.prevValue !== a.value) {
      var s = a.defaultInterpolatedText,
        l = z(a.interpolatedValue, a.prevValue),
        u = a.value;
      (t.percent = 0),
        (null == a.prevValue ? ns : es)(t, { percent: 1 }, r, e, null, o);
    }
  }
  function zs(t) {
    return [t || "", hw++].join("_");
  }
  function Fs(t) {
    var e = {};
    (t.registerSubTypeDefaulter = function (t, n) {
      var r = Ri(t);
      e[r.main] = n;
    }),
      (t.determineSubType = function (n, r) {
        var i = r.type;
        if (!i) {
          var o = Ri(n).main;
          t.hasSubTypes(n) && e[o] && (i = e[o](r));
        }
        return i;
      });
  }
  function Vs(t, e) {
    function n(t) {
      var n = {},
        o = [];
      return (
        v(t, function (a) {
          var s = r(n, a),
            l = (s.originalDeps = e(a)),
            u = i(l, t);
          (s.entryCount = u.length),
            0 === s.entryCount && o.push(a),
            v(u, function (t) {
              p(s.predecessor, t) < 0 && s.predecessor.push(t);
              var e = r(n, t);
              p(e.successor, t) < 0 && e.successor.push(a);
            });
        }),
        { graph: n, noEntryList: o }
      );
    }
    function r(t, e) {
      return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];
    }
    function i(t, e) {
      var n = [];
      return (
        v(t, function (t) {
          p(e, t) >= 0 && n.push(t);
        }),
        n
      );
    }
    t.topologicalTravel = function (t, e, r, i) {
      function o(t) {
        l[t].entryCount--, 0 === l[t].entryCount && u.push(t);
      }
      function a(t) {
        (h[t] = !0), o(t);
      }
      if (t.length) {
        var s = n(e),
          l = s.graph,
          u = s.noEntryList,
          h = {};
        for (
          v(t, function (t) {
            h[t] = !0;
          });
          u.length;

        ) {
          var c = u.pop(),
            p = l[c],
            f = !!h[c];
          f && (r.call(i, c, p.originalDeps.slice()), delete h[c]),
            v(p.successor, f ? a : o);
        }
        v(h, function () {
          var t = "";
          throw new Error(t);
        });
      }
    };
  }
  function Hs(t, e) {
    return l(l({}, t, !0), e, !0);
  }
  function Ws(t, e) {
    (t = t.toUpperCase()), (yw[t] = new uw(e)), (vw[t] = e);
  }
  function Gs(t) {
    if (C(t)) {
      var e = vw[t.toUpperCase()] || {};
      return t === fw || t === dw ? s(e) : l(s(e), s(vw[gw]), !1);
    }
    return l(s(t), s(vw[gw]), !1);
  }
  function Us(t) {
    return yw[t];
  }
  function Xs() {
    return yw[gw];
  }
  function qs(t, e) {
    return (t += ""), "0000".substr(0, e - t.length) + t;
  }
  function Ys(t) {
    switch (t) {
      case "half-year":
      case "quarter":
        return "month";
      case "week":
      case "half-week":
        return "day";
      case "half-day":
      case "quarter-day":
        return "hour";
      default:
        return t;
    }
  }
  function js(t) {
    return t === Ys(t);
  }
  function Zs(t) {
    switch (t) {
      case "year":
      case "month":
        return "day";
      case "millisecond":
        return "millisecond";
      default:
        return "second";
    }
  }
  function Ks(t, e, n, r) {
    var i = Zr(t),
      o = i[tl(n)](),
      a = i[el(n)]() + 1,
      s = Math.floor((a - 1) / 4) + 1,
      l = i[nl(n)](),
      u = i["get" + (n ? "UTC" : "") + "Day"](),
      h = i[rl(n)](),
      c = ((h - 1) % 12) + 1,
      p = i[il(n)](),
      f = i[ol(n)](),
      d = i[al(n)](),
      g = r instanceof uw ? r : Us(r || mw) || Xs(),
      v = g.getModel("time"),
      y = v.get("month"),
      m = v.get("monthAbbr"),
      _ = v.get("dayOfWeek"),
      x = v.get("dayOfWeekAbbr");
    return (e || "")
      .replace(/{yyyy}/g, o + "")
      .replace(/{yy}/g, (o % 100) + "")
      .replace(/{Q}/g, s + "")
      .replace(/{MMMM}/g, y[a - 1])
      .replace(/{MMM}/g, m[a - 1])
      .replace(/{MM}/g, qs(a, 2))
      .replace(/{M}/g, a + "")
      .replace(/{dd}/g, qs(l, 2))
      .replace(/{d}/g, l + "")
      .replace(/{eeee}/g, _[u])
      .replace(/{ee}/g, x[u])
      .replace(/{e}/g, u + "")
      .replace(/{HH}/g, qs(h, 2))
      .replace(/{H}/g, h + "")
      .replace(/{hh}/g, qs(c + "", 2))
      .replace(/{h}/g, c + "")
      .replace(/{mm}/g, qs(p, 2))
      .replace(/{m}/g, p + "")
      .replace(/{ss}/g, qs(f, 2))
      .replace(/{s}/g, f + "")
      .replace(/{SSS}/g, qs(d, 3))
      .replace(/{S}/g, d + "");
  }
  function $s(t, e, n, r, i) {
    var o = null;
    if (C(n)) o = n;
    else if (T(n)) o = n(t.value, e, { level: t.level });
    else {
      var a = h({}, Mw);
      if (t.level > 0)
        for (var s = 0; s < kw.length; ++s)
          a[kw[s]] = "{primary|" + a[kw[s]] + "}";
      var l = n ? (n.inherit === !1 ? n : c(n, a)) : a,
        u = Qs(t.value, i);
      if (l[u]) o = l[u];
      else if (l.inherit) {
        for (var p = Dw.indexOf(u), s = p - 1; s >= 0; --s)
          if (l[u]) {
            o = l[u];
            break;
          }
        o = o || a.none;
      }
      if (M(o)) {
        var f =
          null == t.level ? 0 : t.level >= 0 ? t.level : o.length + t.level;
        (f = Math.min(f, o.length - 1)), (o = o[f]);
      }
    }
    return Ks(new Date(t.value), o, i, r);
  }
  function Qs(t, e) {
    var n = Zr(t),
      r = n[el(e)]() + 1,
      i = n[nl(e)](),
      o = n[rl(e)](),
      a = n[il(e)](),
      s = n[ol(e)](),
      l = n[al(e)](),
      u = 0 === l,
      h = u && 0 === s,
      c = h && 0 === a,
      p = c && 0 === o,
      f = p && 1 === i,
      d = f && 1 === r;
    return d
      ? "year"
      : f
      ? "month"
      : p
      ? "day"
      : c
      ? "hour"
      : h
      ? "minute"
      : u
      ? "second"
      : "millisecond";
  }
  function Js(t, e, n) {
    var r = D(t) ? Zr(t) : t;
    switch ((e = e || Qs(t, n))) {
      case "year":
        return r[tl(n)]();
      case "half-year":
        return r[el(n)]() >= 6 ? 1 : 0;
      case "quarter":
        return Math.floor((r[el(n)]() + 1) / 4);
      case "month":
        return r[el(n)]();
      case "day":
        return r[nl(n)]();
      case "half-day":
        return r[rl(n)]() / 24;
      case "hour":
        return r[rl(n)]();
      case "minute":
        return r[il(n)]();
      case "second":
        return r[ol(n)]();
      case "millisecond":
        return r[al(n)]();
    }
  }
  function tl(t) {
    return t ? "getUTCFullYear" : "getFullYear";
  }
  function el(t) {
    return t ? "getUTCMonth" : "getMonth";
  }
  function nl(t) {
    return t ? "getUTCDate" : "getDate";
  }
  function rl(t) {
    return t ? "getUTCHours" : "getHours";
  }
  function il(t) {
    return t ? "getUTCMinutes" : "getMinutes";
  }
  function ol(t) {
    return t ? "getUTCSeconds" : "getSeconds";
  }
  function al(t) {
    return t ? "getUTCMilliseconds" : "getMilliseconds";
  }
  function sl(t) {
    return t ? "setUTCFullYear" : "setFullYear";
  }
  function ll(t) {
    return t ? "setUTCMonth" : "setMonth";
  }
  function ul(t) {
    return t ? "setUTCDate" : "setDate";
  }
  function hl(t) {
    return t ? "setUTCHours" : "setHours";
  }
  function cl(t) {
    return t ? "setUTCMinutes" : "setMinutes";
  }
  function pl(t) {
    return t ? "setUTCSeconds" : "setSeconds";
  }
  function fl(t) {
    return t ? "setUTCMilliseconds" : "setMilliseconds";
  }
  function dl(t, e, n, r, i, o, a, s) {
    var l = new y_({
      style: {
        text: t,
        font: e,
        align: n,
        verticalAlign: r,
        padding: i,
        rich: o,
        overflow: a ? "truncate" : null,
        lineHeight: s,
      },
    });
    return l.getBoundingRect();
  }
  function gl(t) {
    if (!ni(t)) return C(t) ? t : "-";
    var e = (t + "").split(".");
    return (
      e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") +
      (e.length > 1 ? "." + e[1] : "")
    );
  }
  function vl(t, e) {
    return (
      (t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
        return e.toUpperCase();
      })),
      e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)),
      t
    );
  }
  function yl(t) {
    return null == t
      ? ""
      : (t + "").replace(Aw, function (t, e) {
          return Lw[e];
        });
  }
  function ml(t, e, n) {
    M(e) || (e = [e]);
    var r = e.length;
    if (!r) return "";
    for (var i = e[0].$vars || [], o = 0; o < i.length; o++) {
      var a = Pw[o];
      t = t.replace(Ow(a), Ow(a, 0));
    }
    for (var s = 0; r > s; s++)
      for (var l = 0; l < i.length; l++) {
        var u = e[s][i[l]];
        t = t.replace(Ow(Pw[l], s), n ? yl(u) : u);
      }
    return t;
  }
  function _l(t, e) {
    var n = C(t) ? { color: t, extraCssText: e } : t || {},
      r = n.color,
      i = n.type;
    e = n.extraCssText;
    var o = n.renderMode || "html";
    if (!r) return "";
    if ("html" === o)
      return "subItem" === i
        ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' +
            yl(r) +
            ";" +
            (e || "") +
            '"></span>'
        : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' +
            yl(r) +
            ";" +
            (e || "") +
            '"></span>';
    var a = n.markerId || "markerX";
    return {
      renderMode: o,
      content: "{" + a + "|}  ",
      style:
        "subItem" === i
          ? { width: 4, height: 4, borderRadius: 2, backgroundColor: r }
          : { width: 10, height: 10, borderRadius: 5, backgroundColor: r },
    };
  }
  function xl(t, e, n) {
    ("week" === t ||
      "month" === t ||
      "quarter" === t ||
      "half-year" === t ||
      "year" === t) &&
      (t = "MM-dd\nyyyy");
    var r = Zr(e),
      i = n ? "getUTC" : "get",
      o = r[i + "FullYear"](),
      a = r[i + "Month"]() + 1,
      s = r[i + "Date"](),
      l = r[i + "Hours"](),
      u = r[i + "Minutes"](),
      h = r[i + "Seconds"](),
      c = r[i + "Milliseconds"]();
    return (t = t
      .replace("MM", qs(a, 2))
      .replace("M", a)
      .replace("yyyy", o)
      .replace("yy", (o % 100) + "")
      .replace("dd", qs(s, 2))
      .replace("d", s)
      .replace("hh", qs(l, 2))
      .replace("h", l)
      .replace("mm", qs(u, 2))
      .replace("m", u)
      .replace("ss", qs(h, 2))
      .replace("s", h)
      .replace("SSS", qs(c, 3)));
  }
  function wl(t) {
    return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
  }
  function bl(t, e) {
    return (
      (e = e || "transparent"),
      C(t) ? t : I(t) ? (t.colorStops && (t.colorStops[0] || {}).color) || e : e
    );
  }
  function Sl(t, e, n, r, i) {
    var o = 0,
      a = 0;
    null == r && (r = 1 / 0), null == i && (i = 1 / 0);
    var s = 0;
    e.eachChild(function (l, u) {
      var h,
        c,
        p = l.getBoundingRect(),
        f = e.childAt(u + 1),
        d = f && f.getBoundingRect();
      if ("horizontal" === t) {
        var g = p.width + (d ? -d.x + p.x : 0);
        (h = o + g),
          h > r || l.newline
            ? ((o = 0), (h = g), (a += s + n), (s = p.height))
            : (s = Math.max(s, p.height));
      } else {
        var v = p.height + (d ? -d.y + p.y : 0);
        (c = a + v),
          c > i || l.newline
            ? ((o += s + n), (a = 0), (c = v), (s = p.width))
            : (s = Math.max(s, p.width));
      }
      l.newline ||
        ((l.x = o),
        (l.y = a),
        l.markRedraw(),
        "horizontal" === t ? (o = h + n) : (a = c + n));
    });
  }
  function Ml(t, e, n) {
    n = Iw(n || 0);
    var r = e.width,
      i = e.height,
      o = Fr(t.left, r),
      a = Fr(t.top, i),
      s = Fr(t.right, r),
      l = Fr(t.bottom, i),
      u = Fr(t.width, r),
      h = Fr(t.height, i),
      c = n[2] + n[0],
      p = n[1] + n[3],
      f = t.aspect;
    switch (
      (isNaN(u) && (u = r - s - p - o),
      isNaN(h) && (h = i - l - c - a),
      null != f &&
        (isNaN(u) && isNaN(h) && (f > r / i ? (u = 0.8 * r) : (h = 0.8 * i)),
        isNaN(u) && (u = f * h),
        isNaN(h) && (h = u / f)),
      isNaN(o) && (o = r - s - u - p),
      isNaN(a) && (a = i - l - h - c),
      t.left || t.right)
    ) {
      case "center":
        o = r / 2 - u / 2 - n[3];
        break;
      case "right":
        o = r - u - p;
    }
    switch (t.top || t.bottom) {
      case "middle":
      case "center":
        a = i / 2 - h / 2 - n[0];
        break;
      case "bottom":
        a = i - h - c;
    }
    (o = o || 0),
      (a = a || 0),
      isNaN(u) && (u = r - p - o - (s || 0)),
      isNaN(h) && (h = i - c - a - (l || 0));
    var d = new Ly(o + n[3], a + n[0], u, h);
    return (d.margin = n), d;
  }
  function Tl(t) {
    var e = t.layoutMode || t.constructor.layoutMode;
    return I(e) ? e : e ? { type: e } : null;
  }
  function Cl(t, e, n) {
    function r(n, r) {
      var a = {},
        l = 0,
        u = {},
        h = 0,
        c = 2;
      if (
        (Rw(n, function (e) {
          u[e] = t[e];
        }),
        Rw(n, function (t) {
          i(e, t) && (a[t] = u[t] = e[t]), o(a, t) && l++, o(u, t) && h++;
        }),
        s[r])
      )
        return (
          o(e, n[1]) ? (u[n[2]] = null) : o(e, n[2]) && (u[n[1]] = null), u
        );
      if (h !== c && l) {
        if (l >= c) return a;
        for (var p = 0; p < n.length; p++) {
          var f = n[p];
          if (!i(a, f) && i(t, f)) {
            a[f] = t[f];
            break;
          }
        }
        return a;
      }
      return u;
    }
    function i(t, e) {
      return t.hasOwnProperty(e);
    }
    function o(t, e) {
      return null != t[e] && "auto" !== t[e];
    }
    function a(t, e, n) {
      Rw(t, function (t) {
        e[t] = n[t];
      });
    }
    var s = n && n.ignoreSize;
    !M(s) && (s = [s, s]);
    var l = r(Bw[0], 0),
      u = r(Bw[1], 1);
    a(Bw[0], t, l), a(Bw[1], t, u);
  }
  function kl(t) {
    return Dl({}, t);
  }
  function Dl(t, e) {
    return (
      e &&
        t &&
        Rw(Ew, function (n) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }),
      t
    );
  }
  function Il(t) {
    var e = [];
    return (
      v(zw.getClassesByMainType(t), function (t) {
        e = e.concat(t.dependencies || t.prototype.dependencies || []);
      }),
      (e = y(e, function (t) {
        return Ri(t).main;
      })),
      "dataset" !== t && p(e, "dataset") <= 0 && e.unshift("dataset"),
      e
    );
  }
  function Al(t) {
    tb(t).datasetMap = q();
  }
  function Ll(t, e, n) {
    function r(t, e, n) {
      for (var r = 0; n > r; r++) t.push(e + r);
    }
    function i(t) {
      var e = t.dimsDef;
      return e ? e.length : 1;
    }
    var o = {},
      a = Pl(e);
    if (!a || !t) return o;
    var s,
      l,
      u = [],
      h = [],
      c = e.ecModel,
      p = tb(c).datasetMap,
      f = a.uid + "_" + n.seriesLayoutBy;
    (t = t.slice()),
      v(t, function (e, n) {
        var r = I(e) ? e : (t[n] = { name: e });
        "ordinal" === r.type && null == s && ((s = n), (l = i(r))),
          (o[r.name] = []);
      });
    var d = p.get(f) || p.set(f, { categoryWayDim: l, valueWayDim: 0 });
    return (
      v(t, function (t, e) {
        var n = t.name,
          a = i(t);
        if (null == s) {
          var l = d.valueWayDim;
          r(o[n], l, a), r(h, l, a), (d.valueWayDim += a);
        } else if (s === e) r(o[n], 0, a), r(u, 0, a);
        else {
          var l = d.categoryWayDim;
          r(o[n], l, a), r(h, l, a), (d.categoryWayDim += a);
        }
      }),
      u.length && (o.itemName = u),
      h.length && (o.seriesName = h),
      o
    );
  }
  function Pl(t) {
    var e = t.get("data", !0);
    return e
      ? void 0
      : Ai(
          t.ecModel,
          "dataset",
          { index: t.get("datasetIndex", !0), id: t.get("datasetId", !0) },
          Jy
        ).models[0];
  }
  function Ol(t) {
    return t.get("transform", !0) || t.get("fromTransformResult", !0)
      ? Ai(
          t.ecModel,
          "dataset",
          {
            index: t.get("fromDatasetIndex", !0),
            id: t.get("fromDatasetId", !0),
          },
          Jy
        ).models
      : [];
  }
  function Rl(t, e) {
    return El(
      t.data,
      t.sourceFormat,
      t.seriesLayoutBy,
      t.dimensionsDefine,
      t.startIndex,
      e
    );
  }
  function El(t, e, n, r, i, o) {
    function a(t) {
      var e = C(t);
      return null != t && isFinite(t) && "" !== t
        ? e
          ? Jw.Might
          : Jw.Not
        : e && "-" !== t
        ? Jw.Must
        : void 0;
    }
    var s,
      l = 5;
    if (L(t)) return Jw.Not;
    var u, h;
    if (r) {
      var c = r[o];
      I(c) ? ((u = c.name), (h = c.type)) : C(c) && (u = c);
    }
    if (null != h) return "ordinal" === h ? Jw.Must : Jw.Not;
    if (e === qw) {
      var p = t;
      if (n === Qw) {
        for (var f = p[o], d = 0; d < (f || []).length && l > d; d++)
          if (null != (s = a(f[i + d]))) return s;
      } else
        for (var d = 0; d < p.length && l > d; d++) {
          var g = p[i + d];
          if (g && null != (s = a(g[o]))) return s;
        }
    } else if (e === Yw) {
      var v = t;
      if (!u) return Jw.Not;
      for (var d = 0; d < v.length && l > d; d++) {
        var y = v[d];
        if (y && null != (s = a(y[u]))) return s;
      }
    } else if (e === jw) {
      var m = t;
      if (!u) return Jw.Not;
      var f = m[u];
      if (!f || L(f)) return Jw.Not;
      for (var d = 0; d < f.length && l > d; d++)
        if (null != (s = a(f[d]))) return s;
    } else if (e === Xw)
      for (var _ = t, d = 0; d < _.length && l > d; d++) {
        var y = _[d],
          x = hi(y);
        if (!M(x)) return Jw.Not;
        if (null != (s = a(x[o]))) return s;
      }
    return Jw.Not;
  }
  function Bl(t, e, n) {
    var r = eb.get(e);
    if (!r) return n;
    var i = r(t);
    return i ? n.concat(i) : n;
  }
  function Nl(t, e) {
    for (var n = t.length, r = 0; n > r; r++) if (t[r].length > e) return t[r];
    return t[n - 1];
  }
  function zl(t, e, n, r, i, o, a) {
    o = o || t;
    var s = e(o),
      l = s.paletteIdx || 0,
      u = (s.paletteNameMap = s.paletteNameMap || {});
    if (u.hasOwnProperty(i)) return u[i];
    var h = null != a && r ? Nl(r, a) : n;
    if (((h = h || n), h && h.length)) {
      var c = h[l];
      return i && (u[i] = c), (s.paletteIdx = (l + 1) % h.length), c;
    }
  }
  function Fl(t, e) {
    (e(t).paletteIdx = 0), (e(t).paletteNameMap = {});
  }
  function Vl(t, e) {
    if (e) {
      var n = e.seriesIndex,
        r = e.seriesId,
        i = e.seriesName;
      return (
        (null != n && t.componentIndex !== n) ||
        (null != r && t.id !== r) ||
        (null != i && t.name !== i)
      );
    }
  }
  function Hl(t, e) {
    var n = t.color && !t.colorLayer;
    v(e, function (e, r) {
      ("colorLayer" === r && n) ||
        zw.hasClass(r) ||
        ("object" == typeof e
          ? (t[r] = t[r] ? l(t[r], e, !1) : s(e))
          : null == t[r] && (t[r] = e));
    });
  }
  function Wl(t, e, n) {
    if (M(e)) {
      var r = q();
      return (
        v(e, function (t) {
          if (null != t) {
            var e = wi(t, null);
            null != e && r.set(t, !0);
          }
        }),
        _(n, function (e) {
          return e && r.get(e[t]);
        })
      );
    }
    var i = wi(e, null);
    return _(n, function (e) {
      return e && null != i && e[t] === i;
    });
  }
  function Gl(t, e) {
    return e.hasOwnProperty("subType")
      ? _(t, function (t) {
          return t && t.subType === e.subType;
        })
      : t;
  }
  function Ul(t) {
    var e = q();
    return (
      t &&
        v(li(t.replaceMerge), function (t) {
          e.set(t, !0);
        }),
      { replaceMergeMainTypeMap: e }
    );
  }
  function Xl(t, e, n) {
    function r(t) {
      v(e, function (e) {
        e(t, n);
      });
    }
    var i,
      o,
      a = [],
      s = t.baseOption,
      l = t.timeline,
      u = t.options,
      h = t.media,
      c = !!t.media,
      p = !!(u || l || (s && s.timeline));
    return (
      s
        ? ((o = s), o.timeline || (o.timeline = l))
        : ((p || c) && (t.options = t.media = null), (o = t)),
      c &&
        M(h) &&
        v(h, function (t) {
          t && t.option && (t.query ? a.push(t) : i || (i = t));
        }),
      r(o),
      v(u, function (t) {
        return r(t);
      }),
      v(a, function (t) {
        return r(t.option);
      }),
      { baseOption: o, timelineOptions: u || [], mediaDefault: i, mediaList: a }
    );
  }
  function ql(t, e, n) {
    var r = { width: e, height: n, aspectratio: e / n },
      i = !0;
    return (
      v(t, function (t, e) {
        var n = e.match(yb);
        if (n && n[1] && n[2]) {
          var o = n[1],
            a = n[2].toLowerCase();
          Yl(r[a], t, o) || (i = !1);
        }
      }),
      i
    );
  }
  function Yl(t, e, n) {
    return "min" === n ? t >= e : "max" === n ? e >= t : t === e;
  }
  function jl(t, e) {
    return t.join(",") === e.join(",");
  }
  function Zl(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0, r = wb.length; r > n; n++) {
        var i = wb[n],
          o = e.normal,
          a = e.emphasis;
        o &&
          o[i] &&
          ((t[i] = t[i] || {}),
          t[i].normal ? l(t[i].normal, o[i]) : (t[i].normal = o[i]),
          (o[i] = null)),
          a &&
            a[i] &&
            ((t[i] = t[i] || {}),
            t[i].emphasis ? l(t[i].emphasis, a[i]) : (t[i].emphasis = a[i]),
            (a[i] = null));
      }
  }
  function Kl(t, e, n) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var r = t[e].normal,
        i = t[e].emphasis;
      r &&
        (n ? ((t[e].normal = t[e].emphasis = null), c(t[e], r)) : (t[e] = r)),
        i &&
          ((t.emphasis = t.emphasis || {}),
          (t.emphasis[e] = i),
          i.focus && (t.emphasis.focus = i.focus),
          i.blurScope && (t.emphasis.blurScope = i.blurScope));
    }
  }
  function $l(t) {
    Kl(t, "itemStyle"),
      Kl(t, "lineStyle"),
      Kl(t, "areaStyle"),
      Kl(t, "label"),
      Kl(t, "labelLine"),
      Kl(t, "upperLabel"),
      Kl(t, "edgeLabel");
  }
  function Ql(t, e) {
    var n = xb(t) && t[e],
      r = xb(n) && n.textStyle;
    if (r)
      for (var i = 0, o = $y.length; o > i; i++) {
        var a = $y[i];
        r.hasOwnProperty(a) && (n[a] = r[a]);
      }
  }
  function Jl(t) {
    t && ($l(t), Ql(t, "label"), t.emphasis && Ql(t.emphasis, "label"));
  }
  function tu(t) {
    if (xb(t)) {
      Zl(t),
        $l(t),
        Ql(t, "label"),
        Ql(t, "upperLabel"),
        Ql(t, "edgeLabel"),
        t.emphasis &&
          (Ql(t.emphasis, "label"),
          Ql(t.emphasis, "upperLabel"),
          Ql(t.emphasis, "edgeLabel"));
      var e = t.markPoint;
      e && (Zl(e), Jl(e));
      var n = t.markLine;
      n && (Zl(n), Jl(n));
      var r = t.markArea;
      r && Jl(r);
      var i = t.data;
      if ("graph" === t.type) {
        i = i || t.nodes;
        var o = t.links || t.edges;
        if (o && !L(o)) for (var a = 0; a < o.length; a++) Jl(o[a]);
        v(t.categories, function (t) {
          $l(t);
        });
      }
      if (i && !L(i)) for (var a = 0; a < i.length; a++) Jl(i[a]);
      if (((e = t.markPoint), e && e.data))
        for (var s = e.data, a = 0; a < s.length; a++) Jl(s[a]);
      if (((n = t.markLine), n && n.data))
        for (var l = n.data, a = 0; a < l.length; a++)
          M(l[a]) ? (Jl(l[a][0]), Jl(l[a][1])) : Jl(l[a]);
      "gauge" === t.type
        ? (Ql(t, "axisLabel"), Ql(t, "title"), Ql(t, "detail"))
        : "treemap" === t.type
        ? (Kl(t.breadcrumb, "itemStyle"),
          v(t.levels, function (t) {
            $l(t);
          }))
        : "tree" === t.type && $l(t.leaves);
    }
  }
  function eu(t) {
    return M(t) ? t : t ? [t] : [];
  }
  function nu(t) {
    return (M(t) ? t[0] : t) || {};
  }
  function ru(t, e) {
    _b(eu(t.series), function (t) {
      xb(t) && tu(t);
    });
    var n = [
      "xAxis",
      "yAxis",
      "radiusAxis",
      "angleAxis",
      "singleAxis",
      "parallelAxis",
      "radar",
    ];
    e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"),
      _b(n, function (e) {
        _b(eu(t[e]), function (t) {
          t && (Ql(t, "axisLabel"), Ql(t.axisPointer, "label"));
        });
      }),
      _b(eu(t.parallel), function (t) {
        var e = t && t.parallelAxisDefault;
        Ql(e, "axisLabel"), Ql(e && e.axisPointer, "label");
      }),
      _b(eu(t.calendar), function (t) {
        Kl(t, "itemStyle"),
          Ql(t, "dayLabel"),
          Ql(t, "monthLabel"),
          Ql(t, "yearLabel");
      }),
      _b(eu(t.radar), function (t) {
        Ql(t, "name"),
          t.name &&
            null == t.axisName &&
            ((t.axisName = t.name), delete t.name),
          null != t.nameGap &&
            null == t.axisNameGap &&
            ((t.axisNameGap = t.nameGap), delete t.nameGap);
      }),
      _b(eu(t.geo), function (t) {
        xb(t) &&
          (Jl(t),
          _b(eu(t.regions), function (t) {
            Jl(t);
          }));
      }),
      _b(eu(t.timeline), function (t) {
        Jl(t), Kl(t, "label"), Kl(t, "itemStyle"), Kl(t, "controlStyle", !0);
        var e = t.data;
        M(e) &&
          v(e, function (t) {
            I(t) && (Kl(t, "label"), Kl(t, "itemStyle"));
          });
      }),
      _b(eu(t.toolbox), function (t) {
        Kl(t, "iconStyle"),
          _b(t.feature, function (t) {
            Kl(t, "iconStyle");
          });
      }),
      Ql(nu(t.axisPointer), "label"),
      Ql(nu(t.tooltip).axisPointer, "label");
  }
  function iu(t, e) {
    for (
      var n = e.split(","), r = t, i = 0;
      i < n.length && ((r = r && r[n[i]]), null != r);
      i++
    );
    return r;
  }
  function ou(t, e, n, r) {
    for (var i, o = e.split(","), a = t, s = 0; s < o.length - 1; s++)
      (i = o[s]), null == a[i] && (a[i] = {}), (a = a[i]);
    (r || null == a[o[s]]) && (a[o[s]] = n);
  }
  function au(t) {
    t &&
      v(bb, function (e) {
        e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
      });
  }
  function su(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0; n < Mb.length; n++) {
        var r = Mb[n][1],
          i = Mb[n][0];
        null != e[r] && (e[i] = e[r]);
      }
  }
  function lu(t) {
    t &&
      "edge" === t.alignTo &&
      null != t.margin &&
      null == t.edgeDistance &&
      (t.edgeDistance = t.margin);
  }
  function uu(t) {
    t && t.downplay && !t.blur && (t.blur = t.downplay);
  }
  function hu(t) {
    t &&
      null != t.focusNodeAdjacency &&
      ((t.emphasis = t.emphasis || {}),
      null == t.emphasis.focus && (t.emphasis.focus = "adjacency"));
  }
  function cu(t, e) {
    if (t)
      for (var n = 0; n < t.length; n++) e(t[n]), t[n] && cu(t[n].children, e);
  }
  function pu(t, e) {
    ru(t, e),
      (t.series = li(t.series)),
      v(t.series, function (t) {
        if (I(t)) {
          var e = t.type;
          if ("line" === e) null != t.clipOverflow && (t.clip = t.clipOverflow);
          else if ("pie" === e || "gauge" === e) {
            null != t.clockWise && (t.clockwise = t.clockWise), lu(t.label);
            var n = t.data;
            if (n && !L(n)) for (var r = 0; r < n.length; r++) lu(n[r]);
            null != t.hoverOffset &&
              ((t.emphasis = t.emphasis || {}),
              (t.emphasis.scaleSize = null) &&
                (t.emphasis.scaleSize = t.hoverOffset));
          } else if ("gauge" === e) {
            var i = iu(t, "pointer.color");
            null != i && ou(t, "itemStyle.color", i);
          } else if ("bar" === e) {
            su(t), su(t.backgroundStyle), su(t.emphasis);
            var n = t.data;
            if (n && !L(n))
              for (var r = 0; r < n.length; r++)
                "object" == typeof n[r] &&
                  (su(n[r]), su(n[r] && n[r].emphasis));
          } else if ("sunburst" === e) {
            var o = t.highlightPolicy;
            o &&
              ((t.emphasis = t.emphasis || {}),
              t.emphasis.focus || (t.emphasis.focus = o)),
              uu(t),
              cu(t.data, uu);
          } else
            "graph" === e || "sankey" === e
              ? hu(t)
              : "map" === e &&
                (t.mapType && !t.map && (t.map = t.mapType),
                t.mapLocation && c(t, t.mapLocation));
          null != t.hoverAnimation &&
            ((t.emphasis = t.emphasis || {}),
            t.emphasis &&
              null == t.emphasis.scale &&
              (t.emphasis.scale = t.hoverAnimation)),
            au(t);
        }
      }),
      t.dataRange && (t.visualMap = t.dataRange),
      v(Sb, function (e) {
        var n = t[e];
        n &&
          (M(n) || (n = [n]),
          v(n, function (t) {
            au(t);
          }));
      });
  }
  function fu(t) {
    var e = q();
    t.eachSeries(function (t) {
      var n = t.get("stack");
      if (n) {
        var r = e.get(n) || e.set(n, []),
          i = t.getData(),
          o = {
            stackResultDimension: i.getCalculationInfo("stackResultDimension"),
            stackedOverDimension: i.getCalculationInfo("stackedOverDimension"),
            stackedDimension: i.getCalculationInfo("stackedDimension"),
            stackedByDimension: i.getCalculationInfo("stackedByDimension"),
            isStackedByIndex: i.getCalculationInfo("isStackedByIndex"),
            data: i,
            seriesModel: t,
          };
        if (
          !o.stackedDimension ||
          (!o.isStackedByIndex && !o.stackedByDimension)
        )
          return;
        r.length &&
          i.setCalculationInfo("stackedOnSeries", r[r.length - 1].seriesModel),
          r.push(o);
      }
    }),
      e.each(du);
  }
  function du(t) {
    v(t, function (e, n) {
      var r = [],
        i = [0 / 0, 0 / 0],
        o = [e.stackResultDimension, e.stackedOverDimension],
        a = e.data,
        s = e.isStackedByIndex;
      a.modify(o, function (o, l, u) {
        var h = a.get(e.stackedDimension, u);
        if (isNaN(h)) return i;
        var c, p;
        s ? (p = a.getRawIndex(u)) : (c = a.get(e.stackedByDimension, u));
        for (var f = 0 / 0, d = n - 1; d >= 0; d--) {
          var g = t[d];
          if ((s || (p = g.data.rawIndexOf(g.stackedByDimension, c)), p >= 0)) {
            var v = g.data.getByRawIndex(g.stackResultDimension, p);
            if ((h >= 0 && v > 0) || (0 >= h && 0 > v)) {
              (h = qr(h, v)), (f = v);
              break;
            }
          }
        }
        return (r[0] = h), (r[1] = f), r;
      });
    });
  }
  function gu(t) {
    return t instanceof Tb;
  }
  function vu(t, e, n) {
    n = n || _u(t);
    var r = e.seriesLayoutBy,
      i = xu(t, n, r, e.sourceHeader, e.dimensions),
      o = new Tb({
        data: t,
        sourceFormat: n,
        seriesLayoutBy: r,
        dimensionsDefine: i.dimensionsDefine,
        startIndex: i.startIndex,
        dimensionsDetectedCount: i.dimensionsDetectedCount,
        metaRawOption: s(e),
      });
    return o;
  }
  function yu(t) {
    return new Tb({ data: t, sourceFormat: L(t) ? Zw : Xw });
  }
  function mu(t) {
    return new Tb({
      data: t.data,
      sourceFormat: t.sourceFormat,
      seriesLayoutBy: t.seriesLayoutBy,
      dimensionsDefine: s(t.dimensionsDefine),
      startIndex: t.startIndex,
      dimensionsDetectedCount: t.dimensionsDetectedCount,
    });
  }
  function _u(t) {
    var e = Kw;
    if (L(t)) e = Zw;
    else if (M(t)) {
      0 === t.length && (e = qw);
      for (var n = 0, r = t.length; r > n; n++) {
        var i = t[n];
        if (null != i) {
          if (M(i)) {
            e = qw;
            break;
          }
          if (I(i)) {
            e = Yw;
            break;
          }
        }
      }
    } else if (I(t))
      for (var o in t)
        if (K(t, o) && g(t[o])) {
          e = jw;
          break;
        }
    return e;
  }
  function xu(t, e, n, r, i) {
    var o, a;
    if (!t)
      return {
        dimensionsDefine: bu(i),
        startIndex: a,
        dimensionsDetectedCount: o,
      };
    if (e === qw) {
      var s = t;
      "auto" === r || null == r
        ? Su(
            function (t) {
              null != t && "-" !== t && (C(t) ? null == a && (a = 1) : (a = 0));
            },
            n,
            s,
            10
          )
        : (a = D(r) ? r : r ? 1 : 0),
        i ||
          1 !== a ||
          ((i = []),
          Su(
            function (t, e) {
              i[e] = null != t ? t + "" : "";
            },
            n,
            s,
            1 / 0
          )),
        (o = i ? i.length : n === Qw ? s.length : s[0] ? s[0].length : null);
    } else if (e === Yw) i || (i = wu(t));
    else if (e === jw)
      i ||
        ((i = []),
        v(t, function (t, e) {
          i.push(e);
        }));
    else if (e === Xw) {
      var l = hi(t[0]);
      o = (M(l) && l.length) || 1;
    }
    return {
      startIndex: a,
      dimensionsDefine: bu(i),
      dimensionsDetectedCount: o,
    };
  }
  function wu(t) {
    for (var e, n = 0; n < t.length && !(e = t[n++]); );
    if (e) {
      var r = [];
      return (
        v(e, function (t, e) {
          r.push(e);
        }),
        r
      );
    }
  }
  function bu(t) {
    if (t) {
      var e = q();
      return y(t, function (t) {
        t = I(t) ? t : { name: t };
        var n = { name: t.name, displayName: t.displayName, type: t.type };
        if (null == n.name) return n;
        (n.name += ""), null == n.displayName && (n.displayName = n.name);
        var r = e.get(n.name);
        return r ? (n.name += "-" + r.count++) : e.set(n.name, { count: 1 }), n;
      });
    }
  }
  function Su(t, e, n, r) {
    if (e === Qw)
      for (var i = 0; i < n.length && r > i; i++) t(n[i] ? n[i][0] : null, i);
    else for (var o = n[0] || [], i = 0; i < o.length && r > i; i++) t(o[i], i);
  }
  function Mu(t) {
    var e = t.sourceFormat;
    return e === Yw || e === jw;
  }
  function Tu(t, e) {
    var n = Db[Du(t, e)];
    return n;
  }
  function Cu(t, e) {
    var n = Ab[Du(t, e)];
    return n;
  }
  function ku(t) {
    var e = Pb[t];
    return e;
  }
  function Du(t, e) {
    return t === qw ? t + "_" + e : t;
  }
  function Iu(t, e, n) {
    if (t) {
      var r = t.getRawDataItem(e);
      if (null != r) {
        var i = t.getStore(),
          o = i.getSource().sourceFormat;
        if (null != n) {
          var a = t.getDimensionIndex(n),
            s = i.getDimensionProperty(a);
          return ku(o)(r, a, s);
        }
        var l = r;
        return o === Xw && (l = hi(r)), l;
      }
    }
  }
  function Au(t) {
    return new Eb(t);
  }
  function Lu(t, e) {
    var n = e && e.type;
    return "ordinal" === n
      ? t
      : ("time" !== n || D(t) || null == t || "-" === t || (t = +Zr(t)),
        null == t || "" === t ? 0 / 0 : +t);
  }
  function Pu(t, e) {
    var n = new zb(),
      r = t.data,
      i = (n.sourceFormat = t.sourceFormat),
      o = t.startIndex,
      a = "";
    t.seriesLayoutBy !== $w && ai(a);
    var s = [],
      l = {},
      u = t.dimensionsDefine;
    if (u)
      v(u, function (t, e) {
        var n = t.name,
          r = { index: e, name: n, displayName: t.displayName };
        if ((s.push(r), null != n)) {
          var i = "";
          K(l, n) && ai(i), (l[n] = r);
        }
      });
    else
      for (var h = 0; h < t.dimensionsDetectedCount; h++) s.push({ index: h });
    var c = Tu(i, $w);
    e.__isBuiltIn &&
      ((n.getRawDataItem = function (t) {
        return c(r, o, s, t);
      }),
      (n.getRawData = Ng(Ou, null, t))),
      (n.cloneRawData = Ng(Ru, null, t));
    var p = Cu(i, $w);
    n.count = Ng(p, null, r, o, s);
    var f = ku(i);
    n.retrieveValue = function (t, e) {
      var n = c(r, o, s, t);
      return d(n, e);
    };
    var d = (n.retrieveValueFromItem = function (t, e) {
      if (null != t) {
        var n = s[e];
        return n ? f(t, e, n.name) : void 0;
      }
    });
    return (
      (n.getDimensionInfo = Ng(Eu, null, s, l)),
      (n.cloneAllDimensionInfo = Ng(Bu, null, s)),
      n
    );
  }
  function Ou(t) {
    var e = t.sourceFormat;
    if (!Vu(e)) {
      var n = "";
      ai(n);
    }
    return t.data;
  }
  function Ru(t) {
    var e = t.sourceFormat,
      n = t.data;
    if (!Vu(e)) {
      var r = "";
      ai(r);
    }
    if (e === qw) {
      for (var i = [], o = 0, a = n.length; a > o; o++) i.push(n[o].slice());
      return i;
    }
    if (e === Yw) {
      for (var i = [], o = 0, a = n.length; a > o; o++) i.push(h({}, n[o]));
      return i;
    }
  }
  function Eu(t, e, n) {
    return null != n
      ? D(n) || (!isNaN(n) && !K(e, n))
        ? t[n]
        : K(e, n)
        ? e[n]
        : void 0
      : void 0;
  }
  function Bu(t) {
    return s(t);
  }
  function Nu(t) {
    t = s(t);
    var e = t.type,
      n = "";
    e || ai(n);
    var r = e.split(":");
    2 !== r.length && ai(n);
    var i = !1;
    "echarts" === r[0] && ((e = r[1]), (i = !0)),
      (t.__isBuiltIn = i),
      Fb.set(e, t);
  }
  function zu(t, e, n) {
    var r = li(t),
      i = r.length,
      o = "";
    i || ai(o);
    for (var a = 0, s = i; s > a; a++) {
      var l = r[a];
      (e = Fu(l, e, n, 1 === i ? null : a)),
        a !== s - 1 && (e.length = Math.max(e.length, 1));
    }
    return e;
  }
  function Fu(t, e) {
    var n = "";
    e.length || ai(n), I(t) || ai(n);
    var r = t.type,
      i = Fb.get(r);
    i || ai(n);
    var o = y(e, function (t) {
        return Pu(t, i);
      }),
      a = li(
        i.transform({ upstream: o[0], upstreamList: o, config: s(t.config) })
      );
    return y(a, function (t, n) {
      var r = "";
      I(t) || ai(r), t.data || ai(r);
      var i = _u(t.data);
      Vu(i) || ai(r);
      var o,
        a = e[0];
      if (a && 0 === n && !t.dimensions) {
        var s = a.startIndex;
        s && (t.data = a.data.slice(0, s).concat(t.data)),
          (o = {
            seriesLayoutBy: $w,
            sourceHeader: s,
            dimensions: a.metaRawOption.dimensions,
          });
      } else o = { seriesLayoutBy: $w, sourceHeader: 0, dimensions: t.dimensions };
      return vu(t.data, o, null);
    });
  }
  function Vu(t) {
    return t === qw || t === Yw;
  }
  function Hu(t) {
    return t > 65535 ? Hb : Wb;
  }
  function Wu() {
    return [1 / 0, -1 / 0];
  }
  function Gu(t) {
    var e = t.constructor;
    return e === Array ? t.slice() : new e(t);
  }
  function Uu(t, e, n, r, i) {
    var o = Xb[n || "float"];
    if (i) {
      var a = t[e],
        s = a && a.length;
      if (s !== r) {
        for (var l = new o(r), u = 0; s > u; u++) l[u] = a[u];
        t[e] = l;
      }
    } else t[e] = new o(r);
  }
  function Xu(t) {
    var e = t.option.transform;
    e && U(t.option.transform);
  }
  function qu(t) {
    return "series" === t.mainType;
  }
  function Yu(t) {
    throw new Error(t);
  }
  function ju(t, e) {
    return (e.type = t), e;
  }
  function Zu(t, e) {
    var n = t.getData().getItemVisual(e, "style"),
      r = n[t.visualDrawType];
    return bl(r);
  }
  function Ku(t) {
    var e,
      n,
      r,
      i,
      o = t.series,
      a = t.dataIndex,
      s = t.multipleSeries,
      l = o.getData(),
      u = l.mapDimensionsAll("defaultedTooltip"),
      h = u.length,
      c = o.getRawValue(a),
      p = M(c),
      f = Zu(o, a);
    if (h > 1 || (p && !h)) {
      var d = $u(c, o, a, u, f);
      (e = d.inlineValues),
        (n = d.inlineValueTypes),
        (r = d.blocks),
        (i = d.inlineValues[0]);
    } else if (h) {
      var g = l.getDimensionInfo(u[0]);
      (i = e = Iu(l, a, u[0])), (n = g.type);
    } else i = e = p ? c[0] : c;
    var v = bi(o),
      y = (v && o.name) || "",
      m = l.getName(a),
      _ = s ? y : m;
    return ju("section", {
      header: y,
      noHeader: s || !v,
      sortParam: i,
      blocks: [
        ju("nameValue", {
          markerType: "item",
          markerColor: f,
          name: _,
          noName: !G(_),
          value: e,
          valueType: n,
        }),
      ].concat(r || []),
    });
  }
  function $u(t, e, n, r, i) {
    function o(t, e) {
      var n = a.getDimensionInfo(e);
      n &&
        n.otherDims.tooltip !== !1 &&
        (s
          ? h.push(
              ju("nameValue", {
                markerType: "subItem",
                markerColor: i,
                name: n.displayName,
                value: t,
                valueType: n.type,
              })
            )
          : (l.push(t), u.push(n.type)));
    }
    var a = e.getData(),
      s = m(
        t,
        function (t, e, n) {
          var r = a.getDimensionInfo(n);
          return (t = t || (r && r.tooltip !== !1 && null != r.displayName));
        },
        !1
      ),
      l = [],
      u = [],
      h = [];
    return (
      r.length
        ? v(r, function (t) {
            o(Iu(a, n, t), t);
          })
        : v(t, o),
      { inlineValues: l, inlineValueTypes: u, blocks: h }
    );
  }
  function Qu(t, e) {
    return t.getName(e) || t.getId(e);
  }
  function Ju(t) {
    var e = t.name;
    bi(t) || (t.name = th(t) || e);
  }
  function th(t) {
    var e = t.getRawData(),
      n = e.mapDimensionsAll("seriesName"),
      r = [];
    return (
      v(n, function (t) {
        var n = e.getDimensionInfo(t);
        n.displayName && r.push(n.displayName);
      }),
      r.join(" ")
    );
  }
  function eh(t) {
    return t.model.getRawData().count();
  }
  function nh(t) {
    var e = t.model;
    return e.setData(e.getRawData().cloneShallow()), rh;
  }
  function rh(t, e) {
    e.outputData &&
      t.end > e.outputData.count() &&
      e.model.getRawData().cloneShallow(e.outputData);
  }
  function ih(t, e) {
    v(Y(t.CHANGABLE_METHODS, t.DOWNSAMPLE_METHODS), function (n) {
      t.wrapMethod(n, S(oh, e));
    });
  }
  function oh(t, e) {
    var n = ah(t);
    return n && n.setOutputEnd((e || this).count()), e;
  }
  function ah(t) {
    var e = (t.ecModel || {}).scheduler,
      n = e && e.getPipeline(t.uid);
    if (n) {
      var r = n.currentTask;
      if (r) {
        var i = r.agentStubMap;
        i && (r = i.get(t.uid));
      }
      return r;
    }
  }
  function sh() {
    var t = ki();
    return function (e) {
      var n = t(e),
        r = e.pipelineContext,
        i = !!n.large,
        o = !!n.progressiveRender,
        a = (n.large = !(!r || !r.large)),
        s = (n.progressiveRender = !(!r || !r.progressiveRender));
      return !(i === a && o === s) && "reset";
    };
  }
  function lh(t, e, n) {
    t && Aa(t) && ("emphasis" === e ? sa : la)(t, n);
  }
  function uh(t, e, n) {
    var r = Ci(t, e),
      i = e && null != e.highlightKey ? La(e.highlightKey) : null;
    null != r
      ? v(li(r), function (e) {
          lh(t.getItemGraphicEl(e), n, i);
        })
      : t.eachItemGraphicEl(function (t) {
          lh(t, n, i);
        });
  }
  function hh(t) {
    return Jb(t.model);
  }
  function ch(t) {
    var e = t.model,
      n = t.ecModel,
      r = t.api,
      i = t.payload,
      o = e.pipelineContext.progressiveRender,
      a = t.view,
      s = i && Qb(i).updateMethod,
      l = o ? "incrementalPrepareRender" : s && a[s] ? s : "render";
    return "render" !== l && a[l](e, n, r, i), nS[l];
  }
  function ph(t, e, n) {
    function r() {
      (h = new Date().getTime()), (c = null), t.apply(a, s || []);
    }
    var i,
      o,
      a,
      s,
      l,
      u = 0,
      h = 0,
      c = null;
    e = e || 0;
    var p = function () {
      for (var t = [], p = 0; p < arguments.length; p++) t[p] = arguments[p];
      (i = new Date().getTime()), (a = this), (s = t);
      var f = l || e,
        d = l || n;
      (l = null),
        (o = i - (d ? u : h) - f),
        clearTimeout(c),
        d ? (c = setTimeout(r, f)) : o >= 0 ? r() : (c = setTimeout(r, -o)),
        (u = i);
    };
    return (
      (p.clear = function () {
        c && (clearTimeout(c), (c = null));
      }),
      (p.debounceNextCall = function (t) {
        l = t;
      }),
      p
    );
  }
  function fh(t, e) {
    var n = t.visualStyleMapper || iS[e];
    return n
      ? n
      : (console.warn("Unkown style type '" + e + "'."), iS.itemStyle);
  }
  function dh(t, e) {
    var n = t.visualDrawType || oS[e];
    return n ? n : (console.warn("Unkown style type '" + e + "'."), "fill");
  }
  function gh(t, e) {
    (e = e || {}),
      c(e, {
        text: "loading",
        textColor: "#000",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        fontFamily: "sans-serif",
        maskColor: "rgba(255, 255, 255, 0.8)",
        showSpinner: !0,
        color: "#5470c6",
        spinnerRadius: 10,
        lineWidth: 5,
        zlevel: 0,
      });
    var n = new Fy(),
      r = new f_({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 });
    n.add(r);
    var i = new y_({
        style: {
          text: e.text,
          fill: e.textColor,
          fontSize: e.fontSize,
          fontWeight: e.fontWeight,
          fontStyle: e.fontStyle,
          fontFamily: e.fontFamily,
        },
        zlevel: e.zlevel,
        z: 10001,
      }),
      o = new f_({
        style: { fill: "none" },
        textContent: i,
        textConfig: { position: "right", distance: 10 },
        zlevel: e.zlevel,
        z: 10001,
      });
    n.add(o);
    var a;
    return (
      e.showSpinner &&
        ((a = new Ax({
          shape: {
            startAngle: -hS / 2,
            endAngle: -hS / 2 + 0.1,
            r: e.spinnerRadius,
          },
          style: { stroke: e.color, lineCap: "round", lineWidth: e.lineWidth },
          zlevel: e.zlevel,
          z: 10001,
        })),
        a
          .animateShape(!0)
          .when(1e3, { endAngle: (3 * hS) / 2 })
          .start("circularInOut"),
        a
          .animateShape(!0)
          .when(1e3, { startAngle: (3 * hS) / 2 })
          .delay(300)
          .start("circularInOut"),
        n.add(a)),
      (n.resize = function () {
        var n = i.getBoundingRect().width,
          s = e.showSpinner ? e.spinnerRadius : 0,
          l =
            (t.getWidth() - 2 * s - (e.showSpinner && n ? 10 : 0) - n) / 2 -
            (e.showSpinner && n ? 0 : 5 + n / 2) +
            (e.showSpinner ? 0 : n / 2) +
            (n ? 0 : s),
          u = t.getHeight() / 2;
        e.showSpinner && a.setShape({ cx: l, cy: u }),
          o.setShape({ x: l - s, y: u - s, width: 2 * s, height: 2 * s }),
          r.setShape({
            x: 0,
            y: 0,
            width: t.getWidth(),
            height: t.getHeight(),
          });
      }),
      n.resize(),
      n
    );
  }
  function vh(t) {
    t.overallReset(t.ecModel, t.api, t.payload);
  }
  function yh(t) {
    return t.overallProgress && mh;
  }
  function mh() {
    this.agent.dirty(), this.getDownstream().dirty();
  }
  function _h() {
    this.agent && this.agent.dirty();
  }
  function xh(t) {
    return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null;
  }
  function wh(t) {
    t.useClearVisual && t.data.clearAllVisual();
    var e = (t.resetDefines = li(
      t.reset(t.model, t.ecModel, t.api, t.payload)
    ));
    return e.length > 1
      ? y(e, function (t, e) {
          return bh(e);
        })
      : pS;
  }
  function bh(t) {
    return function (e, n) {
      var r = n.data,
        i = n.resetDefines[t];
      if (i && i.dataEach)
        for (var o = e.start; o < e.end; o++) i.dataEach(r, o);
      else i && i.progress && i.progress(e, r);
    };
  }
  function Sh(t) {
    return t.data.count();
  }
  function Mh(t) {
    eS = null;
    try {
      t(fS, dS);
    } catch (e) {}
    return eS;
  }
  function Th(t, e) {
    for (var n in e.prototype) t[n] = $;
  }
  function Ch(t, e, n) {
    switch (n) {
      case "color":
        var r = t.getItemVisual(e, "style");
        return r[t.getVisual("drawType")];
      case "opacity":
        return t.getItemVisual(e, "style").opacity;
      case "symbol":
      case "symbolSize":
      case "liftZ":
        return t.getItemVisual(e, n);
    }
  }
  function kh(t, e) {
    switch (e) {
      case "color":
        var n = t.getVisual("style");
        return n[t.getVisual("drawType")];
      case "opacity":
        return t.getVisual("style").opacity;
      case "symbol":
      case "symbolSize":
      case "liftZ":
        return t.getVisual(e);
    }
  }
  function Dh(t, e, n, r, i) {
    var o = t + e;
    n.isSilent(o) ||
      r.eachComponent({ mainType: "series", subType: "pie" }, function (t) {
        for (
          var e = t.seriesIndex,
            r = t.option.selectedMap,
            a = i.selected,
            s = 0;
          s < a.length;
          s++
        )
          if (a[s].seriesIndex === e) {
            var l = t.getData(),
              u = Ci(l, i.fromActionPayload);
            n.trigger(o, {
              type: o,
              seriesId: t.id,
              name: l.getName(M(u) ? u[0] : u),
              selected: C(r) ? r : h({}, r),
            });
          }
      });
  }
  function Ih(t, e, n) {
    t.on("selectchanged", function (t) {
      var r = n.getModel();
      t.isFromClick
        ? (Dh("map", "selectchanged", e, r, t),
          Dh("pie", "selectchanged", e, r, t))
        : "select" === t.fromAction
        ? (Dh("map", "selected", e, r, t), Dh("pie", "selected", e, r, t))
        : "unselect" === t.fromAction &&
          (Dh("map", "unselected", e, r, t), Dh("pie", "unselected", e, r, t));
    });
  }
  function Ah(t, e, n) {
    for (var r; t && (!e(t) || ((r = t), !n)); ) t = t.__hostTarget || t.parent;
    return r;
  }
  function Lh(t, e) {
    if ("image" !== this.type) {
      var n = this.style;
      this.__isEmptyBrush
        ? ((n.stroke = t), (n.fill = e || "#fff"), (n.lineWidth = 2))
        : "line" === this.shape.symbolType
        ? (n.stroke = t)
        : (n.fill = t),
        this.markRedraw();
    }
  }
  function Ph(t, e, n, r, i, o, a) {
    var s = 0 === t.indexOf("empty");
    s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
    var l;
    return (
      (l =
        0 === t.indexOf("image://")
          ? fs(t.slice(8), new Ly(e, n, r, i), a ? "center" : "cover")
          : 0 === t.indexOf("path://")
          ? ps(t.slice(7), {}, new Ly(e, n, r, i), a ? "center" : "cover")
          : new NS({
              shape: { symbolType: t, x: e, y: n, width: r, height: i },
            })),
      (l.__isEmptyBrush = s),
      (l.setColor = Lh),
      o && l.setColor(o),
      l
    );
  }
  function Oh(t, e) {
    return null != t
      ? (M(t) || (t = [t, t]),
        [Fr(t[0], e[0]) || 0, Fr(z(t[1], t[0]), e[1]) || 0])
      : void 0;
  }
  function Rh(t, e, n) {
    var r = null == e.x ? 0 : e.x,
      i = null == e.x2 ? 1 : e.x2,
      o = null == e.y ? 0 : e.y,
      a = null == e.y2 ? 0 : e.y2;
    e.global ||
      ((r = r * n.width + n.x),
      (i = i * n.width + n.x),
      (o = o * n.height + n.y),
      (a = a * n.height + n.y)),
      (r = isNaN(r) ? 0 : r),
      (i = isNaN(i) ? 1 : i),
      (o = isNaN(o) ? 0 : o),
      (a = isNaN(a) ? 0 : a);
    var s = t.createLinearGradient(r, o, i, a);
    return s;
  }
  function Eh(t, e, n) {
    var r = n.width,
      i = n.height,
      o = Math.min(r, i),
      a = null == e.x ? 0.5 : e.x,
      s = null == e.y ? 0.5 : e.y,
      l = null == e.r ? 0.5 : e.r;
    e.global || ((a = a * r + n.x), (s = s * i + n.y), (l *= o));
    var u = t.createRadialGradient(a, s, 0, a, s, l);
    return u;
  }
  function Bh(t, e, n) {
    for (
      var r = "radial" === e.type ? Eh(t, e, n) : Rh(t, e, n),
        i = e.colorStops,
        o = 0;
      o < i.length;
      o++
    )
      r.addColorStop(i[o].offset, i[o].color);
    return r;
  }
  function Nh(t, e) {
    if (t === e || (!t && !e)) return !1;
    if (!t || !e || t.length !== e.length) return !0;
    for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0;
    return !1;
  }
  function zh(t) {
    return parseInt(t, 10);
  }
  function Fh(t, e, n) {
    var r = ["width", "height"][e],
      i = ["clientWidth", "clientHeight"][e],
      o = ["paddingLeft", "paddingTop"][e],
      a = ["paddingRight", "paddingBottom"][e];
    if (null != n[r] && "auto" !== n[r]) return parseFloat(n[r]);
    var s = document.defaultView.getComputedStyle(t);
    return (
      ((t[i] || zh(s[r]) || zh(t.style[r])) -
        (zh(s[o]) || 0) -
        (zh(s[a]) || 0)) |
      0
    );
  }
  function Vh(t, e) {
    return t && "solid" !== t && e > 0
      ? "dashed" === t
        ? [4 * e, 2 * e]
        : "dotted" === t
        ? [e]
        : D(t)
        ? [t]
        : M(t)
        ? t
        : null
      : null;
  }
  function Hh(t) {
    var e = t.style,
      n = e.lineDash && e.lineWidth > 0 && Vh(e.lineDash, e.lineWidth),
      r = e.lineDashOffset;
    if (n) {
      var i = e.strokeNoScale && t.getLineScale ? t.getLineScale() : 1;
      i &&
        1 !== i &&
        ((n = y(n, function (t) {
          return t / i;
        })),
        (r /= i));
    }
    return [n, r];
  }
  function Wh(t) {
    var e = t.stroke;
    return !(null == e || "none" === e || !(t.lineWidth > 0));
  }
  function Gh(t) {
    return "string" == typeof t && "none" !== t;
  }
  function Uh(t) {
    var e = t.fill;
    return null != e && "none" !== e;
  }
  function Xh(t, e) {
    if (null != e.fillOpacity && 1 !== e.fillOpacity) {
      var n = t.globalAlpha;
      (t.globalAlpha = e.fillOpacity * e.opacity),
        t.fill(),
        (t.globalAlpha = n);
    } else t.fill();
  }
  function qh(t, e) {
    if (null != e.strokeOpacity && 1 !== e.strokeOpacity) {
      var n = t.globalAlpha;
      (t.globalAlpha = e.strokeOpacity * e.opacity),
        t.stroke(),
        (t.globalAlpha = n);
    } else t.stroke();
  }
  function Yh(t, e, n) {
    var r = qi(e.image, e.__image, n);
    if (ji(r)) {
      var i = t.createPattern(r, e.repeat || "repeat");
      if ("function" == typeof DOMMatrix && i && i.setTransform) {
        var o = new DOMMatrix();
        o.translateSelf(e.x || 0, e.y || 0),
          o.rotateSelf(0, 0, (e.rotation || 0) * Vg),
          o.scaleSelf(e.scaleX || 1, e.scaleY || 1),
          i.setTransform(o);
      }
      return i;
    }
  }
  function jh(t, e, n, r) {
    var i,
      o = Wh(n),
      a = Uh(n),
      s = n.strokePercent,
      l = 1 > s,
      u = !e.path;
    (e.silent && !l) || !u || e.createPathProxy();
    var h = e.path || zS,
      c = e.__dirty;
    if (!r) {
      var p = n.fill,
        f = n.stroke,
        d = a && !!p.colorStops,
        g = o && !!f.colorStops,
        v = a && !!p.image,
        y = o && !!f.image,
        m = void 0,
        _ = void 0,
        x = void 0,
        w = void 0,
        b = void 0;
      (d || g) && (b = e.getBoundingRect()),
        d &&
          ((m = c ? Bh(t, p, b) : e.__canvasFillGradient),
          (e.__canvasFillGradient = m)),
        g &&
          ((_ = c ? Bh(t, f, b) : e.__canvasStrokeGradient),
          (e.__canvasStrokeGradient = _)),
        v &&
          ((x =
            c || !e.__canvasFillPattern ? Yh(t, p, e) : e.__canvasFillPattern),
          (e.__canvasFillPattern = x)),
        y &&
          ((w =
            c || !e.__canvasStrokePattern
              ? Yh(t, f, e)
              : e.__canvasStrokePattern),
          (e.__canvasStrokePattern = x)),
        d ? (t.fillStyle = m) : v && (x ? (t.fillStyle = x) : (a = !1)),
        g ? (t.strokeStyle = _) : y && (w ? (t.strokeStyle = w) : (o = !1));
    }
    var S = e.getGlobalScale();
    h.setScale(S[0], S[1], e.segmentIgnoreThreshold);
    var M, T;
    t.setLineDash && n.lineDash && ((i = Hh(e)), (M = i[0]), (T = i[1]));
    var C = !0;
    (u || c & dv) &&
      (h.setDPR(t.dpr),
      l ? h.setContext(null) : (h.setContext(t), (C = !1)),
      h.reset(),
      e.buildPath(h, e.shape, r),
      h.toStatic(),
      e.pathUpdated()),
      C && h.rebuildPath(t, l ? s : 1),
      M && (t.setLineDash(M), (t.lineDashOffset = T)),
      r ||
        (n.strokeFirst
          ? (o && qh(t, n), a && Xh(t, n))
          : (a && Xh(t, n), o && qh(t, n))),
      M && t.setLineDash([]);
  }
  function Zh(t, e, n) {
    var r = (e.__image = qi(n.image, e.__image, e, e.onload));
    if (r && ji(r)) {
      var i = n.x || 0,
        o = n.y || 0,
        a = e.getWidth(),
        s = e.getHeight(),
        l = r.width / r.height;
      if (
        (null == a && null != s
          ? (a = s * l)
          : null == s && null != a
          ? (s = a / l)
          : null == a && null == s && ((a = r.width), (s = r.height)),
        n.sWidth && n.sHeight)
      ) {
        var u = n.sx || 0,
          h = n.sy || 0;
        t.drawImage(r, u, h, n.sWidth, n.sHeight, i, o, a, s);
      } else if (n.sx && n.sy) {
        var u = n.sx,
          h = n.sy,
          c = a - u,
          p = s - h;
        t.drawImage(r, u, h, c, p, i, o, a, s);
      } else t.drawImage(r, i, o, a, s);
    }
  }
  function Kh(t, e, n) {
    var r,
      i = n.text;
    if ((null != i && (i += ""), i)) {
      (t.font = n.font || mg),
        (t.textAlign = n.textAlign),
        (t.textBaseline = n.textBaseline);
      var o = void 0,
        a = void 0;
      t.setLineDash && n.lineDash && ((r = Hh(e)), (o = r[0]), (a = r[1])),
        o && (t.setLineDash(o), (t.lineDashOffset = a)),
        n.strokeFirst
          ? (Wh(n) && t.strokeText(i, n.x, n.y),
            Uh(n) && t.fillText(i, n.x, n.y))
          : (Uh(n) && t.fillText(i, n.x, n.y),
            Wh(n) && t.strokeText(i, n.x, n.y)),
        o && t.setLineDash([]);
    }
  }
  function $h(t, e, n, r, i) {
    var o = !1;
    if (!r && ((n = n || {}), e === n)) return !1;
    if (r || e.opacity !== n.opacity) {
      ic(t, i), (o = !0);
      var a = Math.max(Math.min(e.opacity, 1), 0);
      t.globalAlpha = isNaN(a) ? dm.opacity : a;
    }
    (r || e.blend !== n.blend) &&
      (o || (ic(t, i), (o = !0)),
      (t.globalCompositeOperation = e.blend || dm.blend));
    for (var s = 0; s < FS.length; s++) {
      var l = FS[s];
      (r || e[l] !== n[l]) &&
        (o || (ic(t, i), (o = !0)), (t[l] = t.dpr * (e[l] || 0)));
    }
    return (
      (r || e.shadowColor !== n.shadowColor) &&
        (o || (ic(t, i), (o = !0)),
        (t.shadowColor = e.shadowColor || dm.shadowColor)),
      o
    );
  }
  function Qh(t, e, n, r, i) {
    var o = oc(e, i.inHover),
      a = r ? null : (n && oc(n, i.inHover)) || {};
    if (o === a) return !1;
    var s = $h(t, o, a, r, i);
    if (
      ((r || o.fill !== a.fill) &&
        (s || (ic(t, i), (s = !0)), Gh(o.fill) && (t.fillStyle = o.fill)),
      (r || o.stroke !== a.stroke) &&
        (s || (ic(t, i), (s = !0)), Gh(o.stroke) && (t.strokeStyle = o.stroke)),
      (r || o.opacity !== a.opacity) &&
        (s || (ic(t, i), (s = !0)),
        (t.globalAlpha = null == o.opacity ? 1 : o.opacity)),
      e.hasStroke())
    ) {
      var l = o.lineWidth,
        u = l / (o.strokeNoScale && e.getLineScale ? e.getLineScale() : 1);
      t.lineWidth !== u && (s || (ic(t, i), (s = !0)), (t.lineWidth = u));
    }
    for (var h = 0; h < VS.length; h++) {
      var c = VS[h],
        p = c[0];
      (r || o[p] !== a[p]) &&
        (s || (ic(t, i), (s = !0)), (t[p] = o[p] || c[1]));
    }
    return s;
  }
  function Jh(t, e, n, r, i) {
    return $h(t, oc(e, i.inHover), n && oc(n, i.inHover), r, i);
  }
  function tc(t, e) {
    var n = e.transform,
      r = t.dpr || 1;
    n
      ? t.setTransform(
          r * n[0],
          r * n[1],
          r * n[2],
          r * n[3],
          r * n[4],
          r * n[5]
        )
      : t.setTransform(r, 0, 0, r, 0, 0);
  }
  function ec(t, e, n) {
    for (var r = !1, i = 0; i < t.length; i++) {
      var o = t[i];
      (r = r || o.isZeroArea()),
        tc(e, o),
        e.beginPath(),
        o.buildPath(e, o.shape),
        e.clip();
    }
    n.allClipped = r;
  }
  function nc(t, e) {
    return t && e
      ? t[0] !== e[0] ||
          t[1] !== e[1] ||
          t[2] !== e[2] ||
          t[3] !== e[3] ||
          t[4] !== e[4] ||
          t[5] !== e[5]
      : t || e
      ? !0
      : !1;
  }
  function rc(t) {
    var e = Uh(t),
      n = Wh(t);
    return !(
      t.lineDash ||
      !(+e ^ +n) ||
      (e && "string" != typeof t.fill) ||
      (n && "string" != typeof t.stroke) ||
      t.strokePercent < 1 ||
      t.strokeOpacity < 1 ||
      t.fillOpacity < 1
    );
  }
  function ic(t, e) {
    e.batchFill && t.fill(),
      e.batchStroke && t.stroke(),
      (e.batchFill = ""),
      (e.batchStroke = "");
  }
  function oc(t, e) {
    return e ? t.__hoverStyle || t.style : t.style;
  }
  function ac(t, e) {
    sc(t, e, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
  }
  function sc(t, e, n, r) {
    var i = e.transform;
    if (!e.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1))
      return (e.__dirty &= ~pv), void (e.__isRendered = !1);
    var o = e.__clipPaths,
      a = n.prevElClipPaths,
      s = !1,
      l = !1;
    if (
      ((!a || Nh(o, a)) &&
        (a &&
          a.length &&
          (ic(t, n),
          t.restore(),
          (l = s = !0),
          (n.prevElClipPaths = null),
          (n.allClipped = !1),
          (n.prevEl = null)),
        o && o.length && (ic(t, n), t.save(), ec(o, t, n), (s = !0)),
        (n.prevElClipPaths = o)),
      n.allClipped)
    )
      return void (e.__isRendered = !1);
    e.beforeBrush && e.beforeBrush(), e.innerBeforeBrush();
    var u = n.prevEl;
    u || (l = s = !0);
    var h = e instanceof i_ && e.autoBatch && rc(e.style);
    s || nc(i, u.transform) ? (ic(t, n), tc(t, e)) : h || ic(t, n);
    var c = oc(e, n.inHover);
    e instanceof i_
      ? (n.lastDrawType !== HS && ((l = !0), (n.lastDrawType = HS)),
        Qh(t, e, u, l, n),
        (h && (n.batchFill || n.batchStroke)) || t.beginPath(),
        jh(t, e, c, h),
        h && ((n.batchFill = c.fill || ""), (n.batchStroke = c.stroke || "")))
      : e instanceof a_
      ? (n.lastDrawType !== GS && ((l = !0), (n.lastDrawType = GS)),
        Qh(t, e, u, l, n),
        Kh(t, e, c))
      : e instanceof u_
      ? (n.lastDrawType !== WS && ((l = !0), (n.lastDrawType = WS)),
        Jh(t, e, u, l, n),
        Zh(t, e, c))
      : e.getTemporalDisplayables &&
        (n.lastDrawType !== US && ((l = !0), (n.lastDrawType = US)),
        lc(t, e, n)),
      h && r && ic(t, n),
      e.innerAfterBrush(),
      e.afterBrush && e.afterBrush(),
      (n.prevEl = e),
      (e.__dirty = 0),
      (e.__isRendered = !0);
  }
  function lc(t, e, n) {
    var r = e.getDisplayables(),
      i = e.getTemporalDisplayables();
    t.save();
    var o,
      a,
      s = {
        prevElClipPaths: null,
        prevEl: null,
        allClipped: !1,
        viewWidth: n.viewWidth,
        viewHeight: n.viewHeight,
        inHover: n.inHover,
      };
    for (o = e.getCursor(), a = r.length; a > o; o++) {
      var l = r[o];
      l.beforeBrush && l.beforeBrush(),
        l.innerBeforeBrush(),
        sc(t, l, s, o === a - 1),
        l.innerAfterBrush(),
        l.afterBrush && l.afterBrush(),
        (s.prevEl = l);
    }
    for (var u = 0, h = i.length; h > u; u++) {
      var l = i[u];
      l.beforeBrush && l.beforeBrush(),
        l.innerBeforeBrush(),
        sc(t, l, s, u === h - 1),
        l.innerAfterBrush(),
        l.afterBrush && l.afterBrush(),
        (s.prevEl = l);
    }
    e.clearTemporalDisplayables(), (e.notClear = !0), t.restore();
  }
  function uc(t, e) {
    function n(t) {
      function e() {
        for (var t = 1, e = 0, n = y.length; n > e; ++e) t = oi(t, y[e]);
        for (var r = 1, e = 0, n = v.length; n > e; ++e) r = oi(r, v[e].length);
        t *= r;
        var i = m * y.length * v.length;
        return {
          width: Math.max(1, Math.min(t, s.maxTileWidth)),
          height: Math.max(1, Math.min(i, s.maxTileHeight)),
        };
      }
      function n() {
        function t(t, e, n, a, l) {
          var u = o ? 1 : r,
            h = Ph(l, t * u, e * u, n * u, a * u, s.color, s.symbolKeepAspect);
          if (o) {
            var c = i.painter.renderOneToVNode(h);
            c && x.children.push(c);
          } else ac(f, h);
        }
        f &&
          (f.clearRect(0, 0, _.width, _.height),
          s.backgroundColor &&
            ((f.fillStyle = s.backgroundColor),
            f.fillRect(0, 0, _.width, _.height)));
        for (var e = 0, n = 0; n < g.length; ++n) e += g[n];
        if (!(0 >= e))
          for (var a = -m, l = 0, u = 0, h = 0; a < w.height; ) {
            if (l % 2 === 0) {
              for (
                var c = (u / 2) % v.length, p = 0, y = 0, b = 0;
                p < 2 * w.width;

              ) {
                for (var S = 0, n = 0; n < d[h].length; ++n) S += d[h][n];
                if (0 >= S) break;
                if (y % 2 === 0) {
                  var M = 0.5 * (1 - s.symbolSize),
                    T = p + d[h][y] * M,
                    C = a + g[l] * M,
                    k = d[h][y] * s.symbolSize,
                    D = g[l] * s.symbolSize,
                    I = (b / 2) % v[c].length;
                  t(T, C, k, D, v[c][I]);
                }
                (p += d[h][y]), ++b, ++y, y === d[h].length && (y = 0);
              }
              ++h, h === d.length && (h = 0);
            }
            (a += g[l]), ++u, ++l, l === g.length && (l = 0);
          }
      }
      for (var a = [r], l = !0, u = 0; u < YS.length; ++u) {
        var h = s[YS[u]];
        if (null != h && !M(h) && !C(h) && !D(h) && "boolean" != typeof h) {
          l = !1;
          break;
        }
        a.push(h);
      }
      var c;
      if (l) {
        c = a.join(",") + (o ? "-svg" : "");
        var p = qS.get(c);
        p && (o ? (t.svgElement = p) : (t.image = p));
      }
      var f,
        d = cc(s.dashArrayX),
        g = pc(s.dashArrayY),
        v = hc(s.symbol),
        y = fc(d),
        m = dc(g),
        _ = !o && Sg.createCanvas(),
        x = o && { tag: "g", attrs: {}, key: "dcl", children: [] },
        w = e();
      _ &&
        ((_.width = w.width * r),
        (_.height = w.height * r),
        (f = _.getContext("2d"))),
        n(),
        l && qS.put(c, _ || x),
        (t.image = _),
        (t.svgElement = x),
        (t.svgWidth = w.width),
        (t.svgHeight = w.height);
    }
    if ("none" === t) return null;
    var r = e.getDevicePixelRatio(),
      i = e.getZr(),
      o = "svg" === i.painter.type;
    t.dirty && XS["delete"](t);
    var a = XS.get(t);
    if (a) return a;
    var s = c(t, {
      symbol: "rect",
      symbolSize: 1,
      symbolKeepAspect: !0,
      color: "rgba(0, 0, 0, 0.2)",
      backgroundColor: null,
      dashArrayX: 5,
      dashArrayY: 5,
      rotation: 0,
      maxTileWidth: 512,
      maxTileHeight: 512,
    });
    "none" === s.backgroundColor && (s.backgroundColor = null);
    var l = { repeat: "repeat" };
    return (
      n(l),
      (l.rotation = s.rotation),
      (l.scaleX = l.scaleY = o ? 1 : 1 / r),
      XS.set(t, l),
      (t.dirty = !1),
      l
    );
  }
  function hc(t) {
    if (!t || 0 === t.length) return [["rect"]];
    if (C(t)) return [[t]];
    for (var e = !0, n = 0; n < t.length; ++n)
      if (!C(t[n])) {
        e = !1;
        break;
      }
    if (e) return hc([t]);
    for (var r = [], n = 0; n < t.length; ++n) r.push(C(t[n]) ? [t[n]] : t[n]);
    return r;
  }
  function cc(t) {
    if (!t || 0 === t.length) return [[0, 0]];
    if (D(t)) {
      var e = Math.ceil(t);
      return [[e, e]];
    }
    for (var n = !0, r = 0; r < t.length; ++r)
      if (!D(t[r])) {
        n = !1;
        break;
      }
    if (n) return cc([t]);
    for (var i = [], r = 0; r < t.length; ++r)
      if (D(t[r])) {
        var e = Math.ceil(t[r]);
        i.push([e, e]);
      } else {
        var e = y(t[r], function (t) {
          return Math.ceil(t);
        });
        i.push(e.length % 2 === 1 ? e.concat(e) : e);
      }
    return i;
  }
  function pc(t) {
    if (!t || ("object" == typeof t && 0 === t.length)) return [0, 0];
    if (D(t)) {
      var e = Math.ceil(t);
      return [e, e];
    }
    var n = y(t, function (t) {
      return Math.ceil(t);
    });
    return t.length % 2 ? n.concat(n) : n;
  }
  function fc(t) {
    return y(t, function (t) {
      return dc(t);
    });
  }
  function dc(t) {
    for (var e = 0, n = 0; n < t.length; ++n) e += t[n];
    return t.length % 2 === 1 ? 2 * e : e;
  }
  function gc(t, e) {
    t.eachRawSeries(function (n) {
      if (!t.isSeriesFiltered(n)) {
        var r = n.getData();
        r.hasItemVisual() &&
          r.each(function (t) {
            var n = r.getItemVisual(t, "decal");
            if (n) {
              var i = r.ensureUniqueItemVisual(t, "style");
              i.decal = uc(n, e);
            }
          });
        var i = r.getVisual("decal");
        if (i) {
          var o = r.getVisual("style");
          o.decal = uc(i, e);
        }
      }
    });
  }
  function vc(t, e) {
    ZS[t] = e;
  }
  function yc(t) {
    return ZS[t];
  }
  function mc(t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      return this.isDisposed() ? void 0 : xc(this, t, e);
    };
  }
  function _c(t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      return xc(this, t, e);
    };
  }
  function xc(t, e, n) {
    return (n[0] = n[0] && n[0].toLowerCase()), Zg.prototype[e].apply(t, n);
  }
  function wc(t, e, n) {
    var r = !(n && n.ssr);
    if (r) {
      var i = Tc(t);
      if (i) return i;
    }
    var o = new UM(t, e, n);
    return (
      (o.id = "ec_" + nT++),
      (tT[o.id] = o),
      r && Li(t, iT, o.id),
      HM(o),
      jS.trigger("afterinit", o),
      o
    );
  }
  function bc(t) {
    if (M(t)) {
      var e = t;
      (t = null),
        v(e, function (e) {
          null != e.group && (t = e.group);
        }),
        (t = t || "g_" + rT++),
        v(e, function (e) {
          e.group = t;
        });
    }
    return (eT[t] = !0), t;
  }
  function Sc(t) {
    eT[t] = !1;
  }
  function Mc(t) {
    C(t) ? (t = tT[t]) : t instanceof UM || (t = Tc(t)),
      t instanceof UM && !t.isDisposed() && t.dispose();
  }
  function Tc(t) {
    return tT[Pi(t, iT)];
  }
  function Cc(t) {
    return tT[t];
  }
  function kc(t, e) {
    QM[t] = e;
  }
  function Dc(t) {
    p(KM, t) < 0 && KM.push(t);
  }
  function Ic(t, e) {
    zc(ZM, t, e, rM);
  }
  function Ac(t) {
    Pc("afterinit", t);
  }
  function Lc(t) {
    Pc("afterupdate", t);
  }
  function Pc(t, e) {
    jS.on(t, e);
  }
  function Oc(t, e, n) {
    T(e) && ((n = e), (e = ""));
    var r = I(t) ? t.type : [t, (t = { event: e })][0];
    (t.event = (t.event || r).toLowerCase()),
      (e = t.event),
      jM[e] ||
        (W(_M.test(r) && _M.test(e)),
        YM[r] || (YM[r] = { action: n, actionInfo: t }),
        (jM[e] = r));
  }
  function Rc(t, e) {
    vb.register(t, e);
  }
  function Ec(t) {
    var e = vb.get(t);
    return e
      ? e.getDimensionsInfo
        ? e.getDimensionsInfo()
        : e.dimensions.slice()
      : void 0;
  }
  function Bc(t, e) {
    zc($M, t, e, oM, "layout");
  }
  function Nc(t, e) {
    zc($M, t, e, lM, "visual");
  }
  function zc(t, e, n, r, i) {
    if (((T(e) || I(e)) && ((n = e), (e = r)), !(p(aT, n) >= 0))) {
      aT.push(n);
      var o = cS.wrapStageHandler(n, i);
      (o.__prio = e), (o.__raw = n), t.push(o);
    }
  }
  function Fc(t, e) {
    JM[t] = e;
  }
  function Vc(t) {
    i({ createCanvas: t });
  }
  function Hc(t, e, n) {
    var r = yc("registerMap");
    r && r(t, e, n);
  }
  function Wc(t) {
    var e = yc("getMap");
    return e && e(t);
  }
  function Gc(t) {
    return null == t ? 0 : t.length || 1;
  }
  function Uc(t) {
    return t;
  }
  function Xc(t, e) {
    var n = {},
      r = (n.encode = {}),
      i = q(),
      o = [],
      a = [],
      s = {};
    v(t.dimensions, function (e) {
      var n = t.getDimensionInfo(e),
        l = n.coordDim;
      if (l) {
        var u = n.coordDimIndex;
        (qc(r, l)[u] = e),
          n.isExtraCoord ||
            (i.set(l, 1),
            jc(n.type) && (o[0] = e),
            (qc(s, l)[u] = t.getDimensionIndex(n.name))),
          n.defaultTooltip && a.push(e);
      }
      Uw.each(function (t, e) {
        var i = qc(r, e),
          o = n.otherDims[e];
        null != o && o !== !1 && (i[o] = n.name);
      });
    });
    var l = [],
      u = {};
    i.each(function (t, e) {
      var n = r[e];
      (u[e] = n[0]), (l = l.concat(n));
    }),
      (n.dataDimsOnCoord = l),
      (n.dataDimIndicesOnCoord = y(l, function (e) {
        return t.getDimensionInfo(e).storeDimIndex;
      })),
      (n.encodeFirstDimNotExtra = u);
    var h = r.label;
    h && h.length && (o = h.slice());
    var c = r.tooltip;
    return (
      c && c.length ? (a = c.slice()) : a.length || (a = o.slice()),
      (r.defaultedLabel = o),
      (r.defaultedTooltip = a),
      (n.userOutput = new yT(s, e)),
      n
    );
  }
  function qc(t, e) {
    return t.hasOwnProperty(e) || (t[e] = []), t[e];
  }
  function Yc(t) {
    return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
  }
  function jc(t) {
    return !("ordinal" === t || "time" === t);
  }
  function Zc(t) {
    return t instanceof wT;
  }
  function Kc(t) {
    for (var e = q(), n = 0; n < (t || []).length; n++) {
      var r = t[n],
        i = I(r) ? r.name : r;
      null != i && null == e.get(i) && e.set(i, n);
    }
    return e;
  }
  function $c(t) {
    var e = _T(t);
    return e.dimNameMap || (e.dimNameMap = Kc(t.dimensionsDefine));
  }
  function Qc(t) {
    return t > 30;
  }
  function Jc(t, e) {
    return tp(t, e).dimensions;
  }
  function tp(t, e) {
    function n(t) {
      var e = m[t];
      if (0 > e) {
        var n = a[t],
          r = I(n) ? n : { name: n },
          i = new mT(),
          o = r.name;
        null != o && null != d.get(o) && (i.name = i.displayName = o),
          null != r.type && (i.type = r.type),
          null != r.displayName && (i.displayName = r.displayName);
        var s = l.length;
        return (m[t] = s), (i.storeDimIndex = t), l.push(i), i;
      }
      return l[e];
    }
    function r(t, e, n) {
      null != Uw.get(e)
        ? (t.otherDims[e] = n)
        : ((t.coordDim = e), (t.coordDimIndex = n), s.set(e, !0));
    }
    function i(t) {
      null == t.name && (t.name = t.coordDim);
    }
    gu(t) || (t = yu(t)), (e = e || {});
    var o = e.coordDimensions || [],
      a = e.dimensionsDefine || t.dimensionsDefine || [],
      s = q(),
      l = [],
      u = np(t, o, a, e.dimensionsCount),
      p = e.canOmitUnusedDimensions && Qc(u),
      f = a === t.dimensionsDefine,
      d = f ? $c(t) : Kc(a),
      g = e.encodeDefine;
    !g && e.encodeDefaulter && (g = e.encodeDefaulter(t, u));
    for (var y = q(g), m = new Gb(u), _ = 0; _ < m.length; _++) m[_] = -1;
    if (!p) for (var _ = 0; u > _; _++) n(_);
    y.each(function (t, e) {
      var i = li(t).slice();
      if (1 === i.length && !C(i[0]) && i[0] < 0) return void y.set(e, !1);
      var o = y.set(e, []);
      v(i, function (t, i) {
        var a = C(t) ? d.get(t) : t;
        null != a && u > a && ((o[i] = a), r(n(a), e, i));
      });
    });
    var x = 0;
    v(o, function (t) {
      var e, i, o, a;
      if (C(t)) (e = t), (a = {});
      else {
        (a = t), (e = a.name);
        var s = a.ordinalMeta;
        (a.ordinalMeta = null),
          (a = h({}, a)),
          (a.ordinalMeta = s),
          (i = a.dimsDef),
          (o = a.otherDims),
          (a.name =
            a.coordDim =
            a.coordDimIndex =
            a.dimsDef =
            a.otherDims =
              null);
      }
      var l = y.get(e);
      if (l !== !1) {
        if (((l = li(l)), !l.length))
          for (var p = 0; p < ((i && i.length) || 1); p++) {
            for (; u > x && null != n(x).coordDim; ) x++;
            u > x && l.push(x++);
          }
        v(l, function (t, s) {
          var l = n(t);
          if (
            (f && null != a.type && (l.type = a.type),
            r(c(l, a), e, s),
            null == l.name && i)
          ) {
            var u = i[s];
            !I(u) && (u = { name: u }),
              (l.name = l.displayName = u.name),
              (l.defaultTooltip = u.defaultTooltip);
          }
          o && c(l.otherDims, o);
        });
      }
    });
    var w = e.generateCoord,
      b = e.generateCoordCount,
      S = null != b;
    b = w ? b || 1 : 0;
    var M = w || "value";
    if (p)
      v(l, function (t) {
        i(t);
      }),
        l.sort(function (t, e) {
          return t.storeDimIndex - e.storeDimIndex;
        });
    else
      for (var T = 0; u > T; T++) {
        var k = n(T),
          D = k.coordDim;
        null == D &&
          ((k.coordDim = rp(M, s, S)),
          (k.coordDimIndex = 0),
          (!w || 0 >= b) && (k.isExtraCoord = !0),
          b--),
          i(k),
          null != k.type ||
            (Rl(t, T) !== Jw.Must &&
              (!k.isExtraCoord ||
                (null == k.otherDims.itemName &&
                  null == k.otherDims.seriesName))) ||
            (k.type = "ordinal");
      }
    return (
      ep(l),
      new wT({
        source: t,
        dimensions: l,
        fullDimensionCount: u,
        dimensionOmitted: p,
      })
    );
  }
  function ep(t) {
    for (var e = q(), n = 0; n < t.length; n++) {
      var r = t[n],
        i = r.name,
        o = e.get(i) || 0;
      o > 0 && (r.name = i + (o - 1)), o++, e.set(i, o);
    }
  }
  function np(t, e, n, r) {
    var i = Math.max(
      t.dimensionsDetectedCount || 1,
      e.length,
      n.length,
      r || 0
    );
    return (
      v(e, function (t) {
        var e;
        I(t) && (e = t.dimsDef) && (i = Math.max(i, e.length));
      }),
      i
    );
  }
  function rp(t, e, n) {
    var r = e.data;
    if (n || r.hasOwnProperty(t)) {
      for (var i = 0; r.hasOwnProperty(t + i); ) i++;
      t += i;
    }
    return e.set(t, !0), t;
  }
  function ip(t) {
    var e = t.get("coordinateSystem"),
      n = new AT(e),
      r = LT[e];
    return r ? (r(t, n, n.axisMap, n.categoryAxisMap), n) : void 0;
  }
  function op(t) {
    return "category" === t.get("type");
  }
  function ap(t, e, n) {
    n = n || {};
    var r,
      i,
      o,
      a = n.byIndex,
      s = n.stackedCoordDimension;
    sp(e) ? (r = e) : ((i = e.schema), (r = i.dimensions), (o = e.store));
    var l,
      u,
      h,
      c,
      p = !(!t || !t.get("stack"));
    if (
      (v(r, function (t, e) {
        C(t) && (r[e] = t = { name: t }),
          p &&
            !t.isExtraCoord &&
            (a || l || !t.ordinalMeta || (l = t),
            u ||
              "ordinal" === t.type ||
              "time" === t.type ||
              (s && s !== t.coordDim) ||
              (u = t));
      }),
      !u || a || l || (a = !0),
      u)
    ) {
      (h = "__\x00ecstackresult_" + t.id),
        (c = "__\x00ecstackedover_" + t.id),
        l && (l.createInvertedIndices = !0);
      var f = u.coordDim,
        d = u.type,
        g = 0;
      v(r, function (t) {
        t.coordDim === f && g++;
      });
      var y = {
          name: h,
          coordDim: f,
          coordDimIndex: g,
          type: d,
          isExtraCoord: !0,
          isCalculationCoord: !0,
          storeDimIndex: r.length,
        },
        m = {
          name: c,
          coordDim: c,
          coordDimIndex: g + 1,
          type: d,
          isExtraCoord: !0,
          isCalculationCoord: !0,
          storeDimIndex: r.length + 1,
        };
      i
        ? (o &&
            ((y.storeDimIndex = o.ensureCalculationDimension(c, d)),
            (m.storeDimIndex = o.ensureCalculationDimension(h, d))),
          i.appendCalculationDimension(y),
          i.appendCalculationDimension(m))
        : (r.push(y), r.push(m));
    }
    return {
      stackedDimension: u && u.name,
      stackedByDimension: l && l.name,
      isStackedByIndex: a,
      stackedOverDimension: c,
      stackResultDimension: h,
    };
  }
  function sp(t) {
    return !Zc(t.schema);
  }
  function lp(t, e) {
    return !!e && e === t.getCalculationInfo("stackedDimension");
  }
  function up(t, e) {
    return lp(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
  }
  function hp(t, e) {
    var n,
      r = t.get("coordinateSystem"),
      i = vb.get(r);
    return (
      e &&
        e.coordSysDims &&
        (n = y(e.coordSysDims, function (t) {
          var n = { name: t },
            r = e.axisMap.get(t);
          if (r) {
            var i = r.get("type");
            n.type = Yc(i);
          }
          return n;
        })),
      n ||
        (n = (i &&
          (i.getDimensionsInfo
            ? i.getDimensionsInfo()
            : i.dimensions.slice())) || ["x", "y"]),
      n
    );
  }
  function cp(t, e, n) {
    var r, i;
    return (
      n &&
        v(t, function (t, o) {
          var a = t.coordDim,
            s = n.categoryAxisMap.get(a);
          s &&
            (null == r && (r = o),
            (t.ordinalMeta = s.getOrdinalMeta()),
            e && (t.createInvertedIndices = !0)),
            null != t.otherDims.itemName && (i = !0);
        }),
      i || null == r || (t[r].otherDims.itemName = 0),
      r
    );
  }
  function pp(t, e, n) {
    n = n || {};
    var r,
      i = e.getSourceManager(),
      o = !1;
    t
      ? ((o = !0), (r = yu(t)))
      : ((r = i.getSource()), (o = r.sourceFormat === Xw));
    var a = ip(e),
      s = hp(e, a),
      l = n.useEncodeDefaulter,
      u = T(l) ? l : l ? S(Ll, s, e) : null,
      h = {
        coordDimensions: s,
        generateCoord: n.generateCoord,
        encodeDefine: e.getEncode(),
        encodeDefaulter: u,
        canOmitUnusedDimensions: !o,
      },
      c = tp(r, h),
      p = cp(c.dimensions, n.createInvertedIndices, a),
      f = o ? null : i.getSharedDataStore(c),
      d = ap(e, { schema: c, store: f }),
      g = new IT(c, e);
    g.setCalculationInfo(d);
    var v =
      null != p && fp(r)
        ? function (t, e, n, r) {
            return r === p ? n : this.defaultDimValueGetter(t, e, n, r);
          }
        : null;
    return (g.hasItemOption = !1), g.initData(o ? r : f, null, v), g;
  }
  function fp(t) {
    if (t.sourceFormat === Xw) {
      var e = dp(t.data || []);
      return !M(hi(e));
    }
  }
  function dp(t) {
    for (var e = 0; e < t.length && null == t[e]; ) e++;
    return t[e];
  }
  function gp(t) {
    return I(t) && null != t.value ? t.value : t + "";
  }
  function vp(t) {
    return "interval" === t.type || "log" === t.type;
  }
  function yp(t, e, n, r) {
    var i = {},
      o = t[1] - t[0],
      a = (i.interval = Qr(o / e, !0));
    null != n && n > a && (a = i.interval = n),
      null != r && a > r && (a = i.interval = r);
    var s = (i.intervalPrecision = _p(a)),
      l = (i.niceTickExtent = [
        Vr(Math.ceil(t[0] / a) * a, s),
        Vr(Math.floor(t[1] / a) * a, s),
      ]);
    return wp(l, t), i;
  }
  function mp(t) {
    var e = Math.pow(10, $r(t)),
      n = t / e;
    return (
      n ? (2 === n ? (n = 3) : 3 === n ? (n = 5) : (n *= 2)) : (n = 1),
      Vr(n * e)
    );
  }
  function _p(t) {
    return Wr(t) + 2;
  }
  function xp(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
  }
  function wp(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]),
      !isFinite(t[1]) && (t[1] = e[1]),
      xp(t, 0, e),
      xp(t, 1, e),
      t[0] > t[1] && (t[0] = t[1]);
  }
  function bp(t, e) {
    return t >= e[0] && t <= e[1];
  }
  function Sp(t, e) {
    return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0]);
  }
  function Mp(t, e) {
    return t * (e[1] - e[0]) + e[0];
  }
  function Tp(t) {
    return M(t) ? (zT ? new Float32Array(t) : t) : new FT(t);
  }
  function Cp(t) {
    return t.get("stack") || VT + t.seriesIndex;
  }
  function kp(t) {
    return t.dim + t.index;
  }
  function Dp(t, e) {
    var n = [];
    return (
      e.eachSeriesByType(t, function (t) {
        Ep(t) && n.push(t);
      }),
      n
    );
  }
  function Ip(t) {
    var e = {};
    v(t, function (t) {
      var n = t.coordinateSystem,
        r = n.getBaseAxis();
      if ("time" === r.type || "value" === r.type)
        for (
          var i = t.getData(),
            o = r.dim + "_" + r.index,
            a = i.getDimensionIndex(i.mapDimension(r.dim)),
            s = i.getStore(),
            l = 0,
            u = s.count();
          u > l;
          ++l
        ) {
          var h = s.get(a, l);
          e[o] ? e[o].push(h) : (e[o] = [h]);
        }
    });
    var n = {};
    for (var r in e)
      if (e.hasOwnProperty(r)) {
        var i = e[r];
        if (i) {
          i.sort(function (t, e) {
            return t - e;
          });
          for (var o = null, a = 1; a < i.length; ++a) {
            var s = i[a] - i[a - 1];
            s > 0 && (o = null === o ? s : Math.min(o, s));
          }
          n[r] = o;
        }
      }
    return n;
  }
  function Ap(t) {
    var e = Ip(t),
      n = [];
    return (
      v(t, function (t) {
        var r,
          i = t.coordinateSystem,
          o = i.getBaseAxis(),
          a = o.getExtent();
        if ("category" === o.type) r = o.getBandWidth();
        else if ("value" === o.type || "time" === o.type) {
          var s = o.dim + "_" + o.index,
            l = e[s],
            u = Math.abs(a[1] - a[0]),
            h = o.scale.getExtent(),
            c = Math.abs(h[1] - h[0]);
          r = l ? (u / c) * l : u;
        } else {
          var p = t.getData();
          r = Math.abs(a[1] - a[0]) / p.count();
        }
        var f = Fr(t.get("barWidth"), r),
          d = Fr(t.get("barMaxWidth"), r),
          g = Fr(t.get("barMinWidth") || (Bp(t) ? 0.5 : 1), r),
          v = t.get("barGap"),
          y = t.get("barCategoryGap");
        n.push({
          bandWidth: r,
          barWidth: f,
          barMaxWidth: d,
          barMinWidth: g,
          barGap: v,
          barCategoryGap: y,
          axisKey: kp(o),
          stackId: Cp(t),
        });
      }),
      Lp(n)
    );
  }
  function Lp(t) {
    var e = {};
    v(t, function (t) {
      var n = t.axisKey,
        r = t.bandWidth,
        i = e[n] || {
          bandWidth: r,
          remainedWidth: r,
          autoWidthCount: 0,
          categoryGap: null,
          gap: "20%",
          stacks: {},
        },
        o = i.stacks;
      e[n] = i;
      var a = t.stackId;
      o[a] || i.autoWidthCount++, (o[a] = o[a] || { width: 0, maxWidth: 0 });
      var s = t.barWidth;
      s &&
        !o[a].width &&
        ((o[a].width = s),
        (s = Math.min(i.remainedWidth, s)),
        (i.remainedWidth -= s));
      var l = t.barMaxWidth;
      l && (o[a].maxWidth = l);
      var u = t.barMinWidth;
      u && (o[a].minWidth = u);
      var h = t.barGap;
      null != h && (i.gap = h);
      var c = t.barCategoryGap;
      null != c && (i.categoryGap = c);
    });
    var n = {};
    return (
      v(e, function (t, e) {
        n[e] = {};
        var r = t.stacks,
          i = t.bandWidth,
          o = t.categoryGap;
        if (null == o) {
          var a = w(r).length;
          o = Math.max(35 - 4 * a, 15) + "%";
        }
        var s = Fr(o, i),
          l = Fr(t.gap, 1),
          u = t.remainedWidth,
          h = t.autoWidthCount,
          c = (u - s) / (h + (h - 1) * l);
        (c = Math.max(c, 0)),
          v(r, function (t) {
            var e = t.maxWidth,
              n = t.minWidth;
            if (t.width) {
              var r = t.width;
              e && (r = Math.min(r, e)),
                n && (r = Math.max(r, n)),
                (t.width = r),
                (u -= r + l * r),
                h--;
            } else {
              var r = c;
              e && r > e && (r = Math.min(e, u)),
                n && n > r && (r = n),
                r !== c && ((t.width = r), (u -= r + l * r), h--);
            }
          }),
          (c = (u - s) / (h + (h - 1) * l)),
          (c = Math.max(c, 0));
        var p,
          f = 0;
        v(r, function (t) {
          t.width || (t.width = c), (p = t), (f += t.width * (1 + l));
        }),
          p && (f -= p.width * l);
        var d = -f / 2;
        v(r, function (t, r) {
          (n[e][r] = n[e][r] || { bandWidth: i, offset: d, width: t.width }),
            (d += t.width * (1 + l));
        });
      }),
      n
    );
  }
  function Pp(t, e, n) {
    if (t && e) {
      var r = t[kp(e)];
      return null != r && null != n ? r[Cp(n)] : r;
    }
  }
  function Op(t, e) {
    var n = Dp(t, e),
      r = Ap(n);
    v(n, function (t) {
      var e = t.getData(),
        n = t.coordinateSystem,
        i = n.getBaseAxis(),
        o = Cp(t),
        a = r[kp(i)][o],
        s = a.offset,
        l = a.width;
      e.setLayout({ bandWidth: a.bandWidth, offset: s, size: l });
    });
  }
  function Rp(t) {
    return {
      seriesType: t,
      plan: sh(),
      reset: function (t) {
        if (Ep(t)) {
          var e = t.getData(),
            n = t.coordinateSystem,
            r = n.getBaseAxis(),
            i = n.getOtherAxis(r),
            o = e.getDimensionIndex(e.mapDimension(i.dim)),
            a = e.getDimensionIndex(e.mapDimension(r.dim)),
            s = t.get("showBackground", !0),
            l = e.mapDimension(i.dim),
            u = e.getCalculationInfo("stackResultDimension"),
            h = lp(e, l) && !!e.getCalculationInfo("stackedOnSeries"),
            c = i.isHorizontal(),
            p = Np(r, i),
            f = Bp(t),
            d = t.get("barMinHeight") || 0,
            g = u && e.getDimensionIndex(u),
            v = e.getLayout("size"),
            y = e.getLayout("offset");
          return {
            progress: function (t, e) {
              for (
                var r,
                  i = t.count,
                  l = f && Tp(3 * i),
                  u = f && s && Tp(3 * i),
                  m = f && Tp(i),
                  _ = n.master.getRect(),
                  x = c ? _.width : _.height,
                  w = e.getStore(),
                  b = 0;
                null != (r = t.next());

              ) {
                var S = w.get(h ? g : o, r),
                  M = w.get(a, r),
                  T = p,
                  C = void 0;
                h && (C = +S - w.get(o, r));
                var k = void 0,
                  D = void 0,
                  I = void 0,
                  A = void 0;
                if (c) {
                  var L = n.dataToPoint([S, M]);
                  if (h) {
                    var P = n.dataToPoint([C, M]);
                    T = P[0];
                  }
                  (k = T),
                    (D = L[1] + y),
                    (I = L[0] - T),
                    (A = v),
                    Math.abs(I) < d && (I = (0 > I ? -1 : 1) * d);
                } else {
                  var L = n.dataToPoint([M, S]);
                  if (h) {
                    var P = n.dataToPoint([M, C]);
                    T = P[1];
                  }
                  (k = L[0] + y),
                    (D = T),
                    (I = v),
                    (A = L[1] - T),
                    Math.abs(A) < d && (A = (0 >= A ? -1 : 1) * d);
                }
                f
                  ? ((l[b] = k),
                    (l[b + 1] = D),
                    (l[b + 2] = c ? I : A),
                    u &&
                      ((u[b] = c ? _.x : k),
                      (u[b + 1] = c ? D : _.y),
                      (u[b + 2] = x)),
                    (m[r] = r))
                  : e.setItemLayout(r, { x: k, y: D, width: I, height: A }),
                  (b += 3);
              }
              f &&
                e.setLayout({
                  largePoints: l,
                  largeDataIndices: m,
                  largeBackgroundPoints: u,
                  valueAxisHorizontal: c,
                });
            },
          };
        }
      },
    };
  }
  function Ep(t) {
    return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
  }
  function Bp(t) {
    return t.pipelineContext && t.pipelineContext.large;
  }
  function Np(t, e) {
    return e.toGlobalCoord(e.dataToCoord("log" === e.type ? 1 : 0));
  }
  function zp(t, e, n, r) {
    var i = Zr(e),
      o = Zr(n),
      a = function (t) {
        return Js(i, t, r) === Js(o, t, r);
      },
      s = function () {
        return a("year");
      },
      l = function () {
        return s() && a("month");
      },
      u = function () {
        return l() && a("day");
      },
      h = function () {
        return u() && a("hour");
      },
      c = function () {
        return h() && a("minute");
      },
      p = function () {
        return c() && a("second");
      },
      f = function () {
        return p() && a("millisecond");
      };
    switch (t) {
      case "year":
        return s();
      case "month":
        return l();
      case "day":
        return u();
      case "hour":
        return h();
      case "minute":
        return c();
      case "second":
        return p();
      case "millisecond":
        return f();
    }
  }
  function Fp(t) {
    return (t /= bw), t > 16 ? 16 : t > 7.5 ? 7 : t > 3.5 ? 4 : t > 1.5 ? 2 : 1;
  }
  function Vp(t) {
    var e = 30 * bw;
    return (t /= e), t > 6 ? 6 : t > 3 ? 3 : t > 2 ? 2 : 1;
  }
  function Hp(t) {
    return (t /= ww), t > 12 ? 12 : t > 6 ? 6 : t > 3.5 ? 4 : t > 2 ? 2 : 1;
  }
  function Wp(t, e) {
    return (
      (t /= e ? xw : _w),
      t > 30
        ? 30
        : t > 20
        ? 20
        : t > 15
        ? 15
        : t > 10
        ? 10
        : t > 5
        ? 5
        : t > 2
        ? 2
        : 1
    );
  }
  function Gp(t) {
    return Qr(t, !0);
  }
  function Up(t, e, n) {
    var r = new Date(t);
    switch (Ys(e)) {
      case "year":
      case "month":
        r[ll(n)](0);
      case "day":
        r[ul(n)](1);
      case "hour":
        r[hl(n)](0);
      case "minute":
        r[cl(n)](0);
      case "second":
        r[pl(n)](0), r[fl(n)](0);
    }
    return r.getTime();
  }
  function Xp(t, e, n, r) {
    function i(t, e, n, i, o, a, s) {
      for (var l = new Date(e), u = e, h = l[i](); n > u && u <= r[1]; )
        s.push({ value: u }), (h += t), l[o](h), (u = l.getTime());
      s.push({ value: u, notAdd: !0 });
    }
    function o(t, o, a) {
      var s = [],
        l = !o.length;
      if (!zp(Ys(t), r[0], r[1], n)) {
        l && (o = [{ value: Up(new Date(r[0]), t, n) }, { value: r[1] }]);
        for (var u = 0; u < o.length - 1; u++) {
          var h = o[u].value,
            c = o[u + 1].value;
          if (h !== c) {
            var p = void 0,
              f = void 0,
              d = void 0,
              g = !1;
            switch (t) {
              case "year":
                (p = Math.max(1, Math.round(e / bw / 365))),
                  (f = tl(n)),
                  (d = sl(n));
                break;
              case "half-year":
              case "quarter":
              case "month":
                (p = Vp(e)), (f = el(n)), (d = ll(n));
                break;
              case "week":
              case "half-week":
              case "day":
                (p = Fp(e, 31)), (f = nl(n)), (d = ul(n)), (g = !0);
                break;
              case "half-day":
              case "quarter-day":
              case "hour":
                (p = Hp(e)), (f = rl(n)), (d = hl(n));
                break;
              case "minute":
                (p = Wp(e, !0)), (f = il(n)), (d = cl(n));
                break;
              case "second":
                (p = Wp(e, !1)), (f = ol(n)), (d = pl(n));
                break;
              case "millisecond":
                (p = Gp(e)), (f = al(n)), (d = fl(n));
            }
            i(p, h, c, f, d, g, s),
              "year" === t &&
                a.length > 1 &&
                0 === u &&
                a.unshift({ value: a[0].value - p });
          }
        }
        for (var u = 0; u < s.length; u++) a.push(s[u]);
        return s;
      }
    }
    for (
      var a = 1e4, s = Dw, l = 0, u = [], h = [], c = 0, p = 0, f = 0;
      f < s.length && l++ < a;
      ++f
    ) {
      var d = Ys(s[f]);
      if (js(s[f])) {
        o(s[f], u[u.length - 1] || [], h);
        var g = s[f + 1] ? Ys(s[f + 1]) : null;
        if (d !== g) {
          if (h.length) {
            (p = c),
              h.sort(function (t, e) {
                return t.value - e.value;
              });
            for (var v = [], m = 0; m < h.length; ++m) {
              var x = h[m].value;
              (0 === m || h[m - 1].value !== x) &&
                (v.push(h[m]), x >= r[0] && x <= r[1] && c++);
            }
            var w = (r[1] - r[0]) / e;
            if (c > 1.5 * w && p > w / 1.5) break;
            if ((u.push(v), c > w || t === s[f])) break;
          }
          h = [];
        }
      }
    }
    for (
      var b = _(
          y(u, function (t) {
            return _(t, function (t) {
              return t.value >= r[0] && t.value <= r[1] && !t.notAdd;
            });
          }),
          function (t) {
            return t.length > 0;
          }
        ),
        S = [],
        M = b.length - 1,
        f = 0;
      f < b.length;
      ++f
    )
      for (var T = b[f], C = 0; C < T.length; ++C)
        S.push({ value: T[C].value, level: M - f });
    S.sort(function (t, e) {
      return t.value - e.value;
    });
    for (var k = [], f = 0; f < S.length; ++f)
      (0 === f || S[f].value !== S[f - 1].value) && k.push(S[f]);
    return k;
  }
  function qp(t, e) {
    return qT(t, Wr(e));
  }
  function Yp(t, e, n) {
    var r = t.rawExtentInfo;
    return r ? r : ((r = new JT(t, e, n)), (t.rawExtentInfo = r), r);
  }
  function jp(t, e) {
    return null == e ? null : B(e) ? 0 / 0 : t.parse(e);
  }
  function Zp(t, e) {
    var n = t.type,
      r = Yp(t, e, t.getExtent()).calculate();
    t.setBlank(r.isBlank);
    var i = r.min,
      o = r.max,
      a = e.ecModel;
    if (a && "time" === n) {
      var s = Dp("bar", a),
        l = !1;
      if (
        (v(s, function (t) {
          l = l || t.getBaseAxis() === e.axis;
        }),
        l)
      ) {
        var u = Ap(s),
          h = Kp(i, o, e, u);
        (i = h.min), (o = h.max);
      }
    }
    return { extent: [i, o], fixMin: r.minFixed, fixMax: r.maxFixed };
  }
  function Kp(t, e, n, r) {
    var i = n.axis.getExtent(),
      o = i[1] - i[0],
      a = Pp(r, n.axis);
    if (void 0 === a) return { min: t, max: e };
    var s = 1 / 0;
    v(a, function (t) {
      s = Math.min(t.offset, s);
    });
    var l = -1 / 0;
    v(a, function (t) {
      l = Math.max(t.offset + t.width, l);
    }),
      (s = Math.abs(s)),
      (l = Math.abs(l));
    var u = s + l,
      h = e - t,
      c = 1 - (s + l) / o,
      p = h / c - h;
    return (e += p * (l / u)), (t -= p * (s / u)), { min: t, max: e };
  }
  function $p(t, e) {
    var n = e,
      r = Zp(t, n),
      i = r.extent,
      o = n.get("splitNumber");
    t instanceof $T && (t.base = n.get("logBase"));
    var a = t.type,
      s = n.get("interval"),
      l = "interval" === a || "time" === a;
    t.setExtent(i[0], i[1]),
      t.calcNiceExtent({
        splitNumber: o,
        fixMin: r.fixMin,
        fixMax: r.fixMax,
        minInterval: l ? n.get("minInterval") : null,
        maxInterval: l ? n.get("maxInterval") : null,
      }),
      null != s && t.setInterval && t.setInterval(s);
  }
  function Qp(t, e) {
    if ((e = e || t.get("type")))
      switch (e) {
        case "category":
          return new ET({
            ordinalMeta: t.getOrdinalMeta
              ? t.getOrdinalMeta()
              : t.getCategories(),
            extent: [1 / 0, -1 / 0],
          });
        case "time":
          return new WT({
            locale: t.ecModel.getLocaleModel(),
            useUTC: t.ecModel.get("useUTC"),
          });
        default:
          return new (PT.getClass(e) || NT)();
      }
  }
  function Jp(t) {
    var e = t.scale.getExtent(),
      n = e[0],
      r = e[1];
    return !((n > 0 && r > 0) || (0 > n && 0 > r));
  }
  function tf(t) {
    var e = t.getLabelModel().get("formatter"),
      n = "category" === t.type ? t.scale.getExtent()[0] : null;
    return "time" === t.scale.type
      ? (function (e) {
          return function (n, r) {
            return t.scale.getFormattedLabel(n, r, e);
          };
        })(e)
      : C(e)
      ? (function (e) {
          return function (n) {
            var r = t.scale.getLabel(n),
              i = e.replace("{value}", null != r ? r : "");
            return i;
          };
        })(e)
      : T(e)
      ? (function (e) {
          return function (r, i) {
            return (
              null != n && (i = r.value - n),
              e(ef(t, r), i, null != r.level ? { level: r.level } : null)
            );
          };
        })(e)
      : function (e) {
          return t.scale.getLabel(e);
        };
  }
  function ef(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e.value;
  }
  function nf(t) {
    var e = t.model,
      n = t.scale;
    if (e.get(["axisLabel", "show"]) && !n.isBlank()) {
      var r,
        i,
        o = n.getExtent();
      n instanceof ET ? (i = n.count()) : ((r = n.getTicks()), (i = r.length));
      var a,
        s = t.getLabelModel(),
        l = tf(t),
        u = 1;
      i > 40 && (u = Math.ceil(i / 40));
      for (var h = 0; i > h; h += u) {
        var c = r ? r[h] : { value: o[0] + h },
          p = l(c, h),
          f = s.getTextRect(p),
          d = rf(f, s.get("rotate") || 0);
        a ? a.union(d) : (a = d);
      }
      return a;
    }
  }
  function rf(t, e) {
    var n = (e * Math.PI) / 180,
      r = t.width,
      i = t.height,
      o = r * Math.abs(Math.cos(n)) + Math.abs(i * Math.sin(n)),
      a = r * Math.abs(Math.sin(n)) + Math.abs(i * Math.cos(n)),
      s = new Ly(t.x, t.y, o, a);
    return s;
  }
  function of(t) {
    var e = t.get("interval");
    return null == e ? "auto" : e;
  }
  function af(t) {
    return "category" === t.type && 0 === of(t.getLabelModel());
  }
  function sf(t, e) {
    var n = {};
    return (
      v(t.mapDimensionsAll(e), function (e) {
        n[up(t, e)] = !0;
      }),
      w(n)
    );
  }
  function lf(t) {
    return pp(null, t);
  }
  function uf(t, e) {
    var n = e;
    e instanceof uw || (n = new uw(e));
    var r = Qp(n);
    return r.setExtent(t[0], t[1]), $p(r, n), r;
  }
  function hf(t) {
    d(t, nC);
  }
  function cf(t, e) {
    return (e = e || {}), As(t, null, null, "normal" !== e.state);
  }
  function pf(t) {
    return M(t)
      ? void v(t, function (t) {
          pf(t);
        })
      : void (
          p(oC, t) >= 0 ||
          (oC.push(t), T(t) && (t = { install: t }), t.install(aC))
        );
  }
  function ff(t, e) {
    return Math.abs(t - e) < sC;
  }
  function df(t, e, n) {
    var r = 0,
      i = t[0];
    if (!i) return !1;
    for (var o = 1; o < t.length; o++) {
      var a = t[o];
      (r += mo(i[0], i[1], a[0], a[1], e, n)), (i = a);
    }
    var s = t[0];
    return (
      (ff(i[0], s[0]) && ff(i[1], s[1])) ||
        (r += mo(i[0], i[1], s[0], s[1], e, n)),
      0 !== r
    );
  }
  function gf(t, e) {
    for (var n = 0; n < t.length; n++) ve(t[n], t[n], e);
  }
  function vf(t, e, n, r) {
    for (var i = 0; i < t.length; i++) {
      var o = t[i];
      r && (o = r.project(o)),
        o && isFinite(o[0]) && isFinite(o[1]) && (ye(e, e, o), me(n, n, o));
    }
  }
  function yf(t) {
    for (
      var e = 0,
        n = 0,
        r = 0,
        i = t.length,
        o = t[i - 1][0],
        a = t[i - 1][1],
        s = 0;
      i > s;
      s++
    ) {
      var l = t[s][0],
        u = t[s][1],
        h = o * u - l * a;
      (e += h), (n += (o + l) * h), (r += (a + u) * h), (o = l), (a = u);
    }
    return e ? [n / e / 3, r / e / 3, e] : [t[0][0] || 0, t[0][1] || 0];
  }
  function mf(t) {
    if (!t.UTF8Encoding) return t;
    var e = t,
      n = e.UTF8Scale;
    null == n && (n = 1024);
    var r = e.features;
    return (
      v(r, function (t) {
        var e = t.geometry,
          r = e.encodeOffsets,
          i = e.coordinates;
        if (r)
          switch (e.type) {
            case "LineString":
              e.coordinates = xf(i, r, n);
              break;
            case "Polygon":
              _f(i, r, n);
              break;
            case "MultiLineString":
              _f(i, r, n);
              break;
            case "MultiPolygon":
              v(i, function (t, e) {
                return _f(t, r[e], n);
              });
          }
      }),
      (e.UTF8Encoding = !1),
      e
    );
  }
  function _f(t, e, n) {
    for (var r = 0; r < t.length; r++) t[r] = xf(t[r], e[r], n);
  }
  function xf(t, e, n) {
    for (var r = [], i = e[0], o = e[1], a = 0; a < t.length; a += 2) {
      var s = t.charCodeAt(a) - 64,
        l = t.charCodeAt(a + 1) - 64;
      (s = (s >> 1) ^ -(1 & s)),
        (l = (l >> 1) ^ -(1 & l)),
        (s += i),
        (l += o),
        (i = s),
        (o = l),
        r.push([s / n, l / n]);
    }
    return r;
  }
  function wf(t, e) {
    return (
      (t = mf(t)),
      y(
        _(t.features, function (t) {
          return (
            t.geometry && t.properties && t.geometry.coordinates.length > 0
          );
        }),
        function (t) {
          var n = t.properties,
            r = t.geometry,
            i = [];
          switch (r.type) {
            case "Polygon":
              var o = r.coordinates;
              i.push(new hC(o[0], o.slice(1)));
              break;
            case "MultiPolygon":
              v(r.coordinates, function (t) {
                t[0] && i.push(new hC(t[0], t.slice(1)));
              });
              break;
            case "LineString":
              i.push(new cC([r.coordinates]));
              break;
            case "MultiLineString":
              i.push(new cC(r.coordinates));
          }
          var a = new pC(n[e || "name"], i, n.cp);
          return (a.properties = n), a;
        }
      )
    );
  }
  function bf(t) {
    return "category" === t.type ? Mf(t) : kf(t);
  }
  function Sf(t, e) {
    return "category" === t.type
      ? Cf(t, e)
      : {
          ticks: y(t.scale.getTicks(), function (t) {
            return t.value;
          }),
        };
  }
  function Mf(t) {
    var e = t.getLabelModel(),
      n = Tf(t, e);
    return !e.get("show") || t.scale.isBlank()
      ? { labels: [], labelCategoryInterval: n.labelCategoryInterval }
      : n;
  }
  function Tf(t, e) {
    var n = Df(t, "labels"),
      r = of(e),
      i = If(n, r);
    if (i) return i;
    var o, a;
    return (
      T(r) ? (o = Ef(t, r)) : ((a = "auto" === r ? Lf(t) : r), (o = Rf(t, a))),
      Af(n, r, { labels: o, labelCategoryInterval: a })
    );
  }
  function Cf(t, e) {
    var n = Df(t, "ticks"),
      r = of(e),
      i = If(n, r);
    if (i) return i;
    var o, a;
    if (((!e.get("show") || t.scale.isBlank()) && (o = []), T(r)))
      o = Ef(t, r, !0);
    else if ("auto" === r) {
      var s = Tf(t, t.getLabelModel());
      (a = s.labelCategoryInterval),
        (o = y(s.labels, function (t) {
          return t.tickValue;
        }));
    } else (a = r), (o = Rf(t, a, !0));
    return Af(n, r, { ticks: o, tickCategoryInterval: a });
  }
  function kf(t) {
    var e = t.scale.getTicks(),
      n = tf(t);
    return {
      labels: y(e, function (e, r) {
        return {
          level: e.level,
          formattedLabel: n(e, r),
          rawLabel: t.scale.getLabel(e),
          tickValue: e.value,
        };
      }),
    };
  }
  function Df(t, e) {
    return mC(t)[e] || (mC(t)[e] = []);
  }
  function If(t, e) {
    for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value;
  }
  function Af(t, e, n) {
    return t.push({ key: e, value: n }), n;
  }
  function Lf(t) {
    var e = mC(t).autoInterval;
    return null != e ? e : (mC(t).autoInterval = t.calculateCategoryInterval());
  }
  function Pf(t) {
    var e = Of(t),
      n = tf(t),
      r = ((e.axisRotate - e.labelRotate) / 180) * Math.PI,
      i = t.scale,
      o = i.getExtent(),
      a = i.count();
    if (o[1] - o[0] < 1) return 0;
    var s = 1;
    a > 40 && (s = Math.max(1, Math.floor(a / 40)));
    for (
      var l = o[0],
        u = t.dataToCoord(l + 1) - t.dataToCoord(l),
        h = Math.abs(u * Math.cos(r)),
        c = Math.abs(u * Math.sin(r)),
        p = 0,
        f = 0;
      l <= o[1];
      l += s
    ) {
      var d = 0,
        g = 0,
        v = yr(n({ value: l }), e.font, "center", "top");
      (d = 1.3 * v.width),
        (g = 1.3 * v.height),
        (p = Math.max(p, d, 7)),
        (f = Math.max(f, g, 7));
    }
    var y = p / h,
      m = f / c;
    isNaN(y) && (y = 1 / 0), isNaN(m) && (m = 1 / 0);
    var _ = Math.max(0, Math.floor(Math.min(y, m))),
      x = mC(t.model),
      w = t.getExtent(),
      b = x.lastAutoInterval,
      S = x.lastTickCount;
    return (
      null != b &&
      null != S &&
      Math.abs(b - _) <= 1 &&
      Math.abs(S - a) <= 1 &&
      b > _ &&
      x.axisExtent0 === w[0] &&
      x.axisExtent1 === w[1]
        ? (_ = b)
        : ((x.lastTickCount = a),
          (x.lastAutoInterval = _),
          (x.axisExtent0 = w[0]),
          (x.axisExtent1 = w[1])),
      _
    );
  }
  function Of(t) {
    var e = t.getLabelModel();
    return {
      axisRotate: t.getRotate
        ? t.getRotate()
        : t.isHorizontal && !t.isHorizontal()
        ? 90
        : 0,
      labelRotate: e.get("rotate") || 0,
      font: e.getFont(),
    };
  }
  function Rf(t, e, n) {
    function r(t) {
      var e = { value: t };
      l.push(
        n ? t : { formattedLabel: i(e), rawLabel: o.getLabel(e), tickValue: t }
      );
    }
    var i = tf(t),
      o = t.scale,
      a = o.getExtent(),
      s = t.getLabelModel(),
      l = [],
      u = Math.max((e || 0) + 1, 1),
      h = a[0],
      c = o.count();
    0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
    var p = af(t),
      f = s.get("showMinLabel") || p,
      d = s.get("showMaxLabel") || p;
    f && h !== a[0] && r(a[0]);
    for (var g = h; g <= a[1]; g += u) r(g);
    return d && g - u !== a[1] && r(a[1]), l;
  }
  function Ef(t, e, n) {
    var r = t.scale,
      i = tf(t),
      o = [];
    return (
      v(r.getTicks(), function (t) {
        var a = r.getLabel(t),
          s = t.value;
        e(t.value, a) &&
          o.push(n ? s : { formattedLabel: i(t), rawLabel: a, tickValue: s });
      }),
      o
    );
  }
  function Bf(t, e) {
    var n = t[1] - t[0],
      r = e,
      i = n / r / 2;
    (t[0] += i), (t[1] -= i);
  }
  function Nf(t, e, n, r) {
    function i(t, e) {
      return (t = Vr(t)), (e = Vr(e)), p ? t > e : e > t;
    }
    var o = e.length;
    if (t.onBand && !n && o) {
      var a,
        s,
        l = t.getExtent();
      if (1 === o) (e[0].coord = l[0]), (a = e[1] = { coord: l[0] });
      else {
        var u = e[o - 1].tickValue - e[0].tickValue,
          h = (e[o - 1].coord - e[0].coord) / u;
        v(e, function (t) {
          t.coord -= h / 2;
        });
        var c = t.scale.getExtent();
        (s = 1 + c[1] - e[o - 1].tickValue),
          (a = { coord: e[o - 1].coord + h * s }),
          e.push(a);
      }
      var p = l[0] > l[1];
      i(e[0].coord, l[0]) && (r ? (e[0].coord = l[0]) : e.shift()),
        r && i(l[0], e[0].coord) && e.unshift({ coord: l[0] }),
        i(l[1], a.coord) && (r ? (a.coord = l[1]) : e.pop()),
        r && i(a.coord, l[1]) && e.push({ coord: l[1] });
    }
  }
  function zf(t) {
    var e = zw.extend(t);
    return zw.registerClass(e), e;
  }
  function Ff(t) {
    var e = $b.extend(t);
    return $b.registerClass(e), e;
  }
  function Vf(t) {
    var e = Kb.extend(t);
    return Kb.registerClass(e), e;
  }
  function Hf(t) {
    var e = tS.extend(t);
    return tS.registerClass(e), e;
  }
  function Wf(t, e, n, r, i) {
    var o = n.width,
      a = n.height;
    switch (t) {
      case "top":
        r.set(n.x + o / 2, n.y - e), i.set(0, -1);
        break;
      case "bottom":
        r.set(n.x + o / 2, n.y + a + e), i.set(0, 1);
        break;
      case "left":
        r.set(n.x - e, n.y + a / 2), i.set(-1, 0);
        break;
      case "right":
        r.set(n.x + o + e, n.y + a / 2), i.set(1, 0);
    }
  }
  function Gf(t, e, n, r, i, o, a, s, l) {
    (a -= t), (s -= e);
    var u = Math.sqrt(a * a + s * s);
    (a /= u), (s /= u);
    var h = a * n + t,
      c = s * n + e;
    if (Math.abs(r - i) % wC < 1e-4) return (l[0] = h), (l[1] = c), u - n;
    if (o) {
      var p = r;
      (r = vo(i)), (i = vo(p));
    } else (r = vo(r)), (i = vo(i));
    r > i && (i += wC);
    var f = Math.atan2(s, a);
    if (
      (0 > f && (f += wC), (f >= r && i >= f) || (f + wC >= r && i >= f + wC))
    )
      return (l[0] = h), (l[1] = c), u - n;
    var d = n * Math.cos(r) + t,
      g = n * Math.sin(r) + e,
      v = n * Math.cos(i) + t,
      y = n * Math.sin(i) + e,
      m = (d - a) * (d - a) + (g - s) * (g - s),
      _ = (v - a) * (v - a) + (y - s) * (y - s);
    return _ > m
      ? ((l[0] = d), (l[1] = g), Math.sqrt(m))
      : ((l[0] = v), (l[1] = y), Math.sqrt(_));
  }
  function Uf(t, e, n, r, i, o, a, s) {
    var l = i - t,
      u = o - e,
      h = n - t,
      c = r - e,
      p = Math.sqrt(h * h + c * c);
    (h /= p), (c /= p);
    var f = l * h + u * c,
      d = f / p;
    s && (d = Math.min(Math.max(d, 0), 1)), (d *= p);
    var g = (a[0] = t + d * h),
      v = (a[1] = e + d * c);
    return Math.sqrt((g - i) * (g - i) + (v - o) * (v - o));
  }
  function Xf(t, e, n, r, i, o, a) {
    0 > n && ((t += n), (n = -n)), 0 > r && ((e += r), (r = -r));
    var s = t + n,
      l = e + r,
      u = (a[0] = Math.min(Math.max(i, t), s)),
      h = (a[1] = Math.min(Math.max(o, e), l));
    return Math.sqrt((u - i) * (u - i) + (h - o) * (h - o));
  }
  function qf(t, e, n) {
    var r = Xf(e.x, e.y, e.width, e.height, t.x, t.y, MC);
    return n.set(MC[0], MC[1]), r;
  }
  function Yf(t, e, n) {
    for (
      var r,
        i,
        o = 0,
        a = 0,
        s = 0,
        l = 0,
        u = 1 / 0,
        h = e.data,
        c = t.x,
        p = t.y,
        f = 0;
      f < h.length;

    ) {
      var d = h[f++];
      1 === f && ((o = h[f]), (a = h[f + 1]), (s = o), (l = a));
      var g = u;
      switch (d) {
        case bC.M:
          (s = h[f++]), (l = h[f++]), (o = s), (a = l);
          break;
        case bC.L:
          (g = Uf(o, a, h[f], h[f + 1], c, p, MC, !0)),
            (o = h[f++]),
            (a = h[f++]);
          break;
        case bC.C:
          (g = en(
            o,
            a,
            h[f++],
            h[f++],
            h[f++],
            h[f++],
            h[f],
            h[f + 1],
            c,
            p,
            MC
          )),
            (o = h[f++]),
            (a = h[f++]);
          break;
        case bC.Q:
          (g = un(o, a, h[f++], h[f++], h[f], h[f + 1], c, p, MC)),
            (o = h[f++]),
            (a = h[f++]);
          break;
        case bC.A:
          var v = h[f++],
            y = h[f++],
            m = h[f++],
            _ = h[f++],
            x = h[f++],
            w = h[f++];
          f += 1;
          var b = !!(1 - h[f++]);
          (r = Math.cos(x) * m + v),
            (i = Math.sin(x) * _ + y),
            1 >= f && ((s = r), (l = i));
          var S = ((c - v) * _) / m + v;
          (g = Gf(v, y, _, x, x + w, b, S, p, MC)),
            (o = Math.cos(x + w) * m + v),
            (a = Math.sin(x + w) * _ + y);
          break;
        case bC.R:
          (s = o = h[f++]), (l = a = h[f++]);
          var M = h[f++],
            T = h[f++];
          g = Xf(s, l, M, T, c, p, MC);
          break;
        case bC.Z:
          (g = Uf(o, a, s, l, c, p, MC, !0)), (o = s), (a = l);
      }
      u > g && ((u = g), n.set(MC[0], MC[1]));
    }
    return u;
  }
  function jf(t, e) {
    if (t) {
      var n = t.getTextGuideLine(),
        r = t.getTextContent();
      if (r && n) {
        var i = t.textGuideLineConfig || {},
          o = [
            [0, 0],
            [0, 0],
            [0, 0],
          ],
          a = i.candidates || SC,
          s = r.getBoundingRect().clone();
        s.applyTransform(r.getComputedTransform());
        var l = 1 / 0,
          u = i.anchor,
          h = t.getComputedTransform(),
          c = h && cr([], h),
          p = e.get("length2") || 0;
        u && kC.copy(u);
        for (var f = 0; f < a.length; f++) {
          var d = a[f];
          Wf(d, 0, s, TC, DC), by.scaleAndAdd(CC, TC, DC, p), CC.transform(c);
          var g = t.getBoundingRect(),
            v = u
              ? u.distance(CC)
              : t instanceof i_
              ? Yf(CC, t.path, kC)
              : qf(CC, g, kC);
          l > v &&
            ((l = v),
            CC.transform(h),
            kC.transform(h),
            kC.toArray(o[0]),
            CC.toArray(o[1]),
            TC.toArray(o[2]));
        }
        Zf(o, e.get("minTurnAngle")), n.setShape({ points: o });
      }
    }
  }
  function Zf(t, e) {
    if (180 >= e && e > 0) {
      (e = (e / 180) * Math.PI),
        TC.fromArray(t[0]),
        CC.fromArray(t[1]),
        kC.fromArray(t[2]),
        by.sub(DC, TC, CC),
        by.sub(IC, kC, CC);
      var n = DC.len(),
        r = IC.len();
      if (!(0.001 > n || 0.001 > r)) {
        DC.scale(1 / n), IC.scale(1 / r);
        var i = DC.dot(IC),
          o = Math.cos(e);
        if (i > o) {
          var a = Uf(CC.x, CC.y, kC.x, kC.y, TC.x, TC.y, AC, !1);
          LC.fromArray(AC), LC.scaleAndAdd(IC, a / Math.tan(Math.PI - e));
          var s =
            kC.x !== CC.x
              ? (LC.x - CC.x) / (kC.x - CC.x)
              : (LC.y - CC.y) / (kC.y - CC.y);
          if (isNaN(s)) return;
          0 > s ? by.copy(LC, CC) : s > 1 && by.copy(LC, kC), LC.toArray(t[1]);
        }
      }
    }
  }
  function Kf(t, e, n, r) {
    var i = "normal" === n,
      o = i ? t : t.ensureState(n);
    o.ignore = e;
    var a = r.get("smooth");
    a && a === !0 && (a = 0.3),
      (o.shape = o.shape || {}),
      a > 0 && (o.shape.smooth = a);
    var s = r.getModel("lineStyle").getLineStyle();
    i ? t.useStyle(s) : (o.style = s);
  }
  function $f(t, e) {
    var n = e.smooth,
      r = e.points;
    if (r)
      if ((t.moveTo(r[0][0], r[0][1]), n > 0 && r.length >= 3)) {
        var i = Ug(r[0], r[1]),
          o = Ug(r[1], r[2]);
        if (!i || !o)
          return t.lineTo(r[1][0], r[1][1]), void t.lineTo(r[2][0], r[2][1]);
        var a = Math.min(i, o) * n,
          s = ge([], r[1], r[0], a / i),
          l = ge([], r[1], r[2], a / o),
          u = ge([], s, l, 0.5);
        t.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]),
          t.bezierCurveTo(l[0], l[1], l[0], l[1], r[2][0], r[2][1]);
      } else for (var h = 1; h < r.length; h++) t.lineTo(r[h][0], r[h][1]);
  }
  function Qf(t, e, n) {
    var r = t.getTextGuideLine(),
      i = t.getTextContent();
    if (!i) return void (r && t.removeTextGuideLine());
    for (
      var o = e.normal, a = o.get("show"), s = i.ignore, l = 0;
      l < L_.length;
      l++
    ) {
      var u = L_[l],
        h = e[u],
        p = "normal" === u;
      if (h) {
        var f = h.get("show"),
          d = p ? s : z(i.states[u] && i.states[u].ignore, s);
        if (d || !z(f, a)) {
          var g = p ? r : r && r.states.normal;
          g && (g.ignore = !0);
          continue;
        }
        r ||
          ((r = new bx()),
          t.setTextGuideLine(r),
          p || (!s && a) || Kf(r, !0, "normal", e.normal),
          t.stateProxy && (r.stateProxy = t.stateProxy)),
          Kf(r, !1, u, h);
      }
    }
    if (r) {
      c(r.style, n), (r.style.fill = null);
      var v = o.get("showAbove"),
        y = (t.textGuideLineConfig = t.textGuideLineConfig || {});
      (y.showAbove = v || !1), (r.buildPath = $f);
    }
  }
  function Jf(t, e) {
    e = e || "labelLine";
    for (var n = { normal: t.getModel(e) }, r = 0; r < A_.length; r++) {
      var i = A_[r];
      n[i] = t.getModel([i, e]);
    }
    return n;
  }
  function td(t) {
    for (var e = [], n = 0; n < t.length; n++) {
      var r = t[n];
      if (!r.defaultAttr.ignore) {
        var i = r.label,
          o = i.getComputedTransform(),
          a = i.getBoundingRect(),
          s = !o || (o[1] < 1e-5 && o[2] < 1e-5),
          l = i.style.margin || 0,
          u = a.clone();
        u.applyTransform(o),
          (u.x -= l / 2),
          (u.y -= l / 2),
          (u.width += l),
          (u.height += l);
        var h = s ? new Fx(a, o) : null;
        e.push({
          label: i,
          labelLine: r.labelLine,
          rect: u,
          localRect: a,
          obb: h,
          priority: r.priority,
          defaultAttr: r.defaultAttr,
          layoutOption: r.computedLayoutOption,
          axisAligned: s,
          transform: o,
        });
      }
    }
    return e;
  }
  function ed(t, e, n, r, i, o) {
    function a() {
      (w = S.rect[e] - r), (b = i - M.rect[e] - M.rect[n]);
    }
    function s(t, e, n) {
      if (0 > t) {
        var r = Math.min(e, -t);
        if (r > 0) {
          l(r * n, 0, c);
          var i = r + t;
          0 > i && u(-i * n, 1);
        } else u(-t * n, 1);
      }
    }
    function l(n, r, i) {
      0 !== n && (d = !0);
      for (var o = r; i > o; o++) {
        var a = t[o],
          s = a.rect;
        (s[e] += n), (a.label[e] += n);
      }
    }
    function u(r, i) {
      for (var o = [], a = 0, s = 1; c > s; s++) {
        var u = t[s - 1].rect,
          h = Math.max(t[s].rect[e] - u[e] - u[n], 0);
        o.push(h), (a += h);
      }
      if (a) {
        var p = Math.min(Math.abs(r) / a, i);
        if (r > 0)
          for (var s = 0; c - 1 > s; s++) {
            var f = o[s] * p;
            l(f, 0, s + 1);
          }
        else
          for (var s = c - 1; s > 0; s--) {
            var f = o[s - 1] * p;
            l(-f, s, c);
          }
      }
    }
    function h(t) {
      var e = 0 > t ? -1 : 1;
      t = Math.abs(t);
      for (var n = Math.ceil(t / (c - 1)), r = 0; c - 1 > r; r++)
        if ((e > 0 ? l(n, 0, r + 1) : l(-n, c - r - 1, c), (t -= n), 0 >= t))
          return;
    }
    var c = t.length;
    if (!(2 > c)) {
      t.sort(function (t, n) {
        return t.rect[e] - n.rect[e];
      });
      for (var p, f = 0, d = !1, g = [], v = 0, y = 0; c > y; y++) {
        var m = t[y],
          _ = m.rect;
        (p = _[e] - f), 0 > p && ((_[e] -= p), (m.label[e] -= p), (d = !0));
        var x = Math.max(-p, 0);
        g.push(x), (v += x), (f = _[e] + _[n]);
      }
      v > 0 && o && l(-v / c, 0, c);
      var w,
        b,
        S = t[0],
        M = t[c - 1];
      return (
        a(),
        0 > w && u(-w, 0.8),
        0 > b && u(b, 0.8),
        a(),
        s(w, b, 1),
        s(b, w, -1),
        a(),
        0 > w && h(-w),
        0 > b && h(b),
        d
      );
    }
  }
  function nd(t, e, n, r) {
    return ed(t, "x", "width", e, n, r);
  }
  function rd(t, e, n, r) {
    return ed(t, "y", "height", e, n, r);
  }
  function id(t) {
    function e(t) {
      if (!t.ignore) {
        var e = t.ensureState("emphasis");
        null == e.ignore && (e.ignore = !1);
      }
      t.ignore = !0;
    }
    var n = [];
    t.sort(function (t, e) {
      return e.priority - t.priority;
    });
    for (var r = new Ly(0, 0, 0, 0), i = 0; i < t.length; i++) {
      var o = t[i],
        a = o.axisAligned,
        s = o.localRect,
        l = o.transform,
        u = o.label,
        h = o.labelLine;
      r.copy(o.rect),
        (r.width -= 0.1),
        (r.height -= 0.1),
        (r.x += 0.05),
        (r.y += 0.05);
      for (var c = o.obb, p = !1, f = 0; f < n.length; f++) {
        var d = n[f];
        if (r.intersect(d.rect)) {
          if (a && d.axisAligned) {
            p = !0;
            break;
          }
          if (
            (d.obb || (d.obb = new Fx(d.localRect, d.transform)),
            c || (c = new Fx(s, l)),
            c.intersect(d.obb))
          ) {
            p = !0;
            break;
          }
        }
      }
      p
        ? (e(u), h && e(h))
        : (u.attr("ignore", o.defaultAttr.ignore),
          h && h.attr("ignore", o.defaultAttr.labelGuideIgnore),
          n.push(o));
    }
  }
  function od(t) {
    if (t) {
      for (var e = [], n = 0; n < t.length; n++) e.push(t[n].slice());
      return e;
    }
  }
  function ad(t, e) {
    var n = t.label,
      r = e && e.getTextGuideLine();
    return {
      dataIndex: t.dataIndex,
      dataType: t.dataType,
      seriesIndex: t.seriesModel.seriesIndex,
      text: t.label.style.text,
      rect: t.hostRect,
      labelRect: t.rect,
      align: n.style.align,
      verticalAlign: n.style.verticalAlign,
      labelLinePoints: od(r && r.shape.points),
    };
  }
  function sd(t, e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      null != e[i] && (t[i] = e[i]);
    }
  }
  function ld(t) {
    t.registerUpdateLifecycle("series:beforeupdate", function (t, e) {
      var n = zC(e).labelManager;
      n || (n = zC(e).labelManager = new NC()), n.clearLabels();
    }),
      t.registerUpdateLifecycle("series:layoutlabels", function (t, e, n) {
        var r = zC(e).labelManager;
        n.updatedSeries.forEach(function (t) {
          r.addLabelsOfSeries(e.getViewOfSeriesModel(t));
        }),
          r.updateLayoutConfig(e),
          r.layout(e),
          r.processLabelsOverall();
      });
  }
  function ud(t, e, n) {
    var r = Sg.createCanvas(),
      i = e.getWidth(),
      o = e.getHeight(),
      a = r.style;
    return (
      a &&
        ((a.position = "absolute"),
        (a.left = "0"),
        (a.top = "0"),
        (a.width = i + "px"),
        (a.height = o + "px"),
        r.setAttribute("data-zr-dom-id", t)),
      (r.width = i * n),
      (r.height = o * n),
      r
    );
  }
  function hd(t) {
    return t
      ? t.__builtin__
        ? !0
        : "function" != typeof t.resize || "function" != typeof t.refresh
        ? !1
        : !0
      : !1;
  }
  function cd(t, e) {
    var n = document.createElement("div");
    return (
      (n.style.cssText =
        [
          "position:relative",
          "width:" + t + "px",
          "height:" + e + "px",
          "padding:0",
          "margin:0",
          "border-width:0",
        ].join(";") + ";"),
      n
    );
  }
  function pd(t) {
    t.registerPainter("canvas", UC);
  }
  function fd(t) {
    t.registerComponentModel(XC), t.registerComponentView(qC);
  }
  function dd(t) {
    return {
      seriesType: t,
      reset: function (t, e, n) {
        var r = t.getData(),
          i = t.get("sampling"),
          o = t.coordinateSystem,
          a = r.count();
        if (a > 10 && "cartesian2d" === o.type && i) {
          var s = o.getBaseAxis(),
            l = o.getOtherAxis(s),
            u = s.getExtent(),
            h = n.getDevicePixelRatio(),
            c = Math.abs(u[1] - u[0]) * (h || 1),
            p = Math.round(a / c);
          if (p > 1) {
            "lttb" === i &&
              t.setData(r.lttbDownSample(r.mapDimension(l.dim), 1 / p));
            var f = void 0;
            C(i) ? (f = YC[i]) : T(i) && (f = i),
              f && t.setData(r.downSample(r.mapDimension(l.dim), 1 / p, f, jC));
          }
        }
      },
    };
  }
  function gd(t, e, n, r, i) {
    var o = t.getArea(),
      a = o.x,
      s = o.y,
      l = o.width,
      u = o.height,
      h = n.get(["lineStyle", "width"]) || 2;
    (a -= h / 2),
      (s -= h / 2),
      (l += h),
      (u += h),
      (a = Math.floor(a)),
      (l = Math.round(l));
    var c = new f_({ shape: { x: a, y: s, width: l, height: u } });
    if (e) {
      var p = t.getBaseAxis(),
        f = p.isHorizontal(),
        d = p.inverse;
      f
        ? (d && (c.shape.x += l), (c.shape.width = 0))
        : (d || (c.shape.y += u), (c.shape.height = 0));
      var g = T(i)
        ? function (t) {
            i(t, c);
          }
        : null;
      ns(c, { shape: { width: l, height: u, x: a, y: s } }, n, null, r, g);
    }
    return c;
  }
  function vd(t, e, n) {
    var r = t.getArea(),
      i = Vr(r.r0, 1),
      o = Vr(r.r, 1),
      a = new gx({
        shape: {
          cx: Vr(t.cx, 1),
          cy: Vr(t.cy, 1),
          r0: i,
          r: o,
          startAngle: r.startAngle,
          endAngle: r.endAngle,
          clockwise: r.clockwise,
        },
      });
    if (e) {
      var s = "angle" === t.getBaseAxis().dim;
      s ? (a.shape.endAngle = r.startAngle) : (a.shape.r = i),
        ns(a, { shape: { endAngle: r.endAngle, r: o } }, n);
    }
    return a;
  }
  function yd(t, e, n, r, i) {
    return t
      ? "polar" === t.type
        ? vd(t, e, n)
        : "cartesian2d" === t.type
        ? gd(t, e, n, r, i)
        : null
      : null;
  }
  function md(t, e) {
    return t.type === e;
  }
  function _d(t, e) {
    var n = t.mapDimensionsAll("defaultedLabel"),
      r = n.length;
    if (1 === r) {
      var i = Iu(t, e, n[0]);
      return null != i ? i + "" : null;
    }
    if (r) {
      for (var o = [], a = 0; a < n.length; a++) o.push(Iu(t, e, n[a]));
      return o.join(" ");
    }
  }
  function xd(t, e) {
    var n = t.mapDimensionsAll("defaultedLabel");
    if (!M(e)) return e + "";
    for (var r = [], i = 0; i < n.length; i++) {
      var o = t.getDimensionIndex(n[i]);
      o >= 0 && r.push(e[o]);
    }
    return r.join(" ");
  }
  function wd(t, e) {
    e = e || {};
    var n = e.isRoundCap;
    return function (e, r, i) {
      var o = r.position;
      if (!o || o instanceof Array) return br(e, r, i);
      var a = t(o),
        s = null != r.distance ? r.distance : 5,
        l = this.shape,
        u = l.cx,
        h = l.cy,
        c = l.r,
        p = l.r0,
        f = (c + p) / 2,
        d = l.startAngle,
        g = l.endAngle,
        v = (d + g) / 2,
        y = n ? Math.abs(c - p) / 2 : 0,
        m = Math.cos,
        _ = Math.sin,
        x = u + c * m(d),
        w = h + c * _(d),
        b = "left",
        S = "top";
      switch (a) {
        case "startArc":
          (x = u + (p - s) * m(v)),
            (w = h + (p - s) * _(v)),
            (b = "center"),
            (S = "top");
          break;
        case "insideStartArc":
          (x = u + (p + s) * m(v)),
            (w = h + (p + s) * _(v)),
            (b = "center"),
            (S = "bottom");
          break;
        case "startAngle":
          (x = u + f * m(d) + Sd(d, s + y, !1)),
            (w = h + f * _(d) + Md(d, s + y, !1)),
            (b = "right"),
            (S = "middle");
          break;
        case "insideStartAngle":
          (x = u + f * m(d) + Sd(d, -s + y, !1)),
            (w = h + f * _(d) + Md(d, -s + y, !1)),
            (b = "left"),
            (S = "middle");
          break;
        case "middle":
          (x = u + f * m(v)),
            (w = h + f * _(v)),
            (b = "center"),
            (S = "middle");
          break;
        case "endArc":
          (x = u + (c + s) * m(v)),
            (w = h + (c + s) * _(v)),
            (b = "center"),
            (S = "bottom");
          break;
        case "insideEndArc":
          (x = u + (c - s) * m(v)),
            (w = h + (c - s) * _(v)),
            (b = "center"),
            (S = "top");
          break;
        case "endAngle":
          (x = u + f * m(g) + Sd(g, s + y, !0)),
            (w = h + f * _(g) + Md(g, s + y, !0)),
            (b = "left"),
            (S = "middle");
          break;
        case "insideEndAngle":
          (x = u + f * m(g) + Sd(g, -s + y, !0)),
            (w = h + f * _(g) + Md(g, -s + y, !0)),
            (b = "right"),
            (S = "middle");
          break;
        default:
          return br(e, r, i);
      }
      return (
        (e = e || {}),
        (e.x = x),
        (e.y = w),
        (e.align = b),
        (e.verticalAlign = S),
        e
      );
    };
  }
  function bd(t, e, n, r) {
    if (D(r)) return void t.setTextConfig({ rotation: r });
    if (M(e)) return void t.setTextConfig({ rotation: 0 });
    var i,
      o = t.shape,
      a = o.clockwise ? o.startAngle : o.endAngle,
      s = o.clockwise ? o.endAngle : o.startAngle,
      l = (a + s) / 2,
      u = n(e);
    switch (u) {
      case "startArc":
      case "insideStartArc":
      case "middle":
      case "insideEndArc":
      case "endArc":
        i = l;
        break;
      case "startAngle":
      case "insideStartAngle":
        i = a;
        break;
      case "endAngle":
      case "insideEndAngle":
        i = s;
        break;
      default:
        return void t.setTextConfig({ rotation: 0 });
    }
    var h = 1.5 * Math.PI - i;
    "middle" === u && h > Math.PI / 2 && h < 1.5 * Math.PI && (h -= Math.PI),
      t.setTextConfig({ rotation: h });
  }
  function Sd(t, e, n) {
    return e * Math.sin(t) * (n ? -1 : 1);
  }
  function Md(t, e, n) {
    return e * Math.cos(t) * (n ? 1 : -1);
  }
  function Td(t, e) {
    var n = t.getArea && t.getArea();
    if (md(t, "cartesian2d")) {
      var r = t.getBaseAxis();
      if ("category" !== r.type || !r.onBand) {
        var i = e.getLayout("bandWidth");
        r.isHorizontal()
          ? ((n.x -= i), (n.width += 2 * i))
          : ((n.y -= i), (n.height += 2 * i));
      }
    }
    return n;
  }
  function Cd(t, e) {
    var n = t.get("realtimeSort", !0),
      r = e.getBaseAxis();
    return n && "category" === r.type && "cartesian2d" === e.type
      ? { baseAxis: r, otherAxis: e.getOtherAxis(r) }
      : void 0;
  }
  function kd(t, e, n, r, i, o, a, s) {
    var l, u;
    o
      ? ((u = { x: r.x, width: r.width }), (l = { y: r.y, height: r.height }))
      : ((u = { y: r.y, height: r.height }), (l = { x: r.x, width: r.width })),
      s || (a ? es : ns)(n, { shape: l }, e, i, null);
    var h = e ? t.baseAxis.model : null;
    (a ? es : ns)(n, { shape: u }, h, i);
  }
  function Dd(t, e) {
    for (var n = 0; n < e.length; n++) if (!isFinite(t[e[n]])) return !0;
    return !1;
  }
  function Id(t) {
    return (
      null != t.startAngle && null != t.endAngle && t.startAngle === t.endAngle
    );
  }
  function Ad(t) {
    return (function (t) {
      var e = t ? "Arc" : "Angle";
      return function (t) {
        switch (t) {
          case "start":
          case "insideStart":
          case "end":
          case "insideEnd":
            return t + e;
          default:
            return t;
        }
      };
    })(t);
  }
  function Ld(t, e, n, r, i, o, a, s) {
    var l = e.getItemVisual(n, "style");
    s || t.setShape("r", r.get(["itemStyle", "borderRadius"]) || 0),
      t.useStyle(l);
    var u = r.getShallow("cursor");
    u && t.attr("cursor", u);
    var h = s
        ? a
          ? i.r >= i.r0
            ? "endArc"
            : "startArc"
          : i.endAngle >= i.startAngle
          ? "endAngle"
          : "startAngle"
        : a
        ? i.height >= 0
          ? "bottom"
          : "top"
        : i.width >= 0
        ? "right"
        : "left",
      c = Is(r);
    Ds(t, c, {
      labelFetcher: o,
      labelDataIndex: n,
      defaultText: _d(o.getData(), n),
      inheritColor: l.fill,
      defaultOpacity: l.opacity,
      defaultOutsidePosition: h,
    });
    var p = t.getTextContent();
    if (s && p) {
      var f = r.get(["label", "position"]);
      (t.textConfig.inside = "middle" === f ? !0 : null),
        bd(t, "outside" === f ? h : f, Ad(a), r.get(["label", "rotate"]));
    }
    Bs(p, c, o.getRawValue(n), function (t) {
      return xd(e, t);
    });
    var d = r.getModel(["emphasis"]);
    Ca(t, d.get("focus"), d.get("blurScope"), d.get("disabled")),
      Da(t, r),
      Id(i) &&
        ((t.style.fill = "none"),
        (t.style.stroke = "none"),
        v(t.states, function (t) {
          t.style && (t.style.fill = t.style.stroke = "none");
        }));
  }
  function Pd(t, e) {
    var n = t.get(["itemStyle", "borderColor"]);
    if (!n || "none" === n) return 0;
    var r = t.get(["itemStyle", "borderWidth"]) || 0,
      i = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width),
      o = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height);
    return Math.min(r, i, o);
  }
  function Od(t, e, n, r) {
    var i = t.getData(),
      o = i.getLayout("valueAxisHorizontal") ? 1 : 0,
      a = i.getLayout("largeDataIndices"),
      s = i.getLayout("size"),
      l = t.getModel("backgroundStyle"),
      u = i.getLayout("largeBackgroundPoints");
    if (u) {
      var h = new uk({
        shape: { points: u },
        incremental: !!r,
        silent: !0,
        z2: 0,
      });
      (h.baseDimIdx = o),
        (h.largeDataIndices = a),
        (h.barWidth = s),
        h.useStyle(l.getItemStyle()),
        e.add(h),
        n && n.push(h);
    }
    var c = new uk({
      shape: { points: i.getLayout("largePoints") },
      incremental: !!r,
      z2: 1,
    });
    (c.baseDimIdx = o),
      (c.largeDataIndices = a),
      (c.barWidth = s),
      e.add(c),
      c.useStyle(i.getVisual("style")),
      (w_(c).seriesIndex = t.seriesIndex),
      t.get("silent") || (c.on("mousedown", hk), c.on("mousemove", hk)),
      n && n.push(c);
  }
  function Rd(t, e, n) {
    for (
      var r = t.baseDimIdx,
        i = 1 - r,
        o = t.shape.points,
        a = t.largeDataIndices,
        s = [],
        l = [],
        u = t.barWidth,
        h = 0,
        c = o.length / 3;
      c > h;
      h++
    ) {
      var p = 3 * h;
      if (
        ((l[r] = u),
        (l[i] = o[p + 2]),
        (s[r] = o[p + r]),
        (s[i] = o[p + i]),
        l[i] < 0 && ((s[i] += l[i]), (l[i] = -l[i])),
        e >= s[0] && e <= s[0] + l[0] && n >= s[1] && n <= s[1] + l[1])
      )
        return a[h];
    }
    return -1;
  }
  function Ed(t, e, n) {
    if (md(n, "cartesian2d")) {
      var r = e,
        i = n.getArea();
      return {
        x: t ? r.x : i.x,
        y: t ? i.y : r.y,
        width: t ? r.width : i.width,
        height: t ? i.height : r.height,
      };
    }
    var i = n.getArea(),
      o = e;
    return {
      cx: i.cx,
      cy: i.cy,
      r0: t ? i.r0 : o.r0,
      r: t ? i.r : o.r,
      startAngle: t ? o.startAngle : 0,
      endAngle: t ? o.endAngle : 2 * Math.PI,
    };
  }
  function Bd(t, e, n) {
    var r = "polar" === t.type ? gx : f_;
    return new r({ shape: Ed(e, n, t), silent: !0, z2: 0 });
  }
  function Nd(t) {
    t.registerChartView(ek),
      t.registerSeriesModel(KC),
      t.registerLayout(t.PRIORITY.VISUAL.LAYOUT, S(Op, "bar")),
      t.registerLayout(t.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, Rp("bar")),
      t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, dd("bar")),
      t.registerAction(
        { type: "changeAxisOrder", event: "changeAxisOrder", update: "update" },
        function (t, e) {
          var n = t.componentType || "series";
          e.eachComponent({ mainType: n, query: t }, function (e) {
            t.sortInfo && e.axis.setCategorySortInfo(t.sortInfo);
          });
        }
      );
  }
  function zd(t, n, r, i) {
    v(_k, function (o, a) {
      var s = l(l({}, mk[a], !0), i, !0),
        u = (function (t) {
          function r() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = n + "Axis." + a), e;
          }
          return (
            e(r, t),
            (r.prototype.mergeDefaultAndTheme = function (t, e) {
              var n = Tl(this),
                r = n ? kl(t) : {},
                i = e.getTheme();
              l(t, i.get(a + "Axis")),
                l(t, this.getDefaultOption()),
                (t.type = Fd(t)),
                n && Cl(t, r, n);
            }),
            (r.prototype.optionUpdated = function () {
              var t = this.option;
              "category" === t.type &&
                (this.__ordinalMeta = RT.createByAxisModel(this));
            }),
            (r.prototype.getCategories = function (t) {
              var e = this.option;
              return "category" === e.type
                ? t
                  ? e.data
                  : this.__ordinalMeta.categories
                : void 0;
            }),
            (r.prototype.getOrdinalMeta = function () {
              return this.__ordinalMeta;
            }),
            (r.type = n + "Axis." + a),
            (r.defaultOption = s),
            r
          );
        })(r);
      t.registerComponentModel(u);
    }),
      t.registerSubTypeDefaulter(n + "Axis", Fd);
  }
  function Fd(t) {
    return t.type || (t.data ? "category" : "value");
  }
  function Vd(t) {
    return "interval" === t.type || "time" === t.type;
  }
  function Hd(t, e, n) {
    n = n || {};
    var r = t.coordinateSystem,
      i = e.axis,
      o = {},
      a = i.getAxesOnZeroOf()[0],
      s = i.position,
      l = a ? "onZero" : s,
      u = i.dim,
      h = r.getRect(),
      c = [h.x, h.x + h.width, h.y, h.y + h.height],
      p = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
      f = e.get("offset") || 0,
      d = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
    if (a) {
      var g = a.toGlobalCoord(a.dataToCoord(0));
      d[p.onZero] = Math.max(Math.min(g, d[1]), d[0]);
    }
    (o.position = ["y" === u ? d[p[l]] : c[0], "x" === u ? d[p[l]] : c[3]]),
      (o.rotation = (Math.PI / 2) * ("x" === u ? 0 : 1));
    var v = { top: -1, bottom: 1, left: -1, right: 1 };
    (o.labelDirection = o.tickDirection = o.nameDirection = v[s]),
      (o.labelOffset = a ? d[p[s]] - d[p.onZero] : 0),
      e.get(["axisTick", "inside"]) && (o.tickDirection = -o.tickDirection),
      N(n.labelInside, e.get(["axisLabel", "inside"])) &&
        (o.labelDirection = -o.labelDirection);
    var y = e.get(["axisLabel", "rotate"]);
    return (o.labelRotate = "top" === l ? -y : y), (o.z2 = 1), o;
  }
  function Wd(t) {
    return "cartesian2d" === t.get("coordinateSystem");
  }
  function Gd(t) {
    var e = { xAxisModel: null, yAxisModel: null };
    return (
      v(e, function (n, r) {
        var i = r.replace(/Model$/, ""),
          o = t.getReferringComponents(i, Jy).models[0];
        e[r] = o;
      }),
      e
    );
  }
  function Ud(t, e, n) {
    var r = NT.prototype,
      i = r.getTicks.call(n),
      o = r.getTicks.call(n, !0),
      a = i.length - 1,
      s = r.getInterval.call(n),
      l = Zp(t, e),
      u = l.extent,
      h = l.fixMin,
      c = l.fixMax;
    if ("log" === t.type) {
      var p = Mk(t.base);
      u = [Mk(u[0]) / p, Mk(u[1]) / p];
    }
    t.setExtent(u[0], u[1]),
      t.calcNiceExtent({ splitNumber: a, fixMin: h, fixMax: c });
    var f = r.getExtent.call(t);
    h && (u[0] = f[0]), c && (u[1] = f[1]);
    var d = r.getInterval.call(t),
      g = u[0],
      v = u[1];
    if (h && c) d = (v - g) / a;
    else if (h)
      for (v = u[0] + d * a; v < u[1] && isFinite(v) && isFinite(u[1]); )
        (d = mp(d)), (v = u[0] + d * a);
    else if (c)
      for (g = u[1] - d * a; g > u[0] && isFinite(g) && isFinite(u[0]); )
        (d = mp(d)), (g = u[1] - d * a);
    else {
      var y = t.getTicks().length - 1;
      y > a && (d = mp(d));
      var m = d * a;
      (v = Math.ceil(u[1] / d) * d),
        (g = Vr(v - m)),
        0 > g && u[0] >= 0
          ? ((g = 0), (v = Vr(m)))
          : v > 0 && u[1] <= 0 && ((v = 0), (g = -Vr(m)));
    }
    var _ = (i[0].value - o[0].value) / s,
      x = (i[a].value - o[a].value) / s;
    r.setExtent.call(t, g + d * _, v + d * x),
      r.setInterval.call(t, d),
      (_ || x) && r.setNiceExtent.call(t, g + d, v - d);
  }
  function Xd(t, e) {
    return t.getCoordSysModel() === e;
  }
  function qd(t, e, n, r) {
    function i(t) {
      return t.dim + "_" + t.index;
    }
    n.getAxesOnZeroOf = function () {
      return o ? [o] : [];
    };
    var o,
      a = t[e],
      s = n.model,
      l = s.get(["axisLine", "onZero"]),
      u = s.get(["axisLine", "onZeroAxisIndex"]);
    if (l) {
      if (null != u) Yd(a[u]) && (o = a[u]);
      else
        for (var h in a)
          if (a.hasOwnProperty(h) && Yd(a[h]) && !r[i(a[h])]) {
            o = a[h];
            break;
          }
      o && (r[i(o)] = !0);
    }
  }
  function Yd(t) {
    return t && "category" !== t.type && "time" !== t.type && Jp(t);
  }
  function jd(t, e) {
    var n = t.getExtent(),
      r = n[0] + n[1];
    (t.toGlobalCoord =
      "x" === t.dim
        ? function (t) {
            return t + e;
          }
        : function (t) {
            return r - t + e;
          }),
      (t.toLocalCoord =
        "x" === t.dim
          ? function (t) {
              return t - e;
            }
          : function (t) {
              return r - t + e;
            });
  }
  function Zd(t, e, n, r) {
    var i,
      o,
      a = Yr(n - t),
      s = r[0] > r[1],
      l = ("start" === e && !s) || ("start" !== e && s);
    return (
      jr(a - Ck / 2)
        ? ((o = l ? "bottom" : "top"), (i = "center"))
        : jr(a - 1.5 * Ck)
        ? ((o = l ? "top" : "bottom"), (i = "center"))
        : ((o = "middle"),
          (i =
            1.5 * Ck > a && a > Ck / 2
              ? l
                ? "left"
                : "right"
              : l
              ? "right"
              : "left")),
      { rotation: a, textAlign: i, textVerticalAlign: o }
    );
  }
  function Kd(t, e, n) {
    if (!af(t.axis)) {
      var r = t.get(["axisLabel", "showMinLabel"]),
        i = t.get(["axisLabel", "showMaxLabel"]);
      (e = e || []), (n = n || []);
      var o = e[0],
        a = e[1],
        s = e[e.length - 1],
        l = e[e.length - 2],
        u = n[0],
        h = n[1],
        c = n[n.length - 1],
        p = n[n.length - 2];
      r === !1
        ? ($d(o), $d(u))
        : Qd(o, a) && (r ? ($d(a), $d(h)) : ($d(o), $d(u))),
        i === !1
          ? ($d(s), $d(c))
          : Qd(l, s) && (i ? ($d(l), $d(p)) : ($d(s), $d(c)));
    }
  }
  function $d(t) {
    t && (t.ignore = !0);
  }
  function Qd(t, e) {
    var n = t && t.getBoundingRect().clone(),
      r = e && e.getBoundingRect().clone();
    if (n && r) {
      var i = or([]);
      return (
        ur(i, i, -t.rotation),
        n.applyTransform(sr([], i, t.getLocalTransform())),
        r.applyTransform(sr([], i, e.getLocalTransform())),
        n.intersect(r)
      );
    }
  }
  function Jd(t) {
    return "middle" === t || "center" === t;
  }
  function tg(t, e, n, r, i) {
    for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {
      var u = t[l].coord;
      (a[0] = u),
        (a[1] = 0),
        (s[0] = u),
        (s[1] = n),
        e && (ve(a, a, e), ve(s, s, e));
      var h = new Tx({
        subPixelOptimize: !0,
        shape: { x1: a[0], y1: a[1], x2: s[0], y2: s[1] },
        style: r,
        z2: 2,
        autoBatch: !0,
        silent: !0,
      });
      (h.anid = i + "_" + t[l].tickValue), o.push(h);
    }
    return o;
  }
  function eg(t, e, n, r) {
    var i = n.axis,
      o = n.getModel("axisTick"),
      a = o.get("show");
    if (
      ("auto" === a && r.handleAutoShown && (a = r.handleAutoShown("axisTick")),
      a && !i.scale.isBlank())
    ) {
      for (
        var s = o.getModel("lineStyle"),
          l = r.tickDirection * o.get("length"),
          u = i.getTicksCoords(),
          h = tg(
            u,
            e.transform,
            l,
            c(s.getLineStyle(), {
              stroke: n.get(["axisLine", "lineStyle", "color"]),
            }),
            "ticks"
          ),
          p = 0;
        p < h.length;
        p++
      )
        t.add(h[p]);
      return h;
    }
  }
  function ng(t, e, n, r) {
    var i = n.axis,
      o = n.getModel("minorTick");
    if (o.get("show") && !i.scale.isBlank()) {
      var a = i.getMinorTicksCoords();
      if (a.length)
        for (
          var s = o.getModel("lineStyle"),
            l = r * o.get("length"),
            u = c(
              s.getLineStyle(),
              c(n.getModel("axisTick").getLineStyle(), {
                stroke: n.get(["axisLine", "lineStyle", "color"]),
              })
            ),
            h = 0;
          h < a.length;
          h++
        )
          for (
            var p = tg(a[h], e.transform, l, u, "minorticks_" + h), f = 0;
            f < p.length;
            f++
          )
            t.add(p[f]);
    }
  }
  function rg(t, e, n, r) {
    var i = n.axis,
      o = N(r.axisLabelShow, n.get(["axisLabel", "show"]));
    if (o && !i.scale.isBlank()) {
      var a = n.getModel("axisLabel"),
        s = a.get("margin"),
        l = i.getViewLabels(),
        u = ((N(r.labelRotate, a.get("rotate")) || 0) * Ck) / 180,
        h = kk.innerTextLayout(r.rotation, u, r.labelDirection),
        c = n.getCategories && n.getCategories(!0),
        p = [],
        f = kk.isLabelSilent(n),
        d = n.get("triggerEvent");
      return (
        v(l, function (o, l) {
          var u =
              "ordinal" === i.scale.type
                ? i.scale.getRawOrdinalNumber(o.tickValue)
                : o.tickValue,
            g = o.formattedLabel,
            v = o.rawLabel,
            y = a;
          if (c && c[u]) {
            var m = c[u];
            I(m) && m.textStyle && (y = new uw(m.textStyle, a, n.ecModel));
          }
          var _ = y.getTextColor() || n.get(["axisLine", "lineStyle", "color"]),
            x = i.dataToCoord(u),
            w = new y_({
              x: x,
              y: r.labelOffset + r.labelDirection * s,
              rotation: h.rotation,
              silent: f,
              z2: 10 + (o.level || 0),
              style: As(y, {
                text: g,
                align: y.getShallow("align", !0) || h.textAlign,
                verticalAlign:
                  y.getShallow("verticalAlign", !0) ||
                  y.getShallow("baseline", !0) ||
                  h.textVerticalAlign,
                fill: T(_)
                  ? _(
                      "category" === i.type
                        ? v
                        : "value" === i.type
                        ? u + ""
                        : u,
                      l
                    )
                  : _,
              }),
            });
          if (((w.anid = "label_" + u), d)) {
            var b = kk.makeAxisEventDataBase(n);
            (b.targetType = "axisLabel"), (b.value = v), (w_(w).eventData = b);
          }
          e.add(w),
            w.updateTransform(),
            p.push(w),
            t.add(w),
            w.decomposeTransform();
        }),
        p
      );
    }
  }
  function ig(t) {
    var e = og(t);
    if (e) {
      var n = e.axisPointerModel,
        r = e.axis.scale,
        i = n.option,
        o = n.get("status"),
        a = n.get("value");
      null != a && (a = r.parse(a));
      var s = sg(n);
      null == o && (i.status = s ? "show" : "hide");
      var l = r.getExtent().slice();
      l[0] > l[1] && l.reverse(),
        (null == a || a > l[1]) && (a = l[1]),
        a < l[0] && (a = l[0]),
        (i.value = a),
        s && (i.status = e.axis.scale.isBlank() ? "hide" : "show");
    }
  }
  function og(t) {
    var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
    return e && e.axesInfo[lg(t)];
  }
  function ag(t) {
    var e = og(t);
    return e && e.axisPointerModel;
  }
  function sg(t) {
    return !!t.get(["handle", "show"]);
  }
  function lg(t) {
    return t.type + "||" + t.id;
  }
  function ug(t, e, n, r) {
    var i = n.axis;
    if (!i.scale.isBlank()) {
      var o = n.getModel("splitArea"),
        a = o.getModel("areaStyle"),
        s = a.get("color"),
        l = r.coordinateSystem.getRect(),
        u = i.getTicksCoords({ tickModel: o, clamp: !0 });
      if (u.length) {
        var h = s.length,
          p = Lk(t).splitAreaColors,
          f = q(),
          d = 0;
        if (p)
          for (var g = 0; g < u.length; g++) {
            var v = p.get(u[g].tickValue);
            if (null != v) {
              d = (v + (h - 1) * g) % h;
              break;
            }
          }
        var y = i.toGlobalCoord(u[0].coord),
          m = a.getAreaStyle();
        s = M(s) ? s : [s];
        for (var g = 1; g < u.length; g++) {
          var _ = i.toGlobalCoord(u[g].coord),
            x = void 0,
            w = void 0,
            b = void 0,
            S = void 0;
          i.isHorizontal()
            ? ((x = y), (w = l.y), (b = _ - x), (S = l.height), (y = x + b))
            : ((x = l.x), (w = y), (b = l.width), (S = _ - w), (y = w + S));
          var T = u[g - 1].tickValue;
          null != T && f.set(T, d),
            e.add(
              new f_({
                anid: null != T ? "area_" + T : null,
                shape: { x: x, y: w, width: b, height: S },
                style: c({ fill: s[d] }, m),
                autoBatch: !0,
                silent: !0,
              })
            ),
            (d = (d + 1) % h);
        }
        Lk(t).splitAreaColors = f;
      }
    }
  }
  function hg(t) {
    Lk(t).splitAreaColors = null;
  }
  function cg(t) {
    t.registerComponentView(zk),
      t.registerComponentModel(ck),
      t.registerCoordinateSystem("cartesian2d", Tk),
      zd(t, "x", pk, Fk),
      zd(t, "y", pk, Fk),
      t.registerComponentView(Bk),
      t.registerComponentView(Nk),
      t.registerPreprocessor(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {});
      });
  }
  var pg = function (t, e) {
      return (pg =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    },
    fg = (function () {
      function t() {
        (this.firefox = !1),
          (this.ie = !1),
          (this.edge = !1),
          (this.newEdge = !1),
          (this.weChat = !1);
      }
      return t;
    })(),
    dg = (function () {
      function t() {
        (this.browser = new fg()),
          (this.node = !1),
          (this.wxa = !1),
          (this.worker = !1),
          (this.svgSupported = !1),
          (this.touchEventsSupported = !1),
          (this.pointerEventsSupported = !1),
          (this.domSupported = !1),
          (this.transformSupported = !1),
          (this.transform3dSupported = !1),
          (this.hasGlobalWindow = "undefined" != typeof window);
      }
      return t;
    })(),
    gg = new dg();
  "object" == typeof wx && "function" == typeof wx.getSystemInfoSync
    ? ((gg.wxa = !0), (gg.touchEventsSupported = !0))
    : "undefined" == typeof document && "undefined" != typeof self
    ? (gg.worker = !0)
    : "undefined" == typeof navigator
    ? ((gg.node = !0), (gg.svgSupported = !0))
    : n(navigator.userAgent, gg);
  var vg = 12,
    yg = "sans-serif",
    mg = vg + "px " + yg,
    _g = 20,
    xg = 100,
    wg =
      "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N",
    bg = r(wg),
    Sg = {
      createCanvas: function () {
        return (
          "undefined" != typeof document && document.createElement("canvas")
        );
      },
      measureText: (function () {
        var t, e;
        return function (n, r) {
          if (!t) {
            var i = Sg.createCanvas();
            t = i && i.getContext("2d");
          }
          if (t) return e !== r && (e = t.font = r || mg), t.measureText(n);
          (n = n || ""), (r = r || mg);
          var o = /^([0-9]*?)px$/.exec(r),
            a = +(o && o[1]) || vg,
            s = 0;
          if (r.indexOf("mono") >= 0) s = a * n.length;
          else
            for (var l = 0; l < n.length; l++) {
              var u = bg[n[l]];
              s += null == u ? a : u * a;
            }
          return { width: s };
        };
      })(),
      loadImage: function (t, e, n) {
        var r = new Image();
        return (r.onload = e), (r.onerror = n), (r.src = t), r;
      },
    },
    Mg = m(
      [
        "Function",
        "RegExp",
        "Date",
        "Error",
        "CanvasGradient",
        "CanvasPattern",
        "Image",
        "Canvas",
      ],
      function (t, e) {
        return (t["[object " + e + "]"] = !0), t;
      },
      {}
    ),
    Tg = m(
      [
        "Int8",
        "Uint8",
        "Uint8Clamped",
        "Int16",
        "Uint16",
        "Int32",
        "Uint32",
        "Float32",
        "Float64",
      ],
      function (t, e) {
        return (t["[object " + e + "Array]"] = !0), t;
      },
      {}
    ),
    Cg = Object.prototype.toString,
    kg = Array.prototype,
    Dg = kg.forEach,
    Ig = kg.filter,
    Ag = kg.slice,
    Lg = kg.map,
    Pg = function () {}.constructor,
    Og = Pg ? Pg.prototype : null,
    Rg = "__proto__",
    Eg = 2311,
    Bg = Sg.createCanvas,
    Ng = Og && T(Og.bind) ? Og.call.bind(Og.bind) : b,
    zg = "__ec_primitive__",
    Fg = (function () {
      function t(e) {
        function n(t, e) {
          r ? i.set(t, e) : i.set(e, t);
        }
        this.data = {};
        var r = M(e);
        this.data = {};
        var i = this;
        e instanceof t ? e.each(n) : e && v(e, n);
      }
      return (
        (t.prototype.get = function (t) {
          return this.data.hasOwnProperty(t) ? this.data[t] : null;
        }),
        (t.prototype.set = function (t, e) {
          return (this.data[t] = e);
        }),
        (t.prototype.each = function (t, e) {
          for (var n in this.data)
            this.data.hasOwnProperty(n) && t.call(e, this.data[n], n);
        }),
        (t.prototype.keys = function () {
          return w(this.data);
        }),
        (t.prototype.removeKey = function (t) {
          delete this.data[t];
        }),
        t
      );
    })(),
    Vg = 180 / Math.PI,
    Hg = (Object.freeze || Object)({
      guid: o,
      logError: a,
      clone: s,
      merge: l,
      mergeAll: u,
      extend: h,
      defaults: c,
      createCanvas: Bg,
      indexOf: p,
      inherits: f,
      mixin: d,
      isArrayLike: g,
      each: v,
      map: y,
      reduce: m,
      filter: _,
      find: x,
      keys: w,
      bind: Ng,
      curry: S,
      isArray: M,
      isFunction: T,
      isString: C,
      isStringSafe: k,
      isNumber: D,
      isObject: I,
      isBuiltInObject: A,
      isTypedArray: L,
      isDom: P,
      isGradientObject: O,
      isImagePatternObject: R,
      isRegExp: E,
      eqNaN: B,
      retrieve: N,
      retrieve2: z,
      retrieve3: F,
      slice: V,
      normalizeCssArray: H,
      assert: W,
      trim: G,
      setAsPrimitive: U,
      isPrimitive: X,
      HashMap: Fg,
      createHashMap: q,
      concatArray: Y,
      createObject: j,
      disableUserSelect: Z,
      hasOwn: K,
      noop: $,
      RADIAN_TO_DEGREE: Vg,
    }),
    Wg = oe,
    Gg = ae,
    Ug = pe,
    Xg = fe,
    qg = (Object.freeze || Object)({
      create: Q,
      copy: J,
      clone: te,
      set: ee,
      add: ne,
      scaleAndAdd: re,
      sub: ie,
      len: oe,
      length: Wg,
      lenSquare: ae,
      lengthSquare: Gg,
      mul: se,
      div: le,
      dot: ue,
      scale: he,
      normalize: ce,
      distance: pe,
      dist: Ug,
      distanceSquare: fe,
      distSquare: Xg,
      negate: de,
      lerp: ge,
      applyTransform: ve,
      min: ye,
      max: me,
    }),
    Yg = (function () {
      function t(t, e) {
        (this.target = t), (this.topTarget = e && e.topTarget);
      }
      return t;
    })(),
    jg = (function () {
      function t(t) {
        (this.handler = t),
          t.on("mousedown", this._dragStart, this),
          t.on("mousemove", this._drag, this),
          t.on("mouseup", this._dragEnd, this);
      }
      return (
        (t.prototype._dragStart = function (t) {
          for (var e = t.target; e && !e.draggable; )
            e = e.parent || e.__hostTarget;
          e &&
            ((this._draggingTarget = e),
            (e.dragging = !0),
            (this._x = t.offsetX),
            (this._y = t.offsetY),
            this.handler.dispatchToElement(new Yg(e, t), "dragstart", t.event));
        }),
        (t.prototype._drag = function (t) {
          var e = this._draggingTarget;
          if (e) {
            var n = t.offsetX,
              r = t.offsetY,
              i = n - this._x,
              o = r - this._y;
            (this._x = n),
              (this._y = r),
              e.drift(i, o, t),
              this.handler.dispatchToElement(new Yg(e, t), "drag", t.event);
            var a = this.handler.findHover(n, r, e).target,
              s = this._dropTarget;
            (this._dropTarget = a),
              e !== a &&
                (s &&
                  a !== s &&
                  this.handler.dispatchToElement(
                    new Yg(s, t),
                    "dragleave",
                    t.event
                  ),
                a &&
                  a !== s &&
                  this.handler.dispatchToElement(
                    new Yg(a, t),
                    "dragenter",
                    t.event
                  ));
          }
        }),
        (t.prototype._dragEnd = function (t) {
          var e = this._draggingTarget;
          e && (e.dragging = !1),
            this.handler.dispatchToElement(new Yg(e, t), "dragend", t.event),
            this._dropTarget &&
              this.handler.dispatchToElement(
                new Yg(this._dropTarget, t),
                "drop",
                t.event
              ),
            (this._draggingTarget = null),
            (this._dropTarget = null);
        }),
        t
      );
    })(),
    Zg = (function () {
      function t(t) {
        t && (this._$eventProcessor = t);
      }
      return (
        (t.prototype.on = function (t, e, n, r) {
          this._$handlers || (this._$handlers = {});
          var i = this._$handlers;
          if (
            ("function" == typeof e && ((r = n), (n = e), (e = null)), !n || !t)
          )
            return this;
          var o = this._$eventProcessor;
          null != e && o && o.normalizeQuery && (e = o.normalizeQuery(e)),
            i[t] || (i[t] = []);
          for (var a = 0; a < i[t].length; a++)
            if (i[t][a].h === n) return this;
          var s = {
              h: n,
              query: e,
              ctx: r || this,
              callAtLast: n.zrEventfulCallAtLast,
            },
            l = i[t].length - 1,
            u = i[t][l];
          return u && u.callAtLast ? i[t].splice(l, 0, s) : i[t].push(s), this;
        }),
        (t.prototype.isSilent = function (t) {
          var e = this._$handlers;
          return !e || !e[t] || !e[t].length;
        }),
        (t.prototype.off = function (t, e) {
          var n = this._$handlers;
          if (!n) return this;
          if (!t) return (this._$handlers = {}), this;
          if (e) {
            if (n[t]) {
              for (var r = [], i = 0, o = n[t].length; o > i; i++)
                n[t][i].h !== e && r.push(n[t][i]);
              n[t] = r;
            }
            n[t] && 0 === n[t].length && delete n[t];
          } else delete n[t];
          return this;
        }),
        (t.prototype.trigger = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          if (!this._$handlers) return this;
          var r = this._$handlers[t],
            i = this._$eventProcessor;
          if (r)
            for (var o = e.length, a = r.length, s = 0; a > s; s++) {
              var l = r[s];
              if (!i || !i.filter || null == l.query || i.filter(t, l.query))
                switch (o) {
                  case 0:
                    l.h.call(l.ctx);
                    break;
                  case 1:
                    l.h.call(l.ctx, e[0]);
                    break;
                  case 2:
                    l.h.call(l.ctx, e[0], e[1]);
                    break;
                  default:
                    l.h.apply(l.ctx, e);
                }
            }
          return i && i.afterTrigger && i.afterTrigger(t), this;
        }),
        (t.prototype.triggerWithContext = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          if (!this._$handlers) return this;
          var r = this._$handlers[t],
            i = this._$eventProcessor;
          if (r)
            for (
              var o = e.length, a = e[o - 1], s = r.length, l = 0;
              s > l;
              l++
            ) {
              var u = r[l];
              if (!i || !i.filter || null == u.query || i.filter(t, u.query))
                switch (o) {
                  case 0:
                    u.h.call(a);
                    break;
                  case 1:
                    u.h.call(a, e[0]);
                    break;
                  case 2:
                    u.h.call(a, e[0], e[1]);
                    break;
                  default:
                    u.h.apply(a, e.slice(1, o - 1));
                }
            }
          return i && i.afterTrigger && i.afterTrigger(t), this;
        }),
        t
      );
    })(),
    Kg = Math.log(2),
    $g = "___zrEVENTSAVED",
    Qg = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Jg = [],
    tv = gg.browser.firefox && +gg.browser.version.split(".")[0] < 39,
    ev = function (t) {
      t.preventDefault(), t.stopPropagation(), (t.cancelBubble = !0);
    },
    nv = (function () {
      function t() {
        this._track = [];
      }
      return (
        (t.prototype.recognize = function (t, e, n) {
          return this._doTrack(t, e, n), this._recognize(t);
        }),
        (t.prototype.clear = function () {
          return (this._track.length = 0), this;
        }),
        (t.prototype._doTrack = function (t, e, n) {
          var r = t.touches;
          if (r) {
            for (
              var i = { points: [], touches: [], target: e, event: t },
                o = 0,
                a = r.length;
              a > o;
              o++
            ) {
              var s = r[o],
                l = Te(n, s, {});
              i.points.push([l.zrX, l.zrY]), i.touches.push(s);
            }
            this._track.push(i);
          }
        }),
        (t.prototype._recognize = function (t) {
          for (var e in rv)
            if (rv.hasOwnProperty(e)) {
              var n = rv[e](this._track, t);
              if (n) return n;
            }
        }),
        t
      );
    })(),
    rv = {
      pinch: function (t, e) {
        var n = t.length;
        if (n) {
          var r = (t[n - 1] || {}).points,
            i = (t[n - 2] || {}).points || r;
          if (i && i.length > 1 && r && r.length > 1) {
            var o = Pe(r) / Pe(i);
            !isFinite(o) && (o = 1), (e.pinchScale = o);
            var a = Oe(r);
            return (
              (e.pinchX = a[0]),
              (e.pinchY = a[1]),
              { type: "pinch", target: t[0].target, event: e }
            );
          }
        }
      },
    },
    iv = "silent",
    ov = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.handler = null), e;
      }
      return (
        e(n, t),
        (n.prototype.dispose = function () {}),
        (n.prototype.setCursor = function () {}),
        n
      );
    })(Zg),
    av = (function () {
      function t(t, e) {
        (this.x = t), (this.y = e);
      }
      return t;
    })(),
    sv = [
      "click",
      "dblclick",
      "mousewheel",
      "mouseout",
      "mouseup",
      "mousedown",
      "mousemove",
      "contextmenu",
    ],
    lv = (function (t) {
      function n(e, n, r, i) {
        var o = t.call(this) || this;
        return (
          (o._hovered = new av(0, 0)),
          (o.storage = e),
          (o.painter = n),
          (o.painterRoot = i),
          (r = r || new ov()),
          (o.proxy = null),
          o.setHandlerProxy(r),
          (o._draggingMgr = new jg(o)),
          o
        );
      }
      return (
        e(n, t),
        (n.prototype.setHandlerProxy = function (t) {
          this.proxy && this.proxy.dispose(),
            t &&
              (v(
                sv,
                function (e) {
                  t.on && t.on(e, this[e], this);
                },
                this
              ),
              (t.handler = this)),
            (this.proxy = t);
        }),
        (n.prototype.mousemove = function (t) {
          var e = t.zrX,
            n = t.zrY,
            r = Ne(this, e, n),
            i = this._hovered,
            o = i.target;
          o && !o.__zr && ((i = this.findHover(i.x, i.y)), (o = i.target));
          var a = (this._hovered = r ? new av(e, n) : this.findHover(e, n)),
            s = a.target,
            l = this.proxy;
          l.setCursor && l.setCursor(s ? s.cursor : "default"),
            o && s !== o && this.dispatchToElement(i, "mouseout", t),
            this.dispatchToElement(a, "mousemove", t),
            s && s !== o && this.dispatchToElement(a, "mouseover", t);
        }),
        (n.prototype.mouseout = function (t) {
          var e = t.zrEventControl;
          "only_globalout" !== e &&
            this.dispatchToElement(this._hovered, "mouseout", t),
            "no_globalout" !== e &&
              this.trigger("globalout", { type: "globalout", event: t });
        }),
        (n.prototype.resize = function () {
          this._hovered = new av(0, 0);
        }),
        (n.prototype.dispatch = function (t, e) {
          var n = this[t];
          n && n.call(this, e);
        }),
        (n.prototype.dispose = function () {
          this.proxy.dispose(),
            (this.storage = null),
            (this.proxy = null),
            (this.painter = null);
        }),
        (n.prototype.setCursorStyle = function (t) {
          var e = this.proxy;
          e.setCursor && e.setCursor(t);
        }),
        (n.prototype.dispatchToElement = function (t, e, n) {
          t = t || {};
          var r = t.target;
          if (!r || !r.silent) {
            for (
              var i = "on" + e, o = Re(e, t, n);
              r &&
              (r[i] && (o.cancelBubble = !!r[i].call(r, o)),
              r.trigger(e, o),
              (r = r.__hostTarget ? r.__hostTarget : r.parent),
              !o.cancelBubble);

            );
            o.cancelBubble ||
              (this.trigger(e, o),
              this.painter &&
                this.painter.eachOtherLayer &&
                this.painter.eachOtherLayer(function (t) {
                  "function" == typeof t[i] && t[i].call(t, o),
                    t.trigger && t.trigger(e, o);
                }));
          }
        }),
        (n.prototype.findHover = function (t, e, n) {
          for (
            var r = this.storage.getDisplayList(),
              i = new av(t, e),
              o = r.length - 1;
            o >= 0;
            o--
          ) {
            var a = void 0;
            if (
              r[o] !== n &&
              !r[o].ignore &&
              (a = Be(r[o], t, e)) &&
              (!i.topTarget && (i.topTarget = r[o]), a !== iv)
            ) {
              i.target = r[o];
              break;
            }
          }
          return i;
        }),
        (n.prototype.processGesture = function (t, e) {
          this._gestureMgr || (this._gestureMgr = new nv());
          var n = this._gestureMgr;
          "start" === e && n.clear();
          var r = n.recognize(
            t,
            this.findHover(t.zrX, t.zrY, null).target,
            this.proxy.dom
          );
          if (("end" === e && n.clear(), r)) {
            var i = r.type;
            t.gestureEvent = i;
            var o = new av();
            (o.target = r.target), this.dispatchToElement(o, i, r.event);
          }
        }),
        n
      );
    })(Zg);
  v(
    ["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"],
    function (t) {
      lv.prototype[t] = function (e) {
        var n,
          r,
          i = e.zrX,
          o = e.zrY,
          a = Ne(this, i, o);
        if (
          (("mouseup" === t && a) ||
            ((n = this.findHover(i, o)), (r = n.target)),
          "mousedown" === t)
        )
          (this._downEl = r),
            (this._downPoint = [e.zrX, e.zrY]),
            (this._upEl = r);
        else if ("mouseup" === t) this._upEl = r;
        else if ("click" === t) {
          if (
            this._downEl !== this._upEl ||
            !this._downPoint ||
            Ug(this._downPoint, [e.zrX, e.zrY]) > 4
          )
            return;
          this._downPoint = null;
        }
        this.dispatchToElement(n, t, e);
      };
    }
  );
  var uv,
    hv = 32,
    cv = 7,
    pv = 1,
    fv = 2,
    dv = 4,
    gv = !1,
    vv = (function () {
      function t() {
        (this._roots = []),
          (this._displayList = []),
          (this._displayListLen = 0),
          (this.displayableSortFunc = Ye);
      }
      return (
        (t.prototype.traverse = function (t, e) {
          for (var n = 0; n < this._roots.length; n++)
            this._roots[n].traverse(t, e);
        }),
        (t.prototype.getDisplayList = function (t, e) {
          e = e || !1;
          var n = this._displayList;
          return (t || !n.length) && this.updateDisplayList(e), n;
        }),
        (t.prototype.updateDisplayList = function (t) {
          this._displayListLen = 0;
          for (
            var e = this._roots, n = this._displayList, r = 0, i = e.length;
            i > r;
            r++
          )
            this._updateAndAddDisplayable(e[r], null, t);
          (n.length = this._displayListLen), Xe(n, Ye);
        }),
        (t.prototype._updateAndAddDisplayable = function (t, e, n) {
          if (!t.ignore || n) {
            t.beforeUpdate(), t.update(), t.afterUpdate();
            var r = t.getClipPath();
            if (t.ignoreClip) e = null;
            else if (r) {
              e = e ? e.slice() : [];
              for (var i = r, o = t; i; )
                (i.parent = o),
                  i.updateTransform(),
                  e.push(i),
                  (o = i),
                  (i = i.getClipPath());
            }
            if (t.childrenRef) {
              for (var a = t.childrenRef(), s = 0; s < a.length; s++) {
                var l = a[s];
                t.__dirty && (l.__dirty |= pv),
                  this._updateAndAddDisplayable(l, e, n);
              }
              t.__dirty = 0;
            } else {
              var u = t;
              e && e.length
                ? (u.__clipPaths = e)
                : u.__clipPaths &&
                  u.__clipPaths.length > 0 &&
                  (u.__clipPaths = []),
                isNaN(u.z) && (qe(), (u.z = 0)),
                isNaN(u.z2) && (qe(), (u.z2 = 0)),
                isNaN(u.zlevel) && (qe(), (u.zlevel = 0)),
                (this._displayList[this._displayListLen++] = u);
            }
            var h = t.getDecalElement && t.getDecalElement();
            h && this._updateAndAddDisplayable(h, e, n);
            var c = t.getTextGuideLine();
            c && this._updateAndAddDisplayable(c, e, n);
            var p = t.getTextContent();
            p && this._updateAndAddDisplayable(p, e, n);
          }
        }),
        (t.prototype.addRoot = function (t) {
          (t.__zr && t.__zr.storage === this) || this._roots.push(t);
        }),
        (t.prototype.delRoot = function (t) {
          if (t instanceof Array)
            for (var e = 0, n = t.length; n > e; e++) this.delRoot(t[e]);
          else {
            var r = p(this._roots, t);
            r >= 0 && this._roots.splice(r, 1);
          }
        }),
        (t.prototype.delAllRoots = function () {
          (this._roots = []),
            (this._displayList = []),
            (this._displayListLen = 0);
        }),
        (t.prototype.getRoots = function () {
          return this._roots;
        }),
        (t.prototype.dispose = function () {
          (this._displayList = null), (this._roots = null);
        }),
        t
      );
    })();
  uv =
    (gg.hasGlobalWindow &&
      ((window.requestAnimationFrame &&
        window.requestAnimationFrame.bind(window)) ||
        (window.msRequestAnimationFrame &&
          window.msRequestAnimationFrame.bind(window)) ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame)) ||
    function (t) {
      return setTimeout(t, 16);
    };
  var yv = uv,
    mv = {
      linear: function (t) {
        return t;
      },
      quadraticIn: function (t) {
        return t * t;
      },
      quadraticOut: function (t) {
        return t * (2 - t);
      },
      quadraticInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
      },
      cubicIn: function (t) {
        return t * t * t;
      },
      cubicOut: function (t) {
        return --t * t * t + 1;
      },
      cubicInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
      },
      quarticIn: function (t) {
        return t * t * t * t;
      },
      quarticOut: function (t) {
        return 1 - --t * t * t * t;
      },
      quarticInOut: function (t) {
        return (t *= 2) < 1
          ? 0.5 * t * t * t * t
          : -0.5 * ((t -= 2) * t * t * t - 2);
      },
      quinticIn: function (t) {
        return t * t * t * t * t;
      },
      quinticOut: function (t) {
        return --t * t * t * t * t + 1;
      },
      quinticInOut: function (t) {
        return (t *= 2) < 1
          ? 0.5 * t * t * t * t * t
          : 0.5 * ((t -= 2) * t * t * t * t + 2);
      },
      sinusoidalIn: function (t) {
        return 1 - Math.cos((t * Math.PI) / 2);
      },
      sinusoidalOut: function (t) {
        return Math.sin((t * Math.PI) / 2);
      },
      sinusoidalInOut: function (t) {
        return 0.5 * (1 - Math.cos(Math.PI * t));
      },
      exponentialIn: function (t) {
        return 0 === t ? 0 : Math.pow(1024, t - 1);
      },
      exponentialOut: function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      },
      exponentialInOut: function (t) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (t *= 2) < 1
          ? 0.5 * Math.pow(1024, t - 1)
          : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
      },
      circularIn: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      circularOut: function (t) {
        return Math.sqrt(1 - --t * t);
      },
      circularInOut: function (t) {
        return (t *= 2) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      },
      elasticIn: function (t) {
        var e,
          n = 0.1,
          r = 0.4;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (!n || 1 > n
              ? ((n = 1), (e = r / 4))
              : (e = (r * Math.asin(1 / n)) / (2 * Math.PI)),
            -(
              n *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin((2 * (t - e) * Math.PI) / r)
            ));
      },
      elasticOut: function (t) {
        var e,
          n = 0.1,
          r = 0.4;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (!n || 1 > n
              ? ((n = 1), (e = r / 4))
              : (e = (r * Math.asin(1 / n)) / (2 * Math.PI)),
            n * Math.pow(2, -10 * t) * Math.sin((2 * (t - e) * Math.PI) / r) +
              1);
      },
      elasticInOut: function (t) {
        var e,
          n = 0.1,
          r = 0.4;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (!n || 1 > n
              ? ((n = 1), (e = r / 4))
              : (e = (r * Math.asin(1 / n)) / (2 * Math.PI)),
            (t *= 2) < 1
              ? -0.5 *
                n *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin((2 * (t - e) * Math.PI) / r)
              : n *
                  Math.pow(2, -10 * (t -= 1)) *
                  Math.sin((2 * (t - e) * Math.PI) / r) *
                  0.5 +
                1);
      },
      backIn: function (t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      backOut: function (t) {
        var e = 1.70158;
        return --t * t * ((e + 1) * t + e) + 1;
      },
      backInOut: function (t) {
        var e = 2.5949095;
        return (t *= 2) < 1
          ? 0.5 * t * t * ((e + 1) * t - e)
          : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
      },
      bounceIn: function (t) {
        return 1 - mv.bounceOut(1 - t);
      },
      bounceOut: function (t) {
        return 1 / 2.75 > t
          ? 7.5625 * t * t
          : 2 / 2.75 > t
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : 2.5 / 2.75 > t
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      },
      bounceInOut: function (t) {
        return 0.5 > t
          ? 0.5 * mv.bounceIn(2 * t)
          : 0.5 * mv.bounceOut(2 * t - 1) + 0.5;
      },
    },
    _v = Math.pow,
    xv = Math.sqrt,
    wv = 1e-8,
    bv = 1e-4,
    Sv = xv(3),
    Mv = 1 / 3,
    Tv = Q(),
    Cv = Q(),
    kv = Q(),
    Dv = /cubic-bezier\(([0-9,\.e ]+)\)/,
    Iv = (function () {
      function t(t) {
        (this._inited = !1),
          (this._startTime = 0),
          (this._pausedTime = 0),
          (this._paused = !1),
          (this._life = t.life || 1e3),
          (this._delay = t.delay || 0),
          (this.loop = t.loop || !1),
          (this.onframe = t.onframe || $),
          (this.ondestroy = t.ondestroy || $),
          (this.onrestart = t.onrestart || $),
          t.easing && this.setEasing(t.easing);
      }
      return (
        (t.prototype.step = function (t, e) {
          if (
            (this._inited ||
              ((this._startTime = t + this._delay), (this._inited = !0)),
            this._paused)
          )
            return void (this._pausedTime += e);
          var n = this._life,
            r = t - this._startTime - this._pausedTime,
            i = r / n;
          0 > i && (i = 0), (i = Math.min(i, 1));
          var o = this.easingFunc,
            a = o ? o(i) : i;
          if ((this.onframe(a), 1 === i)) {
            if (!this.loop) return !0;
            var s = r % n;
            (this._startTime = t - s), (this._pausedTime = 0), this.onrestart();
          }
          return !1;
        }),
        (t.prototype.pause = function () {
          this._paused = !0;
        }),
        (t.prototype.resume = function () {
          this._paused = !1;
        }),
        (t.prototype.setEasing = function (t) {
          (this.easing = t), (this.easingFunc = T(t) ? t : mv[t] || cn(t));
        }),
        t
      );
    })(),
    Av = (function () {
      function t(t) {
        this.value = t;
      }
      return t;
    })(),
    Lv = (function () {
      function t() {
        this._len = 0;
      }
      return (
        (t.prototype.insert = function (t) {
          var e = new Av(t);
          return this.insertEntry(e), e;
        }),
        (t.prototype.insertEntry = function (t) {
          this.head
            ? ((this.tail.next = t),
              (t.prev = this.tail),
              (t.next = null),
              (this.tail = t))
            : (this.head = this.tail = t),
            this._len++;
        }),
        (t.prototype.remove = function (t) {
          var e = t.prev,
            n = t.next;
          e ? (e.next = n) : (this.head = n),
            n ? (n.prev = e) : (this.tail = e),
            (t.next = t.prev = null),
            this._len--;
        }),
        (t.prototype.len = function () {
          return this._len;
        }),
        (t.prototype.clear = function () {
          (this.head = this.tail = null), (this._len = 0);
        }),
        t
      );
    })(),
    Pv = (function () {
      function t(t) {
        (this._list = new Lv()),
          (this._maxSize = 10),
          (this._map = {}),
          (this._maxSize = t);
      }
      return (
        (t.prototype.put = function (t, e) {
          var n = this._list,
            r = this._map,
            i = null;
          if (null == r[t]) {
            var o = n.len(),
              a = this._lastRemovedEntry;
            if (o >= this._maxSize && o > 0) {
              var s = n.head;
              n.remove(s),
                delete r[s.key],
                (i = s.value),
                (this._lastRemovedEntry = s);
            }
            a ? (a.value = e) : (a = new Av(e)),
              (a.key = t),
              n.insertEntry(a),
              (r[t] = a);
          }
          return i;
        }),
        (t.prototype.get = function (t) {
          var e = this._map[t],
            n = this._list;
          return null != e
            ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value)
            : void 0;
        }),
        (t.prototype.clear = function () {
          this._list.clear(), (this._map = {});
        }),
        (t.prototype.len = function () {
          return this._list.len();
        }),
        t
      );
    })(),
    Ov = {
      transparent: [0, 0, 0, 0],
      aliceblue: [240, 248, 255, 1],
      antiquewhite: [250, 235, 215, 1],
      aqua: [0, 255, 255, 1],
      aquamarine: [127, 255, 212, 1],
      azure: [240, 255, 255, 1],
      beige: [245, 245, 220, 1],
      bisque: [255, 228, 196, 1],
      black: [0, 0, 0, 1],
      blanchedalmond: [255, 235, 205, 1],
      blue: [0, 0, 255, 1],
      blueviolet: [138, 43, 226, 1],
      brown: [165, 42, 42, 1],
      burlywood: [222, 184, 135, 1],
      cadetblue: [95, 158, 160, 1],
      chartreuse: [127, 255, 0, 1],
      chocolate: [210, 105, 30, 1],
      coral: [255, 127, 80, 1],
      cornflowerblue: [100, 149, 237, 1],
      cornsilk: [255, 248, 220, 1],
      crimson: [220, 20, 60, 1],
      cyan: [0, 255, 255, 1],
      darkblue: [0, 0, 139, 1],
      darkcyan: [0, 139, 139, 1],
      darkgoldenrod: [184, 134, 11, 1],
      darkgray: [169, 169, 169, 1],
      darkgreen: [0, 100, 0, 1],
      darkgrey: [169, 169, 169, 1],
      darkkhaki: [189, 183, 107, 1],
      darkmagenta: [139, 0, 139, 1],
      darkolivegreen: [85, 107, 47, 1],
      darkorange: [255, 140, 0, 1],
      darkorchid: [153, 50, 204, 1],
      darkred: [139, 0, 0, 1],
      darksalmon: [233, 150, 122, 1],
      darkseagreen: [143, 188, 143, 1],
      darkslateblue: [72, 61, 139, 1],
      darkslategray: [47, 79, 79, 1],
      darkslategrey: [47, 79, 79, 1],
      darkturquoise: [0, 206, 209, 1],
      darkviolet: [148, 0, 211, 1],
      deeppink: [255, 20, 147, 1],
      deepskyblue: [0, 191, 255, 1],
      dimgray: [105, 105, 105, 1],
      dimgrey: [105, 105, 105, 1],
      dodgerblue: [30, 144, 255, 1],
      firebrick: [178, 34, 34, 1],
      floralwhite: [255, 250, 240, 1],
      forestgreen: [34, 139, 34, 1],
      fuchsia: [255, 0, 255, 1],
      gainsboro: [220, 220, 220, 1],
      ghostwhite: [248, 248, 255, 1],
      gold: [255, 215, 0, 1],
      goldenrod: [218, 165, 32, 1],
      gray: [128, 128, 128, 1],
      green: [0, 128, 0, 1],
      greenyellow: [173, 255, 47, 1],
      grey: [128, 128, 128, 1],
      honeydew: [240, 255, 240, 1],
      hotpink: [255, 105, 180, 1],
      indianred: [205, 92, 92, 1],
      indigo: [75, 0, 130, 1],
      ivory: [255, 255, 240, 1],
      khaki: [240, 230, 140, 1],
      lavender: [230, 230, 250, 1],
      lavenderblush: [255, 240, 245, 1],
      lawngreen: [124, 252, 0, 1],
      lemonchiffon: [255, 250, 205, 1],
      lightblue: [173, 216, 230, 1],
      lightcoral: [240, 128, 128, 1],
      lightcyan: [224, 255, 255, 1],
      lightgoldenrodyellow: [250, 250, 210, 1],
      lightgray: [211, 211, 211, 1],
      lightgreen: [144, 238, 144, 1],
      lightgrey: [211, 211, 211, 1],
      lightpink: [255, 182, 193, 1],
      lightsalmon: [255, 160, 122, 1],
      lightseagreen: [32, 178, 170, 1],
      lightskyblue: [135, 206, 250, 1],
      lightslategray: [119, 136, 153, 1],
      lightslategrey: [119, 136, 153, 1],
      lightsteelblue: [176, 196, 222, 1],
      lightyellow: [255, 255, 224, 1],
      lime: [0, 255, 0, 1],
      limegreen: [50, 205, 50, 1],
      linen: [250, 240, 230, 1],
      magenta: [255, 0, 255, 1],
      maroon: [128, 0, 0, 1],
      mediumaquamarine: [102, 205, 170, 1],
      mediumblue: [0, 0, 205, 1],
      mediumorchid: [186, 85, 211, 1],
      mediumpurple: [147, 112, 219, 1],
      mediumseagreen: [60, 179, 113, 1],
      mediumslateblue: [123, 104, 238, 1],
      mediumspringgreen: [0, 250, 154, 1],
      mediumturquoise: [72, 209, 204, 1],
      mediumvioletred: [199, 21, 133, 1],
      midnightblue: [25, 25, 112, 1],
      mintcream: [245, 255, 250, 1],
      mistyrose: [255, 228, 225, 1],
      moccasin: [255, 228, 181, 1],
      navajowhite: [255, 222, 173, 1],
      navy: [0, 0, 128, 1],
      oldlace: [253, 245, 230, 1],
      olive: [128, 128, 0, 1],
      olivedrab: [107, 142, 35, 1],
      orange: [255, 165, 0, 1],
      orangered: [255, 69, 0, 1],
      orchid: [218, 112, 214, 1],
      palegoldenrod: [238, 232, 170, 1],
      palegreen: [152, 251, 152, 1],
      paleturquoise: [175, 238, 238, 1],
      palevioletred: [219, 112, 147, 1],
      papayawhip: [255, 239, 213, 1],
      peachpuff: [255, 218, 185, 1],
      peru: [205, 133, 63, 1],
      pink: [255, 192, 203, 1],
      plum: [221, 160, 221, 1],
      powderblue: [176, 224, 230, 1],
      purple: [128, 0, 128, 1],
      red: [255, 0, 0, 1],
      rosybrown: [188, 143, 143, 1],
      royalblue: [65, 105, 225, 1],
      saddlebrown: [139, 69, 19, 1],
      salmon: [250, 128, 114, 1],
      sandybrown: [244, 164, 96, 1],
      seagreen: [46, 139, 87, 1],
      seashell: [255, 245, 238, 1],
      sienna: [160, 82, 45, 1],
      silver: [192, 192, 192, 1],
      skyblue: [135, 206, 235, 1],
      slateblue: [106, 90, 205, 1],
      slategray: [112, 128, 144, 1],
      slategrey: [112, 128, 144, 1],
      snow: [255, 250, 250, 1],
      springgreen: [0, 255, 127, 1],
      steelblue: [70, 130, 180, 1],
      tan: [210, 180, 140, 1],
      teal: [0, 128, 128, 1],
      thistle: [216, 191, 216, 1],
      tomato: [255, 99, 71, 1],
      turquoise: [64, 224, 208, 1],
      violet: [238, 130, 238, 1],
      wheat: [245, 222, 179, 1],
      white: [255, 255, 255, 1],
      whitesmoke: [245, 245, 245, 1],
      yellow: [255, 255, 0, 1],
      yellowgreen: [154, 205, 50, 1],
    },
    Rv = new Pv(20),
    Ev = null,
    Bv = kn,
    Nv = Dn,
    zv = (Object.freeze || Object)({
      parse: bn,
      lift: Tn,
      toHex: Cn,
      fastLerp: kn,
      fastMapToColor: Bv,
      lerp: Dn,
      mapToColor: Nv,
      modifyHSL: In,
      modifyAlpha: An,
      stringify: Ln,
      lum: Pn,
      random: On,
    }),
    Fv =
      ((function () {
        return gg.hasGlobalWindow && T(window.btoa)
          ? function (t) {
              return window.btoa(unescape(t));
            }
          : "undefined" != typeof Buffer
          ? function (t) {
              return Buffer.from(t).toString("base64");
            }
          : function () {
              return null;
            };
      })(),
      Array.prototype.slice),
    Vv = 0,
    Hv = 1,
    Wv = 2,
    Gv = 3,
    Uv = 4,
    Xv = 5,
    qv = 6,
    Yv = [0, 0, 0, 0],
    jv = (function () {
      function t(t) {
        (this.keyframes = []),
          (this.discrete = !1),
          (this._invalid = !1),
          (this._needsSort = !1),
          (this._lastFr = 0),
          (this._lastFrP = 0),
          (this.propName = t);
      }
      return (
        (t.prototype.isFinished = function () {
          return this._finished;
        }),
        (t.prototype.setFinished = function () {
          (this._finished = !0),
            this._additiveTrack && this._additiveTrack.setFinished();
        }),
        (t.prototype.needsAnimate = function () {
          return this.keyframes.length >= 1;
        }),
        (t.prototype.getAdditiveTrack = function () {
          return this._additiveTrack;
        }),
        (t.prototype.addKeyframe = function (t, e, n) {
          this._needsSort = !0;
          var r = this.keyframes,
            i = r.length,
            o = !1,
            a = qv,
            s = e;
          if (g(e)) {
            var l = Xn(e);
            (a = l),
              ((1 === l && !D(e[0])) || (2 === l && !D(e[0][0]))) && (o = !0);
          } else if (D(e) && !B(e)) a = Vv;
          else if (C(e))
            if (isNaN(+e)) {
              var u = bn(e);
              u && ((s = u), (a = Gv));
            } else a = Vv;
          else if (O(e)) {
            var c = h({}, s);
            (c.colorStops = y(e.colorStops, function (t) {
              return { offset: t.offset, color: bn(t.color) };
            })),
              Rn(e) ? (a = Uv) : En(e) && (a = Xv),
              (s = c);
          }
          0 === i
            ? (this.valType = a)
            : (a !== this.valType || a === qv) && (o = !0),
            (this.discrete = this.discrete || o);
          var p = { time: t, value: s, rawValue: e, percent: 0 };
          return (
            n && ((p.easing = n), (p.easingFunc = T(n) ? n : mv[n] || cn(n))),
            r.push(p),
            p
          );
        }),
        (t.prototype.prepare = function (t, e) {
          var n = this.keyframes;
          this._needsSort &&
            n.sort(function (t, e) {
              return t.time - e.time;
            });
          for (
            var r = this.valType,
              i = n.length,
              o = n[i - 1],
              a = this.discrete,
              s = Yn(r),
              l = qn(r),
              u = 0;
            i > u;
            u++
          ) {
            var h = n[u],
              c = h.value,
              p = o.value;
            (h.percent = h.time / t),
              a ||
                (s && u !== i - 1
                  ? Wn(c, p, r)
                  : l && Hn(c.colorStops, p.colorStops));
          }
          if (
            !a &&
            r !== Xv &&
            e &&
            this.needsAnimate() &&
            e.needsAnimate() &&
            r === e.valType &&
            !e._finished
          ) {
            this._additiveTrack = e;
            for (var f = n[0].value, u = 0; i > u; u++)
              r === Vv
                ? (n[u].additiveValue = n[u].value - f)
                : r === Gv
                ? (n[u].additiveValue = Fn([], n[u].value, f, -1))
                : Yn(r) &&
                  (n[u].additiveValue =
                    r === Hv
                      ? Fn([], n[u].value, f, -1)
                      : Vn([], n[u].value, f, -1));
          }
        }),
        (t.prototype.step = function (t, e) {
          if (!this._finished) {
            this._additiveTrack &&
              this._additiveTrack._finished &&
              (this._additiveTrack = null);
            var n,
              r,
              i,
              o = null != this._additiveTrack,
              a = o ? "additiveValue" : "value",
              s = this.valType,
              l = this.keyframes,
              u = l.length,
              h = this.propName,
              c = s === Gv,
              p = this._lastFr,
              f = Math.min;
            if (1 === u) r = i = l[0];
            else {
              if (0 > e) n = 0;
              else if (e < this._lastFrP) {
                var d = f(p + 1, u - 1);
                for (n = d; n >= 0 && !(l[n].percent <= e); n--);
                n = f(n, u - 2);
              } else {
                for (n = p; u > n && !(l[n].percent > e); n++);
                n = f(n - 1, u - 2);
              }
              (i = l[n + 1]), (r = l[n]);
            }
            if (r && i) {
              (this._lastFr = n), (this._lastFrP = e);
              var g = i.percent - r.percent,
                v = 0 === g ? 1 : f((e - r.percent) / g, 1);
              i.easingFunc && (v = i.easingFunc(v));
              var m = o ? this._additiveValue : c ? Yv : t[h];
              if (
                ((!Yn(s) && !c) || m || (m = this._additiveValue = []),
                this.discrete)
              )
                t[h] = 1 > v ? r.rawValue : i.rawValue;
              else if (Yn(s))
                s === Hv ? Nn(m, r[a], i[a], v) : zn(m, r[a], i[a], v);
              else if (qn(s)) {
                var _ = r[a],
                  x = i[a],
                  w = s === Uv;
                (t[h] = {
                  type: w ? "linear" : "radial",
                  x: Bn(_.x, x.x, v),
                  y: Bn(_.y, x.y, v),
                  colorStops: y(_.colorStops, function (t, e) {
                    var n = x.colorStops[e];
                    return {
                      offset: Bn(t.offset, n.offset, v),
                      color: Un(Nn([], t.color, n.color, v)),
                    };
                  }),
                  global: x.global,
                }),
                  w
                    ? ((t[h].x2 = Bn(_.x2, x.x2, v)),
                      (t[h].y2 = Bn(_.y2, x.y2, v)))
                    : (t[h].r = Bn(_.r, x.r, v));
              } else if (c) Nn(m, r[a], i[a], v), o || (t[h] = Un(m));
              else {
                var b = Bn(r[a], i[a], v);
                o ? (this._additiveValue = b) : (t[h] = b);
              }
              o && this._addToTarget(t);
            }
          }
        }),
        (t.prototype._addToTarget = function (t) {
          var e = this.valType,
            n = this.propName,
            r = this._additiveValue;
          e === Vv
            ? (t[n] = t[n] + r)
            : e === Gv
            ? (bn(t[n], Yv), Fn(Yv, Yv, r, 1), (t[n] = Un(Yv)))
            : e === Hv
            ? Fn(t[n], t[n], r, 1)
            : e === Wv && Vn(t[n], t[n], r, 1);
        }),
        t
      );
    })(),
    Zv = (function () {
      function t(t, e, n, r) {
        return (
          (this._tracks = {}),
          (this._trackKeys = []),
          (this._maxTime = 0),
          (this._started = 0),
          (this._clip = null),
          (this._target = t),
          (this._loop = e),
          e && r
            ? void a("Can' use additive animation on looped animation.")
            : ((this._additiveAnimators = r), void (this._allowDiscrete = n))
        );
      }
      return (
        (t.prototype.getMaxTime = function () {
          return this._maxTime;
        }),
        (t.prototype.getDelay = function () {
          return this._delay;
        }),
        (t.prototype.getLoop = function () {
          return this._loop;
        }),
        (t.prototype.getTarget = function () {
          return this._target;
        }),
        (t.prototype.changeTarget = function (t) {
          this._target = t;
        }),
        (t.prototype.when = function (t, e, n) {
          return this.whenWithKeys(t, e, w(e), n);
        }),
        (t.prototype.whenWithKeys = function (t, e, n, r) {
          for (var i = this._tracks, o = 0; o < n.length; o++) {
            var a = n[o],
              s = i[a];
            if (!s) {
              s = i[a] = new jv(a);
              var l = void 0,
                u = this._getAdditiveTrack(a);
              if (u) {
                var h = u.keyframes,
                  c = h[h.length - 1];
                (l = c && c.value), u.valType === Gv && l && (l = Un(l));
              } else l = this._target[a];
              if (null == l) continue;
              t > 0 && s.addKeyframe(0, Gn(l), r), this._trackKeys.push(a);
            }
            s.addKeyframe(t, Gn(e[a]), r);
          }
          return (this._maxTime = Math.max(this._maxTime, t)), this;
        }),
        (t.prototype.pause = function () {
          this._clip.pause(), (this._paused = !0);
        }),
        (t.prototype.resume = function () {
          this._clip.resume(), (this._paused = !1);
        }),
        (t.prototype.isPaused = function () {
          return !!this._paused;
        }),
        (t.prototype.duration = function (t) {
          return (this._maxTime = t), (this._force = !0), this;
        }),
        (t.prototype._doneCallback = function () {
          this._setTracksFinished(), (this._clip = null);
          var t = this._doneCbs;
          if (t) for (var e = t.length, n = 0; e > n; n++) t[n].call(this);
        }),
        (t.prototype._abortedCallback = function () {
          this._setTracksFinished();
          var t = this.animation,
            e = this._abortedCbs;
          if ((t && t.removeClip(this._clip), (this._clip = null), e))
            for (var n = 0; n < e.length; n++) e[n].call(this);
        }),
        (t.prototype._setTracksFinished = function () {
          for (
            var t = this._tracks, e = this._trackKeys, n = 0;
            n < e.length;
            n++
          )
            t[e[n]].setFinished();
        }),
        (t.prototype._getAdditiveTrack = function (t) {
          var e,
            n = this._additiveAnimators;
          if (n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r].getTrack(t);
              i && (e = i);
            }
          return e;
        }),
        (t.prototype.start = function (t) {
          if (!(this._started > 0)) {
            this._started = 1;
            for (
              var e = this, n = [], r = this._maxTime || 0, i = 0;
              i < this._trackKeys.length;
              i++
            ) {
              var o = this._trackKeys[i],
                a = this._tracks[o],
                s = this._getAdditiveTrack(o),
                l = a.keyframes,
                u = l.length;
              if ((a.prepare(r, s), a.needsAnimate()))
                if (!this._allowDiscrete && a.discrete) {
                  var h = l[u - 1];
                  h && (e._target[a.propName] = h.rawValue), a.setFinished();
                } else n.push(a);
            }
            if (n.length || this._force) {
              var c = new Iv({
                life: r,
                loop: this._loop,
                delay: this._delay || 0,
                onframe: function (t) {
                  e._started = 2;
                  var r = e._additiveAnimators;
                  if (r) {
                    for (var i = !1, o = 0; o < r.length; o++)
                      if (r[o]._clip) {
                        i = !0;
                        break;
                      }
                    i || (e._additiveAnimators = null);
                  }
                  for (var o = 0; o < n.length; o++) n[o].step(e._target, t);
                  var a = e._onframeCbs;
                  if (a) for (var o = 0; o < a.length; o++) a[o](e._target, t);
                },
                ondestroy: function () {
                  e._doneCallback();
                },
              });
              (this._clip = c),
                this.animation && this.animation.addClip(c),
                t && c.setEasing(t);
            } else this._doneCallback();
            return this;
          }
        }),
        (t.prototype.stop = function (t) {
          if (this._clip) {
            var e = this._clip;
            t && e.onframe(1), this._abortedCallback();
          }
        }),
        (t.prototype.delay = function (t) {
          return (this._delay = t), this;
        }),
        (t.prototype.during = function (t) {
          return (
            t &&
              (this._onframeCbs || (this._onframeCbs = []),
              this._onframeCbs.push(t)),
            this
          );
        }),
        (t.prototype.done = function (t) {
          return (
            t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)),
            this
          );
        }),
        (t.prototype.aborted = function (t) {
          return (
            t &&
              (this._abortedCbs || (this._abortedCbs = []),
              this._abortedCbs.push(t)),
            this
          );
        }),
        (t.prototype.getClip = function () {
          return this._clip;
        }),
        (t.prototype.getTrack = function (t) {
          return this._tracks[t];
        }),
        (t.prototype.getTracks = function () {
          var t = this;
          return y(this._trackKeys, function (e) {
            return t._tracks[e];
          });
        }),
        (t.prototype.stopTracks = function (t, e) {
          if (!t.length || !this._clip) return !0;
          for (
            var n = this._tracks, r = this._trackKeys, i = 0;
            i < t.length;
            i++
          ) {
            var o = n[t[i]];
            o &&
              !o.isFinished() &&
              (e
                ? o.step(this._target, 1)
                : 1 === this._started && o.step(this._target, 0),
              o.setFinished());
          }
          for (var a = !0, i = 0; i < r.length; i++)
            if (!n[r[i]].isFinished()) {
              a = !1;
              break;
            }
          return a && this._abortedCallback(), a;
        }),
        (t.prototype.saveTo = function (t, e, n) {
          if (t) {
            e = e || this._trackKeys;
            for (var r = 0; r < e.length; r++) {
              var i = e[r],
                o = this._tracks[i];
              if (o && !o.isFinished()) {
                var a = o.keyframes,
                  s = a[n ? 0 : a.length - 1];
                s && (t[i] = Gn(s.rawValue));
              }
            }
          }
        }),
        (t.prototype.__changeFinalValue = function (t, e) {
          e = e || w(t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = this._tracks[r];
            if (i) {
              var o = i.keyframes;
              if (o.length > 1) {
                var a = o.pop();
                i.addKeyframe(a.time, t[r]),
                  i.prepare(this._maxTime, i.getAdditiveTrack());
              }
            }
          }
        }),
        t
      );
    })(),
    Kv = (function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return (
          (n._running = !1),
          (n._time = 0),
          (n._pausedTime = 0),
          (n._pauseStart = 0),
          (n._paused = !1),
          (e = e || {}),
          (n.stage = e.stage || {}),
          n
        );
      }
      return (
        e(n, t),
        (n.prototype.addClip = function (t) {
          t.animation && this.removeClip(t),
            this._head
              ? ((this._tail.next = t),
                (t.prev = this._tail),
                (t.next = null),
                (this._tail = t))
              : (this._head = this._tail = t),
            (t.animation = this);
        }),
        (n.prototype.addAnimator = function (t) {
          t.animation = this;
          var e = t.getClip();
          e && this.addClip(e);
        }),
        (n.prototype.removeClip = function (t) {
          if (t.animation) {
            var e = t.prev,
              n = t.next;
            e ? (e.next = n) : (this._head = n),
              n ? (n.prev = e) : (this._tail = e),
              (t.next = t.prev = t.animation = null);
          }
        }),
        (n.prototype.removeAnimator = function (t) {
          var e = t.getClip();
          e && this.removeClip(e), (t.animation = null);
        }),
        (n.prototype.update = function (t) {
          for (
            var e = jn() - this._pausedTime, n = e - this._time, r = this._head;
            r;

          ) {
            var i = r.next,
              o = r.step(e, n);
            o ? (r.ondestroy(), this.removeClip(r), (r = i)) : (r = i);
          }
          (this._time = e),
            t ||
              (this.trigger("frame", n),
              this.stage.update && this.stage.update());
        }),
        (n.prototype._startLoop = function () {
          function t() {
            e._running && (yv(t), !e._paused && e.update());
          }
          var e = this;
          (this._running = !0), yv(t);
        }),
        (n.prototype.start = function () {
          this._running ||
            ((this._time = jn()), (this._pausedTime = 0), this._startLoop());
        }),
        (n.prototype.stop = function () {
          this._running = !1;
        }),
        (n.prototype.pause = function () {
          this._paused || ((this._pauseStart = jn()), (this._paused = !0));
        }),
        (n.prototype.resume = function () {
          this._paused &&
            ((this._pausedTime += jn() - this._pauseStart),
            (this._paused = !1));
        }),
        (n.prototype.clear = function () {
          for (var t = this._head; t; ) {
            var e = t.next;
            (t.prev = t.next = t.animation = null), (t = e);
          }
          this._head = this._tail = null;
        }),
        (n.prototype.isFinished = function () {
          return null == this._head;
        }),
        (n.prototype.animate = function (t, e) {
          (e = e || {}), this.start();
          var n = new Zv(t, e.loop);
          return this.addAnimator(n), n;
        }),
        n
      );
    })(Zg),
    $v = 300,
    Qv = gg.domSupported,
    Jv = (function () {
      var t = [
          "click",
          "dblclick",
          "mousewheel",
          "wheel",
          "mouseout",
          "mouseup",
          "mousedown",
          "mousemove",
          "contextmenu",
        ],
        e = ["touchstart", "touchend", "touchmove"],
        n = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },
        r = y(t, function (t) {
          var e = t.replace("mouse", "pointer");
          return n.hasOwnProperty(e) ? e : t;
        });
      return { mouse: t, touch: e, pointer: r };
    })(),
    ty = {
      mouse: ["mousemove", "mouseup"],
      pointer: ["pointermove", "pointerup"],
    },
    ey = !1,
    ny = (function () {
      function t(t, e) {
        (this.stopPropagation = $),
          (this.stopImmediatePropagation = $),
          (this.preventDefault = $),
          (this.type = e.type),
          (this.target = this.currentTarget = t.dom),
          (this.pointerType = e.pointerType),
          (this.clientX = e.clientX),
          (this.clientY = e.clientY);
      }
      return t;
    })(),
    ry = {
      mousedown: function (t) {
        (t = De(this.dom, t)),
          (this.__mayPointerCapture = [t.zrX, t.zrY]),
          this.trigger("mousedown", t);
      },
      mousemove: function (t) {
        t = De(this.dom, t);
        var e = this.__mayPointerCapture;
        !e ||
          (t.zrX === e[0] && t.zrY === e[1]) ||
          this.__togglePointerCapture(!0),
          this.trigger("mousemove", t);
      },
      mouseup: function (t) {
        (t = De(this.dom, t)),
          this.__togglePointerCapture(!1),
          this.trigger("mouseup", t);
      },
      mouseout: function (t) {
        t = De(this.dom, t);
        var e = t.toElement || t.relatedTarget;
        Jn(this, e) ||
          (this.__pointerCapturing && (t.zrEventControl = "no_globalout"),
          this.trigger("mouseout", t));
      },
      wheel: function (t) {
        (ey = !0), (t = De(this.dom, t)), this.trigger("mousewheel", t);
      },
      mousewheel: function (t) {
        ey || ((t = De(this.dom, t)), this.trigger("mousewheel", t));
      },
      touchstart: function (t) {
        (t = De(this.dom, t)),
          $n(t),
          (this.__lastTouchMoment = new Date()),
          this.handler.processGesture(t, "start"),
          ry.mousemove.call(this, t),
          ry.mousedown.call(this, t);
      },
      touchmove: function (t) {
        (t = De(this.dom, t)),
          $n(t),
          this.handler.processGesture(t, "change"),
          ry.mousemove.call(this, t);
      },
      touchend: function (t) {
        (t = De(this.dom, t)),
          $n(t),
          this.handler.processGesture(t, "end"),
          ry.mouseup.call(this, t),
          +new Date() - +this.__lastTouchMoment < $v && ry.click.call(this, t);
      },
      pointerdown: function (t) {
        ry.mousedown.call(this, t);
      },
      pointermove: function (t) {
        Zn(t) || ry.mousemove.call(this, t);
      },
      pointerup: function (t) {
        ry.mouseup.call(this, t);
      },
      pointerout: function (t) {
        Zn(t) || ry.mouseout.call(this, t);
      },
    };
  v(["click", "dblclick", "contextmenu"], function (t) {
    ry[t] = function (e) {
      (e = De(this.dom, e)), this.trigger(t, e);
    };
  });
  var iy = {
      pointermove: function (t) {
        Zn(t) || iy.mousemove.call(this, t);
      },
      pointerup: function (t) {
        iy.mouseup.call(this, t);
      },
      mousemove: function (t) {
        this.trigger("mousemove", t);
      },
      mouseup: function (t) {
        var e = this.__pointerCapturing;
        this.__togglePointerCapture(!1),
          this.trigger("mouseup", t),
          e &&
            ((t.zrEventControl = "only_globalout"),
            this.trigger("mouseout", t));
      },
    },
    oy = (function () {
      function t(t, e) {
        (this.mounted = {}),
          (this.listenerOpts = {}),
          (this.touching = !1),
          (this.domTarget = t),
          (this.domHandlers = e);
      }
      return t;
    })(),
    ay = (function (t) {
      function n(e, n) {
        var r = t.call(this) || this;
        return (
          (r.__pointerCapturing = !1),
          (r.dom = e),
          (r.painterRoot = n),
          (r._localHandlerScope = new oy(e, ry)),
          Qv && (r._globalHandlerScope = new oy(document, iy)),
          tr(r, r._localHandlerScope),
          r
        );
      }
      return (
        e(n, t),
        (n.prototype.dispose = function () {
          rr(this._localHandlerScope), Qv && rr(this._globalHandlerScope);
        }),
        (n.prototype.setCursor = function (t) {
          this.dom.style && (this.dom.style.cursor = t || "default");
        }),
        (n.prototype.__togglePointerCapture = function (t) {
          if (
            ((this.__mayPointerCapture = null),
            Qv && +this.__pointerCapturing ^ +t)
          ) {
            this.__pointerCapturing = t;
            var e = this._globalHandlerScope;
            t ? er(this, e) : rr(e);
          }
        }),
        n
      );
    })(Zg),
    sy = 1;
  gg.hasGlobalWindow &&
    (sy = Math.max(
      window.devicePixelRatio ||
        (window.screen &&
          window.screen.deviceXDPI / window.screen.logicalXDPI) ||
        1,
      1
    ));
  var ly = sy,
    uy = 0.4,
    hy = "#333",
    cy = "#ccc",
    py = "#eee",
    fy = (Object.freeze || Object)({
      create: ir,
      identity: or,
      copy: ar,
      mul: sr,
      translate: lr,
      rotate: ur,
      scale: hr,
      invert: cr,
      clone: pr,
    }),
    dy = or,
    gy = 5e-5,
    vy = [],
    yy = [],
    my = ir(),
    _y = Math.abs,
    xy = (function () {
      function t() {}
      return (
        (t.prototype.getLocalTransform = function (e) {
          return t.getLocalTransform(this, e);
        }),
        (t.prototype.setPosition = function (t) {
          (this.x = t[0]), (this.y = t[1]);
        }),
        (t.prototype.setScale = function (t) {
          (this.scaleX = t[0]), (this.scaleY = t[1]);
        }),
        (t.prototype.setSkew = function (t) {
          (this.skewX = t[0]), (this.skewY = t[1]);
        }),
        (t.prototype.setOrigin = function (t) {
          (this.originX = t[0]), (this.originY = t[1]);
        }),
        (t.prototype.needLocalTransform = function () {
          return (
            fr(this.rotation) ||
            fr(this.x) ||
            fr(this.y) ||
            fr(this.scaleX - 1) ||
            fr(this.scaleY - 1) ||
            fr(this.skewX) ||
            fr(this.skewY)
          );
        }),
        (t.prototype.updateTransform = function () {
          var t = this.parent && this.parent.transform,
            e = this.needLocalTransform(),
            n = this.transform;
          return e || t
            ? ((n = n || ir()),
              e ? this.getLocalTransform(n) : dy(n),
              t && (e ? sr(n, t, n) : ar(n, t)),
              (this.transform = n),
              void this._resolveGlobalScaleRatio(n))
            : void (n && dy(n));
        }),
        (t.prototype._resolveGlobalScaleRatio = function (t) {
          var e = this.globalScaleRatio;
          if (null != e && 1 !== e) {
            this.getGlobalScale(vy);
            var n = vy[0] < 0 ? -1 : 1,
              r = vy[1] < 0 ? -1 : 1,
              i = ((vy[0] - n) * e + n) / vy[0] || 0,
              o = ((vy[1] - r) * e + r) / vy[1] || 0;
            (t[0] *= i), (t[1] *= i), (t[2] *= o), (t[3] *= o);
          }
          (this.invTransform = this.invTransform || ir()),
            cr(this.invTransform, t);
        }),
        (t.prototype.getComputedTransform = function () {
          for (var t = this, e = []; t; ) e.push(t), (t = t.parent);
          for (; (t = e.pop()); ) t.updateTransform();
          return this.transform;
        }),
        (t.prototype.setLocalTransform = function (t) {
          if (t) {
            var e = t[0] * t[0] + t[1] * t[1],
              n = t[2] * t[2] + t[3] * t[3],
              r = Math.atan2(t[1], t[0]),
              i = Math.PI / 2 + r - Math.atan2(t[3], t[2]);
            (n = Math.sqrt(n) * Math.cos(i)),
              (e = Math.sqrt(e)),
              (this.skewX = i),
              (this.skewY = 0),
              (this.rotation = -r),
              (this.x = +t[4]),
              (this.y = +t[5]),
              (this.scaleX = e),
              (this.scaleY = n),
              (this.originX = 0),
              (this.originY = 0);
          }
        }),
        (t.prototype.decomposeTransform = function () {
          if (this.transform) {
            var t = this.parent,
              e = this.transform;
            t && t.transform && (sr(yy, t.invTransform, e), (e = yy));
            var n = this.originX,
              r = this.originY;
            (n || r) &&
              ((my[4] = n),
              (my[5] = r),
              sr(yy, e, my),
              (yy[4] -= n),
              (yy[5] -= r),
              (e = yy)),
              this.setLocalTransform(e);
          }
        }),
        (t.prototype.getGlobalScale = function (t) {
          var e = this.transform;
          return (
            (t = t || []),
            e
              ? ((t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1])),
                (t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3])),
                e[0] < 0 && (t[0] = -t[0]),
                e[3] < 0 && (t[1] = -t[1]),
                t)
              : ((t[0] = 1), (t[1] = 1), t)
          );
        }),
        (t.prototype.transformCoordToLocal = function (t, e) {
          var n = [t, e],
            r = this.invTransform;
          return r && ve(n, n, r), n;
        }),
        (t.prototype.transformCoordToGlobal = function (t, e) {
          var n = [t, e],
            r = this.transform;
          return r && ve(n, n, r), n;
        }),
        (t.prototype.getLineScale = function () {
          var t = this.transform;
          return t && _y(t[0] - 1) > 1e-10 && _y(t[3] - 1) > 1e-10
            ? Math.sqrt(_y(t[0] * t[3] - t[2] * t[1]))
            : 1;
        }),
        (t.prototype.copyTransform = function (t) {
          dr(this, t);
        }),
        (t.getLocalTransform = function (t, e) {
          e = e || [];
          var n = t.originX || 0,
            r = t.originY || 0,
            i = t.scaleX,
            o = t.scaleY,
            a = t.anchorX,
            s = t.anchorY,
            l = t.rotation || 0,
            u = t.x,
            h = t.y,
            c = t.skewX ? Math.tan(t.skewX) : 0,
            p = t.skewY ? Math.tan(-t.skewY) : 0;
          if (n || r || a || s) {
            var f = n + a,
              d = r + s;
            (e[4] = -f * i - c * d * o), (e[5] = -d * o - p * f * i);
          } else e[4] = e[5] = 0;
          return (
            (e[0] = i),
            (e[3] = o),
            (e[1] = p * i),
            (e[2] = c * o),
            l && ur(e, e, l),
            (e[4] += n + u),
            (e[5] += r + h),
            e
          );
        }),
        (t.initDefaultProps = (function () {
          var e = t.prototype;
          (e.scaleX = e.scaleY = e.globalScaleRatio = 1),
            (e.x =
              e.y =
              e.originX =
              e.originY =
              e.skewX =
              e.skewY =
              e.rotation =
              e.anchorX =
              e.anchorY =
                0);
        })()),
        t
      );
    })(),
    wy = [
      "x",
      "y",
      "originX",
      "originY",
      "anchorX",
      "anchorY",
      "rotation",
      "scaleX",
      "scaleY",
      "skewX",
      "skewY",
    ],
    by = (function () {
      function t(t, e) {
        (this.x = t || 0), (this.y = e || 0);
      }
      return (
        (t.prototype.copy = function (t) {
          return (this.x = t.x), (this.y = t.y), this;
        }),
        (t.prototype.clone = function () {
          return new t(this.x, this.y);
        }),
        (t.prototype.set = function (t, e) {
          return (this.x = t), (this.y = e), this;
        }),
        (t.prototype.equal = function (t) {
          return t.x === this.x && t.y === this.y;
        }),
        (t.prototype.add = function (t) {
          return (this.x += t.x), (this.y += t.y), this;
        }),
        (t.prototype.scale = function (t) {
          (this.x *= t), (this.y *= t);
        }),
        (t.prototype.scaleAndAdd = function (t, e) {
          (this.x += t.x * e), (this.y += t.y * e);
        }),
        (t.prototype.sub = function (t) {
          return (this.x -= t.x), (this.y -= t.y), this;
        }),
        (t.prototype.dot = function (t) {
          return this.x * t.x + this.y * t.y;
        }),
        (t.prototype.len = function () {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        }),
        (t.prototype.lenSquare = function () {
          return this.x * this.x + this.y * this.y;
        }),
        (t.prototype.normalize = function () {
          var t = this.len();
          return (this.x /= t), (this.y /= t), this;
        }),
        (t.prototype.distance = function (t) {
          var e = this.x - t.x,
            n = this.y - t.y;
          return Math.sqrt(e * e + n * n);
        }),
        (t.prototype.distanceSquare = function (t) {
          var e = this.x - t.x,
            n = this.y - t.y;
          return e * e + n * n;
        }),
        (t.prototype.negate = function () {
          return (this.x = -this.x), (this.y = -this.y), this;
        }),
        (t.prototype.transform = function (t) {
          if (t) {
            var e = this.x,
              n = this.y;
            return (
              (this.x = t[0] * e + t[2] * n + t[4]),
              (this.y = t[1] * e + t[3] * n + t[5]),
              this
            );
          }
        }),
        (t.prototype.toArray = function (t) {
          return (t[0] = this.x), (t[1] = this.y), t;
        }),
        (t.prototype.fromArray = function (t) {
          (this.x = t[0]), (this.y = t[1]);
        }),
        (t.set = function (t, e, n) {
          (t.x = e), (t.y = n);
        }),
        (t.copy = function (t, e) {
          (t.x = e.x), (t.y = e.y);
        }),
        (t.len = function (t) {
          return Math.sqrt(t.x * t.x + t.y * t.y);
        }),
        (t.lenSquare = function (t) {
          return t.x * t.x + t.y * t.y;
        }),
        (t.dot = function (t, e) {
          return t.x * e.x + t.y * e.y;
        }),
        (t.add = function (t, e, n) {
          (t.x = e.x + n.x), (t.y = e.y + n.y);
        }),
        (t.sub = function (t, e, n) {
          (t.x = e.x - n.x), (t.y = e.y - n.y);
        }),
        (t.scale = function (t, e, n) {
          (t.x = e.x * n), (t.y = e.y * n);
        }),
        (t.scaleAndAdd = function (t, e, n, r) {
          (t.x = e.x + n.x * r), (t.y = e.y + n.y * r);
        }),
        (t.lerp = function (t, e, n, r) {
          var i = 1 - r;
          (t.x = i * e.x + r * n.x), (t.y = i * e.y + r * n.y);
        }),
        t
      );
    })(),
    Sy = Math.min,
    My = Math.max,
    Ty = new by(),
    Cy = new by(),
    ky = new by(),
    Dy = new by(),
    Iy = new by(),
    Ay = new by(),
    Ly = (function () {
      function t(t, e, n, r) {
        0 > n && ((t += n), (n = -n)),
          0 > r && ((e += r), (r = -r)),
          (this.x = t),
          (this.y = e),
          (this.width = n),
          (this.height = r);
      }
      return (
        (t.prototype.union = function (t) {
          var e = Sy(t.x, this.x),
            n = Sy(t.y, this.y);
          (this.width =
            isFinite(this.x) && isFinite(this.width)
              ? My(t.x + t.width, this.x + this.width) - e
              : t.width),
            (this.height =
              isFinite(this.y) && isFinite(this.height)
                ? My(t.y + t.height, this.y + this.height) - n
                : t.height),
            (this.x = e),
            (this.y = n);
        }),
        (t.prototype.applyTransform = function (e) {
          t.applyTransform(this, this, e);
        }),
        (t.prototype.calculateTransform = function (t) {
          var e = this,
            n = t.width / e.width,
            r = t.height / e.height,
            i = ir();
          return (
            lr(i, i, [-e.x, -e.y]), hr(i, i, [n, r]), lr(i, i, [t.x, t.y]), i
          );
        }),
        (t.prototype.intersect = function (e, n) {
          if (!e) return !1;
          e instanceof t || (e = t.create(e));
          var r = this,
            i = r.x,
            o = r.x + r.width,
            a = r.y,
            s = r.y + r.height,
            l = e.x,
            u = e.x + e.width,
            h = e.y,
            c = e.y + e.height,
            p = !(l > o || i > u || h > s || a > c);
          if (n) {
            var f = 1 / 0,
              d = 0,
              g = Math.abs(o - l),
              v = Math.abs(u - i),
              y = Math.abs(s - h),
              m = Math.abs(c - a),
              _ = Math.min(g, v),
              x = Math.min(y, m);
            l > o || i > u
              ? _ > d && ((d = _), v > g ? by.set(Ay, -g, 0) : by.set(Ay, v, 0))
              : f > _ &&
                ((f = _), v > g ? by.set(Iy, g, 0) : by.set(Iy, -v, 0)),
              h > s || a > c
                ? x > d &&
                  ((d = x), m > y ? by.set(Ay, 0, -y) : by.set(Ay, 0, m))
                : f > _ &&
                  ((f = _), m > y ? by.set(Iy, 0, y) : by.set(Iy, 0, -m));
          }
          return n && by.copy(n, p ? Iy : Ay), p;
        }),
        (t.prototype.contain = function (t, e) {
          var n = this;
          return (
            t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
          );
        }),
        (t.prototype.clone = function () {
          return new t(this.x, this.y, this.width, this.height);
        }),
        (t.prototype.copy = function (e) {
          t.copy(this, e);
        }),
        (t.prototype.plain = function () {
          return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
          };
        }),
        (t.prototype.isFinite = function () {
          return (
            isFinite(this.x) &&
            isFinite(this.y) &&
            isFinite(this.width) &&
            isFinite(this.height)
          );
        }),
        (t.prototype.isZero = function () {
          return 0 === this.width || 0 === this.height;
        }),
        (t.create = function (e) {
          return new t(e.x, e.y, e.width, e.height);
        }),
        (t.copy = function (t, e) {
          (t.x = e.x), (t.y = e.y), (t.width = e.width), (t.height = e.height);
        }),
        (t.applyTransform = function (e, n, r) {
          if (!r) return void (e !== n && t.copy(e, n));
          if (r[1] < 1e-5 && r[1] > -1e-5 && r[2] < 1e-5 && r[2] > -1e-5) {
            var i = r[0],
              o = r[3],
              a = r[4],
              s = r[5];
            return (
              (e.x = n.x * i + a),
              (e.y = n.y * o + s),
              (e.width = n.width * i),
              (e.height = n.height * o),
              e.width < 0 && ((e.x += e.width), (e.width = -e.width)),
              void (e.height < 0 && ((e.y += e.height), (e.height = -e.height)))
            );
          }
          (Ty.x = ky.x = n.x),
            (Ty.y = Dy.y = n.y),
            (Cy.x = Dy.x = n.x + n.width),
            (Cy.y = ky.y = n.y + n.height),
            Ty.transform(r),
            Dy.transform(r),
            Cy.transform(r),
            ky.transform(r),
            (e.x = Sy(Ty.x, Cy.x, ky.x, Dy.x)),
            (e.y = Sy(Ty.y, Cy.y, ky.y, Dy.y));
          var l = My(Ty.x, Cy.x, ky.x, Dy.x),
            u = My(Ty.y, Cy.y, ky.y, Dy.y);
          (e.width = l - e.x), (e.height = u - e.y);
        }),
        t
      );
    })(),
    Py = {},
    Oy = "__zr_normal__",
    Ry = wy.concat(["ignore"]),
    Ey = m(
      wy,
      function (t, e) {
        return (t[e] = !0), t;
      },
      { ignore: !1 }
    ),
    By = {},
    Ny = new Ly(0, 0, 0, 0),
    zy = (function () {
      function t(t) {
        (this.id = o()),
          (this.animators = []),
          (this.currentStates = []),
          (this.states = {}),
          this._init(t);
      }
      return (
        (t.prototype._init = function (t) {
          this.attr(t);
        }),
        (t.prototype.drift = function (t, e) {
          switch (this.draggable) {
            case "horizontal":
              e = 0;
              break;
            case "vertical":
              t = 0;
          }
          var n = this.transform;
          n || (n = this.transform = [1, 0, 0, 1, 0, 0]),
            (n[4] += t),
            (n[5] += e),
            this.decomposeTransform(),
            this.markRedraw();
        }),
        (t.prototype.beforeUpdate = function () {}),
        (t.prototype.afterUpdate = function () {}),
        (t.prototype.update = function () {
          this.updateTransform(), this.__dirty && this.updateInnerText();
        }),
        (t.prototype.updateInnerText = function (t) {
          var e = this._textContent;
          if (e && (!e.ignore || t)) {
            this.textConfig || (this.textConfig = {});
            var n = this.textConfig,
              r = n.local,
              i = e.innerTransformable,
              o = void 0,
              a = void 0,
              s = !1;
            i.parent = r ? this : null;
            var l = !1;
            if ((i.copyTransform(e), null != n.position)) {
              var u = Ny;
              u.copy(n.layoutRect ? n.layoutRect : this.getBoundingRect()),
                r || u.applyTransform(this.transform),
                this.calculateTextPosition
                  ? this.calculateTextPosition(By, n, u)
                  : br(By, n, u),
                (i.x = By.x),
                (i.y = By.y),
                (o = By.align),
                (a = By.verticalAlign);
              var h = n.origin;
              if (h && null != n.rotation) {
                var c = void 0,
                  p = void 0;
                "center" === h
                  ? ((c = 0.5 * u.width), (p = 0.5 * u.height))
                  : ((c = wr(h[0], u.width)), (p = wr(h[1], u.height))),
                  (l = !0),
                  (i.originX = -i.x + c + (r ? 0 : u.x)),
                  (i.originY = -i.y + p + (r ? 0 : u.y));
              }
            }
            null != n.rotation && (i.rotation = n.rotation);
            var f = n.offset;
            f &&
              ((i.x += f[0]),
              (i.y += f[1]),
              l || ((i.originX = -f[0]), (i.originY = -f[1])));
            var d =
                null == n.inside
                  ? "string" == typeof n.position &&
                    n.position.indexOf("inside") >= 0
                  : n.inside,
              g =
                this._innerTextDefaultStyle ||
                (this._innerTextDefaultStyle = {}),
              v = void 0,
              y = void 0,
              m = void 0;
            d && this.canBeInsideText()
              ? ((v = n.insideFill),
                (y = n.insideStroke),
                (null == v || "auto" === v) && (v = this.getInsideTextFill()),
                (null == y || "auto" === y) &&
                  ((y = this.getInsideTextStroke(v)), (m = !0)))
              : ((v = n.outsideFill),
                (y = n.outsideStroke),
                (null == v || "auto" === v) && (v = this.getOutsideFill()),
                (null == y || "auto" === y) &&
                  ((y = this.getOutsideStroke(v)), (m = !0))),
              (v = v || "#000"),
              (v !== g.fill ||
                y !== g.stroke ||
                m !== g.autoStroke ||
                o !== g.align ||
                a !== g.verticalAlign) &&
                ((s = !0),
                (g.fill = v),
                (g.stroke = y),
                (g.autoStroke = m),
                (g.align = o),
                (g.verticalAlign = a),
                e.setDefaultTextStyle(g)),
              (e.__dirty |= pv),
              s && e.dirtyStyle(!0);
          }
        }),
        (t.prototype.canBeInsideText = function () {
          return !0;
        }),
        (t.prototype.getInsideTextFill = function () {
          return "#fff";
        }),
        (t.prototype.getInsideTextStroke = function () {
          return "#000";
        }),
        (t.prototype.getOutsideFill = function () {
          return this.__zr && this.__zr.isDarkMode() ? cy : hy;
        }),
        (t.prototype.getOutsideStroke = function () {
          var t = this.__zr && this.__zr.getBackgroundColor(),
            e = "string" == typeof t && bn(t);
          e || (e = [255, 255, 255, 1]);
          for (var n = e[3], r = this.__zr.isDarkMode(), i = 0; 3 > i; i++)
            e[i] = e[i] * n + (r ? 0 : 255) * (1 - n);
          return (e[3] = 1), Ln(e, "rgba");
        }),
        (t.prototype.traverse = function () {}),
        (t.prototype.attrKV = function (t, e) {
          "textConfig" === t
            ? this.setTextConfig(e)
            : "textContent" === t
            ? this.setTextContent(e)
            : "clipPath" === t
            ? this.setClipPath(e)
            : "extra" === t
            ? ((this.extra = this.extra || {}), h(this.extra, e))
            : (this[t] = e);
        }),
        (t.prototype.hide = function () {
          (this.ignore = !0), this.markRedraw();
        }),
        (t.prototype.show = function () {
          (this.ignore = !1), this.markRedraw();
        }),
        (t.prototype.attr = function (t, e) {
          if ("string" == typeof t) this.attrKV(t, e);
          else if (I(t))
            for (var n = t, r = w(n), i = 0; i < r.length; i++) {
              var o = r[i];
              this.attrKV(o, t[o]);
            }
          return this.markRedraw(), this;
        }),
        (t.prototype.saveCurrentToNormalState = function (t) {
          this._innerSaveToNormal(t);
          for (
            var e = this._normalState, n = 0;
            n < this.animators.length;
            n++
          ) {
            var r = this.animators[n],
              i = r.__fromStateTransition;
            if (!(r.getLoop() || (i && i !== Oy))) {
              var o = r.targetName,
                a = o ? e[o] : e;
              r.saveTo(a);
            }
          }
        }),
        (t.prototype._innerSaveToNormal = function (t) {
          var e = this._normalState;
          e || (e = this._normalState = {}),
            t.textConfig && !e.textConfig && (e.textConfig = this.textConfig),
            this._savePrimaryToNormal(t, e, Ry);
        }),
        (t.prototype._savePrimaryToNormal = function (t, e, n) {
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            null == t[i] || i in e || (e[i] = this[i]);
          }
        }),
        (t.prototype.hasState = function () {
          return this.currentStates.length > 0;
        }),
        (t.prototype.getState = function (t) {
          return this.states[t];
        }),
        (t.prototype.ensureState = function (t) {
          var e = this.states;
          return e[t] || (e[t] = {}), e[t];
        }),
        (t.prototype.clearStates = function (t) {
          this.useState(Oy, !1, t);
        }),
        (t.prototype.useState = function (t, e, n, r) {
          var i = t === Oy,
            o = this.hasState();
          if (o || !i) {
            var s = this.currentStates,
              l = this.stateTransition;
            if (!(p(s, t) >= 0) || (!e && 1 !== s.length)) {
              var u;
              if (
                (this.stateProxy && !i && (u = this.stateProxy(t)),
                u || (u = this.states && this.states[t]),
                !u && !i)
              )
                return void a("State " + t + " not exists.");
              i || this.saveCurrentToNormalState(u);
              var h = !!((u && u.hoverLayer) || r);
              h && this._toggleHoverLayerFlag(!0),
                this._applyStateObj(
                  t,
                  u,
                  this._normalState,
                  e,
                  !n && !this.__inHover && l && l.duration > 0,
                  l
                );
              var c = this._textContent,
                f = this._textGuide;
              return (
                c && c.useState(t, e, n, h),
                f && f.useState(t, e, n, h),
                i
                  ? ((this.currentStates = []), (this._normalState = {}))
                  : e
                  ? this.currentStates.push(t)
                  : (this.currentStates = [t]),
                this._updateAnimationTargets(),
                this.markRedraw(),
                !h &&
                  this.__inHover &&
                  (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~pv)),
                u
              );
            }
          }
        }),
        (t.prototype.useStates = function (t, e, n) {
          if (t.length) {
            var r = [],
              i = this.currentStates,
              o = t.length,
              a = o === i.length;
            if (a)
              for (var s = 0; o > s; s++)
                if (t[s] !== i[s]) {
                  a = !1;
                  break;
                }
            if (a) return;
            for (var s = 0; o > s; s++) {
              var l = t[s],
                u = void 0;
              this.stateProxy && (u = this.stateProxy(l, t)),
                u || (u = this.states[l]),
                u && r.push(u);
            }
            var h = r[o - 1],
              c = !!((h && h.hoverLayer) || n);
            c && this._toggleHoverLayerFlag(!0);
            var p = this._mergeStates(r),
              f = this.stateTransition;
            this.saveCurrentToNormalState(p),
              this._applyStateObj(
                t.join(","),
                p,
                this._normalState,
                !1,
                !e && !this.__inHover && f && f.duration > 0,
                f
              );
            var d = this._textContent,
              g = this._textGuide;
            d && d.useStates(t, e, c),
              g && g.useStates(t, e, c),
              this._updateAnimationTargets(),
              (this.currentStates = t.slice()),
              this.markRedraw(),
              !c &&
                this.__inHover &&
                (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~pv));
          } else this.clearStates();
        }),
        (t.prototype._updateAnimationTargets = function () {
          for (var t = 0; t < this.animators.length; t++) {
            var e = this.animators[t];
            e.targetName && e.changeTarget(this[e.targetName]);
          }
        }),
        (t.prototype.removeState = function (t) {
          var e = p(this.currentStates, t);
          if (e >= 0) {
            var n = this.currentStates.slice();
            n.splice(e, 1), this.useStates(n);
          }
        }),
        (t.prototype.replaceState = function (t, e, n) {
          var r = this.currentStates.slice(),
            i = p(r, t),
            o = p(r, e) >= 0;
          i >= 0 ? (o ? r.splice(i, 1) : (r[i] = e)) : n && !o && r.push(e),
            this.useStates(r);
        }),
        (t.prototype.toggleState = function (t, e) {
          e ? this.useState(t, !0) : this.removeState(t);
        }),
        (t.prototype._mergeStates = function (t) {
          for (var e, n = {}, r = 0; r < t.length; r++) {
            var i = t[r];
            h(n, i), i.textConfig && ((e = e || {}), h(e, i.textConfig));
          }
          return e && (n.textConfig = e), n;
        }),
        (t.prototype._applyStateObj = function (t, e, n, r, i, o) {
          var a = !(e && r);
          e && e.textConfig
            ? ((this.textConfig = h({}, r ? this.textConfig : n.textConfig)),
              h(this.textConfig, e.textConfig))
            : a && n.textConfig && (this.textConfig = n.textConfig);
          for (var s = {}, l = !1, u = 0; u < Ry.length; u++) {
            var c = Ry[u],
              p = i && Ey[c];
            e && null != e[c]
              ? p
                ? ((l = !0), (s[c] = e[c]))
                : (this[c] = e[c])
              : a &&
                null != n[c] &&
                (p ? ((l = !0), (s[c] = n[c])) : (this[c] = n[c]));
          }
          if (!i)
            for (var u = 0; u < this.animators.length; u++) {
              var f = this.animators[u],
                d = f.targetName;
              f.getLoop() || f.__changeFinalValue(d ? (e || n)[d] : e || n);
            }
          l && this._transitionState(t, s, o);
        }),
        (t.prototype._attachComponent = function (t) {
          if ((!t.__zr || t.__hostTarget) && t !== this) {
            var e = this.__zr;
            e && t.addSelfToZr(e), (t.__zr = e), (t.__hostTarget = this);
          }
        }),
        (t.prototype._detachComponent = function (t) {
          t.__zr && t.removeSelfFromZr(t.__zr),
            (t.__zr = null),
            (t.__hostTarget = null);
        }),
        (t.prototype.getClipPath = function () {
          return this._clipPath;
        }),
        (t.prototype.setClipPath = function (t) {
          this._clipPath && this._clipPath !== t && this.removeClipPath(),
            this._attachComponent(t),
            (this._clipPath = t),
            this.markRedraw();
        }),
        (t.prototype.removeClipPath = function () {
          var t = this._clipPath;
          t &&
            (this._detachComponent(t),
            (this._clipPath = null),
            this.markRedraw());
        }),
        (t.prototype.getTextContent = function () {
          return this._textContent;
        }),
        (t.prototype.setTextContent = function (t) {
          var e = this._textContent;
          e !== t &&
            (e && e !== t && this.removeTextContent(),
            (t.innerTransformable = new xy()),
            this._attachComponent(t),
            (this._textContent = t),
            this.markRedraw());
        }),
        (t.prototype.setTextConfig = function (t) {
          this.textConfig || (this.textConfig = {}),
            h(this.textConfig, t),
            this.markRedraw();
        }),
        (t.prototype.removeTextConfig = function () {
          (this.textConfig = null), this.markRedraw();
        }),
        (t.prototype.removeTextContent = function () {
          var t = this._textContent;
          t &&
            ((t.innerTransformable = null),
            this._detachComponent(t),
            (this._textContent = null),
            (this._innerTextDefaultStyle = null),
            this.markRedraw());
        }),
        (t.prototype.getTextGuideLine = function () {
          return this._textGuide;
        }),
        (t.prototype.setTextGuideLine = function (t) {
          this._textGuide &&
            this._textGuide !== t &&
            this.removeTextGuideLine(),
            this._attachComponent(t),
            (this._textGuide = t),
            this.markRedraw();
        }),
        (t.prototype.removeTextGuideLine = function () {
          var t = this._textGuide;
          t &&
            (this._detachComponent(t),
            (this._textGuide = null),
            this.markRedraw());
        }),
        (t.prototype.markRedraw = function () {
          this.__dirty |= pv;
          var t = this.__zr;
          t && (this.__inHover ? t.refreshHover() : t.refresh()),
            this.__hostTarget && this.__hostTarget.markRedraw();
        }),
        (t.prototype.dirty = function () {
          this.markRedraw();
        }),
        (t.prototype._toggleHoverLayerFlag = function (t) {
          this.__inHover = t;
          var e = this._textContent,
            n = this._textGuide;
          e && (e.__inHover = t), n && (n.__inHover = t);
        }),
        (t.prototype.addSelfToZr = function (t) {
          if (this.__zr !== t) {
            this.__zr = t;
            var e = this.animators;
            if (e)
              for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
            this._clipPath && this._clipPath.addSelfToZr(t),
              this._textContent && this._textContent.addSelfToZr(t),
              this._textGuide && this._textGuide.addSelfToZr(t);
          }
        }),
        (t.prototype.removeSelfFromZr = function (t) {
          if (this.__zr) {
            this.__zr = null;
            var e = this.animators;
            if (e)
              for (var n = 0; n < e.length; n++)
                t.animation.removeAnimator(e[n]);
            this._clipPath && this._clipPath.removeSelfFromZr(t),
              this._textContent && this._textContent.removeSelfFromZr(t),
              this._textGuide && this._textGuide.removeSelfFromZr(t);
          }
        }),
        (t.prototype.animate = function (t, e, n) {
          var r = t ? this[t] : this,
            i = new Zv(r, e, n);
          return t && (i.targetName = t), this.addAnimator(i, t), i;
        }),
        (t.prototype.addAnimator = function (t, e) {
          var n = this.__zr,
            r = this;
          t
            .during(function () {
              r.updateDuringAnimation(e);
            })
            .done(function () {
              var e = r.animators,
                n = p(e, t);
              n >= 0 && e.splice(n, 1);
            }),
            this.animators.push(t),
            n && n.animation.addAnimator(t),
            n && n.wakeUp();
        }),
        (t.prototype.updateDuringAnimation = function () {
          this.markRedraw();
        }),
        (t.prototype.stopAnimation = function (t, e) {
          for (
            var n = this.animators, r = n.length, i = [], o = 0;
            r > o;
            o++
          ) {
            var a = n[o];
            t && t !== a.scope ? i.push(a) : a.stop(e);
          }
          return (this.animators = i), this;
        }),
        (t.prototype.animateTo = function (t, e, n) {
          Sr(this, t, e, n);
        }),
        (t.prototype.animateFrom = function (t, e, n) {
          Sr(this, t, e, n, !0);
        }),
        (t.prototype._transitionState = function (t, e, n, r) {
          for (var i = Sr(this, e, n, r), o = 0; o < i.length; o++)
            i[o].__fromStateTransition = t;
        }),
        (t.prototype.getBoundingRect = function () {
          return null;
        }),
        (t.prototype.getPaintRect = function () {
          return null;
        }),
        (t.initDefaultProps = (function () {
          function e(t, e, r, i) {
            function o(t, e) {
              Object.defineProperty(e, 0, {
                get: function () {
                  return t[r];
                },
                set: function (e) {
                  t[r] = e;
                },
              }),
                Object.defineProperty(e, 1, {
                  get: function () {
                    return t[i];
                  },
                  set: function (e) {
                    t[i] = e;
                  },
                });
            }
            Object.defineProperty(n, t, {
              get: function () {
                if (!this[e]) {
                  var t = (this[e] = []);
                  o(this, t);
                }
                return this[e];
              },
              set: function (t) {
                (this[r] = t[0]), (this[i] = t[1]), (this[e] = t), o(this, t);
              },
            });
          }
          var n = t.prototype;
          (n.type = "element"),
            (n.name = ""),
            (n.ignore =
              n.silent =
              n.isGroup =
              n.draggable =
              n.dragging =
              n.ignoreClip =
              n.__inHover =
                !1),
            (n.__dirty = pv),
            Object.defineProperty &&
              (e("position", "_legacyPos", "x", "y"),
              e("scale", "_legacyScale", "scaleX", "scaleY"),
              e("origin", "_legacyOrigin", "originX", "originY"));
        })()),
        t
      );
    })();
  d(zy, Zg), d(zy, xy);
  var Fy = (function (t) {
    function n(e) {
      var n = t.call(this) || this;
      return (n.isGroup = !0), (n._children = []), n.attr(e), n;
    }
    return (
      e(n, t),
      (n.prototype.childrenRef = function () {
        return this._children;
      }),
      (n.prototype.children = function () {
        return this._children.slice();
      }),
      (n.prototype.childAt = function (t) {
        return this._children[t];
      }),
      (n.prototype.childOfName = function (t) {
        for (var e = this._children, n = 0; n < e.length; n++)
          if (e[n].name === t) return e[n];
      }),
      (n.prototype.childCount = function () {
        return this._children.length;
      }),
      (n.prototype.add = function (t) {
        return (
          t &&
            t !== this &&
            t.parent !== this &&
            (this._children.push(t), this._doAdd(t)),
          this
        );
      }),
      (n.prototype.addBefore = function (t, e) {
        if (t && t !== this && t.parent !== this && e && e.parent === this) {
          var n = this._children,
            r = n.indexOf(e);
          r >= 0 && (n.splice(r, 0, t), this._doAdd(t));
        }
        return this;
      }),
      (n.prototype.replace = function (t, e) {
        var n = p(this._children, t);
        return n >= 0 && this.replaceAt(e, n), this;
      }),
      (n.prototype.replaceAt = function (t, e) {
        var n = this._children,
          r = n[e];
        if (t && t !== this && t.parent !== this && t !== r) {
          (n[e] = t), (r.parent = null);
          var i = this.__zr;
          i && r.removeSelfFromZr(i), this._doAdd(t);
        }
        return this;
      }),
      (n.prototype._doAdd = function (t) {
        t.parent && t.parent.remove(t), (t.parent = this);
        var e = this.__zr;
        e && e !== t.__zr && t.addSelfToZr(e), e && e.refresh();
      }),
      (n.prototype.remove = function (t) {
        var e = this.__zr,
          n = this._children,
          r = p(n, t);
        return 0 > r
          ? this
          : (n.splice(r, 1),
            (t.parent = null),
            e && t.removeSelfFromZr(e),
            e && e.refresh(),
            this);
      }),
      (n.prototype.removeAll = function () {
        for (var t = this._children, e = this.__zr, n = 0; n < t.length; n++) {
          var r = t[n];
          e && r.removeSelfFromZr(e), (r.parent = null);
        }
        return (t.length = 0), this;
      }),
      (n.prototype.eachChild = function (t, e) {
        for (var n = this._children, r = 0; r < n.length; r++) {
          var i = n[r];
          t.call(e, i, r);
        }
        return this;
      }),
      (n.prototype.traverse = function (t, e) {
        for (var n = 0; n < this._children.length; n++) {
          var r = this._children[n],
            i = t.call(e, r);
          r.isGroup && !i && r.traverse(t, e);
        }
        return this;
      }),
      (n.prototype.addSelfToZr = function (e) {
        t.prototype.addSelfToZr.call(this, e);
        for (var n = 0; n < this._children.length; n++) {
          var r = this._children[n];
          r.addSelfToZr(e);
        }
      }),
      (n.prototype.removeSelfFromZr = function (e) {
        t.prototype.removeSelfFromZr.call(this, e);
        for (var n = 0; n < this._children.length; n++) {
          var r = this._children[n];
          r.removeSelfFromZr(e);
        }
      }),
      (n.prototype.getBoundingRect = function (t) {
        for (
          var e = new Ly(0, 0, 0, 0),
            n = t || this._children,
            r = [],
            i = null,
            o = 0;
          o < n.length;
          o++
        ) {
          var a = n[o];
          if (!a.ignore && !a.invisible) {
            var s = a.getBoundingRect(),
              l = a.getLocalTransform(r);
            l
              ? (Ly.applyTransform(e, s, l), (i = i || e.clone()), i.union(e))
              : ((i = i || s.clone()), i.union(s));
          }
        }
        return i || e;
      }),
      n
    );
  })(zy);
  Fy.prototype.type = "group";
  var Vy = {},
    Hy = {},
    Wy = (function () {
      function t(t, e, n) {
        var r = this;
        (this._sleepAfterStill = 10),
          (this._stillFrameAccum = 0),
          (this._needsRefresh = !0),
          (this._needsRefreshHover = !0),
          (this._darkMode = !1),
          (n = n || {}),
          (this.dom = e),
          (this.id = t);
        var i = new vv(),
          o = n.renderer || "canvas";
        Vy[o] || (o = w(Vy)[0]),
          (n.useDirtyRect = null == n.useDirtyRect ? !1 : n.useDirtyRect);
        var a = new Vy[o](e, i, n, t),
          s = n.ssr || a.ssrOnly;
        (this.storage = i), (this.painter = a);
        var l =
          gg.node || gg.worker || s
            ? null
            : new ay(a.getViewportRoot(), a.root);
        (this.handler = new lv(i, a, l, a.root)),
          (this.animation = new Kv({
            stage: {
              update: s
                ? null
                : function () {
                    return r._flush(!0);
                  },
            },
          })),
          s || this.animation.start();
      }
      return (
        (t.prototype.add = function (t) {
          t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
        }),
        (t.prototype.remove = function (t) {
          t &&
            (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
        }),
        (t.prototype.configLayer = function (t, e) {
          this.painter.configLayer && this.painter.configLayer(t, e),
            this.refresh();
        }),
        (t.prototype.setBackgroundColor = function (t) {
          this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
            this.refresh(),
            (this._backgroundColor = t),
            (this._darkMode = Lr(t));
        }),
        (t.prototype.getBackgroundColor = function () {
          return this._backgroundColor;
        }),
        (t.prototype.setDarkMode = function (t) {
          this._darkMode = t;
        }),
        (t.prototype.isDarkMode = function () {
          return this._darkMode;
        }),
        (t.prototype.refreshImmediately = function (t) {
          t || this.animation.update(!0),
            (this._needsRefresh = !1),
            this.painter.refresh(),
            (this._needsRefresh = !1);
        }),
        (t.prototype.refresh = function () {
          (this._needsRefresh = !0), this.animation.start();
        }),
        (t.prototype.flush = function () {
          this._flush(!1);
        }),
        (t.prototype._flush = function (t) {
          var e,
            n = jn();
          this._needsRefresh && ((e = !0), this.refreshImmediately(t)),
            this._needsRefreshHover &&
              ((e = !0), this.refreshHoverImmediately());
          var r = jn();
          e
            ? ((this._stillFrameAccum = 0),
              this.trigger("rendered", { elapsedTime: r - n }))
            : this._sleepAfterStill > 0 &&
              (this._stillFrameAccum++,
              this._stillFrameAccum > this._sleepAfterStill &&
                this.animation.stop());
        }),
        (t.prototype.setSleepAfterStill = function (t) {
          this._sleepAfterStill = t;
        }),
        (t.prototype.wakeUp = function () {
          this.animation.start(), (this._stillFrameAccum = 0);
        }),
        (t.prototype.refreshHover = function () {
          this._needsRefreshHover = !0;
        }),
        (t.prototype.refreshHoverImmediately = function () {
          (this._needsRefreshHover = !1),
            this.painter.refreshHover &&
              "canvas" === this.painter.getType() &&
              this.painter.refreshHover();
        }),
        (t.prototype.resize = function (t) {
          (t = t || {}),
            this.painter.resize(t.width, t.height),
            this.handler.resize();
        }),
        (t.prototype.clearAnimation = function () {
          this.animation.clear();
        }),
        (t.prototype.getWidth = function () {
          return this.painter.getWidth();
        }),
        (t.prototype.getHeight = function () {
          return this.painter.getHeight();
        }),
        (t.prototype.setCursorStyle = function (t) {
          this.handler.setCursorStyle(t);
        }),
        (t.prototype.findHover = function (t, e) {
          return this.handler.findHover(t, e);
        }),
        (t.prototype.on = function (t, e, n) {
          return this.handler.on(t, e, n), this;
        }),
        (t.prototype.off = function (t, e) {
          this.handler.off(t, e);
        }),
        (t.prototype.trigger = function (t, e) {
          this.handler.trigger(t, e);
        }),
        (t.prototype.clear = function () {
          for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
            t[e] instanceof Fy && t[e].removeSelfFromZr(this);
          this.storage.delAllRoots(), this.painter.clear();
        }),
        (t.prototype.dispose = function () {
          this.animation.stop(),
            this.clear(),
            this.storage.dispose(),
            this.painter.dispose(),
            this.handler.dispose(),
            (this.animation =
              this.storage =
              this.painter =
              this.handler =
                null),
            Ar(this.id);
        }),
        t
      );
    })(),
    Gy = "5.3.0",
    Uy = (Object.freeze || Object)({
      init: Pr,
      dispose: Or,
      disposeAll: Rr,
      getInstance: Er,
      registerPainter: Br,
      version: Gy,
    }),
    Xy = 1e-4,
    qy = 20,
    Yy = 9007199254740991,
    jy =
      /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
    Zy =
      ("undefined" != typeof console && console.warn && console.log,
      "series\x00"),
    Ky = "\x00_ec_\x00",
    $y = [
      "fontStyle",
      "fontWeight",
      "fontSize",
      "fontFamily",
      "rich",
      "tag",
      "color",
      "textBorderColor",
      "textBorderWidth",
      "width",
      "height",
      "lineHeight",
      "align",
      "verticalAlign",
      "baseline",
      "shadowColor",
      "shadowBlur",
      "shadowOffsetX",
      "shadowOffsetY",
      "textShadowColor",
      "textShadowBlur",
      "textShadowOffsetX",
      "textShadowOffsetY",
      "backgroundColor",
      "borderColor",
      "borderWidth",
      "borderRadius",
      "padding",
    ],
    Qy = ri(),
    Jy = { useDefault: !0, enableAll: !1, enableNone: !1 },
    tm = ".",
    em = "___EC__COMPONENT__CONTAINER___",
    nm = "___EC__EXTENDED_CLASS___",
    rm = Math.round(10 * Math.random()),
    im = [
      ["fill", "color"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["opacity"],
      ["shadowColor"],
    ],
    om = Ui(im),
    am = (function () {
      function t() {}
      return (
        (t.prototype.getAreaStyle = function (t, e) {
          return om(this, t, e);
        }),
        t
      );
    })(),
    sm = new Pv(50),
    lm = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
    um = (function () {
      function t() {}
      return t;
    })(),
    hm = (function () {
      function t(t) {
        (this.tokens = []), t && (this.tokens = t);
      }
      return t;
    })(),
    cm = (function () {
      function t() {
        (this.width = 0),
          (this.height = 0),
          (this.contentWidth = 0),
          (this.contentHeight = 0),
          (this.outerWidth = 0),
          (this.outerHeight = 0),
          (this.lines = []);
      }
      return t;
    })(),
    pm = m(
      ",&?/;] ".split(""),
      function (t, e) {
        return (t[e] = !0), t;
      },
      {}
    ),
    fm = "__zr_style_" + Math.round(10 * Math.random()),
    dm = {
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: "#000",
      opacity: 1,
      blend: "source-over",
    },
    gm = {
      style: {
        shadowBlur: !0,
        shadowOffsetX: !0,
        shadowOffsetY: !0,
        shadowColor: !0,
        opacity: !0,
      },
    };
  dm[fm] = !0;
  var vm = ["z", "z2", "invisible"],
    ym = ["invisible"],
    mm = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype._init = function (e) {
          for (var n = w(e), r = 0; r < n.length; r++) {
            var i = n[r];
            "style" === i
              ? this.useStyle(e[i])
              : t.prototype.attrKV.call(this, i, e[i]);
          }
          this.style || this.useStyle({});
        }),
        (n.prototype.beforeBrush = function () {}),
        (n.prototype.afterBrush = function () {}),
        (n.prototype.innerBeforeBrush = function () {}),
        (n.prototype.innerAfterBrush = function () {}),
        (n.prototype.shouldBePainted = function (t, e, n, r) {
          var i = this.transform;
          if (
            this.ignore ||
            this.invisible ||
            0 === this.style.opacity ||
            (this.culling && oo(this, t, e)) ||
            (i && !i[0] && !i[3])
          )
            return !1;
          if (n && this.__clipPaths)
            for (var o = 0; o < this.__clipPaths.length; ++o)
              if (this.__clipPaths[o].isZeroArea()) return !1;
          if (r && this.parent)
            for (var a = this.parent; a; ) {
              if (a.ignore) return !1;
              a = a.parent;
            }
          return !0;
        }),
        (n.prototype.contain = function (t, e) {
          return this.rectContain(t, e);
        }),
        (n.prototype.traverse = function (t, e) {
          t.call(e, this);
        }),
        (n.prototype.rectContain = function (t, e) {
          var n = this.transformCoordToLocal(t, e),
            r = this.getBoundingRect();
          return r.contain(n[0], n[1]);
        }),
        (n.prototype.getPaintRect = function () {
          var t = this._paintRect;
          if (!this._paintRect || this.__dirty) {
            var e = this.transform,
              n = this.getBoundingRect(),
              r = this.style,
              i = r.shadowBlur || 0,
              o = r.shadowOffsetX || 0,
              a = r.shadowOffsetY || 0;
            (t = this._paintRect || (this._paintRect = new Ly(0, 0, 0, 0))),
              e ? Ly.applyTransform(t, n, e) : t.copy(n),
              (i || o || a) &&
                ((t.width += 2 * i + Math.abs(o)),
                (t.height += 2 * i + Math.abs(a)),
                (t.x = Math.min(t.x, t.x + o - i)),
                (t.y = Math.min(t.y, t.y + a - i)));
            var s = this.dirtyRectTolerance;
            t.isZero() ||
              ((t.x = Math.floor(t.x - s)),
              (t.y = Math.floor(t.y - s)),
              (t.width = Math.ceil(t.width + 1 + 2 * s)),
              (t.height = Math.ceil(t.height + 1 + 2 * s)));
          }
          return t;
        }),
        (n.prototype.setPrevPaintRect = function (t) {
          t
            ? ((this._prevPaintRect =
                this._prevPaintRect || new Ly(0, 0, 0, 0)),
              this._prevPaintRect.copy(t))
            : (this._prevPaintRect = null);
        }),
        (n.prototype.getPrevPaintRect = function () {
          return this._prevPaintRect;
        }),
        (n.prototype.animateStyle = function (t) {
          return this.animate("style", t);
        }),
        (n.prototype.updateDuringAnimation = function (t) {
          "style" === t ? this.dirtyStyle() : this.markRedraw();
        }),
        (n.prototype.attrKV = function (e, n) {
          "style" !== e
            ? t.prototype.attrKV.call(this, e, n)
            : this.style
            ? this.setStyle(n)
            : this.useStyle(n);
        }),
        (n.prototype.setStyle = function (t, e) {
          return (
            "string" == typeof t ? (this.style[t] = e) : h(this.style, t),
            this.dirtyStyle(),
            this
          );
        }),
        (n.prototype.dirtyStyle = function (t) {
          t || this.markRedraw(),
            (this.__dirty |= fv),
            this._rect && (this._rect = null);
        }),
        (n.prototype.dirty = function () {
          this.dirtyStyle();
        }),
        (n.prototype.styleChanged = function () {
          return !!(this.__dirty & fv);
        }),
        (n.prototype.styleUpdated = function () {
          this.__dirty &= ~fv;
        }),
        (n.prototype.createStyle = function (t) {
          return j(dm, t);
        }),
        (n.prototype.useStyle = function (t) {
          t[fm] || (t = this.createStyle(t)),
            this.__inHover ? (this.__hoverStyle = t) : (this.style = t),
            this.dirtyStyle();
        }),
        (n.prototype.isStyleObject = function (t) {
          return t[fm];
        }),
        (n.prototype._innerSaveToNormal = function (e) {
          t.prototype._innerSaveToNormal.call(this, e);
          var n = this._normalState;
          e.style &&
            !n.style &&
            (n.style = this._mergeStyle(this.createStyle(), this.style)),
            this._savePrimaryToNormal(e, n, vm);
        }),
        (n.prototype._applyStateObj = function (e, n, r, i, o, a) {
          t.prototype._applyStateObj.call(this, e, n, r, i, o, a);
          var s,
            l = !(n && i);
          if (
            (n && n.style
              ? o
                ? i
                  ? (s = n.style)
                  : ((s = this._mergeStyle(this.createStyle(), r.style)),
                    this._mergeStyle(s, n.style))
                : ((s = this._mergeStyle(
                    this.createStyle(),
                    i ? this.style : r.style
                  )),
                  this._mergeStyle(s, n.style))
              : l && (s = r.style),
            s)
          )
            if (o) {
              var u = this.style;
              if (((this.style = this.createStyle(l ? {} : u)), l))
                for (var h = w(u), c = 0; c < h.length; c++) {
                  var p = h[c];
                  p in s && ((s[p] = s[p]), (this.style[p] = u[p]));
                }
              for (var f = w(s), c = 0; c < f.length; c++) {
                var p = f[c];
                this.style[p] = this.style[p];
              }
              this._transitionState(
                e,
                { style: s },
                a,
                this.getAnimationStyleProps()
              );
            } else this.useStyle(s);
          for (var d = this.__inHover ? ym : vm, c = 0; c < d.length; c++) {
            var p = d[c];
            n && null != n[p]
              ? (this[p] = n[p])
              : l && null != r[p] && (this[p] = r[p]);
          }
        }),
        (n.prototype._mergeStates = function (e) {
          for (
            var n, r = t.prototype._mergeStates.call(this, e), i = 0;
            i < e.length;
            i++
          ) {
            var o = e[i];
            o.style && ((n = n || {}), this._mergeStyle(n, o.style));
          }
          return n && (r.style = n), r;
        }),
        (n.prototype._mergeStyle = function (t, e) {
          return h(t, e), t;
        }),
        (n.prototype.getAnimationStyleProps = function () {
          return gm;
        }),
        (n.initDefaultProps = (function () {
          var t = n.prototype;
          (t.type = "displayable"),
            (t.invisible = !1),
            (t.z = 0),
            (t.z2 = 0),
            (t.zlevel = 0),
            (t.culling = !1),
            (t.cursor = "pointer"),
            (t.rectHover = !1),
            (t.incremental = !1),
            (t._rect = null),
            (t.dirtyRectTolerance = 0),
            (t.__dirty = pv | fv);
        })()),
        n
      );
    })(zy),
    _m = new Ly(0, 0, 0, 0),
    xm = new Ly(0, 0, 0, 0),
    wm = Math.min,
    bm = Math.max,
    Sm = Math.sin,
    Mm = Math.cos,
    Tm = 2 * Math.PI,
    Cm = Q(),
    km = Q(),
    Dm = Q(),
    Im = [],
    Am = [],
    Lm = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
    Pm = [],
    Om = [],
    Rm = [],
    Em = [],
    Bm = [],
    Nm = [],
    zm = Math.min,
    Fm = Math.max,
    Vm = Math.cos,
    Hm = Math.sin,
    Wm = Math.abs,
    Gm = Math.PI,
    Um = 2 * Gm,
    Xm = "undefined" != typeof Float32Array,
    qm = [],
    Ym = (function () {
      function t(t) {
        (this.dpr = 1),
          (this._xi = 0),
          (this._yi = 0),
          (this._x0 = 0),
          (this._y0 = 0),
          (this._len = 0),
          t && (this._saveData = !1),
          this._saveData && (this.data = []);
      }
      return (
        (t.prototype.increaseVersion = function () {
          this._version++;
        }),
        (t.prototype.getVersion = function () {
          return this._version;
        }),
        (t.prototype.setScale = function (t, e, n) {
          (n = n || 0),
            n > 0 &&
              ((this._ux = Wm(n / ly / t) || 0),
              (this._uy = Wm(n / ly / e) || 0));
        }),
        (t.prototype.setDPR = function (t) {
          this.dpr = t;
        }),
        (t.prototype.setContext = function (t) {
          this._ctx = t;
        }),
        (t.prototype.getContext = function () {
          return this._ctx;
        }),
        (t.prototype.beginPath = function () {
          return this._ctx && this._ctx.beginPath(), this.reset(), this;
        }),
        (t.prototype.reset = function () {
          this._saveData && (this._len = 0),
            this._pathSegLen &&
              ((this._pathSegLen = null), (this._pathLen = 0)),
            this._version++;
        }),
        (t.prototype.moveTo = function (t, e) {
          return (
            this._drawPendingPt(),
            this.addData(Lm.M, t, e),
            this._ctx && this._ctx.moveTo(t, e),
            (this._x0 = t),
            (this._y0 = e),
            (this._xi = t),
            (this._yi = e),
            this
          );
        }),
        (t.prototype.lineTo = function (t, e) {
          var n = Wm(t - this._xi),
            r = Wm(e - this._yi),
            i = n > this._ux || r > this._uy;
          if (
            (this.addData(Lm.L, t, e),
            this._ctx && i && this._ctx.lineTo(t, e),
            i)
          )
            (this._xi = t), (this._yi = e), (this._pendingPtDist = 0);
          else {
            var o = n * n + r * r;
            o > this._pendingPtDist &&
              ((this._pendingPtX = t),
              (this._pendingPtY = e),
              (this._pendingPtDist = o));
          }
          return this;
        }),
        (t.prototype.bezierCurveTo = function (t, e, n, r, i, o) {
          return (
            this._drawPendingPt(),
            this.addData(Lm.C, t, e, n, r, i, o),
            this._ctx && this._ctx.bezierCurveTo(t, e, n, r, i, o),
            (this._xi = i),
            (this._yi = o),
            this
          );
        }),
        (t.prototype.quadraticCurveTo = function (t, e, n, r) {
          return (
            this._drawPendingPt(),
            this.addData(Lm.Q, t, e, n, r),
            this._ctx && this._ctx.quadraticCurveTo(t, e, n, r),
            (this._xi = n),
            (this._yi = r),
            this
          );
        }),
        (t.prototype.arc = function (t, e, n, r, i, o) {
          this._drawPendingPt(),
            (qm[0] = r),
            (qm[1] = i),
            co(qm, o),
            (r = qm[0]),
            (i = qm[1]);
          var a = i - r;
          return (
            this.addData(Lm.A, t, e, n, n, r, a, 0, o ? 0 : 1),
            this._ctx && this._ctx.arc(t, e, n, r, i, o),
            (this._xi = Vm(i) * n + t),
            (this._yi = Hm(i) * n + e),
            this
          );
        }),
        (t.prototype.arcTo = function (t, e, n, r, i) {
          return (
            this._drawPendingPt(),
            this._ctx && this._ctx.arcTo(t, e, n, r, i),
            this
          );
        }),
        (t.prototype.rect = function (t, e, n, r) {
          return (
            this._drawPendingPt(),
            this._ctx && this._ctx.rect(t, e, n, r),
            this.addData(Lm.R, t, e, n, r),
            this
          );
        }),
        (t.prototype.closePath = function () {
          this._drawPendingPt(), this.addData(Lm.Z);
          var t = this._ctx,
            e = this._x0,
            n = this._y0;
          return t && t.closePath(), (this._xi = e), (this._yi = n), this;
        }),
        (t.prototype.fill = function (t) {
          t && t.fill(), this.toStatic();
        }),
        (t.prototype.stroke = function (t) {
          t && t.stroke(), this.toStatic();
        }),
        (t.prototype.len = function () {
          return this._len;
        }),
        (t.prototype.setData = function (t) {
          var e = t.length;
          (this.data && this.data.length === e) ||
            !Xm ||
            (this.data = new Float32Array(e));
          for (var n = 0; e > n; n++) this.data[n] = t[n];
          this._len = e;
        }),
        (t.prototype.appendPath = function (t) {
          t instanceof Array || (t = [t]);
          for (var e = t.length, n = 0, r = this._len, i = 0; e > i; i++)
            n += t[i].len();
          Xm &&
            this.data instanceof Float32Array &&
            (this.data = new Float32Array(r + n));
          for (var i = 0; e > i; i++)
            for (var o = t[i].data, a = 0; a < o.length; a++)
              this.data[r++] = o[a];
          this._len = r;
        }),
        (t.prototype.addData = function () {
          if (this._saveData) {
            var t = this.data;
            this._len + arguments.length > t.length &&
              (this._expandData(), (t = this.data));
            for (var e = 0; e < arguments.length; e++)
              t[this._len++] = arguments[e];
          }
        }),
        (t.prototype._drawPendingPt = function () {
          this._pendingPtDist > 0 &&
            (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY),
            (this._pendingPtDist = 0));
        }),
        (t.prototype._expandData = function () {
          if (!(this.data instanceof Array)) {
            for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
            this.data = t;
          }
        }),
        (t.prototype.toStatic = function () {
          if (this._saveData) {
            this._drawPendingPt();
            var t = this.data;
            t instanceof Array &&
              ((t.length = this._len),
              Xm && this._len > 11 && (this.data = new Float32Array(t)));
          }
        }),
        (t.prototype.getBoundingRect = function () {
          (Rm[0] = Rm[1] = Bm[0] = Bm[1] = Number.MAX_VALUE),
            (Em[0] = Em[1] = Nm[0] = Nm[1] = -Number.MAX_VALUE);
          var t,
            e = this.data,
            n = 0,
            r = 0,
            i = 0,
            o = 0;
          for (t = 0; t < this._len; ) {
            var a = e[t++],
              s = 1 === t;
            switch ((s && ((n = e[t]), (r = e[t + 1]), (i = n), (o = r)), a)) {
              case Lm.M:
                (n = i = e[t++]),
                  (r = o = e[t++]),
                  (Bm[0] = i),
                  (Bm[1] = o),
                  (Nm[0] = i),
                  (Nm[1] = o);
                break;
              case Lm.L:
                ao(n, r, e[t], e[t + 1], Bm, Nm), (n = e[t++]), (r = e[t++]);
                break;
              case Lm.C:
                so(
                  n,
                  r,
                  e[t++],
                  e[t++],
                  e[t++],
                  e[t++],
                  e[t],
                  e[t + 1],
                  Bm,
                  Nm
                ),
                  (n = e[t++]),
                  (r = e[t++]);
                break;
              case Lm.Q:
                lo(n, r, e[t++], e[t++], e[t], e[t + 1], Bm, Nm),
                  (n = e[t++]),
                  (r = e[t++]);
                break;
              case Lm.A:
                var l = e[t++],
                  u = e[t++],
                  h = e[t++],
                  c = e[t++],
                  p = e[t++],
                  f = e[t++] + p;
                t += 1;
                var d = !e[t++];
                s && ((i = Vm(p) * h + l), (o = Hm(p) * c + u)),
                  uo(l, u, h, c, p, f, d, Bm, Nm),
                  (n = Vm(f) * h + l),
                  (r = Hm(f) * c + u);
                break;
              case Lm.R:
                (i = n = e[t++]), (o = r = e[t++]);
                var g = e[t++],
                  v = e[t++];
                ao(i, o, i + g, o + v, Bm, Nm);
                break;
              case Lm.Z:
                (n = i), (r = o);
            }
            ye(Rm, Rm, Bm), me(Em, Em, Nm);
          }
          return (
            0 === t && (Rm[0] = Rm[1] = Em[0] = Em[1] = 0),
            new Ly(Rm[0], Rm[1], Em[0] - Rm[0], Em[1] - Rm[1])
          );
        }),
        (t.prototype._calculateLength = function () {
          var t = this.data,
            e = this._len,
            n = this._ux,
            r = this._uy,
            i = 0,
            o = 0,
            a = 0,
            s = 0;
          this._pathSegLen || (this._pathSegLen = []);
          for (var l = this._pathSegLen, u = 0, h = 0, c = 0; e > c; ) {
            var p = t[c++],
              f = 1 === c;
            f && ((i = t[c]), (o = t[c + 1]), (a = i), (s = o));
            var d = -1;
            switch (p) {
              case Lm.M:
                (i = a = t[c++]), (o = s = t[c++]);
                break;
              case Lm.L:
                var g = t[c++],
                  v = t[c++],
                  y = g - i,
                  m = v - o;
                (Wm(y) > n || Wm(m) > r || c === e - 1) &&
                  ((d = Math.sqrt(y * y + m * m)), (i = g), (o = v));
                break;
              case Lm.C:
                var _ = t[c++],
                  x = t[c++],
                  g = t[c++],
                  v = t[c++],
                  w = t[c++],
                  b = t[c++];
                (d = nn(i, o, _, x, g, v, w, b, 10)), (i = w), (o = b);
                break;
              case Lm.Q:
                var _ = t[c++],
                  x = t[c++],
                  g = t[c++],
                  v = t[c++];
                (d = hn(i, o, _, x, g, v, 10)), (i = g), (o = v);
                break;
              case Lm.A:
                var S = t[c++],
                  M = t[c++],
                  T = t[c++],
                  C = t[c++],
                  k = t[c++],
                  D = t[c++],
                  I = D + k;
                c += 1;
                {
                  !t[c++];
                }
                f && ((a = Vm(k) * T + S), (s = Hm(k) * C + M)),
                  (d = Fm(T, C) * zm(Um, Math.abs(D))),
                  (i = Vm(I) * T + S),
                  (o = Hm(I) * C + M);
                break;
              case Lm.R:
                (a = i = t[c++]), (s = o = t[c++]);
                var A = t[c++],
                  L = t[c++];
                d = 2 * A + 2 * L;
                break;
              case Lm.Z:
                var y = a - i,
                  m = s - o;
                (d = Math.sqrt(y * y + m * m)), (i = a), (o = s);
            }
            d >= 0 && ((l[h++] = d), (u += d));
          }
          return (this._pathLen = u), u;
        }),
        (t.prototype.rebuildPath = function (t, e) {
          var n,
            r,
            i,
            o,
            a,
            s,
            l,
            u,
            h,
            c,
            p,
            f = this.data,
            d = this._ux,
            g = this._uy,
            v = this._len,
            y = 1 > e,
            m = 0,
            _ = 0,
            x = 0;
          if (
            !y ||
            (this._pathSegLen || this._calculateLength(),
            (l = this._pathSegLen),
            (u = this._pathLen),
            (h = e * u))
          )
            t: for (var w = 0; v > w; ) {
              var b = f[w++],
                S = 1 === w;
              switch (
                (S && ((i = f[w]), (o = f[w + 1]), (n = i), (r = o)),
                b !== Lm.L && x > 0 && (t.lineTo(c, p), (x = 0)),
                b)
              ) {
                case Lm.M:
                  (n = i = f[w++]), (r = o = f[w++]), t.moveTo(i, o);
                  break;
                case Lm.L:
                  (a = f[w++]), (s = f[w++]);
                  var M = Wm(a - i),
                    T = Wm(s - o);
                  if (M > d || T > g) {
                    if (y) {
                      var C = l[_++];
                      if (m + C > h) {
                        var k = (h - m) / C;
                        t.lineTo(i * (1 - k) + a * k, o * (1 - k) + s * k);
                        break t;
                      }
                      m += C;
                    }
                    t.lineTo(a, s), (i = a), (o = s), (x = 0);
                  } else {
                    var D = M * M + T * T;
                    D > x && ((c = a), (p = s), (x = D));
                  }
                  break;
                case Lm.C:
                  var I = f[w++],
                    A = f[w++],
                    L = f[w++],
                    P = f[w++],
                    O = f[w++],
                    R = f[w++];
                  if (y) {
                    var C = l[_++];
                    if (m + C > h) {
                      var k = (h - m) / C;
                      tn(i, I, L, O, k, Pm),
                        tn(o, A, P, R, k, Om),
                        t.bezierCurveTo(
                          Pm[1],
                          Om[1],
                          Pm[2],
                          Om[2],
                          Pm[3],
                          Om[3]
                        );
                      break t;
                    }
                    m += C;
                  }
                  t.bezierCurveTo(I, A, L, P, O, R), (i = O), (o = R);
                  break;
                case Lm.Q:
                  var I = f[w++],
                    A = f[w++],
                    L = f[w++],
                    P = f[w++];
                  if (y) {
                    var C = l[_++];
                    if (m + C > h) {
                      var k = (h - m) / C;
                      ln(i, I, L, k, Pm),
                        ln(o, A, P, k, Om),
                        t.quadraticCurveTo(Pm[1], Om[1], Pm[2], Om[2]);
                      break t;
                    }
                    m += C;
                  }
                  t.quadraticCurveTo(I, A, L, P), (i = L), (o = P);
                  break;
                case Lm.A:
                  var E = f[w++],
                    B = f[w++],
                    N = f[w++],
                    z = f[w++],
                    F = f[w++],
                    V = f[w++],
                    H = f[w++],
                    W = !f[w++],
                    G = N > z ? N : z,
                    U = Wm(N - z) > 0.001,
                    X = F + V,
                    q = !1;
                  if (y) {
                    var C = l[_++];
                    m + C > h && ((X = F + (V * (h - m)) / C), (q = !0)),
                      (m += C);
                  }
                  if (
                    (U && t.ellipse
                      ? t.ellipse(E, B, N, z, H, F, X, W)
                      : t.arc(E, B, G, F, X, W),
                    q)
                  )
                    break t;
                  S && ((n = Vm(F) * N + E), (r = Hm(F) * z + B)),
                    (i = Vm(X) * N + E),
                    (o = Hm(X) * z + B);
                  break;
                case Lm.R:
                  (n = i = f[w]),
                    (r = o = f[w + 1]),
                    (a = f[w++]),
                    (s = f[w++]);
                  var Y = f[w++],
                    j = f[w++];
                  if (y) {
                    var C = l[_++];
                    if (m + C > h) {
                      var Z = h - m;
                      t.moveTo(a, s),
                        t.lineTo(a + zm(Z, Y), s),
                        (Z -= Y),
                        Z > 0 && t.lineTo(a + Y, s + zm(Z, j)),
                        (Z -= j),
                        Z > 0 && t.lineTo(a + Fm(Y - Z, 0), s + j),
                        (Z -= Y),
                        Z > 0 && t.lineTo(a, s + Fm(j - Z, 0));
                      break t;
                    }
                    m += C;
                  }
                  t.rect(a, s, Y, j);
                  break;
                case Lm.Z:
                  if (y) {
                    var C = l[_++];
                    if (m + C > h) {
                      var k = (h - m) / C;
                      t.lineTo(i * (1 - k) + n * k, o * (1 - k) + r * k);
                      break t;
                    }
                    m += C;
                  }
                  t.closePath(), (i = n), (o = r);
              }
            }
        }),
        (t.prototype.clone = function () {
          var e = new t(),
            n = this.data;
          return (
            (e.data = n.slice ? n.slice() : Array.prototype.slice.call(n)),
            (e._len = this._len),
            e
          );
        }),
        (t.CMD = Lm),
        (t.initDefaultProps = (function () {
          var e = t.prototype;
          (e._saveData = !0),
            (e._ux = 0),
            (e._uy = 0),
            (e._pendingPtDist = 0),
            (e._version = 0);
        })()),
        t
      );
    })(),
    jm = 2 * Math.PI,
    Zm = 2 * Math.PI,
    Km = Ym.CMD,
    $m = 2 * Math.PI,
    Qm = 1e-4,
    Jm = [-1, -1, -1],
    t_ = [-1, -1],
    e_ = c(
      {
        fill: "#000",
        stroke: null,
        strokePercent: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        lineDashOffset: 0,
        lineWidth: 1,
        lineCap: "butt",
        miterLimit: 10,
        strokeNoScale: !1,
        strokeFirst: !1,
      },
      dm
    ),
    n_ = {
      style: c(
        {
          fill: !0,
          stroke: !0,
          strokePercent: !0,
          fillOpacity: !0,
          strokeOpacity: !0,
          lineDashOffset: !0,
          lineWidth: !0,
          miterLimit: !0,
        },
        gm.style
      ),
    },
    r_ = wy.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]),
    i_ = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.update = function () {
          var e = this;
          t.prototype.update.call(this);
          var r = this.style;
          if (r.decal) {
            var i = (this._decalEl = this._decalEl || new n());
            i.buildPath === n.prototype.buildPath &&
              (i.buildPath = function (t) {
                e.buildPath(t, e.shape);
              }),
              (i.silent = !0);
            var o = i.style;
            for (var a in r) o[a] !== r[a] && (o[a] = r[a]);
            (o.fill = r.fill ? r.decal : null),
              (o.decal = null),
              (o.shadowColor = null),
              r.strokeFirst && (o.stroke = null);
            for (var s = 0; s < r_.length; ++s) i[r_[s]] = this[r_[s]];
            i.__dirty |= pv;
          } else this._decalEl && (this._decalEl = null);
        }),
        (n.prototype.getDecalElement = function () {
          return this._decalEl;
        }),
        (n.prototype._init = function (e) {
          var n = w(e);
          this.shape = this.getDefaultShape();
          var r = this.getDefaultStyle();
          r && this.useStyle(r);
          for (var i = 0; i < n.length; i++) {
            var o = n[i],
              a = e[o];
            "style" === o
              ? this.style
                ? h(this.style, a)
                : this.useStyle(a)
              : "shape" === o
              ? h(this.shape, a)
              : t.prototype.attrKV.call(this, o, a);
          }
          this.style || this.useStyle({});
        }),
        (n.prototype.getDefaultStyle = function () {
          return null;
        }),
        (n.prototype.getDefaultShape = function () {
          return {};
        }),
        (n.prototype.canBeInsideText = function () {
          return this.hasFill();
        }),
        (n.prototype.getInsideTextFill = function () {
          var t = this.style.fill;
          if ("none" !== t) {
            if (C(t)) {
              var e = Pn(t, 0);
              return e > 0.5 ? hy : e > 0.2 ? py : cy;
            }
            if (t) return cy;
          }
          return hy;
        }),
        (n.prototype.getInsideTextStroke = function (t) {
          var e = this.style.fill;
          if (C(e)) {
            var n = this.__zr,
              r = !(!n || !n.isDarkMode()),
              i = Pn(t, 0) < uy;
            if (r === i) return e;
          }
        }),
        (n.prototype.buildPath = function () {}),
        (n.prototype.pathUpdated = function () {
          this.__dirty &= ~dv;
        }),
        (n.prototype.getUpdatedPathProxy = function (t) {
          return (
            !this.path && this.createPathProxy(),
            this.path.beginPath(),
            this.buildPath(this.path, this.shape, t),
            this.path
          );
        }),
        (n.prototype.createPathProxy = function () {
          this.path = new Ym(!1);
        }),
        (n.prototype.hasStroke = function () {
          var t = this.style,
            e = t.stroke;
          return !(null == e || "none" === e || !(t.lineWidth > 0));
        }),
        (n.prototype.hasFill = function () {
          var t = this.style,
            e = t.fill;
          return null != e && "none" !== e;
        }),
        (n.prototype.getBoundingRect = function () {
          var t = this._rect,
            e = this.style,
            n = !t;
          if (n) {
            var r = !1;
            this.path || ((r = !0), this.createPathProxy());
            var i = this.path;
            (r || this.__dirty & dv) &&
              (i.beginPath(),
              this.buildPath(i, this.shape, !1),
              this.pathUpdated()),
              (t = i.getBoundingRect());
          }
          if (
            ((this._rect = t),
            this.hasStroke() && this.path && this.path.len() > 0)
          ) {
            var o = this._rectStroke || (this._rectStroke = t.clone());
            if (this.__dirty || n) {
              o.copy(t);
              var a = e.strokeNoScale ? this.getLineScale() : 1,
                s = e.lineWidth;
              if (!this.hasFill()) {
                var l = this.strokeContainThreshold;
                s = Math.max(s, null == l ? 4 : l);
              }
              a > 1e-10 &&
                ((o.width += s / a),
                (o.height += s / a),
                (o.x -= s / a / 2),
                (o.y -= s / a / 2));
            }
            return o;
          }
          return t;
        }),
        (n.prototype.contain = function (t, e) {
          var n = this.transformCoordToLocal(t, e),
            r = this.getBoundingRect(),
            i = this.style;
          if (((t = n[0]), (e = n[1]), r.contain(t, e))) {
            var o = this.path;
            if (this.hasStroke()) {
              var a = i.lineWidth,
                s = i.strokeNoScale ? this.getLineScale() : 1;
              if (
                s > 1e-10 &&
                (this.hasFill() ||
                  (a = Math.max(a, this.strokeContainThreshold)),
                Co(o, a / s, t, e))
              )
                return !0;
            }
            if (this.hasFill()) return To(o, t, e);
          }
          return !1;
        }),
        (n.prototype.dirtyShape = function () {
          (this.__dirty |= dv),
            this._rect && (this._rect = null),
            this._decalEl && this._decalEl.dirtyShape(),
            this.markRedraw();
        }),
        (n.prototype.dirty = function () {
          this.dirtyStyle(), this.dirtyShape();
        }),
        (n.prototype.animateShape = function (t) {
          return this.animate("shape", t);
        }),
        (n.prototype.updateDuringAnimation = function (t) {
          "style" === t
            ? this.dirtyStyle()
            : "shape" === t
            ? this.dirtyShape()
            : this.markRedraw();
        }),
        (n.prototype.attrKV = function (e, n) {
          "shape" === e
            ? this.setShape(n)
            : t.prototype.attrKV.call(this, e, n);
        }),
        (n.prototype.setShape = function (t, e) {
          var n = this.shape;
          return (
            n || (n = this.shape = {}),
            "string" == typeof t ? (n[t] = e) : h(n, t),
            this.dirtyShape(),
            this
          );
        }),
        (n.prototype.shapeChanged = function () {
          return !!(this.__dirty & dv);
        }),
        (n.prototype.createStyle = function (t) {
          return j(e_, t);
        }),
        (n.prototype._innerSaveToNormal = function (e) {
          t.prototype._innerSaveToNormal.call(this, e);
          var n = this._normalState;
          e.shape && !n.shape && (n.shape = h({}, this.shape));
        }),
        (n.prototype._applyStateObj = function (e, n, r, i, o, a) {
          t.prototype._applyStateObj.call(this, e, n, r, i, o, a);
          var s,
            l = !(n && i);
          if (
            (n && n.shape
              ? o
                ? i
                  ? (s = n.shape)
                  : ((s = h({}, r.shape)), h(s, n.shape))
                : ((s = h({}, i ? this.shape : r.shape)), h(s, n.shape))
              : l && (s = r.shape),
            s)
          )
            if (o) {
              this.shape = h({}, this.shape);
              for (var u = {}, c = w(s), p = 0; p < c.length; p++) {
                var f = c[p];
                "object" == typeof s[f]
                  ? (this.shape[f] = s[f])
                  : (u[f] = s[f]);
              }
              this._transitionState(e, { shape: u }, a);
            } else (this.shape = s), this.dirtyShape();
        }),
        (n.prototype._mergeStates = function (e) {
          for (
            var n, r = t.prototype._mergeStates.call(this, e), i = 0;
            i < e.length;
            i++
          ) {
            var o = e[i];
            o.shape && ((n = n || {}), this._mergeStyle(n, o.shape));
          }
          return n && (r.shape = n), r;
        }),
        (n.prototype.getAnimationStyleProps = function () {
          return n_;
        }),
        (n.prototype.isZeroArea = function () {
          return !1;
        }),
        (n.extend = function (t) {
          var r = (function (n) {
            function r(e) {
              var r = n.call(this, e) || this;
              return t.init && t.init.call(r, e), r;
            }
            return (
              e(r, n),
              (r.prototype.getDefaultStyle = function () {
                return s(t.style);
              }),
              (r.prototype.getDefaultShape = function () {
                return s(t.shape);
              }),
              r
            );
          })(n);
          for (var i in t) "function" == typeof t[i] && (r.prototype[i] = t[i]);
          return r;
        }),
        (n.initDefaultProps = (function () {
          var t = n.prototype;
          (t.type = "path"),
            (t.strokeContainThreshold = 5),
            (t.segmentIgnoreThreshold = 0),
            (t.subPixelOptimize = !1),
            (t.autoBatch = !1),
            (t.__dirty = pv | fv | dv);
        })()),
        n
      );
    })(mm),
    o_ = c(
      {
        strokeFirst: !0,
        font: mg,
        x: 0,
        y: 0,
        textAlign: "left",
        textBaseline: "top",
        miterLimit: 2,
      },
      e_
    ),
    a_ = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.prototype.hasStroke = function () {
          var t = this.style,
            e = t.stroke;
          return null != e && "none" !== e && t.lineWidth > 0;
        }),
        (n.prototype.hasFill = function () {
          var t = this.style,
            e = t.fill;
          return null != e && "none" !== e;
        }),
        (n.prototype.createStyle = function (t) {
          return j(o_, t);
        }),
        (n.prototype.setBoundingRect = function (t) {
          this._rect = t;
        }),
        (n.prototype.getBoundingRect = function () {
          var t = this.style;
          if (!this._rect) {
            var e = t.text;
            null != e ? (e += "") : (e = "");
            var n = yr(e, t.font, t.textAlign, t.textBaseline);
            if (((n.x += t.x || 0), (n.y += t.y || 0), this.hasStroke())) {
              var r = t.lineWidth;
              (n.x -= r / 2), (n.y -= r / 2), (n.width += r), (n.height += r);
            }
            this._rect = n;
          }
          return this._rect;
        }),
        (n.initDefaultProps = (function () {
          var t = n.prototype;
          t.dirtyRectTolerance = 10;
        })()),
        n
      );
    })(mm);
  a_.prototype.type = "tspan";
  var s_ = c({ x: 0, y: 0 }, dm),
    l_ = {
      style: c(
        {
          x: !0,
          y: !0,
          width: !0,
          height: !0,
          sx: !0,
          sy: !0,
          sWidth: !0,
          sHeight: !0,
        },
        gm.style
      ),
    },
    u_ = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.prototype.createStyle = function (t) {
          return j(s_, t);
        }),
        (n.prototype._getSize = function (t) {
          var e = this.style,
            n = e[t];
          if (null != n) return n;
          var r = ko(e.image) ? e.image : this.__image;
          if (!r) return 0;
          var i = "width" === t ? "height" : "width",
            o = e[i];
          return null == o ? r[t] : (r[t] / r[i]) * o;
        }),
        (n.prototype.getWidth = function () {
          return this._getSize("width");
        }),
        (n.prototype.getHeight = function () {
          return this._getSize("height");
        }),
        (n.prototype.getAnimationStyleProps = function () {
          return l_;
        }),
        (n.prototype.getBoundingRect = function () {
          var t = this.style;
          return (
            this._rect ||
              (this._rect = new Ly(
                t.x || 0,
                t.y || 0,
                this.getWidth(),
                this.getHeight()
              )),
            this._rect
          );
        }),
        n
      );
    })(mm);
  u_.prototype.type = "image";
  var h_ = Math.round,
    c_ = (function () {
      function t() {
        (this.x = 0), (this.y = 0), (this.width = 0), (this.height = 0);
      }
      return t;
    })(),
    p_ = {},
    f_ = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new c_();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n, r, i, o;
          if (this.subPixelOptimize) {
            var a = Ao(p_, e, this.style);
            (n = a.x),
              (r = a.y),
              (i = a.width),
              (o = a.height),
              (a.r = e.r),
              (e = a);
          } else (n = e.x), (r = e.y), (i = e.width), (o = e.height);
          e.r ? Do(t, e) : t.rect(n, r, i, o);
        }),
        (n.prototype.isZeroArea = function () {
          return !this.shape.width || !this.shape.height;
        }),
        n
      );
    })(i_);
  f_.prototype.type = "rect";
  var d_ = { fill: "#000" },
    g_ = 2,
    v_ = {
      style: c(
        {
          fill: !0,
          stroke: !0,
          fillOpacity: !0,
          strokeOpacity: !0,
          lineWidth: !0,
          fontSize: !0,
          lineHeight: !0,
          width: !0,
          height: !0,
          textShadowColor: !0,
          textShadowBlur: !0,
          textShadowOffsetX: !0,
          textShadowOffsetY: !0,
          backgroundColor: !0,
          padding: !0,
          borderColor: !0,
          borderWidth: !0,
          borderRadius: !0,
        },
        gm.style
      ),
    },
    y_ = (function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return (
          (n.type = "text"),
          (n._children = []),
          (n._defaultStyle = d_),
          n.attr(e),
          n
        );
      }
      return (
        e(n, t),
        (n.prototype.childrenRef = function () {
          return this._children;
        }),
        (n.prototype.update = function () {
          t.prototype.update.call(this),
            this.styleChanged() && this._updateSubTexts();
          for (var e = 0; e < this._children.length; e++) {
            var n = this._children[e];
            (n.zlevel = this.zlevel),
              (n.z = this.z),
              (n.z2 = this.z2),
              (n.culling = this.culling),
              (n.cursor = this.cursor),
              (n.invisible = this.invisible);
          }
        }),
        (n.prototype.updateTransform = function () {
          var e = this.innerTransformable;
          e
            ? (e.updateTransform(),
              e.transform && (this.transform = e.transform))
            : t.prototype.updateTransform.call(this);
        }),
        (n.prototype.getLocalTransform = function (e) {
          var n = this.innerTransformable;
          return n
            ? n.getLocalTransform(e)
            : t.prototype.getLocalTransform.call(this, e);
        }),
        (n.prototype.getComputedTransform = function () {
          return (
            this.__hostTarget &&
              (this.__hostTarget.getComputedTransform(),
              this.__hostTarget.updateInnerText(!0)),
            t.prototype.getComputedTransform.call(this)
          );
        }),
        (n.prototype._updateSubTexts = function () {
          (this._childCursor = 0),
            Eo(this.style),
            this.style.rich
              ? this._updateRichTexts()
              : this._updatePlainTexts(),
            (this._children.length = this._childCursor),
            this.styleUpdated();
        }),
        (n.prototype.addSelfToZr = function (e) {
          t.prototype.addSelfToZr.call(this, e);
          for (var n = 0; n < this._children.length; n++)
            this._children[n].__zr = e;
        }),
        (n.prototype.removeSelfFromZr = function (e) {
          t.prototype.removeSelfFromZr.call(this, e);
          for (var n = 0; n < this._children.length; n++)
            this._children[n].__zr = null;
        }),
        (n.prototype.getBoundingRect = function () {
          if ((this.styleChanged() && this._updateSubTexts(), !this._rect)) {
            for (
              var t = new Ly(0, 0, 0, 0),
                e = this._children,
                n = [],
                r = null,
                i = 0;
              i < e.length;
              i++
            ) {
              var o = e[i],
                a = o.getBoundingRect(),
                s = o.getLocalTransform(n);
              s
                ? (t.copy(a),
                  t.applyTransform(s),
                  (r = r || t.clone()),
                  r.union(t))
                : ((r = r || a.clone()), r.union(a));
            }
            this._rect = r || t;
          }
          return this._rect;
        }),
        (n.prototype.setDefaultTextStyle = function (t) {
          this._defaultStyle = t || d_;
        }),
        (n.prototype.setTextContent = function () {}),
        (n.prototype._mergeStyle = function (t, e) {
          if (!e) return t;
          var n = e.rich,
            r = t.rich || (n && {});
          return (
            h(t, e),
            n && r ? (this._mergeRich(r, n), (t.rich = r)) : r && (t.rich = r),
            t
          );
        }),
        (n.prototype._mergeRich = function (t, e) {
          for (var n = w(e), r = 0; r < n.length; r++) {
            var i = n[r];
            (t[i] = t[i] || {}), h(t[i], e[i]);
          }
        }),
        (n.prototype.getAnimationStyleProps = function () {
          return v_;
        }),
        (n.prototype._getOrCreateChild = function (t) {
          var e = this._children[this._childCursor];
          return (
            (e && e instanceof t) || (e = new t()),
            (this._children[this._childCursor++] = e),
            (e.__zr = this.__zr),
            (e.parent = this),
            e
          );
        }),
        (n.prototype._updatePlainTexts = function () {
          var t = this.style,
            e = t.font || mg,
            n = t.padding,
            r = Vo(t),
            i = Ji(r, t),
            o = Ho(t),
            a = !!t.backgroundColor,
            s = i.outerHeight,
            l = i.outerWidth,
            u = i.contentWidth,
            h = i.lines,
            c = i.lineHeight,
            p = this._defaultStyle,
            f = t.x || 0,
            d = t.y || 0,
            g = t.align || p.align || "left",
            v = t.verticalAlign || p.verticalAlign || "top",
            y = f,
            m = _r(d, i.contentHeight, v);
          if (o || n) {
            var _ = mr(f, l, g),
              x = _r(d, s, v);
            o && this._renderBackground(t, t, _, x, l, s);
          }
          (m += c / 2),
            n &&
              ((y = Fo(f, g, n)),
              "top" === v ? (m += n[0]) : "bottom" === v && (m -= n[2]));
          for (
            var w = 0,
              b = !1,
              S = zo(("fill" in t) ? t.fill : ((b = !0), p.fill)),
              M = No(
                ("stroke" in t)
                  ? t.stroke
                  : a || (p.autoStroke && !b)
                  ? null
                  : ((w = g_), p.stroke)
              ),
              T = t.textShadowBlur > 0,
              C =
                null != t.width &&
                ("truncate" === t.overflow ||
                  "break" === t.overflow ||
                  "breakAll" === t.overflow),
              k = i.calculatedLineHeight,
              D = 0;
            D < h.length;
            D++
          ) {
            var I = this._getOrCreateChild(a_),
              A = I.createStyle();
            I.useStyle(A),
              (A.text = h[D]),
              (A.x = y),
              (A.y = m),
              g && (A.textAlign = g),
              (A.textBaseline = "middle"),
              (A.opacity = t.opacity),
              (A.strokeFirst = !0),
              T &&
                ((A.shadowBlur = t.textShadowBlur || 0),
                (A.shadowColor = t.textShadowColor || "transparent"),
                (A.shadowOffsetX = t.textShadowOffsetX || 0),
                (A.shadowOffsetY = t.textShadowOffsetY || 0)),
              (A.stroke = M),
              (A.fill = S),
              M &&
                ((A.lineWidth = t.lineWidth || w),
                (A.lineDash = t.lineDash),
                (A.lineDashOffset = t.lineDashOffset || 0)),
              (A.font = e),
              Oo(A, t),
              (m += c),
              C &&
                I.setBoundingRect(
                  new Ly(
                    mr(A.x, t.width, A.textAlign),
                    _r(A.y, k, A.textBaseline),
                    u,
                    k
                  )
                );
          }
        }),
        (n.prototype._updateRichTexts = function () {
          var t = this.style,
            e = Vo(t),
            n = to(e, t),
            r = n.width,
            i = n.outerWidth,
            o = n.outerHeight,
            a = t.padding,
            s = t.x || 0,
            l = t.y || 0,
            u = this._defaultStyle,
            h = t.align || u.align,
            c = t.verticalAlign || u.verticalAlign,
            p = mr(s, i, h),
            f = _r(l, o, c),
            d = p,
            g = f;
          a && ((d += a[3]), (g += a[0]));
          var v = d + r;
          Ho(t) && this._renderBackground(t, t, p, f, i, o);
          for (var y = !!t.backgroundColor, m = 0; m < n.lines.length; m++) {
            for (
              var _ = n.lines[m],
                x = _.tokens,
                w = x.length,
                b = _.lineHeight,
                S = _.width,
                M = 0,
                T = d,
                C = v,
                k = w - 1,
                D = void 0;
              w > M && ((D = x[M]), !D.align || "left" === D.align);

            )
              this._placeToken(D, t, b, g, T, "left", y),
                (S -= D.width),
                (T += D.width),
                M++;
            for (; k >= 0 && ((D = x[k]), "right" === D.align); )
              this._placeToken(D, t, b, g, C, "right", y),
                (S -= D.width),
                (C -= D.width),
                k--;
            for (T += (r - (T - d) - (v - C) - S) / 2; k >= M; )
              (D = x[M]),
                this._placeToken(D, t, b, g, T + D.width / 2, "center", y),
                (T += D.width),
                M++;
            g += b;
          }
        }),
        (n.prototype._placeToken = function (t, e, n, r, i, o, a) {
          var s = e.rich[t.styleName] || {};
          s.text = t.text;
          var l = t.verticalAlign,
            u = r + n / 2;
          "top" === l
            ? (u = r + t.height / 2)
            : "bottom" === l && (u = r + n - t.height / 2);
          var h = !t.isLineHolder && Ho(s);
          h &&
            this._renderBackground(
              s,
              e,
              "right" === o
                ? i - t.width
                : "center" === o
                ? i - t.width / 2
                : i,
              u - t.height / 2,
              t.width,
              t.height
            );
          var c = !!s.backgroundColor,
            p = t.textPadding;
          p &&
            ((i = Fo(i, o, p)), (u -= t.height / 2 - p[0] - t.innerHeight / 2));
          var f = this._getOrCreateChild(a_),
            d = f.createStyle();
          f.useStyle(d);
          var g = this._defaultStyle,
            v = !1,
            y = 0,
            m = zo(
              "fill" in s ? s.fill : "fill" in e ? e.fill : ((v = !0), g.fill)
            ),
            _ = No(
              "stroke" in s
                ? s.stroke
                : "stroke" in e
                ? e.stroke
                : c || a || (g.autoStroke && !v)
                ? null
                : ((y = g_), g.stroke)
            ),
            x = s.textShadowBlur > 0 || e.textShadowBlur > 0;
          (d.text = t.text),
            (d.x = i),
            (d.y = u),
            x &&
              ((d.shadowBlur = s.textShadowBlur || e.textShadowBlur || 0),
              (d.shadowColor =
                s.textShadowColor || e.textShadowColor || "transparent"),
              (d.shadowOffsetX =
                s.textShadowOffsetX || e.textShadowOffsetX || 0),
              (d.shadowOffsetY =
                s.textShadowOffsetY || e.textShadowOffsetY || 0)),
            (d.textAlign = o),
            (d.textBaseline = "middle"),
            (d.font = t.font || mg),
            (d.opacity = F(s.opacity, e.opacity, 1)),
            Oo(d, s),
            _ &&
              ((d.lineWidth = F(s.lineWidth, e.lineWidth, y)),
              (d.lineDash = z(s.lineDash, e.lineDash)),
              (d.lineDashOffset = e.lineDashOffset || 0),
              (d.stroke = _)),
            m && (d.fill = m);
          var w = t.contentWidth,
            b = t.contentHeight;
          f.setBoundingRect(
            new Ly(mr(d.x, w, d.textAlign), _r(d.y, b, d.textBaseline), w, b)
          );
        }),
        (n.prototype._renderBackground = function (t, e, n, r, i, o) {
          var a,
            s,
            l = t.backgroundColor,
            u = t.borderWidth,
            h = t.borderColor,
            c = l && l.image,
            p = l && !c,
            f = t.borderRadius,
            d = this;
          if (p || t.lineHeight || (u && h)) {
            (a = this._getOrCreateChild(f_)),
              a.useStyle(a.createStyle()),
              (a.style.fill = null);
            var g = a.shape;
            (g.x = n),
              (g.y = r),
              (g.width = i),
              (g.height = o),
              (g.r = f),
              a.dirtyShape();
          }
          if (p) {
            var v = a.style;
            (v.fill = l || null), (v.fillOpacity = z(t.fillOpacity, 1));
          } else if (c) {
            (s = this._getOrCreateChild(u_)),
              (s.onload = function () {
                d.dirtyStyle();
              });
            var y = s.style;
            (y.image = l.image),
              (y.x = n),
              (y.y = r),
              (y.width = i),
              (y.height = o);
          }
          if (u && h) {
            var v = a.style;
            (v.lineWidth = u),
              (v.stroke = h),
              (v.strokeOpacity = z(t.strokeOpacity, 1)),
              (v.lineDash = t.borderDash),
              (v.lineDashOffset = t.borderDashOffset || 0),
              (a.strokeContainThreshold = 0),
              a.hasFill() &&
                a.hasStroke() &&
                ((v.strokeFirst = !0), (v.lineWidth *= 2));
          }
          var m = (a || s).style;
          (m.shadowBlur = t.shadowBlur || 0),
            (m.shadowColor = t.shadowColor || "transparent"),
            (m.shadowOffsetX = t.shadowOffsetX || 0),
            (m.shadowOffsetY = t.shadowOffsetY || 0),
            (m.opacity = F(t.opacity, e.opacity, 1));
        }),
        (n.makeFont = function (t) {
          var e = "";
          return (
            Ro(t) &&
              (e = [
                t.fontStyle,
                t.fontWeight,
                Po(t.fontSize),
                t.fontFamily || "sans-serif",
              ].join(" ")),
            (e && G(e)) || t.textFont || t.font
          );
        }),
        n
      );
    })(mm),
    m_ = { left: !0, right: 1, center: 1 },
    __ = { top: 1, bottom: 1, middle: 1 },
    x_ = ["fontStyle", "fontWeight", "fontSize", "fontFamily"],
    w_ = ki(),
    b_ = function (t, e, n, r) {
      if (r) {
        var i = w_(r);
        (i.dataIndex = n),
          (i.dataType = e),
          (i.seriesIndex = t),
          "group" === r.type &&
            r.traverse(function (r) {
              var i = w_(r);
              (i.seriesIndex = t), (i.dataIndex = n), (i.dataType = e);
            });
      }
    },
    S_ = 1,
    M_ = {},
    T_ = ki(),
    C_ = ki(),
    k_ = 0,
    D_ = 1,
    I_ = 2,
    A_ = ["emphasis", "blur", "select"],
    L_ = ["normal", "emphasis", "blur", "select"],
    P_ = 10,
    O_ = 9,
    R_ = "highlight",
    E_ = "downplay",
    B_ = "select",
    N_ = "unselect",
    z_ = "toggleSelect",
    F_ = new Pv(100),
    V_ = ["emphasis", "blur", "select"],
    H_ = {
      itemStyle: "getItemStyle",
      lineStyle: "getLineStyle",
      areaStyle: "getAreaStyle",
    },
    W_ = Ym.CMD,
    G_ = [[], [], []],
    U_ = Math.sqrt,
    X_ = Math.atan2,
    q_ = Math.sqrt,
    Y_ = Math.sin,
    j_ = Math.cos,
    Z_ = Math.PI,
    K_ = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
    $_ = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
    Q_ = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return e(n, t), (n.prototype.applyTransform = function () {}), n;
    })(i_),
    J_ = (function () {
      function t() {
        (this.cx = 0), (this.cy = 0), (this.r = 0);
      }
      return t;
    })(),
    tx = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new J_();
        }),
        (n.prototype.buildPath = function (t, e) {
          t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI);
        }),
        n
      );
    })(i_);
  tx.prototype.type = "circle";
  var ex = (function () {
      function t() {
        (this.cx = 0), (this.cy = 0), (this.rx = 0), (this.ry = 0);
      }
      return t;
    })(),
    nx = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new ex();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n = 0.5522848,
            r = e.cx,
            i = e.cy,
            o = e.rx,
            a = e.ry,
            s = o * n,
            l = a * n;
          t.moveTo(r - o, i),
            t.bezierCurveTo(r - o, i - l, r - s, i - a, r, i - a),
            t.bezierCurveTo(r + s, i - a, r + o, i - l, r + o, i),
            t.bezierCurveTo(r + o, i + l, r + s, i + a, r, i + a),
            t.bezierCurveTo(r - s, i + a, r - o, i + l, r - o, i),
            t.closePath();
        }),
        n
      );
    })(i_);
  nx.prototype.type = "ellipse";
  var rx = Math.PI,
    ix = 2 * rx,
    ox = Math.sin,
    ax = Math.cos,
    sx = Math.acos,
    lx = Math.atan2,
    ux = Math.abs,
    hx = Math.sqrt,
    cx = Math.max,
    px = Math.min,
    fx = 1e-4,
    dx = (function () {
      function t() {
        (this.cx = 0),
          (this.cy = 0),
          (this.r0 = 0),
          (this.r = 0),
          (this.startAngle = 0),
          (this.endAngle = 2 * Math.PI),
          (this.clockwise = !0),
          (this.cornerRadius = 0);
      }
      return t;
    })(),
    gx = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new dx();
        }),
        (n.prototype.buildPath = function (t, e) {
          Za(t, e);
        }),
        (n.prototype.isZeroArea = function () {
          return (
            this.shape.startAngle === this.shape.endAngle ||
            this.shape.r === this.shape.r0
          );
        }),
        n
      );
    })(i_);
  gx.prototype.type = "sector";
  var vx = (function () {
      function t() {
        (this.cx = 0), (this.cy = 0), (this.r = 0), (this.r0 = 0);
      }
      return t;
    })(),
    yx = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new vx();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n = e.cx,
            r = e.cy,
            i = 2 * Math.PI;
          t.moveTo(n + e.r, r),
            t.arc(n, r, e.r, 0, i, !1),
            t.moveTo(n + e.r0, r),
            t.arc(n, r, e.r0, 0, i, !0);
        }),
        n
      );
    })(i_);
  yx.prototype.type = "ring";
  var mx = (function () {
      function t() {
        (this.points = null), (this.smooth = 0), (this.smoothConstraint = null);
      }
      return t;
    })(),
    _x = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new mx();
        }),
        (n.prototype.buildPath = function (t, e) {
          $a(t, e, !0);
        }),
        n
      );
    })(i_);
  _x.prototype.type = "polygon";
  var xx = (function () {
      function t() {
        (this.points = null),
          (this.percent = 1),
          (this.smooth = 0),
          (this.smoothConstraint = null);
      }
      return t;
    })(),
    bx = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultStyle = function () {
          return { stroke: "#000", fill: null };
        }),
        (n.prototype.getDefaultShape = function () {
          return new xx();
        }),
        (n.prototype.buildPath = function (t, e) {
          $a(t, e, !1);
        }),
        n
      );
    })(i_);
  bx.prototype.type = "polyline";
  var Sx = {},
    Mx = (function () {
      function t() {
        (this.x1 = 0),
          (this.y1 = 0),
          (this.x2 = 0),
          (this.y2 = 0),
          (this.percent = 1);
      }
      return t;
    })(),
    Tx = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultStyle = function () {
          return { stroke: "#000", fill: null };
        }),
        (n.prototype.getDefaultShape = function () {
          return new Mx();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n, r, i, o;
          if (this.subPixelOptimize) {
            var a = Io(Sx, e, this.style);
            (n = a.x1), (r = a.y1), (i = a.x2), (o = a.y2);
          } else (n = e.x1), (r = e.y1), (i = e.x2), (o = e.y2);
          var s = e.percent;
          0 !== s &&
            (t.moveTo(n, r),
            1 > s && ((i = n * (1 - s) + i * s), (o = r * (1 - s) + o * s)),
            t.lineTo(i, o));
        }),
        (n.prototype.pointAt = function (t) {
          var e = this.shape;
          return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
        }),
        n
      );
    })(i_);
  Tx.prototype.type = "line";
  var Cx = [],
    kx = (function () {
      function t() {
        (this.x1 = 0),
          (this.y1 = 0),
          (this.x2 = 0),
          (this.y2 = 0),
          (this.cpx1 = 0),
          (this.cpy1 = 0),
          (this.percent = 1);
      }
      return t;
    })(),
    Dx = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultStyle = function () {
          return { stroke: "#000", fill: null };
        }),
        (n.prototype.getDefaultShape = function () {
          return new kx();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n = e.x1,
            r = e.y1,
            i = e.x2,
            o = e.y2,
            a = e.cpx1,
            s = e.cpy1,
            l = e.cpx2,
            u = e.cpy2,
            h = e.percent;
          0 !== h &&
            (t.moveTo(n, r),
            null == l || null == u
              ? (1 > h &&
                  (ln(n, a, i, h, Cx),
                  (a = Cx[1]),
                  (i = Cx[2]),
                  ln(r, s, o, h, Cx),
                  (s = Cx[1]),
                  (o = Cx[2])),
                t.quadraticCurveTo(a, s, i, o))
              : (1 > h &&
                  (tn(n, a, l, i, h, Cx),
                  (a = Cx[1]),
                  (l = Cx[2]),
                  (i = Cx[3]),
                  tn(r, s, u, o, h, Cx),
                  (s = Cx[1]),
                  (u = Cx[2]),
                  (o = Cx[3])),
                t.bezierCurveTo(a, s, l, u, i, o)));
        }),
        (n.prototype.pointAt = function (t) {
          return Qa(this.shape, t, !1);
        }),
        (n.prototype.tangentAt = function (t) {
          var e = Qa(this.shape, t, !0);
          return ce(e, e);
        }),
        n
      );
    })(i_);
  Dx.prototype.type = "bezier-curve";
  var Ix = (function () {
      function t() {
        (this.cx = 0),
          (this.cy = 0),
          (this.r = 0),
          (this.startAngle = 0),
          (this.endAngle = 2 * Math.PI),
          (this.clockwise = !0);
      }
      return t;
    })(),
    Ax = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultStyle = function () {
          return { stroke: "#000", fill: null };
        }),
        (n.prototype.getDefaultShape = function () {
          return new Ix();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n = e.cx,
            r = e.cy,
            i = Math.max(e.r, 0),
            o = e.startAngle,
            a = e.endAngle,
            s = e.clockwise,
            l = Math.cos(o),
            u = Math.sin(o);
          t.moveTo(l * i + n, u * i + r), t.arc(n, r, i, o, a, !s);
        }),
        n
      );
    })(i_);
  Ax.prototype.type = "arc";
  var Lx = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = "compound"), e;
      }
      return (
        e(n, t),
        (n.prototype._updatePathDirty = function () {
          for (
            var t = this.shape.paths, e = this.shapeChanged(), n = 0;
            n < t.length;
            n++
          )
            e = e || t[n].shapeChanged();
          e && this.dirtyShape();
        }),
        (n.prototype.beforeBrush = function () {
          this._updatePathDirty();
          for (
            var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0;
            n < t.length;
            n++
          )
            t[n].path || t[n].createPathProxy(),
              t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold);
        }),
        (n.prototype.buildPath = function (t, e) {
          for (var n = e.paths || [], r = 0; r < n.length; r++)
            n[r].buildPath(t, n[r].shape, !0);
        }),
        (n.prototype.afterBrush = function () {
          for (var t = this.shape.paths || [], e = 0; e < t.length; e++)
            t[e].pathUpdated();
        }),
        (n.prototype.getBoundingRect = function () {
          return (
            this._updatePathDirty.call(this),
            i_.prototype.getBoundingRect.call(this)
          );
        }),
        n
      );
    })(i_),
    Px = (function () {
      function t(t) {
        this.colorStops = t || [];
      }
      return (
        (t.prototype.addColorStop = function (t, e) {
          this.colorStops.push({ offset: t, color: e });
        }),
        t
      );
    })(),
    Ox = (function (t) {
      function n(e, n, r, i, o, a) {
        var s = t.call(this, o) || this;
        return (
          (s.x = null == e ? 0 : e),
          (s.y = null == n ? 0 : n),
          (s.x2 = null == r ? 1 : r),
          (s.y2 = null == i ? 0 : i),
          (s.type = "linear"),
          (s.global = a || !1),
          s
        );
      }
      return e(n, t), n;
    })(Px),
    Rx = (function (t) {
      function n(e, n, r, i, o) {
        var a = t.call(this, i) || this;
        return (
          (a.x = null == e ? 0.5 : e),
          (a.y = null == n ? 0.5 : n),
          (a.r = null == r ? 0.5 : r),
          (a.type = "radial"),
          (a.global = o || !1),
          a
        );
      }
      return e(n, t), n;
    })(Px),
    Ex = [0, 0],
    Bx = [0, 0],
    Nx = new by(),
    zx = new by(),
    Fx = (function () {
      function t(t, e) {
        (this._corners = []), (this._axes = []), (this._origin = [0, 0]);
        for (var n = 0; 4 > n; n++) this._corners[n] = new by();
        for (var n = 0; 2 > n; n++) this._axes[n] = new by();
        t && this.fromBoundingRect(t, e);
      }
      return (
        (t.prototype.fromBoundingRect = function (t, e) {
          var n = this._corners,
            r = this._axes,
            i = t.x,
            o = t.y,
            a = i + t.width,
            s = o + t.height;
          if (
            (n[0].set(i, o), n[1].set(a, o), n[2].set(a, s), n[3].set(i, s), e)
          )
            for (var l = 0; 4 > l; l++) n[l].transform(e);
          by.sub(r[0], n[1], n[0]),
            by.sub(r[1], n[3], n[0]),
            r[0].normalize(),
            r[1].normalize();
          for (var l = 0; 2 > l; l++) this._origin[l] = r[l].dot(n[0]);
        }),
        (t.prototype.intersect = function (t, e) {
          var n = !0,
            r = !e;
          return (
            Nx.set(1 / 0, 1 / 0),
            zx.set(0, 0),
            !this._intersectCheckOneSide(this, t, Nx, zx, r, 1) && ((n = !1), r)
              ? n
              : !this._intersectCheckOneSide(t, this, Nx, zx, r, -1) &&
                ((n = !1), r)
              ? n
              : (r || by.copy(e, n ? Nx : zx), n)
          );
        }),
        (t.prototype._intersectCheckOneSide = function (t, e, n, r, i, o) {
          for (var a = !0, s = 0; 2 > s; s++) {
            var l = this._axes[s];
            if (
              (this._getProjMinMaxOnAxis(s, t._corners, Ex),
              this._getProjMinMaxOnAxis(s, e._corners, Bx),
              Ex[1] < Bx[0] || Ex[0] > Bx[1])
            ) {
              if (((a = !1), i)) return a;
              var u = Math.abs(Bx[0] - Ex[1]),
                h = Math.abs(Ex[0] - Bx[1]);
              Math.min(u, h) > r.len() &&
                (h > u ? by.scale(r, l, -u * o) : by.scale(r, l, h * o));
            } else if (n) {
              var u = Math.abs(Bx[0] - Ex[1]),
                h = Math.abs(Ex[0] - Bx[1]);
              Math.min(u, h) < n.len() &&
                (h > u ? by.scale(n, l, u * o) : by.scale(n, l, -h * o));
            }
          }
          return a;
        }),
        (t.prototype._getProjMinMaxOnAxis = function (t, e, n) {
          for (
            var r = this._axes[t],
              i = this._origin,
              o = e[0].dot(r) + i[t],
              a = o,
              s = o,
              l = 1;
            l < e.length;
            l++
          ) {
            var u = e[l].dot(r) + i[t];
            (a = Math.min(u, a)), (s = Math.max(u, s));
          }
          (n[0] = a), (n[1] = s);
        }),
        t
      );
    })(),
    Vx = [],
    Hx = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (
          (e.notClear = !0),
          (e.incremental = !0),
          (e._displayables = []),
          (e._temporaryDisplayables = []),
          (e._cursor = 0),
          e
        );
      }
      return (
        e(n, t),
        (n.prototype.traverse = function (t, e) {
          t.call(e, this);
        }),
        (n.prototype.useStyle = function () {
          this.style = {};
        }),
        (n.prototype.getCursor = function () {
          return this._cursor;
        }),
        (n.prototype.innerAfterBrush = function () {
          this._cursor = this._displayables.length;
        }),
        (n.prototype.clearDisplaybles = function () {
          (this._displayables = []),
            (this._temporaryDisplayables = []),
            (this._cursor = 0),
            this.markRedraw(),
            (this.notClear = !1);
        }),
        (n.prototype.clearTemporalDisplayables = function () {
          this._temporaryDisplayables = [];
        }),
        (n.prototype.addDisplayable = function (t, e) {
          e ? this._temporaryDisplayables.push(t) : this._displayables.push(t),
            this.markRedraw();
        }),
        (n.prototype.addDisplayables = function (t, e) {
          e = e || !1;
          for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e);
        }),
        (n.prototype.getDisplayables = function () {
          return this._displayables;
        }),
        (n.prototype.getTemporalDisplayables = function () {
          return this._temporaryDisplayables;
        }),
        (n.prototype.eachPendingDisplayable = function (t) {
          for (var e = this._cursor; e < this._displayables.length; e++)
            t && t(this._displayables[e]);
          for (var e = 0; e < this._temporaryDisplayables.length; e++)
            t && t(this._temporaryDisplayables[e]);
        }),
        (n.prototype.update = function () {
          this.updateTransform();
          for (var t = this._cursor; t < this._displayables.length; t++) {
            var e = this._displayables[t];
            (e.parent = this), e.update(), (e.parent = null);
          }
          for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            (e.parent = this), e.update(), (e.parent = null);
          }
        }),
        (n.prototype.getBoundingRect = function () {
          if (!this._rect) {
            for (
              var t = new Ly(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0;
              e < this._displayables.length;
              e++
            ) {
              var n = this._displayables[e],
                r = n.getBoundingRect().clone();
              n.needLocalTransform() &&
                r.applyTransform(n.getLocalTransform(Vx)),
                t.union(r);
            }
            this._rect = t;
          }
          return this._rect;
        }),
        (n.prototype.contain = function (t, e) {
          var n = this.transformCoordToLocal(t, e),
            r = this.getBoundingRect();
          if (r.contain(n[0], n[1]))
            for (var i = 0; i < this._displayables.length; i++) {
              var o = this._displayables[i];
              if (o.contain(t, e)) return !0;
            }
          return !1;
        }),
        n
      );
    })(mm),
    Wx = ki(),
    Gx = Math.max,
    Ux = Math.min,
    Xx = {},
    qx = Ua,
    Yx = Xa;
  hs("circle", tx),
    hs("ellipse", nx),
    hs("sector", gx),
    hs("ring", yx),
    hs("polygon", _x),
    hs("polyline", bx),
    hs("rect", f_),
    hs("line", Tx),
    hs("bezierCurve", Dx),
    hs("arc", Ax);
  var jx = {},
    Zx = [
      "fontStyle",
      "fontWeight",
      "fontSize",
      "fontFamily",
      "textShadowColor",
      "textShadowBlur",
      "textShadowOffsetX",
      "textShadowOffsetY",
    ],
    Kx = ["align", "lineHeight", "width", "height", "tag", "verticalAlign"],
    $x = [
      "padding",
      "borderWidth",
      "borderRadius",
      "borderDashOffset",
      "backgroundColor",
      "borderColor",
      "shadowColor",
      "shadowBlur",
      "shadowOffsetX",
      "shadowOffsetY",
    ],
    Qx = ki(),
    Jx = ["textStyle", "color"],
    tw = [
      "fontStyle",
      "fontWeight",
      "fontSize",
      "fontFamily",
      "padding",
      "lineHeight",
      "rich",
      "width",
      "height",
      "overflow",
    ],
    ew = new y_(),
    nw = (function () {
      function t() {}
      return (
        (t.prototype.getTextColor = function (t) {
          var e = this.ecModel;
          return this.getShallow("color") || (!t && e ? e.get(Jx) : null);
        }),
        (t.prototype.getFont = function () {
          return Es(
            {
              fontStyle: this.getShallow("fontStyle"),
              fontWeight: this.getShallow("fontWeight"),
              fontSize: this.getShallow("fontSize"),
              fontFamily: this.getShallow("fontFamily"),
            },
            this.ecModel
          );
        }),
        (t.prototype.getTextRect = function (t) {
          for (
            var e = {
                text: t,
                verticalAlign:
                  this.getShallow("verticalAlign") ||
                  this.getShallow("baseline"),
              },
              n = 0;
            n < tw.length;
            n++
          )
            e[tw[n]] = this.getShallow(tw[n]);
          return ew.useStyle(e), ew.update(), ew.getBoundingRect();
        }),
        t
      );
    })(),
    rw = [
      ["lineWidth", "width"],
      ["stroke", "color"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"],
      ["lineDash", "type"],
      ["lineDashOffset", "dashOffset"],
      ["lineCap", "cap"],
      ["lineJoin", "join"],
      ["miterLimit"],
    ],
    iw = Ui(rw),
    ow = (function () {
      function t() {}
      return (
        (t.prototype.getLineStyle = function (t) {
          return iw(this, t);
        }),
        t
      );
    })(),
    aw = [
      ["fill", "color"],
      ["stroke", "borderColor"],
      ["lineWidth", "borderWidth"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"],
      ["lineDash", "borderType"],
      ["lineDashOffset", "borderDashOffset"],
      ["lineCap", "borderCap"],
      ["lineJoin", "borderJoin"],
      ["miterLimit", "borderMiterLimit"],
    ],
    sw = Ui(aw),
    lw = (function () {
      function t() {}
      return (
        (t.prototype.getItemStyle = function (t, e) {
          return sw(this, t, e);
        }),
        t
      );
    })(),
    uw = (function () {
      function t(t, e, n) {
        (this.parentModel = e), (this.ecModel = n), (this.option = t);
      }
      return (
        (t.prototype.init = function () {
          for (var t = [], e = 3; e < arguments.length; e++)
            t[e - 3] = arguments[e];
        }),
        (t.prototype.mergeOption = function (t) {
          l(this.option, t, !0);
        }),
        (t.prototype.get = function (t, e) {
          return null == t
            ? this.option
            : this._doGet(this.parsePath(t), !e && this.parentModel);
        }),
        (t.prototype.getShallow = function (t, e) {
          var n = this.option,
            r = null == n ? n : n[t];
          if (null == r && !e) {
            var i = this.parentModel;
            i && (r = i.getShallow(t));
          }
          return r;
        }),
        (t.prototype.getModel = function (e, n) {
          var r = null != e,
            i = r ? this.parsePath(e) : null,
            o = r ? this._doGet(i) : this.option;
          return (
            (n =
              n ||
              (this.parentModel &&
                this.parentModel.getModel(this.resolveParentPath(i)))),
            new t(o, n, this.ecModel)
          );
        }),
        (t.prototype.isEmpty = function () {
          return null == this.option;
        }),
        (t.prototype.restoreData = function () {}),
        (t.prototype.clone = function () {
          var t = this.constructor;
          return new t(s(this.option));
        }),
        (t.prototype.parsePath = function (t) {
          return "string" == typeof t ? t.split(".") : t;
        }),
        (t.prototype.resolveParentPath = function (t) {
          return t;
        }),
        (t.prototype.isAnimationEnabled = function () {
          if (!gg.node && this.option) {
            if (null != this.option.animation) return !!this.option.animation;
            if (this.parentModel) return this.parentModel.isAnimationEnabled();
          }
        }),
        (t.prototype._doGet = function (t, e) {
          var n = this.option;
          if (!t) return n;
          for (
            var r = 0;
            r < t.length &&
            (!t[r] ||
              ((n = n && "object" == typeof n ? n[t[r]] : null), null != n));
            r++
          );
          return (
            null == n &&
              e &&
              (n = e._doGet(this.resolveParentPath(t), e.parentModel)),
            n
          );
        }),
        t
      );
    })();
  Ni(uw), Vi(uw), d(uw, ow), d(uw, lw), d(uw, am), d(uw, nw);
  var hw = Math.round(10 * Math.random()),
    cw = {
      time: {
        month: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthAbbr: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      legend: { selector: { all: "All", inverse: "Inv" } },
      toolbox: {
        brush: {
          title: {
            rect: "Box Select",
            polygon: "Lasso Select",
            lineX: "Horizontally Select",
            lineY: "Vertically Select",
            keep: "Keep Selections",
            clear: "Clear Selections",
          },
        },
        dataView: {
          title: "Data View",
          lang: ["Data View", "Close", "Refresh"],
        },
        dataZoom: { title: { zoom: "Zoom", back: "Zoom Reset" } },
        magicType: {
          title: {
            line: "Switch to Line Chart",
            bar: "Switch to Bar Chart",
            stack: "Stack",
            tiled: "Tile",
          },
        },
        restore: { title: "Restore" },
        saveAsImage: {
          title: "Save as Image",
          lang: ["Right Click to Save Image"],
        },
      },
      series: {
        typeNames: {
          pie: "Pie chart",
          bar: "Bar chart",
          line: "Line chart",
          scatter: "Scatter plot",
          effectScatter: "Ripple scatter plot",
          radar: "Radar chart",
          tree: "Tree",
          treemap: "Treemap",
          boxplot: "Boxplot",
          candlestick: "Candlestick",
          k: "K line chart",
          heatmap: "Heat map",
          map: "Map",
          parallel: "Parallel coordinate map",
          lines: "Line graph",
          graph: "Relationship graph",
          sankey: "Sankey diagram",
          funnel: "Funnel chart",
          gauge: "Gauge",
          pictorialBar: "Pictorial bar",
          themeRiver: "Theme River Map",
          sunburst: "Sunburst",
        },
      },
      aria: {
        general: {
          withTitle: 'This is a chart about "{title}"',
          withoutTitle: "This is a chart",
        },
        series: {
          single: {
            prefix: "",
            withName: " with type {seriesType} named {seriesName}.",
            withoutName: " with type {seriesType}.",
          },
          multiple: {
            prefix: ". It consists of {seriesCount} series count.",
            withName:
              " The {seriesId} series is a {seriesType} representing {seriesName}.",
            withoutName: " The {seriesId} series is a {seriesType}.",
            separator: { middle: "", end: "" },
          },
        },
        data: {
          allData: "The data is as follows: ",
          partialData: "The first {displayCnt} items are: ",
          withName: "the data for {name} is {value}",
          withoutName: "{value}",
          separator: { middle: ", ", end: ". " },
        },
      },
    },
    pw = {
      time: {
        month: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
        monthAbbr: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        dayOfWeek: [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ],
        dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"],
      },
      legend: { selector: { all: "全选", inverse: "反选" } },
      toolbox: {
        brush: {
          title: {
            rect: "矩形选择",
            polygon: "圈选",
            lineX: "横向选择",
            lineY: "纵向选择",
            keep: "保持选择",
            clear: "清除选择",
          },
        },
        dataView: { title: "数据视图", lang: ["数据视图", "关闭", "刷新"] },
        dataZoom: { title: { zoom: "区域缩放", back: "区域缩放还原" } },
        magicType: {
          title: {
            line: "切换为折线图",
            bar: "切换为柱状图",
            stack: "切换为堆叠",
            tiled: "切换为平铺",
          },
        },
        restore: { title: "还原" },
        saveAsImage: { title: "保存为图片", lang: ["右键另存为图片"] },
      },
      series: {
        typeNames: {
          pie: "饼图",
          bar: "柱状图",
          line: "折线图",
          scatter: "散点图",
          effectScatter: "涟漪散点图",
          radar: "雷达图",
          tree: "树图",
          treemap: "矩形树图",
          boxplot: "箱型图",
          candlestick: "K线图",
          k: "K线图",
          heatmap: "热力图",
          map: "地图",
          parallel: "平行坐标图",
          lines: "线图",
          graph: "关系图",
          sankey: "桑基图",
          funnel: "漏斗图",
          gauge: "仪表盘图",
          pictorialBar: "象形柱图",
          themeRiver: "主题河流图",
          sunburst: "旭日图",
        },
      },
      aria: {
        general: {
          withTitle: "这是一个关于“{title}”的图表。",
          withoutTitle: "这是一个图表，",
        },
        series: {
          single: {
            prefix: "",
            withName: "图表类型是{seriesType}，表示{seriesName}。",
            withoutName: "图表类型是{seriesType}。",
          },
          multiple: {
            prefix: "它由{seriesCount}个图表系列组成。",
            withName:
              "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
            withoutName: "第{seriesId}个系列是一个{seriesType}，",
            separator: { middle: "；", end: "。" },
          },
        },
        data: {
          allData: "其数据是——",
          partialData: "其中，前{displayCnt}项是——",
          withName: "{name}的数据是{value}",
          withoutName: "{value}",
          separator: { middle: "，", end: "" },
        },
      },
    },
    fw = "ZH",
    dw = "EN",
    gw = dw,
    vw = {},
    yw = {},
    mw = gg.domSupported
      ? (function () {
          var t = (
            document.documentElement.lang ||
            navigator.language ||
            navigator.browserLanguage
          ).toUpperCase();
          return t.indexOf(fw) > -1 ? fw : gw;
        })()
      : gw;
  Ws(dw, cw), Ws(fw, pw);
  var _w = 1e3,
    xw = 60 * _w,
    ww = 60 * xw,
    bw = 24 * ww,
    Sw = 365 * bw,
    Mw = {
      year: "{yyyy}",
      month: "{MMM}",
      day: "{d}",
      hour: "{HH}:{mm}",
      minute: "{HH}:{mm}",
      second: "{HH}:{mm}:{ss}",
      millisecond: "{HH}:{mm}:{ss} {SSS}",
      none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}",
    },
    Tw = "{yyyy}-{MM}-{dd}",
    Cw = {
      year: "{yyyy}",
      month: "{yyyy}-{MM}",
      day: Tw,
      hour: Tw + " " + Mw.hour,
      minute: Tw + " " + Mw.minute,
      second: Tw + " " + Mw.second,
      millisecond: Mw.none,
    },
    kw = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    Dw = [
      "year",
      "half-year",
      "quarter",
      "month",
      "week",
      "half-week",
      "day",
      "half-day",
      "quarter-day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ],
    Iw = H,
    Aw = /([&<>"'])/g,
    Lw = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    Pw = ["a", "b", "c", "d", "e", "f", "g"],
    Ow = function (t, e) {
      return "{" + t + (null == e ? "" : e) + "}";
    },
    Rw = v,
    Ew = ["left", "right", "top", "bottom", "width", "height"],
    Bw = [
      ["width", "left", "right"],
      ["height", "top", "bottom"],
    ],
    Nw = (S(Sl, "vertical"), S(Sl, "horizontal"), ki()),
    zw = (function (t) {
      function n(e, n, r) {
        var i = t.call(this, e, n, r) || this;
        return (i.uid = zs("ec_cpt_model")), i;
      }
      return (
        e(n, t),
        (n.prototype.init = function (t, e, n) {
          this.mergeDefaultAndTheme(t, n);
        }),
        (n.prototype.mergeDefaultAndTheme = function (t, e) {
          var n = Tl(this),
            r = n ? kl(t) : {},
            i = e.getTheme();
          l(t, i.get(this.mainType)),
            l(t, this.getDefaultOption()),
            n && Cl(t, r, n);
        }),
        (n.prototype.mergeOption = function (t) {
          l(this.option, t, !0);
          var e = Tl(this);
          e && Cl(this.option, t, e);
        }),
        (n.prototype.optionUpdated = function () {}),
        (n.prototype.getDefaultOption = function () {
          var t = this.constructor;
          if (!Bi(t)) return t.defaultOption;
          var e = Nw(this);
          if (!e.defaultOption) {
            for (var n = [], r = t; r; ) {
              var i = r.prototype.defaultOption;
              i && n.push(i), (r = r.superClass);
            }
            for (var o = {}, a = n.length - 1; a >= 0; a--) o = l(o, n[a], !0);
            e.defaultOption = o;
          }
          return e.defaultOption;
        }),
        (n.prototype.getReferringComponents = function (t, e) {
          var n = t + "Index",
            r = t + "Id";
          return Ai(
            this.ecModel,
            t,
            { index: this.get(n, !0), id: this.get(r, !0) },
            e
          );
        }),
        (n.prototype.getBoxLayoutParams = function () {
          var t = this;
          return {
            left: t.get("left"),
            top: t.get("top"),
            right: t.get("right"),
            bottom: t.get("bottom"),
            width: t.get("width"),
            height: t.get("height"),
          };
        }),
        (n.prototype.getZLevelKey = function () {
          return "";
        }),
        (n.prototype.setZLevel = function (t) {
          this.option.zlevel = t;
        }),
        (n.protoInitialize = (function () {
          var t = n.prototype;
          (t.type = "component"),
            (t.id = ""),
            (t.name = ""),
            (t.mainType = ""),
            (t.subType = ""),
            (t.componentIndex = 0);
        })()),
        n
      );
    })(uw);
  Fi(zw, uw), Gi(zw), Fs(zw), Vs(zw, Il);
  var Fw = "";
  "undefined" != typeof navigator && (Fw = navigator.platform || "");
  var Vw,
    Hw,
    Ww = "rgba(0, 0, 0, 0.2)",
    Gw = {
      darkMode: "auto",
      colorBy: "series",
      color: [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc",
      ],
      gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
      aria: {
        decal: {
          decals: [
            {
              color: Ww,
              dashArrayX: [1, 0],
              dashArrayY: [2, 5],
              symbolSize: 1,
              rotation: Math.PI / 6,
            },
            {
              color: Ww,
              symbol: "circle",
              dashArrayX: [
                [8, 8],
                [0, 8, 8, 0],
              ],
              dashArrayY: [6, 0],
              symbolSize: 0.8,
            },
            {
              color: Ww,
              dashArrayX: [1, 0],
              dashArrayY: [4, 3],
              rotation: -Math.PI / 4,
            },
            {
              color: Ww,
              dashArrayX: [
                [6, 6],
                [0, 6, 6, 0],
              ],
              dashArrayY: [6, 0],
            },
            {
              color: Ww,
              dashArrayX: [
                [1, 0],
                [1, 6],
              ],
              dashArrayY: [1, 0, 6, 0],
              rotation: Math.PI / 4,
            },
            {
              color: Ww,
              symbol: "triangle",
              dashArrayX: [
                [9, 9],
                [0, 9, 9, 0],
              ],
              dashArrayY: [7, 2],
              symbolSize: 0.75,
            },
          ],
        },
      },
      textStyle: {
        fontFamily: Fw.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "normal",
      },
      blendMode: null,
      stateAnimation: { duration: 300, easing: "cubicOut" },
      animation: "auto",
      animationDuration: 1e3,
      animationDurationUpdate: 500,
      animationEasing: "cubicInOut",
      animationEasingUpdate: "cubicInOut",
      animationThreshold: 2e3,
      progressiveThreshold: 3e3,
      progressive: 400,
      hoverLayerThreshold: 3e3,
      useUTC: !1,
    },
    Uw = q([
      "tooltip",
      "label",
      "itemName",
      "itemId",
      "itemGroupId",
      "seriesName",
    ]),
    Xw = "original",
    qw = "arrayRows",
    Yw = "objectRows",
    jw = "keyedColumns",
    Zw = "typedArray",
    Kw = "unknown",
    $w = "column",
    Qw = "row",
    Jw = { Must: 1, Might: 2, Not: 3 },
    tb = ki(),
    eb = q(),
    nb = ki(),
    rb =
      (ki(),
      (function () {
        function t() {}
        return (
          (t.prototype.getColorFromPalette = function (t, e, n) {
            var r = li(this.get("color", !0)),
              i = this.get("colorLayer", !0);
            return zl(this, nb, r, i, t, e, n);
          }),
          (t.prototype.clearColorPalette = function () {
            Fl(this, nb);
          }),
          t
        );
      })()),
    ib = "\x00_ec_inner",
    ob = 1,
    ab = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.prototype.init = function (t, e, n, r, i, o) {
          (r = r || {}),
            (this.option = null),
            (this._theme = new uw(r)),
            (this._locale = new uw(i)),
            (this._optionManager = o);
        }),
        (n.prototype.setOption = function (t, e, n) {
          var r = Ul(e);
          this._optionManager.setOption(t, n, r), this._resetOption(null, r);
        }),
        (n.prototype.resetOption = function (t, e) {
          return this._resetOption(t, Ul(e));
        }),
        (n.prototype._resetOption = function (t, e) {
          var n = !1,
            r = this._optionManager;
          if (!t || "recreate" === t) {
            var i = r.mountOption("recreate" === t);
            this.option && "recreate" !== t
              ? (this.restoreData(), this._mergeOption(i, e))
              : Hw(this, i),
              (n = !0);
          }
          if (
            (("timeline" === t || "media" === t) && this.restoreData(),
            !t || "recreate" === t || "timeline" === t)
          ) {
            var o = r.getTimelineOption(this);
            o && ((n = !0), this._mergeOption(o, e));
          }
          if (!t || "recreate" === t || "media" === t) {
            var a = r.getMediaOption(this);
            a.length &&
              v(
                a,
                function (t) {
                  (n = !0), this._mergeOption(t, e);
                },
                this
              );
          }
          return n;
        }),
        (n.prototype.mergeOption = function (t) {
          this._mergeOption(t, null);
        }),
        (n.prototype._mergeOption = function (t, e) {
          function n(e) {
            var n = Bl(this, e, li(t[e])),
              a = i.get(e),
              s = a
                ? c && c.get(e)
                  ? "replaceMerge"
                  : "normalMerge"
                : "replaceAll",
              l = pi(a, n, s);
            Mi(l, e, zw), (r[e] = null), i.set(e, null), o.set(e, 0);
            var u,
              p = [],
              f = [],
              d = 0;
            v(
              l,
              function (t, n) {
                var r = t.existing,
                  i = t.newOption;
                if (i) {
                  var o = "series" === e,
                    a = zw.getClass(e, t.keyInfo.subType, !o);
                  if (!a) return;
                  if ("tooltip" === e) {
                    if (u) return;
                    u = !0;
                  }
                  if (r && r.constructor === a)
                    (r.name = t.keyInfo.name),
                      r.mergeOption(i, this),
                      r.optionUpdated(i, !1);
                  else {
                    var s = h({ componentIndex: n }, t.keyInfo);
                    (r = new a(i, this, this, s)),
                      h(r, s),
                      t.brandNew && (r.__requireNewView = !0),
                      r.init(i, this, this),
                      r.optionUpdated(null, !0);
                  }
                } else r && (r.mergeOption({}, this), r.optionUpdated({}, !1));
                r
                  ? (p.push(r.option), f.push(r), d++)
                  : (p.push(void 0), f.push(void 0));
              },
              this
            ),
              (r[e] = p),
              i.set(e, f),
              o.set(e, d),
              "series" === e && Vw(this);
          }
          var r = this.option,
            i = this._componentsMap,
            o = this._componentsCount,
            a = [],
            u = q(),
            c = e && e.replaceMergeMainTypeMap;
          Al(this),
            v(t, function (t, e) {
              null != t &&
                (zw.hasClass(e)
                  ? e && (a.push(e), u.set(e, !0))
                  : (r[e] = null == r[e] ? s(t) : l(r[e], t, !0)));
            }),
            c &&
              c.each(function (t, e) {
                zw.hasClass(e) && !u.get(e) && (a.push(e), u.set(e, !0));
              }),
            zw.topologicalTravel(a, zw.getAllClassMainTypes(), n, this),
            this._seriesIndices || Vw(this);
        }),
        (n.prototype.getOption = function () {
          var t = s(this.option);
          return (
            v(t, function (e, n) {
              if (zw.hasClass(n)) {
                for (
                  var r = li(e), i = r.length, o = !1, a = i - 1;
                  a >= 0;
                  a--
                )
                  r[a] && !Si(r[a]) ? (o = !0) : ((r[a] = null), !o && i--);
                (r.length = i), (t[n] = r);
              }
            }),
            delete t[ib],
            t
          );
        }),
        (n.prototype.getTheme = function () {
          return this._theme;
        }),
        (n.prototype.getLocaleModel = function () {
          return this._locale;
        }),
        (n.prototype.setUpdatePayload = function (t) {
          this._payload = t;
        }),
        (n.prototype.getUpdatePayload = function () {
          return this._payload;
        }),
        (n.prototype.getComponent = function (t, e) {
          var n = this._componentsMap.get(t);
          if (n) {
            var r = n[e || 0];
            if (r) return r;
            if (null == e)
              for (var i = 0; i < n.length; i++) if (n[i]) return n[i];
          }
        }),
        (n.prototype.queryComponents = function (t) {
          var e = t.mainType;
          if (!e) return [];
          var n = t.index,
            r = t.id,
            i = t.name,
            o = this._componentsMap.get(e);
          if (!o || !o.length) return [];
          var a;
          return (
            null != n
              ? ((a = []),
                v(li(n), function (t) {
                  o[t] && a.push(o[t]);
                }))
              : (a =
                  null != r
                    ? Wl("id", r, o)
                    : null != i
                    ? Wl("name", i, o)
                    : _(o, function (t) {
                        return !!t;
                      })),
            Gl(a, t)
          );
        }),
        (n.prototype.findComponents = function (t) {
          function e(t) {
            var e = i + "Index",
              n = i + "Id",
              r = i + "Name";
            return !t || (null == t[e] && null == t[n] && null == t[r])
              ? null
              : { mainType: i, index: t[e], id: t[n], name: t[r] };
          }
          function n(e) {
            return t.filter ? _(e, t.filter) : e;
          }
          var r = t.query,
            i = t.mainType,
            o = e(r),
            a = o
              ? this.queryComponents(o)
              : _(this._componentsMap.get(i), function (t) {
                  return !!t;
                });
          return n(Gl(a, t));
        }),
        (n.prototype.eachComponent = function (t, e, n) {
          var r = this._componentsMap;
          if (T(t)) {
            var i = e,
              o = t;
            r.each(function (t, e) {
              for (var n = 0; t && n < t.length; n++) {
                var r = t[n];
                r && o.call(i, e, r, r.componentIndex);
              }
            });
          } else
            for (
              var a = C(t) ? r.get(t) : I(t) ? this.findComponents(t) : null,
                s = 0;
              a && s < a.length;
              s++
            ) {
              var l = a[s];
              l && e.call(n, l, l.componentIndex);
            }
        }),
        (n.prototype.getSeriesByName = function (t) {
          var e = wi(t, null);
          return _(this._componentsMap.get("series"), function (t) {
            return !!t && null != e && t.name === e;
          });
        }),
        (n.prototype.getSeriesByIndex = function (t) {
          return this._componentsMap.get("series")[t];
        }),
        (n.prototype.getSeriesByType = function (t) {
          return _(this._componentsMap.get("series"), function (e) {
            return !!e && e.subType === t;
          });
        }),
        (n.prototype.getSeries = function () {
          return _(this._componentsMap.get("series"), function (t) {
            return !!t;
          });
        }),
        (n.prototype.getSeriesCount = function () {
          return this._componentsCount.get("series");
        }),
        (n.prototype.eachSeries = function (t, e) {
          v(
            this._seriesIndices,
            function (n) {
              var r = this._componentsMap.get("series")[n];
              t.call(e, r, n);
            },
            this
          );
        }),
        (n.prototype.eachRawSeries = function (t, e) {
          v(this._componentsMap.get("series"), function (n) {
            n && t.call(e, n, n.componentIndex);
          });
        }),
        (n.prototype.eachSeriesByType = function (t, e, n) {
          v(
            this._seriesIndices,
            function (r) {
              var i = this._componentsMap.get("series")[r];
              i.subType === t && e.call(n, i, r);
            },
            this
          );
        }),
        (n.prototype.eachRawSeriesByType = function (t, e, n) {
          return v(this.getSeriesByType(t), e, n);
        }),
        (n.prototype.isSeriesFiltered = function (t) {
          return null == this._seriesIndicesMap.get(t.componentIndex);
        }),
        (n.prototype.getCurrentSeriesIndices = function () {
          return (this._seriesIndices || []).slice();
        }),
        (n.prototype.filterSeries = function (t, e) {
          var n = [];
          v(
            this._seriesIndices,
            function (r) {
              var i = this._componentsMap.get("series")[r];
              t.call(e, i, r) && n.push(r);
            },
            this
          ),
            (this._seriesIndices = n),
            (this._seriesIndicesMap = q(n));
        }),
        (n.prototype.restoreData = function (t) {
          Vw(this);
          var e = this._componentsMap,
            n = [];
          e.each(function (t, e) {
            zw.hasClass(e) && n.push(e);
          }),
            zw.topologicalTravel(n, zw.getAllClassMainTypes(), function (n) {
              v(e.get(n), function (e) {
                !e || ("series" === n && Vl(e, t)) || e.restoreData();
              });
            });
        }),
        (n.internalField = (function () {
          (Vw = function (t) {
            var e = (t._seriesIndices = []);
            v(t._componentsMap.get("series"), function (t) {
              t && e.push(t.componentIndex);
            }),
              (t._seriesIndicesMap = q(e));
          }),
            (Hw = function (t, e) {
              (t.option = {}),
                (t.option[ib] = ob),
                (t._componentsMap = q({ series: [] })),
                (t._componentsCount = q());
              var n = e.aria;
              I(n) && null == n.enabled && (n.enabled = !0),
                Hl(e, t._theme.option),
                l(e, Gw, !1),
                t._mergeOption(e, null);
            });
        })()),
        n
      );
    })(uw);
  d(ab, rb);
  var sb,
    lb,
    ub,
    hb,
    cb,
    pb,
    fb = [
      "getDom",
      "getZr",
      "getWidth",
      "getHeight",
      "getDevicePixelRatio",
      "dispatchAction",
      "isSSR",
      "isDisposed",
      "on",
      "off",
      "getDataURL",
      "getConnectedDataURL",
      "getOption",
      "getId",
      "updateLabelLayout",
    ],
    db = (function () {
      function t(t) {
        v(
          fb,
          function (e) {
            this[e] = Ng(t[e], t);
          },
          this
        );
      }
      return t;
    })(),
    gb = {},
    vb = (function () {
      function t() {
        this._coordinateSystems = [];
      }
      return (
        (t.prototype.create = function (t, e) {
          var n = [];
          v(gb, function (r) {
            var i = r.create(t, e);
            n = n.concat(i || []);
          }),
            (this._coordinateSystems = n);
        }),
        (t.prototype.update = function (t, e) {
          v(this._coordinateSystems, function (n) {
            n.update && n.update(t, e);
          });
        }),
        (t.prototype.getCoordinateSystems = function () {
          return this._coordinateSystems.slice();
        }),
        (t.register = function (t, e) {
          gb[t] = e;
        }),
        (t.get = function (t) {
          return gb[t];
        }),
        t
      );
    })(),
    yb = /^(min|max)?(.+)$/,
    mb = (function () {
      function t(t) {
        (this._timelineOptions = []),
          (this._mediaList = []),
          (this._currentMediaIndices = []),
          (this._api = t);
      }
      return (
        (t.prototype.setOption = function (t, e) {
          t &&
            (v(li(t.series), function (t) {
              t && t.data && L(t.data) && U(t.data);
            }),
            v(li(t.dataset), function (t) {
              t && t.source && L(t.source) && U(t.source);
            })),
            (t = s(t));
          var n = this._optionBackup,
            r = Xl(t, e, !n);
          (this._newBaseOption = r.baseOption),
            n
              ? (r.timelineOptions.length &&
                  (n.timelineOptions = r.timelineOptions),
                r.mediaList.length && (n.mediaList = r.mediaList),
                r.mediaDefault && (n.mediaDefault = r.mediaDefault))
              : (this._optionBackup = r);
        }),
        (t.prototype.mountOption = function (t) {
          var e = this._optionBackup;
          return (
            (this._timelineOptions = e.timelineOptions),
            (this._mediaList = e.mediaList),
            (this._mediaDefault = e.mediaDefault),
            (this._currentMediaIndices = []),
            s(t ? e.baseOption : this._newBaseOption)
          );
        }),
        (t.prototype.getTimelineOption = function (t) {
          var e,
            n = this._timelineOptions;
          if (n.length) {
            var r = t.getComponent("timeline");
            r && (e = s(n[r.getCurrentIndex()]));
          }
          return e;
        }),
        (t.prototype.getMediaOption = function () {
          var t = this._api.getWidth(),
            e = this._api.getHeight(),
            n = this._mediaList,
            r = this._mediaDefault,
            i = [],
            o = [];
          if (!n.length && !r) return o;
          for (var a = 0, l = n.length; l > a; a++)
            ql(n[a].query, t, e) && i.push(a);
          return (
            !i.length && r && (i = [-1]),
            i.length &&
              !jl(i, this._currentMediaIndices) &&
              (o = y(i, function (t) {
                return s(-1 === t ? r.option : n[t].option);
              })),
            (this._currentMediaIndices = i),
            o
          );
        }),
        t
      );
    })(),
    _b = v,
    xb = I,
    wb = [
      "areaStyle",
      "lineStyle",
      "nodeStyle",
      "linkStyle",
      "chordStyle",
      "label",
      "labelLine",
    ],
    bb = [
      ["x", "left"],
      ["y", "top"],
      ["x2", "right"],
      ["y2", "bottom"],
    ],
    Sb = [
      "grid",
      "geo",
      "parallel",
      "legend",
      "toolbox",
      "title",
      "visualMap",
      "dataZoom",
      "timeline",
    ],
    Mb = [
      ["borderRadius", "barBorderRadius"],
      ["borderColor", "barBorderColor"],
      ["borderWidth", "barBorderWidth"],
    ],
    Tb = (function () {
      function t(t) {
        (this.data = t.data || (t.sourceFormat === jw ? {} : [])),
          (this.sourceFormat = t.sourceFormat || Kw),
          (this.seriesLayoutBy = t.seriesLayoutBy || $w),
          (this.startIndex = t.startIndex || 0),
          (this.dimensionsDetectedCount = t.dimensionsDetectedCount),
          (this.metaRawOption = t.metaRawOption);
        var e = (this.dimensionsDefine = t.dimensionsDefine);
        if (e)
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            null == r.type && Rl(this, n) === Jw.Must && (r.type = "ordinal");
          }
      }
      return t;
    })(),
    Cb = (function () {
      function t(t, e) {
        var n = gu(t) ? t : yu(t);
        this._source = n;
        var r = (this._data = n.data);
        n.sourceFormat === Zw &&
          ((this._offset = 0), (this._dimSize = e), (this._data = r)),
          cb(this, r, n);
      }
      return (
        (t.prototype.getSource = function () {
          return this._source;
        }),
        (t.prototype.count = function () {
          return 0;
        }),
        (t.prototype.getItem = function () {}),
        (t.prototype.appendData = function () {}),
        (t.prototype.clean = function () {}),
        (t.protoInitialize = (function () {
          var e = t.prototype;
          (e.pure = !1), (e.persistent = !0);
        })()),
        (t.internalField = (function () {
          function t(t) {
            for (var e = 0; e < t.length; e++) this._data.push(t[e]);
          }
          var e;
          cb = function (t, e, o) {
            var a = o.sourceFormat,
              s = o.seriesLayoutBy,
              l = o.startIndex,
              u = o.dimensionsDefine,
              c = hb[Du(a, s)];
            if ((h(t, c), a === Zw))
              (t.getItem = n), (t.count = i), (t.fillStorage = r);
            else {
              var p = Tu(a, s);
              t.getItem = Ng(p, null, e, l, u);
              var f = Cu(a, s);
              t.count = Ng(f, null, e, l, u);
            }
          };
          var n = function (t, e) {
              (t -= this._offset), (e = e || []);
              for (
                var n = this._data, r = this._dimSize, i = r * t, o = 0;
                r > o;
                o++
              )
                e[o] = n[i + o];
              return e;
            },
            r = function (t, e, n, r) {
              for (var i = this._data, o = this._dimSize, a = 0; o > a; a++) {
                for (
                  var s = r[a],
                    l = null == s[0] ? 1 / 0 : s[0],
                    u = null == s[1] ? -1 / 0 : s[1],
                    h = e - t,
                    c = n[a],
                    p = 0;
                  h > p;
                  p++
                ) {
                  var f = i[p * o + a];
                  (c[t + p] = f), l > f && (l = f), f > u && (u = f);
                }
                (s[0] = l), (s[1] = u);
              }
            },
            i = function () {
              return this._data ? this._data.length / this._dimSize : 0;
            };
          (e = {}),
            (e[qw + "_" + $w] = { pure: !0, appendData: t }),
            (e[qw + "_" + Qw] = {
              pure: !0,
              appendData: function () {
                throw new Error(
                  'Do not support appendData when set seriesLayoutBy: "row".'
                );
              },
            }),
            (e[Yw] = { pure: !0, appendData: t }),
            (e[jw] = {
              pure: !0,
              appendData: function (t) {
                var e = this._data;
                v(t, function (t, n) {
                  for (
                    var r = e[n] || (e[n] = []), i = 0;
                    i < (t || []).length;
                    i++
                  )
                    r.push(t[i]);
                });
              },
            }),
            (e[Xw] = { appendData: t }),
            (e[Zw] = {
              persistent: !1,
              pure: !0,
              appendData: function (t) {
                this._data = t;
              },
              clean: function () {
                (this._offset += this.count()), (this._data = null);
              },
            }),
            (hb = e);
        })()),
        t
      );
    })(),
    kb = function (t, e, n, r) {
      return t[r];
    },
    Db =
      ((sb = {}),
      (sb[qw + "_" + $w] = function (t, e, n, r) {
        return t[r + e];
      }),
      (sb[qw + "_" + Qw] = function (t, e, n, r, i) {
        r += e;
        for (var o = i || [], a = t, s = 0; s < a.length; s++) {
          var l = a[s];
          o[s] = l ? l[r] : null;
        }
        return o;
      }),
      (sb[Yw] = kb),
      (sb[jw] = function (t, e, n, r, i) {
        for (var o = i || [], a = 0; a < n.length; a++) {
          var s = n[a].name,
            l = t[s];
          o[a] = l ? l[r] : null;
        }
        return o;
      }),
      (sb[Xw] = kb),
      sb),
    Ib = function (t) {
      return t.length;
    },
    Ab =
      ((lb = {}),
      (lb[qw + "_" + $w] = function (t, e) {
        return Math.max(0, t.length - e);
      }),
      (lb[qw + "_" + Qw] = function (t, e) {
        var n = t[0];
        return n ? Math.max(0, n.length - e) : 0;
      }),
      (lb[Yw] = Ib),
      (lb[jw] = function (t, e, n) {
        var r = n[0].name,
          i = t[r];
        return i ? i.length : 0;
      }),
      (lb[Xw] = Ib),
      lb),
    Lb = function (t, e) {
      return t[e];
    },
    Pb =
      ((ub = {}),
      (ub[qw] = Lb),
      (ub[Yw] = function (t, e, n) {
        return t[n];
      }),
      (ub[jw] = Lb),
      (ub[Xw] = function (t, e) {
        var n = hi(t);
        return n instanceof Array ? n[e] : n;
      }),
      (ub[Zw] = Lb),
      ub),
    Ob = /\{@(.+?)\}/g,
    Rb = (function () {
      function t() {}
      return (
        (t.prototype.getDataParams = function (t, e) {
          var n = this.getData(e),
            r = this.getRawValue(t, e),
            i = n.getRawIndex(t),
            o = n.getName(t),
            a = n.getRawDataItem(t),
            s = n.getItemVisual(t, "style"),
            l = s && s[n.getItemVisual(t, "drawType") || "fill"],
            u = s && s.stroke,
            h = this.mainType,
            c = "series" === h,
            p = n.userOutput && n.userOutput.get();
          return {
            componentType: h,
            componentSubType: this.subType,
            componentIndex: this.componentIndex,
            seriesType: c ? this.subType : null,
            seriesIndex: this.seriesIndex,
            seriesId: c ? this.id : null,
            seriesName: c ? this.name : null,
            name: o,
            dataIndex: i,
            data: a,
            dataType: e,
            value: r,
            color: l,
            borderColor: u,
            dimensionNames: p ? p.fullDimensions : null,
            encode: p ? p.encode : null,
            $vars: ["seriesName", "name", "value"],
          };
        }),
        (t.prototype.getFormattedLabel = function (t, e, n, r, i, o) {
          e = e || "normal";
          var a = this.getData(n),
            s = this.getDataParams(t, n);
          if (
            (o && (s.value = o.interpolatedValue),
            null != r && M(s.value) && (s.value = s.value[r]),
            !i)
          ) {
            var l = a.getItemModel(t);
            i = l.get(
              "normal" === e
                ? ["label", "formatter"]
                : [e, "label", "formatter"]
            );
          }
          if (T(i)) return (s.status = e), (s.dimensionIndex = r), i(s);
          if (C(i)) {
            var u = ml(i, s);
            return u.replace(Ob, function (e, n) {
              var r = n.length,
                i = n;
              "[" === i.charAt(0) &&
                "]" === i.charAt(r - 1) &&
                (i = +i.slice(1, r - 1));
              var s = Iu(a, t, i);
              if (o && M(o.interpolatedValue)) {
                var l = a.getDimensionIndex(i);
                l >= 0 && (s = o.interpolatedValue[l]);
              }
              return null != s ? s + "" : "";
            });
          }
        }),
        (t.prototype.getRawValue = function (t, e) {
          return Iu(this.getData(e), t);
        }),
        (t.prototype.formatTooltip = function () {}),
        t
      );
    })(),
    Eb = (function () {
      function t(t) {
        (t = t || {}),
          (this._reset = t.reset),
          (this._plan = t.plan),
          (this._count = t.count),
          (this._onDirty = t.onDirty),
          (this._dirty = !0);
      }
      return (
        (t.prototype.perform = function (t) {
          function e(t) {
            return !(t >= 1) && (t = 1), t;
          }
          var n = this._upstream,
            r = t && t.skip;
          if (this._dirty && n) {
            var i = this.context;
            i.data = i.outputData = n.context.outputData;
          }
          this.__pipeline && (this.__pipeline.currentTask = this);
          var o;
          this._plan && !r && (o = this._plan(this.context));
          var a = e(this._modBy),
            s = this._modDataCount || 0,
            l = e(t && t.modBy),
            u = (t && t.modDataCount) || 0;
          (a !== l || s !== u) && (o = "reset");
          var h;
          (this._dirty || "reset" === o) &&
            ((this._dirty = !1), (h = this._doReset(r))),
            (this._modBy = l),
            (this._modDataCount = u);
          var c = t && t.step;
          if (
            ((this._dueEnd = n
              ? n._outputDueEnd
              : this._count
              ? this._count(this.context)
              : 1 / 0),
            this._progress)
          ) {
            var p = this._dueIndex,
              f = Math.min(
                null != c ? this._dueIndex + c : 1 / 0,
                this._dueEnd
              );
            if (!r && (h || f > p)) {
              var d = this._progress;
              if (M(d))
                for (var g = 0; g < d.length; g++)
                  this._doProgress(d[g], p, f, l, u);
              else this._doProgress(d, p, f, l, u);
            }
            this._dueIndex = f;
            var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
            this._outputDueEnd = v;
          } else
            this._dueIndex = this._outputDueEnd =
              null != this._settedOutputEnd
                ? this._settedOutputEnd
                : this._dueEnd;
          return this.unfinished();
        }),
        (t.prototype.dirty = function () {
          (this._dirty = !0), this._onDirty && this._onDirty(this.context);
        }),
        (t.prototype._doProgress = function (t, e, n, r, i) {
          Bb.reset(e, n, r, i),
            (this._callingProgress = t),
            this._callingProgress(
              { start: e, end: n, count: n - e, next: Bb.next },
              this.context
            );
        }),
        (t.prototype._doReset = function (t) {
          (this._dueIndex = this._outputDueEnd = this._dueEnd = 0),
            (this._settedOutputEnd = null);
          var e, n;
          !t &&
            this._reset &&
            ((e = this._reset(this.context)),
            e && e.progress && ((n = e.forceFirstProgress), (e = e.progress)),
            M(e) && !e.length && (e = null)),
            (this._progress = e),
            (this._modBy = this._modDataCount = null);
          var r = this._downstream;
          return r && r.dirty(), n;
        }),
        (t.prototype.unfinished = function () {
          return this._progress && this._dueIndex < this._dueEnd;
        }),
        (t.prototype.pipe = function (t) {
          (this._downstream !== t || this._dirty) &&
            ((this._downstream = t), (t._upstream = this), t.dirty());
        }),
        (t.prototype.dispose = function () {
          this._disposed ||
            (this._upstream && (this._upstream._downstream = null),
            this._downstream && (this._downstream._upstream = null),
            (this._dirty = !1),
            (this._disposed = !0));
        }),
        (t.prototype.getUpstream = function () {
          return this._upstream;
        }),
        (t.prototype.getDownstream = function () {
          return this._downstream;
        }),
        (t.prototype.setOutputEnd = function (t) {
          this._outputDueEnd = this._settedOutputEnd = t;
        }),
        t
      );
    })(),
    Bb = (function () {
      function t() {
        return n > r ? r++ : null;
      }
      function e() {
        var t = (r % a) * i + Math.ceil(r / a),
          e = r >= n ? null : o > t ? t : r;
        return r++, e;
      }
      var n,
        r,
        i,
        o,
        a,
        s = {
          reset: function (l, u, h, c) {
            (r = l),
              (n = u),
              (i = h),
              (o = c),
              (a = Math.ceil(o / i)),
              (s.next = i > 1 && o > 0 ? e : t);
          },
        };
      return s;
    })(),
    Nb =
      (q({
        number: function (t) {
          return parseFloat(t);
        },
        time: function (t) {
          return +Zr(t);
        },
        trim: function (t) {
          return C(t) ? G(t) : t;
        },
      }),
      {
        lt: function (t, e) {
          return e > t;
        },
        lte: function (t, e) {
          return e >= t;
        },
        gt: function (t, e) {
          return t > e;
        },
        gte: function (t, e) {
          return t >= e;
        },
      }),
    zb =
      ((function () {
        function t(t, e) {
          if (!D(e)) {
            var n = "";
            ai(n);
          }
          (this._opFn = Nb[t]), (this._rvalFloat = ei(e));
        }
        return (
          (t.prototype.evaluate = function (t) {
            return D(t)
              ? this._opFn(t, this._rvalFloat)
              : this._opFn(ei(t), this._rvalFloat);
          }),
          t
        );
      })(),
      (function () {
        function t(t, e) {
          var n = "desc" === t;
          (this._resultLT = n ? 1 : -1),
            null == e && (e = n ? "min" : "max"),
            (this._incomparable = "min" === e ? -1 / 0 : 1 / 0);
        }
        return (
          (t.prototype.evaluate = function (t, e) {
            var n = D(t) ? t : ei(t),
              r = D(e) ? e : ei(e),
              i = isNaN(n),
              o = isNaN(r);
            if (
              (i && (n = this._incomparable),
              o && (r = this._incomparable),
              i && o)
            ) {
              var a = C(t),
                s = C(e);
              a && (n = s ? t : 0), s && (r = a ? e : 0);
            }
            return r > n ? this._resultLT : n > r ? -this._resultLT : 0;
          }),
          t
        );
      })(),
      (function () {
        function t(t, e) {
          (this._rval = e),
            (this._isEQ = t),
            (this._rvalTypeof = typeof e),
            (this._rvalFloat = ei(e));
        }
        return (
          (t.prototype.evaluate = function (t) {
            var e = t === this._rval;
            if (!e) {
              var n = typeof t;
              n === this._rvalTypeof ||
                ("number" !== n && "number" !== this._rvalTypeof) ||
                (e = ei(t) === this._rvalFloat);
            }
            return this._isEQ ? e : !e;
          }),
          t
        );
      })(),
      (function () {
        function t() {}
        return (
          (t.prototype.getRawData = function () {
            throw new Error("not supported");
          }),
          (t.prototype.getRawDataItem = function () {
            throw new Error("not supported");
          }),
          (t.prototype.cloneRawData = function () {}),
          (t.prototype.getDimensionInfo = function () {}),
          (t.prototype.cloneAllDimensionInfo = function () {}),
          (t.prototype.count = function () {}),
          (t.prototype.retrieveValue = function () {}),
          (t.prototype.retrieveValueFromItem = function () {}),
          (t.prototype.convertValue = function (t, e) {
            return Lu(t, e);
          }),
          t
        );
      })()),
    Fb = q(),
    Vb = "undefined",
    Hb = typeof Uint32Array === Vb ? Array : Uint32Array,
    Wb = typeof Uint16Array === Vb ? Array : Uint16Array,
    Gb = typeof Int32Array === Vb ? Array : Int32Array,
    Ub = typeof Float64Array === Vb ? Array : Float64Array,
    Xb = { float: Ub, int: Gb, ordinal: Array, number: Array, time: Ub },
    qb = (function () {
      function t() {
        (this._chunks = []),
          (this._rawExtent = []),
          (this._extent = []),
          (this._count = 0),
          (this._rawCount = 0),
          (this._calcDimNameToIdx = q());
      }
      return (
        (t.prototype.initData = function (t, e, n) {
          (this._provider = t),
            (this._chunks = []),
            (this._indices = null),
            (this.getRawIndex = this._getRawIdxIdentity);
          var r = t.getSource(),
            i = (this.defaultDimValueGetter = pb[r.sourceFormat]);
          (this._dimValueGetter = n || i), (this._rawExtent = []);
          Mu(r);
          (this._dimensions = y(e, function (t) {
            return { type: t.type, property: t.property };
          })),
            this._initDataFromProvider(0, t.count());
        }),
        (t.prototype.getProvider = function () {
          return this._provider;
        }),
        (t.prototype.getSource = function () {
          return this._provider.getSource();
        }),
        (t.prototype.ensureCalculationDimension = function (t, e) {
          var n = this._calcDimNameToIdx,
            r = this._dimensions,
            i = n.get(t);
          if (null != i) {
            if (r[i].type === e) return i;
          } else i = r.length;
          return (
            (r[i] = { type: e }),
            n.set(t, i),
            (this._chunks[i] = new Xb[e || "float"](this._rawCount)),
            (this._rawExtent[i] = Wu()),
            i
          );
        }),
        (t.prototype.collectOrdinalMeta = function (t, e) {
          var n = this._chunks[t],
            r = this._dimensions[t],
            i = this._rawExtent,
            o = r.ordinalOffset || 0,
            a = n.length;
          0 === o && (i[t] = Wu());
          for (var s = i[t], l = o; a > l; l++) {
            var u = (n[l] = e.parseAndCollect(n[l]));
            (s[0] = Math.min(u, s[0])), (s[1] = Math.max(u, s[1]));
          }
          (r.ordinalMeta = e), (r.ordinalOffset = a), (r.type = "ordinal");
        }),
        (t.prototype.getOrdinalMeta = function (t) {
          var e = this._dimensions[t],
            n = e.ordinalMeta;
          return n;
        }),
        (t.prototype.getDimensionProperty = function (t) {
          var e = this._dimensions[t];
          return e && e.property;
        }),
        (t.prototype.appendData = function (t) {
          var e = this._provider,
            n = this.count();
          e.appendData(t);
          var r = e.count();
          return (
            e.persistent || (r += n),
            r > n && this._initDataFromProvider(n, r, !0),
            [n, r]
          );
        }),
        (t.prototype.appendValues = function (t, e) {
          for (
            var n = this._chunks,
              r = this._dimensions,
              i = r.length,
              o = this._rawExtent,
              a = this.count(),
              s = a + Math.max(t.length, e || 0),
              l = 0;
            i > l;
            l++
          ) {
            var u = r[l];
            Uu(n, l, u.type, s, !0);
          }
          for (var h = [], c = a; s > c; c++)
            for (var p = c - a, f = 0; i > f; f++) {
              var u = r[f],
                d = pb.arrayRows.call(this, t[p] || h, u.property, p, f);
              n[f][c] = d;
              var g = o[f];
              d < g[0] && (g[0] = d), d > g[1] && (g[1] = d);
            }
          return (this._rawCount = this._count = s), { start: a, end: s };
        }),
        (t.prototype._initDataFromProvider = function (t, e, n) {
          for (
            var r = this._provider,
              i = this._chunks,
              o = this._dimensions,
              a = o.length,
              s = this._rawExtent,
              l = y(o, function (t) {
                return t.property;
              }),
              u = 0;
            a > u;
            u++
          ) {
            var h = o[u];
            s[u] || (s[u] = Wu()), Uu(i, u, h.type, e, n);
          }
          if (r.fillStorage) r.fillStorage(t, e, i, s);
          else
            for (var c = [], p = t; e > p; p++) {
              c = r.getItem(p, c);
              for (var f = 0; a > f; f++) {
                var d = i[f],
                  g = this._dimValueGetter(c, l[f], p, f);
                d[p] = g;
                var v = s[f];
                g < v[0] && (v[0] = g), g > v[1] && (v[1] = g);
              }
            }
          !r.persistent && r.clean && r.clean(),
            (this._rawCount = this._count = e),
            (this._extent = []);
        }),
        (t.prototype.count = function () {
          return this._count;
        }),
        (t.prototype.get = function (t, e) {
          if (!(e >= 0 && e < this._count)) return 0 / 0;
          var n = this._chunks[t];
          return n ? n[this.getRawIndex(e)] : 0 / 0;
        }),
        (t.prototype.getValues = function (t, e) {
          var n = [],
            r = [];
          if (null == e) {
            (e = t), (t = []);
            for (var i = 0; i < this._dimensions.length; i++) r.push(i);
          } else r = t;
          for (var i = 0, o = r.length; o > i; i++) n.push(this.get(r[i], e));
          return n;
        }),
        (t.prototype.getByRawIndex = function (t, e) {
          if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
          var n = this._chunks[t];
          return n ? n[e] : 0 / 0;
        }),
        (t.prototype.getSum = function (t) {
          var e = this._chunks[t],
            n = 0;
          if (e)
            for (var r = 0, i = this.count(); i > r; r++) {
              var o = this.get(t, r);
              isNaN(o) || (n += o);
            }
          return n;
        }),
        (t.prototype.getMedian = function (t) {
          var e = [];
          this.each([t], function (t) {
            isNaN(t) || e.push(t);
          });
          var n = e.sort(function (t, e) {
              return t - e;
            }),
            r = this.count();
          return 0 === r
            ? 0
            : r % 2 === 1
            ? n[(r - 1) / 2]
            : (n[r / 2] + n[r / 2 - 1]) / 2;
        }),
        (t.prototype.indexOfRawIndex = function (t) {
          if (t >= this._rawCount || 0 > t) return -1;
          if (!this._indices) return t;
          var e = this._indices,
            n = e[t];
          if (null != n && n < this._count && n === t) return t;
          for (var r = 0, i = this._count - 1; i >= r; ) {
            var o = ((r + i) / 2) | 0;
            if (e[o] < t) r = o + 1;
            else {
              if (!(e[o] > t)) return o;
              i = o - 1;
            }
          }
          return -1;
        }),
        (t.prototype.indicesOfNearest = function (t, e, n) {
          var r = this._chunks,
            i = r[t],
            o = [];
          if (!i) return o;
          null == n && (n = 1 / 0);
          for (
            var a = 1 / 0, s = -1, l = 0, u = 0, h = this.count();
            h > u;
            u++
          ) {
            var c = this.getRawIndex(u),
              p = e - i[c],
              f = Math.abs(p);
            n >= f &&
              ((a > f || (f === a && p >= 0 && 0 > s)) &&
                ((a = f), (s = p), (l = 0)),
              p === s && (o[l++] = u));
          }
          return (o.length = l), o;
        }),
        (t.prototype.getIndices = function () {
          var t,
            e = this._indices;
          if (e) {
            var n = e.constructor,
              r = this._count;
            if (n === Array) {
              t = new n(r);
              for (var i = 0; r > i; i++) t[i] = e[i];
            } else t = new n(e.buffer, 0, r);
          } else {
            var n = Hu(this._rawCount);
            t = new n(this.count());
            for (var i = 0; i < t.length; i++) t[i] = i;
          }
          return t;
        }),
        (t.prototype.filter = function (t, e) {
          if (!this._count) return this;
          for (
            var n = this.clone(),
              r = n.count(),
              i = Hu(n._rawCount),
              o = new i(r),
              a = [],
              s = t.length,
              l = 0,
              u = t[0],
              h = n._chunks,
              c = 0;
            r > c;
            c++
          ) {
            var p = void 0,
              f = n.getRawIndex(c);
            if (0 === s) p = e(c);
            else if (1 === s) {
              var d = h[u][f];
              p = e(d, c);
            } else {
              for (var g = 0; s > g; g++) a[g] = h[t[g]][f];
              (a[g] = c), (p = e.apply(null, a));
            }
            p && (o[l++] = f);
          }
          return (
            r > l && (n._indices = o),
            (n._count = l),
            (n._extent = []),
            n._updateGetRawIdx(),
            n
          );
        }),
        (t.prototype.selectRange = function (t) {
          var e = this.clone(),
            n = e._count;
          if (!n) return this;
          var r = w(t),
            i = r.length;
          if (!i) return this;
          var o = e.count(),
            a = Hu(e._rawCount),
            s = new a(o),
            l = 0,
            u = r[0],
            h = t[u][0],
            c = t[u][1],
            p = e._chunks,
            f = !1;
          if (!e._indices) {
            var d = 0;
            if (1 === i) {
              for (var g = p[r[0]], v = 0; n > v; v++) {
                var y = g[v];
                ((y >= h && c >= y) || isNaN(y)) && (s[l++] = d), d++;
              }
              f = !0;
            } else if (2 === i) {
              for (
                var g = p[r[0]],
                  m = p[r[1]],
                  _ = t[r[1]][0],
                  x = t[r[1]][1],
                  v = 0;
                n > v;
                v++
              ) {
                var y = g[v],
                  b = m[v];
                ((y >= h && c >= y) || isNaN(y)) &&
                  ((b >= _ && x >= b) || isNaN(b)) &&
                  (s[l++] = d),
                  d++;
              }
              f = !0;
            }
          }
          if (!f)
            if (1 === i)
              for (var v = 0; o > v; v++) {
                var S = e.getRawIndex(v),
                  y = p[r[0]][S];
                ((y >= h && c >= y) || isNaN(y)) && (s[l++] = S);
              }
            else
              for (var v = 0; o > v; v++) {
                for (var M = !0, S = e.getRawIndex(v), T = 0; i > T; T++) {
                  var C = r[T],
                    y = p[C][S];
                  (y < t[C][0] || y > t[C][1]) && (M = !1);
                }
                M && (s[l++] = e.getRawIndex(v));
              }
          return (
            o > l && (e._indices = s),
            (e._count = l),
            (e._extent = []),
            e._updateGetRawIdx(),
            e
          );
        }),
        (t.prototype.map = function (t, e) {
          var n = this.clone(t);
          return this._updateDims(n, t, e), n;
        }),
        (t.prototype.modify = function (t, e) {
          this._updateDims(this, t, e);
        }),
        (t.prototype._updateDims = function (t, e, n) {
          for (
            var r = t._chunks,
              i = [],
              o = e.length,
              a = t.count(),
              s = [],
              l = t._rawExtent,
              u = 0;
            u < e.length;
            u++
          )
            l[e[u]] = Wu();
          for (var h = 0; a > h; h++) {
            for (var c = t.getRawIndex(h), p = 0; o > p; p++) s[p] = r[e[p]][c];
            s[o] = h;
            var f = n && n.apply(null, s);
            if (null != f) {
              "object" != typeof f && ((i[0] = f), (f = i));
              for (var u = 0; u < f.length; u++) {
                var d = e[u],
                  g = f[u],
                  v = l[d],
                  y = r[d];
                y && (y[c] = g), g < v[0] && (v[0] = g), g > v[1] && (v[1] = g);
              }
            }
          }
        }),
        (t.prototype.lttbDownSample = function (t, e) {
          var n,
            r,
            i,
            o = this.clone([t], !0),
            a = o._chunks,
            s = a[t],
            l = this.count(),
            u = 0,
            h = Math.floor(1 / e),
            c = this.getRawIndex(0),
            p = new (Hu(this._rawCount))(Math.ceil(l / h) + 2);
          p[u++] = c;
          for (var f = 1; l - 1 > f; f += h) {
            for (
              var d = Math.min(f + h, l - 1),
                g = Math.min(f + 2 * h, l),
                v = (g + d) / 2,
                y = 0,
                m = d;
              g > m;
              m++
            ) {
              var _ = this.getRawIndex(m),
                x = s[_];
              isNaN(x) || (y += x);
            }
            y /= g - d;
            var w = f,
              b = Math.min(f + h, l),
              S = f - 1,
              M = s[c];
            (n = -1), (i = w);
            for (var m = w; b > m; m++) {
              var _ = this.getRawIndex(m),
                x = s[_];
              isNaN(x) ||
                ((r = Math.abs((S - v) * (x - M) - (S - m) * (y - M))),
                r > n && ((n = r), (i = _)));
            }
            (p[u++] = i), (c = i);
          }
          return (
            (p[u++] = this.getRawIndex(l - 1)),
            (o._count = u),
            (o._indices = p),
            (o.getRawIndex = this._getRawIdx),
            o
          );
        }),
        (t.prototype.downSample = function (t, e, n, r) {
          for (
            var i = this.clone([t], !0),
              o = i._chunks,
              a = [],
              s = Math.floor(1 / e),
              l = o[t],
              u = this.count(),
              h = (i._rawExtent[t] = Wu()),
              c = new (Hu(this._rawCount))(Math.ceil(u / s)),
              p = 0,
              f = 0;
            u > f;
            f += s
          ) {
            s > u - f && ((s = u - f), (a.length = s));
            for (var d = 0; s > d; d++) {
              var g = this.getRawIndex(f + d);
              a[d] = l[g];
            }
            var v = n(a),
              y = this.getRawIndex(Math.min(f + r(a, v) || 0, u - 1));
            (l[y] = v),
              v < h[0] && (h[0] = v),
              v > h[1] && (h[1] = v),
              (c[p++] = y);
          }
          return (i._count = p), (i._indices = c), i._updateGetRawIdx(), i;
        }),
        (t.prototype.each = function (t, e) {
          if (this._count)
            for (
              var n = t.length, r = this._chunks, i = 0, o = this.count();
              o > i;
              i++
            ) {
              var a = this.getRawIndex(i);
              switch (n) {
                case 0:
                  e(i);
                  break;
                case 1:
                  e(r[t[0]][a], i);
                  break;
                case 2:
                  e(r[t[0]][a], r[t[1]][a], i);
                  break;
                default:
                  for (var s = 0, l = []; n > s; s++) l[s] = r[t[s]][a];
                  (l[s] = i), e.apply(null, l);
              }
            }
        }),
        (t.prototype.getDataExtent = function (t) {
          var e = this._chunks[t],
            n = Wu();
          if (!e) return n;
          var r,
            i = this.count(),
            o = !this._indices;
          if (o) return this._rawExtent[t].slice();
          if ((r = this._extent[t])) return r.slice();
          r = n;
          for (var a = r[0], s = r[1], l = 0; i > l; l++) {
            var u = this.getRawIndex(l),
              h = e[u];
            a > h && (a = h), h > s && (s = h);
          }
          return (r = [a, s]), (this._extent[t] = r), r;
        }),
        (t.prototype.getRawDataItem = function (t) {
          var e = this.getRawIndex(t);
          if (this._provider.persistent) return this._provider.getItem(e);
          for (var n = [], r = this._chunks, i = 0; i < r.length; i++)
            n.push(r[i][e]);
          return n;
        }),
        (t.prototype.clone = function (e, n) {
          var r = new t(),
            i = this._chunks,
            o =
              e &&
              m(
                e,
                function (t, e) {
                  return (t[e] = !0), t;
                },
                {}
              );
          if (o)
            for (var a = 0; a < i.length; a++)
              r._chunks[a] = o[a] ? Gu(i[a]) : i[a];
          else r._chunks = i;
          return (
            this._copyCommonProps(r),
            n || (r._indices = this._cloneIndices()),
            r._updateGetRawIdx(),
            r
          );
        }),
        (t.prototype._copyCommonProps = function (t) {
          (t._count = this._count),
            (t._rawCount = this._rawCount),
            (t._provider = this._provider),
            (t._dimensions = this._dimensions),
            (t._extent = s(this._extent)),
            (t._rawExtent = s(this._rawExtent));
        }),
        (t.prototype._cloneIndices = function () {
          if (this._indices) {
            var t = this._indices.constructor,
              e = void 0;
            if (t === Array) {
              var n = this._indices.length;
              e = new t(n);
              for (var r = 0; n > r; r++) e[r] = this._indices[r];
            } else e = new t(this._indices);
            return e;
          }
          return null;
        }),
        (t.prototype._getRawIdxIdentity = function (t) {
          return t;
        }),
        (t.prototype._getRawIdx = function (t) {
          return t < this._count && t >= 0 ? this._indices[t] : -1;
        }),
        (t.prototype._updateGetRawIdx = function () {
          this.getRawIndex = this._indices
            ? this._getRawIdx
            : this._getRawIdxIdentity;
        }),
        (t.internalField = (function () {
          function t(t, e, n, r) {
            return Lu(t[r], this._dimensions[r]);
          }
          pb = {
            arrayRows: t,
            objectRows: function (t, e, n, r) {
              return Lu(t[e], this._dimensions[r]);
            },
            keyedColumns: t,
            original: function (t, e, n, r) {
              var i = t && (null == t.value ? t : t.value);
              return Lu(i instanceof Array ? i[r] : i, this._dimensions[r]);
            },
            typedArray: function (t, e, n, r) {
              return t[r];
            },
          };
        })()),
        t
      );
    })(),
    Yb = (function () {
      function t(t) {
        (this._sourceList = []),
          (this._storeList = []),
          (this._upstreamSignList = []),
          (this._versionSignBase = 0),
          (this._dirty = !0),
          (this._sourceHost = t);
      }
      return (
        (t.prototype.dirty = function () {
          this._setLocalSource([], []),
            (this._storeList = []),
            (this._dirty = !0);
        }),
        (t.prototype._setLocalSource = function (t, e) {
          (this._sourceList = t),
            (this._upstreamSignList = e),
            this._versionSignBase++,
            this._versionSignBase > 9e10 && (this._versionSignBase = 0);
        }),
        (t.prototype._getVersionSign = function () {
          return this._sourceHost.uid + "_" + this._versionSignBase;
        }),
        (t.prototype.prepareSource = function () {
          this._isDirty() && (this._createSource(), (this._dirty = !1));
        }),
        (t.prototype._createSource = function () {
          this._setLocalSource([], []);
          var t,
            e,
            n = this._sourceHost,
            r = this._getUpstreamSourceManagers(),
            i = !!r.length;
          if (qu(n)) {
            var o = n,
              a = void 0,
              s = void 0,
              l = void 0;
            if (i) {
              var u = r[0];
              u.prepareSource(),
                (l = u.getSource()),
                (a = l.data),
                (s = l.sourceFormat),
                (e = [u._getVersionSign()]);
            } else (a = o.get("data", !0)), (s = L(a) ? Zw : Xw), (e = []);
            var h = this._getSourceMetaRawOption() || {},
              c = (l && l.metaRawOption) || {},
              p = z(h.seriesLayoutBy, c.seriesLayoutBy) || null,
              f = z(h.sourceHeader, c.sourceHeader),
              d = z(h.dimensions, c.dimensions),
              g = p !== c.seriesLayoutBy || !!f != !!c.sourceHeader || d;
            t = g
              ? [
                  vu(
                    a,
                    { seriesLayoutBy: p, sourceHeader: f, dimensions: d },
                    s
                  ),
                ]
              : [];
          } else {
            var v = n;
            if (i) {
              var y = this._applyTransform(r);
              (t = y.sourceList), (e = y.upstreamSignList);
            } else {
              var m = v.get("source", !0);
              (t = [vu(m, this._getSourceMetaRawOption(), null)]), (e = []);
            }
          }
          this._setLocalSource(t, e);
        }),
        (t.prototype._applyTransform = function (t) {
          var e = this._sourceHost,
            n = e.get("transform", !0),
            r = e.get("fromTransformResult", !0);
          if (null != r) {
            var i = "";
            1 !== t.length && Yu(i);
          }
          var o,
            a = [],
            s = [];
          return (
            v(t, function (t) {
              t.prepareSource();
              var e = t.getSource(r || 0),
                n = "";
              null == r || e || Yu(n), a.push(e), s.push(t._getVersionSign());
            }),
            n
              ? (o = zu(n, a, { datasetIndex: e.componentIndex }))
              : null != r && (o = [mu(a[0])]),
            { sourceList: o, upstreamSignList: s }
          );
        }),
        (t.prototype._isDirty = function () {
          if (this._dirty) return !0;
          for (
            var t = this._getUpstreamSourceManagers(), e = 0;
            e < t.length;
            e++
          ) {
            var n = t[e];
            if (
              n._isDirty() ||
              this._upstreamSignList[e] !== n._getVersionSign()
            )
              return !0;
          }
        }),
        (t.prototype.getSource = function (t) {
          t = t || 0;
          var e = this._sourceList[t];
          if (!e) {
            var n = this._getUpstreamSourceManagers();
            return n[0] && n[0].getSource(t);
          }
          return e;
        }),
        (t.prototype.getSharedDataStore = function (t) {
          var e = t.makeStoreSchema();
          return this._innerGetDataStore(e.dimensions, t.source, e.hash);
        }),
        (t.prototype._innerGetDataStore = function (t, e, n) {
          var r = 0,
            i = this._storeList,
            o = i[r];
          o || (o = i[r] = {});
          var a = o[n];
          if (!a) {
            var s = this._getUpstreamSourceManagers()[0];
            qu(this._sourceHost) && s
              ? (a = s._innerGetDataStore(t, e, n))
              : ((a = new qb()), a.initData(new Cb(e, t.length), t)),
              (o[n] = a);
          }
          return a;
        }),
        (t.prototype._getUpstreamSourceManagers = function () {
          var t = this._sourceHost;
          if (qu(t)) {
            var e = Pl(t);
            return e ? [e.getSourceManager()] : [];
          }
          return y(Ol(t), function (t) {
            return t.getSourceManager();
          });
        }),
        (t.prototype._getSourceMetaRawOption = function () {
          var t,
            e,
            n,
            r = this._sourceHost;
          if (qu(r))
            (t = r.get("seriesLayoutBy", !0)),
              (e = r.get("sourceHeader", !0)),
              (n = r.get("dimensions", !0));
          else if (!this._getUpstreamSourceManagers().length) {
            var i = r;
            (t = i.get("seriesLayoutBy", !0)),
              (e = i.get("sourceHeader", !0)),
              (n = i.get("dimensions", !0));
          }
          return { seriesLayoutBy: t, sourceHeader: e, dimensions: n };
        }),
        t
      );
    })(),
    jb =
      ((function () {
        function t() {
          (this.richTextStyles = {}), (this._nextStyleNameId = ri());
        }
        return (
          (t.prototype._generateStyleName = function () {
            return "__EC_aUTo_" + this._nextStyleNameId++;
          }),
          (t.prototype.makeTooltipMarker = function (t, e, n) {
            var r = "richText" === n ? this._generateStyleName() : null,
              i = _l({ color: e, type: t, renderMode: n, markerId: r });
            return C(i) ? i : ((this.richTextStyles[r] = i.style), i.content);
          }),
          (t.prototype.wrapRichTextStyle = function (t, e) {
            var n = {};
            M(e)
              ? v(e, function (t) {
                  return h(n, t);
                })
              : h(n, e);
            var r = this._generateStyleName();
            return (this.richTextStyles[r] = n), "{" + r + "|" + t + "}";
          }),
          t
        );
      })(),
      ki()),
    Zb = "__universalTransitionEnabled",
    Kb = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e._selectedDataIndicesMap = {}), e;
      }
      return (
        e(n, t),
        (n.prototype.init = function (t, e, n) {
          (this.seriesIndex = this.componentIndex),
            (this.dataTask = Au({ count: eh, reset: nh })),
            (this.dataTask.context = { model: this }),
            this.mergeDefaultAndTheme(t, n);
          var r = (jb(this).sourceManager = new Yb(this));
          r.prepareSource();
          var i = this.getInitialData(t, n);
          ih(i, this),
            (this.dataTask.context.data = i),
            (jb(this).dataBeforeProcessed = i),
            Ju(this),
            this._initSelectedMapFromData(i);
        }),
        (n.prototype.mergeDefaultAndTheme = function (t, e) {
          var n = Tl(this),
            r = n ? kl(t) : {},
            i = this.subType;
          zw.hasClass(i) && (i += "Series"),
            l(t, e.getTheme().get(this.subType)),
            l(t, this.getDefaultOption()),
            ui(t, "label", ["show"]),
            this.fillDataTextStyle(t.data),
            n && Cl(t, r, n);
        }),
        (n.prototype.mergeOption = function (t, e) {
          (t = l(this.option, t, !0)), this.fillDataTextStyle(t.data);
          var n = Tl(this);
          n && Cl(this.option, t, n);
          var r = jb(this).sourceManager;
          r.dirty(), r.prepareSource();
          var i = this.getInitialData(t, e);
          ih(i, this),
            this.dataTask.dirty(),
            (this.dataTask.context.data = i),
            (jb(this).dataBeforeProcessed = i),
            Ju(this),
            this._initSelectedMapFromData(i);
        }),
        (n.prototype.fillDataTextStyle = function (t) {
          if (t && !L(t))
            for (var e = ["show"], n = 0; n < t.length; n++)
              t[n] && t[n].label && ui(t[n], "label", e);
        }),
        (n.prototype.getInitialData = function () {}),
        (n.prototype.appendData = function (t) {
          var e = this.getRawData();
          e.appendData(t.data);
        }),
        (n.prototype.getData = function (t) {
          var e = ah(this);
          if (e) {
            var n = e.context.data;
            return null == t ? n : n.getLinkedData(t);
          }
          return jb(this).data;
        }),
        (n.prototype.getAllData = function () {
          var t = this.getData();
          return t && t.getLinkedDataAll ? t.getLinkedDataAll() : [{ data: t }];
        }),
        (n.prototype.setData = function (t) {
          var e = ah(this);
          if (e) {
            var n = e.context;
            (n.outputData = t), e !== this.dataTask && (n.data = t);
          }
          jb(this).data = t;
        }),
        (n.prototype.getEncode = function () {
          var t = this.get("encode", !0);
          return t ? q(t) : void 0;
        }),
        (n.prototype.getSourceManager = function () {
          return jb(this).sourceManager;
        }),
        (n.prototype.getSource = function () {
          return this.getSourceManager().getSource();
        }),
        (n.prototype.getRawData = function () {
          return jb(this).dataBeforeProcessed;
        }),
        (n.prototype.getColorBy = function () {
          var t = this.get("colorBy");
          return t || "series";
        }),
        (n.prototype.isColorBySeries = function () {
          return "series" === this.getColorBy();
        }),
        (n.prototype.getBaseAxis = function () {
          var t = this.coordinateSystem;
          return t && t.getBaseAxis && t.getBaseAxis();
        }),
        (n.prototype.formatTooltip = function (t, e) {
          return Ku({ series: this, dataIndex: t, multipleSeries: e });
        }),
        (n.prototype.isAnimationEnabled = function () {
          var t = this.ecModel;
          if (gg.node && (!t || !t.ssr)) return !1;
          var e = this.getShallow("animation");
          return (
            e &&
              this.getData().count() > this.getShallow("animationThreshold") &&
              (e = !1),
            !!e
          );
        }),
        (n.prototype.restoreData = function () {
          this.dataTask.dirty();
        }),
        (n.prototype.getColorFromPalette = function (t, e, n) {
          var r = this.ecModel,
            i = rb.prototype.getColorFromPalette.call(this, t, e, n);
          return i || (i = r.getColorFromPalette(t, e, n)), i;
        }),
        (n.prototype.coordDimToDataDim = function (t) {
          return this.getRawData().mapDimensionsAll(t);
        }),
        (n.prototype.getProgressive = function () {
          return this.get("progressive");
        }),
        (n.prototype.getProgressiveThreshold = function () {
          return this.get("progressiveThreshold");
        }),
        (n.prototype.select = function (t, e) {
          this._innerSelect(this.getData(e), t);
        }),
        (n.prototype.unselect = function (t, e) {
          var n = this.option.selectedMap;
          if (n) {
            var r = this.option.selectedMode,
              i = this.getData(e);
            if ("series" === r || "all" === n)
              return (
                (this.option.selectedMap = {}),
                void (this._selectedDataIndicesMap = {})
              );
            for (var o = 0; o < t.length; o++) {
              var a = t[o],
                s = Qu(i, a);
              (n[s] = !1), (this._selectedDataIndicesMap[s] = -1);
            }
          }
        }),
        (n.prototype.toggleSelect = function (t, e) {
          for (var n = [], r = 0; r < t.length; r++)
            (n[0] = t[r]),
              this.isSelected(t[r], e)
                ? this.unselect(n, e)
                : this.select(n, e);
        }),
        (n.prototype.getSelectedDataIndices = function () {
          if ("all" === this.option.selectedMap)
            return [].slice.call(this.getData().getIndices());
          for (
            var t = this._selectedDataIndicesMap, e = w(t), n = [], r = 0;
            r < e.length;
            r++
          ) {
            var i = t[e[r]];
            i >= 0 && n.push(i);
          }
          return n;
        }),
        (n.prototype.isSelected = function (t, e) {
          var n = this.option.selectedMap;
          if (!n) return !1;
          var r = this.getData(e);
          return (
            ("all" === n || n[Qu(r, t)]) &&
            !r.getItemModel(t).get(["select", "disabled"])
          );
        }),
        (n.prototype.isUniversalTransitionEnabled = function () {
          if (this[Zb]) return !0;
          var t = this.option.universalTransition;
          return t ? (t === !0 ? !0 : t && t.enabled) : !1;
        }),
        (n.prototype._innerSelect = function (t, e) {
          var n,
            r,
            i = this.option,
            o = i.selectedMode,
            a = e.length;
          if (o && a)
            if ("series" === o) i.selectedMap = "all";
            else if ("multiple" === o) {
              I(i.selectedMap) || (i.selectedMap = {});
              for (var s = i.selectedMap, l = 0; a > l; l++) {
                var u = e[l],
                  h = Qu(t, u);
                (s[h] = !0),
                  (this._selectedDataIndicesMap[h] = t.getRawIndex(u));
              }
            } else if ("single" === o || o === !0) {
              var c = e[a - 1],
                h = Qu(t, c);
              (i.selectedMap = ((n = {}), (n[h] = !0), n)),
                (this._selectedDataIndicesMap =
                  ((r = {}), (r[h] = t.getRawIndex(c)), r));
            }
        }),
        (n.prototype._initSelectedMapFromData = function (t) {
          if (!this.option.selectedMap) {
            var e = [];
            t.hasItemOption &&
              t.each(function (n) {
                var r = t.getRawDataItem(n);
                r && r.selected && e.push(n);
              }),
              e.length > 0 && this._innerSelect(t, e);
          }
        }),
        (n.registerClass = function (t) {
          return zw.registerClass(t);
        }),
        (n.protoInitialize = (function () {
          var t = n.prototype;
          (t.type = "series.__base__"),
            (t.seriesIndex = 0),
            (t.ignoreStyleOnData = !1),
            (t.hasSymbolVisual = !1),
            (t.defaultSymbol = "circle"),
            (t.visualStyleAccessPath = "itemStyle"),
            (t.visualDrawType = "fill");
        })()),
        n
      );
    })(zw);
  d(Kb, Rb), d(Kb, rb), Fi(Kb, zw);
  var $b = (function () {
    function t() {
      (this.group = new Fy()), (this.uid = zs("viewComponent"));
    }
    return (
      (t.prototype.init = function () {}),
      (t.prototype.render = function () {}),
      (t.prototype.dispose = function () {}),
      (t.prototype.updateView = function () {}),
      (t.prototype.updateLayout = function () {}),
      (t.prototype.updateVisual = function () {}),
      (t.prototype.blurSeries = function () {}),
      (t.prototype.eachRendered = function (t) {
        var e = this.group;
        e && e.traverse(t);
      }),
      t
    );
  })();
  Ni($b), Gi($b);
  var Qb = ki(),
    Jb = sh(),
    tS = (function () {
      function t() {
        (this.group = new Fy()),
          (this.uid = zs("viewChart")),
          (this.renderTask = Au({ plan: hh, reset: ch })),
          (this.renderTask.context = { view: this });
      }
      return (
        (t.prototype.init = function () {}),
        (t.prototype.render = function () {}),
        (t.prototype.highlight = function (t, e, n, r) {
          var i = t.getData(r && r.dataType);
          i && uh(i, r, "emphasis");
        }),
        (t.prototype.downplay = function (t, e, n, r) {
          var i = t.getData(r && r.dataType);
          i && uh(i, r, "normal");
        }),
        (t.prototype.remove = function () {
          this.group.removeAll();
        }),
        (t.prototype.dispose = function () {}),
        (t.prototype.updateView = function (t, e, n, r) {
          this.render(t, e, n, r);
        }),
        (t.prototype.updateLayout = function (t, e, n, r) {
          this.render(t, e, n, r);
        }),
        (t.prototype.updateVisual = function (t, e, n, r) {
          this.render(t, e, n, r);
        }),
        (t.prototype.eachRendered = function (t) {
          Ts(this.group, t);
        }),
        (t.markUpdateMethod = function (t, e) {
          Qb(t).updateMethod = e;
        }),
        (t.protoInitialize = (function () {
          var e = t.prototype;
          e.type = "chart";
        })()),
        t
      );
    })();
  Ni(tS, ["dispose"]), Gi(tS);
  var eS,
    nS = {
      incrementalPrepareRender: {
        progress: function (t, e) {
          e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
        },
      },
      render: {
        forceFirstProgress: !0,
        progress: function (t, e) {
          e.view.render(e.model, e.ecModel, e.api, e.payload);
        },
      },
    },
    rS = ki(),
    iS = { itemStyle: Ui(aw, !0), lineStyle: Ui(rw, !0) },
    oS = { lineStyle: "stroke", itemStyle: "fill" },
    aS = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        var n = t.getData(),
          r = t.visualStyleAccessPath || "itemStyle",
          i = t.getModel(r),
          o = fh(t, r),
          a = o(i),
          s = i.getShallow("decal");
        s && (n.setVisual("decal", s), (s.dirty = !0));
        var l = dh(t, r),
          u = a[l],
          c = T(u) ? u : null,
          p = "auto" === a.fill || "auto" === a.stroke;
        if (!a[l] || c || p) {
          var f = t.getColorFromPalette(t.name, null, e.getSeriesCount());
          a[l] || ((a[l] = f), n.setVisual("colorFromPalette", !0)),
            (a.fill = "auto" === a.fill || T(a.fill) ? f : a.fill),
            (a.stroke = "auto" === a.stroke || T(a.stroke) ? f : a.stroke);
        }
        return (
          n.setVisual("style", a),
          n.setVisual("drawType", l),
          !e.isSeriesFiltered(t) && c
            ? (n.setVisual("colorFromPalette", !1),
              {
                dataEach: function (e, n) {
                  var r = t.getDataParams(n),
                    i = h({}, a);
                  (i[l] = c(r)), e.setItemVisual(n, "style", i);
                },
              })
            : void 0
        );
      },
    },
    sS = new uw(),
    lS = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        if (!t.ignoreStyleOnData && !e.isSeriesFiltered(t)) {
          var n = t.getData(),
            r = t.visualStyleAccessPath || "itemStyle",
            i = fh(t, r),
            o = n.getVisual("drawType");
          return {
            dataEach: n.hasItemOption
              ? function (t, e) {
                  var n = t.getRawDataItem(e);
                  if (n && n[r]) {
                    sS.option = n[r];
                    var a = i(sS),
                      s = t.ensureUniqueItemVisual(e, "style");
                    h(s, a),
                      sS.option.decal &&
                        (t.setItemVisual(e, "decal", sS.option.decal),
                        (sS.option.decal.dirty = !0)),
                      o in a && t.setItemVisual(e, "colorFromPalette", !1);
                  }
                }
              : null,
          };
        }
      },
    },
    uS = {
      performRawSeries: !0,
      overallReset: function (t) {
        var e = q();
        t.eachSeries(function (t) {
          var n = t.getColorBy();
          if (!t.isColorBySeries()) {
            var r = t.type + "-" + n,
              i = e.get(r);
            i || ((i = {}), e.set(r, i)), (rS(t).scope = i);
          }
        }),
          t.eachSeries(function (e) {
            if (!e.isColorBySeries() && !t.isSeriesFiltered(e)) {
              var n = e.getRawData(),
                r = {},
                i = e.getData(),
                o = rS(e).scope,
                a = e.visualStyleAccessPath || "itemStyle",
                s = dh(e, a);
              i.each(function (t) {
                var e = i.getRawIndex(t);
                r[e] = t;
              }),
                n.each(function (t) {
                  var a = r[t],
                    l = i.getItemVisual(a, "colorFromPalette");
                  if (l) {
                    var u = i.ensureUniqueItemVisual(a, "style"),
                      h = n.getName(t) || t + "",
                      c = n.count();
                    u[s] = e.getColorFromPalette(h, o, c);
                  }
                });
            }
          });
      },
    },
    hS = Math.PI,
    cS = (function () {
      function t(t, e, n, r) {
        (this._stageTaskMap = q()),
          (this.ecInstance = t),
          (this.api = e),
          (n = this._dataProcessorHandlers = n.slice()),
          (r = this._visualHandlers = r.slice()),
          (this._allHandlers = n.concat(r));
      }
      return (
        (t.prototype.restoreData = function (t, e) {
          t.restoreData(e),
            this._stageTaskMap.each(function (t) {
              var e = t.overallTask;
              e && e.dirty();
            });
        }),
        (t.prototype.getPerformArgs = function (t, e) {
          if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id),
              r = n.context,
              i =
                !e &&
                n.progressiveEnabled &&
                (!r || r.progressiveRender) &&
                t.__idxInPipeline > n.blockIndex,
              o = i ? n.step : null,
              a = r && r.modDataCount,
              s = null != a ? Math.ceil(a / o) : null;
            return { step: o, modBy: s, modDataCount: a };
          }
        }),
        (t.prototype.getPipeline = function (t) {
          return this._pipelineMap.get(t);
        }),
        (t.prototype.updateStreamModes = function (t, e) {
          var n = this._pipelineMap.get(t.uid),
            r = t.getData(),
            i = r.count(),
            o =
              n.progressiveEnabled &&
              e.incrementalPrepareRender &&
              i >= n.threshold,
            a = t.get("large") && i >= t.get("largeThreshold"),
            s = "mod" === t.get("progressiveChunkMode") ? i : null;
          t.pipelineContext = n.context = {
            progressiveRender: o,
            modDataCount: s,
            large: a,
          };
        }),
        (t.prototype.restorePipelines = function (t) {
          var e = this,
            n = (e._pipelineMap = q());
          t.eachSeries(function (t) {
            var r = t.getProgressive(),
              i = t.uid;
            n.set(i, {
              id: i,
              head: null,
              tail: null,
              threshold: t.getProgressiveThreshold(),
              progressiveEnabled:
                r && !(t.preventIncremental && t.preventIncremental()),
              blockIndex: -1,
              step: Math.round(r || 700),
              count: 0,
            }),
              e._pipe(t, t.dataTask);
          });
        }),
        (t.prototype.prepareStageTasks = function () {
          var t = this._stageTaskMap,
            e = this.api.getModel(),
            n = this.api;
          v(
            this._allHandlers,
            function (r) {
              var i = t.get(r.uid) || t.set(r.uid, {}),
                o = "";
              W(!(r.reset && r.overallReset), o),
                r.reset && this._createSeriesStageTask(r, i, e, n),
                r.overallReset && this._createOverallStageTask(r, i, e, n);
            },
            this
          );
        }),
        (t.prototype.prepareView = function (t, e, n, r) {
          var i = t.renderTask,
            o = i.context;
          (o.model = e),
            (o.ecModel = n),
            (o.api = r),
            (i.__block = !t.incrementalPrepareRender),
            this._pipe(e, i);
        }),
        (t.prototype.performDataProcessorTasks = function (t, e) {
          this._performStageTasks(this._dataProcessorHandlers, t, e, {
            block: !0,
          });
        }),
        (t.prototype.performVisualTasks = function (t, e, n) {
          this._performStageTasks(this._visualHandlers, t, e, n);
        }),
        (t.prototype._performStageTasks = function (t, e, n, r) {
          function i(t, e) {
            return (
              t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
            );
          }
          r = r || {};
          var o = !1,
            a = this;
          v(t, function (t) {
            if (!r.visualType || r.visualType === t.visualType) {
              var s = a._stageTaskMap.get(t.uid),
                l = s.seriesTaskMap,
                u = s.overallTask;
              if (u) {
                var h,
                  c = u.agentStubMap;
                c.each(function (t) {
                  i(r, t) && (t.dirty(), (h = !0));
                }),
                  h && u.dirty(),
                  a.updatePayload(u, n);
                var p = a.getPerformArgs(u, r.block);
                c.each(function (t) {
                  t.perform(p);
                }),
                  u.perform(p) && (o = !0);
              } else
                l &&
                  l.each(function (s) {
                    i(r, s) && s.dirty();
                    var l = a.getPerformArgs(s, r.block);
                    (l.skip =
                      !t.performRawSeries &&
                      e.isSeriesFiltered(s.context.model)),
                      a.updatePayload(s, n),
                      s.perform(l) && (o = !0);
                  });
            }
          }),
            (this.unfinished = o || this.unfinished);
        }),
        (t.prototype.performSeriesTasks = function (t) {
          var e;
          t.eachSeries(function (t) {
            e = t.dataTask.perform() || e;
          }),
            (this.unfinished = e || this.unfinished);
        }),
        (t.prototype.plan = function () {
          this._pipelineMap.each(function (t) {
            var e = t.tail;
            do {
              if (e.__block) {
                t.blockIndex = e.__idxInPipeline;
                break;
              }
              e = e.getUpstream();
            } while (e);
          });
        }),
        (t.prototype.updatePayload = function (t, e) {
          "remain" !== e && (t.context.payload = e);
        }),
        (t.prototype._createSeriesStageTask = function (t, e, n, r) {
          function i(e) {
            var i = e.uid,
              l = s.set(
                i,
                (a && a.get(i)) || Au({ plan: xh, reset: wh, count: Sh })
              );
            (l.context = {
              model: e,
              ecModel: n,
              api: r,
              useClearVisual: t.isVisual && !t.isLayout,
              plan: t.plan,
              reset: t.reset,
              scheduler: o,
            }),
              o._pipe(e, l);
          }
          var o = this,
            a = e.seriesTaskMap,
            s = (e.seriesTaskMap = q()),
            l = t.seriesType,
            u = t.getTargetSeries;
          t.createOnAllSeries
            ? n.eachRawSeries(i)
            : l
            ? n.eachRawSeriesByType(l, i)
            : u && u(n, r).each(i);
        }),
        (t.prototype._createOverallStageTask = function (t, e, n, r) {
          function i(t) {
            var e = t.uid,
              n = l.set(
                e,
                (s && s.get(e)) || ((p = !0), Au({ reset: yh, onDirty: _h }))
              );
            (n.context = { model: t, overallProgress: c }),
              (n.agent = a),
              (n.__block = c),
              o._pipe(t, n);
          }
          var o = this,
            a = (e.overallTask = e.overallTask || Au({ reset: vh }));
          a.context = {
            ecModel: n,
            api: r,
            overallReset: t.overallReset,
            scheduler: o,
          };
          var s = a.agentStubMap,
            l = (a.agentStubMap = q()),
            u = t.seriesType,
            h = t.getTargetSeries,
            c = !0,
            p = !1,
            f = "";
          W(!t.createOnAllSeries, f),
            u
              ? n.eachRawSeriesByType(u, i)
              : h
              ? h(n, r).each(i)
              : ((c = !1), v(n.getSeries(), i)),
            p && a.dirty();
        }),
        (t.prototype._pipe = function (t, e) {
          var n = t.uid,
            r = this._pipelineMap.get(n);
          !r.head && (r.head = e),
            r.tail && r.tail.pipe(e),
            (r.tail = e),
            (e.__idxInPipeline = r.count++),
            (e.__pipeline = r);
        }),
        (t.wrapStageHandler = function (t, e) {
          return (
            T(t) && (t = { overallReset: t, seriesType: Mh(t) }),
            (t.uid = zs("stageHandler")),
            e && (t.visualType = e),
            t
          );
        }),
        t
      );
    })(),
    pS = bh(0),
    fS = {},
    dS = {};
  Th(fS, ab),
    Th(dS, db),
    (fS.eachSeriesByType = fS.eachRawSeriesByType =
      function (t) {
        eS = t;
      }),
    (fS.eachComponent = function (t) {
      "series" === t.mainType && t.subType && (eS = t.subType);
    });
  var gS = [
      "#37A2DA",
      "#32C5E9",
      "#67E0E3",
      "#9FE6B8",
      "#FFDB5C",
      "#ff9f7f",
      "#fb7293",
      "#E062AE",
      "#E690D1",
      "#e7bcf3",
      "#9d96f5",
      "#8378EA",
      "#96BFFF",
    ],
    vS = {
      color: gS,
      colorLayer: [
        ["#37A2DA", "#ffd85c", "#fd7b5f"],
        ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
        [
          "#37A2DA",
          "#32C5E9",
          "#9FE6B8",
          "#FFDB5C",
          "#ff9f7f",
          "#fb7293",
          "#e7bcf3",
          "#8378EA",
          "#96BFFF",
        ],
        gS,
      ],
    },
    yS = "#B9B8CE",
    mS = "#100C2A",
    _S = function () {
      return {
        axisLine: { lineStyle: { color: yS } },
        splitLine: { lineStyle: { color: "#484753" } },
        splitArea: {
          areaStyle: {
            color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"],
          },
        },
        minorSplitLine: { lineStyle: { color: "#20203B" } },
      };
    },
    xS = [
      "#4992ff",
      "#7cffb2",
      "#fddd60",
      "#ff6e76",
      "#58d9f9",
      "#05c091",
      "#ff8a45",
      "#8d48e3",
      "#dd79ff",
    ],
    wS = {
      darkMode: !0,
      color: xS,
      backgroundColor: mS,
      axisPointer: {
        lineStyle: { color: "#817f91" },
        crossStyle: { color: "#817f91" },
        label: { color: "#fff" },
      },
      legend: { textStyle: { color: yS } },
      textStyle: { color: yS },
      title: {
        textStyle: { color: "#EEF1FA" },
        subtextStyle: { color: "#B9B8CE" },
      },
      toolbox: { iconStyle: { borderColor: yS } },
      dataZoom: {
        borderColor: "#71708A",
        textStyle: { color: yS },
        brushStyle: { color: "rgba(135,163,206,0.3)" },
        handleStyle: { color: "#353450", borderColor: "#C5CBE3" },
        moveHandleStyle: { color: "#B0B6C3", opacity: 0.3 },
        fillerColor: "rgba(135,163,206,0.2)",
        emphasis: {
          handleStyle: { borderColor: "#91B7F2", color: "#4D587D" },
          moveHandleStyle: { color: "#636D9A", opacity: 0.7 },
        },
        dataBackground: {
          lineStyle: { color: "#71708A", width: 1 },
          areaStyle: { color: "#71708A" },
        },
        selectedDataBackground: {
          lineStyle: { color: "#87A3CE" },
          areaStyle: { color: "#87A3CE" },
        },
      },
      visualMap: { textStyle: { color: yS } },
      timeline: {
        lineStyle: { color: yS },
        label: { color: yS },
        controlStyle: { color: yS, borderColor: yS },
      },
      calendar: {
        itemStyle: { color: mS },
        dayLabel: { color: yS },
        monthLabel: { color: yS },
        yearLabel: { color: yS },
      },
      timeAxis: _S(),
      logAxis: _S(),
      valueAxis: _S(),
      categoryAxis: _S(),
      line: { symbol: "circle" },
      graph: { color: xS },
      gauge: {
        title: { color: yS },
        axisLine: { lineStyle: { color: [[1, "rgba(207,212,219,0.2)"]] } },
        axisLabel: { color: yS },
        detail: { color: "#EEF1FA" },
      },
      candlestick: {
        itemStyle: {
          color: "#f64e56",
          color0: "#54ea92",
          borderColor: "#f64e56",
          borderColor0: "#54ea92",
        },
      },
    };
  wS.categoryAxis.splitLine.show = !1;
  var bS = (function () {
      function t() {}
      return (
        (t.prototype.normalizeQuery = function (t) {
          var e = {},
            n = {},
            r = {};
          if (C(t)) {
            var i = Ri(t);
            (e.mainType = i.main || null), (e.subType = i.sub || null);
          } else {
            var o = ["Index", "Name", "Id"],
              a = { name: 1, dataIndex: 1, dataType: 1 };
            v(t, function (t, i) {
              for (var s = !1, l = 0; l < o.length; l++) {
                var u = o[l],
                  h = i.lastIndexOf(u);
                if (h > 0 && h === i.length - u.length) {
                  var c = i.slice(0, h);
                  "data" !== c &&
                    ((e.mainType = c), (e[u.toLowerCase()] = t), (s = !0));
                }
              }
              a.hasOwnProperty(i) && ((n[i] = t), (s = !0)), s || (r[i] = t);
            });
          }
          return { cptQuery: e, dataQuery: n, otherQuery: r };
        }),
        (t.prototype.filter = function (t, e) {
          function n(t, e, n, r) {
            return null == t[n] || e[r || n] === t[n];
          }
          var r = this.eventInfo;
          if (!r) return !0;
          var i = r.targetEl,
            o = r.packedEvent,
            a = r.model,
            s = r.view;
          if (!a || !s) return !0;
          var l = e.cptQuery,
            u = e.dataQuery;
          return (
            n(l, a, "mainType") &&
            n(l, a, "subType") &&
            n(l, a, "index", "componentIndex") &&
            n(l, a, "name") &&
            n(l, a, "id") &&
            n(u, o, "name") &&
            n(u, o, "dataIndex") &&
            n(u, o, "dataType") &&
            (!s.filterForExposedEvent ||
              s.filterForExposedEvent(t, e.otherQuery, i, o))
          );
        }),
        (t.prototype.afterTrigger = function () {
          this.eventInfo = null;
        }),
        t
      );
    })(),
    SS = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"],
    MS = SS.concat(["symbolKeepAspect"]),
    TS = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        function n(e, n) {
          for (
            var r = t.getRawValue(n), i = t.getDataParams(n), a = 0;
            a < c.length;
            a++
          ) {
            var s = c[a];
            e.setItemVisual(n, s, o[s](r, i));
          }
        }
        var r = t.getData();
        if (
          (t.legendIcon && r.setVisual("legendIcon", t.legendIcon),
          t.hasSymbolVisual)
        ) {
          for (var i = {}, o = {}, a = !1, s = 0; s < SS.length; s++) {
            var l = SS[s],
              u = t.get(l);
            T(u) ? ((a = !0), (o[l] = u)) : (i[l] = u);
          }
          if (
            ((i.symbol = i.symbol || t.defaultSymbol),
            r.setVisual(
              h(
                {
                  legendIcon: t.legendIcon || i.symbol,
                  symbolKeepAspect: t.get("symbolKeepAspect"),
                },
                i
              )
            ),
            !e.isSeriesFiltered(t))
          ) {
            var c = w(o);
            return { dataEach: a ? n : null };
          }
        }
      },
    },
    CS = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        function n(t, e) {
          for (var n = t.getItemModel(e), r = 0; r < MS.length; r++) {
            var i = MS[r],
              o = n.getShallow(i, !0);
            null != o && t.setItemVisual(e, i, o);
          }
        }
        if (t.hasSymbolVisual && !e.isSeriesFiltered(t)) {
          var r = t.getData();
          return { dataEach: r.hasItemOption ? n : null };
        }
      },
    },
    kS = Math.round(9 * Math.random()),
    DS = "function" == typeof Object.defineProperty,
    IS = (function () {
      function t() {
        this._id = "__ec_inner_" + kS++;
      }
      return (
        (t.prototype.get = function (t) {
          return this._guard(t)[this._id];
        }),
        (t.prototype.set = function (t, e) {
          var n = this._guard(t);
          return (
            DS
              ? Object.defineProperty(n, this._id, {
                  value: e,
                  enumerable: !1,
                  configurable: !0,
                })
              : (n[this._id] = e),
            this
          );
        }),
        (t.prototype["delete"] = function (t) {
          return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
        }),
        (t.prototype.has = function (t) {
          return !!this._guard(t)[this._id];
        }),
        (t.prototype._guard = function (t) {
          if (t !== Object(t))
            throw TypeError("Value of WeakMap is not a non-null object.");
          return t;
        }),
        t
      );
    })(),
    AS = i_.extend({
      type: "triangle",
      shape: { cx: 0, cy: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.cx,
          r = e.cy,
          i = e.width / 2,
          o = e.height / 2;
        t.moveTo(n, r - o),
          t.lineTo(n + i, r + o),
          t.lineTo(n - i, r + o),
          t.closePath();
      },
    }),
    LS = i_.extend({
      type: "diamond",
      shape: { cx: 0, cy: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.cx,
          r = e.cy,
          i = e.width / 2,
          o = e.height / 2;
        t.moveTo(n, r - o),
          t.lineTo(n + i, r),
          t.lineTo(n, r + o),
          t.lineTo(n - i, r),
          t.closePath();
      },
    }),
    PS = i_.extend({
      type: "pin",
      shape: { x: 0, y: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.x,
          r = e.y,
          i = (e.width / 5) * 3,
          o = Math.max(i, e.height),
          a = i / 2,
          s = (a * a) / (o - a),
          l = r - o + a + s,
          u = Math.asin(s / a),
          h = Math.cos(u) * a,
          c = Math.sin(u),
          p = Math.cos(u),
          f = 0.6 * a,
          d = 0.7 * a;
        t.moveTo(n - h, l + s),
          t.arc(n, l, a, Math.PI - u, 2 * Math.PI + u),
          t.bezierCurveTo(n + h - c * f, l + s + p * f, n, r - d, n, r),
          t.bezierCurveTo(n, r - d, n - h + c * f, l + s + p * f, n - h, l + s),
          t.closePath();
      },
    }),
    OS = i_.extend({
      type: "arrow",
      shape: { x: 0, y: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.height,
          r = e.width,
          i = e.x,
          o = e.y,
          a = (r / 3) * 2;
        t.moveTo(i, o),
          t.lineTo(i + a, o + n),
          t.lineTo(i, o + (n / 4) * 3),
          t.lineTo(i - a, o + n),
          t.lineTo(i, o),
          t.closePath();
      },
    }),
    RS = {
      line: Tx,
      rect: f_,
      roundRect: f_,
      square: f_,
      circle: tx,
      diamond: LS,
      pin: PS,
      arrow: OS,
      triangle: AS,
    },
    ES = {
      line: function (t, e, n, r, i) {
        (i.x1 = t), (i.y1 = e + r / 2), (i.x2 = t + n), (i.y2 = e + r / 2);
      },
      rect: function (t, e, n, r, i) {
        (i.x = t), (i.y = e), (i.width = n), (i.height = r);
      },
      roundRect: function (t, e, n, r, i) {
        (i.x = t),
          (i.y = e),
          (i.width = n),
          (i.height = r),
          (i.r = Math.min(n, r) / 4);
      },
      square: function (t, e, n, r, i) {
        var o = Math.min(n, r);
        (i.x = t), (i.y = e), (i.width = o), (i.height = o);
      },
      circle: function (t, e, n, r, i) {
        (i.cx = t + n / 2), (i.cy = e + r / 2), (i.r = Math.min(n, r) / 2);
      },
      diamond: function (t, e, n, r, i) {
        (i.cx = t + n / 2), (i.cy = e + r / 2), (i.width = n), (i.height = r);
      },
      pin: function (t, e, n, r, i) {
        (i.x = t + n / 2), (i.y = e + r / 2), (i.width = n), (i.height = r);
      },
      arrow: function (t, e, n, r, i) {
        (i.x = t + n / 2), (i.y = e + r / 2), (i.width = n), (i.height = r);
      },
      triangle: function (t, e, n, r, i) {
        (i.cx = t + n / 2), (i.cy = e + r / 2), (i.width = n), (i.height = r);
      },
    },
    BS = {};
  v(RS, function (t, e) {
    BS[e] = new t();
  });
  var NS = i_.extend({
      type: "symbol",
      shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 },
      calculateTextPosition: function (t, e, n) {
        var r = br(t, e, n),
          i = this.shape;
        return (
          i &&
            "pin" === i.symbolType &&
            "inside" === e.position &&
            (r.y = n.y + 0.4 * n.height),
          r
        );
      },
      buildPath: function (t, e, n) {
        var r = e.symbolType;
        if ("none" !== r) {
          var i = BS[r];
          i || ((r = "rect"), (i = BS[r])),
            ES[r](e.x, e.y, e.width, e.height, i.shape),
            i.buildPath(t, i.shape, n);
        }
      },
    }),
    zS = new Ym(!0),
    FS = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"],
    VS = [
      ["lineCap", "butt"],
      ["lineJoin", "miter"],
      ["miterLimit", 10],
    ],
    HS = 1,
    WS = 2,
    GS = 3,
    US = 4,
    XS = new IS(),
    qS = new Pv(100),
    YS = [
      "symbol",
      "symbolSize",
      "symbolKeepAspect",
      "color",
      "backgroundColor",
      "dashArrayX",
      "dashArrayY",
      "maxTileWidth",
      "maxTileHeight",
    ],
    jS = new Zg(),
    ZS = {},
    KS = "undefined" != typeof window,
    $S = "5.3.0",
    QS = { zrender: "5.3.0" },
    JS = 1,
    tM = 800,
    eM = 900,
    nM = 1e3,
    rM = 2e3,
    iM = 5e3,
    oM = 1e3,
    aM = 1100,
    sM = 2e3,
    lM = 3e3,
    uM = 4e3,
    hM = 4500,
    cM = 4600,
    pM = 5e3,
    fM = 6e3,
    dM = 7e3,
    gM = {
      PROCESSOR: { FILTER: nM, SERIES_FILTER: tM, STATISTIC: iM },
      VISUAL: {
        LAYOUT: oM,
        PROGRESSIVE_LAYOUT: aM,
        GLOBAL: sM,
        CHART: lM,
        POST_CHART_LAYOUT: cM,
        COMPONENT: uM,
        BRUSH: pM,
        CHART_ITEM: hM,
        ARIA: fM,
        DECAL: dM,
      },
    },
    vM = "__flagInMainProcess",
    yM = "__pendingUpdate",
    mM = "__needsUpdateStatus",
    _M = /^[a-zA-Z0-9_]+$/,
    xM = "__connectUpdateStatus",
    wM = 0,
    bM = 1,
    SM = 2,
    MM = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return e(n, t), n;
    })(Zg),
    TM = MM.prototype;
  (TM.on = _c("on")), (TM.off = _c("off"));
  var CM,
    kM,
    DM,
    IM,
    AM,
    LM,
    PM,
    OM,
    RM,
    EM,
    BM,
    NM,
    zM,
    FM,
    VM,
    HM,
    WM,
    GM,
    UM = (function (t) {
      function n(e, n, r) {
        function i(t, e) {
          return t.__prio - e.__prio;
        }
        var o = t.call(this, new bS()) || this;
        (o._chartsViews = []),
          (o._chartsMap = {}),
          (o._componentsViews = []),
          (o._componentsMap = {}),
          (o._pendingActions = []),
          (r = r || {}),
          C(n) && (n = QM[n]),
          (o._dom = e);
        var a = "canvas",
          l = !1,
          u = (o._zr = Pr(e, {
            renderer: r.renderer || a,
            devicePixelRatio: r.devicePixelRatio,
            width: r.width,
            height: r.height,
            ssr: r.ssr,
            useDirtyRect: null == r.useDirtyRect ? l : r.useDirtyRect,
          }));
        (o._ssr = r.ssr),
          (o._throttledZrFlush = ph(Ng(u.flush, u), 17)),
          (n = s(n)),
          n && pu(n, !0),
          (o._theme = n),
          (o._locale = Gs(r.locale || mw)),
          (o._coordSysMgr = new vb());
        var h = (o._api = VM(o));
        return (
          Xe($M, i),
          Xe(ZM, i),
          (o._scheduler = new cS(o, h, ZM, $M)),
          (o._messageCenter = new MM()),
          o._initEvents(),
          (o.resize = Ng(o.resize, o)),
          u.animation.on("frame", o._onframe, o),
          EM(u, o),
          BM(u, o),
          U(o),
          o
        );
      }
      return (
        e(n, t),
        (n.prototype._onframe = function () {
          if (!this._disposed) {
            GM(this);
            var t = this._scheduler;
            if (this[yM]) {
              var e = this[yM].silent;
              this[vM] = !0;
              try {
                CM(this), IM.update.call(this, null, this[yM].updateParams);
              } catch (n) {
                throw ((this[vM] = !1), (this[yM] = null), n);
              }
              this._zr.flush(),
                (this[vM] = !1),
                (this[yM] = null),
                OM.call(this, e),
                RM.call(this, e);
            } else if (t.unfinished) {
              var r = JS,
                i = this._model,
                o = this._api;
              t.unfinished = !1;
              do {
                var a = +new Date();
                t.performSeriesTasks(i),
                  t.performDataProcessorTasks(i),
                  LM(this, i),
                  t.performVisualTasks(i),
                  FM(this, this._model, o, "remain", {}),
                  (r -= +new Date() - a);
              } while (r > 0 && t.unfinished);
              t.unfinished || this._zr.flush();
            }
          }
        }),
        (n.prototype.getDom = function () {
          return this._dom;
        }),
        (n.prototype.getId = function () {
          return this.id;
        }),
        (n.prototype.getZr = function () {
          return this._zr;
        }),
        (n.prototype.isSSR = function () {
          return this._ssr;
        }),
        (n.prototype.setOption = function (t, e, n) {
          if (!this[vM] && !this._disposed) {
            var r, i, o;
            if (
              (I(e) &&
                ((n = e.lazyUpdate),
                (r = e.silent),
                (i = e.replaceMerge),
                (o = e.transition),
                (e = e.notMerge)),
              (this[vM] = !0),
              !this._model || e)
            ) {
              var a = new mb(this._api),
                s = this._theme,
                l = (this._model = new ab());
              (l.scheduler = this._scheduler),
                (l.ssr = this._ssr),
                l.init(null, null, null, s, this._locale, a);
            }
            this._model.setOption(t, { replaceMerge: i }, KM);
            var u = { seriesTransition: o, optionChanged: !0 };
            if (n)
              (this[yM] = { silent: r, updateParams: u }),
                (this[vM] = !1),
                this.getZr().wakeUp();
            else {
              try {
                CM(this), IM.update.call(this, null, u);
              } catch (h) {
                throw ((this[yM] = null), (this[vM] = !1), h);
              }
              this._ssr || this._zr.flush(),
                (this[yM] = null),
                (this[vM] = !1),
                OM.call(this, r),
                RM.call(this, r);
            }
          }
        }),
        (n.prototype.setTheme = function () {}),
        (n.prototype.getModel = function () {
          return this._model;
        }),
        (n.prototype.getOption = function () {
          return this._model && this._model.getOption();
        }),
        (n.prototype.getWidth = function () {
          return this._zr.getWidth();
        }),
        (n.prototype.getHeight = function () {
          return this._zr.getHeight();
        }),
        (n.prototype.getDevicePixelRatio = function () {
          return this._zr.painter.dpr || (KS && window.devicePixelRatio) || 1;
        }),
        (n.prototype.getRenderedCanvas = function (t) {
          return this.renderToCanvas(t);
        }),
        (n.prototype.renderToCanvas = function (t) {
          t = t || {};
          var e = this._zr.painter;
          return e.getRenderedCanvas({
            backgroundColor:
              t.backgroundColor || this._model.get("backgroundColor"),
            pixelRatio: t.pixelRatio || this.getDevicePixelRatio(),
          });
        }),
        (n.prototype.renderToSVGString = function (t) {
          t = t || {};
          var e = this._zr.painter;
          return e.renderToString({ useViewBox: t.useViewBox });
        }),
        (n.prototype.getSvgDataURL = function () {
          if (gg.svgSupported) {
            var t = this._zr,
              e = t.storage.getDisplayList();
            return (
              v(e, function (t) {
                t.stopAnimation(null, !0);
              }),
              t.painter.toDataURL()
            );
          }
        }),
        (n.prototype.getDataURL = function (t) {
          if (!this._disposed) {
            t = t || {};
            var e = t.excludeComponents,
              n = this._model,
              r = [],
              i = this;
            v(e, function (t) {
              n.eachComponent({ mainType: t }, function (t) {
                var e = i._componentsMap[t.__viewId];
                e.group.ignore || (r.push(e), (e.group.ignore = !0));
              });
            });
            var o =
              "svg" === this._zr.painter.getType()
                ? this.getSvgDataURL()
                : this.renderToCanvas(t).toDataURL(
                    "image/" + ((t && t.type) || "png")
                  );
            return (
              v(r, function (t) {
                t.group.ignore = !1;
              }),
              o
            );
          }
        }),
        (n.prototype.getConnectedDataURL = function (t) {
          if (!this._disposed) {
            var e = "svg" === t.type,
              n = this.group,
              r = Math.min,
              i = Math.max,
              o = 1 / 0;
            if (eT[n]) {
              var a = o,
                l = o,
                u = -o,
                h = -o,
                c = [],
                p = (t && t.pixelRatio) || this.getDevicePixelRatio();
              v(tT, function (o) {
                if (o.group === n) {
                  var p = e
                      ? o.getZr().painter.getSvgDom().innerHTML
                      : o.renderToCanvas(s(t)),
                    f = o.getDom().getBoundingClientRect();
                  (a = r(f.left, a)),
                    (l = r(f.top, l)),
                    (u = i(f.right, u)),
                    (h = i(f.bottom, h)),
                    c.push({ dom: p, left: f.left, top: f.top });
                }
              }),
                (a *= p),
                (l *= p),
                (u *= p),
                (h *= p);
              var f = u - a,
                d = h - l,
                g = Sg.createCanvas(),
                y = Pr(g, { renderer: e ? "svg" : "canvas" });
              if ((y.resize({ width: f, height: d }), e)) {
                var m = "";
                return (
                  v(c, function (t) {
                    var e = t.left - a,
                      n = t.top - l;
                    m +=
                      '<g transform="translate(' +
                      e +
                      "," +
                      n +
                      ')">' +
                      t.dom +
                      "</g>";
                  }),
                  (y.painter.getSvgRoot().innerHTML = m),
                  t.connectedBackgroundColor &&
                    y.painter.setBackgroundColor(t.connectedBackgroundColor),
                  y.refreshImmediately(),
                  y.painter.toDataURL()
                );
              }
              return (
                t.connectedBackgroundColor &&
                  y.add(
                    new f_({
                      shape: { x: 0, y: 0, width: f, height: d },
                      style: { fill: t.connectedBackgroundColor },
                    })
                  ),
                v(c, function (t) {
                  var e = new u_({
                    style: {
                      x: t.left * p - a,
                      y: t.top * p - l,
                      image: t.dom,
                    },
                  });
                  y.add(e);
                }),
                y.refreshImmediately(),
                g.toDataURL("image/" + ((t && t.type) || "png"))
              );
            }
            return this.getDataURL(t);
          }
        }),
        (n.prototype.convertToPixel = function (t, e) {
          return AM(this, "convertToPixel", t, e);
        }),
        (n.prototype.convertFromPixel = function (t, e) {
          return AM(this, "convertFromPixel", t, e);
        }),
        (n.prototype.containPixel = function (t, e) {
          if (!this._disposed) {
            var n,
              r = this._model,
              i = Di(r, t);
            return (
              v(
                i,
                function (t, r) {
                  r.indexOf("Models") >= 0 &&
                    v(
                      t,
                      function (t) {
                        var i = t.coordinateSystem;
                        if (i && i.containPoint) n = n || !!i.containPoint(e);
                        else if ("seriesModels" === r) {
                          var o = this._chartsMap[t.__viewId];
                          o &&
                            o.containPoint &&
                            (n = n || o.containPoint(e, t));
                        }
                      },
                      this
                    );
                },
                this
              ),
              !!n
            );
          }
        }),
        (n.prototype.getVisual = function (t, e) {
          var n = this._model,
            r = Di(n, t, { defaultMainType: "series" }),
            i = r.seriesModel,
            o = i.getData(),
            a = r.hasOwnProperty("dataIndexInside")
              ? r.dataIndexInside
              : r.hasOwnProperty("dataIndex")
              ? o.indexOfRawIndex(r.dataIndex)
              : null;
          return null != a ? Ch(o, a, e) : kh(o, e);
        }),
        (n.prototype.getViewOfComponentModel = function (t) {
          return this._componentsMap[t.__viewId];
        }),
        (n.prototype.getViewOfSeriesModel = function (t) {
          return this._chartsMap[t.__viewId];
        }),
        (n.prototype._initEvents = function () {
          var t = this;
          v(qM, function (e) {
            var n = function (n) {
              var r,
                i = t.getModel(),
                o = n.target,
                a = "globalout" === e;
              if (
                (a
                  ? (r = {})
                  : o &&
                    Ah(
                      o,
                      function (t) {
                        var e = w_(t);
                        if (e && null != e.dataIndex) {
                          var n =
                            e.dataModel || i.getSeriesByIndex(e.seriesIndex);
                          return (
                            (r =
                              (n && n.getDataParams(e.dataIndex, e.dataType)) ||
                              {}),
                            !0
                          );
                        }
                        return e.eventData
                          ? ((r = h({}, e.eventData)), !0)
                          : void 0;
                      },
                      !0
                    ),
                r)
              ) {
                var s = r.componentType,
                  l = r.componentIndex;
                ("markLine" === s || "markPoint" === s || "markArea" === s) &&
                  ((s = "series"), (l = r.seriesIndex));
                var u = s && null != l && i.getComponent(s, l),
                  c =
                    u &&
                    t[
                      "series" === u.mainType ? "_chartsMap" : "_componentsMap"
                    ][u.__viewId];
                (r.event = n),
                  (r.type = e),
                  (t._$eventProcessor.eventInfo = {
                    targetEl: o,
                    packedEvent: r,
                    model: u,
                    view: c,
                  }),
                  t.trigger(e, r);
              }
            };
            (n.zrEventfulCallAtLast = !0), t._zr.on(e, n, t);
          }),
            v(jM, function (e, n) {
              t._messageCenter.on(
                n,
                function (t) {
                  this.trigger(n, t);
                },
                t
              );
            }),
            v(["selectchanged"], function (e) {
              t._messageCenter.on(
                e,
                function (t) {
                  this.trigger(e, t);
                },
                t
              );
            }),
            Ih(this._messageCenter, this, this._api);
        }),
        (n.prototype.isDisposed = function () {
          return this._disposed;
        }),
        (n.prototype.clear = function () {
          this._disposed || this.setOption({ series: [] }, !0);
        }),
        (n.prototype.dispose = function () {
          if (!this._disposed) {
            this._disposed = !0;
            var t = this.getDom();
            t && Li(this.getDom(), iT, "");
            var e = this,
              n = e._api,
              r = e._model;
            v(e._componentsViews, function (t) {
              t.dispose(r, n);
            }),
              v(e._chartsViews, function (t) {
                t.dispose(r, n);
              }),
              e._zr.dispose(),
              (e._dom =
                e._model =
                e._chartsMap =
                e._componentsMap =
                e._chartsViews =
                e._componentsViews =
                e._scheduler =
                e._api =
                e._zr =
                e._throttledZrFlush =
                e._theme =
                e._coordSysMgr =
                e._messageCenter =
                  null),
              delete tT[e.id];
          }
        }),
        (n.prototype.resize = function (t) {
          if (!this[vM] && !this._disposed) {
            this._zr.resize(t);
            var e = this._model;
            if ((this._loadingFX && this._loadingFX.resize(), e)) {
              var n = e.resetOption("media"),
                r = t && t.silent;
              this[yM] &&
                (null == r && (r = this[yM].silent),
                (n = !0),
                (this[yM] = null)),
                (this[vM] = !0);
              try {
                n && CM(this),
                  IM.update.call(this, {
                    type: "resize",
                    animation: h({ duration: 0 }, t && t.animation),
                  });
              } catch (i) {
                throw ((this[vM] = !1), i);
              }
              (this[vM] = !1), OM.call(this, r), RM.call(this, r);
            }
          }
        }),
        (n.prototype.showLoading = function (t, e) {
          if (
            !this._disposed &&
            (I(t) && ((e = t), (t = "")),
            (t = t || "default"),
            this.hideLoading(),
            JM[t])
          ) {
            var n = JM[t](this._api, e),
              r = this._zr;
            (this._loadingFX = n), r.add(n);
          }
        }),
        (n.prototype.hideLoading = function () {
          this._disposed ||
            (this._loadingFX && this._zr.remove(this._loadingFX),
            (this._loadingFX = null));
        }),
        (n.prototype.makeActionFromEvent = function (t) {
          var e = h({}, t);
          return (e.type = jM[t.type]), e;
        }),
        (n.prototype.dispatchAction = function (t, e) {
          if (
            !this._disposed &&
            (I(e) || (e = { silent: !!e }), YM[t.type] && this._model)
          ) {
            if (this[vM]) return void this._pendingActions.push(t);
            var n = e.silent;
            PM.call(this, t, n);
            var r = e.flush;
            r
              ? this._zr.flush()
              : r !== !1 && gg.browser.weChat && this._throttledZrFlush(),
              OM.call(this, n),
              RM.call(this, n);
          }
        }),
        (n.prototype.updateLabelLayout = function () {
          jS.trigger("series:layoutlabels", this._model, this._api, {
            updatedSeries: [],
          });
        }),
        (n.prototype.appendData = function (t) {
          if (!this._disposed) {
            var e = t.seriesIndex,
              n = this.getModel(),
              r = n.getSeriesByIndex(e);
            r.appendData(t),
              (this._scheduler.unfinished = !0),
              this.getZr().wakeUp();
          }
        }),
        (n.internalField = (function () {
          function t(t) {
            t.clearColorPalette(),
              t.eachSeries(function (t) {
                t.clearColorPalette();
              });
          }
          function n(t) {
            var e = [],
              n = [],
              r = !1;
            if (
              (t.eachComponent(function (t, i) {
                var o = i.get("zlevel") || 0,
                  a = i.get("z") || 0,
                  s = i.getZLevelKey();
                (r = r || !!s),
                  ("series" === t ? n : e).push({
                    zlevel: o,
                    z: a,
                    idx: i.componentIndex,
                    type: t,
                    key: s,
                  });
              }),
              r)
            ) {
              var i,
                o,
                a = e.concat(n);
              Xe(a, function (t, e) {
                return t.zlevel === e.zlevel ? t.z - e.z : t.zlevel - e.zlevel;
              }),
                v(a, function (e) {
                  var n = t.getComponent(e.type, e.idx),
                    r = e.zlevel,
                    a = e.key;
                  null != i && (r = Math.max(i, r)),
                    a
                      ? (r === i && a !== o && r++, (o = a))
                      : o && (r === i && r++, (o = "")),
                    (i = r),
                    n.setZLevel(r);
                });
            }
          }
          function r(t) {
            for (var e = [], n = t.currentStates, r = 0; r < n.length; r++) {
              var i = n[r];
              "emphasis" !== i && "blur" !== i && "select" !== i && e.push(i);
            }
            t.selected && t.states.select && e.push("select"),
              t.hoverState === I_ && t.states.emphasis
                ? e.push("emphasis")
                : t.hoverState === D_ && t.states.blur && e.push("blur"),
              t.useStates(e);
          }
          function i(t, e) {
            var n = t._zr,
              r = n.storage,
              i = 0;
            r.traverse(function (t) {
              t.isGroup || i++;
            }),
              i > e.get("hoverLayerThreshold") &&
                !gg.node &&
                !gg.worker &&
                e.eachSeries(function (e) {
                  if (!e.preventUsingHoverLayer) {
                    var n = t._chartsMap[e.__viewId];
                    n.__alive &&
                      n.eachRendered(function (t) {
                        t.states.emphasis &&
                          (t.states.emphasis.hoverLayer = !0);
                      });
                  }
                });
          }
          function o(t, e) {
            var n = t.get("blendMode") || null;
            e.eachRendered(function (t) {
              t.isGroup || (t.style.blend = n);
            });
          }
          function a(t, e) {
            if (!t.preventAutoZ) {
              var n = t.get("z") || 0,
                r = t.get("zlevel") || 0;
              e.eachRendered(function (t) {
                return s(t, n, r, -1 / 0), !0;
              });
            }
          }
          function s(t, e, n, r) {
            var i = t.getTextContent(),
              o = t.getTextGuideLine(),
              a = t.isGroup;
            if (a)
              for (var l = t.childrenRef(), u = 0; u < l.length; u++)
                r = Math.max(s(l[u], e, n, r), r);
            else (t.z = e), (t.zlevel = n), (r = Math.max(t.z2, r));
            if (
              (i && ((i.z = e), (i.zlevel = n), isFinite(r) && (i.z2 = r + 2)),
              o)
            ) {
              var h = t.textGuideLineConfig;
              (o.z = e),
                (o.zlevel = n),
                isFinite(r) && (o.z2 = r + (h && h.showAbove ? 1 : -1));
            }
            return r;
          }
          function l(t, e) {
            e.eachRendered(function (t) {
              if (!rs(t)) {
                var e = t.getTextContent(),
                  n = t.getTextGuideLine();
                t.stateTransition && (t.stateTransition = null),
                  e && e.stateTransition && (e.stateTransition = null),
                  n && n.stateTransition && (n.stateTransition = null),
                  t.hasState()
                    ? ((t.prevStates = t.currentStates), t.clearStates())
                    : t.prevStates && (t.prevStates = null);
              }
            });
          }
          function u(t, e) {
            var n = t.getModel("stateAnimation"),
              i = t.isAnimationEnabled(),
              o = n.get("duration"),
              a =
                o > 0
                  ? {
                      duration: o,
                      delay: n.get("delay"),
                      easing: n.get("easing"),
                    }
                  : null;
            e.eachRendered(function (t) {
              if (t.states && t.states.emphasis) {
                if (rs(t)) return;
                if ((t instanceof i_ && Ra(t), t.__dirty)) {
                  var e = t.prevStates;
                  e && t.useStates(e);
                }
                if (i) {
                  t.stateTransition = a;
                  var n = t.getTextContent(),
                    o = t.getTextGuideLine();
                  n && (n.stateTransition = a), o && (o.stateTransition = a);
                }
                t.__dirty && r(t);
              }
            });
          }
          (CM = function (t) {
            var e = t._scheduler;
            e.restorePipelines(t._model),
              e.prepareStageTasks(),
              kM(t, !0),
              kM(t, !1),
              e.plan();
          }),
            (kM = function (t, e) {
              function n(t) {
                var n = t.__requireNewView;
                t.__requireNewView = !1;
                var u = "_ec_" + t.id + "_" + t.type,
                  h = !n && a[u];
                if (!h) {
                  var c = Ri(t.type),
                    p = e ? $b.getClass(c.main, c.sub) : tS.getClass(c.sub);
                  (h = new p()),
                    h.init(r, l),
                    (a[u] = h),
                    o.push(h),
                    s.add(h.group);
                }
                (t.__viewId = h.__id = u),
                  (h.__alive = !0),
                  (h.__model = t),
                  (h.group.__ecComponentInfo = {
                    mainType: t.mainType,
                    index: t.componentIndex,
                  }),
                  !e && i.prepareView(h, t, r, l);
              }
              for (
                var r = t._model,
                  i = t._scheduler,
                  o = e ? t._componentsViews : t._chartsViews,
                  a = e ? t._componentsMap : t._chartsMap,
                  s = t._zr,
                  l = t._api,
                  u = 0;
                u < o.length;
                u++
              )
                o[u].__alive = !1;
              e
                ? r.eachComponent(function (t, e) {
                    "series" !== t && n(e);
                  })
                : r.eachSeries(n);
              for (var u = 0; u < o.length; ) {
                var h = o[u];
                h.__alive
                  ? u++
                  : (!e && h.renderTask.dispose(),
                    s.remove(h.group),
                    h.dispose(r, l),
                    o.splice(u, 1),
                    a[h.__id] === h && delete a[h.__id],
                    (h.__id = h.group.__ecComponentInfo = null));
              }
            }),
            (DM = function (t, e, n, r, i) {
              function o(r) {
                r && r.__alive && r[e] && r[e](r.__model, a, t._api, n);
              }
              var a = t._model;
              if ((a.setUpdatePayload(n), !r))
                return void v(
                  [].concat(t._componentsViews).concat(t._chartsViews),
                  o
                );
              var s = {};
              (s[r + "Id"] = n[r + "Id"]),
                (s[r + "Index"] = n[r + "Index"]),
                (s[r + "Name"] = n[r + "Name"]);
              var l = { mainType: r, query: s };
              i && (l.subType = i);
              var u,
                h = n.excludeSeriesId;
              null != h &&
                ((u = q()),
                v(li(h), function (t) {
                  var e = wi(t, null);
                  null != e && u.set(e, !0);
                })),
                a &&
                  a.eachComponent(
                    l,
                    function (e) {
                      var r = u && null !== u.get(e.id);
                      if (!r)
                        if (Oa(n))
                          if (e instanceof Kb)
                            n.type !== R_ ||
                              n.notBlur ||
                              e.get(["emphasis", "disabled"]) ||
                              ya(e, n, t._api);
                          else {
                            var i = ma(
                                e.mainType,
                                e.componentIndex,
                                n.name,
                                t._api
                              ),
                              o = i.focusSelf,
                              a = i.dispatchers;
                            n.type === R_ &&
                              o &&
                              !n.notBlur &&
                              va(e.mainType, e.componentIndex, t._api),
                              a &&
                                v(a, function (t) {
                                  n.type === R_ ? sa(t) : la(t);
                                });
                          }
                        else
                          Pa(n) &&
                            e instanceof Kb &&
                            (wa(e, n, t._api), ba(e), WM(t));
                    },
                    t
                  ),
                a &&
                  a.eachComponent(
                    l,
                    function (e) {
                      var n = u && null !== u.get(e.id);
                      n ||
                        o(
                          t["series" === r ? "_chartsMap" : "_componentsMap"][
                            e.__viewId
                          ]
                        );
                    },
                    t
                  );
            }),
            (IM = {
              prepareAndUpdate: function (t) {
                CM(this),
                  IM.update.call(this, t, {
                    optionChanged: null != t.newOption,
                  });
              },
              update: function (e, n) {
                var r = this._model,
                  i = this._api,
                  o = this._zr,
                  a = this._coordSysMgr,
                  s = this._scheduler;
                if (r) {
                  r.setUpdatePayload(e),
                    s.restoreData(r, e),
                    s.performSeriesTasks(r),
                    a.create(r, i),
                    s.performDataProcessorTasks(r, e),
                    LM(this, r),
                    a.update(r, i),
                    t(r),
                    s.performVisualTasks(r, e),
                    NM(this, r, i, e, n);
                  var l = r.get("backgroundColor") || "transparent",
                    u = r.get("darkMode");
                  o.setBackgroundColor(l),
                    null != u && "auto" !== u && o.setDarkMode(u),
                    jS.trigger("afterupdate", r, i);
                }
              },
              updateTransform: function (e) {
                var n = this,
                  r = this._model,
                  i = this._api;
                if (r) {
                  r.setUpdatePayload(e);
                  var o = [];
                  r.eachComponent(function (t, a) {
                    if ("series" !== t) {
                      var s = n.getViewOfComponentModel(a);
                      if (s && s.__alive)
                        if (s.updateTransform) {
                          var l = s.updateTransform(a, r, i, e);
                          l && l.update && o.push(s);
                        } else o.push(s);
                    }
                  });
                  var a = q();
                  r.eachSeries(function (t) {
                    var o = n._chartsMap[t.__viewId];
                    if (o.updateTransform) {
                      var s = o.updateTransform(t, r, i, e);
                      s && s.update && a.set(t.uid, 1);
                    } else a.set(t.uid, 1);
                  }),
                    t(r),
                    this._scheduler.performVisualTasks(r, e, {
                      setDirty: !0,
                      dirtyMap: a,
                    }),
                    FM(this, r, i, e, {}, a),
                    jS.trigger("afterupdate", r, i);
                }
              },
              updateView: function (e) {
                var n = this._model;
                n &&
                  (n.setUpdatePayload(e),
                  tS.markUpdateMethod(e, "updateView"),
                  t(n),
                  this._scheduler.performVisualTasks(n, e, { setDirty: !0 }),
                  NM(this, n, this._api, e, {}),
                  jS.trigger("afterupdate", n, this._api));
              },
              updateVisual: function (e) {
                var n = this,
                  r = this._model;
                r &&
                  (r.setUpdatePayload(e),
                  r.eachSeries(function (t) {
                    t.getData().clearAllVisual();
                  }),
                  tS.markUpdateMethod(e, "updateVisual"),
                  t(r),
                  this._scheduler.performVisualTasks(r, e, {
                    visualType: "visual",
                    setDirty: !0,
                  }),
                  r.eachComponent(function (t, i) {
                    if ("series" !== t) {
                      var o = n.getViewOfComponentModel(i);
                      o && o.__alive && o.updateVisual(i, r, n._api, e);
                    }
                  }),
                  r.eachSeries(function (t) {
                    var i = n._chartsMap[t.__viewId];
                    i.updateVisual(t, r, n._api, e);
                  }),
                  jS.trigger("afterupdate", r, this._api));
              },
              updateLayout: function (t) {
                IM.update.call(this, t);
              },
            }),
            (AM = function (t, e, n, r) {
              if (!t._disposed)
                for (
                  var i,
                    o = t._model,
                    a = t._coordSysMgr.getCoordinateSystems(),
                    s = Di(o, n),
                    l = 0;
                  l < a.length;
                  l++
                ) {
                  var u = a[l];
                  if (u[e] && null != (i = u[e](o, s, r))) return i;
                }
            }),
            (LM = function (t, e) {
              var n = t._chartsMap,
                r = t._scheduler;
              e.eachSeries(function (t) {
                r.updateStreamModes(t, n[t.__viewId]);
              });
            }),
            (PM = function (t, e) {
              var n = this,
                r = this.getModel(),
                i = t.type,
                o = t.escapeConnect,
                a = YM[i],
                s = a.actionInfo,
                l = (s.update || "update").split(":"),
                u = l.pop(),
                p = null != l[0] && Ri(l[0]);
              this[vM] = !0;
              var f = [t],
                d = !1;
              t.batch &&
                ((d = !0),
                (f = y(t.batch, function (e) {
                  return (e = c(h({}, e), t)), (e.batch = null), e;
                })));
              var g,
                m = [],
                _ = Pa(t),
                x = Oa(t);
              if (
                (x && da(this._api),
                v(f, function (e) {
                  if (
                    ((g = a.action(e, n._model, n._api)),
                    (g = g || h({}, e)),
                    (g.type = s.event || g.type),
                    m.push(g),
                    x)
                  ) {
                    var r = Ii(t),
                      i = r.queryOptionMap,
                      o = r.mainTypeSpecified,
                      l = o ? i.keys()[0] : "series";
                    DM(n, u, e, l), WM(n);
                  } else _ ? (DM(n, u, e, "series"), WM(n)) : p && DM(n, u, e, p.main, p.sub);
                }),
                "none" !== u && !x && !_ && !p)
              )
                try {
                  this[yM]
                    ? (CM(this), IM.update.call(this, t), (this[yM] = null))
                    : IM[u].call(this, t);
                } catch (w) {
                  throw ((this[vM] = !1), w);
                }
              if (
                ((g = d
                  ? { type: s.event || i, escapeConnect: o, batch: m }
                  : m[0]),
                (this[vM] = !1),
                !e)
              ) {
                var b = this._messageCenter;
                if ((b.trigger(g.type, g), _)) {
                  var S = {
                    type: "selectchanged",
                    escapeConnect: o,
                    selected: Sa(r),
                    isFromClick: t.isFromClick || !1,
                    fromAction: t.type,
                    fromActionPayload: t,
                  };
                  b.trigger(S.type, S);
                }
              }
            }),
            (OM = function (t) {
              for (var e = this._pendingActions; e.length; ) {
                var n = e.shift();
                PM.call(this, n, t);
              }
            }),
            (RM = function (t) {
              !t && this.trigger("updated");
            }),
            (EM = function (t, e) {
              t.on("rendered", function (n) {
                e.trigger("rendered", n),
                  !t.animation.isFinished() ||
                    e[yM] ||
                    e._scheduler.unfinished ||
                    e._pendingActions.length ||
                    e.trigger("finished");
              });
            }),
            (BM = function (t, e) {
              t.on("mouseover", function (t) {
                var n = t.target,
                  r = Ah(n, Aa);
                r && (_a(r, t, e._api), WM(e));
              })
                .on("mouseout", function (t) {
                  var n = t.target,
                    r = Ah(n, Aa);
                  r && (xa(r, t, e._api), WM(e));
                })
                .on("click", function (t) {
                  var n = t.target,
                    r = Ah(
                      n,
                      function (t) {
                        return null != w_(t).dataIndex;
                      },
                      !0
                    );
                  if (r) {
                    var i = r.selected ? "unselect" : "select",
                      o = w_(r);
                    e._api.dispatchAction({
                      type: i,
                      dataType: o.dataType,
                      dataIndexInside: o.dataIndex,
                      seriesIndex: o.seriesIndex,
                      isFromClick: !0,
                    });
                  }
                });
            }),
            (NM = function (t, e, r, i, o) {
              n(e),
                zM(t, e, r, i, o),
                v(t._chartsViews, function (t) {
                  t.__alive = !1;
                }),
                FM(t, e, r, i, o),
                v(t._chartsViews, function (t) {
                  t.__alive || t.remove(e, r);
                });
            }),
            (zM = function (t, e, n, r, i, o) {
              v(o || t._componentsViews, function (t) {
                var i = t.__model;
                l(i, t), t.render(i, e, n, r), a(i, t), u(i, t);
              });
            }),
            (FM = function (t, e, n, r, s, c) {
              var p = t._scheduler;
              (s = h(s || {}, { updatedSeries: e.getSeries() })),
                jS.trigger("series:beforeupdate", e, n, s);
              var f = !1;
              e.eachSeries(function (e) {
                var n = t._chartsMap[e.__viewId];
                n.__alive = !0;
                var i = n.renderTask;
                p.updatePayload(i, r),
                  l(e, n),
                  c && c.get(e.uid) && i.dirty(),
                  i.perform(p.getPerformArgs(i)) && (f = !0),
                  (n.group.silent = !!e.get("silent")),
                  o(e, n),
                  ba(e);
              }),
                (p.unfinished = f || p.unfinished),
                jS.trigger("series:layoutlabels", e, n, s),
                jS.trigger("series:transition", e, n, s),
                e.eachSeries(function (e) {
                  var n = t._chartsMap[e.__viewId];
                  a(e, n), u(e, n);
                }),
                i(t, e),
                jS.trigger("series:afterupdate", e, n, s);
            }),
            (WM = function (t) {
              (t[mM] = !0), t.getZr().wakeUp();
            }),
            (GM = function (t) {
              t[mM] &&
                (t.getZr().storage.traverse(function (t) {
                  rs(t) || r(t);
                }),
                (t[mM] = !1));
            }),
            (VM = function (t) {
              return new ((function (n) {
                function r() {
                  return (null !== n && n.apply(this, arguments)) || this;
                }
                return (
                  e(r, n),
                  (r.prototype.getCoordinateSystems = function () {
                    return t._coordSysMgr.getCoordinateSystems();
                  }),
                  (r.prototype.getComponentByElement = function (e) {
                    for (; e; ) {
                      var n = e.__ecComponentInfo;
                      if (null != n)
                        return t._model.getComponent(n.mainType, n.index);
                      e = e.parent;
                    }
                  }),
                  (r.prototype.enterEmphasis = function (e, n) {
                    sa(e, n), WM(t);
                  }),
                  (r.prototype.leaveEmphasis = function (e, n) {
                    la(e, n), WM(t);
                  }),
                  (r.prototype.enterBlur = function (e) {
                    ua(e), WM(t);
                  }),
                  (r.prototype.leaveBlur = function (e) {
                    ha(e), WM(t);
                  }),
                  (r.prototype.enterSelect = function (e) {
                    ca(e), WM(t);
                  }),
                  (r.prototype.leaveSelect = function (e) {
                    pa(e), WM(t);
                  }),
                  (r.prototype.getModel = function () {
                    return t.getModel();
                  }),
                  (r.prototype.getViewOfComponentModel = function (e) {
                    return t.getViewOfComponentModel(e);
                  }),
                  (r.prototype.getViewOfSeriesModel = function (e) {
                    return t.getViewOfSeriesModel(e);
                  }),
                  r
                );
              })(db))(t);
            }),
            (HM = function (t) {
              function e(t, e) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  r[xM] = e;
                }
              }
              v(jM, function (n, r) {
                t._messageCenter.on(r, function (n) {
                  if (eT[t.group] && t[xM] !== wM) {
                    if (n && n.escapeConnect) return;
                    var r = t.makeActionFromEvent(n),
                      i = [];
                    v(tT, function (e) {
                      e !== t && e.group === t.group && i.push(e);
                    }),
                      e(i, wM),
                      v(i, function (t) {
                        t[xM] !== bM && t.dispatchAction(r);
                      }),
                      e(i, SM);
                  }
                });
              });
            });
        })()),
        n
      );
    })(Zg),
    XM = UM.prototype;
  (XM.on = mc("on")),
    (XM.off = mc("off")),
    (XM.one = function (t, e, n) {
      function r() {
        for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
        e && e.apply && e.apply(this, n), i.off(t, r);
      }
      var i = this;
      this.on.call(this, t, r, n);
    });
  var qM = [
      "click",
      "dblclick",
      "mouseover",
      "mouseout",
      "mousemove",
      "mousedown",
      "mouseup",
      "globalout",
      "contextmenu",
    ],
    YM = {},
    jM = {},
    ZM = [],
    KM = [],
    $M = [],
    QM = {},
    JM = {},
    tT = {},
    eT = {},
    nT = +new Date() - 0,
    rT = +new Date() - 0,
    iT = "_echarts_instance_",
    oT = Sc,
    aT = [],
    sT = Nu;
  Nc(sM, aS),
    Nc(hM, lS),
    Nc(hM, uS),
    Nc(sM, TS),
    Nc(hM, CS),
    Nc(dM, gc),
    Dc(pu),
    Ic(eM, fu),
    Fc("default", gh),
    Oc({ type: R_, event: R_, update: R_ }, $),
    Oc({ type: E_, event: E_, update: E_ }, $),
    Oc({ type: B_, event: B_, update: B_ }, $),
    Oc({ type: N_, event: N_, update: N_ }, $),
    Oc({ type: z_, event: z_, update: z_ }, $),
    kc("light", vS),
    kc("dark", wS);
  var lT,
    uT,
    hT,
    cT,
    pT,
    fT,
    dT,
    gT = {},
    vT = (function () {
      function t(t, e, n, r, i, o) {
        (this._old = t),
          (this._new = e),
          (this._oldKeyGetter = n || Uc),
          (this._newKeyGetter = r || Uc),
          (this.context = i),
          (this._diffModeMultiple = "multiple" === o);
      }
      return (
        (t.prototype.add = function (t) {
          return (this._add = t), this;
        }),
        (t.prototype.update = function (t) {
          return (this._update = t), this;
        }),
        (t.prototype.updateManyToOne = function (t) {
          return (this._updateManyToOne = t), this;
        }),
        (t.prototype.updateOneToMany = function (t) {
          return (this._updateOneToMany = t), this;
        }),
        (t.prototype.updateManyToMany = function (t) {
          return (this._updateManyToMany = t), this;
        }),
        (t.prototype.remove = function (t) {
          return (this._remove = t), this;
        }),
        (t.prototype.execute = function () {
          this[
            this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"
          ]();
        }),
        (t.prototype._executeOneToOne = function () {
          var t = this._old,
            e = this._new,
            n = {},
            r = new Array(t.length),
            i = new Array(e.length);
          this._initIndexMap(t, null, r, "_oldKeyGetter"),
            this._initIndexMap(e, n, i, "_newKeyGetter");
          for (var o = 0; o < t.length; o++) {
            var a = r[o],
              s = n[a],
              l = Gc(s);
            if (l > 1) {
              var u = s.shift();
              1 === s.length && (n[a] = s[0]),
                this._update && this._update(u, o);
            } else
              1 === l
                ? ((n[a] = null), this._update && this._update(s, o))
                : this._remove && this._remove(o);
          }
          this._performRestAdd(i, n);
        }),
        (t.prototype._executeMultiple = function () {
          var t = this._old,
            e = this._new,
            n = {},
            r = {},
            i = [],
            o = [];
          this._initIndexMap(t, n, i, "_oldKeyGetter"),
            this._initIndexMap(e, r, o, "_newKeyGetter");
          for (var a = 0; a < i.length; a++) {
            var s = i[a],
              l = n[s],
              u = r[s],
              h = Gc(l),
              c = Gc(u);
            if (h > 1 && 1 === c)
              this._updateManyToOne && this._updateManyToOne(u, l),
                (r[s] = null);
            else if (1 === h && c > 1)
              this._updateOneToMany && this._updateOneToMany(u, l),
                (r[s] = null);
            else if (1 === h && 1 === c)
              this._update && this._update(u, l), (r[s] = null);
            else if (h > 1 && c > 1)
              this._updateManyToMany && this._updateManyToMany(u, l),
                (r[s] = null);
            else if (h > 1)
              for (var p = 0; h > p; p++) this._remove && this._remove(l[p]);
            else this._remove && this._remove(l);
          }
          this._performRestAdd(o, r);
        }),
        (t.prototype._performRestAdd = function (t, e) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n],
              i = e[r],
              o = Gc(i);
            if (o > 1) for (var a = 0; o > a; a++) this._add && this._add(i[a]);
            else 1 === o && this._add && this._add(i);
            e[r] = null;
          }
        }),
        (t.prototype._initIndexMap = function (t, e, n, r) {
          for (var i = this._diffModeMultiple, o = 0; o < t.length; o++) {
            var a = "_ec_" + this[r](t[o], o);
            if ((i || (n[o] = a), e)) {
              var s = e[a],
                l = Gc(s);
              0 === l
                ? ((e[a] = o), i && n.push(a))
                : 1 === l
                ? (e[a] = [s, o])
                : s.push(o);
            }
          }
        }),
        t
      );
    })(),
    yT = (function () {
      function t(t, e) {
        (this._encode = t), (this._schema = e);
      }
      return (
        (t.prototype.get = function () {
          return {
            fullDimensions: this._getFullDimensionNames(),
            encode: this._encode,
          };
        }),
        (t.prototype._getFullDimensionNames = function () {
          return (
            this._cachedDimNames ||
              (this._cachedDimNames = this._schema
                ? this._schema.makeOutputDimensionNames()
                : []),
            this._cachedDimNames
          );
        }),
        t
      );
    })(),
    mT = (function () {
      function t(t) {
        (this.otherDims = {}), null != t && h(this, t);
      }
      return t;
    })(),
    _T = ki(),
    xT = { float: "f", int: "i", ordinal: "o", number: "n", time: "t" },
    wT = (function () {
      function t(t) {
        (this.dimensions = t.dimensions),
          (this._dimOmitted = t.dimensionOmitted),
          (this.source = t.source),
          (this._fullDimCount = t.fullDimensionCount),
          this._updateDimOmitted(t.dimensionOmitted);
      }
      return (
        (t.prototype.isDimensionOmitted = function () {
          return this._dimOmitted;
        }),
        (t.prototype._updateDimOmitted = function (t) {
          (this._dimOmitted = t),
            t && (this._dimNameMap || (this._dimNameMap = $c(this.source)));
        }),
        (t.prototype.getSourceDimensionIndex = function (t) {
          return z(this._dimNameMap.get(t), -1);
        }),
        (t.prototype.getSourceDimension = function (t) {
          var e = this.source.dimensionsDefine;
          return e ? e[t] : void 0;
        }),
        (t.prototype.makeStoreSchema = function () {
          for (
            var t = this._fullDimCount,
              e = Mu(this.source),
              n = !Qc(t),
              r = "",
              i = [],
              o = 0,
              a = 0;
            t > o;
            o++
          ) {
            var s = void 0,
              l = void 0,
              u = void 0,
              h = this.dimensions[a];
            if (h && h.storeDimIndex === o)
              (s = e ? h.name : null), (l = h.type), (u = h.ordinalMeta), a++;
            else {
              var c = this.getSourceDimension(o);
              c && ((s = e ? c.name : null), (l = c.type));
            }
            i.push({ property: s, type: l, ordinalMeta: u }),
              !e ||
                null == s ||
                (h && h.isCalculationCoord) ||
                (r += n ? s.replace(/\`/g, "`1").replace(/\$/g, "`2") : s),
              (r += "$"),
              (r += xT[l] || "f"),
              u && (r += u.uid),
              (r += "$");
          }
          var p = this.source,
            f = [p.seriesLayoutBy, p.startIndex, r].join("$$");
          return { dimensions: i, hash: f };
        }),
        (t.prototype.makeOutputDimensionNames = function () {
          for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
            var r = void 0,
              i = this.dimensions[n];
            if (i && i.storeDimIndex === e)
              i.isCalculationCoord || (r = i.name), n++;
            else {
              var o = this.getSourceDimension(e);
              o && (r = o.name);
            }
            t.push(r);
          }
          return t;
        }),
        (t.prototype.appendCalculationDimension = function (t) {
          this.dimensions.push(t),
            (t.isCalculationCoord = !0),
            this._fullDimCount++,
            this._updateDimOmitted(!0);
        }),
        t
      );
    })(),
    bT = I,
    ST = y,
    MT = "undefined" == typeof Int32Array ? Array : Int32Array,
    TT = "e\x00\x00",
    CT = -1,
    kT = [
      "hasItemOption",
      "_nameList",
      "_idList",
      "_invertedIndicesMap",
      "_dimSummary",
      "userOutput",
      "_rawData",
      "_dimValueGetter",
      "_nameDimIdx",
      "_idDimIdx",
      "_nameRepeatCount",
    ],
    DT = ["_approximateExtent"],
    IT = (function () {
      function t(t, e) {
        (this.type = "list"),
          (this._dimOmitted = !1),
          (this._nameList = []),
          (this._idList = []),
          (this._visual = {}),
          (this._layout = {}),
          (this._itemVisuals = []),
          (this._itemLayouts = []),
          (this._graphicEls = []),
          (this._approximateExtent = {}),
          (this._calculationInfo = {}),
          (this.hasItemOption = !1),
          (this.TRANSFERABLE_METHODS = [
            "cloneShallow",
            "downSample",
            "lttbDownSample",
            "map",
          ]),
          (this.CHANGABLE_METHODS = ["filterSelf", "selectRange"]),
          (this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"]);
        var n,
          r = !1;
        Zc(t)
          ? ((n = t.dimensions),
            (this._dimOmitted = t.isDimensionOmitted()),
            (this._schema = t))
          : ((r = !0), (n = t)),
          (n = n || ["x", "y"]);
        for (
          var i = {}, o = [], a = {}, s = !1, l = {}, u = 0;
          u < n.length;
          u++
        ) {
          var h = n[u],
            c = C(h) ? new mT({ name: h }) : h instanceof mT ? h : new mT(h),
            p = c.name;
          (c.type = c.type || "float"),
            c.coordDim || ((c.coordDim = p), (c.coordDimIndex = 0));
          var f = (c.otherDims = c.otherDims || {});
          o.push(p),
            (i[p] = c),
            null != l[p] && (s = !0),
            c.createInvertedIndices && (a[p] = []),
            0 === f.itemName && (this._nameDimIdx = u),
            0 === f.itemId && (this._idDimIdx = u),
            r && (c.storeDimIndex = u);
        }
        if (
          ((this.dimensions = o),
          (this._dimInfos = i),
          this._initGetDimensionInfo(s),
          (this.hostModel = e),
          (this._invertedIndicesMap = a),
          this._dimOmitted)
        ) {
          var d = (this._dimIdxToName = q());
          v(o, function (t) {
            d.set(i[t].storeDimIndex, t);
          });
        }
      }
      return (
        (t.prototype.getDimension = function (t) {
          var e = this._recognizeDimIndex(t);
          if (null == e) return t;
          if (((e = t), !this._dimOmitted)) return this.dimensions[e];
          var n = this._dimIdxToName.get(e);
          if (null != n) return n;
          var r = this._schema.getSourceDimension(e);
          return r ? r.name : void 0;
        }),
        (t.prototype.getDimensionIndex = function (t) {
          var e = this._recognizeDimIndex(t);
          if (null != e) return e;
          if (null == t) return -1;
          var n = this._getDimInfo(t);
          return n
            ? n.storeDimIndex
            : this._dimOmitted
            ? this._schema.getSourceDimensionIndex(t)
            : -1;
        }),
        (t.prototype._recognizeDimIndex = function (t) {
          return D(t) ||
            (null != t &&
              !isNaN(t) &&
              !this._getDimInfo(t) &&
              (!this._dimOmitted ||
                this._schema.getSourceDimensionIndex(t) < 0))
            ? +t
            : void 0;
        }),
        (t.prototype._getStoreDimIndex = function (t) {
          var e = this.getDimensionIndex(t);
          return e;
        }),
        (t.prototype.getDimensionInfo = function (t) {
          return this._getDimInfo(this.getDimension(t));
        }),
        (t.prototype._initGetDimensionInfo = function (t) {
          var e = this._dimInfos;
          this._getDimInfo = t
            ? function (t) {
                return e.hasOwnProperty(t) ? e[t] : void 0;
              }
            : function (t) {
                return e[t];
              };
        }),
        (t.prototype.getDimensionsOnCoord = function () {
          return this._dimSummary.dataDimsOnCoord.slice();
        }),
        (t.prototype.mapDimension = function (t, e) {
          var n = this._dimSummary;
          if (null == e) return n.encodeFirstDimNotExtra[t];
          var r = n.encode[t];
          return r ? r[e] : null;
        }),
        (t.prototype.mapDimensionsAll = function (t) {
          var e = this._dimSummary,
            n = e.encode[t];
          return (n || []).slice();
        }),
        (t.prototype.getStore = function () {
          return this._store;
        }),
        (t.prototype.initData = function (t, e, n) {
          var r,
            i = this;
          if ((t instanceof qb && (r = t), !r)) {
            var o = this.dimensions,
              a = gu(t) || g(t) ? new Cb(t, o.length) : t;
            r = new qb();
            var s = ST(o, function (t) {
              return { type: i._dimInfos[t].type, property: t };
            });
            r.initData(a, s, n);
          }
          (this._store = r),
            (this._nameList = (e || []).slice()),
            (this._idList = []),
            (this._nameRepeatCount = {}),
            this._doInit(0, r.count()),
            (this._dimSummary = Xc(this, this._schema)),
            (this.userOutput = this._dimSummary.userOutput);
        }),
        (t.prototype.appendData = function (t) {
          var e = this._store.appendData(t);
          this._doInit(e[0], e[1]);
        }),
        (t.prototype.appendValues = function (t, e) {
          var n = this._store.appendValues(t, e.length),
            r = n.start,
            i = n.end,
            o = this._shouldMakeIdFromName();
          if ((this._updateOrdinalMeta(), e))
            for (var a = r; i > a; a++) {
              var s = a - r;
              (this._nameList[a] = e[s]), o && dT(this, a);
            }
        }),
        (t.prototype._updateOrdinalMeta = function () {
          for (
            var t = this._store, e = this.dimensions, n = 0;
            n < e.length;
            n++
          ) {
            var r = this._dimInfos[e[n]];
            r.ordinalMeta &&
              t.collectOrdinalMeta(r.storeDimIndex, r.ordinalMeta);
          }
        }),
        (t.prototype._shouldMakeIdFromName = function () {
          var t = this._store.getProvider();
          return (
            null == this._idDimIdx &&
            t.getSource().sourceFormat !== Zw &&
            !t.fillStorage
          );
        }),
        (t.prototype._doInit = function (t, e) {
          if (!(t >= e)) {
            var n = this._store,
              r = n.getProvider();
            this._updateOrdinalMeta();
            var i = this._nameList,
              o = this._idList,
              a = r.getSource().sourceFormat,
              s = a === Xw;
            if (s && !r.pure)
              for (var l = [], u = t; e > u; u++) {
                var h = r.getItem(u, l);
                if (
                  (!this.hasItemOption && ci(h) && (this.hasItemOption = !0), h)
                ) {
                  var c = h.name;
                  null == i[u] && null != c && (i[u] = wi(c, null));
                  var p = h.id;
                  null == o[u] && null != p && (o[u] = wi(p, null));
                }
              }
            if (this._shouldMakeIdFromName())
              for (var u = t; e > u; u++) dT(this, u);
            lT(this);
          }
        }),
        (t.prototype.getApproximateExtent = function (t) {
          return (
            this._approximateExtent[t] ||
            this._store.getDataExtent(this._getStoreDimIndex(t))
          );
        }),
        (t.prototype.setApproximateExtent = function (t, e) {
          (e = this.getDimension(e)), (this._approximateExtent[e] = t.slice());
        }),
        (t.prototype.getCalculationInfo = function (t) {
          return this._calculationInfo[t];
        }),
        (t.prototype.setCalculationInfo = function (t, e) {
          bT(t) ? h(this._calculationInfo, t) : (this._calculationInfo[t] = e);
        }),
        (t.prototype.getName = function (t) {
          var e = this.getRawIndex(t),
            n = this._nameList[e];
          return (
            null == n &&
              null != this._nameDimIdx &&
              (n = hT(this, this._nameDimIdx, e)),
            null == n && (n = ""),
            n
          );
        }),
        (t.prototype._getCategory = function (t, e) {
          var n = this._store.get(t, e),
            r = this._store.getOrdinalMeta(t);
          return r ? r.categories[n] : n;
        }),
        (t.prototype.getId = function (t) {
          return uT(this, this.getRawIndex(t));
        }),
        (t.prototype.count = function () {
          return this._store.count();
        }),
        (t.prototype.get = function (t, e) {
          var n = this._store,
            r = this._dimInfos[t];
          return r ? n.get(r.storeDimIndex, e) : void 0;
        }),
        (t.prototype.getByRawIndex = function (t, e) {
          var n = this._store,
            r = this._dimInfos[t];
          return r ? n.getByRawIndex(r.storeDimIndex, e) : void 0;
        }),
        (t.prototype.getIndices = function () {
          return this._store.getIndices();
        }),
        (t.prototype.getDataExtent = function (t) {
          return this._store.getDataExtent(this._getStoreDimIndex(t));
        }),
        (t.prototype.getSum = function (t) {
          return this._store.getSum(this._getStoreDimIndex(t));
        }),
        (t.prototype.getMedian = function (t) {
          return this._store.getMedian(this._getStoreDimIndex(t));
        }),
        (t.prototype.getValues = function (t, e) {
          var n = this,
            r = this._store;
          return M(t)
            ? r.getValues(
                ST(t, function (t) {
                  return n._getStoreDimIndex(t);
                }),
                e
              )
            : r.getValues(t);
        }),
        (t.prototype.hasValue = function (t) {
          for (
            var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, r = e.length;
            r > n;
            n++
          )
            if (isNaN(this._store.get(e[n], t))) return !1;
          return !0;
        }),
        (t.prototype.indexOfName = function (t) {
          for (var e = 0, n = this._store.count(); n > e; e++)
            if (this.getName(e) === t) return e;
          return -1;
        }),
        (t.prototype.getRawIndex = function (t) {
          return this._store.getRawIndex(t);
        }),
        (t.prototype.indexOfRawIndex = function (t) {
          return this._store.indexOfRawIndex(t);
        }),
        (t.prototype.rawIndexOf = function (t, e) {
          var n = t && this._invertedIndicesMap[t],
            r = n[e];
          return null == r || isNaN(r) ? CT : r;
        }),
        (t.prototype.indicesOfNearest = function (t, e, n) {
          return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n);
        }),
        (t.prototype.each = function (t, e, n) {
          T(t) && ((n = e), (e = t), (t = []));
          var r = n || this,
            i = ST(cT(t), this._getStoreDimIndex, this);
          this._store.each(i, r ? Ng(e, r) : e);
        }),
        (t.prototype.filterSelf = function (t, e, n) {
          T(t) && ((n = e), (e = t), (t = []));
          var r = n || this,
            i = ST(cT(t), this._getStoreDimIndex, this);
          return (this._store = this._store.filter(i, r ? Ng(e, r) : e)), this;
        }),
        (t.prototype.selectRange = function (t) {
          var e = this,
            n = {},
            r = w(t),
            i = [];
          return (
            v(r, function (r) {
              var o = e._getStoreDimIndex(r);
              (n[o] = t[r]), i.push(o);
            }),
            (this._store = this._store.selectRange(n)),
            this
          );
        }),
        (t.prototype.mapArray = function (t, e, n) {
          T(t) && ((n = e), (e = t), (t = [])), (n = n || this);
          var r = [];
          return (
            this.each(
              t,
              function () {
                r.push(e && e.apply(this, arguments));
              },
              n
            ),
            r
          );
        }),
        (t.prototype.map = function (t, e, n, r) {
          var i = n || r || this,
            o = ST(cT(t), this._getStoreDimIndex, this),
            a = fT(this);
          return (a._store = this._store.map(o, i ? Ng(e, i) : e)), a;
        }),
        (t.prototype.modify = function (t, e, n, r) {
          var i = n || r || this,
            o = ST(cT(t), this._getStoreDimIndex, this);
          this._store.modify(o, i ? Ng(e, i) : e);
        }),
        (t.prototype.downSample = function (t, e, n, r) {
          var i = fT(this);
          return (
            (i._store = this._store.downSample(
              this._getStoreDimIndex(t),
              e,
              n,
              r
            )),
            i
          );
        }),
        (t.prototype.lttbDownSample = function (t, e) {
          var n = fT(this);
          return (
            (n._store = this._store.lttbDownSample(
              this._getStoreDimIndex(t),
              e
            )),
            n
          );
        }),
        (t.prototype.getRawDataItem = function (t) {
          return this._store.getRawDataItem(t);
        }),
        (t.prototype.getItemModel = function (t) {
          var e = this.hostModel,
            n = this.getRawDataItem(t);
          return new uw(n, e, e && e.ecModel);
        }),
        (t.prototype.diff = function (t) {
          var e = this;
          return new vT(
            t ? t.getStore().getIndices() : [],
            this.getStore().getIndices(),
            function (e) {
              return uT(t, e);
            },
            function (t) {
              return uT(e, t);
            }
          );
        }),
        (t.prototype.getVisual = function (t) {
          var e = this._visual;
          return e && e[t];
        }),
        (t.prototype.setVisual = function (t, e) {
          (this._visual = this._visual || {}),
            bT(t) ? h(this._visual, t) : (this._visual[t] = e);
        }),
        (t.prototype.getItemVisual = function (t, e) {
          var n = this._itemVisuals[t],
            r = n && n[e];
          return null == r ? this.getVisual(e) : r;
        }),
        (t.prototype.hasItemVisual = function () {
          return this._itemVisuals.length > 0;
        }),
        (t.prototype.ensureUniqueItemVisual = function (t, e) {
          var n = this._itemVisuals,
            r = n[t];
          r || (r = n[t] = {});
          var i = r[e];
          return (
            null == i &&
              ((i = this.getVisual(e)),
              M(i) ? (i = i.slice()) : bT(i) && (i = h({}, i)),
              (r[e] = i)),
            i
          );
        }),
        (t.prototype.setItemVisual = function (t, e, n) {
          var r = this._itemVisuals[t] || {};
          (this._itemVisuals[t] = r), bT(e) ? h(r, e) : (r[e] = n);
        }),
        (t.prototype.clearAllVisual = function () {
          (this._visual = {}), (this._itemVisuals = []);
        }),
        (t.prototype.setLayout = function (t, e) {
          bT(t) ? h(this._layout, t) : (this._layout[t] = e);
        }),
        (t.prototype.getLayout = function (t) {
          return this._layout[t];
        }),
        (t.prototype.getItemLayout = function (t) {
          return this._itemLayouts[t];
        }),
        (t.prototype.setItemLayout = function (t, e, n) {
          this._itemLayouts[t] = n ? h(this._itemLayouts[t] || {}, e) : e;
        }),
        (t.prototype.clearItemLayouts = function () {
          this._itemLayouts.length = 0;
        }),
        (t.prototype.setItemGraphicEl = function (t, e) {
          var n = this.hostModel && this.hostModel.seriesIndex;
          b_(n, this.dataType, t, e), (this._graphicEls[t] = e);
        }),
        (t.prototype.getItemGraphicEl = function (t) {
          return this._graphicEls[t];
        }),
        (t.prototype.eachItemGraphicEl = function (t, e) {
          v(this._graphicEls, function (n, r) {
            n && t && t.call(e, n, r);
          });
        }),
        (t.prototype.cloneShallow = function (e) {
          return (
            e ||
              (e = new t(
                this._schema
                  ? this._schema
                  : ST(this.dimensions, this._getDimInfo, this),
                this.hostModel
              )),
            pT(e, this),
            (e._store = this._store),
            e
          );
        }),
        (t.prototype.wrapMethod = function (t, e) {
          var n = this[t];
          T(n) &&
            ((this.__wrappedMethods = this.__wrappedMethods || []),
            this.__wrappedMethods.push(t),
            (this[t] = function () {
              var t = n.apply(this, arguments);
              return e.apply(this, [t].concat(V(arguments)));
            }));
        }),
        (t.internalField = (function () {
          (lT = function (t) {
            var e = t._invertedIndicesMap;
            v(e, function (n, r) {
              var i = t._dimInfos[r],
                o = i.ordinalMeta,
                a = t._store;
              if (o) {
                n = e[r] = new MT(o.categories.length);
                for (var s = 0; s < n.length; s++) n[s] = CT;
                for (var s = 0; s < a.count(); s++)
                  n[a.get(i.storeDimIndex, s)] = s;
              }
            });
          }),
            (hT = function (t, e, n) {
              return wi(t._getCategory(e, n), null);
            }),
            (uT = function (t, e) {
              var n = t._idList[e];
              return (
                null == n && null != t._idDimIdx && (n = hT(t, t._idDimIdx, e)),
                null == n && (n = TT + e),
                n
              );
            }),
            (cT = function (t) {
              return M(t) || (t = null != t ? [t] : []), t;
            }),
            (fT = function (e) {
              var n = new t(
                e._schema ? e._schema : ST(e.dimensions, e._getDimInfo, e),
                e.hostModel
              );
              return pT(n, e), n;
            }),
            (pT = function (t, e) {
              v(kT.concat(e.__wrappedMethods || []), function (n) {
                e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
                (t.__wrappedMethods = e.__wrappedMethods),
                v(DT, function (n) {
                  t[n] = s(e[n]);
                }),
                (t._calculationInfo = h({}, e._calculationInfo));
            }),
            (dT = function (t, e) {
              var n = t._nameList,
                r = t._idList,
                i = t._nameDimIdx,
                o = t._idDimIdx,
                a = n[e],
                s = r[e];
              if (
                (null == a && null != i && (n[e] = a = hT(t, i, e)),
                null == s && null != o && (r[e] = s = hT(t, o, e)),
                null == s && null != a)
              ) {
                var l = t._nameRepeatCount,
                  u = (l[a] = (l[a] || 0) + 1);
                (s = a), u > 1 && (s += "__ec__" + u), (r[e] = s);
              }
            });
        })()),
        t
      );
    })(),
    AT = (function () {
      function t(t) {
        (this.coordSysDims = []),
          (this.axisMap = q()),
          (this.categoryAxisMap = q()),
          (this.coordSysName = t);
      }
      return t;
    })(),
    LT = {
      cartesian2d: function (t, e, n, r) {
        var i = t.getReferringComponents("xAxis", Jy).models[0],
          o = t.getReferringComponents("yAxis", Jy).models[0];
        (e.coordSysDims = ["x", "y"]),
          n.set("x", i),
          n.set("y", o),
          op(i) && (r.set("x", i), (e.firstCategoryDimIndex = 0)),
          op(o) &&
            (r.set("y", o),
            null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1));
      },
      singleAxis: function (t, e, n, r) {
        var i = t.getReferringComponents("singleAxis", Jy).models[0];
        (e.coordSysDims = ["single"]),
          n.set("single", i),
          op(i) && (r.set("single", i), (e.firstCategoryDimIndex = 0));
      },
      polar: function (t, e, n, r) {
        var i = t.getReferringComponents("polar", Jy).models[0],
          o = i.findAxisModel("radiusAxis"),
          a = i.findAxisModel("angleAxis");
        (e.coordSysDims = ["radius", "angle"]),
          n.set("radius", o),
          n.set("angle", a),
          op(o) && (r.set("radius", o), (e.firstCategoryDimIndex = 0)),
          op(a) &&
            (r.set("angle", a),
            null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1));
      },
      geo: function (t, e) {
        e.coordSysDims = ["lng", "lat"];
      },
      parallel: function (t, e, n, r) {
        var i = t.ecModel,
          o = i.getComponent("parallel", t.get("parallelIndex")),
          a = (e.coordSysDims = o.dimensions.slice());
        v(o.parallelAxisIndex, function (t, o) {
          var s = i.getComponent("parallelAxis", t),
            l = a[o];
          n.set(l, s),
            op(s) &&
              (r.set(l, s),
              null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = o));
        });
      },
    },
    PT = (function () {
      function t(t) {
        (this._setting = t || {}), (this._extent = [1 / 0, -1 / 0]);
      }
      return (
        (t.prototype.getSetting = function (t) {
          return this._setting[t];
        }),
        (t.prototype.unionExtent = function (t) {
          var e = this._extent;
          t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
        }),
        (t.prototype.unionExtentFromData = function (t, e) {
          this.unionExtent(t.getApproximateExtent(e));
        }),
        (t.prototype.getExtent = function () {
          return this._extent.slice();
        }),
        (t.prototype.setExtent = function (t, e) {
          var n = this._extent;
          isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
        }),
        (t.prototype.isInExtentRange = function (t) {
          return this._extent[0] <= t && this._extent[1] >= t;
        }),
        (t.prototype.isBlank = function () {
          return this._isBlank;
        }),
        (t.prototype.setBlank = function (t) {
          this._isBlank = t;
        }),
        t
      );
    })();
  Gi(PT);
  var OT = 0,
    RT = (function () {
      function t(t) {
        (this.categories = t.categories || []),
          (this._needCollect = t.needCollect),
          (this._deduplication = t.deduplication),
          (this.uid = ++OT);
      }
      return (
        (t.createByAxisModel = function (e) {
          var n = e.option,
            r = n.data,
            i = r && y(r, gp);
          return new t({
            categories: i,
            needCollect: !i,
            deduplication: n.dedplication !== !1,
          });
        }),
        (t.prototype.getOrdinal = function (t) {
          return this._getOrCreateMap().get(t);
        }),
        (t.prototype.parseAndCollect = function (t) {
          var e,
            n = this._needCollect;
          if (!C(t) && !n) return t;
          if (n && !this._deduplication)
            return (e = this.categories.length), (this.categories[e] = t), e;
          var r = this._getOrCreateMap();
          return (
            (e = r.get(t)),
            null == e &&
              (n
                ? ((e = this.categories.length),
                  (this.categories[e] = t),
                  r.set(t, e))
                : (e = 0 / 0)),
            e
          );
        }),
        (t.prototype._getOrCreateMap = function () {
          return this._map || (this._map = q(this.categories));
        }),
        t
      );
    })(),
    ET = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        n.type = "ordinal";
        var r = n.getSetting("ordinalMeta");
        return (
          r || (r = new RT({})),
          M(r) &&
            (r = new RT({
              categories: y(r, function (t) {
                return I(t) ? t.value : t;
              }),
            })),
          (n._ordinalMeta = r),
          (n._extent = n.getSetting("extent") || [0, r.categories.length - 1]),
          n
        );
      }
      return (
        e(n, t),
        (n.prototype.parse = function (t) {
          return C(t) ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
        }),
        (n.prototype.contain = function (t) {
          return (
            (t = this.parse(t)),
            bp(t, this._extent) && null != this._ordinalMeta.categories[t]
          );
        }),
        (n.prototype.normalize = function (t) {
          return (t = this._getTickNumber(this.parse(t))), Sp(t, this._extent);
        }),
        (n.prototype.scale = function (t) {
          return (
            (t = Math.round(Mp(t, this._extent))), this.getRawOrdinalNumber(t)
          );
        }),
        (n.prototype.getTicks = function () {
          for (var t = [], e = this._extent, n = e[0]; n <= e[1]; )
            t.push({ value: n }), n++;
          return t;
        }),
        (n.prototype.getMinorTicks = function () {}),
        (n.prototype.setSortInfo = function (t) {
          if (null == t)
            return void (this._ordinalNumbersByTick =
              this._ticksByOrdinalNumber =
                null);
          for (
            var e = t.ordinalNumbers,
              n = (this._ordinalNumbersByTick = []),
              r = (this._ticksByOrdinalNumber = []),
              i = 0,
              o = this._ordinalMeta.categories.length,
              a = Math.min(o, e.length);
            a > i;
            ++i
          ) {
            var s = e[i];
            (n[i] = s), (r[s] = i);
          }
          for (var l = 0; o > i; ++i) {
            for (; null != r[l]; ) l++;
            n.push(l), (r[l] = i);
          }
        }),
        (n.prototype._getTickNumber = function (t) {
          var e = this._ticksByOrdinalNumber;
          return e && t >= 0 && t < e.length ? e[t] : t;
        }),
        (n.prototype.getRawOrdinalNumber = function (t) {
          var e = this._ordinalNumbersByTick;
          return e && t >= 0 && t < e.length ? e[t] : t;
        }),
        (n.prototype.getLabel = function (t) {
          if (!this.isBlank()) {
            var e = this.getRawOrdinalNumber(t.value),
              n = this._ordinalMeta.categories[e];
            return null == n ? "" : n + "";
          }
        }),
        (n.prototype.count = function () {
          return this._extent[1] - this._extent[0] + 1;
        }),
        (n.prototype.unionExtentFromData = function (t, e) {
          this.unionExtent(t.getApproximateExtent(e));
        }),
        (n.prototype.isInExtentRange = function (t) {
          return (
            (t = this._getTickNumber(t)),
            this._extent[0] <= t && this._extent[1] >= t
          );
        }),
        (n.prototype.getOrdinalMeta = function () {
          return this._ordinalMeta;
        }),
        (n.prototype.calcNiceTicks = function () {}),
        (n.prototype.calcNiceExtent = function () {}),
        (n.type = "ordinal"),
        n
      );
    })(PT);
  PT.registerClass(ET);
  var BT = Vr,
    NT = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (
          (e.type = "interval"),
          (e._interval = 0),
          (e._intervalPrecision = 2),
          e
        );
      }
      return (
        e(n, t),
        (n.prototype.parse = function (t) {
          return t;
        }),
        (n.prototype.contain = function (t) {
          return bp(t, this._extent);
        }),
        (n.prototype.normalize = function (t) {
          return Sp(t, this._extent);
        }),
        (n.prototype.scale = function (t) {
          return Mp(t, this._extent);
        }),
        (n.prototype.setExtent = function (t, e) {
          var n = this._extent;
          isNaN(t) || (n[0] = parseFloat(t)),
            isNaN(e) || (n[1] = parseFloat(e));
        }),
        (n.prototype.unionExtent = function (t) {
          var e = this._extent;
          t[0] < e[0] && (e[0] = t[0]),
            t[1] > e[1] && (e[1] = t[1]),
            this.setExtent(e[0], e[1]);
        }),
        (n.prototype.getInterval = function () {
          return this._interval;
        }),
        (n.prototype.setInterval = function (t) {
          (this._interval = t),
            (this._niceExtent = this._extent.slice()),
            (this._intervalPrecision = _p(t));
        }),
        (n.prototype.getTicks = function (t) {
          var e = this._interval,
            n = this._extent,
            r = this._niceExtent,
            i = this._intervalPrecision,
            o = [];
          if (!e) return o;
          var a = 1e4;
          n[0] < r[0] &&
            o.push(t ? { value: BT(r[0] - e, i) } : { value: n[0] });
          for (
            var s = r[0];
            s <= r[1] &&
            (o.push({ value: s }),
            (s = BT(s + e, i)),
            s !== o[o.length - 1].value);

          )
            if (o.length > a) return [];
          var l = o.length ? o[o.length - 1].value : r[1];
          return (
            n[1] > l && o.push(t ? { value: BT(l + e, i) } : { value: n[1] }), o
          );
        }),
        (n.prototype.getMinorTicks = function (t) {
          for (
            var e = this.getTicks(!0), n = [], r = this.getExtent(), i = 1;
            i < e.length;
            i++
          ) {
            for (
              var o = e[i],
                a = e[i - 1],
                s = 0,
                l = [],
                u = o.value - a.value,
                h = u / t;
              t - 1 > s;

            ) {
              var c = BT(a.value + (s + 1) * h);
              c > r[0] && c < r[1] && l.push(c), s++;
            }
            n.push(l);
          }
          return n;
        }),
        (n.prototype.getLabel = function (t, e) {
          if (null == t) return "";
          var n = e && e.precision;
          null == n
            ? (n = Wr(t.value) || 0)
            : "auto" === n && (n = this._intervalPrecision);
          var r = BT(t.value, n, !0);
          return gl(r);
        }),
        (n.prototype.calcNiceTicks = function (t, e, n) {
          t = t || 5;
          var r = this._extent,
            i = r[1] - r[0];
          if (isFinite(i)) {
            0 > i && ((i = -i), r.reverse());
            var o = yp(r, t, e, n);
            (this._intervalPrecision = o.intervalPrecision),
              (this._interval = o.interval),
              (this._niceExtent = o.niceTickExtent);
          }
        }),
        (n.prototype.calcNiceExtent = function (t) {
          var e = this._extent;
          if (e[0] === e[1])
            if (0 !== e[0]) {
              var n = e[0];
              t.fixMax ? (e[0] -= n / 2) : ((e[1] += n / 2), (e[0] -= n / 2));
            } else e[1] = 1;
          var r = e[1] - e[0];
          isFinite(r) || ((e[0] = 0), (e[1] = 1)),
            this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval);
          var i = this._interval;
          t.fixMin || (e[0] = BT(Math.floor(e[0] / i) * i)),
            t.fixMax || (e[1] = BT(Math.ceil(e[1] / i) * i));
        }),
        (n.prototype.setNiceExtent = function (t, e) {
          this._niceExtent = [t, e];
        }),
        (n.type = "interval"),
        n
      );
    })(PT);
  PT.registerClass(NT);
  var zT = "undefined" != typeof Float32Array,
    FT = zT ? Float32Array : Array,
    VT = "__ec_stack_",
    HT = function (t, e, n, r) {
      for (; r > n; ) {
        var i = (n + r) >>> 1;
        t[i][1] < e ? (n = i + 1) : (r = i);
      }
      return n;
    },
    WT = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.type = "time"), n;
      }
      return (
        e(n, t),
        (n.prototype.getLabel = function (t) {
          var e = this.getSetting("useUTC");
          return Ks(
            t.value,
            Cw[Zs(Ys(this._minLevelUnit))] || Cw.second,
            e,
            this.getSetting("locale")
          );
        }),
        (n.prototype.getFormattedLabel = function (t, e, n) {
          var r = this.getSetting("useUTC"),
            i = this.getSetting("locale");
          return $s(t, e, n, i, r);
        }),
        (n.prototype.getTicks = function () {
          var t = this._interval,
            e = this._extent,
            n = [];
          if (!t) return n;
          n.push({ value: e[0], level: 0 });
          var r = this.getSetting("useUTC"),
            i = Xp(this._minLevelUnit, this._approxInterval, r, e);
          return (n = n.concat(i)), n.push({ value: e[1], level: 0 }), n;
        }),
        (n.prototype.calcNiceExtent = function (t) {
          var e = this._extent;
          if (
            (e[0] === e[1] && ((e[0] -= bw), (e[1] += bw)),
            e[1] === -1 / 0 && 1 / 0 === e[0])
          ) {
            var n = new Date();
            (e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate())),
              (e[0] = e[1] - bw);
          }
          this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval);
        }),
        (n.prototype.calcNiceTicks = function (t, e, n) {
          t = t || 10;
          var r = this._extent,
            i = r[1] - r[0];
          (this._approxInterval = i / t),
            null != e && this._approxInterval < e && (this._approxInterval = e),
            null != n && this._approxInterval > n && (this._approxInterval = n);
          var o = GT.length,
            a = Math.min(HT(GT, this._approxInterval, 0, o), o - 1);
          (this._interval = GT[a][1]),
            (this._minLevelUnit = GT[Math.max(a - 1, 0)][0]);
        }),
        (n.prototype.parse = function (t) {
          return D(t) ? t : +Zr(t);
        }),
        (n.prototype.contain = function (t) {
          return bp(this.parse(t), this._extent);
        }),
        (n.prototype.normalize = function (t) {
          return Sp(this.parse(t), this._extent);
        }),
        (n.prototype.scale = function (t) {
          return Mp(t, this._extent);
        }),
        (n.type = "time"),
        n
      );
    })(NT),
    GT = [
      ["second", _w],
      ["minute", xw],
      ["hour", ww],
      ["quarter-day", 6 * ww],
      ["half-day", 12 * ww],
      ["day", 1.2 * bw],
      ["half-week", 3.5 * bw],
      ["week", 7 * bw],
      ["month", 31 * bw],
      ["quarter", 95 * bw],
      ["half-year", Sw / 2],
      ["year", Sw],
    ];
  PT.registerClass(WT);
  var UT = PT.prototype,
    XT = NT.prototype,
    qT = Vr,
    YT = Math.floor,
    jT = Math.ceil,
    ZT = Math.pow,
    KT = Math.log,
    $T = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (
          (e.type = "log"),
          (e.base = 10),
          (e._originalScale = new NT()),
          (e._interval = 0),
          e
        );
      }
      return (
        e(n, t),
        (n.prototype.getTicks = function (t) {
          var e = this._originalScale,
            n = this._extent,
            r = e.getExtent(),
            i = XT.getTicks.call(this, t);
          return y(
            i,
            function (t) {
              var e = t.value,
                i = Vr(ZT(this.base, e));
              return (
                (i = e === n[0] && this._fixMin ? qp(i, r[0]) : i),
                (i = e === n[1] && this._fixMax ? qp(i, r[1]) : i),
                { value: i }
              );
            },
            this
          );
        }),
        (n.prototype.setExtent = function (t, e) {
          var n = this.base;
          (t = KT(t) / KT(n)),
            (e = KT(e) / KT(n)),
            XT.setExtent.call(this, t, e);
        }),
        (n.prototype.getExtent = function () {
          var t = this.base,
            e = UT.getExtent.call(this);
          (e[0] = ZT(t, e[0])), (e[1] = ZT(t, e[1]));
          var n = this._originalScale,
            r = n.getExtent();
          return (
            this._fixMin && (e[0] = qp(e[0], r[0])),
            this._fixMax && (e[1] = qp(e[1], r[1])),
            e
          );
        }),
        (n.prototype.unionExtent = function (t) {
          this._originalScale.unionExtent(t);
          var e = this.base;
          (t[0] = KT(t[0]) / KT(e)),
            (t[1] = KT(t[1]) / KT(e)),
            UT.unionExtent.call(this, t);
        }),
        (n.prototype.unionExtentFromData = function (t, e) {
          this.unionExtent(t.getApproximateExtent(e));
        }),
        (n.prototype.calcNiceTicks = function (t) {
          t = t || 10;
          var e = this._extent,
            n = e[1] - e[0];
          if (!(1 / 0 === n || 0 >= n)) {
            var r = Kr(n),
              i = (t / n) * r;
            for (
              0.5 >= i && (r *= 10);
              !isNaN(r) && Math.abs(r) < 1 && Math.abs(r) > 0;

            )
              r *= 10;
            var o = [Vr(jT(e[0] / r) * r), Vr(YT(e[1] / r) * r)];
            (this._interval = r), (this._niceExtent = o);
          }
        }),
        (n.prototype.calcNiceExtent = function (t) {
          XT.calcNiceExtent.call(this, t),
            (this._fixMin = t.fixMin),
            (this._fixMax = t.fixMax);
        }),
        (n.prototype.parse = function (t) {
          return t;
        }),
        (n.prototype.contain = function (t) {
          return (t = KT(t) / KT(this.base)), bp(t, this._extent);
        }),
        (n.prototype.normalize = function (t) {
          return (t = KT(t) / KT(this.base)), Sp(t, this._extent);
        }),
        (n.prototype.scale = function (t) {
          return (t = Mp(t, this._extent)), ZT(this.base, t);
        }),
        (n.type = "log"),
        n
      );
    })(PT),
    QT = $T.prototype;
  (QT.getMinorTicks = XT.getMinorTicks),
    (QT.getLabel = XT.getLabel),
    PT.registerClass($T);
  var JT = (function () {
      function t(t, e, n) {
        this._prepareParams(t, e, n);
      }
      return (
        (t.prototype._prepareParams = function (t, e, n) {
          n[1] < n[0] && (n = [0 / 0, 0 / 0]),
            (this._dataMin = n[0]),
            (this._dataMax = n[1]);
          var r = (this._isOrdinal = "ordinal" === t.type);
          this._needCrossZero =
            "interval" === t.type && e.getNeedCrossZero && e.getNeedCrossZero();
          var i = (this._modelMinRaw = e.get("min", !0));
          T(i)
            ? (this._modelMinNum = jp(t, i({ min: n[0], max: n[1] })))
            : "dataMin" !== i && (this._modelMinNum = jp(t, i));
          var o = (this._modelMaxRaw = e.get("max", !0));
          if (
            (T(o)
              ? (this._modelMaxNum = jp(t, o({ min: n[0], max: n[1] })))
              : "dataMax" !== o && (this._modelMaxNum = jp(t, o)),
            r)
          )
            this._axisDataLen = e.getCategories().length;
          else {
            var a = e.get("boundaryGap"),
              s = M(a) ? a : [a || 0, a || 0];
            this._boundaryGapInner =
              "boolean" == typeof s[0] || "boolean" == typeof s[1]
                ? [0, 0]
                : [wr(s[0], 1), wr(s[1], 1)];
          }
        }),
        (t.prototype.calculate = function () {
          var t = this._isOrdinal,
            e = this._dataMin,
            n = this._dataMax,
            r = this._axisDataLen,
            i = this._boundaryGapInner,
            o = t ? null : n - e || Math.abs(e),
            a = "dataMin" === this._modelMinRaw ? e : this._modelMinNum,
            s = "dataMax" === this._modelMaxRaw ? n : this._modelMaxNum,
            l = null != a,
            u = null != s;
          null == a && (a = t ? (r ? 0 : 0 / 0) : e - i[0] * o),
            null == s && (s = t ? (r ? r - 1 : 0 / 0) : n + i[1] * o),
            (null == a || !isFinite(a)) && (a = 0 / 0),
            (null == s || !isFinite(s)) && (s = 0 / 0);
          var h = B(a) || B(s) || (t && !r);
          this._needCrossZero &&
            (a > 0 && s > 0 && !l && (a = 0), 0 > a && 0 > s && !u && (s = 0));
          var c = this._determinedMin,
            p = this._determinedMax;
          return (
            null != c && ((a = c), (l = !0)),
            null != p && ((s = p), (u = !0)),
            { min: a, max: s, minFixed: l, maxFixed: u, isBlank: h }
          );
        }),
        (t.prototype.modifyDataMinMax = function (t, e) {
          this[eC[t]] = e;
        }),
        (t.prototype.setDeterminedMinMax = function (t, e) {
          var n = tC[t];
          this[n] = e;
        }),
        (t.prototype.freeze = function () {
          this.frozen = !0;
        }),
        t
      );
    })(),
    tC = { min: "_determinedMin", max: "_determinedMax" },
    eC = { min: "_dataMin", max: "_dataMax" },
    nC = (function () {
      function t() {}
      return (
        (t.prototype.getNeedCrossZero = function () {
          var t = this.option;
          return !t.scale;
        }),
        (t.prototype.getCoordSysModel = function () {}),
        t
      );
    })(),
    rC = {
      isDimensionStacked: lp,
      enableDataStack: ap,
      getStackedDimension: up,
    },
    iC = (Object.freeze || Object)({
      createList: lf,
      getLayoutRect: Ml,
      dataStack: rC,
      createScale: uf,
      mixinAxisModelCommonMethods: hf,
      getECData: w_,
      createTextStyle: cf,
      createDimensions: Jc,
      createSymbol: Ph,
      enableHoverEmphasis: Ma,
    }),
    oC = [],
    aC = {
      registerPreprocessor: Dc,
      registerProcessor: Ic,
      registerPostInit: Ac,
      registerPostUpdate: Lc,
      registerUpdateLifecycle: Pc,
      registerAction: Oc,
      registerCoordinateSystem: Rc,
      registerLayout: Bc,
      registerVisual: Nc,
      registerTransform: sT,
      registerLoading: Fc,
      registerMap: Hc,
      registerImpl: vc,
      PRIORITY: gM,
      ComponentModel: zw,
      ComponentView: $b,
      SeriesModel: Kb,
      ChartView: tS,
      registerComponentModel: function (t) {
        zw.registerClass(t);
      },
      registerComponentView: function (t) {
        $b.registerClass(t);
      },
      registerSeriesModel: function (t) {
        Kb.registerClass(t);
      },
      registerChartView: function (t) {
        tS.registerClass(t);
      },
      registerSubTypeDefaulter: function (t, e) {
        zw.registerSubTypeDefaulter(t, e);
      },
      registerPainter: function (t, e) {
        Br(t, e);
      },
    },
    sC = 1e-8,
    lC = [],
    uC = (function () {
      function t(t) {
        this.name = t;
      }
      return (
        (t.prototype.setCenter = function (t) {
          this._center = t;
        }),
        (t.prototype.getCenter = function () {
          var t = this._center;
          return t || (t = this._center = this.calcCenter()), t;
        }),
        t
      );
    })(),
    hC = (function () {
      function t(t, e) {
        (this.type = "polygon"), (this.exterior = t), (this.interiors = e);
      }
      return t;
    })(),
    cC = (function () {
      function t(t) {
        (this.type = "linestring"), (this.points = t);
      }
      return t;
    })(),
    pC = (function (t) {
      function n(e, n, r) {
        var i = t.call(this, e) || this;
        return (
          (i.type = "geoJSON"),
          (i.geometries = n),
          (i._center = r && [r[0], r[1]]),
          i
        );
      }
      return (
        e(n, t),
        (n.prototype.calcCenter = function () {
          for (var t, e = this.geometries, n = 0, r = 0; r < e.length; r++) {
            var i = e[r],
              o = i.exterior,
              a = o && o.length;
            a > n && ((t = i), (n = a));
          }
          if (t) return yf(t.exterior);
          var s = this.getBoundingRect();
          return [s.x + s.width / 2, s.y + s.height / 2];
        }),
        (n.prototype.getBoundingRect = function (t) {
          var e = this._rect;
          if (e && !t) return e;
          var n = [1 / 0, 1 / 0],
            r = [-1 / 0, -1 / 0],
            i = this.geometries;
          return (
            v(i, function (e) {
              "polygon" === e.type
                ? vf(e.exterior, n, r, t)
                : v(e.points, function (e) {
                    vf(e, n, r, t);
                  });
            }),
            (isFinite(n[0]) &&
              isFinite(n[1]) &&
              isFinite(r[0]) &&
              isFinite(r[1])) ||
              (n[0] = n[1] = r[0] = r[1] = 0),
            (e = new Ly(n[0], n[1], r[0] - n[0], r[1] - n[1])),
            t || (this._rect = e),
            e
          );
        }),
        (n.prototype.contain = function (t) {
          var e = this.getBoundingRect(),
            n = this.geometries;
          if (!e.contain(t[0], t[1])) return !1;
          t: for (var r = 0, i = n.length; i > r; r++) {
            var o = n[r];
            if ("polygon" === o.type) {
              var a = o.exterior,
                s = o.interiors;
              if (df(a, t[0], t[1])) {
                for (var l = 0; l < (s ? s.length : 0); l++)
                  if (df(s[l], t[0], t[1])) continue t;
                return !0;
              }
            }
          }
          return !1;
        }),
        (n.prototype.transformTo = function (t, e, n, r) {
          var i = this.getBoundingRect(),
            o = i.width / i.height;
          n ? r || (r = n / o) : (n = o * r);
          for (
            var a = new Ly(t, e, n, r),
              s = i.calculateTransform(a),
              l = this.geometries,
              u = 0;
            u < l.length;
            u++
          ) {
            var h = l[u];
            "polygon" === h.type
              ? (gf(h.exterior, s),
                v(h.interiors, function (t) {
                  gf(t, s);
                }))
              : v(h.points, function (t) {
                  gf(t, s);
                });
          }
          (i = this._rect),
            i.copy(a),
            (this._center = [i.x + i.width / 2, i.y + i.height / 2]);
        }),
        (n.prototype.cloneShallow = function (t) {
          null == t && (t = this.name);
          var e = new n(t, this.geometries, this._center);
          return (e._rect = this._rect), (e.transformTo = null), e;
        }),
        n
      );
    })(uC),
    fC =
      ((function (t) {
        function n(e, n) {
          var r = t.call(this, e) || this;
          return (r.type = "geoSVG"), (r._elOnlyForCalculate = n), r;
        }
        return (
          e(n, t),
          (n.prototype.calcCenter = function () {
            for (
              var t = this._elOnlyForCalculate,
                e = t.getBoundingRect(),
                n = [e.x + e.width / 2, e.y + e.height / 2],
                r = or(lC),
                i = t;
              i && !i.isGeoSVGGraphicRoot;

            )
              sr(r, i.getLocalTransform(), r), (i = i.parent);
            return cr(r, r), ve(n, n, r), n;
          }),
          n
        );
      })(uC),
      (Object.freeze || Object)({
        linearMap: zr,
        round: Vr,
        asc: Hr,
        getPrecision: Wr,
        getPrecisionSafe: Gr,
        getPixelPrecision: Ur,
        getPercentWithPrecision: Xr,
        MAX_SAFE_INTEGER: Yy,
        remRadian: Yr,
        isRadianAroundZero: jr,
        parseDate: Zr,
        quantity: Kr,
        quantityExponent: $r,
        nice: Qr,
        quantile: Jr,
        reformIntervals: ti,
        isNumeric: ni,
        numericToNumber: ei,
      })),
    dC = (Object.freeze || Object)({ parse: Zr, format: Ks }),
    gC = (Object.freeze || Object)({
      extendShape: ls,
      extendPath: us,
      makePath: ps,
      makeImage: fs,
      mergePath: Yx,
      resizePath: gs,
      createIcon: bs,
      updateProps: es,
      initProps: ns,
      getTransform: vs,
      clipPointsByRect: xs,
      clipRectByRect: ws,
      registerShape: hs,
      getShapeClass: cs,
      Group: Fy,
      Image: u_,
      Text: y_,
      Circle: tx,
      Ellipse: nx,
      Sector: gx,
      Ring: yx,
      Polygon: _x,
      Polyline: bx,
      Rect: f_,
      Line: Tx,
      BezierCurve: Dx,
      Arc: Ax,
      IncrementalDisplayable: Hx,
      CompoundPath: Lx,
      LinearGradient: Ox,
      RadialGradient: Rx,
      BoundingRect: Ly,
    }),
    vC = (Object.freeze || Object)({
      addCommas: gl,
      toCamelCase: vl,
      normalizeCssArray: Iw,
      encodeHTML: yl,
      formatTpl: ml,
      getTooltipMarker: _l,
      formatTime: xl,
      capitalFirst: wl,
      truncateText: Zi,
      getTextRect: dl,
    }),
    yC = (Object.freeze || Object)({
      map: y,
      each: v,
      indexOf: p,
      inherits: f,
      reduce: m,
      filter: _,
      bind: Ng,
      curry: S,
      isArray: M,
      isString: C,
      isObject: I,
      isFunction: T,
      extend: h,
      defaults: c,
      clone: s,
      merge: l,
    }),
    mC = ki(),
    _C = [0, 1],
    xC = (function () {
      function t(t, e, n) {
        (this.onBand = !1),
          (this.inverse = !1),
          (this.dim = t),
          (this.scale = e),
          (this._extent = n || [0, 0]);
      }
      return (
        (t.prototype.contain = function (t) {
          var e = this._extent,
            n = Math.min(e[0], e[1]),
            r = Math.max(e[0], e[1]);
          return t >= n && r >= t;
        }),
        (t.prototype.containData = function (t) {
          return this.scale.contain(t);
        }),
        (t.prototype.getExtent = function () {
          return this._extent.slice();
        }),
        (t.prototype.getPixelPrecision = function (t) {
          return Ur(t || this.scale.getExtent(), this._extent);
        }),
        (t.prototype.setExtent = function (t, e) {
          var n = this._extent;
          (n[0] = t), (n[1] = e);
        }),
        (t.prototype.dataToCoord = function (t, e) {
          var n = this._extent,
            r = this.scale;
          return (
            (t = r.normalize(t)),
            this.onBand &&
              "ordinal" === r.type &&
              ((n = n.slice()), Bf(n, r.count())),
            zr(t, _C, n, e)
          );
        }),
        (t.prototype.coordToData = function (t, e) {
          var n = this._extent,
            r = this.scale;
          this.onBand &&
            "ordinal" === r.type &&
            ((n = n.slice()), Bf(n, r.count()));
          var i = zr(t, n, _C, e);
          return this.scale.scale(i);
        }),
        (t.prototype.pointToData = function () {}),
        (t.prototype.getTicksCoords = function (t) {
          t = t || {};
          var e = t.tickModel || this.getTickModel(),
            n = Sf(this, e),
            r = n.ticks,
            i = y(
              r,
              function (t) {
                return {
                  coord: this.dataToCoord(
                    "ordinal" === this.scale.type
                      ? this.scale.getRawOrdinalNumber(t)
                      : t
                  ),
                  tickValue: t,
                };
              },
              this
            ),
            o = e.get("alignWithLabel");
          return Nf(this, i, o, t.clamp), i;
        }),
        (t.prototype.getMinorTicksCoords = function () {
          if ("ordinal" === this.scale.type) return [];
          var t = this.model.getModel("minorTick"),
            e = t.get("splitNumber");
          (e > 0 && 100 > e) || (e = 5);
          var n = this.scale.getMinorTicks(e),
            r = y(
              n,
              function (t) {
                return y(
                  t,
                  function (t) {
                    return { coord: this.dataToCoord(t), tickValue: t };
                  },
                  this
                );
              },
              this
            );
          return r;
        }),
        (t.prototype.getViewLabels = function () {
          return bf(this).labels;
        }),
        (t.prototype.getLabelModel = function () {
          return this.model.getModel("axisLabel");
        }),
        (t.prototype.getTickModel = function () {
          return this.model.getModel("axisTick");
        }),
        (t.prototype.getBandWidth = function () {
          var t = this._extent,
            e = this.scale.getExtent(),
            n = e[1] - e[0] + (this.onBand ? 1 : 0);
          0 === n && (n = 1);
          var r = Math.abs(t[1] - t[0]);
          return Math.abs(r) / n;
        }),
        (t.prototype.calculateCategoryInterval = function () {
          return Pf(this);
        }),
        t
      );
    })(),
    wC = 2 * Math.PI,
    bC = Ym.CMD,
    SC = ["top", "right", "bottom", "left"],
    MC = [],
    TC = new by(),
    CC = new by(),
    kC = new by(),
    DC = new by(),
    IC = new by(),
    AC = [],
    LC = new by(),
    PC = ["align", "verticalAlign", "width", "height", "fontSize"],
    OC = new xy(),
    RC = ki(),
    EC = ki(),
    BC = ["x", "y", "rotation"],
    NC = (function () {
      function t() {
        (this._labelList = []), (this._chartViewList = []);
      }
      return (
        (t.prototype.clearLabels = function () {
          (this._labelList = []), (this._chartViewList = []);
        }),
        (t.prototype._addLabel = function (t, e, n, r, i) {
          var o = r.style,
            a = r.__hostTarget,
            s = a.textConfig || {},
            l = r.getComputedTransform(),
            u = r.getBoundingRect().plain();
          Ly.applyTransform(u, u, l),
            l
              ? OC.setLocalTransform(l)
              : ((OC.x = OC.y = OC.rotation = OC.originX = OC.originY = 0),
                (OC.scaleX = OC.scaleY = 1));
          var h,
            c = r.__hostTarget;
          if (c) {
            h = c.getBoundingRect().plain();
            var p = c.getComputedTransform();
            Ly.applyTransform(h, h, p);
          }
          var f = h && c.getTextGuideLine();
          this._labelList.push({
            label: r,
            labelLine: f,
            seriesModel: n,
            dataIndex: t,
            dataType: e,
            layoutOption: i,
            computedLayoutOption: null,
            rect: u,
            hostRect: h,
            priority: h ? h.width * h.height : 0,
            defaultAttr: {
              ignore: r.ignore,
              labelGuideIgnore: f && f.ignore,
              x: OC.x,
              y: OC.y,
              scaleX: OC.scaleX,
              scaleY: OC.scaleY,
              rotation: OC.rotation,
              style: {
                x: o.x,
                y: o.y,
                align: o.align,
                verticalAlign: o.verticalAlign,
                width: o.width,
                height: o.height,
                fontSize: o.fontSize,
              },
              cursor: r.cursor,
              attachedPos: s.position,
              attachedRot: s.rotation,
            },
          });
        }),
        (t.prototype.addLabelsOfSeries = function (t) {
          var e = this;
          this._chartViewList.push(t);
          var n = t.__model,
            r = n.get("labelLayout");
          (T(r) || w(r).length) &&
            t.group.traverse(function (t) {
              if (t.ignore) return !0;
              var i = t.getTextContent(),
                o = w_(t);
              i &&
                !i.disableLabelLayout &&
                e._addLabel(o.dataIndex, o.dataType, n, i, r);
            });
        }),
        (t.prototype.updateLayoutConfig = function (t) {
          function e(t, e) {
            return function () {
              jf(t, e);
            };
          }
          for (
            var n = t.getWidth(), r = t.getHeight(), i = 0;
            i < this._labelList.length;
            i++
          ) {
            var o = this._labelList[i],
              a = o.label,
              s = a.__hostTarget,
              l = o.defaultAttr,
              u = void 0;
            (u = T(o.layoutOption) ? o.layoutOption(ad(o, s)) : o.layoutOption),
              (u = u || {}),
              (o.computedLayoutOption = u);
            var h = Math.PI / 180;
            s &&
              s.setTextConfig({
                local: !1,
                position: null != u.x || null != u.y ? null : l.attachedPos,
                rotation: null != u.rotate ? u.rotate * h : l.attachedRot,
                offset: [u.dx || 0, u.dy || 0],
              });
            var c = !1;
            if (
              (null != u.x
                ? ((a.x = Fr(u.x, n)), a.setStyle("x", 0), (c = !0))
                : ((a.x = l.x), a.setStyle("x", l.style.x)),
              null != u.y
                ? ((a.y = Fr(u.y, r)), a.setStyle("y", 0), (c = !0))
                : ((a.y = l.y), a.setStyle("y", l.style.y)),
              u.labelLinePoints)
            ) {
              var p = s.getTextGuideLine();
              p && (p.setShape({ points: u.labelLinePoints }), (c = !1));
            }
            var f = RC(a);
            (f.needsUpdateLabelLine = c),
              (a.rotation = null != u.rotate ? u.rotate * h : l.rotation),
              (a.scaleX = l.scaleX),
              (a.scaleY = l.scaleY);
            for (var d = 0; d < PC.length; d++) {
              var g = PC[d];
              a.setStyle(g, null != u[g] ? u[g] : l.style[g]);
            }
            if (u.draggable) {
              if (((a.draggable = !0), (a.cursor = "move"), s)) {
                var v = o.seriesModel;
                if (null != o.dataIndex) {
                  var y = o.seriesModel.getData(o.dataType);
                  v = y.getItemModel(o.dataIndex);
                }
                a.on("drag", e(s, v.getModel("labelLine")));
              }
            } else a.off("drag"), (a.cursor = l.cursor);
          }
        }),
        (t.prototype.layout = function (t) {
          var e = t.getWidth(),
            n = t.getHeight(),
            r = td(this._labelList),
            i = _(r, function (t) {
              return "shiftX" === t.layoutOption.moveOverlap;
            }),
            o = _(r, function (t) {
              return "shiftY" === t.layoutOption.moveOverlap;
            });
          nd(i, 0, e), rd(o, 0, n);
          var a = _(r, function (t) {
            return t.layoutOption.hideOverlap;
          });
          id(a);
        }),
        (t.prototype.processLabelsOverall = function () {
          var t = this;
          v(this._chartViewList, function (e) {
            var n = e.__model,
              r = e.ignoreLabelLineUpdate,
              i = n.isAnimationEnabled();
            e.group.traverse(function (e) {
              if (e.ignore && !e.forceLabelAnimation) return !0;
              var o = !r,
                a = e.getTextContent();
              !o && a && (o = RC(a).needsUpdateLabelLine),
                o && t._updateLabelLine(e, n),
                i && t._animateLabels(e, n);
            });
          });
        }),
        (t.prototype._updateLabelLine = function (t, e) {
          var n = t.getTextContent(),
            r = w_(t),
            i = r.dataIndex;
          if (n && null != i) {
            var o = e.getData(r.dataType),
              a = o.getItemModel(i),
              s = {},
              l = o.getItemVisual(i, "style"),
              u = o.getVisual("drawType");
            s.stroke = l[u];
            var h = a.getModel("labelLine");
            Qf(t, Jf(a), s), jf(t, h);
          }
        }),
        (t.prototype._animateLabels = function (t, e) {
          var n = t.getTextContent(),
            r = t.getTextGuideLine();
          if (
            n &&
            (t.forceLabelAnimation ||
              (!n.ignore && !n.invisible && !t.disableLabelAnimation && !rs(t)))
          ) {
            var i = RC(n),
              o = i.oldLayout,
              a = w_(t),
              s = a.dataIndex,
              l = { x: n.x, y: n.y, rotation: n.rotation },
              u = e.getData(a.dataType);
            if (o) {
              n.attr(o);
              var h = t.prevStates;
              h &&
                (p(h, "select") >= 0 && n.attr(i.oldLayoutSelect),
                p(h, "emphasis") >= 0 && n.attr(i.oldLayoutEmphasis)),
                es(n, l, e, s);
            } else if ((n.attr(l), !Qx(n).valueAnimation)) {
              var c = z(n.style.opacity, 1);
              (n.style.opacity = 0), ns(n, { style: { opacity: c } }, e, s);
            }
            if (((i.oldLayout = l), n.states.select)) {
              var f = (i.oldLayoutSelect = {});
              sd(f, l, BC), sd(f, n.states.select, BC);
            }
            if (n.states.emphasis) {
              var d = (i.oldLayoutEmphasis = {});
              sd(d, l, BC), sd(d, n.states.emphasis, BC);
            }
            Ns(n, s, u, e, e);
          }
          if (r && !r.ignore && !r.invisible) {
            var i = EC(r),
              o = i.oldLayout,
              g = { points: r.shape.points };
            o
              ? (r.attr({ shape: o }), es(r, { shape: g }, e))
              : (r.setShape(g),
                (r.style.strokePercent = 0),
                ns(r, { style: { strokePercent: 1 } }, e)),
              (i.oldLayout = g);
          }
        }),
        t
      );
    })(),
    zC = ki();
  pf(ld);
  var FC = (function (t) {
      function n(e, n, r) {
        var i = t.call(this) || this;
        (i.motionBlur = !1),
          (i.lastFrameAlpha = 0.7),
          (i.dpr = 1),
          (i.virtual = !1),
          (i.config = {}),
          (i.incremental = !1),
          (i.zlevel = 0),
          (i.maxRepaintRectCount = 5),
          (i.__dirty = !0),
          (i.__firstTimePaint = !0),
          (i.__used = !1),
          (i.__drawIndex = 0),
          (i.__startIndex = 0),
          (i.__endIndex = 0),
          (i.__prevStartIndex = null),
          (i.__prevEndIndex = null);
        var o;
        (r = r || ly),
          "string" == typeof e
            ? (o = ud(e, n, r))
            : I(e) && ((o = e), (e = o.id)),
          (i.id = e),
          (i.dom = o);
        var a = o.style;
        return (
          a &&
            (Z(o),
            (o.onselectstart = function () {
              return !1;
            }),
            (a.padding = "0"),
            (a.margin = "0"),
            (a.borderWidth = "0")),
          (i.painter = n),
          (i.dpr = r),
          i
        );
      }
      return (
        e(n, t),
        (n.prototype.getElementCount = function () {
          return this.__endIndex - this.__startIndex;
        }),
        (n.prototype.afterBrush = function () {
          (this.__prevStartIndex = this.__startIndex),
            (this.__prevEndIndex = this.__endIndex);
        }),
        (n.prototype.initContext = function () {
          (this.ctx = this.dom.getContext("2d")), (this.ctx.dpr = this.dpr);
        }),
        (n.prototype.setUnpainted = function () {
          this.__firstTimePaint = !0;
        }),
        (n.prototype.createBackBuffer = function () {
          var t = this.dpr;
          (this.domBack = ud("back-" + this.id, this.painter, t)),
            (this.ctxBack = this.domBack.getContext("2d")),
            1 !== t && this.ctxBack.scale(t, t);
        }),
        (n.prototype.createRepaintRects = function (t, e, n, r) {
          function i(t) {
            if (t.isFinite() && !t.isZero())
              if (0 === o.length) {
                var e = new Ly(0, 0, 0, 0);
                e.copy(t), o.push(e);
              } else {
                for (var n = !1, r = 1 / 0, i = 0, u = 0; u < o.length; ++u) {
                  var h = o[u];
                  if (h.intersect(t)) {
                    var c = new Ly(0, 0, 0, 0);
                    c.copy(h), c.union(t), (o[u] = c), (n = !0);
                    break;
                  }
                  if (s) {
                    l.copy(t), l.union(h);
                    var p = t.width * t.height,
                      f = h.width * h.height,
                      d = l.width * l.height,
                      g = d - p - f;
                    r > g && ((r = g), (i = u));
                  }
                }
                if ((s && (o[i].union(t), (n = !0)), !n)) {
                  var e = new Ly(0, 0, 0, 0);
                  e.copy(t), o.push(e);
                }
                s || (s = o.length >= a);
              }
          }
          if (this.__firstTimePaint) return (this.__firstTimePaint = !1), null;
          for (
            var o = [],
              a = this.maxRepaintRectCount,
              s = !1,
              l = new Ly(0, 0, 0, 0),
              u = this.__startIndex;
            u < this.__endIndex;
            ++u
          ) {
            var h = t[u];
            if (h) {
              var c = h.shouldBePainted(n, r, !0, !0),
                p =
                  h.__isRendered && (h.__dirty & pv || !c)
                    ? h.getPrevPaintRect()
                    : null;
              p && i(p);
              var f =
                c && (h.__dirty & pv || !h.__isRendered)
                  ? h.getPaintRect()
                  : null;
              f && i(f);
            }
          }
          for (var u = this.__prevStartIndex; u < this.__prevEndIndex; ++u) {
            var h = e[u],
              c = h.shouldBePainted(n, r, !0, !0);
            if (h && (!c || !h.__zr) && h.__isRendered) {
              var p = h.getPrevPaintRect();
              p && i(p);
            }
          }
          var d;
          do {
            d = !1;
            for (var u = 0; u < o.length; )
              if (o[u].isZero()) o.splice(u, 1);
              else {
                for (var g = u + 1; g < o.length; )
                  o[u].intersect(o[g])
                    ? ((d = !0), o[u].union(o[g]), o.splice(g, 1))
                    : g++;
                u++;
              }
          } while (d);
          return (this._paintRects = o), o;
        }),
        (n.prototype.debugGetPaintRects = function () {
          return (this._paintRects || []).slice();
        }),
        (n.prototype.resize = function (t, e) {
          var n = this.dpr,
            r = this.dom,
            i = r.style,
            o = this.domBack;
          i && ((i.width = t + "px"), (i.height = e + "px")),
            (r.width = t * n),
            (r.height = e * n),
            o &&
              ((o.width = t * n),
              (o.height = e * n),
              1 !== n && this.ctxBack.scale(n, n));
        }),
        (n.prototype.clear = function (t, e, n) {
          function r(t, n, r, i) {
            if ((o.clearRect(t, n, r, i), e && "transparent" !== e)) {
              var a = void 0;
              O(e)
                ? ((a =
                    e.__canvasGradient ||
                    Bh(o, e, { x: 0, y: 0, width: r, height: i })),
                  (e.__canvasGradient = a))
                : R(e) &&
                  (a = Yh(o, e, {
                    dirty: function () {
                      c.setUnpainted(), c.__painter.refresh();
                    },
                  })),
                o.save(),
                (o.fillStyle = a || e),
                o.fillRect(t, n, r, i),
                o.restore();
            }
            l &&
              (o.save(),
              (o.globalAlpha = u),
              o.drawImage(p, t, n, r, i),
              o.restore());
          }
          var i = this.dom,
            o = this.ctx,
            a = i.width,
            s = i.height;
          e = e || this.clearColor;
          var l = this.motionBlur && !t,
            u = this.lastFrameAlpha,
            h = this.dpr,
            c = this;
          l &&
            (this.domBack || this.createBackBuffer(),
            (this.ctxBack.globalCompositeOperation = "copy"),
            this.ctxBack.drawImage(i, 0, 0, a / h, s / h));
          var p = this.domBack;
          !n || l
            ? r(0, 0, a, s)
            : n.length &&
              v(n, function (t) {
                r(t.x * h, t.y * h, t.width * h, t.height * h);
              });
        }),
        n
      );
    })(Zg),
    VC = 1e5,
    HC = 314159,
    WC = 0.01,
    GC = 0.001,
    UC = (function () {
      function t(t, e, n) {
        (this.type = "canvas"),
          (this._zlevelList = []),
          (this._prevDisplayList = []),
          (this._layers = {}),
          (this._layerConfig = {}),
          (this._needsManuallyCompositing = !1),
          (this.type = "canvas");
        var r = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
        (this._opts = n = h({}, n || {})),
          (this.dpr = n.devicePixelRatio || ly),
          (this._singleCanvas = r),
          (this.root = t);
        var i = t.style;
        i && (Z(t), (t.innerHTML = "")), (this.storage = e);
        var o = this._zlevelList;
        this._prevDisplayList = [];
        var a = this._layers;
        if (r) {
          var s = t,
            l = s.width,
            u = s.height;
          null != n.width && (l = n.width),
            null != n.height && (u = n.height),
            (this.dpr = n.devicePixelRatio || 1),
            (s.width = l * this.dpr),
            (s.height = u * this.dpr),
            (this._width = l),
            (this._height = u);
          var c = new FC(s, this, this.dpr);
          (c.__builtin__ = !0),
            c.initContext(),
            (a[HC] = c),
            (c.zlevel = HC),
            o.push(HC),
            (this._domRoot = t);
        } else {
          (this._width = Fh(t, 0, n)), (this._height = Fh(t, 1, n));
          var p = (this._domRoot = cd(this._width, this._height));
          t.appendChild(p);
        }
      }
      return (
        (t.prototype.getType = function () {
          return "canvas";
        }),
        (t.prototype.isSingleCanvas = function () {
          return this._singleCanvas;
        }),
        (t.prototype.getViewportRoot = function () {
          return this._domRoot;
        }),
        (t.prototype.getViewportRootOffset = function () {
          var t = this.getViewportRoot();
          return t
            ? { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 }
            : void 0;
        }),
        (t.prototype.refresh = function (t) {
          var e = this.storage.getDisplayList(!0),
            n = this._prevDisplayList,
            r = this._zlevelList;
          (this._redrawId = Math.random()),
            this._paintList(e, n, t, this._redrawId);
          for (var i = 0; i < r.length; i++) {
            var o = r[i],
              a = this._layers[o];
            if (!a.__builtin__ && a.refresh) {
              var s = 0 === i ? this._backgroundColor : null;
              a.refresh(s);
            }
          }
          return (
            this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this
          );
        }),
        (t.prototype.refreshHover = function () {
          this._paintHoverList(this.storage.getDisplayList(!1));
        }),
        (t.prototype._paintHoverList = function (t) {
          var e = t.length,
            n = this._hoverlayer;
          if ((n && n.clear(), e)) {
            for (
              var r,
                i = {
                  inHover: !0,
                  viewWidth: this._width,
                  viewHeight: this._height,
                },
                o = 0;
              e > o;
              o++
            ) {
              var a = t[o];
              a.__inHover &&
                (n || (n = this._hoverlayer = this.getLayer(VC)),
                r || ((r = n.ctx), r.save()),
                sc(r, a, i, o === e - 1));
            }
            r && r.restore();
          }
        }),
        (t.prototype.getHoverLayer = function () {
          return this.getLayer(VC);
        }),
        (t.prototype.paintOne = function (t, e) {
          ac(t, e);
        }),
        (t.prototype._paintList = function (t, e, n, r) {
          if (this._redrawId === r) {
            (n = n || !1), this._updateLayerStatus(t);
            var i = this._doPaintList(t, e, n),
              o = i.finished,
              a = i.needsRefreshHover;
            if (
              (this._needsManuallyCompositing && this._compositeManually(),
              a && this._paintHoverList(t),
              o)
            )
              this.eachLayer(function (t) {
                t.afterBrush && t.afterBrush();
              });
            else {
              var s = this;
              yv(function () {
                s._paintList(t, e, n, r);
              });
            }
          }
        }),
        (t.prototype._compositeManually = function () {
          var t = this.getLayer(HC).ctx,
            e = this._domRoot.width,
            n = this._domRoot.height;
          t.clearRect(0, 0, e, n),
            this.eachBuiltinLayer(function (r) {
              r.virtual && t.drawImage(r.dom, 0, 0, e, n);
            });
        }),
        (t.prototype._doPaintList = function (t, e, n) {
          for (
            var r = this, i = [], o = this._opts.useDirtyRect, a = 0;
            a < this._zlevelList.length;
            a++
          ) {
            var s = this._zlevelList[a],
              l = this._layers[s];
            l.__builtin__ &&
              l !== this._hoverlayer &&
              (l.__dirty || n) &&
              i.push(l);
          }
          for (
            var u = !0,
              h = !1,
              c = function (a) {
                var s = i[a],
                  l = s.ctx,
                  c = o && s.createRepaintRects(t, e, p._width, p._height),
                  f = n ? s.__startIndex : s.__drawIndex,
                  d = !n && s.incremental && Date.now,
                  g = d && Date.now(),
                  v = s.zlevel === p._zlevelList[0] ? p._backgroundColor : null;
                if (s.__startIndex === s.__endIndex) s.clear(!1, v, c);
                else if (f === s.__startIndex) {
                  var y = t[f];
                  (y.incremental && y.notClear && !n) || s.clear(!1, v, c);
                }
                -1 === f &&
                  (console.error("For some unknown reason. drawIndex is -1"),
                  (f = s.__startIndex));
                var m,
                  _ = function (e) {
                    var n = {
                      inHover: !1,
                      allClipped: !1,
                      prevEl: null,
                      viewWidth: r._width,
                      viewHeight: r._height,
                    };
                    for (m = f; m < s.__endIndex; m++) {
                      var i = t[m];
                      if (
                        (i.__inHover && (h = !0),
                        r._doPaintEl(i, s, o, e, n, m === s.__endIndex - 1),
                        d)
                      ) {
                        var a = Date.now() - g;
                        if (a > 15) break;
                      }
                    }
                    n.prevElClipPaths && l.restore();
                  };
                if (c)
                  if (0 === c.length) m = s.__endIndex;
                  else
                    for (var x = p.dpr, w = 0; w < c.length; ++w) {
                      var b = c[w];
                      l.save(),
                        l.beginPath(),
                        l.rect(b.x * x, b.y * x, b.width * x, b.height * x),
                        l.clip(),
                        _(b),
                        l.restore();
                    }
                else l.save(), _(), l.restore();
                (s.__drawIndex = m), s.__drawIndex < s.__endIndex && (u = !1);
              },
              p = this,
              f = 0;
            f < i.length;
            f++
          )
            c(f);
          return (
            gg.wxa &&
              v(this._layers, function (t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw();
              }),
            { finished: u, needsRefreshHover: h }
          );
        }),
        (t.prototype._doPaintEl = function (t, e, n, r, i, o) {
          var a = e.ctx;
          if (n) {
            var s = t.getPaintRect();
            (!r || (s && s.intersect(r))) &&
              (sc(a, t, i, o), t.setPrevPaintRect(s));
          } else sc(a, t, i, o);
        }),
        (t.prototype.getLayer = function (t, e) {
          this._singleCanvas && !this._needsManuallyCompositing && (t = HC);
          var n = this._layers[t];
          return (
            n ||
              ((n = new FC("zr_" + t, this, this.dpr)),
              (n.zlevel = t),
              (n.__builtin__ = !0),
              this._layerConfig[t]
                ? l(n, this._layerConfig[t], !0)
                : this._layerConfig[t - WC] &&
                  l(n, this._layerConfig[t - WC], !0),
              e && (n.virtual = e),
              this.insertLayer(t, n),
              n.initContext()),
            n
          );
        }),
        (t.prototype.insertLayer = function (t, e) {
          var n = this._layers,
            r = this._zlevelList,
            i = r.length,
            o = this._domRoot,
            a = null,
            s = -1;
          if (!n[t] && hd(e)) {
            if (i > 0 && t > r[0]) {
              for (s = 0; i - 1 > s && !(r[s] < t && r[s + 1] > t); s++);
              a = n[r[s]];
            }
            if ((r.splice(s + 1, 0, t), (n[t] = e), !e.virtual))
              if (a) {
                var l = a.dom;
                l.nextSibling
                  ? o.insertBefore(e.dom, l.nextSibling)
                  : o.appendChild(e.dom);
              } else
                o.firstChild
                  ? o.insertBefore(e.dom, o.firstChild)
                  : o.appendChild(e.dom);
            e.__painter = this;
          }
        }),
        (t.prototype.eachLayer = function (t, e) {
          for (var n = this._zlevelList, r = 0; r < n.length; r++) {
            var i = n[r];
            t.call(e, this._layers[i], i);
          }
        }),
        (t.prototype.eachBuiltinLayer = function (t, e) {
          for (var n = this._zlevelList, r = 0; r < n.length; r++) {
            var i = n[r],
              o = this._layers[i];
            o.__builtin__ && t.call(e, o, i);
          }
        }),
        (t.prototype.eachOtherLayer = function (t, e) {
          for (var n = this._zlevelList, r = 0; r < n.length; r++) {
            var i = n[r],
              o = this._layers[i];
            o.__builtin__ || t.call(e, o, i);
          }
        }),
        (t.prototype.getLayers = function () {
          return this._layers;
        }),
        (t.prototype._updateLayerStatus = function (t) {
          function e(t) {
            s && (s.__endIndex !== t && (s.__dirty = !0), (s.__endIndex = t));
          }
          if (
            (this.eachBuiltinLayer(function (t) {
              t.__dirty = t.__used = !1;
            }),
            this._singleCanvas)
          )
            for (var n = 1; n < t.length; n++) {
              var r = t[n];
              if (r.zlevel !== t[n - 1].zlevel || r.incremental) {
                this._needsManuallyCompositing = !0;
                break;
              }
            }
          var i,
            o,
            s = null,
            l = 0;
          for (o = 0; o < t.length; o++) {
            var r = t[o],
              u = r.zlevel,
              h = void 0;
            i !== u && ((i = u), (l = 0)),
              r.incremental
                ? ((h = this.getLayer(u + GC, this._needsManuallyCompositing)),
                  (h.incremental = !0),
                  (l = 1))
                : (h = this.getLayer(
                    u + (l > 0 ? WC : 0),
                    this._needsManuallyCompositing
                  )),
              h.__builtin__ ||
                a("ZLevel " + u + " has been used by unkown layer " + h.id),
              h !== s &&
                ((h.__used = !0),
                h.__startIndex !== o && (h.__dirty = !0),
                (h.__startIndex = o),
                (h.__drawIndex = h.incremental ? -1 : o),
                e(o),
                (s = h)),
              r.__dirty & pv &&
                !r.__inHover &&
                ((h.__dirty = !0),
                h.incremental && h.__drawIndex < 0 && (h.__drawIndex = o));
          }
          e(o),
            this.eachBuiltinLayer(function (t) {
              !t.__used &&
                t.getElementCount() > 0 &&
                ((t.__dirty = !0),
                (t.__startIndex = t.__endIndex = t.__drawIndex = 0)),
                t.__dirty &&
                  t.__drawIndex < 0 &&
                  (t.__drawIndex = t.__startIndex);
            });
        }),
        (t.prototype.clear = function () {
          return this.eachBuiltinLayer(this._clearLayer), this;
        }),
        (t.prototype._clearLayer = function (t) {
          t.clear();
        }),
        (t.prototype.setBackgroundColor = function (t) {
          (this._backgroundColor = t),
            v(this._layers, function (t) {
              t.setUnpainted();
            });
        }),
        (t.prototype.configLayer = function (t, e) {
          if (e) {
            var n = this._layerConfig;
            n[t] ? l(n[t], e, !0) : (n[t] = e);
            for (var r = 0; r < this._zlevelList.length; r++) {
              var i = this._zlevelList[r];
              if (i === t || i === t + WC) {
                var o = this._layers[i];
                l(o, n[t], !0);
              }
            }
          }
        }),
        (t.prototype.delLayer = function (t) {
          var e = this._layers,
            n = this._zlevelList,
            r = e[t];
          r &&
            (r.dom.parentNode.removeChild(r.dom),
            delete e[t],
            n.splice(p(n, t), 1));
        }),
        (t.prototype.resize = function (t, e) {
          if (this._domRoot.style) {
            var n = this._domRoot;
            n.style.display = "none";
            var r = this._opts,
              i = this.root;
            if (
              (null != t && (r.width = t),
              null != e && (r.height = e),
              (t = Fh(i, 0, r)),
              (e = Fh(i, 1, r)),
              (n.style.display = ""),
              this._width !== t || e !== this._height)
            ) {
              (n.style.width = t + "px"), (n.style.height = e + "px");
              for (var o in this._layers)
                this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
              this.refresh(!0);
            }
            (this._width = t), (this._height = e);
          } else {
            if (null == t || null == e) return;
            (this._width = t),
              (this._height = e),
              this.getLayer(HC).resize(t, e);
          }
          return this;
        }),
        (t.prototype.clearLayer = function (t) {
          var e = this._layers[t];
          e && e.clear();
        }),
        (t.prototype.dispose = function () {
          (this.root.innerHTML = ""),
            (this.root = this.storage = this._domRoot = this._layers = null);
        }),
        (t.prototype.getRenderedCanvas = function (t) {
          if (((t = t || {}), this._singleCanvas && !this._compositeManually))
            return this._layers[HC].dom;
          var e = new FC("image", this, t.pixelRatio || this.dpr);
          e.initContext(),
            e.clear(!1, t.backgroundColor || this._backgroundColor);
          var n = e.ctx;
          if (t.pixelRatio <= this.dpr) {
            this.refresh();
            var r = e.dom.width,
              i = e.dom.height;
            this.eachLayer(function (t) {
              t.__builtin__
                ? n.drawImage(t.dom, 0, 0, r, i)
                : t.renderToCanvas &&
                  (n.save(), t.renderToCanvas(n), n.restore());
            });
          } else
            for (
              var o = {
                  inHover: !1,
                  viewWidth: this._width,
                  viewHeight: this._height,
                },
                a = this.storage.getDisplayList(!0),
                s = 0,
                l = a.length;
              l > s;
              s++
            ) {
              var u = a[s];
              sc(n, u, o, s === l - 1);
            }
          return e.dom;
        }),
        (t.prototype.getWidth = function () {
          return this._width;
        }),
        (t.prototype.getHeight = function () {
          return this._height;
        }),
        t
      );
    })(),
    XC = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = "dataset"), e;
      }
      return (
        e(n, t),
        (n.prototype.init = function (e, n, r) {
          t.prototype.init.call(this, e, n, r),
            (this._sourceManager = new Yb(this)),
            Xu(this);
        }),
        (n.prototype.mergeOption = function (e, n) {
          t.prototype.mergeOption.call(this, e, n), Xu(this);
        }),
        (n.prototype.optionUpdated = function () {
          this._sourceManager.dirty();
        }),
        (n.prototype.getSourceManager = function () {
          return this._sourceManager;
        }),
        (n.type = "dataset"),
        (n.defaultOption = { seriesLayoutBy: $w }),
        n
      );
    })(zw),
    qC = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = "dataset"), e;
      }
      return e(n, t), (n.type = "dataset"), n;
    })($b);
  pf([pd, fd]), pf(ld);
  var YC = {
      average: function (t) {
        for (var e = 0, n = 0, r = 0; r < t.length; r++)
          isNaN(t[r]) || ((e += t[r]), n++);
        return 0 === n ? 0 / 0 : e / n;
      },
      sum: function (t) {
        for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
        return e;
      },
      max: function (t) {
        for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
        return isFinite(e) ? e : 0 / 0;
      },
      min: function (t) {
        for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
        return isFinite(e) ? e : 0 / 0;
      },
      nearest: function (t) {
        return t[0];
      },
    },
    jC = function (t) {
      return Math.round(t.length / 2);
    },
    ZC = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.getInitialData = function () {
          return pp(null, this, { useEncodeDefaulter: !0 });
        }),
        (n.prototype.getMarkerPosition = function (t) {
          var e = this.coordinateSystem;
          if (e && e.clampData) {
            var n = e.dataToPoint(e.clampData(t)),
              r = this.getData(),
              i = r.getLayout("offset"),
              o = r.getLayout("size"),
              a = e.getBaseAxis().isHorizontal() ? 0 : 1;
            return (n[a] += i + o / 2), n;
          }
          return [0 / 0, 0 / 0];
        }),
        (n.type = "series.__base_bar__"),
        (n.defaultOption = {
          z: 2,
          coordinateSystem: "cartesian2d",
          legendHoverLink: !0,
          barMinHeight: 0,
          barMinAngle: 0,
          large: !1,
          largeThreshold: 400,
          progressive: 3e3,
          progressiveChunkMode: "mod",
        }),
        n
      );
    })(Kb);
  Kb.registerClass(ZC);
  var KC = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.getInitialData = function () {
          return pp(null, this, {
            useEncodeDefaulter: !0,
            createInvertedIndices: !!this.get("realtimeSort", !0) || null,
          });
        }),
        (n.prototype.getProgressive = function () {
          return this.get("large") ? this.get("progressive") : !1;
        }),
        (n.prototype.getProgressiveThreshold = function () {
          var t = this.get("progressiveThreshold"),
            e = this.get("largeThreshold");
          return e > t && (t = e), t;
        }),
        (n.prototype.brushSelector = function (t, e, n) {
          return n.rect(e.getItemLayout(t));
        }),
        (n.type = "series.bar"),
        (n.dependencies = ["grid", "polar"]),
        (n.defaultOption = Hs(ZC.defaultOption, {
          clip: !0,
          roundCap: !1,
          showBackground: !1,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
            borderColor: null,
            borderWidth: 0,
            borderType: "solid",
            borderRadius: 0,
            shadowBlur: 0,
            shadowColor: null,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: 1,
          },
          select: { itemStyle: { borderColor: "#212121" } },
          realtimeSort: !1,
        })),
        n
      );
    })(ZC),
    $C = (function () {
      function t() {
        (this.cx = 0),
          (this.cy = 0),
          (this.r0 = 0),
          (this.r = 0),
          (this.startAngle = 0),
          (this.endAngle = 2 * Math.PI),
          (this.clockwise = !0);
      }
      return t;
    })(),
    QC = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.type = "sausage"), n;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new $C();
        }),
        (n.prototype.buildPath = function (t, e) {
          var n = e.cx,
            r = e.cy,
            i = Math.max(e.r0 || 0, 0),
            o = Math.max(e.r, 0),
            a = 0.5 * (o - i),
            s = i + a,
            l = e.startAngle,
            u = e.endAngle,
            h = e.clockwise,
            c = 2 * Math.PI,
            p = h ? c > u - l : c > l - u;
          p || (l = u - (h ? c : -c));
          var f = Math.cos(l),
            d = Math.sin(l),
            g = Math.cos(u),
            v = Math.sin(u);
          p
            ? (t.moveTo(f * i + n, d * i + r),
              t.arc(f * s + n, d * s + r, a, -Math.PI + l, l, !h))
            : t.moveTo(f * o + n, d * o + r),
            t.arc(n, r, o, l, u, !h),
            t.arc(g * s + n, v * s + r, a, u - 2 * Math.PI, u - Math.PI, !h),
            0 !== i && t.arc(n, r, i, u, l, h);
        }),
        n
      );
    })(i_),
    JC = Math.max,
    tk = Math.min,
    ek = (function (t) {
      function n() {
        var e = t.call(this) || this;
        return (e.type = n.type), (e._isFirstFrame = !0), e;
      }
      return (
        e(n, t),
        (n.prototype.render = function (t, e, n, r) {
          (this._model = t),
            this._removeOnRenderedListener(n),
            this._updateDrawMode(t);
          var i = t.get("coordinateSystem");
          ("cartesian2d" === i || "polar" === i) &&
            ((this._progressiveEls = null),
            this._isLargeDraw
              ? this._renderLarge(t, e, n)
              : this._renderNormal(t, e, n, r));
        }),
        (n.prototype.incrementalPrepareRender = function (t) {
          this._clear(), this._updateDrawMode(t), this._updateLargeClip(t);
        }),
        (n.prototype.incrementalRender = function (t, e) {
          (this._progressiveEls = []), this._incrementalRenderLarge(t, e);
        }),
        (n.prototype.eachRendered = function (t) {
          Ts(this._progressiveEls || this.group, t);
        }),
        (n.prototype._updateDrawMode = function (t) {
          var e = t.pipelineContext.large;
          (null == this._isLargeDraw || e !== this._isLargeDraw) &&
            ((this._isLargeDraw = e), this._clear());
        }),
        (n.prototype._renderNormal = function (t, e, n, r) {
          function i(t) {
            var e = sk[u.type](s, t),
              n = Bd(u, o, e);
            return (
              n.useStyle(y.getItemStyle()),
              "cartesian2d" === u.type && n.setShape("r", m),
              (_[t] = n),
              n
            );
          }
          var o,
            a = this.group,
            s = t.getData(),
            l = this._data,
            u = t.coordinateSystem,
            h = u.getBaseAxis();
          "cartesian2d" === u.type
            ? (o = h.isHorizontal())
            : "polar" === u.type && (o = "angle" === h.dim);
          var c = t.isAnimationEnabled() ? t : null,
            p = Cd(t, u);
          p && this._enableRealtimeSort(p, s, n);
          var f = t.get("clip", !0) || p,
            d = Td(u, s);
          a.removeClipPath();
          var g = t.get("roundCap", !0),
            v = t.get("showBackground", !0),
            y = t.getModel("backgroundStyle"),
            m = y.get("borderRadius") || 0,
            _ = [],
            x = this._backgroundEls,
            w = r && r.isInitSort,
            b = r && "changeAxisOrder" === r.type;
          s.diff(l)
            .add(function (e) {
              var n = s.getItemModel(e),
                r = sk[u.type](s, e, n);
              if ((v && i(e), s.hasValue(e) && ak[u.type](r))) {
                var l = !1;
                f && (l = nk[u.type](d, r));
                var y = rk[u.type](t, s, e, r, o, c, h.model, !1, g);
                p && (y.forceLabelAnimation = !0),
                  Ld(y, s, e, n, r, t, o, "polar" === u.type),
                  w
                    ? y.attr({ shape: r })
                    : p
                    ? kd(p, c, y, r, e, o, !1, !1)
                    : ns(y, { shape: r }, t, e),
                  s.setItemGraphicEl(e, y),
                  a.add(y),
                  (y.ignore = l);
              }
            })
            .update(function (e, n) {
              var r = s.getItemModel(e),
                S = sk[u.type](s, e, r);
              if (v) {
                var M = void 0;
                0 === x.length
                  ? (M = i(n))
                  : ((M = x[n]),
                    M.useStyle(y.getItemStyle()),
                    "cartesian2d" === u.type && M.setShape("r", m),
                    (_[e] = M));
                var T = sk[u.type](s, e),
                  C = Ed(o, T, u);
                es(M, { shape: C }, c, e);
              }
              var k = l.getItemGraphicEl(n);
              if (!s.hasValue(e) || !ak[u.type](S)) return void a.remove(k);
              var D = !1;
              if (
                (f && ((D = nk[u.type](d, S)), D && a.remove(k)),
                k ? ss(k) : (k = rk[u.type](t, s, e, S, o, c, h.model, !!k, g)),
                p && (k.forceLabelAnimation = !0),
                b)
              ) {
                var I = k.getTextContent();
                if (I) {
                  var A = Qx(I);
                  null != A.prevValue && (A.prevValue = A.value);
                }
              } else Ld(k, s, e, r, S, t, o, "polar" === u.type);
              w
                ? k.attr({ shape: S })
                : p
                ? kd(p, c, k, S, e, o, !0, b)
                : es(k, { shape: S }, t, e, null),
                s.setItemGraphicEl(e, k),
                (k.ignore = D),
                a.add(k);
            })
            .remove(function (e) {
              var n = l.getItemGraphicEl(e);
              n && as(n, t, e);
            })
            .execute();
          var S = this._backgroundGroup || (this._backgroundGroup = new Fy());
          S.removeAll();
          for (var M = 0; M < _.length; ++M) S.add(_[M]);
          a.add(S), (this._backgroundEls = _), (this._data = s);
        }),
        (n.prototype._renderLarge = function (t) {
          this._clear(), Od(t, this.group), this._updateLargeClip(t);
        }),
        (n.prototype._incrementalRenderLarge = function (t, e) {
          this._removeBackground(), Od(e, this.group, this._progressiveEls, !0);
        }),
        (n.prototype._updateLargeClip = function (t) {
          var e = t.get("clip", !0) && yd(t.coordinateSystem, !1, t),
            n = this.group;
          e ? n.setClipPath(e) : n.removeClipPath();
        }),
        (n.prototype._enableRealtimeSort = function (t, e, n) {
          var r = this;
          if (e.count()) {
            var i = t.baseAxis;
            if (this._isFirstFrame)
              this._dispatchInitSort(e, t, n), (this._isFirstFrame = !1);
            else {
              var o = function (t) {
                var n = e.getItemGraphicEl(t),
                  r = n && n.shape;
                return (
                  (r && Math.abs(i.isHorizontal() ? r.height : r.width)) || 0
                );
              };
              (this._onRendered = function () {
                r._updateSortWithinSameData(e, o, i, n);
              }),
                n.getZr().on("rendered", this._onRendered);
            }
          }
        }),
        (n.prototype._dataSort = function (t, e, n) {
          var r = [];
          return (
            t.each(t.mapDimension(e.dim), function (t, e) {
              var i = n(e);
              (i = null == i ? 0 / 0 : i),
                r.push({ dataIndex: e, mappedValue: i, ordinalNumber: t });
            }),
            r.sort(function (t, e) {
              return e.mappedValue - t.mappedValue;
            }),
            {
              ordinalNumbers: y(r, function (t) {
                return t.ordinalNumber;
              }),
            }
          );
        }),
        (n.prototype._isOrderChangedWithinSameData = function (t, e, n) {
          for (
            var r = n.scale,
              i = t.mapDimension(n.dim),
              o = Number.MAX_VALUE,
              a = 0,
              s = r.getOrdinalMeta().categories.length;
            s > a;
            ++a
          ) {
            var l = t.rawIndexOf(i, r.getRawOrdinalNumber(a)),
              u = 0 > l ? Number.MIN_VALUE : e(t.indexOfRawIndex(l));
            if (u > o) return !0;
            o = u;
          }
          return !1;
        }),
        (n.prototype._isOrderDifferentInView = function (t, e) {
          for (
            var n = e.scale,
              r = n.getExtent(),
              i = Math.max(0, r[0]),
              o = Math.min(r[1], n.getOrdinalMeta().categories.length - 1);
            o >= i;
            ++i
          )
            if (t.ordinalNumbers[i] !== n.getRawOrdinalNumber(i)) return !0;
        }),
        (n.prototype._updateSortWithinSameData = function (t, e, n, r) {
          if (this._isOrderChangedWithinSameData(t, e, n)) {
            var i = this._dataSort(t, n, e);
            this._isOrderDifferentInView(i, n) &&
              (this._removeOnRenderedListener(r),
              r.dispatchAction({
                type: "changeAxisOrder",
                componentType: n.dim + "Axis",
                axisId: n.index,
                sortInfo: i,
              }));
          }
        }),
        (n.prototype._dispatchInitSort = function (t, e, n) {
          var r = e.baseAxis,
            i = this._dataSort(t, r, function (n) {
              return t.get(t.mapDimension(e.otherAxis.dim), n);
            });
          n.dispatchAction({
            type: "changeAxisOrder",
            componentType: r.dim + "Axis",
            isInitSort: !0,
            axisId: r.index,
            sortInfo: i,
          });
        }),
        (n.prototype.remove = function (t, e) {
          this._clear(this._model), this._removeOnRenderedListener(e);
        }),
        (n.prototype.dispose = function (t, e) {
          this._removeOnRenderedListener(e);
        }),
        (n.prototype._removeOnRenderedListener = function (t) {
          this._onRendered &&
            (t.getZr().off("rendered", this._onRendered),
            (this._onRendered = null));
        }),
        (n.prototype._clear = function (t) {
          var e = this.group,
            n = this._data;
          t && t.isAnimationEnabled() && n && !this._isLargeDraw
            ? (this._removeBackground(),
              (this._backgroundEls = []),
              n.eachItemGraphicEl(function (e) {
                as(e, t, w_(e).dataIndex);
              }))
            : e.removeAll(),
            (this._data = null),
            (this._isFirstFrame = !0);
        }),
        (n.prototype._removeBackground = function () {
          this.group.remove(this._backgroundGroup),
            (this._backgroundGroup = null);
        }),
        (n.type = "bar"),
        n
      );
    })(tS),
    nk = {
      cartesian2d: function (t, e) {
        var n = e.width < 0 ? -1 : 1,
          r = e.height < 0 ? -1 : 1;
        0 > n && ((e.x += e.width), (e.width = -e.width)),
          0 > r && ((e.y += e.height), (e.height = -e.height));
        var i = t.x + t.width,
          o = t.y + t.height,
          a = JC(e.x, t.x),
          s = tk(e.x + e.width, i),
          l = JC(e.y, t.y),
          u = tk(e.y + e.height, o),
          h = a > s,
          c = l > u;
        return (
          (e.x = h && a > i ? s : a),
          (e.y = c && l > o ? u : l),
          (e.width = h ? 0 : s - a),
          (e.height = c ? 0 : u - l),
          0 > n && ((e.x += e.width), (e.width = -e.width)),
          0 > r && ((e.y += e.height), (e.height = -e.height)),
          h || c
        );
      },
      polar: function (t, e) {
        var n = e.r0 <= e.r ? 1 : -1;
        if (0 > n) {
          var r = e.r;
          (e.r = e.r0), (e.r0 = r);
        }
        var i = tk(e.r, t.r),
          o = JC(e.r0, t.r0);
        (e.r = i), (e.r0 = o);
        var a = 0 > i - o;
        if (0 > n) {
          var r = e.r;
          (e.r = e.r0), (e.r0 = r);
        }
        return a;
      },
    },
    rk = {
      cartesian2d: function (t, e, n, r, i, o) {
        var a = new f_({ shape: h({}, r), z2: 1 });
        if (((a.__dataIndex = n), (a.name = "item"), o)) {
          var s = a.shape,
            l = i ? "height" : "width";
          s[l] = 0;
        }
        return a;
      },
      polar: function (t, e, n, r, i, o, a, s, l) {
        var u = !i && l ? QC : gx,
          h = new u({ shape: r, z2: 1 });
        h.name = "item";
        var c = Ad(i);
        if (((h.calculateTextPosition = wd(c, { isRoundCap: u === QC })), o)) {
          var p = h.shape,
            f = i ? "r" : "endAngle",
            d = {};
          (p[f] = i ? 0 : r.startAngle),
            (d[f] = r[f]),
            (s ? es : ns)(h, { shape: d }, o);
        }
        return h;
      },
    },
    ik = ["x", "y", "width", "height"],
    ok = ["cx", "cy", "r", "startAngle", "endAngle"],
    ak = {
      cartesian2d: function (t) {
        return !Dd(t, ik);
      },
      polar: function (t) {
        return !Dd(t, ok);
      },
    },
    sk = {
      cartesian2d: function (t, e, n) {
        var r = t.getItemLayout(e),
          i = n ? Pd(n, r) : 0,
          o = r.width > 0 ? 1 : -1,
          a = r.height > 0 ? 1 : -1;
        return {
          x: r.x + (o * i) / 2,
          y: r.y + (a * i) / 2,
          width: r.width - o * i,
          height: r.height - a * i,
        };
      },
      polar: function (t, e) {
        var n = t.getItemLayout(e);
        return {
          cx: n.cx,
          cy: n.cy,
          r0: n.r0,
          r: n.r,
          startAngle: n.startAngle,
          endAngle: n.endAngle,
          clockwise: n.clockwise,
        };
      },
    },
    lk = (function () {
      function t() {}
      return t;
    })(),
    uk = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.type = "largeBar"), n;
      }
      return (
        e(n, t),
        (n.prototype.getDefaultShape = function () {
          return new lk();
        }),
        (n.prototype.buildPath = function (t, e) {
          for (
            var n = e.points,
              r = this.baseDimIdx,
              i = 1 - this.baseDimIdx,
              o = [],
              a = [],
              s = this.barWidth,
              l = 0;
            l < n.length;
            l += 3
          )
            (a[r] = s),
              (a[i] = n[l + 2]),
              (o[r] = n[l + r]),
              (o[i] = n[l + i]),
              t.rect(o[0], o[1], a[0], a[1]);
        }),
        n
      );
    })(i_),
    hk = ph(
      function (t) {
        var e = this,
          n = Rd(e, t.offsetX, t.offsetY);
        w_(e).dataIndex = n >= 0 ? n : null;
      },
      30,
      !1
    );
  pf(Nd);
  var ck = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.type = "grid"),
        (n.dependencies = ["xAxis", "yAxis"]),
        (n.layoutMode = "box"),
        (n.defaultOption = {
          show: !1,
          z: 0,
          left: "10%",
          top: 60,
          right: "10%",
          bottom: 70,
          containLabel: !1,
          backgroundColor: "rgba(0,0,0,0)",
          borderWidth: 1,
          borderColor: "#ccc",
        }),
        n
      );
    })(zw),
    pk = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        e(n, t),
        (n.prototype.getCoordSysModel = function () {
          return this.getReferringComponents("grid", Jy).models[0];
        }),
        (n.type = "cartesian2dAxis"),
        n
      );
    })(zw);
  d(pk, nC);
  var fk = {
      show: !0,
      z: 0,
      inverse: !1,
      name: "",
      nameLocation: "end",
      nameRotate: null,
      nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." },
      nameTextStyle: {},
      nameGap: 15,
      silent: !1,
      triggerEvent: !1,
      tooltip: { show: !1 },
      axisPointer: {},
      axisLine: {
        show: !0,
        onZero: !0,
        onZeroAxisIndex: null,
        lineStyle: { color: "#6E7079", width: 1, type: "solid" },
        symbol: ["none", "none"],
        symbolSize: [10, 15],
      },
      axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } },
      axisLabel: {
        show: !0,
        inside: !1,
        rotate: 0,
        showMinLabel: null,
        showMaxLabel: null,
        margin: 8,
        fontSize: 12,
      },
      splitLine: {
        show: !0,
        lineStyle: { color: ["#E0E6F1"], width: 1, type: "solid" },
      },
      splitArea: {
        show: !1,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"],
        },
      },
    },
    dk = l(
      {
        boundaryGap: !0,
        deduplication: null,
        splitLine: { show: !1 },
        axisTick: { alignWithLabel: !1, interval: "auto" },
        axisLabel: { interval: "auto" },
      },
      fk
    ),
    gk = l(
      {
        boundaryGap: [0, 0],
        axisLine: { show: "auto" },
        axisTick: { show: "auto" },
        splitNumber: 5,
        minorTick: { show: !1, splitNumber: 5, length: 3, lineStyle: {} },
        minorSplitLine: { show: !1, lineStyle: { color: "#F4F7FD", width: 1 } },
      },
      fk
    ),
    vk = l(
      {
        splitNumber: 6,
        axisLabel: {
          showMinLabel: !1,
          showMaxLabel: !1,
          rich: { primary: { fontWeight: "bold" } },
        },
        splitLine: { show: !1 },
      },
      gk
    ),
    yk = c({ logBase: 10 }, gk),
    mk = { category: dk, value: gk, time: vk, log: yk },
    _k = { value: 1, category: 1, time: 1, log: 1 },
    xk = (function () {
      function t(t) {
        (this.type = "cartesian"),
          (this._dimList = []),
          (this._axes = {}),
          (this.name = t || "");
      }
      return (
        (t.prototype.getAxis = function (t) {
          return this._axes[t];
        }),
        (t.prototype.getAxes = function () {
          return y(
            this._dimList,
            function (t) {
              return this._axes[t];
            },
            this
          );
        }),
        (t.prototype.getAxesByScale = function (t) {
          return (
            (t = t.toLowerCase()),
            _(this.getAxes(), function (e) {
              return e.scale.type === t;
            })
          );
        }),
        (t.prototype.addAxis = function (t) {
          var e = t.dim;
          (this._axes[e] = t), this._dimList.push(e);
        }),
        t
      );
    })(),
    wk = ["x", "y"],
    bk = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = "cartesian2d"), (e.dimensions = wk), e;
      }
      return (
        e(n, t),
        (n.prototype.calcAffineTransform = function () {
          this._transform = this._invTransform = null;
          var t = this.getAxis("x").scale,
            e = this.getAxis("y").scale;
          if (Vd(t) && Vd(e)) {
            var n = t.getExtent(),
              r = e.getExtent(),
              i = this.dataToPoint([n[0], r[0]]),
              o = this.dataToPoint([n[1], r[1]]),
              a = n[1] - n[0],
              s = r[1] - r[0];
            if (a && s) {
              var l = (o[0] - i[0]) / a,
                u = (o[1] - i[1]) / s,
                h = i[0] - n[0] * l,
                c = i[1] - r[0] * u,
                p = (this._transform = [l, 0, 0, u, h, c]);
              this._invTransform = cr([], p);
            }
          }
        }),
        (n.prototype.getBaseAxis = function () {
          return (
            this.getAxesByScale("ordinal")[0] ||
            this.getAxesByScale("time")[0] ||
            this.getAxis("x")
          );
        }),
        (n.prototype.containPoint = function (t) {
          var e = this.getAxis("x"),
            n = this.getAxis("y");
          return (
            e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
          );
        }),
        (n.prototype.containData = function (t) {
          return (
            this.getAxis("x").containData(t[0]) &&
            this.getAxis("y").containData(t[1])
          );
        }),
        (n.prototype.dataToPoint = function (t, e, n) {
          n = n || [];
          var r = t[0],
            i = t[1];
          if (
            this._transform &&
            null != r &&
            isFinite(r) &&
            null != i &&
            isFinite(i)
          )
            return ve(n, t, this._transform);
          var o = this.getAxis("x"),
            a = this.getAxis("y");
          return (
            (n[0] = o.toGlobalCoord(o.dataToCoord(r, e))),
            (n[1] = a.toGlobalCoord(a.dataToCoord(i, e))),
            n
          );
        }),
        (n.prototype.clampData = function (t, e) {
          var n = this.getAxis("x").scale,
            r = this.getAxis("y").scale,
            i = n.getExtent(),
            o = r.getExtent(),
            a = n.parse(t[0]),
            s = r.parse(t[1]);
          return (
            (e = e || []),
            (e[0] = Math.min(
              Math.max(Math.min(i[0], i[1]), a),
              Math.max(i[0], i[1])
            )),
            (e[1] = Math.min(
              Math.max(Math.min(o[0], o[1]), s),
              Math.max(o[0], o[1])
            )),
            e
          );
        }),
        (n.prototype.pointToData = function (t, e) {
          var n = [];
          if (this._invTransform) return ve(n, t, this._invTransform);
          var r = this.getAxis("x"),
            i = this.getAxis("y");
          return (
            (n[0] = r.coordToData(r.toLocalCoord(t[0]), e)),
            (n[1] = i.coordToData(i.toLocalCoord(t[1]), e)),
            n
          );
        }),
        (n.prototype.getOtherAxis = function (t) {
          return this.getAxis("x" === t.dim ? "y" : "x");
        }),
        (n.prototype.getArea = function () {
          var t = this.getAxis("x").getGlobalExtent(),
            e = this.getAxis("y").getGlobalExtent(),
            n = Math.min(t[0], t[1]),
            r = Math.min(e[0], e[1]),
            i = Math.max(t[0], t[1]) - n,
            o = Math.max(e[0], e[1]) - r;
          return new Ly(n, r, i, o);
        }),
        n
      );
    })(xk),
    Sk = (function (t) {
      function n(e, n, r, i, o) {
        var a = t.call(this, e, n, r) || this;
        return (
          (a.index = 0),
          (a.type = i || "value"),
          (a.position = o || "bottom"),
          a
        );
      }
      return (
        e(n, t),
        (n.prototype.isHorizontal = function () {
          var t = this.position;
          return "top" === t || "bottom" === t;
        }),
        (n.prototype.getGlobalExtent = function (t) {
          var e = this.getExtent();
          return (
            (e[0] = this.toGlobalCoord(e[0])),
            (e[1] = this.toGlobalCoord(e[1])),
            t && e[0] > e[1] && e.reverse(),
            e
          );
        }),
        (n.prototype.pointToData = function (t, e) {
          return this.coordToData(
            this.toLocalCoord(t["x" === this.dim ? 0 : 1]),
            e
          );
        }),
        (n.prototype.setCategorySortInfo = function (t) {
          return "category" !== this.type
            ? !1
            : ((this.model.option.categorySortInfo = t),
              void this.scale.setSortInfo(t));
        }),
        n
      );
    })(xC),
    Mk = Math.log,
    Tk = (function () {
      function t(t, e, n) {
        (this.type = "grid"),
          (this._coordsMap = {}),
          (this._coordsList = []),
          (this._axesMap = {}),
          (this._axesList = []),
          (this.axisPointerEnabled = !0),
          (this.dimensions = wk),
          this._initCartesian(t, e, n),
          (this.model = t);
      }
      return (
        (t.prototype.getRect = function () {
          return this._rect;
        }),
        (t.prototype.update = function (t, e) {
          function n(t) {
            var e,
              n = w(t),
              r = n.length;
            if (r) {
              for (var i = [], o = r - 1; o >= 0; o--) {
                var a = +n[o],
                  s = t[a],
                  l = s.model,
                  u = s.scale;
                vp(u) && l.get("alignTicks") && null == l.get("interval")
                  ? i.push(s)
                  : ($p(u, l), vp(u) && (e = s));
              }
              i.length &&
                (e || ((e = i.pop()), $p(e.scale, e.model)),
                v(i, function (t) {
                  Ud(t.scale, t.model, e.scale);
                }));
            }
          }
          var r = this._axesMap;
          this._updateScale(t, this.model), n(r.x), n(r.y);
          var i = {};
          v(r.x, function (t) {
            qd(r, "y", t, i);
          }),
            v(r.y, function (t) {
              qd(r, "x", t, i);
            }),
            this.resize(this.model, e);
        }),
        (t.prototype.resize = function (t, e, n) {
          function r() {
            v(s, function (t) {
              var e = t.isHorizontal(),
                n = e ? [0, a.width] : [0, a.height],
                r = t.inverse ? 1 : 0;
              t.setExtent(n[r], n[1 - r]), jd(t, e ? a.x : a.y);
            });
          }
          var i = t.getBoxLayoutParams(),
            o = !n && t.get("containLabel"),
            a = Ml(i, { width: e.getWidth(), height: e.getHeight() });
          this._rect = a;
          var s = this._axesList;
          r(),
            o &&
              (v(s, function (t) {
                if (!t.model.get(["axisLabel", "inside"])) {
                  var e = nf(t);
                  if (e) {
                    var n = t.isHorizontal() ? "height" : "width",
                      r = t.model.get(["axisLabel", "margin"]);
                    (a[n] -= e[n] + r),
                      "top" === t.position
                        ? (a.y += e.height + r)
                        : "left" === t.position && (a.x += e.width + r);
                  }
                }
              }),
              r()),
            v(this._coordsList, function (t) {
              t.calcAffineTransform();
            });
        }),
        (t.prototype.getAxis = function (t, e) {
          var n = this._axesMap[t];
          return null != n ? n[e || 0] : void 0;
        }),
        (t.prototype.getAxes = function () {
          return this._axesList.slice();
        }),
        (t.prototype.getCartesian = function (t, e) {
          if (null != t && null != e) {
            var n = "x" + t + "y" + e;
            return this._coordsMap[n];
          }
          I(t) && ((e = t.yAxisIndex), (t = t.xAxisIndex));
          for (var r = 0, i = this._coordsList; r < i.length; r++)
            if (i[r].getAxis("x").index === t || i[r].getAxis("y").index === e)
              return i[r];
        }),
        (t.prototype.getCartesians = function () {
          return this._coordsList.slice();
        }),
        (t.prototype.convertToPixel = function (t, e, n) {
          var r = this._findConvertTarget(e);
          return r.cartesian
            ? r.cartesian.dataToPoint(n)
            : r.axis
            ? r.axis.toGlobalCoord(r.axis.dataToCoord(n))
            : null;
        }),
        (t.prototype.convertFromPixel = function (t, e, n) {
          var r = this._findConvertTarget(e);
          return r.cartesian
            ? r.cartesian.pointToData(n)
            : r.axis
            ? r.axis.coordToData(r.axis.toLocalCoord(n))
            : null;
        }),
        (t.prototype._findConvertTarget = function (t) {
          var e,
            n,
            r = t.seriesModel,
            i =
              t.xAxisModel ||
              (r && r.getReferringComponents("xAxis", Jy).models[0]),
            o =
              t.yAxisModel ||
              (r && r.getReferringComponents("yAxis", Jy).models[0]),
            a = t.gridModel,
            s = this._coordsList;
          if (r) (e = r.coordinateSystem), p(s, e) < 0 && (e = null);
          else if (i && o)
            e = this.getCartesian(i.componentIndex, o.componentIndex);
          else if (i) n = this.getAxis("x", i.componentIndex);
          else if (o) n = this.getAxis("y", o.componentIndex);
          else if (a) {
            var l = a.coordinateSystem;
            l === this && (e = this._coordsList[0]);
          }
          return { cartesian: e, axis: n };
        }),
        (t.prototype.containPoint = function (t) {
          var e = this._coordsList[0];
          return e ? e.containPoint(t) : void 0;
        }),
        (t.prototype._initCartesian = function (t, e) {
          function n(e) {
            return function (n, r) {
              if (Xd(n, t)) {
                var l = n.get("position");
                "x" === e
                  ? "top" !== l &&
                    "bottom" !== l &&
                    (l = o.bottom ? "top" : "bottom")
                  : "left" !== l &&
                    "right" !== l &&
                    (l = o.left ? "right" : "left"),
                  (o[l] = !0);
                var u = new Sk(e, Qp(n), [0, 0], n.get("type"), l),
                  h = "category" === u.type;
                (u.onBand = h && n.get("boundaryGap")),
                  (u.inverse = n.get("inverse")),
                  (n.axis = u),
                  (u.model = n),
                  (u.grid = i),
                  (u.index = r),
                  i._axesList.push(u),
                  (a[e][r] = u),
                  s[e]++;
              }
            };
          }
          var r = this,
            i = this,
            o = { left: !1, right: !1, top: !1, bottom: !1 },
            a = { x: {}, y: {} },
            s = { x: 0, y: 0 };
          return (
            e.eachComponent("xAxis", n("x"), this),
            e.eachComponent("yAxis", n("y"), this),
            s.x && s.y
              ? ((this._axesMap = a),
                void v(a.x, function (e, n) {
                  v(a.y, function (i, o) {
                    var a = "x" + n + "y" + o,
                      s = new bk(a);
                    (s.master = r),
                      (s.model = t),
                      (r._coordsMap[a] = s),
                      r._coordsList.push(s),
                      s.addAxis(e),
                      s.addAxis(i);
                  });
                }))
              : ((this._axesMap = {}), void (this._axesList = []))
          );
        }),
        (t.prototype._updateScale = function (t, e) {
          function n(t, e) {
            v(sf(t, e.dim), function (n) {
              e.scale.unionExtentFromData(t, n);
            });
          }
          v(this._axesList, function (t) {
            if ((t.scale.setExtent(1 / 0, -1 / 0), "category" === t.type)) {
              var e = t.model.get("categorySortInfo");
              t.scale.setSortInfo(e);
            }
          }),
            t.eachSeries(function (t) {
              if (Wd(t)) {
                var r = Gd(t),
                  i = r.xAxisModel,
                  o = r.yAxisModel;
                if (!Xd(i, e) || !Xd(o, e)) return;
                var a = this.getCartesian(i.componentIndex, o.componentIndex),
                  s = t.getData(),
                  l = a.getAxis("x"),
                  u = a.getAxis("y");
                n(s, l), n(s, u);
              }
            }, this);
        }),
        (t.prototype.getTooltipAxes = function (t) {
          var e = [],
            n = [];
          return (
            v(this.getCartesians(), function (r) {
              var i =
                  null != t && "auto" !== t ? r.getAxis(t) : r.getBaseAxis(),
                o = r.getOtherAxis(i);
              p(e, i) < 0 && e.push(i), p(n, o) < 0 && n.push(o);
            }),
            { baseAxes: e, otherAxes: n }
          );
        }),
        (t.create = function (e, n) {
          var r = [];
          return (
            e.eachComponent("grid", function (i, o) {
              var a = new t(i, e, n);
              (a.name = "grid_" + o),
                a.resize(i, n, !0),
                (i.coordinateSystem = a),
                r.push(a);
            }),
            e.eachSeries(function (t) {
              if (Wd(t)) {
                var e = Gd(t),
                  n = e.xAxisModel,
                  r = e.yAxisModel,
                  i = n.getCoordSysModel(),
                  o = i.coordinateSystem;
                t.coordinateSystem = o.getCartesian(
                  n.componentIndex,
                  r.componentIndex
                );
              }
            }),
            r
          );
        }),
        (t.dimensions = wk),
        t
      );
    })(),
    Ck = Math.PI,
    kk = (function () {
      function t(t, e) {
        (this.group = new Fy()),
          (this.opt = e),
          (this.axisModel = t),
          c(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0,
            handleAutoShown: function () {
              return !0;
            },
          });
        var n = new Fy({
          x: e.position[0],
          y: e.position[1],
          rotation: e.rotation,
        });
        n.updateTransform(), (this._transformGroup = n);
      }
      return (
        (t.prototype.hasBuilder = function (t) {
          return !!Dk[t];
        }),
        (t.prototype.add = function (t) {
          Dk[t](this.opt, this.axisModel, this.group, this._transformGroup);
        }),
        (t.prototype.getGroup = function () {
          return this.group;
        }),
        (t.innerTextLayout = function (t, e, n) {
          var r,
            i,
            o = Yr(e - t);
          return (
            jr(o)
              ? ((i = n > 0 ? "top" : "bottom"), (r = "center"))
              : jr(o - Ck)
              ? ((i = n > 0 ? "bottom" : "top"), (r = "center"))
              : ((i = "middle"),
                (r =
                  o > 0 && Ck > o
                    ? n > 0
                      ? "right"
                      : "left"
                    : n > 0
                    ? "left"
                    : "right")),
            { rotation: o, textAlign: r, textVerticalAlign: i }
          );
        }),
        (t.makeAxisEventDataBase = function (t) {
          var e = {
            componentType: t.mainType,
            componentIndex: t.componentIndex,
          };
          return (e[t.mainType + "Index"] = t.componentIndex), e;
        }),
        (t.isLabelSilent = function (t) {
          var e = t.get("tooltip");
          return t.get("silent") || !(t.get("triggerEvent") || (e && e.show));
        }),
        t
      );
    })(),
    Dk = {
      axisLine: function (t, e, n, r) {
        var i = e.get(["axisLine", "show"]);
        if (
          ("auto" === i &&
            t.handleAutoShown &&
            (i = t.handleAutoShown("axisLine")),
          i)
        ) {
          var o = e.axis.getExtent(),
            a = r.transform,
            s = [o[0], 0],
            l = [o[1], 0];
          a && (ve(s, s, a), ve(l, l, a));
          var u = h(
              { lineCap: "round" },
              e.getModel(["axisLine", "lineStyle"]).getLineStyle()
            ),
            c = new Tx({
              subPixelOptimize: !0,
              shape: { x1: s[0], y1: s[1], x2: l[0], y2: l[1] },
              style: u,
              strokeContainThreshold: t.strokeContainThreshold || 5,
              silent: !0,
              z2: 1,
            });
          (c.anid = "line"), n.add(c);
          var p = e.get(["axisLine", "symbol"]);
          if (null != p) {
            var f = e.get(["axisLine", "symbolSize"]);
            C(p) && (p = [p, p]), (C(f) || D(f)) && (f = [f, f]);
            var d = Oh(e.get(["axisLine", "symbolOffset"]) || 0, f),
              g = f[0],
              y = f[1];
            v(
              [
                { rotate: t.rotation + Math.PI / 2, offset: d[0], r: 0 },
                {
                  rotate: t.rotation - Math.PI / 2,
                  offset: d[1],
                  r: Math.sqrt(
                    (s[0] - l[0]) * (s[0] - l[0]) +
                      (s[1] - l[1]) * (s[1] - l[1])
                  ),
                },
              ],
              function (e, r) {
                if ("none" !== p[r] && null != p[r]) {
                  var i = Ph(p[r], -g / 2, -y / 2, g, y, u.stroke, !0),
                    o = e.r + e.offset;
                  i.attr({
                    rotation: e.rotate,
                    x: s[0] + o * Math.cos(t.rotation),
                    y: s[1] - o * Math.sin(t.rotation),
                    silent: !0,
                    z2: 11,
                  }),
                    n.add(i);
                }
              }
            );
          }
        }
      },
      axisTickLabel: function (t, e, n, r) {
        var i = eg(n, r, e, t),
          o = rg(n, r, e, t);
        if (
          (Kd(e, o, i),
          ng(n, r, e, t.tickDirection),
          e.get(["axisLabel", "hideOverlap"]))
        ) {
          var a = td(
            y(o, function (t) {
              return {
                label: t,
                priority: t.z2,
                defaultAttr: { ignore: t.ignore },
              };
            })
          );
          id(a);
        }
      },
      axisName: function (t, e, n, r) {
        var i = N(t.axisName, e.get("name"));
        if (i) {
          var o,
            a = e.get("nameLocation"),
            s = t.nameDirection,
            l = e.getModel("nameTextStyle"),
            u = e.get("nameGap") || 0,
            h = e.axis.getExtent(),
            c = h[0] > h[1] ? -1 : 1,
            p = [
              "start" === a
                ? h[0] - c * u
                : "end" === a
                ? h[1] + c * u
                : (h[0] + h[1]) / 2,
              Jd(a) ? t.labelOffset + s * u : 0,
            ],
            f = e.get("nameRotate");
          null != f && (f = (f * Ck) / 180);
          var d;
          Jd(a)
            ? (o = kk.innerTextLayout(
                t.rotation,
                null != f ? f : t.rotation,
                s
              ))
            : ((o = Zd(t.rotation, a, f || 0, h)),
              (d = t.axisNameAvailableWidth),
              null != d &&
                ((d = Math.abs(d / Math.sin(o.rotation))),
                !isFinite(d) && (d = null)));
          var g = l.getFont(),
            v = e.get("nameTruncate", !0) || {},
            y = v.ellipsis,
            m = N(t.nameTruncateMaxWidth, v.maxWidth, d),
            _ = new y_({
              x: p[0],
              y: p[1],
              rotation: o.rotation,
              silent: kk.isLabelSilent(e),
              style: As(l, {
                text: i,
                font: g,
                overflow: "truncate",
                width: m,
                ellipsis: y,
                fill:
                  l.getTextColor() || e.get(["axisLine", "lineStyle", "color"]),
                align: l.get("align") || o.textAlign,
                verticalAlign: l.get("verticalAlign") || o.textVerticalAlign,
              }),
              z2: 1,
            });
          if (
            (Ss({ el: _, componentModel: e, itemName: i }),
            (_.__fullText = i),
            (_.anid = "name"),
            e.get("triggerEvent"))
          ) {
            var x = kk.makeAxisEventDataBase(e);
            (x.targetType = "axisName"), (x.name = i), (w_(_).eventData = x);
          }
          r.add(_), _.updateTransform(), n.add(_), _.decomposeTransform();
        }
      },
    },
    Ik = {},
    Ak = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return (
        e(n, t),
        (n.prototype.render = function (e, n, r) {
          this.axisPointerClass && ig(e),
            t.prototype.render.apply(this, arguments),
            this._doUpdateAxisPointerClass(e, r, !0);
        }),
        (n.prototype.updateAxisPointer = function (t, e, n) {
          this._doUpdateAxisPointerClass(t, n, !1);
        }),
        (n.prototype.remove = function (t, e) {
          var n = this._axisPointer;
          n && n.remove(e);
        }),
        (n.prototype.dispose = function (e, n) {
          this._disposeAxisPointer(n),
            t.prototype.dispose.apply(this, arguments);
        }),
        (n.prototype._doUpdateAxisPointerClass = function (t, e, r) {
          var i = n.getAxisPointerClass(this.axisPointerClass);
          if (i) {
            var o = ag(t);
            o
              ? (this._axisPointer || (this._axisPointer = new i())).render(
                  t,
                  o,
                  e,
                  r
                )
              : this._disposeAxisPointer(e);
          }
        }),
        (n.prototype._disposeAxisPointer = function (t) {
          this._axisPointer && this._axisPointer.dispose(t),
            (this._axisPointer = null);
        }),
        (n.registerAxisPointerClass = function (t, e) {
          Ik[t] = e;
        }),
        (n.getAxisPointerClass = function (t) {
          return t && Ik[t];
        }),
        (n.type = "axis"),
        n
      );
    })($b),
    Lk = ki(),
    Pk = ["axisLine", "axisTickLabel", "axisName"],
    Ok = ["splitArea", "splitLine", "minorSplitLine"],
    Rk = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (
          (e.type = n.type), (e.axisPointerClass = "CartesianAxisPointer"), e
        );
      }
      return (
        e(n, t),
        (n.prototype.render = function (e, n, r, i) {
          this.group.removeAll();
          var o = this._axisGroup;
          if (
            ((this._axisGroup = new Fy()),
            this.group.add(this._axisGroup),
            e.get("show"))
          ) {
            var a = e.getCoordSysModel(),
              s = Hd(a, e),
              l = new kk(
                e,
                h(
                  {
                    handleAutoShown: function () {
                      for (
                        var t = a.coordinateSystem.getCartesians(), n = 0;
                        n < t.length;
                        n++
                      )
                        if (vp(t[n].getOtherAxis(e.axis).scale)) return !0;
                      return !1;
                    },
                  },
                  s
                )
              );
            v(Pk, l.add, l),
              this._axisGroup.add(l.getGroup()),
              v(
                Ok,
                function (t) {
                  e.get([t, "show"]) && Ek[t](this, this._axisGroup, e, a);
                },
                this
              );
            var u = i && "changeAxisOrder" === i.type && i.isInitSort;
            u || _s(o, this._axisGroup, e),
              t.prototype.render.call(this, e, n, r, i);
          }
        }),
        (n.prototype.remove = function () {
          hg(this);
        }),
        (n.type = "cartesianAxis"),
        n
      );
    })(Ak),
    Ek = {
      splitLine: function (t, e, n, r) {
        var i = n.axis;
        if (!i.scale.isBlank()) {
          var o = n.getModel("splitLine"),
            a = o.getModel("lineStyle"),
            s = a.get("color");
          s = M(s) ? s : [s];
          for (
            var l = r.coordinateSystem.getRect(),
              u = i.isHorizontal(),
              h = 0,
              p = i.getTicksCoords({ tickModel: o }),
              f = [],
              d = [],
              g = a.getLineStyle(),
              v = 0;
            v < p.length;
            v++
          ) {
            var y = i.toGlobalCoord(p[v].coord);
            u
              ? ((f[0] = y), (f[1] = l.y), (d[0] = y), (d[1] = l.y + l.height))
              : ((f[0] = l.x), (f[1] = y), (d[0] = l.x + l.width), (d[1] = y));
            var m = h++ % s.length,
              _ = p[v].tickValue;
            e.add(
              new Tx({
                anid: null != _ ? "line_" + p[v].tickValue : null,
                subPixelOptimize: !0,
                autoBatch: !0,
                shape: { x1: f[0], y1: f[1], x2: d[0], y2: d[1] },
                style: c({ stroke: s[m] }, g),
                silent: !0,
              })
            );
          }
        }
      },
      minorSplitLine: function (t, e, n, r) {
        var i = n.axis,
          o = n.getModel("minorSplitLine"),
          a = o.getModel("lineStyle"),
          s = r.coordinateSystem.getRect(),
          l = i.isHorizontal(),
          u = i.getMinorTicksCoords();
        if (u.length)
          for (
            var h = [], c = [], p = a.getLineStyle(), f = 0;
            f < u.length;
            f++
          )
            for (var d = 0; d < u[f].length; d++) {
              var g = i.toGlobalCoord(u[f][d].coord);
              l
                ? ((h[0] = g),
                  (h[1] = s.y),
                  (c[0] = g),
                  (c[1] = s.y + s.height))
                : ((h[0] = s.x),
                  (h[1] = g),
                  (c[0] = s.x + s.width),
                  (c[1] = g)),
                e.add(
                  new Tx({
                    anid: "minor_line_" + u[f][d].tickValue,
                    subPixelOptimize: !0,
                    autoBatch: !0,
                    shape: { x1: h[0], y1: h[1], x2: c[0], y2: c[1] },
                    style: p,
                    silent: !0,
                  })
                );
            }
      },
      splitArea: function (t, e, n, r) {
        ug(t, e, n, r);
      },
    },
    Bk = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = n.type), e;
      }
      return e(n, t), (n.type = "xAxis"), n;
    })(Rk),
    Nk = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = Bk.type), e;
      }
      return e(n, t), (n.type = "yAxis"), n;
    })(Rk),
    zk = (function (t) {
      function n() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.type = "grid"), e;
      }
      return (
        e(n, t),
        (n.prototype.render = function (t) {
          this.group.removeAll(),
            t.get("show") &&
              this.group.add(
                new f_({
                  shape: t.coordinateSystem.getRect(),
                  style: c(
                    { fill: t.get("backgroundColor") },
                    t.getItemStyle()
                  ),
                  silent: !0,
                  z2: -1,
                })
              );
        }),
        (n.type = "grid"),
        n
      );
    })($b),
    Fk = { offset: 0 };
  pf(cg),
    (t.version = $S),
    (t.dependencies = QS),
    (t.PRIORITY = gM),
    (t.init = wc),
    (t.connect = bc),
    (t.disConnect = Sc),
    (t.disconnect = oT),
    (t.dispose = Mc),
    (t.getInstanceByDom = Tc),
    (t.getInstanceById = Cc),
    (t.registerTheme = kc),
    (t.registerPreprocessor = Dc),
    (t.registerProcessor = Ic),
    (t.registerPostInit = Ac),
    (t.registerPostUpdate = Lc),
    (t.registerUpdateLifecycle = Pc),
    (t.registerAction = Oc),
    (t.registerCoordinateSystem = Rc),
    (t.getCoordinateSystemDimensions = Ec),
    (t.registerLayout = Bc),
    (t.registerVisual = Nc),
    (t.registerLoading = Fc),
    (t.setCanvasCreator = Vc),
    (t.registerMap = Hc),
    (t.getMap = Wc),
    (t.registerTransform = sT),
    (t.dataTool = gT),
    (t.registerLocale = Ws),
    (t.zrender = Uy),
    (t.matrix = fy),
    (t.vector = qg),
    (t.zrUtil = Hg),
    (t.color = zv),
    (t.helper = iC),
    (t.number = fC),
    (t.time = dC),
    (t.graphic = gC),
    (t.format = vC),
    (t.util = yC),
    (t.List = IT),
    (t.ComponentModel = zw),
    (t.ComponentView = $b),
    (t.SeriesModel = Kb),
    (t.ChartView = tS),
    (t.extendComponentModel = zf),
    (t.extendComponentView = Ff),
    (t.extendSeriesModel = Vf),
    (t.extendChartView = Hf),
    (t.throttle = ph),
    (t.use = pf),
    (t.setPlatformAPI = i),
    (t.parseGeoJSON = wf),
    (t.parseGeoJson = wf),
    (t.env = gg),
    (t.Model = uw),
    (t.Axis = xC),
    (t.innerDrawElementOnCanvas = ac);
});
