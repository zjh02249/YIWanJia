/*!
 * Company: uelike.com
 * Developer: luoye.org
 * Date: 2013-3-1

 * Includes jquery
 */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cv(a) {
        if (!ck[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                cl || (cl = c.createElement("iframe"), cl.frameBorder = cl.width = cl.height = 0), b.appendChild(cl);
                if (!cm || !cl.createElement) cm = (cl.contentWindow || cl.contentDocument).document, cm.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), cm.close();
                d = cm.createElement(a), cm.body.appendChild(d), e = f.css(d, "display"), b.removeChild(cl)
            }
            ck[a] = e
        }
        return ck[a]
    }

    function cu(a, b) {
        var c = {};
        f.each(cq.concat.apply([], cq.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function ct() {
        cr = b
    }

    function cs() {
        setTimeout(ct, 0);
        return cr = f.now()
    }

    function cj() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function ci() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function cc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l; else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function cb(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0]; else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function ca(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || bE.test(a) ? d(a, e) : ca(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
        }); else if (!c && b != null && typeof b == "object") for (var e in b) ca(a + "[" + e + "]", b[e], c, d); else d(a, b)
    }

    function b_(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function b$(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bT, l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = b$(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = b$(a, c, d, e, "*", g));
        return l
    }

    function bZ(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bP), e = 0, g = d.length, h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bC(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? bx : by, g = 0, h = e.length;
        if (d > 0) {
            if (c !== "border") for (; g < h; g++) c || (d -= parseFloat(f.css(a, "padding" + e[g])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + e[g])) || 0 : d -= parseFloat(f.css(a, "border" + e[g] + "Width")) || 0;
            return d + "px"
        }
        d = bz(a, b, b);
        if (d < 0 || d == null) d = a.style[b] || 0;
        d = parseFloat(d) || 0;
        if (c) for (; g < h; g++) d += parseFloat(f.css(a, "padding" + e[g])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + e[g] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + e[g])) || 0);
        return d + "px"
    }

    function bp(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") b.outerHTML = a.outerHTML; else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option") b.selected = a.defaultSelected; else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
            } else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"), c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {
                }
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }

    var c = a.document, d = a.navigator, e = a.location, f = function () {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }

        var e = function (a, b) {
                return new e.fn.init(a, b, h)
            }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/,
            m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g,
            r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/,
            u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) {
                return (b + "").toUpperCase()
            }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty,
            E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf,
            I = {};
        e.fn = e.prototype = {
            constructor: e, init: function (a, d, f) {
                var g, h, j, k;
                if (!a) return this;
                if (a.nodeType) {
                    this.context = this[0] = a, this.length = 1;
                    return this
                }
                if (a === "body" && !d && c.body) {
                    this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                            return e.merge(this, a)
                        }
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2]) return f.find(a);
                            this.length = 1, this[0] = h
                        }
                        this.context = c, this.selector = a;
                        return this
                    }
                    return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e.isFunction(a)) return f.ready(a);
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return e.makeArray(a, this)
            }, selector: "", jquery: "1.7.1", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return F.call(this, 0)
            }, get: function (a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            }, pushStack: function (a, b, c) {
                var d = this.constructor();
                e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            }, each: function (a, b) {
                return e.each(this, a, b)
            }, ready: function (a) {
                e.bindReady(), A.add(a);
                return this
            }, eq: function (a) {
                a = +a;
                return a === -1 ? this.slice(a) : this.slice(a, a + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            }, map: function (a) {
                return this.pushStack(e.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: E, sort: [].sort, splice: [].splice
        }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
                d = i[c], f = a[c];
                if (i === f) continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        }, e.extend({
            noConflict: function (b) {
                a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                return e
            }, isReady: !1, readyWait: 1, holdReady: function (a) {
                a ? e.readyWait++ : e.ready(!0)
            }, ready: function (a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body) return setTimeout(e.ready, 1);
                    e.isReady = !0;
                    if (a !== !0 && --e.readyWait > 0) return;
                    A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                }
            }, bindReady: function () {
                if (!A) {
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete") return setTimeout(e.ready, 1);
                    if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1); else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch (d) {
                        }
                        c.documentElement.doScroll && b && J()
                    }
                }
            }, isFunction: function (a) {
                return e.type(a) === "function"
            }, isArray: Array.isArray || function (a) {
                return e.type(a) === "array"
            }, isWindow: function (a) {
                return a && typeof a == "object" && "setInterval" in a
            }, isNumeric: function (a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            }, type: function (a) {
                return a == null ? String(a) : I[C.call(a)] || "object"
            }, isPlainObject: function (a) {
                if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                try {
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (c) {
                    return !1
                }
                var d;
                for (d in a) ;
                return d === b || D.call(a, d)
            }, isEmptyObject: function (a) {
                for (var b in a) return !1;
                return !0
            }, error: function (a) {
                throw new Error(a)
            }, parseJSON: function (b) {
                if (typeof b != "string" || !b) return null;
                b = e.trim(b);
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                e.error("Invalid JSON: " + b)
            }, parseXML: function (c) {
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch (g) {
                    d = b
                }
                (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                return d
            }, noop: function () {
            }, globalEval: function (b) {
                b && j.test(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                })(b)
            }, camelCase: function (a) {
                return a.replace(w, "ms-").replace(v, x)
            }, nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            }, each: function (a, c, d) {
                var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                if (d) {
                    if (i) {
                        for (f in a) if (c.apply(a[f], d) === !1) break
                    } else for (; g < h;) if (c.apply(a[g++], d) === !1) break
                } else if (i) {
                    for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                } else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
                return a
            }, trim: G ? function (a) {
                return a == null ? "" : G.call(a)
            } : function (a) {
                return a == null ? "" : (a + "").replace(k, "").replace(l, "")
            }, makeArray: function (a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                }
                return c
            }, inArray: function (a, b, c) {
                var d;
                if (b) {
                    if (H) return H.call(b, a, c);
                    d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                    for (; c < d; c++) if (c in b && b[c] === a) return c
                }
                return -1
            }, merge: function (a, c) {
                var d = a.length, e = 0;
                if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e]; else while (c[e] !== b) a[d++] = c[e++];
                a.length = d;
                return a
            }, grep: function (a, b, c) {
                var d = [], e;
                c = !!c;
                for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                return d
            }, map: function (a, c, d) {
                var f, g, h = [], i = 0, j = a.length,
                    k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                if (k) for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f); else for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                return h.concat.apply([], h)
            }, guid: 1, proxy: function (a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a, a = d
                }
                if (!e.isFunction(a)) return b;
                var f = F.call(arguments, 2), g = function () {
                    return a.apply(c, f.concat(F.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e.guid++;
                return g
            }, access: function (a, c, d, f, g, h) {
                var i = a.length;
                if (typeof c == "object") {
                    for (var j in c) e.access(a, j, c[j], f, g, d);
                    return a
                }
                if (d !== b) {
                    f = !h && f && e.isFunction(d);
                    for (var k = 0; k < i; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                    return a
                }
                return i ? g(a[0], c) : b
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {browser: b[1] || "", version: b[2] || "0"}
            }, sub: function () {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }

                e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                    f && f instanceof e && !(f instanceof a) && (f = a(f));
                    return e.fn.init.call(this, d, f, b)
                }, a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            }, browser: {}
        }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
            c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
        } : c.attachEvent && (B = function () {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        });
        return e
    }(), g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m = function (b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
        }, n = function (b, f) {
            f = f || [], e = !a.memory || [b, f], i = !0, l = j || 0, j = 0, k = c.length;
            for (; c && l < k; l++) if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                e = !0;
                break
            }
            i = !1, c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])))
        }, o = {
            add: function () {
                if (c) {
                    var a = c.length;
                    m(arguments), i ? k = c.length : e && e !== !0 && (j = a, n(e[0], e[1]))
                }
                return this
            }, remove: function () {
                if (c) {
                    var b = arguments, d = 0, e = b.length;
                    for (; d < e; d++) for (var f = 0; f < c.length; f++) if (b[d] === c[f]) {
                        i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                        if (a.unique) break
                    }
                }
                return this
            }, has: function (a) {
                if (c) {
                    var b = 0, d = c.length;
                    for (; b < d; b++) if (a === c[b]) return !0
                }
                return !1
            }, empty: function () {
                c = [];
                return this
            }, disable: function () {
                c = d = e = b;
                return this
            }, disabled: function () {
                return !c
            }, lock: function () {
                d = b, (!e || e === !0) && o.disable();
                return this
            }, locked: function () {
                return !d
            }, fireWith: function (b, c) {
                d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
                return this
            }, fire: function () {
                o.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!e
            }
        };
        return o
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"),
                e = "pending", g = {resolve: b, reject: c, notify: d}, h = {
                    done: b.add, fail: c.add, progress: d.add, state: function () {
                        return e
                    }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    }, always: function () {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    }, pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"]}, function (a, b) {
                                var c = b[0], e = b[1], g;
                                f.isFunction(c) ? i[a](function () {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    }, promise: function (a) {
                        if (a == null) a = h; else for (var b in h) a[b] = h[b];
                        return a
                    }
                }, i = h.promise({}), j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        }, when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }

            var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p, q = c.createElement("div"), r = c.documentElement;
        q.setAttribute("className", "t"), q.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = q.getElementsByTagName("*"), e = q.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = q.getElementsByTagName("input")[0], b = {
            leadingWhitespace: q.firstChild.nodeType === 3,
            tbody: !q.getElementsByTagName("tbody").length,
            htmlSerialize: !!q.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: q.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete q.test
        } catch (s) {
            b.deleteExpando = !1
        }
        !q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), q.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), q.appendChild(i), k = c.createDocumentFragment(), k.appendChild(q.lastChild), b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, k.removeChild(i), k.appendChild(q), q.innerHTML = "", a.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", q.style.width = "2px", q.appendChild(j), b.reliableMarginRight = (parseInt((a.getComputedStyle(j, null) || {marginRight: 0}).marginRight, 10) || 0) === 0);
        if (q.attachEvent) for (o in{
            submit: 1,
            change: 1,
            focusin: 1
        }) n = "on" + o, p = n in q, p || (q.setAttribute(n, "return;"), p = typeof q[n] == "function"), b[o + "Bubbles"] = p;
        k.removeChild(q), k = g = h = j = q = i = null, f(function () {
            var a, d, e, g, h, i, j, k, m, n, o, r = c.getElementsByTagName("body")[0];
            !r || (j = 1, k = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", m = "visibility:hidden;border:0;", n = "style='" + k + "border:5px solid #000;padding:0;'", o = "<div " + n + "><div></div></div>" + "<table " + n + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", a = c.createElement("div"), a.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + j + "px", r.insertBefore(a, r.firstChild), q = c.createElement("div"), a.appendChild(q), q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", l = q.getElementsByTagName("td"), p = l[0].offsetHeight === 0, l[0].style.display = "", l[1].style.display = "none", b.reliableHiddenOffsets = p && l[0].offsetHeight === 0, q.innerHTML = "", q.style.width = q.style.paddingLeft = "1px", f.boxModel = b.boxModel = q.offsetWidth === 2, typeof q.style.zoom != "undefined" && (q.style.display = "inline", q.style.zoom = 1, b.inlineBlockNeedsLayout = q.offsetWidth === 2, q.style.display = "", q.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = q.offsetWidth !== 2), q.style.cssText = k + m, q.innerHTML = o, d = q.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, i = {
                doesNotAddBorder: e.offsetTop !== 5,
                doesAddBorderForTableAndCells: h.offsetTop === 5
            }, e.style.position = "fixed", e.style.top = "20px", i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, r.removeChild(a), q = a = null, f.extend(b, i))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j, o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    h = f.data(this[0]);
                    if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                        e = this[0].attributes;
                        for (var i = 0, j = e.length; i < j; i++) g = e[i].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]));
                        f._data(this[0], "parsedAttrs", !0)
                    }
                }
                return h
            }
            if (typeof a == "object") return this.each(function () {
                f.data(this, a)
            });
            d = a.split("."), d[1] = d[1] ? "." + d[1] : "";
            if (c === b) {
                h = this.triggerHandler("getData" + d[1] + "!", [d[0]]), h === b && this.length && (h = f.data(this[0], a), h = l(this[0], a, h));
                return h === b && d[1] ? this.data(d[0]) : h
            }
            return this.each(function () {
                var b = f(this), e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e), f.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e)
            })
        }, removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        }, _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        }, queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b), d = c.shift(), e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            typeof a != "string" && (c = a, a = "fx");
            if (c === b) return f.queue(this[0], a);
            return this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        }, delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }

            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
            while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            m();
            return d.promise()
        }
    });
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, a, b, !0, f.attr)
        }, removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return f.access(this, a, b, !0, f.prop)
        }, removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a; else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        e.className = f.trim(g)
                    }
                }
            }
            return this
        }, removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) if (a) {
                        h = (" " + g.className + " ").replace(o, " ");
                        for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                        g.className = f.trim(h)
                    } else g.className = ""
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0, h = f(this), i = b, j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        }, hasClass: function (a) {
            var b = " " + a + " ", c = 0, d = this.length;
            for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        }, val: function (a) {
            var c, d, e, g = this[0];
            {
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function (d) {
                        var g = f(this), h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                                return a == null ? "" : a + ""
                            })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                }, set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; h < g; h++) e = d[h], e && (c = f.propFix[e] || e, f.attr(a, e, ""), a.removeAttribute(v ? e : c), u.test(e) && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed"); else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            }, value: {
                get: function (a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value : null
                }, set: function (a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {name: !0, id: !0}, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        }, set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get, set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        }, set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /\bhover(\.\S+)?\b/, C = /^key/,
        D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        }, H = function (a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        }, I = function (a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: G(g),
                        namespace: n.join(".")
                    }, p), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
            if (!!g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                    if (!j) {
                        for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                    for (; m; m = m.parentNode) r.push([m, s]), n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace, i = [], j, k, l, m, n, o, p, q, r, s, t;
            g[0] = c, c.delegateTarget = this;
            if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
                m = f(this), m.context = this.ownerDocument || this;
                for (l = c.target; l != this; l = l.parentNode || this) {
                    o = {}, q = [], m[0] = l;
                    for (j = 0; j < e; j++) r = d[j], s = r.selector, o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)), o[s] && q.push(r);
                    q.length && i.push({elem: l, matches: q})
                }
            }
            d.length > e && i.push({elem: this, matches: d.slice(e)});
            for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
                p = i[j], c.currentTarget = p.elem;
                for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
                    r = p.matches[k];
                    if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace)) c.data = r.data, c.handleObj = r, n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g), n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
            return c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button, i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[f.expando]) return a;
            var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d], a[e] = g[e];
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {setup: f.bindReady},
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = K, this.stopPropagation()
        }, isDefaultPrevented: J, isPropagationStopped: J, isImmediatePropagationStopped: J
    }, f.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        f.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
                if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                    this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)
                }), d._submit_attached = !0)
            })
        }, teardown: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        }, handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var d = 0, e = function (a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            }, teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = J; else if (!e) return this;
            g === 1 && (h = e, e = function (a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function () {
                f.event.add(this, a, e, d, c)
            })
        }, one: function (a, b, c, d) {
            return this.on.call(this, a, b, c, d, 1)
        }, off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c, c = b;
            d === !1 && (d = J);
            return this.each(function () {
                f.event.remove(this, a, d, c)
            })
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, live: function (a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        }, die: function (a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        }, trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        }, toggle: function (a) {
            var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
                var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }), function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1,
            i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
        [0, 0].sort(function () {
            i = !1;
            return 0
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b)) if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f); else {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]") if (!u) e.push.apply(e, k); else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]); else for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]); else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {set: d, expr: a}
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                    k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\") continue;
                    s === r && (r = []);
                    if (o.preFilter[h]) {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f) g = i = !0; else if (f === !0) continue
                    }
                    if (f) for (n = 0; (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        d || (s = r), a = a.replace(o.match[h], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === q) if (g == null) m.error(a); else break;
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType, e = "";
            if (d) {
                if (d === 1 || d === 9) {
                    if (typeof a.textContent == "string") return a.textContent;
                    if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (d === 3 || d === 4) return a.nodeValue
            } else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
            return e
        }, o = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                }, type: function (a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function (a, b) {
                    var c = typeof b == "string", d = c && !l.test(b), e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1) ;
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                    }
                    e && m.filter(b, a, !0)
                }, ">": function (a, b) {
                    var c, d = typeof b == "string", e = 0, f = a.length;
                    if (d && !l.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    } else {
                        for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                        d && m.filter(b, a, !0)
                    }
                }, "": function (a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                }, "~": function (a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function (a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                }, NAME: function (a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [], d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null : c
                    }
                }, TAG: function (a, b) {
                    if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function (a, b, c, d, e, f) {
                    a = " " + a[1].replace(j, "") + " ";
                    if (f) return a;
                    for (var g = 0, h; (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return !1
                }, ID: function (a) {
                    return a[1].replace(j, "")
                }, TAG: function (a, b) {
                    return a[1].replace(j, "").toLowerCase()
                }, CHILD: function (a) {
                    if (a[1] === "nth") {
                        a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                    } else a[2] && m.error(a[0]);
                    a[0] = e++;
                    return a
                }, ATTR: function (a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j, "");
                    !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                }, PSEUDO: function (b, c, d, e, f) {
                    if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c); else {
                        var g = m.filter(b[3], c, d, !0 ^ f);
                        d || e.push.apply(e, g);
                        return !1
                    } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                    return b
                }, POS: function (a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function (a) {
                    return a.disabled === !1 && a.type !== "hidden"
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    return a.checked === !0
                }, selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                }, parent: function (a) {
                    return !!a.firstChild
                }, empty: function (a) {
                    return !a.firstChild
                }, has: function (a, b, c) {
                    return !!m(c[3], a).length
                }, header: function (a) {
                    return /h\d/i.test(a.nodeName)
                }, text: function (a) {
                    var b = a.getAttribute("type"), c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                }, radio: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                }, checkbox: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                }, file: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                }, password: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                }, submit: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                }, image: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                }, reset: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                }, input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                }, focus: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, b) {
                    return b === 0
                }, last: function (a, b, c, d) {
                    return b === d.length - 1
                }, even: function (a, b) {
                    return b % 2 === 0
                }, odd: function (a, b) {
                    return b % 2 === 1
                }, lt: function (a, b, c) {
                    return b < c[3] - 0
                }, gt: function (a, b, c) {
                    return b > c[3] - 0
                }, nth: function (a, b, c) {
                    return c[3] - 0 === b
                }, eq: function (a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function (a, b, c, d) {
                    var e = b[1], f = o.filters[e];
                    if (f) return f(a, c, b, d);
                    if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return !1;
                        return !0
                    }
                    m.error(e)
                }, CHILD: function (a, b) {
                    var c, e, f, g, h, i, j, k = b[1], l = a;
                    switch (k) {
                        case"only":
                        case"first":
                            while (l = l.previousSibling) if (l.nodeType === 1) return !1;
                            if (k === "first") return !0;
                            l = a;
                        case"last":
                            while (l = l.nextSibling) if (l.nodeType === 1) return !1;
                            return !0;
                        case"nth":
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0) return !0;
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                    }
                }, ID: function (a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                }, TAG: function (a, b) {
                    return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                }, CLASS: function (a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                }, ATTR: function (a, b) {
                    var c = b[1],
                        d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                        e = d + "", f = b[2], g = b[4];
                    return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                }, POS: function (a, b, c, d) {
                    var e = b[2], f = o.setFilters[e];
                    if (f) return f(a, c, b, d)
                }
            }
        }, p = o.match.POS, q = function (a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0, d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a); else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]); else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), j = j.parentNode;
            j = i;
            while (j) f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }), function () {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return s([], f);
                                if (i.id === h[3]) return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {
                            }
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                            try {
                                if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch (r) {
                            } finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) m[e] = a[e];
                b = null
            }
        }(), function () {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch (g) {
                    }
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return !1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [], f = "", g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice,
        Q = f.expr.match.POS, R = {children: !0, contents: !0, next: !0, prev: !0};
    f.fn.extend({
        find: function (a) {
            var b = this, c, d;
            if (typeof a != "string") return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a), g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h]) {
                    e.splice(h--, 1);
                    break
                }
            }
            return e
        }, has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++) if (f.contains(this, b[a])) return !0
            })
        }, not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            var c = [], d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({selector: a[d], elem: g, level: h});
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        }, index: function (a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        }, add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        }, parents: function (a) {
            return f.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        }, next: function (a) {
            return f.nth(a, 2, "nextSibling")
        }, prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        }, nextAll: function (a) {
            return f.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return f.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return f.sibling(a.parentNode.firstChild, a)
        }, children: function (a) {
            return f.sibling(a.firstChild)
        }, contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        }, dir: function (a, c, d) {
            var e = [], g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        }, nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        }, sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i,
        _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")", "i"), bd = /checked\s*(?:[^=]|=\s*.checked.)/i, be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                var c = f(this);
                c.text(a.call(this, b, c.text()))
            });
            if (typeof a != "object" && a !== b) return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return f.text(this)
        }, wrapAll: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = f(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        }, remove: function (a, b) {
            for (var c = 0, d; (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        }, empty: function () {
            for (var a = 0, b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        }, clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        }, html: function (a) {
            if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
            if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            } else f.isFunction(a) ? this.each(function (b) {
                var c = f(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            return this
        }, replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function (b) {
                    var c = f(this), d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling, c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            var e, g, h, i, j = a[0], k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, bp)
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {fragment: e, cacheable: g}
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d, e, g, h = f.support.html5Clone || !bc.test("<" + a.nodeName) ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        }, clean: function (a, b, d, e) {
            var g;
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [], i;
            for (var j = 0, k; (k = a[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k) continue;
                if (typeof k == "string") if (!_.test(k)) k = b.createTextNode(k); else {
                    k = k.replace(Y, "<$1></$2>");
                    var l = (Z.exec(k) || ["", ""])[1].toLowerCase(), m = bg[l] || bg._default, n = m[0],
                        o = b.createElement("div");
                    b === c ? bh.appendChild(o) : U(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
                    while (n--) o = o.lastChild;
                    if (!f.support.tbody) {
                        var p = $.test(k),
                            q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                        for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                    }
                    !f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes
                }
                var r;
                if (!f.support.appendChecked) if (k[0] && typeof (r = k.length) == "number") for (i = 0; i < r; i++) bn(k[i]); else bn(k);
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d) {
                g = function (a) {
                    return !a.type || be.test(a.type)
                };
                for (j = 0; h[j]; j++) if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]); else {
                    if (h[j].nodeType === 1) {
                        var s = f.grep(h[j].getElementsByTagName("script"), g);
                        h.splice.apply(h, [j + 1, 0].concat(s))
                    }
                    d.appendChild(h[j])
                }
            }
            return h
        }, cleanData: function (a) {
            var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
            for (var h = 0, i; (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bq = /alpha\([^)]*\)/i, br = /opacity=([^)]*)/, bs = /([A-Z]|^ms)/g, bt = /^-?\d+(?:px)?$/i, bu = /^-?\d/,
        bv = /^([\-+])=([\-+.\de]+)/, bw = {position: "absolute", visibility: "hidden", display: "block"},
        bx = ["Left", "Right"], by = ["Top", "Bottom"], bz, bA, bB;
    f.fn.css = function (a, c) {
        if (arguments.length === 2 && c === b) return this;
        return f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bz(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {
                }
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (bz) return bz(a, c)
        },
        swap: function (a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0) return bC(a, b, d);
                    f.swap(a, bw, function () {
                        e = bC(a, b, d)
                    });
                    return e
                }
            }, set: function (a, b) {
                if (!bt.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bq, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                var c;
                f.swap(a, {display: "inline-block"}, function () {
                    b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (bA = function (a, b) {
        var c, d, e;
        b = b.replace(bs, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b)));
        return c
    }), c.documentElement.currentStyle && (bB = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        f === null && g && (e = g[b]) && (f = e), !bt.test(f) && bu.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), bz = bA || bB, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    });
    var bD = /%20/g, bE = /\[\]$/, bF = /\r?\n/g, bG = /#.*$/, bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bK = /^(?:GET|HEAD)$/, bL = /^\/\//,
        bM = /\?/, bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bO = /^(?:select|textarea)/i, bP = /\s+/,
        bQ = /([?&])_=[^&]*/, bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bS = f.fn.load, bT = {}, bU = {},
        bV, bW, bX = ["*/"] + ["*"];
    try {
        bV = e.href
    } catch (bY) {
        bV = c.createElement("a"), bV.href = "", bV = bV.href
    }
    bW = bR.exec(bV.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bS) return bS.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        }, serialize: function () {
            return f.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {name: b.name, value: a.replace(bF, "\r\n")}
                }) : {name: b.name, value: c.replace(bF, "\r\n")}
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({type: c, url: a, data: d, success: e, dataType: g})
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? b_(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b_(a, b);
            return a
        },
        ajaxSettings: {
            url: bV,
            isLocal: bJ.test(bW[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bX
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: bZ(bT),
        ajaxTransport: bZ(bU),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c, x = l ? cb(d, v, l) : b, y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0; else try {
                            r = cc(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }

            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c), e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(),
                i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u,
                v = {
                    readyState: 0, setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    }, getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    }, getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bH.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    }, overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    }, abort: function (a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2) for (b in a) j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bP), d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), b$(bT, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bK.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bM.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(), y = d.url.replace(bQ, "$1_=" + x);
                    d.url = y + (y === d.url ? (bM.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }
            (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in{success: 1, error: 1, complete: 1}) v[u](d[u]);
            p = b$(bU, d, c, v);
            if (!p) w(-1, "No Transport"); else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) w(-1, z); else throw z
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [], e = function (a, b) {
                b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                e(this.name, this.value)
            }); else for (var g in a) ca(g, a[g], c, e);
            return d.join("&").replace(bD, "+")
        }
    }), f.extend({active: 0, lastModified: {}, etag: {}});
    var cd = f.now(), ce = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return f.expando + "_" + cd++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h],
                j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ce, l), b.url === j && (e && (k = k.replace(ce, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                }, abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var cf = a.ActiveXObject ? function () {
        for (var a in ch) ch[a](0, 1)
    } : !1, cg = 0, ch;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ci() || cj()
    } : ci, function (a) {
        f.extend(f.support, {ajax: !!a, cors: !!a && "withCredentials" in a})
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(), i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {
                    }
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, cf && delete ch[i]);
                                if (e) h.readyState !== 4 && h.abort(); else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cg, cf && (ch || (ch = {}, f(a).unload(cf)), ch[i] = d), h.onreadystatechange = d)
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var ck = {}, cl, cm, cn = /^(?:toggle|show|hide)$/, co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, cp,
        cq = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
        cr;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(cu("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cv(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        }, hide: function (a, b, c) {
            if (a || a === 0) return this.animate(cu("hide", 3), a, b, c);
            var d, e, g = 0, h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        }, _toggle: f.fn.toggle, toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cu("toggle", 3), a, b, c);
            return this
        }, fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m,
                    n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], cn.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = co.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""));
                return !0
            }

            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        }, stop: function (a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }

                var b, c = !1, e = f.timers, g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b); else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: cu("show", 1),
        slideUp: cu("hide", 1),
        slideToggle: cu("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        }, easing: {
            linear: function (a, b, c, d) {
                return c + d * a
            }, swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        }, timers: [], fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        }, cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        }, custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }

            var e = this, g = f.fx;
            this.startTime = cr || cs(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
                e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
            }, h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
        }, show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (a) {
            var b, c, d, e = cr || cs(), g = !0, h = this.elem, i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers, c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(cp), cp = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            }, _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(["width", "height"], function (a, b) {
        f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) {
        var b = this[0], c;
        if (a) return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch (d) {
        }
        var e = b.ownerDocument, g = e.documentElement;
        if (!c || !f.contains(g, b)) return c ? {top: c.top, left: c.left} : {top: 0, left: 0};
        var h = e.body, i = cy(e), j = g.clientTop || h.clientTop || 0, k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft, n = c.top + l - j,
            o = c.left + m - k;
        return {top: n, left: o}
    } : f.fn.offset = function (a) {
        var b = this[0];
        if (a) return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView,
            k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.support.fixedPosition && k.position === "fixed") break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
        }
        if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
        f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {top: l, left: m}
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {top: b, left: c}
        }, setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0], b = this.offsetParent(), c = this.offset(),
                d = cx.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {top: c.top - d.top, left: c.left - d.left}
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        f.fn[d] = function (c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e) return null;
                g = cy(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function () {
                g = cy(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
        }, f.fn["outer" + c] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }, f.fn[d] = function (a) {
            var e = this[0];
            if (!e) return a == null ? null : this;
            if (f.isFunction(a)) return this.each(function (b) {
                var c = f(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c], h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var i = f.css(e, d), j = parseFloat(i);
                return f.isNumeric(j) ? j : i
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
})(window);
if (!$.browser.msie) (function ($) {
    var bgpos = 'background-position', cc = $.camelCase;

    function normalize(value) {
        var h = '100%', z = '0px', options = {top: z, bottom: h, left: z, right: h};
        return options[value] || value;
    };$.each(['x', 'y'], function (i, v) {
        var camelCase = cc(bgpos + '-' + v);
        $.cssHooks[camelCase] = {
            get: function (elem) {
                var pos = $.css(elem, bgpos).split(/\s+/, 2);
                return normalize(pos[i]);
            }, set: function (elem, value) {
                var pos = $.css(elem, bgpos).split(/\s+/, 2);
                pos[i] = normalize(value);
                $.style(elem, bgpos, pos.join(' '));
            }
        };
        $.fx.step[camelCase] = function (fx) {
            $.style(fx.elem, fx.prop, fx.now);
        };
    });
}(jQuery));
$(function () {
    if (($bwset = window.$bwset || {}) && $bwset.v1 && $bwset.v2 && $.browser.msie && $.browser.version < $bwset.v2) {
        var a = "",
            a = navigator.userAgent.indexOf("Windows NT 6.1") ? '\u5347\u7ea7\u5230\u6700\u65b0\u6d4f\u89c8\u5668 <a href="http://windows.microsoft.com/zh-CN/internet-explorer/ie-10-release-preview?ocid=GA8_O_WOL_DIS_IE_IE10_NULL" target="_blank" style="color:#fff; text-decoration:underline">Internet Explorer 10</a>' : '\u66f4\u6362\u5176\u4ed6\u6d4f\u89c8\u5668 <a href="http://firefox.com" target="_blank" style="color:#fff; text-decoration:underline">Firefox</a> <a href="http://www.google.com/chrome" target="_blank" style="color:#fff; text-decoration:underline">Chrome</a> <a href="http://opera.com" target="_blank" style="color:#fff; text-decoration:underline">Opera</a> <a href="http://www.apple.com/safari" target="_blank" style="color:#fff; text-decoration:underline">Safari</a>';
        $("body").append('<div id="browser" style="position:absolute; left:0px; top:0px; width:100%; height:50px; z-index:999999"><div id="bwbg" style="position:absolute; left:0px; top:0px; width:100%; height:50px; background:#4ea8da;filter:alpha(opacity=70);opacity: 0.7; "></div><div style="position:absolute;height:50px; line-height:50px;color:#fff; font-family:Arial; font-size:14px; font-weight:bold; text-indent:20px;"><p>\u60a8\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u662fInternet Explorer ' + $.browser.version + " , \u4e3a\u4e86\u6548\u679c\u7684\u66f4\u52a0\u6d41\u7545 , \u5efa\u8bae" + a + '</p></div><div id="bwc" style="position:absolute; top:15px; right:10px; z-index:999"></div></div>');
        $.browser.version >= $bwset.v1 ? ($("#browser #bwc").append('<a href="#" style=" width:18px; height:18px; display:block; background:url(data:image/png;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAUAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAEgASAwERAAIRAQMRAf/EAH8AAAAHAQAAAAAAAAAAAAAAAAABAgUGBwgJAQEBAQEBAAAAAAAAAAAAAAAFAAMBAhAAAQMCBAQEBwEAAAAAAAAAAQIDBAUGETEyBwAhEhRBUWFCgZEiEyQVFggRAAECBQMEAwAAAAAAAAAAAAECAwAxUWEE8BEhQRIiQjITBf/aAAwDAQACEQMRAD8A7JXteN17c3Mi4qwyKxtTUW2I1Qdis/lUKQD09w4E4qdZcJ+o5p5AYcgtHGx28hvsTw6JUVaxGrF5WS7iud6uWTsDtNBrcHV26qbkVe97ijWftDKjSWoTjEm7r+KBIgQY5IWI7HteedSMMAcAMfHqUj2jDSwj7MgT+KZE3NANXzczl5DgaxiONipcwBQVJ1a+sPXguGIoTcGqXZfNenbT2cw9R4AYR/fXu+0ftR4kpGPawgrAOuuoJBI5J5jPEpUxUNsID7nJ9U1I6mgED5jjuQs47XA91UB6JqTEYi0Srf52nJdoUebcu0VYkN/t6elPcVGjTHAlrukBCQXmnCB1ADEeHPXspxP6I8tkuiRkFCljGCWl/lq8N1MmYmpJrcHV9Q9afMZdXw8+BYfgk5uadXtzyGfrxRyA5oXp0nVpy8fTiERhXyy4o7H/2Q==)"></a>'), $("#bwc a").click(function () {
            $(this).unbind("click");
            $("#browser").remove();
            $(this).blur();
            return !1
        }), setTimeout(function () {
            $("#bwc a").click()
        }, 8E3)) : ($("html,body").css("overflow", "hidden"), $("body").append('<div style="z-index:999998;position:absolute; left:0px; top:0px; width:100%; height:100%;background:#fff;"></div>'))
    }
});
$(function () {
    var a = String.fromCharCode;
    if (0 <= document.location.hash.slice(1).indexOf("/" + a(64, 100, 101, 118, 101, 108, 111, 112, 101, 114, 64) + "/")) {
        $("body").append("<div id='developer' style='position:absolute;z-index:1000000; top:0px;left:0px;width:100%; height:" + $("body").height() + "px;display:none;'><div id='developerbg' style='background:#000000;width:100%;height:100%;'></div><div id='developercontent' style='position:fixed; top:50%;height:20px;margin-top:-50px;left:50%;width:600px;text-align:center;margin-left:-300px;color:#000; font-family:Arial; font-size:20px;line-height:20px;display:none'>Designers in " + a(117, 101, 108, 105, 107, 101, 46, 99, 111, 109) + ",Developers in " + a(76, 117, 111, 89, 101, 46, 111, 114, 103) + " by Date 2013</div></div>");
        $("#developer").click(function () {
            $("#developer").hide()
        });
        $("#developerbg").css("opacity", 0);
        $("#developer").show();
        if ($.browser.msie && 6 == $.browser.version) {
            var b = $(document.documentElement).height() / 2;
            $("#developercontent").css({position: "absolute", top: b + "px"});
            $(window).scroll(function () {
                $("#developercontent").css({top: $(document).scrollTop() + b + "px"})
            })
        }
        $(window).resize(function () {
            $("#developer").height($("body").height())
        });
        $("#developerbg").fadeTo(400, 0.66, function () {
            $("#developercontent").show()
        })
    }
});
;(function (d) {
    d.anythingSlider = function (i, k) {
        var a = this, b, j;
        a.el = i;
        a.$el = d(i).addClass("anythingBase").wrap('<div class="anythingSlider"><div class="anythingWindow" /></div>');
        a.$el.data("AnythingSlider", a);
        a.init = function () {
            a.options = b = d.extend({}, d.anythingSlider.defaults, k);
            a.initialized = !1;
            d.isFunction(b.onBeforeInitialize) && a.$el.bind("before_initialize", b.onBeforeInitialize);
            a.$el.trigger("before_initialize", a);
            d('<\!--[if lte IE 8]><script>jQuery("body").addClass("as-oldie");<\/script><![endif]--\>').appendTo("body").remove();
            a.$wrapper = a.$el.parent().closest("div.anythingSlider").addClass("anythingSlider-" + b.theme);
            a.$window = a.$el.closest("div.anythingWindow");
            a.win = window;
            a.$win = d(a.win);
            a.$controls = d('<div class="anythingControls"></div>');
            a.$nav = d('<ul class="thumbNav"><li><a><span></span></a></li></ul>');
            a.$startStop = d('<a href="#" class="start-stop"></a>');
            if (b.buildStartStop || b.buildNavigation) a.$controls.appendTo(b.appendControlsTo && d(b.appendControlsTo).length ? d(b.appendControlsTo) : a.$wrapper);
            b.buildNavigation && a.$nav.appendTo(b.appendNavigationTo && d(b.appendNavigationTo).length ? d(b.appendNavigationTo) : a.$controls);
            b.buildStartStop && a.$startStop.appendTo(b.appendStartStopTo && d(b.appendStartStopTo).length ? d(b.appendStartStopTo) : a.$controls);
            a.runTimes = d(".anythingBase").length;
            a.regex = RegExp("panel" + a.runTimes + "-(\\d+)", "i");
            1 === a.runTimes && a.makeActive();
            a.flag = !1;
            a.playing = b.autoPlay;
            a.slideshow = !1;
            a.hovered = !1;
            a.panelSize = [];
            a.currentPage = a.targetPage = b.startPanel = parseInt(b.startPanel, 10) || 1;
            b.changeBy = parseInt(b.changeBy, 10) || 1;
            j = (b.mode || "h").toLowerCase().match(/(h|v|f)/);
            j = b.vertical ? "v" : (j || ["h"])[0];
            b.mode = "v" === j ? "vertical" : "f" === j ? "fade" : "horizontal";
            "f" === j && (b.showMultiple = 1, b.infiniteSlides = !1);
            a.adj = b.infiniteSlides ? 0 : 1;
            a.adjustMultiple = 0;
            a.width = a.$el.width();
            a.height = a.$el.height();
            a.outerPad = [a.$wrapper.innerWidth() - a.$wrapper.width(), a.$wrapper.innerHeight() - a.$wrapper.height()];
            b.playRtl && a.$wrapper.addClass("rtl");
            b.expand && (a.$outer = a.$wrapper.parent(), a.$window.css({
                width: "100%",
                height: "100%"
            }), a.checkResize());
            b.buildStartStop && a.buildAutoPlay();
            b.buildArrows && a.buildNextBackButtons();
            b.autoPlay || (b.autoPlayLocked = !1);
            a.$lastPage = a.$targetPage = a.$currentPage;
            a.updateSlider();
            d.isFunction(d.easing[b.easing]) || (b.easing = "swing");
            b.pauseOnHover && a.$wrapper.hover(function () {
                if (a.playing) {
                    a.$el.trigger("slideshow_paused", a);
                    a.clearTimer(true)
                }
            }, function () {
                if (a.playing) {
                    a.$el.trigger("slideshow_unpaused", a);
                    a.startStop(a.playing, true)
                }
            });
            a.slideControls(!1);
            a.$wrapper.bind("mouseenter mouseleave", function (b) {
                d(this)[b.type === "mouseenter" ? "addClass" : "removeClass"]("anythingSlider-hovered");
                a.hovered = b.type === "mouseenter" ? true : false;
                a.slideControls(a.hovered)
            });
            d(document).keyup(function (c) {
                if (b.enableKeyboard && (a.$wrapper.hasClass("activeSlider") && !c.target.tagName.match("TEXTAREA|INPUT|SELECT")) && !(b.mode !== "vertical" && (c.which === 38 || c.which === 40))) switch (c.which) {
                    case 39:
                    case 40:
                        a.goForward();
                        break;
                    case 37:
                    case 38:
                        a.goBack()
                }
            });
            a.currentPage = a.gotoHash() || b.startPanel || 1;
            a.gotoPage(a.currentPage, !1, null, -1);
            var c = "slideshow_paused slideshow_unpaused slide_init slide_begin slideshow_stop slideshow_start initialized swf_completed".split(" ");
            d.each("onShowPause onShowUnpause onSlideInit onSlideBegin onShowStop onShowStart onInitialized onSWFComplete".split(" "), function (f, e) {
                d.isFunction(b[e]) && a.$el.bind(c[f], b[e])
            });
            d.isFunction(b.onSlideComplete) && a.$el.bind("slide_complete", function () {
                setTimeout(function () {
                    b.onSlideComplete(a)
                }, 0);
                return false
            });
            a.initialized = !0;
            a.$el.trigger("initialized", a);
            a.startStop(b.autoPlay)
        };
        a.updateSlider = function () {
            a.$el.children(".cloned").remove();
            a.navTextVisible = "hidden" !== a.$nav.find("span:first").css("visibility");
            a.$nav.empty();
            a.currentPage = a.currentPage || 1;
            a.$items = a.$el.children();
            a.pages = a.$items.length;
            a.dir = "vertical" === b.mode ? "top" : "left";
            b.showMultiple = "vertical" === b.mode ? 1 : parseInt(b.showMultiple, 10) || 1;
            b.navigationSize = !1 === b.navigationSize ? 0 : parseInt(b.navigationSize, 10) || 0;
            a.$items.find("a").unbind("focus.AnythingSlider").bind("focus.AnythingSlider", function (c) {
                var e = d(this).closest(".panel"), e = a.$items.index(e) + a.adj;
                a.$items.find(".focusedLink").removeClass("focusedLink");
                d(this).addClass("focusedLink");
                a.$window.scrollLeft(0).scrollTop(0);
                if (-1 !== e && (e >= a.currentPage + b.showMultiple || e < a.currentPage)) a.gotoPage(e), c.preventDefault()
            });
            1 < b.showMultiple && (b.showMultiple > a.pages && (b.showMultiple = a.pages), a.adjustMultiple = b.infiniteSlides && 1 < a.pages ? 0 : b.showMultiple - 1);
            a.$controls.add(a.$nav).add(a.$startStop).add(a.$forward).add(a.$back)[1 >= a.pages ? "hide" : "show"]();
            1 < a.pages && a.buildNavigation();
            "fade" !== b.mode && (b.infiniteSlides && 1 < a.pages) && (a.$el.prepend(a.$items.filter(":last").clone().addClass("cloned")), 1 < b.showMultiple ? a.$el.append(a.$items.filter(":lt(" + b.showMultiple + ")").clone().addClass("cloned multiple")) : a.$el.append(a.$items.filter(":first").clone().addClass("cloned")), a.$el.find(".cloned").each(function () {
                d(this).find("a,input,textarea,select,button,area,form").attr({disabled: "disabled", name: ""});
                d(this).find("[id]").andSelf().removeAttr("id")
            }));
            a.$items = a.$el.addClass(b.mode).children().addClass("panel");
            a.setDimensions();
            b.resizeContents = false;
            b.resizeContents ? (a.$items.css("width", a.width), a.$wrapper.css("width", a.getDim(a.currentPage)[0]).add(a.$items).css("height", a.height)) : a.$win.load(function () {
                a.setDimensions();
                c = a.getDim(a.currentPage);
                a.$wrapper.css({width: c[0], height: c[1]});
                a.setCurrentPage(a.currentPage, false)
            });
            a.currentPage > a.pages && (a.currentPage = a.pages);
            a.setCurrentPage(a.currentPage, !1);
            a.$nav.find("a").eq(a.currentPage - 1).addClass("cur");
            if ("fade" === b.mode) {
                var c = a.$items.eq(a.currentPage - 1);
                b.resumeOnVisible ? c.css({opacity: 1}).siblings().css({opacity: 0}) : (a.$items.css("opacity", 1), c.fadeIn(0).siblings().fadeOut(0))
            }
        };
        a.buildNavigation = function () {
            if (b.buildNavigation && 1 < a.pages) {
                var c, f, e, g, h;
                a.$items.filter(":not(.cloned)").each(function (m) {
                    h = d("<li/>");
                    e = m + 1;
                    f = (1 === e ? " first" : "") + (e === a.pages ? " last" : "");
                    c = '<a class="panel' + e + (a.navTextVisible ? '"' : " " + b.tooltipClass + '" title="@"') + ' href="#"><span>@</span></a>';
                    d.isFunction(b.navigationFormatter) ? (g = b.navigationFormatter(e, d(this)), "string" === typeof g ? h.html(c.replace(/@/g, g)) : h = d("<li/>", g)) : h.html(c.replace(/@/g, e));
                    h.appendTo(a.$nav).addClass(f).data("index", e)
                });
                a.$nav.children("li").bind(b.clickControls, function (c) {
                    !a.flag && b.enableNavigation && (a.flag = !0, setTimeout(function () {
                        a.flag = !1
                    }, 100), a.gotoPage(d(this).data("index")));
                    c.preventDefault()
                });
                b.navigationSize && b.navigationSize < a.pages && (a.$controls.find(".anythingNavWindow").length || a.$nav.before('<ul><li class="prev"><a href="#"><span>' + b.backText + "</span></a></li></ul>").after('<ul><li class="next"><a href="#"><span>' + b.forwardText + "</span></a></li></ul>").wrap('<div class="anythingNavWindow"></div>'), a.navWidths = a.$nav.find("li").map(function () {
                    return d(this).outerWidth(!0) + Math.ceil(parseInt(d(this).find("span").css("left"), 10) / 2 || 0)
                }).get(), a.navLeft = a.currentPage, a.$nav.width(a.navWidth(1, a.pages + 1) + 25), a.$controls.find(".anythingNavWindow").width(a.navWidth(1, b.navigationSize + 1)).end().find(".prev,.next").bind(b.clickControls, function (c) {
                    a.flag || (a.flag = !0, setTimeout(function () {
                        a.flag = !1
                    }, 200), a.navWindow(a.navLeft + b.navigationSize * (d(this).is(".prev") ? -1 : 1)));
                    c.preventDefault()
                }))
            }
        };
        a.navWidth = function (b, f) {
            var e;
            e = Math.min(b, f);
            for (var d = Math.max(b, f), h = 0; e < d; e++) h += a.navWidths[e - 1] || 0;
            return h
        };
        a.navWindow = function (c) {
            if (b.navigationSize && b.navigationSize < a.pages && a.navWidths) {
                var f = a.pages - b.navigationSize + 1, c = 1 >= c ? 1 : 1 < c && c < f ? c : f;
                c !== a.navLeft && (a.$controls.find(".anythingNavWindow").animate({
                    scrollLeft: a.navWidth(1, c),
                    width: a.navWidth(c, c + b.navigationSize)
                }, {queue: !1, duration: b.animationTime}), a.navLeft = c)
            }
        };
        a.buildNextBackButtons = function () {
            a.$forward = d('<span class="arrow forward"><a href="#"><span>' + b.forwardText + "</span></a></span>");
            a.$back = d('<span class="arrow back"><a href="#"><span>' + b.backText + "</span></a></span>");
            a.$back.bind(b.clickBackArrow, function (c) {
                b.enableArrows && !a.flag && (a.flag = !0, setTimeout(function () {
                    a.flag = !1
                }, 100), a.goBack());
                c.preventDefault()
            });
            a.$forward.bind(b.clickForwardArrow, function (c) {
                b.enableArrows && !a.flag && (a.flag = !0, setTimeout(function () {
                    a.flag = !1
                }, 100), a.goForward());
                c.preventDefault()
            });
            a.$back.add(a.$forward).find("a").bind("focusin focusout", function () {
                d(this).toggleClass("hover")
            });
            a.$back.appendTo(b.appendBackTo && d(b.appendBackTo).length ? d(b.appendBackTo) : a.$wrapper);
            a.$forward.appendTo(b.appendForwardTo && d(b.appendForwardTo).length ? d(b.appendForwardTo) : a.$wrapper);
            a.arrowWidth = a.$forward.width();
            a.arrowRight = parseInt(a.$forward.css("right"), 10);
            a.arrowLeft = parseInt(a.$back.css("left"), 10)
        };
        a.buildAutoPlay = function () {
            a.$startStop.html("<span>" + (a.playing ? b.stopText : b.startText) + "</span>").bind(b.clickSlideshow, function (c) {
                b.enableStartStop && (a.startStop(!a.playing), a.makeActive(), a.playing && !b.autoPlayDelayed && a.goForward(!0));
                c.preventDefault()
            }).bind("focusin focusout", function () {
                d(this).toggleClass("hover")
            })
        };
        a.checkResize = function (c) {
            clearTimeout(a.resizeTimer);
            a.resizeTimer = setTimeout(function () {
                var f = a.$outer.width() - a.outerPad[0],
                    e = ("BODY" === a.$outer[0].tagName ? a.$win.height() : a.$outer.height()) - a.outerPad[1];
                if (a.width * b.showMultiple !== f || a.height !== e) a.setDimensions(), a.gotoPage(a.currentPage, a.playing, null, -1);
                "undefined" === typeof c && a.checkResize()
            }, 500)
        };
        a.setDimensions = function () {
            var c, f, e, g, h = 0, i = {width: "100%", height: "100%"},
                l = 1 < b.showMultiple ? a.width || a.$window.width() / b.showMultiple : a.$window.width(),
                j = a.$win.width();
            b.expand && (c = a.$outer.width() - a.outerPad[0], a.height = f = a.$outer.height() - a.outerPad[1], a.$wrapper.add(a.$window).add(a.$items).css({
                width: c,
                height: f
            }), a.width = l = 1 < b.showMultiple ? c / b.showMultiple : c);
            a.$items.each(function (k) {
                g = d(this);
                e = g.children();
                if (b.resizeContents) {
                    c = a.width;
                    f = a.height;
                    g.css({width: c, height: f});
                    if (e.length) {
                        e[0].tagName === "EMBED" && e.attr(i);
                        e[0].tagName === "OBJECT" && e.find("embed").attr(i);
                        e.length === 1 && e.css(i)
                    }
                } else {
                    c = g.width() || a.width;
                    if (e.length === 1 && c >= j) {
                        c = e.width() >= j ? l : e.width();
                        e.css("max-width", c)
                    }
                    g.css("width", c);
                    f = e.length === 1 ? e.outerHeight(true) : g.height();
                    if (f <= a.outerPad[1]) f = a.height;
                    g.css("height", f)
                }
                a.panelSize[k] = [c, f, h];
                h = h + (b.mode === "vertical" ? f : c)
            });
            a.$el.css("vertical" === b.mode ? "height" : "width", "fade" === b.mode ? a.width : h)
        };
        a.getDim = function (c) {
            var f, e = a.width, d = a.height;
            if (1 > a.pages || isNaN(c)) return [e, d];
            c = b.infiniteSlides && 1 < a.pages ? c : c - 1;
            if (f = a.panelSize[c]) e = f[0] || e, d = f[1] || d;
            if (1 < b.showMultiple) for (f = 1; f < b.showMultiple; f++) e += a.panelSize[c + f][0], d = Math.max(d, a.panelSize[c + f][1]);
            return [e, d]
        };
        a.goForward = function (c) {
            a.gotoPage(a[b.allowRapidChange ? "targetPage" : "currentPage"] + b.changeBy * (b.playRtl ? -1 : 1), c)
        };
        a.goBack = function (c) {
            a.gotoPage(a[b.allowRapidChange ? "targetPage" : "currentPage"] + b.changeBy * (b.playRtl ? 1 : -1), c)
        };
        a.gotoPage = function (c, f, e, g) {
            !0 !== f && (f = !1, a.startStop(!1), a.makeActive());
            /^[#|.]/.test(c) && d(c).length && (c = d(c).closest(".panel").index() + a.adj);
            if (1 !== b.changeBy) {
                var h = a.pages - a.adjustMultiple;
                1 > c && (c = b.stopAtEnd ? 1 : b.infiniteSlides ? a.pages + c : b.showMultiple > 1 - c ? 1 : h);
                c > a.pages ? c = b.stopAtEnd ? a.pages : b.showMultiple > 1 - c ? 1 : c -= h : c >= h && (c = h)
            }
            if (!(1 >= a.pages) && (a.$lastPage = a.$currentPage, "number" !== typeof c && (c = parseInt(c, 10) || b.startPanel, a.setCurrentPage(c)), !f || !b.isVideoPlaying(a))) a.exactPage = c, c > a.pages + 1 - a.adj && (c = !b.infiniteSlides && !b.stopAtEnd ? 1 : a.pages), c < a.adj && (c = !b.infiniteSlides && !b.stopAtEnd ? a.pages : 1), b.infiniteSlides || (a.exactPage = c), a.currentPage = c > a.pages ? a.pages : 1 > c ? 1 : a.currentPage, a.$currentPage = a.$items.eq(a.currentPage - a.adj), a.targetPage = 0 === c ? a.pages : c > a.pages ? 1 : c, a.$targetPage = a.$items.eq(a.targetPage - a.adj), g = "undefined" !== typeof g ? g : b.animationTime, 0 <= g && a.$el.triggerHandler("slide_init", a), 0 < g && a.slideControls(!0), b.buildNavigation && a.setNavigation(a.targetPage), !0 !== f && (f = !1), (!f || b.stopAtEnd && c === a.pages) && a.startStop(!1), 0 <= g && a.$el.trigger("slide_begin", a), setTimeout(function (d) {
                var f, h = true;
                b.allowRapidChange && a.$wrapper.add(a.$el).add(a.$items).stop(true, true);
                if (!b.resizeContents) {
                    f = a.getDim(c);
                    d = {};
                    if (a.$wrapper.width() !== f[0]) {
                        d.width = f[0] || a.width;
                        h = false
                    }
                    if (a.$wrapper.height() !== f[1]) {
                        d.height = f[1] || a.height;
                        h = false
                    }
                    h || a.$wrapper.filter(":not(:animated)").animate(d, {
                        queue: false,
                        duration: g < 0 ? 0 : g,
                        easing: b.easing
                    })
                }
                if (b.mode === "fade") if (a.$lastPage[0] !== a.$targetPage[0]) {
                    a.fadeIt(a.$lastPage, 0, g);
                    a.fadeIt(a.$targetPage, 1, g, function () {
                        a.endAnimation(c, e, g)
                    })
                } else a.endAnimation(c, e, g); else {
                    d = {};
                    d[a.dir] = -a.panelSize[b.infiniteSlides && a.pages > 1 ? c : c - 1][2];
                    a.$el.filter(":not(:animated)").animate(d, {
                        queue: false,
                        duration: g < 0 ? 0 : g,
                        easing: b.easing,
                        complete: function () {
                            a.endAnimation(c, e, g)
                        }
                    })
                }
            }, parseInt(b.delayBeforeAnimate, 10) || 0)
        };
        a.endAnimation = function (c, d, e) {
            0 === c ? (a.$el.css(a.dir, "fade" === b.mode ? 0 : -a.panelSize[a.pages][2]), c = a.pages) : c > a.pages && (a.$el.css(a.dir, "fade" === b.mode ? 0 : -a.panelSize[1][2]), c = 1);
            a.exactPage = c;
            a.setCurrentPage(c, !1);
            "fade" === b.mode && a.fadeIt(a.$items.not(":eq(" + (c - a.adj) + ")"), 0, 0);
            a.hovered || a.slideControls(!1);
            b.hashTags && a.setHash(c);
            0 <= e && a.$el.triggerHandler("slide_complete", a);
            "function" === typeof d && d(a);
            b.autoPlayLocked && !a.playing && setTimeout(function () {
                a.startStop(true)
            }, b.resumeDelay - (b.autoPlayDelayed ? b.delay : 0))
        };
        a.fadeIt = function (a, d, e, g) {
            e = 0 > e ? 0 : e;
            if (b.resumeOnVisible) a.filter(":not(:animated)").fadeTo(e, d, g); else a.filter(":not(:animated)")[0 === d ? "fadeOut" : "fadeIn"](e, g)
        };
        a.setCurrentPage = function (c, d) {
            c = parseInt(c, 10);
            if (!(1 > a.pages || 0 === c || isNaN(c))) {
                c > a.pages + 1 - a.adj && (c = a.pages - a.adj);
                c < a.adj && (c = 1);
                b.buildArrows && (!b.infiniteSlides && b.stopAtEnd) && (a.$forward[c === a.pages - a.adjustMultiple ? "addClass" : "removeClass"]("disabled"), a.$back[1 === c ? "addClass" : "removeClass"]("disabled"), c === a.pages && a.playing && a.startStop());
                if (!d) {
                    var e = a.getDim(c);
                    a.$wrapper.css({width: e[0], height: e[1]}).add(a.$window).scrollLeft(0).scrollTop(0);
                    a.$el.css(a.dir, "fade" === b.mode ? 0 : -a.panelSize[b.infiniteSlides && 1 < a.pages ? c : c - 1][2])
                }
                a.currentPage = c;
                a.$currentPage = a.$items.removeClass("activePage").eq(c - a.adj).addClass("activePage");
                b.buildNavigation && a.setNavigation(c)
            }
        };
        a.setNavigation = function (b) {
            a.$nav.find(".cur").removeClass("cur").end().find("a").eq(b - 1).addClass("cur")
        };
        a.makeActive = function () {
            a.$wrapper.hasClass("activeSlider") || (d(".activeSlider").removeClass("activeSlider"), a.$wrapper.addClass("activeSlider"))
        };
        a.gotoHash = function () {
            var c = a.win.location.hash, f = c.indexOf("&"), e = c.match(a.regex);
            null === e && !/^#&/.test(c) && !/#!?\//.test(c) ? (c = c.substring(0, 0 <= f ? f : c.length), e = d(c).length && d(c).closest(".anythingBase")[0] === a.el ? a.$items.index(d(c).closest(".panel")) + a.adj : null) : null !== e && (e = b.hashTags ? parseInt(e[1], 10) : null);
            return e
        };
        a.setHash = function (b) {
            var d = "panel" + a.runTimes + "-", e = a.win.location.hash;
            "undefined" !== typeof e && (a.win.location.hash = 0 < e.indexOf(d) ? e.replace(a.regex, d + b) : e + "&" + d + b)
        };
        a.slideControls = function (c) {
            var d = c ? 0 : b.animationTime, e = c ? b.animationTime : 0, g = c ? 1 : 0, h = c ? 0 : 1;
            b.toggleControls && a.$controls.stop(!0, !0).delay(d)[c ? "slideDown" : "slideUp"](b.animationTime / 2).delay(e);
            b.buildArrows && b.toggleArrows && (!a.hovered && a.playing && (h = 1, g = 0), a.$forward.stop(!0, !0).delay(d).animate({
                right: a.arrowRight + h * a.arrowWidth,
                opacity: g
            }, b.animationTime / 2), a.$back.stop(!0, !0).delay(d).animate({
                left: a.arrowLeft + h * a.arrowWidth,
                opacity: g
            }, b.animationTime / 2))
        };
        a.clearTimer = function (b) {
            a.timer && (a.win.clearInterval(a.timer), !b && a.slideshow && (a.$el.trigger("slideshow_stop", a), a.slideshow = !1))
        };
        a.startStop = function (c, d) {
            !0 !== c && (c = !1);
            if ((a.playing = c) && !d) a.$el.trigger("slideshow_start", a), a.slideshow = !0;
            b.buildStartStop && (a.$startStop.toggleClass("playing", c).find("span").html(c ? b.stopText : b.startText), "hidden" === a.$startStop.find("span").css("visibility") && a.$startStop.addClass(b.tooltipClass).attr("title", c ? b.stopText : b.startText));
            c ? (a.clearTimer(!0), a.timer = a.win.setInterval(function () {
                b.isVideoPlaying(a) ? b.resumeOnVideoEnd || a.startStop() : a.goForward(true)
            }, b.delay)) : a.clearTimer()
        };
        a.init()
    };
    d.anythingSlider.defaults = {
        theme: "default",
        mode: "horiz",
        expand: !1,
        resizeContents: !0,
        showMultiple: !1,
        easing: "swing",
        buildArrows: !0,
        buildNavigation: !0,
        buildStartStop: !0,
        toggleArrows: !1,
        toggleControls: !1,
        startText: "Start",
        stopText: "Stop",
        forwardText: "&raquo;",
        backText: "&laquo;",
        tooltipClass: "tooltip",
        enableArrows: !0,
        enableNavigation: !0,
        enableStartStop: !0,
        enableKeyboard: !0,
        startPanel: 1,
        changeBy: 1,
        hashTags: !0,
        infiniteSlides: !0,
        navigationFormatter: null,
        navigationSize: !1,
        autoPlay: !1,
        autoPlayLocked: !1,
        autoPlayDelayed: !1,
        pauseOnHover: !0,
        stopAtEnd: !1,
        playRtl: !1,
        delay: 3E3,
        resumeDelay: 15E3,
        animationTime: 600,
        delayBeforeAnimate: 0,
        clickForwardArrow: "click",
        clickBackArrow: "click",
        clickControls: "click focusin",
        clickSlideshow: "click",
        allowRapidChange: !1,
        resumeOnVideoEnd: !0,
        resumeOnVisible: !0,
        addWmodeToObject: "opaque",
        isVideoPlaying: function () {
            return !1
        }
    };
    d.fn.anythingSlider = function (i, k) {
        return this.each(function () {
            var a, b = d(this).data("AnythingSlider");
            (typeof i).match("object|undefined") ? b ? b.updateSlider() : new d.anythingSlider(this, i) : /\d/.test(i) && !isNaN(i) && b ? (a = "number" === typeof i ? i : parseInt(d.trim(i), 10), 1 <= a && a <= b.pages && b.gotoPage(a, !1, k)) : /^[#|.]/.test(i) && d(i).length && b.gotoPage(i, !1, k)
        })
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (e, a, c, b, d) {
        return jQuery.easing[jQuery.easing.def](e, a, c, b, d)
    }, easeInQuad: function (e, a, c, b, d) {
        return b * (a /= d) * a + c
    }, easeOutQuad: function (e, a, c, b, d) {
        return -b * (a /= d) * (a - 2) + c
    }, easeInOutQuad: function (e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a + c;
        return -b / 2 * (--a * (a - 2) - 1) + c
    }, easeInCubic: function (e, a, c, b, d) {
        return b * (a /= d) * a * a + c
    }, easeOutCubic: function (e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a + 1) + c
    }, easeInOutCubic: function (e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a + c;
        return b / 2 * ((a -= 2) * a * a + 2) + c
    }, easeInQuart: function (e, a, c, b, d) {
        return b * (a /= d) * a * a * a + c
    }, easeOutQuart: function (e, a, c, b, d) {
        return -b * ((a = a / d - 1) * a * a * a - 1) + c
    }, easeInOutQuart: function (e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a * a + c;
        return -b / 2 * ((a -= 2) * a * a * a - 2) + c
    }, easeInQuint: function (e, a, c, b, d) {
        return b * (a /= d) * a * a * a * a + c
    }, easeOutQuint: function (e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a * a * a + 1) + c
    }, easeInOutQuint: function (e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a * a * a + c;
        return b / 2 * ((a -= 2) * a * a * a * a + 2) + c
    }, easeInSine: function (e, a, c, b, d) {
        return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
    }, easeOutSine: function (e, a, c, b, d) {
        return b * Math.sin(a / d * (Math.PI / 2)) + c
    }, easeInOutSine: function (e, a, c, b, d) {
        return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
    }, easeInExpo: function (e, a, c, b, d) {
        return a == 0 ? c : b * Math.pow(2, 10 * (a / d - 1)) + c
    }, easeOutExpo: function (e, a, c, b, d) {
        return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c
    }, easeInOutExpo: function (e, a, c, b, d) {
        if (a == 0) return c;
        if (a == d) return c + b;
        if ((a /= d / 2) < 1) return b / 2 * Math.pow(2, 10 * (a - 1)) + c;
        return b / 2 * (-Math.pow(2, -10 * --a) + 2) + c
    }, easeInCirc: function (e, a, c, b, d) {
        return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c
    }, easeOutCirc: function (e, a, c, b, d) {
        return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
    }, easeInOutCirc: function (e, a, c, b, d) {
        if ((a /= d / 2) < 1) return -b / 2 * (Math.sqrt(1 - a * a) - 1) + c;
        return b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
    }, easeInElastic: function (e, a, c, b, d) {
        e = 1.70158;
        var f = 0, g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f)) + c
    }, easeOutElastic: function (e, a, c, b, d) {
        e = 1.70158;
        var f = 0, g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        return g * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / f) + b + c
    }, easeInOutElastic: function (e, a, c, b, d) {
        e = 1.70158;
        var f = 0, g = b;
        if (a == 0) return c;
        if ((a /= d / 2) == 2) return c + b;
        f || (f = d * 0.3 * 1.5);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        if (a < 1) return -0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + c;
        return g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) * 0.5 + b + c
    }, easeInBack: function (e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        return b * (a /= d) * a * ((f + 1) * a - f) + c
    }, easeOutBack: function (e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c
    }, easeInOutBack: function (e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        if ((a /= d / 2) < 1) return b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c;
        return b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
    }, easeInBounce: function (e, a, c, b, d) {
        return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c
    }, easeOutBounce: function (e, a, c, b, d) {
        return (a /= d) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
    }, easeInOutBounce: function (e, a, c, b, d) {
        if (a < d / 2) return jQuery.easing.easeInBounce(e, a * 2, 0, b, d) * 0.5 + c;
        return jQuery.easing.easeOutBounce(e, a * 2 - d, 0, b, d) * 0.5 + b * 0.5 + c
    }
});
(function ($) {
    var types = ['DOMMouseScroll', 'mousewheel'];
    if ($.event.fixHooks) {
        for (var i = types.length; i;) {
            $.event.fixHooks[types[--i]] = $.event.mouseHooks;
        }
    }
    ;$.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) {
                for (var i = types.length; i;) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        }, teardown: function () {
            if (this.removeEventListener) {
                for (var i = types.length; i;) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };
    $.fn.extend({
        mousewheel: function (fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        }, unmousewheel: function (fn) {
            return this.unbind("mousewheel", fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, returnValue = true,
            deltaX = 0, deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta / 120;
        }
        ;
        if (orgEvent.detail) {
            delta = -orgEvent.detail / 3;
        }
        ;deltaY = delta;
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }
        ;
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY / 120;
        }
        ;
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = -1 * orgEvent.wheelDeltaX / 120;
        }
        ;args.unshift(event, delta, deltaX, deltaY);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
})(jQuery);
(function (B, x, f, q) {
    var r = f(B), m = f(x), b = f.fancybox = function () {
        b.open.apply(this, arguments)
    }, u = null, n = x.createTouch !== q, s = function (a) {
        return a && a.hasOwnProperty && a instanceof f
    }, p = function (a) {
        return a && "string" === f.type(a)
    }, E = function (a) {
        return p(a) && 0 < a.indexOf("%")
    }, k = function (a, d) {
        var e = parseInt(a, 10) || 0;
        d && E(a) && (e *= b.getViewport()[d] / 100);
        return Math.ceil(e)
    }, v = function (a, b) {
        return k(a, b) + "px"
    };
    f.extend(b, {
        version: "2.1.3",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !n,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {dataType: "html", headers: {"X-fancyBox": !0}},
            iframe: {scrolling: "auto", preload: !0},
            swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
            keys: {
                next: {13: "left", 34: "up", 39: "left", 40: "up"},
                prev: {8: "right", 33: "down", 37: "right", 38: "down"},
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {next: "left", prev: "right"},
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (f.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {overlay: !0, title: !0},
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {timer: null, isActive: !1},
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = s(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
                var j = {}, g, h, i, l, k;
                "object" === f.type(c) && (c.nodeType && (c = f(c)), s(c) ? (j = {
                    href: c.data("fancybox-href") || c.attr("href"),
                    title: c.data("fancybox-title") || c.attr("title"),
                    isDom: !0,
                    element: c
                }, f.metadata && f.extend(!0, j, c.metadata())) : j = c);
                g = d.href || j.href || (p(c) ? c : null);
                h = d.title !== q ? d.title : j.title || "";
                l = (i = d.content || j.content) ? "html" : d.type || j.type;
                !l && j.isDom && (l = c.data("fancybox-type"), l || (l = (l = c.prop("class").match(/fancybox\.(\w+)/)) ? l[1] : null));
                p(g) && (l || (b.isImage(g) ? l = "image" : b.isSWF(g) ? l = "swf" : "#" === g.charAt(0) ? l = "inline" : p(c) && (l = "html", i = c)), "ajax" === l && (k = g.split(/\s+/, 2), g = k.shift(), k = k.shift()));
                i || ("inline" === l ? g ? i = f(p(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : j.isDom && (i = c) : "html" === l ? i = g : !l && (!g && j.isDom) && (l = "inline", i = c));
                f.extend(j, {href: g, type: l, content: i, title: h, selector: k});
                a[e] = j
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== q && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        },
        cancel: function () {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
        },
        close: function (a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
        },
        play: function (a) {
            var d = function () {
                clearTimeout(b.player.timer)
            }, e = function () {
                d();
                b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
            }, c = function () {
                d();
                f("body").unbind(".player");
                b.player.isActive = !1;
                b.trigger("onPlayEnd")
            };
            if (!0 === a || !b.player.isActive && !1 !== a) {
                if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, f("body").bind({
                    "afterShow.player onUpdate.player": e,
                    "onCancel.player beforeClose.player": c,
                    "beforeLoad.player": d
                }), e(), b.trigger("onPlayStart")
            } else c()
        },
        next: function (a) {
            var d = b.current;
            d && (p(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
        },
        prev: function (a) {
            var d = b.current;
            d && (p(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function (a, d, e) {
            var c = b.current;
            c && (a = k(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== q && (b.cancel(), b._start(a)))
        },
        reposition: function (a, d) {
            var e = b.current, c = e ? e.wrap : null, j;
            c && (j = b._getPosition(d), a && "scroll" === a.type ? (delete j.position, c.stop(!0, !0).animate(j, 200)) : (c.css(j), e.pos = f.extend({}, e.dim, j)))
        },
        update: function (a) {
            var d = a && a.type, e = !d || "orientationchange" === d;
            e && (clearTimeout(u), u = null);
            b.isOpen && !u && (u = setTimeout(function () {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), u = null)
            }, e && !n ? 0 : 300))
        },
        toggle: function (a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, n && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
        },
        hideLoading: function () {
            m.unbind(".loading");
            f("#fancybox-loading").remove()
        },
        showLoading: function () {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            m.bind("keydown.loading", function (a) {
                if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
            });
            b.defaults.fixed || (d = b.getViewport(), a.css({
                position: "absolute",
                top: 0.5 * d.h + d.y,
                left: 0.5 * d.w + d.x
            }))
        },
        getViewport: function () {
            var a = b.current && b.current.locked || !1, d = {x: r.scrollLeft(), y: r.scrollTop()};
            a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = n && B.innerWidth ? B.innerWidth : r.width(), d.h = n && B.innerHeight ? B.innerHeight : r.height());
            return d
        },
        unbindEvents: function () {
            b.wrap && s(b.wrap) && b.wrap.unbind(".fb");
            m.unbind(".fb");
            r.unbind(".fb")
        },
        bindEvents: function () {
            var a = b.current, d;
            a && (r.bind("orientationchange.fb" + (n ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && m.bind("keydown.fb", function (e) {
                var c = e.which || e.keyCode, j = e.target || e.srcElement;
                if (27 === c && b.coming) return !1;
                !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!j || !j.type && !f(j).is("[contenteditable]"))) && f.each(d, function (d, j) {
                    if (1 < a.group.length && j[c] !== q) return b[d](j[c]), e.preventDefault(), !1;
                    if (-1 < f.inArray(c, j)) return b[d](), e.preventDefault(), !1
                })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, j, g) {
                for (var h = f(d.target || null), i = !1; h.length && !i && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) i = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                if (0 !== c && !i && 1 < b.group.length && !a.canShrink) {
                    if (0 < g || 0 < j) b.prev(0 < g ? "down" : "left"); else if (0 > g || 0 > j) b.next(0 > g ? "up" : "right");
                    d.preventDefault()
                }
            }))
        },
        trigger: function (a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e) return !1;
                c.helpers && f.each(c.helpers, function (d, e) {
                    e && (b.helpers[d] && f.isFunction(b.helpers[d][a])) && (e = f.extend(!0, {}, b.helpers[d].defaults, e), b.helpers[d][a](e, c))
                });
                f.event.trigger(a + ".fb")
            }
        },
        isImage: function (a) {
            return p(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)
        },
        isSWF: function (a) {
            return p(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (a) {
            var d = {}, e, c, a = k(a);
            e = b.group[a] || null;
            if (!e) return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {overlay: {closeClick: !1}}
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad")) b.coming = null; else {
                c = d.type;
                e = d.href;
                if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && n && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (n ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap),
                    outer: f(".fancybox-outer", d.wrap),
                    inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
                    d.skin.css("padding" + b, v(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length) return b._error("content")
                } else if (!e) return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function (a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad()
        },
        _loadImage: function () {
            var a = b.imgPreload = new Image;
            a.onload = function () {
                this.onload = this.onerror = null;
                b.coming.width = this.width;
                b.coming.height = this.height;
                b._afterLoad()
            };
            a.onerror = function () {
                this.onload = this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function () {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href, error: function (a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                }, success: function (d, e) {
                    "success" === e && (a.content = d, b._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var a = b.coming,
                d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", n ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function () {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {
                }
            });
            a.iframe.preload && (b.showLoading(), d.one("load", function () {
                f(this).data("ready", 1);
                n || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad()
            }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function () {
            var a = b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload, e - 1) : 0, f, g;
            for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function () {
            var a = b.coming, d = b.current, e, c, j, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null; else {
                d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                b.unbindEvents();
                e = a.content;
                c = a.type;
                j = a.scrolling;
                f.extend(b, {wrap: a.wrap, skin: a.skin, outer: a.outer, inner: a.inner, current: a, previous: d});
                g = a.href;
                switch (c) {
                    case "inline":
                    case "ajax":
                    case "html":
                        a.selector ? e = f("<div>").html(e).find(a.selector) : s(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
                            f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                        }));
                        break;
                    case "image":
                        e = a.tpl.image.replace("{href}", g);
                        break;
                    case "swf":
                        e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
                            e += '<param name="' + a + '" value="' + b + '"></param>';
                            h += " " + a + '="' + b + '"'
                        }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                }
                (!s(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                b.trigger("beforeShow");
                a.inner.css("overflow", "yes" === j ? "scroll" : "no" === j ? "hidden" : j);
                b._setDimension();
                b.reposition();
                b.isOpen = !1;
                b.coming = null;
                b.bindEvents();
                if (b.isOpened) {
                    if (d.prevMethod) b.transitions[d.prevMethod]()
                } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                b._preloadImages()
            }
        },
        _setDimension: function () {
            var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, j = b.skin, g = b.inner, h = b.current,
                c = h.width, i = h.height, l = h.minWidth, t = h.minHeight, m = h.maxWidth, n = h.maxHeight,
                r = h.scrolling, p = h.scrollOutside ? h.scrollbarWidth : 0, w = h.margin, y = k(w[1] + w[3]),
                q = k(w[0] + w[2]), x, z, s, C, A, F, B, D, u;
            e.add(j).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            w = k(j.outerWidth(!0) - j.width());
            x = k(j.outerHeight(!0) - j.height());
            z = y + w;
            s = q + x;
            C = E(c) ? (a.w - z) * k(c) / 100 : c;
            A = E(i) ? (a.h - s) * k(i) / 100 : i;
            if ("iframe" === h.type) {
                if (u = h.content, h.autoHeight && 1 === u.data("ready")) try {
                    u[0].contentWindow.document.location && (g.width(C).height(9999), F = u.contents().find("body"), p && F.css("overflow-x", "hidden"), A = F.height())
                } catch (G) {
                }
            } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
            c = k(C);
            i = k(A);
            D = C / A;
            l = k(E(l) ? k(l, "w") - z : l);
            m = k(E(m) ? k(m, "w") - z : m);
            t = k(E(t) ? k(t, "h") - s : t);
            n = k(E(n) ? k(n, "h") - s : n);
            F = m;
            B = n;
            h.fitToView && (m = Math.min(a.w - z, m), n = Math.min(a.h - s, n));
            z = a.w - y;
            q = a.h - q;
            h.aspectRatio ? (c > m && (c = m, i = k(c / D)), i > n && (i = n, c = k(i * D)), c < l && (c = l, i = k(c / D)), i < t && (i = t, c = k(i * D))) : (c = Math.max(l, Math.min(c, m)), h.autoHeight && "iframe" !== h.type && (g.width(c), i = g.height()), i = Math.max(t, Math.min(i, n)));
            if (h.fitToView) if (g.width(c).height(i), e.width(c + w), a = e.width(), y = e.height(), h.aspectRatio) for (; (a > z || y > q) && (c > l && i > t) && !(19 < d++);) i = Math.max(t, Math.min(n, i - 10)), c = k(i * D), c < l && (c = l, i = k(c / D)), c > m && (c = m, i = k(c / D)), g.width(c).height(i), e.width(c + w), a = e.width(), y = e.height(); else c = Math.max(l, Math.min(c, c - (a - z))), i = Math.max(t, Math.min(i, i - (y - q)));
            p && ("auto" === r && i < A && c + w + p < z) && (c += p);
            g.width(c).height(i);
            e.width(c + w);
            a = e.width();
            y = e.height();
            e = (a > z || y > q) && c > l && i > t;
            c = h.aspectRatio ? c < F && i < B && c < C && i < A : (c < F || i < B) && (c < C || i < A);
            f.extend(h, {
                dim: {width: v(a), height: v(y)},
                origWidth: C,
                origHeight: A,
                canShrink: e,
                canExpand: c,
                wPadding: w,
                hPadding: x,
                wrapSpace: y - j.outerHeight(!0),
                skinSpace: j.height() - i
            });
            !u && (h.autoHeight && i > t && i < n && !c) && g.height("auto")
        },
        _getPosition: function (a) {
            var d = b.current, e = b.getViewport(), c = d.margin, f = b.wrap.width() + c[1] + c[3],
                g = b.wrap.height() + c[0] + c[2], c = {position: "absolute", top: c[0], left: c[3]};
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = v(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = v(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function () {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind(n ? "touchstart.fb" : "click.fb", function (a) {
                a.preventDefault();
                b.close()
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
        },
        _afterZoomOut: function (a) {
            a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function () {
            var a = b.current, d = a.element, e = a.orig, c = {}, f = 50, g = 50, h = a.hPadding, i = a.wPadding,
                l = b.getViewport();
            !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
            s(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = l.y + (l.h - g) * a.topRatio, c.left = l.x + (l.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked) c.top -= l.y, c.left -= l.x;
            return c = {
                top: v(c.top - h * a.topRatio),
                left: v(c.left - i * a.leftRatio),
                width: v(f + i),
                height: v(g + h)
            }
        }, step: function (a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace, h = c.skinSpace;
            if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](k("width" === f ? c : c - g * e)), b.inner[f](k("width" === f ? c : c - g * e - h * e))
        }, zoomIn: function () {
            var a = b.current, d = a.pos, e = a.openEffect, c = "elastic" === e, j = f.extend({opacity: 1}, d);
            delete j.position;
            c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(j, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            })
        }, zoomOut: function () {
            var a = b.current, d = a.closeEffect, e = "elastic" === d, c = {opacity: 0.1};
            e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c, {
                duration: "none" === d ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: e ? this.step : null,
                complete: b._afterZoomOut
            })
        }, changeIn: function () {
            var a = b.current, d = a.nextEffect, e = a.pos, c = {opacity: 1}, f = b.direction, g;
            e.opacity = 0.1;
            "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = v(k(e[g]) - 200), c[g] = "+=200px") : (e[g] = v(k(e[g]) + 200), c[g] = "-=200px"));
            "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: function () {
                    setTimeout(b._afterZoomIn, 20)
                }
            })
        }, changeOut: function () {
            var a = b.previous, d = a.prevEffect, e = {opacity: 0.1}, c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    };
    b.helpers.overlay = {
        defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !n, fixed: !0},
        overlay: null,
        fixed: !1,
        create: function (a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo("body");
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (a) {
            var d = this, a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (r.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function (a) {
                f(a.target).hasClass("fancybox-overlay") && (b.isActive ? b.close() : d.close())
            });
            this.overlay.css(a.css).show()
        },
        close: function () {
            f(".fancybox-overlay").remove();
            r.unbind("resize.overlay");
            this.overlay = null;
            !1 !== this.margin && (f("body").css("margin-right", this.margin), this.margin = !1);
            this.el && this.el.removeClass("fancybox-lock")
        },
        update: function () {
            var a = "100%", b;
            this.overlay.width(a).height("100%");
            f.browser.msie ? (b = Math.max(x.documentElement.offsetWidth, x.body.offsetWidth), m.width() > b && (a = m.width())) : m.width() > r.width() && (a = m.width());
            this.overlay.width(a).height(m.height())
        },
        onReady: function (a, b) {
            f(".fancybox-overlay").stop(!0, !0);
            this.overlay || (this.margin = m.height() > r.height() || "scroll" === f("body").css("overflow-y") ? f("body").css("margin-right") : !1, this.el = x.all && !x.querySelector ? f("html") : f("body"), this.create(a));
            a.locked && this.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (a, b) {
            b.locked && (this.el.addClass("fancybox-lock"), !1 !== this.margin && f("body").css("margin-right", k(this.margin) + b.scrollbarWidth));
            this.open(a)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (a) {
            this.overlay && !b.isActive && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    };
    b.helpers.title = {
        defaults: {type: "float", position: "bottom"}, beforeShow: function (a) {
            var d = b.current, e = d.title, c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (p(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                switch (c) {
                    case "inside":
                        c = b.skin;
                        break;
                    case "outside":
                        c = b.wrap;
                        break;
                    case "over":
                        c = b.inner;
                        break;
                    default:
                        c = b.skin, d.appendTo("body"), f.browser.msie && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(k(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c)
            }
        }
    };
    f.fn.fancybox = function (a) {
        var d, e = f(this), c = this.selector || "", j = function (g) {
            var h = f(this).blur(), i = d, j, k;
            !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (j = a.groupAttr || "data-fancybox-group", k = h.attr(j), k || (j = "rel", k = h.get(0)[j]), k && ("" !== k && "nofollow" !== k) && (h = c.length ? f(c) : e, h = h.filter("[" + j + '="' + k + '"]'), i = h.index(this)), a.index = i, !1 !== b.open(h, a) && g.preventDefault())
        }, a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", j) : m.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", j);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    m.ready(function () {
        f.scrollbarWidth === q && (f.scrollbarWidth = function () {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                b = a.children(), b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        if (f.support.fixedPosition === q) {
            var a = f.support, d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, {scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body")})
    })
})(window, document, jQuery);
(function (b, a, c) {
    b.fn.jScrollPane = function (e) {
        function d(D, O) {
            var ay, Q = this, Y, aj, v, al, T, Z, y, q, az, aE, au, i, I, h, j, aa, U, ap, X, t, A, aq, af, am, G, l,
                at, ax, x, av, aH, f, L, ai = true, P = true, aG = false, k = false, ao = D.clone(false, false).empty(),
                ac = b.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            aH = D.css("paddingTop") + " " + D.css("paddingRight") + " " + D.css("paddingBottom") + " " + D.css("paddingLeft");
            f = (parseInt(D.css("paddingLeft"), 10) || 0) + (parseInt(D.css("paddingRight"), 10) || 0);

            function ar(aQ) {
                var aL, aN, aM, aJ, aI, aP, aO = false, aK = false;
                ay = aQ;
                if (Y === c) {
                    aI = D.scrollTop();
                    aP = D.scrollLeft();
                    D.css({overflow: "hidden", padding: 0});
                    aj = D.innerWidth() + f;
                    v = D.innerHeight();
                    D.width(aj);
                    Y = b('<div class="jspPane" />').css("padding", aH).append(D.children());
                    al = b('<div class="jspContainer" />').css({
                        width: aj + "px",
                        height: v + "px"
                    }).append(Y).appendTo(D)
                } else {
                    D.css("width", "");
                    aO = ay.stickToBottom && K();
                    aK = ay.stickToRight && B();
                    aJ = D.innerWidth() + f != aj || D.outerHeight() != v;
                    if (aJ) {
                        aj = D.innerWidth() + f;
                        v = D.innerHeight();
                        al.css({width: aj + "px", height: v + "px"})
                    }
                    if (!aJ && L == T && Y.outerHeight() == Z) {
                        D.width(aj);
                        return
                    }
                    L = T;
                    Y.css("width", "");
                    D.width(aj);
                    al.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                Y.css("overflow", "auto");
                if (aQ.contentWidth) {
                    T = aQ.contentWidth
                } else {
                    T = Y[0].scrollWidth
                }
                Z = Y[0].scrollHeight;
                Y.css("overflow", "");
                y = T / aj;
                q = Z / v;
                az = q > 1;
                aE = y > 1;
                if (!(aE || az)) {
                    D.removeClass("jspScrollable");
                    Y.css({top: 0, width: al.width() - f});
                    n();
                    E();
                    R();
                    w()
                } else {
                    D.addClass("jspScrollable");
                    aL = ay.maintainPosition && (I || aa);
                    if (aL) {
                        aN = aC();
                        aM = aA()
                    }
                    aF();
                    z();
                    F();
                    if (aL) {
                        N(aK ? (T - aj) : aN, false);
                        M(aO ? (Z - v) : aM, false)
                    }
                    J();
                    ag();
                    an();
                    if (ay.enableKeyboardNavigation) {
                        S()
                    }
                    if (ay.clickOnTrack) {
                        p()
                    }
                    C();
                    if (ay.hijackInternalLinks) {
                        m()
                    }
                }
                if (ay.autoReinitialise && !av) {
                    av = setInterval(function () {
                        ar(ay)
                    }, ay.autoReinitialiseDelay)
                } else {
                    if (!ay.autoReinitialise && av) {
                        clearInterval(av)
                    }
                }
                aI && D.scrollTop(0) && M(aI, false);
                aP && D.scrollLeft(0) && N(aP, false);
                D.trigger("jsp-initialised", [aE || az])
            }

            function aF() {
                if (az) {
                    al.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'), b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'), b('<div class="jspDragBottom" />'))), b('<div class="jspCap jspCapBottom" />')));
                    U = al.find(">.jspVerticalBar");
                    ap = U.find(">.jspTrack");
                    au = ap.find(">.jspDrag");
                    if (ay.showArrows) {
                        aq = b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", aD(0, -1)).bind("click.jsp", aB);
                        af = b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", aD(0, 1)).bind("click.jsp", aB);
                        if (ay.arrowScrollOnHover) {
                            aq.bind("mouseover.jsp", aD(0, -1, aq));
                            af.bind("mouseover.jsp", aD(0, 1, af))
                        }
                        ak(ap, ay.verticalArrowPositions, aq, af)
                    }
                    t = v;
                    al.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                        t -= b(this).outerHeight()
                    });
                    au.hover(function () {
                        au.addClass("jspHover")
                    }, function () {
                        au.removeClass("jspHover")
                    }).bind("mousedown.jsp", function (aI) {
                        b("html").bind("dragstart.jsp selectstart.jsp", aB);
                        au.addClass("jspActive");
                        var s = aI.pageY - au.position().top;
                        b("html").bind("mousemove.jsp", function (aJ) {
                            V(aJ.pageY - s, false)
                        }).bind("mouseup.jsp mouseleave.jsp", aw);
                        return false
                    });
                    o()
                }
            }

            function o() {
                ap.height(t + "px");
                I = 0;
                X = ay.verticalGutter + ap.outerWidth();
                Y.width(aj - X - f);
                try {
                    if (U.position().left === 0) {
                        Y.css("margin-left", X + "px")
                    }
                } catch (s) {
                }
            }

            function z() {
                if (aE) {
                    al.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'), b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'), b('<div class="jspDragRight" />'))), b('<div class="jspCap jspCapRight" />')));
                    am = al.find(">.jspHorizontalBar");
                    G = am.find(">.jspTrack");
                    h = G.find(">.jspDrag");
                    if (ay.showArrows) {
                        ax = b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", aD(-1, 0)).bind("click.jsp", aB);
                        x = b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", aD(1, 0)).bind("click.jsp", aB);
                        if (ay.arrowScrollOnHover) {
                            ax.bind("mouseover.jsp", aD(-1, 0, ax));
                            x.bind("mouseover.jsp", aD(1, 0, x))
                        }
                        ak(G, ay.horizontalArrowPositions, ax, x)
                    }
                    h.hover(function () {
                        h.addClass("jspHover")
                    }, function () {
                        h.removeClass("jspHover")
                    }).bind("mousedown.jsp", function (aI) {
                        b("html").bind("dragstart.jsp selectstart.jsp", aB);
                        h.addClass("jspActive");
                        var s = aI.pageX - h.position().left;
                        b("html").bind("mousemove.jsp", function (aJ) {
                            W(aJ.pageX - s, false)
                        }).bind("mouseup.jsp mouseleave.jsp", aw);
                        return false
                    });
                    l = al.innerWidth();
                    ah()
                }
            }

            function ah() {
                al.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    l -= b(this).outerWidth()
                });
                G.width(l + "px");
                aa = 0
            }

            function F() {
                if (aE && az) {
                    var aI = G.outerHeight(), s = ap.outerWidth();
                    t -= aI;
                    b(am).find(">.jspCap:visible,>.jspArrow").each(function () {
                        l += b(this).outerWidth()
                    });
                    l -= s;
                    v -= s;
                    aj -= aI;
                    G.parent().append(b('<div class="jspCorner" />').css("width", aI + "px"));
                    o();
                    ah()
                }
                if (aE) {
                    Y.width((al.outerWidth() - f) + "px")
                }
                Z = Y.outerHeight();
                q = Z / v;
                if (aE) {
                    at = Math.ceil(1 / y * l);
                    if (at > ay.horizontalDragMaxWidth) {
                        at = ay.horizontalDragMaxWidth
                    } else {
                        if (at < ay.horizontalDragMinWidth) {
                            at = ay.horizontalDragMinWidth
                        }
                    }
                    h.width(at + "px");
                    j = l - at;
                    ae(aa)
                }
                if (az) {
                    A = Math.ceil(1 / q * t);
                    if (A > ay.verticalDragMaxHeight) {
                        A = ay.verticalDragMaxHeight
                    } else {
                        if (A < ay.verticalDragMinHeight) {
                            A = ay.verticalDragMinHeight
                        }
                    }
                    au.height(A + "px");
                    i = t - A;
                    ad(I)
                }
            }

            function ak(aJ, aL, aI, s) {
                var aN = "before", aK = "after", aM;
                if (aL == "os") {
                    aL = /Mac/.test(navigator.platform) ? "after" : "split"
                }
                if (aL == aN) {
                    aK = aL
                } else {
                    if (aL == aK) {
                        aN = aL;
                        aM = aI;
                        aI = s;
                        s = aM
                    }
                }
                aJ[aN](aI)[aK](s)
            }

            function aD(aI, s, aJ) {
                return function () {
                    H(aI, s, this, aJ);
                    this.blur();
                    return false
                }
            }

            function H(aL, aK, aO, aN) {
                aO = b(aO).addClass("jspActive");
                var aM, aJ, aI = true, s = function () {
                    if (aL !== 0) {
                        Q.scrollByX(aL * ay.arrowButtonSpeed)
                    }
                    if (aK !== 0) {
                        Q.scrollByY(aK * ay.arrowButtonSpeed)
                    }
                    aJ = setTimeout(s, aI ? ay.initialDelay : ay.arrowRepeatFreq);
                    aI = false
                };
                s();
                aM = aN ? "mouseout.jsp" : "mouseup.jsp";
                aN = aN || b("html");
                aN.bind(aM, function () {
                    aO.removeClass("jspActive");
                    aJ && clearTimeout(aJ);
                    aJ = null;
                    aN.unbind(aM)
                })
            }

            function p() {
                w();
                if (az) {
                    ap.bind("mousedown.jsp", function (aN) {
                        if (aN.originalTarget === c || aN.originalTarget == aN.currentTarget) {
                            var aL = b(this), aO = aL.offset(), aM = aN.pageY - aO.top - I, aJ, aI = true,
                                s = function () {
                                    var aR = aL.offset(), aS = aN.pageY - aR.top - A / 2, aP = v * ay.scrollPagePercent,
                                        aQ = i * aP / (Z - v);
                                    if (aM < 0) {
                                        if (I - aQ > aS) {
                                            Q.scrollByY(-aP)
                                        } else {
                                            V(aS)
                                        }
                                    } else {
                                        if (aM > 0) {
                                            if (I + aQ < aS) {
                                                Q.scrollByY(aP)
                                            } else {
                                                V(aS)
                                            }
                                        } else {
                                            aK();
                                            return
                                        }
                                    }
                                    aJ = setTimeout(s, aI ? ay.initialDelay : ay.trackClickRepeatFreq);
                                    aI = false
                                }, aK = function () {
                                    aJ && clearTimeout(aJ);
                                    aJ = null;
                                    b(document).unbind("mouseup.jsp", aK)
                                };
                            s();
                            b(document).bind("mouseup.jsp", aK);
                            return false
                        }
                    })
                }
                if (aE) {
                    G.bind("mousedown.jsp", function (aN) {
                        if (aN.originalTarget === c || aN.originalTarget == aN.currentTarget) {
                            var aL = b(this), aO = aL.offset(), aM = aN.pageX - aO.left - aa, aJ, aI = true,
                                s = function () {
                                    var aR = aL.offset(), aS = aN.pageX - aR.left - at / 2,
                                        aP = aj * ay.scrollPagePercent, aQ = j * aP / (T - aj);
                                    if (aM < 0) {
                                        if (aa - aQ > aS) {
                                            Q.scrollByX(-aP)
                                        } else {
                                            W(aS)
                                        }
                                    } else {
                                        if (aM > 0) {
                                            if (aa + aQ < aS) {
                                                Q.scrollByX(aP)
                                            } else {
                                                W(aS)
                                            }
                                        } else {
                                            aK();
                                            return
                                        }
                                    }
                                    aJ = setTimeout(s, aI ? ay.initialDelay : ay.trackClickRepeatFreq);
                                    aI = false
                                }, aK = function () {
                                    aJ && clearTimeout(aJ);
                                    aJ = null;
                                    b(document).unbind("mouseup.jsp", aK)
                                };
                            s();
                            b(document).bind("mouseup.jsp", aK);
                            return false
                        }
                    })
                }
            }

            function w() {
                if (G) {
                    G.unbind("mousedown.jsp")
                }
                if (ap) {
                    ap.unbind("mousedown.jsp")
                }
            }

            function aw() {
                b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                if (au) {
                    au.removeClass("jspActive")
                }
                if (h) {
                    h.removeClass("jspActive")
                }
            }

            function V(s, aI) {
                if (!az) {
                    return
                }
                if (s < 0) {
                    s = 0
                } else {
                    if (s > i) {
                        s = i
                    }
                }
                if (aI === c) {
                    aI = ay.animateScroll
                }
                if (aI) {
                    Q.animate(au, "top", s, ad)
                } else {
                    au.css("top", s);
                    ad(s)
                }
            }

            function ad(aI) {
                if (aI === c) {
                    aI = au.position().top
                }
                al.scrollTop(0);
                I = aI;
                var aL = I === 0, aJ = I == i, aK = aI / i, s = -aK * (Z - v);
                if (ai != aL || aG != aJ) {
                    ai = aL;
                    aG = aJ;
                    D.trigger("jsp-arrow-change", [ai, aG, P, k])
                }
                u(aL, aJ);
                Y.css("top", s);
                D.trigger("jsp-scroll-y", [-s, aL, aJ]).trigger("scroll")
            }

            function W(aI, s) {
                if (!aE) {
                    return
                }
                if (aI < 0) {
                    aI = 0
                } else {
                    if (aI > j) {
                        aI = j
                    }
                }
                if (s === c) {
                    s = ay.animateScroll
                }
                if (s) {
                    Q.animate(h, "left", aI, ae)
                } else {
                    h.css("left", aI);
                    ae(aI)
                }
            }

            function ae(aI) {
                if (aI === c) {
                    aI = h.position().left
                }
                al.scrollTop(0);
                aa = aI;
                var aL = aa === 0, aK = aa == j, aJ = aI / j, s = -aJ * (T - aj);
                if (P != aL || k != aK) {
                    P = aL;
                    k = aK;
                    D.trigger("jsp-arrow-change", [ai, aG, P, k])
                }
                r(aL, aK);
                Y.css("left", s);
                D.trigger("jsp-scroll-x", [-s, aL, aK]).trigger("scroll")
            }

            function u(aI, s) {
                if (ay.showArrows) {
                    aq[aI ? "addClass" : "removeClass"]("jspDisabled");
                    af[s ? "addClass" : "removeClass"]("jspDisabled")
                }
            }

            function r(aI, s) {
                if (ay.showArrows) {
                    ax[aI ? "addClass" : "removeClass"]("jspDisabled");
                    x[s ? "addClass" : "removeClass"]("jspDisabled")
                }
            }

            function M(s, aI) {
                var aJ = s / (Z - v);
                V(aJ * i, aI)
            }

            function N(aI, s) {
                var aJ = aI / (T - aj);
                W(aJ * j, s)
            }

            function ab(aV, aQ, aJ) {
                var aN, aK, aL, s = 0, aU = 0, aI, aP, aO, aS, aR, aT;
                try {
                    aN = b(aV)
                } catch (aM) {
                    return
                }
                aK = aN.outerHeight();
                aL = aN.outerWidth();
                al.scrollTop(0);
                al.scrollLeft(0);
                while (!aN.is(".jspPane")) {
                    s += aN.position().top;
                    aU += aN.position().left;
                    aN = aN.offsetParent();
                    if (/^body|html$/i.test(aN[0].nodeName)) {
                        return
                    }
                }
                aI = aA();
                aO = aI + v;
                if (s < aI || aQ) {
                    aR = s - ay.verticalGutter
                } else {
                    if (s + aK > aO) {
                        aR = s - v + aK + ay.verticalGutter
                    }
                }
                if (aR) {
                    M(aR, aJ)
                }
                aP = aC();
                aS = aP + aj;
                if (aU < aP || aQ) {
                    aT = aU - ay.horizontalGutter
                } else {
                    if (aU + aL > aS) {
                        aT = aU - aj + aL + ay.horizontalGutter
                    }
                }
                if (aT) {
                    N(aT, aJ)
                }
            }

            function aC() {
                return -Y.position().left
            }

            function aA() {
                return -Y.position().top
            }

            function K() {
                var s = Z - v;
                return (s > 20) && (s - aA() < 10)
            }

            function B() {
                var s = T - aj;
                return (s > 20) && (s - aC() < 10)
            }

            function ag() {
                al.unbind(ac).bind(ac, function (aL, aM, aK, aI) {
                    var aJ = aa, s = I;
                    Q.scrollBy(aK * ay.mouseWheelSpeed, -aI * ay.mouseWheelSpeed, false);
                    return aJ == aa && s == I
                })
            }

            function n() {
                al.unbind(ac)
            }

            function aB() {
                return false
            }

            function J() {
                Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (s) {
                    ab(s.target, false)
                })
            }

            function E() {
                Y.find(":input,a").unbind("focus.jsp")
            }

            function S() {
                var s, aI, aK = [];
                aE && aK.push(am[0]);
                az && aK.push(U[0]);
                Y.focus(function () {
                    D.focus()
                });
                D.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (aN) {
                    if (aN.target !== this && !(aK.length && b(aN.target).closest(aK).length)) {
                        return
                    }
                    var aM = aa, aL = I;
                    switch (aN.keyCode) {
                        case 40:
                        case 38:
                        case 34:
                        case 32:
                        case 33:
                        case 39:
                        case 37:
                            s = aN.keyCode;
                            aJ();
                            break;
                        case 35:
                            M(Z - v);
                            s = null;
                            break;
                        case 36:
                            M(0);
                            s = null;
                            break
                    }
                    aI = aN.keyCode == s && aM != aa || aL != I;
                    return !aI
                }).bind("keypress.jsp", function (aL) {
                    if (aL.keyCode == s) {
                        aJ()
                    }
                    return !aI
                });
                if (ay.hideFocus) {
                    D.css("outline", "none");
                    if ("hideFocus" in al[0]) {
                        D.attr("hideFocus", true)
                    }
                } else {
                    D.css("outline", "");
                    if ("hideFocus" in al[0]) {
                        D.attr("hideFocus", false)
                    }
                }

                function aJ() {
                    var aM = aa, aL = I;
                    switch (s) {
                        case 40:
                            Q.scrollByY(ay.keyboardSpeed, false);
                            break;
                        case 38:
                            Q.scrollByY(-ay.keyboardSpeed, false);
                            break;
                        case 34:
                        case 32:
                            Q.scrollByY(v * ay.scrollPagePercent, false);
                            break;
                        case 33:
                            Q.scrollByY(-v * ay.scrollPagePercent, false);
                            break;
                        case 39:
                            Q.scrollByX(ay.keyboardSpeed, false);
                            break;
                        case 37:
                            Q.scrollByX(-ay.keyboardSpeed, false);
                            break
                    }
                    aI = aM != aa || aL != I;
                    return aI
                }
            }

            function R() {
                D.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }

            function C() {
                if (location.hash && location.hash.length > 1) {
                    var aK, aI, aJ = escape(location.hash.substr(1));
                    try {
                        aK = b("#" + aJ + ', a[name="' + aJ + '"]')
                    } catch (s) {
                        return
                    }
                    if (aK.length && Y.find(aJ)) {
                        if (al.scrollTop() === 0) {
                            aI = setInterval(function () {
                                if (al.scrollTop() > 0) {
                                    ab(aK, true);
                                    b(document).scrollTop(al.position().top);
                                    clearInterval(aI)
                                }
                            }, 50)
                        } else {
                            ab(aK, true);
                            b(document).scrollTop(al.position().top)
                        }
                    }
                }
            }

            function m() {
                if (b(document.body).data("jspHijack")) {
                    return
                }
                b(document.body).data("jspHijack", true);
                b(document.body).delegate("a[href*=#]", "click", function (s) {
                    var aI = this.href.substr(0, this.href.indexOf("#")), aK = location.href, aO, aP, aJ, aM, aL, aN;
                    if (location.href.indexOf("#") !== -1) {
                        aK = location.href.substr(0, location.href.indexOf("#"))
                    }
                    if (aI !== aK) {
                        return
                    }
                    aO = escape(this.href.substr(this.href.indexOf("#") + 1));
                    aP;
                    try {
                        aP = b("#" + aO + ', a[name="' + aO + '"]')
                    } catch (aQ) {
                        return
                    }
                    if (!aP.length) {
                        return
                    }
                    aJ = aP.closest(".jspScrollable");
                    aM = aJ.data("jsp");
                    aM.scrollToElement(aP, true);
                    if (aJ[0].scrollIntoView) {
                        aL = b(a).scrollTop();
                        aN = aP.offset().top;
                        if (aN < aL || aN > aL + b(a).height()) {
                            aJ[0].scrollIntoView()
                        }
                    }
                    s.preventDefault()
                })
            }

            function an() {
                var aJ, aI, aL, aK, aM, s = false;
                al.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (aN) {
                    var aO = aN.originalEvent.touches[0];
                    aJ = aC();
                    aI = aA();
                    aL = aO.pageX;
                    aK = aO.pageY;
                    aM = false;
                    s = true
                }).bind("touchmove.jsp", function (aQ) {
                    if (!s) {
                        return
                    }
                    var aP = aQ.originalEvent.touches[0], aO = aa, aN = I;
                    Q.scrollTo(aJ + aL - aP.pageX, aI + aK - aP.pageY);
                    aM = aM || Math.abs(aL - aP.pageX) > 5 || Math.abs(aK - aP.pageY) > 5;
                    return aO == aa && aN == I
                }).bind("touchend.jsp", function (aN) {
                    s = false
                }).bind("click.jsp-touchclick", function (aN) {
                    if (aM) {
                        aM = false;
                        return false
                    }
                })
            }

            function g() {
                var s = aA(), aI = aC();
                D.removeClass("jspScrollable").unbind(".jsp");
                D.replaceWith(ao.append(Y.children()));
                ao.scrollTop(s);
                ao.scrollLeft(aI);
                if (av) {
                    clearInterval(av)
                }
            }

            b.extend(Q, {
                reinitialise: function (aI) {
                    aI = b.extend({}, ay, aI);
                    ar(aI)
                }, scrollToElement: function (aJ, aI, s) {
                    ab(aJ, aI, s)
                }, scrollTo: function (aJ, s, aI) {
                    N(aJ, aI);
                    M(s, aI)
                }, scrollToX: function (aI, s) {
                    N(aI, s)
                }, scrollToY: function (s, aI) {
                    M(s, aI)
                }, scrollToPercentX: function (aI, s) {
                    N(aI * (T - aj), s)
                }, scrollToPercentY: function (aI, s) {
                    M(aI * (Z - v), s)
                }, scrollBy: function (aI, s, aJ) {
                    Q.scrollByX(aI, aJ);
                    Q.scrollByY(s, aJ)
                }, scrollByX: function (s, aJ) {
                    var aI = aC() + Math[s < 0 ? "floor" : "ceil"](s), aK = aI / (T - aj);
                    W(aK * j, aJ)
                }, scrollByY: function (s, aJ) {
                    var aI = aA() + Math[s < 0 ? "floor" : "ceil"](s), aK = aI / (Z - v);
                    V(aK * i, aJ)
                }, positionDragX: function (s, aI) {
                    W(s, aI)
                }, positionDragY: function (aI, s) {
                    V(aI, s)
                }, animate: function (aI, aL, s, aK) {
                    var aJ = {};
                    aJ[aL] = s;
                    aI.animate(aJ, {duration: ay.animateDuration, easing: ay.animateEase, queue: false, step: aK})
                }, getContentPositionX: function () {
                    return aC()
                }, getContentPositionY: function () {
                    return aA()
                }, getContentWidth: function () {
                    return T
                }, getContentHeight: function () {
                    return Z
                }, getPercentScrolledX: function () {
                    return aC() / (T - aj)
                }, getPercentScrolledY: function () {
                    return aA() / (Z - v)
                }, getIsScrollableH: function () {
                    return aE
                }, getIsScrollableV: function () {
                    return az
                }, getContentPane: function () {
                    return Y
                }, scrollToBottom: function (s) {
                    V(i, s)
                }, hijackInternalLinks: b.noop, destroy: function () {
                    g()
                }
            });
            ar(O)
        }

        e = b.extend({}, b.fn.jScrollPane.defaults, e);
        b.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
            e[this] = e[this] || e.speed
        });
        return this.each(function () {
            var f = b(this), g = f.data("jsp");
            if (g) {
                g.reinitialise(e)
            } else {
                b("script", f).filter('[type="text/javascript"],:not([type])').remove();
                g = new d(f, e);
                f.data("jsp", g)
            }
        })
    };
    b.fn.jScrollPane.defaults = {
        showArrows: false,
        maintainPosition: true,
        stickToBottom: false,
        stickToRight: false,
        clickOnTrack: true,
        autoReinitialise: false,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: c,
        animateScroll: false,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: false,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: false,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: true,
        hideFocus: false,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: 0.8
    }
})(jQuery, this);
jQuery.extend(jQuery.easing, {
    easeOutStrong: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }, easeInOutStrong: function (x, t, b, c, d) {
        if ((t /= d * 0.5) < 1) return c * 0.5 * t * t * t * t * t + b;
        return c * 0.5 * ((t -= 2) * t * t * t * t + 2) + b;
    }
});
(function ($) {
    $.fn.jCarouselLite = function (o) {
        o = $.extend({
            btnPrev: null,
            btnNext: null,
            btnGo: null,
            mouseWheel: false,
            auto: null,
            speed: 200,
            easing: null,
            vertical: false,
            circular: true,
            visible: 3,
            start: 0,
            scroll: 1,
            beforeStart: null,
            afterEnd: null
        }, o || {});
        return this.each(function () {
            var b = false, animCss = o.vertical ? "top" : "left", sizeCss = o.vertical ? "height" : "width";
            var c = $(this), ul = $("ul", c), tLi = $("li", ul), tl = tLi.size(), v = o.visible;
            if (o.circular) {
                ul.prepend(tLi.slice(tl - v - 1 + 1).clone()).append(tLi.slice(0, v).clone());
                o.start += v
            }
            var f = $("li", ul), itemLength = f.size(), curr = o.start;
            c.css("visibility", "visible");
            f.css({overflow: "hidden", float: o.vertical ? "none" : "left"});
            ul.css({margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1"});
            c.css({overflow: "hidden", position: "relative", "z-index": "2", left: "0px"});
            var g = o.vertical ? height(f) : width(f);
            var h = g * itemLength;
            var j = g * v;
            f.css({width: f.width(), height: f.height()});
            ul.css(sizeCss, h + "px").css(animCss, -(curr * g));
            c.css(sizeCss, j + "px");
            if (o.btnPrev) $(o.btnPrev).click(function () {
                return go(curr - o.scroll)
            });
            if (o.btnNext) $(o.btnNext).click(function () {
                return go(curr + o.scroll)
            });
            if (o.btnGo) $.each(o.btnGo, function (i, a) {
                $(a).click(function () {
                    return go(o.circular ? o.visible + i : i)
                })
            });
            if (o.mouseWheel && c.mousewheel) c.mousewheel(function (e, d) {
                return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll)
            });
            if (o.auto) setInterval(function () {
                go(curr + o.scroll)
            }, o.auto + o.speed);

            function vis() {
                return f.slice(curr).slice(0, v)
            };

            function go(a) {
                if (!b) {
                    if (o.beforeStart) o.beforeStart.call(this, vis(), curr);
                    if (o.circular) {
                        if (a <= o.start - v - 1) {
                            ul.css(animCss, -((itemLength - (v * 2)) * g) + "px");
                            curr = a == o.start - v - 1 ? itemLength - (v * 2) - 1 : itemLength - (v * 2) - o.scroll
                        } else if (a >= itemLength - v + 1) {
                            ul.css(animCss, -((v) * g) + "px");
                            curr = a == itemLength - v + 1 ? v + 1 : v + o.scroll
                        } else curr = a
                    } else {
                        if (a < 0 || a > itemLength - v) return; else curr = a
                    }
                    b = true;
                    if (o.change) o.change.call(this, vis(), curr);
                    ul.animate(animCss == "left" ? {left: -(curr * g)} : {top: -(curr * g)}, o.speed, o.easing, function () {
                        if (o.afterEnd) o.afterEnd.call(this, vis(), curr);
                        b = false
                    });
                    if (!o.circular) {
                        $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
                        $((curr - o.scroll < 0 && o.btnPrev) || (curr + o.scroll > itemLength - v && o.btnNext) || []).addClass("disabled")
                    }
                }
                return false
            }
        })
    };

    function css(a, b) {
        return parseInt($.css(a[0], b)) || 0
    };

    function width(a) {
        return a[0].offsetWidth + css(a, 'marginLeft') + css(a, 'marginRight')
    };

    function height(a) {
        return a[0].offsetHeight + css(a, 'marginTop') + css(a, 'marginBottom')
    }
})(jQuery);
(function (h, n) {
    function p(a, b, c) {
        var d = t[b.type] || {};
        if (null == a) return c || !b.def ? null : b.def;
        a = d.floor ? ~~a : parseFloat(a);
        return isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a
    }

    function u(a) {
        var b = f(), c = b._rgba = [];
        a = a.toLowerCase();
        k(x, function (d, g) {
            var e, j = g.re.exec(a);
            e = j && g.parse(j);
            j = g.space || "rgba";
            if (e) return e = b[j](e), b[l[j].cache] = e[l[j].cache], c = b._rgba = e._rgba, !1
        });
        return c.length ? ("0,0,0,0" === c.join() && h.extend(c, q.transparent), b) : q[a]
    }

    function r(a, b, c) {
        c = (c + 1) % 1;
        return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }

    var y = /^([\-+])=\s*(\d+\.?\d*)/, x = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (a) {
                return [a[1], a[2], a[3], a[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (a) {
                return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (a) {
                return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (a) {
                return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (a) {
                return [a[1], a[2] / 100, a[3] / 100, a[4]]
            }
        }], f = h.Color = function (a, b, c, d) {
            return new h.Color.fn.parse(a, b, c, d)
        }, l = {
            rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}},
            hsla: {
                props: {
                    hue: {idx: 0, type: "degrees"},
                    saturation: {idx: 1, type: "percent"},
                    lightness: {idx: 2, type: "percent"}
                }
            }
        }, t = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, v = f.support = {},
        w = h("<p>")[0], q, k = h.each;
    w.style.cssText = "background-color:rgba(1,1,1,.5)";
    v.rgba = -1 < w.style.backgroundColor.indexOf("rgba");
    k(l, function (a, b) {
        b.cache = "_" + a;
        b.props.alpha = {idx: 3, type: "percent", def: 1}
    });
    f.fn = h.extend(f.prototype, {
        parse: function (a, b, c, d) {
            if (a === n) return this._rgba = [null, null, null, null], this;
            if (a.jquery || a.nodeType) a = h(a).css(b), b = n;
            var g = this, e = h.type(a), j = this._rgba = [];
            b !== n && (a = [a, b, c, d], e = "array");
            if ("string" === e) return this.parse(u(a) || q._default);
            if ("array" === e) return k(l.rgba.props, function (d, c) {
                j[c.idx] = p(a[c.idx], c)
            }), this;
            if ("object" === e) return a instanceof f ? k(l, function (c, d) {
                a[d.cache] && (g[d.cache] = a[d.cache].slice())
            }) : k(l, function (d, c) {
                var b = c.cache;
                k(c.props, function (d, e) {
                    if (!g[b] && c.to) {
                        if ("alpha" === d || null == a[d]) return;
                        g[b] = c.to(g._rgba)
                    }
                    g[b][e.idx] = p(a[d], e, !0)
                });
                g[b] && 0 > h.inArray(null, g[b].slice(0, 3)) && (g[b][3] = 1, c.from && (g._rgba = c.from(g[b])))
            }), this
        }, is: function (a) {
            var b = f(a), c = !0, d = this;
            k(l, function (a, e) {
                var j, h = b[e.cache];
                h && (j = d[e.cache] || e.to && e.to(d._rgba) || [], k(e.props, function (a, d) {
                    if (null != h[d.idx]) return c = h[d.idx] === j[d.idx]
                }));
                return c
            });
            return c
        }, _space: function () {
            var a = [], b = this;
            k(l, function (c, d) {
                b[d.cache] && a.push(c)
            });
            return a.pop()
        }, transition: function (a, b) {
            var c = f(a), d = c._space(), g = l[d], e = 0 === this.alpha() ? f("transparent") : this,
                j = e[g.cache] || g.to(e._rgba), h = j.slice(), c = c[g.cache];
            k(g.props, function (a, d) {
                var g = d.idx, e = j[g], f = c[g], k = t[d.type] || {};
                null !== f && (null === e ? h[g] = f : (k.mod && (f - e > k.mod / 2 ? e += k.mod : e - f > k.mod / 2 && (e -= k.mod)), h[g] = p((f - e) * b + e, d)))
            });
            return this[d](h)
        }, blend: function (a) {
            if (1 === this._rgba[3]) return this;
            var b = this._rgba.slice(), c = b.pop(), d = f(a)._rgba;
            return f(h.map(b, function (a, b) {
                return (1 - c) * d[b] + c * a
            }))
        }, toRgbaString: function () {
            var a = "rgba(", b = h.map(this._rgba, function (a, d) {
                return null == a ? 2 < d ? 1 : 0 : a
            });
            1 === b[3] && (b.pop(), a = "rgb(");
            return a + b.join() + ")"
        }, toHslaString: function () {
            var a = "hsla(", b = h.map(this.hsla(), function (a, d) {
                null == a && (a = 2 < d ? 1 : 0);
                d && 3 > d && (a = Math.round(100 * a) + "%");
                return a
            });
            1 === b[3] && (b.pop(), a = "hsl(");
            return a + b.join() + ")"
        }, toHexString: function (a) {
            var b = this._rgba.slice(), c = b.pop();
            a && b.push(~~(255 * c));
            return "#" + h.map(b, function (a) {
                a = (a || 0).toString(16);
                return 1 === a.length ? "0" + a : a
            }).join("")
        }, toString: function () {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    });
    f.fn.parse.prototype = f.fn;
    l.hsla.to = function (a) {
        if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
        var b = a[0] / 255, c = a[1] / 255, d = a[2] / 255;
        a = a[3];
        var g = Math.max(b, c, d), e = Math.min(b, c, d), j = g - e, h = g + e, f = 0.5 * h;
        return [Math.round(e === g ? 0 : b === g ? 60 * (c - d) / j + 360 : c === g ? 60 * (d - b) / j + 120 : 60 * (b - c) / j + 240) % 360, 0 === f || 1 === f ? f : 0.5 >= f ? j / h : j / (2 - h), f, null == a ? 1 : a]
    };
    l.hsla.from = function (a) {
        if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
        var b = a[0] / 360, c = a[1], d = a[2];
        a = a[3];
        c = 0.5 >= d ? d * (1 + c) : d + c - d * c;
        d = 2 * d - c;
        return [Math.round(255 * r(d, c, b + 1 / 3)), Math.round(255 * r(d, c, b)), Math.round(255 * r(d, c, b - 1 / 3)), a]
    };
    k(l, function (a, b) {
        var c = b.props, d = b.cache, g = b.to, e = b.from;
        f.fn[a] = function (a) {
            g && !this[d] && (this[d] = g(this._rgba));
            if (a === n) return this[d].slice();
            var b, s = h.type(a), l = "array" === s || "object" === s ? a : arguments, m = this[d].slice();
            k(c, function (a, d) {
                var b = l["object" === s ? a : d.idx];
                null == b && (b = m[d.idx]);
                m[d.idx] = p(b, d)
            });
            return e ? (b = f(e(m)), b[d] = m, b) : f(m)
        };
        k(c, function (d, b) {
            f.fn[d] || (f.fn[d] = function (c) {
                var e = h.type(c), g = "alpha" === d ? this._hsla ? "hsla" : "rgba" : a, f = this[g](), k = f[b.idx];
                if ("undefined" === e) return k;
                "function" === e && (c = c.call(this, k), e = h.type(c));
                if (null == c && b.empty) return this;
                "string" === e && (e = y.exec(c)) && (c = k + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1));
                f[b.idx] = c;
                return this[g](f)
            })
        })
    });
    f.hook = function (a) {
        a = a.split(" ");
        k(a, function (a, c) {
            h.cssHooks[c] = {
                set: function (a, b) {
                    var e, j = "";
                    if ("string" !== h.type(b) || (e = u(b))) {
                        b = f(e || b);
                        if (!v.rgba && 1 !== b._rgba[3]) {
                            for (e = "backgroundColor" === c ? a.parentNode : a; ("" === j || "transparent" === j) && e && e.style;) try {
                                j = h.css(e, "backgroundColor"), e = e.parentNode
                            } catch (k) {
                            }
                            b = b.blend(j && "transparent" !== j ? j : "_default")
                        }
                        b = b.toRgbaString()
                    }
                    try {
                        a.style[c] = b
                    } catch (l) {
                    }
                }
            };
            h.fx.step[c] = function (a) {
                a.colorInit || (a.start = f(a.elem, c), a.end = f(a.end), a.colorInit = !0);
                h.cssHooks[c].set(a.elem, a.start.transition(a.end, a.pos))
            }
        })
    };
    f.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
    h.cssHooks.borderColor = {
        expand: function (a) {
            var b = {};
            k(["Top", "Right", "Bottom", "Left"], function (c, d) {
                b["border" + d + "Color"] = a
            });
            return b
        }
    };
    q = h.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }
})(jQuery);
(function ($) {
    $.fn.jCarouselLite = function (o) {
        o = $.extend({
            btnPrev: null,
            btnNext: null,
            btnGo: null,
            mouseWheel: false,
            auto: null,
            speed: 200,
            easing: null,
            vertical: false,
            circular: true,
            visible: 3,
            start: 0,
            scroll: 1,
            beforeStart: null,
            afterEnd: null
        }, o || {});
        return this.each(function () {
            var running = false, animCss = o.vertical ? "top" : "left", sizeCss = o.vertical ? "height" : "width";
            var div = $(this), ul = $("ul", div), tLi = $("li", ul), tl = tLi.size(), v = o.visible;
            if (o.circular) {
                ul.prepend(tLi.slice(tl - v - 1 + 1).clone()).append(tLi.slice(0, v).clone());
                o.start += v;
            }
            ;var li = $("li", ul), itemLength = li.size(), curr = o.start;
            div.css("visibility", "visible");
            li.css({overflow: "hidden", float: o.vertical ? "none" : "left"});
            ul.css({margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1"});
            div.css({overflow: "hidden", position: "relative", "z-index": "2"});
            var liSize, ulSize, divSize;

            function update() {
                ul.stop();
                liSize = o.vertical ? height(li) : width(li);
                ulSize = liSize * itemLength;
                divSize = liSize * v;
                ul.css(sizeCss, ulSize + "px").css(animCss, -(curr * liSize));
            };div.data("update", update);
            update();
            if (o.btnPrev) $(o.btnPrev).click(function () {
                return go(curr - o.scroll);
            });
            if (o.btnNext) $(o.btnNext).click(function () {
                return go(curr + o.scroll);
            });
            if (o.btnGo) $.each(o.btnGo, function (i, val) {
                $(val).click(function () {
                    return go(o.circular ? o.visible + i : i);
                });
            });
            if (o.mouseWheel && div.mousewheel) div.mousewheel(function (e, d) {
                return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll);
            });
            if (o.auto) setInterval(function () {
                go(curr + o.scroll);
            }, o.auto + o.speed);

            function vis() {
                return li.slice(curr).slice(0, v);
            };

            function go(to) {
                if (!running) {
                    if (o.beforeStart) o.beforeStart.call(this, vis());
                    if (o.circular) {
                        if (to <= o.start - v - 1) {
                            ul.css(animCss, -((itemLength - (v * 2)) * liSize) + "px");
                            curr = to == o.start - v - 1 ? itemLength - (v * 2) - 1 : itemLength - (v * 2) - o.scroll;
                        } else if (to >= itemLength - v + 1) {
                            ul.css(animCss, -((v) * liSize) + "px");
                            curr = to == itemLength - v + 1 ? v + 1 : v + o.scroll;
                        } else curr = to;
                    } else {
                        if (to < 0 || to > itemLength - v) return; else curr = to;
                    }
                    if (o.change) o.change.call(this, vis());
                    running = true;
                    ul.animate(animCss == "left" ? {left: -(curr * liSize)} : {top: -(curr * liSize)}, o.speed, o.easing, function () {
                        if (o.afterEnd) o.afterEnd.call(this, vis());
                        running = false;
                    });
                    if (!o.circular) {
                        $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
                        $((curr - o.scroll < 0 && o.btnPrev) || (curr + o.scroll > itemLength - v && o.btnNext) || []).addClass("disabled");
                    }
                }
                return false;
            };
        });
    };

    function css(el, prop) {
        return parseInt($.css(el[0], prop)) || 0;
    };

    function width(el) {
        return el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
    };

    function height(el) {
        return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
    };
})(jQuery);