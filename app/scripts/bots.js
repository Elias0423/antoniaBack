!function (e, n, t, r) {
    
    function s() {
        try {
            var e;
            if ((e = "string" == typeof this.response ? JSON.parse(this.response) : this.response).url) {
                var t = n.getElementsByTagName("script")[0], r = n.createElement("script");
                r.async = !0, r.src = e.url, t.parentNode.insertBefore(r, t)
            }
        } catch (e) {
        }
    }
    var o, p, a, c = [], i = []; e[t] = {
        init: function () {
            o = arguments;
            var e = {
                then: function (n) {
                    return i.push({ type: "t", next: n }), e
                },
                catch: function (n) {
                    return i.push({ type: "c", next: n }), e
                }
            }; return e
        }, on: function () {
            c.push(arguments)
        }, render: function () {
            p = arguments
        }, destroy: function () {
            a = arguments
        }
    }, e.__onWebMessengerHostReady__ = function (n) {
        if (delete e.__onWebMessengerHostReady__, e[t] = n, o)
            for (var r = n.init.apply(n, o), s = 0; s < i.length; s++) {
                var u = i[s]; r = "t" === u.type ? r.then(u.next) : r.catch(u.next)
            } p && n.render.apply(n, p), a && n.destroy.apply(n, a);
        for (s = 0; s < c.length; s++)n.on.apply(n, c[s])
    };
    var u = new XMLHttpRequest;
    u.addEventListener("load", s),
        u.open("GET", "http://localhost:3000/dist/loader.json", !0),
        u.responseType = "json", u.send()
}(window, document, "Bots");