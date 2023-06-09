(() => {
	function I(t) {
		let l = document.createElement("template");
		return (l.innerHTML = t), l.content.firstElementChild;
	}
	function P(t) {
		return t.nodeType === 3 || t.nodeType === 8;
	}
	var a = {
		replace(t, l, d) {
			let s = t.indexOf(l);
			if (s === -1) throw "Cant find element in children";
			return l.replaceWith(d), (t[s] = d), t;
		},
		before(t, l, d) {
			let s = t.indexOf(l);
			if (s === -1) throw "Cant find element in children";
			return l.before(d), t.splice(s, 0, d), t;
		},
		append(t, l, d) {
			let s = t[t.length - 1];
			return d(l), t.push(l), t;
		},
		remove(t, l) {
			if (t.indexOf(l) === -1) throw "Cant find element in children";
			return l.remove(), t.filter((s) => s !== l);
		},
		first(t) {
			return this.teleportTo(t[0]);
		},
		next(t, l) {
			let d = t.indexOf(l);
			if (d !== -1) return this.teleportTo(this.teleportBack(t[d + 1]));
		},
		teleportTo(t) {
			return t && (t._x_teleport ? t._x_teleport : t);
		},
		teleportBack(t) {
			return t && (t._x_teleportBack ? t._x_teleportBack : t);
		},
	};
	var Q = () => {},
		U = () => {};
	function N(t, l, d) {
		Y();
		let s, _, b, D, L, h, S, O, v, T;
		function z(e = {}) {
			let n = (p) => p.getAttribute("key"),
				u = () => {};
			(L = e.updating || u),
				(h = e.updated || u),
				(S = e.removing || u),
				(O = e.removed || u),
				(v = e.adding || u),
				(T = e.added || u),
				(b = e.key || n),
				(D = e.lookahead || !1);
		}
		function M(e, n) {
			if (G(e, n)) return H(e, n);
			let u = !1;
			if (!g(L, e, n, () => (u = !0))) {
				if ((window.Alpine && X(e, n, () => (u = !0)), P(n))) {
					R(e, n), h(e, n);
					return;
				}
				u || W(e, n),
					h(e, n),
					V(Array.from(e.childNodes), Array.from(n.childNodes), (p) => {
						e.appendChild(p);
					});
			}
		}
		function G(e, n) {
			return (
				e.nodeType != n.nodeType || e.nodeName != n.nodeName || A(e) != A(n)
			);
		}
		function H(e, n) {
			if (g(S, e)) return;
			let u = n.cloneNode(!0);
			g(v, u) || (a.replace([e], e, u), O(e), T(u));
		}
		function R(e, n) {
			let u = n.nodeValue;
			e.nodeValue !== u && (e.nodeValue = u);
		}
		function W(e, n) {
			if ((e._x_isShown && !n._x_isShown) || (!e._x_isShown && n._x_isShown))
				return;
			let u = Array.from(e.attributes),
				p = Array.from(n.attributes);
			for (let f = u.length - 1; f >= 0; f--) {
				let r = u[f].name;
				n.hasAttribute(r) || e.removeAttribute(r);
			}
			for (let f = p.length - 1; f >= 0; f--) {
				let r = p[f].name,
					i = p[f].value;
				e.getAttribute(r) !== i && e.setAttribute(r, i);
			}
		}
		function V(e, n, u) {
			let p = {},
				f = {},
				r = a.first(n),
				i = a.first(e);
			for (; r; ) {
				let x = A(r),
					y = A(i);
				if (!i)
					if (x && f[x]) {
						let o = f[x];
						(e = a.append(e, o, u)), (i = o);
					} else {
						if (!g(v, r)) {
							let o = r.cloneNode(!0);
							(e = a.append(e, o, u)), T(o);
						}
						r = a.next(n, r);
						continue;
					}
				let E = (o) => o.nodeType === 8 && o.textContent === " __BLOCK__ ",
					m = (o) => o.nodeType === 8 && o.textContent === " __ENDBLOCK__ ";
				if (E(r) && E(i)) {
					let o = [],
						k,
						w = 0;
					for (; i; ) {
						let c = a.next(e, i);
						if (E(c)) w++;
						else if (m(c) && w > 0) w--;
						else if (m(c) && w === 0) {
							(i = a.next(e, c)), (k = c);
							break;
						}
						o.push(c), (i = c);
					}
					let F = [];
					for (w = 0; r; ) {
						let c = a.next(n, r);
						if (E(c)) w++;
						else if (m(c) && w > 0) w--;
						else if (m(c) && w === 0) {
							r = a.next(n, c);
							break;
						}
						F.push(c), (r = c);
					}
					V(o, F, (c) => k.before(c));
					continue;
				}
				if (i.nodeType === 1 && D) {
					let o = a.next(n, r),
						k = !1;
					for (; !k && o; )
						i.isEqualNode(o) && ((k = !0), ([e, i] = K(e, r, i)), (y = A(i))),
							(o = a.next(n, o));
				}
				if (x !== y) {
					if (!x && y) {
						(f[y] = i),
							([e, i] = K(e, r, i)),
							(e = a.remove(e, f[y])),
							(i = a.next(e, i)),
							(r = a.next(n, r));
						continue;
					}
					if (
						(x && !y && p[x] && ((e = a.replace(e, i, p[x])), (i = p[x])),
						x && y)
					) {
						let o = p[x];
						if (o) (f[y] = i), (e = a.replace(e, i, o)), (i = o);
						else {
							(f[y] = i),
								([e, i] = K(e, r, i)),
								(e = a.remove(e, f[y])),
								(i = a.next(e, i)),
								(r = a.next(n, r));
							continue;
						}
					}
				}
				let J = i && a.next(e, i);
				M(i, r), (r = r && a.next(n, r)), (i = J);
			}
			let B = [];
			for (; i; ) g(S, i) || B.push(i), (i = a.next(e, i));
			for (; B.length; ) {
				let x = B.shift();
				x.remove(), O(x);
			}
		}
		function A(e) {
			return e && e.nodeType === 1 && b(e);
		}
		function Z(e) {
			let n = {};
			return (
				e.forEach((u) => {
					let p = A(u);
					p && (n[p] = u);
				}),
				n
			);
		}
		function K(e, n, u) {
			if (!g(v, n)) {
				let p = n.cloneNode(!0);
				return (e = a.before(e, u, p)), T(p), [e, p];
			}
			return [e, n];
		}
		return (
			z(d),
			(s = t),
			(_ = typeof l == "string" ? I(l) : l),
			window.Alpine &&
				window.Alpine.closestDataStack &&
				!t._x_dataStack &&
				((_._x_dataStack = window.Alpine.closestDataStack(t)),
				_._x_dataStack && window.Alpine.clone(t, _)),
			M(t, _),
			(s = void 0),
			(_ = void 0),
			t
		);
	}
	N.step = () => Q();
	N.log = (t) => {
		U = t;
	};
	function g(t, ...l) {
		let d = !1;
		return t(...l, () => (d = !0)), d;
	}
	function X(t, l, d) {
		t.nodeType === 1 && t._x_dataStack && window.Alpine.clone(t, l);
	}
	var $ = !1;
	function Y() {
		if ($) return;
		$ = !0;
		let t = Element.prototype.setAttribute,
			l = document.createElement("div");
		Element.prototype.setAttribute = function (s, _) {
			if (!s.includes("@")) return t.call(this, s, _);
			l.innerHTML = `<span ${s}="${_}"></span>`;
			let b = l.firstElementChild.getAttributeNode(s);
			l.firstElementChild.removeAttributeNode(b), this.setAttributeNode(b);
		};
	}
	function q(t) {
		t.morph = N;
	}
	document.addEventListener("alpine:init", () => {
		window.Alpine.plugin(q);
	});
})();
