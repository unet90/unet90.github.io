/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function (a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function (a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function () {
            return d.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function (a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return m.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === m.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function (a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function (b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function () {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + Q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function (a, b) {
                    H.apply(a, J.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (k = b.nodeType) && 9 !== k) return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function lb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function (b) {
                return b = +b, hb(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a : v,
                g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                m()
            })), c.attributes = ib(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function (a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function (a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g) return kb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function (a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: hb(function (a) {
                    return function (b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: hb(function (a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return Z.test(a.nodeName)
                },
                input: function (a) {
                    return Y.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function () {
                    return [0]
                }),
                last: nb(function (a, b) {
                    return [b - 1]
                }),
                eq: nb(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: nb(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: nb(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = lb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = mb(b);

        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };

        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
                    return a === b
                }, h, !0), l = rb(function (a) {
                    return K.call(b, a) > -1
                }, h, !0), m = [function (a, c, d) {
                    return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = G.call(i));
                            s = ub(s)
                        }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? hb(f) : f
        }
        return h = fb.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function (a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function (a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function (a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function (a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function (a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function (a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function (a) {
            return D(a, "nextSibling")
        },
        prev: function (a) {
            return D(a, "previousSibling")
        },
        nextAll: function (a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return m.sibling(a.firstChild)
        },
        contents: function (a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function (l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function () {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function (b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function () {
                    return h && m.each(arguments, function (a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function (a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function () {
                    return h = [], e = 0, this
                },
                disable: function () {
                    return h = i = c = void 0, this
                },
                disabled: function () {
                    return !h
                },
                lock: function () {
                    return i = void 0, c || k.disable(), this
                },
                locked: function () {
                    return !i
                },
                fireWith: function (a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function () {
                    return k.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return m.Deferred(function (c) {
                            m.each(b, function (b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function (a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function (a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function (b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function () {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function (a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function (a, b, c) {
            return Q(a, b, c)
        },
        removeData: function (a, b) {
            return R(a, b)
        },
        _data: function (a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function (a) {
            return this.each(function () {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function () {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function () {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function (a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function () {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function () {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function (a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== cb() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function () {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function (a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
                else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++]) ob.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function (a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b)
            })
        },
        html: function (a) {
            return V(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function (c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function () {
        var a;
        k.shrinkWrapBlocks = function () {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function (a) {
        return a.currentStyle
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Lb(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function () {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function () {
                    return null == g && i(), g
                },
                boxSizingReliable: function () {
                    return null == f && i(), f
                },
                pixelPosition: function () {
                    return null == e && i(), e
                },
                reliableMarginRight: function () {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a) return b;
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function (a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        m.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function (a, b) {
            return V(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return Vb(this, !0)
        },
        hide: function () {
            return Vb(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function (a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() {
        return setTimeout(function () {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide()
            }), n.done(function () {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
            tweener: function (a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
            },
            prefilter: function (a, b) {
                b ? dc.unshift(a) : dc.push(a)
            }
        }), m.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function () {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function (a, b) {
            var c = m.fn[b];
            m.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gc("show"),
            slideUp: gc("hide"),
            slideToggle: gc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            m.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function () {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function (a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function () {
            _b || (_b = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function () {
            clearInterval(_b), _b = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function (a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        function () {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {
            set: function (a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({
        attr: function (a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function (a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function (a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function (a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function (a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function (a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function (a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function (a) {
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b))
            } : function () {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = m.isFunction(a);
            return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function (b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function (a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function () {
        for (var a in Xc) Xc[a](void 0, !0)
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(),
                        g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function (d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cd
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function (b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function () {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});

jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (n, e, t, u, a) {
        return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
    },
    easeInQuad: function (n, e, t, u, a) {
        return u * (e /= a) * e + t
    },
    easeOutQuad: function (n, e, t, u, a) {
        return -u * (e /= a) * (e - 2) + t
    },
    easeInOutQuad: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
    },
    easeInCubic: function (n, e, t, u, a) {
        return u * (e /= a) * e * e + t
    },
    easeOutCubic: function (n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e + 1) + t
    },
    easeInOutCubic: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
    },
    easeInQuart: function (n, e, t, u, a) {
        return u * (e /= a) * e * e * e + t
    },
    easeOutQuart: function (n, e, t, u, a) {
        return -u * ((e = e / a - 1) * e * e * e - 1) + t
    },
    easeInOutQuart: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
    },
    easeInQuint: function (n, e, t, u, a) {
        return u * (e /= a) * e * e * e * e + t
    },
    easeOutQuint: function (n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e * e * e + 1) + t
    },
    easeInOutQuint: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
    },
    easeInSine: function (n, e, t, u, a) {
        return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
    },
    easeOutSine: function (n, e, t, u, a) {
        return u * Math.sin(e / a * (Math.PI / 2)) + t
    },
    easeInOutSine: function (n, e, t, u, a) {
        return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
    },
    easeInExpo: function (n, e, t, u, a) {
        return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
    },
    easeOutExpo: function (n, e, t, u, a) {
        return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
    },
    easeInOutExpo: function (n, e, t, u, a) {
        return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
    },
    easeInCirc: function (n, e, t, u, a) {
        return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
    },
    easeOutCirc: function (n, e, t, u, a) {
        return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
    },
    easeInOutCirc: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    },
    easeInElastic: function (n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t
    },
    easeOutElastic: function (n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
    },
    easeInOutElastic: function (n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (2 == (e /= a / 2)) return t + u;
        if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return e < 1 ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
    },
    easeInBack: function (n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
    },
    easeOutBack: function (n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
    },
    easeInOutBack: function (n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
    },
    easeInBounce: function (n, e, t, u, a) {
        return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
    },
    easeOutBounce: function (n, e, t, u, a) {
        return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : e < 2 / 2.75 ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },
    easeInOutBounce: function (n, e, t, u, a) {
        return e < a / 2 ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
    }
}); +
function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var a = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(a, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                a = n.data("bs.alert");
            a || n.data("bs.alert", a = new i(this)), "string" == typeof e && a[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function (e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var a = t(this),
            o = a.attr("data-target");
        o || (o = a.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t("#" === o ? [] : o);
        e && e.preventDefault(), s.length || (s = a.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var a = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = a, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                a = i.data("bs.button"),
                o = "object" == typeof e && e;
            a || i.data("bs.button", a = new n(this, o)), "toggle" == e ? a.toggle() : e && a.setState(e)
        })
    }
    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function (e) {
        var n = "disabled",
            i = this.$element,
            a = i.is("input") ? "val" : "html",
            o = i.data();
        e += "Text", null == o.resetText && i.data("resetText", i[a]()), setTimeout(t.proxy(function () {
            i[a](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                a = i.data("bs.carousel"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : o.slide;
            a || i.data("bs.carousel", a = new n(this, o)), "number" == typeof e ? a.to(e) : s ? a[s]() : o.interval && a.pause().cycle()
        })
    }
    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var a = "prev" == t ? -1 : 1,
            o = (n + a) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function (t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var a = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(e, a),
            s = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var d = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: d,
                direction: r
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(o)]);
                u && u.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: d,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, a.addClass(r), o.addClass(r), a.one("bsTransitionEnd", function () {
                o.removeClass([e, r].join(" ")).addClass("active"), a.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (a.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var a = function (n) {
        var i, a = t(this),
            o = t(a.attr("data-target") || (i = a.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = t.extend({}, o.data(), a.data()),
                r = a.attr("data-slide-to");
            r && (s.interval = !1), e.call(o, s), r && o.data("bs.carousel").to(r), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this),
                a = n.data("bs.collapse"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !a && o.toggle && /show|hide/.test(e) && (o.toggle = !1), a || n.data("bs.collapse", a = new i(this, o)), "string" == typeof e && a[e]()
        })
    }
    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(a && a.length && (e = a.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    a && a.length && (n.call(a, "hide"), e || a.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var a = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : a.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
            var a = t(i);
            this.addAriaAndCollapsedClass(e(a), a)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var a = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = a, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var a = t(this);
        a.attr("data-target") || i.preventDefault();
        var o = e(a),
            s = o.data("bs.collapse"),
            r = s ? "toggle" : a.data();
        n.call(o, r)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(a).remove(), t(o).each(function () {
            var i = t(this),
                a = e(i),
                o = {
                    relatedTarget: this
                };
            a.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(a[0], n.target) || (a.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), a.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function i(e) {
        return this.each(function () {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var a = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        s = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.7", s.prototype.toggle = function (i) {
        var a = t(this);
        if (!a.is(".disabled, :disabled")) {
            var o = e(a),
                s = o.hasClass("open");
            if (n(), !("ontouchstart" in window == 0 || "ontouchstart" in window == 1 && s)) {
                if (!s) {
                    "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                    var r = {
                        relatedTarget: this
                    };
                    if (o.trigger(i = t.Event("show.bs.dropdown", r)), i.isDefaultPrevented()) return;
                    a.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
                }
                return !1
            }
        }
    }, s.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var a = e(i),
                    s = a.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && a.find(o).trigger("focus"), i.trigger("click");
                var r = " li:not(.disabled):visible a",
                    l = a.find(".dropdown-menu" + r);
                if (l.length) {
                    var d = l.index(n.target);
                    38 == n.which && d > 0 && d--, 40 == n.which && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function (t) {
    "use strict";

    function e(e, i) {
        return this.each(function () {
            var a = t(this),
                o = a.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, a.data(), "object" == typeof e && e);
            o || a.data("bs.modal", o = new n(this, s)), "string" == typeof e ? o[e](i) : s.show && o.show(i)
        })
    }
    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this,
            a = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var a = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), a && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            a ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this,
            a = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && a;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + a).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this),
            a = i.attr("href"),
            o = t(i.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, "")),
            s = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(a) && a
            }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(o, s, this)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                a = i.data("bs.tooltip"),
                o = "object" == typeof e && e;
            !a && /destroy|hide/.test(e) || (a || i.data("bs.tooltip", a = new n(this, o)), "string" == typeof e && a[e]())
        })
    }
    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function (e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var a = this.options.trigger.split(" "), o = a.length; o--;) {
            var s = a[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var r = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var a = this,
                o = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                d = l.test(r);
            d && (r = r.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                u = o[0].offsetWidth,
                h = o[0].offsetHeight;
            if (d) {
                var f = r,
                    p = this.getPosition(this.$viewport);
                r = "bottom" == r && c.bottom + h > p.bottom ? "top" : "top" == r && c.top - h < p.top ? "bottom" : "right" == r && c.right + u > p.width ? "left" : "left" == r && c.left - u < p.left ? "right" : r, o.removeClass(f).addClass(r)
            }
            var m = this.getCalculatedOffset(r, c, u, h);
            this.applyPlacement(m, r);
            var g = function () {
                var t = a.hoverState;
                a.$element.trigger("shown.bs." + a.type), a.hoverState = null, "out" == t && a.leave(a)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(),
            a = i[0].offsetWidth,
            o = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            r = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(r) && (r = 0), e.top += s, e.left += r, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            d = i[0].offsetHeight;
        "top" == n && d != o && (e.top = e.top + o - d);
        var c = this.getViewportAdjustedDelta(n, e, l, d);
        c.left ? e.left += c.left : e.top += c.top;
        var u = /top|bottom/.test(n),
            h = u ? 2 * c.left - a + l : 2 * c.top - o + d,
            f = u ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(h, i[0][f], u)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != a.hoverState && o.detach(), a.$element && a.$element.removeAttr("aria-describedby").trigger("hidden.bs." + a.type), e && e()
        }
        var a = this,
            o = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            a = n.getBoundingClientRect();
        null == a.width && (a = t.extend({}, a, {
            width: a.right - a.left,
            height: a.bottom - a.top
        }));
        var o = window.SVGElement && n instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : o ? null : e.offset(),
            r = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, a, r, l, s)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var a = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return a;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - o - s.scroll,
                l = e.top + o - s.scroll + i;
            r < s.top ? a.top = s.top - r : l > s.top + s.height && (a.top = s.top + s.height - l)
        } else {
            var d = e.left - o,
                c = e.left + o + n;
            d < s.left ? a.left = s.left - d : c > s.right && (a.left = s.left + s.width - c)
        }
        return a
    }, n.prototype.getTitle = function () {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                a = i.data("bs.popover"),
                o = "object" == typeof e && e;
            !a && /destroy|hide/.test(e) || (a || i.data("bs.popover", a = new n(this, o)), "string" == typeof e && a[e]())
        })
    }
    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this),
                a = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            a || i.data("bs.scrollspy", a = new e(this, o)), "string" == typeof n && a[n]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this),
                a = e.data("target") || e.attr("href"),
                o = /^#./.test(a) && t(a);
            return o && o.length && o.is(":visible") && [[o[n]().top + i, a]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            a = this.offsets,
            o = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < a[0]) return this.activeTarget = null, this.clear();
        for (t = a.length; t--;) s != o[t] && e >= a[t] && (void 0 === a[t + 1] || e < a[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
            i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                a = i.data("bs.tab");
            a || i.data("bs.tab", a = new n(this)), "string" == typeof e && a[e]()
        })
    }
    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element,
            n = e.data("target"),
            i = e.closest('.nav.nav-tabs[role="tablist"]');
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent('[role="presentation"]').hasClass("active")) {
            var a = i.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: a[0]
                });
            if (a.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var r = t(n);
                this.activate(e.closest('[role="presentation"]'), i), this.activate(r, r.parent(), function () {
                    a.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: a[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, a) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest('[role="presentation"].dropdown').addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a()
        }
        var s = "tablist" == i.attr("role") ? i.find(".active") : i.find("> .active"),
            r = a && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && r ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var a = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                a = i.data("bs.affix"),
                o = "object" == typeof e && e;
            a || i.data("bs.affix", a = new n(this, o)), "string" == typeof e && a[e]()
        })
    }
    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var a = this.$target.scrollTop(),
            o = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return a < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(a + this.unpin <= o.top) && "bottom" : !(a + s <= t - i) && "bottom";
        var r = null == this.affixed,
            l = r ? a : o.top,
            d = r ? s : e;
        return null != n && a <= n ? "top" : null != i && l + d >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                a = i.top,
                o = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (o = a = i), "function" == typeof a && (a = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var r = this.getState(s, e, a, o);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    d = t.Event(l + ".bs.affix");
                if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: s - e - o
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function (t) {
    function e(t, e, n) {
        switch (arguments.length) {
            case 2:
                return null != t ? t : e;
            case 3:
                return null != t ? t : null != e ? e : n;
            default:
                throw new Error("Implement me")
        }
    }

    function n(t, e) {
        return Mt.call(t, e)
    }

    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function a(t) {
        _t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }

    function o(t, e) {
        var n = !0;
        return p(function () {
            return n && (a(t), n = !1), e.apply(this, arguments)
        }, e)
    }

    function s(t, e) {
        ve[t] || (a(e), ve[t] = !0)
    }

    function r(t, e) {
        return function (n) {
            return y(t.call(this, n), e)
        }
    }

    function l(t, e) {
        return function (n) {
            return this.localeData().ordinal(t.call(this, n), e)
        }
    }

    function d(t, e) {
        var n, i, a = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            o = t.clone().add(a, "months");
        return e - o < 0 ? (n = t.clone().add(a - 1, "months"), i = (e - o) / (o - n)) : (n = t.clone().add(a + 1, "months"), i = (e - o) / (n - o)), -(a + i)
    }

    function c(t, e, n) {
        var i;
        return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e
    }

    function u() {}

    function h(t, e) {
        e !== !1 && E(t), m(this, t), this._d = new Date((+t._d)), we === !1 && (we = !0, _t.updateOffset(this), we = !1)
    }

    function f(t) {
        var e = x(t),
            n = e.year || 0,
            i = e.quarter || 0,
            a = e.month || 0,
            o = e.week || 0,
            s = e.day || 0,
            r = e.hour || 0,
            l = e.minute || 0,
            d = e.second || 0,
            c = e.millisecond || 0;
        this._milliseconds = +c + 1e3 * d + 6e4 * l + 36e5 * r, this._days = +s + 7 * o, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = _t.localeData(), this._bubble()
    }

    function p(t, e) {
        for (var i in e) n(e, i) && (t[i] = e[i]);
        return n(e, "toString") && (t.toString = e.toString), n(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function m(t, e) {
        var n, i, a;
        if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), "undefined" != typeof e._i && (t._i = e._i), "undefined" != typeof e._f && (t._f = e._f), "undefined" != typeof e._l && (t._l = e._l), "undefined" != typeof e._strict && (t._strict = e._strict), "undefined" != typeof e._tzm && (t._tzm = e._tzm), "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC), "undefined" != typeof e._offset && (t._offset = e._offset), "undefined" != typeof e._pf && (t._pf = e._pf), "undefined" != typeof e._locale && (t._locale = e._locale), At.length > 0)
            for (n in At) i = At[n], a = e[i], "undefined" != typeof a && (t[i] = a);
        return t
    }

    function g(t) {
        return t < 0 ? Math.ceil(t) : Math.floor(t)
    }

    function y(t, e, n) {
        for (var i = "" + Math.abs(t), a = t >= 0; i.length < e;) i = "0" + i;
        return (a ? n ? "+" : "" : "-") + i
    }

    function v(t, e) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
    }

    function b(t, e) {
        var n;
        return e = F(e, t), t.isBefore(e) ? n = v(t, e) : (n = v(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n
    }

    function w(t, e) {
        return function (n, i) {
            var a, o;
            return null === i || isNaN(+i) || (s(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, a = _t.duration(n, i), _(this, a, t), this
        }
    }

    function _(t, e, n, i) {
        var a = e._milliseconds,
            o = e._days,
            s = e._months;
        i = null == i || i, a && t._d.setTime(+t._d + a * n), o && mt(t, "Date", pt(t, "Date") + o * n), s && ft(t, pt(t, "Month") + s * n), i && _t.updateOffset(t, o || s)
    }

    function k(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function D(t) {
        return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
    }

    function T(t, e, n) {
        var i, a = Math.min(t.length, e.length),
            o = Math.abs(t.length - e.length),
            s = 0;
        for (i = 0; i < a; i++)(n && t[i] !== e[i] || !n && S(t[i]) !== S(e[i])) && s++;
        return s + o
    }

    function C(t) {
        if (t) {
            var e = t.toLowerCase().replace(/(.)s$/, "$1");
            t = ue[t] || he[e] || e
        }
        return t
    }

    function x(t) {
        var e, i, a = {};
        for (i in t) n(t, i) && (e = C(i), e && (a[e] = t[i]));
        return a
    }

    function M(e) {
        var n, i;
        if (0 === e.indexOf("week")) n = 7, i = "day";
        else {
            if (0 !== e.indexOf("month")) return;
            n = 12, i = "month"
        }
        _t[e] = function (a, o) {
            var s, r, l = _t._locale[e],
                d = [];
            if ("number" == typeof a && (o = a, a = t), r = function (t) {
                    var e = _t().utc().set(i, t);
                    return l.call(_t._locale, e, a || "")
                }, null != o) return r(o);
            for (s = 0; s < n; s++) d.push(r(s));
            return d
        }
    }

    function S(t) {
        var e = +t,
            n = 0;
        return 0 !== e && isFinite(e) && (n = e >= 0 ? Math.floor(e) : Math.ceil(e)), n
    }

    function O(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }

    function Y(t, e, n) {
        return dt(_t([t, 11, 31 + e - n]), e, n).week
    }

    function $(t) {
        return I(t) ? 366 : 365
    }

    function I(t) {
        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    }

    function E(t) {
        var e;
        t._a && t._pf.overflow === -2 && (e = t._a[Ot] < 0 || t._a[Ot] > 11 ? Ot : t._a[Yt] < 1 || t._a[Yt] > O(t._a[St], t._a[Ot]) ? Yt : t._a[$t] < 0 || t._a[$t] > 24 || 24 === t._a[$t] && (0 !== t._a[It] || 0 !== t._a[Et] || 0 !== t._a[Pt]) ? $t : t._a[It] < 0 || t._a[It] > 59 ? It : t._a[Et] < 0 || t._a[Et] > 59 ? Et : t._a[Pt] < 0 || t._a[Pt] > 999 ? Pt : -1, t._pf._overflowDayOfYear && (e < St || e > Yt) && (e = Yt), t._pf.overflow = e)
    }

    function P(e) {
        return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length && e._pf.bigHour === t)), e._isValid
    }

    function L(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function A(t) {
        for (var e, n, i, a, o = 0; o < t.length;) {
            for (a = L(t[o]).split("-"), e = a.length, n = L(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                if (i = H(a.slice(0, e).join("-"))) return i;
                if (n && n.length >= e && T(a, n, !0) >= e - 1) break;
                e--
            }
            o++
        }
        return null
    }

    function H(t) {
        var e = null;
        if (!Lt[t] && Ht) try {
            e = _t.locale(), require("./locale/" + t), _t.locale(e)
        } catch (t) {}
        return Lt[t]
    }

    function F(t, e) {
        var n, i;
        return e._isUTC ? (n = e.clone(), i = (_t.isMoment(t) || D(t) ? +t : +_t(t)) - +n, n._d.setTime(+n._d + i), _t.updateOffset(n, !1), n) : _t(t).local()
    }

    function N(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function U(t) {
        var e, n, i = t.match(Wt);
        for (e = 0, n = i.length; e < n; e++) ye[i[e]] ? i[e] = ye[i[e]] : i[e] = N(i[e]);
        return function (a) {
            var o = "";
            for (e = 0; e < n; e++) o += i[e] instanceof Function ? i[e].call(a, t) : i[e];
            return o
        }
    }

    function W(t, e) {
        return t.isValid() ? (e = j(e, t.localeData()), fe[e] || (fe[e] = U(e)), fe[e](t)) : t.localeData().invalidDate()
    }

    function j(t, e) {
        function n(t) {
            return e.longDateFormat(t) || t
        }
        var i = 5;
        for (jt.lastIndex = 0; i >= 0 && jt.test(t);) t = t.replace(jt, n), jt.lastIndex = 0, i -= 1;
        return t
    }

    function R(t, e) {
        var n, i = e._strict;
        switch (t) {
            case "Q":
                return Kt;
            case "DDDD":
                return ee;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return i ? ne : Gt;
            case "Y":
            case "G":
            case "g":
                return ae;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return i ? ie : zt;
            case "S":
                if (i) return Kt;
            case "SS":
                if (i) return te;
            case "SSS":
                if (i) return ee;
            case "DDD":
                return Bt;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Vt;
            case "a":
            case "A":
                return e._locale._meridiemParse;
            case "x":
                return Xt;
            case "X":
                return Jt;
            case "Z":
            case "ZZ":
                return Qt;
            case "T":
                return Zt;
            case "SSSS":
                return qt;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return i ? te : Rt;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return Rt;
            case "Do":
                return i ? e._locale._ordinalParse : e._locale._ordinalParseLenient;
            default:
                return n = new RegExp(J(X(t.replace("\\", "")), "i"))
        }
    }

    function B(t) {
        t = t || "";
        var e = t.match(Qt) || [],
            n = e[e.length - 1] || [],
            i = (n + "").match(de) || ["-", 0, 0],
            a = +(60 * i[1]) + S(i[2]);
        return "+" === i[0] ? a : -a
    }

    function G(t, e, n) {
        var i, a = n._a;
        switch (t) {
            case "Q":
                null != e && (a[Ot] = 3 * (S(e) - 1));
                break;
            case "M":
            case "MM":
                null != e && (a[Ot] = S(e) - 1);
                break;
            case "MMM":
            case "MMMM":
                i = n._locale.monthsParse(e, t, n._strict), null != i ? a[Ot] = i : n._pf.invalidMonth = e;
                break;
            case "D":
            case "DD":
                null != e && (a[Yt] = S(e));
                break;
            case "Do":
                null != e && (a[Yt] = S(parseInt(e.match(/\d{1,2}/)[0], 10)));
                break;
            case "DDD":
            case "DDDD":
                null != e && (n._dayOfYear = S(e));
                break;
            case "YY":
                a[St] = _t.parseTwoDigitYear(e);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                a[St] = S(e);
                break;
            case "a":
            case "A":
                n._meridiem = e;
                break;
            case "h":
            case "hh":
                n._pf.bigHour = !0;
            case "H":
            case "HH":
                a[$t] = S(e);
                break;
            case "m":
            case "mm":
                a[It] = S(e);
                break;
            case "s":
            case "ss":
                a[Et] = S(e);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                a[Pt] = S(1e3 * ("0." + e));
                break;
            case "x":
                n._d = new Date(S(e));
                break;
            case "X":
                n._d = new Date(1e3 * parseFloat(e));
                break;
            case "Z":
            case "ZZ":
                n._useUTC = !0, n._tzm = B(e);
                break;
            case "dd":
            case "ddd":
            case "dddd":
                i = n._locale.weekdaysParse(e), null != i ? (n._w = n._w || {}, n._w.d = i) : n._pf.invalidWeekday = e;
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "e":
            case "E":
                t = t.substr(0, 1);
            case "gggg":
            case "GGGG":
            case "GGGGG":
                t = t.substr(0, 2), e && (n._w = n._w || {}, n._w[t] = S(e));
                break;
            case "gg":
            case "GG":
                n._w = n._w || {}, n._w[t] = _t.parseTwoDigitYear(e)
        }
    }

    function z(t) {
        var n, i, a, o, s, r, l;
        n = t._w, null != n.GG || null != n.W || null != n.E ? (s = 1, r = 4, i = e(n.GG, t._a[St], dt(_t(), 1, 4).year), a = e(n.W, 1), o = e(n.E, 1)) : (s = t._locale._week.dow, r = t._locale._week.doy, i = e(n.gg, t._a[St], dt(_t(), s, r).year), a = e(n.w, 1), null != n.d ? (o = n.d, o < s && ++a) : o = null != n.e ? n.e + s : s), l = ct(i, a, o, r, s), t._a[St] = l.year, t._dayOfYear = l.dayOfYear
    }

    function q(t) {
        var n, i, a, o, s = [];
        if (!t._d) {
            for (a = Q(t), t._w && null == t._a[Yt] && null == t._a[Ot] && z(t), t._dayOfYear && (o = e(t._a[St], a[St]), t._dayOfYear > $(o) && (t._pf._overflowDayOfYear = !0), i = ot(o, 0, t._dayOfYear), t._a[Ot] = i.getUTCMonth(), t._a[Yt] = i.getUTCDate()), n = 0; n < 3 && null == t._a[n]; ++n) t._a[n] = s[n] = a[n];
            for (; n < 7; n++) t._a[n] = s[n] = null == t._a[n] ? 2 === n ? 1 : 0 : t._a[n];
            24 === t._a[$t] && 0 === t._a[It] && 0 === t._a[Et] && 0 === t._a[Pt] && (t._nextDay = !0, t._a[$t] = 0), t._d = (t._useUTC ? ot : at).apply(null, s), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[$t] = 24)
        }
    }

    function V(t) {
        var e;
        t._d || (e = x(t._i), t._a = [e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], q(t))
    }

    function Q(t) {
        var e = new Date;
        return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
    }

    function Z(e) {
        if (e._f === _t.ISO_8601) return void tt(e);
        e._a = [], e._pf.empty = !0;
        var n, i, a, o, s, r = "" + e._i,
            l = r.length,
            d = 0;
        for (a = j(e._f, e._locale).match(Wt) || [], n = 0; n < a.length; n++) o = a[n], i = (r.match(R(o, e)) || [])[0], i && (s = r.substr(0, r.indexOf(i)), s.length > 0 && e._pf.unusedInput.push(s), r = r.slice(r.indexOf(i) + i.length), d += i.length), ye[o] ? (i ? e._pf.empty = !1 : e._pf.unusedTokens.push(o), G(o, i, e)) : e._strict && !i && e._pf.unusedTokens.push(o);
        e._pf.charsLeftOver = l - d, r.length > 0 && e._pf.unusedInput.push(r), e._pf.bigHour === !0 && e._a[$t] <= 12 && (e._pf.bigHour = t), e._a[$t] = c(e._locale, e._a[$t], e._meridiem), q(e), E(e)
    }

    function X(t) {
        return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, a) {
            return e || n || i || a
        })
    }

    function J(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function K(t) {
        var e, n, a, o, s;
        if (0 === t._f.length) return t._pf.invalidFormat = !0, void(t._d = new Date(NaN));
        for (o = 0; o < t._f.length; o++) s = 0, e = m({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._pf = i(), e._f = t._f[o], Z(e), P(e) && (s += e._pf.charsLeftOver, s += 10 * e._pf.unusedTokens.length, e._pf.score = s, (null == a || s < a) && (a = s, n = e));
        p(t, n || e)
    }

    function tt(t) {
        var e, n, i = t._i,
            a = oe.exec(i);
        if (a) {
            for (t._pf.iso = !0, e = 0, n = re.length; e < n; e++)
                if (re[e][1].exec(i)) {
                    t._f = re[e][0] + (a[6] || " ");
                    break
                }
            for (e = 0, n = le.length; e < n; e++)
                if (le[e][1].exec(i)) {
                    t._f += le[e][0];
                    break
                }
            i.match(Qt) && (t._f += "Z"), Z(t)
        } else t._isValid = !1
    }

    function et(t) {
        tt(t), t._isValid === !1 && (delete t._isValid, _t.createFromInputFallback(t))
    }

    function nt(t, e) {
        var n, i = [];
        for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
        return i
    }

    function it(e) {
        var n, i = e._i;
        i === t ? e._d = new Date : D(i) ? e._d = new Date((+i)) : null !== (n = Ft.exec(i)) ? e._d = new Date((+n[1])) : "string" == typeof i ? et(e) : k(i) ? (e._a = nt(i.slice(0), function (t) {
            return parseInt(t, 10)
        }), q(e)) : "object" == typeof i ? V(e) : "number" == typeof i ? e._d = new Date(i) : _t.createFromInputFallback(e)
    }

    function at(t, e, n, i, a, o, s) {
        var r = new Date(t, e, n, i, a, o, s);
        return t < 1970 && r.setFullYear(t), r
    }

    function ot(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return t < 1970 && e.setUTCFullYear(t), e
    }

    function st(t, e) {
        if ("string" == typeof t)
            if (isNaN(t)) {
                if (t = e.weekdaysParse(t), "number" != typeof t) return null
            } else t = parseInt(t, 10);
        return t
    }

    function rt(t, e, n, i, a) {
        return a.relativeTime(e || 1, !!n, t, i)
    }

    function lt(t, e, n) {
        var i = _t.duration(t).abs(),
            a = xt(i.as("s")),
            o = xt(i.as("m")),
            s = xt(i.as("h")),
            r = xt(i.as("d")),
            l = xt(i.as("M")),
            d = xt(i.as("y")),
            c = a < pe.s && ["s", a] || 1 === o && ["m"] || o < pe.m && ["mm", o] || 1 === s && ["h"] || s < pe.h && ["hh", s] || 1 === r && ["d"] || r < pe.d && ["dd", r] || 1 === l && ["M"] || l < pe.M && ["MM", l] || 1 === d && ["y"] || ["yy", d];
        return c[2] = e, c[3] = +t > 0, c[4] = n, rt.apply({}, c)
    }

    function dt(t, e, n) {
        var i, a = n - e,
            o = n - t.day();
        return o > a && (o -= 7), o < a - 7 && (o += 7), i = _t(t).add(o, "d"), {
            week: Math.ceil(i.dayOfYear() / 7),
            year: i.year()
        }
    }

    function ct(t, e, n, i, a) {
        var o, s, r = ot(t, 0, 1).getUTCDay();
        return r = 0 === r ? 7 : r, n = null != n ? n : a, o = a - r + (r > i ? 7 : 0) - (r < a ? 7 : 0), s = 7 * (e - 1) + (n - a) + o + 1, {
            year: s > 0 ? t : t - 1,
            dayOfYear: s > 0 ? s : $(t - 1) + s
        }
    }

    function ut(e) {
        var n, i = e._i,
            a = e._f;
        return e._locale = e._locale || _t.localeData(e._l), null === i || a === t && "" === i ? _t.invalid({
            nullInput: !0
        }) : ("string" == typeof i && (e._i = i = e._locale.preparse(i)), _t.isMoment(i) ? new h(i, (!0)) : (a ? k(a) ? K(e) : Z(e) : it(e), n = new h(e), n._nextDay && (n.add(1, "d"), n._nextDay = t), n))
    }

    function ht(t, e) {
        var n, i;
        if (1 === e.length && k(e[0]) && (e = e[0]), !e.length) return _t();
        for (n = e[0], i = 1; i < e.length; ++i) e[i][t](n) && (n = e[i]);
        return n
    }

    function ft(t, e) {
        var n;
        return "string" == typeof e && (e = t.localeData().monthsParse(e), "number" != typeof e) ? t : (n = Math.min(t.date(), O(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t)
    }

    function pt(t, e) {
        return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
    }

    function mt(t, e, n) {
        return "Month" === e ? ft(t, n) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
    }

    function gt(t, e) {
        return function (n) {
            return null != n ? (mt(this, t, n), _t.updateOffset(this, e), this) : pt(this, t)
        }
    }

    function yt(t) {
        return 400 * t / 146097
    }

    function vt(t) {
        return 146097 * t / 400
    }

    function bt(t) {
        _t.duration.fn[t] = function () {
            return this._data[t]
        }
    }

    function wt(t) {
        "undefined" == typeof ender && (kt = Ct.moment, t ? Ct.moment = o("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", _t) : Ct.moment = _t)
    }
    for (var _t, kt, Dt, Tt = "2.9.0", Ct = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, xt = Math.round, Mt = Object.prototype.hasOwnProperty, St = 0, Ot = 1, Yt = 2, $t = 3, It = 4, Et = 5, Pt = 6, Lt = {}, At = [], Ht = "undefined" != typeof module && module && module.exports, Ft = /^\/?Date\((\-?\d+)/i, Nt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ut = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Wt = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, jt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rt = /\d\d?/, Bt = /\d{1,3}/, Gt = /\d{1,4}/, zt = /[+\-]?\d{1,6}/, qt = /\d+/, Vt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Qt = /Z|[\+\-]\d\d:?\d\d/gi, Zt = /T/i, Xt = /[\+\-]?\d+/, Jt = /[\+\-]?\d+(\.\d{1,3})?/, Kt = /\d/, te = /\d\d/, ee = /\d{3}/, ne = /\d{4}/, ie = /[+-]?\d{6}/, ae = /[+-]?\d+/, oe = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, se = "YYYY-MM-DDTHH:mm:ssZ", re = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], le = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], de = /([\+\-]|\d\d)/gi, ce = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }), ue = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, he = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, fe = {}, pe = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, me = "DDD w W M D d".split(" "), ge = "M D H h m s w W".split(" "), ye = {
            M: function () {
                return this.month() + 1
            },
            MMM: function (t) {
                return this.localeData().monthsShort(this, t)
            },
            MMMM: function (t) {
                return this.localeData().months(this, t)
            },
            D: function () {
                return this.date()
            },
            DDD: function () {
                return this.dayOfYear()
            },
            d: function () {
                return this.day()
            },
            dd: function (t) {
                return this.localeData().weekdaysMin(this, t)
            },
            ddd: function (t) {
                return this.localeData().weekdaysShort(this, t)
            },
            dddd: function (t) {
                return this.localeData().weekdays(this, t)
            },
            w: function () {
                return this.week()
            },
            W: function () {
                return this.isoWeek()
            },
            YY: function () {
                return y(this.year() % 100, 2)
            },
            YYYY: function () {
                return y(this.year(), 4)
            },
            YYYYY: function () {
                return y(this.year(), 5)
            },
            YYYYYY: function () {
                var t = this.year(),
                    e = t >= 0 ? "+" : "-";
                return e + y(Math.abs(t), 6)
            },
            gg: function () {
                return y(this.weekYear() % 100, 2)
            },
            gggg: function () {
                return y(this.weekYear(), 4)
            },
            ggggg: function () {
                return y(this.weekYear(), 5)
            },
            GG: function () {
                return y(this.isoWeekYear() % 100, 2)
            },
            GGGG: function () {
                return y(this.isoWeekYear(), 4)
            },
            GGGGG: function () {
                return y(this.isoWeekYear(), 5)
            },
            e: function () {
                return this.weekday()
            },
            E: function () {
                return this.isoWeekday()
            },
            a: function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function () {
                return this.hours()
            },
            h: function () {
                return this.hours() % 12 || 12
            },
            m: function () {
                return this.minutes()
            },
            s: function () {
                return this.seconds()
            },
            S: function () {
                return S(this.milliseconds() / 100)
            },
            SS: function () {
                return y(S(this.milliseconds() / 10), 2)
            },
            SSS: function () {
                return y(this.milliseconds(), 3)
            },
            SSSS: function () {
                return y(this.milliseconds(), 3)
            },
            Z: function () {
                var t = this.utcOffset(),
                    e = "+";
                return t < 0 && (t = -t, e = "-"), e + y(S(t / 60), 2) + ":" + y(S(t) % 60, 2)
            },
            ZZ: function () {
                var t = this.utcOffset(),
                    e = "+";
                return t < 0 && (t = -t, e = "-"), e + y(S(t / 60), 2) + y(S(t) % 60, 2)
            },
            z: function () {
                return this.zoneAbbr()
            },
            zz: function () {
                return this.zoneName()
            },
            x: function () {
                return this.valueOf()
            },
            X: function () {
                return this.unix()
            },
            Q: function () {
                return this.quarter()
            }
        }, ve = {}, be = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], we = !1; me.length;) Dt = me.pop(), ye[Dt + "o"] = l(ye[Dt], Dt);
    for (; ge.length;) Dt = ge.pop(), ye[Dt + Dt] = r(ye[Dt], 2);
    ye.DDDD = r(ye.DDD, 3), p(u.prototype, {
        set: function (t) {
            var e, n;
            for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function (t) {
            return this._months[t.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function (t) {
            return this._monthsShort[t.month()]
        },
        monthsParse: function (t, e, n) {
            var i, a, o;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                if (a = _t.utc([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
                if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
                if (!n && this._monthsParse[i].test(t)) return i
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function (t) {
            return this._weekdays[t.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function (t) {
            return this._weekdaysShort[t.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function (t) {
            return this._weekdaysMin[t.day()]
        },
        weekdaysParse: function (t) {
            var e, n, i;
            for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; e < 7; e++)
                if (this._weekdaysParse[e] || (n = _t([2e3, 1]).day(e), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
        },
        _longDateFormat: {
            LTS: "H:mm:ss",
            LT: "H:mm",
            L: "MM.DD.YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function (t) {
            var e = this._longDateFormat[t];
            return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (t) {
                return t.slice(1)
            }), this._longDateFormat[t] = e), e
        },
        isPM: function (t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function (t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function (t, e, n) {
            var i = this._calendar[t];
            return "function" == typeof i ? i.apply(e, [n]) : i
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function (t, e, n, i) {
            var a = this._relativeTime[n];
            return "function" == typeof a ? a(t, e, n, i) : a.replace(/%d/i, t)
        },
        pastFuture: function (t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
        },
        ordinal: function (t) {
            return this._ordinal.replace("%d", t)
        },
        _ordinal: "%d",
        _ordinalParse: /\d{1,2}/,
        preparse: function (t) {
            return t
        },
        postformat: function (t) {
            return t
        },
        week: function (t) {
            return dt(t, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        firstDayOfWeek: function () {
            return this._week.dow
        },
        firstDayOfYear: function () {
            return this._week.doy
        },
        _invalidDate: "Invalid date",
        invalidDate: function () {
            return this._invalidDate
        }
    }), _t = function (e, n, a, o) {
        var s;
        return "boolean" == typeof a && (o = a, a = t), s = {}, s._isAMomentObject = !0, s._i = e, s._f = n, s._l = a, s._strict = o, s._isUTC = !1, s._pf = i(), ut(s)
    }, _t.suppressDeprecationWarnings = !1, _t.createFromInputFallback = o("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), _t.min = function () {
        var t = [].slice.call(arguments, 0);
        return ht("isBefore", t)
    }, _t.max = function () {
        var t = [].slice.call(arguments, 0);
        return ht("isAfter", t)
    }, _t.utc = function (e, n, a, o) {
        var s;
        return "boolean" == typeof a && (o = a, a = t), s = {}, s._isAMomentObject = !0, s._useUTC = !0, s._isUTC = !0, s._l = a, s._i = e, s._f = n, s._strict = o, s._pf = i(), ut(s).utc()
    }, _t.unix = function (t) {
        return _t(1e3 * t)
    }, _t.duration = function (t, e) {
        var i, a, o, s, r = t,
            l = null;
        return _t.isDuration(t) ? r = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (r = {}, e ? r[e] = t : r.milliseconds = t) : (l = Nt.exec(t)) ? (i = "-" === l[1] ? -1 : 1, r = {
            y: 0,
            d: S(l[Yt]) * i,
            h: S(l[$t]) * i,
            m: S(l[It]) * i,
            s: S(l[Et]) * i,
            ms: S(l[Pt]) * i
        }) : (l = Ut.exec(t)) ? (i = "-" === l[1] ? -1 : 1, o = function (t) {
            var e = t && parseFloat(t.replace(",", "."));
            return (isNaN(e) ? 0 : e) * i
        }, r = {
            y: o(l[2]),
            M: o(l[3]),
            d: o(l[4]),
            h: o(l[5]),
            m: o(l[6]),
            s: o(l[7]),
            w: o(l[8])
        }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (s = b(_t(r.from), _t(r.to)), r = {}, r.ms = s.milliseconds, r.M = s.months), a = new f(r), _t.isDuration(t) && n(t, "_locale") && (a._locale = t._locale), a
    }, _t.version = Tt, _t.defaultFormat = se, _t.ISO_8601 = function () {}, _t.momentProperties = At, _t.updateOffset = function () {}, _t.relativeTimeThreshold = function (e, n) {
        return pe[e] !== t && (n === t ? pe[e] : (pe[e] = n, !0))
    }, _t.lang = o("moment.lang is deprecated. Use moment.locale instead.", function (t, e) {
        return _t.locale(t, e)
    }), _t.locale = function (t, e) {
        var n;
        return t && (n = "undefined" != typeof e ? _t.defineLocale(t, e) : _t.localeData(t), n && (_t.duration._locale = _t._locale = n)), _t._locale._abbr
    }, _t.defineLocale = function (t, e) {
        return null !== e ? (e.abbr = t, Lt[t] || (Lt[t] = new u), Lt[t].set(e), _t.locale(t), Lt[t]) : (delete Lt[t], null)
    }, _t.langData = o("moment.langData is deprecated. Use moment.localeData instead.", function (t) {
        return _t.localeData(t)
    }), _t.localeData = function (t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return _t._locale;
        if (!k(t)) {
            if (e = H(t)) return e;
            t = [t]
        }
        return A(t)
    }, _t.isMoment = function (t) {
        return t instanceof h || null != t && n(t, "_isAMomentObject")
    }, _t.isDuration = function (t) {
        return t instanceof f
    };
    for (Dt = be.length - 1; Dt >= 0; --Dt) M(be[Dt]);
    _t.normalizeUnits = function (t) {
        return C(t)
    }, _t.invalid = function (t) {
        var e = _t.utc(NaN);
        return null != t ? p(e._pf, t) : e._pf.userInvalidated = !0, e
    }, _t.parseZone = function () {
        return _t.apply(null, arguments).parseZone()
    }, _t.parseTwoDigitYear = function (t) {
        return S(t) + (S(t) > 68 ? 1900 : 2e3)
    }, _t.isDate = D, p(_t.fn = h.prototype, {
        clone: function () {
            return _t(this)
        },
        valueOf: function () {
            return +this._d - 6e4 * (this._offset || 0)
        },
        unix: function () {
            return Math.floor(+this / 1e3)
        },
        toString: function () {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function () {
            return this._offset ? new Date((+this)) : this._d
        },
        toISOString: function () {
            var t = _t(this).utc();
            return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : W(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : W(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function () {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
        },
        isValid: function () {
            return P(this)
        },
        isDSTShifted: function () {
            return !!this._a && (this.isValid() && T(this._a, (this._isUTC ? _t.utc(this._a) : _t(this._a)).toArray()) > 0)
        },
        parsingFlags: function () {
            return p({}, this._pf)
        },
        invalidAt: function () {
            return this._pf.overflow
        },
        utc: function (t) {
            return this.utcOffset(0, t)
        },
        local: function (t) {
            return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(this._dateUtcOffset(), "m")), this
        },
        format: function (t) {
            var e = W(this, t || _t.defaultFormat);
            return this.localeData().postformat(e)
        },
        add: w(1, "add"),
        subtract: w(-1, "subtract"),
        diff: function (t, e, n) {
            var i, a, o = F(t, this),
                s = 6e4 * (o.utcOffset() - this.utcOffset());
            return e = C(e), "year" === e || "month" === e || "quarter" === e ? (a = d(this, o), "quarter" === e ? a /= 3 : "year" === e && (a /= 12)) : (i = this - o, a = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - s) / 864e5 : "week" === e ? (i - s) / 6048e5 : i), n ? a : g(a)
        },
        from: function (t, e) {
            return _t.duration({
                to: this,
                from: t
            }).locale(this.locale()).humanize(!e)
        },
        fromNow: function (t) {
            return this.from(_t(), t)
        },
        calendar: function (t) {
            var e = t || _t(),
                n = F(e, this).startOf("day"),
                i = this.diff(n, "days", !0),
                a = i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(a, this, _t(e)))
        },
        isLeapYear: function () {
            return I(this.year())
        },
        isDST: function () {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        },
        day: function (t) {
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? (t = st(t, this.localeData()), this.add(t - e, "d")) : e
        },
        month: gt("Month", !0),
        startOf: function (t) {
            switch (t = C(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t ? this.weekday(0) : "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function (e) {
            return e = C(e), e === t || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
        },
        isAfter: function (t, e) {
            var n;
            return e = C("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = _t.isMoment(t) ? t : _t(t), +this > +t) : (n = _t.isMoment(t) ? +t : +_t(t), n < +this.clone().startOf(e))
        },
        isBefore: function (t, e) {
            var n;
            return e = C("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = _t.isMoment(t) ? t : _t(t), +this < +t) : (n = _t.isMoment(t) ? +t : +_t(t), +this.clone().endOf(e) < n)
        },
        isBetween: function (t, e, n) {
            return this.isAfter(t, n) && this.isBefore(e, n);
        },
        isSame: function (t, e) {
            var n;
            return e = C(e || "millisecond"), "millisecond" === e ? (t = _t.isMoment(t) ? t : _t(t), +this === +t) : (n = +_t(t), +this.clone().startOf(e) <= n && n <= +this.clone().endOf(e))
        },
        min: o("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (t) {
            return t = _t.apply(null, arguments), t < this ? this : t
        }),
        max: o("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (t) {
            return t = _t.apply(null, arguments), t > this ? this : t
        }),
        zone: o("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function (t, e) {
            return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
        }),
        utcOffset: function (t, e) {
            var n, i = this._offset || 0;
            return null != t ? ("string" == typeof t && (t = B(t)), Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && e && (n = this._dateUtcOffset()), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), i !== t && (!e || this._changeInProgress ? _(this, _t.duration(t - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, _t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : this._dateUtcOffset()
        },
        isLocal: function () {
            return !this._isUTC
        },
        isUtcOffset: function () {
            return this._isUTC
        },
        isUtc: function () {
            return this._isUTC && 0 === this._offset
        },
        zoneAbbr: function () {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function () {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function () {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(B(this._i)), this
        },
        hasAlignedHourOffset: function (t) {
            return t = t ? _t(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0
        },
        daysInMonth: function () {
            return O(this.year(), this.month())
        },
        dayOfYear: function (t) {
            var e = xt((_t(this).startOf("day") - _t(this).startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add(t - e, "d")
        },
        quarter: function (t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
        },
        weekYear: function (t) {
            var e = dt(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == t ? e : this.add(t - e, "y")
        },
        isoWeekYear: function (t) {
            var e = dt(this, 1, 4).year;
            return null == t ? e : this.add(t - e, "y")
        },
        week: function (t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d")
        },
        isoWeek: function (t) {
            var e = dt(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d")
        },
        weekday: function (t) {
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d")
        },
        isoWeekday: function (t) {
            return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
        },
        isoWeeksInYear: function () {
            return Y(this.year(), 1, 4)
        },
        weeksInYear: function () {
            var t = this.localeData()._week;
            return Y(this.year(), t.dow, t.doy)
        },
        get: function (t) {
            return t = C(t), this[t]()
        },
        set: function (t, e) {
            var n;
            if ("object" == typeof t)
                for (n in t) this.set(n, t[n]);
            else t = C(t), "function" == typeof this[t] && this[t](e);
            return this
        },
        locale: function (e) {
            var n;
            return e === t ? this._locale._abbr : (n = _t.localeData(e), null != n && (this._locale = n), this)
        },
        lang: o("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
            return e === t ? this.localeData() : this.locale(e)
        }),
        localeData: function () {
            return this._locale
        },
        _dateUtcOffset: function () {
            return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
        }
    }), _t.fn.millisecond = _t.fn.milliseconds = gt("Milliseconds", !1), _t.fn.second = _t.fn.seconds = gt("Seconds", !1), _t.fn.minute = _t.fn.minutes = gt("Minutes", !1), _t.fn.hour = _t.fn.hours = gt("Hours", !0), _t.fn.date = gt("Date", !0), _t.fn.dates = o("dates accessor is deprecated. Use date instead.", gt("Date", !0)), _t.fn.year = gt("FullYear", !0), _t.fn.years = o("years accessor is deprecated. Use year instead.", gt("FullYear", !0)), _t.fn.days = _t.fn.day, _t.fn.months = _t.fn.month, _t.fn.weeks = _t.fn.week, _t.fn.isoWeeks = _t.fn.isoWeek, _t.fn.quarters = _t.fn.quarter, _t.fn.toJSON = _t.fn.toISOString, _t.fn.isUTC = _t.fn.isUtc, p(_t.duration.fn = f.prototype, {
        _bubble: function () {
            var t, e, n, i = this._milliseconds,
                a = this._days,
                o = this._months,
                s = this._data,
                r = 0;
            s.milliseconds = i % 1e3, t = g(i / 1e3), s.seconds = t % 60, e = g(t / 60), s.minutes = e % 60, n = g(e / 60), s.hours = n % 24, a += g(n / 24), r = g(yt(a)), a -= g(vt(r)), o += g(a / 30), a %= 30, r += g(o / 12), o %= 12, s.days = a, s.months = o, s.years = r
        },
        abs: function () {
            return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
        },
        weeks: function () {
            return g(this.days() / 7)
        },
        valueOf: function () {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * S(this._months / 12)
        },
        humanize: function (t) {
            var e = lt(this, !t, this.localeData());
            return t && (e = this.localeData().pastFuture(+this, e)), this.localeData().postformat(e)
        },
        add: function (t, e) {
            var n = _t.duration(t, e);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
        },
        subtract: function (t, e) {
            var n = _t.duration(t, e);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
        },
        get: function (t) {
            return t = C(t), this[t.toLowerCase() + "s"]()
        },
        as: function (t) {
            var e, n;
            if (t = C(t), "month" === t || "year" === t) return e = this._days + this._milliseconds / 864e5, n = this._months + 12 * yt(e), "month" === t ? n : n / 12;
            switch (e = this._days + Math.round(vt(this._months / 12)), t) {
                case "week":
                    return e / 7 + this._milliseconds / 6048e5;
                case "day":
                    return e + this._milliseconds / 864e5;
                case "hour":
                    return 24 * e + this._milliseconds / 36e5;
                case "minute":
                    return 24 * e * 60 + this._milliseconds / 6e4;
                case "second":
                    return 24 * e * 60 * 60 + this._milliseconds / 1e3;
                case "millisecond":
                    return Math.floor(24 * e * 60 * 60 * 1e3) + this._milliseconds;
                default:
                    throw new Error("Unknown unit " + t)
            }
        },
        lang: _t.fn.lang,
        locale: _t.fn.locale,
        toIsoString: o("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () {
            return this.toISOString()
        }),
        toISOString: function () {
            var t = Math.abs(this.years()),
                e = Math.abs(this.months()),
                n = Math.abs(this.days()),
                i = Math.abs(this.hours()),
                a = Math.abs(this.minutes()),
                o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (n ? n + "D" : "") + (i || a || o ? "T" : "") + (i ? i + "H" : "") + (a ? a + "M" : "") + (o ? o + "S" : "") : "P0D"
        },
        localeData: function () {
            return this._locale
        },
        toJSON: function () {
            return this.toISOString()
        }
    }), _t.duration.fn.toString = _t.duration.fn.toISOString;
    for (Dt in ce) n(ce, Dt) && bt(Dt.toLowerCase());
    _t.duration.fn.asMilliseconds = function () {
            return this.as("ms")
        }, _t.duration.fn.asSeconds = function () {
            return this.as("s")
        }, _t.duration.fn.asMinutes = function () {
            return this.as("m")
        }, _t.duration.fn.asHours = function () {
            return this.as("h")
        }, _t.duration.fn.asDays = function () {
            return this.as("d")
        }, _t.duration.fn.asWeeks = function () {
            return this.as("weeks")
        }, _t.duration.fn.asMonths = function () {
            return this.as("M")
        }, _t.duration.fn.asYears = function () {
            return this.as("y")
        }, _t.locale("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (t) {
                var e = t % 10,
                    n = 1 === S(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            }
        }),
        function (t) {
            t(_t)
        }(function (t) {
            function e(t, e) {
                var n = t.split("_");
                return e % 10 === 1 && e % 100 !== 11 ? n[0] : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? n[1] : n[2]
            }

            function n(t, n, i) {
                var a = {
                    mm: n ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",
                    hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",
                    dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",
                    MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",
                    yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"
                };
                return "m" === i ? n ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : t + " " + e(a[i], +t)
            }

            function i(t, e) {
                var n = {
                        nominative: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),
                        accusative: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_")
                    },
                    i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? "accusative" : "nominative";
                return n[i][t.month()]
            }

            function a(t, e) {
                var n = {
                        nominative: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
                        accusative: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_")
                    },
                    i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? "accusative" : "nominative";
                return n[i][t.month()]
            }

            function o(t, e) {
                var n = {
                        nominative: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),
                        accusative: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_")
                    },
                    i = /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?\] ?dddd/.test(e) ? "accusative" : "nominative";
                return n[i][t.day()]
            }
            return t.defineLocale("ru", {
                months: i,
                monthsShort: a,
                weekdays: o,
                weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
                weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
                monthsParse: [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹|Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i],
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY Ð³.",
                    LLL: "D MMMM YYYY Ð³., LT",
                    LLLL: "dddd, D MMMM YYYY Ð³., LT"
                },
                calendar: {
                    sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ Ð²] LT",
                    nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð° Ð²] LT",
                    lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
                    nextWeek: function () {
                        return 2 === this.day() ? "[Ð’Ð¾] dddd [Ð²] LT" : "[Ð’] dddd [Ð²] LT"
                    },
                    lastWeek: function (t) {
                        if (t.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd [Ð²] LT" : "[Ð’] dddd [Ð²] LT";
                        switch (this.day()) {
                            case 0:
                                return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd [Ð²] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd [Ð²] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd [Ð²] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ñ‡ÐµÑ€ÐµÐ· %s",
                    past: "%s Ð½Ð°Ð·Ð°Ð´",
                    s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",
                    m: n,
                    mm: n,
                    h: "Ñ‡Ð°Ñ",
                    hh: n,
                    d: "Ð´ÐµÐ½ÑŒ",
                    dd: n,
                    M: "Ð¼ÐµÑÑÑ†",
                    MM: n,
                    y: "Ð³Ð¾Ð´",
                    yy: n
                },
                meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
                isPM: function (t) {
                    return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(t)
                },
                meridiem: function (t, e, n) {
                    return t < 4 ? "Ð½Ð¾Ñ‡Ð¸" : t < 12 ? "ÑƒÑ‚Ñ€Ð°" : t < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°"
                },
                ordinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
                ordinal: function (t, e) {
                    switch (e) {
                        case "M":
                        case "d":
                        case "DDD":
                            return t + "-Ð¹";
                        case "D":
                            return t + "-Ð³Ð¾";
                        case "w":
                        case "W":
                            return t + "-Ñ";
                        default:
                            return t
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }), _t.locale("ru"), Ht ? module.exports = _t : "function" == typeof define && define.amd ? (define(function (t, e, n) {
            return n.config && n.config() && n.config().noGlobal === !0 && (Ct.moment = kt), _t
        }), wt(!0)) : wt()
}.call(this),
    function (t) {
        "use strict";
        if ("function" == typeof define && define.amd) define(["jquery", "moment"], t);
        else if ("object" == typeof exports) t(require("jquery"), require("moment"));
        else {
            if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
            if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
            t(jQuery, moment)
        }
    }(function (t, e) {
        "use strict";
        if (!e) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
        var n = function (n, i) {
            var a, o, s, r, l, d = {},
                c = e().startOf("d"),
                u = c.clone(),
                h = !0,
                f = !1,
                p = !1,
                m = 0,
                g = [{
                    clsName: "days",
                    navFnc: "M",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "y",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "y",
                    navStep: 10
                }, {
                    clsName: "decades",
                    navFnc: "y",
                    navStep: 100
                }],
                y = ["days", "months", "years", "decades"],
                v = ["top", "bottom", "auto"],
                b = ["left", "right", "auto"],
                w = ["default", "top", "bottom"],
                _ = {
                    up: 38,
                    38: "up",
                    down: 40,
                    40: "down",
                    left: 37,
                    37: "left",
                    right: 39,
                    39: "right",
                    tab: 9,
                    9: "tab",
                    escape: 27,
                    27: "escape",
                    enter: 13,
                    13: "enter",
                    pageUp: 33,
                    33: "pageUp",
                    pageDown: 34,
                    34: "pageDown",
                    shift: 16,
                    16: "shift",
                    control: 17,
                    17: "control",
                    space: 32,
                    32: "space",
                    t: 84,
                    84: "t",
                    delete: 46,
                    46: "delete"
                },
                k = {},
                D = function (t) {
                    if ("string" != typeof t || t.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
                    switch (t) {
                        case "y":
                            return s.indexOf("Y") !== -1;
                        case "M":
                            return s.indexOf("M") !== -1;
                        case "d":
                            return s.toLowerCase().indexOf("d") !== -1;
                        case "h":
                        case "H":
                            return s.toLowerCase().indexOf("h") !== -1;
                        case "m":
                            return s.indexOf("m") !== -1;
                        case "s":
                            return s.indexOf("s") !== -1;
                        default:
                            return !1
                    }
                },
                T = function () {
                    return D("h") || D("m") || D("s")
                },
                C = function () {
                    return D("y") || D("M") || D("d")
                },
                x = function () {
                    var e = t("<thead>").append(t("<tr>").append(t("<th>").addClass("prev").attr("data-action", "previous").append(t("<span>").addClass(i.icons.previous))).append(t("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", i.calendarWeeks ? "6" : "5")).append(t("<th>").addClass("next").attr("data-action", "next").append(t("<span>").addClass(i.icons.next)))),
                        n = t("<tbody>").append(t("<tr>").append(t("<td>").attr("colspan", i.calendarWeeks ? "8" : "7")));
                    return [t("<div>").addClass("datepicker-days").append(t("<table>").addClass("table-condensed").append(e).append(t("<tbody>"))), t("<div>").addClass("datepicker-months").append(t("<table>").addClass("table-condensed").append(e.clone()).append(n.clone())), t("<div>").addClass("datepicker-years").append(t("<table>").addClass("table-condensed").append(e.clone()).append(n.clone())), t("<div>").addClass("datepicker-decades").append(t("<table>").addClass("table-condensed").append(e.clone()).append(n.clone()))]
                },
                M = function () {
                    var e = t("<tr>"),
                        n = t("<tr>"),
                        a = t("<tr>");
                    return D("h") && (e.append(t("<td>").append(t("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: "Increment Hour"
                    }).addClass("btn").attr("data-action", "incrementHours").append(t("<span>").addClass(i.icons.up)))), n.append(t("<td>").append(t("<span>").addClass("timepicker-hour").attr({
                        "data-time-component": "hours",
                        title: "Pick Hour"
                    }).attr("data-action", "showHours"))), a.append(t("<td>").append(t("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: "Decrement Hour"
                    }).addClass("btn").attr("data-action", "decrementHours").append(t("<span>").addClass(i.icons.down))))), D("m") && (D("h") && (e.append(t("<td>").addClass("separator")), n.append(t("<td>").addClass("separator").html(":")), a.append(t("<td>").addClass("separator"))), e.append(t("<td>").append(t("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: "Increment Minute"
                    }).addClass("btn").attr("data-action", "incrementMinutes").append(t("<span>").addClass(i.icons.up)))), n.append(t("<td>").append(t("<span>").addClass("timepicker-minute").attr({
                        "data-time-component": "minutes",
                        title: "Pick Minute"
                    }).attr("data-action", "showMinutes"))), a.append(t("<td>").append(t("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: "Decrement Minute"
                    }).addClass("btn").attr("data-action", "decrementMinutes").append(t("<span>").addClass(i.icons.down))))), D("s") && (D("m") && (e.append(t("<td>").addClass("separator")), n.append(t("<td>").addClass("separator").html(":")), a.append(t("<td>").addClass("separator"))), e.append(t("<td>").append(t("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: "Increment Second"
                    }).addClass("btn").attr("data-action", "incrementSeconds").append(t("<span>").addClass(i.icons.up)))), n.append(t("<td>").append(t("<span>").addClass("timepicker-second").attr({
                        "data-time-component": "seconds",
                        title: "Pick Second"
                    }).attr("data-action", "showSeconds"))), a.append(t("<td>").append(t("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: "Decrement Second"
                    }).addClass("btn").attr("data-action", "decrementSeconds").append(t("<span>").addClass(i.icons.down))))), o || (e.append(t("<td>").addClass("separator")), n.append(t("<td>").append(t("<button>").addClass("btn btn-primary").attr({
                        "data-action": "togglePeriod",
                        tabindex: "-1",
                        title: "Toggle Period"
                    }))), a.append(t("<td>").addClass("separator"))), t("<div>").addClass("timepicker-picker").append(t("<table>").addClass("table-condensed").append([e, n, a]))
                },
                S = function () {
                    var e = t("<div>").addClass("timepicker-hours").append(t("<table>").addClass("table-condensed")),
                        n = t("<div>").addClass("timepicker-minutes").append(t("<table>").addClass("table-condensed")),
                        i = t("<div>").addClass("timepicker-seconds").append(t("<table>").addClass("table-condensed")),
                        a = [M()];
                    return D("h") && a.push(e), D("m") && a.push(n), D("s") && a.push(i), a
                },
                O = function () {
                    var e = [];
                    return i.showTodayButton && e.push(t("<td>").append(t("<a>").attr({
                        "data-action": "today",
                        title: i.tooltips.today
                    }).append(t("<span>").addClass(i.icons.today)))), !i.sideBySide && C() && T() && e.push(t("<td>").append(t("<a>").attr({
                        "data-action": "togglePicker",
                        title: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð²Ñ€ÐµÐ¼Ñ"
                    }).append(t("<span>").addClass(i.icons.time)))), i.showClear && e.push(t("<td>").append(t("<a>").attr({
                        "data-action": "clear",
                        title: i.tooltips.clear
                    }).append(t("<span>").addClass(i.icons.clear)))), i.showClose && e.push(t("<td>").append(t("<a>").attr({
                        "data-action": "close",
                        title: i.tooltips.close
                    }).append(t("<span>").addClass(i.icons.close)))), t("<table>").addClass("table-condensed").append(t("<tbody>").append(t("<tr>").append(e)))
                },
                Y = function () {
                    var e = t("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                        n = t("<div>").addClass("datepicker").append(x()),
                        a = t("<div>").addClass("timepicker").append(S()),
                        s = t("<ul>").addClass("list-unstyled"),
                        r = t("<li>").addClass("picker-switch" + (i.collapse ? " accordion-toggle" : "")).append(O());
                    return i.inline && e.removeClass("dropdown-menu"), o && e.addClass("usetwentyfour"), D("s") && !o && e.addClass("wider"), i.sideBySide && C() && T() ? (e.addClass("timepicker-sbs"), "top" === i.toolbarPlacement && e.append(r), e.append(t("<div>").addClass("row").append(n.addClass("col-md-6")).append(a.addClass("col-md-6"))), "bottom" === i.toolbarPlacement && e.append(r), e) : ("top" === i.toolbarPlacement && s.append(r), C() && s.append(t("<li>").addClass(i.collapse && T() ? "collapse in" : "").append(n)), "default" === i.toolbarPlacement && s.append(r), T() && s.append(t("<li>").addClass(i.collapse && C() ? "collapse" : "").append(a)), "bottom" === i.toolbarPlacement && s.append(r), e.append(s))
                },
                $ = function () {
                    var e, a = {};
                    return e = n.is("input") || i.inline ? n.data() : n.find("input").data(), e.dateOptions && e.dateOptions instanceof Object && (a = t.extend(!0, a, e.dateOptions)), t.each(i, function (t) {
                        var n = "date" + t.charAt(0).toUpperCase() + t.slice(1);
                        void 0 !== e[n] && (a[t] = e[n])
                    }), a
                },
                I = function () {
                    var e, a = (f || n).position(),
                        o = (f || n).offset(),
                        s = i.widgetPositioning.vertical,
                        r = i.widgetPositioning.horizontal;
                    if (i.widgetParent) e = i.widgetParent.append(p);
                    else if (n.is("input")) e = n.after(p).parent();
                    else {
                        if (i.inline) return void(e = n.append(p));
                        e = n, n.children().first().after(p)
                    }
                    if ("auto" === s && (s = o.top + 1.5 * p.height() >= t(window).height() + t(window).scrollTop() && p.height() + n.outerHeight() < o.top ? "top" : "bottom"), "auto" === r && (r = e.width() < o.left + p.outerWidth() / 2 && o.left + p.outerWidth() > t(window).width() ? "right" : "left"), "top" === s ? p.addClass("top").removeClass("bottom") : p.addClass("bottom").removeClass("top"), "right" === r ? p.addClass("pull-right") : p.removeClass("pull-right"), "relative" !== e.css("position") && (e = e.parents().filter(function () {
                            return "relative" === t(this).css("position")
                        }).first()), 0 === e.length) throw new Error("datetimepicker component should be placed within a relative positioned container");
                    p.css({
                        top: "top" === s ? "auto" : a.top + n.outerHeight(),
                        bottom: "top" === s ? a.top + n.outerHeight() : "auto",
                        left: "left" === r ? e === n ? 0 : a.left : "auto",
                        right: "left" === r ? "auto" : e.outerWidth() - n.outerWidth() - (e === n ? 0 : a.left)
                    })
                },
                E = function (t) {
                    "dp.change" === t.type && (t.date && t.date.isSame(t.oldDate) || !t.date && !t.oldDate) || n.trigger(t)
                },
                P = function (t) {
                    "y" === t && (t = "YYYY"), E({
                        type: "dp.update",
                        change: t,
                        viewDate: u.clone()
                    })
                },
                L = function (t) {
                    p && (t && (l = Math.max(m, Math.min(3, l + t))), p.find(".datepicker > div").hide().filter(".datepicker-" + g[l].clsName).show())
                },
                A = function () {
                    var e = t("<tr>"),
                        n = u.clone().startOf("w").startOf("d");
                    for (i.calendarWeeks === !0 && e.append(t("<th>").addClass("cw").text("#")); n.isBefore(u.clone().endOf("w"));) e.append(t("<th>").addClass("dow").text(n.format("dd"))), n.add(1, "d");
                    p.find(".datepicker-days thead").append(e)
                },
                H = function (t) {
                    return i.disabledDates[t.format("YYYY-MM-DD")] === !0
                },
                F = function (t) {
                    return i.enabledDates[t.format("YYYY-MM-DD")] === !0
                },
                N = function (t) {
                    return i.disabledHours[t.format("H")] === !0
                },
                U = function (t) {
                    return i.enabledHours[t.format("H")] === !0
                },
                W = function (e, n) {
                    if (!e.isValid()) return !1;
                    if (i.disabledDates && "d" === n && H(e)) return !1;
                    if (i.enabledDates && "d" === n && !F(e)) return !1;
                    if (i.minDate && e.isBefore(i.minDate, n)) return !1;
                    if (i.maxDate && e.isAfter(i.maxDate, n)) return !1;
                    if (i.daysOfWeekDisabled && "d" === n && i.daysOfWeekDisabled.indexOf(e.day()) !== -1) return !1;
                    if (i.disabledHours && ("h" === n || "m" === n || "s" === n) && N(e)) return !1;
                    if (i.enabledHours && ("h" === n || "m" === n || "s" === n) && !U(e)) return !1;
                    if (i.disabledTimeIntervals && ("h" === n || "m" === n || "s" === n)) {
                        var a = !1;
                        if (t.each(i.disabledTimeIntervals, function () {
                                if (e.isBetween(this[0], this[1])) return a = !0, !1
                            }), a) return !1
                    }
                    return !0
                },
                j = function () {
                    for (var e = [], n = u.clone().startOf("y").startOf("d"); n.isSame(u, "y");) e.push(t("<span>").attr("data-action", "selectMonth").addClass("month").text(n.format("MMM"))), n.add(1, "M");
                    p.find(".datepicker-months td").empty().append(e)
                },
                R = function () {
                    var e = p.find(".datepicker-months"),
                        n = e.find("th"),
                        a = e.find("tbody").find("span");
                    n.eq(0).find("span").attr("title", i.tooltips.prevYear), n.eq(1).attr("title", i.tooltips.selectYear), n.eq(2).find("span").attr("title", i.tooltips.nextYear), e.find(".disabled").removeClass("disabled"), W(u.clone().subtract(1, "y"), "y") || n.eq(0).addClass("disabled"), n.eq(1).text(u.year()), W(u.clone().add(1, "y"), "y") || n.eq(2).addClass("disabled"), a.removeClass("active"), c.isSame(u, "y") && !h && a.eq(c.month()).addClass("active"), a.each(function (e) {
                        W(u.clone().month(e), "M") || t(this).addClass("disabled")
                    })
                },
                B = function () {
                    var t = p.find(".datepicker-years"),
                        e = t.find("th"),
                        n = u.clone().subtract(5, "y"),
                        a = u.clone().add(6, "y"),
                        o = "";
                    for (e.eq(0).find("span").attr("title", i.tooltips.nextDecade), e.eq(1).attr("title", i.tooltips.selectDecade), e.eq(2).find("span").attr("title", i.tooltips.prevDecade), t.find(".disabled").removeClass("disabled"), i.minDate && i.minDate.isAfter(n, "y") && e.eq(0).addClass("disabled"), e.eq(1).text(n.year() + "-" + a.year()), i.maxDate && i.maxDate.isBefore(a, "y") && e.eq(2).addClass("disabled"); !n.isAfter(a, "y");) o += '<span data-action="selectYear" class="year' + (n.isSame(c, "y") && !h ? " active" : "") + (W(n, "y") ? "" : " disabled") + '">' + n.year() + "</span>", n.add(1, "y");
                    t.find("td").html(o)
                },
                G = function () {
                    var t = p.find(".datepicker-decades"),
                        n = t.find("th"),
                        a = e(u.isBefore(e({
                            y: 1999
                        })) ? {
                            y: 1899
                        } : {
                            y: 1999
                        }),
                        o = a.clone().add(100, "y"),
                        s = "";
                    for (n.eq(0).find("span").attr("title", i.tooltips.prevCentury), n.eq(2).find("span").attr("title", i.tooltips.nextCentury), t.find(".disabled").removeClass("disabled"), (a.isSame(e({
                            y: 1900
                        })) || i.minDate && i.minDate.isAfter(a, "y")) && n.eq(0).addClass("disabled"), n.eq(1).text(a.year() + "-" + o.year()), (a.isSame(e({
                            y: 2e3
                        })) || i.maxDate && i.maxDate.isBefore(o, "y")) && n.eq(2).addClass("disabled"); !a.isAfter(o, "y");) s += '<span data-action="selectDecade" class="decade' + (a.isSame(c, "y") ? " active" : "") + (W(a, "y") ? "" : " disabled") + '" data-selection="' + (a.year() + 6) + '">' + (a.year() + 1) + " - " + (a.year() + 12) + "</span>", a.add(12, "y");
                    s += "<span></span><span></span><span></span>", t.find("td").html(s)
                },
                z = function () {
                    var n, a, o, s, r = p.find(".datepicker-days"),
                        l = r.find("th"),
                        d = [];
                    if (C()) {
                        for (l.eq(0).find("span").attr("title", i.tooltips.prevMonth), l.eq(1).attr("title", i.tooltips.selectMonth), l.eq(2).find("span").attr("title", i.tooltips.nextMonth), r.find(".disabled").removeClass("disabled"), l.eq(1).text(u.format(i.dayViewHeaderFormat)), W(u.clone().subtract(1, "M"), "M") || l.eq(0).addClass("disabled"), W(u.clone().add(1, "M"), "M") || l.eq(2).addClass("disabled"), n = u.clone().startOf("M").startOf("w").startOf("d"), s = 0; s < 42; s++) 0 === n.weekday() && (a = t("<tr>"), i.calendarWeeks && a.append('<td class="cw">' + n.week() + "</td>"), d.push(a)), o = "", n.isBefore(u, "M") && (o += " old"), n.isAfter(u, "M") && (o += " new"), n.isSame(c, "d") && !h && (o += " active"), W(n, "d") || (o += " disabled"), n.isSame(e(), "d") && (o += " today"), 0 !== n.day() && 6 !== n.day() || (o += " weekend"), a.append('<td data-action="selectDay" data-day="' + n.format("L") + '" class="day' + o + '">' + n.date() + "</td>"), n.add(1, "d");
                        r.find("tbody").empty().append(d), R(), B(), G()
                    }
                },
                q = function () {
                    var e = p.find(".timepicker-hours table"),
                        n = u.clone().startOf("d"),
                        i = [],
                        a = t("<tr>");
                    for (u.hour() > 11 && !o && n.hour(12); n.isSame(u, "d") && (o || u.hour() < 12 && n.hour() < 12 || u.hour() > 11);) n.hour() % 4 === 0 && (a = t("<tr>"), i.push(a)), a.append('<td data-action="selectHour" class="hour' + (W(n, "h") ? "" : " disabled") + '">' + n.format(o ? "HH" : "hh") + "</td>"), n.add(1, "h");
                    e.empty().append(i)
                },
                V = function () {
                    for (var e = p.find(".timepicker-minutes table"), n = u.clone().startOf("h"), a = [], o = t("<tr>"), s = 1 === i.stepping ? 5 : i.stepping; u.isSame(n, "h");) n.minute() % (4 * s) === 0 && (o = t("<tr>"), a.push(o)), o.append('<td data-action="selectMinute" class="minute' + (W(n, "m") ? "" : " disabled") + '">' + n.format("mm") + "</td>"), n.add(s, "m");
                    e.empty().append(a)
                },
                Q = function () {
                    for (var e = p.find(".timepicker-seconds table"), n = u.clone().startOf("m"), i = [], a = t("<tr>"); u.isSame(n, "m");) n.second() % 20 === 0 && (a = t("<tr>"), i.push(a)), a.append('<td data-action="selectSecond" class="second' + (W(n, "s") ? "" : " disabled") + '">' + n.format("ss") + "</td>"), n.add(5, "s");
                    e.empty().append(i)
                },
                Z = function () {
                    var t, e, n = p.find(".timepicker span[data-time-component]");
                    o || (t = p.find(".timepicker [data-action=togglePeriod]"), e = c.clone().add(c.hours() >= 12 ? -12 : 12, "h"), t.text(c.format("A")), W(e, "h") ? t.removeClass("disabled") : t.addClass("disabled")), n.filter("[data-time-component=hours]").text(c.format(o ? "HH" : "hh")), n.filter("[data-time-component=minutes]").text(c.format("mm")), n.filter("[data-time-component=seconds]").text(c.format("ss")), q(), V(), Q()
                },
                X = function () {
                    p && (z(), Z())
                },
                J = function (t) {
                    var e = h ? null : c;
                    return t ? (t = t.clone().locale(i.locale), 1 !== i.stepping && t.minutes(Math.round(t.minutes() / i.stepping) * i.stepping % 60).seconds(0), void(W(t) ? (c = t, u = c.clone(), a.val(c.format(s)), n.data("date", c.format(s)), h = !1, X(), E({
                        type: "dp.change",
                        date: c.clone(),
                        oldDate: e
                    })) : (i.keepInvalid || a.val(h ? "" : c.format(s)), E({
                        type: "dp.error",
                        date: t
                    })))) : (h = !0, a.val(""), n.data("date", ""), E({
                        type: "dp.change",
                        date: !1,
                        oldDate: e
                    }), void X())
                },
                K = function () {
                    var e = !1;
                    return p ? (p.find(".collapse").each(function () {
                        var n = t(this).data("collapse");
                        return !n || !n.transitioning || (e = !0, !1)
                    }), e ? d : (f && f.hasClass("btn") && f.toggleClass("active"), p.hide(), t(window).off("resize", I), p.off("click", "[data-action]"), p.off("mousedown", !1), p.remove(), p = !1, E({
                        type: "dp.hide",
                        date: c.clone()
                    }), a.blur(), d)) : d
                },
                tt = function () {
                    J(null)
                },
                et = {
                    next: function () {
                        var t = g[l].navFnc;
                        u.add(g[l].navStep, t), z(), P(t)
                    },
                    previous: function () {
                        var t = g[l].navFnc;
                        u.subtract(g[l].navStep, t), z(), P(t)
                    },
                    pickerSwitch: function () {
                        L(1)
                    },
                    selectMonth: function (e) {
                        var n = t(e.target).closest("tbody").find("span").index(t(e.target));
                        u.month(n), l === m ? (J(c.clone().year(u.year()).month(u.month())), i.inline || K()) : (L(-1), z()), P("M")
                    },
                    selectYear: function (e) {
                        var n = parseInt(t(e.target).text(), 10) || 0;
                        u.year(n), l === m ? (J(c.clone().year(u.year())), i.inline || K()) : (L(-1), z()), P("YYYY")
                    },
                    selectDecade: function (e) {
                        var n = parseInt(t(e.target).data("selection"), 10) || 0;
                        u.year(n), l === m ? (J(c.clone().year(u.year())), i.inline || K()) : (L(-1), z()), P("YYYY")
                    },
                    selectDay: function (e) {
                        var n = u.clone();
                        t(e.target).is(".old") && n.subtract(1, "M"), t(e.target).is(".new") && n.add(1, "M"), J(n.date(parseInt(t(e.target).text(), 10))), T() || i.keepOpen || i.inline || K()
                    },
                    incrementHours: function () {
                        var t = c.clone().add(1, "h");
                        W(t, "h") && J(t)
                    },
                    incrementMinutes: function () {
                        var t = c.clone().add(i.stepping, "m");
                        W(t, "m") && J(t)
                    },
                    incrementSeconds: function () {
                        var t = c.clone().add(1, "s");
                        W(t, "s") && J(t)
                    },
                    decrementHours: function () {
                        var t = c.clone().subtract(1, "h");
                        W(t, "h") && J(t)
                    },
                    decrementMinutes: function () {
                        var t = c.clone().subtract(i.stepping, "m");
                        W(t, "m") && J(t)
                    },
                    decrementSeconds: function () {
                        var t = c.clone().subtract(1, "s");
                        W(t, "s") && J(t)
                    },
                    togglePeriod: function () {
                        J(c.clone().add(c.hours() >= 12 ? -12 : 12, "h"))
                    },
                    togglePicker: function (e) {
                        var n, a = t(e.target),
                            o = a.closest("ul"),
                            s = o.find(".in"),
                            r = o.find(".collapse:not(.in)");
                        if (s && s.length) {
                            if (n = s.data("collapse"), n && n.transitioning) return;
                            s.collapse ? (s.collapse("hide"), r.collapse("show")) : (s.removeClass("in"), r.addClass("in")), a.is("span") ? a.toggleClass(i.icons.time + " " + i.icons.date) : a.find("span").toggleClass(i.icons.time + " " + i.icons.date)
                        }
                    },
                    showPicker: function () {
                        p.find(".timepicker > div:not(.timepicker-picker)").hide(), p.find(".timepicker .timepicker-picker").show()
                    },
                    showHours: function () {
                        p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-hours").show()
                    },
                    showMinutes: function () {
                        p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-minutes").show()
                    },
                    showSeconds: function () {
                        p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-seconds").show()
                    },
                    selectHour: function (e) {
                        var n = parseInt(t(e.target).text(), 10);
                        o || (c.hours() >= 12 ? 12 !== n && (n += 12) : 12 === n && (n = 0)), J(c.clone().hours(n)), et.showPicker.call(d)
                    },
                    selectMinute: function (e) {
                        J(c.clone().minutes(parseInt(t(e.target).text(), 10))), et.showPicker.call(d)
                    },
                    selectSecond: function (e) {
                        J(c.clone().seconds(parseInt(t(e.target).text(), 10))), et.showPicker.call(d)
                    },
                    clear: tt,
                    today: function () {
                        W(e(), "d") && J(e())
                    },
                    close: K
                },
                nt = function (e) {
                    return !t(e.currentTarget).is(".disabled") && (et[t(e.currentTarget).data("action")].apply(d, arguments), !1)
                },
                it = function () {
                    var n, o = {
                        year: function (t) {
                            return t.month(0).date(1).hours(0).seconds(0).minutes(0)
                        },
                        month: function (t) {
                            return t.date(1).hours(0).seconds(0).minutes(0)
                        },
                        day: function (t) {
                            return t.hours(0).seconds(0).minutes(0)
                        },
                        hour: function (t) {
                            return t.seconds(0).minutes(0)
                        },
                        minute: function (t) {
                            return t.seconds(0)
                        }
                    };
                    return a.prop("disabled") || !i.ignoreReadonly && a.prop("readonly") || p ? d : (void 0 !== a.val() && 0 !== a.val().trim().length ? J(ot(a.val().trim())) : i.useCurrent && h && (a.is("input") && 0 === a.val().trim().length || i.inline) && (n = e(), "string" == typeof i.useCurrent && (n = o[i.useCurrent](n)), J(n)), p = Y(), A(), j(), p.find(".timepicker-hours").hide(), p.find(".timepicker-minutes").hide(), p.find(".timepicker-seconds").hide(), X(), L(), t(window).on("resize", I), p.on("click", "[data-action]", nt), p.on("mousedown", !1), f && f.hasClass("btn") && f.toggleClass("active"), p.show(), I(), i.focusOnShow && !a.is(":focus") && a.focus(), E({
                        type: "dp.show"
                    }), d)
                },
                at = function () {
                    return p ? K() : it()
                },
                ot = function (t) {
                    return t = void 0 === i.parseInputDate ? e.isMoment(t) || t instanceof Date ? e(t) : e(t, r, i.useStrict) : i.parseInputDate(t), t.locale(i.locale), t
                },
                st = function (t) {
                    var e, n, a, o, s = null,
                        r = [],
                        l = {},
                        c = t.which,
                        u = "p";
                    k[c] = u;
                    for (e in k) k.hasOwnProperty(e) && k[e] === u && (r.push(e), parseInt(e, 10) !== c && (l[e] = !0));
                    for (e in i.keyBinds)
                        if (i.keyBinds.hasOwnProperty(e) && "function" == typeof i.keyBinds[e] && (a = e.split(" "), a.length === r.length && _[c] === a[a.length - 1])) {
                            for (o = !0, n = a.length - 2; n >= 0; n--)
                                if (!(_[a[n]] in l)) {
                                    o = !1;
                                    break
                                }
                            if (o) {
                                s = i.keyBinds[e];
                                break
                            }
                        }
                    s && (s.call(d, p), t.stopPropagation(), t.preventDefault())
                },
                rt = function (t) {
                    k[t.which] = "r", t.stopPropagation(), t.preventDefault()
                },
                lt = function (e) {
                    var n = t(e.target).val().trim(),
                        i = n ? ot(n) : null;
                    return J(i), e.stopImmediatePropagation(), !1
                },
                dt = function () {
                    a.on({
                        change: lt,
                        blur: i.debug ? "" : K,
                        keydown: st,
                        keyup: rt,
                        focus: i.allowInputToggle ? it : ""
                    }), n.is("input") ? a.on({
                        focus: it
                    }) : f && (f.on("click", at), f.on("mousedown", !1))
                },
                ct = function () {
                    a.off({
                        change: lt,
                        blur: blur,
                        keydown: st,
                        keyup: rt,
                        focus: i.allowInputToggle ? K : ""
                    }), n.is("input") ? a.off({
                        focus: it
                    }) : f && (f.off("click", at), f.off("mousedown", !1))
                },
                ut = function (e) {
                    var n = {};
                    return t.each(e, function () {
                        var t = ot(this);
                        t.isValid() && (n[t.format("YYYY-MM-DD")] = !0)
                    }), !!Object.keys(n).length && n
                },
                ht = function (e) {
                    var n = {};
                    return t.each(e, function () {
                        n[this] = !0
                    }), !!Object.keys(n).length && n
                },
                ft = function () {
                    var t = i.format || "L LT";
                    s = t.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (t) {
                        var e = c.localeData().longDateFormat(t) || t;
                        return e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (t) {
                            return c.localeData().longDateFormat(t) || t
                        })
                    }), r = i.extraFormats ? i.extraFormats.slice() : [], r.indexOf(t) < 0 && r.indexOf(s) < 0 && r.push(s), o = s.toLowerCase().indexOf("a") < 1 && s.replace(/\[.*?\]/g, "").indexOf("h") < 1, D("y") && (m = 2), D("M") && (m = 1), D("d") && (m = 0), l = Math.max(m, l), h || J(c)
                };
            if (d.destroy = function () {
                    K(), ct(), n.removeData("DateTimePicker"), n.removeData("date")
                }, d.toggle = at, d.show = it, d.hide = K, d.disable = function () {
                    return K(), f && f.hasClass("btn") && f.addClass("disabled"), a.prop("disabled", !0), d
                }, d.enable = function () {
                    return f && f.hasClass("btn") && f.removeClass("disabled"), a.prop("disabled", !1), d
                }, d.ignoreReadonly = function (t) {
                    if (0 === arguments.length) return i.ignoreReadonly;
                    if ("boolean" != typeof t) throw new TypeError("ignoreReadonly () expects a boolean parameter");
                    return i.ignoreReadonly = t, d
                }, d.options = function (e) {
                    if (0 === arguments.length) return t.extend(!0, {}, i);
                    if (!(e instanceof Object)) throw new TypeError("options() options parameter should be an object");
                    return t.extend(!0, i, e), t.each(i, function (t, e) {
                        if (void 0 === d[t]) throw new TypeError("option " + t + " is not recognized!");
                        d[t](e)
                    }), d
                }, d.date = function (t) {
                    if (0 === arguments.length) return h ? null : c.clone();
                    if (!(null === t || "string" == typeof t || e.isMoment(t) || t instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
                    return J(null === t ? null : ot(t)), d
                }, d.format = function (t) {
                    if (0 === arguments.length) return i.format;
                    if ("string" != typeof t && ("boolean" != typeof t || t !== !1)) throw new TypeError("format() expects a sting or boolean:false parameter " + t);
                    return i.format = t, s && ft(), d
                }, d.dayViewHeaderFormat = function (t) {
                    if (0 === arguments.length) return i.dayViewHeaderFormat;
                    if ("string" != typeof t) throw new TypeError("dayViewHeaderFormat() expects a string parameter");
                    return i.dayViewHeaderFormat = t, d
                }, d.extraFormats = function (t) {
                    if (0 === arguments.length) return i.extraFormats;
                    if (t !== !1 && !(t instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
                    return i.extraFormats = t, r && ft(), d
                }, d.disabledDates = function (e) {
                    if (0 === arguments.length) return i.disabledDates ? t.extend({}, i.disabledDates) : i.disabledDates;
                    if (!e) return i.disabledDates = !1, X(), d;
                    if (!(e instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
                    return i.disabledDates = ut(e), i.enabledDates = !1, X(), d
                }, d.enabledDates = function (e) {
                    if (0 === arguments.length) return i.enabledDates ? t.extend({}, i.enabledDates) : i.enabledDates;
                    if (!e) return i.enabledDates = !1, X(), d;
                    if (!(e instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
                    return i.enabledDates = ut(e), i.disabledDates = !1, X(), d
                }, d.daysOfWeekDisabled = function (t) {
                    if (0 === arguments.length) return i.daysOfWeekDisabled.splice(0);
                    if ("boolean" == typeof t && !t) return i.daysOfWeekDisabled = !1, X(), d;
                    if (!(t instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
                    if (i.daysOfWeekDisabled = t.reduce(function (t, e) {
                            return e = parseInt(e, 10), e > 6 || e < 0 || isNaN(e) ? t : (t.indexOf(e) === -1 && t.push(e), t)
                        }, []).sort(), i.useCurrent && !i.keepInvalid) {
                        for (var e = 0; !W(c, "d");) {
                            if (c.add(1, "d"), 7 === e) throw "Tried 7 times to find a valid date";
                            e++
                        }
                        J(c)
                    }
                    return X(), d
                }, d.maxDate = function (t) {
                    if (0 === arguments.length) return i.maxDate ? i.maxDate.clone() : i.maxDate;
                    if ("boolean" == typeof t && t === !1) return i.maxDate = !1, X(), d;
                    "string" == typeof t && ("now" !== t && "moment" !== t || (t = e()));
                    var n = ot(t);
                    if (!n.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + t);
                    if (i.minDate && n.isBefore(i.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + n.format(s));
                    return i.maxDate = n, i.useCurrent && !i.keepInvalid && c.isAfter(t) && J(i.maxDate), u.isAfter(n) && (u = n.clone().subtract(i.stepping, "m")), X(), d
                }, d.minDate = function (t) {
                    if (0 === arguments.length) return i.minDate ? i.minDate.clone() : i.minDate;
                    if ("boolean" == typeof t && t === !1) return i.minDate = !1, X(), d;
                    "string" == typeof t && ("now" !== t && "moment" !== t || (t = e()));
                    var n = ot(t);
                    if (!n.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + t);
                    if (i.maxDate && n.isAfter(i.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + n.format(s));
                    return i.minDate = n, i.useCurrent && !i.keepInvalid && c.isBefore(t) && J(i.minDate), u.isBefore(n) && (u = n.clone().add(i.stepping, "m")), X(), d
                }, d.defaultDate = function (t) {
                    if (0 === arguments.length) return i.defaultDate ? i.defaultDate.clone() : i.defaultDate;
                    if (!t) return i.defaultDate = !1, d;
                    "string" == typeof t && ("now" !== t && "moment" !== t || (t = e()));
                    var n = ot(t);
                    if (!n.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + t);
                    if (!W(n)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
                    return i.defaultDate = n, (i.defaultDate && i.inline || "" === a.val().trim() && void 0 === a.attr("placeholder")) && J(i.defaultDate), d
                }, d.locale = function (t) {
                    if (0 === arguments.length) return i.locale;
                    if (!e.localeData(t)) throw new TypeError("locale() locale " + t + " is not loaded from moment locales!");
                    return i.locale = t, c.locale(i.locale), u.locale(i.locale), s && ft(), p && (K(), it()), d
                }, d.stepping = function (t) {
                    return 0 === arguments.length ? i.stepping : (t = parseInt(t, 10), (isNaN(t) || t < 1) && (t = 1), i.stepping = t, d)
                }, d.useCurrent = function (t) {
                    var e = ["year", "month", "day", "hour", "minute"];
                    if (0 === arguments.length) return i.useCurrent;
                    if ("boolean" != typeof t && "string" != typeof t) throw new TypeError("useCurrent() expects a boolean or string parameter");
                    if ("string" == typeof t && e.indexOf(t.toLowerCase()) === -1) throw new TypeError("useCurrent() expects a string parameter of " + e.join(", "));
                    return i.useCurrent = t, d
                }, d.collapse = function (t) {
                    if (0 === arguments.length) return i.collapse;
                    if ("boolean" != typeof t) throw new TypeError("collapse() expects a boolean parameter");
                    return i.collapse === t ? d : (i.collapse = t, p && (K(), it()), d)
                }, d.icons = function (e) {
                    if (0 === arguments.length) return t.extend({}, i.icons);
                    if (!(e instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
                    return t.extend(i.icons, e), p && (K(), it()), d
                }, d.tooltips = function (e) {
                    if (0 === arguments.length) return t.extend({}, i.tooltips);
                    if (!(e instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");
                    return t.extend(i.tooltips, e), p && (K(), it()), d
                }, d.useStrict = function (t) {
                    if (0 === arguments.length) return i.useStrict;
                    if ("boolean" != typeof t) throw new TypeError("useStrict() expects a boolean parameter");
                    return i.useStrict = t, d
                }, d.sideBySide = function (t) {
                    if (0 === arguments.length) return i.sideBySide;
                    if ("boolean" != typeof t) throw new TypeError("sideBySide() expects a boolean parameter");
                    return i.sideBySide = t, p && (K(), it()), d
                }, d.viewMode = function (t) {
                    if (0 === arguments.length) return i.viewMode;
                    if ("string" != typeof t) throw new TypeError("viewMode() expects a string parameter");
                    if (y.indexOf(t) === -1) throw new TypeError("viewMode() parameter must be one of (" + y.join(", ") + ") value");
                    return i.viewMode = t, l = Math.max(y.indexOf(t), m), L(), d
                }, d.toolbarPlacement = function (t) {
                    if (0 === arguments.length) return i.toolbarPlacement;
                    if ("string" != typeof t) throw new TypeError("toolbarPlacement() expects a string parameter");
                    if (w.indexOf(t) === -1) throw new TypeError("toolbarPlacement() parameter must be one of (" + w.join(", ") + ") value");
                    return i.toolbarPlacement = t, p && (K(), it()), d
                }, d.widgetPositioning = function (e) {
                    if (0 === arguments.length) return t.extend({}, i.widgetPositioning);
                    if ("[object Object]" !== {}.toString.call(e)) throw new TypeError("widgetPositioning() expects an object variable");
                    if (e.horizontal) {
                        if ("string" != typeof e.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
                        if (e.horizontal = e.horizontal.toLowerCase(), b.indexOf(e.horizontal) === -1) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + b.join(", ") + ")");
                        i.widgetPositioning.horizontal = e.horizontal
                    }
                    if (e.vertical) {
                        if ("string" != typeof e.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
                        if (e.vertical = e.vertical.toLowerCase(), v.indexOf(e.vertical) === -1) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + v.join(", ") + ")");
                        i.widgetPositioning.vertical = e.vertical
                    }
                    return X(), d
                }, d.calendarWeeks = function (t) {
                    if (0 === arguments.length) return i.calendarWeeks;
                    if ("boolean" != typeof t) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
                    return i.calendarWeeks = t, X(), d
                }, d.showTodayButton = function (t) {
                    if (0 === arguments.length) return i.showTodayButton;
                    if ("boolean" != typeof t) throw new TypeError("showTodayButton() expects a boolean parameter");
                    return i.showTodayButton = t, p && (K(), it()), d
                }, d.showClear = function (t) {
                    if (0 === arguments.length) return i.showClear;
                    if ("boolean" != typeof t) throw new TypeError("showClear() expects a boolean parameter");
                    return i.showClear = t, p && (K(), it()), d
                }, d.widgetParent = function (e) {
                    if (0 === arguments.length) return i.widgetParent;
                    if ("string" == typeof e && (e = t(e)), null !== e && "string" != typeof e && !(e instanceof t)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
                    return i.widgetParent = e, p && (K(), it()), d
                }, d.keepOpen = function (t) {
                    if (0 === arguments.length) return i.keepOpen;
                    if ("boolean" != typeof t) throw new TypeError("keepOpen() expects a boolean parameter");
                    return i.keepOpen = t, d
                }, d.focusOnShow = function (t) {
                    if (0 === arguments.length) return i.focusOnShow;
                    if ("boolean" != typeof t) throw new TypeError("focusOnShow() expects a boolean parameter");
                    return i.focusOnShow = t, d
                }, d.inline = function (t) {
                    if (0 === arguments.length) return i.inline;
                    if ("boolean" != typeof t) throw new TypeError("inline() expects a boolean parameter");
                    return i.inline = t, d
                }, d.clear = function () {
                    return tt(), d
                }, d.keyBinds = function (t) {
                    return i.keyBinds = t, d
                }, d.debug = function (t) {
                    if ("boolean" != typeof t) throw new TypeError("debug() expects a boolean parameter");
                    return i.debug = t, d
                }, d.allowInputToggle = function (t) {
                    if (0 === arguments.length) return i.allowInputToggle;
                    if ("boolean" != typeof t) throw new TypeError("allowInputToggle() expects a boolean parameter");
                    return i.allowInputToggle = t, d
                }, d.showClose = function (t) {
                    if (0 === arguments.length) return i.showClose;
                    if ("boolean" != typeof t) throw new TypeError("showClose() expects a boolean parameter");
                    return i.showClose = t, d
                }, d.keepInvalid = function (t) {
                    if (0 === arguments.length) return i.keepInvalid;
                    if ("boolean" != typeof t) throw new TypeError("keepInvalid() expects a boolean parameter");
                    return i.keepInvalid = t, d
                }, d.datepickerInput = function (t) {
                    if (0 === arguments.length) return i.datepickerInput;
                    if ("string" != typeof t) throw new TypeError("datepickerInput() expects a string parameter");
                    return i.datepickerInput = t, d
                }, d.parseInputDate = function (t) {
                    if (0 === arguments.length) return i.parseInputDate;
                    if ("function" != typeof t) throw new TypeError("parseInputDate() sholud be as function");
                    return i.parseInputDate = t, d
                }, d.disabledTimeIntervals = function (e) {
                    if (0 === arguments.length) return i.disabledTimeIntervals ? t.extend({}, i.disabledTimeIntervals) : i.disabledTimeIntervals;
                    if (!e) return i.disabledTimeIntervals = !1, X(), d;
                    if (!(e instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");
                    return i.disabledTimeIntervals = e, X(), d
                }, d.disabledHours = function (e) {
                    if (0 === arguments.length) return i.disabledHours ? t.extend({}, i.disabledHours) : i.disabledHours;
                    if (!e) return i.disabledHours = !1, X(), d;
                    if (!(e instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
                    if (i.disabledHours = ht(e), i.enabledHours = !1, i.useCurrent && !i.keepInvalid) {
                        for (var n = 0; !W(c, "h");) {
                            if (c.add(1, "h"), 24 === n) throw "Tried 24 times to find a valid date";
                            n++
                        }
                        J(c)
                    }
                    return X(), d
                }, d.enabledHours = function (e) {
                    if (0 === arguments.length) return i.enabledHours ? t.extend({}, i.enabledHours) : i.enabledHours;
                    if (!e) return i.enabledHours = !1, X(), d;
                    if (!(e instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
                    if (i.enabledHours = ht(e), i.disabledHours = !1, i.useCurrent && !i.keepInvalid) {
                        for (var n = 0; !W(c, "h");) {
                            if (c.add(1, "h"), 24 === n) throw "Tried 24 times to find a valid date";
                            n++
                        }
                        J(c)
                    }
                    return X(), d
                }, d.viewDate = function (t) {
                    if (0 === arguments.length) return u.clone();
                    if (!t) return u = c.clone(), d;
                    if (!("string" == typeof t || e.isMoment(t) || t instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
                    return u = ot(t), P(), d
                }, n.is("input")) a = n;
            else if (a = n.find(i.datepickerInput), 0 === a.size()) a = n.find("input");
            else if (!a.is("input")) throw new Error('CSS class "' + i.datepickerInput + '" cannot be applied to non input element');
            if (n.hasClass("input-group") && (f = 0 === n.find(".datepickerbutton").size() ? n.find(".input-group-addon") : n.find(".datepickerbutton")), !i.inline && !a.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
            return t.extend(!0, i, $()), d.options(i), ft(), dt(), a.prop("disabled") && d.disable(), a.is("input") && 0 !== a.val().trim().length ? J(ot(a.val().trim())) : i.defaultDate && void 0 === a.attr("placeholder") && J(i.defaultDate), i.inline && it(), d
        };
        t.fn.datetimepicker = function (e) {
            return this.each(function () {
                var i = t(this);
                i.data("DateTimePicker") || (e = t.extend(!0, {}, t.fn.datetimepicker.defaults, e), i.data("DateTimePicker", n(i, e)))
            })
        }, t.fn.datetimepicker.defaults = {
            format: !1,
            dayViewHeaderFormat: "MMMM YYYY",
            extraFormats: !1,
            stepping: 1,
            minDate: !1,
            maxDate: e().add(60, "days"),
            useCurrent: !1,
            collapse: !0,
            locale: e.locale(),
            defaultDate: !1,
            disabledDates: !1,
            enabledDates: !1,
            icons: {
                time: "gi gi-time",
                date: "gi gi-calendar",
                up: "gi gi-chevron-up",
                down: "gi gi-chevron-down",
                previous: "gi gi-chevron-left",
                next: "gi gi-chevron-right",
                today: "gi gi-screenshot",
                clear: "gi gi-trash",
                close: "gi gi-remove"
            },
            tooltips: {
                today: "ÐŸÐµÑ€ÐµÐ¹Ñ‚Ð¸ Ðº ÑÐµÐ³Ð¾Ð´Ð½ÑÑˆÐ½ÐµÐ¼Ñƒ Ð´Ð½ÑŽ",
                clear: "ÐžÑ‡Ð¸ÑÑ‚Ð¸Ñ‚ÑŒ",
                close: "Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ",
                selectMonth: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð¼ÐµÑÑÑ†",
                prevMonth: "ÐŸÑ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð¸Ð¹ Ð¼ÐµÑÑÑ†",
                nextMonth: "Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹ Ð¼ÐµÑÑÑ†",
                selectYear: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð³Ð¾Ð´",
                prevYear: "ÐŸÑ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð¸Ð¹ Ð³Ð¾Ð´",
                nextYear: "Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹ Ð³Ð¾Ð´",
                selectDecade: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð´ÐµÑÑÑ‚Ð¸Ð»ÐµÑ‚Ð¸Ðµ",
                prevDecade: "ÐŸÑ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰ÐµÐµ Ð´ÐµÑÑÑ‚Ð¸Ð»ÐµÑ‚Ð¸Ðµ",
                nextDecade: "Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ Ð´ÐµÑÑÑ‚Ð¸Ð»ÐµÑ‚Ð¸Ðµ",
                prevCentury: "ÐŸÑ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð¸Ð¹ Ð²ÐµÐº",
                nextCentury: "Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹ Ð²ÐµÐº"
            },
            useStrict: !1,
            sideBySide: !1,
            daysOfWeekDisabled: !1,
            calendarWeeks: !1,
            viewMode: "days",
            toolbarPlacement: "default",
            showTodayButton: !0,
            showClear: !0,
            showClose: !0,
            widgetPositioning: {
                horizontal: "auto",
                vertical: "auto"
            },
            widgetParent: null,
            ignoreReadonly: !1,
            keepOpen: !1,
            focusOnShow: !0,
            inline: !1,
            keepInvalid: !1,
            datepickerInput: ".datepickerinput",
            keyBinds: {
                up: function (t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") ? this.date(n.clone().subtract(7, "d")) : this.date(n.clone().add(this.stepping(), "m"))
                    }
                },
                down: function (t) {
                    if (!t) return void this.show();
                    var n = this.date() || e();
                    t.find(".datepicker").is(":visible") ? this.date(n.clone().add(7, "d")) : this.date(n.clone().subtract(this.stepping(), "m"))
                },
                "control up": function (t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") ? this.date(n.clone().subtract(1, "y")) : this.date(n.clone().add(1, "h"))
                    }
                },
                "control down": function (t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") ? this.date(n.clone().add(1, "y")) : this.date(n.clone().subtract(1, "h"))
                    }
                },
                left: function (t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") && this.date(n.clone().subtract(1, "d"))
                    }
                },
                right: function (t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") && this.date(n.clone().add(1, "d"))
                    }
                },
                pageUp: function (t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") && this.date(n.clone().subtract(1, "M"))
                    }
                },
                pageDown: function (t) {
                    if (t) {
                        var n = this.date() || e();
                        t.find(".datepicker").is(":visible") && this.date(n.clone().add(1, "M"))
                    }
                },
                enter: function () {
                    this.hide()
                },
                escape: function () {
                    this.hide()
                },
                "control space": function (t) {
                    t.find(".timepicker").is(":visible") && t.find('.btn[data-action="togglePeriod"]').click()
                },
                t: function () {
                    this.date(e())
                },
                delete: function () {
                    this.clear()
                }
            },
            debug: !1,
            allowInputToggle: !1,
            disabledTimeIntervals: !1,
            disabledHours: !1,
            enabledHours: !1,
            viewDate: !1
        }
    }),
    function (t) {
        var e = "undefined" == typeof window ? this : window;
        "object" == typeof exports ? module.exports = t(e.jQuery, e) : "function" == typeof define && define.amd ? define(["jquery"], function (n) {
            return t(n, e)
        }) : e.jQuery && !e.jQuery.fn.colorpicker && t(e.jQuery, e)
    }(function (t, e) {
        "use strict";
        var n = t,
            i = function (t, e, a, o) {
                this.fallbackValue = a ? a && "undefined" != typeof a.h ? a : this.value = {
                    h: 0,
                    s: 0,
                    b: 0,
                    a: 1
                } : null, this.fallbackFormat = o ? o : "rgba", this.value = this.fallbackValue, this.origFormat = null, this.predefinedColors = e ? e : {}, this.colors = n.extend({}, i.webColors, this.predefinedColors), t && ("undefined" != typeof t.h ? this.value = t : this.setColor(String(t))), this.value || (this.value = {
                    h: 0,
                    s: 0,
                    b: 0,
                    a: 1
                })
            };
        i.webColors = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32",
            transparent: "transparent"
        }, i.prototype = {
            constructor: i,
            colors: {},
            predefinedColors: {},
            getValue: function () {
                return this.value
            },
            setValue: function (t) {
                this.value = t
            },
            _sanitizeNumber: function (t) {
                return "number" == typeof t ? t : isNaN(t) || null === t || "" === t || void 0 === t ? 1 : "" === t ? 0 : "undefined" != typeof t.toLowerCase ? (t.match(/^\./) && (t = "0" + t), Math.ceil(100 * parseFloat(t)) / 100) : 1
            },
            isTransparent: function (t) {
                return !(!t || !("string" == typeof t || t instanceof String)) && (t = t.toLowerCase().trim(), "transparent" === t || t.match(/#?00000000/) || t.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/))
            },
            rgbaIsTransparent: function (t) {
                return 0 === t.r && 0 === t.g && 0 === t.b && 0 === t.a
            },
            setColor: function (t) {
                if (t = t.toLowerCase().trim()) {
                    if (this.isTransparent(t)) return this.value = {
                        h: 0,
                        s: 0,
                        b: 0,
                        a: 0
                    }, !0;
                    var e = this.parse(t);
                    e ? (this.value = this.value = {
                        h: e.h,
                        s: e.s,
                        b: e.b,
                        a: e.a
                    }, this.origFormat || (this.origFormat = e.format)) : this.fallbackValue && (this.value = this.fallbackValue)
                }
                return !1
            },
            setHue: function (t) {
                this.value.h = 1 - t
            },
            setSaturation: function (t) {
                this.value.s = t
            },
            setBrightness: function (t) {
                this.value.b = 1 - t
            },
            setAlpha: function (t) {
                this.value.a = Math.round(parseInt(100 * (1 - t), 10) / 100 * 100) / 100
            },
            toRGB: function (t, e, n, i) {
                0 === arguments.length && (t = this.value.h, e = this.value.s, n = this.value.b, i = this.value.a), t *= 360;
                var a, o, s, r, l;
                return t = t % 360 / 60, l = n * e, r = l * (1 - Math.abs(t % 2 - 1)), a = o = s = n - l, t = ~~t, a += [l, r, 0, 0, r, l][t], o += [r, l, l, r, 0, 0][t], s += [0, 0, r, l, l, r][t], {
                    r: Math.round(255 * a),
                    g: Math.round(255 * o),
                    b: Math.round(255 * s),
                    a: i
                }
            },
            toHex: function (t, e, n, i) {
                0 === arguments.length && (t = this.value.h, e = this.value.s, n = this.value.b, i = this.value.a);
                var a = this.toRGB(t, e, n, i);
                return this.rgbaIsTransparent(a) ? "transparent" : "#" + ((1 << 24) + (parseInt(a.r) << 16) + (parseInt(a.g) << 8) + parseInt(a.b)).toString(16).slice(1)
            },
            toHSL: function (t, e, n, i) {
                0 === arguments.length && (t = this.value.h, e = this.value.s, n = this.value.b, i = this.value.a);
                var a = t,
                    o = (2 - e) * n,
                    s = e * n;
                return s /= o > 0 && o <= 1 ? o : 2 - o, o /= 2, s > 1 && (s = 1), {
                    h: isNaN(a) ? 0 : a,
                    s: isNaN(s) ? 0 : s,
                    l: isNaN(o) ? 0 : o,
                    a: isNaN(i) ? 0 : i
                }
            },
            toAlias: function (t, e, n, i) {
                var a, o = 0 === arguments.length ? this.toHex() : this.toHex(t, e, n, i),
                    s = "alias" === this.origFormat ? o : this.toString(this.origFormat, !1);
                for (var r in this.colors)
                    if (a = this.colors[r].toLowerCase().trim(), a === o || a === s) return r;
                return !1
            },
            RGBtoHSB: function (t, e, n, i) {
                t /= 255, e /= 255, n /= 255;
                var a, o, s, r;
                return s = Math.max(t, e, n), r = s - Math.min(t, e, n), a = 0 === r ? null : s === t ? (e - n) / r : s === e ? (n - t) / r + 2 : (t - e) / r + 4, a = (a + 360) % 6 * 60 / 360, o = 0 === r ? 0 : r / s, {
                    h: this._sanitizeNumber(a),
                    s: o,
                    b: s,
                    a: this._sanitizeNumber(i)
                }
            },
            HueToRGB: function (t, e, n) {
                return n < 0 ? n += 1 : n > 1 && (n -= 1), 6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
            },
            HSLtoRGB: function (t, e, n, i) {
                e < 0 && (e = 0);
                var a;
                a = n <= .5 ? n * (1 + e) : n + e - n * e;
                var o = 2 * n - a,
                    s = t + 1 / 3,
                    r = t,
                    l = t - 1 / 3,
                    d = Math.round(255 * this.HueToRGB(o, a, s)),
                    c = Math.round(255 * this.HueToRGB(o, a, r)),
                    u = Math.round(255 * this.HueToRGB(o, a, l));
                return [d, c, u, this._sanitizeNumber(i)]
            },
            parse: function (t) {
                if (0 === arguments.length) return !1;
                var e, i, a = this,
                    o = !1,
                    s = "undefined" != typeof this.colors[t];
                return s && (t = this.colors[t].toLowerCase().trim()), n.each(this.stringParsers, function (n, r) {
                    var l = r.re.exec(t);
                    return e = l && r.parse.apply(a, [l]), !e || (o = {}, i = s ? "alias" : r.format ? r.format : a.getValidFallbackFormat(), o = i.match(/hsla?/) ? a.RGBtoHSB.apply(a, a.HSLtoRGB.apply(a, e)) : a.RGBtoHSB.apply(a, e), o instanceof Object && (o.format = i), !1)
                }), o
            },
            getValidFallbackFormat: function () {
                var t = ["rgba", "rgb", "hex", "hsla", "hsl"];
                return this.origFormat && t.indexOf(this.origFormat) !== -1 ? this.origFormat : this.fallbackFormat && t.indexOf(this.fallbackFormat) !== -1 ? this.fallbackFormat : "rgba"
            },
            toString: function (t, e) {
                t = t || this.origFormat || this.fallbackFormat, e = e || !1;
                var n = !1;
                switch (t) {
                    case "rgb":
                        return n = this.toRGB(), this.rgbaIsTransparent(n) ? "transparent" : "rgb(" + n.r + "," + n.g + "," + n.b + ")";
                    case "rgba":
                        return n = this.toRGB(), "rgba(" + n.r + "," + n.g + "," + n.b + "," + n.a + ")";
                    case "hsl":
                        return n = this.toHSL(), "hsl(" + Math.round(360 * n.h) + "," + Math.round(100 * n.s) + "%," + Math.round(100 * n.l) + "%)";
                    case "hsla":
                        return n = this.toHSL(), "hsla(" + Math.round(360 * n.h) + "," + Math.round(100 * n.s) + "%," + Math.round(100 * n.l) + "%," + n.a + ")";
                    case "hex":
                        return this.toHex();
                    case "alias":
                        return n = this.toAlias(), n === !1 ? this.toString(this.getValidFallbackFormat()) : e && !(n in i.webColors) && n in this.predefinedColors ? this.predefinedColors[n] : n;
                    default:
                        return n
                }
            },
            stringParsers: [{
                re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
                format: "rgb",
                parse: function (t) {
                    return [t[1], t[2], t[3], 1]
                }
            }, {
                re: /rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
                format: "rgb",
                parse: function (t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], 1]
                }
            }, {
                re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
                format: "rgba",
                parse: function (t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
                format: "rgba",
                parse: function (t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
                format: "hsl",
                parse: function (t) {
                    return [t[1] / 360, t[2] / 100, t[3] / 100, t[4]]
                }
            }, {
                re: /hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
                format: "hsla",
                parse: function (t) {
                    return [t[1] / 360, t[2] / 100, t[3] / 100, t[4]]
                }
            }, {
                re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
                format: "hex",
                parse: function (t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), 1]
                }
            }, {
                re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
                format: "hex",
                parse: function (t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), 1]
                }
            }],
            colorNameToHex: function (t) {
                return "undefined" != typeof this.colors[t.toLowerCase()] && this.colors[t.toLowerCase()]
            }
        };
        var a = {
                horizontal: !1,
                inline: !1,
                color: !1,
                format: !1,
                input: "input",
                container: !1,
                component: ".add-on, .input-group-addon",
                fallbackColor: !1,
                fallbackFormat: "hex",
                sliders: {
                    saturation: {
                        maxLeft: 150,
                        maxTop: 150,
                        callLeft: "setSaturation",
                        callTop: "setBrightness"
                    },
                    hue: {
                        maxLeft: 0,
                        maxTop: 150,
                        callLeft: !1,
                        callTop: "setHue"
                    },
                    alpha: {
                        maxLeft: 0,
                        maxTop: 150,
                        callLeft: !1,
                        callTop: "setAlpha"
                    }
                },
                slidersHorz: {
                    saturation: {
                        maxLeft: 100,
                        maxTop: 100,
                        callLeft: "setSaturation",
                        callTop: "setBrightness"
                    },
                    hue: {
                        maxLeft: 100,
                        maxTop: 0,
                        callLeft: "setHue",
                        callTop: !1
                    },
                    alpha: {
                        maxLeft: 100,
                        maxTop: 0,
                        callLeft: "setAlpha",
                        callTop: !1
                    }
                },
                template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',
                align: "right",
                customClass: null,
                colorSelectors: null
            },
            o = function (t, e) {
                this.element = n(t).addClass("colorpicker-element"), this.options = n.extend(!0, {}, a, this.element.data(), e), this.component = this.options.component, this.component = this.component !== !1 && this.element.find(this.component), this.component && 0 === this.component.length && (this.component = !1), this.container = this.options.container === !0 ? this.element : this.options.container, this.container = this.container !== !1 && n(this.container), this.input = this.element.is("input") ? this.element : !!this.options.input && this.element.find(this.options.input), this.input && 0 === this.input.length && (this.input = !1), this.color = this.createColor(this.options.color !== !1 ? this.options.color : this.getValue()), this.format = this.options.format !== !1 ? this.options.format : this.color.origFormat, this.options.color !== !1 && (this.updateInput(this.color), this.updateData(this.color));
                var i = this.picker = n(this.options.template);
                if (this.options.customClass && i.addClass(this.options.customClass), this.options.inline ? i.addClass("colorpicker-inline colorpicker-visible") : i.addClass("colorpicker-hidden"), this.options.horizontal && i.addClass("colorpicker-horizontal"), ["rgba", "hsla", "alias"].indexOf(this.format) === -1 && this.options.format !== !1 && "transparent" !== this.getValue() || i.addClass("colorpicker-with-alpha"), "right" === this.options.align && i.addClass("colorpicker-right"), this.options.inline === !0 && i.addClass("colorpicker-no-arrow"), this.options.colorSelectors) {
                    var o = this,
                        s = o.picker.find(".colorpicker-selectors");
                    s.length > 0 && (n.each(this.options.colorSelectors, function (t, e) {
                        var i = n("<i />").addClass("colorpicker-selectors-color").css("background-color", e).data("class", t).data("alias", t);
                        i.on("click.colorpicker touchend.colorpicker", function () {
                            o.setValue("alias" === o.format ? n(this).data("alias") : n(this).css("background-color"))
                        }), s.append(i)
                    }), s.show().addClass("colorpicker-visible"))
                }
                i.on("mousedown.colorpicker touchstart.colorpicker", n.proxy(function (t) {
                    t.target === t.currentTarget && t.preventDefault()
                }, this)), i.find(".colorpicker-saturation, .colorpicker-hue, .colorpicker-alpha").on("mousedown.colorpicker touchstart.colorpicker", n.proxy(this.mousedown, this)), i.appendTo(this.container ? this.container : n("body")), this.input !== !1 && (this.input.on({
                    "keyup.colorpicker": n.proxy(this.keyup, this)
                }), this.input.on({
                    "change.colorpicker": n.proxy(this.change, this)
                }), this.component === !1 && this.element.on({
                    "focus.colorpicker": n.proxy(this.show, this)
                }), this.options.inline === !1 && this.element.on({
                    "focusout.colorpicker": n.proxy(this.hide, this)
                })), this.component !== !1 && this.component.on({
                    "click.colorpicker": n.proxy(this.show, this)
                }), this.input === !1 && this.component === !1 && this.element.on({
                    "click.colorpicker": n.proxy(this.show, this)
                }), this.input !== !1 && this.component !== !1 && "color" === this.input.attr("type") && this.input.on({
                    "click.colorpicker": n.proxy(this.show, this),
                    "focus.colorpicker": n.proxy(this.show, this)
                }), this.update(), n(n.proxy(function () {
                    this.element.trigger("create")
                }, this))
            };
        o.Color = i, o.prototype = {
            constructor: o,
            destroy: function () {
                this.picker.remove(), this.element.removeData("colorpicker", "color").off(".colorpicker"), this.input !== !1 && this.input.off(".colorpicker"), this.component !== !1 && this.component.off(".colorpicker"), this.element.removeClass("colorpicker-element"), this.element.trigger({
                    type: "destroy"
                })
            },
            reposition: function () {
                if (this.options.inline !== !1 || this.options.container) return !1;
                var t = this.container && this.container[0] !== e.document.body ? "position" : "offset",
                    n = this.component || this.element,
                    i = n[t]();
                "right" === this.options.align && (i.left -= this.picker.outerWidth() - n.outerWidth()), this.picker.css({
                    top: i.top + n.outerHeight(),
                    left: i.left
                })
            },
            show: function (t) {
                this.isDisabled() || (this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.reposition(), n(e).on("resize.colorpicker", n.proxy(this.reposition, this)), !t || this.hasInput() && "color" !== this.input.attr("type") || t.stopPropagation && t.preventDefault && (t.stopPropagation(), t.preventDefault()), !this.component && this.input || this.options.inline !== !1 || n(e.document).on({
                    "mousedown.colorpicker": n.proxy(this.hide, this)
                }), this.element.trigger({
                    type: "showPicker",
                    color: this.color
                }))
            },
            hide: function (t) {
                return ("undefined" == typeof t || !t.target || !(n(t.currentTarget).parents(".colorpicker").length > 0 || n(t.target).parents(".colorpicker").length > 0)) && (this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), n(e).off("resize.colorpicker", this.reposition), n(e.document).off({
                    "mousedown.colorpicker": this.hide
                }), this.update(), void this.element.trigger({
                    type: "hidePicker",
                    color: this.color
                }))
            },
            updateData: function (t) {
                return t = t || this.color.toString(this.format, !1), this.element.data("color", t), t
            },
            updateInput: function (t) {
                return t = t || this.color.toString(this.format, !1), this.input !== !1 && this.input.prop("value", t), t
            },
            updatePicker: function (t) {
                "undefined" != typeof t && (this.color = this.createColor(t));
                var e = this.options.horizontal === !1 ? this.options.sliders : this.options.slidersHorz,
                    n = this.picker.find("i");
                if (0 !== n.length) return this.options.horizontal === !1 ? (e = this.options.sliders, n.eq(1).css("top", e.hue.maxTop * (1 - this.color.value.h)).end().eq(2).css("top", e.alpha.maxTop * (1 - this.color.value.a))) : (e = this.options.slidersHorz, n.eq(1).css("left", e.hue.maxLeft * (1 - this.color.value.h)).end().eq(2).css("left", e.alpha.maxLeft * (1 - this.color.value.a))), n.eq(0).css({
                    top: e.saturation.maxTop - this.color.value.b * e.saturation.maxTop,
                    left: this.color.value.s * e.saturation.maxLeft
                }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.toHex(this.color.value.h, 1, 1, 1)), this.picker.find(".colorpicker-alpha").css("backgroundColor", this.color.toHex()), this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor", this.color.toString(this.format, !0)), t
            },
            updateComponent: function (t) {
                var e;
                if (e = "undefined" != typeof t ? this.createColor(t) : this.color, this.component !== !1) {
                    var n = this.component.find("i").eq(0);
                    n.length > 0 ? n.css({
                        backgroundColor: e.toString(this.format, !0)
                    }) : this.component.css({
                        backgroundColor: e.toString(this.format, !0)
                    })
                }
                return e.toString(this.format, !1)
            },
            update: function (t) {
                var e;
                return this.getValue(!1) === !1 && t !== !0 || (e = this.updateComponent(), this.updateInput(e), this.updateData(e), this.updatePicker()), e
            },
            setValue: function (t) {
                this.color = this.createColor(t), this.update(!0), this.element.trigger({
                    type: "changeColor",
                    color: this.color,
                    value: t
                })
            },
            createColor: function (t) {
                return new i(t ? t : null, this.options.colorSelectors, this.options.fallbackColor ? this.options.fallbackColor : this.color, this.options.fallbackFormat)
            },
            getValue: function (t) {
                t = "undefined" == typeof t ? this.options.fallbackColor : t;
                var e;
                return e = this.hasInput() ? this.input.val() : this.element.data("color"), void 0 !== e && "" !== e && null !== e || (e = t), e
            },
            hasInput: function () {
                return this.input !== !1
            },
            isDisabled: function () {
                return !!this.hasInput() && this.input.prop("disabled") === !0
            },
            disable: function () {
                return !!this.hasInput() && (this.input.prop("disabled", !0), this.element.trigger({
                    type: "disable",
                    color: this.color,
                    value: this.getValue()
                }), !0)
            },
            enable: function () {
                return !!this.hasInput() && (this.input.prop("disabled", !1), this.element.trigger({
                    type: "enable",
                    color: this.color,
                    value: this.getValue()
                }), !0)
            },
            currentSlider: null,
            mousePointer: {
                left: 0,
                top: 0
            },
            mousedown: function (t) {
                !t.pageX && !t.pageY && t.originalEvent && t.originalEvent.touches && (t.pageX = t.originalEvent.touches[0].pageX, t.pageY = t.originalEvent.touches[0].pageY), t.stopPropagation(), t.preventDefault();
                var i = n(t.target),
                    a = i.closest("div"),
                    o = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
                if (!a.is(".colorpicker")) {
                    if (a.is(".colorpicker-saturation")) this.currentSlider = n.extend({}, o.saturation);
                    else if (a.is(".colorpicker-hue")) this.currentSlider = n.extend({}, o.hue);
                    else {
                        if (!a.is(".colorpicker-alpha")) return !1;
                        this.currentSlider = n.extend({}, o.alpha)
                    }
                    var s = a.offset();
                    this.currentSlider.guide = a.find("i")[0].style, this.currentSlider.left = t.pageX - s.left, this.currentSlider.top = t.pageY - s.top, this.mousePointer = {
                        left: t.pageX,
                        top: t.pageY
                    }, n(e.document).on({
                        "mousemove.colorpicker": n.proxy(this.mousemove, this),
                        "touchmove.colorpicker": n.proxy(this.mousemove, this),
                        "mouseup.colorpicker": n.proxy(this.mouseup, this),
                        "touchend.colorpicker": n.proxy(this.mouseup, this)
                    }).trigger("mousemove")
                }
                return !1
            },
            mousemove: function (t) {
                !t.pageX && !t.pageY && t.originalEvent && t.originalEvent.touches && (t.pageX = t.originalEvent.touches[0].pageX, t.pageY = t.originalEvent.touches[0].pageY), t.stopPropagation(), t.preventDefault();
                var e = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((t.pageX || this.mousePointer.left) - this.mousePointer.left))),
                    n = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((t.pageY || this.mousePointer.top) - this.mousePointer.top)));
                return this.currentSlider.guide.left = e + "px", this.currentSlider.guide.top = n + "px", this.currentSlider.callLeft && this.color[this.currentSlider.callLeft].call(this.color, e / this.currentSlider.maxLeft), this.currentSlider.callTop && this.color[this.currentSlider.callTop].call(this.color, n / this.currentSlider.maxTop), this.options.format !== !1 || "setAlpha" !== this.currentSlider.callTop && "setAlpha" !== this.currentSlider.callLeft || (1 !== this.color.value.a ? (this.format = "rgba", this.color.origFormat = "rgba") : (this.format = "hex", this.color.origFormat = "hex")), this.update(!0), this.element.trigger({
                    type: "changeColor",
                    color: this.color
                }), !1
            },
            mouseup: function (t) {
                return t.stopPropagation(), t.preventDefault(), n(e.document).off({
                    "mousemove.colorpicker": this.mousemove,
                    "touchmove.colorpicker": this.mousemove,
                    "mouseup.colorpicker": this.mouseup,
                    "touchend.colorpicker": this.mouseup
                }), !1
            },
            change: function (t) {
                this.keyup(t)
            },
            keyup: function (t) {
                38 === t.keyCode ? (this.color.value.a < 1 && (this.color.value.a = Math.round(100 * (this.color.value.a + .01)) / 100), this.update(!0)) : 40 === t.keyCode ? (this.color.value.a > 0 && (this.color.value.a = Math.round(100 * (this.color.value.a - .01)) / 100), this.update(!0)) : (this.color = this.createColor(this.input.val()), this.color.origFormat && this.options.format === !1 && (this.format = this.color.origFormat), this.getValue(!1) !== !1 && (this.updateData(), this.updateComponent(), this.updatePicker())), this.element.trigger({
                    type: "changeColor",
                    color: this.color,
                    value: this.input.val()
                })
            }
        }, n.colorpicker = o, n.fn.colorpicker = function (t) {
            var e = Array.prototype.slice.call(arguments, 1),
                i = 1 === this.length,
                a = null,
                s = this.each(function () {
                    var i = n(this),
                        s = i.data("colorpicker"),
                        r = "object" == typeof t ? t : {};
                    s || (s = new o(this, r), i.data("colorpicker", s)), "string" == typeof t ? n.isFunction(s[t]) ? a = s[t].apply(s, e) : (e.length && (s[t] = e[0]), a = s[t]) : a = i
                });
            return i ? a : s
        }, n.fn.colorpicker.constructor = o
    });