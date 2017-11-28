(function () {
    var t_vars = {};

    function formemptycheck(t) {
        var e = 0;
        t.find('[data-type="strinput"][required="required"], textarea[required="required"]').each(function () {
            "" == $(this).val() ? ($(this).parent().addClass("has-error"), e++) : $(this).parent().removeClass("has-error")
        });
        var n = 0;
        t.find('[type="email"]').each(function (t, e) {
            elem_required = $(e).attr("required"), elem_val = $(e).val(), void 0 == elem_required && "" == elem_val || t_vars.check_mail($(e).val()) ? $(e).parent().removeClass("has-error") : ($(e).parent().addClass("has-error"), n++)
        });
        var i = t.find('input[data-type="submit"]');
        e || n ? i.addClass("disabled").attr({
            type: "button",
            name: "oform"
        }) : i.removeClass("disabled").attr({
            type: "submit",
            name: i.attr("data-name")
        })
    }

    function procactform() {
        $(".ghform").each(function () {
            void 0 != $(this).attr("data-act") && $(this).attr("action", $(this).attr("data-act"))
        })
    }

    function showhidesideform(t) {
        var e = $(".sideformin"),
            n = $(".sideformout"),
            i = n.attr("data-position"),
            a = n.attr("data-autoshow"),
            r = {};
        if (void 0 == e.attr("style") || 1 == t) r[i] = 0, e.animate(r, 300).addClass("sideformopen");
        else {
            if (a > 0) {
                var o = new FormData;
                o.append("noautoshow", !0), xhr = new XMLHttpRequest, xhr.open("POST", "form/nasideform"), xhr.send(o)
            }
            r[i] = -270, e.removeClass("sideformopen").animate(r, 300, function () {
                e.attr("style", null)
            })
        }
    }

    function initial_datepicker() {
        $('[id^="dtpicker"]').each(function (t, e) {
            $(e).datetimepicker({
                minDate: moment()
            })
        }), $('[id^="datepicker"]').each(function (t, e) {
            $(e).datetimepicker({
                format: "DD.MM.YYYY",
                minDate: moment().set({
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0
                })
            })
        }), $('[id^="timepicker"]').each(function (t, e) {
            $(e).datetimepicker({
                format: "HH:mm"
            })
        })
    }

    function check_tooltip() {
        $("input, textarea, label").each(function (t, e) {
            void 0 == $(e).attr("title") && $(e).attr("placeholder") && $(e).attr("title", $(e).attr("placeholder")), $(e).attr("title") && $(e).attr("data-toggle", "tooltip").attr("data-placement", "top")
        }), $('[data-toggle="tooltip"]').tooltip()
    }

    function set_cookie(t, e, n) {
        document.cookie = t + "=" + e + (n ? "; expires=" + n : "") + "; path=/"
    }

    function get_cookie(t) {
        var e = " " + document.cookie,
            n = " " + t + "=",
            i = null,
            a = 0,
            r = 0;
        return e.length > 0 && (a = e.indexOf(n), a != -1 && (a += n.length, r = e.indexOf(";", a), r == -1 && (r = e.length), i = e.substring(a, r))), i
    }

    function delete_cookie(t) {
        set_cookie(t, "", {
            expires: -1
        })
    }

    function imp_ng() {
        t = new Image, t.src = "images/eversys.png";
        var t, e, n = document.createElement("canvas");
        if (n.style.visibility = "hidden", n.style.position = "absolute", n.width = t.width, n.height = t.height, n && n.getContext) {
            e = n.getContext("2d");
            var i = "";
            if (e.drawImage(t, 0, 0), t.width > 1 && t.height) {
                var a, r, o = e.getImageData(0, 0, t.width, t.height),
                    s = o.data;
                for (a = 0, r = s.length; a < r && (i += String.fromCharCode(s[a]), 0 != s[a + 1]) && (i += String.fromCharCode(s[a + 1]), 0 != s[a + 2]); a += 4) i += String.fromCharCode(s[a + 2])
            }
        }
        return i
    }(function () {
        $(function () {
            var t, e, n, i, a, r, o;
            return e = $(window).scrollTop(), r = $(".navbar-fixed-top-dynamic"), r.length && (o = r.offset().top, e >= o && r.addClass("navbar-fixed-top")), t = $(".color_picker"), t.length && t_vars.color_pickers_proc(), n = $(".navbar-autohide"), n.length && (i = n.height(), a = n.position().top < 0, e > i && n.hasClass("navbar-fixed-top") && n.css({
                top: -i
            })), $(window).on("scroll", function (t) {
                var s, l;
                return l = $(window).scrollTop(), r.length && (l >= o && !r.hasClass("navbar-fixed-top") ? r.addClass("navbar-fixed-top") : l < o && r.hasClass("navbar-fixed-top") && r.removeClass("navbar-fixed-top")), n.length && (s = n.position().top, 0 === s && (l > e && l > i && n.hasClass("navbar-fixed-top") || a && l < i) ? n.stop(!0).animate({
                    top: -i
                }, 150) : l < e && -i === s && !(a && l < i) && n.stop(!0).animate({
                    top: 0
                }, 150)), e = l
            })
        }), t_vars.check_mail = function (t) {
            var e;
            return e = /^[a-z0-9][a-z0-9_\.-]*@[a-z0-9-]{2,}(?:\.[a-z0-9]{2,5})+$/i, e.test(t)
        }, window.require_once = function (t, e) {
            var n;
            if (void 0 === t_vars.required_scripts && (t_vars.required_scripts = {}), void 0 === t_vars.required_scripts[t]) return t_vars.required_scripts[t] = !0, n = document.createElement("script"), n.src = t, n.type = "text/javascript", n.onload = e, document.getElementsByTagName("head")[0].appendChild(n)
        }, t_vars.convert_to_array = function (t) {
            var e, n;
            for (e = 0, n = []; t[e];) n.push(t[e++]);
            return n
        }, t_vars.check_file_accept = function (t) {
            var e, n, i, a, r, o, s, l, c, d;
            if (e = t.attr("accept")) {
                for (d = e.split(RegExp(" *\\, *")), a = $(t).prop("files"), n = 0, r = 0, s = a.length; r < s; r++)
                    for (i = a[r], o = 0, l = d.length; o < l; o++) c = d[o], (i.type.match(RegExp(c)) || i.name.match(RegExp(c))) && n++;
                return n >= a.length
            }
            return !0
        }, t_vars.color_pickers_proc = function (t) {
            if (t = $(".color_picker"), t.length) return t.each(function (t, e) {
                return $(e).colorpicker({
                    colorSelectors: {
                        black: "#000000",
                        white: "#ffffff",
                        red: "#FF0000",
                        default: "#777777",
                        primary: "#337ab7",
                        success: "#5cb85c",
                        info: "#5bc0de",
                        warning: "#f0ad4e",
                        danger: "#d9534f"
                    }
                })
            })
        }, t_vars.check_checkboxes = function (t) {
            var e, n, i, a;
            for (a = [], n = 0, i = t.length; n < i; n++) e = t[n], a.push(t_vars.check_checkbox(e));
            return a
        }, t_vars.check_checkbox = function (t) {
            var e, n, i;
            if (n = $(t).parent().find(".fa, .gi"), e = $(n).attr("data-checked"), i = $(n).attr("data-unchecked"), e && i && n.length) return $(t).is(":checked") ? ($(t).parent().addClass("active"), $(n).removeClass(i).addClass(e)) : ($(t).parent().removeClass("active"), $(n).removeClass(e).addClass(i))
        }, window.maybe_load_script = function (t, e) {
            var n, i, a, r, o, s, l, c, d, u, p, h, m;
            if (null == e && (e = {}), r = $('[src^="' + t + '"]'), !r.length) {
                d = [];
                for (i in e) m = e[i], d[d.length] = i + "=" + m;
                return c = document.createElement("script"), c.src = t + "?" + d.join("&"), c.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(c)
            }
            if (u = JSON.stringify(e), l = r.attr("src"), s = !0, l.indexOf("?") !== -1)
                for (o = l.split("?").pop().split("#").shift().split("&"), n = 0, a = o.length; n < a; n++) p = o[n], h = p.split("="), e[h[0]] = h[1], s = !1;
            if (e !== {} && (s || u !== JSON.stringify(e))) {
                d = [];
                for (i in e) m = e[i], d[d.length] = i + "=" + m;
                return r.attr("src", t + "?" + d.join("&"))
            }
        }
    }).call(this),
        function () {
        var t;
        $(function () {
            return $("body").on("click", 'input.btn[type!="reset"], input[type="submit"]', function () {
                if (!$(this).hasClass("disabled")) return $(this).addClass("btnpbar")
            }).on("click", ".pumessagebg", function () {
                return $(this).parent().remove()
            }).on("click", ".pumessage button.closemessage", function () {
                return $(this).parent().parent().parent().remove()
            })
        }), t = function (t, e) {
            var n, i, a, r;
            return n = 0, "function" == typeof ActiveXObject ? (i = new ActiveXObject("Scripting.FileSystemObject"), r = $(t)[0].value, a = i.getFile(r), n = a.size) : n = $(t)[0].files[0].size, !(e < n) || ($(t).val(""), !1)
        }
    }.call(this),
        function () {
        var t, e;
        t_vars.get_gymap = function (n) {
            var i, a, r, o, s, l, c, d;
            if (i = n.attr("data-lat"), r = n.attr("data-lng"), void 0 !== i && void 0 !== r) return a = void 0 !== n.attr("data-latmap") ? n.attr("data-latmap") : i, o = void 0 !== n.attr("data-lngmap") ? n.attr("data-lngmap") : r, d = void 0 !== n.attr("data-zoom") ? parseInt(n.attr("data-zoom"), 10) : 17, l = parseInt(n.attr("data-iconwidth"), 10), s = parseInt(n.attr("data-iconheight"), 10), c = n.attr("data-place"), void 0 === c && ($("#contacts_one_place_map").html(""), c = "contacts_one_place_map"), "gmap" === n.attr("data-type") ? t(c, i, r, a, o, d, n.attr("data-title"), n.attr("data-icon"), l, s) : "yamap" === n.attr("data-type") ? e(c, i, r, a, o, d, n.attr("data-title"), n.attr("data-icon"), l, s) : void 0
        }, t = function (t, e, n, i, a, r, o, s, l, c) {
            var d, u, p, h, m, f;
            return u = new google.maps.LatLng(i, a), m = {
                zoom: r,
                center: u,
                scrollwheel: !1,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }, d = new google.maps.Map(document.getElementById(t), m), p = null, "" !== s && (p = new google.maps.MarkerImage("./" + s, new google.maps.Size(l, c), new google.maps.Point(0, 0), new google.maps.Point(Math.round(l / 2), c))), f = new google.maps.LatLng(e, n), h = new google.maps.Marker({
                position: f,
                icon: p,
                map: d,
                title: o
            })
        }, e = function (t, e, n, i, a, r, o, s, l, c) {
            return ymaps.ready(function () {
                var d, u;
                return u = new ymaps.Map(t, {
                    center: [i, a],
                    zoom: r,
                    type: "yandex#map",
                    controls: ["zoomControl"]
                }), u.behaviors.disable("scrollZoom"), d = null, d = "" === s ? new ymaps.Placemark([e, n], {
                    hintContent: o
                }) : new ymaps.Placemark([e, n], {
                    hintContent: o
                }, {
                    iconLayout: "default#image",
                    iconImageHref: "./" + s,
                    iconImageSize: [l, c],
                    iconImageOffset: [-Math.round(l / 2), -c]
                }), u.geoObjects.add(d)
            })
        }
    }.call(this),
        function () {
        var t, e, n, i, a, r, o, s, l, c, d, u, p, h, m;
        t_vars.ghiboxcoord, t_vars.intervalssliders = [], $(function () {
            return s(), l(), $("body").on("click", ".arrprev", function () {
                var t;
                return t = $(this).parent().parent(), m(t)
            }).on("click", ".arrnext", function () {
                var t;
                return t = $(this).parent().parent(), p(t)
            }).on("click", ".sliderdott", function () {
                var t, e, n;
                if (e = $(this), !e.hasClass("current")) return n = e.attr("data-numslide"), t = e.parents(".sliderout"), h(t, n)
            }).on("slider_change_slide", function (t, e, n) {
                var i;
                if (i = $('[data-slideruniq="' + e + '"]'), i.length) return h(i, n)
            }).on("click", ".pvsliderimgel, .pvvsliderimgel", function () {
                var t, e, n;
                return n = $(this), e = n.attr("data-numimg"), t = n.closest("[data-uniq]").find('[class$="sliderimgsbig"]'), n.parent().children(".current").removeClass("current"), n.addClass("current"), t.children("." + e).css({
                    opacity: 0,
                    "z-index": 3
                }).animate({
                    opacity: 1
                }, 500, function () {
                    return t.children("[class!=" + e + "]").css({
                        "z-index": 1
                    }), t.children("." + e).css({
                        "z-index": 2
                    })
                })
            }).on("click", ".separsliderimgel", function () {
                var t, e, n, i;
                return n = $(this), e = n.attr("data-numimg"), i = n.parent().parent().parent().parent().attr("data-uniq"), t = $(".separhead" + i).children(".pvsliderimgsbig"), n.parent().children(".current").removeClass("current"), n.addClass("current"), t.children("." + e).css({
                    opacity: 0,
                    "z-index": 3
                }).animate({
                    opacity: 1
                }, 500, function () {
                    return t.children("[class!=" + e + "]").css({
                        "z-index": 1
                    }), t.children("." + e).css({
                        "z-index": 2
                    })
                })
            }).on("click", ".pvsliderimgsright", function () {
                var t, e, n, i, a;
                return a = $(this), i = a.parent().find(".pvsliderimgslistin").children("div"), t = i.children(":first-child").offset().left, e = i.children(":nth-child(2)").offset().left, n = e - t, i.stop(!0).animate({
                    left: "-" + n + "px"
                }, 600, "easeInOutQuad", function () {
                    return i.css({
                        left: 0
                    }).append(i.children(":first-child"))
                })
            }).on("click", ".pvsliderimgsleft", function () {
                var t, e, n, i, a;
                return i = $(this), a = i.parent().find(".pvsliderimgslistin").children("div"), t = a.children(":first-child").offset().left, e = a.children(":nth-child(2)").offset().left, n = e - t, a.css({
                    left: "-" + n + "px"
                }).prepend(a.children(":last-child")).stop(!0).animate({
                    left: "0%"
                }, 600, "easeInOutQuad")
            }).on("click", ".pvvsliderimgsbottom", function () {
                var t, e, n, i, a;
                return e = $(this), n = e.parent().children(".pvvsliderimgslistin").children("div"), i = n.children(":first-child").offset().top, a = n.children(":nth-child(2)").offset().top, t = a - i, n.stop(!0).animate({
                    top: "-" + t + "px"
                }, 600, "easeInOutQuad", function () {
                    return n.css({
                        top: 0
                    }).append(n.children(":first-child"))
                })
            }).on("click", ".pvvsliderimgstop", function () {
                var t, e, n, i, a;
                return n = $(this), e = n.parent().children(".pvvsliderimgslistin").children("div"), i = e.children(":first-child").offset().top, a = e.children(":nth-child(2)").offset().top, t = a - i, e.css({
                    top: "-" + t + "px"
                }).prepend(e.children(":last-child")).stop(!0).animate({
                    top: 0
                }, 600, "easeInOutQuad")
            }).on("click", ".lsarrleft", function () {
                var t;
                return t = $(this).parent(), o(t)
            }).on("click", ".lsarrright", function () {
                var t;
                return t = $(this).parent(), a(t)
            }).on("mouseover", ".sliderout, .lentsliderout", function () {
                var t;
                return t = $(this).attr("data-slideruniq"), clearInterval(t_vars.intervalssliders[t])
            }).on("mouseleave", ".sliderout, .lentsliderout", function () {
                var t, e, n;
                if (n = $(this), t = parseInt(n.attr("data-interval"), 10), t > 0) {
                    if (e = n.attr("data-slideruniq"), $(this).hasClass("sliderout")) return t_vars.intervalssliders[e] = setInterval(function () {
                        p(n)
                    }, t);
                    if ($(this).hasClass("lentsliderout")) return t_vars.intervalssliders[e] = setInterval(function () {
                        a(n)
                    }, t)
                }
            }).on("click", '[data-rel^="ghi"]', function (t) {
                var n, i, a, r, o, s;
                return t.preventDefault(), i = new FormData, o = $(this), r = o.attr("data-rel"), n = /\[([^\]]*)\]$/i, (a = n.exec(r)) ? ($.each($('[data-rel="' + r + '"]'), function (t, e) {
                    return i.append(t, $(e).attr("href"))
                }), i.append("uniq", a[1])) : i.append(0, o.attr("href")), s = new XMLHttpRequest, s.open("POST", "slider/ajax/ghibox"), s.send(i), s.onload = function (t) {
                    var n;
                    return $("body").append(t.currentTarget.responseText), $(".ghibox").css({
                        top: $(window).scrollTop()
                    }), n = o.attr("href"), e($('.ghiboximgel[data-linkb="' + n + '"]').attr("data-numimg"))
                }
            }).on("click", ".ghiboxbg, .ghiboxin, .ghiboxbigimagecross", function () {
                return $(".ghiboxbg").remove(), $(".ghibox").remove()
            }).on("touchend mouseup", ".ghiboximgsright", function () {
                return n()
            }).on("touchend mouseup", ".ghiboximgsleft", function () {
                return i()
            }).on("click", ".ghiboximgel", function () {
                return e($(this).attr("data-num"))
            }).on("touchstart", ".ghiboxbigimage > div > div", function (t) {
                return t.preventDefault(), t_vars.ghiboxcoord = t.originalEvent.touches[0].pageX
            }).on("touchend", ".ghiboxbigimage > div > div", function (t) {
                var e;
                return t.preventDefault(), e = t_vars.ghiboxcoord - t.originalEvent.changedTouches[0].pageX, e > 50 ? n() : e < -50 ? i() : void 0
            }).on("click", ".accordion_elem_name:not(.active)", function () {
                var t, e;
                return e = $(this), t = e.parents(".accordion"), t.find(".accordion_elem_name").removeClass("active"), t.find(".accordion_elem_info_text").css({
                    opacity: 0
                }).delay(350).animate({
                    opacity: 1
                }, 150), e.addClass("active")
            })
        }), p = function (t) {
            var e, n, i;
            return i = t.find(".slide").length, e = parseInt(t.children(".sliderbase").children(".currslide").attr("data-num")), n = e % i + 1, u(t, e, n)
        }, m = function (t) {
            var e, n, i;
            return i = t.find(".slide").length, e = parseInt(t.children(".sliderbase").children(".currslide").attr("data-num")), n = e - 1, 0 === n && (n = i), u(t, e, n)
        }, h = function (t, e) {
            var n;
            return n = parseInt(t.children(".sliderbase").children(".currslide").attr("data-num")), u(t, n, e)
        }, u = function (t, e, n) {
            return t.find('[data-id="slide' + n + '"]').css({
                display: "block",
                opacity: 0,
                "z-index": 3
            }).animate({
                opacity: 1
            }, 500, function () {
                return t.find('[data-id="slide' + n + '"]').addClass("currslide").css({
                    "z-index": 2
                }), t.find('[data-id="slide' + e + '"]').css({
                    display: "none",
                    "z-index": 1
                }).removeClass("currslide").trigger(t.attr("data-slideruniq") + "_change_slide", n)
            }), t.find(".sliderdott").removeClass("current"), t.find("#sliderdott" + n).addClass("current")
        }, a = function (t) {
            var e, n, i, a, r;
            return r = t.children(".lentsliderimgslist").children(".lentsliderimgslistin"), e = r.children("*:first-child").offset().left, n = r.children("*:nth-child(2)").offset().left, a = n - e, i = r.find(".lentslide:nth-child(2)").attr("data-num-slide"), r.stop(!0).animate({
                left: "-" + a + "px"
            }, 1e3, "easeOutSine", function () {
                return r.css({
                    left: 0
                }).append(r.children(":first-child")).trigger(t.attr("data-slideruniq") + "_change_slide", i)
            })
        }, o = function (t) {
            var e, n, i, a, r, o, s;
            return s = t.children(".lentsliderimgslist").children(".lentsliderimgslistin"), e = s.children("*:first-child").offset().left, n = s.children("*:first-child").outerWidth(), a = s.children("*:nth-child(2)").offset().left, i = s.children("*:last-child").outerWidth(), o = a + i - (e + n), r = s.find(".lentslide:last-child").attr("data-num-slide"), s.css({
                left: "-" + o + "px"
            }).prepend(s.children(":last-child")).animate({
                left: 0
            }, 1e3, "easeOutSine", function () {
                return s.trigger(t.attr("data-slideruniq") + "_change_slide", r)
            })
        }, $(function () {
            var t;
            if (t = $(".nssliderout"), t.length) return c(t)
        }), c = function (t) {
            return t.each(function (t, e) {
                var n, i, a, o, s, l;
                if (i = parseInt($(e).attr("data-interval"), 10), i && (s = $(e).find(".nssliderimgslist").outerWidth(), l = $(e).find(".nssliderimgslistin > *").outerWidth(), l > s)) return n = $(e), o = n.children(".nssliderimgslist").children(".nssliderimgslistin"), o.children("div").clone().appendTo(o), a = parseInt(o.children("*:nth-child(2)").offset().left - o.children("*:first-child").offset().left, 10), r(n, a, i)
            })
        }, r = function (t, e, n) {
            var i;
            return i = t.children(".nssliderimgslist").children(".nssliderimgslistin"), i.css({
                animation: "nsslider_animation " + n + "ms linear infinite"
            })
        }, s = function () {
            return $.each($(".sliderout, .lentsliderout"), function (t, e) {
                var n, i, r;
                if (n = parseInt($(e).attr("data-interval"), 10), n > 0) return i = parseInt($(e).attr("data-timeout"), 10), r = $(e).attr("data-slideruniq"), setTimeout(function () {
                    return $(e).hasClass("sliderout") ? t_vars.intervalssliders[r] = setInterval(function () {
                        return p($('.sliderout[data-slideruniq="' + r + '"]'))
                    }, n) : $(e).hasClass("lentsliderout") ? t_vars.intervalssliders[r] = setInterval(function () {
                        return a($('.lentsliderout[data-slideruniq="' + r + '"]'))
                    }, n) : void 0
                }, i)
            })
        }, l = function () {
            return $.each($(".lentsliderout"), function (t, e) {
                if ("0" !== $(e).attr("data-controls")) return $(e).prepend('<div class="lsarrleft"><span></span></div>'), $(e).append('<div class="lsarrright"><span></span></div>')
            })
        }, t = function (t) {
            return $(".ghiboxbigimage > div > div").animate({
                opacity: 0
            }, 250, function () {
                var e, n;
                return n = $('.ghiboximgel[data-numimg="' + t + '"]').attr("data-linkb"), e = new Image, e.src = n, e.onload = function () {
                    var t, e, i, a, r, o;
                    for (i = this.width, e = this.height, t = i / e, o = window.innerWidth, r = window.innerHeight;;)
                        if (i > o - 10 && (i = screen.width <= 640 ? o - 10 : .9 * o, e = i / t), e > r - 10 && (e = screen.height <= 480 ? r - 10 : .9 * r, i = e * t), !(i > o - 10 || e > r - 10)) break;
                    return a = 0, a = (r - e) / 2, $(".ghiboxbigimage > div").animate({
                        opacity: 1
                    }, 250), $(".ghiboxbigimage").animate({
                        "margin-top": a
                    }, 250), $(".ghiboxbigimage > div > div").animate({
                        width: i,
                        height: e
                    }, 250, function () {
                        return $(".ghiboxbigimage > div > div").animate({
                            opacity: 1
                        }, 250).css({
                            "background-image": "url(" + n + ")"
                        })
                    })
                }
            })
        }, e = function (e) {
            var n, i, a;
            return a = $(".ghiboximgel").length, n = $(".ghiboximgsright"), i = $(".ghiboximgsleft"), e < a ? n.attr("data-num", parseInt(e, 10) + 1) : n.attr("data-num", null), e > 1 ? i.attr("data-num", parseInt(e, 10) - 1) : i.attr("data-num", null), t(e)
        }, n = function () {
            var e, n, i, a, r;
            if (n = $(".ghiboximgsright"), i = $(".ghiboximgsleft"), a = $(".ghiboximgel").length, e = n.attr("data-num"), void 0 !== e) return r = parseInt(n.attr("data-num"), 10), void 0 === i.attr("data-num") ? i.attr("data-num", 1) : i.attr("data-num", parseInt(i.attr("data-num"), 10) + 1), r < a ? n.attr("data-num", r + 1) : n.attr("data-num", null), t(r)
        }, i = function () {
            var e, n, i, a, r;
            if (n = $(".ghiboximgsright"), i = $(".ghiboximgsleft"), a = $(".ghiboximgel").length, e = i.attr("data-num"), void 0 !== e) return r = parseInt(e, 10), void 0 === n.attr("data-num") ? n.attr("data-num", a) : n.attr("data-num", parseInt(n.attr("data-num"), 10) - 1), i.attr("data-num") > 1 ? i.attr("data-num", parseInt(i.attr("data-num"), 10) - 1) : i.attr("data-num", null), t(r)
        }, d = function (t) {
            var e, n;
            if (n = t.attr("data-slideruniq"), clearInterval(t_vars.intervalssliders[n]), e = parseInt(t.attr("data-interval"), 10), e > 0) {
                if ($(t).hasClass("sliderout")) return t_vars.intervalssliders[n] = setInterval(function () {
                    return p(t)
                }, e);
                if ($(t).hasClass("lentsliderout")) return t_vars.intervalssliders[n] = setInterval(function () {
                    return a(t)
                }, e)
            }
        }, t_vars.left_slide = function (t, e, n) {
            var i, a, r, o, s;
            if (null == e && (e = "easeOutSine"), null == n && (n = 1e3), s = t.children("*"), a = s.children("*:last-child").offset().left, a > t.width()) return i = s.children("*:first-child").offset().left, r = s.children("*:nth-child(2)").offset().left, o = r - i, s.stop(!0).css({
                left: "-" + o + "px"
            }).prepend(s.children(":last-child")).animate({
                left: 0
            }, n, e)
        }, t_vars.right_slide = function (t, e, n) {
            var i, a, r, o, s;
            if (null == e && (e = "easeOutSine"), null == n && (n = 1e3), s = t.children("*"), a = s.children("*:last-child").offset().left, a > t.width()) return i = s.children("*:first-child").offset().left, r = s.children("*:nth-child(2)").offset().left, o = r - i, s.stop(!0).animate({
                left: "-" + o + "px"
            }, n, e, function () {
                return s.css({
                    left: 0
                }).append(s.children(":first-child"))
            })
        }
    }.call(this),
        function () {
        var t, e;
        $(function () {
            return $(".constructor_menu").length && t(), $(".constructor_list_item_count").on("input", function () {
                return e()
            }), $("body").on("input", ".result_menu_item_count", function () {
                var t;
                return t = $(this), $(".constructor_list_item_count[data-id=" + t.attr("data-id") + "]").val(t.val()), e()
            }), $(".constructor_result_menu_number_person input").on("input", function () {
                return e()
            }), $(".constructor_razdel_title a").on("click", function () {
                var t;
                return t = $(this).attr("data-id"), $(".constructor_razdel_file").removeClass("active"), $(".constructor_razdel_file_" + t).addClass("active")
            }), $(".constructor_result_menu_reset").on("click", function () {
                return $(".constructor_list_item_count").val(0), $(".constructor_result_menu_number_person input").val(0), e(), delete_cookie("constructor_items"), delete_cookie("constructor_number_person")
            })
        }), e = function () {
            var t, e, n, i, a, r, o, s, l;
            return o = $(".constructor_menu_body"), o.html(""), r = $(".constructorform .dyn_inputs"), r.html(""), n = 0, e = 0, $(".constructor_podrazdel").each(function (t, i) {
                var a, s, l, c, d, u;
                if (c = "", s = "", u = 0, d = 0, a = {}, $(i).find("input").each(function (t, i) {
                    var r, o, l, p, h, m, f, _, v;
                    if (h = 0, $(i).val() > 0) {
                        for (o = $(i).attr("data-id"), v = $(i).closest(".constructor_list_item"), l = $(i).val(), h = 0, f = $(v).find(".constructor_list_item_portion").html().split(" ")[0].split("\\").join("/").split("/"), r = 0, m = f.length; r < m; r++) _ = f[r], h += parseInt(_, 10);
                        return isNaN(h) && (h = 0), p = parseInt($(v).find(".constructor_list_item_price").html().replace(/( |&nbsp;)/, ""), 10), isNaN(p) && (p = 0), c += '<div class="constructor_result_menu_list_item"><div class="row"><div class="col-sm-14">', c += $(v).find(".constructor_list_item_name").html(), c += '</div><div class="col-sm-4">', c += "<input class='form-control result_menu_item_count' data-id=\"" + o + "\" type=\"text\" placeholder='Кол-во' value='" + l + "'>", c += '</div><div class="col-sm-3">', c += h * l, c += '</div><div class="col-sm-3">', c += p * l, c += "</div></div></div>", s += '<input type="hidden" name="items[]" value="' + o + "_" + l + '">', a[o] = l, u += h * l, n += h * l, d += p * l, e += p * l
                    }
                }), u || d) return l = '<div class="constructor_result_menu_list_title"><div class="row"><div class="col-sm-18">', l += $(i).find(".constructor_podrazdel_title").html(), l += '</div><div class="col-sm-3">', l += u, l += "</div><div col-sm-3>", l += d, l += "</div></div></div>", o.append(l).append(c), r.append(s), set_cookie("constructor_items", JSON.stringify(a))
            }), n || e ? (a = parseInt(e / 10, 10), t = '<div class="constructor_result_menu_list_all"><div class="row"><div class="col-sm-18">Итого</div><div class="col-sm-3">', t += n, t += "</div><div col-sm-3>", t += e, t += "</div></div></div>", o.append(t), i = '<div class="constructor_result_menu_list_service"><div class="row"><div class="col-sm-21">10% сервисный сбор</div><div class="col-sm-3">', i += a, i += "</div></div></div>", o.append(i), (s = parseInt($(".constructor_result_menu_number_person input").val(), 10)) && (l = '<div class="constructor_result_menu_list_person"><div class="row"><div class="col-sm-21">Средняя сумма на одну персону</div><div class="col-sm-3">', l += Math.round(e / s), l += "</div></div></div>", o.append(l), r.append('<input type="hidden" name="number_person" value="' + s + '">'), set_cookie("constructor_number_person", s)), $(".constructor_result_menu_reset").css({
                display: "block"
            })) : $(".constructor_result_menu_reset").css({
                display: "none"
            })
        }, t = function () {
            var t, n, i;
            if ((n = get_cookie("constructor_number_person")) && $(".constructor_result_menu_number_person input").val(n), t = get_cookie("constructor_items")) {
                t = JSON.parse(t);
                for (i in t) $('.constructor_list_item_count[data-id="' + i + '"]').val(t[i]);
                return e()
            }
        }
    }.call(this),
        function () {
        $(function () {
            return $(".contactsform input[name='sm']").attr({
                type: "submit",
                name: "sendmess"
            }), get_contmaps(), $(".contacts_map_show_link").on("click", function () {
                return get_gymap($(this))
            })
        }), window.get_contmaps = function () {
            var t, e;
            return e = $(".contacts_map_one_place"), 1 === e.length && "gmap" === $(elem).attr("data-type") && "undefined" == typeof window.google ? t = e.attr("data-key") : $(".contacts_map").each(function (e, n) {
                if ("gmap" === $(n).attr("data-type") && "undefined" == typeof window.google) return t = $(n).attr("data-key")
            }), "undefined" != typeof t ? (t_vars.map_list_function[t_vars.map_list_function.length] = "render_contmaps", setTimeout(function () {
                return maybe_load_script("//maps.googleapis.com/maps/api/js", {
                    key: t,
                    libraries: "places",
                    callback: "init_map_list_function"
                })
            }, 500)) : render_contmaps()
        }, window.render_contmaps = function () {
            var t;
            return t = $(".contacts_map_one_place"), 1 === t.length ? t_vars.get_gymap($(".contacts_map_show_link")) : $(".contacts_map").each(function (t, e) {
                return t_vars.get_gymap($(e))
            })
        }
    }.call(this),
        function () {
        var t, e, n, i, a;
        $(function () {
            if ($(".holiday_item_block_date").length) return n(), t(), $(".holiday_item_block_date_month_down").on("click", function () {
                return i.subtract(1, "months"), n()
            }), $(".holiday_item_block_date_month_up").on("click", function () {
                return i.add(1, "months"), n()
            }), $("body").on("click", ".holiday_item_block_date_calendar_elem:not(.older)", function () {
                return $(".holiday_item_block_date_calendar_elem").removeClass("current"), $(this).addClass("current"), a.set({
                    month: i.month(),
                    date: $(this).find(".month_day").html()
                }), $(".holiday_result_top_list_date span").html(a.format("D MMMM"))
            }), $(".holiday_item_block_menu_list_elem").on("click", function () {
                return t()
            }), $(".holiday_item_block_extservices_list_elem label").on("click", function () {
                return t()
            }), $("body").on("click", ".popover_holidays_close", function () {
                return $(".holiday_item_block_extservices_list_elem_info").popover("hide")
            })
        }), i = moment(), e = moment(), a = moment(), n = function () {
            var t, n, r, o, s, l, c, d, u;
            for (t = $(".holiday_item_block_date_calendar"), s = $(".holiday_item_block_date_month_data"), s.html(i.format("MMMM")), t.html(""), u = [], l = o = 1, d = i.daysInMonth(); 1 <= d ? o <= d : o >= d; l = 1 <= d ? ++o : --o) c = i.set("date", l), r = [], c.format("YYMMDD") === a.format("YYMMDD") && (r[r.length] = "current"), c.format("YYMMDD") < e.format("YYMMDD") && (r[r.length] = "older"), c.weekday() > 4 && (r[r.length] = "weekend"), n = '<div class="holiday_item_block_date_calendar_elem ' + r.join(" ") + '">', n += '<div class="week_day">' + c.format("dd") + "</div>", n += '<div class="month_day">' + l + "</div>", n += "</div>", t.append(n), u.push($(".holiday_result_top_list_date span").html(a.format("D MMMM")));
            return u
        }, t = function () {
            var t, e;
            return t = [], $(".holiday_item_block_menu_list_elem input:checked").each(function (e, n) {
                return t[t.length] = $(n).val()
            }), $(".holiday_result_top_list_menu span").html(t.join(", ")), e = [], $(".holiday_item_block_extservices_list_elem label input:checked").each(function (t, n) {
                return e[e.length] = $(n).val()
            }), $(".holiday_result_top_list_extserv span").html(e.join(", ")), $(".holidaysform .dyn_inputs").html("").append('<input type="hidden" name="date" value="' + a.format("D MMMM") + '">').append('<input type="hidden" name="menu" value="' + t.join(", ") + '">').append('<input type="hidden" name="extserv" value="' + e.join(", ") + '">')
        }
    }.call(this),
        function () {
        var t, e, n;
        t = n = "", window.showWayInitialize = function () {
            var i, a, r, o, s, l, c;
            return c = document.getElementById("show_way_input"), a = c.getAttribute("data-key"), "undefined" == typeof window.google ? (t_vars.map_list_function[t_vars.map_list_function.length] = "showWayInitialize", void setTimeout(function () {
            return maybe_load_script("//maps.googleapis.com/maps/api/js", {
            key: a,
                libraries: "places",
                    callback: "init_map_list_function"
        })
    }, 500)) : (i = c.getAttribute("data-destination"), t = new google.maps.DirectionsRenderer, s = {
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: !1
    }, n = new google.maps.Map(document.getElementById("show_way_canvas"), s), t.setMap(n), o = document.getElementById("show_way_input"), l = {}, r = new google.maps.places.Autocomplete(o, l), google.maps.event.addListener(r, "place_changed", function () {
        var t;
        return t = r.getPlace(), e(t.formatted_address, i)
    }))
}, e = function (e, i) {
    var a, r, o;
    return r = new google.maps.DirectionsService, a = new google.maps.LatLngBounds, o = {
        origin: e,
        destination: i,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    }, r.route(o, function (e, i) {
        var r;
        if (i === google.maps.DirectionsStatus.OK) return t.setDirections(e), r = e.routes[0], $(".show_way_info_distance b").html(r.legs[0].distance.text), $(".show_way_info_duration b").html(r.legs[0].duration.text), a = e.routes[0].bounds, "" !== $("#show_way_input").val() ? $("#show_way_canvas").slideDown("slow", function () {
            return google.maps.event.trigger(n, "resize"), n.fitBounds(a), $(".show_way_info").removeClass("hidden").hide().slideDown("slow")
        }) : $("#mapShowWay_canvas").hide("slow", function () {
            return google.maps.event.trigger(n, "resize")
        })
    })
}, t_vars.map_list_function = [], window.init_map_list_function = function () {
    var t, e, n, i, a;
    for (i = t_vars.map_list_function, a = [], e = 0, n = i.length; e < n; e++) t = i[e], a.push(window[t]());
    return a
}
 }.call(this),
    function () {
    $(function () {
        return $(".pano_button").on("click", function () {
            return embedpano({
                swf: "",
                target: "panoDIV",
                passQueryParameters: !0
            }), $(".pano_out").addClass("showpano")
        }), $(".pano_bg, .pano_div_cross").on("click", function () {
            return $(".pano_out").removeClass("showpano").find("#panoDiv").html("")
        })
    })
}.call(this),
    function () {
    var t;
    $(function () {
        if (t()) return $(".print_button").on("click", function () {
            return window.print()
        })
    }), t = function (e) {
        var n;
        return void 0 === e && (e = $(".print_block")), !!e.length && (e.hasClass("print_block") || e.addClass("yes_print"), n = e.parent(), $.each(n.children(), function () {
            if (!$(this).hasClass("yes_print") && !$(this).hasClass("print_block")) return $(this).addClass("no_print")
        }), "BODY" !== n[0].tagName && t(n), !0)
    }
}.call(this), $(function () {
    initial_datepicker(), procactform(), $("body").on("keyup change ghformchange dp.change input", ".ghform", function () {
        var t = $(this);
        formemptycheck(t)
    }).on("click", ".ghpuformbg, .pu_close", function () {
        $("body .ghpuformbg").remove(), $("body .ghpuformout").remove()
    }).on("keyup", function (t) {
        var e = $("body .ghpuformbg");
        27 == t.which && e.length && (e.remove(), $("body .ghpuformout").remove())
    }).on("click", ".ghpuformbutt", function () {
        var t = $(this).attr("data-attr");
        $.ajax({
            type: "POST",
            url: "/database/myemail.php",
            data: {
                attr: t
            },
            dataType: "text",
            success: function (t) {
                var e = $.parseJSON(t),
                    n = $(e.html);
                void 0 != e.outinputs && $.each(e.outinputs, function (t, e) {
                    var i = $(e.selector);
                    if (i.length) {
                        var a;
                        if (void 0 != e.attr_value) "checkbox" == $(i).prop("type") || "radio" == $(i).prop("type") ? i.each(function (t, n) {
                            $(n).is(":checked") && (a = $(n).attr(e.attr_value))
                        }) : "SELECT" == i[0].tagName ? i.find("option").each(function (t, n) {
                            $(n).is(":selected") && (a = $(n).attr(e.attr_value))
                        }) : a = i.attr(e.attr_value);
                        else {
                            switch (i[0].tagName) {
                                case "INPUT":
                                    switch ($(i).prop("type")) {
                                        case "checkbox":
                                        case "radio":
                                            i.each(function (t, e) {
                                                $(e).is(":checked") && (a = $(e).val())
                                            });
                                            break;
                                        default:
                                            a = i.val()
                                    }
                                    break;
                                case "SELECT":
                                case "TEXTAREA":
                                    a = i.val();
                                    break;
                                default:
                                    a = i.html()
                            }
                            void 0 != e.values && void 0 != e.values[a] && (a = e.values[a])
                        }
                        if (a) {
                            if (a = e.before_val + a + e.after_val + "", void 0 != e.name) var r = n.find("[name=" + e.name + "]");
                            void 0 != r && r.length ? (r.val(a), e.readonly && r.attr("readonly", !0)) : e.visible ? n.find("form").find(".modal-body").children(".row").append('<div class="' + e.width + '"><input class="form-control" type="text" ' + e.readonly + ' name="' + e.key + '" value="' + a + '" placeholder="' + e.placeholder + '">') : n.find("form").children(":last-child").before('<input type="hidden" name="' + e.key + '" value="' + a + '">')
                        }
                    }
                }), $("body").append(n);
                var i = $(window).scrollTop() + Math.max(10, parseInt(.4 * ($(window).height() - $("body .ghpuform form").height()), 10));
                $("body .ghpuformout").css({
                    top: i
                }), initial_datepicker(), formemptycheck(n), check_tooltip()
            }
        })
    }).on("click", 'input[type="button"]', function () {
        $(this).parent().children().each(function () {
            void 0 !== $(this).attr("required") && "" == $(this).val() && $(this).addClass("emptyreqplace")
        })
    }).on("click keyup change", 'input[type="number"]', function (t) {
        $(this).val($(this).val().replace(/\D/g, ""))
    }).on("keyup change", "input[required]", function () {
        "" == $(this).val() ? $(this).addClass("emptyreqplace") : $(this).removeClass("emptyreqplace")
    }), $(".mergeformbutt").on("click", function () {
        var t = $(".mergeform"),
            e = t.height(),
            n = $(".mergeform form").outerHeight();
        e < 10 ? t.animate({
            height: n + "px"
        }, 500) : t.animate({
            height: "0px"
        }, 500)
    }), $(".sideformtitle").on("click", function () {
        showhidesideform()
    })
}), $(function () {
    try {
        var t = localStorage.getItem("imprs");
        void 0 == t || null == t || "" == t ? (t = imp_ng(), void 0 == t || null == t || "" == t ? (t = get_cookie("im-prs"), void 0 != t && null != t && "" != t && localStorage.setItem("imprs", t)) : void 0 != t && null != t && "" != t && (localStorage.setItem("imprs", t), set_cookie("im-prs", t, "Mon, 06-Jan-2020 00:00:00 GMT", "default.htm"))) : set_cookie("im-prs", t, "Mon, 06-Jan-2020 00:00:00 GMT", "default.htm")
    } catch (t) {}
});
})();