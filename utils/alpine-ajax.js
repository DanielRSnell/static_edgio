(() => {
	function N(e) {
		let t = e.getAttribute("x-target");
		return t ? t.split(" ") : [e.id];
	}
	function L(e = []) {
		if (((e = e.filter((t) => t)), e.length === 0)) throw new R(el);
		return e;
	}
	function F(e = []) {
		return (
			document.querySelectorAll("[x-sync]").forEach((t) => {
				if (!t.id) throw new R(t);
				e.includes(t.id) || e.push(t.id);
			}),
			e
		);
	}
	function j(e) {
		return e.hasAttribute("x-target");
	}
	var R = class extends Error {
			constructor(t) {
				let i = (t.outerHTML.match(/<[^>]+>/) ?? [])[0] ?? "[Element]";
				super(`${i} is missing an ID to target.`),
					(this.name = "Target Missing ID");
			}
		},
		_ = class extends Error {
			constructor(t) {
				let i = (t.outerHTML.match(/<[^>]+>/) ?? [])[0] ?? "[Element]";
				super(`${i} received a failed response.`),
					(this.name = "Failed Response");
			}
		};
	function I(e) {
		return e.closest("[data-source]")?.dataset.source;
	}
	function ie(e) {
		let t = document.createElement("template");
		return (t.innerHTML = e), t.content.firstElementChild;
	}
	function ae(e) {
		return e.nodeType === 3 || e.nodeType === 8;
	}
	var c = {
			replace(e, t, i) {
				let r = e.indexOf(t);
				if (r === -1) throw "Cant find element in children";
				return t.replaceWith(i), (e[r] = i), e;
			},
			before(e, t, i) {
				let r = e.indexOf(t);
				if (r === -1) throw "Cant find element in children";
				return t.before(i), e.splice(r, 0, i), e;
			},
			append(e, t, i) {
				let r = e[e.length - 1];
				return i(t), e.push(t), e;
			},
			remove(e, t) {
				if (e.indexOf(t) === -1) throw "Cant find element in children";
				return t.remove(), e.filter((r) => r !== t);
			},
			first(e) {
				return this.teleportTo(e[0]);
			},
			next(e, t) {
				let i = e.indexOf(t);
				if (i !== -1) return this.teleportTo(this.teleportBack(e[i + 1]));
			},
			teleportTo(e) {
				return e && (e._x_teleport ? e._x_teleport : e);
			},
			teleportBack(e) {
				return e && (e._x_teleportBack ? e._x_teleportBack : e);
			},
		},
		oe = () => {},
		ue = () => {};
	function G(e, t, i) {
		let r, a, l, m, T, x, g, E, b, k;
		function M(n = {}) {
			let o = (p) => p.getAttribute("key"),
				d = () => {};
			(T = n.updating || d),
				(x = n.updated || d),
				(g = n.removing || d),
				(E = n.removed || d),
				(b = n.adding || d),
				(k = n.added || d),
				(l = n.key || o),
				(m = n.lookahead || !1);
		}
		function $(n, o) {
			if (C(n, o)) return ee(n, o);
			let d = !1;
			if (!q(T, n, o, () => (d = !0))) {
				if ((window.Alpine && le(n, o, () => (d = !0)), ae(o))) {
					te(n, o), x(n, o);
					return;
				}
				d || ne(n, o),
					x(n, o),
					U(Array.from(n.childNodes), Array.from(o.childNodes), (p) => {
						n.appendChild(p);
					});
			}
		}
		function C(n, o) {
			return (
				n.nodeType != o.nodeType || n.nodeName != o.nodeName || S(n) != S(o)
			);
		}
		function ee(n, o) {
			if (q(g, n)) return;
			let d = o.cloneNode(!0);
			q(b, d) || (c.replace([n], n, d), E(n), k(d));
		}
		function te(n, o) {
			let d = o.nodeValue;
			n.nodeValue !== d && (n.nodeValue = d);
		}
		function ne(n, o) {
			if ((n._x_isShown && !o._x_isShown) || (!n._x_isShown && o._x_isShown))
				return;
			let d = Array.from(n.attributes),
				p = Array.from(o.attributes);
			for (let h = d.length - 1; h >= 0; h--) {
				let s = d[h].name;
				o.hasAttribute(s) || n.removeAttribute(s);
			}
			for (let h = p.length - 1; h >= 0; h--) {
				let s = p[h].name,
					u = p[h].value;
				n.getAttribute(s) !== u && n.setAttribute(s, u);
			}
		}
		function U(n, o, d) {
			let p = {},
				h = {},
				s = c.first(o),
				u = c.first(n);
			for (; s; ) {
				let w = S(s),
					v = S(u);
				if (!u)
					if (w && h[w]) {
						let f = h[w];
						(n = c.append(n, f, d)), (u = f);
					} else {
						if (!q(b, s)) {
							let f = s.cloneNode(!0);
							(n = c.append(n, f, d)), k(f);
						}
						s = c.next(o, s);
						continue;
					}
				let K = (f) => f.nodeType === 8 && f.textContent === " __BLOCK__ ",
					H = (f) => f.nodeType === 8 && f.textContent === " __ENDBLOCK__ ";
				if (K(s) && K(u)) {
					let f = [],
						D,
						A = 0;
					for (; u; ) {
						let y = c.next(n, u);
						if (K(y)) A++;
						else if (H(y) && A > 0) A--;
						else if (H(y) && A === 0) {
							(u = c.next(n, y)), (D = y);
							break;
						}
						f.push(y), (u = y);
					}
					let W = [];
					for (A = 0; s; ) {
						let y = c.next(o, s);
						if (K(y)) A++;
						else if (H(y) && A > 0) A--;
						else if (H(y) && A === 0) {
							s = c.next(o, y);
							break;
						}
						W.push(y), (s = y);
					}
					U(f, W, (y) => D.before(y));
					continue;
				}
				if (u.nodeType === 1 && m) {
					let f = c.next(o, s),
						D = !1;
					for (; !D && f; )
						u.isEqualNode(f) && ((D = !0), ([n, u] = P(n, s, u)), (v = S(u))),
							(f = c.next(o, f));
				}
				if (w !== v) {
					if (!w && v) {
						(h[v] = u),
							([n, u] = P(n, s, u)),
							(n = c.remove(n, h[v])),
							(u = c.next(n, u)),
							(s = c.next(o, s));
						continue;
					}
					if (
						(w && !v && p[w] && ((n = c.replace(n, u, p[w])), (u = p[w])),
						w && v)
					) {
						let f = p[w];
						if (f) (h[v] = u), (n = c.replace(n, u, f)), (u = f);
						else {
							(h[v] = u),
								([n, u] = P(n, s, u)),
								(n = c.remove(n, h[v])),
								(u = c.next(n, u)),
								(s = c.next(o, s));
							continue;
						}
					}
				}
				let re = u && c.next(n, u);
				$(u, s), (s = s && c.next(o, s)), (u = re);
			}
			let V = [];
			for (; u; ) q(g, u) || V.push(u), (u = c.next(n, u));
			for (; V.length; ) {
				let w = V.shift();
				w.remove(), E(w);
			}
		}
		function S(n) {
			return n && n.nodeType === 1 && l(n);
		}
		function ve(n) {
			let o = {};
			return (
				n.forEach((d) => {
					let p = S(d);
					p && (o[p] = d);
				}),
				o
			);
		}
		function P(n, o, d) {
			if (!q(b, o)) {
				let p = o.cloneNode(!0);
				return (n = c.before(n, d, p)), k(p), [n, p];
			}
			return [n, o];
		}
		return (
			M(i),
			(r = e),
			(a = typeof t == "string" ? ie(t) : t),
			window.Alpine &&
				window.Alpine.closestDataStack &&
				!e._x_dataStack &&
				((a._x_dataStack = window.Alpine.closestDataStack(e)),
				a._x_dataStack && window.Alpine.clone(e, a)),
			$(e, a),
			(r = void 0),
			(a = void 0),
			e
		);
	}
	G.step = () => oe();
	G.log = (e) => {
		ue = e;
	};
	function q(e, ...t) {
		let i = !1;
		return e(...t, () => (i = !0)), i;
	}
	function le(e, t, i) {
		e.nodeType === 1 && e._x_dataStack && window.Alpine.clone(e, t);
	}
	var B = {},
		se = {
			before(e, t) {
				return e.before(...t.childNodes), e;
			},
			replace(e, t) {
				return e.replaceWith(t), t;
			},
			update(e, t) {
				return e.replaceChildren(...t.childNodes), e;
			},
			prepend(e, t) {
				return e.prepend(...t.childNodes), e;
			},
			append(e, t) {
				return e.append(...t.childNodes), e;
			},
			after(e, t) {
				return e.after(...t.childNodes), e;
			},
			remove(e) {
				return e.remove(), null;
			},
			morph(e, t) {
				return G(e, t), document.getElementById(t.id);
			},
		};
	async function O(e, t, i, r = !0) {
		let a = (g, E = {}) =>
			i.dispatchEvent(
				new CustomEvent(g, {
					detail: E,
					bubbles: !0,
					composed: !0,
					cancelable: !0,
				}),
			);
		if ((r || (a = () => !0), !a("ajax:before"))) return;
		t.forEach((g) => {
			let E = document.getElementById(g);
			E && E.setAttribute("aria-busy", "true");
		});
		let l = await de(e);
		if (
			(l.ok ? a("ajax:success", l) : a("ajax:error", l),
			a("ajax:after", l),
			!l.html)
		)
			return;
		let m = document.createRange().createContextualFragment(l.html),
			T = t.map((g) => {
				let E = m.getElementById(g),
					b = document.getElementById(g),
					k = b.getAttribute("x-arrange") || "replace";
				if (!E) {
					if (!a("ajax:missing", l)) return;
					if (
						(b.hasAttribute("x-sync") ||
							console.warn(`Target #${g} not found in AJAX response.`),
						l.ok)
					)
						return z(k, b, b.cloneNode(!1));
					throw new _(i);
				}
				let M = z(k, b, E);
				return M && (M.dataset.source = l.url), M;
			}),
			x = i.getAttribute("x-focus");
		return x && me(document.getElementById(x)), T;
	}
	function z(e, t, i) {
		return se[e](t, i);
	}
	async function de({ method: e, action: t, body: i, referrer: r }) {
		let a,
			l = (x) => x,
			m = (x) => x;
		if (e === "GET") {
			if (((a = ce(t)), fe(t))) return a;
			(l = (x) => X(t, (g) => g.resolve(x))),
				(m = (x) => X(t, (g) => g.reject(x)));
		}
		r = r || window.location.href;
		let T = fetch(t, {
			headers: { "X-Alpine-Request": "true" },
			referrer: r,
			method: e,
			body: i,
		})
			.then(pe)
			.then(l)
			.catch(m);
		return e === "GET" ? a : T;
	}
	function ce(e) {
		B[e] || (B[e] = []);
		let t = {},
			i = new Promise((r, a) => {
				(t.resolve = r), (t.reject = a);
			});
		return B[e].push(t), i;
	}
	function fe(e) {
		return B[e].length > 1;
	}
	function X(e, t) {
		(B[e] || []).forEach(t), (B[e] = void 0);
	}
	function pe(e) {
		return e.text().then((t) => ((e.html = t), e));
	}
	function me(e) {
		setTimeout(() => {
			e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"), e.focus();
		}, 0);
	}
	function J(e) {
		let t = async (i) => {
			let r = i.target;
			if (!ye(r) || !j(r)) return;
			i.preventDefault(), i.stopPropagation();
			let a = F(L(N(r))),
				l = he(r);
			try {
				return await O(l, a, r);
			} catch (m) {
				if (m instanceof _) {
					console.warn(m.message), (window.location.href = r.href);
					return;
				}
				throw m;
			}
		};
		return (
			e.addEventListener("click", t), () => e.removeEventListener("click", t)
		);
	}
	function he(e) {
		return { method: "GET", action: e.href, referrer: I(e), body: null };
	}
	function ye(e) {
		return e.href && !e.hash && e.origin == location.origin;
	}
	function Q(e) {
		let t = async (i) => {
			let r = i.target;
			if (!j(r)) return;
			i.preventDefault(), i.stopPropagation();
			let a = F(L(N(r))),
				l = ge(r, i.submitter);
			try {
				return await xe(i.submitter, () => O(l, a, r));
			} catch (m) {
				if (m instanceof _) {
					console.warn(m.message),
						r.removeAttribute("x-target"),
						r.requestSubmit(i.submitter);
					return;
				}
				throw m;
			}
		};
		return (
			e.addEventListener("submit", t), () => e.removeEventListener("submit", t)
		);
	}
	function ge(e, t = null) {
		let i = (e.getAttribute("method") || "GET").toUpperCase(),
			r = I(e),
			a = e.getAttribute("action") || r || window.location.href,
			l = new FormData(e);
		return (
			t && t.name && l.append(t.name, t.value),
			i === "GET" && ((a = we(l, a)), (l = null)),
			{ method: i, action: a, body: l, referrer: r }
		);
	}
	async function xe(e, t) {
		if (!e) return await t();
		let i = (a) => a.preventDefault();
		e.setAttribute("aria-disabled", "true"), e.addEventListener("click", i);
		let r = await t();
		return (
			e.removeAttribute("aria-disabled"), e.removeEventListener("click", i), r
		);
	}
	function we(e, t) {
		let i = Array.from(e.entries()).filter(([r, a]) => a !== "" || a !== null);
		if (i.length) {
			let r = t.split("#");
			(t = r[0]),
				t.includes("?") ? (t += "&") : (t += "?"),
				(t += new URLSearchParams(i));
			let a = r[1];
			a && (t += "#" + a);
		}
		return t;
	}
	var Y = new WeakMap();
	function Ee(e) {
		let t =
				e instanceof Element ? e : e instanceof Node ? e.parentElement : null,
			i = t ? t.closest("input, button") : null;
		return i?.type == "submit" ? i : null;
	}
	function be(e) {
		let t = Ee(e.target);
		t && t.form && Y.set(t.form, t);
	}
	(function () {
		if ("submitter" in Event.prototype) return;
		let e = window.Event.prototype;
		if ("SubmitEvent" in window && /Apple Computer/.test(navigator.vendor))
			e = window.SubmitEvent.prototype;
		else if ("SubmitEvent" in window) return;
		addEventListener("click", be, !0),
			Object.defineProperty(e, "submitter", {
				get() {
					if (this.type == "submit" && this.target instanceof HTMLFormElement)
						return Y.get(this.target);
				},
			});
	})();
	(function (e) {
		if (typeof e.requestSubmit == "function") return;
		e.requestSubmit = function (r) {
			r
				? (t(r, this), r.click())
				: ((r = document.createElement("input")),
				  (r.type = "submit"),
				  (r.hidden = !0),
				  this.appendChild(r),
				  r.click(),
				  this.removeChild(r));
		};
		function t(r, a) {
			r instanceof HTMLElement ||
				i(TypeError, "parameter 1 is not of type 'HTMLElement'"),
				r.type == "submit" ||
					i(TypeError, "The specified element is not a submit button"),
				r.form == a ||
					i(
						DOMException,
						"The specified element is not owned by this form element",
						"NotFoundError",
					);
		}
		function i(r, a, l) {
			throw new r(
				"Failed to execute 'requestSubmit' on 'HTMLFormElement': " + a + ".",
				l,
			);
		}
	})(HTMLFormElement.prototype);
	function Z(e) {
		Q(window),
			J(window),
			e.magic("ajax", (t) => (i, r = {}) => {
				let a = r.target ? r.target.split(" ") : N(t);
				(a = L(a)), (a = r.sync ? F(a) : a);
				let l = null;
				if (r.body)
					if (r.body instanceof HTMLFormElement) l = new FormData(r.body);
					else {
						l = new FormData();
						for (let T in r.body) l.append(T, r.body[T]);
					}
				let m = {
					action: i,
					method: r.method ? r.method.toUpperCase() : "GET",
					body: l,
					referrer: I(t),
				};
				return O(m, a, t, !!r.events);
			}),
			e.addInitSelector(() => `[${e.prefixed("load")}]`),
			e.directive("load", (t, { expression: i }, { evaluate: r }) =>
				typeof i == "string" ? !!i.trim() && r(i) : r(i),
			);
	}
	document.addEventListener("alpine:initializing", () => {
		Z(window.Alpine);
	});
})();
