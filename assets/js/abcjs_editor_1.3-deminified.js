/*
 * Raphael 1.4.3 - JavaScript Vector Library
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael = (function () {
    function aA() {
        if (aA.is(arguments[0], aV)) {
            var d = arguments[0],
                e = B[bk](aA, d.splice(0, 3 + aA.is(d[0], ax))),
                S = e.set();
            for (var R = 0, bp = d[o]; R < bp; R++) {
                var E = d[R] || {};
                a9.test(E.type) && S[f](e[E.type]().attr(E))
            }
            return S
        }
        return B[bk](aA, arguments)
    }
    aA.version = "1.4.3";
    var a = /[, ]+/,
        a9 = /^(circle|rect|path|ellipse|text|image)$/,
        bm = "prototype",
        ab = "hasOwnProperty",
        V = document,
        aH = window,
        n = {
            was: Object[bm][ab].call(aH, "Raphael"),
            is: aH.Raphael
        }, bh = function () {}, a5 = "appendChild",
        bk = "apply",
        bf = "concat",
        P = "createTouch" in V,
        aG = "",
        az = " ",
        F = "split",
        M = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend" [F](az),
        ba = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, aN = "join",
        o = "length",
        bo = String[bm].toLowerCase,
        aj = Math,
        h = aj.max,
        a3 = aj.min,
        ax = "number",
        aa = "string",
        aV = "array",
        aP = "toString",
        aS = "fill",
        aK = Object[bm][aP],
        bc = {}, a6 = aj.pow,
        f = "push",
        bi = /^(?=[\da-f]$)/,
        c = /^url\(['"]?([^\)]+?)['"]?\)$/i,
        C = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+(?:\s*,\s*[\d\.]+)?)\s*\)|rgba?\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%(?:\s*,\s*[\d\.]+%))\s*\)|hs[bl]\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hs[bl]\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\))\s*$/i,
        Y = aj.round,
        A = "setAttribute",
        ae = parseFloat,
        N = parseInt,
        aT = " progid:DXImageTransform.Microsoft",
        a8 = String[bm].toUpperCase,
        l = {
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            opacity: 1,
            path: "M0,0",
            r: 0,
            rotation: 0,
            rx: 0,
            ry: 0,
            scale: "1 1",
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            translation: "0 0",
            width: 0,
            x: 0,
            y: 0
        }, ah = {
            along: "along",
            blur: ax,
            "clip-rect": "csv",
            cx: ax,
            cy: ax,
            fill: "colour",
            "fill-opacity": ax,
            "font-size": ax,
            height: ax,
            opacity: ax,
            path: "path",
            r: ax,
            rotation: "csv",
            rx: ax,
            ry: ax,
            scale: "csv",
            stroke: "colour",
            "stroke-opacity": ax,
            "stroke-width": ax,
            translation: "csv",
            width: ax,
            x: ax,
            y: ax
        }, bb = "replace";
    aA.type = (aH.SVGAngle || V.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");
    if (aA.type == "VML") {
        var ap = V.createElement("div");
        ap.innerHTML = "<!--[if vml]><br><br><![endif]-->";
        if (ap.childNodes[o] != 2) {
            return aA.type = null
        }
        ap = null
    }
    aA.svg = !(aA.vml = aA.type == "VML");
    bh[bm] = aA[bm];
    aA._id = 0;
    aA._oid = 0;
    aA.fn = {};
    aA.is = function (e, d) {
        d = bo.call(d);
        return (d == "object" && e === Object(e)) || (d == "undefined" && typeof e == d) || (d == "null" && e == null) || bo.call(aK.call(e).slice(8, - 1)) == d
    };
    aA.setWindow = function (d) {
        aH = d;
        V = aH.document
    };
    var aW = function (e) {
        if (aA.vml) {
            var d = /^\s+|\s+$/g;
            aW = at(function (R) {
                var S;
                R = (R + aG)[bb](d, aG);
                try {
                    var bp = new aH.ActiveXObject("htmlfile");
                    bp.write("<body>");
                    bp.close();
                    S = bp.body
                } catch (br) {
                    S = aH.createPopup().document.body
                }
                var i = S.createTextRange();
                try {
                    S.style.color = R;
                    var bq = i.queryCommandValue("ForeColor");
                    bq = ((bq & 255) << 16) | (bq & 65280) | ((bq & 16711680) >>> 16);
                    return "#" + ("000000" + bq[aP](16)).slice(-6)
                } catch (br) {
                    return "none"
                }
            })
        } else {
            var E = V.createElement("i");
            E.title = "Rapha\xebl Colour Picker";
            E.style.display = "none";
            V.body[a5](E);
            aW = at(function (i) {
                E.style.color = i;
                return V.defaultView.getComputedStyle(E, aG).getPropertyValue("color")
            })
        }
        return aW(e)
    };
    var au = function () {
        return "hsb(" + [this.h, this.s, this.b] + ")"
    }, y = function () {
        return this.hex
    };
    aA.hsb2rgb = at(function (bs, bq, bw) {
        if (aA.is(bs, "object") && "h" in bs && "s" in bs && "b" in bs) {
            bw = bs.b;
            bq = bs.s;
            bs = bs.h
        }
        var R, S, bx;
        if (bw == 0) {
            return {
                r: 0,
                g: 0,
                b: 0,
                hex: "#000"
            }
        }
        if (bs > 1 || bq > 1 || bw > 1) {
            bs /= 255;
            bq /= 255;
            bw /= 255
        }
        var bp = ~~ (bs * 6),
            bt = (bs * 6) - bp,
            E = bw * (1 - bq),
            e = bw * (1 - (bq * bt)),
            by = bw * (1 - (bq * (1 - bt)));
        R = [bw, e, E, E, by, bw, bw][bp];
        S = [by, bw, bw, e, E, E, by][bp];
        bx = [E, E, by, bw, bw, e, E][bp];
        R *= 255;
        S *= 255;
        bx *= 255;
        var bu = {
            r: R,
            g: S,
            b: bx,
            toString: y
        }, d = (~~R)[aP](16),
            br = (~~S)[aP](16),
            bv = (~~bx)[aP](16);
        d = d[bb](bi, "0");
        br = br[bb](bi, "0");
        bv = bv[bb](bi, "0");
        bu.hex = "#" + d + br + bv;
        return bu
    }, aA);
    aA.rgb2hsb = at(function (d, e, bq) {
        if (aA.is(d, "object") && "r" in d && "g" in d && "b" in d) {
            bq = d.b;
            e = d.g;
            d = d.r
        }
        if (aA.is(d, aa)) {
            var bs = aA.getRGB(d);
            d = bs.r;
            e = bs.g;
            bq = bs.b
        }
        if (d > 1 || e > 1 || bq > 1) {
            d /= 255;
            e /= 255;
            bq /= 255
        }
        var bp = h(d, e, bq),
            i = a3(d, e, bq),
            R, E, S = bp;
        if (i == bp) {
            return {
                h: 0,
                s: 0,
                b: bp
            }
        } else {
            var br = (bp - i);
            E = br / bp;
            if (d == bp) {
                R = (e - bq) / br
            } else {
                if (e == bp) {
                    R = 2 + ((bq - d) / br)
                } else {
                    R = 4 + ((d - e) / br)
                }
            }
            R /= 6;
            R < 0 && R++;
            R > 1 && R--
        }
        return {
            h: R,
            s: E,
            b: S,
            toString: au
        }
    }, aA);
    var aX = /,?([achlmqrstvxz]),?/gi,
        aZ = /\s*,\s*/,
        j = {
            hs: 1,
            rg: 1
        };
    aA._path2string = function () {
        return this.join(",")[bb](aX, "$1")
    };

    function at(E, e, d) {
        function i() {
            var R = Array[bm].slice.call(arguments, 0),
                bp = R[aN]("\u25ba"),
                S = i.cache = i.cache || {}, bq = i.count = i.count || [];
            if (S[ab](bp)) {
                return d ? d(S[bp]) : S[bp]
            }
            bq[o] >= 1000 && delete S[bq.shift()];
            bq[f](bp);
            S[bp] = E[bk](e, R);
            return d ? d(S[bp]) : S[bp]
        }
        return i
    }
    aA.getRGB = at(function (e) {
        if (!e || !! ((e = e + aG).indexOf("-") + 1)) {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1
            }
        }
        if (e == "none") {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none"
            }
        }!(j[ab](e.substring(0, 2)) || e.charAt() == "#") && (e = aW(e));
        var bp, i, E, bs, S, bt, bq = e.match(C);
        if (bq) {
            if (bq[2]) {
                bs = N(bq[2].substring(5), 16);
                E = N(bq[2].substring(3, 5), 16);
                i = N(bq[2].substring(1, 3), 16)
            }
            if (bq[3]) {
                bs = N((bt = bq[3].charAt(3)) + bt, 16);
                E = N((bt = bq[3].charAt(2)) + bt, 16);
                i = N((bt = bq[3].charAt(1)) + bt, 16)
            }
            if (bq[4]) {
                bq = bq[4][F](aZ);
                i = ae(bq[0]);
                E = ae(bq[1]);
                bs = ae(bq[2]);
                S = ae(bq[3])
            }
            if (bq[5]) {
                bq = bq[5][F](aZ);
                i = ae(bq[0]) * 2.55;
                E = ae(bq[1]) * 2.55;
                bs = ae(bq[2]) * 2.55;
                S = ae(bq[3])
            }
            if (bq[6]) {
                bq = bq[6][F](aZ);
                i = ae(bq[0]);
                E = ae(bq[1]);
                bs = ae(bq[2]);
                return aA.hsb2rgb(i, E, bs)
            }
            if (bq[7]) {
                bq = bq[7][F](aZ);
                i = ae(bq[0]) * 2.55;
                E = ae(bq[1]) * 2.55;
                bs = ae(bq[2]) * 2.55;
                return aA.hsb2rgb(i, E, bs)
            }
            bq = {
                r: i,
                g: E,
                b: bs
            };
            var d = (~~i)[aP](16),
                R = (~~E)[aP](16),
                br = (~~bs)[aP](16);
            d = d[bb](bi, "0");
            R = R[bb](bi, "0");
            br = br[bb](bi, "0");
            bq.hex = "#" + d + R + br;
            isFinite(ae(S)) && (bq.o = S);
            return bq
        }
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1
        }
    }, aA);
    aA.getColor = function (e) {
        var i = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: e || 0.75
        }, d = this.hsb2rgb(i.h, i.s, i.b);
        i.h += 0.075;
        if (i.h > 1) {
            i.h = 0;
            i.s -= 0.2;
            i.s <= 0 && (this.getColor.start = {
                h: 0,
                s: 1,
                b: i.b
            })
        }
        return d.hex
    };
    aA.getColor.reset = function () {
        delete this.start
    };
    var aI = /([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,
        ay = /(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig;
    aA.parsePathString = at(function (d) {
        if (!d) {
            return null
        }
        var i = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        }, e = [];
        if (aA.is(d, aV) && aA.is(d[0], aV)) {
            e = aJ(d)
        }
        if (!e[o]) {
            (d + aG)[bb](aI, function (R, E, bq) {
                var bp = [],
                    S = bo.call(E);
                bq[bb](ay, function (bs, br) {
                    br && bp[f](+br)
                });
                if (S == "m" && bp[o] > 2) {
                    e[f]([E][bf](bp.splice(0, 2)));
                    S = "l";
                    E = E == "m" ? "l" : "L"
                }
                while (bp[o] >= i[S]) {
                    e[f]([E][bf](bp.splice(0, i[S])));
                    if (!i[S]) {
                        break
                    }
                }
            })
        }
        e[aP] = aA._path2string;
        return e
    });
    aA.findDotsAtSegment = function (e, d, bD, bB, bp, R, br, bq, bx) {
        var bv = 1 - bx,
            bu = a6(bv, 3) * e + a6(bv, 2) * 3 * bx * bD + bv * 3 * bx * bx * bp + a6(bx, 3) * br,
            bs = a6(bv, 3) * d + a6(bv, 2) * 3 * bx * bB + bv * 3 * bx * bx * R + a6(bx, 3) * bq,
            bz = e + 2 * bx * (bD - e) + bx * bx * (bp - 2 * bD + e),
            by = d + 2 * bx * (bB - d) + bx * bx * (R - 2 * bB + d),
            bC = bD + 2 * bx * (bp - bD) + bx * bx * (br - 2 * bp + bD),
            bA = bB + 2 * bx * (R - bB) + bx * bx * (bq - 2 * R + bB),
            bw = (1 - bx) * e + bx * bD,
            bt = (1 - bx) * d + bx * bB,
            E = (1 - bx) * bp + bx * br,
            i = (1 - bx) * R + bx * bq,
            S = (90 - aj.atan((bz - bC) / (by - bA)) * 180 / aj.PI);
        (bz > bC || by < bA) && (S += 180);
        return {
            x: bu,
            y: bs,
            m: {
                x: bz,
                y: by
            },
            n: {
                x: bC,
                y: bA
            },
            start: {
                x: bw,
                y: bt
            },
            end: {
                x: E,
                y: i
            },
            alpha: S
        }
    };
    var ad = at(function (bu) {
        if (!bu) {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        }
        bu = O(bu);
        var br = 0,
            bq = 0,
            R = [],
            e = [],
            E;
        for (var S = 0, bt = bu[o]; S < bt; S++) {
            E = bu[S];
            if (E[0] == "M") {
                br = E[1];
                bq = E[2];
                R[f](br);
                e[f](bq)
            } else {
                var bp = aU(br, bq, E[1], E[2], E[3], E[4], E[5], E[6]);
                R = R[bf](bp.min.x, bp.max.x);
                e = e[bf](bp.min.y, bp.max.y);
                br = E[5];
                bq = E[6]
            }
        }
        var d = a3[bk](0, R),
            bs = a3[bk](0, e);
        return {
            x: d,
            y: bs,
            width: h[bk](0, R) - d,
            height: h[bk](0, e) - bs
        }
    }),
        aJ = function (bp) {
            var E = [];
            if (!aA.is(bp, aV) || !aA.is(bp && bp[0], aV)) {
                bp = aA.parsePathString(bp)
            }
            for (var e = 0, R = bp[o]; e < R; e++) {
                E[e] = [];
                for (var d = 0, S = bp[e][o]; d < S; d++) {
                    E[e][d] = bp[e][d]
                }
            }
            E[aP] = aA._path2string;
            return E
        }, am = at(function (R) {
            if (!aA.is(R, aV) || !aA.is(R && R[0], aV)) {
                R = aA.parsePathString(R)
            }
            var bt = [],
                bv = 0,
                bu = 0,
                by = 0,
                bx = 0,
                E = 0;
            if (R[0][0] == "M") {
                bv = R[0][1];
                bu = R[0][2];
                by = bv;
                bx = bu;
                E++;
                bt[f](["M", bv, bu])
            }
            for (var bq = E, bz = R[o]; bq < bz; bq++) {
                var d = bt[bq] = [],
                    bw = R[bq];
                if (bw[0] != bo.call(bw[0])) {
                    d[0] = bo.call(bw[0]);
                    switch (d[0]) {
                    case "a":
                        d[1] = bw[1];
                        d[2] = bw[2];
                        d[3] = bw[3];
                        d[4] = bw[4];
                        d[5] = bw[5];
                        d[6] = +(bw[6] - bv).toFixed(3);
                        d[7] = +(bw[7] - bu).toFixed(3);
                        break;
                    case "v":
                        d[1] = +(bw[1] - bu).toFixed(3);
                        break;
                    case "m":
                        by = bw[1];
                        bx = bw[2];
                    default:
                        for (var bp = 1, br = bw[o]; bp < br; bp++) {
                            d[bp] = +(bw[bp] - ((bp % 2) ? bv : bu)).toFixed(3)
                        }
                    }
                } else {
                    d = bt[bq] = [];
                    if (bw[0] == "m") {
                        by = bw[1] + bv;
                        bx = bw[2] + bu
                    }
                    for (var S = 0, e = bw[o]; S < e; S++) {
                        bt[bq][S] = bw[S]
                    }
                }
                var bs = bt[bq][o];
                switch (bt[bq][0]) {
                case "z":
                    bv = by;
                    bu = bx;
                    break;
                case "h":
                    bv += +bt[bq][bs - 1];
                    break;
                case "v":
                    bu += +bt[bq][bs - 1];
                    break;
                default:
                    bv += +bt[bq][bs - 2];
                    bu += +bt[bq][bs - 1]
                }
            }
            bt[aP] = aA._path2string;
            return bt
        }, 0, aJ),
        v = at(function (R) {
            if (!aA.is(R, aV) || !aA.is(R && R[0], aV)) {
                R = aA.parsePathString(R)
            }
            var bs = [],
                bu = 0,
                bt = 0,
                bx = 0,
                bw = 0,
                E = 0;
            if (R[0][0] == "M") {
                bu = +R[0][1];
                bt = +R[0][2];
                bx = bu;
                bw = bt;
                E++;
                bs[0] = ["M", bu, bt]
            }
            for (var bq = E, by = R[o]; bq < by; bq++) {
                var d = bs[bq] = [],
                    bv = R[bq];
                if (bv[0] != a8.call(bv[0])) {
                    d[0] = a8.call(bv[0]);
                    switch (d[0]) {
                    case "A":
                        d[1] = bv[1];
                        d[2] = bv[2];
                        d[3] = bv[3];
                        d[4] = bv[4];
                        d[5] = bv[5];
                        d[6] = +(bv[6] + bu);
                        d[7] = +(bv[7] + bt);
                        break;
                    case "V":
                        d[1] = +bv[1] + bt;
                        break;
                    case "H":
                        d[1] = +bv[1] + bu;
                        break;
                    case "M":
                        bx = +bv[1] + bu;
                        bw = +bv[2] + bt;
                    default:
                        for (var bp = 1, br = bv[o]; bp < br; bp++) {
                            d[bp] = +bv[bp] + ((bp % 2) ? bu : bt)
                        }
                    }
                } else {
                    for (var S = 0, e = bv[o]; S < e; S++) {
                        bs[bq][S] = bv[S]
                    }
                }
                switch (d[0]) {
                case "Z":
                    bu = bx;
                    bt = bw;
                    break;
                case "H":
                    bu = d[1];
                    break;
                case "V":
                    bt = d[1];
                    break;
                default:
                    bu = bs[bq][bs[bq][o] - 2];
                    bt = bs[bq][bs[bq][o] - 1]
                }
            }
            bs[aP] = aA._path2string;
            return bs
        }, null, aJ),
        bl = function (e, E, d, i) {
            return [e, E, d, i, d, i]
        }, a4 = function (e, E, bp, R, d, i) {
            var S = 1 / 3,
                bq = 2 / 3;
            return [S * e + bq * bp, S * E + bq * R, S * d + bq * bp, S * i + bq * R, d, i]
        }, U = function (by, b3, bH, bF, bz, bt, S, bx, b2, bA) {
            var R = aj.PI,
                bE = R * 120 / 180,
                d = R / 180 * (+bz || 0),
                bL = [],
                bI, bZ = at(function (b4, b7, i) {
                    var b6 = b4 * aj.cos(i) - b7 * aj.sin(i),
                        b5 = b4 * aj.sin(i) + b7 * aj.cos(i);
                    return {
                        x: b6,
                        y: b5
                    }
                });
            if (!bA) {
                bI = bZ(by, b3, - d);
                by = bI.x;
                b3 = bI.y;
                bI = bZ(bx, b2, - d);
                bx = bI.x;
                b2 = bI.y;
                var e = aj.cos(R / 180 * bz),
                    bv = aj.sin(R / 180 * bz),
                    bN = (by - bx) / 2,
                    bM = (b3 - b2) / 2;
                var bX = (bN * bN) / (bH * bH) + (bM * bM) / (bF * bF);
                if (bX > 1) {
                    bX = aj.sqrt(bX);
                    bH = bX * bH;
                    bF = bX * bF
                }
                var E = bH * bH,
                    bQ = bF * bF,
                    bS = (bt == S ? -1 : 1) * aj.sqrt(aj.abs((E * bQ - E * bM * bM - bQ * bN * bN) / (E * bM * bM + bQ * bN * bN))),
                    bC = bS * bH * bM / bF + (by + bx) / 2,
                    bB = bS * -bF * bN / bH + (b3 + b2) / 2,
                    bs = aj.asin(((b3 - bB) / bF).toFixed(7)),
                    br = aj.asin(((b2 - bB) / bF).toFixed(7));
                bs = by < bC ? R - bs : bs;
                br = bx < bC ? R - br : br;
                bs < 0 && (bs = R * 2 + bs);
                br < 0 && (br = R * 2 + br);
                if (S && bs > br) {
                    bs = bs - R * 2
                }
                if (!S && br > bs) {
                    br = br - R * 2
                }
            } else {
                bs = bA[0];
                br = bA[1];
                bC = bA[2];
                bB = bA[3]
            }
            var bw = br - bs;
            if (aj.abs(bw) > bE) {
                var bD = br,
                    bG = bx,
                    bu = b2;
                br = bs + bE * (S && br > bs ? 1 : -1);
                bx = bC + bH * aj.cos(br);
                b2 = bB + bF * aj.sin(br);
                bL = U(bx, b2, bH, bF, bz, 0, S, bG, bu, [br, bD, bC, bB])
            }
            bw = br - bs;
            var bq = aj.cos(bs),
                b1 = aj.sin(bs),
                bp = aj.cos(br),
                b0 = aj.sin(br),
                bO = aj.tan(bw / 4),
                bR = 4 / 3 * bH * bO,
                bP = 4 / 3 * bF * bO,
                bY = [by, b3],
                bW = [by + bR * b1, b3 - bP * bq],
                bV = [bx + bR * b0, b2 - bP * bp],
                bT = [bx, b2];
            bW[0] = 2 * bY[0] - bW[0];
            bW[1] = 2 * bY[1] - bW[1];
            if (bA) {
                return [bW, bV, bT][bf](bL)
            } else {
                bL = [bW, bV, bT][bf](bL)[aN]()[F](",");
                var bJ = [];
                for (var bU = 0, bK = bL[o]; bU < bK; bU++) {
                    bJ[bU] = bU % 2 ? bZ(bL[bU - 1], bL[bU], d).y : bZ(bL[bU], bL[bU + 1], d).x
                }
                return bJ
            }
        }, X = function (e, d, E, i, br, bq, bp, S, bs) {
            var R = 1 - bs;
            return {
                x: a6(R, 3) * e + a6(R, 2) * 3 * bs * E + R * 3 * bs * bs * br + a6(bs, 3) * bp,
                y: a6(R, 3) * d + a6(R, 2) * 3 * bs * i + R * 3 * bs * bs * bq + a6(bs, 3) * S
            }
        }, aU = at(function (i, d, R, E, by, bx, bu, br) {
            var bw = (by - 2 * R + i) - (bu - 2 * by + R),
                bt = 2 * (R - i) - 2 * (by - R),
                bq = i - R,
                bp = (-bt + aj.sqrt(bt * bt - 4 * bw * bq)) / 2 / bw,
                S = (-bt - aj.sqrt(bt * bt - 4 * bw * bq)) / 2 / bw,
                bs = [d, br],
                bv = [i, bu],
                e;
            aj.abs(bp) > 1000000000000 && (bp = 0.5);
            aj.abs(S) > 1000000000000 && (S = 0.5);
            if (bp > 0 && bp < 1) {
                e = X(i, d, R, E, by, bx, bu, br, bp);
                bv[f](e.x);
                bs[f](e.y)
            }
            if (S > 0 && S < 1) {
                e = X(i, d, R, E, by, bx, bu, br, S);
                bv[f](e.x);
                bs[f](e.y)
            }
            bw = (bx - 2 * E + d) - (br - 2 * bx + E);
            bt = 2 * (E - d) - 2 * (bx - E);
            bq = d - E;
            bp = (-bt + aj.sqrt(bt * bt - 4 * bw * bq)) / 2 / bw;
            S = (-bt - aj.sqrt(bt * bt - 4 * bw * bq)) / 2 / bw;
            aj.abs(bp) > 1000000000000 && (bp = 0.5);
            aj.abs(S) > 1000000000000 && (S = 0.5);
            if (bp > 0 && bp < 1) {
                e = X(i, d, R, E, by, bx, bu, br, bp);
                bv[f](e.x);
                bs[f](e.y)
            }
            if (S > 0 && S < 1) {
                e = X(i, d, R, E, by, bx, bu, br, S);
                bv[f](e.x);
                bs[f](e.y)
            }
            return {
                min: {
                    x: a3[bk](0, bv),
                    y: a3[bk](0, bs)
                },
                max: {
                    x: h[bk](0, bv),
                    y: h[bk](0, bs)
                }
            }
        }),
        O = at(function (by, bt) {
            var R = v(by),
                bu = bt && v(bt),
                bv = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, d = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, bp = function (bz, bA) {
                    var i, bB;
                    if (!bz) {
                        return ["C", bA.x, bA.y, bA.x, bA.y, bA.x, bA.y]
                    }!(bz[0] in {
                        T: 1,
                        Q: 1
                    }) && (bA.qx = bA.qy = null);
                    switch (bz[0]) {
                    case "M":
                        bA.X = bz[1];
                        bA.Y = bz[2];
                        break;
                    case "A":
                        bz = ["C"][bf](U[bk](0, [bA.x, bA.y][bf](bz.slice(1))));
                        break;
                    case "S":
                        i = bA.x + (bA.x - (bA.bx || bA.x));
                        bB = bA.y + (bA.y - (bA.by || bA.y));
                        bz = ["C", i, bB][bf](bz.slice(1));
                        break;
                    case "T":
                        bA.qx = bA.x + (bA.x - (bA.qx || bA.x));
                        bA.qy = bA.y + (bA.y - (bA.qy || bA.y));
                        bz = ["C"][bf](a4(bA.x, bA.y, bA.qx, bA.qy, bz[1], bz[2]));
                        break;
                    case "Q":
                        bA.qx = bz[1];
                        bA.qy = bz[2];
                        bz = ["C"][bf](a4(bA.x, bA.y, bz[1], bz[2], bz[3], bz[4]));
                        break;
                    case "L":
                        bz = ["C"][bf](bl(bA.x, bA.y, bz[1], bz[2]));
                        break;
                    case "H":
                        bz = ["C"][bf](bl(bA.x, bA.y, bz[1], bA.y));
                        break;
                    case "V":
                        bz = ["C"][bf](bl(bA.x, bA.y, bA.x, bz[1]));
                        break;
                    case "Z":
                        bz = ["C"][bf](bl(bA.x, bA.y, bA.X, bA.Y));
                        break
                    }
                    return bz
                }, e = function (bz, bA) {
                    if (bz[bA][o] > 7) {
                        bz[bA].shift();
                        var bB = bz[bA];
                        while (bB[o]) {
                            bz.splice(bA++, 0, ["C"][bf](bB.splice(0, 6)))
                        }
                        bz.splice(bA, 1);
                        bw = h(R[o], bu && bu[o] || 0)
                    }
                }, E = function (bD, bC, bA, bz, bB) {
                    if (bD && bC && bD[bB][0] == "M" && bC[bB][0] != "M") {
                        bC.splice(bB, 0, ["M", bz.x, bz.y]);
                        bA.bx = 0;
                        bA.by = 0;
                        bA.x = bD[bB][1];
                        bA.y = bD[bB][2];
                        bw = h(R[o], bu && bu[o] || 0)
                    }
                };
            for (var br = 0, bw = h(R[o], bu && bu[o] || 0); br < bw; br++) {
                R[br] = bp(R[br], bv);
                e(R, br);
                bu && (bu[br] = bp(bu[br], d));
                bu && e(bu, br);
                E(R, bu, bv, d, br);
                E(bu, R, d, bv, br);
                var bq = R[br],
                    bx = bu && bu[br],
                    S = bq[o],
                    bs = bu && bx[o];
                bv.x = bq[S - 2];
                bv.y = bq[S - 1];
                bv.bx = ae(bq[S - 4]) || bv.x;
                bv.by = ae(bq[S - 3]) || bv.y;
                d.bx = bu && (ae(bx[bs - 4]) || d.x);
                d.by = bu && (ae(bx[bs - 3]) || d.y);
                d.x = bu && bx[bs - 2];
                d.y = bu && bx[bs - 1]
            }
            return bu ? [R, bu] : R
        }, null, aJ),
        t = at(function (bt) {
            var bs = [];
            for (var bp = 0, bu = bt[o]; bp < bu; bp++) {
                var e = {}, br = bt[bp].match(/^([^:]*):?([\d\.]*)/);
                e.color = aA.getRGB(br[1]);
                if (e.color.error) {
                    return null
                }
                e.color = e.color.hex;
                br[2] && (e.offset = br[2] + "%");
                bs[f](e)
            }
            for (bp = 1, bu = bs[o] - 1; bp < bu; bp++) {
                if (!bs[bp].offset) {
                    var E = ae(bs[bp - 1].offset || 0),
                        R = 0;
                    for (var S = bp + 1; S < bu; S++) {
                        if (bs[S].offset) {
                            R = bs[S].offset;
                            break
                        }
                    }
                    if (!R) {
                        R = 100;
                        S = bu
                    }
                    R = ae(R);
                    var bq = (R - E) / (S - bp + 1);
                    for (; bp < S; bp++) {
                        E += bq;
                        bs[bp].offset = E + "%"
                    }
                }
            }
            return bs
        }),
        aB = function (d, R, i, E) {
            var e;
            if (aA.is(d, aa) || aA.is(d, "object")) {
                e = aA.is(d, aa) ? V.getElementById(d) : d;
                if (e.tagName) {
                    if (R == null) {
                        return {
                            container: e,
                            width: e.style.pixelWidth || e.offsetWidth,
                            height: e.style.pixelHeight || e.offsetHeight
                        }
                    } else {
                        return {
                            container: e,
                            width: R,
                            height: i
                        }
                    }
                }
            } else {
                return {
                    container: 1,
                    x: d,
                    y: R,
                    width: i,
                    height: E
                }
            }
        }, a0 = function (d, i) {
            var e = this;
            for (var E in i) {
                if (i[ab](E) && !(E in d)) {
                    switch (typeof i[E]) {
                    case "function":
                        (function (R) {
                            d[E] = d === e ? R : function () {
                                return R[bk](e, arguments)
                            }
                        })(i[E]);
                        break;
                    case "object":
                        d[E] = d[E] || {};
                        a0.call(this, d[E], i[E]);
                        break;
                    default:
                        d[E] = i[E];
                        break
                    }
                }
            }
        }, aw = function (d, e) {
            d == e.top && (e.top = d.prev);
            d == e.bottom && (e.bottom = d.next);
            d.next && (d.next.prev = d.prev);
            d.prev && (d.prev.next = d.next)
        }, ag = function (d, e) {
            if (e.top === d) {
                return
            }
            aw(d, e);
            d.next = null;
            d.prev = e.top;
            e.top.next = d;
            e.top = d
        }, m = function (d, e) {
            if (e.bottom === d) {
                return
            }
            aw(d, e);
            d.next = e.bottom;
            d.prev = null;
            e.bottom.prev = d;
            e.bottom = d
        }, G = function (e, d, i) {
            aw(e, i);
            d == i.top && (i.top = e);
            d.next && (d.next.prev = e);
            e.next = d.next;
            e.prev = d;
            d.next = e
        }, aD = function (e, d, i) {
            aw(e, i);
            d == i.bottom && (i.bottom = e);
            d.prev && (d.prev.next = e);
            e.prev = d.prev;
            d.prev = e;
            e.next = d
        }, w = function (d) {
            return function () {
                throw new Error("Rapha\xebl: you are calling to method \u201c" + d + "\u201d of removed object")
            }
        }, aF = /^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/;
    if (aA.svg) {
        bh[bm].svgns = "http://www.w3.org/2000/svg";
        bh[bm].xlink = "http://www.w3.org/1999/xlink";
        Y = function (d) {
            return +d + (~~d === d) * 0.5
        };
        var a2 = function (i, d) {
            if (d) {
                for (var e in d) {
                    if (d[ab](e)) {
                        i[A](e, d[e] + aG)
                    }
                }
            } else {
                i = V.createElementNS(bh[bm].svgns, i);
                i.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
                return i
            }
        };
        aA[aP] = function () {
            return "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version
        };
        var u = function (d, E) {
            var e = a2("path");
            E.canvas && E.canvas[a5](e);
            var i = new aL(e, E);
            i.type = "path";
            ai(i, {
                fill: "none",
                stroke: "#000",
                path: d
            });
            return i
        };
        var b = function (R, bx, d) {
            var bu = "linear",
                br = 0.5,
                bp = 0.5,
                bz = R.style;
            bx = (bx + aG)[bb](aF, function (bB, i, bC) {
                bu = "radial";
                if (i && bC) {
                    br = ae(i);
                    bp = ae(bC);
                    var bA = ((bp > 0.5) * 2 - 1);
                    a6(br - 0.5, 2) + a6(bp - 0.5, 2) > 0.25 && (bp = aj.sqrt(0.25 - a6(br - 0.5, 2)) * bA + 0.5) && bp != 0.5 && (bp = bp.toFixed(5) - 0.00001 * bA)
                }
                return aG
            });
            bx = bx[F](/\s*\-\s*/);
            if (bu == "linear") {
                var bq = bx.shift();
                bq = -ae(bq);
                if (isNaN(bq)) {
                    return null
                }
                var S = [0, 0, aj.cos(bq * aj.PI / 180), aj.sin(bq * aj.PI / 180)],
                    bw = 1 / (h(aj.abs(S[2]), aj.abs(S[3])) || 1);
                S[2] *= bw;
                S[3] *= bw;
                if (S[2] < 0) {
                    S[0] = -S[2];
                    S[2] = 0
                }
                if (S[3] < 0) {
                    S[1] = -S[3];
                    S[3] = 0
                }
            }
            var bt = t(bx);
            if (!bt) {
                return null
            }
            var e = R.getAttribute(aS);
            e = e.match(/^url\(#(.*)\)$/);
            e && d.defs.removeChild(V.getElementById(e[1]));
            var E = a2(bu + "Gradient");
            E.id = "r" + (aA._id++)[aP](36);
            a2(E, bu == "radial" ? {
                fx: br,
                fy: bp
            } : {
                x1: S[0],
                y1: S[1],
                x2: S[2],
                y2: S[3]
            });
            d.defs[a5](E);
            for (var bs = 0, by = bt[o]; bs < by; bs++) {
                var bv = a2("stop");
                a2(bv, {
                    offset: bt[bs].offset ? bt[bs].offset : !bs ? "0%" : "100%",
                    "stop-color": bt[bs].color || "#fff"
                });
                E[a5](bv)
            }
            a2(R, {
                fill: "url(#" + E.id + ")",
                opacity: 1,
                "fill-opacity": 1
            });
            bz.fill = aG;
            bz.opacity = 1;
            bz.fillOpacity = 1;
            return 1
        };
        var W = function (e) {
            var d = e.getBBox();
            a2(e.pattern, {
                patternTransform: aA.format("translate({0},{1})", d.x, d.y)
            })
        };
        var ai = function (bw, bF) {
            var bz = {
                "": [0],
                none: [0],
                "-": [3, 1],
                ".": [1, 1],
                "-.": [3, 1, 1, 1],
                "-..": [3, 1, 1, 1, 1, 1],
                ". ": [1, 3],
                "- ": [4, 3],
                "--": [8, 3],
                "- .": [4, 3, 1, 3],
                "--.": [8, 3, 1, 3],
                "--..": [8, 3, 1, 3, 1, 3]
            }, bB = bw.node,
                bx = bw.attrs,
                bt = bw.rotate(),
                bp = function (bM, bL) {
                    bL = bz[bo.call(bL)];
                    if (bL) {
                        var bJ = bM.attrs["stroke-width"] || "1",
                            bH = {
                                round: bJ,
                                square: bJ,
                                butt: 0
                            }[bM.attrs["stroke-linecap"] || bF["stroke-linecap"]] || 0,
                            bK = [];
                        var bI = bL[o];
                        while (bI--) {
                            bK[bI] = bL[bI] * bJ + ((bI % 2) ? 1 : -1) * bH
                        }
                        a2(bB, {
                            "stroke-dasharray": bK[aN](",")
                        })
                    }
                };
            bF[ab]("rotation") && (bt = bF.rotation);
            var bs = (bt + aG)[F](a);
            if (!(bs.length - 1)) {
                bs = null
            } else {
                bs[1] = +bs[1];
                bs[2] = +bs[2]
            }
            ae(bt) && bw.rotate(0, true);
            for (var bA in bF) {
                if (bF[ab](bA)) {
                    if (!l[ab](bA)) {
                        continue
                    }
                    var by = bF[bA];
                    bx[bA] = by;
                    switch (bA) {
                    case "blur":
                        bw.blur(by);
                        break;
                    case "rotation":
                        bw.rotate(by, true);
                        break;
                    case "href":
                    case "title":
                    case "target":
                        var bD = bB.parentNode;
                        if (bo.call(bD.tagName) != "a") {
                            var R = a2("a");
                            bD.insertBefore(R, bB);
                            R[a5](bB);
                            bD = R
                        }
                        bD.setAttributeNS(bw.paper.xlink, bA, by);
                        break;
                    case "cursor":
                        bB.style.cursor = by;
                        break;
                    case "clip-rect":
                        var e = (by + aG)[F](a);
                        if (e[o] == 4) {
                            bw.clip && bw.clip.parentNode.parentNode.removeChild(bw.clip.parentNode);
                            var i = a2("clipPath"),
                                bC = a2("rect");
                            i.id = "r" + (aA._id++)[aP](36);
                            a2(bC, {
                                x: e[0],
                                y: e[1],
                                width: e[2],
                                height: e[3]
                            });
                            i[a5](bC);
                            bw.paper.defs[a5](i);
                            a2(bB, {
                                "clip-path": "url(#" + i.id + ")"
                            });
                            bw.clip = bC
                        }
                        if (!by) {
                            var bE = V.getElementById(bB.getAttribute("clip-path")[bb](/(^url\(#|\)$)/g, aG));
                            bE && bE.parentNode.removeChild(bE);
                            a2(bB, {
                                "clip-path": aG
                            });
                            delete bw.clip
                        }
                        break;
                    case "path":
                        if (bw.type == "path") {
                            a2(bB, {
                                d: by ? bx.path = v(by) : "M0,0"
                            })
                        }
                        break;
                    case "width":
                        bB[A](bA, by);
                        if (bx.fx) {
                            bA = "x";
                            by = bx.x
                        } else {
                            break
                        }
                    case "x":
                        if (bx.fx) {
                            by = -bx.x - (bx.width || 0)
                        }
                    case "rx":
                        if (bA == "rx" && bw.type == "rect") {
                            break
                        }
                    case "cx":
                        bs && (bA == "x" || bA == "cx") && (bs[1] += by - bx[bA]);
                        bB[A](bA, Y(by));
                        bw.pattern && W(bw);
                        break;
                    case "height":
                        bB[A](bA, by);
                        if (bx.fy) {
                            bA = "y";
                            by = bx.y
                        } else {
                            break
                        }
                    case "y":
                        if (bx.fy) {
                            by = -bx.y - (bx.height || 0)
                        }
                    case "ry":
                        if (bA == "ry" && bw.type == "rect") {
                            break
                        }
                    case "cy":
                        bs && (bA == "y" || bA == "cy") && (bs[2] += by - bx[bA]);
                        bB[A](bA, Y(by));
                        bw.pattern && W(bw);
                        break;
                    case "r":
                        if (bw.type == "rect") {
                            a2(bB, {
                                rx: by,
                                ry: by
                            })
                        } else {
                            bB[A](bA, by)
                        }
                        break;
                    case "src":
                        if (bw.type == "image") {
                            bB.setAttributeNS(bw.paper.xlink, "href", by)
                        }
                        break;
                    case "stroke-width":
                        bB.style.strokeWidth = by;
                        bB[A](bA, by);
                        if (bx["stroke-dasharray"]) {
                            bp(bw, bx["stroke-dasharray"])
                        }
                        break;
                    case "stroke-dasharray":
                        bp(bw, by);
                        break;
                    case "translation":
                        var bq = (by + aG)[F](a);
                        bq[0] = +bq[0] || 0;
                        bq[1] = +bq[1] || 0;
                        if (bs) {
                            bs[1] += bq[0];
                            bs[2] += bq[1]
                        }
                        x.call(bw, bq[0], bq[1]);
                        break;
                    case "scale":
                        bq = (by + aG)[F](a);
                        bw.scale(+bq[0] || 1, + bq[1] || +bq[0] || 1, isNaN(ae(bq[2])) ? null : +bq[2], isNaN(ae(bq[3])) ? null : +bq[3]);
                        break;
                    case aS:
                        var S = (by + aG).match(c);
                        if (S) {
                            i = a2("pattern");
                            var bv = a2("image");
                            i.id = "r" + (aA._id++)[aP](36);
                            a2(i, {
                                x: 0,
                                y: 0,
                                patternUnits: "userSpaceOnUse",
                                height: 1,
                                width: 1
                            });
                            a2(bv, {
                                x: 0,
                                y: 0
                            });
                            bv.setAttributeNS(bw.paper.xlink, "href", S[1]);
                            i[a5](bv);
                            var bG = V.createElement("img");
                            bG.style.cssText = "position:absolute;left:-9999em;top-9999em";
                            bG.onload = function () {
                                a2(i, {
                                    width: this.offsetWidth,
                                    height: this.offsetHeight
                                });
                                a2(bv, {
                                    width: this.offsetWidth,
                                    height: this.offsetHeight
                                });
                                V.body.removeChild(this);
                                bw.paper.safari()
                            };
                            V.body[a5](bG);
                            bG.src = S[1];
                            bw.paper.defs[a5](i);
                            bB.style.fill = "url(#" + i.id + ")";
                            a2(bB, {
                                fill: "url(#" + i.id + ")"
                            });
                            bw.pattern = i;
                            bw.pattern && W(bw);
                            break
                        }
                        var E = aA.getRGB(by);
                        if (!E.error) {
                            delete bF.gradient;
                            delete bx.gradient;
                            !aA.is(bx.opacity, "undefined") && aA.is(bF.opacity, "undefined") && a2(bB, {
                                opacity: bx.opacity
                            });
                            !aA.is(bx["fill-opacity"], "undefined") && aA.is(bF["fill-opacity"], "undefined") && a2(bB, {
                                "fill-opacity": bx["fill-opacity"]
                            })
                        } else {
                            if ((({
                                circle: 1,
                                ellipse: 1
                            })[ab](bw.type) || (by + aG).charAt() != "r") && b(bB, by, bw.paper)) {
                                bx.gradient = by;
                                bx.fill = "none";
                                break
                            }
                        }
                        E[ab]("o") && a2(bB, {
                            "fill-opacity": E.o / 100
                        });
                    case "stroke":
                        E = aA.getRGB(by);
                        bB[A](bA, E.hex);
                        bA == "stroke" && E[ab]("o") && a2(bB, {
                            "stroke-opacity": E.o / 100
                        });
                        break;
                    case "gradient":
                        (({
                            circle: 1,
                            ellipse: 1
                        })[ab](bw.type) || (by + aG).charAt() != "r") && b(bB, by, bw.paper);
                        break;
                    case "opacity":
                    case "fill-opacity":
                        if (bx.gradient) {
                            var d = V.getElementById(bB.getAttribute(aS)[bb](/^url\(#|\)$/g, aG));
                            if (d) {
                                var br = d.getElementsByTagName("stop");
                                br[br[o] - 1][A]("stop-opacity", by)
                            }
                            break
                        }
                    default:
                        bA == "font-size" && (by = N(by, 10) + "px");
                        var bu = bA[bb](/(\-.)/g, function (bH) {
                            return a8.call(bH.substring(1))
                        });
                        bB.style[bu] = by;
                        bB[A](bA, by);
                        break
                    }
                }
            }
            L(bw, bF);
            if (bs) {
                bw.rotate(bs.join(az))
            } else {
                ae(bt) && bw.rotate(bt, true)
            }
        };
        var k = 1.2,
            L = function (d, R) {
                if (d.type != "text" || !(R[ab]("text") || R[ab]("font") || R[ab]("font-size") || R[ab]("x") || R[ab]("y"))) {
                    return
                }
                var bs = d.attrs,
                    e = d.node,
                    bu = e.firstChild ? N(V.defaultView.getComputedStyle(e.firstChild, aG).getPropertyValue("font-size"), 10) : 10;
                if (R[ab]("text")) {
                    bs.text = R.text;
                    while (e.firstChild) {
                        e.removeChild(e.firstChild)
                    }
                    var E = (R.text + aG)[F]("\n");
                    for (var S = 0, bt = E[o]; S < bt; S++) {
                        if (E[S]) {
                            var bq = a2("tspan");
                            S && a2(bq, {
                                dy: bu * k,
                                x: bs.x
                            });
                            bq[a5](V.createTextNode(E[S]));
                            e[a5](bq)
                        }
                    }
                } else {
                    E = e.getElementsByTagName("tspan");
                    for (S = 0, bt = E[o]; S < bt; S++) {
                        S && a2(E[S], {
                            dy: bu * k,
                            x: bs.x
                        })
                    }
                }
                a2(e, {
                    y: bs.y
                });
                var bp = d.getBBox(),
                    br = bs.y - (bp.y + bp.height / 2);
                br && isFinite(br) && a2(e, {
                    y: bs.y + br
                })
            }, aL = function (e, d) {
                var E = 0,
                    i = 0;
                this[0] = e;
                this.id = aA._oid++;
                this.node = e;
                e.raphael = this;
                this.paper = d;
                this.attrs = this.attrs || {};
                this.transformations = [];
                this._ = {
                    tx: 0,
                    ty: 0,
                    rt: {
                        deg: 0,
                        cx: 0,
                        cy: 0
                    },
                    sx: 1,
                    sy: 1
                };
                !d.bottom && (d.bottom = this);
                this.prev = d.top;
                d.top && (d.top.next = this);
                d.top = this;
                this.next = null
            };
        aL[bm].rotate = function (e, d, E) {
            if (this.removed) {
                return this
            }
            if (e == null) {
                if (this._.rt.cx) {
                    return [this._.rt.deg, this._.rt.cx, this._.rt.cy][aN](az)
                }
                return this._.rt.deg
            }
            var i = this.getBBox();
            e = (e + aG)[F](a);
            if (e[o] - 1) {
                d = ae(e[1]);
                E = ae(e[2])
            }
            e = ae(e[0]);
            if (d != null) {
                this._.rt.deg = e
            } else {
                this._.rt.deg += e
            }(E == null) && (d = null);
            this._.rt.cx = d;
            this._.rt.cy = E;
            d = d == null ? i.x + i.width / 2 : d;
            E = E == null ? i.y + i.height / 2 : E;
            if (this._.rt.deg) {
                this.transformations[0] = aA.format("rotate({0} {1} {2})", this._.rt.deg, d, E);
                this.clip && a2(this.clip, {
                    transform: aA.format("rotate({0} {1} {2})", - this._.rt.deg, d, E)
                })
            } else {
                this.transformations[0] = aG;
                this.clip && a2(this.clip, {
                    transform: aG
                })
            }
            a2(this.node, {
                transform: this.transformations[aN](az)
            });
            return this
        };
        aL[bm].hide = function () {
            !this.removed && (this.node.style.display = "none");
            return this
        };
        aL[bm].show = function () {
            !this.removed && (this.node.style.display = "");
            return this
        };
        aL[bm].remove = function () {
            if (this.removed) {
                return
            }
            aw(this, this.paper);
            this.node.parentNode.removeChild(this.node);
            for (var d in this) {
                delete this[d]
            }
            this.removed = true
        };
        aL[bm].getBBox = function () {
            if (this.removed) {
                return this
            }
            if (this.type == "path") {
                return ad(this.attrs.path)
            }
            if (this.node.style.display == "none") {
                this.show();
                var E = true
            }
            var bq = {};
            try {
                bq = this.node.getBBox()
            } catch (S) {} finally {
                bq = bq || {}
            }
            if (this.type == "text") {
                bq = {
                    x: bq.x,
                    y: Infinity,
                    width: 0,
                    height: 0
                };
                for (var d = 0, R = this.node.getNumberOfChars(); d < R; d++) {
                    var bp = this.node.getExtentOfChar(d);
                    (bp.y < bq.y) && (bq.y = bp.y);
                    (bp.y + bp.height - bq.y > bq.height) && (bq.height = bp.y + bp.height - bq.y);
                    (bp.x + bp.width - bq.x > bq.width) && (bq.width = bp.x + bp.width - bq.x)
                }
            }
            E && this.hide();
            return bq
        };
        aL[bm].attr = function (E, bq) {
            if (this.removed) {
                return this
            }
            if (E == null) {
                var S = {};
                for (var R in this.attrs) {
                    if (this.attrs[ab](R)) {
                        S[R] = this.attrs[R]
                    }
                }
                this._.rt.deg && (S.rotation = this.rotate());
                (this._.sx != 1 || this._.sy != 1) && (S.scale = this.scale());
                S.gradient && S.fill == "none" && (S.fill = S.gradient) && delete S.gradient;
                return S
            }
            if (bq == null && aA.is(E, aa)) {
                if (E == "translation") {
                    return x.call(this)
                }
                if (E == "rotation") {
                    return this.rotate()
                }
                if (E == "scale") {
                    return this.scale()
                }
                if (E == aS && this.attrs.fill == "none" && this.attrs.gradient) {
                    return this.attrs.gradient
                }
                return this.attrs[E]
            }
            if (bq == null && aA.is(E, aV)) {
                var d = {};
                for (var e = 0, bp = E.length; e < bp; e++) {
                    d[E[e]] = this.attr(E[e])
                }
                return d
            }
            if (bq != null) {
                var br = {};
                br[E] = bq;
                ai(this, br)
            } else {
                if (E != null && aA.is(E, "object")) {
                    ai(this, E)
                }
            }
            return this
        };
        aL[bm].toFront = function () {
            if (this.removed) {
                return this
            }
            this.node.parentNode[a5](this.node);
            var d = this.paper;
            d.top != this && ag(this, d);
            return this
        };
        aL[bm].toBack = function () {
            if (this.removed) {
                return this
            }
            if (this.node.parentNode.firstChild != this.node) {
                this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
                m(this, this.paper);
                var d = this.paper
            }
            return this
        };
        aL[bm].insertAfter = function (d) {
            if (this.removed) {
                return this
            }
            var e = d.node;
            if (e.nextSibling) {
                e.parentNode.insertBefore(this.node, e.nextSibling)
            } else {
                e.parentNode[a5](this.node)
            }
            G(this, d, this.paper);
            return this
        };
        aL[bm].insertBefore = function (d) {
            if (this.removed) {
                return this
            }
            var e = d.node;
            e.parentNode.insertBefore(this.node, e);
            aD(this, d, this.paper);
            return this
        };
        aL[bm].blur = function (e) {
            var d = this;
            if (+e !== 0) {
                var i = a2("filter"),
                    E = a2("feGaussianBlur");
                d.attrs.blur = e;
                i.id = "r" + (aA._id++)[aP](36);
                a2(E, {
                    stdDeviation: +e || 1.5
                });
                i.appendChild(E);
                d.paper.defs.appendChild(i);
                d._blur = i;
                a2(d.node, {
                    filter: "url(#" + i.id + ")"
                })
            } else {
                if (d._blur) {
                    d._blur.parentNode.removeChild(d._blur);
                    delete d._blur;
                    delete d.attrs.blur
                }
                d.node.removeAttribute("filter")
            }
        };
        var Z = function (e, d, S, R) {
            d = Y(d);
            S = Y(S);
            var E = a2("circle");
            e.canvas && e.canvas[a5](E);
            var i = new aL(E, e);
            i.attrs = {
                cx: d,
                cy: S,
                r: R,
                fill: "none",
                stroke: "#000"
            };
            i.type = "circle";
            a2(E, i.attrs);
            return i
        };
        var aY = function (i, d, bq, e, S, bp) {
            d = Y(d);
            bq = Y(bq);
            var R = a2("rect");
            i.canvas && i.canvas[a5](R);
            var E = new aL(R, i);
            E.attrs = {
                x: d,
                y: bq,
                width: e,
                height: S,
                r: bp || 0,
                rx: bp || 0,
                ry: bp || 0,
                fill: "none",
                stroke: "#000"
            };
            E.type = "rect";
            a2(R, E.attrs);
            return E
        };
        var ar = function (e, d, bp, S, R) {
            d = Y(d);
            bp = Y(bp);
            var E = a2("ellipse");
            e.canvas && e.canvas[a5](E);
            var i = new aL(E, e);
            i.attrs = {
                cx: d,
                cy: bp,
                rx: S,
                ry: R,
                fill: "none",
                stroke: "#000"
            };
            i.type = "ellipse";
            a2(E, i.attrs);
            return i
        };
        var s = function (i, bp, d, bq, e, S) {
            var R = a2("image");
            a2(R, {
                x: d,
                y: bq,
                width: e,
                height: S,
                preserveAspectRatio: "none"
            });
            R.setAttributeNS(i.xlink, "href", bp);
            i.canvas && i.canvas[a5](R);
            var E = new aL(R, i);
            E.attrs = {
                x: d,
                y: bq,
                width: e,
                height: S,
                src: bp
            };
            E.type = "image";
            return E
        };
        var af = function (e, d, S, R) {
            var E = a2("text");
            a2(E, {
                x: d,
                y: S,
                "text-anchor": "middle"
            });
            e.canvas && e.canvas[a5](E);
            var i = new aL(E, e);
            i.attrs = {
                x: d,
                y: S,
                "text-anchor": "middle",
                text: R,
                font: l.font,
                stroke: "none",
                fill: "#000"
            };
            i.type = "text";
            ai(i, i.attrs);
            return i
        };
        var bj = function (e, d) {
            this.width = e || this.width;
            this.height = d || this.height;
            this.canvas[A]("width", this.width);
            this.canvas[A]("height", this.height);
            return this
        };
        var B = function () {
            var E = aB[bk](0, arguments),
                i = E && E.container,
                e = E.x,
                bp = E.y,
                R = E.width,
                d = E.height;
            if (!i) {
                throw new Error("SVG container not found.")
            }
            var S = a2("svg");
            e = e || 0;
            bp = bp || 0;
            R = R || 512;
            d = d || 342;
            a2(S, {
                xmlns: "http://www.w3.org/2000/svg",
                version: 1.1,
                width: R,
                height: d
            });
            if (i == 1) {
                S.style.cssText = "position:absolute;left:" + e + "px;top:" + bp + "px";
                V.body[a5](S)
            } else {
                if (i.firstChild) {
                    i.insertBefore(S, i.firstChild)
                } else {
                    i[a5](S)
                }
            }
            i = new bh;
            i.width = R;
            i.height = d;
            i.canvas = S;
            a0.call(i, i, aA.fn);
            i.clear();
            return i
        };
        bh[bm].clear = function () {
            var d = this.canvas;
            while (d.firstChild) {
                d.removeChild(d.firstChild)
            }
            this.bottom = this.top = null;
            (this.desc = a2("desc"))[a5](V.createTextNode("Created with Rapha\xebl"));
            d[a5](this.desc);
            d[a5](this.defs = a2("defs"))
        };
        bh[bm].remove = function () {
            this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
            for (var d in this) {
                this[d] = w(d)
            }
        }
    }
    if (aA.vml) {
        var J = {
            M: "m",
            L: "l",
            C: "c",
            Z: "x",
            m: "t",
            l: "r",
            c: "v",
            z: "x"
        }, aE = /([clmz]),?([^clmz]*)/gi,
            bn = /-?[^,\s-]+/g,
            aO = 1000 + az + 1000,
            r = 10,
            p = {
                path: 1,
                rect: 1
            }, a1 = function (bu) {
                var br = /[ahqstv]/ig,
                    E = v;
                (bu + aG).match(br) && (E = O);
                br = /[clmz]/g;
                if (E == v && !(bu + aG).match(br)) {
                    var bq = (bu + aG)[bb](aE, function (bx, bz, bv) {
                        var by = [],
                            i = bo.call(bz) == "m",
                            bw = J[bz];
                        bv[bb](bn, function (bA) {
                            if (i && by[o] == 2) {
                                bw += by + J[bz == "m" ? "l" : "L"];
                                by = []
                            }
                            by[f](Y(bA * r))
                        });
                        return bw + by
                    });
                    return bq
                }
                var bs = E(bu),
                    e, d;
                bq = [];
                for (var S = 0, bt = bs[o]; S < bt; S++) {
                    e = bs[S];
                    d = bo.call(bs[S][0]);
                    d == "z" && (d = "x");
                    for (var R = 1, bp = e[o]; R < bp; R++) {
                        d += Y(e[R] * r) + (R != bp - 1 ? "," : aG)
                    }
                    bq[f](d)
                }
                return bq[aN](az)
            };
        aA[aP] = function () {
            return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version
        };
        u = function (i, e) {
            var S = aq("group");
            S.style.cssText = "position:absolute;left:0;top:0;width:" + e.width + "px;height:" + e.height + "px";
            S.coordsize = e.coordsize;
            S.coordorigin = e.coordorigin;
            var R = aq("shape"),
                E = R.style;
            E.width = e.width + "px";
            E.height = e.height + "px";
            R.coordsize = aO;
            R.coordorigin = e.coordorigin;
            S[a5](R);
            var bp = new aL(R, S, e),
                d = {
                    fill: "none",
                    stroke: "#000"
                };
            i && (d.path = i);
            bp.isAbsolute = true;
            bp.type = "path";
            bp.path = [];
            bp.Path = aG;
            ai(bp, d);
            e.canvas[a5](S);
            return bp
        };
        ai = function (bs, bz) {
            bs.attrs = bs.attrs || {};
            var bw = bs.node,
                bA = bs.attrs,
                bp = bw.style,
                E, by = (bz.x != bA.x || bz.y != bA.y || bz.width != bA.width || bz.height != bA.height || bz.r != bA.r) && bs.type == "rect",
                bE = bs;
            for (var bq in bz) {
                if (bz[ab](bq)) {
                    bA[bq] = bz[bq]
                }
            }
            if (by) {
                bA.path = al(bA.x, bA.y, bA.width, bA.height, bA.r);
                bs.X = bA.x;
                bs.Y = bA.y;
                bs.W = bA.width;
                bs.H = bA.height
            }
            bz.href && (bw.href = bz.href);
            bz.title && (bw.title = bz.title);
            bz.target && (bw.target = bz.target);
            bz.cursor && (bp.cursor = bz.cursor);
            "blur" in bz && bs.blur(bz.blur);
            if (bz.path && bs.type == "path" || by) {
                bw.path = a1(bA.path)
            }
            if (bz.rotation != null) {
                bs.rotate(bz.rotation, true)
            }
            if (bz.translation) {
                E = (bz.translation + aG)[F](a);
                x.call(bs, E[0], E[1]);
                if (bs._.rt.cx != null) {
                    bs._.rt.cx += +E[0];
                    bs._.rt.cy += +E[1];
                    bs.setBox(bs.attrs, E[0], E[1])
                }
            }
            if (bz.scale) {
                E = (bz.scale + aG)[F](a);
                bs.scale(+E[0] || 1, + E[1] || +E[0] || 1, + E[2] || null, + E[3] || null)
            }
            if ("clip-rect" in bz) {
                var d = (bz["clip-rect"] + aG)[F](a);
                if (d[o] == 4) {
                    d[2] = +d[2] + (+d[0]);
                    d[3] = +d[3] + (+d[1]);
                    var br = bw.clipRect || V.createElement("div"),
                        bD = br.style,
                        S = bw.parentNode;
                    bD.clip = aA.format("rect({1}px {2}px {3}px {0}px)", d);
                    if (!bw.clipRect) {
                        bD.position = "absolute";
                        bD.top = 0;
                        bD.left = 0;
                        bD.width = bs.paper.width + "px";
                        bD.height = bs.paper.height + "px";
                        S.parentNode.insertBefore(br, S);
                        br[a5](S);
                        bw.clipRect = br
                    }
                }
                if (!bz["clip-rect"]) {
                    bw.clipRect && (bw.clipRect.style.clip = aG)
                }
            }
            if (bs.type == "image" && bz.src) {
                bw.src = bz.src
            }
            if (bs.type == "image" && bz.opacity) {
                bw.filterOpacity = aT + ".Alpha(opacity=" + (bz.opacity * 100) + ")";
                bp.filter = (bw.filterMatrix || aG) + (bw.filterOpacity || aG)
            }
            bz.font && (bp.font = bz.font);
            bz["font-family"] && (bp.fontFamily = '"' + bz["font-family"][F](",")[0][bb](/^['"]+|['"]+$/g, aG) + '"');
            bz["font-size"] && (bp.fontSize = bz["font-size"]);
            bz["font-weight"] && (bp.fontWeight = bz["font-weight"]);
            bz["font-style"] && (bp.fontStyle = bz["font-style"]);
            if (bz.opacity != null || bz["stroke-width"] != null || bz.fill != null || bz.stroke != null || bz["stroke-width"] != null || bz["stroke-opacity"] != null || bz["fill-opacity"] != null || bz["stroke-dasharray"] != null || bz["stroke-miterlimit"] != null || bz["stroke-linejoin"] != null || bz["stroke-linecap"] != null) {
                bw = bs.shape || bw;
                var bx = (bw.getElementsByTagName(aS) && bw.getElementsByTagName(aS)[0]),
                    bB = false;
                !bx && (bB = bx = aq(aS));
                if ("fill-opacity" in bz || "opacity" in bz) {
                    var e = ((+bA["fill-opacity"] + 1 || 2) - 1) * ((+bA.opacity + 1 || 2) - 1) * ((+aA.getRGB(bz.fill).o + 1 || 2) - 1);
                    e < 0 && (e = 0);
                    e > 1 && (e = 1);
                    bx.opacity = e
                }
                bz.fill && (bx.on = true);
                if (bx.on == null || bz.fill == "none") {
                    bx.on = false
                }
                if (bx.on && bz.fill) {
                    var i = bz.fill.match(c);
                    if (i) {
                        bx.src = i[1];
                        bx.type = "tile"
                    } else {
                        bx.color = aA.getRGB(bz.fill).hex;
                        bx.src = aG;
                        bx.type = "solid";
                        if (aA.getRGB(bz.fill).error && (bE.type in {
                            circle: 1,
                            ellipse: 1
                        } || (bz.fill + aG).charAt() != "r") && b(bE, bz.fill)) {
                            bA.fill = "none";
                            bA.gradient = bz.fill
                        }
                    }
                }
                bB && bw[a5](bx);
                var R = (bw.getElementsByTagName("stroke") && bw.getElementsByTagName("stroke")[0]),
                    bC = false;
                !R && (bC = R = aq("stroke"));
                if ((bz.stroke && bz.stroke != "none") || bz["stroke-width"] || bz["stroke-opacity"] != null || bz["stroke-dasharray"] || bz["stroke-miterlimit"] || bz["stroke-linejoin"] || bz["stroke-linecap"]) {
                    R.on = true
                }(bz.stroke == "none" || R.on == null || bz.stroke == 0 || bz["stroke-width"] == 0) && (R.on = false);
                var bv = aA.getRGB(bz.stroke);
                R.on && bz.stroke && (R.color = bv.hex);
                e = ((+bA["stroke-opacity"] + 1 || 2) - 1) * ((+bA.opacity + 1 || 2) - 1) * ((+bv.o + 1 || 2) - 1);
                var bt = (ae(bz["stroke-width"]) || 1) * 0.75;
                e < 0 && (e = 0);
                e > 1 && (e = 1);
                bz["stroke-width"] == null && (bt = bA["stroke-width"]);
                bz["stroke-width"] && (R.weight = bt);
                bt && bt < 1 && (e *= bt) && (R.weight = 1);
                R.opacity = e;
                bz["stroke-linejoin"] && (R.joinstyle = bz["stroke-linejoin"] || "miter");
                R.miterlimit = bz["stroke-miterlimit"] || 8;
                bz["stroke-linecap"] && (R.endcap = bz["stroke-linecap"] == "butt" ? "flat" : bz["stroke-linecap"] == "square" ? "square" : "round");
                if (bz["stroke-dasharray"]) {
                    var bu = {
                        "-": "shortdash",
                        ".": "shortdot",
                        "-.": "shortdashdot",
                        "-..": "shortdashdotdot",
                        ". ": "dot",
                        "- ": "dash",
                        "--": "longdash",
                        "- .": "dashdot",
                        "--.": "longdashdot",
                        "--..": "longdashdotdot"
                    };
                    R.dashstyle = bu[ab](bz["stroke-dasharray"]) ? bu[bz["stroke-dasharray"]] : aG
                }
                bC && bw[a5](R)
            }
            if (bE.type == "text") {
                bp = bE.paper.span.style;
                bA.font && (bp.font = bA.font);
                bA["font-family"] && (bp.fontFamily = bA["font-family"]);
                bA["font-size"] && (bp.fontSize = bA["font-size"]);
                bA["font-weight"] && (bp.fontWeight = bA["font-weight"]);
                bA["font-style"] && (bp.fontStyle = bA["font-style"]);
                bE.node.string && (bE.paper.span.innerHTML = (bE.node.string + aG)[bb](/</g, "&#60;")[bb](/&/g, "&#38;")[bb](/\n/g, "<br>"));
                bE.W = bA.w = bE.paper.span.offsetWidth;
                bE.H = bA.h = bE.paper.span.offsetHeight;
                bE.X = bA.x;
                bE.Y = bA.y + Y(bE.H / 2);
                switch (bA["text-anchor"]) {
                case "start":
                    bE.node.style["v-text-align"] = "left";
                    bE.bbx = Y(bE.W / 2);
                    break;
                case "end":
                    bE.node.style["v-text-align"] = "right";
                    bE.bbx = -Y(bE.W / 2);
                    break;
                default:
                    bE.node.style["v-text-align"] = "center";
                    break
                }
            }
        };
        b = function (d, bq) {
            d.attrs = d.attrs || {};
            var br = d.attrs,
                bt, S = "linear",
                bp = ".5 .5";
            d.attrs.gradient = bq;
            bq = (bq + aG)[bb](aF, function (bv, bw, i) {
                S = "radial";
                if (bw && i) {
                    bw = ae(bw);
                    i = ae(i);
                    a6(bw - 0.5, 2) + a6(i - 0.5, 2) > 0.25 && (i = aj.sqrt(0.25 - a6(bw - 0.5, 2)) * ((i > 0.5) * 2 - 1) + 0.5);
                    bp = bw + az + i
                }
                return aG
            });
            bq = bq[F](/\s*\-\s*/);
            if (S == "linear") {
                var e = bq.shift();
                e = -ae(e);
                if (isNaN(e)) {
                    return null
                }
            }
            var R = t(bq);
            if (!R) {
                return null
            }
            d = d.shape || d.node;
            bt = d.getElementsByTagName(aS)[0] || aq(aS);
            !bt.parentNode && d.appendChild(bt);
            if (R[o]) {
                bt.on = true;
                bt.method = "none";
                bt.color = R[0].color;
                bt.color2 = R[R[o] - 1].color;
                var bu = [];
                for (var E = 0, bs = R[o]; E < bs; E++) {
                    R[E].offset && bu[f](R[E].offset + az + R[E].color)
                }
                bt.colors && (bt.colors.value = bu[o] ? bu[aN]() : "0% " + bt.color);
                if (S == "radial") {
                    bt.type = "gradientradial";
                    bt.focus = "100%";
                    bt.focussize = bp;
                    bt.focusposition = bp
                } else {
                    bt.type = "gradient";
                    bt.angle = (270 - e) % 360
                }
            }
            return 1
        };
        aL = function (R, bp, d) {
            var S = 0,
                i = 0,
                e = 0,
                E = 1;
            this[0] = R;
            this.id = aA._oid++;
            this.node = R;
            R.raphael = this;
            this.X = 0;
            this.Y = 0;
            this.attrs = {};
            this.Group = bp;
            this.paper = d;
            this._ = {
                tx: 0,
                ty: 0,
                rt: {
                    deg: 0
                },
                sx: 1,
                sy: 1
            };
            !d.bottom && (d.bottom = this);
            this.prev = d.top;
            d.top && (d.top.next = this);
            d.top = this;
            this.next = null
        };
        aL[bm].rotate = function (e, d, i) {
            if (this.removed) {
                return this
            }
            if (e == null) {
                if (this._.rt.cx) {
                    return [this._.rt.deg, this._.rt.cx, this._.rt.cy][aN](az)
                }
                return this._.rt.deg
            }
            e = (e + aG)[F](a);
            if (e[o] - 1) {
                d = ae(e[1]);
                i = ae(e[2])
            }
            e = ae(e[0]);
            if (d != null) {
                this._.rt.deg = e
            } else {
                this._.rt.deg += e
            }
            i == null && (d = null);
            this._.rt.cx = d;
            this._.rt.cy = i;
            this.setBox(this.attrs, d, i);
            this.Group.style.rotation = this._.rt.deg;
            return this
        };
        aL[bm].setBox = function (R, S, E) {
            if (this.removed) {
                return this
            }
            var d = this.Group.style,
                bp = (this.shape && this.shape.style) || this.node.style;
            R = R || {};
            for (var bq in R) {
                if (R[ab](bq)) {
                    this.attrs[bq] = R[bq]
                }
            }
            S = S || this._.rt.cx;
            E = E || this._.rt.cy;
            var bt = this.attrs,
                bw, bv, bx, bs;
            switch (this.type) {
            case "circle":
                bw = bt.cx - bt.r;
                bv = bt.cy - bt.r;
                bx = bs = bt.r * 2;
                break;
            case "ellipse":
                bw = bt.cx - bt.rx;
                bv = bt.cy - bt.ry;
                bx = bt.rx * 2;
                bs = bt.ry * 2;
                break;
            case "image":
                bw = +bt.x;
                bv = +bt.y;
                bx = bt.width || 0;
                bs = bt.height || 0;
                break;
            case "text":
                this.textpath.v = ["m", Y(bt.x), ", ", Y(bt.y - 2), "l", Y(bt.x) + 1, ", ", Y(bt.y - 2)][aN](aG);
                bw = bt.x - Y(this.W / 2);
                bv = bt.y - this.H / 2;
                bx = this.W;
                bs = this.H;
                break;
            case "rect":
            case "path":
                if (!this.attrs.path) {
                    bw = 0;
                    bv = 0;
                    bx = this.paper.width;
                    bs = this.paper.height
                } else {
                    var br = ad(this.attrs.path);
                    bw = br.x;
                    bv = br.y;
                    bx = br.width;
                    bs = br.height
                }
                break;
            default:
                bw = 0;
                bv = 0;
                bx = this.paper.width;
                bs = this.paper.height;
                break
            }
            S = (S == null) ? bw + bx / 2 : S;
            E = (E == null) ? bv + bs / 2 : E;
            var e = S - this.paper.width / 2,
                bu = E - this.paper.height / 2,
                by;
            d.left != (by = e + "px") && (d.left = by);
            d.top != (by = bu + "px") && (d.top = by);
            this.X = p[ab](this.type) ? -e : bw;
            this.Y = p[ab](this.type) ? -bu : bv;
            this.W = bx;
            this.H = bs;
            if (p[ab](this.type)) {
                bp.left != (by = -e * r + "px") && (bp.left = by);
                bp.top != (by = -bu * r + "px") && (bp.top = by)
            } else {
                if (this.type == "text") {
                    bp.left != (by = -e + "px") && (bp.left = by);
                    bp.top != (by = -bu + "px") && (bp.top = by)
                } else {
                    d.width != (by = this.paper.width + "px") && (d.width = by);
                    d.height != (by = this.paper.height + "px") && (d.height = by);
                    bp.left != (by = bw - e + "px") && (bp.left = by);
                    bp.top != (by = bv - bu + "px") && (bp.top = by);
                    bp.width != (by = bx + "px") && (bp.width = by);
                    bp.height != (by = bs + "px") && (bp.height = by)
                }
            }
        };
        aL[bm].hide = function () {
            !this.removed && (this.Group.style.display = "none");
            return this
        };
        aL[bm].show = function () {
            !this.removed && (this.Group.style.display = "block");
            return this
        };
        aL[bm].getBBox = function () {
            if (this.removed) {
                return this
            }
            if (p[ab](this.type)) {
                return ad(this.attrs.path)
            }
            return {
                x: this.X + (this.bbx || 0),
                y: this.Y,
                width: this.W,
                height: this.H
            }
        };
        aL[bm].remove = function () {
            if (this.removed) {
                return
            }
            aw(this, this.paper);
            this.node.parentNode.removeChild(this.node);
            this.Group.parentNode.removeChild(this.Group);
            this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var d in this) {
                delete this[d]
            }
            this.removed = true
        };
        aL[bm].attr = function (e, bp) {
            if (this.removed) {
                return this
            }
            if (e == null) {
                var R = {};
                for (var E in this.attrs) {
                    if (this.attrs[ab](E)) {
                        R[E] = this.attrs[E]
                    }
                }
                this._.rt.deg && (R.rotation = this.rotate());
                (this._.sx != 1 || this._.sy != 1) && (R.scale = this.scale());
                R.gradient && R.fill == "none" && (R.fill = R.gradient) && delete R.gradient;
                return R
            }
            if (bp == null && aA.is(e, aa)) {
                if (e == "translation") {
                    return x.call(this)
                }
                if (e == "rotation") {
                    return this.rotate()
                }
                if (e == "scale") {
                    return this.scale()
                }
                if (e == aS && this.attrs.fill == "none" && this.attrs.gradient) {
                    return this.attrs.gradient
                }
                return this.attrs[e]
            }
            if (this.attrs && bp == null && aA.is(e, aV)) {
                var S, d = {};
                for (E = 0, S = e[o]; E < S; E++) {
                    d[e[E]] = this.attr(e[E])
                }
                return d
            }
            var bq;
            if (bp != null) {
                bq = {};
                bq[e] = bp
            }
            bp == null && aA.is(e, "object") && (bq = e);
            if (bq) {
                if (bq.text && this.type == "text") {
                    this.node.string = bq.text
                }
                ai(this, bq);
                if (bq.gradient && (({
                    circle: 1,
                    ellipse: 1
                })[ab](this.type) || (bq.gradient + aG).charAt() != "r")) {
                    b(this, bq.gradient)
                }(!p[ab](this.type) || this._.rt.deg) && this.setBox(this.attrs)
            }
            return this
        };
        aL[bm].toFront = function () {
            !this.removed && this.Group.parentNode[a5](this.Group);
            this.paper.top != this && ag(this, this.paper);
            return this
        };
        aL[bm].toBack = function () {
            if (this.removed) {
                return this
            }
            if (this.Group.parentNode.firstChild != this.Group) {
                this.Group.parentNode.insertBefore(this.Group, this.Group.parentNode.firstChild);
                m(this, this.paper)
            }
            return this
        };
        aL[bm].insertAfter = function (d) {
            if (this.removed) {
                return this
            }
            if (d.Group.nextSibling) {
                d.Group.parentNode.insertBefore(this.Group, d.Group.nextSibling)
            } else {
                d.Group.parentNode[a5](this.Group)
            }
            G(this, d, this.paper);
            return this
        };
        aL[bm].insertBefore = function (d) {
            if (this.removed) {
                return this
            }
            d.Group.parentNode.insertBefore(this.Group, d.Group);
            aD(this, d, this.paper);
            return this
        };
        var bg = / progid:\S+Blur\([^\)]+\)/g;
        aL[bm].blur = function (d) {
            var e = this.node.style,
                i = e.filter;
            i = i.replace(bg, "");
            if (+d !== 0) {
                this.attrs.blur = d;
                e.filter = i + aT + ".Blur(pixelradius=" + (+d || 1.5) + ")";
                e.margin = Raphael.format("-{0}px 0 0 -{0}px", Math.round(+d || 1.5))
            } else {
                e.filter = i;
                e.margin = 0;
                delete this.attrs.blur
            }
        };
        Z = function (e, d, bq, S) {
            var R = aq("group"),
                bp = aq("oval"),
                i = bp.style;
            R.style.cssText = "position:absolute;left:0;top:0;width:" + e.width + "px;height:" + e.height + "px";
            R.coordsize = aO;
            R.coordorigin = e.coordorigin;
            R[a5](bp);
            var E = new aL(bp, R, e);
            E.type = "circle";
            ai(E, {
                stroke: "#000",
                fill: "none"
            });
            E.attrs.cx = d;
            E.attrs.cy = bq;
            E.attrs.r = S;
            E.setBox({
                x: d - S,
                y: bq - S,
                width: S * 2,
                height: S * 2
            });
            e.canvas[a5](R);
            return E
        };

        function al(d, R, e, i, E) {
            if (E) {
                return aA.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z", d + E, R, e - E * 2, E, - E, i - E * 2, E * 2 - e, E * 2 - i)
            } else {
                return aA.format("M{0},{1}l{2},0,0,{3},{4},0z", d, R, e, i, - e)
            }
        }
        aY = function (e, bp, R, bq, i, d) {
            var br = al(bp, R, bq, i, d),
                E = e.path(br),
                S = E.attrs;
            E.X = S.x = bp;
            E.Y = S.y = R;
            E.W = S.width = bq;
            E.H = S.height = i;
            S.r = d;
            S.path = br;
            E.type = "rect";
            return E
        };
        ar = function (d, br, bq, i, e) {
            var R = aq("group"),
                E = aq("oval"),
                bp = E.style;
            R.style.cssText = "position:absolute;left:0;top:0;width:" + d.width + "px;height:" + d.height + "px";
            R.coordsize = aO;
            R.coordorigin = d.coordorigin;
            R[a5](E);
            var S = new aL(E, R, d);
            S.type = "ellipse";
            ai(S, {
                stroke: "#000"
            });
            S.attrs.cx = br;
            S.attrs.cy = bq;
            S.attrs.rx = i;
            S.attrs.ry = e;
            S.setBox({
                x: br - i,
                y: bq - e,
                width: i * 2,
                height: e * 2
            });
            d.canvas[a5](R);
            return S
        };
        s = function (e, d, br, bq, bs, E) {
            var R = aq("group"),
                i = aq("image"),
                bp = i.style;
            R.style.cssText = "position:absolute;left:0;top:0;width:" + e.width + "px;height:" + e.height + "px";
            R.coordsize = aO;
            R.coordorigin = e.coordorigin;
            i.src = d;
            R[a5](i);
            var S = new aL(i, R, e);
            S.type = "image";
            S.attrs.src = d;
            S.attrs.x = br;
            S.attrs.y = bq;
            S.attrs.w = bs;
            S.attrs.h = E;
            S.setBox({
                x: br,
                y: bq,
                width: bs,
                height: E
            });
            e.canvas[a5](R);
            return S
        };
        af = function (e, br, bq, bs) {
            var R = aq("group"),
                E = aq("shape"),
                bp = E.style,
                bt = aq("path"),
                d = bt.style,
                i = aq("textpath");
            R.style.cssText = "position:absolute;left:0;top:0;width:" + e.width + "px;height:" + e.height + "px";
            R.coordsize = aO;
            R.coordorigin = e.coordorigin;
            bt.v = aA.format("m{0},{1}l{2},{1}", Y(br * 10), Y(bq * 10), Y(br * 10) + 1);
            bt.textpathok = true;
            bp.width = e.width;
            bp.height = e.height;
            i.string = bs + aG;
            i.on = true;
            E[a5](i);
            E[a5](bt);
            R[a5](E);
            var S = new aL(i, R, e);
            S.shape = E;
            S.textpath = bt;
            S.type = "text";
            S.attrs.text = bs;
            S.attrs.x = br;
            S.attrs.y = bq;
            S.attrs.w = 1;
            S.attrs.h = 1;
            ai(S, {
                font: l.font,
                stroke: "none",
                fill: "#000"
            });
            S.setBox();
            e.canvas[a5](R);
            return S
        };
        bj = function (i, d) {
            var e = this.canvas.style;
            i == +i && (i += "px");
            d == +d && (d += "px");
            e.width = i;
            e.height = d;
            e.clip = "rect(0 " + i + " " + d + " 0)";
            return this
        };
        var aq;
        V.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !V.namespaces.rvml && V.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
            aq = function (d) {
                return V.createElement("<rvml:" + d + ' class="rvml">')
            }
        } catch (ao) {
            aq = function (d) {
                return V.createElement("<" + d + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
        B = function () {
            var i = aB[bk](0, arguments),
                d = i.container,
                br = i.height,
                bs, e = i.width,
                bq = i.x,
                bp = i.y;
            if (!d) {
                throw new Error("VML container not found.")
            }
            var R = new bh,
                S = R.canvas = V.createElement("div"),
                E = S.style;
            bq = bq || 0;
            bp = bp || 0;
            e = e || 512;
            br = br || 342;
            e == +e && (e += "px");
            br == +br && (br += "px");
            R.width = 1000;
            R.height = 1000;
            R.coordsize = r * 1000 + az + r * 1000;
            R.coordorigin = "0 0";
            R.span = V.createElement("span");
            R.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
            S[a5](R.span);
            E.cssText = aA.format("width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", e, br);
            if (d == 1) {
                V.body[a5](S);
                E.left = bq + "px";
                E.top = bp + "px";
                E.position = "absolute"
            } else {
                if (d.firstChild) {
                    d.insertBefore(S, d.firstChild)
                } else {
                    d[a5](S)
                }
            }
            a0.call(R, R, aA.fn);
            return R
        };
        bh[bm].clear = function () {
            this.canvas.innerHTML = aG;
            this.span = V.createElement("span");
            this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
            this.canvas[a5](this.span);
            this.bottom = this.top = null
        };
        bh[bm].remove = function () {
            this.canvas.parentNode.removeChild(this.canvas);
            for (var d in this) {
                this[d] = w(d)
            }
            return true
        }
    }
    if ((/^Apple|^Google/).test(aH.navigator.vendor) && (!(aH.navigator.userAgent.indexOf("Version/4.0") + 1) || aH.navigator.platform.slice(0, 2) == "iP")) {
        bh[bm].safari = function () {
            var d = this.rect(-99, - 99, this.width + 99, this.height + 99);
            aH.setTimeout(function () {
                d.remove()
            })
        }
    } else {
        bh[bm].safari = function () {}
    }
    var K = function () {
        this.returnValue = false
    }, be = function () {
        return this.originalEvent.preventDefault()
    }, aR = function () {
        this.cancelBubble = true
    }, av = function () {
        return this.originalEvent.stopPropagation()
    }, an = (function () {
        if (V.addEventListener) {
            return function (S, E, i, e) {
                var d = P && ba[E] ? ba[E] : E;
                var R = function (bs) {
                    if (P && ba[ab](E)) {
                        for (var bq = 0, br = bs.targetTouches && bs.targetTouches.length; bq < br; bq++) {
                            if (bs.targetTouches[bq].target == S) {
                                var bp = bs;
                                bs = bs.targetTouches[bq];
                                bs.originalEvent = bp;
                                bs.preventDefault = be;
                                bs.stopPropagation = av;
                                break
                            }
                        }
                    }
                    return i.call(e, bs)
                };
                S.addEventListener(d, R, false);
                return function () {
                    S.removeEventListener(d, R, false);
                    return true
                }
            }
        } else {
            if (V.attachEvent) {
                return function (S, E, i, e) {
                    var R = function (bp) {
                        bp = bp || aH.event;
                        bp.preventDefault = bp.preventDefault || K;
                        bp.stopPropagation = bp.stopPropagation || aR;
                        return i.call(e, bp)
                    };
                    S.attachEvent("on" + E, R);
                    var d = function () {
                        S.detachEvent("on" + E, R);
                        return true
                    };
                    return d
                }
            }
        }
    })();
    for (var ak = M[o]; ak--;) {
        (function (d) {
            aA[d] = aL[bm][d] = function (e) {
                if (aA.is(e, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: d,
                        f: e,
                        unbind: an(this.shape || this.node || V, d, e, this)
                    })
                }
                return this
            };
            aA["un" + d] = aL[bm]["un" + d] = function (E) {
                var i = this.events,
                    e = i[o];
                while (e--) {
                    if (i[e].name == d && i[e].f == E) {
                        i[e].unbind();
                        i.splice(e, 1);
                        !i.length && delete this.events;
                        return this
                    }
                }
                return this
            }
        })(M[ak])
    }
    aL[bm].hover = function (e, d) {
        return this.mouseover(e).mouseout(d)
    };
    aL[bm].unhover = function (e, d) {
        return this.unmouseover(e).unmouseout(d)
    };
    aL[bm].drag = function (i, S, R) {
        this._drag = {};
        var E = this.mousedown(function (bp) {
            (bp.originalEvent ? bp.originalEvent : bp).preventDefault();
            this._drag.x = bp.clientX;
            this._drag.y = bp.clientY;
            this._drag.id = bp.identifier;
            S && S.call(this, bp.clientX, bp.clientY);
            Raphael.mousemove(e).mouseup(d)
        }),
            e = function (br) {
                var bp = br.clientX,
                    bt = br.clientY;
                if (P) {
                    var bq = br.touches.length,
                        bs;
                    while (bq--) {
                        bs = br.touches[bq];
                        if (bs.identifier == E._drag.id) {
                            bp = bs.clientX;
                            bt = bs.clientY;
                            (br.originalEvent ? br.originalEvent : br).preventDefault();
                            break
                        }
                    }
                } else {
                    br.preventDefault()
                }
                i && i.call(E, bp - E._drag.x, bt - E._drag.y, bp, bt)
            }, d = function () {
                E._drag = {};
                Raphael.unmousemove(e).unmouseup(d);
                R && R.call(E)
            };
        return this
    };
    bh[bm].circle = function (d, i, e) {
        return Z(this, d || 0, i || 0, e || 0)
    };
    bh[bm].rect = function (d, R, e, i, E) {
        return aY(this, d || 0, R || 0, e || 0, i || 0, E || 0)
    };
    bh[bm].ellipse = function (d, E, i, e) {
        return ar(this, d || 0, E || 0, i || 0, e || 0)
    };
    bh[bm].path = function (d) {
        d && !aA.is(d, aa) && !aA.is(d[0], aV) && (d += aG);
        return u(aA.format[bk](aA, arguments), this)
    };
    bh[bm].image = function (E, d, R, e, i) {
        return s(this, E || "about:blank", d || 0, R || 0, e || 0, i || 0)
    };
    bh[bm].text = function (d, i, e) {
        return af(this, d || 0, i || 0, e || aG)
    };
    bh[bm].set = function (d) {
        arguments[o] > 1 && (d = Array[bm].splice.call(arguments, 0, arguments[o]));
        return new ac(d)
    };
    bh[bm].setSize = bj;
    bh[bm].top = bh[bm].bottom = null;
    bh[bm].raphael = aA;

    function z() {
        return this.x + az + this.y
    }
    aL[bm].resetScale = function () {
        if (this.removed) {
            return this
        }
        this._.sx = 1;
        this._.sy = 1;
        this.attrs.scale = "1 1"
    };
    aL[bm].scale = function (bv, bu, E, e) {
        if (this.removed) {
            return this
        }
        if (bv == null && bu == null) {
            return {
                x: this._.sx,
                y: this._.sy,
                toString: z
            }
        }
        bu = bu || bv;
        !+bu && (bu = bv);
        var bz, bx, by, bw, bL = this.attrs;
        if (bv != 0) {
            var bt = this.getBBox(),
                bq = bt.x + bt.width / 2,
                R = bt.y + bt.height / 2,
                bK = bv / this._.sx,
                bJ = bu / this._.sy;
            E = (+E || E == 0) ? E : bq;
            e = (+e || e == 0) ? e : R;
            var bs = ~~ (bv / aj.abs(bv)),
                bp = ~~ (bu / aj.abs(bu)),
                bC = this.node.style,
                bN = E + (bq - E) * bK,
                bM = e + (R - e) * bJ;
            switch (this.type) {
            case "rect":
            case "image":
                var br = bL.width * bs * bK,
                    bB = bL.height * bp * bJ;
                this.attr({
                    height: bB,
                    r: bL.r * a3(bs * bK, bp * bJ),
                    width: br,
                    x: bN - br / 2,
                    y: bM - bB / 2
                });
                break;
            case "circle":
            case "ellipse":
                this.attr({
                    rx: bL.rx * bs * bK,
                    ry: bL.ry * bp * bJ,
                    r: bL.r * a3(bs * bK, bp * bJ),
                    cx: bN,
                    cy: bM
                });
                break;
            case "text":
                this.attr({
                    x: bN,
                    y: bM
                });
                break;
            case "path":
                var bE = am(bL.path),
                    bF = true;
                for (var bH = 0, bA = bE[o]; bH < bA; bH++) {
                    var bD = bE[bH],
                        S = a8.call(bD[0]);
                    if (S == "M" && bF) {
                        continue
                    } else {
                        bF = false
                    }
                    if (S == "A") {
                        bD[bE[bH][o] - 2] *= bK;
                        bD[bE[bH][o] - 1] *= bJ;
                        bD[1] *= bs * bK;
                        bD[2] *= bp * bJ;
                        bD[5] = +!(bs + bp ? !+bD[5] : +bD[5])
                    } else {
                        if (S == "H") {
                            for (var bG = 1, bI = bD[o]; bG < bI; bG++) {
                                bD[bG] *= bK
                            }
                        } else {
                            if (S == "V") {
                                for (bG = 1, bI = bD[o]; bG < bI; bG++) {
                                    bD[bG] *= bJ
                                }
                            } else {
                                for (bG = 1, bI = bD[o]; bG < bI; bG++) {
                                    bD[bG] *= (bG % 2) ? bK : bJ
                                }
                            }
                        }
                    }
                }
                var d = ad(bE);
                bz = bN - d.x - d.width / 2;
                bx = bM - d.y - d.height / 2;
                bE[0][1] += bz;
                bE[0][2] += bx;
                this.attr({
                    path: bE
                });
                break
            }
            if (this.type in {
                text: 1,
                image: 1
            } && (bs != 1 || bp != 1)) {
                if (this.transformations) {
                    this.transformations[2] = "scale(" [bf](bs, ",", bp, ")");
                    this.node[A]("transform", this.transformations[aN](az));
                    bz = (bs == -1) ? -bL.x - (br || 0) : bL.x;
                    bx = (bp == -1) ? -bL.y - (bB || 0) : bL.y;
                    this.attr({
                        x: bz,
                        y: bx
                    });
                    bL.fx = bs - 1;
                    bL.fy = bp - 1
                } else {
                    this.node.filterMatrix = aT + ".Matrix(M11=" [bf](bs, ", M12=0, M21=0, M22=", bp, ", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");
                    bC.filter = (this.node.filterMatrix || aG) + (this.node.filterOpacity || aG)
                }
            } else {
                if (this.transformations) {
                    this.transformations[2] = aG;
                    this.node[A]("transform", this.transformations[aN](az));
                    bL.fx = 0;
                    bL.fy = 0
                } else {
                    this.node.filterMatrix = aG;
                    bC.filter = (this.node.filterMatrix || aG) + (this.node.filterOpacity || aG)
                }
            }
            bL.scale = [bv, bu, E, e][aN](az);
            this._.sx = bv;
            this._.sy = bu
        }
        return this
    };
    aL[bm].clone = function () {
        if (this.removed) {
            return null
        }
        var d = this.attr();
        delete d.scale;
        delete d.translation;
        return this.paper[this.type]().attr(d)
    };
    var g = at(function (E, d, bq, bp, bw, bv, bu, bt, R) {
        var bs = 0,
            S;
        for (var br = 0; br < 1.001; br += 0.001) {
            var e = aA.findDotsAtSegment(E, d, bq, bp, bw, bv, bu, bt, br);
            br && (bs += a6(a6(S.x - e.x, 2) + a6(S.y - e.y, 2), 0.5));
            if (bs >= R) {
                return e
            }
            S = e
        }
    }),
        aQ = function (d, e) {
            return function (by, S, bp) {
                by = O(by);
                var bu, bt, E, bq, R = "",
                    bx = {}, bv, bs = 0;
                for (var br = 0, bw = by.length; br < bw; br++) {
                    E = by[br];
                    if (E[0] == "M") {
                        bu = +E[1];
                        bt = +E[2]
                    } else {
                        bq = q(bu, bt, E[1], E[2], E[3], E[4], E[5], E[6]);
                        if (bs + bq > S) {
                            if (e && !bx.start) {
                                bv = g(bu, bt, E[1], E[2], E[3], E[4], E[5], E[6], S - bs);
                                R += ["C", bv.start.x, bv.start.y, bv.m.x, bv.m.y, bv.x, bv.y];
                                if (bp) {
                                    return R
                                }
                                bx.start = R;
                                R = ["M", bv.x, bv.y + "C", bv.n.x, bv.n.y, bv.end.x, bv.end.y, E[5], E[6]][aN]();
                                bs += bq;
                                bu = +E[5];
                                bt = +E[6];
                                continue
                            }
                            if (!d && !e) {
                                bv = g(bu, bt, E[1], E[2], E[3], E[4], E[5], E[6], S - bs);
                                return {
                                    x: bv.x,
                                    y: bv.y,
                                    alpha: bv.alpha
                                }
                            }
                        }
                        bs += bq;
                        bu = +E[5];
                        bt = +E[6]
                    }
                    R += E
                }
                bx.end = R;
                bv = d ? bs : e ? bx : aA.findDotsAtSegment(bu, bt, E[1], E[2], E[3], E[4], E[5], E[6], 1);
                bv.alpha && (bv = {
                    x: bv.x,
                    y: bv.y,
                    alpha: bv.alpha
                });
                return bv
            }
        }, q = at(function (E, d, bp, S, bv, bu, bt, bs) {
            var R = {
                x: 0,
                y: 0
            }, br = 0;
            for (var bq = 0; bq < 1.01; bq += 0.01) {
                var e = X(E, d, bp, S, bv, bu, bt, bs, bq);
                bq && (br += a6(a6(R.x - e.x, 2) + a6(R.y - e.y, 2), 0.5));
                R = e
            }
            return br
        });
    var aC = aQ(1),
        I = aQ(),
        T = aQ(0, 1);
    aL[bm].getTotalLength = function () {
        if (this.type != "path") {
            return
        }
        if (this.node.getTotalLength) {
            return this.node.getTotalLength()
        }
        return aC(this.attrs.path)
    };
    aL[bm].getPointAtLength = function (d) {
        if (this.type != "path") {
            return
        }
        return I(this.attrs.path, d)
    };
    aL[bm].getSubpath = function (i, e) {
        if (this.type != "path") {
            return
        }
        if (aj.abs(this.getTotalLength() - e) < 0.000001) {
            return T(this.attrs.path, i).end
        }
        var d = T(this.attrs.path, e, 1);
        return i ? T(d, i).end : d
    };
    aA.easing_formulas = {
        linear: function (d) {
            return d
        },
        "<": function (d) {
            return a6(d, 3)
        },
        ">": function (d) {
            return a6(d - 1, 3) + 1
        },
        "<>": function (d) {
            d = d * 2;
            if (d < 1) {
                return a6(d, 3) / 2
            }
            d -= 2;
            return (a6(d, 3) + 2) / 2
        },
        backIn: function (e) {
            var d = 1.70158;
            return e * e * ((d + 1) * e - d)
        },
        backOut: function (e) {
            e = e - 1;
            var d = 1.70158;
            return e * e * ((d + 1) * e + d) + 1
        },
        elastic: function (i) {
            if (i == 0 || i == 1) {
                return i
            }
            var e = 0.3,
                d = e / 4;
            return a6(2, - 10 * i) * aj.sin((i - d) * (2 * aj.PI) / e) + 1
        },
        bounce: function (E) {
            var e = 7.5625,
                i = 2.75,
                d;
            if (E < (1 / i)) {
                d = e * E * E
            } else {
                if (E < (2 / i)) {
                    E -= (1.5 / i);
                    d = e * E * E + 0.75
                } else {
                    if (E < (2.5 / i)) {
                        E -= (2.25 / i);
                        d = e * E * E + 0.9375
                    } else {
                        E -= (2.625 / i);
                        d = e * E * E + 0.984375
                    }
                }
            }
            return d
        }
    };
    var Q = {
        length: 0
    }, bd = function () {
        var br = +new Date;
        for (var bD in Q) {
            if (bD != "length" && Q[ab](bD)) {
                var bI = Q[bD];
                if (bI.stop || bI.el.removed) {
                    delete Q[bD];
                    Q[o]--;
                    continue
                }
                var bp = br - bI.start,
                    bA = bI.ms,
                    bz = bI.easing,
                    bE = bI.from,
                    bw = bI.diff,
                    E = bI.to,
                    bv = bI.t,
                    by = bI.prev || 0,
                    bq = bI.el,
                    R = bI.callback,
                    bx = {}, d;
                if (bp < bA) {
                    var S = aA.easing_formulas[bz] ? aA.easing_formulas[bz](bp / bA) : bp / bA;
                    for (var bB in bE) {
                        if (bE[ab](bB)) {
                            switch (ah[bB]) {
                            case "along":
                                d = S * bA * bw[bB];
                                E.back && (d = E.len - d);
                                var bC = I(E[bB], d);
                                bq.translate(bw.sx - bw.x || 0, bw.sy - bw.y || 0);
                                bw.x = bC.x;
                                bw.y = bC.y;
                                bq.translate(bC.x - bw.sx, bC.y - bw.sy);
                                E.rot && bq.rotate(bw.r + bC.alpha, bC.x, bC.y);
                                break;
                            case ax:
                                d = +bE[bB] + S * bA * bw[bB];
                                break;
                            case "colour":
                                d = "rgb(" + [H(Y(bE[bB].r + S * bA * bw[bB].r)), H(Y(bE[bB].g + S * bA * bw[bB].g)), H(Y(bE[bB].b + S * bA * bw[bB].b))][aN](",") + ")";
                                break;
                            case "path":
                                d = [];
                                for (var bG = 0, bu = bE[bB][o]; bG < bu; bG++) {
                                    d[bG] = [bE[bB][bG][0]];
                                    for (var bF = 1, bH = bE[bB][bG][o]; bF < bH; bF++) {
                                        d[bG][bF] = +bE[bB][bG][bF] + S * bA * bw[bB][bG][bF]
                                    }
                                    d[bG] = d[bG][aN](az)
                                }
                                d = d[aN](az);
                                break;
                            case "csv":
                                switch (bB) {
                                case "translation":
                                    var bt = bw[bB][0] * (bp - by),
                                        bs = bw[bB][1] * (bp - by);
                                    bv.x += bt;
                                    bv.y += bs;
                                    d = bt + az + bs;
                                    break;
                                case "rotation":
                                    d = +bE[bB][0] + S * bA * bw[bB][0];
                                    bE[bB][1] && (d += "," + bE[bB][1] + "," + bE[bB][2]);
                                    break;
                                case "scale":
                                    d = [+bE[bB][0] + S * bA * bw[bB][0], + bE[bB][1] + S * bA * bw[bB][1], (2 in E[bB] ? E[bB][2] : aG), (3 in E[bB] ? E[bB][3] : aG)][aN](az);
                                    break;
                                case "clip-rect":
                                    d = [];
                                    bG = 4;
                                    while (bG--) {
                                        d[bG] = +bE[bB][bG] + S * bA * bw[bB][bG]
                                    }
                                    break
                                }
                                break
                            }
                            bx[bB] = d
                        }
                    }
                    bq.attr(bx);
                    bq._run && bq._run.call(bq)
                } else {
                    if (E.along) {
                        bC = I(E.along, E.len * !E.back);
                        bq.translate(bw.sx - (bw.x || 0) + bC.x - bw.sx, bw.sy - (bw.y || 0) + bC.y - bw.sy);
                        E.rot && bq.rotate(bw.r + bC.alpha, bC.x, bC.y)
                    }(bv.x || bv.y) && bq.translate(-bv.x, - bv.y);
                    E.scale && (E.scale += aG);
                    bq.attr(E);
                    delete Q[bD];
                    Q[o]--;
                    bq.in_animation = null;
                    aA.is(R, "function") && R.call(bq)
                }
                bI.prev = bp
            }
        }
        aA.svg && bq && bq.paper && bq.paper.safari();
        Q[o] && aH.setTimeout(bd)
    }, H = function (d) {
        return h(a3(d, 255), 0)
    }, x = function (d, i) {
        if (d == null) {
            return {
                x: this._.tx,
                y: this._.ty,
                toString: z
            }
        }
        this._.tx += +d;
        this._.ty += +i;
        switch (this.type) {
        case "circle":
        case "ellipse":
            this.attr({
                cx: +d + this.attrs.cx,
                cy: +i + this.attrs.cy
            });
            break;
        case "rect":
        case "image":
        case "text":
            this.attr({
                x: +d + this.attrs.x,
                y: +i + this.attrs.y
            });
            break;
        case "path":
            var e = am(this.attrs.path);
            e[0][1] += +d;
            e[0][2] += +i;
            this.attr({
                path: e
            });
            break
        }
        return this
    };
    aL[bm].animateWith = function (e, i, d, R, E) {
        Q[e.id] && (i.start = Q[e.id].start);
        return this.animate(i, d, R, E)
    };
    aL[bm].animateAlong = aM();
    aL[bm].animateAlongBack = aM(1);

    function aM(d) {
        return function (E, i, e, S) {
            var R = {
                back: d
            };
            aA.is(e, "function") ? (S = e) : (R.rot = e);
            E && E.constructor == aL && (E = E.attrs.path);
            E && (R.along = E);
            return this.animate(R, i, S)
        }
    }
    aL[bm].onAnimation = function (d) {
        this._run = d || 0;
        return this
    };
    aL[bm].animate = function (bD, bu, bt, E) {
        if (aA.is(bt, "function") || !bt) {
            E = bt || null
        }
        var by = {}, e = {}, br = {};
        for (var bv in bD) {
            if (bD[ab](bv)) {
                if (ah[ab](bv)) {
                    by[bv] = this.attr(bv);
                    (by[bv] == null) && (by[bv] = l[bv]);
                    e[bv] = bD[bv];
                    switch (ah[bv]) {
                    case "along":
                        var bB = aC(bD[bv]),
                            bw = I(bD[bv], bB * !! bD.back),
                            R = this.getBBox();
                        br[bv] = bB / bu;
                        br.tx = R.x;
                        br.ty = R.y;
                        br.sx = bw.x;
                        br.sy = bw.y;
                        e.rot = bD.rot;
                        e.back = bD.back;
                        e.len = bB;
                        bD.rot && (br.r = ae(this.rotate()) || 0);
                        break;
                    case ax:
                        br[bv] = (e[bv] - by[bv]) / bu;
                        break;
                    case "colour":
                        by[bv] = aA.getRGB(by[bv]);
                        var bx = aA.getRGB(e[bv]);
                        br[bv] = {
                            r: (bx.r - by[bv].r) / bu,
                            g: (bx.g - by[bv].g) / bu,
                            b: (bx.b - by[bv].b) / bu
                        };
                        break;
                    case "path":
                        var S = O(by[bv], e[bv]);
                        by[bv] = S[0];
                        var bs = S[1];
                        br[bv] = [];
                        for (var bA = 0, bq = by[bv][o]; bA < bq; bA++) {
                            br[bv][bA] = [0];
                            for (var bz = 1, bC = by[bv][bA][o]; bz < bC; bz++) {
                                br[bv][bA][bz] = (bs[bA][bz] - by[bv][bA][bz]) / bu
                            }
                        }
                        break;
                    case "csv":
                        var d = (bD[bv] + aG)[F](a),
                            bp = (by[bv] + aG)[F](a);
                        switch (bv) {
                        case "translation":
                            by[bv] = [0, 0];
                            br[bv] = [d[0] / bu, d[1] / bu];
                            break;
                        case "rotation":
                            by[bv] = (bp[1] == d[1] && bp[2] == d[2]) ? bp : [0, d[1], d[2]];
                            br[bv] = [(d[0] - by[bv][0]) / bu, 0, 0];
                            break;
                        case "scale":
                            bD[bv] = d;
                            by[bv] = (by[bv] + aG)[F](a);
                            br[bv] = [(d[0] - by[bv][0]) / bu, (d[1] - by[bv][1]) / bu, 0, 0];
                            break;
                        case "clip-rect":
                            by[bv] = (by[bv] + aG)[F](a);
                            br[bv] = [];
                            bA = 4;
                            while (bA--) {
                                br[bv][bA] = (d[bA] - by[bv][bA]) / bu
                            }
                            break
                        }
                        e[bv] = d
                    }
                }
            }
        }
        this.stop();
        this.in_animation = 1;
        Q[this.id] = {
            start: bD.start || +new Date,
            ms: bu,
            easing: bt,
            from: by,
            diff: br,
            to: e,
            el: this,
            callback: E,
            t: {
                x: 0,
                y: 0
            }
        };
        ++Q[o] == 1 && bd();
        return this
    };
    aL[bm].stop = function () {
        Q[this.id] && Q[o]--;
        delete Q[this.id];
        return this
    };
    aL[bm].translate = function (d, e) {
        return this.attr({
            translation: d + " " + e
        })
    };
    aL[bm][aP] = function () {
        return "Rapha\xebl\u2019s object"
    };
    aA.ae = Q;
    var ac = function (d) {
        this.items = [];
        this[o] = 0;
        this.type = "set";
        if (d) {
            for (var e = 0, E = d[o]; e < E; e++) {
                if (d[e] && (d[e].constructor == aL || d[e].constructor == ac)) {
                    this[this.items[o]] = this.items[this.items[o]] = d[e];
                    this[o]++
                }
            }
        }
    };
    ac[bm][f] = function () {
        var R, d;
        for (var e = 0, E = arguments[o]; e < E; e++) {
            R = arguments[e];
            if (R && (R.constructor == aL || R.constructor == ac)) {
                d = this.items[o];
                this[d] = this.items[d] = R;
                this[o]++
            }
        }
        return this
    };
    ac[bm].pop = function () {
        delete this[this[o]--];
        return this.items.pop()
    };
    for (var D in aL[bm]) {
        if (aL[bm][ab](D)) {
            ac[bm][D] = (function (d) {
                return function () {
                    for (var e = 0, E = this.items[o]; e < E; e++) {
                        this.items[e][d][bk](this.items[e], arguments)
                    }
                    return this
                }
            })(D)
        }
    }
    ac[bm].attr = function (e, bp) {
        if (e && aA.is(e, aV) && aA.is(e[0], "object")) {
            for (var d = 0, S = e[o]; d < S; d++) {
                this.items[d].attr(e[d])
            }
        } else {
            for (var E = 0, R = this.items[o]; E < R; E++) {
                this.items[E].attr(e, bp)
            }
        }
        return this
    };
    ac[bm].animate = function (e, d, bp, br) {
        (aA.is(bp, "function") || !bp) && (br = bp || null);
        var S = this.items[o],
            E = S,
            bs, bq = this,
            R;
        br && (R = function () {
            !--S && br.call(bq)
        });
        bp = aA.is(bp, aa) ? bp : R;
        bs = this.items[--E].animate(e, d, bp, R);
        while (E--) {
            this.items[E].animateWith(bs, e, d, bp, R)
        }
        return this
    };
    ac[bm].insertAfter = function (e) {
        var d = this.items[o];
        while (d--) {
            this.items[d].insertAfter(e)
        }
        return this
    };
    ac[bm].getBBox = function () {
        var d = [],
            bp = [],
            e = [],
            R = [];
        for (var E = this.items[o]; E--;) {
            var S = this.items[E].getBBox();
            d[f](S.x);
            bp[f](S.y);
            e[f](S.x + S.width);
            R[f](S.y + S.height)
        }
        d = a3[bk](0, d);
        bp = a3[bk](0, bp);
        return {
            x: d,
            y: bp,
            width: h[bk](0, e) - d,
            height: h[bk](0, R) - bp
        }
    };
    ac[bm].clone = function (E) {
        E = new ac;
        for (var d = 0, e = this.items[o]; d < e; d++) {
            E[f](this.items[d].clone())
        }
        return E
    };
    aA.registerFont = function (e) {
        if (!e.face) {
            return e
        }
        this.fonts = this.fonts || {};
        var E = {
            w: e.w,
            face: {},
            glyphs: {}
        }, i = e.face["font-family"];
        for (var bp in e.face) {
            if (e.face[ab](bp)) {
                E.face[bp] = e.face[bp]
            }
        }
        if (this.fonts[i]) {
            this.fonts[i][f](E)
        } else {
            this.fonts[i] = [E]
        }
        if (!e.svg) {
            E.face["units-per-em"] = N(e.face["units-per-em"], 10);
            for (var R in e.glyphs) {
                if (e.glyphs[ab](R)) {
                    var S = e.glyphs[R];
                    E.glyphs[R] = {
                        w: S.w,
                        k: {},
                        d: S.d && "M" + S.d[bb](/[mlcxtrv]/g, function (bq) {
                            return {
                                l: "L",
                                c: "C",
                                x: "z",
                                t: "m",
                                r: "l",
                                v: "c"
                            }[bq] || "M"
                        }) + "z"
                    };
                    if (S.k) {
                        for (var d in S.k) {
                            if (S[ab](d)) {
                                E.glyphs[R].k[d] = S.k[d]
                            }
                        }
                    }
                }
            }
        }
        return e
    };
    bh[bm].getFont = function (br, bs, e, R) {
        R = R || "normal";
        e = e || "normal";
        bs = +bs || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[bs] || 400;
        if (!aA.fonts) {
            return
        }
        var S = aA.fonts[br];
        if (!S) {
            var E = new RegExp("(^|\\s)" + br[bb](/[^\w\d\s+!~.:_-]/g, aG) + "(\\s|$)", "i");
            for (var d in aA.fonts) {
                if (aA.fonts[ab](d)) {
                    if (E.test(d)) {
                        S = aA.fonts[d];
                        break
                    }
                }
            }
        }
        var bp;
        if (S) {
            for (var bq = 0, bt = S[o]; bq < bt; bq++) {
                bp = S[bq];
                if (bp.face["font-weight"] == bs && (bp.face["font-style"] == e || !bp.face["font-style"]) && bp.face["font-stretch"] == R) {
                    break
                }
            }
        }
        return bp
    };
    bh[bm].print = function (R, E, d, bq, br, bA) {
        bA = bA || "middle";
        var bw = this.set(),
            bz = (d + aG)[F](aG),
            bx = 0,
            bt = aG,
            bB;
        aA.is(bq, d) && (bq = this.getFont(bq));
        if (bq) {
            bB = (br || 16) / bq.face["units-per-em"];
            var e = bq.face.bbox.split(a),
                bp = +e[0],
                bs = +e[1] + (bA == "baseline" ? e[3] - e[1] + (+bq.face.descent) : (e[3] - e[1]) / 2);
            for (var bv = 0, S = bz[o]; bv < S; bv++) {
                var bu = bv && bq.glyphs[bz[bv - 1]] || {}, by = bq.glyphs[bz[bv]];
                bx += bv ? (bu.w || bq.w) + (bu.k && bu.k[bz[bv]] || 0) : 0;
                by && by.d && bw[f](this.path(by.d).attr({
                    fill: "#000",
                    stroke: "none",
                    translation: [bx, 0]
                }))
            }
            bw.scale(bB, bB, bp, bs).translate(R - bp, E - bs)
        }
        return bw
    };
    var a7 = /\{(\d+)\}/g;
    aA.format = function (e, i) {
        var d = aA.is(i, aV) ? [0][bf](i) : arguments;
        e && aA.is(e, aa) && d[o] - 1 && (e = e[bb](a7, function (R, E) {
            return d[++E] == null ? aG : d[E]
        }));
        return e || aG
    };
    aA.ninja = function () {
        n.was ? (Raphael = n.is) : delete Raphael;
        return aA
    };
    aA.el = aL[bm];
    return aA
})();
if (!window.ABCJS) {
    window.ABCJS = {}
}(function () {
    ABCJS.numberOfTunes = function (d) {
        var b = d.split("\nX:");
        var c = b.length;
        if (c === 0) {
            c = 1
        }
        return c
    };
    ABCJS.TuneBook = function (d) {
        var h = this;
        var g = "";
        d = window.ABCJS.parse.strip(d);
        var b = d.split("\nX:");
        for (var f = 1; f < b.length; f++) {
            b[f] = "X:" + b[f]
        }
        var j = 0;
        h.tunes = [];
        window.ABCJS.parse.each(b, function (i) {
            h.tunes.push({
                abc: i,
                startPos: j
            });
            j += i.length
        });
        if (h.tunes.length > 1 && !window.ABCJS.parse.startsWith(h.tunes[0].abc, "X:")) {
            var c = h.tunes.shift();
            var e = c.abc.split("\n");
            window.ABCJS.parse.each(e, function (i) {
                if (window.ABCJS.parse.startsWith(i, "%%")) {
                    g += i + "\n"
                }
            })
        }
        h.header = g;
        window.ABCJS.parse.each(h.tunes, function (k) {
            var i = k.abc.indexOf("\n\n");
            if (i > 0) {
                k.abc = k.abc.substring(0, i)
            }
            k.pure = k.abc;
            k.abc = g + k.abc;
            var l = k.pure.split("T:");
            l = l[1].split("\n");
            k.title = l[0].replace(/^\s+|\s+$/g, "");
            var m = k.pure.substring(2, k.pure.indexOf("\n"));
            k.id = m.replace(/^\s+|\s+$/g, "")
        })
    };
    ABCJS.TuneBook.prototype.getTuneById = function (c) {
        for (var b = 0; b < this.tunes.length; b++) {
            if (this.tunes[b].id === c) {
                return this.tunes[b]
            }
        }
        return null
    };
    ABCJS.TuneBook.prototype.getTuneByTitle = function (c) {
        for (var b = 0; b < this.tunes.length; b++) {
            if (this.tunes[b].title === c) {
                return this.tunes[b]
            }
        }
        return null
    };

    function a(n, e, m, l, d) {
        var k = function (i) {
            return i && !(i.propertyIsEnumerable("length")) && typeof i === "object" && typeof i.length === "number"
        };
        if (e === undefined || m === undefined) {
            return
        }
        if (!k(e)) {
            e = [e]
        }
        if (l === undefined) {
            l = {}
        }
        if (d === undefined) {
            d = {}
        }
        var g = d.startingTune ? d.startingTune : 0;
        var f = new ABCJS.TuneBook(m);
        var c = new window.ABCJS.parse.Parse();
        for (var h = 0; h < e.length; h++) {
            var b = e[h];
            if (typeof (b) === "string") {
                b = document.getElementById(b)
            }
            if (b) {
                b.innerHTML = "";
                if (g < f.tunes.length) {
                    c.parse(f.tunes[g].abc, l);
                    var j = c.getTune();
                    n(b, j)
                }
            }
            g++
        }
    }
    ABCJS.renderAbc = function (c, e, b, d, f) {
        function g(l, j) {
            var h = f ? f.width ? f.width : 800 : 800;
            var k = Raphael(l, h, 400);
            if (d === undefined) {
                d = {}
            }
            var i = new ABCJS.write.Printer(k, d);
            i.printABC(j)
        }
        a(g, c, e, b, f)
    };
    ABCJS.renderMidi = function (c, d, b, f, e) {
        function g(j, h) {
            if (f === undefined) {
                f = {}
            }
            var i = new ABCJS.midi.MidiWriter(j, f);
            i.writeABC(h)
        }
        a(g, c, d, b, e)
    }
})();
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.data) {
    window.ABCJS.data = {}
}
window.ABCJS.data.Tune = function () {
    this.reset = function () {
        this.version = "1.0.1";
        this.media = "screen";
        this.metaText = {};
        this.formatting = {};
        this.lines = [];
        this.staffNum = 0;
        this.voiceNum = 0;
        this.lineNum = 0
    };
    this.cleanUp = function (f, p, y, q) {
        this.closeLine();
        var b = false;
        var x, o, k;
        for (x = 0; x < this.lines.length; x++) {
            if (this.lines[x].staff !== undefined) {
                var m = false;
                for (o = 0; o < this.lines[x].staff.length; o++) {
                    if (this.lines[x].staff[o] === undefined) {
                        b = true;
                        this.lines[x].staff[o] = null
                    } else {
                        for (k = 0; k < this.lines[x].staff[o].voices.length; k++) {
                            if (this.lines[x].staff[o].voices[k] === undefined) {
                                this.lines[x].staff[o].voices[k] = []
                            } else {
                                if (this.containsNotes(this.lines[x].staff[o].voices[k])) {
                                    m = true
                                }
                            }
                        }
                    }
                }
                if (!m) {
                    this.lines[x] = null;
                    b = true
                }
            }
        }
        if (b) {
            this.lines = window.ABCJS.parse.compact(this.lines);
            window.ABCJS.parse.each(this.lines, function (i) {
                if (i.staff) {
                    i.staff = window.ABCJS.parse.compact(i.staff)
                }
            })
        }
        if (y) {
            for (x = 0; x < this.lines.length; x++) {
                if (this.lines[x].staff !== undefined) {
                    for (o = 0; o < this.lines[x].staff.length; o++) {
                        for (k = 0; k < this.lines[x].staff[o].voices.length; k++) {
                            var d = 0;
                            for (var t = 0; t < this.lines[x].staff[o].voices[k].length; t++) {
                                if (this.lines[x].staff[o].voices[k][t].el_type === "bar") {
                                    d++;
                                    if (d >= y) {
                                        if (t < this.lines[x].staff[o].voices[k].length - 1) {
                                            if (x === this.lines.length - 1) {
                                                var g = JSON.parse(JSON.stringify(this.lines[x]));
                                                this.lines.push(window.ABCJS.parse.clone(g));
                                                for (var u = 0; u < this.lines[x + 1].staff.length; u++) {
                                                    for (var r = 0; r < this.lines[x + 1].staff[u].voices.length; r++) {
                                                        this.lines[x + 1].staff[u].voices[r] = []
                                                    }
                                                }
                                            }
                                            var a = t + 1;
                                            var h = this.lines[x].staff[o].voices[k].slice(a);
                                            this.lines[x].staff[o].voices[k] = this.lines[x].staff[o].voices[k].slice(0, a);
                                            this.lines[x + 1].staff[o].voices[k] = h.concat(this.lines[x + 1].staff[o].voices[k])
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (y) {
            b = false;
            for (x = 0; x < this.lines.length; x++) {
                if (this.lines[x].staff !== undefined) {
                    for (o = 0; o < this.lines[x].staff.length; o++) {
                        var c = false;
                        for (k = 0; k < this.lines[x].staff[o].voices.length; k++) {
                            if (this.containsNotesStrict(this.lines[x].staff[o].voices[k])) {
                                c = true
                            }
                        }
                        if (!c) {
                            b = true;
                            this.lines[x].staff[o] = null
                        }
                    }
                }
            }
            if (b) {
                window.ABCJS.parse.each(this.lines, function (i) {
                    if (i.staff) {
                        i.staff = window.ABCJS.parse.compact(i.staff)
                    }
                })
            }
        }
        for (x = 0; x < this.lines.length; x++) {
            if (this.lines[x].staff) {
                for (o = 0; o < this.lines[x].staff.length; o++) {
                    delete this.lines[x].staff[o].workingClef
                }
            }
        }
        function l(K) {
            var J = [];
            var H;
            var I = function (N, j, P) {
                if (J[P] === undefined) {
                    for (H = 0; H < J.length; H++) {
                        if (J[H] !== undefined) {
                            P = H;
                            break
                        }
                    }
                    if (J[P] === undefined) {
                        var O = P * 100;
                        window.ABCJS.parse.each(N.endSlur, function (i) {
                            if (O === i) {
                                --O
                            }
                        });
                        J[P] = [O]
                    }
                }
                var M;
                for (var L = 0; L < j; L++) {
                    M = J[P].pop();
                    N.endSlur.push(M)
                }
                if (J[P].length === 0) {
                    delete J[P]
                }
                return M
            };
            var C = function (N, j, O, M) {
                N.startSlur = [];
                if (J[O] === undefined) {
                    J[O] = []
                }
                var P = O * 100 + 1;
                for (var L = 0; L < j; L++) {
                    if (M) {
                        window.ABCJS.parse.each(M, function (i) {
                            if (P === i) {
                                ++P
                            }
                        });
                        window.ABCJS.parse.each(M, function (i) {
                            if (P === i) {
                                ++P
                            }
                        });
                        window.ABCJS.parse.each(M, function (i) {
                            if (P === i) {
                                ++P
                            }
                        })
                    }
                    window.ABCJS.parse.each(J[O], function (i) {
                        if (P === i) {
                            ++P
                        }
                    });
                    window.ABCJS.parse.each(J[O], function (i) {
                        if (P === i) {
                            ++P
                        }
                    });
                    J[O].push(P);
                    N.startSlur.push({
                        label: P
                    });
                    P++
                }
            };
            for (var D = 0; D < K.length; D++) {
                var v = K[D];
                if (v.el_type === "note") {
                    if (v.gracenotes) {
                        for (var E = 0; E < v.gracenotes.length; E++) {
                            if (v.gracenotes[E].endSlur) {
                                var F = v.gracenotes[E].endSlur;
                                v.gracenotes[E].endSlur = [];
                                for (var n = 0; n < F; n++) {
                                    I(v.gracenotes[E], 1, 20)
                                }
                            }
                            if (v.gracenotes[E].startSlur) {
                                H = v.gracenotes[E].startSlur;
                                C(v.gracenotes[E], H, 20)
                            }
                        }
                    }
                    if (v.endSlur) {
                        H = v.endSlur;
                        v.endSlur = [];
                        I(v, H, 0)
                    }
                    if (v.startSlur) {
                        H = v.startSlur;
                        C(v, H, 0)
                    }
                    if (v.pitches) {
                        var G = [];
                        for (var s = 0; s < v.pitches.length; s++) {
                            if (v.pitches[s].endSlur) {
                                var A = v.pitches[s].endSlur;
                                v.pitches[s].endSlur = [];
                                for (var B = 0; B < A; B++) {
                                    var z = I(v.pitches[s], 1, s + 1);
                                    G.push(z)
                                }
                            }
                        }
                        for (s = 0; s < v.pitches.length; s++) {
                            if (v.pitches[s].startSlur) {
                                H = v.pitches[s].startSlur;
                                C(v.pitches[s], H, s + 1, G)
                            }
                        }
                        if (v.gracenotes && v.pitches[0].endSlur && v.pitches[0].endSlur[0] === 100 && v.pitches[0].startSlur) {
                            if (v.gracenotes[0].endSlur) {
                                v.gracenotes[0].endSlur.push(v.pitches[0].startSlur[0].label)
                            } else {
                                v.gracenotes[0].endSlur = [v.pitches[0].startSlur[0].label]
                            }
                            if (v.pitches[0].endSlur.length === 1) {
                                delete v.pitches[0].endSlur
                            } else {
                                if (v.pitches[0].endSlur[0] === 100) {
                                    v.pitches[0].endSlur.shift()
                                } else {
                                    if (v.pitches[0].endSlur[v.pitches[0].endSlur.length - 1] === 100) {
                                        v.pitches[0].endSlur.pop()
                                    }
                                }
                            }
                            if (J[1].length === 1) {
                                delete J[1]
                            } else {
                                J[1].pop()
                            }
                        }
                    }
                }
            }
        }
        function e(n) {
            var j = -2;
            var i = 5;
            switch (n.type) {
            case "treble+8":
            case "treble-8":
                break;
            case "bass":
            case "bass+8":
            case "bass-8":
                n.verticalPos = 20 + n.verticalPos;
                j += 6;
                i += 6;
                break;
            case "tenor":
            case "tenor+8":
            case "tenor-8":
                n.verticalPos = -n.verticalPos;
                j = -40;
                i = 40;
                break;
            case "alto":
            case "alto+8":
            case "alto-8":
                n.verticalPos = -n.verticalPos;
                j = -40;
                i = 40;
                break
            }
            if (n.verticalPos < j) {
                while (n.verticalPos < j) {
                    n.verticalPos += 7
                }
            } else {
                if (n.verticalPos > i) {
                    while (n.verticalPos > i) {
                        n.verticalPos -= 7
                    }
                }
            }
        }
        for (this.lineNum = 0; this.lineNum < this.lines.length; this.lineNum++) {
            if (this.lines[this.lineNum].staff) {
                for (this.staffNum = 0; this.staffNum < this.lines[this.lineNum].staff.length; this.staffNum++) {
                    if (this.lines[this.lineNum].staff[this.staffNum].clef) {
                        e(this.lines[this.lineNum].staff[this.staffNum].clef)
                    }
                    for (this.voiceNum = 0; this.voiceNum < this.lines[this.lineNum].staff[this.staffNum].voices.length; this.voiceNum++) {
                        l(this.lines[this.lineNum].staff[this.staffNum].voices[this.voiceNum]);
                        for (var w = 0; w < this.lines[this.lineNum].staff[this.staffNum].voices[this.voiceNum].length; w++) {
                            if (this.lines[this.lineNum].staff[this.staffNum].voices[this.voiceNum][w].el_type === "clef") {
                                e(this.lines[this.lineNum].staff[this.staffNum].voices[this.voiceNum][w])
                            }
                        }
                    }
                }
            }
        }
        if (!this.formatting.pagewidth) {
            this.formatting.pagewidth = f
        }
        if (!this.formatting.pageheight) {
            this.formatting.pageheight = p
        }
        delete this.staffNum;
        delete this.voiceNum;
        delete this.lineNum;
        delete this.potentialStartBeam;
        delete this.potentialEndBeam;
        delete this.vskipPending
    };
    this.reset();
    this.getLastNote = function () {
        if (this.lines[this.lineNum] && this.lines[this.lineNum].staff && this.lines[this.lineNum].staff[this.staffNum] && this.lines[this.lineNum].staff[this.staffNum].voices[this.voiceNum]) {
            for (var a = this.lines[this.lineNum].staff[this.staffNum].voices[this.voiceNum].length - 1; a >= 0; a--) {
                var b = this.lines[this.lineNum].staff[this.staffNum].voices[this.voiceNum][a];
                if (b.el_type === "note") {
                    return b
                }
            }
        }
        return null
    };
    this.addTieToLastNote = function () {
        var a = this.getLastNote();
        if (a && a.pitches && a.pitches.length > 0) {
            a.pitches[0].startTie = {};
            return true
        }
        return false
    };
    this.getDuration = function (a) {
        if (a.duration) {
            return a.duration
        }
        return 0
    };
    this.closeLine = function () {
        if (this.potentialStartBeam && this.potentialEndBeam) {
            this.potentialStartBeam.startBeam = true;
            this.potentialEndBeam.endBeam = true
        }
        delete this.potentialStartBeam;
        delete this.potentialEndBeam
    };
    this.appendElement = function (h, i, e, a) {
        var c = this;
        var g = function (l) {
            if (l.pitches !== undefined) {
                var j = c.lines[c.lineNum].staff[c.staffNum].workingClef.verticalPos;
                window.ABCJS.parse.each(l.pitches, function (m) {
                    m.verticalPos = m.pitch - j
                })
            }
            if (l.gracenotes !== undefined) {
                var k = c.lines[c.lineNum].staff[c.staffNum].workingClef.verticalPos;
                window.ABCJS.parse.each(l.gracenotes, function (m) {
                    m.verticalPos = m.pitch - k
                })
            }
            c.lines[c.lineNum].staff[c.staffNum].voices[c.voiceNum].push(l)
        };
        a.el_type = h;
        if (i !== null) {
            a.startChar = i
        }
        if (e !== null) {
            a.endChar = e
        }
        var d = function () {
            c.potentialStartBeam.startBeam = true;
            a.endBeam = true;
            delete c.potentialStartBeam;
            delete c.potentialEndBeam
        };
        var f = function () {
            if (c.potentialStartBeam !== undefined && c.potentialEndBeam !== undefined) {
                c.potentialStartBeam.startBeam = true;
                c.potentialEndBeam.endBeam = true
            }
            delete c.potentialStartBeam;
            delete c.potentialEndBeam
        };
        if (h === "note") {
            var b = c.getDuration(a);
            if (b >= 0.25) {
                f()
            } else {
                if (a.force_end_beam_last && c.potentialStartBeam !== undefined) {
                    f()
                } else {
                    if (a.end_beam && c.potentialStartBeam !== undefined) {
                        if (a.rest === undefined) {
                            d()
                        } else {
                            f()
                        }
                    } else {
                        if (a.rest === undefined) {
                            if (c.potentialStartBeam === undefined) {
                                if (!a.end_beam) {
                                    c.potentialStartBeam = a;
                                    delete c.potentialEndBeam
                                }
                            } else {
                                c.potentialEndBeam = a
                            }
                        }
                    }
                }
            }
        } else {
            f()
        }
        delete a.end_beam;
        delete a.force_end_beam_last;
        g(a)
    };
    this.appendStartingElement = function (f, a, h, c) {
        this.closeLine();
        var e;
        if (f === "key") {
            e = c.impliedNaturals;
            delete c.impliedNaturals
        }
        var b = window.ABCJS.parse.clone(c);
        if (f === "clef") {
            this.lines[this.lineNum].staff[this.staffNum].workingClef = b
        }
        var g = this.lines[this.lineNum].staff[this.staffNum].voices[this.voiceNum];
        for (var d = 0; d < g.length; d++) {
            if (g[d].el_type === "note" || g[d].el_type === "bar") {
                b.el_type = f;
                b.startChar = a;
                b.endChar = h;
                if (e) {
                    b.accidentals = e.concat(b.accidentals)
                }
                g.push(b);
                return
            }
            if (g[d].el_type === f) {
                b.el_type = f;
                b.startChar = a;
                b.endChar = h;
                if (e) {
                    b.accidentals = e.concat(b.accidentals)
                }
                g[d] = b;
                return
            }
        }
        this.lines[this.lineNum].staff[this.staffNum][f] = c
    };
    this.getNumLines = function () {
        return this.lines.length
    };
    this.pushLine = function (a) {
        if (this.vskipPending) {
            a.vskip = this.vskipPending;
            delete this.vskipPending
        }
        this.lines.push(a)
    };
    this.addSubtitle = function (a) {
        this.pushLine({
            subtitle: a
        })
    };
    this.addSpacing = function (a) {
        this.vskipPending = a
    };
    this.addNewPage = function (a) {
        this.pushLine({
            newpage: a
        })
    };
    this.addSeparator = function (c, b, a) {
        this.pushLine({
            separator: {
                spaceAbove: c,
                spaceBelow: b,
                lineLength: a
            }
        })
    };
    this.addText = function (a) {
        this.pushLine({
            text: a
        })
    };
    this.addCentered = function (a) {
        this.pushLine({
            text: [{
                text: a,
                center: true
            }]
        })
    };
    this.containsNotes = function (b) {
        for (var a = 0; a < b.length; a++) {
            if (b[a].el_type === "note" || b[a].el_type === "bar") {
                return true
            }
        }
        return false
    };
    this.containsNotesStrict = function (b) {
        for (var a = 0; a < b.length; a++) {
            if (b[a].el_type === "note" && b[a].rest === undefined) {
                return true
            }
        }
        return false
    };
    this.startNewLine = function (e) {
        var d = this;
        this.closeLine();
        var c = function (j) {
            d.lines[d.lineNum].staff[d.staffNum].voices[d.voiceNum] = [];
            if (d.isFirstLine(d.lineNum)) {
                if (j.name) {
                    if (!d.lines[d.lineNum].staff[d.staffNum].title) {
                        d.lines[d.lineNum].staff[d.staffNum].title = []
                    }
                    d.lines[d.lineNum].staff[d.staffNum].title[d.voiceNum] = j.name
                }
            } else {
                if (j.subname) {
                    if (!d.lines[d.lineNum].staff[d.staffNum].title) {
                        d.lines[d.lineNum].staff[d.staffNum].title = []
                    }
                    d.lines[d.lineNum].staff[d.staffNum].title[d.voiceNum] = j.subname
                }
            }
            if (j.style) {
                d.appendElement("style", null, null, {
                    head: j.style
                })
            }
            if (j.stem) {
                d.appendElement("stem", null, null, {
                    direction: j.stem
                })
            } else {
                if (d.voiceNum > 0) {
                    if (d.lines[d.lineNum].staff[d.staffNum].voices[0] !== undefined) {
                        var g = false;
                        for (var f = 0; f < d.lines[d.lineNum].staff[d.staffNum].voices[0].length; f++) {
                            if (d.lines[d.lineNum].staff[d.staffNum].voices[0].el_type === "stem") {
                                g = true
                            }
                        }
                        if (!g) {
                            var h = {
                                el_type: "stem",
                                direction: "up"
                            };
                            d.lines[d.lineNum].staff[d.staffNum].voices[0].splice(0, 0, h)
                        }
                    }
                    d.appendElement("stem", null, null, {
                        direction: "down"
                    })
                }
            }
            if (j.scale) {
                d.appendElement("scale", null, null, {
                    size: j.scale
                })
            }
        };
        var a = function (f) {
            d.lines[d.lineNum].staff[d.staffNum] = {
                voices: [],
                clef: f.clef,
                key: f.key,
                workingClef: f.clef
            };
            if (f.vocalfont) {
                d.lines[d.lineNum].staff[d.staffNum].vocalfont = f.vocalfont
            }
            if (f.bracket) {
                d.lines[d.lineNum].staff[d.staffNum].bracket = f.bracket
            }
            if (f.brace) {
                d.lines[d.lineNum].staff[d.staffNum].brace = f.brace
            }
            if (f.connectBarLines) {
                d.lines[d.lineNum].staff[d.staffNum].connectBarLines = f.connectBarLines
            }
            c(f);
            if (f.part) {
                d.appendElement("part", f.startChar, f.endChar, {
                    title: f.part
                })
            }
            if (f.meter !== undefined) {
                d.lines[d.lineNum].staff[d.staffNum].meter = f.meter
            }
        };
        var b = function (f) {
            d.lines[d.lineNum] = {
                staff: []
            };
            a(f)
        };
        if (this.lines[this.lineNum] === undefined) {
            b(e)
        } else {
            if (this.lines[this.lineNum].staff === undefined) {
                this.lineNum++;
                this.startNewLine(e)
            } else {
                if (this.lines[this.lineNum].staff[this.staffNum] === undefined) {
                    a(e)
                } else {
                    if (this.lines[this.lineNum].staff[this.staffNum].voices[this.voiceNum] === undefined) {
                        c(e)
                    } else {
                        if (!this.containsNotes(this.lines[this.lineNum].staff[this.staffNum].voices[this.voiceNum])) {
                            return
                        } else {
                            this.lineNum++;
                            this.startNewLine(e)
                        }
                    }
                }
            }
        }
    };
    this.hasBeginMusic = function () {
        return this.lines.length > 0
    };
    this.isFirstLine = function (a) {
        for (var b = a - 1; b >= 0; b--) {
            if (this.lines[b].staff !== undefined) {
                return false
            }
        }
        return true
    };
    this.getCurrentVoice = function () {
        if (this.lines[this.lineNum] !== undefined && this.lines[this.lineNum].staff[this.staffNum] !== undefined && this.lines[this.lineNum].staff[this.staffNum].voices[this.voiceNum] !== undefined) {
            return this.lines[this.lineNum].staff[this.staffNum].voices[this.voiceNum]
        } else {
            return null
        }
    };
    this.setCurrentVoice = function (c, b) {
        this.staffNum = c;
        this.voiceNum = b;
        for (var a = 0; a < this.lines.length; a++) {
            if (this.lines[a].staff) {
                if (this.lines[a].staff[c] === undefined || this.lines[a].staff[c].voices[b] === undefined || !this.containsNotes(this.lines[a].staff[c].voices[b])) {
                    this.lineNum = a;
                    return
                }
            }
        }
        this.lineNum = a
    };
    this.addMetaText = function (a, b) {
        if (this.metaText[a] === undefined) {
            this.metaText[a] = b
        } else {
            this.metaText[a] += "\n" + b
        }
    };
    this.addMetaTextArray = function (a, b) {
        if (this.metaText[a] === undefined) {
            this.metaText[a] = [b]
        } else {
            this.metaText[a].push(b)
        }
    };
    this.addMetaTextObj = function (a, b) {
        this.metaText[a] = b
    }
};
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.midi) {
    window.ABCJS.midi = {}
}(function () {
    function a(j, i) {
        for (var h in i) {
            if (i.hasOwnProperty(h)) {
                j.setAttribute(h, i[h])
            }
        }
        return j
    }
    function g(h, i) {
        this.javamidi = h;
        this.qtmidi = i
    }
    g.prototype.setTempo = function (h) {
        this.javamidi.setTempo(h);
        this.qtmidi.setTempo(h)
    };
    g.prototype.startTrack = function () {
        this.javamidi.startTrack();
        this.qtmidi.startTrack()
    };
    g.prototype.endTrack = function () {
        this.javamidi.endTrack();
        this.qtmidi.endTrack()
    };
    g.prototype.setInstrument = function (h) {
        this.javamidi.setInstrument(h);
        this.qtmidi.setInstrument(h)
    };
    g.prototype.startNote = function (j, h, i) {
        this.javamidi.startNote(j, h, i);
        this.qtmidi.startNote(j, h, i)
    };
    g.prototype.endNote = function (i, h) {
        this.javamidi.endNote(i, h);
        this.qtmidi.endNote(i, h)
    };
    g.prototype.addRest = function (h) {
        this.javamidi.addRest(h);
        this.qtmidi.addRest(h)
    };
    g.prototype.embed = function (h) {
        this.javamidi.embed(h);
        this.qtmidi.embed(h, true)
    };

    function b(h) {
        this.playlist = [];
        this.trackcount = 0;
        this.timecount = 0;
        this.tempo = 60;
        this.midiapi = MIDIPlugin;
        this.midiwriter = h;
        this.noteOnAndChannel = "%90"
    }
    b.prototype.setTempo = function (h) {
        this.tempo = h
    };
    b.prototype.startTrack = function () {
        this.silencelength = 0;
        this.trackcount++;
        this.timecount = 0;
        this.playlistpos = 0;
        this.first = true;
        if (this.instrument) {
            this.setInstrument(this.instrument)
        }
        if (this.channel) {
            this.setChannel(this.channel)
        }
    };
    b.prototype.endTrack = function () {};
    b.prototype.setInstrument = function (h) {
        this.instrument = h;
        this.midiapi.setInstrument(h)
    };
    b.prototype.setChannel = function (h) {
        this.channel = h;
        this.midiapi.setChannel(h)
    };
    b.prototype.updatePos = function () {
        while (this.playlist[this.playlistpos] && this.playlist[this.playlistpos].time < this.timecount) {
            this.playlistpos++
        }
    };
    b.prototype.startNote = function (k, i, j) {
        this.timecount += this.silencelength;
        this.silencelength = 0;
        if (this.first) {}
        this.updatePos();
        var h = this;
        this.playlist.splice(this.playlistpos, 0, {
            time: this.timecount,
            funct: function () {
                h.midiapi.playNote(k);
                h.midiwriter.notifySelect(j)
            }
        })
    };
    b.prototype.endNote = function (j, i) {
        this.timecount += i;
        this.updatePos();
        var h = this;
        this.playlist.splice(this.playlistpos, 0, {
            time: this.timecount,
            funct: function () {
                h.midiapi.stopNote(j)
            }
        })
    };
    b.prototype.addRest = function (h) {
        this.silencelength += h
    };
    b.prototype.embed = function (i) {
        this.playlink = a(document.createElement("a"), {
            style: "border:1px solid black; margin:3px;"
        });
        this.playlink.innerHTML = "play";
        var h = this;
        this.playlink.onmousedown = function () {
            if (h.playing) {
                this.innerHTML = "play";
                h.pausePlay()
            } else {
                this.innerHTML = "pause";
                h.startPlay()
            }
        };
        i.appendChild(this.playlink);
        var j = a(document.createElement("a"), {
            style: "border:1px solid black; margin:3px;"
        });
        j.innerHTML = "stop";
        j.onmousedown = function () {
            h.stopPlay()
        };
        i.appendChild(j);
        this.i = 0;
        this.currenttime = 0;
        this.playing = false
    };
    b.prototype.stopPlay = function () {
        this.i = 0;
        this.currenttime = 0;
        this.pausePlay();
        this.playlink.innerHTML = "play"
    };
    b.prototype.startPlay = function () {
        this.playing = true;
        var h = this;
        this.ticksperinterval = 480 / 4;
        this.doPlay();
        this.playinterval = window.setInterval(function () {
            h.doPlay()
        }, (60000 / (this.tempo * 4)))
    };
    b.prototype.pausePlay = function () {
        this.playing = false;
        window.clearInterval(this.playinterval);
        this.midiapi.stopAllNotes()
    };
    b.prototype.doPlay = function () {
        while (this.playlist[this.i] && this.playlist[this.i].time <= this.currenttime) {
            this.playlist[this.i].funct();
            this.i++
        }
        if (this.playlist[this.i]) {
            this.currenttime += this.ticksperinterval
        } else {
            this.stopPlay()
        }
    };

    function d() {
        this.trackstrings = "";
        this.trackcount = 0;
        this.noteOnAndChannel = "%90"
    }
    d.prototype.setTempo = function (h) {
        if (this.trackcount === 0) {
            this.startTrack();
            this.track += "%00%FF%51%03" + c(Math.round(60000000 / h), 6);
            this.endTrack()
        }
    };
    d.prototype.startTrack = function () {
        this.track = "";
        this.silencelength = 0;
        this.trackcount++;
        this.first = true;
        if (this.instrument) {
            this.setInstrument(this.instrument)
        }
    };
    d.prototype.endTrack = function () {
        var h = c(this.track.length / 3 + 4, 8);
        this.track = "MTrk" + h + this.track + "%00%FF%2F%00";
        this.trackstrings += this.track
    };
    d.prototype.setInstrument = function (h) {
        if (this.track) {
            this.track = "%00%C0" + c(h, 2) + this.track
        } else {
            this.track = "%00%C0" + c(h, 2)
        }
        this.instrument = h
    };
    d.prototype.setChannel = function (h) {
        this.channel = h - 1;
        this.noteOnAndChannel = "%9" + this.channel.toString(16)
    };
    d.prototype.startNote = function (i, h) {
        this.track += e(this.silencelength);
        this.silencelength = 0;
        if (this.first) {
            this.first = false;
            this.track += this.noteOnAndChannel
        }
        this.track += "%" + i.toString(16) + "%" + h
    };
    d.prototype.endNote = function (i, h) {
        this.track += e(h);
        this.track += "%" + i.toString(16) + "%00"
    };
    d.prototype.addRest = function (h) {
        this.silencelength += h
    };
    d.prototype.embed = function (i, h) {
        var k = "data:audio/midi,MThd%00%00%00%06%00%01" + c(this.trackcount, 4) + "%01%e0" + this.trackstrings;
        var j = a(document.createElement("a"), {
            href: k
        });
        j.innerHTML = "download midi";
        i.insertBefore(j, i.firstChild);
        if (h) {
            return
        }
        var l = a(document.createElement("embed"), {
            src: k,
            type: "video/quicktime",
            controller: "true",
            autoplay: "false",
            loop: "false",
            enablejavascript: "true",
            style: "display:block; height: 20px;"
        });
        i.insertBefore(l, i.firstChild)
    };

    function f(k) {
        var h = "";
        for (var j = 0; j < k.length; j += 2) {
            h += "%";
            h += k.substr(j, 2)
        }
        return h
    }
    function c(j, i) {
        var h = j.toString(16);
        while (h.length < i) {
            h = "0" + h
        }
        return f(h)
    }
    function e(o) {
        var k = 0;
        var h = [];
        while (o !== 0) {
            h.push(o & 127);
            o = o >> 7
        }
        for (var j = h.length - 1; j >= 0; j--) {
            k = k << 8;
            var l = h[j];
            if (j !== 0) {
                l = l | 128
            }
            k = k | l
        }
        var m = k.toString(16).length;
        m += m % 2;
        return c(k, m)
    }
    ABCJS.midi.MidiWriter = function (i, h) {
        h = h || {};
        this.parent = i;
        this.scale = [0, 2, 4, 5, 7, 9, 11];
        this.restart = {
            line: 0,
            staff: 0,
            voice: 0,
            pos: 0
        };
        this.visited = {};
        this.multiplier = 1;
        this.next = null;
        this.qpm = h.qpm || 180;
        this.program = h.program || 2;
        this.noteOnAndChannel = "%90";
        this.javamidi = h.type === "java" || false;
        this.listeners = [];
        this.transpose = 0;
        if (this.javamidi) {
            MIDIPlugin = document.MIDIPlugin;
            setTimeout(function () {
                try {
                    MIDIPlugin.openPlugin()
                } catch (k) {
                    var j = document.createElement("a");
                    j.href = "http://java.sun.com/products/java-media/sound/soundbanks.html";
                    j.target = "_blank";
                    j.appendChild(document.createTextNode("Download Soundbank"));
                    i.appendChild(j)
                }
            }, 0)
        }
    };
    ABCJS.midi.MidiWriter.prototype.addListener = function (h) {
        this.listeners.push(h)
    };
    ABCJS.midi.MidiWriter.prototype.notifySelect = function (j) {
        for (var h = 0; h < this.listeners.length; h++) {
            this.listeners[h].notifySelect(j.abselem)
        }
    };
    ABCJS.midi.MidiWriter.prototype.getMark = function () {
        return {
            line: this.line,
            staff: this.staff,
            voice: this.voice,
            pos: this.pos
        }
    };
    ABCJS.midi.MidiWriter.prototype.getMarkString = function (h) {
        h = h || this;
        return "line" + h.line + "staff" + h.staff + "voice" + h.voice + "pos" + h.pos
    };
    ABCJS.midi.MidiWriter.prototype.goToMark = function (h) {
        this.line = h.line;
        this.staff = h.staff;
        this.voice = h.voice;
        this.pos = h.pos
    };
    ABCJS.midi.MidiWriter.prototype.markVisited = function () {
        this.lastmark = this.getMarkString();
        this.visited[this.lastmark] = true
    };
    ABCJS.midi.MidiWriter.prototype.isVisited = function () {
        if (this.visited[this.getMarkString()]) {
            return true
        }
        return false
    };
    ABCJS.midi.MidiWriter.prototype.setJumpMark = function (h) {
        this.visited[this.lastmark] = h
    };
    ABCJS.midi.MidiWriter.prototype.getJumpMark = function () {
        return this.visited[this.getMarkString()]
    };
    ABCJS.midi.MidiWriter.prototype.getLine = function () {
        return this.abctune.lines[this.line]
    };
    ABCJS.midi.MidiWriter.prototype.getStaff = function () {
        try {
            return this.getLine().staff[this.staff]
        } catch (h) {}
    };
    ABCJS.midi.MidiWriter.prototype.getVoice = function () {
        return this.getStaff().voices[this.voice]
    };
    ABCJS.midi.MidiWriter.prototype.getElem = function () {
        return this.getVoice()[this.pos]
    };
    ABCJS.midi.MidiWriter.prototype.writeABC = function (l) {
        try {
            this.midi = (this.javamidi) ? new g(new b(this), new d()) : new d();
            this.baraccidentals = [];
            this.abctune = l;
            this.baseduration = 480 * 4;
            if (l.formatting.midi && l.formatting.midi.transpose) {
                this.transpose = l.formatting.midi.transpose
            }
            if (l.formatting.midi && l.formatting.midi.program && l.formatting.midi.program.program) {
                this.midi.setInstrument(l.formatting.midi.program.program)
            } else {
                this.midi.setInstrument(this.program)
            }
            if (l.formatting.midi && l.formatting.midi.channel) {
                this.midi.setChannel(l.formatting.midi.channel)
            }
            if (l.metaText.tempo) {
                var k = 1 / 4;
                if (l.metaText.tempo.duration) {
                    k = l.metaText.tempo.duration[0]
                }
                var j = 60;
                if (l.metaText.tempo.bpm) {
                    j = l.metaText.tempo.bpm
                }
                this.qpm = j * k * 4
            }
            this.midi.setTempo(this.qpm);
            this.staffcount = 1;
            for (this.staff = 0; this.staff < this.staffcount; this.staff++) {
                this.voicecount = 1;
                for (this.voice = 0; this.voice < this.voicecount; this.voice++) {
                    this.midi.startTrack();
                    this.restart = {
                        line: 0,
                        staff: this.staff,
                        voice: this.voice,
                        pos: 0
                    };
                    this.next = null;
                    for (this.line = 0; this.line < l.lines.length; this.line++) {
                        var h = l.lines[this.line];
                        if (this.getLine().staff) {
                            this.writeABCLine()
                        }
                    }
                    this.midi.endTrack()
                }
            }
            this.midi.embed(this.parent)
        } catch (i) {
            this.parent.innerHTML = "Couldn't write midi: " + i
        }
    };
    ABCJS.midi.MidiWriter.prototype.writeABCLine = function () {
        this.staffcount = this.getLine().staff.length;
        this.voicecount = this.getStaff().voices.length;
        this.setKeySignature(this.getStaff().key);
        this.writeABCVoiceLine()
    };
    ABCJS.midi.MidiWriter.prototype.writeABCVoiceLine = function () {
        this.pos = 0;
        while (this.pos < this.getVoice().length) {
            this.writeABCElement(this.getElem());
            if (this.next) {
                this.goToMark(this.next);
                this.next = null;
                if (!this.getLine().staff) {
                    return
                }
            } else {
                this.pos++
            }
        }
    };
    ABCJS.midi.MidiWriter.prototype.writeABCElement = function (h) {
        var i;
        switch (h.el_type) {
        case "note":
            this.writeNote(h);
            break;
        case "key":
            this.setKeySignature(h);
            break;
        case "bar":
            this.handleBar(h);
            break;
        case "meter":
        case "clef":
            break;
        default:
        }
    };
    ABCJS.midi.MidiWriter.prototype.writeNote = function (m) {
        if (m.startTriplet) {
            this.multiplier = 2 / 3
        }
        var h = m.duration * this.baseduration * this.multiplier;
        if (m.pitches) {
            var l = [];
            for (var j = 0; j < m.pitches.length; j++) {
                var k = m.pitches[j];
                var n = k.pitch;
                if (k.accidental) {
                    switch (k.accidental) {
                    case "sharp":
                        this.baraccidentals[n] = 1;
                        break;
                    case "flat":
                        this.baraccidentals[n] = -1;
                        break;
                    case "natural":
                        this.baraccidentals[n] = 0;
                        break;
                    case "dblsharp":
                        this.baraccidentals[n] = 2;
                        break;
                    case "dblflat":
                        this.baraccidentals[n] = -2;
                        break
                    }
                }
                l[j] = 60 + 12 * this.extractOctave(n) + this.scale[this.extractNote(n)];
                if (this.baraccidentals[n] !== undefined) {
                    l[j] += this.baraccidentals[n]
                } else {
                    l[j] += this.accidentals[this.extractNote(n)]
                }
                l[j] += this.transpose;
                this.midi.startNote(l[j], 64, m);
                if (k.startTie) {
                    this.tieduration = h
                }
            }
            for (j = 0; j < m.pitches.length; j++) {
                var k = m.pitches[j];
                var n = k.pitch + this.transpose;
                if (k.startTie) {
                    continue
                }
                if (k.endTie) {
                    this.midi.endNote(l[j], h + this.tieduration)
                } else {
                    this.midi.endNote(l[j], h)
                }
                h = 0;
                this.tieduration = 0
            }
        } else {
            if (m.rest && m.rest.type !== "spacer") {
                this.midi.addRest(h)
            }
        }
        if (m.endTriplet) {
            this.multiplier = 1
        }
    };
    ABCJS.midi.MidiWriter.prototype.handleBar = function (l) {
        this.baraccidentals = [];
        var m = (l.type === "bar_right_repeat" || l.type === "bar_dbl_repeat");
        var k = (l.startEnding) ? true : false;
        var h = (m || k);
        var j = (l.type === "bar_left_repeat" || l.type === "bar_dbl_repeat" || l.type === "bar_thick_thin" || l.type === "bar_thin_thick" || l.type === "bar_thin_thin" || l.type === "bar_right_repeat");
        var i = null;
        if (this.isVisited()) {
            i = this.getJumpMark()
        } else {
            if (k || m) {
                if (this.visited[this.lastmark] === true) {
                    this.setJumpMark(this.getMark())
                }
            }
            if (h) {
                this.markVisited()
            }
            if (m) {
                i = this.restart;
                this.setJumpMark(this.getMark())
            }
        }
        if (j) {
            this.restart = this.getMark()
        }
        if (i && this.getMarkString(i) !== this.getMarkString()) {
            this.next = i
        }
    };
    ABCJS.midi.MidiWriter.prototype.setKeySignature = function (h) {
        this.accidentals = [0, 0, 0, 0, 0, 0, 0];
        if (this.abctune.formatting.bagpipes) {
            h.accidentals = [{
                acc: "natural",
                note: "g"
            }, {
                acc: "sharp",
                note: "f"
            }, {
                acc: "sharp",
                note: "c"
            }]
        }
        if (!h.accidentals) {
            return
        }
        window.ABCJS.parse.each(h.accidentals, function (k) {
            var l = (k.acc === "sharp") ? 1 : (k.acc === "natural") ? 0 : -1;
            var j = k.note.toLowerCase();
            var i = this.extractNote(j.charCodeAt(0) - "c".charCodeAt(0));
            this.accidentals[i] += l
        }, this)
    };
    ABCJS.midi.MidiWriter.prototype.extractNote = function (h) {
        h = h % 7;
        if (h < 0) {
            h += 7
        }
        return h
    };
    ABCJS.midi.MidiWriter.prototype.extractOctave = function (h) {
        return Math.floor(h / 7)
    }
})();
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.parse) {
    window.ABCJS.parse = {}
}
window.ABCJS.parse.clone = function (c) {
    var a = {};
    for (var b in c) {
        if (c.hasOwnProperty(b)) {
            a[b] = c[b]
        }
    }
    return a
};
window.ABCJS.parse.gsub = function (c, b, a) {
    return c.split(b).join(a)
};
window.ABCJS.parse.strip = function (a) {
    return a.replace(/^\s+/, "").replace(/\s+$/, "")
};
window.ABCJS.parse.startsWith = function (b, a) {
    return b.indexOf(a) === 0
};
window.ABCJS.parse.endsWith = function (c, a) {
    var b = c.length - a.length;
    return b >= 0 && c.lastIndexOf(a) === b
};
window.ABCJS.parse.each = function (a, d, c) {
    for (var b = 0, e = a.length; b < e; b++) {
        d.apply(c, [a[b], b])
    }
};
window.ABCJS.parse.last = function (a) {
    if (a.length === 0) {
        return null
    }
    return a[a.length - 1]
};
window.ABCJS.parse.compact = function (a) {
    var b = [];
    for (var c = 0; c < a.length; c++) {
        if (a[c]) {
            b.push(a[c])
        }
    }
    return b
};
window.ABCJS.parse.detect = function (a, c) {
    for (var b = 0; b < a.length; b++) {
        if (c(a[b])) {
            return true
        }
    }
    return false
};
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.parse) {
    window.ABCJS.parse = {}
}
window.ABCJS.parse.Parse = function () {
    var f = new window.ABCJS.data.Tune();
    var n = new window.ABCJS.parse.tokenizer();
    this.getTune = function () {
        return f
    };
    var y = {
        reset: function () {
            for (var A in this) {
                if (this.hasOwnProperty(A) && typeof this[A] !== "function") {
                    delete this[A]
                }
            }
            this.iChar = 0;
            this.key = {
                accidentals: [],
                root: "none",
                acc: "",
                mode: ""
            };
            this.meter = {
                type: "specified",
                value: [{
                    num: "4",
                    den: "4"
                }]
            };
            this.origMeter = {
                type: "specified",
                value: [{
                    num: "4",
                    den: "4"
                }]
            };
            this.hasMainTitle = false;
            this.default_length = 0.125;
            this.clef = {
                type: "treble",
                verticalPos: 0
            };
            this.next_note_duration = 0;
            this.start_new_line = true;
            this.is_in_header = true;
            this.is_in_history = false;
            this.partForNextLine = "";
            this.havent_set_length = true;
            this.voices = {};
            this.staves = [];
            this.macros = {};
            this.currBarNumber = 1;
            this.inTextBlock = false;
            this.inPsBlock = false;
            this.ignoredDecorations = [];
            this.textBlock = "";
            this.score_is_present = false;
            this.inEnding = false;
            this.inTie = false;
            this.inTieChord = {}
        }
    };
    var z = function (A) {
        if (!y.warnings) {
            y.warnings = []
        }
        y.warnings.push(A)
    };
    var c = function (B) {
        var A = window.ABCJS.parse.gsub(B, "\x12", " ");
        A = window.ABCJS.parse.gsub(A, "&", "&amp;");
        A = window.ABCJS.parse.gsub(A, "<", "&lt;");
        return window.ABCJS.parse.gsub(A, ">", "&gt;")
    };
    var x = function (E, A, D) {
        var C = A.charAt(D);
        if (C === " ") {
            C = "SPACE"
        }
        var B = c(A.substring(0, D)) + '<span style="text-decoration:underline;font-size:1.3em;font-weight:bold;">' + C + "</span>" + c(A.substring(D + 1));
        z("Music Line:" + f.getNumLines() + ":" + (D + 1) + ": " + E + ":  " + B)
    };
    var u = new window.ABCJS.parse.ParseHeader(n, x, y, f);
    this.getWarnings = function () {
        return y.warnings
    };
    var t = function (C, D) {
        if (C.charAt(D) === '"') {
            var E = n.getBrackettedSubstring(C, D, 5);
            if (!E[2]) {
                x("Missing the closing quote while parsing the chord symbol", C, D)
            }
            if (E[0] > 0 && E[1].length > 0 && E[1].charAt(0) === "^") {
                E[1] = E[1].substring(1);
                E[2] = "above"
            } else {
                if (E[0] > 0 && E[1].length > 0 && E[1].charAt(0) === "_") {
                    E[1] = E[1].substring(1);
                    E[2] = "below"
                } else {
                    if (E[0] > 0 && E[1].length > 0 && E[1].charAt(0) === "<") {
                        E[1] = E[1].substring(1);
                        E[2] = "left"
                    } else {
                        if (E[0] > 0 && E[1].length > 0 && E[1].charAt(0) === ">") {
                            E[1] = E[1].substring(1);
                            E[2] = "right"
                        } else {
                            if (E[0] > 0 && E[1].length > 0 && E[1].charAt(0) === "@") {
                                E[1] = E[1].substring(1);
                                var A = n.getFloat(E[1]);
                                if (A.digits === 0) {
                                    x("Missing first position in absolutely positioned annotation.", C, D)
                                }
                                E[1] = E[1].substring(A.digits);
                                if (E[1][0] !== ",") {
                                    x("Missing comma absolutely positioned annotation.", C, D)
                                }
                                E[1] = E[1].substring(1);
                                var F = n.getFloat(E[1]);
                                if (F.digits === 0) {
                                    x("Missing second position in absolutely positioned annotation.", C, D)
                                }
                                E[1] = E[1].substring(F.digits);
                                var B = n.skipWhiteSpace(E[1]);
                                E[1] = E[1].substring(B);
                                E[2] = null;
                                E[3] = {
                                    x: A.value,
                                    y: F.value
                                }
                            } else {
                                E[1] = E[1].replace(/([ABCDEFG])b/g, "$1?");
                                E[1] = E[1].replace(/([ABCDEFG])#/g, "$1?");
                                E[2] = "default"
                            }
                        }
                    }
                }
            }
            return E
        }
        return [0, ""]
    };
    var p = ["trill", "lowermordent", "uppermordent", "mordent", "pralltriller", "accent", "fermata", "invertedfermata", "tenuto", "0", "1", "2", "3", "4", "5", "+", "wedge", "open", "thumb", "snap", "turn", "roll", "breath", "shortphrase", "mediumphrase", "longphrase", "segno", "coda", "D.S.", "D.C.", "fine", "crescendo(", "crescendo)", "diminuendo(", "diminuendo)", "p", "pp", "f", "ff", "mf", "mp", "ppp", "pppp", "fff", "ffff", "sfz", "repeatbar", "repeatbar2", "slide", "upbow", "downbow", "/", "//", "///", "////", "trem1", "trem2", "trem3", "trem4", "turnx", "invertedturn", "invertedturnx", "trill(", "trill)", "arpeggio", "xstem", "mark", "style=normal", "style=harmonic", "style=rhythm", "style=x"];
    var s = [
        ["<", "accent"],
        [">", "accent"],
        ["tr", "trill"],
        ["<(", "crescendo("],
        ["<)", "crescendo)"],
        [">(", "diminuendo("],
        [">)", "diminuendo)"],
        ["plus", "+"],
        ["emphasis", "accent"]
    ];
    var h = function (A, C) {
        var D = y.macros[A.charAt(C)];
        if (D !== undefined) {
            if (D.charAt(0) === "!" || D.charAt(0) === "+") {
                D = D.substring(1)
            }
            if (D.charAt(D.length - 1) === "!" || D.charAt(D.length - 1) === "+") {
                D = D.substring(0, D.length - 1)
            }
            if (window.ABCJS.parse.detect(p, function (E) {
                return (D === E)
            })) {
                return [1, D]
            } else {
                if (!window.ABCJS.parse.detect(y.ignoredDecorations, function (E) {
                    return (D === E)
                })) {
                    x("Unknown macro: " + D, A, C)
                }
                return [1, ""]
            }
        }
        switch (A.charAt(C)) {
        case ".":
            return [1, "staccato"];
        case "u":
            return [1, "upbow"];
        case "v":
            return [1, "downbow"];
        case "~":
            return [1, "irishroll"];
        case "!":
        case "+":
            var B = n.getBrackettedSubstring(A, C, 5);
            if (B[1].length > 0 && (B[1].charAt(0) === "^" || B[1].charAt(0) === "_")) {
                B[1] = B[1].substring(1)
            }
            if (window.ABCJS.parse.detect(p, function (E) {
                return (B[1] === E)
            })) {
                return B
            }
            if (window.ABCJS.parse.detect(s, function (E) {
                if (B[1] === E[0]) {
                    B[1] = E[1];
                    return true
                } else {
                    return false
                }
            })) {
                return B
            }
            if (A.charAt(C) === "!" && (B[0] === 1 || A.charAt(C + B[0] - 1) !== "!")) {
                return [1, null]
            }
            x("Unknown decoration: " + B[1], A, C);
            B[1] = "";
            return B;
        case "H":
            return [1, "fermata"];
        case "J":
            return [1, "slide"];
        case "L":
            return [1, "accent"];
        case "M":
            return [1, "mordent"];
        case "O":
            return [1, "coda"];
        case "P":
            return [1, "pralltriller"];
        case "R":
            return [1, "roll"];
        case "S":
            return [1, "segno"];
        case "T":
            return [1, "trill"]
        }
        return [0, 0]
    };
    var e = function (A, B) {
        var C = B;
        while (n.isWhiteSpace(A.charAt(B))) {
            B++
        }
        return [B - C]
    };
    var r = function (C, F) {
        var D = n.getBarLine(C, F);
        if (D.len === 0) {
            return [0, ""]
        }
        if (D.warn) {
            x(D.warn, C, F);
            return [D.len, ""]
        }
        for (var B = 0; B < C.length; B++) {
            if (C.charAt(F + D.len + B) !== " ") {
                break
            }
        }
        var G = D.len;
        if (C.charAt(F + D.len + B) === "[") {
            D.len += B + 1
        }
        if (C.charAt(F + D.len) === '"' && C.charAt(F + D.len - 1) === "[") {
            var A = n.getBrackettedSubstring(C, F + D.len, 5);
            return [D.len + A[0], D.token, A[1]]
        }
        var E = n.getTokenOf(C.substring(F + D.len), "1234567890-,");
        if (E.len === 0 || E.token[0] === "-") {
            return [G, D.token]
        }
        return [D.len + E.len, D.token, E.token]
    };
    var o = function (A, C) {
        var B = {};
        var D = C;
        while (A.charAt(C) === "(" || n.isWhiteSpace(A.charAt(C))) {
            if (A.charAt(C) === "(") {
                if (C + 1 < A.length && (A.charAt(C + 1) >= "2" && A.charAt(C + 1) <= "9")) {
                    if (B.triplet !== undefined) {
                        x("Can't nest triplets", A, C)
                    } else {
                        B.triplet = A.charAt(C + 1) - "0";
                        if (C + 2 < A.length && A.charAt(C + 2) === ":") {
                            if (C + 3 < A.length && A.charAt(C + 3) === ":") {
                                if (C + 4 < A.length && (A.charAt(C + 4) >= "1" && A.charAt(C + 4) <= "9")) {
                                    B.num_notes = A.charAt(C + 4) - "0";
                                    C += 3
                                } else {
                                    x("expected number after the two colons after the triplet to mark the duration", A, C)
                                }
                            } else {
                                if (C + 3 < A.length && (A.charAt(C + 3) >= "1" && A.charAt(C + 3) <= "9")) {
                                    if (C + 4 < A.length && A.charAt(C + 4) === ":") {
                                        if (C + 5 < A.length && (A.charAt(C + 5) >= "1" && A.charAt(C + 5) <= "9")) {
                                            B.num_notes = A.charAt(C + 5) - "0";
                                            C += 4
                                        }
                                    } else {
                                        B.num_notes = B.triplet;
                                        C += 3
                                    }
                                } else {
                                    x("expected number after the triplet to mark the duration", A, C)
                                }
                            }
                        }
                    }
                    C++
                } else {
                    if (B.startSlur === undefined) {
                        B.startSlur = 1
                    } else {
                        B.startSlur++
                    }
                }
            }
            C++
        }
        B.consumed = C - D;
        return B
    };
    var m = function (B, H) {
        if (!B) {
            x("Can't add words before the first line of mulsic", B, 0);
            return
        }
        H = window.ABCJS.parse.strip(H);
        if (H.charAt(H.length - 1) !== "-") {
            H = H + " "
        }
        var G = [];
        var F = 0;
        var D = false;
        var A = function (I) {
            var J = window.ABCJS.parse.strip(H.substring(F, I));
            F = I + 1;
            if (J.length > 0) {
                if (D) {
                    J = window.ABCJS.parse.gsub(J, "~", " ")
                }
                var K = H.charAt(I);
                if (K !== "_" && K !== "-") {
                    K = " "
                }
                G.push({
                    syllable: n.translateString(J),
                    divider: K
                });
                D = false;
                return true
            }
            return false
        };
        for (var C = 0; C < H.length; C++) {
            switch (H.charAt(C)) {
            case " ":
            case "\x12":
                A(C);
                break;
            case "-":
                if (!A(C) && G.length > 0) {
                    window.ABCJS.parse.last(G).divider = "-";
                    G.push({
                        skip: true,
                        to: "next"
                    })
                }
                break;
            case "_":
                A(C);
                G.push({
                    skip: true,
                    to: "slur"
                });
                break;
            case "*":
                A(C);
                G.push({
                    skip: true,
                    to: "next"
                });
                break;
            case "|":
                A(C);
                G.push({
                    skip: true,
                    to: "bar"
                });
                break;
            case "~":
                D = true;
                break
            }
        }
        var E = false;
        window.ABCJS.parse.each(B, function (J) {
            if (G.length !== 0) {
                if (G[0].skip) {
                    switch (G[0].to) {
                    case "next":
                        if (J.el_type === "note" && J.pitches !== null && !E) {
                            G.shift()
                        }
                        break;
                    case "slur":
                        if (J.el_type === "note" && J.pitches !== null) {
                            G.shift()
                        }
                        break;
                    case "bar":
                        if (J.el_type === "bar") {
                            G.shift()
                        }
                        break
                    }
                } else {
                    if (J.el_type === "note" && J.rest === undefined && !E) {
                        var I = G.shift();
                        if (J.lyric === undefined) {
                            J.lyric = [I]
                        } else {
                            J.lyric.push(I)
                        }
                    }
                }
            }
        })
    };
    var d = function (B, H) {
        if (!B) {
            x("Can't add symbols before the first line of mulsic", B, 0);
            return
        }
        H = window.ABCJS.parse.strip(H);
        if (H.charAt(H.length - 1) !== "-") {
            H = H + " "
        }
        var G = [];
        var F = 0;
        var D = false;
        var A = function (I) {
            var J = window.ABCJS.parse.strip(H.substring(F, I));
            F = I + 1;
            if (J.length > 0) {
                if (D) {
                    J = window.ABCJS.parse.gsub(J, "~", " ")
                }
                var K = H.charAt(I);
                if (K !== "_" && K !== "-") {
                    K = " "
                }
                G.push({
                    syllable: n.translateString(J),
                    divider: K
                });
                D = false;
                return true
            }
            return false
        };
        for (var C = 0; C < H.length; C++) {
            switch (H.charAt(C)) {
            case " ":
            case "\x12":
                A(C);
                break;
            case "-":
                if (!A(C) && G.length > 0) {
                    window.ABCJS.parse.last(G).divider = "-";
                    G.push({
                        skip: true,
                        to: "next"
                    })
                }
                break;
            case "_":
                A(C);
                G.push({
                    skip: true,
                    to: "slur"
                });
                break;
            case "*":
                A(C);
                G.push({
                    skip: true,
                    to: "next"
                });
                break;
            case "|":
                A(C);
                G.push({
                    skip: true,
                    to: "bar"
                });
                break;
            case "~":
                D = true;
                break
            }
        }
        var E = false;
        window.ABCJS.parse.each(B, function (J) {
            if (G.length !== 0) {
                if (G[0].skip) {
                    switch (G[0].to) {
                    case "next":
                        if (J.el_type === "note" && J.pitches !== null && !E) {
                            G.shift()
                        }
                        break;
                    case "slur":
                        if (J.el_type === "note" && J.pitches !== null) {
                            G.shift()
                        }
                        break;
                    case "bar":
                        if (J.el_type === "bar") {
                            G.shift()
                        }
                        break
                    }
                } else {
                    if (J.el_type === "note" && J.rest === undefined && !E) {
                        var I = G.shift();
                        if (J.lyric === undefined) {
                            J.lyric = [I]
                        } else {
                            J.lyric.push(I)
                        }
                    }
                }
            }
        })
    };
    var b = function (A, B) {
        switch (A.charAt(B)) {
        case ">":
            if (B < A.length - 1 && A.charAt(B + 1) === ">") {
                return [2, 1.75, 0.25]
            } else {
                return [1, 1.5, 0.5]
            }
            break;
        case "<":
            if (B < A.length - 1 && A.charAt(B + 1) === "<") {
                return [2, 0.25, 1.75]
            } else {
                return [1, 0.5, 1.5]
            }
            break
        }
        return null
    };
    var g = function (A) {
        if (A.duration !== undefined && A.duration < 0.25) {
            A.end_beam = true
        }
        return A
    };
    var j = {
        A: 5,
        B: 6,
        C: 0,
        D: 1,
        E: 2,
        F: 3,
        G: 4,
        a: 12,
        b: 13,
        c: 7,
        d: 8,
        e: 9,
        f: 10,
        g: 11
    };
    var a = {
        x: "invisible",
        y: "spacer",
        z: "rest",
        Z: "multimeasure"
    };
    var i = function (J, G, C, A) {
        var H = function (K) {
            return (K === "octave" || K === "duration" || K === "Zduration" || K === "broken_rhythm" || K === "end_slur")
        };
        var B = "startSlur";
        var D = false;
        while (1) {
            switch (J.charAt(G)) {
            case "(":
                if (B === "startSlur") {
                    if (C.startSlur === undefined) {
                        C.startSlur = 1
                    } else {
                        C.startSlur++
                    }
                } else {
                    if (H(B)) {
                        C.endChar = G;
                        return C
                    } else {
                        return null
                    }
                }
                break;
            case ")":
                if (H(B)) {
                    if (C.endSlur === undefined) {
                        C.endSlur = 1
                    } else {
                        C.endSlur++
                    }
                } else {
                    return null
                }
                break;
            case "^":
                if (B === "startSlur") {
                    C.accidental = "sharp";
                    B = "sharp2"
                } else {
                    if (B === "sharp2") {
                        C.accidental = "dblsharp";
                        B = "pitch"
                    } else {
                        if (H(B)) {
                            C.endChar = G;
                            return C
                        } else {
                            return null
                        }
                    }
                }
                break;
            case "_":
                if (B === "startSlur") {
                    C.accidental = "flat";
                    B = "flat2"
                } else {
                    if (B === "flat2") {
                        C.accidental = "dblflat";
                        B = "pitch"
                    } else {
                        if (H(B)) {
                            C.endChar = G;
                            return C
                        } else {
                            return null
                        }
                    }
                }
                break;
            case "=":
                if (B === "startSlur") {
                    C.accidental = "natural";
                    B = "pitch"
                } else {
                    if (H(B)) {
                        C.endChar = G;
                        return C
                    } else {
                        return null
                    }
                }
                break;
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
            case "F":
            case "G":
            case "a":
            case "b":
            case "c":
            case "d":
            case "e":
            case "f":
            case "g":
                if (B === "startSlur" || B === "sharp2" || B === "flat2" || B === "pitch") {
                    C.pitch = j[J.charAt(G)];
                    B = "octave";
                    if (A && y.next_note_duration !== 0) {
                        C.duration = y.next_note_duration;
                        y.next_note_duration = 0;
                        D = true
                    } else {
                        C.duration = y.default_length
                    }
                } else {
                    if (H(B)) {
                        C.endChar = G;
                        return C
                    } else {
                        return null
                    }
                }
                break;
            case ",":
                if (B === "octave") {
                    C.pitch -= 7
                } else {
                    if (H(B)) {
                        C.endChar = G;
                        return C
                    } else {
                        return null
                    }
                }
                break;
            case "'":
                if (B === "octave") {
                    C.pitch += 7
                } else {
                    if (H(B)) {
                        C.endChar = G;
                        return C
                    } else {
                        return null
                    }
                }
                break;
            case "x":
            case "y":
            case "z":
            case "Z":
                if (B === "startSlur") {
                    C.rest = {
                        type: a[J.charAt(G)]
                    };
                    delete C.accidental;
                    delete C.startSlur;
                    delete C.startTie;
                    delete C.endSlur;
                    delete C.endTie;
                    delete C.end_beam;
                    delete C.grace_notes;
                    if (C.rest.type === "multimeasure") {
                        C.duration = 1;
                        B = "Zduration"
                    } else {
                        if (A && y.next_note_duration !== 0) {
                            C.duration = y.next_note_duration;
                            y.next_note_duration = 0;
                            D = true
                        } else {
                            C.duration = y.default_length
                        }
                        B = "duration"
                    }
                } else {
                    if (H(B)) {
                        C.endChar = G;
                        return C
                    } else {
                        return null
                    }
                }
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
            case "/":
                if (B === "octave" || B === "duration") {
                    var I = n.getFraction(J, G);
                    if (!D) {
                        C.duration = C.duration * I.value
                    }
                    C.endChar = I.index;
                    while (I.index < J.length && (n.isWhiteSpace(J.charAt(I.index)) || J.charAt(I.index) === "-")) {
                        if (J.charAt(I.index) === "-") {
                            C.startTie = {}
                        } else {
                            C = g(C)
                        }
                        I.index++
                    }
                    G = I.index - 1;
                    B = "broken_rhythm"
                } else {
                    if (B === "sharp2") {
                        C.accidental = "quartersharp";
                        B = "pitch"
                    } else {
                        if (B === "flat2") {
                            C.accidental = "quarterflat";
                            B = "pitch"
                        } else {
                            if (B === "Zduration") {
                                var F = n.getNumber(J, G);
                                C.duration = F.num;
                                C.endChar = F.index;
                                return C
                            } else {
                                return null
                            }
                        }
                    }
                }
                break;
            case "-":
                if (B === "startSlur") {
                    f.addTieToLastNote();
                    C.endTie = true
                } else {
                    if (B === "octave" || B === "duration" || B === "end_slur") {
                        C.startTie = {};
                        if (!D && A) {
                            B = "broken_rhythm"
                        } else {
                            if (n.isWhiteSpace(J.charAt(G + 1))) {
                                g(C)
                            }
                            C.endChar = G + 1;
                            return C
                        }
                    } else {
                        if (B === "broken_rhythm") {
                            C.endChar = G;
                            return C
                        } else {
                            return null
                        }
                    }
                }
                break;
            case " ":
            case "\t":
                if (H(B)) {
                    C.end_beam = true;
                    do {
                        if (J.charAt(G) === "-") {
                            C.startTie = {}
                        }
                        G++
                    } while (G < J.length && (n.isWhiteSpace(J.charAt(G)) || J.charAt(G) === "-"));
                    C.endChar = G;
                    if (!D && A && (J.charAt(G) === "<" || J.charAt(G) === ">")) {
                        G--;
                        B = "broken_rhythm"
                    } else {
                        return C
                    }
                } else {
                    return null
                }
                break;
            case ">":
            case "<":
                if (H(B)) {
                    if (A) {
                        var E = b(J, G);
                        G += E[0] - 1;
                        y.next_note_duration = E[2] * C.duration;
                        C.duration = E[1] * C.duration;
                        B = "end_slur"
                    } else {
                        C.endChar = G;
                        return C
                    }
                } else {
                    return null
                }
                break;
            default:
                if (H(B)) {
                    C.endChar = G;
                    return C
                }
                return null
            }
            G++;
            if (G === J.length) {
                if (H(B)) {
                    C.endChar = G;
                    return C
                } else {
                    return null
                }
            }
        }
        return null
    };

    function v() {
        var B = {
            startChar: -1,
            endChar: -1
        };
        if (y.partForNextLine.length) {
            B.part = y.partForNextLine
        }
        B.clef = y.currentVoice && y.staves[y.currentVoice.staffNum].clef !== undefined ? window.ABCJS.parse.clone(y.staves[y.currentVoice.staffNum].clef) : window.ABCJS.parse.clone(y.clef);
        B.key = window.ABCJS.parse.parseKeyVoice.deepCopyKey(y.key);
        window.ABCJS.parse.parseKeyVoice.addPosToKey(B.clef, B.key);
        if (y.meter !== null) {
            if (y.currentVoice) {
                window.ABCJS.parse.each(y.staves, function (C) {
                    C.meter = y.meter
                });
                B.meter = y.staves[y.currentVoice.staffNum].meter;
                y.staves[y.currentVoice.staffNum].meter = null
            } else {
                B.meter = y.meter
            }
            y.meter = null
        } else {
            if (y.currentVoice && y.staves[y.currentVoice.staffNum].meter) {
                B.meter = y.staves[y.currentVoice.staffNum].meter;
                y.staves[y.currentVoice.staffNum].meter = null
            }
        }
        if (y.currentVoice && y.currentVoice.name) {
            B.name = y.currentVoice.name
        }
        if (y.vocalfont) {
            B.vocalfont = y.vocalfont
        }
        if (y.style) {
            B.style = y.style
        }
        if (y.currentVoice) {
            var A = y.staves[y.currentVoice.staffNum];
            if (A.brace) {
                B.brace = A.brace
            }
            if (A.bracket) {
                B.bracket = A.bracket
            }
            if (A.connectBarLines) {
                B.connectBarLines = A.connectBarLines
            }
            if (A.name) {
                B.name = A.name[y.currentVoice.index]
            }
            if (A.subname) {
                B.subname = A.subname[y.currentVoice.index]
            }
            if (y.currentVoice.stem) {
                B.stem = y.currentVoice.stem
            }
            if (y.currentVoice.scale) {
                B.scale = y.currentVoice.scale
            }
            if (y.currentVoice.style) {
                B.style = y.currentVoice.style
            }
        }
        f.startNewLine(B);
        y.partForNextLine = "";
        if (y.currentVoice === undefined || (y.currentVoice.staffNum === y.staves.length - 1 && y.staves[y.currentVoice.staffNum].numVoices - 1 === y.currentVoice.index)) {
            if (y.barNumbers === 0) {
                y.barNumOnNextNote = y.currBarNumber
            }
        }
    }
    var w = function (B, D) {
        if (B.charAt(D) === "{") {
            var C = n.getBrackettedSubstring(B, D, 1, "}");
            if (!C[2]) {
                x("Missing the closing '}' while parsing grace note", B, D)
            }
            if (B[D + C[0]] === ")") {
                C[0]++;
                C[1] += ")"
            }
            var A = [];
            var F = 0;
            var G = false;
            while (F < C[1].length) {
                var H = false;
                if (C[1].charAt(F) === "/") {
                    H = true;
                    F++
                }
                var E = i(C[1], F, {}, false);
                if (E !== null) {
                    if (H) {
                        E.acciaccatura = true
                    }
                    A.push(E);
                    if (G) {
                        E.endTie = true;
                        G = false
                    }
                    if (E.startTie) {
                        G = true
                    }
                    F = E.endChar;
                    delete E.endChar
                } else {
                    if (C[1].charAt(F) === " ") {
                        if (A.length > 0) {
                            A[A.length - 1].end_beam = true
                        }
                    } else {
                        x("Unknown character '" + C[1].charAt(F) + "' while parsing grace note", B, D)
                    }
                    F++
                }
            }
            if (A.length) {
                return [C[0], A]
            }
        }
        return [0]
    };
    var q = "ABCDEFGabcdefgxyzZ[]|^_{";
    var l = function (K) {
        u.resolveTempo();
        y.is_in_header = false;
        var R = 0;
        var Q = y.iChar;
        while (n.isWhiteSpace(K.charAt(R)) && R < K.length) {
            R++
        }
        if (R === K.length || K.charAt(R) === "%") {
            return
        }
        var U = y.start_new_line;
        if (y.continueall === undefined) {
            y.start_new_line = true
        } else {
            y.start_new_line = false
        }
        var H = 0;
        var N = u.letter_to_body_header(K, R);
        if (N[0] > 0) {
            R += N[0]
        }
        var C = {};
        while (R < K.length) {
            var D = R;
            if (K.charAt(R) === "%") {
                break
            }
            var B = u.letter_to_inline_header(K, R);
            if (B[0] > 0) {
                R += B[0]
            } else {
                if (U) {
                    v();
                    U = false
                }
                var W;
                while (1) {
                    W = n.eatWhiteSpace(K, R);
                    if (W > 0) {
                        R += W
                    }
                    if (R > 0 && K.charAt(R - 1) === "\x12") {
                        W = u.letter_to_body_header(K, R);
                        if (W[0] > 0) {
                            R = W[0];
                            y.start_new_line = false
                        }
                    }
                    W = e(K, R);
                    if (W[0] > 0) {
                        R += W[0]
                    }
                    W = t(K, R);
                    if (W[0] > 0) {
                        if (!C.chord) {
                            C.chord = []
                        }
                        var G = n.translateString(W[1]);
                        G = G.replace(/;/g, "\n");
                        var F = false;
                        for (var L = 0; L < C.chord.length; L++) {
                            if (C.chord[L].position === W[2]) {
                                F = true;
                                C.chord[L].name += "\n" + G
                            }
                        }
                        if (F === false) {
                            if (W[2] === null && W[3]) {
                                C.chord.push({
                                    name: G,
                                    rel_position: W[3]
                                })
                            } else {
                                C.chord.push({
                                    name: G,
                                    position: W[2]
                                })
                            }
                        }
                        R += W[0];
                        var M = n.skipWhiteSpace(K.substring(R));
                        if (M > 0) {
                            C.force_end_beam_last = true
                        }
                        R += M
                    } else {
                        if (q.indexOf(K.charAt(R)) === -1) {
                            W = h(K, R)
                        } else {
                            W = [0]
                        }
                        if (W[0] > 0) {
                            if (W[1] === null) {
                                if (R + 1 < K.length) {
                                    v()
                                }
                            } else {
                                if (W[1].length > 0) {
                                    if (C.decoration === undefined) {
                                        C.decoration = []
                                    }
                                    C.decoration.push(W[1])
                                }
                            }
                            R += W[0]
                        } else {
                            W = w(K, R);
                            if (W[0] > 0) {
                                C.gracenotes = W[1];
                                R += W[0]
                            } else {
                                break
                            }
                        }
                    }
                }
                W = r(K, R);
                if (W[0] > 0) {
                    if (C.gracenotes !== undefined) {
                        C.rest = {
                            type: "spacer"
                        };
                        C.duration = 0.125;
                        f.appendElement("note", Q + R, Q + R + W[0], C);
                        y.measureNotEmpty = true;
                        C = {}
                    }
                    var T = {
                        type: W[1]
                    };
                    if (T.type.length === 0) {
                        x("Unknown bar type", K, R)
                    } else {
                        if (y.inEnding && T.type !== "bar_thin") {
                            T.endEnding = true;
                            y.inEnding = false
                        }
                        if (W[2]) {
                            T.startEnding = W[2];
                            if (y.inEnding) {
                                T.endEnding = true
                            }
                            y.inEnding = true
                        }
                        if (C.decoration !== undefined) {
                            T.decoration = C.decoration
                        }
                        if (C.chord !== undefined) {
                            T.chord = C.chord
                        }
                        if (T.startEnding && y.barFirstEndingNum === undefined) {
                            y.barFirstEndingNum = y.currBarNumber
                        } else {
                            if (T.startEnding && T.endEnding && y.barFirstEndingNum) {
                                y.currBarNumber = y.barFirstEndingNum
                            } else {
                                if (T.endEnding) {
                                    y.barFirstEndingNum = undefined
                                }
                            }
                        }
                        if (T.type !== "bar_invisible" && y.measureNotEmpty) {
                            y.currBarNumber++;
                            if (y.barNumbers && y.currBarNumber % y.barNumbers === 0) {
                                y.barNumOnNextNote = y.currBarNumber
                            }
                        }
                        f.appendElement("bar", Q + R, Q + R + W[0], T);
                        y.measureNotEmpty = false;
                        C = {}
                    }
                    R += W[0]
                } else {
                    if (K[R] === "&") {
                        x("Overlay not yet supported", K, R);
                        R++
                    } else {
                        W = o(K, R);
                        if (W.consumed > 0) {
                            if (W.startSlur !== undefined) {
                                C.startSlur = W.startSlur
                            }
                            if (W.triplet !== undefined) {
                                if (H > 0) {
                                    x("Can't nest triplets", K, R)
                                } else {
                                    C.startTriplet = W.triplet;
                                    H = W.num_notes === undefined ? W.triplet : W.num_notes
                                }
                            }
                            R += W.consumed
                        }
                        if (K.charAt(R) === "[") {
                            R++;
                            var A = null;
                            var P = false;
                            while (!P) {
                                var J = i(K, R, {}, false);
                                if (J !== null) {
                                    if (J.end_beam) {
                                        C.end_beam = true;
                                        delete J.end_beam
                                    }
                                    if (C.pitches === undefined) {
                                        C.duration = J.duration;
                                        C.pitches = [J]
                                    } else {
                                        C.pitches.push(J)
                                    }
                                    delete J.duration;
                                    if (y.inTieChord[C.pitches.length]) {
                                        J.endTie = true;
                                        y.inTieChord[C.pitches.length] = undefined
                                    }
                                    if (J.startTie) {
                                        y.inTieChord[C.pitches.length] = true
                                    }
                                    R = J.endChar;
                                    delete J.endChar
                                } else {
                                    if (K.charAt(R) === " ") {
                                        x("Spaces are not allowed in chords", K, R);
                                        R++
                                    } else {
                                        if (R < K.length && K.charAt(R) === "]") {
                                            R++;
                                            if (y.next_note_duration !== 0) {
                                                C.duration = C.duration * y.next_note_duration;
                                                y.next_note_duration = 0
                                            }
                                            if (y.inTie) {
                                                window.ABCJS.parse.each(C.pitches, function (X) {
                                                    X.endTie = true
                                                });
                                                y.inTie = false
                                            }
                                            if (H > 0) {
                                                H--;
                                                if (H === 0) {
                                                    C.endTriplet = true
                                                }
                                            }
                                            var I = false;
                                            while (R < K.length && !I) {
                                                switch (K.charAt(R)) {
                                                case " ":
                                                case "\t":
                                                    g(C);
                                                    break;
                                                case ")":
                                                    if (C.endSlur === undefined) {
                                                        C.endSlur = 1
                                                    } else {
                                                        C.endSlur++
                                                    }
                                                    break;
                                                case "-":
                                                    window.ABCJS.parse.each(C.pitches, function (X) {
                                                        X.startTie = {}
                                                    });
                                                    y.inTie = true;
                                                    break;
                                                case ">":
                                                case "<":
                                                    var V = b(K, R);
                                                    R += V[0] - 1;
                                                    y.next_note_duration = V[2];
                                                    A = V[1];
                                                    break;
                                                case "1":
                                                case "2":
                                                case "3":
                                                case "4":
                                                case "5":
                                                case "6":
                                                case "7":
                                                case "8":
                                                case "9":
                                                case "/":
                                                    var E = n.getFraction(K, R);
                                                    A = E.value;
                                                    R = E.index;
                                                    I = true;
                                                    break;
                                                default:
                                                    I = true;
                                                    break
                                                }
                                                if (!I) {
                                                    R++
                                                }
                                            }
                                        } else {
                                            x("Expected ']' to end the chords", K, R)
                                        }
                                        if (C.pitches !== undefined) {
                                            if (A !== null) {
                                                C.duration = C.duration * A
                                            }
                                            if (y.barNumOnNextNote) {
                                                C.barNumber = y.barNumOnNextNote;
                                                y.barNumOnNextNote = null
                                            }
                                            f.appendElement("note", Q + R, Q + R, C);
                                            y.measureNotEmpty = true;
                                            C = {}
                                        }
                                        P = true
                                    }
                                }
                            }
                        } else {
                            var O = {};
                            var S = i(K, R, O, true);
                            if (O.endTie !== undefined) {
                                y.inTie = true
                            }
                            if (S !== null) {
                                if (S.pitch !== undefined) {
                                    C.pitches = [{}];
                                    if (S.accidental !== undefined) {
                                        C.pitches[0].accidental = S.accidental
                                    }
                                    C.pitches[0].pitch = S.pitch;
                                    if (S.endSlur !== undefined) {
                                        C.pitches[0].endSlur = S.endSlur
                                    }
                                    if (S.endTie !== undefined) {
                                        C.pitches[0].endTie = S.endTie
                                    }
                                    if (S.startSlur !== undefined) {
                                        C.pitches[0].startSlur = S.startSlur
                                    }
                                    if (C.startSlur !== undefined) {
                                        C.pitches[0].startSlur = C.startSlur
                                    }
                                    if (S.startTie !== undefined) {
                                        C.pitches[0].startTie = S.startTie
                                    }
                                    if (C.startTie !== undefined) {
                                        C.pitches[0].startTie = C.startTie
                                    }
                                } else {
                                    C.rest = S.rest;
                                    if (S.endSlur !== undefined) {
                                        C.endSlur = S.endSlur
                                    }
                                    if (S.endTie !== undefined) {
                                        C.rest.endTie = S.endTie
                                    }
                                    if (S.startSlur !== undefined) {
                                        C.startSlur = S.startSlur
                                    }
                                    if (S.startTie !== undefined) {
                                        C.rest.startTie = S.startTie
                                    }
                                    if (C.startTie !== undefined) {
                                        C.rest.startTie = C.startTie
                                    }
                                }
                                if (S.chord !== undefined) {
                                    C.chord = S.chord
                                }
                                if (S.duration !== undefined) {
                                    C.duration = S.duration
                                }
                                if (S.decoration !== undefined) {
                                    C.decoration = S.decoration
                                }
                                if (S.graceNotes !== undefined) {
                                    C.graceNotes = S.graceNotes
                                }
                                delete C.startSlur;
                                if (y.inTie) {
                                    if (C.pitches !== undefined) {
                                        C.pitches[0].endTie = true
                                    } else {
                                        C.rest.endTie = true
                                    }
                                    y.inTie = false
                                }
                                if (S.startTie || C.startTie) {
                                    y.inTie = true
                                }
                                R = S.endChar;
                                if (H > 0) {
                                    H--;
                                    if (H === 0) {
                                        C.endTriplet = true
                                    }
                                }
                                if (S.end_beam) {
                                    g(C)
                                }
                                if (y.barNumOnNextNote) {
                                    C.barNumber = y.barNumOnNextNote;
                                    y.barNumOnNextNote = null
                                }
                                f.appendElement("note", Q + D, Q + R, C);
                                y.measureNotEmpty = true;
                                C = {}
                            }
                        }
                        if (R === D) {
                            if (K.charAt(R) !== " " && K.charAt(R) !== "`") {
                                x("Unknown character ignored", K, R)
                            }
                            R++
                        }
                    }
                }
            }
        }
    };
    var k = function (A) {
        var B = u.parseHeader(A);
        if (B.regular) {
            l(B.str)
        }
        if (B.newline && y.continueall === undefined) {
            v()
        }
        if (B.words) {
            m(f.getCurrentVoice(), A.substring(2))
        }
        if (B.symbols) {
            d(f.getCurrentVoice(), A.substring(2))
        }
        if (B.recurse) {
            k(B.str)
        }
    };
    this.parse = function (G, E) {
        f.reset();
        if (E && E.print) {
            f.media = "print"
        }
        y.reset();
        G = window.ABCJS.parse.gsub(G, "\r\n", "\n");
        G = window.ABCJS.parse.gsub(G, "\r", "\n");
        G += "\n";
        G = G.replace(/\n\\.*\n/g, "\n");
        var C = function (J, L, M) {
            var I = "                                                                                                                                                                                                     ";
            var K = M ? I.substring(0, M.length) : "";
            return L + " \x12" + K
        };
        G = G.replace(/\\([ \t]*)(%.*)*\n/g, C);
        var B = G.split("\n");
        if (window.ABCJS.parse.last(B).length === 0) {
            B.pop()
        }
        try {
            window.ABCJS.parse.each(B, function (I) {
                if (E) {
                    if (E.header_only && y.is_in_header === false) {
                        throw "normal_abort"
                    }
                    if (E.stop_on_warning && y.warnings) {
                        throw "normal_abort"
                    }
                }
                if (y.is_in_history) {
                    if (I.charAt(1) === ":") {
                        y.is_in_history = false;
                        k(I)
                    } else {
                        f.addMetaText("history", n.translateString(n.stripComment(I)))
                    }
                } else {
                    if (y.inTextBlock) {
                        if (window.ABCJS.parse.startsWith(I, "%%endtext")) {
                            f.addText(y.textBlock);
                            y.inTextBlock = false
                        } else {
                            if (window.ABCJS.parse.startsWith(I, "%%")) {
                                y.textBlock += " " + I.substring(2)
                            } else {
                                y.textBlock += " " + I
                            }
                        }
                    } else {
                        if (y.inPsBlock) {
                            if (window.ABCJS.parse.startsWith(I, "%%endps")) {
                                y.inPsBlock = false
                            } else {
                                y.textBlock += " " + I
                            }
                        } else {
                            k(I)
                        }
                    }
                }
                y.iChar += I.length + 1
            });
            var H = 11 * 72;
            var D = 8.5 * 72;
            switch (y.papersize) {
            case "legal":
                H = 14 * 72;
                D = 8.5 * 72;
                break;
            case "A4":
                H = 11.7 * 72;
                D = 8.3 * 72;
                break
            }
            if (y.landscape) {
                var A = H;
                H = D;
                D = A
            }
            f.cleanUp(D, H, y.barsperstaff, y.staffnonote)
        } catch (F) {
            if (F !== "normal_abort") {
                throw F
            }
        }
    }
};
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.parse) {
    window.ABCJS.parse = {}
}
window.ABCJS.parse.parseDirective = {};
(function () {
    var b;
    var d;
    var a;
    var c;
    window.ABCJS.parse.parseDirective.initialize = function (h, f, g, e) {
        b = h;
        d = f;
        a = g;
        c = e
    };
    window.ABCJS.parse.parseDirective.parseFontChangeLine = function (g) {
        var e = g.split("$");
        if (e.length > 1 && a.setfont) {
            var h = [{
                text: e[0]
            }];
            for (var f = 1; f < e.length; f++) {
                if (e[f].charAt(0) === "0") {
                    h.push({
                        text: e[f].substring(1)
                    })
                } else {
                    if (e[f].charAt(0) === "1" && a.setfont[1]) {
                        h.push({
                            font: a.setfont[1],
                            text: e[f].substring(1)
                        })
                    } else {
                        if (e[f].charAt(0) === "2" && a.setfont[2]) {
                            h.push({
                                font: a.setfont[2],
                                text: e[f].substring(1)
                            })
                        } else {
                            if (e[f].charAt(0) === "3" && a.setfont[3]) {
                                h.push({
                                    font: a.setfont[3],
                                    text: e[f].substring(1)
                                })
                            } else {
                                if (e[f].charAt(0) === "4" && a.setfont[4]) {
                                    h.push({
                                        font: a.setfont[4],
                                        text: e[f].substring(1)
                                    })
                                } else {
                                    h[h.length - 1].text += "$" + e[f]
                                }
                            }
                        }
                    }
                }
            }
            if (h.length > 1) {
                return h
            }
        }
        return g
    };
    window.ABCJS.parse.parseDirective.addDirective = function (M) {
        var V = function (t, ag) {
            var p = b.getMeasurement(ag);
            if (p.used === 0 || ag.length !== 0) {
                return {
                    error: 'Directive "' + t + '" requires a measurement as a parameter.'
                }
            }
            return p.value
        };
        var R = function (t, ag) {
            var p = b.getMeasurement(ag);
            if (p.used === 0 || ag.length !== 0) {
                return 'Directive "' + t + '" requires a measurement as a parameter.'
            }
            c.formatting[t] = p.value;
            return null
        };
        var B = function (ah) {
            var p = {};
            var t = window.ABCJS.parse.last(ah);
            if (t.type === "number") {
                p.size = parseInt(t.token);
                ah.pop()
            }
            if (ah.length > 0) {
                var ag = "";
                window.ABCJS.parse.each(ah, function (ai) {
                    if (ai.token !== "-") {
                        if (ag.length > 0) {
                            ag += " "
                        }
                        ag += ai.token
                    }
                });
                p.font = ag
            }
            return p
        };
        var k = function (p, t) {
            if (t.length === 0) {
                return 'Directive "' + p + '" requires a font as a parameter.'
            }
            a[p] = B(t);
            return null
        };
        var q = function (p, t) {
            if (t.length === 0) {
                return 'Directive "' + p + '" requires a font as a parameter.'
            }
            c.formatting[p] = B(t);
            return null
        };
        var g = function (ah, ai, aj, ag, p) {
            if (aj.length !== 1 || aj[0].type !== "number") {
                return 'Directive "' + ai + '" requires a number as a parameter.'
            }
            var t = aj[0].intt;
            if (ag !== undefined && t < ag) {
                return 'Directive "' + ai + '" requires a number greater than or equal to ' + ag + " as a parameter."
            }
            if (p !== undefined && t > p) {
                return 'Directive "' + ai + '" requires a number less than or equal to ' + p + " as a parameter."
            }
            a[ah] = t;
            return null
        };
        var E = function (p, t, ag) {
            var ah = g(p, t, ag, 0, 1);
            if (ah !== null) {
                return ah
            }
            a[p] = (a[p] === 1);
            return null
        };
        var K = b.tokenize(M, 0, M.length);
        if (K.length === 0 || K[0].type !== "alpha") {
            return null
        }
        var f = M.substring(M.indexOf(K[0].token) + K[0].token.length);
        f = b.stripComment(f);
        var Z = K.shift().token.toLowerCase();
        var ac;
        var j = "";
        switch (Z) {
        case "bagpipes":
            c.formatting.bagpipes = true;
            break;
        case "landscape":
            a.landscape = true;
            break;
        case "papersize":
            a.papersize = f;
            break;
        case "slurgraces":
            c.formatting.slurgraces = true;
            break;
        case "stretchlast":
            c.formatting.stretchlast = true;
            break;
        case "titlecaps":
            a.titlecaps = true;
            break;
        case "titleleft":
            c.formatting.titleleft = true;
            break;
        case "measurebox":
            c.formatting.measurebox = true;
            break;
        case "botmargin":
        case "botspace":
        case "composerspace":
        case "indent":
        case "leftmargin":
        case "linesep":
        case "musicspace":
        case "partsspace":
        case "pageheight":
        case "pagewidth":
        case "rightmargin":
        case "staffsep":
        case "staffwidth":
        case "subtitlespace":
        case "sysstaffsep":
        case "systemsep":
        case "textspace":
        case "titlespace":
        case "topmargin":
        case "topspace":
        case "vocalspace":
        case "wordsspace":
            return R(Z, K);
        case "vskip":
            var i = V(Z, K);
            if (i.error) {
                return i.error
            }
            c.addSpacing(i);
            return null;
        case "scale":
            j = "";
            window.ABCJS.parse.each(K, function (p) {
                j += p.token
            });
            ac = parseFloat(j);
            if (isNaN(ac) || ac === 0) {
                return 'Directive "' + Z + '" requires a number as a parameter.'
            }
            c.formatting.scale = ac;
            break;
        case "sep":
            if (K.length === 0) {
                c.addSeparator()
            } else {
                var Q = b.getMeasurement(K);
                if (Q.used === 0) {
                    return 'Directive "' + Z + '" requires 3 numbers: space above, space below, length of line'
                }
                var J = Q.value;
                Q = b.getMeasurement(K);
                if (Q.used === 0) {
                    return 'Directive "' + Z + '" requires 3 numbers: space above, space below, length of line'
                }
                var af = Q.value;
                Q = b.getMeasurement(K);
                if (Q.used === 0 || K.length !== 0) {
                    return 'Directive "' + Z + '" requires 3 numbers: space above, space below, length of line'
                }
                var A = Q.value;
                c.addSeparator(J, af, A)
            }
            break;
        case "barsperstaff":
            j = g("barsperstaff", Z, K);
            if (j !== null) {
                return j
            }
            break;
        case "staffnonote":
            j = E("staffnonote", Z, K);
            if (j !== null) {
                return j
            }
            break;
        case "printtempo":
            j = E("printTempo", Z, K);
            if (j !== null) {
                return j
            }
            break;
        case "measurenb":
        case "barnumbers":
            j = g("barNumbers", Z, K);
            if (j !== null) {
                return j
            }
            break;
        case "begintext":
            a.inTextBlock = true;
            break;
        case "continueall":
            a.continueall = true;
            break;
        case "beginps":
            a.inPsBlock = true;
            d("Postscript ignored", M, 0);
            break;
        case "deco":
            if (f.length > 0) {
                a.ignoredDecorations.push(f.substring(0, f.indexOf(" ")))
            }
            d("Decoration redefinition ignored", M, 0);
            break;
        case "text":
            var W = b.translateString(f);
            c.addText(window.ABCJS.parse.parseDirective.parseFontChangeLine(W));
            break;
        case "center":
            var e = b.translateString(f);
            c.addCentered(window.ABCJS.parse.parseDirective.parseFontChangeLine(e));
            break;
        case "font":
            break;
        case "setfont":
            var y = b.tokenize(f, 0, f.length);
            var G = false;
            if (y.length >= 4) {
                if (y[0].token === "-" && y[1].type === "number") {
                    var h = parseInt(y[1].token);
                    if (h >= 1 && h <= 4) {
                        if (!a.setfont) {
                            a.setfont = []
                        }
                        var D = y.pop();
                        if (D.type === "number") {
                            D = parseInt(D.token);
                            var u = "";
                            for (var w = 2; w < y.length; w++) {
                                u += y[w].token
                            }
                            a.setfont[h] = {
                                font: u,
                                size: D
                            };
                            G = true
                        }
                    }
                }
            }
            if (!G) {
                return "Bad parameters: " + Z
            }
            break;
        case "gchordfont":
        case "partsfont":
        case "vocalfont":
        case "textfont":
            return k(Z, K);
        case "barlabelfont":
        case "barnumberfont":
        case "composerfont":
        case "subtitlefont":
        case "tempofont":
        case "titlefont":
        case "voicefont":
            return q(Z, K);
        case "barnumfont":
            return q("barnumberfont", K);
        case "staves":
        case "score":
            a.score_is_present = true;
            var ae = function (aj, ag, ai, ah, t) {
                if (ag || a.staves.length === 0) {
                    a.staves.push({
                        index: a.staves.length,
                        numVoices: 0
                    })
                }
                var p = window.ABCJS.parse.last(a.staves);
                if (ai !== undefined) {
                    p.bracket = ai
                }
                if (ah !== undefined) {
                    p.brace = ah
                }
                if (t) {
                    p.connectBarLines = "end"
                }
                if (a.voices[aj] === undefined) {
                    a.voices[aj] = {
                        staffNum: p.index,
                        index: p.numVoices
                    };
                    p.numVoices++
                }
            };
            var O = false;
            var Y = false;
            var n = false;
            var P = false;
            var l = false;
            var o = false;
            var m = false;
            var s;
            var ad = function () {
                m = true;
                if (s) {
                    var p = "start";
                    if (s.staffNum > 0) {
                        if (a.staves[s.staffNum - 1].connectBarLines === "start" || a.staves[s.staffNum - 1].connectBarLines === "continue") {
                            p = "continue"
                        }
                    }
                    a.staves[s.staffNum].connectBarLines = p
                }
            };
            while (K.length) {
                var T = K.shift();
                switch (T.token) {
                case "(":
                    if (O) {
                        d("Can't nest parenthesis in %%score", M, T.start)
                    } else {
                        O = true;
                        P = true
                    }
                    break;
                case ")":
                    if (!O || P) {
                        d("Unexpected close parenthesis in %%score", M, T.start)
                    } else {
                        O = false
                    }
                    break;
                case "[":
                    if (Y) {
                        d("Can't nest brackets in %%score", M, T.start)
                    } else {
                        Y = true;
                        l = true
                    }
                    break;
                case "]":
                    if (!Y || l) {
                        d("Unexpected close bracket in %%score", M, T.start)
                    } else {
                        Y = false;
                        a.staves[s.staffNum].bracket = "end"
                    }
                    break;
                case "{":
                    if (n) {
                        d("Can't nest braces in %%score", M, T.start)
                    } else {
                        n = true;
                        o = true
                    }
                    break;
                case "}":
                    if (!n || o) {
                        d("Unexpected close brace in %%score", M, T.start)
                    } else {
                        n = false;
                        a.staves[s.staffNum].brace = "end"
                    }
                    break;
                case "|":
                    ad();
                    break;
                default:
                    var C = "";
                    while (T.type === "alpha" || T.type === "number") {
                        C += T.token;
                        if (T.continueId) {
                            T = K.shift()
                        } else {
                            break
                        }
                    }
                    var I = !O || P;
                    var L = l ? "start" : Y ? "continue" : undefined;
                    var z = o ? "start" : n ? "continue" : undefined;
                    ae(C, I, L, z, m);
                    P = false;
                    l = false;
                    o = false;
                    m = false;
                    s = a.voices[C];
                    if (Z === "staves") {
                        ad()
                    }
                    break
                }
            }
            break;
        case "newpage":
            var v = b.getInt(f);
            c.addNewPage(v.digits === 0 ? -1 : v.value);
            break;
        case "abc-copyright":
        case "abc-creator":
        case "abc-version":
        case "abc-charset":
        case "abc-edited-by":
            c.addMetaText(Z, f);
            break;
        case "header":
        case "footer":
            var S = b.getMeat(f, 0, f.length);
            S = f.substring(S.start, S.end);
            if (S.charAt(0) === '"' && S.charAt(S.length - 1) === '"') {
                S = S.substring(1, S.length - 2)
            }
            var F = S.split("\t");
            var r = {};
            if (F.length === 1) {
                r = {
                    left: "",
                    center: F[0],
                    right: ""
                }
            } else {
                if (F.length === 2) {
                    r = {
                        left: F[0],
                        center: F[1],
                        right: ""
                    }
                } else {
                    r = {
                        left: F[0],
                        center: F[1],
                        right: F[2]
                    }
                }
            }
            if (F.length > 3) {
                d("Too many tabs in " + Z + ": " + F.length + " found.", f, 0)
            }
            c.addMetaTextObj(Z, r);
            break;
        case "midi":
            var X = b.tokenize(f, 0, f.length);
            if (X.length > 0 && X[0].token === "=") {
                X.shift()
            }
            if (X.length === 0) {
                d("Expected midi command", f, 0)
            } else {
                var x = function (ag) {
                    if (ag.length > 0) {
                        var ah = ag.shift();
                        var ai = ah.token;
                        if (ah.type === "number") {
                            ai = ah.intt
                        }
                        return ai
                    } else {
                        return null
                    }
                };
                if (c.formatting[Z] === undefined) {
                    c.formatting[Z] = {}
                }
                var H = X.shift().token;
                var N = true;
                if (H === "program") {
                    var ab = x(X);
                    if (ab) {
                        var aa = x(X);
                        if (aa) {
                            N = {
                                channel: ab,
                                program: aa
                            }
                        } else {
                            N = {
                                program: ab
                            }
                        }
                    }
                } else {
                    var U = x(X);
                    if (U !== null) {
                        N = U
                    }
                }
                c.formatting[Z][H] = N
            }
            break;
        case "playtempo":
        case "auquality":
        case "continuous":
        case "nobarcheck":
            c.formatting[Z] = f;
            break;
        default:
            return "Unknown directive: " + Z
        }
        return null
    }
})();
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.parse) {
    window.ABCJS.parse = {}
}
window.ABCJS.parse.ParseHeader = function (c, e, a, d) {
    window.ABCJS.parse.parseKeyVoice.initialize(c, e, a, d);
    window.ABCJS.parse.parseDirective.initialize(c, e, a, d);
    this.setTitle = function (f) {
        if (a.hasMainTitle) {
            d.addSubtitle(c.translateString(c.stripComment(f)))
        } else {
            d.addMetaText("title", c.translateString(c.theReverser(c.stripComment(f))));
            a.hasMainTitle = true
        }
    };
    this.setMeter = function (n) {
        n = c.stripComment(n);
        if (n === "C") {
            if (a.havent_set_length === true) {
                a.default_length = 0.125
            }
            return {
                type: "common_time"
            }
        } else {
            if (n === "C|") {
                if (a.havent_set_length === true) {
                    a.default_length = 0.125
                }
                return {
                    type: "cut_time"
                }
            } else {
                if (n === "o") {
                    if (a.havent_set_length === true) {
                        a.default_length = 0.125
                    }
                    return {
                        type: "tempus_perfectum"
                    }
                } else {
                    if (n === "c") {
                        if (a.havent_set_length === true) {
                            a.default_length = 0.125
                        }
                        return {
                            type: "tempus_imperfectum"
                        }
                    } else {
                        if (n === "o.") {
                            if (a.havent_set_length === true) {
                                a.default_length = 0.125
                            }
                            return {
                                type: "tempus_perfectum_prolatio"
                            }
                        } else {
                            if (n === "c.") {
                                if (a.havent_set_length === true) {
                                    a.default_length = 0.125
                                }
                                return {
                                    type: "tempus_imperfectum_prolatio"
                                }
                            } else {
                                if (n.length === 0 || n.toLowerCase() === "none") {
                                    if (a.havent_set_length === true) {
                                        a.default_length = 0.125
                                    }
                                    return null
                                } else {
                                    var k = c.tokenize(n, 0, n.length);
                                    try {
                                        var j = function () {
                                            var p = {
                                                value: 0,
                                                num: ""
                                            };
                                            var o = k.shift();
                                            if (o.token === "(") {
                                                o = k.shift()
                                            }
                                            while (1) {
                                                if (o.type !== "number") {
                                                    throw "Expected top number of meter"
                                                }
                                                p.value += parseInt(o.token);
                                                p.num += o.token;
                                                if (k.length === 0 || k[0].token === "/") {
                                                    return p
                                                }
                                                o = k.shift();
                                                if (o.token === ")") {
                                                    if (k.length === 0 || k[0].token === "/") {
                                                        return p
                                                    }
                                                    throw "Unexpected paren in meter"
                                                }
                                                if (o.token !== "." && o.token !== "+") {
                                                    throw "Expected top number of meter"
                                                }
                                                p.num += o.token;
                                                if (k.length === 0) {
                                                    throw "Expected top number of meter"
                                                }
                                                o = k.shift()
                                            }
                                            return p
                                        };
                                        var f = function () {
                                            var p = j();
                                            if (k.length === 0) {
                                                return p
                                            }
                                            var o = k.shift();
                                            if (o.token !== "/") {
                                                throw "Expected slash in meter"
                                            }
                                            o = k.shift();
                                            if (o.type !== "number") {
                                                throw "Expected bottom number of meter"
                                            }
                                            p.den = o.token;
                                            p.value = p.value / parseInt(p.den);
                                            return p
                                        };
                                        if (k.length === 0) {
                                            throw "Expected meter definition in M: line"
                                        }
                                        var g = {
                                            type: "specified",
                                            value: []
                                        };
                                        var l = 0;
                                        while (1) {
                                            var i = f();
                                            l += i.value;
                                            var m = {
                                                num: i.num
                                            };
                                            if (i.den !== undefined) {
                                                m.den = i.den
                                            }
                                            g.value.push(m);
                                            if (k.length === 0) {
                                                break
                                            }
                                        }
                                        if (a.havent_set_length === true) {
                                            a.default_length = l < 0.75 ? 0.0625 : 0.125
                                        }
                                        return g
                                    } catch (h) {
                                        e(h, n, 0)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.calcTempo = function (f) {
        var h = 1 / 4;
        if (a.meter && a.meter.type === "specified") {
            h = 1 / parseInt(a.meter.value[0].den)
        } else {
            if (a.origMeter && a.origMeter.type === "specified") {
                h = 1 / parseInt(a.origMeter.value[0].den)
            }
        }
        for (var g = 0; g < f.duration; g++) {
            f.duration[g] = h * f.duration[g]
        }
        return f
    };
    this.resolveTempo = function () {
        if (a.tempo) {
            this.calcTempo(a.tempo);
            d.metaText.tempo = a.tempo;
            delete a.tempo
        }
    };
    this.addUserDefinition = function (g, l, f) {
        var h = g.indexOf("=", l);
        if (h === -1) {
            e("Need an = in a macro definition", g, l);
            return
        }
        var j = window.ABCJS.parse.strip(g.substring(l, h));
        var k = window.ABCJS.parse.strip(g.substring(h + 1));
        if (j.length !== 1) {
            e("Macro definitions can only be one character", g, l);
            return
        }
        var i = "HIJKLMNOPQRSTUVWXYhijklmnopqrstuvw~";
        if (i.indexOf(j) === -1) {
            e("Macro definitions must be H-Y, h-w, or tilde", g, l);
            return
        }
        if (k.length === 0) {
            e("Missing macro definition", g, l);
            return
        }
        if (a.macros === undefined) {
            a.macros = {}
        }
        a.macros[j] = k
    };
    this.setDefaultLength = function (h, l, g) {
        var f = window.ABCJS.parse.gsub(h.substring(l, g), " ", "");
        var k = f.split("/");
        if (k.length === 2) {
            var j = parseInt(k[0]);
            var i = parseInt(k[1]);
            if (i > 0) {
                a.default_length = j / i;
                a.havent_set_length = false
            }
        }
    };
    this.setTempo = function (o, f, i) {
        try {
            var l = c.tokenize(o, f, i);
            if (l.length === 0) {
                throw "Missing parameter in Q: field"
            }
            var j = {};
            var n = true;
            var h = l.shift();
            if (h.type === "quote") {
                j.preString = h.token;
                h = l.shift();
                if (l.length === 0) {
                    return {
                        type: "immediate",
                        tempo: j
                    }
                }
            }
            if (h.type === "alpha" && h.token === "C") {
                if (l.length === 0) {
                    throw "Missing tempo after C in Q: field"
                }
                h = l.shift();
                if (h.type === "punct" && h.token === "=") {
                    if (l.length === 0) {
                        throw "Missing tempo after = in Q: field"
                    }
                    h = l.shift();
                    if (h.type !== "number") {
                        throw "Expected number after = in Q: field"
                    }
                    j.duration = [1];
                    j.bpm = parseInt(h.token)
                } else {
                    if (h.type === "number") {
                        j.duration = [parseInt(h.token)];
                        if (l.length === 0) {
                            throw "Missing = after duration in Q: field"
                        }
                        h = l.shift();
                        if (h.type !== "punct" || h.token !== "=") {
                            throw "Expected = after duration in Q: field"
                        }
                        if (l.length === 0) {
                            throw "Missing tempo after = in Q: field"
                        }
                        h = l.shift();
                        if (h.type !== "number") {
                            throw "Expected number after = in Q: field"
                        }
                        j.bpm = parseInt(h.token)
                    } else {
                        throw "Expected number or equal after C in Q: field"
                    }
                }
            } else {
                if (h.type === "number") {
                    var k = parseInt(h.token);
                    if (l.length === 0 || l[0].type === "quote") {
                        j.duration = [1];
                        j.bpm = k
                    } else {
                        n = false;
                        h = l.shift();
                        if (h.type !== "punct" && h.token !== "/") {
                            throw "Expected fraction in Q: field"
                        }
                        h = l.shift();
                        if (h.type !== "number") {
                            throw "Expected fraction in Q: field"
                        }
                        var m = parseInt(h.token);
                        j.duration = [k / m];
                        while (l.length > 0 && l[0].token !== "=" && l[0].type !== "quote") {
                            h = l.shift();
                            if (h.type !== "number") {
                                throw "Expected fraction in Q: field"
                            }
                            k = parseInt(h.token);
                            h = l.shift();
                            if (h.type !== "punct" && h.token !== "/") {
                                throw "Expected fraction in Q: field"
                            }
                            h = l.shift();
                            if (h.type !== "number") {
                                throw "Expected fraction in Q: field"
                            }
                            m = parseInt(h.token);
                            j.duration.push(k / m)
                        }
                        h = l.shift();
                        if (h.type !== "punct" && h.token !== "=") {
                            throw "Expected = in Q: field"
                        }
                        h = l.shift();
                        if (h.type !== "number") {
                            throw "Expected tempo in Q: field"
                        }
                        j.bpm = parseInt(h.token)
                    }
                } else {
                    throw "Unknown value in Q: field"
                }
            }
            if (l.length !== 0) {
                h = l.shift();
                if (h.type === "quote") {
                    j.postString = h.token;
                    h = l.shift()
                }
                if (l.length !== 0) {
                    throw "Unexpected string at end of Q: field"
                }
            }
            if (a.printTempo === false) {
                j.suppress = true
            }
            return {
                type: n ? "delaySet" : "immediate",
                tempo: j
            }
        } catch (g) {
            e(g, o, f);
            return {
                type: "none"
            }
        }
    };
    this.letter_to_inline_header = function (h, k) {
        var g = c.eatWhiteSpace(h, k);
        k += g;
        if (h.length >= k + 5 && h.charAt(k) === "[" && h.charAt(k + 2) === ":") {
            var n = h.indexOf("]", k);
            switch (h.substring(k, k + 3)) {
            case "[I:":
                var l = window.ABCJS.parse.parseDirective.addDirective(h.substring(k + 3, n));
                if (l) {
                    e(l, h, k)
                }
                return [n - k + 1 + g];
            case "[M:":
                var m = this.setMeter(h.substring(k + 3, n));
                if (d.hasBeginMusic() && m) {
                    d.appendStartingElement("meter", - 1, - 1, m)
                } else {
                    a.meter = m
                }
                return [n - k + 1 + g];
            case "[K:":
                var f = window.ABCJS.parse.parseKeyVoice.parseKey(h.substring(k + 3, n));
                if (f.foundClef && d.hasBeginMusic()) {
                    d.appendStartingElement("clef", - 1, - 1, a.clef)
                }
                if (f.foundKey && d.hasBeginMusic()) {
                    d.appendStartingElement("key", - 1, - 1, window.ABCJS.parse.parseKeyVoice.fixKey(a.clef, a.key))
                }
                return [n - k + 1 + g];
            case "[P:":
                d.appendElement("part", - 1, - 1, {
                    title: h.substring(k + 3, n)
                });
                return [n - k + 1 + g];
            case "[L:":
                this.setDefaultLength(h, k + 3, n);
                return [n - k + 1 + g];
            case "[Q:":
                if (n > 0) {
                    var j = this.setTempo(h, k + 3, n);
                    if (j.type === "delaySet") {
                        d.appendElement("tempo", - 1, - 1, this.calcTempo(j.tempo))
                    } else {
                        if (j.type === "immediate") {
                            d.appendElement("tempo", - 1, - 1, j.tempo)
                        }
                    }
                    return [n - k + 1 + g, h.charAt(k + 1), h.substring(k + 3, n)]
                }
                break;
            case "[V:":
                if (n > 0) {
                    window.ABCJS.parse.parseKeyVoice.parseVoice(h, k + 3, n);
                    return [n - k + 1 + g, h.charAt(k + 1), h.substring(k + 3, n)]
                }
                break;
            default:
            }
        }
        return [0]
    };
    this.letter_to_body_header = function (g, j) {
        if (g.length >= j + 3) {
            switch (g.substring(j, j + 2)) {
            case "I:":
                var k = window.ABCJS.parse.parseDirective.addDirective(g.substring(j + 2));
                if (k) {
                    e(k, g, j)
                }
                return [g.length];
            case "M:":
                var l = this.setMeter(g.substring(j + 2));
                if (d.hasBeginMusic() && l) {
                    d.appendStartingElement("meter", - 1, - 1, l)
                }
                return [g.length];
            case "K:":
                var f = window.ABCJS.parse.parseKeyVoice.parseKey(g.substring(j + 2));
                if (f.foundClef && d.hasBeginMusic()) {
                    d.appendStartingElement("clef", - 1, - 1, a.clef)
                }
                if (f.foundKey && d.hasBeginMusic()) {
                    d.appendStartingElement("key", - 1, - 1, window.ABCJS.parse.parseKeyVoice.fixKey(a.clef, a.key))
                }
                return [g.length];
            case "P:":
                if (d.hasBeginMusic()) {
                    d.appendElement("part", - 1, - 1, {
                        title: g.substring(j + 2)
                    })
                }
                return [g.length];
            case "L:":
                this.setDefaultLength(g, j + 2, g.length);
                return [g.length];
            case "Q:":
                var m = g.indexOf("\x12", j + 2);
                if (m === -1) {
                    m = g.length
                }
                var h = this.setTempo(g, j + 2, m);
                if (h.type === "delaySet") {
                    d.appendElement("tempo", - 1, - 1, this.calcTempo(h.tempo))
                } else {
                    if (h.type === "immediate") {
                        d.appendElement("tempo", - 1, - 1, h.tempo)
                    }
                }
                return [m, g.charAt(j), window.ABCJS.parse.strip(g.substring(j + 2))];
            case "V:":
                window.ABCJS.parse.parseKeyVoice.parseVoice(g, 2, g.length);
                return [g.length, g.charAt(j), window.ABCJS.parse(g.substring(j + 2))];
            default:
            }
        }
        return [0]
    };
    var b = {
        A: "author",
        B: "book",
        C: "composer",
        D: "discography",
        F: "url",
        G: "group",
        I: "instruction",
        N: "notes",
        O: "origin",
        R: "rhythm",
        S: "source",
        W: "unalignedWords",
        Z: "transcription"
    };
    this.parseHeader = function (g) {
        if (window.ABCJS.parse.startsWith(g, "%%")) {
            var j = window.ABCJS.parse.parseDirective.addDirective(g.substring(2));
            if (j) {
                e(j, g, 2)
            }
            return {}
        }
        g = c.stripComment(g);
        if (g.length === 0) {
            return {}
        }
        if (g.length >= 2) {
            if (g.charAt(1) === ":") {
                var i = "";
                if (g.indexOf("\x12") >= 0 && g.charAt(0) !== "w") {
                    i = g.substring(g.indexOf("\x12") + 1);
                    g = g.substring(0, g.indexOf("\x12"))
                }
                var k = b[g.charAt(0)];
                if (k !== undefined) {
                    if (k === "unalignedWords") {
                        d.addMetaTextArray(k, window.ABCJS.parse.parseDirective.parseFontChangeLine(c.translateString(c.stripComment(g.substring(2)))))
                    } else {
                        d.addMetaText(k, c.translateString(c.stripComment(g.substring(2))))
                    }
                    return {}
                } else {
                    switch (g.charAt(0)) {
                    case "H":
                        d.addMetaText("history", c.translateString(c.stripComment(g.substring(2))));
                        a.is_in_history = true;
                        break;
                    case "K":
                        this.resolveTempo();
                        var f = window.ABCJS.parse.parseKeyVoice.parseKey(g.substring(2));
                        if (!a.is_in_header && d.hasBeginMusic()) {
                            if (f.foundClef) {
                                d.appendStartingElement("clef", - 1, - 1, a.clef)
                            }
                            if (f.foundKey) {
                                d.appendStartingElement("key", - 1, - 1, window.ABCJS.parse.parseKeyVoice.fixKey(a.clef, a.key))
                            }
                        }
                        a.is_in_header = false;
                        break;
                    case "L":
                        this.setDefaultLength(g, 2, g.length);
                        break;
                    case "M":
                        a.origMeter = a.meter = this.setMeter(g.substring(2));
                        break;
                    case "P":
                        if (a.is_in_header) {
                            d.addMetaText("partOrder", c.translateString(c.stripComment(g.substring(2))))
                        } else {
                            a.partForNextLine = c.translateString(c.stripComment(g.substring(2)))
                        }
                        break;
                    case "Q":
                        var h = this.setTempo(g, 2, g.length);
                        if (h.type === "delaySet") {
                            a.tempo = h.tempo
                        } else {
                            if (h.type === "immediate") {
                                d.metaText.tempo = h.tempo
                            }
                        }
                        break;
                    case "T":
                        this.setTitle(g.substring(2));
                        break;
                    case "U":
                        this.addUserDefinition(g, 2, g.length);
                        break;
                    case "V":
                        window.ABCJS.parse.parseKeyVoice.parseVoice(g, 2, g.length);
                        if (!a.is_in_header) {
                            return {
                                newline: true
                            }
                        }
                        break;
                    case "s":
                        return {
                            symbols: true
                        };
                    case "w":
                        return {
                            words: true
                        };
                    case "X":
                        break;
                    case "E":
                    case "m":
                        e("Ignored header", g, 0);
                        break;
                    default:
                        if (i.length) {
                            i = "\x12" + i
                        }
                        return {
                            regular: true,
                            str: g + i
                        }
                    }
                }
                if (i.length > 0) {
                    return {
                        recurse: true,
                        str: i
                    }
                }
                return {}
            }
        }
        return {
            regular: true,
            str: g
        }
    }
};
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.parse) {
    window.ABCJS.parse = {}
}
window.ABCJS.parse.parseKeyVoice = {};
(function () {
    var h;
    var e;
    var b;
    var d;
    window.ABCJS.parse.parseKeyVoice.initialize = function (m, k, l, j) {
        h = m;
        e = k;
        b = l;
        d = j
    };
    window.ABCJS.parse.parseKeyVoice.standardKey = function (w) {
        var m = {
            acc: "sharp",
            note: "f"
        };
        var r = {
            acc: "sharp",
            note: "c"
        };
        var v = {
            acc: "sharp",
            note: "g"
        };
        var k = {
            acc: "sharp",
            note: "d"
        };
        var p = {
            acc: "sharp",
            note: "A"
        };
        var u = {
            acc: "sharp",
            note: "e"
        };
        var y = {
            acc: "sharp",
            note: "B"
        };
        var t = {
            acc: "flat",
            note: "B"
        };
        var s = {
            acc: "flat",
            note: "e"
        };
        var q = {
            acc: "flat",
            note: "A"
        };
        var o = {
            acc: "flat",
            note: "d"
        };
        var n = {
            acc: "flat",
            note: "G"
        };
        var l = {
            acc: "flat",
            note: "c"
        };
        var j = {
            acc: "flat",
            note: "F"
        };
        var x = {
            "C#": [m, r, v, k, p, u, y],
            "A#m": [m, r, v, k, p, u, y],
            "G#Mix": [m, r, v, k, p, u, y],
            "D#Dor": [m, r, v, k, p, u, y],
            "E#Phr": [m, r, v, k, p, u, y],
            "F#Lyd": [m, r, v, k, p, u, y],
            "B#Loc": [m, r, v, k, p, u, y],
            "F#": [m, r, v, k, p, u],
            "D#m": [m, r, v, k, p, u],
            "C#Mix": [m, r, v, k, p, u],
            "G#Dor": [m, r, v, k, p, u],
            "A#Phr": [m, r, v, k, p, u],
            BLyd: [m, r, v, k, p, u],
            "E#Loc": [m, r, v, k, p, u],
            B: [m, r, v, k, p],
            "G#m": [m, r, v, k, p],
            "F#Mix": [m, r, v, k, p],
            "C#Dor": [m, r, v, k, p],
            "D#Phr": [m, r, v, k, p],
            ELyd: [m, r, v, k, p],
            "A#Loc": [m, r, v, k, p],
            E: [m, r, v, k],
            "C#m": [m, r, v, k],
            BMix: [m, r, v, k],
            "F#Dor": [m, r, v, k],
            "G#Phr": [m, r, v, k],
            ALyd: [m, r, v, k],
            "D#Loc": [m, r, v, k],
            A: [m, r, v],
            "F#m": [m, r, v],
            EMix: [m, r, v],
            BDor: [m, r, v],
            "C#Phr": [m, r, v],
            DLyd: [m, r, v],
            "G#Loc": [m, r, v],
            D: [m, r],
            Bm: [m, r],
            AMix: [m, r],
            EDor: [m, r],
            "F#Phr": [m, r],
            GLyd: [m, r],
            "C#Loc": [m, r],
            G: [m],
            Em: [m],
            DMix: [m],
            ADor: [m],
            BPhr: [m],
            CLyd: [m],
            "F#Loc": [m],
            C: [],
            Am: [],
            GMix: [],
            DDor: [],
            EPhr: [],
            FLyd: [],
            BLoc: [],
            F: [t],
            Dm: [t],
            CMix: [t],
            GDor: [t],
            APhr: [t],
            BbLyd: [t],
            ELoc: [t],
            Bb: [t, s],
            Gm: [t, s],
            FMix: [t, s],
            CDor: [t, s],
            DPhr: [t, s],
            EbLyd: [t, s],
            ALoc: [t, s],
            Eb: [t, s, q],
            Cm: [t, s, q],
            BbMix: [t, s, q],
            FDor: [t, s, q],
            GPhr: [t, s, q],
            AbLyd: [t, s, q],
            DLoc: [t, s, q],
            Ab: [t, s, q, o],
            Fm: [t, s, q, o],
            EbMix: [t, s, q, o],
            BbDor: [t, s, q, o],
            CPhr: [t, s, q, o],
            DbLyd: [t, s, q, o],
            GLoc: [t, s, q, o],
            Db: [t, s, q, o, n],
            Bbm: [t, s, q, o, n],
            AbMix: [t, s, q, o, n],
            EbDor: [t, s, q, o, n],
            FPhr: [t, s, q, o, n],
            GbLyd: [t, s, q, o, n],
            CLoc: [t, s, q, o, n],
            Gb: [t, s, q, o, n, l],
            Ebm: [t, s, q, o, n, l],
            DbMix: [t, s, q, o, n, l],
            AbDor: [t, s, q, o, n, l],
            BbPhr: [t, s, q, o, n, l],
            CbLyd: [t, s, q, o, n, l],
            FLoc: [t, s, q, o, n, l],
            Cb: [t, s, q, o, n, l, j],
            Abm: [t, s, q, o, n, l, j],
            GbMix: [t, s, q, o, n, l, j],
            DbDor: [t, s, q, o, n, l, j],
            EbPhr: [t, s, q, o, n, l, j],
            FbLyd: [t, s, q, o, n, l, j],
            BbLoc: [t, s, q, o, n, l, j],
            "A#": [t, s],
            "B#": [],
            "D#": [t, s, q],
            "E#": [t],
            "G#": [t, s, q, o],
            Gbm: [m, r, v, k, p, u, y]
        };
        return x[w]
    };
    var i = function (l, j) {
        var k = 0;
        switch (l) {
        case "treble":
        case "perc":
        case "none":
        case "treble+8":
        case "treble-8":
            break;
        case "bass3":
        case "bass":
        case "bass+8":
        case "bass-8":
        case "bass+16":
        case "bass-16":
            k = -12;
            break;
        case "tenor":
            k = -8;
            break;
        case "alto2":
        case "alto1":
        case "alto":
        case "alto+8":
        case "alto-8":
            k = -6;
            break
        }
        return k + j
    };
    window.ABCJS.parse.parseKeyVoice.deepCopyKey = function (k) {
        var j = {
            accidentals: [],
            root: k.root,
            acc: k.acc,
            mode: k.mode
        };
        window.ABCJS.parse.each(k.accidentals, function (l) {
            j.accidentals.push(window.ABCJS.parse.clone(l))
        });
        return j
    };
    var c = {
        A: 5,
        B: 6,
        C: 0,
        D: 1,
        E: 2,
        F: 3,
        G: 4,
        a: 12,
        b: 13,
        c: 7,
        d: 8,
        e: 9,
        f: 10,
        g: 11
    };
    window.ABCJS.parse.parseKeyVoice.addPosToKey = function (l, k) {
        var j = l.verticalPos;
        window.ABCJS.parse.each(k.accidentals, function (m) {
            var n = c[m.note];
            n = n - j;
            m.verticalPos = n
        });
        if (k.impliedNaturals) {
            window.ABCJS.parse.each(k.impliedNaturals, function (m) {
                var n = c[m.note];
                n = n - j;
                m.verticalPos = n
            })
        }
        if (j < -10) {
            window.ABCJS.parse.each(k.accidentals, function (m) {
                m.verticalPos -= 7;
                if (m.verticalPos >= 11 || (m.verticalPos === 10 && m.acc === "flat")) {
                    m.verticalPos -= 7
                }
                if (m.note === "A" && m.acc === "sharp") {
                    m.verticalPos -= 7
                }
                if ((m.note === "G" || m.note === "F") && m.acc === "flat") {
                    m.verticalPos -= 7
                }
            });
            if (k.impliedNaturals) {
                window.ABCJS.parse.each(k.impliedNaturals, function (m) {
                    m.verticalPos -= 7;
                    if (m.verticalPos >= 11 || (m.verticalPos === 10 && m.acc === "flat")) {
                        m.verticalPos -= 7
                    }
                    if (m.note === "A" && m.acc === "sharp") {
                        m.verticalPos -= 7
                    }
                    if ((m.note === "G" || m.note === "F") && m.acc === "flat") {
                        m.verticalPos -= 7
                    }
                })
            }
        } else {
            if (j < -4) {
                window.ABCJS.parse.each(k.accidentals, function (m) {
                    m.verticalPos -= 7;
                    if (j === -8 && (m.note === "f" || m.note === "g") && m.acc === "sharp") {
                        m.verticalPos -= 7
                    }
                });
                if (k.impliedNaturals) {
                    window.ABCJS.parse.each(k.impliedNaturals, function (m) {
                        m.verticalPos -= 7;
                        if (j === -8 && (m.note === "f" || m.note === "g") && m.acc === "sharp") {
                            m.verticalPos -= 7
                        }
                    })
                }
            } else {
                if (j >= 7) {
                    window.ABCJS.parse.each(k.accidentals, function (m) {
                        m.verticalPos += 7
                    });
                    if (k.impliedNaturals) {
                        window.ABCJS.parse.each(k.impliedNaturals, function (m) {
                            m.verticalPos += 7
                        })
                    }
                }
            }
        }
    };
    window.ABCJS.parse.parseKeyVoice.fixKey = function (l, j) {
        var k = window.ABCJS.parse.clone(j);
        window.ABCJS.parse.parseKeyVoice.addPosToKey(l, k);
        return k
    };
    var a = function (l) {
        var j = c[l.charAt(0)];
        for (var k = 1; k < l.length; k++) {
            if (l.charAt(k) === ",") {
                j -= 7
            } else {
                if (l.charAt(k) === ",") {
                    j += 7
                } else {
                    break
                }
            }
        }
        return {
            mid: j - 6,
            str: l.substring(k)
        }
    };
    var g = function (j) {
        for (var k = 0; k < j.length; k++) {
            if (j[k].note === "b") {
                j[k].note = "B"
            } else {
                if (j[k].note === "a") {
                    j[k].note = "A"
                } else {
                    if (j[k].note === "F") {
                        j[k].note = "f"
                    } else {
                        if (j[k].note === "E") {
                            j[k].note = "e"
                        } else {
                            if (j[k].note === "D") {
                                j[k].note = "d"
                            } else {
                                if (j[k].note === "C") {
                                    j[k].note = "c"
                                } else {
                                    if (j[k].note === "G" && j[k].acc === "sharp") {
                                        j[k].note = "g"
                                    } else {
                                        if (j[k].note === "g" && j[k].acc === "flat") {
                                            j[k].note = "G"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    window.ABCJS.parse.parseKeyVoice.parseKey = function (x) {
        if (x.length === 0) {
            x = "none"
        }
        var w = h.tokenize(x, 0, x.length);
        var D = {};
        switch (w[0].token) {
        case "HP":
            window.ABCJS.parse.parseDirective.addDirective("bagpipes");
            b.key = {
                root: "HP",
                accidentals: [],
                acc: "",
                mode: ""
            };
            D.foundKey = true;
            w.shift();
            break;
        case "Hp":
            window.ABCJS.parse.parseDirective.addDirective("bagpipes");
            b.key = {
                root: "Hp",
                accidentals: [{
                    acc: "natural",
                    note: "g"
                }, {
                    acc: "sharp",
                    note: "f"
                }, {
                    acc: "sharp",
                    note: "c"
                }],
                acc: "",
                mode: ""
            };
            D.foundKey = true;
            w.shift();
            break;
        case "none":
            b.key = {
                root: "none",
                accidentals: [],
                acc: "",
                mode: ""
            };
            D.foundKey = true;
            w.shift();
            break;
        default:
            var p = h.getKeyPitch(w[0].token);
            if (p.len > 0) {
                D.foundKey = true;
                var n = "";
                var v = "";
                if (w[0].token.length > 1) {
                    w[0].token = w[0].token.substring(1)
                } else {
                    w.shift()
                }
                var E = p.token;
                if (w.length > 0) {
                    var l = h.getSharpFlat(w[0].token);
                    if (l.len > 0) {
                        if (w[0].token.length > 1) {
                            w[0].token = w[0].token.substring(1)
                        } else {
                            w.shift()
                        }
                        E += l.token;
                        n = l.token
                    }
                    if (w.length > 0) {
                        var C = h.getMode(w[0].token);
                        if (C.len > 0) {
                            w.shift();
                            E += C.token;
                            v = C.token
                        }
                    }
                }
                var s = window.ABCJS.parse.parseKeyVoice.deepCopyKey(b.key);
                b.key = window.ABCJS.parse.parseKeyVoice.deepCopyKey({
                    accidentals: window.ABCJS.parse.parseKeyVoice.standardKey(E)
                });
                b.key.root = p.token;
                b.key.acc = n;
                b.key.mode = v;
                if (s) {
                    var m;
                    for (var z = 0; z < b.key.accidentals.length; z++) {
                        for (m = 0; m < s.accidentals.length; m++) {
                            if (s.accidentals[m].note && b.key.accidentals[z].note.toLowerCase() === s.accidentals[m].note.toLowerCase()) {
                                s.accidentals[m].note = null
                            }
                        }
                    }
                    for (m = 0; m < s.accidentals.length; m++) {
                        if (s.accidentals[m].note) {
                            if (!b.key.impliedNaturals) {
                                b.key.impliedNaturals = []
                            }
                            b.key.impliedNaturals.push({
                                acc: "natural",
                                note: s.accidentals[m].note
                            })
                        }
                    }
                }
            }
            break
        }
        if (w.length === 0) {
            return D
        }
        if (w[0].token === "exp") {
            w.shift()
        }
        if (w.length === 0) {
            return D
        }
        if (w[0].token === "oct") {
            w.shift()
        }
        if (w.length === 0) {
            return D
        }
        var t = h.getKeyAccidentals2(w);
        if (t.warn) {
            e(t.warn, x, 0)
        }
        if (t.accs) {
            if (!D.foundKey) {
                D.foundKey = true;
                b.key = {
                    root: "none",
                    acc: "",
                    mode: "",
                    accidentals: []
                }
            }
            g(t.accs);
            for (var B = 0; B < t.accs.length; B++) {
                var u = false;
                for (var A = 0; A < b.key.accidentals.length && !u; A++) {
                    if (b.key.accidentals[A].note === t.accs[B].note) {
                        u = true;
                        b.key.accidentals[A].acc = t.accs[B].acc
                    }
                }
                if (!u) {
                    b.key.accidentals.push(t.accs[B]);
                    if (b.key.impliedNaturals) {
                        for (var q = 0; q < b.key.impliedNaturals.length; q++) {
                            if (b.key.impliedNaturals[q].note === t.accs[B].note) {
                                b.key.impliedNaturals.splice(q, 1)
                            }
                        }
                    }
                }
            }
        }
        var o;
        while (w.length > 0) {
            switch (w[0].token) {
            case "m":
            case "middle":
                w.shift();
                if (w.length === 0) {
                    e("Expected = after middle", x, 0);
                    return D
                }
                o = w.shift();
                if (o.token !== "=") {
                    e("Expected = after middle", x, o.start);
                    break
                }
                if (w.length === 0) {
                    e("Expected parameter after middle=", x, 0);
                    return D
                }
                var r = h.getPitchFromTokens(w);
                if (r.warn) {
                    e(r.warn, x, 0)
                }
                if (r.position) {
                    b.clef.verticalPos = r.position - 6
                }
                break;
            case "transpose":
                w.shift();
                if (w.length === 0) {
                    e("Expected = after transpose", x, 0);
                    return D
                }
                o = w.shift();
                if (o.token !== "=") {
                    e("Expected = after transpose", x, o.start);
                    break
                }
                if (w.length === 0) {
                    e("Expected parameter after transpose=", x, 0);
                    return D
                }
                if (w[0].type !== "number") {
                    e("Expected number after transpose", x, w[0].start);
                    break
                }
                b.clef.transpose = w[0].intt;
                w.shift();
                break;
            case "stafflines":
                w.shift();
                if (w.length === 0) {
                    e("Expected = after stafflines", x, 0);
                    return D
                }
                o = w.shift();
                if (o.token !== "=") {
                    e("Expected = after stafflines", x, o.start);
                    break
                }
                if (w.length === 0) {
                    e("Expected parameter after stafflines=", x, 0);
                    return D
                }
                if (w[0].type !== "number") {
                    e("Expected number after stafflines", x, w[0].start);
                    break
                }
                b.clef.stafflines = w[0].intt;
                w.shift();
                break;
            case "staffscale":
                w.shift();
                if (w.length === 0) {
                    e("Expected = after staffscale", x, 0);
                    return D
                }
                o = w.shift();
                if (o.token !== "=") {
                    e("Expected = after staffscale", x, o.start);
                    break
                }
                if (w.length === 0) {
                    e("Expected parameter after staffscale=", x, 0);
                    return D
                }
                if (w[0].type !== "number") {
                    e("Expected number after staffscale", x, w[0].start);
                    break
                }
                b.clef.staffscale = w[0].floatt;
                w.shift();
                break;
            case "style":
                w.shift();
                if (w.length === 0) {
                    e("Expected = after style", x, 0);
                    return D
                }
                o = w.shift();
                if (o.token !== "=") {
                    e("Expected = after style", x, o.start);
                    break
                }
                if (w.length === 0) {
                    e("Expected parameter after style=", x, 0);
                    return D
                }
                switch (w[0].token) {
                case "normal":
                case "harmonic":
                case "rhythm":
                case "x":
                    b.style = w[0].token;
                    w.shift();
                    break;
                default:
                    e("error parsing style element: " + w[0].token, x, w[0].start);
                    break
                }
                break;
            case "clef":
                w.shift();
                if (w.length === 0) {
                    e("Expected = after clef", x, 0);
                    return D
                }
                o = w.shift();
                if (o.token !== "=") {
                    e("Expected = after clef", x, o.start);
                    break
                }
                if (w.length === 0) {
                    e("Expected parameter after clef=", x, 0);
                    return D
                }
            case "treble":
            case "bass":
            case "alto":
            case "tenor":
            case "perc":
                var y = w.shift();
                switch (y.token) {
                case "treble":
                case "tenor":
                case "alto":
                case "bass":
                case "perc":
                case "none":
                    break;
                case "C":
                    y.token = "alto";
                    break;
                case "F":
                    y.token = "bass";
                    break;
                case "G":
                    y.token = "treble";
                    break;
                case "c":
                    y.token = "alto";
                    break;
                case "f":
                    y.token = "bass";
                    break;
                case "g":
                    y.token = "treble";
                    break;
                default:
                    e("Expected clef name. Found " + y.token, x, y.start);
                    break
                }
                if (w.length > 0 && w[0].type === "number") {
                    y.token += w[0].token;
                    w.shift()
                }
                if (w.length > 1 && (w[0].token === "-" || w[0].token === "+") && w[1].token === "8") {
                    y.token += w[0].token + w[1].token;
                    w.shift();
                    w.shift()
                }
                b.clef = {
                    type: y.token,
                    verticalPos: i(y.token, 0)
                };
                D.foundClef = true;
                break;
            default:
                e("Unknown parameter: " + w[0].token, x, w[0].start);
                w.shift()
            }
        }
        return D
    };
    var f = function (j) {
        b.currentVoice = b.voices[j];
        d.setCurrentVoice(b.currentVoice.staffNum, b.currentVoice.index)
    };
    window.ABCJS.parse.parseKeyVoice.parseVoice = function (m, w, x) {
        var B = h.getMeat(m, w, x);
        var k = B.start;
        var j = B.end;
        var q = h.getToken(m, k, j);
        if (q.length === 0) {
            e("Expected a voice id", m, k);
            return
        }
        var z = false;
        if (b.voices[q] === undefined) {
            b.voices[q] = {};
            z = true;
            if (b.score_is_present) {
                e("Can't have an unknown V: id when the %score directive is present", m, k)
            }
        }
        k += q.length;
        k += h.eatWhiteSpace(m, k);
        var o = {
            startStaff: z
        };
        var C = function (v) {
            var s = h.getVoiceToken(m, k, j);
            if (s.warn !== undefined) {
                e("Expected value for " + v + " in voice: " + s.warn, m, k)
            } else {
                if (s.token.length === 0 && m.charAt(k) !== '"') {
                    e("Expected value for " + v + " in voice", m, k)
                } else {
                    o[v] = s.token
                }
            }
            k += s.len
        };
        var y = function (E, v, D) {
            var s = h.getVoiceToken(m, k, j);
            if (s.warn !== undefined) {
                e("Expected value for " + v + " in voice: " + s.warn, m, k)
            } else {
                if (s.token.length === 0 && m.charAt(k) !== '"') {
                    e("Expected value for " + v + " in voice", m, k)
                } else {
                    if (D === "number") {
                        s.token = parseFloat(s.token)
                    }
                    b.voices[E][v] = s.token
                }
            }
            k += s.len
        };
        while (k < j) {
            var l = h.getVoiceToken(m, k, j);
            k += l.len;
            if (l.warn) {
                e("Error parsing voice: " + l.warn, m, k)
            } else {
                var t = null;
                switch (l.token) {
                case "clef":
                case "cl":
                    C("clef");
                    var r = 0;
                    if (o.clef !== undefined) {
                        o.clef = o.clef.replace(/[',]/g, "");
                        if (o.clef.indexOf("+16") !== -1) {
                            r += 14;
                            o.clef = o.clef.replace("+16", "")
                        }
                        o.verticalPos = i(o.clef, r)
                    }
                    break;
                case "treble":
                case "bass":
                case "tenor":
                case "alto":
                case "none":
                case "treble'":
                case "bass'":
                case "tenor'":
                case "alto'":
                case "none'":
                case "treble''":
                case "bass''":
                case "tenor''":
                case "alto''":
                case "none''":
                case "treble,":
                case "bass,":
                case "tenor,":
                case "alto,":
                case "none,":
                case "treble,,":
                case "bass,,":
                case "tenor,,":
                case "alto,,":
                case "none,,":
                    var u = 0;
                    o.clef = l.token.replace(/[',]/g, "");
                    o.verticalPos = i(o.clef, u);
                    break;
                case "staves":
                case "stave":
                case "stv":
                    C("staves");
                    break;
                case "brace":
                case "brc":
                    C("brace");
                    break;
                case "bracket":
                case "brk":
                    C("bracket");
                    break;
                case "name":
                case "nm":
                    C("name");
                    break;
                case "subname":
                case "sname":
                case "snm":
                    C("subname");
                    break;
                case "merge":
                    o.startStaff = false;
                    break;
                case "stems":
                    t = h.getVoiceToken(m, k, j);
                    if (t.warn !== undefined) {
                        e("Expected value for stems in voice: " + t.warn, m, k)
                    } else {
                        if (t.token === "up" || t.token === "down") {
                            b.voices[q].stem = t.token
                        } else {
                            e("Expected up or down for voice stem", m, k)
                        }
                    }
                    k += t.len;
                    break;
                case "up":
                case "down":
                    b.voices[q].stem = l.token;
                    break;
                case "middle":
                case "m":
                    C("verticalPos");
                    o.verticalPos = a(o.verticalPos).mid;
                    break;
                case "gchords":
                case "gch":
                    b.voices[q].suppressChords = true;
                    break;
                case "space":
                case "spc":
                    C("spacing");
                    break;
                case "scale":
                    y(q, "scale", "number");
                    break;
                case "transpose":
                    y(q, "transpose", "number");
                    break
                }
            }
            k += h.eatWhiteSpace(m, k)
        }
        if (o.startStaff || b.staves.length === 0) {
            b.staves.push({
                index: b.staves.length,
                meter: b.origMeter
            });
            if (!b.score_is_present) {
                b.staves[b.staves.length - 1].numVoices = 0
            }
        }
        if (b.voices[q].staffNum === undefined) {
            b.voices[q].staffNum = b.staves.length - 1;
            var A = 0;
            for (var n in b.voices) {
                if (b.voices.hasOwnProperty(n)) {
                    if (b.voices[n].staffNum === b.voices[q].staffNum) {
                        A++
                    }
                }
            }
            b.voices[q].index = A - 1
        }
        var p = b.staves[b.voices[q].staffNum];
        if (!b.score_is_present) {
            p.numVoices++
        }
        if (o.clef) {
            p.clef = {
                type: o.clef,
                verticalPos: o.verticalPos
            }
        }
        if (o.spacing) {
            p.spacing_below_offset = o.spacing
        }
        if (o.verticalPos) {
            p.verticalPos = o.verticalPos
        }
        if (o.name) {
            if (p.name) {
                p.name.push(o.name)
            } else {
                p.name = [o.name]
            }
        }
        if (o.subname) {
            if (p.subname) {
                p.subname.push(o.subname)
            } else {
                p.subname = [o.subname]
            }
        }
        f(q)
    }
})();
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.parse) {
    window.ABCJS.parse = {}
}
window.ABCJS.parse.tokenizer = function () {
    this.skipWhiteSpace = function (j) {
        for (var h = 0; h < j.length; h++) {
            if (!this.isWhiteSpace(j.charAt(h))) {
                return h
            }
        }
        return j.length
    };
    var g = function (j, h) {
        return h >= j.length
    };
    this.eatWhiteSpace = function (h, j) {
        for (var k = j; k < h.length; k++) {
            if (!this.isWhiteSpace(h.charAt(k))) {
                return k - j
            }
        }
        return k - j
    };
    this.getKeyPitch = function (j) {
        var h = this.skipWhiteSpace(j);
        if (g(j, h)) {
            return {
                len: 0
            }
        }
        switch (j.charAt(h)) {
        case "A":
            return {
                len: h + 1,
                token: "A"
            };
        case "B":
            return {
                len: h + 1,
                token: "B"
            };
        case "C":
            return {
                len: h + 1,
                token: "C"
            };
        case "D":
            return {
                len: h + 1,
                token: "D"
            };
        case "E":
            return {
                len: h + 1,
                token: "E"
            };
        case "F":
            return {
                len: h + 1,
                token: "F"
            };
        case "G":
            return {
                len: h + 1,
                token: "G"
            }
        }
        return {
            len: 0
        }
    };
    this.getSharpFlat = function (h) {
        if (h === "bass") {
            return {
                len: 0
            }
        }
        switch (h.charAt(0)) {
        case "#":
            return {
                len: 1,
                token: "#"
            };
        case "b":
            return {
                len: 1,
                token: "b"
            }
        }
        return {
            len: 0
        }
    };
    this.getMode = function (l) {
        var k = function (i, m) {
            while (m < i.length && ((i.charAt(m) >= "a" && i.charAt(m) <= "z") || (i.charAt(m) >= "A" && i.charAt(m) <= "Z"))) {
                m++
            }
            return m
        };
        var j = this.skipWhiteSpace(l);
        if (g(l, j)) {
            return {
                len: 0
            }
        }
        var h = l.substring(j, j + 3).toLowerCase();
        if (h.length > 1 && h.charAt(1) === " " || h.charAt(1) === "^" || h.charAt(1) === "_" || h.charAt(1) === "=") {
            h = h.charAt(0)
        }
        switch (h) {
        case "mix":
            return {
                len: k(l, j),
                token: "Mix"
            };
        case "dor":
            return {
                len: k(l, j),
                token: "Dor"
            };
        case "phr":
            return {
                len: k(l, j),
                token: "Phr"
            };
        case "lyd":
            return {
                len: k(l, j),
                token: "Lyd"
            };
        case "loc":
            return {
                len: k(l, j),
                token: "Loc"
            };
        case "aeo":
            return {
                len: k(l, j),
                token: "m"
            };
        case "maj":
            return {
                len: k(l, j),
                token: ""
            };
        case "ion":
            return {
                len: k(l, j),
                token: ""
            };
        case "min":
            return {
                len: k(l, j),
                token: "m"
            };
        case "m":
            return {
                len: k(l, j),
                token: "m"
            }
        }
        return {
            len: 0
        }
    };
    this.getClef = function (o, n) {
        var h = o;
        var m = this.skipWhiteSpace(o);
        if (g(o, m)) {
            return {
                len: 0
            }
        }
        var q = false;
        var p = o.substring(m);
        if (window.ABCJS.parse.startsWith(p, "clef=")) {
            q = true;
            p = p.substring(5);
            m += 5
        }
        if (p.length === 0 && q) {
            return {
                len: m + 5,
                warn: "No clef specified: " + h
            }
        }
        var l = this.skipWhiteSpace(p);
        if (g(p, l)) {
            return {
                len: 0
            }
        }
        if (l > 0) {
            m += l;
            p = p.substring(l)
        }
        var k = null;
        if (window.ABCJS.parse.startsWith(p, "treble")) {
            k = "treble"
        } else {
            if (window.ABCJS.parse.startsWith(p, "bass3")) {
                k = "bass3"
            } else {
                if (window.ABCJS.parse.startsWith(p, "bass")) {
                    k = "bass"
                } else {
                    if (window.ABCJS.parse.startsWith(p, "tenor")) {
                        k = "tenor"
                    } else {
                        if (window.ABCJS.parse.startsWith(p, "alto2")) {
                            k = "alto2"
                        } else {
                            if (window.ABCJS.parse.startsWith(p, "alto1")) {
                                k = "alto1"
                            } else {
                                if (window.ABCJS.parse.startsWith(p, "alto")) {
                                    k = "alto"
                                } else {
                                    if (!n && (q && window.ABCJS.parse.startsWith(p, "none"))) {
                                        k = "none"
                                    } else {
                                        if (window.ABCJS.parse.startsWith(p, "perc")) {
                                            k = "perc"
                                        } else {
                                            if (!n && (q && window.ABCJS.parse.startsWith(p, "C"))) {
                                                k = "tenor"
                                            } else {
                                                if (!n && (q && window.ABCJS.parse.startsWith(p, "F"))) {
                                                    k = "bass"
                                                } else {
                                                    if (!n && (q && window.ABCJS.parse.startsWith(p, "G"))) {
                                                        k = "treble"
                                                    } else {
                                                        return {
                                                            len: m + 5,
                                                            warn: "Unknown clef specified: " + h
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        p = p.substring(k.length);
        l = this.isMatch(p, "+8");
        if (l > 0) {
            k += "+8"
        } else {
            l = this.isMatch(p, "-8");
            if (l > 0) {
                k += "-8"
            }
        }
        return {
            len: m + k.length,
            token: k,
            explicit: q
        }
    };
    this.getBarLine = function (h, k) {
        switch (h.charAt(k)) {
        case "]":
            ++k;
            switch (h.charAt(k)) {
            case "|":
                return {
                    len: 2,
                    token: "bar_thick_thin"
                };
            case "[":
                ++k;
                if ((h.charAt(k) >= "1" && h.charAt(k) <= "9") || h.charAt(k) === '"') {
                    return {
                        len: 2,
                        token: "bar_invisible"
                    }
                }
                return {
                    len: 1,
                    warn: "Unknown bar symbol"
                };
            default:
                return {
                    len: 1,
                    token: "bar_invisible"
                }
            }
            break;
        case ":":
            ++k;
            switch (h.charAt(k)) {
            case ":":
                return {
                    len: 2,
                    token: "bar_dbl_repeat"
                };
            case "|":
                ++k;
                switch (h.charAt(k)) {
                case "]":
                    ++k;
                    switch (h.charAt(k)) {
                    case "|":
                        ++k;
                        if (h.charAt(k) === ":") {
                            return {
                                len: 5,
                                token: "bar_dbl_repeat"
                            }
                        }
                        return {
                            len: 3,
                            token: "bar_right_repeat"
                        };
                    default:
                        return {
                            len: 3,
                            token: "bar_right_repeat"
                        }
                    }
                    break;
                case "|":
                    ++k;
                    if (h.charAt(k) === ":") {
                        return {
                            len: 4,
                            token: "bar_dbl_repeat"
                        }
                    }
                    return {
                        len: 3,
                        token: "bar_right_repeat"
                    };
                default:
                    return {
                        len: 2,
                        token: "bar_right_repeat"
                    }
                }
                break;
            default:
                return {
                    len: 1,
                    warn: "Unknown bar symbol"
                }
            }
            break;
        case "[":
            ++k;
            if (h.charAt(k) === "|") {
                ++k;
                switch (h.charAt(k)) {
                case ":":
                    return {
                        len: 3,
                        token: "bar_left_repeat"
                    };
                case "]":
                    return {
                        len: 3,
                        token: "bar_invisible"
                    };
                default:
                    return {
                        len: 2,
                        token: "bar_thick_thin"
                    }
                }
            } else {
                if ((h.charAt(k) >= "1" && h.charAt(k) <= "9") || h.charAt(k) === '"') {
                    return {
                        len: 1,
                        token: "bar_invisible"
                    }
                }
                return {
                    len: 0
                }
            }
            break;
        case "|":
            ++k;
            switch (h.charAt(k)) {
            case "]":
                return {
                    len: 2,
                    token: "bar_thin_thick"
                };
            case "|":
                ++k;
                if (h.charAt(k) === ":") {
                    return {
                        len: 3,
                        token: "bar_left_repeat"
                    }
                }
                return {
                    len: 2,
                    token: "bar_thin_thin"
                };
            case ":":
                var j = 0;
                while (h.charAt(k + j) === ":") {
                    j++
                }
                return {
                    len: 1 + j,
                    token: "bar_left_repeat"
                };
            default:
                return {
                    len: 1,
                    token: "bar_thin"
                }
            }
            break
        }
        return {
            len: 0
        }
    };
    this.getTokenOf = function (k, j) {
        for (var h = 0; h < k.length; h++) {
            if (j.indexOf(k.charAt(h)) < 0) {
                return {
                    len: h,
                    token: k.substring(0, h)
                }
            }
        }
        return {
            len: h,
            token: k
        }
    };
    this.getToken = function (k, l, h) {
        var j = l;
        while (j < h && !this.isWhiteSpace(k.charAt(j))) {
            j++
        }
        return k.substring(l, j)
    };
    this.isMatch = function (k, h) {
        var j = this.skipWhiteSpace(k);
        if (g(k, j)) {
            return 0
        }
        if (window.ABCJS.parse.startsWith(k.substring(j), h)) {
            return j + h.length
        }
        return 0
    };
    this.getPitchFromTokens = function (j) {
        var h = {};
        var i = {
            A: 5,
            B: 6,
            C: 0,
            D: 1,
            E: 2,
            F: 3,
            G: 4,
            a: 12,
            b: 13,
            c: 7,
            d: 8,
            e: 9,
            f: 10,
            g: 11
        };
        h.position = i[j[0].token];
        if (h.position === undefined) {
            return {
                warn: "Pitch expected. Found: " + j[0].token
            }
        }
        j.shift();
        while (j.length) {
            switch (j[0].token) {
            case ",":
                h.position -= 7;
                j.shift();
                break;
            case "'":
                h.position += 7;
                j.shift();
                break;
            default:
                return h
            }
        }
        return h
    };
    this.getKeyAccidentals2 = function (j) {
        var h;
        while (j.length > 0) {
            var i;
            if (j[0].token === "^") {
                i = "sharp";
                j.shift();
                if (j.length === 0) {
                    return {
                        accs: h,
                        warn: "Expected note name after " + i
                    }
                }
                switch (j[0].token) {
                case "^":
                    i = "dblsharp";
                    j.shift();
                    break;
                case "/":
                    i = "quartersharp";
                    j.shift();
                    break
                }
            } else {
                if (j[0].token === "=") {
                    i = "natural";
                    j.shift()
                } else {
                    if (j[0].token === "_") {
                        i = "flat";
                        j.shift();
                        if (j.length === 0) {
                            return {
                                accs: h,
                                warn: "Expected note name after " + i
                            }
                        }
                        switch (j[0].token) {
                        case "_":
                            i = "dblflat";
                            j.shift();
                            break;
                        case "/":
                            i = "quarterflat";
                            j.shift();
                            break
                        }
                    } else {
                        return {
                            accs: h
                        }
                    }
                }
            }
            if (j.length === 0) {
                return {
                    accs: h,
                    warn: "Expected note name after " + i
                }
            }
            switch (j[0].token.charAt(0)) {
            case "a":
            case "b":
            case "c":
            case "d":
            case "e":
            case "f":
            case "g":
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
            case "F":
            case "G":
                if (h === undefined) {
                    h = []
                }
                h.push({
                    acc: i,
                    note: j[0].token.charAt(0)
                });
                if (j[0].token.length === 1) {
                    j.shift()
                } else {
                    j[0].token = j[0].token.substring(1)
                }
                break;
            default:
                return {
                    accs: h,
                    warn: "Expected note name after " + i + " Found: " + j[0].token
                }
            }
        }
        return {
            accs: h
        }
    };
    this.getKeyAccidental = function (l) {
        var k = {
            "^": "sharp",
            "^^": "dblsharp",
            "=": "natural",
            _: "flat",
            __: "dblflat",
            "_/": "quarterflat",
            "^/": "quartersharp"
        };
        var h = this.skipWhiteSpace(l);
        if (g(l, h)) {
            return {
                len: 0
            }
        }
        var j = null;
        switch (l.charAt(h)) {
        case "^":
        case "_":
        case "=":
            j = l.charAt(h);
            break;
        default:
            return {
                len: 0
            }
        }
        h++;
        if (g(l, h)) {
            return {
                len: 1,
                warn: "Expected note name after accidental"
            }
        }
        switch (l.charAt(h)) {
        case "a":
        case "b":
        case "c":
        case "d":
        case "e":
        case "f":
        case "g":
        case "A":
        case "B":
        case "C":
        case "D":
        case "E":
        case "F":
        case "G":
            return {
                len: h + 1,
                token: {
                    acc: k[j],
                    note: l.charAt(h)
                }
            };
        case "^":
        case "_":
        case "/":
            j += l.charAt(h);
            h++;
            if (g(l, h)) {
                return {
                    len: 2,
                    warn: "Expected note name after accidental"
                }
            }
            switch (l.charAt(h)) {
            case "a":
            case "b":
            case "c":
            case "d":
            case "e":
            case "f":
            case "g":
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
            case "F":
            case "G":
                return {
                    len: h + 1,
                    token: {
                        acc: k[j],
                        note: l.charAt(h)
                    }
                };
            default:
                return {
                    len: 2,
                    warn: "Expected note name after accidental"
                }
            }
            break;
        default:
            return {
                len: 1,
                warn: "Expected note name after accidental"
            }
        }
    };
    this.isWhiteSpace = function (h) {
        return h === " " || h === "\t" || h === "\x12"
    };
    this.getMeat = function (i, k, h) {
        var j = i.indexOf("%", k);
        if (j >= 0 && j < h) {
            h = j
        }
        while (k < h && (i.charAt(k) === " " || i.charAt(k) === "\t" || i.charAt(k) === "\x12")) {
            k++
        }
        while (k < h && (i.charAt(h - 1) === " " || i.charAt(h - 1) === "\t" || i.charAt(h - 1) === "\x12")) {
            h--
        }
        return {
            start: k,
            end: h
        }
    };
    var d = function (h) {
        return (h >= "A" && h <= "Z") || (h >= "a" && h <= "z")
    };
    var c = function (h) {
        return (h >= "0" && h <= "9")
    };
    this.tokenize = function (r, j, k) {
        var n = this.getMeat(r, j, k);
        j = n.start;
        k = n.end;
        var p = [];
        var l;
        while (j < k) {
            if (r.charAt(j) === '"') {
                l = j + 1;
                while (l < k && r.charAt(l) !== '"') {
                    l++
                }
                p.push({
                    type: "quote",
                    token: r.substring(j + 1, l),
                    start: j + 1,
                    end: l
                });
                l++
            } else {
                if (d(r.charAt(j))) {
                    l = j + 1;
                    while (l < k && d(r.charAt(l))) {
                        l++
                    }
                    p.push({
                        type: "alpha",
                        token: r.substring(j, l),
                        continueId: c(r.charAt(l)),
                        start: j,
                        end: l
                    });
                    j = l + 1
                } else {
                    if (r.charAt(j) === "." && c(r.charAt(l + 1))) {
                        l = j + 1;
                        var q = null;
                        var m = null;
                        while (l < k && c(r.charAt(l))) {
                            l++
                        }
                        m = parseFloat(r.substring(j, l));
                        p.push({
                            type: "number",
                            token: r.substring(j, l),
                            intt: q,
                            floatt: m,
                            continueId: d(r.charAt(l)),
                            start: j,
                            end: l
                        });
                        j = l + 1
                    } else {
                        if (c(r.charAt(j)) || (r.charAt(j) === "-" && c(r.charAt(l + 1)))) {
                            l = j + 1;
                            var h = null;
                            var o = null;
                            while (l < k && c(r.charAt(l))) {
                                l++
                            }
                            if (r.charAt(l) === "." && c(r.charAt(l + 1))) {
                                l++;
                                while (l < k && c(r.charAt(l))) {
                                    l++
                                }
                            } else {
                                h = parseInt(r.substring(j, l))
                            }
                            o = parseFloat(r.substring(j, l));
                            p.push({
                                type: "number",
                                token: r.substring(j, l),
                                intt: h,
                                floatt: o,
                                continueId: d(r.charAt(l)),
                                start: j,
                                end: l
                            });
                            j = l + 1
                        } else {
                            if (r.charAt(j) === " " || r.charAt(j) === "\t") {
                                l = j + 1
                            } else {
                                p.push({
                                    type: "punct",
                                    token: r.charAt(j),
                                    start: j,
                                    end: j + 1
                                });
                                l = j + 1
                            }
                        }
                    }
                }
            }
            j = l
        }
        return p
    };
    this.getVoiceToken = function (j, n, h) {
        var k = n;
        while (k < h && this.isWhiteSpace(j.charAt(k)) || j.charAt(k) === "=") {
            k++
        }
        if (j.charAt(k) === '"') {
            var m = j.indexOf('"', k + 1);
            if (m === -1 || m >= h) {
                return {
                    len: 1,
                    err: "Missing close quote"
                }
            }
            return {
                len: m - n + 1,
                token: this.translateString(j.substring(k + 1, m))
            }
        } else {
            var l = k;
            while (l < h && !this.isWhiteSpace(j.charAt(l)) && j.charAt(l) !== "=") {
                l++
            }
            return {
                len: l - n + 1,
                token: j.substring(k, l)
            }
        }
    };
    var f = {
        "`a": "�",
        "'a": "�",
        "^a": "�",
        "~a": "�",
        '"a': "�",
        oa: "�",
        "=a": "a",
        ua: "a",
        ";a": "a",
        "`e": "�",
        "'e": "�",
        "^e": "�",
        '"e': "�",
        "=e": "e",
        ue: "e",
        ";e": "e",
        ".e": "e",
        "`i": "�",
        "'i": "�",
        "^i": "�",
        '"i': "�",
        "=i": "i",
        ui: "i",
        ";i": "i",
        "`o": "�",
        "'o": "�",
        "^o": "�",
        "~o": "�",
        '"o': "�",
        "=o": "o",
        uo: "o",
        "/o": "�",
        "`u": "�",
        "'u": "�",
        "^u": "�",
        "~u": "u",
        '"u': "�",
        ou: "u",
        "=u": "u",
        uu: "u",
        ";u": "u",
        "`A": "�",
        "'A": "�",
        "^A": "�",
        "~A": "�",
        '"A': "�",
        oA: "�",
        "=A": "A",
        uA: "A",
        ";A": "A",
        "`E": "�",
        "'E": "�",
        "^E": "�",
        '"E': "�",
        "=E": "E",
        uE: "E",
        ";E": "E",
        ".E": "E",
        "`I": "�",
        "'I": "�",
        "^I": "�",
        "~I": "I",
        '"I': "�",
        "=I": "I",
        uI: "I",
        ";I": "I",
        ".I": "I",
        "`O": "�",
        "'O": "�",
        "^O": "�",
        "~O": "�",
        '"O': "�",
        "=O": "O",
        uO: "O",
        "/O": "�",
        "`U": "�",
        "'U": "�",
        "^U": "�",
        "~U": "U",
        '"U': "�",
        oU: "U",
        "=U": "U",
        uU: "U",
        ";U": "U",
        ae: "�",
        AE: "�",
        oe: "�",
        OE: "�",
        ss: "�",
        "'c": "c",
        "^c": "c",
        uc: "c",
        cc: "�",
        ".c": "c",
        cC: "�",
        "'C": "C",
        "^C": "C",
        uC: "C",
        ".C": "C",
        "~n": "�",
        "=s": "�",
        vs: "�",
        vz: "�"
    };
    var e = {
        "#": "?",
        b: "?",
        "=": "?"
    };
    var b = {
        "201": "?",
        "202": "?",
        "203": "?",
        "241": "�",
        "242": "�",
        "252": "a",
        "262": "2",
        "272": "o",
        "302": "�",
        "312": "�",
        "322": "�",
        "332": "�",
        "342": "�",
        "352": "�",
        "362": "�",
        "372": "�",
        "243": "�",
        "253": "�",
        "263": "3",
        "273": "�",
        "303": "�",
        "313": "�",
        "323": "�",
        "333": "�",
        "343": "�",
        "353": "�",
        "363": "�",
        "373": "�",
        "244": "�",
        "254": "�",
        "264": "  �",
        "274": "1/4",
        "304": "�",
        "314": "�",
        "324": "�",
        "334": "�",
        "344": "�",
        "354": "�",
        "364": "�",
        "374": "�",
        "245": "�",
        "255": "-",
        "265": "�",
        "275": "1/2",
        "305": "�",
        "315": "�",
        "325": "�",
        "335": "�",
        "345": "�",
        "355": "�",
        "365": "�",
        "375": "�",
        "246": "�",
        "256": "�",
        "266": "�",
        "276": "3/4",
        "306": "�",
        "316": "�",
        "326": "�",
        "336": "�",
        "346": "�",
        "356": "�",
        "366": "�",
        "376": "�",
        "247": "�",
        "257": " �",
        "267": "�",
        "277": "�",
        "307": "�",
        "317": "�",
        "327": "�",
        "337": "�",
        "347": "�",
        "357": "�",
        "367": "�",
        "377": "�",
        "250": " �",
        "260": "�",
        "270": " �",
        "300": "�",
        "310": "�",
        "320": "�",
        "330": "�",
        "340": "�",
        "350": "�",
        "360": "�",
        "370": "�",
        "251": "�",
        "261": "�",
        "271": "1",
        "301": "�",
        "311": "�",
        "321": "�",
        "331": "�",
        "341": "�",
        "351": "�",
        "361": "�",
        "371": "�"
    };
    this.translateString = function (j) {
        var h = j.split("\\");
        if (h.length === 1) {
            return j
        }
        var i = null;
        window.ABCJS.parse.each(h, function (k) {
            if (i === null) {
                i = k
            } else {
                var l = f[k.substring(0, 2)];
                if (l !== undefined) {
                    i += l + k.substring(2)
                } else {
                    l = b[k.substring(0, 3)];
                    if (l !== undefined) {
                        i += l + k.substring(3)
                    } else {
                        l = e[k.substring(0, 1)];
                        if (l !== undefined) {
                            i += l + k.substring(1)
                        } else {
                            i += "\\" + k
                        }
                    }
                }
            }
        });
        return i
    };
    this.getNumber = function (h, j) {
        var i = 0;
        while (j < h.length) {
            switch (h.charAt(j)) {
            case "0":
                i = i * 10;
                j++;
                break;
            case "1":
                i = i * 10 + 1;
                j++;
                break;
            case "2":
                i = i * 10 + 2;
                j++;
                break;
            case "3":
                i = i * 10 + 3;
                j++;
                break;
            case "4":
                i = i * 10 + 4;
                j++;
                break;
            case "5":
                i = i * 10 + 5;
                j++;
                break;
            case "6":
                i = i * 10 + 6;
                j++;
                break;
            case "7":
                i = i * 10 + 7;
                j++;
                break;
            case "8":
                i = i * 10 + 8;
                j++;
                break;
            case "9":
                i = i * 10 + 9;
                j++;
                break;
            default:
                return {
                    num: i,
                    index: j
                }
            }
        }
        return {
            num: i,
            index: j
        }
    };
    this.getFraction = function (h, k) {
        var j = 1;
        var o = 1;
        if (h.charAt(k) !== "/") {
            var i = this.getNumber(h, k);
            j = i.num;
            k = i.index
        }
        if (h.charAt(k) === "/") {
            k++;
            if (h.charAt(k) === "/") {
                var n = 0.5;
                while (h.charAt(k++) === "/") {
                    n = n / 2
                }
                return {
                    value: j * n,
                    index: k - 1
                }
            } else {
                var l = k;
                var m = this.getNumber(h, k);
                if (m.num === 0 && l === k) {
                    m.num = 2
                }
                if (m.num !== 0) {
                    o = m.num
                }
                k = m.index
            }
        }
        return {
            value: j / o,
            index: k
        }
    };
    this.theReverser = function (h) {
        if (window.ABCJS.parse.endsWith(h, ", The")) {
            return "The " + h.substring(0, h.length - 5)
        }
        if (window.ABCJS.parse.endsWith(h, ", A")) {
            return "A " + h.substring(0, h.length - 3)
        }
        return h
    };
    this.stripComment = function (j) {
        var h = j.indexOf("%");
        if (h >= 0) {
            return window.ABCJS.parse.strip(j.substring(0, h))
        }
        return window.ABCJS.parse.strip(j)
    };
    this.getInt = function (l) {
        var h = parseInt(l);
        if (isNaN(h)) {
            return {
                digits: 0
            }
        }
        var k = "" + h;
        var j = l.indexOf(k);
        return {
            value: h,
            digits: j + k.length
        }
    };
    this.getFloat = function (l) {
        var h = parseFloat(l);
        if (isNaN(h)) {
            return {
                digits: 0
            }
        }
        var k = "" + h;
        var j = l.indexOf(k);
        return {
            value: h,
            digits: j + k.length
        }
    };
    this.getMeasurement = function (k) {
        if (k.length === 0) {
            return {
                used: 0
            }
        }
        var j = 1;
        var i = "";
        if (k[0].token === "-") {
            k.shift();
            i = "-";
            j++
        } else {
            if (k[0].type !== "number") {
                return {
                    used: 0
                }
            }
        }
        i += k.shift().token;
        if (k.length === 0) {
            return {
                used: 1,
                value: parseInt(i)
            }
        }
        var h = k.shift();
        if (h.token === ".") {
            j++;
            if (k.length === 0) {
                return {
                    used: j,
                    value: parseInt(i)
                }
            }
            if (k[0].type === "number") {
                h = k.shift();
                i = i + "." + h.token;
                j++;
                if (k.length === 0) {
                    return {
                        used: j,
                        value: parseFloat(i)
                    }
                }
            }
            h = k.shift()
        }
        switch (h.token) {
        case "pt":
            return {
                used: j + 1,
                value: parseFloat(i)
            };
        case "cm":
            return {
                used: j + 1,
                value: parseFloat(i) / 2.54 * 72
            };
        case "in":
            return {
                used: j + 1,
                value: parseFloat(i) * 72
            };
        default:
            k.unshift(h);
            return {
                used: j,
                value: parseFloat(i)
            }
        }
        return {
            used: 0
        }
    };
    var a = function (h) {
        while (h.indexOf("\\n") !== -1) {
            h = h.replace("\\n", "\n")
        }
        return h
    };
    this.getBrackettedSubstring = function (h, j, n, l) {
        var k = l || h.charAt(j);
        var m = j + 1;
        while ((m < h.length) && (h.charAt(m) !== k)) {
            ++m
        }
        if (h.charAt(m) === k) {
            return [m - j + 1, a(h.substring(j + 1, m)), true]
        } else {
            m = j + n;
            if (m > h.length - 1) {
                m = h.length - 1
            }
            return [m - j + 1, a(h.substring(j + 1, m)), false]
        }
    }
};
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.write) {
    window.ABCJS.write = {}
}
ABCJS.write.Glyphs = function () {
    var a = {
        "rests.whole": {
            d: [
                ["M", 0.06, 0.03],
                ["l", 0.09, - 0.06],
                ["l", 5.46, 0],
                ["l", 5.49, 0],
                ["l", 0.09, 0.06],
                ["l", 0.06, 0.09],
                ["l", 0, 2.19],
                ["l", 0, 2.19],
                ["l", - 0.06, 0.09],
                ["l", - 0.09, 0.06],
                ["l", - 5.49, 0],
                ["l", - 5.46, 0],
                ["l", - 0.09, - 0.06],
                ["l", - 0.06, - 0.09],
                ["l", 0, - 2.19],
                ["l", 0, - 2.19],
                ["z"]
            ],
            w: 11.25,
            h: 4.68
        },
        "rests.half": {
            d: [
                ["M", 0.06, - 4.62],
                ["l", 0.09, - 0.06],
                ["l", 5.46, 0],
                ["l", 5.49, 0],
                ["l", 0.09, 0.06],
                ["l", 0.06, 0.09],
                ["l", 0, 2.19],
                ["l", 0, 2.19],
                ["l", - 0.06, 0.09],
                ["l", - 0.09, 0.06],
                ["l", - 5.49, 0],
                ["l", - 5.46, 0],
                ["l", - 0.09, - 0.06],
                ["l", - 0.06, - 0.09],
                ["l", 0, - 2.19],
                ["l", 0, - 2.19],
                ["z"]
            ],
            w: 11.25,
            h: 4.68
        },
        "rests.quarter": {
            d: [
                ["M", 1.89, - 11.82],
                ["c", 0.12, - 0.06, 0.24, - 0.06, 0.36, - 0.03],
                ["c", 0.09, 0.06, 4.74, 5.58, 4.86, 5.82],
                ["c", 0.21, 0.39, 0.15, 0.78, - 0.15, 1.26],
                ["c", - 0.24, 0.33, - 0.72, 0.81, - 1.62, 1.56],
                ["c", - 0.45, 0.36, - 0.87, 0.75, - 0.96, 0.84],
                ["c", - 0.93, 0.99, - 1.14, 2.49, - 0.6, 3.63],
                ["c", 0.18, 0.39, 0.27, 0.48, 1.32, 1.68],
                ["c", 1.92, 2.25, 1.83, 2.16, 1.83, 2.34],
                ["c", - 0, 0.18, - 0.18, 0.36, - 0.36, 0.39],
                ["c", - 0.15, - 0, - 0.27, - 0.06, - 0.48, - 0.27],
                ["c", - 0.75, - 0.75, - 2.46, - 1.29, - 3.39, - 1.08],
                ["c", - 0.45, 0.09, - 0.69, 0.27, - 0.9, 0.69],
                ["c", - 0.12, 0.3, - 0.21, 0.66, - 0.24, 1.14],
                ["c", - 0.03, 0.66, 0.09, 1.35, 0.3, 2.01],
                ["c", 0.15, 0.42, 0.24, 0.66, 0.45, 0.96],
                ["c", 0.18, 0.24, 0.18, 0.33, 0.03, 0.42],
                ["c", - 0.12, 0.06, - 0.18, 0.03, - 0.45, - 0.3],
                ["c", - 1.08, - 1.38, - 2.07, - 3.36, - 2.4, - 4.83],
                ["c", - 0.27, - 1.05, - 0.15, - 1.77, 0.27, - 2.07],
                ["c", 0.21, - 0.12, 0.42, - 0.15, 0.87, - 0.15],
                ["c", 0.87, 0.06, 2.1, 0.39, 3.3, 0.9],
                ["l", 0.39, 0.18],
                ["l", - 1.65, - 1.95],
                ["c", - 2.52, - 2.97, - 2.61, - 3.09, - 2.7, - 3.27],
                ["c", - 0.09, - 0.24, - 0.12, - 0.48, - 0.03, - 0.75],
                ["c", 0.15, - 0.48, 0.57, - 0.96, 1.83, - 2.01],
                ["c", 0.45, - 0.36, 0.84, - 0.72, 0.93, - 0.78],
                ["c", 0.69, - 0.75, 1.02, - 1.8, 0.9, - 2.79],
                ["c", - 0.06, - 0.33, - 0.21, - 0.84, - 0.39, - 1.11],
                ["c", - 0.09, - 0.15, - 0.45, - 0.6, - 0.81, - 1.05],
                ["c", - 0.36, - 0.42, - 0.69, - 0.81, - 0.72, - 0.87],
                ["c", - 0.09, - 0.18, - 0, - 0.42, 0.21, - 0.51],
                ["z"]
            ],
            w: 7.888,
            h: 21.435
        },
        "rests.8th": {
            d: [
                ["M", 1.68, - 6.12],
                ["c", 0.66, - 0.09, 1.23, 0.09, 1.68, 0.51],
                ["c", 0.27, 0.3, 0.39, 0.54, 0.57, 1.26],
                ["c", 0.09, 0.33, 0.18, 0.66, 0.21, 0.72],
                ["c", 0.12, 0.27, 0.33, 0.45, 0.6, 0.48],
                ["c", 0.12, 0, 0.18, 0, 0.33, - 0.09],
                ["c", 0.39, - 0.18, 1.32, - 1.29, 1.68, - 1.98],
                ["c", 0.09, - 0.21, 0.24, - 0.3, 0.39, - 0.3],
                ["c", 0.12, 0, 0.27, 0.09, 0.33, 0.18],
                ["c", 0.03, 0.06, - 0.27, 1.11, - 1.86, 6.42],
                ["c", - 1.02, 3.48, - 1.89, 6.39, - 1.92, 6.42],
                ["c", 0, 0.03, - 0.12, 0.12, - 0.24, 0.15],
                ["c", - 0.18, 0.09, - 0.21, 0.09, - 0.45, 0.09],
                ["c", - 0.24, 0, - 0.3, 0, - 0.48, - 0.06],
                ["c", - 0.09, - 0.06, - 0.21, - 0.12, - 0.21, - 0.15],
                ["c", - 0.06, - 0.03, 0.15, - 0.57, 1.68, - 4.92],
                ["c", 0.96, - 2.67, 1.74, - 4.89, 1.71, - 4.89],
                ["l", - 0.51, 0.15],
                ["c", - 1.08, 0.36, - 1.74, 0.48, - 2.55, 0.48],
                ["c", - 0.66, 0, - 0.84, - 0.03, - 1.32, - 0.27],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.33, - 0.45, 0.84, - 0.81, 1.38, - 0.9],
                ["z"]
            ],
            w: 7.534,
            h: 13.883
        },
        "rests.16th": {
            d: [
                ["M", 3.33, - 6.12],
                ["c", 0.66, - 0.09, 1.23, 0.09, 1.68, 0.51],
                ["c", 0.27, 0.3, 0.39, 0.54, 0.57, 1.26],
                ["c", 0.09, 0.33, 0.18, 0.66, 0.21, 0.72],
                ["c", 0.15, 0.39, 0.57, 0.57, 0.87, 0.42],
                ["c", 0.39, - 0.18, 1.2, - 1.23, 1.62, - 2.07],
                ["c", 0.06, - 0.15, 0.24, - 0.24, 0.36, - 0.24],
                ["c", 0.12, 0, 0.27, 0.09, 0.33, 0.18],
                ["c", 0.03, 0.06, - 0.45, 1.86, - 2.67, 10.17],
                ["c", - 1.5, 5.55, - 2.73, 10.14, - 2.76, 10.17],
                ["c", - 0.03, 0.03, - 0.12, 0.12, - 0.24, 0.15],
                ["c", - 0.18, 0.09, - 0.21, 0.09, - 0.45, 0.09],
                ["c", - 0.24, 0, - 0.3, 0, - 0.48, - 0.06],
                ["c", - 0.09, - 0.06, - 0.21, - 0.12, - 0.21, - 0.15],
                ["c", - 0.06, - 0.03, 0.12, - 0.57, 1.44, - 4.92],
                ["c", 0.81, - 2.67, 1.47, - 4.86, 1.47, - 4.89],
                ["c", - 0.03, 0, - 0.27, 0.06, - 0.54, 0.15],
                ["c", - 1.08, 0.36, - 1.77, 0.48, - 2.58, 0.48],
                ["c", - 0.66, 0, - 0.84, - 0.03, - 1.32, - 0.27],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.72, - 1.05, 2.22, - 1.23, 3.06, - 0.42],
                ["c", 0.3, 0.33, 0.42, 0.6, 0.6, 1.38],
                ["c", 0.09, 0.45, 0.21, 0.78, 0.33, 0.9],
                ["c", 0.09, 0.09, 0.27, 0.18, 0.45, 0.21],
                ["c", 0.12, 0, 0.18, 0, 0.33, - 0.09],
                ["c", 0.33, - 0.15, 1.02, - 0.93, 1.41, - 1.59],
                ["c", 0.12, - 0.21, 0.18, - 0.39, 0.39, - 1.08],
                ["c", 0.66, - 2.1, 1.17, - 3.84, 1.17, - 3.87],
                ["c", 0, 0, - 0.21, 0.06, - 0.42, 0.15],
                ["c", - 0.51, 0.15, - 1.2, 0.33, - 1.68, 0.42],
                ["c", - 0.33, 0.06, - 0.51, 0.06, - 0.96, 0.06],
                ["c", - 0.66, 0, - 0.84, - 0.03, - 1.32, - 0.27],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.33, - 0.45, 0.84, - 0.81, 1.38, - 0.9],
                ["z"]
            ],
            w: 9.724,
            h: 21.383
        },
        "rests.32nd": {
            d: [
                ["M", 4.23, - 13.62],
                ["c", 0.66, - 0.09, 1.23, 0.09, 1.68, 0.51],
                ["c", 0.27, 0.3, 0.39, 0.54, 0.57, 1.26],
                ["c", 0.09, 0.33, 0.18, 0.66, 0.21, 0.72],
                ["c", 0.12, 0.27, 0.33, 0.45, 0.6, 0.48],
                ["c", 0.12, 0, 0.18, 0, 0.27, - 0.06],
                ["c", 0.33, - 0.21, 0.99, - 1.11, 1.44, - 1.98],
                ["c", 0.09, - 0.24, 0.21, - 0.33, 0.39, - 0.33],
                ["c", 0.12, 0, 0.27, 0.09, 0.33, 0.18],
                ["c", 0.03, 0.06, - 0.57, 2.67, - 3.21, 13.89],
                ["c", - 1.8, 7.62, - 3.3, 13.89, - 3.3, 13.92],
                ["c", - 0.03, 0.06, - 0.12, 0.12, - 0.24, 0.18],
                ["c", - 0.21, 0.09, - 0.24, 0.09, - 0.48, 0.09],
                ["c", - 0.24, - 0, - 0.3, - 0, - 0.48, - 0.06],
                ["c", - 0.09, - 0.06, - 0.21, - 0.12, - 0.21, - 0.15],
                ["c", - 0.06, - 0.03, 0.09, - 0.57, 1.23, - 4.92],
                ["c", 0.69, - 2.67, 1.26, - 4.86, 1.29, - 4.89],
                ["c", 0, - 0.03, - 0.12, - 0.03, - 0.48, 0.12],
                ["c", - 1.17, 0.39, - 2.22, 0.57, - 3, 0.54],
                ["c", - 0.42, - 0.03, - 0.75, - 0.12, - 1.11, - 0.3],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.72, - 1.05, 2.22, - 1.23, 3.06, - 0.42],
                ["c", 0.3, 0.33, 0.42, 0.6, 0.6, 1.38],
                ["c", 0.09, 0.45, 0.21, 0.78, 0.33, 0.9],
                ["c", 0.12, 0.09, 0.3, 0.18, 0.48, 0.21],
                ["c", 0.12, - 0, 0.18, - 0, 0.3, - 0.09],
                ["c", 0.42, - 0.21, 1.29, - 1.29, 1.56, - 1.89],
                ["c", 0.03, - 0.12, 1.23, - 4.59, 1.23, - 4.65],
                ["c", 0, - 0.03, - 0.18, 0.03, - 0.39, 0.12],
                ["c", - 0.63, 0.18, - 1.2, 0.36, - 1.74, 0.45],
                ["c", - 0.39, 0.06, - 0.54, 0.06, - 1.02, 0.06],
                ["c", - 0.66, - 0, - 0.84, - 0.03, - 1.32, - 0.27],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.72, - 1.05, 2.22, - 1.23, 3.06, - 0.42],
                ["c", 0.3, 0.33, 0.42, 0.6, 0.6, 1.38],
                ["c", 0.09, 0.45, 0.21, 0.78, 0.33, 0.9],
                ["c", 0.18, 0.18, 0.51, 0.27, 0.72, 0.15],
                ["c", 0.3, - 0.12, 0.69, - 0.57, 1.08, - 1.17],
                ["c", 0.42, - 0.6, 0.39, - 0.51, 1.05, - 3.03],
                ["c", 0.33, - 1.26, 0.6, - 2.31, 0.6, - 2.34],
                ["c", 0, - 0, - 0.21, 0.03, - 0.45, 0.12],
                ["c", - 0.57, 0.18, - 1.14, 0.33, - 1.62, 0.42],
                ["c", - 0.33, 0.06, - 0.51, 0.06, - 0.96, 0.06],
                ["c", - 0.66, - 0, - 0.84, - 0.03, - 1.32, - 0.27],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.33, - 0.45, 0.84, - 0.81, 1.38, - 0.9],
                ["z"]
            ],
            w: 11.373,
            h: 28.883
        },
        "rests.64th": {
            d: [
                ["M", 5.13, - 13.62],
                ["c", 0.66, - 0.09, 1.23, 0.09, 1.68, 0.51],
                ["c", 0.27, 0.3, 0.39, 0.54, 0.57, 1.26],
                ["c", 0.15, 0.63, 0.21, 0.81, 0.33, 0.96],
                ["c", 0.18, 0.21, 0.54, 0.3, 0.75, 0.18],
                ["c", 0.24, - 0.12, 0.63, - 0.66, 1.08, - 1.56],
                ["c", 0.33, - 0.66, 0.39, - 0.72, 0.6, - 0.72],
                ["c", 0.12, 0, 0.27, 0.09, 0.33, 0.18],
                ["c", 0.03, 0.06, - 0.69, 3.66, - 3.54, 17.64],
                ["c", - 1.95, 9.66, - 3.57, 17.61, - 3.57, 17.64],
                ["c", - 0.03, 0.06, - 0.12, 0.12, - 0.24, 0.18],
                ["c", - 0.21, 0.09, - 0.24, 0.09, - 0.48, 0.09],
                ["c", - 0.24, 0, - 0.3, 0, - 0.48, - 0.06],
                ["c", - 0.09, - 0.06, - 0.21, - 0.12, - 0.21, - 0.15],
                ["c", - 0.06, - 0.03, 0.06, - 0.57, 1.05, - 4.95],
                ["c", 0.6, - 2.7, 1.08, - 4.89, 1.08, - 4.92],
                ["c", 0, 0, - 0.24, 0.06, - 0.51, 0.15],
                ["c", - 0.66, 0.24, - 1.2, 0.36, - 1.77, 0.48],
                ["c", - 0.42, 0.06, - 0.57, 0.06, - 1.05, 0.06],
                ["c", - 0.69, 0, - 0.87, - 0.03, - 1.35, - 0.27],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.72, - 1.05, 2.22, - 1.23, 3.06, - 0.42],
                ["c", 0.3, 0.33, 0.42, 0.6, 0.6, 1.38],
                ["c", 0.09, 0.45, 0.21, 0.78, 0.33, 0.9],
                ["c", 0.09, 0.09, 0.27, 0.18, 0.45, 0.21],
                ["c", 0.21, 0.03, 0.39, - 0.09, 0.72, - 0.42],
                ["c", 0.45, - 0.45, 1.02, - 1.26, 1.17, - 1.65],
                ["c", 0.03, - 0.09, 0.27, - 1.14, 0.54, - 2.34],
                ["c", 0.27, - 1.2, 0.48, - 2.19, 0.51, - 2.22],
                ["c", 0, - 0.03, - 0.09, - 0.03, - 0.48, 0.12],
                ["c", - 1.17, 0.39, - 2.22, 0.57, - 3, 0.54],
                ["c", - 0.42, - 0.03, - 0.75, - 0.12, - 1.11, - 0.3],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.36, - 0.54, 0.96, - 0.87, 1.65, - 0.93],
                ["c", 0.54, - 0.03, 1.02, 0.15, 1.41, 0.54],
                ["c", 0.27, 0.3, 0.39, 0.54, 0.57, 1.26],
                ["c", 0.09, 0.33, 0.18, 0.66, 0.21, 0.72],
                ["c", 0.15, 0.39, 0.57, 0.57, 0.9, 0.42],
                ["c", 0.36, - 0.18, 1.2, - 1.26, 1.47, - 1.89],
                ["c", 0.03, - 0.09, 0.3, - 1.2, 0.57, - 2.43],
                ["l", 0.51, - 2.28],
                ["l", - 0.54, 0.18],
                ["c", - 1.11, 0.36, - 1.8, 0.48, - 2.61, 0.48],
                ["c", - 0.66, 0, - 0.84, - 0.03, - 1.32, - 0.27],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.36, - 0.54, 0.96, - 0.87, 1.65, - 0.93],
                ["c", 0.54, - 0.03, 1.02, 0.15, 1.41, 0.54],
                ["c", 0.27, 0.3, 0.39, 0.54, 0.57, 1.26],
                ["c", 0.15, 0.63, 0.21, 0.81, 0.33, 0.96],
                ["c", 0.21, 0.21, 0.54, 0.3, 0.75, 0.18],
                ["c", 0.36, - 0.18, 0.93, - 0.93, 1.29, - 1.68],
                ["c", 0.12, - 0.24, 0.18, - 0.48, 0.63, - 2.55],
                ["l", 0.51, - 2.31],
                ["c", 0, - 0.03, - 0.18, 0.03, - 0.39, 0.12],
                ["c", - 1.14, 0.36, - 2.1, 0.54, - 2.82, 0.51],
                ["c", - 0.42, - 0.03, - 0.75, - 0.12, - 1.11, - 0.3],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.33, - 0.45, 0.84, - 0.81, 1.38, - 0.9],
                ["z"]
            ],
            w: 12.453,
            h: 36.383
        },
        "rests.128th": {
            d: [
                ["M", 6.03, - 21.12],
                ["c", 0.66, - 0.09, 1.23, 0.09, 1.68, 0.51],
                ["c", 0.27, 0.3, 0.39, 0.54, 0.57, 1.26],
                ["c", 0.09, 0.33, 0.18, 0.66, 0.21, 0.72],
                ["c", 0.12, 0.27, 0.33, 0.45, 0.6, 0.48],
                ["c", 0.21, 0, 0.33, - 0.06, 0.54, - 0.36],
                ["c", 0.15, - 0.21, 0.54, - 0.93, 0.78, - 1.47],
                ["c", 0.15, - 0.33, 0.18, - 0.39, 0.3, - 0.48],
                ["c", 0.18, - 0.09, 0.45, 0, 0.51, 0.15],
                ["c", 0.03, 0.09, - 7.11, 42.75, - 7.17, 42.84],
                ["c", - 0.03, 0.03, - 0.15, 0.09, - 0.24, 0.15],
                ["c", - 0.18, 0.06, - 0.24, 0.06, - 0.45, 0.06],
                ["c", - 0.24, - 0, - 0.3, - 0, - 0.48, - 0.06],
                ["c", - 0.09, - 0.06, - 0.21, - 0.12, - 0.21, - 0.15],
                ["c", - 0.06, - 0.03, 0.03, - 0.57, 0.84, - 4.98],
                ["c", 0.51, - 2.7, 0.93, - 4.92, 0.9, - 4.92],
                ["c", 0, - 0, - 0.15, 0.06, - 0.36, 0.12],
                ["c", - 0.78, 0.27, - 1.62, 0.48, - 2.31, 0.57],
                ["c", - 0.15, 0.03, - 0.54, 0.03, - 0.81, 0.03],
                ["c", - 0.66, - 0, - 0.84, - 0.03, - 1.32, - 0.27],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.36, - 0.54, 0.96, - 0.87, 1.65, - 0.93],
                ["c", 0.54, - 0.03, 1.02, 0.15, 1.41, 0.54],
                ["c", 0.27, 0.3, 0.39, 0.54, 0.57, 1.26],
                ["c", 0.09, 0.33, 0.18, 0.66, 0.21, 0.72],
                ["c", 0.12, 0.27, 0.33, 0.45, 0.63, 0.48],
                ["c", 0.12, - 0, 0.18, - 0, 0.3, - 0.09],
                ["c", 0.42, - 0.21, 1.14, - 1.11, 1.5, - 1.83],
                ["c", 0.12, - 0.27, 0.12, - 0.27, 0.54, - 2.52],
                ["c", 0.24, - 1.23, 0.42, - 2.25, 0.39, - 2.25],
                ["c", 0, - 0, - 0.24, 0.06, - 0.51, 0.18],
                ["c", - 1.26, 0.39, - 2.25, 0.57, - 3.06, 0.54],
                ["c", - 0.42, - 0.03, - 0.75, - 0.12, - 1.11, - 0.3],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.36, - 0.54, 0.96, - 0.87, 1.65, - 0.93],
                ["c", 0.54, - 0.03, 1.02, 0.15, 1.41, 0.54],
                ["c", 0.27, 0.3, 0.39, 0.54, 0.57, 1.26],
                ["c", 0.15, 0.63, 0.21, 0.81, 0.33, 0.96],
                ["c", 0.18, 0.21, 0.51, 0.3, 0.75, 0.18],
                ["c", 0.36, - 0.15, 1.05, - 0.99, 1.41, - 1.77],
                ["l", 0.15, - 0.3],
                ["l", 0.42, - 2.25],
                ["c", 0.21, - 1.26, 0.42, - 2.28, 0.39, - 2.28],
                ["l", - 0.51, 0.15],
                ["c", - 1.11, 0.39, - 1.89, 0.51, - 2.7, 0.51],
                ["c", - 0.66, - 0, - 0.84, - 0.03, - 1.32, - 0.27],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.36, - 0.54, 0.96, - 0.87, 1.65, - 0.93],
                ["c", 0.54, - 0.03, 1.02, 0.15, 1.41, 0.54],
                ["c", 0.27, 0.3, 0.39, 0.54, 0.57, 1.26],
                ["c", 0.15, 0.63, 0.21, 0.81, 0.33, 0.96],
                ["c", 0.18, 0.18, 0.48, 0.27, 0.72, 0.21],
                ["c", 0.33, - 0.12, 1.14, - 1.26, 1.41, - 1.95],
                ["c", 0, - 0.09, 0.21, - 1.11, 0.45, - 2.34],
                ["c", 0.21, - 1.2, 0.39, - 2.22, 0.39, - 2.28],
                ["c", 0.03, - 0.03, 0, - 0.03, - 0.45, 0.12],
                ["c", - 0.57, 0.18, - 1.2, 0.33, - 1.71, 0.42],
                ["c", - 0.3, 0.06, - 0.51, 0.06, - 0.93, 0.06],
                ["c", - 0.66, - 0, - 0.84, - 0.03, - 1.32, - 0.27],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.36, - 0.54, 0.96, - 0.87, 1.65, - 0.93],
                ["c", 0.54, - 0.03, 1.02, 0.15, 1.41, 0.54],
                ["c", 0.27, 0.3, 0.39, 0.54, 0.57, 1.26],
                ["c", 0.09, 0.33, 0.18, 0.66, 0.21, 0.72],
                ["c", 0.12, 0.27, 0.33, 0.45, 0.6, 0.48],
                ["c", 0.18, - 0, 0.36, - 0.09, 0.57, - 0.33],
                ["c", 0.33, - 0.36, 0.78, - 1.14, 0.93, - 1.56],
                ["c", 0.03, - 0.12, 0.24, - 1.2, 0.45, - 2.4],
                ["c", 0.24, - 1.2, 0.42, - 2.22, 0.42, - 2.28],
                ["c", 0.03, - 0.03, 0, - 0.03, - 0.39, 0.09],
                ["c", - 1.05, 0.36, - 1.8, 0.48, - 2.58, 0.48],
                ["c", - 0.63, - 0, - 0.84, - 0.03, - 1.29, - 0.27],
                ["c", - 1.32, - 0.63, - 1.77, - 2.16, - 1.02, - 3.3],
                ["c", 0.33, - 0.45, 0.84, - 0.81, 1.38, - 0.9],
                ["z"]
            ],
            w: 12.992,
            h: 43.883
        },
        "accidentals.sharp": {
            d: [
                ["M", 5.73, - 11.19],
                ["c", 0.21, - 0.12, 0.54, - 0.03, 0.66, 0.24],
                ["c", 0.06, 0.12, 0.06, 0.21, 0.06, 2.31],
                ["c", 0, 1.23, 0, 2.22, 0.03, 2.22],
                ["c", 0, - 0, 0.27, - 0.12, 0.6, - 0.24],
                ["c", 0.69, - 0.27, 0.78, - 0.3, 0.96, - 0.15],
                ["c", 0.21, 0.15, 0.21, 0.18, 0.21, 1.38],
                ["c", 0, 1.02, 0, 1.11, - 0.06, 1.2],
                ["c", - 0.03, 0.06, - 0.09, 0.12, - 0.12, 0.15],
                ["c", - 0.06, 0.03, - 0.42, 0.21, - 0.84, 0.36],
                ["l", - 0.75, 0.33],
                ["l", - 0.03, 2.43],
                ["c", 0, 1.32, 0, 2.43, 0.03, 2.43],
                ["c", 0, - 0, 0.27, - 0.12, 0.6, - 0.24],
                ["c", 0.69, - 0.27, 0.78, - 0.3, 0.96, - 0.15],
                ["c", 0.21, 0.15, 0.21, 0.18, 0.21, 1.38],
                ["c", 0, 1.02, 0, 1.11, - 0.06, 1.2],
                ["c", - 0.03, 0.06, - 0.09, 0.12, - 0.12, 0.15],
                ["c", - 0.06, 0.03, - 0.42, 0.21, - 0.84, 0.36],
                ["l", - 0.75, 0.33],
                ["l", - 0.03, 2.52],
                ["c", 0, 2.28, - 0.03, 2.55, - 0.06, 2.64],
                ["c", - 0.21, 0.36, - 0.72, 0.36, - 0.93, - 0],
                ["c", - 0.03, - 0.09, - 0.06, - 0.33, - 0.06, - 2.43],
                ["l", 0, - 2.31],
                ["l", - 1.29, 0.51],
                ["l", - 1.26, 0.51],
                ["l", 0, 2.43],
                ["c", 0, 2.58, 0, 2.52, - 0.15, 2.67],
                ["c", - 0.06, 0.09, - 0.27, 0.18, - 0.36, 0.18],
                ["c", - 0.12, - 0, - 0.33, - 0.09, - 0.39, - 0.18],
                ["c", - 0.15, - 0.15, - 0.15, - 0.09, - 0.15, - 2.43],
                ["c", 0, - 1.23, 0, - 2.22, - 0.03, - 2.22],
                ["c", 0, - 0, - 0.27, 0.12, - 0.6, 0.24],
                ["c", - 0.69, 0.27, - 0.78, 0.3, - 0.96, 0.15],
                ["c", - 0.21, - 0.15, - 0.21, - 0.18, - 0.21, - 1.38],
                ["c", 0, - 1.02, 0, - 1.11, 0.06, - 1.2],
                ["c", 0.03, - 0.06, 0.09, - 0.12, 0.12, - 0.15],
                ["c", 0.06, - 0.03, 0.42, - 0.21, 0.84, - 0.36],
                ["l", 0.78, - 0.33],
                ["l", 0, - 2.43],
                ["c", 0, - 1.32, 0, - 2.43, - 0.03, - 2.43],
                ["c", 0, - 0, - 0.27, 0.12, - 0.6, 0.24],
                ["c", - 0.69, 0.27, - 0.78, 0.3, - 0.96, 0.15],
                ["c", - 0.21, - 0.15, - 0.21, - 0.18, - 0.21, - 1.38],
                ["c", 0, - 1.02, 0, - 1.11, 0.06, - 1.2],
                ["c", 0.03, - 0.06, 0.09, - 0.12, 0.12, - 0.15],
                ["c", 0.06, - 0.03, 0.42, - 0.21, 0.84, - 0.36],
                ["l", 0.78, - 0.33],
                ["l", 0, - 2.52],
                ["c", 0, - 2.28, 0.03, - 2.55, 0.06, - 2.64],
                ["c", 0.21, - 0.36, 0.72, - 0.36, 0.93, 0],
                ["c", 0.03, 0.09, 0.06, 0.33, 0.06, 2.43],
                ["l", 0.03, 2.31],
                ["l", 1.26, - 0.51],
                ["l", 1.26, - 0.51],
                ["l", 0, - 2.43],
                ["c", 0, - 2.28, 0, - 2.43, 0.06, - 2.55],
                ["c", 0.06, - 0.12, 0.12, - 0.18, 0.27, - 0.24],
                ["z"],
                ["m", - 0.33, 10.65],
                ["l", 0, - 2.43],
                ["l", - 1.29, 0.51],
                ["l", - 1.26, 0.51],
                ["l", 0, 2.46],
                ["l", 0, 2.43],
                ["l", 0.09, - 0.03],
                ["c", 0.06, - 0.03, 0.63, - 0.27, 1.29, - 0.51],
                ["l", 1.17, - 0.48],
                ["l", 0, - 2.46],
                ["z"]
            ],
            w: 8.25,
            h: 22.462
        },
        "accidentals.halfsharp": {
            d: [
                ["M", 2.43, - 10.05],
                ["c", 0.21, - 0.12, 0.54, - 0.03, 0.66, 0.24],
                ["c", 0.06, 0.12, 0.06, 0.21, 0.06, 2.01],
                ["c", 0, 1.05, 0, 1.89, 0.03, 1.89],
                ["l", 0.72, - 0.48],
                ["c", 0.69, - 0.48, 0.69, - 0.51, 0.87, - 0.51],
                ["c", 0.15, 0, 0.18, 0.03, 0.27, 0.09],
                ["c", 0.21, 0.15, 0.21, 0.18, 0.21, 1.41],
                ["c", 0, 1.11, - 0.03, 1.14, - 0.09, 1.23],
                ["c", - 0.03, 0.03, - 0.48, 0.39, - 1.02, 0.75],
                ["l", - 0.99, 0.66],
                ["l", 0, 2.37],
                ["c", 0, 1.32, 0, 2.37, 0.03, 2.37],
                ["l", 0.72, - 0.48],
                ["c", 0.69, - 0.48, 0.69, - 0.51, 0.87, - 0.51],
                ["c", 0.15, 0, 0.18, 0.03, 0.27, 0.09],
                ["c", 0.21, 0.15, 0.21, 0.18, 0.21, 1.41],
                ["c", 0, 1.11, - 0.03, 1.14, - 0.09, 1.23],
                ["c", - 0.03, 0.03, - 0.48, 0.39, - 1.02, 0.75],
                ["l", - 0.99, 0.66],
                ["l", 0, 2.25],
                ["c", 0, 1.95, 0, 2.28, - 0.06, 2.37],
                ["c", - 0.06, 0.12, - 0.12, 0.21, - 0.24, 0.27],
                ["c", - 0.27, 0.12, - 0.54, 0.03, - 0.69, - 0.24],
                ["c", - 0.06, - 0.12, - 0.06, - 0.21, - 0.06, - 2.01],
                ["c", 0, - 1.05, 0, - 1.89, - 0.03, - 1.89],
                ["l", - 0.72, 0.48],
                ["c", - 0.69, 0.48, - 0.69, 0.48, - 0.87, 0.48],
                ["c", - 0.15, 0, - 0.18, 0, - 0.27, - 0.06],
                ["c", - 0.21, - 0.15, - 0.21, - 0.18, - 0.21, - 1.41],
                ["c", 0, - 1.11, 0.03, - 1.14, 0.09, - 1.23],
                ["c", 0.03, - 0.03, 0.48, - 0.39, 1.02, - 0.75],
                ["l", 0.99, - 0.66],
                ["l", 0, - 2.37],
                ["c", 0, - 1.32, 0, - 2.37, - 0.03, - 2.37],
                ["l", - 0.72, 0.48],
                ["c", - 0.69, 0.48, - 0.69, 0.48, - 0.87, 0.48],
                ["c", - 0.15, 0, - 0.18, 0, - 0.27, - 0.06],
                ["c", - 0.21, - 0.15, - 0.21, - 0.18, - 0.21, - 1.41],
                ["c", 0, - 1.11, 0.03, - 1.14, 0.09, - 1.23],
                ["c", 0.03, - 0.03, 0.48, - 0.39, 1.02, - 0.75],
                ["l", 0.99, - 0.66],
                ["l", 0, - 2.25],
                ["c", 0, - 2.13, 0, - 2.28, 0.06, - 2.4],
                ["c", 0.06, - 0.12, 0.12, - 0.18, 0.27, - 0.24],
                ["z"]
            ],
            w: 5.25,
            h: 20.174
        },
        "accidentals.nat": {
            d: [
                ["M", 0.204, - 11.4],
                ["c", 0.24, - 0.06, 0.78, 0, 0.99, 0.15],
                ["c", 0.03, 0.03, 0.03, 0.48, 0, 2.61],
                ["c", - 0.03, 1.44, - 0.03, 2.61, - 0.03, 2.61],
                ["c", 0, 0.03, 0.75, - 0.09, 1.68, - 0.24],
                ["c", 0.96, - 0.18, 1.71, - 0.27, 1.74, - 0.27],
                ["c", 0.15, 0.03, 0.27, 0.15, 0.36, 0.3],
                ["l", 0.06, 0.12],
                ["l", 0.09, 8.67],
                ["c", 0.09, 6.96, 0.12, 8.67, 0.09, 8.67],
                ["c", - 0.03, 0.03, - 0.12, 0.06, - 0.21, 0.09],
                ["c", - 0.24, 0.09, - 0.72, 0.09, - 0.96, 0],
                ["c", - 0.09, - 0.03, - 0.18, - 0.06, - 0.21, - 0.09],
                ["c", - 0.03, - 0.03, - 0.03, - 0.48, 0, - 2.61],
                ["c", 0.03, - 1.44, 0.03, - 2.61, 0.03, - 2.61],
                ["c", 0, - 0.03, - 0.75, 0.09, - 1.68, 0.24],
                ["c", - 0.96, 0.18, - 1.71, 0.27, - 1.74, 0.27],
                ["c", - 0.15, - 0.03, - 0.27, - 0.15, - 0.36, - 0.3],
                ["l", - 0.06, - 0.15],
                ["l", - 0.09, - 7.53],
                ["c", - 0.06, - 4.14, - 0.09, - 8.04, - 0.12, - 8.67],
                ["l", 0, - 1.11],
                ["l", 0.15, - 0.06],
                ["c", 0.09, - 0.03, 0.21, - 0.06, 0.27, - 0.09],
                ["z"],
                ["m", 3.75, 8.4],
                ["c", 0, - 0.33, 0, - 0.42, - 0.03, - 0.42],
                ["c", - 0.12, 0, - 2.79, 0.45, - 2.79, 0.48],
                ["c", - 0.03, 0, - 0.09, 6.3, - 0.09, 6.33],
                ["c", 0.03, 0, 2.79, - 0.45, 2.82, - 0.48],
                ["c", 0, 0, 0.09, - 4.53, 0.09, - 5.91],
                ["z"]
            ],
            w: 5.411,
            h: 22.8
        },
        "accidentals.flat": {
            d: [
                ["M", - 0.36, - 14.07],
                ["c", 0.33, - 0.06, 0.87, 0, 1.08, 0.15],
                ["c", 0.06, 0.03, 0.06, 0.36, - 0.03, 5.25],
                ["c", - 0.06, 2.85, - 0.09, 5.19, - 0.09, 5.19],
                ["c", 0, 0.03, 0.12, - 0.03, 0.24, - 0.12],
                ["c", 0.63, - 0.42, 1.41, - 0.66, 2.19, - 0.72],
                ["c", 0.81, - 0.03, 1.47, 0.21, 2.04, 0.78],
                ["c", 0.57, 0.54, 0.87, 1.26, 0.93, 2.04],
                ["c", 0.03, 0.57, - 0.09, 1.08, - 0.36, 1.62],
                ["c", - 0.42, 0.81, - 1.02, 1.38, - 2.82, 2.61],
                ["c", - 1.14, 0.78, - 1.44, 1.02, - 1.8, 1.44],
                ["c", - 0.18, 0.18, - 0.39, 0.39, - 0.45, 0.42],
                ["c", - 0.27, 0.18, - 0.57, 0.15, - 0.81, - 0.06],
                ["c", - 0.06, - 0.09, - 0.12, - 0.18, - 0.15, - 0.27],
                ["c", - 0.03, - 0.06, - 0.09, - 3.27, - 0.18, - 8.34],
                ["c", - 0.09, - 4.53, - 0.15, - 8.58, - 0.18, - 9.03],
                ["l", 0, - 0.78],
                ["l", 0.12, - 0.06],
                ["c", 0.06, - 0.03, 0.18, - 0.09, 0.27, - 0.12],
                ["z"],
                ["m", 3.18, 11.01],
                ["c", - 0.21, - 0.12, - 0.54, - 0.15, - 0.81, - 0.06],
                ["c", - 0.54, 0.15, - 0.99, 0.63, - 1.17, 1.26],
                ["c", - 0.06, 0.3, - 0.12, 2.88, - 0.06, 3.87],
                ["c", 0.03, 0.42, 0.03, 0.81, 0.06, 0.9],
                ["l", 0.03, 0.12],
                ["l", 0.45, - 0.39],
                ["c", 0.63, - 0.54, 1.26, - 1.17, 1.56, - 1.59],
                ["c", 0.3, - 0.42, 0.6, - 0.99, 0.72, - 1.41],
                ["c", 0.18, - 0.69, 0.09, - 1.47, - 0.18, - 2.07],
                ["c", - 0.15, - 0.3, - 0.33, - 0.51, - 0.6, - 0.63],
                ["z"]
            ],
            w: 6.75,
            h: 18.801
        },
        "accidentals.halfflat": {
            d: [
                ["M", 4.83, - 14.07],
                ["c", 0.33, - 0.06, 0.87, 0, 1.08, 0.15],
                ["c", 0.06, 0.03, 0.06, 0.6, - 0.12, 9.06],
                ["c", - 0.09, 5.55, - 0.15, 9.06, - 0.18, 9.12],
                ["c", - 0.03, 0.09, - 0.09, 0.18, - 0.15, 0.27],
                ["c", - 0.24, 0.21, - 0.54, 0.24, - 0.81, 0.06],
                ["c", - 0.06, - 0.03, - 0.27, - 0.24, - 0.45, - 0.42],
                ["c", - 0.36, - 0.42, - 0.66, - 0.66, - 1.8, - 1.44],
                ["c", - 1.23, - 0.84, - 1.83, - 1.32, - 2.25, - 1.77],
                ["c", - 0.66, - 0.78, - 0.96, - 1.56, - 0.93, - 2.46],
                ["c", 0.09, - 1.41, 1.11, - 2.58, 2.4, - 2.79],
                ["c", 0.3, - 0.06, 0.84, - 0.03, 1.23, 0.06],
                ["c", 0.54, 0.12, 1.08, 0.33, 1.53, 0.63],
                ["c", 0.12, 0.09, 0.24, 0.15, 0.24, 0.12],
                ["c", 0, 0, - 0.12, - 8.37, - 0.18, - 9.75],
                ["l", 0, - 0.66],
                ["l", 0.12, - 0.06],
                ["c", 0.06, - 0.03, 0.18, - 0.09, 0.27, - 0.12],
                ["z"],
                ["m", - 1.65, 10.95],
                ["c", - 0.6, - 0.18, - 1.08, 0.09, - 1.38, 0.69],
                ["c", - 0.27, 0.6, - 0.36, 1.38, - 0.18, 2.07],
                ["c", 0.12, 0.42, 0.42, 0.99, 0.72, 1.41],
                ["c", 0.3, 0.42, 0.93, 1.05, 1.56, 1.59],
                ["l", 0.48, 0.39],
                ["l", 0, - 0.12],
                ["c", 0.03, - 0.09, 0.03, - 0.48, 0.06, - 0.9],
                ["c", 0.03, - 0.57, 0.03, - 1.08, 0, - 2.22],
                ["c", - 0.03, - 1.62, - 0.03, - 1.62, - 0.24, - 2.07],
                ["c", - 0.21, - 0.42, - 0.6, - 0.75, - 1.02, - 0.84],
                ["z"]
            ],
            w: 6.728,
            h: 18.801
        },
        "accidentals.dblflat": {
            d: [
                ["M", - 0.36, - 14.07],
                ["c", 0.33, - 0.06, 0.87, 0, 1.08, 0.15],
                ["c", 0.06, 0.03, 0.06, 0.33, - 0.03, 4.89],
                ["c", - 0.06, 2.67, - 0.09, 5.01, - 0.09, 5.22],
                ["l", 0, 0.36],
                ["l", 0.15, - 0.15],
                ["c", 0.36, - 0.3, 0.75, - 0.51, 1.2, - 0.63],
                ["c", 0.33, - 0.09, 0.96, - 0.09, 1.26, - 0.03],
                ["c", 0.27, 0.09, 0.63, 0.27, 0.87, 0.45],
                ["l", 0.21, 0.15],
                ["l", 0, - 0.27],
                ["c", 0, - 0.15, - 0.03, - 2.43, - 0.09, - 5.1],
                ["c", - 0.09, - 4.56, - 0.09, - 4.86, - 0.03, - 4.89],
                ["c", 0.15, - 0.12, 0.39, - 0.15, 0.72, - 0.15],
                ["c", 0.3, 0, 0.54, 0.03, 0.69, 0.15],
                ["c", 0.06, 0.03, 0.06, 0.33, - 0.03, 4.95],
                ["c", - 0.06, 2.7, - 0.09, 5.04, - 0.09, 5.22],
                ["l", 0.03, 0.3],
                ["l", 0.21, - 0.15],
                ["c", 0.69, - 0.48, 1.44, - 0.69, 2.28, - 0.69],
                ["c", 0.51, 0, 0.78, 0.03, 1.2, 0.21],
                ["c", 1.32, 0.63, 2.01, 2.28, 1.53, 3.69],
                ["c", - 0.21, 0.57, - 0.51, 1.02, - 1.05, 1.56],
                ["c", - 0.42, 0.42, - 0.81, 0.72, - 1.92, 1.5],
                ["c", - 1.26, 0.87, - 1.5, 1.08, - 1.86, 1.5],
                ["c", - 0.39, 0.45, - 0.54, 0.54, - 0.81, 0.51],
                ["c", - 0.18, 0, - 0.21, 0, - 0.33, - 0.06],
                ["l", - 0.21, - 0.21],
                ["l", - 0.06, - 0.12],
                ["l", - 0.03, - 0.99],
                ["c", - 0.03, - 0.54, - 0.03, - 1.29, - 0.06, - 1.68],
                ["l", 0, - 0.69],
                ["l", - 0.21, 0.24],
                ["c", - 0.36, 0.42, - 0.75, 0.75, - 1.8, 1.62],
                ["c", - 1.02, 0.84, - 1.2, 0.99, - 1.44, 1.38],
                ["c", - 0.36, 0.51, - 0.54, 0.6, - 0.9, 0.51],
                ["c", - 0.15, - 0.03, - 0.39, - 0.27, - 0.42, - 0.42],
                ["c", - 0.03, - 0.06, - 0.09, - 3.27, - 0.18, - 8.34],
                ["c", - 0.09, - 4.53, - 0.15, - 8.58, - 0.18, - 9.03],
                ["l", 0, - 0.78],
                ["l", 0.12, - 0.06],
                ["c", 0.06, - 0.03, 0.18, - 0.09, 0.27, - 0.12],
                ["z"],
                ["m", 2.52, 10.98],
                ["c", - 0.18, - 0.09, - 0.48, - 0.12, - 0.66, - 0.06],
                ["c", - 0.39, 0.15, - 0.69, 0.54, - 0.84, 1.14],
                ["c", - 0.06, 0.24, - 0.06, 0.39, - 0.09, 1.74],
                ["c", - 0.03, 1.44, 0, 2.73, 0.06, 3.18],
                ["l", 0.03, 0.15],
                ["l", 0.27, - 0.27],
                ["c", 0.93, - 0.96, 1.5, - 1.95, 1.74, - 3.06],
                ["c", 0.06, - 0.27, 0.06, - 0.39, 0.06, - 0.96],
                ["c", 0, - 0.54, 0, - 0.69, - 0.06, - 0.93],
                ["c", - 0.09, - 0.51, - 0.27, - 0.81, - 0.51, - 0.93],
                ["z"],
                ["m", 5.43, 0],
                ["c", - 0.18, - 0.09, - 0.51, - 0.12, - 0.72, - 0.06],
                ["c", - 0.54, 0.12, - 0.96, 0.63, - 1.17, 1.26],
                ["c", - 0.06, 0.3, - 0.12, 2.88, - 0.06, 3.9],
                ["c", 0.03, 0.42, 0.03, 0.81, 0.06, 0.9],
                ["l", 0.03, 0.12],
                ["l", 0.36, - 0.3],
                ["c", 0.42, - 0.36, 1.02, - 0.96, 1.29, - 1.29],
                ["c", 0.36, - 0.45, 0.66, - 0.99, 0.81, - 1.41],
                ["c", 0.42, - 1.23, 0.15, - 2.76, - 0.6, - 3.12],
                ["z"]
            ],
            w: 11.613,
            h: 18.804
        },
        "accidentals.dblsharp": {
            d: [
                ["M", - 0.186, - 3.96],
                ["c", 0.06, - 0.03, 0.12, - 0.06, 0.15, - 0.06],
                ["c", 0.09, 0, 2.76, 0.27, 2.79, 0.3],
                ["c", 0.12, 0.03, 0.15, 0.12, 0.15, 0.51],
                ["c", 0.06, 0.96, 0.24, 1.59, 0.57, 2.1],
                ["c", 0.06, 0.09, 0.15, 0.21, 0.18, 0.24],
                ["l", 0.09, 0.06],
                ["l", 0.09, - 0.06],
                ["c", 0.03, - 0.03, 0.12, - 0.15, 0.18, - 0.24],
                ["c", 0.33, - 0.51, 0.51, - 1.14, 0.57, - 2.1],
                ["c", 0, - 0.39, 0.03, - 0.45, 0.12, - 0.51],
                ["c", 0.03, 0, 0.66, - 0.09, 1.44, - 0.15],
                ["c", 1.47, - 0.15, 1.5, - 0.15, 1.56, - 0.03],
                ["c", 0.03, 0.06, 0, 0.42, - 0.09, 1.44],
                ["c", - 0.09, 0.72, - 0.15, 1.35, - 0.15, 1.38],
                ["c", 0, 0.03, - 0.03, 0.09, - 0.06, 0.12],
                ["c", - 0.06, 0.06, - 0.12, 0.09, - 0.51, 0.09],
                ["c", - 1.08, 0.06, - 1.8, 0.3, - 2.28, 0.75],
                ["l", - 0.12, 0.09],
                ["l", 0.09, 0.09],
                ["c", 0.12, 0.15, 0.39, 0.33, 0.63, 0.45],
                ["c", 0.42, 0.18, 0.96, 0.27, 1.68, 0.33],
                ["c", 0.39, - 0, 0.45, 0.03, 0.51, 0.09],
                ["c", 0.03, 0.03, 0.06, 0.09, 0.06, 0.12],
                ["c", 0, 0.03, 0.06, 0.66, 0.15, 1.38],
                ["c", 0.09, 1.02, 0.12, 1.38, 0.09, 1.44],
                ["c", - 0.06, 0.12, - 0.09, 0.12, - 1.56, - 0.03],
                ["c", - 0.78, - 0.06, - 1.41, - 0.15, - 1.44, - 0.15],
                ["c", - 0.09, - 0.06, - 0.12, - 0.12, - 0.12, - 0.54],
                ["c", - 0.06, - 0.93, - 0.24, - 1.56, - 0.57, - 2.07],
                ["c", - 0.06, - 0.09, - 0.15, - 0.21, - 0.18, - 0.24],
                ["l", - 0.09, - 0.06],
                ["l", - 0.09, 0.06],
                ["c", - 0.03, 0.03, - 0.12, 0.15, - 0.18, 0.24],
                ["c", - 0.33, 0.51, - 0.51, 1.14, - 0.57, 2.07],
                ["c", 0, 0.42, - 0.03, 0.48, - 0.12, 0.54],
                ["c", - 0.03, 0, - 0.66, 0.09, - 1.44, 0.15],
                ["c", - 1.47, 0.15, - 1.5, 0.15, - 1.56, 0.03],
                ["c", - 0.03, - 0.06, 0, - 0.42, 0.09, - 1.44],
                ["c", 0.09, - 0.72, 0.15, - 1.35, 0.15, - 1.38],
                ["c", 0, - 0.03, 0.03, - 0.09, 0.06, - 0.12],
                ["c", 0.06, - 0.06, 0.12, - 0.09, 0.51, - 0.09],
                ["c", 0.72, - 0.06, 1.26, - 0.15, 1.68, - 0.33],
                ["c", 0.24, - 0.12, 0.51, - 0.3, 0.63, - 0.45],
                ["l", 0.09, - 0.09],
                ["l", - 0.12, - 0.09],
                ["c", - 0.48, - 0.45, - 1.2, - 0.69, - 2.28, - 0.75],
                ["c", - 0.39, 0, - 0.45, - 0.03, - 0.51, - 0.09],
                ["c", - 0.03, - 0.03, - 0.06, - 0.09, - 0.06, - 0.12],
                ["c", 0, - 0.03, - 0.06, - 0.63, - 0.12, - 1.38],
                ["c", - 0.09, - 0.72, - 0.15, - 1.35, - 0.15, - 1.38],
                ["z"]
            ],
            w: 7.961,
            h: 7.977
        },
        "dots.dot": {
            d: [
                ["M", 1.32, - 1.68],
                ["c", 0.09, - 0.03, 0.27, - 0.06, 0.39, - 0.06],
                ["c", 0.96, 0, 1.74, 0.78, 1.74, 1.71],
                ["c", 0, 0.96, - 0.78, 1.74, - 1.71, 1.74],
                ["c", - 0.96, 0, - 1.74, - 0.78, - 1.74, - 1.71],
                ["c", 0, - 0.78, 0.54, - 1.5, 1.32, - 1.68],
                ["z"]
            ],
            w: 3.45,
            h: 3.45
        },
        "noteheads.dbl": {
            d: [
                ["M", - 0.69, - 4.02],
                ["c", 0.18, - 0.09, 0.36, - 0.09, 0.54, 0],
                ["c", 0.18, 0.09, 0.24, 0.15, 0.33, 0.3],
                ["c", 0.06, 0.15, 0.06, 0.18, 0.06, 1.41],
                ["l", - 0, 1.23],
                ["l", 0.12, - 0.18],
                ["c", 0.72, - 1.26, 2.64, - 2.31, 4.86, - 2.64],
                ["c", 0.81, - 0.15, 1.11, - 0.15, 2.13, - 0.15],
                ["c", 0.99, 0, 1.29, 0, 2.1, 0.15],
                ["c", 0.75, 0.12, 1.38, 0.27, 2.04, 0.54],
                ["c", 1.35, 0.51, 2.34, 1.26, 2.82, 2.1],
                ["l", 0.12, 0.18],
                ["l", 0, - 1.23],
                ["c", 0, - 1.2, 0, - 1.26, 0.06, - 1.38],
                ["c", 0.09, - 0.18, 0.15, - 0.24, 0.33, - 0.33],
                ["c", 0.18, - 0.09, 0.36, - 0.09, 0.54, 0],
                ["c", 0.18, 0.09, 0.24, 0.15, 0.33, 0.3],
                ["l", 0.06, 0.15],
                ["l", 0, 3.54],
                ["l", 0, 3.54],
                ["l", - 0.06, 0.15],
                ["c", - 0.09, 0.18, - 0.15, 0.24, - 0.33, 0.33],
                ["c", - 0.18, 0.09, - 0.36, 0.09, - 0.54, 0],
                ["c", - 0.18, - 0.09, - 0.24, - 0.15, - 0.33, - 0.33],
                ["c", - 0.06, - 0.12, - 0.06, - 0.18, - 0.06, - 1.38],
                ["l", 0, - 1.23],
                ["l", - 0.12, 0.18],
                ["c", - 0.48, 0.84, - 1.47, 1.59, - 2.82, 2.1],
                ["c", - 0.84, 0.33, - 1.71, 0.54, - 2.85, 0.66],
                ["c", - 0.45, 0.06, - 2.16, 0.06, - 2.61, 0],
                ["c", - 1.14, - 0.12, - 2.01, - 0.33, - 2.85, - 0.66],
                ["c", - 1.35, - 0.51, - 2.34, - 1.26, - 2.82, - 2.1],
                ["l", - 0.12, - 0.18],
                ["l", 0, 1.23],
                ["c", 0, 1.23, 0, 1.26, - 0.06, 1.38],
                ["c", - 0.09, 0.18, - 0.15, 0.24, - 0.33, 0.33],
                ["c", - 0.18, 0.09, - 0.36, 0.09, - 0.54, 0],
                ["c", - 0.18, - 0.09, - 0.24, - 0.15, - 0.33, - 0.33],
                ["l", - 0.06, - 0.15],
                ["l", 0, - 3.54],
                ["c", 0, - 3.48, 0, - 3.54, 0.06, - 3.66],
                ["c", 0.09, - 0.18, 0.15, - 0.24, 0.33, - 0.33],
                ["z"],
                ["m", 7.71, 0.63],
                ["c", - 0.36, - 0.06, - 0.9, - 0.06, - 1.14, 0],
                ["c", - 0.3, 0.03, - 0.66, 0.24, - 0.87, 0.42],
                ["c", - 0.6, 0.54, - 0.9, 1.62, - 0.75, 2.82],
                ["c", 0.12, 0.93, 0.51, 1.68, 1.11, 2.31],
                ["c", 0.75, 0.72, 1.83, 1.2, 2.85, 1.26],
                ["c", 1.05, 0.06, 1.83, - 0.54, 2.1, - 1.65],
                ["c", 0.21, - 0.9, 0.12, - 1.95, - 0.24, - 2.82],
                ["c", - 0.36, - 0.81, - 1.08, - 1.53, - 1.95, - 1.95],
                ["c", - 0.3, - 0.15, - 0.78, - 0.3, - 1.11, - 0.39],
                ["z"]
            ],
            w: 16.83,
            h: 8.145
        },
        "noteheads.whole": {
            d: [
                ["M", 6.51, - 4.05],
                ["c", 0.51, - 0.03, 2.01, 0, 2.52, 0.03],
                ["c", 1.41, 0.18, 2.64, 0.51, 3.72, 1.08],
                ["c", 1.2, 0.63, 1.95, 1.41, 2.19, 2.31],
                ["c", 0.09, 0.33, 0.09, 0.9, - 0, 1.23],
                ["c", - 0.24, 0.9, - 0.99, 1.68, - 2.19, 2.31],
                ["c", - 1.08, 0.57, - 2.28, 0.9, - 3.75, 1.08],
                ["c", - 0.66, 0.06, - 2.31, 0.06, - 2.97, 0],
                ["c", - 1.47, - 0.18, - 2.67, - 0.51, - 3.75, - 1.08],
                ["c", - 1.2, - 0.63, - 1.95, - 1.41, - 2.19, - 2.31],
                ["c", - 0.09, - 0.33, - 0.09, - 0.9, - 0, - 1.23],
                ["c", 0.24, - 0.9, 0.99, - 1.68, 2.19, - 2.31],
                ["c", 1.2, - 0.63, 2.61, - 0.99, 4.23, - 1.11],
                ["z"],
                ["m", 0.57, 0.66],
                ["c", - 0.87, - 0.15, - 1.53, 0, - 2.04, 0.51],
                ["c", - 0.15, 0.15, - 0.24, 0.27, - 0.33, 0.48],
                ["c", - 0.24, 0.51, - 0.36, 1.08, - 0.33, 1.77],
                ["c", 0.03, 0.69, 0.18, 1.26, 0.42, 1.77],
                ["c", 0.6, 1.17, 1.74, 1.98, 3.18, 2.22],
                ["c", 1.11, 0.21, 1.95, - 0.15, 2.34, - 0.99],
                ["c", 0.24, - 0.51, 0.36, - 1.08, 0.33, - 1.8],
                ["c", - 0.06, - 1.11, - 0.45, - 2.04, - 1.17, - 2.76],
                ["c", - 0.63, - 0.63, - 1.47, - 1.05, - 2.4, - 1.2],
                ["z"]
            ],
            w: 14.985,
            h: 8.097
        },
        "noteheads.half": {
            d: [
                ["M", 7.44, - 4.05],
                ["c", 0.06, - 0.03, 0.27, - 0.03, 0.48, - 0.03],
                ["c", 1.05, 0, 1.71, 0.24, 2.1, 0.81],
                ["c", 0.42, 0.6, 0.45, 1.35, 0.18, 2.4],
                ["c", - 0.42, 1.59, - 1.14, 2.73, - 2.16, 3.39],
                ["c", - 1.41, 0.93, - 3.18, 1.44, - 5.4, 1.53],
                ["c", - 1.17, 0.03, - 1.89, - 0.21, - 2.28, - 0.81],
                ["c", - 0.42, - 0.6, - 0.45, - 1.35, - 0.18, - 2.4],
                ["c", 0.42, - 1.59, 1.14, - 2.73, 2.16, - 3.39],
                ["c", 0.63, - 0.42, 1.23, - 0.72, 1.98, - 0.96],
                ["c", 0.9, - 0.3, 1.65, - 0.42, 3.12, - 0.54],
                ["z"],
                ["m", 1.29, 0.87],
                ["c", - 0.27, - 0.09, - 0.63, - 0.12, - 0.9, - 0.03],
                ["c", - 0.72, 0.24, - 1.53, 0.69, - 3.27, 1.8],
                ["c", - 2.34, 1.5, - 3.3, 2.25, - 3.57, 2.79],
                ["c", - 0.36, 0.72, - 0.06, 1.5, 0.66, 1.77],
                ["c", 0.24, 0.12, 0.69, 0.09, 0.99, 0],
                ["c", 0.84, - 0.3, 1.92, - 0.93, 4.14, - 2.37],
                ["c", 1.62, - 1.08, 2.37, - 1.71, 2.61, - 2.19],
                ["c", 0.36, - 0.72, 0.06, - 1.5, - 0.66, - 1.77],
                ["z"]
            ],
            w: 10.37,
            h: 8.132
        },
        "noteheads.quarter": {
            d: [
                ["M", 6.09, - 4.05],
                ["c", 0.36, - 0.03, 1.2, 0, 1.53, 0.06],
                ["c", 1.17, 0.24, 1.89, 0.84, 2.16, 1.83],
                ["c", 0.06, 0.18, 0.06, 0.3, 0.06, 0.66],
                ["c", 0, 0.45, 0, 0.63, - 0.15, 1.08],
                ["c", - 0.66, 2.04, - 3.06, 3.93, - 5.52, 4.38],
                ["c", - 0.54, 0.09, - 1.44, 0.09, - 1.83, 0.03],
                ["c", - 1.23, - 0.27, - 1.98, - 0.87, - 2.25, - 1.86],
                ["c", - 0.06, - 0.18, - 0.06, - 0.3, - 0.06, - 0.66],
                ["c", 0, - 0.45, 0, - 0.63, 0.15, - 1.08],
                ["c", 0.24, - 0.78, 0.75, - 1.53, 1.44, - 2.22],
                ["c", 1.2, - 1.2, 2.85, - 2.01, 4.47, - 2.22],
                ["z"]
            ],
            w: 9.81,
            h: 8.094
        },
        "scripts.ufermata": {
            d: [
                ["M", - 0.75, - 10.77],
                ["c", 0.12, 0, 0.45, - 0.03, 0.69, - 0.03],
                ["c", 2.91, - 0.03, 5.55, 1.53, 7.41, 4.35],
                ["c", 1.17, 1.71, 1.95, 3.72, 2.43, 6.03],
                ["c", 0.12, 0.51, 0.12, 0.57, 0.03, 0.69],
                ["c", - 0.12, 0.21, - 0.48, 0.27, - 0.69, 0.12],
                ["c", - 0.12, - 0.09, - 0.18, - 0.24, - 0.27, - 0.69],
                ["c", - 0.78, - 3.63, - 3.42, - 6.54, - 6.78, - 7.38],
                ["c", - 0.78, - 0.21, - 1.2, - 0.24, - 2.07, - 0.24],
                ["c", - 0.63, - 0, - 0.84, - 0, - 1.2, 0.06],
                ["c", - 1.83, 0.27, - 3.42, 1.08, - 4.8, 2.37],
                ["c", - 1.41, 1.35, - 2.4, 3.21, - 2.85, 5.19],
                ["c", - 0.09, 0.45, - 0.15, 0.6, - 0.27, 0.69],
                ["c", - 0.21, 0.15, - 0.57, 0.09, - 0.69, - 0.12],
                ["c", - 0.09, - 0.12, - 0.09, - 0.18, 0.03, - 0.69],
                ["c", 0.33, - 1.62, 0.78, - 3, 1.47, - 4.38],
                ["c", 1.77, - 3.54, 4.44, - 5.67, 7.56, - 5.97],
                ["z"],
                ["m", 0.33, 7.47],
                ["c", 1.38, - 0.3, 2.58, 0.9, 2.31, 2.25],
                ["c", - 0.15, 0.72, - 0.78, 1.35, - 1.47, 1.5],
                ["c", - 1.38, 0.27, - 2.58, - 0.93, - 2.31, - 2.31],
                ["c", 0.15, - 0.69, 0.78, - 1.29, 1.47, - 1.44],
                ["z"]
            ],
            w: 19.748,
            h: 11.289
        },
        "scripts.dfermata": {
            d: [
                ["M", - 9.63, - 0.42],
                ["c", 0.15, - 0.09, 0.36, - 0.06, 0.51, 0.03],
                ["c", 0.12, 0.09, 0.18, 0.24, 0.27, 0.66],
                ["c", 0.78, 3.66, 3.42, 6.57, 6.78, 7.41],
                ["c", 0.78, 0.21, 1.2, 0.24, 2.07, 0.24],
                ["c", 0.63, - 0, 0.84, - 0, 1.2, - 0.06],
                ["c", 1.83, - 0.27, 3.42, - 1.08, 4.8, - 2.37],
                ["c", 1.41, - 1.35, 2.4, - 3.21, 2.85, - 5.22],
                ["c", 0.09, - 0.42, 0.15, - 0.57, 0.27, - 0.66],
                ["c", 0.21, - 0.15, 0.57, - 0.09, 0.69, 0.12],
                ["c", 0.09, 0.12, 0.09, 0.18, - 0.03, 0.69],
                ["c", - 0.33, 1.62, - 0.78, 3, - 1.47, 4.38],
                ["c", - 1.92, 3.84, - 4.89, 6, - 8.31, 6],
                ["c", - 3.42, 0, - 6.39, - 2.16, - 8.31, - 6],
                ["c", - 0.48, - 0.96, - 0.84, - 1.92, - 1.14, - 2.97],
                ["c", - 0.18, - 0.69, - 0.42, - 1.74, - 0.42, - 1.92],
                ["c", 0, - 0.12, 0.09, - 0.27, 0.24, - 0.33],
                ["z"],
                ["m", 9.21, 0],
                ["c", 1.2, - 0.27, 2.34, 0.63, 2.34, 1.86],
                ["c", - 0, 0.9, - 0.66, 1.68, - 1.5, 1.89],
                ["c", - 1.38, 0.27, - 2.58, - 0.93, - 2.31, - 2.31],
                ["c", 0.15, - 0.69, 0.78, - 1.29, 1.47, - 1.44],
                ["z"]
            ],
            w: 19.744,
            h: 11.274
        },
        "scripts.sforzato": {
            d: [
                ["M", - 6.45, - 3.69],
                ["c", 0.06, - 0.03, 0.15, - 0.06, 0.18, - 0.06],
                ["c", 0.06, 0, 2.85, 0.72, 6.24, 1.59],
                ["l", 6.33, 1.65],
                ["c", 0.33, 0.06, 0.45, 0.21, 0.45, 0.51],
                ["c", 0, 0.3, - 0.12, 0.45, - 0.45, 0.51],
                ["l", - 6.33, 1.65],
                ["c", - 3.39, 0.87, - 6.18, 1.59, - 6.21, 1.59],
                ["c", - 0.21, - 0, - 0.48, - 0.24, - 0.51, - 0.45],
                ["c", 0, - 0.15, 0.06, - 0.36, 0.18, - 0.45],
                ["c", 0.09, - 0.06, 0.87, - 0.27, 3.84, - 1.05],
                ["c", 2.04, - 0.54, 3.84, - 0.99, 4.02, - 1.02],
                ["c", 0.15, - 0.06, 1.14, - 0.24, 2.22, - 0.42],
                ["c", 1.05, - 0.18, 1.92, - 0.36, 1.92, - 0.36],
                ["c", 0, - 0, - 0.87, - 0.18, - 1.92, - 0.36],
                ["c", - 1.08, - 0.18, - 2.07, - 0.36, - 2.22, - 0.42],
                ["c", - 0.18, - 0.03, - 1.98, - 0.48, - 4.02, - 1.02],
                ["c", - 2.97, - 0.78, - 3.75, - 0.99, - 3.84, - 1.05],
                ["c", - 0.12, - 0.09, - 0.18, - 0.3, - 0.18, - 0.45],
                ["c", 0.03, - 0.15, 0.15, - 0.3, 0.3, - 0.39],
                ["z"]
            ],
            w: 13.5,
            h: 7.5
        },
        "scripts.staccato": {
            d: [
                ["M", - 0.36, - 1.47],
                ["c", 0.93, - 0.21, 1.86, 0.51, 1.86, 1.47],
                ["c", - 0, 0.93, - 0.87, 1.65, - 1.8, 1.47],
                ["c", - 0.54, - 0.12, - 1.02, - 0.57, - 1.14, - 1.08],
                ["c", - 0.21, - 0.81, 0.27, - 1.65, 1.08, - 1.86],
                ["z"]
            ],
            w: 2.989,
            h: 3.004
        },
        "scripts.tenuto": {
            d: [
                ["M", - 4.2, - 0.48],
                ["l", 0.12, - 0.06],
                ["l", 4.08, 0],
                ["l", 4.08, 0],
                ["l", 0.12, 0.06],
                ["c", 0.39, 0.21, 0.39, 0.75, 0, 0.96],
                ["l", - 0.12, 0.06],
                ["l", - 4.08, 0],
                ["l", - 4.08, 0],
                ["l", - 0.12, - 0.06],
                ["c", - 0.39, - 0.21, - 0.39, - 0.75, 0, - 0.96],
                ["z"]
            ],
            w: 8.985,
            h: 1.08
        },
        "scripts.umarcato": {
            d: [
                ["M", - 0.15, - 8.19],
                ["c", 0.15, - 0.12, 0.36, - 0.03, 0.45, 0.15],
                ["c", 0.21, 0.42, 3.45, 7.65, 3.45, 7.71],
                ["c", - 0, 0.12, - 0.12, 0.27, - 0.21, 0.3],
                ["c", - 0.03, 0.03, - 0.51, 0.03, - 1.14, 0.03],
                ["c", - 1.05, 0, - 1.08, 0, - 1.17, - 0.06],
                ["c", - 0.09, - 0.06, - 0.24, - 0.36, - 1.17, - 2.4],
                ["c", - 0.57, - 1.29, - 1.05, - 2.34, - 1.08, - 2.34],
                ["c", - 0, - 0.03, - 0.51, 1.02, - 1.08, 2.34],
                ["c", - 0.93, 2.07, - 1.08, 2.34, - 1.14, 2.4],
                ["c", - 0.06, 0.03, - 0.15, 0.06, - 0.18, 0.06],
                ["c", - 0.15, 0, - 0.33, - 0.18, - 0.33, - 0.33],
                ["c", - 0, - 0.06, 3.24, - 7.32, 3.45, - 7.71],
                ["c", 0.03, - 0.06, 0.09, - 0.15, 0.15, - 0.15],
                ["z"]
            ],
            w: 7.5,
            h: 8.245
        },
        "scripts.dmarcato": {
            d: [
                ["M", - 3.57, 0.03],
                ["c", 0.03, 0, 0.57, - 0.03, 1.17, - 0.03],
                ["c", 1.05, 0, 1.08, 0, 1.17, 0.06],
                ["c", 0.09, 0.06, 0.24, 0.36, 1.17, 2.4],
                ["c", 0.57, 1.29, 1.05, 2.34, 1.08, 2.34],
                ["c", 0, 0.03, 0.51, - 1.02, 1.08, - 2.34],
                ["c", 0.93, - 2.07, 1.08, - 2.34, 1.14, - 2.4],
                ["c", 0.06, - 0.03, 0.15, - 0.06, 0.18, - 0.06],
                ["c", 0.15, 0, 0.33, 0.18, 0.33, 0.33],
                ["c", 0, 0.09, - 3.45, 7.74, - 3.54, 7.83],
                ["c", - 0.12, 0.12, - 0.3, 0.12, - 0.42, 0],
                ["c", - 0.09, - 0.09, - 3.54, - 7.74, - 3.54, - 7.83],
                ["c", 0, - 0.09, 0.12, - 0.27, 0.18, - 0.3],
                ["z"]
            ],
            w: 7.5,
            h: 8.25
        },
        "scripts.stopped": {
            d: [
                ["M", - 0.27, - 4.08],
                ["c", 0.18, - 0.09, 0.36, - 0.09, 0.54, 0],
                ["c", 0.18, 0.09, 0.24, 0.15, 0.33, 0.3],
                ["l", 0.06, 0.15],
                ["l", - 0, 1.5],
                ["l", - 0, 1.47],
                ["l", 1.47, 0],
                ["l", 1.5, 0],
                ["l", 0.15, 0.06],
                ["c", 0.15, 0.09, 0.21, 0.15, 0.3, 0.33],
                ["c", 0.09, 0.18, 0.09, 0.36, - 0, 0.54],
                ["c", - 0.09, 0.18, - 0.15, 0.24, - 0.33, 0.33],
                ["c", - 0.12, 0.06, - 0.18, 0.06, - 1.62, 0.06],
                ["l", - 1.47, 0],
                ["l", - 0, 1.47],
                ["l", - 0, 1.47],
                ["l", - 0.06, 0.15],
                ["c", - 0.09, 0.18, - 0.15, 0.24, - 0.33, 0.33],
                ["c", - 0.18, 0.09, - 0.36, 0.09, - 0.54, 0],
                ["c", - 0.18, - 0.09, - 0.24, - 0.15, - 0.33, - 0.33],
                ["l", - 0.06, - 0.15],
                ["l", - 0, - 1.47],
                ["l", - 0, - 1.47],
                ["l", - 1.47, 0],
                ["c", - 1.44, 0, - 1.5, 0, - 1.62, - 0.06],
                ["c", - 0.18, - 0.09, - 0.24, - 0.15, - 0.33, - 0.33],
                ["c", - 0.09, - 0.18, - 0.09, - 0.36, - 0, - 0.54],
                ["c", 0.09, - 0.18, 0.15, - 0.24, 0.33, - 0.33],
                ["l", 0.15, - 0.06],
                ["l", 1.47, 0],
                ["l", 1.47, 0],
                ["l", - 0, - 1.47],
                ["c", - 0, - 1.44, - 0, - 1.5, 0.06, - 1.62],
                ["c", 0.09, - 0.18, 0.15, - 0.24, 0.33, - 0.33],
                ["z"]
            ],
            w: 8.295,
            h: 8.295
        },
        "scripts.upbow": {
            d: [
                ["M", - 4.65, - 15.54],
                ["c", 0.12, - 0.09, 0.36, - 0.06, 0.48, 0.03],
                ["c", 0.03, 0.03, 0.09, 0.09, 0.12, 0.15],
                ["c", 0.03, 0.06, 0.66, 2.13, 1.41, 4.62],
                ["c", 1.35, 4.41, 1.38, 4.56, 2.01, 6.96],
                ["l", 0.63, 2.46],
                ["l", 0.63, - 2.46],
                ["c", 0.63, - 2.4, 0.66, - 2.55, 2.01, - 6.96],
                ["c", 0.75, - 2.49, 1.38, - 4.56, 1.41, - 4.62],
                ["c", 0.06, - 0.15, 0.18, - 0.21, 0.36, - 0.24],
                ["c", 0.15, 0, 0.3, 0.06, 0.39, 0.18],
                ["c", 0.15, 0.21, 0.24, - 0.18, - 2.1, 7.56],
                ["c", - 1.2, 3.96, - 2.22, 7.32, - 2.25, 7.41],
                ["c", 0, 0.12, - 0.06, 0.27, - 0.09, 0.3],
                ["c", - 0.12, 0.21, - 0.6, 0.21, - 0.72, 0],
                ["c", - 0.03, - 0.03, - 0.09, - 0.18, - 0.09, - 0.3],
                ["c", - 0.03, - 0.09, - 1.05, - 3.45, - 2.25, - 7.41],
                ["c", - 2.34, - 7.74, - 2.25, - 7.35, - 2.1, - 7.56],
                ["c", 0.03, - 0.03, 0.09, - 0.09, 0.15, - 0.12],
                ["z"]
            ],
            w: 9.73,
            h: 15.608
        },
        "scripts.downbow": {
            d: [
                ["M", - 5.55, - 9.93],
                ["l", 0.09, - 0.06],
                ["l", 5.46, 0],
                ["l", 5.46, 0],
                ["l", 0.09, 0.06],
                ["l", 0.06, 0.09],
                ["l", 0, 4.77],
                ["c", 0, 5.28, 0, 4.89, - 0.18, 5.01],
                ["c", - 0.18, 0.12, - 0.42, 0.06, - 0.54, - 0.12],
                ["c", - 0.06, - 0.09, - 0.06, - 0.18, - 0.06, - 2.97],
                ["l", 0, - 2.85],
                ["l", - 4.83, 0],
                ["l", - 4.83, 0],
                ["l", 0, 2.85],
                ["c", 0, 2.79, 0, 2.88, - 0.06, 2.97],
                ["c", - 0.15, 0.24, - 0.51, 0.24, - 0.66, 0],
                ["c", - 0.06, - 0.09, - 0.06, - 0.21, - 0.06, - 4.89],
                ["l", 0, - 4.77],
                ["z"]
            ],
            w: 11.22,
            h: 9.992
        },
        "scripts.turn": {
            d: [
                ["M", - 4.77, - 3.9],
                ["c", 0.36, - 0.06, 1.05, - 0.06, 1.44, 0.03],
                ["c", 0.78, 0.15, 1.5, 0.51, 2.34, 1.14],
                ["c", 0.6, 0.45, 1.05, 0.87, 2.22, 2.01],
                ["c", 1.11, 1.08, 1.62, 1.5, 2.22, 1.86],
                ["c", 0.6, 0.36, 1.32, 0.57, 1.92, 0.57],
                ["c", 0.9, - 0, 1.71, - 0.57, 1.89, - 1.35],
                ["c", 0.24, - 0.93, - 0.39, - 1.89, - 1.35, - 2.1],
                ["l", - 0.15, - 0.06],
                ["l", - 0.09, 0.15],
                ["c", - 0.03, 0.09, - 0.15, 0.24, - 0.24, 0.33],
                ["c", - 0.72, 0.72, - 2.04, 0.54, - 2.49, - 0.36],
                ["c", - 0.48, - 0.93, 0.03, - 1.86, 1.17, - 2.19],
                ["c", 0.3, - 0.09, 1.02, - 0.09, 1.35, - 0],
                ["c", 0.99, 0.27, 1.74, 0.87, 2.25, 1.83],
                ["c", 0.69, 1.41, 0.63, 3, - 0.21, 4.26],
                ["c", - 0.21, 0.3, - 0.69, 0.81, - 0.99, 1.02],
                ["c", - 0.3, 0.21, - 0.84, 0.45, - 1.17, 0.54],
                ["c", - 1.23, 0.36, - 2.49, 0.15, - 3.72, - 0.6],
                ["c", - 0.75, - 0.48, - 1.41, - 1.02, - 2.85, - 2.46],
                ["c", - 1.11, - 1.08, - 1.62, - 1.5, - 2.22, - 1.86],
                ["c", - 0.6, - 0.36, - 1.32, - 0.57, - 1.92, - 0.57],
                ["c", - 0.9, 0, - 1.71, 0.57, - 1.89, 1.35],
                ["c", - 0.24, 0.93, 0.39, 1.89, 1.35, 2.1],
                ["l", 0.15, 0.06],
                ["l", 0.09, - 0.15],
                ["c", 0.03, - 0.09, 0.15, - 0.24, 0.24, - 0.33],
                ["c", 0.72, - 0.72, 2.04, - 0.54, 2.49, 0.36],
                ["c", 0.48, 0.93, - 0.03, 1.86, - 1.17, 2.19],
                ["c", - 0.3, 0.09, - 1.02, 0.09, - 1.35, 0],
                ["c", - 0.99, - 0.27, - 1.74, - 0.87, - 2.25, - 1.83],
                ["c", - 0.69, - 1.41, - 0.63, - 3, 0.21, - 4.26],
                ["c", 0.21, - 0.3, 0.69, - 0.81, 0.99, - 1.02],
                ["c", 0.48, - 0.33, 1.11, - 0.57, 1.74, - 0.66],
                ["z"]
            ],
            w: 16.366,
            h: 7.893
        },
        "scripts.trill": {
            d: [
                ["M", - 0.51, - 16.02],
                ["c", 0.12, - 0.09, 0.21, - 0.18, 0.21, - 0.18],
                ["l", - 0.81, 4.02],
                ["l", - 0.81, 4.02],
                ["c", 0.03, 0, 0.51, - 0.27, 1.08, - 0.6],
                ["c", 0.6, - 0.3, 1.14, - 0.63, 1.26, - 0.66],
                ["c", 1.14, - 0.54, 2.31, - 0.6, 3.09, - 0.18],
                ["c", 0.27, 0.15, 0.54, 0.36, 0.6, 0.51],
                ["l", 0.06, 0.12],
                ["l", 0.21, - 0.21],
                ["c", 0.9, - 0.81, 2.22, - 0.99, 3.12, - 0.42],
                ["c", 0.6, 0.42, 0.9, 1.14, 0.78, 2.07],
                ["c", - 0.15, 1.29, - 1.05, 2.31, - 1.95, 2.25],
                ["c", - 0.48, - 0.03, - 0.78, - 0.3, - 0.96, - 0.81],
                ["c", - 0.09, - 0.27, - 0.09, - 0.9, - 0.03, - 1.2],
                ["c", 0.21, - 0.75, 0.81, - 1.23, 1.59, - 1.32],
                ["l", 0.24, - 0.03],
                ["l", - 0.09, - 0.12],
                ["c", - 0.51, - 0.66, - 1.62, - 0.63, - 2.31, 0.03],
                ["c", - 0.39, 0.42, - 0.3, 0.09, - 1.23, 4.77],
                ["l", - 0.81, 4.14],
                ["c", - 0.03, 0, - 0.12, - 0.03, - 0.21, - 0.09],
                ["c", - 0.33, - 0.15, - 0.54, - 0.18, - 0.99, - 0.18],
                ["c", - 0.42, 0, - 0.66, 0.03, - 1.05, 0.18],
                ["c", - 0.12, 0.06, - 0.21, 0.09, - 0.21, 0.09],
                ["c", 0, - 0.03, 0.36, - 1.86, 0.81, - 4.11],
                ["c", 0.9, - 4.47, 0.87, - 4.26, 0.69, - 4.53],
                ["c", - 0.21, - 0.36, - 0.66, - 0.51, - 1.17, - 0.36],
                ["c", - 0.15, 0.06, - 2.22, 1.14, - 2.58, 1.38],
                ["c", - 0.12, 0.09, - 0.12, 0.09, - 0.21, 0.6],
                ["l", - 0.09, 0.51],
                ["l", 0.21, 0.24],
                ["c", 0.63, 0.75, 1.02, 1.47, 1.2, 2.19],
                ["c", 0.06, 0.27, 0.06, 0.36, 0.06, 0.81],
                ["c", 0, 0.42, 0, 0.54, - 0.06, 0.78],
                ["c", - 0.15, 0.54, - 0.33, 0.93, - 0.63, 1.35],
                ["c", - 0.18, 0.24, - 0.57, 0.63, - 0.81, 0.78],
                ["c", - 0.24, 0.15, - 0.63, 0.36, - 0.84, 0.42],
                ["c", - 0.27, 0.06, - 0.66, 0.06, - 0.87, 0.03],
                ["c", - 0.81, - 0.18, - 1.32, - 1.05, - 1.38, - 2.46],
                ["c", - 0.03, - 0.6, 0.03, - 0.99, 0.33, - 2.46],
                ["c", 0.21, - 1.08, 0.24, - 1.32, 0.21, - 1.29],
                ["c", - 1.2, 0.48, - 2.4, 0.75, - 3.21, 0.72],
                ["c", - 0.69, - 0.06, - 1.17, - 0.3, - 1.41, - 0.72],
                ["c", - 0.39, - 0.75, - 0.12, - 1.8, 0.66, - 2.46],
                ["c", 0.24, - 0.18, 0.69, - 0.42, 1.02, - 0.51],
                ["c", 0.69, - 0.18, 1.53, - 0.15, 2.31, 0.09],
                ["c", 0.3, 0.09, 0.75, 0.3, 0.99, 0.45],
                ["c", 0.12, 0.09, 0.15, 0.09, 0.15, 0.03],
                ["c", 0.03, - 0.03, 0.33, - 1.59, 0.72, - 3.45],
                ["c", 0.36, - 1.86, 0.66, - 3.42, 0.69, - 3.45],
                ["c", 0, - 0.03, 0.03, - 0.03, 0.21, 0.03],
                ["c", 0.21, 0.06, 0.27, 0.06, 0.48, 0.06],
                ["c", 0.42, - 0.03, 0.78, - 0.18, 1.26, - 0.48],
                ["c", 0.15, - 0.12, 0.36, - 0.27, 0.48, - 0.39],
                ["z"],
                ["m", - 5.73, 7.68],
                ["c", - 0.27, - 0.03, - 0.96, - 0.06, - 1.2, - 0.03],
                ["c", - 0.81, 0.12, - 1.35, 0.57, - 1.5, 1.2],
                ["c", - 0.18, 0.66, 0.12, 1.14, 0.75, 1.29],
                ["c", 0.66, 0.12, 1.92, - 0.12, 3.18, - 0.66],
                ["l", 0.33, - 0.15],
                ["l", 0.09, - 0.39],
                ["c", 0.06, - 0.21, 0.09, - 0.42, 0.09, - 0.45],
                ["c", 0, - 0.03, - 0.45, - 0.3, - 0.75, - 0.45],
                ["c", - 0.27, - 0.15, - 0.66, - 0.27, - 0.99, - 0.36],
                ["z"],
                ["m", 4.29, 3.63],
                ["c", - 0.24, - 0.39, - 0.51, - 0.75, - 0.51, - 0.69],
                ["c", - 0.06, 0.12, - 0.39, 1.92, - 0.45, 2.28],
                ["c", - 0.09, 0.54, - 0.12, 1.14, - 0.06, 1.38],
                ["c", 0.06, 0.42, 0.21, 0.6, 0.51, 0.57],
                ["c", 0.39, - 0.06, 0.75, - 0.48, 0.93, - 1.14],
                ["c", 0.09, - 0.33, 0.09, - 1.05, - 0, - 1.38],
                ["c", - 0.09, - 0.39, - 0.24, - 0.69, - 0.42, - 1.02],
                ["z"]
            ],
            w: 17.963,
            h: 16.49
        },
        "scripts.segno": {
            d: [
                ["M", - 3.72, - 11.22],
                ["c", 0.78, - 0.09, 1.59, 0.03, 2.31, 0.42],
                ["c", 1.2, 0.6, 2.01, 1.71, 2.31, 3.09],
                ["c", 0.09, 0.42, 0.09, 1.2, 0.03, 1.5],
                ["c", - 0.15, 0.45, - 0.39, 0.81, - 0.66, 0.93],
                ["c", - 0.33, 0.18, - 0.84, 0.21, - 1.23, 0.15],
                ["c", - 0.81, - 0.18, - 1.32, - 0.93, - 1.26, - 1.89],
                ["c", 0.03, - 0.36, 0.09, - 0.57, 0.24, - 0.9],
                ["c", 0.15, - 0.33, 0.45, - 0.6, 0.72, - 0.75],
                ["c", 0.12, - 0.06, 0.18, - 0.09, 0.18, - 0.12],
                ["c", 0, - 0.03, - 0.03, - 0.15, - 0.09, - 0.24],
                ["c", - 0.18, - 0.45, - 0.54, - 0.87, - 0.96, - 1.08],
                ["c", - 1.11, - 0.57, - 2.34, - 0.18, - 2.88, 0.9],
                ["c", - 0.24, 0.51, - 0.33, 1.11, - 0.24, 1.83],
                ["c", 0.27, 1.92, 1.5, 3.54, 3.93, 5.13],
                ["c", 0.48, 0.33, 1.26, 0.78, 1.29, 0.78],
                ["c", 0.03, 0, 1.35, - 2.19, 2.94, - 4.89],
                ["l", 2.88, - 4.89],
                ["l", 0.84, 0],
                ["l", 0.87, 0],
                ["l", - 0.03, 0.06],
                ["c", - 0.15, 0.21, - 6.15, 10.41, - 6.15, 10.44],
                ["c", 0, 0, 0.21, 0.15, 0.48, 0.27],
                ["c", 2.61, 1.47, 4.35, 3.03, 5.13, 4.65],
                ["c", 1.14, 2.34, 0.51, 5.07, - 1.44, 6.39],
                ["c", - 0.66, 0.42, - 1.32, 0.63, - 2.13, 0.69],
                ["c", - 2.01, 0.09, - 3.81, - 1.41, - 4.26, - 3.54],
                ["c", - 0.09, - 0.42, - 0.09, - 1.2, - 0.03, - 1.5],
                ["c", 0.15, - 0.45, 0.39, - 0.81, 0.66, - 0.93],
                ["c", 0.33, - 0.18, 0.84, - 0.21, 1.23, - 0.15],
                ["c", 0.81, 0.18, 1.32, 0.93, 1.26, 1.89],
                ["c", - 0.03, 0.36, - 0.09, 0.57, - 0.24, 0.9],
                ["c", - 0.15, 0.33, - 0.45, 0.6, - 0.72, 0.75],
                ["c", - 0.12, 0.06, - 0.18, 0.09, - 0.18, 0.12],
                ["c", 0, 0.03, 0.03, 0.15, 0.09, 0.24],
                ["c", 0.18, 0.45, 0.54, 0.87, 0.96, 1.08],
                ["c", 1.11, 0.57, 2.34, 0.18, 2.88, - 0.9],
                ["c", 0.24, - 0.51, 0.33, - 1.11, 0.24, - 1.83],
                ["c", - 0.27, - 1.92, - 1.5, - 3.54, - 3.93, - 5.13],
                ["c", - 0.48, - 0.33, - 1.26, - 0.78, - 1.29, - 0.78],
                ["c", - 0.03, 0, - 1.35, 2.19, - 2.91, 4.89],
                ["l", - 2.88, 4.89],
                ["l", - 0.87, 0],
                ["l", - 0.87, 0],
                ["l", 0.03, - 0.06],
                ["c", 0.15, - 0.21, 6.15, - 10.41, 6.15, - 10.44],
                ["c", 0, 0, - 0.21, - 0.15, - 0.48, - 0.3],
                ["c", - 2.61, - 1.44, - 4.35, - 3, - 5.13, - 4.62],
                ["c", - 0.9, - 1.89, - 0.72, - 4.02, 0.48, - 5.52],
                ["c", 0.69, - 0.84, 1.68, - 1.41, 2.73, - 1.53],
                ["z"],
                ["m", 8.76, 9.09],
                ["c", 0.03, - 0.03, 0.15, - 0.03, 0.27, - 0.03],
                ["c", 0.33, 0.03, 0.57, 0.18, 0.72, 0.48],
                ["c", 0.09, 0.18, 0.09, 0.57, 0, 0.75],
                ["c", - 0.09, 0.18, - 0.21, 0.3, - 0.36, 0.39],
                ["c", - 0.15, 0.06, - 0.21, 0.06, - 0.39, 0.06],
                ["c", - 0.21, 0, - 0.27, 0, - 0.39, - 0.06],
                ["c", - 0.3, - 0.15, - 0.48, - 0.45, - 0.48, - 0.75],
                ["c", 0, - 0.39, 0.24, - 0.72, 0.63, - 0.84],
                ["z"],
                ["m", - 10.53, 2.61],
                ["c", 0.03, - 0.03, 0.15, - 0.03, 0.27, - 0.03],
                ["c", 0.33, 0.03, 0.57, 0.18, 0.72, 0.48],
                ["c", 0.09, 0.18, 0.09, 0.57, 0, 0.75],
                ["c", - 0.09, 0.18, - 0.21, 0.3, - 0.36, 0.39],
                ["c", - 0.15, 0.06, - 0.21, 0.06, - 0.39, 0.06],
                ["c", - 0.21, 0, - 0.27, 0, - 0.39, - 0.06],
                ["c", - 0.3, - 0.15, - 0.48, - 0.45, - 0.48, - 0.75],
                ["c", 0, - 0.39, 0.24, - 0.72, 0.63, - 0.84],
                ["z"]
            ],
            w: 15,
            h: 22.504
        },
        "scripts.coda": {
            d: [
                ["M", - 0.21, - 10.47],
                ["c", 0.18, - 0.12, 0.42, - 0.06, 0.54, 0.12],
                ["c", 0.06, 0.09, 0.06, 0.18, 0.06, 1.5],
                ["l", 0, 1.38],
                ["l", 0.18, 0],
                ["c", 0.39, 0.06, 0.96, 0.24, 1.38, 0.48],
                ["c", 1.68, 0.93, 2.82, 3.24, 3.03, 6.12],
                ["c", 0.03, 0.24, 0.03, 0.45, 0.03, 0.45],
                ["c", 0, 0.03, 0.6, 0.03, 1.35, 0.03],
                ["c", 1.5, 0, 1.47, 0, 1.59, 0.18],
                ["c", 0.09, 0.12, 0.09, 0.3, - 0, 0.42],
                ["c", - 0.12, 0.18, - 0.09, 0.18, - 1.59, 0.18],
                ["c", - 0.75, 0, - 1.35, 0, - 1.35, 0.03],
                ["c", - 0, 0, - 0, 0.21, - 0.03, 0.42],
                ["c", - 0.24, 3.15, - 1.53, 5.58, - 3.45, 6.36],
                ["c", - 0.27, 0.12, - 0.72, 0.24, - 0.96, 0.27],
                ["l", - 0.18, - 0],
                ["l", - 0, 1.38],
                ["c", - 0, 1.32, - 0, 1.41, - 0.06, 1.5],
                ["c", - 0.15, 0.24, - 0.51, 0.24, - 0.66, - 0],
                ["c", - 0.06, - 0.09, - 0.06, - 0.18, - 0.06, - 1.5],
                ["l", - 0, - 1.38],
                ["l", - 0.18, - 0],
                ["c", - 0.39, - 0.06, - 0.96, - 0.24, - 1.38, - 0.48],
                ["c", - 1.68, - 0.93, - 2.82, - 3.24, - 3.03, - 6.15],
                ["c", - 0.03, - 0.21, - 0.03, - 0.42, - 0.03, - 0.42],
                ["c", 0, - 0.03, - 0.6, - 0.03, - 1.35, - 0.03],
                ["c", - 1.5, - 0, - 1.47, - 0, - 1.59, - 0.18],
                ["c", - 0.09, - 0.12, - 0.09, - 0.3, 0, - 0.42],
                ["c", 0.12, - 0.18, 0.09, - 0.18, 1.59, - 0.18],
                ["c", 0.75, - 0, 1.35, - 0, 1.35, - 0.03],
                ["c", 0, - 0, 0, - 0.21, 0.03, - 0.45],
                ["c", 0.24, - 3.12, 1.53, - 5.55, 3.45, - 6.33],
                ["c", 0.27, - 0.12, 0.72, - 0.24, 0.96, - 0.27],
                ["l", 0.18, - 0],
                ["l", 0, - 1.38],
                ["c", 0, - 1.53, 0, - 1.5, 0.18, - 1.62],
                ["z"],
                ["m", - 0.18, 6.93],
                ["c", 0, - 2.97, 0, - 3.15, - 0.06, - 3.15],
                ["c", - 0.09, 0, - 0.51, 0.15, - 0.66, 0.21],
                ["c", - 0.87, 0.51, - 1.38, 1.62, - 1.56, 3.51],
                ["c", - 0.06, 0.54, - 0.12, 1.59, - 0.12, 2.16],
                ["l", 0, 0.42],
                ["l", 1.2, 0],
                ["l", 1.2, 0],
                ["l", 0, - 3.15],
                ["z"],
                ["m", 1.17, - 3.06],
                ["c", - 0.09, - 0.03, - 0.21, - 0.06, - 0.27, - 0.09],
                ["l", - 0.12, 0],
                ["l", 0, 3.15],
                ["l", 0, 3.15],
                ["l", 1.2, 0],
                ["l", 1.2, 0],
                ["l", 0, - 0.81],
                ["c", - 0.06, - 2.4, - 0.33, - 3.69, - 0.93, - 4.59],
                ["c", - 0.27, - 0.39, - 0.66, - 0.69, - 1.08, - 0.81],
                ["z"],
                ["m", - 1.17, 10.14],
                ["l", 0, - 3.15],
                ["l", - 1.2, - 0],
                ["l", - 1.2, - 0],
                ["l", 0, 0.81],
                ["c", 0.03, 0.96, 0.06, 1.47, 0.15, 2.13],
                ["c", 0.24, 2.04, 0.96, 3.12, 2.13, 3.36],
                ["l", 0.12, - 0],
                ["l", 0, - 3.15],
                ["z"],
                ["m", 3.18, - 2.34],
                ["l", 0, - 0.81],
                ["l", - 1.2, 0],
                ["l", - 1.2, 0],
                ["l", 0, 3.15],
                ["l", 0, 3.15],
                ["l", 0.12, 0],
                ["c", 1.17, - 0.24, 1.89, - 1.32, 2.13, - 3.36],
                ["c", 0.09, - 0.66, 0.12, - 1.17, 0.15, - 2.13],
                ["z"]
            ],
            w: 16.035,
            h: 21.062
        },
        "scripts.comma": {
            d: [
                ["M", 1.14, - 4.62],
                ["c", 0.3, - 0.12, 0.69, - 0.03, 0.93, 0.15],
                ["c", 0.12, 0.12, 0.36, 0.45, 0.51, 0.78],
                ["c", 0.9, 1.77, 0.54, 4.05, - 1.08, 6.75],
                ["c", - 0.36, 0.63, - 0.87, 1.38, - 0.96, 1.44],
                ["c", - 0.18, 0.12, - 0.42, 0.06, - 0.54, - 0.12],
                ["c", - 0.09, - 0.18, - 0.09, - 0.3, 0.12, - 0.6],
                ["c", 0.96, - 1.44, 1.44, - 2.97, 1.38, - 4.35],
                ["c", - 0.06, - 0.93, - 0.3, - 1.68, - 0.78, - 2.46],
                ["c", - 0.27, - 0.39, - 0.33, - 0.63, - 0.24, - 0.96],
                ["c", 0.09, - 0.27, 0.36, - 0.54, 0.66, - 0.63],
                ["z"]
            ],
            w: 3.042,
            h: 9.237
        },
        "scripts.roll": {
            d: [
                ["M", 1.95, - 6],
                ["c", 0.21, - 0.09, 0.36, - 0.09, 0.57, 0],
                ["c", 0.39, 0.15, 0.63, 0.39, 1.47, 1.35],
                ["c", 0.66, 0.75, 0.78, 0.87, 1.08, 1.05],
                ["c", 0.75, 0.45, 1.65, 0.42, 2.4, - 0.06],
                ["c", 0.12, - 0.09, 0.27, - 0.27, 0.54, - 0.6],
                ["c", 0.42, - 0.54, 0.51, - 0.63, 0.69, - 0.63],
                ["c", 0.09, 0, 0.3, 0.12, 0.36, 0.21],
                ["c", 0.09, 0.12, 0.12, 0.3, 0.03, 0.42],
                ["c", - 0.06, 0.12, - 3.15, 3.9, - 3.3, 4.08],
                ["c", - 0.06, 0.06, - 0.18, 0.12, - 0.27, 0.18],
                ["c", - 0.27, 0.12, - 0.6, 0.06, - 0.99, - 0.27],
                ["c", - 0.27, - 0.21, - 0.42, - 0.39, - 1.08, - 1.14],
                ["c", - 0.63, - 0.72, - 0.81, - 0.9, - 1.17, - 1.08],
                ["c", - 0.36, - 0.18, - 0.57, - 0.21, - 0.99, - 0.21],
                ["c", - 0.39, 0, - 0.63, 0.03, - 0.93, 0.18],
                ["c", - 0.36, 0.15, - 0.51, 0.27, - 0.9, 0.81],
                ["c", - 0.24, 0.27, - 0.45, 0.51, - 0.48, 0.54],
                ["c", - 0.12, 0.09, - 0.27, 0.06, - 0.39, 0],
                ["c", - 0.24, - 0.15, - 0.33, - 0.39, - 0.21, - 0.6],
                ["c", 0.09, - 0.12, 3.18, - 3.87, 3.33, - 4.02],
                ["c", 0.06, - 0.06, 0.18, - 0.15, 0.24, - 0.21],
                ["z"]
            ],
            w: 10.817,
            h: 6.125
        },
        "scripts.prall": {
            d: [
                ["M", - 4.38, - 3.69],
                ["c", 0.06, - 0.03, 0.18, - 0.06, 0.24, - 0.06],
                ["c", 0.3, 0, 0.27, - 0.03, 1.89, 1.95],
                ["l", 1.53, 1.83],
                ["c", 0.03, - 0, 0.57, - 0.84, 1.23, - 1.83],
                ["c", 1.14, - 1.68, 1.23, - 1.83, 1.35, - 1.89],
                ["c", 0.06, - 0.03, 0.18, - 0.06, 0.24, - 0.06],
                ["c", 0.3, 0, 0.27, - 0.03, 1.89, 1.95],
                ["l", 1.53, 1.83],
                ["l", 0.48, - 0.69],
                ["c", 0.51, - 0.78, 0.54, - 0.84, 0.69, - 0.9],
                ["c", 0.42, - 0.18, 0.87, 0.15, 0.81, 0.6],
                ["c", - 0.03, 0.12, - 0.3, 0.51, - 1.5, 2.37],
                ["c", - 1.38, 2.07, - 1.5, 2.22, - 1.62, 2.28],
                ["c", - 0.06, 0.03, - 0.18, 0.06, - 0.24, 0.06],
                ["c", - 0.3, 0, - 0.27, 0.03, - 1.89, - 1.95],
                ["l", - 1.53, - 1.83],
                ["c", - 0.03, 0, - 0.57, 0.84, - 1.23, 1.83],
                ["c", - 1.14, 1.68, - 1.23, 1.83, - 1.35, 1.89],
                ["c", - 0.06, 0.03, - 0.18, 0.06, - 0.24, 0.06],
                ["c", - 0.3, 0, - 0.27, 0.03, - 1.89, - 1.95],
                ["l", - 1.53, - 1.83],
                ["l", - 0.48, 0.69],
                ["c", - 0.51, 0.78, - 0.54, 0.84, - 0.69, 0.9],
                ["c", - 0.42, 0.18, - 0.87, - 0.15, - 0.81, - 0.6],
                ["c", 0.03, - 0.12, 0.3, - 0.51, 1.5, - 2.37],
                ["c", 1.38, - 2.07, 1.5, - 2.22, 1.62, - 2.28],
                ["z"]
            ],
            w: 15.011,
            h: 7.5
        },
        "scripts.mordent": {
            d: [
                ["M", - 0.21, - 4.95],
                ["c", 0.27, - 0.15, 0.63, 0, 0.75, 0.27],
                ["c", 0.06, 0.12, 0.06, 0.24, 0.06, 1.44],
                ["l", 0, 1.29],
                ["l", 0.57, - 0.84],
                ["c", 0.51, - 0.75, 0.57, - 0.84, 0.69, - 0.9],
                ["c", 0.06, - 0.03, 0.18, - 0.06, 0.24, - 0.06],
                ["c", 0.3, 0, 0.27, - 0.03, 1.89, 1.95],
                ["l", 1.53, 1.83],
                ["l", 0.48, - 0.69],
                ["c", 0.51, - 0.78, 0.54, - 0.84, 0.69, - 0.9],
                ["c", 0.42, - 0.18, 0.87, 0.15, 0.81, 0.6],
                ["c", - 0.03, 0.12, - 0.3, 0.51, - 1.5, 2.37],
                ["c", - 1.38, 2.07, - 1.5, 2.22, - 1.62, 2.28],
                ["c", - 0.06, 0.03, - 0.18, 0.06, - 0.24, 0.06],
                ["c", - 0.3, 0, - 0.27, 0.03, - 1.83, - 1.89],
                ["c", - 0.81, - 0.99, - 1.5, - 1.8, - 1.53, - 1.86],
                ["c", - 0.06, - 0.03, - 0.06, - 0.03, - 0.12, 0.03],
                ["c", - 0.06, 0.06, - 0.06, 0.15, - 0.06, 2.28],
                ["c", - 0, 1.95, - 0, 2.25, - 0.06, 2.34],
                ["c", - 0.18, 0.45, - 0.81, 0.48, - 1.05, 0.03],
                ["c", - 0.03, - 0.06, - 0.06, - 0.24, - 0.06, - 1.41],
                ["l", - 0, - 1.35],
                ["l", - 0.57, 0.84],
                ["c", - 0.54, 0.78, - 0.6, 0.87, - 0.72, 0.93],
                ["c", - 0.06, 0.03, - 0.18, 0.06, - 0.24, 0.06],
                ["c", - 0.3, 0, - 0.27, 0.03, - 1.89, - 1.95],
                ["l", - 1.53, - 1.83],
                ["l", - 0.48, 0.69],
                ["c", - 0.51, 0.78, - 0.54, 0.84, - 0.69, 0.9],
                ["c", - 0.42, 0.18, - 0.87, - 0.15, - 0.81, - 0.6],
                ["c", 0.03, - 0.12, 0.3, - 0.51, 1.5, - 2.37],
                ["c", 1.38, - 2.07, 1.5, - 2.22, 1.62, - 2.28],
                ["c", 0.06, - 0.03, 0.18, - 0.06, 0.24, - 0.06],
                ["c", 0.3, 0, 0.27, - 0.03, 1.89, 1.95],
                ["l", 1.53, 1.83],
                ["c", 0.03, - 0, 0.06, - 0.06, 0.09, - 0.09],
                ["c", 0.06, - 0.12, 0.06, - 0.15, 0.06, - 2.28],
                ["c", - 0, - 1.92, - 0, - 2.22, 0.06, - 2.31],
                ["c", 0.06, - 0.15, 0.15, - 0.24, 0.3, - 0.3],
                ["z"]
            ],
            w: 15.011,
            h: 10.012
        },
        "flags.u8th": {
            d: [
                ["M", - 0.42, 3.75],
                ["l", 0, - 3.75],
                ["l", 0.21, 0],
                ["l", 0.21, 0],
                ["l", 0, 0.18],
                ["c", 0, 0.3, 0.06, 0.84, 0.12, 1.23],
                ["c", 0.24, 1.53, 0.9, 3.12, 2.13, 5.16],
                ["l", 0.99, 1.59],
                ["c", 0.87, 1.44, 1.38, 2.34, 1.77, 3.09],
                ["c", 0.81, 1.68, 1.2, 3.06, 1.26, 4.53],
                ["c", 0.03, 1.53, - 0.21, 3.27, - 0.75, 5.01],
                ["c", - 0.21, 0.69, - 0.51, 1.5, - 0.6, 1.59],
                ["c", - 0.09, 0.12, - 0.27, 0.21, - 0.42, 0.21],
                ["c", - 0.15, 0, - 0.42, - 0.12, - 0.51, - 0.21],
                ["c", - 0.15, - 0.18, - 0.18, - 0.42, - 0.09, - 0.66],
                ["c", 0.15, - 0.33, 0.45, - 1.2, 0.57, - 1.62],
                ["c", 0.42, - 1.38, 0.6, - 2.58, 0.6, - 3.9],
                ["c", 0, - 0.66, 0, - 0.81, - 0.06, - 1.11],
                ["c", - 0.39, - 2.07, - 1.8, - 4.26, - 4.59, - 7.14],
                ["l", - 0.42, - 0.45],
                ["l", - 0.21, 0],
                ["l", - 0.21, 0],
                ["l", 0, - 3.75],
                ["z"]
            ],
            w: 6.692,
            h: 22.59
        },
        "flags.u16th": {
            d: [
                ["M", - 0.42, 7.5],
                ["l", 0, - 7.5],
                ["l", 0.21, 0],
                ["l", 0.21, 0],
                ["l", 0, 0.39],
                ["c", 0.06, 1.08, 0.39, 2.19, 0.99, 3.39],
                ["c", 0.45, 0.9, 0.87, 1.59, 1.95, 3.12],
                ["c", 1.29, 1.86, 1.77, 2.64, 2.22, 3.57],
                ["c", 0.45, 0.93, 0.72, 1.8, 0.87, 2.64],
                ["c", 0.06, 0.51, 0.06, 1.5, 0, 1.92],
                ["c", - 0.12, 0.6, - 0.3, 1.2, - 0.54, 1.71],
                ["l", - 0.09, 0.24],
                ["l", 0.18, 0.45],
                ["c", 0.51, 1.2, 0.72, 2.22, 0.69, 3.42],
                ["c", - 0.06, 1.53, - 0.39, 3.03, - 0.99, 4.53],
                ["c", - 0.3, 0.75, - 0.36, 0.81, - 0.57, 0.9],
                ["c", - 0.15, 0.09, - 0.33, 0.06, - 0.48, - 0],
                ["c", - 0.18, - 0.09, - 0.27, - 0.18, - 0.33, - 0.33],
                ["c", - 0.09, - 0.18, - 0.06, - 0.3, 0.12, - 0.75],
                ["c", 0.66, - 1.41, 1.02, - 2.88, 1.08, - 4.32],
                ["c", 0, - 0.6, - 0.03, - 1.05, - 0.18, - 1.59],
                ["c", - 0.3, - 1.2, - 0.99, - 2.4, - 2.25, - 3.87],
                ["c", - 0.42, - 0.48, - 1.53, - 1.62, - 2.19, - 2.22],
                ["l", - 0.45, - 0.42],
                ["l", - 0.03, 1.11],
                ["l", 0, 1.11],
                ["l", - 0.21, - 0],
                ["l", - 0.21, - 0],
                ["l", 0, - 7.5],
                ["z"],
                ["m", 1.65, 0.09],
                ["c", - 0.3, - 0.3, - 0.69, - 0.72, - 0.9, - 0.87],
                ["l", - 0.33, - 0.33],
                ["l", 0, 0.15],
                ["c", 0, 0.3, 0.06, 0.81, 0.15, 1.26],
                ["c", 0.27, 1.29, 0.87, 2.61, 2.04, 4.29],
                ["c", 0.15, 0.24, 0.6, 0.87, 0.96, 1.38],
                ["l", 1.08, 1.53],
                ["l", 0.42, 0.63],
                ["c", 0.03, 0, 0.12, - 0.36, 0.21, - 0.72],
                ["c", 0.06, - 0.33, 0.06, - 1.2, 0, - 1.62],
                ["c", - 0.33, - 1.71, - 1.44, - 3.48, - 3.63, - 5.7],
                ["z"]
            ],
            w: 6.693,
            h: 26.337
        },
        "flags.u32nd": {
            d: [
                ["M", - 0.42, 11.247],
                ["l", 0, - 11.25],
                ["l", 0.21, 0],
                ["l", 0.21, 0],
                ["l", 0, 0.36],
                ["c", 0.09, 1.68, 0.69, 3.27, 2.07, 5.46],
                ["l", 0.87, 1.35],
                ["c", 1.02, 1.62, 1.47, 2.37, 1.86, 3.18],
                ["c", 0.48, 1.02, 0.78, 1.92, 0.93, 2.88],
                ["c", 0.06, 0.48, 0.06, 1.5, 0, 1.89],
                ["c", - 0.09, 0.42, - 0.21, 0.87, - 0.36, 1.26],
                ["l", - 0.12, 0.3],
                ["l", 0.15, 0.39],
                ["c", 0.69, 1.56, 0.84, 2.88, 0.54, 4.38],
                ["c", - 0.09, 0.45, - 0.27, 1.08, - 0.45, 1.47],
                ["l", - 0.12, 0.24],
                ["l", 0.18, 0.36],
                ["c", 0.33, 0.72, 0.57, 1.56, 0.69, 2.34],
                ["c", 0.12, 1.02, - 0.06, 2.52, - 0.42, 3.84],
                ["c", - 0.27, 0.93, - 0.75, 2.13, - 0.93, 2.31],
                ["c", - 0.18, 0.15, - 0.45, 0.18, - 0.66, 0.09],
                ["c", - 0.18, - 0.09, - 0.27, - 0.18, - 0.33, - 0.33],
                ["c", - 0.09, - 0.18, - 0.06, - 0.3, 0.06, - 0.6],
                ["c", 0.21, - 0.36, 0.42, - 0.9, 0.57, - 1.38],
                ["c", 0.51, - 1.41, 0.69, - 3.06, 0.48, - 4.08],
                ["c", - 0.15, - 0.81, - 0.57, - 1.68, - 1.2, - 2.55],
                ["c", - 0.72, - 0.99, - 1.83, - 2.13, - 3.3, - 3.33],
                ["l", - 0.48, - 0.42],
                ["l", - 0.03, 1.53],
                ["l", 0, 1.56],
                ["l", - 0.21, 0],
                ["l", - 0.21, 0],
                ["l", 0, - 11.25],
                ["z"],
                ["m", 1.26, - 3.96],
                ["c", - 0.27, - 0.3, - 0.54, - 0.6, - 0.66, - 0.72],
                ["l", - 0.18, - 0.21],
                ["l", 0, 0.42],
                ["c", 0.06, 0.87, 0.24, 1.74, 0.66, 2.67],
                ["c", 0.36, 0.87, 0.96, 1.86, 1.92, 3.18],
                ["c", 0.21, 0.33, 0.63, 0.87, 0.87, 1.23],
                ["c", 0.27, 0.39, 0.6, 0.84, 0.75, 1.08],
                ["l", 0.27, 0.39],
                ["l", 0.03, - 0.12],
                ["c", 0.12, - 0.45, 0.15, - 1.05, 0.09, - 1.59],
                ["c", - 0.27, - 1.86, - 1.38, - 3.78, - 3.75, - 6.33],
                ["z"],
                ["m", - 0.27, 6.09],
                ["c", - 0.27, - 0.21, - 0.48, - 0.42, - 0.51, - 0.45],
                ["c", - 0.06, - 0.03, - 0.06, - 0.03, - 0.06, 0.21],
                ["c", 0, 0.9, 0.3, 2.04, 0.81, 3.09],
                ["c", 0.48, 1.02, 0.96, 1.77, 2.37, 3.63],
                ["c", 0.6, 0.78, 1.05, 1.44, 1.29, 1.77],
                ["c", 0.06, 0.12, 0.15, 0.21, 0.15, 0.18],
                ["c", 0.03, - 0.03, 0.18, - 0.57, 0.24, - 0.87],
                ["c", 0.06, - 0.45, 0.06, - 1.32, - 0.03, - 1.74],
                ["c", - 0.09, - 0.48, - 0.24, - 0.9, - 0.51, - 1.44],
                ["c", - 0.66, - 1.35, - 1.83, - 2.7, - 3.75, - 4.38],
                ["z"]
            ],
            w: 6.697,
            h: 32.145
        },
        "flags.u64th": {
            d: [
                ["M", - 0.42, 15],
                ["l", 0, - 15],
                ["l", 0.21, 0],
                ["l", 0.21, 0],
                ["l", 0, 0.36],
                ["c", 0.06, 1.2, 0.39, 2.37, 1.02, 3.66],
                ["c", 0.39, 0.81, 0.84, 1.56, 1.8, 3.09],
                ["c", 0.81, 1.26, 1.05, 1.68, 1.35, 2.22],
                ["c", 0.87, 1.5, 1.35, 2.79, 1.56, 4.08],
                ["c", 0.06, 0.54, 0.06, 1.56, - 0.03, 2.04],
                ["c", - 0.09, 0.48, - 0.21, 0.99, - 0.36, 1.35],
                ["l", - 0.12, 0.27],
                ["l", 0.12, 0.27],
                ["c", 0.09, 0.15, 0.21, 0.45, 0.27, 0.66],
                ["c", 0.69, 1.89, 0.63, 3.66, - 0.18, 5.46],
                ["l", - 0.18, 0.39],
                ["l", 0.15, 0.33],
                ["c", 0.3, 0.66, 0.51, 1.44, 0.63, 2.1],
                ["c", 0.06, 0.48, 0.06, 1.35, 0, 1.71],
                ["c", - 0.15, 0.57, - 0.42, 1.2, - 0.78, 1.68],
                ["l", - 0.21, 0.27],
                ["l", 0.18, 0.33],
                ["c", 0.57, 1.05, 0.93, 2.13, 1.02, 3.18],
                ["c", 0.06, 0.72, 0, 1.83, - 0.21, 2.79],
                ["c", - 0.18, 1.02, - 0.63, 2.34, - 1.02, 3.09],
                ["c", - 0.15, 0.33, - 0.48, 0.45, - 0.78, 0.3],
                ["c", - 0.18, - 0.09, - 0.27, - 0.18, - 0.33, - 0.33],
                ["c", - 0.09, - 0.18, - 0.06, - 0.3, 0.03, - 0.54],
                ["c", 0.75, - 1.5, 1.23, - 3.45, 1.17, - 4.89],
                ["c", - 0.06, - 1.02, - 0.42, - 2.01, - 1.17, - 3.15],
                ["c", - 0.48, - 0.72, - 1.02, - 1.35, - 1.89, - 2.22],
                ["c", - 0.57, - 0.57, - 1.56, - 1.5, - 1.92, - 1.77],
                ["l", - 0.12, - 0.09],
                ["l", 0, 1.68],
                ["l", 0, 1.68],
                ["l", - 0.21, 0],
                ["l", - 0.21, 0],
                ["l", 0, - 15],
                ["z"],
                ["m", 0.93, - 8.07],
                ["c", - 0.27, - 0.3, - 0.48, - 0.54, - 0.51, - 0.54],
                ["c", - 0, 0, - 0, 0.69, 0.03, 1.02],
                ["c", 0.15, 1.47, 0.75, 2.94, 2.04, 4.83],
                ["l", 1.08, 1.53],
                ["c", 0.39, 0.57, 0.84, 1.2, 0.99, 1.44],
                ["c", 0.15, 0.24, 0.3, 0.45, 0.3, 0.45],
                ["c", - 0, 0, 0.03, - 0.09, 0.06, - 0.21],
                ["c", 0.36, - 1.59, - 0.15, - 3.33, - 1.47, - 5.4],
                ["c", - 0.63, - 0.93, - 1.35, - 1.83, - 2.52, - 3.12],
                ["z"],
                ["m", 0.06, 6.72],
                ["c", - 0.24, - 0.21, - 0.48, - 0.42, - 0.51, - 0.45],
                ["l", - 0.06, - 0.06],
                ["l", 0, 0.33],
                ["c", 0, 1.2, 0.3, 2.34, 0.93, 3.6],
                ["c", 0.45, 0.9, 0.96, 1.68, 2.25, 3.51],
                ["c", 0.39, 0.54, 0.84, 1.17, 1.02, 1.44],
                ["c", 0.21, 0.33, 0.33, 0.51, 0.33, 0.48],
                ["c", 0.06, - 0.09, 0.21, - 0.63, 0.3, - 0.99],
                ["c", 0.06, - 0.33, 0.06, - 0.45, 0.06, - 0.96],
                ["c", - 0, - 0.6, - 0.03, - 0.84, - 0.18, - 1.35],
                ["c", - 0.3, - 1.08, - 1.02, - 2.28, - 2.13, - 3.57],
                ["c", - 0.39, - 0.45, - 1.44, - 1.47, - 2.01, - 1.98],
                ["z"],
                ["m", 0, 6.72],
                ["c", - 0.24, - 0.21, - 0.48, - 0.39, - 0.51, - 0.42],
                ["l", - 0.06, - 0.06],
                ["l", 0, 0.33],
                ["c", 0, 1.41, 0.45, 2.82, 1.38, 4.35],
                ["c", 0.42, 0.72, 0.72, 1.14, 1.86, 2.73],
                ["c", 0.36, 0.45, 0.75, 0.99, 0.87, 1.2],
                ["c", 0.15, 0.21, 0.3, 0.36, 0.3, 0.36],
                ["c", 0.06, 0, 0.3, - 0.48, 0.39, - 0.75],
                ["c", 0.09, - 0.36, 0.12, - 0.63, 0.12, - 1.05],
                ["c", - 0.06, - 1.05, - 0.45, - 2.04, - 1.2, - 3.18],
                ["c", - 0.57, - 0.87, - 1.11, - 1.53, - 2.07, - 2.49],
                ["c", - 0.36, - 0.33, - 0.84, - 0.78, - 1.08, - 1.02],
                ["z"]
            ],
            w: 6.682,
            h: 39.694
        },
        "flags.d8th": {
            d: [
                ["M", 5.67, - 21.63],
                ["c", 0.24, - 0.12, 0.54, - 0.06, 0.69, 0.15],
                ["c", 0.06, 0.06, 0.21, 0.36, 0.39, 0.66],
                ["c", 0.84, 1.77, 1.26, 3.36, 1.32, 5.1],
                ["c", 0.03, 1.29, - 0.21, 2.37, - 0.81, 3.63],
                ["c", - 0.6, 1.23, - 1.26, 2.13, - 3.21, 4.38],
                ["c", - 1.35, 1.53, - 1.86, 2.19, - 2.4, 2.97],
                ["c", - 0.63, 0.93, - 1.11, 1.92, - 1.38, 2.79],
                ["c", - 0.15, 0.54, - 0.27, 1.35, - 0.27, 1.8],
                ["l", 0, 0.15],
                ["l", - 0.21, - 0],
                ["l", - 0.21, - 0],
                ["l", 0, - 3.75],
                ["l", 0, - 3.75],
                ["l", 0.21, 0],
                ["l", 0.21, 0],
                ["l", 0.48, - 0.3],
                ["c", 1.83, - 1.11, 3.12, - 2.1, 4.17, - 3.12],
                ["c", 0.78, - 0.81, 1.32, - 1.53, 1.71, - 2.31],
                ["c", 0.45, - 0.93, 0.6, - 1.74, 0.51, - 2.88],
                ["c", - 0.12, - 1.56, - 0.63, - 3.18, - 1.47, - 4.68],
                ["c", - 0.12, - 0.21, - 0.15, - 0.33, - 0.06, - 0.51],
                ["c", 0.06, - 0.15, 0.15, - 0.24, 0.33, - 0.33],
                ["z"]
            ],
            w: 8.492,
            h: 21.691
        },
        "flags.ugrace": {
            d: [
                ["M", 6.03, 6.93],
                ["c", 0.15, - 0.09, 0.33, - 0.06, 0.51, 0],
                ["c", 0.15, 0.09, 0.21, 0.15, 0.3, 0.33],
                ["c", 0.09, 0.18, 0.06, 0.39, - 0.03, 0.54],
                ["c", - 0.06, 0.15, - 10.89, 8.88, - 11.07, 8.97],
                ["c", - 0.15, 0.09, - 0.33, 0.06, - 0.48, 0],
                ["c", - 0.18, - 0.09, - 0.24, - 0.15, - 0.33, - 0.33],
                ["c", - 0.09, - 0.18, - 0.06, - 0.39, 0.03, - 0.54],
                ["c", 0.06, - 0.15, 10.89, - 8.88, 11.07, - 8.97],
                ["z"]
            ],
            w: 12.019,
            h: 9.954
        },
        "flags.dgrace": {
            d: [
                ["M", - 6.06, - 15.93],
                ["c", 0.18, - 0.09, 0.33, - 0.12, 0.48, - 0.06],
                ["c", 0.18, 0.09, 14.01, 8.04, 14.1, 8.1],
                ["c", 0.12, 0.12, 0.18, 0.33, 0.18, 0.51],
                ["c", - 0.03, 0.21, - 0.15, 0.39, - 0.36, 0.48],
                ["c", - 0.18, 0.09, - 0.33, 0.12, - 0.48, 0.06],
                ["c", - 0.18, - 0.09, - 14.01, - 8.04, - 14.1, - 8.1],
                ["c", - 0.12, - 0.12, - 0.18, - 0.33, - 0.18, - 0.51],
                ["c", 0.03, - 0.21, 0.15, - 0.39, 0.36, - 0.48],
                ["z"]
            ],
            w: 15.12,
            h: 9.212
        },
        "flags.d16th": {
            d: [
                ["M", 6.84, - 22.53],
                ["c", 0.27, - 0.12, 0.57, - 0.06, 0.72, 0.15],
                ["c", 0.15, 0.15, 0.33, 0.87, 0.45, 1.56],
                ["c", 0.06, 0.33, 0.06, 1.35, 0, 1.65],
                ["c", - 0.06, 0.33, - 0.15, 0.78, - 0.27, 1.11],
                ["c", - 0.12, 0.33, - 0.45, 0.96, - 0.66, 1.32],
                ["l", - 0.18, 0.27],
                ["l", 0.09, 0.18],
                ["c", 0.48, 1.02, 0.72, 2.25, 0.69, 3.3],
                ["c", - 0.06, 1.23, - 0.42, 2.28, - 1.26, 3.45],
                ["c", - 0.57, 0.87, - 0.99, 1.32, - 3, 3.39],
                ["c", - 1.56, 1.56, - 2.22, 2.4, - 2.76, 3.45],
                ["c", - 0.42, 0.84, - 0.66, 1.8, - 0.66, 2.55],
                ["l", 0, 0.15],
                ["l", - 0.21, - 0],
                ["l", - 0.21, - 0],
                ["l", 0, - 7.5],
                ["l", 0, - 7.5],
                ["l", 0.21, - 0],
                ["l", 0.21, - 0],
                ["l", 0, 1.14],
                ["l", 0, 1.11],
                ["l", 0.27, - 0.15],
                ["c", 1.11, - 0.57, 1.77, - 0.99, 2.52, - 1.47],
                ["c", 2.37, - 1.56, 3.69, - 3.15, 4.05, - 4.83],
                ["c", 0.03, - 0.18, 0.03, - 0.39, 0.03, - 0.78],
                ["c", 0, - 0.6, - 0.03, - 0.93, - 0.24, - 1.5],
                ["c", - 0.06, - 0.18, - 0.12, - 0.39, - 0.15, - 0.45],
                ["c", - 0.03, - 0.24, 0.12, - 0.48, 0.36, - 0.6],
                ["z"],
                ["m", - 0.63, 7.5],
                ["c", - 0.06, - 0.18, - 0.15, - 0.36, - 0.15, - 0.36],
                ["c", - 0.03, 0, - 0.03, 0.03, - 0.06, 0.06],
                ["c", - 0.06, 0.12, - 0.96, 1.02, - 1.95, 1.98],
                ["c", - 0.63, 0.57, - 1.26, 1.17, - 1.44, 1.35],
                ["c", - 1.53, 1.62, - 2.28, 2.85, - 2.55, 4.32],
                ["c", - 0.03, 0.18, - 0.03, 0.54, - 0.06, 0.99],
                ["l", 0, 0.69],
                ["l", 0.18, - 0.09],
                ["c", 0.93, - 0.54, 2.1, - 1.29, 2.82, - 1.83],
                ["c", 0.69, - 0.51, 1.02, - 0.81, 1.53, - 1.29],
                ["c", 1.86, - 1.89, 2.37, - 3.66, 1.68, - 5.82],
                ["z"]
            ],
            w: 8.475,
            h: 22.591
        },
        "flags.d32nd": {
            d: [
                ["M", 6.794, - 29.13],
                ["c", 0.27, - 0.12, 0.57, - 0.06, 0.72, 0.15],
                ["c", 0.12, 0.12, 0.27, 0.63, 0.36, 1.11],
                ["c", 0.33, 1.59, 0.06, 3.06, - 0.81, 4.47],
                ["l", - 0.18, 0.27],
                ["l", 0.09, 0.15],
                ["c", 0.12, 0.24, 0.33, 0.69, 0.45, 1.05],
                ["c", 0.63, 1.83, 0.45, 3.57, - 0.57, 5.22],
                ["l", - 0.18, 0.3],
                ["l", 0.15, 0.27],
                ["c", 0.42, 0.87, 0.6, 1.71, 0.57, 2.61],
                ["c", - 0.06, 1.29, - 0.48, 2.46, - 1.35, 3.78],
                ["c", - 0.54, 0.81, - 0.93, 1.29, - 2.46, 3],
                ["c", - 0.51, 0.54, - 1.05, 1.17, - 1.26, 1.41],
                ["c", - 1.56, 1.86, - 2.25, 3.36, - 2.37, 5.01],
                ["l", 0, 0.33],
                ["l", - 0.21, - 0],
                ["l", - 0.21, - 0],
                ["l", 0, - 11.25],
                ["l", 0, - 11.25],
                ["l", 0.21, 0],
                ["l", 0.21, 0],
                ["l", 0, 1.35],
                ["l", 0.03, 1.35],
                ["l", 0.78, - 0.39],
                ["c", 1.38, - 0.69, 2.34, - 1.26, 3.24, - 1.92],
                ["c", 1.38, - 1.02, 2.28, - 2.13, 2.64, - 3.21],
                ["c", 0.15, - 0.48, 0.18, - 0.72, 0.18, - 1.29],
                ["c", 0, - 0.57, - 0.06, - 0.9, - 0.24, - 1.47],
                ["c", - 0.06, - 0.18, - 0.12, - 0.39, - 0.15, - 0.45],
                ["c", - 0.03, - 0.24, 0.12, - 0.48, 0.36, - 0.6],
                ["z"],
                ["m", - 0.63, 7.2],
                ["c", - 0.09, - 0.18, - 0.12, - 0.21, - 0.12, - 0.15],
                ["c", - 0.03, 0.09, - 1.02, 1.08, - 2.04, 2.04],
                ["c", - 1.17, 1.08, - 1.65, 1.56, - 2.07, 2.04],
                ["c", - 0.84, 0.96, - 1.38, 1.86, - 1.68, 2.76],
                ["c", - 0.21, 0.57, - 0.27, 0.99, - 0.3, 1.65],
                ["l", 0, 0.54],
                ["l", 0.66, - 0.33],
                ["c", 3.57, - 1.86, 5.49, - 3.69, 5.94, - 5.7],
                ["c", 0.06, - 0.39, 0.06, - 1.2, - 0.03, - 1.65],
                ["c", - 0.06, - 0.39, - 0.24, - 0.9, - 0.36, - 1.2],
                ["z"],
                ["m", - 0.06, 7.2],
                ["c", - 0.06, - 0.15, - 0.12, - 0.33, - 0.15, - 0.45],
                ["l", - 0.06, - 0.18],
                ["l", - 0.18, 0.21],
                ["l", - 1.83, 1.83],
                ["c", - 0.87, 0.9, - 1.77, 1.8, - 1.95, 2.01],
                ["c", - 1.08, 1.29, - 1.62, 2.31, - 1.89, 3.51],
                ["c", - 0.06, 0.3, - 0.06, 0.51, - 0.09, 0.93],
                ["l", 0, 0.57],
                ["l", 0.09, - 0.06],
                ["c", 0.75, - 0.45, 1.89, - 1.26, 2.52, - 1.74],
                ["c", 0.81, - 0.66, 1.74, - 1.53, 2.22, - 2.16],
                ["c", 1.26, - 1.53, 1.68, - 3.06, 1.32, - 4.47],
                ["z"]
            ],
            w: 8.475,
            h: 29.191
        },
        "flags.d64th": {
            d: [
                ["M", 7.08, - 32.88],
                ["c", 0.3, - 0.12, 0.66, - 0.03, 0.78, 0.24],
                ["c", 0.18, 0.33, 0.27, 2.1, 0.15, 2.64],
                ["c", - 0.09, 0.39, - 0.21, 0.78, - 0.39, 1.08],
                ["l", - 0.15, 0.3],
                ["l", 0.09, 0.27],
                ["c", 0.03, 0.12, 0.09, 0.45, 0.12, 0.69],
                ["c", 0.27, 1.44, 0.18, 2.55, - 0.3, 3.6],
                ["l", - 0.12, 0.33],
                ["l", 0.06, 0.42],
                ["c", 0.27, 1.35, 0.33, 2.82, 0.21, 3.63],
                ["c", - 0.12, 0.6, - 0.3, 1.23, - 0.57, 1.8],
                ["l", - 0.15, 0.27],
                ["l", 0.03, 0.42],
                ["c", 0.06, 1.02, 0.06, 2.7, 0.03, 3.06],
                ["c", - 0.15, 1.47, - 0.66, 2.76, - 1.74, 4.41],
                ["c", - 0.45, 0.69, - 0.75, 1.11, - 1.74, 2.37],
                ["c", - 1.05, 1.38, - 1.5, 1.98, - 1.95, 2.73],
                ["c", - 0.93, 1.5, - 1.38, 2.82, - 1.44, 4.2],
                ["l", 0, 0.42],
                ["l", - 0.21, - 0],
                ["l", - 0.21, - 0],
                ["l", 0, - 15],
                ["l", 0, - 15],
                ["l", 0.21, - 0],
                ["l", 0.21, - 0],
                ["l", 0, 1.86],
                ["l", 0, 1.89],
                ["c", 0, - 0, 0.21, - 0.03, 0.45, - 0.09],
                ["c", 2.22, - 0.39, 4.08, - 1.11, 5.19, - 2.01],
                ["c", 0.63, - 0.54, 1.02, - 1.14, 1.2, - 1.8],
                ["c", 0.06, - 0.3, 0.06, - 1.14, - 0.03, - 1.65],
                ["c", - 0.03, - 0.18, - 0.06, - 0.39, - 0.09, - 0.48],
                ["c", - 0.03, - 0.24, 0.12, - 0.48, 0.36, - 0.6],
                ["z"],
                ["m", - 0.45, 6.15],
                ["c", - 0.03, - 0.18, - 0.06, - 0.42, - 0.06, - 0.54],
                ["l", - 0.03, - 0.18],
                ["l", - 0.33, 0.3],
                ["c", - 0.42, 0.36, - 0.87, 0.72, - 1.68, 1.29],
                ["c", - 1.98, 1.38, - 2.25, 1.59, - 2.85, 2.16],
                ["c", - 0.75, 0.69, - 1.23, 1.44, - 1.47, 2.19],
                ["c", - 0.15, 0.45, - 0.18, 0.63, - 0.21, 1.35],
                ["l", 0, 0.66],
                ["l", 0.39, - 0.18],
                ["c", 1.83, - 0.9, 3.45, - 1.95, 4.47, - 2.91],
                ["c", 0.93, - 0.9, 1.53, - 1.83, 1.74, - 2.82],
                ["c", 0.06, - 0.33, 0.06, - 0.87, 0.03, - 1.32],
                ["z"],
                ["m", - 0.27, 4.86],
                ["c", - 0.03, - 0.21, - 0.06, - 0.36, - 0.06, - 0.36],
                ["c", 0, - 0.03, - 0.12, 0.09, - 0.24, 0.24],
                ["c", - 0.39, 0.48, - 0.99, 1.08, - 2.16, 2.19],
                ["c", - 1.47, 1.38, - 1.92, 1.83, - 2.46, 2.49],
                ["c", - 0.66, 0.87, - 1.08, 1.74, - 1.29, 2.58],
                ["c", - 0.09, 0.42, - 0.15, 0.87, - 0.15, 1.44],
                ["l", 0, 0.54],
                ["l", 0.48, - 0.33],
                ["c", 1.5, - 1.02, 2.58, - 1.89, 3.51, - 2.82],
                ["c", 1.47, - 1.47, 2.25, - 2.85, 2.4, - 4.26],
                ["c", 0.03, - 0.39, 0.03, - 1.17, - 0.03, - 1.71],
                ["z"],
                ["m", - 0.66, 7.68],
                ["c", 0.03, - 0.15, 0.03, - 0.6, 0.03, - 0.99],
                ["l", 0, - 0.72],
                ["l", - 0.27, 0.33],
                ["l", - 1.74, 1.98],
                ["c", - 1.77, 1.92, - 2.43, 2.76, - 2.97, 3.9],
                ["c", - 0.51, 1.02, - 0.72, 1.77, - 0.75, 2.91],
                ["c", 0, 0.63, 0, 0.63, 0.06, 0.6],
                ["c", 0.03, - 0.03, 0.3, - 0.27, 0.63, - 0.54],
                ["c", 0.66, - 0.6, 1.86, - 1.8, 2.31, - 2.31],
                ["c", 1.65, - 1.89, 2.52, - 3.54, 2.7, - 5.16],
                ["z"]
            ],
            w: 8.485,
            h: 32.932
        },
        "clefs.C": {
            d: [
                ["M", 0.06, - 14.94],
                ["l", 0.09, - 0.06],
                ["l", 1.92, 0],
                ["l", 1.92, 0],
                ["l", 0.09, 0.06],
                ["l", 0.06, 0.09],
                ["l", 0, 14.85],
                ["l", 0, 14.82],
                ["l", - 0.06, 0.09],
                ["l", - 0.09, 0.06],
                ["l", - 1.92, 0],
                ["l", - 1.92, 0],
                ["l", - 0.09, - 0.06],
                ["l", - 0.06, - 0.09],
                ["l", 0, - 14.82],
                ["l", 0, - 14.85],
                ["z"],
                ["m", 5.37, 0],
                ["c", 0.09, - 0.06, 0.09, - 0.06, 0.57, - 0.06],
                ["c", 0.45, 0, 0.45, 0, 0.54, 0.06],
                ["l", 0.06, 0.09],
                ["l", 0, 7.14],
                ["l", 0, 7.11],
                ["l", 0.09, - 0.06],
                ["c", 0.18, - 0.18, 0.72, - 0.84, 0.96, - 1.2],
                ["c", 0.3, - 0.45, 0.66, - 1.17, 0.84, - 1.65],
                ["c", 0.36, - 0.9, 0.57, - 1.83, 0.6, - 2.79],
                ["c", 0.03, - 0.48, 0.03, - 0.54, 0.09, - 0.63],
                ["c", 0.12, - 0.18, 0.36, - 0.21, 0.54, - 0.12],
                ["c", 0.18, 0.09, 0.21, 0.15, 0.24, 0.66],
                ["c", 0.06, 0.87, 0.21, 1.56, 0.57, 2.22],
                ["c", 0.51, 1.02, 1.26, 1.68, 2.22, 1.92],
                ["c", 0.21, 0.06, 0.33, 0.06, 0.78, 0.06],
                ["c", 0.45, - 0, 0.57, - 0, 0.84, - 0.06],
                ["c", 0.45, - 0.12, 0.81, - 0.33, 1.08, - 0.6],
                ["c", 0.57, - 0.57, 0.87, - 1.41, 0.99, - 2.88],
                ["c", 0.06, - 0.54, 0.06, - 3, 0, - 3.57],
                ["c", - 0.21, - 2.58, - 0.84, - 3.87, - 2.16, - 4.5],
                ["c", - 0.48, - 0.21, - 1.17, - 0.36, - 1.77, - 0.36],
                ["c", - 0.69, 0, - 1.29, 0.27, - 1.5, 0.72],
                ["c", - 0.06, 0.15, - 0.06, 0.21, - 0.06, 0.42],
                ["c", 0, 0.24, 0, 0.3, 0.06, 0.45],
                ["c", 0.12, 0.24, 0.24, 0.39, 0.63, 0.66],
                ["c", 0.42, 0.3, 0.57, 0.48, 0.69, 0.72],
                ["c", 0.06, 0.15, 0.06, 0.21, 0.06, 0.48],
                ["c", 0, 0.39, - 0.03, 0.63, - 0.21, 0.96],
                ["c", - 0.3, 0.6, - 0.87, 1.08, - 1.5, 1.26],
                ["c", - 0.27, 0.06, - 0.87, 0.06, - 1.14, 0],
                ["c", - 0.78, - 0.24, - 1.44, - 0.87, - 1.65, - 1.68],
                ["c", - 0.12, - 0.42, - 0.09, - 1.17, 0.09, - 1.71],
                ["c", 0.51, - 1.65, 1.98, - 2.82, 3.81, - 3.09],
                ["c", 0.84, - 0.09, 2.46, 0.03, 3.51, 0.27],
                ["c", 2.22, 0.57, 3.69, 1.8, 4.44, 3.75],
                ["c", 0.36, 0.93, 0.57, 2.13, 0.57, 3.36],
                ["c", - 0, 1.44, - 0.48, 2.73, - 1.38, 3.81],
                ["c", - 1.26, 1.5, - 3.27, 2.43, - 5.28, 2.43],
                ["c", - 0.48, - 0, - 0.51, - 0, - 0.75, - 0.09],
                ["c", - 0.15, - 0.03, - 0.48, - 0.21, - 0.78, - 0.36],
                ["c", - 0.69, - 0.36, - 0.87, - 0.42, - 1.26, - 0.42],
                ["c", - 0.27, - 0, - 0.3, - 0, - 0.51, 0.09],
                ["c", - 0.57, 0.3, - 0.81, 0.9, - 0.81, 2.1],
                ["c", - 0, 1.23, 0.24, 1.83, 0.81, 2.13],
                ["c", 0.21, 0.09, 0.24, 0.09, 0.51, 0.09],
                ["c", 0.39, - 0, 0.57, - 0.06, 1.26, - 0.42],
                ["c", 0.3, - 0.15, 0.63, - 0.33, 0.78, - 0.36],
                ["c", 0.24, - 0.09, 0.27, - 0.09, 0.75, - 0.09],
                ["c", 2.01, - 0, 4.02, 0.93, 5.28, 2.4],
                ["c", 0.9, 1.11, 1.38, 2.4, 1.38, 3.84],
                ["c", - 0, 1.5, - 0.3, 2.88, - 0.84, 3.96],
                ["c", - 0.78, 1.59, - 2.19, 2.64, - 4.17, 3.15],
                ["c", - 1.05, 0.24, - 2.67, 0.36, - 3.51, 0.27],
                ["c", - 1.83, - 0.27, - 3.3, - 1.44, - 3.81, - 3.09],
                ["c", - 0.18, - 0.54, - 0.21, - 1.29, - 0.09, - 1.74],
                ["c", 0.15, - 0.6, 0.63, - 1.2, 1.23, - 1.47],
                ["c", 0.36, - 0.18, 0.57, - 0.21, 0.99, - 0.21],
                ["c", 0.42, 0, 0.63, 0.03, 1.02, 0.21],
                ["c", 0.42, 0.21, 0.84, 0.63, 1.05, 1.05],
                ["c", 0.18, 0.36, 0.21, 0.6, 0.21, 0.96],
                ["c", - 0, 0.3, - 0, 0.36, - 0.06, 0.51],
                ["c", - 0.12, 0.24, - 0.27, 0.42, - 0.69, 0.72],
                ["c", - 0.57, 0.42, - 0.69, 0.63, - 0.69, 1.08],
                ["c", - 0, 0.24, - 0, 0.3, 0.06, 0.45],
                ["c", 0.12, 0.21, 0.3, 0.39, 0.57, 0.54],
                ["c", 0.42, 0.18, 0.87, 0.21, 1.53, 0.15],
                ["c", 1.08, - 0.15, 1.8, - 0.57, 2.34, - 1.32],
                ["c", 0.54, - 0.75, 0.84, - 1.83, 0.99, - 3.51],
                ["c", 0.06, - 0.57, 0.06, - 3.03, - 0, - 3.57],
                ["c", - 0.12, - 1.47, - 0.42, - 2.31, - 0.99, - 2.88],
                ["c", - 0.27, - 0.27, - 0.63, - 0.48, - 1.08, - 0.6],
                ["c", - 0.27, - 0.06, - 0.39, - 0.06, - 0.84, - 0.06],
                ["c", - 0.45, 0, - 0.57, 0, - 0.78, 0.06],
                ["c", - 1.14, 0.27, - 2.01, 1.17, - 2.46, 2.49],
                ["c", - 0.21, 0.57, - 0.3, 0.99, - 0.33, 1.65],
                ["c", - 0.03, 0.51, - 0.06, 0.57, - 0.24, 0.66],
                ["c", - 0.12, 0.06, - 0.27, 0.06, - 0.39, 0],
                ["c", - 0.21, - 0.09, - 0.21, - 0.15, - 0.24, - 0.75],
                ["c", - 0.09, - 1.92, - 0.78, - 3.72, - 2.01, - 5.19],
                ["c", - 0.18, - 0.21, - 0.36, - 0.42, - 0.39, - 0.45],
                ["l", - 0.09, - 0.06],
                ["l", - 0, 7.11],
                ["l", - 0, 7.14],
                ["l", - 0.06, 0.09],
                ["c", - 0.09, 0.06, - 0.09, 0.06, - 0.54, 0.06],
                ["c", - 0.48, 0, - 0.48, 0, - 0.57, - 0.06],
                ["l", - 0.06, - 0.09],
                ["l", - 0, - 14.82],
                ["l", - 0, - 14.85],
                ["z"]
            ],
            w: 20.31,
            h: 29.97
        },
        "clefs.F": {
            d: [
                ["M", 6.3, - 7.8],
                ["c", 0.36, - 0.03, 1.65, 0, 2.13, 0.03],
                ["c", 3.6, 0.42, 6.03, 2.1, 6.93, 4.86],
                ["c", 0.27, 0.84, 0.36, 1.5, 0.36, 2.58],
                ["c", 0, 0.9, - 0.03, 1.35, - 0.18, 2.16],
                ["c", - 0.78, 3.78, - 3.54, 7.08, - 8.37, 9.96],
                ["c", - 1.74, 1.05, - 3.87, 2.13, - 6.18, 3.12],
                ["c", - 0.39, 0.18, - 0.75, 0.33, - 0.81, 0.36],
                ["c", - 0.06, 0.03, - 0.15, 0.06, - 0.18, 0.06],
                ["c", - 0.15, 0, - 0.33, - 0.18, - 0.33, - 0.33],
                ["c", 0, - 0.15, 0.06, - 0.21, 0.51, - 0.48],
                ["c", 3, - 1.77, 5.13, - 3.21, 6.84, - 4.74],
                ["c", 0.51, - 0.45, 1.59, - 1.5, 1.95, - 1.95],
                ["c", 1.89, - 2.19, 2.88, - 4.32, 3.15, - 6.78],
                ["c", 0.06, - 0.42, 0.06, - 1.77, 0, - 2.19],
                ["c", - 0.24, - 2.01, - 0.93, - 3.63, - 2.04, - 4.71],
                ["c", - 0.63, - 0.63, - 1.29, - 1.02, - 2.07, - 1.2],
                ["c", - 1.62, - 0.39, - 3.36, 0.15, - 4.56, 1.44],
                ["c", - 0.54, 0.6, - 1.05, 1.47, - 1.32, 2.22],
                ["l", - 0.09, 0.21],
                ["l", 0.24, - 0.12],
                ["c", 0.39, - 0.21, 0.63, - 0.24, 1.11, - 0.24],
                ["c", 0.3, 0, 0.45, 0, 0.66, 0.06],
                ["c", 1.92, 0.48, 2.85, 2.55, 1.95, 4.38],
                ["c", - 0.45, 0.99, - 1.41, 1.62, - 2.46, 1.71],
                ["c", - 1.47, 0.09, - 2.91, - 0.87, - 3.39, - 2.25],
                ["c", - 0.18, - 0.57, - 0.21, - 1.32, - 0.03, - 2.28],
                ["c", 0.39, - 2.25, 1.83, - 4.2, 3.81, - 5.19],
                ["c", 0.69, - 0.36, 1.59, - 0.6, 2.37, - 0.69],
                ["z"],
                ["m", 11.58, 2.52],
                ["c", 0.84, - 0.21, 1.71, 0.3, 1.89, 1.14],
                ["c", 0.3, 1.17, - 0.72, 2.19, - 1.89, 1.89],
                ["c", - 0.99, - 0.21, - 1.5, - 1.32, - 1.02, - 2.25],
                ["c", 0.18, - 0.39, 0.6, - 0.69, 1.02, - 0.78],
                ["z"],
                ["m", 0, 7.5],
                ["c", 0.84, - 0.21, 1.71, 0.3, 1.89, 1.14],
                ["c", 0.21, 0.87, - 0.3, 1.71, - 1.14, 1.89],
                ["c", - 0.87, 0.21, - 1.71, - 0.3, - 1.89, - 1.14],
                ["c", - 0.21, - 0.84, 0.3, - 1.71, 1.14, - 1.89],
                ["z"]
            ],
            w: 20.153,
            h: 23.142
        },
        "clefs.G": {
            d: [
                ["M", 9.69, - 37.41],
                ["c", 0.09, - 0.09, 0.24, - 0.06, 0.36, 0],
                ["c", 0.12, 0.09, 0.57, 0.6, 0.96, 1.11],
                ["c", 1.77, 2.34, 3.21, 5.85, 3.57, 8.73],
                ["c", 0.21, 1.56, 0.03, 3.27, - 0.45, 4.86],
                ["c", - 0.69, 2.31, - 1.92, 4.47, - 4.23, 7.44],
                ["c", - 0.3, 0.39, - 0.57, 0.72, - 0.6, 0.75],
                ["c", - 0.03, 0.06, 0, 0.15, 0.18, 0.78],
                ["c", 0.54, 1.68, 1.38, 4.44, 1.68, 5.49],
                ["l", 0.09, 0.42],
                ["l", 0.39, - 0],
                ["c", 1.47, 0.09, 2.76, 0.51, 3.96, 1.29],
                ["c", 1.83, 1.23, 3.06, 3.21, 3.39, 5.52],
                ["c", 0.09, 0.45, 0.12, 1.29, 0.06, 1.74],
                ["c", - 0.09, 1.02, - 0.33, 1.83, - 0.75, 2.73],
                ["c", - 0.84, 1.71, - 2.28, 3.06, - 4.02, 3.72],
                ["l", - 0.33, 0.12],
                ["l", 0.03, 1.26],
                ["c", 0, 1.74, - 0.06, 3.63, - 0.21, 4.62],
                ["c", - 0.45, 3.06, - 2.19, 5.49, - 4.47, 6.21],
                ["c", - 0.57, 0.18, - 0.9, 0.21, - 1.59, 0.21],
                ["c", - 0.69, - 0, - 1.02, - 0.03, - 1.65, - 0.21],
                ["c", - 1.14, - 0.27, - 2.13, - 0.84, - 2.94, - 1.65],
                ["c", - 0.99, - 0.99, - 1.56, - 2.16, - 1.71, - 3.54],
                ["c", - 0.09, - 0.81, 0.06, - 1.53, 0.45, - 2.13],
                ["c", 0.63, - 0.99, 1.83, - 1.56, 3, - 1.53],
                ["c", 1.5, 0.09, 2.64, 1.32, 2.73, 2.94],
                ["c", 0.06, 1.47, - 0.93, 2.7, - 2.37, 2.97],
                ["c", - 0.45, 0.06, - 0.84, 0.03, - 1.29, - 0.09],
                ["l", - 0.21, - 0.09],
                ["l", 0.09, 0.12],
                ["c", 0.39, 0.54, 0.78, 0.93, 1.32, 1.26],
                ["c", 1.35, 0.87, 3.06, 1.02, 4.35, 0.36],
                ["c", 1.44, - 0.72, 2.52, - 2.28, 2.97, - 4.35],
                ["c", 0.15, - 0.66, 0.24, - 1.5, 0.3, - 3.03],
                ["c", 0.03, - 0.84, 0.03, - 2.94, - 0, - 3],
                ["c", - 0.03, - 0, - 0.18, - 0, - 0.36, 0.03],
                ["c", - 0.66, 0.12, - 0.99, 0.12, - 1.83, 0.12],
                ["c", - 1.05, - 0, - 1.71, - 0.06, - 2.61, - 0.3],
                ["c", - 4.02, - 0.99, - 7.11, - 4.35, - 7.8, - 8.46],
                ["c", - 0.12, - 0.66, - 0.12, - 0.99, - 0.12, - 1.83],
                ["c", - 0, - 0.84, - 0, - 1.14, 0.15, - 1.92],
                ["c", 0.36, - 2.28, 1.41, - 4.62, 3.3, - 7.29],
                ["l", 2.79, - 3.6],
                ["c", 0.54, - 0.66, 0.96, - 1.2, 0.96, - 1.23],
                ["c", - 0, - 0.03, - 0.09, - 0.33, - 0.18, - 0.69],
                ["c", - 0.96, - 3.21, - 1.41, - 5.28, - 1.59, - 7.68],
                ["c", - 0.12, - 1.38, - 0.15, - 3.09, - 0.06, - 3.96],
                ["c", 0.33, - 2.67, 1.38, - 5.07, 3.12, - 7.08],
                ["c", 0.36, - 0.42, 0.99, - 1.05, 1.17, - 1.14],
                ["z"],
                ["m", 2.01, 4.71],
                ["c", - 0.15, - 0.3, - 0.3, - 0.54, - 0.3, - 0.54],
                ["c", - 0.03, 0, - 0.18, 0.09, - 0.3, 0.21],
                ["c", - 2.4, 1.74, - 3.87, 4.2, - 4.26, 7.11],
                ["c", - 0.06, 0.54, - 0.06, 1.41, - 0.03, 1.89],
                ["c", 0.09, 1.29, 0.48, 3.12, 1.08, 5.22],
                ["c", 0.15, 0.42, 0.24, 0.78, 0.24, 0.81],
                ["c", 0, 0.03, 0.84, - 1.11, 1.23, - 1.68],
                ["c", 1.89, - 2.73, 2.88, - 5.07, 3.15, - 7.53],
                ["c", 0.09, - 0.57, 0.12, - 1.74, 0.06, - 2.37],
                ["c", - 0.09, - 1.23, - 0.27, - 1.92, - 0.87, - 3.12],
                ["z"],
                ["m", - 2.94, 20.7],
                ["c", - 0.21, - 0.72, - 0.39, - 1.32, - 0.42, - 1.32],
                ["c", 0, 0, - 1.2, 1.47, - 1.86, 2.37],
                ["c", - 2.79, 3.63, - 4.02, 6.3, - 4.35, 9.3],
                ["c", - 0.03, 0.21, - 0.03, 0.69, - 0.03, 1.08],
                ["c", 0, 0.69, 0, 0.75, 0.06, 1.11],
                ["c", 0.12, 0.54, 0.27, 0.99, 0.51, 1.47],
                ["c", 0.69, 1.38, 1.83, 2.55, 3.42, 3.42],
                ["c", 0.96, 0.54, 2.07, 0.9, 3.21, 1.08],
                ["c", 0.78, 0.12, 2.04, 0.12, 2.94, - 0.03],
                ["c", 0.51, - 0.06, 0.45, - 0.03, 0.42, - 0.3],
                ["c", - 0.24, - 3.33, - 0.72, - 6.33, - 1.62, - 10.08],
                ["c", - 0.09, - 0.39, - 0.18, - 0.75, - 0.18, - 0.78],
                ["c", - 0.03, - 0.03, - 0.42, - 0, - 0.81, 0.09],
                ["c", - 0.9, 0.18, - 1.65, 0.57, - 2.22, 1.14],
                ["c", - 0.72, 0.72, - 1.08, 1.65, - 1.05, 2.64],
                ["c", 0.06, 0.96, 0.48, 1.83, 1.23, 2.58],
                ["c", 0.36, 0.36, 0.72, 0.63, 1.17, 0.9],
                ["c", 0.33, 0.18, 0.36, 0.21, 0.42, 0.33],
                ["c", 0.18, 0.42, - 0.18, 0.9, - 0.6, 0.87],
                ["c", - 0.18, - 0.03, - 0.84, - 0.36, - 1.26, - 0.63],
                ["c", - 0.78, - 0.51, - 1.38, - 1.11, - 1.86, - 1.83],
                ["c", - 1.77, - 2.7, - 0.99, - 6.42, 1.71, - 8.19],
                ["c", 0.3, - 0.21, 0.81, - 0.48, 1.17, - 0.63],
                ["c", 0.3, - 0.09, 1.02, - 0.3, 1.14, - 0.3],
                ["c", 0.06, - 0, 0.09, - 0, 0.09, - 0.03],
                ["c", 0.03, - 0.03, - 0.51, - 1.92, - 1.23, - 4.26],
                ["z"],
                ["m", 3.78, 7.41],
                ["c", - 0.18, - 0.03, - 0.36, - 0.06, - 0.39, - 0.06],
                ["c", - 0.03, 0, 0, 0.21, 0.18, 1.02],
                ["c", 0.75, 3.18, 1.26, 6.3, 1.5, 9.09],
                ["c", 0.06, 0.72, 0, 0.69, 0.51, 0.42],
                ["c", 0.78, - 0.36, 1.44, - 0.96, 1.98, - 1.77],
                ["c", 1.08, - 1.62, 1.2, - 3.69, 0.3, - 5.55],
                ["c", - 0.81, - 1.62, - 2.31, - 2.79, - 4.08, - 3.15],
                ["z"]
            ],
            w: 19.051,
            h: 57.057
        },
        "clefs.perc": {
            d: [
                ["M", 5.07, - 7.44],
                ["l", 0.09, - 0.06],
                ["l", 1.53, 0],
                ["l", 1.53, 0],
                ["l", 0.09, 0.06],
                ["l", 0.06, 0.09],
                ["l", 0, 7.35],
                ["l", 0, 7.32],
                ["l", - 0.06, 0.09],
                ["l", - 0.09, 0.06],
                ["l", - 1.53, - 0],
                ["l", - 1.53, - 0],
                ["l", - 0.09, - 0.06],
                ["l", - 0.06, - 0.09],
                ["l", 0, - 7.32],
                ["l", 0, - 7.35],
                ["z"],
                ["m", 6.63, 0],
                ["l", 0.09, - 0.06],
                ["l", 1.53, 0],
                ["l", 1.53, 0],
                ["l", 0.09, 0.06],
                ["l", 0.06, 0.09],
                ["l", 0, 7.35],
                ["l", 0, 7.32],
                ["l", - 0.06, 0.09],
                ["l", - 0.09, 0.06],
                ["l", - 1.53, - 0],
                ["l", - 1.53, - 0],
                ["l", - 0.09, - 0.06],
                ["l", - 0.06, - 0.09],
                ["l", 0, - 7.32],
                ["l", 0, - 7.35],
                ["z"]
            ],
            w: 9.99,
            h: 14.97
        },
        "timesig.common": {
            d: [
                ["M", 6.66, - 7.826],
                ["c", 0.72, - 0.06, 1.41, - 0.03, 1.98, 0.09],
                ["c", 1.2, 0.27, 2.34, 0.96, 3.09, 1.92],
                ["c", 0.63, 0.81, 1.08, 1.86, 1.14, 2.73],
                ["c", 0.06, 1.02, - 0.51, 1.92, - 1.44, 2.22],
                ["c", - 0.24, 0.09, - 0.3, 0.09, - 0.63, 0.09],
                ["c", - 0.33, - 0, - 0.42, - 0, - 0.63, - 0.06],
                ["c", - 0.66, - 0.24, - 1.14, - 0.63, - 1.41, - 1.2],
                ["c", - 0.15, - 0.3, - 0.21, - 0.51, - 0.24, - 0.9],
                ["c", - 0.06, - 1.08, 0.57, - 2.04, 1.56, - 2.37],
                ["c", 0.18, - 0.06, 0.27, - 0.06, 0.63, - 0.06],
                ["l", 0.45, 0],
                ["c", 0.06, 0.03, 0.09, 0.03, 0.09, 0],
                ["c", 0, 0, - 0.09, - 0.12, - 0.24, - 0.27],
                ["c", - 1.02, - 1.11, - 2.55, - 1.68, - 4.08, - 1.5],
                ["c", - 1.29, 0.15, - 2.04, 0.69, - 2.4, 1.74],
                ["c", - 0.36, 0.93, - 0.42, 1.89, - 0.42, 5.37],
                ["c", 0, 2.97, 0.06, 3.96, 0.24, 4.77],
                ["c", 0.24, 1.08, 0.63, 1.68, 1.41, 2.07],
                ["c", 0.81, 0.39, 2.16, 0.45, 3.18, 0.09],
                ["c", 1.29, - 0.45, 2.37, - 1.53, 3.03, - 2.97],
                ["c", 0.15, - 0.33, 0.33, - 0.87, 0.39, - 1.17],
                ["c", 0.09, - 0.24, 0.15, - 0.36, 0.3, - 0.39],
                ["c", 0.21, - 0.03, 0.42, 0.15, 0.39, 0.36],
                ["c", - 0.06, 0.39, - 0.42, 1.38, - 0.69, 1.89],
                ["c", - 0.96, 1.8, - 2.49, 2.94, - 4.23, 3.18],
                ["c", - 0.99, 0.12, - 2.58, - 0.06, - 3.63, - 0.45],
                ["c", - 0.96, - 0.36, - 1.71, - 0.84, - 2.4, - 1.5],
                ["c", - 1.11, - 1.11, - 1.8, - 2.61, - 2.04, - 4.56],
                ["c", - 0.06, - 0.6, - 0.06, - 2.01, 0, - 2.61],
                ["c", 0.24, - 1.95, 0.9, - 3.45, 2.01, - 4.56],
                ["c", 0.69, - 0.66, 1.44, - 1.11, 2.37, - 1.47],
                ["c", 0.63, - 0.24, 1.47, - 0.42, 2.22, - 0.48],
                ["z"]
            ],
            w: 13.038,
            h: 15.697
        },
        "timesig.cut": {
            d: [
                ["M", 6.24, - 10.44],
                ["c", 0.09, - 0.06, 0.09, - 0.06, 0.48, - 0.06],
                ["c", 0.36, 0, 0.36, 0, 0.45, 0.06],
                ["l", 0.06, 0.09],
                ["l", 0, 1.23],
                ["l", 0, 1.26],
                ["l", 0.27, 0],
                ["c", 1.26, 0, 2.49, 0.45, 3.48, 1.29],
                ["c", 1.05, 0.87, 1.8, 2.28, 1.89, 3.48],
                ["c", 0.06, 1.02, - 0.51, 1.92, - 1.44, 2.22],
                ["c", - 0.24, 0.09, - 0.3, 0.09, - 0.63, 0.09],
                ["c", - 0.33, - 0, - 0.42, - 0, - 0.63, - 0.06],
                ["c", - 0.66, - 0.24, - 1.14, - 0.63, - 1.41, - 1.2],
                ["c", - 0.15, - 0.3, - 0.21, - 0.51, - 0.24, - 0.9],
                ["c", - 0.06, - 1.08, 0.57, - 2.04, 1.56, - 2.37],
                ["c", 0.18, - 0.06, 0.27, - 0.06, 0.63, - 0.06],
                ["l", 0.45, - 0],
                ["c", 0.06, 0.03, 0.09, 0.03, 0.09, - 0],
                ["c", 0, - 0.03, - 0.45, - 0.51, - 0.66, - 0.69],
                ["c", - 0.87, - 0.69, - 1.83, - 1.05, - 2.94, - 1.11],
                ["l", - 0.42, 0],
                ["l", 0, 7.17],
                ["l", 0, 7.14],
                ["l", 0.42, 0],
                ["c", 0.69, - 0.03, 1.23, - 0.18, 1.86, - 0.51],
                ["c", 1.05, - 0.51, 1.89, - 1.47, 2.46, - 2.7],
                ["c", 0.15, - 0.33, 0.33, - 0.87, 0.39, - 1.17],
                ["c", 0.09, - 0.24, 0.15, - 0.36, 0.3, - 0.39],
                ["c", 0.21, - 0.03, 0.42, 0.15, 0.39, 0.36],
                ["c", - 0.03, 0.24, - 0.21, 0.78, - 0.39, 1.2],
                ["c", - 0.96, 2.37, - 2.94, 3.9, - 5.13, 3.9],
                ["l", - 0.3, 0],
                ["l", 0, 1.26],
                ["l", 0, 1.23],
                ["l", - 0.06, 0.09],
                ["c", - 0.09, 0.06, - 0.09, 0.06, - 0.45, 0.06],
                ["c", - 0.39, 0, - 0.39, 0, - 0.48, - 0.06],
                ["l", - 0.06, - 0.09],
                ["l", 0, - 1.29],
                ["l", 0, - 1.29],
                ["l", - 0.21, - 0.03],
                ["c", - 1.23, - 0.21, - 2.31, - 0.63, - 3.21, - 1.29],
                ["c", - 0.15, - 0.09, - 0.45, - 0.36, - 0.66, - 0.57],
                ["c", - 1.11, - 1.11, - 1.8, - 2.61, - 2.04, - 4.56],
                ["c", - 0.06, - 0.6, - 0.06, - 2.01, 0, - 2.61],
                ["c", 0.24, - 1.95, 0.93, - 3.45, 2.04, - 4.59],
                ["c", 0.42, - 0.39, 0.78, - 0.66, 1.26, - 0.93],
                ["c", 0.75, - 0.45, 1.65, - 0.75, 2.61, - 0.9],
                ["l", 0.21, - 0.03],
                ["l", 0, - 1.29],
                ["l", 0, - 1.29],
                ["z"],
                ["m", - 0.06, 10.44],
                ["c", 0, - 5.58, 0, - 6.99, - 0.03, - 6.99],
                ["c", - 0.15, 0, - 0.63, 0.27, - 0.87, 0.45],
                ["c", - 0.45, 0.36, - 0.75, 0.93, - 0.93, 1.77],
                ["c", - 0.18, 0.81, - 0.24, 1.8, - 0.24, 4.74],
                ["c", 0, 2.97, 0.06, 3.96, 0.24, 4.77],
                ["c", 0.24, 1.08, 0.66, 1.68, 1.41, 2.07],
                ["c", 0.12, 0.06, 0.3, 0.12, 0.33, 0.15],
                ["l", 0.09, 0],
                ["l", 0, - 6.96],
                ["z"]
            ],
            w: 13.038,
            h: 20.97
        },
        "0": {
            d: [
                ["M", 4.83, - 14.97],
                ["c", 0.33, - 0.03, 1.11, 0, 1.47, 0.06],
                ["c", 1.68, 0.36, 2.97, 1.59, 3.78, 3.6],
                ["c", 1.2, 2.97, 0.81, 6.96, - 0.9, 9.27],
                ["c", - 0.78, 1.08, - 1.71, 1.71, - 2.91, 1.95],
                ["c", - 0.45, 0.09, - 1.32, 0.09, - 1.77, 0],
                ["c", - 0.81, - 0.18, - 1.47, - 0.51, - 2.07, - 1.02],
                ["c", - 2.34, - 2.07, - 3.15, - 6.72, - 1.74, - 10.2],
                ["c", 0.87, - 2.16, 2.28, - 3.42, 4.14, - 3.66],
                ["z"],
                ["m", 1.11, 0.87],
                ["c", - 0.21, - 0.06, - 0.69, - 0.09, - 0.87, - 0.06],
                ["c", - 0.54, 0.12, - 0.87, 0.42, - 1.17, 0.99],
                ["c", - 0.36, 0.66, - 0.51, 1.56, - 0.6, 3],
                ["c", - 0.03, 0.75, - 0.03, 4.59, - 0, 5.31],
                ["c", 0.09, 1.5, 0.27, 2.4, 0.6, 3.06],
                ["c", 0.24, 0.48, 0.57, 0.78, 0.96, 0.9],
                ["c", 0.27, 0.09, 0.78, 0.09, 1.05, - 0],
                ["c", 0.39, - 0.12, 0.72, - 0.42, 0.96, - 0.9],
                ["c", 0.33, - 0.66, 0.51, - 1.56, 0.6, - 3.06],
                ["c", 0.03, - 0.72, 0.03, - 4.56, - 0, - 5.31],
                ["c", - 0.09, - 1.47, - 0.27, - 2.37, - 0.6, - 3.03],
                ["c", - 0.24, - 0.48, - 0.54, - 0.78, - 0.93, - 0.9],
                ["z"]
            ],
            w: 10.78,
            h: 14.959
        },
        "1": {
            d: [
                ["M", 3.3, - 15.06],
                ["c", 0.06, - 0.06, 0.21, - 0.03, 0.66, 0.15],
                ["c", 0.81, 0.39, 1.08, 0.39, 1.83, 0.03],
                ["c", 0.21, - 0.09, 0.39, - 0.15, 0.42, - 0.15],
                ["c", 0.12, 0, 0.21, 0.09, 0.27, 0.21],
                ["c", 0.06, 0.12, 0.06, 0.33, 0.06, 5.94],
                ["c", 0, 3.93, 0, 5.85, 0.03, 6.03],
                ["c", 0.06, 0.36, 0.15, 0.69, 0.27, 0.96],
                ["c", 0.36, 0.75, 0.93, 1.17, 1.68, 1.26],
                ["c", 0.3, 0.03, 0.39, 0.09, 0.39, 0.3],
                ["c", 0, 0.15, - 0.03, 0.18, - 0.09, 0.24],
                ["c", - 0.06, 0.06, - 0.09, 0.06, - 0.48, 0.06],
                ["c", - 0.42, - 0, - 0.69, - 0.03, - 2.1, - 0.24],
                ["c", - 0.9, - 0.15, - 1.77, - 0.15, - 2.67, - 0],
                ["c", - 1.41, 0.21, - 1.68, 0.24, - 2.1, 0.24],
                ["c", - 0.39, - 0, - 0.42, - 0, - 0.48, - 0.06],
                ["c", - 0.06, - 0.06, - 0.06, - 0.09, - 0.06, - 0.24],
                ["c", 0, - 0.21, 0.06, - 0.27, 0.36, - 0.3],
                ["c", 0.75, - 0.09, 1.32, - 0.51, 1.68, - 1.26],
                ["c", 0.12, - 0.27, 0.21, - 0.6, 0.27, - 0.96],
                ["c", 0.03, - 0.18, 0.03, - 1.59, 0.03, - 4.29],
                ["c", 0, - 3.87, 0, - 4.05, - 0.06, - 4.14],
                ["c", - 0.09, - 0.15, - 0.18, - 0.24, - 0.39, - 0.24],
                ["c", - 0.12, - 0, - 0.15, 0.03, - 0.21, 0.06],
                ["c", - 0.03, 0.06, - 0.45, 0.99, - 0.96, 2.13],
                ["c", - 0.48, 1.14, - 0.9, 2.1, - 0.93, 2.16],
                ["c", - 0.06, 0.15, - 0.21, 0.24, - 0.33, 0.24],
                ["c", - 0.24, 0, - 0.42, - 0.18, - 0.42, - 0.39],
                ["c", 0, - 0.06, 3.27, - 7.62, 3.33, - 7.74],
                ["z"]
            ],
            w: 8.94,
            h: 15.058
        },
        "2": {
            d: [
                ["M", 4.23, - 14.97],
                ["c", 0.57, - 0.06, 1.68, 0, 2.34, 0.18],
                ["c", 0.69, 0.18, 1.5, 0.54, 2.01, 0.9],
                ["c", 1.35, 0.96, 1.95, 2.25, 1.77, 3.81],
                ["c", - 0.15, 1.35, - 0.66, 2.34, - 1.68, 3.15],
                ["c", - 0.6, 0.48, - 1.44, 0.93, - 3.12, 1.65],
                ["c", - 1.32, 0.57, - 1.8, 0.81, - 2.37, 1.14],
                ["c", - 0.57, 0.33, - 0.57, 0.33, - 0.24, 0.27],
                ["c", 0.39, - 0.09, 1.26, - 0.09, 1.68, 0],
                ["c", 0.72, 0.15, 1.41, 0.45, 2.1, 0.9],
                ["c", 0.99, 0.63, 1.86, 0.87, 2.55, 0.75],
                ["c", 0.24, - 0.06, 0.42, - 0.15, 0.57, - 0.3],
                ["c", 0.12, - 0.09, 0.3, - 0.42, 0.3, - 0.51],
                ["c", 0, - 0.09, 0.12, - 0.21, 0.24, - 0.24],
                ["c", 0.18, - 0.03, 0.39, 0.12, 0.39, 0.3],
                ["c", 0, 0.12, - 0.15, 0.57, - 0.3, 0.87],
                ["c", - 0.54, 1.02, - 1.56, 1.74, - 2.79, 2.01],
                ["c", - 0.42, 0.09, - 1.23, 0.09, - 1.62, 0.03],
                ["c", - 0.81, - 0.18, - 1.32, - 0.45, - 2.01, - 1.11],
                ["c", - 0.45, - 0.45, - 0.63, - 0.57, - 0.96, - 0.69],
                ["c", - 0.84, - 0.27, - 1.89, 0.12, - 2.25, 0.9],
                ["c", - 0.12, 0.21, - 0.21, 0.54, - 0.21, 0.72],
                ["c", 0, 0.12, - 0.12, 0.21, - 0.27, 0.24],
                ["c", - 0.15, 0, - 0.27, - 0.03, - 0.33, - 0.15],
                ["c", - 0.09, - 0.21, 0.09, - 1.08, 0.33, - 1.71],
                ["c", 0.24, - 0.66, 0.66, - 1.26, 1.29, - 1.89],
                ["c", 0.45, - 0.45, 0.9, - 0.81, 1.92, - 1.56],
                ["c", 1.29, - 0.93, 1.89, - 1.44, 2.34, - 1.98],
                ["c", 0.87, - 1.05, 1.26, - 2.19, 1.2, - 3.63],
                ["c", - 0.06, - 1.29, - 0.39, - 2.31, - 0.96, - 2.91],
                ["c", - 0.36, - 0.33, - 0.72, - 0.51, - 1.17, - 0.54],
                ["c", - 0.84, - 0.03, - 1.53, 0.42, - 1.59, 1.05],
                ["c", - 0.03, 0.33, 0.12, 0.6, 0.57, 1.14],
                ["c", 0.45, 0.54, 0.54, 0.87, 0.42, 1.41],
                ["c", - 0.15, 0.63, - 0.54, 1.11, - 1.08, 1.38],
                ["c", - 0.63, 0.33, - 1.2, 0.33, - 1.83, 0],
                ["c", - 0.24, - 0.12, - 0.33, - 0.18, - 0.54, - 0.39],
                ["c", - 0.18, - 0.18, - 0.27, - 0.3, - 0.36, - 0.51],
                ["c", - 0.24, - 0.45, - 0.27, - 0.84, - 0.21, - 1.38],
                ["c", 0.12, - 0.75, 0.45, - 1.41, 1.02, - 1.98],
                ["c", 0.72, - 0.72, 1.74, - 1.17, 2.85, - 1.32],
                ["z"]
            ],
            w: 10.764,
            h: 14.993
        },
        "3": {
            d: [
                ["M", 3.78, - 14.97],
                ["c", 0.3, - 0.03, 1.41, 0, 1.83, 0.06],
                ["c", 2.22, 0.3, 3.51, 1.32, 3.72, 2.91],
                ["c", 0.03, 0.33, 0.03, 1.26, - 0.03, 1.65],
                ["c", - 0.12, 0.84, - 0.48, 1.47, - 1.05, 1.77],
                ["c", - 0.27, 0.15, - 0.36, 0.24, - 0.45, 0.39],
                ["c", - 0.09, 0.21, - 0.09, 0.36, 0, 0.57],
                ["c", 0.09, 0.15, 0.18, 0.24, 0.51, 0.39],
                ["c", 0.75, 0.42, 1.23, 1.14, 1.41, 2.13],
                ["c", 0.06, 0.42, 0.06, 1.35, 0, 1.71],
                ["c", - 0.18, 0.81, - 0.48, 1.38, - 1.02, 1.95],
                ["c", - 0.75, 0.72, - 1.8, 1.2, - 3.18, 1.38],
                ["c", - 0.42, 0.06, - 1.56, 0.06, - 1.95, 0],
                ["c", - 1.89, - 0.33, - 3.18, - 1.29, - 3.51, - 2.64],
                ["c", - 0.03, - 0.12, - 0.03, - 0.33, - 0.03, - 0.6],
                ["c", 0, - 0.36, 0, - 0.42, 0.06, - 0.63],
                ["c", 0.12, - 0.3, 0.27, - 0.51, 0.51, - 0.75],
                ["c", 0.24, - 0.24, 0.45, - 0.39, 0.75, - 0.51],
                ["c", 0.21, - 0.06, 0.27, - 0.06, 0.6, - 0.06],
                ["c", 0.33, 0, 0.39, 0, 0.6, 0.06],
                ["c", 0.3, 0.12, 0.51, 0.27, 0.75, 0.51],
                ["c", 0.36, 0.33, 0.57, 0.75, 0.6, 1.2],
                ["c", 0, 0.21, 0, 0.27, - 0.06, 0.42],
                ["c", - 0.09, 0.18, - 0.12, 0.24, - 0.54, 0.54],
                ["c", - 0.51, 0.36, - 0.63, 0.54, - 0.6, 0.87],
                ["c", 0.06, 0.54, 0.54, 0.9, 1.38, 0.99],
                ["c", 0.36, 0.06, 0.72, 0.03, 0.96, - 0.06],
                ["c", 0.81, - 0.27, 1.29, - 1.23, 1.44, - 2.79],
                ["c", 0.03, - 0.45, 0.03, - 1.95, - 0.03, - 2.37],
                ["c", - 0.09, - 0.75, - 0.33, - 1.23, - 0.75, - 1.44],
                ["c", - 0.33, - 0.18, - 0.45, - 0.18, - 1.98, - 0.18],
                ["c", - 1.35, 0, - 1.41, 0, - 1.5, - 0.06],
                ["c", - 0.18, - 0.12, - 0.24, - 0.39, - 0.12, - 0.6],
                ["c", 0.12, - 0.15, 0.15, - 0.15, 1.68, - 0.15],
                ["c", 1.5, 0, 1.62, 0, 1.89, - 0.15],
                ["c", 0.18, - 0.09, 0.42, - 0.36, 0.54, - 0.57],
                ["c", 0.18, - 0.42, 0.27, - 0.9, 0.3, - 1.95],
                ["c", 0.03, - 1.2, - 0.06, - 1.8, - 0.36, - 2.37],
                ["c", - 0.24, - 0.48, - 0.63, - 0.81, - 1.14, - 0.96],
                ["c", - 0.3, - 0.06, - 1.08, - 0.06, - 1.38, 0.03],
                ["c", - 0.6, 0.15, - 0.9, 0.42, - 0.96, 0.84],
                ["c", - 0.03, 0.3, 0.06, 0.45, 0.63, 0.84],
                ["c", 0.33, 0.24, 0.42, 0.39, 0.45, 0.63],
                ["c", 0.03, 0.72, - 0.57, 1.5, - 1.32, 1.65],
                ["c", - 1.05, 0.27, - 2.1, - 0.57, - 2.1, - 1.65],
                ["c", 0, - 0.45, 0.15, - 0.96, 0.39, - 1.38],
                ["c", 0.12, - 0.21, 0.54, - 0.63, 0.81, - 0.81],
                ["c", 0.57, - 0.42, 1.38, - 0.69, 2.25, - 0.81],
                ["z"]
            ],
            w: 9.735,
            h: 14.967
        },
        "4": {
            d: [
                ["M", 8.64, - 14.94],
                ["c", 0.27, - 0.09, 0.42, - 0.12, 0.54, - 0.03],
                ["c", 0.09, 0.06, 0.15, 0.21, 0.15, 0.3],
                ["c", - 0.03, 0.06, - 1.92, 2.31, - 4.23, 5.04],
                ["c", - 2.31, 2.73, - 4.23, 4.98, - 4.26, 5.01],
                ["c", - 0.03, 0.06, 0.12, 0.06, 2.55, 0.06],
                ["l", 2.61, 0],
                ["l", 0, - 2.37],
                ["c", 0, - 2.19, 0.03, - 2.37, 0.06, - 2.46],
                ["c", 0.03, - 0.06, 0.21, - 0.18, 0.57, - 0.42],
                ["c", 1.08, - 0.72, 1.38, - 1.08, 1.86, - 2.16],
                ["c", 0.12, - 0.3, 0.24, - 0.54, 0.27, - 0.57],
                ["c", 0.12, - 0.12, 0.39, - 0.06, 0.45, 0.12],
                ["c", 0.06, 0.09, 0.06, 0.57, 0.06, 3.96],
                ["l", 0, 3.9],
                ["l", 1.08, 0],
                ["c", 1.05, 0, 1.11, 0, 1.2, 0.06],
                ["c", 0.24, 0.15, 0.24, 0.54, 0, 0.69],
                ["c", - 0.09, 0.06, - 0.15, 0.06, - 1.2, 0.06],
                ["l", - 1.08, 0],
                ["l", 0, 0.33],
                ["c", 0, 0.57, 0.09, 1.11, 0.3, 1.53],
                ["c", 0.36, 0.75, 0.93, 1.17, 1.68, 1.26],
                ["c", 0.3, 0.03, 0.39, 0.09, 0.39, 0.3],
                ["c", 0, 0.15, - 0.03, 0.18, - 0.09, 0.24],
                ["c", - 0.06, 0.06, - 0.09, 0.06, - 0.48, 0.06],
                ["c", - 0.42, 0, - 0.69, - 0.03, - 2.1, - 0.24],
                ["c", - 0.9, - 0.15, - 1.77, - 0.15, - 2.67, 0],
                ["c", - 1.41, 0.21, - 1.68, 0.24, - 2.1, 0.24],
                ["c", - 0.39, 0, - 0.42, 0, - 0.48, - 0.06],
                ["c", - 0.06, - 0.06, - 0.06, - 0.09, - 0.06, - 0.24],
                ["c", 0, - 0.21, 0.06, - 0.27, 0.36, - 0.3],
                ["c", 0.75, - 0.09, 1.32, - 0.51, 1.68, - 1.26],
                ["c", 0.21, - 0.42, 0.3, - 0.96, 0.3, - 1.53],
                ["l", 0, - 0.33],
                ["l", - 2.7, 0],
                ["c", - 2.91, 0, - 2.85, 0, - 3.09, - 0.15],
                ["c", - 0.18, - 0.12, - 0.3, - 0.39, - 0.27, - 0.54],
                ["c", 0.03, - 0.06, 0.18, - 0.24, 0.33, - 0.45],
                ["c", 0.75, - 0.9, 1.59, - 2.07, 2.13, - 3.03],
                ["c", 0.33, - 0.54, 0.84, - 1.62, 1.05, - 2.16],
                ["c", 0.57, - 1.41, 0.84, - 2.64, 0.9, - 4.05],
                ["c", 0.03, - 0.63, 0.06, - 0.72, 0.24, - 0.81],
                ["l", 0.12, - 0.06],
                ["l", 0.45, 0.12],
                ["c", 0.66, 0.18, 1.02, 0.24, 1.47, 0.27],
                ["c", 0.6, 0.03, 1.23, - 0.09, 2.01, - 0.33],
                ["z"]
            ],
            w: 11.795,
            h: 14.994
        },
        "5": {
            d: [
                ["M", 1.02, - 14.94],
                ["c", 0.12, - 0.09, 0.03, - 0.09, 1.08, 0.06],
                ["c", 2.49, 0.36, 4.35, 0.36, 6.96, - 0.06],
                ["c", 0.57, - 0.09, 0.66, - 0.06, 0.81, 0.06],
                ["c", 0.15, 0.18, 0.12, 0.24, - 0.15, 0.51],
                ["c", - 1.29, 1.26, - 3.24, 2.04, - 5.58, 2.31],
                ["c", - 0.6, 0.09, - 1.2, 0.12, - 1.71, 0.12],
                ["c", - 0.39, 0, - 0.45, 0, - 0.57, 0.06],
                ["c", - 0.09, 0.06, - 0.15, 0.12, - 0.21, 0.21],
                ["l", - 0.06, 0.12],
                ["l", 0, 1.65],
                ["l", 0, 1.65],
                ["l", 0.21, - 0.21],
                ["c", 0.66, - 0.57, 1.41, - 0.96, 2.19, - 1.14],
                ["c", 0.33, - 0.06, 1.41, - 0.06, 1.95, 0],
                ["c", 2.61, 0.36, 4.02, 1.74, 4.26, 4.14],
                ["c", 0.03, 0.45, 0.03, 1.08, - 0.03, 1.44],
                ["c", - 0.18, 1.02, - 0.78, 2.01, - 1.59, 2.7],
                ["c", - 0.72, 0.57, - 1.62, 1.02, - 2.49, 1.2],
                ["c", - 1.38, 0.27, - 3.03, 0.06, - 4.2, - 0.54],
                ["c", - 1.08, - 0.54, - 1.71, - 1.32, - 1.86, - 2.28],
                ["c", - 0.09, - 0.69, 0.09, - 1.29, 0.57, - 1.74],
                ["c", 0.24, - 0.24, 0.45, - 0.39, 0.75, - 0.51],
                ["c", 0.21, - 0.06, 0.27, - 0.06, 0.6, - 0.06],
                ["c", 0.33, 0, 0.39, 0, 0.6, 0.06],
                ["c", 0.3, 0.12, 0.51, 0.27, 0.75, 0.51],
                ["c", 0.36, 0.33, 0.57, 0.75, 0.6, 1.2],
                ["c", 0, 0.21, 0, 0.27, - 0.06, 0.42],
                ["c", - 0.09, 0.18, - 0.12, 0.24, - 0.54, 0.54],
                ["c", - 0.18, 0.12, - 0.36, 0.3, - 0.42, 0.33],
                ["c", - 0.36, 0.42, - 0.18, 0.99, 0.36, 1.26],
                ["c", 0.51, 0.27, 1.47, 0.36, 2.01, 0.27],
                ["c", 0.93, - 0.21, 1.47, - 1.17, 1.65, - 2.91],
                ["c", 0.06, - 0.45, 0.06, - 1.89, 0, - 2.31],
                ["c", - 0.15, - 1.2, - 0.51, - 2.1, - 1.05, - 2.55],
                ["c", - 0.21, - 0.18, - 0.54, - 0.36, - 0.81, - 0.39],
                ["c", - 0.3, - 0.06, - 0.84, - 0.03, - 1.26, 0.06],
                ["c", - 0.93, 0.18, - 1.65, 0.6, - 2.16, 1.2],
                ["c", - 0.15, 0.21, - 0.27, 0.3, - 0.39, 0.3],
                ["c", - 0.15, 0, - 0.3, - 0.09, - 0.36, - 0.18],
                ["c", - 0.06, - 0.09, - 0.06, - 0.15, - 0.06, - 3.66],
                ["c", 0, - 3.39, 0, - 3.57, 0.06, - 3.66],
                ["c", 0.03, - 0.06, 0.09, - 0.15, 0.15, - 0.18],
                ["z"]
            ],
            w: 10.212,
            h: 14.997
        },
        "6": {
            d: [
                ["M", 4.98, - 14.97],
                ["c", 0.36, - 0.03, 1.2, 0, 1.59, 0.06],
                ["c", 0.9, 0.15, 1.68, 0.51, 2.25, 1.05],
                ["c", 0.57, 0.51, 0.87, 1.23, 0.84, 1.98],
                ["c", - 0.03, 0.51, - 0.21, 0.9, - 0.6, 1.26],
                ["c", - 0.24, 0.24, - 0.45, 0.39, - 0.75, 0.51],
                ["c", - 0.21, 0.06, - 0.27, 0.06, - 0.6, 0.06],
                ["c", - 0.33, 0, - 0.39, 0, - 0.6, - 0.06],
                ["c", - 0.3, - 0.12, - 0.51, - 0.27, - 0.75, - 0.51],
                ["c", - 0.39, - 0.36, - 0.57, - 0.78, - 0.57, - 1.26],
                ["c", 0, - 0.27, 0, - 0.3, 0.09, - 0.42],
                ["c", 0.03, - 0.09, 0.18, - 0.21, 0.3, - 0.3],
                ["c", 0.12, - 0.09, 0.3, - 0.21, 0.39, - 0.27],
                ["c", 0.09, - 0.06, 0.21, - 0.18, 0.27, - 0.24],
                ["c", 0.06, - 0.12, 0.09, - 0.15, 0.09, - 0.33],
                ["c", 0, - 0.18, - 0.03, - 0.24, - 0.09, - 0.36],
                ["c", - 0.24, - 0.39, - 0.75, - 0.6, - 1.38, - 0.57],
                ["c", - 0.54, 0.03, - 0.9, 0.18, - 1.23, 0.48],
                ["c", - 0.81, 0.72, - 1.08, 2.16, - 0.96, 5.37],
                ["l", 0, 0.63],
                ["l", 0.3, - 0.12],
                ["c", 0.78, - 0.27, 1.29, - 0.33, 2.1, - 0.27],
                ["c", 1.47, 0.12, 2.49, 0.54, 3.27, 1.29],
                ["c", 0.48, 0.51, 0.81, 1.11, 0.96, 1.89],
                ["c", 0.06, 0.27, 0.06, 0.42, 0.06, 0.93],
                ["c", 0, 0.54, 0, 0.69, - 0.06, 0.96],
                ["c", - 0.15, 0.78, - 0.48, 1.38, - 0.96, 1.89],
                ["c", - 0.54, 0.51, - 1.17, 0.87, - 1.98, 1.08],
                ["c", - 1.14, 0.3, - 2.4, 0.33, - 3.24, 0.03],
                ["c", - 1.5, - 0.48, - 2.64, - 1.89, - 3.27, - 4.02],
                ["c", - 0.36, - 1.23, - 0.51, - 2.82, - 0.42, - 4.08],
                ["c", 0.3, - 3.66, 2.28, - 6.3, 4.95, - 6.66],
                ["z"],
                ["m", 0.66, 7.41],
                ["c", - 0.27, - 0.09, - 0.81, - 0.12, - 1.08, - 0.06],
                ["c", - 0.72, 0.18, - 1.08, 0.69, - 1.23, 1.71],
                ["c", - 0.06, 0.54, - 0.06, 3, 0, 3.54],
                ["c", 0.18, 1.26, 0.72, 1.77, 1.8, 1.74],
                ["c", 0.39, - 0.03, 0.63, - 0.09, 0.9, - 0.27],
                ["c", 0.66, - 0.42, 0.9, - 1.32, 0.9, - 3.24],
                ["c", 0, - 2.22, - 0.36, - 3.12, - 1.29, - 3.42],
                ["z"]
            ],
            w: 9.956,
            h: 14.982
        },
        "7": {
            d: [
                ["M", 0.21, - 14.97],
                ["c", 0.21, - 0.06, 0.45, 0, 0.54, 0.15],
                ["c", 0.06, 0.09, 0.06, 0.15, 0.06, 0.39],
                ["c", 0, 0.24, 0, 0.33, 0.06, 0.42],
                ["c", 0.06, 0.12, 0.21, 0.24, 0.27, 0.24],
                ["c", 0.03, 0, 0.12, - 0.12, 0.24, - 0.21],
                ["c", 0.96, - 1.2, 2.58, - 1.35, 3.99, - 0.42],
                ["c", 0.15, 0.12, 0.42, 0.3, 0.54, 0.45],
                ["c", 0.48, 0.39, 0.81, 0.57, 1.29, 0.6],
                ["c", 0.69, 0.03, 1.5, - 0.3, 2.13, - 0.87],
                ["c", 0.09, - 0.09, 0.27, - 0.3, 0.39, - 0.45],
                ["c", 0.12, - 0.15, 0.24, - 0.27, 0.3, - 0.3],
                ["c", 0.18, - 0.06, 0.39, 0.03, 0.51, 0.21],
                ["c", 0.06, 0.18, 0.06, 0.24, - 0.27, 0.72],
                ["c", - 0.18, 0.24, - 0.54, 0.78, - 0.78, 1.17],
                ["c", - 2.37, 3.54, - 3.54, 6.27, - 3.87, 9],
                ["c", - 0.03, 0.33, - 0.03, 0.66, - 0.03, 1.26],
                ["c", 0, 0.9, 0, 1.08, 0.15, 1.89],
                ["c", 0.06, 0.45, 0.06, 0.48, 0.03, 0.6],
                ["c", - 0.06, 0.09, - 0.21, 0.21, - 0.3, 0.21],
                ["c", - 0.03, 0, - 0.27, - 0.06, - 0.54, - 0.15],
                ["c", - 0.84, - 0.27, - 1.11, - 0.3, - 1.65, - 0.3],
                ["c", - 0.57, 0, - 0.84, 0.03, - 1.56, 0.27],
                ["c", - 0.6, 0.18, - 0.69, 0.21, - 0.81, 0.15],
                ["c", - 0.12, - 0.06, - 0.21, - 0.18, - 0.21, - 0.3],
                ["c", 0, - 0.15, 0.6, - 1.44, 1.2, - 2.61],
                ["c", 1.14, - 2.22, 2.73, - 4.68, 5.1, - 8.01],
                ["c", 0.21, - 0.27, 0.36, - 0.48, 0.33, - 0.48],
                ["c", 0, 0, - 0.12, 0.06, - 0.27, 0.12],
                ["c", - 0.54, 0.3, - 0.99, 0.39, - 1.56, 0.39],
                ["c", - 0.75, 0.03, - 1.2, - 0.18, - 1.83, - 0.75],
                ["c", - 0.99, - 0.9, - 1.83, - 1.17, - 2.31, - 0.72],
                ["c", - 0.18, 0.15, - 0.36, 0.51, - 0.45, 0.84],
                ["c", - 0.06, 0.24, - 0.06, 0.33, - 0.09, 1.98],
                ["c", 0, 1.62, - 0.03, 1.74, - 0.06, 1.8],
                ["c", - 0.15, 0.24, - 0.54, 0.24, - 0.69, 0],
                ["c", - 0.06, - 0.09, - 0.06, - 0.15, - 0.06, - 3.57],
                ["c", 0, - 3.42, 0, - 3.48, 0.06, - 3.57],
                ["c", 0.03, - 0.06, 0.09, - 0.12, 0.15, - 0.15],
                ["z"]
            ],
            w: 10.561,
            h: 15.093
        },
        "8": {
            d: [
                ["M", 4.98, - 14.97],
                ["c", 0.33, - 0.03, 1.02, - 0.03, 1.32, 0],
                ["c", 1.32, 0.12, 2.49, 0.6, 3.21, 1.32],
                ["c", 0.39, 0.39, 0.66, 0.81, 0.78, 1.29],
                ["c", 0.09, 0.36, 0.09, 1.08, 0, 1.44],
                ["c", - 0.21, 0.84, - 0.66, 1.59, - 1.59, 2.55],
                ["l", - 0.3, 0.3],
                ["l", 0.27, 0.18],
                ["c", 1.47, 0.93, 2.31, 2.31, 2.25, 3.75],
                ["c", - 0.03, 0.75, - 0.24, 1.35, - 0.63, 1.95],
                ["c", - 0.45, 0.66, - 1.02, 1.14, - 1.83, 1.53],
                ["c", - 1.8, 0.87, - 4.2, 0.87, - 6, 0.03],
                ["c", - 1.62, - 0.78, - 2.52, - 2.16, - 2.46, - 3.66],
                ["c", 0.06, - 0.99, 0.54, - 1.77, 1.8, - 2.97],
                ["c", 0.54, - 0.51, 0.54, - 0.54, 0.48, - 0.57],
                ["c", - 0.39, - 0.27, - 0.96, - 0.78, - 1.2, - 1.14],
                ["c", - 0.75, - 1.11, - 0.87, - 2.4, - 0.3, - 3.6],
                ["c", 0.69, - 1.35, 2.25, - 2.25, 4.2, - 2.4],
                ["z"],
                ["m", 1.53, 0.69],
                ["c", - 0.42, - 0.09, - 1.11, - 0.12, - 1.38, - 0.06],
                ["c", - 0.3, 0.06, - 0.6, 0.18, - 0.81, 0.3],
                ["c", - 0.21, 0.12, - 0.6, 0.51, - 0.72, 0.72],
                ["c", - 0.51, 0.87, - 0.42, 1.89, 0.21, 2.52],
                ["c", 0.21, 0.21, 0.36, 0.3, 1.95, 1.23],
                ["c", 0.96, 0.54, 1.74, 0.99, 1.77, 1.02],
                ["c", 0.09, 0, 0.63, - 0.6, 0.99, - 1.11],
                ["c", 0.21, - 0.36, 0.48, - 0.87, 0.57, - 1.23],
                ["c", 0.06, - 0.24, 0.06, - 0.36, 0.06, - 0.72],
                ["c", 0, - 0.45, - 0.03, - 0.66, - 0.15, - 0.99],
                ["c", - 0.39, - 0.81, - 1.29, - 1.44, - 2.49, - 1.68],
                ["z"],
                ["m", - 1.44, 8.07],
                ["l", - 1.89, - 1.08],
                ["c", - 0.03, 0, - 0.18, 0.15, - 0.39, 0.33],
                ["c", - 1.2, 1.08, - 1.65, 1.95, - 1.59, 3],
                ["c", 0.09, 1.59, 1.35, 2.85, 3.21, 3.24],
                ["c", 0.33, 0.06, 0.45, 0.06, 0.93, 0.06],
                ["c", 0.63, - 0, 0.81, - 0.03, 1.29, - 0.27],
                ["c", 0.9, - 0.42, 1.47, - 1.41, 1.41, - 2.4],
                ["c", - 0.06, - 0.66, - 0.39, - 1.29, - 0.9, - 1.65],
                ["c", - 0.12, - 0.09, - 1.05, - 0.63, - 2.07, - 1.23],
                ["z"]
            ],
            w: 10.926,
            h: 14.989
        },
        "9": {
            d: [
                ["M", 4.23, - 14.97],
                ["c", 0.42, - 0.03, 1.29, 0, 1.62, 0.06],
                ["c", 0.51, 0.12, 0.93, 0.3, 1.38, 0.57],
                ["c", 1.53, 1.02, 2.52, 3.24, 2.73, 5.94],
                ["c", 0.18, 2.55, - 0.48, 4.98, - 1.83, 6.57],
                ["c", - 1.05, 1.26, - 2.4, 1.89, - 3.93, 1.83],
                ["c", - 1.23, - 0.06, - 2.31, - 0.45, - 3.03, - 1.14],
                ["c", - 0.57, - 0.51, - 0.87, - 1.23, - 0.84, - 1.98],
                ["c", 0.03, - 0.51, 0.21, - 0.9, 0.6, - 1.26],
                ["c", 0.24, - 0.24, 0.45, - 0.39, 0.75, - 0.51],
                ["c", 0.21, - 0.06, 0.27, - 0.06, 0.6, - 0.06],
                ["c", 0.33, - 0, 0.39, - 0, 0.6, 0.06],
                ["c", 0.3, 0.12, 0.51, 0.27, 0.75, 0.51],
                ["c", 0.39, 0.36, 0.57, 0.78, 0.57, 1.26],
                ["c", 0, 0.27, 0, 0.3, - 0.09, 0.42],
                ["c", - 0.03, 0.09, - 0.18, 0.21, - 0.3, 0.3],
                ["c", - 0.12, 0.09, - 0.3, 0.21, - 0.39, 0.27],
                ["c", - 0.09, 0.06, - 0.21, 0.18, - 0.27, 0.24],
                ["c", - 0.06, 0.12, - 0.06, 0.15, - 0.06, 0.33],
                ["c", 0, 0.18, 0, 0.24, 0.06, 0.36],
                ["c", 0.24, 0.39, 0.75, 0.6, 1.38, 0.57],
                ["c", 0.54, - 0.03, 0.9, - 0.18, 1.23, - 0.48],
                ["c", 0.81, - 0.72, 1.08, - 2.16, 0.96, - 5.37],
                ["l", 0, - 0.63],
                ["l", - 0.3, 0.12],
                ["c", - 0.78, 0.27, - 1.29, 0.33, - 2.1, 0.27],
                ["c", - 1.47, - 0.12, - 2.49, - 0.54, - 3.27, - 1.29],
                ["c", - 0.48, - 0.51, - 0.81, - 1.11, - 0.96, - 1.89],
                ["c", - 0.06, - 0.27, - 0.06, - 0.42, - 0.06, - 0.96],
                ["c", 0, - 0.51, 0, - 0.66, 0.06, - 0.93],
                ["c", 0.15, - 0.78, 0.48, - 1.38, 0.96, - 1.89],
                ["c", 0.15, - 0.12, 0.33, - 0.27, 0.42, - 0.36],
                ["c", 0.69, - 0.51, 1.62, - 0.81, 2.76, - 0.93],
                ["z"],
                ["m", 1.17, 0.66],
                ["c", - 0.21, - 0.06, - 0.57, - 0.06, - 0.81, - 0.03],
                ["c", - 0.78, 0.12, - 1.26, 0.69, - 1.41, 1.74],
                ["c", - 0.12, 0.63, - 0.15, 1.95, - 0.09, 2.79],
                ["c", 0.12, 1.71, 0.63, 2.4, 1.77, 2.46],
                ["c", 1.08, 0.03, 1.62, - 0.48, 1.8, - 1.74],
                ["c", 0.06, - 0.54, 0.06, - 3, 0, - 3.54],
                ["c", - 0.15, - 1.05, - 0.51, - 1.53, - 1.26, - 1.68],
                ["z"]
            ],
            w: 9.959,
            h: 14.986
        },
        f: {
            d: [
                ["M", 9.93, - 14.28],
                ["c", 1.53, - 0.18, 2.88, 0.45, 3.12, 1.5],
                ["c", 0.12, 0.51, 0, 1.32, - 0.27, 1.86],
                ["c", - 0.15, 0.3, - 0.42, 0.57, - 0.63, 0.69],
                ["c", - 0.69, 0.36, - 1.56, 0.03, - 1.83, - 0.69],
                ["c", - 0.09, - 0.24, - 0.09, - 0.69, 0, - 0.87],
                ["c", 0.06, - 0.12, 0.21, - 0.24, 0.45, - 0.42],
                ["c", 0.42, - 0.24, 0.57, - 0.45, 0.6, - 0.72],
                ["c", 0.03, - 0.33, - 0.09, - 0.39, - 0.63, - 0.42],
                ["c", - 0.3, 0, - 0.45, 0, - 0.6, 0.03],
                ["c", - 0.81, 0.21, - 1.35, 0.93, - 1.74, 2.46],
                ["c", - 0.06, 0.27, - 0.48, 2.25, - 0.48, 2.31],
                ["c", 0, 0.03, 0.39, 0.03, 0.9, 0.03],
                ["c", 0.72, 0, 0.9, 0, 0.99, 0.06],
                ["c", 0.42, 0.15, 0.45, 0.72, 0.03, 0.9],
                ["c", - 0.12, 0.06, - 0.24, 0.06, - 1.17, 0.06],
                ["l", - 1.05, 0],
                ["l", - 0.78, 2.55],
                ["c", - 0.45, 1.41, - 0.87, 2.79, - 0.96, 3.06],
                ["c", - 0.87, 2.37, - 2.37, 4.74, - 3.78, 5.91],
                ["c", - 1.05, 0.9, - 2.04, 1.23, - 3.09, 1.08],
                ["c", - 1.11, - 0.18, - 1.89, - 0.78, - 2.04, - 1.59],
                ["c", - 0.12, - 0.66, 0.15, - 1.71, 0.54, - 2.19],
                ["c", 0.69, - 0.75, 1.86, - 0.54, 2.22, 0.39],
                ["c", 0.06, 0.15, 0.09, 0.27, 0.09, 0.48],
                ["c", - 0, 0.24, - 0.03, 0.27, - 0.12, 0.42],
                ["c", - 0.03, 0.09, - 0.15, 0.18, - 0.27, 0.27],
                ["c", - 0.09, 0.06, - 0.27, 0.21, - 0.36, 0.27],
                ["c", - 0.24, 0.18, - 0.36, 0.36, - 0.39, 0.6],
                ["c", - 0.03, 0.33, 0.09, 0.39, 0.63, 0.42],
                ["c", 0.42, 0, 0.63, - 0.03, 0.9, - 0.15],
                ["c", 0.6, - 0.3, 0.96, - 0.96, 1.38, - 2.64],
                ["c", 0.09, - 0.42, 0.63, - 2.55, 1.17, - 4.77],
                ["l", 1.02, - 4.08],
                ["c", - 0, - 0.03, - 0.36, - 0.03, - 0.81, - 0.03],
                ["c", - 0.72, 0, - 0.81, 0, - 0.93, - 0.06],
                ["c", - 0.42, - 0.18, - 0.39, - 0.75, 0.03, - 0.9],
                ["c", 0.09, - 0.06, 0.27, - 0.06, 1.05, - 0.06],
                ["l", 0.96, 0],
                ["l", 0, - 0.09],
                ["c", 0.06, - 0.18, 0.3, - 0.72, 0.51, - 1.17],
                ["c", 1.2, - 2.46, 3.3, - 4.23, 5.34, - 4.5],
                ["z"]
            ],
            w: 16.155,
            h: 19.445
        },
        m: {
            d: [
                ["M", 2.79, - 8.91],
                ["c", 0.09, 0, 0.3, - 0.03, 0.45, - 0.03],
                ["c", 0.24, 0.03, 0.3, 0.03, 0.45, 0.12],
                ["c", 0.36, 0.15, 0.63, 0.54, 0.75, 1.02],
                ["l", 0.03, 0.21],
                ["l", 0.33, - 0.3],
                ["c", 0.69, - 0.69, 1.38, - 1.02, 2.07, - 1.02],
                ["c", 0.27, 0, 0.33, 0, 0.48, 0.06],
                ["c", 0.21, 0.09, 0.48, 0.36, 0.63, 0.6],
                ["c", 0.03, 0.09, 0.12, 0.27, 0.18, 0.42],
                ["c", 0.03, 0.15, 0.09, 0.27, 0.12, 0.27],
                ["c", 0, 0, 0.09, - 0.09, 0.18, - 0.21],
                ["c", 0.33, - 0.39, 0.87, - 0.81, 1.29, - 0.99],
                ["c", 0.78, - 0.33, 1.47, - 0.21, 2.01, 0.33],
                ["c", 0.3, 0.33, 0.48, 0.69, 0.6, 1.14],
                ["c", 0.09, 0.42, 0.06, 0.54, - 0.54, 3.06],
                ["c", - 0.33, 1.29, - 0.57, 2.4, - 0.57, 2.43],
                ["c", 0, 0.12, 0.09, 0.21, 0.21, 0.21],
                ["c", 0.24, - 0, 0.75, - 0.3, 1.2, - 0.72],
                ["c", 0.45, - 0.39, 0.6, - 0.45, 0.78, - 0.27],
                ["c", 0.18, 0.18, 0.09, 0.36, - 0.45, 0.87],
                ["c", - 1.05, 0.96, - 1.83, 1.47, - 2.58, 1.71],
                ["c", - 0.93, 0.33, - 1.53, 0.21, - 1.8, - 0.33],
                ["c", - 0.06, - 0.15, - 0.06, - 0.21, - 0.06, - 0.45],
                ["c", 0, - 0.24, 0.03, - 0.48, 0.6, - 2.82],
                ["c", 0.42, - 1.71, 0.6, - 2.64, 0.63, - 2.79],
                ["c", 0.03, - 0.57, - 0.3, - 0.75, - 0.84, - 0.48],
                ["c", - 0.24, 0.12, - 0.54, 0.39, - 0.66, 0.63],
                ["c", - 0.03, 0.09, - 0.42, 1.38, - 0.9, 3],
                ["c", - 0.9, 3.15, - 0.84, 3, - 1.14, 3.15],
                ["l", - 0.15, 0.09],
                ["l", - 0.78, 0],
                ["c", - 0.6, 0, - 0.78, 0, - 0.84, - 0.06],
                ["c", - 0.09, - 0.03, - 0.18, - 0.18, - 0.18, - 0.27],
                ["c", 0, - 0.03, 0.36, - 1.38, 0.84, - 2.97],
                ["c", 0.57, - 2.04, 0.81, - 2.97, 0.84, - 3.12],
                ["c", 0.03, - 0.54, - 0.3, - 0.72, - 0.84, - 0.45],
                ["c", - 0.24, 0.12, - 0.57, 0.42, - 0.66, 0.63],
                ["c", - 0.06, 0.09, - 0.51, 1.44, - 1.05, 2.97],
                ["c", - 0.51, 1.56, - 0.99, 2.85, - 0.99, 2.91],
                ["c", - 0.06, 0.12, - 0.21, 0.24, - 0.36, 0.3],
                ["c", - 0.12, 0.06, - 0.21, 0.06, - 0.9, 0.06],
                ["c", - 0.6, 0, - 0.78, 0, - 0.84, - 0.06],
                ["c", - 0.09, - 0.03, - 0.18, - 0.18, - 0.18, - 0.27],
                ["c", 0, - 0.03, 0.45, - 1.38, 0.99, - 2.97],
                ["c", 1.05, - 3.18, 1.05, - 3.18, 0.93, - 3.45],
                ["c", - 0.12, - 0.27, - 0.39, - 0.3, - 0.72, - 0.15],
                ["c", - 0.54, 0.27, - 1.14, 1.17, - 1.56, 2.4],
                ["c", - 0.06, 0.15, - 0.15, 0.3, - 0.18, 0.36],
                ["c", - 0.21, 0.21, - 0.57, 0.27, - 0.72, 0.09],
                ["c", - 0.09, - 0.09, - 0.06, - 0.21, 0.06, - 0.63],
                ["c", 0.48, - 1.26, 1.26, - 2.46, 2.01, - 3.21],
                ["c", 0.57, - 0.54, 1.2, - 0.87, 1.83, - 1.02],
                ["z"]
            ],
            w: 14.687,
            h: 9.126
        },
        p: {
            d: [
                ["M", 1.92, - 8.7],
                ["c", 0.27, - 0.09, 0.81, - 0.06, 1.11, 0.03],
                ["c", 0.54, 0.18, 0.93, 0.51, 1.17, 0.99],
                ["c", 0.09, 0.15, 0.15, 0.33, 0.18, 0.36],
                ["l", - 0, 0.12],
                ["l", 0.3, - 0.27],
                ["c", 0.66, - 0.6, 1.35, - 1.02, 2.13, - 1.2],
                ["c", 0.21, - 0.06, 0.33, - 0.06, 0.78, - 0.06],
                ["c", 0.45, 0, 0.51, 0, 0.84, 0.09],
                ["c", 1.29, 0.33, 2.07, 1.32, 2.25, 2.79],
                ["c", 0.09, 0.81, - 0.09, 2.01, - 0.45, 2.79],
                ["c", - 0.54, 1.26, - 1.86, 2.55, - 3.18, 3.03],
                ["c", - 0.45, 0.18, - 0.81, 0.24, - 1.29, 0.24],
                ["c", - 0.69, - 0.03, - 1.35, - 0.18, - 1.86, - 0.45],
                ["c", - 0.3, - 0.15, - 0.51, - 0.18, - 0.69, - 0.09],
                ["c", - 0.09, 0.03, - 0.18, 0.09, - 0.18, 0.12],
                ["c", - 0.09, 0.12, - 1.05, 2.94, - 1.05, 3.06],
                ["c", 0, 0.24, 0.18, 0.48, 0.51, 0.63],
                ["c", 0.18, 0.06, 0.54, 0.15, 0.75, 0.15],
                ["c", 0.21, 0, 0.36, 0.06, 0.42, 0.18],
                ["c", 0.12, 0.18, 0.06, 0.42, - 0.12, 0.54],
                ["c", - 0.09, 0.03, - 0.15, 0.03, - 0.78, 0],
                ["c", - 1.98, - 0.15, - 3.81, - 0.15, - 5.79, 0],
                ["c", - 0.63, 0.03, - 0.69, 0.03, - 0.78, 0],
                ["c", - 0.24, - 0.15, - 0.24, - 0.57, 0.03, - 0.66],
                ["c", 0.06, - 0.03, 0.48, - 0.09, 0.99, - 0.12],
                ["c", 0.87, - 0.06, 1.11, - 0.09, 1.35, - 0.21],
                ["c", 0.18, - 0.06, 0.33, - 0.18, 0.39, - 0.3],
                ["c", 0.06, - 0.12, 3.24, - 9.42, 3.27, - 9.6],
                ["c", 0.06, - 0.33, 0.03, - 0.57, - 0.15, - 0.69],
                ["c", - 0.09, - 0.06, - 0.12, - 0.06, - 0.3, - 0.06],
                ["c", - 0.69, 0.06, - 1.53, 1.02, - 2.28, 2.61],
                ["c", - 0.09, 0.21, - 0.21, 0.45, - 0.27, 0.51],
                ["c", - 0.09, 0.12, - 0.33, 0.24, - 0.48, 0.24],
                ["c", - 0.18, 0, - 0.36, - 0.15, - 0.36, - 0.3],
                ["c", 0, - 0.24, 0.78, - 1.83, 1.26, - 2.55],
                ["c", 0.72, - 1.11, 1.47, - 1.74, 2.28, - 1.92],
                ["z"],
                ["m", 5.37, 1.47],
                ["c", - 0.27, - 0.12, - 0.75, - 0.03, - 1.14, 0.21],
                ["c", - 0.75, 0.48, - 1.47, 1.68, - 1.89, 3.15],
                ["c", - 0.45, 1.47, - 0.42, 2.34, 0, 2.7],
                ["c", 0.45, 0.39, 1.26, 0.21, 1.83, - 0.36],
                ["c", 0.51, - 0.51, 0.99, - 1.68, 1.38, - 3.27],
                ["c", 0.3, - 1.17, 0.33, - 1.74, 0.15, - 2.13],
                ["c", - 0.09, - 0.15, - 0.15, - 0.21, - 0.33, - 0.3],
                ["z"]
            ],
            w: 14.689,
            h: 13.127
        },
        r: {
            d: [
                ["M", 6.33, - 9.12],
                ["c", 0.27, - 0.03, 0.93, 0, 1.2, 0.06],
                ["c", 0.84, 0.21, 1.23, 0.81, 1.02, 1.53],
                ["c", - 0.24, 0.75, - 0.9, 1.17, - 1.56, 0.96],
                ["c", - 0.33, - 0.09, - 0.51, - 0.3, - 0.66, - 0.75],
                ["c", - 0.03, - 0.12, - 0.09, - 0.24, - 0.12, - 0.3],
                ["c", - 0.09, - 0.15, - 0.3, - 0.24, - 0.48, - 0.24],
                ["c", - 0.57, 0, - 1.38, 0.54, - 1.65, 1.08],
                ["c", - 0.06, 0.15, - 0.33, 1.17, - 0.9, 3.27],
                ["c", - 0.57, 2.31, - 0.81, 3.12, - 0.87, 3.21],
                ["c", - 0.03, 0.06, - 0.12, 0.15, - 0.18, 0.21],
                ["l", - 0.12, 0.06],
                ["l", - 0.81, 0.03],
                ["c", - 0.69, 0, - 0.81, 0, - 0.9, - 0.03],
                ["c", - 0.09, - 0.06, - 0.18, - 0.21, - 0.18, - 0.3],
                ["c", 0, - 0.06, 0.39, - 1.62, 0.9, - 3.51],
                ["c", 0.84, - 3.24, 0.87, - 3.45, 0.87, - 3.72],
                ["c", 0, - 0.21, 0, - 0.27, - 0.03, - 0.36],
                ["c", - 0.12, - 0.15, - 0.21, - 0.24, - 0.42, - 0.24],
                ["c", - 0.24, 0, - 0.45, 0.15, - 0.78, 0.42],
                ["c", - 0.33, 0.36, - 0.45, 0.54, - 0.72, 1.14],
                ["c", - 0.03, 0.12, - 0.21, 0.24, - 0.36, 0.27],
                ["c", - 0.12, 0, - 0.15, 0, - 0.24, - 0.06],
                ["c", - 0.18, - 0.12, - 0.18, - 0.21, - 0.06, - 0.54],
                ["c", 0.21, - 0.57, 0.42, - 0.93, 0.78, - 1.32],
                ["c", 0.54, - 0.51, 1.2, - 0.81, 1.95, - 0.87],
                ["c", 0.81, - 0.03, 1.53, 0.3, 1.92, 0.87],
                ["l", 0.12, 0.18],
                ["l", 0.09, - 0.09],
                ["c", 0.57, - 0.45, 1.41, - 0.84, 2.19, - 0.96],
                ["z"]
            ],
            w: 9.41,
            h: 9.132
        },
        s: {
            d: [
                ["M", 4.47, - 8.73],
                ["c", 0.09, 0, 0.36, - 0.03, 0.57, - 0.03],
                ["c", 0.75, 0.03, 1.29, 0.24, 1.71, 0.63],
                ["c", 0.51, 0.54, 0.66, 1.26, 0.36, 1.83],
                ["c", - 0.24, 0.42, - 0.63, 0.57, - 1.11, 0.42],
                ["c", - 0.33, - 0.09, - 0.6, - 0.36, - 0.6, - 0.57],
                ["c", 0, - 0.03, 0.06, - 0.21, 0.15, - 0.39],
                ["c", 0.12, - 0.21, 0.15, - 0.33, 0.18, - 0.48],
                ["c", 0, - 0.24, - 0.06, - 0.48, - 0.15, - 0.6],
                ["c", - 0.15, - 0.21, - 0.42, - 0.24, - 0.75, - 0.15],
                ["c", - 0.27, 0.06, - 0.48, 0.18, - 0.69, 0.36],
                ["c", - 0.39, 0.39, - 0.51, 0.96, - 0.33, 1.38],
                ["c", 0.09, 0.21, 0.42, 0.51, 0.78, 0.72],
                ["c", 1.11, 0.69, 1.59, 1.11, 1.89, 1.68],
                ["c", 0.21, 0.39, 0.24, 0.78, 0.15, 1.29],
                ["c", - 0.18, 1.2, - 1.17, 2.16, - 2.52, 2.52],
                ["c", - 1.02, 0.24, - 1.95, 0.12, - 2.7, - 0.42],
                ["c", - 0.72, - 0.51, - 0.99, - 1.47, - 0.6, - 2.19],
                ["c", 0.24, - 0.48, 0.72, - 0.63, 1.17, - 0.42],
                ["c", 0.33, 0.18, 0.54, 0.45, 0.57, 0.81],
                ["c", 0, 0.21, - 0.03, 0.3, - 0.33, 0.51],
                ["c", - 0.33, 0.24, - 0.39, 0.42, - 0.27, 0.69],
                ["c", 0.06, 0.15, 0.21, 0.27, 0.45, 0.33],
                ["c", 0.3, 0.09, 0.87, 0.09, 1.2, - 0],
                ["c", 0.75, - 0.21, 1.23, - 0.72, 1.29, - 1.35],
                ["c", 0.03, - 0.42, - 0.15, - 0.81, - 0.54, - 1.2],
                ["c", - 0.24, - 0.24, - 0.48, - 0.42, - 1.41, - 1.02],
                ["c", - 0.69, - 0.42, - 1.05, - 0.93, - 1.05, - 1.47],
                ["c", 0, - 0.39, 0.12, - 0.87, 0.3, - 1.23],
                ["c", 0.27, - 0.57, 0.78, - 1.05, 1.38, - 1.35],
                ["c", 0.24, - 0.12, 0.63, - 0.27, 0.9, - 0.3],
                ["z"]
            ],
            w: 6.632,
            h: 8.758
        },
        z: {
            d: [
                ["M", 2.64, - 7.95],
                ["c", 0.36, - 0.09, 0.81, - 0.03, 1.71, 0.27],
                ["c", 0.78, 0.21, 0.96, 0.27, 1.74, 0.3],
                ["c", 0.87, 0.06, 1.02, 0.03, 1.38, - 0.21],
                ["c", 0.21, - 0.15, 0.33, - 0.15, 0.48, - 0.06],
                ["c", 0.15, 0.09, 0.21, 0.3, 0.15, 0.45],
                ["c", - 0.03, 0.06, - 1.26, 1.26, - 2.76, 2.67],
                ["l", - 2.73, 2.55],
                ["l", 0.54, 0.03],
                ["c", 0.54, 0.03, 0.72, 0.03, 2.01, 0.15],
                ["c", 0.36, 0.03, 0.9, 0.06, 1.2, 0.09],
                ["c", 0.66, 0, 0.81, - 0.03, 1.02, - 0.24],
                ["c", 0.3, - 0.3, 0.39, - 0.72, 0.27, - 1.23],
                ["c", - 0.06, - 0.27, - 0.06, - 0.27, - 0.03, - 0.39],
                ["c", 0.15, - 0.3, 0.54, - 0.27, 0.69, 0.03],
                ["c", 0.15, 0.33, 0.27, 1.02, 0.27, 1.5],
                ["c", 0, 1.47, - 1.11, 2.7, - 2.52, 2.79],
                ["c", - 0.57, 0.03, - 1.02, - 0.09, - 2.01, - 0.51],
                ["c", - 1.02, - 0.42, - 1.23, - 0.48, - 2.13, - 0.54],
                ["c", - 0.81, - 0.06, - 0.96, - 0.03, - 1.26, 0.18],
                ["c", - 0.12, 0.06, - 0.24, 0.12, - 0.27, 0.12],
                ["c", - 0.27, 0, - 0.45, - 0.3, - 0.36, - 0.51],
                ["c", 0.03, - 0.06, 1.32, - 1.32, 2.91, - 2.79],
                ["l", 2.88, - 2.73],
                ["c", - 0.03, 0, - 0.21, 0.03, - 0.42, 0.06],
                ["c", - 0.21, 0.03, - 0.78, 0.09, - 1.23, 0.12],
                ["c", - 1.11, 0.12, - 1.23, 0.15, - 1.95, 0.27],
                ["c", - 0.72, 0.15, - 1.17, 0.18, - 1.29, 0.09],
                ["c", - 0.27, - 0.18, - 0.21, - 0.75, 0.12, - 1.26],
                ["c", 0.39, - 0.6, 0.93, - 1.02, 1.59, - 1.2],
                ["z"]
            ],
            w: 8.573,
            h: 8.743
        },
        "+": {
            d: [
                ["M", 3.48, - 11.19],
                ["c", 0.18, - 0.09, 0.36, - 0.09, 0.54, 0],
                ["c", 0.18, 0.09, 0.24, 0.15, 0.33, 0.3],
                ["l", 0.06, 0.15],
                ["l", 0, 1.29],
                ["l", 0, 1.29],
                ["l", 1.29, 0],
                ["c", 1.23, 0, 1.29, 0, 1.41, 0.06],
                ["c", 0.06, 0.03, 0.15, 0.09, 0.18, 0.12],
                ["c", 0.12, 0.09, 0.21, 0.33, 0.21, 0.48],
                ["c", 0, 0.15, - 0.09, 0.39, - 0.21, 0.48],
                ["c", - 0.03, 0.03, - 0.12, 0.09, - 0.18, 0.12],
                ["c", - 0.12, 0.06, - 0.18, 0.06, - 1.41, 0.06],
                ["l", - 1.29, 0],
                ["l", 0, 1.29],
                ["c", 0, 1.23, 0, 1.29, - 0.06, 1.41],
                ["c", - 0.09, 0.18, - 0.15, 0.24, - 0.3, 0.33],
                ["c", - 0.21, 0.09, - 0.39, 0.09, - 0.57, 0],
                ["c", - 0.18, - 0.09, - 0.24, - 0.15, - 0.33, - 0.33],
                ["c", - 0.06, - 0.12, - 0.06, - 0.18, - 0.06, - 1.41],
                ["l", 0, - 1.29],
                ["l", - 1.29, 0],
                ["c", - 1.23, 0, - 1.29, 0, - 1.41, - 0.06],
                ["c", - 0.18, - 0.09, - 0.24, - 0.15, - 0.33, - 0.33],
                ["c", - 0.09, - 0.18, - 0.09, - 0.36, 0, - 0.54],
                ["c", 0.09, - 0.18, 0.15, - 0.24, 0.33, - 0.33],
                ["l", 0.15, - 0.06],
                ["l", 1.26, 0],
                ["l", 1.29, 0],
                ["l", 0, - 1.29],
                ["c", 0, - 1.23, 0, - 1.29, 0.06, - 1.41],
                ["c", 0.09, - 0.18, 0.15, - 0.24, 0.33, - 0.33],
                ["z"]
            ],
            w: 7.507,
            h: 7.515
        },
        ",": {
            d: [
                ["M", 1.32, - 3.36],
                ["c", 0.57, - 0.15, 1.17, 0.03, 1.59, 0.45],
                ["c", 0.45, 0.45, 0.6, 0.96, 0.51, 1.89],
                ["c", - 0.09, 1.23, - 0.42, 2.46, - 0.99, 3.93],
                ["c", - 0.3, 0.72, - 0.72, 1.62, - 0.78, 1.68],
                ["c", - 0.18, 0.21, - 0.51, 0.18, - 0.66, - 0.06],
                ["c", - 0.03, - 0.06, - 0.06, - 0.15, - 0.06, - 0.18],
                ["c", 0, - 0.06, 0.12, - 0.33, 0.24, - 0.63],
                ["c", 0.84, - 1.8, 1.02, - 2.61, 0.69, - 3.24],
                ["c", - 0.12, - 0.24, - 0.27, - 0.36, - 0.75, - 0.6],
                ["c", - 0.36, - 0.15, - 0.42, - 0.21, - 0.6, - 0.39],
                ["c", - 0.69, - 0.69, - 0.69, - 1.71, 0, - 2.4],
                ["c", 0.21, - 0.21, 0.51, - 0.39, 0.81, - 0.45],
                ["z"]
            ],
            w: 3.452,
            h: 8.143
        },
        "-": {
            d: [
                ["M", 0.18, - 5.34],
                ["c", 0.09, - 0.06, 0.15, - 0.06, 2.31, - 0.06],
                ["c", 2.46, 0, 2.37, 0, 2.46, 0.21],
                ["c", 0.12, 0.21, 0.03, 0.42, - 0.15, 0.54],
                ["c", - 0.09, 0.06, - 0.15, 0.06, - 2.28, 0.06],
                ["c", - 2.16, 0, - 2.22, 0, - 2.31, - 0.06],
                ["c", - 0.27, - 0.15, - 0.27, - 0.54, - 0.03, - 0.69],
                ["z"]
            ],
            w: 5.001,
            h: 0.81
        },
        ".": {
            d: [
                ["M", 1.32, - 3.36],
                ["c", 1.05, - 0.27, 2.1, 0.57, 2.1, 1.65],
                ["c", 0, 1.08, - 1.05, 1.92, - 2.1, 1.65],
                ["c", - 0.9, - 0.21, - 1.5, - 1.14, - 1.26, - 2.04],
                ["c", 0.12, - 0.63, 0.63, - 1.11, 1.26, - 1.26],
                ["z"]
            ],
            w: 3.413,
            h: 3.402
        }
    };
    this.printSymbol = function (b, g, c, f) {
        if (!a[c]) {
            return null
        }
        var d = this.pathClone(a[c].d);
        d[0][1] += b;
        d[0][2] += g;
        var e = f.path().attr({
            path: d,
            stroke: "none",
            fill: "#000000"
        });
        return e
    };
    this.getPathForSymbol = function (b, g, e, d, c) {
        d = d || 1;
        c = c || 1;
        if (!a[e]) {
            return null
        }
        var f = this.pathClone(a[e].d);
        if (d !== 1 || c !== 1) {
            this.pathScale(f, d, c)
        }
        f[0][1] += b;
        f[0][2] += g;
        return f
    };
    this.getSymbolWidth = function (b) {
        if (a[b]) {
            return a[b].w
        }
        return 0
    };
    this.getSymbolHeight = function (b) {
        if (a[b]) {
            return a[b].h
        }
        return 0
    };
    this.getSymbolAlign = function (b) {
        if (b.substring(0, 7) === "scripts" && b !== "scripts.roll") {
            return "center"
        }
        return "left"
    };
    this.pathClone = function (g) {
        var d = [];
        for (var c = 0, e = g.length; c < e; c++) {
            d[c] = [];
            for (var b = 0, f = g[c].length; b < f; b++) {
                d[c][b] = g[c][b]
            }
        }
        return d
    };
    this.pathScale = function (h, f, d) {
        for (var c = 0, e = h.length; c < e; c++) {
            var k = h[c];
            var b, g;
            for (b = 1, g = k.length; b < g; b++) {
                k[b] *= (b % 2) ? f : d
            }
        }
    };
    this.getYCorr = function (b) {
        switch (b) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "+":
            return -3;
        case "timesig.common":
        case "timesig.cut":
            return -1;
        case "flags.d32nd":
            return -1;
        case "flags.d64th":
            return -2;
        case "flags.u32nd":
            return 1;
        case "flags.u64th":
            return 3;
        case "rests.whole":
            return 1;
        case "rests.half":
            return -1;
        case "rests.8th":
            return -1;
        case "rests.quarter":
            return -2;
        case "rests.16th":
            return -1;
        case "rests.32nd":
            return -1;
        case "rests.64th":
            return -1;
        default:
            return 0
        }
    }
};
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.write) {
    window.ABCJS.write = {}
}
ABCJS.write.StaffGroupElement = function () {
    this.voices = [];
    this.staffs = [];
    this.stafflines = []
};
ABCJS.write.StaffGroupElement.prototype.addVoice = function (c, b, a) {
    this.voices[this.voices.length] = c;
    if (!this.staffs[b]) {
        this.staffs[this.staffs.length] = {
            top: 0,
            highest: 7,
            lowest: 7
        };
        this.stafflines[this.stafflines.length] = a
    }
    c.staff = this.staffs[b]
};
ABCJS.write.StaffGroupElement.prototype.finished = function () {
    for (var a = 0; a < this.voices.length; a++) {
        if (!this.voices[a].layoutEnded()) {
            return false
        }
    }
    return true
};
ABCJS.write.StaffGroupElement.prototype.layout = function (f, n) {
    this.spacingunits = 0;
    this.minspace = 1000;
    var k = n.paddingleft;
    var a = 0;
    for (var d = 0; d < this.voices.length; d++) {
        if (this.voices[d].header) {
            var o = n.paper.text(100, - 10, this.voices[d].header).attr({
                "font-size": 12,
                "font-family": "serif"
            });
            a = Math.max(a, o.getBBox().width);
            o.remove()
        }
    }
    k = k + a * 1.1;
    this.startx = k;
    var c = 0;
    for (d = 0; d < this.voices.length; d++) {
        this.voices[d].beginLayout(k)
    }
    while (!this.finished()) {
        c = null;
        for (d = 0; d < this.voices.length; d++) {
            if (!this.voices[d].layoutEnded() && (!c || this.voices[d].getDurationIndex() < c)) {
                c = this.voices[d].getDurationIndex()
            }
        }
        var m = [];
        var l = [];
        for (d = 0; d < this.voices.length; d++) {
            if (this.voices[d].getDurationIndex() !== c) {
                l.push(this.voices[d])
            } else {
                m.push(this.voices[d])
            }
        }
        var h = 0;
        for (d = 0; d < m.length; d++) {
            if (m[d].nextx > k) {
                k = m[d].nextx;
                h = m[d].spacingunits
            }
        }
        this.spacingunits += h;
        this.minspace = Math.min(this.minspace, h);
        for (d = 0; d < l.length; d++) {
            if (l[d].spacingunits -= h) {}
        }
        for (d = 0; d < m.length; d++) {
            var e = m[d].layoutOneItem(k, f);
            var p = e - k;
            if (p > 0) {
                k = e;
                for (var b = 0; b < d; b++) {
                    m[b].shiftRight(p)
                }
            }
        }
        for (d = 0; d < m.length; d++) {
            var g = m[d];
            g.updateIndices()
        }
    }
    for (d = 0; d < this.voices.length; d++) {
        if (this.voices[d].nextx > k) {
            k = this.voices[d].nextx;
            h = this.voices[d].spacingunits
        }
    }
    this.spacingunits += h;
    this.w = k;
    for (d = 0; d < this.voices.length; d++) {
        this.voices[d].w = this.w
    }
};
ABCJS.write.StaffGroupElement.prototype.draw = function (e, h) {
    this.y = h;
    for (var d = 0; d < this.staffs.length; d++) {
        var c = this.staffs[d].highest - ((d === 0) ? 20 : 15);
        var b = this.staffs[d].lowest - ((d === this.staffs.length - 1) ? 0 : 0);
        this.staffs[d].top = h;
        if (c > 0) {
            h += c * ABCJS.write.spacing.STEP
        }
        this.staffs[d].y = h;
        h += ABCJS.write.spacing.STAVEHEIGHT * 0.9;
        if (b < 0) {
            h -= b * ABCJS.write.spacing.STEP
        }
        this.staffs[d].bottom = h
    }
    this.height = h - this.y;
    var g = 0;
    for (d = 0; d < this.voices.length; d++) {
        this.voices[d].draw(e, g);
        g = this.voices[d].barbottom
    }
    if (this.staffs.length > 1) {
        e.y = this.staffs[0].y;
        var f = e.calcY(10);
        e.y = this.staffs[this.staffs.length - 1].y;
        var a = e.calcY(2);
        e.printStem(this.startx, 0.6, f, a)
    }
    for (d = 0; d < this.staffs.length; d++) {
        if (this.stafflines[d] === 0) {
            continue
        }
        e.y = this.staffs[d].y;
        if (this.stafflines[d] === undefined) {
            this.stafflines[d] = 5
        }
        e.printStave(this.startx, this.w, this.stafflines[d])
    }
};
ABCJS.write.VoiceElement = function (b, a) {
    this.children = [];
    this.beams = [];
    this.otherchildren = [];
    this.w = 0;
    this.duplicate = false;
    this.voicenumber = b;
    this.voicetotal = a
};
ABCJS.write.VoiceElement.prototype.addChild = function (a) {
    this.children[this.children.length] = a
};
ABCJS.write.VoiceElement.prototype.addOther = function (a) {
    if (a instanceof ABCJS.write.BeamElem) {
        this.beams.push(a)
    } else {
        this.otherchildren.push(a)
    }
};
ABCJS.write.VoiceElement.prototype.updateIndices = function () {
    if (!this.layoutEnded()) {
        this.durationindex += this.children[this.i].duration;
        this.i++;
        this.minx = this.nextminx
    }
};
ABCJS.write.VoiceElement.prototype.layoutEnded = function () {
    return (this.i >= this.children.length)
};
ABCJS.write.VoiceElement.prototype.getDurationIndex = function () {
    return this.durationindex - (this.children[this.i] && (this.children[this.i].duration > 0) ? 0 : 5e-7)
};
ABCJS.write.VoiceElement.prototype.beginLayout = function (a) {
    this.i = 0;
    this.durationindex = 0;
    this.ii = this.children.length;
    this.startx = a;
    this.minx = a;
    this.nextminx = a;
    this.nextx = a;
    this.spacingunits = 0
};
ABCJS.write.VoiceElement.prototype.layoutOneItem = function (a, d) {
    var c = this.children[this.i];
    if (!c) {
        return 0
    }
    var b = a - this.minx;
    if (b < c.getExtraWidth()) {
        a += c.getExtraWidth() - b
    }
    c.x = a;
    a += (d * Math.sqrt(c.duration * 8));
    this.nextminx = c.x + c.getMinWidth();
    if (this.i !== this.ii - 1) {
        this.nextminx += c.minspacing
    }
    if (this.nextminx > a) {
        a = this.nextminx;
        this.spacingunits = 0
    } else {
        this.spacingunits = Math.sqrt(c.duration * 8)
    }
    this.nextx = a;
    this.staff.highest = Math.max(c.top, this.staff.highest);
    this.staff.lowest = Math.min(c.bottom, this.staff.lowest);
    return c.x
};
ABCJS.write.VoiceElement.prototype.shiftRight = function (a) {
    var b = this.children[this.i];
    if (!b) {
        return
    }
    b.x += a;
    this.nextminx += a;
    this.nextx += a
};
ABCJS.write.VoiceElement.prototype.draw = function (e, f) {
    var c = this.w - 1;
    e.y = this.staff.y;
    e.staffbottom = this.staff.bottom;
    this.barbottom = e.calcY(2);
    if (this.header) {
        var d = 12 - (this.voicenumber + 1) * (12 / (this.voicetotal + 1));
        e.paper.text((this.startx - e.paddingleft) / 2 + e.paddingleft, e.calcY(d), this.header).attr({
            "font-size": 12,
            "font-family": "serif"
        })
    }
    for (var a = 0, b = this.children.length; a < b; a++) {
        this.children[a].draw(e, (this.barto || a === b - 1) ? f : 0)
    }
    window.ABCJS.parse.each(this.beams, function (g) {
        g.draw(e)
    });
    window.ABCJS.parse.each(this.otherchildren, function (g) {
        g.draw(e, this.startx + 10, c)
    })
};
ABCJS.write.AbsoluteElement = function (c, b, a) {
    this.abcelem = c;
    this.duration = b;
    this.minspacing = a || 0;
    this.x = 0;
    this.children = [];
    this.heads = [];
    this.extra = [];
    this.extraw = 0;
    this.decs = [];
    this.w = 0;
    this.right = [];
    this.invisible = false;
    this.bottom = 7;
    this.top = 7
};
ABCJS.write.AbsoluteElement.prototype.getMinWidth = function () {
    return this.w
};
ABCJS.write.AbsoluteElement.prototype.getExtraWidth = function () {
    return -this.extraw
};
ABCJS.write.AbsoluteElement.prototype.addExtra = function (a) {
    if (a.dx < this.extraw) {
        this.extraw = a.dx
    }
    this.extra[this.extra.length] = a;
    this.addChild(a)
};
ABCJS.write.AbsoluteElement.prototype.addHead = function (a) {
    if (a.dx < this.extraw) {
        this.extraw = a.dx
    }
    this.heads[this.heads.length] = a;
    this.addRight(a)
};
ABCJS.write.AbsoluteElement.prototype.addRight = function (a) {
    if (a.dx + a.w > this.w) {
        this.w = a.dx + a.w
    }
    this.right[this.right.length] = a;
    this.addChild(a)
};
ABCJS.write.AbsoluteElement.prototype.addChild = function (a) {
    a.parent = this;
    this.children[this.children.length] = a;
    this.pushTop(a.top);
    this.pushBottom(a.bottom)
};
ABCJS.write.AbsoluteElement.prototype.pushTop = function (a) {
    this.top = Math.max(a, this.top)
};
ABCJS.write.AbsoluteElement.prototype.pushBottom = function (a) {
    this.bottom = Math.min(a, this.bottom)
};
ABCJS.write.AbsoluteElement.prototype.draw = function (e, f) {
    this.elemset = e.paper.set();
    if (this.invisible) {
        return
    }
    e.beginGroup();
    for (var d = 0; d < this.children.length; d++) {
        this.elemset.push(this.children[d].draw(e, this.x, f))
    }
    this.elemset.push(e.endGroup());
    if (this.klass) {
        this.setClass("mark", "", "#00ff00")
    }
    var c = this;
    this.elemset.mouseup(function (i) {
        e.notifySelect(c)
    });
    this.abcelem.abselem = this;
    var h = ABCJS.write.spacing.STEP * e.scale;
    var g = function () {
        this.dy = 0
    }, b = function (j, i) {
        i = Math.round(i / h) * h;
        this.translate(0, - this.dy);
        this.dy = i;
        this.translate(0, this.dy)
    }, a = function () {
        var i = -Math.round(this.dy / h);
        c.abcelem.pitches[0].pitch += i;
        c.abcelem.pitches[0].verticalPos += i;
        e.notifyChange()
    };
    if (this.abcelem.el_type === "note" && e.editable) {
        this.elemset.drag(b, g, a)
    }
};
ABCJS.write.AbsoluteElement.prototype.isIE =
/*@cc_on!@*/
false;
ABCJS.write.AbsoluteElement.prototype.setClass = function (d, e, b) {
    this.elemset.attr({
        fill: b
    });
    if (!this.isIE) {
        for (var c = 0; c < this.elemset.length; c++) {
            if (this.elemset[c][0].setAttribute) {
                var a = this.elemset[c][0].getAttribute("class");
                if (!a) {
                    a = ""
                }
                a = a.replace(e, "");
                a = a.replace(d, "");
                if (d.length > 0) {
                    if (a.length > 0 && a.charAt(a.length - 1) !== " ") {
                        a += " "
                    }
                    a += d
                }
                this.elemset[c][0].setAttribute("class", a)
            }
        }
    }
};
ABCJS.write.AbsoluteElement.prototype.highlight = function () {
    this.setClass("note_selected", "", "#ff0000")
};
ABCJS.write.AbsoluteElement.prototype.unhighlight = function () {
    this.setClass("", "note_selected", "#000000")
};
ABCJS.write.RelativeElement = function (f, b, a, e, d) {
    d = d || {};
    this.x = 0;
    this.c = f;
    this.dx = b;
    this.w = a;
    this.pitch = e;
    this.scalex = d.scalex || 1;
    this.scaley = d.scaley || 1;
    this.type = d.type || "symbol";
    this.pitch2 = d.pitch2;
    this.linewidth = d.linewidth;
    this.attributes = d.attributes;
    this.top = e + ((d.extreme === "above") ? 7 : 0);
    this.bottom = e - ((d.extreme === "below") ? 7 : 0)
};
ABCJS.write.RelativeElement.prototype.draw = function (b, a, c) {
    this.x = a + this.dx;
    switch (this.type) {
    case "symbol":
        if (this.c === null) {
            return null
        }
        this.graphelem = b.printSymbol(this.x, this.pitch, this.c, this.scalex, this.scaley);
        break;
    case "debug":
        this.graphelem = b.debugMsg(this.x, this.c);
        break;
    case "debugLow":
        this.graphelem = b.printLyrics(this.x, this.c);
        break;
    case "text":
        this.graphelem = b.printText(this.x, this.pitch, this.c);
        break;
    case "bar":
        this.graphelem = b.printStem(this.x, this.linewidth, b.calcY(this.pitch), (c) ? c : b.calcY(this.pitch2));
        break;
    case "stem":
        this.graphelem = b.printStem(this.x, this.linewidth, b.calcY(this.pitch), b.calcY(this.pitch2));
        break;
    case "ledger":
        this.graphelem = b.printStaveLine(this.x, this.x + this.w, this.pitch);
        break
    }
    if (this.scalex !== 1 && this.graphelem) {
        this.graphelem.scale(this.scalex, this.scaley, this.x, b.calcY(this.pitch))
    }
    if (this.attributes) {
        this.graphelem.attr(this.attributes)
    }
    return this.graphelem
};
ABCJS.write.EndingElem = function (c, b, a) {
    this.text = c;
    this.anchor1 = b;
    this.anchor2 = a
};
ABCJS.write.EndingElem.prototype.draw = function (c, d, b) {
    var a;
    if (this.anchor1) {
        d = this.anchor1.x + this.anchor1.w;
        a = ABCJS.write.sprintf("M %f %f L %f %f", d, c.y, d, c.y + 10);
        c.printPath({
            path: a,
            stroke: "#000000",
            fill: "#000000"
        });
        c.printText(d + 5, 18.5, this.text).attr({
            "font-size": "10px"
        })
    }
    if (this.anchor2) {
        b = this.anchor2.x;
        a = ABCJS.write.sprintf("M %f %f L %f %f", b, c.y, b, c.y + 10);
        c.printPath({
            path: a,
            stroke: "#000000",
            fill: "#000000"
        })
    }
    a = ABCJS.write.sprintf("M %f %f L %f %f", d, c.y, b, c.y);
    c.printPath({
        path: a,
        stroke: "#000000",
        fill: "#000000"
    })
};
ABCJS.write.TieElem = function (d, b, a, c) {
    this.anchor1 = d;
    this.anchor2 = b;
    this.above = a;
    this.force = c
};
ABCJS.write.TieElem.prototype.draw = function (c, e, a) {
    var d;
    var b;
    if (this.startlimitelem) {
        e = this.startlimitelem.x + this.startlimitelem.w
    }
    if (this.endlimitelem) {
        a = this.endlimitelem.x
    }
    if (!this.force && this.anchor2 && this.anchor2.pitch === this.anchor2.top) {
        this.above = true
    }
    if (this.anchor1) {
        e = this.anchor1.x;
        d = this.above ? this.anchor1.highestVert : this.anchor1.pitch;
        if (!this.anchor2) {
            b = this.above ? this.anchor1.highestVert : this.anchor1.pitch
        }
    }
    if (this.anchor2) {
        a = this.anchor2.x;
        b = this.above ? this.anchor2.highestVert : this.anchor2.pitch;
        if (!this.anchor1) {
            d = this.above ? this.anchor2.highestVert : this.anchor2.pitch
        }
    }
    c.drawArc(e, a, d, b, this.above)
};
ABCJS.write.DynamicDecoration = function (a, b) {
    this.anchor = a;
    this.dec = b
};
ABCJS.write.DynamicDecoration.prototype.draw = function (d, f, a) {
    var e = d.layouter.minY - 7;
    var c = 1;
    var b = 1;
    d.printSymbol(this.anchor.x, e, this.dec, c, b)
};
ABCJS.write.CrescendoElem = function (c, b, a) {
    this.anchor1 = c;
    this.anchor2 = b;
    this.dir = a
};
ABCJS.write.CrescendoElem.prototype.draw = function (b, c, a) {
    if (this.dir === "<") {
        this.drawLine(b, 0, - 4);
        this.drawLine(b, 0, 4)
    } else {
        this.drawLine(b, - 4, 0);
        this.drawLine(b, 4, 0)
    }
};
ABCJS.write.CrescendoElem.prototype.drawLine = function (d, c, b) {
    var e = d.layouter.minY - 7;
    var a = ABCJS.write.sprintf("M %f %f L %f %f", this.anchor1.x, d.calcY(e) + c - 4, this.anchor2.x, d.calcY(e) + b - 4);
    d.printPath({
        path: a,
        stroke: "#000000"
    })
};
ABCJS.write.TripletElem = function (d, c, b, a) {
    this.anchor1 = c;
    this.anchor2 = b;
    this.above = a;
    this.number = d
};
ABCJS.write.TripletElem.prototype.draw = function (d, g, c) {
    if (this.anchor1 && this.anchor2) {
        var f = this.above ? 16 : -1;
        if (this.anchor1.parent.beam && this.anchor1.parent.beam === this.anchor2.parent.beam) {
            var b = this.anchor1.parent.beam;
            this.above = b.asc;
            f = b.pos
        } else {
            this.drawLine(d, d.calcY(f))
        }
        var e = this.anchor1.x + this.anchor2.x;
        var a = 0;
        if (b) {
            if (this.above) {
                e += (this.anchor2.w + this.anchor1.w);
                a = 4
            } else {
                a = -4
            }
        } else {
            e += this.anchor2.w
        }
        d.printText(e / 2, f + a, this.number, "middle").attr({
            "font-size": "10px",
            "font-style": "italic"
        })
    }
};
ABCJS.write.TripletElem.prototype.drawLine = function (c, e) {
    var b;
    var d = this.anchor1.x;
    b = ABCJS.write.sprintf("M %f %f L %f %f", d, e, d, e + 5);
    c.printPath({
        path: b,
        stroke: "#000000"
    });
    var a = this.anchor2.x + this.anchor2.w;
    b = ABCJS.write.sprintf("M %f %f L %f %f", a, e, a, e + 5);
    c.printPath({
        path: b,
        stroke: "#000000"
    });
    b = ABCJS.write.sprintf("M %f %f L %f %f", d, e, (d + a) / 2 - 5, e);
    c.printPath({
        path: b,
        stroke: "#000000"
    });
    b = ABCJS.write.sprintf("M %f %f L %f %f", (d + a) / 2 + 5, e, a, e);
    c.printPath({
        path: b,
        stroke: "#000000"
    })
};
ABCJS.write.BeamElem = function (a, b) {
    this.isflat = (b);
    this.isgrace = (a && a === "grace");
    this.forceup = (a && a === "up");
    this.forcedown = (a && a === "down");
    this.elems = [];
    this.total = 0;
    this.dy = (this.asc) ? ABCJS.write.spacing.STEP * 1.2 : -ABCJS.write.spacing.STEP * 1.2;
    if (this.isgrace) {
        this.dy = this.dy * 0.4
    }
    this.allrests = true
};
ABCJS.write.BeamElem.prototype.add = function (a) {
    var b = a.abcelem.averagepitch;
    if (b === undefined) {
        return
    }
    this.allrests = this.allrests && a.abcelem.rest;
    a.beam = this;
    this.elems.push(a);
    this.total += b;
    if (!this.min || a.abcelem.minpitch < this.min) {
        this.min = a.abcelem.minpitch
    }
    if (!this.max || a.abcelem.maxpitch > this.max) {
        this.max = a.abcelem.maxpitch
    }
};
ABCJS.write.BeamElem.prototype.average = function () {
    try {
        return this.total / this.elems.length
    } catch (a) {
        return 0
    }
};
ABCJS.write.BeamElem.prototype.draw = function (a) {
    if (this.elems.length === 0 || this.allrests) {
        return
    }
    this.drawBeam(a);
    this.drawStems(a)
};
ABCJS.write.BeamElem.prototype.calcDir = function () {
    var a = this.average();
    this.asc = (this.forceup || this.isgrace || a < 6) && (!this.forcedown);
    return this.asc
};
ABCJS.write.BeamElem.prototype.drawBeam = function (i) {
    var b = this.average();
    var h = (this.isgrace) ? 5 : 7;
    this.calcDir();
    var a = this.asc ? 5 : 8;
    this.pos = Math.round(this.asc ? Math.max(b + h, this.max + a) : Math.min(b - h, this.min - a));
    var f = this.elems[0].abcelem.averagepitch - this.elems[this.elems.length - 1].abcelem.averagepitch;
    if (this.isflat) {
        f = 0
    }
    var e = this.elems.length / 2;
    if (f > e) {
        f = e
    }
    if (f < -e) {
        f = -e
    }
    this.starty = i.calcY(this.pos + Math.floor(f / 2));
    this.endy = i.calcY(this.pos + Math.floor(-f / 2));
    var d = this.elems[0].heads[(this.asc) ? 0 : this.elems[0].heads.length - 1];
    var g = this.elems[this.elems.length - 1].heads[(this.asc) ? 0 : this.elems[this.elems.length - 1].heads.length - 1];
    this.startx = d.x;
    if (this.asc) {
        this.startx += d.w - 0.6
    }
    this.endx = g.x;
    if (this.asc) {
        this.endx += g.w
    }
    if (this.asc && this.pos < 6) {
        this.starty = i.calcY(6);
        this.endy = i.calcY(6)
    } else {
        if (!this.asc && this.pos > 6) {
            this.starty = i.calcY(6);
            this.endy = i.calcY(6)
        }
    }
    var c = "M" + this.startx + " " + this.starty + " L" + this.endx + " " + this.endy + "L" + this.endx + " " + (this.endy + this.dy) + " L" + this.startx + " " + (this.starty + this.dy) + "z";
    i.printPath({
        path: c,
        stroke: "none",
        fill: "#000000"
    })
};
ABCJS.write.BeamElem.prototype.drawStems = function (r) {
    var a = [];
    r.beginGroup();
    for (var g = 0, q = this.elems.length; g < q; g++) {
        if (this.elems[g].abcelem.rest) {
            continue
        }
        var m = this.elems[g].heads[(this.asc) ? 0 : this.elems[g].heads.length - 1];
        var e = (this.isgrace) ? 1 / 3 : 1 / 5;
        var b = m.pitch + ((this.asc) ? e : -e);
        var o = r.calcY(b);
        var p = m.x + ((this.asc) ? m.w : 0);
        var l = this.getBarYAt(p);
        var s = (this.asc) ? -0.6 : 0.6;
        r.printStem(p, s, o, l);
        var n = (this.asc) ? 1.5 * ABCJS.write.spacing.STEP : -1.5 * ABCJS.write.spacing.STEP;
        if (this.isgrace) {
            n = n * 2 / 3
        }
        for (var c = ABCJS.write.getDurlog(this.elems[g].duration); c < -3; c++) {
            if (a[-4 - c]) {
                a[-4 - c].single = false
            } else {
                a[-4 - c] = {
                    x: p + ((this.asc) ? -0.6 : 0),
                    y: l + n * (-4 - c + 1),
                    durlog: c,
                    single: true
                }
            }
        }
        for (var f = a.length - 1; f >= 0; f--) {
            if (g === q - 1 || ABCJS.write.getDurlog(this.elems[g + 1].duration) > (-f - 4)) {
                var k = p;
                var h = l + n * (f + 1);
                if (a[f].single) {
                    k = (g === 0) ? p + 5 : p - 5;
                    h = this.getBarYAt(k) + n * (f + 1)
                }
                var d = "M" + a[f].x + " " + a[f].y + " L" + k + " " + h + "L" + k + " " + (h + this.dy) + " L" + a[f].x + " " + (a[f].y + this.dy) + "z";
                r.printPath({
                    path: d,
                    stroke: "none",
                    fill: "#000000"
                });
                a = a.slice(0, f)
            }
        }
    }
    r.endGroup()
};
ABCJS.write.BeamElem.prototype.getBarYAt = function (a) {
    return this.starty + (this.endy - this.starty) / (this.endx - this.startx) * (a - this.startx)
};
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.write) {
    window.ABCJS.write = {}
}
ABCJS.write.getDuration = function (a) {
    var b = 0;
    if (a.duration) {
        b = a.duration
    }
    return b
};
ABCJS.write.getDurlog = function (a) {
    return Math.floor(Math.log(a) / Math.log(2))
};
ABCJS.write.Layout = function (b, a) {
    this.glyphs = b;
    this.isBagpipes = a;
    this.chartable = {
        rest: {
            0: "rests.whole",
            1: "rests.half",
            2: "rests.quarter",
            3: "rests.8th",
            4: "rests.16th",
            5: "rests.32nd",
            6: "rests.64th",
            7: "rests.128th"
        },
        note: {
            "-1": "noteheads.dbl",
            0: "noteheads.whole",
            1: "noteheads.half",
            2: "noteheads.quarter",
            3: "noteheads.quarter",
            4: "noteheads.quarter",
            5: "noteheads.quarter",
            6: "noteheads.quarter"
        },
        uflags: {
            3: "flags.u8th",
            4: "flags.u16th",
            5: "flags.u32nd",
            6: "flags.u64th"
        },
        dflags: {
            3: "flags.d8th",
            4: "flags.d16th",
            5: "flags.d32nd",
            6: "flags.d64th"
        }
    };
    this.slurs = {};
    this.ties = [];
    this.slursbyvoice = {};
    this.tiesbyvoice = {};
    this.endingsbyvoice = {};
    this.s = 0;
    this.v = 0;
    this.stafflines = 5
};
ABCJS.write.Layout.prototype.getCurrentVoiceId = function () {
    return "s" + this.s + "v" + this.v
};
ABCJS.write.Layout.prototype.pushCrossLineElems = function () {
    this.slursbyvoice[this.getCurrentVoiceId()] = this.slurs;
    this.tiesbyvoice[this.getCurrentVoiceId()] = this.ties;
    this.endingsbyvoice[this.getCurrentVoiceId()] = this.partstartelem
};
ABCJS.write.Layout.prototype.popCrossLineElems = function () {
    this.slurs = this.slursbyvoice[this.getCurrentVoiceId()] || {};
    this.ties = this.tiesbyvoice[this.getCurrentVoiceId()] || [];
    this.partstartelem = this.endingsbyvoice[this.getCurrentVoiceId()]
};
ABCJS.write.Layout.prototype.getElem = function () {
    if (this.abcline.length <= this.pos) {
        return null
    }
    return this.abcline[this.pos]
};
ABCJS.write.Layout.prototype.getNextElem = function () {
    if (this.abcline.length <= this.pos + 1) {
        return null
    }
    return this.abcline[this.pos + 1]
};
ABCJS.write.Layout.prototype.printABCLine = function (a) {
    this.minY = 2;
    this.staffgroup = new ABCJS.write.StaffGroupElement();
    for (this.s = 0; this.s < a.length; this.s++) {
        this.printABCStaff(a[this.s])
    }
    return this.staffgroup
};
ABCJS.write.Layout.prototype.printABCStaff = function (a) {
    var b = "";
    if (a.bracket) {
        b += "bracket " + a.bracket + " "
    }
    if (a.brace) {
        b += "brace " + a.brace + " "
    }
    for (this.v = 0; this.v < a.voices.length; this.v++) {
        this.voice = new ABCJS.write.VoiceElement(this.v, a.voices.length);
        if (this.v === 0) {
            this.voice.barfrom = (a.connectBarLines === "start" || a.connectBarLines === "continue");
            this.voice.barto = (a.connectBarLines === "continue" || a.connectBarLines === "end")
        } else {
            this.voice.duplicate = true
        }
        if (a.title && a.title[this.v]) {
            this.voice.header = a.title[this.v]
        }
        this.voice.addChild(this.printClef(a.clef));
        this.voice.addChild(this.printKeySignature(a.key));
        if (a.meter) {
            this.voice.addChild(this.printTimeSignature(a.meter))
        }
        this.printABCVoice(a.voices[this.v]);
        this.staffgroup.addVoice(this.voice, this.s, this.stafflines)
    }
};
ABCJS.write.Layout.prototype.printABCVoice = function (b) {
    this.popCrossLineElems();
    this.stemdir = (this.isBagpipes) ? "down" : null;
    this.abcline = b;
    if (this.partstartelem) {
        this.partstartelem = new ABCJS.write.EndingElem("", null, null);
        this.voice.addOther(this.partstartelem)
    }
    for (var a in this.slurs) {
        if (this.slurs.hasOwnProperty(a)) {
            this.slurs[a] = new ABCJS.write.TieElem(null, null, this.slurs[a].above, this.slurs[a].force);
            this.voice.addOther(this.slurs[a])
        }
    }
    for (var c = 0; c < this.ties.length; c++) {
        this.ties[c] = new ABCJS.write.TieElem(null, null, this.ties[c].above, this.ties[c].force);
        this.voice.addOther(this.ties[c])
    }
    for (this.pos = 0; this.pos < this.abcline.length; this.pos++) {
        var d = this.printABCElement();
        for (c = 0; c < d.length; c++) {
            this.voice.addChild(d[c])
        }
    }
    this.pushCrossLineElems()
};
ABCJS.write.Layout.prototype.printABCElement = function () {
    var d = [];
    var b = this.getElem();
    switch (b.el_type) {
    case "note":
        d = this.printBeam();
        break;
    case "bar":
        d[0] = this.printBarLine(b);
        if (this.voice.duplicate) {
            d[0].invisible = true
        }
        break;
    case "meter":
        d[0] = this.printTimeSignature(b);
        if (this.voice.duplicate) {
            d[0].invisible = true
        }
        break;
    case "clef":
        d[0] = this.printClef(b);
        if (this.voice.duplicate) {
            d[0].invisible = true
        }
        break;
    case "key":
        d[0] = this.printKeySignature(b);
        if (this.voice.duplicate) {
            d[0].invisible = true
        }
        break;
    case "stem":
        this.stemdir = b.direction;
        break;
    case "part":
        var a = new ABCJS.write.AbsoluteElement(b, 0, 0);
        a.addChild(new ABCJS.write.RelativeElement(b.title, 0, 0, 18, {
            type: "text",
            attributes: {
                "font-weight": "bold",
                "font-size": "16px",
                "font-family": "serif"
            }
        }));
        d[0] = a;
        break;
    default:
        var c = new ABCJS.write.AbsoluteElement(b, 0, 0);
        c.addChild(new ABCJS.write.RelativeElement("element type " + b.el_type, 0, 0, 0, {
            type: "debug"
        }));
        d[0] = c
    }
    return d
};
ABCJS.write.Layout.prototype.printBeam = function () {
    var e = [];
    if (this.getElem().startBeam && !this.getElem().endBeam) {
        var f = new ABCJS.write.BeamElem(this.stemdir);
        var b = this.pos;
        var c;
        while (this.getElem()) {
            c = this.printNote(this.getElem(), true, true);
            f.add(c);
            if (this.getElem().endBeam) {
                break
            }
            this.pos++
        }
        var a = f.calcDir();
        this.pos = b;
        f = new ABCJS.write.BeamElem(a ? "up" : "down");
        var d = this.stemdir;
        this.stemdir = a ? "up" : "down";
        while (this.getElem()) {
            c = this.printNote(this.getElem(), true);
            e.push(c);
            f.add(c);
            if (this.getElem().endBeam) {
                break
            }
            this.pos++
        }
        this.stemdir = d;
        this.voice.addOther(f)
    } else {
        e[0] = this.printNote(this.getElem())
    }
    return e
};
ABCJS.write.sortPitch = function (c) {
    var a;
    do {
        a = true;
        for (var d = 0; d < c.pitches.length - 1; d++) {
            if (c.pitches[d].pitch > c.pitches[d + 1].pitch) {
                a = false;
                var b = c.pitches[d];
                c.pitches[d] = c.pitches[d + 1];
                c.pitches[d + 1] = b
            }
        }
    } while (!a)
};
ABCJS.write.Layout.prototype.printNote = function (K, d, Q) {
    var o = null;
    var a = null;
    this.roomtaken = 0;
    this.roomtakenright = 0;
    var C = 0;
    var S = "";
    var A = null;
    var q = [];
    var H, M, l;
    var b, P, O, e;
    var r = ABCJS.write.getDuration(K);
    var v = Math.floor(Math.log(r) / Math.log(2));
    var U = 0;
    for (var f = Math.pow(2, v), N = f / 2; f < r; U++, f += N, N /= 2) {}
    var g = new ABCJS.write.AbsoluteElement(K, r, 1);
    if (K.rest) {
        var k = 7;
        if (this.stemdir === "down") {
            k = 3
        }
        if (this.stemdir === "up") {
            k = 11
        }
        switch (K.rest.type) {
        case "rest":
            S = this.chartable.rest[-v];
            K.averagepitch = k;
            K.minpitch = k;
            K.maxpitch = k;
            break;
        case "invisible":
        case "spacer":
            S = ""
        }
        if (!Q) {
            o = this.printNoteHead(g, S, {
                verticalPos: k
            }, null, 0, - this.roomtaken, null, U, 0, 1)
        }
        if (o) {
            g.addHead(o)
        }
        this.roomtaken += this.accidentalshiftx;
        this.roomtakenright = Math.max(this.roomtakenright, this.dotshiftx)
    } else {
        ABCJS.write.sortPitch(K);
        var n = 0;
        for (H = 0, l = K.pitches.length; H < l; H++) {
            n += K.pitches[H].verticalPos
        }
        K.averagepitch = n / K.pitches.length;
        K.minpitch = K.pitches[0].verticalPos;
        this.minY = Math.min(K.minpitch, this.minY);
        K.maxpitch = K.pitches[K.pitches.length - 1].verticalPos;
        var T = (K.averagepitch >= 6) ? "down" : "up";
        if (this.stemdir) {
            T = this.stemdir
        }
        for (H = (T === "down") ? K.pitches.length - 2 : 1;
        (T === "down") ? H >= 0 : H < K.pitches.length; H = (T === "down") ? H - 1 : H + 1) {
            var w = K.pitches[(T === "down") ? H + 1 : H - 1];
            var D = K.pitches[H];
            var E = (T === "down") ? w.pitch - D.pitch : D.pitch - w.pitch;
            if (E <= 1 && !w.printer_shift) {
                D.printer_shift = (E) ? "different" : "same";
                if (D.pitch > 11 || D.pitch < 1) {
                    q.push(D.pitch - (D.pitch % 2))
                }
                if (T === "down") {
                    this.roomtaken = this.glyphs.getSymbolWidth(this.chartable.note[-v]) + 2
                } else {
                    C = this.glyphs.getSymbolWidth(this.chartable.note[-v]) + 2
                }
            }
        }
        this.accidentalSlot = [];
        for (H = 0; H < K.pitches.length; H++) {
            if (!d) {
                if ((T === "down" && H !== 0) || (T === "up" && H !== l - 1)) {
                    A = null
                } else {
                    A = this.chartable[(T === "down") ? "dflags" : "uflags"][-v]
                }
                S = this.chartable.note[-v]
            } else {
                S = "noteheads.quarter"
            }
            K.pitches[H].highestVert = K.pitches[H].verticalPos;
            var j = (this.stemdir === "up" || T === "up") && H === 0;
            var I = (this.stemdir === "down" || T === "down") && H === l - 1;
            if (!Q && (j || I)) {
                if (K.startSlur || l === 1) {
                    K.pitches[H].highestVert = K.pitches[l - 1].verticalPos;
                    if (this.stemdir === "up" || T === "up") {
                        K.pitches[H].highestVert += 6
                    }
                }
                if (K.startSlur) {
                    if (!K.pitches[H].startSlur) {
                        K.pitches[H].startSlur = []
                    }
                    for (M = 0; M < K.startSlur.length; M++) {
                        K.pitches[H].startSlur.push(K.startSlur[M])
                    }
                }
                if (!Q && K.endSlur) {
                    K.pitches[H].highestVert = K.pitches[l - 1].verticalPos;
                    if (this.stemdir === "up" || T === "up") {
                        K.pitches[H].highestVert += 6
                    }
                    if (!K.pitches[H].endSlur) {
                        K.pitches[H].endSlur = []
                    }
                    for (M = 0; M < K.endSlur.length; M++) {
                        K.pitches[H].endSlur.push(K.endSlur[M])
                    }
                }
            }
            if (!Q) {
                o = this.printNoteHead(g, S, K.pitches[H], T, 0, - this.roomtaken, A, U, C, 1)
            }
            if (o) {
                g.addHead(o)
            }
            this.roomtaken += this.accidentalshiftx;
            this.roomtakenright = Math.max(this.roomtakenright, this.dotshiftx)
        }
        if (!d && v <= -1) {
            P = (T === "down") ? K.minpitch - 7 : K.minpitch + 1 / 3;
            if (P > 6 && !this.stemdir) {
                P = 6
            }
            O = (T === "down") ? K.maxpitch - 1 / 3 : K.maxpitch + 7;
            if (O < 6 && !this.stemdir) {
                O = 6
            }
            e = (T === "down" || g.heads.length === 0) ? 0 : g.heads[0].w;
            b = (T === "down") ? 1 : -1;
            g.addExtra(new ABCJS.write.RelativeElement(null, e, 0, P, {
                type: "stem",
                pitch2: O,
                linewidth: b
            }));
            this.minY = Math.min(P, this.minY);
            this.minY = Math.min(O, this.minY)
        }
    }
    if (K.lyric !== undefined) {
        var J = "";
        window.ABCJS.parse.each(K.lyric, function (c) {
            J += c.syllable + c.divider + "\n"
        });
        g.addRight(new ABCJS.write.RelativeElement(J, 0, J.length * 5, 0, {
            type: "debugLow"
        }))
    }
    if (!Q && K.gracenotes !== undefined) {
        var u = 3 / 5;
        var h = null;
        if (K.gracenotes.length > 1) {
            h = new ABCJS.write.BeamElem("grace", this.isBagpipes)
        }
        var R = [];
        for (M = K.gracenotes.length - 1; M >= 0; M--) {
            this.roomtaken += 10;
            R[M] = this.roomtaken;
            if (K.gracenotes[M].accidental) {
                this.roomtaken += 7
            }
        }
        for (M = 0; M < K.gracenotes.length; M++) {
            var t = K.gracenotes[M].verticalPos;
            A = (h) ? null : this.chartable.uflags[(this.isBagpipes) ? 5 : 3];
            a = this.printNoteHead(g, "noteheads.quarter", K.gracenotes[M], "up", - R[M], - R[M], A, 0, 0, u);
            g.addExtra(a);
            if (K.gracenotes[M].acciaccatura) {
                var z = K.gracenotes[M].verticalPos + 7 * u;
                var L = h ? 5 : 6;
                g.addRight(new ABCJS.write.RelativeElement("flags.ugrace", - R[M] + L, 0, z, {
                    scalex: u,
                    scaley: u
                }))
            }
            if (h) {
                var m = {
                    heads: [a],
                    abcelem: {
                        averagepitch: t,
                        minpitch: t,
                        maxpitch: t
                    },
                    duration: (this.isBagpipes) ? 1 / 32 : 1 / 16
                };
                h.add(m)
            } else {
                P = t + 1 / 3 * u;
                O = t + 7 * u;
                e = a.dx + a.w;
                b = -0.6;
                g.addExtra(new ABCJS.write.RelativeElement(null, e, 0, P, {
                    type: "stem",
                    pitch2: O,
                    linewidth: b
                }))
            }
            if (M === 0 && !this.isBagpipes && !(K.rest && (K.rest.type === "spacer" || K.rest.type === "invisible"))) {
                this.voice.addOther(new ABCJS.write.TieElem(a, o, false, true))
            }
        }
        if (h) {
            this.voice.addOther(h)
        }
    }
    if (!Q && K.decoration) {
        var s = this.printDecoration(K.decoration, K.maxpitch, (o) ? o.w : 0, g, this.roomtaken, T, K.minpitch);
        if (s) {
            g.klass = "mark"
        }
    }
    if (K.barNumber) {
        g.addChild(new ABCJS.write.RelativeElement(K.barNumber, - 10, 0, 0, {
            type: "debug"
        }))
    }
    for (M = K.maxpitch; M > 11; M--) {
        if (M % 2 === 0 && !K.rest) {
            g.addChild(new ABCJS.write.RelativeElement(null, - 2, this.glyphs.getSymbolWidth(S) + 4, M, {
                type: "ledger"
            }))
        }
    }
    for (M = K.minpitch; M < 1; M++) {
        if (M % 2 === 0 && !K.rest) {
            g.addChild(new ABCJS.write.RelativeElement(null, - 2, this.glyphs.getSymbolWidth(S) + 4, M, {
                type: "ledger"
            }))
        }
    }
    for (M = 0; M < q.length; M++) {
        var B = this.glyphs.getSymbolWidth(S);
        if (T === "down") {
            B = -B
        }
        g.addChild(new ABCJS.write.RelativeElement(null, B - 2, this.glyphs.getSymbolWidth(S) + 4, q[M], {
            type: "ledger"
        }))
    }
    if (K.chord !== undefined) {
        for (M = 0; M < K.chord.length; M++) {
            var G = 0;
            var F = 16;
            switch (K.chord[M].position) {
            case "left":
                this.roomtaken += 7;
                G = -this.roomtaken;
                F = K.averagepitch;
                g.addExtra(new ABCJS.write.RelativeElement(K.chord[M].name, G, this.glyphs.getSymbolWidth(K.chord[M].name[0]) + 4, F, {
                    type: "text"
                }));
                break;
            case "right":
                this.roomtakenright += 4;
                G = this.roomtakenright;
                F = K.averagepitch;
                g.addRight(new ABCJS.write.RelativeElement(K.chord[M].name, G, this.glyphs.getSymbolWidth(K.chord[M].name[0]) + 4, F, {
                    type: "text"
                }));
                break;
            case "below":
                F = -3;
                g.addChild(new ABCJS.write.RelativeElement(K.chord[M].name, G, 0, F, {
                    type: "text"
                }));
                break;
            default:
                g.addChild(new ABCJS.write.RelativeElement(K.chord[M].name, G, 0, F, {
                    type: "text"
                }))
            }
        }
    }
    if (K.startTriplet) {
        this.triplet = new ABCJS.write.TripletElem(K.startTriplet, o, null, true);
        if (!Q) {
            this.voice.addOther(this.triplet)
        }
    }
    if (K.endTriplet && this.triplet) {
        this.triplet.anchor2 = o;
        this.triplet = null
    }
    return g
};
ABCJS.write.Layout.prototype.printNoteHead = function (m, z, A, o, h, e, u, p, x, B) {
    var k = A.verticalPos;
    var d;
    var v;
    this.accidentalshiftx = 0;
    this.dotshiftx = 0;
    if (z === undefined) {
        m.addChild(new ABCJS.write.RelativeElement("pitch is undefined", 0, 0, 0, {
            type: "debug"
        }))
    } else {
        if (z === "") {
            d = new ABCJS.write.RelativeElement(null, 0, 0, k)
        } else {
            var n = h;
            if (A.printer_shift) {
                var r = (A.printer_shift === "same") ? 1 : 0;
                n = (o === "down") ? -this.glyphs.getSymbolWidth(z) * B + r : this.glyphs.getSymbolWidth(z) * B - r
            }
            d = new ABCJS.write.RelativeElement(z, n, this.glyphs.getSymbolWidth(z) * B, k, {
                scalex: B,
                scaley: B,
                extreme: ((o === "down") ? "below" : "above")
            });
            if (u) {
                var g = k + ((o === "down") ? -7 : 7) * B;
                if (B === 1 && (o === "down") ? (g > 6) : (g < 6)) {
                    g = 6
                }
                var q = (o === "down") ? h : h + d.w - 0.6;
                m.addRight(new ABCJS.write.RelativeElement(u, q, this.glyphs.getSymbolWidth(u) * B, g, {
                    scalex: B,
                    scaley: B
                }))
            }
            this.dotshiftx = d.w + x - 2 + 5 * p;
            for (; p > 0; p--) {
                var a = (1 - Math.abs(k) % 2);
                m.addRight(new ABCJS.write.RelativeElement("dots.dot", d.w + x - 2 + 5 * p, this.glyphs.getSymbolWidth("dots.dot"), k + a))
            }
        }
    }
    if (d) {
        d.highestVert = A.highestVert
    }
    if (A.accidental) {
        var b;
        switch (A.accidental) {
        case "quartersharp":
            b = "accidentals.halfsharp";
            break;
        case "dblsharp":
            b = "accidentals.dblsharp";
            break;
        case "sharp":
            b = "accidentals.sharp";
            break;
        case "quarterflat":
            b = "accidentals.halfflat";
            break;
        case "flat":
            b = "accidentals.flat";
            break;
        case "dblflat":
            b = "accidentals.dblflat";
            break;
        case "natural":
            b = "accidentals.nat"
        }
        var l = false;
        var w = e;
        for (var s = 0; s < this.accidentalSlot.length; s++) {
            if (k - this.accidentalSlot[s][0] >= 6) {
                this.accidentalSlot[s][0] = k;
                w = this.accidentalSlot[s][1];
                l = true;
                break
            }
        }
        if (l === false) {
            w -= (this.glyphs.getSymbolWidth(b) * B + 2);
            this.accidentalSlot.push([k, w]);
            this.accidentalshiftx = (this.glyphs.getSymbolWidth(b) * B + 2)
        }
        m.addExtra(new ABCJS.write.RelativeElement(b, w, this.glyphs.getSymbolWidth(b), k, {
            scalex: B,
            scaley: B
        }))
    }
    if (A.endTie) {
        if (this.ties[0]) {
            this.ties[0].anchor2 = d;
            this.ties = this.ties.slice(1, this.ties.length)
        }
    }
    if (A.startTie) {
        var t = new ABCJS.write.TieElem(d, null, (this.stemdir === "down" || o === "down") && this.stemdir !== "up", (this.stemdir === "down" || this.stemdir === "up"));
        this.ties[this.ties.length] = t;
        this.voice.addOther(t)
    }
    if (A.endSlur) {
        for (v = 0; v < A.endSlur.length; v++) {
            var y = A.endSlur[v];
            var f;
            if (this.slurs[y]) {
                f = this.slurs[y].anchor2 = d;
                delete this.slurs[y]
            } else {
                f = new ABCJS.write.TieElem(null, d, o === "down", (this.stemdir === "up" || o === "down") && this.stemdir !== "down", this.stemdir);
                this.voice.addOther(f)
            }
            if (this.startlimitelem) {
                f.startlimitelem = this.startlimitelem
            }
        }
    }
    if (A.startSlur) {
        for (v = 0; v < A.startSlur.length; v++) {
            var y = A.startSlur[v].label;
            var f = new ABCJS.write.TieElem(d, null, (this.stemdir === "down" || o === "down") && this.stemdir !== "up", false);
            this.slurs[y] = f;
            this.voice.addOther(f)
        }
    }
    return d
};
ABCJS.write.Layout.prototype.printDecoration = function (l, k, t, n, a, r, f) {
    var q;
    var u;
    var j;
    var x;
    var s = [];
    var y = (k > 9) ? k + 3 : 12;
    var h;
    var o = false;
    var m = this.minY - 4;
    var w;
    a = a || 0;
    if (k === 5) {
        y = 14
    }
    var g = false;
    for (w = 0; w < l.length; w++) {
        if (l[w] === "staccato") {
            h = (r === "down") ? k + 2 : f - 2;
            switch (h) {
            case 2:
            case 4:
            case 6:
            case 8:
            case 10:
                if (r === "up") {
                    h--
                } else {
                    h++
                }
                break
            }
            if (k > 9) {
                y++
            }
            var c = t / 2;
            if (this.glyphs.getSymbolAlign("scripts.staccato") !== "center") {
                c -= (this.glyphs.getSymbolWidth(q) / 2)
            }
            n.addChild(new ABCJS.write.RelativeElement("scripts.staccato", c, this.glyphs.getSymbolWidth("scripts.staccato"), h))
        }
        if (l[w] === "slide" && n.heads[0]) {
            h = n.heads[0].pitch;
            var d = new ABCJS.write.RelativeElement("", - a - 15, 0, h - 1);
            var b = new ABCJS.write.RelativeElement("", - a - 5, 0, h + 1);
            n.addChild(d);
            n.addChild(b);
            this.voice.addOther(new ABCJS.write.TieElem(d, b, false))
        }
    }
    for (w = 0; w < l.length; w++) {
        o = false;
        switch (l[w]) {
        case "trill":
            q = "scripts.trill";
            break;
        case "roll":
            q = "scripts.roll";
            break;
        case "irishroll":
            q = "scripts.roll";
            break;
        case "marcato":
            q = "scripts.umarcato";
            break;
        case "marcato2":
            q = "scriopts.dmarcato";
            break;
        case "turn":
            q = "scripts.turn";
            break;
        case "uppermordent":
            q = "scripts.prall";
            break;
        case "mordent":
        case "lowermordent":
            q = "scripts.mordent";
            break;
        case "staccato":
        case "slide":
            continue;
        case "downbow":
            q = "scripts.downbow";
            break;
        case "upbow":
            q = "scripts.upbow";
            break;
        case "fermata":
            q = "scripts.ufermata";
            break;
        case "invertedfermata":
            o = true;
            q = "scripts.dfermata";
            break;
        case "breath":
            q = ",";
            break;
        case "accent":
            q = "scripts.sforzato";
            break;
        case "tenuto":
            q = "scripts.tenuto";
            break;
        case "coda":
            q = "scripts.coda";
            break;
        case "segno":
            q = "scripts.segno";
            break;
        case "/":
            u = ["flags.ugrace", 1];
            continue;
        case "//":
            u = ["flags.ugrace", 2];
            continue;
        case "///":
            u = ["flags.ugrace", 3];
            continue;
        case "////":
            u = ["flags.ugrace", 4];
            continue;
        case "p":
        case "mp":
        case "pp":
        case "ppp":
        case "pppp":
        case "f":
        case "ff":
        case "fff":
        case "ffff":
        case "sfz":
        case "mf":
            var v = new ABCJS.write.DynamicDecoration(n, l[w]);
            this.voice.addOther(v);
            continue;
        case "mark":
            g = true;
            continue;
        case "diminuendo(":
            ABCJS.write.Layout.prototype.startDiminuendoX = n;
            j = undefined;
            continue;
        case "diminuendo)":
            j = {
                start: ABCJS.write.Layout.prototype.startDiminuendoX,
                stop: n
            };
            ABCJS.write.Layout.prototype.startDiminuendoX = undefined;
            continue;
        case "crescendo(":
            ABCJS.write.Layout.prototype.startCrescendoX = n;
            x = undefined;
            continue;
        case "crescendo)":
            x = {
                start: ABCJS.write.Layout.prototype.startCrescendoX,
                stop: n
            };
            ABCJS.write.Layout.prototype.startCrescendoX = undefined;
            continue;
        default:
            s[s.length] = l[w];
            continue
        }
        if (o) {
            h = m;
            m -= 4
        } else {
            h = y;
            y += 3
        }
        var c = t / 2;
        if (this.glyphs.getSymbolAlign(q) !== "center") {
            c -= (this.glyphs.getSymbolWidth(q) / 2)
        }
        n.addChild(new ABCJS.write.RelativeElement(q, c, this.glyphs.getSymbolWidth(q), h))
    }
    if (u) {
        h = (r) ? k + 1 : k + 9;
        c = t / 2;
        c += (r) ? -5 : 3;
        for (var e = 0; e < u[1]; e++) {
            h -= 1;
            n.addChild(new ABCJS.write.RelativeElement(u[0], c, this.glyphs.getSymbolWidth(u[0]), h))
        }
    }
    if (j) {
        var p = new ABCJS.write.CrescendoElem(j.start, j.stop, ">");
        this.voice.addOther(p)
    }
    if (x) {
        var z = new ABCJS.write.CrescendoElem(x.start, x.stop, "<");
        this.voice.addOther(z)
    }
    if (s.length > 0) {
        n.addChild(new ABCJS.write.RelativeElement(s.join(","), 0, 0, 0, {
            type: "debug"
        }))
    }
    return g
};
ABCJS.write.Layout.prototype.printBarLine = function (c) {
    var i = new ABCJS.write.AbsoluteElement(c, 0, 10);
    var d = null;
    var j = 0;
    var a = (c.type === "bar_right_repeat" || c.type === "bar_dbl_repeat");
    var e = (c.type !== "bar_left_repeat" && c.type !== "bar_thick_thin" && c.type !== "bar_invisible");
    var f = (c.type === "bar_right_repeat" || c.type === "bar_dbl_repeat" || c.type === "bar_left_repeat" || c.type === "bar_thin_thick" || c.type === "bar_thick_thin");
    var g = (c.type === "bar_left_repeat" || c.type === "bar_thick_thin" || c.type === "bar_thin_thin" || c.type === "bar_dbl_repeat");
    var b = (c.type === "bar_left_repeat" || c.type === "bar_dbl_repeat");
    if (a || b) {
        for (var h in this.slurs) {
            if (this.slurs.hasOwnProperty(h)) {
                this.slurs[h].endlimitelem = i
            }
        }
        this.startlimitelem = i
    }
    if (a) {
        i.addRight(new ABCJS.write.RelativeElement("dots.dot", j, 1, 7));
        i.addRight(new ABCJS.write.RelativeElement("dots.dot", j, 1, 5));
        j += 6
    }
    if (e) {
        d = new ABCJS.write.RelativeElement(null, j, 1, 2, {
            type: "bar",
            pitch2: 10,
            linewidth: 0.6
        });
        i.addRight(d)
    }
    if (c.type === "bar_invisible") {
        d = new ABCJS.write.RelativeElement(null, j, 1, 2, {
            type: "none",
            pitch2: 10,
            linewidth: 0.6
        });
        i.addRight(d)
    }
    if (c.decoration) {
        this.printDecoration(c.decoration, 12, (f) ? 3 : 1, i, 0, "down", 2)
    }
    if (f) {
        j += 4;
        d = new ABCJS.write.RelativeElement(null, j, 4, 2, {
            type: "bar",
            pitch2: 10,
            linewidth: 4
        });
        i.addRight(d);
        j += 5
    }
    if (this.partstartelem && c.endEnding) {
        this.partstartelem.anchor2 = d;
        this.partstartelem = null
    }
    if (g) {
        j += 3;
        d = new ABCJS.write.RelativeElement(null, j, 1, 2, {
            type: "bar",
            pitch2: 10,
            linewidth: 0.6
        });
        i.addRight(d)
    }
    if (b) {
        j += 3;
        i.addRight(new ABCJS.write.RelativeElement("dots.dot", j, 1, 7));
        i.addRight(new ABCJS.write.RelativeElement("dots.dot", j, 1, 5))
    }
    if (c.startEnding) {
        this.partstartelem = new ABCJS.write.EndingElem(c.startEnding, d, null);
        this.voice.addOther(this.partstartelem)
    }
    return i
};
ABCJS.write.Layout.prototype.printClef = function (e) {
    var g = "clefs.G";
    var c = 0;
    var f = 4;
    var d = new ABCJS.write.AbsoluteElement(e, 0, 10);
    switch (e.type) {
    case "treble":
        break;
    case "tenor":
        g = "clefs.C";
        f = 8;
        break;
    case "alto":
        g = "clefs.C";
        f = 6;
        break;
    case "bass":
        g = "clefs.F";
        f = 8;
        break;
    case "treble+8":
        c = 1;
        break;
    case "tenor+8":
        g = "clefs.C";
        f = 8;
        break;
    case "bass+8":
        g = "clefs.F";
        f = 8;
        break;
    case "alto+8":
        g = "clefs.C";
        f = 6;
        break;
    case "treble-8":
        c = -1;
        break;
    case "tenor-8":
        g = "clefs.C";
        f = 8;
        break;
    case "bass-8":
        g = "clefs.F";
        f = 8;
        break;
    case "alto-8":
        g = "clefs.C";
        f = 6;
        break;
    case "none":
        g = "";
        break;
    case "perc":
        g = "clefs.perc";
        f = 6;
        break;
    default:
        d.addChild(new ABCJS.write.RelativeElement("clef=" + e.type, 0, 0, 0, {
            type: "debug"
        }))
    }
    if (e.verticalPos) {
        f = e.verticalPos
    }
    var b = 10;
    if (g !== "") {
        d.addRight(new ABCJS.write.RelativeElement(g, b, this.glyphs.getSymbolWidth(g), f))
    }
    if (c !== 0) {
        var h = 2 / 3;
        var a = (this.glyphs.getSymbolWidth(g) - this.glyphs.getSymbolWidth("8") * h) / 2;
        d.addRight(new ABCJS.write.RelativeElement("8", b + a, this.glyphs.getSymbolWidth("8") * h, (c > 0) ? 16 : -2, {
            scalex: h,
            scaley: h
        }))
    }
    if (e.stafflines === 0) {
        this.stafflines = 0
    } else {
        this.stafflines = e.stafflines
    }
    return d
};
ABCJS.write.Layout.prototype.printKeySignature = function (c) {
    var b = new ABCJS.write.AbsoluteElement(c, 0, 10);
    var a = 0;
    if (c.accidentals) {
        window.ABCJS.parse.each(c.accidentals, function (e) {
            var d = (e.acc === "sharp") ? "accidentals.sharp" : (e.acc === "natural") ? "accidentals.nat" : "accidentals.flat";
            b.addRight(new ABCJS.write.RelativeElement(d, a, this.glyphs.getSymbolWidth(d), e.verticalPos));
            a += this.glyphs.getSymbolWidth(d) + 2
        }, this)
    }
    this.startlimitelem = b;
    return b
};
ABCJS.write.Layout.prototype.printTimeSignature = function (c) {
    var b = new ABCJS.write.AbsoluteElement(c, 0, 20);
    if (c.type === "specified") {
        for (var a = 0; a < c.value.length; a++) {
            if (a !== 0) {
                b.addRight(new ABCJS.write.RelativeElement("+", a * 20 - 9, this.glyphs.getSymbolWidth("+"), 7))
            }
            if (c.value[a].den) {
                b.addRight(new ABCJS.write.RelativeElement(c.value[a].num, a * 20, this.glyphs.getSymbolWidth(c.value[a].num.charAt(0)) * c.value[a].num.length, 9));
                b.addRight(new ABCJS.write.RelativeElement(c.value[a].den, a * 20, this.glyphs.getSymbolWidth(c.value[a].den.charAt(0)) * c.value[a].den.length, 5))
            } else {
                b.addRight(new ABCJS.write.RelativeElement(c.value[a].num, a * 20, this.glyphs.getSymbolWidth(c.value[a].num.charAt(0)) * c.value[a].num.length, 7))
            }
        }
    } else {
        if (c.type === "common_time") {
            b.addRight(new ABCJS.write.RelativeElement("timesig.common", 0, this.glyphs.getSymbolWidth("timesig.common"), 7))
        } else {
            if (c.type === "cut_time") {
                b.addRight(new ABCJS.write.RelativeElement("timesig.cut", 0, this.glyphs.getSymbolWidth("timesig.cut"), 7))
            }
        }
    }
    this.startlimitelem = b;
    return b
};
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.write) {
    window.ABCJS.write = {}
}
ABCJS.write.spacing = function () {};
ABCJS.write.spacing.FONTEM = 360;
ABCJS.write.spacing.FONTSIZE = 30;
ABCJS.write.spacing.STEP = ABCJS.write.spacing.FONTSIZE * 93 / 720;
ABCJS.write.spacing.SPACE = 10;
ABCJS.write.spacing.TOPNOTE = 20;
ABCJS.write.spacing.STAVEHEIGHT = 100;
ABCJS.write.Printer = function (b, a) {
    a = a || {};
    this.y = 0;
    this.paper = b;
    this.space = 3 * ABCJS.write.spacing.SPACE;
    this.glyphs = new ABCJS.write.Glyphs();
    this.listeners = [];
    this.selected = [];
    this.ingroup = false;
    this.scale = a.scale || 1;
    this.staffwidth = a.staffwidth || 740;
    this.paddingtop = a.paddingtop || 15;
    this.paddingbottom = a.paddingbottom || 30;
    this.paddingright = a.paddingright || 50;
    this.paddingleft = a.paddingleft || 15;
    this.editable = a.editable || false
};
ABCJS.write.Printer.prototype.notifySelect = function (b) {
    this.clearSelection();
    this.selected = [b];
    b.highlight();
    for (var a = 0; a < this.listeners.length; a++) {
        this.listeners[a].highlight(b.abcelem)
    }
};
ABCJS.write.Printer.prototype.notifyChange = function (b) {
    for (var a = 0; a < this.listeners.length; a++) {
        this.listeners[a].modelChanged()
    }
};
ABCJS.write.Printer.prototype.clearSelection = function () {
    for (var a = 0; a < this.selected.length; a++) {
        this.selected[a].unhighlight()
    }
    this.selected = []
};
ABCJS.write.Printer.prototype.addSelectListener = function (a) {
    this.listeners[this.listeners.length] = a
};
ABCJS.write.Printer.prototype.rangeHighlight = function (b, d) {
    this.clearSelection();
    for (var i = 0; i < this.staffgroups.length; i++) {
        var f = this.staffgroups[i].voices;
        for (var g = 0; g < f.length; g++) {
            var a = f[g].children;
            for (var c = 0; c < a.length; c++) {
                var h = a[c].abcelem.startChar;
                var e = a[c].abcelem.endChar;
                if ((d > h && b < e) || ((d === b) && d === e)) {
                    this.selected[this.selected.length] = a[c];
                    a[c].highlight()
                }
            }
        }
    }
};
ABCJS.write.Printer.prototype.beginGroup = function () {
    this.path = [];
    this.lastM = [0, 0];
    this.ingroup = true
};
ABCJS.write.Printer.prototype.addPath = function (c) {
    c = c || [];
    if (c.length === 0) {
        return
    }
    c[0][0] = "m";
    c[0][1] -= this.lastM[0];
    c[0][2] -= this.lastM[1];
    this.lastM[0] += c[0][1];
    this.lastM[1] += c[0][2];
    this.path.push(c[0]);
    for (var a = 1, b = c.length; a < b; a++) {
        if (c[a][0] === "m") {
            this.lastM[0] += c[a][1];
            this.lastM[1] += c[a][2]
        }
        this.path.push(c[a])
    }
};
ABCJS.write.Printer.prototype.endGroup = function () {
    this.ingroup = false;
    if (this.path.length === 0) {
        return null
    }
    var a = this.paper.path().attr({
        path: this.path,
        stroke: "none",
        fill: "#000000"
    });
    if (this.scale !== 1) {
        a.scale(this.scale, this.scale, 0, 0)
    }
    return a
};
ABCJS.write.Printer.prototype.printStaveLine = function (x1, x2, pitch) {
    var isIE =
    /*@cc_on!@*/
    false;
    var dy = 0.35;
    var fill = "#000000";
    if (isIE) {
        dy = 1;
        fill = "#666666"
    }
    var y = this.calcY(pitch);
    var pathString = ABCJS.write.sprintf("M %f %f L %f %f L %f %f L %f %f z", x1, y - dy, x2, y - dy, x2, y + dy, x1, y + dy);
    var ret = this.paper.path().attr({
        path: pathString,
        stroke: "none",
        fill: fill
    }).toBack();
    if (this.scale !== 1) {
        ret.scale(this.scale, this.scale, 0, 0)
    }
    return ret
};
ABCJS.write.Printer.prototype.printStem = function (x, dx, y1, y2) {
    if (dx < 0) {
        var tmp = y2;
        y2 = y1;
        y1 = tmp
    }
    var isIE =
    /*@cc_on!@*/
    false;
    var fill = "#000000";
    if (isIE && dx < 1) {
        dx = 1;
        fill = "#666666"
    }
    if (~~x === x) {
        x += 0.05
    }
    var pathArray = [
        ["M", x, y1],
        ["L", x, y2],
        ["L", x + dx, y2],
        ["L", x + dx, y1],
        ["z"]
    ];
    if (!isIE && this.ingroup) {
        this.addPath(pathArray)
    } else {
        var ret = this.paper.path().attr({
            path: pathArray,
            stroke: "none",
            fill: fill
        }).toBack();
        if (this.scale !== 1) {
            ret.scale(this.scale, this.scale, 0, 0)
        }
        return ret
    }
};
ABCJS.write.Printer.prototype.printText = function (a, e, d, c) {
    c = c || "start";
    var b = this.paper.text(a, this.calcY(e), d).attr({
        "text-anchor": c,
        "font-size": 12
    });
    if (this.scale !== 1) {
        b.scale(this.scale, this.scale, 0, 0)
    }
    return b
};
ABCJS.write.Printer.prototype.printSymbol = function (j, d, c, g, f) {
    var b;
    if (!c) {
        return null
    }
    if (c.length > 0 && c.indexOf(".") < 0) {
        var h = this.paper.set();
        var k = 0;
        for (var e = 0; e < c.length; e++) {
            var a = this.glyphs.getYCorr(c.charAt(e));
            b = this.glyphs.printSymbol(j + k, this.calcY(d + a), c.charAt(e), this.paper);
            if (b) {
                h.push(b);
                k += this.glyphs.getSymbolWidth(c.charAt(e))
            } else {
                this.debugMsg(j, "no symbol:" + c)
            }
        }
        if (this.scale !== 1) {
            h.scale(this.scale, this.scale, 0, 0)
        }
        return h
    } else {
        var a = this.glyphs.getYCorr(c);
        if (this.ingroup) {
            this.addPath(this.glyphs.getPathForSymbol(j, this.calcY(d + a), c, g, f))
        } else {
            b = this.glyphs.printSymbol(j, this.calcY(d + a), c, this.paper);
            if (b) {
                if (this.scale !== 1) {
                    b.scale(this.scale, this.scale, 0, 0)
                }
                return b
            } else {
                this.debugMsg(j, "no symbol:" + c)
            }
        }
        return null
    }
};
ABCJS.write.Printer.prototype.printPath = function (b) {
    var a = this.paper.path().attr(b);
    if (this.scale !== 1) {
        a.scale(this.scale, this.scale, 0, 0)
    }
    return a
};
ABCJS.write.Printer.prototype.drawArc = function (n, m, q, p, o) {
    n = n + 6;
    m = m + 4;
    q = q + ((o) ? 1.5 : -1.5);
    p = p + ((o) ? 1.5 : -1.5);
    var c = this.calcY(q);
    var b = this.calcY(p);
    var h = m - n;
    var g = b - c;
    var f = Math.sqrt(h * h + g * g);
    var e = h / f;
    var d = g / f;
    var u = f / 3.5;
    var i = ((o) ? -1 : 1) * Math.min(25, Math.max(4, u));
    var l = n + u * e - i * d;
    var t = c + u * d + i * e;
    var j = m - u * e - i * d;
    var r = b - u * d + i * e;
    var a = 2;
    var k = ABCJS.write.sprintf("M %f %f C %f %f %f %f %f %f C %f %f %f %f %f %f z", n, c, l, t, j, r, m, b, j - a * d, r + a * e, l - a * d, t + a * e, n, c);
    var s = this.paper.path().attr({
        path: k,
        stroke: "none",
        fill: "#000000"
    });
    if (this.scale !== 1) {
        s.scale(this.scale, this.scale, 0, 0)
    }
    return s
};
ABCJS.write.Printer.prototype.debugMsg = function (a, b) {
    return this.paper.text(a, this.y, b).scale(this.scale, this.scale, 0, 0)
};
ABCJS.write.Printer.prototype.debugMsgLow = function (a, b) {
    return this.paper.text(a, this.calcY(this.layouter.minY - 7), b).attr({
        "font-family": "serif",
        "font-size": 12,
        "text-anchor": "begin"
    }).scale(this.scale, this.scale, 0, 0)
};
ABCJS.write.Printer.prototype.printLyrics = function (a, c) {
    var b = this.paper.text(a, this.calcY(this.layouter.minY - 7), c).attr({
        "font-family": "Times New Roman",
        "font-weight": "bold",
        "font-size": 14,
        "text-anchor": "begin"
    }).scale(this.scale, this.scale, 0, 0);
    b[0].setAttribute("class", "abc-lyric");
    return b
};
ABCJS.write.Printer.prototype.calcY = function (a) {
    return this.y + ((ABCJS.write.spacing.TOPNOTE - a) * ABCJS.write.spacing.STEP)
};
ABCJS.write.Printer.prototype.printStave = function (a, d, b) {
    if (b === 1) {
        this.printStaveLine(a, d, 6);
        return
    }
    for (var c = 0; c < b; c++) {
        this.printStaveLine(a, d, (c + 1) * 2)
    }
};
ABCJS.write.Printer.prototype.printABC = function (a) {
    if (a[0] === undefined) {
        a = [a]
    }
    this.y = 0;
    for (var b = 0; b < a.length; b++) {
        this.printTune(a[b])
    }
};
ABCJS.write.Printer.prototype.printTempo = function (s, j, p, g, e, i) {
    if (s.preString) {
        var n = j.text(i, g + 20, s.preString).attr({
            "text-anchor": "start"
        });
        i += (n.getBBox().width + 10)
    }
    if (s.duration) {
        var f = 0.75;
        var u = 14.5;
        var a = s.duration[0];
        var m = new ABCJS.write.AbsoluteElement(s, a, 1);
        var t = Math.floor(Math.log(a) / Math.log(2));
        var q = 0;
        for (var l = Math.pow(2, t), h = l / 2; l < a; q++, l += h, h /= 2) {}
        var w = p.chartable.note[-t];
        var v = p.chartable.uflags[-t];
        var o = p.printNoteHead(m, w, {
            verticalPos: u
        }, "up", 0, 0, v, q, 0, f);
        m.addHead(o);
        if (a < 1) {
            var d = u + 1 / 3 * f;
            var b = u + 7 * f;
            var k = o.dx + o.w;
            var r = -0.6;
            m.addExtra(new ABCJS.write.RelativeElement(null, k, 0, d, {
                type: "stem",
                pitch2: b,
                linewidth: r
            }))
        }
        m.x = i;
        m.draw(e, null);
        i += (m.w + 5);
        n = j.text(i, g + 20, "= " + s.bpm).attr({
            "text-anchor": "start"
        });
        i += n.getBBox().width + 10
    }
    if (s.postString) {
        j.text(i, g + 20, s.postString).attr({
            "text-anchor": "start"
        })
    }
    g += 15;
    return g
};
ABCJS.write.Printer.prototype.printTune = function (abctune) {
    this.layouter = new ABCJS.write.Layout(this.glyphs, abctune.formatting.bagpipes);
    this.layouter.printer = this;
    if (abctune.media === "print") {
        var m = abctune.formatting.topmargin === undefined ? 54 : abctune.formatting.topmargin;
        this.y += m
    } else {
        this.y += this.paddingtop
    }
    if (abctune.formatting.staffwidth) {
        this.width = abctune.formatting.staffwidth
    } else {
        this.width = this.staffwidth
    }
    this.width += this.paddingleft;
    if (abctune.formatting.scale) {
        this.scale = abctune.formatting.scale
    }
    this.paper.text(this.width / 2, this.y, abctune.metaText.title).attr({
        "font-size": 20,
        "font-family": "serif"
    });
    this.y += 20;
    if (abctune.lines[0] && abctune.lines[0].subtitle) {
        this.printSubtitleLine(abctune.lines[0]);
        this.y += 20
    }
    if (abctune.metaText.rhythm) {
        this.paper.text(this.paddingleft, this.y, abctune.metaText.rhythm).attr({
            "text-anchor": "start",
            "font-style": "italic",
            "font-family": "serif",
            "font-size": 12
        });
        !(abctune.metaText.author || abctune.metaText.origin || abctune.metaText.composer) && (this.y += 15)
    }
    if (abctune.metaText.author) {
        this.paper.text(this.width, this.y, abctune.metaText.author).attr({
            "text-anchor": "end",
            "font-style": "italic",
            "font-family": "serif",
            "font-size": 12
        });
        this.y += 15
    }
    if (abctune.metaText.origin) {
        this.paper.text(this.width, this.y, "(" + abctune.metaText.origin + ")").attr({
            "text-anchor": "end",
            "font-style": "italic",
            "font-family": "serif",
            "font-size": 12
        });
        this.y += 15
    }
    if (abctune.metaText.composer) {
        this.paper.text(this.width, this.y, abctune.metaText.composer).attr({
            "text-anchor": "end",
            "font-style": "italic",
            "font-family": "serif",
            "font-size": 12
        });
        this.y += 15
    }
    if (abctune.metaText.tempo && !abctune.metaText.tempo.suppress) {
        this.y = this.printTempo(abctune.metaText.tempo, this.paper, this.layouter, this.y, this, 50)
    }
    this.staffgroups = [];
    var maxwidth = this.width;
    for (var line = 0; line < abctune.lines.length; line++) {
        var abcline = abctune.lines[line];
        if (abcline.staff) {
            var staffgroup = this.layouter.printABCLine(abcline.staff);
            var newspace = this.space;
            for (var it = 0; it < 3; it++) {
                staffgroup.layout(newspace, this);
                if (line && line === abctune.lines.length - 1 && staffgroup.w / this.width < 0.66 && !abctune.formatting.stretchlast) {
                    break
                }
                var relspace = staffgroup.spacingunits * newspace;
                var constspace = staffgroup.w - relspace;
                if (staffgroup.spacingunits > 0) {
                    newspace = (this.width - constspace) / staffgroup.spacingunits;
                    if (newspace * staffgroup.minspace > 50) {
                        newspace = 50 / staffgroup.minspace
                    }
                }
            }
            staffgroup.draw(this, this.y);
            if (staffgroup.w > maxwidth) {
                maxwidth = staffgroup.w
            }
            this.staffgroups[this.staffgroups.length] = staffgroup;
            this.y = staffgroup.y + staffgroup.height;
            this.y += ABCJS.write.spacing.STAVEHEIGHT * 0.2
        } else {
            if (abcline.subtitle && line !== 0) {
                this.printSubtitleLine(abcline);
                this.y += 20
            } else {
                if (abcline.text) {
                    if (typeof abcline.text === "string") {
                        this.paper.text(100, this.y, "TEXT: " + abcline.text)
                    } else {
                        var str = "";
                        for (var i = 0; i < abcline.text.length; i++) {
                            str += " FONT " + abcline.text[i].text
                        }
                        this.paper.text(100, this.y, "TEXT: " + str)
                    }
                    this.y += 20
                }
            }
        }
    }
    var extraText = "";
    if (abctune.metaText.partOrder) {
        extraText += "Part Order: " + abctune.metaText.partOrder + "\n"
    }
    if (abctune.metaText.notes) {
        extraText += "Notes:\n" + abctune.metaText.notes + "\n"
    }
    if (abctune.metaText.book) {
        extraText += "Book: " + abctune.metaText.book + "\n"
    }
    if (abctune.metaText.source) {
        extraText += "Source: " + abctune.metaText.source + "\n"
    }
    if (abctune.metaText.transcription) {
        extraText += "Transcription: " + abctune.metaText.transcription + "\n"
    }
    if (abctune.metaText.discography) {
        extraText += "Discography: " + abctune.metaText.discography + "\n"
    }
    if (abctune.metaText.history) {
        extraText += "History: " + abctune.metaText.history + "\n"
    }
    if (abctune.metaText.unalignedWords) {
        extraText += "Words:\n";
        for (var j = 0; j < abctune.metaText.unalignedWords.length; j++) {
            if (typeof abctune.metaText.unalignedWords[j] === "string") {
                extraText += abctune.metaText.unalignedWords[j] + "\n"
            } else {
                for (var k = 0; k < abctune.metaText.unalignedWords[j].length; k++) {
                    extraText += " FONT " + abctune.metaText.unalignedWords[j][k].text
                }
                extraText += "\n"
            }
        }
    }
    var text2 = this.paper.text(this.paddingleft, this.y + 25, extraText).attr({
        "text-anchor": "start",
        "font-family": "serif",
        "font-size": 13
    });
    var height = text2.getBBox().height;
    text2.translate(0, height / 2);
    this.y += 25 + height;
    var sizetoset = {
        w: maxwidth * this.scale + this.paddingright,
        h: this.y * this.scale + this.paddingbottom
    };
    this.paper.setSize(sizetoset.w, sizetoset.h);
    var isIE =
    /*@cc_on!@*/
    false;
    if (isIE) {
        this.paper.canvas.parentNode.style.width = sizetoset.w + "px";
        this.paper.canvas.parentNode.style.height = "" + sizetoset.h + "px"
    } else {
        this.paper.canvas.parentNode.setAttribute("style", "width:" + sizetoset.w + "px")
    }
};
ABCJS.write.Printer.prototype.printSubtitleLine = function (a) {
    this.paper.text(this.width / 2, this.y, a.subtitle).attr({
        "font-size": 16
    }).scale(this.scale, this.scale, 0, 0)
};
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.write) {
    window.ABCJS.write = {}
}
ABCJS.write.sprintf = function () {
    var g = 0,
        e, h = arguments[g++],
        k = [],
        d, j, l, b;
    while (h) {
        if (d = /^[^\x25]+/.exec(h)) {
            k.push(d[0])
        } else {
            if (d = /^\x25{2}/.exec(h)) {
                k.push("%")
            } else {
                if (d = /^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(h)) {
                    if (((e = arguments[d[1] || g++]) == null) || (e == undefined)) {
                        throw ("Too few arguments.")
                    }
                    if (/[^s]/.test(d[7]) && (typeof (e) != "number")) {
                        throw ("Expecting number but found " + typeof (e))
                    }
                    switch (d[7]) {
                    case "b":
                        e = e.toString(2);
                        break;
                    case "c":
                        e = String.fromCharCode(e);
                        break;
                    case "d":
                        e = parseInt(e);
                        break;
                    case "e":
                        e = d[6] ? e.toExponential(d[6]) : e.toExponential();
                        break;
                    case "f":
                        e = d[6] ? parseFloat(e).toFixed(d[6]) : parseFloat(e);
                        break;
                    case "o":
                        e = e.toString(8);
                        break;
                    case "s":
                        e = ((e = String(e)) && d[6] ? e.substring(0, d[6]) : e);
                        break;
                    case "u":
                        e = Math.abs(e);
                        break;
                    case "x":
                        e = e.toString(16);
                        break;
                    case "X":
                        e = e.toString(16).toUpperCase();
                        break
                    }
                    e = (/[def]/.test(d[7]) && d[2] && e > 0 ? "+" + e : e);
                    l = d[3] ? d[3] == "0" ? "0" : d[3].charAt(1) : " ";
                    b = d[5] - String(e).length;
                    j = d[5] ? str_repeat(l, b) : "";
                    k.push(d[4] ? e + j : j + e)
                } else {
                    throw ("Huh ?!")
                }
            }
        }
        h = h.substring(d[0].length)
    }
    return k.join("")
};
if (!window.ABCJS) {
    window.ABCJS = {}
}
if (!window.ABCJS.edit) {
    window.ABCJS.edit = {}
}
window.ABCJS.edit.EditArea = function (a) {
    this.textarea = document.getElementById(a);
    this.initialText = this.textarea.value;
    this.isDragging = false
};
window.ABCJS.edit.EditArea.prototype.addSelectionListener = function (a) {
    this.textarea.onmousemove = function (b) {
        if (this.isDragging) {
            a.fireSelectionChanged()
        }
    }
};
window.ABCJS.edit.EditArea.prototype.addChangeListener = function (a) {
    this.changelistener = a;
    this.textarea.onkeyup = function () {
        a.fireChanged()
    };
    this.textarea.onmousedown = function () {
        this.isDragging = true;
        a.fireSelectionChanged()
    };
    this.textarea.onmouseup = function () {
        this.isDragging = false;
        a.fireChanged()
    };
    this.textarea.onchange = function () {
        a.fireChanged()
    }
};
window.ABCJS.edit.EditArea.prototype.getSelection = function () {
    return {
        start: this.textarea.selectionStart,
        end: this.textarea.selectionEnd
    }
};
window.ABCJS.edit.EditArea.prototype.setSelection = function (c, a) {
    if (this.textarea.setSelectionRange) {
        this.textarea.setSelectionRange(c, a)
    } else {
        if (this.textarea.createTextRange) {
            var b = this.textarea.createTextRange();
            b.collapse(true);
            b.moveEnd("character", a);
            b.moveStart("character", c);
            b.select()
        }
    }
    this.textarea.focus()
};
window.ABCJS.edit.EditArea.prototype.getString = function () {
    return this.textarea.value
};
window.ABCJS.edit.EditArea.prototype.setString = function (a) {
    this.textarea.value = a;
    this.initialText = this.getString();
    if (this.changelistener) {
        this.changelistener.fireChanged()
    }
};
window.ABCJS.edit.EditArea.prototype.getElem = function () {
    return this.textarea
};
window.ABCJS.Editor = function (a, b) {
    if (b.indicate_changed) {
        this.indicate_changed = true
    }
    if (typeof a === "string") {
        this.editarea = new window.ABCJS.edit.EditArea(a)
    } else {
        this.editarea = a
    }
    this.editarea.addSelectionListener(this);
    this.editarea.addChangeListener(this);
    if (b.canvas_id) {
        this.div = document.getElementById(b.canvas_id)
    } else {
        if (b.paper_id) {
            this.div = document.getElementById(b.paper_id)
        } else {
            this.div = document.createElement("DIV");
            this.editarea.getElem().parentNode.insertBefore(this.div, this.editarea.getElem())
        }
    }
    if (b.generate_midi || b.midi_id) {
        if (b.midi_id) {
            this.mididiv = document.getElementById(b.midi_id)
        } else {
            this.mididiv = this.div
        }
    }
    if (b.generate_warnings || b.warnings_id) {
        if (b.warnings_id) {
            this.warningsdiv = document.getElementById(b.warnings_id)
        } else {
            this.warningsdiv = this.div
        }
    }
    this.parserparams = b.parser_options || {};
    this.midiparams = b.midi_options || {};
    this.onchangeCallback = b.onchange;
    this.printerparams = b.render_options || {};
    if (b.gui) {
        this.target = document.getElementById(a);
        this.printerparams.editable = true
    }
    this.oldt = "";
    this.bReentry = false;
    this.parseABC();
    this.modelChanged();
    this.addClassName = function (d, e) {
        var c = function (f, g) {
            var h = f.className;
            return (h.length > 0 && (h === g || new RegExp("(^|\\s)" + g + "(\\s|$)").test(h)))
        };
        if (!c(d, e)) {
            d.className += (d.className ? " " : "") + e
        }
        return d
    };
    this.removeClassName = function (c, d) {
        c.className = window.ABCJS.parse.strip(c.className.replace(new RegExp("(^|\\s+)" + d + "(\\s+|$)"), " "));
        return c
    };
    this.setReadOnly = function (e) {
        var d = "abc_textarea_readonly";
        var c = this.editarea.getElem();
        if (e) {
            c.setAttribute("readonly", "yes");
            this.addClassName(c, d)
        } else {
            c.removeAttribute("readonly");
            this.removeClassName(c, d)
        }
    }
};
window.ABCJS.Editor.prototype.renderTune = function (a, g, h) {
    var e = new ABCJS.TuneBook(a);
    var d = window.ABCJS.parse.Parse();
    d.parse(e.tunes[0].abc, g);
    var c = d.getTune();
    var f = Raphael(h, 800, 400);
    var b = new ABCJS.write.Printer(f, {});
    b.printABC(c)
};
window.ABCJS.Editor.prototype.modelChanged = function () {
    if (this.tunes === undefined) {
        if (this.mididiv !== undefined && this.mididiv !== this.div) {
            this.mididiv.innerHTML = ""
        }
        this.div.innerHTML = "";
        return
    }
    if (this.bReentry) {
        return
    }
    this.bReentry = true;
    this.timerId = null;
    this.div.innerHTML = "";
    var c = Raphael(this.div, 800, 400);
    this.printer = new ABCJS.write.Printer(c, this.printerparams);
    this.printer.printABC(this.tunes);
    if (ABCJS.midi.MidiWriter && this.mididiv) {
        if (this.mididiv !== this.div) {
            this.mididiv.innerHTML = ""
        }
        var b = new ABCJS.midi.MidiWriter(this.mididiv, this.midiparams);
        b.addListener(this.printer);
        b.writeABC(this.tunes[0])
    }
    if (this.warningsdiv) {
        this.warningsdiv.innerHTML = (this.warnings) ? this.warnings.join("<br />") : "No errors"
    }
    if (this.target) {
        var a = new window.ABCJS.transform.TextPrinter(this.target, true);
        a.printABC(this.tunes[0])
    }
    this.printer.addSelectListener(this);
    this.updateSelection();
    this.bReentry = false
};
window.ABCJS.Editor.prototype.paramChanged = function (a) {
    this.printerparams = a;
    this.oldt = "";
    this.fireChanged()
};
window.ABCJS.Editor.prototype.parseABC = function () {
    var d = this.editarea.getString();
    if (d === this.oldt) {
        this.updateSelection();
        return false
    }
    this.oldt = d;
    if (d === "") {
        this.tunes = undefined;
        this.warnings = "";
        return true
    }
    var f = new ABCJS.TuneBook(d);
    this.tunes = [];
    this.warnings = [];
    for (var c = 0; c < f.tunes.length; c++) {
        var e = new window.ABCJS.parse.Parse();
        e.parse(f.tunes[c].abc, this.parserparams);
        this.tunes[c] = e.getTune();
        var b = e.getWarnings() || [];
        for (var a = 0; a < b.length; a++) {
            this.warnings.push(b[a])
        }
    }
    return true
};
window.ABCJS.Editor.prototype.updateSelection = function () {
    var a = this.editarea.getSelection();
    try {
        this.printer.rangeHighlight(a.start, a.end)
    } catch (b) {}
};
window.ABCJS.Editor.prototype.fireSelectionChanged = function () {
    this.updateSelection()
};
window.ABCJS.Editor.prototype.setDirtyStyle = function (d) {
    if (this.indicate_changed === undefined) {
        return
    }
    var c = function (g, h) {
        var f = function (i, j) {
            var k = i.className;
            return (k.length > 0 && (k === j || new RegExp("(^|\\s)" + j + "(\\s|$)").test(k)))
        };
        if (!f(g, h)) {
            g.className += (g.className ? " " : "") + h
        }
        return g
    };
    var a = function (f, g) {
        f.className = window.ABCJS.parse.strip(f.className.replace(new RegExp("(^|\\s+)" + g + "(\\s+|$)"), " "));
        return f
    };
    var e = "abc_textarea_dirty";
    var b = this.editarea.getElem();
    if (d) {
        c(b, e)
    } else {
        a(b, e)
    }
};
window.ABCJS.Editor.prototype.fireChanged = function () {
    if (this.bIsPaused) {
        return
    }
    if (this.parseABC()) {
        var a = this;
        if (this.timerId) {
            clearTimeout(this.timerId)
        }
        this.timerId = setTimeout(function () {
            a.modelChanged()
        }, 300);
        var b = this.isDirty();
        if (this.wasDirty !== b) {
            this.wasDirty = b;
            this.setDirtyStyle(b)
        }
        if (this.onchangeCallback) {
            this.onchangeCallback(this)
        }
    }
};
window.ABCJS.Editor.prototype.setNotDirty = function () {
    this.editarea.initialText = this.editarea.getString();
    this.wasDirty = false;
    this.setDirtyStyle(false)
};
window.ABCJS.Editor.prototype.isDirty = function () {
    if (this.indicate_changed === undefined) {
        return false
    }
    return this.editarea.initialText !== this.editarea.getString()
};
window.ABCJS.Editor.prototype.highlight = function (a) {
    this.editarea.setSelection(a.startChar, a.endChar)
};
window.ABCJS.Editor.prototype.pause = function (a) {
    this.bIsPaused = a;
    if (!a) {
        this.updateRendering()
    }
};
window.ABCJS.Editor.prototype.pauseMidi = function (a) {
    if (a && this.mididiv) {
        this.mididivSave = this.mididiv;
        this.addClassName(this.mididiv, "hidden");
        this.mididiv = null
    } else {
        if (!a && this.mididivSave) {
            this.mididiv = this.mididivSave;
            this.removeClassName(this.mididiv, "hidden");
            this.mididivSave = null
        }
    }
};