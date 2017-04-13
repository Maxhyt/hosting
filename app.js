!function e(r, t, n) {
    function o(i, u) {
        if (!t[i]) {
            if (!r[i]) {
                var c = "function" == typeof require && require;
                if (!u && c)
                    return c(i, !0);
                if (a)
                    return a(i, !0);
                var s = new Error("Cannot find module '" + i + "'");
                throw s.code = "MODULE_NOT_FOUND",
                s
            }
            var l = t[i] = {
                exports: {}
            };
            r[i][0].call(l.exports, function(e) {
                var t = r[i][1][e];
                return o(t ? t : e)
            }, l, l.exports, e, r, t, n)
        }
        return t[i].exports
    }
    for (var a = "function" == typeof require && require, i = 0; i < n.length; i++)
        o(n[i]);
    return o
}({
    1: [function(e, r, t) {
        "use strict";
        var n = e("es-abstract/es6");
        r.exports = function(e) {
            var r = n.ToObject(this)
              , t = n.ToInteger(n.ToLength(r.length));
            if (!n.IsCallable(e))
                throw new TypeError("Array#find: predicate must be a function");
            if (0 !== t)
                for (var o, a = arguments[1], i = 0; i < t; i++)
                    if (o = r[i],
                    n.Call(e, a, [o, i, r]))
                        return o
        }
    }
    , {
        "es-abstract/es6": 17
    }],
    2: [function(e, r, t) {
        "use strict";
        var n = e("define-properties")
          , o = e("es-abstract/es6")
          , a = e("./implementation")
          , i = e("./polyfill")
          , u = e("./shim")
          , c = Array.prototype.slice
          , s = function(e, r) {
            o.RequireObjectCoercible(e);
            var t = c.call(arguments, 1);
            return a.apply(e, t)
        };
        n(s, {
            getPolyfill: i,
            implementation: a,
            shim: u
        }),
        r.exports = s
    }
    , {
        "./implementation": 1,
        "./polyfill": 3,
        "./shim": 4,
        "define-properties": 15,
        "es-abstract/es6": 17
    }],
    3: [function(e, r, t) {
        "use strict";
        r.exports = function() {
            var r = Array.prototype.find && [, 1].find(function(e, r) {
                return 0 === r
            });
            return r ? Array.prototype.find : e("./implementation")
        }
    }
    , {
        "./implementation": 1
    }],
    4: [function(e, r, t) {
        "use strict";
        var n = e("define-properties")
          , o = e("./polyfill");
        r.exports = function() {
            var e = o();
            return n(Array.prototype, {
                find: e
            }, {
                find: function() {
                    return Array.prototype.find !== e
                }
            }),
            e
        }
    }
    , {
        "./polyfill": 3,
        "define-properties": 15
    }],
    5: [function(e, r, t) {
        "use strict";
        var n = e("es-abstract/es6");
        r.exports = function(e) {
            var r = n.ToObject(this)
              , t = n.ToLength(n.ToLength(r.length));
            if (!n.IsCallable(e))
                throw new TypeError("Array#findIndex: predicate must be a function");
            if (0 === t)
                return -1;
            for (var o, a = arguments[1], i = 0; i < t; i++)
                if (o = r[i],
                n.Call(e, a, [o, i, r]))
                    return i;
            return -1
        }
    }
    , {
        "es-abstract/es6": 17
    }],
    6: [function(e, r, t) {
        "use strict";
        var n = e("define-properties")
          , o = e("es-abstract/es6")
          , a = e("./implementation")
          , i = e("./polyfill")
          , u = e("./shim")
          , c = (Array.prototype.slice,
        function(e, r) {
            return o.RequireObjectCoercible(e),
            a.apply(e, r)
        }
        );
        n(c, {
            implementation: a,
            getPolyfill: i,
            shim: u
        }),
        r.exports = c
    }
    , {
        "./implementation": 5,
        "./polyfill": 7,
        "./shim": 8,
        "define-properties": 15,
        "es-abstract/es6": 17
    }],
    7: [function(e, r, t) {
        "use strict";
        r.exports = function() {
            var r = Array.prototype.findIndex && 0 === [, 1].findIndex(function(e, r) {
                return 0 === r
            });
            return r ? Array.prototype.findIndex : e("./implementation")
        }
    }
    , {
        "./implementation": 5
    }],
    8: [function(e, r, t) {
        "use strict";
        var n = e("define-properties")
          , o = e("./polyfill");
        r.exports = function() {
            var e = o();
            return n(Array.prototype, {
                findIndex: e
            }, {
                findIndex: function() {
                    return Array.prototype.findIndex !== e
                }
            }),
            e
        }
    }
    , {
        "./polyfill": 7,
        "define-properties": 15
    }],
    9: [function(e, r, t) {
        function n(e, r, t, n, o, a) {
            e.forEach(function(e) {
                e(r, t, n, o, a)
            })
        }
        r.exports = n
    }
    , {}],
    10: [function(e, r, t) {
        function n(e) {
            function r(e) {
                e.onStateChange && h.push(e.onStateChange),
                e.onError && g.push(i(e.onError)),
                e.onAction && m.push(e.onAction),
                e.wrapSubscriptions && b.push(e.wrapSubscriptions),
                e.wrapInitialState && v.push(e.wrapInitialState),
                e.wrapReducers && y.push(e.wrapReducers),
                e.wrapEffects && w.push(e.wrapEffects),
                e.models && e.models.forEach(t)
            }
            function t(e) {
                C.push(e)
            }
            function n(e) {
                e = e || {};
                var r = e.state;
                if (!e.state && e.freeze === !1)
                    return l(L);
                if (!e.state)
                    return Object.freeze(l(L));
                var t = []
                  , n = {};
                C.forEach(function(e) {
                    var a = e.namespace;
                    t.push(a);
                    var i = e.state || {};
                    a ? (n[a] = n[a] || {},
                    o(a, i, n),
                    n[a] = l(n[a], r[a])) : c(n, i)
                }),
                Object.keys(r).forEach(function(e) {
                    t.indexOf(e) === -1 && (n[e] = r[e])
                });
                var a = l(L, l(r, n))
                  , i = u(a, v);
                return e.freeze === !1 ? i : Object.freeze(i)
            }
            function p(e) {
                function r(e, r) {
                    return function(n, o, a) {
                        function i(e) {
                            e = e || null,
                            e && f(g, e, L, function(e) {
                                return function(r, n) {
                                    n = "undefined" == typeof n ? null : n,
                                    t(r, n, e, u)
                                }
                            })
                        }
                        a || r || (a = o,
                        o = null),
                        o = "undefined" == typeof o ? null : o;
                        var u = r ? i : a;
                        t(n, o, e, u)
                    }
                }
                function t(e, t, n, o) {
                    q || N(function() {
                        var a = !1
                          , i = !1
                          , u = l(L);
                        m.length && f(m, L, t, e, n, r);
                        var s = e;
                        if (/:/.test(e)) {
                            var p = e.split(":")
                              , d = p.shift();
                            s = p.join(":")
                        }
                        var g = d ? T[d] : T;
                        if (g && g[s]) {
                            if (d) {
                                var b = g[s](L[d], t);
                                u[d] = l(L[d], b)
                            } else
                                c(u, T[s](L, t));
                            a = !0,
                            h.length && f(h, u, t, L, s, r),
                            L = u,
                            o(null, u)
                        }
                        var v = d ? k[d] : k;
                        if (!a && v && v[s]) {
                            var y = r("effect: " + e);
                            d ? v[s](L[d], t, y, o) : v[s](L, t, y, o),
                            i = !0
                        }
                        if (!a && !i)
                            throw new Error("Could not find action " + s)
                    })()
                }
                return e = e || {},
                C.forEach(function(t) {
                    var n = t.namespace;
                    if (!E && t.state && e.state !== !1) {
                        var a = t.state || {};
                        n ? (L[n] = L[n] || {},
                        o(n, a, L)) : c(L, a)
                    }
                    !x && t.reducers && e.reducers !== !1 && o(n, t.reducers, T, function(e) {
                        return u(e, y)
                    }),
                    !A && t.effects && e.effects !== !1 && o(n, t.effects, k, function(e) {
                        return u(e, w)
                    }),
                    !D && t.subscriptions && e.subscriptions !== !1 && o(n, t.subscriptions, S, function(e, t) {
                        var o = r("subscription: " + (n ? n + ":" + t : t));
                        return e = u(e, b),
                        e(o, function(e) {
                            f(g, e, L, r)
                        }),
                        e
                    })
                }),
                E || e.state === !1 || (L = u(L, v)),
                e.noSubscriptions || (D = !0),
                e.noReducers || (x = !0),
                e.noEffects || (A = !0),
                e.noState || (E = !0),
                g.length || g.push(i(a)),
                r
            }
            function d() {
                q = !0
            }
            e = e || {};
            var h = []
              , m = []
              , g = []
              , b = []
              , v = []
              , y = []
              , w = [];
            r(e);
            var x = !1
              , A = !1
              , E = !1
              , D = !1
              , q = !1
              , S = p._subscriptions = {}
              , T = p._reducers = {}
              , k = p._effects = {}
              , C = p._models = []
              , L = {}
              , N = s();
            return p.model = t,
            p.state = n,
            p.start = p,
            p.stop = d,
            p.use = r,
            p
        }
        function o(e, r, t, n) {
            e && !t[e] && (t[e] = {}),
            Object.keys(r).forEach(function(o) {
                var a = n ? n(r[o], o) : r[o];
                e ? t[e][o] = a : t[o] = a
            })
        }
        function a(e) {
            throw e
        }
        function i(e) {
            return function(r, t, n) {
                r && e(r, t, n)
            }
        }
        function u(e, r) {
            return r.forEach(function(r) {
                e = r(e)
            }),
            e
        }
        var c = e("xtend/mutable")
          , s = e("nanotick")
          , l = e("xtend")
          , f = e("./apply-hook");
        r.exports = n
    }
    , {
        "./apply-hook": 9,
        nanotick: 43,
        xtend: 61,
        "xtend/mutable": 62
    }],
    11: [function(e, r, t) {
        function n(e, r, t) {
            function a(e) {
                if (Array.isArray(e))
                    for (var r = 0; r < e.length; r++) {
                        var t = e[r];
                        if (Array.isArray(t))
                            a(t);
                        else {
                            if (("number" == typeof t || "boolean" == typeof t || t instanceof Date || t instanceof RegExp) && (t = t.toString()),
                            "string" == typeof t) {
                                if (f.lastChild && "#text" === f.lastChild.nodeName) {
                                    f.lastChild.nodeValue += t;
                                    continue
                                }
                                t = o.createTextNode(t)
                            }
                            t && t.nodeType && f.appendChild(t)
                        }
                    }
            }
            var f;
            l.indexOf(e) !== -1 && (r.namespace = u);
            var p = !1;
            if (r.namespace && (p = r.namespace,
            delete r.namespace),
            f = p ? o.createElementNS(p, e) : o.createElement(e),
            r.onload || r.onunload) {
                var d = r.onload || function() {}
                  , h = r.onunload || function() {}
                ;
                i(f, function() {
                    d(f)
                }, function() {
                    h(f)
                }, n.caller.caller.caller),
                delete r.onload,
                delete r.onunload
            }
            for (var m in r)
                if (r.hasOwnProperty(m)) {
                    var g = m.toLowerCase()
                      , b = r[m];
                    if ("classname" === g && (g = "class",
                    m = "class"),
                    "htmlFor" === m && (m = "for"),
                    s[g])
                        if ("true" === b)
                            b = g;
                        else if ("false" === b)
                            continue;
                    "on" === g.slice(0, 2) ? f[m] = b : p ? "xlink:href" === m ? f.setAttributeNS(c, m, b) : /^xmlns($|:)/i.test(m) || f.setAttributeNS(null, m, b) : f.setAttribute(m, b)
                }
            return a(t),
            f
        }
        var o = e("global/document")
          , a = e("hyperx")
          , i = e("on-load")
          , u = "http://www.w3.org/2000/svg"
          , c = "http://www.w3.org/1999/xlink"
          , s = {
            autofocus: 1,
            checked: 1,
            defaultchecked: 1,
            disabled: 1,
            formnovalidate: 1,
            indeterminate: 1,
            readonly: 1,
            required: 1,
            selected: 1,
            willvalidate: 1
        }
          , l = ["svg", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"];
        r.exports = a(n),
        r.exports.default = r.exports,
        r.exports.createElement = n
    }
    , {
        "global/document": 31,
        hyperx: 35,
        "on-load": 46
    }],
    12: [function(e, r, t) {}
    , {}],
    13: [function(e, r, t) {
        r.exports = e("yo-yo")
    }
    , {
        "yo-yo": 63
    }],
    14: [function(e, r, t) {
        function n(e) {
            function r(e, r) {
                function t() {
                    return function() {}
                }
                r = r || {},
                g.start({
                    subscriptions: !1,
                    reducers: !1,
                    effects: !1
                });
                const n = g.state({
                    state: r
                })
                  , o = m(v, w, t)
                  , a = o(e, n);
                return a.outerHTML || a.toString()
            }
            function t() {
                function r(e) {
                    y = e
                }
                g.model(o(e));
                const n = g.start(e);
                b = t._router = m(v, w, n);
                const a = g.state({
                    state: {}
                })
                  , i = b(a.location.href, a);
                return y = i,
                i.done = r,
                i
            }
            function n(e, r, t, n, o) {
                x || (x = p(function(e, r) {
                    const t = b(e.location.href, e, r);
                    y = h.update(y, t)
                })),
                x(e, t)
            }
            function a(e, r) {
                v = e,
                w = r
            }
            function i(e) {
                g.model(e)
            }
            function c(e) {
                g.use(e)
            }
            function m(r, t, n) {
                function o(r, t) {
                    const o = n("view: " + r, !0);
                    return function(r) {
                        return function(n) {
                            const i = d(n);
                            i.location = d(i.location, {
                                params: r
                            });
                            const u = a;
                            return a = i,
                            e.freeze !== !1 && Object.freeze(i),
                            t(i, u, o)
                        }
                    }
                }
                var a = null;
                t || (t = r,
                r = {}),
                r = l({
                    thunk: "match"
                }, r);
                const i = u(r, t);
                return s(i, o),
                i
            }
            e = e || {};
            const g = t._store = f();
            var b = t._router = null
              , v = null
              , y = null
              , w = null
              , x = null;
            return g.use({
                onStateChange: n
            }),
            g.use(e),
            t.toString = r,
            t.router = a,
            t.model = i,
            t.start = t,
            t.use = c,
            t
        }
        function o(e) {
            function r(r, t) {
                if (e.history !== !1 && t.hash && t.hash !== r.hash)
                    try {
                        const n = document.querySelector(t.hash);
                        n && n.scrollIntoView(!0)
                    } catch (e) {
                        return t
                    }
                return t
            }
            function t(e, r, t, n) {
                const o = a(e, r);
                t("location:update", o, n)
            }
            function n(r, t, n, o) {
                const i = a(r, t);
                e.history !== !1 && i.href !== r.href && window.history.pushState({}, null, i.href),
                n("location:update", i, o)
            }
            function o(e) {
                const r = {};
                return e.history !== !1 && (r.handleHistory = function(e, r) {
                    i(function(t) {
                        e("location:touch", t, r)
                    })
                }
                ),
                e.href !== !1 && (r.handleHref = function(e, r) {
                    c(function(t) {
                        e("location:set", t, r)
                    })
                }
                ),
                r
            }
            return {
                namespace: "location",
                state: l(a(), {
                    params: {}
                }),
                subscriptions: o(e),
                effects: {
                    set: n,
                    touch: t
                },
                reducers: {
                    update: r
                }
            }
        }
        const a = e("sheet-router/create-location")
          , i = e("sheet-router/history")
          , u = e("sheet-router")
          , c = e("sheet-router/href")
          , s = e("sheet-router/walk")
          , l = e("xtend/mutable")
          , f = e("barracks")
          , p = e("nanoraf")
          , d = e("xtend")
          , h = e("yo-yo");
        r.exports = n
    }
    , {
        barracks: 10,
        nanoraf: 42,
        "sheet-router": 53,
        "sheet-router/create-location": 50,
        "sheet-router/history": 51,
        "sheet-router/href": 52,
        "sheet-router/walk": 55,
        xtend: 61,
        "xtend/mutable": 62,
        "yo-yo": 63
    }],
    15: [function(e, r, t) {
        "use strict";
        var n = e("object-keys")
          , o = e("foreach")
          , a = "function" == typeof Symbol && "symbol" == typeof Symbol()
          , i = Object.prototype.toString
          , u = function(e) {
            return "function" == typeof e && "[object Function]" === i.call(e)
        }
          , c = function() {
            var e = {};
            try {
                Object.defineProperty(e, "x", {
                    enumerable: !1,
                    value: e
                });
                for (var r in e)
                    return !1;
                return e.x === e
            } catch (e) {
                return !1
            }
        }
          , s = Object.defineProperty && c()
          , l = function(e, r, t, n) {
            (!(r in e) || u(n) && n()) && (s ? Object.defineProperty(e, r, {
                configurable: !0,
                enumerable: !1,
                value: t,
                writable: !0
            }) : e[r] = t)
        }
          , f = function(e, r) {
            var t = arguments.length > 2 ? arguments[2] : {}
              , i = n(r);
            a && (i = i.concat(Object.getOwnPropertySymbols(r))),
            o(i, function(n) {
                l(e, n, r[n], t[n])
            })
        };
        f.supportsDescriptors = !!s,
        r.exports = f
    }
    , {
        foreach: 28,
        "object-keys": 44
    }],
    16: [function(e, r, t) {
        "use strict";
        var n = e("./helpers/isNaN")
          , o = e("./helpers/isFinite")
          , a = e("./helpers/sign")
          , i = e("./helpers/mod")
          , u = e("is-callable")
          , c = e("es-to-primitive/es5")
          , s = {
            ToPrimitive: c,
            ToBoolean: function(e) {
                return Boolean(e)
            },
            ToNumber: function(e) {
                return Number(e)
            },
            ToInteger: function(e) {
                var r = this.ToNumber(e);
                return n(r) ? 0 : 0 !== r && o(r) ? a(r) * Math.floor(Math.abs(r)) : r
            },
            ToInt32: function(e) {
                return this.ToNumber(e) >> 0
            },
            ToUint32: function(e) {
                return this.ToNumber(e) >>> 0
            },
            ToUint16: function(e) {
                var r = this.ToNumber(e);
                if (n(r) || 0 === r || !o(r))
                    return 0;
                var t = a(r) * Math.floor(Math.abs(r));
                return i(t, 65536)
            },
            ToString: function(e) {
                return String(e)
            },
            ToObject: function(e) {
                return this.CheckObjectCoercible(e),
                Object(e)
            },
            CheckObjectCoercible: function(e, r) {
                if (null == e)
                    throw new TypeError(r || "Cannot call method on " + e);
                return e
            },
            IsCallable: u,
            SameValue: function(e, r) {
                return e === r ? 0 !== e || 1 / e === 1 / r : n(e) && n(r)
            },
            Type: function(e) {
                return null === e ? "Null" : "undefined" == typeof e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : void 0
            }
        };
        r.exports = s
    }
    , {
        "./helpers/isFinite": 19,
        "./helpers/isNaN": 20,
        "./helpers/mod": 22,
        "./helpers/sign": 23,
        "es-to-primitive/es5": 24,
        "is-callable": 36
    }],
    17: [function(e, r, t) {
        "use strict";
        var n = Object.prototype.toString
          , o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          , a = o ? Symbol.prototype.toString : n
          , i = e("./helpers/isNaN")
          , u = e("./helpers/isFinite")
          , c = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1
          , s = e("./helpers/assign")
          , l = e("./helpers/sign")
          , f = e("./helpers/mod")
          , p = e("./helpers/isPrimitive")
          , d = e("es-to-primitive/es6")
          , h = parseInt
          , m = e("function-bind")
          , g = m.call(Function.call, String.prototype.slice)
          , b = m.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i)
          , v = m.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i)
          , y = ["", "​", "￾"].join("")
          , w = new RegExp("[" + y + "]","g")
          , x = m.call(Function.call, RegExp.prototype.test, w)
          , A = /^[\-\+]0x[0-9a-f]+$/i
          , E = m.call(Function.call, RegExp.prototype.test, A)
          , D = ["\t\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff"].join("")
          , q = new RegExp("(^[" + D + "]+)|([" + D + "]+$)","g")
          , S = m.call(Function.call, String.prototype.replace)
          , T = function(e) {
            return S(e, q, "")
        }
          , k = e("./es5")
          , C = e("is-regex")
          , L = s(s({}, k), {
            Call: function(e, r) {
                var t = arguments.length > 2 ? arguments[2] : [];
                if (!this.IsCallable(e))
                    throw new TypeError(e + " is not a function");
                return e.apply(r, t)
            },
            ToPrimitive: d,
            ToNumber: function(e) {
                var r = p(e) ? e : d(e, "number");
                if ("symbol" == typeof r)
                    throw new TypeError("Cannot convert a Symbol value to a number");
                if ("string" == typeof r) {
                    if (b(r))
                        return this.ToNumber(h(g(r, 2), 2));
                    if (v(r))
                        return this.ToNumber(h(g(r, 2), 8));
                    if (x(r) || E(r))
                        return NaN;
                    var t = T(r);
                    if (t !== r)
                        return this.ToNumber(t)
                }
                return Number(r)
            },
            ToInt16: function(e) {
                var r = this.ToUint16(e);
                return r >= 32768 ? r - 65536 : r
            },
            ToInt8: function(e) {
                var r = this.ToUint8(e);
                return r >= 128 ? r - 256 : r
            },
            ToUint8: function(e) {
                var r = this.ToNumber(e);
                if (i(r) || 0 === r || !u(r))
                    return 0;
                var t = l(r) * Math.floor(Math.abs(r));
                return f(t, 256)
            },
            ToUint8Clamp: function(e) {
                var r = this.ToNumber(e);
                if (i(r) || r <= 0)
                    return 0;
                if (r >= 255)
                    return 255;
                var t = Math.floor(e);
                return t + .5 < r ? t + 1 : r < t + .5 ? t : t % 2 !== 0 ? t + 1 : t
            },
            ToString: function(e) {
                if ("symbol" == typeof e)
                    throw new TypeError("Cannot convert a Symbol value to a string");
                return String(e)
            },
            ToObject: function(e) {
                return this.RequireObjectCoercible(e),
                Object(e)
            },
            ToPropertyKey: function(e) {
                var r = this.ToPrimitive(e, String);
                return "symbol" == typeof r ? a.call(r) : this.ToString(r)
            },
            ToLength: function(e) {
                var r = this.ToInteger(e);
                return r <= 0 ? 0 : r > c ? c : r
            },
            CanonicalNumericIndexString: function(e) {
                if ("[object String]" !== n.call(e))
                    throw new TypeError("must be a string");
                if ("-0" === e)
                    return -0;
                var r = this.ToNumber(e);
                return this.SameValue(this.ToString(r), e) ? r : void 0
            },
            RequireObjectCoercible: k.CheckObjectCoercible,
            IsArray: Array.isArray || function(e) {
                return "[object Array]" === n.call(e)
            }
            ,
            IsConstructor: function(e) {
                return "function" == typeof e && !!e.prototype
            },
            IsExtensible: function(e) {
                return !Object.preventExtensions || !p(e) && Object.isExtensible(e)
            },
            IsInteger: function(e) {
                if ("number" != typeof e || i(e) || !u(e))
                    return !1;
                var r = Math.abs(e);
                return Math.floor(r) === r
            },
            IsPropertyKey: function(e) {
                return "string" == typeof e || "symbol" == typeof e
            },
            IsRegExp: function(e) {
                if (!e || "object" != typeof e)
                    return !1;
                if (o) {
                    var r = e[Symbol.match];
                    if ("undefined" != typeof r)
                        return k.ToBoolean(r)
                }
                return C(e)
            },
            SameValueZero: function(e, r) {
                return e === r || i(e) && i(r)
            },
            Type: function(e) {
                return "symbol" == typeof e ? "Symbol" : k.Type(e)
            },
            SpeciesConstructor: function(e, r) {
                if ("Object" !== this.Type(e))
                    throw new TypeError("Assertion failed: Type(O) is not Object");
                var t = e.constructor;
                if ("undefined" == typeof t)
                    return r;
                if ("Object" !== this.Type(t))
                    throw new TypeError("O.constructor is not an Object");
                var n = o && Symbol.species ? t[Symbol.species] : void 0;
                if (null == n)
                    return r;
                if (this.IsConstructor(n))
                    return n;
                throw new TypeError("no constructor found")
            }
        });
        delete L.CheckObjectCoercible,
        r.exports = L
    }
    , {
        "./es5": 16,
        "./helpers/assign": 18,
        "./helpers/isFinite": 19,
        "./helpers/isNaN": 20,
        "./helpers/isPrimitive": 21,
        "./helpers/mod": 22,
        "./helpers/sign": 23,
        "es-to-primitive/es6": 25,
        "function-bind": 30,
        "is-regex": 39
    }],
    18: [function(e, r, t) {
        var n = Object.prototype.hasOwnProperty;
        r.exports = Object.assign || function(e, r) {
            for (var t in r)
                n.call(r, t) && (e[t] = r[t]);
            return e
        }
    }
    , {}],
    19: [function(e, r, t) {
        var n = Number.isNaN || function(e) {
            return e !== e
        }
        ;
        r.exports = Number.isFinite || function(e) {
            return "number" == typeof e && !n(e) && e !== 1 / 0 && e !== -(1 / 0)
        }
    }
    , {}],
    20: [function(e, r, t) {
        r.exports = Number.isNaN || function(e) {
            return e !== e
        }
    }
    , {}],
    21: [function(e, r, t) {
        r.exports = function(e) {
            return null === e || "function" != typeof e && "object" != typeof e
        }
    }
    , {}],
    22: [function(e, r, t) {
        r.exports = function(e, r) {
            var t = e % r;
            return Math.floor(t >= 0 ? t : t + r)
        }
    }
    , {}],
    23: [function(e, r, t) {
        r.exports = function(e) {
            return e >= 0 ? 1 : -1
        }
    }
    , {}],
    24: [function(e, r, t) {
        "use strict";
        var n = Object.prototype.toString
          , o = e("./helpers/isPrimitive")
          , a = e("is-callable")
          , i = {
            "[[DefaultValue]]": function(e, r) {
                var t = r || ("[object Date]" === n.call(e) ? String : Number);
                if (t === String || t === Number) {
                    var i, u, c = t === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                    for (u = 0; u < c.length; ++u)
                        if (a(e[c[u]]) && (i = e[c[u]](),
                        o(i)))
                            return i;
                    throw new TypeError("No default value")
                }
                throw new TypeError("invalid [[DefaultValue]] hint supplied")
            }
        };
        r.exports = function(e, r) {
            return o(e) ? e : i["[[DefaultValue]]"](e, r)
        }
    }
    , {
        "./helpers/isPrimitive": 26,
        "is-callable": 36
    }],
    25: [function(e, r, t) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          , o = e("./helpers/isPrimitive")
          , a = e("is-callable")
          , i = e("is-date-object")
          , u = e("is-symbol")
          , c = function(e, r) {
            if ("undefined" == typeof e || null === e)
                throw new TypeError("Cannot call method on " + e);
            if ("string" != typeof r || "number" !== r && "string" !== r)
                throw new TypeError('hint must be "string" or "number"');
            var t, n, i, u = "string" === r ? ["toString", "valueOf"] : ["valueOf", "toString"];
            for (i = 0; i < u.length; ++i)
                if (t = e[u[i]],
                a(t) && (n = t.call(e),
                o(n)))
                    return n;
            throw new TypeError("No default value")
        }
          , s = function(e, r) {
            var t = e[r];
            if (null !== t && "undefined" != typeof t) {
                if (!a(t))
                    throw new TypeError(t + " returned for property " + r + " of object " + e + " is not a function");
                return t
            }
        };
        r.exports = function(e, r) {
            if (o(e))
                return e;
            var t = "default";
            arguments.length > 1 && (r === String ? t = "string" : r === Number && (t = "number"));
            var a;
            if (n && (Symbol.toPrimitive ? a = s(e, Symbol.toPrimitive) : u(e) && (a = Symbol.prototype.valueOf)),
            "undefined" != typeof a) {
                var l = a.call(e, t);
                if (o(l))
                    return l;
                throw new TypeError("unable to convert exotic object to primitive")
            }
            return "default" === t && (i(e) || u(e)) && (t = "string"),
            c(e, "default" === t ? "number" : t)
        }
    }
    , {
        "./helpers/isPrimitive": 26,
        "is-callable": 36,
        "is-date-object": 37,
        "is-symbol": 40
    }],
    26: [function(e, r, t) {
        arguments[4][21][0].apply(t, arguments)
    }
    , {
        dup: 21
    }],
    27: [function(e, r, t) {
        function n(e, r, t) {
            if (!u(r))
                throw new TypeError("iterator must be a function");
            arguments.length < 3 && (t = this),
            "[object Array]" === c.call(e) ? o(e, r, t) : "string" == typeof e ? a(e, r, t) : i(e, r, t)
        }
        function o(e, r, t) {
            for (var n = 0, o = e.length; n < o; n++)
                s.call(e, n) && r.call(t, e[n], n, e)
        }
        function a(e, r, t) {
            for (var n = 0, o = e.length; n < o; n++)
                r.call(t, e.charAt(n), n, e)
        }
        function i(e, r, t) {
            for (var n in e)
                s.call(e, n) && r.call(t, e[n], n, e)
        }
        var u = e("is-function");
        r.exports = n;
        var c = Object.prototype.toString
          , s = Object.prototype.hasOwnProperty
    }
    , {
        "is-function": 38
    }],
    28: [function(e, r, t) {
        var n = Object.prototype.hasOwnProperty
          , o = Object.prototype.toString;
        r.exports = function(e, r, t) {
            if ("[object Function]" !== o.call(r))
                throw new TypeError("iterator must be a function");
            var a = e.length;
            if (a === +a)
                for (var i = 0; i < a; i++)
                    r.call(t, e[i], i, e);
            else
                for (var u in e)
                    n.call(e, u) && r.call(t, e[u], u, e)
        }
    }
    , {}],
    29: [function(e, r, t) {
        var n = "Function.prototype.bind called on incompatible "
          , o = Array.prototype.slice
          , a = Object.prototype.toString
          , i = "[object Function]";
        r.exports = function(e) {
            var r = this;
            if ("function" != typeof r || a.call(r) !== i)
                throw new TypeError(n + r);
            for (var t, u = o.call(arguments, 1), c = function() {
                if (this instanceof t) {
                    var n = r.apply(this, u.concat(o.call(arguments)));
                    return Object(n) === n ? n : this
                }
                return r.apply(e, u.concat(o.call(arguments)))
            }, s = Math.max(0, r.length - u.length), l = [], f = 0; f < s; f++)
                l.push("$" + f);
            if (t = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(c),
            r.prototype) {
                var p = function() {};
                p.prototype = r.prototype,
                t.prototype = new p,
                p.prototype = null
            }
            return t
        }
    }
    , {}],
    30: [function(e, r, t) {
        var n = e("./implementation");
        r.exports = Function.prototype.bind || n
    }
    , {
        "./implementation": 29
    }],
    31: [function(e, r, t) {
        (function(t) {
            var n = "undefined" != typeof t ? t : "undefined" != typeof window ? window : {}
              , o = e("min-document");
            if ("undefined" != typeof document)
                r.exports = document;
            else {
                var a = n["__GLOBAL_DOCUMENT_CACHE@4"];
                a || (a = n["__GLOBAL_DOCUMENT_CACHE@4"] = o),
                r.exports = a
            }
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "min-document": 12
    }],
    32: [function(e, r, t) {
        (function(e) {
            "undefined" != typeof window ? r.exports = window : "undefined" != typeof e ? r.exports = e : "undefined" != typeof self ? r.exports = self : r.exports = {}
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    33: [function(e, r, t) {
        (function(e) {
            !function(n) {
                var o = "object" == typeof t && t
                  , a = "object" == typeof r && r && r.exports == o && r
                  , i = "object" == typeof e && e;
                i.global !== i && i.window !== i || (n = i);
                var u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
                  , c = /[\x01-\x7F]/g
                  , s = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
                  , l = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g
                  , f = {
                    "­": "shy",
                    "‌": "zwnj",
                    "‍": "zwj",
                    "‎": "lrm",
                    "⁣": "ic",
                    "⁢": "it",
                    "⁡": "af",
                    "‏": "rlm",
                    "​": "ZeroWidthSpace",
                    "⁠": "NoBreak",
                    "̑": "DownBreve",
                    "⃛": "tdot",
                    "⃜": "DotDot",
                    "\t": "Tab",
                    "\n": "NewLine",
                    " ": "puncsp",
                    " ": "MediumSpace",
                    " ": "thinsp",
                    " ": "hairsp",
                    " ": "emsp13",
                    " ": "ensp",
                    " ": "emsp14",
                    " ": "emsp",
                    " ": "numsp",
                    " ": "nbsp",
                    "  ": "ThickSpace",
                    "‾": "oline",
                    _: "lowbar",
                    "‐": "dash",
                    "–": "ndash",
                    "—": "mdash",
                    "―": "horbar",
                    ",": "comma",
                    ";": "semi",
                    "⁏": "bsemi",
                    ":": "colon",
                    "⩴": "Colone",
                    "!": "excl",
                    "¡": "iexcl",
                    "?": "quest",
                    "¿": "iquest",
                    ".": "period",
                    "‥": "nldr",
                    "…": "mldr",
                    "·": "middot",
                    "'": "apos",
                    "‘": "lsquo",
                    "’": "rsquo",
                    "‚": "sbquo",
                    "‹": "lsaquo",
                    "›": "rsaquo",
                    '"': "quot",
                    "“": "ldquo",
                    "”": "rdquo",
                    "„": "bdquo",
                    "«": "laquo",
                    "»": "raquo",
                    "(": "lpar",
                    ")": "rpar",
                    "[": "lsqb",
                    "]": "rsqb",
                    "{": "lcub",
                    "}": "rcub",
                    "⌈": "lceil",
                    "⌉": "rceil",
                    "⌊": "lfloor",
                    "⌋": "rfloor",
                    "⦅": "lopar",
                    "⦆": "ropar",
                    "⦋": "lbrke",
                    "⦌": "rbrke",
                    "⦍": "lbrkslu",
                    "⦎": "rbrksld",
                    "⦏": "lbrksld",
                    "⦐": "rbrkslu",
                    "⦑": "langd",
                    "⦒": "rangd",
                    "⦓": "lparlt",
                    "⦔": "rpargt",
                    "⦕": "gtlPar",
                    "⦖": "ltrPar",
                    "⟦": "lobrk",
                    "⟧": "robrk",
                    "⟨": "lang",
                    "⟩": "rang",
                    "⟪": "Lang",
                    "⟫": "Rang",
                    "⟬": "loang",
                    "⟭": "roang",
                    "❲": "lbbrk",
                    "❳": "rbbrk",
                    "‖": "Vert",
                    "§": "sect",
                    "¶": "para",
                    "@": "commat",
                    "*": "ast",
                    "/": "sol",
                    undefined: null,
                    "&": "amp",
                    "#": "num",
                    "%": "percnt",
                    "‰": "permil",
                    "‱": "pertenk",
                    "†": "dagger",
                    "‡": "Dagger",
                    "•": "bull",
                    "⁃": "hybull",
                    "′": "prime",
                    "″": "Prime",
                    "‴": "tprime",
                    "⁗": "qprime",
                    "‵": "bprime",
                    "⁁": "caret",
                    "`": "grave",
                    "´": "acute",
                    "˜": "tilde",
                    "^": "Hat",
                    "¯": "macr",
                    "˘": "breve",
                    "˙": "dot",
                    "¨": "die",
                    "˚": "ring",
                    "˝": "dblac",
                    "¸": "cedil",
                    "˛": "ogon",
                    "ˆ": "circ",
                    "ˇ": "caron",
                    "°": "deg",
                    "©": "copy",
                    "®": "reg",
                    "℗": "copysr",
                    "℘": "wp",
                    "℞": "rx",
                    "℧": "mho",
                    "℩": "iiota",
                    "←": "larr",
                    "↚": "nlarr",
                    "→": "rarr",
                    "↛": "nrarr",
                    "↑": "uarr",
                    "↓": "darr",
                    "↔": "harr",
                    "↮": "nharr",
                    "↕": "varr",
                    "↖": "nwarr",
                    "↗": "nearr",
                    "↘": "searr",
                    "↙": "swarr",
                    "↝": "rarrw",
                    "↝̸": "nrarrw",
                    "↞": "Larr",
                    "↟": "Uarr",
                    "↠": "Rarr",
                    "↡": "Darr",
                    "↢": "larrtl",
                    "↣": "rarrtl",
                    "↤": "mapstoleft",
                    "↥": "mapstoup",
                    "↦": "map",
                    "↧": "mapstodown",
                    "↩": "larrhk",
                    "↪": "rarrhk",
                    "↫": "larrlp",
                    "↬": "rarrlp",
                    "↭": "harrw",
                    "↰": "lsh",
                    "↱": "rsh",
                    "↲": "ldsh",
                    "↳": "rdsh",
                    "↵": "crarr",
                    "↶": "cularr",
                    "↷": "curarr",
                    "↺": "olarr",
                    "↻": "orarr",
                    "↼": "lharu",
                    "↽": "lhard",
                    "↾": "uharr",
                    "↿": "uharl",
                    "⇀": "rharu",
                    "⇁": "rhard",
                    "⇂": "dharr",
                    "⇃": "dharl",
                    "⇄": "rlarr",
                    "⇅": "udarr",
                    "⇆": "lrarr",
                    "⇇": "llarr",
                    "⇈": "uuarr",
                    "⇉": "rrarr",
                    "⇊": "ddarr",
                    "⇋": "lrhar",
                    "⇌": "rlhar",
                    "⇐": "lArr",
                    "⇍": "nlArr",
                    "⇑": "uArr",
                    "⇒": "rArr",
                    "⇏": "nrArr",
                    "⇓": "dArr",
                    "⇔": "iff",
                    "⇎": "nhArr",
                    "⇕": "vArr",
                    "⇖": "nwArr",
                    "⇗": "neArr",
                    "⇘": "seArr",
                    "⇙": "swArr",
                    "⇚": "lAarr",
                    "⇛": "rAarr",
                    "⇝": "zigrarr",
                    "⇤": "larrb",
                    "⇥": "rarrb",
                    "⇵": "duarr",
                    "⇽": "loarr",
                    "⇾": "roarr",
                    "⇿": "hoarr",
                    "∀": "forall",
                    "∁": "comp",
                    "∂": "part",
                    "∂̸": "npart",
                    "∃": "exist",
                    "∄": "nexist",
                    "∅": "empty",
                    "∇": "Del",
                    "∈": "in",
                    "∉": "notin",
                    "∋": "ni",
                    "∌": "notni",
                    "϶": "bepsi",
                    "∏": "prod",
                    "∐": "coprod",
                    "∑": "sum",
                    "+": "plus",
                    "±": "pm",
                    "÷": "div",
                    "×": "times",
                    "<": "lt",
                    "≮": "nlt",
                    "<⃒": "nvlt",
                    "=": "equals",
                    "≠": "ne",
                    "=⃥": "bne",
                    "⩵": "Equal",
                    ">": "gt",
                    "≯": "ngt",
                    ">⃒": "nvgt",
                    "¬": "not",
                    "|": "vert",
                    "¦": "brvbar",
                    "−": "minus",
                    "∓": "mp",
                    "∔": "plusdo",
                    "⁄": "frasl",
                    "∖": "setmn",
                    "∗": "lowast",
                    "∘": "compfn",
                    "√": "Sqrt",
                    "∝": "prop",
                    "∞": "infin",
                    "∟": "angrt",
                    "∠": "ang",
                    "∠⃒": "nang",
                    "∡": "angmsd",
                    "∢": "angsph",
                    "∣": "mid",
                    "∤": "nmid",
                    "∥": "par",
                    "∦": "npar",
                    "∧": "and",
                    "∨": "or",
                    "∩": "cap",
                    "∩︀": "caps",
                    "∪": "cup",
                    "∪︀": "cups",
                    "∫": "int",
                    "∬": "Int",
                    "∭": "tint",
                    "⨌": "qint",
                    "∮": "oint",
                    "∯": "Conint",
                    "∰": "Cconint",
                    "∱": "cwint",
                    "∲": "cwconint",
                    "∳": "awconint",
                    "∴": "there4",
                    "∵": "becaus",
                    "∶": "ratio",
                    "∷": "Colon",
                    "∸": "minusd",
                    "∺": "mDDot",
                    "∻": "homtht",
                    "∼": "sim",
                    "≁": "nsim",
                    "∼⃒": "nvsim",
                    "∽": "bsim",
                    "∽̱": "race",
                    "∾": "ac",
                    "∾̳": "acE",
                    "∿": "acd",
                    "≀": "wr",
                    "≂": "esim",
                    "≂̸": "nesim",
                    "≃": "sime",
                    "≄": "nsime",
                    "≅": "cong",
                    "≇": "ncong",
                    "≆": "simne",
                    "≈": "ap",
                    "≉": "nap",
                    "≊": "ape",
                    "≋": "apid",
                    "≋̸": "napid",
                    "≌": "bcong",
                    "≍": "CupCap",
                    "≭": "NotCupCap",
                    "≍⃒": "nvap",
                    "≎": "bump",
                    "≎̸": "nbump",
                    "≏": "bumpe",
                    "≏̸": "nbumpe",
                    "≐": "doteq",
                    "≐̸": "nedot",
                    "≑": "eDot",
                    "≒": "efDot",
                    "≓": "erDot",
                    "≔": "colone",
                    "≕": "ecolon",
                    "≖": "ecir",
                    "≗": "cire",
                    "≙": "wedgeq",
                    "≚": "veeeq",
                    "≜": "trie",
                    "≟": "equest",
                    "≡": "equiv",
                    "≢": "nequiv",
                    "≡⃥": "bnequiv",
                    "≤": "le",
                    "≰": "nle",
                    "≤⃒": "nvle",
                    "≥": "ge",
                    "≱": "nge",
                    "≥⃒": "nvge",
                    "≦": "lE",
                    "≦̸": "nlE",
                    "≧": "gE",
                    "≧̸": "ngE",
                    "≨︀": "lvnE",
                    "≨": "lnE",
                    "≩": "gnE",
                    "≩︀": "gvnE",
                    "≪": "ll",
                    "≪̸": "nLtv",
                    "≪⃒": "nLt",
                    "≫": "gg",
                    "≫̸": "nGtv",
                    "≫⃒": "nGt",
                    "≬": "twixt",
                    "≲": "lsim",
                    "≴": "nlsim",
                    "≳": "gsim",
                    "≵": "ngsim",
                    "≶": "lg",
                    "≸": "ntlg",
                    "≷": "gl",
                    "≹": "ntgl",
                    "≺": "pr",
                    "⊀": "npr",
                    "≻": "sc",
                    "⊁": "nsc",
                    "≼": "prcue",
                    "⋠": "nprcue",
                    "≽": "sccue",
                    "⋡": "nsccue",
                    "≾": "prsim",
                    "≿": "scsim",
                    "≿̸": "NotSucceedsTilde",
                    "⊂": "sub",
                    "⊄": "nsub",
                    "⊂⃒": "vnsub",
                    "⊃": "sup",
                    "⊅": "nsup",
                    "⊃⃒": "vnsup",
                    "⊆": "sube",
                    "⊈": "nsube",
                    "⊇": "supe",
                    "⊉": "nsupe",
                    "⊊︀": "vsubne",
                    "⊊": "subne",
                    "⊋︀": "vsupne",
                    "⊋": "supne",
                    "⊍": "cupdot",
                    "⊎": "uplus",
                    "⊏": "sqsub",
                    "⊏̸": "NotSquareSubset",
                    "⊐": "sqsup",
                    "⊐̸": "NotSquareSuperset",
                    "⊑": "sqsube",
                    "⋢": "nsqsube",
                    "⊒": "sqsupe",
                    "⋣": "nsqsupe",
                    "⊓": "sqcap",
                    "⊓︀": "sqcaps",
                    "⊔": "sqcup",
                    "⊔︀": "sqcups",
                    "⊕": "oplus",
                    "⊖": "ominus",
                    "⊗": "otimes",
                    "⊘": "osol",
                    "⊙": "odot",
                    "⊚": "ocir",
                    "⊛": "oast",
                    "⊝": "odash",
                    "⊞": "plusb",
                    "⊟": "minusb",
                    "⊠": "timesb",
                    "⊡": "sdotb",
                    "⊢": "vdash",
                    "⊬": "nvdash",
                    "⊣": "dashv",
                    "⊤": "top",
                    "⊥": "bot",
                    "⊧": "models",
                    "⊨": "vDash",
                    "⊭": "nvDash",
                    "⊩": "Vdash",
                    "⊮": "nVdash",
                    "⊪": "Vvdash",
                    "⊫": "VDash",
                    "⊯": "nVDash",
                    "⊰": "prurel",
                    "⊲": "vltri",
                    "⋪": "nltri",
                    "⊳": "vrtri",
                    "⋫": "nrtri",
                    "⊴": "ltrie",
                    "⋬": "nltrie",
                    "⊴⃒": "nvltrie",
                    "⊵": "rtrie",
                    "⋭": "nrtrie",
                    "⊵⃒": "nvrtrie",
                    "⊶": "origof",
                    "⊷": "imof",
                    "⊸": "mumap",
                    "⊹": "hercon",
                    "⊺": "intcal",
                    "⊻": "veebar",
                    "⊽": "barvee",
                    "⊾": "angrtvb",
                    "⊿": "lrtri",
                    "⋀": "Wedge",
                    "⋁": "Vee",
                    "⋂": "xcap",
                    "⋃": "xcup",
                    "⋄": "diam",
                    "⋅": "sdot",
                    "⋆": "Star",
                    "⋇": "divonx",
                    "⋈": "bowtie",
                    "⋉": "ltimes",
                    "⋊": "rtimes",
                    "⋋": "lthree",
                    "⋌": "rthree",
                    "⋍": "bsime",
                    "⋎": "cuvee",
                    "⋏": "cuwed",
                    "⋐": "Sub",
                    "⋑": "Sup",
                    "⋒": "Cap",
                    "⋓": "Cup",
                    "⋔": "fork",
                    "⋕": "epar",
                    "⋖": "ltdot",
                    "⋗": "gtdot",
                    "⋘": "Ll",
                    "⋘̸": "nLl",
                    "⋙": "Gg",
                    "⋙̸": "nGg",
                    "⋚︀": "lesg",
                    "⋚": "leg",
                    "⋛": "gel",
                    "⋛︀": "gesl",
                    "⋞": "cuepr",
                    "⋟": "cuesc",
                    "⋦": "lnsim",
                    "⋧": "gnsim",
                    "⋨": "prnsim",
                    "⋩": "scnsim",
                    "⋮": "vellip",
                    "⋯": "ctdot",
                    "⋰": "utdot",
                    "⋱": "dtdot",
                    "⋲": "disin",
                    "⋳": "isinsv",
                    "⋴": "isins",
                    "⋵": "isindot",
                    "⋵̸": "notindot",
                    "⋶": "notinvc",
                    "⋷": "notinvb",
                    "⋹": "isinE",
                    "⋹̸": "notinE",
                    "⋺": "nisd",
                    "⋻": "xnis",
                    "⋼": "nis",
                    "⋽": "notnivc",
                    "⋾": "notnivb",
                    "⌅": "barwed",
                    "⌆": "Barwed",
                    "⌌": "drcrop",
                    "⌍": "dlcrop",
                    "⌎": "urcrop",
                    "⌏": "ulcrop",
                    "⌐": "bnot",
                    "⌒": "profline",
                    "⌓": "profsurf",
                    "⌕": "telrec",
                    "⌖": "target",
                    "⌜": "ulcorn",
                    "⌝": "urcorn",
                    "⌞": "dlcorn",
                    "⌟": "drcorn",
                    "⌢": "frown",
                    "⌣": "smile",
                    "⌭": "cylcty",
                    "⌮": "profalar",
                    "⌶": "topbot",
                    "⌽": "ovbar",
                    "⌿": "solbar",
                    "⍼": "angzarr",
                    "⎰": "lmoust",
                    "⎱": "rmoust",
                    "⎴": "tbrk",
                    "⎵": "bbrk",
                    "⎶": "bbrktbrk",
                    "⏜": "OverParenthesis",
                    "⏝": "UnderParenthesis",
                    "⏞": "OverBrace",
                    "⏟": "UnderBrace",
                    "⏢": "trpezium",
                    "⏧": "elinters",
                    "␣": "blank",
                    "─": "boxh",
                    "│": "boxv",
                    "┌": "boxdr",
                    "┐": "boxdl",
                    "└": "boxur",
                    "┘": "boxul",
                    "├": "boxvr",
                    "┤": "boxvl",
                    "┬": "boxhd",
                    "┴": "boxhu",
                    "┼": "boxvh",
                    "═": "boxH",
                    "║": "boxV",
                    "╒": "boxdR",
                    "╓": "boxDr",
                    "╔": "boxDR",
                    "╕": "boxdL",
                    "╖": "boxDl",
                    "╗": "boxDL",
                    "╘": "boxuR",
                    "╙": "boxUr",
                    "╚": "boxUR",
                    "╛": "boxuL",
                    "╜": "boxUl",
                    "╝": "boxUL",
                    "╞": "boxvR",
                    "╟": "boxVr",
                    "╠": "boxVR",
                    "╡": "boxvL",
                    "╢": "boxVl",
                    "╣": "boxVL",
                    "╤": "boxHd",
                    "╥": "boxhD",
                    "╦": "boxHD",
                    "╧": "boxHu",
                    "╨": "boxhU",
                    "╩": "boxHU",
                    "╪": "boxvH",
                    "╫": "boxVh",
                    "╬": "boxVH",
                    "▀": "uhblk",
                    "▄": "lhblk",
                    "█": "block",
                    "░": "blk14",
                    "▒": "blk12",
                    "▓": "blk34",
                    "□": "squ",
                    "▪": "squf",
                    "▫": "EmptyVerySmallSquare",
                    "▭": "rect",
                    "▮": "marker",
                    "▱": "fltns",
                    "△": "xutri",
                    "▴": "utrif",
                    "▵": "utri",
                    "▸": "rtrif",
                    "▹": "rtri",
                    "▽": "xdtri",
                    "▾": "dtrif",
                    "▿": "dtri",
                    "◂": "ltrif",
                    "◃": "ltri",
                    "◊": "loz",
                    "○": "cir",
                    "◬": "tridot",
                    "◯": "xcirc",
                    "◸": "ultri",
                    "◹": "urtri",
                    "◺": "lltri",
                    "◻": "EmptySmallSquare",
                    "◼": "FilledSmallSquare",
                    "★": "starf",
                    "☆": "star",
                    "☎": "phone",
                    "♀": "female",
                    "♂": "male",
                    "♠": "spades",
                    "♣": "clubs",
                    "♥": "hearts",
                    "♦": "diams",
                    "♪": "sung",
                    "✓": "check",
                    "✗": "cross",
                    "✠": "malt",
                    "✶": "sext",
                    "❘": "VerticalSeparator",
                    "⟈": "bsolhsub",
                    "⟉": "suphsol",
                    "⟵": "xlarr",
                    "⟶": "xrarr",
                    "⟷": "xharr",
                    "⟸": "xlArr",
                    "⟹": "xrArr",
                    "⟺": "xhArr",
                    "⟼": "xmap",
                    "⟿": "dzigrarr",
                    "⤂": "nvlArr",
                    "⤃": "nvrArr",
                    "⤄": "nvHarr",
                    "⤅": "Map",
                    "⤌": "lbarr",
                    "⤍": "rbarr",
                    "⤎": "lBarr",
                    "⤏": "rBarr",
                    "⤐": "RBarr",
                    "⤑": "DDotrahd",
                    "⤒": "UpArrowBar",
                    "⤓": "DownArrowBar",
                    "⤖": "Rarrtl",
                    "⤙": "latail",
                    "⤚": "ratail",
                    "⤛": "lAtail",
                    "⤜": "rAtail",
                    "⤝": "larrfs",
                    "⤞": "rarrfs",
                    "⤟": "larrbfs",
                    "⤠": "rarrbfs",
                    "⤣": "nwarhk",
                    "⤤": "nearhk",
                    "⤥": "searhk",
                    "⤦": "swarhk",
                    "⤧": "nwnear",
                    "⤨": "toea",
                    "⤩": "tosa",
                    "⤪": "swnwar",
                    "⤳": "rarrc",
                    "⤳̸": "nrarrc",
                    "⤵": "cudarrr",
                    "⤶": "ldca",
                    "⤷": "rdca",
                    "⤸": "cudarrl",
                    "⤹": "larrpl",
                    "⤼": "curarrm",
                    "⤽": "cularrp",
                    "⥅": "rarrpl",
                    "⥈": "harrcir",
                    "⥉": "Uarrocir",
                    "⥊": "lurdshar",
                    "⥋": "ldrushar",
                    "⥎": "LeftRightVector",
                    "⥏": "RightUpDownVector",
                    "⥐": "DownLeftRightVector",
                    "⥑": "LeftUpDownVector",
                    "⥒": "LeftVectorBar",
                    "⥓": "RightVectorBar",
                    "⥔": "RightUpVectorBar",
                    "⥕": "RightDownVectorBar",
                    "⥖": "DownLeftVectorBar",
                    "⥗": "DownRightVectorBar",
                    "⥘": "LeftUpVectorBar",
                    "⥙": "LeftDownVectorBar",
                    "⥚": "LeftTeeVector",
                    "⥛": "RightTeeVector",
                    "⥜": "RightUpTeeVector",
                    "⥝": "RightDownTeeVector",
                    "⥞": "DownLeftTeeVector",
                    "⥟": "DownRightTeeVector",
                    "⥠": "LeftUpTeeVector",
                    "⥡": "LeftDownTeeVector",
                    "⥢": "lHar",
                    "⥣": "uHar",
                    "⥤": "rHar",
                    "⥥": "dHar",
                    "⥦": "luruhar",
                    "⥧": "ldrdhar",
                    "⥨": "ruluhar",
                    "⥩": "rdldhar",
                    "⥪": "lharul",
                    "⥫": "llhard",
                    "⥬": "rharul",
                    "⥭": "lrhard",
                    "⥮": "udhar",
                    "⥯": "duhar",
                    "⥰": "RoundImplies",
                    "⥱": "erarr",
                    "⥲": "simrarr",
                    "⥳": "larrsim",
                    "⥴": "rarrsim",
                    "⥵": "rarrap",
                    "⥶": "ltlarr",
                    "⥸": "gtrarr",
                    "⥹": "subrarr",
                    "⥻": "suplarr",
                    "⥼": "lfisht",
                    "⥽": "rfisht",
                    "⥾": "ufisht",
                    "⥿": "dfisht",
                    "⦚": "vzigzag",
                    "⦜": "vangrt",
                    "⦝": "angrtvbd",
                    "⦤": "ange",
                    "⦥": "range",
                    "⦦": "dwangle",
                    "⦧": "uwangle",
                    "⦨": "angmsdaa",
                    "⦩": "angmsdab",
                    "⦪": "angmsdac",
                    "⦫": "angmsdad",
                    "⦬": "angmsdae",
                    "⦭": "angmsdaf",
                    "⦮": "angmsdag",
                    "⦯": "angmsdah",
                    "⦰": "bemptyv",
                    "⦱": "demptyv",
                    "⦲": "cemptyv",
                    "⦳": "raemptyv",
                    "⦴": "laemptyv",
                    "⦵": "ohbar",
                    "⦶": "omid",
                    "⦷": "opar",
                    "⦹": "operp",
                    "⦻": "olcross",
                    "⦼": "odsold",
                    "⦾": "olcir",
                    "⦿": "ofcir",
                    "⧀": "olt",
                    "⧁": "ogt",
                    "⧂": "cirscir",
                    "⧃": "cirE",
                    "⧄": "solb",
                    "⧅": "bsolb",
                    "⧉": "boxbox",
                    "⧍": "trisb",
                    "⧎": "rtriltri",
                    "⧏": "LeftTriangleBar",
                    "⧏̸": "NotLeftTriangleBar",
                    "⧐": "RightTriangleBar",
                    "⧐̸": "NotRightTriangleBar",
                    "⧜": "iinfin",
                    "⧝": "infintie",
                    "⧞": "nvinfin",
                    "⧣": "eparsl",
                    "⧤": "smeparsl",
                    "⧥": "eqvparsl",
                    "⧫": "lozf",
                    "⧴": "RuleDelayed",
                    "⧶": "dsol",
                    "⨀": "xodot",
                    "⨁": "xoplus",
                    "⨂": "xotime",
                    "⨄": "xuplus",
                    "⨆": "xsqcup",
                    "⨍": "fpartint",
                    "⨐": "cirfnint",
                    "⨑": "awint",
                    "⨒": "rppolint",
                    "⨓": "scpolint",
                    "⨔": "npolint",
                    "⨕": "pointint",
                    "⨖": "quatint",
                    "⨗": "intlarhk",
                    "⨢": "pluscir",
                    "⨣": "plusacir",
                    "⨤": "simplus",
                    "⨥": "plusdu",
                    "⨦": "plussim",
                    "⨧": "plustwo",
                    "⨩": "mcomma",
                    "⨪": "minusdu",
                    "⨭": "loplus",
                    "⨮": "roplus",
                    "⨯": "Cross",
                    "⨰": "timesd",
                    "⨱": "timesbar",
                    "⨳": "smashp",
                    "⨴": "lotimes",
                    "⨵": "rotimes",
                    "⨶": "otimesas",
                    "⨷": "Otimes",
                    "⨸": "odiv",
                    "⨹": "triplus",
                    "⨺": "triminus",
                    "⨻": "tritime",
                    "⨼": "iprod",
                    "⨿": "amalg",
                    "⩀": "capdot",
                    "⩂": "ncup",
                    "⩃": "ncap",
                    "⩄": "capand",
                    "⩅": "cupor",
                    "⩆": "cupcap",
                    "⩇": "capcup",
                    "⩈": "cupbrcap",
                    "⩉": "capbrcup",
                    "⩊": "cupcup",
                    "⩋": "capcap",
                    "⩌": "ccups",
                    "⩍": "ccaps",
                    "⩐": "ccupssm",
                    "⩓": "And",
                    "⩔": "Or",
                    "⩕": "andand",
                    "⩖": "oror",
                    "⩗": "orslope",
                    "⩘": "andslope",
                    "⩚": "andv",
                    "⩛": "orv",
                    "⩜": "andd",
                    "⩝": "ord",
                    "⩟": "wedbar",
                    "⩦": "sdote",
                    "⩪": "simdot",
                    "⩭": "congdot",
                    "⩭̸": "ncongdot",
                    "⩮": "easter",
                    "⩯": "apacir",
                    "⩰": "apE",
                    "⩰̸": "napE",
                    "⩱": "eplus",
                    "⩲": "pluse",
                    "⩳": "Esim",
                    "⩷": "eDDot",
                    "⩸": "equivDD",
                    "⩹": "ltcir",
                    "⩺": "gtcir",
                    "⩻": "ltquest",
                    "⩼": "gtquest",
                    "⩽": "les",
                    "⩽̸": "nles",
                    "⩾": "ges",
                    "⩾̸": "nges",
                    "⩿": "lesdot",
                    "⪀": "gesdot",
                    "⪁": "lesdoto",
                    "⪂": "gesdoto",
                    "⪃": "lesdotor",
                    "⪄": "gesdotol",
                    "⪅": "lap",
                    "⪆": "gap",
                    "⪇": "lne",
                    "⪈": "gne",
                    "⪉": "lnap",
                    "⪊": "gnap",
                    "⪋": "lEg",
                    "⪌": "gEl",
                    "⪍": "lsime",
                    "⪎": "gsime",
                    "⪏": "lsimg",
                    "⪐": "gsiml",
                    "⪑": "lgE",
                    "⪒": "glE",
                    "⪓": "lesges",
                    "⪔": "gesles",
                    "⪕": "els",
                    "⪖": "egs",
                    "⪗": "elsdot",
                    "⪘": "egsdot",
                    "⪙": "el",
                    "⪚": "eg",
                    "⪝": "siml",
                    "⪞": "simg",
                    "⪟": "simlE",
                    "⪠": "simgE",
                    "⪡": "LessLess",
                    "⪡̸": "NotNestedLessLess",
                    "⪢": "GreaterGreater",
                    "⪢̸": "NotNestedGreaterGreater",
                    "⪤": "glj",
                    "⪥": "gla",
                    "⪦": "ltcc",
                    "⪧": "gtcc",
                    "⪨": "lescc",
                    "⪩": "gescc",
                    "⪪": "smt",
                    "⪫": "lat",
                    "⪬": "smte",
                    "⪬︀": "smtes",
                    "⪭": "late",
                    "⪭︀": "lates",
                    "⪮": "bumpE",
                    "⪯": "pre",
                    "⪯̸": "npre",
                    "⪰": "sce",
                    "⪰̸": "nsce",
                    "⪳": "prE",
                    "⪴": "scE",
                    "⪵": "prnE",
                    "⪶": "scnE",
                    "⪷": "prap",
                    "⪸": "scap",
                    "⪹": "prnap",
                    "⪺": "scnap",
                    "⪻": "Pr",
                    "⪼": "Sc",
                    "⪽": "subdot",
                    "⪾": "supdot",
                    "⪿": "subplus",
                    "⫀": "supplus",
                    "⫁": "submult",
                    "⫂": "supmult",
                    "⫃": "subedot",
                    "⫄": "supedot",
                    "⫅": "subE",
                    "⫅̸": "nsubE",
                    "⫆": "supE",
                    "⫆̸": "nsupE",
                    "⫇": "subsim",
                    "⫈": "supsim",
                    "⫋︀": "vsubnE",
                    "⫋": "subnE",
                    "⫌︀": "vsupnE",
                    "⫌": "supnE",
                    "⫏": "csub",
                    "⫐": "csup",
                    "⫑": "csube",
                    "⫒": "csupe",
                    "⫓": "subsup",
                    "⫔": "supsub",
                    "⫕": "subsub",
                    "⫖": "supsup",
                    "⫗": "suphsub",
                    "⫘": "supdsub",
                    "⫙": "forkv",
                    "⫚": "topfork",
                    "⫛": "mlcp",
                    "⫤": "Dashv",
                    "⫦": "Vdashl",
                    "⫧": "Barv",
                    "⫨": "vBar",
                    "⫩": "vBarv",
                    "⫫": "Vbar",
                    "⫬": "Not",
                    "⫭": "bNot",
                    "⫮": "rnmid",
                    "⫯": "cirmid",
                    "⫰": "midcir",
                    "⫱": "topcir",
                    "⫲": "nhpar",
                    "⫳": "parsim",
                    "⫽": "parsl",
                    "⫽⃥": "nparsl",
                    "♭": "flat",
                    "♮": "natur",
                    "♯": "sharp",
                    "¤": "curren",
                    "¢": "cent",
                    $: "dollar",
                    "£": "pound",
                    "¥": "yen",
                    "€": "euro",
                    "¹": "sup1",
                    "½": "half",
                    "⅓": "frac13",
                    "¼": "frac14",
                    "⅕": "frac15",
                    "⅙": "frac16",
                    "⅛": "frac18",
                    "²": "sup2",
                    "⅔": "frac23",
                    "⅖": "frac25",
                    "³": "sup3",
                    "¾": "frac34",
                    "⅗": "frac35",
                    "⅜": "frac38",
                    "⅘": "frac45",
                    "⅚": "frac56",
                    "⅝": "frac58",
                    "⅞": "frac78",
                    "𝒶": "ascr",
                    "𝕒": "aopf",
                    "𝔞": "afr",
                    "𝔸": "Aopf",
                    "𝔄": "Afr",
                    "𝒜": "Ascr",
                    "ª": "ordf",
                    "á": "aacute",
                    "Á": "Aacute",
                    "à": "agrave",
                    "À": "Agrave",
                    "ă": "abreve",
                    "Ă": "Abreve",
                    "â": "acirc",
                    "Â": "Acirc",
                    "å": "aring",
                    "Å": "angst",
                    "ä": "auml",
                    "Ä": "Auml",
                    "ã": "atilde",
                    "Ã": "Atilde",
                    "ą": "aogon",
                    "Ą": "Aogon",
                    "ā": "amacr",
                    "Ā": "Amacr",
                    "æ": "aelig",
                    "Æ": "AElig",
                    "𝒷": "bscr",
                    "𝕓": "bopf",
                    "𝔟": "bfr",
                    "𝔹": "Bopf",
                    "ℬ": "Bscr",
                    "𝔅": "Bfr",
                    "𝔠": "cfr",
                    "𝒸": "cscr",
                    "𝕔": "copf",
                    "ℭ": "Cfr",
                    "𝒞": "Cscr",
                    "ℂ": "Copf",
                    "ć": "cacute",
                    "Ć": "Cacute",
                    "ĉ": "ccirc",
                    "Ĉ": "Ccirc",
                    "č": "ccaron",
                    "Č": "Ccaron",
                    "ċ": "cdot",
                    "Ċ": "Cdot",
                    "ç": "ccedil",
                    "Ç": "Ccedil",
                    "℅": "incare",
                    "𝔡": "dfr",
                    "ⅆ": "dd",
                    "𝕕": "dopf",
                    "𝒹": "dscr",
                    "𝒟": "Dscr",
                    "𝔇": "Dfr",
                    "ⅅ": "DD",
                    "𝔻": "Dopf",
                    "ď": "dcaron",
                    "Ď": "Dcaron",
                    "đ": "dstrok",
                    "Đ": "Dstrok",
                    "ð": "eth",
                    "Ð": "ETH",
                    "ⅇ": "ee",
                    "ℯ": "escr",
                    "𝔢": "efr",
                    "𝕖": "eopf",
                    "ℰ": "Escr",
                    "𝔈": "Efr",
                    "𝔼": "Eopf",
                    "é": "eacute",
                    "É": "Eacute",
                    "è": "egrave",
                    "È": "Egrave",
                    "ê": "ecirc",
                    "Ê": "Ecirc",
                    "ě": "ecaron",
                    "Ě": "Ecaron",
                    "ë": "euml",
                    "Ë": "Euml",
                    "ė": "edot",
                    "Ė": "Edot",
                    "ę": "eogon",
                    "Ę": "Eogon",
                    "ē": "emacr",
                    "Ē": "Emacr",
                    "𝔣": "ffr",
                    "𝕗": "fopf",
                    "𝒻": "fscr",
                    "𝔉": "Ffr",
                    "𝔽": "Fopf",
                    "ℱ": "Fscr",
                    "ﬀ": "fflig",
                    "ﬃ": "ffilig",
                    "ﬄ": "ffllig",
                    "ﬁ": "filig",
                    fj: "fjlig",
                    "ﬂ": "fllig",
                    "ƒ": "fnof",
                    "ℊ": "gscr",
                    "𝕘": "gopf",
                    "𝔤": "gfr",
                    "𝒢": "Gscr",
                    "𝔾": "Gopf",
                    "𝔊": "Gfr",
                    "ǵ": "gacute",
                    "ğ": "gbreve",
                    "Ğ": "Gbreve",
                    "ĝ": "gcirc",
                    "Ĝ": "Gcirc",
                    "ġ": "gdot",
                    "Ġ": "Gdot",
                    "Ģ": "Gcedil",
                    "𝔥": "hfr",
                    "ℎ": "planckh",
                    "𝒽": "hscr",
                    "𝕙": "hopf",
                    "ℋ": "Hscr",
                    "ℌ": "Hfr",
                    "ℍ": "Hopf",
                    "ĥ": "hcirc",
                    "Ĥ": "Hcirc",
                    "ℏ": "hbar",
                    "ħ": "hstrok",
                    "Ħ": "Hstrok",
                    "𝕚": "iopf",
                    "𝔦": "ifr",
                    "𝒾": "iscr",
                    "ⅈ": "ii",
                    "𝕀": "Iopf",
                    "ℐ": "Iscr",
                    "ℑ": "Im",
                    "í": "iacute",
                    "Í": "Iacute",
                    "ì": "igrave",
                    "Ì": "Igrave",
                    "î": "icirc",
                    "Î": "Icirc",
                    "ï": "iuml",
                    "Ï": "Iuml",
                    "ĩ": "itilde",
                    "Ĩ": "Itilde",
                    "İ": "Idot",
                    "į": "iogon",
                    "Į": "Iogon",
                    "ī": "imacr",
                    "Ī": "Imacr",
                    "ĳ": "ijlig",
                    "Ĳ": "IJlig",
                    "ı": "imath",
                    "𝒿": "jscr",
                    "𝕛": "jopf",
                    "𝔧": "jfr",
                    "𝒥": "Jscr",
                    "𝔍": "Jfr",
                    "𝕁": "Jopf",
                    "ĵ": "jcirc",
                    "Ĵ": "Jcirc",
                    "ȷ": "jmath",
                    "𝕜": "kopf",
                    "𝓀": "kscr",
                    "𝔨": "kfr",
                    "𝒦": "Kscr",
                    "𝕂": "Kopf",
                    "𝔎": "Kfr",
                    "ķ": "kcedil",
                    "Ķ": "Kcedil",
                    "𝔩": "lfr",
                    "𝓁": "lscr",
                    "ℓ": "ell",
                    "𝕝": "lopf",
                    "ℒ": "Lscr",
                    "𝔏": "Lfr",
                    "𝕃": "Lopf",
                    "ĺ": "lacute",
                    "Ĺ": "Lacute",
                    "ľ": "lcaron",
                    "Ľ": "Lcaron",
                    "ļ": "lcedil",
                    "Ļ": "Lcedil",
                    "ł": "lstrok",
                    "Ł": "Lstrok",
                    "ŀ": "lmidot",
                    "Ŀ": "Lmidot",
                    "𝔪": "mfr",
                    "𝕞": "mopf",
                    "𝓂": "mscr",
                    "𝔐": "Mfr",
                    "𝕄": "Mopf",
                    "ℳ": "Mscr",
                    "𝔫": "nfr",
                    "𝕟": "nopf",
                    "𝓃": "nscr",
                    "ℕ": "Nopf",
                    "𝒩": "Nscr",
                    "𝔑": "Nfr",
                    "ń": "nacute",
                    "Ń": "Nacute",
                    "ň": "ncaron",
                    "Ň": "Ncaron",
                    "ñ": "ntilde",
                    "Ñ": "Ntilde",
                    "ņ": "ncedil",
                    "Ņ": "Ncedil",
                    "№": "numero",
                    "ŋ": "eng",
                    "Ŋ": "ENG",
                    "𝕠": "oopf",
                    "𝔬": "ofr",
                    "ℴ": "oscr",
                    "𝒪": "Oscr",
                    "𝔒": "Ofr",
                    "𝕆": "Oopf",
                    "º": "ordm",
                    "ó": "oacute",
                    "Ó": "Oacute",
                    "ò": "ograve",
                    "Ò": "Ograve",
                    "ô": "ocirc",
                    "Ô": "Ocirc",
                    "ö": "ouml",
                    "Ö": "Ouml",
                    "ő": "odblac",
                    "Ő": "Odblac",
                    "õ": "otilde",
                    "Õ": "Otilde",
                    "ø": "oslash",
                    "Ø": "Oslash",
                    "ō": "omacr",
                    "Ō": "Omacr",
                    "œ": "oelig",
                    "Œ": "OElig",
                    "𝔭": "pfr",
                    "𝓅": "pscr",
                    "𝕡": "popf",
                    "ℙ": "Popf",
                    "𝔓": "Pfr",
                    "𝒫": "Pscr",
                    "𝕢": "qopf",
                    "𝔮": "qfr",
                    "𝓆": "qscr",
                    "𝒬": "Qscr",
                    "𝔔": "Qfr",
                    "ℚ": "Qopf",
                    "ĸ": "kgreen",
                    "𝔯": "rfr",
                    "𝕣": "ropf",
                    "𝓇": "rscr",
                    "ℛ": "Rscr",
                    "ℜ": "Re",
                    "ℝ": "Ropf",
                    "ŕ": "racute",
                    "Ŕ": "Racute",
                    "ř": "rcaron",
                    "Ř": "Rcaron",
                    "ŗ": "rcedil",
                    "Ŗ": "Rcedil",
                    "𝕤": "sopf",
                    "𝓈": "sscr",
                    "𝔰": "sfr",
                    "𝕊": "Sopf",
                    "𝔖": "Sfr",
                    "𝒮": "Sscr",
                    "Ⓢ": "oS",
                    "ś": "sacute",
                    "Ś": "Sacute",
                    "ŝ": "scirc",
                    "Ŝ": "Scirc",
                    "š": "scaron",
                    "Š": "Scaron",
                    "ş": "scedil",
                    "Ş": "Scedil",
                    "ß": "szlig",
                    "𝔱": "tfr",
                    "𝓉": "tscr",
                    "𝕥": "topf",
                    "𝒯": "Tscr",
                    "𝔗": "Tfr",
                    "𝕋": "Topf",
                    "ť": "tcaron",
                    "Ť": "Tcaron",
                    "ţ": "tcedil",
                    "Ţ": "Tcedil",
                    "™": "trade",
                    "ŧ": "tstrok",
                    "Ŧ": "Tstrok",
                    "𝓊": "uscr",
                    "𝕦": "uopf",
                    "𝔲": "ufr",
                    "𝕌": "Uopf",
                    "𝔘": "Ufr",
                    "𝒰": "Uscr",
                    "ú": "uacute",
                    "Ú": "Uacute",
                    "ù": "ugrave",
                    "Ù": "Ugrave",
                    "ŭ": "ubreve",
                    "Ŭ": "Ubreve",
                    "û": "ucirc",
                    "Û": "Ucirc",
                    "ů": "uring",
                    "Ů": "Uring",
                    "ü": "uuml",
                    "Ü": "Uuml",
                    "ű": "udblac",
                    "Ű": "Udblac",
                    "ũ": "utilde",
                    "Ũ": "Utilde",
                    "ų": "uogon",
                    "Ų": "Uogon",
                    "ū": "umacr",
                    "Ū": "Umacr",
                    "𝔳": "vfr",
                    "𝕧": "vopf",
                    "𝓋": "vscr",
                    "𝔙": "Vfr",
                    "𝕍": "Vopf",
                    "𝒱": "Vscr",
                    "𝕨": "wopf",
                    "𝓌": "wscr",
                    "𝔴": "wfr",
                    "𝒲": "Wscr",
                    "𝕎": "Wopf",
                    "𝔚": "Wfr",
                    "ŵ": "wcirc",
                    "Ŵ": "Wcirc",
                    "𝔵": "xfr",
                    "𝓍": "xscr",
                    "𝕩": "xopf",
                    "𝕏": "Xopf",
                    "𝔛": "Xfr",
                    "𝒳": "Xscr",
                    "𝔶": "yfr",
                    "𝓎": "yscr",
                    "𝕪": "yopf",
                    "𝒴": "Yscr",
                    "𝔜": "Yfr",
                    "𝕐": "Yopf",
                    "ý": "yacute",
                    "Ý": "Yacute",
                    "ŷ": "ycirc",
                    "Ŷ": "Ycirc",
                    "ÿ": "yuml",
                    "Ÿ": "Yuml",
                    "𝓏": "zscr",
                    "𝔷": "zfr",
                    "𝕫": "zopf",
                    "ℨ": "Zfr",
                    "ℤ": "Zopf",
                    "𝒵": "Zscr",
                    "ź": "zacute",
                    "Ź": "Zacute",
                    "ž": "zcaron",
                    "Ž": "Zcaron",
                    "ż": "zdot",
                    "Ż": "Zdot",
                    "Ƶ": "imped",
                    "þ": "thorn",
                    "Þ": "THORN",
                    "ŉ": "napos",
                    "α": "alpha",
                    "Α": "Alpha",
                    "β": "beta",
                    "Β": "Beta",
                    "γ": "gamma",
                    "Γ": "Gamma",
                    "δ": "delta",
                    "Δ": "Delta",
                    "ε": "epsi",
                    "ϵ": "epsiv",
                    "Ε": "Epsilon",
                    "ϝ": "gammad",
                    "Ϝ": "Gammad",
                    "ζ": "zeta",
                    "Ζ": "Zeta",
                    "η": "eta",
                    "Η": "Eta",
                    "θ": "theta",
                    "ϑ": "thetav",
                    "Θ": "Theta",
                    "ι": "iota",
                    "Ι": "Iota",
                    "κ": "kappa",
                    "ϰ": "kappav",
                    "Κ": "Kappa",
                    "λ": "lambda",
                    "Λ": "Lambda",
                    "μ": "mu",
                    "µ": "micro",
                    "Μ": "Mu",
                    "ν": "nu",
                    "Ν": "Nu",
                    "ξ": "xi",
                    "Ξ": "Xi",
                    "ο": "omicron",
                    "Ο": "Omicron",
                    "π": "pi",
                    "ϖ": "piv",
                    "Π": "Pi",
                    "ρ": "rho",
                    "ϱ": "rhov",
                    "Ρ": "Rho",
                    "σ": "sigma",
                    "Σ": "Sigma",
                    "ς": "sigmaf",
                    "τ": "tau",
                    "Τ": "Tau",
                    "υ": "upsi",
                    "Υ": "Upsilon",
                    "ϒ": "Upsi",
                    "φ": "phi",
                    "ϕ": "phiv",
                    "Φ": "Phi",
                    "χ": "chi",
                    "Χ": "Chi",
                    "ψ": "psi",
                    "Ψ": "Psi",
                    "ω": "omega",
                    "Ω": "ohm",
                    "а": "acy",
                    "А": "Acy",
                    "б": "bcy",
                    "Б": "Bcy",
                    "в": "vcy",
                    "В": "Vcy",
                    "г": "gcy",
                    "Г": "Gcy",
                    "ѓ": "gjcy",
                    "Ѓ": "GJcy",
                    "д": "dcy",
                    "Д": "Dcy",
                    "ђ": "djcy",
                    "Ђ": "DJcy",
                    "е": "iecy",
                    "Е": "IEcy",
                    "ё": "iocy",
                    "Ё": "IOcy",
                    "є": "jukcy",
                    "Є": "Jukcy",
                    "ж": "zhcy",
                    "Ж": "ZHcy",
                    "з": "zcy",
                    "З": "Zcy",
                    "ѕ": "dscy",
                    "Ѕ": "DScy",
                    "и": "icy",
                    "И": "Icy",
                    "і": "iukcy",
                    "І": "Iukcy",
                    "ї": "yicy",
                    "Ї": "YIcy",
                    "й": "jcy",
                    "Й": "Jcy",
                    "ј": "jsercy",
                    "Ј": "Jsercy",
                    "к": "kcy",
                    "К": "Kcy",
                    "ќ": "kjcy",
                    "Ќ": "KJcy",
                    "л": "lcy",
                    "Л": "Lcy",
                    "љ": "ljcy",
                    "Љ": "LJcy",
                    "м": "mcy",
                    "М": "Mcy",
                    "н": "ncy",
                    "Н": "Ncy",
                    "њ": "njcy",
                    "Њ": "NJcy",
                    "о": "ocy",
                    "О": "Ocy",
                    "п": "pcy",
                    "П": "Pcy",
                    "р": "rcy",
                    "Р": "Rcy",
                    "с": "scy",
                    "С": "Scy",
                    "т": "tcy",
                    "Т": "Tcy",
                    "ћ": "tshcy",
                    "Ћ": "TSHcy",
                    "у": "ucy",
                    "У": "Ucy",
                    "ў": "ubrcy",
                    "Ў": "Ubrcy",
                    "ф": "fcy",
                    "Ф": "Fcy",
                    "х": "khcy",
                    "Х": "KHcy",
                    "ц": "tscy",
                    "Ц": "TScy",
                    "ч": "chcy",
                    "Ч": "CHcy",
                    "џ": "dzcy",
                    "Џ": "DZcy",
                    "ш": "shcy",
                    "Ш": "SHcy",
                    "щ": "shchcy",
                    "Щ": "SHCHcy",
                    "ъ": "hardcy",
                    "Ъ": "HARDcy",
                    "ы": "ycy",
                    "Ы": "Ycy",
                    "ь": "softcy",
                    "Ь": "SOFTcy",
                    "э": "ecy",
                    "Э": "Ecy",
                    "ю": "yucy",
                    "Ю": "YUcy",
                    "я": "yacy",
                    "Я": "YAcy",
                    "ℵ": "aleph",
                    "ℶ": "beth",
                    "ℷ": "gimel",
                    "ℸ": "daleth"
                }
                  , p = /["&'<>`]/g
                  , d = {
                    '"': "&quot;",
                    "&": "&amp;",
                    "'": "&#x27;",
                    "<": "&lt;",
                    ">": "&gt;",
                    "`": "&#x60;"
                }
                  , h = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/
                  , m = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
                  , g = /&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)([=a-zA-Z0-9])?/g
                  , b = {
                    aacute: "á",
                    Aacute: "Á",
                    abreve: "ă",
                    Abreve: "Ă",
                    ac: "∾",
                    acd: "∿",
                    acE: "∾̳",
                    acirc: "â",
                    Acirc: "Â",
                    acute: "´",
                    acy: "а",
                    Acy: "А",
                    aelig: "æ",
                    AElig: "Æ",
                    af: "⁡",
                    afr: "𝔞",
                    Afr: "𝔄",
                    agrave: "à",
                    Agrave: "À",
                    alefsym: "ℵ",
                    aleph: "ℵ",
                    alpha: "α",
                    Alpha: "Α",
                    amacr: "ā",
                    Amacr: "Ā",
                    amalg: "⨿",
                    amp: "&",
                    AMP: "&",
                    and: "∧",
                    And: "⩓",
                    andand: "⩕",
                    andd: "⩜",
                    andslope: "⩘",
                    andv: "⩚",
                    ang: "∠",
                    ange: "⦤",
                    angle: "∠",
                    angmsd: "∡",
                    angmsdaa: "⦨",
                    angmsdab: "⦩",
                    angmsdac: "⦪",
                    angmsdad: "⦫",
                    angmsdae: "⦬",
                    angmsdaf: "⦭",
                    angmsdag: "⦮",
                    angmsdah: "⦯",
                    angrt: "∟",
                    angrtvb: "⊾",
                    angrtvbd: "⦝",
                    angsph: "∢",
                    angst: "Å",
                    angzarr: "⍼",
                    aogon: "ą",
                    Aogon: "Ą",
                    aopf: "𝕒",
                    Aopf: "𝔸",
                    ap: "≈",
                    apacir: "⩯",
                    ape: "≊",
                    apE: "⩰",
                    apid: "≋",
                    apos: "'",
                    ApplyFunction: "⁡",
                    approx: "≈",
                    approxeq: "≊",
                    aring: "å",
                    Aring: "Å",
                    ascr: "𝒶",
                    Ascr: "𝒜",
                    Assign: "≔",
                    ast: "*",
                    asymp: "≈",
                    asympeq: "≍",
                    atilde: "ã",
                    Atilde: "Ã",
                    auml: "ä",
                    Auml: "Ä",
                    awconint: "∳",
                    awint: "⨑",
                    backcong: "≌",
                    backepsilon: "϶",
                    backprime: "‵",
                    backsim: "∽",
                    backsimeq: "⋍",
                    Backslash: "∖",
                    Barv: "⫧",
                    barvee: "⊽",
                    barwed: "⌅",
                    Barwed: "⌆",
                    barwedge: "⌅",
                    bbrk: "⎵",
                    bbrktbrk: "⎶",
                    bcong: "≌",
                    bcy: "б",
                    Bcy: "Б",
                    bdquo: "„",
                    becaus: "∵",
                    because: "∵",
                    Because: "∵",
                    bemptyv: "⦰",
                    bepsi: "϶",
                    bernou: "ℬ",
                    Bernoullis: "ℬ",
                    beta: "β",
                    Beta: "Β",
                    beth: "ℶ",
                    between: "≬",
                    bfr: "𝔟",
                    Bfr: "𝔅",
                    bigcap: "⋂",
                    bigcirc: "◯",
                    bigcup: "⋃",
                    bigodot: "⨀",
                    bigoplus: "⨁",
                    bigotimes: "⨂",
                    bigsqcup: "⨆",
                    bigstar: "★",
                    bigtriangledown: "▽",
                    bigtriangleup: "△",
                    biguplus: "⨄",
                    bigvee: "⋁",
                    bigwedge: "⋀",
                    bkarow: "⤍",
                    blacklozenge: "⧫",
                    blacksquare: "▪",
                    blacktriangle: "▴",
                    blacktriangledown: "▾",
                    blacktriangleleft: "◂",
                    blacktriangleright: "▸",
                    blank: "␣",
                    blk12: "▒",
                    blk14: "░",
                    blk34: "▓",
                    block: "█",
                    bne: "=⃥",
                    bnequiv: "≡⃥",
                    bnot: "⌐",
                    bNot: "⫭",
                    bopf: "𝕓",
                    Bopf: "𝔹",
                    bot: "⊥",
                    bottom: "⊥",
                    bowtie: "⋈",
                    boxbox: "⧉",
                    boxdl: "┐",
                    boxdL: "╕",
                    boxDl: "╖",
                    boxDL: "╗",
                    boxdr: "┌",
                    boxdR: "╒",
                    boxDr: "╓",
                    boxDR: "╔",
                    boxh: "─",
                    boxH: "═",
                    boxhd: "┬",
                    boxhD: "╥",
                    boxHd: "╤",
                    boxHD: "╦",
                    boxhu: "┴",
                    boxhU: "╨",
                    boxHu: "╧",
                    boxHU: "╩",
                    boxminus: "⊟",
                    boxplus: "⊞",
                    boxtimes: "⊠",
                    boxul: "┘",
                    boxuL: "╛",
                    boxUl: "╜",
                    boxUL: "╝",
                    boxur: "└",
                    boxuR: "╘",
                    boxUr: "╙",
                    boxUR: "╚",
                    boxv: "│",
                    boxV: "║",
                    boxvh: "┼",
                    boxvH: "╪",
                    boxVh: "╫",
                    boxVH: "╬",
                    boxvl: "┤",
                    boxvL: "╡",
                    boxVl: "╢",
                    boxVL: "╣",
                    boxvr: "├",
                    boxvR: "╞",
                    boxVr: "╟",
                    boxVR: "╠",
                    bprime: "‵",
                    breve: "˘",
                    Breve: "˘",
                    brvbar: "¦",
                    bscr: "𝒷",
                    Bscr: "ℬ",
                    bsemi: "⁏",
                    bsim: "∽",
                    bsime: "⋍",
                    bsol: "\\",
                    bsolb: "⧅",
                    bsolhsub: "⟈",
                    bull: "•",
                    bullet: "•",
                    bump: "≎",
                    bumpe: "≏",
                    bumpE: "⪮",
                    bumpeq: "≏",
                    Bumpeq: "≎",
                    cacute: "ć",
                    Cacute: "Ć",
                    cap: "∩",
                    Cap: "⋒",
                    capand: "⩄",
                    capbrcup: "⩉",
                    capcap: "⩋",
                    capcup: "⩇",
                    capdot: "⩀",
                    CapitalDifferentialD: "ⅅ",
                    caps: "∩︀",
                    caret: "⁁",
                    caron: "ˇ",
                    Cayleys: "ℭ",
                    ccaps: "⩍",
                    ccaron: "č",
                    Ccaron: "Č",
                    ccedil: "ç",
                    Ccedil: "Ç",
                    ccirc: "ĉ",
                    Ccirc: "Ĉ",
                    Cconint: "∰",
                    ccups: "⩌",
                    ccupssm: "⩐",
                    cdot: "ċ",
                    Cdot: "Ċ",
                    cedil: "¸",
                    Cedilla: "¸",
                    cemptyv: "⦲",
                    cent: "¢",
                    centerdot: "·",
                    CenterDot: "·",
                    cfr: "𝔠",
                    Cfr: "ℭ",
                    chcy: "ч",
                    CHcy: "Ч",
                    check: "✓",
                    checkmark: "✓",
                    chi: "χ",
                    Chi: "Χ",
                    cir: "○",
                    circ: "ˆ",
                    circeq: "≗",
                    circlearrowleft: "↺",
                    circlearrowright: "↻",
                    circledast: "⊛",
                    circledcirc: "⊚",
                    circleddash: "⊝",
                    CircleDot: "⊙",
                    circledR: "®",
                    circledS: "Ⓢ",
                    CircleMinus: "⊖",
                    CirclePlus: "⊕",
                    CircleTimes: "⊗",
                    cire: "≗",
                    cirE: "⧃",
                    cirfnint: "⨐",
                    cirmid: "⫯",
                    cirscir: "⧂",
                    ClockwiseContourIntegral: "∲",
                    CloseCurlyDoubleQuote: "”",
                    CloseCurlyQuote: "’",
                    clubs: "♣",
                    clubsuit: "♣",
                    colon: ":",
                    Colon: "∷",
                    colone: "≔",
                    Colone: "⩴",
                    coloneq: "≔",
                    comma: ",",
                    commat: "@",
                    comp: "∁",
                    compfn: "∘",
                    complement: "∁",
                    complexes: "ℂ",
                    cong: "≅",
                    congdot: "⩭",
                    Congruent: "≡",
                    conint: "∮",
                    Conint: "∯",
                    ContourIntegral: "∮",
                    copf: "𝕔",
                    Copf: "ℂ",
                    coprod: "∐",
                    Coproduct: "∐",
                    copy: "©",
                    COPY: "©",
                    copysr: "℗",
                    CounterClockwiseContourIntegral: "∳",
                    crarr: "↵",
                    cross: "✗",
                    Cross: "⨯",
                    cscr: "𝒸",
                    Cscr: "𝒞",
                    csub: "⫏",
                    csube: "⫑",
                    csup: "⫐",
                    csupe: "⫒",
                    ctdot: "⋯",
                    cudarrl: "⤸",
                    cudarrr: "⤵",
                    cuepr: "⋞",
                    cuesc: "⋟",
                    cularr: "↶",
                    cularrp: "⤽",
                    cup: "∪",
                    Cup: "⋓",
                    cupbrcap: "⩈",
                    cupcap: "⩆",
                    CupCap: "≍",
                    cupcup: "⩊",
                    cupdot: "⊍",
                    cupor: "⩅",
                    cups: "∪︀",
                    curarr: "↷",
                    curarrm: "⤼",
                    curlyeqprec: "⋞",
                    curlyeqsucc: "⋟",
                    curlyvee: "⋎",
                    curlywedge: "⋏",
                    curren: "¤",
                    curvearrowleft: "↶",
                    curvearrowright: "↷",
                    cuvee: "⋎",
                    cuwed: "⋏",
                    cwconint: "∲",
                    cwint: "∱",
                    cylcty: "⌭",
                    dagger: "†",
                    Dagger: "‡",
                    daleth: "ℸ",
                    darr: "↓",
                    dArr: "⇓",
                    Darr: "↡",
                    dash: "‐",
                    dashv: "⊣",
                    Dashv: "⫤",
                    dbkarow: "⤏",
                    dblac: "˝",
                    dcaron: "ď",
                    Dcaron: "Ď",
                    dcy: "д",
                    Dcy: "Д",
                    dd: "ⅆ",
                    DD: "ⅅ",
                    ddagger: "‡",
                    ddarr: "⇊",
                    DDotrahd: "⤑",
                    ddotseq: "⩷",
                    deg: "°",
                    Del: "∇",
                    delta: "δ",
                    Delta: "Δ",
                    demptyv: "⦱",
                    dfisht: "⥿",
                    dfr: "𝔡",
                    Dfr: "𝔇",
                    dHar: "⥥",
                    dharl: "⇃",
                    dharr: "⇂",
                    DiacriticalAcute: "´",
                    DiacriticalDot: "˙",
                    DiacriticalDoubleAcute: "˝",
                    DiacriticalGrave: "`",
                    DiacriticalTilde: "˜",
                    diam: "⋄",
                    diamond: "⋄",
                    Diamond: "⋄",
                    diamondsuit: "♦",
                    diams: "♦",
                    die: "¨",
                    DifferentialD: "ⅆ",
                    digamma: "ϝ",
                    disin: "⋲",
                    div: "÷",
                    divide: "÷",
                    divideontimes: "⋇",
                    divonx: "⋇",
                    djcy: "ђ",
                    DJcy: "Ђ",
                    dlcorn: "⌞",
                    dlcrop: "⌍",
                    dollar: "$",
                    dopf: "𝕕",
                    Dopf: "𝔻",
                    dot: "˙",
                    Dot: "¨",
                    DotDot: "⃜",
                    doteq: "≐",
                    doteqdot: "≑",
                    DotEqual: "≐",
                    dotminus: "∸",
                    dotplus: "∔",
                    dotsquare: "⊡",
                    doublebarwedge: "⌆",
                    DoubleContourIntegral: "∯",
                    DoubleDot: "¨",
                    DoubleDownArrow: "⇓",
                    DoubleLeftArrow: "⇐",
                    DoubleLeftRightArrow: "⇔",
                    DoubleLeftTee: "⫤",
                    DoubleLongLeftArrow: "⟸",
                    DoubleLongLeftRightArrow: "⟺",
                    DoubleLongRightArrow: "⟹",
                    DoubleRightArrow: "⇒",
                    DoubleRightTee: "⊨",
                    DoubleUpArrow: "⇑",
                    DoubleUpDownArrow: "⇕",
                    DoubleVerticalBar: "∥",
                    downarrow: "↓",
                    Downarrow: "⇓",
                    DownArrow: "↓",
                    DownArrowBar: "⤓",
                    DownArrowUpArrow: "⇵",
                    DownBreve: "̑",
                    downdownarrows: "⇊",
                    downharpoonleft: "⇃",
                    downharpoonright: "⇂",
                    DownLeftRightVector: "⥐",
                    DownLeftTeeVector: "⥞",
                    DownLeftVector: "↽",
                    DownLeftVectorBar: "⥖",
                    DownRightTeeVector: "⥟",
                    DownRightVector: "⇁",
                    DownRightVectorBar: "⥗",
                    DownTee: "⊤",
                    DownTeeArrow: "↧",
                    drbkarow: "⤐",
                    drcorn: "⌟",
                    drcrop: "⌌",
                    dscr: "𝒹",
                    Dscr: "𝒟",
                    dscy: "ѕ",
                    DScy: "Ѕ",
                    dsol: "⧶",
                    dstrok: "đ",
                    Dstrok: "Đ",
                    dtdot: "⋱",
                    dtri: "▿",
                    dtrif: "▾",
                    duarr: "⇵",
                    duhar: "⥯",
                    dwangle: "⦦",
                    dzcy: "џ",
                    DZcy: "Џ",
                    dzigrarr: "⟿",
                    eacute: "é",
                    Eacute: "É",
                    easter: "⩮",
                    ecaron: "ě",
                    Ecaron: "Ě",
                    ecir: "≖",
                    ecirc: "ê",
                    Ecirc: "Ê",
                    ecolon: "≕",
                    ecy: "э",
                    Ecy: "Э",
                    eDDot: "⩷",
                    edot: "ė",
                    eDot: "≑",
                    Edot: "Ė",
                    ee: "ⅇ",
                    efDot: "≒",
                    efr: "𝔢",
                    Efr: "𝔈",
                    eg: "⪚",
                    egrave: "è",
                    Egrave: "È",
                    egs: "⪖",
                    egsdot: "⪘",
                    el: "⪙",
                    Element: "∈",
                    elinters: "⏧",
                    ell: "ℓ",
                    els: "⪕",
                    elsdot: "⪗",
                    emacr: "ē",
                    Emacr: "Ē",
                    empty: "∅",
                    emptyset: "∅",
                    EmptySmallSquare: "◻",
                    emptyv: "∅",
                    EmptyVerySmallSquare: "▫",
                    emsp: " ",
                    emsp13: " ",
                    emsp14: " ",
                    eng: "ŋ",
                    ENG: "Ŋ",
                    ensp: " ",
                    eogon: "ę",
                    Eogon: "Ę",
                    eopf: "𝕖",
                    Eopf: "𝔼",
                    epar: "⋕",
                    eparsl: "⧣",
                    eplus: "⩱",
                    epsi: "ε",
                    epsilon: "ε",
                    Epsilon: "Ε",
                    epsiv: "ϵ",
                    eqcirc: "≖",
                    eqcolon: "≕",
                    eqsim: "≂",
                    eqslantgtr: "⪖",
                    eqslantless: "⪕",
                    Equal: "⩵",
                    equals: "=",
                    EqualTilde: "≂",
                    equest: "≟",
                    Equilibrium: "⇌",
                    equiv: "≡",
                    equivDD: "⩸",
                    eqvparsl: "⧥",
                    erarr: "⥱",
                    erDot: "≓",
                    escr: "ℯ",
                    Escr: "ℰ",
                    esdot: "≐",
                    esim: "≂",
                    Esim: "⩳",
                    eta: "η",
                    Eta: "Η",
                    eth: "ð",
                    ETH: "Ð",
                    euml: "ë",
                    Euml: "Ë",
                    euro: "€",
                    excl: "!",
                    exist: "∃",
                    Exists: "∃",
                    expectation: "ℰ",
                    exponentiale: "ⅇ",
                    ExponentialE: "ⅇ",
                    fallingdotseq: "≒",
                    fcy: "ф",
                    Fcy: "Ф",
                    female: "♀",
                    ffilig: "ﬃ",
                    fflig: "ﬀ",
                    ffllig: "ﬄ",
                    ffr: "𝔣",
                    Ffr: "𝔉",
                    filig: "ﬁ",
                    FilledSmallSquare: "◼",
                    FilledVerySmallSquare: "▪",
                    fjlig: "fj",
                    flat: "♭",
                    fllig: "ﬂ",
                    fltns: "▱",
                    fnof: "ƒ",
                    fopf: "𝕗",
                    Fopf: "𝔽",
                    forall: "∀",
                    ForAll: "∀",
                    fork: "⋔",
                    forkv: "⫙",
                    Fouriertrf: "ℱ",
                    fpartint: "⨍",
                    frac12: "½",
                    frac13: "⅓",
                    frac14: "¼",
                    frac15: "⅕",
                    frac16: "⅙",
                    frac18: "⅛",
                    frac23: "⅔",
                    frac25: "⅖",
                    frac34: "¾",
                    frac35: "⅗",
                    frac38: "⅜",
                    frac45: "⅘",
                    frac56: "⅚",
                    frac58: "⅝",
                    frac78: "⅞",
                    frasl: "⁄",
                    frown: "⌢",
                    fscr: "𝒻",
                    Fscr: "ℱ",
                    gacute: "ǵ",
                    gamma: "γ",
                    Gamma: "Γ",
                    gammad: "ϝ",
                    Gammad: "Ϝ",
                    gap: "⪆",
                    gbreve: "ğ",
                    Gbreve: "Ğ",
                    Gcedil: "Ģ",
                    gcirc: "ĝ",
                    Gcirc: "Ĝ",
                    gcy: "г",
                    Gcy: "Г",
                    gdot: "ġ",
                    Gdot: "Ġ",
                    ge: "≥",
                    gE: "≧",
                    gel: "⋛",
                    gEl: "⪌",
                    geq: "≥",
                    geqq: "≧",
                    geqslant: "⩾",
                    ges: "⩾",
                    gescc: "⪩",
                    gesdot: "⪀",
                    gesdoto: "⪂",
                    gesdotol: "⪄",
                    gesl: "⋛︀",
                    gesles: "⪔",
                    gfr: "𝔤",
                    Gfr: "𝔊",
                    gg: "≫",
                    Gg: "⋙",
                    ggg: "⋙",
                    gimel: "ℷ",
                    gjcy: "ѓ",
                    GJcy: "Ѓ",
                    gl: "≷",
                    gla: "⪥",
                    glE: "⪒",
                    glj: "⪤",
                    gnap: "⪊",
                    gnapprox: "⪊",
                    gne: "⪈",
                    gnE: "≩",
                    gneq: "⪈",
                    gneqq: "≩",
                    gnsim: "⋧",
                    gopf: "𝕘",
                    Gopf: "𝔾",
                    grave: "`",
                    GreaterEqual: "≥",
                    GreaterEqualLess: "⋛",
                    GreaterFullEqual: "≧",
                    GreaterGreater: "⪢",
                    GreaterLess: "≷",
                    GreaterSlantEqual: "⩾",
                    GreaterTilde: "≳",
                    gscr: "ℊ",
                    Gscr: "𝒢",
                    gsim: "≳",
                    gsime: "⪎",
                    gsiml: "⪐",
                    gt: ">",
                    Gt: "≫",
                    GT: ">",
                    gtcc: "⪧",
                    gtcir: "⩺",
                    gtdot: "⋗",
                    gtlPar: "⦕",
                    gtquest: "⩼",
                    gtrapprox: "⪆",
                    gtrarr: "⥸",
                    gtrdot: "⋗",
                    gtreqless: "⋛",
                    gtreqqless: "⪌",
                    gtrless: "≷",
                    gtrsim: "≳",
                    gvertneqq: "≩︀",
                    gvnE: "≩︀",
                    Hacek: "ˇ",
                    hairsp: " ",
                    half: "½",
                    hamilt: "ℋ",
                    hardcy: "ъ",
                    HARDcy: "Ъ",
                    harr: "↔",
                    hArr: "⇔",
                    harrcir: "⥈",
                    harrw: "↭",
                    Hat: "^",
                    hbar: "ℏ",
                    hcirc: "ĥ",
                    Hcirc: "Ĥ",
                    hearts: "♥",
                    heartsuit: "♥",
                    hellip: "…",
                    hercon: "⊹",
                    hfr: "𝔥",
                    Hfr: "ℌ",
                    HilbertSpace: "ℋ",
                    hksearow: "⤥",
                    hkswarow: "⤦",
                    hoarr: "⇿",
                    homtht: "∻",
                    hookleftarrow: "↩",
                    hookrightarrow: "↪",
                    hopf: "𝕙",
                    Hopf: "ℍ",
                    horbar: "―",
                    HorizontalLine: "─",
                    hscr: "𝒽",
                    Hscr: "ℋ",
                    hslash: "ℏ",
                    hstrok: "ħ",
                    Hstrok: "Ħ",
                    HumpDownHump: "≎",
                    HumpEqual: "≏",
                    hybull: "⁃",
                    hyphen: "‐",
                    iacute: "í",
                    Iacute: "Í",
                    ic: "⁣",
                    icirc: "î",
                    Icirc: "Î",
                    icy: "и",
                    Icy: "И",
                    Idot: "İ",
                    iecy: "е",
                    IEcy: "Е",
                    iexcl: "¡",
                    iff: "⇔",
                    ifr: "𝔦",
                    Ifr: "ℑ",
                    igrave: "ì",
                    Igrave: "Ì",
                    ii: "ⅈ",
                    iiiint: "⨌",
                    iiint: "∭",
                    iinfin: "⧜",
                    iiota: "℩",
                    ijlig: "ĳ",
                    IJlig: "Ĳ",
                    Im: "ℑ",
                    imacr: "ī",
                    Imacr: "Ī",
                    image: "ℑ",
                    ImaginaryI: "ⅈ",
                    imagline: "ℐ",
                    imagpart: "ℑ",
                    imath: "ı",
                    imof: "⊷",
                    imped: "Ƶ",
                    Implies: "⇒",
                    in: "∈",
                    incare: "℅",
                    infin: "∞",
                    infintie: "⧝",
                    inodot: "ı",
                    int: "∫",
                    Int: "∬",
                    intcal: "⊺",
                    integers: "ℤ",
                    Integral: "∫",
                    intercal: "⊺",
                    Intersection: "⋂",
                    intlarhk: "⨗",
                    intprod: "⨼",
                    InvisibleComma: "⁣",
                    InvisibleTimes: "⁢",
                    iocy: "ё",
                    IOcy: "Ё",
                    iogon: "į",
                    Iogon: "Į",
                    iopf: "𝕚",
                    Iopf: "𝕀",
                    iota: "ι",
                    Iota: "Ι",
                    iprod: "⨼",
                    iquest: "¿",
                    iscr: "𝒾",
                    Iscr: "ℐ",
                    isin: "∈",
                    isindot: "⋵",
                    isinE: "⋹",
                    isins: "⋴",
                    isinsv: "⋳",
                    isinv: "∈",
                    it: "⁢",
                    itilde: "ĩ",
                    Itilde: "Ĩ",
                    iukcy: "і",
                    Iukcy: "І",
                    iuml: "ï",
                    Iuml: "Ï",
                    jcirc: "ĵ",
                    Jcirc: "Ĵ",
                    jcy: "й",
                    Jcy: "Й",
                    jfr: "𝔧",
                    Jfr: "𝔍",
                    jmath: "ȷ",
                    jopf: "𝕛",
                    Jopf: "𝕁",
                    jscr: "𝒿",
                    Jscr: "𝒥",
                    jsercy: "ј",
                    Jsercy: "Ј",
                    jukcy: "є",
                    Jukcy: "Є",
                    kappa: "κ",
                    Kappa: "Κ",
                    kappav: "ϰ",
                    kcedil: "ķ",
                    Kcedil: "Ķ",
                    kcy: "к",
                    Kcy: "К",
                    kfr: "𝔨",
                    Kfr: "𝔎",
                    kgreen: "ĸ",
                    khcy: "х",
                    KHcy: "Х",
                    kjcy: "ќ",
                    KJcy: "Ќ",
                    kopf: "𝕜",
                    Kopf: "𝕂",
                    kscr: "𝓀",
                    Kscr: "𝒦",
                    lAarr: "⇚",
                    lacute: "ĺ",
                    Lacute: "Ĺ",
                    laemptyv: "⦴",
                    lagran: "ℒ",
                    lambda: "λ",
                    Lambda: "Λ",
                    lang: "⟨",
                    Lang: "⟪",
                    langd: "⦑",
                    langle: "⟨",
                    lap: "⪅",
                    Laplacetrf: "ℒ",
                    laquo: "«",
                    larr: "←",
                    lArr: "⇐",
                    Larr: "↞",
                    larrb: "⇤",
                    larrbfs: "⤟",
                    larrfs: "⤝",
                    larrhk: "↩",
                    larrlp: "↫",
                    larrpl: "⤹",
                    larrsim: "⥳",
                    larrtl: "↢",
                    lat: "⪫",
                    latail: "⤙",
                    lAtail: "⤛",
                    late: "⪭",
                    lates: "⪭︀",
                    lbarr: "⤌",
                    lBarr: "⤎",
                    lbbrk: "❲",
                    lbrace: "{",
                    lbrack: "[",
                    lbrke: "⦋",
                    lbrksld: "⦏",
                    lbrkslu: "⦍",
                    lcaron: "ľ",
                    Lcaron: "Ľ",
                    lcedil: "ļ",
                    Lcedil: "Ļ",
                    lceil: "⌈",
                    lcub: "{",
                    lcy: "л",
                    Lcy: "Л",
                    ldca: "⤶",
                    ldquo: "“",
                    ldquor: "„",
                    ldrdhar: "⥧",
                    ldrushar: "⥋",
                    ldsh: "↲",
                    le: "≤",
                    lE: "≦",
                    LeftAngleBracket: "⟨",
                    leftarrow: "←",
                    Leftarrow: "⇐",
                    LeftArrow: "←",
                    LeftArrowBar: "⇤",
                    LeftArrowRightArrow: "⇆",
                    leftarrowtail: "↢",
                    LeftCeiling: "⌈",
                    LeftDoubleBracket: "⟦",
                    LeftDownTeeVector: "⥡",
                    LeftDownVector: "⇃",
                    LeftDownVectorBar: "⥙",
                    LeftFloor: "⌊",
                    leftharpoondown: "↽",
                    leftharpoonup: "↼",
                    leftleftarrows: "⇇",
                    leftrightarrow: "↔",
                    Leftrightarrow: "⇔",
                    LeftRightArrow: "↔",
                    leftrightarrows: "⇆",
                    leftrightharpoons: "⇋",
                    leftrightsquigarrow: "↭",
                    LeftRightVector: "⥎",
                    LeftTee: "⊣",
                    LeftTeeArrow: "↤",
                    LeftTeeVector: "⥚",
                    leftthreetimes: "⋋",
                    LeftTriangle: "⊲",
                    LeftTriangleBar: "⧏",
                    LeftTriangleEqual: "⊴",
                    LeftUpDownVector: "⥑",
                    LeftUpTeeVector: "⥠",
                    LeftUpVector: "↿",
                    LeftUpVectorBar: "⥘",
                    LeftVector: "↼",
                    LeftVectorBar: "⥒",
                    leg: "⋚",
                    lEg: "⪋",
                    leq: "≤",
                    leqq: "≦",
                    leqslant: "⩽",
                    les: "⩽",
                    lescc: "⪨",
                    lesdot: "⩿",
                    lesdoto: "⪁",
                    lesdotor: "⪃",
                    lesg: "⋚︀",
                    lesges: "⪓",
                    lessapprox: "⪅",
                    lessdot: "⋖",
                    lesseqgtr: "⋚",
                    lesseqqgtr: "⪋",
                    LessEqualGreater: "⋚",
                    LessFullEqual: "≦",
                    LessGreater: "≶",
                    lessgtr: "≶",
                    LessLess: "⪡",
                    lesssim: "≲",
                    LessSlantEqual: "⩽",
                    LessTilde: "≲",
                    lfisht: "⥼",
                    lfloor: "⌊",
                    lfr: "𝔩",
                    Lfr: "𝔏",
                    lg: "≶",
                    lgE: "⪑",
                    lHar: "⥢",
                    lhard: "↽",
                    lharu: "↼",
                    lharul: "⥪",
                    lhblk: "▄",
                    ljcy: "љ",
                    LJcy: "Љ",
                    ll: "≪",
                    Ll: "⋘",
                    llarr: "⇇",
                    llcorner: "⌞",
                    Lleftarrow: "⇚",
                    llhard: "⥫",
                    lltri: "◺",
                    lmidot: "ŀ",
                    Lmidot: "Ŀ",
                    lmoust: "⎰",
                    lmoustache: "⎰",
                    lnap: "⪉",
                    lnapprox: "⪉",
                    lne: "⪇",
                    lnE: "≨",
                    lneq: "⪇",
                    lneqq: "≨",
                    lnsim: "⋦",
                    loang: "⟬",
                    loarr: "⇽",
                    lobrk: "⟦",
                    longleftarrow: "⟵",
                    Longleftarrow: "⟸",
                    LongLeftArrow: "⟵",
                    longleftrightarrow: "⟷",
                    Longleftrightarrow: "⟺",
                    LongLeftRightArrow: "⟷",
                    longmapsto: "⟼",
                    longrightarrow: "⟶",
                    Longrightarrow: "⟹",
                    LongRightArrow: "⟶",
                    looparrowleft: "↫",
                    looparrowright: "↬",
                    lopar: "⦅",
                    lopf: "𝕝",
                    Lopf: "𝕃",
                    loplus: "⨭",
                    lotimes: "⨴",
                    lowast: "∗",
                    lowbar: "_",
                    LowerLeftArrow: "↙",
                    LowerRightArrow: "↘",
                    loz: "◊",
                    lozenge: "◊",
                    lozf: "⧫",
                    lpar: "(",
                    lparlt: "⦓",
                    lrarr: "⇆",
                    lrcorner: "⌟",
                    lrhar: "⇋",
                    lrhard: "⥭",
                    lrm: "‎",
                    lrtri: "⊿",
                    lsaquo: "‹",
                    lscr: "𝓁",
                    Lscr: "ℒ",
                    lsh: "↰",
                    Lsh: "↰",
                    lsim: "≲",
                    lsime: "⪍",
                    lsimg: "⪏",
                    lsqb: "[",
                    lsquo: "‘",
                    lsquor: "‚",
                    lstrok: "ł",
                    Lstrok: "Ł",
                    lt: "<",
                    Lt: "≪",
                    LT: "<",
                    ltcc: "⪦",
                    ltcir: "⩹",
                    ltdot: "⋖",
                    lthree: "⋋",
                    ltimes: "⋉",
                    ltlarr: "⥶",
                    ltquest: "⩻",
                    ltri: "◃",
                    ltrie: "⊴",
                    ltrif: "◂",
                    ltrPar: "⦖",
                    lurdshar: "⥊",
                    luruhar: "⥦",
                    lvertneqq: "≨︀",
                    lvnE: "≨︀",
                    macr: "¯",
                    male: "♂",
                    malt: "✠",
                    maltese: "✠",
                    map: "↦",
                    Map: "⤅",
                    mapsto: "↦",
                    mapstodown: "↧",
                    mapstoleft: "↤",
                    mapstoup: "↥",
                    marker: "▮",
                    mcomma: "⨩",
                    mcy: "м",
                    Mcy: "М",
                    mdash: "—",
                    mDDot: "∺",
                    measuredangle: "∡",
                    MediumSpace: " ",
                    Mellintrf: "ℳ",
                    mfr: "𝔪",
                    Mfr: "𝔐",
                    mho: "℧",
                    micro: "µ",
                    mid: "∣",
                    midast: "*",
                    midcir: "⫰",
                    middot: "·",
                    minus: "−",
                    minusb: "⊟",
                    minusd: "∸",
                    minusdu: "⨪",
                    MinusPlus: "∓",
                    mlcp: "⫛",
                    mldr: "…",
                    mnplus: "∓",
                    models: "⊧",
                    mopf: "𝕞",
                    Mopf: "𝕄",
                    mp: "∓",
                    mscr: "𝓂",
                    Mscr: "ℳ",
                    mstpos: "∾",
                    mu: "μ",
                    Mu: "Μ",
                    multimap: "⊸",
                    mumap: "⊸",
                    nabla: "∇",
                    nacute: "ń",
                    Nacute: "Ń",
                    nang: "∠⃒",
                    nap: "≉",
                    napE: "⩰̸",
                    napid: "≋̸",
                    napos: "ŉ",
                    napprox: "≉",
                    natur: "♮",
                    natural: "♮",
                    naturals: "ℕ",
                    nbsp: " ",
                    nbump: "≎̸",
                    nbumpe: "≏̸",
                    ncap: "⩃",
                    ncaron: "ň",
                    Ncaron: "Ň",
                    ncedil: "ņ",
                    Ncedil: "Ņ",
                    ncong: "≇",
                    ncongdot: "⩭̸",
                    ncup: "⩂",
                    ncy: "н",
                    Ncy: "Н",
                    ndash: "–",
                    ne: "≠",
                    nearhk: "⤤",
                    nearr: "↗",
                    neArr: "⇗",
                    nearrow: "↗",
                    nedot: "≐̸",
                    NegativeMediumSpace: "​",
                    NegativeThickSpace: "​",
                    NegativeThinSpace: "​",
                    NegativeVeryThinSpace: "​",
                    nequiv: "≢",
                    nesear: "⤨",
                    nesim: "≂̸",
                    NestedGreaterGreater: "≫",
                    NestedLessLess: "≪",
                    NewLine: "\n",
                    nexist: "∄",
                    nexists: "∄",
                    nfr: "𝔫",
                    Nfr: "𝔑",
                    nge: "≱",
                    ngE: "≧̸",
                    ngeq: "≱",
                    ngeqq: "≧̸",
                    ngeqslant: "⩾̸",
                    nges: "⩾̸",
                    nGg: "⋙̸",
                    ngsim: "≵",
                    ngt: "≯",
                    nGt: "≫⃒",
                    ngtr: "≯",
                    nGtv: "≫̸",
                    nharr: "↮",
                    nhArr: "⇎",
                    nhpar: "⫲",
                    ni: "∋",
                    nis: "⋼",
                    nisd: "⋺",
                    niv: "∋",
                    njcy: "њ",
                    NJcy: "Њ",
                    nlarr: "↚",
                    nlArr: "⇍",
                    nldr: "‥",
                    nle: "≰",
                    nlE: "≦̸",
                    nleftarrow: "↚",
                    nLeftarrow: "⇍",
                    nleftrightarrow: "↮",
                    nLeftrightarrow: "⇎",
                    nleq: "≰",
                    nleqq: "≦̸",
                    nleqslant: "⩽̸",
                    nles: "⩽̸",
                    nless: "≮",
                    nLl: "⋘̸",
                    nlsim: "≴",
                    nlt: "≮",
                    nLt: "≪⃒",
                    nltri: "⋪",
                    nltrie: "⋬",
                    nLtv: "≪̸",
                    nmid: "∤",
                    NoBreak: "⁠",
                    NonBreakingSpace: " ",
                    nopf: "𝕟",
                    Nopf: "ℕ",
                    not: "¬",
                    Not: "⫬",
                    NotCongruent: "≢",
                    NotCupCap: "≭",
                    NotDoubleVerticalBar: "∦",
                    NotElement: "∉",
                    NotEqual: "≠",
                    NotEqualTilde: "≂̸",
                    NotExists: "∄",
                    NotGreater: "≯",
                    NotGreaterEqual: "≱",
                    NotGreaterFullEqual: "≧̸",
                    NotGreaterGreater: "≫̸",
                    NotGreaterLess: "≹",
                    NotGreaterSlantEqual: "⩾̸",
                    NotGreaterTilde: "≵",
                    NotHumpDownHump: "≎̸",
                    NotHumpEqual: "≏̸",
                    notin: "∉",
                    notindot: "⋵̸",
                    notinE: "⋹̸",
                    notinva: "∉",
                    notinvb: "⋷",
                    notinvc: "⋶",
                    NotLeftTriangle: "⋪",
                    NotLeftTriangleBar: "⧏̸",
                    NotLeftTriangleEqual: "⋬",
                    NotLess: "≮",
                    NotLessEqual: "≰",
                    NotLessGreater: "≸",
                    NotLessLess: "≪̸",
                    NotLessSlantEqual: "⩽̸",
                    NotLessTilde: "≴",
                    NotNestedGreaterGreater: "⪢̸",
                    NotNestedLessLess: "⪡̸",
                    notni: "∌",
                    notniva: "∌",
                    notnivb: "⋾",
                    notnivc: "⋽",
                    NotPrecedes: "⊀",
                    NotPrecedesEqual: "⪯̸",
                    NotPrecedesSlantEqual: "⋠",
                    NotReverseElement: "∌",
                    NotRightTriangle: "⋫",
                    NotRightTriangleBar: "⧐̸",
                    NotRightTriangleEqual: "⋭",
                    NotSquareSubset: "⊏̸",
                    NotSquareSubsetEqual: "⋢",
                    NotSquareSuperset: "⊐̸",
                    NotSquareSupersetEqual: "⋣",
                    NotSubset: "⊂⃒",
                    NotSubsetEqual: "⊈",
                    NotSucceeds: "⊁",
                    NotSucceedsEqual: "⪰̸",
                    NotSucceedsSlantEqual: "⋡",
                    NotSucceedsTilde: "≿̸",
                    NotSuperset: "⊃⃒",
                    NotSupersetEqual: "⊉",
                    NotTilde: "≁",
                    NotTildeEqual: "≄",
                    NotTildeFullEqual: "≇",
                    NotTildeTilde: "≉",
                    NotVerticalBar: "∤",
                    npar: "∦",
                    nparallel: "∦",
                    nparsl: "⫽⃥",
                    npart: "∂̸",
                    npolint: "⨔",
                    npr: "⊀",
                    nprcue: "⋠",
                    npre: "⪯̸",
                    nprec: "⊀",
                    npreceq: "⪯̸",
                    nrarr: "↛",
                    nrArr: "⇏",
                    nrarrc: "⤳̸",
                    nrarrw: "↝̸",
                    nrightarrow: "↛",
                    nRightarrow: "⇏",
                    nrtri: "⋫",
                    nrtrie: "⋭",
                    nsc: "⊁",
                    nsccue: "⋡",
                    nsce: "⪰̸",
                    nscr: "𝓃",
                    Nscr: "𝒩",
                    nshortmid: "∤",
                    nshortparallel: "∦",
                    nsim: "≁",
                    nsime: "≄",
                    nsimeq: "≄",
                    nsmid: "∤",
                    nspar: "∦",
                    nsqsube: "⋢",
                    nsqsupe: "⋣",
                    nsub: "⊄",
                    nsube: "⊈",
                    nsubE: "⫅̸",
                    nsubset: "⊂⃒",
                    nsubseteq: "⊈",
                    nsubseteqq: "⫅̸",
                    nsucc: "⊁",
                    nsucceq: "⪰̸",
                    nsup: "⊅",
                    nsupe: "⊉",
                    nsupE: "⫆̸",
                    nsupset: "⊃⃒",
                    nsupseteq: "⊉",
                    nsupseteqq: "⫆̸",
                    ntgl: "≹",
                    ntilde: "ñ",
                    Ntilde: "Ñ",
                    ntlg: "≸",
                    ntriangleleft: "⋪",
                    ntrianglelefteq: "⋬",
                    ntriangleright: "⋫",
                    ntrianglerighteq: "⋭",
                    nu: "ν",
                    Nu: "Ν",
                    num: "#",
                    numero: "№",
                    numsp: " ",
                    nvap: "≍⃒",
                    nvdash: "⊬",
                    nvDash: "⊭",
                    nVdash: "⊮",
                    nVDash: "⊯",
                    nvge: "≥⃒",
                    nvgt: ">⃒",
                    nvHarr: "⤄",
                    nvinfin: "⧞",
                    nvlArr: "⤂",
                    nvle: "≤⃒",
                    nvlt: "<⃒",
                    nvltrie: "⊴⃒",
                    nvrArr: "⤃",
                    nvrtrie: "⊵⃒",
                    nvsim: "∼⃒",
                    nwarhk: "⤣",
                    nwarr: "↖",
                    nwArr: "⇖",
                    nwarrow: "↖",
                    nwnear: "⤧",
                    oacute: "ó",
                    Oacute: "Ó",
                    oast: "⊛",
                    ocir: "⊚",
                    ocirc: "ô",
                    Ocirc: "Ô",
                    ocy: "о",
                    Ocy: "О",
                    odash: "⊝",
                    odblac: "ő",
                    Odblac: "Ő",
                    odiv: "⨸",
                    odot: "⊙",
                    odsold: "⦼",
                    oelig: "œ",
                    OElig: "Œ",
                    ofcir: "⦿",
                    ofr: "𝔬",
                    Ofr: "𝔒",
                    ogon: "˛",
                    ograve: "ò",
                    Ograve: "Ò",
                    ogt: "⧁",
                    ohbar: "⦵",
                    ohm: "Ω",
                    oint: "∮",
                    olarr: "↺",
                    olcir: "⦾",
                    olcross: "⦻",
                    oline: "‾",
                    olt: "⧀",
                    omacr: "ō",
                    Omacr: "Ō",
                    omega: "ω",
                    Omega: "Ω",
                    omicron: "ο",
                    Omicron: "Ο",
                    omid: "⦶",
                    ominus: "⊖",
                    oopf: "𝕠",
                    Oopf: "𝕆",
                    opar: "⦷",
                    OpenCurlyDoubleQuote: "“",
                    OpenCurlyQuote: "‘",
                    operp: "⦹",
                    oplus: "⊕",
                    or: "∨",
                    Or: "⩔",
                    orarr: "↻",
                    ord: "⩝",
                    order: "ℴ",
                    orderof: "ℴ",
                    ordf: "ª",
                    ordm: "º",
                    origof: "⊶",
                    oror: "⩖",
                    orslope: "⩗",
                    orv: "⩛",
                    oS: "Ⓢ",
                    oscr: "ℴ",
                    Oscr: "𝒪",
                    oslash: "ø",
                    Oslash: "Ø",
                    osol: "⊘",
                    otilde: "õ",
                    Otilde: "Õ",
                    otimes: "⊗",
                    Otimes: "⨷",
                    otimesas: "⨶",
                    ouml: "ö",
                    Ouml: "Ö",
                    ovbar: "⌽",
                    OverBar: "‾",
                    OverBrace: "⏞",
                    OverBracket: "⎴",
                    OverParenthesis: "⏜",
                    par: "∥",
                    para: "¶",
                    parallel: "∥",
                    parsim: "⫳",
                    parsl: "⫽",
                    part: "∂",
                    PartialD: "∂",
                    pcy: "п",
                    Pcy: "П",
                    percnt: "%",
                    period: ".",
                    permil: "‰",
                    perp: "⊥",
                    pertenk: "‱",
                    pfr: "𝔭",
                    Pfr: "𝔓",
                    phi: "φ",
                    Phi: "Φ",
                    phiv: "ϕ",
                    phmmat: "ℳ",
                    phone: "☎",
                    pi: "π",
                    Pi: "Π",
                    pitchfork: "⋔",
                    piv: "ϖ",
                    planck: "ℏ",
                    planckh: "ℎ",
                    plankv: "ℏ",
                    plus: "+",
                    plusacir: "⨣",
                    plusb: "⊞",
                    pluscir: "⨢",
                    plusdo: "∔",
                    plusdu: "⨥",
                    pluse: "⩲",
                    PlusMinus: "±",
                    plusmn: "±",
                    plussim: "⨦",
                    plustwo: "⨧",
                    pm: "±",
                    Poincareplane: "ℌ",
                    pointint: "⨕",
                    popf: "𝕡",
                    Popf: "ℙ",
                    pound: "£",
                    pr: "≺",
                    Pr: "⪻",
                    prap: "⪷",
                    prcue: "≼",
                    pre: "⪯",
                    prE: "⪳",
                    prec: "≺",
                    precapprox: "⪷",
                    preccurlyeq: "≼",
                    Precedes: "≺",
                    PrecedesEqual: "⪯",
                    PrecedesSlantEqual: "≼",
                    PrecedesTilde: "≾",
                    preceq: "⪯",
                    precnapprox: "⪹",
                    precneqq: "⪵",
                    precnsim: "⋨",
                    precsim: "≾",
                    prime: "′",
                    Prime: "″",
                    primes: "ℙ",
                    prnap: "⪹",
                    prnE: "⪵",
                    prnsim: "⋨",
                    prod: "∏",
                    Product: "∏",
                    profalar: "⌮",
                    profline: "⌒",
                    profsurf: "⌓",
                    prop: "∝",
                    Proportion: "∷",
                    Proportional: "∝",
                    propto: "∝",
                    prsim: "≾",
                    prurel: "⊰",
                    pscr: "𝓅",
                    Pscr: "𝒫",
                    psi: "ψ",
                    Psi: "Ψ",
                    puncsp: " ",
                    qfr: "𝔮",
                    Qfr: "𝔔",
                    qint: "⨌",
                    qopf: "𝕢",
                    Qopf: "ℚ",
                    qprime: "⁗",
                    qscr: "𝓆",
                    Qscr: "𝒬",
                    quaternions: "ℍ",
                    quatint: "⨖",
                    quest: "?",
                    questeq: "≟",
                    quot: '"',
                    QUOT: '"',
                    rAarr: "⇛",
                    race: "∽̱",
                    racute: "ŕ",
                    Racute: "Ŕ",
                    radic: "√",
                    raemptyv: "⦳",
                    rang: "⟩",
                    Rang: "⟫",
                    rangd: "⦒",
                    range: "⦥",
                    rangle: "⟩",
                    raquo: "»",
                    rarr: "→",
                    rArr: "⇒",
                    Rarr: "↠",
                    rarrap: "⥵",
                    rarrb: "⇥",
                    rarrbfs: "⤠",
                    rarrc: "⤳",
                    rarrfs: "⤞",
                    rarrhk: "↪",
                    rarrlp: "↬",
                    rarrpl: "⥅",
                    rarrsim: "⥴",
                    rarrtl: "↣",
                    Rarrtl: "⤖",
                    rarrw: "↝",
                    ratail: "⤚",
                    rAtail: "⤜",
                    ratio: "∶",
                    rationals: "ℚ",
                    rbarr: "⤍",
                    rBarr: "⤏",
                    RBarr: "⤐",
                    rbbrk: "❳",
                    rbrace: "}",
                    rbrack: "]",
                    rbrke: "⦌",
                    rbrksld: "⦎",
                    rbrkslu: "⦐",
                    rcaron: "ř",
                    Rcaron: "Ř",
                    rcedil: "ŗ",
                    Rcedil: "Ŗ",
                    rceil: "⌉",
                    rcub: "}",
                    rcy: "р",
                    Rcy: "Р",
                    rdca: "⤷",
                    rdldhar: "⥩",
                    rdquo: "”",
                    rdquor: "”",
                    rdsh: "↳",
                    Re: "ℜ",
                    real: "ℜ",
                    realine: "ℛ",
                    realpart: "ℜ",
                    reals: "ℝ",
                    rect: "▭",
                    reg: "®",
                    REG: "®",
                    ReverseElement: "∋",
                    ReverseEquilibrium: "⇋",
                    ReverseUpEquilibrium: "⥯",
                    rfisht: "⥽",
                    rfloor: "⌋",
                    rfr: "𝔯",
                    Rfr: "ℜ",
                    rHar: "⥤",
                    rhard: "⇁",
                    rharu: "⇀",
                    rharul: "⥬",
                    rho: "ρ",
                    Rho: "Ρ",
                    rhov: "ϱ",
                    RightAngleBracket: "⟩",
                    rightarrow: "→",
                    Rightarrow: "⇒",
                    RightArrow: "→",
                    RightArrowBar: "⇥",
                    RightArrowLeftArrow: "⇄",
                    rightarrowtail: "↣",
                    RightCeiling: "⌉",
                    RightDoubleBracket: "⟧",
                    RightDownTeeVector: "⥝",
                    RightDownVector: "⇂",
                    RightDownVectorBar: "⥕",
                    RightFloor: "⌋",
                    rightharpoondown: "⇁",
                    rightharpoonup: "⇀",
                    rightleftarrows: "⇄",
                    rightleftharpoons: "⇌",
                    rightrightarrows: "⇉",
                    rightsquigarrow: "↝",
                    RightTee: "⊢",
                    RightTeeArrow: "↦",
                    RightTeeVector: "⥛",
                    rightthreetimes: "⋌",
                    RightTriangle: "⊳",
                    RightTriangleBar: "⧐",
                    RightTriangleEqual: "⊵",
                    RightUpDownVector: "⥏",
                    RightUpTeeVector: "⥜",
                    RightUpVector: "↾",
                    RightUpVectorBar: "⥔",
                    RightVector: "⇀",
                    RightVectorBar: "⥓",
                    ring: "˚",
                    risingdotseq: "≓",
                    rlarr: "⇄",
                    rlhar: "⇌",
                    rlm: "‏",
                    rmoust: "⎱",
                    rmoustache: "⎱",
                    rnmid: "⫮",
                    roang: "⟭",
                    roarr: "⇾",
                    robrk: "⟧",
                    ropar: "⦆",
                    ropf: "𝕣",
                    Ropf: "ℝ",
                    roplus: "⨮",
                    rotimes: "⨵",
                    RoundImplies: "⥰",
                    rpar: ")",
                    rpargt: "⦔",
                    rppolint: "⨒",
                    rrarr: "⇉",
                    Rrightarrow: "⇛",
                    rsaquo: "›",
                    rscr: "𝓇",
                    Rscr: "ℛ",
                    rsh: "↱",
                    Rsh: "↱",
                    rsqb: "]",
                    rsquo: "’",
                    rsquor: "’",
                    rthree: "⋌",
                    rtimes: "⋊",
                    rtri: "▹",
                    rtrie: "⊵",
                    rtrif: "▸",
                    rtriltri: "⧎",
                    RuleDelayed: "⧴",
                    ruluhar: "⥨",
                    rx: "℞",
                    sacute: "ś",
                    Sacute: "Ś",
                    sbquo: "‚",
                    sc: "≻",
                    Sc: "⪼",
                    scap: "⪸",
                    scaron: "š",
                    Scaron: "Š",
                    sccue: "≽",
                    sce: "⪰",
                    scE: "⪴",
                    scedil: "ş",
                    Scedil: "Ş",
                    scirc: "ŝ",
                    Scirc: "Ŝ",
                    scnap: "⪺",
                    scnE: "⪶",
                    scnsim: "⋩",
                    scpolint: "⨓",
                    scsim: "≿",
                    scy: "с",
                    Scy: "С",
                    sdot: "⋅",
                    sdotb: "⊡",
                    sdote: "⩦",
                    searhk: "⤥",
                    searr: "↘",
                    seArr: "⇘",
                    searrow: "↘",
                    sect: "§",
                    semi: ";",
                    seswar: "⤩",
                    setminus: "∖",
                    setmn: "∖",
                    sext: "✶",
                    sfr: "𝔰",
                    Sfr: "𝔖",
                    sfrown: "⌢",
                    sharp: "♯",
                    shchcy: "щ",
                    SHCHcy: "Щ",
                    shcy: "ш",
                    SHcy: "Ш",
                    ShortDownArrow: "↓",
                    ShortLeftArrow: "←",
                    shortmid: "∣",
                    shortparallel: "∥",
                    ShortRightArrow: "→",
                    ShortUpArrow: "↑",
                    shy: "­",
                    sigma: "σ",
                    Sigma: "Σ",
                    sigmaf: "ς",
                    sigmav: "ς",
                    sim: "∼",
                    simdot: "⩪",
                    sime: "≃",
                    simeq: "≃",
                    simg: "⪞",
                    simgE: "⪠",
                    siml: "⪝",
                    simlE: "⪟",
                    simne: "≆",
                    simplus: "⨤",
                    simrarr: "⥲",
                    slarr: "←",
                    SmallCircle: "∘",
                    smallsetminus: "∖",
                    smashp: "⨳",
                    smeparsl: "⧤",
                    smid: "∣",
                    smile: "⌣",
                    smt: "⪪",
                    smte: "⪬",
                    smtes: "⪬︀",
                    softcy: "ь",
                    SOFTcy: "Ь",
                    sol: "/",
                    solb: "⧄",
                    solbar: "⌿",
                    sopf: "𝕤",
                    Sopf: "𝕊",
                    spades: "♠",
                    spadesuit: "♠",
                    spar: "∥",
                    sqcap: "⊓",
                    sqcaps: "⊓︀",
                    sqcup: "⊔",
                    sqcups: "⊔︀",
                    Sqrt: "√",
                    sqsub: "⊏",
                    sqsube: "⊑",
                    sqsubset: "⊏",
                    sqsubseteq: "⊑",
                    sqsup: "⊐",
                    sqsupe: "⊒",
                    sqsupset: "⊐",
                    sqsupseteq: "⊒",
                    squ: "□",
                    square: "□",
                    Square: "□",
                    SquareIntersection: "⊓",
                    SquareSubset: "⊏",
                    SquareSubsetEqual: "⊑",
                    SquareSuperset: "⊐",
                    SquareSupersetEqual: "⊒",
                    SquareUnion: "⊔",
                    squarf: "▪",
                    squf: "▪",
                    srarr: "→",
                    sscr: "𝓈",
                    Sscr: "𝒮",
                    ssetmn: "∖",
                    ssmile: "⌣",
                    sstarf: "⋆",
                    star: "☆",
                    Star: "⋆",
                    starf: "★",
                    straightepsilon: "ϵ",
                    straightphi: "ϕ",
                    strns: "¯",
                    sub: "⊂",
                    Sub: "⋐",
                    subdot: "⪽",
                    sube: "⊆",
                    subE: "⫅",
                    subedot: "⫃",
                    submult: "⫁",
                    subne: "⊊",
                    subnE: "⫋",
                    subplus: "⪿",
                    subrarr: "⥹",
                    subset: "⊂",
                    Subset: "⋐",
                    subseteq: "⊆",
                    subseteqq: "⫅",
                    SubsetEqual: "⊆",
                    subsetneq: "⊊",
                    subsetneqq: "⫋",
                    subsim: "⫇",
                    subsub: "⫕",
                    subsup: "⫓",
                    succ: "≻",
                    succapprox: "⪸",
                    succcurlyeq: "≽",
                    Succeeds: "≻",
                    SucceedsEqual: "⪰",
                    SucceedsSlantEqual: "≽",
                    SucceedsTilde: "≿",
                    succeq: "⪰",
                    succnapprox: "⪺",
                    succneqq: "⪶",
                    succnsim: "⋩",
                    succsim: "≿",
                    SuchThat: "∋",
                    sum: "∑",
                    Sum: "∑",
                    sung: "♪",
                    sup: "⊃",
                    Sup: "⋑",
                    sup1: "¹",
                    sup2: "²",
                    sup3: "³",
                    supdot: "⪾",
                    supdsub: "⫘",
                    supe: "⊇",
                    supE: "⫆",
                    supedot: "⫄",
                    Superset: "⊃",
                    SupersetEqual: "⊇",
                    suphsol: "⟉",
                    suphsub: "⫗",
                    suplarr: "⥻",
                    supmult: "⫂",
                    supne: "⊋",
                    supnE: "⫌",
                    supplus: "⫀",
                    supset: "⊃",
                    Supset: "⋑",
                    supseteq: "⊇",
                    supseteqq: "⫆",
                    supsetneq: "⊋",
                    supsetneqq: "⫌",
                    supsim: "⫈",
                    supsub: "⫔",
                    supsup: "⫖",
                    swarhk: "⤦",
                    swarr: "↙",
                    swArr: "⇙",
                    swarrow: "↙",
                    swnwar: "⤪",
                    szlig: "ß",
                    Tab: "\t",
                    target: "⌖",
                    tau: "τ",
                    Tau: "Τ",
                    tbrk: "⎴",
                    tcaron: "ť",
                    Tcaron: "Ť",
                    tcedil: "ţ",
                    Tcedil: "Ţ",
                    tcy: "т",
                    Tcy: "Т",
                    tdot: "⃛",
                    telrec: "⌕",
                    tfr: "𝔱",
                    Tfr: "𝔗",
                    there4: "∴",
                    therefore: "∴",
                    Therefore: "∴",
                    theta: "θ",
                    Theta: "Θ",
                    thetasym: "ϑ",
                    thetav: "ϑ",
                    thickapprox: "≈",
                    thicksim: "∼",
                    ThickSpace: "  ",
                    thinsp: " ",
                    ThinSpace: " ",
                    thkap: "≈",
                    thksim: "∼",
                    thorn: "þ",
                    THORN: "Þ",
                    tilde: "˜",
                    Tilde: "∼",
                    TildeEqual: "≃",
                    TildeFullEqual: "≅",
                    TildeTilde: "≈",
                    times: "×",
                    timesb: "⊠",
                    timesbar: "⨱",
                    timesd: "⨰",
                    tint: "∭",
                    toea: "⤨",
                    top: "⊤",
                    topbot: "⌶",
                    topcir: "⫱",
                    topf: "𝕥",
                    Topf: "𝕋",
                    topfork: "⫚",
                    tosa: "⤩",
                    tprime: "‴",
                    trade: "™",
                    TRADE: "™",
                    triangle: "▵",
                    triangledown: "▿",
                    triangleleft: "◃",
                    trianglelefteq: "⊴",
                    triangleq: "≜",
                    triangleright: "▹",
                    trianglerighteq: "⊵",
                    tridot: "◬",
                    trie: "≜",
                    triminus: "⨺",
                    TripleDot: "⃛",
                    triplus: "⨹",
                    trisb: "⧍",
                    tritime: "⨻",
                    trpezium: "⏢",
                    tscr: "𝓉",
                    Tscr: "𝒯",
                    tscy: "ц",
                    TScy: "Ц",
                    tshcy: "ћ",
                    TSHcy: "Ћ",
                    tstrok: "ŧ",
                    Tstrok: "Ŧ",
                    twixt: "≬",
                    twoheadleftarrow: "↞",
                    twoheadrightarrow: "↠",
                    uacute: "ú",
                    Uacute: "Ú",
                    uarr: "↑",
                    uArr: "⇑",
                    Uarr: "↟",
                    Uarrocir: "⥉",
                    ubrcy: "ў",
                    Ubrcy: "Ў",
                    ubreve: "ŭ",
                    Ubreve: "Ŭ",
                    ucirc: "û",
                    Ucirc: "Û",
                    ucy: "у",
                    Ucy: "У",
                    udarr: "⇅",
                    udblac: "ű",
                    Udblac: "Ű",
                    udhar: "⥮",
                    ufisht: "⥾",
                    ufr: "𝔲",
                    Ufr: "𝔘",
                    ugrave: "ù",
                    Ugrave: "Ù",
                    uHar: "⥣",
                    uharl: "↿",
                    uharr: "↾",
                    uhblk: "▀",
                    ulcorn: "⌜",
                    ulcorner: "⌜",
                    ulcrop: "⌏",
                    ultri: "◸",
                    umacr: "ū",
                    Umacr: "Ū",
                    uml: "¨",
                    UnderBar: "_",
                    UnderBrace: "⏟",
                    UnderBracket: "⎵",
                    UnderParenthesis: "⏝",
                    Union: "⋃",
                    UnionPlus: "⊎",
                    uogon: "ų",
                    Uogon: "Ų",
                    uopf: "𝕦",
                    Uopf: "𝕌",
                    uparrow: "↑",
                    Uparrow: "⇑",
                    UpArrow: "↑",
                    UpArrowBar: "⤒",
                    UpArrowDownArrow: "⇅",
                    updownarrow: "↕",
                    Updownarrow: "⇕",
                    UpDownArrow: "↕",
                    UpEquilibrium: "⥮",
                    upharpoonleft: "↿",
                    upharpoonright: "↾",
                    uplus: "⊎",
                    UpperLeftArrow: "↖",
                    UpperRightArrow: "↗",
                    upsi: "υ",
                    Upsi: "ϒ",
                    upsih: "ϒ",
                    upsilon: "υ",
                    Upsilon: "Υ",
                    UpTee: "⊥",
                    UpTeeArrow: "↥",
                    upuparrows: "⇈",
                    urcorn: "⌝",
                    urcorner: "⌝",
                    urcrop: "⌎",
                    uring: "ů",
                    Uring: "Ů",
                    urtri: "◹",
                    uscr: "𝓊",
                    Uscr: "𝒰",
                    utdot: "⋰",
                    utilde: "ũ",
                    Utilde: "Ũ",
                    utri: "▵",
                    utrif: "▴",
                    uuarr: "⇈",
                    uuml: "ü",
                    Uuml: "Ü",
                    uwangle: "⦧",
                    vangrt: "⦜",
                    varepsilon: "ϵ",
                    varkappa: "ϰ",
                    varnothing: "∅",
                    varphi: "ϕ",
                    varpi: "ϖ",
                    varpropto: "∝",
                    varr: "↕",
                    vArr: "⇕",
                    varrho: "ϱ",
                    varsigma: "ς",
                    varsubsetneq: "⊊︀",
                    varsubsetneqq: "⫋︀",
                    varsupsetneq: "⊋︀",
                    varsupsetneqq: "⫌︀",
                    vartheta: "ϑ",
                    vartriangleleft: "⊲",
                    vartriangleright: "⊳",
                    vBar: "⫨",
                    Vbar: "⫫",
                    vBarv: "⫩",
                    vcy: "в",
                    Vcy: "В",
                    vdash: "⊢",
                    vDash: "⊨",
                    Vdash: "⊩",
                    VDash: "⊫",
                    Vdashl: "⫦",
                    vee: "∨",
                    Vee: "⋁",
                    veebar: "⊻",
                    veeeq: "≚",
                    vellip: "⋮",
                    verbar: "|",
                    Verbar: "‖",
                    vert: "|",
                    Vert: "‖",
                    VerticalBar: "∣",
                    VerticalLine: "|",
                    VerticalSeparator: "❘",
                    VerticalTilde: "≀",
                    VeryThinSpace: " ",
                    vfr: "𝔳",
                    Vfr: "𝔙",
                    vltri: "⊲",
                    vnsub: "⊂⃒",
                    vnsup: "⊃⃒",
                    vopf: "𝕧",
                    Vopf: "𝕍",
                    vprop: "∝",
                    vrtri: "⊳",
                    vscr: "𝓋",
                    Vscr: "𝒱",
                    vsubne: "⊊︀",
                    vsubnE: "⫋︀",
                    vsupne: "⊋︀",
                    vsupnE: "⫌︀",
                    Vvdash: "⊪",
                    vzigzag: "⦚",
                    wcirc: "ŵ",
                    Wcirc: "Ŵ",
                    wedbar: "⩟",
                    wedge: "∧",
                    Wedge: "⋀",
                    wedgeq: "≙",
                    weierp: "℘",
                    wfr: "𝔴",
                    Wfr: "𝔚",
                    wopf: "𝕨",
                    Wopf: "𝕎",
                    wp: "℘",
                    wr: "≀",
                    wreath: "≀",
                    wscr: "𝓌",
                    Wscr: "𝒲",
                    xcap: "⋂",
                    xcirc: "◯",
                    xcup: "⋃",
                    xdtri: "▽",
                    xfr: "𝔵",
                    Xfr: "𝔛",
                    xharr: "⟷",
                    xhArr: "⟺",
                    xi: "ξ",
                    Xi: "Ξ",
                    xlarr: "⟵",
                    xlArr: "⟸",
                    xmap: "⟼",
                    xnis: "⋻",
                    xodot: "⨀",
                    xopf: "𝕩",
                    Xopf: "𝕏",
                    xoplus: "⨁",
                    xotime: "⨂",
                    xrarr: "⟶",
                    xrArr: "⟹",
                    xscr: "𝓍",
                    Xscr: "𝒳",
                    xsqcup: "⨆",
                    xuplus: "⨄",
                    xutri: "△",
                    xvee: "⋁",
                    xwedge: "⋀",
                    yacute: "ý",
                    Yacute: "Ý",
                    yacy: "я",
                    YAcy: "Я",
                    ycirc: "ŷ",
                    Ycirc: "Ŷ",
                    ycy: "ы",
                    Ycy: "Ы",
                    yen: "¥",
                    yfr: "𝔶",
                    Yfr: "𝔜",
                    yicy: "ї",
                    YIcy: "Ї",
                    yopf: "𝕪",
                    Yopf: "𝕐",
                    yscr: "𝓎",
                    Yscr: "𝒴",
                    yucy: "ю",
                    YUcy: "Ю",
                    yuml: "ÿ",
                    Yuml: "Ÿ",
                    zacute: "ź",
                    Zacute: "Ź",
                    zcaron: "ž",
                    Zcaron: "Ž",
                    zcy: "з",
                    Zcy: "З",
                    zdot: "ż",
                    Zdot: "Ż",
                    zeetrf: "ℨ",
                    ZeroWidthSpace: "​",
                    zeta: "ζ",
                    Zeta: "Ζ",
                    zfr: "𝔷",
                    Zfr: "ℨ",
                    zhcy: "ж",
                    ZHcy: "Ж",
                    zigrarr: "⇝",
                    zopf: "𝕫",
                    Zopf: "ℤ",
                    zscr: "𝓏",
                    Zscr: "𝒵",
                    zwj: "‍",
                    zwnj: "‌"
                }
                  , v = {
                    aacute: "á",
                    Aacute: "Á",
                    acirc: "â",
                    Acirc: "Â",
                    acute: "´",
                    aelig: "æ",
                    AElig: "Æ",
                    agrave: "à",
                    Agrave: "À",
                    amp: "&",
                    AMP: "&",
                    aring: "å",
                    Aring: "Å",
                    atilde: "ã",
                    Atilde: "Ã",
                    auml: "ä",
                    Auml: "Ä",
                    brvbar: "¦",
                    ccedil: "ç",
                    Ccedil: "Ç",
                    cedil: "¸",
                    cent: "¢",
                    copy: "©",
                    COPY: "©",
                    curren: "¤",
                    deg: "°",
                    divide: "÷",
                    eacute: "é",
                    Eacute: "É",
                    ecirc: "ê",
                    Ecirc: "Ê",
                    egrave: "è",
                    Egrave: "È",
                    eth: "ð",
                    ETH: "Ð",
                    euml: "ë",
                    Euml: "Ë",
                    frac12: "½",
                    frac14: "¼",
                    frac34: "¾",
                    gt: ">",
                    GT: ">",
                    iacute: "í",
                    Iacute: "Í",
                    icirc: "î",
                    Icirc: "Î",
                    iexcl: "¡",
                    igrave: "ì",
                    Igrave: "Ì",
                    iquest: "¿",
                    iuml: "ï",
                    Iuml: "Ï",
                    laquo: "«",
                    lt: "<",
                    LT: "<",
                    macr: "¯",
                    micro: "µ",
                    middot: "·",
                    nbsp: " ",
                    not: "¬",
                    ntilde: "ñ",
                    Ntilde: "Ñ",
                    oacute: "ó",
                    Oacute: "Ó",
                    ocirc: "ô",
                    Ocirc: "Ô",
                    ograve: "ò",
                    Ograve: "Ò",
                    ordf: "ª",
                    ordm: "º",
                    oslash: "ø",
                    Oslash: "Ø",
                    otilde: "õ",
                    Otilde: "Õ",
                    ouml: "ö",
                    Ouml: "Ö",
                    para: "¶",
                    plusmn: "±",
                    pound: "£",
                    quot: '"',
                    QUOT: '"',
                    raquo: "»",
                    reg: "®",
                    REG: "®",
                    sect: "§",
                    shy: "­",
                    sup1: "¹",
                    sup2: "²",
                    sup3: "³",
                    szlig: "ß",
                    thorn: "þ",
                    THORN: "Þ",
                    times: "×",
                    uacute: "ú",
                    Uacute: "Ú",
                    ucirc: "û",
                    Ucirc: "Û",
                    ugrave: "ù",
                    Ugrave: "Ù",
                    uml: "¨",
                    uuml: "ü",
                    Uuml: "Ü",
                    yacute: "ý",
                    Yacute: "Ý",
                    yen: "¥",
                    yuml: "ÿ"
                }
                  , y = {
                    0: "�",
                    128: "€",
                    130: "‚",
                    131: "ƒ",
                    132: "„",
                    133: "…",
                    134: "†",
                    135: "‡",
                    136: "ˆ",
                    137: "‰",
                    138: "Š",
                    139: "‹",
                    140: "Œ",
                    142: "Ž",
                    145: "‘",
                    146: "’",
                    147: "“",
                    148: "”",
                    149: "•",
                    150: "–",
                    151: "—",
                    152: "˜",
                    153: "™",
                    154: "š",
                    155: "›",
                    156: "œ",
                    158: "ž",
                    159: "Ÿ"
                }
                  , w = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111]
                  , x = String.fromCharCode
                  , A = {}
                  , E = A.hasOwnProperty
                  , D = function(e, r) {
                    return E.call(e, r)
                }
                  , q = function(e, r) {
                    for (var t = -1, n = e.length; ++t < n; )
                        if (e[t] == r)
                            return !0;
                    return !1
                }
                  , S = function(e, r) {
                    if (!e)
                        return r;
                    var t, n = {};
                    for (t in r)
                        n[t] = D(e, t) ? e[t] : r[t];
                    return n
                }
                  , T = function(e, r) {
                    var t = "";
                    return e >= 55296 && e <= 57343 || e > 1114111 ? (r && L("character reference outside the permissible Unicode range"),
                    "�") : D(y, e) ? (r && L("disallowed character reference"),
                    y[e]) : (r && q(w, e) && L("disallowed character reference"),
                    e > 65535 && (e -= 65536,
                    t += x(e >>> 10 & 1023 | 55296),
                    e = 56320 | 1023 & e),
                    t += x(e))
                }
                  , k = function(e) {
                    return "&#x" + e.toString(16).toUpperCase() + ";"
                }
                  , C = function(e) {
                    return "&#" + e + ";"
                }
                  , L = function(e) {
                    throw Error("Parse error: " + e)
                }
                  , N = function(e, r) {
                    r = S(r, N.options);
                    var t = r.strict;
                    t && m.test(e) && L("forbidden code point");
                    var n = r.encodeEverything
                      , o = r.useNamedReferences
                      , a = r.allowUnsafeSymbols
                      , i = r.decimal ? C : k
                      , d = function(e) {
                        return i(e.charCodeAt(0))
                    };
                    return n ? (e = e.replace(c, function(e) {
                        return o && D(f, e) ? "&" + f[e] + ";" : d(e)
                    }),
                    o && (e = e.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")),
                    o && (e = e.replace(l, function(e) {
                        return "&" + f[e] + ";"
                    }))) : o ? (a || (e = e.replace(p, function(e) {
                        return "&" + f[e] + ";"
                    })),
                    e = e.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"),
                    e = e.replace(l, function(e) {
                        return "&" + f[e] + ";"
                    })) : a || (e = e.replace(p, d)),
                    e.replace(u, function(e) {
                        var r = e.charCodeAt(0)
                          , t = e.charCodeAt(1)
                          , n = 1024 * (r - 55296) + t - 56320 + 65536;
                        return i(n)
                    }).replace(s, d)
                };
                N.options = {
                    allowUnsafeSymbols: !1,
                    encodeEverything: !1,
                    strict: !1,
                    useNamedReferences: !1,
                    decimal: !1
                };
                var O = function(e, r) {
                    r = S(r, O.options);
                    var t = r.strict;
                    return t && h.test(e) && L("malformed character reference"),
                    e.replace(g, function(e, n, o, a, i, u, c, s) {
                        var l, f, p, d, h, m;
                        return n ? (p = n,
                        f = o,
                        t && !f && L("character reference was not terminated by a semicolon"),
                        l = parseInt(p, 10),
                        T(l, t)) : a ? (d = a,
                        f = i,
                        t && !f && L("character reference was not terminated by a semicolon"),
                        l = parseInt(d, 16),
                        T(l, t)) : u ? (h = u,
                        D(b, h) ? b[h] : (t && L("named character reference was not terminated by a semicolon"),
                        e)) : (h = c,
                        m = s,
                        m && r.isAttributeValue ? (t && "=" == m && L("`&` did not start a character reference"),
                        e) : (t && L("named character reference was not terminated by a semicolon"),
                        v[h] + (m || "")))
                    })
                };
                O.options = {
                    isAttributeValue: !1,
                    strict: !1
                };
                var F = function(e) {
                    return e.replace(p, function(e) {
                        return d[e]
                    })
                }
                  , j = {
                    version: "1.1.0",
                    encode: N,
                    decode: O,
                    escape: F,
                    unescape: O
                };
                if ("function" == typeof define && "object" == typeof define.amd && define.amd)
                    define(function() {
                        return j
                    });
                else if (o && !o.nodeType)
                    if (a)
                        a.exports = j;
                    else
                        for (var R in j)
                            D(j, R) && (o[R] = j[R]);
                else
                    n.he = j
            }(this)
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    34: [function(e, r, t) {
        function n(e) {
            return function(r, t, n) {
                for (var a in t)
                    a in o && (t[o[a]] = t[a],
                    delete t[a]);
                return e(r, t, n)
            }
        }
        r.exports = n;
        var o = {
            class: "className",
            for: "htmlFor",
            "http-equiv": "httpEquiv"
        }
    }
    , {}],
    35: [function(e, r, t) {
        function n(e) {
            return e === m || e === g
        }
        function o(e) {
            return y.test(e)
        }
        var a = e("hyperscript-attribute-to-property")
          , i = 0
          , u = 1
          , c = 2
          , s = 3
          , l = 4
          , f = 5
          , p = 6
          , d = 7
          , h = 8
          , m = 9
          , g = 10
          , b = 11
          , v = 12;
        r.exports = function(e, r) {
            function t(e) {
                return "function" == typeof e ? e : "string" == typeof e ? e : e && "object" == typeof e ? e : y("", e)
            }
            e = a(e),
            r || (r = {});
            var y = r.concat || function(e, r) {
                return String(e) + String(r)
            }
            ;
            return function(r) {
                function a(e) {
                    var r = [];
                    w === d && (w = l);
                    for (var t = 0; t < e.length; t++) {
                        var o = e.charAt(t);
                        w === u && "<" === o ? (x.length && r.push([u, x]),
                        x = "",
                        w = c) : ">" !== o || n(w) ? w === u ? x += o : w === c && /\s/.test(o) ? (r.push([c, x]),
                        x = "",
                        w = l) : w === c ? x += o : w === l && /[\w-]/.test(o) ? (w = f,
                        x = o) : w === l && /\s/.test(o) ? (x.length && r.push([f, x]),
                        r.push([v])) : w === f && /\s/.test(o) ? (r.push([f, x]),
                        x = "",
                        w = p) : w === f && "=" === o ? (r.push([f, x], [b]),
                        x = "",
                        w = d) : w === f ? x += o : w !== p && w !== l || "=" !== o ? w !== p && w !== l || /\s/.test(o) ? w === d && '"' === o ? w = g : w === d && "'" === o ? w = m : w === g && '"' === o ? (r.push([h, x], [v]),
                        x = "",
                        w = l) : w === m && "'" === o ? (r.push([h, x], [v]),
                        x = "",
                        w = l) : w !== d || /\s/.test(o) ? w === h && /\s/.test(o) ? (r.push([h, x], [v]),
                        x = "",
                        w = l) : w !== h && w !== m && w !== g || (x += o) : (w = h,
                        t--) : (r.push([v]),
                        /[\w-]/.test(o) ? (x += o,
                        w = f) : w = l) : (r.push([b]),
                        w = d) : (w === c ? r.push([c, x]) : w === f ? r.push([f, x]) : w === h && x.length && r.push([h, x]),
                        r.push([s]),
                        x = "",
                        w = u)
                    }
                    return w === u && x.length ? (r.push([u, x]),
                    x = "") : w === h && x.length ? (r.push([h, x]),
                    x = "") : w === g && x.length ? (r.push([h, x]),
                    x = "") : w === m && x.length ? (r.push([h, x]),
                    x = "") : w === f && (r.push([f, x]),
                    x = ""),
                    r
                }
                for (var w = u, x = "", A = arguments.length, E = [], D = 0; D < r.length; D++)
                    if (D < A - 1) {
                        var q = arguments[D + 1]
                          , S = a(r[D])
                          , T = w;
                        T === g && (T = h),
                        T === m && (T = h),
                        T === d && (T = h),
                        T === l && (T = f),
                        S.push([i, T, q]),
                        E.push.apply(E, S)
                    } else
                        E.push.apply(E, a(r[D]));
                for (var k = [null, {}, []], C = [[k, -1]], D = 0; D < E.length; D++) {
                    var L = C[C.length - 1][0]
                      , S = E[D]
                      , N = S[0];
                    if (N === c && /^\//.test(S[1])) {
                        var O = C[C.length - 1][1];
                        C.length > 1 && (C.pop(),
                        C[C.length - 1][0][2][O] = e(L[0], L[1], L[2].length ? L[2] : void 0))
                    } else if (N === c) {
                        var F = [S[1], {}, []];
                        L[2].push(F),
                        C.push([F, L[2].length - 1])
                    } else if (N === f || N === i && S[1] === f) {
                        for (var j, R = ""; D < E.length; D++)
                            if (E[D][0] === f)
                                R = y(R, E[D][1]);
                            else {
                                if (E[D][0] !== i || E[D][1] !== f)
                                    break;
                                if ("object" != typeof E[D][2] || R)
                                    R = y(R, E[D][2]);
                                else
                                    for (j in E[D][2])
                                        E[D][2].hasOwnProperty(j) && !L[1][j] && (L[1][j] = E[D][2][j])
                            }
                        E[D][0] === b && D++;
                        for (var B = D; D < E.length; D++)
                            if (E[D][0] === h || E[D][0] === f)
                                L[1][R] ? L[1][R] = y(L[1][R], E[D][1]) : L[1][R] = t(E[D][1]);
                            else {
                                if (E[D][0] !== i || E[D][1] !== h && E[D][1] !== f) {
                                    !R.length || L[1][R] || D !== B || E[D][0] !== s && E[D][0] !== v || (L[1][R] = R.toLowerCase());
                                    break
                                }
                                L[1][R] ? L[1][R] = y(L[1][R], E[D][2]) : L[1][R] = t(E[D][2])
                            }
                    } else if (N === f)
                        L[1][S[1]] = !0;
                    else if (N === i && S[1] === f)
                        L[1][S[2]] = !0;
                    else if (N === s) {
                        if (o(L[0]) && C.length) {
                            var O = C[C.length - 1][1];
                            C.pop(),
                            C[C.length - 1][0][2][O] = e(L[0], L[1], L[2].length ? L[2] : void 0)
                        }
                    } else if (N === i && S[1] === u)
                        void 0 === S[2] || null === S[2] ? S[2] = "" : S[2] || (S[2] = y("", S[2])),
                        Array.isArray(S[2][0]) ? L[2].push.apply(L[2], S[2]) : L[2].push(S[2]);
                    else if (N === u)
                        L[2].push(S[1]);
                    else if (N !== b && N !== v)
                        throw new Error("unhandled: " + N)
                }
                if (k[2].length > 1 && /^\s*$/.test(k[2][0]) && k[2].shift(),
                k[2].length > 2 || 2 === k[2].length && /\S/.test(k[2][1]))
                    throw new Error("multiple root elements must be wrapped in an enclosing tag");
                return Array.isArray(k[2][0]) && "string" == typeof k[2][0][0] && Array.isArray(k[2][0][2]) && (k[2][0] = e(k[2][0][0], k[2][0][1], k[2][0][2])),
                k[2][0]
            }
        }
        ;
        var y = (Object.prototype.hasOwnProperty,
        RegExp("^(" + ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr", "animate", "animateTransform", "circle", "cursor", "desc", "ellipse", "feBlend", "feColorMatrix", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "font-face-format", "font-face-name", "font-face-uri", "glyph", "glyphRef", "hkern", "image", "line", "missing-glyph", "mpath", "path", "polygon", "polyline", "rect", "set", "stop", "tref", "use", "view", "vkern"].join("|") + ")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"))
    }
    , {
        "hyperscript-attribute-to-property": 34
    }],
    36: [function(e, r, t) {
        "use strict";
        var n = Function.prototype.toString
          , o = /^\s*class /
          , a = function(e) {
            try {
                var r = n.call(e)
                  , t = r.replace(/\/\/.*\n/g, "")
                  , a = t.replace(/\/\*[.\s\S]*\*\//g, "")
                  , i = a.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                return o.test(i)
            } catch (e) {
                return !1
            }
        }
          , i = function(e) {
            try {
                return !a(e) && (n.call(e),
                !0)
            } catch (e) {
                return !1
            }
        }
          , u = Object.prototype.toString
          , c = "[object Function]"
          , s = "[object GeneratorFunction]"
          , l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        r.exports = function(e) {
            if (!e)
                return !1;
            if ("function" != typeof e && "object" != typeof e)
                return !1;
            if (l)
                return i(e);
            if (a(e))
                return !1;
            var r = u.call(e);
            return r === c || r === s
        }
    }
    , {}],
    37: [function(e, r, t) {
        "use strict";
        var n = Date.prototype.getDay
          , o = function(e) {
            try {
                return n.call(e),
                !0
            } catch (e) {
                return !1
            }
        }
          , a = Object.prototype.toString
          , i = "[object Date]"
          , u = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        r.exports = function(e) {
            return "object" == typeof e && null !== e && (u ? o(e) : a.call(e) === i)
        }
    }
    , {}],
    38: [function(e, r, t) {
        function n(e) {
            var r = o.call(e);
            return "[object Function]" === r || "function" == typeof e && "[object RegExp]" !== r || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
        }
        r.exports = n;
        var o = Object.prototype.toString
    }
    , {}],
    39: [function(e, r, t) {
        "use strict";
        var n = RegExp.prototype.exec
          , o = function(e) {
            try {
                return n.call(e),
                !0
            } catch (e) {
                return !1
            }
        }
          , a = Object.prototype.toString
          , i = "[object RegExp]"
          , u = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        r.exports = function(e) {
            return "object" == typeof e && (u ? o(e) : a.call(e) === i)
        }
    }
    , {}],
    40: [function(e, r, t) {
        "use strict";
        var n = Object.prototype.toString
          , o = "function" == typeof Symbol && "symbol" == typeof Symbol();
        if (o) {
            var a = Symbol.prototype.toString
              , i = /^Symbol\(.*\)$/
              , u = function(e) {
                return "symbol" == typeof e.valueOf() && i.test(a.call(e))
            };
            r.exports = function(e) {
                if ("symbol" == typeof e)
                    return !0;
                if ("[object Symbol]" !== n.call(e))
                    return !1;
                try {
                    return u(e)
                } catch (e) {
                    return !1
                }
            }
        } else
            r.exports = function(e) {
                return !1
            }
    }
    , {}],
    41: [function(e, r, t) {
        "use strict";
        function n(e) {
            !p && h.createRange && (p = h.createRange(),
            p.selectNode(h.body));
            var r;
            return p && p.createContextualFragment ? r = p.createContextualFragment(e) : (r = h.createElement("body"),
            r.innerHTML = e),
            r.childNodes[0]
        }
        function o(e, r, t) {
            e[t] !== r[t] && (e[t] = r[t],
            e[t] ? e.setAttribute(t, "") : e.removeAttribute(t, ""))
        }
        function a() {}
        function i(e, r) {
            var t = e.nodeName
              , n = r.nodeName;
            return t === n || !!(r.actualize && t.charCodeAt(0) < 91 && n.charCodeAt(0) > 90) && t === n.toUpperCase()
        }
        function u(e, r) {
            return r && r !== g ? h.createElementNS(r, e) : h.createElement(e)
        }
        function c(e, r) {
            if (r.assignAttributes)
                r.assignAttributes(e);
            else {
                var t, n, o, a, i, u, c = r.attributes;
                for (t = c.length - 1; t >= 0; --t)
                    n = c[t],
                    o = n.name,
                    a = n.namespaceURI,
                    i = n.value,
                    a ? (o = n.localName || o,
                    u = e.getAttributeNS(a, o),
                    u !== i && e.setAttributeNS(a, o, i)) : (u = e.getAttribute(o),
                    u !== i && e.setAttribute(o, i));
                for (c = e.attributes,
                t = c.length - 1; t >= 0; --t)
                    n = c[t],
                    n.specified !== !1 && (o = n.name,
                    a = n.namespaceURI,
                    a ? (o = n.localName || o,
                    d(r, a, o) || e.removeAttributeNS(a, o)) : d(r, null, o) || e.removeAttribute(o))
            }
        }
        function s(e, r) {
            for (var t = e.firstChild; t; ) {
                var n = t.nextSibling;
                r.appendChild(t),
                t = n
            }
            return r
        }
        function l(e) {
            return e.id
        }
        function f(e, r, t) {
            function o(e) {
                A ? A.push(e) : A = [e]
            }
            function f(e, r) {
                if (e.nodeType === b)
                    for (var t = e.firstChild; t; ) {
                        var n = void 0;
                        r && (n = E(t)) ? o(n) : (C(t),
                        t.firstChild && f(t, r)),
                        t = t.nextSibling
                    }
            }
            function p(e, r, t) {
                k(e) !== !1 && (r && r.removeChild(e),
                C(e),
                f(e, t))
            }
            function d(e) {
                if (e.nodeType === b)
                    for (var r = e.firstChild; r; ) {
                        var t = E(r);
                        t && (O[t] = r),
                        d(r),
                        r = r.nextSibling
                    }
            }
            function m(e) {
                q(e);
                for (var r = e.firstChild; r; ) {
                    var t = r.nextSibling
                      , n = E(r);
                    if (n) {
                        var o = O[n];
                        o && i(r, o) && (r.parentNode.replaceChild(o, r),
                        g(o, r))
                    }
                    m(r),
                    r = t
                }
            }
            function g(t, n, a) {
                var u, s = E(n);
                if (s && delete O[s],
                !r.isSameNode || !r.isSameNode(e)) {
                    if (!a) {
                        if (S(t, n) === !1)
                            return;
                        if (c(t, n),
                        T(t),
                        L(t, n) === !1)
                            return
                    }
                    if ("TEXTAREA" !== t.nodeName) {
                        var l, f, d, x, A = n.firstChild, q = t.firstChild;
                        e: for (; A; ) {
                            for (d = A.nextSibling,
                            l = E(A); q; ) {
                                if (f = q.nextSibling,
                                A.isSameNode && A.isSameNode(q)) {
                                    A = d,
                                    q = f;
                                    continue e
                                }
                                u = E(q);
                                var k = q.nodeType
                                  , C = void 0;
                                if (k === A.nodeType && (k === b ? (l ? l !== u && ((x = O[l]) ? q.nextSibling === x ? C = !1 : (t.insertBefore(x, q),
                                f = q.nextSibling,
                                u ? o(u) : p(q, t, !0),
                                q = x) : C = !1) : u && (C = !1),
                                C = C !== !1 && i(q, A),
                                C && g(q, A)) : k !== v && k != y || (C = !0,
                                q.nodeValue = A.nodeValue)),
                                C) {
                                    A = d,
                                    q = f;
                                    continue e
                                }
                                u ? o(u) : p(q, t, !0),
                                q = f
                            }
                            if (l && (x = O[l]) && i(x, A))
                                t.appendChild(x),
                                g(x, A);
                            else {
                                var N = D(A);
                                N !== !1 && (N && (A = N),
                                A.actualize && (A = A.actualize(t.ownerDocument || h)),
                                t.appendChild(A),
                                m(A))
                            }
                            A = d,
                            q = f
                        }
                        for (; q; )
                            f = q.nextSibling,
                            (u = E(q)) ? o(u) : p(q, t, !0),
                            q = f
                    }
                    var F = w[t.nodeName];
                    F && F(t, n)
                }
            }
            if (t || (t = {}),
            "string" == typeof r)
                if ("#document" === e.nodeName || "HTML" === e.nodeName) {
                    var x = r;
                    r = h.createElement("html"),
                    r.innerHTML = x
                } else
                    r = n(r);
            var A, E = t.getNodeKey || l, D = t.onBeforeNodeAdded || a, q = t.onNodeAdded || a, S = t.onBeforeElUpdated || a, T = t.onElUpdated || a, k = t.onBeforeNodeDiscarded || a, C = t.onNodeDiscarded || a, L = t.onBeforeElChildrenUpdated || a, N = t.childrenOnly === !0, O = {};
            d(e);
            var F = e
              , j = F.nodeType
              , R = r.nodeType;
            if (!N)
                if (j === b)
                    R === b ? i(e, r) || (C(e),
                    F = s(e, u(r.nodeName, r.namespaceURI))) : F = r;
                else if (j === v || j === y) {
                    if (R === j)
                        return F.nodeValue = r.nodeValue,
                        F;
                    F = r
                }
            if (F === r)
                C(e);
            else if (g(F, r, N),
            A)
                for (var B = 0, U = A.length; B < U; B++) {
                    var V = O[A[B]];
                    V && p(V, V.parentNode, !1)
                }
            return !N && F !== e && e.parentNode && (F.actualize && (F = F.actualize(e.ownerDocument || h)),
            e.parentNode.replaceChild(F, e)),
            F
        }
        var p, d, h = "undefined" != typeof document && document, m = h ? h.body || h.createElement("div") : {}, g = "http://www.w3.org/1999/xhtml", b = 1, v = 3, y = 8;
        d = m.hasAttributeNS ? function(e, r, t) {
            return e.hasAttributeNS(r, t)
        }
        : m.hasAttribute ? function(e, r, t) {
            return e.hasAttribute(t)
        }
        : function(e, r, t) {
            return !!e.getAttributeNode(t)
        }
        ;
        var w = {
            OPTION: function(e, r) {
                o(e, r, "selected")
            },
            INPUT: function(e, r) {
                o(e, r, "checked"),
                o(e, r, "disabled"),
                e.value !== r.value && (e.value = r.value),
                d(r, null, "value") || e.removeAttribute("value")
            },
            TEXTAREA: function(e, r) {
                var t = r.value;
                if (e.value !== t && (e.value = t),
                e.firstChild) {
                    if ("" === t && e.firstChild.nodeValue === e.placeholder)
                        return;
                    e.firstChild.nodeValue = t
                }
            }
        };
        r.exports = f
    }
    , {}],
    42: [function(e, r, t) {
        function n(e, r) {
            r || (r = o.requestAnimationFrame);
            var t = !1
              , n = !1
              , a = null;
            return function(o, i) {
                null !== a || n || (n = !0,
                r(function() {
                    n = !1,
                    a && (t = !0,
                    e(a, i),
                    t = !1,
                    a = null)
                })),
                a = o
            }
        }
        const o = e("global/window");
        r.exports = n
    }
    , {
        "global/window": 32
    }],
    43: [function(e, r, t) {
        (function(e) {
            function t() {
                function e(e) {
                    r.push(e),
                    t || (t = !0,
                    n(function() {
                        for (; r.length > 0; )
                            r.shift()();
                        t = !1
                    }))
                }
                var r = []
                  , t = !1;
                return function(r) {
                    var t = !1;
                    return e(function() {
                        t = !0
                    }),
                    function() {
                        for (var n = arguments.length, o = [], a = 0; a < n; a++)
                            o.push[arguments[a]];
                        t ? r.apply(r, o) : e(function() {
                            r.apply(r, o)
                        })
                    }
                }
            }
            r.exports = t;
            var n = "undefined" != typeof e && e.nextTick ? e.nextTick : "undefined" != typeof setImmediate ? setImmediate : setTimeout
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 48
    }],
    44: [function(e, r, t) {
        "use strict";
        var n = Object.prototype.hasOwnProperty
          , o = Object.prototype.toString
          , a = Array.prototype.slice
          , i = e("./isArguments")
          , u = Object.prototype.propertyIsEnumerable
          , c = !u.call({
            toString: null
        }, "toString")
          , s = u.call(function() {}, "prototype")
          , l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
          , f = function(e) {
            var r = e.constructor;
            return r && r.prototype === e
        }
          , p = {
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        }
          , d = function() {
            if ("undefined" == typeof window)
                return !1;
            for (var e in window)
                try {
                    if (!p["$" + e] && n.call(window, e) && null !== window[e] && "object" == typeof window[e])
                        try {
                            f(window[e])
                        } catch (e) {
                            return !0
                        }
                } catch (e) {
                    return !0
                }
            return !1
        }()
          , h = function(e) {
            if ("undefined" == typeof window || !d)
                return f(e);
            try {
                return f(e)
            } catch (e) {
                return !1
            }
        }
          , m = function(e) {
            var r = null !== e && "object" == typeof e
              , t = "[object Function]" === o.call(e)
              , a = i(e)
              , u = r && "[object String]" === o.call(e)
              , f = [];
            if (!r && !t && !a)
                throw new TypeError("Object.keys called on a non-object");
            var p = s && t;
            if (u && e.length > 0 && !n.call(e, 0))
                for (var d = 0; d < e.length; ++d)
                    f.push(String(d));
            if (a && e.length > 0)
                for (var m = 0; m < e.length; ++m)
                    f.push(String(m));
            else
                for (var g in e)
                    p && "prototype" === g || !n.call(e, g) || f.push(String(g));
            if (c)
                for (var b = h(e), v = 0; v < l.length; ++v)
                    b && "constructor" === l[v] || !n.call(e, l[v]) || f.push(l[v]);
            return f
        };
        m.shim = function() {
            if (Object.keys) {
                var e = function() {
                    return 2 === (Object.keys(arguments) || "").length
                }(1, 2);
                if (!e) {
                    var r = Object.keys;
                    Object.keys = function(e) {
                        return r(i(e) ? a.call(e) : e)
                    }
                }
            } else
                Object.keys = m;
            return Object.keys || m
        }
        ,
        r.exports = m
    }
    , {
        "./isArguments": 45
    }],
    45: [function(e, r, t) {
        "use strict";
        var n = Object.prototype.toString;
        r.exports = function(e) {
            var r = n.call(e)
              , t = "[object Arguments]" === r;
            return t || (t = "[object Array]" !== r && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === n.call(e.callee)),
            t
        }
    }
    , {}],
    46: [function(e, r, t) {
        function n(e, r) {
            l[e][0] && 0 === l[e][2] && (l[e][0](r),
            l[e][2] = 1)
        }
        function o(e, r) {
            l[e][1] && 1 === l[e][2] && (l[e][1](r),
            l[e][2] = 0)
        }
        function a(e, r, t) {
            var n = e.target.getAttribute(p);
            return i(e.oldValue, n) ? void (l[n] = l[e.oldValue]) : (l[e.oldValue] && t(e.oldValue, e.target),
            void (l[n] && r(n, e.target)))
        }
        function i(e, r) {
            return !(!e || !r) && l[e][3] === l[r][3]
        }
        function u(e, r) {
            for (var t = Object.keys(l), n = 0; n < e.length; n++) {
                if (e[n] && e[n].getAttribute && e[n].getAttribute(p)) {
                    var o = e[n].getAttribute(p);
                    t.forEach(function(t) {
                        o === t && r(t, e[n])
                    })
                }
                e[n].childNodes.length > 0 && u(e[n].childNodes, r)
            }
        }
        var c = e("global/document")
          , s = e("global/window")
          , l = Object.create(null)
          , f = "onloadid" + (new Date % 9e6).toString(36)
          , p = "data-" + f
          , d = 0;
        if (s && s.MutationObserver) {
            var h = new MutationObserver(function(e) {
                if (!(Object.keys(l).length < 1))
                    for (var r = 0; r < e.length; r++)
                        e[r].attributeName !== p ? (u(e[r].removedNodes, o),
                        u(e[r].addedNodes, n)) : a(e[r], n, o)
            }
            );
            h.observe(c.body, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: [p]
            })
        }
        r.exports = function e(r, t, n, o) {
            return t = t || function() {}
            ,
            n = n || function() {}
            ,
            r.setAttribute(p, "o" + d),
            l["o" + d] = [t, n, 0, o || e.caller],
            d += 1,
            r
        }
    }
    , {
        "global/document": 31,
        "global/window": 32
    }],
    47: [function(e, r, t) {
        var n = e("trim")
          , o = e("for-each")
          , a = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        };
        r.exports = function(e) {
            if (!e)
                return {};
            var r = {};
            return o(n(e).split("\n"), function(e) {
                var t = e.indexOf(":")
                  , o = n(e.slice(0, t)).toLowerCase()
                  , i = n(e.slice(t + 1));
                "undefined" == typeof r[o] ? r[o] = i : a(r[o]) ? r[o].push(i) : r[o] = [r[o], i]
            }),
            r
        }
    }
    , {
        "for-each": 27,
        trim: 56
    }],
    48: [function(e, r, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(e) {
            if (f === setTimeout)
                return setTimeout(e, 0);
            if ((f === n || !f) && setTimeout)
                return f = setTimeout,
                setTimeout(e, 0);
            try {
                return f(e, 0)
            } catch (r) {
                try {
                    return f.call(null, e, 0)
                } catch (r) {
                    return f.call(this, e, 0)
                }
            }
        }
        function i(e) {
            if (p === clearTimeout)
                return clearTimeout(e);
            if ((p === o || !p) && clearTimeout)
                return p = clearTimeout,
                clearTimeout(e);
            try {
                return p(e)
            } catch (r) {
                try {
                    return p.call(null, e)
                } catch (r) {
                    return p.call(this, e)
                }
            }
        }
        function u() {
            g && h && (g = !1,
            h.length ? m = h.concat(m) : b = -1,
            m.length && c())
        }
        function c() {
            if (!g) {
                var e = a(u);
                g = !0;
                for (var r = m.length; r; ) {
                    for (h = m,
                    m = []; ++b < r; )
                        h && h[b].run();
                    b = -1,
                    r = m.length
                }
                h = null,
                g = !1,
                i(e)
            }
        }
        function s(e, r) {
            this.fun = e,
            this.array = r
        }
        function l() {}
        var f, p, d = r.exports = {};
        !function() {
            try {
                f = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                f = n
            }
            try {
                p = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (e) {
                p = o
            }
        }();
        var h, m = [], g = !1, b = -1;
        d.nextTick = function(e) {
            var r = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var t = 1; t < arguments.length; t++)
                    r[t - 1] = arguments[t];
            m.push(new s(e,r)),
            1 !== m.length || g || a(c)
        }
        ,
        s.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        d.title = "browser",
        d.browser = !0,
        d.env = {},
        d.argv = [],
        d.version = "",
        d.versions = {},
        d.on = l,
        d.addListener = l,
        d.once = l,
        d.off = l,
        d.removeListener = l,
        d.removeAllListeners = l,
        d.emit = l,
        d.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        d.cwd = function() {
            return "/"
        }
        ,
        d.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        d.umask = function() {
            return 0
        }
    }
    , {}],
    49: [function(e, r, t) {
        function n(e, r) {
            return e = r ? e.replace(c, "") : e.replace(s, ""),
            e.replace(f, "").replace(l, "/")
        }
        const o = "^(file://|/)(.*.html?/?)?"
          , a = "^(http(s)?(://))?(www.)?"
          , i = "[a-zA-Z0-9-_.]+(:[0-9]{1,5})?(/{1})?"
          , u = "[?].*$"
          , c = new RegExp(o)
          , s = new RegExp(a + i)
          , l = new RegExp("#")
          , f = new RegExp(u);
        r.exports = n
    }
    , {}],
    50: [function(e, r, t) {
        function n(e, r) {
            function t(e) {
                const r = o.createElement("a");
                return r.href = e,
                {
                    href: r.href,
                    pathname: r.pathname,
                    search: r.search ? i(r.search) : {},
                    hash: r.hash
                }
            }
            if (e) {
                if ("string" == typeof r) {
                    const n = t(r);
                    return n
                }
                const n = a(e, r);
                return n
            }
            const n = {
                pathname: o.location.pathname,
                search: o.location.search ? i(o.location.search) : {},
                hash: o.location.hash,
                href: o.location.href
            };
            return n
        }
        const o = e("global/document")
          , a = e("xtend")
          , i = e("./qs");
        r.exports = n
    }
    , {
        "./qs": 54,
        "global/document": 31,
        xtend: 61
    }],
    51: [function(e, r, t) {
        function n(e) {
            a.onpopstate = function() {
                e({
                    pathname: o.location.pathname,
                    search: o.location.search,
                    href: o.location.href,
                    hash: o.location.hash
                })
            }
        }
        const o = e("global/document")
          , a = e("global/window");
        r.exports = n
    }
    , {
        "global/document": 31,
        "global/window": 32
    }],
    52: [function(e, r, t) {
        function n(e, r) {
            o.onclick = function(t) {
                if (!(t.button && 0 !== t.button || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
                    const n = function e(t) {
                        if (t && t !== r)
                            return "a" !== t.localName ? e(t.parentNode) : void 0 === t.href ? e(t.parentNode) : o.location.host !== t.host ? e(t.parentNode) : t
                    }(t.target);
                    if (n) {
                        const u = n.hasAttribute(i);
                        u || (t.preventDefault(),
                        e({
                            pathname: n.pathname,
                            search: n.search ? a(n.search) : {},
                            href: n.href,
                            hash: n.hash
                        }))
                    }
                }
            }
        }
        const o = e("global/window")
          , a = e("./qs");
        r.exports = n;
        const i = "data-no-routing"
    }
    , {
        "./qs": 54,
        "global/window": 32
    }],
    53: [function(e, r, t) {
        function n(e, r) {
            function t(r, t, n, o, u, f) {
                return e.thunk === !1 ? a(i(r, c), t, n, o, u, f) : r === l ? s(t, n, o, u, f) : (l = i(r, c),
                (s = a(l))(t, n, o, u, f))
            }
            r || (r = e,
            e = {});
            const n = e.default || "/404"
              , a = u(n);
            var s = null
              , l = null;
            return t._router = a,
            function r(t, n) {
                if ("string" == typeof t[0])
                    var i = t[0].replace(/^[#\/]/, "");
                else
                    var u = t[0];
                const c = "function" == typeof t[1] ? t[1] : null
                  , s = Array.isArray(t[1]) ? t[1] : Array.isArray(t[2]) ? t[2] : null;
                if (u && t.forEach(function(e) {
                    r(e, n)
                }),
                c) {
                    const l = i ? n.concat(i).join("/") : n.length ? n.join("/") : i
                      , f = e.thunk === !1 || "match" === e.thunk ? c : o(c);
                    a.on(l, f)
                }
                Array.isArray(s) && r(s, n.concat(i))
            }(r, []),
            t
        }
        function o(e) {
            return function(r) {
                return function(t, n, o, a, i) {
                    return e(r, t, n, o, a, i)
                }
            }
        }
        const a = e("global/window")
          , i = e("./_pathname")
          , u = e("wayfarer")
          , c = a.process && a.process.type;
        r.exports = n
    }
    , {
        "./_pathname": 49,
        "global/window": 32,
        wayfarer: 57
    }],
    54: [function(e, r, t) {
        function n(e) {
            function r(e, r, n, o) {
                t[a(r)] = a(o)
            }
            const t = {};
            return e.replace(/^.*\?/, "").replace(i, r),
            t
        }
        const o = e("global/window")
          , a = o.decodeURIComponent
          , i = new RegExp("([^?=&]+)(=([^&]*))?","g");
        r.exports = n
    }
    , {
        "global/window": 32
    }],
    55: [function(e, r, t) {
        function n(e, r) {
            return e = e._router,
            o(e, r)
        }
        const o = e("wayfarer/walk");
        r.exports = n
    }
    , {
        "wayfarer/walk": 59
    }],
    56: [function(e, r, t) {
        function n(e) {
            return e.replace(/^\s*|\s*$/g, "")
        }
        t = r.exports = n,
        t.left = function(e) {
            return e.replace(/^\s*/, "")
        }
        ,
        t.right = function(e) {
            return e.replace(/\s*$/, "")
        }
    }
    , {}],
    57: [function(e, r, t) {
        function n(e) {
            function r(e, r) {
                if (e = e || "/",
                r && r._wayfarer && r._trie)
                    i.mount(e, r._trie.trie);
                else {
                    const n = i.create(e);
                    n.cb = r
                }
                return t
            }
            function t(e) {
                const r = new Array(arguments.length);
                for (var t = 1; t < r.length; t++)
                    r[t] = arguments[t];
                const n = i.match(e);
                if (n && n.cb)
                    return r[0] = n.params,
                    n.cb.apply(null, r);
                const o = i.match(a);
                if (o && o.cb)
                    return r[0] = o.params,
                    o.cb.apply(null, r);
                throw new Error("route '" + e + "' did not match")
            }
            if (!(this instanceof n))
                return new n(e);
            const a = (e || "").replace(/^\//, "")
              , i = o();
            return t._trie = i,
            t.emit = t,
            t.on = r,
            t._wayfarer = !0,
            t
        }
        const o = e("./trie");
        r.exports = n
    }
    , {
        "./trie": 58
    }],
    58: [function(e, r, t) {
        function n() {
            return this instanceof n ? void (this.trie = {
                nodes: {}
            }) : new n
        }
        const o = e("xtend/mutable")
          , a = e("xtend");
        r.exports = n,
        n.prototype.create = function(e) {
            const r = e.replace(/^\//, "").split("/");
            return function e(r, t, n) {
                const o = n[r];
                if (void 0 === o)
                    return t;
                var a = null;
                return /^:/.test(o) ? (t.nodes.$$ ? a = t.nodes.$$ : (a = {
                    nodes: {}
                },
                t.nodes.$$ = a),
                t.name = o.replace(/^:/, "")) : t.nodes[o] ? a = t.nodes[o] : (a = {
                    nodes: {}
                },
                t.nodes[o] = a),
                e(r + 1, a, n)
            }(0, this.trie, r)
        }
        ,
        n.prototype.match = function(e) {
            const r = e.replace(/^\//, "").split("/")
              , t = {};
            var n = function e(n, o) {
                if (void 0 !== o) {
                    const a = r[n];
                    return void 0 === a ? o : o.nodes[a] ? e(n + 1, o.nodes[a]) : o.name ? (t[o.name] = a,
                    e(n + 1, o.nodes.$$)) : e(n + 1)
                }
            }(0, this.trie);
            if (n)
                return n = a(n),
                n.params = t,
                n
        }
        ,
        n.prototype.mount = function(e, r) {
            const t = e.replace(/^\//, "").split("/");
            var n = null
              , a = null;
            if (1 === t.length)
                a = t[0],
                n = this.create(a);
            else {
                const i = t.splice(0, t.length - 1)
                  , u = i.join("/");
                a = t[0],
                n = this.create(u)
            }
            o(n.nodes, r.nodes),
            r.name && (n.name = r.name),
            n.nodes[""] && (Object.keys(n.nodes[""]).forEach(function(e) {
                "nodes" !== e && (n[e] = n.nodes[""][e])
            }),
            o(n.nodes, n.nodes[""].nodes),
            delete n.nodes[""].nodes)
        }
    }
    , {
        xtend: 61,
        "xtend/mutable": 62
    }],
    59: [function(e, r, t) {
        function n(e, r) {
            const t = e._trie;
            !function e(t, n) {
                if (n.cb && (n.cb = r(t, n.cb)),
                n.nodes) {
                    const o = n.nodes;
                    Object.keys(o).forEach(function(r) {
                        const a = o[r]
                          , i = "$$" === r ? t + "/:" + n.name : t + "/" + r;
                        e(i, a)
                    })
                }
            }("", t.trie)
        }
        r.exports = n
    }
    , {}],
    60: [function(e, r, t) {
        "use strict";
        function n(e, r) {
            for (var t = 0; t < e.length; t++)
                r(e[t])
        }
        function o(e) {
            for (var r in e)
                if (e.hasOwnProperty(r))
                    return !1;
            return !0
        }
        function a(e, r, t) {
            var n = e;
            return f(r) ? (t = r,
            "string" == typeof e && (n = {
                uri: e
            })) : n = d(r, {
                uri: e
            }),
            n.callback = t,
            n
        }
        function i(e, r, t) {
            return r = a(e, r, t),
            u(r)
        }
        function u(e) {
            function r() {
                4 === l.readyState && a()
            }
            function t() {
                var e = void 0;
                if (e = l.response ? l.response : l.responseText || c(l),
                w)
                    try {
                        e = JSON.parse(e)
                    } catch (e) {}
                return e
            }
            function n(e) {
                return clearTimeout(h),
                e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))),
                e.statusCode = 0,
                s(e, x)
            }
            function a() {
                if (!d) {
                    var r;
                    clearTimeout(h),
                    r = e.useXDR && void 0 === l.status ? 200 : 1223 === l.status ? 204 : l.status;
                    var n = x
                      , o = null;
                    return 0 !== r ? (n = {
                        body: t(),
                        statusCode: r,
                        method: g,
                        headers: {},
                        url: m,
                        rawRequest: l
                    },
                    l.getAllResponseHeaders && (n.headers = p(l.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"),
                    s(o, n, n.body)
                }
            }
            if ("undefined" == typeof e.callback)
                throw new Error("callback argument missing");
            var u = !1
              , s = function(r, t, n) {
                u || (u = !0,
                e.callback(r, t, n))
            }
              , l = e.xhr || null;
            l || (l = e.cors || e.useXDR ? new i.XDomainRequest : new i.XMLHttpRequest);
            var f, d, h, m = l.url = e.uri || e.url, g = l.method = e.method || "GET", b = e.body || e.data || null, v = l.headers = e.headers || {}, y = !!e.sync, w = !1, x = {
                body: void 0,
                headers: {},
                statusCode: 0,
                method: g,
                url: m,
                rawRequest: l
            };
            if ("json"in e && e.json !== !1 && (w = !0,
            v.accept || v.Accept || (v.Accept = "application/json"),
            "GET" !== g && "HEAD" !== g && (v["content-type"] || v["Content-Type"] || (v["Content-Type"] = "application/json"),
            b = JSON.stringify(e.json === !0 ? b : e.json))),
            l.onreadystatechange = r,
            l.onload = a,
            l.onerror = n,
            l.onprogress = function() {}
            ,
            l.onabort = function() {
                d = !0
            }
            ,
            l.ontimeout = n,
            l.open(g, m, !y, e.username, e.password),
            y || (l.withCredentials = !!e.withCredentials),
            !y && e.timeout > 0 && (h = setTimeout(function() {
                if (!d) {
                    d = !0,
                    l.abort("timeout");
                    var e = new Error("XMLHttpRequest timeout");
                    e.code = "ETIMEDOUT",
                    n(e)
                }
            }, e.timeout)),
            l.setRequestHeader)
                for (f in v)
                    v.hasOwnProperty(f) && l.setRequestHeader(f, v[f]);
            else if (e.headers && !o(e.headers))
                throw new Error("Headers cannot be set on an XDomainRequest object");
            return "responseType"in e && (l.responseType = e.responseType),
            "beforeSend"in e && "function" == typeof e.beforeSend && e.beforeSend(l),
            l.send(b),
            l
        }
        function c(e) {
            if ("document" === e.responseType)
                return e.responseXML;
            var r = 204 === e.status && e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
            return "" !== e.responseType || r ? null : e.responseXML
        }
        function s() {}
        var l = e("global/window")
          , f = e("is-function")
          , p = e("parse-headers")
          , d = e("xtend");
        r.exports = i,
        i.XMLHttpRequest = l.XMLHttpRequest || s,
        i.XDomainRequest = "withCredentials"in new i.XMLHttpRequest ? i.XMLHttpRequest : l.XDomainRequest,
        n(["get", "put", "post", "patch", "head", "delete"], function(e) {
            i["delete" === e ? "del" : e] = function(r, t, n) {
                return t = a(r, t, n),
                t.method = e.toUpperCase(),
                u(t)
            }
        })
    }
    , {
        "global/window": 32,
        "is-function": 38,
        "parse-headers": 47,
        xtend: 61
    }],
    61: [function(e, r, t) {
        function n() {
            for (var e = {}, r = 0; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                    o.call(t, n) && (e[n] = t[n])
            }
            return e
        }
        r.exports = n;
        var o = Object.prototype.hasOwnProperty
    }
    , {}],
    62: [function(e, r, t) {
        function n(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                    o.call(t, n) && (e[n] = t[n])
            }
            return e
        }
        r.exports = n;
        var o = Object.prototype.hasOwnProperty
    }
    , {}],
    63: [function(e, r, t) {
        var n = e("bel")
          , o = e("morphdom")
          , a = e("./update-events.js");
        r.exports = n,
        r.exports.update = function(e, r, t) {
            function n(e, r) {
                for (var n = t.events || a, o = 0; o < n.length; o++) {
                    var i = n[o];
                    r[i] ? e[i] = r[i] : e[i] && (e[i] = void 0)
                }
                "INPUT" === e.nodeName && "file" !== e.type || "SELECT" === e.nodeName ? null === r.getAttribute("value") && (r.value = e.value) : "TEXTAREA" === e.nodeName && null === r.getAttribute("value") && (e.value = r.value)
            }
            return t || (t = {}),
            t.events !== !1 && (t.onBeforeElUpdated || (t.onBeforeElUpdated = n)),
            o(e, r, t)
        }
    }
    , {
        "./update-events.js": 64,
        bel: 11,
        morphdom: 41
    }],
    64: [function(e, r, t) {
        r.exports = ["onclick", "ondblclick", "onmousedown", "onmouseup", "onmouseover", "onmousemove", "onmouseout", "ondragstart", "ondrag", "ondragenter", "ondragleave", "ondragover", "ondrop", "ondragend", "onkeydown", "onkeypress", "onkeyup", "onunload", "onabort", "onerror", "onresize", "onscroll", "onselect", "onchange", "onsubmit", "onreset", "onfocus", "onblur", "oninput", "oncontextmenu", "onfocusin", "onfocusout"]
    }
    , {}],
    65: [function(e, r, t) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = e("choo")
          , a = n(o)
          , i = e("./effects/request-camera")
          , u = n(i)
          , c = e("./effects/request-fullscreen")
          , s = n(c)
          , l = e("./effects/snap")
          , f = n(l)
          , p = e("./effects/translate")
          , d = n(p)
          , h = e("./views/base-view")
          , m = n(h);
        e("array.prototype.find").shim(),
        e("array.prototype.findindex").shim();
        var g = (0,
        a.default)();
        g.model({
            state: {
                activeView: "main",
                cameraReady: !1,
                cameraError: !1,
                streamUrl: null,
                video: null,
                ctx: null,
                canvas: null,
                isSnapping: !1,
                firstTime: !0,
                fullscreen: !1,
                label: "",
                translation: "",
                activeLang: "vietnamese",
                targetLang: "english",
                guesses: "",
                rotateTerms: !0
            },
            subscriptions: [function(e, r) {
                return document.addEventListener("DOMContentLoaded", function(t) {
                    return e("requestCamera", r)
                })
            }
            ],
            reducers: {
                showList: function(e) {
                    return {
                        activeView: "list"
                    }
                },
                showMain: function(e) {
                    return {
                        activeView: "main"
                    }
                },
                cameraError: function(e) {
                    return {
                        cameraError: !0
                    }
                },
                startSnap: function(e) {
                    return {
                        isSnapping: !0,
                        firstTime: !1
                    }
                },
                endSnap: function(e) {
                    return {
                        isSnapping: !1
                    }
                },
                setFullscreen: function(e) {
                    return {
                        fullscreen: !0
                    }
                },
                setLabelPair: function(e, r) {
                    return r
                },
                changeLang: function(e, r) {
                    return {
                        activeView: "main",
                        activeLang: r,
                        label: "",
                        translation: ""
                    }
                },
                setStream: function(e, r) {
                    var t = r.stream
                      , n = r.video
                      , o = r.ctx
                      , a = r.canvas;
                    return {
                        cameraReady: !0,
                        streamUrl: t,
                        video: n,
                        ctx: o,
                        canvas: a
                    }
                }
            },
            effects: {
                requestCamera: u.default,
                snap: f.default,
                translate: d.default,
                requestFullscreen: s.default
            }
        }),
        g.router({
            default: "/"
        }, [["/", m.default]]),
        document.body.appendChild(g.start())
    }
    , {
        "./effects/request-camera": 67,
        "./effects/request-fullscreen": 68,
        "./effects/snap": 69,
        "./effects/translate": 70,
        "./views/base-view": 71,
        "array.prototype.find": 2,
        "array.prototype.findindex": 6,
        choo: 14
    }],
    66: [function(e, r, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "AIzaSyCOIMPXM3NqGukXt0q2rwtTmCk50CVQ_Yc";
        t.apiUrls = {
            cloudVision: "https://vision.googleapis.com/v1/images:annotate?key=" + n,
            translate: "https://www.googleapis.com/language/translate/v2?key=" + n
        },
        t.langList = ["spanish", "french", "german", "italian", "chinese", "japanese", "korean", "vietnamese", "dutch"]
    }
    , {}],
    67: [function(e, r, t) {
        "use strict";
        function n(e, r, t, n) {
            if (!e.cameraReady)
                return d && i ? void (s ? g(t, n) : l ? a.getSources(function(e) {
                    return m(e, t, n)
                }) : m(null, t, n)) : t("cameraError", n)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = n;
        var o = window
          , a = o.MediaStreamTrack
          , i = o.URL
          , u = navigator
          , c = u.mediaDevices
          , s = c && c.enumerateDevices
          , l = a && a.getSources
          , f = s || l
          , p = !1
          , d = function() {
            var e = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            return e ? e.bind(navigator) : null
        }()
          , h = function(e) {
            var r = null;
            if (f && e && e.length)
                if (s)
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if ("videoinput" === n.kind) {
                            if ("function" == typeof n.getCapabilities) {
                                var o = n.getCapabilities();
                                if (o && "environment" === o.facingMode) {
                                    r = n;
                                    break
                                }
                            }
                            if (/facing back/i.test(n.label)) {
                                r = n;
                                break
                            }
                        }
                    }
                else
                    r = e.find(function(e) {
                        return "environment" === e.facing
                    }),
                    r || (r = e.find(function(e) {
                        return "video" === e.kind
                    }));
            return r
        }
          , m = function(e, r, t) {
            var n = h(e);
            d({
                audio: !1,
                video: !n || {
                    optional: [{
                        sourceId: s ? n.deviceId : n.id
                    }]
                }
            }, function(e) {
                if (s && !n && !p)
                    return p = !0,
                    void setTimeout(function() {
                        e.getTracks().forEach(function(e) {
                            return e.stop()
                        }),
                        g(r, t)
                    }, 1);
                var o = document.getElementById("canvas")
                  , a = document.getElementById("video")
                  , u = i.createObjectURL(e);
                a.src = u,
                r("setStream", {
                    stream: u,
                    video: a,
                    ctx: o.getContext("2d"),
                    canvas: o
                }, t)
            }, function(e) {
                return r("cameraError", t)
            })
        }
          , g = function(e, r) {
            return c.enumerateDevices().then(function(t) {
                return m(t, e, r)
            }).catch(function(t) {
                return m(null, e, r)
            })
        }
    }
    , {}],
    68: [function(e, r, t) {
        "use strict";
        function n(e, r, t, n) {
            document.body.requestFullscreen ? document.body.requestFullscreen() : document.body.webkitRequestFullscreen ? document.body.webkitRequestFullscreen() : document.body.mozRequestFullScreen ? document.body.mozRequestFullScreen() : document.body.msRequestFullscreen && document.body.msRequestFullscreen(),
            t("setFullscreen", n)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = n
    }
    , {}],
    69: [function(e, r, t) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, r, t, n) {
            t("startSnap", n);
            var o = window.innerWidth
              , a = window.innerHeight
              , p = e.video.videoWidth
              , d = e.video.videoHeight;
            if (o >= c) {
                var h = Math.min(o, a) * l
                  , m = h / Math.max(o, a) * p;
                e.ctx.drawImage(e.video, Math.round((o / 2 - h / 2) / o * p), Math.round((a * f - h / 2) / a * d), m, m, 0, 0, s, s)
            } else
                e.ctx.drawImage(e.video, (p - d) / 2, 0, d, d, 0, 0, s, s);
            i.default.post(u.apiUrls.cloudVision, {
                json: {
                    requests: [{
                        image: {
                            content: e.canvas.toDataURL("image/jpeg", 1).replace("data:image/jpeg;base64,", "")
                        },
                        features: {
                            type: "LABEL_DETECTION",
                            maxResults: 10
                        }
                    }]
                }
            }, function(e, r, o) {
                var a = void 0;
                a = !e && o.responses && o.responses.length && o.responses[0].labelAnnotations ? o.responses[0].labelAnnotations : [],
                t("translate", a, n),
                setTimeout(t.bind(null, "endSnap", n), 200)
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = o;
        var a = e("xhr")
          , i = n(a)
          , u = e("../config")
          , c = 800
          , s = 640
          , l = .7
          , f = .4
    }
    , {
        "../config": 66,
        xhr: 60
    }],
    70: [function(e, r, t) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, r, t, n) {
            var o = function() {
                return t("setLabelPair", {
                    label: "?",
                    translation: "?",
                    guesses: ""
                }, n)
            };
            if (!r.length)
                return o();
            var a = r.map(function(e) {
                return e.description
            })
              , u = h ? a.filter(function(e) {
                return e.length <= m
            }) : a;
            u.length || (u = a);
            var l = r.slice(0, 3).map(function(e) {
                return e.description + ": " + Math.round(100 * e.score) + "%"
            }).join(", ")
              , f = u[0];
            e.rotateTerms && f === e.label && u.length > 1 && (f = u.slice(1)[Math.floor(Math.random() * (u.length - 1))]),
            x[e.activeLang] || (x[e.activeLang] = {});
            var p = x[e.activeLang][f];
            return p ? (t("setLabelPair", {
                label: c.default.decode(f),
                translation: p,
                guesses: l
            }, n),
            void g(p, e.activeLang, g.bind(null, f, e.targetLang))) : void i.default.get(s.apiUrls.translate + "&q=" + f + "&source=en&target=" + w[e.activeLang], function(r, a, i) {
                if (r)
                    return o();
                var u = c.default.decode(JSON.parse(i).data.translations[0].translatedText);
                t("setLabelPair", {
                    label: c.default.decode(f),
                    translation: u,
                    guesses: l
                }, n),
                g(u, e.activeLang, g.bind(null, f, e.targetLang)),
                x[e.activeLang][f] = u
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = o;
        var a = e("xhr")
          , i = n(a)
          , u = e("he")
          , c = n(u)
          , s = e("../config")
          , l = window
          , f = l.speechSynthesis
          , p = l.SpeechSynthesisUtterance
          , d = f && p
          , h = !0
          , m = 8
          , g = function(e, r, t) {
            if (!d)
                return void (t && t());
            var n = new p;
            n.text = e,
            n.lang = b[v[r]].lang,
            n.voiceURI = b[v[r]].voiceURI,
            t && n.addEventListener("end", t),
            e ? f.speak(n) : t && t()
        }
          , b = d ? f.getVoices() : []
          , v = null
          , y = function(e) {
            b = e;
            var r = {
                english: /en(-|_)gb/i,
                spanish: /es(-|_)(mx|es)/i,
                german: /de(-|_)de/i,
                french: /fr(-|_)fr/i,
                chinese: /zh(-|_)cn/i,
                italian: /it(-|_)it/i,
                korean: /ko(-|_)kr/i,
                japanese: /ja(-|_)jp/i,
                dutch: /nl(-|_)nl/i,
                hindi: /hi(-|_)in/i
            };
            v = Object.keys(r).reduce(function(e, t) {
                return e[t] = b.findIndex(function(e) {
                    return r[t].test(e.lang)
                }),
                e
            }, {})
        };
        b.length ? y(b) : d && (f.onvoiceschanged = function() {
            return y(f.getVoices())
        }
        );
        var w = {
            english: "en",
            spanish: "es",
            german: "de",
            french: "fr",
            chinese: "zh",
            italian: "it",
            korean: "ko",
            japanese: "ja",
            dutch: "nl",
            hindi: "hi"
        }
          , x = {}
    }
    , {
        "../config": 66,
        he: 33,
        xhr: 60
    }],
    71: [function(e, r, t) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, r) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(['\n    <main\n      class="app"\n      ontouchstart=', '\n    >\n\n      <div id="shroud"></div>\n\n      <svg\n        id="spinner"\n        class="', '"\n        width="65px"\n        height="65px"\n        viewBox="0 0 66 66"\n      >\n        <circle />\n      </svg>\n\n      ', "\n    </main>\n  "], ['\n    <main\n      class="app"\n      ontouchstart=', '\n    >\n\n      <div id="shroud"></div>\n\n      <svg\n        id="spinner"\n        class="', '"\n        width="65px"\n        height="65px"\n        viewBox="0 0 66 66"\n      >\n        <circle />\n      </svg>\n\n      ', "\n    </main>\n  "])
          , i = o(["\n          <div>\n            ", "\n            ", "\n          </div>\n        "], ["\n          <div>\n            ", "\n            ", "\n          </div>\n        "])
          , u = e("choo/html")
          , c = n(u)
          , s = e("./error-view")
          , l = n(s)
          , f = e("./target-view")
          , p = n(f)
          , d = e("./main-view")
          , h = n(d)
          , m = e("./list-view")
          , g = n(m);
        t.default = function(e, r, t) {
            return (0,
            c.default)(a, e.fullscreen ? null : t.bind(null, "requestFullscreen"), e.isSnapping ? "active" : "", e.cameraError ? (0,
            l.default)() : (0,
            c.default)(i, (0,
            p.default)(e, r, t), "main" === e.activeView ? (0,
            h.default)(e, r, t) : (0,
            g.default)(e, r, t)))
        }
    }
    , {
        "./error-view": 72,
        "./list-view": 73,
        "./main-view": 74,
        "./target-view": 75,
        "choo/html": 13
    }],
    72: [function(e, r, t) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, r) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(['\n    <h1 id="cam-error">\n      Your device doesn’t allow access to the camera.\n      <br>\n      <br>\n      Please try it on your desktop or Android device.\n    </h1>\n  '], ['\n    <h1 id="cam-error">\n      Your device doesn’t allow access to the camera.\n      <br>\n      <br>\n      Please try it on your desktop or Android device.\n    </h1>\n  '])
          , i = e("choo/html")
          , u = n(i);
        t.default = function(e) {
            return (0,
            u.default)(a)
        }
    }
    , {
        "choo/html": 13
    }],
    73: [function(e, r, t) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, r) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(['\n    <section id="lang-list">\n      <div class="x" onclick=', ">×</div>\n      <ul>\n        ", "\n      </ul>\n    </section>\n  "], ['\n    <section id="lang-list">\n      <div class="x" onclick=', ">×</div>\n      <ul>\n        ", "\n      </ul>\n    </section>\n  "])
          , i = o(['\n            <li\n              class="', '"\n              onclick=', "\n            >\n              ", "\n            </li>"], ['\n            <li\n              class="', '"\n              onclick=', "\n            >\n              ", "\n            </li>"])
          , u = e("choo/html")
          , c = n(u)
          , s = e("../config");
        t.default = function(e, r, t) {
            return (0,
            c.default)(a, function(e) {
                return t("showMain")
            }, s.langList.map(function(r) {
                return (0,
                c.default)(i, r === e.activeLang ? "active" : "", function(e) {
                    return t("changeLang", r)
                }, r)
            }))
        }
    }
    , {
        "../config": 66,
        "choo/html": 13
    }],
    74: [function(e, r, t) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, r) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(['\n    <section id="main-view" class=', ">\n      ", "\n      ", "\n      ", "\n      ", '\n      <div class="debug">', "</div>\n    </section>\n  "], ['\n    <section id="main-view" class=', ">\n      ", "\n      ", "\n      ", "\n      ", '\n      <div class="debug">', "</div>\n    </section>\n  "])
          , i = o(['\n          <div class="row">\n            <h2>', "</h2>\n            <h4 onclick=", ">\n              ", "\n            </h4>\n          </div>\n        "], ['\n          <div class="row">\n            <h2>', "</h2>\n            <h4 onclick=", ">\n              ", "\n            </h4>\n          </div>\n        "])
          , u = o(['\n          <div class="row">\n            <h2>', "</h2>\n            <h4>", "</h4>\n          </div>\n        "], ['\n          <div class="row">\n            <h2>', "</h2>\n            <h4>", "</h4>\n          </div>\n        "])
          , c = o(['\n          <div\n            id="shutter-button"\n            class="', '"\n            onclick=', ">\n          </div>\n        "], ['\n          <div\n            id="shutter-button"\n            class="', '"\n            onclick=', ">\n          </div>\n        "])
          , s = o(['<h5 id="first-time">Try taking a picture of something.</h5>'], ['<h5 id="first-time">Try taking a picture of something.</h5>'])
          , l = e("choo/html")
          , f = n(l);
        t.default = function(e, r, t) {
            return (0,
            f.default)(a, e.isSnapping ? "faded" : "", !e.firstTime && e.translation ? (0,
            f.default)(i, e.translation, function(e) {
                return t("showList")
            }, e.activeLang) : null, !e.firstTime && e.label ? (0,
            f.default)(u, e.label, e.targetLang) : null, e.cameraReady ? (0,
            f.default)(c, e.isSnapping ? "busy" : "", function(e) {
                return t("snap")
            }) : null, e.firstTime && e.cameraReady ? (0,
            f.default)(s) : null, e.guesses)
        }
    }
    , {
        "choo/html": 13
    }],
    75: [function(e, r, t) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, r) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(['\n    <div id="target" class=', "></div>\n  "], ['\n    <div id="target" class=', "></div>\n  "])
          , i = e("choo/html")
          , u = n(i);
        t.default = function(e, r, t) {
            return "list" === e.activeView || e.firstTime ? null : (0,
            u.default)(a, e.isSnapping ? "flashing" : "")
        }
    }
    , {
        "choo/html": 13
    }]
}, {}, [65]);
