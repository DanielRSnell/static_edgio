(() => {
	function m(t) {
		let e = () => {
			let n,
				l = localStorage;
			return t.interceptor(
				(r, i, a, o, d) => {
					let s = n || `_x_${o}`,
						u = f(s, l) ? g(s, l) : r;
					return (
						a(u),
						t.effect(() => {
							let c = i();
							p(s, c, l), a(c);
						}),
						u
					);
				},
				(r) => {
					(r.as = (i) => ((n = i), r)), (r.using = (i) => ((l = i), r));
				},
			);
		};
		Object.defineProperty(t, "$persist", { get: () => e() }),
			t.magic("persist", e),
			(t.persist = (n, { get: l, set: r }, i = localStorage) => {
				let a = f(n, i) ? g(n, i) : l();
				r(a),
					t.effect(() => {
						let o = l();
						p(n, o, i), r(o);
					});
			});
	}
	function f(t, e) {
		return e.getItem(t) !== null;
	}
	function g(t, e) {
		return JSON.parse(e.getItem(t, e));
	}
	function p(t, e, n) {
		n.setItem(t, JSON.stringify(e));
	}
	document.addEventListener("alpine:init", () => {
		window.Alpine.plugin(m);
	});
})();
