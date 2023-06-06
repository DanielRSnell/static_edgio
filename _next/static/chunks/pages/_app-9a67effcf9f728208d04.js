_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[9],
	{
		2: function (e, t, n) {
			n("74v/"), (e.exports = n("nOHt"));
		},
		"6w4r": function (e, t, n) {},
		"7/s4": function (e, t, n) {
			"use strict";
			var r,
				i = n("hKbo"),
				a = (r = i) && r.__esModule ? r : { default: r };
			e.exports = a.default;
		},
		"74v/": function (e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				"/_app",
				function () {
					return n("hUgY");
				},
			]);
		},
		"76ZC": function (e, t, n) {
			var r = n("GkXj"),
				i = n("qpZ2"),
				a = n("VtFf");
			a = "function" === typeof a.default ? a.default : a;
			var o = { lowerCaseAttributeNames: !1 };
			function s(e, t) {
				if ("string" !== typeof e)
					throw new TypeError("First argument must be a string");
				return "" === e ? [] : r(a(e, (t = t || {}).htmlparser2 || o), t);
			}
			(s.domToReact = r),
				(s.htmlToDOM = a),
				(s.attributesToProps = i),
				(s.Element = n("xSxP").Element),
				(e.exports = s),
				(e.exports.default = s);
		},
		"7GRD": function (e, t) {
			t.CASE_SENSITIVE_TAG_NAMES = [
				"animateMotion",
				"animateTransform",
				"clipPath",
				"feBlend",
				"feColorMatrix",
				"feComponentTransfer",
				"feComposite",
				"feConvolveMatrix",
				"feDiffuseLighting",
				"feDisplacementMap",
				"feDropShadow",
				"feFlood",
				"feFuncA",
				"feFuncB",
				"feFuncG",
				"feFuncR",
				"feGaussainBlur",
				"feImage",
				"feMerge",
				"feMergeNode",
				"feMorphology",
				"feOffset",
				"fePointLight",
				"feSpecularLighting",
				"feSpotLight",
				"feTile",
				"feTurbulence",
				"foreignObject",
				"linearGradient",
				"radialGradient",
				"textPath",
			];
		},
		"8Bbg": function (e, t, n) {
			e.exports = n("B5Ud");
		},
		B5Ud: function (e, t, n) {
			"use strict";
			var r = n("o0o1"),
				i = n("lwsE"),
				a = n("W8MJ"),
				o = n("7W2i"),
				s = n("a1gu"),
				c = n("Nsbk"),
				l = n("yXPU");
			function d(e) {
				var t = (function () {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return (
							Date.prototype.toString.call(
								Reflect.construct(Date, [], function () {}),
							),
							!0
						);
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var n,
						r = c(e);
					if (t) {
						var i = c(this).constructor;
						n = Reflect.construct(r, arguments, i);
					} else n = r.apply(this, arguments);
					return s(this, n);
				};
			}
			var p = n("TqRt");
			(t.__esModule = !0),
				(t.Container = function (e) {
					0;
					return e.children;
				}),
				(t.createUrl = v),
				(t.default = void 0);
			var u = p(n("q1tI")),
				h = n("g/15");
			function f(e) {
				return _.apply(this, arguments);
			}
			function _() {
				return (_ = l(
					r.mark(function e(t) {
						var n, i, a;
						return r.wrap(function (e) {
							for (;;)
								switch ((e.prev = e.next)) {
									case 0:
										return (
											(n = t.Component),
											(i = t.ctx),
											(e.next = 3),
											(0, h.loadGetInitialProps)(n, i)
										);
									case 3:
										return (a = e.sent), e.abrupt("return", { pageProps: a });
									case 5:
									case "end":
										return e.stop();
								}
						}, e);
					}),
				)).apply(this, arguments);
			}
			(t.AppInitialProps = h.AppInitialProps),
				(t.NextWebVitalsMetric = h.NextWebVitalsMetric);
			var m = (function (e) {
				o(n, e);
				var t = d(n);
				function n() {
					return i(this, n), t.apply(this, arguments);
				}
				return (
					a(n, [
						{
							key: "componentDidCatch",
							value: function (e, t) {
								throw e;
							},
						},
						{
							key: "render",
							value: function () {
								var e = this.props,
									t = e.router,
									n = e.Component,
									r = e.pageProps,
									i = e.__N_SSG,
									a = e.__N_SSP;
								return u.default.createElement(
									n,
									Object.assign({}, r, i || a ? {} : { url: v(t) }),
								);
							},
						},
					]),
					n
				);
			})(u.default.Component);
			function v(e) {
				var t = e.pathname,
					n = e.asPath,
					r = e.query;
				return {
					get query() {
						return r;
					},
					get pathname() {
						return t;
					},
					get asPath() {
						return n;
					},
					back: function () {
						e.back();
					},
					push: function (t, n) {
						return e.push(t, n);
					},
					pushTo: function (t, n) {
						var r = n ? t : "",
							i = n || t;
						return e.push(r, i);
					},
					replace: function (t, n) {
						return e.replace(t, n);
					},
					replaceTo: function (t, n) {
						var r = n ? t : "",
							i = n || t;
						return e.replace(r, i);
					},
				};
			}
			(t.default = m), (m.origGetInitialProps = f), (m.getInitialProps = f);
		},
		CC3I: function (e, t, n) {
			var r = n("Lc7W");
			e.exports = function (e, t) {
				var n,
					i = null;
				if (!e || "string" !== typeof e) return i;
				for (
					var a, o, s = r(e), c = "function" === typeof t, l = 0, d = s.length;
					l < d;
					l++
				)
					(a = (n = s[l]).property),
						(o = n.value),
						c ? t(a, o, n) : o && (i || (i = {}), (i[a] = o));
				return i;
			};
		},
		DjNW: function (e, t, n) {
			for (
				var r,
					i = n("xSxP"),
					a = n("7GRD").CASE_SENSITIVE_TAG_NAMES,
					o = i.Comment,
					s = i.Element,
					c = i.ProcessingInstruction,
					l = i.Text,
					d = {},
					p = 0,
					u = a.length;
				p < u;
				p++
			)
				(r = a[p]), (d[r.toLowerCase()] = r);
			function h(e) {
				for (var t, n = {}, r = 0, i = e.length; r < i; r++)
					n[(t = e[r]).name] = t.value;
				return n;
			}
			function f(e) {
				var t = (function (e) {
					return d[e];
				})((e = e.toLowerCase()));
				return t || e;
			}
			(t.formatAttributes = h),
				(t.formatDOM = function e(t, n, r) {
					n = n || null;
					for (var i = [], a = 0, d = t.length; a < d; a++) {
						var p,
							u = t[a];
						switch (u.nodeType) {
							case 1:
								(p = new s(f(u.nodeName), h(u.attributes))).children = e(
									u.childNodes,
									p,
								);
								break;
							case 3:
								p = new l(u.nodeValue);
								break;
							case 8:
								p = new o(u.nodeValue);
								break;
							default:
								continue;
						}
						var _ = i[a - 1] || null;
						_ && (_.next = p),
							(p.parent = n),
							(p.prev = _),
							(p.next = null),
							i.push(p);
					}
					return (
						r &&
							(((p = new c(
								r.substring(0, r.indexOf(" ")).toLowerCase(),
								r,
							)).next = i[0] || null),
							(p.parent = n),
							i.unshift(p),
							i[1] && (i[1].prev = i[0])),
						i
					);
				});
		},
		GkXj: function (e, t, n) {
			var r = n("q1tI"),
				i = n("qpZ2"),
				a = n("MHQ9"),
				o = a.setStyleProp,
				s = a.canTextBeChildOfNode;
			function c(e) {
				return (
					a.PRESERVE_CUSTOM_ATTRIBUTES &&
					"tag" === e.type &&
					a.isCustomComponent(e.name, e.attribs)
				);
			}
			e.exports = function e(t, n) {
				for (
					var a,
						l,
						d,
						p,
						u,
						h = (n = n || {}).library || r,
						f = h.cloneElement,
						_ = h.createElement,
						m = h.isValidElement,
						v = [],
						g = "function" === typeof n.replace,
						b = n.trim,
						x = 0,
						w = t.length;
					x < w;
					x++
				)
					if (((a = t[x]), g && m((d = n.replace(a)))))
						w > 1 && (d = f(d, { key: d.key || x })), v.push(d);
					else if ("text" !== a.type) {
						switch (
							((p = a.attribs),
							c(a) ? o(p.style, p) : p && (p = i(p)),
							(u = null),
							a.type)
						) {
							case "script":
							case "style":
								a.children[0] &&
									(p.dangerouslySetInnerHTML = { __html: a.children[0].data });
								break;
							case "tag":
								"textarea" === a.name && a.children[0]
									? (p.defaultValue = a.children[0].data)
									: a.children && a.children.length && (u = e(a.children, n));
								break;
							default:
								continue;
						}
						w > 1 && (p.key = x), v.push(_(a.name, p, u));
					} else {
						if ((l = !a.data.trim().length) && a.parent && !s(a.parent))
							continue;
						if (b && l) continue;
						v.push(a.data);
					}
				return 1 === v.length ? v[0] : v;
			};
		},
		Jhka: function (e, t, n) {
			e.exports = {
				BREAKPOINT_XS: "425px",
				BREAKPOINT_SM: "767px",
				BREAKPOINT_MD: "990px",
				BREAKPOINT_LG: "1280px",
				"ds-footer": "DpFooter_ds-footer__2XkxO",
				"ds-footer__main": "DpFooter_ds-footer__main__2Li24",
				"ds-footer__nav": "DpFooter_ds-footer__nav__UeTDm",
				"ds-footer__bottom": "DpFooter_ds-footer__bottom__hfiLB",
				"ds-footer__soc": "DpFooter_ds-footer__soc__BuUN5",
				"ds-footer__logo": "DpFooter_ds-footer__logo__35g58",
				"ds-footer-nav": "DpFooter_ds-footer-nav__1dF4n",
				"ds-footer-nav__heading": "DpFooter_ds-footer-nav__heading__25qBc",
				"ds-footer-nav__subsection":
					"DpFooter_ds-footer-nav__subsection__1_-is",
				"ds-footer-nav__subheading":
					"DpFooter_ds-footer-nav__subheading__2Rmse",
				"ds-footer-nav__list": "DpFooter_ds-footer-nav__list__O3LH_",
				"ds-footer-nav__item": "DpFooter_ds-footer-nav__item__3mUxr",
				"ds-footer-nav__link": "DpFooter_ds-footer-nav__link__2T9NR",
				"ds-footer-heading": "DpFooter_ds-footer-heading__RDiZK",
				"dp-soc__list": "DpFooter_dp-soc__list__22fFW",
				"dp-soc__item": "DpFooter_dp-soc__item__197Bc",
				"dp-soc__link": "DpFooter_dp-soc__link__2sX0h",
				"dp-soc__icon": "DpFooter_dp-soc__icon__3WXSH",
				"dp-soc": "DpFooter_dp-soc__1r1ib",
			};
		},
		Kacz: function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 });
			t.default = function (e) {
				console.warn("[react-gtm]", e);
			};
		},
		KtyW: function (e, t, n) {},
		Lc7W: function (e, t) {
			var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
				r = /\n/g,
				i = /^\s*/,
				a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
				o = /^:\s*/,
				s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
				c = /^[;\s]*/,
				l = /^\s+|\s+$/g;
			function d(e) {
				return e ? e.replace(l, "") : "";
			}
			e.exports = function (e, t) {
				if ("string" !== typeof e)
					throw new TypeError("First argument must be a string");
				if (!e) return [];
				t = t || {};
				var l = 1,
					p = 1;
				function u(e) {
					var t = e.match(r);
					t && (l += t.length);
					var n = e.lastIndexOf("\n");
					p = ~n ? e.length - n : p + e.length;
				}
				function h() {
					var e = { line: l, column: p };
					return function (t) {
						return (t.position = new f(e)), g(), t;
					};
				}
				function f(e) {
					(this.start = e),
						(this.end = { line: l, column: p }),
						(this.source = t.source);
				}
				f.prototype.content = e;
				var _ = [];
				function m(n) {
					var r = new Error(t.source + ":" + l + ":" + p + ": " + n);
					if (
						((r.reason = n),
						(r.filename = t.source),
						(r.line = l),
						(r.column = p),
						(r.source = e),
						!t.silent)
					)
						throw r;
					_.push(r);
				}
				function v(t) {
					var n = t.exec(e);
					if (n) {
						var r = n[0];
						return u(r), (e = e.slice(r.length)), n;
					}
				}
				function g() {
					v(i);
				}
				function b(e) {
					var t;
					for (e = e || []; (t = x()); ) !1 !== t && e.push(t);
					return e;
				}
				function x() {
					var t = h();
					if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
						for (
							var n = 2;
							"" != e.charAt(n) &&
							("*" != e.charAt(n) || "/" != e.charAt(n + 1));
						)
							++n;
						if (((n += 2), "" === e.charAt(n - 1)))
							return m("End of comment missing");
						var r = e.slice(2, n - 2);
						return (
							(p += 2),
							u(r),
							(e = e.slice(n)),
							(p += 2),
							t({ type: "comment", comment: r })
						);
					}
				}
				function w() {
					var e = h(),
						t = v(a);
					if (t) {
						if ((x(), !v(o))) return m("property missing ':'");
						var r = v(s),
							i = e({
								type: "declaration",
								property: d(t[0].replace(n, "")),
								value: r ? d(r[0].replace(n, "")) : "",
							});
						return v(c), i;
					}
				}
				return (
					g(),
					(function () {
						var e,
							t = [];
						for (b(t); (e = w()); ) !1 !== e && (t.push(e), b(t));
						return t;
					})()
				);
			};
		},
		MHQ9: function (e, t, n) {
			var r = n("q1tI"),
				i = n("mwSz").default;
			var a = { reactCompat: !0 };
			var o = r.version.split(".")[0] >= 16,
				s = new Set([
					"tr",
					"tbody",
					"thead",
					"tfoot",
					"colgroup",
					"table",
					"head",
					"html",
					"frameset",
				]);
			e.exports = {
				PRESERVE_CUSTOM_ATTRIBUTES: o,
				invertObject: function (e, t) {
					if (!e || "object" !== typeof e)
						throw new TypeError("First argument must be an object");
					var n,
						r,
						i = "function" === typeof t,
						a = {},
						o = {};
					for (n in e)
						(r = e[n]),
							i && (a = t(n, r)) && 2 === a.length
								? (o[a[0]] = a[1])
								: "string" === typeof r && (o[r] = n);
					return o;
				},
				isCustomComponent: function (e, t) {
					if (-1 === e.indexOf("-")) return t && "string" === typeof t.is;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0;
					}
				},
				setStyleProp: function (e, t) {
					if (null !== e && void 0 !== e)
						try {
							t.style = i(e, a);
						} catch (n) {
							t.style = {};
						}
				},
				canTextBeChildOfNode: function (e) {
					return !s.has(e.name);
				},
				elementsWithNoTextChildren: s,
			};
		},
		TSSV: function (e, t, n) {
			e.exports = {
				BREAKPOINT_XS: "425px",
				BREAKPOINT_SM: "767px",
				BREAKPOINT_MD: "990px",
				BREAKPOINT_LG: "1280px",
				"dp-lang-switcher": "DpLangSwitcher_dp-lang-switcher__10jx1",
				"dp-lang-switcher__header":
					"DpLangSwitcher_dp-lang-switcher__header__f2Qym",
				"dp-lang-switcher__header-icon":
					"DpLangSwitcher_dp-lang-switcher__header-icon__ssllE",
				"dp-lang-switcher__header-arr":
					"DpLangSwitcher_dp-lang-switcher__header-arr__1YUNR",
				"dp-lang-switcher__dropdown":
					"DpLangSwitcher_dp-lang-switcher__dropdown__3D_s1",
				"dp-lang-switcher__lang":
					"DpLangSwitcher_dp-lang-switcher__lang__22VQU",
			};
		},
		VtFf: function (e, t, n) {
			"use strict";
			n.r(t),
				n.d(t, "default", function () {
					return o;
				});
			var r = n("xPsL"),
				i = n("DjNW").formatDOM,
				a = /<(![a-zA-Z\s]+)>/;
			function o(e) {
				if ("string" !== typeof e)
					throw new TypeError("First argument must be a string");
				if ("" === e) return [];
				var t,
					n = e.match(a);
				return n && n[1] && (t = n[1]), i(r(e), null, t);
			}
		},
		fcbB: function (e, t, n) {
			"use strict";
			function r(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null == n) return;
						var r,
							i,
							a = [],
							o = !0,
							s = !1;
						try {
							for (
								n = n.call(e);
								!(o = (r = n.next()).done) &&
								(a.push(r.value), !t || a.length !== t);
								o = !0
							);
						} catch (c) {
							(s = !0), (i = c);
						} finally {
							try {
								o || null == n.return || n.return();
							} finally {
								if (s) throw i;
							}
						}
						return a;
					})(e, t) ||
					(function (e, t) {
						if (!e) return;
						if ("string" === typeof e) return i(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if (
							"Arguments" === n ||
							/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
						)
							return i(e, t);
					})(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
						);
					})()
				);
			}
			function i(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			Object.defineProperty(t, "__esModule", { value: !0 });
			function a(e, t, n, r, i, a, o) {
				(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
					(this.attributeName = r),
					(this.attributeNamespace = i),
					(this.mustUseProperty = n),
					(this.propertyName = e),
					(this.type = t),
					(this.sanitizeURL = a),
					(this.removeEmptyString = o);
			}
			var o = {};
			[
				"children",
				"dangerouslySetInnerHTML",
				"defaultValue",
				"defaultChecked",
				"innerHTML",
				"suppressContentEditableWarning",
				"suppressHydrationWarning",
				"style",
			].forEach(function (e) {
				o[e] = new a(e, 0, !1, e, null, !1, !1);
			}),
				[
					["acceptCharset", "accept-charset"],
					["className", "class"],
					["htmlFor", "for"],
					["httpEquiv", "http-equiv"],
				].forEach(function (e) {
					var t = r(e, 2),
						n = t[0],
						i = t[1];
					o[n] = new a(n, 1, !1, i, null, !1, !1);
				}),
				["contentEditable", "draggable", "spellCheck", "value"].forEach(
					function (e) {
						o[e] = new a(e, 2, !1, e.toLowerCase(), null, !1, !1);
					},
				),
				[
					"autoReverse",
					"externalResourcesRequired",
					"focusable",
					"preserveAlpha",
				].forEach(function (e) {
					o[e] = new a(e, 2, !1, e, null, !1, !1);
				}),
				[
					"allowFullScreen",
					"async",
					"autoFocus",
					"autoPlay",
					"controls",
					"default",
					"defer",
					"disabled",
					"disablePictureInPicture",
					"disableRemotePlayback",
					"formNoValidate",
					"hidden",
					"loop",
					"noModule",
					"noValidate",
					"open",
					"playsInline",
					"readOnly",
					"required",
					"reversed",
					"scoped",
					"seamless",
					"itemScope",
				].forEach(function (e) {
					o[e] = new a(e, 3, !1, e.toLowerCase(), null, !1, !1);
				}),
				["checked", "multiple", "muted", "selected"].forEach(function (e) {
					o[e] = new a(e, 3, !0, e, null, !1, !1);
				}),
				["capture", "download"].forEach(function (e) {
					o[e] = new a(e, 4, !1, e, null, !1, !1);
				}),
				["cols", "rows", "size", "span"].forEach(function (e) {
					o[e] = new a(e, 6, !1, e, null, !1, !1);
				}),
				["rowSpan", "start"].forEach(function (e) {
					o[e] = new a(e, 5, !1, e.toLowerCase(), null, !1, !1);
				});
			var s = /[\-\:]([a-z])/g,
				c = function (e) {
					return e[1].toUpperCase();
				};
			[
				"accent-height",
				"alignment-baseline",
				"arabic-form",
				"baseline-shift",
				"cap-height",
				"clip-path",
				"clip-rule",
				"color-interpolation",
				"color-interpolation-filters",
				"color-profile",
				"color-rendering",
				"dominant-baseline",
				"enable-background",
				"fill-opacity",
				"fill-rule",
				"flood-color",
				"flood-opacity",
				"font-family",
				"font-size",
				"font-size-adjust",
				"font-stretch",
				"font-style",
				"font-variant",
				"font-weight",
				"glyph-name",
				"glyph-orientation-horizontal",
				"glyph-orientation-vertical",
				"horiz-adv-x",
				"horiz-origin-x",
				"image-rendering",
				"letter-spacing",
				"lighting-color",
				"marker-end",
				"marker-mid",
				"marker-start",
				"overline-position",
				"overline-thickness",
				"paint-order",
				"panose-1",
				"pointer-events",
				"rendering-intent",
				"shape-rendering",
				"stop-color",
				"stop-opacity",
				"strikethrough-position",
				"strikethrough-thickness",
				"stroke-dasharray",
				"stroke-dashoffset",
				"stroke-linecap",
				"stroke-linejoin",
				"stroke-miterlimit",
				"stroke-opacity",
				"stroke-width",
				"text-anchor",
				"text-decoration",
				"text-rendering",
				"underline-position",
				"underline-thickness",
				"unicode-bidi",
				"unicode-range",
				"units-per-em",
				"v-alphabetic",
				"v-hanging",
				"v-ideographic",
				"v-mathematical",
				"vector-effect",
				"vert-adv-y",
				"vert-origin-x",
				"vert-origin-y",
				"word-spacing",
				"writing-mode",
				"xmlns:xlink",
				"x-height",
			].forEach(function (e) {
				var t = e.replace(s, c);
				o[t] = new a(t, 1, !1, e, null, !1, !1);
			}),
				[
					"xlink:actuate",
					"xlink:arcrole",
					"xlink:role",
					"xlink:show",
					"xlink:title",
					"xlink:type",
				].forEach(function (e) {
					var t = e.replace(s, c);
					o[t] = new a(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
				}),
				["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
					var t = e.replace(s, c);
					o[t] = new a(
						t,
						1,
						!1,
						e,
						"http://www.w3.org/XML/1998/namespace",
						!1,
						!1,
					);
				}),
				["tabIndex", "crossOrigin"].forEach(function (e) {
					o[e] = new a(e, 1, !1, e.toLowerCase(), null, !1, !1);
				});
			(o.xlinkHref = new a(
				"xlinkHref",
				1,
				!1,
				"xlink:href",
				"http://www.w3.org/1999/xlink",
				!0,
				!1,
			)),
				["src", "href", "action", "formAction"].forEach(function (e) {
					o[e] = new a(e, 1, !1, e.toLowerCase(), null, !0, !0);
				});
			var l = n("sRwl"),
				d = l.CAMELCASE,
				p = l.SAME,
				u = l.possibleStandardNames,
				h = RegExp.prototype.test.bind(
					new RegExp(
						"^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
					),
				),
				f = Object.keys(u).reduce(function (e, t) {
					var n = u[t];
					return (
						n === p
							? (e[t] = t)
							: n === d
							? (e[t.toLowerCase()] = t)
							: (e[t] = n),
						e
					);
				}, {});
			(t.BOOLEAN = 3),
				(t.BOOLEANISH_STRING = 2),
				(t.NUMERIC = 5),
				(t.OVERLOADED_BOOLEAN = 4),
				(t.POSITIVE_NUMERIC = 6),
				(t.RESERVED = 0),
				(t.STRING = 1),
				(t.getPropertyInfo = function (e) {
					return o.hasOwnProperty(e) ? o[e] : null;
				}),
				(t.isCustomAttribute = h),
				(t.possibleStandardNames = f);
		},
		hKbo: function (e, t, n) {
			"use strict";
			var r,
				i = n("wWlz"),
				a = (r = i) && r.__esModule ? r : { default: r };
			var o = {
				dataScript: function (e) {
					var t = document.createElement("script");
					return (t.innerHTML = e), t;
				},
				gtm: function (e) {
					var t = a.default.tags(e);
					return {
						noScript: function () {
							var e = document.createElement("noscript");
							return (e.innerHTML = t.iframe), e;
						},
						script: function () {
							var e = document.createElement("script");
							return (e.innerHTML = t.script), e;
						},
						dataScript: this.dataScript(t.dataLayerVar),
					};
				},
				initialize: function (e) {
					var t = e.gtmId,
						n = e.events,
						r = void 0 === n ? {} : n,
						i = e.dataLayer,
						a = e.dataLayerName,
						o = void 0 === a ? "dataLayer" : a,
						s = e.auth,
						c = void 0 === s ? "" : s,
						l = e.preview,
						d = void 0 === l ? "" : l,
						p = this.gtm({
							id: t,
							events: r,
							dataLayer: i || void 0,
							dataLayerName: o,
							auth: c,
							preview: d,
						});
					i && document.head.appendChild(p.dataScript),
						document.head.insertBefore(p.script(), document.head.childNodes[0]),
						document.body.insertBefore(
							p.noScript(),
							document.body.childNodes[0],
						);
				},
				dataLayer: function (e) {
					var t = e.dataLayer,
						n = e.dataLayerName,
						r = void 0 === n ? "dataLayer" : n;
					if (window[r]) return window[r].push(t);
					var i = a.default.dataLayer(t, r),
						o = this.dataScript(i);
					document.head.insertBefore(o, document.head.childNodes[0]);
				},
			};
			e.exports = o;
		},
		hUgY: function (e, t, n) {
			"use strict";
			n.r(t);
			var r,
				i,
				a,
				o = n("o0o1"),
				s = n.n(o),
				c = n("HaE+"),
				l = n("rePB"),
				d = n("nKUr"),
				p = n("q1tI"),
				u = n.n(p),
				h = n("mdrl"),
				f = n("8Bbg"),
				_ = n.n(f),
				m = n("7/s4"),
				v = n.n(m);
			!(function (e) {
				(e.SMARTPHONE = "smartphone"),
					(e.TABLET = "tablet"),
					(e.MOBILE = "mobile"),
					(e.DESKTOP = "desktop"),
					(e.GENERIC = "generic");
			})(r || (r = {})),
				(function (e) {
					(e.APPLE = "apple"), (e.ANDROID = "android"), (e.GENERIC = "generic");
				})(i || (i = {})),
				(function (e) {
					(e.CHROME = "chrome"),
						(e.SAFARI = "safari"),
						(e.FIREFOX = "firefox"),
						(e.OPERA = "opera"),
						(e.EDGE = "edge"),
						(e.MSIE = "msie"),
						(e.GENERIC = "generic");
				})(a || (a = {}));
			var g = n("fFvI"),
				b = function (e) {
					var t = e.device,
						n = e.browser,
						o = e.children,
						s = e.vendor,
						c = e.ip,
						l = Object(p.useCallback)(
							function () {
								return {
									isMobile: t !== r.DESKTOP,
									isTablet: t === r.TABLET,
									isSmartphone: t === r.SMARTPHONE || t === r.MOBILE,
									isSafari: n === a.SAFARI,
									isAppleMobileDevice: s === i.APPLE && t !== r.DESKTOP,
									ip: c,
								};
							},
							[t, n, c, s],
						);
					return Object(d.jsx)(g.a.Provider, { value: l(), children: o });
				},
				x = n("nOHt"),
				w = n.n(x),
				j = n("x0YQ"),
				y = ["it"],
				k = function (e) {
					var t = e.children,
						n = Object(x.useRouter)();
					return (
						Object(p.useEffect)(
							function () {
								y.includes(n.locale) &&
									n.replace({ pathname: n.pathname.replace(n.locale, j.e) });
							},
							[n.locale],
						),
						Object(d.jsx)("div", { children: t })
					);
				},
				L = n("65uz"),
				O = n("zGn+"),
				N = n.n(O),
				E = function (e) {
					var t = e.text,
						n = void 0 === t ? "" : t,
						r = e.backgroundColor,
						i = void 0 === r ? "" : r,
						a = e.link,
						o = void 0 === a ? [] : a,
						s = e.textColor,
						c = void 0 === s ? "" : s;
					return Object(d.jsxs)("div", {
						className: N.a.root,
						style: { backgroundColor: i },
						children: [
							Object(d.jsx)("span", {
								className: N.a.title,
								style: { color: c },
								children: n,
							}),
							Object(d.jsx)("div", {
								className: N.a.links,
								children: o.map(function (e, t, n) {
									return Object(d.jsxs)(
										u.a.Fragment,
										{
											children: [
												Object(d.jsx)(L.a, {
													className: N.a.link,
													style: { color: e.fields.color || "black" },
													path: e.fields.pageSlug,
													children: e.fields.title,
												}),
												t < n.length - 1 &&
													Object(d.jsx)("span", {
														className: N.a.divider,
														children: "|",
													}),
											],
										},
										e.fields.title,
									);
								}),
							}),
						],
					});
				},
				S = n("mwIZ"),
				D = n.n(S),
				C = function (e) {
					return {
						device: D()(e, 'req.headers["x-0-device"]', "generic"),
						browser: D()(e, 'req.headers["x-0-browser"]', "generic"),
						vendor: D()(e, 'req.headers["x-0-vendor"]', "generic"),
						ip: D()(e, 'req.headers["x-0-client-ip"]', "generic"),
					};
				},
				T = n("bRTN"),
				M = (n("6w4r"), n("KQm4")),
				H = n("BkRI"),
				P = n.n(H),
				I = n("PMno"),
				A = n("76ZC"),
				R = (A.domToReact, A.htmlToDOM, A.attributesToProps, A.Element, A);
			function B(e) {
				var t = e.path,
					n = Object(p.useState)(!1),
					r = n[0],
					i = n[1],
					a = Object(p.useState)(""),
					o = a[0],
					l = a[1],
					u = (function () {
						var e = Object(c.a)(
							s.a.mark(function e() {
								return s.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													(e.next = 2),
													fetch(t)
														.then(
															(function () {
																var e = Object(c.a)(
																	s.a.mark(function e(t) {
																		var n;
																		return s.a.wrap(function (e) {
																			for (;;)
																				switch ((e.prev = e.next)) {
																					case 0:
																						return (e.next = 2), t.text();
																					case 2:
																						return (
																							(n = e.sent),
																							e.abrupt("return", n)
																						);
																					case 4:
																					case "end":
																						return e.stop();
																				}
																		}, e);
																	}),
																);
																return function (t) {
																	return e.apply(this, arguments);
																};
															})(),
														)
														.then(function (e) {
															l(e), i(!0);
														})
												);
											case 2:
											case "end":
												return e.stop();
										}
								}, e);
							}),
						);
						return function () {
							return e.apply(this, arguments);
						};
					})();
				return (
					Object(p.useEffect)(function () {
						u();
					}, []),
					r
						? Object(d.jsx)(d.Fragment, { children: R(o) })
						: Object(d.jsx)(d.Fragment, {})
				);
			}
			var F = n("YFqc"),
				z = n.n(F),
				V = n("sEfC"),
				Z = n.n(V),
				q = n("TSSV"),
				K = n.n(q);
			function G(e) {
				var t = e.topHeader,
					n = Object(x.useRouter)(),
					r = n.locale,
					i = n.locales,
					a = n.asPath,
					o = t.links,
					s = o.length - 1,
					c = t.setLinks,
					l = {
						en: {
							icon: '<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="1" y="1" width="11" height="7" fill="black"/>\n        <path d="M0.75 0.75H23.25V15.25H0.75V0.75Z" stroke="black" stroke-width="1.5"/>\n        <path d="M12 1V15" stroke="black" stroke-width="1.5"/>\n        <path d="M3 2L3.41145 2.43369L3.95106 2.69098L3.66574 3.21631L3.58779 3.80902L3 3.7L2.41221 3.80902L2.33426 3.21631L2.04894 2.69098L2.58855 2.43369L3 2Z" fill="white"/>\n        <path d="M6 2L6.41145 2.43369L6.95106 2.69098L6.66574 3.21631L6.58779 3.80902L6 3.7L5.41221 3.80902L5.33426 3.21631L5.04894 2.69098L5.58855 2.43369L6 2Z" fill="white"/>\n        <path d="M9 2L9.41145 2.43369L9.95106 2.69098L9.66574 3.21631L9.58779 3.80902L9 3.7L8.41221 3.80902L8.33426 3.21631L8.04894 2.69098L8.58855 2.43369L9 2Z" fill="white"/>\n        <path d="M3 5L3.41145 5.43369L3.95106 5.69098L3.66574 6.21631L3.58779 6.80902L3 6.7L2.41221 6.80902L2.33426 6.21631L2.04894 5.69098L2.58855 5.43369L3 5Z" fill="white"/>\n        <path d="M6 5L6.41145 5.43369L6.95106 5.69098L6.66574 6.21631L6.58779 6.80902L6 6.7L5.41221 6.80902L5.33426 6.21631L5.04894 5.69098L5.58855 5.43369L6 5Z" fill="white"/>\n        <path d="M9 5L9.41145 5.43369L9.95106 5.69098L9.66574 6.21631L9.58779 6.80902L9 6.7L8.41221 6.80902L8.33426 6.21631L8.04894 5.69098L8.58855 5.43369L9 5Z" fill="white"/>\n        <path d="M1 10L12 10" stroke="black" stroke-width="1.5"/>\n        <path d="M1 12.6807L12 12.6807" stroke="black" stroke-width="1.5"/>\n        <path d="M12 8L23 8" stroke="black" stroke-width="3"/>\n        <path d="M23 1L12 7" stroke="black" stroke-width="1.5"/>\n        <path d="M23 15L12 9" stroke="black" stroke-width="1.5"/>\n      </svg>',
							text: "English",
						},
						fr: {
							icon: '<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="0.75" y="0.750488" width="22.5" height="14.5" fill="black" stroke="black" stroke-width="1.5"/>\n        <rect x="8.5" y="0.5" width="7" height="15" fill="white" stroke="black"/>\n      </svg>',
							text: "Fran\xe7ais",
						},
						de: {
							icon: '<svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="0.75" y="14.2505" width="13.5" height="22.5" transform="rotate(-90 0.75 14.2505)" stroke="black" stroke-width="1.5"/>\n        <path d="M0.922852 10.0005L23.0767 10.0005" stroke="black" stroke-width="1.5"/>\n        <path d="M0.922852 5.00049L23.0767 5.00049" stroke="black" stroke-width="1.5"/>\n      </svg>',
							text: "Deutsch",
						},
						jp: {
							icon: '<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="0.75" y="0.750488" width="22.5" height="14.5" stroke="black" stroke-width="1.5"/>\n        <circle cx="12" cy="8.00049" r="4" fill="black" stroke="black" stroke-width="1.5"/>\n      </svg>',
							text: "\u65e5\u672c\u8a9e",
						},
						kr: {
							icon: '<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0.75 0.750488H23.25V15.2505H0.75V0.750488Z" stroke="black" stroke-width="1.5"/>\n        <circle cx="11.9648" cy="8.00049" r="4" stroke="black" stroke-width="1.5"/>\n        <path d="M11.9656 8.00049C12.2308 7.54112 12.6676 7.20592 13.18 7.06864C13.6924 6.93135 14.2383 7.00322 14.6976 7.26844C15.157 7.53365 15.4922 7.97049 15.6295 8.48285C15.7668 8.99521 15.6949 9.54112 15.4297 10.0005" stroke="black" stroke-width="1.5"/>\n        <path d="M11.9641 8.00049C11.6989 8.45986 11.262 8.79505 10.7497 8.93234C10.2373 9.06963 9.69142 8.99776 9.23205 8.73254C8.77268 8.46732 8.43749 8.03049 8.3002 7.51813C8.16291 7.00577 8.23478 6.45986 8.5 6.00049" stroke="black" stroke-width="1.5"/>\n        <path d="M10 11.5L9 10.5L8 8L9.5 8.5H11.5L12.5 7L14.5 7.5L16 8.5V9.5L14.5 11.5L12 12L10 11.5Z" fill="black"/>\n        <path d="M17.7241 12.875L18.6188 11.5486" stroke="black" stroke-width="1.5"/>\n        <path d="M19.0679 10.8868L19.9626 9.5603" stroke="black" stroke-width="1.5"/>\n        <path d="M4.00146 9.87505L4.84025 11.1186" stroke="black" stroke-width="1.5"/>\n        <path d="M5.40381 11.9571L6.23736 13.1929" stroke="black" stroke-width="1.5"/>\n        <path d="M19.9609 6.19164L17.7242 2.87549" stroke="black" stroke-width="1.5"/>\n        <path d="M4 5.87523L6.23677 2.55908" stroke="black" stroke-width="1.5"/>\n      </svg>',
							text: "\ud55c\uad6d\uc5b4",
						},
						cn: {
							icon: '<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M0.75 0.750488H23.25V15.2505H0.75V0.750488Z" stroke="black" stroke-width="1.5"/>\n                  <path d="M4.89844 2.60205L5.72134 3.49111L6.80055 4.01857L6.22992 5.09549L6.07401 6.31054L4.89844 6.08705L3.72287 6.31054L3.56696 5.09549L2.99632 4.01857L4.07554 3.49111L4.89844 2.60205Z" fill="black"/>\n                  <path d="M7.75864 2.28877L8.11974 2.27763L8.44964 2.13804L8.58026 2.47721L8.82314 2.7501L8.54276 2.97087L8.36296 3.27911L8.05906 3.07638L7.70506 2.99399L7.79761 2.64793L7.75864 2.28877Z" fill="black" stroke="black" stroke-width="0.149108"/>\n                  <path d="M9.34808 3.46489L9.68311 3.60006L10.0413 3.60509L10.0243 3.96815L10.1368 4.31572L9.79127 4.40494L9.5026 4.61472L9.30602 4.3068L9.01514 4.08888L9.23917 3.80936L9.34808 3.46489Z" fill="black" stroke="black" stroke-width="0.149108"/>\n                  <path d="M9.59643 5.39893L9.84184 5.66406L10.1637 5.82135L9.9935 6.14251L9.94701 6.50486L9.59643 6.43821L9.24586 6.50486L9.19936 6.14251L9.02919 5.82135L9.35103 5.66406L9.59643 5.39893Z" fill="black" stroke="black" stroke-width="0.149108"/>\n                  <path d="M8.42138 6.74438L8.55141 7.08144L8.79232 7.34656L8.51549 7.58207L8.33835 7.90157L8.03724 7.71007L7.68686 7.64241L7.77759 7.28854L7.73817 6.92723L8.09536 6.90003L8.42138 6.74438Z" fill="black" stroke="black" stroke-width="0.149108"/>\n                </svg>',
							text: "\u4e2d\u6587\u7b80\u4f53",
						},
						tw: {
							icon: '<svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M0.75 0.750488H23.25V15.2522H0.75V0.750488Z" stroke="black" stroke-width="1.5"/>\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0.000488281H0V10.0005H14V0.000488281ZM7.62117 2.68227L7 2.00049L6.37883 2.68227L5.5 2.40241L5.30294 3.30343L4.40192 3.50049L4.68178 4.37932L4 5.00049L4.68178 5.62165L4.40192 6.50049L5.30294 6.69754L5.5 7.59856L6.37883 7.31871L7 8.00049L7.62117 7.31871L8.5 7.59856L8.69706 6.69754L9.59808 6.50049L9.31822 5.62165L10 5.00049L9.31822 4.37932L9.59808 3.50049L8.69706 3.30343L8.5 2.40241L7.62117 2.68227Z" fill="black"/>\n                </svg>',
							text: "\u4e2d\u6587\u7e41\u4f53",
						},
					},
					p = Z()(function (e) {
						var t = o.map(function (t, n) {
							return s === n && e;
						});
						c(t);
					}, 50);
				return Object(d.jsxs)("div", {
					className: ""
						.concat(K.a["dp-lang-switcher"], " ")
						.concat(o[s] ? "is-active" : ""),
					onMouseEnter: function () {
						p(!0);
					},
					onMouseLeave: function () {
						p(!1);
					},
					children: [
						Object(d.jsxs)("div", {
							className: K.a["dp-lang-switcher__header"],
							onClick: function () {
								p(!o[s]);
							},
							children: [
								Object(d.jsxs)("svg", {
									className: K.a["dp-lang-switcher__header-icon"],
									width: "18",
									height: "18",
									viewBox: "0 0 18 18",
									fill: "none",
									xmlns: "http://www.w3.org/2000/svg",
									children: [
										Object(d.jsx)("path", {
											d: "M9.00049 17C13.4188 17 17.0005 13.4183 17.0005 9C17.0005 4.58172 13.4188 1 9.00049 1C4.58221 1 1.00049 4.58172 1.00049 9C1.00049 13.4183 4.58221 17 9.00049 17Z",
											stroke: "currentColor",
											strokeWidth: "1.6",
											strokeLinecap: "round",
											strokeLinejoin: "round",
										}),
										Object(d.jsx)("path", {
											d: "M1.00049 9H17.0005",
											stroke: "currentColor",
											strokeWidth: "1.6",
											strokeLinecap: "round",
											strokeLinejoin: "round",
										}),
										Object(d.jsx)("path", {
											d: "M9.00048 1C11.0015 3.19068 12.1387 6.03363 12.2005 9C12.1387 11.9664 11.0015 14.8093 9.00048 17C6.99945 14.8093 5.86227 11.9664 5.80048 9C5.86227 6.03363 6.99945 3.19068 9.00048 1V1Z",
											stroke: "currentColor",
											strokeWidth: "1.6",
											strokeLinecap: "round",
											strokeLinejoin: "round",
										}),
									],
								}),
								Object(d.jsx)("div", {
									className: K.a["dp-lang-switcher__header-text"],
									children: l[r].text,
								}),
								Object(d.jsx)("svg", {
									className: K.a["dp-lang-switcher__header-arr"],
									width: "25",
									height: "25",
									viewBox: "0 0 13 8",
									fill: "currentColor",
									xmlns: "http://www.w3.org/2000/svg",
									children: Object(d.jsx)("path", {
										d: "M2.19125 0.290039L6.78125 4.88004L11.3713 0.290039L12.7812 1.71004L6.78125 7.71004L0.78125 1.71004L2.19125 0.290039Z",
									}),
								}),
							],
						}),
						Object(d.jsx)("ul", {
							className: K.a["dp-lang-switcher__dropdown"],
							children: i.map(function (e, t) {
								return Object(d.jsx)(
									"li",
									{
										className: K.a["dp-lang-switcher__item"],
										children: Object(d.jsx)(
											z.a,
											{
												href: a,
												locale: e,
												children: Object(d.jsxs)("span", {
													className: "\n                    "
														.concat(
															K.a["dp-lang-switcher__lang"],
															"\n                    ",
														)
														.concat(
															e === r ? "is-active" : "",
															"\n                  ",
														),
													children: [R(l[e].icon), l[e].text],
												}),
											},
											e,
										),
									},
									t,
								);
							}),
						}),
					],
				});
			}
			var U = n("xDlj"),
				W = n.n(U),
				X = n("sdIs"),
				Y = n.n(X);
			function J(e) {
				var t,
					n,
					r,
					i,
					a,
					o,
					s,
					c,
					l,
					u,
					h = e.header,
					f = e.setBackDropState,
					_ = Object(T.a)().currentLocale,
					m = Object(x.useRouter)(),
					v = Object(p.useState)(
						null === (t = h.fields.menu) || void 0 === t
							? void 0
							: t.map(function () {
									return !1;
							  }),
					),
					g = v[0],
					b = v[1],
					w = Object(p.useRef)(
						null === (n = h.fields.menu) || void 0 === n
							? void 0
							: n.map(function () {
									return Object(p.createRef)();
							  }),
					),
					y = Object(p.useState)(
						[].concat(
							Object(M.a)(
								null === (r = h.fields.topLinks) || void 0 === r
									? void 0
									: r.map(function () {
											return !1;
									  }),
							),
							[!1],
						),
					),
					k = y[0],
					O = y[1],
					N = Object(p.useState)(!1),
					E = N[0],
					S = N[1],
					D = E ? W.a["is-navbar-opened"] : "",
					C = E ? W.a["is-navbar-opened"] : "",
					H = Object(p.useState)(!1),
					A = H[0],
					R = H[1],
					F = A ? Y.a["is-search-active"] : "",
					z = Object(p.useState)(!1),
					V = z[0],
					Z = z[1],
					q = Object(p.useState)(0),
					K = q[0],
					U = q[1],
					X = Object(p.useState)(!1),
					J = X[0],
					Q = X[1],
					$ = J ? W.a.active : "",
					ee = Object(p.useState)(!1),
					te = ee[0],
					ne = ee[1],
					re = te ? W.a.hidden : "",
					ie = Object(p.useState)(!1),
					ae = ie[0],
					oe = ie[1],
					se = ae ? W.a.sticky : "",
					ce = Object(p.useRef)(null),
					le = Object(p.useRef)(null);
				Object(p.useEffect)(
					function () {
						E && (S(!1), f(!1));
					},
					[null === m || void 0 === m ? void 0 : m.asPath, _],
				);
				var de = function () {
						if (void 0 !== u) {
							if (document.body.scrollTop === u) return;
						} else u = 0;
						Q(document.body.scrollTop > 1);
						var e = document.body.scrollTop > u ? 2 : 1;
						(u = document.body.scrollTop),
							2 === e && document.body.scrollTop > 200
								? ne(!0)
								: 1 === e && ne(!1);
					},
					pe = function (e) {
						E &&
							(fe(
								e,
								"dp-header",
								function () {
									S(!1), f(!1);
								},
								!1,
							),
							fe(
								e,
								"js-mobile-menu",
								function () {
									S(!1), f(!1);
								},
								!0,
							)),
							A &&
								fe(
									e,
									"dp-search",
									function () {
										R(!1);
									},
									!1,
								);
					},
					ue = function (e, t, n, r) {
						var i = "ontouchstart" in window || navigator.maxTouchPoints > 0,
							a =
								/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
									navigator.userAgent,
								);
						i || a || _e(e, t, n, r);
					},
					he = function () {
						var e;
						if (!(null === (e = ce.current) || void 0 === e ? void 0 : e.value))
							return null;
						var t = _ === j.e ? "/search" : "/".concat(_, "/search");
						m.push({ pathname: t, query: { search: ce.current.value } }),
							(ce.current.value = ""),
							R(!1);
					},
					fe = function (e, t, n, r) {
						e.composedPath().some(function (e) {
							var n;
							return null === (n = e.classList) || void 0 === n
								? void 0
								: n.contains(t);
						}) === r && n();
					},
					_e = function (e, t, n, r) {
						var i = P()(t);
						n(
							i.map(function (t, n) {
								return n === e && (void 0 !== r ? r : !i[n]);
							}),
						);
					},
					me = function () {
						var e = P()(g);
						E &&
							b(
								e.map(function () {
									return !1;
								}),
							),
							S(!E),
							f(!E);
					},
					ve = function () {
						f(!1), S(!1);
					};
				return (
					Object(p.useEffect)(function () {
						var e = window.matchMedia("(orientation: portrait)");
						return (
							oe(!0),
							document.body.addEventListener("scroll", de),
							document.body.addEventListener("click", pe),
							e.addEventListener("change", ve),
							de(),
							function () {
								document.body.removeEventListener("scroll", de),
									document.body.removeEventListener("click", pe),
									e.addEventListener("change", ve);
							}
						);
					}, []),
					Object(p.useEffect)(
						function () {
							var e = function (e) {
								le.current &&
									!le.current.contains(e.target) &&
									(_e(K, k, O, !1), Z(!1));
							};
							document.addEventListener("mousedown", e),
								document.addEventListener("touchstart", e);
						},
						[le],
					),
					Object(d.jsx)("div", {
						className: ""
							.concat(W.a["dp-header-wrap"], " ")
							.concat(ae ? "sticky-wrap" : "", " ")
							.concat(te ? "hidden-wrap" : ""),
						children: Object(d.jsxs)("header", {
							className: "dp-header "
								.concat(W.a.dpHeader, " ")
								.concat(C, " ")
								.concat(F, " ")
								.concat($, " ")
								.concat(re, " ")
								.concat(se),
							children: [
								Object(d.jsx)("div", {
									className: "dp-container-fluid",
									children: Object(d.jsxs)("div", {
										className: W.a.dpHeader__main,
										children: [
											Object(d.jsx)("div", {
												className: ""
													.concat(W.a.dpHeader__logo, " ")
													.concat(W.a.logo),
												children: Object(d.jsx)(L.a, {
													className: W.a.logo__wrap,
													path: "/",
													children: Object(d.jsx)("img", {
														className: "logo__img img-responsive",
														src: Object(I.a)(h.fields.logo.fields.file.url),
														alt: h.fields.logo.fields.title,
														width: "95",
														height: "40",
														title: h.fields.logo.fields.title,
													}),
												}),
											}),
											Object(d.jsxs)("div", {
												className: W.a.dpHeader__controls,
												children: [
													Object(d.jsxs)("div", {
														className: "dp-search "
															.concat(W.a.dpHeader__utils, " ")
															.concat(W.a["dp-utils"]),
														children: [
															Object(d.jsx)("div", {
																className: ""
																	.concat(Y.a["dp-search"], " ")
																	.concat(W.a["dp-utils__search"]),
																children: Object(d.jsxs)("div", {
																	className: Y.a["dp-search__field"],
																	children: [
																		Object(d.jsx)("div", {
																			className: Y.a["dp-search__send"],
																			children: Object(d.jsx)("svg", {
																				className: "".concat(
																					Y.a["dp-search__icon"],
																					" icon icon-search",
																				),
																				width: "25",
																				height: "25",
																				xmlns: "http://www.w3.org/2000/svg",
																				viewBox: "0 0 56.966 56.966",
																				children: Object(d.jsx)("path", {
																					d: "M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z",
																				}),
																			}),
																		}),
																		Object(d.jsx)("input", {
																			className: ""
																				.concat(Y.a["dp-search__input"], " ")
																				.concat(W.a.input),
																			type: "search",
																			autoComplete: "off",
																			name: "query",
																			placeholder: h.fields.searchTitle.concat(
																				"",
																				"...",
																			),
																			ref: ce,
																			onKeyDown: function (e) {
																				"Enter" === e.key && he();
																			},
																		}),
																		Object(d.jsx)("button", {
																			className: Y.a["dp-search__submit"],
																			type: "button",
																			onClick: he,
																			children: Object(d.jsxs)("svg", {
																				className: "".concat(
																					Y.a["dp-search__submit-icon"],
																					" icon icon-send-stroked",
																				),
																				width: "25",
																				height: "25",
																				viewBox: "0 0 14 13",
																				fill: "none",
																				xmlns: "http://www.w3.org/2000/svg",
																				children: [
																					Object(d.jsx)("path", {
																						d: "M13 1V5C13 5.79565 12.6839 6.55871 12.1213 7.12132C11.5587 7.68393 10.7956 8 10 8H3",
																						strokeWidth: "2",
																						strokeLinecap: "round",
																						strokeLinejoin: "round",
																					}),
																					Object(d.jsx)("path", {
																						d: "M5 4L1 8L5 12",
																						strokeWidth: "2",
																						strokeLinecap: "round",
																						strokeLinejoin: "round",
																					}),
																				],
																			}),
																		}),
																	],
																}),
															}),
															Object(d.jsxs)("button", {
																className: ""
																	.concat(W.a["dp-util-item"], " ")
																	.concat(W.a["dp-utils__item"], " is-search"),
																type: "button",
																onClick: function () {
																	return R(!A);
																},
																"aria-label": "Search button",
																children: [
																	Object(d.jsx)(B, {
																		path: h.fields.searchIcon.fields.file.url,
																	}),
																	Object(d.jsx)("div", {
																		className: W.a["dp-util-item__text"],
																		children: h.fields.searchTitle,
																	}),
																],
															}),
															(null === (i = h.fields.topLinks) || void 0 === i
																? void 0
																: i.length) &&
																h.fields.topLinks.map(function (e, t) {
																	var n, r, i, a;
																	return (null === (n = e.fields.url) ||
																	void 0 === n
																		? void 0
																		: n.length) &&
																		!(null === (r = e.fields.items) ||
																		void 0 === r
																			? void 0
																			: r.length)
																		? Object(d.jsxs)(
																				"a",
																				{
																					className: ""
																						.concat(W.a["dp-util-item"], " ")
																						.concat(W.a["dp-utils__item"]),
																					href: e.fields.url,
																					children: [
																						Object(d.jsx)(B, {
																							path: e.fields.icon.fields.file
																								.url,
																						}),
																						Object(d.jsx)("div", {
																							"data-svg":
																								e.fields.icon.fields.file.url,
																							className:
																								W.a["dp-util-item__text"],
																							children: e.fields.name,
																						}),
																					],
																				},
																				t,
																		  )
																		: (
																				null === (i = e.fields.items) ||
																				void 0 === i
																					? void 0
																					: i.length
																		  )
																		? Object(d.jsxs)(
																				"div",
																				{
																					className: ""
																						.concat(W.a["dp-util-item"], " ")
																						.concat(
																							W.a["dp-utils__item"],
																							" has-dropdown ",
																						)
																						.concat(k[t] ? "is-open" : ""),
																					onMouseEnter: function () {
																						ue(t, k, O, !0);
																					},
																					onMouseLeave: function () {
																						ue(t, k, O, !1);
																					},
																					children: [
																						Object(d.jsxs)("span", {
																							className: "".concat(
																								W.a["dp-util-item"],
																							),
																							onClick: function () {
																								_e(t, k, O);
																							},
																							children: [
																								Object(d.jsx)(B, {
																									path: e.fields.icon.fields
																										.file.url,
																								}),
																								Object(d.jsx)("div", {
																									className:
																										W.a["dp-util-item__text"],
																									children: e.fields.title,
																								}),
																								Object(d.jsx)("svg", {
																									className: "".concat(
																										W.a["dp-navbar__icon"],
																										" icon icon-chevron-down",
																									),
																									width: "25",
																									height: "25",
																									viewBox: "0 0 13 8",
																									xmlns:
																										"http://www.w3.org/2000/svg",
																									children: Object(d.jsx)(
																										"path",
																										{
																											d: "M2.19125 0.290039L6.78125 4.88004L11.3713 0.290039L12.7812 1.71004L6.78125 7.71004L0.78125 1.71004L2.19125 0.290039Z",
																										},
																									),
																								}),
																							],
																						}),
																						Object(d.jsx)("ul", {
																							className: "".concat(
																								W.a["dp-util-item__dropdown"],
																							),
																							children:
																								(null ===
																									(a = e.fields.items) ||
																								void 0 === a
																									? void 0
																									: a.length) &&
																								e.fields.items.map(function (
																									e,
																									t,
																								) {
																									return Object(d.jsx)(
																										"li",
																										{
																											children: Object(d.jsxs)(
																												L.a,
																												{
																													path: e.fields.url,
																													children: [
																														Object(d.jsx)(B, {
																															path: e.fields
																																.icon.fields
																																.file.url,
																														}),
																														Object(d.jsx)(
																															"span",
																															{
																																children:
																																	e.fields.name,
																															},
																														),
																													],
																												},
																											),
																										},
																										t,
																									);
																								}),
																						}),
																					],
																				},
																				t,
																		  )
																		: "link";
																}),
															Object(d.jsx)(G, {
																topHeader: { links: k, setLinks: O },
															}),
															Object(d.jsxs)("button", {
																className: ""
																	.concat(W.a["dp-utils__item"], " ")
																	.concat(W.a["dp-navbar-trigger"], " ")
																	.concat(D),
																type: "button",
																onClick: me,
																"aria-label": "Navigation menu",
																children: [
																	Object(d.jsx)("span", {
																		className: W.a["dp-navbar-trigger__line"],
																	}),
																	Object(d.jsx)("span", {
																		className: W.a["dp-navbar-trigger__line"],
																	}),
																],
															}),
														],
													}),
													Object(d.jsx)("nav", {
														className: ""
															.concat(W.a.dpHeader__nav, " ")
															.concat(W.a["dp-navbar"]),
														children: Object(d.jsx)("ul", {
															className: W.a["dp-navbar__list"],
															children:
																(null === (a = h.fields.menu) || void 0 === a
																	? void 0
																	: a.length) &&
																h.fields.menu.map(function (e, t) {
																	var n, r;
																	return Object(d.jsxs)(
																		"li",
																		{
																			className: ""
																				.concat(W.a["dp-navbar__item"], " ")
																				.concat(g[t] ? "open-menu" : ""),
																			onMouseEnter: function () {
																				ue(t, g, b, !0);
																			},
																			onMouseLeave: function () {
																				ue(t, g, b, !1);
																			},
																			children: [
																				Object(d.jsxs)("span", {
																					className: W.a["dp-navbar__link"],
																					onClick: function () {
																						_e(t, g, b);
																					},
																					children: [
																						Object(d.jsx)("span", {
																							className: W.a["dp-navbar__text"],
																							children: e.fields.title,
																						}),
																						Object(d.jsx)("svg", {
																							className: "".concat(
																								W.a["dp-navbar__icon"],
																								" icon icon-chevron-down",
																							),
																							width: "25",
																							height: "25",
																							viewBox: "0 0 13 8",
																							xmlns:
																								"http://www.w3.org/2000/svg",
																							children: Object(d.jsx)("path", {
																								d: "M2.19125 0.290039L6.78125 4.88004L11.3713 0.290039L12.7812 1.71004L6.78125 7.71004L0.78125 1.71004L2.19125 0.290039Z",
																							}),
																						}),
																					],
																				}),
																				Object(d.jsx)("div", {
																					className: ""
																						.concat(
																							W.a["dp-navbar__dropdown"],
																							" ",
																						)
																						.concat(
																							W.a["dp-navbar-categories"],
																							" ",
																						)
																						.concat(
																							(null === (n = e.fields.items) ||
																							void 0 === n
																								? void 0
																								: n.length) < 3
																								? W.a["has-constraint"]
																								: "",
																						),
																					children:
																						(null === (r = e.fields.items) ||
																						void 0 === r
																							? void 0
																							: r.length) &&
																						e.fields.items.map(function (e, n) {
																							var r, i;
																							return Object(d.jsxs)(
																								"div",
																								{
																									className:
																										W.a[
																											"dp-navbar-categories__subsection"
																										],
																									children: [
																										(null ===
																											(r = e.fields.title) ||
																										void 0 === r
																											? void 0
																											: r.length) &&
																											Object(d.jsx)("div", {
																												className:
																													W.a[
																														"dp-navbar-categories__caption"
																													],
																												children: Object(d.jsx)(
																													L.a,
																													{
																														path: e.fields.url,
																														children:
																															e.fields.title,
																													},
																												),
																											}),
																										Object(d.jsx)("ul", {
																											className:
																												W.a[
																													"dp-navbar-categories__items"
																												],
																											children:
																												(null ===
																													(i =
																														e.fields.items) ||
																												void 0 === i
																													? void 0
																													: i.length) &&
																												e.fields.items.map(
																													function (e, n) {
																														return Object(
																															d.jsx,
																														)(
																															"li",
																															{
																																className:
																																	W.a[
																																		"dp-navbar-categories__item"
																																	],
																																children:
																																	Object(d.jsx)(
																																		L.a,
																																		{
																																			className:
																																				W.a[
																																					"dp-navbar-categories__link"
																																				],
																																			path: e
																																				.fields
																																				.url,
																																			onClick:
																																				function () {
																																					_e(
																																						t,
																																						g,
																																						b,
																																						!1,
																																					);
																																				},
																																			children:
																																				Object(
																																					d.jsxs,
																																				)(
																																					"article",
																																					{
																																						className:
																																							""
																																								.concat(
																																									W
																																										.a[
																																										"dp-category"
																																									],
																																									" ",
																																								)
																																								.concat(
																																									W
																																										.a[
																																										"dp-navbar-categories__category"
																																									],
																																								),
																																						children:
																																							[
																																								Object(
																																									d.jsx,
																																								)(
																																									B,
																																									{
																																										path: e
																																											.fields
																																											.icon
																																											.fields
																																											.file
																																											.url,
																																									},
																																								),
																																								Object(
																																									d.jsxs,
																																								)(
																																									"div",
																																									{
																																										className:
																																											W
																																												.a[
																																												"dp-category__main"
																																											],
																																										children:
																																											[
																																												Object(
																																													d.jsx,
																																												)(
																																													"div",
																																													{
																																														className:
																																															W
																																																.a[
																																																"dp-category__heading"
																																															],
																																														children:
																																															e
																																																.fields
																																																.name,
																																													},
																																												),
																																												Object(
																																													d.jsx,
																																												)(
																																													"p",
																																													{
																																														className:
																																															W
																																																.a[
																																																"dp-category__desc"
																																															],
																																														children:
																																															e
																																																.fields
																																																.description,
																																													},
																																												),
																																											],
																																									},
																																								),
																																							],
																																					},
																																				),
																																		},
																																	),
																															},
																															n,
																														);
																													},
																												),
																										}),
																									],
																								},
																								n,
																							);
																						}),
																				}),
																			],
																		},
																		t,
																	);
																}),
														}),
													}),
													Object(d.jsx)("div", {
														className: W.a.dpHeader__btns,
														children:
															(null === (o = h.fields.buttons) || void 0 === o
																? void 0
																: o.length) &&
															h.fields.buttons.map(function (e, t) {
																var n =
																	"Primary" === e.fields.type
																		? "ds-btn ds-btn--primary"
																		: "ds-btn ds-btn--white-reverse";
																return Object(d.jsx)(
																	L.a,
																	{
																		className: ""
																			.concat(W.a.dpHeader__btn, " ")
																			.concat(n),
																		path: e.fields.url,
																		children: e.fields.title,
																	},
																	t,
																);
															}),
													}),
												],
											}),
										],
									}),
								}),
								Object(d.jsx)("div", {
									className: "".concat(W.a["dp-mob-nav"], " is-panel"),
									children: Object(d.jsxs)("div", {
										className: W.a["dp-mob-nav__main"],
										children: [
											Object(d.jsxs)("div", {
												className: W.a["dp-mob-nav__header"],
												children: [
													Object(d.jsxs)("div", {
														className: ""
															.concat(W.a["dp-mob-nav__utils"], " ")
															.concat(W.a["dp-utils"]),
														children: [
															(null === (s = h.fields.topLinks) || void 0 === s
																? void 0
																: s.length) &&
																h.fields.topLinks.map(function (e, t) {
																	var n, r, i, a;
																	return (null === (n = e.fields.url) ||
																	void 0 === n
																		? void 0
																		: n.length) &&
																		!(null === (r = e.fields.items) ||
																		void 0 === r
																			? void 0
																			: r.length)
																		? Object(d.jsxs)(
																				L.a,
																				{
																					className: ""
																						.concat(W.a["dp-util-item"], " ")
																						.concat(
																							W.a["dp-utils__item"],
																							" js-mobile-menu",
																						),
																					path: e.fields.url,
																					children: [
																						Object(d.jsx)(B, {
																							path: e.fields.icon.fields.file
																								.url,
																						}),
																						Object(d.jsx)("div", {
																							className:
																								W.a["dp-util-item__text"],
																							children: e.fields.name,
																						}),
																					],
																				},
																				t,
																		  )
																		: (
																				null === (i = e.fields.items) ||
																				void 0 === i
																					? void 0
																					: i.length
																		  )
																		? Object(d.jsxs)(
																				"div",
																				{
																					className: ""
																						.concat(W.a["dp-util-item"], " ")
																						.concat(
																							W.a["dp-utils__item"],
																							" has-dropdown ",
																						)
																						.concat(k[t] ? "is-open" : ""),
																					children: [
																						Object(d.jsxs)("span", {
																							className: "".concat(
																								W.a["dp-util-item"],
																							),
																							onClick: function () {
																								U(t), _e(t, k, O, !V), Z(!V);
																							},
																							ref: le,
																							children: [
																								Object(d.jsx)(B, {
																									path: e.fields.icon.fields
																										.file.url,
																								}),
																								Object(d.jsx)("div", {
																									className:
																										W.a["dp-util-item__text"],
																									children: e.fields.title,
																								}),
																								Object(d.jsx)("svg", {
																									className: "".concat(
																										W.a["dp-navbar__icon"],
																										" icon icon-chevron-down",
																									),
																									width: "25",
																									height: "25",
																									viewBox: "0 0 13 8",
																									xmlns:
																										"http://www.w3.org/2000/svg",
																									children: Object(d.jsx)(
																										"path",
																										{
																											d: "M2.19125 0.290039L6.78125 4.88004L11.3713 0.290039L12.7812 1.71004L6.78125 7.71004L0.78125 1.71004L2.19125 0.290039Z",
																										},
																									),
																								}),
																							],
																						}),
																						Object(d.jsx)("ul", {
																							className: "".concat(
																								W.a["dp-util-item__dropdown"],
																							),
																							children:
																								(null ===
																									(a = e.fields.items) ||
																								void 0 === a
																									? void 0
																									: a.length) &&
																								e.fields.items.map(function (
																									e,
																									t,
																								) {
																									return Object(d.jsx)(
																										"li",
																										{
																											children: Object(d.jsxs)(
																												L.a,
																												{
																													path: e.fields.url,
																													children: [
																														Object(d.jsx)(B, {
																															path: e.fields
																																.icon.fields
																																.file.url,
																														}),
																														Object(d.jsx)(
																															"span",
																															{
																																children:
																																	e.fields.name,
																															},
																														),
																													],
																												},
																											),
																										},
																										t,
																									);
																								}),
																						}),
																					],
																				},
																				t,
																		  )
																		: "link";
																}),
															Object(d.jsx)(G, {
																topHeader: { links: k, setLinks: O },
															}),
														],
													}),
													Object(d.jsx)("div", {
														className: W.a["dp-mob-nav__btns"],
														children:
															(null === (c = h.fields.buttons) || void 0 === c
																? void 0
																: c.length) &&
															h.fields.buttons.map(function (e, t) {
																var n =
																	"Primary" === e.fields.type
																		? "ds-btn ds-btn--primary"
																		: "ds-btn ds-btn--secondary-reverse";
																return Object(d.jsx)(
																	L.a,
																	{
																		className: ""
																			.concat(W.a["dp-mob-nav__btn"], " ")
																			.concat(n, " js-mobile-menu"),
																		path: e.fields.url,
																		onClick: function () {
																			me();
																		},
																		children: e.fields.title,
																	},
																	t,
																);
															}),
													}),
												],
											}),
											Object(d.jsx)("div", {
												className: W.a["dp-mob-nav__items"],
												children:
													(null === (l = h.fields.menu) || void 0 === l
														? void 0
														: l.length) &&
													h.fields.menu.map(function (e, t) {
														var n;
														return Object(d.jsxs)(
															"div",
															{
																className: ""
																	.concat(W.a["dp-mob-nav__item"], " ")
																	.concat(W.a["dp-nav-accordion"], " ")
																	.concat(g[t] ? W.a["is-expanded"] : ""),
																onClick: function () {
																	!(function (e) {
																		var t = P()(g);
																		b(
																			t.map(function (n, r) {
																				return r === e && !t[r];
																			}),
																		);
																	})(t);
																},
																children: [
																	Object(d.jsxs)("div", {
																		className: W.a["dp-nav-accordion__header"],
																		children: [
																			Object(d.jsx)("span", {
																				className: W.a["dp-navbar__text"],
																				children: e.fields.title,
																			}),
																			Object(d.jsx)("svg", {
																				className: "".concat(
																					W.a["dp-nav-accordion__header-icon"],
																					" icon icon-chevron-down",
																				),
																				width: "25",
																				height: "25",
																				viewBox: "0 0 13 8",
																				xmlns: "http://www.w3.org/2000/svg",
																				children: Object(d.jsx)("path", {
																					d: "M2.19125 0.290039L6.78125 4.88004L11.3713 0.290039L12.7812 1.71004L6.78125 7.71004L0.78125 1.71004L2.19125 0.290039Z",
																				}),
																			}),
																		],
																	}),
																	Object(d.jsx)("div", {
																		className: W.a["dp-nav-accordion__body"],
																		style: g[t]
																			? {
																					height: "".concat(
																						w.current[t].current.scrollHeight,
																						"px",
																					),
																			  }
																			: { height: "0px" },
																		children: Object(d.jsx)("div", {
																			ref: w.current[t],
																			children:
																				(null === (n = e.fields.items) ||
																				void 0 === n
																					? void 0
																					: n.length) &&
																				e.fields.items.map(function (e, t) {
																					var n, r;
																					return Object(d.jsxs)(
																						"div",
																						{
																							className:
																								W.a[
																									"dp-nav-accordion__subsection"
																								],
																							children: [
																								(null ===
																									(n = e.fields.title) ||
																								void 0 === n
																									? void 0
																									: n.length) &&
																									Object(d.jsx)("div", {
																										className:
																											W.a[
																												"dp-nav-accordion__caption"
																											],
																										children: Object(d.jsx)(
																											L.a,
																											{
																												path: e.fields.url,
																												children:
																													e.fields.title,
																											},
																										),
																									}),
																								Object(d.jsx)("ul", {
																									className:
																										W.a[
																											"dp-nav-accordion__items"
																										],
																									children:
																										(null ===
																											(r = e.fields.items) ||
																										void 0 === r
																											? void 0
																											: r.length) &&
																										e.fields.items.map(
																											function (e, t) {
																												return Object(d.jsx)(
																													"li",
																													{
																														className:
																															W.a[
																																"dp-nav-accordion__item"
																															],
																														children: Object(
																															d.jsx,
																														)("button", {
																															className:
																																W.a[
																																	"dp-nav-accordion__link"
																																],
																															type: "button",
																															onClick:
																																function () {
																																	return (function (
																																		e,
																																	) {
																																		var t =
																																			P()(g);
																																		e &&
																																			m.push(e),
																																			b(
																																				t.map(
																																					function () {
																																						return !1;
																																					},
																																				),
																																			),
																																			S(!1),
																																			f(!1);
																																	})(
																																		e.fields
																																			.url,
																																	);
																																},
																															children: Object(
																																d.jsxs,
																															)("article", {
																																className: ""
																																	.concat(
																																		W.a[
																																			"dp-nav-accordion__category"
																																		],
																																		" ",
																																	)
																																	.concat(
																																		W.a[
																																			"dp-category"
																																		],
																																	),
																																children: [
																																	Object(d.jsx)(
																																		B,
																																		{
																																			path: e
																																				.fields
																																				.icon
																																				.fields
																																				.file
																																				.url,
																																		},
																																	),
																																	Object(
																																		d.jsxs,
																																	)("div", {
																																		className:
																																			"category__main",
																																		children: [
																																			Object(
																																				d.jsx,
																																			)("div", {
																																				className:
																																					W.a[
																																						"dp-category__heading"
																																					],
																																				children:
																																					e
																																						.fields
																																						.name,
																																			}),
																																			Object(
																																				d.jsx,
																																			)("p", {
																																				className:
																																					W.a[
																																						"dp-category__desc"
																																					],
																																				children:
																																					e
																																						.fields
																																						.description,
																																			}),
																																		],
																																	}),
																																],
																															}),
																														}),
																													},
																													t,
																												);
																											},
																										),
																								}),
																							],
																						},
																						t,
																					);
																				}),
																		}),
																	}),
																],
															},
															t,
														);
													}),
											}),
										],
									}),
								}),
							],
						}),
					})
				);
			}
			var Q = n("Jhka"),
				$ = n.n(Q);
			function ee(e) {
				var t,
					n = e.footer;
				return Object(d.jsx)("footer", {
					className: "".concat($.a["ds-footer"]),
					children: Object(d.jsxs)("div", {
						className: "dp-container-fluid",
						children: [
							Object(d.jsx)("div", {
								className: $.a["ds-footer__main"],
								children:
									(null === (t = n.fields.columns) || void 0 === t
										? void 0
										: t.length) &&
									n.fields.columns.map(function (e, t) {
										var n, r;
										return Object(d.jsxs)(
											"nav",
											{
												className: ""
													.concat($.a["ds-footer-nav"], " ")
													.concat($.a["ds-footer__nav"]),
												children: [
													Object(d.jsx)("div", {
														className: ""
															.concat($.a["ds-footer-nav__heading"], " ")
															.concat($.a["ds-footer-heading"]),
														children: e.fields.title,
													}),
													(null === (n = e.fields.items) || void 0 === n
														? void 0
														: n.length) &&
														e.fields.items.map(function (e, t) {
															var n;
															return "dpNavColumn" === e.sys.contentType.sys.id
																? Object(d.jsxs)(
																		"div",
																		{
																			className:
																				$.a["ds-footer-nav__subsection"],
																			children: [
																				Object(d.jsx)(L.a, {
																					className:
																						$.a["ds-footer-nav__subheading"],
																					path: e.fields.url,
																					children: e.fields.title,
																				}),
																				Object(d.jsx)("ul", {
																					className: $.a["ds-footer-nav__list"],
																					children:
																						(null === (n = e.fields.items) ||
																						void 0 === n
																							? void 0
																							: n.length) &&
																						e.fields.items.map(function (e, t) {
																							return Object(d.jsx)(
																								"li",
																								{
																									className:
																										$.a["ds-footer-nav__item"],
																									children: Object(d.jsx)(L.a, {
																										className:
																											$.a[
																												"ds-footer-nav__link"
																											],
																										path: e.fields.url,
																										children: e.fields.name,
																									}),
																								},
																								t,
																							);
																						}),
																				}),
																			],
																		},
																		t,
																  )
																: null;
														}),
													Object(d.jsx)("ul", {
														className: $.a["ds-footer-nav__list"],
														children:
															(null === (r = e.fields.items) || void 0 === r
																? void 0
																: r.length) &&
															e.fields.items.map(function (e, t) {
																return "dpNavLink" === e.sys.contentType.sys.id
																	? Object(d.jsx)(
																			"li",
																			{
																				className: $.a["ds-footer-nav__item"],
																				children: Object(d.jsx)(L.a, {
																					className: $.a["ds-footer-nav__link"],
																					path: e.fields.url,
																					children: e.fields.name,
																				}),
																			},
																			t,
																	  )
																	: null;
															}),
													}),
												],
											},
											t,
										);
									}),
							}),
							Object(d.jsxs)("div", {
								className: $.a["ds-footer__bottom"],
								children: [
									Object(d.jsx)("div", {
										className: "".concat($.a["ds-footer__logo"], " logo"),
										children: Object(d.jsx)(L.a, {
											className: "logo__wrap",
											path: "/",
											children: Object(d.jsx)("img", {
												loading: "lazy",
												className: "logo__img img-responsive",
												src: Object(I.a)(n.fields.logo.fields.file.url),
												alt: n.fields.logo.fields.title,
												width: "95",
												height: "40",
												title: n.fields.logo.fields.title,
											}),
										}),
									}),
									Object(d.jsx)("div", {
										className: ""
											.concat($.a["ds-footer__soc"], " ")
											.concat($.a["dp-soc"]),
										children: Object(d.jsx)("ul", {
											className: "".concat($.a["dp-soc__list"]),
											children:
												n.fields.socialNetworksList.length &&
												n.fields.socialNetworksList.map(function (e, t) {
													return Object(d.jsx)(
														"li",
														{
															className: "".concat($.a["dp-soc__item"]),
															children: Object(d.jsx)("a", {
																className: "".concat($.a["dp-soc__link"]),
																href: e.fields.link.fields.pageSlug,
																"aria-label": e.fields.blockDescription,
																rel: "noreferrer",
																target: "_blank",
																children: Object(d.jsx)(B, {
																	path: e.fields.icon.fields.file.url,
																}),
															}),
														},
														t,
													);
												}),
										}),
									}),
								],
							}),
						],
					}),
				});
			}
			n("KtyW");
			function te(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function ne(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? te(Object(n), !0).forEach(function (t) {
								Object(l.a)(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: te(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t),
								);
						  });
				}
				return e;
			}
			function re(e) {
				var t,
					n = e.Component,
					r = e.pageProps,
					i = e.deviceProps,
					a = r.parsedInfoData || {},
					o = a.headerInfo,
					s = a.footerInfo,
					c = a.isNewDesign,
					l = Object(T.a)().currentLocale,
					u = Object(p.useState)(!1),
					f = u[0],
					_ = u[1],
					m = Object(p.useState)(!1),
					g = m[0],
					x = m[1],
					y = function () {
						var e = 0.01 * window.innerHeight;
						document.documentElement.style.setProperty(
							"--vh",
							"".concat(e, "px"),
						);
					};
				Object(p.useEffect)(
					function () {
						l && (document.documentElement.lang = Object(j.g)(l));
					},
					[l],
				);
				return (
					Object(p.useEffect)(function () {
						var e,
							t,
							n =
								null === r ||
								void 0 === r ||
								null === (e = r.globalScripts) ||
								void 0 === e ||
								null === (t = e.fields) ||
								void 0 === t
									? void 0
									: t.blocks,
							i =
								null === n || void 0 === n
									? void 0
									: n.find(function (e) {
											var t;
											return (
												"headScripts" ===
												(null === e ||
												void 0 === e ||
												null === (t = e.fields) ||
												void 0 === t
													? void 0
													: t.blockDescription)
											);
									  });
						if (!window.isScriptsInjected) {
							var a = document.createDocumentFragment();
							i.fields.scripts.forEach(function (e) {
								var t = e.fields.scriptCode,
									n = document.createElement("html");
								(n.innerHTML = t),
									Array.from(n.querySelectorAll("script")).forEach(function (
										e,
									) {
										var t = document.createElement("script");
										Array.from(e.attributes).forEach(function (e) {
											return t.setAttribute(e.name, e.value);
										}),
											t.appendChild(document.createTextNode(e.innerHTML)),
											e.parentNode.replaceChild(t, e);
									}),
									n.querySelectorAll("script").forEach(function (e) {
										a.appendChild(e);
									});
							}),
								document.head.insertBefore(a, document.head.firstChild);
							var o = document.createElement("script");
							(o.src = "https://docraptor.com/docraptor-1.0.0.js"),
								document.body.appendChild(o),
								(window.isScriptsInjected = !0),
								setTimeout(function () {
									x(!0);
								}, 1e3);
						}
						return (
							w.a.events.on("routeChangeComplete", function () {
								window.location.hash || document.body.scroll({ top: 0 });
							}),
							window.addEventListener("resize", y),
							window.addEventListener("orientationchange", y),
							y(),
							function () {
								window.removeEventListener("scroll", y),
									window.removeEventListener("orientationchange", y);
							}
						);
					}, []),
					Object(p.useEffect)(
						function () {
							if (g) {
								var e,
									t,
									n =
										null === r ||
										void 0 === r ||
										null === (e = r.globalScripts) ||
										void 0 === e ||
										null === (t = e.fields) ||
										void 0 === t
											? void 0
											: t.blocks,
									i =
										n &&
										(null === n || void 0 === n
											? void 0
											: n.find(function (e) {
													var t;
													return (
														"GA" ===
														(null === e ||
														void 0 === e ||
														null === (t = e.fields) ||
														void 0 === t
															? void 0
															: t.blockDescription)
													);
											  }));
								if (i) {
									var a = i.fields.gtmId;
									v.a.initialize({ gtmId: a });
								}
							}
						},
						[g],
					),
					Object(d.jsx)("div", {
						className: "app-redesign ".concat(
							c ? "" : "app-redesign-padding-top",
						),
						children: Object(d.jsx)(h.a, {
							data: {
								translations:
									null === r ||
									void 0 === r ||
									null === (t = r.parsedInfoData) ||
									void 0 === t
										? void 0
										: t.translations,
							},
							children: Object(d.jsx)(k, {
								children: Object(d.jsxs)(
									b,
									ne(
										ne({}, i),
										{},
										{
											children: [
												o.fields.topPromoInfo &&
													Object(d.jsx)(
														E,
														ne({}, o.fields.topPromoInfo.fields),
													),
												Object(d.jsx)(J, {
													header: o,
													setBackDropState: function () {
														var e =
															arguments.length > 0 &&
															void 0 !== arguments[0] &&
															arguments[0];
														_(e);
													},
												}),
												Object(d.jsxs)("div", {
													className: "informer-sections",
													children: [
														Object(d.jsx)(n, ne({}, r)),
														Object(d.jsx)("div", {
															className: "wrapper__footer",
															children: Object(d.jsx)(ee, { footer: s }),
														}),
													],
												}),
												f && Object(d.jsx)("div", { className: "ds-overlay" }),
											],
										},
									),
								),
							}),
						}),
					})
				);
			}
			re.getInitialProps = (function () {
				var e = Object(c.a)(
					s.a.mark(function e(t) {
						var n, r, i;
						return s.a.wrap(function (e) {
							for (;;)
								switch ((e.prev = e.next)) {
									case 0:
										return (e.next = 2), _.a.getInitialProps(t);
									case 2:
										return (
											(n = e.sent),
											(r = t.ctx),
											(i = C(r)),
											e.abrupt("return", ne({ deviceProps: i }, n))
										);
									case 6:
									case "end":
										return e.stop();
								}
						}, e);
					}),
				);
				return function (t) {
					return e.apply(this, arguments);
				};
			})();
			t.default = re;
		},
		mwSz: function (e, t, n) {
			"use strict";
			var r =
				(this && this.__importDefault) ||
				function (e) {
					return e && e.__esModule ? e : { default: e };
				};
			t.__esModule = !0;
			var i = r(n("CC3I")),
				a = n("vhTo");
			t.default = function (e, t) {
				var n = {};
				return e && "string" === typeof e
					? ((0, i.default)(e, function (e, r) {
							e && r && (n[(0, a.camelCase)(e, t)] = r);
					  }),
					  n)
					: n;
			};
		},
		qpZ2: function (e, t, n) {
			var r = n("fcbB"),
				i = n("MHQ9");
			function a(e) {
				return r.possibleStandardNames[e];
			}
			e.exports = function (e) {
				var t,
					n,
					o,
					s,
					c,
					l = {},
					d = (e = e || {}).type && { reset: !0, submit: !0 }[e.type];
				for (t in e)
					if (((o = e[t]), r.isCustomAttribute(t))) l[t] = o;
					else if ((s = a((n = t.toLowerCase()))))
						switch (
							((c = r.getPropertyInfo(s)),
							("checked" !== s && "value" !== s) || d || (s = a("default" + n)),
							(l[s] = o),
							c && c.type)
						) {
							case r.BOOLEAN:
								l[s] = !0;
								break;
							case r.OVERLOADED_BOOLEAN:
								"" === o && (l[s] = !0);
						}
					else i.PRESERVE_CUSTOM_ATTRIBUTES && (l[t] = o);
				return i.setStyleProp(e.style, l), l;
			};
		},
		sRwl: function (e, t) {
			t.SAME = 0;
			(t.CAMELCASE = 1),
				(t.possibleStandardNames = {
					accept: 0,
					acceptCharset: 1,
					"accept-charset": "acceptCharset",
					accessKey: 1,
					action: 0,
					allowFullScreen: 1,
					alt: 0,
					as: 0,
					async: 0,
					autoCapitalize: 1,
					autoComplete: 1,
					autoCorrect: 1,
					autoFocus: 1,
					autoPlay: 1,
					autoSave: 1,
					capture: 0,
					cellPadding: 1,
					cellSpacing: 1,
					challenge: 0,
					charSet: 1,
					checked: 0,
					children: 0,
					cite: 0,
					class: "className",
					classID: 1,
					className: 1,
					cols: 0,
					colSpan: 1,
					content: 0,
					contentEditable: 1,
					contextMenu: 1,
					controls: 0,
					controlsList: 1,
					coords: 0,
					crossOrigin: 1,
					dangerouslySetInnerHTML: 1,
					data: 0,
					dateTime: 1,
					default: 0,
					defaultChecked: 1,
					defaultValue: 1,
					defer: 0,
					dir: 0,
					disabled: 0,
					disablePictureInPicture: 1,
					disableRemotePlayback: 1,
					download: 0,
					draggable: 0,
					encType: 1,
					enterKeyHint: 1,
					for: "htmlFor",
					form: 0,
					formMethod: 1,
					formAction: 1,
					formEncType: 1,
					formNoValidate: 1,
					formTarget: 1,
					frameBorder: 1,
					headers: 0,
					height: 0,
					hidden: 0,
					high: 0,
					href: 0,
					hrefLang: 1,
					htmlFor: 1,
					httpEquiv: 1,
					"http-equiv": "httpEquiv",
					icon: 0,
					id: 0,
					innerHTML: 1,
					inputMode: 1,
					integrity: 0,
					is: 0,
					itemID: 1,
					itemProp: 1,
					itemRef: 1,
					itemScope: 1,
					itemType: 1,
					keyParams: 1,
					keyType: 1,
					kind: 0,
					label: 0,
					lang: 0,
					list: 0,
					loop: 0,
					low: 0,
					manifest: 0,
					marginWidth: 1,
					marginHeight: 1,
					max: 0,
					maxLength: 1,
					media: 0,
					mediaGroup: 1,
					method: 0,
					min: 0,
					minLength: 1,
					multiple: 0,
					muted: 0,
					name: 0,
					noModule: 1,
					nonce: 0,
					noValidate: 1,
					open: 0,
					optimum: 0,
					pattern: 0,
					placeholder: 0,
					playsInline: 1,
					poster: 0,
					preload: 0,
					profile: 0,
					radioGroup: 1,
					readOnly: 1,
					referrerPolicy: 1,
					rel: 0,
					required: 0,
					reversed: 0,
					role: 0,
					rows: 0,
					rowSpan: 1,
					sandbox: 0,
					scope: 0,
					scoped: 0,
					scrolling: 0,
					seamless: 0,
					selected: 0,
					shape: 0,
					size: 0,
					sizes: 0,
					span: 0,
					spellCheck: 1,
					src: 0,
					srcDoc: 1,
					srcLang: 1,
					srcSet: 1,
					start: 0,
					step: 0,
					style: 0,
					summary: 0,
					tabIndex: 1,
					target: 0,
					title: 0,
					type: 0,
					useMap: 1,
					value: 0,
					width: 0,
					wmode: 0,
					wrap: 0,
					about: 0,
					accentHeight: 1,
					"accent-height": "accentHeight",
					accumulate: 0,
					additive: 0,
					alignmentBaseline: 1,
					"alignment-baseline": "alignmentBaseline",
					allowReorder: 1,
					alphabetic: 0,
					amplitude: 0,
					arabicForm: 1,
					"arabic-form": "arabicForm",
					ascent: 0,
					attributeName: 1,
					attributeType: 1,
					autoReverse: 1,
					azimuth: 0,
					baseFrequency: 1,
					baselineShift: 1,
					"baseline-shift": "baselineShift",
					baseProfile: 1,
					bbox: 0,
					begin: 0,
					bias: 0,
					by: 0,
					calcMode: 1,
					capHeight: 1,
					"cap-height": "capHeight",
					clip: 0,
					clipPath: 1,
					"clip-path": "clipPath",
					clipPathUnits: 1,
					clipRule: 1,
					"clip-rule": "clipRule",
					color: 0,
					colorInterpolation: 1,
					"color-interpolation": "colorInterpolation",
					colorInterpolationFilters: 1,
					"color-interpolation-filters": "colorInterpolationFilters",
					colorProfile: 1,
					"color-profile": "colorProfile",
					colorRendering: 1,
					"color-rendering": "colorRendering",
					contentScriptType: 1,
					contentStyleType: 1,
					cursor: 0,
					cx: 0,
					cy: 0,
					d: 0,
					datatype: 0,
					decelerate: 0,
					descent: 0,
					diffuseConstant: 1,
					direction: 0,
					display: 0,
					divisor: 0,
					dominantBaseline: 1,
					"dominant-baseline": "dominantBaseline",
					dur: 0,
					dx: 0,
					dy: 0,
					edgeMode: 1,
					elevation: 0,
					enableBackground: 1,
					"enable-background": "enableBackground",
					end: 0,
					exponent: 0,
					externalResourcesRequired: 1,
					fill: 0,
					fillOpacity: 1,
					"fill-opacity": "fillOpacity",
					fillRule: 1,
					"fill-rule": "fillRule",
					filter: 0,
					filterRes: 1,
					filterUnits: 1,
					floodOpacity: 1,
					"flood-opacity": "floodOpacity",
					floodColor: 1,
					"flood-color": "floodColor",
					focusable: 0,
					fontFamily: 1,
					"font-family": "fontFamily",
					fontSize: 1,
					"font-size": "fontSize",
					fontSizeAdjust: 1,
					"font-size-adjust": "fontSizeAdjust",
					fontStretch: 1,
					"font-stretch": "fontStretch",
					fontStyle: 1,
					"font-style": "fontStyle",
					fontVariant: 1,
					"font-variant": "fontVariant",
					fontWeight: 1,
					"font-weight": "fontWeight",
					format: 0,
					from: 0,
					fx: 0,
					fy: 0,
					g1: 0,
					g2: 0,
					glyphName: 1,
					"glyph-name": "glyphName",
					glyphOrientationHorizontal: 1,
					"glyph-orientation-horizontal": "glyphOrientationHorizontal",
					glyphOrientationVertical: 1,
					"glyph-orientation-vertical": "glyphOrientationVertical",
					glyphRef: 1,
					gradientTransform: 1,
					gradientUnits: 1,
					hanging: 0,
					horizAdvX: 1,
					"horiz-adv-x": "horizAdvX",
					horizOriginX: 1,
					"horiz-origin-x": "horizOriginX",
					ideographic: 0,
					imageRendering: 1,
					"image-rendering": "imageRendering",
					in2: 0,
					in: 0,
					inlist: 0,
					intercept: 0,
					k1: 0,
					k2: 0,
					k3: 0,
					k4: 0,
					k: 0,
					kernelMatrix: 1,
					kernelUnitLength: 1,
					kerning: 0,
					keyPoints: 1,
					keySplines: 1,
					keyTimes: 1,
					lengthAdjust: 1,
					letterSpacing: 1,
					"letter-spacing": "letterSpacing",
					lightingColor: 1,
					"lighting-color": "lightingColor",
					limitingConeAngle: 1,
					local: 0,
					markerEnd: 1,
					"marker-end": "markerEnd",
					markerHeight: 1,
					markerMid: 1,
					"marker-mid": "markerMid",
					markerStart: 1,
					"marker-start": "markerStart",
					markerUnits: 1,
					markerWidth: 1,
					mask: 0,
					maskContentUnits: 1,
					maskUnits: 1,
					mathematical: 0,
					mode: 0,
					numOctaves: 1,
					offset: 0,
					opacity: 0,
					operator: 0,
					order: 0,
					orient: 0,
					orientation: 0,
					origin: 0,
					overflow: 0,
					overlinePosition: 1,
					"overline-position": "overlinePosition",
					overlineThickness: 1,
					"overline-thickness": "overlineThickness",
					paintOrder: 1,
					"paint-order": "paintOrder",
					panose1: 0,
					"panose-1": "panose1",
					pathLength: 1,
					patternContentUnits: 1,
					patternTransform: 1,
					patternUnits: 1,
					pointerEvents: 1,
					"pointer-events": "pointerEvents",
					points: 0,
					pointsAtX: 1,
					pointsAtY: 1,
					pointsAtZ: 1,
					prefix: 0,
					preserveAlpha: 1,
					preserveAspectRatio: 1,
					primitiveUnits: 1,
					property: 0,
					r: 0,
					radius: 0,
					refX: 1,
					refY: 1,
					renderingIntent: 1,
					"rendering-intent": "renderingIntent",
					repeatCount: 1,
					repeatDur: 1,
					requiredExtensions: 1,
					requiredFeatures: 1,
					resource: 0,
					restart: 0,
					result: 0,
					results: 0,
					rotate: 0,
					rx: 0,
					ry: 0,
					scale: 0,
					security: 0,
					seed: 0,
					shapeRendering: 1,
					"shape-rendering": "shapeRendering",
					slope: 0,
					spacing: 0,
					specularConstant: 1,
					specularExponent: 1,
					speed: 0,
					spreadMethod: 1,
					startOffset: 1,
					stdDeviation: 1,
					stemh: 0,
					stemv: 0,
					stitchTiles: 1,
					stopColor: 1,
					"stop-color": "stopColor",
					stopOpacity: 1,
					"stop-opacity": "stopOpacity",
					strikethroughPosition: 1,
					"strikethrough-position": "strikethroughPosition",
					strikethroughThickness: 1,
					"strikethrough-thickness": "strikethroughThickness",
					string: 0,
					stroke: 0,
					strokeDasharray: 1,
					"stroke-dasharray": "strokeDasharray",
					strokeDashoffset: 1,
					"stroke-dashoffset": "strokeDashoffset",
					strokeLinecap: 1,
					"stroke-linecap": "strokeLinecap",
					strokeLinejoin: 1,
					"stroke-linejoin": "strokeLinejoin",
					strokeMiterlimit: 1,
					"stroke-miterlimit": "strokeMiterlimit",
					strokeWidth: 1,
					"stroke-width": "strokeWidth",
					strokeOpacity: 1,
					"stroke-opacity": "strokeOpacity",
					suppressContentEditableWarning: 1,
					suppressHydrationWarning: 1,
					surfaceScale: 1,
					systemLanguage: 1,
					tableValues: 1,
					targetX: 1,
					targetY: 1,
					textAnchor: 1,
					"text-anchor": "textAnchor",
					textDecoration: 1,
					"text-decoration": "textDecoration",
					textLength: 1,
					textRendering: 1,
					"text-rendering": "textRendering",
					to: 0,
					transform: 0,
					typeof: 0,
					u1: 0,
					u2: 0,
					underlinePosition: 1,
					"underline-position": "underlinePosition",
					underlineThickness: 1,
					"underline-thickness": "underlineThickness",
					unicode: 0,
					unicodeBidi: 1,
					"unicode-bidi": "unicodeBidi",
					unicodeRange: 1,
					"unicode-range": "unicodeRange",
					unitsPerEm: 1,
					"units-per-em": "unitsPerEm",
					unselectable: 0,
					vAlphabetic: 1,
					"v-alphabetic": "vAlphabetic",
					values: 0,
					vectorEffect: 1,
					"vector-effect": "vectorEffect",
					version: 0,
					vertAdvY: 1,
					"vert-adv-y": "vertAdvY",
					vertOriginX: 1,
					"vert-origin-x": "vertOriginX",
					vertOriginY: 1,
					"vert-origin-y": "vertOriginY",
					vHanging: 1,
					"v-hanging": "vHanging",
					vIdeographic: 1,
					"v-ideographic": "vIdeographic",
					viewBox: 1,
					viewTarget: 1,
					visibility: 0,
					vMathematical: 1,
					"v-mathematical": "vMathematical",
					vocab: 0,
					widths: 0,
					wordSpacing: 1,
					"word-spacing": "wordSpacing",
					writingMode: 1,
					"writing-mode": "writingMode",
					x1: 0,
					x2: 0,
					x: 0,
					xChannelSelector: 1,
					xHeight: 1,
					"x-height": "xHeight",
					xlinkActuate: 1,
					"xlink:actuate": "xlinkActuate",
					xlinkArcrole: 1,
					"xlink:arcrole": "xlinkArcrole",
					xlinkHref: 1,
					"xlink:href": "xlinkHref",
					xlinkRole: 1,
					"xlink:role": "xlinkRole",
					xlinkShow: 1,
					"xlink:show": "xlinkShow",
					xlinkTitle: 1,
					"xlink:title": "xlinkTitle",
					xlinkType: 1,
					"xlink:type": "xlinkType",
					xmlBase: 1,
					"xml:base": "xmlBase",
					xmlLang: 1,
					"xml:lang": "xmlLang",
					xmlns: 0,
					"xml:space": "xmlSpace",
					xmlnsXlink: 1,
					"xmlns:xlink": "xmlnsXlink",
					xmlSpace: 1,
					y1: 0,
					y2: 0,
					y: 0,
					yChannelSelector: 1,
					z: 0,
					zoomAndPan: 1,
				});
		},
		sdIs: function (e, t, n) {
			e.exports = {
				BREAKPOINT_XS: "425px",
				BREAKPOINT_SM: "767px",
				BREAKPOINT_MD: "990px",
				BREAKPOINT_LG: "1280px",
				"dp-search": "DpSearch_dp-search__1utJU",
				"dp-search__field": "DpSearch_dp-search__field__2_97H",
				"dp-search__input": "DpSearch_dp-search__input___oMYP",
				"dp-search__send": "DpSearch_dp-search__send__14AEp",
				"dp-search__icon": "DpSearch_dp-search__icon__1lu49",
				"dp-search__submit": "DpSearch_dp-search__submit__3VPgF",
				"dp-search__submit-icon": "DpSearch_dp-search__submit-icon__q0zDG",
				"is-search-active": "DpSearch_is-search-active__3UPJA",
			};
		},
		vhTo: function (e, t, n) {
			"use strict";
			(t.__esModule = !0), (t.camelCase = void 0);
			var r = /^--[a-zA-Z0-9-]+$/,
				i = /-([a-z])/g,
				a = /^[^-]+$/,
				o = /^-(webkit|moz|ms|o|khtml)-/,
				s = /^-(ms)-/,
				c = function (e, t) {
					return t.toUpperCase();
				},
				l = function (e, t) {
					return "".concat(t, "-");
				};
			t.camelCase = function (e, t) {
				return (
					void 0 === t && (t = {}),
					(function (e) {
						return !e || a.test(e) || r.test(e);
					})(e)
						? e
						: ((e = e.toLowerCase()),
						  (e = t.reactCompat ? e.replace(s, l) : e.replace(o, l)).replace(
								i,
								c,
						  ))
				);
			};
		},
		wWlz: function (e, t, n) {
			"use strict";
			var r,
				i = n("Kacz"),
				a = (r = i) && r.__esModule ? r : { default: r };
			var o = {
				tags: function (e) {
					var t = e.id,
						n = e.events,
						r = e.dataLayer,
						i = e.dataLayerName,
						o = e.preview,
						s = "&gtm_auth=" + e.auth,
						c = "&gtm_preview=" + o;
					return (
						t || (0, a.default)("GTM Id is required"),
						{
							iframe:
								'\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' +
								t +
								s +
								c +
								'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
							script:
								"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " +
								JSON.stringify(n).slice(1, -1) +
								"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" +
								s +
								c +
								"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" +
								i +
								"','" +
								t +
								"');",
							dataLayerVar: this.dataLayer(r, i),
						}
					);
				},
				dataLayer: function (e, t) {
					return (
						"\n      window." +
						t +
						" = window." +
						t +
						" || [];\n      window." +
						t +
						".push(" +
						JSON.stringify(e) +
						")"
					);
				},
			};
			e.exports = o;
		},
		xDlj: function (e, t, n) {
			e.exports = {
				BREAKPOINT_XS: "425px",
				BREAKPOINT_SM: "767px",
				BREAKPOINT_MD: "990px",
				BREAKPOINT_LG: "1280px",
				"dp-header-wrap": "DpHeader_dp-header-wrap__mlNXY",
				dpHeader: "DpHeader_dpHeader__P8mYN",
				dpHeader__logo: "DpHeader_dpHeader__logo__2dGLz",
				dpHeader__main: "DpHeader_dpHeader__main__29r5-",
				dpHeader__controls: "DpHeader_dpHeader__controls__2XwPl",
				dpHeader__utils: "DpHeader_dpHeader__utils__2Z2Xw",
				"dp-util-item": "DpHeader_dp-util-item__1Q-MC",
				dpHeader__nav: "DpHeader_dpHeader__nav__KIxLx",
				dpHeader__btns: "DpHeader_dpHeader__btns__3TBOE",
				dpHeader__btn: "DpHeader_dpHeader__btn__4ZGZw",
				active: "DpHeader_active__1_M4G",
				hidden: "DpHeader_hidden__x5erW",
				"dp-utils": "DpHeader_dp-utils__2QLiA",
				"dp-utils__item": "DpHeader_dp-utils__item__25bYn",
				"dp-utils__nav-trigger": "DpHeader_dp-utils__nav-trigger__2ge3c",
				"dp-utils__search": "DpHeader_dp-utils__search__kqos0",
				"dp-util-item__dropdown": "DpHeader_dp-util-item__dropdown__23e8w",
				"dp-util-item__icon": "DpHeader_dp-util-item__icon__30Swf",
				"dp-util-item__text": "DpHeader_dp-util-item__text__2DZg8",
				"dp-navbar__list": "DpHeader_dp-navbar__list__18eoZ",
				"dp-navbar__item": "DpHeader_dp-navbar__item__FAFCr",
				"dp-navbar__link": "DpHeader_dp-navbar__link__28LPp",
				"dp-navbar__icon": "DpHeader_dp-navbar__icon__3uLgP",
				"dp-navbar__dropdown": "DpHeader_dp-navbar__dropdown__3payJ",
				"has-constraint": "DpHeader_has-constraint__1iMX1",
				"dp-navbar-trigger": "DpHeader_dp-navbar-trigger__3zcfD",
				"dp-navbar-trigger__line": "DpHeader_dp-navbar-trigger__line__6I6uf",
				"is-navbar-opened": "DpHeader_is-navbar-opened__D76o0",
				"dp-mob-nav": "DpHeader_dp-mob-nav__3Igm9",
				"dp-mob-nav__main": "DpHeader_dp-mob-nav__main__1jVT7",
				"dp-mob-nav__header": "DpHeader_dp-mob-nav__header__3u2RM",
				"dp-mob-nav__utils": "DpHeader_dp-mob-nav__utils__YLT2z",
				"dp-mob-nav__btns": "DpHeader_dp-mob-nav__btns__20W7f",
				"dp-mob-nav__btn": "DpHeader_dp-mob-nav__btn__2-CL6",
				"dp-mob-nav__items": "DpHeader_dp-mob-nav__items__1bQ6C",
				"dp-mob-nav__item": "DpHeader_dp-mob-nav__item__2brw8",
				"dp-nav-accordion": "DpHeader_dp-nav-accordion__3p1Ip",
				"dp-nav-accordion__header": "DpHeader_dp-nav-accordion__header__3MRua",
				"dp-nav-accordion__header-icon":
					"DpHeader_dp-nav-accordion__header-icon__3rapl",
				"dp-nav-accordion__body": "DpHeader_dp-nav-accordion__body__24Wrw",
				"dp-nav-accordion__subsection":
					"DpHeader_dp-nav-accordion__subsection__3Pnkb",
				"dp-nav-accordion__items": "DpHeader_dp-nav-accordion__items__3hnID",
				"dp-nav-accordion__item": "DpHeader_dp-nav-accordion__item__RHbwO",
				"dp-nav-accordion__link": "DpHeader_dp-nav-accordion__link__Qg7JO",
				"dp-nav-accordion__caption":
					"DpHeader_dp-nav-accordion__caption__eiord",
				"is-expanded": "DpHeader_is-expanded__Qi2av",
				"dp-category": "DpHeader_dp-category__2-nwJ",
				"dp-category__icon": "DpHeader_dp-category__icon__W0aKG",
				"dp-category__main": "DpHeader_dp-category__main__2PAOD",
				"dp-category__heading": "DpHeader_dp-category__heading__1gbS_",
				"dp-category__desc": "DpHeader_dp-category__desc__3Biq-",
				"dp-navbar-categories": "DpHeader_dp-navbar-categories__3Gsgk",
				"dp-navbar-categories__subsection":
					"DpHeader_dp-navbar-categories__subsection__12ysz",
				"dp-navbar-categories__caption":
					"DpHeader_dp-navbar-categories__caption__10V1V",
				"dp-navbar-categories__items":
					"DpHeader_dp-navbar-categories__items__2nYTE",
				"dp-navbar-categories__item":
					"DpHeader_dp-navbar-categories__item__a3p7s",
				"dp-navbar-categories__link":
					"DpHeader_dp-navbar-categories__link__2sB8O",
				logo: "DpHeader_logo__2GMOp",
				sticky: "DpHeader_sticky__2-J-u",
			};
		},
		xPsL: function (e, t) {
			var n = /<([a-zA-Z]+[0-9]?)/,
				r = /<head[^]*>/i,
				i = /<body[^]*>/i,
				a = function () {
					throw new Error(
						"This browser does not support `document.implementation.createHTMLDocument`",
					);
				},
				o = function () {
					throw new Error(
						"This browser does not support `DOMParser.prototype.parseFromString`",
					);
				},
				s = "object" === typeof window && window.DOMParser;
			if ("function" === typeof s) {
				var c = new s();
				a = o = function (e, t) {
					return (
						t && (e = "<" + t + ">" + e + "</" + t + ">"),
						c.parseFromString(e, "text/html")
					);
				};
			}
			if ("object" === typeof document && document.implementation) {
				var l = document.implementation.createHTMLDocument();
				a = function (e, t) {
					return t
						? ((l.documentElement.querySelector(t).innerHTML = e), l)
						: ((l.documentElement.innerHTML = e), l);
				};
			}
			var d,
				p =
					"object" === typeof document
						? document.createElement("template")
						: {};
			p.content &&
				(d = function (e) {
					return (p.innerHTML = e), p.content.childNodes;
				}),
				(e.exports = function (e) {
					var t,
						s,
						c,
						l,
						p = e.match(n);
					switch ((p && p[1] && (t = p[1].toLowerCase()), t)) {
						case "html":
							return (
								(s = o(e)),
								r.test(e) ||
									((c = s.querySelector("head")) &&
										c.parentNode.removeChild(c)),
								i.test(e) ||
									((c = s.querySelector("body")) &&
										c.parentNode.removeChild(c)),
								s.querySelectorAll("html")
							);
						case "head":
						case "body":
							return (
								(l = (s = a(e)).querySelectorAll(t)),
								i.test(e) && r.test(e) ? l[0].parentNode.childNodes : l
							);
						default:
							return d
								? d(e)
								: (c = a(e, "body").querySelector("body")).childNodes;
					}
				});
		},
		xSxP: function (e, t, n) {
			"use strict";
			var r;
			n.r(t),
				n.d(t, "Node", function () {
					return i;
				}),
				n.d(t, "DataNode", function () {
					return a;
				}),
				n.d(t, "Text", function () {
					return o;
				}),
				n.d(t, "Comment", function () {
					return s;
				}),
				n.d(t, "ProcessingInstruction", function () {
					return c;
				}),
				n.d(t, "NodeWithChildren", function () {
					return l;
				}),
				n.d(t, "CDATA", function () {
					return d;
				}),
				n.d(t, "Document", function () {
					return p;
				}),
				n.d(t, "Element", function () {
					return u;
				}),
				n.d(t, "isTag", function () {
					return h;
				}),
				n.d(t, "isCDATA", function () {
					return f;
				}),
				n.d(t, "isText", function () {
					return _;
				}),
				n.d(t, "isComment", function () {
					return m;
				}),
				n.d(t, "isDirective", function () {
					return v;
				}),
				n.d(t, "isDocument", function () {
					return g;
				}),
				n.d(t, "hasChildren", function () {
					return b;
				}),
				n.d(t, "cloneNode", function () {
					return x;
				}),
				n.d(t, "DomHandler", function () {
					return y;
				}),
				(function (e) {
					(e.Root = "root"),
						(e.Text = "text"),
						(e.Directive = "directive"),
						(e.Comment = "comment"),
						(e.Script = "script"),
						(e.Style = "style"),
						(e.Tag = "tag"),
						(e.CDATA = "cdata"),
						(e.Doctype = "doctype");
				})(r || (r = {}));
			r.Root,
				r.Text,
				r.Directive,
				r.Comment,
				r.Script,
				r.Style,
				r.Tag,
				r.CDATA,
				r.Doctype;
			class i {
				constructor() {
					(this.parent = null),
						(this.prev = null),
						(this.next = null),
						(this.startIndex = null),
						(this.endIndex = null);
				}
				get parentNode() {
					return this.parent;
				}
				set parentNode(e) {
					this.parent = e;
				}
				get previousSibling() {
					return this.prev;
				}
				set previousSibling(e) {
					this.prev = e;
				}
				get nextSibling() {
					return this.next;
				}
				set nextSibling(e) {
					this.next = e;
				}
				cloneNode(e = !1) {
					return x(this, e);
				}
			}
			class a extends i {
				constructor(e) {
					super(), (this.data = e);
				}
				get nodeValue() {
					return this.data;
				}
				set nodeValue(e) {
					this.data = e;
				}
			}
			class o extends a {
				constructor() {
					super(...arguments), (this.type = r.Text);
				}
				get nodeType() {
					return 3;
				}
			}
			class s extends a {
				constructor() {
					super(...arguments), (this.type = r.Comment);
				}
				get nodeType() {
					return 8;
				}
			}
			class c extends a {
				constructor(e, t) {
					super(t), (this.name = e), (this.type = r.Directive);
				}
				get nodeType() {
					return 1;
				}
			}
			class l extends i {
				constructor(e) {
					super(), (this.children = e);
				}
				get firstChild() {
					var e;
					return null !== (e = this.children[0]) && void 0 !== e ? e : null;
				}
				get lastChild() {
					return this.children.length > 0
						? this.children[this.children.length - 1]
						: null;
				}
				get childNodes() {
					return this.children;
				}
				set childNodes(e) {
					this.children = e;
				}
			}
			class d extends l {
				constructor() {
					super(...arguments), (this.type = r.CDATA);
				}
				get nodeType() {
					return 4;
				}
			}
			class p extends l {
				constructor() {
					super(...arguments), (this.type = r.Root);
				}
				get nodeType() {
					return 9;
				}
			}
			class u extends l {
				constructor(
					e,
					t,
					n = [],
					i = "script" === e ? r.Script : "style" === e ? r.Style : r.Tag,
				) {
					super(n), (this.name = e), (this.attribs = t), (this.type = i);
				}
				get nodeType() {
					return 1;
				}
				get tagName() {
					return this.name;
				}
				set tagName(e) {
					this.name = e;
				}
				get attributes() {
					return Object.keys(this.attribs).map((e) => {
						var t, n;
						return {
							name: e,
							value: this.attribs[e],
							namespace:
								null === (t = this["x-attribsNamespace"]) || void 0 === t
									? void 0
									: t[e],
							prefix:
								null === (n = this["x-attribsPrefix"]) || void 0 === n
									? void 0
									: n[e],
						};
					});
				}
			}
			function h(e) {
				return (
					(t = e).type === r.Tag || t.type === r.Script || t.type === r.Style
				);
				var t;
			}
			function f(e) {
				return e.type === r.CDATA;
			}
			function _(e) {
				return e.type === r.Text;
			}
			function m(e) {
				return e.type === r.Comment;
			}
			function v(e) {
				return e.type === r.Directive;
			}
			function g(e) {
				return e.type === r.Root;
			}
			function b(e) {
				return Object.prototype.hasOwnProperty.call(e, "children");
			}
			function x(e, t = !1) {
				let n;
				if (_(e)) n = new o(e.data);
				else if (m(e)) n = new s(e.data);
				else if (h(e)) {
					const r = t ? w(e.children) : [],
						i = new u(e.name, { ...e.attribs }, r);
					r.forEach((e) => (e.parent = i)),
						null != e.namespace && (i.namespace = e.namespace),
						e["x-attribsNamespace"] &&
							(i["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }),
						e["x-attribsPrefix"] &&
							(i["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }),
						(n = i);
				} else if (f(e)) {
					const r = t ? w(e.children) : [],
						i = new d(r);
					r.forEach((e) => (e.parent = i)), (n = i);
				} else if (g(e)) {
					const r = t ? w(e.children) : [],
						i = new p(r);
					r.forEach((e) => (e.parent = i)),
						e["x-mode"] && (i["x-mode"] = e["x-mode"]),
						(n = i);
				} else {
					if (!v(e)) throw new Error("Not implemented yet: " + e.type);
					{
						const t = new c(e.name, e.data);
						null != e["x-name"] &&
							((t["x-name"] = e["x-name"]),
							(t["x-publicId"] = e["x-publicId"]),
							(t["x-systemId"] = e["x-systemId"])),
							(n = t);
					}
				}
				return (
					(n.startIndex = e.startIndex),
					(n.endIndex = e.endIndex),
					null != e.sourceCodeLocation &&
						(n.sourceCodeLocation = e.sourceCodeLocation),
					n
				);
			}
			function w(e) {
				const t = e.map((e) => x(e, !0));
				for (let n = 1; n < t.length; n++)
					(t[n].prev = t[n - 1]), (t[n - 1].next = t[n]);
				return t;
			}
			const j = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 };
			class y {
				constructor(e, t, n) {
					(this.dom = []),
						(this.root = new p(this.dom)),
						(this.done = !1),
						(this.tagStack = [this.root]),
						(this.lastNode = null),
						(this.parser = null),
						"function" === typeof t && ((n = t), (t = j)),
						"object" === typeof e && ((t = e), (e = void 0)),
						(this.callback = null !== e && void 0 !== e ? e : null),
						(this.options = null !== t && void 0 !== t ? t : j),
						(this.elementCB = null !== n && void 0 !== n ? n : null);
				}
				onparserinit(e) {
					this.parser = e;
				}
				onreset() {
					(this.dom = []),
						(this.root = new p(this.dom)),
						(this.done = !1),
						(this.tagStack = [this.root]),
						(this.lastNode = null),
						(this.parser = null);
				}
				onend() {
					this.done ||
						((this.done = !0), (this.parser = null), this.handleCallback(null));
				}
				onerror(e) {
					this.handleCallback(e);
				}
				onclosetag() {
					this.lastNode = null;
					const e = this.tagStack.pop();
					this.options.withEndIndices && (e.endIndex = this.parser.endIndex),
						this.elementCB && this.elementCB(e);
				}
				onopentag(e, t) {
					const n = this.options.xmlMode ? r.Tag : void 0,
						i = new u(e, t, void 0, n);
					this.addNode(i), this.tagStack.push(i);
				}
				ontext(e) {
					const { lastNode: t } = this;
					if (t && t.type === r.Text)
						(t.data += e),
							this.options.withEndIndices &&
								(t.endIndex = this.parser.endIndex);
					else {
						const t = new o(e);
						this.addNode(t), (this.lastNode = t);
					}
				}
				oncomment(e) {
					if (this.lastNode && this.lastNode.type === r.Comment)
						return void (this.lastNode.data += e);
					const t = new s(e);
					this.addNode(t), (this.lastNode = t);
				}
				oncommentend() {
					this.lastNode = null;
				}
				oncdatastart() {
					const e = new o(""),
						t = new d([e]);
					this.addNode(t), (e.parent = t), (this.lastNode = e);
				}
				oncdataend() {
					this.lastNode = null;
				}
				onprocessinginstruction(e, t) {
					const n = new c(e, t);
					this.addNode(n);
				}
				handleCallback(e) {
					if ("function" === typeof this.callback) this.callback(e, this.dom);
					else if (e) throw e;
				}
				addNode(e) {
					const t = this.tagStack[this.tagStack.length - 1],
						n = t.children[t.children.length - 1];
					this.options.withStartIndices &&
						(e.startIndex = this.parser.startIndex),
						this.options.withEndIndices && (e.endIndex = this.parser.endIndex),
						t.children.push(e),
						n && ((e.prev = n), (n.next = e)),
						(e.parent = t),
						(this.lastNode = null);
				}
			}
			t.default = y;
		},
		"zGn+": function (e, t, n) {
			e.exports = {
				BREAKPOINT_XS: "425px",
				BREAKPOINT_SM: "767px",
				BREAKPOINT_MD: "990px",
				BREAKPOINT_LG: "1280px",
				root: "TopPromo_root__2ciki",
				title: "TopPromo_title__an65K",
				links: "TopPromo_links__3McVW",
				link: "TopPromo_link__2z2XZ",
				divider: "TopPromo_divider__3QEr8",
			};
		},
	},
	[[2, 1, 2, 0, 3]],
]);
